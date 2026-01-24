"use client";

import Link from "next/link";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function FavoritesNavIcon() {
  const { favoritesCount } = useFavorites();

  return (
    <Link
      href="/favorites"
      className="relative text-neutral-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg"
      aria-label="My favorites"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {favoritesCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
          {favoritesCount > 99 ? "99+" : favoritesCount}
        </span>
      )}
    </Link>
  );
}
