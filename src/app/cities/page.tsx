import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Art Cities | Where to Find Famous Masterpieces",
  description:
    "Discover art by city. From Paris to New York to Amsterdam. See what masterpieces you can find in each location.",
};

export default async function CitiesPage() {
  // Get all unique cities with museums
  const rawMuseums = await prisma.museum.findMany({
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        where: { imageUrl: { not: null } }, // Only get artworks with images
        take: 4,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true, title: true },
      },
    },
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Map to lowercase for components
  const museums = rawMuseums.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
    artworks: m.Artwork,
  }));

  // Group by city
  const byCity = museums.reduce(
    (acc, museum) => {
      const key = `${museum.city}, ${museum.country}`;
      if (!acc[key]) {
        acc[key] = {
          city: museum.city,
          country: museum.country,
          museums: [],
          totalArtworks: 0,
          previewImages: [],
        };
      }
      acc[key].museums.push(museum);
      acc[key].totalArtworks += museum._count.artworks;
      // Collect preview images from artworks
      museum.artworks.forEach((a) => {
        if (a.imageUrl && acc[key].previewImages.length < 4) {
          acc[key].previewImages.push(a.imageUrl);
        }
      });
      return acc;
    },
    {} as Record<
      string,
      {
        city: string;
        country: string;
        museums: typeof museums;
        totalArtworks: number;
        previewImages: string[];
      }
    >
  );

  // Sort by artwork count
  const cities = Object.values(byCity).sort(
    (a, b) => b.totalArtworks - a.totalArtworks
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" style={{ color: '#999' }} className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" style={{ color: '#666' }}>/</span>
            <span style={{ color: '#fff' }}>Cities</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#fff' }}>
            Art Cities Around the World
          </h1>
          <p className="text-lg max-w-2xl mb-8" style={{ color: '#aaa' }}>
            Paris, Amsterdam, New York, Madrid. Pick a city, see what museums are there, and find out what&apos;s hanging on their walls.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {cities.length}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Cities</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {museums.length}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Museums</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {cities.reduce((sum, c) => sum + c.totalArtworks, 0)}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Artworks</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Browse by Destination
        </h2>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((cityData) => {
            const citySlug = cityData.city
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <Link
                key={`${cityData.city}-${cityData.country}`}
                href={`/city/${citySlug}`}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Preview Images Grid */}
                <div className="h-40 bg-neutral-100 relative">
                  {cityData.previewImages.length > 0 ? (
                    <div className="grid grid-cols-2 h-full">
                      {cityData.previewImages.slice(0, 4).map((url, idx) => (
                        <div key={idx} className="relative">
                          <Image
                            src={url}
                            alt={`Art in ${cityData.city}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 25vw, 15vw"
                            unoptimized={url.includes('wikimedia.org')}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <span className="text-4xl font-light text-neutral-400">{cityData.city.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {cityData.city}
                    </h3>
                    <p className="text-neutral-300 text-sm">{cityData.country}</p>
                  </div>
                </div>

                <div className="p-4">
                  {/* Museums list */}
                  <div className="mb-3">
                    <p className="text-sm text-neutral-500 mb-2">
                      {cityData.museums.length} museum
                      {cityData.museums.length !== 1 ? "s" : ""}
                    </p>
                    <ul className="space-y-1">
                      {cityData.museums.slice(0, 3).map((museum) => (
                        <li
                          key={museum.id}
                          className="text-sm text-neutral-700 truncate"
                        >
                          {museum.name}
                          <span className="text-neutral-400 ml-1">
                            ({museum._count.artworks})
                          </span>
                        </li>
                      ))}
                      {cityData.museums.length > 3 && (
                        <li className="text-sm text-neutral-400">
                          +{cityData.museums.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <span className="text-sm font-medium text-neutral-900">
                      {cityData.totalArtworks} masterpiece
                      {cityData.totalArtworks !== 1 ? "s" : ""}
                    </span>
                    <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Art for Any Space
          </h2>
          <p className="text-neutral-400 mb-4">
            Gallery-quality prints. No passport required.
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
