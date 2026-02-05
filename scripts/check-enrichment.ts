import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const museumIds = [
  "museo-nazionale-romano",
  "galleria-spada-rome",
  "villa-farnesina-rome",
  "maxxi-rome",
  "galleria-nazionale-arte-moderna-rome",
  "museo-del-novecento-milan",
  "triennale-milano",
  "palazzo-reale-milan",
  "museo-egizio-turin",
  "palazzo-madama-turin",
  "royal-museums-turin",
  "museo-capodimonte-naples",
  "museo-archeologico-nazionale-naples",
  "peggy-guggenheim-collection-venice",
  "palazzo-ducale-venice",
  "palazzo-vecchio-florence",
  "pergamon-museum-berlin",
  "neues-museum-berlin",
  "bode-museum-berlin",
  "musee-rodin-paris",
  "musee-armee-invalides-paris",
  "musee-jacquemart-andre-paris",
];

async function main() {
  const artworks = await prisma.artwork.findMany({
    where: { museumId: { in: museumIds } },
    select: {
      slug: true,
      title: true,
      description: true,
      faqs: true,
      museumId: true,
      wikipediaUrl: true,
    },
    orderBy: { museumId: "asc" },
  });

  console.log("Artworks needing enrichment:\n");
  let needsWork = 0;

  for (const art of artworks) {
    const hasDesc = art.description && art.description.length > 50;
    const hasFaqs = art.faqs && Array.isArray(art.faqs) && (art.faqs as any[]).length >= 2;

    if (!hasDesc || !hasFaqs) {
      needsWork++;
      const status: string[] = [];
      if (!hasDesc) status.push("NO DESC");
      if (!hasFaqs) status.push("NO FAQs");
      console.log(`[${status.join(", ")}] ${art.title}`);
      console.log(`   slug: ${art.slug}`);
      console.log(`   wiki: ${art.wikipediaUrl || "none"}\n`);
    }
  }

  console.log(`\n=== ${needsWork} artworks need enrichment ===`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
