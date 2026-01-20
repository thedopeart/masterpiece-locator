/**
 * Find Valid Portraits for Page 4 Artists
 *
 * Attempts to find portrait images from Wikipedia/Commons for artists
 * who currently have no portrait set.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (https://luxurywallart.com)';
const DELAY_MS = 500;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function testUrl(url: string): Promise<boolean> {
  if (!url) return false;
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
async function getImageFromWikipedia(artistName: string): Promise<string | null> {
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

      // Get page info with image
      const imageParams = new URLSearchParams({
        action: 'query',
        format: 'json',
        titles: pageTitle,
        prop: 'pageimages|info',
        pithumbsize: '440',
        inprop: 'url'
      });

      const imageRes = await fetch(
        `https://en.wikipedia.org/w/api.php?${imageParams}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!imageRes.ok) continue;
      const imageData = await imageRes.json();

      const pages = Object.values(imageData.query?.pages || {}) as any[];
      if (!pages.length) continue;

      const page = pages[0];
      if (page.thumbnail?.source) {
        // Verify this URL works
        if (await testUrl(page.thumbnail.source)) {
          console.log(`    Found via Wikipedia: ${pageTitle}`);
          return page.thumbnail.source;
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
async function searchCommonsPortrait(artistName: string): Promise<string | null> {
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
        iiurlwidth: '440'
      });

      const res = await fetch(
        `https://commons.wikimedia.org/w/api.php?${params}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!res.ok) continue;
      const data = await res.json();

      if (!data.query?.pages) continue;

      const pages = Object.values(data.query.pages) as any[];
      for (const page of pages) {
        if (!page.imageinfo?.[0]) continue;
        const info = page.imageinfo[0];
        if (!info.mime?.startsWith('image/')) continue;

        // Skip non-portrait looking files
        const title = page.title?.toLowerCase() || '';
        if (title.includes('signature') || title.includes('autograph') || title.includes('logo')) continue;
        if (title.includes('painting') || title.includes('landscape') || title.includes('still life')) continue;

        const url = info.thumburl || info.url;
        if (url && await testUrl(url)) {
          console.log(`    Found via Commons: ${page.title}`);
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

// Target artists who need portraits (from page 1)
const targetArtists = [
  'andre-derain',
  'john-singer-sargent',
  'john-william-waterhouse',
  'titian',
  'vilhelm-hammershoi',
  'artemisia-gentileschi',
  'camille-pissarro',
  'canaletto',
  'caravaggio',
  'childe-hassam',
  'claude-lorrain',
  'dante-gabriel-rossetti',
  'edmund-blair-leighton',
  'francois-boucher',
  'frank-dicksee',
  'frederic-edwin-church',
  'gabriel-metsu',
  'george-bellows',
  'georges-de-la-tour',
  'giovanni-bellini',
  'gustave-caillebotte',
  'hans-memling',
  'henri-fantin-latour'
];

async function main() {
  console.log('='.repeat(60));
  console.log('Finding Valid Portraits for Page 4 Artists');
  console.log('='.repeat(60));

  let found = 0;
  let notFound = 0;

  for (const slug of targetArtists) {
    const artist = await prisma.artist.findUnique({
      where: { slug },
      select: { id: true, name: true, imageUrl: true, slug: true }
    });

    if (!artist) {
      console.log(`\n✗ Not found in DB: ${slug}`);
      continue;
    }

    // Skip if already has a valid portrait
    if (artist.imageUrl && await testUrl(artist.imageUrl)) {
      console.log(`\n✓ ${artist.name} already has valid portrait`);
      found++;
      continue;
    }

    console.log(`\nSearching for: ${artist.name}`);

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
      console.log(`  ✓ Updated ${artist.name} with new portrait`);
      found++;
    } else {
      console.log(`  ○ No portrait found - will use artwork fallback`);
      notFound++;
    }

    await sleep(DELAY_MS);
  }

  console.log('\n' + '='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));
  console.log(`Found portraits: ${found}`);
  console.log(`Using artwork fallback: ${notFound}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
