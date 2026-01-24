const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Clear remaining broken image URLs so they don't show broken image icons
 * These artworks will display without images until valid URLs are added
 */
const slugsToClear = [
  'nu-couche-modigliani-1917',
  'meules-haystacks-monet',
  'suprematist-composition-malevich'
];

async function main() {
  console.log('=== Clearing Remaining Broken Image URLs ===\n');

  let cleared = 0;
  let notFound = 0;

  for (const slug of slugsToClear) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug }
    });

    if (!artwork) {
      console.log(`❌ Not found: ${slug}`);
      notFound++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        imageUrl: null,
        updatedAt: new Date()
      }
    });

    console.log(`🗑️  Cleared: ${artwork.title}`);
    cleared++;
  }

  console.log(`\n=== Summary ===`);
  console.log(`Cleared: ${cleared}`);
  console.log(`Not found: ${notFound}`);
  console.log('\nNote: These artworks need valid Wikimedia image URLs added manually.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
