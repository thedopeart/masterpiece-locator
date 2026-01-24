const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: "leonardo-da-vinci-study-of-the-madonna-and-child-with-a-cat",
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> made this pen and ink drawing around 1478-1480, exploring an idea he never turned into a finished painting. The sketch shows the Virgin Mary seated with the infant Jesus on her lap, the child twisting energetically to grasp at a cat. It's a domestic scene full of movement and life, the kind of candid moment most Renaissance artists avoided in favor of stiff, formal compositions.</p>

<p>Leonardo returned to this subject repeatedly, producing multiple preparatory sketches that survive today. In each version, the <strong>cat</strong> serves as more than a household pet. It creates action, forcing the figures into natural poses as the baby reaches and the animal squirms. The result feels observed from life rather than posed in a studio. Leonardo's interest in capturing genuine movement, what he called "moti mentali" (mental motions), shows clearly here even in rough sketch form.</p>

<p>No painted version of this composition exists, which has led scholars to debate whether Leonardo abandoned the project or simply moved on to other ideas. The drawing now belongs to the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London, where it underwent conservation work in the 1980s. It remains one of the most charming examples of Leonardo's early drawing practice, showing his willingness to experiment with unconventional subjects.</p>`,
    faqs: [
      {
        question: "Where can I see Study of the Madonna and Child with a Cat?",
        answer: "This drawing is held in the collection of the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. The museum houses an extensive collection of <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo's</strong></a> drawings and sketches from throughout his career."
      },
      {
        question: "Did Leonardo ever finish a painting of this subject?",
        answer: "No finished painting of the Madonna and Child with a cat exists. <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> made multiple preparatory sketches exploring this composition but apparently abandoned the project before completing it in paint."
      },
      {
        question: "Why did Leonardo include a cat in this religious scene?",
        answer: "The <strong>cat</strong> creates natural movement and spontaneity. Rather than posing figures stiffly, Leonardo used the animal to show the infant Jesus twisting and reaching in a lifelike way, capturing the kind of genuine domestic moment rarely seen in Renaissance religious art."
      },
      {
        question: "When was this drawing made?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> created this pen and ink sketch around 1478-1480, during his early career in Florence. It belongs to a series of experimental drawings where he explored unconventional approaches to traditional religious subjects."
      }
    ]
  },
  {
    slug: "leonardo-da-vinci-landscape-drawing-for-santa-maria-della-neve",
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> drew this landscape on August 5, 1473, inscribing the date in his characteristic mirror writing: "On the day of St. Mary of the Snow." He was twenty-one years old, still an apprentice in Verrocchio's workshop, and he'd just created something unprecedented. This is the first known <strong>pure landscape</strong> in Western art, a drawing made simply to record a view rather than serve as background for religious figures or historical scenes.</p>

<p>The scene shows the Arno valley near Vinci, Leonardo's hometown, with Montelupo Castle visible in the distance. Pen and ink capture the rolling Tuscan hills, a waterfall or rapids in the river below, and careful attention to how trees and rock formations occupy space. Before this drawing, landscapes existed only as settings for human stories. No artist had thought to make the land itself the subject. Peter Paul Rubens wouldn't paint a complete landscape for another two hundred years.</p>

<p>The small drawing measures just 19 by 28.5 centimeters. In 2019 it returned to Vinci for the 500th anniversary of Leonardo's death, the first time it had been in his birthplace since he created it. The sketch normally hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, where it's recognized as both Leonardo's earliest dated work and a turning point in the history of Western art.</p>`,
    faqs: [
      {
        question: "Where can I see Leonardo's Arno Valley landscape?",
        answer: "This drawing is displayed at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. In 2019 it briefly returned to Vinci, Leonardo's birthplace, for the 500th anniversary of his death before returning to the Uffizi collection."
      },
      {
        question: "Why is this drawing historically important?",
        answer: "This is the <strong>first pure landscape</strong> in Western art history. Before <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> made this drawing in 1473, landscapes only existed as backgrounds for figures. No artist had thought to make land and nature the sole subject of a finished work."
      },
      {
        question: "What location does the drawing show?",
        answer: "The drawing depicts the <strong>Arno valley</strong> near Vinci in Tuscany, with Montelupo Castle visible in the distance. Leonardo would have known this landscape well, having grown up in the small town of Vinci just outside Florence."
      },
      {
        question: "How old was Leonardo when he made this?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> was twenty-one years old and still an apprentice in Andrea del Verrocchio's workshop when he created this drawing on August 5, 1473. It's his earliest dated work and shows remarkable confidence for such a young artist."
      }
    ]
  },
  {
    slug: "caravaggio-martha-and-mary-magdalene",
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this scene around 1598, capturing the moment Martha convinces her sister Mary Magdalene to abandon her life of vanity. Martha leans in, counting off arguments on her fingers, while Mary sits in luxurious clothing, one hand resting on a convex mirror. The mirror doesn't reflect Mary's face but catches the light source illuminating the scene, a subtle detail that transforms a domestic argument into something spiritual.</p>

<p>The objects scattered around Mary tell her story: a broken comb, a cosmetic dish with sponge, an orange blossom she holds in her right hand. That flower symbolizes purity, hinting at the <strong>conversion</strong> about to occur. The ring on her left hand suggests her future as the "bride of Christ." Caravaggio hired two well-known Roman courtesans as models, Fillide Melandroni for Mary and Anna Bianchini for the plainer Martha, adding an edge of real-world recognition for contemporary viewers.</p>

<p>The painting demonstrates Caravaggio's approach to depicting spiritual transformation through physical light. Rather than showing halos or divine rays, he uses natural illumination to suggest inner change, the same technique he'd employ in his Conversion of Saint Paul. The <a href="/apps/masterpieces/museum/detroit-institute-of-arts"><strong>Detroit Institute of Arts</strong></a> acquired this work, making it one of the most significant Caravaggios in an American collection.</p>`,
    faqs: [
      {
        question: "Where can I see Martha and Mary Magdalene?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/detroit-institute-of-arts\"><strong>Detroit Institute of Arts</strong></a> in Michigan. It's one of the most important <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> paintings in any American museum collection."
      },
      {
        question: "What does the mirror symbolize in this painting?",
        answer: "The <strong>convex mirror</strong> traditionally symbolizes vanity, but Caravaggio uses it more subtly here. Mary doesn't look at her reflection. Instead, the mirror catches the light source, suggesting the divine illumination of her conversion at this exact moment."
      },
      {
        question: "Who modeled for the two sisters?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> hired two Roman courtesans as models. Fillide Melandroni, known for her beauty, posed as Mary Magdalene, while Anna Bianchini played the plainer, more insistent Martha. Both women were recognized figures in Roman social circles."
      },
      {
        question: "What moment does this painting show?",
        answer: "The painting captures Mary Magdalene's <strong>conversion</strong>, the moment she decides to abandon her worldly vanity. Martha counts arguments on her fingers while Mary holds an orange blossom symbolizing purity, the flower suggesting her spiritual transformation is beginning."
      }
    ]
  },
  {
    slug: "caravaggio-saint-francis-of-assisi-in-ecstasy",
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this scene around 1594-1595, making it his first religious canvas. The subject honored his patron Cardinal Francesco Maria Del Monte, whose name-saint was Francis of Assisi. The painting shows Francis just after receiving the stigmata, the wounds of Christ's crucifixion appearing on his hands and side. An angel supports the swooning saint as he sinks backward in spiritual transport.</p>

<p>What makes Caravaggio's version unusual is its restraint. Earlier artists showed Francis confronted by a terrifying seraph, blood streaming from fresh wounds. Here there's almost nothing to indicate the subject beyond the Franciscan robe. The <strong>stigmata</strong> are barely visible. One wound on Francis's right hand may have been painted over, possibly by Caravaggio himself, shifting the drama from outward signs to inner feeling. The angel looks less like a divine messenger than a teenage boy in a sheet with stage-prop wings.</p>

<p>The <a href="/apps/masterpieces/museum/wadsworth-atheneum"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut acquired the painting in 1943 for $17,000, making it the first authenticated Caravaggio to enter an American public museum. Francis's face reportedly bears the features of Cardinal Del Monte himself, a common practice when patrons commissioned religious works featuring their patron saints.</p>`,
    faqs: [
      {
        question: "Where can I see Saint Francis of Assisi in Ecstasy?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut. Acquired in 1943, it was the first authenticated <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painting to enter an American public museum collection."
      },
      {
        question: "Why are the stigmata barely visible in this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> deliberately downplayed the physical wounds, possibly even painting over one on Francis's hand. This shifts focus from external signs to <strong>internal spiritual experience</strong>, making the ecstasy feel more psychological than theatrical."
      },
      {
        question: "Who commissioned this painting?",
        answer: "Cardinal Francesco Maria Del Monte commissioned the work around 1594-1595. Francis of Assisi was the cardinal's <strong>patron saint</strong>, and the saint's face in the painting reportedly resembles Del Monte himself, a common practice in Renaissance religious commissions."
      },
      {
        question: "What makes this painting significant in Caravaggio's career?",
        answer: "This is <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> first religious canvas, painted shortly after he entered Cardinal Del Monte's household. It established the intimate, psychologically intense approach to sacred subjects that would define his later masterpieces."
      }
    ]
  },
  {
    slug: "caravaggio-sacrifice-of-isaac",
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this dramatic scene between 1601 and 1603 for Cardinal Maffeo Barberini, who would later become Pope Urban VIII. The composition captures the climactic moment from Genesis when Abraham, commanded by God to sacrifice his only son Isaac, raises his knife only to be stopped by an angel. The divine messenger grips Abraham's wrist firmly and points toward a ram that will serve as substitute offering.</p>

<p>Isaac's face is unforgettable. His mouth opens in a scream of pure terror, his eyes wide, his shoulder straining against his father's grip. Caravaggio's studio assistant Cecco Boneri modeled for both Isaac and the angel, giving the figures an unsettling similarity. The <strong>chiaroscuro</strong> lighting falls like a spotlight on key elements: the angel's back and shoulders, Abraham's bald head and wrinkled brow, Isaac's anguished expression. Even the ram receives a soft glow, its placid look contrasting sharply with the human panic beside it.</p>

<p>This is the only Caravaggio painting with a true <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> in the background, showing what may be the Alban hills surrounding Rome. The work was donated to the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in 1917 by John Fairfax Murray, where it remains one of the museum's most visited Baroque paintings.</p>`,
    faqs: [
      {
        question: "Where can I see Caravaggio's Sacrifice of Isaac?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It was donated to the museum in 1917 by collector John Fairfax Murray and remains one of the gallery's most celebrated Baroque works."
      },
      {
        question: "Who modeled for Isaac and the angel?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> studio assistant <strong>Cecco Boneri</strong> posed for both figures, giving Isaac and the angel an unsettling resemblance. This double casting adds psychological complexity to a scene already charged with dramatic tension."
      },
      {
        question: "What makes the composition unusual for Caravaggio?",
        answer: "This is the only <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painting with a genuine <strong>landscape</strong> in the background, showing what appears to be the Alban hills near Rome. Most of his works feature dark, undefined backgrounds that focus attention entirely on the figures."
      },
      {
        question: "Who commissioned this painting?",
        answer: "Cardinal Maffeo Barberini commissioned the work between 1601 and 1603. Barberini later became <strong>Pope Urban VIII</strong> in 1623, making this an early example of his significant art patronage before his elevation to the papacy."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

  let updated = 0;
  let errors = 0;

  for (const artwork of artworksToUpdate) {
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
      updated++;
    } catch (error) {
      console.error(`✗ Error updating ${artwork.slug}:`, error.message);
      errors++;
    }
  }

  console.log(`\nComplete! Updated: ${updated}, Errors: ${errors}`);
  await prisma.$disconnect();
}

main();
