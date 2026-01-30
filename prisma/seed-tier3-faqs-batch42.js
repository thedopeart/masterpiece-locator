const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 42: tier 3 index 410-419
const newFaqs = {
  'giotto-death-and-ascension-of-st-francis': [
    { question: "Where are Giotto's Francis frescoes?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto's</strong></a> St. Francis cycle is at the <strong>Basilica of San Francesco in Assisi</strong>. These frescoes revolutionized Western painting by introducing naturalistic space, emotion, and narrative to religious art." }
  ],
  'pierre-puvis-de-chavannes-death-and-the-maidens': [
    { question: "What is the 'Dance of Death' tradition?", answer: "The <strong>Dance of Death</strong> (Danse Macabre) is a medieval artistic tradition showing Death approaching all people regardless of status. <a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> reinterpreted this motif with his cool, mural-like <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> style." }
  ],
  'rembrandt-death-appearing-to-a-wedded-couple-from-an-open-gr': [
    { question: "What theme does this etching explore?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> depicts <strong>Death intruding on a couple's life</strong>, a memento mori theme. His etchings often explore mortality with surprising intimacy, making universal themes feel personal." }
  ],
  'piero-della-francesca-death-of-adam': [
    { question: "Where is this fresco located?", answer: "It's part of <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero's</strong></a> <strong>Legend of the True Cross</strong> fresco cycle in the Basilica of San Francesco, Arezzo. This cycle is considered one of the greatest achievements of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> fresco painting." }
  ],
  'piero-della-francesca-death-of-adam-detail': [
    { question: "What makes Piero's figures distinctive?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero's</strong></a> figures have a <strong>monumental stillness</strong>. Even in dramatic scenes, his people stand with geometric dignity, their calm presence creating an almost sacred atmosphere in the fresco." }
  ],
  'paul-delaroche-death-of-elizabeth-i-queen-of-england': [
    { question: "Why did Delaroche paint historical death scenes?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> specialized in <strong>dramatic historical moments</strong>, particularly the deaths of famous figures. His meticulous research into costumes and settings made his history paintings feel like documentary recreations." }
  ],
  'eustache-le-sueur-death-of-st-bruno': [
    { question: "Who was St. Bruno?", answer: "<strong>St. Bruno</strong> founded the Carthusian monastic order in 1084. <a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Le Sueur</strong></a> painted a cycle of his life that earned comparisons to Raphael for its classical grace and restrained emotional power." }
  ],
  'hugo-van-der-goes-death-of-the-virgin': [
    { question: "Who was Hugo van der Goes?", answer: "<a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a> was a Ghent painter whose <strong>emotionally intense religious works</strong> influenced Italian Renaissance art. His Portinari Altarpiece astonished Florentine artists with its realistic detail." }
  ],
  'hans-holbein-younger-death-of-the-virgin': [
    { question: "What is Holbein best known for?", answer: "<a href=\"/apps/masterpieces/artist/hans-holbein-the-younger\"><strong>Hans Holbein the Younger</strong></a> became Henry VIII's court painter, creating <strong>iconic Tudor portraits</strong>. His early religious works show Northern Renaissance precision before he specialized in portraiture." }
  ],
  'gustave-moreau-death-offers-crowns-to-the-winner-of-the-tournamen': [
    { question: "What does this allegorical scene mean?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau's</strong></a> <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painting shows <strong>Death rewarding victors</strong>, suggesting that glory and death are intertwined. His jewel-like surfaces and mythological subjects influenced the entire Symbolist generation." }
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
