const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const titles = [
    'Blue Rider',
    'Scream',
    'Grande Jatte',
    'Ophelia',
    'Arnolfini'
  ];
  
  for (const title of titles) {
    const artwork = await prisma.artwork.findFirst({
      where: { title: { contains: title, mode: 'insensitive' } },
      select: { slug: true, title: true }
    });
    if (artwork) {
      console.log(`"${artwork.title}" -> slug: "${artwork.slug}"`);
    } else {
      console.log(`NOT FOUND: ${title}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
