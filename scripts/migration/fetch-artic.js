/**
 * Fetch replacement images from Art Institute of Chicago API
 * Target: 80 WikiArt images at Art Institute
 * API Docs: https://api.artic.edu/docs/
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

async function searchArtic(title, artistName) {
  const cleanTitle = title.replace(/[^\w\s]/g, ' ').trim();
  const cleanArtist = artistName?.replace(/[^\w\s]/g, ' ').trim() || '';
  const query = `${cleanTitle} ${cleanArtist}`.trim();

  const url = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&fields=id,title,artist_display,image_id,is_public_domain&limit=5`;

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

    // Find first public domain result with image
    for (const item of data.data) {
      if (item.is_public_domain && item.image_id) {
        // IIIF image URLs - multiple sizes available
        const baseUrl = `https://www.artic.edu/iiif/2/${item.image_id}`;

        return {
          imageUrl: `${baseUrl}/full/843,/0/default.jpg`,        // Medium (843px)
          imageUrlLarge: `${baseUrl}/full/1686,/0/default.jpg`,  // Large (1686px)
          imageUrlFull: `${baseUrl}/full/full/0/default.jpg`,    // Full size
          articId: item.id,
          title: item.title,
          artist: item.artist_display,
          source: 'art-institute-chicago',
          sourceUrl: `https://www.artic.edu/artworks/${item.id}`,
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
  console.log('=== Art Institute of Chicago Image Migration ===\n');

  // Find WikiArt images at Art Institute
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikiart.org' },
      Museum: { slug: { contains: 'art-institute' } }
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, slug: true } }
    }
  });

  console.log(`Found ${artworks.length} WikiArt images at Art Institute of Chicago\n`);

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

    const result = await searchArtic(artwork.title, artwork.Artist?.name);

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
    path.join(OUTPUT_DIR, 'artic-found.json'),
    JSON.stringify(results, null, 2)
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'artic-not-found.json'),
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
