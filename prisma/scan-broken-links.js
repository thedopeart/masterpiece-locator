const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Scanning for Broken Internal Links ===\n');

  // Get all artworks with descriptions and FAQs
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      faqs: true,
    }
  });

  // Get all valid slugs
  const artists = await prisma.artist.findMany({ select: { slug: true } });
  const museums = await prisma.museum.findMany({ select: { slug: true } });
  const movements = await prisma.movement.findMany({ select: { slug: true } });

  const validArtistSlugs = new Set(artists.map(a => a.slug));
  const validMuseumSlugs = new Set(museums.map(m => m.slug));
  const validMovementSlugs = new Set(movements.map(m => m.slug));

  console.log(`Valid artists: ${validArtistSlugs.size}`);
  console.log(`Valid museums: ${validMuseumSlugs.size}`);
  console.log(`Valid movements: ${validMovementSlugs.size}`);
  console.log(`Artworks to scan: ${artworks.length}\n`);

  // Regex to find internal links
  const linkRegex = /href="\/apps\/masterpieces\/(artist|museum|movement)\/([^"]+)"/g;

  const brokenLinks = [];
  let totalLinksChecked = 0;

  for (const artwork of artworks) {
    const textsToCheck = [];

    if (artwork.description) {
      textsToCheck.push({ source: 'description', text: artwork.description });
    }

    if (artwork.faqs && Array.isArray(artwork.faqs)) {
      artwork.faqs.forEach((faq, idx) => {
        if (faq.answer) {
          textsToCheck.push({ source: `faq[${idx}]`, text: faq.answer });
        }
      });
    }

    for (const { source, text } of textsToCheck) {
      let match;
      while ((match = linkRegex.exec(text)) !== null) {
        totalLinksChecked++;
        const [fullMatch, type, slug] = match;

        let isValid = false;
        if (type === 'artist') {
          isValid = validArtistSlugs.has(slug);
        } else if (type === 'museum') {
          isValid = validMuseumSlugs.has(slug);
        } else if (type === 'movement') {
          isValid = validMovementSlugs.has(slug);
        }

        if (!isValid) {
          brokenLinks.push({
            artworkTitle: artwork.title,
            artworkSlug: artwork.slug,
            source,
            linkType: type,
            brokenSlug: slug,
          });
        }
      }
    }
  }

  console.log(`Total internal links checked: ${totalLinksChecked}`);
  console.log(`Broken links found: ${brokenLinks.length}\n`);

  if (brokenLinks.length > 0) {
    // Group by link type and slug for easier fixing
    const groupedBySlug = {};
    brokenLinks.forEach(bl => {
      const key = `${bl.linkType}/${bl.brokenSlug}`;
      if (!groupedBySlug[key]) {
        groupedBySlug[key] = [];
      }
      groupedBySlug[key].push(bl);
    });

    console.log('--- Broken Links by Target ---\n');

    Object.entries(groupedBySlug)
      .sort((a, b) => b[1].length - a[1].length)
      .forEach(([key, occurrences]) => {
        console.log(`${key} (${occurrences.length} occurrences)`);
        occurrences.slice(0, 3).forEach(o => {
          console.log(`  - ${o.artworkTitle} (${o.source})`);
        });
        if (occurrences.length > 3) {
          console.log(`  ... and ${occurrences.length - 3} more`);
        }
        console.log('');
      });

    // Also list unique broken slugs for easy reference
    console.log('\n--- Summary: Unique Broken Targets ---\n');

    const brokenArtists = [...new Set(brokenLinks.filter(b => b.linkType === 'artist').map(b => b.brokenSlug))];
    const brokenMuseums = [...new Set(brokenLinks.filter(b => b.linkType === 'museum').map(b => b.brokenSlug))];
    const brokenMovements = [...new Set(brokenLinks.filter(b => b.linkType === 'movement').map(b => b.brokenSlug))];

    if (brokenArtists.length > 0) {
      console.log(`Broken ARTIST links (${brokenArtists.length}):`);
      brokenArtists.forEach(s => console.log(`  - ${s}`));
      console.log('');
    }

    if (brokenMuseums.length > 0) {
      console.log(`Broken MUSEUM links (${brokenMuseums.length}):`);
      brokenMuseums.forEach(s => console.log(`  - ${s}`));
      console.log('');
    }

    if (brokenMovements.length > 0) {
      console.log(`Broken MOVEMENT links (${brokenMovements.length}):`);
      brokenMovements.forEach(s => console.log(`  - ${s}`));
      console.log('');
    }
  } else {
    console.log('No broken internal links found!');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
