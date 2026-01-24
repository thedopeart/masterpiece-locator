const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Scanning for Duplicates ===\n');

  // Get all artworks
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      imageUrl: true,
      year: true,
      Artist: { select: { name: true } },
      Museum: { select: { name: true } }
    }
  });

  console.log('Total artworks:', artworks.length);

  // Check for duplicate slugs
  console.log('\n--- Duplicate Slugs ---');
  const slugCounts = {};
  artworks.forEach(a => {
    slugCounts[a.slug] = (slugCounts[a.slug] || 0) + 1;
  });
  const dupSlugs = Object.entries(slugCounts).filter(([k,v]) => v > 1);
  if (dupSlugs.length === 0) {
    console.log('None found');
  } else {
    dupSlugs.forEach(([slug, count]) => {
      console.log(`${slug}: ${count} occurrences`);
      artworks.filter(a => a.slug === slug).forEach(a => {
        console.log(`  - ${a.title} (${a.Artist?.name}) @ ${a.Museum?.name}`);
      });
    });
  }

  // Check for duplicate image URLs
  console.log('\n--- Duplicate Image URLs ---');
  const imgCounts = {};
  artworks.forEach(a => {
    if (a.imageUrl) {
      imgCounts[a.imageUrl] = imgCounts[a.imageUrl] || [];
      imgCounts[a.imageUrl].push(a);
    }
  });
  const dupImgs = Object.entries(imgCounts).filter(([k,v]) => v.length > 1);
  if (dupImgs.length === 0) {
    console.log('None found');
  } else {
    dupImgs.forEach(([url, arts]) => {
      console.log(`\nDuplicate image (${arts.length} artworks):`);
      arts.forEach(a => {
        console.log(`  - ${a.title} (slug: ${a.slug})`);
        console.log(`    Artist: ${a.Artist?.name}, Museum: ${a.Museum?.name}`);
      });
    });
  }

  // Check for similar titles (potential duplicates)
  console.log('\n--- Similar Titles (potential duplicates) ---');
  const titleMap = {};
  artworks.forEach(a => {
    // Normalize title for comparison
    const normalized = a.title.toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .replace(/the|of|and|with|in|at|on/g, '');
    if (!titleMap[normalized]) titleMap[normalized] = [];
    titleMap[normalized].push(a);
  });

  const similarTitles = Object.entries(titleMap).filter(([k,v]) => v.length > 1);
  let foundSimilar = false;
  if (similarTitles.length > 0) {
    similarTitles.forEach(([norm, arts]) => {
      // Only show if different slugs (actual potential dupes)
      const uniqueSlugs = new Set(arts.map(a => a.slug));
      if (uniqueSlugs.size > 1) {
        foundSimilar = true;
        console.log(`\nPotential duplicate titles:`);
        arts.forEach(a => {
          console.log(`  - "${a.title}" (slug: ${a.slug})`);
          console.log(`    Artist: ${a.Artist?.name}, Museum: ${a.Museum?.name}, Year: ${a.year}`);
        });
      }
    });
  }
  if (!foundSimilar) {
    console.log('None found');
  }

  // Search specifically for Saturn
  console.log('\n--- Saturn-related artworks ---');
  const saturnWorks = artworks.filter(a =>
    a.title.toLowerCase().includes('saturn')
  );
  if (saturnWorks.length === 0) {
    console.log('None found');
  } else {
    saturnWorks.forEach(a => {
      console.log(`- ${a.title} (slug: ${a.slug})`);
      console.log(`  Artist: ${a.Artist?.name}, Museum: ${a.Museum?.name}`);
      console.log(`  Image: ${a.imageUrl?.substring(0, 80)}...`);
    });
  }

  // Search for common duplicates patterns
  console.log('\n--- Checking common duplicate patterns ---');
  const checkPatterns = [
    'mona lisa', 'starry night', 'last supper', 'birth of venus',
    'girl with a pearl', 'the scream', 'guernica', 'david',
    'creation of adam', 'night watch', 'las meninas'
  ];

  checkPatterns.forEach(pattern => {
    const matches = artworks.filter(a =>
      a.title.toLowerCase().includes(pattern)
    );
    if (matches.length > 1) {
      console.log(`\n"${pattern}" - ${matches.length} matches:`);
      matches.forEach(a => {
        console.log(`  - ${a.title} (${a.slug})`);
        console.log(`    ${a.Artist?.name} @ ${a.Museum?.name}`);
      });
    }
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
