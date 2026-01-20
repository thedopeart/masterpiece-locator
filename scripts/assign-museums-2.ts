import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// New museums to add
const newMuseums = [
  { slug: "crystal-bridges", name: "Crystal Bridges Museum of American Art", city: "Bentonville", country: "United States" },
  { slug: "clark-art-institute", name: "Clark Art Institute", city: "Williamstown", country: "United States" },
  { slug: "smithsonian-american-art", name: "Smithsonian American Art Museum", city: "Washington D.C.", country: "United States" },
  { slug: "national-gallery-ireland", name: "National Gallery of Ireland", city: "Dublin", country: "Ireland" },
  { slug: "versailles", name: "Palace of Versailles", city: "Versailles", country: "France" },
  { slug: "cloisters", name: "The Cloisters", city: "New York", country: "United States" },
  { slug: "kimbell-art-museum", name: "Kimbell Art Museum", city: "Fort Worth", country: "United States" },
  { slug: "ateneum", name: "Ateneum Art Museum", city: "Helsinki", country: "Finland" },
  { slug: "skagens-museum", name: "Skagens Museum", city: "Skagen", country: "Denmark" },
  { slug: "gothenburg-museum", name: "Gothenburg Museum of Art", city: "Gothenburg", country: "Sweden" },
  { slug: "manchester-art-gallery", name: "Manchester Art Gallery", city: "Manchester", country: "United Kingdom" },
  { slug: "ferens-art-gallery", name: "Ferens Art Gallery", city: "Hull", country: "United Kingdom" },
  { slug: "palazzo-medici-riccardi", name: "Palazzo Medici Riccardi", city: "Florence", country: "Italy" },
  { slug: "san-zaccaria", name: "Chiesa di San Zaccaria", city: "Venice", country: "Italy" },
  { slug: "palazzo-farnese", name: "Palazzo Farnese", city: "Rome", country: "Italy" },
  { slug: "galleria-colonna", name: "Galleria Colonna", city: "Rome", country: "Italy" },
  { slug: "museo-opera-duomo-siena", name: "Museo dell'Opera del Duomo", city: "Siena", country: "Italy" },
  { slug: "pinacoteca-siena", name: "Pinacoteca Nazionale di Siena", city: "Siena", country: "Italy" },
  { slug: "national-museum-gdansk", name: "National Museum in Gdańsk", city: "Gdańsk", country: "Poland" },
  { slug: "phoenix-art-museum", name: "Phoenix Art Museum", city: "Phoenix", country: "United States" },
  { slug: "national-gallery-victoria", name: "National Gallery of Victoria", city: "Melbourne", country: "Australia" },
  { slug: "kunsthalle-bremen", name: "Kunsthalle Bremen", city: "Bremen", country: "Germany" },
  { slug: "dallas-museum-of-art", name: "Dallas Museum of Art", city: "Dallas", country: "United States" },
  { slug: "museum-georg-schafer", name: "Museum Georg Schäfer", city: "Schweinfurt", country: "Germany" },
];

// Artwork to museum assignments
const assignments: Record<string, string> = {
  // Metropolitan Museum of Art
  "1807-friedland": "met",
  "eatons-neck-long-island": "met",
  "interior-oude-kerk-delft": "met",
  "oedipus-and-the-sphinx-moreau": "met",
  "smokers-inn": "met",
  "boulevard-montmartre-winter": "met",
  "horse-fair": "met",
  "journey-of-the-magi-sassetta": "met",
  "penitent-magdalen-la-tour": "met",

  // Uffizi Gallery
  "judith-slaying-holofernes-artemisia": "uffizi",
  "madonna-child-two-angels-lippi": "uffizi",
  "madonna-of-the-harpies": "uffizi",
  "portinari-altarpiece": "uffizi",
  "maesta-santa-trinita": "uffizi",

  // Art Institute of Chicago
  "the-childs-bath": "art-institute-chicago",
  "song-of-the-lark": "art-institute-chicago",

  // National Gallery of Art, Washington
  "ville-davray": "national-gallery-of-art",

  // Phillips Collection
  "luncheon-of-the-boating-party": "phillips-collection",

  // Crystal Bridges
  "kindred-spirits": "crystal-bridges",

  // Clark Art Institute
  "nymphs-satyr": "clark-art-institute",
  "slave-market-gerome": "clark-art-institute",

  // Smithsonian American Art
  "sierra-nevada": "smithsonian-american-art",

  // National Gallery of Ireland
  "man-writing-letter": "national-gallery-ireland",
  "woman-reading-letter-metsu": "national-gallery-ireland",

  // Palace of Versailles
  "madame-henriette-flora": "versailles",
  "marie-antoinette-rose": "versailles",

  // The Cloisters (Met)
  "merode-altarpiece": "cloisters",

  // Kimbell Art Museum
  "cheat-ace-clubs": "kimbell-art-museum",

  // Kröller-Müller Museum
  "the-cyclops": "kroeller-mueller-museum",
  "the-three-brides": "kroeller-mueller-museum",

  // Ateneum Helsinki
  "aino-triptych": "ateneum",

  // Skagens Museum
  "summer-evening-skagen-beach": "skagens-museum",

  // Gothenburg Museum
  "nordic-summer-evening": "gothenburg-museum",

  // Manchester Art Gallery
  "work-ford-madox-brown": "manchester-art-gallery",

  // Ferens Art Gallery
  "ulysses-and-sirens-draper": "ferens-art-gallery",

  // Gallerie dell'Accademia Venice
  "fisherman-presenting-ring-doge": "gallerie-dell-accademia-venice",
  "portrait-gentleman-study-lotto": "gallerie-dell-accademia-venice",

  // Palazzo Medici Riccardi
  "procession-magi-gozzoli": "palazzo-medici-riccardi",

  // San Zaccaria Venice
  "san-zaccaria-altarpiece": "san-zaccaria",

  // Palazzo Farnese
  "triumph-bacchus-ariadne": "palazzo-farnese",

  // Galleria Colonna
  "bean-eater": "galleria-colonna",

  // Museo dell'Opera del Duomo Siena
  "maesta-duccio": "museo-opera-duomo-siena",

  // Pinacoteca Siena
  "fall-rebel-angels-beccafumi": "pinacoteca-siena",

  // National Museum Gdańsk
  "last-judgment-memling": "national-museum-gdansk",

  // Phoenix Art Museum
  "pollice-verso": "phoenix-art-museum",

  // National Gallery of Victoria
  "banquet-cleopatra": "national-gallery-victoria",

  // Kunsthalle Bremen
  "parrot-walk": "kunsthalle-bremen",

  // Dallas Museum of Art
  "time-and-tide-bricher": "dallas-museum-of-art",

  // Museum Georg Schäfer
  "the-bookworm-spitzweg": "museum-georg-schafer",

  // Galleria Borghese / Barberini
  "et-in-arcadia-ego-guercino": "barberini",
  "triumph-divine-providence": "barberini",

  // Lenbachhaus
  "schokko-wide-brimmed-hat": "lenbachhaus",
  "self-portrait-with-skeleton": "lenbachhaus",

  // National Gallery Oslo
  "blue-interior-backer": "national-gallery-oslo",
  "sick-girl-krohg": "national-gallery-oslo",

  // Nationalmuseum Stockholm
  "breakfast-under-big-birch": "national-museum-stockholm",
  "sea-eagles-liljefors": "national-museum-stockholm",

  // Belvedere Vienna
  "children-at-window-waldmuller": "belvedere",

  // Vatican Museums
  "delivery-of-the-keys": "vatican-museums",

  // Walker Art Gallery
  "punishment-of-lust": "walker-art-gallery",

  // Kunsthistorisches Museum
  "fall-rebel-angels-giordano": "kunsthistorisches-museum",

  // Wallace Collection
  "lace-maker-netscher": "wallace-collection",
  "vision-saint-john-cano": "wallace-collection",

  // Royal Museum of Fine Arts Antwerp
  "landscape-flight-egypt": "musee-royal-beaux-arts-antwerp",
  "portrait-man-roman-coin": "musee-royal-beaux-arts-antwerp",

  // Palazzo Pitti
  "hylas-nymphs-furini": "palazzo-pitti",

  // Minneapolis Institute of Art
  "dining-room-in-country": "minneapolis-institute-of-art",

  // Brooklyn Museum
  "last-days-pompeii-hamilton": "brooklyn-museum",

  // Detroit Institute of Arts
  "nocturne-black-gold-falling-rocket": "detroit-institute-of-arts",

  // Gemäldegalerie Berlin
  "portrait-young-girl-christus": "gemaldegalerie-berlin",
};

async function main() {
  console.log("Adding new museums...\n");

  for (const museum of newMuseums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Added: ${museum.name}`);
  }

  console.log("\nAssigning artworks to museums...\n");

  let assigned = 0;
  let notFound = 0;
  let museumNotFound = 0;

  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug: artworkSlug } });
    if (!artwork) {
      console.log(`Artwork not found: ${artworkSlug}`);
      notFound++;
      continue;
    }
    if (artwork.museumId) {
      // Already assigned
      continue;
    }

    const museum = await prisma.museum.findUnique({ where: { slug: museumSlug } });
    if (!museum) {
      console.log(`Museum not found: ${museumSlug} (for ${artworkSlug})`);
      museumNotFound++;
      continue;
    }

    await prisma.artwork.update({
      where: { slug: artworkSlug },
      data: { museumId: museum.id },
    });
    console.log(`Assigned: ${artwork.title} → ${museum.name}`);
    assigned++;
  }

  const totalArtworks = await prisma.artwork.count();
  const withMuseum = await prisma.artwork.count({ where: { museumId: { not: null } } });
  const remaining = totalArtworks - withMuseum;

  console.log(`\n=== Results ===`);
  console.log(`Newly assigned: ${assigned}`);
  console.log(`Artworks not found: ${notFound}`);
  console.log(`Museums not found: ${museumNotFound}`);
  console.log(`\nTotal artworks: ${totalArtworks}`);
  console.log(`With museum: ${withMuseum} (${Math.round(withMuseum/totalArtworks*100)}%)`);
  console.log(`Still missing: ${remaining}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
