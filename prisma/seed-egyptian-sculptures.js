const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Grand Egyptian Museum & Egyptian Sculptures ===\n');

  // Create Grand Egyptian Museum
  let gemId;
  const existingGem = await prisma.museum.findFirst({ where: { slug: 'grand-egyptian-museum' } });
  if (!existingGem) {
    const gem = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Grand Egyptian Museum',
        slug: 'grand-egyptian-museum',
        city: 'Giza',
        country: 'Egypt',
        address: 'Al Remaya Square, Kafr Nassar, Al Haram',
        latitude: 29.9953,
        longitude: 31.1166,
        websiteUrl: 'https://gem.gov.eg',
        ticketUrl: 'https://gem.gov.eg/tickets',
        ticketPriceRange: '$20-50 USD',
        description: 'The Grand Egyptian Museum (GEM) is the largest archaeological museum in the world, housing over 100,000 artifacts spanning 5,000 years of Egyptian history. Located near the Giza pyramids, it opened in 2024 and features the complete Tutankhamun collection, including items never before displayed.',
        updatedAt: new Date(),
      }
    });
    gemId = gem.id;
    console.log('Created museum: Grand Egyptian Museum');
  } else {
    gemId = existingGem.id;
    console.log('Museum exists: Grand Egyptian Museum');
  }

  // Create Egyptian Museum Cairo
  let cairoMuseumId;
  const existingCairo = await prisma.museum.findFirst({ where: { slug: 'egyptian-museum-cairo' } });
  if (!existingCairo) {
    const cairo = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Egyptian Museum',
        slug: 'egyptian-museum-cairo',
        city: 'Cairo',
        country: 'Egypt',
        address: 'Tahrir Square, Cairo',
        latitude: 30.0478,
        longitude: 31.2336,
        websiteUrl: 'https://www.egyptianmuseum.gov.eg',
        ticketPriceRange: '$10-20 USD',
        description: 'The Egyptian Museum in Cairo houses the world\'s largest collection of Pharaonic antiquities. Founded in 1902, it contains over 120,000 items including mummies, sarcophagi, and treasures from ancient Egypt. Many items are being transferred to the new Grand Egyptian Museum.',
        updatedAt: new Date(),
      }
    });
    cairoMuseumId = cairo.id;
    console.log('Created museum: Egyptian Museum Cairo');
  } else {
    cairoMuseumId = existingCairo.id;
    console.log('Museum exists: Egyptian Museum Cairo');
  }

  // Get existing museum IDs
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });

  // Create/get Ancient Egyptian artist placeholder
  let ancientEgyptianId;
  const existingEgyptian = await prisma.artist.findFirst({ where: { slug: 'ancient-egyptian' } });
  if (!existingEgyptian) {
    const egyptian = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Ancient Egyptian (Unknown)',
        slug: 'ancient-egyptian',
        nationality: 'Egyptian',
        updatedAt: new Date(),
      }
    });
    ancientEgyptianId = egyptian.id;
    console.log('Created artist: Ancient Egyptian (Unknown)');
  } else {
    ancientEgyptianId = existingEgyptian.id;
  }

  // Get Thutmose for Nefertiti-related works
  const thutmose = await prisma.artist.findFirst({ where: { slug: 'thutmose' } });

  console.log('\n--- Adding Egyptian Sculptures ---\n');

  const sculptures = [
    // === GRAND EGYPTIAN MUSEUM ===
    {
      title: 'Tutankhamun\'s Golden Mask',
      slug: 'tutankhamun-golden-mask',
      year: -1323,
      medium: 'Gold, lapis lazuli, carnelian, obsidian, turquoise',
      dimensions: '54 cm (21 in) tall, 11 kg',
      artistId: ancientEgyptianId,
      museumId: gemId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaworworWorworworWorworworThworworWorMask.jpg/800px-CairoEgMuseumTaworworWorworworWorworworThworworWorMask.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Statue of Khafre',
      slug: 'statue-of-khafre',
      year: -2500,
      medium: 'Diorite gneiss',
      dimensions: '168 cm (66 in) tall',
      artistId: ancientEgyptianId,
      museumId: gemId, // Moving to GEM
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Khafre_statue.jpg/800px-Khafre_statue.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Menkaure and His Queen',
      slug: 'menkaure-and-his-queen',
      year: -2490,
      medium: 'Graywacke',
      dimensions: '142.2 cm (56 in) tall',
      artistId: ancientEgyptianId,
      museumId: null, // Museum of Fine Arts, Boston
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Menkaure-and-wife.jpg/800px-Menkaure-and-wife.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Colossal Statue of Ramesses II',
      slug: 'colossal-ramesses-ii-gem',
      year: -1250,
      medium: 'Red granite',
      dimensions: '11 m (36 ft) tall',
      artistId: ancientEgyptianId,
      museumId: gemId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/GEM_Ramses.jpg/800px-GEM_Ramses.jpg',
      artworkType: 'sculpture',
    },

    // === BRITISH MUSEUM ===
    {
      title: 'Rosetta Stone',
      slug: 'rosetta-stone',
      year: -196,
      medium: 'Granodiorite',
      dimensions: '114 cm × 72 cm × 28 cm',
      artistId: ancientEgyptianId,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/800px-Rosetta_Stone.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Colossal Bust of Ramesses II',
      slug: 'younger-memnon',
      year: -1250,
      medium: 'Granite',
      dimensions: '267 cm (8 ft 9 in) tall, 7.25 tons',
      artistId: ancientEgyptianId,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/BM%2C_AES_Egyptian_Sculpture_%28Room_4%29.jpg/800px-BM%2C_AES_Egyptian_Sculpture_%28Room_4%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Seated Statue of Amenhotep III',
      slug: 'amenhotep-iii-seated',
      year: -1350,
      medium: 'Black granite',
      dimensions: '250 cm (8.2 ft) tall',
      artistId: ancientEgyptianId,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Amenhotep_III_British_Museum.jpg/800px-Amenhotep_III_British_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === LOUVRE ===
    {
      title: 'Great Sphinx of Tanis',
      slug: 'great-sphinx-of-tanis',
      year: -2600,
      medium: 'Pink granite',
      dimensions: '183 cm × 480 cm (6 × 15.7 ft)',
      artistId: ancientEgyptianId,
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Grand_sphinx_de_Tanis_2.jpg/800px-Grand_sphinx_de_Tanis_2.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Seated Scribe',
      slug: 'seated-scribe',
      year: -2450,
      medium: 'Painted limestone, rock crystal, magnesite, copper',
      dimensions: '53.7 cm (21 in) tall',
      artistId: ancientEgyptianId,
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Louvre_032007_02.jpg/800px-Louvre_032007_02.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Statue of Kaaper (Sheikh el-Balad)',
      slug: 'statue-of-kaaper',
      year: -2450,
      medium: 'Sycamore wood',
      dimensions: '112 cm (44 in) tall',
      artistId: ancientEgyptianId,
      museumId: gemId, // Moving from Cairo to GEM
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Kaaper-E-CloseUp-CairoMuseum.jpg/800px-Kaaper-E-CloseUp-CairoMuseum.jpg',
      artworkType: 'sculpture',
    },

    // === MET ===
    {
      title: 'Temple of Dendur',
      slug: 'temple-of-dendur',
      year: -15,
      medium: 'Aeolian sandstone',
      dimensions: '25 m × 8 m (82 × 26 ft)',
      artistId: ancientEgyptianId,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Temple_of_Dendur-_night.jpg/800px-Temple_of_Dendur-_night.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Sphinx of Hatshepsut',
      slug: 'sphinx-of-hatshepsut',
      year: -1479,
      medium: 'Granite',
      dimensions: '164 cm × 343 cm (5.4 × 11.3 ft)',
      artistId: ancientEgyptianId,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_Kneeling_Statue_of_Hatshepsut_MET_DP229990.jpg/800px-Large_Kneeling_Statue_of_Hatshepsut_MET_DP229990.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Seated Statue of Hatshepsut',
      slug: 'seated-hatshepsut',
      year: -1479,
      medium: 'Indurated limestone, paint',
      dimensions: '195 cm (77 in) tall',
      artistId: ancientEgyptianId,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hatshepsut-SmallSphinx_MetropolitanMuseum.png/800px-Hatshepsut-SmallSphinx_MetropolitanMuseum.png',
      artworkType: 'sculpture',
    },
    {
      title: 'William the Hippo',
      slug: 'william-the-hippo',
      year: -1961,
      medium: 'Faience',
      dimensions: '11.2 cm × 20 cm (4.4 × 7.9 in)',
      artistId: ancientEgyptianId,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/William_the_Hippopotamus_MET_DT11715.jpg/800px-William_the_Hippopotamus_MET_DT11715.jpg',
      artworkType: 'sculpture',
    },

    // === MORE GEM / CAIRO ===
    {
      title: 'Akhenaten Colossus',
      slug: 'akhenaten-colossus',
      year: -1350,
      medium: 'Sandstone',
      dimensions: '400 cm (13 ft) tall',
      artistId: ancientEgyptianId,
      museumId: gemId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GD-EG-Caire-Mus%C3%A9e061.JPG/800px-GD-EG-Caire-Mus%C3%A9e061.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Rahotep and Nofret',
      slug: 'rahotep-and-nofret',
      year: -2600,
      medium: 'Painted limestone',
      dimensions: '121 cm (48 in) tall each',
      artistId: ancientEgyptianId,
      museumId: gemId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rahotep_and_Nofret.jpg/800px-Rahotep_and_Nofret.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Narmer Palette',
      slug: 'narmer-palette',
      year: -3100,
      medium: 'Siltstone',
      dimensions: '64 cm × 42 cm (25 × 17 in)',
      artistId: ancientEgyptianId,
      museumId: gemId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Narmer_Palette.jpg/800px-Narmer_Palette.jpg',
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
  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
