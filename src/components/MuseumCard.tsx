import Image from "next/image";
import Link from "next/link";

// Total collection sizes for major museums (approximate figures)
const museumCollectionSizes: Record<string, string> = {
  // Major museums (matched to actual database slugs)
  "louvre-paris-france": "380,000+",
  "met": "1.5M+",
  "moma": "200,000+",
  "rijksmuseum": "1M+",
  "uffizi-gallery-florence-italy": "100,000+",
  "national-gallery": "2,300+",
  "museo-del-prado-madrid-spain": "35,000+",
  "hermitage": "3M+",
  "tate-modern-london-uk": "70,000+",
  "tate-britain": "70,000+",
  "national-gallery-of-art": "150,000+",
  "art-institute-chicago": "300,000+",
  "guggenheim": "8,000+",
  "van-gogh-museum": "1,400+",
  "alte-pinakothek": "700+",
  "belvedere": "24,000+",
  "scottish-national-gallery": "3,100+",
  "national-gallery-ireland": "16,000+",
  "national-gallery-victoria": "75,000+",
  "national-gallery-oslo": "1,100+",
  "albertina-vienna-austria": "65,000+",
  "albertina-museum": "65,000+",
  "musee-dorsay": "150,000+",
  "musee-d-orsay-paris-france": "150,000+",
  "british-museum": "8M+",
  "barberini": "1,400+",
  "accademia-venice": "1,600+",
};

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
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300 overflow-hidden border border-neutral-100"
    >
      <div className="aspect-[16/9] relative bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
        {museum.imageUrl ? (
          <>
            <Image
              src={museum.imageUrl}
              alt={museum.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300">
            <svg
              className="w-14 h-14"
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
        <p className="text-sm text-neutral-600 mt-1 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {museum.city}, {museum.country}
        </p>
        {museum._count && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#C9A84C]/10 text-[#9a7f3b] rounded-full text-xs font-medium">
              {museum._count.artworks} in database
            </span>
            {museumCollectionSizes[museum.slug] && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-full text-xs">
                {museumCollectionSizes[museum.slug]} works total
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
