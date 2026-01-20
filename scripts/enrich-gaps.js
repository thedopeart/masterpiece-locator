/**
 * Enrich WikiArt Gaps
 *
 * This script takes the gaps CSV and:
 * 1. Selects up to N artworks per artist
 * 2. Fetches museum location from each WikiArt page
 * 3. Outputs an enriched CSV ready for import
 *
 * Usage: node scripts/enrich-gaps.js [--limit=15] [--artist=van-gogh]
 */

const fs = require('fs');
const path = require('path');

const USER_AGENT = 'MasterpieceLocator/1.0 (Educational Art Research)';
const DELAY_MS = 300; // Faster since we're just scraping
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const LIMIT_PER_ARTIST = parseInt(getArg('limit')) || 15;
const SPECIFIC_ARTIST = getArg('artist');
const INPUT_FILE = getArg('input') || 'data/wikiart-gaps/wikiart-gaps-2026-01-19.csv';
const OUTPUT_DIR = path.join(__dirname, '../data/wikiart-gaps');

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
      museumLocation: fields[7]?.replace(/^"|"$/g, '') || '',
      notes: fields[8]?.replace(/^"|"$/g, '') || ''
    };
  });
}

/**
 * Fetch museum location from WikiArt page
 */
async function fetchMuseumLocation(wikiartUrl) {
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

    // WikiArt shows location in a few places - look for common patterns
    // Pattern 1: "Location:" label followed by museum name
    const locationMatch = html.match(/Location:<\/span>\s*<span[^>]*>([^<]+)<\/span>/i);
    if (locationMatch) {
      return locationMatch[1].trim();
    }

    // Pattern 2: Look for museum links
    const museumLinkMatch = html.match(/href="\/en\/museums\/[^"]+"\s*>([^<]+)</i);
    if (museumLinkMatch) {
      return museumLinkMatch[1].trim();
    }

    // Pattern 3: Look in structured data
    const ldJsonMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
    if (ldJsonMatch) {
      try {
        const data = JSON.parse(ldJsonMatch[1]);
        if (data.contentLocation?.name) {
          return data.contentLocation.name;
        }
      } catch (e) {
        // Ignore JSON parse errors
      }
    }

    // Pattern 4: Look for "Private collection" or similar
    if (html.includes('Private collection') || html.includes('Private Collection')) {
      return 'Private Collection';
    }

    return null;

  } catch (err) {
    return null;
  }
}

/**
 * Get actual image URL from WikiArt page
 */
async function getActualImageUrl(wikiartUrl, html) {
  if (!html) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(wikiartUrl, {
        headers: { 'User-Agent': USER_AGENT },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      if (!response.ok) return null;
      html = await response.text();
    } catch (err) {
      return null;
    }
  }

  // Look for og:image meta tag
  const ogMatch = html.match(/og:image"\s*content="([^"]+)"/);
  if (ogMatch && ogMatch[1]) {
    let url = ogMatch[1];
    if (url.includes('!')) {
      url = url.replace(/![^.]+\./, '!Large.');
    }
    return url;
  }

  return null;
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('ENRICH WIKIART GAPS');
  console.log('='.repeat(70));
  console.log(`\nSelecting up to ${LIMIT_PER_ARTIST} artworks per artist`);
  console.log(`Fetching museum locations from WikiArt pages\n`);

  // Read gaps CSV
  const inputPath = path.resolve(INPUT_FILE);
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  const allGaps = parseCSV(inputPath);
  console.log(`Loaded ${allGaps.length} total gaps\n`);

  // Group by artist
  const byArtist = {};
  for (const gap of allGaps) {
    if (SPECIFIC_ARTIST && gap.artistSlug !== SPECIFIC_ARTIST) continue;

    if (!byArtist[gap.artistSlug]) {
      byArtist[gap.artistSlug] = {
        name: gap.artistName,
        slug: gap.artistSlug,
        deathYear: gap.deathYear,
        artworks: []
      };
    }
    byArtist[gap.artistSlug].artworks.push(gap);
  }

  const artists = Object.values(byArtist);
  console.log(`Found ${artists.length} artists with gaps\n`);

  // Process each artist
  const enrichedGaps = [];
  let totalProcessed = 0;
  let totalWithLocation = 0;

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const selected = artist.artworks.slice(0, LIMIT_PER_ARTIST);

    console.log(`[${i + 1}/${artists.length}] ${artist.name} (${selected.length} artworks)`);

    for (const artwork of selected) {
      process.stdout.write(`  - ${artwork.artworkTitle.substring(0, 40)}... `);

      await sleep(DELAY_MS);

      // Fetch the WikiArt page
      let html = null;
      let museumLocation = null;
      let imageUrl = artwork.imageUrl;

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(artwork.wikiartUrl, {
          headers: { 'User-Agent': USER_AGENT },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          html = await response.text();

          // Extract museum location
          const locationMatch = html.match(/Location:<\/s[^>]*>\s*<s[^>]*>\s*<a[^>]*>([^<]+)<\/a>/i) ||
                               html.match(/Location:<\/s[^>]*>\s*<s[^>]*>([^<]+)<\/s/i);
          if (locationMatch) {
            museumLocation = locationMatch[1].trim();
          }

          // Check for Private Collection
          if (!museumLocation && (html.includes('Private collection') || html.includes('private collection'))) {
            museumLocation = 'Private Collection';
          }

          // Get actual image URL
          const ogMatch = html.match(/og:image"\s*content="([^"]+)"/);
          if (ogMatch && ogMatch[1]) {
            imageUrl = ogMatch[1];
            if (!imageUrl.includes('!')) {
              imageUrl = imageUrl.replace(/\.(jpg|png|jpeg)$/i, '!Large.$1');
            }
          }
        }
      } catch (err) {
        // Silent fail, continue
      }

      if (museumLocation) {
        console.log(`✓ ${museumLocation.substring(0, 30)}`);
        totalWithLocation++;
      } else {
        console.log('✗ No location');
      }

      enrichedGaps.push({
        ...artwork,
        imageUrl,
        museumLocation: museumLocation || ''
      });

      totalProcessed++;
    }

    console.log('');
  }

  // Write enriched CSV
  const timestamp = new Date().toISOString().split('T')[0];
  const outputPath = path.join(OUTPUT_DIR, `wikiart-gaps-${timestamp}-enriched.csv`);

  const csvHeader = [
    'Artist Name',
    'Artist Slug',
    'Death Year',
    'Artwork Title',
    'Artwork Slug',
    'WikiArt URL',
    'Estimated Image URL',
    'Museum Location',
    'Notes'
  ].join(',');

  const csvRows = enrichedGaps.map(gap => [
    `"${gap.artistName.replace(/"/g, '""')}"`,
    gap.artistSlug,
    gap.deathYear || '',
    `"${gap.artworkTitle.replace(/"/g, '""')}"`,
    gap.artworkSlug,
    gap.wikiartUrl,
    gap.imageUrl,
    `"${(gap.museumLocation || '').replace(/"/g, '""')}"`,
    `"${(gap.notes || '').replace(/"/g, '""')}"`
  ].join(','));

  fs.writeFileSync(outputPath, [csvHeader, ...csvRows].join('\n'));

  // Summary
  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Artists processed: ${artists.length}`);
  console.log(`Artworks processed: ${totalProcessed}`);
  console.log(`With museum location: ${totalWithLocation} (${Math.round(totalWithLocation/totalProcessed*100)}%)`);
  console.log(`Without location: ${totalProcessed - totalWithLocation}`);
  console.log(`\nEnriched CSV saved to: ${outputPath}`);
  console.log(`\nNext: Run import-from-wikiart.js with this file`);
}

main().catch(console.error);
