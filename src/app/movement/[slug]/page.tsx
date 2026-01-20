import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import { createMetaTitle, createMetaDescription } from "@/lib/seo";

// Generate dynamic FAQs based on movement data
function generateMovementFAQs(movement: {
  name: string;
  description: string | null;
  startYear: number | null;
  endYear: number | null;
  keyCharacteristics: string[];
  artists: { name: string }[];
  artworkCount: number;
}) {
  // Skip if no start year
  if (!movement.startYear) return [];
  const faqs = [];
  const topArtists = movement.artists.slice(0, 3).map(a => `<strong>${a.name}</strong>`).join(", ");
  const period = movement.endYear
    ? `from <strong>${movement.startYear}</strong> to <strong>${movement.endYear}</strong>`
    : `beginning around <strong>${movement.startYear}</strong>`;

  // FAQ 1: What is this movement?
  faqs.push({
    question: `What is ${movement.name}?`,
    answer: movement.description
      ? `${movement.description} The movement spanned ${period} and continues to influence contemporary art.`
      : `<strong>${movement.name}</strong> is an art movement that emerged ${period}. It fundamentally changed how artists approached their craft and continues to be studied and admired today. The movement's influence can be seen in museums worldwide.`,
  });

  // FAQ 2: Key characteristics
  if (movement.keyCharacteristics.length > 0) {
    const chars = movement.keyCharacteristics.slice(0, 4).map(c => `<strong>${c}</strong>`).join(", ");
    faqs.push({
      question: `What are the characteristics of ${movement.name}?`,
      answer: `${movement.name} is defined by several distinct characteristics: ${chars}. These elements set ${movement.name} apart from other movements and made it immediately recognizable. Artists within the movement pushed boundaries while sharing these common aesthetic principles.`,
    });
  }

  // FAQ 3: Famous artists
  if (movement.artists.length > 0) {
    faqs.push({
      question: `Who are the most famous ${movement.name} artists?`,
      answer: movement.artists.length === 1
        ? `<strong>${movement.artists[0].name}</strong> is the primary ${movement.name} artist in our catalogue. Their work defined many of the movement's key characteristics and continues to draw visitors to museums worldwide.`
        : `The ${movement.name} movement included <strong>${movement.artists.length} artists</strong> in our catalogue, with key figures like ${topArtists}. These artists pioneered the movement's distinctive style and their masterpieces remain among the most visited works in museums today.`,
    });
  }

  // FAQ 4: When was this movement?
  faqs.push({
    question: `When was the ${movement.name} period?`,
    answer: `The ${movement.name} movement flourished ${period}. Understanding when artists worked helps place their art in historical context. This era shaped the subjects, techniques, and materials available to ${movement.name} artists, and their innovations influenced movements that followed.`,
  });

  // FAQ 5: Where to see this art
  if (movement.artworkCount > 0) {
    faqs.push({
      question: `Where can I see ${movement.name} paintings?`,
      answer: `We've catalogued <strong>${movement.artworkCount}+ ${movement.name} masterpieces</strong> across museums worldwide. Each artwork page on this site shows exactly where it's displayed, making it easy to plan museum visits. Major art museums in cities like Paris, New York, London, and Amsterdam typically have significant ${movement.name} collections.`,
    });
  }

  return faqs;
}

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

        {/* FAQ Section */}
        {(() => {
          const faqs = generateMovementFAQs({
            name: movement.name,
            description: movement.description,
            startYear: movement.startYear,
            endYear: movement.endYear,
            keyCharacteristics: movement.keyCharacteristics,
            artists: movement.artists.map(a => ({ name: a.name })),
            artworkCount: artworks.length,
          });
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`About ${movement.name}`} />
            </>
          ) : null;
        })()}

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
