const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  const sculptures = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null },
    select: { slug: true, title: true, searchVolumeTier: true, Artist: { select: { name: true } }, Museum: { select: { name: true } } },
    orderBy: { searchVolumeTier: 'asc' }
  });

  const byTier = {};
  sculptures.forEach(s => {
    const t = s.searchVolumeTier || 3;
    if (byTier[t] === undefined) byTier[t] = [];
    byTier[t].push(s);
  });

  for (const [tier, items] of Object.entries(byTier)) {
    console.log(`\nTier ${tier} (${items.length}):`);
    items.slice(0, 20).forEach(s => console.log(`  ${s.slug} | ${s.title} | ${s.Artist?.name || 'no artist'} | ${s.Museum?.name || 'no museum'}`));
    if (items.length > 20) console.log(`  ... and ${items.length - 20} more`);
  }

  await p.$disconnect();
})();
