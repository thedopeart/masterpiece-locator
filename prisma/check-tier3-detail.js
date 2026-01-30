const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const md = fs.readFileSync('ARTWORK-CHECKLIST.md', 'utf8');
  const parts = md.split('## Tier 3');
  const tier3Section = parts[1].split('## Tier ')[0];
  const rows = [...tier3Section.matchAll(/\| DONE \| ([^ |]+) \| ([^|]+)\| ([^|]+)/g)];

  const needsFaqs = [];
  const notFound = [];

  for (const row of rows) {
    const slug = row[1].trim();
    const title = row[2].trim();
    const artist = row[3].trim();
    const a = await prisma.artwork.findUnique({ where: { slug }, select: { slug: true, faqs: true } });
    if (!a) {
      const partial = slug.replace(/^(the-|a-|an-)/, '').substring(0, 12);
      const matches = await prisma.artwork.findMany({
        where: { slug: { contains: partial } },
        select: { slug: true, title: true, faqs: true }
      });
      notFound.push({ checklistSlug: slug, title, artist, dbMatches: matches.map(m => ({ slug: m.slug, faqCount: m.faqs && Array.isArray(m.faqs) ? m.faqs.length : 0 })) });
      continue;
    }
    const faqCount = a.faqs && Array.isArray(a.faqs) ? a.faqs.length : 0;
    if (faqCount < 3) {
      needsFaqs.push({ slug, title, artist, faqCount });
    }
  }

  console.log('=== NOT FOUND (' + notFound.length + ') ===');
  notFound.forEach(a => console.log(JSON.stringify(a)));

  console.log('\n=== NEED FAQs (' + needsFaqs.length + ') ===');
  // Print first 50 for reference
  needsFaqs.slice(0, 50).forEach(a => console.log(`${a.slug} | ${a.title} | ${a.artist} | ${a.faqCount}`));
  if (needsFaqs.length > 50) console.log('... and ' + (needsFaqs.length - 50) + ' more');

  // Save full list to file
  fs.writeFileSync('prisma/tier3-needs-faqs.json', JSON.stringify(needsFaqs, null, 2));
  console.log('\nFull list saved to prisma/tier3-needs-faqs.json');

  await prisma.$disconnect();
}
main();
