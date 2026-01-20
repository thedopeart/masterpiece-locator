const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    select: { title: true, imageUrl: true }
  });

  const urlCounts = {};
  for (const a of artworks) {
    if (!urlCounts[a.imageUrl]) {
      urlCounts[a.imageUrl] = [];
    }
    urlCounts[a.imageUrl].push(a.title);
  }

  const duplicates = Object.entries(urlCounts).filter(([url, titles]) => titles.length > 1);

  console.log('Remaining duplicate URLs: ' + duplicates.length);
  console.log('');

  for (const [url, titles] of duplicates) {
    console.log(titles.join(' | '));
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
