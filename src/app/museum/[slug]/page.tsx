import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { museumMetaTitle, museumMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";

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

// Cached data fetching to avoid duplicate queries between generateMetadata and page component
const getMuseum = cache(async (slug: string) => {
  return prisma.museum.findUnique({
    where: { slug },
    include: {
      Artwork: {
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
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
  const museum = await getMuseum(slug);

  if (!museum) return { title: "Museum Not Found" };

  // Get top works and artists for keyword-rich meta
  const topWorks = museum.Artwork.slice(0, 2).map(a => a.title);
  const topArtists = [...new Set(museum.Artwork.filter(a => a.Artist).map(a => a.Artist!.name))].slice(0, 2);

  // Keyword-focused with character limits (60 title, 160 description)
  const title = museumMetaTitle(museum.name, museum.Artwork.length);
  const description = museumMetaDescription(museum.name, museum.city, museum.Artwork.length, topArtists, topWorks);

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

export default async function MuseumPage({ params }: Props) {
  const { slug } = await params;

  const rawMuseum = await getMuseum(slug);

  if (!rawMuseum) notFound();

  // Map artworks to lowercase property names for ArtworkCard component
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

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            unoptimized={museum.imageUrl.includes('wikimedia.org') || museum.imageUrl.includes('wikiart.org')}
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
                  <strong>{museum.artworks.length} {museum.artworks.length === 1 ? "masterpiece" : "masterpieces"}</strong> in our database
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Visiting Info */}
            <div className="bg-amber-50 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                Visitor Information
              </h2>

              {museum.address && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-neutral-700 mb-1">
                    Museum Address
                  </h3>
                  <p className="text-neutral-600">{museum.address}</p>
                  <p className="text-neutral-600">
                    {museum.city}, {museum.country}
                  </p>
                </div>
              )}

              {museum.ticketPriceRange && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-neutral-700 mb-1">
                    Ticket Prices
                  </h3>
                  <p className="text-neutral-600">{museum.ticketPriceRange}</p>
                </div>
              )}

              <div className="flex flex-col gap-2 mt-4">
                {museum.websiteUrl && (
                  <a
                    href={museum.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] hover:underline"
                  >
                    Official Website →
                  </a>
                )}
                {museum.ticketUrl && (
                  <a
                    href={museum.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C9A84C] text-black text-center px-4 py-2 rounded-lg hover:bg-[#b8973f] transition-colors"
                  >
                    Buy Tickets
                  </a>
                )}
              </div>
            </div>

            {/* Artists at this Museum */}
            {artists.length > 0 && (
              <div className="bg-neutral-50 rounded-xl p-6">
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
                        className="flex justify-between items-center text-neutral-700 hover:text-[#C9A84C] transition-colors"
                      >
                        <span>{artist.name}</span>
                        <span className="text-sm text-neutral-400">
                          {artist._count.artworks} {artist._count.artworks === 1 ? "work" : "works"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Masterpieces */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                Famous Paintings at {museum.name}
              </h2>
              <p className="text-neutral-500 mb-6">
                {museum.artworks.length > 0
                  ? `Browse ${museum.artworks.length} notable ${museum.artworks.length === 1 ? "artwork" : "artworks"} in our database. Click any painting to see details and plan your visit.`
                  : "No artworks catalogued for this museum yet."}
              </p>
              {museum.artworks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {museum.artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                  ))}
                </div>
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

        {/* FAQ Section - use database FAQs if available, otherwise generate */}
        {(() => {
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
