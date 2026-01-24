const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding African Art ===\n');

  // Get existing museums
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });
  const met = await prisma.museum.findFirst({ where: { name: { contains: 'Metropolitan' } } });
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });

  // Create National Museum of Nigeria
  let lagosId;
  const existingLagos = await prisma.museum.findFirst({ where: { slug: 'national-museum-lagos' } });
  if (!existingLagos) {
    const lagos = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'National Museum Lagos',
        slug: 'national-museum-lagos',
        city: 'Lagos',
        country: 'Nigeria',
        address: 'King George V Road, Onikan, Lagos Island',
        latitude: 6.4398,
        longitude: 3.4089,
        websiteUrl: 'https://ncmm.gov.ng',
        ticketPriceRange: '₦200 ($0.25)',
        description: 'The National Museum Lagos houses Nigeria\'s most important cultural treasures, including Benin bronzes, Ife terracottas, and Nok sculptures. Founded in 1957, it preserves artifacts spanning thousands of years of Nigerian history and serves as headquarters for the National Commission for Museums and Monuments.',
        updatedAt: new Date(),
      }
    });
    lagosId = lagos.id;
    console.log('Created museum: National Museum Lagos');
  } else {
    lagosId = existingLagos.id;
    console.log('Museum exists: National Museum Lagos');
  }

  // Create Ethnological Museum Berlin
  let berlinEthnoId;
  const existingBerlinEthno = await prisma.museum.findFirst({ where: { slug: 'ethnological-museum-berlin' } });
  if (!existingBerlinEthno) {
    const berlinEthno = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Ethnological Museum Berlin',
        slug: 'ethnological-museum-berlin',
        city: 'Berlin',
        country: 'Germany',
        address: 'Humboldt Forum, Schloßplatz, 10178 Berlin',
        latitude: 52.5177,
        longitude: 13.4013,
        websiteUrl: 'https://www.smb.museum/en/museums-institutions/ethnologisches-museum/',
        ticketPriceRange: '€14-19',
        description: 'The Ethnological Museum Berlin holds one of the world\'s largest collections of non-European art and artifacts, now housed in the Humboldt Forum. The collection includes significant holdings of African art, though many Benin bronzes are being repatriated to Nigeria.',
        updatedAt: new Date(),
      }
    });
    berlinEthnoId = berlinEthno.id;
    console.log('Created museum: Ethnological Museum Berlin');
  } else {
    berlinEthnoId = existingBerlinEthno.id;
    console.log('Museum exists: Ethnological Museum Berlin');
  }

  // Create Quai Branly Museum
  let quaiBranlyId;
  const existingQuaiBranly = await prisma.museum.findFirst({ where: { slug: 'quai-branly-museum' } });
  if (!existingQuaiBranly) {
    const quaiBranly = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Musée du Quai Branly',
        slug: 'quai-branly-museum',
        city: 'Paris',
        country: 'France',
        address: '37 Quai Branly, 75007 Paris',
        latitude: 48.8611,
        longitude: 2.2977,
        websiteUrl: 'https://www.quaibranly.fr',
        ticketPriceRange: '€12-14',
        description: 'The Musée du Quai Branly - Jacques Chirac showcases indigenous art and cultures from Africa, Asia, Oceania, and the Americas. Opened in 2006, the museum\'s distinctive Jean Nouvel architecture houses over 450,000 objects in a garden setting near the Eiffel Tower.',
        updatedAt: new Date(),
      }
    });
    quaiBranlyId = quaiBranly.id;
    console.log('Created museum: Quai Branly Museum');
  } else {
    quaiBranlyId = existingQuaiBranly.id;
    console.log('Museum exists: Quai Branly Museum');
  }

  // Create artists
  const africanArtists = [
    {
      name: 'Ancient Benin (Unknown)',
      slug: 'ancient-benin',
      nationality: 'Benin Kingdom (Nigeria)',
    },
    {
      name: 'Ancient Ife (Unknown)',
      slug: 'ancient-ife',
      nationality: 'Ife Kingdom (Nigeria)',
    },
    {
      name: 'Ancient Nok (Unknown)',
      slug: 'ancient-nok',
      nationality: 'Nok Culture (Nigeria)',
    },
    {
      name: 'Ancient Kongo (Unknown)',
      slug: 'ancient-kongo',
      nationality: 'Kongo Kingdom',
    },
  ];

  const artistIds = {};
  for (const artistData of africanArtists) {
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
    // === BENIN BRONZES ===
    {
      title: 'Benin Bronze Head of a Queen Mother',
      slug: 'benin-bronze-queen-mother',
      year: 1500,
      medium: 'Brass',
      dimensions: '51 cm (20 in) tall',
      artistId: artistIds['ancient-benin'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Benin_brass_plaque_02.jpg/800px-Benin_brass_plaque_02.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Benin Bronze Plaque: Warriors',
      slug: 'benin-bronze-plaque-warriors',
      year: 1550,
      medium: 'Brass',
      dimensions: '44 cm × 38 cm (17 × 15 in)',
      artistId: artistIds['ancient-benin'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Benin_plaque_in_the_British_Museum.jpg/800px-Benin_plaque_in_the_British_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Benin Bronze Leopard',
      slug: 'benin-bronze-leopard',
      year: 1600,
      medium: 'Brass with copper spots',
      dimensions: '65 cm (26 in) long',
      artistId: artistIds['ancient-benin'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Benin_leopard_BM_Af1898_0115_2.jpg/800px-Benin_leopard_BM_Af1898_0115_2.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Benin Bronze: Oba (King) Head',
      slug: 'benin-bronze-oba-head',
      year: 1550,
      medium: 'Brass',
      dimensions: '35 cm (14 in) tall',
      artistId: artistIds['ancient-benin'],
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Benin_Head.jpg/800px-Benin_Head.jpg',
      artworkType: 'sculpture',
    },

    // === IFE BRONZES AND TERRACOTTAS ===
    {
      title: 'Ife Bronze Head',
      slug: 'ife-bronze-head',
      year: 1300,
      medium: 'Brass',
      dimensions: '30 cm (12 in) tall',
      artistId: artistIds['ancient-ife'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ife_head.jpg/800px-Ife_head.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Ori Olokun (Head of Olokun)',
      slug: 'ori-olokun-ife',
      year: 1300,
      medium: 'Brass',
      dimensions: '31 cm (12 in) tall',
      artistId: artistIds['ancient-ife'],
      museumId: lagosId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ife_Kings_Head.jpg/800px-Ife_Kings_Head.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Ife Terracotta Head',
      slug: 'ife-terracotta-head',
      year: 1200,
      medium: 'Terracotta',
      dimensions: '26 cm (10 in) tall',
      artistId: artistIds['ancient-ife'],
      museumId: lagosId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ife_sculpture_Inv._A_78-4-1.jpg/800px-Ife_sculpture_Inv._A_78-4-1.jpg',
      artworkType: 'sculpture',
    },

    // === NOK CULTURE ===
    {
      title: 'Nok Terracotta Head',
      slug: 'nok-terracotta-head',
      year: -500,
      medium: 'Terracotta',
      dimensions: '36 cm (14 in) tall',
      artistId: artistIds['ancient-nok'],
      museumId: lagosId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nok_sculpture_Louvre_70-1998-11-1.jpg/800px-Nok_sculpture_Louvre_70-1998-11-1.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Nok Terracotta Figure',
      slug: 'nok-terracotta-figure',
      year: -300,
      medium: 'Terracotta',
      dimensions: '48 cm (19 in) tall',
      artistId: artistIds['ancient-nok'],
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nok_sculpture_Louvre_70-1998-11-2.jpg/800px-Nok_sculpture_Louvre_70-1998-11-2.jpg',
      artworkType: 'sculpture',
    },

    // === KONGO ART ===
    {
      title: 'Kongo Power Figure (Nkisi)',
      slug: 'kongo-nkisi-figure',
      year: 1880,
      medium: 'Wood, iron, glass, fabric',
      dimensions: '117 cm (46 in) tall',
      artistId: artistIds['ancient-kongo'],
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nail_Figure_%28Nkisi_N%27Kondi%29_MET_DT1364.jpg/800px-Nail_Figure_%28Nkisi_N%27Kondi%29_MET_DT1364.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Kongo Crucifix',
      slug: 'kongo-crucifix',
      year: 1600,
      medium: 'Brass',
      dimensions: '27 cm (11 in) tall',
      artistId: artistIds['ancient-kongo'],
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Crucifix_MET_DT10263.jpg/800px-Crucifix_MET_DT10263.jpg',
      artworkType: 'sculpture',
    },

    // === OTHER AFRICAN MASTERPIECES ===
    {
      title: 'Seated Figure (Djenne)',
      slug: 'seated-figure-djenne',
      year: 1300,
      medium: 'Terracotta',
      dimensions: '25 cm (10 in) tall',
      artistId: artistIds['ancient-ife'], // Using Ife placeholder for Mali
      museumId: met?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Djenné_Terracotta_Archer.jpg/800px-Djenné_Terracotta_Archer.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Fang Reliquary Guardian (Byeri)',
      slug: 'fang-reliquary-guardian',
      year: 1850,
      medium: 'Wood, metal',
      dimensions: '64 cm (25 in) tall',
      artistId: artistIds['ancient-kongo'], // Using Kongo placeholder
      museumId: quaiBranlyId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fang_reliquary_figure.jpg/800px-Fang_reliquary_figure.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Dan Mask',
      slug: 'dan-mask-ivory-coast',
      year: 1900,
      medium: 'Wood',
      dimensions: '24 cm (9.5 in) tall',
      artistId: artistIds['ancient-kongo'], // Placeholder
      museumId: quaiBranlyId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dan_Mask.jpg/800px-Dan_Mask.jpg',
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
