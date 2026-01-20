/**
 * Fix Broken Artist Images via Wikipedia/Commons
 *
 * This script finds portrait images for artists by searching Wikipedia and Commons.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (https://luxurywallart.com)';
const DELAY_MS = 300;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status === 200;
  } catch {
    return false;
  }
}

/**
 * Get artist portrait from Wikipedia
 */
async function getImageFromWikipedia(artistName) {
  try {
    // Search Wikipedia for the artist
    const searchParams = new URLSearchParams({
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: `${artistName} artist painter`,
      srlimit: '3'
    });

    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?${searchParams}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();

    if (!searchData.query?.search?.length) return null;

    // Try each search result
    for (const result of searchData.query.search) {
      const pageTitle = result.title;

      // Get images from this Wikipedia page
      const imageParams = new URLSearchParams({
        action: 'query',
        format: 'json',
        titles: pageTitle,
        prop: 'images',
        imlimit: '20'
      });

      const imageRes = await fetch(
        `https://en.wikipedia.org/w/api.php?${imageParams}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!imageRes.ok) continue;
      const imageData = await imageRes.json();

      const pages = Object.values(imageData.query?.pages || {});
      if (!pages.length || !pages[0].images) continue;

      // Find portrait images (usually .jpg, not logo/icon)
      for (const img of pages[0].images) {
        const imgTitle = img.title;

        // Skip common non-portrait images
        if (imgTitle.match(/logo|icon|flag|map|coat.*arms|commons-logo|wiki|question.*mark|signature|autograph/i)) continue;
        if (!imgTitle.match(/\.(jpg|jpeg|png)$/i)) continue;

        // Get the actual image URL from Commons
        const urlParams = new URLSearchParams({
          action: 'query',
          format: 'json',
          titles: imgTitle,
          prop: 'imageinfo',
          iiprop: 'url',
          iiurlwidth: '400'
        });

        const urlRes = await fetch(
          `https://commons.wikimedia.org/w/api.php?${urlParams}`,
          { headers: { 'User-Agent': USER_AGENT } }
        );

        if (!urlRes.ok) continue;
        const urlData = await urlRes.json();

        const urlPages = Object.values(urlData.query?.pages || {});
        const imageInfo = urlPages[0]?.imageinfo?.[0];

        if (imageInfo?.thumburl) {
          // Verify this URL works
          if (await testUrl(imageInfo.thumburl)) {
            return imageInfo.thumburl;
          }
        }
      }
    }
  } catch (err) {
    // Continue
  }

  return null;
}

/**
 * Search Commons directly for artist portrait
 */
async function searchCommonsPortrait(artistName) {
  const searchTerms = [
    `${artistName} portrait`,
    `${artistName} self-portrait`,
    `${artistName} painter`,
    artistName
  ];

  for (const searchTerm of searchTerms) {
    try {
      const params = new URLSearchParams({
        action: 'query',
        format: 'json',
        generator: 'search',
        gsrnamespace: '6',
        gsrsearch: searchTerm,
        gsrlimit: '10',
        prop: 'imageinfo',
        iiprop: 'url|mime',
        iiurlwidth: '400'
      });

      const res = await fetch(
        `https://commons.wikimedia.org/w/api.php?${params}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!res.ok) continue;
      const data = await res.json();

      if (!data.query?.pages) continue;

      const pages = Object.values(data.query.pages);
      for (const page of pages) {
        if (!page.imageinfo?.[0]) continue;
        const info = page.imageinfo[0];
        if (!info.mime?.startsWith('image/')) continue;

        // Skip non-portrait looking files
        const title = page.title?.toLowerCase() || '';
        if (title.includes('signature') || title.includes('autograph') || title.includes('logo')) continue;

        const url = info.thumburl || info.url;
        if (url && await testUrl(url)) {
          return url;
        }
      }
    } catch (err) {
      // Continue
    }
    await sleep(DELAY_MS / 2);
  }

  return null;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Artist Image Repair Script');
  console.log('='.repeat(60));

  // Get all artists and test which are broken
  const artists = await prisma.artist.findMany({
    where: { imageUrl: { not: null } },
    orderBy: { name: 'asc' }
  });

  console.log(`Testing ${artists.length} artist image URLs...`);

  const broken = [];
  for (const a of artists) {
    if (!(await testUrl(a.imageUrl))) {
      broken.push(a);
    }
  }

  console.log(`Found ${broken.length} broken URLs\n`);
  console.log('='.repeat(60));
  console.log('Attempting repairs...');
  console.log('='.repeat(60));

  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < broken.length; i++) {
    const artist = broken[i];

    console.log(`\n[${i + 1}/${broken.length}] ${artist.name}`);

    // Try Wikipedia first
    let newUrl = await getImageFromWikipedia(artist.name);
    await sleep(DELAY_MS);

    // If that fails, try direct Commons search
    if (!newUrl) {
      newUrl = await searchCommonsPortrait(artist.name);
    }

    if (newUrl) {
      await prisma.artist.update({
        where: { id: artist.id },
        data: { imageUrl: newUrl }
      });
      console.log(`  ✓ Fixed!`);
      fixed++;
    } else {
      console.log(`  ✗ Not found`);
      failed++;
    }

    // Progress update every 20
    if ((i + 1) % 20 === 0) {
      console.log(`\n--- Progress: ${fixed} fixed, ${failed} failed out of ${i + 1} ---\n`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('FINAL RESULTS');
  console.log('='.repeat(60));
  console.log(`Total broken: ${broken.length}`);
  console.log(`Fixed: ${fixed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Success rate: ${Math.round(fixed / broken.length * 100)}%`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
