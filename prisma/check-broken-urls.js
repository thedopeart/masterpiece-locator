const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('=== CHECKING ALL ARTWORK IMAGE URLS ===\n');

  // Get all artworks with images
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    select: {
      id: true,
      slug: true,
      title: true,
      imageUrl: true,
      Artist: { select: { name: true } }
    },
    orderBy: { updatedAt: 'desc' }
  });

  console.log('Total artworks with images: ' + artworks.length + '\n');

  const results = {
    working: [],
    notFound: [],      // 404
    rateLimited: [],   // 429
    forbidden: [],     // 403
    otherError: [],    // other HTTP errors
    networkError: []   // fetch failures
  };

  let checked = 0;

  for (const art of artworks) {
    checked++;

    // Progress every 100
    if (checked % 100 === 0) {
      console.log('Checked ' + checked + '/' + artworks.length + '...');
    }

    try {
      const response = await fetch(art.imageUrl, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'MasterpieceLocator/1.0 (artwork database maintenance)'
        }
      });

      if (response.ok) {
        results.working.push(art);
      } else if (response.status === 404) {
        results.notFound.push({ ...art, status: 404 });
      } else if (response.status === 429) {
        results.rateLimited.push({ ...art, status: 429 });
      } else if (response.status === 403) {
        results.forbidden.push({ ...art, status: 403 });
      } else {
        results.otherError.push({ ...art, status: response.status });
      }
    } catch (e) {
      results.networkError.push({ ...art, error: e.message });
    }

    // Small delay to avoid rate limiting
    await sleep(50);
  }

  console.log('\n=== RESULTS ===\n');
  console.log('Working: ' + results.working.length);
  console.log('Not Found (404): ' + results.notFound.length);
  console.log('Rate Limited (429): ' + results.rateLimited.length);
  console.log('Forbidden (403): ' + results.forbidden.length);
  console.log('Other HTTP Errors: ' + results.otherError.length);
  console.log('Network Errors: ' + results.networkError.length);

  // Show details of truly broken (404)
  if (results.notFound.length > 0) {
    console.log('\n--- 404 NOT FOUND (need replacement) ---');
    for (const art of results.notFound) {
      const artist = art.Artist ? art.Artist.name : 'Unknown';
      console.log('  ' + art.slug + ' ("' + art.title + '" by ' + artist + ')');
      console.log('    URL: ' + art.imageUrl);
    }
  }

  // Show forbidden
  if (results.forbidden.length > 0) {
    console.log('\n--- 403 FORBIDDEN (may need replacement) ---');
    for (const art of results.forbidden) {
      const artist = art.Artist ? art.Artist.name : 'Unknown';
      console.log('  ' + art.slug + ' ("' + art.title + '" by ' + artist + ')');
    }
  }

  // Show network errors
  if (results.networkError.length > 0) {
    console.log('\n--- NETWORK ERRORS ---');
    for (const art of results.networkError) {
      console.log('  ' + art.slug + ': ' + art.error);
    }
  }

  // Show other errors
  if (results.otherError.length > 0) {
    console.log('\n--- OTHER HTTP ERRORS ---');
    for (const art of results.otherError) {
      console.log('  ' + art.slug + ' (status: ' + art.status + ')');
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log('Total checked: ' + checked);
  console.log('Truly broken (404): ' + results.notFound.length);
  console.log('Rate limited (429 - temporary): ' + results.rateLimited.length);
  console.log('Need attention: ' + (results.notFound.length + results.forbidden.length + results.networkError.length));
}

main().catch(console.error).finally(() => prisma.$disconnect());
