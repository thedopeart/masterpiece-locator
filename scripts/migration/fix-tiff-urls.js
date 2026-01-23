/**
 * Fix TIFF image URLs by converting to Wikimedia thumbnail JPGs
 * TIFF files cannot be displayed by browsers natively
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixTiffUrls() {
  console.log('=== Fixing TIFF Image URLs ===\n');

  // Find all artworks with TIFF URLs
  const artworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { imageUrl: { endsWith: '.tif' } },
        { imageUrl: { endsWith: '.tiff' } }
      ]
    },
    select: { id: true, title: true, slug: true, imageUrl: true }
  });

  console.log(`Found ${artworks.length} artworks with TIFF URLs\n`);

  if (artworks.length === 0) {
    console.log('No TIFF URLs to fix.');
    await prisma.$disconnect();
    return;
  }

  let fixed = 0;
  let failed = 0;

  for (const artwork of artworks) {
    const oldUrl = artwork.imageUrl;

    // Convert Wikimedia URL to thumbnail JPG format
    // Original: https://upload.wikimedia.org/wikipedia/commons/X/XY/filename.tif
    // Thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/X/XY/filename.tif/1200px-filename.tif.jpg

    if (oldUrl.includes('upload.wikimedia.org/wikipedia/commons/')) {
      // Extract the path after /commons/
      const commonsMatch = oldUrl.match(/\/commons\/([^\/]+\/[^\/]+\/[^\/]+\.tiff?)$/i);

      if (commonsMatch) {
        const path = commonsMatch[1]; // e.g., "8/85/Filename.tif"
        const filename = path.split('/').pop(); // e.g., "Filename.tif"

        // Create thumbnail URL (1200px width, JPG format)
        const thumbUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/1200px-${filename}.jpg`;

        try {
          await prisma.artwork.update({
            where: { id: artwork.id },
            data: {
              imageUrl: thumbUrl,
              updatedAt: new Date()
            }
          });

          console.log(`✓ ${artwork.title}`);
          console.log(`  Old: ...${oldUrl.slice(-60)}`);
          console.log(`  New: ...${thumbUrl.slice(-60)}`);
          fixed++;
        } catch (e) {
          console.error(`✗ ${artwork.title}: ${e.message}`);
          failed++;
        }
      } else {
        console.log(`? ${artwork.title} - Could not parse URL pattern`);
        console.log(`  URL: ${oldUrl}`);
        failed++;
      }
    } else {
      console.log(`? ${artwork.title} - Not a Wikimedia URL`);
      console.log(`  URL: ${oldUrl}`);
      failed++;
    }
  }

  console.log('\n=== Results ===');
  console.log(`Fixed: ${fixed}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

fixTiffUrls().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
