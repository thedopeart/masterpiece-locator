const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Famous works people search for - check if they exist
  const famousWorks = [
    // Very famous - likely searched often
    'water-lilies', 'starry-night', 'mona-lisa', 'girl-pearl-earring',
    'scream', 'persistence-of-memory', 'nighthawks', 'american-gothic',
    'guernica', 'birth-of-venus', 'creation-of-adam', 'last-supper',
    'night-watch', 'sunday-afternoon', 'kiss-klimt', 'wanderer',

    // Other famous works to check
    'olympia', 'liberty-leading', 'death-of-marat', 'grande-odalisque',
    'arnolfini', 'las-meninas', 'girl-reading-letter', 'milkmaid',
    'night-cafe', 'potato-eaters', 'sunflowers', 'bedroom-arles',
    'water-lily-pond', 'japanese-bridge', 'haystacks', 'rouen-cathedral',
    'dance-matisse', 'blue-nude', 'red-studio', 'icarus',
    'christina-world', 'whistler-mother', 'arrangement-grey-black',
    'gothic-american', 'freedom-from-want', 'nighthawk',
    'ballet-rehearsal', 'little-dancer', 'absinthe',
    'card-players', 'bathers', 'mont-sainte-victoire',
    'tahitian-women', 'yellow-christ', 'where-do-we-come',
    'ophelia', 'lady-shalott', 'flaming-june',
    'saturn-devouring', 'third-of-may', 'nude-maja',
    'garden-earthly', 'tower-babel',
    'venus-urbino', 'primavera',
    'raft-medusa', 'oath-horatii',
    'hay-wain', 'rain-steam-speed', 'fighting-temeraire',
    'mr-and-mrs-andrews', 'blue-boy',
    'arrangement-grey', 'fog-warning', 'gulf-stream',
  ];

  console.log('=== Checking for famous works ===\n');

  const missing = [];
  const found = [];

  for (const term of famousWorks) {
    const exists = await prisma.artwork.findFirst({
      where: { slug: { contains: term } },
      select: { title: true, slug: true }
    });
    if (exists) {
      found.push(exists.title);
    } else {
      missing.push(term);
    }
  }

  console.log('FOUND:', found.length);
  console.log('MISSING search terms:', missing.join(', '));

  // Check specific highly-searched artists for gaps
  console.log('\n=== Artists with potential gaps ===\n');

  const artistChecks = [
    { name: 'Winslow Homer', search: 'Homer' },
    { name: 'Andrew Wyeth', search: 'Wyeth' },
    { name: 'Norman Rockwell', search: 'Rockwell' },
    { name: 'Frederic Remington', search: 'Remington' },
    { name: 'Thomas Kinkade', search: 'Kinkade' },
    { name: 'Alphonse Mucha', search: 'Mucha' },
    { name: 'Tamara de Lempicka', search: 'Lempicka' },
    { name: 'Egon Schiele', search: 'Schiele' },
    { name: 'Gustav Klimt', search: 'Klimt' },
    { name: 'Amedeo Modigliani', search: 'Modigliani' },
  ];

  for (const artist of artistChecks) {
    const a = await prisma.artist.findFirst({
      where: { name: { contains: artist.search } },
      include: { _count: { select: { Artwork: true } } }
    });
    if (a) {
      console.log(`${a.name}: ${a._count.Artwork} works`);
    } else {
      console.log(`${artist.name}: NOT IN DATABASE`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
