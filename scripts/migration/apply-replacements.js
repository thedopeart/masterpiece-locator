/**
 * Apply image replacements from museum API results
 * Run this AFTER running the fetch scripts and reviewing results
 *
 * Usage:
 *   node apply-replacements.js           # Dry run (preview changes)
 *   node apply-replacements.js --apply   # Actually apply changes
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const RESULTS_DIR = path.join(__dirname, 'results');
const DRY_RUN = !process.argv.includes('--apply');

async function loadResults() {
  const files = [
    'artic-found.json',
    'rijksmuseum-found.json',
    'cleveland-found.json',
    'wikimedia-found.json'
  ];

  const allResults = [];

  for (const file of files) {
    const filePath = path.join(RESULTS_DIR, file);
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      console.log(`Loaded ${data.length} results from ${file}`);
      allResults.push(...data);
    } else {
      console.log(`File not found: ${file} (skipping)`);
    }
  }

  return allResults;
}

async function applyReplacements() {
  console.log('=== Apply Image Replacements ===\n');

  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No changes will be made');
    console.log('   Run with --apply to actually update the database\n');
  } else {
    console.log('⚠️  LIVE MODE - Changes will be applied to database\n');
  }

  const results = await loadResults();

  if (results.length === 0) {
    console.log('\nNo results found. Run the fetch scripts first:');
    console.log('  node fetch-artic.js');
    console.log('  node fetch-rijksmuseum.js');
    console.log('  node fetch-cleveland.js');
    await prisma.$disconnect();
    return;
  }

  console.log(`\nTotal images to replace: ${results.length}\n`);

  let updated = 0;
  let errors = 0;
  let skipped = 0;

  for (const item of results) {
    const { id, slug, title, newImage } = item;

    // Build attribution string
    const attribution = [
      `Source: ${newImage.source}`,
      `License: ${newImage.license}`,
      newImage.sourceUrl
    ].join(' | ');

    if (DRY_RUN) {
      console.log(`[DRY RUN] Would update: ${slug}`);
      console.log(`  Old: ${item.oldImageUrl?.substring(0, 60)}...`);
      console.log(`  New: ${newImage.imageUrl.substring(0, 60)}...`);
      updated++;
    } else {
      try {
        // First check if artwork still has WikiArt URL (in case already updated)
        const current = await prisma.artwork.findUnique({
          where: { id },
          select: { imageUrl: true }
        });

        if (!current?.imageUrl?.includes('wikiart.org')) {
          console.log(`[SKIP] ${slug} - no longer has WikiArt URL`);
          skipped++;
          continue;
        }

        await prisma.artwork.update({
          where: { id },
          data: {
            imageUrl: newImage.imageUrl,
            imageAttribution: attribution,
            updatedAt: new Date()
          }
        });

        console.log(`✓ Updated: ${slug}`);
        updated++;
      } catch (e) {
        console.error(`✗ Error updating ${slug}: ${e.message}`);
        errors++;
      }
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Updated: ${updated}`);
  if (skipped > 0) console.log(`Skipped: ${skipped}`);
  if (errors > 0) console.log(`Errors: ${errors}`);

  if (DRY_RUN) {
    console.log('\n💡 To apply these changes, run:');
    console.log('   node apply-replacements.js --apply');
  }

  await prisma.$disconnect();
}

applyReplacements().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
