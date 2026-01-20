import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import SearchFilters from "@/components/SearchFilters";

// Search page needs dynamic rendering for query params
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    q?: string;
    museum?: string;
    artist?: string;
    movement?: string;
    city?: string;
    page?: string;
  }>;
}

const ITEMS_PER_PAGE = 50;

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q || "";

  // Keyword-focused titles (no branding)
  return {
    title: query
      ? `${query} Paintings: Where to See Them`
      : "Search Famous Paintings by Artist, Museum, or City",
    description: query
      ? `Find where to see "${query}" in person. Museum locations, hours, and tickets for famous paintings.`
      : "Search famous artworks, artists, and museums. Find where masterpieces are located worldwide.",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const {
    q: query = "",
    museum: museumFilter,
    artist: artistFilter,
    movement: movementFilter,
    city: cityFilter,
    page: pageParam,
  } = params;

  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  // Get filter options
  const [museums, artists, movements, cities] = await Promise.all([
    prisma.museum.findMany({
      select: { id: true, slug: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.artist.findMany({
      select: { id: true, slug: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.movement.findMany({
      select: { id: true, slug: true, name: true },
      orderBy: { startYear: "asc" },
    }),
    prisma.museum.findMany({
      select: { city: true, country: true },
      distinct: ["city"],
      orderBy: { city: "asc" },
    }),
  ]);

  // Build where clause
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whereClause: any = {};

  if (query) {
    whereClause.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { description: { contains: query, mode: "insensitive" } },
      { Artist: { name: { contains: query, mode: "insensitive" } } },
      { Museum: { name: { contains: query, mode: "insensitive" } } },
      { styleTags: { has: query } },
    ];
  }

  if (museumFilter) {
    whereClause.Museum = { slug: museumFilter };
  }

  if (artistFilter) {
    whereClause.Artist = { slug: artistFilter };
  }

  if (movementFilter) {
    whereClause.Artist = {
      ...whereClause.Artist,
      Movement: { some: { slug: movementFilter } },
    };
  }

  if (cityFilter) {
    whereClause.Museum = {
      ...whereClause.Museum,
      city: { equals: cityFilter, mode: "insensitive" },
    };
  }

  // Check if any filters are active
  const hasFilters = query || museumFilter || artistFilter || movementFilter || cityFilter;

  // Get total count and paginated artworks
  const artworkWhere = hasFilters ? whereClause : {};
  const [totalArtworks, rawArtworks] = await Promise.all([
    prisma.artwork.count({ where: artworkWhere }),
    prisma.artwork.findMany({
      where: artworkWhere,
      include: {
        Artist: { select: { name: true } },
        Museum: { select: { name: true, city: true } },
      },
      orderBy: [
        { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
        { searchVolumeTier: "asc" },
      ],
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    }),
  ]);

  // Map to lowercase property names for ArtworkCard component
  const artworks = rawArtworks.map((a) => ({
    ...a,
    artist: a.Artist,
    museum: a.Museum,
  }));

  const totalPages = Math.ceil(totalArtworks / ITEMS_PER_PAGE);

  // Also search artists and museums if there's a text query
  const rawArtistResults = query
    ? await prisma.artist.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { nationality: { contains: query, mode: "insensitive" } },
          ],
        },
        include: { _count: { select: { Artwork: true } } },
        take: 10,
      })
    : [];

  // Map to lowercase for components
  const artistResults = rawArtistResults.map((a) => ({
    ...a,
    _count: { artworks: a._count.Artwork },
  }));

  const rawMuseumResults = query
    ? await prisma.museum.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { city: { contains: query, mode: "insensitive" } },
            { country: { contains: query, mode: "insensitive" } },
          ],
        },
        include: { _count: { select: { Artwork: true } } },
        take: 10,
      })
    : [];

  // Map to lowercase for components
  const museumResults = rawMuseumResults.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
  }));

  // Get active filter names
  const activeFilters = {
    museum: museumFilter ? museums.find((m) => m.slug === museumFilter)?.name : null,
    artist: artistFilter ? artists.find((a) => a.slug === artistFilter)?.name : null,
    movement: movementFilter ? movements.find((m) => m.slug === movementFilter)?.name : null,
    city: cityFilter,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-4">
            <Link href="/" style={{ color: '#999' }} className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" style={{ color: '#666' }}>/</span>
            <span style={{ color: '#fff' }}>Search</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#fff' }}>
            {query ? `Results for "${query}"` : "Search"}
          </h1>

          {/* Search Form */}
          <form action="/search" method="GET" className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Try 'Mona Lisa', 'Van Gogh', or 'Louvre'..."
                className="w-full px-5 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2"
                style={{ backgroundColor: '#fff', color: '#000' }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                style={{ color: '#666' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters
              museums={museums}
              artists={artists}
              movements={movements}
              cities={cities.map((c) => c.city)}
              activeFilters={{
                museum: museumFilter,
                artist: artistFilter,
                movement: movementFilter,
                city: cityFilter,
              }}
              query={query}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Active Filters */}
            {Object.values(activeFilters).some(Boolean) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-neutral-500">Filters:</span>
                {activeFilters.museum && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, artist: artistFilter || "", movement: movementFilter || "", city: cityFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200"
                  >
                    {activeFilters.museum}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.artist && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", movement: movementFilter || "", city: cityFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200"
                  >
                    {activeFilters.artist}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.movement && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", artist: artistFilter || "", city: cityFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm hover:bg-amber-200"
                  >
                    {activeFilters.movement}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.city && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", artist: artistFilter || "", movement: movementFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200"
                  >
                    {activeFilters.city}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                <Link
                  href="/search"
                  className="text-sm text-neutral-500 hover:text-neutral-700 ml-2"
                >
                  Clear all
                </Link>
              </div>
            )}

            <>
              {/* Artist Results */}
                {artistResults.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                      Artists ({artistResults.length})
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {artistResults.map((artist) => (
                        <Link
                          key={artist.id}
                          href={`/artist/${artist.slug}`}
                          className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-lg font-semibold text-neutral-600">
                            {artist.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-medium text-neutral-900">
                              {artist.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {artist._count.artworks} works
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Museum Results */}
                {museumResults.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                      Museums ({museumResults.length})
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {museumResults.map((museum) => (
                        <Link
                          key={museum.id}
                          href={`/museum/${museum.slug}`}
                          className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-lg font-semibold text-neutral-600">
                            {museum.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-medium text-neutral-900">
                              {museum.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {museum.city}, {museum.country} · {museum._count.artworks} works
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Artwork Results */}
                <section>
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                    {hasFilters ? `Artworks (${totalArtworks})` : `Browse All Artworks (${totalArtworks})`}
                  </h2>
                  {artworks.length > 0 ? (
                    <>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {artworks.map((artwork) => (
                          <ArtworkCard key={artwork.id} artwork={artwork} />
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-2">
                          {currentPage > 1 && (
                            <Link
                              href={`/search?${new URLSearchParams({
                                ...(query && { q: query }),
                                ...(museumFilter && { museum: museumFilter }),
                                ...(artistFilter && { artist: artistFilter }),
                                ...(movementFilter && { movement: movementFilter }),
                                ...(cityFilter && { city: cityFilter }),
                                page: String(currentPage - 1),
                              }).toString()}`}
                              className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                              Previous
                            </Link>
                          )}

                          <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                              .filter((page) => {
                                if (totalPages <= 7) return true;
                                if (page === 1 || page === totalPages) return true;
                                if (Math.abs(page - currentPage) <= 1) return true;
                                return false;
                              })
                              .map((page, idx, arr) => (
                                <span key={page} className="flex items-center">
                                  {idx > 0 && arr[idx - 1] !== page - 1 && (
                                    <span className="px-2 text-neutral-400">...</span>
                                  )}
                                  <Link
                                    href={`/search?${new URLSearchParams({
                                      ...(query && { q: query }),
                                      ...(museumFilter && { museum: museumFilter }),
                                      ...(artistFilter && { artist: artistFilter }),
                                      ...(movementFilter && { movement: movementFilter }),
                                      ...(cityFilter && { city: cityFilter }),
                                      page: String(page),
                                    }).toString()}`}
                                    className={`px-4 py-2 rounded-lg transition-colors ${
                                      page === currentPage
                                        ? "bg-[#C9A84C] text-white"
                                        : "border border-neutral-300 hover:bg-neutral-100"
                                    }`}
                                  >
                                    {page}
                                  </Link>
                                </span>
                              ))}
                          </div>

                          {currentPage < totalPages && (
                            <Link
                              href={`/search?${new URLSearchParams({
                                ...(query && { q: query }),
                                ...(museumFilter && { museum: museumFilter }),
                                ...(artistFilter && { artist: artistFilter }),
                                ...(movementFilter && { movement: movementFilter }),
                                ...(cityFilter && { city: cityFilter }),
                                page: String(currentPage + 1),
                              }).toString()}`}
                              className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                              Next
                            </Link>
                          )}
                        </div>
                      )}

                      {/* Page info */}
                      <p className="mt-4 text-center text-sm text-neutral-500">
                        Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, totalArtworks)} of {totalArtworks} artworks
                      </p>
                    </>
                  ) : (
                    <div className="bg-neutral-100 rounded-lg p-8 text-center">
                      <p className="text-neutral-500">
                        No artworks found matching your criteria.
                      </p>
                      <Link
                        href="/search"
                        className="inline-block mt-4 text-[#C9A84C] hover:underline"
                      >
                        Clear filters
                      </Link>
                    </div>
                  )}
                </section>
              </>
          </div>
        </div>
      </div>
    </div>
  );
}
