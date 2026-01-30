const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const museums = await prisma.museum.findMany({
    select: { slug: true, name: true, faqs: true, _count: { select: { Artwork: true } } },
    orderBy: { Artwork: { _count: 'desc' } }
  });
  let hasFaqs = [];
  let noFaqs = [];
  for (const m of museums) {
    const faqCount = (m.faqs && Array.isArray(m.faqs)) ? m.faqs.length : 0;
    const artCount = m._count.Artwork;
    if (faqCount > 0) hasFaqs.push({ name: m.name, slug: m.slug, faqCount, artCount });
    else noFaqs.push({ name: m.name, slug: m.slug, artCount });
  }
  console.log('Total museums:', museums.length);
  console.log('With FAQs:', hasFaqs.length);
  console.log('Without FAQs:', noFaqs.length);
  console.log('\n--- WITH FAQs (sorted by artwork count) ---');
  for (const m of hasFaqs) console.log('  ' + m.name + ' | ' + m.faqCount + ' FAQs | ' + m.artCount + ' artworks');
  console.log('\n--- WITHOUT FAQs (sorted by artwork count) ---');
  for (const m of noFaqs) console.log('  ' + m.name + ' | ' + m.artCount + ' artworks');
  await prisma.$disconnect();
}
check();
