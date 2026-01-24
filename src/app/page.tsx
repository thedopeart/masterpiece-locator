import { prisma } from "@/lib/db";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import ArtistCard from "@/components/ArtistCard";
import MuseumCard from "@/components/MuseumCard";
import SearchBar from "@/components/SearchBar";
import EraCard, { TimelineEraCard } from "@/components/EraCard";
import Link from "next/link";
import { decodeHtmlEntities, isPrivateCollection, isCountryNotCity } from "@/lib/text";
import { ERAS } from "@/lib/eras";
import { FAQStatic, FAQSchema } from "@/components/FAQ";

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

// Use dynamic rendering to avoid connection pool issues during build
export const dynamic = 'force-dynamic';

// FAQ items for SEO
const homepageFAQs = [
  {
    question: "What is Masterpiece Locator?",
    answer: "<strong>Masterpiece Locator</strong> is a free tool that tells you exactly where famous paintings are displayed. Search for any artwork and we'll show you the <strong>museum name</strong>, <strong>city</strong>, <strong>country</strong>, and basic visiting information. No more guessing which museum has the painting you want to see. The database includes over 4,000 artworks across 700+ museums worldwide.",
  },
  {
    question: "How do I use this tool to plan a museum visit?",
    answer: "Start by searching for a painting or artist you want to see. We'll show you which museum has it. From there, you can browse other works at that same museum to see what else is worth your time. Many people use this to <strong>plan art trips</strong> by finding which cities have the most paintings on their bucket list. You can also explore by <strong>art movement</strong> or <strong>time period</strong> to find related works nearby.",
  },
  {
    question: "Why do some famous paintings not have images?",
    answer: "Copyright. Many 20th and 21st century artworks are still protected, so we can't display images without permission. You'll still see the <strong>title</strong>, <strong>artist</strong>, <strong>year</strong>, and <strong>museum location</strong>. Older works (pre-1900) are typically in the public domain and will have images. This is standard practice for art databases.",
  },
  {
    question: "What's the difference between a museum and a private collection?",
    answer: "<strong>Museums</strong> are public institutions where you can buy a ticket and see the art. <strong>Private collections</strong> are owned by individuals or families and usually aren't open to visitors. We focus on museums and public galleries so you can actually go see the work. Some private collections do loan pieces to museums for special exhibitions.",
  },
  {
    question: "How do I find art near me?",
    answer: "Use the <a href=\"/cities\">Cities</a> page to browse art by location. We list major art cities like Paris, New York, London, Amsterdam, and Florence with the museums and masterpieces in each. You can also search for a specific museum to see its full collection. Great for planning a weekend trip or finding what's within driving distance.",
  },
  {
    question: "Can paintings move between museums?",
    answer: "Yes, but it's rare for major works. Icons like the <strong>Mona Lisa</strong>, <strong>Starry Night</strong>, and <strong>Girl with a Pearl Earring</strong> stay put. Museums do loan pieces for temporary exhibitions, usually 3-6 months. Lesser-known works rotate more often. If you're traveling specifically to see one painting, it's worth confirming with the museum before you go.",
  },
];

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
    take: 8,
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
    take: 15, // Fetch extra to filter out invalid ones
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
    .slice(0, 6) // Take 6 for a full-width grid layout
    .map((m) => ({
      ...m,
      name: decodeHtmlEntities(m.name),
      city: decodeHtmlEntities(m.city),
      country: decodeHtmlEntities(m.country),
      // Use artwork image as fallback if no museum image
      imageUrl: m.imageUrl || m.Artwork[0]?.imageUrl || null,
      _count: { artworks: m._count.Artwork },
    }));

  // Fetch top cities by artwork count
  const topCities = await prisma.museum.groupBy({
    by: ['city', 'country'],
    _count: { id: true },
    where: {
      city: { not: 'Unknown' },
      country: { not: 'Unknown' },
    },
    orderBy: { _count: { id: 'desc' } },
    take: 10,
  });

  // Get artwork counts per city and a preview image
  const citiesWithData = await Promise.all(
    topCities.slice(0, 4).map(async (city) => {
      const artworkCount = await prisma.artwork.count({
        where: {
          Museum: {
            city: city.city,
            country: city.country,
          },
        },
      });
      const previewArtwork = await prisma.artwork.findFirst({
        where: {
          Museum: { city: city.city, country: city.country },
          imageUrl: { not: null },
        },
        select: { imageUrl: true },
        orderBy: { searchVolumeTier: 'asc' },
      });
      return {
        city: decodeHtmlEntities(city.city),
        country: decodeHtmlEntities(city.country),
        slug: city.city.toLowerCase().replace(/\s+/g, '-'),
        museumCount: city._count.id,
        artworkCount,
        imageUrl: previewArtwork?.imageUrl || null,
      };
    })
  );

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

  // Filter to eras with content and limit to 4 for timeline layout
  const erasWithContent = eraStats
    .filter((e) => e.movementCount > 0 || e.artistCount > 0)
    .slice(0, 4);

  return (
    <div className="bg-neutral-50">
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 md:py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Where Is That Famous Painting?
          </h1>
          <p className="text-neutral-300 text-lg mb-3 max-w-xl mx-auto">
            Find which museum has the artwork you want to see in person.
          </p>
          <p className="text-neutral-400 text-sm mb-8 max-w-2xl mx-auto">
            Search <span className="font-semibold text-[#C9A84C]">{artworkCount.toLocaleString()}+ paintings</span> across <span className="font-semibold text-[#C9A84C]">{museumCount}+ museums</span> worldwide
          </p>

          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Always Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Real Museum Locations
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Updated Weekly
            </span>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">
                Most Searched Masterpieces
              </h2>
            </div>
            <p className="text-neutral-600 ml-4">
              These are the paintings people search for most. Click any artwork to see its <strong>museum location</strong> and <strong>visiting details</strong>.
            </p>
          </div>
          <Link
            href="/search"
            className="flex items-center gap-1 text-neutral-600 hover:text-[#C9A84C] text-sm font-medium transition-colors group"
          >
            View all
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
        <section className="bg-neutral-900 py-12">
          <div className="max-w-[1400px] mx-auto px-4">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
                  <h2 className="text-2xl font-bold text-white">
                    Explore by Era
                  </h2>
                </div>
                <p className="text-neutral-400 ml-4">
                  From Renaissance masters to Modern pioneers. Discover art across 600 years of history.
                </p>
              </div>
              <Link
                href="/movements"
                className="flex items-center gap-1 text-neutral-400 hover:text-[#C9A84C] text-sm font-medium transition-colors group"
              >
                All movements
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Era Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {erasWithContent.slice(0, 4).map(({ era, movementCount, artistCount, previewImages }) => (
                <TimelineEraCard
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

      {/* Featured Artists */}
      <section className="bg-white py-12 border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
                <h2 className="text-2xl font-bold text-neutral-900">
                  Featured Artists
                </h2>
              </div>
              <p className="text-neutral-600 ml-4">
                Find every painting by your favorite artist and which <strong>museums display their work</strong>. Click an artist to see their full catalog.
              </p>
            </div>
            <Link
              href="/artists"
              className="flex items-center gap-1 text-neutral-600 hover:text-[#C9A84C] text-sm font-medium transition-colors group"
            >
              View all
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {featuredArtists.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 text-sm">No artists added yet.</p>
          )}
        </div>
      </section>

      {/* Top Museums */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
                <h2 className="text-2xl font-bold text-neutral-900">
                  Top Museums
                </h2>
              </div>
              <p className="text-neutral-600 ml-4">
                The world's best <strong>art museums</strong> and what's inside them. Click a museum to see its collection and famous paintings.
              </p>
            </div>
            <Link
              href="/museums"
              className="flex items-center gap-1 text-neutral-600 hover:text-[#C9A84C] text-sm font-medium transition-colors group"
            >
              View all
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {featuredMuseums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredMuseums.map((museum) => (
                <MuseumCard key={museum.id} museum={museum} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 text-sm">No museums added yet.</p>
          )}
        </div>
      </section>

      {/* Top Cities */}
      {citiesWithData.length > 0 && (
        <section className="bg-white py-12 border-t border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Top Art Cities
                  </h2>
                </div>
                <p className="text-neutral-600 ml-4">
                  Planning a trip? These cities have the highest concentration of <strong>famous artworks</strong>. See what's in each city.
                </p>
              </div>
              <Link
                href="/cities"
                className="flex items-center gap-1 text-neutral-600 hover:text-[#C9A84C] text-sm font-medium transition-colors group"
              >
                View all
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {citiesWithData.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3]"
                >
                  {city.imageUrl && (
                    <img
                      src={city.imageUrl}
                      alt={city.city}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{city.city}</h3>
                    <p className="text-neutral-300 text-sm">{city.country}</p>
                    <div className="flex gap-3 mt-2 text-xs text-neutral-400">
                      <span>{city.artworkCount} artworks</span>
                      <span>{city.museumCount} museums</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-neutral-50 py-12 border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <FAQSchema items={homepageFAQs} />
          <FAQStatic items={homepageFAQs} title="Frequently Asked Questions" wide />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A84C]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <span className="inline-block text-[#C9A84C] text-sm font-medium tracking-wider uppercase mb-3">
                From LuxuryWallArt.com
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bring the Museum Home
              </h2>
              <p className="text-neutral-300 mb-2">
                Found a painting you love? We sell gallery-quality canvas prints of classic masterpieces.
              </p>
              <p className="text-neutral-400 text-sm">
                Same artwork. Same impact. No plane ticket required.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link
                href="https://luxurywallart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg hover:shadow-white/25 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Canvas Prints
              </Link>
              <span className="text-neutral-500 text-xs">Free shipping on orders over $100</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
