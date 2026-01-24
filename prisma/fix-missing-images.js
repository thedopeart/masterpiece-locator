const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING IMAGES TO PUBLIC DOMAIN ARTWORKS ===\n');

  // These are public domain works (artist died 70+ years ago) with available images
  const fixes = {
    // Modigliani (died 1920)
    'nu-couche-modigliani-1917': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Amedeo_Modigliani_-_Nu_couch%C3%A9.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },
    'amedeo-modigliani-head-of-a-young-woman': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Amedeo_Modigliani_-_T%C3%AAte_de_femme.jpg/800px-Amedeo_Modigliani_-_T%C3%AAte_de_femme.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Degas (died 1917)
    'edgar-degas-study-for-the-self-portrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Edgar_Degas_self_portrait_1855.jpeg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Caravaggio (died 1610)
    'caravaggio-portrait-of-a-courtesan': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Portrait_of_a_Courtesan_by_Caravaggio.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Dürer (died 1528)
    'albrecht-durer-selfportrait-at-13': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Durer-self-portrait-at-the-age-of-thirteen.jpg/800px-Durer-self-portrait-at-the-age-of-thirteen.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Petrus Christus (died 1475)
    'portrait-young-girl-christus': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Petrus_Christus_-_Portrait_of_a_Young_Woman_-_Google_Art_Project.jpg/800px-Petrus_Christus_-_Portrait_of_a_Young_Woman_-_Google_Art_Project.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Titian (died 1576)
    'titian-christ-carrying-the-cross': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tiziano_o_giorgione%2C_cristo_portacroce.jpg/800px-Tiziano_o_giorgione%2C_cristo_portacroce.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Guido Reni (died 1642)
    'guido-reni-self-portrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Guido_Reni_-_Self-portrait.jpg/800px-Guido_Reni_-_Self-portrait.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Vigée Le Brun (died 1842)
    'elisabeth-vigee-le-brun-selfportrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/800px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Giorgione (died 1510)
    'giorgione-the-adoration-of-the-kings': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Giorgione_-_The_Adoration_of_the_Kings_-_Google_Art_Project.jpg/800px-Giorgione_-_The_Adoration_of_the_Kings_-_Google_Art_Project.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Millet (died 1875)
    'jean-francois-millet-selfportrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Jean-Fran%C3%A7ois_Millet_-_Self-Portrait_-_93.154_-_Museum_of_Fine_Arts.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Gauguin (died 1903)
    'paul-gauguin-man-with-a-toque': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Paul_Gauguin_200.jpg/800px-Paul_Gauguin_200.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Giovanni Bellini (died 1516)
    'giovanni-bellini-madonna-and-child': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Accademia_-_Giovanni_Bellini_-_Madonna_with_Child_Blessing_Cat.583.jpg/800px-Accademia_-_Giovanni_Bellini_-_Madonna_with_Child_Blessing_Cat.583.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    }
  };

  let fixed = 0;
  let notFound = 0;
  let errors = 0;

  for (const [slug, data] of Object.entries(fixes)) {
    try {
      // Check if artwork exists
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
  console.log('Not found: ' + notFound);
  console.log('Errors: ' + errors);

  // Final count
  const remaining = await prisma.artwork.count({ where: { imageUrl: null } });
  console.log('\nArtworks still without images: ' + remaining);
}

main().catch(console.error).finally(() => prisma.$disconnect());
