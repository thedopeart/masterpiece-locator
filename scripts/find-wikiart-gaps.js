/**
 * Find WikiArt Gaps
 *
 * This script compares your artist catalog against WikiArt to identify
 * missing artworks that could be imported.
 *
 * Features:
 * - Scans your database for all artists with deathYear < 1954 (public domain)
 * - Fetches their WikiArt page to see available artworks
 * - Compares against your existing artworks
 * - Outputs a CSV of gaps to fill
 *
 * Usage: node scripts/find-wikiart-gaps.js [--limit=10] [--artist=van-gogh]
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (Educational Art Research)';
const DELAY_MS = 1000; // Be respectful to WikiArt servers
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const LIMIT = parseInt(getArg('limit')) || null;
const SPECIFIC_ARTIST = getArg('artist');
const OUTPUT_DIR = path.join(__dirname, '../data/wikiart-gaps');

/**
 * Convert artist name to WikiArt URL slug
 * WikiArt uses lowercase with hyphens, e.g., "vincent-van-gogh"
 */
function toWikiArtSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Fetch artist's artworks from WikiArt
 * WikiArt doesn't have a public API, so we'll parse the HTML
 */
async function fetchWikiArtArtworks(artistSlug, artistName) {
  const variations = [
    artistSlug,
    toWikiArtSlug(artistName),
    artistSlug.replace(/-painter$/, ''),
    artistSlug.replace(/-artist$/, ''),
  ];

  for (const slug of [...new Set(variations)]) {
    try {
      // WikiArt has a JSON endpoint for artworks
      const url = `https://www.wikiart.org/en/${slug}/all-works/text-list`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(url, {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'text/html,application/xhtml+xml',
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        continue;
      }

      const html = await response.text();

      // Parse the artwork list from the HTML
      // WikiArt lists artworks in a specific format
      const artworks = [];

      // Pattern: <a href="/en/artist-name/artwork-name">Artwork Title</a>
      const linkPattern = /<a\s+href="\/en\/[^/]+\/([^"]+)"[^>]*>([^<]+)<\/a>/gi;
      let match;

      while ((match = linkPattern.exec(html)) !== null) {
        const artworkSlug = match[1];
        const title = match[2].trim();

        // Skip navigation links and non-artwork pages
        if (artworkSlug.includes('all-works') ||
            artworkSlug.includes('biography') ||
            artworkSlug.includes('similar-artists') ||
            artworkSlug === slug) {
          continue;
        }

        artworks.push({
          slug: artworkSlug,
          title: title,
          wikiartUrl: `https://www.wikiart.org/en/${slug}/${artworkSlug}`,
          imageUrl: `https://uploads2.wikiart.org/images/${slug}/${artworkSlug}.jpg`
        });
      }

      if (artworks.length > 0) {
        return { artistSlug: slug, artworks };
      }

    } catch (err) {
      // Try next variation
      continue;
    }
  }

  return null;
}

/**
 * Try to get the actual image URL from WikiArt artwork page
 */
async function getArtworkImageUrl(wikiartUrl) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(wikiartUrl, {
      headers: { 'User-Agent': USER_AGENT },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) return null;

    const html = await response.text();

    // Look for the main image URL in various patterns
    const patterns = [
      /og:image"\s*content="([^"]+)"/,
      /data-src="(https:\/\/uploads\d*\.wikiart\.org[^"]+)"/,
      /src="(https:\/\/uploads\d*\.wikiart\.org\/images\/[^"]+)"/
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        // Get a reasonable size (not thumbnail, not full)
        let url = match[1];
        // WikiArt uses !Large.jpg suffix for medium size
        if (!url.includes('!')) {
          url = url.replace(/\.jpg$/i, '!Large.jpg');
        }
        return url;
      }
    }

  } catch (err) {
    // Silent fail
  }

  return null;
}

/**
 * Normalize artwork title for comparison
 */
function normalizeTitle(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('WIKIART GAP FINDER');
  console.log('='.repeat(70));
  console.log('\nThis script identifies artworks on WikiArt that you\'re missing.\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get public domain artists from database
  const currentYear = new Date().getFullYear();
  const publicDomainYear = currentYear - 70; // Artist must have died 70+ years ago

  const whereClause = {
    deathYear: {
      not: null,
      lt: publicDomainYear
    }
  };

  if (SPECIFIC_ARTIST) {
    whereClause.slug = SPECIFIC_ARTIST;
  }

  let artists = await prisma.artist.findMany({
    where: whereClause,
    include: {
      Artwork: {
        select: {
          slug: true,
          title: true,
          imageUrl: true
        }
      }
    },
    orderBy: { name: 'asc' }
  });

  if (LIMIT) {
    artists = artists.slice(0, LIMIT);
  }

  console.log(`Found ${artists.length} public domain artists to check\n`);

  const allGaps = [];
  let processedCount = 0;
  let artistsWithGaps = 0;

  for (const artist of artists) {
    processedCount++;
    console.log(`[${processedCount}/${artists.length}] ${artist.name}`);
    console.log(`  Your artworks: ${artist.Artwork.length}`);

    await sleep(DELAY_MS);

    const wikiartData = await fetchWikiArtArtworks(artist.slug, artist.name);

    if (!wikiartData) {
      console.log(`  WikiArt: Not found or no artworks\n`);
      continue;
    }

    console.log(`  WikiArt artworks: ${wikiartData.artworks.length}`);

    // Create set of normalized titles you already have
    const existingTitles = new Set(
      artist.Artwork.map(a => normalizeTitle(a.title))
    );

    // Find gaps
    const gaps = wikiartData.artworks.filter(wa => {
      const normalizedWikiArt = normalizeTitle(wa.title);
      return !existingTitles.has(normalizedWikiArt);
    });

    if (gaps.length > 0) {
      artistsWithGaps++;
      console.log(`  GAPS FOUND: ${gaps.length} artworks you're missing`);

      // Add to master list
      for (const gap of gaps) {
        allGaps.push({
          artistName: artist.name,
          artistSlug: artist.slug,
          artistDeathYear: artist.deathYear,
          artworkTitle: gap.title,
          artworkSlug: gap.slug,
          wikiartUrl: gap.wikiartUrl,
          estimatedImageUrl: gap.imageUrl,
          museumLocation: '', // TO BE FILLED MANUALLY
          notes: ''
        });
      }
    } else {
      console.log(`  No gaps found`);
    }

    console.log('');
  }

  // Write results to CSV
  const timestamp = new Date().toISOString().split('T')[0];
  const csvPath = path.join(OUTPUT_DIR, `wikiart-gaps-${timestamp}.csv`);

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

  const csvRows = allGaps.map(gap => [
    `"${gap.artistName.replace(/"/g, '""')}"`,
    gap.artistSlug,
    gap.artistDeathYear,
    `"${gap.artworkTitle.replace(/"/g, '""')}"`,
    gap.artworkSlug,
    gap.wikiartUrl,
    gap.estimatedImageUrl,
    gap.museumLocation,
    gap.notes
  ].join(','));

  const csvContent = [csvHeader, ...csvRows].join('\n');
  fs.writeFileSync(csvPath, csvContent);

  // Summary
  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Artists checked: ${processedCount}`);
  console.log(`Artists with gaps: ${artistsWithGaps}`);
  console.log(`Total missing artworks: ${allGaps.length}`);
  console.log(`\nResults saved to: ${csvPath}`);
  console.log('\nNext steps:');
  console.log('1. Review the CSV and identify high-priority artworks');
  console.log('2. Research museum locations for each artwork');
  console.log('3. Run import-from-wikiart.js to add selected artworks');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
