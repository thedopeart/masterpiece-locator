/**
 * Fix remaining images by searching Wikimedia for proper URLs
 */

const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const prisma = new PrismaClient();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET_NAME = 'artwork-images';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const delay = (ms) => new Promise(r => setTimeout(r, ms));

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
      const res = await fetch(searchUrl, {
        headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
      });
      if (!res.ok) continue;

      const data = await res.json();
      if (!data.query?.search?.length) continue;

      for (const item of data.query.search) {
        const imageInfo = await getImageInfo(item.title);
        if (imageInfo) {
          return imageInfo;
        }
        await delay(500);
      }
    } catch (e) {
      // continue
    }

    await delay(1000);
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
    const res = await fetch(infoUrl, {
      headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
    });
    if (!res.ok) return null;

    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];
    if (!imageInfo?.url) return null;

    // Skip TIFF files - they don't thumbnail well
    if (imageInfo.url.endsWith('.tif') || imageInfo.url.endsWith('.tiff')) {
      return null;
    }

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
      license: license || 'Public Domain'
    };
  } catch (e) {
    return null;
  }
}

async function downloadAndUpload(url, slug) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
    });

    if (!response.ok) return null;

    const contentType = response.headers.get('content-type');
    if (!contentType?.startsWith('image/')) return null;

    const buffer = await response.arrayBuffer();

    let ext = 'jpg';
    if (contentType.includes('png')) ext = 'png';
    else if (contentType.includes('webp')) ext = 'webp';

    const filename = `${slug}.${ext}`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filename, Buffer.from(buffer), {
        contentType,
        upsert: true
      });

    if (error) return null;

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filename);

    return urlData.publicUrl;
  } catch (e) {
    return null;
  }
}

async function main() {
  console.log('=== Fix Remaining Images ===\n');

  const artworks = await prisma.artwork.findMany({
    where: { imageWidth: null, imageUrl: { not: null } },
    include: { Artist: { select: { name: true } } }
  });

  console.log(`Found ${artworks.length} artworks to fix\n`);

  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${artworks.length}]`;

    console.log(`${progress} ${artwork.title.slice(0, 50)}...`);

    // Search Wikimedia for a better URL
    const result = await searchWikimedia(artwork.title, artwork.Artist?.name);

    if (result) {
      // Download and upload to Supabase
      const publicUrl = await downloadAndUpload(result.imageUrl, artwork.slug);

      if (publicUrl) {
        await prisma.artwork.update({
          where: { id: artwork.id },
          data: {
            imageUrl: publicUrl,
            imageAttribution: 'Supabase Storage • Public Domain',
            updatedAt: new Date()
          }
        });
        console.log(`  ✓ Found and uploaded`);
        fixed++;
      } else {
        console.log(`  ✗ Download/upload failed`);
        failed++;
      }
    } else {
      console.log(`  ✗ No suitable image found`);
      failed++;
    }

    await delay(2000);
  }

  console.log('\n=== Results ===');
  console.log(`Fixed: ${fixed}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
