import Link from "next/link";
import Image from "next/image";
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

export default function EraCard({
  era,
  movementCount,
  artistCount,
  previewImages = [],
}: EraCardProps) {
  return (
    <Link
      href={`/era/${era.slug}`}
      className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all"
    >
      {/* Image preview strip */}
      <div className="relative h-24 bg-neutral-100 overflow-hidden">
        {previewImages.length > 0 ? (
          <div className="flex h-full">
            {previewImages.slice(0, 4).map((img, i) => (
              <div key={i} className="relative flex-1 min-w-0">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 100px"
                  unoptimized
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`h-full ${getEraSolidColorClass(era)} opacity-20`}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Era badge */}
        <div className="absolute bottom-2 left-3">
          <span
            className={`inline-flex items-center gap-1.5 ${getEraColorClass(era, "bg")} ${getEraColorClass(era, "text")} px-2 py-0.5 rounded-full text-xs font-medium`}
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
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span>{movementCount} movements</span>
          <span>{artistCount} artists</span>
        </div>
      </div>
    </Link>
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
