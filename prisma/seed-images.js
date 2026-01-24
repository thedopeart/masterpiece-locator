const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Wikimedia Commons URLs for public domain artworks
// All artists died before 1954, so these are in the public domain
const imageUpdates = [
  {
    slug: 'salvator-mundi',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500%2C_oil_on_walnut%2C_45.4_%C3%97_65.6_cm.jpg',
    imageAttribution: 'Leonardo da Vinci, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'wasserschlangen-ii-klimt',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Klimt_-_Wasserschlangen_II.jpg',
    imageAttribution: 'Gustav Klimt, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'pendant-portraits-rembrandt',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Marten_Soolmans_-_Rembrandt.jpg',
    imageAttribution: 'Rembrandt van Rijn, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'nu-couche-modigliani-1917',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Amedeo_Modigliani_-_Nu_couch%C3%A9_%28Red_Nude%29.jpg',
    imageAttribution: 'Amedeo Modigliani, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'nu-couche-left-side-modigliani',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Amedeo_Modigliani%2C_1917%2C_Nu_couch%C3%A9_%28sur_le_c%C3%B4t%C3%A9_gauche%29%2C_Reclining_Nude%2C_oil_on_canvas%2C_89.5_x_146.7_cm%2C_private_collection.jpg',
    imageAttribution: 'Amedeo Modigliani, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'meules-haystacks-monet',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg',
    imageAttribution: 'Claude Monet, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'suprematist-composition-malevich',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Suprematism%2C_18th_Construction%2C_Kazimir_Malevich.jpg',
    imageAttribution: 'Kazimir Malevich, Public domain, via Wikimedia Commons'
  },
  {
    slug: 'le-bassin-aux-nympheas-monet',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
    imageAttribution: 'Claude Monet, Public domain, via Wikimedia Commons'
  }
  // Note: Only including works by artists who died before 1954 (public domain)
  // Picasso (d. 1973), Pollock (d. 1956), Warhol (d. 1987), etc. are still under copyright
];

async function main() {
  console.log('=== Adding Images to Public Domain Artworks ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of imageUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    // Only update if no image exists
    if (artwork.imageUrl) {
      console.log(`Skipped (has image): ${artwork.title}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        imageUrl: update.imageUrl,
        imageAttribution: update.imageAttribution,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
