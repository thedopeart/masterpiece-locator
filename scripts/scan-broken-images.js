const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Check if an image URL is working
async function checkImageUrl(url) {
  if (!url) return { working: false, reason: 'no_url' };

  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
    });

    if (res.status === 200 || res.status === 429) {
      return { working: true };
    }

    const isEnWikipedia = url.includes('wikipedia/en');
    return {
      working: false,
      reason: isEnWikipedia ? 'copyrighted_en' : `http_${res.status}`,
      status: res.status
    };
  } catch (e) {
    return { working: false, reason: 'error', error: e.message };
  }
}

async function scanImages() {
  console.log('Scanning for broken image URLs...\n');

  // Get a sample of artworks to check (limit to speed up scan)
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { not: null }
    },
    select: {
      slug: true,
      title: true,
      imageUrl: true,
      Artist: { select: { name: true, deathYear: true } }
    },
    orderBy: { searchVolumeTier: 'asc' }, // Check most important first
    take: 500
  });

  console.log(`Checking ${artworks.length} artworks...\n`);

  let checked = 0;
  let working = 0;
  let broken = [];
  let copyrighted = [];

  for (const a of artworks) {
    checked++;
    if (checked % 50 === 0) {
      console.log(`Progress: ${checked}/${artworks.length} (${working} working, ${broken.length} broken, ${copyrighted.length} copyrighted)`);
    }

    const result = await checkImageUrl(a.imageUrl);

    if (result.working) {
      working++;
    } else {
      const artistDeath = a.Artist?.deathYear;
      const isCopyrighted = artistDeath && (2026 - artistDeath < 70);

      if (result.reason === 'copyrighted_en' || isCopyrighted) {
        copyrighted.push({
          slug: a.slug,
          title: a.title,
          artist: a.Artist?.name,
          reason: result.reason
        });
      } else {
        broken.push({
          slug: a.slug,
          title: a.title,
          artist: a.Artist?.name,
          reason: result.reason,
          status: result.status
        });
      }
    }

    await delay(50); // Gentle rate limiting
  }

  console.log('\n=== SCAN RESULTS ===');
  console.log(`Total checked: ${checked}`);
  console.log(`Working: ${working}`);
  console.log(`Broken (fixable): ${broken.length}`);
  console.log(`Copyrighted: ${copyrighted.length}`);

  if (broken.length > 0) {
    console.log('\n--- BROKEN (PUBLIC DOMAIN - CAN FIX) ---');
    broken.forEach(b => {
      console.log(`  { slug: '${b.slug}', search: '${b.artist || ''} ${b.title}' },`);
    });
  }

  if (copyrighted.length > 0) {
    console.log('\n--- COPYRIGHTED (SET TO NULL) ---');
    copyrighted.forEach(c => {
      console.log(`  ${c.slug} - ${c.title} by ${c.artist}`);
    });
  }

  await prisma.$disconnect();
}

scanImages();
