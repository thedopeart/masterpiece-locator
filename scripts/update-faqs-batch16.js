const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'triumph-bacchus-ariadne',
    faqs: [
      { question: "What is The Triumph of Bacchus and Ariadne?", answer: "This ceiling fresco shows the god of wine Bacchus and his bride Ariadne riding in a triumphant procession. <a href=\"/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> painted it with dynamic energy." },
      { question: "Where can I see this fresco?", answer: "It's at <a href=\"/museum/palazzo-farnese\"><strong>Palazzo Farnese</strong></a> in Rome, decorating the gallery ceiling. Carracci worked on it from 1597-1602." },
      { question: "Why is this ceiling important?", answer: "<a href=\"/artist/annibale-carracci\"><strong>Carracci's</strong></a> ceiling bridged Renaissance classicism and <a href=\"/movement/baroque\"><strong>Baroque</strong></a> drama. It influenced Rubens, Bernini, and even Michelangelo's Sistine Chapel tradition." }
    ]
  },
  {
    slug: 'view-of-toledo',
    faqs: [
      { question: "What makes View of Toledo unique?", answer: "<a href=\"/artist/el-greco\"><strong>El Greco</strong></a> painted Toledo under dramatic stormy skies. It's one of the first <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> paintings without religious or historical figures." },
      { question: "Where is View of Toledo displayed?", answer: "It's at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. El Greco lived in Toledo for most of his career." },
      { question: "Is View of Toledo accurate?", answer: "<a href=\"/artist/el-greco\"><strong>El Greco</strong></a> rearranged buildings for dramatic effect. The cathedral and Alcázar are repositioned. Artistic vision trumped topographical accuracy." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-2',
    faqs: [
      { question: "Where did Monet paint The Japanese Bridge?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> built this green footbridge over his lily pond at Giverny. He painted it dozens of times over 25 years." },
      { question: "Where can I see this painting?", answer: "This version is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Monet's bridge paintings appear in museums worldwide." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet's</strong></a> <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> technique dissolved forms into light and color. The bridge merges with its reflections in shimmering green." }
    ]
  },
  {
    slug: '1807-friedland',
    faqs: [
      { question: "What battle does 1807, Friedland depict?", answer: "Napoleon's decisive victory over Russia at Friedland in June 1807. <a href=\"/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> shows cavalry charging at the moment of triumph." },
      { question: "Where is this painting displayed?", answer: "It's at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Meissonier spent 12 years researching the battle." },
      { question: "Who was Meissonier?", answer: "<a href=\"/artist/ernest-meissonier\"><strong>Meissonier</strong></a> was the highest-paid French artist of his day. His meticulously detailed military scenes commanded enormous prices from collectors." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-3',
    faqs: [
      { question: "Why did Monet paint his bridge repeatedly?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> explored how light changed at different times and seasons. Each painting captures a unique moment at his Giverny <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>garden</strong></a>." },
      { question: "Where is this version?", answer: "This painting is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a>. The Met owns several of Monet's Japanese bridge paintings." },
      { question: "What happened to Monet's eyesight?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> developed cataracts, which affected his color perception. Later bridge paintings show more reds and yellows as his <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> vision shifted." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-landscape-of-the-alps',
    faqs: [
      { question: "Who painted Landscape of the Alps?", answer: "<a href=\"/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a> created this mountain scene after traveling through the Alps to Italy. The vast scale dwarfs human presence." },
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. Bruegel's Alpine experiences shaped his distinctive <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain</strong></a> panoramas." },
      { question: "When did Bruegel visit the Alps?", answer: "<a href=\"/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> crossed the Alps around 1552-1554. The towering peaks made a lasting impression, appearing in many later works." }
    ]
  },
  {
    slug: 'adriaen-brouwer-moonlit-landscape',
    faqs: [
      { question: "Who was Adriaen Brouwer?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> was a Flemish painter known for tavern scenes. This moonlit <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> shows his atmospheric skill." },
      { question: "What makes this painting unusual?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> rarely painted pure landscapes. This nocturnal scene demonstrates his ability beyond rowdy genre subjects." },
      { question: "Was Brouwer influential?", answer: "Despite dying young at 32, <a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> influenced major artists. Both Rubens and Rembrandt collected his paintings." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-5',
    faqs: [
      { question: "How many bridge paintings did Monet make?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> created at least 18 paintings of his Japanese bridge between 1899 and 1926. Each explores different light and weather conditions." },
      { question: "Where can I see this painting?", answer: "This version is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The bridge series is scattered across international collections." },
      { question: "What inspired Monet's Japanese garden?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> loved Japanese woodblock prints. He designed his Giverny garden and arched bridge to evoke Japanese aesthetics in <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> style." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-8',
    faqs: [
      { question: "When did Monet paint his late bridge paintings?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> continued painting the bridge into the 1920s despite failing eyesight. Colors became more intense and forms more abstract." },
      { question: "Where is this painting displayed?", answer: "It's at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The museum has one of the finest Monet collections in America." },
      { question: "How did Monet's style evolve?", answer: "Later bridge paintings by <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> verge on abstraction. The <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> qualities influenced 20th-century artists." }
    ]
  },
  {
    slug: 'madame-henriette-flora',
    faqs: [
      { question: "Who is Madame Henriette as Flora?", answer: "Princess Henriette, daughter of Louis XV, poses as Flora the goddess of flowers. <a href=\"/artist/jean-marc-nattier\"><strong>Jean-Marc Nattier</strong></a> specialized in these mythological <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>." },
      { question: "Where is this painting displayed?", answer: "It hangs at the <a href=\"/museum/versailles\"><strong>Palace of Versailles</strong></a>. Nattier painted many French royals in allegorical guises." },
      { question: "What style is this portrait?", answer: "<a href=\"/artist/jean-marc-nattier\"><strong>Nattier</strong></a> worked in the Rococo style, combining soft colors and elegant flattery. His portraits made aristocrats look like goddesses." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 16)...');
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: { faqs: update.faqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
