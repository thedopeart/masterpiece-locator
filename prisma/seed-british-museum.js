const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding British Museum Collection ===\n');

  // Get the British Museum
  const britishMuseum = await prisma.museum.findFirst({
    where: { name: { contains: 'British' } }
  });

  if (!britishMuseum) {
    console.log('ERROR: British Museum not found in database');
    return;
  }

  console.log(`Found: ${britishMuseum.name} (${britishMuseum.id})\n`);

  // Get or create artists
  const artistSlugs = {
    assyrian: 'ancient-assyrian',
    greek: 'ancient-greek',
    egyptian: 'ancient-egyptian',
    roman: 'ancient-roman',
    polynesian: 'ancient-polynesian',
    chinese: 'ancient-chinese',
    japanese: 'ancient-japanese',
    celtic: 'ancient-celtic',
    persian: 'ancient-persian',
  };

  const artistData = {
    'ancient-assyrian': { name: 'Ancient Assyrian (Unknown)', nationality: 'Assyrian (Mesopotamia)' },
    'ancient-greek': { name: 'Ancient Greek (Unknown)', nationality: 'Greek' },
    'ancient-egyptian': { name: 'Ancient Egyptian (Unknown)', nationality: 'Egyptian' },
    'ancient-roman': { name: 'Ancient Roman (Unknown)', nationality: 'Roman' },
    'ancient-polynesian': { name: 'Ancient Polynesian (Unknown)', nationality: 'Polynesian' },
    'ancient-chinese': { name: 'Ancient Chinese (Unknown)', nationality: 'Chinese' },
    'ancient-japanese': { name: 'Ancient Japanese (Unknown)', nationality: 'Japanese' },
    'ancient-celtic': { name: 'Ancient Celtic (Unknown)', nationality: 'Celtic (Britain)' },
    'ancient-persian': { name: 'Ancient Persian (Unknown)', nationality: 'Persian (Achaemenid)' },
  };

  const artistIds = {};
  for (const [slug, data] of Object.entries(artistData)) {
    const existing = await prisma.artist.findFirst({ where: { slug } });
    if (existing) {
      artistIds[slug] = existing.id;
      console.log(`Artist exists: ${data.name}`);
    } else {
      const artist = await prisma.artist.create({
        data: {
          id: randomUUID(),
          slug,
          ...data,
          updatedAt: new Date(),
        }
      });
      artistIds[slug] = artist.id;
      console.log(`Created artist: ${data.name}`);
    }
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === ASSYRIAN MASTERPIECES ===
    {
      title: 'Lamassu (Human-Headed Winged Bull)',
      slug: 'lamassu-winged-bull-british-museum',
      year: -710,
      medium: 'Gypsum alabaster',
      dimensions: '420 cm × 436 cm (13.8 × 14.3 ft)',
      artistId: artistIds['ancient-assyrian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/British_Museum_Nimrud_Lamassu.jpg/800px-British_Museum_Nimrud_Lamassu.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Lion Hunt of Ashurbanipal',
      slug: 'lion-hunt-ashurbanipal',
      year: -645,
      medium: 'Gypsum alabaster relief',
      dimensions: '160 cm × 220 cm (63 × 87 in)',
      artistId: artistIds['ancient-assyrian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sculpted_reliefs_depicting_Ashurbanipal%2C_the_last_great_Assyrian_king%2C_hunting_lions%2C_gypsum_hall_relief_from_the_North_Palace_of_Nineveh_%28Irak%29%2C_c._645-635_BC%2C_British_Museum_%2816722368932%29.jpg/800px-Sculpted_reliefs_depicting_Ashurbanipal%2C_the_last_great_Assyrian_king%2C_hunting_lions%2C_gypsum_hall_relief_from_the_North_Palace_of_Nineveh_%28Irak%29%2C_c._645-635_BC%2C_British_Museum_%2816722368932%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Dying Lion (Wounded Lioness)',
      slug: 'dying-lion-assyrian',
      year: -645,
      medium: 'Gypsum alabaster relief',
      dimensions: '60 cm × 139 cm (24 × 55 in)',
      artistId: artistIds['ancient-assyrian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dying_lion.jpg/800px-Dying_lion.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Black Obelisk of Shalmaneser III',
      slug: 'black-obelisk-shalmaneser',
      year: -825,
      medium: 'Black limestone',
      dimensions: '198 cm (6.5 ft) tall',
      artistId: artistIds['ancient-assyrian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Black_Obelisk_of_Shalmaneser_III.jpg/800px-Black_Obelisk_of_Shalmaneser_III.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Balawat Gates (Gates of Shalmaneser III)',
      slug: 'balawat-gates',
      year: -850,
      medium: 'Bronze bands on wood',
      dimensions: 'Original gates: 600 cm (20 ft) tall',
      artistId: artistIds['ancient-assyrian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Balawat_Gate_British_Museum.jpg/800px-Balawat_Gate_British_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === ANCIENT GREEK ===
    {
      title: 'Elgin Marbles (Parthenon Sculptures)',
      slug: 'elgin-marbles-parthenon',
      year: -438,
      medium: 'Pentelic marble',
      dimensions: 'Various; frieze sections up to 106 m long',
      artistId: artistIds['ancient-greek'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Elgin_marbles_british_museum.jpg/800px-Elgin_marbles_british_museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Nereid Monument',
      slug: 'nereid-monument',
      year: -390,
      medium: 'Marble',
      dimensions: 'Reconstructed: 900 cm (30 ft) tall',
      artistId: artistIds['ancient-greek'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Nereid_monument%2C_British_Museum.jpg/800px-Nereid_monument%2C_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Caryatid from the Erechtheion',
      slug: 'caryatid-erechtheion-british',
      year: -420,
      medium: 'Pentelic marble',
      dimensions: '228 cm (7.5 ft) tall',
      artistId: artistIds['ancient-greek'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Caryatid_British_Museum.jpg/800px-Caryatid_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Mausoleum at Halicarnassus Sculptures',
      slug: 'mausoleum-halicarnassus-sculptures',
      year: -350,
      medium: 'Marble',
      dimensions: 'Various fragments',
      artistId: artistIds['ancient-greek'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mausoleum_of_Halicarnassus_British_Museum.jpg/800px-Mausoleum_of_Halicarnassus_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Horse from the Chariot of Selene',
      slug: 'horse-selene-parthenon',
      year: -438,
      medium: 'Pentelic marble',
      dimensions: '83 cm × 62 cm (33 × 24 in)',
      artistId: artistIds['ancient-greek'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Horse_of_Selene.jpg/800px-Horse_of_Selene.jpg',
      artworkType: 'sculpture',
    },

    // === ANCIENT EGYPTIAN ===
    {
      title: 'Rosetta Stone',
      slug: 'rosetta-stone',
      year: -196,
      medium: 'Granodiorite',
      dimensions: '114 cm × 72 cm × 28 cm (45 × 28 × 11 in)',
      artistId: artistIds['ancient-egyptian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/800px-Rosetta_Stone.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Colossal Bust of Ramesses II (The Younger Memnon)',
      slug: 'bust-ramesses-ii-british',
      year: -1250,
      medium: 'Granite',
      dimensions: '267 cm (8.8 ft) tall, 7.25 tons',
      artistId: artistIds['ancient-egyptian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/BM%2C_AES_Egyptian_Sulpture_~_Colossal_bust_of_Ramesses_II%2C_the_%27Younger_Memnon%27_%281250_BC%29_%28Room_4%29.jpg/800px-BM%2C_AES_Egyptian_Sulpture_~_Colossal_bust_of_Ramesses_II%2C_the_%27Younger_Memnon%27_%281250_BC%29_%28Room_4%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Gebelein Mummies',
      slug: 'gebelein-mummies',
      year: -3400,
      medium: 'Naturally mummified human remains',
      dimensions: 'Life-size',
      artistId: artistIds['ancient-egyptian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gebelein_Man_-_British_Museum.jpg/800px-Gebelein_Man_-_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Book of the Dead of Ani',
      slug: 'book-of-dead-ani',
      year: -1250,
      medium: 'Papyrus with ink and pigment',
      dimensions: '78 ft (24 m) long scroll',
      artistId: artistIds['ancient-egyptian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/BD_Hunefer.jpg/800px-BD_Hunefer.jpg',
      artworkType: 'drawing',
    },
    {
      title: 'Statue of Amenhotep III',
      slug: 'statue-amenhotep-iii-british',
      year: -1350,
      medium: 'Granite',
      dimensions: '290 cm (9.5 ft) tall',
      artistId: artistIds['ancient-egyptian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Amenhotep_III_British_Museum.jpg/800px-Amenhotep_III_British_Museum.jpg',
      artworkType: 'sculpture',
    },

    // === CELTIC / BRITISH ===
    {
      title: 'Sutton Hoo Helmet',
      slug: 'sutton-hoo-helmet',
      year: 625,
      medium: 'Iron, copper alloy, silver, gold, garnet',
      dimensions: '31.8 cm (12.5 in) tall',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sutton_Hoo_helmet_2016.png/800px-Sutton_Hoo_helmet_2016.png',
      artworkType: 'sculpture',
    },
    {
      title: 'Sutton Hoo Ship Burial Treasures',
      slug: 'sutton-hoo-ship-burial',
      year: 625,
      medium: 'Gold, garnet, enamel',
      dimensions: 'Various items',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sutton_hoo_treasure.jpg/800px-Sutton_hoo_treasure.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Battersea Shield',
      slug: 'battersea-shield',
      year: -350,
      medium: 'Bronze with enamel',
      dimensions: '77.7 cm × 34.5 cm (30.6 × 13.6 in)',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Battersea_Shield.jpg/800px-Battersea_Shield.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Snettisham Great Torc',
      slug: 'snettisham-great-torc',
      year: -75,
      medium: 'Gold and silver alloy (electrum)',
      dimensions: '20 cm (7.9 in) diameter',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Snettisham_Great_Torc.jpg/800px-Snettisham_Great_Torc.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Lewis Chessmen',
      slug: 'lewis-chessmen',
      year: 1150,
      medium: 'Walrus ivory and whale tooth',
      dimensions: 'Largest: 10.2 cm (4 in) tall',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lewis_Chessmen_Overview.jpg/800px-Lewis_Chessmen_Overview.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Mold Gold Cape',
      slug: 'mold-gold-cape',
      year: -1900,
      medium: 'Sheet gold',
      dimensions: '45 cm (18 in) wide',
      artistId: artistIds['ancient-celtic'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/British_Museum_gold_cape.jpg/800px-British_Museum_gold_cape.jpg',
      artworkType: 'sculpture',
    },

    // === PERSIAN ===
    {
      title: 'Oxus Treasure',
      slug: 'oxus-treasure',
      year: -500,
      medium: 'Gold and silver',
      dimensions: 'Various items; chariot: 18.8 cm long',
      artistId: artistIds['ancient-persian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Oxus_chariot_model.jpg/800px-Oxus_chariot_model.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Cyrus Cylinder',
      slug: 'cyrus-cylinder',
      year: -539,
      medium: 'Baked clay',
      dimensions: '22.9 cm × 10 cm (9 × 4 in)',
      artistId: artistIds['ancient-persian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cyrus_Cylinder.jpg/800px-Cyrus_Cylinder.jpg',
      artworkType: 'sculpture',
    },

    // === POLYNESIAN ===
    {
      title: 'Hoa Hakananai\'a (Easter Island Moai)',
      slug: 'hoa-hakananaia-moai',
      year: 1200,
      medium: 'Basalt',
      dimensions: '242 cm (7.9 ft) tall, 4 tons',
      artistId: artistIds['ancient-polynesian'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hoa_Hakananai%27a.jpg/800px-Hoa_Hakananai%27a.jpg',
      artworkType: 'sculpture',
    },

    // === CHINESE ===
    {
      title: 'Admonitions Scroll (Gu Kaizhi)',
      slug: 'admonitions-scroll',
      year: 380,
      medium: 'Ink and colors on silk',
      dimensions: '24.8 cm × 348.2 cm (9.8 × 137 in)',
      artistId: artistIds['ancient-chinese'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ku_K%27ai-chih_001.jpg/800px-Ku_K%27ai-chih_001.jpg',
      artworkType: 'painting',
    },
    {
      title: 'David Vases',
      slug: 'david-vases',
      year: 1351,
      medium: 'Blue and white porcelain',
      dimensions: '63.5 cm (25 in) tall each',
      artistId: artistIds['ancient-chinese'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/David_Vases.jpg/800px-David_Vases.jpg',
      artworkType: 'sculpture',
    },

    // === JAPANESE ===
    {
      title: 'Seated Buddha from Gandhara',
      slug: 'seated-buddha-gandhara',
      year: 200,
      medium: 'Gray schist',
      dimensions: '95 cm (37 in) tall',
      artistId: artistIds['ancient-japanese'],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gandhara_Buddha_%28tnm%29.jpeg/800px-Gandhara_Buddha_%28tnm%29.jpeg',
      artworkType: 'sculpture',
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
        museumId: britishMuseum.id,
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
    where: { museumId: britishMuseum.id }
  });
  console.log(`\nBritish Museum total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
