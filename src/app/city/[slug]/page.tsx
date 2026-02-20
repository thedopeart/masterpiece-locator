import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import MuseumImage from "@/components/MuseumImage";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQ, { FAQSchema } from "@/components/FAQ";
import { cityMetaTitle, cityMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";

const ARTWORKS_PER_PAGE = 40;

// Generate factual FAQs - only data we actually have, no templated filler
function generateCityFAQs(city: {
  name: string;
  museums: { name: string; ticketPriceRange: string | null }[];
  totalArtworks: number;
}) {
  const faqs = [];

  // FAQ 1: What museums are in this city? - factual only
  if (city.museums.length > 0) {
    const museumList = city.museums.slice(0, 5).map(m => `<strong>${m.name}</strong>`).join(", ");
    faqs.push({
      question: `What art museums are in ${city.name}?`,
      answer: museumList + (city.museums.length > 5 ? ` and ${city.museums.length - 5} more.` : "."),
    });
  }

  // FAQ 2: Ticket prices - only if we have real data
  const museumsWithPrices = city.museums.filter(m => m.ticketPriceRange);
  if (museumsWithPrices.length > 0) {
    const priceList = museumsWithPrices.slice(0, 3).map(m => `<strong>${m.name}</strong>: ${m.ticketPriceRange}`).join(". ");
    faqs.push({
      question: `How much do ${city.name} museums cost?`,
      answer: priceList + ".",
    });
  }

  return faqs;
}

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);
  const cityName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const rawMuseums = await prisma.museum.findMany({
    where: {
      city: { equals: cityName, mode: "insensitive" },
    },
    include: { _count: { select: { Artwork: true } } },
  });

  if (rawMuseums.length === 0) notFound();

  const totalArtworks = rawMuseums.reduce((sum, m) => sum + m._count.Artwork, 0);

  // Keyword-focused with character limits (60 title, 160 description)
  const topMuseum = rawMuseums[0]?.name || null;

  const canonicalBase = `https://luxurywallart.com/apps/masterpieces/city/${slug}`;
  const canonical = page > 1 ? `${canonicalBase}?page=${page}` : canonicalBase;

  return {
    title: cityMetaTitle(cityName, rawMuseums.length, totalArtworks),
    description: cityMetaDescription(cityName, rawMuseums.length, totalArtworks, topMuseum),
    ...(page > 1 && { robots: { index: false, follow: true } }),
    alternates: { canonical },
  };
}

export default async function CityPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  // Convert slug to city name
  const cityName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Get museums (without artworks) for the city info section
  const rawMuseums = await prisma.museum.findMany({
    where: {
      city: { equals: cityName, mode: "insensitive" },
    },
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        take: 1,
        select: { imageUrl: true },
        orderBy: { imageUrl: { sort: "desc", nulls: "last" } },
      },
    },
    orderBy: { Artwork: { _count: "desc" } },
  });

  if (rawMuseums.length === 0) notFound();

  const museumIds = rawMuseums.map(m => m.id);

  // Get total artwork count and paginated artworks in parallel
  const [totalArtworks, paginatedArtworks] = await Promise.all([
    prisma.artwork.count({
      where: { museumId: { in: museumIds } },
    }),
    prisma.artwork.findMany({
      where: { museumId: { in: museumIds } },
      include: {
        Artist: { select: { name: true } },
        Museum: { select: { name: true, city: true } },
      },
      orderBy: [
        { imageUrl: { sort: "desc", nulls: "last" } },
        { searchVolumeTier: "asc" },
      ],
      skip: (currentPage - 1) * ARTWORKS_PER_PAGE,
      take: ARTWORKS_PER_PAGE,
    }),
  ]);

  // Map museums for display
  const museums = rawMuseums.map((m) => ({
    ...m,
    name: decodeHtmlEntities(m.name),
    city: decodeHtmlEntities(m.city),
    country: decodeHtmlEntities(m.country),
    address: decodeHtmlEntities(m.address),
    _count: { artworks: m._count.Artwork },
    artworks: m.Artwork.map((a) => ({
      ...a,
    })),
  }));

  const country = museums[0].country;

  // Map paginated artworks for display
  const allArtworks = paginatedArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Get top artists who have artworks in museums in this city
  const rawArtists = await prisma.artist.findMany({
    where: {
      Artwork: { some: { museumId: { in: museumIds } } },
    },
    include: { _count: { select: { Artwork: true } } },
    orderBy: { Artwork: { _count: "desc" } },
    take: 8,
  });

  const artists = rawArtists.map((a) => ({
    ...a,
    name: decodeHtmlEntities(a.name),
    _count: { artworks: a._count.Artwork },
  }));

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Cities", href: "/cities" },
    { name: cityName },
  ];

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Header */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{cityName}</h1>
          <p className="text-neutral-300 text-xl mb-4">{country}</p>
          <p className="text-neutral-400">
            {museums.length} museum{museums.length !== 1 ? "s" : ""} •{" "}
            {totalArtworks} masterpiece{totalArtworks !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/cities" className="hover:text-neutral-900">
            Cities
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{cityName}</span>
        </nav>

        {/* Museums in this City */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Museums in {cityName}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {museums.map((museum) => (
              <Link
                key={museum.id}
                href={`/museum/${museum.slug}`}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-neutral-100 relative">
                  <MuseumImage
                    src={museum.imageUrl}
                    fallbackSrc={museum.artworks[0]?.imageUrl || null}
                    alt={museum.name}
                    placeholderLetter={museum.name.charAt(0)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#C9A84C] transition-colors">
                      {museum.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  {museum.address && (
                    <p className="text-sm text-neutral-500 mb-2 truncate">
                      {museum.address}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">
                      {museum._count.artworks} masterpiece
                      {museum._count.artworks !== 1 ? "s" : ""}
                    </span>
                    {museum.ticketPriceRange && (
                      <span className="text-sm text-neutral-500">
                        {museum.ticketPriceRange}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Artists Found Here */}
        {artists.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Artists in {cityName}
            </h2>
            <div className="flex flex-wrap gap-3">
              {artists.map((artist) => (
                <Link
                  key={artist.id}
                  href={`/artist/${artist.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  {artist.imageUrl && (
                    <div className="w-6 h-6 rounded-full overflow-hidden relative">
                      <Image
                        src={artist.imageUrl}
                        alt={artist.name}
                        fill
                        className="object-cover"
                        sizes="24px"
                        unoptimized={true}
                      />
                    </div>
                  )}
                  <span className="text-sm font-medium text-neutral-700">
                    {artist.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Masterpieces */}
        <section id="artworks" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Masterpieces in {cityName}
          </h2>
          {allArtworks.length > 0 ? (
            <>
              <div className="masonry-grid">
                {allArtworks.map((artwork, index) => (
                  <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
                ))}
              </div>

              {/* Pagination */}
              {totalArtworks > ARTWORKS_PER_PAGE && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  {currentPage > 1 && (
                    <Link
                      href={`/city/${slug}?page=${currentPage - 1}#artworks`}
                      className="px-4 py-3 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      Previous
                    </Link>
                  )}

                  {/* Page numbers */}
                  {(() => {
                    const totalPages = Math.ceil(totalArtworks / ARTWORKS_PER_PAGE);
                    const pages = [];
                    const maxVisible = 5;

                    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
                    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

                    if (endPage - startPage + 1 < maxVisible) {
                      startPage = Math.max(1, endPage - maxVisible + 1);
                    }

                    // First page + ellipsis
                    if (startPage > 1) {
                      pages.push(
                        <Link
                          key={1}
                          href={`/city/${slug}?page=1#artworks`}
                          className="w-10 h-10 flex items-center justify-center text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          1
                        </Link>
                      );
                      if (startPage > 2) {
                        pages.push(
                          <span key="ellipsis-start" className="px-2 text-neutral-400">...</span>
                        );
                      }
                    }

                    // Page numbers
                    for (let i = startPage; i <= endPage; i++) {
                      pages.push(
                        <Link
                          key={i}
                          href={`/city/${slug}?page=${i}#artworks`}
                          className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                            i === currentPage
                              ? "bg-neutral-900 text-white"
                              : "text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50"
                          }`}
                        >
                          {i}
                        </Link>
                      );
                    }

                    // Last page + ellipsis
                    if (endPage < totalPages) {
                      if (endPage < totalPages - 1) {
                        pages.push(
                          <span key="ellipsis-end" className="px-2 text-neutral-400">...</span>
                        );
                      }
                      pages.push(
                        <Link
                          key={totalPages}
                          href={`/city/${slug}?page=${totalPages}#artworks`}
                          className="w-10 h-10 flex items-center justify-center text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          {totalPages}
                        </Link>
                      );
                    }

                    return pages;
                  })()}

                  {currentPage < Math.ceil(totalArtworks / ARTWORKS_PER_PAGE) && (
                    <Link
                      href={`/city/${slug}?page=${currentPage + 1}#artworks`}
                      className="px-4 py-3 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      Next
                    </Link>
                  )}
                </div>
              )}

              {/* Total count */}
              <p className="text-center text-neutral-500 text-sm mt-4">
                Showing {Math.min((currentPage - 1) * ARTWORKS_PER_PAGE + 1, totalArtworks)}-{Math.min(currentPage * ARTWORKS_PER_PAGE, totalArtworks)} of {totalArtworks} masterpieces
              </p>
            </>
          ) : (
            <div className="bg-neutral-100 rounded-lg p-8 text-center">
              <p className="text-neutral-500">
                No artworks catalogued for {cityName} yet.
              </p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        {(() => {
          const faqs = generateCityFAQs({
            name: cityName,
            museums: museums.map(m => ({ name: m.name, ticketPriceRange: m.ticketPriceRange })),
            totalArtworks,
          });
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`Visiting ${cityName}`} />
            </>
          ) : null;
        })()}

        {/* CTA */}
        <section className="mt-12 bg-neutral-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Can&apos;t Make It to {cityName}?
          </h2>
          <p className="text-neutral-600 mb-4">
            Bring <strong>luxury wall art</strong> into your home with our museum-quality canvas collection.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Explore Our Collection
          </a>
        </section>
      </div>
    </div>
  );
}
