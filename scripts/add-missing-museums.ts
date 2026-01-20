import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newMuseums = [
  { slug: "kunstmuseum-basel", name: "Kunstmuseum Basel", city: "Basel", country: "Switzerland" },
  { slug: "isabella-stewart-gardner", name: "Isabella Stewart Gardner Museum", city: "Boston", country: "United States" },
  { slug: "albright-knox", name: "Albright-Knox Art Gallery", city: "Buffalo", country: "United States" },
  { slug: "ny-carlsberg-glyptotek", name: "Ny Carlsberg Glyptotek", city: "Copenhagen", country: "Denmark" },
  { slug: "lenbachhaus", name: "Lenbachhaus", city: "Munich", country: "Germany" },
  { slug: "musee-toulouse-lautrec", name: "Musée Toulouse-Lautrec", city: "Albi", country: "France" },
  { slug: "munch-museum", name: "Munch Museum", city: "Oslo", country: "Norway" },
  { slug: "whitney-museum", name: "Whitney Museum of American Art", city: "New York", country: "United States" },
  { slug: "american-gothic-house", name: "Art Institute of Chicago", city: "Chicago", country: "United States" },
];

async function main() {
  console.log("Adding missing museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  // Now assign artworks with corrected slugs
  const assignments: Record<string, string> = {
    // Metropolitan Museum of Art (slug is 'met')
    "bridge-water-lilies": "met",
    "japanese-footbridge": "met",
    "woman-parasol": "met",
    "joan-of-arc-bastien-lepage": "met",
    "morning-interior-luce": "met",
    "creation-expulsion-giovanni": "met",
    "heart-of-andes": "met",
    "fur-traders-missouri": "met",
    "still-life-apples-cezanne": "met",
    "la-grenouillere-monet": "met",
    "self-portrait-anniversary": "met",
    "violin-checkerboard": "met",
    "kauterskill-falls-gifford": "met",

    // Kunstmuseum Basel
    "when-will-you-marry": "kunstmuseum-basel",
    "eiffel-tower-delaunay": "kunstmuseum-basel",

    // Isabella Stewart Gardner
    "storm-sea-galilee": "isabella-stewart-gardner",

    // Albright-Knox
    "yellow-christ": "albright-knox",
    "carcass-beef": "albright-knox",

    // Ny Carlsberg Glyptotek
    "interior-woman-piano": "ny-carlsberg-glyptotek",
    "dust-motes-dancing-sunbeams": "ny-carlsberg-glyptotek",
    "interior-young-woman-behind": "ny-carlsberg-glyptotek",

    // Lenbachhaus
    "lady-green-jacket": "lenbachhaus",

    // Musée Toulouse-Lautrec
    "moulin-rouge-la-goulue": "musee-toulouse-lautrec",

    // Munch Museum / National Gallery Oslo
    "anxiety-munch": "munch-museum",
    "sick-child": "national-gallery-oslo",
    "madonna-munch": "munch-museum",

    // Whitney Museum
    "dempsey-firpo": "whitney-museum",

    // More known locations
    "the-last-supper-juanes": "prado",
    "black-square": "tretyakov-gallery",
    "tree-of-life-klimt": "mak-vienna",
    "adele-bloch-bauer-ii": "neue-galerie",
    "portrait-dr-gachet": "musee-dorsay",

    // Others
    "caresses-khnopff": "royal-museums-belgium",
    "the-blue-room-valadon": "musee-de-lorangerie",
    "two-girls-in-grass": "neue-pinakothek",
    "port-of-hamburg-marquet": "hamburger-kunsthalle",
    "aurora-reni": "casino-rospigliosi",
    "assumption-correggio": "parma-cathedral",
    "ghent-altarpiece": "saint-bavo-cathedral",
    "isenheim-altarpiece-crucifixion": "musee-unterlinden",
    "deposition-pontormo": "santa-felicita",
    "jane-avril": "musee-toulouse-lautrec",

    // Rijksmuseum
    "woman-reading-letter": "rijksmuseum",
    "still-life-asparagus-coorte": "rijksmuseum",

    // Phillips Collection
    "luncheon-boating-party-renoir": "phillips-collection",

    // Louvre
    "death-sardanapalus": "louvre",
    "women-of-algiers": "louvre",
    "pilgrimage-cythera": "louvre",
    "pierrot-gilles": "louvre",
    "bathsheba-bath": "louvre",
    "the-lacemaker": "louvre",
    "muses-clio-euterpe-thalia": "louvre",
    "entry-alexander-babylon": "louvre",
    "peasant-family-interior": "louvre",

    // Musée d'Orsay
    "job-bonnat": "musee-dorsay",
    "lady-with-glove": "musee-dorsay",
    "death-of-gravedigger": "musee-dorsay",
    "bal-moulin-galette": "musee-dorsay",
    "the-star-dancer": "musee-dorsay",
    "floor-scrapers": "musee-dorsay",
    "arearea": "musee-dorsay",
    "bellelli-family": "musee-dorsay",
    "dancers-blue": "musee-dorsay",
    "the-circus-seurat": "musee-dorsay",
    "the-balcony-manet": "musee-dorsay",

    // National Gallery of Art
    "woman-holding-balance": "national-gallery-of-art",
    "woman-dead-child": "national-gallery-of-art",
    "circe-and-lovers-dossi": "national-gallery-of-art",
    "regatta-cowes": "national-gallery-of-art",

    // National Gallery, London
    "bathers-asnieres": "national-gallery",
    "rokeby-venus": "national-gallery",
    "music-tuileries": "national-gallery",
    "interior-peasants-cottage": "national-gallery",
    "ships-in-a-calm": "national-gallery",
    "cavalry-sortie-from-fort": "national-gallery",
  };

  console.log("\nAssigning artworks to museums...\n");

  let assigned = 0;
  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug: artworkSlug } });
    if (!artwork) continue;
    if (artwork.museumId) continue;

    const museum = await prisma.museum.findUnique({ where: { slug: museumSlug } });
    if (!museum) {
      console.log(`Museum not found: ${museumSlug}`);
      continue;
    }

    await prisma.artwork.update({
      where: { slug: artworkSlug },
      data: { museumId: museum.id },
    });
    console.log(`Assigned: ${artwork.title} → ${museum.name}`);
    assigned++;
  }

  const remaining = await prisma.artwork.count({ where: { museumId: null } });
  console.log(`\nNewly assigned: ${assigned}`);
  console.log(`Artworks still without museum: ${remaining}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
