"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MasonryArtworkCardProps {
  artwork: {
    slug: string;
    title: string;
    year: number | null;
    imageUrl: string | null;
    imageWidth?: number | null;
    imageHeight?: number | null;
    artist: {
      name: string;
    } | null;
    museum: {
      name: string;
      city: string;
    } | null;
  };
  priority?: boolean;
}

export default function MasonryArtworkCard({ artwork, priority = false }: MasonryArtworkCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Calculate aspect ratio from stored dimensions, fallback to 4:3
  const hasStoredDimensions = artwork.imageWidth && artwork.imageHeight;
  const aspectRatio = hasStoredDimensions
    ? artwork.imageWidth! / artwork.imageHeight!
    : 4 / 3;

  // Calculate display dimensions (max width 400px, preserve aspect ratio)
  const displayWidth = 400;
  const displayHeight = Math.round(displayWidth / aspectRatio);

  return (
    <Link
      href={`/art/${artwork.slug}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden mb-4 break-inside-avoid"
    >
      <div className="relative bg-neutral-100 overflow-hidden">
        {artwork.imageUrl && !imageError ? (
          <>
            {/* Placeholder with correct aspect ratio */}
            {!imageLoaded && (
              <div
                className="w-full bg-gradient-to-br from-neutral-100 to-neutral-200 animate-pulse"
                style={{ aspectRatio: aspectRatio }}
              />
            )}
            <Image
              src={artwork.imageUrl}
              alt={`${artwork.title}${artwork.artist ? ` by ${artwork.artist.name}` : ""}`}
              width={displayWidth}
              height={displayHeight}
              className={`w-full h-auto group-hover:scale-105 transition-transform duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              unoptimized={true}
              priority={priority}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 flex flex-col items-center justify-center">
            <span className="text-4xl font-light text-neutral-400 mb-1">
              {artwork.title.charAt(0)}
            </span>
            <span className="text-xs text-neutral-500 px-2 py-1 bg-white/80 rounded font-medium">
              © Copyrighted
            </span>
            <span className="text-[10px] text-neutral-400 mt-1">
              Image cannot be shown
            </span>
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
