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

// Generate interesting facts about an artwork - quality over quantity
function generateFacts(artwork: {
  title: string;
  year: number | null;
  medium: string | null;
  dimensions: string | null;
  lastSalePrice: number | null;
  styleTags: string[];
  Artist: {
    name: string;
    slug: string;
    birthYear: number | null;
    deathYear: number | null;
    nationality: string | null;
    Movement?: { name: string; slug: string }[];
  } | null;
  Museum: { name: string; slug: string; city: string; country: string } | null;
  hasTrail: boolean;
}): string[] {
  const facts: string[] = [];
  const now = new Date().getFullYear();
  const artist = artwork.Artist;
  const museum = artwork.Museum;
  const title = artwork.title.toLowerCase();

  // 1. Artist trail (most engaging)
  if (artwork.hasTrail && artist) {
    const trailSlug = artist.slug === "van-gogh" ? "vincent-van-gogh" : artist.slug;
    facts.push(`You can walk in ${artist.name}'s footsteps. <a href="/trail/${trailSlug}" class="text-[#C9A84C] hover:underline font-medium">Follow the journey</a> through the places that shaped this artist's life and work.`);
  }

  // 2. Self-portraits (check title)
  if (title.includes('self-portrait') || title.includes('self portrait') || title.includes('autorretrato')) {
    if (artist && artwork.year && artist.birthYear) {
      const ageWhenPainted = artwork.year - artist.birthYear;
      if (ageWhenPainted > 0 && ageWhenPainted < 100) {
        facts.push(`${artist.name} painted this self-portrait at age ${ageWhenPainted}.`);
      }
    }
  }

  // 3. Tragic/young death
  if (artist?.birthYear && artist?.deathYear) {
    const artistAge = artist.deathYear - artist.birthYear;
    if (artistAge < 40) {
      facts.push(`${artist.name} died at just ${artistAge}. In that short life, works like this secured a place in art history.`);
    }
  }

  // 4. Final works
  if (artist?.deathYear && artwork.year && facts.length < 2) {
    const yearsBeforeDeath = artist.deathYear - artwork.year;
    if (yearsBeforeDeath === 0) {
      facts.push(`${artist.name} painted this in the final year of life. One of the last works we have.`);
    } else if (yearsBeforeDeath === 1) {
      facts.push(`Created just one year before ${artist.name} died in ${artist.deathYear}.`);
    }
  }

  // 5. Artist's age when painted (very young or old)
  if (artist?.birthYear && artwork.year && facts.length < 2) {
    const ageWhenPainted = artwork.year - artist.birthYear;
    if (ageWhenPainted <= 25 && ageWhenPainted > 0) {
      facts.push(`${artist.name} was only ${ageWhenPainted} when this was painted. Already showing mastery.`);
    } else if (ageWhenPainted >= 70) {
      facts.push(`Painted when ${artist.name} was ${ageWhenPainted} years old. Late-career work often reveals new directions.`);
    }
  }

  // 6. Big auction sales
  if (artwork.lastSalePrice && artwork.lastSalePrice > 10000000 && artist && facts.length < 2) {
    const millions = Math.round(artwork.lastSalePrice / 1000000);
    facts.push(`Sold for $${millions} million at auction. <a href="/auction-records/by-artist/${artist.slug}" class="text-[#C9A84C] hover:underline font-medium">See more ${artist.name} sales</a>.`);
  }

  // 7. Very old paintings (500+ years)
  if (artwork.year && artwork.year < 1525 && facts.length < 2) {
    const age = now - artwork.year;
    facts.push(`Over ${Math.floor(age / 100)} centuries old. Painted in ${artwork.year}, before Shakespeare was born.`);
  }

  // 8. Art movement context - with varied facts to avoid repetition
  if (artist?.Movement && artist.Movement.length > 0 && facts.length < 2) {
    const movement = artist.Movement[0];
    const movementFactOptions: Record<string, string[]> = {
      'impressionism': [
        `This is <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Impressionism</a>. The movement scandalized the Paris art world in the 1870s.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Impressionists</a> painted outdoors to capture fleeting effects of light and atmosphere.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Impressionists</a> were rejected by the official Salon. They organized their own exhibitions instead.`,
      ],
      'post-impressionism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Post-Impressionism</a> pushed beyond capturing light to express emotion and symbolism.`,
        `After Impressionism, artists like this one developed more personal, expressive styles. <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Explore Post-Impressionism</a>.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Post-Impressionists</a> kept the bright colors but added structure, pattern, or emotional intensity.`,
      ],
      'baroque': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Baroque</a> art was designed to stir emotions. Dramatic lighting, intense gestures, theatrical compositions.`,
        `This is <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Baroque</a> art: bold, emotional, designed to overwhelm the senses.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Baroque</a> period gave us some of art history's most dramatic images.`,
      ],
      'renaissance': [
        `From the <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Renaissance</a>, when artists rediscovered perspective and human anatomy.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Renaissance</a> artists studied ancient Rome and Greece to revolutionize painting.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Renaissance</a> transformed art from craft to intellectual pursuit.`,
      ],
      'romanticism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Romanticism</a> celebrated emotion over reason, nature over industry.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Romantic</a> artists valued imagination, passion, and the sublime power of nature.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Romantics</a> rebelled against Enlightenment rationalism with intense feeling and wild landscapes.`,
      ],
      'realism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Realism</a> rejected idealized subjects to show life as it actually was.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Realist</a> painters shocked audiences by depicting ordinary people without flattery.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Realists</a> believed art should show truth, not beauty.`,
      ],
      'expressionism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Expressionism</a> distorted reality to convey inner emotional experience.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Expressionist</a> artists used jarring colors and distorted forms to express psychological states.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Expressionists</a> painted feelings, not appearances.`,
      ],
      'rococo': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Rococo</a> art favored elegance, lightness, and ornate decoration.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Rococo</a> emerged as a playful reaction to the heavy grandeur of Baroque.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Rococo</a> style celebrated aristocratic leisure with pastel colors and graceful curves.`,
      ],
      'neoclassicism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Neoclassicism</a> looked back to ancient Greece and Rome for inspiration.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Neoclassical</a> artists valued order, symmetry, and moral virtue in their subjects.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Neoclassicists</a> rejected Rococo frivolity for classical restraint and heroic themes.`,
      ],
      'symbolism': [
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Symbolism</a> used imagery to suggest ideas, dreams, and emotions.`,
        `<a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Symbolist</a> artists rejected realism to explore the mysterious and the spiritual.`,
        `The <a href="/movement/${movement.slug}" class="text-[#C9A84C] hover:underline font-medium">Symbolists</a> believed art should evoke moods and ideas, not describe the visible world.`,
      ],
    };
    const movementKey = movement.slug.toLowerCase();
    if (movementFactOptions[movementKey]) {
      const options = movementFactOptions[movementKey];
      const randomFact = options[Math.floor(Math.random() * options.length)];
      facts.push(randomFact);
    }
  }

  // 9. Cross-continental journey
  if (artist?.nationality && museum && facts.length < 2) {
    const nat = artist.nationality.toLowerCase();
    const country = museum.country.toLowerCase();
    const city = museum.city;

    if ((nat.includes('dutch') || nat.includes('flemish')) && country.includes('united states')) {
      facts.push(`Dutch art that crossed the Atlantic. Now at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    } else if (nat.includes('french') && country.includes('russia')) {
      facts.push(`French art in Russia: traveled from Paris to <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a>.`);
    } else if (nat.includes('french') && country.includes('united states')) {
      facts.push(`From France to America. Now at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    } else if (nat.includes('spanish') && country.includes('united states')) {
      facts.push(`Spanish art in America. See it at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    } else if (nat.includes('italian') && country.includes('united states')) {
      facts.push(`Italian art that made its way to <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    } else if (nat.includes('german') && country.includes('united states')) {
      facts.push(`German art in America. Now at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    } else if (nat.includes('british') && country.includes('united states')) {
      facts.push(`British art that crossed the pond. At <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">${museum.name}</a> in ${city}.`);
    }
  }

  // 10. Monumental or tiny size
  if (artwork.dimensions && facts.length < 2) {
    const match = artwork.dimensions.match(/(\d+(?:\.\d+)?)\s*(?:cm|×|x)\s*(\d+(?:\.\d+)?)/i);
    if (match) {
      const larger = Math.max(parseFloat(match[1]), parseFloat(match[2]));
      if (larger > 300) {
        facts.push(`At ${artwork.dimensions}, this painting towers over viewers. Photos can't capture the scale.`);
      } else if (larger < 25) {
        facts.push(`Just ${artwork.dimensions}. Smaller than a laptop screen, meant for intimate viewing.`);
      }
    }
  }

  // 11. Fresco technique
  if (artwork.medium?.toLowerCase().includes('fresco') && facts.length < 2) {
    facts.push(`A true fresco: painted on wet plaster. Once it dried, there was no fixing mistakes.`);
  }

  // 12. Panel painting (older technique)
  if (artwork.medium?.toLowerCase().includes('panel') && artwork.year && artwork.year < 1600 && facts.length < 2) {
    facts.push(`Painted on wood panel, the standard before canvas became popular in the 1500s.`);
  }

  // 13. Long-lived artist
  if (artist?.birthYear && artist?.deathYear && facts.length < 2) {
    const artistAge = artist.deathYear - artist.birthYear;
    if (artistAge > 85) {
      facts.push(`${artist.name} lived to ${artistAge}, with a career spanning over six decades.`);
    }
  }

  // 14. World-famous museum context
  if (museum && facts.length < 2) {
    const famousMuseums: Record<string, string> = {
      'louvre': `One of 380,000 works at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the Louvre</a>, the world's most visited museum.`,
      'met': `Part of <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">The Met's</a> collection of over 2 million works spanning 5,000 years.`,
      'metropolitan': `Part of <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">The Met's</a> collection of over 2 million works spanning 5,000 years.`,
      'uffizi': `At <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the Uffizi</a>, one of the oldest art museums in the Western world.`,
      'prado': `At <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the Prado</a>, home to the world's greatest collection of Spanish art.`,
      'hermitage': `One of 3 million items at <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the Hermitage</a>, housed in the former Winter Palace.`,
      'rijksmuseum': `At <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the Rijksmuseum</a>, the national museum of Dutch art and history.`,
      'national-gallery': `At <a href="/museum/${museum.slug}" class="text-[#C9A84C] hover:underline font-medium">the National Gallery</a> in London, free to visit since 1824.`,
    };
    const museumKey = museum.slug.toLowerCase();
    for (const [key, fact] of Object.entries(famousMuseums)) {
      if (museumKey.includes(key)) {
        facts.push(fact);
        break;
      }
    }
  }

  return facts.slice(0, 2);
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
    // Random artwork for hero - get one with interesting data (public domain only)
    (async () => {
      const publicDomainFilter = {
        imageUrl: { not: null },
        year: { not: null, lt: 1928 }, // Safe public domain cutoff
        Artist: { isNot: null },
        Museum: {
          is: {
            name: { not: { contains: 'Private' } },
            city: { not: 'Unknown' },
            country: { not: 'Unknown' },
          },
        },
      };
      const total = await prisma.artwork.count({ where: publicDomainFilter });
      const skip = Math.floor(Math.random() * Math.max(0, total - 1));
      return prisma.artwork.findFirst({
        where: publicDomainFilter,
        include: {
          Artist: {
            select: {
              name: true,
              slug: true,
              birthYear: true,
              deathYear: true,
              nationality: true,
              Movement: { select: { name: true, slug: true } },
            },
          },
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
                    {facts.length > 0 && (
                      <>
                        <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-bold mb-4">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          DID YOU KNOW?
                        </div>
                        <div className="space-y-3 mb-6">
                          {facts.map((fact, i) => (
                            <p
                              key={i}
                              className="text-neutral-200 text-lg leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: fact }}
                            />
                          ))}
                        </div>
                      </>
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
