import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newMuseums = [
  { slug: "mak-vienna", name: "MAK Vienna", city: "Vienna", country: "Austria" },
  { slug: "casino-rospigliosi", name: "Casino dell'Aurora", city: "Rome", country: "Italy" },
  { slug: "parma-cathedral", name: "Parma Cathedral", city: "Parma", country: "Italy" },
  { slug: "saint-bavo-cathedral", name: "Saint Bavo's Cathedral", city: "Ghent", country: "Belgium" },
  { slug: "musee-unterlinden", name: "Musée Unterlinden", city: "Colmar", country: "France" },
  { slug: "santa-felicita", name: "Santa Felicita", city: "Florence", country: "Italy" },
  { slug: "museum-arte-ponce", name: "Museo de Arte de Ponce", city: "Ponce", country: "Puerto Rico" },
  { slug: "national-museum-stockholm", name: "Nationalmuseum", city: "Stockholm", country: "Sweden" },
  { slug: "museo-soumaya", name: "Museo Soumaya", city: "Mexico City", country: "Mexico" },
  { slug: "frick-collection", name: "The Frick Collection", city: "New York", country: "United States" },
  { slug: "wadsworth-atheneum", name: "Wadsworth Atheneum", city: "Hartford", country: "United States" },
  { slug: "los-angeles-county-museum", name: "Los Angeles County Museum of Art", city: "Los Angeles", country: "United States" },
];

async function main() {
  console.log("Adding more museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  const assignments: Record<string, string> = {
    // MAK Vienna
    "tree-of-life-klimt": "mak-vienna",

    // Italian churches/palaces
    "aurora-reni": "casino-rospigliosi",
    "assumption-correggio": "parma-cathedral",
    "deposition-pontormo": "santa-felicita",

    // Ghent
    "ghent-altarpiece": "saint-bavo-cathedral",

    // Colmar
    "isenheim-altarpiece-crucifixion": "musee-unterlinden",

    // More Met assignments
    "the-oxbow": "met",
    "washington-crossing-delaware": "met",

    // Nationalmuseum Stockholm
    "midsummer-dance": "national-museum-stockholm",

    // Sorolla Museum
    "walk-on-beach": "sorolla-museum",
    "children-beach-sorolla": "sorolla-museum",

    // Various
    "isle-of-dead": "kunstmuseum-basel",
    "the-sin": "neue-pinakothek",
    "course-empire-destruction": "new-york-historical-society",
    "ninth-wave": "tretyakov-gallery",
    "barge-haulers": "tretyakov-gallery",
    "reply-cossacks": "tretyakov-gallery",
    "max-schmitt": "met",
    "gross-clinic": "philadelphia-museum-of-art",
    "daughters-boit": "mfa-boston",
    "madame-x": "met",
    "ancient-of-days": "british-museum",
    "great-red-dragon": "brooklyn-museum",
    "marriage-a-la-mode": "national-gallery",
    "whistlejacket": "national-gallery",
    "portrait-omai": "national-gallery",
    "diana-leaving-bath": "louvre",
    "reclining-girl-boucher": "alte-pinakothek",
    "grand-canal-canaletto": "national-gallery",
    "bucintoro-molo": "dulwich-picture-gallery",
    "woman-child-courtyard": "national-gallery-of-art",
    "jewish-cemetery": "gemaldegalerie-alte-meister",
    "windmill-wijk": "rijksmuseum",
    "avenue-middelharnis": "national-gallery",
    "immaculate-conception-murillo": "prado",
    "saint-serapion": "wadsworth-atheneum",
    "flagellation-piero": "galleria-nazionale-marche",
    "duke-duchess-urbino": "uffizi",
    "lamentation-giotto": "scrovegni-chapel",
    "expulsion-masaccio": "brancacci-chapel",
    "tribute-money": "brancacci-chapel",
  };

  console.log("\nAssigning artworks...\n");

  let assigned = 0;
  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug: artworkSlug } });
    if (!artwork) continue;
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

  const remaining = await prisma.artwork.count({ where: { museumId: null } });
  const emptyMuseums = await prisma.museum.count({ where: { artworks: { none: {} } } });

  console.log(`\nNewly assigned: ${assigned}`);
  console.log(`Artworks still without museum: ${remaining}`);
  console.log(`Empty museums: ${emptyMuseums}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
