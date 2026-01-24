const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Metropolitan Museum Collection ===\n');

  // Get The Met
  const met = await prisma.museum.findFirst({
    where: { name: { contains: 'Metropolitan' } }
  });

  if (!met) {
    console.log('ERROR: Metropolitan Museum not found in database');
    return;
  }

  console.log(`Found: ${met.name} (${met.id})\n`);

  // Get existing artists
  const vermeer = await prisma.artist.findFirst({ where: { slug: 'johannes-vermeer' } });
  const rembrandt = await prisma.artist.findFirst({ where: { slug: 'rembrandt' } });
  const velazquez = await prisma.artist.findFirst({ where: { slug: 'diego-velazquez' } });
  const elGreco = await prisma.artist.findFirst({ where: { slug: 'el-greco' } });
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const degas = await prisma.artist.findFirst({ where: { slug: 'edgar-degas' } });
  const renoir = await prisma.artist.findFirst({ where: { slug: 'pierre-auguste-renoir' } });
  const vanGogh = await prisma.artist.findFirst({ where: { slug: 'vincent-van-gogh' } });
  const cezanne = await prisma.artist.findFirst({ where: { slug: 'paul-cezanne' } });
  const monet = await prisma.artist.findFirst({ where: { slug: 'claude-monet' } });
  const picasso = await prisma.artist.findFirst({ where: { slug: 'pablo-picasso' } });
  const klimt = await prisma.artist.findFirst({ where: { slug: 'gustav-klimt' } });
  const pollock = await prisma.artist.findFirst({ where: { slug: 'jackson-pollock' } });

  // Get or create Emanuel Leutze
  let leutzeId;
  const existingLeutze = await prisma.artist.findFirst({ where: { slug: 'emanuel-leutze' } });
  if (!existingLeutze) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Emanuel Leutze',
        slug: 'emanuel-leutze',
        birthYear: 1816,
        deathYear: 1868,
        nationality: 'German-American',
        updatedAt: new Date(),
      }
    });
    leutzeId = artist.id;
    console.log('Created artist: Emanuel Leutze');
  } else {
    leutzeId = existingLeutze.id;
    console.log('Artist exists: Emanuel Leutze');
  }

  // Get or create John Singer Sargent
  let sargentId;
  const existingSargent = await prisma.artist.findFirst({ where: { slug: 'john-singer-sargent' } });
  if (!existingSargent) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'John Singer Sargent',
        slug: 'john-singer-sargent',
        birthYear: 1856,
        deathYear: 1925,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    sargentId = artist.id;
    console.log('Created artist: John Singer Sargent');
  } else {
    sargentId = existingSargent.id;
    console.log('Artist exists: John Singer Sargent');
  }

  // Get or create Winslow Homer
  let homerId;
  const existingHomer = await prisma.artist.findFirst({ where: { slug: 'winslow-homer' } });
  if (!existingHomer) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Winslow Homer',
        slug: 'winslow-homer',
        birthYear: 1836,
        deathYear: 1910,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    homerId = artist.id;
    console.log('Created artist: Winslow Homer');
  } else {
    homerId = existingHomer.id;
    console.log('Artist exists: Winslow Homer');
  }

  // Get Ancient Egyptian artist
  const ancientEgyptian = await prisma.artist.findFirst({ where: { slug: 'ancient-egyptian' } });

  // Get Ancient Greek artist
  const ancientGreek = await prisma.artist.findFirst({ where: { slug: 'ancient-greek' } });

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === AMERICAN WING ===
    {
      title: 'Washington Crossing the Delaware',
      slug: 'washington-crossing-delaware',
      year: 1851,
      medium: 'Oil on canvas',
      dimensions: '378.5 cm × 647.7 cm (149 × 255 in)',
      artistId: leutzeId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/800px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Madame X (Madame Pierre Gautreau)',
      slug: 'madame-x-sargent',
      year: 1884,
      medium: 'Oil on canvas',
      dimensions: '234.95 cm × 109.86 cm (92.5 × 43.25 in)',
      artistId: sargentId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg/800px-Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Gulf Stream',
      slug: 'gulf-stream-homer',
      year: 1899,
      medium: 'Oil on canvas',
      dimensions: '71.4 cm × 124.8 cm (28.1 × 49.1 in)',
      artistId: homerId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg/800px-Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg',
      artworkType: 'painting',
    },

    // === EUROPEAN PAINTINGS ===
    {
      title: 'Young Woman with a Water Pitcher',
      slug: 'young-woman-water-pitcher-vermeer',
      year: 1662,
      medium: 'Oil on canvas',
      dimensions: '45.7 cm × 40.6 cm (18 × 16 in)',
      artistId: vermeer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Johannes_Vermeer_-_Woman_with_a_Water_Jug_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_Woman_with_a_Water_Jug_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Aristotle with a Bust of Homer',
      slug: 'aristotle-bust-homer-rembrandt',
      year: 1653,
      medium: 'Oil on canvas',
      dimensions: '143.5 cm × 136.5 cm (56.5 × 53.75 in)',
      artistId: rembrandt?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_Google_Art_Project.jpg/800px-Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Self-Portrait (Rembrandt, 1660)',
      slug: 'self-portrait-rembrandt-1660-met',
      year: 1660,
      medium: 'Oil on canvas',
      dimensions: '80.3 cm × 67.3 cm (31.6 × 26.5 in)',
      artistId: rembrandt?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rembrandt_Harmensz._van_Rijn_135.jpg/800px-Rembrandt_Harmensz._van_Rijn_135.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Juan de Pareja',
      slug: 'juan-de-pareja-velazquez',
      year: 1650,
      medium: 'Oil on canvas',
      dimensions: '81.3 cm × 69.9 cm (32 × 27.5 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Diego_Vel%C3%A1zquez_-_Juan_de_Pareja_%28Metropolitan_Museum_of_Art%29.jpg/800px-Diego_Vel%C3%A1zquez_-_Juan_de_Pareja_%28Metropolitan_Museum_of_Art%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'View of Toledo',
      slug: 'view-of-toledo-el-greco',
      year: 1600,
      medium: 'Oil on canvas',
      dimensions: '121.3 cm × 108.6 cm (47.75 × 42.75 in)',
      artistId: elGreco?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/El_Greco_View_of_Toledo.jpg/800px-El_Greco_View_of_Toledo.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Musicians',
      slug: 'musicians-caravaggio-met',
      year: 1595,
      medium: 'Oil on canvas',
      dimensions: '92.1 cm × 118.4 cm (36.25 × 46.6 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_Musicians_MET_DP-18015-001.jpg/800px-The_Musicians_MET_DP-18015-001.jpg',
      artworkType: 'painting',
    },

    // === IMPRESSIONISM ===
    {
      title: 'The Dance Class',
      slug: 'dance-class-degas-met',
      year: 1874,
      medium: 'Oil on canvas',
      dimensions: '83.5 cm × 77.2 cm (32.9 × 30.4 in)',
      artistId: degas?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Edgar_Degas_-_The_Dance_Class_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_The_Dance_Class_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Madame Charpentier and Her Children',
      slug: 'madame-charpentier-renoir',
      year: 1878,
      medium: 'Oil on canvas',
      dimensions: '153.7 cm × 190.2 cm (60.5 × 74.9 in)',
      artistId: renoir?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pierre-Auguste_Renoir%2C_Madame_Georges_Charpentier_and_her_children.jpg/800px-Pierre-Auguste_Renoir%2C_Madame_Georges_Charpentier_and_her_children.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Self-Portrait with a Straw Hat',
      slug: 'self-portrait-straw-hat-van-gogh',
      year: 1887,
      medium: 'Oil on canvas',
      dimensions: '40.6 cm × 31.8 cm (16 × 12.5 in)',
      artistId: vanGogh?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Self-Portrait_with_a_Straw_Hat_%28obverse-_The_Potato_Peeler%29_-_My_Dream.jpg/800px-Self-Portrait_with_a_Straw_Hat_%28obverse-_The_Potato_Peeler%29_-_My_Dream.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Wheat Field with Cypresses',
      slug: 'wheat-field-cypresses-van-gogh',
      year: 1889,
      medium: 'Oil on canvas',
      dimensions: '73 cm × 93.4 cm (28.7 × 36.8 in)',
      artistId: vanGogh?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg/800px-Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Card Players (Met version)',
      slug: 'card-players-cezanne-met',
      year: 1892,
      medium: 'Oil on canvas',
      dimensions: '65.4 cm × 81.9 cm (25.75 × 32.25 in)',
      artistId: cezanne?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Paul_C%C3%A9zanne_-_Les_joueurs_de_cartes.jpg/800px-Paul_C%C3%A9zanne_-_Les_joueurs_de_cartes.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Bridge over a Pond of Water Lilies',
      slug: 'bridge-water-lilies-monet',
      year: 1899,
      medium: 'Oil on canvas',
      dimensions: '92.7 cm × 73.7 cm (36.5 × 29 in)',
      artistId: monet?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
      artworkType: 'painting',
    },

    // === MODERN ART ===
    {
      title: 'Portrait of Gertrude Stein',
      slug: 'portrait-gertrude-stein-picasso',
      year: 1906,
      medium: 'Oil on canvas',
      dimensions: '100 cm × 81.3 cm (39.4 × 32 in)',
      artistId: picasso?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/GertrudeStein.JPG',
      artworkType: 'painting',
    },
    {
      title: 'Autumn Rhythm (Number 30)',
      slug: 'autumn-rhythm-pollock',
      year: 1950,
      medium: 'Oil on canvas',
      dimensions: '266.7 cm × 525.8 cm (105 × 207 in)',
      artistId: pollock?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Autumn_Rhythm.jpg',
      artworkType: 'painting',
    },

    // === EGYPTIAN ART ===
    {
      title: 'Temple of Dendur',
      slug: 'temple-of-dendur',
      year: -15,
      medium: 'Aeolian sandstone',
      dimensions: 'Temple: 6.4 m × 12.5 m (21 × 41 ft)',
      artistId: ancientEgyptian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Temple_of_Dendur-_night.jpg/800px-Temple_of_Dendur-_night.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Sphinx of Hatshepsut',
      slug: 'sphinx-hatshepsut-met',
      year: -1479,
      medium: 'Granite',
      dimensions: '164 cm × 343 cm (64.5 × 135 in)',
      artistId: ancientEgyptian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/GD-EG-Memphis003.JPG/800px-GD-EG-Memphis003.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Statue of Seated Hatshepsut',
      slug: 'seated-hatshepsut-met',
      year: -1479,
      medium: 'Indurated limestone, paint',
      dimensions: '195 cm (76.8 in) tall',
      artistId: ancientEgyptian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Hatshepsut-CollossalGraniteSphinx01_MetropolitanMuseum.png/800px-Hatshepsut-CollosalGraniteSphinx01_MetropolitanMuseum.png',
      artworkType: 'sculpture',
    },

    // === GREEK AND ROMAN ===
    {
      title: 'Marble Statue of a Kouros (Youth)',
      slug: 'kouros-statue-met',
      year: -590,
      medium: 'Naxian marble',
      dimensions: '194.6 cm (76.6 in) tall',
      artistId: ancientGreek?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kouros_anavissos.jpg/800px-Kouros_anavissos.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Euphronios Krater',
      slug: 'euphronios-krater',
      year: -515,
      medium: 'Terracotta, red-figure',
      dimensions: '45.7 cm (18 in) tall',
      artistId: ancientGreek?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Euphronios_krater_side_A_MET.jpg/800px-Euphronios_krater_side_A_MET.jpg',
      artworkType: 'sculpture',
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
        museumId: met.id,
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
    where: { museumId: met.id }
  });
  console.log(`\nMetropolitan Museum total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
