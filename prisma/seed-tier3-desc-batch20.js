const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'the-caresses-khnopff': [
    { question: "Where is The Caresses displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels." },
    { question: "What does The Caresses depict?", answer: "The scene shows a <strong>human figure being caressed by a sphinx-like creature</strong> with a woman's head and leopard's body. It's one of the most iconic images of <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, blending desire and danger." },
    { question: "Who painted The Caresses?", answer: "<a href=\"/apps/masterpieces/artist/fernand-khnopff\"><strong>Fernand Khnopff</strong></a> created this in 1896. The sphinx figure resembles <strong>his sister Marguerite</strong>, who appeared repeatedly in his work as an idealized, androgynous presence." }
  ],
  'fernand-leger-the-woman-in-blue': [
    { question: "Where is The Woman in Blue?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-national-fernand-leger-biot-france\"><strong>Musée National Fernand Léger</strong></a> in Biot, France, dedicated entirely to his work." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman rendered in bold <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\">blue</a> geometric forms</strong>. Léger reduced the human figure to cylinders and tubes, earning his style the nickname \"Tubism.\"" },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a> created this painting. He developed a <strong>machine-age Cubism</strong> that celebrated modern industry, bold color, and the geometry of everyday life." }
  ],
  'fernand-leger-the-wedding': [
    { question: "Where is The Wedding?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/georges-pompidou-center-paris-france\"><strong>Centre Pompidou</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>wedding procession</strong> broken into geometric, machine-like forms. Léger turned human celebrations into <strong>colorful mechanical compositions</strong>, blurring the line between people and objects." },
    { question: "Who painted The Wedding?", answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a> created this work. His experience in World War I, surrounded by <strong>artillery and machinery</strong>, permanently shaped his vision of the modern world." }
  ],
  'filippo-lippi-madonna-and-child-with-saints-angels-and-a-donor': [
    { question: "Where is this painting?", answer: "This work is in the <a href=\"/apps/masterpieces/museum/vittorio-cini-collection-venice-italy\"><strong>Vittorio Cini Collection</strong></a> in Venice." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child with saints, angels, and a kneeling donor</strong>. Including the patron's portrait was common in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> altarpieces, linking devotion to patronage." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this altarpiece. A Carmelite friar who famously eloped with a nun, he painted <strong>tender, humanized Madonnas</strong> that influenced Botticelli, his pupil." }
  ],
  'filippo-lippi-madonna-of-humility': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/sforza-castle-milan-italy\"><strong>Sforza Castle</strong></a> in Milan, Italy." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna seated on the ground</strong>, the \"humility\" pose signifying Mary's modesty. Lippi's Madonnas have a <strong>gentle, human warmth</strong> that broke from earlier Byzantine stiffness." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional work. His soft modeling and tender expressions directly shaped <strong>Botticelli's style</strong>, as Botticelli trained in Lippi's workshop." }
  ],
  'filippo-lippi-piet224': [
    { question: "Where is this Pietà?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/castelvecchio-museum-verona-italy\"><strong>Castelvecchio Museum</strong></a> in Verona, Italy." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Pietà</strong>, the Virgin Mary mourning over Christ's body. Lippi renders the grief with <strong>quiet emotion</strong> rather than dramatic anguish, typical of his gentle approach." },
    { question: "Who painted this Pietà?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work. His religious paintings combine <strong>devotional sincerity with a naturalism</strong> that made sacred figures feel approachable and real." }
  ],
  'filippo-lippi-madonna-and-child-with-st-fredianus-and-st-augusti': [
    { question: "Where is this altarpiece?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child flanked by St. Fredianus and St. Augustine</strong>. This type of composition, called a <strong>sacra conversazione</strong>, places saints in quiet dialogue around the Virgin." },
    { question: "Who painted this altarpiece?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work. His <strong>sacra conversazione</strong> format influenced generations of Florentine painters." }
  ],
  'filippo-lippi-madonna-of-humility-with-angels-and-donor': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge, England." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna of Humility surrounded by angels, with a kneeling donor</strong>. The humble seated pose and <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> background blend medieval tradition with Renaissance naturalism." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting. His <strong>warm, human approach to sacred subjects</strong> made him one of the most important Florentine painters of the early 15th century." }
  ],
  'filippo-lippi-the-doctors-of-the-church': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Doctors of the Church</strong>, the great theologians recognized by Catholicism. Lippi renders them as <strong>distinct individuals</strong> rather than generic types, reflecting Renaissance interest in personality." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel. His naturalistic approach to religious figures influenced his student <strong>Botticelli</strong> and, through him, the entire course of Florentine painting." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. Lippi's figures have <strong>weight, volume, and individual character</strong>, showing the move from flat medieval painting toward the three-dimensional naturalism that defined the Renaissance." }
  ],
  'ford-madox-brown-the-spirit-of-justice-study-for-the-head-of-a-coun': [
    { question: "Where is this study?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>, home to the world's finest Pre-Raphaelite collection." },
    { question: "What does this work depict?", answer: "It's a <strong>study for a counsellor's head</strong> in Brown's mural cycle at Manchester Town Hall. He spent 12 years painting those murals, depicting <strong>Manchester's history</strong> in Pre-Raphaelite detail." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> made this preparatory work. Though never an official Pre-Raphaelite Brotherhood member, he was their <strong>closest associate and mentor</strong>." }
  ],
  'ford-madox-brown-study-of-a-monk-representing-catholic-faith': [
    { question: "What does this work depict?", answer: "It shows a <strong>monk representing Catholic Faith</strong>, a study for a larger composition. Brown's detailed preparatory studies reflect the Pre-Raphaelite commitment to <strong>painting every element from life</strong>." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> made this work. He trained in Belgium and Paris before becoming central to the <strong>Pre-Raphaelite circle</strong> in London." },
    { question: "What style is this work?", answer: "It's <strong>Pre-Raphaelite realism</strong>, characterized by intense color, sharp detail, and subjects drawn from history and literature. Brown's technique influenced Rossetti, who briefly studied under him." }
  ],
  'ford-madox-brown-the-bromley-children': [
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of the Bromley children</strong>. Brown painted portraits with the same intense observation he brought to his historical and social realist works." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this work. His portraits combine <strong>Pre-Raphaelite precision</strong> with genuine psychological insight into his sitters." },
    { question: "What style is this painting?", answer: "It's <strong>Pre-Raphaelite portraiture</strong>, marked by vivid color and meticulous detail. Brown's portraits capture personality with a directness that sets them apart from conventional Victorian portrait painting." }
  ],
  'ford-madox-brown-the-hay-harvest': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>hay harvest in the English countryside</strong>. Brown painted it outdoors in direct sunlight, applying Pre-Raphaelite principles to a <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>rural</strong></a> subject." },
    { question: "Who painted The Hay Harvest?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this work. His commitment to <strong>painting outdoors</strong> predated the Impressionists, though his technique remained more detailed and precise." },
    { question: "What style is this painting?", answer: "It's <strong>Pre-Raphaelite landscape</strong>, painted with brilliant color under natural light. Brown's outdoor work influenced the English plein-air tradition alongside Constable and later the Impressionists." }
  ],
  'ford-madox-brown-the-finding-of-don-juan-by-haid233e': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-gallery-victoria\"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia." },
    { question: "What does this painting depict?", answer: "The scene illustrates a moment from <strong>Byron's poem Don Juan</strong>, where Haidée discovers the shipwrecked hero on a beach. Brown painted literary subjects with <strong>vivid color and dramatic staging</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> literary scene. His paintings of Romantic poetry combine <strong>Pre-Raphaelite precision</strong> with genuine narrative drama." }
  ],
  'work-ford-madox-brown': [
    { question: "Where is Work displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a> in England." },
    { question: "What does Work depict?", answer: "The scene shows <strong>navvies digging up a London street</strong>, surrounded by every class of Victorian society. Brown spent 13 years on this painting, creating a <strong>panoramic allegory of labor</strong>." },
    { question: "Who painted Work?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this between 1852 and 1865. It's his most famous painting, a <strong>social realist statement</strong> about the dignity and hierarchy of labor in Victorian England." }
  ],
  'ford-madox-brown-the-seeds-and-fruit-of-english-poetry': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Chaucer reading poetry to Edward III's court</strong>. Brown celebrated English literary history with the same intensity he brought to contemporary social subjects." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this literary history painting. His Pre-Raphaelite approach gave historical scenes a <strong>vivid, almost photographic immediacy</strong>." }
  ],
  'ford-madox-brown-pretty-baalambs': [
    { question: "Where is Pretty Baa-Lambs?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman and child with lambs in bright sunlight</strong>. Brown painted it entirely outdoors, an early experiment in <strong>plein-air painting</strong> that predated French Impressionism." },
    { question: "Who painted Pretty Baa-Lambs?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this around 1851. The painting's <strong>dazzling outdoor light</strong> shocked Victorian viewers accustomed to studio-painted scenes." }
  ],
  'ford-madox-brown-the-young-mother': [
    { question: "Where is The Young Mother?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young mother with her infant</strong>. Brown painted domestic subjects with the same careful observation he applied to grand historical canvases." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this intimate scene. His range spanned from <strong>social realism to literary history</strong> to quiet domestic moments like this one." }
  ],
  'fra-angelico-madonna-of-mercy-with-kneeling-friars': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/basilica-di-san-marco-florence-italy\"><strong>Basilica di San Marco</strong></a> in Florence, the Dominican convent where Fra Angelico lived and worked." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna spreading her cloak over kneeling friars</strong>, a gesture of protection. The \"Madonna of Mercy\" theme was popular in <strong>Dominican communities</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting. A Dominican friar himself, he painted with a <strong>serene piety</strong> that earned him beatification by Pope John Paul II in 1982." }
  ],
  'fra-angelico-st-matthew': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-cond233-chantilly-france\"><strong>Musée Condé</strong></a> in Chantilly, France." },
    { question: "What does this painting depict?", answer: "It shows <strong>St. Matthew the Evangelist</strong>, author of the first Gospel. Fra Angelico paints him with <strong>luminous color and gentle dignity</strong>, typical of his saintly figures." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> (c. 1395-1455) created this panel. Vasari wrote that he <strong>never picked up a brush without praying first</strong>, and his paintings radiate that devotional calm." }
  ],
  'fra-angelico-st-michael': [
    { question: "What does this painting depict?", answer: "It shows <strong>St. Michael the Archangel</strong>, typically depicted as a warrior defeating evil. Fra Angelico renders him with <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> and brilliant color, combining <strong>martial strength with angelic grace</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel. His <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> paintings are among the most beautiful in Western art." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, bridging <strong>medieval gold-ground tradition</strong> with the new naturalism emerging in 15th-century Florence." }
  ],
  'fra-angelico-madonna-of-humility': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna seated humbly on the ground</strong> rather than enthroned. Fra Angelico's Madonnas radiate <strong>quiet tenderness</strong>, embodying the Dominican ideal of humble devotion." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional work. His combination of <strong>medieval piety and Renaissance naturalism</strong> makes his religious paintings uniquely moving." }
  ],
  'fra-angelico-st-peter-martyr-altarpiece': [
    { question: "Where is this altarpiece?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/basilica-di-san-marco-florence-italy\"><strong>Basilica di San Marco</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "The altarpiece centers on <strong>St. Peter Martyr</strong>, a Dominican friar killed for his faith. Fra Angelico painted this for his own convent, giving it special <strong>personal devotional significance</strong>." },
    { question: "Who painted this altarpiece?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this work. He decorated the entire San Marco convent with frescoes, creating one of the most <strong>complete surviving cycles</strong> of early Renaissance painting." }
  ],
  'fra-angelico-st-nicholas-of-bari': [
    { question: "What does this painting depict?", answer: "It shows <strong>St. Nicholas of Bari</strong>, the 4th-century bishop who inspired the Santa Claus legend. Fra Angelico painted him with the <strong>serene dignity</strong> he gave all his saintly figures." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel. His paintings combine <strong>jewel-like color</strong> with a spiritual calm that made him the most revered religious painter of early Renaissance Florence." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. Fra Angelico mastered the new techniques of <strong>perspective and natural light</strong> while maintaining the devotional intensity of medieval art." }
  ],
  'fra-angelico-penitent-st-jerome': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/princeton-university-art-museum-puam-princeton-nj-\"><strong>Princeton University Art Museum</strong></a> in New Jersey." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Jerome in penitence</strong>, the scholar-saint who translated the Bible into Latin. Fra Angelico depicts him in the wilderness, beating his chest with a stone." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel. Pope John Paul II declared him the <strong>patron saint of artists</strong> in 1984, recognizing the spiritual depth of his painting." }
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
