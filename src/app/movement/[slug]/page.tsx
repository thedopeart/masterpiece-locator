import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import { createMetaTitle, createMetaDescription } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movement = await prisma.movement.findUnique({
    where: { slug },
    include: {
      _count: { select: { Artist: true } },
    },
  });

  if (!movement) return { title: "Movement Not Found" };

  const years = movement.endYear
    ? `${movement.startYear}-${movement.endYear}`
    : `${movement.startYear}+`;

  return {
    title: createMetaTitle(`${movement.name} Art: ${movement._count.Artist} Artists & Famous Paintings`),
    description: createMetaDescription(
      `${movement.name} (${years}) paintings and artists. See ${movement._count.Artist} artists and where to find their masterpieces in museums worldwide.`
    ),
  };
}

export default async function MovementPage({ params }: Props) {
  const { slug } = await params;

  const rawMovement = await prisma.movement.findUnique({
    where: { slug },
    include: {
      Artist: {
        include: {
          Artwork: {
            where: { imageUrl: { not: null } }, // Only show artworks with images in preview
            take: 2,
            orderBy: { searchVolumeTier: "asc" },
            include: {
              Artist: { select: { name: true } },
              Museum: { select: { name: true, city: true } },
            },
          },
          _count: { select: { Artwork: true } },
        },
        orderBy: { Artwork: { _count: "desc" } },
      },
    },
  });

  if (!rawMovement) notFound();

  // Map to lowercase for components
  const movement = {
    ...rawMovement,
    artists: rawMovement.Artist.map((a) => ({
      ...a,
      artworks: a.Artwork,
      _count: { artworks: a._count.Artwork },
    })),
  };

  // Get all artworks for this movement
  const rawArtworks = await prisma.artwork.findMany({
    where: {
      Artist: {
        Movement: { some: { id: movement.id } },
      },
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, city: true } },
    },
    orderBy: [
      { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
      { searchVolumeTier: "asc" },
    ],
    take: 12,
  });

  // Map to lowercase property names for ArtworkCard component
  const artworks = rawArtworks.map((a) => ({
    ...a,
    artist: a.Artist,
    museum: a.Museum,
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-amber-400 font-medium mb-2">
            {movement.startYear}
            {movement.endYear ? ` - ${movement.endYear}` : " - Present"}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {movement.name}
          </h1>
          {movement.description && (
            <p className="text-neutral-300 text-lg max-w-2xl">
              {movement.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/movements" className="hover:text-neutral-900 hover:underline">
            Movements
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{movement.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Key Characteristics */}
            {movement.keyCharacteristics.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                  Key Characteristics
                </h2>
                <ul className="space-y-2">
                  {movement.keyCharacteristics.map((char) => (
                    <li
                      key={char}
                      className="flex items-start gap-2 text-neutral-700"
                    >
                      <span className="text-amber-500 mt-1">•</span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                Overview
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Period</span>
                  <span className="font-medium">
                    {movement.startYear}
                    {movement.endYear ? ` - ${movement.endYear}` : "+"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Artists</span>
                  <span className="font-medium">{movement.artists.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Works</span>
                  <span className="font-medium">{artworks.length}+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Artists */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                {movement.name} Artists
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {movement.artists.map((artist) => (
                  <Link
                    key={artist.id}
                    href={`/artist/${artist.slug}`}
                    className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <div className="w-16 h-16 rounded-full bg-neutral-100 overflow-hidden relative flex-shrink-0">
                      {artist.imageUrl ? (
                        <Image
                          src={artist.imageUrl}
                          alt={artist.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                          unoptimized={artist.imageUrl.includes('wikimedia.org')}
                        />
                      ) : artist.artworks[0]?.imageUrl ? (
                        <Image
                          src={artist.artworks[0].imageUrl}
                          alt={artist.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                          unoptimized={artist.artworks[0].imageUrl.includes('wikimedia.org')}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl font-light text-neutral-400">
                          {artist.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {artist.birthYear}
                        {artist.deathYear ? ` - ${artist.deathYear}` : ""}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {artist._count.artworks} work
                        {artist._count.artworks !== 1 ? "s" : ""}
                      </p>
                    </div>
                    <span className="text-neutral-400 group-hover:text-black transition-colors">
                      View
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Masterpieces */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                {movement.name} Masterpieces
              </h2>
              {artworks.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-100 rounded-lg p-8 text-center border border-neutral-200">
                  <p className="text-neutral-500">
                    No artworks catalogued for this movement yet.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-12 bg-neutral-100 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Love {movement.name} Art?
          </h2>
          <p className="text-neutral-600 mb-4">
            Own museum-quality reproductions of these iconic works.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Shop {movement.name} Prints
          </a>
        </section>
      </div>
    </div>
  );
}
