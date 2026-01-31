const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// Import Art Institute of Chicago sculptures from JSON output

// Look up or create museum
async function getAICMuseumId() {
  const found = await prisma.museum.findFirst({
    where: { OR: [
      { slug: 'art-institute-of-chicago' },
      { slug: 'art-institute-chicago' },
      { name: { contains: 'Art Institute', mode: 'insensitive' } }
    ]},
    select: { id: true }
  });
  if (found) return found.id;
  // Create it
  const m = await prisma.museum.create({
    data: {
      id: randomUUID(),
      name: 'Art Institute of Chicago',
      slug: 'art-institute-of-chicago',
      city: 'Chicago',
      country: 'United States',
      updatedAt: new Date(),
    }
  });
  console.log('Created museum: Art Institute of Chicago');
  return m.id;
}

function slugifyArtist(name) {
  return name.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatYear(year, objectDate) {
  if (!year && !objectDate) return '';
  if (objectDate) return objectDate;
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

function generateDescription(obj) {
  const title = obj.title;
  const medium = obj.medium || 'unknown material';
  const dims = obj.dimensions || null;
  const dateStr = obj.objectDate || (obj.year ? formatYear(obj.year) : null);
  const artist = obj.artistName;

  let p1 = '';
  if (artist) {
    p1 += `<a href="/apps/masterpieces/artist/${slugifyArtist(artist)}"><strong>${artist}</strong></a> created this `;
  } else {
    p1 += 'This ';
  }

  const classStr = (obj.classification || '').toLowerCase();
  if (classStr.includes('ancient')) p1 += '<strong>ancient</strong> work';
  else if (classStr.includes('asian')) p1 += '<strong>Asian</strong> sculpture';
  else if (classStr.includes('african')) p1 += '<strong>African</strong> sculpture';
  else p1 += 'sculpture';

  if (dateStr) p1 += `, dating to <strong>${dateStr}</strong>`;
  p1 += `. Made from ${medium.toLowerCase()}`;
  if (dims) {
    const dimLine = dims.split('\r\n')[0].split('\n')[0].slice(0, 120);
    p1 += `, it measures ${dimLine}`;
  }
  p1 += '.';

  let p2 = `It's part of the collection at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>`;
  if (obj.galleryTitle) p2 += `, displayed in ${obj.galleryTitle}`;
  p2 += `. The museum's public domain images are available under CC0 for any use.`;

  return `<p>${p1}</p>\n\n<p>${p2}</p>`;
}

function generateFAQs(obj) {
  const faqs = [];
  const dateStr = obj.objectDate || (obj.year ? formatYear(obj.year) : null);
  const shortTitle = obj.title.length > 50 ? 'this sculpture' : obj.title;

  faqs.push({
    question: `Where can I see ${shortTitle}?`,
    answer: `It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois${obj.galleryTitle ? `, in ${obj.galleryTitle}` : ''}. The AIC is one of the largest and oldest art museums in the United States.`
  });

  if (dateStr) {
    faqs.push({
      question: `How old is this sculpture?`,
      answer: `It dates to <strong>${dateStr}</strong>. ${obj.medium ? `It's made from ${obj.medium.toLowerCase()}.` : ''}`
    });
  }

  return faqs;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

async function main() {
  const museumId = await getAICMuseumId();
  console.log(`AIC Museum ID: ${museumId}`);

  const jsonPath = path.join(__dirname, '..', 'scripts', 'aic-sculptures-output.json');
  const sculptures = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  console.log(`Loaded ${sculptures.length} sculptures from JSON`);

  const existing = await prisma.artwork.findMany({
    where: { artworkType: 'sculpture' },
    select: { slug: true, title: true }
  });
  const existingSlugs = new Set(existing.map(a => a.slug));
  const existingTitles = new Set(existing.map(a => a.title.toLowerCase()));
  console.log(`Existing sculptures in DB: ${existingSlugs.size}`);

  const artistCache = {};
  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const obj of sculptures) {
    const slug = obj.slug || slugify(obj.title);
    if (existingSlugs.has(slug) || existingTitles.has(obj.title.toLowerCase())) {
      skipped++;
      continue;
    }

    try {
      let artistId = null;
      if (obj.artistName) {
        const artistSlug = slugifyArtist(obj.artistName);
        if (artistCache[artistSlug]) {
          artistId = artistCache[artistSlug];
        } else {
          const found = await prisma.artist.findFirst({ where: { slug: artistSlug } });
          if (found) {
            artistId = found.id;
            artistCache[artistSlug] = found.id;
          } else {
            const newArtist = await prisma.artist.create({
              data: {
                id: randomUUID(),
                name: obj.artistName,
                slug: artistSlug,
                updatedAt: new Date(),
              }
            });
            artistId = newArtist.id;
            artistCache[artistSlug] = newArtist.id;
            console.log(`  + Created artist: ${obj.artistName}`);
          }
        }
      }

      const description = generateDescription(obj);
      const faqs = generateFAQs(obj);

      await prisma.artwork.create({
        data: {
          id: randomUUID(),
          title: obj.title,
          slug,
          year: obj.year || null,
          medium: obj.medium || null,
          dimensions: obj.dimensions || null,
          description,
          faqs,
          artistId,
          museumId,
          artworkType: 'sculpture',
          searchVolumeTier: 3,
          updatedAt: new Date(),
        }
      });
      existingSlugs.add(slug);
      existingTitles.add(obj.title.toLowerCase());
      created++;
      if (created % 50 === 0) console.log(`  Created ${created}...`);
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Created: ${created}`);
  console.log(`Skipped (already in DB): ${skipped}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
