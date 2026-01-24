const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Pre-Columbian Art ===\n');

  // Get existing museums
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });

  // Create National Museum of Anthropology (Mexico City)
  let mexicoId;
  const existingMexico = await prisma.museum.findFirst({ where: { slug: 'museo-nacional-antropologia' } });
  if (!existingMexico) {
    const mexico = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Museo Nacional de Antropología',
        slug: 'museo-nacional-antropologia',
        city: 'Mexico City',
        country: 'Mexico',
        address: 'Av. Paseo de la Reforma s/n, Bosque de Chapultepec',
        latitude: 19.4260,
        longitude: -99.1863,
        websiteUrl: 'https://www.mna.inah.gob.mx',
        ticketPriceRange: 'MX$85 ($5)',
        description: 'The National Museum of Anthropology in Mexico City houses the world\'s largest collection of Mesoamerican artifacts. Highlights include the Aztec Sun Stone, Olmec colossal heads, and treasures from Maya, Toltec, and other civilizations. The modernist building by Pedro Ramírez Vázquez opened in 1964.',
        updatedAt: new Date(),
      }
    });
    mexicoId = mexico.id;
    console.log('Created museum: Museo Nacional de Antropología');
  } else {
    mexicoId = existingMexico.id;
    console.log('Museum exists: Museo Nacional de Antropología');
  }

  // Create Museo del Oro (Bogotá)
  let bogotaId;
  const existingBogota = await prisma.museum.findFirst({ where: { slug: 'museo-del-oro' } });
  if (!existingBogota) {
    const bogota = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Museo del Oro',
        slug: 'museo-del-oro',
        city: 'Bogotá',
        country: 'Colombia',
        address: 'Carrera 6 No. 15-88, Bogotá',
        latitude: 4.6019,
        longitude: -74.0720,
        websiteUrl: 'https://www.banrepcultural.org/bogota/museo-del-oro',
        ticketPriceRange: 'COP$5,000 ($1.25)',
        description: 'The Gold Museum (Museo del Oro) in Bogotá holds the world\'s largest collection of pre-Hispanic gold artifacts, with over 55,000 pieces from Colombia\'s indigenous cultures. The collection includes spectacular works from the Muisca, Quimbaya, Tairona, and other civilizations.',
        updatedAt: new Date(),
      }
    });
    bogotaId = bogota.id;
    console.log('Created museum: Museo del Oro');
  } else {
    bogotaId = existingBogota.id;
    console.log('Museum exists: Museo del Oro');
  }

  // Create Larco Museum (Lima)
  let limaId;
  const existingLima = await prisma.museum.findFirst({ where: { slug: 'museo-larco' } });
  if (!existingLima) {
    const lima = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Museo Larco',
        slug: 'museo-larco',
        city: 'Lima',
        country: 'Peru',
        address: 'Av. Simón Bolívar 1515, Pueblo Libre, Lima',
        latitude: -12.0704,
        longitude: -77.0706,
        websiteUrl: 'https://www.museolarco.org',
        ticketPriceRange: 'PEN$35 ($9)',
        description: 'The Larco Museum houses an exceptional collection of pre-Columbian Peruvian art, including Moche portrait vessels, Nazca textiles, and spectacular gold and silver work. The 18th-century vice-regal mansion and its gardens provide an elegant setting for over 45,000 artifacts.',
        updatedAt: new Date(),
      }
    });
    limaId = lima.id;
    console.log('Created museum: Museo Larco');
  } else {
    limaId = existingLima.id;
    console.log('Museum exists: Museo Larco');
  }

  // Create artists
  const precolumbianArtists = [
    {
      name: 'Ancient Aztec (Unknown)',
      slug: 'ancient-aztec',
      nationality: 'Aztec (Mexico)',
    },
    {
      name: 'Ancient Maya (Unknown)',
      slug: 'ancient-maya',
      nationality: 'Maya',
    },
    {
      name: 'Ancient Olmec (Unknown)',
      slug: 'ancient-olmec',
      nationality: 'Olmec (Mexico)',
    },
    {
      name: 'Ancient Moche (Unknown)',
      slug: 'ancient-moche',
      nationality: 'Moche (Peru)',
    },
    {
      name: 'Ancient Muisca (Unknown)',
      slug: 'ancient-muisca',
      nationality: 'Muisca (Colombia)',
    },
  ];

  const artistIds = {};
  for (const artistData of precolumbianArtists) {
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

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === AZTEC ===
    {
      title: 'Aztec Sun Stone (Calendar Stone)',
      slug: 'aztec-sun-stone',
      year: 1500,
      medium: 'Basalt',
      dimensions: '358 cm (11.7 ft) diameter, 24 tons',
      artistId: artistIds['ancient-aztec'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Aztec_calendar.jpg/800px-Aztec_calendar.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Coatlicue',
      slug: 'coatlicue-statue',
      year: 1500,
      medium: 'Basalt',
      dimensions: '257 cm (8.4 ft) tall',
      artistId: artistIds['ancient-aztec'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/20041229-Coatlicue_%28Museo_Nacional_de_Antropolog%C3%ADa%29_MQ-3.jpg/800px-20041229-Coatlicue_%28Museo_Nacional_de_Antropolog%C3%ADa%29_MQ-3.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Aztec Double-Headed Serpent',
      slug: 'aztec-double-headed-serpent',
      year: 1480,
      medium: 'Wood, turquoise, shell, pine resin',
      dimensions: '43 cm × 20 cm (17 × 8 in)',
      artistId: artistIds['ancient-aztec'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Double_headed_turquoise_serpentAztworksec.jpg/800px-Double_headed_turquoise_serpentAztworksec.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Aztec Xiuhtecuhtli Mask',
      slug: 'aztec-xiuhtecuhtli-mask',
      year: 1500,
      medium: 'Turquoise, cedar wood, mother-of-pearl',
      dimensions: '16.8 cm × 15.2 cm (6.6 × 6 in)',
      artistId: artistIds['ancient-aztec'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Turquoise_mosaic_mask.jpg/800px-Turquoise_mosaic_mask.jpg',
      artworkType: 'sculpture',
    },

    // === OLMEC ===
    {
      title: 'Olmec Colossal Head (San Lorenzo Head 1)',
      slug: 'olmec-colossal-head-1',
      year: -1200,
      medium: 'Basalt',
      dimensions: '284 cm (9.3 ft) tall, 25 tons',
      artistId: artistIds['ancient-olmec'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Olmec_Head_from_San_Lorenzo%2C_Veracruz.jpg/800px-Olmec_Head_from_San_Lorenzo%2C_Veracruz.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Olmec Wrestler',
      slug: 'olmec-wrestler',
      year: -1200,
      medium: 'Basalt',
      dimensions: '66 cm (26 in) tall',
      artistId: artistIds['ancient-olmec'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/El_luchador_olmeca_%28Museo_Nacional_de_Antropolog%C3%ADa%29.jpg/800px-El_luchador_olmeca_%28Museo_Nacional_de_Antropolog%C3%ADa%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Olmec Jade Mask',
      slug: 'olmec-jade-mask',
      year: -900,
      medium: 'Jadeite',
      dimensions: '13 cm × 11 cm (5.1 × 4.3 in)',
      artistId: artistIds['ancient-olmec'],
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Olmec_Jade_Mask.jpg/800px-Olmec_Jade_Mask.jpg',
      artworkType: 'sculpture',
    },

    // === MAYA ===
    {
      title: 'Jade Mask of K\'inich Janaab Pakal',
      slug: 'jade-mask-pakal',
      year: 683,
      medium: 'Jade, shell, obsidian',
      dimensions: '24 cm × 21 cm (9.4 × 8.3 in)',
      artistId: artistIds['ancient-maya'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mosaico_de_jade_de_Pakal_el_Grande.jpg/800px-Mosaico_de_jade_de_Pakal_el_Grande.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Yaxchilán Lintel 24',
      slug: 'yaxchilan-lintel-24',
      year: 725,
      medium: 'Limestone',
      dimensions: '109 cm × 78 cm (43 × 31 in)',
      artistId: artistIds['ancient-maya'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Yaxchilan_Lintel_24.jpg/800px-Yaxchilan_Lintel_24.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Chac Mool (Chichen Itza)',
      slug: 'chac-mool-chichen-itza',
      year: 1100,
      medium: 'Limestone',
      dimensions: '105 cm (41 in) long',
      artistId: artistIds['ancient-maya'],
      museumId: mexicoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Chac_Mool_Chichen_Itza.jpg/800px-Chac_Mool_Chichen_Itza.jpg',
      artworkType: 'sculpture',
    },

    // === MOCHE ===
    {
      title: 'Moche Portrait Vessel',
      slug: 'moche-portrait-vessel',
      year: 400,
      medium: 'Ceramic',
      dimensions: '30 cm (12 in) tall',
      artistId: artistIds['ancient-moche'],
      museumId: limaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Moche_portrait_ceramic_Quai_Branly_71.1930.19.162_n2.jpg/800px-Moche_portrait_ceramic_Quai_Branly_71.1930.19.162_n2.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Lord of Sipán Burial Mask',
      slug: 'lord-of-sipan-mask',
      year: 300,
      medium: 'Gold, copper, shell',
      dimensions: '42 cm (16.5 in) wide',
      artistId: artistIds['ancient-moche'],
      museumId: null, // Museum Tumbas Reales de Sipán
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Museo_tumbas_reales_de_Sipan%2C_mascara_de_oro.jpg/800px-Museo_tumbas_reales_de_Sipan%2C_mascara_de_oro.jpg',
      artworkType: 'sculpture',
    },

    // === MUISCA / COLOMBIAN ===
    {
      title: 'Muisca Raft (El Dorado)',
      slug: 'muisca-raft-eldorado',
      year: 1200,
      medium: 'Gold alloy (tumbaga)',
      dimensions: '19.5 cm × 10.1 cm (7.7 × 4 in)',
      artistId: artistIds['ancient-muisca'],
      museumId: bogotaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Muisca_raft_Legend_of_El_Dorado_Museo_del_Oro.jpg/800px-Muisca_raft_Legend_of_El_Dorado_Museo_del_Oro.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Quimbaya Poporo',
      slug: 'quimbaya-poporo',
      year: 300,
      medium: 'Gold',
      dimensions: '23.5 cm (9.3 in) tall',
      artistId: artistIds['ancient-muisca'], // Quimbaya actually
      museumId: bogotaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Poporo_Quimbaya_%28Museo_de_Am%C3%A9rica%2C_Madrid%29.jpg/800px-Poporo_Quimbaya_%28Museo_de_Am%C3%A9rica%2C_Madrid%29.jpg',
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

  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
