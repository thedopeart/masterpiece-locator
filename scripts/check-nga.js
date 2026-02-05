const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const nga = await prisma.museum.findFirst({
    where: { name: { contains: "National Gallery of Art", mode: "insensitive" } }
  });
  
  if (!nga) {
    console.log("NGA museum not found");
    await prisma.$disconnect();
    return;
  }
  
  console.log("NGA Museum:", nga.name, "(ID:", nga.id, ")");
  console.log("");
  
  const artworks = await prisma.artwork.findMany({
    where: { museumId: nga.id },
    include: { Artist: { select: { name: true } } },
    orderBy: { searchVolumeTier: "asc" }
  });
  
  console.log("Total artworks:", artworks.length);
  console.log("");
  console.log("Sample artworks:");
  artworks.slice(0, 25).forEach(a => {
    console.log("- T" + a.searchVolumeTier + ":", a.title, "(" + (a.Artist?.name || "Unknown") + ")");
  });
  
  await prisma.$disconnect();
}

main();
