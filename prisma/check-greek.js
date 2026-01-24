const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artist = await prisma.artist.findUnique({
    where: { slug: 'ancient-greek' },
    select: {
      id: true,
      name: true,
      slug: true,
      imageUrl: true
    }
  });
  
  console.log('Artist record:');
  console.log(JSON.stringify(artist, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
