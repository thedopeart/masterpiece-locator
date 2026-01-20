import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const moreArtworks = [
  // Botticelli
  {
    slug: "primavera",
    title: "Primavera",
    year: 1482,
    medium: "Tempera on panel",
    dimensions: "202 cm × 314 cm",
    description: "An allegorical painting featuring figures from classical mythology in a garden, representing the season of spring.",
    historicalSignificance: "One of the most written about paintings in the Western world, its complex symbolism continues to be debated.",
    galleryRoom: "Room 10-14",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "sandro-botticelli",
    museumSlug: "uffizi",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg",
  },
  // Michelangelo
  {
    slug: "creation-of-adam",
    title: "The Creation of Adam",
    year: 1512,
    medium: "Fresco",
    dimensions: "280 cm × 570 cm",
    description: "Part of the Sistine Chapel ceiling, showing God giving life to Adam, their fingers nearly touching.",
    historicalSignificance: "One of the most replicated religious images, representing the relationship between humanity and God.",
    galleryRoom: "Sistine Chapel",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "michelangelo",
    museumSlug: "vatican",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
  },
  // Raphael
  {
    slug: "school-of-athens",
    title: "The School of Athens",
    year: 1511,
    medium: "Fresco",
    dimensions: "500 cm × 770 cm",
    description: "A fresco depicting the greatest philosophers and scientists of ancient Greece gathered in one space.",
    historicalSignificance: "Considered one of the High Renaissance's masterworks, demonstrating perfect perspective and composition.",
    galleryRoom: "Stanza della Segnatura",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "raphael",
    museumSlug: "vatican",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
  },
  // Caravaggio
  {
    slug: "the-calling-of-saint-matthew",
    title: "The Calling of Saint Matthew",
    year: 1600,
    medium: "Oil on canvas",
    dimensions: "322 cm × 340 cm",
    description: "Christ pointing at Matthew the tax collector, the moment of his calling to become an apostle.",
    historicalSignificance: "A revolutionary work that established Caravaggio's dramatic use of light, known as tenebrism.",
    galleryRoom: "Contarelli Chapel",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "caravaggio",
    museumSlug: "san-luigi",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1280px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
  },
  {
    slug: "judith-beheading-holofernes",
    title: "Judith Beheading Holofernes",
    year: 1599,
    medium: "Oil on canvas",
    dimensions: "145 cm × 195 cm",
    description: "The biblical heroine Judith decapitating Assyrian general Holofernes to save her people.",
    historicalSignificance: "Shows Caravaggio's unflinching realism and dramatic lighting at its most intense.",
    galleryRoom: "Barberini Gallery",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "caravaggio",
    museumSlug: "barberini",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Caravaggio_Judith_Beheading_Holofernes.jpg/800px-Caravaggio_Judith_Beheading_Holofernes.jpg",
  },
  // Velázquez
  {
    slug: "las-meninas",
    title: "Las Meninas",
    year: 1656,
    medium: "Oil on canvas",
    dimensions: "318 cm × 276 cm",
    description: "The Infanta Margaret Theresa surrounded by her entourage, with Velázquez himself painting at a large canvas.",
    historicalSignificance: "Called 'the theology of painting' by Luca Giordano, its complex composition has fascinated artists for centuries.",
    galleryRoom: "Room 12",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "diego-velazquez",
    museumSlug: "prado",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
  },
  // Frida Kahlo
  {
    slug: "the-two-fridas",
    title: "The Two Fridas",
    year: 1939,
    medium: "Oil on canvas",
    dimensions: "173 cm × 173 cm",
    description: "A double self-portrait showing two versions of Kahlo connected by a vein, painted after her divorce from Diego Rivera.",
    historicalSignificance: "One of Kahlo's most famous works, exploring identity, heritage, and emotional pain.",
    galleryRoom: "Room 4",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "frida-kahlo",
    museumSlug: "museo-arte-moderno",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Two_Fridas.jpg/800px-Two_Fridas.jpg",
  },
  // Edward Hopper
  {
    slug: "nighthawks",
    title: "Nighthawks",
    year: 1942,
    medium: "Oil on canvas",
    dimensions: "84.1 cm × 152.4 cm",
    description: "Four figures in a late-night diner, viewed through large glass windows, embodying urban isolation.",
    historicalSignificance: "The most iconic image of American urban life, capturing loneliness and alienation in modern cities.",
    galleryRoom: "Gallery 262",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "edward-hopper",
    museumSlug: "art-institute-chicago",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
  },
  // Hokusai
  {
    slug: "the-great-wave-off-kanagawa",
    title: "The Great Wave off Kanagawa",
    year: 1831,
    medium: "Woodblock print",
    dimensions: "25.7 cm × 37.9 cm",
    description: "A massive wave threatens boats near Mount Fuji, part of Hokusai's Thirty-Six Views of Mount Fuji series.",
    historicalSignificance: "One of the most recognized works of Japanese art, it influenced Western Impressionists and remains iconic.",
    galleryRoom: "Japanese Art Gallery",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "katsushika-hokusai",
    museumSlug: "met",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
  },
  // Delacroix
  {
    slug: "liberty-leading-the-people",
    title: "Liberty Leading the People",
    year: 1830,
    medium: "Oil on canvas",
    dimensions: "260 cm × 325 cm",
    description: "A bare-breasted woman personifying Liberty leads revolutionaries over barricades during the July Revolution.",
    historicalSignificance: "The most famous image of the French Revolution, though it depicts the 1830 uprising.",
    galleryRoom: "Room 77",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "eugene-delacroix",
    museumSlug: "louvre",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
  },
  // David
  {
    slug: "death-of-marat",
    title: "The Death of Marat",
    year: 1793,
    medium: "Oil on canvas",
    dimensions: "165 cm × 128 cm",
    description: "Revolutionary journalist Jean-Paul Marat assassinated in his bathtub by Charlotte Corday.",
    historicalSignificance: "A powerful piece of political propaganda that became an iconic image of the French Revolution.",
    galleryRoom: "Room 601",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "jacques-louis-david",
    museumSlug: "rmfab",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg",
  },
  // Kandinsky
  {
    slug: "composition-viii",
    title: "Composition VIII",
    year: 1923,
    medium: "Oil on canvas",
    dimensions: "140 cm × 201 cm",
    description: "A complex arrangement of geometric shapes and lines representing Kandinsky's move toward geometric abstraction.",
    historicalSignificance: "Marks Kandinsky's shift from organic to geometric abstraction during his Bauhaus period.",
    galleryRoom: "Guggenheim Rotunda",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "wassily-kandinsky",
    museumSlug: "guggenheim",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg/1280px-Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg",
  },
  // Mondrian
  {
    slug: "composition-with-red-blue-and-yellow",
    title: "Composition with Red, Blue, and Yellow",
    year: 1930,
    medium: "Oil on canvas",
    dimensions: "46 cm × 46 cm",
    description: "A grid of black lines with rectangles filled in primary colors, exemplifying Neo-Plasticism.",
    historicalSignificance: "One of the most recognized works of geometric abstraction, influencing design and architecture.",
    galleryRoom: "De Stijl Collection",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "piet-mondrian",
    museumSlug: "kunsthaus-zurich",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
  },
  // Géricault
  {
    slug: "the-raft-of-the-medusa",
    title: "The Raft of the Medusa",
    year: 1819,
    medium: "Oil on canvas",
    dimensions: "491 cm × 716 cm",
    description: "Survivors of the French frigate Méduse shipwreck on a makeshift raft, desperately signaling a distant ship.",
    historicalSignificance: "A groundbreaking work that launched Romanticism and influenced Delacroix and Courbet.",
    galleryRoom: "Room 77 (Denon Wing)",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "theodore-gericault",
    museumSlug: "louvre",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1280px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
  },
  // Whistler
  {
    slug: "whistlers-mother",
    title: "Arrangement in Grey and Black No.1 (Whistler's Mother)",
    year: 1871,
    medium: "Oil on canvas",
    dimensions: "144.3 cm × 162.4 cm",
    description: "A portrait of the artist's mother seated in profile, known for its subtle grey and black tones.",
    historicalSignificance: "One of the most famous American paintings, often seen as a symbol of motherhood.",
    galleryRoom: "Room 64",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "james-whistler",
    museumSlug: "orsay",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/1280px-Whistlers_Mother_high_res.jpg",
  },
  // Grant Wood
  {
    slug: "american-gothic",
    title: "American Gothic",
    year: 1930,
    medium: "Oil on beaverboard",
    dimensions: "78 cm × 65.3 cm",
    description: "A stern-looking farmer and his daughter stand before a house with a distinctive Gothic window.",
    historicalSignificance: "One of the most familiar images in American art, often parodied and referenced in popular culture.",
    galleryRoom: "Gallery 263",
    isPermanent: true,
    searchVolumeTier: 1,
    artistSlug: "grant-wood",
    museumSlug: "art-institute-chicago",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
  },
  // Rubens
  {
    slug: "descent-from-the-cross",
    title: "Descent from the Cross",
    year: 1614,
    medium: "Oil on panel",
    dimensions: "420 cm × 310 cm",
    description: "The body of Christ being lowered from the cross, painted for Antwerp Cathedral.",
    historicalSignificance: "A masterpiece of Baroque art demonstrating Rubens' mastery of composition and emotional expression.",
    galleryRoom: "Cathedral of Our Lady",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "peter-paul-rubens",
    museumSlug: "antwerp-cathedral",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg/800px-Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg",
  },
  // Dürer
  {
    slug: "self-portrait-at-28",
    title: "Self-Portrait at Twenty-Eight",
    year: 1500,
    medium: "Oil on limewood panel",
    dimensions: "67.1 cm × 48.9 cm",
    description: "Dürer portrays himself in a frontal pose traditionally reserved for depictions of Christ.",
    historicalSignificance: "A revolutionary self-portrait that elevated the status of artists in European society.",
    galleryRoom: "Room XII",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "albrecht-durer",
    museumSlug: "alte-pinakothek",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg/800px-Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg",
  },
  // Toulouse-Lautrec
  {
    slug: "at-the-moulin-rouge",
    title: "At the Moulin Rouge",
    year: 1892,
    medium: "Oil on canvas",
    dimensions: "123 cm × 141 cm",
    description: "A scene inside the famous Parisian nightclub, showing performers and patrons in garish light.",
    historicalSignificance: "Captures the bohemian nightlife of Montmartre that defined Toulouse-Lautrec's career.",
    galleryRoom: "Gallery 243",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "henri-toulouse-lautrec",
    museumSlug: "art-institute-chicago",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg/1280px-Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg",
  },
  // Egon Schiele
  {
    slug: "seated-woman-with-bent-knee",
    title: "Seated Woman with Bent Knee",
    year: 1917,
    medium: "Gouache, watercolor, and black crayon on paper",
    dimensions: "46 cm × 30.5 cm",
    description: "A figure study showing Schiele's characteristic angular, expressive style.",
    historicalSignificance: "Representative of Schiele's raw, psychologically intense approach to the human form.",
    galleryRoom: "National Gallery Prague",
    isPermanent: true,
    searchVolumeTier: 3,
    artistSlug: "egon-schiele",
    museumSlug: "national-gallery-prague",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Egon_Schiele_-_Seated_Woman_with_Bent_Knee_-_Google_Art_Project.jpg/800px-Egon_Schiele_-_Seated_Woman_with_Bent_Knee_-_Google_Art_Project.jpg",
  },
  // Modigliani
  {
    slug: "reclining-nude",
    title: "Reclining Nude (Le Grand Nu)",
    year: 1917,
    medium: "Oil on canvas",
    dimensions: "60 cm × 92 cm",
    description: "A sensuous reclining nude with Modigliani's characteristic elongated forms and warm flesh tones.",
    historicalSignificance: "Caused scandal when exhibited in 1917 but became one of the most celebrated nudes in modern art.",
    galleryRoom: "Gallery 28",
    isPermanent: true,
    searchVolumeTier: 2,
    artistSlug: "amedeo-modigliani",
    museumSlug: "met",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Amedeo_Modigliani_-_Nu_couch%C3%A9_%28Red_Nude%29.jpg/1280px-Amedeo_Modigliani_-_Nu_couch%C3%A9_%28Red_Nude%29.jpg",
  },
];

const additionalMuseums = [
  {
    slug: "vatican",
    name: "Vatican Museums",
    city: "Vatican City",
    country: "Vatican City",
    address: "Viale Vaticano, 00165 Vatican City",
    websiteUrl: "https://www.museivaticani.va",
    ticketUrl: "https://www.museivaticani.va/content/museivaticani/en/visita-i-musei/biglietti.html",
    ticketPriceRange: "€17",
    description: "One of the world's greatest art collections, including the Sistine Chapel, Raphael Rooms, and thousands of masterpieces.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vatican_Museums_Spiral_Staircase_2012.jpg/800px-Vatican_Museums_Spiral_Staircase_2012.jpg",
  },
  {
    slug: "san-luigi",
    name: "San Luigi dei Francesi",
    city: "Rome",
    country: "Italy",
    address: "Piazza di S. Luigi de' Francesi, 00186 Rome",
    websiteUrl: "https://www.saintlouis-rome.net",
    ticketUrl: null,
    ticketPriceRange: "Free",
    description: "A church housing three Caravaggio masterpieces depicting the life of Saint Matthew.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/San_Luigi_dei_Francesi_%28Rome%29_-_Intern.jpg/800px-San_Luigi_dei_Francesi_%28Rome%29_-_Intern.jpg",
  },
  {
    slug: "barberini",
    name: "Galleria Nazionale d'Arte Antica (Palazzo Barberini)",
    city: "Rome",
    country: "Italy",
    address: "Via delle Quattro Fontane 13, 00184 Rome",
    websiteUrl: "https://www.barberinicorsini.org",
    ticketUrl: "https://www.barberinicorsini.org/en/informazioni/tickets/",
    ticketPriceRange: "€12",
    description: "Houses an important collection of Italian paintings from the 13th to 18th centuries, including Caravaggio's Judith.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Palazzo_Barberini_Rome.jpg/1280px-Palazzo_Barberini_Rome.jpg",
  },
  {
    slug: "museo-arte-moderno",
    name: "Museo de Arte Moderno",
    city: "Mexico City",
    country: "Mexico",
    address: "Paseo de la Reforma, Bosque de Chapultepec, CDMX",
    websiteUrl: "https://www.mam.inba.gob.mx",
    ticketUrl: "https://www.mam.inba.gob.mx",
    ticketPriceRange: "$85 MXN",
    description: "Houses the most important collection of Mexican modern art, including works by Frida Kahlo and Diego Rivera.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Museo_de_Arte_Moderno_%28M%C3%A9xico%29_02.jpg/1280px-Museo_de_Arte_Moderno_%28M%C3%A9xico%29_02.jpg",
  },
  {
    slug: "guggenheim",
    name: "Solomon R. Guggenheim Museum",
    city: "New York",
    country: "USA",
    address: "1071 Fifth Avenue, New York, NY 10128",
    websiteUrl: "https://www.guggenheim.org",
    ticketUrl: "https://www.guggenheim.org/plan-your-visit/tickets",
    ticketPriceRange: "$30",
    description: "Frank Lloyd Wright's iconic spiral building housing impressionist, post-impressionist, and early modern art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Solomon_R._Guggenheim_Museum_%2848059131351%29.jpg/1280px-Solomon_R._Guggenheim_Museum_%2848059131351%29.jpg",
  },
  {
    slug: "rmfab",
    name: "Royal Museums of Fine Arts of Belgium",
    city: "Brussels",
    country: "Belgium",
    address: "Rue de la Régence 3, 1000 Brussels",
    websiteUrl: "https://www.fine-arts-museum.be",
    ticketUrl: "https://www.fine-arts-museum.be/en/visit/practical-information",
    ticketPriceRange: "€15",
    description: "Six museums housing Flemish and Belgian art from the 15th century to contemporary works, including Bruegel and Magritte.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Royal_Museums_of_Fine_Arts_of_Belgium_2.jpg/1280px-Royal_Museums_of_Fine_Arts_of_Belgium_2.jpg",
  },
  {
    slug: "kunsthaus-zurich",
    name: "Kunsthaus Zürich",
    city: "Zurich",
    country: "Switzerland",
    address: "Heimplatz 1, 8001 Zürich",
    websiteUrl: "https://www.kunsthaus.ch",
    ticketUrl: "https://www.kunsthaus.ch/en/visit/tickets/",
    ticketPriceRange: "CHF 23",
    description: "One of Switzerland's most important art museums, with significant collections from the Middle Ages to contemporary art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kunsthaus_Z%C3%BCrich_2020.jpg/1280px-Kunsthaus_Z%C3%BCrich_2020.jpg",
  },
  {
    slug: "alte-pinakothek",
    name: "Alte Pinakothek",
    city: "Munich",
    country: "Germany",
    address: "Barer Str. 27, 80333 Munich",
    websiteUrl: "https://www.pinakothek.de",
    ticketUrl: "https://www.pinakothek.de/en/visit/alte-pinakothek",
    ticketPriceRange: "€7",
    description: "One of the oldest galleries in the world, housing European paintings from the 14th to 18th centuries including Dürer.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Alte_Pinakothek_2014.jpg/1280px-Alte_Pinakothek_2014.jpg",
  },
  {
    slug: "antwerp-cathedral",
    name: "Cathedral of Our Lady (Antwerp)",
    city: "Antwerp",
    country: "Belgium",
    address: "Groenplaats 21, 2000 Antwerp",
    websiteUrl: "https://www.dekathedraal.be",
    ticketUrl: "https://www.dekathedraal.be/en/visit",
    ticketPriceRange: "€12",
    description: "The largest Gothic church in the Low Countries, housing four major Rubens altarpieces.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cathedral_of_Our_Lady_Antwerp_2.jpg/800px-Cathedral_of_Our_Lady_Antwerp_2.jpg",
  },
  {
    slug: "national-gallery-prague",
    name: "National Gallery Prague",
    city: "Prague",
    country: "Czech Republic",
    address: "Staroměstské náměstí 12, 110 00 Prague",
    websiteUrl: "https://www.ngprague.cz",
    ticketUrl: "https://www.ngprague.cz/en/visit",
    ticketPriceRange: "300 CZK",
    description: "The largest collection of art in the Czech Republic, spanning from medieval to contemporary works.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sternbersk%C3%BD_pal%C3%A1c.jpg/1280px-Sternbersk%C3%BD_pal%C3%A1c.jpg",
  },
];

async function main() {
  console.log("Starting to add more art and museums (batch 2)...");

  // Add additional museums
  for (const museum of additionalMuseums) {
    const existing = await prisma.museum.findUnique({ where: { slug: museum.slug } });
    if (!existing) {
      await prisma.museum.create({ data: museum });
      console.log(`Created museum: ${museum.name}`);
    } else {
      console.log(`Museum already exists: ${museum.name}`);
    }
  }

  // Add more artworks
  for (const artwork of moreArtworks) {
    const existing = await prisma.artwork.findUnique({ where: { slug: artwork.slug } });
    if (!existing) {
      const { artistSlug, museumSlug, ...artworkData } = artwork;

      const artist = await prisma.artist.findUnique({ where: { slug: artistSlug } });
      const museum = await prisma.museum.findUnique({ where: { slug: museumSlug } });

      if (artist && museum) {
        await prisma.artwork.create({
          data: {
            ...artworkData,
            artistId: artist.id,
            museumId: museum.id,
          },
        });
        console.log(`Created artwork: ${artwork.title}`);
      } else {
        console.log(`Skipping ${artwork.title} - artist (${artistSlug}) or museum (${museumSlug}) not found`);
      }
    } else {
      console.log(`Artwork already exists: ${artwork.title}`);
    }
  }

  console.log("\nDone! Added more art and museums.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
