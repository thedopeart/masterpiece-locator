import { cache } from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ArtworkCard from "@/components/ArtworkCard";
import FAQ, { FAQSchema } from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { artworkMetaTitle, artworkMetaDescription } from "@/lib/seo";

// Generate dynamic FAQs based on artwork data
function generateArtworkFAQs(artwork: {
  title: string;
  year: number | null;
  medium: string | null;
  artist: { name: string; nationality: string | null } | null;
  museum: { name: string; city: string; country: string } | null;
}) {
  const faqs = [];
  const artistName = artwork.artist?.name || "Unknown Artist";

  // FAQ 1: Where can I see this artwork?
  if (artwork.museum) {
    faqs.push({
      question: `Where can I see ${artwork.title} in person?`,
      answer: `<strong>${artwork.title}</strong> is on permanent display at the <strong>${artwork.museum.name}</strong> in ${artwork.museum.city}, ${artwork.museum.country}. We recommend checking the museum's official website for current <strong>visiting hours</strong>, ticket prices, and any temporary closures before planning your visit. The painting may occasionally be moved for restoration or special exhibitions, so confirming its current location is always wise.`,
    });
  }

  // FAQ 2: Who painted this?
  if (artwork.artist) {
    faqs.push({
      question: `Who painted ${artwork.title}?`,
      answer: `<strong>${artwork.title}</strong> was created by <strong>${artistName}</strong>${artwork.artist.nationality ? `, a celebrated <strong>${artwork.artist.nationality}</strong> artist` : ""}. ${artistName} developed a distinctive artistic voice that influenced generations of painters. This work demonstrates the technical skill and creative vision that made ${artistName} one of the most studied artists in history.`,
    });
  }

  // FAQ 3: When was this created?
  if (artwork.year) {
    const century = Math.ceil(artwork.year / 100);
    const centurySuffix = century === 19 ? "th" : century === 20 ? "th" : century === 21 ? "st" : "th";
    faqs.push({
      question: `When was ${artwork.title} created?`,
      answer: `${artistName} created <strong>${artwork.title}</strong> in <strong>${artwork.year}</strong>, during the ${century}${centurySuffix} century. Understanding when a work was made reveals the historical context, artistic movements, and personal circumstances that shaped its creation. This period in ${artistName}'s career was marked by significant artistic development and experimentation.`,
    });
  }

  // FAQ 4: What medium/technique?
  if (artwork.medium) {
    faqs.push({
      question: `What technique did ${artistName} use for ${artwork.title}?`,
      answer: `<strong>${artwork.title}</strong> is <strong>${artwork.medium}</strong>. ${artistName} chose this medium deliberately to achieve specific visual effects, whether capturing luminous light, rich texture, or subtle color gradations. The physical properties of the materials contribute to the work's appearance and have influenced how well it has survived over the centuries.`,
    });
  }

  // FAQ 5: Why is this artwork famous?
  faqs.push({
    question: `Why is ${artwork.title} famous?`,
    answer: `<strong>${artwork.title}</strong> by <strong>${artistName}</strong> has achieved lasting fame for its artistic mastery and cultural significance. The painting showcases technical excellence in composition, color, and execution that art historians continue to study and admire. It draws visitors${artwork.museum ? ` to <strong>${artwork.museum.name}</strong>` : ""} from around the world and has been reproduced countless times in books, prints, and digital media, cementing its place in the public imagination.`,
  });

  return faqs;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://masterpiece-locator.vercel.app";

// Cached data fetching to avoid duplicate queries between generateMetadata and page component
const getArtwork = cache(async (slug: string) => {
  return prisma.artwork.findUnique({
    where: { slug },
    include: {
      Artist: {
        include: {
          Movement: { select: { name: true, slug: true } },
        },
      },
      Museum: true,
    },
  });
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rawArtwork = await getArtwork(slug);

  if (!rawArtwork) return { title: "Artwork Not Found" };

  // Map to lowercase for consistency
  const artwork = {
    ...rawArtwork,
    artist: rawArtwork.Artist,
    museum: rawArtwork.Museum,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const museumName = artwork.museum?.name || null;
  const city = artwork.museum?.city || null;

  // Keyword-focused with character limits (60 title, 160 description)
  const title = artworkMetaTitle(artwork.title, museumName);
  const description = artworkMetaDescription(artwork.title, artistName, museumName, city);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/art/${slug}`,
      images: artwork.imageUrl
        ? [
            {
              url: artwork.imageUrl,
              width: 1200,
              height: 630,
              alt: `${artwork.title} by ${artistName}`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: artwork.imageUrl ? [artwork.imageUrl] : [],
    },
  };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;

  const rawArtwork = await getArtwork(slug);

  if (!rawArtwork) notFound();

  // Map to lowercase property names for consistency
  const artwork = {
    ...rawArtwork,
    artist: rawArtwork.Artist ? {
      ...rawArtwork.Artist,
      movements: rawArtwork.Artist.Movement,
    } : null,
    museum: rawArtwork.Museum,
  };

  // Get other artworks at this museum (prefer those with images)
  const rawNearbyArtworks = artwork.museumId
    ? await prisma.artwork.findMany({
        where: {
          museumId: artwork.museumId,
          id: { not: artwork.id },
          imageUrl: { not: null }, // Only show artworks with images
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        take: 4,
      })
    : [];

  // Get other artworks by this artist (prefer those with images)
  const rawMoreByArtist = artwork.artistId
    ? await prisma.artwork.findMany({
        where: {
          artistId: artwork.artistId,
          id: { not: artwork.id },
          imageUrl: { not: null }, // Only show artworks with images
        },
        include: {
          Artist: { select: { name: true } },
          Museum: { select: { name: true, city: true } },
        },
        take: 4,
      })
    : [];

  // Map to lowercase property names for ArtworkCard component
  const nearbyArtworks = rawNearbyArtworks.map((a) => ({
    ...a,
    artist: a.Artist,
    museum: a.Museum,
  }));
  const moreByArtist = rawMoreByArtist.map((a) => ({
    ...a,
    artist: a.Artist,
    museum: a.Museum,
  }));

  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description || undefined,
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium || undefined,
    ...(artwork.dimensions && {
      width: { "@type": "Distance", name: artwork.dimensions.split("x")[0]?.trim() },
      height: { "@type": "Distance", name: artwork.dimensions.split("x")[1]?.trim() },
    }),
    image: artwork.imageUrl || undefined,
    creator: artwork.artist
      ? {
          "@type": "Person",
          name: artwork.artist.name,
          birthDate: artwork.artist.birthYear?.toString(),
          deathDate: artwork.artist.deathYear?.toString(),
          nationality: artwork.artist.nationality || undefined,
        }
      : undefined,
    contentLocation: artwork.museum
      ? {
          "@type": "Museum",
          name: artwork.museum.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: artwork.museum.address || undefined,
            addressLocality: artwork.museum.city,
            addressCountry: artwork.museum.country,
          },
          ...(artwork.museum.latitude && artwork.museum.longitude && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: artwork.museum.latitude,
              longitude: artwork.museum.longitude,
            },
          }),
          url: artwork.museum.websiteUrl || undefined,
        }
      : undefined,
    sameAs: artwork.wikipediaUrl ? [artwork.wikipediaUrl] : undefined,
  };

  const artistName = artwork.artist?.name || "Unknown Artist";
  const altText = `${artwork.title} by ${artistName}${artwork.year ? ` (${artwork.year})` : ""}${artwork.medium ? `, ${artwork.medium}` : ""}${artwork.museum ? ` at ${artwork.museum.name}` : ""}`;

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...(artwork.artist ? [{ name: artwork.artist.name, href: `/artist/${artwork.artist.slug}` }] : []),
    { name: artwork.title },
  ];

  return (
    <div className="bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          {artwork.artist && (
            <>
              <Link
                href={`/artist/${artwork.artist.slug}`}
                className="hover:text-neutral-900 hover:underline"
              >
                {artwork.artist.name}
              </Link>
              <span className="mx-2 text-neutral-400">/</span>
            </>
          )}
          <span className="font-medium text-neutral-900">{artwork.title}</span>
        </nav>

        {/* Hero Image */}
        {artwork.imageUrl ? (
          <div className="mb-8">
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100">
              <Image
                src={artwork.imageUrl}
                alt={altText}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                unoptimized={artwork.imageUrl.includes('wikimedia.org')}
              />
            </div>
            {artwork.imageAttribution && (
              <p className="text-sm text-neutral-500 mt-2 text-center">
                {artwork.imageAttribution}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg p-12 text-center border border-neutral-300">
            <div className="text-7xl font-light text-neutral-300 mb-4">
              {artwork.title.charAt(0)}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-3">
              <span className="text-neutral-600 font-medium">© Copyrighted Artwork</span>
            </div>
            <p className="text-neutral-500 text-sm max-w-md mx-auto">
              This artwork is protected by copyright. We cannot display images of works by artists who passed away after 1954.
            </p>
            {artwork.museum && (
              <p className="text-neutral-600 text-sm mt-4 font-medium">
                See the original at {artwork.museum.name} in {artwork.museum.city}
              </p>
            )}
          </div>
        )}

        {/* Title & Basic Info */}
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            {artwork.title}
          </h1>
          <p className="text-xl text-neutral-600">
            by{" "}
            {artwork.artist ? (
              <Link href={`/artist/${artwork.artist.slug}`} className="hover:text-[#C9A84C] transition-colors">
                {artwork.artist.name}
              </Link>
            ) : (
              "Unknown Artist"
            )}
            {artwork.year && <>, {artwork.year}</>}
          </p>
          {/* Movement badges */}
          {artwork.artist?.movements && artwork.artist.movements.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {artwork.artist.movements.map((movement) => (
                <Link
                  key={movement.slug}
                  href={`/movement/${movement.slug}`}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition-colors"
                >
                  {movement.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Artwork Description with Internal Links */}
        <section className="mb-8">
          <p className="text-neutral-600 leading-relaxed">
            {artwork.museum ? (
              <>
                <strong>{artwork.title}</strong> is one of{" "}
                {artwork.artist ? (
                  <Link href={`/artist/${artwork.artist.slug}`} className="text-[#C9A84C] hover:underline font-medium">
                    {artistName}&apos;s
                  </Link>
                ) : (
                  `${artistName}'s`
                )}{" "}
                most significant works
                {artwork.year && <>, painted in <strong>{artwork.year}</strong></>}.
                {" "}You can see this masterpiece in person at the{" "}
                <Link href={`/museum/${artwork.museum.slug}`} className="text-[#C9A84C] hover:underline font-medium">
                  {artwork.museum.name}
                </Link>{" "}
                in{" "}
                <Link href={`/city/${artwork.museum.city.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#C9A84C] hover:underline font-medium">
                  {artwork.museum.city}
                </Link>, {artwork.museum.country}.
                {artwork.medium && <> Created using {artwork.medium.toLowerCase()}, the painting</>}
                {!artwork.medium && <> This work</>} showcases the technical skill and artistic vision that made {artistName} one of art history&apos;s most celebrated figures.
              </>
            ) : (
              <>
                <strong>{artwork.title}</strong> by{" "}
                {artwork.artist ? (
                  <Link href={`/artist/${artwork.artist.slug}`} className="text-[#C9A84C] hover:underline font-medium">
                    {artistName}
                  </Link>
                ) : (
                  artistName
                )}
                {artwork.year && <>, created in <strong>{artwork.year}</strong>,</>} represents a significant achievement in the artist&apos;s body of work.
                {artwork.medium && <> This {artwork.medium.toLowerCase()} demonstrates</>}
                {!artwork.medium && <> The painting demonstrates</>} {artistName}&apos;s mastery of composition and technique.
              </>
            )}
          </p>
        </section>

        {/* Where to See It */}
        {artwork.museum && (
          <section className="bg-neutral-100 rounded-xl p-6 mb-8 border border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Visit {artwork.title} in Person
            </h2>
            <div>
              <h3 className="text-lg mb-1">
                <Link
                  href={`/museum/${artwork.museum.slug}`}
                  className="font-medium text-neutral-900 hover:text-[#C9A84C] transition-colors"
                >
                  {artwork.museum.name}
                </Link>
              </h3>
              {artwork.museum.address && (
                <p className="text-neutral-600 mt-1">{artwork.museum.address}</p>
              )}
              <p className="text-neutral-600">
                {artwork.museum.city}, {artwork.museum.country}
              </p>
              {artwork.galleryRoom && (
                <p className="mt-3 text-neutral-800 font-medium">
                  Gallery: {artwork.galleryRoom}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                {artwork.museum.websiteUrl && (
                  <a
                    href={artwork.museum.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-black transition-colors"
                  >
                    Museum Website
                  </a>
                )}
                {artwork.museum.ticketUrl && (
                  <a
                    href={artwork.museum.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
                  >
                    Buy Tickets
                  </a>
                )}
              </div>
            </div>
            {artwork.isPermanent && (
              <p className="mt-4 text-sm text-neutral-600 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Permanently housed. This work does not travel.
              </p>
            )}
          </section>
        )}

        {/* About This Work */}
        {artwork.description && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              About {artwork.title}
            </h2>
            <div className="prose max-w-none text-neutral-700 leading-relaxed">
              <p>{artwork.description}</p>
            </div>
          </section>
        )}

        {/* Historical Significance */}
        {artwork.historicalSignificance && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Historical Significance
            </h2>
            <div className="prose max-w-none text-neutral-700 leading-relaxed">
              <p>{artwork.historicalSignificance}</p>
            </div>
          </section>
        )}

        {/* Technical Details */}
        {(artwork.medium || artwork.dimensions || artwork.year) && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Artwork Details
            </h2>
            <p className="text-neutral-500 text-sm mb-4">
              Technical specifications and creation details for {artwork.title}
            </p>
            <dl className="grid grid-cols-2 gap-4 text-sm bg-neutral-50 rounded-lg p-4">
              {artwork.year && (
                <>
                  <dt className="text-neutral-500 font-medium">Year Created</dt>
                  <dd className="text-neutral-900">{artwork.year}</dd>
                </>
              )}
              {artwork.medium && (
                <>
                  <dt className="text-neutral-500 font-medium">Medium</dt>
                  <dd className="text-neutral-900">{artwork.medium}</dd>
                </>
              )}
              {artwork.dimensions && (
                <>
                  <dt className="text-neutral-500 font-medium">Dimensions</dt>
                  <dd className="text-neutral-900">{artwork.dimensions}</dd>
                </>
              )}
              {artwork.artist && (
                <>
                  <dt className="text-neutral-500 font-medium">Artist</dt>
                  <dd className="text-neutral-900">{artwork.artist.name}</dd>
                </>
              )}
            </dl>
          </section>
        )}

        {/* About the Artist */}
        {artwork.artist && (
          <section className="mb-8 border-t pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              The Artist: {artwork.artist.name}
            </h2>
            {artwork.artist.bioShort ? (
              <p className="text-neutral-700 mb-4 leading-relaxed">{artwork.artist.bioShort}</p>
            ) : (
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {artwork.artist.name} is recognized as one of the influential artists in art history.
                Their body of work continues to inspire and captivate audiences around the world.
              </p>
            )}
            <Link
              href={`/artist/${artwork.artist.slug}`}
              className="text-[#C9A84C] hover:underline font-medium"
            >
              View all works by {artwork.artist.name} →
            </Link>
          </section>
        )}

        {/* More by this Artist */}
        {moreByArtist.length > 0 && artwork.artist && (
          <section className="mb-8 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              More Paintings by {artwork.artist.name}
            </h2>
            <p className="text-neutral-500 mb-6">
              Explore other notable works by this artist displayed in museums worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moreByArtist.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        {/* Other Works at This Museum */}
        {nearbyArtworks.length > 0 && artwork.museum && (
          <section className="mb-8 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              Other Masterpieces at {artwork.museum.name}
            </h2>
            <p className="text-neutral-500 mb-6">
              While visiting, don&apos;t miss these other significant works in the same collection.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyArtworks.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {(() => {
          const faqs = generateArtworkFAQs(artwork);
          return faqs.length > 0 ? (
            <>
              <FAQSchema items={faqs} />
              <FAQ items={faqs} title={`About ${artwork.title}`} />
            </>
          ) : null;
        })()}

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-8">
          <div className="bg-black rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Own Art Like This
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Gallery-quality canvas prints with the same mood and energy. No museum crowds required.
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
