const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'fillette-corbeille-fleurie-picasso',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted Fillette à la corbeille fleurie (Young Girl with a Flower Basket) in autumn 1905, capturing a young Parisian street vendor named Linda. She stands nearly nude, wearing only <strong>pink ribbons in her dark hair</strong> and a simple necklace, holding a basket of red flowers. The warm palette and simplified forms mark this as a masterwork of his Rose Period.</p>
<p>Collectors <strong>Gertrude and Leo Stein</strong> acquired the painting for 150 francs, making it the second of three Rose Period works they purchased directly from Picasso. Gertrude later described it as "full of grace and delicacy and charm," painted at the height of his harlequin period. Her legendary Paris salon helped establish Picasso's early reputation.</p>
<p>The painting passed to David Rockefeller's collection in 1968 through a syndicate offering from the Stein estate. When Rockefeller's collection sold at Christie's in May 2018, this canvas brought <strong>$115 million</strong>, becoming one of the most expensive Picassos ever sold. The Nahmad Collection acquired it.</p>`,
    faqs: [
      {
        question: "What makes the Rose Period different from Picasso's other periods?",
        answer: "The <strong>Rose Period</strong> (1904-1906) features warmer pinks, oranges, and reds, replacing the Blue Period's melancholy. Subjects shifted to circus performers, harlequins, and street youth, painted with classical grace."
      },
      {
        question: "Why is the Gertrude Stein provenance important?",
        answer: "<strong>Gertrude Stein</strong> championed Picasso when few recognized his genius. Her Paris salon became a hub for modern art, and owning works she collected adds significant historical value."
      },
      {
        question: "Who was the girl in the painting?",
        answer: "The subject was a young Parisian named <strong>Linda</strong>, likely a flower seller on Montmartre streets. Her fate after posing for Picasso is unknown."
      }
    ]
  },
  {
    slug: 'nude-green-leaves-bust-picasso',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> completed Nude, Green Leaves and Bust in a single day on March 8, 1932, at his Château de Boisgeloup studios in Normandy. The canvas presents his mistress <strong>Marie-Thérèse Walter</strong> reclining beside a sculptural bust and a lush philodendron plant. Vibrant lilacs and deep blues contrast with vivid greens, creating a dreamlike, hallucinatory effect.</p>
<p>The painting belongs to an extraordinary sequence of large nudes created at Boisgeloup in early 1932, regarded as among Picasso's greatest achievements between the wars. The composition synthesizes <a href="/movement/cubism"><strong>Cubist</strong></a> fragmentation with <strong>Surrealist distortion</strong>, presenting Marie-Thérèse through multiple viewpoints. The sculptural bust suggests his concurrent work in three dimensions.</p>
<p>Los Angeles collectors Sidney and Frances Brody purchased the canvas in 1952 for $17,000. It rarely appeared in publications and remained largely unknown until Christie's sold it in May 2010 for <strong>$106.5 million</strong>, setting the world auction record at that time.</p>`,
    faqs: [
      {
        question: "Who was Marie-Thérèse Walter?",
        answer: "<strong>Marie-Thérèse Walter</strong> was Picasso's mistress and muse during the 1930s. They met in 1927 when she was 17 and he was 45. She inspired hundreds of paintings, drawings, and sculptures."
      },
      {
        question: "Where was this painting created?",
        answer: "Picasso painted it at the <strong>Château de Boisgeloup</strong> in Normandy, where he had sculpture studios. The bust in the composition reflects his parallel work in three-dimensional form."
      },
      {
        question: "Why was the $106 million price so significant?",
        answer: "It set the <strong>world auction record</strong> for any artwork in 2010. The price reflected both its artistic importance and the mystique of a major Picasso that had rarely been seen publicly."
      }
    ]
  },
  {
    slug: 'silver-car-crash-warhol',
    description: `<p><a href="/artist/andy-warhol"><strong>Andy Warhol</strong></a> created Silver Car Crash (Double Disaster) in summer 1963, part of his Death and Disaster series exploring mortality and media sensationalism. The monumental diptych spans over eight feet by thirteen feet, presenting a tabloid photograph of a fatal car crash <strong>silkscreened repeatedly</strong> across silver spray-painted canvas.</p>
<p>The images cascade down the left panel in a filmstrip arrangement, showing a twisted body in mangled wreckage. Warhol's mechanical repetition deliberately numbs the viewer, demonstrating how mass reproduction drains emotional impact from even the most horrific imagery. The Death and Disaster series comprises roughly 70 works, but only four reach this monumental scale. <strong>Silver Car Crash is the only one</strong> remaining in private hands.</p>
<p>Art historians position the work alongside Géricault's Raft of the Medusa and Picasso's Guernica as a grand statement painting addressing catastrophe. At Sotheby's in November 2013, it sold for <strong>$105.4 million</strong>, setting the record for any Warhol at auction.</p>`,
    faqs: [
      {
        question: "What is the Death and Disaster series?",
        answer: "Warhol's <strong>Death and Disaster</strong> series (about 70 works) used tabloid images of car crashes, electric chairs, and suicides. The mechanical repetition explores how mass media numbs us to violence."
      },
      {
        question: "Why did Warhol repeat the same image?",
        answer: "The <strong>silkscreen repetition</strong> mimics mass production, showing how reproducing an image drains its emotional power. What starts as shocking becomes pattern, then wallpaper."
      },
      {
        question: "Why is Silver Car Crash so valuable?",
        answer: "At $105.4 million, it holds the <a href=\"/movement/pop-art\"><strong>Pop Art</strong></a> auction record. Its rarity (only four large-scale car crashes exist), museum-quality provenance, and art historical importance drive the price."
      }
    ]
  },
  {
    slug: 'boy-with-pipe-picasso',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted Garçon à la pipe (Boy with a Pipe) in 1905 at age 24, shortly after settling in the Montmartre artist collective Le Bateau-Lavoir. A teenage boy known as <strong>"P'tit Louis"</strong> (Little Louis) sits wearing a floral garland on his head, holding a pipe in his left hand. The warm pinks and earthy tones mark this as a masterwork of the Rose Period.</p>
<p>P'tit Louis was a local youth who frequently hung around Picasso's studio. The artist called him an "evil angel," and the boy died young. The pipe symbolizes intellectual reflection while the flower wreath suggests innocence, creating a tension between youth and experience that pervades the composition.</p>
<p>In May 2004, the painting sold at Sotheby's for <strong>$104.2 million</strong>, shattering Van Gogh's Portrait of Dr. Gachet record that had stood since 1990. Italian businessman Guido Barilla of the pasta empire reportedly acquired it. The unprecedented price generated debate about whether the market had lost perspective on artistic merit versus investment value.</p>`,
    faqs: [
      {
        question: "Who was the boy in the painting?",
        answer: "<strong>P'tit Louis</strong> (Little Louis) was a local teenager who frequented Picasso's Montmartre studio. Picasso called him an \"evil angel.\" The boy died young, his full story lost to history."
      },
      {
        question: "What do the pipe and flowers symbolize?",
        answer: "The <strong>pipe represents intellect</strong> and reflection, a common symbol in 19th-century art. The floral wreath suggests youth and innocence. Together they convey the duality of adolescence and experience."
      },
      {
        question: "Why did the 2004 sale price cause controversy?",
        answer: "At <strong>$104 million</strong>, some critics questioned whether the painting warranted such prices. The debate highlighted tensions between art's cultural value and its role as financial asset."
      }
    ]
  },
  {
    slug: 'chariot-giacometti',
    description: `<p><a href="/artist/alberto-giacometti"><strong>Alberto Giacometti</strong></a> conceived The Chariot in 1950, casting it in painted bronze in 1951-52. A thin, elongated <strong>nude female figure</strong> stands on a platform mounted between two large wheels, the entire work rising nearly five feet tall. The rough, textured surface and attenuated form convey solitude and human vulnerability.</p>
<p>The sculpture draws from two sources. During a 1938 hospital stay at Paris's Bichat Clinic, Giacometti became fascinated by nurses pushing pharmacy wagons with tinkling bells. He also studied ancient <strong>Egyptian chariot forms</strong> at Florence's Archaeological Museum, whose elevated figures suggest objects of worship. The painted bronze technique recalls polychrome Egyptian funerary art.</p>
<p>Giacometti's emaciated postwar figures reflect existentialist philosophy, presenting humanity as isolated and fragile yet somehow transcendent. The Chariot ranks among his most important works, combining personal memory with ancient artistic traditions. Hedge fund manager Steven Cohen acquired it at Sotheby's in November 2014 for <strong>$101 million</strong>, the second-highest price for any Giacometti sculpture.</p>`,
    faqs: [
      {
        question: "What inspired Giacometti to create The Chariot?",
        answer: "Two sources: a <strong>1938 hospital stay</strong> where nurses pushed wagons with tinkling bells, and ancient Egyptian chariot sculptures he studied in Florence. Both elements merge in the final work."
      },
      {
        question: "Why is The Chariot considered his masterpiece?",
        answer: "It synthesizes <strong>existentialist philosophy</strong> with ancient artistic traditions. The fragile figure elevated on wheels becomes transcendent, representing post-war humanity's vulnerability and resilience."
      },
      {
        question: "How many versions of The Chariot exist?",
        answer: "Giacometti created <strong>multiple bronze casts</strong> from the original. Major institutions including MoMA and the National Gallery of Art hold versions. The 2014 sale set the second-highest price for his work."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 5 ===\n');

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
