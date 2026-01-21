import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { artworkMetaTitle, artworkMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";

// Extract series name from artwork title (e.g., "Rouen Cathedral" from "Rouen Cathedral, West Facade")
function extractSeriesName(title: string): string | null {
  // Common patterns for series titles:
  // "Title, Subtitle" or "Title: Subtitle" or "Title - Subtitle" or "Title (Subtitle)"
  const patterns = [
    /^(.+?),\s+/,           // "Rouen Cathedral, West Facade"
    /^(.+?):\s+/,           // "Water Lilies: Morning"
    /^(.+?)\s+-\s+/,        // "Haystacks - End of Summer"
    /^(.+?)\s+\(/,          // "Parliament (Sunset)"
    /^(The\s+.+?)\s+(?:in|at|on)\s+/i,  // "The Japanese Bridge in Spring"
  ];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match && match[1].length >= 5) {
      return match[1].trim();
    }
  }

  // Also check for numbered series like "Water Lilies 1" vs "Water Lilies 2"
  const numberedMatch = title.match(/^(.+?)\s*(?:\d+|I+V?|[A-Z])$/);
  if (numberedMatch && numberedMatch[1].length >= 5) {
    return numberedMatch[1].trim();
  }

  return null;
}

// Only generate FAQ if artwork has a real description in the database
// We avoid templated FAQs - only factual, unique content
function generateArtworkFAQ(artwork: {
  title: string;
  museum: { name: string; city: string; country: string } | null;
}) {
  // Single factual FAQ about location - the only truly unique info we can provide
  if (artwork.museum) {
    return [{
      question: `Where is ${artwork.title} displayed?`,
      answer: `<strong>${artwork.museum.name}</strong> in ${artwork.museum.city}, ${artwork.museum.country}.`,
    }];
  }
  return [];
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Cached data fetching to avoid duplicate queries between generateMetadata and page component
const getArtwork = cache(async (slug: string) => {
  return prisma.artwork.findUnique({
    where: { slug },
    include: {
      Artist: {
        include: {
          Movement: { select: { name: true, slug: true } },
        },
      },
      Museum: true,
    },
  });
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rawArtwork = await getArtwork(slug);

  if (!rawArtwork) return { title: "Artwork Not Found" };

  // Map to lowercase for consistency
  const artwork = {
    ...rawArtwork,
    artist: rawArtwork.Artist,
    museum: rawArtwork.Museum,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const museumName = artwork.museum?.name || null;
  const city = artwork.museum?.city || null;

  // Keyword-focused with character limits (60 title, 160 description)
  const title = artworkMetaTitle(artwork.title, museumName);
  const description = artworkMetaDescription(artwork.title, artistName, museumName, city);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/art/${slug}`,
      images: artwork.imageUrl
        ? [
            {
              url: artwork.imageUrl,
              width: 1200,
              height: 630,
              alt: `${artwork.title} by ${artistName}`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: artwork.imageUrl ? [artwork.imageUrl] : [],
    },
  };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;

  const rawArtwork = await getArtwork(slug);

  if (!rawArtwork) notFound();

  // Map to lowercase property names for consistency
  // Also decode HTML entities for display
  const artwork = {
    ...rawArtwork,
    title: decodeHtmlEntities(rawArtwork.title),
    description: decodeHtmlEntities(rawArtwork.description),
    medium: decodeHtmlEntities(rawArtwork.medium),
    historicalSignificance: decodeHtmlEntities(rawArtwork.historicalSignificance),
    artist: rawArtwork.Artist ? {
      ...rawArtwork.Artist,
      name: decodeHtmlEntities(rawArtwork.Artist.name),
      nationality: decodeHtmlEntities(rawArtwork.Artist.nationality),
      bioShort: decodeHtmlEntities(rawArtwork.Artist.bioShort),
      movements: rawArtwork.Artist.Movement.map((m) => ({
        ...m,
        name: decodeHtmlEntities(m.name),
      })),
    } : null,
    museum: rawArtwork.Museum ? {
      ...rawArtwork.Museum,
      name: decodeHtmlEntities(rawArtwork.Museum.name),
      city: decodeHtmlEntities(rawArtwork.Museum.city),
      country: decodeHtmlEntities(rawArtwork.Museum.country),
      address: decodeHtmlEntities(rawArtwork.Museum.address),
    } : null,
  };

  // Get other artworks at this museum (prefer those with images)
  const rawNearbyArtworks = artwork.museumId
    ? await prisma.artwork.findMany({
        where: {
          museumId: artwork.museumId,
          id: { not: artwork.id },
          imageUrl: { not: null }, // Only show artworks with images
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        take: 4,
      })
    : [];

  // Get other artworks by this artist (prefer those with images)
  const rawMoreByArtist = artwork.artistId
    ? await prisma.artwork.findMany({
        where: {
          artistId: artwork.artistId,
          id: { not: artwork.id },
          imageUrl: { not: null }, // Only show artworks with images
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        take: 4,
      })
    : [];

  // Find series variations (other artworks with similar titles by same artist)
  const seriesName = extractSeriesName(artwork.title);
  const rawSeriesVariations = (seriesName && artwork.artistId)
    ? await prisma.artwork.findMany({
        where: {
          artistId: artwork.artistId,
          id: { not: artwork.id },
          title: { startsWith: seriesName },
          imageUrl: { not: null },
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        orderBy: { year: "asc" },
        take: 8,
      })
    : [];

  // Map to lowercase property names for ArtworkCard component
  // Also decode HTML entities for display
  const nearbyArtworks = rawNearbyArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));
  const moreByArtist = rawMoreByArtist.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Map series variations
  const seriesVariations = rawSeriesVariations.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Filter moreByArtist to exclude series variations (avoid duplicates)
  const seriesIds = new Set(seriesVariations.map((s) => s.id));
  const filteredMoreByArtist = moreByArtist.filter((a) => !seriesIds.has(a.id));

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description || undefined,
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium || undefined,
    ...(artwork.dimensions && {
      width: { "@type": "Distance", name: artwork.dimensions.split("x")[0]?.trim() },
      height: { "@type": "Distance", name: artwork.dimensions.split("x")[1]?.trim() },
    }),
    image: artwork.imageUrl || undefined,
    creator: artwork.artist
      ? {
          "@type": "Person",
          name: artwork.artist.name,
          birthDate: artwork.artist.birthYear?.toString(),
          deathDate: artwork.artist.deathYear?.toString(),
          nationality: artwork.artist.nationality || undefined,
        }
      : undefined,
    contentLocation: artwork.museum
      ? {
          "@type": "Museum",
          name: artwork.museum.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: artwork.museum.address || undefined,
            addressLocality: artwork.museum.city,
            addressCountry: artwork.museum.country,
          },
          ...(artwork.museum.latitude && artwork.museum.longitude && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: artwork.museum.latitude,
              longitude: artwork.museum.longitude,
            },
          }),
          url: artwork.museum.websiteUrl || undefined,
        }
      : undefined,
    sameAs: artwork.wikipediaUrl ? [artwork.wikipediaUrl] : undefined,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const altText = `${artwork.title} by ${artistName}${artwork.year ? ` (${artwork.year})` : ""}${artwork.medium ? `, ${artwork.medium}` : ""}${artwork.museum ? ` at ${artwork.museum.name}` : ""}`;

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...(artwork.artist ? [{ name: artwork.artist.name, href: `/artist/${artwork.artist.slug}` }] : []),
    { name: artwork.title },
  ];

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          {artwork.artist && (
            <>
              <Link
                href={`/artist/${artwork.artist.slug}`}
                className="hover:text-neutral-900 hover:underline"
              >
                {artwork.artist.name}
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
            </>
          )}
          <span className="font-medium text-neutral-900">{artwork.title}</span>
        </nav>

        {/* Hero Image */}
        {artwork.imageUrl ? (
          <div className="mb-8">
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100">
              <Image
                src={artwork.imageUrl}
                alt={altText}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                unoptimized={artwork.imageUrl.includes('wikimedia.org') || artwork.imageUrl.includes('wikiart.org')}
              />
            </div>
            {artwork.imageAttribution && (
              <p className="text-sm text-neutral-500 mt-2 text-center">
                {artwork.imageAttribution}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg p-12 text-center border border-neutral-300">
            <div className="text-7xl font-light text-neutral-300 mb-4">
              {artwork.title.charAt(0)}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-3">
              <span className="text-neutral-600 font-medium">© Copyrighted Artwork</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">
              This artwork is protected by copyright. We cannot display images of works by artists who passed away after 1954.
            </p>
            {artwork.museum && (
              <p className="text-neutral-600 text-sm mt-4 font-medium">
                See the original at {artwork.museum.name} in {artwork.museum.city}
              </p>
            )}
          </div>
        )}

        {/* Title & Basic Info */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            {artwork.title}
          </h1>
          <p className="text-xl text-neutral-600">
            by{" "}
            {artwork.artist ? (
              <Link href={`/artist/${artwork.artist.slug}`} className="hover:text-[#C9A84C] transition-colors">
                {artwork.artist.name}
              </Link>
            ) : (
              "Unknown Artist"
            )}
            {artwork.year && <>, {artwork.year}</>}
          </p>
          {/* Movement badges */}
          {artwork.artist?.movements && artwork.artist.movements.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {artwork.artist.movements.map((movement) => (
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
        </header>

        {/* Only show description if we have real content from the database */}
        {artwork.description && (
          <section className="mb-8">
            <div
              className="text-neutral-600 leading-relaxed prose prose-neutral max-w-none prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: artwork.description }}
            />
          </section>
        )}

        {/* Where to See It */}
        {artwork.museum && (
          <section className="bg-neutral-100 rounded-xl p-6 mb-8 border border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Visit {artwork.title} in Person
            </h2>
            <div>
              <h3 className="text-lg mb-1">
                <Link
                  href={`/museum/${artwork.museum.slug}`}
                  className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors"
                >
                  {artwork.museum.name}
                </Link>
              </h3>
              {artwork.museum.address && (
                <p className="text-neutral-600 mt-1">{artwork.museum.address}</p>
              )}
              <p className="text-neutral-600">
                {artwork.museum.city}, {artwork.museum.country}
              </p>
              {artwork.galleryRoom && (
                <p className="mt-3 text-neutral-800 font-medium">
                  Gallery: {artwork.galleryRoom}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                {artwork.museum.websiteUrl && (
                  <a
                    href={artwork.museum.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-black transition-colors"
                  >
                    Museum Website
                  </a>
                )}
                {artwork.museum.ticketUrl && (
                  <a
                    href={artwork.museum.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Buy Tickets
                  </a>
                )}
              </div>
            </div>
            {artwork.isPermanent && (
              <p className="mt-4 text-sm text-neutral-600 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Permanently housed. This work does not travel.
              </p>
            )}
          </section>
        )}


        {/* Historical Significance */}
        {artwork.historicalSignificance && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Historical Significance
            </h2>
            <div className="prose max-w-none text-neutral-700 leading-relaxed">
              <p>{artwork.historicalSignificance}</p>
            </div>
          </section>
        )}

        {/* Technical Details - only show medium and dimensions (year/artist already in header) */}
        {(artwork.medium || artwork.dimensions) && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Details
            </h2>
            <dl className="grid grid-cols-2 gap-4 text-sm bg-neutral-50 rounded-lg p-4">
              {artwork.medium && (
                <>
                  <dt className="text-neutral-500 font-medium">Medium</dt>
                  <dd className="text-neutral-900">{artwork.medium}</dd>
                </>
              )}
              {artwork.dimensions && (
                <>
                  <dt className="text-neutral-500 font-medium">Dimensions</dt>
                  <dd className="text-neutral-900">{artwork.dimensions}</dd>
                </>
              )}
            </dl>
          </section>
        )}

        {/* About the Artist - only show if we have real bio content */}
        {artwork.artist && artwork.artist.bioShort && (
          <section className="mb-8 border-t pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              About {artwork.artist.name}
            </h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">{artwork.artist.bioShort}</p>
            <Link
              href={`/artist/${artwork.artist.slug}`}
              className="text-[#C9A84C] hover:underline font-medium"
            >
              View all works by {artwork.artist.name} →
            </Link>
          </section>
        )}

        {/* Series Variations - no templated description, just the artworks */}
        {seriesVariations.length > 0 && artwork.artist && seriesName && (
          <section className="mb-8 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              {seriesName} Series by {artwork.artist.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {seriesVariations.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        {/* More by this Artist - no templated description */}
        {filteredMoreByArtist.length > 0 && artwork.artist && (
          <section className="mb-8 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              More by {artwork.artist.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredMoreByArtist.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        {/* Other Works at This Museum - no templated description */}
        {nearbyArtworks.length > 0 && artwork.museum && (
          <section className="mb-8 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Also at {artwork.museum.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyArtworks.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section - use stored FAQs from database */}
        {(() => {
          // Use stored FAQs if available, otherwise fall back to generated location FAQ
          const storedFaqs = rawArtwork.faqs as Array<{question: string; answer: string}> | null;
          const faqs = storedFaqs && storedFaqs.length > 0
            ? storedFaqs
            : generateArtworkFAQ(artwork);
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`About ${artwork.title}`} />
            </>
          ) : null;
        })()}

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Own Art Like This
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Gallery-quality canvas prints with the same mood and energy. No museum crowds required.
            </p>
            <Link
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Browse Collection
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
