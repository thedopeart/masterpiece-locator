import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import { eraMetaTitle, eraMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";
import {
  getEraBySlug,
  getAllEraSlugs,
  formatEraDateRange,
  getEraColorClass,
  getEraSolidColorClass,
  ERAS,
} from "@/lib/eras";

export const dynamic = 'force-dynamic'; // Revalidate every hour

// Generate static params for all eras
export async function generateStaticParams() {
  return getAllEraSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const era = getEraBySlug(slug);

  if (!era) notFound();

  // Get movement and artist counts
  const movementCount = await prisma.movement.count({
    where: {
      startYear: { gte: era.startYear, lt: era.endYear },
    },
  });

  const artistCount = await prisma.artist.count({
    where: {
      Movement: {
        some: {
          startYear: { gte: era.startYear, lt: era.endYear },
        },
      },
    },
  });

  const topMovements = await prisma.movement.findMany({
    where: {
      startYear: { gte: era.startYear, lt: era.endYear },
    },
    select: { name: true },
    orderBy: { Artist: { _count: "desc" } },
    take: 3,
  });

  const topArtists = await prisma.artist.findMany({
    where: {
      Movement: {
        some: {
          startYear: { gte: era.startYear, lt: era.endYear },
        },
      },
    },
    select: { name: true },
    orderBy: { Artwork: { _count: "desc" } },
    take: 3,
  });

  return {
    title: eraMetaTitle(era.name, movementCount, artistCount),
    description: eraMetaDescription(
      era.name,
      formatEraDateRange(era),
      movementCount,
      artistCount,
      topMovements.map((m) => m.name),
      topArtists.map((a) => a.name)
    ),
    keywords: era.keywords,
    openGraph: {
      title: `${era.name} Art: Movements, Artists & Masterpieces`,
      description: era.description,
    },
  };
}

export default async function EraPage({ params }: Props) {
  const { slug } = await params;
  const era = getEraBySlug(slug);

  if (!era) notFound();

  // Get movements in this era
  const rawMovements = await prisma.movement.findMany({
    where: {
      startYear: { gte: era.startYear, lt: era.endYear },
    },
    include: {
      Artist: {
        take: 4,
        include: {
          Artwork: {
            where: { imageUrl: { not: null } },
            take: 1,
            orderBy: { searchVolumeTier: "asc" },
          },
        },
      },
      _count: { select: { Artist: true } },
    },
    orderBy: { startYear: "asc" },
  });

  const movements = rawMovements.map((m) => ({
    ...m,
    name: decodeHtmlEntities(m.name),
    description: decodeHtmlEntities(m.description),
    artists: m.Artist.map((a) => ({
      ...a,
      name: decodeHtmlEntities(a.name),
      artworks: a.Artwork,
    })),
    _count: { artists: m._count.Artist },
  }));

  // Get top artists from this era
  const rawArtists = await prisma.artist.findMany({
    where: {
      Movement: {
        some: {
          startYear: { gte: era.startYear, lt: era.endYear },
        },
      },
    },
    include: {
      Artwork: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: "asc" },
      },
      _count: { select: { Artwork: true } },
    },
    orderBy: { Artwork: { _count: "desc" } },
    take: 12,
  });

  const artists = rawArtists.map((a) => ({
    ...a,
    name: decodeHtmlEntities(a.name),
  }));

  // Get featured artworks from this era
  const rawArtworks = await prisma.artwork.findMany({
    where: {
      year: { gte: era.startYear, lt: era.endYear },
      imageUrl: { not: null },
    },
    include: {
      Artist: { select: { name: true, slug: true } },
      Museum: { select: { name: true, city: true } },
    },
    orderBy: [{ searchVolumeTier: "asc" }, { year: "asc" }],
    take: 12,
  });

  const artworks = rawArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist
      ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) }
      : null,
    museum: a.Museum
      ? {
          ...a.Museum,
          name: decodeHtmlEntities(a.Museum.name),
          city: decodeHtmlEntities(a.Museum.city),
        }
      : null,
  }));

  // Calculate totals
  const totalArtists = await prisma.artist.count({
    where: {
      Movement: {
        some: {
          startYear: { gte: era.startYear, lt: era.endYear },
        },
      },
    },
  });

  const totalArtworks = await prisma.artwork.count({
    where: {
      year: { gte: era.startYear, lt: era.endYear },
    },
  });

  // Get adjacent eras for navigation
  const currentIndex = ERAS.findIndex((e) => e.slug === era.slug);
  const prevEra = currentIndex > 0 ? ERAS[currentIndex - 1] : null;
  const nextEra = currentIndex < ERAS.length - 1 ? ERAS[currentIndex + 1] : null;

  const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "@id": `${BASE_URL}/era/${era.slug}`,
    name: era.name,
    url: `${BASE_URL}/era/${era.slug}`,
    description: era.description,
    // Temporal coverage
    temporalCoverage: `${era.startYear}/${era.endYear}`,
    // Related movements
    ...(movements.length > 0 && {
      hasPart: movements.slice(0, 10).map((m) => ({
        "@type": "Thing",
        name: m.name,
        url: `${BASE_URL}/movement/${m.slug}`,
      })),
    }),
    // Notable artists
    ...(artists.length > 0 && {
      about: artists.slice(0, 10).map((a) => ({
        "@type": "Person",
        name: a.name,
        url: `${BASE_URL}/artist/${a.slug}`,
      })),
    }),
    // Keywords from era data
    keywords: era.keywords.join(", "),
  };

  return (
    <div className="bg-white min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link href="/movements" className="hover:text-neutral-900">
            Movements
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">{era.name}</span>
        </nav>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[65%]">
            {/* Hero Header - Clean and concise */}
            <div
              className={`bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 mb-8 relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
              <div className="relative">
                <div
                  className={`inline-flex items-center gap-2 ${getEraColorClass(era, "bg")} ${getEraColorClass(era, "text")} px-3 py-1 rounded-full text-sm font-medium mb-4`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {formatEraDateRange(era)}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {era.name}
                </h1>
                <p className="text-neutral-300 text-lg max-w-xl">
                  {era.subtitle}
                </p>
              </div>
            </div>

            {/* About This Era - Detailed content */}
            <div className="bg-neutral-50 rounded-xl p-6 mb-8 border border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">About {era.name}</h2>
              <div
                className="text-neutral-700 leading-relaxed prose prose-neutral max-w-none [&>p]:mb-4 [&>p:last-child]:mb-0 [&_a]:text-[#C9A84C] [&_a]:no-underline hover:[&_a]:underline [&_strong]:text-neutral-900 [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: era.descriptionHtml }}
              />
            </div>

            {/* Historical Context */}
            {era.historicalContext && (
              <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200/50">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What Was Happening in the World
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {era.historicalContext}
                </p>
              </div>
            )}

            {/* What to Look For */}
            {era.whatToLookFor && era.whatToLookFor.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200/50">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  What to Look For
                </h2>
                <p className="text-sm text-neutral-600 mb-4">Spotting {era.name} art in museums and galleries:</p>
                <ul className="grid gap-2">
                  {era.whatToLookFor.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-medium mt-0.5">
                        {index + 1}
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile sidebar - shown on small screens */}
            <div className="lg:hidden space-y-4 mb-8">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">
                  At a Glance
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Period</dt>
                    <dd className="text-neutral-900 font-medium">
                      {formatEraDateRange(era)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Movements</dt>
                    <dd className="text-neutral-900 font-medium">
                      {movements.length}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artists</dt>
                    <dd className="text-neutral-900 font-medium">
                      {totalArtists}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artworks</dt>
                    <dd className="text-neutral-900 font-medium">
                      {totalArtworks}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Movements Section */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {era.name} Movements
                </h2>
                <span className="text-sm text-neutral-500">
                  {movements.length} movements
                </span>
              </div>
              <div className="grid gap-4">
                {movements.map((movement) => (
                  <Link
                    key={movement.id}
                    href={`/movement/${movement.slug}`}
                    className="group bg-white border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Movement images preview */}
                      <div className="flex -space-x-3 flex-shrink-0">
                        {movement.artists.slice(0, 3).map((artist, i) =>
                          artist.artworks[0]?.imageUrl ? (
                            <div
                              key={artist.id}
                              className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-sm relative"
                              style={{ zIndex: 3 - i }}
                            >
                              <Image
                                src={artist.artworks[0].imageUrl}
                                alt={artist.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                                unoptimized
                              />
                            </div>
                          ) : null
                        )}
                        {movement._count.artists > 3 && (
                          <div
                            className="w-12 h-12 rounded-lg bg-neutral-200 border-2 border-white flex items-center justify-center text-xs font-medium text-neutral-600"
                            style={{ zIndex: 0 }}
                          >
                            +{movement._count.artists - 3}
                          </div>
                        )}
                      </div>
                      {/* Movement info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                            {movement.name}
                          </h3>
                          <span className="text-xs text-neutral-400">
                            {movement.startYear}
                            {movement.endYear
                              ? ` – ${movement.endYear}`
                              : "+"}
                          </span>
                        </div>
                        {movement.description && (
                          <p className="text-sm text-neutral-600 line-clamp-2">
                            {movement.description}
                          </p>
                        )}
                        <p className="text-sm text-neutral-500 mt-2">
                          {movement._count.artists} artist
                          {movement._count.artists !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-neutral-300 group-hover:text-[#C9A84C] transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Artists Section */}
            {artists.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    {era.name} Artists
                  </h2>
                  <span className="text-sm text-neutral-500">
                    {totalArtists} total
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artists.map((artist) => (
                    <Link
                      key={artist.id}
                      href={`/artist/${artist.slug}`}
                      className="group bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 hover:shadow-sm transition-all text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-neutral-100 mx-auto mb-3 overflow-hidden relative ring-2 ring-white shadow-sm">
                        {artist.imageUrl ? (
                          <Image
                            src={artist.imageUrl}
                            alt={artist.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                            unoptimized
                          />
                        ) : artist.Artwork[0]?.imageUrl ? (
                          <Image
                            src={artist.Artwork[0].imageUrl}
                            alt={artist.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xl font-medium text-neutral-400 bg-gradient-to-br from-neutral-100 to-neutral-200">
                            {artist.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors text-sm">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        {artist._count.Artwork} work
                        {artist._count.Artwork !== 1 ? "s" : ""}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  At a Glance
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Period</dt>
                    <dd className="text-neutral-900 font-medium">
                      {formatEraDateRange(era)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Movements</dt>
                    <dd className="text-neutral-900 font-medium">
                      {movements.length}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artists</dt>
                    <dd className="text-neutral-900 font-medium">
                      {totalArtists}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artworks</dt>
                    <dd className="text-neutral-900 font-medium">
                      {totalArtworks}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Key Characteristics */}
              <div
                className={`${getEraColorClass(era, "bg")} rounded-xl p-5 border ${getEraColorClass(era, "border")}`}
              >
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Defining Features
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {era.characteristics.map((char) => (
                    <li key={char} className="flex items-start gap-2">
                      <svg
                        className={`w-4 h-4 ${getEraColorClass(era, "text")} mt-0.5 flex-shrink-0`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Era Navigation */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Browse Eras
                </h3>
                <div className="space-y-2">
                  {ERAS.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/era/${e.slug}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        e.slug === era.slug
                          ? `${getEraColorClass(e, "bg")} ${getEraColorClass(e, "text")} font-medium`
                          : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${getEraSolidColorClass(e)}`}
                      />
                      <span className="flex-1">{e.shortName}</span>
                      <span className="text-xs text-neutral-400">
                        {e.slug === "medieval"
                          ? "< 1400"
                          : e.slug === "contemporary"
                            ? "1970+"
                            : e.startYear}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Era Navigation Arrows */}
              <div className="flex gap-2">
                {prevEra ? (
                  <Link
                    href={`/era/${prevEra.slug}`}
                    className="flex-1 bg-neutral-100 rounded-lg p-3 text-center hover:bg-neutral-200 transition-colors"
                  >
                    <span className="text-xs text-neutral-500">Previous</span>
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {prevEra.shortName}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextEra ? (
                  <Link
                    href={`/era/${nextEra.slug}`}
                    className="flex-1 bg-neutral-100 rounded-lg p-3 text-center hover:bg-neutral-200 transition-colors"
                  >
                    <span className="text-xs text-neutral-500">Next</span>
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {nextEra.shortName}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Full-width Masterpieces Section */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900">
              {era.name} Masterpieces
            </h2>
            <span className="text-sm text-neutral-500">
              {artworks.length} featured works
            </span>
          </div>
          {artworks.length > 0 ? (
            <div className="masonry-grid">
              {artworks.map((artwork, index) => (
                <MasonryArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  priority={index < 6}
                />
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 rounded-xl p-12 text-center border border-neutral-200">
              <div className="text-4xl mb-3">🎨</div>
              <p className="text-neutral-600 font-medium">
                No artworks catalogued yet
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                Check back soon for {era.name} masterpieces
              </p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        {era.faqs.length > 0 && (
          <section className="mt-12 border-t border-neutral-200 pt-8">
            <FAQSchema items={era.faqs} />
            <FAQ items={era.faqs} title={`About ${era.name}`} />
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Bring {era.name} Home
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              <span className="text-white">Luxury art prints</span> inspired by these iconic masterpieces. Museum-quality canvas for your walls.
            </p>
            <a
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Shop {era.name} Art
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
