import Image from "next/image";
import Link from "next/link";

interface ArtworkCardProps {
  artwork: {
    slug: string;
    title: string;
    year: number | null;
    imageUrl: string | null;
    artist: {
      name: string;
    } | null;
    museum: {
      name: string;
      city: string;
    } | null;
  };
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={`/art/${artwork.slug}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-[4/3] relative bg-neutral-100">
        {artwork.imageUrl ? (
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={artwork.imageUrl.includes('wikimedia.org')}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex flex-col items-center justify-center">
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
        <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors line-clamp-1">
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
