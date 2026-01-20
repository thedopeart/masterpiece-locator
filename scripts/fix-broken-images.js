/**
 * Fix Broken Wikimedia Image URLs
 *
 * This script attempts to find updated URLs for artworks with broken Wikimedia images.
 * It uses multiple strategies:
 * 1. Wikimedia Commons API search by artwork title
 * 2. Wikidata API to get image from Wikidata ID (if available)
 * 3. Search by artist name + artwork title
 *
 * Usage: node scripts/fix-broken-images.js [--dry-run] [--limit=N]
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Parse command line arguments
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const limitArg = args.find(a => a.startsWith('--limit='));
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1]) : null;

// Rate limiting - Wikimedia allows ~200 requests/min for API
const DELAY_MS = 350;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// User agent required by Wikimedia API policy
const USER_AGENT = 'MasterpieceLocator/1.0 (https://luxurywallart.com; contact@luxurywallart.com)';

/**
 * Test if a URL returns 200
 */
async function testUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status === 200;
  } catch {
    return false;
  }
}

/**
 * Search Wikimedia Commons for an image by title
 */
async function searchWikimediaCommons(searchTerm, limit = 10) {
  try {
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      generator: 'search',
      gsrnamespace: '6', // File namespace
      gsrsearch: searchTerm,
      gsrlimit: String(limit),
      prop: 'imageinfo',
      iiprop: 'url|size|mime',
      iiurlwidth: '800'
    });

    const res = await fetch(
      `https://commons.wikimedia.org/w/api.php?${params}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.query?.pages) return null;

    // Get the first valid image result
    const pages = Object.values(data.query.pages);
    for (const page of pages) {
      if (page.imageinfo?.[0]) {
        const info = page.imageinfo[0];
        // Skip non-images
        if (!info.mime?.startsWith('image/')) continue;
        // Prefer thumburl if available, otherwise use full URL
        const url = info.thumburl || info.url;
        // Verify it's an image
        if (url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          return url;
        }
      }
    }
    return null;
  } catch (err) {
    console.error(`  Commons search error: ${err.message}`);
    return null;
  }
}

/**
 * Try to fix the existing URL by checking common Wikimedia URL patterns
 */
async function tryFixExistingUrl(oldUrl) {
  if (!oldUrl) return null;

  try {
    // Extract filename from URL
    const match = oldUrl.match(/\/([^\/]+\.(jpg|jpeg|png|gif))$/i);
    if (!match) return null;

    const filename = decodeURIComponent(match[1].replace(/_/g, ' '));

    // Search for this exact filename on Commons
    const params = new URLSearchParams({
      action: 'query',
      format: 'json',
      titles: `File:${filename}`,
      prop: 'imageinfo',
      iiprop: 'url',
      iiurlwidth: '800'
    });

    const res = await fetch(
      `https://commons.wikimedia.org/w/api.php?${params}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const pages = Object.values(data.query?.pages || {});
    const imageInfo = pages[0]?.imageinfo?.[0];

    if (imageInfo?.thumburl || imageInfo?.url) {
      return imageInfo.thumburl || imageInfo.url;
    }
    return null;
  } catch (err) {
    return null;
  }
}

/**
 * Get image URL from Wikidata ID
 */
async function getImageFromWikidata(wikidataId) {
  if (!wikidataId) return null;

  try {
    const params = new URLSearchParams({
      action: 'wbgetentities',
      format: 'json',
      ids: wikidataId,
      props: 'claims'
    });

    const res = await fetch(
      `https://www.wikidata.org/w/api.php?${params}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const entity = data.entities?.[wikidataId];
    if (!entity) return null;

    // P18 is the "image" property in Wikidata
    const imageClaim = entity.claims?.P18?.[0];
    if (!imageClaim?.mainsnak?.datavalue?.value) return null;

    const filename = imageClaim.mainsnak.datavalue.value;
    // Convert filename to Commons URL
    const encodedFilename = encodeURIComponent(filename.replace(/ /g, '_'));

    // Get the actual URL via the API
    const infoParams = new URLSearchParams({
      action: 'query',
      format: 'json',
      titles: `File:${filename}`,
      prop: 'imageinfo',
      iiprop: 'url',
      iiurlwidth: '800'
    });

    const infoRes = await fetch(
      `https://commons.wikimedia.org/w/api.php?${infoParams}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!infoRes.ok) return null;

    const infoData = await infoRes.json();
    const pages = Object.values(infoData.query?.pages || {});
    const imageInfo = pages[0]?.imageinfo?.[0];

    return imageInfo?.thumburl || imageInfo?.url || null;
  } catch (err) {
    console.error(`  Wikidata error: ${err.message}`);
    return null;
  }
}

/**
 * Try multiple search strategies to find an image
 */
async function findImageUrl(artwork) {
  let url = null;

  // Strategy 1: Try to fix the existing URL (maybe just moved)
  console.log(`  Trying to fix existing URL...`);
  url = await tryFixExistingUrl(artwork.imageUrl);
  if (url && await testUrl(url)) {
    console.log(`  ✓ Found via URL fix`);
    return { url, source: 'url-fix' };
  }
  await sleep(DELAY_MS);

  // Strategy 2: Try Wikidata ID (most reliable)
  if (artwork.wikidataId) {
    console.log(`  Trying Wikidata ID: ${artwork.wikidataId}`);
    url = await getImageFromWikidata(artwork.wikidataId);
    if (url && await testUrl(url)) {
      console.log(`  ✓ Found via Wikidata`);
      return { url, source: 'wikidata' };
    }
    await sleep(DELAY_MS);
  }

  // Strategy 3: Search with artist name + painting (most specific)
  if (artwork.artist?.name) {
    const searchTerm = `"${artwork.title}" ${artwork.artist.name} painting`;
    console.log(`  Searching Commons: ${searchTerm}`);
    url = await searchWikimediaCommons(searchTerm);
    if (url && await testUrl(url)) {
      console.log(`  ✓ Found via Commons search (quoted title + artist)`);
      return { url, source: 'commons-quoted' };
    }
    await sleep(DELAY_MS);
  }

  // Strategy 4: Search Commons by artwork title + painting
  console.log(`  Searching Commons: "${artwork.title} painting"`);
  url = await searchWikimediaCommons(`${artwork.title} painting`);
  if (url && await testUrl(url)) {
    console.log(`  ✓ Found via Commons search (title + painting)`);
    return { url, source: 'commons-title' };
  }
  await sleep(DELAY_MS);

  // Strategy 5: Search with just artist name + title
  if (artwork.artist?.name) {
    const searchTerm = `${artwork.artist.name} ${artwork.title}`;
    console.log(`  Searching Commons: "${searchTerm}"`);
    url = await searchWikimediaCommons(searchTerm);
    if (url && await testUrl(url)) {
      console.log(`  ✓ Found via Commons search (artist+title)`);
      return { url, source: 'commons-artist-title' };
    }
    await sleep(DELAY_MS);
  }

  // Strategy 6: Try simplified title (remove subtitles)
  const simplifiedTitle = artwork.title.split(/[:(–\-,]/)[0].trim();
  if (simplifiedTitle !== artwork.title && simplifiedTitle.length > 3) {
    const searchTerm = artwork.artist?.name
      ? `${artwork.artist.name} ${simplifiedTitle}`
      : simplifiedTitle;
    console.log(`  Searching Commons: "${searchTerm}"`);
    url = await searchWikimediaCommons(searchTerm);
    if (url && await testUrl(url)) {
      console.log(`  ✓ Found via Commons search (simplified)`);
      return { url, source: 'commons-simplified' };
    }
    await sleep(DELAY_MS);
  }

  // Strategy 7: Just the title with more results
  console.log(`  Searching Commons (broad): "${artwork.title}"`);
  url = await searchWikimediaCommons(artwork.title, 20);
  if (url && await testUrl(url)) {
    console.log(`  ✓ Found via Commons search (broad)`);
    return { url, source: 'commons-broad' };
  }

  return null;
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Broken Image URL Repair Script');
  console.log('='.repeat(60));
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (no database updates)' : 'LIVE (will update database)'}`);
  if (LIMIT) console.log(`Limit: ${LIMIT} artworks`);
  console.log('');

  // Get all artworks with URLs
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    include: { artist: { select: { name: true } } },
    orderBy: { title: 'asc' }
  });

  console.log(`Testing ${artworks.length} artwork URLs...\n`);

  // Find broken URLs
  const broken = [];
  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const isWorking = await testUrl(artwork.imageUrl);

    if (!isWorking) {
      broken.push(artwork);
    }

    // Progress indicator
    if ((i + 1) % 50 === 0) {
      console.log(`Checked ${i + 1}/${artworks.length}... (${broken.length} broken so far)`);
    }
  }

  console.log(`\nFound ${broken.length} broken URLs\n`);
  console.log('='.repeat(60));
  console.log('Attempting to find replacement URLs...');
  console.log('='.repeat(60));
  console.log('');

  // Apply limit if specified
  const toProcess = LIMIT ? broken.slice(0, LIMIT) : broken;

  // Track results
  const results = {
    fixed: [],
    notFound: [],
    errors: []
  };

  for (let i = 0; i < toProcess.length; i++) {
    const artwork = toProcess[i];
    console.log(`[${i + 1}/${toProcess.length}] ${artwork.title}`);
    console.log(`  Artist: ${artwork.artist?.name || 'Unknown'}`);
    console.log(`  Old URL: ${artwork.imageUrl.substring(0, 60)}...`);

    try {
      const result = await findImageUrl(artwork);

      if (result) {
        console.log(`  New URL: ${result.url.substring(0, 60)}...`);

        if (!DRY_RUN) {
          await prisma.artwork.update({
            where: { id: artwork.id },
            data: { imageUrl: result.url }
          });
          console.log(`  ✓ Database updated`);
        } else {
          console.log(`  ✓ Would update (dry run)`);
        }

        results.fixed.push({
          title: artwork.title,
          oldUrl: artwork.imageUrl,
          newUrl: result.url,
          source: result.source
        });
      } else {
        console.log(`  ✗ No replacement found`);
        results.notFound.push({
          title: artwork.title,
          artist: artwork.artist?.name,
          wikidataId: artwork.wikidataId
        });
      }
    } catch (err) {
      console.log(`  ✗ Error: ${err.message}`);
      results.errors.push({
        title: artwork.title,
        error: err.message
      });
    }

    console.log('');
  }

  // Print summary
  console.log('='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total broken: ${broken.length}`);
  console.log(`Processed: ${toProcess.length}`);
  console.log(`Fixed: ${results.fixed.length}`);
  console.log(`Not found: ${results.notFound.length}`);
  console.log(`Errors: ${results.errors.length}`);
  console.log('');

  if (results.fixed.length > 0) {
    console.log('Fixed artworks:');
    results.fixed.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.title} (via ${r.source})`);
    });
    console.log('');
  }

  if (results.notFound.length > 0 && results.notFound.length <= 20) {
    console.log('Could not find replacements for:');
    results.notFound.forEach((r, i) => {
      console.log(`  ${i + 1}. ${r.title} - ${r.artist || 'Unknown artist'}`);
    });
    console.log('');
  }

  // Save detailed results to file
  const fs = require('fs');
  const resultsPath = './scripts/image-repair-results.json';
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`Detailed results saved to: ${resultsPath}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
