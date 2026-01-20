import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// New museums to add
const newMuseums = [
  { slug: "hospital-caridad-seville", name: "Hospital de la Caridad", city: "Seville", country: "Spain" },
  { slug: "royal-collection-uk", name: "Royal Collection", city: "London", country: "United Kingdom" },
  { slug: "orvieto-cathedral", name: "Orvieto Cathedral", city: "Orvieto", country: "Italy" },
  { slug: "keble-college", name: "Keble College Chapel", city: "Oxford", country: "United Kingdom" },
  { slug: "centraal-museum", name: "Centraal Museum", city: "Utrecht", country: "Netherlands" },
  { slug: "san-domenico-siena", name: "Basilica of San Domenico", city: "Siena", country: "Italy" },
  { slug: "musee-felicien-rops", name: "Musée Félicien Rops", city: "Namur", country: "Belgium" },
  { slug: "bristol-museum", name: "Bristol Museum & Art Gallery", city: "Bristol", country: "United Kingdom" },
  { slug: "musee-ostende", name: "Mu.ZEE", city: "Ostend", country: "Belgium" },
  { slug: "white-house", name: "White House", city: "Washington D.C.", country: "United States" },
  { slug: "private-collection", name: "Private Collection", city: "Various", country: "Various" },
];

// Artwork to museum assignments
const assignments: Record<string, string> = {
  // Hospital de la Caridad, Seville
  "in-ictu-oculi": "hospital-caridad-seville",

  // Uffizi (Madonna with Long Neck is there)
  "madonna-with-the-long-neck": "uffizi",

  // Royal Collection UK
  "self-portrait-allegory-painting": "royal-collection-uk",

  // Orvieto Cathedral
  "damned-cast-hell": "orvieto-cathedral",

  // Keble College Oxford
  "light-of-world": "keble-college",

  // Centraal Museum Utrecht
  "the-matchmaker": "centraal-museum",

  // San Domenico Siena
  "swooning-saint-catherine": "san-domenico-siena",

  // Musée Félicien Rops
  "pornokrates": "musee-felicien-rops",

  // Bristol Museum
  "la-belle-dame-sans-merci-dicksee": "bristol-museum",

  // Mu.ZEE Ostend (Spilliaert)
  "self-portrait-mirror-spilliaert": "musee-ostende",
  "gust-of-wind-spilliaert": "musee-ostende",

  // White House
  "avenue-in-rain": "white-house",
};

async function main() {
  console.log("Adding new museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  console.log("\nAssigning artworks to museums...\n");

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

  const totalArtworks = await prisma.artwork.count();
  const withMuseum = await prisma.artwork.count({ where: { museumId: { not: null } } });

  console.log(`\n=== Results ===`);
  console.log(`Newly assigned: ${assigned}`);
  console.log(`Total with museum: ${withMuseum}/${totalArtworks} (${Math.round(withMuseum/totalArtworks*100)}%)`);
  console.log(`Still missing: ${totalArtworks - withMuseum}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
