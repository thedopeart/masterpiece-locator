const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const museums = await prisma.museum.findMany({
    include: {
      _count: {
        select: { Artwork: true }
      }
    },
    orderBy: {
      Artwork: { _count: 'desc' }
    }
  });

  // Check which ones have been properly optimized (have 5+ FAQs)
  const results = museums.map(m => {
    const hasFaqs = m.faqs && Array.isArray(m.faqs) && m.faqs.length >= 5;
    const artworkCount = m._count.Artwork;

    // Determine tier based on artwork count
    let tier;
    if (artworkCount >= 50) {
      tier = 1;
    } else if (artworkCount >= 20) {
      tier = 2;
    } else {
      tier = 3;
    }

    return {
      slug: m.slug,
      name: m.name,
      city: m.city,
      country: m.country,
      artworkCount,
      tier,
      status: hasFaqs ? 'DONE' : 'TODO',
      faqCount: m.faqs ? m.faqs.length : 0
    };
  });

  // Create checklist markdown
  let md = '# Museum Optimization Checklist\n\n';
  md += 'Track progress across workers. Mark as DONE when complete (5+ FAQs).\n\n';
  md += `**Last Updated:** ${new Date().toISOString().slice(0, 16)}\n\n`;

  const done = results.filter(r => r.status === 'DONE');
  const todo = results.filter(r => r.status === 'TODO');

  md += `**Progress:** ${done.length}/${results.length} complete\n\n`;
  md += '---\n\n';

  // Group by tier
  const tiers = [1, 2, 3];
  const tierLabels = {
    1: 'Tier 1 (50+ artworks)',
    2: 'Tier 2 (20-49 artworks)',
    3: 'Tier 3 (1-19 artworks)'
  };

  for (const tier of tiers) {
    const tierItems = results.filter(r => r.tier === tier);
    if (tierItems.length === 0) continue;

    md += `## ${tierLabels[tier]}\n\n`;
    md += '| Status | Slug | Name | City | Country | Artworks | FAQs |\n';
    md += '|--------|------|------|------|---------|----------|------|\n';

    for (const item of tierItems) {
      md += `| ${item.status} | ${item.slug} | ${item.name} | ${item.city} | ${item.country} | ${item.artworkCount} | ${item.faqCount} |\n`;
    }
    md += '\n';
  }

  fs.writeFileSync('MUSEUM-CHECKLIST.md', md);
  console.log(`Checklist created: ${done.length}/${results.length} complete`);
  console.log(`Tier 1: ${results.filter(r => r.tier === 1).length} museums (50+ artworks)`);
  console.log(`Tier 2: ${results.filter(r => r.tier === 2).length} museums (20-49 artworks)`);
  console.log(`Tier 3: ${results.filter(r => r.tier === 3).length} museums (1-19 artworks)`);
  console.log('File: MUSEUM-CHECKLIST.md');
}

main().catch(console.error).finally(() => prisma.$disconnect());
