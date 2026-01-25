const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'hermitage',
  'museo-del-prado-madrid-spain',
  'art-institute-of-chicago',
  'rijksmuseum',
  'national-gallery-of-art',
  'russian-museum',
  'kunsthistorisches-museum',
  'moma',
  'cleveland-museum-of-art',
  'british-museum',
  'mfa-boston',
  'tate-modern-london-uk',
  'tate-britain',
  'gem228ldegalerie-berlin-germany',
  'thyssenbornemisza-museum-madrid-spain',
  'kunstmuseum-basel',
  'courtauld-gallery-london',
  'basilica-of-saint-francis-of-assisi-assisi-italy',
  'philadelphia-museum-of-art',
  'st228del-frankfurt-am-main-germany',
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
          take: 8,
          orderBy: { searchVolumeTier: 'asc' },
        },
      },
    });
    if (museum) {
      console.log(`\n=== ${museum.name} (${museum.city}, ${museum.country}) [${museum.Artwork.length}+ artworks] ===`);
      museum.Artwork.forEach(a => {
        const artist = a.Artist ? `${a.Artist.name} (${a.Artist.slug})` : 'Unknown';
        console.log(`  - "${a.title}" (${a.slug}) by ${artist}, ${a.year || 'n.d.'}`);
      });
    }
  }
}

query().catch(console.error).finally(() => prisma.$disconnect());
