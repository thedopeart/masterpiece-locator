const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  const missing = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null },
    select: { slug: true, title: true, Museum: { select: { name: true } }, Artist: { select: { name: true } } },
  });

  console.log(`Total missing: ${missing.length}\n`);

  // Group by museum
  const byMuseum = {};
  missing.forEach(s => {
    const m = s.Museum?.name || 'NO MUSEUM';
    if (byMuseum[m] === undefined) byMuseum[m] = [];
    byMuseum[m].push(s);
  });

  const sorted = Object.entries(byMuseum).sort((a, b) => b[1].length - a[1].length);
  console.log('By museum:');
  sorted.forEach(([m, items]) => console.log(`  ${items.length} | ${m}`));

  // Group by artist
  const byArtist = {};
  missing.forEach(s => {
    const a = s.Artist?.name || 'NO ARTIST';
    if (byArtist[a] === undefined) byArtist[a] = [];
    byArtist[a].push(s);
  });

  console.log('\nBy artist (top 20):');
  Object.entries(byArtist).sort((a, b) => b[1].length - a[1].length).slice(0, 20)
    .forEach(([a, items]) => console.log(`  ${items.length} | ${a}`));

  await p.$disconnect();
})();
