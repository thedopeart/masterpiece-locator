const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'berthe-morisot-woman-and-child-seated-in-a-meadow': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman and child sitting in a grassy meadow</strong>. Morisot painted women and children in outdoor settings throughout her career, capturing fleeting moments of leisure with rapid, light brushwork." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. She was one of the movement's founders and exhibited in <strong>seven of the eight Impressionist shows</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> at its most intimate. Morisot's <strong>feathery brushstrokes and pastel palette</strong> dissolve forms into light, giving her outdoor scenes a shimmering, transient quality." }
  ],
  'berthe-morisot-rosbras-brittany': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>landscape at Rosbras in Brittany</strong>, a coastal region in northwest France. Morisot painted there during summer travels, capturing the rugged scenery with her light Impressionist touch." },
    { question: "Who painted Rosbras, Brittany?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this landscape. She painted outdoors across France, applying <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> technique to both <strong>Parisian gardens and coastal scenery</strong>." },
    { question: "What makes Morisot's landscapes distinctive?", answer: "Morisot used <strong>transparent, sketch-like brushwork</strong> that leaves much of the canvas breathing. Her landscapes feel spontaneous and alive, capturing atmosphere over detail in a way that was radical for the 1870s." }
  ],
  'berthe-morisot-study-the-water39s-edge': [
    { question: "What does this study depict?", answer: "The painting captures a <strong>scene at the water's edge</strong>. Morisot's studies have a freshness and immediacy that many collectors prize as highly as her finished works." },
    { question: "Who painted this study?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this work. Her <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>waterside scenes</strong></a> are among her most atmospheric paintings, dissolving solid forms into reflected light." },
    { question: "What is Impressionism?", answer: "<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> began in 1870s France. The painters worked outdoors, using <strong>broken color and visible brushwork</strong> to capture light and atmosphere. Morisot was a core member alongside Monet and Renoir." }
  ],
  'berthe-morisot-rosalie-reisener': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the world's leading museum of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> art." },
    { question: "Who is depicted in this portrait?", answer: "The subject is <strong>Rosalie Riesener</strong>, a cousin of Morisot. Family and close friends were Morisot's most frequent models, giving her portraits an intimacy that formal commissions rarely achieve." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> (1841-1895) created this work. She was married to <strong>Eugène Manet</strong>, brother of Édouard Manet, placing her at the center of the Parisian art world." }
  ],
  'berthe-morisot-young-lady-seated-on-a-bench': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young woman seated on a park bench</strong>. Morisot captured moments of quiet rest in gardens and parks, subjects that suited her light, rapid painting technique." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. She specialized in painting <strong>women in domestic and garden settings</strong>, subjects that reflected her own social world." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Morisot's brushwork here is characteristically <strong>loose and transparent</strong>, building the figure from quick strokes of color rather than careful outlines." }
  ],
  'berthe-morisot-young-woman': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>young woman</strong>, rendered with Morisot's signature loose brushwork. Her figure studies blur the line between portrait and Impressionist color experiment." },
    { question: "Who painted Young Woman?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this work. She painted <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> throughout her career, from her sister Edma to professional models and her daughter Julie." },
    { question: "Why is Morisot important?", answer: "Morisot was a <strong>founding Impressionist</strong> who exhibited more consistently with the group than most male members. Her daring technique influenced later painters, and she's now recognized as one of the movement's most innovative figures." }
  ],
  'berthe-morisot-thatched-cottage-in-normandy': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>thatched cottage in the Normandy countryside</strong>. Morisot painted rural architecture with the same light, atmospheric approach she brought to figures and gardens." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. Normandy was a favorite painting destination for the Impressionists, with Monet famously working at Giverny nearby." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Morisot's <strong>rapid, airy brushwork</strong> captures the texture of thatch and stone without laboring over architectural detail, prioritizing light and atmosphere." }
  ],
  'bronzino-the-panciatichi-holy-family': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It was commissioned by the wealthy Panciatichi family." },
    { question: "Who painted The Panciatichi Holy Family?", answer: "<a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> created this work. He was the leading Florentine <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painter, known for <strong>icy elegance, polished surfaces, and complex compositions</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, the style that followed the High Renaissance. Bronzino's Holy Families feature <strong>elongated figures, cool colors, and porcelain-smooth skin</strong> that feel deliberately artificial and refined." }
  ],
  'bronzino-portrait-of-a-lady-in-green': [
    { question: "Where is this portrait?", answer: "This painting belongs to the <a href=\"/apps/masterpieces/museum/royal-collection-uk\"><strong>Royal Collection</strong></a> in the United Kingdom. Bronzino's aristocratic portraits have long appealed to royal collectors." },
    { question: "What does this portrait show?", answer: "The painting depicts a <strong>noblewoman wearing a green dress</strong>. Bronzino's female portraits are famous for their cool composure, meticulous fabric rendering, and impenetrable expressions." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> created this work. He was court painter to the <strong>Medici family</strong> in Florence and the greatest portrait painter of the <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> period." }
  ],
  'bronzino-portrait-of-a-lady-with-a-puppy': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-ancient-art-gnaa-rome-italy\"><strong>National Gallery of Ancient Art</strong></a> in Rome." },
    { question: "What does this portrait show?", answer: "The painting depicts a <strong>noblewoman holding a small dog</strong>. Lapdogs in Renaissance portraits symbolized fidelity and aristocratic leisure. Bronzino renders every detail of dress and fur with crystalline precision." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> created this <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> portrait. His sitters appear <strong>cool, composed, and untouchable</strong>, projecting aristocratic authority through stillness rather than action." }
  ],
  'bronzino-the-dead-christ-with-the-virgin-and-st-mary-magdal': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It shows a different side of Bronzino, known primarily as a portraitist." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>dead Christ mourned by the Virgin Mary and Mary Magdalene</strong>. Bronzino applies his signature polished technique to this devotional subject, creating figures that look almost sculpted." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> (1503-1572) created this religious painting. While best known for portraits, he also painted altarpieces and mythological scenes in the <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> style." }
  ],
  'sea-eagles-liljefors': [
    { question: "Where is Sea Eagles displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden. It's one of Liljefors's most celebrated wildlife paintings." },
    { question: "Who painted Sea Eagles?", answer: "<a href=\"/apps/masterpieces/artist/bruno-liljefors\"><strong>Bruno Liljefors</strong></a> painted this in 1907. He's considered the greatest <strong>wildlife painter</strong> in European art history, painting animals in their natural habitats with scientific accuracy and artistic power." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>sea eagles in their coastal environment</strong>. Liljefors painted <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>birds</strong></a> and predators from direct observation, spending years studying their behavior in the Swedish wilderness." }
  ],
  'camille-corot-rome-the-fountain-of-the-academie-de-france': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-reims-reims-france\"><strong>Musée des Beaux-Arts de Reims</strong></a> in France." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>fountain at the French Academy in Rome</strong>. Corot painted extensively in Italy during the 1820s-1830s, and his Italian studies are now considered among his finest works." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this Italian study. He bridged <strong>Neoclassicism and Impressionism</strong>, and his plein-air landscapes directly influenced Monet, Pissarro, and Berthe Morisot." }
  ],
  'ville-davray': [
    { question: "Where is Ville-d'Avray displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It dates to 1867, late in Corot's career." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>ponds and trees at Ville-d'Avray</strong>, a village west of Paris where Corot's family had a house. He painted this location repeatedly, capturing its misty, silvery atmosphere." },
    { question: "Who painted Ville-d'Avray?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> painted this in 1867. His <strong>silvery landscapes</strong> of Ville-d'Avray became his most popular works, widely collected and frequently forged." }
  ],
  'camille-corot-trees-and-rocks-at-la-serpentara': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>trees and rocky terrain at La Serpentara</strong> near Olevano Romano, Italy. Corot painted this outdoor study with direct, fresh observation typical of his Italian work." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this plein-air study. His Italian sketches, painted directly from nature, are now valued more highly than the <strong>studio paintings</strong> he exhibited at the Salon." },
    { question: "What style is this painting?", answer: "It's an early example of <strong>plein-air (outdoor) landscape painting</strong>. Corot's direct studies from nature helped pave the way for <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, though he worked decades before the movement formed." }
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
