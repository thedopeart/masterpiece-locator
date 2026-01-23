/**
 * Fetch replacement images from Rijksmuseum API
 * Target: 47 WikiArt images at Rijksmuseum
 * API Docs: https://data.rijksmuseum.nl/object-metadata/api/
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Get free API key at: https://data.rijksmuseum.nl/object-metadata/api/
// Add to .env: RIJKSMUSEUM_API_KEY=your-key-here
const API_KEY = process.env.RIJKSMUSEUM_API_KEY;

const delay = (ms) => new Promise(r => setTimeout(r, ms));

const OUTPUT_DIR = path.join(__dirname, 'results');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function searchRijksmuseum(title, artistName) {
  if (!API_KEY) {
    console.error('ERROR: RIJKSMUSEUM_API_KEY not set in environment');
    process.exit(1);
  }

  // Clean search terms
  const cleanTitle = title.replace(/[^\w\s]/g, ' ').trim();
  const cleanArtist = artistName?.replace(/[^\w\s]/g, ' ').trim() || '';
  const query = `${cleanTitle} ${cleanArtist}`.trim();

  const url = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&q=${encodeURIComponent(query)}&imgonly=true&ps=5`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  API error: ${res.status}`);
      return null;
    }

    const data = await res.json();

    if (!data.artObjects || data.artObjects.length === 0) {
      return null;
    }

    // Find best match (first with image)
    for (const item of data.artObjects) {
      if (item.webImage && item.webImage.url) {
        return {
          imageUrl: item.webImage.url,
          objectNumber: item.objectNumber,
          title: item.title,
          artist: item.principalOrFirstMaker,
          source: 'rijksmuseum',
          sourceUrl: item.links?.web || `https://www.rijksmuseum.nl/en/collection/${item.objectNumber}`,
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
  console.log('=== Rijksmuseum Image Migration ===\n');

  // Find WikiArt images at Rijksmuseum
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikiart.org' },
      Museum: { slug: { contains: 'rijksmuseum' } }
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, slug: true } }
    }
  });

  console.log(`Found ${artworks.length} WikiArt images at Rijksmuseum\n`);

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

    const result = await searchRijksmuseum(artwork.title, artwork.Artist?.name);

    if (result) {
      results.push({
        id: artwork.id,
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.Artist?.name,
        oldImageUrl: artwork.imageUrl,
        newImage: result
      });
      console.log(`  ✓ Found: ${result.imageUrl.substring(0, 60)}...`);
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

    // Rate limiting - Rijksmuseum recommends 10 req/min for free tier
    await delay(300);
  }

  // Save results
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'rijksmuseum-found.json'),
    JSON.stringify(results, null, 2)
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'rijksmuseum-not-found.json'),
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
