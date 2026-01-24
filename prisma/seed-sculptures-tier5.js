const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding More Sculptures (Tier 5) ===\n');

  // Create new artists
  const newArtists = [
    {
      name: 'Henry Moore',
      slug: 'henry-moore',
      birthYear: 1898,
      deathYear: 1986,
      nationality: 'British',
    },
    {
      name: 'Barbara Hepworth',
      slug: 'barbara-hepworth',
      birthYear: 1903,
      deathYear: 1975,
      nationality: 'British',
    },
    {
      name: 'Alexander Calder',
      slug: 'alexander-calder',
      birthYear: 1898,
      deathYear: 1976,
      nationality: 'American',
    },
    {
      name: 'Jean Arp',
      slug: 'jean-arp',
      birthYear: 1886,
      deathYear: 1966,
      nationality: 'French-German',
    },
    {
      name: 'Isamu Noguchi',
      slug: 'isamu-noguchi',
      birthYear: 1904,
      deathYear: 1988,
      nationality: 'American-Japanese',
    },
    {
      name: 'Claes Oldenburg',
      slug: 'claes-oldenburg',
      birthYear: 1929,
      deathYear: 2022,
      nationality: 'Swedish-American',
    },
    {
      name: 'Richard Serra',
      slug: 'richard-serra',
      birthYear: 1938,
      deathYear: 2024,
      nationality: 'American',
    },
    {
      name: 'Ai Weiwei',
      slug: 'ai-weiwei',
      birthYear: 1957,
      deathYear: null,
      nationality: 'Chinese',
    },
    {
      name: 'Antony Gormley',
      slug: 'antony-gormley',
      birthYear: 1950,
      deathYear: null,
      nationality: 'British',
    },
    {
      name: 'Auguste Bartholdi',
      slug: 'auguste-bartholdi',
      birthYear: 1834,
      deathYear: 1904,
      nationality: 'French',
    },
    {
      name: 'Eadweard Muybridge',
      slug: 'agesander-of-rhodes',
      birthYear: -50,
      deathYear: 15,
      nationality: 'Greek (Rhodian)',
    },
  ];

  const artistIds = {};

  for (const artistData of newArtists) {
    const existing = await prisma.artist.findFirst({ where: { slug: artistData.slug } });
    if (existing) {
      artistIds[artistData.slug] = existing.id;
      console.log(`Artist exists: ${artistData.name}`);
    } else {
      const artist = await prisma.artist.create({
        data: {
          id: randomUUID(),
          ...artistData,
          updatedAt: new Date(),
        }
      });
      artistIds[artistData.slug] = artist.id;
      console.log(`Created artist: ${artistData.name}`);
    }
  }

  // Get existing artists
  const brancusi = await prisma.artist.findFirst({ where: { slug: 'constantin-brancusi' } });
  if (brancusi) artistIds['constantin-brancusi'] = brancusi.id;

  const giacometti = await prisma.artist.findFirst({ where: { slug: 'alberto-giacometti' } });
  if (giacometti) artistIds['alberto-giacometti'] = giacometti.id;

  const rodin = await prisma.artist.findFirst({ where: { slug: 'auguste-rodin' } });
  if (rodin) artistIds['auguste-rodin'] = rodin.id;

  // Get museum IDs
  const moma = await prisma.museum.findFirst({ where: { slug: { contains: 'moma' } } });
  const tate = await prisma.museum.findFirst({ where: { slug: { contains: 'tate' } } });

  console.log('\n--- Adding Sculptures ---\n');

  const sculptures = [
    // Henry Moore
    {
      title: 'Reclining Figure',
      slug: 'reclining-figure-moore',
      year: 1951,
      medium: 'Bronze',
      dimensions: '105 cm × 227 cm (3.4 × 7.4 ft)',
      artistId: artistIds['henry-moore'],
      museumId: tate?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Reclining_Figure_by_Henry_Moore_at_Fitzwilliam_Museum.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Large Two Forms',
      slug: 'large-two-forms-moore',
      year: 1966,
      medium: 'Bronze',
      dimensions: '610 cm (20 ft) long',
      artistId: artistIds['henry-moore'],
      museumId: null, // Multiple locations
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/HenryMooreTwoLargeForms.jpg/800px-HenryMooreTwoLargeForms.jpg',
      artworkType: 'sculpture',
    },

    // Barbara Hepworth
    {
      title: 'Single Form',
      slug: 'single-form-hepworth',
      year: 1964,
      medium: 'Bronze',
      dimensions: '640 cm (21 ft) tall',
      artistId: artistIds['barbara-hepworth'],
      museumId: null, // UN Headquarters, NYC
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hepworth_Single_Form_UN.jpg/800px-Hepworth_Single_Form_UN.jpg',
      artworkType: 'sculpture',
    },

    // Alexander Calder
    {
      title: 'Flamingo',
      slug: 'flamingo-calder',
      year: 1974,
      medium: 'Painted steel',
      dimensions: '16 m (53 ft) tall',
      artistId: artistIds['alexander-calder'],
      museumId: null, // Federal Plaza, Chicago
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Calder_Flamingo.jpg/800px-Calder_Flamingo.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'La Grande Vitesse',
      slug: 'la-grande-vitesse-calder',
      year: 1969,
      medium: 'Painted steel',
      dimensions: '13 m (43 ft) tall',
      artistId: artistIds['alexander-calder'],
      museumId: null, // Grand Rapids, Michigan
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Grand_Rapids_Calder.jpg/800px-Grand_Rapids_Calder.jpg',
      artworkType: 'sculpture',
    },

    // Brancusi additions
    {
      title: 'The Kiss',
      slug: 'the-kiss-brancusi',
      year: 1908,
      medium: 'Limestone',
      dimensions: '58 cm (23 in) tall',
      artistId: artistIds['constantin-brancusi'],
      museumId: null, // Craiova Art Museum / Philadelphia Museum of Art versions
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brancusi_The_Kiss.jpg/800px-Brancusi_The_Kiss.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Endless Column',
      slug: 'endless-column-brancusi',
      year: 1938,
      medium: 'Cast iron and steel',
      dimensions: '29.35 m (96.3 ft) tall',
      artistId: artistIds['constantin-brancusi'],
      museumId: null, // Târgu Jiu, Romania
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Endless_Column_at_Targu_Jiu.jpg/800px-Endless_Column_at_Targu_Jiu.jpg',
      artworkType: 'sculpture',
    },

    // Giacometti additions
    {
      title: 'Man Pointing',
      slug: 'man-pointing-giacometti',
      year: 1947,
      medium: 'Bronze',
      dimensions: '178 cm (70 in) tall',
      artistId: artistIds['alberto-giacometti'],
      museumId: moma?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Man_Pointing_Giacometti.jpg/800px-Man_Pointing_Giacometti.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Chariot',
      slug: 'chariot-giacometti',
      year: 1950,
      medium: 'Bronze',
      dimensions: '167 cm (66 in) tall',
      artistId: artistIds['alberto-giacometti'],
      museumId: moma?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/The_Chariot_Giacometti.jpg/800px-The_Chariot_Giacometti.jpg',
      artworkType: 'sculpture',
    },

    // Isamu Noguchi
    {
      title: 'Red Cube',
      slug: 'red-cube-noguchi',
      year: 1968,
      medium: 'Painted steel',
      dimensions: '8.5 m (28 ft) tall',
      artistId: artistIds['isamu-noguchi'],
      museumId: null, // 140 Broadway, NYC
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Red_Cube_-_Isamu_Noguchi.jpg/800px-Red_Cube_-_Isamu_Noguchi.jpg',
      artworkType: 'sculpture',
    },

    // Claes Oldenburg
    {
      title: 'Spoonbridge and Cherry',
      slug: 'spoonbridge-and-cherry',
      year: 1988,
      medium: 'Aluminum, stainless steel, paint',
      dimensions: '9 m × 15.7 m (29 × 52 ft)',
      artistId: artistIds['claes-oldenburg'],
      museumId: null, // Minneapolis Sculpture Garden
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Spoonbridge_and_Cherry%2C_Minneapolis.jpg/800px-Spoonbridge_and_Cherry%2C_Minneapolis.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Clothespin',
      slug: 'clothespin-oldenburg',
      year: 1976,
      medium: 'Cor-Ten and stainless steel',
      dimensions: '13.7 m (45 ft) tall',
      artistId: artistIds['claes-oldenburg'],
      museumId: null, // Centre Square, Philadelphia
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Clothespin-sculpture.jpg/800px-Clothespin-sculpture.jpg',
      artworkType: 'sculpture',
    },

    // Richard Serra
    {
      title: 'Tilted Arc',
      slug: 'tilted-arc-serra',
      year: 1981,
      medium: 'Cor-Ten steel',
      dimensions: '3.7 m × 36.6 m (12 × 120 ft)',
      artistId: artistIds['richard-serra'],
      museumId: null, // Destroyed 1989 (Federal Plaza, NYC)
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Richard_Serra_Tilted_Arc.jpg/800px-Richard_Serra_Tilted_Arc.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'The Matter of Time',
      slug: 'matter-of-time-serra',
      year: 2005,
      medium: 'Weathering steel',
      dimensions: 'Eight sculptures, largest 4 m × 24 m',
      artistId: artistIds['richard-serra'],
      museumId: null, // Guggenheim Bilbao
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Guggenheim_Bilbao_04.jpg/800px-Guggenheim_Bilbao_04.jpg',
      artworkType: 'sculpture',
    },

    // Antony Gormley
    {
      title: 'Angel of the North',
      slug: 'angel-of-the-north',
      year: 1998,
      medium: 'Steel',
      dimensions: '20 m × 54 m (66 × 177 ft)',
      artistId: artistIds['antony-gormley'],
      museumId: null, // Gateshead, England
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Angel_of_the_North_-_geograph.org.uk_-_1205559.jpg/800px-Angel_of_the_North_-_geograph.org.uk_-_1205559.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Another Place',
      slug: 'another-place-gormley',
      year: 1997,
      medium: 'Cast iron',
      dimensions: '100 figures, each 189 cm (6.2 ft) tall',
      artistId: artistIds['antony-gormley'],
      museumId: null, // Crosby Beach, England
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gormley_Another_Place.jpg/800px-Gormley_Another_Place.jpg',
      artworkType: 'sculpture',
    },

    // Ai Weiwei
    {
      title: 'Sunflower Seeds',
      slug: 'sunflower-seeds-ai-weiwei',
      year: 2010,
      medium: 'Porcelain',
      dimensions: '100 million hand-painted seeds',
      artistId: artistIds['ai-weiwei'],
      museumId: tate?.id, // Turbine Hall installation
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sunflower_Seeds_%28Ai_Weiwei%29.jpg/800px-Sunflower_Seeds_%28Ai_Weiwei%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Forever Bicycles',
      slug: 'forever-bicycles-ai-weiwei',
      year: 2011,
      medium: 'Bicycles',
      dimensions: 'Various installations, up to 3,144 bicycles',
      artistId: artistIds['ai-weiwei'],
      museumId: null, // Multiple locations
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ai_Weiwei_Forever_Bicycles.jpg/800px-Ai_Weiwei_Forever_Bicycles.jpg',
      artworkType: 'sculpture',
    },

    // Rodin additions
    {
      title: 'The Age of Bronze',
      slug: 'age-of-bronze-rodin',
      year: 1877,
      medium: 'Bronze',
      dimensions: '180 cm (71 in) tall',
      artistId: artistIds['auguste-rodin'],
      museumId: null, // Musée Rodin / multiple casts
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Rodin_The_Age_of_Bronze.jpg/800px-Rodin_The_Age_of_Bronze.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'The Walking Man',
      slug: 'walking-man-rodin',
      year: 1907,
      medium: 'Bronze',
      dimensions: '213 cm (84 in) tall',
      artistId: artistIds['auguste-rodin'],
      museumId: null, // Musée Rodin
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rodin_Walking_Man.jpg/800px-Rodin_Walking_Man.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of sculptures) {
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
        museumId: art.museumId,
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

  // Show sculpture counts
  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
