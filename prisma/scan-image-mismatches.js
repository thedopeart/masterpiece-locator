const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Scanning for Image URL Mismatches ===\n');

  // Get all artworks with their image URLs
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      imageUrl: true,
      Artist: { select: { name: true } }
    }
  });

  console.log(`Total artworks: ${artworks.length}\n`);

  // Check for obvious mismatches by comparing title keywords with URL
  const suspiciousMismatches = [];

  for (const artwork of artworks) {
    if (!artwork.imageUrl) continue;

    // Extract filename from URL
    const urlParts = artwork.imageUrl.split('/');
    const filename = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2] || '';
    const filenameLower = filename.toLowerCase().replace(/%[0-9a-f]{2}/gi, ' ').replace(/[_-]/g, ' ');

    // Get key words from title (remove common words)
    const titleWords = artwork.title.toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .split(' ')
      .filter(w => w.length > 3 && !['the', 'and', 'with', 'from', 'portrait', 'study', 'self'].includes(w));

    // Check for some obvious mismatches
    const titleLower = artwork.title.toLowerCase();

    // Flag if URL contains a completely different famous painting name
    const famousPaintings = [
      { name: 'three graces', urls: ['three_graces', 'three-graces', 'graces'] },
      { name: 'mona lisa', urls: ['mona_lisa', 'mona-lisa', 'gioconda'] },
      { name: 'starry night', urls: ['starry_night', 'starry-night'] },
      { name: 'last supper', urls: ['last_supper', 'last-supper', 'ultima_cena'] },
      { name: 'birth of venus', urls: ['birth_venus', 'nascita_venere'] },
      { name: 'girl with pearl', urls: ['girl_pearl', 'pearl_earring'] },
      { name: 'guernica', urls: ['guernica'] },
      { name: 'scream', urls: ['the_scream', 'skrik'] },
      { name: 'saturn', urls: ['saturn'] },
    ];

    for (const painting of famousPaintings) {
      const urlContains = painting.urls.some(u => filenameLower.includes(u));
      const titleContains = titleLower.includes(painting.name);

      if (urlContains && !titleContains) {
        suspiciousMismatches.push({
          title: artwork.title,
          slug: artwork.slug,
          artist: artwork.Artist?.name,
          imageUrl: artwork.imageUrl.substring(0, 100) + '...',
          mismatch: `URL suggests "${painting.name}" but title is different`
        });
        break;
      }
    }
  }

  if (suspiciousMismatches.length === 0) {
    console.log('No obvious mismatches found.');
  } else {
    console.log(`Found ${suspiciousMismatches.length} suspicious mismatches:\n`);
    suspiciousMismatches.forEach(m => {
      console.log(`Title: ${m.title}`);
      console.log(`Slug: ${m.slug}`);
      console.log(`Artist: ${m.artist}`);
      console.log(`Issue: ${m.mismatch}`);
      console.log(`URL: ${m.imageUrl}`);
      console.log('');
    });
  }

  // Also list artworks without images
  const noImage = artworks.filter(a => !a.imageUrl);
  console.log(`\n--- Artworks without images: ${noImage.length} ---`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
