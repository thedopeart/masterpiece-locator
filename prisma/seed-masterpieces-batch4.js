const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 4 ===\n');

  // First, create Andrew Wyeth if he doesn't exist
  let wyethId;
  const existingWyeth = await prisma.artist.findFirst({
    where: { name: { contains: 'Wyeth' } }
  });

  if (!existingWyeth) {
    const wyeth = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Andrew Wyeth',
        slug: 'andrew-wyeth',
        birthYear: 1917,
        deathYear: 2009,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    wyethId = wyeth.id;
    console.log('Created artist: Andrew Wyeth');
  } else {
    wyethId = existingWyeth.id;
    console.log('Artist exists: Andrew Wyeth');
  }

  const museums = {
    moma: 'cmkhrgca7000bj6io9gs2s8zb',
    met: 'cmkhrgcm8000gj6io8i2bkef9',
    orsay: 'cmkhrgcsx000jj6iooirmr673',
    courtauld: '4bdb9281-7491-4e1f-89f8-c2eee4692065',
  };

  const artists = {
    matisse: 'cmkhxgsy4001g8tek1tpezkql',
    gauguin: 'cmkilpfmx0008o9d7g7lghhrn',
    homer: 'cmkjdy0to000ou6v2atgp35pn',
    degas: 'cmkhrgkq80014j6io8za38p2r',
    wyeth: wyethId,
  };

  const artworks = [
    // === MATISSE ===
    {
      title: 'The Red Studio',
      slug: 'the-red-studio',
      year: 1911,
      medium: 'Oil on canvas',
      dimensions: '181 cm × 219.1 cm',
      artistId: artists.matisse,
      museumId: museums.moma,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Matisse_-_The_Red_Studio.jpg',
    },
    {
      title: 'The Snail',
      slug: 'the-snail-matisse',
      year: 1953,
      medium: 'Gouache on paper, cut and pasted on paper',
      dimensions: '286.4 cm × 287 cm',
      artistId: artists.matisse,
      museumId: null, // Tate
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/41/The_Snail.jpg',
    },

    // === WYETH ===
    {
      title: "Christina's World",
      slug: 'christinas-world',
      year: 1948,
      medium: 'Tempera on panel',
      dimensions: '81.9 cm × 121.3 cm',
      artistId: artists.wyeth,
      museumId: museums.moma,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Christinas_World.jpg',
    },

    // === GAUGUIN ===
    {
      title: 'Two Tahitian Women',
      slug: 'two-tahitian-women',
      year: 1899,
      medium: 'Oil on canvas',
      dimensions: '94 cm × 72.4 cm',
      artistId: artists.gauguin,
      museumId: museums.met,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paul_Gauguin_-_Two_Tahitian_Women.jpg/800px-Paul_Gauguin_-_Two_Tahitian_Women.jpg',
    },
    {
      title: 'Nevermore',
      slug: 'nevermore-gauguin',
      year: 1897,
      medium: 'Oil on canvas',
      dimensions: '60.5 cm × 116 cm',
      artistId: artists.gauguin,
      museumId: museums.courtauld,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Paul_Gauguin_-_Nevermore_-_Google_Art_Project.jpg/800px-Paul_Gauguin_-_Nevermore_-_Google_Art_Project.jpg',
    },
    {
      title: 'Tahitian Women on the Beach',
      slug: 'tahitian-women-on-beach',
      year: 1891,
      medium: 'Oil on canvas',
      dimensions: '69 cm × 91 cm',
      artistId: artists.gauguin,
      museumId: museums.orsay,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paul_Gauguin_056.jpg/800px-Paul_Gauguin_056.jpg',
    },

    // === HOMER ===
    {
      title: 'The Fog Warning',
      slug: 'fog-warning-homer',
      year: 1885,
      medium: 'Oil on canvas',
      dimensions: '76.83 cm × 123.19 cm',
      artistId: artists.homer,
      museumId: null, // Museum of Fine Arts Boston
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Winslow_Homer_-_The_Fog_Warning.jpg/800px-Winslow_Homer_-_The_Fog_Warning.jpg',
    },
    {
      title: 'The Gulf Stream',
      slug: 'gulf-stream-homer',
      year: 1899,
      medium: 'Oil on canvas',
      dimensions: '71.4 cm × 124.8 cm',
      artistId: artists.homer,
      museumId: museums.met,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg/800px-Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg',
    },
    {
      title: 'Right and Left',
      slug: 'right-and-left-homer',
      year: 1909,
      medium: 'Oil on canvas',
      dimensions: '71.8 cm × 122.9 cm',
      artistId: artists.homer,
      museumId: null, // National Gallery of Art
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Right_and_Left.jpg/800px-Right_and_Left.jpg',
    },

    // === DEGAS ===
    {
      title: 'Little Dancer of Fourteen Years',
      slug: 'little-dancer-fourteen-years',
      year: 1881,
      medium: 'Bronze with fabric and ribbon',
      dimensions: '98.9 cm high',
      artistId: artists.degas,
      museumId: null, // Multiple casts exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Degas-dancer.jpg/800px-Degas-dancer.jpg',
    },

    // === MORE HIGH-SEARCH WORKS ===
    // Bruegel Tower of Babel if missing
  ];

  // Check for Tower of Babel and add if missing
  const babelExists = await prisma.artwork.findFirst({ where: { slug: { contains: 'babel' } } });
  if (!babelExists) {
    const bruegel = await prisma.artist.findFirst({ where: { name: { contains: 'Bruegel' } } });
    if (bruegel) {
      artworks.push({
        title: 'The Tower of Babel',
        slug: 'tower-of-babel',
        year: 1563,
        medium: 'Oil on oak panel',
        dimensions: '114 cm × 155 cm',
        artistId: bruegel.id,
        museumId: null, // Kunsthistorisches Museum
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/800px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg',
      });
    }
  }

  let added = 0;
  let skipped = 0;

  for (const art of artworks) {
    const exists = await prisma.artwork.findFirst({
      where: { slug: art.slug }
    });

    if (exists) {
      console.log(`Skipped (exists): ${art.title}`);
      skipped++;
      continue;
    }

    await prisma.artwork.create({
      data: {
        id: randomUUID(),
        title: art.title,
        slug: art.slug,
        year: art.year,
        medium: art.medium,
        dimensions: art.dimensions,
        imageUrl: art.imageUrl,
        artistId: art.artistId,
        museumId: art.museumId,
        updatedAt: new Date(),
      }
    });

    console.log(`Added: ${art.title}`);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
