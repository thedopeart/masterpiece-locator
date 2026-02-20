"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/contexts/ToastContext";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function FavoritesPage() {
  const { favorites, isLoaded, removeFavorite, clearFavorites } = useFavorites();
  const { showToast } = useToast();
  const [confirmingClear, setConfirmingClear] = useState(false);

  const handleRemove = (slug: string, title: string) => {
    removeFavorite(slug);
    showToast(`Removed "${title}" from favorites`);
  };

  const handleClearAll = () => {
    if (!confirmingClear) {
      setConfirmingClear(true);
      setTimeout(() => setConfirmingClear(false), 3000);
      return;
    }
    const count = favorites.length;
    clearFavorites();
    setConfirmingClear(false);
    showToast(`Cleared ${count} favorite${count !== 1 ? "s" : ""}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-neutral-400 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-white">My Favorites</span>
          </nav>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">My Favorites</h1>
              <p className="text-neutral-400">
                {favorites.length === 0
                  ? "Save artworks you love to create your personal collection"
                  : `${favorites.length} artwork${favorites.length !== 1 ? "s" : ""} saved`}
              </p>
            </div>
            {favorites.length > 0 && (
              <button
                onClick={handleClearAll}
                className={`text-sm transition-colors ${
                  confirmingClear
                    ? "text-red-400 hover:text-red-300 font-medium"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {confirmingClear ? "Tap again to confirm" : "Clear all"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {!isLoaded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-neutral-100">
                <div className="aspect-[4/3] bg-neutral-100 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-neutral-100 rounded animate-pulse w-3/4" />
                  <div className="h-3 bg-neutral-100 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">No favorites yet</h2>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              Browse artworks and click the heart icon to save them here. Your favorites are stored locally on this device.
            </p>
            <Link
              href="/discover"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Discover Artworks
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((fav) => (
              <div
                key={fav.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-neutral-100"
              >
                <Link href={`/art/${fav.slug}`} className="block">
                  <div className="relative aspect-[4/3] bg-neutral-100">
                    {fav.imageUrl ? (
                      <Image
                        src={fav.imageUrl}
                        alt={fav.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                        <span className="text-4xl font-light text-neutral-400">{fav.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                      {fav.title}
                    </h3>
                    {fav.artistName && (
                      <p className="text-sm text-neutral-600 mt-1">{fav.artistName}</p>
                    )}
                    {fav.museumName && (
                      <p className="text-xs text-neutral-500 mt-2">{fav.museumName}</p>
                    )}
                  </div>
                </Link>
                <div className="px-4 pb-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Saved {new Date(fav.addedAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => handleRemove(fav.slug, fav.title)}
                    className="text-xs text-red-500 hover:text-red-700 transition-colors px-2 py-2 -mr-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tip section */}
        {favorites.length > 0 && (
          <div className="mt-12 bg-neutral-50 rounded-xl p-6 text-center">
            <p className="text-neutral-600 text-sm">
              Your favorites are stored in your browser. They'll persist across sessions but won't sync to other devices.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
