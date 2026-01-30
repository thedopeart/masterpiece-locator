const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 29: tier 3 index 280-289
const newFaqs = {
  'giorgione-christ-carrying-the-cross': [
    { question: "Why is attribution to Giorgione debated?", answer: "Few paintings can be firmly attributed to <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> because he died young and left <strong>no signed works</strong>. Several paintings attributed to him may have been finished by Titian or other Venetian workshop members." }
  ],
  'hieronymus-bosch-christ-carrying-the-cross': [
    { question: "What makes Bosch's version distinctive?", answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> surrounded Christ with <strong>grotesque, caricatured faces</strong> representing human cruelty. The contrast between Christ's serene expression and the mocking crowd creates a powerful moral statement." }
  ],
  'titian-christ-carrying-the-cross': [
    { question: "How did Titian approach religious subjects?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> brought <strong>emotional depth and rich color</strong> to religious scenes. His Christ figures combine physical suffering with spiritual dignity, painted with the warm Venetian palette that defined <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> color." }
  ],
  'hieronymus-bosch-christ-child-with-a-walking-frame': [
    { question: "What is unusual about this Bosch work?", answer: "It shows the <strong>infant Jesus learning to walk</strong> with a medieval baby walker. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> painted this rare, tender domestic scene without the nightmarish imagery typical of his other works." }
  ],
  'jacob-jordaens-christ-comes-as-a-gardener-to-three-marys': [
    { question: "Who was Jacob Jordaens?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jacob Jordaens</strong></a> was the leading Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter after Rubens's death. Known for <strong>robust, earthy compositions</strong>, he brought a warm, physical quality to both mythological and religious subjects." }
  ],
  'hans-memling-christ-crowned-with-thorns': [
    { question: "Where did Hans Memling work?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> worked in <strong>Bruges</strong>, then one of Europe's richest cities. His refined, devotional paintings with their calm beauty and jewel-like detail made him the city's most successful artist." }
  ],
  'rembrandt-christ-crowned-with-thorns': [
    { question: "How does Rembrandt's version differ from others?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> focuses on <strong>human suffering rather than spectacle</strong>. His Christ is an ordinary, vulnerable person rather than an idealized figure, bringing a Protestant intimacy to Catholic devotional imagery." }
  ],
  'bernardino-luini-christ-crowned-with-thorns': [
    { question: "How does Luini depict suffering?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Luini</strong></a> shows Christ's suffering with <strong>restrained, gentle emotion</strong> rather than graphic violence. His Leonardesque softness creates a contemplative mood that invites quiet reflection rather than dramatic response." }
  ],
  'rembrandt-christ-crucified-between-the-two-thieves-three-cro': [
    { question: "What is the Three Crosses print?", answer: "It's one of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> most ambitious etchings, showing the <strong>crucifixion with dramatic beams of light</strong> breaking through darkness. He reworked the copper plate through four states, dramatically changing the composition." }
  ],
  'rembrandt-christ-crucified-between-the-two-thieves-an-oval-p': [
    { question: "Why did Rembrandt use an oval format?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> experimented with <strong>different plate shapes</strong> for his etchings. The oval format concentrates the viewer's attention on the central crucifixion scene, creating an intimate, focused composition." }
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
