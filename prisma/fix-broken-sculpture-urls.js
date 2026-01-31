const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(8000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function searchMet(title) {
  const q = encodeURIComponent(title.replace(/[()]/g, ''));
  try {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}`);
    const data = await res.json();
    if (!data.objectIDs) return null;
    for (const id of data.objectIDs.slice(0, 3)) {
      const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      const obj = await r.json();
      if (obj.primaryImage) return obj.primaryImage;
      if (obj.primaryImageSmall) return obj.primaryImageSmall;
    }
  } catch {}
  return null;
}

async function searchChicago(title) {
  const q = encodeURIComponent(title);
  try {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${q}&fields=id,title,image_id&limit=3`);
    const data = await res.json();
    for (const item of (data.data || [])) {
      if (item.image_id) return `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
    }
  } catch {}
  return null;
}

(async () => {
  // Check ALL sculptures for broken URLs, not just Egyptian
  const artworks = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: { not: null } },
    select: { slug: true, title: true, imageUrl: true, Museum: { select: { name: true } } },
  });

  console.log(`Checking ${artworks.length} sculptures with imageUrl...`);
  let broken = 0;
  let fixed = 0;
  let nulled = 0;

  for (let i = 0; i < artworks.length; i++) {
    const a = artworks[i];
    const ok = await checkUrl(a.imageUrl);
    if (ok) continue;

    broken++;
    // Try to find replacement
    let newUrl = null;
    const museum = a.Museum?.name || '';

    if (museum.includes('Art Institute of Chicago') || a.imageUrl.includes('artic.edu')) {
      newUrl = await searchChicago(a.title);
    }
    if (!newUrl) {
      newUrl = await searchMet(a.title);
    }

    if (newUrl) {
      // Verify the replacement works
      const newOk = await checkUrl(newUrl);
      if (newOk) {
        await p.artwork.update({ where: { slug: a.slug }, data: { imageUrl: newUrl, updatedAt: new Date() } });
        fixed++;
        console.log(`FIXED: ${a.slug}`);
        continue;
      }
    }

    // No replacement found, null it out
    await p.artwork.update({ where: { slug: a.slug }, data: { imageUrl: null, updatedAt: new Date() } });
    nulled++;
    console.log(`NULLED: ${a.slug}`);

    // Rate limit
    if (i % 20 === 0 && i > 0) {
      process.stdout.write(`  [${i}/${artworks.length}]\n`);
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\nDone. Checked ${artworks.length}. Broken: ${broken}. Fixed: ${fixed}. Nulled: ${nulled}.`);

  const remaining = await p.artwork.count({ where: { artworkType: 'sculpture', imageUrl: null } });
  const total = await p.artwork.count({ where: { artworkType: 'sculpture' } });
  const withImg = total - remaining;
  console.log(`Sculptures with images: ${withImg}/${total} (${Math.round(withImg/total*100)}%)`);

  await p.$disconnect();
})();
