/**
 * Validate sculpture image URLs and null out any that return 404.
 * Uses browser User-Agent since some CDNs block bare requests.
 * Only removes genuinely dead links (404/410), not rate-limited ones (429).
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CONCURRENCY = 5;
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": UA },
    });
    clearTimeout(timeout);
    return res.status;
  } catch {
    return 0;
  }
}

async function main() {
  const sculptures = await prisma.artwork.findMany({
    where: {
      artworkType: "sculpture",
      imageUrl: { not: null },
    },
    select: { id: true, title: true, imageUrl: true },
  });

  console.log(`Checking ${sculptures.length} sculpture image URLs...`);

  let valid = 0;
  let removed = 0;
  let skipped = 0;

  for (let i = 0; i < sculptures.length; i += CONCURRENCY) {
    const group = sculptures.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      group.map(async (s) => ({ ...s, status: await checkUrl(s.imageUrl) }))
    );

    for (const r of results) {
      if (r.status === 404 || r.status === 410) {
        await prisma.artwork.update({
          where: { id: r.id },
          data: { imageUrl: null, imageWidth: null, imageHeight: null },
        });
        removed++;
        console.log(`  ✗ [${r.status}] ${r.title}`);
      } else if (r.status >= 200 && r.status < 400) {
        valid++;
      } else {
        skipped++; // 429, 403 without UA, timeouts, etc.
      }
    }

    if ((i + CONCURRENCY) % 100 < CONCURRENCY) {
      console.log(`Progress: ${Math.min(i + CONCURRENCY, sculptures.length)}/${sculptures.length} | valid: ${valid}, removed: ${removed}, skipped: ${skipped}`);
    }
    await sleep(200);
  }

  console.log(`\n=== Done ===`);
  console.log(`Valid: ${valid}`);
  console.log(`Removed (404/410): ${removed}`);
  console.log(`Skipped (rate-limited/timeout): ${skipped}`);

  await prisma.$disconnect();
}

main().catch(console.error);
