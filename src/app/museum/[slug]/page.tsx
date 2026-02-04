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
import { getMuseumPracticalData, getHoursSummary, isMuseumOpenNow } from "@/lib/museum-hours";
import GalleryLightbox from "@/components/GalleryLightbox";
import FeaturedArtists from "@/components/FeaturedArtists";
import AddToTripButton from "@/components/AddToTripButton";
import TicketButton from "@/components/TicketButton";

// Pagination constant
const ARTWORKS_PER_PAGE = 48;

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

const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

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
          { searchVolumeTier: "asc" }, // Most important artworks first (tier 1 = highest)
          { imageUrl: { sort: "desc", nulls: "last" } }, // Then artworks with images
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

// Get related museums in the same city
const getRelatedMuseums = cache(async (city: string, currentMuseumId: string) => {
  return prisma.museum.findMany({
    where: {
      city: city,
      id: { not: currentMuseumId },
    },
    include: {
      _count: {
        select: { Artwork: true },
      },
    },
    orderBy: {
      Artwork: { _count: "desc" },
    },
    take: 3,
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
    alternates: {
      canonical: `${BASE_URL}/museum/${slug}`,
    },
  };
}

export default async function MuseumPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));

  const rawMuseum = await getMuseum(slug, currentPage);

  if (!rawMuseum) notFound();

  // Get total artwork count for pagination and related museums
  const [totalArtworks, relatedMuseums] = await Promise.all([
    getArtworkCount(rawMuseum.id),
    getRelatedMuseums(rawMuseum.city, rawMuseum.id),
  ]);
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

  // Get unique artists at this museum, ordered by artwork count AT THIS MUSEUM
  // Using raw query because Prisma orderBy doesn't respect the where filter in _count
  const artistsAtMuseum = await prisma.$queryRaw<Array<{
    id: string;
    name: string;
    slug: string;
    artwork_count: bigint;
  }>>`
    SELECT a.id, a.name, a.slug, COUNT(aw.id) as artwork_count
    FROM "Artist" a
    JOIN "Artwork" aw ON aw."artistId" = a.id
    WHERE aw."museumId" = ${museum.id}
    GROUP BY a.id, a.name, a.slug
    ORDER BY artwork_count DESC
    LIMIT 15
  `;

  // Map to the expected format and decode HTML entities
  const artists = artistsAtMuseum.map((a) => ({
    id: a.id,
    name: decodeHtmlEntities(a.name),
    slug: a.slug,
    _count: { artworks: Number(a.artwork_count) },
  }));

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Museums", href: "/museums" },
    { name: museum.name },
  ];

  // Get practical data if available
  const practicalData = getMuseumPracticalData(slug);

  // Generate pagination link helper - scrolls to artworks section
  const getPaginationLink = (pageNum: number) => {
    return pageNum === 1 ? `/museum/${slug}#artworks` : `/museum/${slug}?page=${pageNum}#artworks`;
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
      <div className="relative h-48 sm:h-64 md:h-80 bg-neutral-900">
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

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/museums" className="hover:text-neutral-900">
            Museums
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{museum.name}</span>
        </nav>

        {/* Main Grid: Sidebar Left + Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Sidebar - narrower, sticky */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-4">
              {/* Enhanced Practical Info (if available) or Basic Visiting Info */}
              {practicalData ? (
                <MuseumPracticalInfo data={practicalData} artists={artists} slug={museum.slug} />
              ) : (
                <div className="space-y-4">
                  {/* Basic Ticket Button */}
                  <TicketButton
                    museumSlug={museum.slug}
                    directTicketUrl={museum.ticketUrl}
                    variant="museum-primary"
                  />

                  {/* Add to Trip Button */}
                  <AddToTripButton
                    museum={{
                      id: museum.id,
                      slug: museum.slug,
                      name: museum.name,
                      city: museum.city,
                      country: museum.country,
                      imageUrl: museum.imageUrl,
                      artworkCount: totalArtworks,
                    }}
                    className="w-full justify-center"
                  />

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
                        className="text-[#C9A84C] hover:opacity-80 transition-opacity text-sm"
                      >
                        Official Website →
                      </a>
                    )}
                  </div>

                  {/* Featured Artists for museums without practical data */}
                  <FeaturedArtists artists={artists} />
                </div>
              )}
            </div>
          </div>

          {/* Main Content - wider */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Quick Stats Bar - Shows actual museum numbers when available */}
            {practicalData && (
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs sm:text-sm">
                {/* Open/Closed Status */}
                {(() => {
                  const openStatus = isMuseumOpenNow(practicalData.hours);
                  return (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${openStatus.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {openStatus.isOpen ? 'Open' : 'Closed'}
                      {openStatus.nextChange && <span className="text-xs opacity-75">· {openStatus.nextChange}</span>}
                    </span>
                  );
                })()}
                <span className="text-neutral-400">|</span>
                {/* Show actual museum collection numbers if available */}
                {practicalData.collectionStats ? (
                  <span className="text-neutral-600">
                    <strong>{practicalData.collectionStats.onDisplay.toLocaleString()}</strong> Works on Display
                  </span>
                ) : (
                  <span className="text-neutral-600"><strong>{totalArtworks.toLocaleString()}</strong> in Database</span>
                )}
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">
                  <strong>
                    {practicalData.admission.adult === 0 ? 'Free' :
                      `${practicalData.admission.currency === 'USD' ? '$' : practicalData.admission.currency === 'GBP' ? '£' : '€'}${practicalData.admission.adult}`
                    }
                  </strong> Entry
                </span>
              </div>
            )}

            {/* Museum Description */}
            {(() => {
              const topArtists = artists.slice(0, 3);
              const topArtworks = museum.artworks.filter(a => a.artist).slice(0, 2);

              return (
                <section className="mb-6">
                  {/* Rich description if available */}
                  {practicalData?.descriptionHtml ? (
                    <div
                      className="text-neutral-700 leading-relaxed prose prose-neutral max-w-none [&>p]:mb-4 [&>p:last-child]:mb-0 [&_a]:text-[#C9A84C] [&_a]:no-underline hover:[&_a]:underline [&_strong]:text-neutral-900 [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: practicalData.descriptionHtml }}
                    />
                  ) : (
                    <div className="text-neutral-600 leading-relaxed space-y-3 museum-description">
                      {museum.description && (
                        <div dangerouslySetInnerHTML={{ __html: museum.description }} />
                      )}
                      <p>
                        <strong>{museum.name}</strong> in{" "}
                        <Link href={`/city/${museum.city.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#C9A84C] hover:opacity-80 transition-opacity font-medium">
                          {museum.city}
                        </Link>, {museum.country} houses{" "}
                        <strong>{totalArtworks} {totalArtworks === 1 ? "masterpiece" : "masterpieces"}</strong> in our database
                        {topArtists.length > 0 && (
                          <>, including works by{" "}
                          {topArtists.map((artist, i) => (
                            <span key={artist.slug}>
                              {i > 0 && (i === topArtists.length - 1 ? " and " : ", ")}
                              <Link href={`/artist/${artist.slug}`} className="text-[#C9A84C] hover:opacity-80 transition-opacity font-medium">
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
                  )}
                </section>
              );
            })()}

            {/* Why Visit This Museum */}
            {practicalData?.whyVisit && practicalData.whyVisit.length > 0 && (
              <section className="mb-6 bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                <h2 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Why Visit {practicalData.shortName}
                </h2>
                <ul className="grid gap-2">
                  {practicalData.whyVisit.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {reason}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Historical Context */}
            {practicalData?.historicalContext && (
              <section className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200/50">
                <h2 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  History of {practicalData.shortName}
                </h2>
                <p className="text-neutral-700 leading-relaxed text-sm">
                  {practicalData.historicalContext}
                </p>
              </section>
            )}

            {/* Photo Gallery - Below description with lightbox */}
            {practicalData?.gallery && practicalData.gallery.length > 0 && (
              <div className="mb-6">
                <GalleryLightbox images={practicalData.gallery} />
              </div>
            )}

            {/* Masterpieces */}
            <section id="artworks" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-neutral-900">
                  Famous Works at {museum.name}
                </h2>
                {totalPages > 1 && (
                  <span className="text-sm text-neutral-500">
                    Page {currentPage} of {totalPages}
                  </span>
                )}
              </div>
              <p className="text-neutral-500 mb-6">
                {totalArtworks > 0
                  ? `Browse ${totalArtworks} notable ${totalArtworks === 1 ? "artwork" : "artworks"} in our database. Click any work to see details and plan your visit.`
                  : "No artworks catalogued for this museum yet."}
              </p>

              {museum.artworks.length > 0 ? (
                <>
                  {/* Masonry Grid - 3 columns on desktop */}
                  <div className="masonry-grid-3col">
                    {(() => {
                      // Sort artworks: Must-See items first, then by original order
                      const sortedArtworks = [...museum.artworks].sort((a, b) => {
                        const aIsMustSee = practicalData?.mustSee?.some(
                          item => a.title.toLowerCase().includes(item.name.toLowerCase()) ||
                                 item.name.toLowerCase().includes(a.title.toLowerCase())
                        ) || false;
                        const bIsMustSee = practicalData?.mustSee?.some(
                          item => b.title.toLowerCase().includes(item.name.toLowerCase()) ||
                                 item.name.toLowerCase().includes(b.title.toLowerCase())
                        ) || false;
                        if (aIsMustSee && !bIsMustSee) return -1;
                        if (!aIsMustSee && bIsMustSee) return 1;
                        return 0;
                      });

                      return sortedArtworks.map((artwork, index) => {
                        const isHighlighted = practicalData?.mustSee?.some(
                          item => artwork.title.toLowerCase().includes(item.name.toLowerCase()) ||
                                 item.name.toLowerCase().includes(artwork.title.toLowerCase())
                        ) || false;
                        return (
                          <MasonryArtworkCard
                            key={artwork.id}
                            artwork={artwork}
                            priority={index < 8}
                            highlight={isHighlighted}
                          />
                        );
                      });
                    })()}
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
        <div className="max-w-4xl mx-auto mt-8 lg:mt-0">
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
        </div>

        {/* Related Museums */}
        {relatedMuseums.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Other Museums in {museum.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedMuseums.map((relatedMuseum) => {
                const museumName = decodeHtmlEntities(relatedMuseum.name);
                const initial = museumName.charAt(0).toUpperCase();
                return (
                  <Link
                    key={relatedMuseum.id}
                    href={`/museum/${relatedMuseum.slug}`}
                    className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-32 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                      {relatedMuseum.imageUrl ? (
                        <Image
                          src={relatedMuseum.imageUrl}
                          alt={museumName}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          unoptimized={true}
                        />
                      ) : (
                        <span className="text-5xl font-bold text-white/30">{initial}</span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                        {museumName}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">
                        {relatedMuseum._count.Artwork} artworks
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Can&apos;t Make It to {museum.city}?
          </h2>
          <p className="text-neutral-400 mb-4">
            Bring <span className="text-white">luxury art</span> into your home with gallery-worthy canvas prints.
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

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-xs text-neutral-500 leading-relaxed">
            <strong className="text-neutral-600">Please note:</strong> Artwork locations and display status may change.
            Some paintings may be on loan, in restoration, or moved to different galleries within the museum.
            We recommend contacting{" "}
            {museum.websiteUrl ? (
              <a
                href={museum.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] hover:underline"
              >
                {museum.name}
              </a>
            ) : (
              museum.name
            )}{" "}
            directly to confirm specific artwork availability before your visit.
          </p>
        </div>
      </div>
    </div>
  );
}
