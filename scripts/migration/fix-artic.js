/**
 * Fix broken Art Institute of Chicago images
 * Same approach as fix-cleveland.js
 */

const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const prisma = new PrismaClient();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET_NAME = 'artwork-images';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function restoreOriginalUrls() {
  console.log('=== Step 1: Restoring Original WikiArt URLs ===\n');

  const resultsFile = path.join(__dirname, 'results/artic-found.json');
  const data = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));

  console.log(`Found ${data.length} artworks to restore\n`);

  let restored = 0;
  for (const item of data) {
    try {
      await prisma.artwork.update({
        where: { id: item.id },
        data: {
          imageUrl: item.oldImageUrl,
          imageAttribution: null,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Restored: ${item.title}`);
      restored++;
    } catch (e) {
      console.error(`✗ Failed to restore ${item.title}: ${e.message}`);
    }
  }

  console.log(`\nRestored ${restored} of ${data.length} artworks\n`);
  return data;
}

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

async function downloadImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (e) {
    console.error(`  Download failed: ${e.message}`);
    return null;
  }
}

async function uploadToSupabase(buffer, filename, contentType) {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filename, buffer, {
      contentType,
      upsert: true
    });

  if (error) {
    console.error(`  Upload failed: ${error.message}`);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filename);

  return urlData.publicUrl;
}

function getExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|gif|webp)/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

function getContentType(ext) {
  const types = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp'
  };
  return types[ext] || 'image/jpeg';
}

async function main() {
  console.log('=== Fixing Art Institute of Chicago Images ===\n');

  const artworks = await restoreOriginalUrls();

  console.log('=== Step 2: Searching Wikimedia Commons ===\n');

  const wikimediaFound = [];
  const notFound = [];

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${artworks.length}]`;

    console.log(`${progress} Searching: ${artwork.title}`);

    const result = await searchWikimedia(artwork.title, artwork.artist);

    if (result) {
      wikimediaFound.push({ ...artwork, wikimedia: result });
      console.log(`  ✓ Found on Wikimedia`);

      const attribution = `Source: ${result.source} | License: ${result.license} | ${result.sourceUrl}`;
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageUrl: result.imageUrl,
          imageAttribution: attribution,
          updatedAt: new Date()
        }
      });
    } else {
      notFound.push(artwork);
      console.log(`  ✗ Not found`);
    }

    await delay(500);
  }

  console.log(`\nWikimedia found: ${wikimediaFound.length}`);
  console.log(`Not found: ${notFound.length}\n`);

  if (notFound.length > 0) {
    console.log('=== Step 3: Uploading Remaining to Supabase ===\n');

    let uploaded = 0;
    let failed = 0;

    for (let i = 0; i < notFound.length; i++) {
      const artwork = notFound[i];
      const progress = `[${i + 1}/${notFound.length}]`;

      console.log(`${progress} Uploading: ${artwork.title}`);

      const imageBuffer = await downloadImage(artwork.oldImageUrl);
      if (!imageBuffer) {
        failed++;
        continue;
      }

      const ext = getExtension(artwork.oldImageUrl);
      const filename = `${artwork.slug}.${ext}`;

      const publicUrl = await uploadToSupabase(imageBuffer, filename, getContentType(ext));
      if (!publicUrl) {
        failed++;
        continue;
      }

      try {
        await prisma.artwork.update({
          where: { id: artwork.id },
          data: {
            imageUrl: publicUrl,
            imageAttribution: `Source: Supabase Storage | License: Public Domain | Original: WikiArt`,
            updatedAt: new Date()
          }
        });
        console.log(`  ✓ Uploaded`);
        uploaded++;
      } catch (e) {
        console.error(`  ✗ DB update failed: ${e.message}`);
        failed++;
      }

      await delay(300);
    }

    console.log(`\nUploaded: ${uploaded}`);
    console.log(`Failed: ${failed}`);
  }

  console.log('\n=== Complete ===');

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
