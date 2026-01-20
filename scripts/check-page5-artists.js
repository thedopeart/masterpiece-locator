/**
 * Check artists on page 5 (artists 201-250) for missing portraits
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testUrl(url) {
  if (!url) return false;
  try {
    const res = await fetch(url, { method: 'HEAD', timeout: 5000 });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  // Get artists 201-250 (page 5, assuming 50 per page)
  const artists = await prisma.artist.findMany({
    orderBy: { name: 'asc' },
    skip: 200,
    take: 50,
    include: {
      artworks: {
        take: 1,
        select: { imageUrl: true, title: true }
      }
    }
  });

  console.log(`\n${'='.repeat(70)}`);
  console.log('PAGE 5 ARTISTS (201-250) - Missing Portrait Analysis');
  console.log('='.repeat(70));
  console.log(`\nTotal artists on page 5: ${artists.length}\n`);

  const missingPortraits = [];

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const hasImage = artist.imageUrl && await testUrl(artist.imageUrl);

    if (!hasImage) {
      const artworkUrl = artist.artworks[0]?.imageUrl || null;
      const artworkTitle = artist.artworks[0]?.title || 'No artwork';
      missingPortraits.push({
        index: 201 + i,
        name: artist.name,
        slug: artist.slug,
        currentUrl: artist.imageUrl || '(null)',
        artworkUrl,
        artworkTitle
      });
    }
  }

  console.log(`Artists with MISSING or BROKEN portraits: ${missingPortraits.length}\n`);
  console.log('-'.repeat(70));

  for (const artist of missingPortraits) {
    console.log(`\n[${artist.index}] ${artist.name}`);
    console.log(`    Slug: ${artist.slug}`);
    console.log(`    Current URL: ${artist.currentUrl.substring(0, 60)}...`);
    console.log(`    Has Artwork: ${artist.artworkUrl ? 'YES - ' + artist.artworkTitle : 'NO'}`);
  }

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total on page 5: ${artists.length}`);
  console.log(`Missing portraits: ${missingPortraits.length}`);
  console.log(`With artwork available: ${missingPortraits.filter(a => a.artworkUrl).length}`);

  // Output slugs for easy copy
  console.log('\n\nSLUGS FOR SCRIPT:');
  console.log(missingPortraits.map(a => `'${a.slug}'`).join(',\n'));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
