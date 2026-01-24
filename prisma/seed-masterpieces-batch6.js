const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 6 (Sculpture & Asian Art) ===\n');

  // Create Auguste Rodin
  let rodinId;
  const existingRodin = await prisma.artist.findFirst({ where: { name: { contains: 'Rodin' } } });
  if (!existingRodin) {
    const rodin = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Auguste Rodin',
        slug: 'auguste-rodin',
        birthYear: 1840,
        deathYear: 1917,
        nationality: 'French',
        updatedAt: new Date(),
      }
    });
    rodinId = rodin.id;
    console.log('Created artist: Auguste Rodin');
  } else {
    rodinId = existingRodin.id;
  }

  // Create Ancient Greek (Unknown) artist for classical sculptures
  let ancientGreekId;
  const existingAncient = await prisma.artist.findFirst({ where: { slug: 'ancient-greek' } });
  if (!existingAncient) {
    const ancient = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Ancient Greek (Unknown)',
        slug: 'ancient-greek',
        birthYear: null,
        deathYear: null,
        nationality: 'Greek',
        updatedAt: new Date(),
      }
    });
    ancientGreekId = ancient.id;
    console.log('Created artist: Ancient Greek (Unknown)');
  } else {
    ancientGreekId = existingAncient.id;
  }

  // Create Hiroshige
  let hiroshigeId;
  const existingHiroshige = await prisma.artist.findFirst({ where: { name: { contains: 'Hiroshige' } } });
  if (!existingHiroshige) {
    const hiroshige = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Utagawa Hiroshige',
        slug: 'utagawa-hiroshige',
        birthYear: 1797,
        deathYear: 1858,
        nationality: 'Japanese',
        updatedAt: new Date(),
      }
    });
    hiroshigeId = hiroshige.id;
    console.log('Created artist: Utagawa Hiroshige');
  } else {
    hiroshigeId = existingHiroshige.id;
  }

  const museums = {
    louvre: 'd6b2c0bc-239d-4a46-90f9-2d4c67df6501',
    vatican: 'cmkhrgd19000nj6io0n23ez4q',
  };

  const artists = {
    michelangelo: 'cmkhrgimd0010j6io0ax66jch',
    rodin: rodinId,
    ancientGreek: ancientGreekId,
    hiroshige: hiroshigeId,
    hokusai: 'cmkijtrit001zccbdsxk4i1du',
  };

  const artworks = [
    // === MICHELANGELO SCULPTURE ===
    {
      title: 'David',
      slug: 'david-michelangelo',
      year: 1504,
      medium: 'Marble',
      dimensions: '517 cm (17 ft) tall',
      artistId: artists.michelangelo,
      museumId: null, // Galleria dell'Accademia, Florence
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/%27David%27_by_Michelangelo_Fir_JBU002.jpg/800px-%27David%27_by_Michelangelo_Fir_JBU002.jpg',
    },
    {
      title: 'Pietà',
      slug: 'pieta-michelangelo',
      year: 1499,
      medium: 'Marble',
      dimensions: '174 cm × 195 cm',
      artistId: artists.michelangelo,
      museumId: museums.vatican,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg/800px-Michelangelo%27s_Pieta_5450_cropncleaned_edit.jpg',
    },

    // === RODIN ===
    {
      title: 'The Thinker',
      slug: 'the-thinker-rodin',
      year: 1904,
      medium: 'Bronze',
      dimensions: '186 cm (73 in) tall',
      artistId: artists.rodin,
      museumId: null, // Musée Rodin + many casts
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/800px-Mus%C3%A9e_Rodin_1.jpg',
    },
    {
      title: 'The Kiss',
      slug: 'the-kiss-rodin',
      year: 1889,
      medium: 'Marble',
      dimensions: '181.5 cm × 112.5 cm × 117 cm',
      artistId: artists.rodin,
      museumId: null, // Musée Rodin
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rodin_-_Le_Baiser_06.jpg/800px-Rodin_-_Le_Baiser_06.jpg',
    },
    {
      title: 'The Gates of Hell',
      slug: 'gates-of-hell-rodin',
      year: 1917,
      medium: 'Bronze',
      dimensions: '600 cm × 400 cm × 100 cm',
      artistId: artists.rodin,
      museumId: null, // Musée Rodin
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mus%C3%A9e_Rodin_-_La_Porte_de_l%27Enfer.jpg/800px-Mus%C3%A9e_Rodin_-_La_Porte_de_l%27Enfer.jpg',
    },
    {
      title: 'The Burghers of Calais',
      slug: 'burghers-of-calais',
      year: 1889,
      medium: 'Bronze',
      dimensions: '201 cm × 239 cm × 191 cm',
      artistId: artists.rodin,
      museumId: null, // Multiple casts exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Calais_burridge.jpg/800px-Calais_burridge.jpg',
    },

    // === ANCIENT GREEK ===
    {
      title: 'Venus de Milo',
      slug: 'venus-de-milo',
      year: -100,
      medium: 'Marble',
      dimensions: '204 cm (6 ft 8 in) tall',
      artistId: artists.ancientGreek,
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Front_views_of_the_Venus_de_Milo.jpg/800px-Front_views_of_the_Venus_de_Milo.jpg',
    },
    {
      title: 'Winged Victory of Samothrace',
      slug: 'winged-victory-samothrace',
      year: -190,
      medium: 'Marble',
      dimensions: '244 cm (8 ft) tall',
      artistId: artists.ancientGreek,
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/800px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg',
    },
    {
      title: 'Laocoön and His Sons',
      slug: 'laocoon-and-his-sons',
      year: -40,
      medium: 'Marble',
      dimensions: '208 cm (6 ft 10 in) tall',
      artistId: artists.ancientGreek,
      museumId: museums.vatican,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg/800px-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg',
    },
    {
      title: 'Discobolus',
      slug: 'discobolus',
      year: -450,
      medium: 'Marble (Roman copy of bronze original)',
      dimensions: '155 cm (5 ft 1 in) tall',
      artistId: artists.ancientGreek,
      museumId: null, // Multiple copies exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG/800px-Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG',
    },

    // === HIROSHIGE ===
    {
      title: 'Sudden Shower over Shin-Ōhashi Bridge',
      slug: 'sudden-shower-shin-ohashi',
      year: 1857,
      medium: 'Woodblock print',
      dimensions: '34 cm × 22 cm',
      artistId: artists.hiroshige,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hiroshige_-_Evening_Shower_at_Atake_and_the_Great_Bridge.jpg/800px-Hiroshige_-_Evening_Shower_at_Atake_and_the_Great_Bridge.jpg',
    },
    {
      title: 'Plum Park in Kameido',
      slug: 'plum-park-kameido',
      year: 1857,
      medium: 'Woodblock print',
      dimensions: '34 cm × 22 cm',
      artistId: artists.hiroshige,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hiroshige_-_Plum_Garden%2C_Kameido.jpg/800px-Hiroshige_-_Plum_Garden%2C_Kameido.jpg',
    },
    {
      title: 'Night Snow at Kambara',
      slug: 'night-snow-kambara',
      year: 1834,
      medium: 'Woodblock print',
      dimensions: '22.5 cm × 35 cm',
      artistId: artists.hiroshige,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hiroshige_-_Night_Snow_at_Kambara.jpg/800px-Hiroshige_-_Night_Snow_at_Kambara.jpg',
    },
    {
      title: 'The Sea at Satta in Suruga Province',
      slug: 'sea-at-satta-suruga',
      year: 1858,
      medium: 'Woodblock print',
      dimensions: '34 cm × 22 cm',
      artistId: artists.hiroshige,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hiroshige_-_The_Sea_at_Satta%2C_Suruga_Province.jpg/800px-Hiroshige_-_The_Sea_at_Satta%2C_Suruga_Province.jpg',
    },

    // === MORE HOKUSAI ===
    {
      title: 'Fine Wind, Clear Morning (Red Fuji)',
      slug: 'red-fuji-hokusai',
      year: 1831,
      medium: 'Woodblock print',
      dimensions: '25.4 cm × 38 cm',
      artistId: artists.hokusai,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Red_Fuji_southern_wind_clear_morning.jpg/800px-Red_Fuji_southern_wind_clear_morning.jpg',
    },
    {
      title: 'Thunderstorm Beneath the Summit',
      slug: 'thunderstorm-beneath-summit',
      year: 1831,
      medium: 'Woodblock print',
      dimensions: '25.4 cm × 38 cm',
      artistId: artists.hokusai,
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lightnings_below_the_summit.jpg/800px-Lightnings_below_the_summit.jpg',
    },
  ];

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
