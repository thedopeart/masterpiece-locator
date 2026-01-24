const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imageFixesBySlug = {
  // Venus de Milo - broken 404
  'venus-de-milo': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Venus_de_Milo_Louvre_Ma399.jpg/800px-Venus_de_Milo_Louvre_Ma399.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Belvedere Torso - broken 404
  'belvedere-torso': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Belvedere_Torso.jpg',
    imageAttribution: 'Wikimedia Commons - Public Domain'
  },

  // Discobolus - broken 404
  'discobolus': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG/800px-Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Discobolus (Townley) - uses same broken URL as Discobolus
  'discobolus-townley': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG/800px-Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Laocoön and His Sons (duplicate entry with broken URL)
  'laocoon-and-his-sons': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg/800px-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg',
    imageAttribution: 'Wikimedia Commons - Public Domain'
  },

  // Marble Statue of a Kouros (Youth) - broken 404
  'kouros-statue-met': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Marble_statue_of_a_kouros_%28youth%29_MET_DT263.jpg/800px-Marble_statue_of_a_kouros_%28youth%29_MET_DT263.jpg',
    imageAttribution: 'Wikimedia Commons - CC0'
  },

  // Sleeping Hermaphroditus - broken 404
  'sleeping-hermaphroditus': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Borghese_Hermaphroditus_Louvre_Ma231_n4.jpg/800px-Borghese_Hermaphroditus_Louvre_Ma231_n4.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Caryatid from the Erechtheion - broken 404
  'caryatid-erechtheion-british': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Caryatid.jpg/800px-Caryatid.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 3.0'
  },

  // Horse from the Chariot of Selene - broken 404
  'horse-selene-parthenon': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Horse_of_Selene.jpg/800px-Horse_of_Selene.jpg',
    imageAttribution: 'Wikimedia Commons - Public Domain'
  },

  // Euphronios Krater - broken 404
  'euphronios-krater': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Euphronios_krater_side_A_MET_L.2006.10.jpg/800px-Euphronios_krater_side_A_MET_L.2006.10.jpg',
    imageAttribution: 'Wikimedia Commons - CC0'
  },

  // Nereid Monument Sculptures - broken 404
  'nereid-monument': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nereid_Monument%2C_British_Museum.jpg/800px-Nereid_Monument%2C_British_Museum.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Mausoleum at Halicarnassus Sculptures - broken 404
  'mausoleum-halicarnassus-sculptures': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Amazon_Frieze_BM_GR1857.12-20.268-270.jpg/800px-Amazon_Frieze_BM_GR1857.12-20.268-270.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  },

  // Elgin Marbles (Parthenon Sculptures) - broken 404
  'elgin-marbles-parthenon': {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Elgin_Marbles_east_pediment.jpg/800px-Elgin_Marbles_east_pediment.jpg',
    imageAttribution: 'Wikimedia Commons - CC BY-SA 4.0'
  }
};

async function main() {
  console.log('=== Fixing Ancient Greek Artwork Images ===\n');

  let updated = 0;
  let notFound = 0;

  for (const [slug, data] of Object.entries(imageFixesBySlug)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        imageUrl: data.imageUrl,
        imageAttribution: data.imageAttribution,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log(`✓ Fixed: ${slug}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
      notFound++;
    }
  }

  // Also update the artist's main image using one of the most famous sculptures
  console.log('\n--- Updating Artist Main Image ---');
  const artistResult = await prisma.artist.update({
    where: { slug: 'ancient-greek' },
    data: {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Venus_de_Milo_Louvre_Ma399.jpg/800px-Venus_de_Milo_Louvre_Ma399.jpg',
      updatedAt: new Date()
    }
  });

  if (artistResult) {
    console.log('✓ Updated Ancient Greek artist main image (Venus de Milo)');
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated} artworks`);
  console.log(`Not found: ${notFound} artworks`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
