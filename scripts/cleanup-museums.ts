import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Museums to merge: [duplicate slug] → [canonical slug]
const duplicatesToMerge: Record<string, string> = {
  "museo-prado": "prado",
  "museo-del-prado-2": "prado",
  "american-gothic-house": "art-institute-chicago",
};

// Keep these even if empty (famous museums we might add artworks to later)
const keepIfEmpty = new Set([
  "tate-modern",
  "guggenheim",
  "moma",
  "louvre",
  "national-gallery",
  "rijksmuseum",
  "hermitage",
]);

async function main() {
  console.log("=== Museum Cleanup ===\n");

  // Step 1: Merge duplicates
  console.log("Step 1: Merging duplicates...\n");

  for (const [duplicateSlug, canonicalSlug] of Object.entries(duplicatesToMerge)) {
    const duplicate = await prisma.museum.findUnique({
      where: { slug: duplicateSlug },
      include: { _count: { select: { artworks: true } } }
    });

    if (!duplicate) {
      console.log(`  Skip: ${duplicateSlug} (not found)`);
      continue;
    }

    const canonical = await prisma.museum.findUnique({ where: { slug: canonicalSlug } });

    if (!canonical) {
      console.log(`  Skip: ${duplicateSlug} → ${canonicalSlug} (canonical not found)`);
      continue;
    }

    // Move artworks to canonical museum
    if (duplicate._count.artworks > 0) {
      await prisma.artwork.updateMany({
        where: { museumId: duplicate.id },
        data: { museumId: canonical.id }
      });
      console.log(`  Moved ${duplicate._count.artworks} artworks: ${duplicateSlug} → ${canonicalSlug}`);
    }

    // Delete duplicate
    await prisma.museum.delete({ where: { slug: duplicateSlug } });
    console.log(`  Deleted: ${duplicate.name} (${duplicateSlug})`);
  }

  // Step 2: Find and remove empty museums
  console.log("\nStep 2: Removing empty museums...\n");

  const emptyMuseums = await prisma.museum.findMany({
    where: { artworks: { none: {} } },
    select: { id: true, slug: true, name: true }
  });

  let removed = 0;
  let kept = 0;

  for (const museum of emptyMuseums) {
    if (keepIfEmpty.has(museum.slug)) {
      console.log(`  Keep: ${museum.name}`);
      kept++;
      continue;
    }

    await prisma.museum.delete({ where: { id: museum.id } });
    console.log(`  Removed: ${museum.name}`);
    removed++;
  }

  // Step 3: Final stats
  const totalMuseums = await prisma.museum.count();
  const museumsWithArt = await prisma.museum.count({
    where: { artworks: { some: {} } }
  });

  console.log("\n=== Final Stats ===");
  console.log(`Duplicates merged: ${Object.keys(duplicatesToMerge).length}`);
  console.log(`Empty museums removed: ${removed}`);
  console.log(`Empty museums kept: ${kept}`);
  console.log(`Total museums: ${totalMuseums}`);
  console.log(`Museums with artworks: ${museumsWithArt}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
