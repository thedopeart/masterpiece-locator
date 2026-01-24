const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== CONSOLIDATING DUPLICATE ARTWORKS ===\n');

  // Find all artworks
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      artistId: true,
      imageUrl: true,
      description: true,
      faqs: true,
      Artist: { select: { name: true } }
    }
  });

  // Group by title + artistId
  const titleArtistMap = {};
  for (const art of artworks) {
    const key = art.title + '|||' + art.artistId;
    if (!titleArtistMap[key]) {
      titleArtistMap[key] = [];
    }
    titleArtistMap[key].push(art);
  }

  // Find duplicates
  const duplicates = Object.entries(titleArtistMap)
    .filter(([_, arts]) => arts.length > 1);

  console.log('Found ' + duplicates.length + ' sets of duplicates to consolidate.\n');

  let deleted = 0;

  for (const [key, arts] of duplicates) {
    // Score each artwork - prefer: has image, more FAQs, longer description
    const scored = arts.map(art => {
      let score = 0;
      if (art.imageUrl) score += 100;
      if (art.faqs && Array.isArray(art.faqs)) score += art.faqs.length * 10;
      if (art.description) score += art.description.length / 100;
      return { art, score };
    });

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);

    const keep = scored[0].art;
    const toDelete = scored.slice(1).map(s => s.art);

    console.log('--- "' + keep.title + '" by ' + (keep.Artist ? keep.Artist.name : 'Unknown') + ' ---');
    console.log('  KEEPING: ' + keep.slug);

    for (const del of toDelete) {
      console.log('  DELETING: ' + del.slug);

      try {
        // Check for related records
        const relatedSales = await prisma.auctionSale.count({ where: { artworkId: del.id } });
        const relatedProducts = await prisma.productMatch.count({ where: { artworkId: del.id } });
        const relatedValuations = await prisma.artworkValuation.count({ where: { artworkId: del.id } });

        if (relatedSales > 0 || relatedProducts > 0 || relatedValuations > 0) {
          console.log('    WARNING: Has related records (sales: ' + relatedSales + ', products: ' + relatedProducts + ', valuations: ' + relatedValuations + ')');
          console.log('    Reassigning to keep record...');

          // Move related records to the kept artwork
          if (relatedSales > 0) {
            await prisma.auctionSale.updateMany({
              where: { artworkId: del.id },
              data: { artworkId: keep.id }
            });
          }
          if (relatedProducts > 0) {
            await prisma.productMatch.updateMany({
              where: { artworkId: del.id },
              data: { artworkId: keep.id }
            });
          }
          if (relatedValuations > 0) {
            await prisma.artworkValuation.updateMany({
              where: { artworkId: del.id },
              data: { artworkId: keep.id }
            });
          }
        }

        // Delete the duplicate
        await prisma.artwork.delete({ where: { id: del.id } });
        deleted++;
        console.log('    Deleted successfully');
      } catch (err) {
        console.log('    ERROR deleting: ' + err.message);
      }
    }
    console.log('');
  }

  console.log('=== COMPLETE ===');
  console.log('Deleted ' + deleted + ' duplicate artworks');

  // Re-count
  const totalArtworks = await prisma.artwork.count();
  console.log('Total artworks remaining: ' + totalArtworks);
}

main().catch(console.error).finally(() => prisma.$disconnect());
