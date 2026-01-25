const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// New artists needed
const newArtists = [
  {
    id: 'artist-do-ho-suh',
    slug: 'do-ho-suh',
    name: 'Do Ho Suh',
    birthYear: 1962,
    deathYear: null,
    nationality: 'South Korean',
    bioShort: 'South Korean contemporary artist known for site-specific installations exploring issues of home, identity, and personal space through translucent fabric structures and intricate sculptures.'
  },
  {
    id: 'artist-franz-von-stuck',
    slug: 'franz-von-stuck',
    name: 'Franz von Stuck',
    birthYear: 1863,
    deathYear: 1928,
    nationality: 'German',
    bioShort: 'German painter, sculptor, and architect of the Munich Secession. Known for mythological and allegorical subjects with dramatic, psychological intensity.'
  },
  {
    id: 'artist-grant-wood',
    slug: 'grant-wood',
    name: 'Grant Wood',
    birthYear: 1891,
    deathYear: 1942,
    nationality: 'American',
    bioShort: 'American painter best known for American Gothic. A leading figure in Regionalism, he depicted rural Midwestern scenes with precise, stylized forms.'
  },
  {
    id: 'artist-christo-jeanne-claude',
    slug: 'christo-and-jeanne-claude',
    name: 'Christo and Jeanne-Claude',
    birthYear: 1935,
    deathYear: 2020,
    nationality: 'Bulgarian / French',
    bioShort: 'Artistic partnership known for monumental environmental works wrapping buildings, bridges, and landscapes in fabric. Created some of the most ambitious public art projects ever realized.'
  },
  {
    id: 'artist-isamu-noguchi',
    slug: 'isamu-noguchi',
    name: 'Isamu Noguchi',
    birthYear: 1904,
    deathYear: 1988,
    nationality: 'American-Japanese',
    bioShort: 'Sculptor, designer, and landscape architect who bridged Eastern and Western artistic traditions. Known for organic abstract sculptures and iconic furniture designs.'
  },
  {
    id: 'artist-john-singer-sargent',
    slug: 'john-singer-sargent-2',
    name: 'John Singer Sargent',
    birthYear: 1856,
    deathYear: 1925,
    nationality: 'American',
    bioShort: 'Leading portrait painter of his generation, known for capturing high society subjects with virtuosic brushwork and psychological insight.'
  }
];

const artworks = [
  // ===== SEATTLE ASIAN ART MUSEUM =====
  {
    id: 'artwork-do-ho-suh-some-one',
    slug: 'some-one-do-ho-suh',
    title: 'Some/One',
    year: 2001,
    medium: 'Stainless steel military dog tags, nickel-plated copper sheets, steel structure, fiberglass',
    dimensions: 'Variable, approximately 320 × 660 × 426 cm',
    artistId: 'artist-do-ho-suh',
    museumId: 'seattle-asian-art-museum',
    searchVolumeTier: 2,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/do-ho-suh"><strong>Do Ho Suh</strong></a> constructed this striking armor-like garment from thousands of military dog tags. The shimmering coat spreads across the floor like a pool of metal, while the central figure stands hollow and empty.</p><p>The work explores themes of individuality versus collective identity. Each dog tag represents a single soldier, yet together they form an anonymous military mass. The armor could protect its wearer or weigh them down entirely.</p><p>Some/One is a highlight of the <a href="/apps/masterpieces/museum/seattle-asian-art-museum"><strong>Seattle Asian Art Museum</strong></a>\'s contemporary collection, bridging traditional Korean craft techniques with conceptual art practice.</p>'
  },
  {
    id: 'artwork-noguchi-black-sun',
    slug: 'black-sun-noguchi',
    title: 'Black Sun',
    year: 1969,
    medium: 'Black Brazilian granite',
    dimensions: '274 cm (9 ft) diameter',
    artistId: 'artist-isamu-noguchi',
    museumId: 'seattle-asian-art-museum',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/isamu-noguchi"><strong>Isamu Noguchi</strong></a>\'s Black Sun stands in front of the <a href="/apps/masterpieces/museum/seattle-asian-art-museum"><strong>Seattle Asian Art Museum</strong></a> in Volunteer Park. The massive granite ring frames views of the Space Needle and downtown Seattle skyline.</p><p>Commissioned as the National Endowment for the Arts\' first public artwork in Seattle, the sculpture invites visitors to look through its circular void. Noguchi described his work as creating spaces for contemplation.</p><p>The donut-shaped stone weighs several tons yet appears to float above its pedestal, demonstrating Noguchi\'s mastery of form and his ability to give weight a sense of lightness.</p>'
  },
  {
    id: 'artwork-ai-weiwei-water-lilies-lego',
    slug: 'water-lilies-ai-weiwei-lego',
    title: 'Water Lilies #1',
    year: 2022,
    medium: 'LEGO bricks',
    dimensions: '180 × 1463 cm (6 × 48 ft)',
    artistId: 'cf59b3e8-f0c7-4552-a4ba-87f66c4a40a4', // Ai Weiwei
    museumId: 'seattle-asian-art-museum',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/ai-weiwei"><strong>Ai Weiwei</strong></a> reinterpreted Claude Monet\'s iconic Water Lilies using over 650,000 LEGO bricks. At nearly 50 feet long, it\'s the artist\'s largest and most ambitious LEGO work to date.</p><p>The piece transforms Monet\'s Impressionist brushstrokes into a pixelated grid, merging 19th-century French painting with contemporary Chinese conceptual art. Ai connects the work to his personal history, particularly his father\'s forced labor during the Cultural Revolution.</p><p>The immersive installation at the <a href="/apps/masterpieces/museum/seattle-asian-art-museum"><strong>Seattle Asian Art Museum</strong></a> offers a meditation on beauty, memory, and the translation of images across time and cultures.</p>'
  },

  // ===== FRYE ART MUSEUM =====
  {
    id: 'artwork-stuck-judgment-paris',
    slug: 'judgment-of-paris-stuck',
    title: 'The Judgment of Paris',
    year: 1923,
    medium: 'Oil on panel',
    dimensions: '76.8 × 68.6 cm (30 1/4 × 27 in)',
    artistId: 'artist-franz-von-stuck',
    museumId: 'frye-art-museum',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/franz-von-stuck"><strong>Franz von Stuck</strong></a> depicted the mythological beauty contest in his characteristic dramatic style. Paris, the Trojan prince, must choose between goddesses Hera, Athena, and Aphrodite, a decision that would lead to the Trojan War.</p><p>Stuck was a leading figure in the Munich Secession and known for psychological intensity in his mythological subjects. The Fryes acquired many works directly from Munich studios during their collecting years around 1900.</p><p>This painting exemplifies the German academic tradition that defines the <a href="/apps/masterpieces/museum/frye-art-museum"><strong>Frye Art Museum</strong></a>\'s founding collection of 232 oil paintings, nearly half featuring German artists.</p>'
  },
  {
    id: 'artwork-frye-winterhalter-susanna',
    slug: 'susanna-and-the-elders-winterhalter',
    title: 'Susanna and the Elders',
    year: 1866,
    medium: 'Oil on canvas',
    dimensions: '196 × 125 cm (77 × 49 in)',
    artistId: null, // Winterhalter not in DB
    museumId: 'frye-art-museum',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p>Franz Xaver Winterhalter, court painter to European royalty, rendered this biblical scene of the virtuous Susanna spied upon by lecherous elders. The story from the Book of Daniel was a popular subject for artists exploring themes of beauty, voyeurism, and innocence.</p><p>Winterhalter was famous for his glamorous portraits of Queen Victoria, Empress Eugénie, and other aristocrats. This religious subject shows his command of the academic tradition.</p><p>The work is part of the <a href="/apps/masterpieces/museum/frye-art-museum"><strong>Frye Art Museum</strong></a>\'s founding collection, reflecting Charles and Emma Frye\'s taste for dramatic, representational European painting.</p>'
  },

  // ===== DE YOUNG MUSEUM =====
  {
    id: 'artwork-okeeffe-black-iris',
    slug: 'black-iris-okeeffe',
    title: 'Black Iris',
    year: 1926,
    medium: 'Oil on canvas',
    dimensions: '91.4 × 75.9 cm (36 × 29 7/8 in)',
    artistId: 'cmkijts0q0020ccbd52x4ht31', // O'Keeffe
    museumId: 'de-young-museum',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/georgia-okeeffe"><strong>Georgia O\'Keeffe</strong></a> magnified a dark iris bloom until it fills the entire canvas, transforming a simple flower into an abstract exploration of form and color. The velvety <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>purple</strong></a>-black petals unfold in layers.</p><p>O\'Keeffe\'s monumental flower paintings became her signature subject. She insisted they were simply flowers, pushing back against Freudian interpretations that dominated critical discussion of her work.</p><p>The <a href="/apps/masterpieces/museum/de-young-museum"><strong>de Young Museum</strong></a> holds this work as part of its comprehensive American art collection, one of the top ten in the nation.</p>'
  },
  {
    id: 'artwork-wood-dinner-threshers',
    slug: 'dinner-for-threshers-wood',
    title: 'Dinner for Threshers',
    year: 1934,
    medium: 'Oil on hardboard panel',
    dimensions: '49.5 × 201.9 cm (19 1/2 × 79 1/2 in)',
    artistId: 'artist-grant-wood',
    museumId: 'de-young-museum',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/grant-wood"><strong>Grant Wood</strong></a> depicted a communal harvest meal in Iowa with his characteristic precision and gentle humor. Farm workers gather around a long table while women serve food in a scene of rural American community.</p><p>Wood was the leading figure of American Regionalism, celebrating Midwestern life during the Depression era. His stylized, almost folk-art approach distinguished him from both academic realism and European modernism.</p><p>The panoramic painting is a centerpiece of the <a href="/apps/masterpieces/museum/de-young-museum"><strong>de Young Museum</strong></a>\'s American art galleries, part of a collection transformed by the Rockefeller gift of 1978.</p>'
  },
  {
    id: 'artwork-deyoung-tarbell-girl-sewing',
    slug: 'girl-crocheting-tarbell',
    title: 'Girl Crocheting',
    year: 1904,
    medium: 'Oil on canvas',
    dimensions: '76.2 × 63.5 cm (30 × 25 in)',
    artistId: null, // Tarbell not in DB
    museumId: 'de-young-museum',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p>Edmund C. Tarbell captured a young woman absorbed in needlework, bathed in soft light filtering through a window. The intimate domestic scene exemplifies American Impressionism at its finest.</p><p>Tarbell was a founding member of the Ten American Painters, who led the Impressionist movement in the United States. His work brought French technique to distinctly American subjects.</p><p>The painting represents the <a href="/apps/masterpieces/museum/de-young-museum"><strong>de Young Museum</strong></a>\'s strength in American Impressionism, a cornerstone of its collection alongside the Rockefeller holdings.</p>'
  },

  // ===== HIGH MUSEUM OF ART =====
  {
    id: 'artwork-monet-autumn-seine',
    slug: 'autumn-on-the-seine-argenteuil-monet',
    title: 'Autumn on the Seine, Argenteuil',
    year: 1873,
    medium: 'Oil on canvas',
    dimensions: '54.3 × 73 cm (21 3/8 × 28 3/4 in)',
    artistId: 'cmkhrgema000tj6io2uiska3i', // Monet
    museumId: 'high-museum-of-art',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this shimmering autumn scene during his productive years at Argenteuil on the Seine. The <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> and russet foliage reflects in the calm water, capturing the fleeting effects of seasonal light.</p><p>Argenteuil, a short train ride from Paris, became an Impressionist haven in the 1870s. Monet, Renoir, and their circle gathered there to paint outdoors, developing the movement\'s signature style.</p><p>The painting came to the <a href="/apps/masterpieces/museum/high-museum-of-art"><strong>High Museum of Art</strong></a> as part of the 2019 gift from collectors Doris and Shouky Shaheen, strengthening Atlanta\'s French Impressionist holdings.</p>'
  },
  {
    id: 'artwork-cassatt-mother-child-high',
    slug: 'sketch-mother-thomas-cassatt',
    title: 'Sketch of Mother Looking Down at Thomas',
    year: 1905,
    medium: 'Oil on canvas',
    dimensions: '73.7 × 60.3 cm (29 × 23 3/4 in)',
    artistId: 'cmkjdy13d000pu6v2jqljcdkl', // Cassatt
    museumId: 'high-museum-of-art',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> captured the tender bond between mother and child that became her defining subject. This intimate sketch shows a woman gazing down at the infant Thomas with quiet absorption.</p><p>Cassatt was the only American to exhibit with the French Impressionists. She brought their techniques to domestic subjects, elevating scenes of mothers and children to serious artistic consideration.</p><p>The <a href="/apps/masterpieces/museum/high-museum-of-art"><strong>High Museum of Art</strong></a> holds this work among its American Impressionist treasures, part of a collection that began with the J.J. Haverty family gifts.</p>'
  },
  {
    id: 'artwork-sargent-ralph-curtis',
    slug: 'ralph-curtis-beach-sargent',
    title: 'Portrait of Ralph Curtis on the Beach at Scheveningen',
    year: 1880,
    medium: 'Oil on canvas',
    dimensions: '28.6 × 36.8 cm (11 1/4 × 14 1/2 in)',
    artistId: 'cmkjekssa001mkfvsli30auij', // Sargent
    museumId: 'high-museum-of-art',
    searchVolumeTier: 3,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted his friend Ralph Curtis lounging on a Dutch beach, capturing the casual elegance that would define his portrait style. The quick, confident brushwork suggests a sunny afternoon by the sea.</p><p>Curtis was a fellow American painter and lifelong friend of Sargent. This informal portrait contrasts with Sargent\'s grand society commissions, showing his gift for capturing personality in relaxed moments.</p><p>The painting is among the <a href="/apps/masterpieces/museum/high-museum-of-art"><strong>High Museum of Art</strong></a>\'s American art highlights, representing the museum\'s commitment to collecting works by the leading painters of the Gilded Age.</p>'
  },

  // ===== PÉREZ ART MUSEUM MIAMI =====
  {
    id: 'artwork-pamm-christo-surrounded-islands',
    slug: 'surrounded-islands-christo',
    title: 'Surrounded Islands (Project for Biscayne Bay)',
    year: 1983,
    medium: 'Drawing in two parts, pencil, charcoal, pastel, enamel paint, photograph, map',
    dimensions: '38 × 165 cm and 106.6 × 165 cm',
    artistId: 'artist-christo-jeanne-claude',
    museumId: 'perez-art-museum-miami',
    searchVolumeTier: 2,
    artworkType: 'painting',
    description: '<p><a href="/apps/masterpieces/artist/christo-and-jeanne-claude"><strong>Christo and Jeanne-Claude</strong></a> wrapped eleven islands in Biscayne Bay with 6.5 million square feet of floating pink fabric in May 1983. The ephemeral artwork lasted just two weeks but transformed Miami\'s waterscape.</p><p>This preparatory drawing shows the artists\' meticulous planning process. The project required years of negotiations, environmental studies, and engineering solutions before the brief installation.</p><p>The <a href="/apps/masterpieces/museum/perez-art-museum-miami"><strong>Pérez Art Museum Miami</strong></a> received sixteen Christo and Jeanne-Claude works as a gift in 2019, documenting one of Miami\'s most iconic art moments.</p>'
  },
  {
    id: 'artwork-pamm-jaar-cant-go-on',
    slug: 'i-cant-go-on-ill-go-on-jaar',
    title: 'I Can\'t Go On. I\'ll Go On.',
    year: 2016,
    medium: 'Neon installation',
    dimensions: 'Variable',
    artistId: null, // Alfredo Jaar not in DB
    museumId: 'perez-art-museum-miami',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p>Alfredo Jaar\'s neon installation takes its title from the final words of Samuel Beckett\'s novel The Unnamable. The contradictory statement glows against the <a href="/apps/masterpieces/museum/perez-art-museum-miami"><strong>Pérez Art Museum Miami</strong></a>\'s waterfront setting.</p><p>Jaar, a Chilean-born artist, is known for politically engaged work addressing human rights and the limits of representation. This piece speaks to resilience in the face of impossibility.</p><p>The text-based work joins PAMM\'s collection of contemporary art emphasizing works relevant to Miami\'s diverse communities and Latin American connections.</p>'
  },
  {
    id: 'artwork-pamm-ogrady-art-is',
    slug: 'art-is-lorraine-ogrady',
    title: 'Art Is...',
    year: 1983,
    medium: 'Chromogenic color prints',
    dimensions: '40 prints, each 50.8 × 61 cm',
    artistId: null, // O'Grady not in DB
    museumId: 'perez-art-museum-miami',
    searchVolumeTier: 3,
    artworkType: 'photography',
    description: '<p>Lorraine O\'Grady documented her 1983 guerrilla performance at the African American Day Parade in Harlem. She and performers in white carried empty gold frames through the crowd, framing spectators as living artworks.</p><p>The performance challenged who gets seen as art and who gets to define it. O\'Grady invited parade-goers to see themselves as worthy subjects, pushing back against the exclusions of mainstream art institutions.</p><p>The photographic documentation at <a href="/apps/masterpieces/museum/perez-art-museum-miami"><strong>PAMM</strong></a> preserves this pivotal moment in Black performance art and conceptual practice.</p>'
  }
];

async function addArtworks() {
  console.log('Adding new artists...\n');

  for (const artist of newArtists) {
    try {
      const existing = await prisma.artist.findUnique({ where: { slug: artist.slug } });
      if (!existing) {
        await prisma.artist.create({
          data: {
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
      } else {
        console.log(`- Artist exists: ${artist.name}`);
      }
    } catch (error) {
      console.error(`✗ Failed artist: ${artist.name} - ${error.message}`);
    }
  }

  console.log('\nAdding artworks...\n');

  for (const artwork of artworks) {
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

  // Final counts
  console.log('\n=== Final Artwork Counts ===\n');
  const museums = [
    'seattle-asian-art-museum',
    'frye-art-museum',
    'de-young-museum',
    'high-museum-of-art',
    'perez-art-museum-miami'
  ];

  for (const slug of museums) {
    const count = await prisma.artwork.count({ where: { museumId: slug } });
    const museum = await prisma.museum.findUnique({ where: { slug }, select: { name: true } });
    console.log(`${museum?.name}: ${count} artworks`);
  }

  await prisma.$disconnect();
}

addArtworks().catch(console.error);
