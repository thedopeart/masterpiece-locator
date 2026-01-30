const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const museums = await prisma.museum.findMany({
    select: { slug: true, name: true, city: true, country: true, faqs: true, _count: { select: { Artwork: true } } },
    orderBy: { Artwork: { _count: 'desc' } }
  });
  const filtered = museums.filter(m => {
    const faqCount = (m.faqs && Array.isArray(m.faqs)) ? m.faqs.length : 0;
    return faqCount === 0 && m._count.Artwork >= 2 && m.slug !== 'private-collection';
  });
  console.log('Museums without FAQs, 2+ artworks (excl Private Collection):', filtered.length);
  filtered.forEach(m => console.log(JSON.stringify({ slug: m.slug, name: m.name, city: m.city, country: m.country, artworks: m._count.Artwork })));
  await prisma.$disconnect();
}
run();
