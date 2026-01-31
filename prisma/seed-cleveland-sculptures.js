const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// Import Cleveland Museum of Art sculptures from JSON output

const CMA_MUSEUM_ID = 'cmkjz7got000kj1o0kypdzp9a';

function slugifyArtist(name) {
  return name.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatYear(year, objectDate) {
  if (!year && !objectDate) return '';
  if (objectDate) return objectDate;
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

function parseCulture(artistName, culture, dept) {
  // Try to extract culture/origin from available fields
  if (culture) {
    const cl = culture.toLowerCase();
    if (cl.includes('egypt')) return 'Egyptian';
    if (cl.includes('greek') || cl.includes('greece')) return 'Greek';
    if (cl.includes('roman') || cl.includes('rome') || cl.includes('italy')) return 'Roman/Italian';
    if (cl.includes('french') || cl.includes('france')) return 'French';
    if (cl.includes('german')) return 'German';
    if (cl.includes('chin')) return 'Chinese';
    if (cl.includes('japan')) return 'Japanese';
    if (cl.includes('india')) return 'Indian';
    if (cl.includes('african') || cl.includes('africa')) return 'African';
    if (cl.includes('america')) return 'American';
    if (cl.includes('english') || cl.includes('british')) return 'British';
    if (cl.includes('spanish') || cl.includes('spain')) return 'Spanish';
    if (cl.includes('persian') || cl.includes('iran')) return 'Persian';
    if (cl.includes('mesopotam') || cl.includes('assyria') || cl.includes('babylon')) return 'Mesopotamian';
  }
  if (dept) {
    const d = dept.toLowerCase();
    if (d.includes('egypt')) return 'Egyptian';
    if (d.includes('greek') || d.includes('roman')) return 'Greco-Roman';
    if (d.includes('asian')) return 'Asian';
    if (d.includes('african')) return 'African';
    if (d.includes('medieval')) return 'Medieval European';
    if (d.includes('modern')) return 'Modern';
  }
  return null;
}

function generateDescription(obj) {
  const title = obj.title;
  const medium = obj.medium || 'unknown material';
  const dims = obj.dimensions || null;
  const dateStr = obj.objectDate || (obj.year ? formatYear(obj.year) : null);
  const artist = obj.artistName;
  const cultureInfo = parseCulture(obj.artistName, obj.culture, obj.department);

  let p1 = '';
  if (artist && !artist.toLowerCase().includes('unknown')) {
    const cleanArtist = artist.replace(/\s*\(.*?\)\s*/g, '').trim();
    p1 += `<a href="/apps/masterpieces/artist/${slugifyArtist(cleanArtist)}"><strong>${cleanArtist}</strong></a> created this `;
  } else {
    p1 += 'This ';
  }

  if (cultureInfo) {
    p1 += `<strong>${cultureInfo}</strong> work`;
  } else {
    p1 += 'sculpture';
  }

  if (dateStr) {
    p1 += `, dating to <strong>${dateStr}</strong>`;
  }

  p1 += `. Made from ${medium.toLowerCase()}`;
  if (dims) {
    const dimLine = dims.split('\r\n')[0].split('\n')[0];
    p1 += `, it measures ${dimLine}`;
  }
  p1 += '.';

  let p2 = `It's part of the collection at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio`;
  if (obj.department) {
    p2 += `, in the ${obj.department} department`;
  }
  p2 += `. The museum offers free admission and makes its collection available through an open-access program with CC0 images.`;

  return `<p>${p1}</p>\n\n<p>${p2}</p>`;
}

function generateFAQs(obj) {
  const faqs = [];
  const dateStr = obj.objectDate || (obj.year ? formatYear(obj.year) : null);
  const shortTitle = obj.title.length > 50 ? 'this sculpture' : obj.title;

  faqs.push({
    question: `Where can I see ${shortTitle}?`,
    answer: `It's on display at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio. Admission is <strong>always free</strong>, making it one of the most accessible major art museums in the United States.`
  });

  if (dateStr) {
    faqs.push({
      question: `How old is this sculpture?`,
      answer: `It dates to <strong>${dateStr}</strong>. ${obj.medium ? `It's made from ${obj.medium.toLowerCase()}.` : ''} ${obj.dimensions ? `Dimensions: ${obj.dimensions.split('\r\n')[0].split('\n')[0]}.` : ''}`
    });
  }

  if (obj.medium && obj.medium.length > 3) {
    const med = obj.medium.toLowerCase();
    let medNote = '';
    if (med.includes('bronze')) medNote = 'Bronze was the prestige material of the ancient world. Most ancient bronzes were melted down for reuse, making survivors rare.';
    else if (med.includes('marble')) medNote = 'Marble was the preferred stone for Greek and Roman sculptors. Many surviving marbles are Roman copies of lost Greek originals.';
    else if (med.includes('limestone')) medNote = 'Limestone was widely used in ancient sculpture because it was plentiful and easy to carve.';
    else if (med.includes('wood')) medNote = 'Wooden sculptures rarely survive from earlier centuries. Dry climates and careful preservation made the difference.';
    else if (med.includes('terracotta')) medNote = 'Terracotta (fired clay) was one of the most common sculptural materials, used for everything from small figurines to architectural decoration.';
    else if (med.includes('ivory')) medNote = 'Ivory carving was a luxury art form requiring great skill. The material was imported at considerable expense.';
    else if (med.includes('alabaster')) medNote = 'Alabaster is a soft, translucent stone prized for its luminous quality when carved.';

    if (medNote) {
      faqs.push({
        question: `What material is this made from?`,
        answer: `It's made from <strong>${obj.medium}</strong>. ${medNote}`
      });
    }
  }

  return faqs;
}

async function main() {
  const jsonPath = path.join(__dirname, '..', 'scripts', 'cleveland-sculptures-output.json');
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
    if (existingSlugs.has(obj.slug) || existingTitles.has(obj.title.toLowerCase())) {
      skipped++;
      continue;
    }

    try {
      let artistId = null;
      if (obj.artistName && !obj.artistName.toLowerCase().includes('unknown')) {
        const cleanName = obj.artistName.replace(/\s*\(.*?\)\s*/g, '').trim();
        const artistSlug = slugifyArtist(cleanName);
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
                name: cleanName,
                slug: artistSlug,
                updatedAt: new Date(),
              }
            });
            artistId = newArtist.id;
            artistCache[artistSlug] = newArtist.id;
            console.log(`  + Created artist: ${cleanName}`);
          }
        }
      }

      const description = generateDescription(obj);
      const faqs = generateFAQs(obj);

      await prisma.artwork.create({
        data: {
          id: randomUUID(),
          title: obj.title,
          slug: obj.slug,
          year: obj.year,
          medium: obj.medium,
          dimensions: obj.dimensions,
          description,
          faqs,
          artistId,
          museumId: CMA_MUSEUM_ID,
          artworkType: 'sculpture',
          searchVolumeTier: 3,
          updatedAt: new Date(),
        }
      });
      existingSlugs.add(obj.slug);
      existingTitles.add(obj.title.toLowerCase());
      created++;
      if (created % 50 === 0) console.log(`  Created ${created}...`);
    } catch (err) {
      console.error(`✗ ${obj.slug}: ${err.message}`);
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
