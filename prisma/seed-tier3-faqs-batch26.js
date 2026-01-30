const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 26: tier 3 index 250-259
const newFaqs = {
  'hyacinthe-rigaud-charles-de-saint-albin-archbishop-of-cambrai': [
    { question: "What was Hyacinthe Rigaud known for?", answer: "<strong>Hyacinthe Rigaud</strong> was the official portrait painter of the French court, best known for his grand portrait of <strong>Louis XIV</strong>. His lavish depictions of aristocrats and clergy defined Baroque portraiture in France." }
  ],
  'john-singer-sargent-charles-deering': [
    { question: "Who was Charles Deering?", answer: "<strong>Charles Deering</strong> was a wealthy American industrialist and art collector. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted many of America's leading figures, using his fluid brushwork to capture their confidence and social standing." }
  ],
  'peter-paul-rubens-charles-v-in-armour': [
    { question: "Did Rubens paint from life here?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> based this on Titian's famous portrait of <strong>Emperor Charles V</strong>. As a diplomat-painter, Rubens frequently copied and reinterpreted works by Titian and other Old Masters for his royal patrons." }
  ],
  'ford-madox-brown-chaucer-at-the-court-of-edward-iii': [
    { question: "What is depicted in this painting?", answer: "It shows <strong>Geoffrey Chaucer</strong> reading his poetry at the 14th-century English court. <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> researched medieval costume and setting carefully, reflecting the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> commitment to historical accuracy." }
  ],
  'george-stubbs-cheetah-with-two-indian-servants-and-a-stag': [
    { question: "What was George Stubbs famous for?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a> was Britain's greatest <strong>animal painter</strong>, renowned for his anatomically precise horses. This exotic subject of a cheetah was based on a real animal brought to England as a gift from India." }
  ],
  'ernest-meissonier-chess-players': [
    { question: "What scale did Meissonier work at?", answer: "<a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Meissonier</strong></a> was famous for <strong>tiny, jewel-like paintings</strong> with photographic detail. His miniature genre scenes of chess players, soldiers, and readers commanded enormous prices in the 19th-century art market." }
  ],
  'paul-gauguin-chicken-coop': [
    { question: "Where did Gauguin paint rural subjects?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted <strong>farmyard scenes in Brittany</strong> and later in Tahiti. Before his exotic South Pacific period, he explored rural French life with bold color and simplified forms." }
  ],
  'lawrence-alma-tadema-chiesa-san-clemente': [
    { question: "Where is San Clemente?", answer: "<strong>San Clemente</strong> is a basilica in Rome with three layers of history spanning 2,000 years. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted it with his characteristic archaeological precision, celebrating ancient Roman architecture." }
  ],
  'pierre-bonnard-child-at-table': [
    { question: "What domestic scenes did Bonnard paint?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted <strong>meals, bathrooms, and gardens</strong> with intimate familiarity. His dining table scenes capture the quiet rhythms of daily life through richly layered color and soft, glowing light." }
  ],
  'mary-cassatt-child-drinking-milk': [
    { question: "Why did Cassatt focus on mothers and children?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> chose <strong>mothers and children</strong> as her primary subject because they offered authentic, emotionally rich compositions. As a woman, she had direct access to these private domestic moments that male painters rarely witnessed." }
  ],
};

async function seed() {
  for (const [slug, addFaqs] of Object.entries(newFaqs)) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
      if (!artwork) { console.error(`✗ Not found: ${slug}`); continue; }
      const existing = (artwork.faqs && Array.isArray(artwork.faqs)) ? artwork.faqs : [];
      const merged = [...existing, ...addFaqs];
      await prisma.artwork.update({ where: { slug }, data: { faqs: merged, updatedAt: new Date() } });
      console.log(`✓ ${slug}: ${existing.length} → ${merged.length} FAQs`);
    } catch (err) { console.error(`✗ Failed: ${slug} - ${err.message}`); }
  }
  await prisma.$disconnect();
}
seed();
