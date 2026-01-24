const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

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

async function fix() {
  const items = [
    { slug: 'chariot-giacometti', search: 'Alberto Giacometti Le Chariot' },
  ];

  for (const item of items) {
    console.log('Searching:', item.slug);
    await delay(1000);

    const result = await searchWikimedia(item.search);
    if (result) {
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          imageUrl: result.url,
          imageAttribution: 'Wikimedia Commons - ' + result.license,
          updatedAt: new Date()
        }
      });
      console.log('  ✓ Updated');
    } else {
      console.log('  ✗ Not found');
    }
  }

  await prisma.$disconnect();
}

fix();
