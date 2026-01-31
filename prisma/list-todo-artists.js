const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  // Artists without bioFull or without FAQs
  const artists = await p.artist.findMany({
    where: {
      OR: [
        { bioFull: null },
        { bioFull: '' },
        { faqs: { equals: null } },
      ]
    },
    select: {
      slug: true,
      name: true,
      nationality: true,
      birthYear: true,
      deathYear: true,
      bioFull: true,
      faqs: true,
      _count: { select: { Artwork: true } },
      Movement: { select: { name: true, slug: true } },
    },
    orderBy: { Artwork: { _count: 'desc' } },
  });

  console.log(`Total artists needing enrichment: ${artists.length}\n`);

  // Split by priority
  const high = artists.filter(a => a._count.Artwork >= 10);
  const med = artists.filter(a => a._count.Artwork >= 3 && a._count.Artwork < 10);
  const low = artists.filter(a => a._count.Artwork < 3);

  console.log(`High priority (10+ works): ${high.length}`);
  high.forEach(a => {
    const needs = [];
    if (!a.bioFull) needs.push('bio');
    if (!a.faqs) needs.push('faqs');
    const movs = a.Movement.map(m => m.name).join(', ');
    console.log(`  ${a._count.Artwork} works | ${a.slug} | ${a.name} | ${a.nationality || ''} | ${movs} | needs: ${needs.join('+')}`);
  });

  console.log(`\nMedium priority (3-9 works): ${med.length}`);
  med.forEach(a => {
    const needs = [];
    if (!a.bioFull) needs.push('bio');
    if (!a.faqs) needs.push('faqs');
    console.log(`  ${a._count.Artwork} works | ${a.slug} | ${a.name} | needs: ${needs.join('+')}`);
  });

  console.log(`\nLow priority (1-2 works): ${low.length}`);

  await p.$disconnect();
})();
