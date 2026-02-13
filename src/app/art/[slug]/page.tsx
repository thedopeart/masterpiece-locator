import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { artworkMetaTitle, artworkMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";
import PriceComparisonModule from "@/components/PriceComparison";
import ShareButtons from "@/components/ShareButtons";
import TicketButton from "@/components/TicketButton";

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

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

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
      AuctionSale: {
        orderBy: { saleDate: "desc" },
        take: 5,
      },
      ArtworkValuation: {
        orderBy: { estimateUsd: "desc" },
        take: 1,
      },
    },
  });
});

// Format price for display
function formatPrice(cents: bigint): string {
  const millions = Number(cents) / 100 / 1000000;
  if (millions >= 1) {
    return `$${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }
  const thousands = Number(cents) / 100 / 1000;
  if (thousands >= 1) {
    return `$${thousands.toFixed(0)}K`;
  }
  return `$${(Number(cents) / 100).toLocaleString()}`;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rawArtwork = await getArtwork(slug);

  if (!rawArtwork) notFound();

  // Map to lowercase for consistency
  const artwork = {
    ...rawArtwork,
    artist: rawArtwork.Artist,
    museum: rawArtwork.Museum,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const museumName = artwork.museum?.name || null;
  const city = artwork.museum?.city || null;
  const latestSale = rawArtwork.AuctionSale[0];

  // Keyword-focused with character limits (60 title, 160 description)
  let title = artworkMetaTitle(artwork.title, museumName);
  let description = artworkMetaDescription(artwork.title, artistName, museumName, city, {
    year: artwork.year,
    medium: artwork.medium,
    nationality: artwork.artist?.nationality,
    artworkType: rawArtwork.artworkType,
  });

  // Enhance for auction artworks (respecting 60-char title limit)
  if (latestSale) {
    const priceM = (Number(latestSale.priceUsd) / 100 / 1000000).toFixed(0);
    const priceSuffix = `$${priceM}M Auction Record`;
    const fullTitle = `${artwork.title} by ${artistName} | ${priceSuffix}`;
    if (fullTitle.length <= 60) {
      title = fullTitle;
    } else {
      const titleOnly = `${artwork.title} | ${priceSuffix}`;
      if (titleOnly.length <= 60) {
        title = titleOnly;
      } else {
        // Shorten the artwork title to fit with price suffix
        const maxTitleLen = 60 - ` | ${priceSuffix}`.length;
        let shortTitle = artwork.title;
        if (artwork.title.length > maxTitleLen) {
          shortTitle = artwork.title.slice(0, artwork.title.lastIndexOf(" ", maxTitleLen))
            .replace(/\s+(?:of|the|with|by|a|an|in|at|to|for|and|on)$/i, "")
            .replace(/[,;:\-–—]$/, "")
            .trim();
          // Remove unclosed parenthetical at the end
          if (shortTitle.includes("(") && !shortTitle.includes(")")) {
            shortTitle = shortTitle.replace(/\s*\([^)]*$/, "").trim();
          }
        }
        title = `${shortTitle} | ${priceSuffix}`;
      }
    }
    description = `${artwork.title} by ${artistName} sold for $${priceM} million${latestSale.auctionHouse ? ` at ${latestSale.auctionHouse}` : ''}. View auction history, price analysis, and artwork details.`;
  }

  // Build keywords
  const keywords = [
    artwork.title,
    artistName,
    artwork.artist?.nationality,
    museumName,
    artwork.medium,
    ...(artwork.artist?.Movement?.map((m: { name: string }) => m.name) || []),
    latestSale ? "auction record" : null,
    latestSale ? `most expensive ${rawArtwork.artworkType || "painting"}` : null,
    latestSale ? `${artistName} auction` : null,
  ].filter(Boolean).join(", ");

  return {
    title,
    description,
    keywords,
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
    alternates: {
      canonical: `${BASE_URL}/art/${slug}`,
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

  // Get related artworks from the same movement (by different artists)
  const movementSlugs = rawArtwork.Artist?.Movement?.map(m => m.slug) || [];
  const rawRelatedByMovement = movementSlugs.length > 0
    ? await prisma.artwork.findMany({
        where: {
          id: { not: artwork.id },
          artistId: artwork.artistId ? { not: artwork.artistId } : undefined, // Different artist
          imageUrl: { not: null },
          Artist: {
            Movement: {
              some: { slug: { in: movementSlugs } },
            },
          },
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        orderBy: { searchVolumeTier: "asc" }, // Most famous first
        take: 8,
      })
    : [];

  // Map related artworks
  const relatedByMovement = rawRelatedByMovement.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Build JSON-LD structured data for SEO
  const latestSale = rawArtwork.AuctionSale[0];
  const latestValuation = rawArtwork.ArtworkValuation[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description ? artwork.description.replace(/<[^>]*>/g, '').substring(0, 500) : undefined,
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium || undefined,
    artform: artwork.artworkType === "sculpture" ? "Sculpture" : artwork.artworkType === "drawing" ? "Drawing" : artwork.artworkType === "print" ? "Print" : "Painting",
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
          url: `${BASE_URL}/artist/${artwork.artist.slug}`,
        }
      : undefined,
    // Art movement
    ...(artwork.artist?.movements && artwork.artist.movements.length > 0 && {
      about: artwork.artist.movements.map(m => ({
        "@type": "Thing",
        name: m.name,
        url: `${BASE_URL}/movement/${m.slug}`,
      })),
    }),
    // Auction sale data
    ...(latestSale && {
      offers: {
        "@type": "Offer",
        price: Number(latestSale.priceUsd) / 100,
        priceCurrency: "USD",
        availability: "https://schema.org/SoldOut",
        validFrom: latestSale.saleDate.toISOString(),
        seller: latestSale.auctionHouse ? {
          "@type": "Organization",
          name: latestSale.auctionHouse,
        } : undefined,
      },
    }),
    // Insurance/estimated valuation (only if no auction sale)
    ...(latestValuation && !latestSale ? {
      offers: {
        "@type": "Offer",
        price: Number(latestValuation.estimateUsd) / 100,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: latestValuation.valuationType === "insurance" ? "Insurance valuation" : "Expert estimate",
      },
    } : {}),
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
    // Keywords for SEO
    keywords: [
      artwork.title,
      artwork.artist?.name,
      artwork.artist?.nationality,
      artwork.museum?.name,
      artwork.medium,
      ...(artwork.artist?.movements?.map(m => m.name) || []),
      latestSale ? "auction record" : null,
      latestSale ? `most expensive ${artwork.artworkType || "painting"}` : null,
    ].filter(Boolean).join(", "),
    sameAs: artwork.wikipediaUrl ? [artwork.wikipediaUrl] : undefined,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const altText = `${artwork.title} by ${artistName}${artwork.year ? ` (${artwork.year})` : ""}${artwork.medium ? `, ${artwork.medium}` : ""}${artwork.museum ? ` at ${artwork.museum.name}` : ""}`;

  // Build breadcrumb items for schema
  const isSculpture = artwork.artworkType === "sculpture";
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...(isSculpture ? [{ name: "Sculptures", href: "/sculptures" }] : []),
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

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb - full width */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          {isSculpture && (
            <>
              <Link href="/sculptures" className="hover:text-neutral-900">
                Sculptures
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
            </>
          )}
          {artwork.artist && (
            <>
              <Link
                href={`/artist/${artwork.artist.slug}`}
                className="hover:text-neutral-900"
              >
                {artwork.artist.name}
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
            </>
          )}
          <span className="font-medium text-neutral-900">{artwork.title}</span>
        </nav>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* Hero Image */}
            {artwork.imageUrl ? (
              <div className="mb-6">
                <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100">
                  <Image
                    src={artwork.imageUrl}
                    alt={altText}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 900px"
                    unoptimized={true}
                  />
                </div>
                {artwork.imageAttribution && (
                  <p className="text-sm text-neutral-500 mt-2 text-center">
                    {artwork.imageAttribution}
                  </p>
                )}
              </div>
            ) : (
              <div className="mb-6 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg p-12 text-center border border-neutral-300">
                <div className="text-7xl font-light text-neutral-300 mb-4">
                  {artwork.title.charAt(0)}
                </div>
                {artwork.year && artwork.year < 1900 ? (
                  <>
                    <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-3">
                      <span className="text-neutral-600 font-medium">No Image Available</span>
                    </div>
                    <p className="text-neutral-500 text-sm max-w-md mx-auto">
                      We don&apos;t have a photograph of this work yet.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-3">
                      <span className="text-neutral-600 font-medium">© Copyrighted Artwork</span>
                    </div>
                    <p className="text-neutral-500 text-sm max-w-md mx-auto">
                      This artwork is protected by copyright. We cannot display images of works by artists who passed away after 1954.
                    </p>
                  </>
                )}
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
              {/* Share buttons */}
              <div className="mt-4">
                <ShareButtons title={`${artwork.title} by ${artwork.artist?.name || "Unknown Artist"}`} />
              </div>
            </header>

            {/* Mobile sidebar - shown on small screens */}
            <div className="lg:hidden space-y-4 mb-8">
              {/* Quick Facts */}
              {(artwork.year || artwork.medium || artwork.dimensions || artwork.galleryRoom) && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-3">Details</h3>
                  <dl className="space-y-2 text-sm">
                    {artwork.year && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Year</dt>
                        <dd className="text-neutral-900 font-medium">{artwork.year}</dd>
                      </div>
                    )}
                    {artwork.medium && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Medium</dt>
                        <dd className="text-neutral-900 font-medium text-right">{artwork.medium}</dd>
                      </div>
                    )}
                    {artwork.dimensions && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Size</dt>
                        <dd className="text-neutral-900 font-medium">{artwork.dimensions}</dd>
                      </div>
                    )}
                    {artwork.galleryRoom && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Gallery</dt>
                        <dd className="text-neutral-900 font-medium">{artwork.galleryRoom}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Price / Auction History Card - Mobile */}
              {(rawArtwork.AuctionSale.length > 0 || rawArtwork.ArtworkValuation.length > 0) && (
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {rawArtwork.AuctionSale.length > 0 ? "Auction History" : "Estimated Value"}
                  </h3>
                  {rawArtwork.AuctionSale.length > 0 ? (
                    <>
                      <div className="text-xl font-bold text-neutral-900">
                        {formatPrice(rawArtwork.AuctionSale[0].priceUsd)}
                      </div>
                      <p className="text-sm text-neutral-600">
                        {rawArtwork.AuctionSale[0].auctionHouse || "Private Sale"} ({rawArtwork.AuctionSale[0].saleDate.getFullYear()})
                      </p>
                    </>
                  ) : rawArtwork.ArtworkValuation.length > 0 ? (
                    <>
                      <div className="text-xl font-bold text-neutral-900">
                        {formatPrice(rawArtwork.ArtworkValuation[0].estimateUsd)}
                      </div>
                      <p className="text-sm text-neutral-600">
                        {rawArtwork.ArtworkValuation[0].valuationType === "insurance" ? "Insurance valuation" : "Expert estimate"}
                      </p>
                    </>
                  ) : null}
                </div>
              )}

              {/* Museum Card - Mobile */}
              {artwork.museum && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">Where to See It</h3>
                  <Link
                    href={`/museum/${artwork.museum.slug}`}
                    className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors"
                  >
                    {artwork.museum.name}
                  </Link>
                  <p className="text-neutral-600 text-sm mt-1">
                    {artwork.museum.city}, {artwork.museum.country}
                  </p>
                  {artwork.isPermanent && (
                    <p className="text-xs text-green-700 mt-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Permanently housed
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {artwork.museum.websiteUrl && (
                      <a
                        href={artwork.museum.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-700 hover:text-black transition-colors underline"
                      >
                        Museum Website
                      </a>
                    )}
                    <TicketButton
                      museumSlug={artwork.museum.slug}
                      directTicketUrl={artwork.museum.ticketUrl}
                      variant="artwork"
                    />
                  </div>
                </div>
              )}

              {/* Artist Card - Mobile */}
              {artwork.artist && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">The Artist</h3>
                  <Link
                    href={`/artist/${artwork.artist.slug}`}
                    className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors"
                  >
                    {artwork.artist.name}
                  </Link>
                  {(artwork.artist.birthYear || artwork.artist.deathYear) && (
                    <p className="text-neutral-600 text-sm mt-1">
                      {artwork.artist.birthYear && artwork.artist.deathYear
                        ? `${artwork.artist.birthYear}–${artwork.artist.deathYear}`
                        : artwork.artist.birthYear
                        ? `Born ${artwork.artist.birthYear}`
                        : `Died ${artwork.artist.deathYear}`}
                    </p>
                  )}
                  {artwork.artist.nationality && (
                    <p className="text-neutral-500 text-sm">{artwork.artist.nationality}</p>
                  )}
                  <Link
                    href={`/artist/${artwork.artist.slug}`}
                    className="text-sm text-[#C9A84C] hover:opacity-80 transition-opacity mt-2 inline-block"
                  >
                    View all works →
                  </Link>
                </div>
              )}
            </div>

            {/* Description */}
            {artwork.description && (
              <section className="mb-8">
                <div
                  className="text-neutral-600 leading-relaxed prose prose-neutral max-w-none prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-p:mb-4"
                  dangerouslySetInnerHTML={{ __html: artwork.description }}
                />
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
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6">
              {/* Quick Facts */}
              {(artwork.year || artwork.medium || artwork.dimensions || artwork.galleryRoom) && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-3">Details</h3>
                  <dl className="space-y-3 text-sm">
                    {artwork.year && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Year</dt>
                        <dd className="text-neutral-900 font-medium">{artwork.year}</dd>
                      </div>
                    )}
                    {artwork.medium && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-neutral-500 shrink-0">Medium</dt>
                        <dd className="text-neutral-900 font-medium text-right">{artwork.medium}</dd>
                      </div>
                    )}
                    {artwork.dimensions && (
                      <div className="flex justify-between">
                        <dt className="text-neutral-500">Size</dt>
                        <dd className="text-neutral-900 font-medium">{artwork.dimensions}</dd>
                      </div>
                    )}
                    {artwork.galleryRoom && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-neutral-500 shrink-0">Gallery</dt>
                        <dd className="text-neutral-900 font-medium text-right">{artwork.galleryRoom}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Price / Auction History Card */}
              {(rawArtwork.AuctionSale.length > 0 || rawArtwork.ArtworkValuation.length > 0) && (
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {rawArtwork.AuctionSale.length > 0 ? "Auction History" : "Estimated Value"}
                  </h3>
                  {rawArtwork.AuctionSale.length > 0 ? (
                    <>
                      <div className="text-2xl font-bold text-neutral-900">
                        {formatPrice(rawArtwork.AuctionSale[0].priceUsd)}
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">
                        {rawArtwork.AuctionSale[0].auctionHouse || "Private Sale"} ({rawArtwork.AuctionSale[0].saleDate.getFullYear()})
                      </p>
                      {rawArtwork.AuctionSale[0].isRecord && (
                        <span className="inline-block mt-2 bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                          Record Sale
                        </span>
                      )}
                    </>
                  ) : rawArtwork.ArtworkValuation.length > 0 ? (
                    <>
                      <div className="text-2xl font-bold text-neutral-900">
                        {formatPrice(rawArtwork.ArtworkValuation[0].estimateUsd)}
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">
                        {rawArtwork.ArtworkValuation[0].valuationType === "insurance" ? "Insurance valuation" : "Expert estimate"}
                      </p>
                    </>
                  ) : null}

                  {/* Price Comparison */}
                  {rawArtwork.AuctionSale.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <PriceComparisonModule
                        priceUsdCents={rawArtwork.AuctionSale[0].priceUsd}
                        artworkTitle={rawArtwork.title}
                        variant="inline"
                      />
                    </div>
                  )}

                  <Link
                    href="/auction-records/most-expensive"
                    className="text-sm text-[#C9A84C] hover:underline mt-3 inline-block"
                  >
                    View all auction records →
                  </Link>
                </div>
              )}

              {/* Museum Card */}
              {artwork.museum && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">Where to See It</h3>
                  <Link
                    href={`/museum/${artwork.museum.slug}`}
                    className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors block"
                  >
                    {artwork.museum.name}
                  </Link>
                  <p className="text-neutral-600 text-sm mt-1">
                    {artwork.museum.city}, {artwork.museum.country}
                  </p>
                  {artwork.museum.address && (
                    <p className="text-neutral-500 text-xs mt-1">{artwork.museum.address}</p>
                  )}
                  {artwork.isPermanent && (
                    <p className="text-xs text-green-700 mt-3 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Permanently housed
                    </p>
                  )}
                  <div className="mt-4 flex flex-col gap-2">
                    <TicketButton
                      museumSlug={artwork.museum.slug}
                      directTicketUrl={artwork.museum.ticketUrl}
                      variant="artwork"
                      className="px-4 py-2 text-center"
                    />
                    {artwork.museum.websiteUrl && (
                      <a
                        href={artwork.museum.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-700 hover:text-black transition-colors text-center"
                      >
                        Museum Website
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Artist Card */}
              {artwork.artist && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">The Artist</h3>
                  <Link
                    href={`/artist/${artwork.artist.slug}`}
                    className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors block"
                  >
                    {artwork.artist.name}
                  </Link>
                  {(artwork.artist.birthYear || artwork.artist.deathYear) && (
                    <p className="text-neutral-600 text-sm mt-1">
                      {artwork.artist.birthYear && artwork.artist.deathYear
                        ? `${artwork.artist.birthYear}–${artwork.artist.deathYear}`
                        : artwork.artist.birthYear
                        ? `Born ${artwork.artist.birthYear}`
                        : `Died ${artwork.artist.deathYear}`}
                    </p>
                  )}
                  {artwork.artist.nationality && (
                    <p className="text-neutral-500 text-sm">{artwork.artist.nationality}</p>
                  )}
                  <Link
                    href={`/artist/${artwork.artist.slug}`}
                    className="text-sm text-[#C9A84C] hover:opacity-80 transition-opacity mt-3 inline-block"
                  >
                    View all works →
                  </Link>
                </div>
              )}

              {/* Wikipedia Link */}
              {artwork.wikipediaUrl && (
                <a
                  href={artwork.wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/>
                  </svg>
                  Read on Wikipedia
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* Full-width sections */}
        <div className="mt-12">
          {/* Series Variations */}
          {seriesVariations.length > 0 && artwork.artist && seriesName && (
            <section className="mb-12 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                {seriesName} Series by {artwork.artist.name}
              </h2>
              <div className="masonry-grid">
                {seriesVariations.map((item, index) => (
                  <MasonryArtworkCard key={item.id} artwork={item} priority={index < 4} />
                ))}
              </div>
            </section>
          )}

          {/* More by this Artist */}
          {filteredMoreByArtist.length > 0 && artwork.artist && (
            <section className="mb-12 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                More by {artwork.artist.name}
              </h2>
              <div className="masonry-grid">
                {filteredMoreByArtist.map((item, index) => (
                  <MasonryArtworkCard key={item.id} artwork={item} priority={index < 4} />
                ))}
              </div>
            </section>
          )}

          {/* Other Works at This Museum */}
          {nearbyArtworks.length > 0 && artwork.museum && (
            <section className="mb-12 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                Also at {artwork.museum.name}
              </h2>
              <div className="masonry-grid">
                {nearbyArtworks.map((item, index) => (
                  <MasonryArtworkCard key={item.id} artwork={item} priority={index < 4} />
                ))}
              </div>
            </section>
          )}

          {/* Related Artworks from Same Movement */}
          {relatedByMovement.length > 0 && artwork.artist?.movements && artwork.artist.movements.length > 0 && (
            <section className="mb-12 border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                Related {artwork.artist.movements[0].name} Works
              </h2>
              <p className="text-neutral-500 text-sm mb-4">
                Other masterpieces from the {artwork.artist.movements[0].name} movement
              </p>
              <div className="masonry-grid">
                {relatedByMovement.map((item, index) => (
                  <MasonryArtworkCard key={item.id} artwork={item} priority={index < 4} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href={`/movement/${artwork.artist.movements[0].slug}`}
                  className="text-[#C9A84C] hover:underline text-sm"
                >
                  Explore all {artwork.artist.movements[0].name} artworks →
                </Link>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {(() => {
            const storedFaqs = rawArtwork.faqs as Array<{question: string; answer: string}> | null;
            const faqs = storedFaqs && storedFaqs.length > 0
              ? storedFaqs
              : generateArtworkFAQ(artwork);
            return faqs.length > 0 ? (
              <section className="mb-12 border-t border-neutral-200 pt-8">
                <FAQSchema items={faqs} />
                <FAQ items={faqs} title={`About ${artwork.title}`} />
              </section>
            ) : null;
          })()}

          {/* CTA */}
          <section className="border-t border-neutral-200 pt-8">
            <div className="bg-black rounded-xl p-8 text-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                Own Art Like This
              </h2>
              <p className="text-neutral-400 mb-6 max-w-md mx-auto">
                <span className="text-white">Luxury wall art</span> with the same mood and energy. Gallery-quality canvas, no museum crowds.
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
    </div>
  );
}
