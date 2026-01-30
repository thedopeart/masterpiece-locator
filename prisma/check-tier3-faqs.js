const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const md = fs.readFileSync('ARTWORK-CHECKLIST.md', 'utf8');
  const parts = md.split('## Tier 3');
  if (parts.length < 2) { console.log('No Tier 3 section found'); return; }
  const tier3Section = parts[1].split('## Tier ')[0]; // up to next tier or end
  const slugs = [...tier3Section.matchAll(/\| DONE \| ([^ |]+)/g)].map(m => m[1]);

  let needsFaqs = 0, hasFaqs = 0, notFound = 0;
  for (const slug of slugs) {
    const a = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
    if (!a) { notFound++; continue; }
    if (a.faqs && Array.isArray(a.faqs) && a.faqs.length >= 4) { hasFaqs++; } else { needsFaqs++; }
  }
  console.log('Tier 3 total:', slugs.length);
  console.log('Already have 4+ FAQs:', hasFaqs);
  console.log('Need enriched FAQs:', needsFaqs);
  console.log('Not found in DB:', notFound);
  await prisma.$disconnect();
}
main();
