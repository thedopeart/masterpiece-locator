const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'petit-palais-paris-france',
  'clark-art-institute',
  'belvedere',
  'scottish-national-gallery',
  'hamburger-kunsthalle',
  'national-portrait-gallery-london-uk',
  'museum-of-fine-arts-of-seville-seville-spain',
  '201cole-nationale-sup233rieure-des-beauxarts-ensba',
  'lacma',
  'museu-de-belles-arts-de-val232ncia-valencia-spain',
  'musee-toulouse-lautrec',
  'munch-museum',
  'royal-collection-uk',
  'basilica-della-santissima-annunziata-florence-ital',
  'dolores-olmedo-collection-mexico-city-mexico',
  'norton-simon-museum-pasadena-ca-us',
  'albertina-vienna-austria',
  'national-gallery-victoria',
  'mus233e-thomashenry-cherbourg-france',
  'mus233e-cond233-chantilly-france',
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
