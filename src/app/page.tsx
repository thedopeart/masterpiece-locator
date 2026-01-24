import { prisma } from "@/lib/db";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import ArtistCard from "@/components/ArtistCard";
import MuseumCard from "@/components/MuseumCard";
import SearchBar from "@/components/SearchBar";
import EraCard from "@/components/EraCard";
import Link from "next/link";
import { decodeHtmlEntities, isPrivateCollection, isCountryNotCity } from "@/lib/text";
import { ERAS } from "@/lib/eras";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

// Keyword-focused: "where to see famous paintings" queries
// Title: 59 chars, Description: 157 chars (within limits)
export const metadata: Metadata = {
  title: "Where to See Famous Paintings: 4,000+ Museum Locations",
  description: "Find where famous paintings are displayed. Search Mona Lisa, Starry Night, The Scream & 4,000+ masterpieces. Museum locations, hours & tickets.",
  openGraph: {
    title: "Where to See Famous Paintings: 4,000+ Museum Locations",
    description: "Find where famous paintings are displayed. Search Mona Lisa, Starry Night, The Scream & 4,000+ masterpieces.",
    type: "website",
    url: BASE_URL,
    siteName: "Masterpiece Locator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to See Famous Paintings: 4,000+ Museum Locations",
    description: "Find where famous paintings are displayed. Museum locations for 4,000+ masterpieces including Mona Lisa, Starry Night & more.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Revalidate every 60 seconds for fresh data without blocking
export const revalidate = 60;

export default async function Home() {
  // Fetch counts for hero stats
  const [artworkCount, museumCount] = await Promise.all([
    prisma.artwork.count(),
    prisma.museum.count(),
  ]);

  // Fetch featured artworks (Tier 1 - most searched, with images only)
  const rawFeaturedArtworks = await prisma.artwork.findMany({
    where: {
      searchVolumeTier: 1,
      imageUrl: { not: null }, // Only show artworks with images on homepage
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, city: true } },
    },
    take: 8,
    orderBy: { createdAt: "desc" },
  });

  // Map to lowercase property names for ArtworkCard component and decode HTML entities
  const featuredArtworks = rawFeaturedArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Fetch featured artists with their artwork images for fallback
  const rawFeaturedArtists = await prisma.artist.findMany({
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true },
      },
    },
    take: 4,
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Map _count.Artwork to _count.artworks for components and decode HTML entities
  const featuredArtists = rawFeaturedArtists.map((a) => ({
    ...a,
    name: decodeHtmlEntities(a.name),
    nationality: decodeHtmlEntities(a.nationality),
    // Use artwork image as fallback if no artist portrait
    imageUrl: a.imageUrl || a.Artwork[0]?.imageUrl || null,
    _count: { artworks: a._count.Artwork },
  }));

  // Fetch featured museums with artwork images for fallback
  const rawFeaturedMuseums = await prisma.museum.findMany({
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true },
      },
    },
    take: 6, // Fetch extra to filter out invalid ones
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Filter out invalid museums, decode HTML entities, and map to components
  const featuredMuseums = rawFeaturedMuseums
    .filter((m) => {
      // Skip private collections
      if (isPrivateCollection(m.name)) return false;
      // Skip entries where city is actually a country
      if (isCountryNotCity(m.city)) return false;
      // Skip Unknown locations
      if (m.city === "Unknown" || m.country === "Unknown") return false;
      return true;
    })
    .slice(0, 3) // Take only 3 after filtering
    .map((m) => ({
      ...m,
      name: decodeHtmlEntities(m.name),
      city: decodeHtmlEntities(m.city),
      country: decodeHtmlEntities(m.country),
      // Use artwork image as fallback if no museum image
      imageUrl: m.imageUrl || m.Artwork[0]?.imageUrl || null,
      _count: { artworks: m._count.Artwork },
    }));

  // Fetch era stats for the "Explore by Era" section
  const eraStats = await Promise.all(
    ERAS.map(async (era) => {
      const [movementCount, artistCount, previewArtworks] = await Promise.all([
        prisma.movement.count({
          where: {
            startYear: { gte: era.startYear, lt: era.endYear },
          },
        }),
        prisma.artist.count({
          where: {
            Movement: {
              some: {
                startYear: { gte: era.startYear, lt: era.endYear },
              },
            },
          },
        }),
        prisma.artwork.findMany({
          where: {
            year: { gte: era.startYear, lt: era.endYear },
            imageUrl: { not: null },
          },
          select: { imageUrl: true },
          orderBy: { searchVolumeTier: "asc" },
          take: 4,
        }),
      ]);
      return {
        era,
        movementCount,
        artistCount,
        previewImages: previewArtworks
          .map((a) => a.imageUrl)
          .filter((url): url is string => url !== null),
      };
    })
  );

  // Filter to eras with content
  const erasWithContent = eraStats.filter(
    (e) => e.movementCount > 0 || e.artistCount > 0
  );

  return (
    <div className="bg-neutral-50">
      {/* Hero Section - Compact */}
      <section className="bg-white py-8 md:py-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
            Find Famous Art Around the World
          </h1>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            {artworkCount}+ masterpieces across {museumCount}+ museums worldwide
          </p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">
            Most Searched Masterpieces
          </h2>
          <Link
            href="/search"
            className="text-neutral-600 hover:text-black text-sm font-medium transition-colors"
          >
            View all
          </Link>
        </div>

        {featuredArtworks.length > 0 ? (
          <div className="masonry-grid">
            {featuredArtworks.map((artwork, index) => (
              <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 4} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center border border-neutral-200">
            <p className="text-neutral-500 mb-4">No artworks added yet.</p>
            <p className="text-sm text-neutral-400">
              Run the seed script to add sample data.
            </p>
          </div>
        )}
      </section>

      {/* Explore by Era */}
      {erasWithContent.length > 0 && (
        <section className="bg-white py-12 border-y border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  Explore by Era
                </h2>
                <p className="text-neutral-600 mt-1">
                  Journey through art history from Medieval to Contemporary
                </p>
              </div>
              <Link
                href="/movements"
                className="text-neutral-600 hover:text-black text-sm font-medium transition-colors hidden md:block"
              >
                View all movements
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {erasWithContent.map(({ era, movementCount, artistCount, previewImages }) => (
                <EraCard
                  key={era.slug}
                  era={era}
                  movementCount={movementCount}
                  artistCount={artistCount}
                  previewImages={previewImages}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse by Artist & Museum */}
      <section className="bg-white py-12 border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Artists */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">
                  Featured Artists
                </h2>
                <Link
                  href="/artists"
                  className="text-neutral-600 hover:text-black text-sm font-medium transition-colors"
                >
                  View all
                </Link>
              </div>

              {featuredArtists.length > 0 ? (
                <div className="space-y-4">
                  {featuredArtists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">No artists added yet.</p>
              )}
            </div>

            {/* Museums */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Top Museums</h2>
                <Link
                  href="/museums"
                  className="text-neutral-600 hover:text-black text-sm font-medium transition-colors"
                >
                  View all
                </Link>
              </div>

              {featuredMuseums.length > 0 ? (
                <div className="space-y-4">
                  {featuredMuseums.map((museum) => (
                    <MuseumCard key={museum.id} museum={museum} />
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">No museums added yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Own Art That Moves You
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Gallery-quality canvas prints inspired by the masters.
            Same mood, fraction of the airfare.
          </p>
          <Link
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-8 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Browse Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
