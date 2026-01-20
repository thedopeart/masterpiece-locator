const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    include: {
      Artist: { select: { slug: true, name: true } },
      Museum: { select: { slug: true, name: true } }
    },
    orderBy: [
      { searchVolumeTier: 'asc' },
      { title: 'asc' }
    ]
  });

  // Check which ones have been properly optimized (have artist links in description)
  const results = artworks.map(a => {
    const hasArtistLink = a.description && a.description.includes('href="/artist');
    const hasFaqs = a.faqs && Array.isArray(a.faqs) && a.faqs.length >= 2;
    const isOptimized = hasArtistLink && hasFaqs;

    return {
      slug: a.slug,
      title: a.title,
      tier: a.searchVolumeTier,
      artist: a.Artist?.name || 'Unknown',
      museum: a.Museum?.name || 'Unknown',
      status: isOptimized ? 'DONE' : 'TODO',
      wikipediaUrl: a.wikipediaUrl || ''
    };
  });

  // Create checklist markdown
  let md = '# Artwork Optimization Checklist\n\n';
  md += 'Track progress across workers. Mark as DONE when complete.\n\n';
  md += `**Last Updated:** ${new Date().toISOString().slice(0, 16)}\n\n`;

  const done = results.filter(r => r.status === 'DONE');
  const todo = results.filter(r => r.status === 'TODO');

  md += `**Progress:** ${done.length}/${results.length} complete\n\n`;
  md += '---\n\n';

  // Group by tier
  const tiers = [1, 2, 3];
  for (const tier of tiers) {
    const tierLabel = tier === 1 ? 'Tier 1 (High Priority)' : tier === 2 ? 'Tier 2 (Medium Priority)' : 'Tier 3 (Lower Priority)';
    const tierItems = results.filter(r => r.tier === tier);

    md += `## ${tierLabel}\n\n`;
    md += '| Status | Slug | Title | Artist | Museum | Wikipedia |\n';
    md += '|--------|------|-------|--------|--------|----------|\n';

    for (const item of tierItems) {
      const wikiLink = item.wikipediaUrl ? `[Link](${item.wikipediaUrl})` : '-';
      md += `| ${item.status} | ${item.slug} | ${item.title} | ${item.artist} | ${item.museum} | ${wikiLink} |\n`;
    }
    md += '\n';
  }

  fs.writeFileSync('ARTWORK-CHECKLIST.md', md);
  console.log(`Checklist created: ${done.length}/${results.length} complete`);
  console.log('File: ARTWORK-CHECKLIST.md');
}

main().catch(console.error).finally(() => prisma.$disconnect());
