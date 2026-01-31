import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SCULPTURE_CATEGORIES } from "@/lib/sculpture-categories";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { decodeHtmlEntities } from "@/lib/text";

const sculptureFAQs = [
  {
    question: "What materials are most sculptures made from?",
    answer: "<strong>Bronze</strong>, <strong>marble</strong>, and <strong>stone</strong> are the most common materials. Bronze allows fine detail and survives outdoors. Marble has a translucent quality that mimics skin. Stone varies widely, from soft limestone to hard granite.",
  },
  {
    question: "What is the most famous sculpture in the world?",
    answer: "Michelangelo's <a href=\"/apps/masterpieces/art/michelangelo-david\"><strong>David</strong></a> (1504) at the <a href=\"/apps/masterpieces/museum/galleria-dellaccademia\"><strong>Galleria dell'Accademia</strong></a> in Florence is widely considered the most recognized sculpture. The Venus de Milo and Rodin's The Thinker are close behind.",
  },
  {
    question: "Where can I see famous sculptures?",
    answer: "The <a href=\"/apps/masterpieces/museum/the-cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>, <a href=\"/apps/masterpieces/museum/the-art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, <a href=\"/apps/masterpieces/museum/the-metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> all have major sculpture collections.",
  },
  {
    question: "What's the difference between carving and casting?",
    answer: "<strong>Carving</strong> removes material (marble, stone, wood) to reveal the form. <strong>Casting</strong> pours molten metal (usually bronze) into a mold. Carving is subtractive, casting is additive. Both techniques have been used for thousands of years.",
  },
  {
    question: "How old are the oldest known sculptures?",
    answer: "The oldest known figurative sculpture is the <strong>Lion-man of Hohlenstein-Stadel</strong>, carved from mammoth ivory roughly 40,000 years ago. Ancient Egyptian sculptures date back over 5,000 years and remain remarkably intact.",
  },
];

export const metadata: Metadata = {
  title: "Famous Sculptures & Where to Find Them | Masterpiece Finder",
  description:
    "Explore famous sculptures by material, origin, and museum. Bronze, marble, terracotta, and stone works from ancient civilizations to modern masters. Find where to see them.",
  keywords: "famous sculptures, bronze sculpture, marble sculpture, ancient sculptures, where to see sculptures, sculpture museums",
};

export const dynamic = "force-dynamic";

export default async function SculpturesPage() {
  // Get all sculptures with basic info
  const totalSculptures = await prisma.artwork.count({
    where: { artworkType: "sculpture" },
  });

  // Get featured sculptures (T1 and T2)
  const rawFeatured = await prisma.artwork.findMany({
    where: {
      artworkType: "sculpture",
      searchVolumeTier: { in: [1, 2] },
      imageUrl: { not: null },
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, city: true } },
    },
    orderBy: { searchVolumeTier: "asc" },
    take: 48,
  });

  const featured = rawFeatured.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum
      ? { ...a.Museum, name: decodeHtmlEntities(a.Museum.name), city: decodeHtmlEntities(a.Museum.city) }
      : null,
  }));

  // Get top sculptors (artists with most sculptures)
  const topSculptors = await prisma.$queryRaw<
    Array<{ id: string; name: string; slug: string; sculpture_count: bigint }>
  >`
    SELECT a.id, a.name, a.slug, COUNT(aw.id) as sculpture_count
    FROM "Artist" a
    JOIN "Artwork" aw ON aw."artistId" = a.id
    WHERE aw."artworkType" = 'sculpture'
    GROUP BY a.id, a.name, a.slug
    ORDER BY sculpture_count DESC
    LIMIT 12
  `;

  // Get top museums for sculptures
  const topMuseums = await prisma.$queryRaw<
    Array<{ id: string; name: string; slug: string; city: string; country: string; sculpture_count: bigint; image_url: string | null }>
  >`
    SELECT m.id, m.name, m.slug, m.city, m.country, COUNT(aw.id) as sculpture_count, m."imageUrl" as image_url
    FROM "Museum" m
    JOIN "Artwork" aw ON aw."museumId" = m.id
    WHERE aw."artworkType" = 'sculpture'
    GROUP BY m.id, m.name, m.slug, m.city, m.country, m."imageUrl"
    ORDER BY sculpture_count DESC
    LIMIT 8
  `;

  // Get counts per category
  const categoryCounts = await Promise.all(
    SCULPTURE_CATEGORIES.map(async (cat) => {
      let count: number;
      if (cat.artistPatterns && cat.artistPatterns.length > 0) {
        // For origin-based categories, count by artist name
        count = await prisma.artwork.count({
          where: {
            artworkType: "sculpture",
            OR: cat.artistPatterns.map((p) => ({
              Artist: { name: { contains: p, mode: "insensitive" as const } },
            })),
          },
        });
      } else {
        count = await prisma.artwork.count({
          where: {
            artworkType: "sculpture",
            OR: cat.mediumPatterns.map((p) => ({
              medium: { contains: p, mode: "insensitive" as const },
            })),
          },
        });
      }
      return { ...cat, count };
    })
  );

  // Split into material-based and origin-based, filter out empty
  const materialCategories = categoryCounts
    .filter((c) => !c.artistPatterns?.length && c.count > 0)
    .sort((a, b) => b.count - a.count);
  const originCategories = categoryCounts
    .filter((c) => c.artistPatterns && c.artistPatterns.length > 0 && c.count > 0)
    .sort((a, b) => b.count - a.count);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Sculptures" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">Home</Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">Sculptures</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {totalSculptures.toLocaleString()} Sculptures
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Famous Sculptures & Where to Find Them
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              From ancient bronze figures to Renaissance marble masterworks. Browse by material, origin, or museum to find sculptures you can visit in person.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* By Material */}
            {materialCategories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">Browse by Material</h2>
                <p className="text-neutral-500 mb-6">
                  Each material gives sculpture a different character. Bronze captures fine detail, marble mimics flesh, and wood warms any space.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {materialCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/sculptures/${cat.slug}`}
                      className="group bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 hover:shadow-md transition-all text-center"
                    >
                      <div className="text-2xl font-bold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                        {cat.count}
                      </div>
                      <div className="text-sm font-medium text-neutral-700 mt-1">{cat.name.replace(" Sculptures", "")}</div>
                      <div className="text-xs text-neutral-400 mt-1">sculptures</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* By Origin */}
            {originCategories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">Browse by Origin</h2>
                <p className="text-neutral-500 mb-6">
                  Ancient civilizations developed distinct sculptural traditions that still influence artists today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {originCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/sculptures/${cat.slug}`}
                      className="group flex items-center gap-4 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold shrink-0">
                        {cat.count}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                          {cat.name}
                        </div>
                        <div className="text-xs text-neutral-500">View collection</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Sculptures */}
            {featured.length > 0 && (
              <section className="mb-12">
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">Featured Sculptures</h2>
                <p className="text-neutral-500 mb-6">
                  {featured.length} notable sculptures from our collection, sorted by significance.
                </p>
                <div className="masonry-grid">
                  {featured.map((artwork, index) => (
                    <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-5">
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-5 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }} />
                </div>
                <div className="relative">
                  <h3 className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">Sculpture Collection</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-[#C9A84C]">{totalSculptures.toLocaleString()}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Sculptures</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{topSculptors.length}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Sculptors</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{topMuseums.length}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Museums</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{materialCategories.length + originCategories.length}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Categories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Sculptors */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Top Sculptors
                  </h3>
                </div>
                <div className="p-3 space-y-1">
                  {topSculptors.map((sculptor, index) => (
                    <Link
                      key={sculptor.id}
                      href={`/artist/${sculptor.slug}`}
                      className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-neutral-50 transition-all group"
                    >
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500 shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
                          {decodeHtmlEntities(sculptor.name)}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {Number(sculptor.sculpture_count)} sculptures
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Top Museums */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Top Sculpture Museums
                  </h3>
                </div>
                <div className="p-3 space-y-1">
                  {topMuseums.map((museum) => (
                    <Link
                      key={museum.id}
                      href={`/museum/${museum.slug}`}
                      className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-neutral-50 transition-all group"
                    >
                      {museum.image_url ? (
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                          <Image src={museum.image_url} alt="" fill className="object-cover" sizes="40px" unoptimized />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm font-bold shrink-0">
                          {decodeHtmlEntities(museum.name).charAt(0)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
                          {decodeHtmlEntities(museum.name)}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {decodeHtmlEntities(museum.city)} · {Number(museum.sculpture_count)} sculptures
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200/50">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Did You Know?
                </h3>
                <div className="space-y-3 text-sm">
                  <p className="text-neutral-700">
                    The <span className="font-semibold text-amber-700">lost-wax casting</span> method for bronze sculptures hasn't fundamentally changed since 3000 BCE.
                  </p>
                  <p className="text-neutral-700">
                    Most ancient <span className="font-semibold text-amber-700">Greek marble sculptures</span> were originally painted in bright colors, not the white we see today.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <FAQSchema items={sculptureFAQs} />
        <FAQ items={sculptureFAQs} title="Common Questions About Sculptures" wide />

        {/* CTA */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Sculpture-Inspired Art for Your Walls
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              <span className="text-white">Luxury wall art</span> with the same drama and dimension as gallery sculptures. Canvas prints that command attention.
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
