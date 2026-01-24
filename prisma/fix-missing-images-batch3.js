const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING IMAGES TO PUBLIC DOMAIN ARTWORKS (BATCH 3) ===\n');

  const fixes = {
    // William Holman Hunt (died 1910)
    'william-holman-hunt-selfportrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/William_Holman_Hunt_-_Self-Portrait_-_Google_Art_Project.jpg/800px-William_Holman_Hunt_-_Self-Portrait_-_Google_Art_Project.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Umberto Boccioni (died 1916)
    'umberto-boccioni-selfportrait': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Umberto_Boccioni_-_Self-portrait%2C_oil_on_canvas%2C_1905%2C_Metropolitan_Museum_of_Art.jpg/800px-Umberto_Boccioni_-_Self-portrait%2C_oil_on_canvas%2C_1905%2C_Metropolitan_Museum_of_Art.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain'
    },

    // Andrea del Sarto (died 1530)
    'andrea-del-sarto-portrait-of-a-young-man': {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Andrea_del_Sarto_-_Portrait_of_a_Young_Man_-_WGA0381.jpg/800px-Andrea_del_Sarto_-_Portrait_of_a_Young_Man_-_WGA0381.jpg',
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
