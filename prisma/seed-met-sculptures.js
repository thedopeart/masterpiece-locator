const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

// B2 Step 2: Import Met sculptures from JSON output

const MET_MUSEUM_ID = 'cmkhrgcm8000gj6io8i2bkef9';

const DEPT_ARTIST_MAP = {
  'Greek and Roman Art': null, // will resolve per-object
  'European Sculpture and Decorative Arts': null,
  'Egyptian Art': 'c7e1bcf1-3c4d-4a9c-bceb-719251e1a32d', // Ancient Egyptian
};

const KNOWN_ARTISTS = {
  'ancient greek': '003d1062-cb74-4372-90fa-b1bcfa9d16ae',
  'ancient roman': '0a510957-ab4a-4fe4-a27c-1e8a74c66d2f',
  'ancient egyptian': 'c7e1bcf1-3c4d-4a9c-bceb-719251e1a32d',
};

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
  const dept = obj.department;
  const artist = obj.artistName;

  let p1 = '';
  if (artist) {
    p1 += `<a href="/apps/masterpieces/artist/${slugifyArtist(artist)}"><strong>${artist}</strong></a> created this `;
  } else {
    p1 += 'This ';
  }

  // Determine culture context
  if (dept === 'Egyptian Art') {
    p1 += `<strong>ancient Egyptian</strong> work`;
  } else if (dept === 'Greek and Roman Art') {
    if (obj.year && obj.year < -200) {
      p1 += `<strong>ancient Greek</strong> work`;
    } else if (obj.year && obj.year > 0) {
      p1 += `<strong>Roman</strong> work`;
    } else {
      p1 += `work from the <strong>Greco-Roman world</strong>`;
    }
  } else {
    p1 += `<strong>European</strong> sculpture`;
  }

  if (dateStr) {
    p1 += `, dating to <strong>${dateStr}</strong>`;
  }

  p1 += `. Made from ${medium.toLowerCase()}`;
  if (dims) {
    // Extract just the first dimension line
    const dimLine = dims.split('\r\n')[0].split('\n')[0];
    p1 += `, it measures ${dimLine}`;
  }
  p1 += '.';

  let p2 = `It's part of the highlighted collection at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, in the ${dept} department. The Met acquired this piece as part of its public domain collection, and high-resolution images are freely available.`;

  return `<p>${p1}</p>\n\n<p>${p2}</p>`;
}

function generateFAQs(obj) {
  const faqs = [];
  const dateStr = obj.objectDate || (obj.year ? formatYear(obj.year) : null);

  // FAQ 1: Where to see it
  faqs.push({
    question: `Where can I see ${obj.title.length > 50 ? 'this sculpture' : obj.title}?`,
    answer: `It's on display at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City, in the <strong>${obj.department}</strong> galleries. Admission is pay-what-you-wish for New York residents.`
  });

  // FAQ 2: How old / when made
  if (dateStr) {
    faqs.push({
      question: `How old is this sculpture?`,
      answer: `It dates to <strong>${dateStr}</strong>. ${obj.medium ? `It's made from ${obj.medium.toLowerCase()}.` : ''} ${obj.dimensions ? `Dimensions: ${obj.dimensions.split('\r\n')[0].split('\n')[0]}.` : ''}`
    });
  }

  // FAQ 3: What is it made of (if interesting medium)
  if (obj.medium && obj.medium.length > 3) {
    const med = obj.medium.toLowerCase();
    let medNote = '';
    if (med.includes('bronze')) medNote = 'Bronze was the prestige material of the ancient world. Most ancient bronzes were melted down for reuse, making survivors rare.';
    else if (med.includes('marble')) medNote = 'Marble was the preferred stone for Greek and Roman sculptors. Many surviving marbles are Roman copies of lost Greek originals.';
    else if (med.includes('limestone')) medNote = 'Limestone was widely used in Egyptian sculpture because it was plentiful along the Nile valley and easy to carve with copper tools.';
    else if (med.includes('granite')) medNote = 'Granite is one of the hardest stones used in ancient sculpture. Carving it required months of patient work with stone pounders.';
    else if (med.includes('terracotta')) medNote = 'Terracotta (fired clay) was one of the most common sculptural materials in the ancient world, used for everything from small figurines to architectural decoration.';
    else if (med.includes('gold')) medNote = 'Gold sculptures are extremely rare survivals from the ancient world. Most were melted down for their material value.';
    else if (med.includes('wood')) medNote = 'Wooden sculptures rarely survive from antiquity. Egypt\'s dry climate preserved more wooden objects than any other ancient culture.';
    else if (med.includes('faience')) medNote = 'Egyptian faience is a glazed ceramic made from crushed quartz. Its bright blue-green color was meant to symbolize rebirth and the waters of the Nile.';

    if (medNote) {
      faqs.push({
        question: `What material is this made from?`,
        answer: `It's made from <strong>${obj.medium}</strong>. ${medNote}`
      });
    }
  }

  return faqs;
}

function resolveArtistId(obj) {
  // Egyptian department -> Ancient Egyptian
  if (obj.department === 'Egyptian Art') {
    return KNOWN_ARTISTS['ancient egyptian'];
  }
  // Greek & Roman: guess by date
  if (obj.department === 'Greek and Roman Art') {
    if (obj.year !== null && obj.year !== undefined) {
      if (obj.year < -146) return KNOWN_ARTISTS['ancient greek']; // Before Roman conquest of Greece
      if (obj.year > 0) return KNOWN_ARTISTS['ancient roman'];
      return KNOWN_ARTISTS['ancient greek']; // Default Hellenistic to Greek
    }
    return KNOWN_ARTISTS['ancient greek'];
  }
  return null;
}

async function main() {
  const jsonPath = path.join(__dirname, '..', 'scripts', 'met-sculptures-output.json');
  const sculptures = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  console.log(`Loaded ${sculptures.length} sculptures from JSON`);

  // Get existing slugs
  const existing = await prisma.artwork.findMany({
    where: { artworkType: 'sculpture' },
    select: { slug: true }
  });
  const existingSlugs = new Set(existing.map(a => a.slug));
  console.log(`Existing sculptures in DB: ${existingSlugs.size}`);

  // Cache for created named artists (European dept)
  const artistCache = {};

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const obj of sculptures) {
    // Skip duplicates
    if (existingSlugs.has(obj.slug)) {
      skipped++;
      continue;
    }

    try {
      // Resolve artist
      let artistId = null;
      if (obj.artistName) {
        const artistSlug = slugifyArtist(obj.artistName);
        if (artistCache[artistSlug]) {
          artistId = artistCache[artistSlug];
        } else {
          // Check DB
          const found = await prisma.artist.findFirst({ where: { slug: artistSlug } });
          if (found) {
            artistId = found.id;
            artistCache[artistSlug] = found.id;
          } else {
            // Create new artist
            const newArtist = await prisma.artist.create({
              data: {
                id: randomUUID(),
                name: obj.artistName,
                slug: artistSlug,
                nationality: obj.artistNationality || null,
                updatedAt: new Date(),
              }
            });
            artistId = newArtist.id;
            artistCache[artistSlug] = newArtist.id;
            console.log(`  + Created artist: ${obj.artistName}`);
          }
        }
      } else {
        artistId = resolveArtistId(obj);
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
          museumId: MET_MUSEUM_ID,
          artworkType: 'sculpture',
          searchVolumeTier: 3,
          updatedAt: new Date(),
        }
      });
      existingSlugs.add(obj.slug); // prevent dupes within run
      created++;
      process.stdout.write(`✓ ${obj.title.slice(0, 60)}\n`);
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
