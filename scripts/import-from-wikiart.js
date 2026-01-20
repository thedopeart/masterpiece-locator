/**
 * Import Artworks from WikiArt
 *
 * This script imports artworks from a reviewed CSV file into your database.
 * The CSV should be a reviewed version of the gap finder output with museum
 * locations filled in.
 *
 * Usage: node scripts/import-from-wikiart.js --file=data/wikiart-gaps/reviewed.csv
 *
 * CSV format expected:
 * Artist Name, Artist Slug, Death Year, Artwork Title, Artwork Slug,
 * WikiArt URL, Estimated Image URL, Museum Location, Notes
 *
 * The script will:
 * 1. Parse the CSV
 * 2. Skip rows without museum locations (your unique value!)
 * 3. Fetch the actual high-res image URL from WikiArt
 * 4. Create the artwork record linked to existing artist
 * 5. Link to museum (create if needed)
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (Educational Art Research)';
const DELAY_MS = 500;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const CSV_FILE = getArg('file');
const DRY_RUN = args.includes('--dry-run');

if (!CSV_FILE) {
  console.error('Usage: node scripts/import-from-wikiart.js --file=path/to/reviewed.csv [--dry-run]');
  process.exit(1);
}

/**
 * Parse CSV file
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim());

  // Skip header
  const dataLines = lines.slice(1);

  return dataLines.map(line => {
    // Handle quoted fields with commas
    const fields = [];
    let current = '';
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    fields.push(current.trim());

    return {
      artistName: fields[0]?.replace(/^"|"$/g, ''),
      artistSlug: fields[1],
      deathYear: parseInt(fields[2]) || null,
      artworkTitle: fields[3]?.replace(/^"|"$/g, ''),
      artworkSlug: fields[4],
      wikiartUrl: fields[5],
      imageUrl: fields[6],
      museumLocation: fields[7]?.replace(/^"|"$/g, ''),
      notes: fields[8]?.replace(/^"|"$/g, '')
    };
  });
}

/**
 * Fetch the actual image URL from WikiArt page
 */
async function getActualImageUrl(wikiartUrl) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(wikiartUrl, {
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) return null;

    const html = await response.text();

    // WikiArt stores the full image URL in the og:image meta tag
    const ogMatch = html.match(/og:image"\s*content="([^"]+)"/);
    if (ogMatch && ogMatch[1]) {
      let url = ogMatch[1];
      // Ensure we get a good size
      if (url.includes('!')) {
        url = url.replace(/![^.]+\./, '!Large.');
      }
      return url;
    }

    // Fallback: look for data-src on main image
    const dataSrcMatch = html.match(/data-src="(https:\/\/uploads\d*\.wikiart\.org[^"]+)"/);
    if (dataSrcMatch) {
      return dataSrcMatch[1];
    }

  } catch (err) {
    // Silent fail
  }

  return null;
}

/**
 * Create or find museum
 */
async function findOrCreateMuseum(museumName) {
  // Try to parse museum name and city
  // Common formats: "Museum Name, City" or "Museum Name (City)"
  let name = museumName;
  let city = 'Unknown';
  let country = 'Unknown';

  // Try to extract city
  const commaMatch = museumName.match(/^(.+),\s*(.+)$/);
  const parenMatch = museumName.match(/^(.+)\s*\((.+)\)$/);

  if (commaMatch) {
    name = commaMatch[1].trim();
    city = commaMatch[2].trim();
  } else if (parenMatch) {
    name = parenMatch[1].trim();
    city = parenMatch[2].trim();
  }

  // Create slug from full museum name
  const slug = museumName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);

  // Check if museum exists
  let museum = await prisma.museum.findFirst({
    where: {
      OR: [
        { slug: slug },
        { name: { contains: name, mode: 'insensitive' } }
      ]
    }
  });

  if (!museum) {
    // Create new museum
    const id = crypto.randomUUID();
    museum = await prisma.museum.create({
      data: {
        id,
        slug,
        name,
        city,
        country,
        updatedAt: new Date()
      }
    });
    console.log(`    Created new museum: ${name}`);
  }

  return museum;
}

/**
 * Generate artwork slug
 */
function generateArtworkSlug(artistSlug, title) {
  const titleSlug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);

  return `${artistSlug}-${titleSlug}`;
}

/**
 * Main import function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('WIKIART IMPORT');
  console.log(DRY_RUN ? '(DRY RUN - No changes will be made)' : '');
  console.log('='.repeat(70));

  const csvPath = path.resolve(CSV_FILE);
  if (!fs.existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  const rows = parseCSV(csvPath);
  console.log(`\nLoaded ${rows.length} rows from CSV\n`);

  // Filter to only rows with museum locations
  const importable = rows.filter(r => r.museumLocation && r.museumLocation.trim());
  const skipped = rows.length - importable.length;

  console.log(`Importable (have museum location): ${importable.length}`);
  console.log(`Skipped (no museum location): ${skipped}\n`);

  let imported = 0;
  let failed = 0;
  let alreadyExists = 0;

  for (let i = 0; i < importable.length; i++) {
    const row = importable[i];
    console.log(`[${i + 1}/${importable.length}] ${row.artworkTitle}`);
    console.log(`    Artist: ${row.artistName}`);
    console.log(`    Museum: ${row.museumLocation}`);

    try {
      // Find artist
      const artist = await prisma.artist.findUnique({
        where: { slug: row.artistSlug }
      });

      if (!artist) {
        console.log(`    ✗ Artist not found: ${row.artistSlug}`);
        failed++;
        continue;
      }

      // Check if artwork already exists
      const artworkSlug = generateArtworkSlug(row.artistSlug, row.artworkTitle);
      const existing = await prisma.artwork.findFirst({
        where: {
          OR: [
            { slug: artworkSlug },
            {
              title: row.artworkTitle,
              artistId: artist.id
            }
          ]
        }
      });

      if (existing) {
        console.log(`    → Already exists: ${existing.slug}`);
        alreadyExists++;
        continue;
      }

      // Get the actual image URL
      await sleep(DELAY_MS);
      let imageUrl = await getActualImageUrl(row.wikiartUrl);

      if (!imageUrl) {
        // Fall back to estimated URL
        imageUrl = row.imageUrl;
        console.log(`    → Using estimated image URL`);
      }

      if (DRY_RUN) {
        console.log(`    [DRY RUN] Would create artwork with:`);
        console.log(`      - Slug: ${artworkSlug}`);
        console.log(`      - Image: ${imageUrl}`);
        imported++;
        continue;
      }

      // Find or create museum
      const museum = await findOrCreateMuseum(row.museumLocation);

      // Create artwork
      const id = crypto.randomUUID();
      await prisma.artwork.create({
        data: {
          id,
          slug: artworkSlug,
          title: row.artworkTitle,
          imageUrl,
          imageAttribution: 'WikiArt (Public Domain)',
          artistId: artist.id,
          museumId: museum.id,
          isPermanent: true,
          searchVolumeTier: 3, // Default, can be updated later
          updatedAt: new Date()
        }
      });

      console.log(`    ✓ Imported: ${artworkSlug}`);
      imported++;

    } catch (err) {
      console.log(`    ✗ ERROR: ${err.message}`);
      failed++;
    }

    console.log('');
  }

  // Summary
  console.log('='.repeat(70));
  console.log('IMPORT SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total in CSV: ${rows.length}`);
  console.log(`Skipped (no museum): ${skipped}`);
  console.log(`Already existed: ${alreadyExists}`);
  console.log(`Successfully imported: ${imported}`);
  console.log(`Failed: ${failed}`);

  if (DRY_RUN) {
    console.log('\nThis was a dry run. Run without --dry-run to actually import.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
