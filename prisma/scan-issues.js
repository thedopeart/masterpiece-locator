const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== SCANNING FOR DATA ISSUES ===\n');

  // 1. Find duplicate artworks by title + artist
  console.log('--- DUPLICATE ARTWORKS (same title + artist) ---');
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      artistId: true,
      imageUrl: true,
      description: true,
      faqs: true,
      Artist: { select: { name: true, slug: true } }
    }
  });

  const titleArtistMap = {};
  for (const art of artworks) {
    const key = art.title + '|||' + art.artistId;
    if (!titleArtistMap[key]) {
      titleArtistMap[key] = [];
    }
    titleArtistMap[key].push(art);
  }

  const duplicates = Object.entries(titleArtistMap)
    .filter(([_, arts]) => arts.length > 1);

  if (duplicates.length === 0) {
    console.log('No duplicate artworks found.\n');
  } else {
    console.log('Found ' + duplicates.length + ' sets of duplicates:\n');
    for (const [key, arts] of duplicates) {
      const artistName = arts[0].Artist ? arts[0].Artist.name : 'Unknown';
      console.log('"' + arts[0].title + '" by ' + artistName + ':');
      for (const art of arts) {
        const hasDesc = art.description ? 'HAS DESC' : 'no desc';
        const hasFaqs = art.faqs && art.faqs.length > 0 ? art.faqs.length + ' FAQs' : 'no faqs';
        const hasImg = art.imageUrl ? 'HAS IMG' : 'no img';
        console.log('  - ' + art.slug + ' [' + hasDesc + ', ' + hasFaqs + ', ' + hasImg + ']');
      }
      console.log('');
    }
  }

  // 2. Find artworks with junk/empty data
  console.log('--- POTENTIAL JUNK DATA ---');
  const junkArtworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { title: { in: ['', 'Untitled', 'Unknown', 'Test'] } },
        { title: { startsWith: 'Copy of' } },
        { slug: { contains: 'test' } },
        { slug: { contains: 'copy' } },
      ]
    },
    select: { id: true, slug: true, title: true }
  });

  if (junkArtworks.length === 0) {
    console.log('No obvious junk artworks found.\n');
  } else {
    console.log('Found ' + junkArtworks.length + ' potential junk artworks:');
    junkArtworks.forEach(a => console.log('  - ' + a.slug + ': "' + a.title + '"'));
    console.log('');
  }

  // 3. Find artworks with missing essential data
  console.log('--- ARTWORKS MISSING ESSENTIAL DATA ---');
  const missingData = await prisma.artwork.findMany({
    where: {
      OR: [
        { artistId: null },
        { imageUrl: null },
        { title: null }
      ]
    },
    select: {
      slug: true,
      title: true,
      artistId: true,
      imageUrl: true
    }
  });

  if (missingData.length === 0) {
    console.log('All artworks have essential data.\n');
  } else {
    console.log('Found ' + missingData.length + ' artworks missing essential data:');
    for (const art of missingData.slice(0, 20)) {
      const issues = [];
      if (!art.artistId) issues.push('no artist');
      if (!art.imageUrl) issues.push('no image');
      if (!art.title) issues.push('no title');
      console.log('  - ' + art.slug + ': ' + issues.join(', '));
    }
    if (missingData.length > 20) {
      console.log('  ... and ' + (missingData.length - 20) + ' more');
    }
    console.log('');
  }

  // 4. Find orphaned artists (no artworks)
  console.log('--- ORPHANED ARTISTS (no artworks) ---');
  const orphanedArtists = await prisma.artist.findMany({
    where: {
      Artwork: { none: {} }
    },
    select: { id: true, slug: true, name: true }
  });

  if (orphanedArtists.length === 0) {
    console.log('No orphaned artists found.\n');
  } else {
    console.log('Found ' + orphanedArtists.length + ' orphaned artists:');
    orphanedArtists.forEach(a => console.log('  - ' + a.slug + ': "' + a.name + '"'));
    console.log('');
  }

  // 5. Find orphaned museums (no artworks)
  console.log('--- ORPHANED MUSEUMS (no artworks) ---');
  const orphanedMuseums = await prisma.museum.findMany({
    where: {
      Artwork: { none: {} }
    },
    select: { id: true, slug: true, name: true }
  });

  if (orphanedMuseums.length === 0) {
    console.log('No orphaned museums found.\n');
  } else {
    console.log('Found ' + orphanedMuseums.length + ' orphaned museums:');
    orphanedMuseums.forEach(m => console.log('  - ' + m.slug + ': "' + m.name + '"'));
    console.log('');
  }

  // 6. Count total records
  console.log('--- TOTALS ---');
  const totalArtworks = await prisma.artwork.count();
  const totalArtists = await prisma.artist.count();
  const totalMuseums = await prisma.museum.count();
  console.log('Artworks: ' + totalArtworks);
  console.log('Artists: ' + totalArtists);
  console.log('Museums: ' + totalMuseums);
}

main().catch(console.error).finally(() => prisma.$disconnect());
