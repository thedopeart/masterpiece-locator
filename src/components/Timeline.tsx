"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ERAS,
  getEraForYear,
  getEraSolidColorClass,
  formatEraDateRange,
  type Era,
} from "@/lib/eras";

interface Movement {
  slug: string;
  name: string;
  startYear: number;
  endYear: number | null;
  artistCount?: number;
}

interface TimelineProps {
  movements: Movement[];
  highlightEra?: string;
  compact?: boolean;
}

// Timeline spans from 1300 to 2030
const TIMELINE_START = 1300;
const TIMELINE_END = 2030;
const TIMELINE_RANGE = TIMELINE_END - TIMELINE_START;

function yearToPercent(year: number): number {
  return ((year - TIMELINE_START) / TIMELINE_RANGE) * 100;
}

export default function Timeline({
  movements,
  highlightEra,
  compact = false,
}: TimelineProps) {
  const [hoveredMovement, setHoveredMovement] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseEnter = (
    slug: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    setHoveredMovement(slug);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredMovement(null);
    setTooltipPos(null);
  };

  // Filter eras to only show those with movements
  const activeEras = ERAS.filter((era) =>
    movements.some(
      (m) => m.startYear >= era.startYear && m.startYear < era.endYear
    )
  );

  return (
    <div className="relative">
      {/* Era bars */}
      <div className="relative h-8 bg-neutral-100 rounded-full overflow-hidden mb-4">
        {activeEras.map((era) => {
          const startPercent = yearToPercent(Math.max(era.startYear, TIMELINE_START));
          const endPercent = yearToPercent(Math.min(era.endYear, TIMELINE_END));
          const width = endPercent - startPercent;
          const isHighlighted = highlightEra === era.slug;

          return (
            <Link
              key={era.slug}
              href={`/era/${era.slug}`}
              className={`absolute h-full transition-opacity ${
                highlightEra && !isHighlighted ? "opacity-40" : "opacity-100"
              } hover:opacity-100`}
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
              }}
              title={`${era.name} (${formatEraDateRange(era)})`}
            >
              <div
                className={`h-full ${getEraSolidColorClass(era)} flex items-center justify-center`}
              >
                {!compact && width > 8 && (
                  <span className="text-white text-xs font-medium truncate px-2">
                    {era.shortName}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Movement markers */}
      <div className="relative h-16">
        {movements.map((movement) => {
          const startPercent = yearToPercent(movement.startYear);
          const endPercent = movement.endYear
            ? yearToPercent(movement.endYear)
            : yearToPercent(movement.startYear + 50); // Default 50 year span if no end
          const width = Math.max(endPercent - startPercent, 2); // Minimum 2% width
          const era = getEraForYear(movement.startYear);
          const isHovered = hoveredMovement === movement.slug;

          return (
            <div
              key={movement.slug}
              className="absolute"
              style={{
                left: `${startPercent}%`,
                width: `${width}%`,
              }}
            >
              <Link
                href={`/movement/${movement.slug}`}
                className="block"
                onMouseEnter={(e) => handleMouseEnter(movement.slug, e)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Movement bar */}
                <div
                  className={`h-4 rounded-full transition-all ${
                    era ? getEraSolidColorClass(era) : "bg-neutral-400"
                  } ${isHovered ? "ring-2 ring-offset-2 ring-neutral-400 scale-y-125" : ""}`}
                  style={{ opacity: isHovered ? 1 : 0.7 }}
                />
                {/* Movement label */}
                <div
                  className={`absolute top-5 left-0 w-max max-w-[120px] text-xs transition-opacity ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="bg-neutral-900 text-white px-2 py-1 rounded shadow-lg">
                    <p className="font-medium truncate">{movement.name}</p>
                    <p className="text-neutral-400">
                      {movement.startYear}
                      {movement.endYear ? ` – ${movement.endYear}` : "+"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Year markers */}
      <div className="relative h-6 flex justify-between text-xs text-neutral-500 mt-2">
        {[1400, 1500, 1600, 1700, 1800, 1900, 2000].map((year) => (
          <div
            key={year}
            className="absolute transform -translate-x-1/2"
            style={{ left: `${yearToPercent(year)}%` }}
          >
            <div className="w-px h-2 bg-neutral-300 mx-auto mb-1" />
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact era selector component
export function EraSelector({
  currentEra,
  onChange,
}: {
  currentEra?: string;
  onChange?: (slug: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange?.(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          !currentEra
            ? "bg-neutral-900 text-white"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
        }`}
      >
        All Eras
      </button>
      {ERAS.map((era) => (
        <button
          key={era.slug}
          onClick={() => onChange?.(era.slug)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentEra === era.slug
              ? `${getEraSolidColorClass(era)} text-white`
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          {era.shortName}
        </button>
      ))}
    </div>
  );
}

// Simple era badge component
export function EraBadge({ year }: { year: number }) {
  const era = getEraForYear(year);
  if (!era) return null;

  return (
    <Link
      href={`/era/${era.slug}`}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium transition-colors hover:opacity-80`}
      style={{
        backgroundColor: `var(--${era.color}-100, #f5f5f5)`,
        color: `var(--${era.color}-800, #404040)`,
      }}
    >
      <div className={`w-2 h-2 rounded-full ${getEraSolidColorClass(era)}`} />
      {era.shortName}
    </Link>
  );
}
