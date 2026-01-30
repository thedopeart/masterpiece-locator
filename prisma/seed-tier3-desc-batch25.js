const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'gerrit-dou-self-portrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/the-wilson-cheltenham-art-gallery-and-museum-chelt\"><strong>The Wilson</strong></a> in Cheltenham, England." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/gerrit-dou\"><strong>Gerrit Dou</strong></a> created this work. He was Rembrandt's first pupil and became the <strong>founder of the Leiden fijnschilders</strong> (fine painters), known for tiny, polished canvases." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> fine painting. Dou worked with <strong>magnifying glasses and tiny brushes</strong>, creating miniature-scale works so smooth the brushstrokes are invisible." }
  ],
  'gerrit-dou-portrait-of-a-man': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this painting depict?", answer: "It shows a <strong>man in a window niche</strong>, Dou's favorite compositional device. The stone arch frames the sitter like a stage, creating <strong>illusionistic depth</strong> on a tiny panel." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/gerrit-dou\"><strong>Gerrit Dou</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait. In the 17th century, his paintings were <strong>more expensive than Rembrandt's</strong>, prized for their extraordinary technical refinement." }
  ],
  'gilbert-stuart-the-skater-portrait-of-william-grant': [
    { question: "Where is The Skater?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "It shows <strong>William Grant skating on the Serpentine</strong> in London's Hyde Park. Stuart painted this unconventional full-length portrait after Grant suggested skating instead of a <strong>formal sitting</strong>." },
    { question: "Who painted The Skater?", answer: "<a href=\"/apps/masterpieces/artist/gilbert-stuart\"><strong>Gilbert Stuart</strong></a> created this in 1782. He's best known for his <strong>unfinished portrait of George Washington</strong> that appears on the US one-dollar bill." }
  ],
  'giorgione-madonna-and-child-with-saints-liberale-and-francis': [
    { question: "Where is the Castelfranco Madonna?", answer: "This altarpiece remains in the <a href=\"/apps/masterpieces/museum/duomo-di-castelfranco-veneto-castelfranco-veneto-i\"><strong>Duomo di Castelfranco Veneto</strong></a>, the church for which Giorgione painted it." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna enthroned with Saints Liberale and Francis</strong>. It's one of Giorgione's few undisputed works, painted with the <strong>soft, atmospheric light</strong> that transformed Venetian painting." },
    { question: "Who painted this altarpiece?", answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masterwork. He died at about 32, leaving fewer than a dozen confirmed paintings, yet his influence on <strong>Titian and Venetian art</strong> was immense." }
  ],
  'giorgione-madonna-and-child-in-a-landscape': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna and Child set in a <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscape</a></strong>. Giorgione pioneered placing sacred figures in natural settings, blending <strong>devotion with pastoral poetry</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> (c. 1477-1510) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. His poetic approach to landscape and mood <strong>revolutionized Venetian painting</strong>, influencing Titian, who may have finished some of his works." }
  ],
  'giorgione-youth-holding-an-arrow': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "What does this painting depict?", answer: "It shows a <strong>young man holding an arrow</strong>, possibly representing St. Sebastian or a classical figure. Giorgione's portraits have an <strong>enigmatic quality</strong> that resists definitive interpretation." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. His mysterious, poetic images helped establish the Venetian tradition of <strong>mood and color over Florentine drawing and line</strong>." }
  ],
  'giotto-the-vision-of-the-thrones': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>thrones in a heavenly vision</strong>, part of Giotto's cycle of St. Francis's life. He gave biblical scenes a <strong>physical reality</strong> that broke from flat Byzantine convention." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto di Bondone</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>proto-Renaissance</strong></a> fresco. He's considered the <strong>father of Western painting</strong>, the artist who introduced three-dimensional space and human emotion to art." }
  ],
  'giotto-the-miracle-of-the-spring': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>St. Francis miraculously causing water to spring from a rock</strong> to quench a thirsty man's thirst. Giotto grounds the miracle in a <strong>believable rocky landscape</strong>." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> created this around 1300. His Assisi frescoes tell St. Francis's story with <strong>unprecedented naturalism</strong>, making the saint's life feel immediate and real." }
  ],
  'giotto-vision-of-the-flaming-chariot': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>St. Francis's companions seeing a flaming chariot</strong> in a vision. Giotto painted supernatural events with the same <strong>physical solidity</strong> he gave everyday scenes." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>proto-Renaissance</strong></a> fresco. Dante praised him in the Divine Comedy, writing that Giotto's fame had <strong>eclipsed his teacher Cimabue's</strong>." }
  ],
  'giotto-the-trial-by-fire-st-francis-offers-to-walk-throug': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>St. Francis offering to walk through fire</strong> to prove his faith to the Sultan of Egypt during the Crusades. Giotto captures the <strong>dramatic confrontation</strong> with characteristic directness." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> created this around 1300. His 28-scene cycle of <strong>St. Francis's life</strong> at Assisi is one of the most important fresco cycles in Western art history." }
  ],
  'giotto-madonna-and-child': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/san-giorogio-alla-costa-florence-italy\"><strong>San Giorgio alla Costa</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna and Child</strong>. Giotto's Madonnas have a <strong>weight and humanity</strong> that broke decisively from the flat, hieratic Byzantine tradition." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto di Bondone</strong></a> (c. 1267-1337) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>proto-Renaissance</strong></a> panel. He transformed painting by giving figures <strong>three-dimensional volume and genuine emotion</strong>." }
  ],
  'giotto-st-francis-honoured-by-a-simple-man': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi." },
    { question: "What does this fresco depict?", answer: "The scene shows a <strong>simple man laying his cloak before young Francis</strong> in the streets of Assisi. It's the first scene in Giotto's cycle, showing <strong>Francis before his conversion</strong>." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>proto-Renaissance</strong></a> fresco. His Assisi cycle set the standard for <strong>narrative fresco painting</strong> that would dominate Italian art for two centuries." }
  ],
  'giotto-st-francis-preaching-a-sermon-to-pope-honorius-iii': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>St. Francis preaching before Pope Honorius III</strong>. Giotto renders the papal court with <strong>architectural clarity and individualized faces</strong>, grounding the event in believable space." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> created this around 1300. His ability to place figures in <strong>convincing architectural space</strong> was revolutionary, paving the way for Renaissance perspective." }
  ],
  'giovanni-battista-moroni-portrait-of-a-lady-perhaps-contessa-lucia-albani-a': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this painting depict?", answer: "It shows a <strong>lady in a <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\">red</a> dress</strong>, possibly Contessa Lucia Albani Avogadro. Known as \"La Dama in Rosso,\" it's one of Moroni's most admired portraits for its <strong>vivid color and psychological presence</strong>." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait. He's considered the finest Italian <strong>portrait painter of the 16th century</strong> after Titian." }
  ],
  'giovanni-battista-moroni-portrait-of-a-gentleman': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this painting depict?", answer: "It shows a <strong>gentleman in dark clothing</strong>, painted with Moroni's trademark <strong>directness and psychological honesty</strong>. His sitters look like real people, not idealized types." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait. Working in Bergamo, he painted the local nobility with a <strong>naturalism that anticipates Velázquez</strong>." }
  ],
  'giovanni-battista-moroni-portrait-of-a-man': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/accademia-carrara-bergamo-italy\"><strong>Accademia Carrara</strong></a> in Bergamo, Moroni's home region." },
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of an unidentified man</strong>. Moroni's subjects engage the viewer directly with <strong>calm, intelligent gazes</strong> that feel startlingly modern." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait. His work was admired by later portrait painters including <strong>Van Dyck and Joshua Reynolds</strong>." }
  ],
  'giovanni-battista-moroni-titian39s-schoolmaster': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "It shows a <strong>man traditionally identified as Titian's schoolmaster</strong>. Moroni painted him with the <strong>sharp characterization</strong> that makes his portraits feel like encounters with living people." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work. Titian himself reportedly told a sitter to <strong>go to Moroni instead</strong>, acknowledging the younger artist's superior portrait skills." }
  ],
  'giovanni-battista-tiepolo-the-martyrdom-of-st-bartholomew': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/san-stae-venice-italy\"><strong>San Stae</strong></a> in Venice." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>martyrdom of St. Bartholomew</strong>, who was flayed alive. Tiepolo paints the gruesome subject with <strong>dramatic light and sweeping composition</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-tiepolo\"><strong>Giovanni Battista Tiepolo</strong></a> created this <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> painting. He was the last great Venetian painter, known for <strong>luminous ceiling frescoes</strong> across Europe." }
  ],
  'giovanni-battista-tiepolo-queen-zenobia-before-emperor-aurelianus': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Queen Zenobia of Palmyra brought before Emperor Aurelian</strong> after her defeat. Tiepolo painted grand historical scenes with <strong>theatrical light and airy color</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-tiepolo\"><strong>Giovanni Battista Tiepolo</strong></a> created this <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> history painting. His <strong>radiant palette and soaring compositions</strong> decorated palaces from Venice to Würzburg to Madrid." }
  ],
  'giovanni-battista-tiepolo-susanna-and-the-elders': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Susanna spied upon by two elders</strong> while bathing, a biblical subject frequently painted. Tiepolo renders it with <strong>luminous flesh tones and dramatic staging</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-tiepolo\"><strong>Giovanni Battista Tiepolo</strong></a> created this <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> biblical scene. He was the most internationally demanded painter of the 18th century, working for <strong>kings, bishops, and princes</strong> across Europe." }
  ],
  'giovanni-bellini-st-jerome-in-the-wilderness': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/barber-institute-of-fine-arts-birmingham-uk\"><strong>Barber Institute of Fine Arts</strong></a> in Birmingham, England." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Jerome in a rocky wilderness</strong>, the scholar-saint who translated the Bible. Bellini sets him in a <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> of extraordinary <strong>luminous depth</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. He transformed Venetian art by developing <strong>oil painting techniques</strong> that gave his landscapes an unprecedented glow." }
  ],
  'madonna-of-the-meadow-bellini': [
    { question: "Where is Madonna of the Meadow?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna praying over the sleeping Christ Child</strong> in a meadow. Bellini merges the sacred scene with a vast, luminous <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> that feels both real and devotional." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> (c. 1430-1516) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masterwork. He was the teacher of both <strong>Giorgione and Titian</strong>, making him the founding figure of the great Venetian painting tradition." }
  ],
  'giovanni-bellini-presentation-at-the-temple': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/querini-stampalia-foundation-venice-italy\"><strong>Querini Stampalia Foundation</strong></a> in Venice." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>infant Christ presented at the Temple</strong>. Bellini paints the figures with a <strong>quiet emotional truth</strong> and warm, glowing color that define his mature style." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. His innovations in <strong>oil technique and atmospheric light</strong> established Venice as a rival to Florence in the history of painting." }
  ],
  'creation-expulsion-giovanni': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Creation of the World alongside the Expulsion from Paradise</strong>. Giovanni di Paolo paints the cosmos as a <strong>colorful disc</strong> with a startlingly modern, almost abstract sensibility." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-di-paolo\"><strong>Giovanni di Paolo</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>early Renaissance</strong></a> panel. His visionary, eccentric style was rediscovered in the 20th century, admired by <strong>Surrealists</strong> for its dreamlike imagination." }
  ],
  'giovanni-segantini-unfinished-selfportrait': [
    { question: "What does this self-portrait show?", answer: "It shows <strong>Segantini in an unfinished state</strong>, the raw canvas visible around his features. The incomplete painting has an accidental power, capturing the artist <strong>mid-process</strong>." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-segantini\"><strong>Giovanni Segantini</strong></a> (1858-1899) created this work. He painted <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>Alpine landscapes</strong></a> with a <strong>Divisionist technique</strong>, applying strokes of pure color to capture mountain light." },
    { question: "What style did Segantini work in?", answer: "He practiced <strong>Divisionism</strong>, the Italian version of Pointillism. Segantini applied this technique to <strong>Swiss Alpine scenery</strong>, creating luminous mountain paintings that influenced Futurism and Italian modernism." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
