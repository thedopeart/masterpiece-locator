/**
 * Download remaining WikiArt images and upload to Supabase Storage
 * Only processes public domain artworks (artist died before 1954)
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

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Parse command line args
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const BATCH_SIZE = parseInt(args.find(a => a.startsWith('--batch='))?.split('=')[1]) || 50;
const OFFSET = parseInt(args.find(a => a.startsWith('--offset='))?.split('=')[1]) || 0;

async function setupBucket() {
  console.log('Checking storage bucket...');

  const { data: buckets, error: listError } = await supabase.storage.listBuckets();

  if (listError) {
    console.error('Error listing buckets:', listError.message);
    return false;
  }

  const bucketExists = buckets?.some(b => b.name === BUCKET_NAME);

  if (!bucketExists) {
    console.log(`Creating bucket "${BUCKET_NAME}"...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 10485760 // 10MB
    });

    if (createError) {
      console.error('Error creating bucket:', createError.message);
      return false;
    }
    console.log('Bucket created successfully');
  } else {
    console.log('Bucket already exists');
  }

  return true;
}

async function downloadImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

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

  // Get public URL
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
  console.log('=== Upload WikiArt Images to Supabase ===\n');

  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
  }

  // Setup bucket
  if (!DRY_RUN) {
    const bucketReady = await setupBucket();
    if (!bucketReady) {
      console.error('Failed to setup bucket. Exiting.');
      await prisma.$disconnect();
      return;
    }
  }

  // Find remaining WikiArt images (public domain only)
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'wikiart.org' },
      Artist: {
        deathYear: { lte: 1955 }
      }
    },
    include: {
      Artist: { select: { name: true, slug: true, deathYear: true } }
    },
    skip: OFFSET,
    take: BATCH_SIZE,
    orderBy: { title: 'asc' }
  });

  const totalRemaining = await prisma.artwork.count({
    where: {
      imageUrl: { contains: 'wikiart.org' },
      Artist: { deathYear: { lte: 1955 } }
    }
  });

  console.log(`Processing batch: ${OFFSET + 1} to ${OFFSET + artworks.length} of ${totalRemaining} public domain images\n`);

  if (artworks.length === 0) {
    console.log('No artworks to process in this batch.');
    await prisma.$disconnect();
    return;
  }

  let uploaded = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${OFFSET + i + 1}/${totalRemaining}]`;

    console.log(`${progress} ${artwork.title}`);

    if (DRY_RUN) {
      console.log(`  Would upload: ${artwork.slug}`);
      uploaded++;
      continue;
    }

    // Download image
    const imageBuffer = await downloadImage(artwork.imageUrl);
    if (!imageBuffer) {
      failed++;
      continue;
    }

    // Generate filename
    const ext = getExtension(artwork.imageUrl);
    const artistSlug = artwork.Artist?.slug || 'unknown';
    const filename = `${artistSlug}/${artwork.slug}.${ext}`;

    // Upload to Supabase
    const publicUrl = await uploadToSupabase(imageBuffer, filename, getContentType(ext));
    if (!publicUrl) {
      failed++;
      continue;
    }

    // Update database
    try {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageUrl: publicUrl,
          imageAttribution: `Source: Supabase Storage | License: Public Domain | Original: WikiArt`,
          updatedAt: new Date()
        }
      });
      console.log(`  ✓ Uploaded: ${filename}`);
      uploaded++;
    } catch (e) {
      console.error(`  ✗ DB update failed: ${e.message}`);
      failed++;
    }

    // Rate limiting
    await delay(300);
  }

  console.log('\n=== Summary ===');
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  if (skipped > 0) console.log(`Skipped: ${skipped}`);

  if (OFFSET + BATCH_SIZE < totalRemaining) {
    console.log(`\nNext batch command:`);
    console.log(`  node upload-to-supabase.js --offset=${OFFSET + BATCH_SIZE} --batch=${BATCH_SIZE}`);
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
