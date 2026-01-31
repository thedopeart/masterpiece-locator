const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const imageUpdates = {
  'wake-richard-serra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Olympic_Sculpture_Park_05.jpg/800px-Olympic_Sculpture_Park_05.jpg',
  'seaform-pavilion-chihuly': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Seaform_Pavilion_Dale_Chihuly.JPG/800px-Seaform_Pavilion_Dale_Chihuly.JPG',
  'the-motherland-calls': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/The_Motherland_Calls_in_Volgograd.jpg/800px-The_Motherland_Calls_in_Volgograd.jpg',
  'leshan-giant-buddha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Leshan_Buddha_Statue_View.JPG/800px-Leshan_Buddha_Statue_View.JPG',
  'three-graces-canova': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Antonio_Canova-The_Three_Graces_0.jpg/800px-Antonio_Canova-The_Three_Graces_0.jpg',
  'cupid-and-psyche-canova': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Psyche_revived_Louvre_MR1777.jpg/800px-Psyche_revived_Louvre_MR1777.jpg',
  'medici-venus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Venus_de_Medici.jpg/800px-Venus_de_Medici.jpg',
  'manneken-pis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Manneken_Pis_2012.jpg/800px-Manneken_Pis_2012.jpg',
  'balloon-dog-koons': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Balloon_Dog_%28Blue%29.jpg/800px-Balloon_Dog_%28Blue%29.jpg',
  'some-one-do-ho-suh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Someone_Suh.jpg/800px-Someone_Suh.jpg',

  // High-priority T3 sculptures
  'spiral-jetty': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Spiral-jetty-from-rozel-point.png/800px-Spiral-jetty-from-rozel-point.png',
  'venus-callipyge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Callipygian_Venus_-_Naples.jpg/800px-Callipygian_Venus_-_Naples.jpg',
  'lobster-telephone-dali': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Lobster_telephone.jpg/800px-Lobster_telephone.jpg',
  'christ-of-the-abyss': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cristo_degli_abissi.jpg/800px-Cristo_degli_abissi.jpg',
  'capitoline-venus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Capitoline_Venus_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg/800px-Capitoline_Venus_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg',
  'artemis-of-versailles': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Diane_de_Versailles_Leochares.jpg/800px-Diane_de_Versailles_Leochares.jpg',
  'peplos-kore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/ACMA_679_Peplos_Kore_1.JPG/800px-ACMA_679_Peplos_Kore_1.JPG',
  'nok-terracotta-head': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nok_sculpture_Louvre_70-1998-11-1.jpg/800px-Nok_sculpture_Louvre_70-1998-11-1.jpg',
  'dog-giacometti': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Dog_%28Giacometti%29.jpg/800px-Dog_%28Giacometti%29.jpg',
  'jeanneke-pis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Jeanneke_Pis_2013.jpg/800px-Jeanneke_Pis_2013.jpg',
  'hammering-man-borofsky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hammering_Man_SAM.jpg/800px-Hammering_Man_SAM.jpg',
};

(async () => {
  let updated = 0;
  let failed = 0;

  for (const [slug, url] of Object.entries(imageUpdates)) {
    try {
      await p.artwork.update({
        where: { slug },
        data: { imageUrl: url, updatedAt: new Date() }
      });
      updated++;
      console.log(`Updated: ${slug}`);
    } catch (e) {
      failed++;
      console.log(`Failed: ${slug} - ${e.message?.slice(0, 100)}`);
    }
  }

  console.log(`\nDone: ${updated} updated, ${failed} failed`);

  // Check remaining counts
  const nullT1 = await p.artwork.count({ where: { artworkType: 'sculpture', imageUrl: null, searchVolumeTier: 1 } });
  const nullT2 = await p.artwork.count({ where: { artworkType: 'sculpture', imageUrl: null, searchVolumeTier: 2 } });
  const nullT3 = await p.artwork.count({ where: { artworkType: 'sculpture', imageUrl: null, searchVolumeTier: 3 } });
  console.log(`\nRemaining null images: T1=${nullT1}, T2=${nullT2}, T3=${nullT3}`);

  await p.$disconnect();
})();
