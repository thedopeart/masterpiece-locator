const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Prado Collection ===\n');

  // Get the Prado
  const prado = await prisma.museum.findFirst({
    where: { slug: 'museo-del-prado-madrid-spain' }
  });

  if (!prado) {
    console.log('ERROR: Prado not found in database');
    return;
  }

  console.log(`Found: ${prado.name} (${prado.id})\n`);

  // Get existing artists
  const velazquez = await prisma.artist.findFirst({ where: { slug: 'diego-velazquez' } });
  const goya = await prisma.artist.findFirst({ where: { slug: 'francisco-goya' } });
  const elGreco = await prisma.artist.findFirst({ where: { slug: 'el-greco' } });
  const bosch = await prisma.artist.findFirst({ where: { slug: 'hieronymus-bosch' } });
  const titian = await prisma.artist.findFirst({ where: { slug: 'titian' } });
  const rubens = await prisma.artist.findFirst({ where: { slug: 'peter-paul-rubens' } });
  const durer = await prisma.artist.findFirst({ where: { slug: 'albrecht-durer' } });
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });
  const rembrandt = await prisma.artist.findFirst({ where: { slug: 'rembrandt' } });

  // Get or create Rogier van der Weyden
  let weydenId;
  const existingWeyden = await prisma.artist.findFirst({ where: { slug: 'rogier-van-der-weyden' } });
  if (!existingWeyden) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Rogier van der Weyden',
        slug: 'rogier-van-der-weyden',
        birthYear: 1400,
        deathYear: 1464,
        nationality: 'Flemish',
        updatedAt: new Date(),
      }
    });
    weydenId = artist.id;
    console.log('Created artist: Rogier van der Weyden');
  } else {
    weydenId = existingWeyden.id;
    console.log('Artist exists: Rogier van der Weyden');
  }

  // Get or create Bartolomé Esteban Murillo
  let murilloId;
  const existingMurillo = await prisma.artist.findFirst({ where: { slug: 'bartolome-esteban-murillo' } });
  if (!existingMurillo) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Bartolomé Esteban Murillo',
        slug: 'bartolome-esteban-murillo',
        birthYear: 1617,
        deathYear: 1682,
        nationality: 'Spanish',
        updatedAt: new Date(),
      }
    });
    murilloId = artist.id;
    console.log('Created artist: Bartolomé Esteban Murillo');
  } else {
    murilloId = existingMurillo.id;
    console.log('Artist exists: Bartolomé Esteban Murillo');
  }

  // Get or create José de Ribera
  let riberaId;
  const existingRibera = await prisma.artist.findFirst({ where: { slug: 'jose-de-ribera' } });
  if (!existingRibera) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'José de Ribera',
        slug: 'jose-de-ribera',
        birthYear: 1591,
        deathYear: 1652,
        nationality: 'Spanish',
        updatedAt: new Date(),
      }
    });
    riberaId = artist.id;
    console.log('Created artist: José de Ribera');
  } else {
    riberaId = existingRibera.id;
    console.log('Artist exists: José de Ribera');
  }

  // Get or create Francisco de Zurbarán
  let zurbaranId;
  const existingZurbaran = await prisma.artist.findFirst({ where: { slug: 'francisco-de-zurbaran' } });
  if (!existingZurbaran) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Francisco de Zurbarán',
        slug: 'francisco-de-zurbaran',
        birthYear: 1598,
        deathYear: 1664,
        nationality: 'Spanish',
        updatedAt: new Date(),
      }
    });
    zurbaranId = artist.id;
    console.log('Created artist: Francisco de Zurbarán');
  } else {
    zurbaranId = existingZurbaran.id;
    console.log('Artist exists: Francisco de Zurbarán');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === VELÁZQUEZ MASTERPIECES ===
    {
      title: 'Las Meninas',
      slug: 'las-meninas-velazquez',
      year: 1656,
      medium: 'Oil on canvas',
      dimensions: '318 cm × 276 cm (125.2 × 108.7 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Surrender of Breda',
      slug: 'surrender-of-breda-velazquez',
      year: 1635,
      medium: 'Oil on canvas',
      dimensions: '307 cm × 367 cm (120.9 × 144.5 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Velazquez-The_Surrender_of_Breda.jpg/800px-Velazquez-The_Surrender_of_Breda.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Spinners (Las Hilanderas)',
      slug: 'spinners-velazquez',
      year: 1657,
      medium: 'Oil on canvas',
      dimensions: '220 cm × 289 cm (86.6 × 113.8 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Las_Hilanderas_%28the_Spinners%29%2C_1657_%28Diego_Vel%C3%A1zquez%29.jpg/800px-Las_Hilanderas_%28the_Spinners%29%2C_1657_%28Diego_Vel%C3%A1zquez%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Triumph of Bacchus (Los Borrachos)',
      slug: 'triumph-of-bacchus-velazquez',
      year: 1629,
      medium: 'Oil on canvas',
      dimensions: '165 cm × 225 cm (65 × 88.6 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Diego_Vel%C3%A1zquez_-_The_Triumph_of_Bacchus_-_Google_Art_Project.jpg/800px-Diego_Vel%C3%A1zquez_-_The_Triumph_of_Bacchus_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Christ Crucified',
      slug: 'christ-crucified-velazquez',
      year: 1632,
      medium: 'Oil on canvas',
      dimensions: '248 cm × 169 cm (97.6 × 66.5 in)',
      artistId: velazquez?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Vel%C3%A1zquez_-_Cristo_Crucificado.jpg/800px-Vel%C3%A1zquez_-_Cristo_Crucificado.jpg',
      artworkType: 'painting',
    },

    // === GOYA MASTERPIECES ===
    {
      title: 'The Third of May 1808',
      slug: 'third-of-may-goya',
      year: 1814,
      medium: 'Oil on canvas',
      dimensions: '268 cm × 347 cm (105.5 × 136.6 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/800px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Second of May 1808',
      slug: 'second-of-may-goya',
      year: 1814,
      medium: 'Oil on canvas',
      dimensions: '268 cm × 347 cm (105.5 × 136.6 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Francisco_de_Goya_-_El_dos_de_mayo_de_1808_en_Madrid.jpg/800px-Francisco_de_Goya_-_El_dos_de_mayo_de_1808_en_Madrid.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Saturn Devouring His Son',
      slug: 'saturn-devouring-son-goya',
      year: 1823,
      medium: 'Oil mural transferred to canvas',
      dimensions: '143 cm × 81 cm (56.3 × 31.9 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/800px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Naked Maja',
      slug: 'naked-maja-goya',
      year: 1800,
      medium: 'Oil on canvas',
      dimensions: '97 cm × 190 cm (38.2 × 74.8 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Goya_Maja_nue.jpg/800px-Goya_Maja_nue.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Clothed Maja',
      slug: 'clothed-maja-goya',
      year: 1800,
      medium: 'Oil on canvas',
      dimensions: '95 cm × 190 cm (37.4 × 74.8 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Goya_Maja_ubran%C3%A1.jpg/800px-Goya_Maja_ubran%C3%A1.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Family of Charles IV',
      slug: 'family-charles-iv-goya',
      year: 1801,
      medium: 'Oil on canvas',
      dimensions: '280 cm × 336 cm (110.2 × 132.3 in)',
      artistId: goya?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/La_familia_de_Carlos_IV%2C_by_Francisco_de_Goya.jpg/800px-La_familia_de_Carlos_IV%2C_by_Francisco_de_Goya.jpg',
      artworkType: 'painting',
    },

    // === EL GRECO ===
    {
      title: 'The Nobleman with his Hand on his Chest',
      slug: 'nobleman-hand-chest-el-greco',
      year: 1580,
      medium: 'Oil on canvas',
      dimensions: '81 cm × 66 cm (31.9 × 26 in)',
      artistId: elGreco?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/El_caballero_de_la_mano_en_el_pecho.jpg/800px-El_caballero_de_la_mano_en_el_pecho.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Annunciation',
      slug: 'annunciation-el-greco-prado',
      year: 1600,
      medium: 'Oil on canvas',
      dimensions: '315 cm × 174 cm (124 × 68.5 in)',
      artistId: elGreco?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/El_Greco_-_The_Annunciation_-_WGA10552.jpg/800px-El_Greco_-_The_Annunciation_-_WGA10552.jpg',
      artworkType: 'painting',
    },

    // === BOSCH ===
    {
      title: 'The Haywain Triptych',
      slug: 'haywain-triptych-bosch',
      year: 1516,
      medium: 'Oil on oak panels',
      dimensions: '147 cm × 212 cm (57.9 × 83.5 in) opened',
      artistId: bosch?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/The_Haywain_by_Hieronymus_Bosch.jpg/800px-The_Haywain_by_Hieronymus_Bosch.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Table of the Seven Deadly Sins',
      slug: 'seven-deadly-sins-bosch',
      year: 1505,
      medium: 'Oil on wood',
      dimensions: '120 cm × 150 cm (47.2 × 59.1 in)',
      artistId: bosch?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hieronymus_Bosch-_The_Seven_Deadly_Sins_and_the_Four_Last_Things.jpg/800px-Hieronymus_Bosch-_The_Seven_Deadly_Sins_and_the_Four_Last_Things.jpg',
      artworkType: 'painting',
    },

    // === TITIAN ===
    {
      title: 'Equestrian Portrait of Charles V',
      slug: 'equestrian-charles-v-titian',
      year: 1548,
      medium: 'Oil on canvas',
      dimensions: '332 cm × 279 cm (130.7 × 109.8 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Titian_-_Emperor_Charles_V_at_M%C3%BChlberg_-_Google_Art_Project.jpg/800px-Titian_-_Emperor_Charles_V_at_M%C3%BChlberg_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Venus with an Organist and Cupid',
      slug: 'venus-organist-cupid-titian',
      year: 1555,
      medium: 'Oil on canvas',
      dimensions: '148 cm × 217 cm (58.3 × 85.4 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Venus_with_an_Organist_and_Cupid_-_Titian.jpg/800px-Venus_with_an_Organist_and_Cupid_-_Titian.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Danaë',
      slug: 'danae-titian-prado',
      year: 1553,
      medium: 'Oil on canvas',
      dimensions: '129 cm × 180 cm (50.8 × 70.9 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tiziano_-_Danae_receiving_the_Golden_Rain_-_Prado.jpg/800px-Tiziano_-_Danae_receiving_the_Golden_Rain_-_Prado.jpg',
      artworkType: 'painting',
    },

    // === RUBENS ===
    {
      title: 'The Three Graces',
      slug: 'three-graces-rubens',
      year: 1639,
      medium: 'Oil on oak panel',
      dimensions: '221 cm × 181 cm (87 × 71.3 in)',
      artistId: rubens?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg/800px-The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Garden of Love',
      slug: 'garden-of-love-rubens',
      year: 1633,
      medium: 'Oil on canvas',
      dimensions: '199 cm × 286 cm (78.3 × 112.6 in)',
      artistId: rubens?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Garden_of_Love_by_Peter_Paul_Rubens.jpg/800px-The_Garden_of_Love_by_Peter_Paul_Rubens.jpg',
      artworkType: 'painting',
    },

    // === DÜRER ===
    {
      title: 'Self-Portrait',
      slug: 'self-portrait-durer-prado',
      year: 1498,
      medium: 'Oil on panel',
      dimensions: '52 cm × 41 cm (20.5 × 16.1 in)',
      artistId: durer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Albrecht_D%C3%BCrer_-_Autoportrait%2C_1498.jpg/800px-Albrecht_D%C3%BCrer_-_Autoportrait%2C_1498.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Adam and Eve',
      slug: 'adam-eve-durer-prado',
      year: 1507,
      medium: 'Oil on panel',
      dimensions: '209 cm × 81 cm each (82.3 × 31.9 in)',
      artistId: durer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Albrecht_D%C3%BCrer_-_Adam_and_Eve_%28Prado%29_2.jpg/800px-Albrecht_D%C3%BCrer_-_Adam_and_Eve_%28Prado%29_2.jpg',
      artworkType: 'painting',
    },

    // === ROGIER VAN DER WEYDEN ===
    {
      title: 'Descent from the Cross',
      slug: 'descent-cross-weyden',
      year: 1435,
      medium: 'Oil on oak panel',
      dimensions: '220 cm × 262 cm (86.6 × 103.1 in)',
      artistId: weydenId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Weyden_Deposition.jpg/800px-Weyden_Deposition.jpg',
      artworkType: 'painting',
    },

    // === MURILLO ===
    {
      title: 'The Immaculate Conception of Los Venerables',
      slug: 'immaculate-conception-murillo',
      year: 1678,
      medium: 'Oil on canvas',
      dimensions: '274 cm × 190 cm (107.9 × 74.8 in)',
      artistId: murilloId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Inmaculada_Concepci%C3%B3n_%28Los_Venerables%29.jpg/800px-Inmaculada_Concepci%C3%B3n_%28Los_Venerables%29.jpg',
      artworkType: 'painting',
    },

    // === RIBERA ===
    {
      title: 'The Martyrdom of Saint Philip',
      slug: 'martyrdom-saint-philip-ribera',
      year: 1639,
      medium: 'Oil on canvas',
      dimensions: '234 cm × 234 cm (92.1 × 92.1 in)',
      artistId: riberaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Martirio_de_San_Felipe_%28Ribera%29.jpg/800px-Martirio_de_San_Felipe_%28Ribera%29.jpg',
      artworkType: 'painting',
    },

    // === ZURBARÁN ===
    {
      title: 'Agnus Dei (Lamb of God)',
      slug: 'agnus-dei-zurbaran',
      year: 1640,
      medium: 'Oil on canvas',
      dimensions: '38 cm × 62 cm (15 × 24.4 in)',
      artistId: zurbaranId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Francisco_de_Zurbar%C3%A1n_006.jpg/800px-Francisco_de_Zurbar%C3%A1n_006.jpg',
      artworkType: 'painting',
    },

    // === CARAVAGGIO ===
    {
      title: 'David with the Head of Goliath',
      slug: 'david-goliath-caravaggio-prado',
      year: 1600,
      medium: 'Oil on canvas',
      dimensions: '110 cm × 91 cm (43.3 × 35.8 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Caravaggio_-_David_con_la_cabeza_de_Goliat_%28Madrid%2C_Museo_del_Prado%29.jpg/800px-Caravaggio_-_David_con_la_cabeza_de_Goliat_%28Madrid%2C_Museo_del_Prado%29.jpg',
      artworkType: 'painting',
    },

    // === RAPHAEL ===
    {
      title: 'The Holy Family with a Lamb',
      slug: 'holy-family-lamb-raphael',
      year: 1507,
      medium: 'Oil on wood',
      dimensions: '29 cm × 21 cm (11.4 × 8.3 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rafael_-_Sagrada_Familia_del_cordero.jpg/800px-Rafael_-_Sagrada_Familia_del_cordero.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Portrait of a Cardinal',
      slug: 'portrait-cardinal-raphael',
      year: 1510,
      medium: 'Oil on wood',
      dimensions: '79 cm × 61 cm (31.1 × 24 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Portrait_of_a_cardinal%2C_by_Raffaello.jpg/800px-Portrait_of_a_cardinal%2C_by_Raffaello.jpg',
      artworkType: 'painting',
    },

    // === REMBRANDT ===
    {
      title: 'Artemisia',
      slug: 'artemisia-rembrandt',
      year: 1634,
      medium: 'Oil on canvas',
      dimensions: '142 cm × 153 cm (55.9 × 60.2 in)',
      artistId: rembrandt?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Rembrandt_-_Artemisia_-_Google_Art_Project.jpg/800px-Rembrandt_-_Artemisia_-_Google_Art_Project.jpg',
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
        museumId: prado.id,
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
    where: { museumId: prado.id }
  });
  console.log(`\nPrado total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
