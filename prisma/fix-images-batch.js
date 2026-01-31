const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function searchChicago(title) {
  // Try exact title first, then simplified
  for (const q of [title, title.replace(/[^a-zA-Z0-9 ]/g, '')]) {
    try {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(q)}&fields=id,title,image_id&limit=5`);
      const data = await res.json();
      if (!data.data) continue;

      // Try to find exact or close title match
      const titleLower = title.toLowerCase().replace(/[^a-z0-9]/g, '');
      for (const item of data.data) {
        if (!item.image_id) continue;
        const itemLower = item.title?.toLowerCase().replace(/[^a-z0-9]/g, '') || '';
        // Accept if titles are similar enough
        if (itemLower === titleLower || itemLower.includes(titleLower) || titleLower.includes(itemLower)) {
          const url = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
          return url;
        }
      }
      // If no close match, take first result with image if search was specific enough
      if (title.length > 15) {
        for (const item of data.data) {
          if (item.image_id) {
            return `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
          }
        }
      }
    } catch {}
  }
  return null;
}

async function searchMet(title) {
  const q = encodeURIComponent(title.replace(/[()]/g, ''));
  try {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}`);
    const data = await res.json();
    if (!data.objectIDs) return null;

    const titleLower = title.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (const id of data.objectIDs.slice(0, 5)) {
      const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await r.json();
      const objLower = (obj.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');

      if (obj.primaryImage && (objLower === titleLower || objLower.includes(titleLower) || titleLower.includes(objLower))) {
        return obj.primaryImage;
      }
      if (obj.primaryImageSmall && (objLower === titleLower || objLower.includes(titleLower) || titleLower.includes(objLower))) {
        return obj.primaryImageSmall;
      }
    }
    // Fallback: take first with image
    for (const id of data.objectIDs.slice(0, 3)) {
      const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await r.json();
      if (obj.primaryImage) return obj.primaryImage;
    }
  } catch {}
  return null;
}

async function searchCleveland(title) {
  const q = encodeURIComponent(title);
  try {
    const res = await fetch(`https://openaccess-api.clevelandart.org/api/artworks/?q=${q}&has_image=1&limit=3`);
    const data = await res.json();
    for (const item of (data.data || [])) {
      if (item.images?.web?.url) return item.images.web.url;
    }
  } catch {}
  return null;
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(8000) });
    return res.ok;
  } catch {
    return false;
  }
}

(async () => {
  const missing = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null },
    select: { slug: true, title: true, Museum: { select: { name: true } } },
  });

  console.log(`Attempting to fix ${missing.length} sculptures...\n`);

  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < missing.length; i++) {
    const s = missing[i];
    const museum = s.Museum?.name || '';
    let url = null;

    if (museum.includes('Art Institute of Chicago')) {
      url = await searchChicago(s.title);
    } else if (museum.includes('Metropolitan')) {
      url = await searchMet(s.title);
    } else if (museum.includes('Cleveland')) {
      url = await searchCleveland(s.title);
    } else {
      // Try all three
      url = await searchChicago(s.title);
      if (!url) url = await searchMet(s.title);
      if (!url) url = await searchCleveland(s.title);
    }

    if (url) {
      // Verify
      const ok = await checkUrl(url);
      if (ok) {
        await p.artwork.update({ where: { slug: s.slug }, data: { imageUrl: url, updatedAt: new Date() } });
        fixed++;
        if (fixed % 50 === 0) console.log(`  [Fixed ${fixed} so far, at ${i+1}/${missing.length}]`);
      } else {
        failed++;
      }
    } else {
      failed++;
    }

    // Rate limit - more aggressive for AIC since their API is fast
    if (museum.includes('Art Institute of Chicago')) {
      await delay(150);
    } else {
      await delay(250);
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
