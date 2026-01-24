const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkDescriptions = [
  // === MATISSE ===
  {
    slug: 'the-red-studio',
    description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> created one of the most influential paintings of the 20th century by depicting his studio in Issy-les-Moulineaux saturated in a single <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>Venetian red</strong></a>. The intense crimson swallows walls, floor, and furniture alike, with only his own paintings and objects retaining their individual colors.</p>
<p>The work initially confused viewers and remained unsold for years. Matisse himself kept it until 1927. What seemed radical then, the elimination of traditional perspective and shadow, the flattening of space, the dominance of pure color, became foundational for later movements. The objects floating in red include a grandfather clock, chairs, and several of his own canvases, creating a painting about <strong>painting itself</strong>.</p>
<p>The <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>Museum of Modern Art</strong></a> in New York acquired the work in 1949, where it remains a cornerstone of their collection and one of the most studied paintings in modern art history.</p>`,
    faqs: [
      {
        question: "Where can I see The Red Studio?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museum-of-modern-art-moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. It's one of their most important holdings."
      },
      {
        question: "Why is The Red Studio all red?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> used a single <strong>Venetian red</strong> to unify the space and challenge traditional perspective. X-rays show he originally painted a more conventional room before covering it in red."
      },
      {
        question: "What objects are in The Red Studio?",
        answer: "The painting shows <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse's</strong></a> own artworks, a grandfather clock, chairs, pencils, and decorative objects. Everything is outlined in the <strong>red ground</strong> rather than shadowed."
      },
      {
        question: "When did Matisse paint The Red Studio?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> completed this work in <strong>1911</strong> at his studio in Issy-les-Moulineaux, France. It remained unsold for many years."
      }
    ]
  },
  {
    slug: 'the-snail-matisse',
    description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> created this monumental paper cut-out when he was 83 years old and largely confined to bed. Using scissors to "draw" directly in painted paper, he arranged <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>brightly colored</strong></a> shapes in a spiral pattern suggesting a snail shell, though entirely abstract.</p>
<p>The cut-outs of Matisse's final years represent a triumphant reinvention. When arthritis made traditional painting painful, he developed this technique he called "painting with scissors." The Snail demonstrates his continued mastery of <strong>color relationships</strong>, with each shape carefully positioned to vibrate against its neighbors.</p>
<p>The work hangs at Tate Modern in London, one of the largest and most celebrated of Matisse's cut-out compositions.</p>`,
    faqs: [
      {
        question: "Where can I see The Snail?",
        answer: "The work is displayed at <strong>Tate Modern</strong> in London. It's one of <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse's</strong></a> largest and most famous paper cut-outs."
      },
      {
        question: "How did Matisse make The Snail?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> painted paper with gouache, then cut shapes with <strong>scissors</strong>. Assistants helped position the pieces on the enormous canvas under his direction."
      },
      {
        question: "Why did Matisse make paper cut-outs?",
        answer: "When <strong>arthritis</strong> made painting difficult in his final years, <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> developed cut-outs as a new medium. He called it \"painting with scissors.\""
      },
      {
        question: "How big is The Snail?",
        answer: "The work measures 286.4 cm × 287 cm (nearly 9.5 feet square). It's one of the <strong>largest cut-outs</strong> <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> ever created."
      }
    ]
  },

  // === WYETH ===
  {
    slug: 'christinas-world',
    description: `<p><a href="/apps/masterpieces/artist/andrew-wyeth"><strong>Andrew Wyeth</strong></a> depicted his neighbor Christina Olson crawling across a dry grass field toward her family's farmhouse on the Maine coast. Christina had a degenerative muscle condition that left her unable to walk, yet she refused to use a wheelchair, instead dragging herself across the land she loved.</p>
<p>The painting captures a complex mixture of vulnerability and determination. Christina's twisted posture and thin arms suggest fragility, while her position gazing toward the distant house implies resolve. Wyeth worked in <strong>egg tempera</strong>, building the image through countless tiny brushstrokes that create the texture of dry <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown grass</strong></a> and weathered wood.</p>
<p>The <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>Museum of Modern Art</strong></a> in New York acquired the painting in 1949, where it became one of the most recognized images in <strong>American art</strong>.</p>`,
    faqs: [
      {
        question: "Who is Christina in Christina's World?",
        answer: "<strong>Christina Olson</strong> was <a href=\"/apps/masterpieces/artist/andrew-wyeth\"><strong>Wyeth's</strong></a> neighbor in Cushing, Maine. She had a degenerative condition that prevented walking, but refused a wheelchair."
      },
      {
        question: "Where can I see Christina's World?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museum-of-modern-art-moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York. It's one of their most popular American paintings."
      },
      {
        question: "What technique did Wyeth use?",
        answer: "<a href=\"/apps/masterpieces/artist/andrew-wyeth\"><strong>Wyeth</strong></a> painted in <strong>egg tempera</strong>, a painstaking medium requiring thousands of tiny brushstrokes. This creates the detailed texture of grass and weathered surfaces."
      },
      {
        question: "Is the Olson House still there?",
        answer: "Yes, the <strong>Olson House</strong> in Cushing, Maine is now a museum. Visitors can see the actual landscape <a href=\"/apps/masterpieces/artist/andrew-wyeth\"><strong>Wyeth</strong></a> painted in Christina's World."
      }
    ]
  },

  // === GAUGUIN ===
  {
    slug: 'two-tahitian-women',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted two young Tahitian women offering a tray of <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red flowers</strong></a>, capturing what he saw as an unspoiled paradise. One woman is bare-breasted while the other wears a traditional pareo. Their dignified, calm poses contrast with Western depictions of exotic nudity.</p>
<p>Gauguin arrived in Tahiti seeking escape from European civilization, though by 1899 the island had been significantly colonized. His paintings present an idealized vision that glossed over colonial realities. Regardless of these contradictions, the work demonstrates his mastery of <strong>bold color</strong> and simplified forms that influenced countless later artists.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York, a major work from Gauguin's <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> Tahitian period.</p>`,
    faqs: [
      {
        question: "Where can I see Two Tahitian Women?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York City. It's one of their finest <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> works."
      },
      {
        question: "When did Gauguin paint Two Tahitian Women?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> completed this painting in <strong>1899</strong> during his second stay in Tahiti. He would spend most of his remaining years in the South Pacific."
      },
      {
        question: "What are the women holding?",
        answer: "The women offer a wooden tray filled with <strong>red mango flowers</strong>. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> often included local plants and offerings in his Tahitian compositions."
      },
      {
        question: "Why did Gauguin go to Tahiti?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> sought escape from what he called \"<strong>diseased civilization</strong>.\" He romanticized Polynesian culture as pure and uncorrupted, though the reality was more complex."
      }
    ]
  },
  {
    slug: 'nevermore-gauguin',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> titled this painting after Edgar Allan Poe's famous poem, though he denied any direct connection. A nude Tahitian woman lies on a <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow bed</strong></a>, her expression apprehensive as a raven watches from a window and mysterious figures converse in the background.</p>
<p>The word "NEVERMORE" inscribed on the canvas suggests mortality and loss. Gauguin painted the work during a difficult period, struggling with illness and poverty in Tahiti. The woman's tense pose and watchful eye create an atmosphere of <strong>unease</strong> absent from his more serene compositions.</p>
<p>The painting resides at the <a href="/apps/masterpieces/museum/courtauld-gallery"><strong>Courtauld Gallery</strong></a> in London, part of their exceptional collection of <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> works.</p>`,
    faqs: [
      {
        question: "Where can I see Nevermore?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/courtauld-gallery\"><strong>Courtauld Gallery</strong></a> in London. It's part of their important <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> collection."
      },
      {
        question: "Is Nevermore related to Edgar Allan Poe?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> inscribed \"<strong>NEVERMORE</strong>\" on the canvas, evoking Poe's famous raven. He denied illustrating the poem but admitted the word suggested \"the bird of the devil.\""
      },
      {
        question: "What is the mood of Nevermore?",
        answer: "Unlike Gauguin's more peaceful Tahitian scenes, <strong>Nevermore</strong> feels anxious and ominous. The woman's wary expression and watching figures create psychological tension."
      },
      {
        question: "When did Gauguin paint Nevermore?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> completed this work in <strong>1897</strong>, during a period of illness and financial difficulty in Tahiti."
      }
    ]
  },
  {
    slug: 'tahitian-women-on-beach',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted two Tahitian women seated on a <a href="https://luxurywallart.com/collections/beach-artwork" target="_blank" rel="noopener"><strong>beach</strong></a>, one in a traditional pareo, the other in a Western-style missionary dress. This contrast hints at the collision of cultures Gauguin witnessed but often chose to minimize in his idealized island scenes.</p>
<p>The women's monumental forms and calm poses recall classical sculpture, while the <strong>flat, decorative color</strong> marked Gauguin's break from Impressionism. The pink sand and simplified background demonstrate his move toward symbolic rather than naturalistic representation.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, part of their exceptional <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> collection.</p>`,
    faqs: [
      {
        question: "Where can I see Tahitian Women on the Beach?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It's one of <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> most recognizable Tahitian works."
      },
      {
        question: "Why is one woman dressed differently?",
        answer: "One wears a <strong>traditional pareo</strong>, the other a Western missionary dress. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> subtly showed how colonialism was changing Tahitian culture."
      },
      {
        question: "What year is this painting from?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted this in <strong>1891</strong>, shortly after arriving in Tahiti for the first time. It captures his early fascination with the island."
      },
      {
        question: "What style is this painting?",
        answer: "This is a major work of <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> used flat color areas and bold outlines rather than Impressionist broken brushwork."
      }
    ]
  },

  // === HOMER ===
  {
    slug: 'fog-warning-homer',
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> captured a solitary fisherman rowing his dory through building fog toward a distant schooner. The catch of halibut weighs down the small boat while the man scans the horizon, racing against the weather. One wrong turn could leave him lost in the <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>grey void</strong></a>.</p>
<p>Homer based this on observations at Prout's Neck, Maine, where he lived among fishermen and understood the dangers they faced. The painting shows the <strong>solitary struggle</strong> against nature that defined his mature work. Every stroke of the oar could mean the difference between life and death.</p>
<p>The painting hangs at the Museum of Fine Arts, Boston, a masterpiece of American <strong>marine painting</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see The Fog Warning?",
        answer: "The painting hangs at the <strong>Museum of Fine Arts, Boston</strong>. It's considered one of <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer's</strong></a> greatest marine paintings."
      },
      {
        question: "What is happening in The Fog Warning?",
        answer: "A <strong>fisherman</strong> races his dory back to his schooner as fog rolls in. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> captured the danger of being caught alone in the Grand Banks fog."
      },
      {
        question: "When did Homer paint The Fog Warning?",
        answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> completed this work in <strong>1885</strong>. It followed his transformative stay in an English fishing village where he first focused on maritime themes."
      },
      {
        question: "What is a dory?",
        answer: "A <strong>dory</strong> is a small, flat-bottomed rowboat used by fishermen. They would row out from larger schooners to catch fish, then return, as shown in <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer's</strong></a> painting."
      }
    ]
  },
  {
    slug: 'gulf-stream-homer',
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> painted a Black sailor adrift on a dismasted boat surrounded by sharks in the Gulf Stream. A waterspout threatens on the horizon while a ship sails away, apparently oblivious. The man lies exhausted but watchful, his fate uncertain.</p>
<p>The painting provoked controversy and endless interpretation. Some saw commentary on the <strong>African American experience</strong> after slavery's end, others pure man-versus-nature drama. Homer refused to explain, saying only "you may let your imagination loose" about whether the ship rescues him. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>deep blue water</strong></a> and circling sharks create almost unbearable tension.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "Where can I see The Gulf Stream?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. It's one of <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer's</strong></a> most famous works."
      },
      {
        question: "Is the man in The Gulf Stream rescued?",
        answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> <strong>refused to say</strong>. When asked if the ship saves him, Homer replied, \"you may let your imagination loose.\" The ambiguity is intentional."
      },
      {
        question: "What do the sharks represent?",
        answer: "Interpretations vary. Some see the <strong>sharks</strong> as symbols of racial violence in post-Civil War America; others read them as pure natural danger. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> left the meaning open."
      },
      {
        question: "When did Homer paint The Gulf Stream?",
        answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> completed this work in <strong>1899</strong>, late in his career. He had visited the Bahamas and drew on those experiences."
      }
    ]
  },
  {
    slug: 'right-and-left-homer',
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> painted two golden-eye ducks at the moment of death, shot by an unseen hunter whose boat and gun flash appear at the picture's edge. The birds hang suspended against a <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>grey sky</strong></a> and churning water, caught between life and death.</p>
<p>The title comes from hunting terminology: "right and left" meant shooting two birds with consecutive barrels of a shotgun. Homer completed this painting at age 72, two years before his death, making it effectively his artistic <strong>farewell</strong>. The composition places viewers in the position of the dying birds, looking toward the hunter who kills them.</p>
<p>The painting hangs at the National Gallery of Art in Washington, D.C.</p>`,
    faqs: [
      {
        question: "Where can I see Right and Left?",
        answer: "The painting hangs at the <strong>National Gallery of Art</strong> in Washington, D.C. It was <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer's</strong></a> last major work."
      },
      {
        question: "What does 'right and left' mean?",
        answer: "In hunting terminology, \"<strong>right and left</strong>\" means shooting two birds with consecutive shots from a double-barreled shotgun. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> captured that exact moment."
      },
      {
        question: "When did Homer paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> completed <strong>Right and Left in 1909</strong>, two years before his death. It's considered his artistic farewell."
      },
      {
        question: "What viewpoint does the painting use?",
        answer: "We see from the <strong>ducks' perspective</strong>, looking toward the hunter who just shot them. The gun flash is barely visible at the canvas edge."
      }
    ]
  },

  // === DEGAS ===
  {
    slug: 'little-dancer-fourteen-years',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> created this nearly life-sized sculpture of a young <strong>ballet student</strong> for the 1881 Impressionist exhibition. The original wax figure wore a real bodice, tutu, and hair ribbon, shocking viewers who expected idealized bronze nudes. Critics called it "ugly" and compared the girl to a monkey.</p>
<p>Marie van Goethem, the model, was a working-class dancer at the Paris Opera. Degas captured her with unflinching realism: the awkward adolescent posture, the slightly jutting chin, the imperfect features of a real teenager. The work challenged every convention of sculptural beauty.</p>
<p>After Degas' death, bronze casts were made from his original wax. These now reside in major museums including the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a>, the Musée d'Orsay, and the National Gallery of Art.</p>`,
    faqs: [
      {
        question: "Where can I see Little Dancer of Fourteen Years?",
        answer: "Bronze casts exist at multiple museums including the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a>, <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, and National Gallery of Art."
      },
      {
        question: "Who was the model for Little Dancer?",
        answer: "<strong>Marie van Goethem</strong>, a working-class ballet student at the Paris Opera, modeled for <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>. She was 14 years old, exactly as the title states."
      },
      {
        question: "Why was the sculpture controversial?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> showed an <strong>ordinary girl</strong> with imperfect features, dressed in real fabric. Critics expected idealized beauty and were disturbed by such realism in sculpture."
      },
      {
        question: "Is the sculpture bronze or wax?",
        answer: "The <strong>original was wax</strong> with real fabric. After <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas'</strong></a> death, bronze casts were made. Most museum versions are these posthumous bronzes."
      }
    ]
  },
];

async function main() {
  console.log('=== Updating Masterpieces Batch 4 with Descriptions ===\n');

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
