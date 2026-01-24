const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Vatican Museums Collection ===\n');

  // Get the Vatican Museums
  const vaticanMuseums = await prisma.museum.findFirst({
    where: { slug: 'vatican-museums' }
  });

  if (!vaticanMuseums) {
    console.log('ERROR: Vatican Museums not found in database');
    return;
  }

  console.log(`Found: ${vaticanMuseums.name} (${vaticanMuseums.id})\n`);

  // Get artists
  const michelangelo = await prisma.artist.findFirst({ where: { slug: 'michelangelo' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const leonardo = await prisma.artist.findFirst({ where: { slug: 'leonardo-da-vinci' } });
  const giotto = await prisma.artist.findFirst({ where: { slug: 'giotto' } });

  // Get or create Pinturicchio
  let pinturicchioId;
  const existingPinturicchio = await prisma.artist.findFirst({ where: { slug: 'pinturicchio' } });
  if (!existingPinturicchio) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Pinturicchio',
        slug: 'pinturicchio',
        birthYear: 1454,
        deathYear: 1513,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    pinturicchioId = artist.id;
    console.log('Created artist: Pinturicchio');
  } else {
    pinturicchioId = existingPinturicchio.id;
    console.log('Artist exists: Pinturicchio');
  }

  // Get or create Ancient Greek artist
  let ancientGreekId;
  const existingGreek = await prisma.artist.findFirst({ where: { slug: 'ancient-greek' } });
  if (existingGreek) {
    ancientGreekId = existingGreek.id;
    console.log('Artist exists: Ancient Greek');
  }

  // Get or create Ancient Roman artist
  let ancientRomanId;
  const existingRoman = await prisma.artist.findFirst({ where: { slug: 'ancient-roman' } });
  if (existingRoman) {
    ancientRomanId = existingRoman.id;
    console.log('Artist exists: Ancient Roman');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === SISTINE CHAPEL - MICHELANGELO ===
    {
      title: 'Sistine Chapel Ceiling',
      slug: 'sistine-chapel-ceiling',
      year: 1512,
      medium: 'Fresco',
      dimensions: '40.5 m × 14 m (133 × 46 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/God2-Sistine_Chapel.png/800px-God2-Sistine_Chapel.png',
      artworkType: 'painting',
    },
    {
      title: 'The Creation of Adam',
      slug: 'creation-of-adam',
      year: 1512,
      medium: 'Fresco',
      dimensions: '280 cm × 570 cm (9.2 × 18.7 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Last Judgment',
      slug: 'last-judgment-michelangelo',
      year: 1541,
      medium: 'Fresco',
      dimensions: '1370 cm × 1220 cm (45 × 40 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/800px-Last_Judgement_%28Michelangelo%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Deluge',
      slug: 'deluge-sistine-michelangelo',
      year: 1509,
      medium: 'Fresco',
      dimensions: '280 cm × 570 cm (9.2 × 18.7 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Michelangelo_Buonarroti_020.jpg/800px-Michelangelo_Buonarroti_020.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Prophet Isaiah',
      slug: 'prophet-isaiah-sistine',
      year: 1509,
      medium: 'Fresco',
      dimensions: '365 cm × 380 cm (12 × 12.5 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/%27Isaiah%27_by_Michelangelo_JBU36.jpg/800px-%27Isaiah%27_by_Michelangelo_JBU36.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Libyan Sibyl',
      slug: 'libyan-sibyl-sistine',
      year: 1511,
      medium: 'Fresco',
      dimensions: '395 cm × 380 cm (13 × 12.5 ft)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Libyan_Sibyl.jpg/800px-Libyan_Sibyl.jpg',
      artworkType: 'painting',
    },

    // === RAPHAEL ROOMS ===
    {
      title: 'The School of Athens',
      slug: 'school-of-athens',
      year: 1511,
      medium: 'Fresco',
      dimensions: '500 cm × 770 cm (16.4 × 25.3 ft)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Disputation of the Holy Sacrament',
      slug: 'disputation-holy-sacrament',
      year: 1510,
      medium: 'Fresco',
      dimensions: '500 cm × 770 cm (16.4 × 25.3 ft)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Raphael_-_Disputa_del_sacramento.jpg/800px-Raphael_-_Disputa_del_sacramento.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Parnassus',
      slug: 'parnassus-raphael',
      year: 1511,
      medium: 'Fresco',
      dimensions: '670 cm (base width)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Raphael_-_The_Parnassus.jpg/800px-Raphael_-_The_Parnassus.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Fire in the Borgo',
      slug: 'fire-in-borgo-raphael',
      year: 1514,
      medium: 'Fresco',
      dimensions: '670 cm (base width)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Raphael_-_The_Fire_in_the_Borgo.jpg/800px-Raphael_-_The_Fire_in_the_Borgo.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Liberation of Saint Peter',
      slug: 'liberation-saint-peter-raphael',
      year: 1514,
      medium: 'Fresco',
      dimensions: '660 cm (base width)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Deliverance_of_Saint_Peter.jpg/800px-Deliverance_of_Saint_Peter.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Transfiguration',
      slug: 'transfiguration-raphael',
      year: 1520,
      medium: 'Oil on panel',
      dimensions: '405 cm × 278 cm (159 × 109 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Transfiguration_Raphael.jpg/800px-Transfiguration_Raphael.jpg',
      artworkType: 'painting',
    },

    // === PINACOTECA ===
    {
      title: 'St. Jerome in the Wilderness',
      slug: 'st-jerome-wilderness-leonardo-vatican',
      year: 1482,
      medium: 'Oil on walnut panel (unfinished)',
      dimensions: '103 cm × 75 cm (41 × 30 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leonardo_da_Vinci_-_Saint_Jerome_in_the_Wilderness_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Saint_Jerome_in_the_Wilderness_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Entombment of Christ',
      slug: 'entombment-christ-caravaggio-vatican',
      year: 1604,
      medium: 'Oil on canvas',
      dimensions: '300 cm × 203 cm (118 × 80 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Caravaggio_-_La_Deposizione_di_Cristo.jpg/800px-Caravaggio_-_La_Deposizione_di_Cristo.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Stefaneschi Triptych',
      slug: 'stefaneschi-triptych-giotto',
      year: 1320,
      medium: 'Tempera and gold on panel',
      dimensions: '220 cm × 245 cm (87 × 96 in)',
      artistId: giotto?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Giotto_di_Bondone_-_The_Stefaneschi_Triptych_%28recto%29_-_WGA09350.jpg/800px-Giotto_di_Bondone_-_The_Stefaneschi_Triptych_%28recto%29_-_WGA09350.jpg',
      artworkType: 'painting',
    },

    // === BORGIA APARTMENTS ===
    {
      title: 'Disputation of Saint Catherine',
      slug: 'disputation-st-catherine-pinturicchio',
      year: 1494,
      medium: 'Fresco',
      dimensions: 'Room-scale',
      artistId: pinturicchioId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pintoricchio_-_Disputation_of_St_Catherine_-_WGA17810.jpg/800px-Pintoricchio_-_Disputation_of_St_Catherine_-_WGA17810.jpg',
      artworkType: 'painting',
    },

    // === ANCIENT SCULPTURES ===
    {
      title: 'Laocoön and His Sons',
      slug: 'laocoon-sons-vatican',
      year: -40,
      medium: 'Marble',
      dimensions: '208 cm (6.8 ft) tall',
      artistId: ancientGreekId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Laoco%C3%B6n_and_His_Sons.jpg/800px-Laoco%C3%B6n_and_His_Sons.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Apollo Belvedere',
      slug: 'apollo-belvedere-vatican',
      year: 130,
      medium: 'Marble',
      dimensions: '224 cm (7.3 ft) tall',
      artistId: ancientRomanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_of_the_Belvedere.jpg/800px-Apollo_of_the_Belvedere.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Belvedere Torso',
      slug: 'belvedere-torso',
      year: -100,
      medium: 'Marble',
      dimensions: '159 cm (5.2 ft) tall',
      artistId: ancientGreekId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Belvedere_Torso_4.jpg/800px-Belvedere_Torso_4.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Augustus of Prima Porta',
      slug: 'augustus-prima-porta',
      year: 20,
      medium: 'Marble (originally painted)',
      dimensions: '208 cm (6.8 ft) tall',
      artistId: ancientRomanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/800px-Statue-Augustus.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Sleeping Ariadne',
      slug: 'sleeping-ariadne-vatican',
      year: 150,
      medium: 'Marble',
      dimensions: '162 cm (5.3 ft) long',
      artistId: ancientRomanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Arianna_dormiente%2C_Musei_vaticani.JPG/800px-Arianna_dormiente%2C_Musei_vaticani.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Apoxyomenos (The Scraper)',
      slug: 'apoxyomenos-vatican',
      year: 1,
      medium: 'Marble',
      dimensions: '205 cm (6.7 ft) tall',
      artistId: ancientRomanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Apoxyomenos_Pio-Clementino_Inv1185.jpg/800px-Apoxyomenos_Pio-Clementino_Inv1185.jpg',
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
        museumId: vaticanMuseums.id,
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
    where: { museumId: vaticanMuseums.id }
  });
  console.log(`\nVatican Museums total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
