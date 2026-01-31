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
  typeFilter: string | undefined;
}

export default function ArtistFilters({
  movements,
  currentMovement,
  movementFilter,
  searchQuery,
  typeFilter,
}: ArtistFiltersProps) {
  const router = useRouter();

  const buildUrl = (overrides: Record<string, string | undefined>) => {
    const params = new URLSearchParams();
    const vals = {
      movement: movementFilter,
      q: searchQuery || undefined,
      type: typeFilter,
      ...overrides,
    };
    for (const [k, v] of Object.entries(vals)) {
      if (v) params.set(k, v);
    }
    return `/artists${params.toString() ? "?" + params.toString() : ""}`;
  };

  const handleMovementChange = (value: string) => {
    router.push(buildUrl({ movement: value || undefined, page: undefined }));
  };

  const handleTypeChange = (value: string) => {
    router.push(buildUrl({ type: value || undefined, page: undefined }));
  };

  return (
    <>
      {/* Type Toggle */}
      <div className="mt-8 flex gap-1 bg-white/10 rounded-lg p-1 w-fit">
        <button
          onClick={() => handleTypeChange("")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !typeFilter
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          All Artists
        </button>
        <button
          onClick={() => handleTypeChange("painters")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            typeFilter === "painters"
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Painters
        </button>
        <button
          onClick={() => handleTypeChange("sculptors")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            typeFilter === "sculptors"
              ? "bg-white text-black"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Sculptors
        </button>
      </div>

      {/* Search and Filter Controls */}
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <form action="/artists" method="get">
            {movementFilter && (
              <input type="hidden" name="movement" value={movementFilter} />
            )}
            {typeFilter && (
              <input type="hidden" name="type" value={typeFilter} />
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
      {(searchQuery || movementFilter || typeFilter) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-neutral-400">Active filters:</span>
          {searchQuery && (
            <Link
              href={buildUrl({ q: undefined })}
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
          {typeFilter && (
            <Link
              href={buildUrl({ type: undefined })}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#C9A84C] text-black text-sm rounded-full hover:bg-[#b8973f] transition-colors"
            >
              {typeFilter === "painters" ? "Painters" : "Sculptors"}
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
              href={buildUrl({ movement: undefined })}
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
