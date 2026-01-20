import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Adding final batch of artworks for orphaned artists...\n");

  const getArtist = async (slug: string) => {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    return artist?.id;
  };

  const getMuseum = async (slug: string) => {
    const museum = await prisma.museum.findUnique({ where: { slug } });
    return museum?.id;
  };

  const artworks = [
    // Giovanni di Paolo (d.1482) - Sienese
    {
      title: "The Creation of the World and the Expulsion from Paradise",
      slug: "creation-expulsion-giovanni",
      artistSlug: "giovanni-di-paolo",
      year: 1445,
      medium: "Tempera and gold on wood",
      dimensions: "46.4 cm × 52.1 cm",
      description: "A cosmic view of the universe with God creating the world while the expulsion unfolds below, in brilliant Sienese colors.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Giovanni_di_Paolo_-_The_Creation_of_the_World_and_the_Expulsion_from_Paradise_-_WGA09451.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Domenico Beccafumi (d.1551) - Sienese Mannerist
    {
      title: "The Fall of the Rebel Angels",
      slug: "fall-rebel-angels-beccafumi",
      artistSlug: "domenico-beccafumi",
      year: 1528,
      medium: "Oil on panel",
      dimensions: "347 cm × 225 cm",
      description: "A swirling chaos of falling angels rendered in Beccafumi's distinctive iridescent palette.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Domenico_Beccafumi_-_Fall_of_the_Rebel_Angels_-_WGA01535.jpg",
      museumSlug: null,
    },

    // Dosso Dossi (d.1542) - Ferrarese
    {
      title: "Circe and Her Lovers in a Landscape",
      slug: "circe-and-lovers-dossi",
      artistSlug: "dosso-dossi",
      year: 1525,
      medium: "Oil on canvas",
      dimensions: "100 cm × 136 cm",
      description: "The enchantress Circe sits in a mystical landscape surrounded by animals, her transformed lovers.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Dosso_Dossi_-_Circe_and_her_Lovers_in_a_Landscape_-_WGA06623.jpg",
      museumSlug: "national-gallery-of-art",
    },

    // Juan de Valdés Leal (d.1690) - Spanish Baroque
    {
      title: "In Ictu Oculi",
      slug: "in-ictu-oculi",
      artistSlug: "juan-de-valdes-leal",
      year: 1672,
      medium: "Oil on canvas",
      dimensions: "220 cm × 216 cm",
      description: "Death as a skeleton extinguishes the candle of life while trampling worldly achievements, a powerful vanitas.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Vald%C3%A9s_Leal_In_ictu_oculi.jpg",
      museumSlug: null,
    },

    // Sanford Robinson Gifford (d.1880) - American Luminist
    {
      title: "Kauterskill Falls",
      slug: "kauterskill-falls-gifford",
      artistSlug: "sanford-robinson-gifford",
      year: 1862,
      medium: "Oil on canvas",
      dimensions: "122 cm × 92 cm",
      description: "A luminous view of the Catskills waterfall suffused with golden atmospheric light.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Sanford_Robinson_Gifford_-_Kauterskill_Falls.jpg",
      museumSlug: "metropolitan-museum-of-art",
    },

    // Rudolf Ernst (d.1932) - Austrian Orientalist
    {
      title: "The Guard of the Harem",
      slug: "guard-of-harem",
      artistSlug: "rudolf-ernst",
      year: 1900,
      medium: "Oil on panel",
      dimensions: "65 cm × 54 cm",
      description: "A Nubian guard stands before an ornately tiled Moorish interior, demonstrating Ernst's archaeological accuracy.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rudolf_Ernst_-_The_Guard_of_the_Harem.jpg",
      museumSlug: null,
    },

    // Richard Bergh (d.1919) - Swedish
    {
      title: "Nordic Summer Evening",
      slug: "nordic-summer-evening",
      artistSlug: "richard-bergh",
      year: 1899,
      medium: "Oil on canvas",
      dimensions: "170 cm × 223.5 cm",
      description: "A couple stands on a veranda overlooking water in the pale light of a Scandinavian summer night.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Richard_Bergh_-_Nordisk_sommarkv%C3%A4ll.jpg",
      museumSlug: null,
    },

    // Léon Bonnat (d.1922) - French Academic
    {
      title: "Job",
      slug: "job-bonnat",
      artistSlug: "leon-bonnat",
      year: 1880,
      medium: "Oil on canvas",
      dimensions: "161 cm × 129 cm",
      description: "The biblical figure sits in suffering, rendered with dramatic realism and powerful lighting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/L%C3%A9on_Bonnat_-_Job.jpg",
      museumSlug: "musee-dorsay",
    },

    // Carolus-Duran (d.1917) - French
    {
      title: "The Lady with the Glove",
      slug: "lady-with-glove",
      artistSlug: "carolus-duran",
      year: 1869,
      medium: "Oil on canvas",
      dimensions: "228 cm × 164 cm",
      description: "An elegant portrait of the artist's wife in a black dress pulling on a glove, a tour de force of Parisian chic.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Carolus-Duran_-_The_Lady_with_the_Glove.jpg",
      museumSlug: "musee-dorsay",
    },

    // Sodoma (d.1549) - Italian High Renaissance
    {
      title: "The Swooning of Saint Catherine",
      slug: "swooning-saint-catherine",
      artistSlug: "sodoma",
      year: 1526,
      medium: "Fresco",
      dimensions: "Variable",
      description: "Saint Catherine of Siena swoons in religious ecstasy while receiving the stigmata.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Giovanni_Antonio_Bazzi_-_Saint_Catherine_of_Siena_-_WGA01526.jpg",
      museumSlug: null,
    },

    // Francesco Furini (d.1646) - Florentine Baroque
    {
      title: "Hylas and the Nymphs",
      slug: "hylas-nymphs-furini",
      artistSlug: "francesco-furini",
      year: 1630,
      medium: "Oil on canvas",
      dimensions: "230 cm × 261 cm",
      description: "The beautiful youth Hylas is pulled into the water by nymphs, painted with Furini's characteristic soft sfumato.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Francesco_Furini_-_Hylas_and_the_Nymphs.jpg",
      museumSlug: null,
    },

    // Adriaen Coorte (d.1707) - Dutch
    {
      title: "Still Life with Asparagus",
      slug: "still-life-asparagus-coorte",
      artistSlug: "adriaen-coorte",
      year: 1697,
      medium: "Oil on paper on panel",
      dimensions: "25 cm × 20.5 cm",
      description: "A bundle of asparagus on a stone ledge against a dark background, a masterpiece of intimate still life.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adriaen_Coorte_-_Still_Life_with_Asparagus_-_WGA05256.jpg",
      museumSlug: "rijksmuseum",
    },

    // Caspar Netscher (d.1684) - Dutch
    {
      title: "The Lace Maker",
      slug: "lace-maker-netscher",
      artistSlug: "caspar-netscher",
      year: 1662,
      medium: "Oil on canvas",
      dimensions: "33 cm × 27 cm",
      description: "A young woman concentrates on her delicate lacemaking work in a domestic interior.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caspar_Netscher_-_The_Lace_Maker_-_WGA16497.jpg",
      museumSlug: null,
    },

    // Eustache Le Sueur (d.1655) - French Classical
    {
      title: "The Muses: Clio, Euterpe and Thalia",
      slug: "muses-clio-euterpe-thalia",
      artistSlug: "eustache-le-sueur",
      year: 1652,
      medium: "Oil on panel",
      dimensions: "130 cm × 130 cm",
      description: "Three of the nine Muses in a celestial setting, exemplifying French classical restraint.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Eustache_Le_Sueur_-_The_Muses_-_Clio%2C_Euterpe_and_Thalia_-_WGA12616.jpg",
      museumSlug: "louvre",
    },

    // Charles Le Brun (d.1690) - French Baroque
    {
      title: "The Entry of Alexander into Babylon",
      slug: "entry-alexander-babylon",
      artistSlug: "charles-le-brun",
      year: 1665,
      medium: "Oil on canvas",
      dimensions: "450 cm × 707 cm",
      description: "Alexander the Great enters Babylon in triumph on a chariot drawn by elephants, a vast ceremonial painting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Charles_Le_Brun_-_Entry_of_Alexander_into_Babylon.jpg",
      museumSlug: "louvre",
    },

    // Juan de Juanes (d.1579) - Spanish Renaissance
    {
      title: "The Last Supper",
      slug: "last-supper-juanes",
      artistSlug: "juan-de-juanes",
      year: 1560,
      medium: "Oil on panel",
      dimensions: "116 cm × 191 cm",
      description: "Christ institutes the Eucharist surrounded by the apostles, in the Italian Renaissance style adapted for Spain.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Juan_de_Juanes_002.jpg",
      museumSlug: "museo-prado",
    },

    // Worthington Whittredge (d.1910) - Hudson River School
    {
      title: "The Old Hunting Grounds",
      slug: "old-hunting-grounds",
      artistSlug: "worthington-whittredge",
      year: 1864,
      medium: "Oil on canvas",
      dimensions: "91.4 cm × 137.2 cm",
      description: "Native Americans are glimpsed in a dense forest interior, a meditation on the vanishing wilderness.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Worthington_Whittredge_-_The_Old_Hunting_Grounds.jpg",
      museumSlug: null,
    },

    // Harriet Backer (d.1932) - Norwegian
    {
      title: "Blue Interior",
      slug: "blue-interior-backer",
      artistSlug: "harriet-backer",
      year: 1883,
      medium: "Oil on canvas",
      dimensions: "84 cm × 66 cm",
      description: "A woman sews in a blue-lit interior, demonstrating Backer's mastery of subtle light effects.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Harriet_Backer_-_Blue_Interior_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Christian Krohg (d.1925) - Norwegian
    {
      title: "Sick Girl",
      slug: "sick-girl-krohg",
      artistSlug: "christian-krohg",
      year: 1881,
      medium: "Oil on canvas",
      dimensions: "102 cm × 58 cm",
      description: "A pale young woman lies in bed, a naturalist study of illness that influenced Munch.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Christian_Krohg_-_Sick_Girl.jpg",
      museumSlug: null,
    },

    // Constant Permeke (d.1952) - Belgian Expressionist
    {
      title: "The Bread Eater",
      slug: "bread-eater-permeke",
      artistSlug: "constant-permeke",
      year: 1936,
      medium: "Oil on canvas",
      dimensions: "171 cm × 205 cm",
      description: "A peasant woman eats bread, rendered in Permeke's monumental, earthy Expressionist style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Constant_Permeke_-_De_broodeter.jpg",
      museumSlug: "royal-museums-belgium",
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

  if (orphaned.length > 0) {
    console.log('\nRemaining orphans:');
    orphaned.forEach(a => console.log(`  ${a.slug} (d.${a.deathYear})`));
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
