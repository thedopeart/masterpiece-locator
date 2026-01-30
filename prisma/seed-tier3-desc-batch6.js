const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'anders-zorn-kaikroddare': [
    { question: "Who painted Kaikroddare?", answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a> painted this work. He was Sweden's most internationally celebrated painter, famous for his <strong>watercolors, nudes, and portraits</strong> of wealthy Americans and European royalty." },
    { question: "What does Kaikroddare depict?", answer: "The title means <strong>\"quay oarsman\"</strong> in Swedish. Zorn frequently painted maritime and waterside subjects, capturing light on water with a fluid, Impressionist-influenced brushwork." },
    { question: "What style did Zorn work in?", answer: "Zorn blended <strong>Realism with Impressionist light effects</strong>. He often used a limited palette of just four colors: yellow ochre, cadmium red, ivory black, and white. His brushwork was remarkably loose and confident." }
  ],
  'anders-zorn-the-widow': [
    { question: "Who painted The Widow?", answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a> created this painting. He moved between high-society portraiture and intimate depictions of <strong>Swedish rural life</strong>, often painting women from his home region of Dalarna." },
    { question: "What does The Widow depict?", answer: "The painting shows a <strong>woman in mourning</strong>. Zorn's portraits of ordinary Swedish people balance emotional directness with his virtuoso paint handling, giving humble subjects genuine presence." },
    { question: "Where can I see Zorn's work?", answer: "The largest collection is at the <strong>Zorn Museum</strong> in Mora, Sweden. His works also hang at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm and major American museums." }
  ],
  'anders-zorn-selfportrait': [
    { question: "Where is this self-portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden's premier art museum." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a> (1860-1920) painted this. He was one of the most successful artists of his era, painting portraits of <strong>three U.S. presidents</strong> and wealthy patrons across Europe and America." },
    { question: "What is Zorn known for?", answer: "Zorn excelled in <strong>portraits, nudes, and watercolors</strong>. His technique was famously efficient. He often built entire paintings from just four pigments, achieving rich tonal range through masterful color mixing." }
  ],
  'andre-derain-landscape-near-chatou': [
    { question: "Who painted Landscape near Chatou?", answer: "<a href=\"/apps/masterpieces/artist/andre-derain\"><strong>André Derain</strong></a> painted this landscape. He was a leading <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> who painted alongside Matisse, using <strong>bold, non-naturalistic color</strong> to electrify ordinary scenes." },
    { question: "What does this painting depict?", answer: "The painting shows the <strong>landscape near Chatou</strong>, a town on the Seine west of Paris. Chatou was popular with Impressionist and Post-Impressionist painters, including Renoir, who painted there decades earlier." },
    { question: "What is Fauvism?", answer: "<a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a> was a brief but explosive French movement (roughly 1904-1908). The \"wild beasts\" used <strong>vivid, unblended color</strong> straight from the tube. Derain and Matisse were its central figures." }
  ],
  'andrea-del-sarto-the-annunciation': [
    { question: "Where is this Annunciation displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence. The palace museum holds one of Italy's richest collections of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "Who painted this Annunciation?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this work. Vasari called him the \"faultless painter\" for his <strong>flawless draftsmanship and harmonious compositions</strong>." },
    { question: "What style is this painting?", answer: "It's a Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> work. Del Sarto bridged the generation between Leonardo and the Mannerists, combining <strong>classical balance with softer, more atmospheric color</strong>." }
  ],
  'andrea-del-sarto-madonna-and-child-with-st-elisabeth-the-infant-st-': [
    { question: "Where is this painting displayed?", answer: "This Madonna and Child is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds several works by del Sarto in its Italian paintings collection." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this composition. His <strong>Holy Family groupings</strong> are admired for their natural poses and warm emotional connection between figures." },
    { question: "What style is this painting?", answer: "It's Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a>. Del Sarto was influenced by Leonardo and Raphael but developed a <strong>softer, more intimate approach</strong> to sacred subjects that anticipated later Mannerist developments." }
  ],
  'andrea-del-sarto-madonna-and-child-with-st-john-the-baptist': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, one of Europe's great art museums." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted this. Vasari praised him as the <strong>\"faultless painter\"</strong> whose technique rivaled Raphael's, though he never achieved the same fame." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin Mary with the infant Jesus and young St. John the Baptist</strong>. This grouping was a staple of Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting." }
  ],
  'andrea-del-sarto-lucrezia-di-baccio-del-fede-the-artist39s-wife': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds a strong collection of Italian Renaissance works." },
    { question: "Who is depicted in this portrait?", answer: "The subject is <strong>Lucrezia del Fede</strong>, Andrea del Sarto's wife. Vasari claimed she was beautiful but difficult, though modern scholars question his account. She appears as the model in many of del Sarto's Madonnas." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted his wife. His portraits combine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> precision with a <strong>tender intimacy</strong> that feels personal rather than formal." }
  ],
  'madonna-of-the-harpies': [
    { question: "Where is the Madonna of the Harpies?", answer: "This altarpiece is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It's considered del Sarto's finest work and one of the Uffizi's treasures." },
    { question: "Why is it called Madonna of the Harpies?", answer: "The name comes from the <strong>harpy-like figures carved on the pedestal</strong> where the Virgin stands. They may actually represent locusts from the Book of Revelation rather than classical harpies." },
    { question: "Who painted the Madonna of the Harpies?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted this altarpiece in 1517. It shows his mastery of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> composition: <strong>balanced, monumental, and deeply atmospheric</strong>." }
  ],
  'andrea-del-sarto-the-investiture-of-the-leper': [
    { question: "Where is this fresco?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence. Del Sarto painted a fresco cycle there depicting the life of San Filippo Benizzi." },
    { question: "What does this scene depict?", answer: "The fresco shows an episode from the <strong>life of San Filippo Benizzi</strong>, a 13th-century Florentine saint. Del Sarto painted several scenes from Filippo's life in the basilica's forecourt." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this work. His fresco cycles in Florence demonstrate the same <strong>fluid draftsmanship and subtle color</strong> that earned him Vasari's title of \"faultless painter.\"" }
  ],
  'andrea-del-sarto-portrait-of-a-lady-with-spindle-cup': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. The Uffizi holds multiple works by del Sarto." },
    { question: "What does this portrait show?", answer: "The painting depicts a <strong>woman holding a spindle cup</strong>, a tool for spinning thread. The object may symbolize domestic virtue, a common theme in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> female portraiture." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this work. His portraits of women often feature <strong>soft sfumato modeling and warm, natural expressions</strong> that feel less formal than his contemporaries' work." }
  ],
  'andrea-del-sarto-the-miracle-of-the-relics-of-san-filippo-from-the-': [
    { question: "Where is this fresco?", answer: "This scene is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence, part of del Sarto's fresco cycle on the life of San Filippo Benizzi." },
    { question: "What does this fresco depict?", answer: "The scene shows a <strong>miracle attributed to San Filippo Benizzi's relics</strong>. Del Sarto painted the narrative with characteristic clarity, arranging figures in balanced groups within an architectural setting." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted this around 1510. His San Filippo cycle at the Annunziata established his reputation as one of Florence's leading <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painters." }
  ],
  'andrea-del-sarto-madonna-and-child-with-the-young-st-john': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> in Rome. The gallery's intimate scale makes it ideal for appreciating del Sarto's soft, detailed technique." },
    { question: "What does this painting show?", answer: "The scene depicts the <strong>Madonna with the Christ Child and young St. John the Baptist</strong>. Del Sarto painted this grouping repeatedly, each time finding fresh arrangements and emotional nuance." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this devotional painting. His <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Madonnas combine <strong>Raphael's compositional grace with a warmer, more naturalistic palette</strong>." }
  ],
  'andrea-del-sarto-the-raising-of-the-dead-child-by-the-corpse-of-san': [
    { question: "Where is this fresco?", answer: "This scene is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence, part of del Sarto's San Filippo Benizzi cycle." },
    { question: "What does this fresco depict?", answer: "The scene shows a <strong>dead child being raised to life by contact with San Filippo's corpse</strong>. It's a dramatic miracle scene rendered with del Sarto's characteristic compositional calm." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this work. His Annunziata frescoes were so admired that Michelangelo reportedly said del Sarto's student could have \"made the art tremble\" if given more ambition." }
  ],
  'andrea-del-sarto-the-healing-of-the-possessed-woman': [
    { question: "Where is this fresco?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence. It's another scene from del Sarto's San Filippo Benizzi fresco cycle." },
    { question: "What does this fresco depict?", answer: "The scene shows <strong>San Filippo Benizzi healing a possessed woman</strong>. Del Sarto handled this dramatic subject with restraint, focusing on gesture and spatial clarity rather than theatrical emotion." },
    { question: "Who was Andrea del Sarto?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> (1486-1530) was a Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter. Vasari called him the <strong>\"faultless painter\"</strong> for his impeccable technique, placing him alongside Leonardo, Raphael, and Michelangelo." }
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
