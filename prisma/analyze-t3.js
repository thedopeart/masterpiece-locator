const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const r = await p.artwork.findMany({
    where: { artworkType: 'sculpture', searchVolumeTier: 3 },
    select: { slug: true, description: true, Artist: { select: { slug: true, name: true } } }
  });

  let oldFormat = r.filter(a => {
    let d = a.description || '';
    let hasOld = d.includes('href="/artist/') || d.includes('href="/museum/') || d.includes('href="/movement/');
    let hasNew = d.includes('/apps/masterpieces/artist');
    return hasOld && !hasNew;
  });

  let noArtistLink = r.filter(a => {
    let d = a.description || '';
    return !d.includes('/apps/masterpieces/artist') && !d.includes('href="/artist/');
  });

  let hasLink = r.filter(a => {
    let d = a.description || '';
    return d.includes('/apps/masterpieces/artist');
  });

  console.log('T3 total:', r.length);
  console.log('Already has /apps/masterpieces/artist link:', hasLink.length);
  console.log('Has old-format /artist/ link (fixable):', oldFormat.length);
  console.log('No artist link at all:', noArtistLink.length);

  let byArtist = {};
  noArtistLink.forEach(a => {
    let key = a.Artist?.name || 'NO ARTIST';
    if (!byArtist[key]) byArtist[key] = 0;
    byArtist[key]++;
  });
  console.log('\nNo-link sculptures by artist:');
  Object.entries(byArtist).sort((a, b) => b[1] - a[1]).slice(0, 25).forEach(([k, v]) => console.log('  ' + k + ': ' + v));
}

main().catch(console.error).finally(() => p.$disconnect());
