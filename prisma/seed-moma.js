const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding MoMA Collection ===\n');

  // Get MoMA
  const moma = await prisma.museum.findFirst({
    where: { name: { contains: 'Museum of Modern Art' } }
  });

  if (!moma) {
    console.log('ERROR: MoMA not found in database');
    return;
  }

  console.log(`Found: ${moma.name} (${moma.id})\n`);

  // Get existing artists
  const picasso = await prisma.artist.findFirst({ where: { slug: 'pablo-picasso' } });
  const vanGogh = await prisma.artist.findFirst({ where: { slug: 'vincent-van-gogh' } });
  const monet = await prisma.artist.findFirst({ where: { slug: 'claude-monet' } });
  const matisse = await prisma.artist.findFirst({ where: { slug: 'henri-matisse' } });
  const dali = await prisma.artist.findFirst({ where: { slug: 'salvador-dali' } });
  const warhol = await prisma.artist.findFirst({ where: { slug: 'andy-warhol' } });
  const mondrian = await prisma.artist.findFirst({ where: { slug: 'piet-mondrian' } });
  const rousseau = await prisma.artist.findFirst({ where: { slug: 'henri-rousseau' } });
  const cezanne = await prisma.artist.findFirst({ where: { slug: 'paul-cezanne' } });

  // Get or create Jackson Pollock
  let pollockId;
  const existingPollock = await prisma.artist.findFirst({ where: { slug: 'jackson-pollock' } });
  if (!existingPollock) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Jackson Pollock',
        slug: 'jackson-pollock',
        birthYear: 1912,
        deathYear: 1956,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    pollockId = artist.id;
    console.log('Created artist: Jackson Pollock');
  } else {
    pollockId = existingPollock.id;
    console.log('Artist exists: Jackson Pollock');
  }

  // Get or create Mark Rothko
  let rothkoId;
  const existingRothko = await prisma.artist.findFirst({ where: { slug: 'mark-rothko' } });
  if (!existingRothko) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Mark Rothko',
        slug: 'mark-rothko',
        birthYear: 1903,
        deathYear: 1970,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    rothkoId = artist.id;
    console.log('Created artist: Mark Rothko');
  } else {
    rothkoId = existingRothko.id;
    console.log('Artist exists: Mark Rothko');
  }

  // Get or create Willem de Kooning
  let deKooningId;
  const existingDeKooning = await prisma.artist.findFirst({ where: { slug: 'willem-de-kooning' } });
  if (!existingDeKooning) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Willem de Kooning',
        slug: 'willem-de-kooning',
        birthYear: 1904,
        deathYear: 1997,
        nationality: 'Dutch-American',
        updatedAt: new Date(),
      }
    });
    deKooningId = artist.id;
    console.log('Created artist: Willem de Kooning');
  } else {
    deKooningId = existingDeKooning.id;
    console.log('Artist exists: Willem de Kooning');
  }

  // Get or create Jasper Johns
  let johnsId;
  const existingJohns = await prisma.artist.findFirst({ where: { slug: 'jasper-johns' } });
  if (!existingJohns) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Jasper Johns',
        slug: 'jasper-johns',
        birthYear: 1930,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    johnsId = artist.id;
    console.log('Created artist: Jasper Johns');
  } else {
    johnsId = existingJohns.id;
    console.log('Artist exists: Jasper Johns');
  }

  // Get or create Roy Lichtenstein
  let lichtensteinId;
  const existingLichtenstein = await prisma.artist.findFirst({ where: { slug: 'roy-lichtenstein' } });
  if (!existingLichtenstein) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Roy Lichtenstein',
        slug: 'roy-lichtenstein',
        birthYear: 1923,
        deathYear: 1997,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    lichtensteinId = artist.id;
    console.log('Created artist: Roy Lichtenstein');
  } else {
    lichtensteinId = existingLichtenstein.id;
    console.log('Artist exists: Roy Lichtenstein');
  }

  // Get or create Frida Kahlo
  let kahloId;
  const existingKahlo = await prisma.artist.findFirst({ where: { slug: 'frida-kahlo' } });
  if (!existingKahlo) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Frida Kahlo',
        slug: 'frida-kahlo',
        birthYear: 1907,
        deathYear: 1954,
        nationality: 'Mexican',
        updatedAt: new Date(),
      }
    });
    kahloId = artist.id;
    console.log('Created artist: Frida Kahlo');
  } else {
    kahloId = existingKahlo.id;
    console.log('Artist exists: Frida Kahlo');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === ICONIC MoMA PAINTINGS ===
    {
      title: 'The Starry Night',
      slug: 'starry-night-van-gogh',
      year: 1889,
      medium: 'Oil on canvas',
      dimensions: '73.7 cm × 92.1 cm (29 × 36.25 in)',
      artistId: vanGogh?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Les Demoiselles d\'Avignon',
      slug: 'demoiselles-avignon-picasso',
      year: 1907,
      medium: 'Oil on canvas',
      dimensions: '243.9 cm × 233.7 cm (96 × 92 in)',
      artistId: picasso?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Persistence of Memory',
      slug: 'persistence-of-memory-dali',
      year: 1931,
      medium: 'Oil on canvas',
      dimensions: '24 cm × 33 cm (9.5 × 13 in)',
      artistId: dali?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Water Lilies (MoMA triptych)',
      slug: 'water-lilies-moma-monet',
      year: 1914,
      medium: 'Oil on canvas',
      dimensions: 'Three panels, each 200 cm × 424 cm',
      artistId: monet?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Dream',
      slug: 'dream-rousseau',
      year: 1910,
      medium: 'Oil on canvas',
      dimensions: '204.5 cm × 298.5 cm (80.5 × 117.5 in)',
      artistId: rousseau?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Henri_Rousseau_-_The_Dream_-_Google_Art_Project.jpg/800px-Henri_Rousseau_-_The_Dream_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Broadway Boogie Woogie',
      slug: 'broadway-boogie-woogie-mondrian',
      year: 1943,
      medium: 'Oil on canvas',
      dimensions: '127 cm × 127 cm (50 × 50 in)',
      artistId: mondrian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg/800px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Bather',
      slug: 'bather-cezanne-moma',
      year: 1885,
      medium: 'Oil on canvas',
      dimensions: '127 cm × 96.8 cm (50 × 38.1 in)',
      artistId: cezanne?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Paul_C%C3%A9zanne_-_The_Bather_-_Google_Art_Project.jpg/800px-Paul_C%C3%A9zanne_-_The_Bather_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Dance (I)',
      slug: 'dance-matisse-moma',
      year: 1909,
      medium: 'Oil on canvas',
      dimensions: '259.7 cm × 390.1 cm (102.2 × 153.6 in)',
      artistId: matisse?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Matisse_-_Dance_%28I%29.jpg',
      artworkType: 'painting',
    },

    // === ABSTRACT EXPRESSIONISM ===
    {
      title: 'One: Number 31, 1950',
      slug: 'one-number-31-pollock',
      year: 1950,
      medium: 'Oil and enamel paint on canvas',
      dimensions: '269.5 cm × 530.8 cm (106.1 × 209 in)',
      artistId: pollockId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Pollock_Number_31_1950.jpg/800px-Pollock_Number_31_1950.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Full Fathom Five',
      slug: 'full-fathom-five-pollock',
      year: 1947,
      medium: 'Oil on canvas with nails, tacks, buttons, coins, cigarettes',
      dimensions: '129.2 cm × 76.5 cm (50.9 × 30.1 in)',
      artistId: pollockId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/38/Full_Fathom_Five.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Woman I',
      slug: 'woman-i-de-kooning',
      year: 1952,
      medium: 'Oil on canvas',
      dimensions: '192.7 cm × 147.3 cm (75.9 × 58 in)',
      artistId: deKooningId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/De_Kooning_Woman_I.jpg',
      artworkType: 'painting',
    },
    {
      title: 'No. 61 (Rust and Blue)',
      slug: 'no-61-rust-blue-rothko',
      year: 1953,
      medium: 'Oil on canvas',
      dimensions: '294.3 cm × 232.1 cm (115.9 × 91.4 in)',
      artistId: rothkoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Rothko_No_61_Rust_and_Blue.jpg',
      artworkType: 'painting',
    },

    // === POP ART ===
    {
      title: 'Gold Marilyn Monroe',
      slug: 'gold-marilyn-warhol',
      year: 1962,
      medium: 'Silkscreen ink and acrylic on canvas',
      dimensions: '211.4 cm × 144.7 cm (83.25 × 57 in)',
      artistId: warhol?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Warhol-Gold-Marilyn.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Campbell\'s Soup Cans',
      slug: 'campbells-soup-cans-warhol',
      year: 1962,
      medium: 'Synthetic polymer paint on canvas (32 canvases)',
      dimensions: 'Each: 50.8 cm × 40.6 cm (20 × 16 in)',
      artistId: warhol?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Campbell%27s_Soup_Cans_MOMA.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Girl with Ball',
      slug: 'girl-with-ball-lichtenstein',
      year: 1961,
      medium: 'Oil on canvas',
      dimensions: '153 cm × 91.9 cm (60.25 × 36.2 in)',
      artistId: lichtensteinId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Roy_Lichtenstein_Girl_With_Ball.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Drowning Girl',
      slug: 'drowning-girl-lichtenstein',
      year: 1963,
      medium: 'Oil and synthetic polymer paint on canvas',
      dimensions: '171.6 cm × 169.5 cm (67.6 × 66.7 in)',
      artistId: lichtensteinId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg',
      artworkType: 'painting',
    },

    // === NEO-DADA / EARLY POP ===
    {
      title: 'Flag',
      slug: 'flag-jasper-johns',
      year: 1955,
      medium: 'Encaustic, oil, and collage on fabric',
      dimensions: '107.3 cm × 154 cm (42.25 × 60.6 in)',
      artistId: johnsId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Jasper_Johns_Flag_1954-55.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Three Flags',
      slug: 'three-flags-johns',
      year: 1958,
      medium: 'Encaustic on canvas',
      dimensions: '78.4 cm × 115.6 cm × 12.7 cm',
      artistId: johnsId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/JasperJohnsThreeFlags.jpg',
      artworkType: 'painting',
    },

    // === FRIDA KAHLO ===
    {
      title: 'Self-Portrait with Cropped Hair',
      slug: 'self-portrait-cropped-hair-kahlo',
      year: 1940,
      medium: 'Oil on canvas',
      dimensions: '40 cm × 27.9 cm (15.7 × 11 in)',
      artistId: kahloId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Frida_Kahlo_-_Self_Portrait_with_Cropped_Hair.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Fulang-Chang and I',
      slug: 'fulang-chang-kahlo',
      year: 1937,
      medium: 'Oil on composition board',
      dimensions: '40 cm × 27.9 cm (15.7 × 11 in)',
      artistId: kahloId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Frida_Kahlo_%28self_portrait%29_%281937%29.jpg',
      artworkType: 'painting',
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
        museumId: moma.id,
        artworkType: art.artworkType,
        updatedAt: new Date(),
      }
    });

    console.log(`Added: ${art.title}`);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);

  const totalCount = await prisma.artwork.count({
    where: { museumId: moma.id }
  });
  console.log(`\nMoMA total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
