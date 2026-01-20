import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Map artwork slug to museum slug
const assignments: Record<string, string> = {
  // Kunsthistorisches Museum, Vienna
  "hunters-in-the-snow": "kunsthistorisches-museum",
  "tower-of-babel": "kunsthistorisches-museum",

  // Museo del Prado
  "descent-rogier": "prado",
  "garden-earthly-delights": "prado",
  "third-of-may-1808": "prado",
  "nude-maja": "prado",
  "clothed-maja": "prado",
  "the-dog-goya": "prado",
  "surrender-breda": "prado",
  "last-supper-juanes": "prado",
  "adam-eve-cranach": "prado",
  "death-sardanapalus": "louvre",

  // Louvre
  "women-of-algiers": "louvre",
  "pilgrimage-cythera": "louvre",
  "pierrot-gilles": "louvre",
  "muses-clio-euterpe-thalia": "louvre",
  "entry-alexander-babylon": "louvre",
  "peasant-family-interior": "louvre",

  // Metropolitan Museum of Art
  "bridge-water-lilies": "metropolitan-museum-of-art",
  "japanese-footbridge": "metropolitan-museum-of-art",
  "woman-parasol": "metropolitan-museum-of-art",
  "joan-of-arc-bastien-lepage": "metropolitan-museum-of-art",
  "morning-interior-luce": "metropolitan-museum-of-art",
  "creation-expulsion-giovanni": "metropolitan-museum-of-art",
  "heart-of-andes": "metropolitan-museum-of-art",
  "fur-traders-missouri": "metropolitan-museum-of-art",
  "rocky-mountains-landers-peak": "metropolitan-museum-of-art",

  // National Gallery, London
  "charing-cross-bridge-derain": "national-gallery",
  "interior-peasants-cottage": "national-gallery",
  "ships-in-a-calm": "national-gallery",
  "cavalry-sortie-from-fort": "national-gallery",
  "the-hay-wain": "national-gallery",
  "sunflowers-van-gogh": "national-gallery",

  // Tate Britain
  "flaming-june": "tate-britain",
  "carnation-lily-rose": "tate-britain",
  "hylas-nymphs": "tate-britain",
  "circe-offering-cup": "tate-britain",

  // Uffizi Gallery
  "annunciation-simone-martini": "uffizi",
  "adoration-magi-gentile": "uffizi",
  "adoration-magi-botticelli": "uffizi",
  "pallas-centaur": "uffizi",

  // Vatican Museums
  "school-of-athens": "vatican-museums",
  "transfiguration": "vatican-museums",

  // Musée d'Orsay
  "job-bonnat": "musee-dorsay",
  "lady-with-glove": "musee-dorsay",
  "death-of-gravedigger": "musee-dorsay",
  "bal-moulin-galette": "musee-dorsay",
  "the-star-dancer": "musee-dorsay",
  "floor-scrapers": "musee-dorsay",

  // National Gallery of Art, Washington
  "circe-and-lovers-dossi": "national-gallery-of-art",
  "watson-shark": "national-gallery-of-art",

  // Museum of Modern Art (MoMA)
  "i-see-again-udnie": "moma",
  "the-city-leger": "moma",
  "persistence-of-memory": "moma",
  "starry-night": "moma",

  // Art Institute of Chicago
  "paris-street-rainy": "art-institute-chicago",
  "sunday-grande-jatte": "art-institute-chicago",
  "american-gothic": "art-institute-chicago",

  // Rijksmuseum
  "still-life-asparagus-coorte": "rijksmuseum",
  "jewish-bride": "rijksmuseum",
  "syndics": "rijksmuseum",
  "milkmaid": "rijksmuseum",

  // Royal Museums of Fine Arts of Belgium
  "the-caresses-khnopff": "royal-museums-belgium",
  "christs-entry-into-brussels": "royal-museums-belgium",
  "bread-eater-permeke": "royal-museums-belgium",

  // Hamburger Kunsthalle
  "entry-charles-v-antwerp": "hamburger-kunsthalle",
  "three-women-in-church": "hamburger-kunsthalle",
  "wanderer-above-sea-fog": "hamburger-kunsthalle",

  // National Galleries of Scotland
  "reverend-walker-skating": "national-galleries-scotland",

  // Belvedere Museum, Vienna
  "death-and-life": "belvedere",
  "kiss-klimt": "belvedere",

  // Munch Museum / National Gallery Norway
  "anxiety-munch": "national-gallery-norway",
  "sick-child": "national-gallery-norway",
  "madonna-munch": "national-gallery-norway",

  // Tretyakov Gallery
  "ninth-wave": "tretyakov-gallery",
  "barge-haulers": "tretyakov-gallery",
  "reply-cossacks": "tretyakov-gallery",

  // Alte Pinakothek, Munich
  "tower-blue-horses": "alte-pinakothek",
  "yellow-cow": "alte-pinakothek",
  "large-blue-horses": "neue-pinakothek",

  // Smithsonian / Other American
  "dempsey-firpo": "whitney-museum",
  "niagara-church": "corcoran-gallery",

  // Villa Borghese
  "portrait-innocent-x": "galleria-doria-pamphilj",

  // Various
  "two-sisters-terrace": "art-institute-chicago",
  "luncheon-boating-party-renoir": "phillips-collection",
  "the-circus-seurat": "musee-dorsay",
  "bathers-asnieres": "national-gallery",
  "moulin-rouge-la-goulue": "musee-toulouse-lautrec",
  "bellelli-family": "musee-dorsay",
  "dancers-blue": "musee-dorsay",
  "basket-of-apples": "art-institute-chicago",
  "still-life-apples-cezanne": "metropolitan-museum-of-art",
  "arearea": "musee-dorsay",
  "when-will-you-marry": "kunstmuseum-basel",
  "storm-sea-galilee": "isabella-stewart-gardner",
  "bathsheba-bath": "louvre",
  "woman-holding-balance": "national-gallery-of-art",
  "the-lacemaker": "louvre",
  "woman-reading-letter": "rijksmuseum",
  "rokeby-venus": "national-gallery",
  "music-tuileries": "national-gallery",
  "the-balcony-manet": "musee-dorsay",
  "la-grenouillere-monet": "metropolitan-museum-of-art",
  "regatta-cowes": "national-gallery-of-art",
  "the-dance-derain": "hermitage-museum",
  "simultaneous-windows": "hamburger-kunsthalle",
  "city-rises": "moma",
  "states-mind-farewells": "moma",
  "suprematist-composition": "moma",
  "black-square": "tretyakov-gallery",
  "portrait-dr-gachet": "musee-dorsay",
  "yellow-christ": "albright-knox",
  "self-portrait-anniversary": "metropolitan-museum-of-art",
  "woman-dead-child": "national-gallery-of-art",
  "midsummer-dance": "national-museum-stockholm",
  "carcass-beef": "albright-knox",
  "interior-woman-piano": "ny-carlsberg-glyptotek",
  "street-berlin": "moma",
  "lady-green-jacket": "municipal-gallery-lenbachhaus",
  "portrait-picasso-gris": "art-institute-chicago",
  "violin-checkerboard": "metropolitan-museum-of-art",
  "contrast-of-forms": "moma",
  "eiffel-tower-delaunay": "kunstmuseum-basel",
  "port-saint-tropez": "national-museum-western-art-tokyo",
};

async function main() {
  console.log("Assigning museums to artworks...\n");

  let assigned = 0;
  let notFound = 0;
  let museumNotFound = 0;

  for (const [artworkSlug, museumSlug] of Object.entries(assignments)) {
    const artwork = await prisma.artwork.findUnique({
      where: { slug: artworkSlug },
    });

    if (!artwork) {
      console.log(`Artwork not found: ${artworkSlug}`);
      notFound++;
      continue;
    }

    if (artwork.museumId) {
      // Already has a museum
      continue;
    }

    const museum = await prisma.museum.findUnique({
      where: { slug: museumSlug },
    });

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

  const remaining = await prisma.artwork.count({ where: { museumId: null } });
  console.log(`\nAssigned: ${assigned}`);
  console.log(`Artworks not found: ${notFound}`);
  console.log(`Museums not found: ${museumNotFound}`);
  console.log(`Artworks still without museum: ${remaining}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
