const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Egyptian Artifacts & Tutankhamun Treasures ===\n');

  // Get required IDs
  const gem = await prisma.museum.findFirst({ where: { slug: 'grand-egyptian-museum' } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });
  const ancientEgyptian = await prisma.artist.findFirst({ where: { slug: 'ancient-egyptian' } });

  // Create Neues Museum Berlin
  let neuesMuseumId;
  const existingNeues = await prisma.museum.findFirst({ where: { slug: 'neues-museum' } });
  if (!existingNeues) {
    const neues = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Neues Museum',
        slug: 'neues-museum',
        city: 'Berlin',
        country: 'Germany',
        address: 'Bodestraße 1-3, 10178 Berlin',
        latitude: 52.5200,
        longitude: 13.3984,
        websiteUrl: 'https://www.smb.museum/en/museums-institutions/neues-museum/',
        ticketPriceRange: '€12-14',
        description: 'The Neues Museum on Berlin\'s Museum Island houses the Egyptian Museum and Papyrus Collection, including the famous Bust of Nefertiti. Rebuilt after WWII damage, the museum blends original 19th-century architecture with modern restoration by David Chipperfield.',
        updatedAt: new Date(),
      }
    });
    neuesMuseumId = neues.id;
    console.log('Created museum: Neues Museum');
  } else {
    neuesMuseumId = existingNeues.id;
    console.log('Museum exists: Neues Museum');
  }

  console.log('\n--- Adding Artifacts ---\n');

  const artifacts = [
    // === TUTANKHAMUN TREASURES (GEM) ===
    {
      title: 'Golden Throne of Tutankhamun',
      slug: 'golden-throne-tutankhamun',
      year: -1323,
      medium: 'Wood, gold, silver, glass, semiprecious stones',
      dimensions: '102 cm × 54 cm (40 × 21 in)',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tutankhamun_throne.jpg/800px-Tutankhamun_throne.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Innermost Coffin of Tutankhamun',
      slug: 'innermost-coffin-tutankhamun',
      year: -1323,
      medium: 'Solid gold',
      dimensions: '187 cm (74 in) long, 110.4 kg',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Innermost_coffin_of_Tutankhamun.jpg/800px-Innermost_coffin_of_Tutankhamun.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Anubis Shrine',
      slug: 'anubis-shrine-tutankhamun',
      year: -1323,
      medium: 'Wood, gold, resin, glass, calcite',
      dimensions: '118 cm × 270 cm (46 × 106 in)',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tutankhamun_jackal.jpg/800px-Tutankhamun_jackal.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Canopic Shrine of Tutankhamun',
      slug: 'canopic-shrine-tutankhamun',
      year: -1323,
      medium: 'Wood, gold',
      dimensions: '198 cm × 122 cm (78 × 48 in)',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tutankhamun%27s_tomb_-_canopic_chest.jpg/800px-Tutankhamun%27s_tomb_-_canopic_chest.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Tutankhamun\'s Chariot',
      slug: 'tutankhamun-chariot',
      year: -1323,
      medium: 'Wood, gold, leather, bronze',
      dimensions: '100 cm × 240 cm (39 × 94 in)',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tutankhamun_chariot.jpg/800px-Tutankhamun_chariot.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Tutankhamun\'s Crook and Flail',
      slug: 'tutankhamun-crook-flail',
      year: -1323,
      medium: 'Gold, bronze, blue glass, obsidian',
      dimensions: 'Crook: 33.5 cm, Flail: 34 cm',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tuts_Flail_and_Crook.jpg/800px-Tuts_Flail_and_Crook.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Golden Shrine with Goddesses',
      slug: 'golden-shrine-goddesses-tutankhamun',
      year: -1323,
      medium: 'Wood, gold',
      dimensions: '50 cm × 50 cm × 59 cm (20 × 20 × 23 in)',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Canopic_chest_and_detail_of_lid.jpg/800px-Canopic_chest_and_detail_of_lid.jpg',
      artworkType: 'sculpture',
    },

    // === BUST OF NEFERTITI (NEUES MUSEUM) ===
    {
      title: 'Bust of Nefertiti',
      slug: 'bust-of-nefertiti',
      year: -1345,
      medium: 'Limestone, stucco, paint',
      dimensions: '48 cm (19 in) tall',
      artistId: ancientEgyptian?.id, // Actually by Thutmose but using placeholder
      museumId: neuesMuseumId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/800px-Nofretete_Neues_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === MORE MUSEUM ARTIFACTS ===
    {
      title: 'Papyrus of Ani (Book of the Dead)',
      slug: 'papyrus-of-ani',
      year: -1250,
      medium: 'Papyrus, ink, paint',
      dimensions: '78 feet (24 m) long',
      artistId: ancientEgyptian?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BD_Hunefer.jpg/800px-BD_Hunefer.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Statue of Senusret III',
      slug: 'statue-senusret-iii',
      year: -1850,
      medium: 'Granite',
      dimensions: '122 cm (48 in) tall',
      artistId: ancientEgyptian?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BM%2C_AES_Egyptian_Sculpture_%28Room_4%29_-_Senusret_III%2C_c._1874-1855_BC%2C_12th_Dynasty.jpg/800px-BM%2C_AES_Egyptian_Sculpture_%28Room_4%29_-_Senusret_III%2C_c._1874-1855_BC%2C_12th_Dynasty.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Golden Flies of Queen Ahhotep',
      slug: 'golden-flies-ahhotep',
      year: -1530,
      medium: 'Gold',
      dimensions: '9 cm (3.5 in) each',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Flies_of_Queen_Ahhotep.jpg/800px-Flies_of_Queen_Ahhotep.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Mummy Mask of Psusennes I',
      slug: 'mummy-mask-psusennes',
      year: -1000,
      medium: 'Gold, lapis lazuli, glass',
      dimensions: '48 cm (19 in) tall',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mask_of_Psusennes_I.jpg/800px-Mask_of_Psusennes_I.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Coffin of Henutmehyt',
      slug: 'coffin-henutmehyt',
      year: -1250,
      medium: 'Wood, gold, paint',
      dimensions: '190 cm (75 in) long',
      artistId: ancientEgyptian?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Coffin_of_Henutmehyt.jpg/800px-Coffin_of_Henutmehyt.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Colossal Head of Amenhotep III',
      slug: 'colossal-head-amenhotep-iii',
      year: -1350,
      medium: 'Red granite',
      dimensions: '290 cm (9.5 ft) tall',
      artistId: ancientEgyptian?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Colossal_head_of_Amenhotep_III_%28British_Museum%29.jpg/800px-Colossal_head_of_Amenhotep_III_%28British_Museum%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Zodiac of Dendera',
      slug: 'zodiac-of-dendera',
      year: -50,
      medium: 'Sandstone',
      dimensions: '253 cm (100 in) diameter',
      artistId: ancientEgyptian?.id,
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Denderah3.jpg/800px-Denderah3.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Ka Statue of Hor',
      slug: 'ka-statue-of-hor',
      year: -1700,
      medium: 'Wood, rock crystal, gold, silver',
      dimensions: '170 cm (67 in) tall',
      artistId: ancientEgyptian?.id,
      museumId: gem?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ka_Statue_of_horawibra.jpg/800px-Ka_Statue_of_horawibra.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Kneeling Statue of Hatshepsut',
      slug: 'kneeling-hatshepsut',
      year: -1479,
      medium: 'Granite',
      dimensions: '261.5 cm (103 in) tall',
      artistId: ancientEgyptian?.id,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Large_Kneeling_Statue_of_Hatshepsut_MET_DP229990.jpg/800px-Large_Kneeling_Statue_of_Hatshepsut_MET_DP229990.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Coffin Set of Henettawy',
      slug: 'coffin-henettawy',
      year: -1000,
      medium: 'Wood, gesso, paint, gold',
      dimensions: '203 cm (80 in) long',
      artistId: ancientEgyptian?.id,
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inner_coffin_of_Henettawy_%28F%29_MET_DP322031.jpg/800px-Inner_coffin_of_Henettawy_%28F%29_MET_DP322031.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Taharqa Sphinx',
      slug: 'taharqa-sphinx',
      year: -680,
      medium: 'Granite',
      dimensions: '73 cm × 163 cm (29 × 64 in)',
      artistId: ancientEgyptian?.id,
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sphinx_of_Taharqo_British_Museum.jpg/800px-Sphinx_of_Taharqo_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Cleopatra VII Statue',
      slug: 'cleopatra-vii-statue',
      year: -50,
      medium: 'Basalt',
      dimensions: '104 cm (41 in) tall',
      artistId: ancientEgyptian?.id,
      museumId: null, // Hermitage
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/800px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of artifacts) {
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
  const drawingCount = await prisma.artwork.count({ where: { artworkType: 'drawing' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
  console.log(`Total drawings: ${drawingCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
