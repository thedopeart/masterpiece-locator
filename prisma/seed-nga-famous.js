/**
 * Seed famous National Gallery of Art (Washington DC) paintings
 * that are currently missing from our database.
 *
 * These are high-SEO-value works that should be included.
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// NGA Museum ID from our database
const NGA_MUSEUM_ID = "cmkjdx4px00095nnrfyajckdx";

// Famous NGA paintings to add
const FAMOUS_NGA_PAINTINGS = [
  {
    slug: "ginevra-de-benci",
    title: "Ginevra de' Benci",
    artistSlug: "leonardo-da-vinci",
    year: 1478,
    medium: "Oil on panel",
    dimensions: "38.1 × 37 cm (15 × 14.6 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",
    wikidataId: "Q1267893",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ginevra_de%27_Benci",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted this portrait around 1474-1478, making it one of his earliest surviving works. Ginevra de' Benci was a young Florentine aristocrat, and this is the only Leonardo painting on public view in the Americas.</p>
<p>The portrait was revolutionary for its time. Leonardo positioned Ginevra at a three-quarter angle instead of the traditional profile view, allowing viewers to see more of her face and the atmospheric landscape behind her. The juniper tree (ginepro in Italian) behind her is a visual pun on her name.</p>
<p>The painting was likely cut down at some point, probably due to damage. Ginevra's hands, which Leonardo sketched in preparatory drawings, are now missing. Despite this, the work remains one of the most important Renaissance portraits and a highlight of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> collection.</p>`,
    faqs: [
      {
        question: "Where can I see Ginevra de' Benci?",
        answer: "This Leonardo masterpiece is displayed at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's the only Leonardo da Vinci painting on public view in the Americas."
      },
      {
        question: "Why is Ginevra de' Benci significant?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> pioneered several techniques here: the three-quarter pose, atmospheric perspective, and the sfumato blending that would define his later works including the Mona Lisa."
      },
      {
        question: "Who was Ginevra de' Benci?",
        answer: "Ginevra was a 16-year-old Florentine noblewoman, celebrated for her beauty and intellect. The portrait was likely commissioned to celebrate her marriage to Luigi Niccolini in 1474."
      },
      {
        question: "How much did the National Gallery pay for Ginevra de' Benci?",
        answer: "The National Gallery acquired this painting in 1967 for approximately $5-6 million from the Liechtenstein collection. It was the most expensive painting ever sold at that time."
      }
    ]
  },
  {
    slug: "the-alba-madonna",
    title: "The Alba Madonna",
    artistSlug: "raphael",
    year: 1510,
    medium: "Oil on panel transferred to canvas",
    dimensions: "94.5 cm (37.2 in) diameter (tondo)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Raphael_-_The_Alba_Madonna_-_Google_Art_Project.jpg/800px-Raphael_-_The_Alba_Madonna_-_Google_Art_Project.jpg",
    wikidataId: "Q2638102",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Alba_Madonna",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this circular composition (tondo) around 1510 during his time in Rome. The Virgin Mary sits in a landscape with the infant Jesus and young John the Baptist, who offers a reed cross that foreshadows Christ's crucifixion.</p>
<p>The composition demonstrates Raphael's mastery of the <a href="/apps/masterpieces/movement/high-renaissance"><strong>High Renaissance</strong></a> style. The figures form a stable pyramid, a device Raphael learned from studying Leonardo's works. The landscape stretches into an atmospheric blue distance.</p>
<p>The painting takes its name from the Spanish Dukes of Alba, who owned it for centuries. It eventually passed through several major collections before arriving at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      {
        question: "Where is The Alba Madonna displayed?",
        answer: "The Alba Madonna hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's one of the finest <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> paintings in the United States."
      },
      {
        question: "What is a tondo painting?",
        answer: "A tondo is a circular painting or relief sculpture. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> created several tondo compositions. The circular format was popular in Renaissance Florence for domestic devotional images."
      },
      {
        question: "Why is it called The Alba Madonna?",
        answer: "The painting is named after the Spanish House of Alba, which owned it from the late 18th century until 1836 when it was sold to Tsar Nicholas I of Russia."
      }
    ]
  },
  {
    slug: "watson-and-the-shark",
    title: "Watson and the Shark",
    artistSlug: "john-singleton-copley",
    year: 1778,
    medium: "Oil on canvas",
    dimensions: "182.1 × 229.7 cm (71.7 × 90.4 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Watsonandtheshark-original.jpg/800px-Watsonandtheshark-original.jpg",
    wikidataId: "Q3567265",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Watson_and_the_Shark",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/john-singleton-copley"><strong>John Singleton Copley</strong></a> created this dramatic painting in 1778, depicting a real shark attack that occurred in Havana harbor in 1749. The victim, Brook Watson, was 14 years old when a shark severed his right leg below the knee.</p>
<p>Watson survived and later became a wealthy merchant and Lord Mayor of London. He commissioned Copley to paint the scene, which became one of the most famous American paintings of the 18th century.</p>
<p>The painting combines historical documentation with Baroque drama. The diagonal composition, the terror on the faces of the rescuers, and the pale vulnerability of Watson create an image of supreme tension. The work is displayed at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      {
        question: "Is Watson and the Shark based on a true story?",
        answer: "Yes. Brook Watson was attacked by a shark in Havana harbor in 1749 at age 14. He survived, lost his right leg, and later became a wealthy merchant and Lord Mayor of London."
      },
      {
        question: "Where can I see Watson and the Shark?",
        answer: "The original painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. <a href=\"/apps/masterpieces/artist/john-singleton-copley\"><strong>Copley</strong></a> made two other versions now at the MFA Boston and Detroit Institute."
      },
      {
        question: "Who painted Watson and the Shark?",
        answer: "<a href=\"/apps/masterpieces/artist/john-singleton-copley\"><strong>John Singleton Copley</strong></a> painted it in 1778 in London. He was the leading American portrait painter of the colonial era."
      }
    ]
  },
  {
    slug: "the-voyage-of-life-childhood",
    title: "The Voyage of Life: Childhood",
    artistSlug: "thomas-cole",
    year: 1842,
    medium: "Oil on canvas",
    dimensions: "134.3 × 195.3 cm (52.9 × 76.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Thomas_Cole_-_The_Voyage_of_Life_Childhood%2C_1842_%28National_Gallery_of_Art%29.jpg/800px-Thomas_Cole_-_The_Voyage_of_Life_Childhood%2C_1842_%28National_Gallery_of_Art%29.jpg",
    wikidataId: "Q3990174",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Voyage_of_Life",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a>, founder of the Hudson River School, painted The Voyage of Life as a series of four allegorical paintings in 1842. This first painting, Childhood, shows an infant emerging from a dark cave on a golden boat, guided by an angelic figure.</p>
<p>The series follows a voyager through four stages of life: Childhood, Youth, Manhood, and Old Age. Each painting uses landscape to symbolize the human experience. The lush vegetation and calm waters of Childhood give way to rapids in Manhood and peaceful seas in Old Age.</p>
<p>Cole created two versions of this series. The second set, now at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, is considered the finer of the two.</p>`,
    faqs: [
      {
        question: "Where can I see The Voyage of Life paintings?",
        answer: "The second (superior) set of four paintings is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. The first set is at the Munson-Williams-Proctor Arts Institute in Utica, NY."
      },
      {
        question: "What do The Voyage of Life paintings represent?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> used landscape allegory to depict life's journey: Childhood (innocence), Youth (ambition), Manhood (struggle), and Old Age (spiritual peace)."
      },
      {
        question: "Who was Thomas Cole?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> (1801-1848) founded the Hudson River School, America's first major art movement. He painted moralizing landscapes that blended Romanticism with American themes."
      }
    ]
  },
  {
    slug: "the-voyage-of-life-youth",
    title: "The Voyage of Life: Youth",
    artistSlug: "thomas-cole",
    year: 1842,
    medium: "Oil on canvas",
    dimensions: "134.3 × 195.3 cm (52.9 × 76.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Thomas_Cole_-_The_Voyage_of_Life_Youth%2C_1842_%28National_Gallery_of_Art%29.jpg/800px-Thomas_Cole_-_The_Voyage_of_Life_Youth%2C_1842_%28National_Gallery_of_Art%29.jpg",
    wikidataId: "Q3990177",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Voyage_of_Life",
    searchVolumeTier: 2,
    description: `<p>In Youth, the second painting of <a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole's</strong></a> Voyage of Life series, the voyager has grown into a young man who now takes the helm himself. The guardian angel watches from the shore as the youth steers toward a fantastical castle in the sky.</p>
<p>Cole uses the dream-like castle to represent youthful ambition and unrealistic expectations. The calm river and blooming landscape suggest the confidence of youth before life's challenges emerge. The rocky rapids ahead, visible to viewers but not to the young voyager, foreshadow the trials of Manhood.</p>
<p>This painting exemplifies the Hudson River School's blend of naturalistic American landscape with moral allegory drawn from European Romanticism.</p>`,
    faqs: [
      {
        question: "What does the castle in The Voyage of Life: Youth symbolize?",
        answer: "The ethereal castle in the clouds represents youthful dreams and ambitions. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Cole</strong></a> intended it to show how the young often pursue impossible goals."
      },
      {
        question: "How many paintings are in The Voyage of Life series?",
        answer: "There are four paintings: Childhood, Youth, Manhood, and Old Age. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> created two complete sets. The <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery</strong></a> has the second set."
      }
    ]
  },
  {
    slug: "the-voyage-of-life-manhood",
    title: "The Voyage of Life: Manhood",
    artistSlug: "thomas-cole",
    year: 1842,
    medium: "Oil on canvas",
    dimensions: "134.3 × 195.3 cm (52.9 × 76.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Thomas_Cole_-_The_Voyage_of_Life_Manhood%2C_1842_%28National_Gallery_of_Art%29.jpg/800px-Thomas_Cole_-_The_Voyage_of_Life_Manhood%2C_1842_%28National_Gallery_of_Art%29.jpg",
    wikidataId: "Q3990175",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Voyage_of_Life",
    searchVolumeTier: 2,
    description: `<p>The third painting in <a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole's</strong></a> series shows the voyager now a man, battling turbulent rapids through a dark, threatening landscape. The boat's rudder has broken, and demons emerge from storm clouds above.</p>
<p>The guardian angel now appears only as a distant glow in the clouds, symbolizing how adults often lose sight of spiritual guidance amid worldly struggles. The rocky chasm and violent waters represent life's mid-course challenges: career, family, and the fight for survival.</p>
<p>Cole's dramatic use of light and shadow creates a Romantic vision of adult hardship that resonated deeply with 19th-century American audiences.</p>`,
    faqs: [
      {
        question: "What does the broken rudder symbolize in Manhood?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Cole</strong></a> used the broken rudder to show how adults often lose control of their lives. The demons in the clouds represent worldly temptations and troubles."
      },
      {
        question: "Why is the guardian angel distant in this painting?",
        answer: "The angel appears only as a faint light in the clouds, symbolizing how adults often lose touch with spiritual guidance during life's struggles."
      }
    ]
  },
  {
    slug: "the-voyage-of-life-old-age",
    title: "The Voyage of Life: Old Age",
    artistSlug: "thomas-cole",
    year: 1842,
    medium: "Oil on canvas",
    dimensions: "134.3 × 195.3 cm (52.9 × 76.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Thomas_Cole_-_The_Voyage_of_Life_Old_Age%2C_1842_%28National_Gallery_of_Art%29.jpg/800px-Thomas_Cole_-_The_Voyage_of_Life_Old_Age%2C_1842_%28National_Gallery_of_Art%29.jpg",
    wikidataId: "Q3990176",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Voyage_of_Life",
    searchVolumeTier: 2,
    description: `<p>In the final painting of <a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole's</strong></a> Voyage of Life, the voyager has reached old age. His boat, battered by life's journey, drifts on calm, dark waters. The guardian angel returns, now clearly visible, pointing upward toward a heavenly light breaking through the clouds.</p>
<p>Cole shows the voyager looking up with peaceful acceptance. The hourglass that appeared on the boat's prow throughout the series now has its sand run out. Angels descend from a golden sky, welcoming the soul to eternal life.</p>
<p>The four paintings at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> form one of the most important American paintings series of the 19th century.</p>`,
    faqs: [
      {
        question: "What is the meaning of the light in Old Age?",
        answer: "The golden light breaking through the clouds represents heaven and eternal salvation. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Cole</strong></a> intended this as the spiritual reward for those who persevere through life's journey."
      },
      {
        question: "Are The Voyage of Life paintings displayed together?",
        answer: "Yes, all four paintings are displayed together at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, allowing visitors to experience Cole's complete allegorical narrative."
      }
    ]
  }
];

// Artists that might need to be created
const ARTISTS_TO_CREATE = {
  "john-singleton-copley": {
    id: "john-singleton-copley",
    slug: "john-singleton-copley",
    name: "John Singleton Copley",
    birthYear: 1738,
    deathYear: 1815,
    nationality: "American",
    bioShort: "Leading American colonial portrait painter who later moved to London.",
    bioFull: `<p><strong>John Singleton Copley</strong> (1738-1815) was the foremost American painter of the colonial era, known for his penetrating portrait style that captured both physical likeness and psychological depth.</p>
<p>Born in Boston, Copley was largely self-taught but achieved remarkable sophistication through study of prints and available European art. His portraits of Boston's elite, including Paul Revere and Samuel Adams, documented Revolutionary-era America with unmatched clarity.</p>
<p>In 1774, Copley moved to London, where he expanded into history painting. His masterwork <em>Watson and the Shark</em> (1778) pioneered the modern disaster painting genre. He was elected to the Royal Academy and spent the rest of his life in England.</p>`,
    wikidataId: "Q316016",
    wikipediaUrl: "https://en.wikipedia.org/wiki/John_Singleton_Copley",
    faqs: [
      { question: "Who was John Singleton Copley?", answer: "Copley (1738-1815) was the leading American portrait painter of the colonial era. His works documented revolutionary Boston before he moved to London in 1774." },
      { question: "What is John Singleton Copley famous for?", answer: "His penetrating colonial portraits (including Paul Revere and Samuel Adams) and his dramatic history painting <em>Watson and the Shark</em>, one of the first modern disaster paintings." },
      { question: "Where can I see John Singleton Copley paintings?", answer: "Major collections at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a> and the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." }
    ]
  }
};

async function main() {
  console.log("=== Seeding Famous NGA Paintings ===\n");

  // Verify NGA museum exists
  const nga = await prisma.museum.findUnique({ where: { id: NGA_MUSEUM_ID } });
  if (!nga) {
    console.error("ERROR: National Gallery of Art museum not found with ID:", NGA_MUSEUM_ID);
    return;
  }
  console.log("Museum found:", nga.name, "\n");

  // Create any missing artists first
  for (const [slug, artistData] of Object.entries(ARTISTS_TO_CREATE)) {
    const existing = await prisma.artist.findUnique({ where: { slug } });
    if (!existing) {
      await prisma.artist.create({
        data: {
          ...artistData,
          updatedAt: new Date()
        }
      });
      console.log("✅ Created artist:", artistData.name);
    }
  }

  let added = 0;
  let skipped = 0;

  for (const painting of FAMOUS_NGA_PAINTINGS) {
    // Check if already exists
    const existing = await prisma.artwork.findUnique({
      where: { slug: painting.slug }
    });

    if (existing) {
      console.log("⏭️  Skipping (exists):", painting.title);
      skipped++;
      continue;
    }

    // Find artist
    const artist = await prisma.artist.findUnique({
      where: { slug: painting.artistSlug }
    });

    if (!artist) {
      console.log("⚠️  Artist not found:", painting.artistSlug, "- creating artwork without artist link");
    }

    // Create the artwork
    await prisma.artwork.create({
      data: {
        id: `nga-${painting.slug}`,
        slug: painting.slug,
        title: painting.title,
        year: painting.year,
        medium: painting.medium,
        dimensions: painting.dimensions,
        imageUrl: painting.imageUrl,
        wikidataId: painting.wikidataId,
        wikipediaUrl: painting.wikipediaUrl,
        searchVolumeTier: painting.searchVolumeTier,
        description: painting.description,
        faqs: painting.faqs,
        artistId: artist?.id || null,
        museumId: NGA_MUSEUM_ID,
        artworkType: "painting",
        updatedAt: new Date()
      }
    });

    console.log("✅ Added:", painting.title);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);

  await prisma.$disconnect();
}

main().catch(console.error);
