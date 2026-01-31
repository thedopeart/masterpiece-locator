const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();

const PART_PATTERNS = ["(obverse)", "(reverse)", "(base)", "(serpent hoods)", "(lotus base)", "(head)", "(frame)", "(lid)", "(1 of", "(2 of"];

async function main() {
  // 1. Delete part sculptures where the main artwork exists
  const parts = await p.artwork.findMany({
    where: {
      artworkType: "sculpture",
      OR: PART_PATTERNS.map(pat => ({ title: { contains: pat } })),
    },
    select: { id: true, title: true, artistId: true },
  });

  const toDelete = [];

  for (const part of parts) {
    let baseTitle = part.title;
    for (const pat of PART_PATTERNS) {
      const idx = baseTitle.indexOf(pat);
      if (idx > 0) baseTitle = baseTitle.substring(0, idx).trim();
    }

    if (baseTitle === part.title || baseTitle.length < 5) continue;

    // Check if a main version exists
    const main = await p.artwork.findFirst({
      where: {
        artworkType: "sculpture",
        artistId: part.artistId,
        title: { startsWith: baseTitle.substring(0, Math.min(baseTitle.length, 30)) },
        id: { not: part.id },
      },
      select: { id: true, title: true },
    });

    if (main && !toDelete.includes(part.id)) {
      toDelete.push(part.id);
      console.log("DELETE:", part.title);
      console.log("  KEEP:", main.title);
    }
  }

  // 2. Find sculptures with near-identical titles from the same artist
  // e.g. "Kannon" and "Kannon (base)" already handled above
  // Look for "Foo" and "Foo Pair" or "Pair of Foo"

  console.log("\nDeleting", toDelete.length, "part/component sculptures");
  if (toDelete.length > 0) {
    const result = await p.artwork.deleteMany({ where: { id: { in: toDelete } } });
    console.log("Deleted:", result.count);
  }

  // 3. Summary
  const remaining = await p.artwork.count({ where: { artworkType: "sculpture" } });
  console.log("\nRemaining sculptures:", remaining);

  await p.$disconnect();
}

main().catch(console.error);
