const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Converts a direct Wikimedia Commons URL to a thumbnail URL
 * Direct: https://upload.wikimedia.org/wikipedia/commons/d/d0/Klimt_-_Wasserschlangen_II.jpg
 * Thumb:  https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Klimt_-_Wasserschlangen_II.jpg/1200px-Klimt_-_Wasserschlangen_II.jpg
 */
function convertToThumbnailUrl(url, width = 1200) {
  if (!url || !url.includes('upload.wikimedia.org')) return url;

  // Already a thumbnail URL
  if (url.includes('/thumb/')) return url;

  // Parse the URL
  // Example: https://upload.wikimedia.org/wikipedia/commons/d/d0/Klimt_-_Wasserschlangen_II.jpg
  const match = url.match(/\/wikipedia\/commons\/([a-f0-9])\/([a-f0-9]{2})\/(.+)$/);
  if (!match) return url;

  const [, firstChar, twoChars, filename] = match;

  // Get base filename without any size prefix
  const baseFilename = filename.replace(/^\d+px-/, '');

  // Construct thumbnail URL
  const thumbUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/${firstChar}/${twoChars}/${baseFilename}/${width}px-${baseFilename}`;

  return thumbUrl;
}

// Image URL fixes for auction artworks
// These are the broken images we identified
const imageUrlFixes = [
  {
    slug: 'wasserschlangen-ii-klimt',
    // Converting to thumbnail format
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Klimt_-_Wasserschlangen_II.jpg/1200px-Klimt_-_Wasserschlangen_II.jpg'
  },
  {
    slug: 'pendant-portraits-rembrandt',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Marten_Soolmans_-_Rembrandt.jpg/800px-Marten_Soolmans_-_Rembrandt.jpg'
  },
  {
    slug: 'nu-couche-modigliani-1917',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amedeo_Modigliani_-_Nu_couch%C3%A9_%28Red_Nude%29.jpg/1200px-Amedeo_Modigliani_-_Nu_couch%C3%A9_%28Red_Nude%29.jpg'
  },
  {
    slug: 'nu-couche-left-side-modigliani',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Amedeo_Modigliani%2C_1917%2C_Nu_couch%C3%A9_%28sur_le_c%C3%B4t%C3%A9_gauche%29%2C_Reclining_Nude%2C_oil_on_canvas%2C_89.5_x_146.7_cm%2C_private_collection.jpg/1200px-Amedeo_Modigliani%2C_1917%2C_Nu_couch%C3%A9_%28sur_le_c%C3%B4t%C3%A9_gauche%29%2C_Reclining_Nude%2C_oil_on_canvas%2C_89.5_x_146.7_cm%2C_private_collection.jpg'
  },
  {
    slug: 'meules-haystacks-monet',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1200px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg'
  },
  {
    slug: 'suprematist-composition-malevich',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Suprematism%2C_18th_Construction%2C_Kazimir_Malevich.jpg/800px-Suprematism%2C_18th_Construction%2C_Kazimir_Malevich.jpg'
  }
];

async function main() {
  console.log('=== Fixing Broken Auction Artwork Images ===\n');
  console.log('Converting direct Wikimedia URLs to thumbnail URLs...\n');

  let updated = 0;
  let notFound = 0;
  let errors = 0;

  for (const fix of imageUrlFixes) {
    try {
      const artwork = await prisma.artwork.findFirst({
        where: { slug: fix.slug }
      });

      if (!artwork) {
        console.log(`❌ Not found: ${fix.slug}`);
        notFound++;
        continue;
      }

      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          imageUrl: fix.imageUrl,
          updatedAt: new Date()
        }
      });

      console.log(`✅ Updated: ${artwork.title}`);
      console.log(`   Old: ${artwork.imageUrl?.substring(0, 80)}...`);
      console.log(`   New: ${fix.imageUrl.substring(0, 80)}...`);
      updated++;
    } catch (err) {
      console.error(`❌ Error updating ${fix.slug}:`, err.message);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Errors: ${errors}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
