const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'salvator-mundi',
    description: `<p><a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this devotional portrait of Christ around 1500, depicting Jesus in Renaissance blue robes with his right hand raised in blessing. In his left hand, he holds a transparent <strong>crystal orb</strong> representing the celestial sphere. Leonardo rendered this orb with sophisticated optical accuracy, showing subtle reflections within the glass. The painting uses his signature <strong>sfumato technique</strong>, creating soft gradations between light and shadow in Christ's face and curly hair.</p>
<p>The work vanished for centuries after leaving the English royal collection, resurfacing at a New York estate sale in 2005 where it sold for just $10,000. After extensive cleaning revealed its true nature, scientific analysis confirmed the use of <strong>lapis lazuli</strong>, a pigment rarer than gold in Renaissance Italy. Attribution debates continue among scholars, with some arguing Leonardo's workshop assistants completed portions of the painting.</p>
<p>In November 2017, Salvator Mundi became the <strong>most expensive painting ever sold at auction</strong>, reaching $450.3 million at Christie's New York. Saudi Crown Prince Mohammed bin Salman acquired it through an intermediary. The painting was destined for the <a href="https://luxurywallart.com" target="_blank" rel="noopener"><strong>Louvre Abu Dhabi</strong></a>, though plans were postponed. As of 2024, it remains in storage in Geneva awaiting a permanent museum home.</p>`,
    faqs: [
      {
        question: "Is Salvator Mundi definitely painted by Leonardo da Vinci?",
        answer: "Scientific analysis confirms <strong>materials and techniques</strong> match Leonardo's other works, including rare lapis lazuli pigment. However, some art historians believe his workshop assistants, particularly <a href=\"/artist/giovanni-antonio-boltraffio\"><strong>Boltraffio</strong></a>, completed portions of the painting."
      },
      {
        question: "Why did Salvator Mundi sell for $450 million?",
        answer: "The price reflects its status as possibly the <strong>only Leonardo painting</strong> remaining in private hands, its dramatic rediscovery story after centuries of obscurity, and intense bidding competition between wealthy collectors seeking a work by history's most famous artist."
      },
      {
        question: "Where can I see Salvator Mundi today?",
        answer: "The painting is currently in <strong>private Saudi ownership</strong> and stored in Geneva. Plans exist to display it at a new museum complex in Al-'Ula, Saudi Arabia, though no confirmed opening date has been announced."
      },
      {
        question: "What does Salvator Mundi mean?",
        answer: "The Latin title translates to <strong>Savior of the World</strong>. Christ holds a crystal orb symbolizing his role as ruler of the cosmos, a common subject in Northern European <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> devotional art."
      }
    ]
  },
  {
    slug: 'interchange',
    description: `<p><a href="/artist/willem-de-kooning"><strong>Willem de Kooning</strong></a> painted Interchange in 1955, marking a pivotal shift in his career from figurative studies to pure <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a>. The 79 by 69-inch canvas features interlocking shapes in flesh tones, yellows, and blues, with a fleshy pink mass at center suggesting a seated female figure. De Kooning worked with thick <strong>impasto layers</strong>, mixing commercial enamel paints with traditional oils to create glossy passages contrasting with matte sections.</p>
<p>His technique involved broad charcoal underdrawings, aggressive overpainting with wide brushes and palette knives, then scraping back to rework areas. This physical approach to painting positioned de Kooning alongside <a href="/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> and Franz Kline as leaders of the <strong>gestural abstraction</strong> movement. The composition hovers between recognizable forms and pure abstraction, a tension that defined his mature style.</p>
<p>Architect Edgar Kaufmann Jr. purchased Interchange from Sidney Janis Gallery in 1955 for $4,000. Sixty years later, hedge fund manager Kenneth C. Griffin acquired it privately for <strong>$300 million</strong>, setting the record for the highest price paid for a 20th-century painting. The work now hangs at the <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      {
        question: "Why is Interchange so valuable?",
        answer: "The $300 million price reflects its status as a <strong>turning point</strong> in <a href=\"/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>. It marks de Kooning's shift from his famous Woman series to pure abstraction, making it historically significant beyond its visual impact."
      },
      {
        question: "Where can I see Interchange in person?",
        answer: "The painting is on long-term loan at the <strong>Art Institute of Chicago</strong>, where visitors can view it among the museum's extensive collection of American modern art."
      },
      {
        question: "What technique did de Kooning use?",
        answer: "De Kooning mixed <strong>commercial enamel paints</strong> with traditional oils, applied with wide brushes and palette knives. He built up thick impasto layers, then scraped back areas to create his signature textured surfaces."
      }
    ]
  },
  {
    slug: 'number-17a-pollock',
    description: `<p><a href="/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created Number 17A in 1948, one year after introducing his revolutionary <strong>drip painting technique</strong>. This 34 by 44-inch oil on fiberboard presents a dense web of black, white, red, yellow, and blue paint, layered with such complexity that top and bottom become indistinguishable. Three nearly parallel <strong>white brushstrokes</strong> cut diagonally across the composition, anchoring the eye against the controlled chaos surrounding them.</p>
<p>Pollock worked with the canvas flat on the ground, dripping and pouring paint from above using sticks and hardened brushes. He moved around all sides of the work, allowing gravity and momentum to guide each application. This <strong>action painting</strong> approach rejected traditional brushwork and easel techniques, fundamentally changing how artists thought about the physical act of painting.</p>
<p>Life magazine featured this work in a 1949 article asking if Pollock was America's greatest living painter, cementing his reputation as the leading figure in <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a>. Kenneth C. Griffin acquired Number 17A privately in 2015 for <strong>$200 million</strong>, setting a world record at the time. The painting is now displayed at the Norton Museum of Art in West Palm Beach.</p>`,
    faqs: [
      {
        question: "Why did Jackson Pollock number his paintings?",
        answer: "Pollock deliberately avoided descriptive titles, using numbers instead to let viewers <strong>interpret freely</strong> without artist-imposed meaning. He wanted the artwork to speak directly to each observer's experience."
      },
      {
        question: "How did Pollock create drip paintings?",
        answer: "Pollock laid canvases flat and <strong>dripped paint from above</strong> using sticks and hardened brushes. He walked around all sides, letting gravity guide the paint. This technique, pioneered in 1947, defined <a href=\"/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>."
      },
      {
        question: "Where can I see Number 17A?",
        answer: "The painting is on <strong>long-term display</strong> at the Norton Museum of Art in West Palm Beach, Florida, where it was relocated in 2023 after years at the Art Institute of Chicago."
      }
    ]
  },
  {
    slug: 'shot-sage-blue-marilyn',
    description: `<p><a href="/artist/andy-warhol"><strong>Andy Warhol</strong></a> created Shot Sage Blue Marilyn in 1964, using a publicity photograph from Marilyn Monroe's 1953 film Niagara as his source image. This 40-inch square <strong>silkscreen on canvas</strong> features Monroe's face against a sage blue background, her lips bright red and eyeshadow vivid blue. Warhol applied a more refined technique to this limited series than his typical mass-production approach.</p>
<p>The "Shot" in the title references a notorious incident at Warhol's Factory studio. In 1964, acquaintance Dorothy Podber pulled out a revolver and shot four of the five Marilyn silkscreens in the series. Each featured a different colored background: red, orange, light blue, sage blue, and turquoise. The <strong>bullet holes</strong> were later repaired, but the dramatic story became inseparable from the works' identity.</p>
<p>Warhol's Marilyn images explore how mass media transforms real people into <strong>consumable products</strong>, as reproducible as Campbell's Soup cans. The repetition drains individual identity while simultaneously immortalizing the subject. Created two years after Monroe's death, the series addresses celebrity, mortality, and American culture's obsession with fame. In May 2022, Shot Sage Blue Marilyn sold at Christie's for <strong>$195 million</strong>, becoming the most expensive <a href="https://luxurywallart.com/collections/pop-culture" target="_blank" rel="noopener"><strong>20th-century artwork</strong></a> ever auctioned.</p>`,
    faqs: [
      {
        question: "Why is it called Shot Sage Blue Marilyn?",
        answer: "In 1964, Dorothy Podber shot four of the five paintings with a <strong>revolver</strong> at Warhol's Factory studio. The sage blue color refers to the background, distinguishing it from the red, orange, and turquoise versions."
      },
      {
        question: "Why did Andy Warhol paint Marilyn Monroe repeatedly?",
        answer: "Warhol used <strong>repetition to explore</strong> how celebrity culture transforms people into products. Like his Campbell's Soup cans, the repeated Marilyn images examine mass production, fame, and the way media consumes identity."
      },
      {
        question: "What is the silkscreen technique?",
        answer: "Warhol adapted <strong>commercial printing methods</strong> for fine art, using photographic silkscreens to transfer images onto canvas. This allowed him to reproduce the same image repeatedly, blurring the line between art and mass production."
      }
    ]
  },
  {
    slug: 'no-6-violet-green-red-rothko',
    description: `<p><a href="/artist/mark-rothko"><strong>Mark Rothko</strong></a> painted No. 6 (Violet, Green and Red) in 1951, an iconic example of <a href="/movement/color-field"><strong>Color Field painting</strong></a>. The large canvas measures roughly 90 by 54 inches, featuring three horizontal bands with soft, fuzzy boundaries. A narrow <strong>green stripe</strong> separates expanses of deep violet and warm red, the colors seeming to pulse and float against each other.</p>
<p>Rothko developed his technique by building up thin, translucent layers of pigment with quick brushstrokes. He guarded his exact process closely, never fully explaining how he achieved the <strong>luminous glow</strong> that makes his color fields appear to emanate light from within. He intended these large-scale works to be immersive experiences, evoking emotional responses similar to Greek tragedy or religious contemplation.</p>
<p>Russian billionaire Dmitry Rybolovlev purchased the painting in 2014 for approximately <strong>$186 million</strong> through dealer Yves Bouvier, a transaction that later sparked legal disputes when Rybolovlev discovered significant markup. In 2024, hedge fund manager Kenneth C. Griffin acquired it through a private Christie's sale for $195 million, making it one of the most valuable <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>abstract artworks</strong></a> ever sold.</p>`,
    faqs: [
      {
        question: "What makes Rothko's color field paintings special?",
        answer: "Rothko built up <strong>thin translucent layers</strong> to create glowing color bands with soft edges. He guarded his exact technique closely, intending his large canvases to immerse viewers in contemplative emotional experiences."
      },
      {
        question: "How big is No. 6 (Violet, Green and Red)?",
        answer: "The painting measures approximately <strong>230 by 137 cm</strong> (90.6 by 53.9 inches). Rothko intentionally worked at large scale so viewers would feel surrounded by color rather than simply looking at a picture."
      },
      {
        question: "Why are Rothko paintings so valuable?",
        answer: "Rothko pioneered <a href=\"/movement/color-field\"><strong>Color Field painting</strong></a>, fundamentally changing abstract art. His works represent a finite supply from a pivotal art historical moment, with major pieces rarely appearing on the market."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 1 ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of artworkUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: update.description,
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
