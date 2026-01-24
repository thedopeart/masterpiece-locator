import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import MuseumPracticalInfo from "@/components/MuseumPracticalInfo";
import MuseumSchema from "@/components/MuseumSchema";
import { MuseumPracticalFAQStatic } from "@/components/MuseumPracticalFAQ";
import { museumMetaTitle, museumMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";
import { getMuseumPracticalData, getHoursSummary } from "@/lib/museum-hours";

// Pagination constant
const ARTWORKS_PER_PAGE = 66;

// Generate factual FAQs - only data we actually have, no templated filler
function generateMuseumFAQs(museum: {
  name: string;
  city: string;
  country: string;
  ticketPriceRange: string | null;
  artworks: { title: string; artist: { name: string } | null }[];
}) {
  const faqs = [];

  // FAQ 1: Location - factual only
  faqs.push({
    question: `Where is ${museum.name}?`,
    answer: `<strong>${museum.city}, ${museum.country}</strong>.`,
  });

  // FAQ 2: Ticket prices - only if we have real data
  if (museum.ticketPriceRange) {
    faqs.push({
      question: `How much does ${museum.name} cost?`,
      answer: `<strong>${museum.ticketPriceRange}</strong>.`,
    });
  }

  return faqs;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Cached data fetching - now with pagination support
const getMuseum = cache(async (slug: string, page: number = 1) => {
  const museum = await prisma.museum.findUnique({
    where: { slug },
    include: {
      Artwork: {
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        orderBy: [
          { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first
          { searchVolumeTier: "asc" },
        ],
        skip: (page - 1) * ARTWORKS_PER_PAGE,
        take: ARTWORKS_PER_PAGE,
      },
    },
  });

  return museum;
});

// Get total artwork count for pagination
const getArtworkCount = cache(async (museumId: string) => {
  return prisma.artwork.count({
    where: { museumId },
  });
});

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const museum = await getMuseum(slug);

  if (!museum) return { title: "Museum Not Found" };

  // Check if we have practical data for enhanced meta
  const practicalData = getMuseumPracticalData(slug);

  // Get top works and artists for keyword-rich meta
  const topWorks = museum.Artwork.slice(0, 2).map(a => a.title);
  const topArtists = [...new Set(museum.Artwork.filter(a => a.Artist).map(a => a.Artist!.name))].slice(0, 2);

  // Enhanced title with hours info if available
  const title = practicalData
    ? `${museum.name} Hours, Tickets & Visitor Guide | Masterpiece Finder`
    : museumMetaTitle(museum.name, museum.Artwork.length);

  // Enhanced description with hours and prices if available
  const description = practicalData
    ? `Plan your visit to ${museum.name}. ${getHoursSummary(practicalData.hours)}. Admission: ${practicalData.admission.adult === 0 ? 'Free' : `${practicalData.admission.currency === 'USD' ? '$' : practicalData.admission.currency === 'GBP' ? '£' : '€'}${practicalData.admission.adult}`}. Plus insider tips and must-see masterpieces.`
    : museumMetaDescription(museum.name, museum.city, museum.Artwork.length, topArtists, topWorks);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/museum/${slug}`,
      images: museum.imageUrl
        ? [
            {
              url: museum.imageUrl,
              width: 1200,
              height: 630,
              alt: `${museum.name} in ${museum.city}`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: museum.imageUrl ? [museum.imageUrl] : [],
    },
  };
}

export default async function MuseumPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  const rawMuseum = await getMuseum(slug, currentPage);

  if (!rawMuseum) notFound();

  // Get total artwork count for pagination
  const totalArtworks = await getArtworkCount(rawMuseum.id);
  const totalPages = Math.ceil(totalArtworks / ARTWORKS_PER_PAGE);

  // Map artworks to lowercase property names for MasonryArtworkCard component
  // Also decode HTML entities for display
  const museum = {
    ...rawMuseum,
    name: decodeHtmlEntities(rawMuseum.name),
    city: decodeHtmlEntities(rawMuseum.city),
    country: decodeHtmlEntities(rawMuseum.country),
    address: decodeHtmlEntities(rawMuseum.address),
    description: decodeHtmlEntities(rawMuseum.description),
    artworks: rawMuseum.Artwork.map((a) => ({
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

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: museum.name,
    description: museum.description || undefined,
    image: museum.imageUrl || undefined,
    url: museum.websiteUrl || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: museum.address || undefined,
      addressLocality: museum.city,
      addressCountry: museum.country,
    },
    geo: museum.latitude && museum.longitude
      ? {
          "@type": "GeoCoordinates",
          latitude: museum.latitude,
          longitude: museum.longitude,
        }
      : undefined,
  };

  const altText = `${museum.name} museum in ${museum.city}, ${museum.country}`;

  // Get unique artists at this museum
  const rawArtists = await prisma.artist.findMany({
    where: {
      Artwork: {
        some: { museumId: museum.id },
      },
    },
    include: {
      _count: {
        select: {
          Artwork: {
            where: { museumId: museum.id },
          },
        },
      },
    },
    orderBy: {
      Artwork: { _count: "desc" },
    },
    take: 10,
  });

  // Map to lowercase for components and decode HTML entities
  const artists = rawArtists.map((a) => ({
    ...a,
    name: decodeHtmlEntities(a.name),
    _count: { artworks: a._count.Artwork },
  }));

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Museums", href: "/museums" },
    { name: museum.name },
  ];

  // Get practical data if available
  const practicalData = getMuseumPracticalData(slug);

  // Generate pagination link helper
  const getPaginationLink = (pageNum: number) => {
    return pageNum === 1 ? `/museum/${slug}` : `/museum/${slug}?page=${pageNum}`;
  };

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      {practicalData ? (
        <MuseumSchema data={practicalData} imageUrl={museum.imageUrl || undefined} />
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-neutral-900">
        {museum.imageUrl ? (
          <Image
            src={museum.imageUrl}
            alt={altText}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
            unoptimized={true}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900" />
        )}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-4 pb-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {museum.name}
            </h1>
            <p className="text-xl text-neutral-200">
              {museum.city}, {museum.country}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/museums" className="hover:text-neutral-900 hover:underline">
            Museums
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{museum.name}</span>
        </nav>

        {/* Museum Description */}
        {(() => {
          const topArtists = artists.slice(0, 3);
          const topArtworks = museum.artworks.filter(a => a.artist).slice(0, 2);

          return (
            <section className="mb-8">
              <div className="text-neutral-600 leading-relaxed space-y-3 museum-description">
                {museum.description && (
                  <div dangerouslySetInnerHTML={{ __html: museum.description }} />
                )}
                <p>
                  <strong>{museum.name}</strong> in{" "}
                  <Link href={`/city/${museum.city.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#C9A84C] hover:underline font-medium">
                    {museum.city}
                  </Link>, {museum.country} houses{" "}
                  <strong>{totalArtworks} {totalArtworks === 1 ? "masterpiece" : "masterpieces"}</strong> in our database
                  {topArtists.length > 0 && (
                    <>, including works by{" "}
                    {topArtists.map((artist, i) => (
                      <span key={artist.slug}>
                        {i > 0 && (i === topArtists.length - 1 ? " and " : ", ")}
                        <Link href={`/artist/${artist.slug}`} className="text-[#C9A84C] hover:underline font-medium">
                          {artist.name}
                        </Link>
                      </span>
                    ))}
                    {artists.length > 3 && ` and ${artists.length - 3} other artists`}
                    </>
                  )}
                  {topArtworks.length > 0 && (
                    <>. Notable works include <strong>{topArtworks[0].title}</strong>
                    {topArtworks.length > 1 && <> and <strong>{topArtworks[1].title}</strong></>}
                    </>
                  )}.
                </p>
              </div>
            </section>
          );
        })()}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - narrower, sticky */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-4">
              {/* Enhanced Practical Info (if available) or Basic Visiting Info */}
              {practicalData ? (
                <MuseumPracticalInfo data={practicalData} />
              ) : (
                <div className="space-y-4">
                  {/* Basic Ticket Button */}
                  {museum.ticketUrl && (
                    <a
                      href={museum.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#C9A84C] text-black font-semibold py-4 px-4 rounded-xl hover:bg-[#b8973f] transition-colors shadow-md"
                    >
                      Buy Tickets
                    </a>
                  )}

                  <div className="bg-amber-50 rounded-xl p-5">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                      Visitor Information
                    </h2>

                    {museum.address && (
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-neutral-700 mb-1">
                          Museum Address
                        </h3>
                        <p className="text-neutral-600 text-sm">{museum.address}</p>
                        <p className="text-neutral-600 text-sm">
                          {museum.city}, {museum.country}
                        </p>
                      </div>
                    )}

                    {museum.ticketPriceRange && (
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-neutral-700 mb-1">
                          Ticket Prices
                        </h3>
                        <p className="text-neutral-600 text-sm">{museum.ticketPriceRange}</p>
                      </div>
                    )}

                    {museum.websiteUrl && (
                      <a
                        href={museum.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C9A84C] hover:underline text-sm"
                      >
                        Official Website →
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Artists at this Museum */}
              {artists.length > 0 && (
                <div className="bg-neutral-50 rounded-xl p-5 mt-4">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                    Featured Artists
                  </h2>
                  <p className="text-sm text-neutral-500 mb-4">
                    {artists.length} artists with works on display
                  </p>
                  <ul className="space-y-2">
                    {artists.map((artist) => (
                      <li key={artist.id}>
                        <Link
                          href={`/artist/${artist.slug}`}
                          className="flex justify-between items-center text-neutral-700 hover:text-[#C9A84C] transition-colors text-sm"
                        >
                          <span className="truncate pr-2">{artist.name}</span>
                          <span className="text-xs text-neutral-400 flex-shrink-0">
                            {artist._count.artworks}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - wider */}
          <div className="lg:col-span-3">
            {/* Masterpieces */}
            <section>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-neutral-900">
                  Famous Paintings at {museum.name}
                </h2>
                {totalPages > 1 && (
                  <span className="text-sm text-neutral-500">
                    Page {currentPage} of {totalPages}
                  </span>
                )}
              </div>
              <p className="text-neutral-500 mb-6">
                {totalArtworks > 0
                  ? `Browse ${totalArtworks} notable ${totalArtworks === 1 ? "artwork" : "artworks"} in our database. Click any painting to see details and plan your visit.`
                  : "No artworks catalogued for this museum yet."}
              </p>

              {museum.artworks.length > 0 ? (
                <>
                  {/* Masonry Grid - 3 columns on desktop */}
                  <div className="masonry-grid-3col">
                    {museum.artworks.map((artwork, index) => (
                      <MasonryArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        priority={index < 8}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                      {/* Previous Button */}
                      {currentPage > 1 ? (
                        <Link
                          href={getPaginationLink(currentPage - 1)}
                          className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
                        >
                          Previous
                        </Link>
                      ) : (
                        <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">
                          Previous
                        </span>
                      )}

                      {/* Page Numbers with Smart Ellipsis */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter((pageNum) => {
                            // Always show first and last page
                            if (pageNum === 1 || pageNum === totalPages) return true;
                            // Show pages within 1 of current page
                            if (Math.abs(pageNum - currentPage) <= 1) return true;
                            return false;
                          })
                          .map((pageNum, index, arr) => {
                            const prevPage = arr[index - 1];
                            const showEllipsis = prevPage && pageNum - prevPage > 1;
                            return (
                              <span key={pageNum} className="flex items-center gap-1">
                                {showEllipsis && (
                                  <span className="px-2 text-neutral-400">...</span>
                                )}
                                <Link
                                  href={getPaginationLink(pageNum)}
                                  className={`px-3 py-2 rounded-lg transition-colors ${
                                    pageNum === currentPage
                                      ? "bg-black text-white"
                                      : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                                  }`}
                                >
                                  {pageNum}
                                </Link>
                              </span>
                            );
                          })}
                      </div>

                      {/* Next Button */}
                      {currentPage < totalPages ? (
                        <Link
                          href={getPaginationLink(currentPage + 1)}
                          className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
                        >
                          Next
                        </Link>
                      ) : (
                        <span className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-400 cursor-not-allowed">
                          Next
                        </span>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-neutral-100 rounded-lg p-8 text-center">
                  <p className="text-neutral-500">
                    Check back soon as we continue to expand our collection database.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* FAQ Section - use practical data FAQs if available, then database, then generate basic */}
        {practicalData ? (
          <MuseumPracticalFAQStatic data={practicalData} />
        ) : (() => {
          const dbFaqs = rawMuseum.faqs as { question: string; answer: string }[] | null;
          const faqs = (dbFaqs && dbFaqs.length > 0) ? dbFaqs : generateMuseumFAQs(museum);
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`Visiting ${museum.name}`} />
            </>
          ) : null;
        })()}

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Can&apos;t Make It to {museum.city}?
          </h2>
          <p className="text-neutral-400 mb-4">
            Bring museum-quality art into your home with gallery-worthy canvas prints.
          </p>
          <Link
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Browse Our Collection
          </Link>
        </section>
      </div>
    </div>
  );
}
