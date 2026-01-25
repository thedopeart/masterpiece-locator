const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'museo-civico-di-sansepolcro-sansepolcro-italy',
  'muse-marmottan-monet-paris',
  'art-gallery-of-new-south-wales-agnsw-sydney-austra',
  'rhode-island-school-of-design-museum-risd-museum-p',
  'fries-museum-leeuwarden-netherlands',
  'mus233e-calvet-avignon-france',
  'mus233e-des-beauxarts-de-dijon-dijon-france',
  'victoria-and-albert-museum-vampa-london-uk',
  'vatican-museums',
  'ateneum',
  'national-gallery-of-ancient-art-gnaa-rome-italy',
  'national-gallery-ireland',
  'princeton-university-art-museum-puam-princeton-nj-',
  'kunsthalle-bremen',
  'duomo-di-siena-siena-italy',
  'cooper-hewitt-smithsonian-design-museum-new-york-c',
  'mus233e-de-picardie-amiens-france',
  'mus233e-picasso-paris-france',
  'barber-institute-of-fine-arts-birmingham-uk',
  'basilica-of-st-domenico-bologna-italy',
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
            medium: true,
            Artist: { select: { name: true, slug: true } },
          },
        },
      },
    });
    if (museum) {
      console.log(`\n=== ${museum.name} (${museum.city}, ${museum.country}) ===`);
      console.log(`Slug: ${museum.slug}`);
      console.log(`Artworks:`);
      museum.Artwork.forEach(a => {
        const artist = a.Artist ? `${a.Artist.name} (${a.Artist.slug})` : 'Unknown';
        console.log(`  - "${a.title}" (${a.slug}) by ${artist}, ${a.year || 'n.d.'}`);
      });
    } else {
      console.log(`\nNOT FOUND: ${slug}`);
    }
  }
}

query()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
