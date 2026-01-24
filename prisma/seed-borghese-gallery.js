const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Borghese Gallery Collection ===\n');

  // Get the Borghese Gallery
  const borghese = await prisma.museum.findFirst({
    where: { name: { contains: 'Borghese' } }
  });

  if (!borghese) {
    console.log('ERROR: Borghese Gallery not found in database');
    return;
  }

  console.log(`Found: ${borghese.name} (${borghese.id})\n`);

  // Get or create Bernini
  let berniniId;
  const existingBernini = await prisma.artist.findFirst({ where: { slug: 'gian-lorenzo-bernini' } });
  if (!existingBernini) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Gian Lorenzo Bernini',
        slug: 'gian-lorenzo-bernini',
        birthYear: 1598,
        deathYear: 1680,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    berniniId = artist.id;
    console.log('Created artist: Gian Lorenzo Bernini');
  } else {
    berniniId = existingBernini.id;
    console.log('Artist exists: Gian Lorenzo Bernini');
  }

  // Get or create Antonio Canova
  let canovaId;
  const existingCanova = await prisma.artist.findFirst({ where: { slug: 'antonio-canova' } });
  if (!existingCanova) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Antonio Canova',
        slug: 'antonio-canova',
        birthYear: 1757,
        deathYear: 1822,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    canovaId = artist.id;
    console.log('Created artist: Antonio Canova');
  } else {
    canovaId = existingCanova.id;
    console.log('Artist exists: Antonio Canova');
  }

  // Get existing artists
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });
  const titian = await prisma.artist.findFirst({ where: { slug: 'titian' } });
  const correggio = await prisma.artist.findFirst({ where: { slug: 'correggio' } });

  // Get or create Domenichino
  let domenichinold;
  const existingDomenichino = await prisma.artist.findFirst({ where: { slug: 'domenichino' } });
  if (!existingDomenichino) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Domenichino',
        slug: 'domenichino',
        birthYear: 1581,
        deathYear: 1641,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    domenichinold = artist.id;
    console.log('Created artist: Domenichino');
  } else {
    domenichinold = existingDomenichino.id;
    console.log('Artist exists: Domenichino');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === BERNINI SCULPTURES ===
    {
      title: 'Apollo and Daphne',
      slug: 'apollo-daphne-bernini',
      year: 1625,
      medium: 'Carrara marble',
      dimensions: '243 cm (8 ft) tall',
      artistId: berniniId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Apollo_and_Daphne_%28Bernini%29_%28cropped%29.jpg/800px-Apollo_and_Daphne_%28Bernini%29_%28cropped%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'The Rape of Proserpina',
      slug: 'rape-of-proserpina-bernini',
      year: 1622,
      medium: 'Carrara marble',
      dimensions: '255 cm (8.4 ft) tall',
      artistId: berniniId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/The_Rape_of_Proserpina_%28Rome%29.jpg/800px-The_Rape_of_Proserpina_%28Rome%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'David',
      slug: 'david-bernini',
      year: 1624,
      medium: 'Carrara marble',
      dimensions: '170 cm (5.6 ft) tall',
      artistId: berniniId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/David_Bernini_1623-1624.jpg/800px-David_Bernini_1623-1624.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Aeneas, Anchises, and Ascanius',
      slug: 'aeneas-anchises-bernini',
      year: 1619,
      medium: 'Carrara marble',
      dimensions: '220 cm (7.2 ft) tall',
      artistId: berniniId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Aeneas_Anchises_and_Ascanius.jpg/800px-Aeneas_Anchises_and_Ascanius.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Truth Unveiled by Time',
      slug: 'truth-unveiled-time-bernini',
      year: 1652,
      medium: 'Carrara marble',
      dimensions: '280 cm (9.2 ft) tall',
      artistId: berniniId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gian_Lorenzo_Bernini_-_La_V%C3%A9rit%C3%A9_d%C3%A9voil%C3%A9e_par_le_Temps.jpg/800px-Gian_Lorenzo_Bernini_-_La_V%C3%A9rit%C3%A9_d%C3%A9voil%C3%A9e_par_le_Temps.jpg',
      artworkType: 'sculpture',
    },

    // === CANOVA ===
    {
      title: 'Pauline Bonaparte as Venus Victrix',
      slug: 'pauline-bonaparte-venus-canova',
      year: 1808,
      medium: 'Carrara marble',
      dimensions: '160 cm × 192 cm (63 × 76 in)',
      artistId: canovaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Antonio_Canova_-_Pauline_Borghese_as_Venus_Victrix_-_WGA4041.jpg/800px-Antonio_Canova_-_Pauline_Borghese_as_Venus_Victrix_-_WGA4041.jpg',
      artworkType: 'sculpture',
    },

    // === CARAVAGGIO PAINTINGS ===
    {
      title: 'Boy with a Basket of Fruit',
      slug: 'boy-basket-fruit-caravaggio',
      year: 1593,
      medium: 'Oil on canvas',
      dimensions: '70 cm × 67 cm (28 × 26 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Caravaggio_-_Ragazzo_con_canestro_di_frutta.jpg/800px-Caravaggio_-_Ragazzo_con_canestro_di_frutta.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Sick Bacchus (Self-Portrait as Bacchus)',
      slug: 'sick-bacchus-caravaggio',
      year: 1593,
      medium: 'Oil on canvas',
      dimensions: '67 cm × 53 cm (26 × 21 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sick_Bacchus_by_Caravaggio.jpg/800px-Sick_Bacchus_by_Caravaggio.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Saint Jerome Writing',
      slug: 'saint-jerome-writing-caravaggio',
      year: 1606,
      medium: 'Oil on canvas',
      dimensions: '112 cm × 157 cm (44 × 62 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg/800px-Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'David with the Head of Goliath',
      slug: 'david-head-goliath-caravaggio',
      year: 1610,
      medium: 'Oil on canvas',
      dimensions: '125 cm × 101 cm (49 × 40 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Caravaggio_-_David_con_la_testa_di_Golia.jpg/800px-Caravaggio_-_David_con_la_testa_di_Golia.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Madonna of the Palafrenieri (Madonna and Child with St. Anne)',
      slug: 'madonna-palafrenieri-caravaggio',
      year: 1606,
      medium: 'Oil on canvas',
      dimensions: '292 cm × 211 cm (115 × 83 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Caravaggio_-_Madonna_dei_Palafrenieri.jpg/800px-Caravaggio_-_Madonna_dei_Palafrenieri.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Saint John the Baptist',
      slug: 'saint-john-baptist-caravaggio-borghese',
      year: 1610,
      medium: 'Oil on canvas',
      dimensions: '159 cm × 124 cm (63 × 49 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Caravaggio_Baptist_Galleria_Borghese.jpg/800px-Caravaggio_Baptist_Galleria_Borghese.jpg',
      artworkType: 'painting',
    },

    // === RAPHAEL ===
    {
      title: 'The Deposition (Borghese Entombment)',
      slug: 'deposition-raphael-borghese',
      year: 1507,
      medium: 'Oil on panel',
      dimensions: '184 cm × 176 cm (72 × 69 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Deposizione_di_Cristo_%28Raffaello%29.jpg/800px-Deposizione_di_Cristo_%28Raffaello%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Lady with a Unicorn',
      slug: 'lady-with-unicorn-raphael',
      year: 1506,
      medium: 'Oil on panel',
      dimensions: '65 cm × 51 cm (26 × 20 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Raffaello%2C_dama_col_liocorno%2C_01.jpg/800px-Raffaello%2C_dama_col_liocorno%2C_01.jpg',
      artworkType: 'painting',
    },

    // === TITIAN ===
    {
      title: 'Sacred and Profane Love',
      slug: 'sacred-profane-love-titian',
      year: 1514,
      medium: 'Oil on canvas',
      dimensions: '118 cm × 279 cm (46 × 110 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Titian_-_Sacred_and_Profane_Love_-_Google_Art_Project.jpg/800px-Titian_-_Sacred_and_Profane_Love_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === CORREGGIO ===
    {
      title: 'Danaë',
      slug: 'danae-correggio',
      year: 1531,
      medium: 'Oil on canvas',
      dimensions: '161 cm × 193 cm (63 × 76 in)',
      artistId: correggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Danae_by_Correggio.jpg/800px-Danae_by_Correggio.jpg',
      artworkType: 'painting',
    },

    // === DOMENICHINO ===
    {
      title: 'The Hunt of Diana',
      slug: 'hunt-of-diana-domenichino',
      year: 1617,
      medium: 'Oil on canvas',
      dimensions: '225 cm × 320 cm (89 × 126 in)',
      artistId: domenichinold,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Domenichino_-_La_caccia_di_Diana_%28Galleria_Borghese%29.jpg/800px-Domenichino_-_La_caccia_di_Diana_%28Galleria_Borghese%29.jpg',
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
        museumId: borghese.id,
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
    where: { museumId: borghese.id }
  });
  console.log(`\nBorghese Gallery total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
