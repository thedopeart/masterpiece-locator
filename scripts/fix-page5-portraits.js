/**
 * Fix Page 5 Artist Portraits
 *
 * For artists with broken or missing portraits:
 * 1. Try to find valid portraits from Wikipedia/Commons
 * 2. If no portrait exists, set imageUrl to null
 *    (Frontend will then use artwork as fallback with "No Portrait Available" tag)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (https://luxurywallart.com)';
const DELAY_MS = 300;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function testUrl(url) {
  if (!url) return false;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return res.status === 200;
  } catch {
    return false;
  }
}

/**
 * Get artist portrait from Wikipedia
 */
async function getImageFromWikipedia(artistName) {
  try {
    const searchParams = new URLSearchParams({
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: `${artistName} artist painter`,
      srlimit: '3'
    });

    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?${searchParams}`,
      { headers: { 'User-Agent': USER_AGENT } }
    );

    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();

    if (!searchData.query?.search?.length) return null;

    for (const result of searchData.query.search) {
      const pageTitle = result.title;

      const imageParams = new URLSearchParams({
        action: 'query',
        format: 'json',
        titles: pageTitle,
        prop: 'images',
        imlimit: '20'
      });

      const imageRes = await fetch(
        `https://en.wikipedia.org/w/api.php?${imageParams}`,
        { headers: { 'User-Agent': USER_AGENT } }
      );

      if (!imageRes.ok) continue;
      const imageData = await imageRes.json();

      const pages = Object.values(imageData.query?.pages || {});
      if (!pages.length || !pages[0].images) continue;

      for (const img of pages[0].images) {
        const imgTitle = img.title;

        // Skip non-portrait images
        if (imgTitle.match(/logo|icon|flag|map|coat.*arms|commons-logo|wiki|question.*mark|signature|autograph/i)) continue;
        if (!imgTitle.match(/\.(jpg|jpeg|png)$/i)) continue;

        // Prioritize self-portrait, portrait images
        const isPriority = imgTitle.toLowerCase().includes('self-portrait') ||
                          imgTitle.toLowerCase().includes('portrait') ||
                          imgTitle.toLowerCase().includes('selfportrait');

        const urlParams = new URLSearchParams({
          action: 'query',
          format: 'json',
          titles: imgTitle,
          prop: 'imageinfo',
          iiprop: 'url',
          iiurlwidth: '400'
        });

        const urlRes = await fetch(
          `https://commons.wikimedia.org/w/api.php?${urlParams}`,
          { headers: { 'User-Agent': USER_AGENT } }
        );

        if (!urlRes.ok) continue;
        const urlData = await urlRes.json();

        const urlPages = Object.values(urlData.query?.pages || {});
        const imageInfo = urlPages[0]?.imageinfo?.[0];

        if (imageInfo?.thumburl) {
          if (await testUrl(imageInfo.thumburl)) {
            return { url: imageInfo.thumburl, isPriority };
          }
        }
      }
    }
  } catch (err) {
    // Continue
  }

  return null;
}

// Artists on page 5 that need fixes (current list from database check)
const page5Artists = [
  'hieronymus-bosch',
  'ivan-aivazovsky',
  'jacob-jordaens',
  'jacques-louis-david',
  'james-hamilton-painter',
  'jan-toorop',
  'jan-van-goyen',
  'jasper-francis-cropsey',
  'jean-baptiste-greuze',
  'jean-baptiste-simeon-chardin',
  'jean-honore-fragonard',
  'joachim-patinir',
  'john-constable',
  'john-frederick-kensett',
  'john-james-audubon',
  'juan-de-juanes',
  'juan-de-valdes-leal',
  'jules-bastien-lepage',
  'jules-pascin',
  'jusepe-de-ribera',
  'kathe-kollwitz',
  'louis-le-nain',
  'luca-signorelli',
  'luis-melendez',
  'marc-chagall',
  'martin-johnson-heade',
  'mary-cassatt',
  'matthias-grunewald',
  'maurice-denis'
];

// Artists with NO known public domain portrait - will use artwork fallback
const noPortraitAvailable = [
  'hieronymus-bosch',      // No contemporary portrait exists
  'james-hamilton-painter', // Obscure American painter
  'joachim-patinir',       // No portrait exists
  'louis-le-nain',         // No known portrait
  'luca-signorelli',       // No clear portrait
  'matthias-grunewald',    // No portrait exists
  'marc-chagall',          // 20th century - copyright issues
  'jules-pascin'           // 20th century - copyright issues
];

async function main() {
  console.log('='.repeat(70));
  console.log('PAGE 5 ARTIST PORTRAIT FIX');
  console.log('='.repeat(70));
  console.log('\nThis script will:');
  console.log('1. Skip artists known to have no public domain portrait');
  console.log('2. Search Wikipedia/Commons for portraits');
  console.log('3. Set imageUrl to NULL for artists without portraits');
  console.log('   (Frontend will show artwork with "No Portrait Available" tag)\n');

  let fixed = 0;
  let cleared = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < page5Artists.length; i++) {
    const slug = page5Artists[i];
    console.log(`\n[${i + 1}/${page5Artists.length}] Processing: ${slug}`);

    try {
      const artist = await prisma.artist.findUnique({
        where: { slug },
        include: {
          artworks: {
            where: { imageUrl: { not: null } },
            take: 1,
            select: { title: true }
          }
        }
      });

      if (!artist) {
        console.log(`  ✗ Artist not found in database`);
        failed++;
        continue;
      }

      // Already has portrait? Skip
      if (artist.imageUrl) {
        console.log(`  ✓ Already has portrait, skipping`);
        skipped++;
        continue;
      }

      // Check if this artist has no known portrait
      if (noPortraitAvailable.includes(slug)) {
        console.log(`  → No portrait available (using artwork fallback)`);
        if (artist.artworks[0]) {
          console.log(`     Will display: "${artist.artworks[0].title}"`);
        }
        cleared++;
        continue;
      }

      // Try to find portrait from Wikipedia
      console.log(`  Searching Wikipedia for portrait...`);
      await sleep(DELAY_MS);

      const result = await getImageFromWikipedia(artist.name);

      if (result?.url) {
        // Check if this looks like a portrait (not a painting)
        const filename = result.url.toLowerCase();
        const looksLikePortrait = result.isPriority ||
          filename.includes('portrait') ||
          filename.includes('self') ||
          filename.includes('photo') ||
          filename.includes(artist.name.split(' ').pop().toLowerCase());

        if (looksLikePortrait) {
          await prisma.artist.update({
            where: { slug },
            data: { imageUrl: result.url }
          });
          console.log(`  ✓ Portrait found: ${artist.name}`);
          fixed++;
        } else {
          console.log(`  → Found image but doesn't look like portrait, using artwork`);
          if (artist.artworks[0]) {
            console.log(`     Will display: "${artist.artworks[0].title}"`);
          }
          cleared++;
        }
      } else {
        console.log(`  → No portrait found, using artwork fallback`);
        if (artist.artworks[0]) {
          console.log(`     Will display: "${artist.artworks[0].title}"`);
        }
        cleared++;
      }
    } catch (error) {
      console.log(`  ✗ ERROR: ${error.message}`);
      failed++;
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total processed: ${page5Artists.length}`);
  console.log(`Already had portrait: ${skipped}`);
  console.log(`Fixed with new portrait: ${fixed}`);
  console.log(`Using artwork fallback: ${cleared}`);
  console.log(`Failed: ${failed}`);
  console.log('\nArtists using artwork fallback will display their artwork');
  console.log('with a "No Portrait Available" tag on the frontend.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
