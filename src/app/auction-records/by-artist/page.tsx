import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/text";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export const metadata: Metadata = {
  title: "Auction Records by Artist: Most Expensive Paintings Sold",
  description: "Browse auction records by artist. See the highest prices paid for works by Picasso, Van Gogh, Warhol, Monet, and more. Artist records and price history.",
  openGraph: {
    title: "Auction Records by Artist",
    description: "Browse auction records by artist. Highest prices for Picasso, Van Gogh, Warhol, and more.",
    type: "website",
    url: `${BASE_URL}/auction-records/by-artist`,
  },
  alternates: {
    canonical: `${BASE_URL}/auction-records/by-artist`,
  },
};

export const dynamic = 'force-dynamic';

function formatPrice(cents: bigint): string {
  const millions = Number(cents) / 100 / 1000000;
  if (millions >= 1) {
    return `$${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }
  return `$${(Number(cents) / 100).toLocaleString()}`;
}

export default async function ArtistRecordsPage() {
  // Get all artists with auction sales, aggregated
  const artistsWithSales = await prisma.artist.findMany({
    where: {
      Artwork: {
        some: {
          AuctionSale: {
            some: {}
          }
        }
      }
    },
    include: {
      Artwork: {
        where: {
          AuctionSale: {
            some: {}
          }
        },
        include: {
          AuctionSale: {
            orderBy: { priceUsd: 'desc' },
            take: 1
          }
        }
      }
    }
  });

  // Calculate stats for each artist
  const artistStats = artistsWithSales.map(artist => {
    const allSales = artist.Artwork.flatMap(a => a.AuctionSale);
    const totalValue = allSales.reduce((sum, sale) => sum + sale.priceUsd, BigInt(0));
    const highestSale = allSales.sort((a, b) => Number(b.priceUsd - a.priceUsd))[0];
    const topArtwork = artist.Artwork.find(a =>
      a.AuctionSale.some(s => s.id === highestSale?.id)
    );

    return {
      artist,
      salesCount: allSales.length,
      totalValue,
      highestSale,
      topArtwork
    };
  }).sort((a, b) => Number(b.totalValue - a.totalValue));

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Auction Records", href: "/auction-records" },
    { name: "By Artist" },
  ];

  // JSON-LD for artists list
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Artists with Auction Records",
    description: "Browse auction records by artist. See the highest prices paid for works by Picasso, Van Gogh, Warhol, Monet, and more.",
    numberOfItems: artistStats.length,
    itemListElement: artistStats.map(({ artist, highestSale }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: artist.name,
        nationality: artist.nationality || undefined,
        birthDate: artist.birthYear?.toString(),
        deathDate: artist.deathYear?.toString(),
        url: `${BASE_URL}/auction-records/by-artist/${artist.slug}`,
      },
    })),
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-neutral-500 mb-4">
            <Link href="/" className="hover:text-neutral-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/auction-records" className="hover:text-neutral-900">Auction Records</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">By Artist</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Auction Records by Artist
          </h1>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Explore the highest prices paid for works by each artist. Click any artist to see their complete auction history.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid gap-4">
          {artistStats.map(({ artist, salesCount, totalValue, highestSale, topArtwork }) => (
            <Link
              key={artist.id}
              href={`/auction-records/by-artist/${artist.slug}`}
              className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:border-neutral-300 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Artist Image */}
                <div className="w-16 h-16 rounded-full bg-neutral-100 overflow-hidden shrink-0">
                  {artist.imageUrl ? (
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-neutral-300">
                      {artist.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Artist Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                    {decodeHtmlEntities(artist.name)}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {artist.nationality && `${artist.nationality} · `}
                    {artist.birthYear && artist.deathYear
                      ? `${artist.birthYear}–${artist.deathYear}`
                      : artist.birthYear
                      ? `b. ${artist.birthYear}`
                      : ''}
                  </p>
                  {topArtwork && (
                    <p className="text-sm text-neutral-600 mt-1">
                      Record: <span className="font-medium">{topArtwork.title}</span>
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="flex gap-6 md:gap-8 shrink-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C9A84C]">
                      {formatPrice(highestSale?.priceUsd || BigInt(0))}
                    </div>
                    <div className="text-xs text-neutral-500">Top Sale</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neutral-900">
                      {salesCount}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {salesCount === 1 ? 'Sale' : 'Sales'}
                    </div>
                  </div>
                  <div className="text-center hidden sm:block">
                    <div className="text-2xl font-bold text-neutral-700">
                      {formatPrice(totalValue)}
                    </div>
                    <div className="text-xs text-neutral-500">Total</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-neutral-400 group-hover:text-[#C9A84C] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/auction-records"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Back to Auction Records
          </Link>
        </div>
      </div>
    </div>
  );
}
