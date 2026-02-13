import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/text";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export const metadata: Metadata = {
  title: "Art Auction Records: Most Expensive Paintings Ever Sold",
  description: "Explore auction records for the world's most valuable paintings. From Salvator Mundi at $450M to Van Gogh's masterpieces. Updated price data and sale history.",
  openGraph: {
    title: "Art Auction Records: Most Expensive Paintings Ever Sold",
    description: "Explore auction records for the world's most valuable paintings. From Salvator Mundi at $450M to Van Gogh's masterpieces.",
    type: "website",
    url: `${BASE_URL}/auction-records`,
  },
  alternates: {
    canonical: `${BASE_URL}/auction-records`,
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

export default async function AuctionRecordsPage() {
  // Get top auction sales
  const topSales = await prisma.auctionSale.findMany({
    include: {
      Artwork: {
        include: {
          Artist: { select: { name: true, slug: true } },
        },
      },
    },
    orderBy: { priceUsd: "desc" },
    take: 10,
  });

  // Get priceless valuations
  const pricelessWorks = await prisma.artworkValuation.findMany({
    where: { valuationType: { in: ["insurance", "expert"] } },
    include: {
      Artwork: {
        include: {
          Artist: { select: { name: true, slug: true } },
          Museum: { select: { name: true, slug: true } },
        },
      },
    },
    orderBy: { estimateUsd: "desc" },
    take: 10,
  });

  // Stats
  const totalSales = await prisma.auctionSale.count();
  const totalValuations = await prisma.artworkValuation.count();
  const totalValue = await prisma.auctionSale.aggregate({
    _sum: { priceUsd: true },
  });

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Auction Records" },
  ];

  // JSON-LD for auction records collection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Art Auction Records: Most Expensive Paintings Ever Sold",
    description: "Explore auction records for the world's most valuable paintings. From Salvator Mundi at $450M to Van Gogh's masterpieces. Updated price data and sale history.",
    url: `${BASE_URL}/auction-records`,
    mainEntity: {
      "@type": "ItemList",
      name: "Most Expensive Paintings Sold at Auction",
      numberOfItems: totalSales,
      itemListElement: topSales.map((sale, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VisualArtwork",
          name: sale.Artwork.title,
          creator: sale.Artwork.Artist ? {
            "@type": "Person",
            name: sale.Artwork.Artist.name,
          } : undefined,
          offers: {
            "@type": "Offer",
            price: Number(sale.priceUsd) / 100,
            priceCurrency: "USD",
            availability: "https://schema.org/SoldOut",
            validFrom: sale.saleDate.toISOString(),
          },
          url: `${BASE_URL}/art/${sale.Artwork.slug}`,
        },
      })),
    },
  };

  // Aggregate statistics schema
  const statsSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Art Auction Sales Database",
    description: `Database of ${totalSales} major art auction sales totaling ${formatPrice(totalValue._sum.priceUsd || BigInt(0))} in recorded transactions.`,
    url: `${BASE_URL}/auction-records`,
    keywords: ["art auction", "auction records", "expensive paintings", "art market", "art sales"],
  };

  // FAQs for the page
  const faqs = [
    {
      question: "What is the most expensive painting ever sold?",
      answer: `<strong>Salvator Mundi</strong> by Leonardo da Vinci holds the record at <strong>$450.3 million</strong>, sold at Christie's New York in November 2017. The buyer was later identified as Saudi Crown Prince Mohammed bin Salman, purchasing through an intermediary.`
    },
    {
      question: "What makes a painting valuable at auction?",
      answer: `Four factors drive auction prices: <strong>artist reputation</strong>, rarity of the work, condition, and <strong>provenance</strong> (ownership history). Works by blue-chip artists like Picasso, Monet, and Warhol consistently command the highest prices. Historical significance and exhibition history also matter.`
    },
    {
      question: "Why do some paintings never sell at auction?",
      answer: `Many masterpieces are <strong>legally protected as national treasures</strong> and cannot be sold. The Mona Lisa, for example, belongs to the French Republic. Museums also hold works in perpetual trust. We track <strong>insurance valuations</strong> for these priceless pieces.`
    },
    {
      question: "What are the major auction houses for art?",
      answer: `<strong>Christie's</strong> and <strong>Sotheby's</strong> dominate the high-end art market, together handling most sales over $10 million. Phillips, Bonhams, and Heritage Auctions also conduct significant sales. Regional houses like China Guardian handle important Asian art.`
    },
    {
      question: "How often are auction records broken?",
      answer: `Major records tend to cluster during economic booms. The <strong>2010s saw unprecedented growth</strong>, with the top price jumping from $106 million (2010) to $450 million (2017). Market corrections followed in 2020, though high-end works remain resilient.`
    }
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ''),
      },
    })),
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Art Auction Records
          </h1>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Explore the most expensive paintings ever sold at auction, plus valuations for priceless masterpieces held in museums worldwide.
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="text-2xl font-bold text-neutral-900">{totalSales}</span>
              <p className="text-neutral-500">Auction Sales</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-neutral-900">{totalValuations}</span>
              <p className="text-neutral-500">Valuations</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#C9A84C]">
                {formatPrice(totalValue._sum.priceUsd || BigInt(0))}
              </span>
              <p className="text-neutral-500">Total Sold</p>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/auction-records/most-expensive"
              className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors"
            >
              Top 50 Rankings
            </Link>
            <Link
              href="/auction-records/by-artist"
              className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-200 transition-colors"
            >
              Browse by Artist
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Most Expensive Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              Most Expensive Paintings Sold
            </h2>
            <Link
              href="/auction-records/most-expensive"
              className="text-[#C9A84C] hover:underline text-sm font-medium"
            >
              View full list →
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-600">#</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-600">Artwork</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-600 hidden md:table-cell">Artist</th>
                    <th className="text-right px-4 py-3 text-sm font-semibold text-neutral-600">Sale Price</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-600 hidden lg:table-cell">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {topSales.map((sale, index) => (
                    <tr
                      key={sale.id}
                      className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                    >
                      <td className="px-4 py-4 text-neutral-400 font-medium">{index + 1}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          {sale.Artwork.imageUrl && (
                            <div className="w-12 h-12 rounded overflow-hidden bg-neutral-100 shrink-0">
                              <Image
                                src={sale.Artwork.imageUrl}
                                alt={sale.Artwork.title}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            </div>
                          )}
                          <div>
                            <Link
                              href={`/art/${sale.Artwork.slug}`}
                              className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors"
                            >
                              {decodeHtmlEntities(sale.Artwork.title)}
                            </Link>
                            <p className="text-sm text-neutral-500 md:hidden">
                              {sale.Artwork.Artist?.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        {sale.Artwork.Artist && (
                          <Link
                            href={`/artist/${sale.Artwork.Artist.slug}`}
                            className="text-neutral-600 hover:text-neutral-900 transition-colors"
                          >
                            {decodeHtmlEntities(sale.Artwork.Artist.name)}
                          </Link>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className="font-bold text-neutral-900">
                          {formatPrice(sale.priceUsd)}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-neutral-500 hidden lg:table-cell">
                        {sale.saleDate.getFullYear()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Priceless Works Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Priceless Masterpieces
              </h2>
              <p className="text-neutral-600 text-sm mt-1">
                Museum treasures with estimated valuations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {pricelessWorks.map((valuation) => (
              <div
                key={valuation.id}
                className="bg-white rounded-xl border border-neutral-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {valuation.Artwork.imageUrl && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                      <Image
                        src={valuation.Artwork.imageUrl}
                        alt={valuation.Artwork.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/art/${valuation.Artwork.slug}`}
                      className="font-semibold text-neutral-900 hover:text-[#C9A84C] transition-colors block truncate"
                    >
                      {decodeHtmlEntities(valuation.Artwork.title)}
                    </Link>
                    {valuation.Artwork.Artist && (
                      <Link
                        href={`/artist/${valuation.Artwork.Artist.slug}`}
                        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      >
                        {decodeHtmlEntities(valuation.Artwork.Artist.name)}
                      </Link>
                    )}
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-bold text-[#C9A84C]">
                        {formatPrice(valuation.estimateUsd)}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {valuation.valuationType === "insurance" ? "insured value" : "estimated"}
                      </span>
                    </div>
                    {valuation.Artwork.Museum && (
                      <p className="text-xs text-neutral-500 mt-1">
                        {valuation.Artwork.Museum.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-16 prose prose-neutral max-w-none">
          <h2>Understanding Art Auction Records</h2>
          <p>
            The art market has seen record-breaking sales in recent decades, with masterpieces by Leonardo da Vinci, Pablo Picasso, and Andy Warhol commanding prices in the hundreds of millions. These sales reflect not just artistic value, but cultural significance, provenance, and collector demand.
          </p>
          <p>
            Many of the world's most valuable artworks never appear at auction. Works like the Mona Lisa, The Starry Night, and Guernica are considered national treasures and cannot be legally sold. For these masterpieces, we track insurance valuations and expert estimates to understand their worth.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-neutral-200 group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-neutral-400 shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p
                    className="text-neutral-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
