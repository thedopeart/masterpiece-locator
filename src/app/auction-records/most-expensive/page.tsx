import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/text";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PriceComparisonModule from "@/components/PriceComparison";

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export const metadata: Metadata = {
  title: "Most Expensive Paintings Ever Sold (2026 Updated List)",
  description: "Complete list of the most expensive paintings ever sold at auction. #1 Salvator Mundi at $450M, Shot Sage Blue Marilyn at $195M, and more. Updated January 2026.",
  keywords: "most expensive paintings, expensive art, art auction records, Salvator Mundi price, most valuable paintings",
  openGraph: {
    title: "Most Expensive Paintings Ever Sold (2026 Updated List)",
    description: "Complete list of the most expensive paintings ever sold at auction. #1 Salvator Mundi at $450M. Updated January 2026.",
    type: "article",
    url: `${BASE_URL}/auction-records/most-expensive`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Expensive Paintings Ever Sold (2026 Updated List)",
    description: "Complete list of the most expensive paintings ever sold at auction. #1 Salvator Mundi at $450M.",
  },
  alternates: {
    canonical: `${BASE_URL}/auction-records/most-expensive`,
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

function formatFullPrice(cents: bigint): string {
  const dollars = Number(cents) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(dollars);
}

export default async function MostExpensivePage() {
  // Get all auction sales ordered by price
  const allSales = await prisma.auctionSale.findMany({
    include: {
      Artwork: {
        include: {
          Artist: { select: { name: true, slug: true } },
          Museum: { select: { name: true, slug: true, city: true } },
        },
      },
    },
    orderBy: { priceUsd: "desc" },
  });

  // Build JSON-LD for ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Most Expensive Paintings Ever Sold",
    description: "A ranked list of the most expensive paintings ever sold at auction or through private sales.",
    numberOfItems: allSales.length,
    itemListElement: allSales.map((sale, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VisualArtwork",
        name: sale.Artwork.title,
        ...(sale.Artwork.year && { dateCreated: sale.Artwork.year }),
        creator: sale.Artwork.Artist ? {
          "@type": "Person",
          name: sale.Artwork.Artist.name,
          url: `${BASE_URL}/artist/${sale.Artwork.Artist.slug}`,
        } : undefined,
        offers: {
          "@type": "Offer",
          price: Number(sale.priceUsd) / 100,
          priceCurrency: "USD",
          availability: "https://schema.org/SoldOut",
          validFrom: sale.saleDate.toISOString(),
          seller: sale.auctionHouse ? {
            "@type": "Organization",
            name: sale.auctionHouse,
          } : undefined,
        },
        url: `${BASE_URL}/art/${sale.Artwork.slug}`,
      },
    })),
  };

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Auction Records", href: "/auction-records" },
    { name: "Most Expensive Paintings" },
  ];

  // FAQs for the page
  const faqs = [
    {
      question: "What is the most expensive painting ever sold at auction?",
      answer: `<strong>Salvator Mundi</strong> by Leonardo da Vinci sold for <strong>$450.3 million</strong> at Christie's New York on November 15, 2017. It remains the highest price ever paid for any artwork at public auction.`
    },
    {
      question: "Who owns the most expensive paintings in the world?",
      answer: `Many top-tier works are held by <strong>sovereign wealth funds</strong> and billionaire collectors. The Qatar royal family owns several Cézannes and Gauguins. Hedge fund managers like Steven Cohen and Ken Griffin have acquired major works by de Kooning and Basquiat.`
    },
    {
      question: "Why did Salvator Mundi sell for $450 million?",
      answer: `Three factors: it's the <strong>last Leonardo da Vinci</strong> in private hands, it carries the prestige of the world's most famous artist, and two Middle Eastern bidders drove up the price. Some experts question its attribution, which adds to the controversy.`
    },
    {
      question: "Which artists have the most paintings on this list?",
      answer: `<strong>Pablo Picasso</strong> dominates with multiple entries across different periods. Andy Warhol, Claude Monet, and Francis Bacon also appear frequently. Modern and contemporary artists now rival Old Masters in price.`
    },
    {
      question: "Are private sales included in this ranking?",
      answer: `Yes, we include <strong>verified private sales</strong> where reliable price information exists. However, many private transactions remain confidential, so the true ranking of expensive paintings may differ from public records.`
    },
    {
      question: "How do auction houses determine estimates?",
      answer: `Specialists analyze <strong>comparable sales</strong>, condition, provenance, and current market demand. Estimates are strategic: low estimates attract bidders, while guarantees (minimum prices) reduce seller risk. The final hammer price often exceeds estimates for trophy works.`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/auction-records" className="hover:text-white">Auction Records</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Most Expensive</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Most Expensive Paintings Ever Sold
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            The definitive ranking of the world's most valuable artworks that have changed hands at auction or through private sales.
          </p>
          <p className="text-neutral-500 text-sm mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Rankings */}
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        <div className="space-y-6">
          {allSales.map((sale, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;

            return (
              <article
                key={sale.id}
                className={`bg-white rounded-xl border overflow-hidden transition-shadow hover:shadow-lg ${
                  isTop3 ? "border-[#C9A84C]/30" : "border-neutral-200"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Rank Badge */}
                  <div
                    className={`flex items-center justify-center md:w-20 py-4 md:py-0 ${
                      rank === 1
                        ? "bg-[#C9A84C] text-white"
                        : rank === 2
                        ? "bg-neutral-300 text-neutral-700"
                        : rank === 3
                        ? "bg-amber-700 text-white"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <span className="text-3xl font-bold">#{rank}</span>
                  </div>

                  {/* Image */}
                  {sale.Artwork.imageUrl && (
                    <div className="md:w-48 h-48 md:h-auto shrink-0 bg-neutral-100">
                      <Link href={`/art/${sale.Artwork.slug}`}>
                        <Image
                          src={sale.Artwork.imageUrl}
                          alt={sale.Artwork.title}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </Link>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <Link
                          href={`/art/${sale.Artwork.slug}`}
                          className="text-xl md:text-2xl font-bold text-neutral-900 hover:text-[#C9A84C] transition-colors"
                        >
                          {decodeHtmlEntities(sale.Artwork.title)}
                        </Link>
                        {sale.Artwork.Artist && (
                          <p className="text-neutral-600 mt-1">
                            by{" "}
                            <Link
                              href={`/artist/${sale.Artwork.Artist.slug}`}
                              className="hover:text-[#C9A84C] transition-colors"
                            >
                              {decodeHtmlEntities(sale.Artwork.Artist.name)}
                            </Link>
                            {sale.Artwork.year && (
                              <span className="text-neutral-400"> ({sale.Artwork.year})</span>
                            )}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl md:text-3xl font-bold text-[#C9A84C]">
                          {formatPrice(sale.priceUsd)}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {formatFullPrice(sale.priceUsd)}
                        </div>
                      </div>
                    </div>

                    {/* Sale Details */}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{sale.saleDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                      </div>
                      {sale.auctionHouse && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span>{sale.auctionHouse}</span>
                        </div>
                      )}
                      {sale.saleLocation && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{sale.saleLocation}</span>
                        </div>
                      )}
                      {sale.isRecord && (
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                          Record Sale
                        </span>
                      )}
                    </div>

                    {/* Notes */}
                    {sale.notes && (
                      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                        {sale.notes}
                      </p>
                    )}

                    {/* Price Comparison for top 5 */}
                    {rank <= 5 && (
                      <div className="mt-4">
                        <PriceComparisonModule
                          priceUsdCents={sale.priceUsd}
                          artworkTitle={sale.Artwork.title}
                          variant="inline"
                        />
                      </div>
                    )}

                    {/* Buyer/Seller */}
                    {(sale.buyer || sale.seller) && (
                      <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                        {sale.buyer && (
                          <div>
                            <span className="text-neutral-400">Buyer:</span>{" "}
                            <span className="text-neutral-700">{sale.buyer}</span>
                          </div>
                        )}
                        {sale.seller && (
                          <div>
                            <span className="text-neutral-400">Seller:</span>{" "}
                            <span className="text-neutral-700">{sale.seller}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* SEO Content */}
        <section className="mt-16 bg-white rounded-xl border border-neutral-200 p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            About This List
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p>
              This list tracks the highest prices ever paid for paintings at public auction or through verified private sales. The art market has seen dramatic price increases since the 1980s, with records broken regularly as wealthy collectors compete for masterpieces by artists like Leonardo da Vinci, Pablo Picasso, and Andy Warhol.
            </p>
            <h3>Notable Trends</h3>
            <p>
              The 2010s saw an explosion in art prices, with Leonardo's Salvator Mundi setting the all-time record at $450.3 million in 2017. Abstract Expressionist works by de Kooning and Pollock have commanded prices over $200 million, while Pop Art by Warhol and Basquiat has reached new heights with younger collectors.
            </p>
            <h3>Private Sales vs. Auctions</h3>
            <p>
              While Christie's and Sotheby's dominate public auctions, many of the largest transactions happen privately. Works by Cézanne, Gauguin, and de Kooning have traded for hundreds of millions through private dealers, often with less public documentation of exact terms.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
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

        {/* CTA */}
        <section className="mt-12">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Own Museum-Quality Art
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              You don't need $450 million. Gallery-quality canvas prints starting at $99. From classic masterpieces to <a href="https://luxurywallart.com/collections/wall-street-art" target="_blank" rel="noopener" className="text-[#C9A84C] hover:underline">Wall Street art</a> for the office.
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
