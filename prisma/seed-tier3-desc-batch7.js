const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'andrea-del-sarto-madonna-and-child-with-sts-catherine-elisabeth-and': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a strong collection of Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> created this multi-figure composition. His groupings of the Madonna with saints feel natural and intimate rather than stiff, a quality Vasari praised highly." },
    { question: "What style is this painting?", answer: "It's Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a>. Del Sarto's <strong>soft modeling and warm palette</strong> bridged the classical balance of Raphael and the emotional intensity of early Mannerism." }
  ],
  'andrea-del-sarto-the-birth-of-the-virgin': [
    { question: "Where is The Birth of the Virgin?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence. It's considered one of del Sarto's finest frescoes." },
    { question: "What does this fresco depict?", answer: "The scene shows the <strong>birth of the Virgin Mary</strong>, with attendants and visitors in a richly detailed domestic interior. Del Sarto filled it with naturalistic figures and atmospheric perspective." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted this around 1514. The fresco's <strong>natural poses and spatial depth</strong> demonstrate why Vasari called him the \"faultless painter\" of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'andrea-mantegna-presentation-at-the-temple': [
    { question: "Where is Presentation at the Temple?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin. The museum holds one of the world's finest collections of European Old Master paintings." },
    { question: "Who painted Presentation at the Temple?", answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Andrea Mantegna</strong></a> created this work. He was one of the greatest painters of the early Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, known for his <strong>sharp perspective and sculptural figures</strong>." },
    { question: "What style did Mantegna work in?", answer: "Mantegna pioneered a <strong>hard-edged, sculptural style</strong> influenced by classical Roman sculpture. His precise perspective, stone-like drapery, and archaeological accuracy set him apart from softer Venetian painters." }
  ],
  'andrea-mantegna-the-agony-in-the-garden-detail': [
    { question: "Where is The Agony in the Garden?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It hangs near Giovanni Bellini's version of the same subject, allowing direct comparison." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Christ praying on the Mount of Olives</strong> while his disciples sleep. Mantegna set the scene in a rocky, crystalline landscape with a distant view of Jerusalem rendered in exacting detail." },
    { question: "Who painted The Agony in the Garden?", answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Andrea Mantegna</strong></a> painted this early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masterwork. His brother-in-law <strong>Giovanni Bellini</strong> painted the same subject around the same time, likely in friendly competition." }
  ],
  'andrea-mantegna-madonna-and-child-with-seraphim-and-cherubim': [
    { question: "Where is this painting displayed?", answer: "This Madonna and Child is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's a fine example of Mantegna's devotional work." },
    { question: "What does this painting show?", answer: "The Virgin holds the <strong>Christ Child surrounded by seraphim and cherubim</strong>. Mantegna's angular style gives the figures a sculptural, almost carved quality unlike the softer Madonnas of his Venetian contemporaries." },
    { question: "Who was Andrea Mantegna?", answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Andrea Mantegna</strong></a> (1431-1506) was court painter to the Gonzaga family in Mantua. He married into the <strong>Bellini family</strong> and influenced Venetian painting through his mastery of perspective and classical form." }
  ],
  'andrea-mantegna-stmark': [
    { question: "Where is this St. Mark displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The Städel holds a broad collection spanning 700 years of European art." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>St. Mark the Evangelist</strong>, author of the second Gospel. Mantegna portrays him with the sharp outlines and sculptural solidity that define his approach to the human figure." },
    { question: "Who painted this St. Mark?", answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Andrea Mantegna</strong></a> created this work. His figures look almost carved from stone, reflecting his deep study of <strong>Roman sculpture and classical antiquity</strong> during the early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'annibale-carracci-the-assumption-of-the-virgin': [
    { question: "Where is this Assumption displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado's Italian collection includes several important <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works." },
    { question: "Who painted The Assumption of the Virgin?", answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> created this work. He was the most talented of the Carracci family and a founder of the <strong>Baroque classical tradition</strong> that rivaled Caravaggio's more dramatic approach." },
    { question: "What style is this painting?", answer: "It's early Italian <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>. Annibale combined <strong>Renaissance idealism with Baroque energy</strong>, creating compositions that influenced generations of painters including Rubens and Poussin." }
  ],
  'annibale-carracci-venus-with-a-satyr-and-cupids': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It's one of Annibale's mythological compositions." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Venus reclining while a satyr and cupids attend her</strong>. Annibale painted mythological nudes with a classical sensuality drawn from Titian and Correggio." },
    { question: "Who was Annibale Carracci?", answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> (1560-1609) was a Bolognese painter who reformed Italian painting. His <strong>Farnese Gallery ceiling</strong> in Rome is considered one of the great achievements of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." }
  ],
  'annibale-carracci-portrait-of-a-man': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museu-nacional-de-belas-artes-rio-de-janeiro-brazi\"><strong>Museu Nacional de Belas Artes</strong></a> in Rio de Janeiro, Brazil. It's one of the museum's notable European Old Master works." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> created this work. While best known for his grand religious and mythological paintings, he was also a skilled portraitist with a <strong>direct, naturalistic approach</strong>." },
    { question: "What style did Carracci work in?", answer: "Annibale pioneered the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> classical style, combining <strong>Venetian color, Roman drawing, and Lombard naturalism</strong>. His approach countered both late Mannerist artificiality and Caravaggio's stark realism." }
  ],
  'anthony-van-dyck-young-woman-with-a-child': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>young woman with a child</strong>, likely a portrait of a noblewoman and her offspring. Van Dyck's portraits convey aristocratic grace through elegant poses and luxurious fabrics." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a> created this portrait. He was <strong>Rubens's most gifted student</strong> and became court painter to Charles I of England, defining the look of 17th-century aristocratic portraiture." },
    { question: "What style did Van Dyck work in?", answer: "Van Dyck painted in the Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> tradition. His portraits feature <strong>elongated proportions, silvery color, and effortless elegance</strong> that influenced English portraiture for 150 years." }
  ],
  'anthony-van-dyck-samson-and-delilah': [
    { question: "Where is Samson and Delilah displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London, one of England's oldest public art galleries." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Delilah betraying Samson</strong> by cutting his hair while he sleeps, robbing him of his strength. It's a dramatic biblical subject that challenged Van Dyck to match his teacher Rubens's narrative power." },
    { question: "Who painted this Samson and Delilah?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a> painted this early work. Before becoming the greatest portraitist of his age, he tackled <strong>religious and mythological subjects</strong> in the style of his master <a href=\"/apps/masterpieces/movement/baroque\"><strong>Rubens</strong></a>." }
  ],
  'anthony-van-dyck-the-penitent-apostle-peter': [
    { question: "Where is The Penitent Apostle Peter?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds several Van Dyck paintings in its Flemish collection." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Peter weeping after denying Christ</strong>. Van Dyck captures genuine emotional anguish, moving beyond the formulaic treatments of this common <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> subject." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a> (1599-1641) created this religious painting. Though famous for aristocratic portraits, his <strong>early religious works</strong> show deep emotional sensitivity and fluid brushwork learned from Rubens." }
  ],
  'anthony-van-dyck-studies-of-a-man39s-head': [
    { question: "Where is this study displayed?", answer: "This work is at <a href=\"/apps/masterpieces/museum/rockox-house-antwerp-belgium\"><strong>Rockox House</strong></a> in Antwerp, Belgium. The museum was home to Nicolaas Rockox, a patron of both Rubens and Van Dyck." },
    { question: "What does this study show?", answer: "The painting shows <strong>multiple views of a man's head</strong> on one canvas. Artists made these studies to explore expression and angle, often as preparation for larger compositions." },
    { question: "Who painted these head studies?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a> created this study. His <strong>preparatory head studies</strong> reveal the sharp observational skill behind his seemingly effortless <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portraits." }
  ],
  'arnold-bocklin-villa-by-the-sea': [
    { question: "Where is Villa by the Sea displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich. The museum specializes in 19th-century European art." },
    { question: "What does Villa by the Sea depict?", answer: "The painting shows a <strong>solitary villa on a rocky coastline</strong> with dark, moody atmosphere. Böcklin painted several versions of this theme, evoking loneliness and the power of nature over human structures." },
    { question: "Who painted Villa by the Sea?", answer: "<a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a> created this work. The Swiss <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter is best known for <strong>Isle of the Dead</strong>, but his brooding coastal scenes share the same eerie, dreamlike atmosphere." }
  ],
  'arnold-bocklin-roman-landscape': [
    { question: "Where is Roman Landscape displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. The museum's European collection includes works spanning centuries." },
    { question: "What does Roman Landscape depict?", answer: "The painting shows the <strong>Italian countryside around Rome</strong>. Böcklin lived in Italy for years, and its light, ruins, and mythology deeply shaped his distinctive, <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>atmospheric landscapes</strong></a>." },
    { question: "Who was Arnold Böcklin?", answer: "<a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a> (1827-1901) was a Swiss <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter. His moody, mythological works influenced <strong>Giorgio de Chirico and the Surrealists</strong>, bridging 19th-century Romanticism and 20th-century modernism." }
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
