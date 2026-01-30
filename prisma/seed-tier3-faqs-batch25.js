const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 25: tier 3 index 240-249
const newFaqs = {
  'anders-zorn-castles-in-the-air': [
    { question: "What was Anders Zorn known for?", answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a> was a Swedish painter celebrated for <strong>watercolors, nudes, and portraits</strong>. His fluid technique and mastery of light made him one of the most successful international artists of the late 1800s." }
  ],
  'frans-hals-catarina-both-van-der-eem': [
    { question: "What makes Frans Hals's portraits distinctive?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> used <strong>visible, energetic brushstrokes</strong> that give his portraits a sense of life and spontaneity. His loose technique was centuries ahead of its time, later admired by Manet and the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>." }
  ],
  'frans-hals-catharina-hooft-with-her-nurse': [
    { question: "Why is this double portrait notable?", answer: "This charming painting shows a <strong>wealthy Amsterdam child with her nurse</strong>. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Hals</strong></a> captured the toddler's alert expression and the nurse's warm smile with his characteristically lively brushwork." }
  ],
  'lawrence-alma-tadema-catullus-at-lesbia39s-house': [
    { question: "What was Alma-Tadema's specialty?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> specialized in <strong>ancient Roman scenes</strong> with meticulous archaeological detail. His gleaming marble interiors and classical settings made the ancient world feel tangible and luxurious." }
  ],
  'cavalry-sortie-from-fort': [
    { question: "Who was Philips Wouwerman?", answer: "<strong>Philips Wouwerman</strong> was a Dutch Golden Age painter known for <strong>cavalry scenes and white horses</strong>. His small, polished panels of military skirmishes, hunting parties, and camps were hugely popular with collectors." }
  ],
  'pietro-da-cortona-ceiling-fresco-with-medici-coat-of-arms': [
    { question: "What was Pietro da Cortona famous for?", answer: "<strong>Pietro da Cortona</strong> was one of the leading <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painters in Rome, known for his <strong>grand ceiling frescoes</strong>. His illusionistic designs at the Palazzo Barberini set the standard for Baroque ceiling painting." }
  ],
  'jean-honore-fragonard-cephalus160and160procris': [
    { question: "What myth does this painting depict?", answer: "It shows the story of <strong>Cephalus accidentally killing his wife Procris</strong> with a magic javelin, from Ovid's Metamorphoses. <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> brought his <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> grace to this tragic classical tale." }
  ],
  'chaim-soutine-ceret-landscape': [
    { question: "What is Céret?", answer: "<strong>Céret</strong> is a town in the French Pyrenees where <a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Soutine</strong></a> painted between 1919-22. His Céret landscapes feature <strong>violently swirling trees and buildings</strong>, among the most emotionally intense landscapes in 20th-century art." }
  ],
  'guido-reni-charity': [
    { question: "What style did Guido Reni develop?", answer: "<a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Guido Reni</strong></a> combined <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> drama with <strong>classical idealism</strong>. His elegant, softly lit figures of saints and allegories were among the most admired paintings in Europe for two centuries." }
  ],
  'andrea-del-sarto-charity': [
    { question: "What does Charity symbolize in art?", answer: "<strong>Charity</strong> (Caritas) is traditionally shown as a woman nurturing children, representing selfless love. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto's</strong></a> version demonstrates his graceful <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> style and mastery of the human figure." }
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
