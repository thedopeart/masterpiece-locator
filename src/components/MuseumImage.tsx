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
}

export default function MuseumImage({
  src,
  fallbackSrc,
  alt,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "object-cover",
  placeholderLetter = "M",
}: MuseumImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

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
    <Image
      src={imgSrc || fallbackSrc || ""}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      unoptimized={true}
      onError={handleError}
    />
  );
}
