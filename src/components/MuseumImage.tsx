"use client";

import { useState } from "react";
import Image from "next/image";

interface MuseumImageProps {
  src: string | null;
  fallbackSrc: string | null;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  placeholderLetter?: string;
  priority?: boolean;
}

export default function MuseumImage({
  src,
  fallbackSrc,
  alt,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "object-cover",
  placeholderLetter = "M",
  priority = false,
}: MuseumImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (imgSrc === src && fallbackSrc) {
      // Try fallback image
      setImgSrc(fallbackSrc);
    } else {
      // Both failed, show placeholder
      setHasError(true);
    }
  };

  if (hasError || (!imgSrc && !fallbackSrc)) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
        <span className="text-4xl font-light text-neutral-400">{placeholderLetter}</span>
      </div>
    );
  }

  return (
    <>
      {/* Shimmer placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-light text-neutral-200/60">{placeholderLetter}</span>
        </div>
      </div>
      <Image
        src={imgSrc || fallbackSrc || ""}
        alt={alt}
        fill={fill}
        className={`${className} transition-all duration-500 ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
        sizes={sizes}
        unoptimized={true}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
      />
    </>
  );
}
