const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tier 1 Sculptures ===\n');

  // Create new artists
  const newArtists = [
    {
      name: 'Gian Lorenzo Bernini',
      slug: 'gian-lorenzo-bernini',
      birthYear: 1598,
      deathYear: 1680,
      nationality: 'Italian',
    },
    {
      name: 'Benvenuto Cellini',
      slug: 'benvenuto-cellini',
      birthYear: 1500,
      deathYear: 1571,
      nationality: 'Italian',
    },
    {
      name: 'Donatello',
      slug: 'donatello',
      birthYear: 1386,
      deathYear: 1466,
      nationality: 'Italian',
    },
    {
      name: 'Lorenzo Ghiberti',
      slug: 'lorenzo-ghiberti',
      birthYear: 1378,
      deathYear: 1455,
      nationality: 'Italian',
    },
    {
      name: 'Antonio Canova',
      slug: 'antonio-canova',
      birthYear: 1757,
      deathYear: 1822,
      nationality: 'Italian',
    },
    {
      name: 'Frédéric Auguste Bartholdi',
      slug: 'frederic-auguste-bartholdi',
      birthYear: 1834,
      deathYear: 1904,
      nationality: 'French',
    },
    {
      name: 'Daniel Chester French',
      slug: 'daniel-chester-french',
      birthYear: 1850,
      deathYear: 1931,
      nationality: 'American',
    },
    {
      name: 'Gutzon Borglum',
      slug: 'gutzon-borglum',
      birthYear: 1867,
      deathYear: 1941,
      nationality: 'American',
    },
    {
      name: 'Thutmose',
      slug: 'thutmose',
      birthYear: -1370,
      deathYear: -1330,
      nationality: 'Egyptian',
    },
    {
      name: 'Edvard Eriksen',
      slug: 'edvard-eriksen',
      birthYear: 1876,
      deathYear: 1959,
      nationality: 'Danish',
    },
    {
      name: 'Paul Landowski',
      slug: 'paul-landowski',
      birthYear: 1875,
      deathYear: 1961,
      nationality: 'French',
    },
    {
      name: 'Jérôme Duquesnoy the Elder',
      slug: 'jerome-duquesnoy-elder',
      birthYear: 1570,
      deathYear: 1641,
      nationality: 'Flemish',
    },
  ];

  const artistIds = {};

  // Create artists
  for (const artistData of newArtists) {
    const existing = await prisma.artist.findFirst({ where: { slug: artistData.slug } });
    if (existing) {
      artistIds[artistData.slug] = existing.id;
      console.log(`Artist exists: ${artistData.name}`);
    } else {
      const artist = await prisma.artist.create({
        data: {
          id: randomUUID(),
          ...artistData,
          updatedAt: new Date(),
        }
      });
      artistIds[artistData.slug] = artist.id;
      console.log(`Created artist: ${artistData.name}`);
    }
  }

  // Get existing artist IDs
  const michelangelo = await prisma.artist.findFirst({ where: { name: { contains: 'Michelangelo' } } });
  if (michelangelo) artistIds['michelangelo'] = michelangelo.id;

  // Get Louvre museum ID
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const louvreId = louvre?.id;

  console.log('\n--- Adding Sculptures ---\n');

  const sculptures = [
    // === BERNINI ===
    {
      title: 'Apollo and Daphne',
      slug: 'apollo-and-daphne-bernini',
      year: 1625,
      medium: 'Marble',
      dimensions: '243 cm (96 in) tall',
      artistId: artistIds['gian-lorenzo-bernini'],
      museumId: null, // Galleria Borghese
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Apollo_and_Daphne_%28Bernini%29.jpg/800px-Apollo_and_Daphne_%28Bernini%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'The Rape of Proserpina',
      slug: 'rape-of-proserpina-bernini',
      year: 1622,
      medium: 'Marble',
      dimensions: '255 cm (100 in) tall',
      artistId: artistIds['gian-lorenzo-bernini'],
      museumId: null, // Galleria Borghese
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_Rape_of_Proserpina_%28Bernini%29.jpg/800px-The_Rape_of_Proserpina_%28Bernini%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Ecstasy of Saint Teresa',
      slug: 'ecstasy-of-saint-teresa',
      year: 1652,
      medium: 'Marble',
      dimensions: '350 cm (138 in) tall',
      artistId: artistIds['gian-lorenzo-bernini'],
      museumId: null, // Santa Maria della Vittoria, Rome
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg/800px-Ecstasy_of_Saint_Teresa_September_2015-2a.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'David',
      slug: 'david-bernini',
      year: 1624,
      medium: 'Marble',
      dimensions: '170 cm (67 in) tall',
      artistId: artistIds['gian-lorenzo-bernini'],
      museumId: null, // Galleria Borghese
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Gian_Lorenzo_Bernini%2C_self-portrait%2C_c1623.jpg/800px-David_by_Bernini.jpg',
      artworkType: 'sculpture',
    },

    // === CELLINI ===
    {
      title: 'Perseus with the Head of Medusa',
      slug: 'perseus-with-head-of-medusa',
      year: 1554,
      medium: 'Bronze',
      dimensions: '320 cm (126 in) tall',
      artistId: artistIds['benvenuto-cellini'],
      museumId: null, // Loggia dei Lanzi, Florence
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Persee-florence.jpg/800px-Persee-florence.jpg',
      artworkType: 'sculpture',
    },

    // === DONATELLO ===
    {
      title: 'David',
      slug: 'david-donatello',
      year: 1440,
      medium: 'Bronze',
      dimensions: '158 cm (62 in) tall',
      artistId: artistIds['donatello'],
      museumId: null, // Museo Nazionale del Bargello
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Firenze_-_Museo_del_Bargello_-_Donatello_-_David.jpg/800px-Firenze_-_Museo_del_Bargello_-_Donatello_-_David.jpg',
      artworkType: 'sculpture',
    },

    // === GHIBERTI ===
    {
      title: 'Gates of Paradise',
      slug: 'gates-of-paradise',
      year: 1452,
      medium: 'Gilded bronze',
      dimensions: '506 cm × 287 cm (199 in × 113 in)',
      artistId: artistIds['lorenzo-ghiberti'],
      museumId: null, // Florence Baptistery (originals in Museo dell'Opera del Duomo)
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Paradiespforte_Florenz.jpg/800px-Paradiespforte_Florenz.jpg',
      artworkType: 'sculpture',
    },

    // === CANOVA ===
    {
      title: 'Psyche Revived by Cupid\'s Kiss',
      slug: 'psyche-revived-cupids-kiss',
      year: 1793,
      medium: 'Marble',
      dimensions: '155 cm × 168 cm (61 in × 66 in)',
      artistId: artistIds['antonio-canova'],
      museumId: louvreId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Psyche_revived_Louvre_MR1777.jpg/800px-Psyche_revived_Louvre_MR1777.jpg',
      artworkType: 'sculpture',
    },

    // === MICHELANGELO - MOSES ===
    {
      title: 'Moses',
      slug: 'moses-michelangelo',
      year: 1515,
      medium: 'Marble',
      dimensions: '235 cm (93 in) tall',
      artistId: artistIds['michelangelo'],
      museumId: null, // San Pietro in Vincoli, Rome
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%27Moses%27_by_Michelangelo_JBU160.jpg/800px-%27Moses%27_by_Michelangelo_JBU160.jpg',
      artworkType: 'sculpture',
    },

    // === THUTMOSE ===
    {
      title: 'Bust of Nefertiti',
      slug: 'bust-of-nefertiti',
      year: -1345,
      medium: 'Limestone and stucco',
      dimensions: '48 cm (19 in) tall',
      artistId: artistIds['thutmose'],
      museumId: null, // Neues Museum, Berlin
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/800px-Nofretete_Neues_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === ERIKSEN ===
    {
      title: 'The Little Mermaid',
      slug: 'little-mermaid-copenhagen',
      year: 1913,
      medium: 'Bronze',
      dimensions: '125 cm (49 in) tall',
      artistId: artistIds['edvard-eriksen'],
      museumId: null, // Langelinie Pier, Copenhagen
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Copenhagen_-_the_little_mermaid_statue_-_2013.jpg/800px-Copenhagen_-_the_little_mermaid_statue_-_2013.jpg',
      artworkType: 'sculpture',
    },

    // === DUQUESNOY ===
    {
      title: 'Manneken Pis',
      slug: 'manneken-pis',
      year: 1619,
      medium: 'Bronze',
      dimensions: '61 cm (24 in) tall',
      artistId: artistIds['jerome-duquesnoy-elder'],
      museumId: null, // Brussels
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bruxelles_Manneken_Pis.jpg/800px-Bruxelles_Manneken_Pis.jpg',
      artworkType: 'sculpture',
    },

    // === BARTHOLDI ===
    {
      title: 'Statue of Liberty',
      slug: 'statue-of-liberty',
      year: 1886,
      medium: 'Copper on iron framework',
      dimensions: '93 m (305 ft) tall including pedestal',
      artistId: artistIds['frederic-auguste-bartholdi'],
      museumId: null, // Liberty Island, New York
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/800px-Statue_of_Liberty%2C_NY.jpg',
      artworkType: 'sculpture',
    },

    // === FRENCH ===
    {
      title: 'Abraham Lincoln (Lincoln Memorial)',
      slug: 'lincoln-memorial-statue',
      year: 1920,
      medium: 'White Georgia marble',
      dimensions: '5.8 m (19 ft) tall',
      artistId: artistIds['daniel-chester-french'],
      museumId: null, // Lincoln Memorial, Washington DC
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lincoln_Memorial_Sitting_Man.jpg/800px-Lincoln_Memorial_Sitting_Man.jpg',
      artworkType: 'sculpture',
    },

    // === BORGLUM ===
    {
      title: 'Mount Rushmore',
      slug: 'mount-rushmore',
      year: 1941,
      medium: 'Carved granite',
      dimensions: '18 m (60 ft) tall (each face)',
      artistId: artistIds['gutzon-borglum'],
      museumId: null, // Black Hills, South Dakota
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Dean_Franklin_-_06.04.03_Mount_Rushmore_Monument_%28by-sa%29-3_new.jpg/800px-Dean_Franklin_-_06.04.03_Mount_Rushmore_Monument_%28by-sa%29-3_new.jpg',
      artworkType: 'sculpture',
    },

    // === LANDOWSKI ===
    {
      title: 'Christ the Redeemer',
      slug: 'christ-the-redeemer',
      year: 1931,
      medium: 'Reinforced concrete and soapstone',
      dimensions: '30 m (98 ft) tall, excluding pedestal',
      artistId: artistIds['paul-landowski'],
      museumId: null, // Corcovado mountain, Rio de Janeiro
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/800px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of sculptures) {
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

  // Show sculpture counts
  const typeCounts = await prisma.artwork.groupBy({
    by: ['artworkType'],
    _count: true,
  });
  console.log('\nArtwork counts by type:');
  typeCounts.forEach(t => console.log(`  ${t.artworkType}: ${t._count}`));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
