const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'palma-vecchio', 'worthington-whittredge', 'bruno-liljefors', 'tintoretto',
  'ferdinand-georg-waldmuller', 'jean-antoine-watteau', 'fernand-khnopff', 'hendrick-avercamp',
  'vasily-polenov', 'felicien-rops', 'godfried-schalcken', 'claude-monet',
  'diego-velazquez', 'george-caleb-bingham', 'berthe-morisot', 'giovanni-di-paolo',
  'ilya-repin', 'paulus-potter', 'rene-magritte', 'henri-matisse', 'giovanni-segantini',
  'leon-spilliaert', 'suzanne-valadon', 'atkinson-grimshaw', 'ivan-shishkin'
];

async function main() {
  for (const slug of slugs) {
    const artist = await prisma.artist.findUnique({
      where: { slug },
      select: {
        slug: true,
        name: true,
        nationality: true,
        birthYear: true,
        deathYear: true,
        wikipediaUrl: true,
        faqs: true,
        Movement: { select: { slug: true, name: true } }
      }
    });

    if (artist) {
      console.log('\n=== ' + artist.slug + ' ===');
      console.log('Name:', artist.name);
      console.log('Nationality:', artist.nationality);
      console.log('Years:', artist.birthYear, '-', artist.deathYear);
      console.log('Movements:', artist.Movement?.map(m => m.name).join(', ') || 'None');
      console.log('Wikipedia:', artist.wikipediaUrl || 'None');
      console.log('FAQs:', JSON.stringify(artist.faqs, null, 2));
    } else {
      console.log('\n=== ' + slug + ' === NOT FOUND');
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
