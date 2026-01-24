const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Tate Modern Collection ===\n');

  // Get Tate Modern
  const tateModern = await prisma.museum.findFirst({
    where: { name: { contains: 'Tate Modern' } }
  });

  if (!tateModern) {
    console.log('ERROR: Tate Modern not found in database');
    return;
  }

  console.log(`Found: ${tateModern.name} (${tateModern.id})\n`);

  // Get existing artists
  const picasso = await prisma.artist.findFirst({ where: { slug: 'pablo-picasso' } });
  const dali = await prisma.artist.findFirst({ where: { slug: 'salvador-dali' } });
  const matisse = await prisma.artist.findFirst({ where: { slug: 'henri-matisse' } });
  const monet = await prisma.artist.findFirst({ where: { slug: 'claude-monet' } });
  const rothko = await prisma.artist.findFirst({ where: { slug: 'mark-rothko' } });
  const warhol = await prisma.artist.findFirst({ where: { slug: 'andy-warhol' } });
  const pollock = await prisma.artist.findFirst({ where: { slug: 'jackson-pollock' } });
  const mondrian = await prisma.artist.findFirst({ where: { slug: 'piet-mondrian' } });
  const bacon = await prisma.artist.findFirst({ where: { slug: 'francis-bacon' } });

  // Get or create Damien Hirst
  let hirstId;
  const existingHirst = await prisma.artist.findFirst({ where: { slug: 'damien-hirst' } });
  if (!existingHirst) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Damien Hirst',
        slug: 'damien-hirst',
        birthYear: 1965,
        nationality: 'British',
        updatedAt: new Date(),
      }
    });
    hirstId = artist.id;
    console.log('Created artist: Damien Hirst');
  } else {
    hirstId = existingHirst.id;
    console.log('Artist exists: Damien Hirst');
  }

  // Get or create Louise Bourgeois
  let bourgeoisId;
  const existingBourgeois = await prisma.artist.findFirst({ where: { slug: 'louise-bourgeois' } });
  if (!existingBourgeois) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Louise Bourgeois',
        slug: 'louise-bourgeois',
        birthYear: 1911,
        deathYear: 2010,
        nationality: 'French-American',
        updatedAt: new Date(),
      }
    });
    bourgeoisId = artist.id;
    console.log('Created artist: Louise Bourgeois');
  } else {
    bourgeoisId = existingBourgeois.id;
    console.log('Artist exists: Louise Bourgeois');
  }

  // Get or create Anish Kapoor
  let kapoorId;
  const existingKapoor = await prisma.artist.findFirst({ where: { slug: 'anish-kapoor' } });
  if (!existingKapoor) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Anish Kapoor',
        slug: 'anish-kapoor',
        birthYear: 1954,
        nationality: 'British-Indian',
        updatedAt: new Date(),
      }
    });
    kapoorId = artist.id;
    console.log('Created artist: Anish Kapoor');
  } else {
    kapoorId = existingKapoor.id;
    console.log('Artist exists: Anish Kapoor');
  }

  // Get or create Gerhard Richter
  let richterId;
  const existingRichter = await prisma.artist.findFirst({ where: { slug: 'gerhard-richter' } });
  if (!existingRichter) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Gerhard Richter',
        slug: 'gerhard-richter',
        birthYear: 1932,
        nationality: 'German',
        updatedAt: new Date(),
      }
    });
    richterId = artist.id;
    console.log('Created artist: Gerhard Richter');
  } else {
    richterId = existingRichter.id;
    console.log('Artist exists: Gerhard Richter');
  }

  // Get or create Cy Twombly
  let twomblyId;
  const existingTwombly = await prisma.artist.findFirst({ where: { slug: 'cy-twombly' } });
  if (!existingTwombly) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Cy Twombly',
        slug: 'cy-twombly',
        birthYear: 1928,
        deathYear: 2011,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    twomblyId = artist.id;
    console.log('Created artist: Cy Twombly');
  } else {
    twomblyId = existingTwombly.id;
    console.log('Artist exists: Cy Twombly');
  }

  // Get or create Joseph Beuys
  let beuysId;
  const existingBeuys = await prisma.artist.findFirst({ where: { slug: 'joseph-beuys' } });
  if (!existingBeuys) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Joseph Beuys',
        slug: 'joseph-beuys',
        birthYear: 1921,
        deathYear: 1986,
        nationality: 'German',
        updatedAt: new Date(),
      }
    });
    beuysId = artist.id;
    console.log('Created artist: Joseph Beuys');
  } else {
    beuysId = existingBeuys.id;
    console.log('Artist exists: Joseph Beuys');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === ROTHKO ROOM ===
    {
      title: 'Seagram Murals (Black on Maroon)',
      slug: 'seagram-murals-rothko',
      year: 1958,
      medium: 'Oil on canvas',
      dimensions: 'Nine canvases, various sizes',
      artistId: rothko?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Rothko_No_14.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Red on Maroon',
      slug: 'red-on-maroon-rothko-tate',
      year: 1959,
      medium: 'Oil on canvas',
      dimensions: '266.7 cm × 238.8 cm (105 × 94 in)',
      artistId: rothko?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0f/No._14%2C_1960_by_Mark_Rothko.jpg',
      artworkType: 'painting',
    },

    // === PICASSO ===
    {
      title: 'The Three Dancers',
      slug: 'three-dancers-picasso',
      year: 1925,
      medium: 'Oil on canvas',
      dimensions: '215.3 cm × 142.2 cm (84.8 × 56 in)',
      artistId: picasso?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Picasso_The_Three_Dancers.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Weeping Woman',
      slug: 'weeping-woman-picasso',
      year: 1937,
      medium: 'Oil on canvas',
      dimensions: '60 cm × 49 cm (23.6 × 19.3 in)',
      artistId: picasso?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg',
      artworkType: 'painting',
    },

    // === DALI ===
    {
      title: 'Metamorphosis of Narcissus',
      slug: 'metamorphosis-narcissus-dali',
      year: 1937,
      medium: 'Oil on canvas',
      dimensions: '51.1 cm × 78.1 cm (20.1 × 30.7 in)',
      artistId: dali?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/Metamorphosis_of_Narcissus.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Lobster Telephone',
      slug: 'lobster-telephone-dali',
      year: 1936,
      medium: 'Plastic, painted plaster, mixed media',
      dimensions: '18 cm × 30 cm × 17 cm',
      artistId: dali?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Lobster_Telephone.jpg',
      artworkType: 'sculpture',
    },

    // === MATISSE ===
    {
      title: 'The Snail',
      slug: 'snail-matisse',
      year: 1953,
      medium: 'Gouache on paper, cut and pasted',
      dimensions: '286 cm × 287 cm (112.6 × 113 in)',
      artistId: matisse?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Matisse_-_The_Snail.jpg',
      artworkType: 'painting',
    },

    // === MONET ===
    {
      title: 'Water-Lilies (Tate)',
      slug: 'water-lilies-tate-monet',
      year: 1916,
      medium: 'Oil on canvas',
      dimensions: '200.5 cm × 201 cm (78.9 × 79.1 in)',
      artistId: monet?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Monet_-_Wildenstein_1996%2C_1799.png/800px-Monet_-_Wildenstein_1996%2C_1799.png',
      artworkType: 'painting',
    },

    // === MONDRIAN ===
    {
      title: 'Composition with Yellow, Blue and Red',
      slug: 'composition-yellow-blue-red-mondrian',
      year: 1937,
      medium: 'Oil on canvas',
      dimensions: '72.5 cm × 69 cm (28.5 × 27.2 in)',
      artistId: mondrian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1921_-_Composition_en_rouge%2C_jaune%2C_bleu_et_noir.jpg/800px-Piet_Mondriaan%2C_1921_-_Composition_en_rouge%2C_jaune%2C_bleu_et_noir.jpg',
      artworkType: 'painting',
    },

    // === CONTEMPORARY ICONS ===
    {
      title: 'Maman',
      slug: 'maman-bourgeois',
      year: 1999,
      medium: 'Bronze, stainless steel, marble',
      dimensions: '927 cm × 891 cm × 1024 cm (30.4 × 29.2 × 33.6 ft)',
      artistId: bourgeoisId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Maman_at_Tate_Modern.jpg/800px-Maman_at_Tate_Modern.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'The Physical Impossibility of Death in the Mind of Someone Living',
      slug: 'shark-formaldehyde-hirst',
      year: 1991,
      medium: 'Tiger shark, glass, steel, formaldehyde',
      dimensions: '213 cm × 518 cm × 213 cm',
      artistId: hirstId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Hirst-Shark.jpg',
      artworkType: 'sculpture',
    },

    // === ABSTRACT EXPRESSIONISM ===
    {
      title: 'Summertime: Number 9A',
      slug: 'summertime-9a-pollock',
      year: 1948,
      medium: 'Oil and enamel on canvas',
      dimensions: '84.8 cm × 555 cm (33.4 × 218.5 in)',
      artistId: pollock?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/Summertime-number-9a.jpg',
      artworkType: 'painting',
    },

    // === GERMAN ART ===
    {
      title: 'Cage (1-6)',
      slug: 'cage-paintings-richter',
      year: 2006,
      medium: 'Oil on canvas',
      dimensions: 'Six paintings, each 290 cm × 290 cm',
      artistId: richterId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Richter_Cage_%28series%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Lightning with Stag in its Glare',
      slug: 'lightning-stag-beuys',
      year: 1985,
      medium: 'Bronze, aluminum, environment',
      dimensions: 'Installation, variable dimensions',
      artistId: beuysId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Beuys_Lightning.jpg',
      artworkType: 'sculpture',
    },

    // === CY TWOMBLY ===
    {
      title: 'Quattro Stagioni (Four Seasons)',
      slug: 'quattro-stagioni-twombly',
      year: 1995,
      medium: 'Acrylic and pencil on canvas',
      dimensions: 'Four paintings, each 314 cm × 215 cm',
      artistId: twomblyId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cy_Twombly_Four_Seasons.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Untitled (Bacchus)',
      slug: 'untitled-bacchus-twombly',
      year: 2005,
      medium: 'Acrylic on canvas',
      dimensions: '317.5 cm × 468.6 cm',
      artistId: twomblyId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Twombly_Bacchus.jpg',
      artworkType: 'painting',
    },

    // === WARHOL ===
    {
      title: 'Marilyn Diptych',
      slug: 'marilyn-diptych-warhol',
      year: 1962,
      medium: 'Acrylic and silkscreen on canvas',
      dimensions: '205.4 cm × 289.6 cm (80.9 × 114 in)',
      artistId: warhol?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Marilyndiptych.jpg',
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
        museumId: tateModern.id,
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
    where: { museumId: tateModern.id }
  });
  console.log(`\nTate Modern total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
