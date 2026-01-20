import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting add-more-art-9 seeding...");

  // Get existing movement IDs
  const movements = await prisma.movement.findMany();
  const movementMap: Record<string, string> = {};
  movements.forEach((m) => {
    movementMap[m.slug] = m.id;
  });

  // Add new museums
  console.log("\n=== Adding new museums ===");

  const newMuseums = [
    {
      name: "Brooklyn Museum",
      slug: "brooklyn-museum",
      city: "New York",
      country: "USA",
      description:
        "One of the largest and most comprehensive art museums in the United States, with an encyclopedic collection.",
    },
    {
      name: "Corcoran Gallery of Art",
      slug: "corcoran-gallery",
      city: "Washington D.C.",
      country: "USA",
      description:
        "Historic American art museum now integrated into the National Gallery of Art, known for American art.",
    },
    {
      name: "Cleveland Museum of Art",
      slug: "cleveland-museum-art",
      city: "Cleveland",
      country: "USA",
      description:
        "One of the largest art museums in the United States, with an outstanding collection of Asian and European art.",
    },
    {
      name: "Cincinnati Art Museum",
      slug: "cincinnati-art-museum",
      city: "Cincinnati",
      country: "USA",
      description:
        "One of the oldest art museums in the United States, with over 67,000 works spanning 6,000 years.",
    },
    {
      name: "Pushkin Museum",
      slug: "pushkin-museum",
      city: "Moscow",
      country: "Russia",
      description:
        "The largest museum of European art in Moscow, second only to the Hermitage in Russia.",
    },
    {
      name: "Museo Thyssen-Bornemisza",
      slug: "museo-thyssen",
      city: "Madrid",
      country: "Spain",
      description:
        "Houses one of the most important private art collections in the world, spanning from the 13th to 20th century.",
    },
    {
      name: "Royal Museums of Fine Arts of Belgium",
      slug: "royal-museums-belgium",
      city: "Brussels",
      country: "Belgium",
      description:
        "A group of art museums housing the national collection of fine arts, including the Magritte Museum.",
    },
    {
      name: "Musée Royal des Beaux-Arts",
      slug: "musee-royal-beaux-arts-antwerp",
      city: "Antwerp",
      country: "Belgium",
      description:
        "One of Belgium's most important art museums, specializing in Flemish and Belgian art.",
    },
    {
      name: "Galleria Doria Pamphilj",
      slug: "galleria-doria-pamphilj",
      city: "Rome",
      country: "Italy",
      description:
        "A large art collection housed in a Roman palazzo, featuring masterpieces by Velázquez, Caravaggio, and Bernini.",
    },
    {
      name: "Galleria Borghese",
      slug: "galleria-borghese",
      city: "Rome",
      country: "Italy",
      description:
        "Houses a substantial part of the Borghese collection of paintings, sculpture, and antiquities.",
    },
    {
      name: "National Museum of Western Art",
      slug: "national-museum-western-art-tokyo",
      city: "Tokyo",
      country: "Japan",
      description:
        "Japan's premier public art gallery specializing in Western art, based on the Matsukata Collection.",
    },
    {
      name: "Kelvingrove Art Gallery and Museum",
      slug: "kelvingrove-glasgow",
      city: "Glasgow",
      country: "Scotland",
      description:
        "One of Scotland's most popular free attractions, with an outstanding collection of European art.",
    },
    {
      name: "National Galleries of Scotland",
      slug: "national-galleries-scotland",
      city: "Edinburgh",
      country: "Scotland",
      description:
        "Houses the Scottish national collection of fine art, including works by Vermeer, Raphael, and Monet.",
    },
    {
      name: "Walker Art Gallery",
      slug: "walker-art-gallery",
      city: "Liverpool",
      country: "UK",
      description:
        "The national gallery of the North of England, with an important collection of European art.",
    },
    {
      name: "Ashmolean Museum",
      slug: "ashmolean-museum",
      city: "Oxford",
      country: "UK",
      description:
        "The world's first university museum, with outstanding collections of art and archaeology.",
    },
  ];

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Created museum: ${museum.name}`);
  }

  // Get all museums
  const allMuseums = await prisma.museum.findMany();
  const museumMap: Record<string, string> = {};
  allMuseums.forEach((m) => {
    museumMap[m.slug] = m.id;
  });

  // Add new artists
  console.log("\n=== Adding new artists ===");

  const newArtists = [
    // More Italian Masters
    {
      name: "Jacopo Bassano",
      slug: "jacopo-bassano",
      birthYear: 1510,
      deathYear: 1592,
      nationality: "Italian",
      bioShort:
        "Italian painter of the Venetian school known for his rustic genre scenes and night paintings.",
      movements: [movementMap["venetian-school"], movementMap["mannerism"]],
    },
    {
      name: "Giovanni Battista Moroni",
      slug: "giovanni-battista-moroni",
      birthYear: 1520,
      deathYear: 1578,
      nationality: "Italian",
      bioShort:
        "Italian painter of the Renaissance known for his sober and dignified portraits.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Bernardino Luini",
      slug: "bernardino-luini",
      birthYear: 1480,
      deathYear: 1532,
      nationality: "Italian",
      bioShort:
        "Italian painter from the Leonardo school, known for his serene religious works.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Sodoma",
      slug: "sodoma",
      birthYear: 1477,
      deathYear: 1549,
      nationality: "Italian",
      bioShort:
        "Italian High Renaissance painter known for his frescoes and sensuous religious paintings.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Francesco Furini",
      slug: "francesco-furini",
      birthYear: 1603,
      deathYear: 1646,
      nationality: "Italian",
      bioShort:
        "Italian Baroque painter known for his paintings of voluptuous female nudes.",
      movements: [movementMap["baroque"]],
    },

    // More Dutch/Flemish
    {
      name: "Abraham Bloemaert",
      slug: "abraham-bloemaert",
      birthYear: 1566,
      deathYear: 1651,
      nationality: "Dutch",
      bioShort:
        "Dutch painter and printmaker, a leading figure in Utrecht Mannerism and teacher of many important artists.",
      movements: [movementMap["mannerism"], movementMap["baroque"]],
    },
    {
      name: "Jan Davidsz. de Heem",
      slug: "jan-davidsz-de-heem",
      birthYear: 1606,
      deathYear: 1684,
      nationality: "Dutch",
      bioShort:
        "Dutch and Flemish Baroque still-life painter known for his lavish fruit and flower pieces.",
      movements: [movementMap["dutch-golden-age"], movementMap["baroque"]],
    },
    {
      name: "Willem Claesz. Heda",
      slug: "willem-claesz-heda",
      birthYear: 1594,
      deathYear: 1680,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age artist who specialized in banquet pieces with fine silverware and glasses.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Pieter Claesz",
      slug: "pieter-claesz",
      birthYear: 1597,
      deathYear: 1660,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age still-life painter specializing in vanitas and breakfast pieces.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Adriaen Coorte",
      slug: "adriaen-coorte",
      birthYear: 1665,
      deathYear: 1707,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter known for his intimate, meditative still lifes.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Caspar Netscher",
      slug: "caspar-netscher",
      birthYear: 1639,
      deathYear: 1684,
      nationality: "Dutch",
      bioShort:
        "Dutch painter known for his elegant portraits and genre scenes of high society.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Godfried Schalcken",
      slug: "godfried-schalcken",
      birthYear: 1643,
      deathYear: 1706,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter known for his fine brushwork and artificial lighting effects.",
      movements: [movementMap["dutch-golden-age"]],
    },

    // More French
    {
      name: "François Clouet",
      slug: "francois-clouet",
      birthYear: 1510,
      deathYear: 1572,
      nationality: "French",
      bioShort:
        "French Renaissance portrait painter who served as court painter to four French kings.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Simon Vouet",
      slug: "simon-vouet",
      birthYear: 1590,
      deathYear: 1649,
      nationality: "French",
      bioShort:
        "French painter who introduced the Italian Baroque style to France.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Eustache Le Sueur",
      slug: "eustache-le-sueur",
      birthYear: 1616,
      deathYear: 1655,
      nationality: "French",
      bioShort:
        "French painter known as 'the French Raphael' for his serene classical style.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Charles Le Brun",
      slug: "charles-le-brun",
      birthYear: 1619,
      deathYear: 1690,
      nationality: "French",
      bioShort:
        "French painter and art theorist, dominant artist at the court of Louis XIV.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Hyacinthe Rigaud",
      slug: "hyacinthe-rigaud",
      birthYear: 1659,
      deathYear: 1743,
      nationality: "French",
      bioShort:
        "French Baroque painter best known for his portraits of Louis XIV and the French nobility.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Maurice Quentin de La Tour",
      slug: "maurice-quentin-de-la-tour",
      birthYear: 1704,
      deathYear: 1788,
      nationality: "French",
      bioShort:
        "French Rococo portraitist who worked primarily in pastel, known for psychological depth.",
      movements: [movementMap["rococo"]],
    },
    {
      name: "Jean-Marc Nattier",
      slug: "jean-marc-nattier",
      birthYear: 1685,
      deathYear: 1766,
      nationality: "French",
      bioShort:
        "French Rococo painter known for his portraits of the ladies of Louis XV's court.",
      movements: [movementMap["rococo"]],
    },
    {
      name: "Élisabeth Louise Vigée Le Brun",
      slug: "elisabeth-vigee-le-brun",
      birthYear: 1755,
      deathYear: 1842,
      nationality: "French",
      bioShort:
        "French portrait painter and the most famous female painter of the 18th century.",
      movements: [movementMap["rococo"], movementMap["neoclassicism"]],
    },

    // More British
    {
      name: "Samuel Palmer",
      slug: "samuel-palmer",
      birthYear: 1805,
      deathYear: 1881,
      nationality: "British",
      bioShort:
        "English landscape painter and printmaker, associated with the Romantic movement.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Richard Dadd",
      slug: "richard-dadd",
      birthYear: 1817,
      deathYear: 1886,
      nationality: "British",
      bioShort:
        "English painter of the Victorian era, known for his obsessively detailed fairy paintings.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "John Martin",
      slug: "john-martin",
      birthYear: 1789,
      deathYear: 1854,
      nationality: "British",
      bioShort:
        "English Romantic painter known for vast apocalyptic biblical scenes.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "George Frederick Watts",
      slug: "george-frederick-watts",
      birthYear: 1817,
      deathYear: 1904,
      nationality: "British",
      bioShort:
        "English Victorian painter and sculptor associated with the Symbolist movement.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Atkinson Grimshaw",
      slug: "atkinson-grimshaw",
      birthYear: 1836,
      deathYear: 1893,
      nationality: "British",
      bioShort:
        "English Victorian painter known for his atmospheric moonlit scenes and city views.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Albert Joseph Moore",
      slug: "albert-joseph-moore",
      birthYear: 1841,
      deathYear: 1893,
      nationality: "British",
      bioShort:
        "English painter known for his decorative paintings of languid female figures in classical dress.",
      movements: [movementMap["academic-art"]],
    },

    // More German/Austrian
    {
      name: "Ferdinand Georg Waldmüller",
      slug: "ferdinand-georg-waldmuller",
      birthYear: 1793,
      deathYear: 1865,
      nationality: "Austrian",
      bioShort:
        "Austrian painter and writer, one of the most important painters of the Biedermeier period.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Carl Spitzweg",
      slug: "carl-spitzweg",
      birthYear: 1808,
      deathYear: 1885,
      nationality: "German",
      bioShort:
        "German Romantic painter known for his humorous and affectionate genre paintings.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Wilhelm Leibl",
      slug: "wilhelm-leibl",
      birthYear: 1844,
      deathYear: 1900,
      nationality: "German",
      bioShort:
        "German painter, a leading figure in the German Realist movement.",
      movements: [movementMap["impressionism"]],
    },

    // More Spanish
    {
      name: "Alonso Cano",
      slug: "alonso-cano",
      birthYear: 1601,
      deathYear: 1667,
      nationality: "Spanish",
      bioShort:
        "Spanish painter, sculptor, and architect of the Spanish Golden Age, sometimes called 'the Spanish Michelangelo'.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Juan de Juanes",
      slug: "juan-de-juanes",
      birthYear: 1510,
      deathYear: 1579,
      nationality: "Spanish",
      bioShort:
        "Spanish Renaissance painter known for his religious works influenced by Raphael.",
      movements: [movementMap["renaissance"]],
    },

    // More American
    {
      name: "William Trost Richards",
      slug: "william-trost-richards",
      birthYear: 1833,
      deathYear: 1905,
      nationality: "American",
      bioShort:
        "American landscape painter known for his meticulous depictions of nature and seascapes.",
      movements: [movementMap["hudson-river-school"]],
    },
    {
      name: "Jasper Francis Cropsey",
      slug: "jasper-francis-cropsey",
      birthYear: 1823,
      deathYear: 1900,
      nationality: "American",
      bioShort:
        "American landscape painter known for his vivid autumn landscapes.",
      movements: [movementMap["hudson-river-school"]],
    },
    {
      name: "Worthington Whittredge",
      slug: "worthington-whittredge",
      birthYear: 1820,
      deathYear: 1910,
      nationality: "American",
      bioShort:
        "American landscape painter of the Hudson River School, known for forest interiors.",
      movements: [movementMap["hudson-river-school"]],
    },
    {
      name: "Alfred Thompson Bricher",
      slug: "alfred-thompson-bricher",
      birthYear: 1837,
      deathYear: 1908,
      nationality: "American",
      bioShort:
        "American painter known for his luminous coastal scenes and seascapes.",
      movements: [movementMap["luminism"], movementMap["hudson-river-school"]],
    },
    {
      name: "James Hamilton",
      slug: "james-hamilton-painter",
      birthYear: 1819,
      deathYear: 1878,
      nationality: "American",
      bioShort:
        "American marine painter known as 'the American Turner' for his dramatic seascapes.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "John La Farge",
      slug: "john-la-farge",
      birthYear: 1835,
      deathYear: 1910,
      nationality: "American",
      bioShort:
        "American painter, muralist, and stained glass window designer who introduced Japanese art to America.",
      movements: [movementMap["impressionism"]],
    },

    // More Scandinavian
    {
      name: "Harriet Backer",
      slug: "harriet-backer",
      birthYear: 1845,
      deathYear: 1932,
      nationality: "Norwegian",
      bioShort:
        "Norwegian painter known for her interior scenes with subtle light effects.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Christian Krohg",
      slug: "christian-krohg",
      birthYear: 1852,
      deathYear: 1925,
      nationality: "Norwegian",
      bioShort:
        "Norwegian naturalist painter and writer, mentor to Edvard Munch.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Vilhelm Hammershøi",
      slug: "vilhelm-hammershoi",
      birthYear: 1864,
      deathYear: 1916,
      nationality: "Danish",
      bioShort:
        "Danish painter known for his poetic interiors and muted palette.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Bruno Liljefors",
      slug: "bruno-liljefors",
      birthYear: 1860,
      deathYear: 1939,
      nationality: "Swedish",
      bioShort:
        "Swedish painter considered the foremost wildlife artist of his era.",
      movements: [movementMap["impressionism"]],
    },

    // More Belgian/Dutch
    {
      name: "Constant Permeke",
      slug: "constant-permeke",
      birthYear: 1886,
      deathYear: 1952,
      nationality: "Belgian",
      bioShort:
        "Belgian painter and sculptor, a leading exponent of Flemish Expressionism.",
      movements: [movementMap["expressionism"]],
    },
    {
      name: "Léon Spilliaert",
      slug: "leon-spilliaert",
      birthYear: 1881,
      deathYear: 1946,
      nationality: "Belgian",
      bioShort:
        "Belgian painter and graphic artist known for his enigmatic, dreamlike images.",
      movements: [movementMap["symbolism"], movementMap["expressionism"]],
    },
    {
      name: "George Hendrik Breitner",
      slug: "george-hendrik-breitner",
      birthYear: 1857,
      deathYear: 1923,
      nationality: "Dutch",
      bioShort:
        "Dutch painter and photographer, a leading figure in Amsterdam Impressionism.",
      movements: [movementMap["impressionism"]],
    },

    // More Russian
    {
      name: "Nikolai Ge",
      slug: "nikolai-ge",
      birthYear: 1831,
      deathYear: 1894,
      nationality: "Russian",
      bioShort:
        "Russian realist painter known for his historical and religious paintings.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Vasily Surikov",
      slug: "vasily-surikov",
      birthYear: 1848,
      deathYear: 1916,
      nationality: "Russian",
      bioShort:
        "Russian painter famous for his large historical canvases depicting Russian history.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Konstantin Korovin",
      slug: "konstantin-korovin",
      birthYear: 1861,
      deathYear: 1939,
      nationality: "Russian",
      bioShort:
        "Russian Impressionist painter and stage designer.",
      movements: [movementMap["impressionism"]],
    },
  ];

  for (const artist of newArtists) {
    const { movements, ...artistData } = artist;
    const validMovements = movements.filter((m): m is string => m !== undefined);
    await prisma.artist.upsert({
      where: { slug: artist.slug },
      update: {},
      create: {
        ...artistData,
        movements: {
          connect: validMovements.map((id) => ({ id })),
        },
      },
    });
    console.log(`Created artist: ${artist.name}`);
  }

  // Get all artists
  const allArtists = await prisma.artist.findMany();
  const artistMap: Record<string, string> = {};
  allArtists.forEach((a) => {
    artistMap[a.slug] = a.id;
  });

  // Add new artworks
  console.log("\n=== Adding new artworks ===");

  const newArtworks = [
    // Jan Davidsz. de Heem
    {
      title: "Vase of Flowers",
      slug: "vase-of-flowers-de-heem",
      artistSlug: "jan-davidsz-de-heem",
      year: 1660,
      medium: "Oil on canvas",
      dimensions: "69.6 cm × 56.5 cm",
      description:
        "An elaborate flower piece showcasing de Heem's virtuosity in depicting textures and light.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Jan_Davidsz._de_Heem_-_Vase_of_Flowers_-_WGA11290.jpg",
      museumSlug: "national-gallery-of-art",
    },
    {
      title: "Still Life with Fruit and Lobster",
      slug: "still-life-fruit-lobster",
      artistSlug: "jan-davidsz-de-heem",
      year: 1648,
      medium: "Oil on canvas",
      dimensions: "95 cm × 120 cm",
      description:
        "A sumptuous display of exotic fruits, seafood, and precious objects on a draped table.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jan_Davidsz_de_Heem_-_A_Table_of_Desserts_-_WGA11289.jpg",
      museumSlug: "louvre",
    },

    // Willem Claesz. Heda
    {
      title: "Banquet Piece with Mince Pie",
      slug: "banquet-piece-mince-pie",
      artistSlug: "willem-claesz-heda",
      year: 1635,
      medium: "Oil on panel",
      dimensions: "106 cm × 111 cm",
      description:
        "A masterful still life depicting the remnants of a meal with fine glassware and silverware.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Willem_Claeszoon_Heda_-_Banquet_Piece_with_Mince_Pie_-_WGA11247.jpg",
      museumSlug: "national-gallery-of-art",
    },

    // Pieter Claesz
    {
      title: "Vanitas Still Life",
      slug: "vanitas-still-life-claesz",
      artistSlug: "pieter-claesz",
      year: 1630,
      medium: "Oil on panel",
      dimensions: "39.5 cm × 56 cm",
      description:
        "A contemplative arrangement featuring a skull, books, and snuffed candle, symbolizing the transience of life.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Pieter_Claesz_-_Vanitas_-_Still_Life.jpg",
      museumSlug: "mauritshuis",
    },

    // Godfried Schalcken
    {
      title: "Young Woman with a Candle",
      slug: "young-woman-candle-schalcken",
      artistSlug: "godfried-schalcken",
      year: 1670,
      medium: "Oil on canvas",
      dimensions: "61 cm × 50 cm",
      description:
        "A young woman illuminated by candlelight, demonstrating Schalcken's mastery of artificial lighting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Godfried_Schalcken_-_A_Lady_with_a_Candle_-_WGA21080.jpg",
      museumSlug: null,
    },

    // François Clouet
    {
      title: "Portrait of Francis I",
      slug: "portrait-francis-i-clouet",
      artistSlug: "francois-clouet",
      year: 1535,
      medium: "Oil on panel",
      dimensions: "96 cm × 74 cm",
      description:
        "An iconic portrait of the French Renaissance king in sumptuous attire.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Francois_1_Louvre.jpg",
      museumSlug: "louvre",
    },

    // Simon Vouet
    {
      title: "Saturn Devouring One of His Children",
      slug: "saturn-devouring-child-vouet",
      artistSlug: "simon-vouet",
      year: 1636,
      medium: "Oil on canvas",
      dimensions: "128 cm × 97 cm",
      description:
        "A dramatic Baroque interpretation of the mythological scene of Saturn consuming his offspring.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Simon_Vouet_-_Saturn%2C_Conquered_by_Amor%2C_Venus_and_Hope_-_WGA25373.jpg",
      museumSlug: null,
    },

    // Hyacinthe Rigaud
    {
      title: "Portrait of Louis XIV",
      slug: "portrait-louis-xiv-rigaud",
      artistSlug: "hyacinthe-rigaud",
      year: 1701,
      medium: "Oil on canvas",
      dimensions: "277 cm × 194 cm",
      description:
        "The definitive portrait of the Sun King, showing him in his coronation robes.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Louis_XIV_of_France.jpg",
      museumSlug: "louvre",
    },

    // Jean-Marc Nattier
    {
      title: "Madame Henriette as Flora",
      slug: "madame-henriette-flora",
      artistSlug: "jean-marc-nattier",
      year: 1742,
      medium: "Oil on canvas",
      dimensions: "94 cm × 128 cm",
      description:
        "A portrait of Louis XV's daughter depicted as the goddess of flowers.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Jean-Marc_Nattier_-_Madame_Henriette_en_Flore_-_WGA16461.jpg",
      museumSlug: "versailles",
    },

    // Maurice Quentin de La Tour
    {
      title: "Portrait of Madame de Pompadour",
      slug: "madame-pompadour-la-tour",
      artistSlug: "maurice-quentin-de-la-tour",
      year: 1755,
      medium: "Pastel on paper",
      dimensions: "175 cm × 128 cm",
      description:
        "A monumental pastel portrait of Louis XV's mistress surrounded by books and art.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Maurice-Quentin_de_La_Tour_-_Portrait_of_Madame_de_Pompadour_-_WGA12376.jpg",
      museumSlug: "louvre",
    },

    // Samuel Palmer
    {
      title: "Coming from Evening Church",
      slug: "coming-from-evening-church",
      artistSlug: "samuel-palmer",
      year: 1830,
      medium: "Oil and tempera on paper on panel",
      dimensions: "30 cm × 20 cm",
      description:
        "A dreamlike vision of villagers returning from church under a crescent moon.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Coming_from_Evening_Church_by_Samuel_Palmer.jpg",
      museumSlug: "tate-britain",
    },

    // Richard Dadd
    {
      title: "The Fairy Feller's Master-Stroke",
      slug: "fairy-fellers-master-stroke",
      artistSlug: "richard-dadd",
      year: 1864,
      medium: "Oil on canvas",
      dimensions: "54 cm × 39.4 cm",
      description:
        "An obsessively detailed fairy painting created during the artist's time in a psychiatric hospital.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/The_Fairy_Feller%27s_Master-Stroke.jpg",
      museumSlug: "tate-britain",
    },

    // John Martin
    {
      title: "The Great Day of His Wrath",
      slug: "great-day-his-wrath",
      artistSlug: "john-martin",
      year: 1853,
      medium: "Oil on canvas",
      dimensions: "196.5 cm × 303.2 cm",
      description:
        "An apocalyptic vision showing the destruction of the world on Judgment Day.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg",
      museumSlug: "tate-britain",
    },
    {
      title: "Pandemonium",
      slug: "pandemonium-martin",
      artistSlug: "john-martin",
      year: 1841,
      medium: "Oil on canvas",
      dimensions: "123.8 cm × 184.2 cm",
      description:
        "Satan's capital in Hell, inspired by Milton's Paradise Lost.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/John_Martin_-_Pandemonium.jpg",
      museumSlug: "louvre",
    },

    // Atkinson Grimshaw
    {
      title: "A Moonlit Lane",
      slug: "moonlit-lane-grimshaw",
      artistSlug: "atkinson-grimshaw",
      year: 1874,
      medium: "Oil on board",
      dimensions: "31.1 cm × 46.4 cm",
      description:
        "A moonlit suburban scene with wet pavements reflecting the light.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Atkinson_Grimshaw_-_A_Moonlit_Lane_-_1874.jpg",
      museumSlug: null,
    },
    {
      title: "Liverpool Quay by Moonlight",
      slug: "liverpool-quay-moonlight",
      artistSlug: "atkinson-grimshaw",
      year: 1887,
      medium: "Oil on canvas",
      dimensions: "61 cm × 91.4 cm",
      description:
        "A moody nocturnal view of Liverpool's docks with ships and reflections.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Atkinson_Grimshaw_Liverpool_Quay_by_Moonlight_1887.jpg",
      museumSlug: "tate-britain",
    },

    // Carl Spitzweg
    {
      title: "The Bookworm",
      slug: "the-bookworm-spitzweg",
      artistSlug: "carl-spitzweg",
      year: 1850,
      medium: "Oil on canvas",
      dimensions: "49.5 cm × 27 cm",
      description:
        "A humorous portrait of an elderly scholar perched on a library ladder, absorbed in books.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Carl_Spitzweg_-_The_Bookworm_-_WGA21694.jpg",
      museumSlug: null,
    },
    {
      title: "The Poor Poet",
      slug: "the-poor-poet",
      artistSlug: "carl-spitzweg",
      year: 1839,
      medium: "Oil on canvas",
      dimensions: "36 cm × 45 cm",
      description:
        "A humorous depiction of a poet in his sparse garret, sheltering under an umbrella from a leaking roof.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Carl_Spitzweg_-_Der_arme_Poet_-_Google_Art_Project.jpg",
      museumSlug: "neue-pinakothek",
    },

    // Jasper Francis Cropsey
    {
      title: "Autumn on the Hudson River",
      slug: "autumn-hudson-river",
      artistSlug: "jasper-francis-cropsey",
      year: 1860,
      medium: "Oil on canvas",
      dimensions: "152.4 cm × 274.3 cm",
      description:
        "A panoramic view of the Hudson River Valley ablaze with fall foliage.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Jasper_Francis_Cropsey_-_Autumn_-_On_the_Hudson_River_-_Google_Art_Project.jpg",
      museumSlug: "national-gallery-of-art",
    },

    // Vilhelm Hammershøi
    {
      title: "Interior with Young Woman from Behind",
      slug: "interior-young-woman-behind",
      artistSlug: "vilhelm-hammershoi",
      year: 1904,
      medium: "Oil on canvas",
      dimensions: "60.5 cm × 50.5 cm",
      description:
        "A contemplative interior scene with a woman viewed from behind in a spare apartment.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Vilhelm_Hammersh%C3%B8i_-_Interior%2C_Strandgade_30_-_Google_Art_Project.jpg",
      museumSlug: null,
    },
    {
      title: "Dust Motes Dancing in the Sunbeams",
      slug: "dust-motes-dancing-sunbeams",
      artistSlug: "vilhelm-hammershoi",
      year: 1900,
      medium: "Oil on canvas",
      dimensions: "70 cm × 59 cm",
      description:
        "An empty room filled with soft, diffused light streaming through a window.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Vilhelm_Hammersh%C3%B8i_-_Dust_Motes_Dancing_in_the_Sunbeams_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Léon Spilliaert
    {
      title: "Self-Portrait with Mirror",
      slug: "self-portrait-mirror-spilliaert",
      artistSlug: "leon-spilliaert",
      year: 1908,
      medium: "Watercolor and pastel on paper",
      dimensions: "50 cm × 66 cm",
      description:
        "A haunting self-portrait with the artist's gaunt face reflected in a mirror.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/L%C3%A9on_Spilliaert_-_Self-Portrait_-_WGA21657.jpg",
      museumSlug: null,
    },
    {
      title: "The Gust of Wind",
      slug: "gust-of-wind-spilliaert",
      artistSlug: "leon-spilliaert",
      year: 1904,
      medium: "Watercolor on paper",
      dimensions: "52 cm × 41 cm",
      description:
        "A dramatic image of a woman battling wind on a beach, her dress billowing.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/L%C3%A9on_Spilliaert_-_Coup_de_vent_-_1904.jpg",
      museumSlug: null,
    },

    // George Hendrik Breitner
    {
      title: "Girl in White Kimono",
      slug: "girl-white-kimono",
      artistSlug: "george-hendrik-breitner",
      year: 1894,
      medium: "Oil on canvas",
      dimensions: "59 cm × 57 cm",
      description:
        "A young woman in a white Japanese kimono, showing the influence of Japanese art on Dutch painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Breitner_-_Meisje_in_witte_kimono.jpg",
      museumSlug: "rijksmuseum",
    },

    // Vasily Surikov
    {
      title: "Boyarina Morozova",
      slug: "boyarina-morozova",
      artistSlug: "vasily-surikov",
      year: 1887,
      medium: "Oil on canvas",
      dimensions: "304 cm × 587.5 cm",
      description:
        "A noblewoman is taken to exile in a sledge, defiantly holding up two fingers in the old religious gesture.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Surikov_Boyarinya_Morozova.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "Morning of the Streltsy Execution",
      slug: "morning-streltsy-execution",
      artistSlug: "vasily-surikov",
      year: 1881,
      medium: "Oil on canvas",
      dimensions: "218 cm × 379 cm",
      description:
        "Peter the Great oversees the execution of rebel guardsmen, a pivotal moment in Russian history.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Surikov_streltsi.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Nikolai Ge
    {
      title: "Peter I Interrogates Tsarevich Alexei",
      slug: "peter-interrogates-alexei",
      artistSlug: "nikolai-ge",
      year: 1871,
      medium: "Oil on canvas",
      dimensions: "135.7 cm × 173 cm",
      description:
        "Peter the Great confronts his son who plotted against him, a tense psychological drama.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ge_Peter_I_interrogating.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "What is Truth? Christ and Pilate",
      slug: "what-is-truth-ge",
      artistSlug: "nikolai-ge",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "233 cm × 171 cm",
      description:
        "A dramatic confrontation between Christ and Pontius Pilate, with unusual lighting and composition.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/%22What_is_truth%22_by_Nikolay_Ge.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Konstantin Korovin
    {
      title: "A Parisian Cafe",
      slug: "parisian-cafe-korovin",
      artistSlug: "konstantin-korovin",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "53 cm × 66 cm",
      description:
        "A lively scene of Parisian cafe life, painted with Impressionist spontaneity.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Korovin_Paris_cafe.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Bernardino Luini
    {
      title: "Saint Catherine of Alexandria",
      slug: "saint-catherine-luini",
      artistSlug: "bernardino-luini",
      year: 1527,
      medium: "Oil on panel",
      dimensions: "68 cm × 54 cm",
      description:
        "A serene portrait of the saint, showing Luini's debt to Leonardo da Vinci.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bernardino_Luini_-_Saint_Catherine_of_Alexandria_-_WGA13764.jpg",
      museumSlug: null,
    },

    // Jacopo Bassano
    {
      title: "The Adoration of the Shepherds",
      slug: "adoration-shepherds-bassano",
      artistSlug: "jacopo-bassano",
      year: 1546,
      medium: "Oil on canvas",
      dimensions: "139 cm × 219 cm",
      description:
        "A rustic nativity scene with Bassano's characteristic blend of religious subject and genre painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Jacopo_Bassano_-_The_Adoration_of_the_Shepherds_-_WGA01426.jpg",
      museumSlug: null,
    },

    // Giovanni Battista Moroni
    {
      title: "The Tailor",
      slug: "the-tailor-moroni",
      artistSlug: "giovanni-battista-moroni",
      year: 1570,
      medium: "Oil on canvas",
      dimensions: "99.5 cm × 77 cm",
      description:
        "A remarkably direct portrait of a working tailor, revolutionary for its time.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Giovanni_Battista_Moroni_-_Portrait_of_a_Man_%28The_Tailor%29_-_WGA16265.jpg",
      museumSlug: "national-gallery",
    },

    // Abraham Bloemaert
    {
      title: "The Preaching of John the Baptist",
      slug: "preaching-john-baptist-bloemaert",
      artistSlug: "abraham-bloemaert",
      year: 1600,
      medium: "Oil on canvas",
      dimensions: "139 cm × 188 cm",
      description:
        "John the Baptist addresses a crowd in a dramatic outdoor setting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Abraham_Bloemaert_-_The_Preaching_of_John_the_Baptist_-_WGA02283.jpg",
      museumSlug: "rijksmuseum",
    },

    // Alonso Cano
    {
      title: "The Vision of Saint John the Evangelist",
      slug: "vision-saint-john-cano",
      artistSlug: "alonso-cano",
      year: 1636,
      medium: "Oil on canvas",
      dimensions: "146.5 cm × 104 cm",
      description:
        "Saint John's apocalyptic vision of the Woman of the Apocalypse.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Alonso_Cano_-_The_Vision_of_St_John_the_Evangelist_-_WGA04014.jpg",
      museumSlug: null,
    },

    // William Trost Richards
    {
      title: "A Rough Surf",
      slug: "rough-surf-richards",
      artistSlug: "william-trost-richards",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "71.8 cm × 114.9 cm",
      description:
        "A dramatic seascape showing waves crashing against rocks.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/William_Trost_Richards_-_A_Rough_Surf_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Alfred Thompson Bricher
    {
      title: "Time and Tide",
      slug: "time-and-tide-bricher",
      artistSlug: "alfred-thompson-bricher",
      year: 1873,
      medium: "Oil on canvas",
      dimensions: "63.5 cm × 127 cm",
      description:
        "A luminous coastal scene with waves gently lapping at the shore.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Alfred_Thompson_Bricher_-_Time_and_Tide.jpg",
      museumSlug: null,
    },

    // John La Farge
    {
      title: "The Last Valley",
      slug: "last-valley-la-farge",
      artistSlug: "john-la-farge",
      year: 1867,
      medium: "Oil on canvas",
      dimensions: "82 cm × 108 cm",
      description:
        "A dreamlike landscape influenced by Japanese art and Symbolism.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/John_LaFarge_-_The_Last_Valley_-_Paradise_Rocks_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Bruno Liljefors
    {
      title: "Sea Eagles",
      slug: "sea-eagles-liljefors",
      artistSlug: "bruno-liljefors",
      year: 1907,
      medium: "Oil on canvas",
      dimensions: "138 cm × 200 cm",
      description:
        "White-tailed eagles in their natural habitat, displaying Liljefors' mastery of wildlife painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bruno_Liljefors_-_Sea_Eagles.jpg",
      museumSlug: null,
    },

    // George Frederick Watts
    {
      title: "Hope",
      slug: "hope-watts",
      artistSlug: "george-frederick-watts",
      year: 1886,
      medium: "Oil on canvas",
      dimensions: "142.2 cm × 111.8 cm",
      description:
        "A blindfolded woman sits atop a globe, playing a lyre with only one string remaining.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/George_Frederic_Watts_-_Hope_-_Google_Art_Project.jpg",
      museumSlug: "tate-britain",
    },

    // Albert Joseph Moore
    {
      title: "A Summer Night",
      slug: "summer-night-moore",
      artistSlug: "albert-joseph-moore",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "130 cm × 225 cm",
      description:
        "Four women in diaphanous robes rest on a moonlit terrace.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Albert_Joseph_Moore_-_A_Summer_Night_-_Google_Art_Project.jpg",
      museumSlug: "walker-art-gallery",
    },
  ];

  for (const artwork of newArtworks) {
    const artistId = artistMap[artwork.artistSlug];
    if (!artistId) {
      console.log(`Artist not found for artwork: ${artwork.title} (${artwork.artistSlug})`);
      continue;
    }

    const museumId = artwork.museumSlug ? museumMap[artwork.museumSlug] : null;

    await prisma.artwork.upsert({
      where: { slug: artwork.slug },
      update: {},
      create: {
        title: artwork.title,
        slug: artwork.slug,
        year: artwork.year,
        medium: artwork.medium,
        dimensions: artwork.dimensions,
        description: artwork.description,
        imageUrl: artwork.imageUrl,
        artistId,
        museumId,
      },
    });
    console.log(`Created artwork: ${artwork.title}`);
  }

  // Get final counts
  const artistCount = await prisma.artist.count();
  const artworkCount = await prisma.artwork.count();
  const museumCount = await prisma.museum.count();
  const movementCount = await prisma.movement.count();

  console.log("\n=== Final Database Counts ===");
  console.log(`Artists: ${artistCount}`);
  console.log(`Artworks: ${artworkCount}`);
  console.log(`Museums: ${museumCount}`);
  console.log(`Movements: ${movementCount}`);

  console.log("\nSeeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
