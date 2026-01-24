const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Masterpieces Batch 2 ===\n');

  const museums = {
    yale: 'ea5843dd-4d52-4e61-9c8e-313d74ddfa5d',
    courtauld: '4bdb9281-7491-4e1f-89f8-c2eee4692065',
    hermitage: 'cmkhrgd3b000oj6ioanpobm4m',
    neueGalerie: 'cmkilpc6i0001o9d7ry35xsdz',
    artInstituteChicago: 'cmkhrgd7p000qj6iodllu4n7v',
    vanGoghMuseum: 'cmkhrgcg3000dj6ioieur5cmi',
    orsay: 'cmkhrgcsx000jj6iooirmr673',
    moma: 'cmkhrgctq000kj6io33wggvul',
    louvre: 'd6b2c0bc-239d-4a46-90f9-2d4c67df6501',
    baltimore: 'eafa07a2-f35f-41da-954b-8e209fb19ac8',
    pushkin: '0b28630a-7649-4a33-8246-d58ff9019344',
    mak: 'cmkk1p4p40000dxr45vlhxwrz',
  };

  const artists = {
    vanGogh: 'cmkhrgde4000rj6ioaqp2rm4l',
    manet: 'cmkhxgtvi001i8tekh6u1ovfb',
    klimt: 'cmkhrgn330019j6iou1x7ccg3',
    matisse: 'cmkhxgsy4001g8tek1tpezkql',
    cezanne: 'cmkhxgtdy001h8teknxewybvi',
    seurat: 'cmkhrgmlf0018j6io1usisn5r',
    toulouseLautrec: 'cmkilpg730009o9d7vk6xjblt',
  };

  const artworks = [
    // === VAN GOGH ===
    {
      title: 'The Night Café',
      slug: 'the-night-cafe',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '72.4 cm × 92.1 cm',
      artistId: artists.vanGogh,
      museumId: museums.yale,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/800px-Vincent_Willem_van_Gogh_076.jpg',
    },
    {
      title: 'The Potato Eaters',
      slug: 'the-potato-eaters',
      year: 1885,
      medium: 'Oil on canvas',
      dimensions: '82 cm × 114 cm',
      artistId: artists.vanGogh,
      museumId: museums.vanGoghMuseum,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-gogh-potato-eaters.jpg/800px-Van-gogh-potato-eaters.jpg',
    },
    {
      title: 'Self-Portrait with Bandaged Ear',
      slug: 'self-portrait-bandaged-ear',
      year: 1889,
      medium: 'Oil on canvas',
      dimensions: '60 cm × 49 cm',
      artistId: artists.vanGogh,
      museumId: museums.courtauld,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg/800px-Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg',
    },
    {
      title: 'Wheatfield with Crows',
      slug: 'wheatfield-with-crows',
      year: 1890,
      medium: 'Oil on canvas',
      dimensions: '50.5 cm × 103 cm',
      artistId: artists.vanGogh,
      museumId: museums.vanGoghMuseum,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg/800px-Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg',
    },

    // === MANET ===
    {
      title: 'A Bar at the Folies-Bergère',
      slug: 'bar-at-folies-bergere',
      year: 1882,
      medium: 'Oil on canvas',
      dimensions: '96 cm × 130 cm',
      artistId: artists.manet,
      museumId: museums.courtauld,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg/800px-Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg',
    },
    {
      title: 'Le Déjeuner sur l\'herbe',
      slug: 'dejeuner-sur-lherbe',
      year: 1863,
      medium: 'Oil on canvas',
      dimensions: '208 cm × 265.5 cm',
      artistId: artists.manet,
      museumId: museums.orsay,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/800px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg',
    },

    // === KLIMT ===
    {
      title: 'Portrait of Adele Bloch-Bauer I',
      slug: 'portrait-adele-bloch-bauer',
      year: 1907,
      medium: 'Oil, silver, and gold on canvas',
      dimensions: '138 cm × 138 cm',
      artistId: artists.klimt,
      museumId: museums.neueGalerie,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt%2C_1907%2C_Adele_Bloch-Bauer_I%2C_Neue_Galerie_New_York.jpg/800px-Gustav_Klimt%2C_1907%2C_Adele_Bloch-Bauer_I%2C_Neue_Galerie_New_York.jpg',
    },
    {
      title: 'The Tree of Life',
      slug: 'tree-of-life-klimt',
      year: 1909,
      medium: 'Tempera, watercolor, gold leaf, silver, chalk on paper',
      dimensions: '195 cm × 102 cm',
      artistId: artists.klimt,
      museumId: museums.mak,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Gustav_Klimt_-_The_Tree_of_Life_-_Google_Art_Project.jpg/800px-Gustav_Klimt_-_The_Tree_of_Life_-_Google_Art_Project.jpg',
    },

    // === MATISSE ===
    {
      title: 'The Dance',
      slug: 'the-dance-matisse',
      year: 1910,
      medium: 'Oil on canvas',
      dimensions: '260 cm × 391 cm',
      artistId: artists.matisse,
      museumId: museums.hermitage,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Matisse-Dance.jpg/800px-Matisse-Dance.jpg',
    },
    {
      title: 'Blue Nude II',
      slug: 'blue-nude-matisse',
      year: 1952,
      medium: 'Gouache on paper, cut and pasted on white paper',
      dimensions: '116.2 cm × 88.9 cm',
      artistId: artists.matisse,
      museumId: null, // Pompidou
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Matisse-Blue-Nude-II.jpg/800px-Matisse-Blue-Nude-II.jpg',
    },
    {
      title: 'Woman with a Hat',
      slug: 'woman-with-a-hat-matisse',
      year: 1905,
      medium: 'Oil on canvas',
      dimensions: '80.7 cm × 59.7 cm',
      artistId: artists.matisse,
      museumId: null, // SFMOMA
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Matisse-Woman-with-a-Hat.jpg/800px-Matisse-Woman-with-a-Hat.jpg',
    },

    // === CÉZANNE ===
    {
      title: 'The Card Players',
      slug: 'the-card-players',
      year: 1895,
      medium: 'Oil on canvas',
      dimensions: '47.5 cm × 57 cm',
      artistId: artists.cezanne,
      museumId: museums.orsay,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Paul_C%C3%A9zanne%2C_Les_joueurs_de_carte_%281892-95%29.jpg/800px-Paul_C%C3%A9zanne%2C_Les_joueurs_de_carte_%281892-95%29.jpg',
    },
    {
      title: 'Mont Sainte-Victoire',
      slug: 'mont-sainte-victoire',
      year: 1904,
      medium: 'Oil on canvas',
      dimensions: '73 cm × 91 cm',
      artistId: artists.cezanne,
      museumId: museums.artInstituteChicago,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg/800px-Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg',
    },
    {
      title: 'The Large Bathers',
      slug: 'the-large-bathers',
      year: 1906,
      medium: 'Oil on canvas',
      dimensions: '210.5 cm × 250.8 cm',
      artistId: artists.cezanne,
      museumId: null, // Philadelphia
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Paul_C%C3%A9zanne_-_The_Bathers_-_Philadelphia.jpg/800px-Paul_C%C3%A9zanne_-_The_Bathers_-_Philadelphia.jpg',
    },

    // === TOULOUSE-LAUTREC ===
    {
      title: 'At the Moulin Rouge',
      slug: 'at-the-moulin-rouge',
      year: 1892,
      medium: 'Oil on canvas',
      dimensions: '123 cm × 141 cm',
      artistId: artists.toulouseLautrec,
      museumId: museums.artInstituteChicago,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg/800px-Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg',
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
