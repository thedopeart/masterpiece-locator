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
    <section className="bg-gradient-to-br from-[#C9A84C]/10 via-amber-50 to-[#C9A84C]/5 rounded-xl p-5 border-2 border-[#C9A84C]/30 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-[#C9A84C] to-amber-600 rounded-full flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-bold text-neutral-900">
            Featured Artists
          </h2>
          <p className="text-sm text-[#C9A84C] font-medium">
            {artists.length} artists on display
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {displayedArtists.map((artist, index) => (
          <Link
            key={artist.id}
            href={`/artist/${artist.slug}`}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white/70 hover:bg-white transition-all hover:shadow-sm group border border-transparent hover:border-[#C9A84C]/20"
          >
            <span className="w-7 h-7 bg-gradient-to-br from-[#C9A84C] to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm">
              {index + 1}
            </span>
            <span className="flex-1 truncate text-sm font-semibold text-neutral-800 group-hover:text-[#C9A84C] transition-colors">
              {artist.name}
            </span>
            <span className="text-xs text-white bg-[#C9A84C] px-2.5 py-1 rounded-full font-medium shadow-sm">
              {artist._count.artworks} {artist._count.artworks === 1 ? 'work' : 'works'}
            </span>
          </Link>
        ))}
      </div>
      {artists.length > 5 && (
        <div className="mt-3 pt-3 border-t border-[#C9A84C]/20">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-sm text-[#C9A84C] text-center font-medium hover:text-amber-600 transition-colors cursor-pointer flex items-center justify-center gap-1"
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
    </section>
  );
}
