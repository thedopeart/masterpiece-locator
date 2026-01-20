/**
 * Find portraits for page 3 artists without images
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const USER_AGENT = 'MasterpieceLocator/1.0 (https://luxurywallart.com)';
const DELAY_MS = 500;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function testUrl(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function searchWikipediaPortrait(artistName: string): Promise<{ url: string; title: string } | null> {
  try {
    // Search Wikipedia for the artist
    const searchParams = new URLSearchParams({
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: `${artistName} artist painter`,
      srlimit: '5'
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
      console.log(`  Wikipedia page: "${pageTitle}"`);

      // Get images from this Wikipedia page
      const imageParams = new URLSearchParams({
        action: 'query',
        format: 'json',
        titles: pageTitle,
        prop: 'images',
        imlimit: '30'
      });

      const imageRes = await fetch(
        `https://en.wikipedia.org/w/api.php?${imageParams}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!imageRes.ok) continue;
      const imageData = await imageRes.json();

      const pages = Object.values(imageData.query?.pages || {}) as any[];
      if (!pages.length || !pages[0].images) continue;

      // Find portrait images
      const portraitCandidates: string[] = [];
      for (const img of pages[0].images) {
        const imgTitle = img.title as string;
        // Skip non-portrait images
        if (imgTitle.match(/logo|icon|flag|map|coat.*arms|commons-logo|wiki|question.*mark|signature|autograph|edit-lapis|padlock|disambiguation|text-x|symbol/i)) continue;
        if (!imgTitle.match(/\.(jpg|jpeg|png)$/i)) continue;

        // Prioritize images with portrait keywords
        const lowerTitle = imgTitle.toLowerCase();
        const artistFirstName = artistName.toLowerCase().split(' ')[0];

        if (lowerTitle.includes('portrait') ||
            lowerTitle.includes('self-portrait') ||
            lowerTitle.includes('selfportrait') ||
            lowerTitle.includes(artistFirstName)) {
          portraitCandidates.unshift(imgTitle);
        } else {
          portraitCandidates.push(imgTitle);
        }
      }

      console.log(`  Found ${portraitCandidates.length} candidate images`);

      if (portraitCandidates.length > 0) {
        // Get URL for candidates
        for (const candidate of portraitCandidates.slice(0, 5)) {
          console.log(`    Checking: ${candidate.substring(0, 60)}...`);

          const urlParams = new URLSearchParams({
            action: 'query',
            format: 'json',
            titles: candidate,
            prop: 'imageinfo',
            iiprop: 'url',
            iiurlwidth: '440'
          });

          const urlRes = await fetch(
            `https://commons.wikimedia.org/w/api.php?${urlParams}`,
            { headers: { 'User-Agent': USER_AGENT } }
          );

          if (!urlRes.ok) continue;
          const urlData = await urlRes.json();

          const urlPages = Object.values(urlData.query?.pages || {}) as any[];
          const imageInfo = urlPages[0]?.imageinfo?.[0];

          if (imageInfo?.thumburl) {
            // Test if URL works
            const works = await testUrl(imageInfo.thumburl);
            if (works) {
              return { url: imageInfo.thumburl, title: candidate };
            }
          }

          await sleep(100);
        }
      }

      await sleep(DELAY_MS);
    }
  } catch (err: any) {
    console.log(`  Error: ${err.message}`);
  }

  return null;
}

async function searchCommonsDirectly(artistName: string): Promise<string | null> {
  const searchTerms = [
    `${artistName} portrait`,
    `${artistName} self-portrait`,
    artistName
  ];

  for (const searchTerm of searchTerms) {
    try {
      console.log(`  Searching Commons for: "${searchTerm}"`);

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

        const url = info.thumburl || info.url;
        if (url && await testUrl(url)) {
          console.log(`    Found: ${page.title}`);
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
  console.log('Finding portraits for Page 3 artists');
  console.log('='.repeat(60));

  // Directly get page 3 artists without portraits
  const withoutPortrait = await prisma.artist.findMany({
    where: {
      imageUrl: null,
      slug: { in: ['cimabue', 'duccio', 'emanuel-de-witte'] }
    },
    include: {
      _count: { select: { artworks: true } },
      artworks: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: 'asc' },
        select: { imageUrl: true, title: true },
      },
    },
  });
  console.log(`\nFound ${withoutPortrait.length} artists on page 3 without portraits:\n`);

  const results: { slug: string; name: string; url: string | null; hasArtwork: boolean }[] = [];

  for (const artist of withoutPortrait) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`${artist.name} (${artist.slug})`);
    console.log(`${'='.repeat(50)}`);

    // Try Wikipedia first
    let result = await searchWikipediaPortrait(artist.name);

    // If that fails, try direct Commons search
    if (!result) {
      console.log('\n  Trying direct Commons search...');
      const commonsUrl = await searchCommonsDirectly(artist.name);
      if (commonsUrl) {
        result = { url: commonsUrl, title: 'Commons search' };
      }
    }

    if (result) {
      console.log(`\n  ✓ FOUND PORTRAIT: ${result.url}`);
      results.push({
        slug: artist.slug,
        name: artist.name,
        url: result.url,
        hasArtwork: !!artist.artworks[0]?.imageUrl
      });
    } else {
      console.log(`\n  ✗ NO PORTRAIT FOUND - will use artwork as fallback`);
      results.push({
        slug: artist.slug,
        name: artist.name,
        url: null,
        hasArtwork: !!artist.artworks[0]?.imageUrl
      });
    }

    await sleep(DELAY_MS);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));

  const found = results.filter(r => r.url);
  const notFound = results.filter(r => !r.url);

  console.log(`\nPortraits found: ${found.length}`);
  for (const r of found) {
    console.log(`  - ${r.name}: ${r.url}`);
  }

  console.log(`\nNo portrait available: ${notFound.length}`);
  for (const r of notFound) {
    console.log(`  - ${r.name} (has artwork fallback: ${r.hasArtwork ? 'YES' : 'NO'})`);
  }

  // Generate update code
  if (found.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('UPDATE CODE (paste into fix-artist-portraits.ts):');
    console.log('='.repeat(60));
    for (const r of found) {
      console.log(`  '${r.slug}': '${r.url}',`);
    }
  }

  await prisma.$disconnect();
}

main().catch(console.error);
