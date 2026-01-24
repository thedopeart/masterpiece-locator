"use client";

import { useState } from "react";
import Link from "next/link";

interface Artist {
  id: string;
  slug: string;
  name: string;
  _count: { artworks: number };
}

interface FeaturedArtistsProps {
  artists: Artist[];
}

export default function FeaturedArtists({ artists }: FeaturedArtistsProps) {
  const [expanded, setExpanded] = useState(false);

  if (artists.length === 0) return null;

  const displayedArtists = expanded ? artists : artists.slice(0, 5);

  return (
    <section className="bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
      <div className="bg-neutral-800 py-3 px-5 text-center">
        <h2 className="text-lg font-bold text-white">
          Featured Artists
        </h2>
        <p className="text-sm font-medium text-neutral-400">
          {artists.length} artists in database
        </p>
      </div>
      <div className="p-5">
        <div className="space-y-2">
          {displayedArtists.map((artist, index) => (
            <Link
              key={artist.id}
              href={`/artist/${artist.slug}`}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white hover:bg-neutral-50 transition-all hover:shadow-sm group border border-neutral-200 hover:border-neutral-300"
            >
              <span className="w-7 h-7 bg-neutral-700 group-hover:bg-[#C9A84C] rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm transition-colors">
                {index + 1}
              </span>
              <span className="flex-1 truncate text-sm font-semibold text-neutral-800 group-hover:text-neutral-900 transition-colors">
                {artist.name}
              </span>
              <span className="text-xs text-white bg-neutral-600 group-hover:bg-[#C9A84C] px-2.5 py-1 rounded-full font-medium transition-colors">
                {artist._count.artworks} {artist._count.artworks === 1 ? 'work' : 'works'}
              </span>
            </Link>
          ))}
        </div>
        {artists.length > 5 && (
          <div className="mt-3 pt-3 border-t border-neutral-200">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-sm text-neutral-600 text-center font-medium hover:text-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-1"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>+ {artists.length - 5} more artists</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
