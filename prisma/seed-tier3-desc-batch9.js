const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'bernardino-luini-salome-with-the-head-of-st-john-the-baptist': [
    { question: "Where is this Salome displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It was once attributed to Leonardo da Vinci, which shows how closely Luini imitated his master's style." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Salome holding the severed head of John the Baptist</strong> on a platter. Luini gives Salome a calm, almost gentle expression that contrasts sharply with the gruesome subject." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this painting. His mastery of Leonardo's <strong>sfumato technique</strong> was so convincing that several of his works were long attributed to <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masters." }
  ],
  'saint-catherine-luini': [
    { question: "What does this painting depict?", answer: "The painting shows <strong>Saint Catherine of Alexandria</strong>, a Christian martyr traditionally depicted with a broken wheel. Luini painted her with the soft, dreamy expression typical of Leonardo's Milanese followers." },
    { question: "Who painted Saint Catherine?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> painted this in 1527. He was Milan's most popular painter after Leonardo's departure, known for <strong>gentle faces and misty sfumato modeling</strong>." },
    { question: "What style is this painting?", answer: "It's Lombard <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, heavily influenced by <strong>Leonardo da Vinci</strong>. Luini softened Leonardo's psychological complexity into a sweeter, more devotional style that appealed to Milanese churches and private collectors." }
  ],
  'bernardino-luini-madonna-and-child-with-sts-catherine-and-barbara': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum holds a strong collection of Italian Old Masters." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this devotional piece. His multi-figure Madonna compositions follow <strong>Leonardo's pyramidal groupings</strong> but with a warmer, more accessible feel." },
    { question: "What style is this painting?", answer: "It's a Lombard <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> sacra conversazione (holy conversation). Luini arranges the <strong>Madonna, Child, and saints</strong> in a calm, harmonious grouping characteristic of early 16th-century Milan." }
  ],
  'bernardino-luini-the-holy-family': [
    { question: "Where is this Holy Family?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds multiple Luini works, some of which were once misattributed to Leonardo." },
    { question: "Who painted this Holy Family?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this work. His Holy Family compositions are among his most <strong>Leonardesque</strong>, using soft light and intimate scale to draw viewers into the sacred scene." },
    { question: "What makes Luini's style distinctive?", answer: "Luini adopted Leonardo's <strong>sfumato (smoky) modeling</strong> and mysterious expressions, but softened them into a sweeter, more devotional tone. His work bridges the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> and Lombard regional tradition." }
  ],
  'bernardino-luini-madonna-and-sleeping-child-with-three-angels': [
    { question: "Where is this painting?", answer: "This Madonna is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of several Luini works in the museum's Italian paintings collection." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna watching over the sleeping Christ Child</strong> while three angels attend. The sleeping child motif carried symbolic weight, prefiguring Christ's death and resurrection." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> (c. 1480-1532) created this tender composition. He was the most successful of Leonardo's Milanese followers during the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'bernardino-luini-portrait-of-a-lady': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It's a fine example of Luini's portrait work." },
    { question: "Who painted this Portrait of a Lady?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this portrait. His female subjects share the <strong>enigmatic half-smile and soft modeling</strong> of Leonardo's women, filtered through a gentler sensibility." },
    { question: "What style is this portrait?", answer: "It's Lombard <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portraiture. Luini's portraits of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> combine Leonardo's psychological subtlety with a <strong>decorative elegance</strong> that appealed to Milanese patrons." }
  ],
  'bernardino-luini-saint-catherine': [
    { question: "Where is this Saint Catherine?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a significant collection of Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "Who painted this Saint Catherine?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this devotional work. He painted Saint Catherine multiple times, always with the <strong>soft features and dreamy gaze</strong> he learned from Leonardo." },
    { question: "What is sfumato?", answer: "<strong>Sfumato</strong> means \"smoky\" in Italian. It's a painting technique where tones blend gradually without visible edges. Leonardo invented it, and Luini became its most faithful practitioner in Milan." }
  ],
  'bernardino-luini-the-holy-family-with-saints-anne-and-john': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/biblioteca-ambrosiana-milan-italy\"><strong>Biblioteca Ambrosiana</strong></a> in Milan. The library-museum holds Leonardo's Codex Atlanticus alongside Luini's paintings." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Holy Family with Saint Anne and the infant St. John</strong>. This composition echoes Leonardo's famous Burlington House Cartoon and his Louvre painting of the same subject." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting. His Holy Family compositions <strong>directly reference Leonardo's models</strong>, adapted for the Milanese devotional market." }
  ],
  'bernardino-luini-salome-with-the-head-of-saint-john-the-baptist': [
    { question: "Where is this Salome displayed?", answer: "This version is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. Luini painted the Salome subject multiple times; another version hangs at the Louvre." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>Salome receiving the Baptist's severed head</strong>. Luini's Salomes are eerily serene, their gentle Leonardo-inspired faces at odds with the violent subject matter." },
    { question: "Who painted this Salome?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this version. His multiple treatments of the <strong>Salome theme</strong> were among his most sought-after works during the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'berthe-morisot-view-of-paris-from-the-trocadero': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/santa-barbara-museum-of-art-sbma-santa-barbara-ca-\"><strong>Santa Barbara Museum of Art</strong></a> in California. It's one of Morisot's important early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> cityscapes." },
    { question: "What does this painting show?", answer: "The painting captures a <strong>panoramic view of Paris from the Trocadéro hill</strong>. Morisot painted it in the early 1870s, showing the city spread below with loose, airy brushwork." },
    { question: "Who painted this view of Paris?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this work. She was a founding member of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> movement and the <strong>first woman to exhibit</strong> with the group in 1874." }
  ],
  'berthe-morisot-the-harbor-at-lorient': [
    { question: "Where is The Harbor at Lorient?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It's one of Morisot's most admired early works." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman sitting by the harbor at Lorient</strong>, a port town in Brittany. Morisot's sister Edma posed for the figure. The light, open brushwork captures the <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> atmosphere beautifully." },
    { question: "Who painted The Harbor at Lorient?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> painted this around 1869. Manet was so impressed by it that he acquired the painting. Morisot later married his brother Eugène." }
  ],
  'berthe-morisot-woman-and-child-on-the-balcony': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman and child on a balcony</strong> overlooking a landscape. Morisot frequently painted domestic scenes of women and children with a light, spontaneous touch." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. Her subjects were drawn from <strong>daily life among the Parisian bourgeoisie</strong>: gardens, drawing rooms, and intimate family moments." },
    { question: "What makes Morisot's style distinctive?", answer: "Morisot painted with <strong>feathery, transparent brushstrokes</strong> and a light palette. Her technique was among the most adventurous of the Impressionists, dissolving forms into shimmering patches of color and light." }
  ],
  'berthe-morisot-view-of-tivoli-after-corot': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>view of Tivoli, Italy</strong>, based on a composition by Camille Corot. Morisot studied under Corot in the 1860s, and his plein-air approach shaped her development as an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this early landscape. Her training with <strong>Corot</strong> gave her a foundation in outdoor painting that she later pushed toward full Impressionism." },
    { question: "Who was Berthe Morisot?", answer: "Morisot (1841-1895) was a French painter and <strong>founding member of the Impressionist group</strong>. She exhibited in seven of the eight Impressionist exhibitions, more than Monet, Renoir, or Sisley." }
  ],
  'berthe-morisot-the-seine-below-the-pont-d39lena': [
    { question: "What does this painting depict?", answer: "The painting captures the <strong>Seine River near the Pont d'Iéna</strong> in Paris. Morisot painted the river and its bridges with loose, fluid brushwork that dissolves solid forms into reflected light." },
    { question: "Who painted this river scene?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. River scenes of the Seine were central to the movement. Monet, Renoir, and Sisley all painted the same waterway." },
    { question: "What style is this painting?", answer: "It's pure <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Morisot's <strong>translucent brushwork and silvery palette</strong> make her river paintings some of the most ethereal works in the movement." }
  ],
  'berthe-morisot-the-old-track-to-auvers': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>rural path near Auvers</strong>, the village north of Paris where Van Gogh spent his final months. Morisot captured the countryside with her characteristic light, open brushwork." },
    { question: "Who painted The Old Track to Auvers?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this landscape. She painted outdoors throughout her career, applying <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> principles to both <strong>rural scenery and domestic interiors</strong>." },
    { question: "What is Impressionism?", answer: "<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> was a French movement of the 1870s-1880s that emphasized <strong>light, color, and the fleeting moment</strong>. Morisot was one of its founders, exhibiting alongside Monet, Renoir, Degas, and Pissarro." }
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
