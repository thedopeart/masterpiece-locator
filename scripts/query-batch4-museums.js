const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'royal-museums-belgium',
  'fitzwilliam-museum-university-of-cambridge-cambrid',
  'st-bavo-cathedral-ghent-belgium',
  'national-gallery-of-denmark-statens-museum-for-kun',
  'mauritshuis',
  'neue-pinakothek',
  'gemeentemuseum-den-haag-hague-netherlands',
  'kroeller-mueller-museum',
  'gallerie-dell-accademia-venice',
  'lenbachhaus',
  'musee-bonnat',
  'kunsthaus-zurich',
  'groeningemuseum',
  'frick-collection',
  'palais-des-beauxarts-de-lille-lille-france',
  'museum-boijmans-van-beuningen-rotterdam-netherland',
  'national-gallery-of-umbria-palazzo-dei-priori-peru',
  'kimbell-art-museum',
  'pushkin-museum',
  'dulwich-picture-gallery',
];

async function query() {
  for (const slug of slugs) {
    const museum = await prisma.museum.findUnique({
      where: { slug },
      select: {
        name: true,
        city: true,
        country: true,
        description: true,
        Artwork: {
          select: {
            title: true,
            slug: true,
            year: true,
            Artist: { select: { name: true, slug: true } },
          },
          take: 6,
          orderBy: { searchVolumeTier: 'asc' },
        },
      },
    });
    if (museum) {
      const d = museum.description || '';
      const hasHTML = d.includes('<p>');
      console.log(`\n=== ${museum.name} (${museum.city}) [${museum.Artwork.length}+ artworks, desc: ${d.length}c ${hasHTML ? 'HTML' : 'PLAIN'}] ===`);
      museum.Artwork.forEach(a => {
        const artist = a.Artist ? `${a.Artist.name} (${a.Artist.slug})` : 'Unknown';
        console.log(`  - "${a.title}" (${a.slug}) by ${artist}, ${a.year || 'n.d.'}`);
      });
    }
  }
}

query().catch(console.error).finally(() => prisma.$disconnect());
