const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Updating Artwork Types ===\n');

  // Sculptures to update
  const sculptures = [
    'david-michelangelo',
    'pieta-michelangelo',
    'the-thinker-rodin',
    'the-kiss-rodin',
    'gates-of-hell-rodin',
    'burghers-of-calais',
    'venus-de-milo',
    'winged-victory-samothrace',
    'laocoon-and-his-sons',
    'discobolus',
    'little-dancer-fourteen-years',
  ];

  // Prints (woodblock, etc.) to update
  const prints = [
    'great-wave-off-kanagawa',
    'sudden-shower-shin-ohashi',
    'plum-park-kameido',
    'night-snow-kambara',
    'sea-at-satta-suruga',
    'red-fuji-hokusai',
    'thunderstorm-beneath-summit',
  ];

  let sculptureCount = 0;
  let printCount = 0;

  // Update sculptures
  for (const slug of sculptures) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: { artworkType: 'sculpture' }
    });
    if (result.count > 0) {
      console.log(`Updated to sculpture: ${slug}`);
      sculptureCount++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  // Update prints
  for (const slug of prints) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: { artworkType: 'print' }
    });
    if (result.count > 0) {
      console.log(`Updated to print: ${slug}`);
      printCount++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Sculptures updated: ${sculptureCount}`);
  console.log(`Prints updated: ${printCount}`);

  // Show counts by type
  const typeCounts = await prisma.artwork.groupBy({
    by: ['artworkType'],
    _count: true,
  });
  console.log('\nArtwork counts by type:');
  typeCounts.forEach(t => console.log(`  ${t.artworkType}: ${t._count}`));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
