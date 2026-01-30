const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'edvard-munch-writer-hans-jaeger': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo, alongside Munch's most famous works including The Scream." },
    { question: "Who is depicted in this painting?", answer: "The portrait shows <strong>Hans Jæger</strong>, a radical Norwegian writer and anarchist. Jæger led the Kristiania Bohemians, a circle of artists and intellectuals who influenced Munch's early development." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a> created this work. Jæger's philosophy of living and writing with <strong>raw honesty</strong> deeply shaped Munch's approach to <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> art." }
  ],
  'edvard-munch-landscape-maridalen-by-oslo': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/munch-museum\"><strong>Munch Museum</strong></a> in Oslo, which inherited over 1,000 paintings from Munch's estate." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Maridalen</strong>, a valley north of Oslo. Munch painted Norwegian <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> throughout his life, though they're far less known than his psychological figure paintings." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a> created this work. His landscapes carry the same <strong>emotional charge</strong> as his portraits, treating nature as a mirror of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>inner states</strong></a>." }
  ],
  'edward-burne-jones-the-annunciation-the-flower-of-god': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Annunciation</strong>, the angel Gabriel telling the Virgin Mary she'll bear the son of God. Burne-Jones renders it with the <strong>ethereal beauty</strong> typical of Pre-Raphaelite sacred art." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> created this painting. He was the leading second-generation <strong>Pre-Raphaelite</strong>, known for dreamlike figures inspired by medieval legend and <a href=\"/apps/masterpieces/movement/renaissance\"><strong>early Renaissance</strong></a> painting." },
    { question: "What style is this painting?", answer: "It's <strong>Pre-Raphaelite</strong> in style, with elongated figures, rich color, and medieval atmosphere. Burne-Jones rejected Victorian industrialism, looking instead to <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> and mythological subjects." }
  ],
  'edward-burne-jones-st-paul': [
    { question: "Where is St Paul displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>, which holds the world's largest collection of Pre-Raphaelite art." },
    { question: "What does this work depict?", answer: "It shows <strong>St. Paul the Apostle</strong>. Burne-Jones designed many stained glass windows and painted religious figures with the same <strong>solemn, otherworldly beauty</strong> he brought to mythological scenes." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> painted this figure. Born in Birmingham, he became one of Victorian England's most influential artists, shaping the <strong>Arts and Crafts movement</strong> alongside William Morris." }
  ],
  'edwin-landseer-low-life': [
    { question: "Where is Low Life displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> in London. Landseer was the most popular animal painter in Victorian Britain." },
    { question: "What does Low Life depict?", answer: "The painting shows a <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\"><strong>dog</strong></a>, part of a pair with its companion piece \"High Life.\" Landseer gave his animals <strong>human-like expressions and personalities</strong>, which made his work enormously popular." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a> created this painting. He was <strong>Queen Victoria's favorite painter</strong> and sculpted the famous bronze lions at the base of Nelson's Column in Trafalgar Square." }
  ],
  'edwin-landseer-ptarmigan': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>ptarmigan</strong>, an arctic <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>bird</strong></a> found in the Scottish Highlands. Landseer painted Scottish wildlife extensively after falling in love with the Highlands during visits with Sir Walter Scott." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a> created this study. He was a child prodigy, exhibiting at the <strong>Royal Academy at age 13</strong>, and became the most commercially successful British artist of his era." },
    { question: "What style is this painting?", answer: "It's Victorian <strong>naturalism</strong> with a Romantic sensibility. Landseer combined <strong>precise animal observation</strong> with emotional atmosphere, giving wildlife paintings a dramatic power usually reserved for history painting." }
  ],
  'edwin-landseer-the-hunting-of-chevy-chase': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> in England." },
    { question: "What does this painting depict?", answer: "The scene illustrates the <strong>medieval ballad of Chevy Chase</strong>, a bloody border conflict between English and Scottish lords. Landseer painted it as a grand hunting scene full of <strong>violent action and dying animals</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a> created this dramatic composition. His ability to paint animals with <strong>emotional intensity</strong> made him Victorian Britain's most beloved and highest-paid artist." }
  ],
  'egon-schiele-landscape-in-lower-austria': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>landscape in Lower Austria</strong>. Schiele painted landscapes alongside his famous figure work, bringing the same <strong>nervous, angular line</strong> to trees, buildings, and fields." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> created this work. His landscapes share the <strong>emotional rawness</strong> of his portraits, with bare trees and empty fields conveying a distinctly <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> mood." },
    { question: "What style is this painting?", answer: "It's Viennese <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Schiele's landscapes strip nature to <strong>skeletal forms</strong>, with twisted trees and flattened perspectives that feel charged with psychological tension." }
  ],
  'egon-schiele-meadow-with-village-in-background': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna, which holds Austria's most important collection of Schiele's work." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>meadow with a village behind it</strong>. Schiele painted the small towns of <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>rural Austria</strong></a> with the same intensity he brought to the human body." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> created this landscape. He died in 1918 at just <strong>28 years old</strong>, taken by the Spanish flu pandemic three days after his pregnant wife Edith." }
  ],
  'egon-schiele-trees-mirrored-in-a-pond': [
    { question: "What does this painting depict?", answer: "The scene shows <strong><a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\">trees</a> reflected in a pond</strong>. Schiele's landscapes use flattened perspective and angular lines to transform ordinary scenery into something tense and alive." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscape. His mentor <strong>Gustav Klimt</strong> recognized his talent early, exchanging drawings with the young artist and introducing him to patrons." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Schiele's nature paintings share his figure work's <strong>raw, unsparing quality</strong>, turning a quiet pond scene into something emotionally charged." }
  ],
  'egon-schiele-winding-brook': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>winding brook</strong> through a landscape. Schiele's nature paintings use the same jagged, expressive line as his nudes, giving waterways and fields an almost <strong>nervous energy</strong>." },
    { question: "Who painted Winding Brook?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscape. His short career (he died at 28) produced roughly <strong>300 paintings and thousands of drawings</strong>." },
    { question: "What makes Schiele's landscapes distinctive?", answer: "Schiele treated landscapes like <strong>portraits of place</strong>. His flattened perspective, bare trees, and angular rooftops give rural Austrian scenery the same psychological intensity as his figure studies." }
  ],
  'egon-schiele-self-portrait-facing-right': [
    { question: "What does this self-portrait show?", answer: "Schiele depicts himself <strong>facing right</strong>, with the sharp, contorted features typical of his self-portraits. He painted and drew himself obsessively, using his body as his primary subject." },
    { question: "Who created this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> made this work. He produced over <strong>100 self-portraits</strong>, more than almost any other modern artist, each one raw and psychologically exposed." },
    { question: "What style is this work?", answer: "It's Viennese <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Schiele's self-portraits distort the body with <strong>angular poses and exposed contours</strong>, expressing inner states through physical distortion." }
  ],
  'el-greco-piet224-the-lamentation-of-christ': [
    { question: "Where is this Pietà?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>, which holds several important El Greco works." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>lamentation over Christ's dead body</strong>. El Greco renders the grief-stricken figures with his signature <strong>elongated forms and dramatic lighting</strong>." },
    { question: "Who painted this Pietà?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> created this work. Born in Crete, trained in Venice, he settled in Toledo, Spain, where he developed a style so personal it had <strong>no real followers until <a href=\"/apps/masterpieces/movement/expressionism\">Expressionism</a></strong>." }
  ],
  'el-greco-the-entombment-of-christ': [
    { question: "Where is The Entombment of Christ?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-art-gallery-alexandros-soutzos-museum-ath\"><strong>National Art Gallery</strong></a> in Athens, Greece, El Greco's homeland." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Christ being placed in the tomb</strong>. El Greco's figures stretch upward with <strong>flame-like intensity</strong>, turning a moment of grief into something visionary." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> (1541-1614) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Mannerist</strong></a> work. His real name was Domenikos Theotokopoulos. He signed paintings in Greek letters throughout his life." }
  ],
  'el-greco-st-luke-painting-the-virgin': [
    { question: "Where is this painting?", answer: "This early work is at the <a href=\"/apps/masterpieces/museum/historical-museum-of-crete-heraclion-greece\"><strong>Historical Museum of Crete</strong></a> in Heraklion, the only El Greco painting on display in his native Crete." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Luke painting the Virgin Mary</strong>, the patron saint of painters. This is one of El Greco's earliest known works, painted in the <strong>Byzantine-influenced Cretan style</strong> before he left for Venice." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> created this before 1567. It reveals his roots in <strong>Cretan icon painting</strong>, a tradition he transformed once he encountered Venetian color and Roman drawing." }
  ],
  'el-greco-the-last-supper': [
    { question: "Where is this Last Supper?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/pinacoteca-nazionale-di-bologna-bologna-italy\"><strong>Pinacoteca Nazionale di Bologna</strong></a> in Italy." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Christ's final meal with his apostles</strong>. El Greco's version uses his trademark <strong>elongated figures and dramatic light</strong> to heighten the spiritual tension of the moment." },
    { question: "Who painted this Last Supper?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> created this work. His religious paintings combine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Mannerist</strong></a> distortion with genuine <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> fervor, making him Spain's most original Old Master." }
  ],
  'el-greco-st-antony-of-padua': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, Spain's national museum." },
    { question: "What does this painting depict?", answer: "It shows <strong>St. Anthony of Padua</strong>, a Franciscan saint known for his preaching. El Greco paints him with the <strong>upward-gazing, ecstatic expression</strong> typical of his religious figures." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> created this painting in Toledo. The Prado holds a major El Greco collection, though his greatest works remain in <strong>Toledo's churches</strong>." }
  ],
  'el-lissitzky-proun-5-a': [
    { question: "Where is Proun 5 A?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "It's a <strong>Proun</strong>, Lissitzky's term for compositions that exist between painting and architecture. <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>Abstract</strong></a> geometric forms float in space, suggesting three-dimensional structures on a flat surface." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> made this Constructivist composition. He coined \"Proun\" (Project for the Affirmation of the New) as a bridge between <strong>art and architecture</strong> in revolutionary Russia." }
  ],
  'el-lissitzky-reminiscence-of-ravenna': [
    { question: "What does this painting depict?", answer: "The work references <strong>Ravenna's Byzantine mosaics</strong>, filtered through Lissitzky's <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> vocabulary. It combines geometric forms with a sense of ancient architectural space." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> made this painting. He was a Russian artist, designer, and architect who helped shape <strong>Constructivism</strong> and influenced the Bauhaus, De Stijl, and modern graphic design." },
    { question: "What style is this painting?", answer: "It's <strong>Constructivism</strong>, a Russian avant-garde movement that treated art as construction rather than expression. Lissitzky's work bridged <strong>Malevich's Suprematism</strong> and practical design applications." }
  ],
  'el-lissitzky-proun-1-c': [
    { question: "Where is Proun 1 C?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, alongside other key works of the Russian avant-garde." },
    { question: "What is a Proun?", answer: "Proun stands for <strong>\"Project for the Affirmation of the New.\"</strong> Lissitzky described Prouns as <strong>interchange stations between painting and architecture</strong>, compositions that suggest spatial depth through abstract geometry." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> created this around 1919-1920. His <a href=\"https://luxurywallart.com/collections/geometric-art\" target=\"_blank\" rel=\"noopener\"><strong>geometric</strong></a> compositions influenced everything from <strong>typography to exhibition design</strong> across Europe." }
  ],
  'elisabeth-vigee-le-brun-the-artist39s-brother': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri." },
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of the artist's brother</strong>, Étienne Vigée. Le Brun painted family members with the same <strong>warmth and grace</strong> she brought to her royal commissions." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/elisabeth-vigee-le-brun\"><strong>Élisabeth Vigée Le Brun</strong></a> created this work. She was <strong>Marie Antoinette's favorite painter</strong> and one of the most successful <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> artists of the 18th century." }
  ],
  'elisabeth-vigee-le-brun-selfportrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kimbell-art-museum\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas, known for its intimate, world-class collection." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/elisabeth-vigee-le-brun\"><strong>Élisabeth Vigée Le Brun</strong></a> (1755-1842) created this work. She painted over <strong>900 works during her lifetime</strong>, an extraordinary output that included portraits of European royalty across six countries." },
    { question: "What style is this painting?", answer: "It's late 18th-century <strong>Neoclassical portraiture</strong> with a soft, luminous quality. Le Brun's self-portraits present her as a <strong>confident professional artist</strong>, challenging the era's assumptions about women in the arts." }
  ],
  'ernest-meissonier-sunday-in-poissy': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>a Sunday in Poissy</strong>, a town west of Paris. Meissonier painted small-scale genre scenes with <strong>microscopic precision</strong>, earning fame for his obsessive detail." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> created this scene. He was the <strong>highest-paid French painter</strong> of the 19th century, though Impressionists considered his tiny, polished canvases old-fashioned." },
    { question: "What style did Meissonier work in?", answer: "He painted in a <strong>hyper-detailed academic realist</strong> style. His small canvases of historical and genre subjects were so finely rendered that collectors examined them with <strong>magnifying glasses</strong>." }
  ],
  'ernest-meissonier-young-man-with-a-book': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "It shows a <strong>young man reading a book</strong>. Meissonier often painted solitary figures absorbed in reading or contemplation, rendered with the <strong>jewel-like precision</strong> of a Dutch Old Master." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> created this scene. His paintings of readers and scholars follow a tradition stretching back to <strong>Vermeer and Gerrit Dou</strong>, though at an even smaller scale." }
  ],
  'ernest-meissonier-washerwomen-in-antibes': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>washerwomen working in Antibes</strong> on the French Riviera. Meissonier occasionally painted outdoor scenes with the same <strong>fine detail</strong> he applied to his studio compositions." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> created this scene. Once the <strong>most expensive living painter in Europe</strong>, his reputation declined sharply after the Impressionists redefined what modern art could be." }
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
