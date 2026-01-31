import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { SCULPTURE_CATEGORIES, getCategoryBySlug, buildCategoryWhereClause } from "@/lib/sculpture-categories";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { decodeHtmlEntities } from "@/lib/text";
import { createMetaTitle, createMetaDescription } from "@/lib/seo";

const ARTWORKS_PER_PAGE = 48;

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: createMetaTitle(`${category.name}: Where to See Them | Masterpiece Finder`),
    description: createMetaDescription(category.description),
  };
}

export default async function SculptureCategoryPage({ params, searchParams }: Props) {
  const { category: slug } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const whereClause = buildCategoryWhereClause(category);

  const totalCount = await prisma.artwork.count({ where: whereClause });
  const totalPages = Math.ceil(totalCount / ARTWORKS_PER_PAGE);

  // Use two queries: images first (by tier), then no-images (by tier)
  // This avoids Prisma's lack of CASE WHEN in orderBy
  const withImageWhere = { ...whereClause, imageUrl: { not: null } };
  const noImageWhere = { ...whereClause, imageUrl: null };
  const withImageCount = await prisma.artwork.count({ where: withImageWhere });

  const skip = (currentPage - 1) * ARTWORKS_PER_PAGE;
  const includeOpts = { Artist: { select: { name: true } }, Museum: { select: { name: true, city: true } } } as const;
  const orderOpts = [{ searchVolumeTier: "asc" as const }];

  let rawArtworks;
  if (skip + ARTWORKS_PER_PAGE <= withImageCount) {
    // Entire page is within images section
    rawArtworks = await prisma.artwork.findMany({
      where: withImageWhere, include: includeOpts, orderBy: orderOpts,
      skip, take: ARTWORKS_PER_PAGE,
    });
  } else if (skip >= withImageCount) {
    // Entire page is within no-images section
    rawArtworks = await prisma.artwork.findMany({
      where: noImageWhere, include: includeOpts, orderBy: orderOpts,
      skip: skip - withImageCount, take: ARTWORKS_PER_PAGE,
    });
  } else {
    // Page straddles both sections
    const imgTake = withImageCount - skip;
    const noImgTake = ARTWORKS_PER_PAGE - imgTake;
    const [withImg, noImg] = await Promise.all([
      prisma.artwork.findMany({
        where: withImageWhere, include: includeOpts, orderBy: orderOpts,
        skip, take: imgTake,
      }),
      prisma.artwork.findMany({
        where: noImageWhere, include: includeOpts, orderBy: orderOpts,
        take: noImgTake,
      }),
    ]);
    rawArtworks = [...withImg, ...noImg];
  }

  const artworks = rawArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum
      ? { ...a.Museum, name: decodeHtmlEntities(a.Museum.name), city: decodeHtmlEntities(a.Museum.city) }
      : null,
  }));

  // Get top artists in this category using Prisma groupBy
  const artistCounts = await prisma.artwork.groupBy({
    by: ["artistId"],
    where: whereClause,
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
    take: 10,
  });

  const artistIds = artistCounts.filter(a => a.artistId).map(a => a.artistId!);
  const artistDetails = artistIds.length > 0
    ? await prisma.artist.findMany({
        where: { id: { in: artistIds } },
        select: { id: true, name: true, slug: true },
      })
    : [];

  const topArtists = artistCounts
    .filter(a => a.artistId)
    .map(a => {
      const detail = artistDetails.find(d => d.id === a.artistId);
      return detail ? { ...detail, count: a._count.id } : null;
    })
    .filter(Boolean) as Array<{ id: string; name: string; slug: string; count: number }>;

  // Related categories (exclude current)
  const relatedCategories = SCULPTURE_CATEGORIES.filter((c) => c.slug !== slug).slice(0, 6);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Sculptures", href: "/sculptures" },
    { name: category.name },
  ];

  const getPaginationLink = (pageNum: number) => {
    return pageNum === 1 ? `/sculptures/${slug}` : `/sculptures/${slug}?page=${pageNum}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">Home</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/sculptures" className="hover:text-neutral-900">Sculptures</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{category.name}</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {totalCount.toLocaleString()} sculptures
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[75%]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-neutral-900">
                {category.name}
              </h2>
              {totalPages > 1 && (
                <span className="text-sm text-neutral-500">Page {currentPage} of {totalPages}</span>
              )}
            </div>
            <p className="text-neutral-500 mb-6">
              {totalCount} sculptures in this category. Click any work to see details and museum location.
            </p>

            {artworks.length > 0 ? (
              <>
                <div className="masonry-grid-3col">
                  {artworks.map((artwork, index) => (
                    <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10">
                    {currentPage > 1 ? (
                      <Link href={getPaginationLink(currentPage - 1)} className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors">
                        Previous
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">Previous</span>
                    )}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((pageNum) => {
                          if (pageNum === 1 || pageNum === totalPages) return true;
                          if (Math.abs(pageNum - currentPage) <= 1) return true;
                          return false;
                        })
                        .map((pageNum, index, arr) => {
                          const prevPage = arr[index - 1];
                          const showEllipsis = prevPage && pageNum - prevPage > 1;
                          return (
                            <span key={pageNum} className="flex items-center gap-1">
                              {showEllipsis && <span className="px-2 text-neutral-400">...</span>}
                              <Link
                                href={getPaginationLink(pageNum)}
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                  pageNum === currentPage
                                    ? "bg-black text-white"
                                    : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                                }`}
                              >
                                {pageNum}
                              </Link>
                            </span>
                          );
                        })}
                    </div>
                    {currentPage < totalPages ? (
                      <Link href={getPaginationLink(currentPage + 1)} className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors">
                        Next
                      </Link>
                    ) : (
                      <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">Next</span>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-neutral-100 rounded-lg p-8 text-center">
                <p className="text-neutral-500">No sculptures found in this category yet.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              {/* Related Categories */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 text-sm">Other Categories</h3>
                </div>
                <div className="p-3 space-y-1">
                  {relatedCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/sculptures/${cat.slug}`}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#C9A84C] transition-all"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to all */}
              <Link
                href="/sculptures"
                className="block text-center text-sm text-[#C9A84C] hover:underline"
              >
                ← All Sculptures
              </Link>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Art for Your Walls
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Gallery-quality <span className="text-white">luxury wall art</span> inspired by the world's greatest sculptures and paintings.
            </p>
            <a
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Browse Collection
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
