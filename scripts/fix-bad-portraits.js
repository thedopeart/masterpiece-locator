/**
 * Fix Incorrect Portrait Assignments
 *
 * The auto-finder grabbed paintings instead of portraits for many artists.
 * This script:
 * 1. Resets bad assignments to null (so artwork fallback shows with "No Portrait Available" tag)
 * 2. Keeps any that are actually correct portraits
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Artists whose images are NOT portraits (paintings, wrong people, etc.)
const artistsToReset = [
  { name: "Johannes Vermeer", reason: "City photo of Delft, not a portrait" },
  { name: "Georges Seurat", reason: "A Sunday on La Grande Jatte painting" },
  { name: "Frank Dicksee", reason: "An Offering painting" },
  { name: "Cimabue", reason: "Virgin and Child painting" },
  { name: "Duccio di Buoninsegna", reason: "Rucellai Madonna painting" },
  { name: "Emanuel de Witte", reason: "Portrait of a Family painting (not the artist)" },
  { name: "Evelyn De Morgan", reason: "Ariadne in Naxos painting" },
  { name: "Fra Angelico", reason: "Niccolina fresco" },
  { name: "Francesco Guardi", reason: "Fire in the oil warehouses painting" },
  { name: "Giovanni di Paolo", reason: "German archive photo (wrong person)" },
  { name: "Guido Reni", reason: "Bacchus and Ariadne painting" },
  { name: "Hieronymus Bosch", reason: "Crucifixion of St Julia painting" },
  { name: "James Hamilton", reason: "Beatles album cover (wrong person!)" },
  { name: "Louis Le Nain", reason: "Happy Family painting" },
  { name: "Paris Bordone", reason: "Athena Scorning painting" },
  { name: "Pieter Claesz", reason: "Still life by Willem Claesz. Heda (wrong artist)" },
  { name: "Sebastiano del Piombo", reason: "Portrait OF Andrea Doria (subject, not artist)" },
  { name: "Simone Martini", reason: "Maestà painting" },
  { name: "Willem Claesz. Heda", reason: "Still life painting" },
];

// Artists to keep (potentially valid portraits)
const artistsToKeep = [
  { name: "Dosso Dossi", reason: "Cropped image - might be portrait" },
  { name: "Fitz Henry Lane", reason: "Drawing by Robert Cooke - actual portrait" },
  { name: "Petrus Christus", reason: "Carthusian - might be self-portrait" },
  { name: "Sassetta", reason: "Need to verify" },
];

async function main() {
  console.log('='.repeat(60));
  console.log('Fix Incorrect Portrait Assignments');
  console.log('='.repeat(60));

  console.log('\nResetting bad portrait assignments to null...');
  console.log('(These artists will show artwork with "No Portrait Available" tag)\n');

  let reset = 0;
  for (const { name, reason } of artistsToReset) {
    const artist = await prisma.artist.findFirst({ where: { name } });
    if (artist) {
      await prisma.artist.update({
        where: { id: artist.id },
        data: { imageUrl: null }
      });
      console.log(`✓ Reset: ${name}`);
      console.log(`  Reason: ${reason}`);
      reset++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));
  console.log(`Reset to null: ${reset} artists`);
  console.log(`\nKept (potentially valid): ${artistsToKeep.length} artists`);
  artistsToKeep.forEach(({ name, reason }) => {
    console.log(`  - ${name}: ${reason}`);
  });

  console.log('\n' + '='.repeat(60));
  console.log('Current Status');
  console.log('='.repeat(60));

  // Show final status of all 23 originally missing artists
  const allArtists = [...artistsToReset.map(a => a.name), ...artistsToKeep.map(a => a.name)];
  for (const name of allArtists) {
    const artist = await prisma.artist.findFirst({
      where: { name },
      include: {
        artworks: {
          where: { imageUrl: { not: null } },
          take: 1,
          select: { title: true, imageUrl: true }
        }
      }
    });
    if (artist) {
      const status = artist.imageUrl ? 'Has Portrait' : 'Using Artwork Fallback';
      const artwork = artist.artworks[0]?.title || 'N/A';
      console.log(`${name}: ${status}`);
      if (!artist.imageUrl && artist.artworks[0]) {
        console.log(`  → Will display: "${artwork}"`);
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
