import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// These are the 404 errors - actually broken URLs for public domain works
// Verified correct Wikimedia Commons URLs
const fixes: Record<string, string> = {
  // Paul Gauguin (d.1903) - PUBLIC DOMAIN
  "yellow-christ":
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_-_Google_Art_Project.jpg",
  "when-will-you-marry":
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Paul_Gauguin_-_Nafea_Faa_Ipoipo%3F_%28When_Will_You_Marry%3F%29_-_Google_Art_Project.jpg",

  // Gustav Klimt (d.1918) - PUBLIC DOMAIN
  "adele-bloch-bauer-ii":
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Gustav_Klimt_047.jpg",
  "tree-of-life-klimt":
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Gustav_Klimt_-_The_Tree_of_Life_-_Google_Art_Project.jpg",
  "death-and-life":
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg",

  // Edvard Munch (d.1944) - PUBLIC DOMAIN
  "madonna-munch":
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Edvard_Munch_-_Madonna_%281894-1895%29.jpg",
  "sick-child":
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Edvard_Munch_-_The_Sick_Child_%281885-86%29.jpg",

  // Jean-François Millet (d.1875) - PUBLIC DOMAIN
  // Corrected URL
  "the-angelus":
    "https://upload.wikimedia.org/wikipedia/commons/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg",

  // John Constable (d.1837) - PUBLIC DOMAIN
  // Corrected URL
  "the-hay-wain":
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/John_Constable_The_Hay_Wain.jpg",
};

async function main() {
  console.log("Fixing broken image URLs...\n");

  for (const [slug, newUrl] of Object.entries(fixes)) {
    const artwork = await prisma.artwork.findUnique({
      where: { slug },
      include: { artist: { select: { name: true, deathYear: true } } },
    });

    if (!artwork) {
      console.log(`NOT FOUND: ${slug}`);
      continue;
    }

    // Just update directly - 429 is rate limiting, not broken
    await prisma.artwork.update({
      where: { slug },
      data: { imageUrl: newUrl },
    });
    console.log(`UPDATED: ${artwork.title} (${artwork.artist?.name})`);
  }

  console.log("\nDone!");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
