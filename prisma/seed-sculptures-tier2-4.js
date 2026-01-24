const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tier 2-4 Sculptures ===\n');

  // Create new artists for modern sculptures
  const newArtists = [
    {
      name: 'Constantin Brâncuși',
      slug: 'constantin-brancusi',
      birthYear: 1876,
      deathYear: 1957,
      nationality: 'Romanian',
    },
    {
      name: 'Alberto Giacometti',
      slug: 'alberto-giacometti',
      birthYear: 1901,
      deathYear: 1966,
      nationality: 'Swiss',
    },
    {
      name: 'Jeff Koons',
      slug: 'jeff-koons',
      birthYear: 1955,
      deathYear: null,
      nationality: 'American',
    },
    {
      name: 'Anish Kapoor',
      slug: 'anish-kapoor',
      birthYear: 1954,
      deathYear: null,
      nationality: 'British-Indian',
    },
    {
      name: 'Louise Bourgeois',
      slug: 'louise-bourgeois',
      birthYear: 1911,
      deathYear: 2010,
      nationality: 'French-American',
    },
    {
      name: 'Robert Indiana',
      slug: 'robert-indiana',
      birthYear: 1928,
      deathYear: 2018,
      nationality: 'American',
    },
    {
      name: 'Umberto Boccioni',
      slug: 'umberto-boccioni',
      birthYear: 1882,
      deathYear: 1916,
      nationality: 'Italian',
    },
    {
      name: 'Myron',
      slug: 'myron-sculptor',
      birthYear: -480,
      deathYear: -440,
      nationality: 'Greek',
    },
    {
      name: 'Leochares',
      slug: 'leochares',
      birthYear: -370,
      deathYear: -320,
      nationality: 'Greek',
    },
    {
      name: 'Phidias',
      slug: 'phidias',
      birthYear: -480,
      deathYear: -430,
      nationality: 'Greek',
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
  const ancientGreek = await prisma.artist.findFirst({ where: { slug: 'ancient-greek' } });
  if (ancientGreek) artistIds['ancient-greek'] = ancientGreek.id;

  // Get museum IDs
  const moma = await prisma.museum.findFirst({ where: { slug: { contains: 'moma' } } });
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const vatican = await prisma.museum.findFirst({ where: { slug: { contains: 'vatican' } } });

  console.log('\n--- Adding Sculptures ---\n');

  const sculptures = [
    // === TIER 2: MUSEUM MASTERPIECES ===

    // Vatican
    {
      title: 'Apollo Belvedere',
      slug: 'apollo-belvedere',
      year: -350,
      medium: 'Marble (Roman copy of Greek bronze)',
      dimensions: '224 cm (88 in) tall',
      artistId: artistIds['leochares'],
      museumId: vatican?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Apollo_of_the_Belvedere.jpg/800px-Apollo_of_the_Belvedere.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Belvedere Torso',
      slug: 'belvedere-torso',
      year: -150,
      medium: 'Marble',
      dimensions: '159 cm (63 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: vatican?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Belvedere_Torso.jpg/800px-Belvedere_Torso.jpg',
      artworkType: 'sculpture',
    },

    // British Museum / Parthenon
    {
      title: 'Elgin Marbles (Parthenon Sculptures)',
      slug: 'elgin-marbles',
      year: -432,
      medium: 'Marble',
      dimensions: 'Various sizes, frieze 160 m (525 ft) original length',
      artistId: artistIds['phidias'],
      museumId: null, // British Museum
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elgin_Marbles_British_Museum.jpg/800px-Elgin_Marbles_British_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === TIER 3: ANCIENT & ARCHAEOLOGICAL ===

    {
      title: 'Great Sphinx of Giza',
      slug: 'great-sphinx-giza',
      year: -2500,
      medium: 'Limestone',
      dimensions: '73 m (240 ft) long, 20 m (66 ft) tall',
      artistId: artistIds['ancient-greek'], // Will update to Unknown Egyptian
      museumId: null, // Giza, Egypt
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Great_Sphinx_of_Giza_-_20080716a.jpg/800px-Great_Sphinx_of_Giza_-_20080716a.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Terracotta Army',
      slug: 'terracotta-army',
      year: -210,
      medium: 'Terracotta',
      dimensions: 'Over 8,000 soldiers, each 180-197 cm tall',
      artistId: null, // Unknown Chinese artisans
      museumId: null, // Xi\'an, China
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Terracotta_Army%2C_View_of_Pit_1.jpg/800px-Terracotta_Army%2C_View_of_Pit_1.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Moai (Easter Island Statues)',
      slug: 'moai-easter-island',
      year: 1250,
      medium: 'Volcanic rock (tuff)',
      dimensions: 'Average 4 m (13 ft) tall, largest 10 m (33 ft)',
      artistId: null, // Rapa Nui people
      museumId: null, // Easter Island
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/800px-Moai_Rano_raraku.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Colossi of Memnon',
      slug: 'colossi-of-memnon',
      year: -1350,
      medium: 'Quartzite sandstone',
      dimensions: '18 m (60 ft) tall each',
      artistId: null, // Ancient Egyptian
      museumId: null, // Luxor, Egypt
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Colossi_of_Memnon_May_2015_2.JPG/800px-Colossi_of_Memnon_May_2015_2.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Abu Simbel Temples',
      slug: 'abu-simbel-temples',
      year: -1264,
      medium: 'Carved sandstone cliff',
      dimensions: 'Seated figures 20 m (66 ft) tall',
      artistId: null, // Ancient Egyptian
      museumId: null, // Abu Simbel, Egypt
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Abu_Simbel%2C_Ramesses_Temple%2C_front%2C_Egypt%2C_Oct_2004.jpg/800px-Abu_Simbel%2C_Ramesses_Temple%2C_front%2C_Egypt%2C_Oct_2004.jpg',
      artworkType: 'sculpture',
    },

    // === TIER 4: MODERN & CONTEMPORARY ===

    {
      title: 'Bird in Space',
      slug: 'bird-in-space',
      year: 1923,
      medium: 'Bronze',
      dimensions: '136 cm (54 in) tall',
      artistId: artistIds['constantin-brancusi'],
      museumId: moma?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brancusi_bird_in_space_1923.jpg/800px-Brancusi_bird_in_space_1923.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Walking Man I',
      slug: 'walking-man-giacometti',
      year: 1960,
      medium: 'Bronze',
      dimensions: '183 cm (72 in) tall',
      artistId: artistIds['alberto-giacometti'],
      museumId: null, // Multiple casts exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/L%27Homme_qui_marche_I.jpg/800px-L%27Homme_qui_marche_I.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Cloud Gate (The Bean)',
      slug: 'cloud-gate-the-bean',
      year: 2006,
      medium: 'Stainless steel',
      dimensions: '10 m × 20 m × 13 m (33 × 66 × 42 ft)',
      artistId: artistIds['anish-kapoor'],
      museumId: null, // Millennium Park, Chicago
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cloud_Gate_%28The_Bean%29_from_east%27.jpg/800px-Cloud_Gate_%28The_Bean%29_from_east%27.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Balloon Dog (Orange)',
      slug: 'balloon-dog-koons',
      year: 1994,
      medium: 'Mirror-polished stainless steel with transparent color coating',
      dimensions: '307 cm × 363 cm × 114 cm (121 × 143 × 45 in)',
      artistId: artistIds['jeff-koons'],
      museumId: null, // Various private collections
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Balloon_Dog_%28Orange%29_by_Jeff_Koons.jpg/800px-Balloon_Dog_%28Orange%29_by_Jeff_Koons.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Maman',
      slug: 'maman-spider-bourgeois',
      year: 1999,
      medium: 'Bronze, stainless steel, and marble',
      dimensions: '927 cm × 891 cm × 1024 cm (30 × 29 × 34 ft)',
      artistId: artistIds['louise-bourgeois'],
      museumId: null, // Multiple casts (Guggenheim Bilbao, Tate Modern, etc.)
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Maman_in_Bilbao.jpg/800px-Maman_in_Bilbao.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'LOVE',
      slug: 'love-sculpture-indiana',
      year: 1970,
      medium: 'Cor-Ten steel',
      dimensions: '366 cm (12 ft) tall',
      artistId: artistIds['robert-indiana'],
      museumId: null, // Multiple locations (Philadelphia, NYC, etc.)
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/LOVE_sculpture_NY.JPG/800px-LOVE_sculpture_NY.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Unique Forms of Continuity in Space',
      slug: 'unique-forms-continuity-space',
      year: 1913,
      medium: 'Bronze',
      dimensions: '111 cm × 89 cm × 40 cm (44 × 35 × 16 in)',
      artistId: artistIds['umberto-boccioni'],
      museumId: moma?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/%27Unique_Forms_of_Continuity_in_Space%27%2C_1913_bronze_by_Umberto_Boccioni.jpg/800px-%27Unique_Forms_of_Continuity_in_Space%27%2C_1913_bronze_by_Umberto_Boccioni.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of sculptures) {
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
  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
