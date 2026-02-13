import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FAQ, { FAQSchema } from "@/components/FAQ";
import { decodeHtmlEntities } from "@/lib/text";
import ArtistFilters from "@/components/ArtistFilters";

// Revalidate every 60 seconds
export const dynamic = 'force-dynamic';

const artistFAQs = [
  {
    question: "Who are the most famous artists of all time?",
    answer: "<strong>Leonardo da Vinci</strong>, <strong>Michelangelo</strong>, <strong>Vincent van Gogh</strong>, <strong>Pablo Picasso</strong>, and <strong>Claude Monet</strong> consistently rank as the most influential artists in history. Leonardo's <strong>Mona Lisa</strong> draws over 10 million visitors annually to the Louvre. Michelangelo's Sistine Chapel ceiling took four years to complete. Van Gogh's <strong>Starry Night</strong> has become one of the most reproduced images in the world. These five artists fundamentally changed how we think about art and continue to dominate museum attendance worldwide.",
  },
  {
    question: "What's the difference between Impressionism and Post-Impressionism?",
    answer: "<strong>Impressionism</strong> (1860s-1880s) focused on capturing fleeting moments of light and color. Artists like <strong>Monet</strong> and <strong>Renoir</strong> painted outdoors, using quick brushstrokes to show how light changed throughout the day. <strong>Post-Impressionism</strong> (1880s-1900s) kept that freedom but pushed further into personal expression. <strong>Van Gogh</strong> added emotional intensity with swirling, textured strokes. <strong>Cézanne</strong> broke forms into geometric shapes, paving the way for Cubism. <strong>Gauguin</strong> used bold, flat colors to convey symbolism rather than reality.",
  },
  {
    question: "Where can I see the most works by a single artist?",
    answer: "The <strong>Van Gogh Museum</strong> in Amsterdam holds over 200 paintings and 500 drawings by Vincent van Gogh. The <strong>Museo Picasso</strong> in Barcelona has 4,251 works spanning his entire career. The <strong>Musée Rodin</strong> in Paris displays the largest collection of Rodin sculptures. For <strong>Rembrandt</strong>, the Rijksmuseum in Amsterdam has 22 paintings including The Night Watch. The <strong>Prado</strong> in Madrid owns more Velázquez paintings than any other museum. Each artist page here shows exactly which museums hold their work.",
  },
  {
    question: "Why are famous artworks spread across so many museums?",
    answer: "Most prolific artists created hundreds or thousands of works over their lifetimes. <strong>Rembrandt</strong> produced over 300 paintings and 300 etchings. <strong>Monet</strong> created more than 2,500 paintings across 60 years. These works were sold to private collectors, inherited through families, seized during wars, and donated to institutions over centuries. The <strong>Napoleonic Wars</strong> alone redistributed countless masterpieces across Europe. Today, major works end up in museums through purchases, bequests, and government acquisitions.",
  },
  {
    question: "What's the difference between Renaissance and Baroque art?",
    answer: "<strong>Renaissance art</strong> (1400-1600) emphasized balance, mathematical proportion, and classical Greek ideals. Artists like <strong>Raphael</strong> and <strong>Botticelli</strong> created serene, harmonious compositions with soft lighting. <strong>Baroque art</strong> (1600-1750) embraced drama and emotion. <strong>Caravaggio</strong> pioneered <strong>chiaroscuro</strong>, the dramatic contrast between light and shadow. Baroque paintings feel dynamic, almost theatrical, with diagonal compositions and rich, deep colors. Compare Raphael's calm School of Athens to Caravaggio's intense Calling of Saint Matthew.",
  },
  {
    question: "How do I identify an artist's style?",
    answer: "Every master has telltale signatures. <strong>Van Gogh</strong> used thick, visible brushstrokes called <strong>impasto</strong> and intense yellows and blues. <strong>Monet</strong> painted with soft, dappled touches that blur up close but resolve from a distance. <strong>Vermeer</strong> captured light falling through windows with almost photographic precision. <strong>Picasso</strong> evolved through distinct periods: somber <strong>Blue Period</strong>, warmer <strong>Rose Period</strong>, then fragmented <strong>Cubism</strong>. Study an artist's brushwork, color palette, and recurring subjects. After seeing a few works, you'll recognize them instantly.",
  },
];

const ARTISTS_PER_PAGE = 50;

interface Props {
  searchParams: Promise<{ movement?: string; page?: string; q?: string; type?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);

  const canonicalBase = "https://luxurywallart.com/apps/masterpieces/artists";
  const canonical = page > 1 ? `${canonicalBase}?page=${page}` : canonicalBase;

  return {
    title: "Famous Artists | Find Their Masterpieces & Museum Locations",
    description:
      "Browse famous artists from Da Vinci to Picasso. See their masterpieces and discover which museums display their work.",
    ...(page > 1 && { robots: { index: false, follow: true } }),
    alternates: { canonical },
  };
}

export default async function ArtistsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const movementFilter = resolvedParams?.movement;
  const pageParam = resolvedParams?.page;
  const searchQuery = resolvedParams?.q?.trim() || "";
  const typeFilter = resolvedParams?.type; // "painters" or "sculptors"
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  // Get all movements for the filter
  const rawMovements = await prisma.movement.findMany({
    orderBy: { startYear: "asc" },
    include: {
      _count: { select: { Artist: true } },
    },
  });

  // Map to lowercase for components
  const movements = rawMovements.map((m) => ({
    ...m,
    _count: { artists: m._count.Artist },
  }));

  // Build artist query with movement, search, and type filters
  const whereClause: Record<string, unknown> = {};

  if (movementFilter && typeof movementFilter === 'string') {
    whereClause.Movement = { some: { slug: movementFilter } };
  }

  if (searchQuery) {
    whereClause.name = { contains: searchQuery, mode: 'insensitive' };
  }

  if (typeFilter === 'painters') {
    whereClause.Artwork = { some: { artworkType: 'painting' } };
  } else if (typeFilter === 'sculptors') {
    whereClause.Artwork = { some: { artworkType: 'sculpture' } };
  }

  // Get total count for pagination
  const totalArtists = await prisma.artist.count({ where: whereClause });
  const totalPages = Math.ceil(totalArtists / ARTISTS_PER_PAGE);

  const rawArtists = await prisma.artist.findMany({
    where: whereClause,
    include: {
      Movement: { select: { name: true, slug: true } },
      _count: { select: { Artwork: true } },
      Artwork: {
        where: { imageUrl: { not: null } }, // Only get artworks with images
        take: 1,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true },
      },
    },
    orderBy: [{ Artwork: { _count: "desc" } }, { name: "asc" }],
    skip: (currentPage - 1) * ARTISTS_PER_PAGE,
    take: ARTISTS_PER_PAGE,
  });

  // Map to lowercase for components and decode HTML entities
  const artists = rawArtists.map((a) => ({
    ...a,
    name: decodeHtmlEntities(a.name),
    nationality: decodeHtmlEntities(a.nationality),
    _count: { artworks: a._count.Artwork },
    artworks: a.Artwork,
    movements: a.Movement.map((m) => ({
      ...m,
      name: decodeHtmlEntities(m.name),
    })),
  }));

  // Get the current movement name if filtered
  const currentMovement = movementFilter
    ? movements.find((m) => m.slug === movementFilter) ?? null
    : null;

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
            {currentMovement ? (
              <>
                <Link href="/artists" style={{ color: '#999' }} className="hover:text-white">
                  Artists
                </Link>
                <span className="mx-2" style={{ color: '#666' }}>/</span>
                <span style={{ color: '#fff' }}>{currentMovement.name}</span>
              </>
            ) : (
              <span style={{ color: '#fff' }}>Artists</span>
            )}
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#fff' }}>
            {typeFilter === 'sculptors'
              ? currentMovement ? `${currentMovement.name} Sculptors` : "Famous Sculptors & Their Works"
              : typeFilter === 'painters'
                ? currentMovement ? `${currentMovement.name} Painters` : "Famous Painters & Their Masterpieces"
                : currentMovement
                  ? `${currentMovement.name} Artists`
                  : "Famous Artists & Their Masterpieces"}
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#aaa' }}>
            {typeFilter === 'sculptors'
              ? currentMovement
                ? `Sculptors who defined ${currentMovement.name}. Click any artist to see their work and where to find it.`
                : "Rodin, Bernini, Canova, and more. Find their sculptures, see which museums have them, and plan your visit."
              : typeFilter === 'painters'
                ? currentMovement
                  ? `The painters who defined ${currentMovement.name}. Click any artist to see their work and where it hangs today.`
                  : "Da Vinci, Monet, Picasso, and more. Find their paintings, see which museums have them, and plan your visit."
                : currentMovement
                  ? `The painters and sculptors who defined ${currentMovement.name}. Click any artist to see their work and where it hangs today.`
                  : "Da Vinci, Monet, Picasso, and more. Find their paintings, see which museums have them, and plan your visit."}
          </p>

          <ArtistFilters
            movements={movements}
            currentMovement={currentMovement}
            movementFilter={movementFilter}
            searchQuery={searchQuery}
            typeFilter={typeFilter}
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">

        {/* Section Header */}
        <div id="artists" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          {searchQuery
            ? `Results for "${searchQuery}"`
            : typeFilter === 'sculptors'
              ? currentMovement ? `${currentMovement.name} Sculptors` : "Browse Sculptors"
              : typeFilter === 'painters'
                ? currentMovement ? `${currentMovement.name} Painters` : "Browse Painters"
                : currentMovement
                  ? `${currentMovement.name} Painters & Sculptors`
                  : "Browse All Artists"}
        </h2>
        <p className="text-neutral-600 mb-6">
          {totalArtists > 0 ? (
            <>
              Showing {(currentPage - 1) * ARTISTS_PER_PAGE + 1}–{Math.min(currentPage * ARTISTS_PER_PAGE, totalArtists)} of {totalArtists} artist{totalArtists !== 1 ? "s" : ""}
              {currentMovement && ` in ${currentMovement.name}`}
            </>
          ) : (
            <>No artists found</>
          )}
        </p>
        </div>

        {/* Artists Grid */}
        {artists.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.slug}`}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Artist Image or Featured Artwork */}
                <div className="aspect-square bg-neutral-100 relative">
                  {artist.imageUrl ? (
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      unoptimized={true}
                    />
                  ) : artist.artworks[0]?.imageUrl ? (
                    <>
                      <Image
                        src={artist.artworks[0].imageUrl}
                        alt={artist.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        unoptimized={true}
                      />
                      {/* No Portrait Available tag */}
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        No Portrait Available
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <span className="text-5xl font-light text-neutral-400">{artist.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#fff' }}>
                      {artist.name}
                    </h3>
                    {artist.birthYear && (
                      <p className="text-sm font-medium" style={{ color: '#fff' }}>
                        {artist.birthYear}
                        {artist.deathYear ? ` – ${artist.deathYear}` : ""}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  {/* Movements */}
                  {artist.movements.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {artist.movements.slice(0, 2).map((m) => (
                        <span
                          key={m.slug}
                          className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full"
                        >
                          {m.name}
                        </span>
                      ))}
                      {artist.movements.length > 2 && (
                        <span className="text-xs text-neutral-400">
                          +{artist.movements.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">
                      {artist._count.artworks} work
                      {artist._count.artworks !== 1 ? "s" : ""}
                    </span>
                    <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-100 rounded-xl p-12 text-center border border-neutral-200">
            <p className="text-neutral-500">No artists found for this filter.</p>
            <Link
              href="/artists"
              className="inline-block mt-4 text-neutral-700 hover:text-black transition-colors"
            >
              View all artists
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {/* Previous Button */}
            {currentPage > 1 ? (
              <Link
                href={`/artists?${movementFilter ? `movement=${movementFilter}&` : ""}${searchQuery ? `q=${encodeURIComponent(searchQuery)}&` : ""}${typeFilter ? `type=${typeFilter}&` : ""}page=${currentPage - 1}#artists`}
                className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                Previous
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">
                Previous
              </span>
            )}

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (page === 1 || page === totalPages) return true;
                  if (Math.abs(page - currentPage) <= 1) return true;
                  return false;
                })
                .map((page, index, arr) => {
                  // Add ellipsis if there's a gap
                  const prevPage = arr[index - 1];
                  const showEllipsis = prevPage && page - prevPage > 1;

                  return (
                    <span key={page} className="flex items-center gap-1">
                      {showEllipsis && (
                        <span className="px-2 text-neutral-400">...</span>
                      )}
                      <Link
                        href={`/artists?${movementFilter ? `movement=${movementFilter}&` : ""}${searchQuery ? `q=${encodeURIComponent(searchQuery)}&` : ""}${typeFilter ? `type=${typeFilter}&` : ""}page=${page}#artists`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          page === currentPage
                            ? "bg-black text-white"
                            : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        {page}
                      </Link>
                    </span>
                  );
                })}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
              <Link
                href={`/artists?${movementFilter ? `movement=${movementFilter}&` : ""}${searchQuery ? `q=${encodeURIComponent(searchQuery)}&` : ""}${typeFilter ? `type=${typeFilter}&` : ""}page=${currentPage + 1}#artists`}
                className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                Next
              </Link>
            ) : (
              <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">
                Next
              </span>
            )}
          </div>
        )}

        {/* About Section */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            About This Directory
          </h2>
          <div className="prose max-w-none text-neutral-700">
            <p className="mb-4">
              We&apos;ve catalogued artists from the 1400s to today, focusing on painters and sculptors whose work you can actually go see in a museum. Each profile shows you the basics: when they lived, what movements they belonged to, and where their paintings are now.
            </p>
            <p>
              Click on any artist to see their works. We list which museum has each piece, so you can plan visits or just browse what&apos;s out there.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSchema items={artistFAQs} />
        <FAQ items={artistFAQs} title="Common Questions" />

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Inspired by the Masters?
          </h2>
          <p className="text-neutral-400 mb-4">
            Own gallery-quality prints in the same style. Perfect for your <a href="https://luxurywallart.com/collections/living-room-wall-art" target="_blank" rel="noopener" className="text-[#C9A84C] hover:underline">living room</a> or <a href="https://luxurywallart.com/collections/home-office-wall-art" target="_blank" rel="noopener" className="text-[#C9A84C] hover:underline">home office</a>.
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
