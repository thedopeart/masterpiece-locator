const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const md = fs.readFileSync('ARTWORK-CHECKLIST.md', 'utf8');
  const tier2Section = md.split('## Tier 2')[1].split('## Tier 3')[0];
  const slugs = [...tier2Section.matchAll(/\| DONE \| ([^ |]+)/g)].map(m => m[1]);

  let needsFaqs = 0, hasFaqs = 0, notFound = 0;
  for (const slug of slugs) {
    const a = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
    if (!a) { notFound++; continue; }
    if (a.faqs && Array.isArray(a.faqs) && a.faqs.length >= 4) {
      hasFaqs++;
    } else {
      needsFaqs++;
    }
  }
  console.log('Tier 2 total:', slugs.length);
  console.log('Already have 4+ FAQs:', hasFaqs);
  console.log('Need enriched FAQs:', needsFaqs);
  console.log('Not found in DB:', notFound);
  await prisma.$disconnect();
}
main();
