import { prisma } from '../src/lib/db';

async function checkImages() {
  const artworks = await prisma.artwork.findMany({
    where: { imageUrl: { not: null } },
    select: { id: true, title: true, imageUrl: true }
  });

  console.log('Checking', artworks.length, 'images...\n');
  const broken: { title: string; status?: number; error?: string }[] = [];

  for (const art of artworks) {
    if (art.imageUrl === null) continue;
    try {
      const res = await fetch(art.imageUrl, { method: 'HEAD', redirect: 'follow' });
      if (res.ok) {
        process.stdout.write('.');
      } else {
        process.stdout.write('X');
        broken.push({ title: art.title, status: res.status });
      }
    } catch (e) {
      process.stdout.write('X');
      broken.push({ title: art.title, error: 'fetch failed' });
    }
  }

  console.log('\n');

  if (broken.length === 0) {
    console.log('All images are working!');
  } else {
    console.log('Broken images:');
    for (const b of broken) {
      console.log('-', b.title, ':', b.status || b.error);
    }
  }

  await prisma.$disconnect();
}

checkImages();
