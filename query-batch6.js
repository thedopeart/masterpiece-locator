const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const slugs = [
    'jean-antoine-watteau-savoyard-with-a-marmot',
    'jean-auguste-dominique-ingres-le-casino-de-l39aurore-de-la-villa-ludovisi',
    'rembrandt-st-jerome-reading',
    'rembrandt-woman-wearing-a-gold-chain',
    'jean-honore-fragonard-the-happy-lovers',
    'rembrandt-the-pancake-woman',
    'bronzino-portrait-of-cosimo-i-de39-medici-as-orpheus',
    'lawrence-alma-tadema-preparations-for-the-festivities',
    'gustav-klimt-portrait-of-a-man-with-beard-in-three-quarter-prof',
    'luca-signorelli-the-holy-family',
    'rembrandt-selfportrait-leaning-on-a-stone-sill',
    'rembrandt-portrait-of-artist39s-mother',
    'max-liebermann-lumberjack-in-the-forest',
    'carl-spitzweg-the-sunday-hunting',
    'nicolas-poussin-martyrdom-of-st-erasmus',
    'rembrandt-self-portrait-in-a-flat-cap-and-embroidered-dress',
    'rembrandt-the-sleeping-herdsman',
    'paul-delaroche-herodias',
    'paul-signac-river39s-edge-the-siene-at-herblay',
    'gustav-klimt-sitting-nude-man-turned-to-the-left',
    'piero-della-francesca-st-ludovico',
    'rembrandt-virgin-and-child-in-the-clouds',
    'chaim-soutine-young-woman',
    'pierre-bonnard-the-white-cat',
    'rembrandt-jan-cornelisz-sylvius-the-preacher'
  ];

  for (const slug of slugs) {
    const artwork = await prisma.artwork.findUnique({
      where: { slug },
      include: {
        Artist: true,
        Museum: true
      }
    });
    
    if (artwork) {
      const year = artwork.completionYear || 'Unknown';
      console.log('\\n=== ' + artwork.title + ' ===');
      console.log('Slug: ' + artwork.slug);
      console.log('Artist: ' + artwork.Artist?.name + ' (' + artwork.Artist?.slug + ')');
      console.log('Year: ' + year);
      console.log('Museum: ' + artwork.Museum?.name + ' (' + artwork.Museum?.slug + ')');
      console.log('Wikipedia: ' + (artwork.wikipediaUrl || 'None'));
    } else {
      console.log('\\nNOT FOUND: ' + slug);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.disconnect());
