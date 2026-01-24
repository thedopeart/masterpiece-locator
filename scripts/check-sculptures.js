const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  // Find artworks with sculpture-related mediums or titles
  const artworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { medium: { contains: 'sculpture', mode: 'insensitive' } },
        { medium: { contains: 'bronze', mode: 'insensitive' } },
        { medium: { contains: 'marble', mode: 'insensitive' } },
        { medium: { contains: 'stone', mode: 'insensitive' } },
        { title: { contains: 'statue', mode: 'insensitive' } },
        { title: { contains: 'bust', mode: 'insensitive' } },
        { title: { contains: 'sphinx', mode: 'insensitive' } },
      ]
    },
    select: {
      slug: true,
      title: true,
      imageUrl: true,
      Artist: { select: { name: true } }
    }
  });

  console.log('Found', artworks.length, 'sculptures in database');

  let working = 0;
  let broken = [];

  for (const a of artworks) {
    if (!a.imageUrl) {
      broken.push({ slug: a.slug, title: a.title });
      continue;
    }

    try {
      const res = await fetch(a.imageUrl, {
        method: 'HEAD',
        headers: { 'User-Agent': 'MasterpieceLocator/1.0' }
      });
      if (res.status === 200 || res.status === 429) {
        working++;
      } else {
        broken.push({ slug: a.slug, title: a.title, status: res.status });
      }
    } catch (e) {
      broken.push({ slug: a.slug, title: a.title, error: e.message });
    }
    await new Promise(r => setTimeout(r, 150));
  }

  console.log('Working:', working);
  console.log('Broken:', broken.length);

  if (broken.length > 0) {
    console.log('\nBroken sculptures:');
    broken.forEach(b => console.log(`  { slug: '${b.slug}', search: '${b.title}' },`));
  }

  await prisma.$disconnect();
}

check();
