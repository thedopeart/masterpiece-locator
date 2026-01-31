/**
 * Fetch images for sculptures from museum open-access APIs.
 *
 * Cleveland Museum of Art: https://openaccess-api.clevelandart.org/
 * Art Institute of Chicago: https://api.artic.edu/docs/
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_SIZE = 50;
const DELAY_MS = 200; // be nice to APIs

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchClevelandImage(title) {
  try {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${encodeURIComponent(title)}&has_image=1&limit=1`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.data && data.data.length > 0) {
      const artwork = data.data[0];
      // Check title similarity
      if (artwork.title && isSimilarTitle(title, artwork.title)) {
        const imageUrl = artwork.images?.web?.url;
        if (imageUrl) return imageUrl;
      }
    }
  } catch (e) {
    // silently skip
  }
  return null;
}

async function fetchAICImage(title) {
  try {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(title)}&fields=id,title,image_id&limit=1`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.data && data.data.length > 0) {
      const artwork = data.data[0];
      if (artwork.title && isSimilarTitle(title, artwork.title) && artwork.image_id) {
        return `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      }
    }
  } catch (e) {
    // silently skip
  }
  return null;
}

async function fetchMetImage(title) {
  try {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(title)}&hasImages=true`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.objectIDs && data.objectIDs.length > 0) {
      // Check first result
      const objRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[0]}`);
      if (!objRes.ok) return null;
      const obj = await objRes.json();
      if (obj.title && isSimilarTitle(title, obj.title) && obj.primaryImage) {
        return obj.primaryImage;
      }
    }
  } catch (e) {
    // silently skip
  }
  return null;
}

function isSimilarTitle(a, b) {
  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const na = normalize(a);
  const nb = normalize(b);
  // One contains the other, or they share >70% of chars
  if (na.includes(nb) || nb.includes(na)) return true;
  // Check overlap
  const shorter = na.length < nb.length ? na : nb;
  const longer = na.length >= nb.length ? na : nb;
  let matches = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (longer.includes(shorter[i])) matches++;
  }
  return matches / shorter.length > 0.7;
}

async function main() {
  // Get museums we can fetch from
  const museumFetchers = {
    "cleveland-museum-of-art": fetchClevelandImage,
    "art-institute-of-chicago": fetchAICImage,
  };

  // Also handle Met
  const metMuseum = await prisma.museum.findFirst({
    where: { name: { contains: "Metropolitan", mode: "insensitive" } },
    select: { slug: true },
  });
  if (metMuseum) {
    museumFetchers[metMuseum.slug] = fetchMetImage;
  }

  let totalUpdated = 0;
  let totalChecked = 0;
  let totalFailed = 0;

  for (const [museumSlug, fetcher] of Object.entries(museumFetchers)) {
    console.log(`\n=== Processing ${museumSlug} ===`);

    const sculptures = await prisma.artwork.findMany({
      where: {
        artworkType: "sculpture",
        imageUrl: null,
        Museum: { slug: museumSlug },
      },
      select: { id: true, title: true, slug: true },
      orderBy: { searchVolumeTier: "asc" },
    });

    console.log(`Found ${sculptures.length} imageless sculptures`);

    for (let i = 0; i < sculptures.length; i += BATCH_SIZE) {
      const batch = sculptures.slice(i, i + BATCH_SIZE);

      for (const sculpture of batch) {
        totalChecked++;
        const imageUrl = await fetcher(sculpture.title);

        if (imageUrl) {
          await prisma.artwork.update({
            where: { id: sculpture.id },
            data: { imageUrl },
          });
          totalUpdated++;
          console.log(`  ✓ [${totalUpdated}] ${sculpture.title}`);
        } else {
          totalFailed++;
        }

        await sleep(DELAY_MS);
      }

      console.log(`  Progress: ${Math.min(i + BATCH_SIZE, sculptures.length)}/${sculptures.length} checked, ${totalUpdated} found so far`);
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`Checked: ${totalChecked}`);
  console.log(`Images found: ${totalUpdated}`);
  console.log(`No match: ${totalFailed}`);

  await prisma.$disconnect();
}

main().catch(console.error);
