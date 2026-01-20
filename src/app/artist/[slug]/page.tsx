import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// Generate dynamic FAQs based on artist data
function generateArtistFAQs(artist: {
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  nationality: string | null;
  movements: { name: string }[];
  artworks: { title: string; museum: { name: string; city: string } | null }[];
}) {
  const faqs = [];
  const firstName = artist.name.split(" ").pop() || artist.name;
  const movementNames = artist.movements.map((m) => `<strong>${m.name}</strong>`).join(", ");
  const movementNamesPlain = artist.movements.map((m) => m.name).join(", ");
  const topArtworks = artist.artworks.slice(0, 3).map((a) => a.title);
  const museums = [...new Set(artist.artworks.filter(a => a.museum).map((a) => a.museum!.name))];

  // FAQ 1: Where to see their work
  if (museums.length > 0) {
    const museumList = museums.slice(0, 3).map(m => `<strong>${m}</strong>`).join(", ");
    faqs.push({
      question: `Where can I see ${artist.name}'s paintings in person?`,
      answer: museums.length === 1
        ? `${artist.name}'s work is displayed at <strong>${museums[0]}</strong>. We recommend checking the museum's official website for current exhibitions, gallery locations, and visiting hours before planning your trip. Some works may occasionally be on loan or undergoing restoration.`
        : `${artist.name}'s work is spread across <strong>${museums.length} museums</strong> worldwide, including ${museumList}${museums.length > 3 ? ` and ${museums.length - 3} others` : ""}. Each painting's page on this site shows exactly where it's currently displayed, making it easy to plan visits to see specific works.`,
    });
  }

  // FAQ 2: Famous works
  if (topArtworks.length > 0) {
    const artworkList = topArtworks.map(a => `<strong>${a}</strong>`).join(", ");
    faqs.push({
      question: `What are ${artist.name}'s most famous paintings?`,
      answer: topArtworks.length === 1
        ? `<strong>${topArtworks[0]}</strong> is among ${firstName}'s most celebrated masterpieces. This work draws art lovers from around the world and has influenced countless artists. The painting exemplifies ${firstName}'s distinctive style and technical mastery.`
        : `${firstName}'s most celebrated works include ${artworkList}. These paintings rank among the most recognizable in art history and draw significant crowds at their respective museums. Each work showcases different aspects of ${firstName}'s artistic development and technical innovation.`,
    });
  }

  // FAQ 3: Art movement
  if (artist.movements.length > 0) {
    faqs.push({
      question: `What art movement was ${artist.name} part of?`,
      answer: artist.movements.length === 1
        ? `${artist.name} was a pivotal figure in ${movementNames}. This movement fundamentally changed how artists approached their craft, and ${firstName}'s innovations within it continue to influence contemporary art. Understanding ${movementNamesPlain} helps contextualize why ${firstName}'s techniques were groundbreaking for their time.`
        : `${artist.name} worked across multiple movements: ${movementNames}. Many artists evolved through different styles as they matured, or pioneered transitions between artistic eras. ${firstName}'s versatility across these movements demonstrates exceptional range and adaptability as an artist.`,
    });
  }

  // FAQ 4: When did they live
  if (artist.birthYear) {
    const lifespan = artist.deathYear
      ? `from <strong>${artist.birthYear}</strong> to <strong>${artist.deathYear}</strong>`
      : `was born in <strong>${artist.birthYear}</strong>`;
    const age = artist.deathYear ? artist.deathYear - artist.birthYear : null;
    faqs.push({
      question: `When did ${artist.name} live?`,
      answer: `${artist.name} lived ${lifespan}${age ? ` (${age} years)` : ""}${artist.nationality ? `, and was <strong>${artist.nationality}</strong>` : ""}. Understanding when an artist worked places their art in historical context, reveals their influences, and explains their impact on movements that followed. ${firstName}'s era shaped the subjects, techniques, and materials available to them.`,
    });
  }

  // FAQ 5: Why famous
  faqs.push({
    question: `Why is ${artist.name} famous?`,
    answer: `<strong>${artist.name}</strong> is celebrated for ${artist.movements.length > 0 ? `pioneering contributions to ${movementNames}` : "innovative artistic techniques that pushed boundaries"} and creating works that continue to captivate audiences centuries later. ${topArtworks.length > 0 ? `Masterpieces like <strong>${topArtworks[0]}</strong> have become cultural touchstones, reproduced millions of times and recognized worldwide.` : "Their influence on subsequent generations of artists shaped the entire trajectory of art history."} Museums around the world proudly display ${firstName}'s work as essential pieces of their collections.`,
  });

  return faqs;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Cached data fetching to avoid duplicate queries between generateMetadata and page component
const getArtist = cache(async (slug: string) => {
  return prisma.artist.findUnique({
    where: { slug },
    include: {
      Movement: { select: { name: true, slug: true } },
      Artwork: {
        include: {
          Museum: { select: { name: true, city: true } },
          Artist: { select: { name: true } },
        },
        orderBy: [
          { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
          { searchVolumeTier: "asc" },
        ],
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

  if (!artist) return { title: "Artist Not Found" };

  const lifespan =
    artist.birthYear && artist.deathYear
      ? `(${artist.birthYear}–${artist.deathYear})`
      : artist.birthYear
        ? `(b. ${artist.birthYear})`
        : "";

  const title = `${artist.name} Paintings: Where to See Them | Masterpiece Locator`;

  // Build data-driven description
  const artworkCount = artist.Artwork?.length || 0;
  const museums = [...new Set(artist.Artwork?.filter(a => a.Museum).map(a => a.Museum!.name) || [])];
  const museumCount = museums.length;
  const notableWork = artist.Artwork?.[0]?.title;

  const description = artworkCount > 0 && museumCount > 0
    ? `Find ${artist.name}'s paintings worldwide. ${artworkCount} works at ${museumCount} museums${notableWork ? ` including ${notableWork}` : ""}.`
    : artist.bioShort || `Discover where to see famous works by ${artist.name}. Find museums and locations around the world.`;

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
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;

  const rawArtist = await getArtist(slug);

  if (!rawArtist) notFound();

  // Map artworks and movements to lowercase property names for components
  const artist = {
    ...rawArtist,
    movements: rawArtist.Movement,
    artworks: rawArtist.Artwork.map((a) => ({
      ...a,
      artist: a.Artist,
      museum: a.Museum,
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

  // Map to lowercase for components
  const museums = rawMuseums.map((m) => ({
    ...m,
    artworks: m.Artwork,
    _count: { artworks: m._count.Artwork },
  }));

  const lifespan =
    artist.birthYear && artist.deathYear
      ? `${artist.birthYear}–${artist.deathYear}`
      : artist.birthYear
        ? `b. ${artist.birthYear}`
        : null;

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    description: artist.bioShort || artist.bioFull || undefined,
    birthDate: artist.birthYear?.toString(),
    deathDate: artist.deathYear?.toString(),
    nationality: artist.nationality || undefined,
    image: artist.imageUrl || undefined,
    sameAs: artist.wikipediaUrl ? [artist.wikipediaUrl] : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: "Artist",
    },
  };

  const altText = `Portrait of ${artist.name}${artist.nationality ? `, ${artist.nationality} artist` : ""}${lifespan ? ` (${lifespan})` : ""}`;

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: artist.name },
  ];

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/artists" className="hover:text-neutral-900 hover:underline">
            Artists
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{artist.name}</span>
        </nav>

        {/* Header - Image + Info + Bio in same row */}
        <header className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Artist Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-xl overflow-hidden bg-neutral-100">
              {artist.imageUrl ? (
                <Image
                  src={artist.imageUrl}
                  alt={altText}
                  fill
                  className="object-cover"
                  sizes="192px"
                  unoptimized={artist.imageUrl.includes('wikimedia.org')}
                />
              ) : artist.artworks[0]?.imageUrl ? (
                <>
                  <Image
                    src={artist.artworks[0].imageUrl}
                    alt={`Artwork by ${artist.name}`}
                    fill
                    className="object-cover"
                    sizes="192px"
                    unoptimized={artist.artworks[0].imageUrl.includes('wikimedia.org')}
                  />
                  {/* No Portrait Available tag */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    No Portrait Available
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 text-4xl">
                  {artist.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Artist Info + Biography */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
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
            <div className="flex flex-wrap gap-3 text-neutral-600 mb-4">
              {artist.nationality && <span>{artist.nationality}</span>}
              {lifespan && (
                <>
                  <span className="text-neutral-300">·</span>
                  <span>{lifespan}</span>
                </>
              )}
            </div>

            {/* Combined Biography */}
            {(() => {
              const lastName = artist.name.split(" ").pop();
              const topArtworks = artist.artworks.filter(a => a.imageUrl).slice(0, 3);
              const uniqueCities = [...new Set(museums.map(m => m.city))].slice(0, 3);
              const centuryNum = artist.birthYear ? Math.floor(artist.birthYear / 100) + 1 : null;
              const century = centuryNum ? `${centuryNum}${centuryNum === 21 ? "st" : centuryNum === 22 ? "nd" : centuryNum === 23 ? "rd" : "th"}` : null;

              return (
                <div className="text-neutral-600 leading-relaxed space-y-3">
                  {(artist.bioFull || artist.bioShort) && (
                    <p>{artist.bioFull || artist.bioShort}</p>
                  )}
                  {artist.artworks.length > 0 && museums.length > 0 && (
                    <p>
                      We&apos;ve catalogued <strong>{artist.artworks.length} {artist.artworks.length === 1 ? "work" : "works"}</strong> by {lastName} across{" "}
                      <Link href="/museums" className="text-[#C9A84C] hover:underline font-medium">{museums.length} {museums.length === 1 ? "museum" : "museums"}</Link>
                      {uniqueCities.length > 0 && (
                        <> in {uniqueCities.slice(0, 2).map((city, i) => (
                          <span key={city}>
                            {i > 0 && " and "}{city}
                          </span>
                        ))}{uniqueCities.length > 2 && ` and ${uniqueCities.length - 2} other ${uniqueCities.length - 2 === 1 ? "city" : "cities"}`}</>
                      )}
                      {artist.movements.length > 0 && (
                        <>. {artist.nationality ? `A ${artist.nationality} artist` : "An artist"} associated with{" "}
                        {artist.movements.slice(0, 2).map((m, i) => (
                          <span key={m.slug}>
                            {i > 0 && " and "}
                            <Link href={`/movement/${m.slug}`} className="text-[#C9A84C] hover:underline font-medium">{m.name}</Link>
                          </span>
                        ))}, {lastName}&apos;s {century ? `${century}-century ` : ""}paintings helped shape the course of Western art</>
                      )}
                      {topArtworks.length > 0 && (
                        <>. Notable works include <strong>{topArtworks[0].title}</strong>{topArtworks.length > 1 && <> and <strong>{topArtworks[1].title}</strong></>}</>
                      )}.
                    </p>
                  )}
                  {artist.wikipediaUrl && (
                    <p>
                      <a href={artist.wikipediaUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 text-sm">
                        Learn more about {artist.name} on Wikipedia →
                      </a>
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        </header>

        {/* Notable Works */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Notable Works by {artist.name}
          </h2>
          <p className="text-neutral-500 mb-6">
            {artist.artworks.length > 0
              ? `${artist.artworks.length} ${artist.artworks.length === 1 ? "painting" : "paintings"} catalogued with museum locations`
              : "No artworks catalogued yet"}
          </p>
          {artist.artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {artist.artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No artworks catalogued yet.</p>
          )}
        </section>

        {/* Where to See Their Work */}
        {museums.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              Museums with {artist.name}&apos;s Work
            </h2>
            <p className="text-neutral-500 mb-6">
              {museums.length} {museums.length === 1 ? "museum displays" : "museums display"} {artist.name.split(" ").pop()}&apos;s paintings. Click any museum to see visiting info and the specific works they hold.
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
                            unoptimized={artwork.imageUrl.includes('wikimedia.org')}
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

        {/* FAQ Section */}
        {(() => {
          const faqs = generateArtistFAQs(artist);
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
