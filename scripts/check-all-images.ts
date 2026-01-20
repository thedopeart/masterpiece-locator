import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkImages() {
  const artworks = await prisma.artwork.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      imageUrl: true,
      artist: { select: { name: true, deathYear: true } },
    },
  });

  console.log(`Checking ${artworks.length} artworks...\n`);

  const broken: Array<{
    title: string;
    slug: string;
    artist: string;
    deathYear: number | null;
    status: number | string;
    url: string;
  }> = [];

  for (const art of artworks) {
    if (!art.imageUrl) {
      console.log(`NO IMAGE: ${art.title}`);
      broken.push({
        title: art.title,
        slug: art.slug,
        artist: art.artist?.name || "Unknown",
        deathYear: art.artist?.deathYear || null,
        status: "NO_IMAGE",
        url: "",
      });
      continue;
    }

    try {
      const res = await fetch(art.imageUrl, {
        method: "HEAD",
        redirect: "follow",
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ArtChecker/1.0)" },
      });

      if (!res.ok) {
        broken.push({
          title: art.title,
          slug: art.slug,
          artist: art.artist?.name || "Unknown",
          deathYear: art.artist?.deathYear || null,
          status: res.status,
          url: art.imageUrl,
        });
        console.log(`BROKEN [${res.status}]: ${art.title}`);
      }
    } catch (err) {
      broken.push({
        title: art.title,
        slug: art.slug,
        artist: art.artist?.name || "Unknown",
        deathYear: art.artist?.deathYear || null,
        status: "ERROR",
        url: art.imageUrl,
      });
      console.log(`ERROR: ${art.title}`);
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Total checked: ${artworks.length}`);
  console.log(`Broken/Missing: ${broken.length}`);

  if (broken.length > 0) {
    console.log("\n=== BROKEN/MISSING IMAGES ===");
    broken.forEach((b) => {
      console.log(`${b.slug} | ${b.title} | ${b.artist} (d.${b.deathYear}) | ${b.status}`);
    });
  }
}

checkImages()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
