/**
 * Quick Monet Museum Enrichment
 *
 * Adds known museum locations for famous Monet paintings
 * using a hardcoded lookup of well-documented works.
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../data/wikiart-gaps/monet-gaps.csv');
const OUTPUT_FILE = path.join(__dirname, '../data/wikiart-gaps/monet-gaps-enriched.csv');

// Known museum locations for famous Monet works
// Format: title fragment -> museum name
const KNOWN_MUSEUMS = {
  // Musée d'Orsay, Paris
  'impression sunrise': 'Musée Marmottan Monet, Paris',
  'impression soleil levant': 'Musée Marmottan Monet, Paris',
  'blue water lilies': 'Musée d\'Orsay, Paris',
  'regatta at argenteuil': 'Musée d\'Orsay, Paris',
  'the magpie': 'Musée d\'Orsay, Paris',
  'coquelicots': 'Musée d\'Orsay, Paris',
  'poppies at argenteuil': 'Musée d\'Orsay, Paris',
  'gare saint-lazare': 'Musée d\'Orsay, Paris',
  'saint-lazare station': 'Musée d\'Orsay, Paris',
  'rouen cathedral': 'Musée d\'Orsay, Paris',
  'parliament': 'Musée d\'Orsay, Paris',
  'dejeuner sur l\'herbe': 'Musée d\'Orsay, Paris',
  'luncheon on the grass': 'Musée d\'Orsay, Paris',
  'women in the garden': 'Musée d\'Orsay, Paris',
  'femmes au jardin': 'Musée d\'Orsay, Paris',
  'la pie': 'Musée d\'Orsay, Paris',

  // Musée de l'Orangerie, Paris (Water Lilies murals)
  'nympheas': 'Musée de l\'Orangerie, Paris',
  'water lilies mural': 'Musée de l\'Orangerie, Paris',

  // Musée Marmottan Monet, Paris
  'marmottan': 'Musée Marmottan Monet, Paris',
  'tulip fields': 'Musée Marmottan Monet, Paris',

  // Metropolitan Museum of Art, New York
  'garden at sainte-adresse': 'Metropolitan Museum of Art, New York',
  'terrace at sainte-adresse': 'Metropolitan Museum of Art, New York',
  'la grenouillere met': 'Metropolitan Museum of Art, New York',
  'bridge over a pond': 'Metropolitan Museum of Art, New York',
  'japanese bridge': 'Metropolitan Museum of Art, New York',
  'water lily pond': 'Metropolitan Museum of Art, New York',
  'haystacks': 'Various museums',
  'haystack': 'Various museums',

  // Art Institute of Chicago
  'stacks of wheat': 'Art Institute of Chicago',
  'water lilies 1906': 'Art Institute of Chicago',
  'arrival of the normandy train': 'Art Institute of Chicago',

  // National Gallery, London
  'thames below westminster': 'National Gallery, London',
  'water-lily pond': 'National Gallery, London',
  'bathers at la grenouillere': 'National Gallery, London',
  'la grenouillere': 'National Gallery, London',

  // National Gallery of Art, Washington DC
  'artist\'s garden at vetheuil': 'National Gallery of Art, Washington DC',
  'palazzo da mula': 'National Gallery of Art, Washington DC',
  'woman with a parasol': 'National Gallery of Art, Washington DC',

  // Museum of Fine Arts, Boston
  'la japonaise': 'Museum of Fine Arts, Boston',
  'camille monet in japanese costume': 'Museum of Fine Arts, Boston',
  'grainstack': 'Museum of Fine Arts, Boston',

  // Pushkin Museum, Moscow
  'luncheon in the grass': 'Pushkin Museum, Moscow',
  'boulevard des capucines': 'Pushkin Museum, Moscow',

  // Hermitage, St. Petersburg
  'lady in the garden': 'Hermitage Museum, St. Petersburg',
  'waterloo bridge': 'Hermitage Museum, St. Petersburg',

  // Courtauld Gallery, London
  'antibes': 'Courtauld Gallery, London',

  // Other major museums
  'cliff walk at pourville': 'Art Institute of Chicago',
  'bordighera': 'Art Institute of Chicago',
  'fishing boats': 'Various museums',
  'seine': 'Various museums',
  'giverny': 'Various museums',
  'argenteuil': 'Various museums',
  'etretat': 'Various museums',
  'venice': 'Various museums',
  'london': 'Various museums',
};

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

function findMuseum(title) {
  const lowerTitle = title.toLowerCase();

  for (const [fragment, museum] of Object.entries(KNOWN_MUSEUMS)) {
    if (lowerTitle.includes(fragment)) {
      return museum;
    }
  }

  return '';
}

async function main() {
  console.log('Quick Monet Museum Enrichment');
  console.log('='.repeat(50));

  const rows = parseCSV(INPUT_FILE);
  console.log(`Loaded ${rows.length} artworks\n`);

  let found = 0;
  let notFound = 0;

  const enrichedRows = rows.map(row => {
    const museum = findMuseum(row.artworkTitle);
    if (museum) {
      found++;
      row.museumLocation = museum;
      row.notes = 'Known location';
    } else {
      notFound++;
    }
    return row;
  });

  // Write output
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
  fs.writeFileSync(OUTPUT_FILE, csvContent);

  console.log(`Found museum for: ${found} artworks`);
  console.log(`No museum found: ${notFound} artworks`);
  console.log(`\nOutput saved to: ${OUTPUT_FILE}`);

  // Show some matches
  console.log('\nSample matches:');
  enrichedRows
    .filter(r => r.museumLocation)
    .slice(0, 10)
    .forEach(r => console.log(`  - ${r.artworkTitle} → ${r.museumLocation}`));
}

main().catch(console.error);
