const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function findMuseumsNeedingHours() {
  try {
    const museums = await prisma.museum.findMany({
      where: {
        hoursOfOperation: {
          equals: Prisma.DbNull
        }
      },
      select: {
        id: true,
        name: true,
        slug: true,
        city: true,
        country: true,
        _count: {
          select: { Artwork: true }
        }
      },
      orderBy: {
        Artwork: {
          _count: 'desc'
        }
      },
      take: 15
    });

    console.log('Museums needing hours data (sorted by artwork count):');
    museums.forEach((m, i) => {
      console.log(`${i+1}. ${m.name} (${m.city}, ${m.country}) - ${m._count.Artwork} artworks - slug: ${m.slug}`);
    });

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

findMuseumsNeedingHours();
