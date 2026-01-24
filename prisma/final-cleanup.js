const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== FINAL CLEANUP SCAN ===\n');

  // 1. Find orphaned artists
  console.log('--- ORPHANED ARTISTS ---');
  const orphanedArtists = await prisma.artist.findMany({
    where: { Artwork: { none: {} } },
    select: { id: true, slug: true, name: true }
  });

  if (orphanedArtists.length === 0) {
    console.log('No orphaned artists found.\n');
  } else {
    console.log('Found ' + orphanedArtists.length + ' orphaned artists to delete:');
    for (const artist of orphanedArtists) {
      console.log('  Deleting: ' + artist.slug + ' ("' + artist.name + '")');
      await prisma.artist.delete({ where: { id: artist.id } });
    }
    console.log('');
  }

  // 2. Find orphaned museums
  console.log('--- ORPHANED MUSEUMS ---');
  const orphanedMuseums = await prisma.museum.findMany({
    where: { Artwork: { none: {} } },
    select: { id: true, slug: true, name: true }
  });

  if (orphanedMuseums.length === 0) {
    console.log('No orphaned museums found.\n');
  } else {
    console.log('Found ' + orphanedMuseums.length + ' orphaned museums to delete:');
    for (const museum of orphanedMuseums) {
      console.log('  Deleting: ' + museum.slug + ' ("' + museum.name + '")');
      await prisma.museum.delete({ where: { id: museum.id } });
    }
    console.log('');
  }

  // 3. Count artworks missing images
  console.log('--- ARTWORKS MISSING IMAGES ---');
  const noImage = await prisma.artwork.count({
    where: { imageUrl: null }
  });
  console.log('Artworks without images: ' + noImage + '\n');

  // 4. Sample check of image URLs
  console.log('--- SAMPLING IMAGE URLS (checking 50 random) ---');
  const sampleArtworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    select: { slug: true, title: true, imageUrl: true },
    take: 50,
    orderBy: { updatedAt: 'desc' }
  });

  let broken = 0;
  let working = 0;

  for (const art of sampleArtworks) {
    try {
      const response = await fetch(art.imageUrl, { method: 'HEAD' });
      if (response.ok) {
        working++;
      } else {
        broken++;
        console.log('  BROKEN (' + response.status + '): ' + art.slug);
      }
    } catch (e) {
      broken++;
      console.log('  ERROR: ' + art.slug + ' - ' + e.message);
    }
  }

  console.log('\nSample results: ' + working + ' working, ' + broken + ' broken\n');

  // 5. Final totals
  console.log('--- FINAL TOTALS ---');
  const totalArtworks = await prisma.artwork.count();
  const totalArtists = await prisma.artist.count();
  const totalMuseums = await prisma.museum.count();
  const withImages = await prisma.artwork.count({ where: { imageUrl: { not: null } } });
  const withFaqs = await prisma.artwork.count({
    where: {
      faqs: { not: { equals: null } }
    }
  });

  console.log('Artworks: ' + totalArtworks);
  console.log('  - With images: ' + withImages);
  console.log('  - Without images: ' + (totalArtworks - withImages));
  console.log('Artists: ' + totalArtists);
  console.log('Museums: ' + totalMuseums);
}

main().catch(console.error).finally(() => prisma.$disconnect());
