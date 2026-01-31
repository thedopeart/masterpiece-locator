/**
 * Fetch image dimensions for sculptures that have imageUrl but no stored width/height.
 * Uses browser User-Agent to avoid 403s from museum CDNs.
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const BATCH_SIZE = 50;
const CONCURRENCY = 5;
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseDimensions(buffer) {
  if (buffer.length < 24) return null;

  // PNG
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    if (width > 0 && height > 0 && width < 50000 && height < 50000) return { width, height };
    return null;
  }

  // GIF
  if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) {
    const width = buffer.readUInt16LE(6);
    const height = buffer.readUInt16LE(8);
    if (width > 0 && height > 0) return { width, height };
    return null;
  }

  // JPEG: skip APP segments (thumbnails), find real SOF
  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length - 9) {
      if (buffer[offset] !== 0xff) { offset++; continue; }
      const marker = buffer[offset + 1];
      if ((marker >= 0xe0 && marker <= 0xef) || marker === 0xfe) {
        if (offset + 3 < buffer.length) {
          offset += 2 + buffer.readUInt16BE(offset + 2);
          continue;
        }
        break;
      }
      if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        if (width > 0 && height > 0 && width < 50000 && height < 50000) return { width, height };
        return null;
      }
      if (offset + 3 < buffer.length) {
        offset += 2 + buffer.readUInt16BE(offset + 2);
      } else break;
    }
  }

  return null;
}

async function getDimensions(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": UA },
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    return parseDimensions(buf);
  } catch {
    return null;
  }
}

async function main() {
  const total = await prisma.artwork.count({
    where: {
      artworkType: "sculpture",
      imageUrl: { not: null },
      OR: [{ imageWidth: null }, { imageHeight: null }],
    },
  });

  console.log(`Found ${total} sculptures needing dimensions`);

  let updated = 0;
  let failed = 0;
  let processed = 0;

  while (true) {
    const sculptures = await prisma.artwork.findMany({
      where: {
        artworkType: "sculpture",
        imageUrl: { not: null },
        OR: [{ imageWidth: null }, { imageHeight: null }],
      },
      select: { id: true, title: true, imageUrl: true },
      take: BATCH_SIZE,
    });

    if (sculptures.length === 0) break;

    // Fetch dimensions with limited concurrency
    const results = [];
    for (let i = 0; i < sculptures.length; i += CONCURRENCY) {
      const group = sculptures.slice(i, i + CONCURRENCY);
      const groupResults = await Promise.all(
        group.map(async (s) => ({ id: s.id, title: s.title, dims: await getDimensions(s.imageUrl) }))
      );
      results.push(...groupResults);
      await sleep(100);
    }

    // Update DB sequentially
    for (const { id, title, dims } of results) {
      if (dims) {
        await prisma.artwork.update({
          where: { id },
          data: { imageWidth: dims.width, imageHeight: dims.height },
        });
        updated++;
      } else {
        // Mark as attempted with 0 so we don't retry
        await prisma.artwork.update({
          where: { id },
          data: { imageWidth: 0, imageHeight: 0 },
        });
        failed++;
      }
    }

    processed += sculptures.length;
    console.log(`Progress: ${processed}/${total} | ${updated} updated, ${failed} failed`);
  }

  // Clean up 0 markers
  const cleaned = await prisma.artwork.updateMany({
    where: { imageWidth: 0, imageHeight: 0 },
    data: { imageWidth: null, imageHeight: null },
  });

  console.log(`\n=== Done ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed: ${failed} (${cleaned.count} markers cleaned)`);

  await prisma.$disconnect();
}

main().catch(console.error);
