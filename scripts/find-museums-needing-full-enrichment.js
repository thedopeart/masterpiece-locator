const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function find() {
  const museums = await prisma.museum.findMany({
    where: { hoursOfOperation: { not: Prisma.DbNull } },
    select: { slug: true, name: true, hoursOfOperation: true, _count: { select: { Artwork: true } } },
    orderBy: { Artwork: { _count: 'desc' } }
  });

  // Find museums that have hours but lack detailed enrichment (no mustSee array)
  const needsEnrichment = museums.filter(m => {
    const h = m.hoursOfOperation;
    const hasMustSee = h?.mustSee && h.mustSee.length > 0;
    return !hasMustSee;
  });

  console.log('Museums with hours but lacking full enrichment (no mustSee):');
  console.log('============================================================\n');
  needsEnrichment.forEach((m, i) => {
    const adm = m.hoursOfOperation?.admission;
    const price = adm?.adult || 0;
    const currency = adm?.currency || 'FREE';
    console.log(`${i+1}. ${m.name}`);
    console.log(`   Price: ${price} ${currency} | Artworks: ${m._count.Artwork}`);
    console.log(`   Slug: ${m.slug}\n`);
  });

  console.log(`Total needing full enrichment: ${needsEnrichment.length}`);
  console.log(`Total with hours: ${museums.length}`);

  await prisma.$disconnect();
}

find();
