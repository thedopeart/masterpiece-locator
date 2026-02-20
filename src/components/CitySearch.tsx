"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CityData {
  city: string;
  country: string;
  slug: string;
  museums: { id: string; name: string; _count: { artworks: number } }[];
  totalArtworks: number;
  previewImages: string[];
}

interface TopCity {
  city: string;
  country: string;
  slug: string;
  artworks: number;
  museums: number;
}

interface CitySearchProps {
  cities: CityData[];
  privateCollectionCount: number;
  topCities: TopCity[];
}

const CITIES_PER_PAGE = 24;

// Group cities by first letter for the alphabet filter
function getAlphabetGroups(cities: CityData[]) {
  const groups: Record<string, number> = {};
  cities.forEach((city) => {
    const letter = city.city.charAt(0).toUpperCase();
    groups[letter] = (groups[letter] || 0) + 1;
  });
  return groups;
}

export default function CitySearch({ cities, privateCollectionCount, topCities }: CitySearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const alphabetGroups = useMemo(() => getAlphabetGroups(cities), [cities]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Sync header search input with component state
  useEffect(() => {
    const headerInput = document.getElementById("city-search-header") as HTMLInputElement;
    if (headerInput) {
      // Set initial value
      headerInput.value = searchQuery;

      // Listen for changes
      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setSearchQuery(target.value);
        setCurrentPage(1);
      };

      headerInput.addEventListener("input", handleInput);
      return () => headerInput.removeEventListener("input", handleInput);
    }
  }, [searchQuery]);

  // Filter cities based on search and letter selection
  const filteredCities = useMemo(() => {
    let result = cities;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.city.toLowerCase().includes(query) ||
          c.country.toLowerCase().includes(query) ||
          c.museums.some((m) => m.name.toLowerCase().includes(query))
      );
    }

    if (selectedLetter) {
      result = result.filter(
        (c) => c.city.charAt(0).toUpperCase() === selectedLetter
      );
    }

    return result;
  }, [cities, searchQuery, selectedLetter]);

  // Pagination
  const totalPages = Math.ceil(filteredCities.length / CITIES_PER_PAGE);
  const paginatedCities = filteredCities.slice(
    (currentPage - 1) * CITIES_PER_PAGE,
    currentPage * CITIES_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    // Also update header input
    const headerInput = document.getElementById("city-search-header") as HTMLInputElement;
    if (headerInput) {
      headerInput.value = query;
    }
  };

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLetter(null);
    setCurrentPage(1);
    // Also clear header input
    const headerInput = document.getElementById("city-search-header") as HTMLInputElement;
    if (headerInput) {
      headerInput.value = "";
    }
  };

  return (
    <div>
      {/* Combined Filter Section */}
      <div className="mb-8 bg-neutral-50 rounded-xl p-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold text-neutral-900">Browse Cities</h2>

          {/* Quick Jump - Top Destinations */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-neutral-500 mr-1">Popular:</span>
            {topCities.slice(0, 6).map((city) => (
              <Link
                key={city.city}
                href={`/city/${city.slug}`}
                className="text-sm font-medium text-neutral-700 hover:text-[#C9A84C] transition-colors"
              >
                {city.city}
              </Link>
            ))}
          </div>
        </div>

        {/* Alphabet Filter */}
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setSelectedLetter(null)}
            className={`px-3 h-9 text-sm font-medium rounded transition-colors ${
              !selectedLetter
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
            }`}
          >
            All
          </button>
          {alphabet.map((letter) => {
            const count = alphabetGroups[letter] || 0;
            const isActive = selectedLetter === letter;
            const hasItems = count > 0;

            return (
              <button
                key={letter}
                onClick={() => hasItems && handleLetterClick(letter)}
                disabled={!hasItems}
                className={`w-9 h-9 text-sm font-medium rounded transition-colors ${
                  isActive
                    ? "bg-[#C9A84C] text-white"
                    : hasItems
                    ? "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    : "bg-neutral-100 text-neutral-300 cursor-not-allowed border border-transparent"
                }`}
                title={hasItems ? `${count} cities` : "No cities"}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedLetter) && (
          <div className="flex items-center gap-2 text-sm mt-4 pt-4 border-t border-neutral-200">
            <span className="text-neutral-500">
              {filteredCities.length} {filteredCities.length === 1 ? "city" : "cities"} found
            </span>
            {selectedLetter && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#C9A84C]/10 text-[#C9A84C] rounded font-medium">
                Starting with {selectedLetter}
                <button onClick={() => setSelectedLetter(null)} className="hover:text-[#b8973f] ml-1 p-1 -m-1">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-white text-neutral-700 rounded border border-neutral-200">
                &ldquo;{searchQuery}&rdquo;
                <button onClick={() => handleSearch("")} className="hover:text-neutral-900 ml-1 p-1 -m-1">×</button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-neutral-500 hover:text-neutral-700 underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Cities Grid */}
      {paginatedCities.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCities.map((cityData) => (
            <Link
              key={`${cityData.city}-${cityData.country}`}
              href={`/city/${cityData.slug}`}
              className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Preview Images Grid */}
              <div className="h-40 bg-neutral-100 relative">
                {cityData.previewImages.length > 0 ? (
                  <div className="grid grid-cols-2 h-full">
                    {cityData.previewImages.slice(0, 4).map((url, idx) => (
                      <div key={idx} className="relative">
                        <Image
                          src={url}
                          alt={`Art in ${cityData.city}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 15vw"
                          unoptimized={true}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <span className="text-4xl font-light text-neutral-400">{cityData.city.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {cityData.city}
                  </h3>
                  <p className="text-neutral-300 text-sm">{cityData.country}</p>
                </div>
              </div>

              <div className="p-4">
                {/* Museums list */}
                <div className="mb-3">
                  <p className="text-sm text-neutral-500 mb-2">
                    {cityData.museums.length} museum
                    {cityData.museums.length !== 1 ? "s" : ""}
                  </p>
                  <ul className="space-y-1">
                    {cityData.museums.slice(0, 3).map((museum) => (
                      <li
                        key={museum.id}
                        className="text-sm text-neutral-700 truncate"
                      >
                        {museum.name}
                        <span className="text-neutral-400 ml-1">
                          ({museum._count.artworks})
                        </span>
                      </li>
                    ))}
                    {cityData.museums.length > 3 && (
                      <li className="text-sm text-neutral-400">
                        +{cityData.museums.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <span className="text-sm font-medium text-neutral-900">
                    {cityData.totalArtworks} masterpiece
                    {cityData.totalArtworks !== 1 ? "s" : ""}
                  </span>
                  <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Private Collections Card - only show on first page with no filters */}
          {currentPage === 1 && !searchQuery && !selectedLetter && privateCollectionCount > 0 && (
            <div className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-neutral-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-neutral-600 font-medium">Private Collections</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-600 mb-3">
                  Many masterpieces are held in private collections and not publicly accessible. These works occasionally appear at auctions or special museum exhibitions.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                  <span className="text-sm font-medium text-neutral-900">
                    {privateCollectionCount} masterpiece
                    {privateCollectionCount !== 1 ? "s" : ""}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    Not publicly viewable
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 bg-neutral-50 rounded-lg">
          <svg className="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-neutral-600 mb-2">No cities match your search</p>
          <button
            onClick={clearFilters}
            className="text-[#C9A84C] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Previous
            </button>
          )}

          {/* Page numbers */}
          {(() => {
            const pages = [];
            const maxVisible = 5;

            let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
            const endPage = Math.min(totalPages, startPage + maxVisible - 1);

            if (endPage - startPage + 1 < maxVisible) {
              startPage = Math.max(1, endPage - maxVisible + 1);
            }

            // First page + ellipsis
            if (startPage > 1) {
              pages.push(
                <button
                  key={1}
                  onClick={() => setCurrentPage(1)}
                  className="w-10 h-10 flex items-center justify-center text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  1
                </button>
              );
              if (startPage > 2) {
                pages.push(
                  <span key="ellipsis-start" className="px-2 text-neutral-400">...</span>
                );
              }
            }

            // Page numbers
            for (let i = startPage; i <= endPage; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-colors ${
                    i === currentPage
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  {i}
                </button>
              );
            }

            // Last page + ellipsis
            if (endPage < totalPages) {
              if (endPage < totalPages - 1) {
                pages.push(
                  <span key="ellipsis-end" className="px-2 text-neutral-400">...</span>
                );
              }
              pages.push(
                <button
                  key={totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                  className="w-10 h-10 flex items-center justify-center text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  {totalPages}
                </button>
              );
            }

            return pages;
          })()}

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* Results count */}
      {filteredCities.length > 0 && (
        <p className="text-center text-neutral-500 text-sm mt-4">
          Showing {Math.min((currentPage - 1) * CITIES_PER_PAGE + 1, filteredCities.length)}-
          {Math.min(currentPage * CITIES_PER_PAGE, filteredCities.length)} of {filteredCities.length} cities
        </p>
      )}
    </div>
  );
}
