const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAndFix() {
  // Find artworks with wikipedia/en URLs (fair use images that can't be hotlinked)
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikipedia/en' }
    },
    select: {
      slug: true,
      title: true,
      imageUrl: true,
      Artist: { select: { name: true, deathYear: true } }
    }
  });

  console.log('Found', artworks.length, 'artworks with wikipedia/en URLs (copyrighted fair use images)\n');

  let fixed = 0;
  let skipped = 0;

  // Set these to null since they can't be hotlinked
  for (const a of artworks) {
    const artistDeath = a.Artist?.deathYear;
    const isCopyrighted = artistDeath && (2026 - artistDeath < 70);

    if (isCopyrighted) {
      console.log('Setting to null:', a.slug, '-', a.title, 'by', a.Artist?.name);
      await prisma.artwork.update({
        where: { slug: a.slug },
        data: {
          imageUrl: null,
          imageAttribution: 'Copyrighted - ' + (a.Artist?.name || 'Unknown artist')
        }
      });
      fixed++;
    } else {
      console.log('Public domain but broken URL (needs fixing):', a.slug, '-', a.title);
      skipped++;
    }
  }

  console.log('\n---');
  console.log('Set to null (copyrighted):', fixed);
  console.log('Skipped (needs manual fix):', skipped);

  await prisma.$disconnect();
}

checkAndFix();
