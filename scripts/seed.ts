import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * COPYRIGHTED WORKS DOCUMENTATION
 * ================================
 * The following works/artists have imageUrl: null due to copyright restrictions.
 * Works by artists who died less than 70 years ago are generally still under copyright.
 *
 * ARTWORKS (no images):
 * - Guernica (Picasso, 1937) - Picasso died 1973, copyright until ~2043
 * - Les Demoiselles d'Avignon (Picasso, 1907) - Picasso died 1973
 * - The Son of Man (Magritte, 1964) - Magritte died 1967, copyright until ~2037
 * - Jimson Weed/White Flower No. 1 (O'Keeffe, 1932) - O'Keeffe died 1986, copyright until ~2056
 * - Campbell's Soup Cans (Warhol, 1962) - Warhol died 1987, copyright until ~2057
 * - The Persistence of Memory (Dalí, 1931) - Dalí died 1989, copyright until ~2059
 *
 * ARTIST PORTRAITS (no images):
 * - René Magritte - died 1967, copyright until ~2037
 * - Marc Chagall - died 1985, copyright until ~2055
 * - Georgia O'Keeffe - died 1986, copyright until ~2056
 *
 * These artworks can still be displayed with title, artist, and museum location.
 * The UI shows a placeholder with "Image restricted" and encourages museum visits.
 */

const seedData = {
  movements: [
    {
      slug: "renaissance",
      name: "Renaissance",
      startYear: 1400,
      endYear: 1600,
      description:
        "The Renaissance was a cultural movement that began in Italy in the 14th century and spread throughout Europe. It marked a renewed interest in classical Greek and Roman culture, emphasizing humanism, perspective, and naturalistic representation.",
      keyCharacteristics: [
        "Linear perspective",
        "Naturalistic human forms",
        "Classical themes",
        "Sfumato technique",
        "Religious and mythological subjects",
      ],
    },
    {
      slug: "baroque",
      name: "Baroque",
      startYear: 1600,
      endYear: 1750,
      description:
        "Baroque art emerged in Rome and spread across Europe. Known for dramatic use of light and shadow (chiaroscuro), rich colors, and emotional intensity. It served both the Catholic Church and wealthy patrons.",
      keyCharacteristics: [
        "Dramatic lighting",
        "Rich deep colors",
        "Grandeur and extravagance",
        "Movement and energy",
        "Emotional intensity",
      ],
    },
    {
      slug: "dutch-golden-age",
      name: "Dutch Golden Age",
      startYear: 1588,
      endYear: 1672,
      description:
        "A period of great wealth and cultural achievement in the Dutch Republic. Artists focused on realistic portrayals of everyday life, portraits, landscapes, and still lifes for middle-class patrons.",
      keyCharacteristics: [
        "Realistic detail",
        "Domestic scenes",
        "Portraits",
        "Still life",
        "Landscapes",
      ],
    },
    {
      slug: "romanticism",
      name: "Romanticism",
      startYear: 1780,
      endYear: 1850,
      description:
        "Romanticism emphasized emotion, individualism, and the sublime power of nature. It was a reaction against the rationalism of the Enlightenment and the Industrial Revolution.",
      keyCharacteristics: [
        "Emotion over reason",
        "Sublime nature",
        "Individualism",
        "Dramatic landscapes",
        "Historical and literary themes",
      ],
    },
    {
      slug: "impressionism",
      name: "Impressionism",
      startYear: 1860,
      endYear: 1890,
      description:
        "Impressionism originated in Paris and revolutionized painting by capturing light and movement through visible brushstrokes and pure color. Artists painted outdoors to capture fleeting moments.",
      keyCharacteristics: [
        "Visible brushstrokes",
        "Light and color emphasis",
        "Everyday subjects",
        "Outdoor painting",
        "Capturing momentary effects",
      ],
    },
    {
      slug: "post-impressionism",
      name: "Post-Impressionism",
      startYear: 1886,
      endYear: 1910,
      description:
        "Post-Impressionism extended Impressionism while rejecting its limitations. Artists emphasized geometric forms, distortion for emotional effect, and unnatural color choices.",
      keyCharacteristics: [
        "Bold colors",
        "Thick paint application",
        "Geometric forms",
        "Emotional expression",
        "Personal vision over realism",
      ],
    },
    {
      slug: "expressionism",
      name: "Expressionism",
      startYear: 1905,
      endYear: 1930,
      description:
        "Expressionism prioritized emotional experience over physical reality. Artists used distorted forms, exaggerated colors, and bold brushwork to convey psychological states.",
      keyCharacteristics: [
        "Distorted forms",
        "Intense colors",
        "Emotional content",
        "Psychological themes",
        "Bold brushwork",
      ],
    },
    {
      slug: "cubism",
      name: "Cubism",
      startYear: 1907,
      endYear: 1920,
      description:
        "Cubism, pioneered by Picasso and Braque, revolutionized European painting by breaking objects into geometric forms and showing multiple viewpoints simultaneously.",
      keyCharacteristics: [
        "Geometric fragmentation",
        "Multiple viewpoints",
        "Flattened space",
        "Monochromatic palette",
        "Abstraction of form",
      ],
    },
    {
      slug: "surrealism",
      name: "Surrealism",
      startYear: 1920,
      endYear: 1960,
      description:
        "Surrealism sought to release the creative potential of the unconscious mind through irrational imagery, dreams, and unexpected juxtapositions.",
      keyCharacteristics: [
        "Dream imagery",
        "Unexpected juxtapositions",
        "Unconscious mind",
        "Fantastical scenes",
        "Precise realism with impossible subjects",
      ],
    },
    {
      slug: "abstract-expressionism",
      name: "Abstract Expressionism",
      startYear: 1940,
      endYear: 1960,
      description:
        "The first major American art movement, Abstract Expressionism emphasized spontaneous, automatic, or subconscious creation. It included both gestural action painting and color field painting.",
      keyCharacteristics: [
        "Large scale",
        "Gestural brushstrokes",
        "Non-representational",
        "Emotional intensity",
        "Spontaneous creation",
      ],
    },
    {
      slug: "pop-art",
      name: "Pop Art",
      startYear: 1955,
      endYear: 1970,
      description:
        "Pop Art emerged in the mid-1950s, drawing inspiration from popular and commercial culture. It challenged fine art traditions by incorporating imagery from advertising, comic books, and everyday objects.",
      keyCharacteristics: [
        "Popular culture imagery",
        "Bold colors",
        "Irony and parody",
        "Mass production themes",
        "Commercial techniques",
      ],
    },
    {
      slug: "fauvism",
      name: "Fauvism",
      startYear: 1904,
      endYear: 1908,
      description:
        "Fauvism was the first 20th century movement in modern art, emphasizing painterly qualities and strong color over representational values. The name comes from 'les fauves' (wild beasts).",
      keyCharacteristics: [
        "Bold, non-naturalistic colors",
        "Simplified forms",
        "Spontaneous brushwork",
        "Emotional expression",
        "Flat composition",
      ],
    },
    {
      slug: "northern-renaissance",
      name: "Northern Renaissance",
      startYear: 1430,
      endYear: 1580,
      description:
        "The Northern Renaissance refers to the Renaissance in northern Europe, known for its intense realism, intricate detail, and pioneering oil painting techniques.",
      keyCharacteristics: [
        "Extreme detail and realism",
        "Oil painting innovation",
        "Religious symbolism",
        "Domestic scenes",
        "Landscape backgrounds",
      ],
    },
    {
      slug: "neoclassicism",
      name: "Neoclassicism",
      startYear: 1760,
      endYear: 1850,
      description:
        "Neoclassicism drew inspiration from the classical art and culture of ancient Greece and Rome. It emphasized order, symmetry, and idealized forms as a reaction against the excesses of Baroque and Rococo.",
      keyCharacteristics: [
        "Classical themes",
        "Idealized forms",
        "Historical subjects",
        "Clean lines",
        "Moral virtue",
      ],
    },
    {
      slug: "american-realism",
      name: "American Realism",
      startYear: 1900,
      endYear: 1960,
      description:
        "American Realism focused on depicting everyday American life with honesty and accuracy. Artists captured urban scenes, rural landscapes, and ordinary people without romanticizing their subjects.",
      keyCharacteristics: [
        "Everyday subjects",
        "Urban and rural scenes",
        "Strong light and shadow",
        "Isolation themes",
        "American identity",
      ],
    },
    {
      slug: "ukiyo-e",
      name: "Ukiyo-e",
      startYear: 1600,
      endYear: 1900,
      description:
        "Ukiyo-e, meaning 'pictures of the floating world,' was a genre of Japanese woodblock prints and paintings depicting landscapes, kabuki actors, sumo wrestlers, and scenes from history and folk tales.",
      keyCharacteristics: [
        "Woodblock printing",
        "Flat color areas",
        "Bold outlines",
        "Nature and landscapes",
        "Everyday life scenes",
      ],
    },
    {
      slug: "de-stijl",
      name: "De Stijl",
      startYear: 1917,
      endYear: 1931,
      description:
        "De Stijl, Dutch for 'The Style,' was an art movement centered on pure abstraction and reduction to essentials of form and color. It used only vertical and horizontal lines and primary colors.",
      keyCharacteristics: [
        "Primary colors only",
        "Geometric shapes",
        "Vertical and horizontal lines",
        "Asymmetrical balance",
        "Pure abstraction",
      ],
    },
  ],
  museums: [
    {
      slug: "moma",
      name: "Museum of Modern Art (MoMA)",
      city: "New York",
      country: "USA",
      address: "11 W 53rd St, New York, NY 10019",
      websiteUrl: "https://www.moma.org",
      ticketUrl: "https://www.moma.org/visit",
      ticketPriceRange: "$25 adults",
      description:
        "MoMA houses one of the world's most influential collections of modern and contemporary art, including iconic works from van Gogh, Picasso, Warhol, and more.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/800px-MoMa_NY_USA_1.jpg",
    },
    {
      slug: "louvre",
      name: "Louvre Museum",
      city: "Paris",
      country: "France",
      address: "Rue de Rivoli, 75001 Paris",
      websiteUrl: "https://www.louvre.fr",
      ticketUrl: "https://www.louvre.fr/en/visit",
      ticketPriceRange: "€17",
      description:
        "The world's largest art museum, housing approximately 38,000 objects from prehistory to the 21st century, including the Mona Lisa.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg",
    },
    {
      slug: "van-gogh-museum",
      name: "Van Gogh Museum",
      city: "Amsterdam",
      country: "Netherlands",
      address: "Museumplein 6, 1071 DJ Amsterdam",
      websiteUrl: "https://www.vangoghmuseum.nl",
      ticketUrl: "https://www.vangoghmuseum.nl/en/visit/tickets",
      ticketPriceRange: "€22",
      description:
        "Houses the largest collection of artworks by Vincent van Gogh in the world, including over 200 paintings and 500 drawings.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Van_Gogh_Museum_Amsterdam.jpg/800px-Van_Gogh_Museum_Amsterdam.jpg",
    },
    {
      slug: "national-gallery",
      name: "National Gallery",
      city: "London",
      country: "UK",
      address: "Trafalgar Square, London WC2N 5DN",
      websiteUrl: "https://www.nationalgallery.org.uk",
      ticketUrl: "https://www.nationalgallery.org.uk/visiting",
      ticketPriceRange: "Free",
      description:
        "Houses over 2,300 paintings dating from the mid-13th century to 1900. Free entry makes it one of the most visited museums in the world.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG/800px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG",
    },
    {
      slug: "uffizi",
      name: "Uffizi Gallery",
      city: "Florence",
      country: "Italy",
      address: "Piazzale degli Uffizi, 6, 50122 Florence",
      websiteUrl: "https://www.uffizi.it",
      ticketUrl: "https://www.uffizi.it/en/tickets",
      ticketPriceRange: "€25",
      description:
        "One of the most famous art museums in the world with the most important collection of Renaissance art.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Florence%2C_Italy_-_panoramio_%28125%29.jpg/800px-Florence%2C_Italy_-_panoramio_%28125%29.jpg",
    },
    {
      slug: "met",
      name: "The Metropolitan Museum of Art",
      city: "New York",
      country: "USA",
      address: "1000 Fifth Avenue, New York, NY 10028",
      websiteUrl: "https://www.metmuseum.org",
      ticketUrl: "https://www.metmuseum.org/visit/plan-your-visit",
      ticketPriceRange: "$30 suggested",
      description:
        "The largest art museum in the Americas, with over 2 million works spanning 5,000 years of world culture.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1280px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
    },
    {
      slug: "rijksmuseum",
      name: "Rijksmuseum",
      city: "Amsterdam",
      country: "Netherlands",
      address: "Museumstraat 1, 1071 XX Amsterdam",
      websiteUrl: "https://www.rijksmuseum.nl",
      ticketUrl: "https://www.rijksmuseum.nl/en/tickets",
      ticketPriceRange: "€22.50",
      description:
        "The national museum of the Netherlands dedicated to Dutch arts and history, home to Rembrandt's Night Watch and Vermeer's Milkmaid.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/800px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg",
    },
    {
      slug: "prado",
      name: "Museo del Prado",
      city: "Madrid",
      country: "Spain",
      address: "Calle de Ruiz de Alarcón, 23, 28014 Madrid",
      websiteUrl: "https://www.museodelprado.es",
      ticketUrl: "https://www.museodelprado.es/en/visit-the-museum",
      ticketPriceRange: "€15",
      description:
        "Spain's main national art museum, featuring the finest collection of Spanish art and masterpieces by Velázquez, Goya, and El Greco.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/1280px-Museo_del_Prado_2016_%2825185969599%29.jpg",
    },
    {
      slug: "musee-dorsay",
      name: "Musée d'Orsay",
      city: "Paris",
      country: "France",
      address: "1 Rue de la Légion d'Honneur, 75007 Paris",
      websiteUrl: "https://www.musee-orsay.fr",
      ticketUrl: "https://www.musee-orsay.fr/en/visit",
      ticketPriceRange: "€16",
      description:
        "Housed in a former railway station, the Musée d'Orsay holds the world's largest collection of Impressionist and Post-Impressionist masterpieces.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg/1280px-Mus%C3%A9e_d%27Orsay%2C_North-West_view%2C_Paris_7e_140402.jpg",
    },
    {
      slug: "national-gallery-oslo",
      name: "National Gallery of Norway",
      city: "Oslo",
      country: "Norway",
      address: "Brynjulf Bulls plass 3, 0250 Oslo",
      websiteUrl: "https://www.nasjonalmuseet.no",
      ticketUrl: "https://www.nasjonalmuseet.no/en/visit/",
      ticketPriceRange: "200 NOK",
      description:
        "Norway's largest collection of art, including Edvard Munch's The Scream.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Nasjonalgalleriet_oslo.jpg/800px-Nasjonalgalleriet_oslo.jpg",
    },
    {
      slug: "mauritshuis",
      name: "Mauritshuis",
      city: "The Hague",
      country: "Netherlands",
      address: "Plein 29, 2511 CS Den Haag",
      websiteUrl: "https://www.mauritshuis.nl",
      ticketUrl: "https://www.mauritshuis.nl/en/tickets/",
      ticketPriceRange: "€19",
      description:
        "An intimate museum housing Dutch Golden Age masterpieces including Vermeer's Girl with a Pearl Earring.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Mauritshuis_-_Den_Haag-1780.jpg/800px-Mauritshuis_-_Den_Haag-1780.jpg",
    },
    {
      slug: "reina-sofia",
      name: "Museo Reina Sofía",
      city: "Madrid",
      country: "Spain",
      address: "Calle de Santa Isabel, 52, 28012 Madrid",
      websiteUrl: "https://www.museoreinasofia.es",
      ticketUrl: "https://www.museoreinasofia.es/en/visit",
      ticketPriceRange: "€12",
      description:
        "Spain's national museum of 20th-century art, home to Picasso's Guernica and major works by Dalí and Miró.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Museo_Reina_Sofia-exterior.jpg/800px-Museo_Reina_Sofia-exterior.jpg",
    },
    {
      slug: "vatican-museums",
      name: "Vatican Museums",
      city: "Vatican City",
      country: "Vatican City",
      address: "Viale Vaticano, 00165 Roma",
      websiteUrl: "https://www.museivaticani.va",
      ticketUrl: "https://www.museivaticani.va/content/museivaticani/en/visita-i-musei/biglietti.html",
      ticketPriceRange: "€17",
      description:
        "One of the world's greatest art collections, including the Sistine Chapel ceiling by Michelangelo and Raphael's School of Athens.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vatican_Museums_Spiral_Staircase_2012.jpg/800px-Vatican_Museums_Spiral_Staircase_2012.jpg",
    },
    {
      slug: "hermitage",
      name: "State Hermitage Museum",
      city: "St. Petersburg",
      country: "Russia",
      address: "Palace Square, 2, St Petersburg, 190000",
      websiteUrl: "https://www.hermitagemuseum.org",
      ticketUrl: "https://www.hermitagemuseum.org/wps/portal/hermitage/tickets",
      ticketPriceRange: "₽500",
      description:
        "One of the largest and oldest museums in the world, with over 3 million items including works by da Vinci, Rembrandt, and Matisse.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/5174-3._St._Petersburg._Greater_Hermitage.jpg/800px-5174-3._St._Petersburg._Greater_Hermitage.jpg",
    },
    {
      slug: "tate-modern",
      name: "Tate Modern",
      city: "London",
      country: "UK",
      address: "Bankside, London SE1 9TG",
      websiteUrl: "https://www.tate.org.uk/visit/tate-modern",
      ticketUrl: "https://www.tate.org.uk/visit/tate-modern",
      ticketPriceRange: "Free",
      description:
        "Britain's national gallery of international modern and contemporary art, housed in the former Bankside Power Station.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tate_Modern_-_Bankside_Power_Station.jpg/800px-Tate_Modern_-_Bankside_Power_Station.jpg",
    },
    {
      slug: "art-institute-chicago",
      name: "Art Institute of Chicago",
      city: "Chicago",
      country: "USA",
      address: "111 S Michigan Ave, Chicago, IL 60603",
      websiteUrl: "https://www.artic.edu",
      ticketUrl: "https://www.artic.edu/visit",
      ticketPriceRange: "$32",
      description:
        "One of the oldest and largest art museums in the United States, known for its Impressionist and Post-Impressionist collections.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Art_Institute_of_Chicago_%2851575570710%29.jpg/800px-Art_Institute_of_Chicago_%2851575570710%29.jpg",
    },
  ],
  artists: [
    {
      slug: "van-gogh",
      name: "Vincent van Gogh",
      birthYear: 1853,
      deathYear: 1890,
      nationality: "Dutch",
      movements: ["Post-Impressionism"],
      bioShort:
        "Vincent van Gogh was a Dutch Post-Impressionist painter who created about 2,100 artworks in just over a decade.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
    },
    {
      slug: "leonardo-da-vinci",
      name: "Leonardo da Vinci",
      birthYear: 1452,
      deathYear: 1519,
      nationality: "Italian",
      movements: ["Renaissance", "High Renaissance"],
      bioShort:
        "Leonardo da Vinci was an Italian polymath of the High Renaissance: painter, sculptor, architect, and inventor.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
    },
    {
      slug: "claude-monet",
      name: "Claude Monet",
      birthYear: 1840,
      deathYear: 1926,
      nationality: "French",
      movements: ["Impressionism"],
      bioShort:
        "Claude Monet was a French painter and founder of Impressionism, best known for his water lily paintings.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Claude_Monet",
    },
    {
      slug: "sandro-botticelli",
      name: "Sandro Botticelli",
      birthYear: 1445,
      deathYear: 1510,
      nationality: "Italian",
      movements: ["Renaissance", "Early Renaissance"],
      bioShort:
        "Sandro Botticelli was an Italian painter of the Early Renaissance, best known for The Birth of Venus.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/800px-Sandro_Botticelli_083.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Sandro_Botticelli",
    },
    {
      slug: "rembrandt",
      name: "Rembrandt van Rijn",
      birthYear: 1606,
      deathYear: 1669,
      nationality: "Dutch",
      movements: ["Baroque", "Dutch Golden Age"],
      bioShort:
        "Rembrandt was a Dutch Golden Age painter, generally considered one of the greatest visual artists in history.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Rembrandt",
    },
    {
      slug: "johannes-vermeer",
      name: "Johannes Vermeer",
      birthYear: 1632,
      deathYear: 1675,
      nationality: "Dutch",
      movements: ["Baroque", "Dutch Golden Age"],
      bioShort:
        "Johannes Vermeer was a Dutch Baroque painter who specialized in domestic interior scenes of middle-class life.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/800px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Johannes_Vermeer",
    },
    {
      slug: "pablo-picasso",
      name: "Pablo Picasso",
      birthYear: 1881,
      deathYear: 1973,
      nationality: "Spanish",
      movements: ["Cubism", "Surrealism", "Expressionism"],
      bioShort:
        "Pablo Picasso was a Spanish painter who co-founded Cubism and is widely regarded as one of the most influential artists of the 20th century.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Pablo_Picasso",
    },
    {
      slug: "salvador-dali",
      name: "Salvador Dalí",
      birthYear: 1904,
      deathYear: 1989,
      nationality: "Spanish",
      movements: ["Surrealism"],
      bioShort:
        "Salvador Dalí was a Spanish Surrealist artist known for his striking and bizarre imagery.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD",
    },
    {
      slug: "edvard-munch",
      name: "Edvard Munch",
      birthYear: 1863,
      deathYear: 1944,
      nationality: "Norwegian",
      movements: ["Expressionism", "Symbolism"],
      bioShort:
        "Edvard Munch was a Norwegian painter whose work The Scream became an icon of anxiety in the modern world.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_Edvard_Munch_%28cropped%29.png/800px-Portrait_of_Edvard_Munch_%28cropped%29.png",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Edvard_Munch",
    },
    {
      slug: "michelangelo",
      name: "Michelangelo",
      birthYear: 1475,
      deathYear: 1564,
      nationality: "Italian",
      movements: ["Renaissance", "High Renaissance"],
      bioShort:
        "Michelangelo was an Italian sculptor, painter, and architect of the High Renaissance, creator of the Sistine Chapel ceiling.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/800px-Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Michelangelo",
    },
    {
      slug: "raphael",
      name: "Raphael",
      birthYear: 1483,
      deathYear: 1520,
      nationality: "Italian",
      movements: ["Renaissance", "High Renaissance"],
      bioShort:
        "Raphael was an Italian painter and architect of the High Renaissance, known for his clarity of form and visual achievement.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/800px-Raffaello_Sanzio.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Raphael",
    },
    {
      slug: "diego-velazquez",
      name: "Diego Velázquez",
      birthYear: 1599,
      deathYear: 1660,
      nationality: "Spanish",
      movements: ["Baroque"],
      bioShort:
        "Diego Velázquez was a Spanish painter and leading artist of the Spanish Golden Age, the court painter for King Philip IV.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg/800px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez",
    },
    {
      slug: "pierre-auguste-renoir",
      name: "Pierre-Auguste Renoir",
      birthYear: 1841,
      deathYear: 1919,
      nationality: "French",
      movements: ["Impressionism"],
      bioShort:
        "Pierre-Auguste Renoir was a French artist who was a leading painter in the development of the Impressionist style.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/800px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
    },
    {
      slug: "edgar-degas",
      name: "Edgar Degas",
      birthYear: 1834,
      deathYear: 1917,
      nationality: "French",
      movements: ["Impressionism", "Realism"],
      bioShort:
        "Edgar Degas was a French Impressionist artist famous for his paintings, sculptures, and drawings of ballet dancers.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edgar_Degas_self_portrait_1855.jpeg/800px-Edgar_Degas_self_portrait_1855.jpeg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Edgar_Degas",
    },
    {
      slug: "andy-warhol",
      name: "Andy Warhol",
      birthYear: 1928,
      deathYear: 1987,
      nationality: "American",
      movements: ["Pop Art"],
      bioShort:
        "Andy Warhol was an American artist and leading figure in the Pop Art movement, known for his silkscreen prints.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andy_Warhol_1975.jpg/800px-Andy_Warhol_1975.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Andy_Warhol",
    },
    {
      slug: "caravaggio",
      name: "Caravaggio",
      birthYear: 1571,
      deathYear: 1610,
      nationality: "Italian",
      movements: ["Baroque"],
      bioShort:
        "Caravaggio was an Italian painter active in Rome who is credited with pioneering the Baroque style with his dramatic use of light.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/800px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Caravaggio",
    },
    {
      slug: "frida-kahlo",
      name: "Frida Kahlo",
      birthYear: 1907,
      deathYear: 1954,
      nationality: "Mexican",
      movements: ["Surrealism", "Symbolism"],
      bioShort:
        "Frida Kahlo was a Mexican painter known for her many portraits, self-portraits, and works inspired by Mexican folk art.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Frida_Kahlo",
    },
    {
      slug: "georges-seurat",
      name: "Georges Seurat",
      birthYear: 1859,
      deathYear: 1891,
      nationality: "French",
      movements: ["Post-Impressionism", "Pointillism"],
      bioShort:
        "Georges Seurat was a French Post-Impressionist painter who devised the technique of Pointillism.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Georges_Seurat_1888.jpg/800px-Georges_Seurat_1888.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Georges_Seurat",
    },
    {
      slug: "gustav-klimt",
      name: "Gustav Klimt",
      birthYear: 1862,
      deathYear: 1918,
      nationality: "Austrian",
      movements: ["Symbolism", "Art Nouveau"],
      bioShort:
        "Gustav Klimt was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Klimt.jpg/800px-Klimt.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Gustav_Klimt",
    },
    {
      slug: "jackson-pollock",
      name: "Jackson Pollock",
      birthYear: 1912,
      deathYear: 1956,
      nationality: "American",
      movements: ["Abstract Expressionism"],
      bioShort:
        "Jackson Pollock was an American painter and a major figure in the Abstract Expressionist movement, known for his drip paintings.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jackson_Pollock.jpg/800px-Jackson_Pollock.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Jackson_Pollock",
    },
    {
      slug: "jmw-turner",
      name: "J.M.W. Turner",
      birthYear: 1775,
      deathYear: 1851,
      nationality: "British",
      movements: ["Romanticism"],
      bioShort:
        "J.M.W. Turner was an English Romantic painter, printmaker and watercolourist. He is known for his expressive colourisations and imaginative landscapes.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Joseph_Mallord_William_Turner_auto-retrato.jpg/800px-Joseph_Mallord_William_Turner_auto-retrato.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/J._M._W._Turner",
    },
    {
      slug: "caspar-david-friedrich",
      name: "Caspar David Friedrich",
      birthYear: 1774,
      deathYear: 1840,
      nationality: "German",
      movements: ["Romanticism"],
      bioShort:
        "Caspar David Friedrich was a German Romantic landscape painter, considered the most important German artist of his generation.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg/800px-Gerhard_von_K%C3%BCgelgen_portrait_of_Friedrich.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Caspar_David_Friedrich",
    },
    {
      slug: "francisco-goya",
      name: "Francisco Goya",
      birthYear: 1746,
      deathYear: 1828,
      nationality: "Spanish",
      movements: ["Romanticism"],
      bioShort:
        "Francisco Goya was a Spanish romantic painter and printmaker, considered the most important Spanish artist of the late 18th and early 19th centuries.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg/800px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Francisco_Goya",
    },
    {
      slug: "henri-matisse",
      name: "Henri Matisse",
      birthYear: 1869,
      deathYear: 1954,
      nationality: "French",
      movements: ["Fauvism", "Post-Impressionism"],
      bioShort:
        "Henri Matisse was a French visual artist, known for his use of colour and his fluid and original draughtsmanship. He was a leading figure in Fauvism.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg/800px-Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Henri_Matisse",
    },
    {
      slug: "paul-cezanne",
      name: "Paul Cézanne",
      birthYear: 1839,
      deathYear: 1906,
      nationality: "French",
      movements: ["Post-Impressionism"],
      bioShort:
        "Paul Cézanne was a French Post-Impressionist painter whose work laid the foundations of the transition from 19th-century Impressionism to Cubism.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Paul-Cezanne.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne",
    },
    {
      slug: "edouard-manet",
      name: "Édouard Manet",
      birthYear: 1832,
      deathYear: 1883,
      nationality: "French",
      movements: ["Impressionism", "Realism"],
      bioShort:
        "Édouard Manet was a French modernist painter, one of the first 19th-century artists to paint modern life and a pivotal figure in the transition to Impressionism.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/800px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/%C3%89douard_Manet",
    },
    {
      slug: "jan-van-eyck",
      name: "Jan van Eyck",
      birthYear: 1390,
      deathYear: 1441,
      nationality: "Flemish",
      movements: ["Northern Renaissance"],
      bioShort:
        "Jan van Eyck was a Flemish painter active in Bruges, considered one of the most significant Northern Renaissance artists and a pioneer of oil painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg/800px-Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Jan_van_Eyck",
    },
    {
      slug: "hieronymus-bosch",
      name: "Hieronymus Bosch",
      birthYear: 1450,
      deathYear: 1516,
      nationality: "Dutch",
      movements: ["Northern Renaissance"],
      bioShort:
        "Hieronymus Bosch was a Dutch painter from Brabant, known for his fantastic imagery, detailed landscapes, and illustrations of religious concepts and narratives.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jheronimus_Bosch_%28cropped%29.jpg/800px-Jheronimus_Bosch_%28cropped%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Hieronymus_Bosch",
    },
    {
      slug: "titian",
      name: "Titian",
      birthYear: 1488,
      deathYear: 1576,
      nationality: "Italian",
      movements: ["Renaissance"],
      bioShort:
        "Titian was the greatest Venetian painter of his time, known for his masterful use of color and his influence on the development of Western painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tizian_083.jpg/800px-Tizian_083.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Titian",
    },
    {
      slug: "peter-paul-rubens",
      name: "Peter Paul Rubens",
      birthYear: 1577,
      deathYear: 1640,
      nationality: "Flemish",
      movements: ["Baroque"],
      bioShort:
        "Peter Paul Rubens was a Flemish Baroque painter known for his extravagant style, dynamic compositions, and fleshy figures. He ran the largest workshop in Europe.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Peter_Paul_Rubens_-_Selfportrait_-_Google_Art_Project.jpg/800px-Peter_Paul_Rubens_-_Selfportrait_-_Google_Art_Project.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Peter_Paul_Rubens",
    },
    {
      slug: "albrecht-durer",
      name: "Albrecht Dürer",
      birthYear: 1471,
      deathYear: 1528,
      nationality: "German",
      movements: ["Northern Renaissance"],
      bioShort:
        "Albrecht Dürer was a German painter, printmaker, and theorist. His prints established his reputation across Europe and he's considered the greatest German Renaissance artist.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg/800px-Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer",
    },
    {
      slug: "jacques-louis-david",
      name: "Jacques-Louis David",
      birthYear: 1748,
      deathYear: 1825,
      nationality: "French",
      movements: ["Neoclassicism"],
      bioShort:
        "Jacques-Louis David was the most influential French painter of the Neoclassical style, known for his history paintings and portraits of Napoleon.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Jacques-Louis_David_-_Self-Portrait_-_WGA6066.jpg/800px-Jacques-Louis_David_-_Self-Portrait_-_WGA6066.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Jacques-Louis_David",
    },
    {
      slug: "eugene-delacroix",
      name: "Eugène Delacroix",
      birthYear: 1798,
      deathYear: 1863,
      nationality: "French",
      movements: ["Romanticism"],
      bioShort:
        "Eugène Delacroix was a French Romantic artist regarded as the leader of the French Romantic school. He was inspired by Rubens and Venetian Renaissance painters.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Eug%C3%A8ne_Delacroix_-_Portrait_de_l%27artiste_%28ca.1837%29.jpg/800px-Eug%C3%A8ne_Delacroix_-_Portrait_de_l%27artiste_%28ca.1837%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Delacroix",
    },
    {
      slug: "wassily-kandinsky",
      name: "Wassily Kandinsky",
      birthYear: 1866,
      deathYear: 1944,
      nationality: "Russian",
      movements: ["Expressionism", "Abstract Expressionism"],
      bioShort:
        "Wassily Kandinsky was a Russian painter and art theorist, generally credited as one of the pioneers of pure abstraction in Western art.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Vassily-Kandinsky.jpeg/800px-Vassily-Kandinsky.jpeg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Wassily_Kandinsky",
    },
    {
      slug: "piet-mondrian",
      name: "Piet Mondrian",
      birthYear: 1872,
      deathYear: 1944,
      nationality: "Dutch",
      movements: ["De Stijl", "Abstract Expressionism"],
      bioShort:
        "Piet Mondrian was a Dutch painter and art theoretician. He's considered one of the pioneers of 20th-century abstract art, known for his geometric compositions.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Portret_van_de_Nederlandse_schilder_Piet_Mondriaan_uit_1922%2C_SFA002024861.jpg/800px-Portret_van_de_Nederlandse_schilder_Piet_Mondriaan_uit_1922%2C_SFA002024861.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Piet_Mondrian",
    },
    {
      slug: "rene-magritte",
      name: "René Magritte",
      birthYear: 1898,
      deathYear: 1967,
      nationality: "Belgian",
      movements: ["Surrealism"],
      bioShort:
        "René Magritte was a Belgian Surrealist artist known for his witty and thought-provoking images that challenged observers' preconditioned perceptions of reality.",
      imageUrl: null, // Copyrighted (died 1967)
      wikipediaUrl: "https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte",
    },
    {
      slug: "marc-chagall",
      name: "Marc Chagall",
      birthYear: 1887,
      deathYear: 1985,
      nationality: "Russian-French",
      movements: ["Surrealism", "Expressionism"],
      bioShort:
        "Marc Chagall was a Russian-French artist known for his dreamlike imagery combining fantasy and folklore. He worked in almost every artistic medium.",
      imageUrl: null, // Copyrighted (died 1985)
      wikipediaUrl: "https://en.wikipedia.org/wiki/Marc_Chagall",
    },
    {
      slug: "edward-hopper",
      name: "Edward Hopper",
      birthYear: 1882,
      deathYear: 1967,
      nationality: "American",
      movements: ["American Realism"],
      bioShort:
        "Edward Hopper was an American realist painter best known for his oil paintings of solitary figures in urban settings and iconic works like Nighthawks.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg/800px-Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Edward_Hopper",
    },
    {
      slug: "katsushika-hokusai",
      name: "Katsushika Hokusai",
      birthYear: 1760,
      deathYear: 1849,
      nationality: "Japanese",
      movements: ["Ukiyo-e"],
      bioShort:
        "Katsushika Hokusai was a Japanese ukiyo-e artist, best known for his woodblock print series Thirty-Six Views of Mount Fuji, which includes The Great Wave.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hokusai_portrait.jpg/800px-Hokusai_portrait.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Hokusai",
    },
    {
      slug: "georgia-okeeffe",
      name: "Georgia O'Keeffe",
      birthYear: 1887,
      deathYear: 1986,
      nationality: "American",
      movements: ["American Realism"],
      bioShort:
        "Georgia O'Keeffe was an American artist known for her paintings of enlarged flowers, New York skyscrapers, and New Mexico landscapes. She's called the 'Mother of American Modernism.'",
      imageUrl: null, // Copyrighted (died 1986)
      wikipediaUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe",
    },
    {
      slug: "grant-wood",
      name: "Grant Wood",
      birthYear: 1891,
      deathYear: 1942,
      nationality: "American",
      movements: ["American Realism"],
      bioShort:
        "Grant Wood was an American painter best known for his paintings depicting the rural American Midwest, particularly American Gothic.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Grant_Wood_Plaid_Sweater_1931_Stanley.jpg/800px-Grant_Wood_Plaid_Sweater_1931_Stanley.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Grant_Wood",
    },
    {
      slug: "james-whistler",
      name: "James McNeill Whistler",
      birthYear: 1834,
      deathYear: 1903,
      nationality: "American",
      movements: ["Impressionism"],
      bioShort:
        "James Abbott McNeill Whistler was an American artist based in Britain, known for his paintings and etchings, and for being a leading proponent of art for art's sake.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gold_and_Brown_-_Self-portrait_by_James_McNeill_Whistler.jpg/800px-Gold_and_Brown_-_Self-portrait_by_James_McNeill_Whistler.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/James_Abbott_McNeill_Whistler",
    },
    {
      slug: "theodore-gericault",
      name: "Théodore Géricault",
      birthYear: 1791,
      deathYear: 1824,
      nationality: "French",
      movements: ["Romanticism"],
      bioShort:
        "Théodore Géricault was an influential French painter who helped establish Romanticism. He's best known for The Raft of the Medusa, a breakthrough in French painting.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Th%C3%A9odore_G%C3%A9ricault_-_Portrait_of_an_Artist_in_His_Studio_-_WGA08634.jpg/800px-Th%C3%A9odore_G%C3%A9ricault_-_Portrait_of_an_Artist_in_His_Studio_-_WGA08634.jpg",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault",
    },
  ],
  artworks: [
    // Van Gogh
    {
      slug: "the-starry-night",
      title: "The Starry Night",
      year: 1889,
      medium: "Oil on canvas",
      dimensions: "73.7 cm × 92.1 cm",
      description:
        "The Starry Night depicts the view from Van Gogh's asylum room at Saint-Rémy-de-Provence, with a swirling night sky over a village.",
      historicalSignificance:
        "Created during emotional turmoil, it became an icon of modern art with its bold brushwork and emotional intensity.",
      galleryRoom: "Gallery 5, Floor 5",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "expressionist", "landscape"],
      moodTags: ["dramatic", "emotional", "nocturnal"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#2e5a1c"],
      artistSlug: "van-gogh",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
      slug: "sunflowers",
      title: "Sunflowers",
      year: 1888,
      medium: "Oil on canvas",
      dimensions: "92.1 cm × 73 cm",
      description:
        "One of Van Gogh's most famous series, showing sunflowers in all stages of life in a bold yellow palette.",
      galleryRoom: "Room 43",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "still-life", "floral"],
      moodTags: ["vibrant", "warm", "cheerful"],
      primaryColors: ["#f4d03f", "#d4a017", "#8b6914"],
      artistSlug: "van-gogh",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    },
    {
      slug: "bedroom-in-arles",
      title: "Bedroom in Arles",
      year: 1888,
      medium: "Oil on canvas",
      dimensions: "72 cm × 90 cm",
      description:
        "Van Gogh's bedroom in the Yellow House in Arles, painted with bold colors and flattened perspective.",
      galleryRoom: "Van Gogh Wing",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["post-impressionist", "interior"],
      moodTags: ["intimate", "peaceful", "simple"],
      primaryColors: ["#5b8fa8", "#c4a35a", "#8b4513"],
      artistSlug: "van-gogh",
      museumSlug: "van-gogh-museum",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    },
    {
      slug: "cafe-terrace-at-night",
      title: "Café Terrace at Night",
      year: 1888,
      medium: "Oil on canvas",
      dimensions: "80.7 cm × 65.3 cm",
      description:
        "A colorful depiction of a café terrace in Arles, France, at night without using any black paint.",
      galleryRoom: "Kröller-Müller Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["post-impressionist", "cityscape", "nocturnal"],
      moodTags: ["warm", "inviting", "vibrant"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#c4a35a"],
      artistSlug: "van-gogh",
      museumSlug: "van-gogh-museum",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/800px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG",
    },
    // Leonardo da Vinci
    {
      slug: "mona-lisa",
      title: "Mona Lisa",
      year: 1503,
      medium: "Oil on poplar panel",
      dimensions: "77 cm × 53 cm",
      description:
        "The Mona Lisa is a half-length portrait considered the best known painting in the world.",
      historicalSignificance:
        "Famous for its sfumato technique and the subject's enigmatic expression. Its theft in 1911 made it world-famous.",
      galleryRoom: "Salle des États",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["renaissance", "portrait", "sfumato"],
      moodTags: ["enigmatic", "serene", "mysterious"],
      primaryColors: ["#5c4a3d", "#8b7355", "#2d2416"],
      artistSlug: "leonardo-da-vinci",
      museumSlug: "louvre",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/800px-Mona_Lisa.jpg",
    },
    // Monet
    {
      slug: "water-lilies-1906",
      title: "Water Lilies",
      year: 1906,
      medium: "Oil on canvas",
      dimensions: "89.9 cm × 94.1 cm",
      description:
        "Part of Monet's series of approximately 250 oil paintings depicting his flower garden at Giverny.",
      historicalSignificance:
        "These works pushed Impressionism toward abstraction and influenced Abstract Expressionism.",
      galleryRoom: "Gallery 5, Floor 5",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["impressionist", "landscape", "floral"],
      moodTags: ["serene", "peaceful", "meditative"],
      primaryColors: ["#4a7c59", "#6b8e9f", "#e8d5c4"],
      artistSlug: "claude-monet",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    },
    {
      slug: "impression-sunrise",
      title: "Impression, Sunrise",
      year: 1872,
      medium: "Oil on canvas",
      dimensions: "48 cm × 63 cm",
      description:
        "This painting of the harbor at Le Havre gave the Impressionist movement its name.",
      historicalSignificance:
        "A critic's derisive use of 'Impressionism' from this painting's title became the movement's name.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["impressionist", "seascape", "harbor"],
      moodTags: ["atmospheric", "misty", "peaceful"],
      primaryColors: ["#4a6d8c", "#f4a460", "#8b8b8b"],
      artistSlug: "claude-monet",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg",
    },
    // Botticelli
    {
      slug: "the-birth-of-venus",
      title: "The Birth of Venus",
      year: 1485,
      medium: "Tempera on canvas",
      dimensions: "172.5 cm × 278.5 cm",
      description:
        "Depicts the goddess Venus emerging from the sea as a fully grown woman.",
      historicalSignificance:
        "Represents the pinnacle of Early Renaissance ideals of beauty and classical mythology.",
      galleryRoom: "Botticelli Hall",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["renaissance", "mythological", "figurative"],
      moodTags: ["elegant", "graceful", "ethereal"],
      primaryColors: ["#a8d5e2", "#f5e6c8", "#d4a574"],
      artistSlug: "sandro-botticelli",
      museumSlug: "uffizi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    },
    {
      slug: "primavera",
      title: "Primavera",
      year: 1482,
      medium: "Tempera on panel",
      dimensions: "202 cm × 314 cm",
      description:
        "An allegorical painting depicting a group of figures from classical mythology in a garden.",
      galleryRoom: "Botticelli Hall",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["renaissance", "mythological", "allegorical"],
      moodTags: ["elegant", "mysterious", "verdant"],
      primaryColors: ["#2d5a27", "#f5e6c8", "#c4a574"],
      artistSlug: "sandro-botticelli",
      museumSlug: "uffizi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg",
    },
    // Rembrandt
    {
      slug: "the-night-watch",
      title: "The Night Watch",
      year: 1642,
      medium: "Oil on canvas",
      dimensions: "363 cm × 437 cm",
      description:
        "A massive painting depicting a city militia company led by Captain Frans Banninck Cocq.",
      historicalSignificance:
        "Rembrandt's most famous painting, revolutionary for its use of light and movement in group portraiture.",
      galleryRoom: "Gallery of Honour",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["baroque", "group-portrait", "dutch-golden-age"],
      moodTags: ["dramatic", "dynamic", "theatrical"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#8b0000"],
      artistSlug: "rembrandt",
      museumSlug: "rijksmuseum",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1280px-The_Night_Watch_-_HD.jpg",
    },
    {
      slug: "self-portrait-rembrandt-1659",
      title: "Self-Portrait",
      year: 1659,
      medium: "Oil on canvas",
      dimensions: "84.5 cm × 66 cm",
      description:
        "One of Rembrandt's many self-portraits, showing the artist in his later years with remarkable honesty.",
      galleryRoom: "Dutch Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["baroque", "portrait", "self-portrait"],
      moodTags: ["introspective", "melancholic", "honest"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#8b7355"],
      artistSlug: "rembrandt",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    },
    // Vermeer
    {
      slug: "girl-with-a-pearl-earring",
      title: "Girl with a Pearl Earring",
      year: 1665,
      medium: "Oil on canvas",
      dimensions: "44.5 cm × 39 cm",
      description:
        "A tronie of a girl wearing an exotic dress and a large pearl earring, often called the 'Mona Lisa of the North.'",
      historicalSignificance:
        "One of Vermeer's most famous works, celebrated for its intimate quality and masterful use of light.",
      galleryRoom: "Cabinet Room",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["baroque", "tronie", "dutch-golden-age"],
      moodTags: ["intimate", "mysterious", "luminous"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#5c4a3d"],
      artistSlug: "johannes-vermeer",
      museumSlug: "mauritshuis",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    },
    {
      slug: "the-milkmaid",
      title: "The Milkmaid",
      year: 1658,
      medium: "Oil on canvas",
      dimensions: "45.5 cm × 41 cm",
      description:
        "A maidservant pouring milk in a simple domestic scene, celebrated for its color and light.",
      galleryRoom: "Gallery of Honour",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["baroque", "genre-painting", "dutch-golden-age"],
      moodTags: ["serene", "domestic", "luminous"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#8b7355"],
      artistSlug: "johannes-vermeer",
      museumSlug: "rijksmuseum",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
    },
    // Picasso - Note: Guernica and Les Demoiselles d'Avignon are under copyright (Picasso died 1973)
    {
      slug: "guernica",
      title: "Guernica",
      year: 1937,
      medium: "Oil on canvas",
      dimensions: "349.3 cm × 776.6 cm",
      description:
        "A powerful anti-war statement depicting the bombing of Guernica during the Spanish Civil War.",
      historicalSignificance:
        "Considered one of the most powerful anti-war paintings in history and a seminal work of Cubism.",
      galleryRoom: "Main Hall",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["cubism", "political", "expressionist"],
      moodTags: ["anguish", "chaos", "powerful"],
      primaryColors: ["#2d2d2d", "#f5f5f5", "#8b8b8b"],
      artistSlug: "pablo-picasso",
      museumSlug: "reina-sofia",
      imageUrl: null, // Copyrighted - cannot use
    },
    {
      slug: "les-demoiselles-davignon",
      title: "Les Demoiselles d'Avignon",
      year: 1907,
      medium: "Oil on canvas",
      dimensions: "243.9 cm × 233.7 cm",
      description:
        "A revolutionary painting depicting five nude women with angular, disjointed body shapes.",
      historicalSignificance:
        "Considered a proto-Cubist work that helped launch the Cubist movement.",
      galleryRoom: "Gallery 2, Floor 5",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["cubism", "proto-cubism", "figurative"],
      moodTags: ["provocative", "angular", "bold"],
      primaryColors: ["#c4a35a", "#e8d5c4", "#5c4a3d"],
      artistSlug: "pablo-picasso",
      museumSlug: "moma",
      imageUrl: null, // Copyrighted - cannot use
    },
    // Dalí - Note: Works under copyright (Dalí died 1989)
    {
      slug: "the-persistence-of-memory",
      title: "The Persistence of Memory",
      year: 1931,
      medium: "Oil on canvas",
      dimensions: "24 cm × 33 cm",
      description:
        "The famous melting clocks painting, exploring the fluidity of time in dreams.",
      historicalSignificance:
        "One of the most recognizable works of Surrealism and modern art.",
      galleryRoom: "Gallery 5, Floor 5",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["surrealism", "dreamscape"],
      moodTags: ["dreamlike", "unsettling", "melancholic"],
      primaryColors: ["#c4a35a", "#87ceeb", "#3d2b1f"],
      artistSlug: "salvador-dali",
      museumSlug: "moma",
      imageUrl: null, // Copyrighted - cannot use
    },
    // Munch
    {
      slug: "the-scream",
      title: "The Scream",
      year: 1893,
      medium: "Oil, tempera, and pastel on cardboard",
      dimensions: "91 cm × 73.5 cm",
      description:
        "A figure with an agonized expression against a tumultuous sky, symbolizing the anxiety of modern humanity.",
      historicalSignificance:
        "Became an icon of existential anxiety and one of the most recognizable images in art history.",
      galleryRoom: "Munch Hall",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["expressionism", "symbolism"],
      moodTags: ["anguish", "anxiety", "existential"],
      primaryColors: ["#ff6b35", "#1a3a6e", "#f4d03f"],
      artistSlug: "edvard-munch",
      museumSlug: "national-gallery-oslo",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    },
    // Michelangelo
    {
      slug: "the-creation-of-adam",
      title: "The Creation of Adam",
      year: 1512,
      medium: "Fresco",
      dimensions: "280 cm × 570 cm",
      description:
        "Part of the Sistine Chapel ceiling, depicting God giving life to Adam with their near-touching fingers.",
      historicalSignificance:
        "One of the most replicated religious images and a masterpiece of High Renaissance art.",
      galleryRoom: "Sistine Chapel",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["renaissance", "religious", "fresco"],
      moodTags: ["divine", "powerful", "transcendent"],
      primaryColors: ["#e8d5c4", "#87ceeb", "#8b7355"],
      artistSlug: "michelangelo",
      museumSlug: "vatican-museums",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    },
    // Raphael
    {
      slug: "the-school-of-athens",
      title: "The School of Athens",
      year: 1511,
      medium: "Fresco",
      dimensions: "500 cm × 770 cm",
      description:
        "A fresco depicting the great philosophers of ancient Greece gathered in a classical setting.",
      historicalSignificance:
        "Considered Raphael's masterpiece and one of the most significant works of the High Renaissance.",
      galleryRoom: "Raphael Rooms",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["renaissance", "fresco", "philosophical"],
      moodTags: ["intellectual", "classical", "harmonious"],
      primaryColors: ["#e8d5c4", "#8b7355", "#c4a35a"],
      artistSlug: "raphael",
      museumSlug: "vatican-museums",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    },
    // Velázquez
    {
      slug: "las-meninas",
      title: "Las Meninas",
      year: 1656,
      medium: "Oil on canvas",
      dimensions: "318 cm × 276 cm",
      description:
        "A complex composition depicting the Spanish royal family with the Infanta Margarita at center.",
      historicalSignificance:
        "Considered one of the most analyzed works in Western art history for its complex composition.",
      galleryRoom: "Room 12",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["baroque", "portrait", "court-painting"],
      moodTags: ["elegant", "mysterious", "complex"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#8b0000"],
      artistSlug: "diego-velazquez",
      museumSlug: "prado",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    },
    // Renoir
    {
      slug: "dance-at-le-moulin-de-la-galette",
      title: "Dance at Le Moulin de la Galette",
      year: 1876,
      medium: "Oil on canvas",
      dimensions: "131 cm × 175 cm",
      description:
        "A joyful scene of Parisians dancing at an outdoor café in Montmartre.",
      historicalSignificance:
        "One of the most celebrated masterpieces of Impressionism.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["impressionist", "genre-scene", "outdoor"],
      moodTags: ["joyful", "lively", "festive"],
      primaryColors: ["#1a3a6e", "#f5e6c8", "#e8d5c4"],
      artistSlug: "pierre-auguste-renoir",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    },
    // Degas
    {
      slug: "the-dance-class",
      title: "The Dance Class",
      year: 1874,
      medium: "Oil on canvas",
      dimensions: "83.5 cm × 77.2 cm",
      description:
        "A scene of ballet dancers at the Paris Opera, showing Degas's fascination with movement and light.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["impressionist", "ballet", "interior"],
      moodTags: ["elegant", "graceful", "intimate"],
      primaryColors: ["#e8d5c4", "#f5f5f5", "#8b7355"],
      artistSlug: "edgar-degas",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg",
    },
    // Warhol - Note: Works under copyright (Warhol died 1987)
    {
      slug: "campbells-soup-cans",
      title: "Campbell's Soup Cans",
      year: 1962,
      medium: "Synthetic polymer paint on canvas",
      dimensions: "50.8 cm × 40.6 cm each (32 canvases)",
      description:
        "32 canvases depicting each variety of Campbell's condensed soup, challenging distinctions between fine art and commercial art.",
      historicalSignificance:
        "A defining work of Pop Art that changed how we think about art and consumer culture.",
      galleryRoom: "Pop Art Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["pop-art", "commercial"],
      moodTags: ["ironic", "bold", "industrial"],
      primaryColors: ["#ff0000", "#f5f5f5", "#c4a35a"],
      artistSlug: "andy-warhol",
      museumSlug: "moma",
      imageUrl: null, // Copyrighted - cannot use
    },
    // Seurat
    {
      slug: "a-sunday-on-la-grande-jatte",
      title: "A Sunday Afternoon on the Island of La Grande Jatte",
      year: 1886,
      medium: "Oil on canvas",
      dimensions: "207.6 cm × 308 cm",
      description:
        "A monumental pointillist painting depicting Parisians relaxing in a park by the Seine.",
      historicalSignificance:
        "The leading example of Pointillism and a masterpiece of Post-Impressionism.",
      galleryRoom: "European Paintings",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "pointillism", "outdoor"],
      moodTags: ["serene", "formal", "geometric"],
      primaryColors: ["#2d5a27", "#87ceeb", "#e8d5c4"],
      artistSlug: "georges-seurat",
      museumSlug: "art-institute-chicago",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    },
    // Klimt - Public domain (Klimt died 1918)
    {
      slug: "the-kiss",
      title: "The Kiss",
      year: 1908,
      medium: "Oil and gold leaf on canvas",
      dimensions: "180 cm × 180 cm",
      description:
        "A couple embracing, their bodies entwined in elaborate robes decorated with gold leaf.",
      historicalSignificance:
        "The masterpiece of Klimt's Golden Period and one of the most recognizable works of Art Nouveau.",
      galleryRoom: "Klimt Collection",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["art-nouveau", "symbolism", "portrait"],
      moodTags: ["romantic", "sensual", "opulent"],
      primaryColors: ["#c4a35a", "#f4d03f", "#2d5a27"],
      artistSlug: "gustav-klimt",
      museumSlug: "uffizi", // Note: Actually at Belvedere, Vienna - will add that museum later
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gustav_Klimt_016.jpg/600px-Gustav_Klimt_016.jpg",
    },
    // Caravaggio
    {
      slug: "the-calling-of-saint-matthew",
      title: "The Calling of Saint Matthew",
      year: 1600,
      medium: "Oil on canvas",
      dimensions: "322 cm × 340 cm",
      description:
        "A dramatic scene of Christ calling Matthew to follow him, with revolutionary use of chiaroscuro.",
      historicalSignificance:
        "A groundbreaking work that pioneered the Baroque style with its dramatic lighting.",
      galleryRoom: "Contarelli Chapel",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["baroque", "religious", "chiaroscuro"],
      moodTags: ["dramatic", "divine", "transformative"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#f4d03f"],
      artistSlug: "caravaggio",
      museumSlug: "louvre",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1280px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
    },
    // Turner
    {
      slug: "the-fighting-temeraire",
      title: "The Fighting Temeraire",
      year: 1839,
      medium: "Oil on canvas",
      dimensions: "90.7 cm × 121.6 cm",
      description:
        "The painting depicts the HMS Temeraire, a warship that played a distinguished role in the Battle of Trafalgar, being towed to be broken up for scrap.",
      historicalSignificance:
        "Voted Britain's greatest painting in a 2005 poll, it symbolizes the passing of the age of sail.",
      galleryRoom: "Room 34",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "maritime", "landscape"],
      moodTags: ["melancholic", "sublime", "nostalgic"],
      primaryColors: ["#f4a460", "#87ceeb", "#3d2b1f"],
      artistSlug: "jmw-turner",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/1280px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
    },
    {
      slug: "rain-steam-and-speed",
      title: "Rain, Steam and Speed",
      year: 1844,
      medium: "Oil on canvas",
      dimensions: "91 cm × 121.8 cm",
      description:
        "A steam locomotive crosses the Maidenhead Railway Bridge during a rainstorm, celebrating the power of the Industrial Revolution.",
      galleryRoom: "Room 34",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["romanticism", "industrial", "landscape"],
      moodTags: ["dynamic", "powerful", "atmospheric"],
      primaryColors: ["#c4a35a", "#87ceeb", "#3d2b1f"],
      artistSlug: "jmw-turner",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Turner_-_Rain%2C_Steam_and_Speed_-_National_Gallery_file.jpg/1280px-Turner_-_Rain%2C_Steam_and_Speed_-_National_Gallery_file.jpg",
    },
    // Friedrich
    {
      slug: "wanderer-above-the-sea-of-fog",
      title: "Wanderer above the Sea of Fog",
      year: 1818,
      medium: "Oil on canvas",
      dimensions: "94.8 cm × 74.8 cm",
      description:
        "A man standing upon a rocky precipice, his back to the viewer, gazing out over a landscape covered in fog.",
      historicalSignificance:
        "An icon of Romanticism and one of the most recognized images of German art.",
      galleryRoom: "19th Century Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "landscape", "sublime"],
      moodTags: ["contemplative", "sublime", "mysterious"],
      primaryColors: ["#4a6d8c", "#c4a35a", "#2d5a27"],
      artistSlug: "caspar-david-friedrich",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg",
    },
    // Goya
    {
      slug: "the-third-of-may-1808",
      title: "The Third of May 1808",
      year: 1814,
      medium: "Oil on canvas",
      dimensions: "268 cm × 347 cm",
      description:
        "Depicts the Spanish resistance to Napoleon's armies during the occupation of 1808, showing the execution of Spanish rebels.",
      historicalSignificance:
        "A landmark in the history of art, considered the first great modern painting of war.",
      galleryRoom: "Room 64",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "historical", "political"],
      moodTags: ["dramatic", "tragic", "powerful"],
      primaryColors: ["#3d2b1f", "#f4d03f", "#8b0000"],
      artistSlug: "francisco-goya",
      museumSlug: "prado",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/1280px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
    },
    {
      slug: "saturn-devouring-his-son",
      title: "Saturn Devouring His Son",
      year: 1823,
      medium: "Oil mural transferred to canvas",
      dimensions: "143 cm × 81 cm",
      description:
        "One of Goya's Black Paintings, depicting the Greek myth of the Titan Cronus (Saturn) eating his children.",
      historicalSignificance:
        "Part of the famous Black Paintings series, representing Goya's dark psychological exploration.",
      galleryRoom: "Black Paintings Room",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "dark", "mythological"],
      moodTags: ["horrific", "disturbing", "powerful"],
      primaryColors: ["#2d2d2d", "#8b0000", "#c4a35a"],
      artistSlug: "francisco-goya",
      museumSlug: "prado",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/800px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
    },
    // Matisse
    {
      slug: "the-dance-matisse",
      title: "The Dance",
      year: 1910,
      medium: "Oil on canvas",
      dimensions: "260 cm × 391 cm",
      description:
        "Five nude figures dance in a circle against a blue and green background, celebrating joy and movement.",
      historicalSignificance:
        "A landmark of modern art, showcasing Matisse's bold use of color and simplified forms.",
      galleryRoom: "Modern Art Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["fauvism", "modernism", "figurative"],
      moodTags: ["joyful", "energetic", "primal"],
      primaryColors: ["#ff6b35", "#1a3a6e", "#2d5a27"],
      artistSlug: "henri-matisse",
      museumSlug: "hermitage",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Matissedance.jpg/1280px-Matissedance.jpg",
    },
    // Cézanne
    {
      slug: "mont-sainte-victoire",
      title: "Mont Sainte-Victoire",
      year: 1904,
      medium: "Oil on canvas",
      dimensions: "73 cm × 91 cm",
      description:
        "One of many paintings Cézanne made of the mountain near his home in Provence, showing his innovative approach to form and color.",
      historicalSignificance:
        "Cézanne painted Mont Sainte-Victoire over 80 times, these works laid foundations for Cubism.",
      galleryRoom: "Post-Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["post-impressionist", "landscape"],
      moodTags: ["serene", "contemplative", "structured"],
      primaryColors: ["#87ceeb", "#2d5a27", "#c4a35a"],
      artistSlug: "paul-cezanne",
      museumSlug: "met",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg/1280px-Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg",
    },
    {
      slug: "the-card-players",
      title: "The Card Players",
      year: 1895,
      medium: "Oil on canvas",
      dimensions: "47 cm × 57 cm",
      description:
        "Two Provençal peasants immersed in a card game, one of Cézanne's most celebrated series.",
      historicalSignificance:
        "One version sold in 2011 for over $250 million, making it one of the most expensive paintings ever sold.",
      galleryRoom: "Post-Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "genre-scene"],
      moodTags: ["contemplative", "quiet", "focused"],
      primaryColors: ["#8b7355", "#1a3a6e", "#c4a35a"],
      artistSlug: "paul-cezanne",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg/1280px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
    },
    // Manet
    {
      slug: "olympia",
      title: "Olympia",
      year: 1863,
      medium: "Oil on canvas",
      dimensions: "130.5 cm × 190 cm",
      description:
        "A nude woman lying on a bed while a servant brings her flowers from an admirer, challenging academic tradition.",
      historicalSignificance:
        "Caused a scandal at the 1865 Salon but is now considered a pivotal work in the transition to modern art.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["realism", "portrait", "modernism"],
      moodTags: ["bold", "confrontational", "provocative"],
      primaryColors: ["#f5e6c8", "#3d2b1f", "#e8d5c4"],
      artistSlug: "edouard-manet",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg/1280px-Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg",
    },
    {
      slug: "le-dejeuner-sur-lherbe",
      title: "Le Déjeuner sur l'herbe",
      year: 1863,
      medium: "Oil on canvas",
      dimensions: "208 cm × 265.5 cm",
      description:
        "A nude woman casually lunches with two fully dressed men in a rural setting, scandalizing contemporary audiences.",
      historicalSignificance:
        "Rejected by the Salon and exhibited at the Salon des Refusés, it became a catalyst for Impressionism.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["realism", "outdoor", "modernism"],
      moodTags: ["provocative", "casual", "revolutionary"],
      primaryColors: ["#2d5a27", "#f5e6c8", "#1a3a6e"],
      artistSlug: "edouard-manet",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    },
    // Van Eyck
    {
      slug: "arnolfini-portrait",
      title: "Arnolfini Portrait",
      year: 1434,
      medium: "Oil on oak panel",
      dimensions: "82.2 cm × 60 cm",
      description:
        "A double portrait of Italian merchant Giovanni di Nicolao Arnolfini and his wife in their Bruges home.",
      historicalSignificance:
        "A masterpiece of Northern Renaissance art, famous for its intricate symbolism and innovative use of oil paint.",
      galleryRoom: "Room 63",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["northern-renaissance", "portrait", "domestic"],
      moodTags: ["intimate", "formal", "mysterious"],
      primaryColors: ["#2d5a27", "#8b0000", "#3d2b1f"],
      artistSlug: "jan-van-eyck",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/800px-The_Arnolfini_portrait_%281434%29.jpg",
    },
    // Bosch
    {
      slug: "the-garden-of-earthly-delights",
      title: "The Garden of Earthly Delights",
      year: 1510,
      medium: "Oil on oak panels",
      dimensions: "205.5 cm × 384.9 cm (triptych)",
      description:
        "A triptych depicting paradise with Adam and Eve, a fantastical garden of earthly pleasures, and the torments of Hell.",
      historicalSignificance:
        "One of the most famous and enigmatic works of art, its symbolism continues to fascinate scholars.",
      galleryRoom: "Room 56A",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["northern-renaissance", "religious", "fantastical"],
      moodTags: ["surreal", "mysterious", "complex"],
      primaryColors: ["#2d5a27", "#e8d5c4", "#8b0000"],
      artistSlug: "hieronymus-bosch",
      museumSlug: "prado",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1280px-The_Garden_of_earthly_delights.jpg",
    },
    // More Van Gogh
    {
      slug: "irises",
      title: "Irises",
      year: 1889,
      medium: "Oil on canvas",
      dimensions: "71 cm × 93 cm",
      description:
        "A vibrant painting of purple irises in the garden of the Saint-Paul-de-Mausole asylum where Van Gogh was staying.",
      galleryRoom: "Post-Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "floral", "nature"],
      moodTags: ["vibrant", "serene", "hopeful"],
      primaryColors: ["#6b5b95", "#2d5a27", "#f4d03f"],
      artistSlug: "van-gogh",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg",
    },
    {
      slug: "almond-blossoms",
      title: "Almond Blossoms",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "73.3 cm × 92.4 cm",
      description:
        "Blossoming almond branches against a blue sky, painted to celebrate the birth of his nephew Vincent Willem.",
      galleryRoom: "Van Gogh Collection",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["post-impressionist", "floral", "japanese-influenced"],
      moodTags: ["hopeful", "delicate", "joyful"],
      primaryColors: ["#87ceeb", "#f5f5f5", "#2d5a27"],
      artistSlug: "van-gogh",
      museumSlug: "van-gogh-museum",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
    },
    // More Monet
    {
      slug: "haystacks",
      title: "Haystacks (End of Summer)",
      year: 1891,
      medium: "Oil on canvas",
      dimensions: "60 cm × 100 cm",
      description:
        "One of a series of paintings depicting haystacks in the countryside near Giverny, exploring effects of light.",
      historicalSignificance:
        "Part of Monet's famous series paintings, showing his dedication to capturing changing light conditions.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["impressionist", "landscape", "series"],
      moodTags: ["warm", "peaceful", "rural"],
      primaryColors: ["#c4a35a", "#87ceeb", "#2d5a27"],
      artistSlug: "claude-monet",
      museumSlug: "art-institute-chicago",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/1280px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
    },
    // More Vermeer
    {
      slug: "the-art-of-painting",
      title: "The Art of Painting",
      year: 1666,
      medium: "Oil on canvas",
      dimensions: "120 cm × 100 cm",
      description:
        "An artist painting a young woman in his studio, considered Vermeer's largest and most complex work.",
      historicalSignificance:
        "Vermeer kept this painting until his death, suggesting its personal significance to him.",
      galleryRoom: "Dutch Masters Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["baroque", "genre-painting", "dutch-golden-age"],
      moodTags: ["intimate", "luminous", "contemplative"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#3d2b1f"],
      artistSlug: "johannes-vermeer",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/800px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
    },
    // More Rembrandt
    {
      slug: "the-anatomy-lesson",
      title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
      year: 1632,
      medium: "Oil on canvas",
      dimensions: "169.5 cm × 216.5 cm",
      description:
        "Dr. Tulp demonstrates the musculature of the arm to medical professionals, a revolutionary group portrait.",
      historicalSignificance:
        "Rembrandt's first major commission in Amsterdam, establishing his reputation as a master portraitist.",
      galleryRoom: "Gallery of Honour",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["baroque", "group-portrait", "medical"],
      moodTags: ["intellectual", "dramatic", "documentary"],
      primaryColors: ["#3d2b1f", "#f5f5f5", "#c4a35a"],
      artistSlug: "rembrandt",
      museumSlug: "mauritshuis",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/1280px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    },
    // More Klimt
    {
      slug: "portrait-of-adele-bloch-bauer-i",
      title: "Portrait of Adele Bloch-Bauer I",
      year: 1907,
      medium: "Oil, silver, and gold on canvas",
      dimensions: "138 cm × 138 cm",
      description:
        "A golden portrait of Viennese socialite Adele Bloch-Bauer, exemplifying Klimt's Golden Phase.",
      historicalSignificance:
        "Sold for $135 million in 2006, then the highest price ever paid for a painting.",
      galleryRoom: "Neue Galerie",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["art-nouveau", "symbolism", "portrait"],
      moodTags: ["opulent", "elegant", "mysterious"],
      primaryColors: ["#c4a35a", "#f4d03f", "#3d2b1f"],
      artistSlug: "gustav-klimt",
      museumSlug: "met",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt_046.jpg/800px-Gustav_Klimt_046.jpg",
    },
    // More Degas
    {
      slug: "labsinthe",
      title: "L'Absinthe",
      year: 1876,
      medium: "Oil on canvas",
      dimensions: "92 cm × 68 cm",
      description:
        "Two figures sit isolated in a Paris café, the woman staring vacantly at a glass of absinthe.",
      historicalSignificance:
        "Initially controversial for its depiction of urban alienation, now celebrated as a masterpiece of modern life.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["impressionist", "genre-scene", "urban"],
      moodTags: ["melancholic", "alienated", "contemplative"],
      primaryColors: ["#c4a35a", "#e8d5c4", "#3d2b1f"],
      artistSlug: "edgar-degas",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/800px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg",
    },
    // Hopper
    {
      slug: "nighthawks",
      title: "Nighthawks",
      year: 1942,
      medium: "Oil on canvas",
      dimensions: "84.1 cm × 152.4 cm",
      description:
        "Four people in a downtown diner late at night, viewed through a large glass window. The scene captures urban isolation in mid-century America.",
      historicalSignificance:
        "One of the most recognizable paintings in American art, defining the look and mood of American Realism.",
      galleryRoom: "American Art Wing",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["american-realism", "urban", "nocturnal"],
      moodTags: ["lonely", "contemplative", "melancholic"],
      primaryColors: ["#2d5a27", "#f4d03f", "#3d2b1f"],
      artistSlug: "edward-hopper",
      museumSlug: "art-institute-chicago",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
    },
    // Hokusai
    {
      slug: "the-great-wave",
      title: "The Great Wave off Kanagawa",
      year: 1831,
      medium: "Woodblock print",
      dimensions: "25.7 cm × 37.8 cm",
      description:
        "A massive wave threatens boats off the coast of Kanagawa, with Mount Fuji in the background. Part of the Thirty-Six Views of Mount Fuji series.",
      historicalSignificance:
        "The most famous work of Japanese art and one of the most recognizable images in the world. Influenced Impressionism and Art Nouveau.",
      galleryRoom: "Asian Art Wing",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["ukiyo-e", "seascape", "japanese"],
      moodTags: ["dramatic", "powerful", "sublime"],
      primaryColors: ["#1a3a6e", "#f5f5f5", "#c4a35a"],
      artistSlug: "katsushika-hokusai",
      museumSlug: "met",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    },
    // Grant Wood
    {
      slug: "american-gothic",
      title: "American Gothic",
      year: 1930,
      medium: "Oil on beaverboard",
      dimensions: "78 cm × 65.3 cm",
      description:
        "A farmer and his daughter stand before a house with a distinctive Gothic window. The woman looks off to the side while the man stares directly at the viewer.",
      historicalSignificance:
        "One of the most parodied and recognizable images in American art, often seen as a comment on rural American values.",
      galleryRoom: "American Art Wing",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["american-realism", "portrait", "rural"],
      moodTags: ["stoic", "stern", "iconic"],
      primaryColors: ["#8b7355", "#2d5a27", "#3d2b1f"],
      artistSlug: "grant-wood",
      museumSlug: "art-institute-chicago",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    },
    // Delacroix
    {
      slug: "liberty-leading-the-people",
      title: "Liberty Leading the People",
      year: 1830,
      medium: "Oil on canvas",
      dimensions: "260 cm × 325 cm",
      description:
        "A bare-breasted woman personifying Liberty leads the people forward over barricades and fallen bodies, holding the French tricolor flag.",
      historicalSignificance:
        "Commemorates the July Revolution of 1830. An enduring symbol of the French Republic and revolutionary spirit worldwide.",
      galleryRoom: "Delacroix Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "historical", "political"],
      moodTags: ["triumphant", "dramatic", "passionate"],
      primaryColors: ["#1a3a6e", "#8b0000", "#f5f5f5"],
      artistSlug: "eugene-delacroix",
      museumSlug: "louvre",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    },
    // Whistler
    {
      slug: "whistlers-mother",
      title: "Arrangement in Grey and Black No.1",
      year: 1871,
      medium: "Oil on canvas",
      dimensions: "144.3 cm × 162.4 cm",
      description:
        "Anna McNeill Whistler, the artist's mother, sits in profile against a grey wall. Commonly known as Whistler's Mother.",
      historicalSignificance:
        "One of the most famous American paintings, often considered a symbol of motherhood. Displayed in the Musée d'Orsay since 1891.",
      galleryRoom: "American Art Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["impressionist", "portrait", "tonal"],
      moodTags: ["serene", "dignified", "contemplative"],
      primaryColors: ["#4a4a4a", "#2d2d2d", "#e8d5c4"],
      artistSlug: "james-whistler",
      museumSlug: "musee-dorsay",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/1280px-Whistlers_Mother_high_res.jpg",
    },
    // Géricault
    {
      slug: "the-raft-of-the-medusa",
      title: "The Raft of the Medusa",
      year: 1819,
      medium: "Oil on canvas",
      dimensions: "491 cm × 716 cm",
      description:
        "Survivors of the French naval frigate Méduse cling to a makeshift raft, some waving desperately at a distant ship on the horizon.",
      historicalSignificance:
        "A breakthrough in French Romantic painting that scandalized audiences with its political criticism and unflinching depiction of human suffering.",
      galleryRoom: "Romanticism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["romanticism", "historical", "maritime"],
      moodTags: ["dramatic", "tragic", "desperate"],
      primaryColors: ["#3d2b1f", "#8b7355", "#87ceeb"],
      artistSlug: "theodore-gericault",
      museumSlug: "louvre",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1280px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    },
    // Manet - A Bar at the Folies-Bergère
    {
      slug: "a-bar-at-the-folies-bergere",
      title: "A Bar at the Folies-Bergère",
      year: 1882,
      medium: "Oil on canvas",
      dimensions: "96 cm × 130 cm",
      description:
        "A barmaid stands at the counter of the Folies-Bergère nightclub, her reflection and a crowded scene visible in the mirror behind her.",
      historicalSignificance:
        "Manet's last major work, famous for its complex spatial arrangement and the enigmatic expression of the barmaid.",
      galleryRoom: "Impressionism Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["impressionist", "interior", "portrait"],
      moodTags: ["mysterious", "melancholic", "modern"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#f5f5f5"],
      artistSlug: "edouard-manet",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg/1280px-Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg",
    },
    // Titian
    {
      slug: "venus-of-urbino",
      title: "Venus of Urbino",
      year: 1538,
      medium: "Oil on canvas",
      dimensions: "119 cm × 165 cm",
      description:
        "A nude woman, identified as Venus, reclines on a couch in a Renaissance interior while servants arrange clothing in the background.",
      historicalSignificance:
        "One of the most influential female nudes in Western art history, inspiring Manet's Olympia and countless other works.",
      galleryRoom: "Titian Room",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["renaissance", "mythological", "nude"],
      moodTags: ["sensual", "intimate", "luxurious"],
      primaryColors: ["#e8d5c4", "#8b0000", "#2d5a27"],
      artistSlug: "titian",
      museumSlug: "uffizi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/1280px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg",
    },
    // Rubens
    {
      slug: "the-descent-from-the-cross",
      title: "The Descent from the Cross",
      year: 1614,
      medium: "Oil on panel",
      dimensions: "420 cm × 310 cm",
      description:
        "The body of Christ is lowered from the cross by his followers, their faces showing grief as they support his lifeless form.",
      historicalSignificance:
        "A masterpiece of Baroque religious art, demonstrating Rubens' command of dramatic composition and human emotion.",
      galleryRoom: "Rubens Hall",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["baroque", "religious", "dramatic"],
      moodTags: ["sorrowful", "reverent", "dramatic"],
      primaryColors: ["#f5f5f5", "#8b0000", "#3d2b1f"],
      artistSlug: "peter-paul-rubens",
      museumSlug: "prado",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg/800px-Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg",
    },
    // Dürer
    {
      slug: "self-portrait-at-28",
      title: "Self-Portrait at Twenty-Eight",
      year: 1500,
      medium: "Oil on panel",
      dimensions: "67.1 cm × 48.9 cm",
      description:
        "Dürer depicts himself facing forward in a pose traditionally reserved for Christ, wearing a fur coat against a dark background.",
      historicalSignificance:
        "One of the most famous self-portraits ever painted, notable for its frontal pose and Christ-like presentation.",
      galleryRoom: "German Masters Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["northern-renaissance", "portrait", "self-portrait"],
      moodTags: ["dignified", "confident", "introspective"],
      primaryColors: ["#3d2b1f", "#c4a35a", "#e8d5c4"],
      artistSlug: "albrecht-durer",
      museumSlug: "national-gallery",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg/800px-Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg",
    },
    // David
    {
      slug: "the-death-of-marat",
      title: "The Death of Marat",
      year: 1793,
      medium: "Oil on canvas",
      dimensions: "165 cm × 128 cm",
      description:
        "The murdered French revolutionary Jean-Paul Marat lies dead in his bathtub, still holding a letter from his assassin Charlotte Corday.",
      historicalSignificance:
        "A powerful piece of political propaganda and one of the most iconic images of the French Revolution.",
      galleryRoom: "Neoclassical Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["neoclassicism", "historical", "political"],
      moodTags: ["tragic", "dramatic", "solemn"],
      primaryColors: ["#3d2b1f", "#f5f5f5", "#2d5a27"],
      artistSlug: "jacques-louis-david",
      museumSlug: "louvre",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg",
    },
    // Kandinsky
    {
      slug: "composition-viii",
      title: "Composition VIII",
      year: 1923,
      medium: "Oil on canvas",
      dimensions: "140 cm × 201 cm",
      description:
        "Geometric shapes, including circles, triangles, and lines, float across the canvas in a complex abstract arrangement.",
      historicalSignificance:
        "A key work of geometric abstraction and one of Kandinsky's most celebrated paintings from his Bauhaus period.",
      galleryRoom: "Modern Art Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["abstract", "geometric", "bauhaus"],
      moodTags: ["dynamic", "intellectual", "harmonious"],
      primaryColors: ["#1a3a6e", "#f4d03f", "#8b0000"],
      artistSlug: "wassily-kandinsky",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Wassily_Kandinsky_Composition_VIII.jpg/1280px-Wassily_Kandinsky_Composition_VIII.jpg",
    },
    // Mondrian
    {
      slug: "composition-red-blue-yellow",
      title: "Composition with Red, Blue and Yellow",
      year: 1930,
      medium: "Oil on canvas",
      dimensions: "46 cm × 46 cm",
      description:
        "A grid of black lines on white creates rectangles filled with primary colors: red, blue, and yellow.",
      historicalSignificance:
        "One of Mondrian's most famous works, representing the essence of De Stijl and pure abstraction.",
      galleryRoom: "Modern Art Gallery",
      isPermanent: true,
      searchVolumeTier: 1,
      styleTags: ["de-stijl", "abstract", "geometric"],
      moodTags: ["balanced", "pure", "harmonious"],
      primaryColors: ["#ff0000", "#0000ff", "#f4d03f"],
      artistSlug: "piet-mondrian",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/800px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
    },
    // Chagall
    {
      slug: "i-and-the-village",
      title: "I and the Village",
      year: 1911,
      medium: "Oil on canvas",
      dimensions: "192.1 cm × 151.4 cm",
      description:
        "A dreamlike composition showing a green-faced man and a cow face-to-face, with a Russian village scene floating in the background.",
      historicalSignificance:
        "A masterpiece of early modernism combining Cubist structure with Chagall's personal mythology and Jewish folk imagery.",
      galleryRoom: "Modern Art Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["surrealism", "expressionism", "cubism"],
      moodTags: ["dreamlike", "nostalgic", "whimsical"],
      primaryColors: ["#2d5a27", "#8b0000", "#1a3a6e"],
      artistSlug: "marc-chagall",
      museumSlug: "moma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Marc_Chagall%2C_I_and_the_Village_%2850394064557%29.jpg/800px-Marc_Chagall%2C_I_and_the_Village_%2850394064557%29.jpg",
    },
    // O'Keeffe
    {
      slug: "jimson-weed",
      title: "Jimson Weed/White Flower No. 1",
      year: 1932,
      medium: "Oil on canvas",
      dimensions: "121.9 cm × 101.6 cm",
      description:
        "A close-up view of a white jimson weed flower, magnified to fill the entire canvas with soft, flowing petals.",
      historicalSignificance:
        "Sold for $44.4 million in 2014, setting the record for the most expensive painting by a female artist. Exemplifies O'Keeffe's signature flower paintings.",
      galleryRoom: "American Modernism Gallery",
      isPermanent: true,
      searchVolumeTier: 2,
      styleTags: ["american-realism", "floral", "modernism"],
      moodTags: ["serene", "intimate", "sensual"],
      primaryColors: ["#f5f5f5", "#2d5a27", "#e8d5c4"],
      artistSlug: "georgia-okeeffe",
      museumSlug: "art-institute-chicago",
      imageUrl: null, // Copyrighted (O'Keeffe died 1986)
    },
    // Magritte - Note: Works under copyright (died 1967)
    {
      slug: "the-son-of-man",
      title: "The Son of Man",
      year: 1964,
      medium: "Oil on canvas",
      dimensions: "116 cm × 89 cm",
      description:
        "A man in a bowler hat and overcoat stands before a low wall, his face obscured by a hovering green apple.",
      historicalSignificance:
        "One of the most recognizable Surrealist paintings, representing the conflict between the visible and the hidden.",
      galleryRoom: "Surrealism Gallery",
      isPermanent: false,
      searchVolumeTier: 1,
      styleTags: ["surrealism", "portrait", "conceptual"],
      moodTags: ["mysterious", "intellectual", "enigmatic"],
      primaryColors: ["#2d5a27", "#87ceeb", "#3d2b1f"],
      artistSlug: "rene-magritte",
      museumSlug: "moma",
      imageUrl: null, // Copyrighted - cannot use
    },
  ],
};

async function main() {
  console.log("🌱 Seeding database...\n");

  // Seed movements
  console.log("🎭 Seeding movements...");
  for (const movement of seedData.movements) {
    await prisma.movement.upsert({
      where: { slug: movement.slug },
      update: movement,
      create: movement,
    });
    console.log(`   ✓ ${movement.name}`);
  }

  // Seed museums
  console.log("\n📍 Seeding museums...");
  for (const museum of seedData.museums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: museum,
      create: museum,
    });
    console.log(`   ✓ ${museum.name}`);
  }

  // Seed artists
  console.log("\n🎨 Seeding artists...");
  for (const artistData of seedData.artists) {
    const { movements: movementNames, ...artist } = artistData;

    // Find movement records by matching names
    const movementConnections = [];
    for (const movementName of movementNames) {
      // Find movement by name (case-insensitive partial match)
      const movement = await prisma.movement.findFirst({
        where: {
          name: {
            contains: movementName.replace(/\s+/g, '').toLowerCase() === 'highrennaissance'
              ? 'Renaissance'
              : movementName,
            mode: 'insensitive'
          }
        },
      });
      if (movement) {
        movementConnections.push({ id: movement.id });
      }
    }

    await prisma.artist.upsert({
      where: { slug: artist.slug },
      update: {
        ...artist,
        movements: { set: movementConnections },
      },
      create: {
        ...artist,
        movements: { connect: movementConnections },
      },
    });
    console.log(`   ✓ ${artistData.name} (${movementConnections.length} movements)`);
  }

  // Seed artworks
  console.log("\n🖼️  Seeding artworks...");
  for (const artwork of seedData.artworks) {
    const { artistSlug, museumSlug, ...artworkData } = artwork;

    const artist = await prisma.artist.findUnique({
      where: { slug: artistSlug },
    });
    const museum = await prisma.museum.findUnique({
      where: { slug: museumSlug },
    });

    await prisma.artwork.upsert({
      where: { slug: artwork.slug },
      update: {
        ...artworkData,
        artistId: artist?.id,
        museumId: museum?.id,
      },
      create: {
        ...artworkData,
        artistId: artist?.id,
        museumId: museum?.id,
      },
    });
    console.log(`   ✓ ${artwork.title}`);
  }

  // Summary
  const counts = {
    movements: await prisma.movement.count(),
    museums: await prisma.museum.count(),
    artists: await prisma.artist.count(),
    artworks: await prisma.artwork.count(),
  };

  console.log("\n✅ Seeding complete!");
  console.log(`   Movements: ${counts.movements}`);
  console.log(`   Museums:   ${counts.museums}`);
  console.log(`   Artists:   ${counts.artists}`);
  console.log(`   Artworks:  ${counts.artworks}`);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
