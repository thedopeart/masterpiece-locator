const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 24: tier 3 index 230-239
const newFaqs = {
  'francesco-guardi-capriccio-with-venetian-motifs': [
    { question: "What is a capriccio?", answer: "A <strong>capriccio</strong> is an architectural fantasy painting that combines real and imaginary buildings. <a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Guardi</strong></a> assembled recognizable Venetian elements into invented compositions, creating dreamlike views of the city." }
  ],
  'theodore-gericault-carabinier': [
    { question: "What inspired Géricault's military subjects?", answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Théodore Géricault</strong></a> was fascinated by <strong>horses and military life</strong>. His paintings of Napoleonic cavalry officers combine <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> energy with careful study of equine anatomy." }
  ],
  'paul-delaroche-cardinal-mazarin-dying': [
    { question: "Who was Cardinal Mazarin?", answer: "<strong>Cardinal Mazarin</strong> was the chief minister of France under Louis XIV. <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> painted his death scene with theatrical accuracy, showing the cardinal's final moments surrounded by courtiers and card-playing attendants." }
  ],
  'pieter-de-hooch-cardplayers': [
    { question: "How does de Hooch use light in interiors?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> mastered <strong>light streaming through windows and doorways</strong>. His card-playing scenes glow with warm daylight that defines the space and creates a calm, orderly atmosphere." }
  ],
  'caravaggio-cardsharps': [
    { question: "Why is The Cardsharps important?", answer: "This was the painting that launched <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> career when Cardinal Del Monte bought it around 1594. The <strong>dramatic scene of cheating at cards</strong> showed his radical naturalism and influenced generations of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painters." }
  ],
  'dante-gabriel-rossetti-carlisle-wall-the-lovers': [
    { question: "What inspired Rossetti's romantic subjects?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> drew inspiration from <strong>medieval romance and Arthurian legend</strong>. As a founder of the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a>, he sought beauty and emotion in historical and literary subjects." }
  ],
  'joaquin-sorolla-carnations': [
    { question: "How did Sorolla handle flowers?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted flowers with the same <strong>bold, light-filled brushwork</strong> he used for beach scenes. His carnations capture the vivid colors of Spanish gardens with rapid, confident strokes." }
  ],
  'raoul-dufy-carnival-on-the-grands-boulevards': [
    { question: "What made Dufy's style distinctive?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a> developed a joyful style with <strong>bright colors and quick, decorative outlines</strong>. His festive scenes of regattas, concerts, and carnivals capture the pleasure of French leisure life." }
  ],
  'francesco-guardi-carnival-thursday-on-the-piazzetta': [
    { question: "What was Venice's Carnival like?", answer: "<strong>Venice's Carnival</strong> was one of Europe's grandest festivals, lasting weeks before Lent. <a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Guardi</strong></a> documented its masked crowds, acrobats, and bull-baiting spectacles in the Piazzetta San Marco." }
  ],
  'juan-de-valdes-leal-carrying-the-cross': [
    { question: "What was Valdés Leal known for?", answer: "<strong>Juan de Valdés Leal</strong> was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter known for <strong>intensely dramatic religious works</strong>. His vivid, emotionally charged style contrasted with the softer devotional approach of his Seville rival Murillo." }
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
