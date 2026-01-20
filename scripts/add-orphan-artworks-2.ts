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
    // Pontormo (d.1557) - Mannerist
    {
      title: "Deposition from the Cross",
      slug: "deposition-pontormo",
      artistSlug: "pontormo",
      year: 1528,
      medium: "Oil on panel",
      dimensions: "313 cm × 192 cm",
      description: "A swirling composition of figures in vibrant colors lowering Christ from the cross, a masterpiece of Mannerist painting.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Jacopo_Pontormo_-_Deposition_-_WGA18074.jpg",
      museumSlug: null,
    },

    // Andrea del Sarto (d.1530) - High Renaissance
    {
      title: "Madonna of the Harpies",
      slug: "madonna-of-the-harpies",
      artistSlug: "andrea-del-sarto",
      year: 1517,
      medium: "Oil on panel",
      dimensions: "207 cm × 178 cm",
      description: "The Virgin and Child on a pedestal decorated with harpies, flanked by saints, demonstrating del Sarto's mastery of sfumato.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Andrea_del_Sarto_-_Madonna_of_the_Harpies_-_WGA00358.jpg",
      museumSlug: "uffizi-gallery",
    },

    // Lorenzo Lotto (d.1556) - Venetian
    {
      title: "Portrait of a Gentleman in His Study",
      slug: "portrait-gentleman-study-lotto",
      artistSlug: "lorenzo-lotto",
      year: 1530,
      medium: "Oil on canvas",
      dimensions: "98 cm × 111 cm",
      description: "A psychological portrait of a melancholic man surrounded by symbolic objects in his cluttered study.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Lotto_Portrait_of_a_gentleman.jpg",
      museumSlug: null,
    },

    // Guercino (d.1666) - Baroque
    {
      title: "Et in Arcadia Ego",
      slug: "et-in-arcadia-ego-guercino",
      artistSlug: "guercino",
      year: 1618,
      medium: "Oil on canvas",
      dimensions: "78 cm × 89 cm",
      description: "Two shepherds discover a skull with the inscription 'Even in Arcadia, I (Death) exist', a meditation on mortality.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Guercino_Et_in_Arcadia_ego.jpg",
      museumSlug: null,
    },

    // Francesco Guardi (d.1793) - Venetian
    {
      title: "Venice: The Dogana and San Giorgio Maggiore",
      slug: "venice-dogana-san-giorgio",
      artistSlug: "francesco-guardi",
      year: 1775,
      medium: "Oil on canvas",
      dimensions: "45 cm × 75 cm",
      description: "A luminous view of Venice's customs house and the church of San Giorgio across the shimmering lagoon.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Francesco_Guardi_-_Venice_-_The_Dogana_with_the_Giudecca_-_WGA10853.jpg",
      museumSlug: "national-gallery",
    },

    // Jacob Jordaens (d.1678) - Flemish Baroque
    {
      title: "The King Drinks",
      slug: "the-king-drinks",
      artistSlug: "jacob-jordaens",
      year: 1640,
      medium: "Oil on canvas",
      dimensions: "156 cm × 210 cm",
      description: "A boisterous Twelfth Night celebration with the bean king raising his cup, capturing Flemish festive traditions.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Jacob_Jordaens_-_The_King_Drinks_-_WGA11990.jpg",
      museumSlug: "royal-museums-belgium",
    },

    // Gerard ter Borch (d.1681) - Dutch Golden Age
    {
      title: "The Gallant Conversation",
      slug: "gallant-conversation",
      artistSlug: "gerard-ter-borch",
      year: 1654,
      medium: "Oil on canvas",
      dimensions: "71 cm × 73 cm",
      description: "An elegant interior scene with ambiguous narrative, featuring ter Borch's famous rendering of satin fabric.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gerard_ter_Borch_-_Paternal_Admonition_-_WGA22152.jpg",
      museumSlug: "rijksmuseum",
    },

    // Aelbert Cuyp (d.1691) - Dutch Golden Age
    {
      title: "River Landscape with Horseman and Peasants",
      slug: "river-landscape-horseman",
      artistSlug: "aelbert-cuyp",
      year: 1658,
      medium: "Oil on canvas",
      dimensions: "123 cm × 241 cm",
      description: "A golden-lit Dutch landscape with figures and cattle, demonstrating Cuyp's mastery of warm, atmospheric light.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Aelbert_Cuyp_-_River_Landscape_with_Horseman_and_Peasants_-_WGA5829.jpg",
      museumSlug: "national-gallery",
    },

    // Jusepe de Ribera (d.1652) - Spanish Baroque
    {
      title: "The Martyrdom of Saint Bartholomew",
      slug: "martyrdom-saint-bartholomew",
      artistSlug: "jusepe-de-ribera",
      year: 1634,
      medium: "Oil on canvas",
      dimensions: "234 cm × 234 cm",
      description: "The dramatic moment before the saint is flayed alive, rendered with Ribera's characteristic tenebrism.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/10/Jusepe_de_Ribera_-_Martyrdom_of_St_Bartholomew_-_WGA19421.jpg",
      museumSlug: "national-gallery-of-art",
    },

    // Carl Larsson (d.1919) - Swedish
    {
      title: "Breakfast Under the Big Birch",
      slug: "breakfast-under-big-birch",
      artistSlug: "carl-larsson",
      year: 1896,
      medium: "Watercolor",
      dimensions: "32 cm × 43 cm",
      description: "A sunlit family breakfast outdoors, exemplifying Larsson's idyllic depictions of Swedish domestic life.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Breakfast_Under_the_Big_Birch_by_Carl_Larsson_1896.jpg",
      museumSlug: null,
    },

    // Giovanni Segantini (d.1899) - Divisionist
    {
      title: "The Punishment of Lust",
      slug: "punishment-of-lust",
      artistSlug: "giovanni-segantini",
      year: 1891,
      medium: "Oil on canvas",
      dimensions: "99 cm × 173 cm",
      description: "Ghostly female figures float in an Alpine landscape, condemned for sins of vanity and childlessness.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Giovanni_Segantini_-_The_Punishment_of_Lust_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Maurice Denis (d.1943) - Nabis (d.1943 = copyrighted until 2013, now public domain)
    {
      title: "The Muses",
      slug: "the-muses-denis",
      artistSlug: "maurice-denis",
      year: 1893,
      medium: "Oil on canvas",
      dimensions: "135 cm × 135 cm",
      description: "Women in a forest clearing represent the muses, painted in Denis's decorative, flat-color Nabis style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Denis_muses.jpg",
      museumSlug: "musee-dorsay",
    },

    // Lovis Corinth (d.1925) - German Impressionist
    {
      title: "Self-Portrait with Skeleton",
      slug: "self-portrait-with-skeleton",
      artistSlug: "lovis-corinth",
      year: 1896,
      medium: "Oil on canvas",
      dimensions: "66 cm × 86 cm",
      description: "The artist poses with a skeleton, a darkly humorous vanitas reflecting on mortality and artistic creation.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Lovis_Corinth_-_Selbstbildnis_mit_Skelett_-_1896.jpg",
      museumSlug: null,
    },

    // Alexej von Jawlensky (d.1941) - Expressionist
    {
      title: "Schokko with Wide-Brimmed Hat",
      slug: "schokko-wide-brimmed-hat",
      artistSlug: "alexej-von-jawlensky",
      year: 1910,
      medium: "Oil on cardboard",
      dimensions: "75 cm × 65 cm",
      description: "A portrait of the model Schokko rendered in vibrant Fauvist colors with bold outlines.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Alexej_von_Jawlensky_-_Schokko_mit_breitem_Hut_-_1910.jpg",
      museumSlug: null,
    },

    // Emil Nolde (d.1956) - Expressionist (d.1956, enters PD 2027, borderline)
    // Skip for now

    // Petrus Christus (d.1475) - Flemish
    {
      title: "Portrait of a Young Girl",
      slug: "portrait-young-girl-christus",
      artistSlug: "petrus-christus",
      year: 1470,
      medium: "Oil on oak panel",
      dimensions: "29 cm × 22.5 cm",
      description: "A delicate portrait of an unknown young woman against a dark background, notable for its quiet dignity.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Petrus_Christus_-_Portrait_of_a_Young_Girl_-_Google_Art_Project.jpg",
      museumSlug: null,
    },

    // Orazio Gentileschi (d.1639) - Baroque
    {
      title: "The Lute Player",
      slug: "lute-player-orazio",
      artistSlug: "orazio-gentileschi",
      year: 1612,
      medium: "Oil on canvas",
      dimensions: "143.5 cm × 128.8 cm",
      description: "A young woman plays the lute, bathed in Caravaggesque light, demonstrating Gentileschi's refined style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Orazio_Gentileschi_-_The_Lute_Player_-_WGA08581.jpg",
      museumSlug: "national-gallery-of-art",
    },

    // Jean-Baptiste Greuze (d.1805) - French
    {
      title: "The Broken Pitcher",
      slug: "the-broken-pitcher",
      artistSlug: "jean-baptiste-greuze",
      year: 1771,
      medium: "Oil on canvas",
      dimensions: "109 cm × 87 cm",
      description: "A young woman with a broken pitcher, symbolizing lost innocence, in Greuze's moralizing sentimental style.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Jean-Baptiste_Greuze_-_La_Cruche_cass%C3%A9e.jpg",
      museumSlug: "louvre",
    },

    // Paul Delaroche (d.1856) - Academic
    {
      title: "The Execution of Lady Jane Grey",
      slug: "execution-lady-jane-grey",
      artistSlug: "paul-delaroche",
      year: 1833,
      medium: "Oil on canvas",
      dimensions: "246 cm × 297 cm",
      description: "The blindfolded queen reaches for the block, a dramatic moment of historical tragedy rendered with theatrical intensity.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Paul_Delaroche_-_Execution_of_Lady_Jane_Grey.jpg",
      museumSlug: "national-gallery",
    },

    // George Romney (d.1802) - British
    {
      title: "Lady Hamilton as Circe",
      slug: "lady-hamilton-as-circe",
      artistSlug: "george-romney",
      year: 1782,
      medium: "Oil on canvas",
      dimensions: "239 cm × 147.5 cm",
      description: "Emma Hamilton poses as the enchantress Circe, one of many theatrical portraits Romney painted of his famous muse.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/George_Romney_-_Lady_Hamilton_as_Circe.jpg",
      museumSlug: "tate-britain",
    },

    // Edwin Landseer (d.1873) - Victorian
    {
      title: "The Monarch of the Glen",
      slug: "monarch-of-the-glen",
      artistSlug: "edwin-landseer",
      year: 1851,
      medium: "Oil on canvas",
      dimensions: "163.8 cm × 168.9 cm",
      description: "A majestic red deer stag stands in the Scottish Highlands, an iconic image of wild nobility.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Edwin_Landseer_-_The_Monarch_of_the_Glen_-_Google_Art_Project.jpg",
      museumSlug: "national-galleries-scotland",
    },

    // Ford Madox Brown (d.1893) - Pre-Raphaelite associate
    {
      title: "Work",
      slug: "work-ford-madox-brown",
      artistSlug: "ford-madox-brown",
      year: 1865,
      medium: "Oil on canvas",
      dimensions: "137 cm × 197.3 cm",
      description: "A complex allegory of Victorian labor showing navvies digging in Hampstead alongside various social types.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ford_Madox_Brown_-_Work_-_Google_Art_Project.jpg",
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
