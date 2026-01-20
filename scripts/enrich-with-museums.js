/**
 * Enrich WikiArt Gaps with Museum Locations
 *
 * This script takes a gap CSV and searches museum APIs to find where
 * each artwork is actually located. It outputs an enriched CSV with
 * museum locations pre-filled.
 *
 * Searches:
 * - Metropolitan Museum of Art (NY)
 * - Rijksmuseum (Amsterdam)
 * - Art Institute of Chicago
 * - Cleveland Museum of Art
 * - Wikipedia/Wikidata for location info
 *
 * Usage: node scripts/enrich-with-museums.js --file=data/wikiart-gaps/gaps.csv
 */

const fs = require('fs');
const path = require('path');

const USER_AGENT = 'MasterpieceLocator/1.0 (Educational Art Research)';
const DELAY_MS = 400;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const CSV_FILE = getArg('file');

if (!CSV_FILE) {
  console.error('Usage: node scripts/enrich-with-museums.js --file=path/to/gaps.csv');
  process.exit(1);
}

/**
 * Parse CSV file
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim());
  const dataLines = lines.slice(1);

  return dataLines.map(line => {
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
 * Search Metropolitan Museum of Art
 */
async function searchMet(artistName, artworkTitle) {
  try {
    // Search for the artwork
    const query = encodeURIComponent(`${artworkTitle} ${artistName}`);
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`;

    const searchRes = await fetch(searchUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();

    if (!searchData.objectIDs?.length) return null;

    // Check first few results
    for (const objectId of searchData.objectIDs.slice(0, 3)) {
      await sleep(100);

      const objRes = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!objRes.ok) continue;
      const obj = await objRes.json();

      // Check if this matches our artwork
      const titleMatch = normalizeForMatch(obj.title).includes(normalizeForMatch(artworkTitle)) ||
                        normalizeForMatch(artworkTitle).includes(normalizeForMatch(obj.title));
      const artistMatch = obj.artistDisplayName?.toLowerCase().includes(artistName.split(' ').pop().toLowerCase());

      if (titleMatch && artistMatch) {
        return {
          museum: 'Metropolitan Museum of Art, New York',
          imageUrl: obj.primaryImage || obj.primaryImageSmall,
          galleryNumber: obj.GalleryNumber || null,
          source: 'Met API'
        };
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Search Rijksmuseum
 */
async function searchRijksmuseum(artistName, artworkTitle) {
  // Note: Rijksmuseum requires an API key, but we can try without for basic searches
  try {
    const query = encodeURIComponent(`${artworkTitle}`);
    const maker = encodeURIComponent(artistName.split(' ').pop()); // Last name

    // Try the public collection page (no API key needed for basic info)
    const searchUrl = `https://www.rijksmuseum.nl/api/en/collection?q=${query}&involvedMaker=${maker}&ps=5&format=json`;

    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!res.ok) return null;
    const data = await res.json();

    if (!data.artObjects?.length) return null;

    for (const obj of data.artObjects) {
      const titleMatch = normalizeForMatch(obj.title).includes(normalizeForMatch(artworkTitle)) ||
                        normalizeForMatch(artworkTitle).includes(normalizeForMatch(obj.title));

      if (titleMatch) {
        return {
          museum: 'Rijksmuseum, Amsterdam',
          imageUrl: obj.webImage?.url || null,
          source: 'Rijksmuseum API'
        };
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Search Art Institute of Chicago
 */
async function searchArtIC(artistName, artworkTitle) {
  try {
    const query = encodeURIComponent(`${artworkTitle} ${artistName}`);
    const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=5&fields=id,title,artist_title,image_id,gallery_title`;

    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!res.ok) return null;
    const data = await res.json();

    if (!data.data?.length) return null;

    for (const obj of data.data) {
      const titleMatch = normalizeForMatch(obj.title).includes(normalizeForMatch(artworkTitle)) ||
                        normalizeForMatch(artworkTitle).includes(normalizeForMatch(obj.title));
      const artistMatch = obj.artist_title?.toLowerCase().includes(artistName.split(' ').pop().toLowerCase());

      if (titleMatch && artistMatch) {
        let imageUrl = null;
        if (obj.image_id) {
          imageUrl = `https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`;
        }

        return {
          museum: 'Art Institute of Chicago',
          imageUrl,
          galleryTitle: obj.gallery_title || null,
          source: 'AIC API'
        };
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Search Cleveland Museum of Art
 */
async function searchCleveland(artistName, artworkTitle) {
  try {
    const query = encodeURIComponent(`${artworkTitle}`);
    const searchUrl = `https://openaccess-api.clevelandart.org/api/artworks?q=${query}&limit=5`;

    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!res.ok) return null;
    const data = await res.json();

    if (!data.data?.length) return null;

    for (const obj of data.data) {
      const titleMatch = normalizeForMatch(obj.title).includes(normalizeForMatch(artworkTitle)) ||
                        normalizeForMatch(artworkTitle).includes(normalizeForMatch(obj.title));
      const artistMatch = obj.creators?.[0]?.description?.toLowerCase().includes(artistName.split(' ').pop().toLowerCase());

      if (titleMatch && artistMatch) {
        return {
          museum: 'Cleveland Museum of Art',
          imageUrl: obj.images?.web?.url || null,
          source: 'Cleveland API'
        };
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Search Wikipedia for artwork location info
 */
async function searchWikipedia(artistName, artworkTitle) {
  try {
    // Search for the artwork page
    const query = encodeURIComponent(`${artworkTitle} ${artistName} painting`);
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&srlimit=3`;

    const searchRes = await fetch(searchUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();

    if (!searchData.query?.search?.length) return null;

    for (const result of searchData.query.search) {
      // Get the page content
      const pageUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(result.title)}&prop=extracts&exintro=true&explaintext=true&format=json`;

      const pageRes = await fetch(pageUrl, {
        headers: { 'User-Agent': USER_AGENT }
      });

      if (!pageRes.ok) continue;
      const pageData = await pageRes.json();

      const pages = Object.values(pageData.query?.pages || {});
      if (!pages.length || !pages[0].extract) continue;

      const extract = pages[0].extract;

      // Look for museum mentions in the intro
      const museumPatterns = [
        /(?:housed|located|displayed|held|kept)\s+(?:at|in)\s+(?:the\s+)?([A-Z][^,\.]+(?:Museum|Gallery|Collection|Institute)[^,\.]*)/i,
        /(?:is\s+)?(?:now\s+)?(?:in|at)\s+(?:the\s+)?([A-Z][^,\.]+(?:Museum|Gallery|Collection|Institute)[^,\.]*)/i,
        /(Louvre|Prado|Uffizi|National Gallery|Hermitage|MoMA|Tate|Guggenheim)[^,\.]*/i,
        /collection\s+of\s+(?:the\s+)?([A-Z][^,\.]+)/i
      ];

      for (const pattern of museumPatterns) {
        const match = extract.match(pattern);
        if (match) {
          let museum = match[1] || match[0];
          museum = museum.trim().replace(/^the\s+/i, '');

          // Try to add city if not present
          const cityPatterns = [
            /in\s+(Paris|London|Madrid|Florence|New York|Amsterdam|Vienna|Berlin|Rome|St\.?\s*Petersburg)/i,
            /(Paris|London|Madrid|Florence|New York|Amsterdam|Vienna|Berlin|Rome)/i
          ];

          for (const cityPattern of cityPatterns) {
            const cityMatch = extract.match(cityPattern);
            if (cityMatch && !museum.includes(cityMatch[1])) {
              museum = `${museum}, ${cityMatch[1]}`;
              break;
            }
          }

          return {
            museum,
            source: 'Wikipedia'
          };
        }
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Try WikiArt page itself for museum info
 */
async function searchWikiArtPage(wikiartUrl) {
  try {
    const res = await fetch(wikiartUrl, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!res.ok) return null;
    const html = await res.text();

    // WikiArt sometimes has location info
    const locationPatterns = [
      /Location:\s*<[^>]+>([^<]+)</i,
      /Museum:\s*<[^>]+>([^<]+)</i,
      /(?:Located|Collection):\s*([^<\n]+)/i
    ];

    for (const pattern of locationPatterns) {
      const match = html.match(pattern);
      if (match) {
        return {
          museum: match[1].trim(),
          source: 'WikiArt'
        };
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Normalize string for matching
 */
function normalizeForMatch(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Main enrichment function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('MUSEUM LOCATION ENRICHMENT');
  console.log('='.repeat(70));
  console.log('\nSearching museum APIs to find artwork locations...\n');

  const csvPath = path.resolve(CSV_FILE);
  if (!fs.existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  const rows = parseCSV(csvPath);
  console.log(`Loaded ${rows.length} artworks to enrich\n`);

  let found = 0;
  let notFound = 0;
  const enrichedRows = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    console.log(`[${i + 1}/${rows.length}] ${row.artworkTitle}`);
    console.log(`    Artist: ${row.artistName}`);

    // Skip if already has museum
    if (row.museumLocation) {
      console.log(`    ✓ Already has: ${row.museumLocation}\n`);
      enrichedRows.push(row);
      found++;
      continue;
    }

    await sleep(DELAY_MS);

    // Try each source in order of reliability
    let result = null;

    // 1. Met Museum
    if (!result) {
      result = await searchMet(row.artistName, row.artworkTitle);
      if (result) console.log(`    → Found at ${result.museum} (${result.source})`);
    }

    // 2. Art Institute of Chicago
    if (!result) {
      await sleep(200);
      result = await searchArtIC(row.artistName, row.artworkTitle);
      if (result) console.log(`    → Found at ${result.museum} (${result.source})`);
    }

    // 3. Cleveland Museum
    if (!result) {
      await sleep(200);
      result = await searchCleveland(row.artistName, row.artworkTitle);
      if (result) console.log(`    → Found at ${result.museum} (${result.source})`);
    }

    // 4. WikiArt page itself
    if (!result && row.wikiartUrl) {
      await sleep(200);
      result = await searchWikiArtPage(row.wikiartUrl);
      if (result) console.log(`    → Found at ${result.museum} (${result.source})`);
    }

    // 5. Wikipedia
    if (!result) {
      await sleep(200);
      result = await searchWikipedia(row.artistName, row.artworkTitle);
      if (result) console.log(`    → Found at ${result.museum} (${result.source})`);
    }

    if (result) {
      row.museumLocation = result.museum;
      row.notes = result.source;
      // Update image URL if we got a better one from museum
      if (result.imageUrl && !row.imageUrl) {
        row.imageUrl = result.imageUrl;
      }
      found++;
    } else {
      console.log(`    ✗ Location not found`);
      notFound++;
    }

    enrichedRows.push(row);
    console.log('');
  }

  // Write enriched CSV
  const outputPath = csvPath.replace('.csv', '-enriched.csv');

  const csvHeader = [
    'Artist Name',
    'Artist Slug',
    'Death Year',
    'Artwork Title',
    'Artwork Slug',
    'WikiArt URL',
    'Image URL',
    'Museum Location',
    'Notes'
  ].join(',');

  const csvRows = enrichedRows.map(row => [
    `"${(row.artistName || '').replace(/"/g, '""')}"`,
    row.artistSlug,
    row.deathYear || '',
    `"${(row.artworkTitle || '').replace(/"/g, '""')}"`,
    row.artworkSlug,
    row.wikiartUrl,
    row.imageUrl,
    `"${(row.museumLocation || '').replace(/"/g, '""')}"`,
    `"${(row.notes || '').replace(/"/g, '""')}"`
  ].join(','));

  const csvContent = [csvHeader, ...csvRows].join('\n');
  fs.writeFileSync(outputPath, csvContent);

  // Summary
  console.log('='.repeat(70));
  console.log('ENRICHMENT SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total artworks: ${rows.length}`);
  console.log(`Found museum location: ${found} (${Math.round(found/rows.length*100)}%)`);
  console.log(`Location not found: ${notFound}`);
  console.log(`\nEnriched CSV saved to: ${outputPath}`);
  console.log('\nNext steps:');
  console.log('1. Review the enriched CSV');
  console.log('2. Manually fill in remaining museum locations if desired');
  console.log('3. Run: node scripts/import-from-wikiart.js --file=' + outputPath);
}

main().catch(console.error);
