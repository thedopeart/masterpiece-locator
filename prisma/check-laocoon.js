const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: {
      title: { contains: 'Laoco' }
    },
    select: {
      id: true,
      slug: true,
      title: true,
      imageUrl: true
    }
  });
  
  console.log(JSON.stringify(artworks, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
