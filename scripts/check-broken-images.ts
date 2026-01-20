import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkUrl(url: string): Promise<{ status: number; ok: boolean }> {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    return { status: response.status, ok: response.ok };
  } catch (e) {
    return { status: 0, ok: false };
  }
}

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: {
      imageUrl: { not: null },
      NOT: { imageUrl: { contains: "NO_IMAGE" } },
    },
    select: { slug: true, title: true, imageUrl: true, artist: { select: { name: true } } },
  });

  console.log(`Checking ${artworks.length} artworks for broken images...\n`);

  const broken: { slug: string; title: string; artist: string; status: number }[] = [];
  let checked = 0;

  for (const artwork of artworks) {
    if (!artwork.imageUrl) continue;

    const result = await checkUrl(artwork.imageUrl);
    checked++;

    if (!result.ok && result.status !== 429) {
      // 429 is rate limiting, not actually broken
      broken.push({
        slug: artwork.slug,
        title: artwork.title,
        artist: artwork.artist?.name || "Unknown",
        status: result.status,
      });
      console.log(`BROKEN (${result.status}): ${artwork.title}`);
    }

    if (checked % 50 === 0) {
      console.log(`Checked ${checked}/${artworks.length}...`);
      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\n=== Results ===`);
  console.log(`Checked: ${checked}`);
  console.log(`Broken: ${broken.length}`);

  if (broken.length > 0) {
    console.log(`\nBroken images:`);
    broken.forEach((b) => {
      console.log(`  ${b.slug} (${b.status}) - ${b.title} by ${b.artist}`);
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
