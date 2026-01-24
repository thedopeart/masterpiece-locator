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

    // Check if it's a Wikipedia "en" URL (copyrighted fair use image)
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

// Search Wikimedia Commons for a public domain alternative
async function searchWikimedia(searchTerm) {
  const query = encodeURIComponent(searchTerm);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${query}&srnamespace=6&srlimit=5&format=json`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
  });
  const data = await res.json();

  if (!data.query?.search?.length) return null;

  for (const result of data.query.search) {
    const title = result.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;

    const infoRes = await fetch(infoUrl, {
      headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
    });
    const infoData = await infoRes.json();

    const pages = infoData.query?.pages;
    if (!pages) continue;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];

    if (imageInfo?.url) {
      const license = imageInfo.extmetadata?.LicenseShortName?.value || '';
      const imgUrl = imageInfo.url;
      const filename = imgUrl.split('/').pop();
      const thumbUrl = imgUrl.replace('/commons/', '/commons/thumb/') + '/800px-' + filename;

      return { url: thumbUrl, license: license || 'Public Domain' };
    }
    await delay(200);
  }
  return null;
}

async function fixBrokenImages() {
  console.log('Scanning for broken image URLs...\n');

  // Find all artworks with image URLs
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { not: null }
    },
    select: {
      id: true,
      slug: true,
      title: true,
      year: true,
      imageUrl: true,
      Artist: { select: { name: true, deathYear: true } }
    }
  });

  console.log(`Found ${artworks.length} artworks with images\n`);

  let checked = 0;
  let working = 0;
  let broken = [];
  let copyrighted = [];

  for (const a of artworks) {
    checked++;
    if (checked % 50 === 0) {
      console.log(`Checked ${checked}/${artworks.length}...`);
    }

    const result = await checkImageUrl(a.imageUrl);

    if (result.working) {
      working++;
    } else {
      // Check if artist is still under copyright (died less than 70 years ago)
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

    await delay(100); // Rate limiting
  }

  console.log('\n--- RESULTS ---');
  console.log(`Total checked: ${checked}`);
  console.log(`Working: ${working}`);
  console.log(`Broken (fixable): ${broken.length}`);
  console.log(`Copyrighted (set to null): ${copyrighted.length}`);

  // Fix copyrighted images - set to null
  if (copyrighted.length > 0) {
    console.log('\n--- COPYRIGHTED IMAGES (setting to null) ---');
    for (const item of copyrighted) {
      console.log(`  Setting null: ${item.slug} - ${item.title} by ${item.artist}`);
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          imageUrl: null,
          imageAttribution: `Copyrighted - ${item.artist || 'Unknown artist'}`
        }
      });
    }
    console.log(`\nSet ${copyrighted.length} copyrighted artworks to null`);
  }

  // Report broken images that might be fixable
  if (broken.length > 0) {
    console.log('\n--- BROKEN IMAGES (may be fixable) ---');
    for (const item of broken) {
      console.log(`  ${item.slug}: ${item.title} (${item.reason})`);
    }
  }

  await prisma.$disconnect();
}

fixBrokenImages();
