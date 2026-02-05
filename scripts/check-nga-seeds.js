const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Get all NGA paintings we added (they have 'nga-' prefix in ID)
  const ngaAdded = await prisma.artwork.findMany({
    where: { id: { startsWith: 'nga-' } },
    include: { Artist: { select: { name: true } } },
    orderBy: { searchVolumeTier: 'asc' }
  });

  console.log('=== NGA PAINTINGS ADDED VIA SEED SCRIPTS ===');
  console.log('Total:', ngaAdded.length);
  console.log('');

  const tier1 = ngaAdded.filter(a => a.searchVolumeTier === 1);
  const tier2 = ngaAdded.filter(a => a.searchVolumeTier === 2);

  console.log('TIER 1 (' + tier1.length + '):');
  tier1.forEach(a => console.log('  ✓', a.title, '-', a.Artist?.name || 'Unknown'));

  console.log('');
  console.log('TIER 2 (' + tier2.length + '):');
  tier2.forEach(a => console.log('  ✓', a.title, '-', a.Artist?.name || 'Unknown'));

  // Check for any without descriptions or FAQs
  const missingDesc = ngaAdded.filter(a => !a.description);
  const missingFaqs = ngaAdded.filter(a => !a.faqs);

  console.log('');
  if (missingDesc.length > 0 || missingFaqs.length > 0) {
    console.log('⚠️  ISSUES:');
    if (missingDesc.length) console.log('  Missing descriptions:', missingDesc.map(a => a.title).join(', '));
    if (missingFaqs.length) console.log('  Missing FAQs:', missingFaqs.map(a => a.title).join(', '));
  } else {
    console.log('✅ All paintings have descriptions and FAQs');
  }

  // Check artist links
  const missingArtist = ngaAdded.filter(a => !a.Artist);
  if (missingArtist.length > 0) {
    console.log('⚠️  Missing artist links:', missingArtist.map(a => a.title).join(', '));
  } else {
    console.log('✅ All paintings linked to artists');
  }

  await prisma.$disconnect();
}

main();
