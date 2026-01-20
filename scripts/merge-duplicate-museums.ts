import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Map of duplicate slug -> canonical slug to keep
const duplicates: Record<string, string> = {
  "cleveland-museum-art": "cleveland-museum-of-art",
  "detroit-institute-arts": "detroit-institute-of-arts",
  "kunsthistorisches-museum-vienna": "kunsthistorisches-museum",
  "musee-beaux-arts-lyon": "musee-lyon",
  "marmottan": "musee-marmottan-monet",
  "museo-del-prado": "prado",
  "museo-thyssen-bornemisza": "museo-thyssen",
  "museum-of-fine-arts-boston": "mfa-boston",
  "museum-fine-arts-boston": "mfa-boston",
  "philadelphia-museum-art": "philadelphia-museum-of-art",
  "pinacoteca-brera": "pinacoteca-di-brera",
  "rmfab": "royal-museums-belgium",
  "vatican": "vatican-museums",
  // Also found from the list - kelvingrove duplicates
  "kelvingrove": "kelvingrove-glasgow",
};

async function main() {
  console.log("Merging duplicate museums...\n");

  for (const [dupeSlug, keepSlug] of Object.entries(duplicates)) {
    const dupe = await prisma.museum.findUnique({
      where: { slug: dupeSlug },
      include: { _count: { select: { artworks: true } } },
    });
    const keep = await prisma.museum.findUnique({
      where: { slug: keepSlug },
      include: { _count: { select: { artworks: true } } },
    });

    if (!dupe) {
      console.log(`Duplicate not found: ${dupeSlug}`);
      continue;
    }
    if (!keep) {
      console.log(`Target not found: ${keepSlug}`);
      continue;
    }

    // Move artworks from duplicate to keeper
    if (dupe._count.artworks > 0) {
      await prisma.artwork.updateMany({
        where: { museumId: dupe.id },
        data: { museumId: keep.id },
      });
      console.log(`Moved ${dupe._count.artworks} artworks from ${dupeSlug} to ${keepSlug}`);
    }

    // Delete the duplicate
    await prisma.museum.delete({ where: { slug: dupeSlug } });
    console.log(`Deleted duplicate: ${dupeSlug}`);
  }

  // Count remaining museums
  const remaining = await prisma.museum.count();
  const empty = await prisma.museum.count({
    where: { artworks: { none: {} } },
  });
  console.log(`\nMuseums remaining: ${remaining}`);
  console.log(`Empty museums: ${empty}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
