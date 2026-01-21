import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  artist: {
    slug: string;
    name: string;
    birthYear: number | null;
    deathYear: number | null;
    nationality: string | null;
    imageUrl: string | null;
    _count?: {
      artworks: number;
    };
  };
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const lifespan =
    artist.birthYear && artist.deathYear
      ? `${artist.birthYear}–${artist.deathYear}`
      : artist.birthYear
        ? `b. ${artist.birthYear}`
        : null;

  return (
    <Link
      href={`/artist/${artist.slug}`}
      className="group flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-16 h-16 relative rounded-full overflow-hidden bg-neutral-100 flex-shrink-0">
        {artist.imageUrl ? (
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="64px"
            unoptimized={artist.imageUrl.includes('wikimedia.org') || artist.imageUrl.includes('wikiart.org')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xl">
            {artist.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
          {artist.name}
        </h3>
        <p className="text-sm text-neutral-600">
          {artist.nationality}
          {lifespan && ` · ${lifespan}`}
        </p>
        {artist._count && (
          <p className="text-xs text-neutral-500 mt-1">
            {artist._count.artworks} work{artist._count.artworks !== 1 && "s"}
          </p>
        )}
      </div>
    </Link>
  );
}
