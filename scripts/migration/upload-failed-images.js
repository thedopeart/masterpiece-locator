/**
 * Download failed images and upload to Supabase
 * These are Wikimedia thumbnails that aren't serving correctly
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

async function downloadImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.startsWith('image/')) {
      throw new Error(`Not an image: ${contentType}`);
    }

    const buffer = await response.arrayBuffer();
    return { buffer: Buffer.from(buffer), contentType };
  } catch (e) {
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
    console.error(`  Upload error: ${error.message}`);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filename);

  return urlData.publicUrl;
}

async function main() {
  console.log('=== Upload Failed Images to Supabase ===\n');

  // Find artworks without dimensions (failed to fetch)
  const artworks = await prisma.artwork.findMany({
    where: {
      imageWidth: null,
      imageUrl: { not: null }
    },
    select: { id: true, title: true, slug: true, imageUrl: true }
  });

  console.log(`Found ${artworks.length} artworks to process\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${artworks.length}]`;

    console.log(`${progress} ${artwork.title.slice(0, 50)}...`);

    // Download from current URL
    const result = await downloadImage(artwork.imageUrl);

    if (!result) {
      console.log(`  ✗ Download failed`);
      failed++;
      await delay(200);
      continue;
    }

    // Determine extension from content type
    let ext = 'jpg';
    if (result.contentType.includes('png')) ext = 'png';
    else if (result.contentType.includes('webp')) ext = 'webp';
    else if (result.contentType.includes('gif')) ext = 'gif';

    const filename = `${artwork.slug}.${ext}`;

    // Upload to Supabase
    const publicUrl = await uploadToSupabase(result.buffer, filename, result.contentType);

    if (!publicUrl) {
      console.log(`  ✗ Upload failed`);
      failed++;
      await delay(200);
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
      console.log(`  ✓ Uploaded to Supabase`);
      success++;
    } catch (e) {
      console.log(`  ✗ DB update failed: ${e.message}`);
      failed++;
    }

    // Longer delay to avoid Wikimedia rate limiting
    await delay(1500);
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
