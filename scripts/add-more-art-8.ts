import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting add-more-art-8 seeding...");

  // First, add new movements
  console.log("\n=== Adding new movements ===");

  const symbolism = await prisma.movement.upsert({
    where: { slug: "symbolism" },
    update: {},
    create: {
      name: "Symbolism",
      slug: "symbolism",
      description:
        "Symbolism was a late 19th-century art movement that rejected realism and naturalism in favor of spirituality, imagination, and dreams. Artists used symbolic imagery to express emotional and psychological truths rather than depicting the visible world.",
      startYear: 1880,
      endYear: 1910,
    },
  });
  console.log("Created movement: Symbolism");

  const luminism = await prisma.movement.upsert({
    where: { slug: "luminism" },
    update: {},
    create: {
      name: "Luminism",
      slug: "luminism",
      description:
        "Luminism was an American landscape painting style of the mid-19th century characterized by attention to the effects of light in landscapes, often with calm water and soft hazy skies. The style emphasized tranquility and precise detail.",
      startYear: 1850,
      endYear: 1875,
    },
  });
  console.log("Created movement: Luminism");

  const orientalism = await prisma.movement.upsert({
    where: { slug: "orientalism" },
    update: {},
    create: {
      name: "Orientalism",
      slug: "orientalism",
      description:
        "Orientalism in art refers to the Western artistic depiction of Middle Eastern, North African, and Asian cultures. It flourished in the 19th century when European artists traveled to these regions and painted scenes of daily life, architecture, and landscapes.",
      startYear: 1800,
      endYear: 1920,
    },
  });
  console.log("Created movement: Orientalism");

  const tonalism = await prisma.movement.upsert({
    where: { slug: "tonalism" },
    update: {},
    create: {
      name: "Tonalism",
      slug: "tonalism",
      description:
        "Tonalism was an American artistic style that emerged in the 1880s and lasted into the 1910s. It emphasized atmosphere and shadow over detail, using dark, muted tones to create moody, intimate landscapes often at dusk or dawn.",
      startYear: 1880,
      endYear: 1915,
    },
  });
  console.log("Created movement: Tonalism");

  const venetianSchool = await prisma.movement.upsert({
    where: { slug: "venetian-school" },
    update: {},
    create: {
      name: "Venetian School",
      slug: "venetian-school",
      description:
        "The Venetian School of painting flourished from the 15th to 18th centuries, characterized by rich color, atmospheric effects, and sensuous brushwork. Venice's unique light and maritime culture influenced artists to emphasize color over the Florentine preference for line.",
      startYear: 1450,
      endYear: 1800,
    },
  });
  console.log("Created movement: Venetian School");

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
      name: "Musée d'Orsay",
      slug: "musee-dorsay",
      city: "Paris",
      country: "France",
      description:
        "A museum housed in a former railway station, featuring the world's largest collection of Impressionist and Post-Impressionist masterpieces.",
    },
    {
      name: "Musée Gustave Moreau",
      slug: "musee-gustave-moreau",
      city: "Paris",
      country: "France",
      description:
        "The former home and studio of Symbolist painter Gustave Moreau, now a museum dedicated to his work.",
    },
    {
      name: "Russian Museum",
      slug: "russian-museum",
      city: "Saint Petersburg",
      country: "Russia",
      description:
        "The largest museum of Russian art, holding over 400,000 items spanning a thousand years.",
    },
    {
      name: "Tretyakov Gallery",
      slug: "tretyakov-gallery",
      city: "Moscow",
      country: "Russia",
      description:
        "The foremost depository of Russian fine art, founded by merchant Pavel Tretyakov in 1856.",
    },
    {
      name: "Museo Nacional del Prado",
      slug: "museo-prado",
      city: "Madrid",
      country: "Spain",
      description:
        "Spain's main national art museum, housing one of the world's finest collections of European art from the 12th to 19th centuries.",
    },
    {
      name: "Thyssen-Bornemisza Museum",
      slug: "thyssen-bornemisza-museum",
      city: "Madrid",
      country: "Spain",
      description:
        "One of Madrid's major art museums, featuring a remarkable collection spanning eight centuries of European painting.",
    },
    {
      name: "Museo Nacional Centro de Arte Reina Sofía",
      slug: "museo-reina-sofia",
      city: "Madrid",
      country: "Spain",
      description:
        "Spain's national museum of 20th-century art, home to Picasso's Guernica and works by Dalí and Miró.",
    },
    {
      name: "Alte Nationalgalerie",
      slug: "alte-nationalgalerie",
      city: "Berlin",
      country: "Germany",
      description:
        "A gallery in Berlin showing 19th-century paintings and sculptures from the Neoclassical period to early Modernism.",
    },
    {
      name: "Neue Pinakothek",
      slug: "neue-pinakothek",
      city: "Munich",
      country: "Germany",
      description:
        "A Munich art museum focusing on European art from the late 18th to early 20th century.",
    },
    {
      name: "Hamburger Kunsthalle",
      slug: "hamburger-kunsthalle",
      city: "Hamburg",
      country: "Germany",
      description:
        "One of the largest art museums in Germany, with collections spanning from medieval to contemporary art.",
    },
    {
      name: "Museum of Fine Arts, Boston",
      slug: "museum-fine-arts-boston",
      city: "Boston",
      country: "USA",
      description:
        "One of the largest art museums in the United States, with a comprehensive collection of Asian, European, and American art.",
    },
    {
      name: "Detroit Institute of Arts",
      slug: "detroit-institute-arts",
      city: "Detroit",
      country: "USA",
      description:
        "One of the largest and most significant art collections in the United States, featuring over 65,000 artworks.",
    },
    {
      name: "Philadelphia Museum of Art",
      slug: "philadelphia-museum-art",
      city: "Philadelphia",
      country: "USA",
      description:
        "One of the largest art museums in America, known for its collections of American, European, and Asian art.",
    },
    {
      name: "Museum Boijmans Van Beuningen",
      slug: "museum-boijmans",
      city: "Rotterdam",
      country: "Netherlands",
      description:
        "A major Dutch art museum with collections ranging from medieval to contemporary art.",
    },
    {
      name: "Frans Hals Museum",
      slug: "frans-hals-museum",
      city: "Haarlem",
      country: "Netherlands",
      description:
        "A museum dedicated to Dutch Golden Age painting, named after the city's most famous artist.",
    },
    {
      name: "Kunsthistorisches Museum",
      slug: "kunsthistorisches-museum-vienna",
      city: "Vienna",
      country: "Austria",
      description:
        "One of the foremost art museums in the world, housing vast collections assembled by the Habsburg dynasty.",
    },
    {
      name: "Musée des Beaux-Arts de Lyon",
      slug: "musee-beaux-arts-lyon",
      city: "Lyon",
      country: "France",
      description:
        "One of France's largest art museums, with collections spanning antiquity to modern art.",
    },
    {
      name: "Galleria dell'Accademia",
      slug: "galleria-accademia-florence",
      city: "Florence",
      country: "Italy",
      description:
        "Famous for housing Michelangelo's David, this museum also holds important Florentine paintings from the 13th to 16th centuries.",
    },
    {
      name: "Pinacoteca di Brera",
      slug: "pinacoteca-brera",
      city: "Milan",
      country: "Italy",
      description:
        "Milan's main public gallery, featuring masterpieces of Italian Renaissance and Baroque painting.",
    },
    {
      name: "Museo di Capodimonte",
      slug: "museo-capodimonte",
      city: "Naples",
      country: "Italy",
      description:
        "One of Italy's largest museums, housing important works from the Farnese collection and Neapolitan masters.",
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

  // Get all museums for artist creation
  const allMuseums = await prisma.museum.findMany();
  const museumMap: Record<string, string> = {};
  allMuseums.forEach((m) => {
    museumMap[m.slug] = m.id;
  });

  // Add new artists
  console.log("\n=== Adding new artists ===");

  const newArtists = [
    // Symbolism
    {
      name: "Gustave Moreau",
      slug: "gustave-moreau",
      birthYear: 1826,
      deathYear: 1898,
      nationality: "French",
      bioShort:
        "French Symbolist painter known for his elaborate mythological and biblical scenes filled with rich detail and mysterious imagery.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Pierre Puvis de Chavannes",
      slug: "pierre-puvis-de-chavannes",
      birthYear: 1824,
      deathYear: 1898,
      nationality: "French",
      bioShort:
        "French painter best known for his mural paintings, considered an important precursor to Symbolism and modern art.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Jan Toorop",
      slug: "jan-toorop",
      birthYear: 1858,
      deathYear: 1928,
      nationality: "Dutch",
      bioShort:
        "Dutch-Indonesian painter who worked in various styles including Symbolism, Art Nouveau, and Pointillism.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Carlos Schwabe",
      slug: "carlos-schwabe",
      birthYear: 1866,
      deathYear: 1926,
      nationality: "Swiss",
      bioShort:
        "Swiss Symbolist painter and printmaker known for his idealistic and mystical allegories.",
      movements: [movementMap["symbolism"]],
    },

    // Russian Realism and Wanderers
    {
      name: "Ivan Shishkin",
      slug: "ivan-shishkin",
      birthYear: 1832,
      deathYear: 1898,
      nationality: "Russian",
      bioShort:
        "Russian landscape painter known as the 'singer of the forest' for his detailed paintings of Russian woodlands.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Viktor Vasnetsov",
      slug: "viktor-vasnetsov",
      birthYear: 1848,
      deathYear: 1926,
      nationality: "Russian",
      bioShort:
        "Russian artist who specialized in mythological and historical subjects, becoming a leading figure in Russian Romanticism.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Valentin Serov",
      slug: "valentin-serov",
      birthYear: 1865,
      deathYear: 1911,
      nationality: "Russian",
      bioShort:
        "Russian painter and portraitist, considered one of the premier portrait artists of his era.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Mikhail Vrubel",
      slug: "mikhail-vrubel",
      birthYear: 1856,
      deathYear: 1910,
      nationality: "Russian",
      bioShort:
        "Russian painter who worked in all genres including religious art, but is best known for his mystical and demonic subjects.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Isaac Levitan",
      slug: "isaac-levitan",
      birthYear: 1860,
      deathYear: 1900,
      nationality: "Russian",
      bioShort:
        "Russian landscape painter regarded as one of the greatest Russian painters of all time.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Vasily Polenov",
      slug: "vasily-polenov",
      birthYear: 1844,
      deathYear: 1927,
      nationality: "Russian",
      bioShort:
        "Russian landscape and historical painter, known for his paintings of the life of Christ.",
      movements: [movementMap["romanticism"]],
    },

    // Academic/Victorian
    {
      name: "John William Godward",
      slug: "john-william-godward",
      birthYear: 1861,
      deathYear: 1922,
      nationality: "British",
      bioShort:
        "English painter known for his depictions of beautiful women in classical Greco-Roman settings.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Herbert James Draper",
      slug: "herbert-james-draper",
      birthYear: 1863,
      deathYear: 1920,
      nationality: "British",
      bioShort:
        "English Classicist painter best known for his paintings of mythological scenes featuring women.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Edmund Blair Leighton",
      slug: "edmund-blair-leighton",
      birthYear: 1852,
      deathYear: 1922,
      nationality: "British",
      bioShort:
        "English painter specializing in historical genre scenes, particularly from the medieval era.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Frank Dicksee",
      slug: "frank-dicksee",
      birthYear: 1853,
      deathYear: 1928,
      nationality: "British",
      bioShort:
        "English painter and illustrator known for his romantic literary and historical subjects.",
      movements: [movementMap["pre-raphaelite-brotherhood"]],
    },
    {
      name: "Evelyn De Morgan",
      slug: "evelyn-de-morgan",
      birthYear: 1855,
      deathYear: 1919,
      nationality: "British",
      bioShort:
        "English painter associated with the later Pre-Raphaelite movement, known for her allegorical works.",
      movements: [movementMap["pre-raphaelite-brotherhood"]],
    },

    // German/Austrian
    {
      name: "Adolph Menzel",
      slug: "adolph-menzel",
      birthYear: 1815,
      deathYear: 1905,
      nationality: "German",
      bioShort:
        "German artist known for drawings, etchings, and paintings, considered the most prominent German artist of his time.",
      movements: [movementMap["romanticism"]],
    },
    {
      name: "Hans Makart",
      slug: "hans-makart",
      birthYear: 1840,
      deathYear: 1884,
      nationality: "Austrian",
      bioShort:
        "Austrian academic history painter, designer, and decorator, highly influential in Viennese high society.",
      movements: [movementMap["academic-art"]],
    },

    // French Academic
    {
      name: "Thomas Couture",
      slug: "thomas-couture",
      birthYear: 1815,
      deathYear: 1879,
      nationality: "French",
      bioShort:
        "French history painter and teacher whose students included Manet, Puvis de Chavannes, and Fantin-Latour.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Jules Breton",
      slug: "jules-breton",
      birthYear: 1827,
      deathYear: 1906,
      nationality: "French",
      bioShort:
        "French Realist painter known for his pastoral scenes depicting peasant life in his native Artois.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Ernest Meissonier",
      slug: "ernest-meissonier",
      birthYear: 1815,
      deathYear: 1891,
      nationality: "French",
      bioShort:
        "French academic painter known for his military and historical subjects painted with meticulous detail.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Jules Bastien-Lepage",
      slug: "jules-bastien-lepage",
      birthYear: 1848,
      deathYear: 1884,
      nationality: "French",
      bioShort:
        "French painter associated with Naturalism, known for his rural subjects and influential plein air technique.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Théodore Chassériau",
      slug: "theodore-chasseriau",
      birthYear: 1819,
      deathYear: 1856,
      nationality: "French",
      bioShort:
        "French Romantic painter who studied under Ingres and combined Neoclassical technique with Romantic color.",
      movements: [movementMap["romanticism"], movementMap["orientalism"]],
    },

    // Dutch Golden Age additions
    {
      name: "Gerrit Dou",
      slug: "gerrit-dou",
      birthYear: 1613,
      deathYear: 1675,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter, a pupil of Rembrandt, known for his highly polished paintings with minute details.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Gerard van Honthorst",
      slug: "gerard-van-honthorst",
      birthYear: 1592,
      deathYear: 1656,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter known for his night scenes lit by candlelight, influenced by Caravaggio.",
      movements: [movementMap["baroque"], movementMap["dutch-golden-age"]],
    },
    {
      name: "Paulus Potter",
      slug: "paulus-potter",
      birthYear: 1625,
      deathYear: 1654,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter specializing in animals in landscapes, known for his life-sized depictions of cattle.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Emanuel de Witte",
      slug: "emanuel-de-witte",
      birthYear: 1617,
      deathYear: 1692,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter known for his church interiors and architectural paintings.",
      movements: [movementMap["dutch-golden-age"]],
    },
    {
      name: "Philips Wouwerman",
      slug: "philips-wouwerman",
      birthYear: 1619,
      deathYear: 1668,
      nationality: "Dutch",
      bioShort:
        "Dutch Golden Age painter known for his horse subjects and battle scenes.",
      movements: [movementMap["dutch-golden-age"]],
    },

    // Italian Renaissance additions
    {
      name: "Sassetta",
      slug: "sassetta",
      birthYear: 1392,
      deathYear: 1450,
      nationality: "Italian",
      bioShort:
        "Italian painter who led the Sienese school during the early Renaissance, known for his mystical religious scenes.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Giovanni di Paolo",
      slug: "giovanni-di-paolo",
      birthYear: 1403,
      deathYear: 1482,
      nationality: "Italian",
      bioShort:
        "Italian painter from the Sienese school, known for his distinctive style combining Byzantine and Gothic elements.",
      movements: [movementMap["renaissance"]],
    },
    {
      name: "Domenico Beccafumi",
      slug: "domenico-beccafumi",
      birthYear: 1486,
      deathYear: 1551,
      nationality: "Italian",
      bioShort:
        "Italian Renaissance and Mannerist painter working in Siena, known for his dramatic compositions.",
      movements: [movementMap["mannerism"]],
    },
    {
      name: "Sebastiano del Piombo",
      slug: "sebastiano-del-piombo",
      birthYear: 1485,
      deathYear: 1547,
      nationality: "Italian",
      bioShort:
        "Italian Renaissance painter who combined Venetian color with Roman monumental forms.",
      movements: [movementMap["renaissance"], movementMap["venetian-school"]],
    },
    {
      name: "Dosso Dossi",
      slug: "dosso-dossi",
      birthYear: 1490,
      deathYear: 1542,
      nationality: "Italian",
      bioShort:
        "Italian Renaissance painter of the Ferrara school, known for his mythological and allegorical subjects.",
      movements: [movementMap["renaissance"]],
    },

    // Spanish additions
    {
      name: "Luis Meléndez",
      slug: "luis-melendez",
      birthYear: 1716,
      deathYear: 1780,
      nationality: "Spanish",
      bioShort:
        "Spanish painter considered the greatest still life painter of 18th-century Spain.",
      movements: [movementMap["baroque"]],
    },
    {
      name: "Juan de Valdés Leal",
      slug: "juan-de-valdes-leal",
      birthYear: 1622,
      deathYear: 1690,
      nationality: "Spanish",
      bioShort:
        "Spanish Baroque painter known for his dramatic religious works and vanitas paintings.",
      movements: [movementMap["baroque"]],
    },

    // American Luminism/Tonalism
    {
      name: "Fitz Henry Lane",
      slug: "fitz-henry-lane",
      birthYear: 1804,
      deathYear: 1865,
      nationality: "American",
      bioShort:
        "American marine artist known for his luminous harbor scenes and seascapes, a key figure in American Luminism.",
      movements: [movementMap["luminism"]],
    },
    {
      name: "John Frederick Kensett",
      slug: "john-frederick-kensett",
      birthYear: 1816,
      deathYear: 1872,
      nationality: "American",
      bioShort:
        "American landscape painter and engraver, a founding member of the Metropolitan Museum of Art.",
      movements: [movementMap["hudson-river-school"], movementMap["luminism"]],
    },
    {
      name: "Sanford Robinson Gifford",
      slug: "sanford-robinson-gifford",
      birthYear: 1823,
      deathYear: 1880,
      nationality: "American",
      bioShort:
        "American landscape painter known for his atmospheric paintings emphasizing light and air.",
      movements: [movementMap["hudson-river-school"], movementMap["luminism"]],
    },
    {
      name: "George Inness Jr.",
      slug: "george-inness-jr",
      birthYear: 1854,
      deathYear: 1926,
      nationality: "American",
      bioShort:
        "American landscape painter and son of George Inness, known for his tonalist landscapes.",
      movements: [movementMap["tonalism"]],
    },

    // Orientalism
    {
      name: "Frederick Arthur Bridgman",
      slug: "frederick-arthur-bridgman",
      birthYear: 1847,
      deathYear: 1928,
      nationality: "American",
      bioShort:
        "American artist known for his paintings of scenes from North Africa and the Middle East.",
      movements: [movementMap["orientalism"]],
    },
    {
      name: "Ludwig Deutsch",
      slug: "ludwig-deutsch",
      birthYear: 1855,
      deathYear: 1935,
      nationality: "Austrian",
      bioShort:
        "Austrian painter known for his highly detailed and painstakingly researched Orientalist paintings.",
      movements: [movementMap["orientalism"]],
    },
    {
      name: "Rudolf Ernst",
      slug: "rudolf-ernst",
      birthYear: 1854,
      deathYear: 1932,
      nationality: "Austrian",
      bioShort:
        "Austrian Orientalist painter known for his detailed interiors of North African and Middle Eastern architecture.",
      movements: [movementMap["orientalism"]],
    },

    // More Venetian School
    {
      name: "Paris Bordone",
      slug: "paris-bordone",
      birthYear: 1500,
      deathYear: 1571,
      nationality: "Italian",
      bioShort:
        "Italian painter of the Venetian school, a pupil of Titian known for his portraits and mythological scenes.",
      movements: [movementMap["renaissance"], movementMap["venetian-school"]],
    },
    {
      name: "Palma Vecchio",
      slug: "palma-vecchio",
      birthYear: 1480,
      deathYear: 1528,
      nationality: "Italian",
      bioShort:
        "Italian painter of the Venetian school, known for his beautiful blonde women and sacra conversazione paintings.",
      movements: [movementMap["renaissance"], movementMap["venetian-school"]],
    },

    // Scandinavian
    {
      name: "Peder Severin Krøyer",
      slug: "peder-severin-kroyer",
      birthYear: 1851,
      deathYear: 1909,
      nationality: "Danish",
      bioShort:
        "Danish painter, one of the Skagen Painters, known for his luminous beach scenes and portraits.",
      movements: [movementMap["impressionism"]],
    },
    {
      name: "Akseli Gallen-Kallela",
      slug: "akseli-gallen-kallela",
      birthYear: 1865,
      deathYear: 1931,
      nationality: "Finnish",
      bioShort:
        "Finnish painter best known for his illustrations of the Kalevala, the Finnish national epic.",
      movements: [movementMap["symbolism"]],
    },
    {
      name: "Richard Bergh",
      slug: "richard-bergh",
      birthYear: 1858,
      deathYear: 1919,
      nationality: "Swedish",
      bioShort:
        "Swedish painter and art historian, one of the leading Swedish artists of his generation.",
      movements: [movementMap["impressionism"]],
    },

    // Belgian
    {
      name: "James Ensor",
      slug: "james-ensor",
      birthYear: 1860,
      deathYear: 1949,
      nationality: "Belgian",
      bioShort:
        "Belgian painter and printmaker, an important influence on Expressionism and Surrealism.",
      movements: [movementMap["symbolism"], movementMap["expressionism"]],
    },
    {
      name: "Félicien Rops",
      slug: "felicien-rops",
      birthYear: 1833,
      deathYear: 1898,
      nationality: "Belgian",
      bioShort:
        "Belgian artist known for his provocative and often macabre symbolist works.",
      movements: [movementMap["symbolism"]],
    },

    // More French
    {
      name: "Léon Bonnat",
      slug: "leon-bonnat",
      birthYear: 1833,
      deathYear: 1922,
      nationality: "French",
      bioShort:
        "French painter and art collector, known for his portraits of prominent figures.",
      movements: [movementMap["academic-art"]],
    },
    {
      name: "Carolus-Duran",
      slug: "carolus-duran",
      birthYear: 1837,
      deathYear: 1917,
      nationality: "French",
      bioShort:
        "French painter and art instructor, teacher of John Singer Sargent and other notable artists.",
      movements: [movementMap["academic-art"]],
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

  // Get all artists for artwork creation
  const allArtists = await prisma.artist.findMany();
  const artistMap: Record<string, string> = {};
  allArtists.forEach((a) => {
    artistMap[a.slug] = a.id;
  });

  // Add new artworks
  console.log("\n=== Adding new artworks ===");

  const newArtworks = [
    // Gustave Moreau
    {
      title: "Jupiter and Semele",
      slug: "jupiter-and-semele",
      artistSlug: "gustave-moreau",
      year: 1895,
      medium: "Oil on canvas",
      dimensions: "212 cm × 118 cm",
      description:
        "A monumental work depicting the myth of Zeus revealing his divine form to his mortal lover Semele, resulting in her death from his brilliance.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gustave_Moreau_-_Jupiter_and_Semele_-_WGA16206.jpg",
      museumSlug: "musee-gustave-moreau",
    },
    {
      title: "The Apparition",
      slug: "the-apparition-moreau",
      artistSlug: "gustave-moreau",
      year: 1876,
      medium: "Watercolor",
      dimensions: "106 cm × 72 cm",
      description:
        "Depicts Salome confronted by the floating, luminous head of John the Baptist, a haunting scene from the Biblical narrative.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Gustave_Moreau_-_l%27Apparition.jpg",
      museumSlug: "musee-dorsay",
    },
    {
      title: "Oedipus and the Sphinx",
      slug: "oedipus-and-the-sphinx-moreau",
      artistSlug: "gustave-moreau",
      year: 1864,
      medium: "Oil on canvas",
      dimensions: "206 cm × 105 cm",
      description:
        "Shows the confrontation between Oedipus and the Sphinx, the moment before he answers her riddle correctly.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Gustave_Moreau_-_Oedipus_and_the_Sphinx_-_WGA16193.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Ivan Shishkin
    {
      title: "Morning in a Pine Forest",
      slug: "morning-in-a-pine-forest",
      artistSlug: "ivan-shishkin",
      year: 1889,
      medium: "Oil on canvas",
      dimensions: "139 cm × 213 cm",
      description:
        "One of Russia's most beloved paintings, depicting bear cubs playing on a fallen tree in a misty forest. The bears were painted by Konstantin Savitsky.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Utro_v_sosnovom_lesu.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "Rain in an Oak Forest",
      slug: "rain-in-an-oak-forest",
      artistSlug: "ivan-shishkin",
      year: 1891,
      medium: "Oil on canvas",
      dimensions: "124 cm × 203 cm",
      description:
        "A masterful depiction of a summer rainstorm in a Russian oak forest, with figures walking along a muddy path.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Ivan_Shishkin_-_Rain_in_an_Oak_Forest_-_Google_Art_Project.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Viktor Vasnetsov
    {
      title: "Bogatyrs",
      slug: "bogatyrs",
      artistSlug: "viktor-vasnetsov",
      year: 1898,
      medium: "Oil on canvas",
      dimensions: "295.3 cm × 446 cm",
      description:
        "Depicts three legendary Russian knights: Dobrynya Nikitich, Ilya Muromets, and Alyosha Popovich, guardians of the Russian land.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Vasnetsov_Bogatyri.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "Ivan Tsarevich Riding the Grey Wolf",
      slug: "ivan-tsarevich-riding-grey-wolf",
      artistSlug: "viktor-vasnetsov",
      year: 1889,
      medium: "Oil on canvas",
      dimensions: "249 cm × 187 cm",
      description:
        "Illustrates the Russian fairy tale of Ivan Tsarevich escaping on a magical grey wolf with his beloved princess.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Vasnetsov_Sirin_Alkonost.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Mikhail Vrubel
    {
      title: "The Demon Seated",
      slug: "demon-seated",
      artistSlug: "mikhail-vrubel",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "114 cm × 211 cm",
      description:
        "A melancholic figure sits at twilight in a mountainous landscape, inspired by Lermontov's poem 'The Demon'.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vrubel_Demon.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "The Swan Princess",
      slug: "swan-princess",
      artistSlug: "mikhail-vrubel",
      year: 1900,
      medium: "Oil on canvas",
      dimensions: "142.5 cm × 93.5 cm",
      description:
        "Depicts a mythical princess who can transform into a swan, a subject from Russian folklore and Rimsky-Korsakov's opera.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Vrubel_The_Swan_Princess.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Isaac Levitan
    {
      title: "Above Eternal Peace",
      slug: "above-eternal-peace",
      artistSlug: "isaac-levitan",
      year: 1894,
      medium: "Oil on canvas",
      dimensions: "150 cm × 206 cm",
      description:
        "A panoramic view from a high cliff over a vast lake and sky, conveying the eternal tranquility of nature.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Above_eternal_peace%2C_Levitan%2C_1894.jpg",
      museumSlug: "tretyakov-gallery",
    },
    {
      title: "Golden Autumn",
      slug: "golden-autumn",
      artistSlug: "isaac-levitan",
      year: 1895,
      medium: "Oil on canvas",
      dimensions: "82 cm × 126 cm",
      description:
        "A luminous depiction of birch trees in their golden fall foliage along a winding river.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Levitan_Zolotaya_Osen.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // John William Godward
    {
      title: "Dolce Far Niente",
      slug: "dolce-far-niente-godward",
      artistSlug: "john-william-godward",
      year: 1904,
      medium: "Oil on canvas",
      dimensions: "99 cm × 50 cm",
      description:
        "A beautiful woman reclines on a marble bench in a classical setting, epitomizing the sweet idleness of the title.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Godward_Dolce_Far_Niente_1904.jpg",
      museumSlug: null,
    },
    {
      title: "The Betrothed",
      slug: "the-betrothed-godward",
      artistSlug: "john-william-godward",
      year: 1892,
      medium: "Oil on canvas",
      dimensions: "76 cm × 51 cm",
      description:
        "A young woman in classical dress gazes contemplatively, wearing an engagement ring.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Godward-The_Betrothed-1892.jpg",
      museumSlug: null,
    },

    // Herbert James Draper
    {
      title: "The Lament for Icarus",
      slug: "lament-for-icarus",
      artistSlug: "herbert-james-draper",
      year: 1898,
      medium: "Oil on canvas",
      dimensions: "182.9 cm × 155.6 cm",
      description:
        "Sea nymphs mourn over the body of Icarus, who flew too close to the sun with his wax wings.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Draper_Herbert_James_Mourning_for_Icarus.jpg",
      museumSlug: "tate-britain",
    },
    {
      title: "Ulysses and the Sirens",
      slug: "ulysses-and-sirens-draper",
      artistSlug: "herbert-james-draper",
      year: 1909,
      medium: "Oil on canvas",
      dimensions: "177 cm × 213.5 cm",
      description:
        "Ulysses bound to the mast of his ship while the sirens, depicted as beautiful women, try to lure him.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Draper_Herbert_James_Ulysses_and_the_Sirens.jpg",
      museumSlug: null,
    },

    // Edmund Blair Leighton
    {
      title: "The Accolade",
      slug: "the-accolade-leighton",
      artistSlug: "edmund-blair-leighton",
      year: 1901,
      medium: "Oil on canvas",
      dimensions: "182.9 cm × 109.2 cm",
      description:
        "A queen or noble lady knights a young man in a romantic medieval ceremony.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Edmund_Blair_Leighton_-_Accolade.jpg",
      museumSlug: null,
    },
    {
      title: "God Speed",
      slug: "god-speed-leighton",
      artistSlug: "edmund-blair-leighton",
      year: 1900,
      medium: "Oil on canvas",
      dimensions: "160 cm × 117.5 cm",
      description:
        "A lady ties a red sash around the arm of a knight departing for battle or crusade.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Leighton-God_Speed%21.jpg",
      museumSlug: null,
    },

    // Frank Dicksee
    {
      title: "La Belle Dame sans Merci",
      slug: "la-belle-dame-sans-merci-dicksee",
      artistSlug: "frank-dicksee",
      year: 1902,
      medium: "Oil on canvas",
      dimensions: "137 cm × 188 cm",
      description:
        "Illustrates Keats's poem about a knight enchanted by a beautiful but cruel fairy woman.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Frank_Dicksee_-_La_Belle_Dame_sans_Merci.jpg",
      museumSlug: null,
    },
    {
      title: "Romeo and Juliet",
      slug: "romeo-and-juliet-dicksee",
      artistSlug: "frank-dicksee",
      year: 1884,
      medium: "Oil on canvas",
      dimensions: "171 cm × 118 cm",
      description:
        "The famous balcony scene from Shakespeare's play, with the young lovers in passionate embrace.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Romeo_and_juliet_brown.jpg",
      museumSlug: null,
    },

    // Adolph Menzel
    {
      title: "The Iron Rolling Mill",
      slug: "iron-rolling-mill",
      artistSlug: "adolph-menzel",
      year: 1875,
      medium: "Oil on canvas",
      dimensions: "158 cm × 254 cm",
      description:
        "A groundbreaking depiction of industrial labor, showing workers in a German iron foundry.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Adolf_Menzel_-_Eisenwalzwerk_-_Google_Art_Project.jpg",
      museumSlug: "alte-nationalgalerie",
    },
    {
      title: "The Flute Concert of Frederick the Great",
      slug: "flute-concert-frederick-great",
      artistSlug: "adolph-menzel",
      year: 1852,
      medium: "Oil on canvas",
      dimensions: "142 cm × 205 cm",
      description:
        "Frederick the Great plays the flute at his palace at Sanssouci, with C.P.E. Bach at the keyboard.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Adolph_Menzel_-_Fl%C3%B6tenkonzert_Friedrichs_des_Gro%C3%9Fen_in_Sanssouci_-_Google_Art_Project.jpg",
      museumSlug: "alte-nationalgalerie",
    },

    // Thomas Couture
    {
      title: "Romans during the Decadence",
      slug: "romans-during-decadence",
      artistSlug: "thomas-couture",
      year: 1847,
      medium: "Oil on canvas",
      dimensions: "472 cm × 772 cm",
      description:
        "A monumental scene of moral decay in ancient Rome, showing revelry in a classical setting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Thomas_Couture_-_Romans_of_the_Decadence_-_Google_Art_Project.jpg",
      museumSlug: "musee-dorsay",
    },

    // Gerrit Dou
    {
      title: "Old Woman Reading a Lectionary",
      slug: "old-woman-reading-lectionary",
      artistSlug: "gerrit-dou",
      year: 1631,
      medium: "Oil on panel",
      dimensions: "71 cm × 55.5 cm",
      description:
        "An elderly woman reads by the light of a candle, demonstrating Dou's mastery of light effects.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Gerard_Dou_-_Old_Woman_Reading_-_WGA06646.jpg",
      museumSlug: "rijksmuseum",
    },

    // Gerard van Honthorst
    {
      title: "The Matchmaker",
      slug: "the-matchmaker",
      artistSlug: "gerard-van-honthorst",
      year: 1625,
      medium: "Oil on canvas",
      dimensions: "71 cm × 104 cm",
      description:
        "A candlelit scene showing an old woman offering a young woman to a man, demonstrating the artist's mastery of chiaroscuro.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gerard_van_Honthorst_-_The_Matchmaker_-_WGA11666.jpg",
      museumSlug: null,
    },

    // Paulus Potter
    {
      title: "The Young Bull",
      slug: "the-young-bull",
      artistSlug: "paulus-potter",
      year: 1647,
      medium: "Oil on canvas",
      dimensions: "235.5 cm × 339 cm",
      description:
        "A life-sized depiction of a young bull in a pastoral Dutch landscape, one of the most famous animal paintings.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Paulus_Potter_-_The_Bull_-_WGA18229.jpg",
      museumSlug: "mauritshuis",
    },

    // Sassetta
    {
      title: "The Journey of the Magi",
      slug: "journey-of-the-magi-sassetta",
      artistSlug: "sassetta",
      year: 1435,
      medium: "Tempera and gold on wood",
      dimensions: "21.6 cm × 29.8 cm",
      description:
        "Part of an altarpiece showing the three wise men traveling through a fantastical landscape.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sassetta_-_The_Journey_of_the_Magi_-_WGA20861.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Sebastiano del Piombo
    {
      title: "The Raising of Lazarus",
      slug: "raising-of-lazarus-sebastiano",
      artistSlug: "sebastiano-del-piombo",
      year: 1519,
      medium: "Oil on canvas, transferred from wood",
      dimensions: "381 cm × 289.6 cm",
      description:
        "A monumental work created in competition with Raphael, depicting Christ raising Lazarus from the dead.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Sebastiano_del_Piombo_-_The_Raising_of_Lazarus_-_Google_Art_Project.jpg",
      museumSlug: "national-gallery",
    },

    // Luis Meléndez
    {
      title: "Still Life with Oranges and Walnuts",
      slug: "still-life-oranges-walnuts",
      artistSlug: "luis-melendez",
      year: 1772,
      medium: "Oil on canvas",
      dimensions: "61 cm × 81 cm",
      description:
        "A masterful Spanish still life with brilliant oranges, walnuts, and ceramic vessels.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Luis_Mel%C3%A9ndez_-_Still_Life_with_Oranges_and_Walnuts_-_WGA14769.jpg",
      museumSlug: "national-gallery",
    },

    // Fitz Henry Lane
    {
      title: "Boston Harbor",
      slug: "boston-harbor-lane",
      artistSlug: "fitz-henry-lane",
      year: 1850,
      medium: "Oil on canvas",
      dimensions: "66 cm × 107 cm",
      description:
        "A luminous view of Boston Harbor with ships and the city skyline bathed in soft light.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Boston_Harbor%2C_by_Fitz_Hugh_Lane.jpg",
      museumSlug: "museum-fine-arts-boston",
    },

    // John Frederick Kensett
    {
      title: "Eaton's Neck, Long Island",
      slug: "eatons-neck-long-island",
      artistSlug: "john-frederick-kensett",
      year: 1872,
      medium: "Oil on canvas",
      dimensions: "91.4 cm × 152.7 cm",
      description:
        "A serene coastal scene demonstrating Kensett's mastery of atmospheric light effects.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/John_Frederick_Kensett_-_Eaton%27s_Neck%2C_Long_Island_%281872%29.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Ludwig Deutsch
    {
      title: "The Scribe",
      slug: "the-scribe-deutsch",
      artistSlug: "ludwig-deutsch",
      year: 1904,
      medium: "Oil on panel",
      dimensions: "71 cm × 54 cm",
      description:
        "A meticulously detailed depiction of an Arab scribe writing at his desk.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ludwig_Deutsch_-_The_Scribe_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Théodore Chassériau
    {
      title: "The Toilette of Esther",
      slug: "toilette-of-esther",
      artistSlug: "theodore-chasseriau",
      year: 1841,
      medium: "Oil on canvas",
      dimensions: "45.5 cm × 35.5 cm",
      description:
        "The biblical queen Esther prepares herself before meeting King Ahasuerus.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Chasseriau_toilette_d%27Esther_1841.jpg",
      museumSlug: "louvre",
    },

    // James Ensor
    {
      title: "Christ's Entry into Brussels in 1889",
      slug: "christs-entry-into-brussels",
      artistSlug: "james-ensor",
      year: 1889,
      medium: "Oil on canvas",
      dimensions: "252.7 cm × 430.5 cm",
      description:
        "A monumental satirical work showing Christ arriving amid a carnival of grotesque masked figures.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Christ%27s_Entry_Into_Brussels_in_1889.jpg",
      museumSlug: null,
    },

    // Peder Severin Krøyer
    {
      title: "Summer Evening at Skagen Beach",
      slug: "summer-evening-skagen-beach",
      artistSlug: "peder-severin-kroyer",
      year: 1899,
      medium: "Oil on canvas",
      dimensions: "135 cm × 190 cm",
      description:
        "Two women in white dresses walk along the beach at twilight in the famous blue hour light of Skagen.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/P.S._Kr%C3%B8yer_-_Summer_evening_at_Skagen_beach._The_artist_and_his_wife._-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Akseli Gallen-Kallela
    {
      title: "The Aino Triptych",
      slug: "aino-triptych",
      artistSlug: "akseli-gallen-kallela",
      year: 1891,
      medium: "Oil on canvas",
      dimensions: "154 cm × 380 cm",
      description:
        "Depicts a scene from the Kalevala where the maiden Aino drowns herself rather than marry the elderly Väinämöinen.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Gallen_Kallela_The_Aino_Triptych.jpg",
      museumSlug: null,
    },

    // Pierre Puvis de Chavannes
    {
      title: "The Poor Fisherman",
      slug: "the-poor-fisherman",
      artistSlug: "pierre-puvis-de-chavannes",
      year: 1881,
      medium: "Oil on canvas",
      dimensions: "155.5 cm × 192.5 cm",
      description:
        "A solitary fisherman stands in his boat while his family rests on the shore, a scene of quiet poverty.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Pierre_Puvis_de_Chavannes_-_The_Poor_Fisherman_-_Google_Art_Project.jpg",
      museumSlug: "musee-dorsay",
    },

    // Valentin Serov
    {
      title: "Girl with Peaches",
      slug: "girl-with-peaches",
      artistSlug: "valentin-serov",
      year: 1887,
      medium: "Oil on canvas",
      dimensions: "91 cm × 85 cm",
      description:
        "A portrait of Vera Mamontova, daughter of a Russian industrialist, capturing the freshness of youth.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Serov_Valentin_Girl_with_Peaches.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Vasily Polenov
    {
      title: "Moscow Courtyard",
      slug: "moscow-courtyard",
      artistSlug: "vasily-polenov",
      year: 1878,
      medium: "Oil on canvas",
      dimensions: "64.5 cm × 80.1 cm",
      description:
        "A sunlit view of a typical old Moscow courtyard with children playing and churches in the background.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Московский_дворик.jpg",
      museumSlug: "tretyakov-gallery",
    },

    // Evelyn De Morgan
    {
      title: "The Angel of Death",
      slug: "angel-of-death-morgan",
      artistSlug: "evelyn-de-morgan",
      year: 1881,
      medium: "Oil on canvas",
      dimensions: "96 cm × 117 cm",
      description:
        "A winged figure approaches a woman in white, symbolizing the transition between life and death.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Evelyn_De_Morgan_-_Angel_of_Death.jpg",
      museumSlug: null,
    },

    // Jules Breton
    {
      title: "The Song of the Lark",
      slug: "song-of-the-lark",
      artistSlug: "jules-breton",
      year: 1884,
      medium: "Oil on canvas",
      dimensions: "110.6 cm × 85.8 cm",
      description:
        "A peasant girl pauses in the fields at dawn, looking up at a singing lark.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Jules_Breton_-_Song_of_the_Lark_-_Google_Art_Project.jpg",
      museumSlug: "art-institute-of-chicago",
    },

    // Ernest Meissonier
    {
      title: "1807, Friedland",
      slug: "1807-friedland",
      artistSlug: "ernest-meissonier",
      year: 1875,
      medium: "Oil on canvas",
      dimensions: "135.9 cm × 242.6 cm",
      description:
        "A dramatic depiction of Napoleon and his cavalry at the Battle of Friedland.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jean-Louis-Ernest_Meissonier_-_Friedland%2C_1807.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Jan Toorop
    {
      title: "The Three Brides",
      slug: "the-three-brides",
      artistSlug: "jan-toorop",
      year: 1893,
      medium: "Pencil, black and colored chalk on brown paper",
      dimensions: "78 cm × 98 cm",
      description:
        "A highly symbolic work showing three brides representing earthly, heavenly, and satanic love.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Jan_Toorop_-_De_drie_bruiden.jpg",
      museumSlug: null,
    },

    // Félicien Rops
    {
      title: "Pornokrates",
      slug: "pornokrates",
      artistSlug: "felicien-rops",
      year: 1878,
      medium: "Watercolor and pastel on paper",
      dimensions: "75 cm × 48 cm",
      description:
        "A provocative Symbolist work showing a blindfolded nude woman led by a pig, symbolizing vice.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/F%C3%A9licien_Rops_-_Pornokrates_-_1878.jpg",
      museumSlug: null,
    },

    // Palma Vecchio
    {
      title: "Portrait of a Woman (La Bella)",
      slug: "la-bella-palma-vecchio",
      artistSlug: "palma-vecchio",
      year: 1525,
      medium: "Oil on canvas",
      dimensions: "95 cm × 80 cm",
      description:
        "A sensuous portrait of an idealized Venetian beauty with golden hair and luxurious clothing.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Palma_il_Vecchio_-_Portrait_of_a_Woman_-_WGA16923.jpg",
      museumSlug: "thyssen-bornemisza-museum",
    },

    // Paris Bordone
    {
      title: "Fisherman Presenting the Ring to the Doge",
      slug: "fisherman-presenting-ring-doge",
      artistSlug: "paris-bordone",
      year: 1535,
      medium: "Oil on canvas",
      dimensions: "370 cm × 300 cm",
      description:
        "Depicts the legend of a Venetian fisherman returning a ring given by St. Mark to the Doge.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Paris_Bordone_-_Presentation_of_the_Ring_to_the_Doge_-_WGA02447.jpg",
      museumSlug: "gallerie-dellaccademia",
    },

    // Frederick Arthur Bridgman
    {
      title: "The Funeral of a Mummy",
      slug: "funeral-of-a-mummy",
      artistSlug: "frederick-arthur-bridgman",
      year: 1877,
      medium: "Oil on canvas",
      dimensions: "147 cm × 243 cm",
      description:
        "An elaborate Egyptian funeral procession crosses the Nile, showcasing Bridgman's Orientalist style.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/Frederick_Arthur_Bridgman_Funeral_of_a_Mummy.jpg",
      museumSlug: null,
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
