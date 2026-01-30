const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const md = fs.readFileSync('ARTWORK-CHECKLIST.md', 'utf8');
  const tier2Section = md.split('## Tier 2')[1].split('## Tier 3')[0];
  const rows = [...tier2Section.matchAll(/\| DONE \| ([^ |]+) \| ([^|]+)/g)];

  const needsFaqs = [];
  const notFound = [];

  for (const row of rows) {
    const slug = row[1];
    const title = row[2].trim();
    const a = await prisma.artwork.findUnique({ where: { slug }, select: { slug: true, faqs: true } });
    if (!a) {
      // Try fuzzy match
      const partial = slug.replace(/^(the-|a-|an-)/, '');
      const matches = await prisma.artwork.findMany({
        where: { slug: { contains: partial.substring(0, 15) } },
        select: { slug: true, title: true }
      });
      notFound.push({ checklistSlug: slug, title, dbMatches: matches.map(m => m.slug) });
      continue;
    }
    if (!a.faqs || !Array.isArray(a.faqs) || a.faqs.length < 4) {
      const faqCount = a.faqs && Array.isArray(a.faqs) ? a.faqs.length : 0;
      needsFaqs.push({ slug, title, faqCount });
    }
  }

  console.log('=== NEED FAQs (' + needsFaqs.length + ') ===');
  needsFaqs.forEach(a => console.log(`  ${a.slug} | ${a.title} | current: ${a.faqCount}`));

  console.log('\n=== NOT FOUND (' + notFound.length + ') ===');
  notFound.forEach(a => console.log(`  ${a.checklistSlug} | ${a.title} | possible: ${JSON.stringify(a.dbMatches)}`));

  await prisma.$disconnect();
}
main();
