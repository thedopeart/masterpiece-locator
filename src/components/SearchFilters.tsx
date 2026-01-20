"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

interface FilterOption {
  id: string;
  slug: string;
  name: string;
}

interface SearchFiltersProps {
  museums: FilterOption[];
  artists: FilterOption[];
  movements: FilterOption[];
  cities: string[];
  activeFilters: {
    museum?: string;
    artist?: string;
    movement?: string;
    city?: string;
  };
  query: string;
}

export default function SearchFilters({
  museums,
  artists,
  movements,
  cities,
  activeFilters,
  query,
}: SearchFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/search?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Filter Results</h3>

        {/* Movement / Era Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Era / Movement
          </label>
          <select
            value={activeFilters.movement || ""}
            onChange={(e) => updateFilter("movement", e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Movements</option>
            {movements.map((m) => (
              <option key={m.id} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Museum Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Museum
          </label>
          <select
            value={activeFilters.museum || ""}
            onChange={(e) => updateFilter("museum", e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Museums</option>
            {museums.map((m) => (
              <option key={m.id} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Artist Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Artist
          </label>
          <select
            value={activeFilters.artist || ""}
            onChange={(e) => updateFilter("artist", e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Artists</option>
            {artists.map((a) => (
              <option key={a.id} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <select
            value={activeFilters.city || ""}
            onChange={(e) => updateFilter("city", e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {Object.values(activeFilters).some(Boolean) && (
          <button
            onClick={() => {
              const params = new URLSearchParams();
              if (query) params.set("q", query);
              router.push(`/search?${params.toString()}`);
            }}
            className="w-full mt-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Quick Links */}
      <div className="bg-neutral-100 rounded-xl p-4">
        <h3 className="font-semibold text-neutral-900 mb-3">Browse By</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/museums"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              All Museums
            </Link>
          </li>
          <li>
            <Link
              href="/artists"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              All Artists
            </Link>
          </li>
          <li>
            <Link
              href="/movements"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Art Movements
            </Link>
          </li>
          <li>
            <Link
              href="/cities"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Art Cities
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
