const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 3 ===\n');

  const museums = {
    orsay: 'cmkhrgcsx000jj6iooirmr673',
    moma: 'cmkhrgca7000bj6io9gs2s8zb',
    tateBritain: 'cmkjz7buq0003j1o0n6snjmy4',
    nationalgalleriesScotland: 'cmkjz7f2i000ej1o0thzsvk6h',
    albright: 'cmkk1oags0002w4ny2jxxj82z',
    artInstituteChicago: 'cmkhrgd7p000qj6iodllu4n7v',
  };

  const artists = {
    gauguin: 'cmkilpfmx0008o9d7g7lghhrn',
    magritte: 'cmkijtq2k001wccbd9xvajqyb',
    hopper: 'cmkijtr0y001yccbdm1odl0z2',
    dali: 'cmkhrghm6000yj6iois15a0su',
    seurat: 'cmkhrgmlf0018j6io1usisn5r',
  };

  const artworks = [
    // === GAUGUIN ===
    {
      title: 'Spirit of the Dead Watching',
      slug: 'spirit-of-dead-watching',
      year: 1892,
      medium: 'Oil on burlap mounted on canvas',
      dimensions: '72.4 cm × 92.4 cm',
      artistId: artists.gauguin,
      museumId: museums.albright,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Paul_Gauguin-_Manao_tupapau_%28The_Spirit_of_the_Dead_Keep_Watch%29.JPG/800px-Paul_Gauguin-_Manao_tupapau_%28The_Spirit_of_the_Dead_Keep_Watch%29.JPG',
    },
    {
      title: 'Vision After the Sermon',
      slug: 'vision-after-sermon',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '72.2 cm × 91 cm',
      artistId: artists.gauguin,
      museumId: museums.nationalgalleriesScotland,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paul_Gauguin_-_The_Vision_After_the_Sermon_%28Jacob_Wrestling_with_the_Angel%29_-_WGA8639.jpg/800px-Paul_Gauguin_-_The_Vision_After_the_Sermon_%28Jacob_Wrestling_with_the_Angel%29_-_WGA8639.jpg',
    },

    // === MAGRITTE ===
    {
      title: 'The Treachery of Images',
      slug: 'treachery-of-images',
      year: 1929,
      medium: 'Oil on canvas',
      dimensions: '63.5 cm × 93.98 cm',
      artistId: artists.magritte,
      museumId: null, // LACMA
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b9/MasrittePipe.jpg',
    },
    {
      title: 'The Empire of Light',
      slug: 'empire-of-light',
      year: 1954,
      medium: 'Oil on canvas',
      dimensions: '146 cm × 114 cm',
      artistId: artists.magritte,
      museumId: null, // Multiple versions exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/The_Empire_of_Light%2C_II.jpg/800px-The_Empire_of_Light%2C_II.jpg',
    },
    {
      title: 'Golconda',
      slug: 'golconda-magritte',
      year: 1953,
      medium: 'Oil on canvas',
      dimensions: '81 cm × 100 cm',
      artistId: artists.magritte,
      museumId: null, // Menil Collection
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Golconde.jpg',
    },

    // === HOPPER ===
    {
      title: 'Gas',
      slug: 'gas-hopper',
      year: 1940,
      medium: 'Oil on canvas',
      dimensions: '66.7 cm × 102.2 cm',
      artistId: artists.hopper,
      museumId: museums.moma,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Edward_Hopper%27s_Gas%2C_1940.jpg',
    },
    {
      title: 'Automat',
      slug: 'automat-hopper',
      year: 1927,
      medium: 'Oil on canvas',
      dimensions: '71.4 cm × 91.4 cm',
      artistId: artists.hopper,
      museumId: null, // Des Moines Art Center
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Automat_%28Hopper%29.jpg',
    },
    {
      title: 'Morning Sun',
      slug: 'morning-sun-hopper',
      year: 1952,
      medium: 'Oil on canvas',
      dimensions: '71.4 cm × 101.9 cm',
      artistId: artists.hopper,
      museumId: null, // Columbus Museum of Art
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Edward_hopper_morning_sun_1952.jpg',
    },
    {
      title: 'Office in a Small City',
      slug: 'office-small-city-hopper',
      year: 1953,
      medium: 'Oil on canvas',
      dimensions: '71.1 cm × 101.6 cm',
      artistId: artists.hopper,
      museumId: null, // Met
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/15/Edward_Hopper_Office_in_a_Small_City.jpg',
    },

    // === DALÍ ===
    {
      title: 'Swans Reflecting Elephants',
      slug: 'swans-reflecting-elephants',
      year: 1937,
      medium: 'Oil on canvas',
      dimensions: '51 cm × 77 cm',
      artistId: artists.dali,
      museumId: null, // Private collection
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Swans_reflecting_elephants.jpg',
    },
    {
      title: 'The Burning Giraffe',
      slug: 'burning-giraffe',
      year: 1937,
      medium: 'Oil on panel',
      dimensions: '35 cm × 27 cm',
      artistId: artists.dali,
      museumId: null, // Kunstmuseum Basel
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Burning_Giraffe.jpg',
    },
    {
      title: 'Soft Construction with Boiled Beans',
      slug: 'soft-construction-boiled-beans',
      year: 1936,
      medium: 'Oil on canvas',
      dimensions: '100 cm × 99 cm',
      artistId: artists.dali,
      museumId: null, // Philadelphia Museum of Art
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/de/SoftConstructionWithBoiledBeans.jpg',
    },

    // === SEURAT - add a few more ===
    {
      title: 'Circus Sideshow',
      slug: 'circus-sideshow-seurat',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '99.7 cm × 149.9 cm',
      artistId: artists.seurat,
      museumId: null, // Met
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georges_Seurat_066.jpg/800px-Georges_Seurat_066.jpg',
    },
    {
      title: 'The Models',
      slug: 'the-models-seurat',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '200 cm × 250 cm',
      artistId: artists.seurat,
      museumId: null, // Barnes Foundation
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Georges_Seurat_-_Models_%28Les_Poseuses%29_1886-1888.jpg/800px-Georges_Seurat_-_Models_%28Les_Poseuses%29_1886-1888.jpg',
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
