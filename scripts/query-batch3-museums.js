const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'borghese-gallery-rome-italy',
  'birmingham-museum-and-art-gallery-birmingham-uk',
  'alte-pinakothek',
  'british-library-london-uk',
  'palazzo-pitti',
  'getty-center',
  'budapest-museum-of-fine-arts-budapest-hungary',
  'van-gogh-museum',
  'saint-louis-art-museum-st-louis-mo-us',
  'brooklyn-museum',
  'ashmolean-museum-oxford-uk',
  'yale-centre-for-british-art-yale-university-new-ha',
  'mus233e-fabre-montpellier-france',
  'wadsworth-atheneum',
  'national-gallery-oslo',
  'nationalmuseum-stockholm-sweden',
  'gem228ldegalerie-alte-meister-dresden-germany',
  'mus233e-national-gustave-moreau-paris-france',
  'pinacoteca-di-brera',
  'wallace-collection',
];

async function query() {
  for (const slug of slugs) {
    const museum = await prisma.museum.findUnique({
      where: { slug },
      include: {
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
