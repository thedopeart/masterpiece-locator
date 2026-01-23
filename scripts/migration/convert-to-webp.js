/**
 * Convert Wikimedia image URLs from JPG/PNG to WebP format
 * WebP provides better compression while maintaining quality
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function convertToWebp() {
  console.log('=== Converting Wikimedia Images to WebP ===\n');

  // Find all Wikimedia URLs
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'upload.wikimedia.org' }
    },
    select: { id: true, title: true, imageUrl: true }
  });

  console.log(`Found ${artworks.length} Wikimedia images\n`);

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const artwork of artworks) {
    const url = artwork.imageUrl;

    // Skip if already webp
    if (url.endsWith('.webp')) {
      skipped++;
      continue;
    }

    let newUrl = url;

    // Case 1: Already a thumbnail URL ending in .jpg or .png
    if (url.includes('/thumb/') && (url.endsWith('.jpg') || url.endsWith('.png'))) {
      // Replace final .jpg or .png with .webp
      newUrl = url.replace(/\.(jpg|png)$/, '.webp');
    }
    // Case 2: Original URL (not a thumbnail) - convert to thumbnail + webp
    else if (!url.includes('/thumb/')) {
      // Match: /commons/X/XY/filename.ext
      const commonsMatch = url.match(/\/commons\/([^\/]+\/[^\/]+\/([^\/]+))$/);
      if (commonsMatch) {
        const path = commonsMatch[1];
        const filename = commonsMatch[2];
        newUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/1200px-${filename}.webp`;
      }
    }

    if (newUrl !== url) {
      try {
        await prisma.artwork.update({
          where: { id: artwork.id },
          data: { imageUrl: newUrl, updatedAt: new Date() }
        });
        converted++;
      } catch (e) {
        console.error(`Error updating ${artwork.title}: ${e.message}`);
        errors++;
      }
    } else {
      skipped++;
    }
  }

  console.log('\n=== Results ===');
  console.log(`Converted to WebP: ${converted}`);
  console.log(`Already WebP/skipped: ${skipped}`);
  console.log(`Errors: ${errors}`);

  await prisma.$disconnect();
}

convertToWebp().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
