const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Search for an image on Wikimedia Commons
async function searchWikimedia(searchTerm) {
  const query = encodeURIComponent(searchTerm);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${query}&srnamespace=6&srlimit=5&format=json`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'MasterpieceLocator/1.0 (contact@luxurywallart.com)' }
  });
  const data = await res.json();

  if (!data.query?.search?.length) return null;

  // Get the image info
  for (const result of data.query.search) {
    const title = result.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;

    const infoRes = await fetch(infoUrl, {
      headers: { 'User-Agent': 'MasterpieceLocator/1.0 (contact@luxurywallart.com)' }
    });
    const infoData = await infoRes.json();

    const pages = infoData.query?.pages;
    if (!pages) continue;

    const pageId = Object.keys(pages)[0];
    const imageInfo = pages[pageId]?.imageinfo?.[0];

    if (imageInfo?.url) {
      const license = imageInfo.extmetadata?.LicenseShortName?.value || '';

      // Get a thumbnail URL (800px wide)
      const imgUrl = imageInfo.url;
      const filename = imgUrl.split('/').pop();
      const thumbUrl = imgUrl.replace('/commons/', '/commons/thumb/') + '/800px-' + filename;

      return {
        url: thumbUrl,
        license: license || 'Public Domain',
        source: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`
      };
    }
    await delay(200);
  }
  return null;
}

// Greek and classical sculptures to fix - Round 2
const sculptureSearches = [
  { slug: 'marcus-aurelius-equestrian', search: 'Marcus Aurelius equestrian Capitoline' },
  { slug: 'farnese-atlas', search: 'Farnese Atlas globe Naples' },
  { slug: 'mask-of-agamemnon', search: 'Mask Agamemnon gold Mycenae' },
  { slug: 'jockey-of-artemision', search: 'Jockey Artemision bronze horse' },
  { slug: 'charioteer-of-delphi', search: 'Charioteer Delphi bronze' },
  { slug: 'boxer-at-rest', search: 'Boxer Quirinal bronze' },
  { slug: 'nike-of-paionios', search: 'Nike Paionios Olympia' },
  { slug: 'artemision-bronze', search: 'Artemision Bronze Zeus Poseidon' },
  { slug: 'discobolus-lancellotti', search: 'Discobolus Lancellotti marble' },
  { slug: 'farnese-bull', search: 'Farnese Bull Naples sculpture' },
  { slug: 'sphinx-of-naxos', search: 'Sphinx Naxos Delphi column' },
  { slug: 'riace-warrior-a', search: 'Riace bronzes warrior A' },
  { slug: 'riace-warrior-b', search: 'Riace bronzes warrior B' },
  { slug: 'antikythera-youth', search: 'Antikythera Youth bronze' },
  { slug: 'dying-gaul', search: 'Dying Gaul Capitoline marble' },
  // Classical sculptures
  { slug: 'apollo-belvedere', search: 'Apollo Belvedere Vatican marble' },
  { slug: 'farnese-hercules', search: 'Farnese Hercules Naples' },
  { slug: 'doryphoros', search: 'Doryphoros Polykleitos spear bearer' },
  { slug: 'ludovisi-gaul', search: 'Ludovisi Gaul killing wife' },
  { slug: 'barberini-faun', search: 'Barberini Faun sleeping satyr' },
  { slug: 'augustus-prima-porta', search: 'Augustus Prima Porta statue' },
  { slug: 'spinario', search: 'Spinario boy thorn bronze' },
  { slug: 'caryatid-erechtheion', search: 'Caryatid Erechtheion maiden' },
  { slug: 'kroisos-kouros', search: 'Kroisos Kouros Anavysos' },
  { slug: 'peplos-kore', search: 'Peplos Kore Acropolis' },
  { slug: 'moschophoros', search: 'Moschophoros calf bearer Acropolis' },
  // More if needed
  { slug: 'capitoline-wolf', search: 'Capitoline Wolf Romulus Remus bronze' },
  { slug: 'equestrian-marcus-aurelius', search: 'Marcus Aurelius equestrian bronze' },
  { slug: 'bronze-horses-st-marks', search: 'Horses Saint Mark Venice bronze' },
  { slug: 'winged-lion-st-mark', search: 'Winged Lion Saint Mark Venice' },
];

async function fixImages() {
  console.log('Searching Wikimedia Commons for sculpture images...\n');

  let updated = 0;
  let notFound = 0;
  let notInDb = 0;

  for (const item of sculptureSearches) {
    console.log(`Searching: ${item.slug}...`);

    await delay(1000); // Rate limit

    const result = await searchWikimedia(item.search);

    if (result) {
      try {
        await prisma.artwork.update({
          where: { slug: item.slug },
          data: {
            imageUrl: result.url,
            imageAttribution: `Wikimedia Commons - ${result.license}`,
            updatedAt: new Date()
          }
        });
        console.log(`  ✓ Found and updated`);
        updated++;
      } catch (e) {
        if (e.code === 'P2025') {
          console.log(`  - Not in database, skipping`);
          notInDb++;
        } else {
          console.log(`  ✗ Database error: ${e.message}`);
        }
      }
    } else {
      console.log(`  ✗ Not found on Wikimedia`);
      notFound++;
    }
  }

  console.log(`\n---`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Not in DB: ${notInDb}`);

  await prisma.$disconnect();
}

fixImages();
