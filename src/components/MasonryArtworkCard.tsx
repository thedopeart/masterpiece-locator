"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

interface MasonryArtworkCardProps {
  artwork: {
    id: string;
    slug: string;
    title: string;
    year: number | null;
    imageUrl: string | null;
    imageWidth?: number | null;
    imageHeight?: number | null;
    artworkType?: string | null;
    artist: {
      name: string;
    } | null;
    museum: {
      name: string;
      city: string;
    } | null;
  };
  priority?: boolean;
  highlight?: boolean;
  showFavorite?: boolean;
}

const TYPE_LABELS: Record<string, string> = {
  sculpture: "Sculpture",
  print: "Print",
  drawing: "Drawing",
};

export default function MasonryArtworkCard({ artwork, priority = false, highlight = false, showFavorite = true }: MasonryArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Calculate aspect ratio from stored dimensions, fallback to 4:3
  const hasStoredDimensions = artwork.imageWidth && artwork.imageHeight && artwork.imageHeight > 0;
  const aspectRatio = hasStoredDimensions
    ? artwork.imageWidth! / artwork.imageHeight!
    : 4 / 3;

  // Calculate display dimensions (max width 400px, preserve aspect ratio)
  const displayWidth = 400;
  const displayHeight = Math.round(displayWidth / aspectRatio);

  return (
    <Link
      href={`/art/${artwork.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300 overflow-hidden mb-4 break-inside-avoid border border-neutral-100"
    >
      <div className="relative bg-neutral-100 overflow-hidden">
        {/* Must-See Highlight Badge */}
        {highlight && (
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-[#C9A84C] to-[#b8973f] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Must-See
          </div>
        )}
        {/* Artwork Type Badge (for non-paintings) */}
        {artwork.artworkType && artwork.artworkType !== "painting" && TYPE_LABELS[artwork.artworkType] && (
          <div className={`absolute ${highlight ? "top-10" : "top-2"} left-2 z-10 bg-neutral-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
            {TYPE_LABELS[artwork.artworkType]}
          </div>
        )}
        {/* Favorite Button */}
        {showFavorite && (
          <div className="absolute top-2 right-2 z-10 md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100 transition-opacity duration-200">
            <FavoriteButton artwork={artwork} size="md" />
          </div>
        )}
        {artwork.imageUrl && !imageError ? (
          <div className="relative" style={{ aspectRatio: aspectRatio }}>
            {/* Shimmer placeholder with blur */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 transition-opacity duration-500 ${
                imageLoaded ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Shimmer animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
              {/* Subtle artwork initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-light text-neutral-200/60">
                  {artwork.title.charAt(0)}
                </span>
              </div>
            </div>
            <Image
              src={artwork.imageUrl}
              alt={`${artwork.title}${artwork.artist ? ` by ${artwork.artist.name}` : ""}`}
              width={displayWidth}
              height={displayHeight}
              className={`w-full h-auto group-hover:scale-105 transition-all duration-500 ${
                imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              unoptimized={true}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 flex flex-col items-center justify-center">
            <span className="text-4xl font-light text-neutral-400 mb-1">
              {artwork.title.charAt(0)}
            </span>
            {artwork.year && artwork.year < 1900 ? (
              <span className="text-xs text-neutral-500 px-2 py-1 bg-white/80 rounded font-medium">
                No Image Available
              </span>
            ) : (
              <>
                <span className="text-xs text-neutral-500 px-2 py-1 bg-white/80 rounded font-medium">
                  © Copyrighted
                </span>
                <span className="text-[10px] text-neutral-400 mt-1">
                  Image cannot be shown
                </span>
              </>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
          {artwork.title}
        </h3>
        <p className="text-sm text-neutral-600 mt-1">
          {artwork.artist?.name}
          {artwork.year && `, ${artwork.year}`}
        </p>
        {artwork.museum && (
          <p className="text-xs text-neutral-500 mt-2">
            {artwork.museum.name}, {artwork.museum.city}
          </p>
        )}
      </div>
    </Link>
  );
}
