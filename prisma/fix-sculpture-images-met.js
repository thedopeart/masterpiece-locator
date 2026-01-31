const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function searchMet(title) {
  const q = encodeURIComponent(title.replace(/[()]/g, ''));
  const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}&departmentId=13`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();
    if (!data.objectIDs || data.objectIDs.length === 0) return null;

    // Check first 3 results
    for (const id of data.objectIDs.slice(0, 3)) {
      const objRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await objRes.json();
      if (obj.primaryImage) {
        return obj.primaryImage;
      }
      if (obj.primaryImageSmall) {
        return obj.primaryImageSmall;
      }
    }
    // Try without department filter
    const res2 = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}`);
    const data2 = await res2.json();
    if (!data2.objectIDs) return null;

    for (const id of data2.objectIDs.slice(0, 3)) {
      const objRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await objRes.json();
      if (obj.primaryImage) return obj.primaryImage;
      if (obj.primaryImageSmall) return obj.primaryImageSmall;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function searchCleveland(title) {
  const q = encodeURIComponent(title);
  const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${q}&has_image=1&limit=3`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;

    for (const item of data.data) {
      if (item.images?.web?.url) return item.images.web.url;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function searchChicago(title) {
  const q = encodeURIComponent(title);
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${q}&fields=id,title,image_id&limit=3`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;

    for (const item of data.data) {
      if (item.image_id) {
        return `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

(async () => {
  const sculptures = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null, searchVolumeTier: 3 },
    select: { slug: true, title: true, Museum: { select: { name: true } } },
  });

  let updated = 0;
  let notFound = 0;

  for (const s of sculptures) {
    const museum = s.Museum?.name || '';
    let imageUrl = null;

    if (museum.includes('Metropolitan')) {
      imageUrl = await searchMet(s.title);
    } else if (museum.includes('Cleveland')) {
      imageUrl = await searchCleveland(s.title);
    } else if (museum.includes('Art Institute of Chicago')) {
      imageUrl = await searchChicago(s.title);
    } else {
      // Try Met first as fallback, then Cleveland
      imageUrl = await searchMet(s.title);
      if (!imageUrl) imageUrl = await searchCleveland(s.title);
    }

    if (imageUrl) {
      await p.artwork.update({
        where: { slug: s.slug },
        data: { imageUrl, updatedAt: new Date() }
      });
      updated++;
      console.log(`OK: ${s.slug}`);
    } else {
      notFound++;
      console.log(`MISS: ${s.slug} | ${s.title}`);
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nDone: ${updated} updated, ${notFound} not found`);
  await p.$disconnect();
})();
