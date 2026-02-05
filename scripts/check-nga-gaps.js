const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Famous NGA works to check for
  const famousWorks = [
    "Ginevra de' Benci",  // Leonardo da Vinci - only Leonardo in Americas
    "Watson and the Shark",  // Copley
    "The Voyage of Life",  // Thomas Cole
    "The Alba Madonna",  // Raphael
    "Madonna of the Magnificat",  // Botticelli
    "Girl with the Red Hat",  // Vermeer
    "Lady with an Ermine",  // wait that's Krakow
    "Daniel in the Lions' Den",  // Rubens
    "Luncheon of the Boating Party",  // Renoir - actually Phillips Collection
    "St. George and the Dragon",  // Raphael
    "The Small Cowper Madonna",  // Raphael
    "Robert Gould Shaw Memorial",
    "Symphony in White"  // Whistler
  ];
  
  console.log("=== CHECKING FOR FAMOUS NGA WORKS ===");
  console.log("");
  
  for (const title of famousWorks) {
    const found = await prisma.artwork.findFirst({
      where: { title: { contains: title, mode: "insensitive" } },
      include: { Museum: { select: { name: true } } }
    });
    
    if (found) {
      console.log("✓", title, "→", found.Museum?.name || "No museum");
    } else {
      console.log("✗", title, "→ NOT FOUND");
    }
  }
  
  // Also check for key artists with NGA works
  console.log("");
  console.log("=== ARTISTS WITH NGA WORKS ===");
  
  const ngaArtists = await prisma.$queryRaw`
    SELECT a.name, COUNT(aw.id) as count
    FROM "Artist" a
    JOIN "Artwork" aw ON aw."artistId" = a.id
    JOIN "Museum" m ON aw."museumId" = m.id
    WHERE m.name LIKE '%National Gallery of Art%'
    GROUP BY a.name
    ORDER BY count DESC
    LIMIT 20
  `;
  
  ngaArtists.forEach(a => console.log("-", a.name, "(" + a.count + ")"));
  
  await prisma.$disconnect();
}

main();
