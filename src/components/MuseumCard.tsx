import Image from "next/image";
import Link from "next/link";

interface MuseumCardProps {
  museum: {
    slug: string;
    name: string;
    city: string;
    country: string;
    imageUrl: string | null;
    _count?: {
      artworks: number;
    };
  };
}

export default function MuseumCard({ museum }: MuseumCardProps) {
  return (
    <Link
      href={`/museum/${museum.slug}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-[16/9] relative bg-neutral-100">
        {museum.imageUrl ? (
          <Image
            src={museum.imageUrl}
            alt={museum.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={true}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors line-clamp-1">
          {museum.name}
        </h3>
        <p className="text-sm text-neutral-600 mt-1">
          {museum.city}, {museum.country}
        </p>
        {museum._count && (
          <p className="text-xs text-neutral-500 mt-2">
            {museum._count.artworks} masterpiece
            {museum._count.artworks !== 1 && "s"}
          </p>
        )}
      </div>
    </Link>
  );
}
