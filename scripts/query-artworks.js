const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Query using raw SQL to check for null faqs
  const artworks = await prisma.$queryRaw`
    SELECT a.id, a.slug, a.title, a.year, a.medium, a.description, a.faqs,
           ar.name as artist_name, ar.slug as artist_slug,
           m.name as museum_name, m.slug as museum_slug, m.city
    FROM "Artwork" a
    LEFT JOIN "Artist" ar ON a."artistId" = ar.id
    LEFT JOIN "Museum" m ON a."museumId" = m.id
    WHERE a.faqs IS NULL
    ORDER BY a."searchVolumeTier" ASC
    LIMIT 30
  `;
  
  console.log(JSON.stringify(artworks, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
