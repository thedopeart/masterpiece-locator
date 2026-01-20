import { prisma } from "@/lib/db";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import ArtistCard from "@/components/ArtistCard";
import MuseumCard from "@/components/MuseumCard";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export const metadata: Metadata = {
  title: "Masterpiece Locator — Find Famous Art | Luxury Wall Art",
  description: "Discover where to see the world's most famous paintings. Search 4,000+ masterpieces across museums worldwide. Plan your art trip today.",
  openGraph: {
    title: "Masterpiece Locator — Find Famous Art | Luxury Wall Art",
    description: "Discover where to see the world's most famous paintings. Search 4,000+ masterpieces across museums worldwide.",
    type: "website",
    url: BASE_URL,
    siteName: "Masterpiece Locator by Luxury Wall Art",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterpiece Locator — Find Famous Art",
    description: "Discover where to see the world's most famous paintings. Search 4,000+ masterpieces across museums worldwide.",
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

  // Map to lowercase property names for ArtworkCard component
  const featuredArtworks = rawFeaturedArtworks.map((a) => ({
    ...a,
    artist: a.Artist,
    museum: a.Museum,
  }));

  // Fetch featured artists
  const rawFeaturedArtists = await prisma.artist.findMany({
    include: { _count: { select: { Artwork: true } } },
    take: 4,
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Map _count.Artwork to _count.artworks for components
  const featuredArtists = rawFeaturedArtists.map((a) => ({
    ...a,
    _count: { artworks: a._count.Artwork },
  }));

  // Fetch featured museums
  const rawFeaturedMuseums = await prisma.museum.findMany({
    include: { _count: { select: { Artwork: true } } },
    take: 3,
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Map _count.Artwork to _count.artworks for components
  const featuredMuseums = rawFeaturedMuseums.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
  }));

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
      <section className="max-w-6xl mx-auto px-4 py-12">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
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

      {/* Browse by Artist & Museum */}
      <section className="bg-white py-12 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
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
      <section className="max-w-6xl mx-auto px-4 py-16">
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
