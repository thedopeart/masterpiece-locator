const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// New artists to create
const newArtists = [
  {
    id: 'artist-diego-rivera',
    slug: 'diego-rivera',
    name: 'Diego Rivera',
    birthYear: 1886,
    deathYear: 1957,
    nationality: 'Mexican',
    bioShort: 'Mexican muralist and painter, husband of Frida Kahlo, known for large-scale public murals depicting Mexican society and history.'
  },
  {
    id: 'artist-ed-ruscha',
    slug: 'ed-ruscha',
    name: 'Ed Ruscha',
    birthYear: 1937,
    deathYear: null,
    nationality: 'American',
    bioShort: 'American artist associated with Pop art and West Coast Cool, known for paintings and prints featuring words and phrases.'
  },
  {
    id: 'artist-robert-therrien',
    slug: 'robert-therrien',
    name: 'Robert Therrien',
    birthYear: 1947,
    deathYear: 2019,
    nationality: 'American',
    bioShort: 'American sculptor known for oversized everyday objects that challenge perceptions of scale and memory.'
  },
  {
    id: 'artist-barnett-newman',
    slug: 'barnett-newman',
    name: 'Barnett Newman',
    birthYear: 1905,
    deathYear: 1970,
    nationality: 'American',
    bioShort: 'American artist and major figure in Abstract Expressionism, known for his "zip" paintings with vertical bands of color.'
  },
  {
    id: 'artist-coosje-van-bruggen',
    slug: 'claes-oldenburg-coosje-van-bruggen',
    name: 'Claes Oldenburg and Coosje van Bruggen',
    birthYear: 1929,
    deathYear: 2022,
    nationality: 'Swedish-American / Dutch-American',
    bioShort: 'Husband-and-wife artistic duo known for monumental public sculptures of everyday objects in Pop art style.'
  }
];

// Artworks to add
const artworks = [
  // Portland Art Museum
  {
    id: 'artwork-monet-waterlilies-portland',
    slug: 'waterlilies-portland-1914',
    title: 'Waterlilies',
    year: 1914,
    medium: 'Oil on canvas',
    dimensions: '160.7 × 180.7 cm (63 1/4 × 71 1/8 in)',
    artistId: 'cmkhrgema000tj6io2uiska3i', // Monet
    museumId: 'portland-art-museum',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this monumental canvas around 1914-1915, during one of the most difficult periods of his life. His son and second wife had recently died, World War I raged across France, and his eyesight was failing. Despite these hardships, he continued working at his beloved water lily pond in Giverny.</p><p>The painting remained in Monet\'s family for decades, hanging in his son Michel\'s dining room for over 35 years. The <a href="/apps/masterpieces/museum/portland-art-museum"><strong>Portland Art Museum</strong></a> acquired it in 1959 for $60,000. It has never had another owner.</p><p>In 2024, the museum completed a major restoration, removing a varnish that had been applied against Monet\'s wishes. The artist was adamant from the 1870s onward that his paintings should not be varnished. The restoration revealed the original, more subtle tonalities Monet intended.</p>'
  },
  {
    id: 'artwork-vangogh-oxcart-portland',
    slug: 'the-ox-cart-1884',
    title: 'The Ox-Cart',
    year: 1884,
    medium: 'Oil on canvas on panel',
    dimensions: '57.1 × 82.5 cm (22 1/2 × 32 1/2 in)',
    artistId: 'cmkhrgde4000rj6ioaqp2rm4l', // Van Gogh
    museumId: 'portland-art-museum',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted this early work in 1884 while living in Nuenen, Netherlands, before he developed his signature bold style. The painting depicts a rural scene with an ox-drawn cart, reflecting his interest in peasant life during this period.</p><p>This dark-toned work predates his move to Paris, where exposure to Impressionism would transform his palette. The <a href="/apps/masterpieces/museum/portland-art-museum"><strong>Portland Art Museum</strong></a> counts it among their most valuable holdings alongside Monet\'s Waterlilies.</p>'
  },

  // SFMOMA
  {
    id: 'artwork-matisse-femme-chapeau',
    slug: 'femme-au-chapeau-woman-with-hat',
    title: 'Femme au chapeau (Woman with a Hat)',
    year: 1905,
    medium: 'Oil on canvas',
    dimensions: '80.6 × 59.7 cm (31 3/4 × 23 1/2 in)',
    artistId: 'cmkhxgsy4001g8tek1tpezkql', // Matisse
    museumId: 'sfmoma',
    searchVolumeTier: 1,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> ignited passionate controversy when he debuted this portrait at the 1905 Salon d\'Automne in Paris. The painting depicts his wife Amélie, rendered in patches of wild <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a> brushstrokes that purposefully departed from observed reality.</p><p>Critics were outraged. Louis Vauxcelles famously called Matisse and his colleagues "les fauves" (wild beasts), inadvertently naming the Fauvism movement. Gertrude and Leo Stein purchased the controversial work for 500 francs, boosting Matisse\'s morale after the harsh criticism.</p><p>The painting eventually made its way to San Francisco through Michael and Sarah Stein in 1935. <a href="/apps/masterpieces/museum/sfmoma"><strong>SFMOMA</strong></a> received it as a bequest in 1991. By terms of the gift, the painting cannot travel, making SFMOMA the only place to see this foundational work of modern art.</p>'
  },
  {
    id: 'artwork-rivera-flower-carrier',
    slug: 'the-flower-carrier-1935',
    title: 'The Flower Carrier',
    year: 1935,
    medium: 'Oil and tempera on masonite',
    dimensions: '121.9 × 121.3 cm (48 × 47 3/4 in)',
    artistId: 'artist-diego-rivera',
    museumId: 'sfmoma',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/diego-rivera"><strong>Diego Rivera</strong></a> painted this powerful image of a laborer struggling under an enormous basket of flowers in 1935. The worker kneels while a woman helps steady the heavy load, a scene that speaks to the dignity and hardship of Mexican working people.</p><p>Rivera was one of Mexico\'s greatest muralists, famous for large-scale public works depicting Mexican society and history. This smaller easel painting captures themes central to his mural work: labor, social inequality, and the beauty found in everyday struggle.</p><p>The painting is one of <a href="/apps/masterpieces/museum/sfmoma"><strong>SFMOMA</strong></a>\'s most recognized works, representing the museum\'s strong holdings in Mexican modernism.</p>'
  },

  // Nelson-Atkins Museum
  {
    id: 'artwork-shuttlecocks',
    slug: 'shuttlecocks-kansas-city',
    title: 'Shuttlecocks',
    year: 1994,
    medium: 'Aluminum, fiberglass-reinforced plastic, paint',
    dimensions: '585.6 × 487.4 cm each (19 ft 2 in × 16 ft)',
    artistId: 'artist-coosje-van-bruggen',
    museumId: 'nelson-atkins-museum',
    searchVolumeTier: 2,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/claes-oldenburg-coosje-van-bruggen"><strong>Claes Oldenburg and Coosje van Bruggen</strong></a> created these four giant badminton shuttlecocks for the <a href="/apps/masterpieces/museum/nelson-atkins-museum"><strong>Nelson-Atkins Museum of Art</strong></a> in 1994. Each stands nearly 18 feet tall and weighs 5,500 pounds.</p><p>The husband-and-wife team positioned the sculptures as if they had just landed on opposite sides of an imaginary net, with the museum\'s neoclassical building serving as the net. The playful installation transforms the formal museum grounds into a whimsical badminton court.</p><p>At 546 times the height of a standard shuttlecock, these are recognized as the world\'s largest shuttlecock sculptures. They have become iconic Kansas City landmarks and one of the most photographed outdoor sculptures in America.</p>'
  },

  // The Broad - Basquiat
  {
    id: 'artwork-basquiat-horn-players',
    slug: 'horn-players-basquiat',
    title: 'Horn Players',
    year: 1983,
    medium: 'Acrylic and oil paintstick on three canvas panels',
    dimensions: '243.8 × 190.5 cm (96 × 75 in)',
    artistId: 'artist-basquiat',
    museumId: 'the-broad',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/jean-michel-basquiat"><strong>Jean-Michel Basquiat</strong></a> created this tribute to jazz legends Charlie Parker and Dizzy Gillespie in 1983. The large three-panel work features the musicians\' names repeated and crossed out, a technique Basquiat used to draw attention to words while simultaneously erasing them.</p><p>Music was central to Basquiat\'s life and art. Growing up in Brooklyn, he absorbed jazz, bebop, and eventually punk and hip-hop. These influences pulse through his frenetic visual style.</p><p>Eli and Edythe Broad were among Basquiat\'s earliest collectors, purchasing works directly from his shows in the 1980s. <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a> now holds 13 Basquiat paintings, more than MoMA and the Whitney combined.</p>'
  },
  {
    id: 'artwork-basquiat-untitled-1981-skull',
    slug: 'untitled-skull-basquiat-1981',
    title: 'Untitled (Skull)',
    year: 1981,
    medium: 'Acrylic and mixed media on canvas',
    dimensions: '205.7 × 175.9 cm (81 × 69 1/4 in)',
    artistId: 'artist-basquiat',
    museumId: 'the-broad',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/jean-michel-basquiat"><strong>Jean-Michel Basquiat</strong></a> painted this striking skull in 1981, the year he transitioned from street art to the gallery world. The image draws on his longtime fascination with anatomy, sparked by a copy of Gray\'s Anatomy his mother gave him as a child.</p><p>The skull appears simultaneously alive and dead, with visible teeth, hollow eyes, and a textured surface suggesting both bone and flesh. It exemplifies Basquiat\'s raw, urgent style that made him a sensation in the New York art world at just 21 years old.</p><p>The painting is one of the highlights of <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a>\'s extensive Basquiat collection in Los Angeles.</p>'
  },

  // The Broad - Warhol
  {
    id: 'artwork-warhol-soup-can-broad',
    slug: 'campbells-soup-can-torn-label',
    title: 'Small Torn Campbell\'s Soup Can (Pepper Pot)',
    year: 1962,
    medium: 'Casein and pencil on linen',
    dimensions: '50.8 × 40.6 cm (20 × 16 in)',
    artistId: 'cmkhrgl5t0015j6iorl32suls', // Warhol
    museumId: 'the-broad',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> created only six torn-label Campbell\'s Soup Can paintings in 1962. This one sold at auction in 2006 for $11.7 million, setting a record for the series.</p><p>The torn label adds a human element to Warhol\'s typically mechanical Pop imagery. The imperfection suggests use, wear, and the passage of time, making the mass-produced object feel almost personal.</p><p>Eli Broad acquired the painting for his collection. It now hangs at <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a> alongside other iconic Warhol works.</p>'
  },
  {
    id: 'artwork-warhol-soup-can-clam',
    slug: 'campbells-soup-can-clam-chowder',
    title: 'Campbell\'s Soup Can (Clam Chowder - Manhattan Style)',
    year: 1962,
    medium: 'Casein and pencil on linen',
    dimensions: '50.8 × 40.6 cm (20 × 16 in)',
    artistId: 'cmkhrgl5t0015j6iorl32suls', // Warhol
    museumId: 'the-broad',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> included this Clam Chowder can in his famous debut at the Ferus Gallery in Los Angeles in July 1962. The exhibition marked the West Coast debut of Pop art and launched Warhol to fame.</p><p>Each of the 32 canvases in the original series depicted a different Campbell\'s soup flavor. Warhol chose Campbell\'s because, as he said, he had eaten the soup for lunch every day for 20 years.</p><p>This work is part of <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a>\'s significant Warhol holdings in Los Angeles.</p>'
  },

  // The Broad - Therrien
  {
    id: 'artwork-therrien-under-table',
    slug: 'under-the-table-therrien',
    title: 'Under the Table',
    year: 1994,
    medium: 'Wood, metal, enamel',
    dimensions: '297.2 × 792.5 × 487.7 cm (117 × 312 × 192 in)',
    artistId: 'artist-robert-therrien',
    museumId: 'the-broad',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/robert-therrien"><strong>Robert Therrien</strong></a> created this walk-through installation of an oversized table and chairs in 1994. Visitors can actually walk beneath the massive furniture, experiencing the world from a child\'s perspective.</p><p>The table stands over nine feet tall. Walking underneath evokes memories of hiding under tables as a child, playing in a world scaled for adults. Therrien was fascinated by how changing an object\'s size could trigger emotional responses and buried memories.</p><p>The installation is one of the most interactive and beloved works at <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a>.</p>'
  },

  // Baltimore Museum of Art
  {
    id: 'artwork-matisse-blue-nude-1907',
    slug: 'blue-nude-souvenir-biskra',
    title: 'Blue Nude (Souvenir of Biskra)',
    year: 1907,
    medium: 'Oil on canvas',
    dimensions: '92.1 × 140.3 cm (36 1/4 × 55 1/4 in)',
    artistId: 'cmkhxgsy4001g8tek1tpezkql', // Matisse
    museumId: 'baltimore-museum-of-art',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> shocked the French public when he exhibited this reclining nude at the 1907 Société des Artistes Indépendants. The bold <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> figure, inspired by his travels to North Africa, was so controversial that it was burned in effigy at the 1913 Armory Show in Chicago.</p><p>Dr. Claribel Cone purchased the painting in 1926, adding it to what would become the world\'s largest public collection of Matisse works. The <a href="/apps/masterpieces/museum/baltimore-museum-of-art"><strong>Baltimore Museum of Art</strong></a> now holds over 1,200 Matisse pieces from the Cone Collection.</p><p>The painting predates Matisse\'s famous 1950s Blue Nudes cutout series by nearly half a century, but shares the same bold simplification of the human form.</p>'
  },

  // Museum of Fine Arts Houston
  {
    id: 'artwork-matisse-purple-coat',
    slug: 'woman-purple-coat-matisse',
    title: 'Woman in a Purple Coat',
    year: 1937,
    medium: 'Oil on canvas',
    dimensions: '81.3 × 65.4 cm (32 × 25 3/4 in)',
    artistId: 'cmkhxgsy4001g8tek1tpezkql', // Matisse
    museumId: 'museum-of-fine-arts-houston',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> painted this portrait of his model Lydia Delectorskaya in 1937. The Russian refugee became his primary model, assistant, and eventually his estate executor after his wife left him.</p><p>The painting exemplifies Matisse\'s mature decorative style, with bold patterns, rich colors, and flattened space. Lydia appears in an elegant <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>purple</strong></a> coat against an ornate background.</p><p>The <a href="/apps/masterpieces/museum/museum-of-fine-arts-houston"><strong>Museum of Fine Arts, Houston</strong></a> considers this one of the greatest examples of Matisse\'s late style in their collection.</p>'
  },
  {
    id: 'artwork-bellows-cliff-dwellers',
    slug: 'cliff-dwellers-bellows',
    title: 'Cliff Dwellers',
    year: 1913,
    medium: 'Oil on canvas',
    dimensions: '102.1 × 106.8 cm (40 3/16 × 42 1/16 in)',
    artistId: null, // Will need to find or create Bellows
    museumId: 'lacma',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: null // Skip for now, already at LACMA
  }
];

async function addArtworksAndArtists() {
  console.log('Adding new artists...\n');

  // Add new artists
  for (const artist of newArtists) {
    try {
      await prisma.artist.upsert({
        where: { slug: artist.slug },
        update: {
          name: artist.name,
          birthYear: artist.birthYear,
          deathYear: artist.deathYear,
          nationality: artist.nationality,
          bioShort: artist.bioShort,
          updatedAt: new Date()
        },
        create: {
          id: artist.id,
          slug: artist.slug,
          name: artist.name,
          birthYear: artist.birthYear,
          deathYear: artist.deathYear,
          nationality: artist.nationality,
          bioShort: artist.bioShort,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Added artist: ${artist.name}`);
    } catch (error) {
      console.error(`✗ Failed artist: ${artist.name} - ${error.message}`);
    }
  }

  console.log('\nAdding artworks...\n');

  // Add artworks (skip ones without descriptions)
  for (const artwork of artworks.filter(a => a.description)) {
    try {
      await prisma.artwork.upsert({
        where: { slug: artwork.slug },
        update: {
          title: artwork.title,
          year: artwork.year,
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          artistId: artwork.artistId,
          museumId: artwork.museumId,
          description: artwork.description,
          searchVolumeTier: artwork.searchVolumeTier,
          artworkType: artwork.artworkType,
          updatedAt: new Date()
        },
        create: {
          id: artwork.id,
          slug: artwork.slug,
          title: artwork.title,
          year: artwork.year,
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          artistId: artwork.artistId,
          museumId: artwork.museumId,
          description: artwork.description,
          searchVolumeTier: artwork.searchVolumeTier,
          artworkType: artwork.artworkType,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Added artwork: ${artwork.title}`);
    } catch (error) {
      console.error(`✗ Failed artwork: ${artwork.title} - ${error.message}`);
    }
  }

  // Count results
  console.log('\nArtwork counts by museum:');
  const museums = [
    'portland-art-museum',
    'sfmoma',
    'nelson-atkins-museum',
    'the-broad',
    'baltimore-museum-of-art',
    'museum-of-fine-arts-houston'
  ];

  for (const slug of museums) {
    const count = await prisma.artwork.count({ where: { museumId: slug } });
    const museum = await prisma.museum.findUnique({ where: { slug }, select: { name: true } });
    console.log(`  ${museum?.name}: ${count} artworks`);
  }

  await prisma.$disconnect();
}

addArtworksAndArtists().catch(console.error);
