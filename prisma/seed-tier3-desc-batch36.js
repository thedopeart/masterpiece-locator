const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'lorenzo-lotto-virgin-and-child-with-saints-jerome-peter-clare-an': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto</strong></a> painted a <strong>sacra conversazione</strong>: the Virgin and Child surrounded by Saints Jerome, Peter, Clare, and Francis. His emotionally direct approach gives each saint a distinct, human presence unusual for this conventional format." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/scottish-national-gallery\"><strong>Scottish National Gallery</strong></a> in Edinburgh. <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto's</strong></a> works are spread across European collections." },
    { question: "How does Lotto differ from other Venetian painters?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto</strong></a> lacked the grand patrons of Titian or Bellini. He worked in smaller cities and developed a more <strong>intimate, psychologically complex</strong> style. Art historians rediscovered his brilliance in the 19th century." }
  ],
  'self-portrait-with-skeleton': [
    { question: "What does Self-Portrait with Skeleton show?", answer: "<a href=\"/apps/masterpieces/artist/lovis-corinth\"><strong>Lovis Corinth</strong></a> painted himself standing beside a <strong>human skeleton</strong>, a bold memento mori. The juxtaposition of living flesh and bare bones confronts mortality with characteristic German bluntness." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich, which holds a strong collection of German art from the 19th and early 20th centuries." },
    { question: "What is Lovis Corinth known for?", answer: "<a href=\"/apps/masterpieces/artist/lovis-corinth\"><strong>Corinth</strong></a> bridged German <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. After a stroke in 1911, his brushwork became looser and more urgent, producing some of the most emotionally raw paintings in early modern German art." }
  ],
  'fall-rebel-angels-giordano': [
    { question: "What does The Fall of the Rebel Angels depict?", answer: "<a href=\"/apps/masterpieces/artist/luca-giordano\"><strong>Luca Giordano</strong></a> painted <strong>Archangel Michael casting rebel angels into hell</strong>, a dramatic subject that let him display his mastery of swirling <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> composition and muscular figures tumbling through space." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. <a href=\"/apps/masterpieces/artist/luca-giordano\"><strong>Giordano</strong></a> was one of the most prolific painters of the late Italian Baroque." },
    { question: "Why was Giordano called 'Luca fa presto'?", answer: "His nickname means \"<strong>Luca works fast</strong>.\" <a href=\"/apps/masterpieces/artist/luca-giordano\"><strong>Giordano</strong></a> was legendarily quick, producing an enormous body of work across Naples, Florence, and Spain. His speed never compromised his dramatic flair or compositional skill." }
  ],
  'luca-signorelli-the-apostles-peter-and-john-the-evangelist': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> painted <strong>Saints Peter and John the Evangelist</strong> as powerful, solidly modeled figures. His strong anatomical drawing influenced Michelangelo's approach to the human form." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/basilica-della-santa-casa-loreto-italy\"><strong>Basilica della Santa Casa</strong></a> in Loreto, Italy. <a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> worked on several commissions for this important pilgrimage church." },
    { question: "What is Signorelli known for?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> was an Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter celebrated for <strong>muscular figure drawing</strong> and dramatic compositions. His frescoes of the Last Judgement in Orvieto Cathedral directly influenced Michelangelo's Sistine Chapel ceiling." }
  ],
  'luca-signorelli-the-flagellation': [
    { question: "What does The Flagellation depict?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> painted <strong>Christ being whipped</strong> before his crucifixion. The muscular tormentors and Christ's suffering body demonstrate Signorelli's anatomical mastery and his ability to convey physical intensity." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan, one of Italy's most important art galleries." },
    { question: "How did Signorelli influence Michelangelo?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli's</strong></a> <strong>dynamic nude figures</strong> in complex poses anticipated Michelangelo's work. Giorgio Vasari, the first art historian, noted that Michelangelo studied Signorelli's Orvieto frescoes before painting the Sistine Chapel." }
  ],
  'luca-signorelli-the-birth-of-the-virgin': [
    { question: "What does The Birth of the Virgin show?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> depicted the <strong>birth of the Virgin Mary</strong>, a popular subject in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art. The scene combines domestic detail with the dignity appropriate to a sacred event." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli's</strong></a> panel paintings are rarer on the market than his fresco work, which remains in Italian churches." },
    { question: "Where did Signorelli work?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> worked across <strong>central Italy</strong>: Cortona (his hometown), Orvieto, Rome, Florence, and Loreto. He contributed to the Sistine Chapel's side walls before Michelangelo painted the ceiling." }
  ],
  'luca-signorelli-scenes-from-the-lives-of-joachim-and-anne': [
    { question: "What do these scenes depict?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> illustrated episodes from the lives of <strong>Joachim and Anne</strong>, the parents of the Virgin Mary. These apocryphal stories were popular subjects for church decoration during the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli's</strong></a> narrative panels show his skill at organizing multiple figures in readable, dramatic compositions." },
    { question: "What are apocryphal stories?", answer: "These are <strong>religious narratives</strong> not included in the canonical Bible but widely accepted in medieval and Renaissance tradition. The stories of Joachim and Anne, Mary's parents, come from texts like the Protoevangelium of James." }
  ],
  'luca-signorelli-madonna-and-child-with-prophets': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli</strong></a> painted the <strong>Madonna and Child</strong> flanked by Old Testament prophets who foretold Christ's coming. The composition bridges the Old and New Testaments in a single devotional image." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. The Uffizi holds works spanning the full range of Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "How does Signorelli's Madonna compare to others?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Signorelli's</strong></a> Madonnas are more <strong>sculptural and forceful</strong> than the softer versions by Raphael or Perugino. His figures have a physical weight and solidity that reflects his primary interest in the human body." }
  ],
  'lucas-cranach-elder-the-holy-family': [
    { question: "What does Cranach's Holy Family depict?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> painted <strong>Mary, Joseph, and the Christ Child</strong> in his distinctive Northern style: precise detail, rich color, and a blend of religious reverence with domestic warmth." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt. The museum holds important works from the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>." },
    { question: "What is Cranach known for?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Lucas Cranach the Elder</strong></a> was a leading German <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Renaissance</strong></a> painter. He's known for sinuous female nudes, portraits of Martin Luther (his close friend), and a prolific workshop that produced thousands of paintings." }
  ],
  'lucas-cranach-elder-the-crucifixion': [
    { question: "What does Cranach's Crucifixion show?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> depicted <strong>Christ on the cross</strong> with mourning figures below. As a painter closely tied to the Protestant Reformation, his Crucifixion scenes often emphasize direct, personal engagement with Christ's sacrifice." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> is well represented in Austrian and German collections." },
    { question: "How did the Reformation affect Cranach's art?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> was Martin Luther's friend and painted <strong>Protestant altarpieces</strong> that emphasized Scripture and personal faith. He adapted his religious imagery to reflect Reformation theology while continuing to accept Catholic commissions." }
  ],
  'lucas-cranach-elder-rest-on-the-flight-into-egypt': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> painted the <strong>Holy Family resting</strong> during their flight to Egypt, set in a lush Northern European landscape. Angels attend the family in a scene that blends the sacred with the pastoral." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin, which holds a major collection of German <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "What is distinctive about Cranach's landscapes?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach's</strong></a> landscapes feature <strong>dense forests</strong>, rocky outcrops, and detailed vegetation typical of the German landscape tradition. They provide distinctly Northern settings for biblical scenes usually imagined in Mediterranean environments." }
  ],
  'lucas-cranach-elder-the-martyrdom-of-st-catherine': [
    { question: "What does The Martyrdom of St. Catherine show?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> depicted <strong>St. Catherine's martyrdom</strong>, traditionally shown with a breaking wheel. His treatment combines dramatic violence with the decorative elegance characteristic of his mature style." },
    { question: "Where is this painting displayed?", answer: "It's in the <a href=\"/apps/masterpieces/museum/reformed-church-collection-budapest-hungary\"><strong>Reformed Church Collection</strong></a> in Budapest. <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach's</strong></a> works are found in collections across Central Europe." },
    { question: "How prolific was Cranach?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> ran one of the <strong>largest workshops</strong> in Northern Europe, producing thousands of paintings. His sons continued the business, making the Cranach workshop a family enterprise spanning generations." }
  ],
  'lucas-cranach-elder-stigmatization-of-st-francis': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> painted <strong>St. Francis receiving the stigmata</strong>, the miraculous appearance of Christ's wounds on the saint's body. The rocky, wooded landscape is typically Northern in character." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/academy-of-fine-arts-vienna-vienna-austria\"><strong>Academy of Fine Arts Vienna</strong></a>. This Catholic subject dates from before <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach's</strong></a> close involvement with the Protestant Reformation." },
    { question: "Did Cranach paint Catholic subjects after the Reformation?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> was pragmatic. While closely allied with Luther, he <strong>continued accepting Catholic commissions</strong>. His workshop produced both Protestant and Catholic imagery, adapting to the demands of different patrons." }
  ],
  'lucas-cranach-elder-the-penitence-of-st-jerome': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> painted <strong>St. Jerome</strong> doing penance in the wilderness, beating his chest with a stone. The dense German forest setting replaces the rocky desert typically associated with this subject in Italian art." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, alongside other important <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> works." },
    { question: "Why was St. Jerome popular with Northern painters?", answer: "Jerome's <strong>wilderness penitence</strong> let Northern painters set the scene in their own familiar forests rather than Italian landscapes. <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a>, Dürer, and others all painted Jerome surrounded by distinctly Northern vegetation." }
  ],
  'still-life-oranges-walnuts': [
    { question: "What does Still Life with Oranges and Walnuts show?", answer: "<a href=\"/apps/masterpieces/artist/luis-melendez\"><strong>Meléndez</strong></a> arranged <strong>oranges and walnuts</strong> with his characteristic precision and simplicity. His still lifes focus on a few humble objects, lit with strong clarity against dark backgrounds." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. <a href=\"/apps/masterpieces/artist/luis-melendez\"><strong>Meléndez</strong></a> is increasingly recognized as one of the finest still life painters of the 18th century." },
    { question: "What is Meléndez known for?", answer: "<a href=\"/apps/masterpieces/artist/luis-melendez\"><strong>Luis Meléndez</strong></a> specialized in <strong>bodegón</strong> (Spanish kitchen still life). His tight compositions of fruit, bread, and ceramics have a monumental quality despite their humble subjects. He died in poverty but is now considered a master of the genre." }
  ],
  'martin-johnson-heade-the-marshes-at-rhode-island': [
    { question: "What does The Marshes at Rhode Island show?", answer: "<a href=\"/apps/masterpieces/artist/martin-johnson-heade\"><strong>Heade</strong></a> painted <strong>coastal marshland</strong> in Rhode Island with the glowing, horizontal light characteristic of American Luminism. The flat terrain and vast sky create a meditative stillness." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, which holds an important collection of American landscape painting." },
    { question: "What is Heade known for?", answer: "<a href=\"/apps/masterpieces/artist/martin-johnson-heade\"><strong>Heade</strong></a> is celebrated for <strong>marsh landscapes and hummingbird paintings</strong>. His salt marsh scenes, with their low horizons and luminous skies, are among the finest examples of American Luminist painting." }
  ],
  'mary-cassatt-woman-on-a-striped-sofa-with-a-dog': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted a <strong>woman relaxing on a striped sofa with her dog</strong>, a quiet domestic scene. The bold pattern of the sofa and the natural pose show her confident handling of color and composition." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fogg-museum-harvard-art-museums-cambridge-ma-us\"><strong>Fogg Museum</strong></a> at Harvard Art Museums in Cambridge, Massachusetts." },
    { question: "What is Cassatt known for?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> was the only American to exhibit with the French <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>. She's best known for tender paintings of <strong>mothers and children</strong>, though her range included portraits, domestic scenes, and innovative printmaking." }
  ],
  'mary-cassatt-the-flirtation-a-balcony-in-seville': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted a <strong>flirtation scene on a Seville balcony</strong>, an early work inspired by her travels in Spain. The warm colors and social subject show the influence of Spanish painting before she joined the Impressionist circle." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. Cassatt was born near Philadelphia, and the museum holds a strong collection of her work." },
    { question: "How did Spain influence Cassatt?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> studied in Spain in the early 1870s, absorbing the work of <strong>Velázquez and Murillo</strong>. The experience gave her a taste for bold color and direct observation that she carried into her later Impressionist work." }
  ],
  'mary-cassatt-profile-of-an-italian-woman': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted an <strong>Italian woman in profile</strong>, likely during her travels in Italy. The strong profile format and dark background reflect Old Master influences before she adopted the lighter palette of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> early works show an artist still finding her voice through study of European masters." },
    { question: "How did Cassatt develop as an artist?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> trained in the US and then traveled Europe extensively, studying in <strong>Paris, Spain, Italy, and the Netherlands</strong>. Meeting Degas in 1877 transformed her art, leading her toward the Impressionist style she's known for." }
  ],
  'mary-cassatt-the-mandolin-player': [
    { question: "What does The Mandolin Player depict?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted a <strong>woman playing a mandolin</strong>, a musical subject that let her explore the interplay of hands, instrument, and concentrated expression. The theme connects to a long tradition of musician portraits." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> paintings of women engaged in everyday activities are among her most characteristic works." },
    { question: "What subjects did Cassatt prefer?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> focused on the <strong>private world of women</strong>: reading, sewing, bathing, caring for children, and socializing. She painted these intimate moments with the same seriousness other artists brought to history painting." }
  ],
  'mary-cassatt-two-women-seated-by-a-woodland-stream': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted <strong>two women seated outdoors</strong> by a stream, a plein-air subject that reflects her Impressionist practice. The dappled light and natural setting show her skill with open-air color." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> outdoor scenes are less common than her indoor domestic paintings." },
    { question: "How did Cassatt fit within Impressionism?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> exhibited with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> from 1879 at Degas's invitation. She shared their interest in <strong>modern life, natural light, and spontaneous composition</strong>, while bringing her own focus on women's domestic experience." }
  ],
  'mary-cassatt-portrait-of-a-lady-of-seville': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted a <strong>Sevillian woman</strong> during her time in Spain. The warm palette and confident brushwork reflect her immersion in Spanish painting traditions during the early 1870s." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> Spanish-period works are valued for showing her formative development as a painter." },
    { question: "Why did Cassatt go to Spain?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> went to study <strong>Velázquez, Murillo, and other Spanish masters</strong> firsthand. Many 19th-century artists made this pilgrimage, and the experience sharpened Cassatt's eye for bold color and direct observation." }
  ],
  'mary-cassatt-sketch-of-mrs-currey-sketch-of-mr-cassatt': [
    { question: "What is this work?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> created a <strong>double sketch</strong> of Mrs. Currey and her own father, Mr. Cassatt. These informal studies capture family and friends with quick, perceptive strokes." },
    { question: "Where is this work kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> sketches and studies are valued for their directness and the insight they offer into her working process." },
    { question: "Did Cassatt often paint family members?", answer: "Yes. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> frequently used <strong>family members as models</strong>, including her mother, sister Lydia, and various nieces and nephews. Her family provided readily available subjects for the intimate domestic scenes she favored." }
  ],
  'mary-cassatt-the-young-bride': [
    { question: "What does The Young Bride depict?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted a <strong>young woman</strong> in bridal context, rendered with her characteristic sensitivity to female experience. The portrait captures a moment of transition and anticipation." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> portraits of women at significant life moments are among her most psychologically nuanced works." },
    { question: "What makes Cassatt's portraits of women distinctive?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted women as <strong>thinking, feeling individuals</strong> rather than decorative objects. Her female subjects are absorbed in their own activities and thoughts, depicted with a respect and psychological depth rare in 19th-century art." }
  ],
  'masaccio-st-andrew': [
    { question: "What does Masaccio's St. Andrew show?", answer: "<a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> painted <strong>St. Andrew</strong> as a solid, three-dimensional figure with real weight and presence. This naturalistic approach to the human form was revolutionary in the early 15th century." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/getty-center\"><strong>Getty Center</strong></a> in Los Angeles. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio's</strong></a> surviving panel paintings are rare and highly prized." },
    { question: "Why is Masaccio so important?", answer: "<a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> transformed painting in the early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. He introduced <strong>linear perspective, naturalistic light, and solid human figures</strong> that broke with the flat Gothic style. He died at just 26 but changed the course of Western art." }
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
