const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// Fetch sculptures from Cleveland Museum of Art Open Access API
// API docs: https://openaccess-api.clevelandart.org/
// No auth required, CC0 images

const CMA_BASE = 'https://openaccess-api.clevelandart.org/api/artworks';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

async function fetchJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
      if (res.status === 429) {
        const wait = (i + 1) * 3000;
        console.log(`  Rate limited, waiting ${wait}ms...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      console.log(`  HTTP ${res.status} for ${url}`);
      return null;
    } catch (err) {
      console.log(`  Fetch error: ${err.message}`);
      if (i < retries - 1) await new Promise(r => setTimeout(r, 2000));
    }
  }
  return null;
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
  let skip = 0;
  const limit = 50;
  let totalFetched = 0;
  let totalSkipped = 0;
  let hasMore = true;

  // CMA API: type=Sculpture, has_image=1, cc0=1
  while (hasMore && skip < 2000) {
    const url = `${CMA_BASE}?type=Sculpture&has_image=1&cc0=1&limit=${limit}&skip=${skip}`;
    console.log(`Fetching skip=${skip}...`);
    const data = await fetchJSON(url);

    if (!data || !data.data || data.data.length === 0) {
      hasMore = false;
      break;
    }

    console.log(`  Got ${data.data.length} results (total in API: ${data.info.total})`);

    for (const obj of data.data) {
      totalFetched++;

      if (!obj.title) { totalSkipped++; continue; }

      const slug = slugify(obj.title);
      const titleLower = obj.title.toLowerCase();

      // Skip duplicates
      if (existingSlugs.has(slug) || existingTitles.has(titleLower)) {
        totalSkipped++;
        continue;
      }

      if (results.some(r => r.slug === slug)) {
        totalSkipped++;
        continue;
      }

      // Get best image URL
      const imageUrl = obj.images?.web?.url || null;
      if (!imageUrl) {
        totalSkipped++;
        continue;
      }

      // Parse creation year
      let year = null;
      if (obj.creation_date_earliest) {
        year = obj.creation_date_earliest;
      }

      results.push({
        cmaId: obj.id,
        title: obj.title,
        slug,
        year,
        objectDate: obj.creation_date || null,
        medium: obj.technique || obj.medium || null,
        dimensions: obj.dimensions?.framed?.height
          ? `${obj.dimensions.framed.height} cm`
          : obj.measurements || null,
        imageUrl,
        artistName: obj.creators?.[0]?.description || null,
        culture: obj.culture?.[0] || null,
        department: obj.department || null,
        cmaUrl: obj.url || null,
      });

      existingSlugs.add(slug);
      existingTitles.add(titleLower);
    }

    skip += limit;
    if (data.data.length < limit) hasMore = false;
    await new Promise(r => setTimeout(r, 500));
  }

  // Write output
  const outPath = path.join(__dirname, 'cleveland-sculptures-output.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));

  console.log(`\n=== Summary ===`);
  console.log(`Total fetched: ${totalFetched}`);
  console.log(`Skipped (duplicate / no image / no title): ${totalSkipped}`);
  console.log(`Kept: ${results.length}`);
  console.log(`Output: ${outPath}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
