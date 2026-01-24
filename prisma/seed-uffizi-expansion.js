const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Uffizi Collection ===\n');

  // Get the Uffizi
  const uffizi = await prisma.museum.findFirst({
    where: { slug: 'uffizi-gallery-florence-italy' }
  });

  if (!uffizi) {
    console.log('ERROR: Uffizi not found in database');
    return;
  }

  console.log(`Found: ${uffizi.name} (${uffizi.id})\n`);

  // Get existing artists
  const botticelli = await prisma.artist.findFirst({ where: { slug: 'sandro-botticelli' } });
  const leonardo = await prisma.artist.findFirst({ where: { slug: 'leonardo-da-vinci' } });
  const michelangelo = await prisma.artist.findFirst({ where: { slug: 'michelangelo' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });
  const titian = await prisma.artist.findFirst({ where: { slug: 'titian' } });
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const giotto = await prisma.artist.findFirst({ where: { slug: 'giotto' } });
  const durer = await prisma.artist.findFirst({ where: { slug: 'albrecht-durer' } });

  // Get or create Piero della Francesca
  let pieroId;
  const existingPiero = await prisma.artist.findFirst({ where: { slug: 'piero-della-francesca' } });
  if (!existingPiero) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Piero della Francesca',
        slug: 'piero-della-francesca',
        birthYear: 1415,
        deathYear: 1492,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    pieroId = artist.id;
    console.log('Created artist: Piero della Francesca');
  } else {
    pieroId = existingPiero.id;
    console.log('Artist exists: Piero della Francesca');
  }

  // Get or create Gentile da Fabriano
  let gentileId;
  const existingGentile = await prisma.artist.findFirst({ where: { slug: 'gentile-da-fabriano' } });
  if (!existingGentile) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Gentile da Fabriano',
        slug: 'gentile-da-fabriano',
        birthYear: 1370,
        deathYear: 1427,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    gentileId = artist.id;
    console.log('Created artist: Gentile da Fabriano');
  } else {
    gentileId = existingGentile.id;
    console.log('Artist exists: Gentile da Fabriano');
  }

  // Get or create Cimabue
  let cimabueId;
  const existingCimabue = await prisma.artist.findFirst({ where: { slug: 'cimabue' } });
  if (!existingCimabue) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Cimabue',
        slug: 'cimabue',
        birthYear: 1240,
        deathYear: 1302,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    cimabueId = artist.id;
    console.log('Created artist: Cimabue');
  } else {
    cimabueId = existingCimabue.id;
    console.log('Artist exists: Cimabue');
  }

  // Get or create Duccio di Buoninsegna
  let duccioId;
  const existingDuccio = await prisma.artist.findFirst({ where: { slug: 'duccio-di-buoninsegna' } });
  if (!existingDuccio) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Duccio di Buoninsegna',
        slug: 'duccio-di-buoninsegna',
        birthYear: 1255,
        deathYear: 1319,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    duccioId = artist.id;
    console.log('Created artist: Duccio di Buoninsegna');
  } else {
    duccioId = existingDuccio.id;
    console.log('Artist exists: Duccio di Buoninsegna');
  }

  // Get or create Paolo Uccello
  let uccelloId;
  const existingUccello = await prisma.artist.findFirst({ where: { slug: 'paolo-uccello' } });
  if (!existingUccello) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Paolo Uccello',
        slug: 'paolo-uccello',
        birthYear: 1397,
        deathYear: 1475,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    uccelloId = artist.id;
    console.log('Created artist: Paolo Uccello');
  } else {
    uccelloId = existingUccello.id;
    console.log('Artist exists: Paolo Uccello');
  }

  // Get or create Filippo Lippi
  let lippiId;
  const existingLippi = await prisma.artist.findFirst({ where: { slug: 'filippo-lippi' } });
  if (!existingLippi) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Filippo Lippi',
        slug: 'filippo-lippi',
        birthYear: 1406,
        deathYear: 1469,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    lippiId = artist.id;
    console.log('Created artist: Filippo Lippi');
  } else {
    lippiId = existingLippi.id;
    console.log('Artist exists: Filippo Lippi');
  }

  // Get or create Antonio del Pollaiuolo
  let pollaiuoloId;
  const existingPollaiuolo = await prisma.artist.findFirst({ where: { slug: 'antonio-del-pollaiuolo' } });
  if (!existingPollaiuolo) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Antonio del Pollaiuolo',
        slug: 'antonio-del-pollaiuolo',
        birthYear: 1429,
        deathYear: 1498,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    pollaiuoloId = artist.id;
    console.log('Created artist: Antonio del Pollaiuolo');
  } else {
    pollaiuoloId = existingPollaiuolo.id;
    console.log('Artist exists: Antonio del Pollaiuolo');
  }

  // Get or create Andrea del Verrocchio
  let verrocchioId;
  const existingVerrocchio = await prisma.artist.findFirst({ where: { slug: 'andrea-del-verrocchio' } });
  if (!existingVerrocchio) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Andrea del Verrocchio',
        slug: 'andrea-del-verrocchio',
        birthYear: 1435,
        deathYear: 1488,
        nationality: 'Italian',
        updatedAt: new Date(),
      }
    });
    verrocchioId = artist.id;
    console.log('Created artist: Andrea del Verrocchio');
  } else {
    verrocchioId = existingVerrocchio.id;
    console.log('Artist exists: Andrea del Verrocchio');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === BOTTICELLI ===
    {
      title: 'Primavera',
      slug: 'primavera-botticelli',
      year: 1482,
      medium: 'Tempera on panel',
      dimensions: '202 cm × 314 cm (80 × 124 in)',
      artistId: botticelli?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/800px-Botticelli-primavera.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Pallas and the Centaur',
      slug: 'pallas-centaur-botticelli',
      year: 1482,
      medium: 'Tempera on canvas',
      dimensions: '207 cm × 148 cm (81.5 × 58.3 in)',
      artistId: botticelli?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sandro_Botticelli_-_Pallas_and_the_Centaur_-_Google_Art_Project.jpg/800px-Sandro_Botticelli_-_Pallas_and_the_Centaur_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Adoration of the Magi',
      slug: 'adoration-magi-botticelli',
      year: 1475,
      medium: 'Tempera on panel',
      dimensions: '111 cm × 134 cm (43.7 × 52.8 in)',
      artistId: botticelli?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Adorazione_dei_magi%2C_botticelli_%28uffizi%29.jpg/800px-Adorazione_dei_magi%2C_botticelli_%28uffizi%29.jpg',
      artworkType: 'painting',
    },

    // === LEONARDO ===
    {
      title: 'Annunciation',
      slug: 'annunciation-leonardo-uffizi',
      year: 1475,
      medium: 'Oil and tempera on panel',
      dimensions: '98 cm × 217 cm (38.6 × 85.4 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Leonardo_da_Vinci_-_Annunciazione_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Annunciazione_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Adoration of the Magi (Unfinished)',
      slug: 'adoration-magi-leonardo',
      year: 1481,
      medium: 'Oil on panel',
      dimensions: '246 cm × 243 cm (96.9 × 95.7 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === MICHELANGELO ===
    {
      title: 'Doni Tondo (Holy Family)',
      slug: 'doni-tondo-michelangelo',
      year: 1507,
      medium: 'Tempera on panel',
      dimensions: '120 cm diameter (47.2 in)',
      artistId: michelangelo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Michelangelo_Buonarroti_-_Tondo_Doni_-_Google_Art_Project.jpg/800px-Michelangelo_Buonarroti_-_Tondo_Doni_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === RAPHAEL ===
    {
      title: 'Madonna of the Goldfinch',
      slug: 'madonna-goldfinch-raphael',
      year: 1506,
      medium: 'Oil on panel',
      dimensions: '107 cm × 77 cm (42.1 × 30.3 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg/800px-Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Portrait of Pope Leo X with Cardinals',
      slug: 'portrait-leo-x-raphael',
      year: 1519,
      medium: 'Oil on panel',
      dimensions: '155.5 cm × 119.5 cm (61.2 × 47 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Raffaello_Sanzio_-_Portrait_of_Pope_Leo_X_and_his_cousins_cardinals_Giulio_de%27_Medici_and_Luigi_de%27_Rossi.jpg/800px-Raffaello_Sanzio_-_Portrait_of_Pope_Leo_X_and_his_cousins_cardinals_Giulio_de%27_Medici_and_Luigi_de%27_Rossi.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Self-Portrait',
      slug: 'self-portrait-raphael-uffizi',
      year: 1506,
      medium: 'Oil on panel',
      dimensions: '47.5 cm × 33 cm (18.7 × 13 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/800px-Raffaello_Sanzio.jpg',
      artworkType: 'painting',
    },

    // === TITIAN ===
    {
      title: 'Venus of Urbino',
      slug: 'venus-of-urbino-titian',
      year: 1538,
      medium: 'Oil on canvas',
      dimensions: '119 cm × 165 cm (46.9 × 65 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/800px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Flora',
      slug: 'flora-titian',
      year: 1515,
      medium: 'Oil on canvas',
      dimensions: '79 cm × 63 cm (31.1 × 24.8 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tiziano_-_Flora_-_Google_Art_Project.jpg/800px-Tiziano_-_Flora_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === CARAVAGGIO ===
    {
      title: 'Medusa',
      slug: 'medusa-caravaggio',
      year: 1598,
      medium: 'Oil on canvas mounted on wood',
      dimensions: '60 cm × 55 cm (23.6 × 21.7 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Medusa_by_Caravaggio.jpg/800px-Medusa_by_Caravaggio.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Bacchus',
      slug: 'bacchus-caravaggio',
      year: 1598,
      medium: 'Oil on canvas',
      dimensions: '95 cm × 85 cm (37.4 × 33.5 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baco%2C_por_Caravaggio.jpg/800px-Baco%2C_por_Caravaggio.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Sacrifice of Isaac',
      slug: 'sacrifice-isaac-caravaggio',
      year: 1603,
      medium: 'Oil on canvas',
      dimensions: '104 cm × 135 cm (40.9 × 53.1 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg/800px-Sacrifice_of_Isaac-Caravaggio_%28Uffizi%29.jpg',
      artworkType: 'painting',
    },

    // === PIERO DELLA FRANCESCA ===
    {
      title: 'Portraits of Federico da Montefeltro and Battista Sforza',
      slug: 'portraits-montefeltro-sforza-piero',
      year: 1472,
      medium: 'Tempera on panel',
      dimensions: '47 cm × 33 cm each (18.5 × 13 in)',
      artistId: pieroId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Piero_della_Francesca_044.jpg/800px-Piero_della_Francesca_044.jpg',
      artworkType: 'painting',
    },

    // === GENTILE DA FABRIANO ===
    {
      title: 'Adoration of the Magi',
      slug: 'adoration-magi-gentile',
      year: 1423,
      medium: 'Tempera on panel',
      dimensions: '303 cm × 282 cm (119.3 × 111 in)',
      artistId: gentileId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gentile_da_Fabriano_001.jpg/800px-Gentile_da_Fabriano_001.jpg',
      artworkType: 'painting',
    },

    // === EARLY MASTERS ===
    {
      title: 'Ognissanti Madonna',
      slug: 'ognissanti-madonna-giotto',
      year: 1310,
      medium: 'Tempera on panel',
      dimensions: '325 cm × 204 cm (128 × 80.3 in)',
      artistId: giotto?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/GiottoMadonna.jpg/800px-GiottoMadonna.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Santa Trinita Maestà',
      slug: 'santa-trinita-maesta-cimabue',
      year: 1290,
      medium: 'Tempera on panel',
      dimensions: '385 cm × 223 cm (151.6 × 87.8 in)',
      artistId: cimabueId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cimabue_-_Maest%C3%A0_di_Santa_Trinita_-_Google_Art_Project.jpg/800px-Cimabue_-_Maest%C3%A0_di_Santa_Trinita_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Rucellai Madonna',
      slug: 'rucellai-madonna-duccio',
      year: 1285,
      medium: 'Tempera on panel',
      dimensions: '450 cm × 290 cm (177.2 × 114.2 in)',
      artistId: duccioId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Duccio_The-Madonna-and-Child-128.jpg/800px-Duccio_The-Madonna-and-Child-128.jpg',
      artworkType: 'painting',
    },

    // === PAOLO UCCELLO ===
    {
      title: 'Battle of San Romano',
      slug: 'battle-san-romano-uccello',
      year: 1438,
      medium: 'Tempera on panel',
      dimensions: '182 cm × 320 cm (71.7 × 126 in)',
      artistId: uccelloId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/San_Romano_Battle_%28Paolo_Uccello%2C_Uffizi%29_01.jpg/800px-San_Romano_Battle_%28Paolo_Uccello%2C_Uffizi%29_01.jpg',
      artworkType: 'painting',
    },

    // === FILIPPO LIPPI ===
    {
      title: 'Madonna with Child and Two Angels',
      slug: 'madonna-child-angels-lippi',
      year: 1465,
      medium: 'Tempera on panel',
      dimensions: '92 cm × 63 cm (36.2 × 24.8 in)',
      artistId: lippiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Filippo_Lippi_-_Madonna_col_Bambino_e_due_angeli_-_Google_Art_Project.jpg/800px-Filippo_Lippi_-_Madonna_col_Bambino_e_due_angeli_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === POLLAIUOLO ===
    {
      title: 'Portrait of a Woman',
      slug: 'portrait-woman-pollaiuolo',
      year: 1475,
      medium: 'Tempera on panel',
      dimensions: '55 cm × 34 cm (21.7 × 13.4 in)',
      artistId: pollaiuoloId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Antonio_del_Pollaiuolo_-_Ritratto_di_dama_-_Google_Art_Project.jpg/800px-Antonio_del_Pollaiuolo_-_Ritratto_di_dama_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },

    // === VERROCCHIO ===
    {
      title: 'Baptism of Christ',
      slug: 'baptism-christ-verrocchio',
      year: 1475,
      medium: 'Oil and tempera on panel',
      dimensions: '177 cm × 151 cm (69.7 × 59.4 in)',
      artistId: verrocchioId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg/800px-Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg',
      artworkType: 'painting',
    },

    // === DÜRER ===
    {
      title: 'Adoration of the Magi',
      slug: 'adoration-magi-durer',
      year: 1504,
      medium: 'Oil on panel',
      dimensions: '99 cm × 113.5 cm (39 × 44.7 in)',
      artistId: durer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Albrecht_D%C3%BCrer_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg',
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
        museumId: uffizi.id,
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
    where: { museumId: uffizi.id }
  });
  console.log(`\nUffizi total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
