/**
 * Fetch replacement images from Cleveland Museum of Art API
 * Target: 49 WikiArt images at Cleveland Museum
 * API Docs: https://openaccess-api.clevelandart.org/
 * No API key required!
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

const OUTPUT_DIR = path.join(__dirname, 'results');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function searchCleveland(title, artistName) {
  const cleanTitle = title.replace(/[^\\w\\s]/g, ' ').trim();
  const cleanArtist = artistName?.replace(/[^\\w\\s]/g, ' ').trim() || '';
  const query = `${cleanTitle} ${cleanArtist}`.trim();

  const url = `https://openaccess-api.clevelandart.org/api/artworks?q=${encodeURIComponent(query)}&has_image=1&limit=5`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  API error: ${res.status}`);
      return null;
    }

    const data = await res.json();

    if (!data.data || data.data.length === 0) {
      return null;
    }

    // Find first result with CC0 image
    for (const item of data.data) {
      // Cleveland uses share_license_status for CC0 works
      if (item.images && item.images.web && item.share_license_status === 'CC0') {
        return {
          imageUrl: item.images.web.url,
          imageUrlFull: item.images.full?.url || item.images.web.url,
          clevelandId: item.id,
          title: item.title,
          artist: item.creators?.[0]?.description || 'Unknown',
          source: 'cleveland-museum-of-art',
          sourceUrl: `https://www.clevelandart.org/art/${item.id}`,
          license: 'CC0'
        };
      }
    }

    return null;
  } catch (e) {
    console.error(`  Fetch error: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Cleveland Museum of Art Image Migration ===\n');

  // Find WikiArt images at Cleveland Museum
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikiart.org' },
      Museum: { slug: { contains: 'cleveland' } }
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, slug: true } }
    }
  });

  console.log(`Found ${artworks.length} WikiArt images at Cleveland Museum of Art\n`);

  if (artworks.length === 0) {
    console.log('No artworks to process.');
    await prisma.$disconnect();
    return;
  }

  const results = [];
  const notFound = [];

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${artworks.length}]`;

    console.log(`${progress} Searching: ${artwork.title}`);

    const result = await searchCleveland(artwork.title, artwork.Artist?.name);

    if (result) {
      results.push({
        id: artwork.id,
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.Artist?.name,
        oldImageUrl: artwork.imageUrl,
        newImage: result
      });
      console.log(`  ✓ Found: ${result.sourceUrl}`);
    } else {
      notFound.push({
        id: artwork.id,
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.Artist?.name,
        oldImageUrl: artwork.imageUrl
      });
      console.log(`  ✗ Not found`);
    }

    // Rate limiting
    await delay(200);
  }

  // Save results
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'cleveland-found.json'),
    JSON.stringify(results, null, 2)
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'cleveland-not-found.json'),
    JSON.stringify(notFound, null, 2)
  );

  console.log('\n=== Results ===');
  console.log(`Found: ${results.length}`);
  console.log(`Not found: ${notFound.length}`);
  console.log(`\nResults saved to scripts/migration/results/`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
