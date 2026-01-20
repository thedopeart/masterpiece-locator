import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Adding more artworks for orphaned artists...\n");

  const getArtist = async (slug: string) => {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    return artist?.id;
  };

  const getMuseum = async (slug: string) => {
    const museum = await prisma.museum.findUnique({ where: { slug } });
    return museum?.id;
  };

  const artworks = [
    // Fernand Khnopff (d.1921) - Belgian Symbolist
    {
      title: "The Caresses",
      slug: "the-caresses-khnopff",
      artistSlug: "fernand-khnopff",
      year: 1896,
      medium: "Oil on canvas",
      dimensions: "50.5 cm × 150 cm",
      description: "A sphinx with a woman's head presses against a young man, an enigmatic Symbolist allegory of desire and death.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Fernand_Khnopff_-_Caresses_-_Google_Art_Project.jpg",
      museumSlug: "royal-museums-belgium",
    },

    // Maximilien Luce (d.1941) - Neo-Impressionist
    {
      title: "Morning, Interior",
      slug: "morning-interior-luce",
      artistSlug: "maximilien-luce",
      year: 1890,
      medium: "Oil on canvas",
      dimensions: "65 cm × 81 cm",
      description: "A woman washes at a basin in morning light, rendered in the Pointillist technique with warm, domestic intimacy.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Maximilien_Luce_-_Morning%2C_Interior_-_Google_Art_Project.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Suzanne Valadon (d.1938) - French Post-Impressionist
    {
      title: "The Blue Room",
      slug: "the-blue-room-valadon",
      artistSlug: "suzanne-valadon",
      year: 1923,
      medium: "Oil on canvas",
      dimensions: "90 cm × 116 cm",
      description: "A woman in striped pants reclines on a bed, a bold and unapologetic depiction of female autonomy.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Valadon-Blue-Room.jpg",
      museumSlug: null,
    },

    // Otto Mueller (d.1930) - German Expressionist
    {
      title: "Two Girls in the Grass",
      slug: "two-girls-in-grass",
      artistSlug: "otto-mueller",
      year: 1926,
      medium: "Distemper on canvas",
      dimensions: "90 cm × 70 cm",
      description: "Two nude figures in a natural setting, rendered in Mueller's characteristic muted palette and elongated forms.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Otto_Mueller_-_Zwei_M%C3%A4dchen_im_Gras.jpg",
      museumSlug: null,
    },

    // Francis Picabia (d.1953) - Dada
    {
      title: "I See Again in Memory My Dear Udnie",
      slug: "i-see-again-udnie",
      artistSlug: "francis-picabia",
      year: 1914,
      medium: "Oil on canvas",
      dimensions: "250.2 cm × 198.8 cm",
      description: "An abstract composition inspired by a dancer, demonstrating Picabia's transition from Cubism to pure abstraction.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Francis_Picabia%2C_1914%2C_I_See_Again_in_Memory_My_Dear_Udnie%2C_oil_on_canvas%2C_250.2_x_198.8_cm%2C_MoMA%2C_New_York.jpg",
      museumSlug: "moma",
    },

    // El Lissitzky (d.1941) - Constructivist
    {
      title: "Beat the Whites with the Red Wedge",
      slug: "beat-whites-red-wedge",
      artistSlug: "el-lissitzky",
      year: 1919,
      medium: "Lithograph",
      dimensions: "53 cm × 70 cm",
      description: "A revolutionary propaganda poster using abstract geometric forms to symbolize the Bolshevik victory.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/El_Lissitzky_-_Beat_the_Whites_with_the_Red_Wedge.jpg",
      museumSlug: null,
    },

    // Albert Marquet (d.1947) - Fauvist
    {
      title: "The Port of Hamburg",
      slug: "port-of-hamburg-marquet",
      artistSlug: "albert-marquet",
      year: 1909,
      medium: "Oil on canvas",
      dimensions: "68 cm × 81 cm",
      description: "A harbor scene with subtle tonal variations, showing Marquet's move from Fauvism to a more restrained style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Albert_Marquet_-_Le_Port_de_Hambourg.jpg",
      museumSlug: null,
    },

    // Jules Pascin (d.1930) - School of Paris
    {
      title: "Back View of Venus",
      slug: "back-view-venus",
      artistSlug: "jules-pascin",
      year: 1924,
      medium: "Oil on canvas",
      dimensions: "81 cm × 54 cm",
      description: "A reclining nude seen from behind, rendered in Pascin's characteristic soft, pearly tones.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Jules_Pascin_-_Back_View_of_Venus.jpg",
      museumSlug: null,
    },

    // Adriaen van Ostade (d.1685) - Dutch Golden Age
    {
      title: "The Interior of a Peasant's Cottage",
      slug: "interior-peasants-cottage",
      artistSlug: "adriaen-van-ostade",
      year: 1668,
      medium: "Oil on oak panel",
      dimensions: "34 cm × 40 cm",
      description: "A rustic interior scene with peasants drinking and smoking, bathed in golden light.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Adriaen_van_Ostade_-_The_Interior_of_a_Peasant%27s_Cottage.jpg",
      museumSlug: "national-gallery",
    },

    // Willem van de Velde the Younger (d.1707) - Dutch Marine
    {
      title: "Ships in a Calm",
      slug: "ships-in-a-calm",
      artistSlug: "willem-van-de-velde-younger",
      year: 1665,
      medium: "Oil on canvas",
      dimensions: "53.5 cm × 65 cm",
      description: "Dutch ships float on mirror-still water under a vast sky, a masterpiece of marine painting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Willem_van_de_Velde_the_Younger_-_Ships_in_a_Calm_-_WGA24539.jpg",
      museumSlug: "national-gallery",
    },

    // Luca Giordano (d.1705) - Italian Baroque
    {
      title: "The Fall of the Rebel Angels",
      slug: "fall-rebel-angels-giordano",
      artistSlug: "luca-giordano",
      year: 1666,
      medium: "Oil on canvas",
      dimensions: "419 cm × 283 cm",
      description: "Archangel Michael casts the rebel angels into hell in a dramatic swirl of falling figures.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Luca_Giordano_-_Fall_of_the_Rebel_Angels_-_WGA09017.jpg",
      museumSlug: null,
    },

    // Louis Le Nain (d.1648) - French
    {
      title: "Peasant Family in an Interior",
      slug: "peasant-family-interior",
      artistSlug: "louis-le-nain",
      year: 1642,
      medium: "Oil on canvas",
      dimensions: "113 cm × 159 cm",
      description: "A dignified portrayal of peasant life, treating humble subjects with the gravity of history painting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Louis_Le_Nain_-_Peasant_Family_in_an_Interior_-_WGA12585.jpg",
      museumSlug: "louvre",
    },

    // Henry Raeburn (d.1823) - Scottish
    {
      title: "The Reverend Robert Walker Skating on Duddingston Loch",
      slug: "reverend-walker-skating",
      artistSlug: "henry-raeburn",
      year: 1795,
      medium: "Oil on canvas",
      dimensions: "76.2 cm × 63.5 cm",
      description: "A minister skates elegantly on ice, an iconic image of Scottish Enlightenment confidence.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Henry_Raeburn_-_The_Rev._Robert_Walker_Skating_on_Duddingston_Loch.jpg",
      museumSlug: "national-galleries-scotland",
    },

    // Thomas Lawrence (d.1830) - British Regency
    {
      title: "The Red Boy",
      slug: "the-red-boy",
      artistSlug: "thomas-lawrence",
      year: 1825,
      medium: "Oil on canvas",
      dimensions: "145 cm × 114 cm",
      description: "A young boy in a bright red suit stands confidently, capturing Regency-era childhood with bravura brushwork.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sir_Thomas_Lawrence_-_Charles_William_Lambton_%28The_Red_Boy%29.jpg",
      museumSlug: null,
    },

    // Carlos Schwabe (d.1926) - Symbolist
    {
      title: "The Death of the Gravedigger",
      slug: "death-of-gravedigger",
      artistSlug: "carlos-schwabe",
      year: 1895,
      medium: "Watercolor and gouache",
      dimensions: "75 cm × 55.5 cm",
      description: "An angel of death carries away the soul of a gravedigger, a mystical Symbolist meditation on mortality.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Carlos_Schwabe_The_death_of_the_gravedigger.jpg",
      museumSlug: "musee-dorsay",
    },

    // Hans Makart (d.1884) - Austrian Academic
    {
      title: "The Entry of Charles V into Antwerp",
      slug: "entry-charles-v-antwerp",
      artistSlug: "hans-makart",
      year: 1878,
      medium: "Oil on canvas",
      dimensions: "520 cm × 952 cm",
      description: "A massive theatrical depiction of the emperor's triumphal entry, epitomizing Makart's opulent historicism.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Makart_einzug_karls.jpg",
      museumSlug: "hamburger-kunsthalle",
    },

    // Jules Bastien-Lepage (d.1884) - French Naturalist
    {
      title: "Joan of Arc",
      slug: "joan-of-arc-bastien-lepage",
      artistSlug: "jules-bastien-lepage",
      year: 1879,
      medium: "Oil on canvas",
      dimensions: "254 cm × 279.4 cm",
      description: "The young Joan stands in her parents' garden, transfixed by her vision of saints calling her to save France.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Jules_Bastien-Lepage_-_Joan_of_Arc_-_Google_Art_Project.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Emanuel de Witte (d.1692) - Dutch
    {
      title: "Interior of the Oude Kerk, Delft",
      slug: "interior-oude-kerk-delft",
      artistSlug: "emanuel-de-witte",
      year: 1650,
      medium: "Oil on panel",
      dimensions: "61 cm × 44 cm",
      description: "Sunlight streams through the windows of the whitewashed church interior, creating dramatic contrasts.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Emanuel_de_Witte_-_Interior_of_the_Oude_Kerk%2C_Delft_-_WGA25781.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Philips Wouwerman (d.1668) - Dutch
    {
      title: "Cavalry Making a Sortie from a Fort on a Hill",
      slug: "cavalry-sortie-from-fort",
      artistSlug: "philips-wouwerman",
      year: 1646,
      medium: "Oil on panel",
      dimensions: "46.2 cm × 65.1 cm",
      description: "Cavalry charges from a hilltop fortress, demonstrating Wouwerman's mastery of horses in action.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Philips_Wouwerman_-_Cavalry_Making_a_Sortie_from_a_Fort_on_a_Hill.jpg",
      museumSlug: "national-gallery",
    },

    // Ferdinand Georg Waldmüller (d.1865) - Austrian Biedermeier
    {
      title: "Children at a Window",
      slug: "children-at-window-waldmuller",
      artistSlug: "ferdinand-georg-waldmuller",
      year: 1853,
      medium: "Oil on panel",
      dimensions: "77 cm × 62 cm",
      description: "Children lean from a flower-bedecked window in brilliant sunlight, capturing bourgeois domestic bliss.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Ferdinand_Georg_Waldm%C3%BCller_-_Children_at_a_Window.jpg",
      museumSlug: null,
    },

    // Wilhelm Leibl (d.1900) - German Realist
    {
      title: "Three Women in Church",
      slug: "three-women-in-church",
      artistSlug: "wilhelm-leibl",
      year: 1882,
      medium: "Oil on panel",
      dimensions: "113 cm × 77 cm",
      description: "Three peasant women pray in a village church, rendered with extraordinary attention to texture and light.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Wilhelm_Leibl_-_Three_Women_in_Church.jpg",
      museumSlug: "hamburger-kunsthalle",
    },
  ];

  for (const artwork of artworks) {
    const artistId = await getArtist(artwork.artistSlug);
    if (!artistId) {
      console.log(`Artist not found: ${artwork.artistSlug}`);
      continue;
    }

    const museumId = artwork.museumSlug ? await getMuseum(artwork.museumSlug) : null;

    await prisma.artwork.upsert({
      where: { slug: artwork.slug },
      update: {},
      create: {
        title: artwork.title,
        slug: artwork.slug,
        year: artwork.year,
        medium: artwork.medium,
        dimensions: artwork.dimensions,
        description: artwork.description,
        imageUrl: artwork.imageUrl,
        artistId,
        museumId,
      },
    });
    console.log(`Added: ${artwork.title} (${artwork.artistSlug})`);
  }

  const artists = await prisma.artist.findMany({
    include: { _count: { select: { artworks: true } } }
  });
  const orphaned = artists.filter(a => a._count.artworks === 0);

  const artworkCount = await prisma.artwork.count();
  console.log(`\nTotal artworks: ${artworkCount}`);
  console.log(`Remaining orphaned artists: ${orphaned.length}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
