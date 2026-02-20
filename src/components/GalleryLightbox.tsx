"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Clean up scroll lock on unmount and manage focus
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      overlayRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  return (
    <>
      {/* Gallery Thumbnails */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="flex-shrink-0 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#028161] rounded-lg"
          >
            <div className="w-40 sm:w-56 h-28 sm:h-40 relative rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 160px, 224px"
                unoptimized={true}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-white text-xs sm:text-sm font-medium bg-black/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  Tap to enlarge
                </span>
              </div>
            </div>
            {image.caption && (
              <p className="text-xs text-neutral-500 mt-1.5 text-left truncate w-40 sm:w-56">{image.caption}</p>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10 bg-black/50 rounded-full"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-black/50 rounded-full z-10"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[80vh] object-contain"
                unoptimized={true}
                priority
              />
            </div>
            {/* Caption */}
            {images[currentIndex].caption && (
              <p className="text-white/90 text-center mt-4 text-lg">
                {images[currentIndex].caption}
              </p>
            )}
            {/* Image counter */}
            <p className="text-white/60 text-sm mt-2">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-black/50 rounded-full z-10"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
