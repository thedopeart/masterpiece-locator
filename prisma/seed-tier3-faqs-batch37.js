const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 37: tier 3 index 360-369
const newFaqs = {
  'francisco-de-zurbaran-cup-of-water-and-a-rose-on-a-silver-plate': [
    { question: "Why are Zurbarán's still lifes valued?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán's</strong></a> still lifes are prized for their <strong>austere beauty and spiritual quality</strong>. A cup, water, and rose become contemplative objects, painted with the same reverence he brought to religious subjects." }
  ],
  'jean-antoine-watteau-cupid-disarmed': [
    { question: "What does the disarmed Cupid symbolize?", answer: "A <strong>disarmed Cupid</strong> represents love rendered harmless or playful rather than piercing. <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> treated love with gentle irony in his <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> paintings, where flirtation is a delicate game." }
  ],
  'eustache-le-sueur-cupid-ordering-mercury-to-announce-his-power-to-th': [
    { question: "What mythological scene is shown?", answer: "<strong>Cupid commands Mercury</strong> to proclaim love's dominion over the world. <a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Le Sueur</strong></a> painted this as part of a decorative series, combining French classical elegance with playful mythological storytelling." }
  ],
  'gerard-ter-borch-curiosity': [
    { question: "What makes ter Borch's interiors special?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> painted <strong>satin and silk fabrics</strong> with unmatched skill. His intimate domestic scenes show well-dressed Dutch women in quiet moments, their shimmering clothes rendered with extraordinary precision." }
  ],
  'john-everett-millais-cymon-and-iphigenia-study': [
    { question: "What is the story of Cymon and Iphigenia?", answer: "From Boccaccio's Decameron: <strong>Cymon</strong>, a dull young man, sees the sleeping beauty Iphigenia and is transformed by love. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> co-founded the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a> with Hunt and Rossetti." }
  ],
  'gustave-dore-cyrus-restoring-the-vessels-of-the-temple': [
    { question: "What biblical event is illustrated?", answer: "<strong>King Cyrus of Persia</strong> returns sacred vessels to the Jews after their Babylonian exile. <a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Doré</strong></a> illustrated this Old Testament scene as part of his monumental illustrated Bible, published in 1866." }
  ],
  'charles-le-brun-daedalus-and-icarus': [
    { question: "Who was Charles Le Brun?", answer: "<strong>Charles Le Brun</strong> was the dominant French painter under Louis XIV and director of the <a href=\"/apps/masterpieces/movement/baroque\"><strong>French Academy</strong></a>. He controlled all artistic production at Versailles, establishing the <strong>grand manner</strong> of French painting." }
  ],
  'henri-fantin-latour-dahlias-queens-daisies-roses-and-corn-flowers': [
    { question: "How many flower paintings did Fantin-Latour create?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> produced <strong>hundreds of flower still lifes</strong> over his career. Each arrangement was painted from life with careful attention to the specific character and color of different blooms." }
  ],
  'paul-gauguin-daisies-and-peonies-in-blue-vase': [
    { question: "How do Gauguin's flowers relate to his later work?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> early flower paintings already show his interest in <strong>bold color contrasts and simplified forms</strong>. The decorative qualities here foreshadow the flattened, symbolic style of his Tahitian masterpieces." }
  ],
  'artemisia-gentileschi-dame-assise-de-troisquarts': [
    { question: "Why is Artemisia Gentileschi significant?", answer: "<a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia Gentileschi</strong></a> was the first woman admitted to Florence's Academy of Design. Her <strong>powerful, dramatically lit paintings</strong> rival Caravaggio's, and she's recognized as one of the finest <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> artists." }
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
