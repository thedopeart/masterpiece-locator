/**
 * Fix ALL Broken Artist Portraits
 *
 * This script:
 * 1. Tests ALL artist image URLs in the database
 * 2. For broken URLs, sets imageUrl to null
 * 3. Frontend will then show artwork with "No Portrait Available" tag
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testUrl(url) {
  if (!url) return false;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: {
        'User-Agent': 'MasterpieceLocator/1.0'
      }
    });
    clearTimeout(timeoutId);
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  console.log('='.repeat(70));
  console.log('FIX ALL BROKEN ARTIST PORTRAITS');
  console.log('='.repeat(70));

  // Get all artists with image URLs
  const artists = await prisma.artist.findMany({
    where: { imageUrl: { not: null } },
    orderBy: { name: 'asc' },
    select: {
      id: true,
      slug: true,
      name: true,
      imageUrl: true,
      _count: { select: { artworks: true } }
    }
  });

  console.log(`\nTesting ${artists.length} artist image URLs...\n`);

  const broken = [];
  let tested = 0;

  for (const artist of artists) {
    tested++;
    const isValid = await testUrl(artist.imageUrl);

    if (!isValid) {
      broken.push(artist);
      console.log(`[${tested}/${artists.length}] ✗ BROKEN: ${artist.name}`);
    } else {
      // Show progress every 20 artists
      if (tested % 20 === 0) {
        console.log(`[${tested}/${artists.length}] Testing...`);
      }
    }
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`Found ${broken.length} artists with broken image URLs`);
  console.log('='.repeat(70));

  if (broken.length === 0) {
    console.log('\nNo broken URLs found! All images are working.');
    return;
  }

  console.log('\nClearing broken URLs (will use artwork as fallback)...\n');

  let cleared = 0;
  for (const artist of broken) {
    await prisma.artist.update({
      where: { id: artist.id },
      data: { imageUrl: null }
    });
    console.log(`  → Cleared: ${artist.name} (${artist._count.artworks} artwork${artist._count.artworks !== 1 ? 's' : ''})`);
    cleared++;
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total artists tested: ${artists.length}`);
  console.log(`Broken URLs found: ${broken.length}`);
  console.log(`URLs cleared: ${cleared}`);
  console.log('\nArtists with cleared URLs will now show their artwork');
  console.log('with a "No Portrait Available" tag on the frontend.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
