import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ERAS, getEraForYear, getEraSolidColorClass, formatEraDateRange } from "@/lib/eras";
import FAQ, { FAQSchema } from "@/components/FAQ";

const movementFAQs = [
  {
    question: "What are the major art movements in history?",
    answer: "Art history is typically organized into major movements that each redefined artistic practice. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> (1400-1600) revived classical ideals and introduced linear perspective. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> (1600-1750) brought dramatic lighting and emotional intensity. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> (1860-1890) broke from tradition with visible brushstrokes and everyday subjects. <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> pushed further into personal expression. The 20th century saw rapid change with <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>, <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, and <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>.",
  },
  {
    question: "How do I tell which art movement a painting belongs to?",
    answer: "Each movement has distinctive visual signatures. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> paintings show realistic human anatomy, mathematical perspective, and often religious subjects with calm, balanced compositions. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works use <strong>chiaroscuro</strong> (dramatic light/dark contrasts) and diagonal compositions that create movement. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> paintings have visible brushstrokes, bright colors, and capture fleeting moments of light. <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> art features dreamlike imagery and impossible juxtapositions. Look at the brushwork, color palette, subject matter, and how light is handled to identify the movement.",
  },
  {
    question: "What's the difference between an art movement and an art style?",
    answer: "An <strong>art movement</strong> is a specific period when artists with shared ideas, techniques, and goals worked together or influenced each other. Movements have rough start and end dates, founding artists, and often manifestos. An <strong>art style</strong> refers to visual characteristics that can appear across different time periods. For example, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> was a movement that started in 1860s Paris with <a href=\"/apps/masterpieces/artist/claude-monet\">Monet</a>, <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\">Renoir</a>, and others. But impressionistic style (loose brushwork, light focus) continues to influence artists today. Movements are historical; styles are ongoing.",
  },
  {
    question: "Which art movement was most influential?",
    answer: "<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> is widely considered the pivotal turning point in Western art. Before 1860, paintings were expected to look polished and photographic. When <a href=\"/apps/masterpieces/artist/claude-monet\">Monet</a>, <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\">Renoir</a>, and <a href=\"/apps/masterpieces/artist/edgar-degas\">Degas</a> exhibited rough, unfinished-looking works, critics mocked them. But they proved art could prioritize personal perception over academic technique. Every modern art movement that followed built on this freedom. <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> pushed emotion further. <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> fragmented form. <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a> abandoned representation entirely. All trace their roots to Impressionism's initial break.",
  },
  {
    question: "Why did art movements change so quickly in the 20th century?",
    answer: "Several factors accelerated artistic change after 1900. <strong>Photography</strong> freed painters from documenting reality, pushing them toward abstraction. <strong>World Wars</strong> shattered optimism and prompted movements like <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a> that explored trauma and the unconscious. Faster communication and travel spread ideas globally. <strong>Galleries and critics</strong> actively promoted new movements for commercial reasons. <a href=\"/apps/masterpieces/artist/pablo-picasso\">Picasso</a> alone cycled through Blue Period, Rose Period, <a href=\"/apps/masterpieces/movement/cubism\">Cubism</a>, Neoclassicism, and Surrealist influences within decades. The 20th century valued novelty in ways earlier eras did not.",
  },
  {
    question: "What art movements came out of which countries?",
    answer: "<strong>Italy</strong> gave birth to the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, and <a href=\"/apps/masterpieces/movement/futurism\"><strong>Futurism</strong></a>. <strong>France</strong> produced <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a>, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>, and <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a>. <strong>Germany</strong> was home to <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. The <strong>Netherlands</strong> produced the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> and <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a>. <strong>Russia</strong> developed <a href=\"/apps/masterpieces/movement/suprematism\"><strong>Suprematism</strong></a>. The <strong>United States</strong> originated <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>, the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, and <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>.",
  },
  {
    question: "What is the oldest art movement?",
    answer: "Of the documented Western art movements, the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> is typically considered the first true movement, beginning around 1400 in <a href=\"/apps/masterpieces/city/florence\"><strong>Florence, Italy</strong></a>. Earlier periods like Medieval, Byzantine, and Romanesque art are classified as <strong>periods</strong> rather than movements because they lacked the self-conscious artistic philosophy that defines a movement. Renaissance artists like <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\">Leonardo da Vinci</a> and <a href=\"/apps/masterpieces/artist/michelangelo-buonarroti\">Michelangelo</a> actively studied ancient Greek and Roman art, developed new techniques like <strong>linear perspective</strong>, and wrote about their artistic principles.",
  },
  {
    question: "What's the difference between Renaissance and Northern Renaissance?",
    answer: "The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Italian Renaissance</strong></a> emphasized idealized beauty, classical mythology, and mathematical perspective. Artists like <a href=\"/apps/masterpieces/artist/raphael-sanzio\">Raphael</a> created serene, balanced compositions. The <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> in Flanders, Germany, and the Netherlands focused on <strong>extreme realism</strong> and minute detail. Artists like <a href=\"/apps/masterpieces/artist/jan-van-eyck\">Jan van Eyck</a> pioneered <strong>oil painting</strong> techniques that captured textures of fabric, jewelry, and skin with almost photographic precision. Northern works often included hidden religious symbolism in domestic scenes, while Italian works were more openly classical.",
  },
];


export const metadata: Metadata = {
  title: "Art Movements & Eras | Renaissance to Pop Art",
  description:
    "Explore art history by movement. From Renaissance to Impressionism to Pop Art. Discover key artists, masterpieces, and where to see them.",
};

// Revalidate every 60 seconds
export const dynamic = 'force-dynamic';

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
        take: 10, // Get more artists to find 4 images
        include: {
          Artwork: {
            where: { imageUrl: { not: null } },
            take: 2, // Get more artworks per artist
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
                // Collect up to 4 unique images from all artists' artworks
                const allImages: string[] = [];
                for (const artist of movement.artists) {
                  for (const artwork of artist.artworks) {
                    if (artwork.imageUrl && !allImages.includes(artwork.imageUrl)) {
                      allImages.push(artwork.imageUrl);
                      if (allImages.length >= 4) break;
                    }
                  }
                  if (allImages.length >= 4) break;
                }

                return (
                  <Link
                    key={movement.id}
                    href={`/movement/${movement.slug}`}
                    className="flex flex-col sm:flex-row bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all group"
                  >
                    {/* 2x2 Preview Grid */}
                    {allImages.length > 0 && (
                      <div className="w-full sm:w-44 h-36 sm:h-44 shrink-0 grid grid-cols-2 grid-rows-2 gap-0.5 bg-neutral-200">
                        {allImages.slice(0, 4).map((url, idx) => (
                          <div key={idx} className="relative overflow-hidden">
                            <Image
                              src={url}
                              alt={`${movement.name} artwork ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 25vw, 88px"
                              unoptimized={true}
                            />
                          </div>
                        ))}
                        {/* Fill empty slots if less than 4 images */}
                        {allImages.length < 4 && Array.from({ length: 4 - allImages.length }).map((_, idx) => (
                          <div key={`empty-${idx}`} className="bg-neutral-100" />
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
            <div className="lg:sticky lg:top-20 space-y-5">
              {/* Stats Card - Premium dark design */}
              <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-5 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                </div>
                <div className="relative">
                  <h3 className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">Collection Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{totalMovements}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Movements</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{totalArtists}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Artists</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-[#C9A84C]">{totalArtworks.toLocaleString()}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Artworks</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white">{latestYear - earliestYear}+</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Years</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Timeline</span>
                      <span className="text-white font-medium">{earliestYear} – {latestYear}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Browse by Era - Timeline style */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Browse by Era
                  </h3>
                </div>
                <div className="p-3">
                  {ERAS.map((era) => {
                    const eraMovements = movementsWithCounts.filter(
                      (m) => m.startYear && m.startYear >= era.startYear && m.startYear < era.endYear
                    );
                    const count = eraMovements.length;
                    if (count === 0) return null;
                    const eraArtists = eraMovements.reduce((sum, m) => sum + m._count.artists, 0);
                    return (
                      <Link
                        key={era.slug}
                        href={`/era/${era.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-all group"
                      >
                        <div className={`w-10 h-10 rounded-lg ${getEraSolidColorClass(era)} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                          {count}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                            {era.name}
                          </p>
                          <p className="text-xs text-neutral-500">{formatEraDateRange(era)} · {eraArtists} artists</p>
                        </div>
                        <svg className="w-4 h-4 text-neutral-300 group-hover:text-[#C9A84C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Top Movements - Card grid */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 px-5 py-3 border-b border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Most Documented
                  </h3>
                </div>
                <div className="p-3 space-y-1">
                  {movementsWithCounts
                    .sort((a, b) => b.artworkCount - a.artworkCount)
                    .slice(0, 6)
                    .map((movement, index) => {
                      // Get 2 images for mini preview
                      const images: string[] = [];
                      for (const artist of movement.artists) {
                        for (const artwork of artist.artworks) {
                          if (artwork.imageUrl && !images.includes(artwork.imageUrl)) {
                            images.push(artwork.imageUrl);
                            if (images.length >= 2) break;
                          }
                        }
                        if (images.length >= 2) break;
                      }
                      return (
                        <Link
                          key={movement.id}
                          href={`/movement/${movement.slug}`}
                          className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-neutral-50 transition-all group"
                        >
                          <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500 shrink-0">
                            {index + 1}
                          </div>
                          {images.length > 0 ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden relative shrink-0 grid grid-cols-2 gap-px bg-neutral-200">
                              {images.slice(0, 2).map((url, idx) => (
                                <div key={idx} className="relative">
                                  <Image
                                    src={url}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    sizes="24px"
                                    unoptimized
                                  />
                                </div>
                              ))}
                              {images.length < 2 && <div className="bg-neutral-100" />}
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-neutral-100 shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
                              {movement.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {movement.artworkCount} works · {movement._count.artists} artists
                            </p>
                          </div>
                        </Link>
                      );
                    })}
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
                    <span className="font-semibold text-amber-700">Impressionism</span> gets its name from Claude Monet&apos;s painting &quot;Impression, Sunrise&quot; (1872).
                  </p>
                  <p className="text-neutral-700">
                    The <span className="font-semibold text-amber-700">Renaissance</span> began in Florence, Italy around 1400 and spread across Europe.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <FAQSchema items={movementFAQs} />
        <FAQ items={movementFAQs} title="Common Questions About Art Movements" wide />

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
