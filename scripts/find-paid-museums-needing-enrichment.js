const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function find() {
  const museums = await prisma.museum.findMany({
    where: { hoursOfOperation: { not: Prisma.DbNull } },
    select: {
      slug: true,
      name: true,
      hoursOfOperation: true,
      _count: { select: { Artwork: true } }
    },
    orderBy: { Artwork: { _count: 'desc' } }
  });

  const needsEnrichment = museums.filter(m => {
    const h = m.hoursOfOperation;
    const admission = h?.admission?.adult || 0;
    const hasDetailedTickets = h?.tickets?.onlineUrl || h?.tickets?.advanceWindow;
    return admission > 0 && !hasDetailedTickets;
  });

  console.log('Paid museums needing enrichment (sorted by artworks):\n');
  needsEnrichment.slice(0, 20).forEach((m, i) => {
    const adm = m.hoursOfOperation?.admission;
    console.log(`${i+1}. ${m.name}`);
    console.log(`   Price: ${adm?.adult} ${adm?.currency} | Artworks: ${m._count.Artwork}`);
    console.log(`   Slug: ${m.slug}\n`);
  });

  console.log(`Total paid museums needing enrichment: ${needsEnrichment.length}`);
  await prisma.$disconnect();
}

find();
