const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function searchChicago(title) {
  try {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(title)}&fields=id,title,image_id,is_public_domain&limit=3`);
    const data = await res.json();
    if (!data.data) return null;
    // Take first public domain result with image
    for (const item of data.data) {
      if (item.image_id && item.is_public_domain) {
        return `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
      }
    }
    // Fallback: first with image_id
    for (const item of data.data) {
      if (item.image_id) {
        return `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
      }
    }
  } catch {}
  return null;
}

async function searchMet(title) {
  try {
    const q = encodeURIComponent(title.replace(/[()]/g, ''));
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}`);
    const data = await res.json();
    if (!data.objectIDs) return null;
    for (const id of data.objectIDs.slice(0, 5)) {
      const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await r.json();
      if (obj.primaryImage) return obj.primaryImage;
      if (obj.primaryImageSmall) return obj.primaryImageSmall;
    }
  } catch {}
  return null;
}

async function searchCleveland(title) {
  try {
    const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=${encodeURIComponent(title)}&has_image=1&limit=3`);
    const data = await res.json();
    for (const item of (data.data || [])) {
      if (item.images?.web?.url) return item.images.web.url;
    }
  } catch {}
  return null;
}

(async () => {
  const missing = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null },
    select: { slug: true, title: true, Museum: { select: { name: true } } },
  });

  console.log(`Fixing ${missing.length} sculptures...\n`);

  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < missing.length; i++) {
    const s = missing[i];
    const museum = s.Museum?.name || '';
    let url = null;

    if (museum.includes('Art Institute of Chicago')) {
      url = await searchChicago(s.title);
      await delay(100);
    } else if (museum.includes('Metropolitan')) {
      url = await searchMet(s.title);
      await delay(200);
    } else if (museum.includes('Cleveland')) {
      url = await searchCleveland(s.title);
      await delay(100);
    } else {
      url = await searchMet(s.title);
      if (!url) { await delay(100); url = await searchChicago(s.title); }
      if (!url) { await delay(100); url = await searchCleveland(s.title); }
      await delay(100);
    }

    if (url) {
      await p.artwork.update({ where: { slug: s.slug }, data: { imageUrl: url, updatedAt: new Date() } });
      fixed++;
    } else {
      failed++;
    }

    if ((i + 1) % 100 === 0) {
      console.log(`Progress: ${i+1}/${missing.length} | Fixed: ${fixed} | Failed: ${failed}`);
    }
  }

  console.log(`\nDone. Fixed: ${fixed}. Failed: ${failed}.`);
  const remaining = await p.artwork.count({ where: { artworkType: 'sculpture', imageUrl: null } });
  const total = await p.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`Sculptures with images: ${total - remaining}/${total} (${Math.round((total - remaining)/total*100)}%)`);

  await p.$disconnect();
})();
