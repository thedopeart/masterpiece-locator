const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 5 ===\n');

  // Create John Gast if doesn't exist
  let gastId;
  const existingGast = await prisma.artist.findFirst({
    where: { name: { contains: 'Gast' } }
  });
  if (!existingGast) {
    const gast = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'John Gast',
        slug: 'john-gast',
        birthYear: 1842,
        deathYear: 1896,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    gastId = gast.id;
    console.log('Created artist: John Gast');
  } else {
    gastId = existingGast.id;
  }

  // Create John Trumbull if doesn't exist
  let trumbullId;
  const existingTrumbull = await prisma.artist.findFirst({
    where: { name: { contains: 'Trumbull' } }
  });
  if (!existingTrumbull) {
    const trumbull = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'John Trumbull',
        slug: 'john-trumbull',
        birthYear: 1756,
        deathYear: 1843,
        nationality: 'American',
        updatedAt: new Date(),
      }
    });
    trumbullId = trumbull.id;
    console.log('Created artist: John Trumbull');
  } else {
    trumbullId = existingTrumbull.id;
  }

  const artists = {
    gast: gastId,
    trumbull: trumbullId,
    lawrence: 'cmkjz7tby001uj1o0yggnfah5',
    rembrandt: 'cmkhrgfmc000vj6io37p91icv',
  };

  const artworks = [
    // === AMERICAN ICONIC ===
    {
      title: 'American Progress',
      slug: 'american-progress',
      year: 1872,
      medium: 'Oil on canvas',
      dimensions: '29.2 cm × 40 cm',
      artistId: artists.gast,
      museumId: null, // Autry Museum
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/American_Progress_%28John_Gast_painting%29.jpg/800px-American_Progress_%28John_Gast_painting%29.jpg',
    },
    {
      title: 'Declaration of Independence',
      slug: 'declaration-of-independence',
      year: 1818,
      medium: 'Oil on canvas',
      dimensions: '365.8 cm × 548.6 cm',
      artistId: artists.trumbull,
      museumId: null, // US Capitol Rotunda
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/800px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg',
    },

    // === CLASSIC PORTRAITS ===
    {
      title: 'Pinkie',
      slug: 'pinkie-lawrence',
      year: 1794,
      medium: 'Oil on canvas',
      dimensions: '145 cm × 102 cm',
      artistId: artists.lawrence,
      museumId: null, // Huntington Library
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thomas_Lawrence_-_Pinkie.jpg/800px-Thomas_Lawrence_-_Pinkie.jpg',
    },
    {
      title: 'A Girl with a Broom',
      slug: 'girl-with-broom-rembrandt',
      year: 1651,
      medium: 'Oil on canvas',
      dimensions: '107.3 cm × 91.4 cm',
      artistId: artists.rembrandt,
      museumId: null, // National Gallery of Art
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rembrandt_van_Rijn_-_A_Girl_with_a_Broom_-_WGA19170.jpg/800px-Rembrandt_van_Rijn_-_A_Girl_with_a_Broom_-_WGA19170.jpg',
    },

    // === MORE ICONIC AMERICAN HISTORY ===
    {
      title: 'The Battle of Bunker Hill',
      slug: 'battle-bunker-hill',
      year: 1786,
      medium: 'Oil on canvas',
      dimensions: '50.8 cm × 76.2 cm',
      artistId: artists.trumbull,
      museumId: null, // Yale University Art Gallery
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Death_of_General_Warren_at_the_Battle_of_Bunker%27s_Hill%2C_June_17%2C_1775.jpg/800px-The_Death_of_General_Warren_at_the_Battle_of_Bunker%27s_Hill%2C_June_17%2C_1775.jpg',
    },
    {
      title: 'Surrender of General Burgoyne',
      slug: 'surrender-general-burgoyne',
      year: 1821,
      medium: 'Oil on canvas',
      dimensions: '365.8 cm × 548.6 cm',
      artistId: artists.trumbull,
      museumId: null, // US Capitol Rotunda
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Surrender_of_General_Burgoyne.jpg/800px-Surrender_of_General_Burgoyne.jpg',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of artworks) {
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
        updatedAt: new Date(),
      }
    });

    console.log(`Added: ${art.title}`);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
