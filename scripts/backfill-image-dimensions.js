/**
 * Backfill image dimensions for existing artworks
 *
 * This script fetches width/height for all artworks with images
 * and stores them in the database for proper masonry layout.
 *
 * Usage:
 *   node scripts/backfill-image-dimensions.js
 *   node scripts/backfill-image-dimensions.js --limit=10  # Test with small batch
 *   node scripts/backfill-image-dimensions.js --offset=100 --limit=50
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Parse command line args
const args = process.argv.slice(2);
const LIMIT = parseInt(args.find(a => a.startsWith('--limit='))?.split('=')[1]) || 0;
const OFFSET = parseInt(args.find(a => a.startsWith('--offset='))?.split('=')[1]) || 0;

/**
 * Get image dimensions from Wikimedia Commons API
 */
async function getWikimediaDimensions(imageUrl) {
  try {
    // Extract filename from URL
    // Example: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-...
    const match = imageUrl.match(/\/([^\/]+\.(jpg|jpeg|png|gif|webp))(?:\/|$)/i);
    if (!match) return null;

    let filename = decodeURIComponent(match[1]);
    // Remove size prefix if present (e.g., "800px-")
    filename = filename.replace(/^\d+px-/, '');

    const fileTitle = `File:${filename}`;

    const infoUrl = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
      action: 'query',
      titles: fileTitle,
      prop: 'imageinfo',
      iiprop: 'size',
      format: 'json',
      origin: '*'
    });

    const res = await fetch(infoUrl);
    if (!res.ok) return null;

    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;

    const pageId = Object.keys(pages)[0];
    if (pageId === '-1') return null; // Not found

    const imageInfo = pages[pageId]?.imageinfo?.[0];
    if (!imageInfo?.width || !imageInfo?.height) return null;

    return {
      width: imageInfo.width,
      height: imageInfo.height
    };
  } catch (e) {
    return null;
  }
}

/**
 * Get image dimensions by fetching image headers/partial content
 * Works for any image URL
 */
async function getImageDimensionsFromUrl(imageUrl) {
  try {
    // Use image-size-probe approach: fetch first bytes to detect dimensions
    // For simplicity, we'll fetch the full image and use a dimension detection
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(imageUrl, {
      signal: controller.signal,
      headers: {
        'Range': 'bytes=0-65535' // Request first 64KB (enough for headers)
      }
    });
    clearTimeout(timeout);

    if (!res.ok && res.status !== 206) return null;

    const buffer = await res.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    // Try to detect image type and parse dimensions
    const dimensions = parseImageDimensions(bytes);
    return dimensions;
  } catch (e) {
    return null;
  }
}

/**
 * Parse image dimensions from binary data
 * Supports JPEG, PNG, GIF, WebP
 */
function parseImageDimensions(bytes) {
  if (bytes.length < 10) return null;

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
    if (bytes.length >= 24) {
      const width = (bytes[16] << 24) | (bytes[17] << 16) | (bytes[18] << 8) | bytes[19];
      const height = (bytes[20] << 24) | (bytes[21] << 16) | (bytes[22] << 8) | bytes[23];
      return { width, height };
    }
  }

  // GIF: 47 49 46 38
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    if (bytes.length >= 10) {
      const width = bytes[6] | (bytes[7] << 8);
      const height = bytes[8] | (bytes[9] << 8);
      return { width, height };
    }
  }

  // JPEG: FF D8 FF
  if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
    let offset = 2;
    while (offset < bytes.length - 9) {
      if (bytes[offset] !== 0xFF) break;

      const marker = bytes[offset + 1];

      // SOF0, SOF1, SOF2 markers contain dimensions
      if (marker >= 0xC0 && marker <= 0xC3) {
        const height = (bytes[offset + 5] << 8) | bytes[offset + 6];
        const width = (bytes[offset + 7] << 8) | bytes[offset + 8];
        return { width, height };
      }

      // Skip to next marker
      const length = (bytes[offset + 2] << 8) | bytes[offset + 3];
      offset += 2 + length;
    }
  }

  // WebP: 52 49 46 46 ... 57 45 42 50
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) {
    // VP8 format
    if (bytes[12] === 0x56 && bytes[13] === 0x50 && bytes[14] === 0x38 && bytes[15] === 0x20) {
      if (bytes.length >= 30) {
        const width = ((bytes[26] | (bytes[27] << 8)) & 0x3FFF);
        const height = ((bytes[28] | (bytes[29] << 8)) & 0x3FFF);
        return { width, height };
      }
    }
    // VP8L format
    if (bytes[12] === 0x56 && bytes[13] === 0x50 && bytes[14] === 0x38 && bytes[15] === 0x4C) {
      if (bytes.length >= 25) {
        const bits = bytes[21] | (bytes[22] << 8) | (bytes[23] << 16) | (bytes[24] << 24);
        const width = (bits & 0x3FFF) + 1;
        const height = ((bits >> 14) & 0x3FFF) + 1;
        return { width, height };
      }
    }
  }

  return null;
}

/**
 * Get dimensions for an image URL
 */
async function getDimensions(imageUrl) {
  // Try Wikimedia API first for wikimedia URLs
  if (imageUrl.includes('wikimedia.org') || imageUrl.includes('wikipedia.org')) {
    const dims = await getWikimediaDimensions(imageUrl);
    if (dims) return dims;
  }

  // Fall back to direct image fetching
  return getImageDimensionsFromUrl(imageUrl);
}

async function main() {
  console.log('=== Backfill Image Dimensions ===\n');

  // Find artworks with images but no dimensions
  const whereClause = {
    imageUrl: { not: null },
    imageWidth: null
  };

  const totalCount = await prisma.artwork.count({ where: whereClause });
  console.log(`Total artworks needing dimensions: ${totalCount}\n`);

  if (totalCount === 0) {
    console.log('All artworks already have dimensions!');
    await prisma.$disconnect();
    return;
  }

  const artworks = await prisma.artwork.findMany({
    where: whereClause,
    select: {
      id: true,
      slug: true,
      title: true,
      imageUrl: true
    },
    orderBy: { searchVolumeTier: 'asc' }, // Process famous works first
    skip: OFFSET,
    take: LIMIT || undefined
  });

  const batchSize = artworks.length;
  console.log(`Processing ${batchSize} artworks (offset: ${OFFSET})...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const progress = `[${i + 1}/${batchSize}]`;

    process.stdout.write(`${progress} ${artwork.title.substring(0, 40)}... `);

    const dims = await getDimensions(artwork.imageUrl);

    if (dims && dims.width > 0 && dims.height > 0) {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageWidth: dims.width,
          imageHeight: dims.height
        }
      });
      console.log(`✓ ${dims.width}x${dims.height}`);
      success++;
    } else {
      console.log('✗ Failed');
      failed++;
    }

    // Rate limiting
    await delay(300);
  }

  console.log('\n=== Results ===');
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);

  const remaining = totalCount - OFFSET - batchSize;
  if (remaining > 0 && LIMIT > 0) {
    console.log(`\nRemaining: ${remaining}`);
    console.log(`Next batch: node scripts/backfill-image-dimensions.js --offset=${OFFSET + batchSize} --limit=${LIMIT}`);
  }

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
