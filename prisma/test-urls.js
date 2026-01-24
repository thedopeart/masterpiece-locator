const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: {
      Artist: { slug: 'ancient-greek' }
    },
    select: {
      slug: true,
      title: true,
      imageUrl: true
    }
  });
  
  console.log('Testing all Ancient Greek artwork URLs...\n');
  
  for (const art of artworks) {
    if (!art.imageUrl) {
      console.log(`NO IMAGE: ${art.title}`);
      continue;
    }
    
    try {
      const response = await fetch(art.imageUrl, { method: 'HEAD' });
      if (response.ok) {
        console.log(`OK: ${art.title}`);
      } else {
        console.log(`BROKEN (${response.status}): ${art.title}`);
        console.log(`  URL: ${art.imageUrl}`);
      }
    } catch (e) {
      console.log(`ERROR: ${art.title} - ${e.message}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
