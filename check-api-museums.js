const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  // Check museums with open APIs
  const queries = [
    { name: 'Rijksmuseum', pattern: 'rijksmuseum' },
    { name: 'Met', pattern: 'metropolitan' },
    { name: 'Art Institute Chicago', pattern: 'art-institute' },
    { name: 'Cleveland Museum', pattern: 'cleveland' },
  ];

  console.log('WikiArt images at API-enabled museums:\n');

  let apiTotal = 0;
  for (const q of queries) {
    const count = await prisma.artwork.count({
      where: {
        imageUrl: { contains: 'wikiart.org' },
        Museum: { slug: { contains: q.pattern } }
      }
    });
    apiTotal += count;
    console.log(`  ${q.name}: ${count}`);
  }

  const totalWikiart = await prisma.artwork.count({
    where: { imageUrl: { contains: 'wikiart.org' } }
  });

  console.log(`\n  Total with APIs: ${apiTotal}`);
  console.log(`  Need Wikimedia: ${totalWikiart - apiTotal}`);

  await prisma.$disconnect();
}

check();
