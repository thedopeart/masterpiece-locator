import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FAQ, { FAQSchema } from "@/components/FAQ";

const museumFAQs = [
  {
    question: "Which museum has the most famous paintings?",
    answer: "The <strong>Louvre</strong> in Paris is the world's largest and most visited art museum, housing the <strong>Mona Lisa</strong>, <strong>Venus de Milo</strong>, and <strong>Winged Victory of Samothrace</strong> among 380,000 objects. The <strong>Metropolitan Museum of Art</strong> in New York spans 5,000 years of art with over 2 million works. The <strong>Prado</strong> in Madrid has the finest collection of Spanish masters including Velázquez, Goya, and El Greco. For Impressionism, the <strong>Musée d'Orsay</strong> in Paris and <strong>Art Institute of Chicago</strong> are unmatched.",
  },
  {
    question: "Are any major art museums free?",
    answer: "Several world-class museums offer <strong>free admission</strong>. In <strong>London</strong>, the National Gallery, British Museum, and Tate Modern are always free for permanent collections. All <strong>Smithsonian museums</strong> in Washington DC are free, including the National Gallery of Art. The <strong>Met</strong> in New York has pay-what-you-wish for NY, NJ, and CT residents. The <strong>Louvre</strong> is free on first Sundays from October through March, and free for visitors under 26 from the EU every Friday evening.",
  },
  {
    question: "Do I need to book museum tickets in advance?",
    answer: "For high-traffic museums, <strong>advance booking is essential</strong>. The <strong>Louvre</strong> requires timed-entry tickets and often sells out days ahead. The <strong>Vatican Museums</strong> can have 4-hour lines without a reservation. The <strong>Van Gogh Museum</strong> in Amsterdam is timed-entry only with no walk-up tickets. <strong>Summer months</strong> (June-August) and school holidays are the busiest. Booking online typically saves 15-30 minutes of waiting, even when not required.",
  },
  {
    question: "How long does a typical museum visit take?",
    answer: "Plan <strong>2-3 hours</strong> for a focused visit hitting the highlights. Major museums like the <strong>Louvre</strong>, <strong>Met</strong>, or <strong>Hermitage</strong> could take a full day or multiple visits to explore thoroughly. Museum fatigue is real, so pick <strong>5-10 works</strong> you want to see before you go. Many museums offer <strong>same-day re-entry</strong>, so you can take a lunch break and return. Audio guides typically run 60-90 minutes for highlight tours.",
  },
  {
    question: "Can I take photos in art museums?",
    answer: "<strong>Most museums allow photography</strong> without flash in permanent collection galleries. Special exhibitions and loaned works often prohibit photos due to copyright agreements. The <strong>Sistine Chapel</strong> strictly forbids photography (Nippon TV owns exclusive rights). <strong>Tripods and selfie sticks</strong> are banned in most museums. Look for camera icons with a line through them, or ask gallery attendants. Some museums now encourage social media sharing with designated photo spots.",
  },
  {
    question: "When's the best time to visit a museum?",
    answer: "<strong>Weekday mornings</strong>, right at opening, offer the smallest crowds. <strong>Tuesday and Wednesday</strong> tend to be quieter than other weekdays. Late afternoons (after 3 PM) work well as tour groups leave. Many museums have <strong>late-night hours</strong> once a week: the Louvre on Fridays until 9:45 PM, the Met on Fridays and Saturdays until 9 PM. Avoid weekends, school holidays, and rainy days when everyone heads indoors.",
  },
  {
    question: "What's the best way to plan a museum visit?",
    answer: "Start on the museum's <strong>official website</strong> for current hours, closures, and special exhibitions. Download the <strong>museum app</strong> if available (the Louvre, Met, and Rijksmuseum all have excellent ones). Identify <strong>5-10 must-see works</strong> and locate them on the floor plan. <strong>Audio guides</strong> cost $5-10 and provide valuable context. Wear comfortable shoes, as you'll walk 2-4 miles. Check bag policies since large backpacks often aren't allowed.",
  },
];

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Greatest Art Museums in the World | Find Famous Masterpieces",
  description:
    "Browse the world's most famous art museums. See what masterpieces each museum holds, from the Louvre to MoMA to the Rijksmuseum.",
};

export default async function MuseumsPage() {
  const rawMuseums = await prisma.museum.findMany({
    include: {
      _count: {
        select: { Artwork: true },
      },
      Artwork: {
        where: { imageUrl: { not: null } }, // Only get artworks with images
        take: 3,
        orderBy: { searchVolumeTier: "asc" },
        select: { imageUrl: true, title: true },
      },
    },
    orderBy: [{ Artwork: { _count: "desc" } }, { name: "asc" }],
  });

  // Map to lowercase for components
  const museums = rawMuseums.map((m) => ({
    ...m,
    _count: { artworks: m._count.Artwork },
    artworks: m.Artwork,
  }));

  // Group by country
  const byCountry = museums.reduce(
    (acc, museum) => {
      if (!acc[museum.country]) {
        acc[museum.country] = [];
      }
      acc[museum.country].push(museum);
      return acc;
    },
    {} as Record<string, typeof museums>
  );

  const countries = Object.keys(byCountry).sort();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: '#000', color: '#fff' }} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <Link href="/" style={{ color: '#999' }} className="hover:text-white">
              Home
            </Link>
            <span className="mx-2" style={{ color: '#666' }}>/</span>
            <span style={{ color: '#fff' }}>Museums</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#fff' }}>
            Museums
          </h1>
          <p className="text-lg max-w-2xl mb-8" style={{ color: '#aaa' }}>
            The Louvre, MoMA, the Rijksmuseum, and dozens more. See what&apos;s on display at each one and get visitor info before you go.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {museums.length}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Museums</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {countries.length}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Countries</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {museums.reduce((sum, m) => sum + m._count.artworks, 0)}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Artworks</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              <div className="text-2xl font-bold" style={{ color: '#C9A84C' }}>
                {new Set(museums.map((m) => m.city)).size}
              </div>
              <div className="text-sm" style={{ color: '#999' }}>Cities</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Museums by Country */}
        {countries.map((country) => (
          <section key={country} className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6 pb-2 border-b">
              {country}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCountry[country].map((museum) => (
                <Link
                  key={museum.id}
                  href={`/museum/${museum.slug}`}
                  className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Preview Images */}
                  <div className="h-32 bg-neutral-100 relative overflow-hidden">
                    {museum.artworks.length > 0 ? (
                      <div className="flex h-full">
                        {museum.artworks.map((artwork, idx) => (
                          <div
                            key={idx}
                            className="flex-1 relative"
                            style={{
                              width: `${100 / museum.artworks.length}%`,
                            }}
                          >
                            {artwork.imageUrl && (
                              <Image
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 33vw, 20vw"
                                unoptimized={artwork.imageUrl.includes('wikimedia.org')}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : museum.imageUrl ? (
                      <Image
                        src={museum.imageUrl}
                        alt={museum.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized={museum.imageUrl.includes('wikimedia.org')}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                        <span className="text-4xl font-light text-neutral-400">{museum.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                      {museum.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">{museum.city}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-neutral-600">
                        {museum._count.artworks} masterpiece
                        {museum._count.artworks !== 1 ? "s" : ""}
                      </span>
                      <span className="text-neutral-500 text-sm group-hover:text-black transition-colors">
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* About Section */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            About This Directory
          </h2>
          <div className="prose max-w-none text-neutral-700">
            <p className="mb-4">
              Each museum page shows you what&apos;s on display, ticket prices, official website links, and address info. Click into any museum to see the specific paintings they have and which artists are represented.
            </p>
            <p>
              We&apos;ve organized everything by country. Scroll down or use the search if you&apos;re looking for somewhere specific.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSchema items={museumFAQs} />
        <FAQ items={museumFAQs} title="Common Questions" />

        {/* CTA */}
        <section className="mt-12 bg-black rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Can&apos;t Visit in Person?
          </h2>
          <p className="text-neutral-400 mb-4">
            Gallery-quality canvas prints, delivered to your door.
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
