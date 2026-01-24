const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updated = await prisma.artist.update({
    where: { slug: 'jesse-johnson' },
    data: {
      imageUrl: 'https://thedopeart.com/cdn/shop/files/CoverArtConsumedZoom_1200x.webp?v=1711648387',
      updatedAt: new Date()
    }
  });
  console.log('Updated artist image for: ' + updated.name);
  console.log('Image URL: ' + updated.imageUrl);
}

main().catch(console.error).finally(() => prisma.$disconnect());
