import { prisma } from "@/lib/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/text";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

function formatPrice(cents: bigint): string {
  const millions = Number(cents) / 100 / 1000000;
  if (millions >= 1) {
    return `$${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }
  return `$${(Number(cents) / 100).toLocaleString()}`;
}

function formatFullPrice(cents: bigint): string {
  const dollars = Number(cents) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(dollars);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const artist = await prisma.artist.findFirst({
    where: { slug }
  });

  if (!artist) notFound();

  return {
    title: `${artist.name} Auction Records: Most Expensive Paintings Sold`,
    description: `Complete auction history for ${artist.name}. See all paintings sold at auction with prices, dates, and buyer information.`,
    openGraph: {
      title: `${artist.name} Auction Records`,
      description: `Complete auction history for ${artist.name}. All paintings sold with prices and details.`,
      type: "article",
      url: `${BASE_URL}/auction-records/by-artist/${slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/auction-records/by-artist/${slug}`,
    },
  };
}

export default async function ArtistAuctionPage({ params }: Props) {
  const { slug } = await params;

  const artist = await prisma.artist.findFirst({
    where: { slug },
    include: {
      Artwork: {
        where: {
          AuctionSale: {
            some: {}
          }
        },
        include: {
          AuctionSale: {
            orderBy: { priceUsd: 'desc' }
          },
          Museum: { select: { name: true, slug: true } }
        }
      }
    }
  });

  if (!artist) notFound();

  // Flatten and sort all sales
  const allSales = artist.Artwork
    .flatMap(artwork => artwork.AuctionSale.map(sale => ({ ...sale, artwork })))
    .sort((a, b) => Number(b.priceUsd - a.priceUsd));

  if (allSales.length === 0) notFound();

  // Calculate stats
  const totalValue = allSales.reduce((sum, s) => sum + s.priceUsd, BigInt(0));
  const highestSale = allSales[0];
  const recordSales = allSales.filter(s => s.isRecord);

  // Get global ranking for this artist's top sale
  const globalRank = await prisma.auctionSale.count({
    where: {
      priceUsd: { gt: highestSale.priceUsd }
    }
  }) + 1;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Auction Records", href: "/auction-records" },
    { name: "By Artist", href: "/auction-records/by-artist" },
    { name: artist.name },
  ];

  // JSON-LD for artist auction records
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${artist.name} Auction Records`,
    description: `Complete auction history for ${artist.name}. ${allSales.length} major sales totaling ${formatPrice(totalValue)}.`,
    numberOfItems: allSales.length,
    itemListElement: allSales.slice(0, 10).map((sale, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VisualArtwork",
        name: sale.artwork.title,
        creator: {
          "@type": "Person",
          name: artist.name,
          nationality: artist.nationality || undefined,
        },
        offers: {
          "@type": "Offer",
          price: Number(sale.priceUsd) / 100,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
          validFrom: sale.saleDate.toISOString(),
        },
        url: `${BASE_URL}/art/${sale.artwork.slug}`,
      },
    })),
  };

  // Person schema for the artist
  const artistSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    nationality: artist.nationality || undefined,
    birthDate: artist.birthYear?.toString(),
    deathDate: artist.deathYear?.toString(),
    url: `${BASE_URL}/artist/${artist.slug}`,
    sameAs: artist.wikipediaUrl ? [artist.wikipediaUrl] : undefined,
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artistSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/auction-records" className="hover:text-white">Auction Records</Link>
            <span className="mx-2">/</span>
            <Link href="/auction-records/by-artist" className="hover:text-white">By Artist</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{artist.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            {/* Artist Image */}
            <div className="w-24 h-24 rounded-full bg-neutral-700 overflow-hidden shrink-0 hidden md:block">
              {artist.imageUrl ? (
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-neutral-500">
                  {artist.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {decodeHtmlEntities(artist.name)}
              </h1>
              <p className="text-neutral-400">
                {artist.nationality && `${artist.nationality} · `}
                {artist.birthYear && artist.deathYear
                  ? `${artist.birthYear}–${artist.deathYear}`
                  : artist.birthYear
                  ? `Born ${artist.birthYear}`
                  : ''}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div>
                  <div className="text-3xl font-bold text-[#C9A84C]">
                    {formatPrice(highestSale.priceUsd)}
                  </div>
                  <div className="text-sm text-neutral-400">Artist Record</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    #{globalRank}
                  </div>
                  <div className="text-sm text-neutral-400">Global Rank</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    {allSales.length}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {allSales.length === 1 ? 'Major Sale' : 'Major Sales'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    {formatPrice(totalValue)}
                  </div>
                  <div className="text-sm text-neutral-400">Total Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-4 py-12">
        {/* Record Banner */}
        {recordSales.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <p className="text-amber-800">
              <strong>{recordSales.length} record-breaking {recordSales.length === 1 ? 'sale' : 'sales'}</strong>
              {' '}&ndash; {recordSales.length === 1 ? 'This work' : 'These works'} set auction records when sold.
            </p>
          </div>
        )}

        {/* Sales List */}
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          Auction History
        </h2>

        <div className="space-y-4">
          {allSales.map((sale, index) => (
            <article
              key={sale.id}
              className={`bg-white rounded-xl border overflow-hidden ${
                index === 0 ? 'border-[#C9A84C]/50 ring-1 ring-[#C9A84C]/20' : 'border-neutral-200'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Rank */}
                <div className={`flex items-center justify-center md:w-16 py-3 md:py-0 ${
                  index === 0 ? 'bg-[#C9A84C] text-white' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  <span className="text-xl font-bold">#{index + 1}</span>
                </div>

                {/* Image */}
                {sale.artwork.imageUrl && (
                  <div className="md:w-32 h-32 md:h-auto shrink-0 bg-neutral-100">
                    <Link href={`/art/${sale.artwork.slug}`}>
                      <Image
                        src={sale.artwork.imageUrl}
                        alt={sale.artwork.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </Link>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <Link
                        href={`/art/${sale.artwork.slug}`}
                        className="text-lg font-bold text-neutral-900 hover:text-[#C9A84C] transition-colors"
                      >
                        {decodeHtmlEntities(sale.artwork.title)}
                      </Link>
                      {sale.artwork.year && (
                        <span className="text-neutral-500 ml-2">({sale.artwork.year})</span>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {sale.isRecord && (
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                            Record Sale
                          </span>
                        )}
                        {index === 0 && (
                          <span className="bg-[#C9A84C]/10 text-[#C9A84C] px-2 py-0.5 rounded-full text-xs font-medium">
                            Artist Record
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-[#C9A84C]">
                        {formatPrice(sale.priceUsd)}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {formatFullPrice(sale.priceUsd)}
                      </div>
                    </div>
                  </div>

                  {/* Sale Details */}
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600">
                    <span>
                      {sale.saleDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                    {sale.auctionHouse && (
                      <span>{sale.auctionHouse}</span>
                    )}
                    {sale.saleLocation && (
                      <span>{sale.saleLocation}</span>
                    )}
                  </div>

                  {/* Notes */}
                  {sale.notes && (
                    <p className="mt-3 text-sm text-neutral-600">
                      {sale.notes}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Artist Bio */}
        {artist.bioShort && (
          <section className="mt-12 bg-white rounded-xl border border-neutral-200 p-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-3">
              About {artist.name}
            </h2>
            <p className="text-neutral-600">{artist.bioShort}</p>
            <Link
              href={`/artist/${artist.slug}`}
              className="text-[#C9A84C] hover:underline text-sm mt-3 inline-block"
            >
              View all artworks by {artist.name} →
            </Link>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/auction-records/by-artist"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← All Artists
          </Link>
          <Link
            href="/auction-records/most-expensive"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Global Rankings →
          </Link>
        </div>
      </div>
    </div>
  );
}
