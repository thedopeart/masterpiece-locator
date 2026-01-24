const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Fixing Image Issues ===\n');

  // 1. Delete true duplicates
  console.log('1. Removing duplicate entries...');

  const duplicatesToDelete = [
    'weeping-woman', // Keep weeping-woman-picasso (more specific slug)
  ];

  for (const slug of duplicatesToDelete) {
    const artwork = await prisma.artwork.findFirst({ where: { slug } });
    if (artwork) {
      await prisma.artwork.delete({ where: { id: artwork.id } });
      console.log(`  Deleted: ${artwork.title} (${slug})`);
    }
  }

  // 2. Fix specific wrong images with correct URLs
  console.log('\n2. Fixing wrong image URLs...');

  const imageCorrections = [
    {
      slug: 'michelangelo-david',
      correctUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/%27David%27_by_Michelangelo_Fir_JBU002.jpg/800px-%27David%27_by_Michelangelo_Fir_JBU002.jpg'
    },
    {
      slug: 'caspar-david-friedrich-fog',
      correctUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg'
    },
  ];

  for (const fix of imageCorrections) {
    const result = await prisma.artwork.updateMany({
      where: { slug: fix.slug },
      data: { imageUrl: fix.correctUrl, updatedAt: new Date() }
    });
    if (result.count > 0) {
      console.log(`  Fixed: ${fix.slug}`);
    }
  }

  // 3. Clear wrong images (artworks using someone else's image)
  // These will show as "no image" rather than wrong image
  console.log('\n3. Clearing misattributed images...');

  // Self-portraits using Ducreux's image (except if there's an actual Ducreux self-portrait)
  const wrongDucreux = await prisma.artwork.findMany({
    where: {
      imageUrl: { contains: 'Joseph_Ducreux' },
      NOT: { Artist: { name: { contains: 'Ducreux' } } }
    },
    select: { id: true, title: true, slug: true, Artist: { select: { name: true } } }
  });

  for (const art of wrongDucreux) {
    await prisma.artwork.update({
      where: { id: art.id },
      data: { imageUrl: null, updatedAt: new Date() }
    });
    console.log(`  Cleared: ${art.title} by ${art.Artist?.name}`);
  }

  // 4. Fix other duplicate images by clearing the incorrect ones
  console.log('\n4. Fixing other duplicate image issues...');

  // Define which artwork should keep the image for each duplicate set
  const keepImage = {
    // Vermeer's portrait - clear others
    'Vermeer-Portrait_of_a_': 'vermeer',
    // Van Eyck's portrait - clear others
    'Eyck%2C_Jan_van_-_Port': 'jan-van-eyck',
    // Fra Angelico Adoration
    'Fra_Angelico%2C_Fra_Fi': 'fra-angelico',
  };

  for (const [urlPart, keepArtist] of Object.entries(keepImage)) {
    const artworks = await prisma.artwork.findMany({
      where: { imageUrl: { contains: urlPart } },
      select: { id: true, title: true, slug: true, Artist: { select: { name: true, slug: true } } }
    });

    for (const art of artworks) {
      // If this isn't the artist who should keep the image, clear it
      if (!art.Artist?.slug?.includes(keepArtist) && !art.slug.includes(keepArtist)) {
        await prisma.artwork.update({
          where: { id: art.id },
          data: { imageUrl: null, updatedAt: new Date() }
        });
        console.log(`  Cleared: ${art.title} by ${art.Artist?.name} (not ${keepArtist})`);
      }
    }
  }

  console.log('\n=== Complete ===');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
