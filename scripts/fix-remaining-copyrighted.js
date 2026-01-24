const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// These artists died less than 70 years ago, so their works are still copyrighted
// Matisse d.1954 (copyright until 2024 in some countries, still restricted)
// Pollock d.1956 (copyright until 2026)
// Kahlo d.1954
// Jasper Johns b.1930 (still alive)
// David Hockney b.1937 (still alive)

const copyrightedSlugs = [
  // Matisse (died 1954)
  { slug: 'the-dance-matisse', artist: 'Henri Matisse' },
  { slug: 'blue-nude-matisse', artist: 'Henri Matisse' },
  { slug: 'woman-with-a-hat-matisse', artist: 'Henri Matisse' },
  { slug: 'the-red-studio', artist: 'Henri Matisse' },
  { slug: 'the-snail-matisse', artist: 'Henri Matisse' },
  { slug: 'dance-matisse-moma', artist: 'Henri Matisse' },

  // Pollock (died 1956)
  { slug: 'no-5-1948-pollock', artist: 'Jackson Pollock' },
  { slug: 'autumn-rhythm-pollock', artist: 'Jackson Pollock' },
  { slug: 'convergence-pollock', artist: 'Jackson Pollock' },
  { slug: 'blue-poles-pollock', artist: 'Jackson Pollock' },
  { slug: 'full-fathom-five-pollock', artist: 'Jackson Pollock' },

  // Kahlo (died 1954)
  { slug: 'fulang-chang-kahlo', artist: 'Frida Kahlo' },
  { slug: 'self-portrait-cropped-hair-kahlo', artist: 'Frida Kahlo' },

  // Johns (still alive)
  { slug: 'three-flags-johns', artist: 'Jasper Johns' },

  // Hockney (still alive)
  { slug: 'bigger-splash-hockney', artist: 'David Hockney' },
];

async function fix() {
  console.log('Setting remaining copyrighted artworks to null...\n');

  let updated = 0;

  for (const item of copyrightedSlugs) {
    try {
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          imageUrl: null,
          imageAttribution: `Copyrighted - ${item.artist}`
        }
      });
      console.log(`✓ Set null: ${item.slug} (${item.artist})`);
      updated++;
    } catch (e) {
      if (e.code === 'P2025') {
        console.log(`- Not found: ${item.slug}`);
      } else {
        console.log(`✗ Error: ${item.slug} - ${e.message}`);
      }
    }
  }

  console.log(`\n---`);
  console.log(`Updated: ${updated}`);

  await prisma.$disconnect();
}

fix();
