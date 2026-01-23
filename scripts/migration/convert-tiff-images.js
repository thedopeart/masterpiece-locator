/**
 * Download original TIFF files from Wikimedia and convert to JPG
 * Then upload to Supabase
 */

const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
const sharp = require('sharp');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const prisma = new PrismaClient();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET_NAME = 'artwork-images';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const delay = (ms) => new Promise(r => setTimeout(r, ms));

function extractOriginalTiffUrl(thumbnailUrl) {
  // Thumbnail URL pattern:
  // https://upload.wikimedia.org/wikipedia/commons/thumb/X/XY/filename.tif/1200px-filename.tif.jpg
  // Original URL pattern:
  // https://upload.wikimedia.org/wikipedia/commons/X/XY/filename.tif

  if (!thumbnailUrl.includes('/thumb/')) {
    return null;
  }

  // Remove /thumb/ and the size prefix at the end
  // e.g., /thumb/8/85/File.tif/1200px-File.tif.jpg -> /8/85/File.tif
  const match = thumbnailUrl.match(/\/wikipedia\/commons\/thumb\/([^\/]+\/[^\/]+\/[^\/]+\.tiff?)\/\d+px-/i);

  if (match) {
    return `https://upload.wikimedia.org/wikipedia/commons/${match[1]}`;
  }

  return null;
}

async function downloadTiff(url) {
  try {
    console.log(`    Downloading TIFF...`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MasterpieceLocator/1.0 (https://luxurywallart.com; contact@luxurywallart.com)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (e) {
    console.log(`    Download failed: ${e.message}`);
    return null;
  }
}

async function convertToJpg(tiffBuffer) {
  try {
    console.log(`    Converting to JPG...`);
    const jpgBuffer = await sharp(tiffBuffer)
      .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 85 })
      .toBuffer();

    return jpgBuffer;
  } catch (e) {
    console.log(`    Conversion failed: ${e.message}`);
    return null;
  }
}

async function uploadToSupabase(buffer, filename) {
  try {
    console.log(`    Uploading to Supabase...`);
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filename, buffer, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {
      console.log(`    Upload error: ${error.message}`);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filename);

    return urlData.publicUrl;
  } catch (e) {
    console.log(`    Upload failed: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Convert TIFF Images to JPG ===\n');

  // Find artworks without dimensions (these have problematic URLs)
  const artworks = await prisma.artwork.findMany({
    where: {
      imageWidth: null,
      imageUrl: {
        not: null,
        contains: '.tif'
      }
    },
    select: { id: true, title: true, slug: true, imageUrl: true }
  });

  console.log(`Found ${artworks.length} artworks with TIFF URLs to process\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${artworks.length}]`;

    console.log(`${progress} ${artwork.title.slice(0, 50)}...`);

    // Extract original TIFF URL
    const tiffUrl = extractOriginalTiffUrl(artwork.imageUrl);

    if (!tiffUrl) {
      console.log(`    ✗ Could not extract TIFF URL`);
      failed++;
      continue;
    }

    console.log(`    Original: ${tiffUrl.slice(-50)}`);

    // Download TIFF
    const tiffBuffer = await downloadTiff(tiffUrl);
    if (!tiffBuffer) {
      failed++;
      await delay(2000);
      continue;
    }

    // Convert to JPG
    const jpgBuffer = await convertToJpg(tiffBuffer);
    if (!jpgBuffer) {
      failed++;
      await delay(2000);
      continue;
    }

    // Upload to Supabase
    const filename = `${artwork.slug}.jpg`;
    const publicUrl = await uploadToSupabase(jpgBuffer, filename);

    if (!publicUrl) {
      failed++;
      await delay(2000);
      continue;
    }

    // Update database
    try {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageUrl: publicUrl,
          imageAttribution: 'Supabase Storage • Public Domain',
          updatedAt: new Date()
        }
      });
      console.log(`    ✓ Success!`);
      success++;
    } catch (e) {
      console.log(`    ✗ DB update failed: ${e.message}`);
      failed++;
    }

    // Delay between requests to be nice to Wikimedia
    await delay(3000);
  }

  console.log('\n=== Results ===');
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
