const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const sales = await prisma.auctionSale.findMany({
    include: {
      Artwork: {
        include: { Artist: true }
      }
    },
    orderBy: { priceUsd: 'desc' }
  });

  console.log('=== TOP 20 AUCTION ARTWORKS - IMAGE STATUS ===\n');

  sales.slice(0, 20).forEach((s, i) => {
    const hasImage = Boolean(s.Artwork.imageUrl);
    const status = hasImage ? '✓ HAS IMAGE' : '✗ NO IMAGE';
    console.log(`${i+1}. ${s.Artwork.title.substring(0, 40)} - ${status}`);
  });

  // Count all
  const allWithImage = sales.filter(s => s.Artwork.imageUrl).length;
  const allWithoutImage = sales.filter(s => !s.Artwork.imageUrl).length;

  console.log('\n=== SUMMARY ===');
  console.log(`Artworks with images: ${allWithImage}/${sales.length}`);
  console.log(`Artworks without images: ${allWithoutImage}`);

  // List those without images
  console.log('\n=== ARTWORKS WITHOUT IMAGES (Still Under Copyright) ===');
  sales.filter(s => !s.Artwork.imageUrl).forEach(s => {
    const artist = s.Artwork.Artist;
    const deathYear = artist?.deathYear || 'alive';
    console.log(`- ${s.Artwork.title} (${artist?.name}, d. ${deathYear})`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
