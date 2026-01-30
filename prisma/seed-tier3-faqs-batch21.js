const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 21: tier 3 index 200-209
const newFaqs = {
  'bartolome-murillo-boy-with-a-dog': [
    { question: "Why are Murillo's child paintings popular?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo's</strong></a> paintings of <strong>street children</strong> in Seville combine warmth with realism. They were among the first European paintings to show lower-class children as sympathetic, appealing subjects rather than comic figures." }
  ],
  'edouard-manet-boy-with-a-sword': [
    { question: "Who modeled for this painting?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet's</strong></a> young stepson <strong>Léon Leenhoff</strong> posed for this 1861 painting. The work pays homage to Spanish Old Masters, especially Velázquez, whose bold, direct style Manet deeply admired." }
  ],
  'giorgione-boy-with-flute': [
    { question: "Why is Giorgione significant?", answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> revolutionized Venetian painting with <strong>atmospheric mood and poetic mystery</strong>. Despite dying young around age 32, he influenced Titian and established Venice's distinctive approach to color and light." }
  ],
  'gabriel-metsu-breakfast': [
    { question: "What do Dutch breakfast scenes depict?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu's</strong></a> breakfast scenes show <strong>prosperous Dutch households</strong> at their morning meal. These genre paintings celebrate domestic comfort while often containing subtle moral messages about temperance." }
  ],
  'diego-velazquez-breakfast': [
    { question: "What period is this from?", answer: "This is from <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez's</strong></a> early <strong>Seville period</strong> (before 1623), when he painted bodegones, kitchen and tavern scenes with ordinary people. These early works established his naturalistic style." }
  ],
  'francois-boucher-breakfast': [
    { question: "What style is this painting?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> was the leading painter of the French <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>. This <strong>elegant domestic scene</strong> shows the refined, decorative style that made him the favorite painter of Madame de Pompadour." }
  ],
  'breakfast-under-big-birch': [
    { question: "Who was Carl Larsson?", answer: "<strong>Carl Larsson</strong> was a Swedish painter whose watercolors of his family's home became Sweden's most beloved images of <strong>domestic life</strong>. His bright, cheerful interiors influenced Scandinavian design for generations." }
  ],
  'maurice-denis-bretons': [
    { question: "Why did artists paint Brittany?", answer: "<strong>Brittany</strong> attracted many Post-Impressionist painters for its rugged coast, Celtic culture, and traditional costumes. <a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Maurice Denis</strong></a> and the Nabis followed Gauguin's lead in painting this distinctly non-Parisian France." }
  ],
  'rembrandt-bridge': [
    { question: "What makes Rembrandt's landscape drawings special?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> landscape drawings and etchings of <strong>Dutch bridges and waterways</strong> are prized for their economy and atmosphere. A few lines of ink evoke an entire scene with remarkable spatial depth." }
  ],
  'bartolome-murillo-brother-juniper-and-the-beggar': [
    { question: "Who was Brother Juniper?", answer: "<strong>Brother Juniper</strong> was a companion of St. Francis of Assisi, known for extreme generosity. <a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo</strong></a> depicted the Franciscan legend with the warmth and compassion typical of his religious works." }
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
