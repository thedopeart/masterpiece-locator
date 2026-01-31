const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// B2 Step 1: Fetch highlighted sculptures from Met API
// Departments: 10 (Egyptian), 12 (European Sculpture), 13 (Greek & Roman)

const MET_BASE = 'https://collectionapi.metmuseum.org/public/collection/v1';
const DEPARTMENTS = [
  { id: 13, name: 'Greek and Roman Art' },
  { id: 12, name: 'European Sculpture and Decorative Arts' },
  { id: 10, name: 'Egyptian Art' },
];

const SCULPTURE_CLASSIFICATIONS = [
  'Stone Sculpture', 'Sculpture', 'Metalwork-Sculpture', 'Sculpture-Architectural',
  'Bronze', 'Marble', 'Terracotta', 'Limestone', 'Granite', 'Sandstone',
  'Sculpture-Wood', 'Sculpture-Stone', 'Alabaster',
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function parseYear(dateStr) {
  if (!dateStr) return null;
  // Try patterns: "1504", "ca. 1500", "1st century", "2nd century B.C.", "1500–1510"
  const bcMatch = dateStr.match(/(\d+)\s*(?:B\.?C\.?|BCE)/i);
  if (bcMatch) return -parseInt(bcMatch[1]);
  const adMatch = dateStr.match(/(\d{3,4})/);
  if (adMatch) return parseInt(adMatch[1]);
  const centuryMatch = dateStr.match(/(\d+)(?:st|nd|rd|th)\s*century/i);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1]);
    const isBC = /B\.?C\.?|BCE/i.test(dateStr);
    return isBC ? -(century * 100) : (century - 1) * 100 + 50;
  }
  return null;
}

async function fetchJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url);
    if (res.ok) return res.json();
    if (res.status === 403 || res.status === 429) {
      if (i < retries - 1) {
        const wait = (i + 1) * 2000;
        await sleep(wait);
        continue;
      }
    }
    return null; // Skip on persistent failure
  }
  return null;
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  // Get existing slugs to skip duplicates
  const existing = await prisma.artwork.findMany({
    where: { artworkType: 'sculpture' },
    select: { slug: true, title: true }
  });
  const existingSlugs = new Set(existing.map(a => a.slug));
  const existingTitles = new Set(existing.map(a => a.title.toLowerCase()));
  console.log(`Existing sculptures in DB: ${existingSlugs.size}`);

  const results = [];
  let totalFetched = 0;
  let totalSkipped = 0;
  let totalKept = 0;

  for (const dept of DEPARTMENTS) {
    console.log(`\n=== ${dept.name} (dept ${dept.id}) ===`);

    // Search for highlighted objects
    const searchUrl = `${MET_BASE}/search?departmentId=${dept.id}&isHighlight=true&q=*`;
    const searchData = await fetchJSON(searchUrl);
    if (!searchData) {
      console.log(`  Skipped department (API unavailable)`);
      continue;
    }
    const objectIDs = searchData.objectIDs || [];
    console.log(`Found ${objectIDs.length} highlighted objects`);

    for (const objId of objectIDs) {
      totalFetched++;
      try {
        await sleep(200); // Rate limiting
        const obj = await fetchJSON(`${MET_BASE}/objects/${objId}`);
        if (!obj) { totalSkipped++; continue; }

        // Filter: must be a sculpture-like classification
        const classification = obj.classification || '';
        const objectName = obj.objectName || '';
        const medium = (obj.medium || '').toLowerCase();

        const isSculpture =
          SCULPTURE_CLASSIFICATIONS.some(c => classification.toLowerCase().includes(c.toLowerCase())) ||
          objectName.toLowerCase().includes('statue') ||
          objectName.toLowerCase().includes('sculpture') ||
          objectName.toLowerCase().includes('bust') ||
          objectName.toLowerCase().includes('relief') ||
          objectName.toLowerCase().includes('figure') ||
          objectName.toLowerCase().includes('sphinx') ||
          medium.includes('marble') ||
          medium.includes('bronze') ||
          medium.includes('limestone') ||
          medium.includes('granite');

        if (!isSculpture) {
          totalSkipped++;
          continue;
        }

        // Skip if no image or not public domain
        if (!obj.primaryImage || !obj.isPublicDomain) {
          totalSkipped++;
          continue;
        }

        const slug = slugify(obj.title);
        const titleLower = obj.title.toLowerCase();

        // Skip if already in DB
        if (existingSlugs.has(slug) || existingTitles.has(titleLower)) {
          totalSkipped++;
          continue;
        }

        // Also skip if we already added this slug in this run
        if (results.some(r => r.slug === slug)) {
          totalSkipped++;
          continue;
        }

        results.push({
          metObjectID: obj.objectID,
          title: obj.title,
          slug,
          year: parseYear(obj.objectDate),
          objectDate: obj.objectDate || null,
          medium: obj.medium || null,
          dimensions: obj.dimensions || null,
          imageUrl: obj.primaryImage,
          artistName: obj.artistDisplayName || null,
          artistNationality: obj.artistNationality || null,
          classification: obj.classification || null,
          department: dept.name,
          metUrl: obj.objectURL || null,
        });
        totalKept++;
        process.stdout.write(`  ✓ ${obj.title.slice(0, 60)}\n`);

      } catch (err) {
        console.error(`  ✗ Object ${objId}: ${err.message}`);
      }
    }
  }

  // Write output
  const outPath = path.join(__dirname, 'met-sculptures-output.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));

  console.log(`\n=== Summary ===`);
  console.log(`Total API objects fetched: ${totalFetched}`);
  console.log(`Skipped (not sculpture / no image / duplicate): ${totalSkipped}`);
  console.log(`Kept: ${totalKept}`);
  console.log(`Output: ${outPath}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
