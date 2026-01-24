import { prisma } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";
import {
  decodeHtmlEntities,
  isValidMuseum,
  isCountryNotCity,
  isPrivateCollection,
} from "@/lib/text";
import CitySearch from "@/components/CitySearch";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQ, { FAQSchema } from "@/components/FAQ";

// Revalidate every 60 seconds
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Art Cities | Find Museums & Famous Paintings by Location",
  description:
    "Browse art by city. Find which museums are in Paris, New York, Amsterdam, Madrid and 100+ other cities. See exactly what masterpieces you can view at each location.",
};

// Generate rich, interlinked FAQs based on actual data
function generateCitiesFAQs(stats: {
  totalCities: number;
  totalMuseums: number;
  totalArtworks: number;
  topCities: { city: string; country: string; slug: string; artworks: number; museums: number }[];
}) {
  const topCity = stats.topCities[0];
  const topCitiesList = stats.topCities.slice(0, 10);

  // Find specific cities for FAQs
  const paris = topCitiesList.find(c => c.city === "Paris");
  const london = topCitiesList.find(c => c.city === "London");
  const newYork = topCitiesList.find(c => c.city === "New York");
  const amsterdam = topCitiesList.find(c => c.city === "Amsterdam");
  const madrid = topCitiesList.find(c => c.city === "Madrid");
  const florence = topCitiesList.find(c => c.city === "Florence");

  return [
    {
      question: "Which city has the most famous artworks?",
      answer: `<strong><a href="/city/${topCity.slug}" style="color: #C9A84C;">${topCity.city}, ${topCity.country}</a></strong> leads the world with <strong>${topCity.artworks.toLocaleString()} documented masterpieces</strong> spread across ${topCity.museums} major museums. ${topCity.city === "Paris" ? `The <a href="/museum/louvre" style="color: #028161; font-weight: 600;">Louvre</a> alone holds over 380,000 objects, with roughly 35,000 on display at any time. Combined with the <a href="/museum/musee-dorsay" style="color: #028161; font-weight: 600;">Musée d'Orsay</a> and <a href="/museum/musee-de-lorangerie" style="color: #028161; font-weight: 600;">Musée de l'Orangerie</a>, Paris offers the densest concentration of Western art anywhere.` : ""}<br><br>Other top destinations include ${topCitiesList.slice(1, 5).map(c => `<strong><a href="/city/${c.slug}" style="color: #C9A84C;">${c.city}</a></strong> (${c.artworks.toLocaleString()} works across ${c.museums} museums)`).join(", ")}. Each city offers a distinct focus: ${london ? `<a href="/city/london" style="color: #C9A84C;">London</a> excels in British and global collections` : "London excels in British art"}, ${newYork ? `<a href="/city/new-york" style="color: #C9A84C;">New York</a> dominates modern and contemporary art` : "New York dominates modern art"}, and ${madrid ? `<a href="/city/madrid" style="color: #C9A84C;">Madrid</a> holds unmatched Spanish masters` : "Madrid holds Spanish masters"}.`,
    },
    {
      question: "How many cities have major art museums?",
      answer: `We've documented <strong>${stats.totalCities} cities worldwide</strong> with significant art collections, housing a combined <strong>${stats.totalMuseums} museums</strong> and <strong>${stats.totalArtworks.toLocaleString()} masterpieces</strong>. This ranges from art capitals with dozens of institutions to smaller cities with single world-class museums.<br><br><strong>Europe leads</strong> with the highest concentration of historic collections. ${paris ? `<a href="/city/paris" style="color: #C9A84C; font-weight: 600;">Paris</a> (${paris.artworks.toLocaleString()} works)` : "Paris"}, ${london ? `<a href="/city/london" style="color: #C9A84C; font-weight: 600;">London</a> (${london.artworks.toLocaleString()} works)` : "London"}, ${madrid ? `<a href="/city/madrid" style="color: #C9A84C; font-weight: 600;">Madrid</a> (${madrid.artworks.toLocaleString()} works)` : "Madrid"}, and ${amsterdam ? `<a href="/city/amsterdam" style="color: #C9A84C; font-weight: 600;">Amsterdam</a> (${amsterdam.artworks.toLocaleString()} works)` : "Amsterdam"} form the core of European art tourism.<br><br><strong>North America</strong> centers on ${newYork ? `<a href="/city/new-york" style="color: #C9A84C; font-weight: 600;">New York</a>` : "New York"}, <a href="/city/washington-d.c." style="color: #C9A84C; font-weight: 600;">Washington D.C.</a>, and <a href="/city/chicago" style="color: #C9A84C; font-weight: 600;">Chicago</a>. Smaller cities like <a href="/city/philadelphia" style="color: #C9A84C;">Philadelphia</a>, <a href="/city/boston" style="color: #C9A84C;">Boston</a>, and <a href="/city/los-angeles" style="color: #C9A84C;">Los Angeles</a> punch above their weight with focused, high-quality collections.`,
    },
    {
      question: "What's the best way to plan an art-focused trip?",
      answer: `<strong>Start by choosing your focus.</strong> Are you interested in a specific artist, movement, or period? Use our <a href="/artists" style="color: #C9A84C; font-weight: 600;">artist pages</a> or <a href="/movements" style="color: #C9A84C; font-weight: 600;">movements</a> to find where key works are located, then plan your cities around those anchors.<br><br><strong>For each city</strong>, check our city page to see every museum and their holdings. We show artwork counts, ticket prices (when available), and which specific masterpieces each museum holds. This helps you prioritize: visiting the <a href="/museum/louvre" style="color: #028161; font-weight: 600;">Louvre</a> for Renaissance and ancient art vs. the <a href="/museum/musee-dorsay" style="color: #028161; font-weight: 600;">Musée d'Orsay</a> for Impressionism requires different time allocations.<br><br><strong>Practical tips:</strong> Book popular museums weeks in advance (the Louvre, Uffizi, and Van Gogh Museum often sell out). Allow 2-4 hours per major museum. Plan one "rest day" between intensive museum days to avoid burnout. Many European museums close Mondays or Tuesdays, so check schedules before finalizing dates.`,
    },
    {
      question: "Are all artworks in these cities publicly viewable?",
      answer: `<strong>The vast majority are in public museums</strong> with regular visiting hours, but there are important exceptions to know about.<br><br><strong>Works on loan:</strong> Major paintings frequently travel for special exhibitions. A work normally at the <a href="/museum/national-gallery" style="color: #028161; font-weight: 600;">National Gallery</a> might be in Tokyo for six months. We track permanent locations, so always verify with the museum before visiting for a specific piece.<br><br><strong>Conservation and rotation:</strong> Works on paper (drawings, prints, photographs) are light-sensitive and rotate regularly. Large museums like the <a href="/museum/met" style="color: #028161; font-weight: 600;">Met</a> and <a href="/museum/british-museum" style="color: #028161; font-weight: 600;">British Museum</a> display only a fraction of their holdings at any time.<br><br><strong>Private collections:</strong> We note when masterpieces are privately held. These occasionally appear at auction houses like Christie's and Sotheby's, or in special museum exhibitions, but cannot be visited on demand.`,
    },
    {
      question: "Which European cities have the best art museums?",
      answer: `<strong>The "Big Five" for European art:</strong><br><br>${paris ? `<strong><a href="/city/paris" style="color: #C9A84C;">Paris</a></strong> (${paris.artworks.toLocaleString()} works): The <a href="/museum/louvre" style="color: #028161; font-weight: 600;">Louvre</a> for everything from ancient Egypt to 1850, <a href="/museum/musee-dorsay" style="color: #028161; font-weight: 600;">Musée d'Orsay</a> for Impressionism and Post-Impressionism, <a href="/museum/centre-pompidou" style="color: #028161; font-weight: 600;">Centre Pompidou</a> for 20th century. No other city matches this depth.<br><br>` : ""}${london ? `<strong><a href="/city/london" style="color: #C9A84C;">London</a></strong> (${london.artworks.toLocaleString()} works): <a href="/museum/national-gallery" style="color: #028161; font-weight: 600;">National Gallery</a> for European masters, <a href="/museum/british-museum" style="color: #028161; font-weight: 600;">British Museum</a> for ancient civilizations, <a href="/museum/tate-modern" style="color: #028161; font-weight: 600;">Tate Modern</a> and <a href="/museum/tate-britain" style="color: #028161; font-weight: 600;">Tate Britain</a> for British and modern art. Most are free.<br><br>` : ""}${amsterdam ? `<strong><a href="/city/amsterdam" style="color: #C9A84C;">Amsterdam</a></strong> (${amsterdam.artworks.toLocaleString()} works): <a href="/museum/rijksmuseum" style="color: #028161; font-weight: 600;">Rijksmuseum</a> for Dutch Golden Age, <a href="/museum/van-gogh-museum" style="color: #028161; font-weight: 600;">Van Gogh Museum</a> for the world's largest Van Gogh collection. Compact and walkable.<br><br>` : ""}${madrid ? `<strong><a href="/city/madrid" style="color: #C9A84C;">Madrid</a></strong> (${madrid.artworks.toLocaleString()} works): <a href="/museum/museo-del-prado" style="color: #028161; font-weight: 600;">Prado</a> holds the world's finest collection of Spanish masters: <a href="/artist/diego-velazquez" style="color: #C9A84C;">Velázquez</a>, <a href="/artist/francisco-goya" style="color: #C9A84C;">Goya</a>, <a href="/artist/el-greco" style="color: #C9A84C;">El Greco</a>. The <a href="/museum/museo-reina-sofia" style="color: #028161; font-weight: 600;">Reina Sofía</a> has Picasso's Guernica.<br><br>` : ""}${florence ? `<strong><a href="/city/florence" style="color: #C9A84C;">Florence</a></strong> (${florence.artworks.toLocaleString()} works): <a href="/museum/uffizi-gallery" style="color: #028161; font-weight: 600;">Uffizi</a> for Renaissance masters, <a href="/museum/galleria-dellaccademia" style="color: #028161; font-weight: 600;">Accademia</a> for Michelangelo's David. The birthplace of the Renaissance.` : ""}`,
    },
    {
      question: "What about art museums in the United States?",
      answer: `<strong>American museums rival European collections</strong>, especially for modern and contemporary art.<br><br>${newYork ? `<strong><a href="/city/new-york" style="color: #C9A84C;">New York</a></strong> (${newYork.artworks.toLocaleString()} works): The undisputed American art capital. The <a href="/museum/met" style="color: #028161; font-weight: 600;">Metropolitan Museum of Art</a> spans 5,000 years of global art. <a href="/museum/moma" style="color: #028161; font-weight: 600;">MoMA</a> defined modern art as a category. The <a href="/museum/guggenheim" style="color: #028161; font-weight: 600;">Guggenheim</a>, <a href="/museum/whitney-museum" style="color: #028161; font-weight: 600;">Whitney</a>, and <a href="/museum/frick-collection" style="color: #028161; font-weight: 600;">Frick Collection</a> add specialized depth.<br><br>` : ""}<strong><a href="/city/washington-d.c." style="color: #C9A84C;">Washington D.C.</a></strong>: The <a href="/museum/national-gallery-of-art" style="color: #028161; font-weight: 600;">National Gallery of Art</a> is world-class and completely free. Combined with the Smithsonian museums, D.C. offers more free art than anywhere else in America.<br><br><strong><a href="/city/chicago" style="color: #C9A84C;">Chicago</a></strong>: The <a href="/museum/art-institute-of-chicago" style="color: #028161; font-weight: 600;">Art Institute of Chicago</a> has one of the finest Impressionist collections outside Paris, plus <a href="/artist/grant-wood" style="color: #C9A84C;">Grant Wood's</a> <strong>American Gothic</strong> and <a href="/artist/georges-seurat" style="color: #C9A84C;">Seurat's</a> <strong>A Sunday on La Grande Jatte</strong>.`,
    },
  ];
}

export default async function CitiesPage() {
  // Get all unique cities with museums
  const rawMuseums = await prisma.museum.findMany({
    include: {
      _count: { select: { Artwork: true } },
      Artwork: {
        where: { imageUrl: { not: null } }, // Only get artworks with images
        take: 4,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true, title: true },
      },
    },
    orderBy: { Artwork: { _count: "desc" } },
  });

  // Filter and clean museums
  const validMuseums = rawMuseums.filter((m) => {
    // Skip invalid/malformed entries
    if (!isValidMuseum(m)) return false;
    // Skip entries where city is actually a country (data quality issue)
    if (isCountryNotCity(m.city)) return false;
    // Skip Unknown cities (except Private Collections which we'll handle separately)
    if (m.city === "Unknown" && !isPrivateCollection(m.name)) return false;
    return true;
  });

  // Separate private collections
  const privateCollections = rawMuseums.filter(
    (m) => isPrivateCollection(m.name) || m.city === "Unknown"
  );
  const privateCollectionCount = privateCollections.reduce(
    (sum, m) => sum + m._count.Artwork,
    0
  );

  // Map to lowercase for components and decode HTML entities
  const museums = validMuseums.map((m) => ({
    ...m,
    name: decodeHtmlEntities(m.name),
    city: decodeHtmlEntities(m.city),
    country: decodeHtmlEntities(m.country),
    _count: { artworks: m._count.Artwork },
    artworks: m.Artwork,
  }));

  // Group by city, consolidating duplicates (e.g., "Paris, France" and "Paris, Unknown")
  const byCity = museums.reduce(
    (acc, museum) => {
      // Normalize the key - use just city name if country is Unknown
      const normalizedCountry =
        museum.country === "Unknown" ? "" : museum.country;
      const key = normalizedCountry
        ? `${museum.city}, ${normalizedCountry}`
        : museum.city;

      // Check if we already have this city with a different country variant
      const existingKey = Object.keys(acc).find(
        (k) => k.startsWith(museum.city + ",") || k === museum.city
      );
      const useKey = existingKey || key;

      if (!acc[useKey]) {
        acc[useKey] = {
          city: museum.city,
          country: normalizedCountry || museum.country,
          slug: museum.city.toLowerCase().replace(/\s+/g, "-"),
          museums: [],
          totalArtworks: 0,
          previewImages: [],
        };
      }
      // Update country if we have a better one
      if (normalizedCountry && acc[useKey].country === "Unknown") {
        acc[useKey].country = normalizedCountry;
      }
      acc[useKey].museums.push({
        id: museum.id,
        name: museum.name,
        _count: { artworks: museum._count.artworks },
      });
      acc[useKey].totalArtworks += museum._count.artworks;
      // Collect preview images from artworks
      museum.artworks.forEach((a) => {
        if (a.imageUrl && acc[useKey].previewImages.length < 4) {
          acc[useKey].previewImages.push(a.imageUrl);
        }
      });
      return acc;
    },
    {} as Record<
      string,
      {
        city: string;
        country: string;
        slug: string;
        museums: { id: string; name: string; _count: { artworks: number } }[];
        totalArtworks: number;
        previewImages: string[];
      }
    >
  );

  // Sort by artwork count, filter out any remaining Unknown cities
  const cities = Object.values(byCity)
    .filter((c) => c.city !== "Unknown" && c.totalArtworks > 0)
    .sort((a, b) => b.totalArtworks - a.totalArtworks);

  // Calculate stats for header and FAQs
  const totalCities = cities.length;
  const totalMuseums = cities.reduce((sum, c) => sum + c.museums.length, 0);
  const totalArtworks = cities.reduce((sum, c) => sum + c.totalArtworks, 0);
  const topCities = cities.slice(0, 10).map((c) => ({
    city: c.city,
    country: c.country,
    slug: c.slug,
    artworks: c.totalArtworks,
    museums: c.museums.length,
  }));

  // Build breadcrumb items for schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Cities" },
  ];

  // Generate FAQs
  const faqs = generateCitiesFAQs({
    totalCities,
    totalMuseums,
    totalArtworks,
    topCities,
  });

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema items={faqs} />

      {/* Header */}
      <div style={{ backgroundColor: "#000", color: "#fff" }} className="py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" style={{ color: "#999" }} className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" style={{ color: "#666" }}>/</span>
            <span style={{ color: "#fff" }}>Cities</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#C9A84C" }}>
            Art Cities Around the World
          </h1>

          {/* Intro copy */}
          <div className="mb-8 max-w-4xl" style={{ color: "#bbb" }}>
            <p className="text-lg mb-3">
              We&apos;ve catalogued <span style={{ color: "#fff" }}>{totalArtworks.toLocaleString()} famous artworks</span> across <span style={{ color: "#fff" }}>{totalCities} cities</span> and <span style={{ color: "#fff" }}>{totalMuseums} museums</span> worldwide. Paris, London, New York, Amsterdam, Madrid, Florence, and dozens more.
            </p>
            <p className="text-base" style={{ color: "#888" }}>
              Click any city to see its museums, the masterpieces they hold, ticket prices, and visiting tips. Good for trip planning or just browsing what&apos;s where.
            </p>
          </div>

          {/* Search and Stats Row */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search cities, countries, or museums..."
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] text-neutral-900 placeholder-neutral-500 text-lg"
                id="city-search-header"
                autoComplete="off"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Stats */}
            <div className="flex gap-4 lg:gap-6">
              <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  {totalCities}
                </div>
                <div className="text-sm" style={{ color: "#999" }}>Cities</div>
              </div>
              <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  {totalMuseums}
                </div>
                <div className="text-sm" style={{ color: "#999" }}>Museums</div>
              </div>
              <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }}>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#C9A84C" }}>
                  {totalArtworks.toLocaleString()}
                </div>
                <div className="text-sm" style={{ color: "#999" }}>Artworks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Search, Filter, and Grid */}
        <CitySearch cities={cities} privateCollectionCount={privateCollectionCount} topCities={topCities} />

        {/* FAQ Section */}
        <FAQ items={faqs} title="Planning Your Art Trip" wide={true} />

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Art for Any Space
          </h2>
          <p className="text-neutral-400 mb-4">
            Gallery-quality prints. No passport required.
          </p>
          <a
            href="https://luxurywallart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded font-semibold hover:bg-[#b8973f] transition-colors"
          >
            Browse Collection
          </a>
        </section>
      </div>
    </div>
  );
}
