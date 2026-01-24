const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 7 (Modern Art) ===\n');

  // Get artist IDs
  const pollock = await prisma.artist.findFirst({ where: { name: { contains: 'Pollock' } } });
  const rothko = await prisma.artist.findFirst({ where: { name: { contains: 'Rothko' } } });
  const warhol = await prisma.artist.findFirst({ where: { name: { contains: 'Warhol' } } });
  const lichtenstein = await prisma.artist.findFirst({ where: { name: { contains: 'Lichtenstein' } } });
  const hockney = await prisma.artist.findFirst({ where: { name: { contains: 'Hockney' } } });
  const bacon = await prisma.artist.findFirst({ where: { name: { contains: 'Bacon' } } });

  const artists = {
    pollock: pollock?.id,
    rothko: rothko?.id,
    warhol: warhol?.id,
    lichtenstein: lichtenstein?.id,
    hockney: hockney?.id,
    bacon: bacon?.id,
  };

  console.log('Artist IDs:', artists);

  const museums = {
    moma: 'cmkhrgca7000bj6io9gs2s8zb',
    tate: 'fc82fd14-a338-4089-8632-7c8686dfea31',
  };

  const artworks = [
    // === POLLOCK ===
    {
      title: 'No. 5, 1948',
      slug: 'no-5-1948-pollock',
      year: 1948,
      medium: 'Oil on fiberboard',
      dimensions: '243.8 cm × 121.9 cm',
      artistId: artists.pollock,
      museumId: null, // Private collection
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4a/No._5%2C_1948.jpg',
    },
    {
      title: 'Autumn Rhythm (Number 30)',
      slug: 'autumn-rhythm-pollock',
      year: 1950,
      medium: 'Enamel on canvas',
      dimensions: '266.7 cm × 525.8 cm',
      artistId: artists.pollock,
      museumId: null, // Met
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Autumn_Rhythm.jpg',
    },
    {
      title: 'Convergence',
      slug: 'convergence-pollock',
      year: 1952,
      medium: 'Oil on canvas',
      dimensions: '237.5 cm × 393.7 cm',
      artistId: artists.pollock,
      museumId: null, // Albright-Knox
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Convergence_%28Pollock%29.jpg',
    },
    {
      title: 'Blue Poles',
      slug: 'blue-poles-pollock',
      year: 1952,
      medium: 'Enamel and aluminum paint with glass on canvas',
      dimensions: '212.1 cm × 488.9 cm',
      artistId: artists.pollock,
      museumId: null, // National Gallery of Australia
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Blue_Poles_%28Jackson_Pollock_painting%29.jpg',
    },

    // === ROTHKO ===
    {
      title: 'No. 61 (Rust and Blue)',
      slug: 'no-61-rust-blue-rothko',
      year: 1953,
      medium: 'Oil on canvas',
      dimensions: '292.7 cm × 233.4 cm',
      artistId: artists.rothko,
      museumId: null, // LACMA
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/No_61_Mark_Rothko.jpg',
    },
    {
      title: 'Black in Deep Red',
      slug: 'black-in-deep-red-rothko',
      year: 1957,
      medium: 'Oil on canvas',
      dimensions: '176.2 cm × 136.5 cm',
      artistId: artists.rothko,
      museumId: null, // Private
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Black_in_Deep_Red.jpg',
    },

    // === WARHOL ===
    {
      title: 'Marilyn Diptych',
      slug: 'marilyn-diptych-warhol',
      year: 1962,
      medium: 'Acrylic paint on canvas',
      dimensions: '205.4 cm × 289.6 cm',
      artistId: artists.warhol,
      museumId: museums.tate,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/35/Marilyndiptych.jpg',
    },
    {
      title: 'Eight Elvises',
      slug: 'eight-elvises-warhol',
      year: 1963,
      medium: 'Silkscreen ink and silver paint on canvas',
      dimensions: '358.8 cm × 208.3 cm',
      artistId: artists.warhol,
      museumId: null, // Private
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Eight_Elvises.jpg',
    },

    // === LICHTENSTEIN ===
    {
      title: 'Whaam!',
      slug: 'whaam-lichtenstein',
      year: 1963,
      medium: 'Acrylic paint and oil paint on canvas',
      dimensions: '172.7 cm × 406.4 cm',
      artistId: artists.lichtenstein,
      museumId: museums.tate,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Roy_Lichtenstein_Whaam.jpg/800px-Roy_Lichtenstein_Whaam.jpg',
    },
    {
      title: 'Drowning Girl',
      slug: 'drowning-girl-lichtenstein',
      year: 1963,
      medium: 'Oil and synthetic polymer paint on canvas',
      dimensions: '171.6 cm × 169.5 cm',
      artistId: artists.lichtenstein,
      museumId: museums.moma,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg',
    },

    // === HOCKNEY ===
    {
      title: 'A Bigger Splash',
      slug: 'bigger-splash-hockney',
      year: 1967,
      medium: 'Acrylic on canvas',
      dimensions: '242.5 cm × 243.9 cm',
      artistId: artists.hockney,
      museumId: museums.tate,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b9/A_Bigger_Splash.jpg',
    },
    {
      title: 'Portrait of an Artist (Pool with Two Figures)',
      slug: 'pool-two-figures-hockney',
      year: 1972,
      medium: 'Acrylic on canvas',
      dimensions: '214 cm × 305 cm',
      artistId: artists.hockney,
      museumId: null, // Private (sold for $90M)
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Portrait_of_an_Artist_%28Pool_with_Two_Figures%29.jpg',
    },

    // === BACON ===
    {
      title: 'Study after Velázquez\'s Portrait of Pope Innocent X',
      slug: 'study-after-velazquez-bacon',
      year: 1953,
      medium: 'Oil on canvas',
      dimensions: '153 cm × 118 cm',
      artistId: artists.bacon,
      museumId: null, // Des Moines Art Center
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/65/Study_after_Velazquez%27s_Portrait_of_Pope_Innocent_X.jpg',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of artworks) {
    if (!art.artistId) {
      console.log(`Skipped (no artist): ${art.title}`);
      skipped++;
      continue;
    }

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
