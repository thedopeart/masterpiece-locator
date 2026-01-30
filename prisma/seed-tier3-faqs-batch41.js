const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 41: tier 3 index 400-409
const newFaqs = {
  'odilon-redon-david-and-goliath': [
    { question: "How did Redon approach biblical subjects?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a> brought a <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> dreamlike quality to biblical scenes. His <strong>David and Goliath</strong> emphasizes mystical atmosphere over physical action, typical of his visionary approach." }
  ],
  'caravaggio-david-and-goliath': [
    { question: "Is Goliath a self-portrait?", answer: "Many scholars believe <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted his own face on <strong>Goliath's severed head</strong>. Created while fleeing a murder charge, it may be a plea for papal pardon, offering his own head symbolically." }
  ],
  'rembrandt-david-offering-the-head-of-goliath-to-king-saul': [
    { question: "How does Rembrandt handle this scene?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> focuses on the <strong>psychological exchange between David and Saul</strong> rather than the violence. The king's reaction reveals envy and fear of the young hero, a theme Rembrandt explored in multiple works." }
  ],
  'guido-reni-david-with-the-head-of-goliath': [
    { question: "How does Reni's version differ from Caravaggio's?", answer: "<a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Reni's</strong></a> David is <strong>idealized and classically beautiful</strong>, contrasting with Caravaggio's darker, more realistic approach. Reni combined <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> drama with classical elegance." }
  ],
  'albert-bierstadt-day39s-beginning': [
    { question: "How did Bierstadt capture light?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> was known for <strong>dramatic, golden light effects</strong> in his landscapes. His sunrise and sunset scenes use luminous skies to create an almost spiritual experience of the American wilderness." }
  ],
  'quentin-matsys-de-kruisdraging': [
    { question: "Who was Quentin Matsys?", answer: "<strong>Quentin Matsys</strong> was a Flemish painter who bridged late medieval and <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art in Antwerp. His <strong>expressive faces and moral subjects</strong> influenced both Dürer and later Flemish genre painters." }
  ],
  'giovanni-bellini-dead-christ-in-the-sepulchre': [
    { question: "How did Bellini depict grief?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> conveyed <strong>quiet, dignified grief</strong> in his devotional paintings. His dead Christ images combine physical realism with a gentle luminosity that transforms suffering into spiritual contemplation." }
  ],
  'giovanni-bellini-dead-christ-supported-by-madonna-and-st-john': [
    { question: "What is a Pietà composition?", answer: "A <strong>Pietà</strong> shows Christ's body supported by mourners after the crucifixion. <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a> painted many versions, each exploring the emotional bond between mother and son with tender, luminous Venetian color." }
  ],
  'giovanni-bellini-dead-christ-supported-by-two-angels': [
    { question: "What is distinctive about Bellini's color?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a> pioneered the use of <strong>oil glazes in Venetian painting</strong>, creating rich, glowing colors that seem to emit light from within. This technique transformed how Venetian artists handled color and atmosphere." }
  ],
  'gabriel-metsu-dead-cock': [
    { question: "What is a game still life?", answer: "A <strong>game still life</strong> depicts dead animals and hunting trophies. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Metsu</strong></a> and other Dutch Golden Age painters rendered these subjects with impressive textural realism, celebrating abundance and hunting culture." }
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
