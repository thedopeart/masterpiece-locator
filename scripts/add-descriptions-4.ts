import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const descriptions: Record<string, { description: string; medium?: string; dimensions?: string }> = {
  "when-will-you-marry": {
    description: "Two Tahitian women sit in a tropical landscape, one in traditional dress, the other in Western clothing, reflecting on love and cultural identity.",
    medium: "Oil on canvas",
    dimensions: "101.5 cm × 77.5 cm",
  },
  "adele-bloch-bauer-ii": {
    description: "A second portrait of the Viennese socialite, this time in a colorful dress against a vibrant background of flowers and patterns.",
    medium: "Oil on canvas",
    dimensions: "190 cm × 120 cm",
  },
  "death-and-life": {
    description: "Death as a skeletal figure watches a huddled group of humanity embracing life, a meditation on mortality and the cycle of existence.",
    medium: "Oil on canvas",
    dimensions: "178 cm × 198 cm",
  },
  "madonna-munch": {
    description: "A woman with flowing dark hair and closed eyes in an ecstatic pose, surrounded by a red halo and a border of sperm cells.",
    medium: "Oil on canvas",
    dimensions: "91 cm × 70.5 cm",
  },
  "sick-child": {
    description: "A pale young girl leans against a pillow while her grieving mother bows her head, a deeply personal image of illness and loss.",
    medium: "Oil on canvas",
    dimensions: "119.5 cm × 118.5 cm",
  },
  "black-square": {
    description: "A black square on a white ground, the radical icon of Suprematism that declared the supremacy of pure feeling over representation.",
    medium: "Oil on linen",
    dimensions: "79.5 cm × 79.5 cm",
  },
  "portrait-dr-gachet": {
    description: "The melancholy physician who cared for Van Gogh rests his head on his hand, embodying the modern malaise the artist shared.",
    medium: "Oil on canvas",
    dimensions: "68 cm × 57 cm",
  },
  "yellow-christ": {
    description: "Christ on the cross rendered in flat yellow tones, surrounded by Breton women in a landscape of autumn colors.",
    medium: "Oil on canvas",
    dimensions: "92.1 cm × 73.4 cm",
  },
  "tree-of-life-klimt": {
    description: "A swirling golden tree with spiral branches spreads across a mosaic background, part of a frieze celebrating the embrace of life.",
    medium: "Various media on paper",
    dimensions: "195 cm × 102 cm",
  },
};

async function main() {
  console.log("Adding final descriptions to artworks...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(descriptions)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          ...(data.medium && { medium: data.medium }),
          ...(data.dimensions && { dimensions: data.dimensions }),
        },
      });
      console.log(`Updated: ${artwork.title}`);
      updated++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artworks`);

  const remaining = await prisma.artwork.count({
    where: { OR: [{ description: null }, { description: "" }] },
  });
  console.log(`Artworks still missing description: ${remaining}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
