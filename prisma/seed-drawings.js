const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Famous Drawings ===\n');

  // Get existing museums
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });

  // Get/Create Gallerie dell'Accademia (Venice)
  let accademiaVeniceId;
  const existingAccademiaVenice = await prisma.museum.findFirst({ where: { slug: 'accademia-venice' } });
  if (!existingAccademiaVenice) {
    const accademiaVenice = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Gallerie dell\'Accademia',
        slug: 'accademia-venice',
        city: 'Venice',
        country: 'Italy',
        address: 'Campo della Carità, 1050, 30123 Venezia',
        latitude: 45.4314,
        longitude: 12.3286,
        websiteUrl: 'https://www.gallerieaccademia.it',
        ticketPriceRange: '€12-15',
        description: 'The Gallerie dell\'Accademia houses the finest collection of Venetian painting, from Byzantine works through the Renaissance and Baroque periods. Highlights include Leonardo\'s Vitruvian Man (rarely displayed), Giorgione\'s Tempest, and Veronese\'s Feast in the House of Levi.',
        updatedAt: new Date(),
      }
    });
    accademiaVeniceId = accademiaVenice.id;
    console.log('Created museum: Gallerie dell\'Accademia (Venice)');
  } else {
    accademiaVeniceId = existingAccademiaVenice.id;
    console.log('Museum exists: Gallerie dell\'Accademia (Venice)');
  }

  // Create Albertina Museum
  let albertinaId;
  const existingAlbertina = await prisma.museum.findFirst({ where: { slug: 'albertina-museum' } });
  if (!existingAlbertina) {
    const albertina = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Albertina',
        slug: 'albertina-museum',
        city: 'Vienna',
        country: 'Austria',
        address: 'Albertinapl. 1, 1010 Wien',
        latitude: 48.2048,
        longitude: 16.3687,
        websiteUrl: 'https://www.albertina.at',
        ticketPriceRange: '€16-18',
        description: 'The Albertina houses one of the world\'s great collections of graphic art, with over one million drawings and prints spanning six centuries. Highlights include Dürer\'s Praying Hands and Young Hare, Raphael drawings, and modern works by Schiele and Klimt.',
        updatedAt: new Date(),
      }
    });
    albertinaId = albertina.id;
    console.log('Created museum: Albertina');
  } else {
    albertinaId = existingAlbertina.id;
    console.log('Museum exists: Albertina');
  }

  // Get artists
  const leonardoSlug = 'leonardo-da-vinci';
  const durerSlug = 'albrecht-durer';
  const michelangeloSlug = 'michelangelo';
  const raphaelSlug = 'raphael';
  const rembrandtSlug = 'rembrandt';

  const leonardo = await prisma.artist.findFirst({ where: { slug: leonardoSlug } });
  const michelangelo = await prisma.artist.findFirst({ where: { slug: michelangeloSlug } });
  const raphael = await prisma.artist.findFirst({ where: { slug: raphaelSlug } });
  const rembrandt = await prisma.artist.findFirst({ where: { slug: rembrandtSlug } });

  // Create Dürer if not exists
  let durerId;
  const existingDurer = await prisma.artist.findFirst({ where: { slug: durerSlug } });
  if (!existingDurer) {
    const durer = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Albrecht Dürer',
        slug: durerSlug,
        birthYear: 1471,
        deathYear: 1528,
        nationality: 'German',
        updatedAt: new Date(),
      }
    });
    durerId = durer.id;
    console.log('Created artist: Albrecht Dürer');
  } else {
    durerId = existingDurer.id;
    console.log('Artist exists: Albrecht Dürer');
  }

  console.log('\n--- Adding Drawings ---\n');

  const drawings = [
    // === LEONARDO ===
    {
      title: 'Vitruvian Man',
      slug: 'vitruvian-man',
      year: 1490,
      medium: 'Pen, ink, and metalpoint on paper',
      dimensions: '34.6 cm × 25.5 cm (13.6 × 10 in)',
      artistId: leonardo?.id,
      museumId: accademiaVeniceId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Study for the Head of Leda',
      slug: 'study-head-of-leda-leonardo',
      year: 1506,
      medium: 'Black chalk, pen and ink on paper',
      dimensions: '17.7 cm × 14.7 cm (7 × 5.8 in)',
      artistId: leonardo?.id,
      museumId: null, // Royal Collection
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Leonardo_da_Vinci_-_Head_of_Leda_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Head_of_Leda_-_Google_Art_Project.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Studies of the Foetus in the Womb',
      slug: 'studies-foetus-womb-leonardo',
      year: 1511,
      medium: 'Pen, ink, and wash over red chalk',
      dimensions: '30.4 cm × 22 cm (12 × 8.7 in)',
      artistId: leonardo?.id,
      museumId: null, // Royal Collection
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Views_of_a_Foetus_in_the_Womb.jpg/800px-Views_of_a_Foetus_in_the_Womb.jpg',
      artworkType: 'drawing',
    },

    // === DÜRER ===
    {
      title: 'Praying Hands',
      slug: 'praying-hands-durer',
      year: 1508,
      medium: 'Pen and ink on blue-tinted paper',
      dimensions: '29.1 cm × 19.7 cm (11.5 × 7.8 in)',
      artistId: durerId,
      museumId: albertinaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Albrecht_D%C3%BCrer_-_Praying_Hands%2C_1508_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_Praying_Hands%2C_1508_-_Google_Art_Project.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Young Hare',
      slug: 'young-hare-durer',
      year: 1502,
      medium: 'Watercolor and gouache on paper',
      dimensions: '25.1 cm × 22.6 cm (9.9 × 8.9 in)',
      artistId: durerId,
      museumId: albertinaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Albrecht_D%C3%BCrer_-_Hare%2C_1502_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_Hare%2C_1502_-_Google_Art_Project.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Rhinoceros',
      slug: 'rhinoceros-durer',
      year: 1515,
      medium: 'Woodcut',
      dimensions: '23.5 cm × 29.8 cm (9.3 × 11.7 in)',
      artistId: durerId,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Rhinoceros_%28NGA_1964.8.697%29_enhanced.png/800px-The_Rhinoceros_%28NGA_1964.8.697%29_enhanced.png',
      artworkType: 'print',
    },
    {
      title: 'Self-Portrait at 28',
      slug: 'self-portrait-28-durer',
      year: 1500,
      medium: 'Oil on panel',
      dimensions: '67.1 cm × 48.9 cm (26.4 × 19.3 in)',
      artistId: durerId,
      museumId: null, // Alte Pinakothek Munich
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg/800px-Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Great Piece of Turf',
      slug: 'great-piece-turf-durer',
      year: 1503,
      medium: 'Watercolor and gouache on paper',
      dimensions: '41 cm × 31.5 cm (16.1 × 12.4 in)',
      artistId: durerId,
      museumId: albertinaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Albrecht_D%C3%BCrer_-_The_Large_Piece_of_Turf%2C_1503_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_The_Large_Piece_of_Turf%2C_1503_-_Google_Art_Project.jpg',
      artworkType: 'drawing',
    },

    // === MICHELANGELO ===
    {
      title: 'Studies for the Libyan Sibyl',
      slug: 'studies-libyan-sibyl',
      year: 1511,
      medium: 'Red chalk on paper',
      dimensions: '28.9 cm × 21.4 cm (11.4 × 8.4 in)',
      artistId: michelangelo?.id,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Michelangelo%2C_study_for_the_Libyan_Sibyl.jpg/800px-Michelangelo%2C_study_for_the_Libyan_Sibyl.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'The Fall of Phaeton',
      slug: 'fall-of-phaeton-michelangelo',
      year: 1533,
      medium: 'Black chalk on paper',
      dimensions: '41.3 cm × 23.4 cm (16.3 × 9.2 in)',
      artistId: michelangelo?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Phaeton_Michelangelo.jpg/800px-Phaeton_Michelangelo.jpg',
      artworkType: 'drawing',
    },

    // === RAPHAEL ===
    {
      title: 'Head of a Muse',
      slug: 'head-of-muse-raphael',
      year: 1510,
      medium: 'Black chalk on paper',
      dimensions: '30.5 cm × 22.2 cm (12 × 8.7 in)',
      artistId: raphael?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Raphael_-_Head_of_a_Muse_-_WGA18974.jpg/800px-Raphael_-_Head_of_a_Muse_-_WGA18974.jpg',
      artworkType: 'drawing',
    },

    // === REMBRANDT ===
    {
      title: 'The Three Crosses',
      slug: 'three-crosses-rembrandt',
      year: 1653,
      medium: 'Drypoint and burin',
      dimensions: '38.5 cm × 45 cm (15.2 × 17.7 in)',
      artistId: rembrandt?.id,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rembrandt_Christ_Crucified_between_the_Two_Thieves_%28The_Three_Crosses%29.jpg/800px-Rembrandt_Christ_Crucified_between_the_Two_Thieves_%28The_Three_Crosses%29.jpg',
      artworkType: 'print',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of drawings) {
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

  const drawingCount = await prisma.artwork.count({ where: { artworkType: 'drawing' } });
  const printCount = await prisma.artwork.count({ where: { artworkType: 'print' } });
  console.log(`\nTotal drawings: ${drawingCount}`);
  console.log(`Total prints: ${printCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
