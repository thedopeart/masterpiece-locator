import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newMuseums = [
  { slug: "southampton-city-art-gallery", name: "Southampton City Art Gallery", city: "Southampton", country: "United Kingdom" },
  { slug: "de-morgan-collection", name: "De Morgan Collection", city: "London", country: "United Kingdom" },
  { slug: "musee-bonnat", name: "Musée Bonnat-Helleu", city: "Bayonne", country: "France" },
  { slug: "reynolda-house", name: "Reynolda House Museum of American Art", city: "Winston-Salem", country: "United States" },
];

const assignments: Record<string, string> = {
  // Southampton City Art Gallery
  "romeo-and-juliet-dicksee": "southampton-city-art-gallery",

  // De Morgan Collection
  "angel-of-death-morgan": "de-morgan-collection",

  // Musée Bonnat (has Doré works)
  "dante-virgil-ninth-circle": "musee-bonnat",

  // Reynolda House
  "old-hunting-grounds": "reynolda-house",
};

async function main() {
  console.log("Adding museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  console.log("\nAssigning artworks...\n");

  let assigned = 0;

  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug: artworkSlug } });
    if (!artwork || artwork.museumId) continue;

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

  console.log(`\n=== Final Stats ===`);
  console.log(`Assigned: ${assigned}`);
  console.log(`Total with museum: ${withMuseum}/${totalArtworks} (${Math.round(withMuseum/totalArtworks*100)}%)`);
  console.log(`In private collections: ${totalArtworks - withMuseum}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
