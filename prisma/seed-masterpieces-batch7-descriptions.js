const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkDescriptions = [
  // === POLLOCK ===
  {
    slug: 'no-5-1948-pollock',
    description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created this dense web of dripped and splattered paint at the height of his "drip period." The surface pulses with layers of <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a>, <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown</strong></a>, white, and gray paint applied by dripping, pouring, and flicking from hardened brushes and sticks.</p>
<p>The painting made headlines in 2006 when it reportedly sold for $140 million, then a record price for any painting. Pollock worked on the floor, circling his canvases and entering what he called a near-trance state. The result feels simultaneously chaotic and controlled, with rhythms emerging from the apparent randomness.</p>
<p>The painting is privately owned and rarely exhibited publicly.</p>`,
    faqs: [
      {
        question: "How much did No. 5, 1948 sell for?",
        answer: "The painting reportedly sold for <strong>$140 million</strong> in 2006, making it one of the most expensive paintings ever sold at that time."
      },
      {
        question: "How did Pollock make this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> laid the canvas on the floor and <strong>dripped, poured, and splattered</strong> paint using sticks and hardened brushes, moving around the canvas."
      },
      {
        question: "Where can I see No. 5, 1948?",
        answer: "The painting is in a <strong>private collection</strong> and is rarely exhibited publicly."
      },
      {
        question: "What style is this?",
        answer: "This is <strong>Abstract Expressionism</strong>, specifically <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock's</strong></a> signature \"action painting\" or \"drip painting\" technique."
      }
    ]
  },
  {
    slug: 'autumn-rhythm-pollock',
    description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created this monumental work by dripping black, white, and <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown enamel paint</strong></a> across a massive canvas laid on his studio floor. At over 17 feet wide, it envelops viewers in its swirling rhythms. The title suggests the natural cadences Pollock sought in his gestural approach.</p>
<p>Photographer Hans Namuth documented Pollock creating this painting, producing iconic images of the artist in action. The seemingly random marks reveal deliberate decisions when studied closely, with Pollock controlling the paint's trajectory through his movements. There's no focal point; the energy spreads evenly across the entire surface.</p>
<p>The painting hangs at The Metropolitan Museum of Art in New York.</p>`,
    faqs: [
      {
        question: "Where can I see Autumn Rhythm?",
        answer: "The painting is at <strong>The Metropolitan Museum of Art</strong> in New York. It's one of the largest and most celebrated <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollocks</strong></a> on public display."
      },
      {
        question: "How big is Autumn Rhythm?",
        answer: "The canvas measures 266.7 cm × 525.8 cm (<strong>about 8.5 × 17 feet</strong>). It's among the largest of <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock's</strong></a> drip paintings."
      },
      {
        question: "Why is it called Autumn Rhythm?",
        answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> sought natural <strong>rhythms</strong> in his work. The earth tones and flowing movements suggest autumn's organic patterns."
      },
      {
        question: "What kind of paint did Pollock use?",
        answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> used <strong>commercial enamel house paint</strong>, which dripped more fluidly than artist's oil paint."
      }
    ]
  },
  {
    slug: 'convergence-pollock',
    description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> built up explosive layers of black, white, and <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vivid colors</strong></a> in this energetic composition. Unlike some of his more restrained drip paintings, Convergence erupts with reds, yellows, and blues that Pollock added after laying down the initial web of black and white.</p>
<p>The painting was featured in a 1964 jigsaw puzzle marketed as "the world's most difficult puzzle," introducing Pollock's work to a mass audience. The overlapping skeins of paint create a sense of continuous movement without beginning or end. Pollock considered the painting a rejection of oppression, personal and political.</p>
<p>The painting is in the collection of the Albright-Knox Art Gallery in Buffalo, New York.</p>`,
    faqs: [
      {
        question: "Where can I see Convergence?",
        answer: "The painting is at the <strong>Albright-Knox Art Gallery</strong> in Buffalo, New York."
      },
      {
        question: "Why was this made into a puzzle?",
        answer: "In 1964, it was marketed as \"<strong>the world's most difficult puzzle</strong>\" with 340 pieces. This helped popularize <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock's</strong></a> work beyond the art world."
      },
      {
        question: "What colors are in Convergence?",
        answer: "Beneath a web of black and white, <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> added <strong>red, yellow, blue, and orange</strong>, making it more colorful than many of his drip paintings."
      },
      {
        question: "What did Pollock say about this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> saw it as a statement against <strong>repression and oppression</strong>, both personal and political."
      }
    ]
  },
  {
    slug: 'blue-poles-pollock',
    description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> anchored this chaotic composition with eight vertical <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue "poles"</strong></a> that march across the canvas, creating a structure beneath the dripped paint. Glass fragments embedded in the surface catch the light, adding texture to the already complex layers of enamel and aluminum paint.</p>
<p>Australia's 1973 purchase of the painting for $2 million caused national controversy, then a record price for a contemporary American painting. The investment proved visionary; Blue Poles is now valued in the hundreds of millions and has become an Australian cultural icon. The poles were reportedly added after an all-night session with fellow artists.</p>
<p>The painting is a centerpiece of the National Gallery of Australia in Canberra.</p>`,
    faqs: [
      {
        question: "Where can I see Blue Poles?",
        answer: "The painting is at the <strong>National Gallery of Australia</strong> in Canberra. It's one of their most famous holdings."
      },
      {
        question: "Why was the purchase controversial?",
        answer: "Australia paid <strong>$2 million in 1973</strong>, a record for contemporary American art. Critics questioned spending public money on abstract art."
      },
      {
        question: "What are the blue poles?",
        answer: "Eight <strong>vertical blue marks</strong> painted over the dripped layers create a scaffold-like structure. <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> added them near the end."
      },
      {
        question: "What's embedded in the paint?",
        answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> pressed <strong>glass fragments</strong> into the wet paint, adding physical texture and catching light."
      }
    ]
  },

  // === ROTHKO ===
  {
    slug: 'no-61-rust-blue-rothko',
    description: `<p><a href="/apps/masterpieces/artist/mark-rothko"><strong>Mark Rothko</strong></a> stacked luminous rectangles of <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>rust red</strong></a> and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>deep blue</strong></a> on this nearly 10-foot canvas. The colors seem to float and breathe, their edges softly blurred where they meet. Rothko wanted viewers to stand close, letting the painting envelope their field of vision.</p>
<p>Rothko rejected the label "abstract" for his work, insisting he painted emotions: tragedy, ecstasy, doom. The scale forces an intimate encounter with these feelings. The rust and blue create a dialogue of warm and cool, tension and release. Rothko specified that his paintings be hung low and viewed in dim light.</p>
<p>The painting is in the collection of the Museum of Contemporary Art, Los Angeles.</p>`,
    faqs: [
      {
        question: "Where can I see No. 61?",
        answer: "The painting is at the <strong>Museum of Contemporary Art (MOCA)</strong> in Los Angeles."
      },
      {
        question: "How should you view a Rothko painting?",
        answer: "<a href=\"/apps/masterpieces/artist/mark-rothko\"><strong>Rothko</strong></a> wanted viewers to stand <strong>18 inches away</strong> so the colors fill your vision. He preferred dim lighting."
      },
      {
        question: "What did Rothko say his paintings were about?",
        answer: "<a href=\"/apps/masterpieces/artist/mark-rothko\"><strong>Rothko</strong></a> said he painted \"<strong>basic human emotions</strong>: tragedy, ecstasy, doom.\" He rejected the term \"abstract.\""
      },
      {
        question: "How big is this painting?",
        answer: "The canvas measures 292.7 cm × 233.4 cm (<strong>nearly 10 feet tall</strong>), large enough to envelope the viewer."
      }
    ]
  },
  {
    slug: 'black-in-deep-red-rothko',
    description: `<p><a href="/apps/masterpieces/artist/mark-rothko"><strong>Mark Rothko</strong></a> created this somber meditation with a rectangle of <a href="https://luxurywallart.com/collections/black-and-red-art" target="_blank" rel="noopener"><strong>black floating above deep red</strong></a>. The colors seem to pulse with internal light despite their darkness. Rothko's technique of layering thin glazes creates depth that photographs cannot capture.</p>
<p>By 1957, Rothko's palette had grown increasingly dark, moving toward the brooding canvases of his final years. The black rectangle dominates while the red provides a warm foundation. Standing before the original, viewers often report an almost physical emotional response. Rothko sought exactly this kind of direct communication.</p>
<p>The painting is in a private collection.</p>`,
    faqs: [
      {
        question: "Where can I see Black in Deep Red?",
        answer: "The painting is in a <strong>private collection</strong>. It sold for $28.2 million in 2000."
      },
      {
        question: "Why did Rothko's colors get darker?",
        answer: "<a href=\"/apps/masterpieces/artist/mark-rothko\"><strong>Rothko's</strong></a> palette darkened through the 1950s and 60s, reflecting what many interpret as his <strong>deepening struggle with depression</strong>."
      },
      {
        question: "How did Rothko create the glowing effect?",
        answer: "<a href=\"/apps/masterpieces/artist/mark-rothko\"><strong>Rothko</strong></a> applied <strong>many thin layers of paint</strong>, building up translucent glazes that seem to glow from within."
      },
      {
        question: "What movement is Rothko associated with?",
        answer: "<a href=\"/apps/masterpieces/artist/mark-rothko\"><strong>Rothko</strong></a> is a key figure in <strong>Abstract Expressionism</strong>, specifically the Color Field branch focused on large areas of pure color."
      }
    ]
  },

  // === WARHOL ===
  {
    slug: 'marilyn-diptych-warhol',
    description: `<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> created this memorial to Marilyn Monroe just weeks after her death in August 1962. Fifty images of the star, based on a publicity photo from "Niagara," fill two canvases. The left panel blazes with garish color; the right fades to ghostly black and white, suggesting mortality.</p>
<p>The repetition of Monroe's face, silkscreened with deliberate imperfections, comments on celebrity, mechanical reproduction, and the way media images replace actual people. As the images fade rightward, Monroe seems to disappear before our eyes. Warhol transformed tragedy into <strong>Pop Art icon</strong>.</p>
<p>The painting hangs at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Modern</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see Marilyn Diptych?",
        answer: "The painting is at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a> in London. It's one of their most visited works."
      },
      {
        question: "When did Warhol make this?",
        answer: "<a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a> created it in <strong>August 1962</strong>, weeks after Marilyn Monroe's death on August 5th."
      },
      {
        question: "Why are there two panels?",
        answer: "The <strong>colorful left</strong> represents Monroe's vibrant public image; the <strong>fading right</strong> suggests death and disappearance. Together they meditate on mortality."
      },
      {
        question: "What photo did Warhol use?",
        answer: "<a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a> used a <strong>publicity still from \"Niagara\"</strong> (1953). He reused this image in many Monroe works."
      }
    ]
  },
  {
    slug: 'eight-elvises-warhol',
    description: `<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> silkscreened Elvis Presley as a <a href="https://luxurywallart.com/collections/silver-art" target="_blank" rel="noopener"><strong>silver</strong></a> gunslinger eight times across this long horizontal canvas. The image comes from a publicity still for "Flaming Star," with Elvis pointing a pistol directly at the viewer. The repetition and slight overlapping create a cinematic sense of motion.</p>
<p>Warhol conflated two American obsessions: celebrity and violence. The silver background evokes movie screens and tabloid glamour. In 2008, the painting sold for over $100 million, cementing Warhol's status in the art market stratosphere. The multiple Elvises blur individual identity into mass-produced icon.</p>
<p>The painting is in a private collection.</p>`,
    faqs: [
      {
        question: "How much did Eight Elvises sell for?",
        answer: "The painting sold for over <strong>$100 million</strong> in a 2008 private sale, one of the highest prices for any <a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a>."
      },
      {
        question: "What film is the image from?",
        answer: "The image is from a <strong>publicity photo for \"Flaming Star\"</strong> (1960), a Western starring Elvis Presley."
      },
      {
        question: "Why silver?",
        answer: "<a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a> used <strong>silver paint</strong> to evoke movie screens, glamour, and the artificial sheen of celebrity culture."
      },
      {
        question: "Where can I see Eight Elvises?",
        answer: "The painting is in a <strong>private collection</strong> and rarely exhibited publicly."
      }
    ]
  },

  // === LICHTENSTEIN ===
  {
    slug: 'whaam-lichtenstein',
    description: `<p><a href="/apps/masterpieces/artist/roy-lichtenstein"><strong>Roy Lichtenstein</strong></a> adapted this two-panel painting from a 1962 DC Comics panel, showing a fighter jet firing a rocket that explodes an enemy plane. The <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> and <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> explosion dominates the right panel with its comic-book "WHAAM!" The Ben-Day dots and bold outlines mimic cheap printing.</p>
<p>By enlarging commercial imagery to gallery scale, Lichtenstein questioned distinctions between high and low culture. The violence is sanitized through the comic-book style, commenting on how media aestheticizes warfare. At nearly 14 feet wide, the painting transforms disposable entertainment into <strong>monumental art</strong>.</p>
<p>The painting is at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Modern</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see Whaam!?",
        answer: "The painting is at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a> in London. It's one of their signature Pop Art holdings."
      },
      {
        question: "Is this copied from a comic book?",
        answer: "Yes, <a href=\"/apps/masterpieces/artist/roy-lichtenstein\"><strong>Lichtenstein</strong></a> adapted it from a 1962 <strong>DC Comics</strong> panel drawn by Irv Novick for \"All-American Men of War.\""
      },
      {
        question: "What are Ben-Day dots?",
        answer: "<strong>Ben-Day dots</strong> are a printing technique using colored dots to create shading. <a href=\"/apps/masterpieces/artist/roy-lichtenstein\"><strong>Lichtenstein</strong></a> painted them by hand to mimic cheap printing."
      },
      {
        question: "How big is Whaam!?",
        answer: "The two panels together span <strong>406.4 cm (over 13 feet) wide</strong>. The massive scale transforms comic imagery into museum art."
      }
    ]
  },
  {
    slug: 'drowning-girl-lichtenstein',
    description: `<p><a href="/apps/masterpieces/artist/roy-lichtenstein"><strong>Roy Lichtenstein</strong></a> cropped and adapted this image from a 1962 romance comic, showing a woman's face emerging from stylized <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue waves</strong></a>. Her thought bubble reads: "I don't care! I'd rather sink than call Brad for help!" The melodrama becomes both parody and genuine emotion at this scale.</p>
<p>Lichtenstein simplified the original panel, removing a boyfriend from the scene and intensifying the colors. The Ben-Day dots, black outlines, and limited palette flatten everything into graphic design. Yet somehow the image retains emotional power, the woman's expression genuinely distressed despite the artificial style.</p>
<p>The painting is at the <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>Museum of Modern Art</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "Where can I see Drowning Girl?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/museum-of-modern-art-moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York."
      },
      {
        question: "What comic is this from?",
        answer: "<a href=\"/apps/masterpieces/artist/roy-lichtenstein\"><strong>Lichtenstein</strong></a> adapted it from \"<strong>Run for Love!\"</strong> in DC Comics' Secret Hearts #83 (1962), drawn by Tony Abruzzo."
      },
      {
        question: "Did Lichtenstein change the original?",
        answer: "Yes, he <strong>cropped the image and removed a boyfriend</strong> who was originally shown. He also simplified and intensified the colors."
      },
      {
        question: "What does the text say?",
        answer: "The thought bubble reads: \"<strong>I don't care! I'd rather sink than call Brad for help!</strong>\" It captures romance comic melodrama."
      }
    ]
  },

  // === HOCKNEY ===
  {
    slug: 'bigger-splash-hockney',
    description: `<p><a href="/apps/masterpieces/artist/david-hockney"><strong>David Hockney</strong></a> captured a California swimming pool at the moment a diver enters the water, though the diver has already disappeared. Only the <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>white splash</strong></a> remains, frozen against the still <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue water</strong></a> and geometric architecture. The painting took two weeks to complete, with the splash itself requiring days of meticulous brushwork.</p>
<p>Hockney moved to Los Angeles in 1964, entranced by the light, pools, and casual lifestyle. This painting distills that fascination into a single suspended moment. The flat, bright colors and crisp geometry contrast with the chaotic splash, action frozen in sunshine. It became an icon of California cool.</p>
<p>The painting is at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see A Bigger Splash?",
        answer: "The painting is at <strong>Tate Britain</strong> in London. It's one of <a href=\"/apps/masterpieces/artist/david-hockney\"><strong>Hockney's</strong></a> most famous works."
      },
      {
        question: "Where is the diver?",
        answer: "The <strong>diver has already entered the water</strong>. <a href=\"/apps/masterpieces/artist/david-hockney\"><strong>Hockney</strong></a> shows only the splash, suggesting presence through absence."
      },
      {
        question: "How long did the splash take to paint?",
        answer: "The splash alone took about <strong>two weeks</strong> of detailed brushwork, while the rest of the painting is flat and smooth."
      },
      {
        question: "Why did Hockney paint California pools?",
        answer: "<a href=\"/apps/masterpieces/artist/david-hockney\"><strong>Hockney</strong></a> moved to Los Angeles in 1964 and became <strong>fascinated with the light, architecture, and pool culture</strong>. It defined his 1960s work."
      }
    ]
  },

  // === BACON ===
  {
    slug: 'study-after-velazquez-bacon',
    description: `<p><a href="/apps/masterpieces/artist/francis-bacon"><strong>Francis Bacon</strong></a> transformed Velázquez's serene portrait of Pope Innocent X into a <strong>screaming nightmare</strong>. The pope appears trapped behind vertical lines suggesting a cage or throne, his mouth open in a silent howl. Purple and black envelop the distorted figure.</p>
<p>Bacon never saw the original Velázquez in person, working only from reproductions. He painted over 50 variations on the screaming pope theme between 1949 and 1971. The image channels postwar existential anguish through art historical quotation. The contrast between the pope's authority and his apparent terror creates visceral unease.</p>
<p>The painting is at the Des Moines Art Center in Iowa.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting is at the <strong>Des Moines Art Center</strong> in Iowa. Other versions of <a href=\"/apps/masterpieces/artist/francis-bacon\"><strong>Bacon's</strong></a> screaming popes are in various collections."
      },
      {
        question: "Did Bacon see the original Velázquez?",
        answer: "No, <a href=\"/apps/masterpieces/artist/francis-bacon\"><strong>Bacon</strong></a> <strong>never saw the original</strong> in Rome. He worked entirely from reproductions and refused to visit it."
      },
      {
        question: "How many screaming pope paintings did Bacon make?",
        answer: "<a href=\"/apps/masterpieces/artist/francis-bacon\"><strong>Bacon</strong></a> created <strong>over 50 variations</strong> on this theme between 1949 and 1971. It became his signature subject."
      },
      {
        question: "Why is the pope screaming?",
        answer: "The scream expresses <strong>existential horror</strong>. <a href=\"/apps/masterpieces/artist/francis-bacon\"><strong>Bacon</strong></a> channeled postwar anxiety into this image of authority in anguish."
      }
    ]
  },
];

async function main() {
  console.log('=== Updating Masterpieces Batch 7 with Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const artwork of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: artwork.slug }
    });

    if (!existing) {
      console.log(`Skipped (not found): ${artwork.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${existing.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
