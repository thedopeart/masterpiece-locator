const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'pieter-de-hooch-woman-and-a-child-in-a-pantry': [
    { question: "What does Woman and a Child in a Pantry show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> painted a <strong>woman and child</strong> in a domestic pantry, with light filtering through from an adjoining room. The layered spatial depth is his signature compositional device." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. The museum holds the finest collection of <strong>Dutch Golden Age</strong> paintings in the world." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene showing de Hooch's mastery of <strong>natural light and perspective</strong>. His domestic interiors rival Vermeer's in their quiet beauty." }
  ],
  'pietro-da-cortona-the-age-of-bronze': [
    { question: "What does The Age of Bronze depict?", answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> painted a scene from the mythological <strong>Age of Bronze</strong>, part of a cycle illustrating humanity's decline through the four ages. The composition shows figures in a world growing harsher." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence. Cortona decorated several rooms in the palace with <strong>grand allegorical frescoes</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> work by one of the style's leading practitioners. Cortona's <strong>dynamic compositions and rich color</strong> defined the grand decorative tradition in 17th-century Rome and Florence." }
  ],
  'pietro-da-cortona-study-for-the-age-of-silver': [
    { question: "What is this a study for?", answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> created this preparatory work for his <strong>Age of Silver</strong> ceiling painting. The study reveals his process for planning complex multi-figure compositions." },
    { question: "Where is this study held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, where the finished fresco decorates the <strong>Sala della Stufa</strong>." },
    { question: "What style is this work?", answer: "It reflects <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> grandeur in its <strong>sweeping figural arrangement</strong>. Cortona's preparatory studies show the careful planning behind his seemingly effortless ceiling paintings." }
  ],
  'pietro-da-cortona-romulus-and-remus-given-shelter-by-faustulus': [
    { question: "What myth does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> painted the shepherd <strong>Faustulus</strong> discovering the infant twins Romulus and Remus. According to Roman legend, the twins had been nursed by a she-wolf before Faustulus took them in." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds several works by Cortona, one of <strong>17th-century Rome's</strong> most prominent painters." },
    { question: "What movement is this associated with?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> history painting with <strong>dramatic gestures and warm tonality</strong>. Cortona's narrative scenes combine classical subject matter with the energy of the Baroque style." }
  ],
  'pietro-da-cortona-the-age-of-iron': [
    { question: "What does The Age of Iron depict?", answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> painted the final and most violent of the <strong>four mythological ages</strong>. The scene shows humanity at its most brutal, consumed by war and conflict." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, part of Cortona's cycle in the <strong>Sala della Stufa</strong>." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> composition full of <strong>violent movement and dark drama</strong>. Cortona's ability to fill ceilings and walls with swirling figures made him one of Italy's most influential decorative painters." }
  ],
  'pontormo-st-sebastian': [
    { question: "What does Pontormo's St. Sebastian depict?", answer: "<a href=\"/apps/masterpieces/artist/pontormo\"><strong>Pontormo</strong></a> painted <strong>Saint Sebastian</strong>, the Christian martyr traditionally shown tied to a post and pierced by arrows. Pontormo's version emphasizes the figure's elegant, elongated form." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-dijon-dijon-france\"><strong>Musée des Beaux-Arts de Dijon</strong></a> in France. The museum preserves an important collection of <strong>European paintings</strong>." },
    { question: "What movement does this belong to?", answer: "Pontormo was a key figure in <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, known for <strong>elongated proportions</strong> and unusual color choices. His style deliberately broke from the balanced harmony of High Renaissance painting." }
  ],
  'quentin-matsys-the-virgin-and-child-enthroned-with-four-angels': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> painted the <strong>Virgin Mary and Christ Child</strong> on a throne attended by four angels. The composition blends Netherlandish detail with influences from Italian Renaissance painting." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The museum holds key examples of <strong>Early Netherlandish</strong> painting." },
    { question: "What style is this work?", answer: "It bridges the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> and Italian influences. Matsys was the leading painter in <strong>Antwerp</strong> in the early 1500s, combining Flemish precision with softer Italian modeling." }
  ],
  'quentin-matsys-madonna-col-bambino': [
    { question: "What does Madonna col Bambino show?", answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> painted the <strong>Virgin Mary holding the infant Jesus</strong> in a tender, devotional composition. His Madonna paintings show Leonardo da Vinci's influence on Netherlandish art." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum's <strong>Netherlandish collection</strong> traces the development of Flemish painting across centuries." },
    { question: "What movement is this associated with?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> work. Matsys introduced <strong>Italian sfumato techniques</strong> to Antwerp, creating a distinctive blend of Northern precision and Southern softness." }
  ],
  'quentin-matsys-the-purchase-agreement': [
    { question: "What does The Purchase Agreement depict?", answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> painted a scene of a <strong>commercial transaction</strong>, reflecting Antwerp's role as a major trading center. The work combines genre painting with moral undertones about money and commerce." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie in Berlin</strong></a>. The museum holds strong examples of <strong>Flemish and Dutch</strong> painting." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> genre scene. Matsys pioneered <strong>satirical and moralizing subjects</strong> in Flemish painting, influencing later artists like Marinus van Reymerswaele." }
  ],
  'raoul-dufy-the-louisphilippe-bridge-and-the-saint-gervais-chu': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a> painted the <strong>Louis-Philippe Bridge</strong> and Saint-Gervais Church in Paris. His loose, calligraphic brushwork captures the city's architecture with speed and lightness." },
    { question: "What style is this painting?", answer: "Dufy worked in a <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a>-influenced style with <strong>bright color and rapid line work</strong>. His Parisian views celebrate the city's landmarks with joyful energy." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Dufy's <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful cityscapes</strong></a> remain popular for their decorative appeal and breezy sophistication." }
  ],
  'raoul-dufy-landscape-in-falaise': [
    { question: "What does Landscape in Falaise show?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Dufy</strong></a> painted the <strong>Norman town of Falaise</strong> in his characteristic light, sketchy style. The landscape captures the rolling countryside of Normandy, where Dufy was born." },
    { question: "What movement does this belong to?", answer: "Dufy's style grew from <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a>, using <strong>bold color</strong> freed from naturalistic constraints. His landscapes prioritize mood and sensation over topographic detail." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Dufy's Norman <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> reflect his deep connection to the region where he grew up." }
  ],
  'raoul-dufy-the-saint-gervais-church': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Dufy</strong></a> painted the <strong>Saint-Gervais Church</strong> in Paris with his signature quick, gestural line work. The architecture is rendered with economy, focusing on rhythm and color rather than precise detail." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-calvet-avignon-france\"><strong>Musée Calvet</strong></a> in Avignon, France. The museum holds a mix of <strong>fine art and archaeological collections</strong>." },
    { question: "What style defines this work?", answer: "It shows Dufy's post-<a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> style, where <strong>line and color operate independently</strong>. His approach influenced decorative and graphic arts throughout the 20th century." }
  ],
  'raoul-dufy-the-beach-and-pier-at-trouville': [
    { question: "What scene does this painting capture?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Dufy</strong></a> painted the <strong>beach and pier at Trouville</strong>, a fashionable Norman seaside resort. The scene buzzes with vacationers, flags, and bright coastal light." },
    { question: "What style is this work?", answer: "It reflects Dufy's <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> roots with <strong>vivid blues and rapid brushstrokes</strong>. His beach scenes convey the pleasure of seaside holidays with effortless charm." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Dufy's <a href=\"https://luxurywallart.com/collections/beach-artwork\" target=\"_blank\" rel=\"noopener\"><strong>beach paintings</strong></a> are among his most popular and recognizable works." }
  ],
  'raoul-dufy-the-beach-at-sainte-adresse': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Dufy</strong></a> painted the <strong>beach at Sainte-Adresse</strong> near Le Havre, a site also painted by Monet. Dufy's version uses bold color patches and calligraphic lines to evoke the coastal atmosphere." },
    { question: "What movement is this associated with?", answer: "It shows <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> influence in its <strong>liberated use of color</strong>. Dufy often returned to Normandy's coast, finding endless inspiration in its light and seaside culture." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Dufy's <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal scenes</strong></a> from Normandy capture the region's atmosphere with distinctive warmth and energy." }
  ],
  'fairy-fellers-master-stroke': [
    { question: "What does The Fairy Feller's Master-Stroke depict?", answer: "<a href=\"/apps/masterpieces/artist/richard-dadd\"><strong>Richard Dadd</strong></a> painted a dense scene of <strong>fairies and mythical figures</strong> gathered to watch a fairy woodsman split a chestnut. Every inch is packed with tiny, detailed characters from folklore." },
    { question: "Where can I see this painting?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The painting is one of the museum's most <strong>unusual and celebrated</strong> works." },
    { question: "Why is this painting famous?", answer: "Dadd painted it over nine years while confined to <strong>Bethlem psychiatric hospital</strong> after murdering his father. The obsessive detail and fantasy subject make it a unique work in <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Victorian art</strong></a>." }
  ],
  'robert-campin-mass-of-saint-gregory': [
    { question: "What does Mass of Saint Gregory depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the miraculous <strong>Mass of Saint Gregory</strong>, where Christ appeared on the altar during the pope's celebration of Mass. The scene affirms the doctrine of transubstantiation." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels. The museum preserves major works of <strong>Flemish painting</strong>." },
    { question: "What movement does this belong to?", answer: "It's an early <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> work. Campin, also known as the <strong>Master of Flémalle</strong>, was one of the founders of the Netherlandish painting tradition." }
  ],
  'robert-campin-the-nuptials-of-the-virgin-st-james-the-great-and-': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the <strong>marriage of the Virgin Mary</strong> alongside Saints James the Great and Clare. The multi-panel format allowed for interconnected religious narratives." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds significant <strong>Early Netherlandish</strong> works acquired by Spanish royal collectors." },
    { question: "What style characterizes this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> altarpiece with <strong>precise naturalistic detail</strong>. Campin's innovations in oil technique helped establish the Flemish tradition that Jan van Eyck would perfect." }
  ],
  'robert-campin-madonna-and-child-before-a-fireplace': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the <strong>Virgin Mary and Christ Child</strong> seated before a domestic fireplace. The homely interior setting was revolutionary, placing sacred figures in an everyday Flemish environment." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. The museum holds one of the world's largest collections of <strong>European paintings</strong>." },
    { question: "What makes this composition notable?", answer: "Campin pioneered the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> practice of placing <strong>sacred scenes in realistic interiors</strong>. The fireplace and furnishings carry symbolic meaning while grounding the scene in daily life." }
  ],
  'robert-campin-virgin-and-child': [
    { question: "What does this Virgin and Child show?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted <strong>Mary holding the infant Jesus</strong> with the naturalistic detail that defined early Flemish painting. The figures show a tenderness drawn from observed life rather than idealized formulas." },
    { question: "Where can I view this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The Städel holds important <strong>Northern European</strong> works from the 15th century onward." },
    { question: "What movement is this associated with?", answer: "It's an early <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> work. Campin's <strong>oil painting innovations</strong> in the 1420s helped launch the revolution in Netherlandish art." }
  ],
  'robert-campin-trinity-of-the-broken-body': [
    { question: "What does Trinity of the Broken Body depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the <strong>Holy Trinity</strong> with God the Father holding the broken body of Christ. This devotional format, known as the Throne of Grace, emphasizes Christ's sacrifice." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt. The museum holds multiple works attributed to Campin and his <strong>workshop</strong>." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> devotional panel with <strong>realistic textures and expressive detail</strong>. Campin's direct, physical rendering of sacred subjects marked a break from earlier Gothic conventions." }
  ],
  'robert-campin-triptych-the-two-thieves-with-the-empty-cross-the-': [
    { question: "What does this triptych show?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted three scenes: the <strong>two thieves with the empty cross, the Entombment, and the Resurrection</strong>. The triptych format allowed worshippers to contemplate successive moments from Christ's Passion." },
    { question: "Where can I see this triptych?", answer: "It's at the <a href=\"/apps/masterpieces/museum/courtauld-gallery-london\"><strong>Courtauld Gallery</strong></a> in London. The gallery's collection includes important early <strong>Netherlandish panels</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> altarpiece. Campin's <strong>emotionally direct storytelling</strong> and detailed naturalism set the foundation for Flemish painting's golden age." }
  ],
  'robert-campin-saint-veronica-displaying-the-sudarium': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted <strong>Saint Veronica</strong> holding the cloth (sudarium) that miraculously retained Christ's face when she wiped his brow on the way to Calvary." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt. The museum has one of the strongest collections of <strong>early Flemish painting</strong> in Germany." },
    { question: "What style is this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> panel with <strong>detailed fabric rendering</strong>. Campin's ability to paint convincing textures in oil was groundbreaking for the early 15th century." }
  ],
  'robert-campin-madonna-by-a-grassy-bank-oak': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the <strong>Madonna seated on a grassy bank</strong> beneath an oak tree. The outdoor setting with its naturalistic plants reflects the growing interest in observed nature." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie in Berlin</strong></a>. The museum holds one of Europe's finest collections of <strong>Old Master paintings</strong>." },
    { question: "What movement is this associated with?", answer: "It's an early <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> work. Campin's <strong>outdoor Madonna compositions</strong> placed sacred figures in believable natural settings, a departure from gold-ground medieval painting." }
  ],
  'robert-campin-portrait-of-a-man': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted an <strong>unidentified man</strong> in a direct, unflinching portrait style. The sitter's individual features are captured with the realism that defined early Flemish portraiture." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The gallery's <strong>Netherlandish collection</strong> spans the 15th through 17th centuries." },
    { question: "What makes this portrait significant?", answer: "Campin was among the first <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painters to create <strong>independent portrait panels</strong>. His unflinching realism influenced Jan van Eyck and Rogier van der Weyden." }
  ],
  'robert-campin-the-nuptials-of-the-virgin': [
    { question: "What does The Nuptials of the Virgin depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> painted the <strong>marriage ceremony of the Virgin Mary</strong> and Joseph. The scene takes place before a Gothic church portal with detailed architectural carving." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. Spanish monarchs collected <strong>Flemish art extensively</strong>, enriching the Prado's holdings." },
    { question: "What style characterizes this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> panel with <strong>precise architectural detail</strong> and naturalistic figures. Campin's depiction of Gothic stonework and fabric textures demonstrates his technical mastery." }
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
