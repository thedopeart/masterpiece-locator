/**
 * Fix Missing Portraits for Page 1 Artists
 *
 * Searches Wikipedia and Wikimedia Commons for portrait images
 * for artists on page 1 who are missing portraits.
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

async function getImageFromWikipedia(artistName) {
  try {
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

    for (const result of searchData.query.search) {
      const pageTitle = result.title;

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

      for (const img of pages[0].images) {
        const imgTitle = img.title;

        // Skip non-portrait images
        if (imgTitle.match(/logo|icon|flag|map|coat.*arms|commons-logo|wiki|question.*mark|signature|autograph/i)) continue;
        if (!imgTitle.match(/\.(jpg|jpeg|png)$/i)) continue;

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
          if (await testUrl(imageInfo.thumburl)) {
            return imageInfo.thumburl;
          }
        }
      }
    }
  } catch (err) {
    // Continue silently
  }

  return null;
}

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

        const title = page.title?.toLowerCase() || '';
        if (title.includes('signature') || title.includes('autograph') || title.includes('logo')) continue;

        const url = info.thumburl || info.url;
        if (url && await testUrl(url)) {
          return url;
        }
      }
    } catch (err) {
      // Continue silently
    }
    await sleep(DELAY_MS / 2);
  }

  return null;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Fix Missing Portraits for Page 1 Artists');
  console.log('='.repeat(60));

  // Get artists on page 1 who are missing portraits
  const page1Artists = await prisma.artist.findMany({
    where: { imageUrl: null },
    include: {
      _count: { select: { artworks: true } },
      artworks: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: 'asc' },
        select: { id: true, title: true, imageUrl: true }
      }
    },
    orderBy: [{ artworks: { _count: 'desc' } }, { name: 'asc' }],
    take: 50
  });

  // Filter to only those actually missing portraits
  const missingPortraits = page1Artists.filter(a => !a.imageUrl);

  console.log(`\nFound ${missingPortraits.length} artists on page 1 missing portraits:\n`);
  missingPortraits.forEach((a, i) => {
    console.log(`  ${i + 1}. ${a.name} (${a._count.artworks} artworks)`);
  });

  console.log('\n' + '='.repeat(60));
  console.log('Searching for portraits...');
  console.log('='.repeat(60) + '\n');

  let found = 0;
  let notFound = 0;

  for (const artist of missingPortraits) {
    console.log(`Processing: ${artist.name}`);

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
      console.log(`  ✓ Portrait found and saved!`);
      console.log(`  URL: ${newUrl.substring(0, 70)}...`);
      found++;
    } else {
      console.log(`  ✗ No portrait found`);
      if (artist.artworks[0]?.imageUrl) {
        console.log(`  → Will use artwork fallback: "${artist.artworks[0].title}"`);
      }
      notFound++;
    }
    console.log('');
  }

  console.log('='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));
  console.log(`Portraits found: ${found}`);
  console.log(`Using artwork fallback: ${notFound}`);
  console.log(`\nNote: Artists without portraits will display their artwork`);
  console.log(`with a "No Portrait Available" tag in the UI.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
