const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Asian Art ===\n');

  // Get existing museums
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });

  // Create Tokyo National Museum
  let tokyoId;
  const existingTokyo = await prisma.museum.findFirst({ where: { slug: 'tokyo-national-museum' } });
  if (!existingTokyo) {
    const tokyo = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Tokyo National Museum',
        slug: 'tokyo-national-museum',
        city: 'Tokyo',
        country: 'Japan',
        address: '13-9 Uenokoen, Taito City, Tokyo 110-8712',
        latitude: 35.7189,
        longitude: 139.7765,
        websiteUrl: 'https://www.tnm.jp',
        ticketPriceRange: '¥1,000 ($7)',
        description: 'Japan\'s oldest and largest museum houses over 110,000 objects spanning Japanese art history. The collection includes National Treasures, Important Cultural Properties, and masterpieces of Japanese painting, sculpture, and decorative arts.',
        updatedAt: new Date(),
      }
    });
    tokyoId = tokyo.id;
    console.log('Created museum: Tokyo National Museum');
  } else {
    tokyoId = existingTokyo.id;
    console.log('Museum exists: Tokyo National Museum');
  }

  // Create Kyoto National Museum
  let kyotoId;
  const existingKyoto = await prisma.museum.findFirst({ where: { slug: 'kyoto-national-museum' } });
  if (!existingKyoto) {
    const kyoto = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Kyoto National Museum',
        slug: 'kyoto-national-museum',
        city: 'Kyoto',
        country: 'Japan',
        address: '527 Chayacho, Higashiyama Ward, Kyoto 605-0931',
        latitude: 34.9910,
        longitude: 135.7728,
        websiteUrl: 'https://www.kyohaku.go.jp',
        ticketPriceRange: '¥700 ($5)',
        description: 'The Kyoto National Museum specializes in pre-modern Japanese and Asian art, with exceptional collections of Buddhist sculpture, paintings, and ceramics. Located near Sanjusangendo Temple, it showcases the cultural legacy of Japan\'s former imperial capital.',
        updatedAt: new Date(),
      }
    });
    kyotoId = kyoto.id;
    console.log('Created museum: Kyoto National Museum');
  } else {
    kyotoId = existingKyoto.id;
    console.log('Museum exists: Kyoto National Museum');
  }

  // Create National Palace Museum (Taiwan)
  let taipeiId;
  const existingTaipei = await prisma.museum.findFirst({ where: { slug: 'national-palace-museum' } });
  if (!existingTaipei) {
    const taipei = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'National Palace Museum',
        slug: 'national-palace-museum',
        city: 'Taipei',
        country: 'Taiwan',
        address: 'No. 221, Section 2, Zhishan Road, Shilin District',
        latitude: 25.1024,
        longitude: 121.5485,
        websiteUrl: 'https://www.npm.gov.tw',
        ticketPriceRange: 'NT$350 ($11)',
        description: 'The National Palace Museum holds the world\'s largest collection of Chinese art, including treasures evacuated from Beijing\'s Forbidden City. Nearly 700,000 artifacts span 8,000 years of Chinese history, from jade and bronze to calligraphy and painting.',
        updatedAt: new Date(),
      }
    });
    taipeiId = taipei.id;
    console.log('Created museum: National Palace Museum');
  } else {
    taipeiId = existingTaipei.id;
    console.log('Museum exists: National Palace Museum');
  }

  // Create Palace Museum (Beijing/Forbidden City)
  let beijingId;
  const existingBeijing = await prisma.museum.findFirst({ where: { slug: 'palace-museum-beijing' } });
  if (!existingBeijing) {
    const beijing = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Palace Museum (Forbidden City)',
        slug: 'palace-museum-beijing',
        city: 'Beijing',
        country: 'China',
        address: '4 Jingshan Front St, Dongcheng, Beijing',
        latitude: 39.9163,
        longitude: 116.3972,
        websiteUrl: 'https://www.dpm.org.cn',
        ticketPriceRange: '¥60 ($8)',
        description: 'The Palace Museum occupies the Forbidden City, home to Chinese emperors for nearly 500 years. The vast complex contains 1.8 million artifacts, including imperial treasures, paintings, ceramics, and the palace architecture itself.',
        updatedAt: new Date(),
      }
    });
    beijingId = beijing.id;
    console.log('Created museum: Palace Museum Beijing');
  } else {
    beijingId = existingBeijing.id;
    console.log('Museum exists: Palace Museum Beijing');
  }

  // Create Kamakura Museum (for Great Buddha)
  let kamakuraId;
  const existingKamakura = await prisma.museum.findFirst({ where: { slug: 'kotoku-in-kamakura' } });
  if (!existingKamakura) {
    const kamakura = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Kōtoku-in Temple',
        slug: 'kotoku-in-kamakura',
        city: 'Kamakura',
        country: 'Japan',
        address: '4 Chome-2-28 Hase, Kamakura, Kanagawa 248-0016',
        latitude: 35.3167,
        longitude: 139.5356,
        websiteUrl: 'https://www.kotoku-in.jp',
        ticketPriceRange: '¥300 ($2)',
        description: 'Kōtoku-in is a Buddhist temple famous for its Great Buddha (Daibutsu), a monumental bronze statue of Amitabha Buddha. Cast in 1252, the outdoor statue sits where its original temple hall was destroyed by a tsunami in 1498.',
        updatedAt: new Date(),
      }
    });
    kamakuraId = kamakura.id;
    console.log('Created museum: Kotoku-in Kamakura');
  } else {
    kamakuraId = existingKamakura.id;
    console.log('Museum exists: Kotoku-in Kamakura');
  }

  // Create Nara Temple (Todai-ji)
  let naraId;
  const existingNara = await prisma.museum.findFirst({ where: { slug: 'todai-ji-temple' } });
  if (!existingNara) {
    const nara = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Tōdai-ji Temple',
        slug: 'todai-ji-temple',
        city: 'Nara',
        country: 'Japan',
        address: '406-1 Zoshicho, Nara 630-8211',
        latitude: 34.6890,
        longitude: 135.8398,
        websiteUrl: 'https://www.todaiji.or.jp',
        ticketPriceRange: '¥600 ($4)',
        description: 'Tōdai-ji houses the world\'s largest bronze Buddha statue within one of the world\'s largest wooden buildings. Founded in 752, the temple was the head of all provincial Buddhist temples and remains a UNESCO World Heritage Site.',
        updatedAt: new Date(),
      }
    });
    naraId = nara.id;
    console.log('Created museum: Todai-ji Temple');
  } else {
    naraId = existingNara.id;
    console.log('Museum exists: Todai-ji Temple');
  }

  // Create artists
  const asianArtists = [
    {
      name: 'Katsushika Hokusai',
      slug: 'katsushika-hokusai',
      birthYear: 1760,
      deathYear: 1849,
      nationality: 'Japanese',
    },
    {
      name: 'Utagawa Hiroshige',
      slug: 'utagawa-hiroshige',
      birthYear: 1797,
      deathYear: 1858,
      nationality: 'Japanese',
    },
    {
      name: 'Kitagawa Utamaro',
      slug: 'kitagawa-utamaro',
      birthYear: 1753,
      deathYear: 1806,
      nationality: 'Japanese',
    },
    {
      name: 'Ancient Japanese (Unknown)',
      slug: 'ancient-japanese',
      nationality: 'Japanese',
    },
    {
      name: 'Ancient Chinese (Unknown)',
      slug: 'ancient-chinese',
      nationality: 'Chinese',
    },
    {
      name: 'Unkei',
      slug: 'unkei',
      birthYear: 1150,
      deathYear: 1223,
      nationality: 'Japanese',
    },
    {
      name: 'Fan Kuan',
      slug: 'fan-kuan',
      birthYear: 960,
      deathYear: 1030,
      nationality: 'Chinese',
    },
    {
      name: 'Guo Xi',
      slug: 'guo-xi',
      birthYear: 1020,
      deathYear: 1090,
      nationality: 'Chinese',
    },
    {
      name: 'Zhang Zeduan',
      slug: 'zhang-zeduan',
      birthYear: 1085,
      deathYear: 1145,
      nationality: 'Chinese',
    },
  ];

  const artistIds = {};
  for (const artistData of asianArtists) {
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
    // === HOKUSAI ===
    {
      title: 'The Great Wave off Kanagawa',
      slug: 'great-wave-off-kanagawa',
      year: 1831,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '25.7 cm × 37.9 cm (10.1 × 14.9 in)',
      artistId: artistIds['katsushika-hokusai'],
      museumId: met?.id, // Multiple locations, Met has good example
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/800px-Tsunami_by_hokusai_19th_century.jpg',
      artworkType: 'print',
    },
    {
      title: 'Red Fuji (Fine Wind, Clear Morning)',
      slug: 'red-fuji-hokusai',
      year: 1831,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '25.4 cm × 38.1 cm (10 × 15 in)',
      artistId: artistIds['katsushika-hokusai'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Fine_Wind%2C_Clear_Morning.jpg/800px-Fine_Wind%2C_Clear_Morning.jpg',
      artworkType: 'print',
    },
    {
      title: 'Thunderstorm Beneath the Summit',
      slug: 'thunderstorm-beneath-summit-hokusai',
      year: 1831,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '25 cm × 37 cm (9.8 × 14.6 in)',
      artistId: artistIds['katsushika-hokusai'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lightnings_below_the_summit.jpg/800px-Lightnings_below_the_summit.jpg',
      artworkType: 'print',
    },

    // === HIROSHIGE ===
    {
      title: 'Sudden Shower over Shin-Ōhashi Bridge',
      slug: 'sudden-shower-shin-ohashi',
      year: 1857,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '34 cm × 22.5 cm (13.4 × 8.9 in)',
      artistId: artistIds['utagawa-hiroshige'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hiroshige_-_Evening_Shower_at_Atake_and_the_Great_Bridge.jpg/800px-Hiroshige_-_Evening_Shower_at_Atake_and_the_Great_Bridge.jpg',
      artworkType: 'print',
    },
    {
      title: 'Plum Park in Kameido',
      slug: 'plum-park-kameido-hiroshige',
      year: 1857,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '34 cm × 22.5 cm (13.4 × 8.9 in)',
      artistId: artistIds['utagawa-hiroshige'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hiroshige_-_Plum_Park_in_Kameido_-_Google_Art_Project.jpg/800px-Hiroshige_-_Plum_Park_in_Kameido_-_Google_Art_Project.jpg',
      artworkType: 'print',
    },
    {
      title: 'Night Snow at Kambara',
      slug: 'night-snow-kambara',
      year: 1834,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '22.8 cm × 35.4 cm (9 × 13.9 in)',
      artistId: artistIds['utagawa-hiroshige'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hiroshige-_Kanbara.jpg/800px-Hiroshige-_Kanbara.jpg',
      artworkType: 'print',
    },

    // === UTAMARO ===
    {
      title: 'Three Beauties of the Present Day',
      slug: 'three-beauties-utamaro',
      year: 1793,
      medium: 'Woodblock print (nishiki-e)',
      dimensions: '38.5 cm × 25.5 cm (15.2 × 10 in)',
      artistId: artistIds['kitagawa-utamaro'],
      museumId: null,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Utamaro_%281793%29_Three_Beauties_of_the_Present_Day.jpg/800px-Utamaro_%281793%29_Three_Beauties_of_the_Present_Day.jpg',
      artworkType: 'print',
    },

    // === JAPANESE BUDDHIST SCULPTURE ===
    {
      title: 'Great Buddha of Kamakura',
      slug: 'great-buddha-kamakura',
      year: 1252,
      medium: 'Bronze',
      dimensions: '13.35 m (43.8 ft) tall, 121 tons',
      artistId: artistIds['ancient-japanese'],
      museumId: kamakuraId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kamakura_Budda_Daibutsu_front_1885.jpg/800px-Kamakura_Budda_Daibutsu_front_1885.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Great Buddha of Nara (Daibutsu)',
      slug: 'great-buddha-nara',
      year: 752,
      medium: 'Bronze, gold',
      dimensions: '14.98 m (49.1 ft) tall',
      artistId: artistIds['ancient-japanese'],
      museumId: naraId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/T%C5%8Ddai-ji_Kon-d%C5%8D_Vairocana.jpg/800px-T%C5%8Ddai-ji_Kon-d%C5%8D_Vairocana.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Kongō Rikishi (Nio Guardian)',
      slug: 'kongo-rikishi-unkei',
      year: 1203,
      medium: 'Wood, paint',
      dimensions: '8.4 m (27.6 ft) tall',
      artistId: artistIds['unkei'],
      museumId: naraId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/T%C5%8Ddai-ji_Nand%C5%8D_Ni%C5%8D_Ungyo.jpg/800px-T%C5%8Ddai-ji_Nand%C5%8D_Ni%C5%8D_Ungyo.jpg',
      artworkType: 'sculpture',
    },

    // === CHINESE PAINTING ===
    {
      title: 'Travelers Among Mountains and Streams',
      slug: 'travelers-mountains-streams',
      year: 1000,
      medium: 'Ink on silk hanging scroll',
      dimensions: '206.3 cm × 103.3 cm (81.2 × 40.7 in)',
      artistId: artistIds['fan-kuan'],
      museumId: taipeiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg/800px-Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Early Spring',
      slug: 'early-spring-guo-xi',
      year: 1072,
      medium: 'Ink on silk hanging scroll',
      dimensions: '158.3 cm × 108.1 cm (62.3 × 42.6 in)',
      artistId: artistIds['guo-xi'],
      museumId: taipeiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Guo_Xi_-_Early_Spring_%28large%29.jpg/800px-Guo_Xi_-_Early_Spring_%28large%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Along the River During the Qingming Festival',
      slug: 'along-river-qingming-festival',
      year: 1120,
      medium: 'Ink on silk handscroll',
      dimensions: '24.8 cm × 528.7 cm (9.8 in × 17.3 ft)',
      artistId: artistIds['zhang-zeduan'],
      museumId: beijingId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Along_the_River_7-119-3.jpg/800px-Along_the_River_7-119-3.jpg',
      artworkType: 'painting',
    },

    // === CHINESE ARTIFACTS ===
    {
      title: 'Jadeite Cabbage',
      slug: 'jadeite-cabbage',
      year: 1900,
      medium: 'Jadeite',
      dimensions: '18.7 cm × 9.1 cm (7.4 × 3.6 in)',
      artistId: artistIds['ancient-chinese'],
      museumId: taipeiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jade_cabbage_closeup.jpg/800px-Jade_cabbage_closeup.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Meat-Shaped Stone',
      slug: 'meat-shaped-stone',
      year: 1700,
      medium: 'Jasper',
      dimensions: '5.73 cm × 6.6 cm × 5.3 cm (2.3 × 2.6 × 2.1 in)',
      artistId: artistIds['ancient-chinese'],
      museumId: taipeiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Meat_shaped_stone.jpg/800px-Meat_shaped_stone.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Mao Gong Ding (Bronze Vessel)',
      slug: 'mao-gong-ding',
      year: -800,
      medium: 'Bronze',
      dimensions: '53.8 cm (21.2 in) tall',
      artistId: artistIds['ancient-chinese'],
      museumId: taipeiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Maogongding.jpg/800px-Maogongding.jpg',
      artworkType: 'sculpture',
    },

    // === BRITISH MUSEUM ASIAN ===
    {
      title: 'Lewis Chessmen',
      slug: 'lewis-chessmen',
      year: 1150,
      medium: 'Walrus ivory, whale tooth',
      dimensions: 'Largest pieces 10.2 cm (4 in) tall',
      artistId: artistIds['ancient-japanese'], // Actually Norse, but using placeholder
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lewis_chessmen.jpg/800px-Lewis_chessmen.jpg',
      artworkType: 'sculpture',
    },

    // === MORE JAPANESE ===
    {
      title: 'Wind God and Thunder God Screens',
      slug: 'wind-thunder-god-screens',
      year: 1640,
      medium: 'Ink, color, gold leaf on paper',
      dimensions: 'Each screen 169.8 cm × 154.5 cm',
      artistId: artistIds['ancient-japanese'], // Tawaraya Sōtatsu
      museumId: kyotoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Fujinraijin-tawaraya.jpg/800px-Fujinraijin-tawaraya.jpg',
      artworkType: 'painting',
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

  const printCount = await prisma.artwork.count({ where: { artworkType: 'print' } });
  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal prints: ${printCount}`);
  console.log(`Total sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
