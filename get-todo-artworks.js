const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: { searchVolumeTier: 3 },
    select: { slug: true, description: true, faqs: true }
  });

  const todos = [];
  for (const a of artworks) {
    const hasArtistLink = a.description && (a.description.includes('href="/artist') || a.description.includes('href="/apps/masterpieces/artist'));
    const hasFaqs = a.faqs && Array.isArray(a.faqs) && a.faqs.length >= 2;
    if (!hasArtistLink || !hasFaqs) {
      todos.push(a.slug);
    }
  }

  console.log(todos.join(","));
}

main().catch(console.error).finally(() => prisma.$disconnect());
