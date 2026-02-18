"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuctionImageProps {
  src: string;
  alt: string;
  slug: string;
  size?: number;
  linked?: boolean;
}

function CopyrightFallback({ size }: { size: number }) {
  const isSmall = size <= 64;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-center px-2">
      <svg
        className={`${isSmall ? "w-5 h-5" : "w-8 h-8"} text-neutral-300 ${isSmall ? "mb-1" : "mb-2"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {!isSmall && (
        <span className="text-xs font-medium text-neutral-400">
          Copyrighted Image
        </span>
      )}
    </div>
  );
}

export default function AuctionImage({ src, alt, slug, size = 192, linked = true }: AuctionImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    if (linked) {
      return (
        <Link href={`/art/${slug}`} className="block w-full h-full">
          <CopyrightFallback size={size} />
        </Link>
      );
    }
    return <CopyrightFallback size={size} />;
  }

  const img = (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="w-full h-full object-cover"
      unoptimized
      onError={() => setError(true)}
    />
  );

  if (linked) {
    return <Link href={`/art/${slug}`}>{img}</Link>;
  }
  return img;
}
