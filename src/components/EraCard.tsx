"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  type Era,
  formatEraDateRange,
  getEraColorClass,
  getEraSolidColorClass,
} from "@/lib/eras";

interface EraCardProps {
  era: Era;
  movementCount: number;
  artistCount: number;
  previewImages?: string[];
}

// Single image with error handling
function EraImage({ src, index }: { src: string; index: number }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative flex-1 min-w-0 bg-gradient-to-br from-neutral-700 to-neutral-800" />
    );
  }

  return (
    <div className="relative flex-1 min-w-0 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        sizes="(max-width: 768px) 25vw, 100px"
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function EraCard({
  era,
  movementCount,
  artistCount,
  previewImages = [],
}: EraCardProps) {
  return (
    <Link
      href={`/era/${era.slug}`}
      className="group bg-white border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300"
    >
      {/* Image preview strip */}
      <div className="relative h-28 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
        {previewImages.length > 0 ? (
          <div className="flex h-full">
            {previewImages.slice(0, 4).map((img, i) => (
              <EraImage key={i} src={img} index={i} />
            ))}
          </div>
        ) : (
          <div
            className={`h-full ${getEraSolidColorClass(era)} opacity-20`}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Era badge */}
        <div className="absolute bottom-2 left-3">
          <span
            className={`inline-flex items-center gap-1.5 ${getEraColorClass(era, "bg")} ${getEraColorClass(era, "text")} px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}
          >
            <div
              className={`w-2 h-2 rounded-full ${getEraSolidColorClass(era)}`}
            />
            {formatEraDateRange(era)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors mb-1">
          {era.name}
        </h3>
        <p className="text-sm text-neutral-600 line-clamp-2 mb-3">
          {era.description.slice(0, 120)}...
        </p>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
            {movementCount} movements
          </span>
          <span className="flex items-center gap-1 text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
            {artistCount} artists
          </span>
        </div>
      </div>
    </Link>
  );
}

// Timeline version - connected timeline with bright artwork cards
interface TimelineEraCardProps {
  era: Era;
  movementCount: number;
  artistCount: number;
  previewImages?: string[];
  isFirst?: boolean;
  isLast?: boolean;
  index?: number;
  total?: number;
}

function TimelineImage({ src }: { src: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700"
      sizes="300px"
      unoptimized
      onError={() => setError(true)}
    />
  );
}

// Get era accent color for timeline dots and borders
function getEraAccentColor(era: Era): string {
  const colorMap: Record<string, string> = {
    amber: '#F59E0B',
    yellow: '#EAB308',
    red: '#DC2626',
    green: '#059669',
    blue: '#2563EB',
    purple: '#9333EA'
  };
  return colorMap[era.color] || '#C9A84C';
}

export function TimelineEraCard({
  era,
  movementCount,
  artistCount,
  previewImages = [],
  isFirst = false,
  isLast = false,
  index = 0,
  total = 4,
}: TimelineEraCardProps) {
  const validImages = previewImages.filter(Boolean);
  const accentColor = getEraAccentColor(era);

  return (
    <div className="relative">
      {/* Timeline connector - horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center">
        {/* Left line segment */}
        {!isFirst && (
          <div className="hidden lg:block absolute left-0 right-1/2 h-0.5 bg-gradient-to-r from-[#C9A84C]/60 to-[#C9A84C]" />
        )}
        {/* Right line segment */}
        {!isLast && (
          <div className="hidden lg:block absolute left-1/2 right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/60" />
        )}
        {/* Center dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#C9A84C] z-10"
          style={{ backgroundColor: accentColor }}
        />
        {/* Year label above dot */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 whitespace-nowrap">
          <span className="text-[#C9A84C] text-xs font-semibold tracking-wide">
            {formatEraDateRange(era)}
          </span>
        </div>
      </div>

      {/* Card */}
      <Link
        href={`/era/${era.slug}`}
        className="group relative block mt-12"
      >
        <div className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#C9A84C]/50">
          {/* Image section - larger and more prominent */}
          <div className="relative h-44 overflow-hidden">
            {validImages.length > 0 ? (
              <div className="absolute inset-0">
                <TimelineImage src={validImages[0]} />
              </div>
            ) : (
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundColor: accentColor }}
              />
            )}
            {/* Subtle gradient only at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Era color accent bar at top */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          {/* Content section */}
          <div className="p-4 bg-white">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-neutral-900 text-lg group-hover:text-[#C9A84C] transition-colors">
                {era.name}
              </h3>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Era description snippet */}
            <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
              {era.subtitle}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-neutral-500">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                {movementCount} movements
              </span>
              <span className="flex items-center gap-1.5 text-neutral-500">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                {artistCount} artists
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Alternative: Horizontal scrolling timeline with larger artwork
export function TimelineSection({
  eras,
}: {
  eras: Array<{
    era: Era;
    movementCount: number;
    artistCount: number;
    previewImages: string[];
  }>;
}) {
  return (
    <div className="relative">
      {/* Main timeline line */}
      <div className="hidden lg:block absolute top-4 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Era cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {eras.map(({ era, movementCount, artistCount, previewImages }, index) => (
          <TimelineEraCard
            key={era.slug}
            era={era}
            movementCount={movementCount}
            artistCount={artistCount}
            previewImages={previewImages}
            isFirst={index === 0}
            isLast={index === eras.length - 1}
            index={index}
            total={eras.length}
          />
        ))}
      </div>
    </div>
  );
}

// Compact version for sidebar
export function EraCardCompact({
  era,
  movementCount,
  isActive = false,
}: {
  era: Era;
  movementCount: number;
  isActive?: boolean;
}) {
  return (
    <Link
      href={`/era/${era.slug}`}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isActive
          ? `${getEraColorClass(era, "bg")} ${getEraColorClass(era, "border")} border`
          : "hover:bg-neutral-50"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full flex-shrink-0 ${getEraSolidColorClass(era)}`}
      />
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium ${isActive ? getEraColorClass(era, "text") : "text-neutral-900"}`}
        >
          {era.shortName}
        </p>
        <p className="text-xs text-neutral-500">{formatEraDateRange(era)}</p>
      </div>
      <span className="text-xs text-neutral-400">{movementCount}</span>
    </Link>
  );
}
