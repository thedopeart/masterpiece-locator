const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Search Wikimedia Commons for an image
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

// Leonardo da Vinci artworks to fix with specific search terms
const leonardoArtworks = [
  { slug: 'virgin-of-the-rocks-louvre', search: 'Leonardo Virgin Rocks Louvre painting' },
  { slug: 'virgin-of-the-rocks-london', search: 'Leonardo Virgin Rocks National Gallery London' },
  { slug: 'la-belle-ferronniere', search: 'La Belle Ferronniere Leonardo Louvre' },
  { slug: 'adoration-of-the-magi-leonardo', search: 'Leonardo Adoration Magi Uffizi' },
  { slug: 'saint-jerome-wilderness-leonardo', search: 'Leonardo Saint Jerome Vatican wilderness' },
  { slug: 'study-head-of-leda-leonardo', search: 'Leonardo head Leda study drawing' },
  { slug: 'studies-foetus-womb-leonardo', search: 'Leonardo fetus womb studies anatomy' },
  { slug: 'st-jerome-wilderness-leonardo-vatican', search: 'Leonardo Jerome wilderness Vatican painting' },
];

async function fixImages() {
  console.log('Searching Wikimedia Commons for Leonardo da Vinci artwork images...\n');

  let updated = 0;
  let notFound = 0;

  for (const item of leonardoArtworks) {
    console.log(`Searching: ${item.slug}...`);

    await delay(1000); // Rate limit

    const result = await searchWikimedia(item.search);

    if (result) {
      try {
        await prisma.artwork.update({
          where: { slug: item.slug },
          data: {
            imageUrl: result.url,
            imageAttribution: `Wikimedia Commons - ${result.license}`,
            updatedAt: new Date()
          }
        });
        console.log(`  ✓ Found and updated: ${result.url.substring(0, 60)}...`);
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
