const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

(async () => {
  // Get sample of AIC sculptures with null images
  const samples = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null, Museum: { name: 'Art Institute of Chicago' } },
    select: { slug: true, title: true },
    take: 10,
  });

  for (const s of samples) {
    console.log(`\nOur title: "${s.title}"`);

    // Search AIC API
    const q = encodeURIComponent(s.title);
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${q}&fields=id,title,image_id,is_public_domain&limit=3`);
    const data = await res.json();

    if (data.data) {
      for (const item of data.data) {
        console.log(`  AIC: "${item.title}" | image_id: ${item.image_id || 'NULL'} | public: ${item.is_public_domain}`);
      }
    } else {
      console.log('  No results');
    }
  }

  await p.$disconnect();
})();
