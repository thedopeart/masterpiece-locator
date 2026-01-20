import { prisma } from '../src/lib/db';

/**
 * MASSIVE BATCH 7 - 100+ more artists and paintings
 * All public domain (artists died 70+ years ago)
 */

async function main() {
  console.log('Starting massive art addition batch 7...\n');

  // Get movements
  const movements = {
    renaissance: await prisma.movement.findFirst({ where: { slug: 'renaissance' } }),
    baroque: await prisma.movement.findFirst({ where: { slug: 'baroque' } }),
    romanticism: await prisma.movement.findFirst({ where: { slug: 'romanticism' } }),
    impressionism: await prisma.movement.findFirst({ where: { slug: 'impressionism' } }),
    realism: await prisma.movement.findFirst({ where: { slug: 'realism' } }),
    neoclassicism: await prisma.movement.findFirst({ where: { slug: 'neoclassicism' } }),
    symbolism: await prisma.movement.findFirst({ where: { slug: 'symbolism' } }),
  };

  // Add Pre-Raphaelite movement
  const preRaphaelite = await prisma.movement.upsert({
    where: { slug: 'pre-raphaelite' },
    update: {},
    create: {
      name: 'Pre-Raphaelite Brotherhood',
      slug: 'pre-raphaelite',
      description: 'A group of English painters who rejected the mechanistic approach of Mannerism and sought to return to the abundant detail of Quattrocento Italian art.',
      startYear: 1848,
      endYear: 1854,
    },
  });

  // Add Hudson River School
  const hudsonRiver = await prisma.movement.upsert({
    where: { slug: 'hudson-river-school' },
    update: {},
    create: {
      name: 'Hudson River School',
      slug: 'hudson-river-school',
      description: 'A mid-19th century American art movement embodied by landscape painters whose aesthetic vision was influenced by Romanticism.',
      startYear: 1825,
      endYear: 1880,
    },
  });

  // Add Academic Art
  const academicArt = await prisma.movement.upsert({
    where: { slug: 'academic-art' },
    update: {},
    create: {
      name: 'Academic Art',
      slug: 'academic-art',
      description: 'A style of painting and sculpture produced under the influence of European academies of art.',
      startYear: 1650,
      endYear: 1900,
    },
  });

  console.log('Created movements: Pre-Raphaelite, Hudson River School, Academic Art');

  // Add more museums
  const newMuseums = [
    { name: 'Tate Britain', slug: 'tate-britain', city: 'London', country: 'United Kingdom', description: 'The national gallery of British art from 1500 to the present day.' },
    { name: 'Royal Academy of Arts', slug: 'royal-academy', city: 'London', country: 'United Kingdom', description: 'The oldest art institution in Britain.' },
    { name: 'Museo Nacional de San Carlos', slug: 'museo-san-carlos', city: 'Mexico City', country: 'Mexico', description: 'Houses one of the most important collections of European art in the Americas.' },
    { name: 'Dulwich Picture Gallery', slug: 'dulwich-picture-gallery', city: 'London', country: 'United Kingdom', description: 'England\'s first purpose-built public art gallery.' },
    { name: 'Galleria Borghese', slug: 'galleria-borghese', city: 'Rome', country: 'Italy', description: 'An art gallery housed in the former Villa Borghese Pinciana.' },
    { name: 'Galleria Doria Pamphilj', slug: 'galleria-doria-pamphilj', city: 'Rome', country: 'Italy', description: 'A large art collection housed in the Palazzo Doria Pamphilj.' },
    { name: 'Museo di Capodimonte', slug: 'museo-capodimonte', city: 'Naples', country: 'Italy', description: 'One of the largest museums in Italy with collections of painting and decorative arts.' },
    { name: 'Gemäldegalerie', slug: 'gemaldegalerie-berlin', city: 'Berlin', country: 'Germany', description: 'One of the world\'s leading collections of European painting from the 13th to 18th centuries.' },
    { name: 'Alte Nationalgalerie', slug: 'alte-nationalgalerie', city: 'Berlin', country: 'Germany', description: 'A gallery showing 19th-century paintings and sculptures.' },
    { name: 'Museo del Prado', slug: 'museo-del-prado', city: 'Madrid', country: 'Spain', description: 'Spain\'s main national art museum.' },
    { name: 'Kelvingrove Art Gallery', slug: 'kelvingrove', city: 'Glasgow', country: 'United Kingdom', description: 'One of Scotland\'s most popular visitor attractions.' },
    { name: 'National Galleries of Scotland', slug: 'national-galleries-scotland', city: 'Edinburgh', country: 'United Kingdom', description: 'Scotland\'s national art gallery.' },
    { name: 'Musée des Beaux-Arts de Lyon', slug: 'musee-lyon', city: 'Lyon', country: 'France', description: 'One of the largest art museums in France.' },
    { name: 'Musée Fabre', slug: 'musee-fabre', city: 'Montpellier', country: 'France', description: 'One of the leading art museums in France.' },
    { name: 'Groeningemuseum', slug: 'groeningemuseum', city: 'Bruges', country: 'Belgium', description: 'Houses an extensive collection of Flemish Primitives.' },
    { name: 'Museum of Fine Arts, Boston', slug: 'museum-of-fine-arts-boston', city: 'Boston', country: 'United States', description: 'One of the largest museums in the United States.' },
    { name: 'Brooklyn Museum', slug: 'brooklyn-museum', city: 'New York', country: 'United States', description: 'An art museum located in Brooklyn, New York City.' },
    { name: 'Cleveland Museum of Art', slug: 'cleveland-museum-of-art', city: 'Cleveland', country: 'United States', description: 'An art museum with a collection of more than 61,000 works.' },
    { name: 'Toledo Museum of Art', slug: 'toledo-museum-of-art', city: 'Toledo', country: 'United States', description: 'An internationally known art museum.' },
    { name: 'Norton Simon Museum', slug: 'norton-simon-museum', city: 'Pasadena', country: 'United States', description: 'Known for its collection of European art from the Renaissance to the 20th century.' },
  ];

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
  }
  console.log(`Created ${newMuseums.length} new museums`);

  // MASSIVE artist list
  const artists = [
    // Early Italian
    { name: 'Cimabue', slug: 'cimabue', nationality: 'Italian', birthYear: 1240, deathYear: 1302, bioShort: 'An Italian painter and mosaicist, considered the last great painter in the Byzantine tradition.' },
    { name: 'Duccio di Buoninsegna', slug: 'duccio', nationality: 'Italian', birthYear: 1255, deathYear: 1319, bioShort: 'The founder of the Sienese school of painting.' },
    { name: 'Simone Martini', slug: 'simone-martini', nationality: 'Italian', birthYear: 1284, deathYear: 1344, bioShort: 'A major figure of early Italian painting, known for his courtly style.' },
    { name: 'Gentile da Fabriano', slug: 'gentile-da-fabriano', nationality: 'Italian', birthYear: 1370, deathYear: 1427, bioShort: 'An Italian painter known for his elegant International Gothic style.' },
    { name: 'Benozzo Gozzoli', slug: 'benozzo-gozzoli', nationality: 'Italian', birthYear: 1421, deathYear: 1497, bioShort: 'A Renaissance painter known for his fresco cycle in the Magi Chapel.' },
    { name: 'Domenico Ghirlandaio', slug: 'domenico-ghirlandaio', nationality: 'Italian', birthYear: 1449, deathYear: 1494, bioShort: 'Michelangelo\'s teacher, known for his detailed fresco cycles in Florence.' },
    { name: 'Luca Signorelli', slug: 'luca-signorelli', nationality: 'Italian', birthYear: 1450, deathYear: 1523, bioShort: 'An Italian painter known for his ability to depict the human body in action.' },
    { name: 'Vittore Carpaccio', slug: 'vittore-carpaccio', nationality: 'Italian', birthYear: 1465, deathYear: 1525, bioShort: 'A Venetian painter known for his narrative cycles of saints.' },

    // Northern Renaissance
    { name: 'Robert Campin', slug: 'robert-campin', nationality: 'Flemish', birthYear: 1375, deathYear: 1444, bioShort: 'One of the founders of Early Netherlandish painting, also known as the Master of Flémalle.' },
    { name: 'Petrus Christus', slug: 'petrus-christus', nationality: 'Flemish', birthYear: 1410, deathYear: 1475, bioShort: 'A Flemish painter who became the leading painter in Bruges after van Eyck\'s death.' },
    { name: 'Hugo van der Goes', slug: 'hugo-van-der-goes', nationality: 'Flemish', birthYear: 1440, deathYear: 1482, bioShort: 'A Flemish painter known for the Portinari Altarpiece.' },
    { name: 'Gerard David', slug: 'gerard-david', nationality: 'Flemish', birthYear: 1460, deathYear: 1523, bioShort: 'The last great master of the Bruges school of painting.' },
    { name: 'Quentin Matsys', slug: 'quentin-matsys', nationality: 'Flemish', birthYear: 1466, deathYear: 1530, bioShort: 'A Flemish painter who worked in Antwerp, known for his portraits and religious scenes.' },
    { name: 'Joachim Patinir', slug: 'joachim-patinir', nationality: 'Flemish', birthYear: 1480, deathYear: 1524, bioShort: 'A pioneer of landscape painting as an independent genre.' },

    // Dutch Golden Age
    { name: 'Hendrick Avercamp', slug: 'hendrick-avercamp', nationality: 'Dutch', birthYear: 1585, deathYear: 1634, bioShort: 'A Dutch painter known for his winter landscapes with skaters.' },
    { name: 'Jan van Goyen', slug: 'jan-van-goyen', nationality: 'Dutch', birthYear: 1596, deathYear: 1656, bioShort: 'One of the most prolific Dutch landscape painters.' },
    { name: 'Jan Steen', slug: 'jan-steen', nationality: 'Dutch', birthYear: 1626, deathYear: 1679, bioShort: 'A Dutch genre painter known for his humorous scenes of everyday life.' },
    { name: 'Adriaen Brouwer', slug: 'adriaen-brouwer', nationality: 'Flemish', birthYear: 1605, deathYear: 1638, bioShort: 'A Flemish genre painter known for his tavern scenes.' },
    { name: 'David Teniers the Younger', slug: 'david-teniers-younger', nationality: 'Flemish', birthYear: 1610, deathYear: 1690, bioShort: 'A Flemish painter known for his peasant scenes and gallery paintings.' },
    { name: 'Gabriel Metsu', slug: 'gabriel-metsu', nationality: 'Dutch', birthYear: 1629, deathYear: 1667, bioShort: 'A Dutch painter of history paintings, still lifes, portraits and genre works.' },
    { name: 'Adriaen van Ostade', slug: 'adriaen-van-ostade', nationality: 'Dutch', birthYear: 1610, deathYear: 1685, bioShort: 'A Dutch Golden Age painter of genre works.' },
    { name: 'Willem van de Velde the Younger', slug: 'willem-van-de-velde-younger', nationality: 'Dutch', birthYear: 1633, deathYear: 1707, bioShort: 'The leading Dutch marine painter of his era.' },

    // Italian Baroque
    { name: 'Annibale Carracci', slug: 'annibale-carracci', nationality: 'Italian', birthYear: 1560, deathYear: 1609, bioShort: 'An Italian painter who led a reform of art against Mannerism.' },
    { name: 'Artemisia Gentileschi', slug: 'artemisia-gentileschi', nationality: 'Italian', birthYear: 1593, deathYear: 1656, bioShort: 'One of the most accomplished Italian Baroque painters, known for powerful female protagonists.' },
    { name: 'Orazio Gentileschi', slug: 'orazio-gentileschi', nationality: 'Italian', birthYear: 1563, deathYear: 1639, bioShort: 'An Italian painter who was an important follower of Caravaggio.' },
    { name: 'Pietro da Cortona', slug: 'pietro-da-cortona', nationality: 'Italian', birthYear: 1596, deathYear: 1669, bioShort: 'An Italian Baroque painter and architect.' },
    { name: 'Salvator Rosa', slug: 'salvator-rosa', nationality: 'Italian', birthYear: 1615, deathYear: 1673, bioShort: 'An Italian Baroque painter, poet, and printmaker known for wild landscapes.' },
    { name: 'Luca Giordano', slug: 'luca-giordano', nationality: 'Italian', birthYear: 1634, deathYear: 1705, bioShort: 'An Italian late Baroque painter, known for his speed of execution.' },

    // French Classical/Baroque
    { name: 'Georges de La Tour', slug: 'georges-de-la-tour', nationality: 'French', birthYear: 1593, deathYear: 1652, bioShort: 'A French Baroque painter known for his candlelit nocturnal scenes.' },
    { name: 'Claude Lorrain', slug: 'claude-lorrain', nationality: 'French', birthYear: 1600, deathYear: 1682, bioShort: 'A French painter known for his idealized classical landscapes.' },
    { name: 'Nicolas Poussin', slug: 'nicolas-poussin', nationality: 'French', birthYear: 1594, deathYear: 1665, bioShort: 'The leading painter of the French classical style.' },
    { name: 'Louis Le Nain', slug: 'louis-le-nain', nationality: 'French', birthYear: 1593, deathYear: 1648, bioShort: 'A French painter known for his dignified scenes of peasant life.' },
    { name: 'Élisabeth Vigée Le Brun', slug: 'elisabeth-vigee-le-brun', nationality: 'French', birthYear: 1755, deathYear: 1842, bioShort: 'A French portrait painter, one of the most famous of the 18th century.' },
    { name: 'Jean-Baptiste Greuze', slug: 'jean-baptiste-greuze', nationality: 'French', birthYear: 1725, deathYear: 1805, bioShort: 'A French painter known for his moralizing genre paintings.' },

    // French Academic/19th Century
    { name: 'Jean-Léon Gérôme', slug: 'jean-leon-gerome', nationality: 'French', birthYear: 1824, deathYear: 1904, bioShort: 'A leading French academic painter and sculptor, known for historical and Orientalist subjects.' },
    { name: 'William-Adolphe Bouguereau', slug: 'william-adolphe-bouguereau', nationality: 'French', birthYear: 1825, deathYear: 1905, bioShort: 'A French academic painter known for realistic paintings of mythological subjects.' },
    { name: 'Alexandre Cabanel', slug: 'alexandre-cabanel', nationality: 'French', birthYear: 1823, deathYear: 1889, bioShort: 'A French painter born in Montpellier, one of the great French academic painters.' },
    { name: 'Paul Delaroche', slug: 'paul-delaroche', nationality: 'French', birthYear: 1797, deathYear: 1856, bioShort: 'A French painter who achieved fame for his historical subjects.' },
    { name: 'Gustave Doré', slug: 'gustave-dore', nationality: 'French', birthYear: 1832, deathYear: 1883, bioShort: 'A French artist, printmaker, illustrator, and sculptor.' },
    { name: 'Henri Fantin-Latour', slug: 'henri-fantin-latour', nationality: 'French', birthYear: 1836, deathYear: 1904, bioShort: 'A French painter and lithographer known for his flower paintings and group portraits.' },
    { name: 'Rosa Bonheur', slug: 'rosa-bonheur', nationality: 'French', birthYear: 1822, deathYear: 1899, bioShort: 'A French artist known for her realistic paintings of animals.' },

    // British
    { name: 'George Romney', slug: 'george-romney', nationality: 'British', birthYear: 1734, deathYear: 1802, bioShort: 'An English portrait painter known for his many portraits of Emma Hamilton.' },
    { name: 'Henry Raeburn', slug: 'henry-raeburn', nationality: 'Scottish', birthYear: 1756, deathYear: 1823, bioShort: 'Scotland\'s portrait painter, known for his bold brushwork.' },
    { name: 'Thomas Lawrence', slug: 'thomas-lawrence', nationality: 'British', birthYear: 1769, deathYear: 1830, bioShort: 'A leading English portrait painter and president of the Royal Academy.' },
    { name: 'Edwin Landseer', slug: 'edwin-landseer', nationality: 'British', birthYear: 1802, deathYear: 1873, bioShort: 'An English painter known for his animal paintings, particularly dogs and deer.' },
    { name: 'John Everett Millais', slug: 'john-everett-millais', nationality: 'British', birthYear: 1829, deathYear: 1896, bioShort: 'A founder of the Pre-Raphaelite Brotherhood.' },
    { name: 'Dante Gabriel Rossetti', slug: 'dante-gabriel-rossetti', nationality: 'British', birthYear: 1828, deathYear: 1882, bioShort: 'A founder of the Pre-Raphaelite Brotherhood, also a poet.' },
    { name: 'William Holman Hunt', slug: 'william-holman-hunt', nationality: 'British', birthYear: 1827, deathYear: 1910, bioShort: 'A founder of the Pre-Raphaelite Brotherhood.' },
    { name: 'Ford Madox Brown', slug: 'ford-madox-brown', nationality: 'British', birthYear: 1821, deathYear: 1893, bioShort: 'An English painter associated with the Pre-Raphaelite Brotherhood.' },
    { name: 'Edward Burne-Jones', slug: 'edward-burne-jones', nationality: 'British', birthYear: 1833, deathYear: 1898, bioShort: 'A British artist and designer associated with the Pre-Raphaelite movement.' },
    { name: 'Frederic Leighton', slug: 'frederic-leighton', nationality: 'British', birthYear: 1830, deathYear: 1896, bioShort: 'An English painter and sculptor known for his grand historical paintings.' },
    { name: 'Lawrence Alma-Tadema', slug: 'lawrence-alma-tadema', nationality: 'Dutch-British', birthYear: 1836, deathYear: 1912, bioShort: 'A painter known for his luxurious depictions of the ancient world.' },
    { name: 'John William Waterhouse', slug: 'john-william-waterhouse', nationality: 'British', birthYear: 1849, deathYear: 1917, bioShort: 'An English painter known for his Pre-Raphaelite style works.' },

    // American
    { name: 'Gilbert Stuart', slug: 'gilbert-stuart', nationality: 'American', birthYear: 1755, deathYear: 1828, bioShort: 'An American painter known for his portraits of the first six U.S. presidents.' },
    { name: 'Emanuel Leutze', slug: 'emanuel-leutze', nationality: 'German-American', birthYear: 1816, deathYear: 1868, bioShort: 'Best known for his painting Washington Crossing the Delaware.' },
    { name: 'George Caleb Bingham', slug: 'george-caleb-bingham', nationality: 'American', birthYear: 1811, deathYear: 1879, bioShort: 'An American artist known for his paintings depicting American frontier life.' },
    { name: 'Eastman Johnson', slug: 'eastman-johnson', nationality: 'American', birthYear: 1824, deathYear: 1906, bioShort: 'An American painter and co-founder of the Metropolitan Museum of Art.' },
    { name: 'Martin Johnson Heade', slug: 'martin-johnson-heade', nationality: 'American', birthYear: 1819, deathYear: 1904, bioShort: 'An American painter known for his seascapes, salt marshes, and hummingbirds.' },
    { name: 'Asher Brown Durand', slug: 'asher-brown-durand', nationality: 'American', birthYear: 1796, deathYear: 1886, bioShort: 'A key figure in the Hudson River School.' },
    { name: 'George Inness', slug: 'george-inness', nationality: 'American', birthYear: 1825, deathYear: 1894, bioShort: 'An American landscape painter, influenced by the Hudson River School.' },
    { name: 'William Merritt Chase', slug: 'william-merritt-chase', nationality: 'American', birthYear: 1849, deathYear: 1916, bioShort: 'An American painter known for his Impressionist portraits and landscapes.' },
    { name: 'Childe Hassam', slug: 'childe-hassam', nationality: 'American', birthYear: 1859, deathYear: 1935, bioShort: 'A prominent American Impressionist painter.' },
    { name: 'George Bellows', slug: 'george-bellows', nationality: 'American', birthYear: 1882, deathYear: 1925, bioShort: 'An American realist painter known for his boxing scenes and urban landscapes.' },
    { name: 'John James Audubon', slug: 'john-james-audubon', nationality: 'American', birthYear: 1785, deathYear: 1851, bioShort: 'An American ornithologist, naturalist, and painter known for The Birds of America.' },
  ];

  let artistCount = 0;
  for (const artist of artists) {
    try {
      await prisma.artist.upsert({
        where: { slug: artist.slug },
        update: {},
        create: artist,
      });
      artistCount++;
    } catch (e) {
      // Skip
    }
  }
  console.log(`Created ${artistCount} artists`);

  // Get maps
  const artistMap: Record<string, string> = {};
  const allArtists = await prisma.artist.findMany({ select: { id: true, slug: true } });
  for (const a of allArtists) artistMap[a.slug] = a.id;

  const museumMap: Record<string, string> = {};
  const allMuseums = await prisma.museum.findMany({ select: { id: true, slug: true } });
  for (const m of allMuseums) museumMap[m.slug] = m.id;

  // MASSIVE artwork list
  const artworks = [
    // Cimabue
    { title: 'Maestà of Santa Trinita', slug: 'maesta-santa-trinita', artistSlug: 'cimabue', museumSlug: 'uffizi-gallery', year: 1290, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Cimabue_Trinita_Madonna.jpg' },

    // Duccio
    { title: 'Maestà', slug: 'maesta-duccio', artistSlug: 'duccio', museumSlug: null, year: 1311, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Duccio_di_Buoninsegna_-_Maest%C3%A0_%28front%29_-_WGA06742.jpg' },

    // Simone Martini
    { title: 'Annunciation with St. Margaret and St. Ansanus', slug: 'annunciation-simone-martini', artistSlug: 'simone-martini', museumSlug: 'uffizi-gallery', year: 1333, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Simone_Martini_-_The_Annunciation_and_Two_Saints_-_WGA21438.jpg' },

    // Gentile da Fabriano
    { title: 'Adoration of the Magi', slug: 'adoration-magi-gentile', artistSlug: 'gentile-da-fabriano', museumSlug: 'uffizi-gallery', year: 1423, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Gentile_da_Fabriano_001.jpg' },

    // Benozzo Gozzoli
    { title: 'Procession of the Magi', slug: 'procession-magi-gozzoli', artistSlug: 'benozzo-gozzoli', museumSlug: null, year: 1459, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Gozzoli_magi.jpg' },

    // Ghirlandaio
    { title: 'Portrait of an Old Man and His Grandson', slug: 'old-man-grandson', artistSlug: 'domenico-ghirlandaio', museumSlug: 'louvre', year: 1490, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Domenico_Ghirlandaio_-_An_Old_Man_and_his_Grandson_-_WGA8770.jpg' },

    // Signorelli
    { title: 'The Damned Cast into Hell', slug: 'damned-cast-hell', artistSlug: 'luca-signorelli', museumSlug: null, year: 1500, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Signorelli-Damned.jpg' },

    // Carpaccio
    { title: 'The Miracle of the Relic of the Cross at the Ponte di Rialto', slug: 'miracle-relic-cross', artistSlug: 'vittore-carpaccio', museumSlug: 'gallerie-dell-accademia-venice', year: 1496, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Vittore_carpaccio%2C_Miracle_of_the_Relic_of_the_Cross_at_the_Ponte_di_Rialto.jpg' },

    // Robert Campin
    { title: 'Mérode Altarpiece', slug: 'merode-altarpiece', artistSlug: 'robert-campin', museumSlug: 'metropolitan-museum-of-art', year: 1428, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Robert_Campin_-_L%27_Annonciation_-_1425.jpg' },

    // Hugo van der Goes
    { title: 'Portinari Altarpiece', slug: 'portinari-altarpiece', artistSlug: 'hugo-van-der-goes', museumSlug: 'uffizi-gallery', year: 1475, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Hugo_van_der_Goes_004.jpg' },

    // Gerard David
    { title: 'The Judgment of Cambyses', slug: 'judgment-cambyses', artistSlug: 'gerard-david', museumSlug: 'groeningemuseum', year: 1498, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Gerard_David_-_The_Judgment_of_Cambyses%2C_panel_1_-_The_capture_of_the_unjust_judge_Sisamnes.jpg' },

    // Quentin Matsys
    { title: 'The Moneylender and His Wife', slug: 'moneylender-wife', artistSlug: 'quentin-matsys', museumSlug: 'louvre', year: 1514, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Quentin_Massys_001.jpg' },

    // Joachim Patinir
    { title: 'Landscape with the Flight into Egypt', slug: 'landscape-flight-egypt', artistSlug: 'joachim-patinir', museumSlug: null, year: 1520, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Joachim_Patinir_003.jpg' },

    // Hendrick Avercamp
    { title: 'Winter Landscape with Ice Skaters', slug: 'winter-landscape-skaters', artistSlug: 'hendrick-avercamp', museumSlug: 'rijksmuseum', year: 1608, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Hendrick_Avercamp_-_Winterlandschap_met_ijsvermaak.jpg' },

    // Jan van Goyen
    { title: 'View of Dordrecht', slug: 'view-dordrecht', artistSlug: 'jan-van-goyen', museumSlug: null, year: 1644, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jan_van_Goyen_-_View_of_Dordrecht_from_the_Dordtse_Kil_-_Google_Art_Project.jpg' },

    // Jan Steen
    { title: 'The Feast of Saint Nicholas', slug: 'feast-saint-nicholas', artistSlug: 'jan-steen', museumSlug: 'rijksmuseum', year: 1665, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Jan_Havicksz._Steen_-_Het_Sint_Nicolaasfeest_-_Google_Art_Project.jpg' },
    { title: 'The Merry Family', slug: 'merry-family', artistSlug: 'jan-steen', museumSlug: 'rijksmuseum', year: 1668, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Jan_Steen_-_De_vrolijke_huisgezin.jpg' },

    // Adriaen Brouwer
    { title: 'Smokers in an Inn', slug: 'smokers-inn', artistSlug: 'adriaen-brouwer', museumSlug: 'metropolitan-museum-of-art', year: 1636, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Adriaen_Brouwer_-_Inn_with_Drunken_Peasants.jpg' },

    // David Teniers
    { title: 'Archduke Leopold Wilhelm in his Gallery at Brussels', slug: 'archduke-gallery', artistSlug: 'david-teniers-younger', museumSlug: 'kunsthistorisches-museum', year: 1651, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/David_Teniers_d._J._-_Erzherzog_Leopold_Wilhelm_in_seiner_Galerie_in_Br%C3%BCssel_-_GG_739_-_Kunsthistorisches_Museum.jpg' },

    // Gabriel Metsu
    { title: 'Man Writing a Letter', slug: 'man-writing-letter', artistSlug: 'gabriel-metsu', museumSlug: null, year: 1665, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Metsu_Man_writing_letter.jpg' },
    { title: 'Woman Reading a Letter', slug: 'woman-reading-letter-metsu', artistSlug: 'gabriel-metsu', museumSlug: null, year: 1665, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Gabriel_Metsu_-_Woman_Reading_a_Letter_-_WGA15104.jpg' },

    // Annibale Carracci
    { title: 'The Triumph of Bacchus and Ariadne', slug: 'triumph-bacchus-ariadne', artistSlug: 'annibale-carracci', museumSlug: null, year: 1602, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Triumph_of_Bacchus_and_Ariadne.jpg' },
    { title: 'The Bean Eater', slug: 'bean-eater', artistSlug: 'annibale-carracci', museumSlug: null, year: 1584, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Annibale_Carracci_The_Beaneater.jpg' },

    // Artemisia Gentileschi
    { title: 'Judith Slaying Holofernes', slug: 'judith-slaying-holofernes-artemisia', artistSlug: 'artemisia-gentileschi', museumSlug: 'uffizi-gallery', year: 1620, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Artemisia_Gentileschi_-_Judith_Slaying_Holofernes_-_WGA8563.jpg' },
    { title: 'Self-Portrait as the Allegory of Painting', slug: 'self-portrait-allegory-painting', artistSlug: 'artemisia-gentileschi', museumSlug: null, year: 1639, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg' },

    // Pietro da Cortona
    { title: 'Triumph of Divine Providence', slug: 'triumph-divine-providence', artistSlug: 'pietro-da-cortona', museumSlug: null, year: 1639, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Cortona_Triumph_of_Divine_Providence_01.jpg' },

    // Salvator Rosa
    { title: 'Self-Portrait', slug: 'self-portrait-salvator-rosa', artistSlug: 'salvator-rosa', museumSlug: 'national-gallery', year: 1645, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Salvator_Rosa_-_Self-Portrait_-_WGA20054.jpg' },

    // Georges de La Tour
    { title: 'The Cheat with the Ace of Clubs', slug: 'cheat-ace-clubs', artistSlug: 'georges-de-la-tour', museumSlug: null, year: 1635, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Georges_de_La_Tour_-_The_Cheat_with_the_Ace_of_Clubs_-_Google_Art_Project.jpg' },
    { title: 'The Penitent Magdalen', slug: 'penitent-magdalen-la-tour', artistSlug: 'georges-de-la-tour', museumSlug: 'metropolitan-museum-of-art', year: 1640, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Georges_de_La_Tour_-_The_Magdalen_with_the_Smoking_Flame_-_Google_Art_Project.jpg' },

    // Claude Lorrain
    { title: 'Landscape with the Marriage of Isaac and Rebecca', slug: 'landscape-isaac-rebecca', artistSlug: 'claude-lorrain', museumSlug: 'national-gallery', year: 1648, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Claude_Lorrain_-_Landscape_with_the_Marriage_of_Isaac_and_Rebecca_-_WGA05010.jpg' },
    { title: 'Seaport with the Embarkation of the Queen of Sheba', slug: 'seaport-queen-sheba', artistSlug: 'claude-lorrain', museumSlug: 'national-gallery', year: 1648, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Claude_Lorrain_-_Seaport_with_the_Embarkation_of_the_Queen_of_Sheba_-_Google_Art_Project.jpg' },

    // Nicolas Poussin
    { title: 'Et in Arcadia Ego', slug: 'et-in-arcadia-ego', artistSlug: 'nicolas-poussin', museumSlug: 'louvre', year: 1638, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28deuxi%C3%A8me_version%29.jpg' },
    { title: 'The Rape of the Sabine Women', slug: 'rape-sabine-women', artistSlug: 'nicolas-poussin', museumSlug: 'louvre', year: 1638, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/L%27Enl%C3%A8vement_des_Sabines_%281637-1638%29%2C_Paris%2C_mus%C3%A9e_du_Louvre.jpg' },

    // Élisabeth Vigée Le Brun
    { title: 'Marie Antoinette with a Rose', slug: 'marie-antoinette-rose', artistSlug: 'elisabeth-vigee-le-brun', museumSlug: null, year: 1783, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Marie_Antoinette_in_a_Court_Dress.jpg' },
    { title: 'Self-Portrait in a Straw Hat', slug: 'self-portrait-straw-hat', artistSlug: 'elisabeth-vigee-le-brun', museumSlug: 'national-gallery', year: 1782, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg' },

    // Jean-Léon Gérôme
    { title: 'Pollice Verso', slug: 'pollice-verso', artistSlug: 'jean-leon-gerome', museumSlug: null, year: 1872, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Pollice_Verso_-_Google_Art_Project.jpg' },
    { title: 'The Slave Market', slug: 'slave-market-gerome', artistSlug: 'jean-leon-gerome', museumSlug: null, year: 1866, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Slave_Market_-_Google_Art_Project.jpg' },

    // Bouguereau
    { title: 'The Birth of Venus', slug: 'birth-venus-bouguereau', artistSlug: 'william-adolphe-bouguereau', museumSlug: 'musee-dorsay', year: 1879, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg' },
    { title: 'Nymphs and Satyr', slug: 'nymphs-satyr', artistSlug: 'william-adolphe-bouguereau', museumSlug: null, year: 1873, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/William-Adolphe_Bouguereau_%281825-1905%29_-_Nymphs_and_Satyr_%281873%29.jpg' },

    // Cabanel
    { title: 'The Birth of Venus', slug: 'birth-venus-cabanel', artistSlug: 'alexandre-cabanel', museumSlug: 'musee-dorsay', year: 1863, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project.jpg' },

    // Gustave Doré
    { title: 'Dante and Virgil in the Ninth Circle of Hell', slug: 'dante-virgil-ninth-circle', artistSlug: 'gustave-dore', museumSlug: null, year: 1861, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Gustave_Dore_Inferno34.jpg' },

    // Fantin-Latour
    { title: 'A Studio at Les Batignolles', slug: 'studio-batignolles', artistSlug: 'henri-fantin-latour', museumSlug: 'musee-dorsay', year: 1870, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Fantin-Latour_Atelier_Batignolles.jpg' },
    { title: 'White Roses', slug: 'white-roses-fantin', artistSlug: 'henri-fantin-latour', museumSlug: null, year: 1875, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Henri_Fantin-Latour_-_White_Roses%2C_Chrysanthemums_in_a_Vase%2C_Peaches_and_Grapes_on_a_Table_with_a_White_Tablecloth_-_Google_Art_Project.jpg' },

    // Rosa Bonheur
    { title: 'The Horse Fair', slug: 'horse-fair', artistSlug: 'rosa-bonheur', museumSlug: 'metropolitan-museum-of-art', year: 1853, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Rosa_bonheur_horse_fair_1835_55.jpg' },

    // Millais
    { title: 'Ophelia', slug: 'ophelia', artistSlug: 'john-everett-millais', museumSlug: 'tate-britain', year: 1852, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg' },
    { title: 'Christ in the House of His Parents', slug: 'christ-house-parents', artistSlug: 'john-everett-millais', museumSlug: 'tate-britain', year: 1850, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/John_Everett_Millais_-_Christ_in_the_House_of_His_Parents_%28%60The_Carpenter%27s_Shop%27%29_-_Google_Art_Project.jpg' },

    // Rossetti
    { title: 'Beata Beatrix', slug: 'beata-beatrix', artistSlug: 'dante-gabriel-rossetti', museumSlug: 'tate-britain', year: 1870, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Dante_Gabriel_Rossetti_-_Beata_Beatrix%2C_1864-1870.jpg' },
    { title: 'Proserpine', slug: 'proserpine', artistSlug: 'dante-gabriel-rossetti', museumSlug: 'tate-britain', year: 1874, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Dante_Gabriel_Rossetti_-_Proserpine.jpg' },

    // Holman Hunt
    { title: 'The Light of the World', slug: 'light-of-world', artistSlug: 'william-holman-hunt', museumSlug: null, year: 1854, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/William_Holman_Hunt_-_The_Light_of_the_World_%281851-53%29.jpg' },

    // Burne-Jones
    { title: 'The Golden Stairs', slug: 'golden-stairs', artistSlug: 'edward-burne-jones', museumSlug: 'tate-britain', year: 1880, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Edward_Burne-Jones_-_The_Golden_Stairs_-_Google_Art_Project.jpg' },

    // Leighton
    { title: 'Flaming June', slug: 'flaming-june', artistSlug: 'frederic-leighton', museumSlug: null, year: 1895, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flaming_June%2C_by_Frederic_Lord_Leighton_%281830-1896%29.jpg' },

    // Alma-Tadema
    { title: 'The Roses of Heliogabalus', slug: 'roses-heliogabalus', artistSlug: 'lawrence-alma-tadema', museumSlug: null, year: 1888, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/The_Roses_of_Heliogabalus.jpg' },
    { title: 'A Favorite Custom', slug: 'favorite-custom', artistSlug: 'lawrence-alma-tadema', museumSlug: 'tate-britain', year: 1909, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Alma_Tadema_A_Favorite_Custom.jpg' },

    // Waterhouse
    { title: 'The Lady of Shalott', slug: 'lady-of-shalott', artistSlug: 'john-william-waterhouse', museumSlug: 'tate-britain', year: 1888, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg' },
    { title: 'Hylas and the Nymphs', slug: 'hylas-nymphs', artistSlug: 'john-william-waterhouse', museumSlug: null, year: 1896, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Waterhouse_Hylas_and_the_Nymphs_Manchester_Art_Gallery_1896.15.jpg' },
    { title: 'Circe Offering the Cup to Ulysses', slug: 'circe-offering-cup', artistSlug: 'john-william-waterhouse', museumSlug: null, year: 1891, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Circe_Offering_the_Cup_to_Odysseus.jpg' },

    // Gilbert Stuart
    { title: 'George Washington (Lansdowne portrait)', slug: 'george-washington-lansdowne', artistSlug: 'gilbert-stuart', museumSlug: 'national-gallery-of-art', year: 1796, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Gilbert_Stuart_-_George_Washington_%28Lansdowne_Portrait%29_-_Google_Art_Project.jpg' },

    // Emanuel Leutze
    { title: 'Washington Crossing the Delaware', slug: 'washington-crossing-delaware', artistSlug: 'emanuel-leutze', museumSlug: 'metropolitan-museum-of-art', year: 1851, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg' },

    // George Caleb Bingham
    { title: 'Fur Traders Descending the Missouri', slug: 'fur-traders-missouri', artistSlug: 'george-caleb-bingham', museumSlug: 'metropolitan-museum-of-art', year: 1845, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/George_Caleb_Bingham_-_Fur_Traders_Descending_the_Missouri_-_Google_Art_Project.jpg' },

    // Eastman Johnson
    { title: 'A Ride for Liberty – The Fugitive Slaves', slug: 'ride-for-liberty', artistSlug: 'eastman-johnson', museumSlug: 'brooklyn-museum', year: 1862, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Eastman_Johnson_-_%27A_Ride_for_Liberty_--_The_Fugitive_Slaves%27%2C_oil_on_board%2C_c._1862%2C_Brooklyn_Museum.jpg' },

    // Martin Johnson Heade
    { title: 'Cattleya Orchid and Three Hummingbirds', slug: 'cattleya-orchid-hummingbirds', artistSlug: 'martin-johnson-heade', museumSlug: 'national-gallery-of-art', year: 1871, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Martin_Johnson_Heade_-_Cattleya_Orchid_and_Three_Hummingbirds_-_Google_Art_Project.jpg' },

    // Asher Durand
    { title: 'Kindred Spirits', slug: 'kindred-spirits', artistSlug: 'asher-brown-durand', museumSlug: null, year: 1849, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Asher_Brown_Durand_-_Kindred_Spirits_%28Durand%29.jpg' },

    // George Inness
    { title: 'The Lackawanna Valley', slug: 'lackawanna-valley', artistSlug: 'george-inness', museumSlug: 'national-gallery-of-art', year: 1855, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Inness_Lackawanna.jpg' },

    // William Merritt Chase
    { title: 'A Friendly Call', slug: 'friendly-call', artistSlug: 'william-merritt-chase', museumSlug: 'national-gallery-of-art', year: 1895, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/A_Friendly_Call_William_Merritt_Chase.jpeg' },

    // Childe Hassam
    { title: 'The Avenue in the Rain', slug: 'avenue-in-rain', artistSlug: 'childe-hassam', museumSlug: null, year: 1917, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Hassam_Avenue_in_the_rain.jpg' },
    { title: 'Allies Day, May 1917', slug: 'allies-day', artistSlug: 'childe-hassam', museumSlug: 'national-gallery-of-art', year: 1917, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Childe_Hassam_-_Allies_Day%2C_May_1917_-_Google_Art_Project.jpg' },

    // George Bellows
    { title: 'Stag at Sharkey\'s', slug: 'stag-sharkeys', artistSlug: 'george-bellows', museumSlug: 'cleveland-museum-of-art', year: 1909, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/George_Bellows_-_Stag_at_Sharkey%27s_-_Google_Art_Project.jpg' },
    { title: 'Dempsey and Firpo', slug: 'dempsey-firpo', artistSlug: 'george-bellows', museumSlug: null, year: 1924, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/George_Bellows_-_Dempsey_and_Firpo.jpg' },

    // Audubon
    { title: 'Wild Turkey', slug: 'wild-turkey', artistSlug: 'john-james-audubon', museumSlug: null, year: 1827, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Audubon_wild_turkey.jpg' },
  ];

  let artworkCount = 0;
  for (const artwork of artworks) {
    const artistId = artistMap[artwork.artistSlug];
    const museumId = artwork.museumSlug ? museumMap[artwork.museumSlug] : null;

    if (!artistId) {
      console.log(`Skipping ${artwork.title} - artist ${artwork.artistSlug} not found`);
      continue;
    }

    try {
      await prisma.artwork.upsert({
        where: { slug: artwork.slug },
        update: {},
        create: {
          title: artwork.title,
          slug: artwork.slug,
          artistId,
          museumId,
          year: artwork.year,
          imageUrl: artwork.imageUrl,
          searchVolumeTier: 2,
        },
      });
      artworkCount++;
    } catch (e) {
      // Skip
    }
  }
  console.log(`Created ${artworkCount} artworks`);

  // Final count
  const totalArtists = await prisma.artist.count();
  const totalArtworks = await prisma.artwork.count();
  const totalMuseums = await prisma.museum.count();
  const totalMovements = await prisma.movement.count();

  console.log('\n=== FINAL DATABASE COUNTS ===');
  console.log('Artists:', totalArtists);
  console.log('Artworks:', totalArtworks);
  console.log('Museums:', totalMuseums);
  console.log('Movements:', totalMovements);

  await prisma.$disconnect();
}

main().catch(console.error);
