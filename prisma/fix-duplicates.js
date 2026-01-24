const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Fixing Duplicate Artworks ===\n');

  // List of duplicate slugs to DELETE (keeping the original/better one)
  const duplicatesToDelete = [
    // Saturn - keep 'saturn-devouring-his-son', delete the one I just added
    'saturn-devouring-son-goya',

    // Saint John the Baptist - keep 'saint-john-baptist-leonardo' (my newer one with description), delete old
    'saint-john-the-baptist-leonardo',

    // Saint Jerome - keep 'st-jerome-wilderness-leonardo-vatican', delete old
    'saint-jerome-wilderness-leonardo',

    // Raft of the Medusa - keep 'raft-of-medusa-gericault' (my newer one with description), delete old
    'raft-of-the-medusa',

    // Musicians Caravaggio - keep 'musicians-caravaggio-met' (has year), delete old
    'caravaggio-musicians',
  ];

  console.log('Deleting duplicate artworks:\n');

  for (const slug of duplicatesToDelete) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug },
      include: {
        Artist: { select: { name: true } },
        Museum: { select: { name: true } }
      }
    });

    if (artwork) {
      console.log(`Deleting: ${artwork.title}`);
      console.log(`  Slug: ${slug}`);
      console.log(`  Artist: ${artwork.Artist?.name}`);
      console.log(`  Museum: ${artwork.Museum?.name}`);

      await prisma.artwork.delete({
        where: { id: artwork.id }
      });
      console.log(`  ✓ Deleted\n`);
    } else {
      console.log(`Not found: ${slug}\n`);
    }
  }

  // Now check what we kept
  console.log('\n=== Verifying Remaining Artworks ===\n');

  const checkSlugs = [
    'saturn-devouring-his-son',
    'saint-john-baptist-leonardo',
    'st-jerome-wilderness-leonardo-vatican',
    'raft-of-medusa-gericault',
    'musicians-caravaggio-met',
  ];

  for (const slug of checkSlugs) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug },
      select: {
        title: true,
        slug: true,
        description: true,
        Artist: { select: { name: true } },
        Museum: { select: { name: true } }
      }
    });

    if (artwork) {
      const hasDesc = artwork.description ? 'Yes' : 'No';
      console.log(`✓ ${artwork.title}`);
      console.log(`  Artist: ${artwork.Artist?.name} @ ${artwork.Museum?.name}`);
      console.log(`  Has description: ${hasDesc}\n`);
    }
  }

  console.log('=== Complete ===');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
