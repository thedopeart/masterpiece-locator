import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { getTrailData } from "@/lib/artist-trails";
import { TrailStop } from "@/types/artist-trail";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Get artist data from database
async function getArtist(slug: string) {
  return prisma.artist.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      slug: true,
      imageUrl: true,
      birthYear: true,
      deathYear: true,
    },
  });
}

// Get artworks mentioned in the trail that exist in our database
async function getTrailArtworks(paintingSlugs: string[]) {
  if (paintingSlugs.length === 0) return [];
  return prisma.artwork.findMany({
    where: { slug: { in: paintingSlugs } },
    select: {
      slug: true,
      title: true,
      imageUrl: true,
      year: true,
    },
  });
}

interface Props {
  params: Promise<{ artist: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { artist: artistSlug } = await params;
  const trail = await getTrailData(artistSlug);

  if (!trail) return { title: "Trail Not Found" };

  const title = `${trail.title} | Follow ${trail.artistName}'s Footsteps`;
  const description = `Explore ${trail.artistName}'s journey through ${trail.primaryCountries.join(", ")}. Visit ${trail.totalLocations} locations where masterpieces were created. Interactive travel guide with museums and itineraries.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/trail/${artistSlug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// Stop type badge styling
function getStopTypeBadge(type: TrailStop["type"]) {
  const styles = {
    birthplace: { bg: "bg-blue-100", text: "text-blue-700", label: "Birthplace" },
    lived: { bg: "bg-green-100", text: "text-green-700", label: "Lived & Worked" },
    worked: { bg: "bg-amber-100", text: "text-amber-700", label: "Worked" },
    death: { bg: "bg-neutral-100", text: "text-neutral-700", label: "Final Resting Place" },
  };
  return styles[type] || styles.lived;
}

export default async function TrailPage({ params }: Props) {
  const { artist: artistSlug } = await params;

  const trail = await getTrailData(artistSlug);
  if (!trail) notFound();

  const artist = await getArtist(artistSlug);

  // Get all painting slugs from the trail to fetch from database
  const allPaintingSlugs = trail.trail.flatMap((stop) =>
    stop.paintingsFromHere.map((p) => p.slug)
  );
  const artworksFromDb = await getTrailArtworks(allPaintingSlugs);
  const artworkMap = new Map(artworksFromDb.map((a) => [a.slug, a]));

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trail.title,
    description: trail.introduction,
    url: `${BASE_URL}/trail/${artistSlug}`,
    touristType: "Art Lovers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: trail.trail.map((stop, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: `${stop.place}, ${stop.country}`,
          description: stop.description,
          geo: {
            "@type": "GeoCoordinates",
            latitude: stop.coordinates.lat,
            longitude: stop.coordinates.lng,
          },
        },
      })),
    },
  };

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: trail.artistName, href: `/artist/${artistSlug}` },
    { name: "Trail" },
  ];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/artists" className="hover:text-white">Artists</Link>
            <span className="mx-2">/</span>
            <Link href={`/artist/${artistSlug}`} className="hover:text-white">{trail.artistName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Trail</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{trail.title}</h1>
              <p className="text-xl text-neutral-300 mb-6">{trail.subtitle}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{trail.totalLocations} locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{trail.totalPaintings}+ paintings</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{trail.lifespan}</span>
                </div>
              </div>
            </div>

            {/* Artist portrait if available */}
            {artist?.imageUrl && (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#C9A84C] flex-shrink-0">
                <Image
                  src={artist.imageUrl}
                  alt={trail.artistName}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="max-w-3xl mb-16">
          <p className="text-lg text-neutral-700 leading-relaxed">{trail.introduction}</p>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">The Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C] via-neutral-300 to-neutral-200" />

            <div className="space-y-12">
              {trail.trail.map((stop, index) => {
                const typeBadge = getStopTypeBadge(stop.type);
                const stopArtworks = stop.paintingsFromHere
                  .map((p) => artworkMap.get(p.slug))
                  .filter(Boolean);

                return (
                  <div key={stop.slug} id={`stop-${stop.slug}`} className="relative pl-16 md:pl-20">
                    {/* Timeline marker */}
                    <div className={`absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${stop.highlight || stop.mustVisit ? "bg-[#C9A84C]" : "bg-neutral-400"}`}>
                      {index + 1}
                    </div>

                    <div className={`bg-white border rounded-xl overflow-hidden ${stop.mustVisit ? "border-[#C9A84C] shadow-lg" : "border-neutral-200"}`}>
                      {/* Header */}
                      <div className="p-6 border-b border-neutral-100">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-neutral-900">{stop.place}, {stop.country}</h3>
                              {stop.mustVisit && (
                                <span className="bg-[#C9A84C] text-white text-xs px-2 py-1 rounded-full font-medium">Must Visit</span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className={`${typeBadge.bg} ${typeBadge.text} px-2 py-0.5 rounded`}>{typeBadge.label}</span>
                              <span className="text-neutral-500">{stop.years}</span>
                              <span className="text-neutral-400">|</span>
                              <span className="text-neutral-500">Age {stop.ageRange}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-neutral-700 mb-4">{stop.description}</p>

                        {stop.significance && (
                          <div className="bg-amber-50 border-l-4 border-[#C9A84C] p-4 mb-6">
                            <p className="text-neutral-700">
                              <strong className="text-[#C9A84C]">Why it matters:</strong> {stop.significance}
                            </p>
                          </div>
                        )}

                        {/* What to See */}
                        {stop.whatToSee.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              What to See Here
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {stop.whatToSee.map((place, i) => (
                                <div key={i} className="bg-neutral-50 rounded-lg p-4">
                                  <div className="flex items-start justify-between gap-2 mb-1">
                                    <h5 className="font-medium text-neutral-900">{place.name}</h5>
                                    <span className="text-xs bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded capitalize">{place.type}</span>
                                  </div>
                                  <p className="text-sm text-neutral-600 mb-2">{place.description}</p>
                                  {place.address && (
                                    <p className="text-xs text-neutral-500 mb-2">{place.address}</p>
                                  )}
                                  {place.note && (
                                    <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">{place.note}</p>
                                  )}
                                  {place.ticketUrl && (
                                    <a
                                      href={place.ticketUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-[#C9A84C] hover:underline mt-2 inline-block"
                                    >
                                      Get tickets →
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Paintings Created Here */}
                        {stop.paintingsFromHere.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Masterpieces Created Here
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {stop.paintingsFromHere.map((painting) => {
                                const dbArtwork = artworkMap.get(painting.slug);
                                return (
                                  <Link
                                    key={painting.slug}
                                    href={`/art/${painting.slug}`}
                                    className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-lg p-2 hover:border-[#C9A84C] transition-colors"
                                  >
                                    {dbArtwork?.imageUrl && (
                                      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                                        <Image
                                          src={dbArtwork.imageUrl}
                                          alt={painting.title}
                                          width={48}
                                          height={48}
                                          className="object-cover w-full h-full"
                                          unoptimized
                                        />
                                      </div>
                                    )}
                                    <div>
                                      <span className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                                        {painting.title}
                                      </span>
                                      <span className="text-xs text-neutral-500 block">{painting.year}</span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Note about artworks */}
                        {stop.artworksNote && (
                          <p className="text-sm text-neutral-500 italic mt-4">{stop.artworksNote}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Suggested Itineraries */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Suggested Itineraries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trail.suggestedItineraries.map((itinerary) => (
              <div
                key={itinerary.name}
                className={`rounded-xl p-6 ${itinerary.highlight ? "bg-[#C9A84C] text-white" : "bg-neutral-100"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-bold ${itinerary.highlight ? "text-white" : "text-neutral-900"}`}>
                    {itinerary.name}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded ${itinerary.highlight ? "bg-white/20" : "bg-white"}`}>
                    {itinerary.duration}
                  </span>
                </div>
                <p className={`text-sm ${itinerary.highlight ? "text-white/90" : "text-neutral-600"}`}>
                  {itinerary.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {itinerary.stops.map((stopSlug) => {
                    const stop = trail.trail.find((s) => s.slug === stopSlug);
                    return stop ? (
                      <a
                        key={stopSlug}
                        href={`#stop-${stopSlug}`}
                        className={`text-xs px-2 py-1 rounded ${itinerary.highlight ? "bg-white/20 hover:bg-white/30" : "bg-white hover:bg-neutral-200"} transition-colors`}
                      >
                        {stop.place}
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to See Works Today */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">{trail.currentLocations.title}</h2>
          <p className="text-neutral-600 mb-6">{trail.currentLocations.description}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trail.currentLocations.topMuseums.map((museum) => (
              <Link
                key={museum.slug}
                href={`/museum/${museum.slug}`}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                      {museum.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{museum.city}, {museum.country}</p>
                  </div>
                  <div className="bg-[#C9A84C] text-white text-sm font-bold px-3 py-1 rounded-full">
                    {museum.count}
                  </div>
                </div>
                {museum.note && (
                  <p className="text-sm text-neutral-600 mb-3">{museum.note}</p>
                )}
                <div className="flex flex-wrap gap-1">
                  {museum.highlights.slice(0, 3).map((slug) => (
                    <span key={slug} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                      {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Life Timeline</h2>
          <div className="bg-neutral-50 rounded-xl p-6">
            <div className="space-y-4">
              {trail.timeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 flex-shrink-0 font-bold text-[#C9A84C]">{event.year}</div>
                  <div className="flex-1 text-neutral-700">{event.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Bring {trail.artistName}&apos;s Art Home
          </h2>
          <p className="text-neutral-400 mb-6">
            Can&apos;t make the trip? Explore wall art inspired by {trail.artistName}&apos;s masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/artist/${artistSlug}`}
              className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-neutral-100 transition-colors"
            >
              View All Artworks
            </Link>
            <a
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Shop Wall Art
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
