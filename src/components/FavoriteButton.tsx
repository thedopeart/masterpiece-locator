"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/contexts/ToastContext";

interface FavoriteButtonProps {
  artwork: {
    id: string;
    slug: string;
    title: string;
    imageUrl?: string | null;
    artist?: { name: string } | null;
    museum?: { name: string } | null;
  };
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function FavoriteButton({ artwork, size = "md", className = "" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showToast } = useToast();
  const favorited = isFavorite(artwork.slug);

  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const wasFavorited = favorited;
    toggleFavorite({
      id: artwork.id,
      slug: artwork.slug,
      title: artwork.title,
      imageUrl: artwork.imageUrl || undefined,
      artistName: artwork.artist?.name,
      museumName: artwork.museum?.name,
    });
    if (wasFavorited) {
      showToast("Removed from favorites");
    } else {
      showToast("Added to favorites");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-200 ${
        favorited
          ? "bg-red-500 text-white shadow-lg scale-110"
          : "bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
      } ${className}`}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      title={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        className={`${iconSizes[size]} transition-transform ${favorited ? "scale-110" : ""}`}
        fill={favorited ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}
