const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const artists = await prisma.artist.findMany({
    include: {
      Movement: { select: { slug: true, name: true } },
      Artwork: { select: { id: true } }
    },
    orderBy: { name: 'asc' }
  });

  // Check which ones have been properly optimized
  const results = artists.map(a => {
    const hasMovementLink = a.bioFull && (a.bioFull.includes('href="/movement') || a.bioFull.includes('href="/apps/masterpieces/movement'));
    const hasBioFull = a.bioFull && a.bioFull.length > 200;
    const hasFaqs = a.faqs && Array.isArray(a.faqs) && a.faqs.length >= 5;
    const isOptimized = hasMovementLink && hasBioFull && hasFaqs;
    const artworkCount = a.Artwork?.length || 0;

    // Priority tiers based on artwork count
    let tier;
    if (artworkCount >= 20) tier = 1;
    else if (artworkCount >= 5) tier = 2;
    else tier = 3;

    return {
      slug: a.slug,
      name: a.name,
      tier,
      artworkCount,
      nationality: a.nationality || '-',
      birthYear: a.birthYear || '-',
      deathYear: a.deathYear || '-',
      movements: a.Movement?.map(m => m.name).join(', ') || '-',
      status: isOptimized ? 'DONE' : 'TODO',
      wikipediaUrl: a.wikipediaUrl || ''
    };
  });

  // Sort by tier then by artwork count (descending)
  results.sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return b.artworkCount - a.artworkCount;
  });

  // Create checklist markdown
  let md = '# Artist Optimization Checklist\n\n';
  md += 'Track progress across workers. Mark as DONE when complete.\n\n';
  md += `**Last Updated:** ${new Date().toISOString().slice(0, 16)}\n\n`;

  const done = results.filter(r => r.status === 'DONE');
  const todo = results.filter(r => r.status === 'TODO');

  md += `**Progress:** ${done.length}/${results.length} complete\n\n`;
  md += '---\n\n';

  // Group by tier
  const tiers = [1, 2, 3];
  for (const tier of tiers) {
    const tierLabel = tier === 1 ? 'Tier 1 (20+ artworks)' : tier === 2 ? 'Tier 2 (5-19 artworks)' : 'Tier 3 (1-4 artworks)';
    const tierItems = results.filter(r => r.tier === tier);

    md += `## ${tierLabel}\n\n`;
    md += '| Status | Slug | Name | Works | Nationality | Years | Movements | Wikipedia |\n';
    md += '|--------|------|------|-------|-------------|-------|-----------|----------|\n';

    for (const item of tierItems) {
      const wikiLink = item.wikipediaUrl ? `[Link](${item.wikipediaUrl})` : '-';
      const years = item.birthYear !== '-' ? `${item.birthYear}-${item.deathYear}` : '-';
      md += `| ${item.status} | ${item.slug} | ${item.name} | ${item.artworkCount} | ${item.nationality} | ${years} | ${item.movements} | ${wikiLink} |\n`;
    }
    md += '\n';
  }

  fs.writeFileSync('ARTIST-CHECKLIST.md', md);
  console.log(`Checklist created: ${done.length}/${results.length} complete`);
  console.log('File: ARTIST-CHECKLIST.md');
}

main().catch(console.error).finally(() => prisma.$disconnect());
