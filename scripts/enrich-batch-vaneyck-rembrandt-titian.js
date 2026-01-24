const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'jan-van-eyck-st-jerome-in-his-study',
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> or his workshop painted this tiny masterpiece around 1435-1442, showing Saint Jerome at work in his study surrounded by books, manuscripts, and scholarly instruments. Despite measuring less than twenty centimeters tall, the panel contains astonishing detail: an astrolabe and hourglass hang on the wall, a tame lion rests at Jerome's feet, and individual pages of open books remain legible under magnification.</p>

<p>The lion references a popular legend in which Jerome removed a thorn from a lion's paw, earning the beast's eternal loyalty. Jerome, who translated the Bible into Latin (the Vulgate), appears as a <strong>humanist scholar</strong> in cardinal's robes rather than as an ascetic in the wilderness, reflecting fifteenth-century interest in him as a model of learned piety. The painting was likely made for Cardinal Niccolò Albergati, a papal diplomat Van Eyck painted around the same time.</p>

<p>The panel passed through illustrious collections, including that of Lorenzo de' Medici in Florence. Today it hangs at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts"><strong>Detroit Institute of Arts</strong></a>, where its <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>miniaturist precision</strong></a> continues to astonish visitors who examine it closely. Scholars still debate whether Van Eyck himself executed the work or whether a skilled workshop assistant completed it from the master's design.</p>`,
    faqs: [
      {
        question: "Where can I see St. Jerome in his Study?",
        answer: `This tiny panel painting is displayed at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts"><strong>Detroit Institute of Arts</strong></a> in Michigan. Despite measuring less than twenty centimeters tall, it rewards close examination with astonishing detail.`
      },
      {
        question: "Why is there a lion with Saint Jerome?",
        answer: `The lion references a popular medieval legend in which <strong>Jerome removed a thorn</strong> from a lion's paw. The grateful beast became Jerome's faithful companion, appearing in countless depictions of the saint throughout art history.`
      },
      {
        question: "Who commissioned this painting?",
        answer: `The work was likely made for <strong>Cardinal Niccolò Albergati</strong>, a papal diplomat whom <a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted around the same period. It later belonged to Lorenzo de' Medici's famous collection in Florence.`
      },
      {
        question: "Did Jan van Eyck paint this himself?",
        answer: `Scholars debate whether Van Eyck personally executed this panel or whether a <strong>skilled workshop assistant</strong> completed it from his design. Either way, it demonstrates the extraordinary miniaturist technique associated with his name.`
      }
    ]
  },
  {
    slug: 'jan-van-eyck-st-francis-receiving-the-stigmata',
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted this tiny devotional panel around 1430-1432, showing Saint Francis of Assisi receiving the stigmata on Mount Alverna. The moment captures Francis kneeling before a vision of Christ appearing as a seraph (six-winged angel), rays of light connecting Christ's wounds to corresponding points on Francis's hands, feet, and side. Brother Leo sits reading nearby, unaware of the miracle occurring beside him.</p>

<p>Two versions of this composition exist, one in Turin's Sabauda Gallery and another in Philadelphia. The <strong>miniaturist precision</strong> is breathtaking. Despite the panel's tiny scale, Van Eyck renders a vast landscape stretching to distant mountains, with individual rocks, plants, and architectural details clearly visible. A town with identifiable buildings appears in the valley below, demonstrating his ability to compress entire worlds into small spaces.</p>

<p>The work exemplifies the Northern Renaissance interest in combining intense religious feeling with careful observation of the natural world. Every element, from Francis's worn habit to the rocky outcropping where he kneels, receives equal attention. The panel now belongs to the <strong>Sabauda Gallery</strong> in Turin, Italy, where it stands among the finest examples of early Netherlandish <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Van Eyck's St. Francis Receiving the Stigmata?",
        answer: `This version is displayed at the <strong>Sabauda Gallery</strong> in Turin, Italy. A second version of the same composition exists at the Philadelphia Museum of Art, and scholars debate which was painted first.`
      },
      {
        question: "What is the stigmata?",
        answer: `The <strong>stigmata</strong> are wounds corresponding to those Christ received during the Crucifixion. According to tradition, Saint Francis received these marks on Mount Alverna in 1224, becoming the first person to bear them, a sign of his deep identification with Christ's suffering.`
      },
      {
        question: "Who is the other figure in the painting?",
        answer: `The seated figure is <strong>Brother Leo</strong>, Francis's companion and confessor. <a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> shows him reading, apparently unaware of the miraculous vision occurring beside him on the rocky mountaintop.`
      },
      {
        question: "How large is this painting?",
        answer: `The panel is remarkably small, demonstrating Van Eyck's extraordinary <strong>miniaturist technique</strong>. Despite its tiny scale, the landscape stretches to distant mountains with individual rocks, plants, and buildings rendered in precise detail.`
      }
    ]
  },
  {
    slug: 'rembrandt-the-apostle-paul',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted The Apostle Paul around 1657, showing the saint in prison pondering the epistles he wrote to early Christian communities. Paul sits in shadow, his face emerging from darkness, a manuscript before him and a sword visible at his side. The sword symbolizes both his martyrdom (he was beheaded in Rome) and his description of Scripture as the "sword of the Spirit."</p>

<p>This painting belongs to Rembrandt's <strong>late period</strong>, when he increasingly simplified his compositions and suppressed surface detail in favor of psychological depth. The rough, almost unfinished appearance of the paint handling intensifies rather than diminishes the emotional impact. Paul appears lost in thought, wrestling with ideas that would shape Christianity for millennia.</p>

<p>X-ray analysis reveals that Rembrandt transformed this work from a scholar portrait into a religious painting, adding the sword and adjusting the figure's identity during the painting process. Such changes were common in his practice. The work now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., representing Rembrandt's ability to convey <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual contemplation</strong></a> through paint.</p>`,
    faqs: [
      {
        question: "Where can I see Rembrandt's Apostle Paul?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C. The museum holds several important works by Rembrandt spanning his career.`
      },
      {
        question: "What does the sword symbolize?",
        answer: `The sword carries dual meaning. It symbolizes <strong>Paul's martyrdom</strong> (he was beheaded in Rome) and references his description of Scripture as the "sword of the Spirit" in his letter to the Ephesians.`
      },
      {
        question: "What is distinctive about Rembrandt's late style?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> late works feature <strong>simplified compositions</strong>, suppressed surface detail, and rough paint handling that appears almost unfinished. This approach intensifies psychological and emotional depth rather than diminishing it.`
      },
      {
        question: "Was this always a painting of Saint Paul?",
        answer: `X-ray analysis reveals Rembrandt <strong>transformed this work</strong> from a scholar portrait into a religious painting, adding the sword and adjusting the figure's identity during the painting process. Such revisions were common in his practice.`
      }
    ]
  },
  {
    slug: 'rembrandt-selfportrait-drawing-at-a-window',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching in 1648, depicting himself at work beside a window. He sits with drawing materials in hand, his face illuminated by light streaming through the casement, his expression focused and alert. The composition captures the artist in his natural element, observing and recording the world around him with the same intensity he brings to this self-portrait.</p>

<p>This print became one of Rembrandt's <strong>most reproduced images</strong>, widely copied and admired across Europe. He created multiple states (versions) of the plate, making adjustments and refinements that collectors prized. The technical brilliance is evident in how he renders light falling across different textures: the soft fabric of his coat, the harder surface of the windowsill, the atmospheric depth of the room behind him.</p>

<p>Unlike his painted self-portraits in elaborate costume, this etching shows Rembrandt in <strong>working dress</strong>, presenting himself as a craftsman rather than a gentleman. The honesty of the image, combined with its technical virtuosity, has made it a touchstone for understanding both the artist's character and his mastery of the etching medium. The work belongs to the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>, among <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>many institutions</strong></a> holding impressions of this celebrated print.</p>`,
    faqs: [
      {
        question: "Where can I see the Self-Portrait Drawing at a Window?",
        answer: `This etching exists in multiple impressions across many museums. The <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> holds one fine example. As a print, the image was reproduced in Rembrandt's lifetime and remains widely distributed.`
      },
      {
        question: "What are 'states' of an etching?",
        answer: `<strong>States</strong> are different versions of a print made from the same plate after modifications. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> often reworked his plates, adding details or making adjustments. Collectors prize earlier states and rare variations.`
      },
      {
        question: "Why is this self-portrait significant?",
        answer: `Unlike painted self-portraits where Rembrandt dressed elaborately, this etching shows him in <strong>working clothes</strong> as a practicing artist. The honest, informal image reveals how he saw himself in his creative environment.`
      },
      {
        question: "When did Rembrandt create this etching?",
        answer: `Rembrandt made this print in <strong>1648</strong>, during his productive middle period. The work became one of his most copied and admired images, influencing how later generations understood both the artist and the etching medium.`
      }
    ]
  },
  {
    slug: 'titian-the-gipsy-madonna',
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted the Gypsy Madonna around 1510-1511 during his early career, when he was still strongly influenced by his teacher Giorgione. The painting shows Mary holding the infant Christ against a landscape background, her face turned toward the viewer with an expression of gentle melancholy. The unusual title comes from Mary's warm, dusky complexion, which sixteenth-century viewers associated with Romani people.</p>

<p>The work marks Titian's move away from the rigid symmetry of earlier Venetian painters like Giovanni Bellini. Mary sits <strong>off-center</strong>, with the landscape opening asymmetrically behind her. This compositional freedom would become characteristic of Titian's mature style. The background landscape appears virtually identical to that in the Dresden Venus, another early work associated with Giorgione's circle.</p>

<p>Scholars have long debated the painting's authorship. While now firmly attributed to Titian, the strong Giorgione influence means the work captures a moment when master and student were painting in nearly indistinguishable styles. The panel now hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, where it represents the origins of a career that would make Titian the greatest <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Venetian painter</strong></a> of the sixteenth century.</p>`,
    faqs: [
      {
        question: "Where can I see The Gypsy Madonna?",
        answer: `This early Titian painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum holds one of the world's finest collections of Venetian Renaissance painting.`
      },
      {
        question: "Why is it called The Gypsy Madonna?",
        answer: `The unusual title refers to Mary's <strong>warm, dusky complexion</strong>, which sixteenth-century viewers associated with Romani people. <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> gave her a darker skin tone than was typical in Italian Madonna paintings.`
      },
      {
        question: "How does this show Giorgione's influence?",
        answer: `Titian painted this around 1510-1511 while still strongly influenced by his teacher <strong>Giorgione</strong>. The soft atmospheric landscape, the dreamy mood, and certain technical aspects closely resemble Giorgione's known works from this period.`
      },
      {
        question: "What makes the composition innovative?",
        answer: `Unlike earlier Venetian painters who centered their Madonnas symmetrically, Titian places Mary <strong>off-center</strong> with the landscape opening asymmetrically behind her. This compositional freedom anticipated his mature style.`
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
