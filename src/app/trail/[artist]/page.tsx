import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { getTrailData } from "@/lib/artist-trails";
import { TrailStop } from "@/types/artist-trail";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Map trail artist slugs to database artist slugs
const artistSlugMap: Record<string, string> = {
  "vincent-van-gogh": "van-gogh",
  "claude-monet": "monet",
  "pablo-picasso": "picasso",
  "frida-kahlo": "frida-kahlo",
  "salvador-dali": "salvador-dali",
  "leonardo-da-vinci": "leonardo-da-vinci",
  "rembrandt": "rembrandt",
};

// Get artist data from database
async function getArtist(trailSlug: string) {
  const dbSlug = artistSlugMap[trailSlug] || trailSlug;
  return prisma.artist.findUnique({
    where: { slug: dbSlug },
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

// Stop type badge styling with accent colors for cards
function getStopTypeBadge(type: TrailStop["type"]) {
  const styles = {
    birthplace: { bg: "bg-blue-100", text: "text-blue-700", label: "Birthplace", accent: "border-l-blue-500" },
    lived: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Lived & Worked", accent: "border-l-emerald-500" },
    worked: { bg: "bg-amber-100", text: "text-amber-700", label: "Worked", accent: "border-l-amber-500" },
    death: { bg: "bg-neutral-200", text: "text-neutral-700", label: "Final Resting Place", accent: "border-l-neutral-500" },
  };
  return styles[type] || styles.lived;
}

// What to see type icons
function getPlaceTypeIcon(type: string) {
  switch (type) {
    case "museum":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "landmark":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "trail":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "neighborhood":
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
}

export default async function TrailPage({ params }: Props) {
  const { artist: artistSlug } = await params;

  const trail = await getTrailData(artistSlug);
  if (!trail) notFound();

  const artist = await getArtist(artistSlug);
  const dbArtistSlug = artistSlugMap[artistSlug] || artistSlug;

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
    { name: trail.artistName, href: `/artist/${dbArtistSlug}` },
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
      <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl" />
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <Link href="/artists" className="hover:text-white transition-colors">Artists</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <Link href={`/artist/${dbArtistSlug}`} className="hover:text-white transition-colors">{trail.artistName}</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-[#C9A84C]">Trail</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Artist portrait if available - now on left */}
            {artist?.imageUrl && (
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#C9A84C] shadow-xl shadow-[#C9A84C]/20">
                  <Image
                    src={artist.imageUrl}
                    alt={trail.artistName}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#C9A84C]/30 scale-[1.15]" />
              </div>
            )}

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/20 rounded-full text-[#C9A84C] text-sm font-medium mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Artist Journey
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{trail.title}</h1>
              <p className="text-lg text-neutral-300 mb-5 max-w-2xl">{trail.subtitle}</p>

              {/* Stats - pill style */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">{trail.totalLocations} locations</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{trail.totalPaintings}+ paintings</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{trail.lifespan}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Introduction */}
        <section className="max-w-3xl mb-12">
          <p className="text-lg text-neutral-700 leading-relaxed">{trail.introduction}</p>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">The Journey</h2>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{trail.trail.length} stops</span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-neutral-200" />

            <div className="space-y-8">
              {trail.trail.map((stop, index) => {
                const typeBadge = getStopTypeBadge(stop.type);

                return (
                  <div key={stop.slug} id={`stop-${stop.slug}`} className="relative pl-14 md:pl-18">
                    {/* Timeline marker */}
                    <div className={`absolute left-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg ${stop.highlight || stop.mustVisit ? "bg-gradient-to-br from-[#C9A84C] to-[#b8973f]" : "bg-neutral-400"}`}>
                      {index + 1}
                    </div>

                    <div className={`bg-white border-l-4 ${typeBadge.accent} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${stop.mustVisit ? "ring-2 ring-[#C9A84C]/20" : ""}`}>
                      {/* Header */}
                      <div className="p-5 md:p-6 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-100">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h3 className="text-xl font-bold text-neutral-900">{stop.place}, {stop.country}</h3>
                              {stop.mustVisit && (
                                <span className="bg-gradient-to-r from-[#C9A84C] to-[#b8973f] text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                                  Must Visit
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm">
                              <span className={`${typeBadge.bg} ${typeBadge.text} px-2.5 py-0.5 rounded-full font-medium`}>{typeBadge.label}</span>
                              <span className="text-neutral-400">•</span>
                              <span className="text-neutral-600 font-medium">{stop.years}</span>
                              <span className="text-neutral-400">•</span>
                              <span className="text-neutral-500">Age {stop.ageRange}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6">
                        <p className="text-neutral-700 leading-relaxed mb-5">{stop.description}</p>

                        {stop.significance && (
                          <div className="bg-gradient-to-r from-amber-50 to-amber-50/50 border-l-4 border-[#C9A84C] rounded-r-lg p-4 mb-6">
                            <p className="text-neutral-700 text-sm">
                              <strong className="text-[#C9A84C] font-semibold">Why it matters:</strong> {stop.significance}
                            </p>
                          </div>
                        )}

                        {/* What to See */}
                        {stop.whatToSee.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                              <div className="p-1.5 bg-[#C9A84C]/10 rounded-lg">
                                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              What to See Here
                              <span className="text-xs text-neutral-400 font-normal">({stop.whatToSee.length} places)</span>
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {stop.whatToSee.map((place, i) => (
                                <div key={i} className="group bg-white border border-neutral-200 hover:border-[#C9A84C]/50 rounded-xl p-4 transition-all hover:shadow-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 bg-neutral-100 group-hover:bg-[#C9A84C]/10 rounded-lg text-neutral-500 group-hover:text-[#C9A84C] transition-colors">
                                      {getPlaceTypeIcon(place.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <h5 className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">{place.name}</h5>
                                        <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full capitalize flex-shrink-0">{place.type}</span>
                                      </div>
                                      <p className="text-sm text-neutral-600 mb-2">{place.description}</p>
                                      {place.address && (
                                        <p className="text-xs text-neutral-400 flex items-center gap-1 mb-2">
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                          </svg>
                                          {place.address}
                                        </p>
                                      )}
                                      {place.note && (
                                        <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-lg inline-block">{place.note}</p>
                                      )}
                                      {place.ticketUrl && (
                                        <a
                                          href={place.ticketUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-sm text-[#C9A84C] hover:text-[#b8973f] font-medium mt-2 inline-flex items-center gap-1"
                                        >
                                          Get tickets
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Paintings Created Here */}
                        {stop.paintingsFromHere.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                              <div className="p-1.5 bg-[#C9A84C]/10 rounded-lg">
                                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              Masterpieces Created Here
                              <span className="text-xs text-neutral-400 font-normal">({stop.paintingsFromHere.length} works)</span>
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {stop.paintingsFromHere.map((painting) => {
                                const dbArtwork = artworkMap.get(painting.slug);
                                return (
                                  <Link
                                    key={painting.slug}
                                    href={`/art/${painting.slug}`}
                                    className="group relative bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-[#C9A84C] hover:shadow-md transition-all"
                                  >
                                    {dbArtwork?.imageUrl ? (
                                      <div className="aspect-square relative overflow-hidden bg-neutral-100">
                                        <Image
                                          src={dbArtwork.imageUrl}
                                          alt={painting.title}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                                          unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                    ) : (
                                      <div className="aspect-square bg-neutral-100 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                      </div>
                                    )}
                                    <div className="p-3">
                                      <h5 className="text-sm font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                                        {painting.title}
                                      </h5>
                                      <p className="text-xs text-neutral-500 mt-0.5">{painting.year}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Note about artworks */}
                        {stop.artworksNote && (
                          <p className="text-sm text-neutral-500 italic mt-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {stop.artworksNote}
                          </p>
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
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">Suggested Itineraries</h2>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{trail.suggestedItineraries.length} options</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trail.suggestedItineraries.map((itinerary) => (
              <div
                key={itinerary.name}
                className={`relative rounded-2xl overflow-hidden transition-all hover:shadow-lg ${itinerary.highlight ? "bg-gradient-to-br from-[#C9A84C] to-[#a8893d] text-white shadow-lg shadow-[#C9A84C]/20" : "bg-white border border-neutral-200 hover:border-neutral-300"}`}
              >
                {/* Recommended badge */}
                {itinerary.highlight && (
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Recommended
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${itinerary.highlight ? "bg-white/20" : "bg-[#C9A84C]/10"}`}>
                    <svg className={`w-6 h-6 ${itinerary.highlight ? "text-white" : "text-[#C9A84C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className={`text-lg font-bold ${itinerary.highlight ? "text-white" : "text-neutral-900"}`}>
                      {itinerary.name}
                    </h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full flex-shrink-0 ${itinerary.highlight ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-600"}`}>
                      {itinerary.duration}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${itinerary.highlight ? "text-white/90" : "text-neutral-600"}`}>
                    {itinerary.description}
                  </p>

                  {/* Route stops */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {itinerary.stops.map((stopSlug, idx) => {
                      const stop = trail.trail.find((s) => s.slug === stopSlug);
                      return stop ? (
                        <div key={stopSlug} className="flex items-center">
                          <a
                            href={`#stop-${stopSlug}`}
                            className={`text-xs px-2.5 py-1 rounded-full transition-all ${itinerary.highlight ? "bg-white/20 hover:bg-white/30 text-white" : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"}`}
                          >
                            {stop.place}
                          </a>
                          {idx < itinerary.stops.length - 1 && (
                            <svg className={`w-4 h-4 mx-0.5 ${itinerary.highlight ? "text-white/40" : "text-neutral-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where to See Works Today */}
        <section className="mb-16">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">{trail.currentLocations.title}</h2>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{trail.currentLocations.topMuseums.length} museums</span>
          </div>
          <p className="text-neutral-600 mb-6 ml-4">{trail.currentLocations.description}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trail.currentLocations.topMuseums.map((museum, idx) => (
              <Link
                key={museum.slug}
                href={`/museum/${museum.slug}`}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-[#C9A84C] hover:shadow-lg transition-all"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/50" />

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {/* Museum icon */}
                      <div className="w-10 h-10 bg-neutral-100 group-hover:bg-[#C9A84C]/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#C9A84C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                          {museum.name}
                        </h3>
                        <p className="text-sm text-neutral-500 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {museum.city}, {museum.country}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#C9A84C] to-[#b8973f] text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {museum.count}
                    </div>
                  </div>

                  {museum.note && (
                    <p className="text-sm text-neutral-600 mb-3">{museum.note}</p>
                  )}

                  {/* Highlights as artwork tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {museum.highlights.slice(0, 3).map((slug) => (
                      <span key={slug} className="text-xs bg-neutral-100 group-hover:bg-[#C9A84C]/10 text-neutral-600 px-2 py-1 rounded-lg transition-colors">
                        {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                      </span>
                    ))}
                    {museum.highlights.length > 3 && (
                      <span className="text-xs text-neutral-400 px-1">+{museum.highlights.length - 3} more</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Life Timeline */}
        <section className="mb-16">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/30 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">Life Timeline</h2>
            </div>
            <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{trail.timeline.length} events</span>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 p-6 md:p-8">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[3.25rem] md:left-[4.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-neutral-200" />

              <div className="space-y-0">
                {trail.timeline.map((event, index) => (
                  <div key={index} className="relative flex items-start gap-4 md:gap-6 py-3 group">
                    {/* Year badge */}
                    <div className="relative z-10 w-14 md:w-18 flex-shrink-0">
                      <span className="inline-block bg-white border-2 border-[#C9A84C] text-[#C9A84C] font-bold text-sm px-2 py-1 rounded-lg shadow-sm">
                        {event.year}
                      </span>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-[3rem] md:left-[4rem] top-4 w-2.5 h-2.5 rounded-full bg-[#C9A84C] border-2 border-white shadow-sm z-10" />

                    {/* Event content */}
                    <div className="flex-1 bg-white rounded-lg p-3 border border-transparent group-hover:border-neutral-200 group-hover:shadow-sm transition-all ml-4">
                      <p className="text-neutral-700">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A84C]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="w-16 h-16 bg-[#C9A84C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Explore {trail.artistName}&apos;s Works
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              Browse our database of {trail.artistName}&apos;s paintings and discover where each masterpiece is displayed today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/artist/${dbArtistSlug}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View All Artworks
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
