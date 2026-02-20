import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import MasonryArtworkCard from "@/components/MasonryArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import { createMetaTitle, createMetaDescription } from "@/lib/seo";
import { decodeHtmlEntities } from "@/lib/text";
import { getMovementEnrichment } from "@/lib/movementEnrichments";
import { getEraForYear, getEraSolidColorClass } from "@/lib/eras";

// Generate factual FAQs - only data we actually have, no templated filler
function generateMovementFAQs(movement: {
  name: string;
  description: string | null;
  startYear: number | null;
  endYear: number | null;
  keyCharacteristics: string[];
  artists: { name: string }[];
}) {
  const faqs = [];

  // FAQ 1: When was this movement? - factual only
  if (movement.startYear) {
    const period = movement.endYear
      ? `<strong>${movement.startYear}</strong> to <strong>${movement.endYear}</strong>`
      : `<strong>${movement.startYear}</strong> onwards`;
    faqs.push({
      question: `When was ${movement.name}?`,
      answer: period + ".",
    });
  }

  // FAQ 2: Key characteristics - only if we have real data
  if (movement.keyCharacteristics.length > 0) {
    const chars = movement.keyCharacteristics.map(c => `<strong>${c}</strong>`).join(", ");
    faqs.push({
      question: `What defines ${movement.name}?`,
      answer: chars + ".",
    });
  }

  // FAQ 3: Famous artists - factual list only
  if (movement.artists.length > 0) {
    const artistList = movement.artists.slice(0, 5).map(a => `<strong>${a.name}</strong>`).join(", ");
    faqs.push({
      question: `Who are ${movement.name} artists?`,
      answer: artistList + (movement.artists.length > 5 ? ` and ${movement.artists.length - 5} more.` : "."),
    });
  }

  return faqs;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movement = await prisma.movement.findUnique({
    where: { slug },
    include: {
      _count: { select: { Artist: true } },
    },
  });

  if (!movement) notFound();

  const years = movement.endYear
    ? `${movement.startYear}-${movement.endYear}`
    : `${movement.startYear}+`;

  return {
    title: createMetaTitle(`${movement.name} Art: ${movement._count.Artist} Artists & Famous Paintings`),
    description: createMetaDescription(
      `${movement.name} (${years}) paintings and artists. See ${movement._count.Artist} artists and where to find their masterpieces in museums worldwide.`
    ),
    alternates: {
      canonical: `https://luxurywallart.com/apps/masterpieces/movement/${slug}`,
    },
  };
}

export default async function MovementPage({ params }: Props) {
  const { slug } = await params;

  const rawMovement = await prisma.movement.findUnique({
    where: { slug },
    include: {
      Artist: {
        include: {
          Artwork: {
            where: { imageUrl: { not: null } }, // Only show artworks with images in preview
            take: 2,
            orderBy: { searchVolumeTier: "asc" },
            include: {
              Artist: { select: { name: true } },
              Museum: { select: { name: true, city: true } },
            },
          },
          _count: { select: { Artwork: true } },
        },
        orderBy: { Artwork: { _count: "desc" } },
      },
    },
  });

  if (!rawMovement) notFound();

  // Map to lowercase for components and decode HTML entities
  const movement = {
    ...rawMovement,
    name: decodeHtmlEntities(rawMovement.name),
    description: decodeHtmlEntities(rawMovement.description),
    keyCharacteristics: rawMovement.keyCharacteristics.map((c) => decodeHtmlEntities(c)),
    artists: rawMovement.Artist.map((a) => ({
      ...a,
      name: decodeHtmlEntities(a.name),
      artworks: a.Artwork.map((art) => ({
        ...art,
        title: decodeHtmlEntities(art.title),
        Artist: art.Artist ? { ...art.Artist, name: decodeHtmlEntities(art.Artist.name) } : null,
        Museum: art.Museum ? {
          ...art.Museum,
          name: decodeHtmlEntities(art.Museum.name),
          city: decodeHtmlEntities(art.Museum.city),
        } : null,
      })),
      _count: { artworks: a._count.Artwork },
    })),
  };

  // Get all artworks for this movement
  const rawArtworks = await prisma.artwork.findMany({
    where: {
      Artist: {
        Movement: { some: { id: movement.id } },
      },
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, city: true } },
    },
    orderBy: [
      { imageUrl: { sort: "desc", nulls: "last" } }, // Artworks with images first, null last
      { searchVolumeTier: "asc" },
    ],
    take: 12,
  });

  // Map to lowercase property names for ArtworkCard component
  // Also decode HTML entities for display
  const artworks = rawArtworks.map((a) => ({
    ...a,
    title: decodeHtmlEntities(a.title),
    artist: a.Artist ? { ...a.Artist, name: decodeHtmlEntities(a.Artist.name) } : null,
    museum: a.Museum ? {
      ...a.Museum,
      name: decodeHtmlEntities(a.Museum.name),
      city: decodeHtmlEntities(a.Museum.city),
    } : null,
  }));

  // Calculate total artworks across all artists
  const totalArtworks = movement.artists.reduce((sum, a) => sum + a._count.artworks, 0);

  // Get the era for this movement
  const era = movement.startYear ? getEraForYear(movement.startYear) : null;

  // Fetch related movements from the same era
  const rawRelatedMovements = movement.startYear ? await prisma.movement.findMany({
    where: {
      AND: [
        { id: { not: movement.id } },
        { startYear: { gte: era?.startYear ?? movement.startYear - 50 } },
        { startYear: { lt: era?.endYear ?? movement.startYear + 100 } },
      ],
    },
    select: {
      id: true,
      slug: true,
      name: true,
      startYear: true,
      endYear: true,
      _count: { select: { Artist: true } },
    },
    orderBy: { startYear: 'asc' },
    take: 6,
  }) : [];

  const relatedMovements = rawRelatedMovements.map(m => ({
    ...m,
    name: decodeHtmlEntities(m.name),
  }));

  const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

  // Get enrichment for the movement (for description in JSON-LD)
  const enrichment = getMovementEnrichment(movement.slug);

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "@id": `${BASE_URL}/movement/${movement.slug}`,
    name: movement.name,
    url: `${BASE_URL}/movement/${movement.slug}`,
    description: enrichment?.descriptionHtml?.replace(/<[^>]*>/g, '').substring(0, 500) || movement.description || undefined,
    // Temporal coverage
    ...(movement.startYear && {
      temporalCoverage: movement.endYear
        ? `${movement.startYear}/${movement.endYear}`
        : `${movement.startYear}/..`,
    }),
    // Notable artists in this movement
    ...(movement.artists.length > 0 && {
      about: movement.artists.slice(0, 10).map((artist) => ({
        "@type": "Person",
        name: artist.name,
        url: `${BASE_URL}/artist/${artist.slug}`,
      })),
    }),
    // Related era
    ...(era && {
      isPartOf: {
        "@type": "Thing",
        name: era.name,
        url: `${BASE_URL}/era/${era.slug}`,
      },
    }),
    // Key characteristics
    ...(movement.keyCharacteristics.length > 0 && {
      keywords: movement.keyCharacteristics.join(", "),
    }),
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
          <span className="font-medium text-neutral-900">{movement.name}</span>
        </nav>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Hero Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {movement.startYear}
                {movement.endYear ? ` – ${movement.endYear}` : " – Present"}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {movement.name}
              </h1>
              {(() => {
                const enrichment = getMovementEnrichment(movement.slug);
                if (enrichment?.descriptionHtml) {
                  return (
                    <div
                      className="text-neutral-600 text-lg leading-relaxed prose"
                      dangerouslySetInnerHTML={{ __html: enrichment.descriptionHtml }}
                    />
                  );
                }
                return movement.description ? (
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    {movement.description}
                  </p>
                ) : null;
              })()}
            </div>

            {/* What to Look For */}
            {(() => {
              const enrichment = getMovementEnrichment(movement.slug);
              if (enrichment?.whatToLookFor && enrichment.whatToLookFor.length > 0) {
                return (
                  <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200/50">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      What to Look For
                    </h2>
                    <p className="text-sm text-neutral-600 mb-4">Spotting {movement.name} art in museums and galleries:</p>
                    <ul className="grid gap-2">
                      {enrichment.whatToLookFor.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-medium mt-0.5">
                            {index + 1}
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })()}

            {/* Mobile sidebar - shown on small screens */}
            <div className="lg:hidden space-y-4 mb-8">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">At a Glance</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Period</dt>
                    <dd className="text-neutral-900 font-medium">
                      {movement.startYear}{movement.endYear ? ` – ${movement.endYear}` : "+"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artists</dt>
                    <dd className="text-neutral-900 font-medium">{movement.artists.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artworks</dt>
                    <dd className="text-neutral-900 font-medium">{totalArtworks}</dd>
                  </div>
                </dl>
              </div>

              {/* Key Characteristics - Mobile */}
              {movement.keyCharacteristics.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-3">Defining Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {movement.keyCharacteristics.map((char) => (
                      <span
                        key={char}
                        className="bg-white text-neutral-700 px-3 py-1 rounded-full text-sm border border-amber-200"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Artists Section */}
            <section className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {movement.name} Artists
                </h2>
                <span className="text-sm text-neutral-500">{movement.artists.length} artists</span>
              </div>
              <div className="grid gap-3">
                {movement.artists.map((artist) => (
                  <Link
                    key={artist.id}
                    href={`/artist/${artist.slug}`}
                    className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-neutral-100 overflow-hidden relative flex-shrink-0 ring-2 ring-white shadow-sm">
                      {artist.imageUrl ? (
                        <Image
                          src={artist.imageUrl}
                          alt={artist.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                          unoptimized={true}
                        />
                      ) : artist.artworks[0]?.imageUrl ? (
                        <Image
                          src={artist.artworks[0].imageUrl}
                          alt={artist.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                          unoptimized={true}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg font-medium text-neutral-400 bg-gradient-to-br from-neutral-100 to-neutral-200">
                          {artist.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {artist.birthYear && (
                          <>
                            {artist.birthYear}
                            {artist.deathYear ? ` – ${artist.deathYear}` : ""}
                          </>
                        )}
                        {artist.birthYear && artist._count.artworks > 0 && " · "}
                        {artist._count.artworks > 0 && (
                          <span className="text-neutral-400">
                            {artist._count.artworks} work{artist._count.artworks !== 1 ? "s" : ""}
                          </span>
                        )}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-neutral-300 group-hover:text-[#C9A84C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 space-y-6">
              {/* Quick Stats */}
              <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">At a Glance</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Period</dt>
                    <dd className="text-neutral-900 font-medium">
                      {movement.startYear}{movement.endYear ? ` – ${movement.endYear}` : "+"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artists</dt>
                    <dd className="text-neutral-900 font-medium">{movement.artists.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500">Artworks</dt>
                    <dd className="text-neutral-900 font-medium">{totalArtworks}</dd>
                  </div>
                  {movement.startYear && movement.endYear && (
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Duration</dt>
                      <dd className="text-neutral-900 font-medium">
                        {movement.endYear - movement.startYear} years
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Key Characteristics */}
              {movement.keyCharacteristics.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-3">Defining Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {movement.keyCharacteristics.map((char) => (
                      <span
                        key={char}
                        className="bg-white text-neutral-700 px-3 py-1.5 rounded-full text-sm border border-amber-200 shadow-sm"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notable Artists Preview */}
              {movement.artists.length > 0 && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-3">Notable Artists</h3>
                  <div className="flex -space-x-2 mb-3">
                    {movement.artists.slice(0, 5).map((artist, i) => (
                      <div
                        key={artist.id}
                        className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white overflow-hidden relative"
                        style={{ zIndex: 5 - i }}
                      >
                        {artist.imageUrl || artist.artworks[0]?.imageUrl ? (
                          <Image
                            src={artist.imageUrl || artist.artworks[0]?.imageUrl || ''}
                            alt={artist.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs font-medium text-neutral-400 bg-gradient-to-br from-neutral-100 to-neutral-200">
                            {artist.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    ))}
                    {movement.artists.length > 5 && (
                      <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                        +{movement.artists.length - 5}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-neutral-600">
                    {movement.artists.slice(0, 3).map(a => a.name).join(", ")}
                    {movement.artists.length > 3 && ` and ${movement.artists.length - 3} more`}
                  </p>
                </div>
              )}

              {/* Related Movements */}
              {relatedMovements.length > 0 && (
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-3">
                    Related Movements
                    {era && (
                      <Link
                        href={`/era/${era.slug}`}
                        className="ml-2 text-xs font-normal text-neutral-500 hover:text-[#C9A84C]"
                      >
                        ({era.shortName})
                      </Link>
                    )}
                  </h3>
                  <div className="space-y-2">
                    {relatedMovements.map((related) => {
                      const relatedEra = related.startYear ? getEraForYear(related.startYear) : null;
                      return (
                        <Link
                          key={related.id}
                          href={`/movement/${related.slug}`}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-neutral-100 group"
                        >
                          {relatedEra && (
                            <div className={`w-2 h-2 rounded-full ${getEraSolidColorClass(relatedEra)}`} />
                          )}
                          <span className="flex-1 text-neutral-700 group-hover:text-neutral-900">
                            {related.name}
                          </span>
                          <span className="text-xs text-neutral-400">
                            {related.startYear}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  {era && (
                    <Link
                      href={`/era/${era.slug}`}
                      className="mt-3 block text-center text-sm text-[#C9A84C] hover:underline"
                    >
                      View all {era.shortName} movements →
                    </Link>
                  )}
                </div>
              )}

            </div>
          </aside>
        </div>

        {/* Full-width Masterpieces Section */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900">
              {movement.name} Masterpieces
            </h2>
            <span className="text-sm text-neutral-500">{artworks.length} works</span>
          </div>
          {artworks.length > 0 ? (
            <div className="masonry-grid">
              {artworks.map((artwork, index) => (
                <MasonryArtworkCard key={artwork.id} artwork={artwork} priority={index < 6} />
              ))}
            </div>
          ) : (
            <div className="bg-neutral-50 rounded-xl p-12 text-center border border-neutral-200">
              <div className="text-4xl mb-3">🎨</div>
              <p className="text-neutral-600 font-medium">No artworks catalogued yet</p>
              <p className="text-neutral-500 text-sm mt-1">Check back soon for {movement.name} masterpieces</p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          {(() => {
            // Use enriched FAQs if available, otherwise generate from database
            const enrichment = getMovementEnrichment(movement.slug);
            const faqs = enrichment?.faqs || generateMovementFAQs({
              name: movement.name,
              description: movement.description,
              startYear: movement.startYear,
              endYear: movement.endYear,
              keyCharacteristics: movement.keyCharacteristics,
              artists: movement.artists.map(a => ({ name: a.name })),
            });
            return faqs.length > 0 ? (
              <>
                <FAQSchema items={faqs} />
                <FAQ items={faqs} title={`About ${movement.name}`} />
              </>
            ) : null;
          })()}
        </section>

        {/* CTA */}
        <section className="mt-12 border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Bring {movement.name} Home
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              <span className="text-white">Luxury decor</span> featuring museum-quality canvas prints inspired by these iconic masterpieces.
            </p>
            <a
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Shop {movement.name} Art
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
