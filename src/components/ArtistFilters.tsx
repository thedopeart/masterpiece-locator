"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface Movement {
  id: string;
  slug: string;
  name: string;
  _count: { artists: number };
}

interface ArtistFiltersProps {
  movements: Movement[];
  currentMovement: Movement | null;
  movementFilter: string | undefined;
  searchQuery: string;
}

export default function ArtistFilters({
  movements,
  currentMovement,
  movementFilter,
  searchQuery,
}: ArtistFiltersProps) {
  const router = useRouter();

  const handleMovementChange = (value: string) => {
    const params = new URLSearchParams();
    if (value) params.set("movement", value);
    if (searchQuery) params.set("q", searchQuery);
    router.push(`/artists${params.toString() ? "?" + params.toString() : ""}`);
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <form action="/artists" method="get">
            {movementFilter && (
              <input type="hidden" name="movement" value={movementFilter} />
            )}
            <input
              type="text"
              name="q"
              placeholder="Search artists by name..."
              defaultValue={searchQuery}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>

        {/* Movement Filter Dropdown */}
        <div className="relative">
          <select
            className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors cursor-pointer min-w-[200px]"
            value={movementFilter || ""}
            onChange={(e) => handleMovementChange(e.target.value)}
          >
            <option value="" className="bg-neutral-900">
              All Movements
            </option>
            {movements.map((movement) => (
              <option
                key={movement.id}
                value={movement.slug}
                className="bg-neutral-900"
              >
                {movement.name} ({movement._count.artists})
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Active Filters */}
      {(searchQuery || movementFilter) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-neutral-400">Active filters:</span>
          {searchQuery && (
            <Link
              href={`/artists${movementFilter ? `?movement=${movementFilter}` : ""}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#C9A84C] text-black text-sm rounded-full hover:bg-[#b8973f] transition-colors"
            >
              Search: &quot;{searchQuery}&quot;
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          )}
          {currentMovement && (
            <Link
              href={`/artists${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#C9A84C] text-black text-sm rounded-full hover:bg-[#b8973f] transition-colors"
            >
              {currentMovement.name}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          )}
          <Link
            href="/artists"
            className="text-sm text-neutral-400 hover:text-white transition-colors ml-2"
          >
            Clear all
          </Link>
        </div>
      )}
    </>
  );
}
