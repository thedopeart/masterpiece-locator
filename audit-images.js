const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function auditImages() {
  console.log('=== Image Source Audit ===\n');

  // Total artworks
  const total = await prisma.artwork.count();
  console.log(`Total artworks: ${total}\n`);

  // Count by image source domain
  const allArtworks = await prisma.artwork.findMany({
    select: { imageUrl: true }
  });

  const sources = {
    'wikiart.org': 0,
    'wikimedia.org': 0,
    'metmuseum.org': 0,
    'rijksmuseum.nl': 0,
    'artic.edu': 0,
    'other': 0,
    'null/empty': 0
  };

  allArtworks.forEach(a => {
    if (!a.imageUrl) {
      sources['null/empty']++;
    } else if (a.imageUrl.includes('wikiart.org')) {
      sources['wikiart.org']++;
    } else if (a.imageUrl.includes('wikimedia.org')) {
      sources['wikimedia.org']++;
    } else if (a.imageUrl.includes('metmuseum.org')) {
      sources['metmuseum.org']++;
    } else if (a.imageUrl.includes('rijksmuseum.nl')) {
      sources['rijksmuseum.nl']++;
    } else if (a.imageUrl.includes('artic.edu')) {
      sources['artic.edu']++;
    } else {
      sources['other']++;
    }
  });

  console.log('Image Sources:');
  console.log('─────────────────────────────────');
  Object.entries(sources)
    .sort((a, b) => b[1] - a[1])
    .forEach(([source, count]) => {
      const pct = ((count / total) * 100).toFixed(1);
      const status = source === 'wikiart.org' ? '⚠️ ' :
                     source === 'null/empty' ? '❌ ' : '✅ ';
      console.log(`${status}${source.padEnd(20)} ${String(count).padStart(5)}  (${pct}%)`);
    });

  // WikiArt breakdown by museum
  console.log('\n\nWikiArt Images by Museum (top 20):');
  console.log('─────────────────────────────────────────');

  const wikiartByMuseum = await prisma.artwork.findMany({
    where: { imageUrl: { contains: 'wikiart.org' } },
    select: {
      Museum: { select: { name: true, slug: true } }
    }
  });

  const museumCounts = {};
  wikiartByMuseum.forEach(a => {
    const key = a.Museum?.name || 'Unknown/No Museum';
    museumCounts[key] = (museumCounts[key] || 0) + 1;
  });

  Object.entries(museumCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .forEach(([museum, count]) => {
      console.log(`  ${String(count).padStart(4)}  ${museum}`);
    });

  // WikiArt breakdown by artist (top 15)
  console.log('\n\nWikiArt Images by Artist (top 15):');
  console.log('─────────────────────────────────────────');

  const wikiartByArtist = await prisma.artwork.findMany({
    where: { imageUrl: { contains: 'wikiart.org' } },
    select: {
      Artist: { select: { name: true, slug: true } }
    }
  });

  const artistCounts = {};
  wikiartByArtist.forEach(a => {
    const key = a.Artist?.name || 'Unknown';
    artistCounts[key] = (artistCounts[key] || 0) + 1;
  });

  Object.entries(artistCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([artist, count]) => {
      console.log(`  ${String(count).padStart(4)}  ${artist}`);
    });

  // Sample some "other" URLs to see what they are
  const otherUrls = allArtworks
    .filter(a => a.imageUrl &&
      !a.imageUrl.includes('wikiart.org') &&
      !a.imageUrl.includes('wikimedia.org') &&
      !a.imageUrl.includes('metmuseum.org') &&
      !a.imageUrl.includes('rijksmuseum.nl') &&
      !a.imageUrl.includes('artic.edu'))
    .slice(0, 5);

  if (otherUrls.length > 0) {
    console.log('\n\nSample "other" URLs:');
    console.log('─────────────────────────────────────────');
    otherUrls.forEach(a => {
      const domain = new URL(a.imageUrl).hostname;
      console.log(`  ${domain}`);
    });
  }

  await prisma.$disconnect();
}

auditImages().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
