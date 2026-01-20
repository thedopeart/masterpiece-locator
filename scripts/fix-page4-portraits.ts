/**
 * Fix Page 4 Artist Portraits
 *
 * This script identifies artists on page 4 (artists 151-200 by artwork count)
 * who don't have a proper portrait image. For these artists:
 * 1. If they have a broken/missing portrait URL, clear it
 * 2. The frontend will then use their first artwork as the profile image
 * 3. A "No Portrait Available" tag is displayed automatically
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ARTISTS_PER_PAGE = 50;
const TARGET_PAGE = 2;

// Test if URL returns a valid image
async function testUrl(url: string): Promise<boolean> {
  if (!url) return false;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log(`Page ${TARGET_PAGE} Artist Portrait Audit`);
  console.log('='.repeat(60));
  console.log(`(Artists ${(TARGET_PAGE - 1) * ARTISTS_PER_PAGE + 1} - ${TARGET_PAGE * ARTISTS_PER_PAGE})\n`);

  // Get page 4 artists with the same ordering as the frontend
  const artists = await prisma.artist.findMany({
    include: {
      artworks: {
        where: { imageUrl: { not: null } },
        take: 1,
        orderBy: { searchVolumeTier: 'asc' },
        select: { imageUrl: true, title: true },
      },
    },
    orderBy: [
      { artworks: { _count: 'desc' } },
      { name: 'asc' }
    ],
    skip: (TARGET_PAGE - 1) * ARTISTS_PER_PAGE,
    take: ARTISTS_PER_PAGE,
  });

  console.log(`Found ${artists.length} artists on page ${TARGET_PAGE}\n`);

  // Categories
  const hasValidPortrait: typeof artists = [];
  const hasBrokenPortrait: typeof artists = [];
  const noPortraitHasArtwork: typeof artists = [];
  const noPortraitNoArtwork: typeof artists = [];

  // Test each artist
  for (const artist of artists) {
    process.stdout.write(`Testing ${artist.name}... `);

    if (artist.imageUrl) {
      const isValid = await testUrl(artist.imageUrl);
      if (isValid) {
        hasValidPortrait.push(artist);
        console.log('✓ valid portrait');
      } else {
        hasBrokenPortrait.push(artist);
        console.log('✗ BROKEN portrait URL');
      }
    } else {
      if (artist.artworks[0]?.imageUrl) {
        noPortraitHasArtwork.push(artist);
        console.log('○ no portrait (artwork available)');
      } else {
        noPortraitNoArtwork.push(artist);
        console.log('⚠ NO portrait OR artwork!');
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Valid portraits: ${hasValidPortrait.length}`);
  console.log(`Broken portraits (need fixing): ${hasBrokenPortrait.length}`);
  console.log(`No portrait + has artwork (OK): ${noPortraitHasArtwork.length}`);
  console.log(`No portrait + no artwork (needs attention): ${noPortraitNoArtwork.length}`);

  // List broken portraits
  if (hasBrokenPortrait.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('ARTISTS WITH BROKEN PORTRAITS');
    console.log('(These will be cleared to use artwork fallback)');
    console.log('='.repeat(60));
    for (const artist of hasBrokenPortrait) {
      console.log(`  - ${artist.name} (${artist.slug})`);
      console.log(`    Current URL: ${artist.imageUrl?.substring(0, 60)}...`);
      if (artist.artworks[0]) {
        console.log(`    Fallback: ${artist.artworks[0].title || 'artwork available'}`);
      }
    }
  }

  // List artists without any image
  if (noPortraitNoArtwork.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('ARTISTS WITHOUT ANY IMAGE (need manual fix)');
    console.log('='.repeat(60));
    for (const artist of noPortraitNoArtwork) {
      console.log(`  - ${artist.name} (${artist.slug})`);
    }
  }

  // List those already using artwork fallback
  if (noPortraitHasArtwork.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('ARTISTS USING ARTWORK FALLBACK (already OK)');
    console.log('='.repeat(60));
    for (const artist of noPortraitHasArtwork) {
      console.log(`  - ${artist.name} → using "${artist.artworks[0]?.title || 'artwork'}"`);
    }
  }

  // Ask to fix broken portraits
  if (hasBrokenPortrait.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('FIXING BROKEN PORTRAITS');
    console.log('='.repeat(60));

    for (const artist of hasBrokenPortrait) {
      if (artist.artworks[0]?.imageUrl) {
        // Clear the broken URL so frontend uses artwork fallback
        await prisma.artist.update({
          where: { id: artist.id },
          data: { imageUrl: null }
        });
        console.log(`✓ Cleared portrait for ${artist.name} → will show artwork`);
      } else {
        console.log(`⚠ ${artist.name} has no artwork to fall back to!`);
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('DONE');
  console.log('='.repeat(60));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
