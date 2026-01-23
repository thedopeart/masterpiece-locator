/**
 * Fetch replacement images from Wikimedia Commons
 * Target: All remaining WikiArt images (~3,100+)
 * No API key required!
 *
 * This searches Wikimedia Commons for public domain artwork images.
 * Run in batches to avoid rate limiting.
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

// Parse command line args for batch processing
const args = process.argv.slice(2);
const BATCH_SIZE = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1]) || 100;
const OFFSET = parseInt(args.find(a => a.startsWith('--offset='))?.split('=')[1]) || 0;

async function searchWikimedia(title, artistName) {
  const cleanTitle = title.replace(/[^\w\s]/g, ' ').trim();
  const cleanArtist = artistName?.replace(/[^\w\s]/g, ' ').trim() || '';

  // Try different search strategies
  const queries = [
    `${cleanTitle} ${cleanArtist}`,           // Full search
    `${cleanTitle} painting`,                  // Title + painting
    cleanTitle                                 // Just title
  ];

  for (const query of queries) {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: `${query} filetype:bitmap`,
      srnamespace: '6',  // File namespace
      srlimit: '5',
      format: 'json',
      origin: '*'
    });

    try {
      const res = await fetch(searchUrl);
      if (!res.ok) continue;

      const data = await res.json();
      if (!data.query?.search?.length) continue;

      // Check each result for public domain license
      for (const item of data.query.search) {
        const imageInfo = await getImageInfo(item.title);
        if (imageInfo) {
          return imageInfo;
        }
        await delay(100);
      }
    } catch (e) {
      console.error(`  Search error: ${e.message}`);
    }

    await delay(200);
  }

  return null;
}

async function getImageInfo(fileTitle) {
  const infoUrl = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
    action: 'query',
    titles: fileTitle,
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
    format: 'json',
    origin: '*'
  });

  try {
    const res = await fetch(infoUrl);
    if (!res.ok) return null;

    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];
    if (!imageInfo?.url) return null;

    // Check license
    const license = imageInfo.extmetadata?.LicenseShortName?.value || '';
    const licenseUrl = imageInfo.extmetadata?.LicenseUrl?.value || '';

    const isPublicDomain =
      license.toLowerCase().includes('public domain') ||
      license.includes('CC0') ||
      license.includes('PD') ||
      licenseUrl.includes('publicdomain');

    if (!isPublicDomain) return null;

    // Skip very small images
    if (imageInfo.width < 400 || imageInfo.height < 400) return null;

    return {
      imageUrl: imageInfo.url,
      width: imageInfo.width,
      height: imageInfo.height,
      source: 'wikimedia-commons',
      sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileTitle)}`,
      license: license || 'Public Domain',
      fileTitle: fileTitle
    };
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('=== Wikimedia Commons Image Migration ===\n');
  console.log(`Batch size: ${BATCH_SIZE}, Offset: ${OFFSET}\n`);

  // Find all remaining WikiArt images
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikiart.org' }
    },
    include: {
      Artist: { select: { name: true } },
      Museum: { select: { name: true, slug: true } }
    },
    skip: OFFSET,
    take: BATCH_SIZE,
    orderBy: { title: 'asc' }
  });

  const totalRemaining = await prisma.artwork.count({
    where: { imageUrl: { contains: 'wikiart.org' } }
  });

  console.log(`Processing batch: ${OFFSET + 1} to ${OFFSET + artworks.length} of ${totalRemaining} total\n`);

  if (artworks.length === 0) {
    console.log('No artworks to process in this batch.');
    await prisma.$disconnect();
    return;
  }

  // Load existing results to append
  const resultsFile = path.join(OUTPUT_DIR, 'wikimedia-found.json');
  const notFoundFile = path.join(OUTPUT_DIR, 'wikimedia-not-found.json');

  let results = [];
  let notFound = [];

  if (fs.existsSync(resultsFile)) {
    results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
  }
  if (fs.existsSync(notFoundFile)) {
    notFound = JSON.parse(fs.readFileSync(notFoundFile, 'utf8'));
  }

  // Track already processed slugs
  const processedSlugs = new Set([
    ...results.map(r => r.slug),
    ...notFound.map(r => r.slug)
  ]);

  let found = 0;
  let skipped = 0;
  let notFoundCount = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${OFFSET + i + 1}/${totalRemaining}]`;

    // Skip if already processed
    if (processedSlugs.has(artwork.slug)) {
      console.log(`${progress} Skipping (already processed): ${artwork.title}`);
      skipped++;
      continue;
    }

    console.log(`${progress} Searching: ${artwork.title}`);

    const result = await searchWikimedia(artwork.title, artwork.Artist?.name);

    if (result) {
      results.push({
        id: artwork.id,
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.Artist?.name,
        museum: artwork.Museum?.name,
        oldImageUrl: artwork.imageUrl,
        newImage: result
      });
      console.log(`  ✓ Found: ${result.imageUrl.substring(0, 70)}...`);
      found++;
    } else {
      notFound.push({
        id: artwork.id,
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.Artist?.name,
        museum: artwork.Museum?.name,
        oldImageUrl: artwork.imageUrl
      });
      console.log(`  ✗ Not found`);
      notFoundCount++;
    }

    // Save progress every 10 items
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
      fs.writeFileSync(notFoundFile, JSON.stringify(notFound, null, 2));
    }

    // Rate limiting - be nice to Wikimedia
    await delay(500);
  }

  // Final save
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  fs.writeFileSync(notFoundFile, JSON.stringify(notFound, null, 2));

  console.log('\n=== Batch Results ===');
  console.log(`Found: ${found}`);
  console.log(`Not found: ${notFoundCount}`);
  console.log(`Skipped (already processed): ${skipped}`);
  console.log(`\nTotal in results file: ${results.length}`);
  console.log(`Total in not-found file: ${notFound.length}`);

  if (OFFSET + BATCH_SIZE < totalRemaining) {
    console.log(`\nNext batch command:`);
    console.log(`  node fetch-wikimedia.js --offset=${OFFSET + BATCH_SIZE} --batch=${BATCH_SIZE}`);
  } else {
    console.log(`\nAll batches complete!`);
  }

  console.log(`\nResults saved to scripts/migration/results/`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
