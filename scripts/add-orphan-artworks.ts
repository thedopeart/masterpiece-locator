import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Adding artworks for orphaned artists...\n");

  // Get artist IDs
  const getArtist = async (slug: string) => {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    return artist?.id;
  };

  // Get museum IDs
  const getMuseum = async (slug: string) => {
    const museum = await prisma.museum.findUnique({ where: { slug } });
    return museum?.id;
  };

  const artworks = [
    // Gustave Courbet (d.1877) - French Realist
    {
      title: "The Origin of the World",
      slug: "origin-of-the-world",
      artistSlug: "gustave-courbet",
      year: 1866,
      medium: "Oil on canvas",
      dimensions: "46 cm × 55 cm",
      description: "A provocative and realistic depiction of the female form that remained hidden in private collections for over a century.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Gustave_Courbet_-_L%27Origine_du_monde_%281866%29.jpg",
      museumSlug: "musee-dorsay",
    },
    {
      title: "The Desperate Man",
      slug: "the-desperate-man",
      artistSlug: "gustave-courbet",
      year: 1845,
      medium: "Oil on canvas",
      dimensions: "45 cm × 54 cm",
      description: "A dramatic self-portrait showing the artist clutching his hair in anguish, capturing youthful Romantic intensity.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-45%29.jpg",
      museumSlug: null,
    },
    {
      title: "A Burial at Ornans",
      slug: "burial-at-ornans",
      artistSlug: "gustave-courbet",
      year: 1850,
      medium: "Oil on canvas",
      dimensions: "315 cm × 668 cm",
      description: "A monumental painting of a provincial funeral that shocked the art world by treating ordinary people with the scale reserved for history painting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg",
      museumSlug: "musee-dorsay",
    },
    {
      title: "The Artist's Studio",
      slug: "the-artists-studio",
      artistSlug: "gustave-courbet",
      year: 1855,
      medium: "Oil on canvas",
      dimensions: "361 cm × 598 cm",
      description: "A complex allegorical self-portrait showing Courbet painting a landscape surrounded by figures representing his artistic and social world.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gustave_Courbet_-_L%27Atelier_du_peintre.jpg",
      museumSlug: "musee-dorsay",
    },

    // Camille Pissarro (d.1903) - Impressionist
    {
      title: "Boulevard Montmartre at Night",
      slug: "boulevard-montmartre-night",
      artistSlug: "camille-pissarro",
      year: 1897,
      medium: "Oil on canvas",
      dimensions: "53.3 cm × 64.8 cm",
      description: "A luminous nocturnal view of the Parisian boulevard with gas lamps creating halos of light in the darkness.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Camille_Pissarro_-_Boulevard_Montmartre_at_Night_-_Google_Art_Project.jpg",
      museumSlug: "national-gallery",
    },
    {
      title: "The Boulevard Montmartre on a Winter Morning",
      slug: "boulevard-montmartre-winter",
      artistSlug: "camille-pissarro",
      year: 1897,
      medium: "Oil on canvas",
      dimensions: "64.8 cm × 81.3 cm",
      description: "A panoramic view of the busy Parisian boulevard from the artist's hotel window, capturing the movement of city life.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Camille_Pissarro_-_Boulevard_Montmartre%2C_morning%2C_cloudy_weather_-_Google_Art_Project.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Giovanni Bellini (d.1516) - Venetian Renaissance
    {
      title: "San Zaccaria Altarpiece",
      slug: "san-zaccaria-altarpiece",
      artistSlug: "giovanni-bellini",
      year: 1505,
      medium: "Oil on wood transferred to canvas",
      dimensions: "500 cm × 235 cm",
      description: "A serene sacra conversazione showing the Madonna and Child with saints in an architectural setting filled with golden light.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Giovanni_Bellini_-_San_Zaccaria_Altarpiece_-_WGA01737.jpg",
      museumSlug: null,
    },
    {
      title: "Madonna of the Meadow",
      slug: "madonna-of-the-meadow-bellini",
      artistSlug: "giovanni-bellini",
      year: 1505,
      medium: "Oil and tempera on panel",
      dimensions: "67 cm × 86 cm",
      description: "The Virgin prays over the sleeping Christ child in a peaceful Venetian landscape, foreshadowing his death and resurrection.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Giovanni_Bellini_-_Madonna_of_the_Meadow_-_Google_Art_Project.jpg",
      museumSlug: "national-gallery",
    },

    // Hans Memling (d.1494) - Flemish primitive
    {
      title: "The Last Judgment",
      slug: "last-judgment-memling",
      artistSlug: "hans-memling",
      year: 1471,
      medium: "Oil on oak panel",
      dimensions: "221 cm × 161 cm (central panel)",
      description: "A monumental triptych showing Christ in judgment, with the saved ascending to heaven and the damned falling into hell.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Hans_Memling_-_The_Last_Judgment_-_Google_Art_Project.jpg",
      museumSlug: null,
    },
    {
      title: "Portrait of a Man with a Roman Coin",
      slug: "portrait-man-roman-coin",
      artistSlug: "hans-memling",
      year: 1480,
      medium: "Oil on oak panel",
      dimensions: "31 cm × 23.2 cm",
      description: "A contemplative portrait of an unknown man holding an ancient Roman coin, demonstrating humanist interests.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Hans_Memling_-_Portrait_of_a_Man_with_a_Roman_Coin_-_WGA14898.jpg",
      museumSlug: null,
    },

    // Alphonse Mucha (d.1939) - Art Nouveau
    {
      title: "The Seasons (Spring)",
      slug: "the-seasons-spring-mucha",
      artistSlug: "alphonse-mucha",
      year: 1896,
      medium: "Color lithograph",
      dimensions: "103 cm × 54 cm",
      description: "A beautiful woman personifying spring surrounded by blossoming flowers in Mucha's distinctive Art Nouveau style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Alphonse_Mucha_-_Spring_1896.jpg",
      museumSlug: null,
    },
    {
      title: "Job Cigarettes",
      slug: "job-cigarettes",
      artistSlug: "alphonse-mucha",
      year: 1896,
      medium: "Color lithograph",
      dimensions: "66.7 cm × 46.4 cm",
      description: "An iconic Art Nouveau advertising poster featuring a woman with flowing hair exhaling cigarette smoke.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Alphonse_Mucha_-_Job_Cigarettes_1.jpg",
      museumSlug: null,
    },

    // Georges Braque (d.1963) - Cubist (still copyrighted, but let's add with no image)
    // Actually d.1963 means still copyrighted until 2033, skip

    // Édouard Vuillard (d.1940) - Nabis
    {
      title: "The Seamstress",
      slug: "the-seamstress-vuillard",
      artistSlug: "edouard-vuillard",
      year: 1893,
      medium: "Oil on canvas",
      dimensions: "47.5 cm × 41.3 cm",
      description: "An intimate domestic scene showing a woman sewing, with Vuillard's characteristic patterned surfaces and muted colors.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Edouard_Vuillard_-_The_Seamstress_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Filippo Lippi (d.1469) - Early Renaissance
    {
      title: "Madonna and Child with Two Angels",
      slug: "madonna-child-two-angels-lippi",
      artistSlug: "filippo-lippi",
      year: 1465,
      medium: "Tempera on panel",
      dimensions: "95 cm × 62 cm",
      description: "A tender depiction of the Virgin and Child with playful angels, featuring an innovative landscape background.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Filippo_Lippi_-_Madonna_col_Bambino_e_due_angeli_-_Google_Art_Project.jpg",
      museumSlug: "uffizi-gallery",
    },

    // Perugino (d.1523) - Renaissance
    {
      title: "The Delivery of the Keys",
      slug: "delivery-of-the-keys",
      artistSlug: "perugino",
      year: 1482,
      medium: "Fresco",
      dimensions: "335 cm × 550 cm",
      description: "Christ hands the keys of heaven to Saint Peter, set against a vast piazza with a central temple, demonstrating perfect linear perspective.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Pietro_Perugino_-_Delivery_of_the_Keys_-_WGA17200.jpg",
      museumSlug: null,
    },

    // Matthias Grünewald (d.1528) - Northern Renaissance
    {
      title: "Isenheim Altarpiece (Crucifixion)",
      slug: "isenheim-altarpiece-crucifixion",
      artistSlug: "matthias-grunewald",
      year: 1515,
      medium: "Oil on panel",
      dimensions: "269 cm × 307 cm",
      description: "A harrowing depiction of the Crucifixion with an anguished, tortured Christ, created for a hospital caring for plague victims.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Matthias_Gr%C3%BCnewald_-_The_Crucifixion_-_WGA10723.jpg",
      museumSlug: null,
    },

    // Félix Vallotton (d.1925) - Nabis
    {
      title: "The Ball",
      slug: "the-ball-vallotton",
      artistSlug: "felix-vallotton",
      year: 1899,
      medium: "Oil on cardboard",
      dimensions: "48 cm × 61 cm",
      description: "A child chases a red ball in a park, demonstrating Vallotton's distinctive flat color areas and psychological tension.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/F%C3%A9lix_Vallotton%2C_1899_-_Le_Ballon.jpg",
      museumSlug: "musee-dorsay",
    },

    // Frédéric Bazille (d.1870) - Early Impressionist
    {
      title: "Family Reunion",
      slug: "family-reunion-bazille",
      artistSlug: "frederic-bazille",
      year: 1867,
      medium: "Oil on canvas",
      dimensions: "152 cm × 227 cm",
      description: "The artist's family gathered under a chestnut tree at their estate, a masterpiece of early Impressionism before Bazille's death in the Franco-Prussian War.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Bazille_Family_Reunion.jpg",
      museumSlug: "musee-dorsay",
    },

    // Max Liebermann (d.1935) - German Impressionist
    {
      title: "The Parrot Walk",
      slug: "parrot-walk",
      artistSlug: "max-liebermann",
      year: 1902,
      medium: "Oil on canvas",
      dimensions: "88 cm × 72.5 cm",
      description: "An elegant scene of bourgeois leisure in the Amsterdam zoo's parrot avenue, demonstrating German Impressionism.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Max_Liebermann_Papageienallee_1902.jpg",
      museumSlug: null,
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

  // Count remaining orphans
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
