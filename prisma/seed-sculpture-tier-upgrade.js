const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// A1: Fix Michelangelo's David artworkType
// A2: Upgrade sculpture search volume tiers

const typeFixes = {
  'michelangelo-david': { artworkType: 'sculpture' }
};

const tier1Slugs = [
  'statue-of-liberty',
  'mount-rushmore',
  'christ-the-redeemer',
  'michelangelo-david',
  'lincoln-memorial-statue',
];

const tier2Slugs = [
  'the-thinker-rodin',
  'venus-de-milo',
  'winged-victory-samothrace',
  'pieta-michelangelo',
  'bust-of-nefertiti',
  'the-kiss-rodin',
  'little-mermaid-copenhagen',
  'manneken-pis',
  'cloud-gate-the-bean',
  'terracotta-army',
  'moai-easter-island',
  'discobolus',
  'apollo-and-daphne-bernini',
  'ecstasy-of-saint-teresa',
  'rape-of-proserpina-bernini',
  'perseus-with-head-of-medusa',
  'balloon-dog-koons',
  'laocoon-and-his-sons',
  'apollo-belvedere',
  'great-sphinx-giza',
  'elgin-marbles',
  'dying-gaul',
  'david-bernini',
  'david-donatello',
  'maman-spider-bourgeois',
];

async function seed() {
  let updated = 0;
  let notFound = 0;

  // A1: Fix artworkType for David
  for (const [slug, data] of Object.entries(typeFixes)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { ...data, updatedAt: new Date() }
      });
      console.log(`✓ Type fix: ${slug} → ${data.artworkType}`);
      updated++;
    } catch (err) {
      console.error(`✗ Type fix failed: ${slug} - ${err.message}`);
      notFound++;
    }
  }

  // A2: Tier 1 upgrades
  for (const slug of tier1Slugs) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { searchVolumeTier: 1, updatedAt: new Date() }
      });
      console.log(`✓ Tier 1: ${slug}`);
      updated++;
    } catch (err) {
      console.error(`✗ Not found: ${slug}`);
      notFound++;
    }
  }

  // A2: Tier 2 upgrades
  for (const slug of tier2Slugs) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { searchVolumeTier: 2, updatedAt: new Date() }
      });
      console.log(`✓ Tier 2: ${slug}`);
      updated++;
    } catch (err) {
      console.error(`✗ Not found: ${slug}`);
      notFound++;
    }
  }

  console.log(`\nDone: ${updated} updated, ${notFound} not found`);
  await prisma.$disconnect();
}

seed();
