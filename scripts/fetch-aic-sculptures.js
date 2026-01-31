const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// Fetch highlighted sculptures from Art Institute of Chicago API
// API docs: https://api.artic.edu/docs/
// No auth required, CC0 images

const AIC_BASE = 'https://api.artic.edu/api/v1';

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
      const res = await fetch(url, {
        headers: {
          'AIC-User-Agent': 'masterpiece-locator (dev@luxurywallart.com)',
          'User-Agent': 'masterpiece-locator/1.0 (dev@luxurywallart.com)',
        }
      });
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

async function fetchPOST(url, body, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'AIC-User-Agent': 'masterpiece-locator (dev@luxurywallart.com)',
          'User-Agent': 'masterpiece-locator/1.0 (dev@luxurywallart.com)',
        },
        body: JSON.stringify(body),
      });
      if (res.ok) return res.json();
      if (res.status === 429) {
        const wait = (i + 1) * 3000;
        console.log(`  Rate limited, waiting ${wait}ms...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      const text = await res.text();
      console.log(`  HTTP ${res.status}: ${text.slice(0, 200)}`);
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
  let page = 1;
  let totalPages = 1;
  let totalFetched = 0;
  let totalSkipped = 0;

  // Use POST search with Elasticsearch body for proper filtering
  while (page <= totalPages && page <= 20) { // Cap at 20 pages
    const url = `${AIC_BASE}/artworks/search`;
    const body = {
      q: "sculpture",
      query: {
        bool: {
          filter: [
            { term: { is_public_domain: true } },
            { exists: { field: "image_id" } },
            { terms: { "classification_titles.keyword": ["sculpture", "Sculpture"] } }
          ]
        }
      },
      fields: ["id","title","date_display","date_start","medium_display","dimensions","artist_title","artist_display","classification_titles","image_id","is_on_view","gallery_title"],
      limit: 50,
      page: page
    };

    console.log(`Fetching page ${page}...`);
    const data = await fetchPOST(url, body);
    if (!data || !data.data) {
      console.log('  Failed to fetch page, stopping.');
      break;
    }

    totalPages = Math.min(data.pagination.total_pages, 20);
    console.log(`  Got ${data.data.length} results (page ${page}/${totalPages}, total: ${data.pagination.total})`);

    for (const obj of data.data) {
      totalFetched++;

      const slug = slugify(obj.title);
      const titleLower = obj.title.toLowerCase();

      // Skip duplicates
      if (existingSlugs.has(slug) || existingTitles.has(titleLower)) {
        totalSkipped++;
        continue;
      }

      // Skip if already in this run
      if (results.some(r => r.slug === slug)) {
        totalSkipped++;
        continue;
      }

      // Build image URL: https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg
      const imageUrl = obj.image_id
        ? `https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`
        : null;

      if (!imageUrl) {
        totalSkipped++;
        continue;
      }

      results.push({
        aicId: obj.id,
        title: obj.title,
        slug,
        year: obj.date_start || null,
        objectDate: obj.date_display || null,
        medium: obj.medium_display || null,
        dimensions: obj.dimensions || null,
        imageUrl,
        artistName: obj.artist_title || null,
        artistDisplay: obj.artist_display || null,
        classification: (obj.classification_titles || []).join(', '),
        galleryTitle: obj.gallery_title || null,
        aicUrl: `https://www.artic.edu/artworks/${obj.id}`,
      });

      existingSlugs.add(slug);
      existingTitles.add(titleLower);
    }

    page++;
    await new Promise(r => setTimeout(r, 500)); // Rate limiting
  }

  // Write output
  const outPath = path.join(__dirname, 'aic-sculptures-output.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));

  console.log(`\n=== Summary ===`);
  console.log(`Total fetched: ${totalFetched}`);
  console.log(`Skipped (duplicate / no image): ${totalSkipped}`);
  console.log(`Kept: ${results.length}`);
  console.log(`Output: ${outPath}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
