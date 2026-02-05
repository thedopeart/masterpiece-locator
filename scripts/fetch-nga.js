/**
 * Fetch National Gallery of Art (Washington DC) data
 *
 * NGA has 130,000+ artworks with 51,000+ CC0 images available.
 * Data source: https://github.com/NationalGalleryOfArt/opendata
 *
 * This script:
 * 1. Downloads objects and images CSVs
 * 2. Joins them to get artworks with images
 * 3. Filters for paintings with public domain images
 * 4. Outputs high-priority additions
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'nga-data');
const BASE_URL = 'https://raw.githubusercontent.com/NationalGalleryOfArt/opendata/main/data';

// Files to download
const FILES = [
  'objects.csv',
  'published_images.csv',
  'constituents.csv',
  'objects_constituents.csv'
];

// Famous NGA paintings we want to ensure we have
const FAMOUS_PAINTINGS = [
  "Ginevra de' Benci",
  "The Alba Madonna",
  "Watson and the Shark",
  "The Voyage of Life",
  "The Small Cowper Madonna",
  "Daniel in the Lions' Den",
  "Symphony in White",
  "The Sacrament of the Last Supper",
  "Aristotle with a Bust of Homer",
  "Portrait of a Lady",
  "Girl with the Red Hat",
  "Madonna and Child",
  "Saint George and the Dragon",
  "The Feast of the Gods",
  "Portrait of a Young Man"
];

function downloadFile(filename) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/${filename}`;
    const filepath = path.join(DATA_DIR, filename);

    console.log(`Downloading ${filename}...`);

    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`  ✓ Downloaded ${filename}`);
            resolve(filepath);
          });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  ✓ Downloaded ${filename}`);
          resolve(filepath);
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

function parseCSV(content) {
  const lines = content.split('\n');
  const headers = parseCSVLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = parseCSVLine(lines[i]);
      const row = {};
      headers.forEach((h, idx) => {
        row[h] = values[idx] || '';
      });
      rows.push(row);
    }
  }

  return rows;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

async function main() {
  // Create data directory
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  console.log('=== NGA Data Fetcher ===\n');

  // Download files
  for (const file of FILES) {
    try {
      await downloadFile(file);
    } catch (err) {
      console.error(`  ✗ Failed to download ${file}:`, err.message);
    }
  }

  console.log('\nParsing data...\n');

  // Parse objects
  const objectsContent = fs.readFileSync(path.join(DATA_DIR, 'objects.csv'), 'utf8');
  const objects = parseCSV(objectsContent);
  console.log(`Total objects: ${objects.length.toLocaleString()}`);

  // Parse images
  const imagesContent = fs.readFileSync(path.join(DATA_DIR, 'published_images.csv'), 'utf8');
  const images = parseCSV(imagesContent);
  console.log(`Total images: ${images.length.toLocaleString()}`);

  // Create image lookup by object ID
  const imagesByObjectId = {};
  images.forEach(img => {
    const objectId = img.depictstmsobjectid;
    if (objectId && img.viewtype === 'primary') {
      imagesByObjectId[objectId] = img;
    }
  });

  // Filter for paintings with images
  const paintingsWithImages = objects.filter(obj => {
    const classification = (obj.classification || '').toLowerCase();
    const hasImage = imagesByObjectId[obj.objectid];
    return (
      classification === 'painting' &&
      hasImage &&
      obj.title
    );
  });

  console.log(`Paintings with images: ${paintingsWithImages.length.toLocaleString()}`);

  // Find famous paintings
  console.log('\n=== Famous Paintings Status ===\n');

  const foundFamous = [];
  const missingFamous = [];

  for (const title of FAMOUS_PAINTINGS) {
    const found = paintingsWithImages.find(p =>
      p.title.toLowerCase().includes(title.toLowerCase())
    );

    if (found) {
      const img = imagesByObjectId[found.objectid];
      foundFamous.push({
        title: found.title,
        artist: found.attribution,
        date: found.displaydate,
        objectId: found.objectid,
        imageUrl: img?.iiifthumburl?.replace('!200,200', '!800,800')
      });
      console.log(`✓ ${title}`);
      console.log(`  → ${found.title} (${found.attribution || 'Unknown'})`);
    } else {
      missingFamous.push(title);
      console.log(`✗ ${title} - NOT FOUND`);
    }
  }

  // Output statistics by classification
  console.log('\n=== Classifications ===\n');

  const classifications = {};
  objects.forEach(obj => {
    const cls = obj.classification || 'Unknown';
    classifications[cls] = (classifications[cls] || 0) + 1;
  });

  Object.entries(classifications)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([cls, count]) => {
      console.log(`${cls}: ${count.toLocaleString()}`);
    });

  // Output top artists
  console.log('\n=== Top Artists (Paintings with Images) ===\n');

  const artistCounts = {};
  paintingsWithImages.forEach(p => {
    const artist = p.attribution || 'Unknown';
    artistCounts[artist] = (artistCounts[artist] || 0) + 1;
  });

  Object.entries(artistCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .forEach(([artist, count]) => {
      console.log(`${artist}: ${count}`);
    });

  // Save results
  const outputPath = path.join(DATA_DIR, 'nga-paintings-with-images.json');
  fs.writeFileSync(outputPath, JSON.stringify({
    totalPaintings: paintingsWithImages.length,
    famousFound: foundFamous,
    famousMissing: missingFamous,
    sample: paintingsWithImages.slice(0, 100).map(p => ({
      objectId: p.objectid,
      title: p.title,
      artist: p.attribution,
      date: p.displaydate,
      medium: p.medium,
      dimensions: p.dimensions,
      imageUrl: imagesByObjectId[p.objectid]?.iiifthumburl?.replace('!200,200', '!800,800')
    }))
  }, null, 2));

  console.log(`\nResults saved to: ${outputPath}`);
}

main().catch(console.error);
