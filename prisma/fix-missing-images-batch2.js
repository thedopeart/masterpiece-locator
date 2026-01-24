const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING IMAGES TO PUBLIC DOMAIN ARTWORKS (BATCH 2) ===\n');

  const fixes = {
    // Jacob Jordaens (died 1678)
    'jacob-jordaens-selfportrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jacob_Jordaens_-_Self-portrait.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Correggio (died 1534)
    'correggio-adoration-of-the-christ-child': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Correggio_-_La_Vergine_che_adora_il_Bambino_-_Google_Art_Project.jpg/800px-Correggio_-_La_Vergine_che_adora_il_Bambino_-_Google_Art_Project.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Pieter Bruegel the Elder (died 1569)
    'pieter-bruegel-elder-big-fishes-eat-small-fishes': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Big_Fish_Eat_Little_Fish_1557.jpg/800px-Big_Fish_Eat_Little_Fish_1557.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // François Boucher (died 1770)
    'francois-boucher-breakfast': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Boucher_-_Das_Fr%C3%BChst%C3%BCck_-_1739.jpeg/800px-Boucher_-_Das_Fr%C3%BChst%C3%BCck_-_1739.jpeg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Caspar David Friedrich (died 1840)
    'caspar-david-friedrich-fog': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Caspar_David_Friedrich_Fog_in_the_Elbe_Valley.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Ford Madox Brown (died 1893)
    'ford-madox-brown-romeo-and-juliet': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Romeo_and_juliet_by_Ford_Madox_Brown_1870.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    }
  };

  let fixed = 0;
  let notFound = 0;
  let alreadyHas = 0;
  let errors = 0;

  for (const [slug, data] of Object.entries(fixes)) {
    try {
      const existing = await prisma.artwork.findUnique({
        where: { slug: slug },
        select: { id: true, title: true, imageUrl: true }
      });

      if (!existing) {
        console.log('NOT FOUND: ' + slug);
        notFound++;
        continue;
      }

      if (existing.imageUrl) {
        console.log('ALREADY HAS IMAGE: ' + slug);
        alreadyHas++;
        continue;
      }

      const result = await prisma.artwork.update({
        where: { slug: slug },
        data: {
          imageUrl: data.imageUrl,
          imageAttribution: data.imageAttribution,
          updatedAt: new Date()
        }
      });
      console.log('FIXED: ' + slug + ' ("' + result.title + '")');
      fixed++;
    } catch (err) {
      console.log('ERROR fixing ' + slug + ': ' + err.message);
      errors++;
    }
  }

  console.log('\n=== COMPLETE ===');
  console.log('Fixed: ' + fixed);
  console.log('Already has image: ' + alreadyHas);
  console.log('Not found: ' + notFound);
  console.log('Errors: ' + errors);

  const remaining = await prisma.artwork.count({ where: { imageUrl: null } });
  console.log('\nArtworks still without images: ' + remaining);
}

main().catch(console.error).finally(() => prisma.$disconnect());
