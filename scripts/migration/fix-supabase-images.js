/**
 * Fix Supabase images by searching Wikimedia Commons
 * WikiArt may have returned thumbnails/placeholders during bulk download
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Parse command line args for batch processing
const args = process.argv.slice(2);
const BATCH_SIZE = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1]) || 100;
const OFFSET = parseInt(args.find(a => a.startsWith('--offset='))?.split('=')[1]) || 0;

async function searchWikimedia(title, artistName) {
  const cleanTitle = title.replace(/[^\w\s]/g, ' ').trim();
  const cleanArtist = artistName?.replace(/[^\w\s]/g, ' ').trim() || '';

  const queries = [
    `${cleanTitle} ${cleanArtist}`,
    `${cleanTitle} painting`,
    cleanTitle
  ];

  for (const query of queries) {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: `${query} filetype:bitmap`,
      srnamespace: '6',
      srlimit: '5',
      format: 'json',
      origin: '*'
    });

    try {
      const res = await fetch(searchUrl);
      if (!res.ok) continue;

      const data = await res.json();
      if (!data.query?.search?.length) continue;

      for (const item of data.query.search) {
        const imageInfo = await getImageInfo(item.title);
        if (imageInfo) {
          return imageInfo;
        }
        await delay(100);
      }
    } catch (e) {
      // continue
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

    const license = imageInfo.extmetadata?.LicenseShortName?.value || '';
    const licenseUrl = imageInfo.extmetadata?.LicenseUrl?.value || '';

    const isPublicDomain =
      license.toLowerCase().includes('public domain') ||
      license.includes('CC0') ||
      license.includes('PD') ||
      licenseUrl.includes('publicdomain');

    if (!isPublicDomain) return null;
    if (imageInfo.width < 400 || imageInfo.height < 400) return null;

    return {
      imageUrl: imageInfo.url,
      source: 'wikimedia-commons',
      sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(fileTitle)}`,
      license: license || 'Public Domain'
    };
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('=== Fix Supabase Images with Wikimedia ===\n');
  console.log(`Batch size: ${BATCH_SIZE}, Offset: ${OFFSET}\n`);

  // Find all Supabase-hosted images
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { contains: 'supabase' } },
    include: { Artist: { select: { name: true } } },
    skip: OFFSET,
    take: BATCH_SIZE,
    orderBy: { title: 'asc' }
  });

  const totalRemaining = await prisma.artwork.count({
    where: { imageUrl: { contains: 'supabase' } }
  });

  console.log(`Processing batch: ${OFFSET + 1} to ${OFFSET + artworks.length} of ${totalRemaining} total\n`);

  if (artworks.length === 0) {
    console.log('No artworks to process in this batch.');
    await prisma.$disconnect();
    return;
  }

  let found = 0;
  let notFound = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${OFFSET + i + 1}/${totalRemaining}]`;

    console.log(`${progress} Searching: ${artwork.title}`);

    const result = await searchWikimedia(artwork.title, artwork.Artist?.name);

    if (result) {
      const attribution = `Source: ${result.source} | License: ${result.license} | ${result.sourceUrl}`;

      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageUrl: result.imageUrl,
          imageAttribution: attribution,
          updatedAt: new Date()
        }
      });

      console.log(`  ✓ Replaced with Wikimedia`);
      found++;
    } else {
      console.log(`  ✗ Not found (keeping Supabase)`);
      notFound++;
    }

    await delay(500);
  }

  console.log('\n=== Batch Results ===');
  console.log(`Replaced with Wikimedia: ${found}`);
  console.log(`Kept Supabase: ${notFound}`);

  if (OFFSET + BATCH_SIZE < totalRemaining) {
    console.log(`\nNext batch command:`);
    console.log(`  node fix-supabase-images.js --offset=${OFFSET + BATCH_SIZE} --batch=${BATCH_SIZE}`);
  } else {
    console.log('\nAll batches complete!');
  }

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
