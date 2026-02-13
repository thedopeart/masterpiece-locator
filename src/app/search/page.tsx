import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import SearchFilters from "@/components/SearchFilters";
import SearchInput from "@/components/SearchInput";

// Search page needs dynamic rendering for query params
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    q?: string;
    museum?: string;
    artist?: string;
    movement?: string;
    city?: string;
    type?: string;
    page?: string;
  }>;
}

const ITEMS_PER_PAGE = 50;

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q || "";
  const page = parseInt(params.page || "1", 10);

  // Build canonical URL (strip page=1, keep query)
  const canonicalBase = "https://luxurywallart.com/apps/masterpieces/search";
  const canonicalParams = new URLSearchParams();
  if (query) canonicalParams.set("q", query);
  if (page > 1) canonicalParams.set("page", String(page));
  const canonical = canonicalParams.toString()
    ? `${canonicalBase}?${canonicalParams.toString()}`
    : canonicalBase;

  // Keyword-focused titles (no branding)
  return {
    title: query
      ? `${query} Paintings: Where to See Them`
      : "Search Famous Paintings by Artist, Museum, or City",
    description: query
      ? `Find where to see "${query}" paintings and artwork in person. Browse museum locations, visiting hours, and tickets for famous paintings worldwide.`
      : "Search 3,600+ famous artworks by artist, museum, or city. Find where paintings are displayed, get visiting hours, tickets, and plan your museum visit.",
    ...(page > 1 && { robots: { index: false, follow: true } }),
    alternates: { canonical },
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
    type: typeFilter,
    page: pageParam,
  } = params;

  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  // Get filter options and type counts
  const [museums, artists, movements, cities, typeCountsRaw] = await Promise.all([
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
    prisma.artwork.groupBy({
      by: ["artworkType"],
      _count: true,
    }),
  ]);

  // Transform type counts into object
  const typeCounts = {
    painting: 0,
    sculpture: 0,
    print: 0,
    drawing: 0,
  };
  typeCountsRaw.forEach((tc) => {
    if (tc.artworkType in typeCounts) {
      typeCounts[tc.artworkType as keyof typeof typeCounts] = tc._count;
    }
  });

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

  if (typeFilter) {
    whereClause.artworkType = typeFilter;
  }

  // Check if any filters are active
  const hasFilters = query || museumFilter || artistFilter || movementFilter || cityFilter || typeFilter;

  // Get total count and paginated artworks
  const artworkWhere = hasFilters ? whereClause : {};

  // For search queries, use raw SQL to get relevance-based ordering
  // Title matches > Artist matches > Museum matches > Description matches
  let rawArtworks;
  let totalArtworks;

  if (query && !museumFilter && !artistFilter && !movementFilter && !cityFilter && !typeFilter) {
    // Use raw query for relevance scoring when only text search is active
    const searchTerm = `%${query}%`;

    // Get total count
    const countResult = await prisma.$queryRaw<[{ count: bigint }]>`
      SELECT COUNT(*) as count FROM "Artwork" a
      LEFT JOIN "Artist" ar ON a."artistId" = ar.id
      LEFT JOIN "Museum" m ON a."museumId" = m.id
      WHERE
        a.title ILIKE ${searchTerm} OR
        a.description ILIKE ${searchTerm} OR
        ar.name ILIKE ${searchTerm} OR
        m.name ILIKE ${searchTerm}
    `;
    totalArtworks = Number(countResult[0].count);

    // Get paginated results with relevance ordering
    const artworkIds = await prisma.$queryRaw<{ id: string }[]>`
      SELECT a.id,
        CASE
          WHEN a.title ILIKE ${searchTerm} THEN 1
          WHEN ar.name ILIKE ${searchTerm} THEN 2
          WHEN m.name ILIKE ${searchTerm} THEN 3
          ELSE 4
        END as relevance,
        CASE WHEN a."imageUrl" IS NOT NULL THEN 0 ELSE 1 END as has_image,
        COALESCE(a."searchVolumeTier", 999) as tier
      FROM "Artwork" a
      LEFT JOIN "Artist" ar ON a."artistId" = ar.id
      LEFT JOIN "Museum" m ON a."museumId" = m.id
      WHERE
        a.title ILIKE ${searchTerm} OR
        a.description ILIKE ${searchTerm} OR
        ar.name ILIKE ${searchTerm} OR
        m.name ILIKE ${searchTerm}
      ORDER BY relevance ASC, has_image ASC, tier ASC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE}
    `;

    // Fetch full artwork data for the IDs in the correct order
    const idOrder = artworkIds.map(r => r.id);
    const artworksUnordered = await prisma.artwork.findMany({
      where: { id: { in: idOrder } },
      include: {
        Artist: { select: { name: true } },
        Museum: { select: { name: true, city: true } },
      },
    });

    // Reorder to match the relevance order
    rawArtworks = idOrder.map(id => artworksUnordered.find(a => a.id === id)!).filter(Boolean);
  } else {
    // Use standard Prisma query for filtered searches or no query
    [totalArtworks, rawArtworks] = await Promise.all([
      prisma.artwork.count({ where: artworkWhere }),
      prisma.artwork.findMany({
        where: artworkWhere,
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        orderBy: [
          { imageUrl: { sort: "desc", nulls: "last" } },
          { searchVolumeTier: "asc" },
        ],
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
      }),
    ]);
  }

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

  // Fuzzy search suggestions if no exact artist matches
  let artistSuggestions: { name: string; slug: string }[] = [];
  if (query && rawArtistResults.length === 0 && query.length >= 3) {
    const q = query.toLowerCase().replace(/\s+/g, '');
    const qSlug = query.toLowerCase().replace(/\s+/g, '-');
    const fuzzyArtists = await prisma.$queryRaw<{ name: string; slug: string }[]>`
      SELECT name, slug FROM "Artist"
      WHERE
        LOWER(REPLACE(name, ' ', '')) LIKE ${`%${q}%`}
        OR slug LIKE ${`%${qSlug}%`}
        OR LOWER(name) LIKE ${`%${q.slice(0, -1)}%`}
        OR LOWER(name) LIKE ${`${q.slice(0, Math.min(4, q.length))}%`}
      ORDER BY LENGTH(name)
      LIMIT 5
    `;
    artistSuggestions = fuzzyArtists;
  }

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

  // Fuzzy museum suggestions if no exact matches
  let museumSuggestions: { name: string; slug: string }[] = [];
  if (query && rawMuseumResults.length === 0 && query.length >= 3) {
    const q = query.toLowerCase();
    const fuzzyMuseums = await prisma.$queryRaw<{ name: string; slug: string }[]>`
      SELECT name, slug FROM "Museum"
      WHERE
        LOWER(name) LIKE ${`%${q}%`}
        OR LOWER(city) LIKE ${`%${q}%`}
        OR LOWER(name) LIKE ${`${q.slice(0, Math.min(4, q.length))}%`}
      ORDER BY LENGTH(name)
      LIMIT 3
    `;
    museumSuggestions = fuzzyMuseums;
  }

  // Map to lowercase for components
  const museumResults = rawMuseumResults.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
  }));

  // Get active filter names
  const typeLabels: Record<string, string> = {
    painting: "Paintings",
    sculpture: "Sculptures",
    print: "Prints",
    drawing: "Drawings",
  };
  const activeFilters = {
    museum: museumFilter ? museums.find((m) => m.slug === museumFilter)?.name : null,
    artist: artistFilter ? artists.find((a) => a.slug === artistFilter)?.name : null,
    movement: movementFilter ? movements.find((m) => m.slug === movementFilter)?.name : null,
    city: cityFilter,
    type: typeFilter ? typeLabels[typeFilter] || typeFilter : null,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="py-8">
        <div className="max-w-[1400px] mx-auto px-4">
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
          <SearchInput defaultValue={query} />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">

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
                type: typeFilter,
              }}
              query={query}
              typeCounts={typeCounts}
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
                    href={`/search?${new URLSearchParams({ q: query, artist: artistFilter || "", movement: movementFilter || "", city: cityFilter || "", type: typeFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200"
                  >
                    {activeFilters.museum}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.artist && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", movement: movementFilter || "", city: cityFilter || "", type: typeFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200"
                  >
                    {activeFilters.artist}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.movement && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", artist: artistFilter || "", city: cityFilter || "", type: typeFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm hover:bg-amber-200"
                  >
                    {activeFilters.movement}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.city && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", artist: artistFilter || "", movement: movementFilter || "", type: typeFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200"
                  >
                    {activeFilters.city}
                    <span className="ml-1">×</span>
                  </Link>
                )}
                {activeFilters.type && (
                  <Link
                    href={`/search?${new URLSearchParams({ q: query, museum: museumFilter || "", artist: artistFilter || "", movement: movementFilter || "", city: cityFilter || "" }).toString()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm hover:bg-teal-200"
                  >
                    {activeFilters.type}
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
                <section id="results" className="scroll-mt-20">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                    {hasFilters ? `Artworks (${totalArtworks})` : `Browse All Artworks (${totalArtworks})`}
                  </h2>
                  {artworks.length > 0 ? (
                    <>
                      <div className="masonry-grid">
                        {artworks.map((artwork, index) => (
                          <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
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
                                ...(typeFilter && { type: typeFilter }),
                                page: String(currentPage - 1),
                              }).toString()}#results`}
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
                                      ...(typeFilter && { type: typeFilter }),
                                      page: String(page),
                                    }).toString()}#results`}
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
                                ...(typeFilter && { type: typeFilter }),
                                page: String(currentPage + 1),
                              }).toString()}#results`}
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
                      <p className="text-neutral-600 text-lg mb-2">
                        No results found for &quot;{query}&quot;
                      </p>
                      <p className="text-neutral-500 text-sm mb-4">
                        Try checking your spelling or using different keywords
                      </p>
                      {(artistSuggestions.length > 0 || museumSuggestions.length > 0) && (
                        <div className="mb-4">
                          <p className="text-sm text-neutral-500 mb-2">Did you mean:</p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {artistSuggestions.map((suggestion) => (
                              <Link
                                key={suggestion.slug}
                                href={`/search?q=${encodeURIComponent(suggestion.name)}`}
                                className="px-3 py-1 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                              >
                                {suggestion.name}
                              </Link>
                            ))}
                            {museumSuggestions.map((suggestion) => (
                              <Link
                                key={suggestion.slug}
                                href={`/museum/${suggestion.slug}`}
                                className="px-3 py-1 bg-white border border-neutral-300 rounded-full text-sm text-neutral-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                              >
                                {suggestion.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      <Link
                        href="/search"
                        className="inline-block mt-2 text-[#C9A84C] hover:opacity-80 transition-opacity"
                      >
                        Browse all artworks
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
