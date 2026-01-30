const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  // Find artworks with no description, ordered by search volume tier then artist popularity
  const artworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { description: null },
        { description: '' }
      ]
    },
    select: {
      slug: true,
      title: true,
      year: true,
      medium: true,
      searchVolumeTier: true,
      Artist: { select: { name: true, slug: true } },
      Museum: { select: { name: true, slug: true } },
      wikipediaUrl: true
    },
    orderBy: [
      { searchVolumeTier: 'asc' },
      { Artist: { name: 'asc' } }
    ]
  });

  console.log('Total artworks needing descriptions:', artworks.length);

  // Group by tier
  const byTier = {};
  for (const a of artworks) {
    const t = a.searchVolumeTier || 3;
    if (!byTier[t]) byTier[t] = [];
    byTier[t].push(a);
  }

  for (const tier of [1, 2, 3]) {
    const list = byTier[tier] || [];
    console.log('\n--- TIER ' + tier + ' (' + list.length + ') ---');
    // Show first 30 of each tier
    list.slice(0, 30).forEach(a => {
      console.log(JSON.stringify({
        slug: a.slug,
        title: a.title,
        artist: a.Artist?.name,
        museum: a.Museum?.name,
        year: a.year,
        wiki: a.wikipediaUrl ? 'yes' : 'no'
      }));
    });
    if (list.length > 30) console.log('  ... and ' + (list.length - 30) + ' more');
  }

  await prisma.$disconnect();
}
run();
