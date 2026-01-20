import { prisma } from '../src/lib/db';

/**
 * Add more artists and paintings - Batch 3
 * All artists died 70+ years ago (public domain)
 */

async function main() {
  // Get existing movements
  const renaissance = await prisma.movement.findFirst({ where: { slug: 'renaissance' } });
  const baroque = await prisma.movement.findFirst({ where: { slug: 'baroque' } });
  const romanticism = await prisma.movement.findFirst({ where: { slug: 'romanticism' } });
  const impressionism = await prisma.movement.findFirst({ where: { slug: 'impressionism' } });
  const realism = await prisma.movement.findFirst({ where: { slug: 'realism' } });
  const postImpressionism = await prisma.movement.findFirst({ where: { slug: 'post-impressionism' } });

  // Add Mannerism movement
  const mannerism = await prisma.movement.upsert({
    where: { slug: 'mannerism' },
    update: {},
    create: {
      name: 'Mannerism',
      slug: 'mannerism',
      description: 'A style that emerged in Italy around 1520, characterized by elongated figures, unusual spatial compositions, and sophisticated allegory.',
      startYear: 1520,
      endYear: 1600,
    },
  });
  console.log('Created movement: Mannerism');

  // Add Rococo movement
  const rococo = await prisma.movement.upsert({
    where: { slug: 'rococo' },
    update: {},
    create: {
      name: 'Rococo',
      slug: 'rococo',
      description: 'An ornamental late Baroque style characterized by lightness, elegance, and elaborate ornamentation.',
      startYear: 1720,
      endYear: 1780,
    },
  });
  console.log('Created movement: Rococo');

  // Add Neoclassicism movement
  const neoclassicism = await prisma.movement.upsert({
    where: { slug: 'neoclassicism' },
    update: {},
    create: {
      name: 'Neoclassicism',
      slug: 'neoclassicism',
      description: 'A Western cultural movement that drew inspiration from classical antiquity, emphasizing symmetry, simplicity, and idealized forms.',
      startYear: 1760,
      endYear: 1850,
    },
  });
  console.log('Created movement: Neoclassicism');

  // Add new museums
  const museums = [
    {
      name: 'Gemäldegalerie Alte Meister',
      slug: 'gemaldegalerie-alte-meister',
      city: 'Dresden',
      country: 'Germany',
      description: 'One of the most important collections of Old Master paintings, housed in the Zwinger palace complex.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dresden-Zwinger-Courtyard.04.JPG/1280px-Dresden-Zwinger-Courtyard.04.JPG',
    },
    {
      name: 'The Huntington',
      slug: 'huntington-library',
      city: 'San Marino',
      country: 'United States',
      description: 'A collections-based research and educational institution with notable British and American art.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Huntington_Library%2C_Art_Museum%2C_and_Botanical_Gardens_-_panoramio.jpg/1280px-Huntington_Library%2C_Art_Museum%2C_and_Botanical_Gardens_-_panoramio.jpg',
    },
    {
      name: 'Pinacoteca di Brera',
      slug: 'pinacoteca-di-brera',
      city: 'Milan',
      country: 'Italy',
      description: 'The main public gallery for paintings in Milan, containing one of the foremost collections of Italian Renaissance art.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pinacoteca_di_Brera_-_cortile.jpg/1280px-Pinacoteca_di_Brera_-_cortile.jpg',
    },
    {
      name: 'Gallerie dell\'Accademia',
      slug: 'gallerie-dell-accademia-venice',
      city: 'Venice',
      country: 'Italy',
      description: 'A museum gallery of pre-19th-century art in Venice, housed in the former Santa Maria della Carità complex.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Accademia_%28Venice%29.jpg/1280px-Accademia_%28Venice%29.jpg',
    },
    {
      name: 'Wallace Collection',
      slug: 'wallace-collection',
      city: 'London',
      country: 'United Kingdom',
      description: 'A national museum displaying the art collection assembled by the Marquesses of Hertford and Sir Richard Wallace.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/The_Wallace_Collection_2008.jpg/1280px-The_Wallace_Collection_2008.jpg',
    },
    {
      name: 'Basilica di Santa Maria Gloriosa dei Frari',
      slug: 'basilica-dei-frari',
      city: 'Venice',
      country: 'Italy',
      description: 'A Gothic church containing masterpieces by Titian, Giovanni Bellini, and other Venetian masters.',
    },
    {
      name: 'National Gallery of Art',
      slug: 'national-gallery-of-art',
      city: 'Washington, D.C.',
      country: 'United States',
      description: 'One of the largest and most visited art museums in the United States, located on the National Mall.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/National_Gallery_of_Art_-_West_Building.JPG/1280px-National_Gallery_of_Art_-_West_Building.JPG',
    },
    {
      name: 'Museo di San Marco',
      slug: 'museo-di-san-marco',
      city: 'Florence',
      country: 'Italy',
      description: 'A religious museum housed in a Dominican convent, featuring frescoes by Fra Angelico.',
    },
    {
      name: 'Santa Maria delle Grazie',
      slug: 'santa-maria-delle-grazie',
      city: 'Milan',
      country: 'Italy',
      description: 'A church and Dominican convent, famous for hosting Leonardo da Vinci\'s Last Supper.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Santa_Maria_delle_Grazie_Milano.jpg/1280px-Santa_Maria_delle_Grazie_Milano.jpg',
    },
  ];

  for (const museum of museums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Created museum: ${museum.name}`);
  }

  // Get museums for artworks
  const nationalGallery = await prisma.museum.findFirst({ where: { slug: 'national-gallery' } });
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const uffizi = await prisma.museum.findFirst({ where: { slug: 'uffizi-gallery' } });
  const museeOrsay = await prisma.museum.findFirst({ where: { slug: 'musee-dorsay' } });
  const artInstituteChicago = await prisma.museum.findFirst({ where: { slug: 'art-institute-of-chicago' } });
  const met = await prisma.museum.findFirst({ where: { slug: 'metropolitan-museum-of-art' } });
  const prado = await prisma.museum.findFirst({ where: { slug: 'museo-del-prado' } });
  const rijksmuseum = await prisma.museum.findFirst({ where: { slug: 'rijksmuseum' } });
  const dresden = await prisma.museum.findFirst({ where: { slug: 'gemaldegalerie-alte-meister' } });
  const huntington = await prisma.museum.findFirst({ where: { slug: 'huntington-library' } });
  const brera = await prisma.museum.findFirst({ where: { slug: 'pinacoteca-di-brera' } });
  const accademiaVenice = await prisma.museum.findFirst({ where: { slug: 'gallerie-dell-accademia-venice' } });
  const wallace = await prisma.museum.findFirst({ where: { slug: 'wallace-collection' } });
  const frari = await prisma.museum.findFirst({ where: { slug: 'basilica-dei-frari' } });
  const ngaWashington = await prisma.museum.findFirst({ where: { slug: 'national-gallery-of-art' } });
  const sanMarco = await prisma.museum.findFirst({ where: { slug: 'museo-di-san-marco' } });
  const santaMariaGrazie = await prisma.museum.findFirst({ where: { slug: 'santa-maria-delle-grazie' } });

  // Add new artists
  const artists = [
    {
      name: 'Titian',
      slug: 'titian',
      nationality: 'Italian',
      birthYear: 1488,
      deathYear: 1576,
      bioShort: 'The greatest Venetian painter of the 16th century, known for his masterful use of color and innovative techniques.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Tintoretto',
      slug: 'tintoretto',
      nationality: 'Italian',
      birthYear: 1518,
      deathYear: 1594,
      bioShort: 'A Venetian painter known for his dramatic use of perspective and muscular figures, bridging Renaissance and Baroque styles.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Giovanni Bellini',
      slug: 'giovanni-bellini',
      nationality: 'Italian',
      birthYear: 1430,
      deathYear: 1516,
      bioShort: 'A Venetian painter who revolutionized Venetian painting with his rich colors and detailed landscapes.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Giorgione',
      slug: 'giorgione',
      nationality: 'Italian',
      birthYear: 1477,
      deathYear: 1510,
      bioShort: 'A mysterious Venetian painter whose poetic and atmospheric works influenced Titian and the development of Venetian art.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Fra Angelico',
      slug: 'fra-angelico',
      nationality: 'Italian',
      birthYear: 1395,
      deathYear: 1455,
      bioShort: 'An Early Italian Renaissance painter known for his deeply spiritual frescoes and altarpieces.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Andrea Mantegna',
      slug: 'andrea-mantegna',
      nationality: 'Italian',
      birthYear: 1431,
      deathYear: 1506,
      bioShort: 'A painter known for his mastery of perspective and foreshortening, influential in Northern Italian art.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Parmigianino',
      slug: 'parmigianino',
      nationality: 'Italian',
      birthYear: 1503,
      deathYear: 1540,
      bioShort: 'An Italian Mannerist painter known for his elongated figures and elegant style.',
      movements: [mannerism.id],
    },
    {
      name: 'Bronzino',
      slug: 'bronzino',
      nationality: 'Italian',
      birthYear: 1503,
      deathYear: 1572,
      bioShort: 'A Florentine Mannerist painter known for his sophisticated portraits and complex allegorical works.',
      movements: [mannerism.id],
    },
    {
      name: 'Jean-Honoré Fragonard',
      slug: 'jean-honore-fragonard',
      nationality: 'French',
      birthYear: 1732,
      deathYear: 1806,
      bioShort: 'A French painter whose late Rococo style was distinguished by its exuberant hedonism and lush brushwork.',
      movements: [rococo.id],
    },
    {
      name: 'Thomas Gainsborough',
      slug: 'thomas-gainsborough',
      nationality: 'British',
      birthYear: 1727,
      deathYear: 1788,
      bioShort: 'One of the most famous British portrait and landscape painters of the 18th century.',
      movements: [rococo.id],
    },
    {
      name: 'John Constable',
      slug: 'john-constable',
      nationality: 'British',
      birthYear: 1776,
      deathYear: 1837,
      bioShort: 'An English Romantic painter known for his landscapes of the English countryside.',
      movements: romanticism ? [romanticism.id] : [],
    },
    {
      name: 'Jean-François Millet',
      slug: 'jean-francois-millet',
      nationality: 'French',
      birthYear: 1814,
      deathYear: 1875,
      bioShort: 'A French painter known for his scenes of peasant farmers, influential on Impressionism and Van Gogh.',
      movements: realism ? [realism.id] : [],
    },
    {
      name: 'Winslow Homer',
      slug: 'winslow-homer',
      nationality: 'American',
      birthYear: 1836,
      deathYear: 1910,
      bioShort: 'An American landscape painter and printmaker, best known for his marine subjects and watercolors.',
      movements: realism ? [realism.id] : [],
    },
    {
      name: 'Mary Cassatt',
      slug: 'mary-cassatt',
      nationality: 'American',
      birthYear: 1844,
      deathYear: 1926,
      bioShort: 'An American painter who lived in France and exhibited with the Impressionists, known for her intimate domestic scenes.',
      movements: impressionism ? [impressionism.id] : [],
    },
    {
      name: 'Berthe Morisot',
      slug: 'berthe-morisot',
      nationality: 'French',
      birthYear: 1841,
      deathYear: 1895,
      bioShort: 'A French Impressionist painter and a founding member of the movement, known for her light brushwork and domestic subjects.',
      movements: impressionism ? [impressionism.id] : [],
    },
    {
      name: 'Jean-Auguste-Dominique Ingres',
      slug: 'jean-auguste-dominique-ingres',
      nationality: 'French',
      birthYear: 1780,
      deathYear: 1867,
      bioShort: 'A French Neoclassical painter who became a champion of academic art against the rising Romantic movement.',
      movements: [neoclassicism.id],
    },
    {
      name: 'Anthony van Dyck',
      slug: 'anthony-van-dyck',
      nationality: 'Flemish',
      birthYear: 1599,
      deathYear: 1641,
      bioShort: 'A Flemish Baroque artist who became the leading court painter in England, known for his elegant portraits.',
      movements: baroque ? [baroque.id] : [],
    },
    {
      name: 'Frans Hals',
      slug: 'frans-hals',
      nationality: 'Dutch',
      birthYear: 1582,
      deathYear: 1666,
      bioShort: 'A Dutch Golden Age portrait painter known for his loose, lively brushwork and ability to capture fleeting expressions.',
      movements: baroque ? [baroque.id] : [],
    },
  ];

  for (const artist of artists) {
    const { movements, ...artistData } = artist;
    await prisma.artist.upsert({
      where: { slug: artist.slug },
      update: {},
      create: {
        ...artistData,
        movements: {
          connect: movements.map(id => ({ id })),
        },
      },
    });
    console.log(`Created artist: ${artist.name}`);
  }

  // Get artists for artworks
  const titian = await prisma.artist.findFirst({ where: { slug: 'titian' } });
  const tintoretto = await prisma.artist.findFirst({ where: { slug: 'tintoretto' } });
  const bellini = await prisma.artist.findFirst({ where: { slug: 'giovanni-bellini' } });
  const giorgione = await prisma.artist.findFirst({ where: { slug: 'giorgione' } });
  const fraAngelico = await prisma.artist.findFirst({ where: { slug: 'fra-angelico' } });
  const mantegna = await prisma.artist.findFirst({ where: { slug: 'andrea-mantegna' } });
  const parmigianino = await prisma.artist.findFirst({ where: { slug: 'parmigianino' } });
  const bronzino = await prisma.artist.findFirst({ where: { slug: 'bronzino' } });
  const fragonard = await prisma.artist.findFirst({ where: { slug: 'jean-honore-fragonard' } });
  const gainsborough = await prisma.artist.findFirst({ where: { slug: 'thomas-gainsborough' } });
  const constable = await prisma.artist.findFirst({ where: { slug: 'john-constable' } });
  const millet = await prisma.artist.findFirst({ where: { slug: 'jean-francois-millet' } });
  const homer = await prisma.artist.findFirst({ where: { slug: 'winslow-homer' } });
  const cassatt = await prisma.artist.findFirst({ where: { slug: 'mary-cassatt' } });
  const morisot = await prisma.artist.findFirst({ where: { slug: 'berthe-morisot' } });
  const ingres = await prisma.artist.findFirst({ where: { slug: 'jean-auguste-dominique-ingres' } });
  const vanDyck = await prisma.artist.findFirst({ where: { slug: 'anthony-van-dyck' } });
  const hals = await prisma.artist.findFirst({ where: { slug: 'frans-hals' } });
  const leonardo = await prisma.artist.findFirst({ where: { slug: 'leonardo-da-vinci' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });

  // Add new artworks
  const artworks = [
    // Titian
    {
      title: 'Assumption of the Virgin',
      slug: 'assumption-of-the-virgin-titian',
      artistId: titian?.id,
      museumId: frari?.id,
      year: 1518,
      medium: 'Oil on panel',
      dimensions: '690 cm × 360 cm',
      description: 'Titian\'s monumental altarpiece depicting the Virgin Mary ascending to heaven, a masterpiece of Venetian Renaissance art.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Tizian_041.jpg',
      searchVolumeTier: 2,
    },
    {
      title: 'Bacchus and Ariadne',
      slug: 'bacchus-and-ariadne',
      artistId: titian?.id,
      museumId: nationalGallery?.id,
      year: 1523,
      medium: 'Oil on canvas',
      dimensions: '176.5 cm × 191 cm',
      description: 'A dynamic mythological scene showing Bacchus leaping from his chariot to meet Ariadne on the island of Naxos.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Titian_Bacchus_and_Ariadne.jpg',
      searchVolumeTier: 2,
    },
    {
      title: 'Venus of Urbino',
      slug: 'venus-of-urbino',
      artistId: titian?.id,
      museumId: uffizi?.id,
      year: 1538,
      medium: 'Oil on canvas',
      dimensions: '119 cm × 165 cm',
      description: 'A reclining female nude that has become one of the most influential works in the history of Western art.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg',
      searchVolumeTier: 1,
    },
    // Tintoretto
    {
      title: 'The Origin of the Milky Way',
      slug: 'origin-of-the-milky-way',
      artistId: tintoretto?.id,
      museumId: nationalGallery?.id,
      year: 1575,
      medium: 'Oil on canvas',
      dimensions: '149.4 cm × 168 cm',
      description: 'A mythological painting depicting Zeus placing the infant Hercules at the breast of the sleeping Hera.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Jacopo_Tintoretto_-_The_Origin_of_the_Milky_Way_-_Google_Art_Project.jpg',
      searchVolumeTier: 2,
    },
    // Giorgione
    {
      title: 'The Tempest',
      slug: 'the-tempest',
      artistId: giorgione?.id,
      museumId: accademiaVenice?.id,
      year: 1508,
      medium: 'Oil on canvas',
      dimensions: '83 cm × 73 cm',
      description: 'A mysterious and atmospheric painting whose true subject remains debated, considered a landmark in landscape painting.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Giorgione_-_La_tempesta.jpg',
      searchVolumeTier: 2,
    },
    // Fra Angelico
    {
      title: 'The Annunciation',
      slug: 'annunciation-fra-angelico',
      artistId: fraAngelico?.id,
      museumId: sanMarco?.id,
      year: 1442,
      medium: 'Fresco',
      dimensions: '230 cm × 321 cm',
      description: 'A serene and luminous fresco depicting the Angel Gabriel announcing to Mary that she will bear the Son of God.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/ANGELICO%2C_Fra_Annunciation%2C_1437-46_%282236990916%29.jpg',
      searchVolumeTier: 2,
    },
    // Mantegna
    {
      title: 'Lamentation of Christ',
      slug: 'lamentation-of-christ-mantegna',
      artistId: mantegna?.id,
      museumId: brera?.id,
      year: 1480,
      medium: 'Tempera on canvas',
      dimensions: '68 cm × 81 cm',
      description: 'A striking painting famous for its dramatic foreshortening of Christ\'s body, viewed from the feet.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Andrea_Mantegna_-_The_Lamentation_over_the_Dead_Christ_-_WGA13981.jpg',
      searchVolumeTier: 2,
    },
    // Parmigianino
    {
      title: 'Madonna with the Long Neck',
      slug: 'madonna-with-the-long-neck',
      artistId: parmigianino?.id,
      museumId: uffizi?.id,
      year: 1540,
      medium: 'Oil on panel',
      dimensions: '216 cm × 132 cm',
      description: 'An iconic Mannerist painting known for its elongated figures and unconventional proportions.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg',
      searchVolumeTier: 2,
    },
    // Bronzino
    {
      title: 'Venus, Cupid, Folly and Time',
      slug: 'venus-cupid-folly-and-time',
      artistId: bronzino?.id,
      museumId: nationalGallery?.id,
      year: 1545,
      medium: 'Oil on panel',
      dimensions: '146 cm × 116 cm',
      description: 'A complex allegorical painting full of hidden meanings about love, jealousy, and the passage of time.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Angelo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg',
      searchVolumeTier: 2,
    },
    // Fragonard
    {
      title: 'The Swing',
      slug: 'the-swing',
      artistId: fragonard?.id,
      museumId: wallace?.id,
      year: 1767,
      medium: 'Oil on canvas',
      dimensions: '81 cm × 64 cm',
      description: 'The quintessential Rococo painting, depicting a young woman on a swing while a hidden lover watches from below.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Fragonard%2C_The_Swing.jpg',
      searchVolumeTier: 1,
    },
    // Gainsborough
    {
      title: 'The Blue Boy',
      slug: 'the-blue-boy',
      artistId: gainsborough?.id,
      museumId: huntington?.id,
      year: 1770,
      medium: 'Oil on canvas',
      dimensions: '179.4 cm × 123.8 cm',
      description: 'One of the most famous British paintings, showing a young boy dressed in blue 17th-century costume.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Thomas_Gainsborough_-_The_Blue_Boy_%28The_Huntington_Library%2C_San_Marino_L._A.%29.jpg',
      searchVolumeTier: 1,
    },
    // Constable
    {
      title: 'The Hay Wain',
      slug: 'the-hay-wain',
      artistId: constable?.id,
      museumId: nationalGallery?.id,
      year: 1821,
      medium: 'Oil on canvas',
      dimensions: '130.2 cm × 185.4 cm',
      description: 'An iconic English landscape painting depicting a rural scene in Suffolk, widely considered Constable\'s masterpiece.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/John_Constable_-_The_Hay_Wain_%281821%29.jpg',
      searchVolumeTier: 1,
    },
    // Millet
    {
      title: 'The Gleaners',
      slug: 'the-gleaners',
      artistId: millet?.id,
      museumId: museeOrsay?.id,
      year: 1857,
      medium: 'Oil on canvas',
      dimensions: '83.5 cm × 110 cm',
      description: 'A realistic depiction of three peasant women gleaning a field after harvest, celebrating rural labor.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg',
      searchVolumeTier: 1,
    },
    {
      title: 'The Angelus',
      slug: 'the-angelus',
      artistId: millet?.id,
      museumId: museeOrsay?.id,
      year: 1859,
      medium: 'Oil on canvas',
      dimensions: '55.5 cm × 66 cm',
      description: 'A painting of two peasants pausing to pray at the sound of the church bell, an image of rural piety.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859%29.jpg',
      searchVolumeTier: 1,
    },
    // Homer
    {
      title: 'Breezing Up (A Fair Wind)',
      slug: 'breezing-up',
      artistId: homer?.id,
      museumId: ngaWashington?.id,
      year: 1876,
      medium: 'Oil on canvas',
      dimensions: '61.5 cm × 97 cm',
      description: 'A beloved American painting showing a catboat with a man and three boys sailing in choppy seas.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg',
      searchVolumeTier: 2,
    },
    // Cassatt
    {
      title: 'The Child\'s Bath',
      slug: 'the-childs-bath',
      artistId: cassatt?.id,
      museumId: artInstituteChicago?.id,
      year: 1893,
      medium: 'Oil on canvas',
      dimensions: '100.3 cm × 66.1 cm',
      description: 'An intimate scene of a mother bathing her child, showcasing Cassatt\'s mastery of the domestic subject.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg',
      searchVolumeTier: 2,
    },
    // Morisot
    {
      title: 'The Cradle',
      slug: 'the-cradle',
      artistId: morisot?.id,
      museumId: museeOrsay?.id,
      year: 1872,
      medium: 'Oil on canvas',
      dimensions: '56 cm × 46 cm',
      description: 'One of the first Impressionist paintings of a mother and child, showing Morisot\'s sister watching her sleeping baby.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Berthe_Morisot_-_Le_berceau.jpg',
      searchVolumeTier: 2,
    },
    // Ingres
    {
      title: 'The Turkish Bath',
      slug: 'the-turkish-bath',
      artistId: ingres?.id,
      museumId: louvre?.id,
      year: 1862,
      medium: 'Oil on canvas',
      dimensions: '108 cm diameter',
      description: 'A circular painting depicting a group of nude women in a harem bath, Ingres\'s final major work.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Le_Bain_Turc%2C_by_Jean_Auguste_Dominique_Ingres%2C_from_C2RMF_retouched.jpg',
      searchVolumeTier: 2,
    },
    {
      title: 'Grande Odalisque',
      slug: 'grande-odalisque',
      artistId: ingres?.id,
      museumId: louvre?.id,
      year: 1814,
      medium: 'Oil on canvas',
      dimensions: '91 cm × 162 cm',
      description: 'A reclining nude with anatomically impossible proportions that became a Romantic icon.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
      searchVolumeTier: 1,
    },
    // Van Dyck
    {
      title: 'Charles I at the Hunt',
      slug: 'charles-i-at-the-hunt',
      artistId: vanDyck?.id,
      museumId: louvre?.id,
      year: 1635,
      medium: 'Oil on canvas',
      dimensions: '266 cm × 207 cm',
      description: 'An elegant portrait of King Charles I of England in a rural setting, exemplifying Van Dyck\'s aristocratic style.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Sir_Anthony_Van_Dyck_-_Charles_I_%281600-49%29_with_M._de_St_Antoine_-_Google_Art_Project_edited.jpg',
      searchVolumeTier: 2,
    },
    // Frans Hals
    {
      title: 'The Laughing Cavalier',
      slug: 'the-laughing-cavalier',
      artistId: hals?.id,
      museumId: wallace?.id,
      year: 1624,
      medium: 'Oil on canvas',
      dimensions: '83 cm × 67.3 cm',
      description: 'A famous portrait notable for the subject\'s enigmatic smile and the virtuoso rendering of his elaborate costume.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Cavalier_soldier_Hals-1624x.jpg',
      searchVolumeTier: 1,
    },
    // Leonardo - add The Last Supper
    {
      title: 'The Last Supper',
      slug: 'the-last-supper',
      artistId: leonardo?.id,
      museumId: santaMariaGrazie?.id,
      year: 1498,
      medium: 'Tempera and oil on gesso, pitch, and mastic',
      dimensions: '460 cm × 880 cm',
      description: 'Leonardo\'s monumental mural depicting the moment Jesus announces that one of his apostles will betray him.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
      searchVolumeTier: 1,
    },
    // Raphael - Sistine Madonna
    {
      title: 'Sistine Madonna',
      slug: 'sistine-madonna',
      artistId: raphael?.id,
      museumId: dresden?.id,
      year: 1512,
      medium: 'Oil on canvas',
      dimensions: '265 cm × 196 cm',
      description: 'One of Raphael\'s last works, famous for its pair of cherubs at the bottom who have become cultural icons.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg',
      searchVolumeTier: 1,
    },
  ];

  for (const artwork of artworks) {
    if (!artwork.artistId) {
      console.log(`Skipping ${artwork.title} - artist not found`);
      continue;
    }
    await prisma.artwork.upsert({
      where: { slug: artwork.slug },
      update: {},
      create: artwork,
    });
    console.log(`Created artwork: ${artwork.title}`);
  }

  await prisma.$disconnect();
  console.log('\nDone! Added more artists and artworks - Batch 3');
}

main().catch(console.error);
