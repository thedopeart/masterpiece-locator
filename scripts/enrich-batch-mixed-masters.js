const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'rembrandt-the-agony-in-the-garden',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this scene of Christ's agony in the Garden of Gethsemane around 1657, depicting the moment before his arrest when Jesus prayed for the cup of suffering to pass from him. An angel descends bearing that symbolic cup while the disciples Peter, James, and John sleep nearby, unaware of the anguish their master endures.</p>

<p>The painting demonstrates Rembrandt's mastery of <strong>dramatic chiaroscuro</strong>. Christ kneels in a pool of supernatural light emanating from the angel, while darkness envelops everything else. The sleeping disciples huddle in shadow, their obliviousness contrasting with Jesus's wakeful suffering. This use of light to convey spiritual meaning was central to Rembrandt's religious paintings throughout his career.</p>

<p>The work belongs to Rembrandt's late period, when his technique became increasingly loose and his psychological depth intensified. Rather than depicting the scene with theatrical drama, he emphasizes the solitary weight of Christ's decision to accept his fate. The moment feels intimate rather than spectacular. The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where it represents Rembrandt's profound approach to <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>biblical subjects</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see The Agony in the Garden?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, England. The museum holds several important works by Rembrandt spanning his career.`
      },
      {
        question: "What biblical event does this painting show?",
        answer: `The painting depicts <strong>Christ praying in Gethsemane</strong> the night before his crucifixion. An angel appears bearing the cup of suffering while disciples Peter, James, and John sleep nearby, unaware of Jesus's anguish.`
      },
      {
        question: "What is chiaroscuro?",
        answer: `<strong>Chiaroscuro</strong> is the dramatic contrast between light and dark in painting. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> uses supernatural light from the angel to illuminate Christ while darkness envelops the sleeping disciples, conveying spiritual meaning through illumination.`
      },
      {
        question: "When did Rembrandt paint this work?",
        answer: `Rembrandt created this painting around <strong>1657</strong> during his late period, when his technique became increasingly loose and his psychological approach to religious subjects deepened.`
      }
    ]
  },
  {
    slug: 'jean-honore-fragonard-the160birth160of160venus',
    description: `<p><a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted this Birth of Venus around 1755, early in his career shortly after winning the prestigious Prix de Rome that would take him to Italy for further training. The goddess rises from sea foam surrounded by attendant figures, the mythological subject rendered with the decorative elegance and fluid brushwork that would define Rococo painting.</p>

<p>Venus's birth from the sea was a popular subject that allowed artists to depict the <strong>nude female form</strong> within acceptable mythological framing. Fragonard treats the scene with characteristic lightness, emphasizing movement and atmosphere over anatomical precision. The soft colors and loose handling create a sense of shimmering moisture appropriate to the aquatic origin story.</p>

<p>This early work shows Fragonard absorbing the grand manner expected of Prix de Rome winners while already developing his personal approach. He would later move away from such classical subjects toward the amorous garden scenes that made his reputation. The painting now belongs to the <strong>Musée Grobet-Labadié</strong> in Marseille, where it represents the beginning of a career that would come to define French <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Rococo sensibility</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Fragonard's Birth of Venus?",
        answer: `This painting is displayed at the <strong>Musée Grobet-Labadié</strong> in Marseille, France. The museum holds a collection of decorative arts and fine paintings from the seventeenth through nineteenth centuries.`
      },
      {
        question: "What is the myth of Venus's birth?",
        answer: `According to Greek mythology, <strong>Venus (Aphrodite)</strong> was born from sea foam near Cyprus. <a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Fragonard</strong></a> depicts the goddess rising from the water surrounded by attendant figures, a popular subject for painters.`
      },
      {
        question: "When did Fragonard paint this work?",
        answer: `Fragonard created this painting around <strong>1755</strong>, early in his career shortly after winning the Prix de Rome. The mythological subject reflects his training before he developed his signature garden scenes.`
      },
      {
        question: "What is the Prix de Rome?",
        answer: `The <strong>Prix de Rome</strong> was a prestigious French scholarship that sent winning artists to study in Italy. Fragonard won in 1752, and this painting shows him absorbing classical subjects expected of prize winners.`
      }
    ]
  },
  {
    slug: 'eugene-delacroix-two-views-of-an-indian-from-calcutta-seated-and-st',
    description: `<p><a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> created this study of an Indian man from Calcutta around 1823, showing the figure in both seated and standing poses on the same sheet. The rich colors of the subject's costume and the careful attention to exotic dress details reflect the Orientalist fascination that would influence Delacroix's work throughout his career.</p>

<p>Paris in the early nineteenth century offered artists opportunities to study foreign visitors and performers who embodied the <strong>romantic fascination with the East</strong>. Delacroix seized these chances to observe unfamiliar costumes, physiognomy, and postures that differed from classical European models. Such studies fed his imagination and prepared him for later journeys to North Africa.</p>

<p>The dual poses on a single sheet show Delacroix working out the figure's appearance from different angles, a practical method that would inform finished paintings. The vibrancy of color and boldness of brushwork already distinguish his approach from more academic contemporaries. This study remains in a <strong>private collection</strong>, less accessible than his major museum works but significant for understanding how Delacroix built his <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>Romantic vision</strong></a> through direct observation.</p>`,
    faqs: [
      {
        question: "Where can I see Two Views of an Indian from Calcutta?",
        answer: `This study remains in a <strong>private collection</strong>, making it less accessible than Delacroix's major works in museums like the Louvre. It documents his early interest in exotic subjects.`
      },
      {
        question: "What is Orientalism in art?",
        answer: `<strong>Orientalism</strong> was the nineteenth-century European fascination with Middle Eastern and Asian cultures. <a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Delacroix</strong></a> was among the Romantic artists who depicted exotic subjects, costumes, and settings with intense interest.`
      },
      {
        question: "Why are there two poses on one sheet?",
        answer: `Artists often made <strong>multiple studies</strong> on single sheets to work out figures from different angles. Delacroix shows seated and standing poses to understand how the costume and body appeared in various positions.`
      },
      {
        question: "When did Delacroix create this study?",
        answer: `Delacroix made this study around <strong>1823</strong>, early in his career before his famous journey to North Africa in 1832. It shows his Orientalist interests already developing through observation of foreign visitors to Paris.`
      }
    ]
  },
  {
    slug: 'claude-monet-trees-by-the-seashore-at-antibes',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of wind-bent pines against the Mediterranean Sea in 1888, during a productive stay on the French Riviera. The twisted trees frame a brilliant expanse of blue water, their foliage animated by coastal breezes. The intense southern light differed dramatically from the softer illumination of Monet's usual Norman landscapes.</p>

<p>Monet produced dozens of paintings during his <strong>Antibes campaign</strong>, capturing the unique combination of sea, sky, and exotic vegetation. The pines lean inland, shaped by constant winds off the Mediterranean, their silhouettes creating natural frames for the seascape beyond. Pink and blue tones in the distance suggest atmospheric haze that softens the horizon.</p>

<p>The Mediterranean palette challenged Monet to work with colors more saturated than he typically used in northern France. He wrote to friends about the difficulty of capturing such brilliance without the paintings seeming unreal. Yet this intensity attracted buyers, and the Antibes series proved commercially successful. This painting now belongs to the <a href="/apps/masterpieces/museum/courtauld-gallery-london"><strong>Courtauld Gallery</strong></a> in London, where it represents Monet's ability to respond to <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal landscapes</strong></a> far from his home in Giverny.</p>`,
    faqs: [
      {
        question: "Where can I see Trees by the Seashore at Antibes?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/courtauld-gallery-london"><strong>Courtauld Gallery</strong></a> in London, England. The museum holds an important collection of Impressionist and Post-Impressionist paintings.`
      },
      {
        question: "Why did Monet paint in Antibes?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> traveled to the <strong>French Riviera</strong> in 1888 seeking the brilliant Mediterranean light and exotic vegetation that differed dramatically from his usual Norman landscapes.`
      },
      {
        question: "What makes the Antibes paintings distinctive?",
        answer: `The <strong>intense southern light</strong> and saturated colors differ from Monet's softer northern palette. Wind-bent pines, brilliant blue water, and atmospheric haze characterize these Mediterranean scenes.`
      },
      {
        question: "Were the Antibes paintings successful?",
        answer: `Yes, the Antibes series proved <strong>commercially successful</strong>. Despite Monet's concerns that the brilliant colors might seem unreal, buyers responded enthusiastically to these Mediterranean scenes.`
      }
    ]
  },
  {
    slug: 'leonardo-da-vinci-study-sheet',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this study sheet around 1478, filling the paper with multiple sketches that reveal his restless, investigative mind. Figure studies, drapery drawings, and various exploratory marks crowd the page, each element representing a moment of visual thinking. Such sheets offer invaluable glimpses into Leonardo's working process.</p>

<p>Leonardo used study sheets to work through problems across different subjects simultaneously. A <strong>figure might appear</strong> alongside drapery folds, mechanical ideas, or anatomical observations, the page becoming a record of thought rather than a finished product. Pen and ink allowed rapid notation, capturing ideas before they fled.</p>

<p>The mixture of subjects on a single sheet was characteristic of Leonardo's approach. He didn't separate art from science or observation from invention. Everything connected in his mind, and study sheets preserve that interconnected thinking. The page now belongs to the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, where it represents the <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>creative process</strong></a> behind Leonardo's finished masterpieces.</p>`,
    faqs: [
      {
        question: "Where can I see this Leonardo study sheet?",
        answer: `This drawing belongs to the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum holds important drawings documenting Leonardo's creative process.`
      },
      {
        question: "Why did Leonardo make study sheets?",
        answer: `<a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a> used study sheets to work through <strong>multiple problems simultaneously</strong>, recording ideas across different subjects on single pages. They served as visual thinking rather than finished products.`
      },
      {
        question: "What subjects appear on this sheet?",
        answer: `The sheet includes <strong>figure studies and drapery drawings</strong> along with other exploratory sketches. Leonardo typically mixed subjects on single pages, reflecting his interconnected approach to observation and invention.`
      },
      {
        question: "What medium did Leonardo use?",
        answer: `Leonardo created this study in <strong>pen and ink</strong>, a medium that allowed rapid notation of ideas. The speed of ink suited his restless mind, capturing thoughts before they could be forgotten.`
      }
    ]
  }
];

async function main() {
  console.log('Starting enrichment of 5 artworks...\n');

  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
