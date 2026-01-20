"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Base path for API calls (matches next.config.ts)
const BASE_PATH = "/apps/masterpieces";

interface SearchResult {
  type: "artwork" | "artist" | "museum";
  slug: string;
  title: string;
  subtitle: string;
  imageUrl?: string | null;
}

interface SearchResults {
  artworks: SearchResult[];
  artists: SearchResult[];
  museums: SearchResult[];
}

// Thumbnail component with error handling using Next.js Image
function Thumbnail({
  src,
  alt,
  fallback,
  rounded = false
}: {
  src?: string | null;
  alt: string;
  fallback: string;
  rounded?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  const showFallback = !src || hasError;

  return (
    <div
      className={`w-12 h-12 overflow-hidden bg-neutral-100 flex-shrink-0 relative ${
        rounded ? "rounded-full" : "rounded"
      }`}
    >
      {showFallback ? (
        <div className="w-full h-full flex items-center justify-center bg-neutral-200 text-sm font-medium text-neutral-500">
          {fallback}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="48px"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build flat list of all results for keyboard navigation
  const getAllItems = () => {
    if (!results) return [];
    const items: { type: string; slug: string; href: string }[] = [];
    results.artworks.forEach((item) => items.push({ type: "artwork", slug: item.slug, href: `/art/${item.slug}` }));
    results.artists.forEach((item) => items.push({ type: "artist", slug: item.slug, href: `/artist/${item.slug}` }));
    results.museums.forEach((item) => items.push({ type: "museum", slug: item.slug, href: `/museum/${item.slug}` }));
    return items;
  };

  const allItems = getAllItems();

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults(null);
      setIsOpen(false);
      setSelectedIndex(-1);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_PATH}/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results);
        setIsOpen(true);
        setSelectedIndex(-1); // Reset selection when results change
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      setSelectedIndex(-1);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || allItems.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < allItems.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allItems.length - 1));
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < allItems.length) {
          e.preventDefault();
          setIsOpen(false);
          setSelectedIndex(-1);
          router.push(allItems[selectedIndex].href);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Helper to check if an item is selected by its index in the flat list
  const isSelected = (type: string, slug: string) => {
    if (selectedIndex < 0) return false;
    const item = allItems[selectedIndex];
    return item && item.type === type && item.slug === slug;
  };

  const hasResults = results && (
    results.artworks.length > 0 ||
    results.artists.length > 0 ||
    results.museums.length > 0
  );

  const hasArtworks = results && results.artworks.length > 0;
  const hasSecondary = results && (results.artists.length > 0 || results.museums.length > 0);

  return (
    <div ref={wrapperRef} className="w-full max-w-2xl relative" style={{ zIndex: 9999 }}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => hasResults && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search artworks, artists, or museums..."
            className="w-full px-5 py-4 pr-14 text-lg border border-neutral-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            role="combobox"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Search"
          >
            {isLoading ? (
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>

      {/* Autocomplete dropdown - Two column layout */}
      {isOpen && hasResults && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          {/* Two-column grid layout - stacks on mobile, side-by-side on desktop */}
          {hasArtworks && hasSecondary ? (
            <div className="flex flex-col md:grid md:grid-cols-[60%_40%]">
              {/* Left column - Artworks (60%) */}
              <div className="p-3 border-b-2 md:border-b-0 md:border-r-2 border-neutral-200">
                <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Artworks
                </p>
                <div className="space-y-1">
                  {results.artworks.map((item) => (
                    <Link
                      key={`artwork-${item.slug}`}
                      href={`/art/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                        isSelected("artwork", item.slug) ? "bg-neutral-100" : "hover:bg-neutral-50"
                      }`}
                    >
                      <Thumbnail
                        src={item.imageUrl}
                        alt={item.title}
                        fallback={item.title.charAt(0)}
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-medium text-neutral-900 truncate text-left">
                          {item.title}
                        </p>
                        <p className="text-xs text-neutral-500 truncate text-left">
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right column - Artists & Museums (40%) */}
              <div className="p-3 bg-neutral-50">
                {/* Artists */}
                {results.artists.length > 0 && (
                  <div className={results.museums.length > 0 ? "mb-4" : ""}>
                    <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-left">
                      Artists
                    </p>
                    <div className="space-y-1">
                      {results.artists.map((item) => (
                        <Link
                          key={`artist-${item.slug}`}
                          href={`/artist/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                            isSelected("artist", item.slug) ? "bg-white" : "hover:bg-white"
                          }`}
                        >
                          <Thumbnail
                            src={item.imageUrl}
                            alt={item.title}
                            fallback={item.title.charAt(0)}
                            rounded
                          />
                          <div className="flex-1 min-w-0 text-left">
                            <p className="text-sm font-medium text-neutral-900 truncate text-left">
                              {item.title}
                            </p>
                            <p className="text-xs text-neutral-500 truncate text-left">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Museums */}
                {results.museums.length > 0 && (
                  <div>
                    <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-left">
                      Museums
                    </p>
                    <div className="space-y-1">
                      {results.museums.map((item) => (
                        <Link
                          key={`museum-${item.slug}`}
                          href={`/museum/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                            isSelected("museum", item.slug) ? "bg-white" : "hover:bg-white"
                          }`}
                        >
                          <Thumbnail
                            src={item.imageUrl}
                            alt={item.title}
                            fallback={item.title.charAt(0)}
                          />
                          <div className="flex-1 min-w-0 text-left">
                            <p className="text-sm font-medium text-neutral-900 truncate text-left">
                              {item.title}
                            </p>
                            <p className="text-xs text-neutral-500 truncate text-left">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Single column when only one category has results */
            <div className="p-3">
              {hasArtworks && (
                <>
                  <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-left">
                    Artworks
                  </p>
                  <div className="space-y-1">
                    {results.artworks.map((item) => (
                      <Link
                        key={`artwork-${item.slug}`}
                        href={`/art/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                          isSelected("artwork", item.slug) ? "bg-neutral-100" : "hover:bg-neutral-50"
                        }`}
                      >
                        <Thumbnail
                          src={item.imageUrl}
                          alt={item.title}
                          fallback={item.title.charAt(0)}
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-sm font-medium text-neutral-900 truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-neutral-500 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {results.artists.length > 0 && (
                <div className={hasArtworks ? "mt-4" : ""}>
                  <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-left">
                    Artists
                  </p>
                  <div className="space-y-1">
                    {results.artists.map((item) => (
                      <Link
                        key={`artist-${item.slug}`}
                        href={`/artist/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                          isSelected("artist", item.slug) ? "bg-neutral-100" : "hover:bg-neutral-50"
                        }`}
                      >
                        <Thumbnail
                          src={item.imageUrl}
                          alt={item.title}
                          fallback={item.title.charAt(0)}
                          rounded
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-sm font-medium text-neutral-900 truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-neutral-500 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.museums.length > 0 && (
                <div className={(hasArtworks || results.artists.length > 0) ? "mt-4" : ""}>
                  <p className="px-2 py-1 text-xs font-semibold text-neutral-400 uppercase tracking-wider text-left">
                    Museums
                  </p>
                  <div className="space-y-1">
                    {results.museums.map((item) => (
                      <Link
                        key={`museum-${item.slug}`}
                        href={`/museum/${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors ${
                          isSelected("museum", item.slug) ? "bg-neutral-100" : "hover:bg-neutral-50"
                        }`}
                      >
                        <Thumbnail
                          src={item.imageUrl}
                          alt={item.title}
                          fallback={item.title.charAt(0)}
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-sm font-medium text-neutral-900 truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-neutral-500 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer - View all results */}
          <div className="px-4 py-3 border-t border-neutral-100 bg-neutral-50">
            <button
              onClick={handleSubmit}
              className="text-sm text-neutral-600 hover:text-black transition-colors flex items-center gap-1"
            >
              View all results for &ldquo;{query}&rdquo;
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && results && !hasResults && query.length >= 2 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 p-4"
          style={{ zIndex: 9999 }}
        >
          <p className="text-sm text-neutral-500">
            No results found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
