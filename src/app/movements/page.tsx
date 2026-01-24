import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Movements & Eras | Renaissance to Pop Art",
  description:
    "Explore art history by movement. From Renaissance to Impressionism to Pop Art. Discover key artists, masterpieces, and where to see them.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

// Group movements by century/era
function getEra(startYear: number | null): string {
  if (!startYear) return "Unknown";
  if (startYear < 1400) return "Medieval";
  if (startYear < 1600) return "Renaissance";
  if (startYear < 1800) return "17th-18th Century";
  if (startYear < 1900) return "19th Century";
  if (startYear < 2000) return "20th Century";
  return "Contemporary";
}

export default async function MovementsPage() {
  const rawMovements = await prisma.movement.findMany({
    include: {
      Artist: {
        take: 4,
        include: {
          Artwork: {
            where: { imageUrl: { not: null } },
            take: 1,
            orderBy: { searchVolumeTier: "asc" },
            select: { imageUrl: true },
          },
          _count: { select: { Artwork: true } },
        },
      },
      _count: {
        select: { Artist: true },
      },
    },
    orderBy: { startYear: "asc" },
  });

  // Map to lowercase and calculate artwork counts
  const movementsWithCounts = rawMovements.map((movement) => {
    const artists = movement.Artist.map((a) => ({
      ...a,
      artworks: a.Artwork,
      _count: { artworks: a._count.Artwork },
    }));
    const artworkCount = artists.reduce(
      (sum, artist) => sum + artist._count.artworks,
      0
    );
    return {
      ...movement,
      artists,
      _count: { artists: movement._count.Artist },
      artworkCount,
      era: getEra(movement.startYear),
    };
  });

  // Calculate stats
  const totalMovements = movementsWithCounts.length;
  const totalArtists = movementsWithCounts.reduce((sum, m) => sum + m._count.artists, 0);
  const totalArtworks = movementsWithCounts.reduce((sum, m) => sum + m.artworkCount, 0);
  const earliestYear = Math.min(...movementsWithCounts.filter(m => m.startYear).map(m => m.startYear!));
  const latestYear = Math.max(...movementsWithCounts.filter(m => m.endYear).map(m => m.endYear!));

  // Group by era for sidebar
  const eras = [...new Set(movementsWithCounts.map(m => m.era))];
  const movementsByEra = eras.map(era => ({
    era,
    count: movementsWithCounts.filter(m => m.era === era).length,
  }));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">Art Movements</span>
        </nav>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* Hero Header */}
            <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {earliestYear} – {latestYear}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Art Movements & Eras
                </h1>
                <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
                  From the Renaissance to Pop Art, explore the movements that shaped art history. Each links to key artists and famous works.
                </p>
              </div>
            </div>

            {/* Mobile sidebar */}
            <div className="lg:hidden space-y-4 mb-8">
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Overview</h3>
                <dl className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <dd className="text-2xl font-bold text-neutral-900">{totalMovements}</dd>
                    <dt className="text-xs text-neutral-500">Movements</dt>
                  </div>
                  <div>
                    <dd className="text-2xl font-bold text-neutral-900">{totalArtists}</dd>
                    <dt className="text-xs text-neutral-500">Artists</dt>
                  </div>
                  <div>
                    <dd className="text-2xl font-bold text-neutral-900">{totalArtworks}</dd>
                    <dt className="text-xs text-neutral-500">Artworks</dt>
                  </div>
                </dl>
              </div>
            </div>

            {/* Movements Grid */}
            <div className="space-y-4">
              {movementsWithCounts.map((movement) => {
                const previewImages = movement.artists
                  .map((a) => a.artworks[0]?.imageUrl)
                  .filter(Boolean)
                  .slice(0, 3);

                return (
                  <Link
                    key={movement.id}
                    href={`/movement/${movement.slug}`}
                    className="flex flex-col sm:flex-row bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all group"
                  >
                    {/* Preview images */}
                    {previewImages.length > 0 && (
                      <div className="sm:w-48 h-32 sm:h-auto flex sm:flex-col shrink-0">
                        {previewImages.slice(0, 2).map((url, idx) => (
                          <div key={idx} className="flex-1 relative">
                            <Image
                              src={url!}
                              alt={`${movement.name} artwork`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 50vw, 192px"
                              unoptimized={true}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Era badge */}
                          <div className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-2">
                            {movement.startYear}
                            {movement.endYear ? ` – ${movement.endYear}` : "+"}
                          </div>

                          <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors mb-1">
                            {movement.name}
                          </h2>

                          {movement.description && (
                            <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                              {movement.description}
                            </p>
                          )}

                          {/* Key characteristics */}
                          {movement.keyCharacteristics.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {movement.keyCharacteristics.slice(0, 3).map((char) => (
                                <span
                                  key={char}
                                  className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded"
                                >
                                  {char}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Stats */}
                          <div className="flex items-center gap-3 text-sm text-neutral-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {movement._count.artists} artists
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {movement.artworkCount} works
                            </span>
                          </div>
                        </div>

                        <svg className="w-5 h-5 text-neutral-300 group-hover:text-[#C9A84C] transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">At a Glance</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Movements</dt>
                    <dd className="text-neutral-900 font-medium">{totalMovements}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artists</dt>
                    <dd className="text-neutral-900 font-medium">{totalArtists}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artworks</dt>
                    <dd className="text-neutral-900 font-medium">{totalArtworks}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Time Span</dt>
                    <dd className="text-neutral-900 font-medium">{latestYear - earliestYear}+ years</dd>
                  </div>
                </dl>
              </div>

              {/* Browse by Era */}
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                <h3 className="font-semibold text-neutral-900 mb-3">Browse by Era</h3>
                <div className="space-y-2">
                  {movementsByEra.map(({ era, count }) => (
                    <div
                      key={era}
                      className="flex items-center justify-between text-sm bg-white rounded-lg px-3 py-2 border border-amber-200/50"
                    >
                      <span className="text-neutral-700">{era}</span>
                      <span className="text-neutral-500 text-xs">{count} movements</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Preview */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Popular Movements</h3>
                <div className="space-y-3">
                  {movementsWithCounts
                    .sort((a, b) => b._count.artists - a._count.artists)
                    .slice(0, 5)
                    .map((movement) => (
                      <Link
                        key={movement.id}
                        href={`/movement/${movement.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        {movement.artists[0]?.artworks[0]?.imageUrl && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
                            <Image
                              src={movement.artists[0].artworks[0].imageUrl}
                              alt={movement.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                              unoptimized
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
                            {movement.name}
                          </p>
                          <p className="text-xs text-neutral-500">{movement._count.artists} artists</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Art History for Your Walls
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Gallery-quality canvas prints from every era and movement.
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
