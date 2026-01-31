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

(async () => {
  const artworks = await p.artwork.findMany({
    where: { Artist: { slug: 'ancient-egyptian' }, imageUrl: { not: null } },
    select: { slug: true, title: true, imageUrl: true },
  });

  console.log(`Checking ${artworks.length} Egyptian artworks with imageUrl...`);
  let broken = 0;
  const brokenList = [];

  for (const a of artworks) {
    const ok = await checkUrl(a.imageUrl);
    if (!ok) {
      broken++;
      brokenList.push(a.slug);
      console.log(`BROKEN: ${a.slug} | ${a.imageUrl.slice(0, 80)}`);
    }
  }

  console.log(`\n${broken} broken out of ${artworks.length}`);
  if (brokenList.length > 0) {
    console.log('\nSlugs:', JSON.stringify(brokenList));
  }
  await p.$disconnect();
})();
