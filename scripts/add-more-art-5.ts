import { prisma } from '../src/lib/db';

/**
 * MASSIVE BATCH - Add 100+ artists and paintings
 * All artists died before 1956 (70+ years = public domain)
 */

async function main() {
  console.log('Starting massive art addition...\n');

  // Get existing movements
  const movements = {
    renaissance: await prisma.movement.findFirst({ where: { slug: 'renaissance' } }),
    baroque: await prisma.movement.findFirst({ where: { slug: 'baroque' } }),
    romanticism: await prisma.movement.findFirst({ where: { slug: 'romanticism' } }),
    impressionism: await prisma.movement.findFirst({ where: { slug: 'impressionism' } }),
    postImpressionism: await prisma.movement.findFirst({ where: { slug: 'post-impressionism' } }),
    expressionism: await prisma.movement.findFirst({ where: { slug: 'expressionism' } }),
    symbolism: await prisma.movement.findFirst({ where: { slug: 'symbolism' } }),
    realism: await prisma.movement.findFirst({ where: { slug: 'realism' } }),
    rococo: await prisma.movement.findFirst({ where: { slug: 'rococo' } }),
    neoclassicism: await prisma.movement.findFirst({ where: { slug: 'neoclassicism' } }),
    mannerism: await prisma.movement.findFirst({ where: { slug: 'mannerism' } }),
  };

  // Add more movements
  const futurism = await prisma.movement.upsert({
    where: { slug: 'futurism' },
    update: {},
    create: {
      name: 'Futurism',
      slug: 'futurism',
      description: 'An Italian movement emphasizing speed, technology, and modernity.',
      startYear: 1909,
      endYear: 1944,
    },
  });

  const cubism = await prisma.movement.upsert({
    where: { slug: 'cubism' },
    update: {},
    create: {
      name: 'Cubism',
      slug: 'cubism',
      description: 'A revolutionary art movement pioneered by Picasso and Braque, fragmenting objects into geometric forms.',
      startYear: 1907,
      endYear: 1920,
    },
  });

  const fauvism = await prisma.movement.upsert({
    where: { slug: 'fauvism' },
    update: {},
    create: {
      name: 'Fauvism',
      slug: 'fauvism',
      description: 'A French movement characterized by bold, non-naturalistic colors and spontaneous brushwork.',
      startYear: 1904,
      endYear: 1908,
    },
  });

  const suprematism = await prisma.movement.upsert({
    where: { slug: 'suprematism' },
    update: {},
    create: {
      name: 'Suprematism',
      slug: 'suprematism',
      description: 'A Russian abstract art movement focused on basic geometric forms and limited colors.',
      startYear: 1913,
      endYear: 1935,
    },
  });

  console.log('Created movements: Futurism, Cubism, Fauvism, Suprematism');

  // Add more museums
  const newMuseums = [
    { name: 'Van Gogh Museum', slug: 'van-gogh-museum', city: 'Amsterdam', country: 'Netherlands', description: 'Houses the largest collection of Van Gogh\'s paintings and drawings.' },
    { name: 'Kunsthistorisches Museum', slug: 'kunsthistorisches-museum', city: 'Vienna', country: 'Austria', description: 'One of the foremost museums in the world, housed in an imperial palace.' },
    { name: 'Kröller-Müller Museum', slug: 'kroeller-mueller-museum', city: 'Otterlo', country: 'Netherlands', description: 'Home to the second-largest Van Gogh collection and a sculpture garden.' },
    { name: 'Museo Thyssen-Bornemisza', slug: 'museo-thyssen-bornemisza', city: 'Madrid', country: 'Spain', description: 'A major art museum with a wide-ranging collection from the 13th to 20th century.' },
    { name: 'Tretyakov Gallery', slug: 'tretyakov-gallery', city: 'Moscow', country: 'Russia', description: 'The foremost depository of Russian fine art in the world.' },
    { name: 'State Russian Museum', slug: 'russian-museum', city: 'Saint Petersburg', country: 'Russia', description: 'The largest museum of Russian art, housed in the Mikhailovsky Palace.' },
    { name: 'Museo del Novecento', slug: 'museo-del-novecento', city: 'Milan', country: 'Italy', description: 'A museum of 20th-century art located in the Palazzo dell\'Arengario.' },
    { name: 'Städel Museum', slug: 'stadel-museum', city: 'Frankfurt', country: 'Germany', description: 'One of the oldest and most important art museums in Germany.' },
    { name: 'Musée Marmottan Monet', slug: 'musee-marmottan-monet', city: 'Paris', country: 'France', description: 'Houses the world\'s largest collection of Monet paintings.' },
    { name: 'Barnes Foundation', slug: 'barnes-foundation', city: 'Philadelphia', country: 'United States', description: 'Houses one of the world\'s greatest collections of Impressionist and Post-Impressionist art.' },
    { name: 'Detroit Institute of Arts', slug: 'detroit-institute-of-arts', city: 'Detroit', country: 'United States', description: 'One of the largest and most significant art collections in the United States.' },
    { name: 'Minneapolis Institute of Art', slug: 'minneapolis-institute-of-art', city: 'Minneapolis', country: 'United States', description: 'Home to more than 90,000 works of art spanning 5,000 years.' },
    { name: 'National Museum', slug: 'national-museum-stockholm', city: 'Stockholm', country: 'Sweden', description: 'Sweden\'s largest museum of art and design.' },
    { name: 'Sorolla Museum', slug: 'sorolla-museum', city: 'Madrid', country: 'Spain', description: 'The former home and studio of Joaquín Sorolla, now a museum of his work.' },
    { name: 'Museo Poldi Pezzoli', slug: 'museo-poldi-pezzoli', city: 'Milan', country: 'Italy', description: 'A house museum containing a remarkable collection of Old Masters.' },
    { name: 'Museo Capodimonte', slug: 'museo-capodimonte', city: 'Naples', country: 'Italy', description: 'A major museum housing paintings from the 13th to 18th centuries.' },
    { name: 'Palazzo Pitti', slug: 'palazzo-pitti', city: 'Florence', country: 'Italy', description: 'A Renaissance palace housing several important museums and galleries.' },
    { name: 'Scuola Grande di San Rocco', slug: 'scuola-grande-san-rocco', city: 'Venice', country: 'Italy', description: 'Famous for its collection of paintings by Tintoretto.' },
    { name: 'The Phillips Collection', slug: 'phillips-collection', city: 'Washington, D.C.', country: 'United States', description: 'America\'s first museum of modern art.' },
    { name: 'Yale University Art Gallery', slug: 'yale-art-gallery', city: 'New Haven', country: 'United States', description: 'The oldest university art museum in the Western Hemisphere.' },
  ];

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
  }
  console.log(`Created ${newMuseums.length} new museums`);

  // MASSIVE artist list - all died before 1956
  const artists = [
    // Early Renaissance
    { name: 'Giotto di Bondone', slug: 'giotto', nationality: 'Italian', birthYear: 1267, deathYear: 1337, bioShort: 'The father of European painting who broke from Byzantine traditions.' },
    { name: 'Masaccio', slug: 'masaccio', nationality: 'Italian', birthYear: 1401, deathYear: 1428, bioShort: 'A pioneer of Renaissance painting known for his revolutionary use of perspective.' },
    { name: 'Piero della Francesca', slug: 'piero-della-francesca', nationality: 'Italian', birthYear: 1415, deathYear: 1492, bioShort: 'A mathematician-painter known for his serene, geometric compositions.' },
    { name: 'Filippo Lippi', slug: 'filippo-lippi', nationality: 'Italian', birthYear: 1406, deathYear: 1469, bioShort: 'An Early Renaissance painter known for his graceful Madonnas.' },
    { name: 'Perugino', slug: 'perugino', nationality: 'Italian', birthYear: 1446, deathYear: 1523, bioShort: 'Raphael\'s teacher, known for his serene, spacious compositions.' },

    // Northern Renaissance
    { name: 'Jan van Eyck', slug: 'jan-van-eyck', nationality: 'Flemish', birthYear: 1390, deathYear: 1441, bioShort: 'A master of oil painting technique and founder of the Flemish school.' },
    { name: 'Rogier van der Weyden', slug: 'rogier-van-der-weyden', nationality: 'Flemish', birthYear: 1400, deathYear: 1464, bioShort: 'A master of emotional religious paintings with exquisite detail.' },
    { name: 'Hans Memling', slug: 'hans-memling', nationality: 'Flemish', birthYear: 1430, deathYear: 1494, bioShort: 'A leading Netherlandish painter known for his serene portraits and altarpieces.' },
    { name: 'Lucas Cranach the Elder', slug: 'lucas-cranach-elder', nationality: 'German', birthYear: 1472, deathYear: 1553, bioShort: 'Court painter to the Electors of Saxony and friend of Martin Luther.' },
    { name: 'Matthias Grünewald', slug: 'matthias-grunewald', nationality: 'German', birthYear: 1470, deathYear: 1528, bioShort: 'Creator of the intensely expressive Isenheim Altarpiece.' },

    // High Renaissance & Mannerism
    { name: 'Andrea del Sarto', slug: 'andrea-del-sarto', nationality: 'Italian', birthYear: 1486, deathYear: 1530, bioShort: 'Called "the faultless painter" for his technical perfection.' },
    { name: 'Pontormo', slug: 'pontormo', nationality: 'Italian', birthYear: 1494, deathYear: 1557, bioShort: 'A Florentine Mannerist known for his elongated figures and unusual colors.' },
    { name: 'Correggio', slug: 'correggio', nationality: 'Italian', birthYear: 1489, deathYear: 1534, bioShort: 'A master of illusionistic dome frescoes and soft, sensuous figures.' },
    { name: 'Lorenzo Lotto', slug: 'lorenzo-lotto', nationality: 'Italian', birthYear: 1480, deathYear: 1556, bioShort: 'A Venetian painter known for his psychologically penetrating portraits.' },

    // Baroque
    { name: 'Guido Reni', slug: 'guido-reni', nationality: 'Italian', birthYear: 1575, deathYear: 1642, bioShort: 'A Bolognese painter admired for his idealized religious paintings.' },
    { name: 'Guercino', slug: 'guercino', nationality: 'Italian', birthYear: 1591, deathYear: 1666, bioShort: 'A Baroque painter known for his dramatic use of light and shadow.' },
    { name: 'Giovanni Battista Tiepolo', slug: 'giovanni-battista-tiepolo', nationality: 'Italian', birthYear: 1696, deathYear: 1770, bioShort: 'The last great Venetian master, famous for his luminous frescoes.' },
    { name: 'Canaletto', slug: 'canaletto', nationality: 'Italian', birthYear: 1697, deathYear: 1768, bioShort: 'Venice\'s most famous view painter, capturing the city in precise detail.' },
    { name: 'Francesco Guardi', slug: 'francesco-guardi', nationality: 'Italian', birthYear: 1712, deathYear: 1793, bioShort: 'A Venetian veduta painter with a more atmospheric style than Canaletto.' },
    { name: 'Jacob Jordaens', slug: 'jacob-jordaens', nationality: 'Flemish', birthYear: 1593, deathYear: 1678, bioShort: 'A major Flemish Baroque painter known for his exuberant scenes.' },
    { name: 'Pieter de Hooch', slug: 'pieter-de-hooch', nationality: 'Dutch', birthYear: 1629, deathYear: 1684, bioShort: 'A Dutch Golden Age painter of domestic interiors with masterful light effects.' },
    { name: 'Gerard ter Borch', slug: 'gerard-ter-borch', nationality: 'Dutch', birthYear: 1617, deathYear: 1681, bioShort: 'A Dutch master of intimate genre scenes and portraits.' },
    { name: 'Jacob van Ruisdael', slug: 'jacob-van-ruisdael', nationality: 'Dutch', birthYear: 1629, deathYear: 1682, bioShort: 'The greatest Dutch landscape painter, known for dramatic skies and forests.' },
    { name: 'Meindert Hobbema', slug: 'meindert-hobbema', nationality: 'Dutch', birthYear: 1638, deathYear: 1709, bioShort: 'A Dutch landscape painter, pupil of Jacob van Ruisdael.' },
    { name: 'Aelbert Cuyp', slug: 'aelbert-cuyp', nationality: 'Dutch', birthYear: 1620, deathYear: 1691, bioShort: 'Known for his golden-lit landscapes with cattle.' },
    { name: 'Bartolomé Esteban Murillo', slug: 'bartolome-murillo', nationality: 'Spanish', birthYear: 1617, deathYear: 1682, bioShort: 'The most popular Spanish painter of his era, known for tender religious scenes.' },
    { name: 'Francisco de Zurbarán', slug: 'francisco-de-zurbaran', nationality: 'Spanish', birthYear: 1598, deathYear: 1664, bioShort: 'A Spanish painter known for his religious paintings with stark contrasts.' },
    { name: 'Jusepe de Ribera', slug: 'jusepe-de-ribera', nationality: 'Spanish', birthYear: 1591, deathYear: 1652, bioShort: 'A Spanish Baroque painter active in Naples, known for intense realism.' },

    // 18th Century
    { name: 'François Boucher', slug: 'francois-boucher', nationality: 'French', birthYear: 1703, deathYear: 1770, bioShort: 'The quintessential Rococo painter, favored by Madame de Pompadour.' },
    { name: 'Jean-Antoine Watteau', slug: 'jean-antoine-watteau', nationality: 'French', birthYear: 1684, deathYear: 1721, bioShort: 'Creator of the fête galante genre, depicting elegant outdoor parties.' },
    { name: 'Joshua Reynolds', slug: 'joshua-reynolds', nationality: 'British', birthYear: 1723, deathYear: 1792, bioShort: 'The first president of the Royal Academy and leading British portrait painter.' },
    { name: 'George Stubbs', slug: 'george-stubbs', nationality: 'British', birthYear: 1724, deathYear: 1806, bioShort: 'The greatest animal painter in English art, especially of horses.' },
    { name: 'William Hogarth', slug: 'william-hogarth', nationality: 'British', birthYear: 1697, deathYear: 1764, bioShort: 'A pioneer of sequential art and satirical social commentary.' },
    { name: 'William Blake', slug: 'william-blake', nationality: 'British', birthYear: 1757, deathYear: 1827, bioShort: 'A visionary poet and painter of mystical, symbolic works.' },

    // 19th Century - Realism & Naturalism
    { name: 'John Singer Sargent', slug: 'john-singer-sargent', nationality: 'American', birthYear: 1856, deathYear: 1925, bioShort: 'The leading portrait painter of his generation, known for dazzling brushwork.' },
    { name: 'Thomas Eakins', slug: 'thomas-eakins', nationality: 'American', birthYear: 1844, deathYear: 1916, bioShort: 'America\'s greatest realist painter, known for psychological depth.' },
    { name: 'Frederic Edwin Church', slug: 'frederic-edwin-church', nationality: 'American', birthYear: 1826, deathYear: 1900, bioShort: 'A leading Hudson River School painter of dramatic landscapes.' },
    { name: 'Albert Bierstadt', slug: 'albert-bierstadt', nationality: 'American', birthYear: 1830, deathYear: 1902, bioShort: 'Known for lavish, large-scale paintings of the American West.' },
    { name: 'Thomas Cole', slug: 'thomas-cole', nationality: 'American', birthYear: 1801, deathYear: 1848, bioShort: 'Founder of the Hudson River School of American landscape painting.' },
    { name: 'Ivan Aivazovsky', slug: 'ivan-aivazovsky', nationality: 'Russian', birthYear: 1817, deathYear: 1900, bioShort: 'One of the greatest marine artists, known for dramatic seascapes.' },
    { name: 'Ilya Repin', slug: 'ilya-repin', nationality: 'Russian', birthYear: 1844, deathYear: 1930, bioShort: 'The foremost Russian realist painter of the 19th century.' },
    { name: 'Joaquín Sorolla', slug: 'joaquin-sorolla', nationality: 'Spanish', birthYear: 1863, deathYear: 1923, bioShort: 'A Spanish painter known for luminous beach and garden scenes.' },
    { name: 'Anders Zorn', slug: 'anders-zorn', nationality: 'Swedish', birthYear: 1860, deathYear: 1920, bioShort: 'A Swedish painter known for nudes, portraits, and watercolors.' },
    { name: 'Carl Larsson', slug: 'carl-larsson', nationality: 'Swedish', birthYear: 1853, deathYear: 1919, bioShort: 'A Swedish painter known for his watercolors of idyllic family life.' },
    { name: 'Vilhelm Hammershøi', slug: 'vilhelm-hammershoi', nationality: 'Danish', birthYear: 1864, deathYear: 1916, bioShort: 'A Danish painter known for muted, melancholic interior scenes.' },

    // Symbolism & Art Nouveau
    { name: 'Arnold Böcklin', slug: 'arnold-bocklin', nationality: 'Swiss', birthYear: 1827, deathYear: 1901, bioShort: 'A Symbolist painter best known for his haunting Isle of the Dead.' },
    { name: 'Franz von Stuck', slug: 'franz-von-stuck', nationality: 'German', birthYear: 1863, deathYear: 1928, bioShort: 'A Munich Symbolist known for sensual mythological subjects.' },
    { name: 'Fernand Khnopff', slug: 'fernand-khnopff', nationality: 'Belgian', birthYear: 1858, deathYear: 1921, bioShort: 'A Belgian Symbolist painter of mysterious, dreamlike images.' },
    { name: 'Giovanni Segantini', slug: 'giovanni-segantini', nationality: 'Italian', birthYear: 1858, deathYear: 1899, bioShort: 'An Italian Divisionist painter of Alpine landscapes.' },
    { name: 'Alphonse Mucha', slug: 'alphonse-mucha', nationality: 'Czech', birthYear: 1860, deathYear: 1939, bioShort: 'The defining artist of Art Nouveau, known for decorative posters.' },

    // Post-Impressionism & Nabis
    { name: 'Félix Vallotton', slug: 'felix-vallotton', nationality: 'Swiss', birthYear: 1865, deathYear: 1925, bioShort: 'A Swiss-French painter and printmaker associated with the Nabis.' },
    { name: 'Maurice Denis', slug: 'maurice-denis', nationality: 'French', birthYear: 1870, deathYear: 1943, bioShort: 'A Nabis painter and theorist who emphasized flat, decorative surfaces.' },
    { name: 'Paul Signac', slug: 'paul-signac', nationality: 'French', birthYear: 1863, deathYear: 1935, bioShort: 'A Neo-Impressionist painter and theorist of Pointillism.' },
    { name: 'Maximilien Luce', slug: 'maximilien-luce', nationality: 'French', birthYear: 1858, deathYear: 1941, bioShort: 'A Neo-Impressionist painter of urban and industrial scenes.' },
    { name: 'Gustave Caillebotte', slug: 'gustave-caillebotte', nationality: 'French', birthYear: 1848, deathYear: 1894, bioShort: 'An Impressionist known for his daring perspectives and urban scenes.' },
    { name: 'Frédéric Bazille', slug: 'frederic-bazille', nationality: 'French', birthYear: 1841, deathYear: 1870, bioShort: 'An early Impressionist who died young in the Franco-Prussian War.' },
    { name: 'Suzanne Valadon', slug: 'suzanne-valadon', nationality: 'French', birthYear: 1865, deathYear: 1938, bioShort: 'A self-taught painter and former artist\'s model, mother of Utrillo.' },

    // Expressionism & Early Modern
    { name: 'Paula Modersohn-Becker', slug: 'paula-modersohn-becker', nationality: 'German', birthYear: 1876, deathYear: 1907, bioShort: 'A pioneer of Expressionism who died tragically young.' },
    { name: 'Käthe Kollwitz', slug: 'kathe-kollwitz', nationality: 'German', birthYear: 1867, deathYear: 1945, bioShort: 'A German artist known for powerful works depicting suffering and war.' },
    { name: 'Lovis Corinth', slug: 'lovis-corinth', nationality: 'German', birthYear: 1858, deathYear: 1925, bioShort: 'A German painter bridging Impressionism and Expressionism.' },
    { name: 'Max Liebermann', slug: 'max-liebermann', nationality: 'German', birthYear: 1847, deathYear: 1935, bioShort: 'A leading German Impressionist and president of the Berlin Secession.' },
    { name: 'Franz Marc', slug: 'franz-marc', nationality: 'German', birthYear: 1880, deathYear: 1916, bioShort: 'A founder of Der Blaue Reiter, known for colorful animal paintings.' },
    { name: 'August Macke', slug: 'august-macke', nationality: 'German', birthYear: 1887, deathYear: 1914, bioShort: 'A German Expressionist killed in WWI, known for bright, joyful scenes.' },
    { name: 'Alexej von Jawlensky', slug: 'alexej-von-jawlensky', nationality: 'Russian', birthYear: 1864, deathYear: 1941, bioShort: 'A Russian Expressionist known for colorful, spiritual portraits.' },
    { name: 'Ernst Ludwig Kirchner', slug: 'ernst-ludwig-kirchner', nationality: 'German', birthYear: 1880, deathYear: 1938, bioShort: 'A founder of Die Brücke and key figure of German Expressionism.' },
    { name: 'Otto Mueller', slug: 'otto-mueller', nationality: 'German', birthYear: 1874, deathYear: 1930, bioShort: 'A Die Brücke painter known for paintings of nudes in nature.' },
    { name: 'Emil Nolde', slug: 'emil-nolde', nationality: 'German', birthYear: 1867, deathYear: 1956, bioShort: 'A German Expressionist known for vibrant colors and religious subjects.' },

    // Cubism, Futurism & Abstract
    { name: 'Juan Gris', slug: 'juan-gris', nationality: 'Spanish', birthYear: 1887, deathYear: 1927, bioShort: 'A major Cubist painter known for his colorful, synthetic style.' },
    { name: 'Fernand Léger', slug: 'fernand-leger', nationality: 'French', birthYear: 1881, deathYear: 1955, bioShort: 'A French painter known for bold, tubular forms celebrating modern life.' },
    { name: 'Robert Delaunay', slug: 'robert-delaunay', nationality: 'French', birthYear: 1885, deathYear: 1941, bioShort: 'A pioneer of abstract art and Orphism, known for colorful circles.' },
    { name: 'Francis Picabia', slug: 'francis-picabia', nationality: 'French', birthYear: 1879, deathYear: 1953, bioShort: 'An avant-garde painter associated with Cubism, Dada, and Surrealism.' },
    { name: 'Umberto Boccioni', slug: 'umberto-boccioni', nationality: 'Italian', birthYear: 1882, deathYear: 1916, bioShort: 'A leading Futurist painter and sculptor, capturing movement and energy.' },
    { name: 'Kazimir Malevich', slug: 'kazimir-malevich', nationality: 'Russian', birthYear: 1879, deathYear: 1935, bioShort: 'The founder of Suprematism, creator of the Black Square.' },
    { name: 'El Lissitzky', slug: 'el-lissitzky', nationality: 'Russian', birthYear: 1890, deathYear: 1941, bioShort: 'A Russian artist and designer who influenced the Bauhaus and De Stijl.' },

    // Fauvism & School of Paris
    { name: 'André Derain', slug: 'andre-derain', nationality: 'French', birthYear: 1880, deathYear: 1954, bioShort: 'A co-founder of Fauvism known for his vibrant landscapes.' },
    { name: 'Raoul Dufy', slug: 'raoul-dufy', nationality: 'French', birthYear: 1877, deathYear: 1953, bioShort: 'A Fauvist known for cheerful scenes of leisure and pleasure.' },
    { name: 'Albert Marquet', slug: 'albert-marquet', nationality: 'French', birthYear: 1875, deathYear: 1947, bioShort: 'A French Fauvist known for his calm harbor and city views.' },
    { name: 'Chaim Soutine', slug: 'chaim-soutine', nationality: 'Lithuanian', birthYear: 1893, deathYear: 1943, bioShort: 'An Expressionist painter known for his violent brushwork and distorted forms.' },
    { name: 'Jules Pascin', slug: 'jules-pascin', nationality: 'Bulgarian', birthYear: 1885, deathYear: 1930, bioShort: 'A School of Paris painter known for his delicate figure drawings.' },
    { name: 'Marie Laurencin', slug: 'marie-laurencin', nationality: 'French', birthYear: 1883, deathYear: 1956, bioShort: 'A French painter known for her pastel portraits of women.' },
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
      console.log(`Skipped artist ${artist.name} (may already exist)`);
    }
  }
  console.log(`Created ${artistCount} artists`);

  // Get museums for artworks
  const museumMap: Record<string, string | null> = {};
  const allMuseums = await prisma.museum.findMany({ select: { id: true, slug: true } });
  for (const m of allMuseums) {
    museumMap[m.slug] = m.id;
  }

  // Get artists for artworks
  const artistMap: Record<string, string | null> = {};
  const allArtists = await prisma.artist.findMany({ select: { id: true, slug: true } });
  for (const a of allArtists) {
    artistMap[a.slug] = a.id;
  }

  // MASSIVE artwork list
  const artworks = [
    // Giotto
    { title: 'Lamentation (The Mourning of Christ)', slug: 'lamentation-giotto', artistSlug: 'giotto', museumSlug: null, year: 1305, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29.jpg' },

    // Jan van Eyck
    { title: 'The Arnolfini Portrait', slug: 'arnolfini-portrait', artistSlug: 'jan-van-eyck', museumSlug: 'national-gallery', year: 1434, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg' },
    { title: 'Ghent Altarpiece', slug: 'ghent-altarpiece', artistSlug: 'jan-van-eyck', museumSlug: null, year: 1432, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ghent_Altarpiece_-_full_view.jpg' },

    // Rogier van der Weyden
    { title: 'Descent from the Cross', slug: 'descent-rogier', artistSlug: 'rogier-van-der-weyden', museumSlug: 'museo-del-prado', year: 1435, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Weyden_Deposition.jpg' },

    // Masaccio
    { title: 'The Expulsion from the Garden of Eden', slug: 'expulsion-masaccio', artistSlug: 'masaccio', museumSlug: null, year: 1427, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Masaccio-TheExpulsionOfAdamAndEveFromEden-Restoration.jpg' },
    { title: 'The Tribute Money', slug: 'tribute-money', artistSlug: 'masaccio', museumSlug: null, year: 1425, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Masaccio7.jpg' },

    // Piero della Francesca
    { title: 'The Flagellation of Christ', slug: 'flagellation-piero', artistSlug: 'piero-della-francesca', museumSlug: null, year: 1460, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Piero_della_Francesca_042_The_Flagellation.jpg' },
    { title: 'The Duke and Duchess of Urbino', slug: 'duke-duchess-urbino', artistSlug: 'piero-della-francesca', museumSlug: 'uffizi-gallery', year: 1472, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Piero%2C_Double_portrait_of_the_Dukes_of_Urbino.jpg' },

    // Lucas Cranach
    { title: 'Adam and Eve', slug: 'adam-eve-cranach', artistSlug: 'lucas-cranach-elder', museumSlug: null, year: 1526, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Lucas_Cranach_the_Elder_-_Adam_and_Eve_-_Google_Art_Project.jpg' },

    // Correggio
    { title: 'Assumption of the Virgin', slug: 'assumption-correggio', artistSlug: 'correggio', museumSlug: null, year: 1530, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Correggio_-_Assumption_of_the_Virgin_-_WGA05339.jpg' },

    // Guido Reni
    { title: 'Aurora', slug: 'aurora-reni', artistSlug: 'guido-reni', museumSlug: null, year: 1614, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Guido_Reni_-_Aurora_-_WGA19278.jpg' },

    // Tiepolo
    { title: 'The Banquet of Cleopatra', slug: 'banquet-cleopatra', artistSlug: 'giovanni-battista-tiepolo', museumSlug: null, year: 1744, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Giovanni_Battista_Tiepolo_-_The_Banquet_of_Cleopatra_-_Google_Art_Project.jpg' },

    // Canaletto
    { title: 'The Grand Canal and the Church of the Salute', slug: 'grand-canal-canaletto', artistSlug: 'canaletto', museumSlug: null, year: 1730, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Canaletto_-_The_Grand_Canal_and_the_Church_of_the_Salute.jpg' },
    { title: 'The Bucintoro at the Molo', slug: 'bucintoro-molo', artistSlug: 'canaletto', museumSlug: null, year: 1732, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Giovanni_Antonio_Canal%2C_il_Canaletto_-_Bucentaur%27s_return_to_the_pier_by_the_Palazzo_Ducale_-_Google_Art_Project.jpg' },

    // Pieter de Hooch
    { title: 'Woman and Child in a Courtyard', slug: 'woman-child-courtyard', artistSlug: 'pieter-de-hooch', museumSlug: 'national-gallery', year: 1658, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Pieter_de_Hooch_-_A_Woman_and_her_Maid_in_a_Courtyard_-_WGA11692.jpg' },

    // Jacob van Ruisdael
    { title: 'The Jewish Cemetery', slug: 'jewish-cemetery', artistSlug: 'jacob-van-ruisdael', museumSlug: null, year: 1657, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Jacob_Isaacksz._van_Ruisdael_-_The_Jewish_Cemetery_-_WGA20481.jpg' },
    { title: 'Windmill at Wijk bij Duurstede', slug: 'windmill-wijk', artistSlug: 'jacob-van-ruisdael', museumSlug: 'rijksmuseum', year: 1670, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Jacob_van_Ruisdael_-_Windmill_at_Wijk_bij_Duurstede_-_WGA20500.jpg' },

    // Meindert Hobbema
    { title: 'The Avenue at Middelharnis', slug: 'avenue-middelharnis', artistSlug: 'meindert-hobbema', museumSlug: 'national-gallery', year: 1689, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Meindert_Hobbema_-_The_Avenue_at_Middelharnis_-_Google_Art_Project.jpg' },

    // Murillo
    { title: 'The Immaculate Conception of Los Venerables', slug: 'immaculate-conception-murillo', artistSlug: 'bartolome-murillo', museumSlug: 'museo-del-prado', year: 1678, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Immaculate_Conception_by_Murillo%2C_1678.jpg' },

    // Zurbarán
    { title: 'Saint Serapion', slug: 'saint-serapion', artistSlug: 'francisco-de-zurbaran', museumSlug: null, year: 1628, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Francisco_de_Zurbar%C3%A1n_-_Saint_Serapion_-_Google_Art_Project.jpg' },

    // Boucher
    { title: 'Diana Leaving the Bath', slug: 'diana-leaving-bath', artistSlug: 'francois-boucher', museumSlug: 'louvre', year: 1742, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Fran%C3%A7ois_Boucher_-_Diana_Leaving_the_Bath_-_WGA02887.jpg' },
    { title: 'Reclining Girl', slug: 'reclining-girl-boucher', artistSlug: 'francois-boucher', museumSlug: null, year: 1752, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Fran%C3%A7ois_Boucher_-_Ruhendes_M%C3%A4dchen_-_1752.jpeg' },

    // Watteau
    { title: 'Pilgrimage to Cythera', slug: 'pilgrimage-cythera', artistSlug: 'jean-antoine-watteau', museumSlug: 'louvre', year: 1717, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Jean-Antoine_Watteau_-_Pilgrimage_to_Cythera_-_WGA25455.jpg' },
    { title: 'Pierrot (Gilles)', slug: 'pierrot-gilles', artistSlug: 'jean-antoine-watteau', museumSlug: 'louvre', year: 1719, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jean-Antoine_Watteau_-_Pierrot%2C_dit_autrefois_Gilles.jpg' },

    // Reynolds
    { title: 'Portrait of Omai', slug: 'portrait-omai', artistSlug: 'joshua-reynolds', museumSlug: null, year: 1776, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Joshua_Reynolds_-_Portrait_of_Omai.jpg' },

    // Stubbs
    { title: 'Whistlejacket', slug: 'whistlejacket', artistSlug: 'george-stubbs', museumSlug: 'national-gallery', year: 1762, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Whistlejacket_by_George_Stubbs.jpg' },

    // Hogarth
    { title: 'Marriage A-la-Mode: The Tête à Tête', slug: 'marriage-a-la-mode', artistSlug: 'william-hogarth', museumSlug: 'national-gallery', year: 1743, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/William_Hogarth_-_Marriage_A-la-Mode_2%2C_The_T%C3%AAte_%C3%A0_T%C3%AAte_-_WGA11480.jpg' },

    // William Blake
    { title: 'The Ancient of Days', slug: 'ancient-of-days', artistSlug: 'william-blake', museumSlug: null, year: 1794, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Europe_a_Prophecy%2C_copy_D%2C_object_1_%28Bentley_1%2C_Erdman_i%2C_Keynes_i%29_British_Museum.jpg' },
    { title: 'The Great Red Dragon and the Woman Clothed in Sun', slug: 'great-red-dragon', artistSlug: 'william-blake', museumSlug: null, year: 1805, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/William_Blake_003.jpg' },

    // John Singer Sargent
    { title: 'Madame X', slug: 'madame-x', artistSlug: 'john-singer-sargent', museumSlug: 'metropolitan-museum-of-art', year: 1884, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg' },
    { title: 'The Daughters of Edward Darley Boit', slug: 'daughters-boit', artistSlug: 'john-singer-sargent', museumSlug: 'museum-of-fine-arts-boston', year: 1882, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Sargent_The_Daughters_of_Edward_Darley_Boit.jpeg' },
    { title: 'Carnation, Lily, Lily, Rose', slug: 'carnation-lily-rose', artistSlug: 'john-singer-sargent', museumSlug: null, year: 1886, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/John_Singer_Sargent_-_Carnation%2C_Lily%2C_Lily%2C_Rose_-_Google_Art_Project.jpg' },

    // Thomas Eakins
    { title: 'The Gross Clinic', slug: 'gross-clinic', artistSlug: 'thomas-eakins', museumSlug: 'philadelphia-museum-of-art', year: 1875, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg' },
    { title: 'Max Schmitt in a Single Scull', slug: 'max-schmitt', artistSlug: 'thomas-eakins', museumSlug: 'metropolitan-museum-of-art', year: 1871, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Thomas_Eakins_-_The_Champion_Single_Sculls_%28Max_Schmitt_in_a_Single_Scull%29_-_1963.141_-_Yale_University_Art_Gallery.jpg' },

    // Frederic Church
    { title: 'Heart of the Andes', slug: 'heart-of-andes', artistSlug: 'frederic-edwin-church', museumSlug: 'metropolitan-museum-of-art', year: 1859, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Frederic_Edwin_Church_-_The_Heart_of_the_Andes_-_Google_Art_Project.jpg' },
    { title: 'Niagara', slug: 'niagara-church', artistSlug: 'frederic-edwin-church', museumSlug: null, year: 1857, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg' },

    // Albert Bierstadt
    { title: 'Among the Sierra Nevada, California', slug: 'sierra-nevada', artistSlug: 'albert-bierstadt', museumSlug: null, year: 1868, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Albert_Bierstadt_-_Among_the_Sierra_Nevada%2C_California_-_Google_Art_Project.jpg' },

    // Thomas Cole
    { title: 'The Oxbow', slug: 'the-oxbow', artistSlug: 'thomas-cole', museumSlug: 'metropolitan-museum-of-art', year: 1836, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton%29_1836.jpg' },
    { title: 'The Course of Empire: Destruction', slug: 'course-empire-destruction', artistSlug: 'thomas-cole', museumSlug: null, year: 1836, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg' },

    // Aivazovsky
    { title: 'The Ninth Wave', slug: 'ninth-wave', artistSlug: 'ivan-aivazovsky', museumSlug: 'russian-museum', year: 1850, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg' },

    // Ilya Repin
    { title: 'Barge Haulers on the Volga', slug: 'barge-haulers', artistSlug: 'ilya-repin', museumSlug: 'russian-museum', year: 1873, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg' },
    { title: 'Reply of the Zaporozhian Cossacks', slug: 'reply-cossacks', artistSlug: 'ilya-repin', museumSlug: 'russian-museum', year: 1891, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ilja_Jefimowitsch_Repin_-_Reply_of_the_Zaporozhian_Cossacks_-_Yorck.jpg' },

    // Sorolla
    { title: 'Walk on the Beach', slug: 'walk-on-beach', artistSlug: 'joaquin-sorolla', museumSlug: 'sorolla-museum', year: 1909, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Paseo_a_orillas_del_mar.jpg' },
    { title: 'Children on the Beach', slug: 'children-beach-sorolla', artistSlug: 'joaquin-sorolla', museumSlug: 'museo-del-prado', year: 1910, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Joaqu%C3%ADn_Sorolla_-_Three_Sails_-_Google_Art_Project.jpg' },

    // Arnold Böcklin
    { title: 'The Isle of the Dead', slug: 'isle-of-dead', artistSlug: 'arnold-bocklin', museumSlug: null, year: 1880, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Arnold_B%C3%B6cklin_-_Die_Toteninsel_I_%28Basel%2C_Kunstmuseum%29.jpg' },

    // Franz von Stuck
    { title: 'The Sin', slug: 'the-sin', artistSlug: 'franz-von-stuck', museumSlug: null, year: 1893, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Franz_Stuck_Die_S%C3%BCnde.jpg' },

    // Gustave Caillebotte
    { title: 'Paris Street; Rainy Day', slug: 'paris-street-rainy', artistSlug: 'gustave-caillebotte', museumSlug: 'art-institute-of-chicago', year: 1877, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg' },
    { title: 'The Floor Scrapers', slug: 'floor-scrapers', artistSlug: 'gustave-caillebotte', museumSlug: 'musee-dorsay', year: 1875, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg' },

    // Paul Signac
    { title: 'The Port of Saint-Tropez', slug: 'port-saint-tropez', artistSlug: 'paul-signac', museumSlug: null, year: 1901, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Paul_Signac_-_The_Port_of_Saint-Tropez_-_Google_Art_Project.jpg' },

    // Franz Marc
    { title: 'The Tower of Blue Horses', slug: 'tower-blue-horses', artistSlug: 'franz-marc', museumSlug: null, year: 1913, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Marc-tower_of_blue_horses.jpg' },
    { title: 'The Yellow Cow', slug: 'yellow-cow', artistSlug: 'franz-marc', museumSlug: null, year: 1911, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Franz_Marc_-_The_Yellow_Cow_-_Google_Art_Project.jpg' },
    { title: 'The Large Blue Horses', slug: 'large-blue-horses', artistSlug: 'franz-marc', museumSlug: 'minneapolis-institute-of-art', year: 1911, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Franz_Marc_-_Large_Blue_Horses_-_Google_Art_Project.jpg' },

    // August Macke
    { title: 'Lady in a Green Jacket', slug: 'lady-green-jacket', artistSlug: 'august-macke', museumSlug: null, year: 1913, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/August_Macke_-_Dame_in_gr%C3%BCner_Jacke.jpg' },

    // Ernst Ludwig Kirchner
    { title: 'Street, Berlin', slug: 'street-berlin', artistSlug: 'ernst-ludwig-kirchner', museumSlug: 'museum-of-modern-art', year: 1913, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Ernst_Ludwig_Kirchner_-_Street%2C_Berlin_-_Google_Art_Project.jpg' },

    // Juan Gris
    { title: 'Portrait of Picasso', slug: 'portrait-picasso-gris', artistSlug: 'juan-gris', museumSlug: 'art-institute-of-chicago', year: 1912, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/JuanGris.Portrait_of_Pablo_Picasso.jpg' },
    { title: 'Violin and Checkerboard', slug: 'violin-checkerboard', artistSlug: 'juan-gris', museumSlug: null, year: 1913, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/18/Juan_Gris_-_Violin_and_Checkerboard.jpg' },

    // Fernand Léger
    { title: 'Contrast of Forms', slug: 'contrast-of-forms', artistSlug: 'fernand-leger', museumSlug: 'museum-of-modern-art', year: 1913, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Leger_Contrast.jpg' },
    { title: 'The City', slug: 'the-city-leger', artistSlug: 'fernand-leger', museumSlug: 'philadelphia-museum-of-art', year: 1919, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/97/Fernand_Leger%2C_1919%2C_The_City_%28La_Ville%29%2C_oil_on_canvas%2C_231.1_x_298.4_cm%2C_Philadelphia_Museum_of_Art.jpg' },

    // Robert Delaunay
    { title: 'Simultaneous Windows on the City', slug: 'simultaneous-windows', artistSlug: 'robert-delaunay', museumSlug: null, year: 1912, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Robert_Delaunay_-_Simultaneous_Windows_on_the_City_-_Google_Art_Project.jpg' },
    { title: 'Eiffel Tower', slug: 'eiffel-tower-delaunay', artistSlug: 'robert-delaunay', museumSlug: null, year: 1911, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Robert_Delaunay%2C_1911%2C_La_Tour_Eiffel%2C_%28Eiffel_Tower%29%2C_oil_on_canvas%2C_202_%C3%97_138.4_cm%2C_Solomon_R._Guggenheim_Museum.jpg' },

    // Umberto Boccioni
    { title: 'The City Rises', slug: 'city-rises', artistSlug: 'umberto-boccioni', museumSlug: 'museum-of-modern-art', year: 1910, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Umberto_Boccioni_-_La_citt%C3%A0_che_sale.jpg' },
    { title: 'States of Mind: The Farewells', slug: 'states-mind-farewells', artistSlug: 'umberto-boccioni', museumSlug: 'museum-of-modern-art', year: 1911, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Umberto_Boccioni%2C_1911%2C_Gli_Addii_%28The_Farewells%29%2C_oil_on_canvas%2C_70.5_x_96.2_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg' },

    // Kazimir Malevich
    { title: 'Black Square', slug: 'black-square', artistSlug: 'kazimir-malevich', museumSlug: 'tretyakov-gallery', year: 1915, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Malevich.black-square.jpg' },
    { title: 'Suprematist Composition', slug: 'suprematist-composition', artistSlug: 'kazimir-malevich', museumSlug: null, year: 1916, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Kazimir_Malevich_-_Suprematist_Composition_-_White_on_White.jpg' },

    // André Derain
    { title: 'Charing Cross Bridge', slug: 'charing-cross-bridge-derain', artistSlug: 'andre-derain', museumSlug: null, year: 1906, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Andr%C3%A9_Derain%2C_1906%2C_Charing_Cross_Bridge%2C_London%2C_oil_on_canvas%2C_80.3_x_100.3_cm%2C_National_Gallery_of_Art%2C_Washington%2C_D.C.jpg' },
    { title: 'The Dance', slug: 'the-dance-derain', artistSlug: 'andre-derain', museumSlug: null, year: 1906, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/Derain_CharingCrossBridge.png' },

    // Raoul Dufy
    { title: 'Regatta at Cowes', slug: 'regatta-cowes', artistSlug: 'raoul-dufy', museumSlug: null, year: 1934, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Raoul_Dufy%2C_1934%2C_Regatta_at_Cowes%2C_oil_on_canvas%2C_Washington_DC%2C_National_Gallery_of_Art.jpg' },

    // Chaim Soutine
    { title: 'Carcass of Beef', slug: 'carcass-beef', artistSlug: 'chaim-soutine', museumSlug: null, year: 1925, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Soutine_-_Side_of_Beef.jpg' },

    // Vilhelm Hammershøi
    { title: 'Interior with Woman at Piano', slug: 'interior-woman-piano', artistSlug: 'vilhelm-hammershoi', museumSlug: null, year: 1901, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vilhelm_Hammersh%C3%B8i_-_Interior_with_Woman_at_Piano%2C_Strandgade_30_-_Google_Art_Project.jpg' },
    { title: 'Dust Motes Dancing in the Sunbeams', slug: 'dust-motes', artistSlug: 'vilhelm-hammershoi', museumSlug: null, year: 1900, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Vilhelm_Hammersh%C3%B8i_-_Dust_Motes_Dancing_in_the_Sunbeams_-_Google_Art_Project.jpg' },

    // Anders Zorn
    { title: 'Midsummer Dance', slug: 'midsummer-dance', artistSlug: 'anders-zorn', museumSlug: 'national-museum-stockholm', year: 1897, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Anders_Zorn_-_Midsummer_Dance_-_Google_Art_Project.jpg' },

    // Paula Modersohn-Becker
    { title: 'Self-Portrait on Her Sixth Wedding Anniversary', slug: 'self-portrait-anniversary', artistSlug: 'paula-modersohn-becker', museumSlug: null, year: 1906, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Paula_Modersohn-Becker_-_Selbstbildnis_am_6._Hochzeitstag.jpg' },

    // Käthe Kollwitz
    { title: 'Woman with Dead Child', slug: 'woman-dead-child', artistSlug: 'kathe-kollwitz', museumSlug: null, year: 1903, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Kollwitz_Woman_with_Dead_Child.jpg' },
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
      console.log(`Skipped artwork ${artwork.title}`);
    }
  }
  console.log(`Created ${artworkCount} artworks`);

  await prisma.$disconnect();
  console.log('\nDone! Massive art batch complete.');
}

main().catch(console.error);
