/**
 * Update page 3 artists with proper portraits
 *
 * Emanuel de Witte - has a real portrait by Jan Stolker
 * Cimabue - no portrait exists (13th century), will use artwork fallback
 * Duccio - no portrait exists (13th century), will use artwork fallback
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Only update artists where we found actual portraits (not just their artwork)
const portraitUpdates: Record<string, string> = {
  // Emanuel de Witte - Portrait by Jan Stolker (actual portrait of the artist)
  'emanuel-de-witte': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Portrait_of_Emanuel_de_Witte_by_Jan_Stolker.jpg',
};

// Artists with no known portrait - they will use artwork fallback with "No Portrait Available" tag
const noPortraitArtists = [
  'cimabue',     // 13th century Italian painter, no contemporary portrait exists
  'duccio',      // Duccio di Buoninsegna, 13th century, no portrait exists
];

async function main() {
  console.log('='.repeat(60));
  console.log('Updating Page 3 Artist Portraits');
  console.log('='.repeat(60));

  // Update artists with real portraits
  console.log('\nUpdating artists with portraits:\n');

  for (const [slug, imageUrl] of Object.entries(portraitUpdates)) {
    try {
      const artist = await prisma.artist.findUnique({
        where: { slug },
        select: { id: true, name: true, imageUrl: true }
      });

      if (!artist) {
        console.log(`  NOT FOUND: ${slug}`);
        continue;
      }

      if (artist.imageUrl) {
        console.log(`  SKIPPED (already has image): ${artist.name}`);
        continue;
      }

      await prisma.artist.update({
        where: { slug },
        data: { imageUrl }
      });

      console.log(`  ✓ Updated: ${artist.name}`);
      console.log(`    URL: ${imageUrl.substring(0, 70)}...`);
    } catch (error) {
      console.error(`  ERROR updating ${slug}:`, error);
    }
  }

  // Verify no-portrait artists are using artwork fallback
  console.log('\nArtists using artwork fallback (no portrait available):');

  for (const slug of noPortraitArtists) {
    const artist = await prisma.artist.findUnique({
      where: { slug },
      include: {
        artworks: {
          where: { imageUrl: { not: null } },
          take: 1,
          select: { title: true, imageUrl: true }
        }
      }
    });

    if (!artist) {
      console.log(`  NOT FOUND: ${slug}`);
      continue;
    }

    const hasArtwork = artist.artworks[0]?.imageUrl ? 'YES' : 'NO';
    console.log(`  - ${artist.name}: imageUrl=${artist.imageUrl ? 'SET' : 'NULL'}, has artwork fallback: ${hasArtwork}`);

    if (artist.artworks[0]) {
      console.log(`    Will show: "${artist.artworks[0].title}" with "No Portrait Available" tag`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Done!');
  console.log('='.repeat(60));

  await prisma.$disconnect();
}

main().catch(console.error);
