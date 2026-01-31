const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

// Manually researched Wikimedia Commons URLs for T1 and T2 sculptures
const imageUpdates = {
  // T1
  'lincoln-memorial-statue': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lincoln_Memorial_sitting.jpg/800px-Lincoln_Memorial_sitting.jpg',

  // T2
  'perseus-with-head-of-medusa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Perseo_di_Benvenuto_Cellini%2C_Loggia_dei_Lanzi%2C_Firenze.jpg/800px-Perseo_di_Benvenuto_Cellini%2C_Loggia_dei_Lanzi%2C_Firenze.jpg',
  'doryphoros-spear-bearer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Doryphoros_MAN_Napoli_Inv6011-2.jpg/800px-Doryphoros_MAN_Napoli_Inv6011-2.jpg',
  'maman-spider-bourgeois': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Maman_at_National_Gallery_of_Canada.jpg/800px-Maman_at_National_Gallery_of_Canada.jpg',
  'the-dinner-party': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/The_Dinner_Party_by_Judy_Chicago.jpg/800px-The_Dinner_Party_by_Judy_Chicago.jpg',
  'aphrodite-of-knidos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cnidus_Aphrodite_Altemps_Inv8619.jpg/800px-Cnidus_Aphrodite_Altemps_Inv8619.jpg',
  'fountain-four-rivers-bernini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Fontana_dei_Quattro_Fiumi_2014.jpg/800px-Fontana_dei_Quattro_Fiumi_2014.jpg',
  'tian-tan-buddha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tian_Tan_Buddha_2013.jpg/800px-Tian_Tan_Buddha_2013.jpg',
  'cloud-gate-the-bean': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cloud_Gate_%28The_Bean%29_from_east%27.jpg/800px-Cloud_Gate_%28The_Bean%29_from_east%27.jpg',
  'little-mermaid-copenhagen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%C3%98resund_aquridge_%28-_The_Little_Mermaid%29.jpg/800px-%C3%98resund_aquridge_%28-_The_Little_Mermaid%29.jpg',
  'david-donatello': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Donatello_-_David_-_Floren%C3%A7a.jpg/800px-Donatello_-_David_-_Floren%C3%A7a.jpg',
  'charging-bull-nyc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Charging_Bull_statue.jpg/800px-Charging_Bull_statue.jpg',
  'apollo-and-daphne-bernini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/ApolloAndDaphne.JPG/800px-ApolloAndDaphne.JPG',
  'david-bernini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/David_by_Bernini.jpg/800px-David_by_Bernini.jpg',
  'atlas-rockefeller-center': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/GE_Building_by_David_Shankbone.JPG/800px-GE_Building_by_David_Shankbone.JPG',
  'fearless-girl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fearless_Girl_at_the_New_York_Stock_Exchange.jpg/800px-Fearless_Girl_at_the_New_York_Stock_Exchange.jpg',
  'elgin-marbles': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Elgin_Marbles_east_pediment.jpg/800px-Elgin_Marbles_east_pediment.jpg',
  'rape-of-proserpina-bernini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/The_Rape_of_Proserpina_%28Bernini%29.jpg/800px-The_Rape_of_Proserpina_%28Bernini%29.jpg',
  'shuttlecocks-kansas-city': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Shuttlecock-2.jpg/800px-Shuttlecock-2.jpg',
  'eagle-calder-seattle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Alexander_Calder_Eagle_1971.jpg/800px-Alexander_Calder_Eagle_1971.jpg',

  // Remaining T2 (need to check what they are)
};

(async () => {
  // First get remaining T2 slugs we haven't covered
  const remaining = await p.artwork.findMany({
    where: { artworkType: 'sculpture', imageUrl: null, searchVolumeTier: 2 },
    select: { slug: true, title: true },
  });

  const covered = new Set(Object.keys(imageUpdates));
  const uncovered = remaining.filter(r => !covered.has(r.slug));
  if (uncovered.length > 0) {
    console.log('Uncovered T2 sculptures:');
    uncovered.forEach(s => console.log(`  ${s.slug} | ${s.title}`));
  }

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
      console.log(`Failed: ${slug} - ${e.message?.slice(0, 80)}`);
    }
  }

  console.log(`\nDone: ${updated} updated, ${failed} failed`);
  await p.$disconnect();
})();
