import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { cityMetaTitle, cityMetaDescription } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cityName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const rawMuseums = await prisma.museum.findMany({
    where: {
      city: { equals: cityName, mode: "insensitive" },
    },
    include: { _count: { select: { Artwork: true } } },
  });

  if (rawMuseums.length === 0) return { title: "City Not Found" };

  const totalArtworks = rawMuseums.reduce((sum, m) => sum + m._count.Artwork, 0);

  // Keyword-focused with character limits (60 title, 160 description)
  const topMuseum = rawMuseums[0]?.name || null;

  return {
    title: cityMetaTitle(cityName, rawMuseums.length, totalArtworks),
    description: cityMetaDescription(cityName, rawMuseums.length, totalArtworks, topMuseum),
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;

  // Convert slug to city name
  const cityName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const rawMuseums = await prisma.museum.findMany({
    where: {
      city: { equals: cityName, mode: "insensitive" },
    },
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        orderBy: [
          { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
          { searchVolumeTier: "asc" },
        ],
      },
    },
    orderBy: { Artwork: { _count: "desc" } },
  });

  if (rawMuseums.length === 0) notFound();

  // Map to lowercase for components
  const museums = rawMuseums.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
    artworks: m.Artwork,
  }));

  const country = museums[0].country;
  const totalArtworks = museums.reduce((sum, m) => sum + m._count.artworks, 0);

  // Get all artworks from all museums in this city
  // Map to lowercase property names for ArtworkCard component
  const allArtworks = rawMuseums.flatMap((m) =>
    m.Artwork.map((a) => ({
      ...a,
      artist: a.Artist,
      museum: a.Museum,
    }))
  );

  // Get unique artists in this city
  const artistIds = [...new Set(allArtworks.map((a) => a.artistId).filter((id): id is string => id !== null))];
  const rawArtists = await prisma.artist.findMany({
    where: { id: { in: artistIds } },
    include: { _count: { select: { Artwork: true } } },
    orderBy: { Artwork: { _count: "desc" } },
    take: 8,
  });

  const artists = rawArtists.map((a) => ({
    ...a,
    _count: { artworks: a._count.Artwork },
  }));

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Cities", href: "/cities" },
    { name: cityName },
  ];

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Header */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{cityName}</h1>
          <p className="text-neutral-300 text-xl mb-4">{country}</p>
          <p className="text-neutral-400">
            {museums.length} museum{museums.length !== 1 ? "s" : ""} •{" "}
            {totalArtworks} masterpiece{totalArtworks !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/cities" className="hover:text-neutral-900 hover:underline">
            Cities
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{cityName}</span>
        </nav>

        {/* Museums in this City */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Museums in {cityName}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {museums.map((museum) => (
              <Link
                key={museum.id}
                href={`/museum/${museum.slug}`}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-neutral-100 relative">
                  {museum.imageUrl ? (
                    <Image
                      src={museum.imageUrl}
                      alt={museum.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={museum.imageUrl.includes('wikimedia.org')}
                    />
                  ) : museum.artworks[0]?.imageUrl ? (
                    <Image
                      src={museum.artworks[0].imageUrl}
                      alt={museum.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={museum.artworks[0].imageUrl.includes('wikimedia.org')}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <span className="text-4xl font-light text-neutral-400">{museum.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#C9A84C] transition-colors">
                      {museum.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  {museum.address && (
                    <p className="text-sm text-neutral-500 mb-2 truncate">
                      {museum.address}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">
                      {museum._count.artworks} masterpiece
                      {museum._count.artworks !== 1 ? "s" : ""}
                    </span>
                    {museum.ticketPriceRange && (
                      <span className="text-sm text-neutral-500">
                        {museum.ticketPriceRange}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Artists Found Here */}
        {artists.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Artists in {cityName}
            </h2>
            <div className="flex flex-wrap gap-3">
              {artists.map((artist) => (
                <Link
                  key={artist.id}
                  href={`/artist/${artist.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  {artist.imageUrl && (
                    <div className="w-6 h-6 rounded-full overflow-hidden relative">
                      <Image
                        src={artist.imageUrl}
                        alt={artist.name}
                        fill
                        className="object-cover"
                        sizes="24px"
                        unoptimized={artist.imageUrl.includes('wikimedia.org')}
                      />
                    </div>
                  )}
                  <span className="text-sm font-medium text-neutral-700">
                    {artist.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Masterpieces */}
        <section>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Masterpieces in {cityName}
          </h2>
          {allArtworks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArtworks.slice(0, 12).map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          ) : (
            <div className="bg-neutral-100 rounded-lg p-8 text-center">
              <p className="text-neutral-500">
                No artworks catalogued for {cityName} yet.
              </p>
            </div>
          )}
          {allArtworks.length > 12 && (
            <div className="text-center mt-6">
              <p className="text-neutral-500">
                And {allArtworks.length - 12} more masterpieces...
              </p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="mt-12 bg-neutral-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Can&apos;t Make It to {cityName}?
          </h2>
          <p className="text-neutral-600 mb-4">
            Bring museum-quality art into your home with our canvas collection.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Explore Our Collection
          </a>
        </section>
      </div>
    </div>
  );
}
