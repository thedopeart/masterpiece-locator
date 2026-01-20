const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    include: { artist: { select: { name: true } } },
    orderBy: { title: 'asc' }
  });

  const broken = [];
  const working = [];

  for (const a of artworks) {
    try {
      const res = await fetch(a.imageUrl, { method: 'HEAD' });
      if (res.status === 200) {
        working.push(a.title);
      } else {
        broken.push({ title: a.title, artist: a.artist?.name });
      }
    } catch {
      broken.push({ title: a.title, artist: a.artist?.name });
    }
  }

  console.log('=== CURRENT STATUS ===');
  console.log('Working:', working.length);
  console.log('Broken:', broken.length);
  console.log('Total:', artworks.length);
  console.log('Success rate:', Math.round(working.length / artworks.length * 100) + '%');
  console.log('');
  console.log('=== REMAINING BROKEN (' + broken.length + ') ===');
  broken.forEach((b, i) => console.log((i+1) + '. ' + b.title + ' - ' + (b.artist || 'Unknown')));
}

main().catch(console.error).finally(() => prisma.$disconnect());
