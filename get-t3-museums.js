const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function run() {
  const museums = await prisma.museum.findMany({
    where: { Artwork: { some: {} } },
    select: { slug: true, name: true, address: true, latitude: true, websiteUrl: true, _count: { select: { Artwork: true } } },
    orderBy: { name: "asc" }
  });
  const t3 = museums.filter(m => m._count.Artwork === 1 && (!m.address || !m.latitude || !m.websiteUrl));
  console.log("T3 need work: " + t3.length);
  t3.forEach(m => console.log(m.slug + " | " + m.name));
  await prisma.$disconnect();
}
run();
