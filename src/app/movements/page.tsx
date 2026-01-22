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

export default async function MovementsPage() {
  const rawMovements = await prisma.movement.findMany({
    include: {
      Artist: {
        take: 4,
        include: {
          Artwork: {
            where: { imageUrl: { not: null } }, // Only get artworks with images
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
    };
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" style={{ color: '#999' }} className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" style={{ color: '#666' }}>/</span>
            <span style={{ color: '#fff' }}>Movements</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#fff' }}>
            Art Movements & Eras
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#aaa' }}>
            Renaissance, Impressionism, Cubism, Pop Art. Each movement below links to its key artists and their most famous works.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
          Timeline of Art History
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:-translate-x-0.5" />

          {movementsWithCounts.map((movement, index) => {
            // Get preview images from artist artworks
            const previewImages = movement.artists
              .map((a) => a.artworks[0]?.imageUrl)
              .filter(Boolean)
              .slice(0, 3);

            return (
              <div
                key={movement.id}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow transform -translate-x-1/2 ${
                    index % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                  }`}
                  style={{ top: "24px" }}
                />

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <Link
                    href={`/movement/${movement.slug}`}
                    className="block bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Preview images */}
                    {previewImages.length > 0 && (
                      <div className="h-32 flex">
                        {previewImages.map((url, idx) => (
                          <div
                            key={idx}
                            className="flex-1 relative"
                            style={{ width: `${100 / previewImages.length}%` }}
                          >
                            <Image
                              src={url!}
                              alt={`${movement.name} artwork`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 33vw, 20vw"
                              unoptimized={url!.includes('wikimedia.org') || url!.includes('wikiart.org')}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-6">
                      {/* Era badge */}
                      <div className="text-sm text-amber-600 font-medium mb-2">
                        {movement.startYear}
                        {movement.endYear
                          ? ` - ${movement.endYear}`
                          : " - Present"}
                      </div>

                      <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors mb-2">
                        {movement.name}
                      </h3>

                      {movement.description && (
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                          {movement.description}
                        </p>
                      )}

                      {/* Key characteristics */}
                      {movement.keyCharacteristics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {movement.keyCharacteristics.slice(0, 3).map((char) => (
                            <span
                              key={char}
                              className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span>{movement._count.artists} artists</span>
                        <span>{movement.artworkCount} works</span>
                        <span className="ml-auto text-neutral-500 group-hover:text-black transition-colors">
                          Explore
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Art History for Your Walls
          </h2>
          <p className="text-neutral-400 mb-4">
            Gallery-quality prints from every era and movement.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Browse Collection
          </a>
        </section>
      </div>
    </div>
  );
}
