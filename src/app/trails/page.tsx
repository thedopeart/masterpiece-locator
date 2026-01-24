import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { getAllTrails } from "@/lib/artist-trails";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Artist Trails | Follow Famous Artists' Journeys",
  description:
    "Explore the life journeys of famous artists. Follow Van Gogh through France, Monet to Giverny, and more. Interactive travel guides with locations, museums, and masterpieces.",
};

export default async function TrailsPage() {
  const trails = getAllTrails();

  // Map trail artist slugs to database artist slugs
  const trailToDbSlug: Record<string, string> = {
    "vincent-van-gogh": "van-gogh",
    "claude-monet": "claude-monet",
    "pablo-picasso": "pablo-picasso",
    "frida-kahlo": "frida-kahlo",
    "salvador-dali": "salvador-dali",
    "rembrandt": "rembrandt",
  };

  const dbSlugs = trails.map((t) => trailToDbSlug[t.artist] || t.artist);

  const artists = await prisma.artist.findMany({
    where: {
      slug: { in: dbSlugs },
    },
    select: {
      slug: true,
      name: true,
      imageUrl: true,
      _count: { select: { Artwork: true } },
    },
  });

  const artistMap = new Map(artists.map((a) => [a.slug, a]));

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Artist Trails" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20">
          <nav className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Artist Trails</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">Artist Trails</h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Walk in the footsteps of history&apos;s greatest artists. Explore
            the places they lived, worked, and created their masterpieces.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="max-w-3xl mb-12">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Each trail takes you on a journey through an artist&apos;s life,
            from their birthplace to the locations where their most famous works
            were created. You&apos;ll find museums, landmarks, cafes, and
            churches that still stand today, exactly as the artists knew them.
          </p>
        </section>

        {/* Trail Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Available Trails
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {trails.map((trail) => {
              const dbSlug = trailToDbSlug[trail.artist] || trail.artist;
              const artist = artistMap.get(dbSlug);

              return (
                <Link
                  key={trail.artist}
                  href={`/trail/${trail.artist}`}
                  className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-6 text-white">
                    <div className="flex items-start gap-4">
                      {artist?.imageUrl && (
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9A84C] flex-shrink-0">
                          <Image
                            src={artist.imageUrl}
                            alt={trail.artistName}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-[#C9A84C] transition-colors">
                          {trail.title}
                        </h3>
                        <p className="text-neutral-400 text-sm mt-1">
                          {trail.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-neutral-600 text-sm line-clamp-3 mb-4">
                      {trail.introduction}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-neutral-500">
                        <svg
                          className="w-4 h-4 text-[#C9A84C]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{trail.totalLocations} locations</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-500">
                        <svg
                          className="w-4 h-4 text-[#C9A84C]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{trail.totalPaintings}+ paintings</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-500">
                        <svg
                          className="w-4 h-4 text-[#C9A84C]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                        </svg>
                        <span>{trail.primaryCountries.join(", ")}</span>
                      </div>
                    </div>

                    {/* Key stops */}
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <p className="text-xs text-neutral-500 mb-2">
                        Key stops:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trail.trail
                          .filter((s) => s.mustVisit)
                          .slice(0, 3)
                          .map((stop) => (
                            <span
                              key={stop.slug}
                              className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-1 rounded"
                            >
                              {stop.place}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex justify-between items-center">
                    <span className="text-sm text-neutral-500">
                      {trail.lifespan}
                    </span>
                    <span className="text-sm text-[#C9A84C] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore trail
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">
            Coming Soon
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "Leonardo da Vinci",
                locations: "Vinci, Florence, Milan, Paris",
                lifespan: "1452-1519",
              },
              {
                name: "Gustav Klimt",
                locations: "Vienna, Lake Attersee",
                lifespan: "1862-1918",
              },
              {
                name: "Caravaggio",
                locations: "Milan, Rome, Naples, Malta",
                lifespan: "1571-1610",
              },
              {
                name: "Édouard Manet",
                locations: "Paris, Argenteuil",
                lifespan: "1832-1883",
              },
              {
                name: "Georgia O'Keeffe",
                locations: "Wisconsin, New York, New Mexico",
                lifespan: "1887-1986",
              },
              {
                name: "Edward Hopper",
                locations: "New York, Cape Cod, New Mexico",
                lifespan: "1882-1967",
              },
            ].map((artist) => (
              <div
                key={artist.name}
                className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 opacity-75"
              >
                <h3 className="font-semibold text-neutral-700">{artist.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">
                  {artist.locations}
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  {artist.lifespan}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Bring Art Home
          </h2>
          <p className="text-neutral-400 mb-6">
            Can&apos;t make the trip? Explore wall art inspired by these great
            masters.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Shop Wall Art
          </a>
        </section>
      </div>
    </div>
  );
}
