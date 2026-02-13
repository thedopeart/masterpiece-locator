import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { artistMetaTitle, artistMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";
import { hasTrail } from "@/lib/artist-trails";

// Generate factual FAQs - only data we actually have, no templated filler
function generateArtistFAQs(artist: {
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  nationality: string | null;
  movements: { name: string }[];
  artworks: { title: string; museum: { name: string; city: string } | null }[];
}) {
  const faqs = [];
  const museums = [...new Set(artist.artworks.filter(a => a.museum).map((a) => a.museum!.name))];

  // FAQ 1: Where to see their work - factual only
  if (museums.length > 0) {
    const museumList = museums.slice(0, 5).map(m => `<strong>${m}</strong>`).join(", ");
    faqs.push({
      question: `Where can I see ${artist.name}'s paintings?`,
      answer: museums.length === 1
        ? `<strong>${museums[0]}</strong>.`
        : `${museumList}${museums.length > 5 ? ` and ${museums.length - 5} more.` : "."}`,
    });
  }

  // FAQ 2: When did they live - factual only
  if (artist.birthYear) {
    const lifespan = artist.deathYear
      ? `<strong>${artist.birthYear}</strong> to <strong>${artist.deathYear}</strong>`
      : `Born <strong>${artist.birthYear}</strong>`;
    faqs.push({
      question: `When did ${artist.name} live?`,
      answer: `${lifespan}${artist.nationality ? `. ${artist.nationality}.` : "."}`,
    });
  }

  // FAQ 3: Art movement - factual only
  if (artist.movements.length > 0) {
    const movementList = artist.movements.map((m) => `<strong>${m.name}</strong>`).join(", ");
    faqs.push({
      question: `What art movement was ${artist.name} part of?`,
      answer: `${movementList}.`,
    });
  }

  return faqs;
}

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

// Cached data fetching to avoid duplicate queries between generateMetadata and page component
const getArtist = cache(async (slug: string) => {
  return prisma.artist.findUnique({
    where: { slug },
    include: {
      Movement: { select: { id: true, name: true, slug: true } },
      Artwork: {
        include: {
          Museum: { select: { name: true, city: true } },
          Artist: { select: { name: true } },
        },
        orderBy: [
          { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
          { searchVolumeTier: "asc" },
        ],
        // Note: imageWidth and imageHeight are included automatically via include
      },
    },
  });
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = await getArtist(slug);

  if (!artist) notFound();

  const lifespan =
    artist.birthYear && artist.deathYear
      ? `(${artist.birthYear}–${artist.deathYear})`
      : artist.birthYear
        ? `(b. ${artist.birthYear})`
        : "";

  // Build data-driven meta
  const artworkCount = artist.Artwork?.length || 0;
  const museums = [...new Set(artist.Artwork?.filter(a => a.Museum).map(a => a.Museum!.name) || [])];
  const museumCount = museums.length;
  const notableWork = artist.Artwork?.[0]?.title || null;
  const topMuseum = museums[0] || null;

  // Keyword-focused with character limits (60 title, 160 description)
  const title = artistMetaTitle(artist.name, artworkCount, museumCount, lifespan);
  const description = artistMetaDescription(artist.name, artworkCount, museumCount, topMuseum, notableWork, artist.bioShort, {
    nationality: artist.nationality,
    birthYear: artist.birthYear,
    deathYear: artist.deathYear,
    movements: artist.Movement?.map(m => m.name) || [],
  });

  const imageUrl = artist.imageUrl || artist.Artwork[0]?.imageUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `${BASE_URL}/artist/${slug}`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: `Portrait of ${artist.name}`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/artist/${slug}`,
    },
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;

  const rawArtist = await getArtist(slug);

  if (!rawArtist) notFound();

  // Map artworks and movements to lowercase property names for components
  // Also decode HTML entities for display
  const artist = {
    ...rawArtist,
    name: decodeHtmlEntities(rawArtist.name),
    nationality: decodeHtmlEntities(rawArtist.nationality),
    bioShort: decodeHtmlEntities(rawArtist.bioShort),
    bioFull: decodeHtmlEntities(rawArtist.bioFull),
    movements: rawArtist.Movement.map((m) => ({
      ...m,
      name: decodeHtmlEntities(m.name),
    })),
    artworks: rawArtist.Artwork.map((a) => ({
      ...a,
      title: decodeHtmlEntities(a.title),
      artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
      museum: a.Museum ? {
        ...a.Museum,
        name: decodeHtmlEntities(a.Museum.name),
        city: decodeHtmlEntities(a.Museum.city),
      } : null,
    })),
  };

  // Get unique museums where this artist's works are displayed, with artwork previews
  const rawMuseums = await prisma.museum.findMany({
    where: {
      Artwork: {
        some: { artistId: artist.id },
      },
    },
    include: {
      Artwork: {
        where: { artistId: artist.id, imageUrl: { not: null } }, // Only show artworks with images in preview
        take: 3,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true, title: true, slug: true },
      },
      _count: {
        select: {
          Artwork: {
            where: { artistId: artist.id },
          },
        },
      },
    },
    orderBy: {
      Artwork: { _count: "desc" },
    },
  });

  // Map to lowercase for components and decode HTML entities
  const museums = rawMuseums.map((m) => ({
    ...m,
    name: decodeHtmlEntities(m.name),
    city: decodeHtmlEntities(m.city),
    country: decodeHtmlEntities(m.country),
    artworks: m.Artwork.map((a) => ({
      ...a,
      title: decodeHtmlEntities(a.title),
    })),
    _count: { artworks: m._count.Artwork },
  }));

  // Get related artists from same movements
  const movementIds = rawArtist.Movement.map(m => m.id);
  const relatedArtists = movementIds.length > 0 ? await prisma.artist.findMany({
    where: {
      id: { not: artist.id },
      Movement: { some: { id: { in: movementIds } } },
      Artwork: { some: { imageUrl: { not: null } } },
    },
    select: {
      id: true,
      name: true,
      slug: true,
      imageUrl: true,
      nationality: true,
      Artwork: {
        where: { imageUrl: { not: null } },
        take: 1,
        select: { imageUrl: true },
      },
      _count: { select: { Artwork: true } },
    },
    orderBy: { Artwork: { _count: "desc" } },
    take: 6,
  }) : [];

  const lifespan =
    artist.birthYear && artist.deathYear
      ? `${artist.birthYear}–${artist.deathYear}`
      : artist.birthYear
        ? `b. ${artist.birthYear}`
        : null;

  // Build JSON-LD structured data for SEO
  const notableWorks = artist.artworks.slice(0, 5).map((artwork) => ({
    "@type": "VisualArtwork",
    name: artwork.title,
    url: `${BASE_URL}/art/${artwork.slug}`,
    ...(artwork.imageUrl && { image: artwork.imageUrl }),
    ...(artwork.museum && {
      locationCreated: {
        "@type": "Place",
        name: artwork.museum.name,
        address: artwork.museum.city,
      },
    }),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/artist/${artist.slug}`,
    name: artist.name,
    url: `${BASE_URL}/artist/${artist.slug}`,
    description: artist.bioShort || artist.bioFull || undefined,
    birthDate: artist.birthYear?.toString(),
    deathDate: artist.deathYear?.toString(),
    nationality: artist.nationality || undefined,
    image: artist.imageUrl || artist.artworks[0]?.imageUrl || undefined,
    sameAs: artist.wikipediaUrl ? [artist.wikipediaUrl] : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: "Artist",
      occupationalCategory: "Visual Artist",
    },
    // Art movements
    ...(artist.movements.length > 0 && {
      knowsAbout: artist.movements.map((m) => ({
        "@type": "Thing",
        name: m.name,
        url: `${BASE_URL}/movement/${m.slug}`,
      })),
    }),
    // Notable works
    ...(notableWorks.length > 0 && {
      subjectOf: notableWorks,
    }),
    // Total artwork count
    ...(artist.artworks.length > 0 && {
      mainEntityOfPage: {
        "@type": "CollectionPage",
        name: `${artist.name}'s Artworks`,
        url: `${BASE_URL}/artist/${artist.slug}`,
        numberOfItems: artist.artworks.length,
      },
    }),
  };

  const altText = `Portrait of ${artist.name}${artist.nationality ? `, ${artist.nationality} artist` : ""}${lifespan ? ` (${lifespan})` : ""}`;

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: artist.name },
  ];

  // Check if this artist has a trail page
  const trailExists = hasTrail(artist.slug);

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/artists" className="hover:text-neutral-900">
            Artists
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{artist.name}</span>
        </nav>

        {/* Header - Name above, then image + bio side by side */}
        <header className="mb-12">
          {/* Artist Name and Tags - Full width above */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              {artist.name}
            </h1>
            {artist.movements.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {artist.movements.map((movement) => (
                  <Link
                    key={movement.slug}
                    href={`/movement/${movement.slug}`}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition-colors"
                  >
                    {movement.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nationality and Lifespan */}
          <div className="flex flex-wrap gap-3 text-neutral-600 mb-6">
            {artist.nationality && <span>{artist.nationality}</span>}
            {lifespan && (
              <>
                <span className="text-neutral-300">·</span>
                <span>{lifespan}</span>
              </>
            )}
          </div>

          {/* Image + Biography side by side */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Artist Image - 2x larger */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-xl overflow-hidden bg-neutral-100">
                {artist.imageUrl ? (
                  <Image
                    src={artist.imageUrl}
                    alt={altText}
                    fill
                    className="object-cover"
                    sizes="320px"
                    unoptimized={true}
                  />
                ) : artist.artworks[0]?.imageUrl ? (
                  <>
                    <Image
                      src={artist.artworks[0].imageUrl}
                      alt={`Artwork by ${artist.name}`}
                      fill
                      className="object-cover"
                      sizes="320px"
                      unoptimized={true}
                    />
                    {/* No Portrait Available tag */}
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      No Portrait Available
                    </div>
                  </>
                ) : (
                  /* Stylized placeholder for artists without portrait or artwork images */
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                    {/* Artist initial in decorative circle */}
                    <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
                      <span className="text-4xl font-serif text-[#C9A84C]">
                        {artist.name.charAt(0)}
                      </span>
                    </div>
                    {/* Artist name */}
                    <p className="text-white font-medium text-sm mb-1">{artist.name}</p>
                    {/* Context info */}
                    <p className="text-neutral-400 text-xs">
                      {artist.nationality || (artist.movements[0]?.name ? `${artist.movements[0].name} Artist` : 'Artist')}
                    </p>
                    {lifespan && (
                      <p className="text-neutral-500 text-xs mt-1">{lifespan}</p>
                    )}
                    {/* Subtle icon */}
                    <div className="absolute bottom-3 right-3">
                      <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Biography - aligned with top of image */}
            <div className="flex-1">
              <div className="text-neutral-600 leading-relaxed space-y-4 artist-bio">
                {artist.bioFull ? (
                  <div dangerouslySetInnerHTML={{ __html: artist.bioFull }} />
                ) : artist.bioShort ? (
                  <p>{artist.bioShort}</p>
                ) : null}
                {artist.wikipediaUrl && (
                  <p>
                    <a href={artist.wikipediaUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 text-sm">
                      Read more on Wikipedia →
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Trail Banner - Show if trail exists */}
        {trailExists && (
          <Link
            href={`/trail/${artist.slug}`}
            className="block mb-12 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-[#C9A84C] transition-colors">
                    Follow {artist.name}&apos;s Journey
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Explore the places where {artist.name.split(" ").pop()} lived, worked, and created masterpieces
                  </p>
                </div>
              </div>
              <svg className="w-6 h-6 text-[#C9A84C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        )}

        {/* Notable Works - split by type if artist has both paintings and sculptures */}
        {(() => {
          const paintings = artist.artworks.filter(a => a.artworkType !== "sculpture");
          const sculptures = artist.artworks.filter(a => a.artworkType === "sculpture");
          const hasBoth = paintings.length > 0 && sculptures.length > 0;

          return (
            <>
              {hasBoth ? (
                <>
                  {/* Paintings section */}
                  <section className="mb-12">
                    <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                      Paintings by {artist.name}
                    </h2>
                    <p className="text-neutral-500 mb-6">
                      {paintings.length} {paintings.length === 1 ? "painting" : "paintings"} catalogued with museum locations
                    </p>
                    <div className="masonry-grid">
                      {paintings.map((artwork, index) => (
                        <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
                      ))}
                    </div>
                  </section>

                  {/* Sculptures section */}
                  <section className="mb-12">
                    <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                      Sculptures by {artist.name}
                    </h2>
                    <p className="text-neutral-500 mb-6">
                      {sculptures.length} {sculptures.length === 1 ? "sculpture" : "sculptures"} catalogued with museum locations.{" "}
                      <Link href="/sculptures" className="text-[#C9A84C] hover:underline">Browse all sculptures</Link>
                    </p>
                    <div className="masonry-grid">
                      {sculptures.map((artwork, index) => (
                        <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 4} />
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <section className="mb-12">
                  <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                    {sculptures.length > 0 ? "Sculptures" : "Notable Works"} by {artist.name}
                  </h2>
                  <p className="text-neutral-500 mb-6">
                    {artist.artworks.length > 0
                      ? `${artist.artworks.length} ${sculptures.length > 0 ? (artist.artworks.length === 1 ? "sculpture" : "sculptures") : (artist.artworks.length === 1 ? "painting" : "paintings")} catalogued with museum locations`
                      : "No artworks catalogued yet"}
                    {sculptures.length > 0 && (
                      <>. <Link href="/sculptures" className="text-[#C9A84C] hover:underline">Browse all sculptures</Link></>
                    )}
                  </p>
                  {artist.artworks.length > 0 ? (
                    <div className="masonry-grid">
                      {artist.artworks.map((artwork, index) => (
                        <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 8} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-500">No artworks catalogued yet.</p>
                  )}
                </section>
              )}
            </>
          );
        })()}

        {/* Where to See Their Work */}
        {museums.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              Museums with {artist.name}&apos;s Work
            </h2>
            <p className="text-neutral-500 mb-6">
              {museums.length} {museums.length === 1 ? "museum displays" : "museums display"} {artist.name.split(" ").pop()}&apos;s works. Click any museum to see visiting info and the specific works they hold.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {museums.map((museum) => (
                <Link
                  key={museum.id}
                  href={`/museum/${museum.slug}`}
                  className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
                >
                  {/* Artwork previews */}
                  <div className="flex h-28">
                    {museum.artworks.slice(0, 3).map((artwork, idx) => (
                      <div
                        key={artwork.slug}
                        className="flex-1 relative bg-neutral-100"
                      >
                        {artwork.imageUrl ? (
                          <Image
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 33vw, 15vw"
                            unoptimized={true}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        {idx === 2 && museum._count.artworks > 3 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              +{museum._count.artworks - 3}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                    {museum.artworks.length === 0 && (
                      <div className="flex-1 flex items-center justify-center bg-neutral-100 text-neutral-400">
                        <span className="text-2xl font-light">{museum.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Museum info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors text-base">
                      {museum.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {museum.city}, {museum.country}
                    </p>
                    <p className="text-sm text-[#C9A84C] mt-2 font-medium">
                      {museum._count.artworks} {museum._count.artworks === 1 ? "work" : "works"} on display
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Artists */}
        {relatedArtists.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              Related Artists
            </h2>
            <p className="text-neutral-500 mb-6">
              Other {artist.movements[0]?.name || ""} artists you might like
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {relatedArtists.map((related) => (
                <Link
                  key={related.id}
                  href={`/artist/${related.slug}`}
                  className="group"
                >
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-neutral-100 mb-2">
                    {(related.imageUrl || related.Artwork[0]?.imageUrl) ? (
                      <Image
                        src={related.imageUrl || related.Artwork[0]?.imageUrl || ""}
                        alt={related.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 16vw"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                        <span className="text-3xl font-serif text-[#C9A84C]">{related.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors text-sm truncate">
                    {decodeHtmlEntities(related.name)}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {related._count.Artwork} works
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section - use database FAQs if available, otherwise generate */}
        {(() => {
          const dbFaqs = rawArtist.faqs as { question: string; answer: string }[] | null;
          const faqs = (dbFaqs && dbFaqs.length > 0) ? dbFaqs : generateArtistFAQs(artist);
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`About ${artist.name}`} />
            </>
          ) : null;
        })()}

        {/* CTA */}
        <section className="bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Love {artist.name}&apos;s Style?
          </h2>
          <p className="text-neutral-400 mb-4">
            Explore art inspired by {artist.movements[0]?.name || "their style"}.
          </p>
          <Link
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Browse Collection
          </Link>
        </section>
      </div>
    </div>
  );
}
