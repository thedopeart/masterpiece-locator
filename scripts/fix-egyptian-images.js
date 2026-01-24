const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Search for an image on Wikimedia Commons
async function searchWikimedia(searchTerm) {
  const query = encodeURIComponent(searchTerm);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${query}&srnamespace=6&srlimit=3&format=json`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'MasterpieceLocator/1.0 (contact@luxurywallart.com)' }
  });
  const data = await res.json();

  if (!data.query?.search?.length) return null;

  // Get the image info
  for (const result of data.query.search) {
    const title = result.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;

    const infoRes = await fetch(infoUrl, {
      headers: { 'User-Agent': 'MasterpieceLocator/1.0 (contact@luxurywallart.com)' }
    });
    const infoData = await infoRes.json();

    const pages = infoData.query?.pages;
    if (!pages) continue;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];

    if (imageInfo?.url) {
      const license = imageInfo.extmetadata?.LicenseShortName?.value || '';
      const isPublicDomain = license.includes('Public domain') ||
                             license.includes('CC0') ||
                             license.includes('PD') ||
                             license === '';

      // Get a thumbnail URL (800px wide)
      const url = imageInfo.url;
      const thumbUrl = url.replace('/commons/', '/commons/thumb/') + '/800px-' + url.split('/').pop();

      return {
        url: thumbUrl,
        license: license || 'Public Domain',
        source: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`
      };
    }
  }
  return null;
}

// Artworks to fix with search terms - Round 3
const artworksToFix = [
  { slug: 'statue-of-kaaper', search: 'Sheikh el-Balad Cairo Museum' },
  { slug: 'golden-shrine-goddesses-tutankhamun', search: 'Tutankhamun canopic goddesses' },
  { slug: 'golden-flies-ahhotep', search: 'Order of the Golden Fly Egypt' },
  { slug: 'ka-statue-of-hor', search: 'Ka statue Egyptian Museum Cairo' },
];

async function fixImages() {
  console.log('Searching Wikimedia Commons for Egyptian artwork images...\n');

  let updated = 0;
  let notFound = 0;

  for (const artwork of artworksToFix) {
    console.log(`Searching: ${artwork.slug}...`);

    await delay(1000); // Rate limit - 1 second between requests

    const result = await searchWikimedia(artwork.search);

    if (result) {
      try {
        await prisma.artwork.update({
          where: { slug: artwork.slug },
          data: {
            imageUrl: result.url,
            imageAttribution: `Wikimedia Commons - ${result.license}`,
            updatedAt: new Date()
          }
        });
        console.log(`  ✓ Found and updated`);
        updated++;
      } catch (e) {
        if (e.code === 'P2025') {
          console.log(`  - Artwork not in database, skipping`);
        } else {
          console.log(`  ✗ Database error: ${e.message}`);
        }
      }
    } else {
      console.log(`  ✗ Not found on Wikimedia`);
      notFound++;
    }
  }

  console.log(`\n---`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);

  await prisma.$disconnect();
}

fixImages();
