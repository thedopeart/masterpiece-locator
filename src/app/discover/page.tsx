import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ERAS } from "@/lib/eras";
import { getAllTrails } from "@/lib/artist-trails";
import FAQ, { FAQSchema } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Discover Art | Browse by Subject, Color & Era",
  description:
    "Explore famous artworks by subject, color palette, art movement, or era. Find portraits, landscapes, religious art, and more from museums worldwide.",
};

export const dynamic = "force-dynamic";

// Subject categories with their styleTags
const SUBJECTS = [
  { name: "Portraits", tag: "portrait", icon: "👤" },
  { name: "Landscapes", tag: "landscape", icon: "🏔️" },
  { name: "Religious", tag: "religious", icon: "✝️" },
  { name: "Still Life", tag: "still life", icon: "🍎" },
  { name: "History", tag: "history", icon: "⚔️" },
  { name: "Genre Scenes", tag: "genre", icon: "🎭" },
];

// Generate interesting facts about an artwork with links
function generateFacts(artwork: {
  title: string;
  year: number | null;
  medium: string | null;
  dimensions: string | null;
  lastSalePrice: number | null;
  styleTags: string[];
  Artist: { name: string; slug: string; birthYear: number | null; deathYear: number | null; nationality: string | null } | null;
  Museum: { name: string; slug: string; city: string; country: string } | null;
  hasTrail: boolean;
}): string[] {
  const facts: string[] = [];
  const now = new Date().getFullYear();

  // Age of the painting
  if (artwork.year) {
    const age = now - artwork.year;
    if (age > 400) {
      facts.push(`This painting is over ${Math.floor(age / 100)} centuries old, created in ${artwork.year}.`);
    } else if (age > 100) {
      facts.push(`Painted ${age} years ago in ${artwork.year}, this work has survived wars, revolutions, and countless museum moves.`);
    } else if (age > 50) {
      facts.push(`Created in ${artwork.year}, this painting is now ${age} years old.`);
    }
  }

  // Artist trail link
  if (artwork.hasTrail && artwork.Artist) {
    const trailSlug = artwork.Artist.slug === "van-gogh" ? "vincent-van-gogh" : artwork.Artist.slug;
    facts.push(`Follow <a href="/trail/${trailSlug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Artist.name}'s journey</a> across Europe to see where this and other works were created.`);
  }

  // Artist lifespan
  if (artwork.Artist?.birthYear && artwork.Artist?.deathYear) {
    const artistAge = artwork.Artist.deathYear - artwork.Artist.birthYear;
    if (artistAge < 40) {
      facts.push(`<a href="/artist/${artwork.Artist.slug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Artist.name}</a> died at just ${artistAge} years old, yet left behind works like this one.`);
    }
    if (artwork.year && artwork.Artist.deathYear) {
      const yearsBeforeDeath = artwork.Artist.deathYear - artwork.year;
      if (yearsBeforeDeath <= 2 && yearsBeforeDeath >= 0) {
        facts.push(`This was painted in the final ${yearsBeforeDeath === 0 ? 'year' : `${yearsBeforeDeath} years`} of <a href="/artist/${artwork.Artist.slug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Artist.name}</a>'s life.`);
      }
    }
  }

  // Museum link
  if (artwork.Museum) {
    facts.push(`See this painting at <a href="/museum/${artwork.Museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Museum.name}</a> in ${artwork.Museum.city}, ${artwork.Museum.country}.`);
  }

  // Artist nationality + museum location
  if (artwork.Artist?.nationality && artwork.Museum?.country) {
    if (!artwork.Artist.nationality.toLowerCase().includes(artwork.Museum.country.toLowerCase()) &&
        !artwork.Museum.country.toLowerCase().includes(artwork.Artist.nationality.toLowerCase().split(' ')[0])) {
      facts.push(`A ${artwork.Artist.nationality} artist's work, now on display at <a href="/museum/${artwork.Museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Museum.name}</a> in ${artwork.Museum.country}.`);
    }
  }

  // Medium
  if (artwork.medium) {
    if (artwork.medium.toLowerCase().includes('oil on canvas')) {
      facts.push(`Painted in oil on canvas, the most enduring medium in Western art history.`);
    } else if (artwork.medium.toLowerCase().includes('fresco')) {
      facts.push(`This is a fresco, painted directly onto wet plaster. The artist had to work fast before it dried.`);
    } else if (artwork.medium.toLowerCase().includes('tempera')) {
      facts.push(`Created with tempera, a fast-drying paint used before oil paints became popular in the Renaissance.`);
    } else if (artwork.medium.toLowerCase().includes('watercolor')) {
      facts.push(`A watercolor work, one of the most unforgiving mediums since mistakes can't be painted over.`);
    }
  }

  // Dimensions
  if (artwork.dimensions) {
    const match = artwork.dimensions.match(/(\d+(?:\.\d+)?)\s*(?:cm|×|x)\s*(\d+(?:\.\d+)?)/i);
    if (match) {
      const h = parseFloat(match[1]);
      const w = parseFloat(match[2]);
      const larger = Math.max(h, w);
      if (larger > 300) {
        facts.push(`At ${artwork.dimensions}, this is a monumental work, larger than most doorways.`);
      } else if (larger < 30) {
        facts.push(`A surprisingly intimate work at just ${artwork.dimensions}, smaller than a sheet of paper.`);
      }
    }
  }

  // Sale price with link to auction records
  if (artwork.lastSalePrice && artwork.lastSalePrice > 10000000) {
    const millions = Math.round(artwork.lastSalePrice / 1000000);
    if (artwork.Artist) {
      facts.push(`Sold at auction for $${millions} million. See more <a href="/auction-records/by-artist/${artwork.Artist.slug}" class="text-[#C9A84C] hover:underline font-medium">${artwork.Artist.name} auction records</a>.`);
    } else {
      facts.push(`This painting sold at auction for $${millions} million. Browse our <a href="/auction-records/most-expensive" class="text-[#C9A84C] hover:underline font-medium">most expensive paintings</a>.`);
    }
  }

  // Shuffle and return top 2
  return facts.sort(() => Math.random() - 0.5).slice(0, 2);
}

// Colors for the palette
const COLORS = [
  { name: "Blue", hex: "#1e40af" },
  { name: "Red", hex: "#b91c1c" },
  { name: "Green", hex: "#15803d" },
  { name: "Gold", hex: "#ca8a04" },
  { name: "Brown", hex: "#78350f" },
  { name: "Black", hex: "#171717" },
  { name: "Pink", hex: "#db2777" },
  { name: "Purple", hex: "#7c3aed" },
];

export default async function DiscoverPage() {
  // Run all queries in parallel for better performance
  const [
    subjectData,
    eraData,
    movementData,
    trailArtists,
    randomArtwork,
  ] = await Promise.all([
    // Subject previews with artworks
    Promise.all(
      SUBJECTS.map(async (subject) => {
        const artworks = await prisma.artwork.findMany({
          where: {
            styleTags: { has: subject.tag },
            imageUrl: { not: null },
          },
          select: {
            id: true,
            slug: true,
            title: true,
            imageUrl: true,
          },
          orderBy: { searchVolumeTier: "asc" },
          take: 4,
        });
        const count = await prisma.artwork.count({
          where: { styleTags: { has: subject.tag }, imageUrl: { not: null } },
        });
        return { ...subject, artworks, count };
      })
    ),
    // Era data with preview images
    Promise.all(
      ERAS.map(async (era) => {
        const artworks = await prisma.artwork.findMany({
          where: {
            year: { gte: era.startYear, lt: era.endYear },
            imageUrl: { not: null },
          },
          select: { imageUrl: true },
          orderBy: { searchVolumeTier: "asc" },
          take: 1,
        });
        const count = await prisma.artwork.count({
          where: { year: { gte: era.startYear, lt: era.endYear }, imageUrl: { not: null } },
        });
        return { ...era, previewImage: artworks[0]?.imageUrl || null, count };
      })
    ),
    // Movements with preview images
    prisma.movement.findMany({
      include: {
        Artist: {
          take: 1,
          include: {
            Artwork: {
              where: { imageUrl: { not: null } },
              select: { imageUrl: true },
              take: 1,
            },
          },
        },
        _count: { select: { Artist: true } },
      },
      orderBy: { Artist: { _count: "desc" } },
      take: 8,
    }),
    // Get trail artist images
    prisma.artist.findMany({
      where: {
        slug: { in: ["van-gogh", "claude-monet", "rembrandt", "pablo-picasso"] },
      },
      select: {
        slug: true,
        imageUrl: true,
        Artwork: {
          where: { imageUrl: { not: null } },
          select: { imageUrl: true },
          take: 1,
        },
      },
    }),
    // Random artwork for hero - get one with interesting data
    (async () => {
      const total = await prisma.artwork.count({
        where: {
          imageUrl: { not: null },
          year: { not: null },
          Artist: { isNot: null },
        }
      });
      const skip = Math.floor(Math.random() * Math.max(0, total - 1));
      return prisma.artwork.findFirst({
        where: {
          imageUrl: { not: null },
          year: { not: null },
          Artist: { isNot: null },
        },
        include: {
          Artist: { select: { name: true, slug: true, birthYear: true, deathYear: true, nationality: true } },
          Museum: { select: { name: true, slug: true, city: true, country: true } },
        },
        skip,
      });
    })(),
  ]);

  // Filter out empty subjects
  const validSubjects = subjectData.filter((s) => s.count > 0);

  // Get trail data with images
  const artistTrails = getAllTrails();
  const trailsWithImages = artistTrails.map((trail) => {
    const artistSlug = trail.artist === "vincent-van-gogh" ? "van-gogh" : trail.artist;
    const artistData = trailArtists.find((a) => a.slug === artistSlug);
    const image = artistData?.imageUrl || artistData?.Artwork[0]?.imageUrl || null;
    return { ...trail, image };
  });

  // Process movements with images
  const movementsWithImages = movementData.map((m) => ({
    ...m,
    previewImage: m.Artist[0]?.Artwork[0]?.imageUrl || null,
    artistCount: m._count.Artist,
  }));

  // Get total counts for FAQs
  const totalArtworks = await prisma.artwork.count({ where: { imageUrl: { not: null } } });
  const totalMuseums = await prisma.museum.count();
  const totalArtists = await prisma.artist.count();

  // FAQs for the discover page
  const discoverFaqs = [
    {
      question: "How many artworks can I explore?",
      answer: `Our database includes <strong>${totalArtworks.toLocaleString()} artworks</strong> from <strong>${totalMuseums} museums</strong> worldwide. We focus on paintings you can actually visit in person, with location details for each piece.`,
    },
    {
      question: "What's the best way to discover new art?",
      answer: `Start with what interests you. Browse by <strong>subject</strong> (portraits, landscapes, religious art), by <strong>era</strong> (Renaissance, Impressionism, Modern), or by <strong>color</strong> if you're drawn to certain palettes. Each category shows preview images to help you explore.`,
    },
    {
      question: "Can I plan museum visits from here?",
      answer: `Yes. Every artwork links to its <strong>museum page</strong> with visiting information. You can also use our <a href="/trip"><strong>Trip Planner</strong></a> to save museums and build an itinerary grouped by city.`,
    },
    {
      question: "What are Artist Trails?",
      answer: `Artist Trails are <strong>curated travel guides</strong> that follow an artist's life journey. See where Van Gogh lived in Arles, where Monet painted in Giverny, and which museums hold their major works. Perfect for art-focused trips.`,
    },
    {
      question: "How do I find a specific painting?",
      answer: `Use the <strong>search bar</strong> at the bottom of this page or visit our <a href="/search"><strong>Search page</strong></a>. You can search by artwork title, artist name, museum, or city. We also have fuzzy matching for common misspellings.`,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Discover Art
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-4">
              Not sure where to start? Browse thousands of paintings by what speaks to you.
              Filter by subject matter, color palette, historical era, or artistic movement.
            </p>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Every artwork links to its museum location so you can plan a visit.
            </p>
          </div>

          {/* Featured Artwork with Facts */}
          {randomArtwork && (() => {
            // Check if artist has a trail
            const artistSlug = randomArtwork.Artist?.slug;
            const trailArtistSlugs = artistTrails.map(t => t.artist === "vincent-van-gogh" ? "van-gogh" : t.artist);
            const hasTrail = artistSlug ? trailArtistSlugs.includes(artistSlug) : false;

            const facts = generateFacts({
              title: randomArtwork.title,
              year: randomArtwork.year,
              medium: randomArtwork.medium,
              dimensions: randomArtwork.dimensions,
              lastSalePrice: randomArtwork.lastSalePrice ? Number(randomArtwork.lastSalePrice) : null,
              styleTags: randomArtwork.styleTags || [],
              Artist: randomArtwork.Artist,
              Museum: randomArtwork.Museum,
              hasTrail,
            });
            return (
              <div className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row">
                  <Link href={`/art/${randomArtwork.slug}`} className="w-full md:w-80 aspect-[3/4] relative flex-shrink-0 group">
                    <Image
                      src={randomArtwork.imageUrl!}
                      alt={randomArtwork.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="320px"
                      priority
                      unoptimized
                    />
                  </Link>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-bold mb-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      DID YOU KNOW?
                    </div>

                    {facts.length > 0 && (
                      <div className="space-y-3 mb-6">
                        {facts.map((fact, i) => (
                          <p
                            key={i}
                            className="text-neutral-200 text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: fact }}
                          />
                        ))}
                      </div>
                    )}

                    <div className="border-t border-white/10 pt-5 mt-auto">
                      <h2 className="text-xl font-bold text-white mb-1">
                        {randomArtwork.title}
                        {randomArtwork.year && <span className="font-normal text-neutral-400"> ({randomArtwork.year})</span>}
                      </h2>
                      {randomArtwork.Artist && (
                        <p className="text-neutral-300">by {randomArtwork.Artist.name}</p>
                      )}
                      {randomArtwork.Museum && (
                        <p className="text-neutral-500 text-sm mt-1">
                          {randomArtwork.Museum.name}, {randomArtwork.Museum.city}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3 mt-4">
                        <Link
                          href={`/art/${randomArtwork.slug}`}
                          className="bg-[#C9A84C] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#b8973f] transition-colors"
                        >
                          Explore This Painting
                        </Link>
                        <Link
                          href="/discover"
                          className="border border-white/30 text-white px-5 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Surprise Me Again
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-10">
        {/* Browse by Subject */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Browse by Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {validSubjects.map((subject) => (
              <Link
                key={subject.tag}
                href={`/search?q=${encodeURIComponent(subject.tag)}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] hover:shadow-xl transition-all"
              >
                {/* 2x2 Preview Grid */}
                <div className="absolute inset-0 grid grid-cols-2 gap-px bg-neutral-200">
                  {subject.artworks.slice(0, 4).map((artwork, i) => (
                    <div key={artwork.id} className="relative bg-neutral-100">
                      {artwork.imageUrl && (
                        <Image
                          src={artwork.imageUrl}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 10vw"
                          unoptimized
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <span className="text-2xl mb-1">{subject.icon}</span>
                  <h3 className="text-white font-bold group-hover:text-[#C9A84C] transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-white/70 text-sm">{subject.count.toLocaleString()} works</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Era */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Browse by Era</h2>
            <Link href="/movements" className="text-sm text-[#C9A84C] hover:underline font-medium">
              View timeline →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {eraData.map((era) => (
              <Link
                key={era.slug}
                href={`/era/${era.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] hover:shadow-xl transition-all"
              >
                {era.previewImage ? (
                  <Image
                    src={era.previewImage}
                    alt={era.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 16vw"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold group-hover:text-[#C9A84C] transition-colors">
                    {era.shortName}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {era.slug === "medieval" ? "Before 1400" : era.slug === "contemporary" ? "1970+" : `${era.startYear}–${era.endYear}`}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{era.count.toLocaleString()} works</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Movement */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Popular Movements</h2>
            <Link href="/movements" className="text-sm text-[#C9A84C] hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movementsWithImages.map((movement) => (
              <Link
                key={movement.id}
                href={`/movement/${movement.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/2] hover:shadow-xl transition-all"
              >
                {movement.previewImage ? (
                  <Image
                    src={movement.previewImage}
                    alt={movement.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-600 to-neutral-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold group-hover:text-[#C9A84C] transition-colors">
                    {movement.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {movement.startYear}{movement.endYear ? `–${movement.endYear}` : "+"} · {movement.artistCount} artists
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Color */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Browse by Color</h2>
          <div className="flex flex-wrap gap-3">
            {COLORS.map((color) => (
              <Link
                key={color.name}
                href={`/search?q=${encodeURIComponent(color.name.toLowerCase())}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-full border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all bg-white"
              >
                <div
                  className="w-6 h-6 rounded-full ring-2 ring-white shadow-sm"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-medium text-neutral-800 group-hover:text-neutral-900">
                  {color.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Artist Trails */}
        {trailsWithImages.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">Artist Journeys</h2>
              <Link href="/trails" className="text-sm text-[#C9A84C] hover:underline font-medium">
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trailsWithImages.map((trail) => (
                <Link
                  key={trail.artist}
                  href={`/trail/${trail.artist}`}
                  className="group relative rounded-xl overflow-hidden aspect-[2/1] hover:shadow-xl transition-all"
                >
                  {trail.image ? (
                    <Image
                      src={trail.image}
                      alt={trail.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center p-6">
                    <div>
                      <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {trail.totalLocations} locations
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                        {trail.title}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
                        {trail.primaryCountries.join(" · ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        <FAQSchema items={discoverFaqs} />
        <FAQ items={discoverFaqs} title="Frequently Asked Questions" wide />

        {/* Quick Search */}
        <section className="bg-neutral-900 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Looking for something specific?
          </h2>
          <p className="text-neutral-400 mb-6">
            Search by artwork, artist, museum, or city
          </p>
          <form action="/search" method="GET" className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                name="q"
                placeholder="Try 'Starry Night', 'Monet', or 'Paris'..."
                className="w-full px-5 py-4 pr-12 rounded-xl bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-neutral-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
