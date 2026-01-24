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

// Timeline version - horizontal layout
interface TimelineEraCardProps {
  era: Era;
  movementCount: number;
  artistCount: number;
  previewImages?: string[];
  isFirst?: boolean;
  isLast?: boolean;
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

export function TimelineEraCard({
  era,
  movementCount,
  artistCount,
  previewImages = [],
  isFirst = false,
  isLast = false,
}: TimelineEraCardProps) {
  const validImages = previewImages.filter(Boolean);

  return (
    <div className="relative flex flex-col items-center">
      {/* Timeline connector line */}
      <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-200 via-[#C9A84C]/40 to-neutral-200 z-0">
        {isFirst && <div className="absolute left-0 w-1/2 h-full bg-white" />}
        {isLast && <div className="absolute right-0 w-1/2 h-full bg-white" />}
      </div>

      {/* Era Card */}
      <Link
        href={`/era/${era.slug}`}
        className="group relative z-10 w-full"
      >
        {/* Year marker dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[52px] z-20">
          <div className={`w-4 h-4 rounded-full ${getEraSolidColorClass(era)} ring-4 ring-white shadow-lg`} />
        </div>

        {/* Card content */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-[#C9A84C]/40 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-300 mb-8">
          {/* Image area */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
            {validImages.length > 0 ? (
              <div className="absolute inset-0">
                <TimelineImage src={validImages[0]} />
              </div>
            ) : (
              <div className={`absolute inset-0 ${getEraSolidColorClass(era)} opacity-30`} />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Era name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-bold text-white text-lg group-hover:text-[#C9A84C] transition-colors">
                {era.name}
              </h3>
            </div>
          </div>

          {/* Date badge */}
          <div className="px-4 py-3 border-t border-neutral-100 bg-neutral-50/50">
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-2 text-sm font-semibold ${getEraColorClass(era, "text")}`}>
                <div className={`w-2.5 h-2.5 rounded-full ${getEraSolidColorClass(era)}`} />
                {formatEraDateRange(era)}
              </span>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats below timeline */}
        <div className="text-center space-y-1 pt-2">
          <div className="flex items-center justify-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              {movementCount} movements
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              {artistCount} artists
            </span>
          </div>
        </div>
      </Link>
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
