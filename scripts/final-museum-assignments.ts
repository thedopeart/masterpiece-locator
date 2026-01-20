import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newMuseums = [
  { slug: "scrovegni-chapel", name: "Scrovegni Chapel", city: "Padua", country: "Italy" },
  { slug: "brancacci-chapel", name: "Brancacci Chapel", city: "Florence", country: "Italy" },
  { slug: "galleria-nazionale-marche", name: "Galleria Nazionale delle Marche", city: "Urbino", country: "Italy" },
  { slug: "british-museum", name: "British Museum", city: "London", country: "United Kingdom" },
  { slug: "new-york-historical-society", name: "New-York Historical Society", city: "New York", country: "United States" },
  { slug: "crystal-bridges", name: "Crystal Bridges Museum of American Art", city: "Bentonville", country: "United States" },
  { slug: "museo-del-prado-2", name: "Museo del Prado", city: "Madrid", country: "Spain" },
  { slug: "victoria-albert", name: "Victoria and Albert Museum", city: "London", country: "United Kingdom" },
];

async function main() {
  console.log("Adding final museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  const assignments: Record<string, string> = {
    // Chapel museums
    "lamentation-giotto": "scrovegni-chapel",
    "expulsion-masaccio": "brancacci-chapel",
    "tribute-money": "brancacci-chapel",
    "flagellation-piero": "galleria-nazionale-marche",

    // Other locations
    "course-empire-destruction": "new-york-historical-society",
    "ancient-of-days": "british-museum",

    // Artworks in collections we know
    "marriage-a-la-mode": "national-gallery",
    "whistlejacket": "national-gallery",
    "woman-child-courtyard": "national-gallery-of-art",
    "windmill-wijk": "rijksmuseum",
    "avenue-middelharnis": "national-gallery",
    "diana-leaving-bath": "louvre",

    // Tretyakov
    "ninth-wave": "tretyakov-gallery",
    "barge-haulers": "russian-museum",
    "reply-cossacks": "russian-museum",
  };

  console.log("\nAssigning remaining artworks...\n");

  let assigned = 0;
  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug: artworkSlug } });
    if (!artwork) {
      console.log(`Artwork not found: ${artworkSlug}`);
      continue;
    }
    if (artwork.museumId) continue;

    const museum = await prisma.museum.findUnique({ where: { slug: museumSlug } });
    if (!museum) {
      console.log(`Museum not found: ${museumSlug}`);
      continue;
    }

    await prisma.artwork.update({
      where: { slug: artworkSlug },
      data: { museumId: museum.id },
    });
    console.log(`Assigned: ${artwork.title} → ${museum.name}`);
    assigned++;
  }

  // Final stats
  const totalArtworks = await prisma.artwork.count();
  const artworksWithMuseum = await prisma.artwork.count({ where: { museumId: { not: null } } });
  const remaining = totalArtworks - artworksWithMuseum;
  const totalMuseums = await prisma.museum.count();
  const emptyMuseums = await prisma.museum.count({ where: { artworks: { none: {} } } });

  console.log(`\n=== Final Stats ===`);
  console.log(`Total artworks: ${totalArtworks}`);
  console.log(`Artworks with museum: ${artworksWithMuseum}`);
  console.log(`Artworks without museum: ${remaining}`);
  console.log(`Total museums: ${totalMuseums}`);
  console.log(`Empty museums: ${emptyMuseums}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
