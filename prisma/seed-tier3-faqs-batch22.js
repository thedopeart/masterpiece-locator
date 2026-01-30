const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 22: tier 3 index 210-219
const newFaqs = {
  'adolph-menzel-building-site-with-willows': [
    { question: "Why was Menzel's realism groundbreaking?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Menzel</strong></a> painted <strong>industrial and urban subjects</strong> with unflinching accuracy decades before the French <a href=\"/apps/masterpieces/movement/realism\"><strong>Realists</strong></a>. His building sites, factories, and railways documented Germany's modernization." }
  ],
  'juan-gris-bullfighter': [
    { question: "How did Juan Gris approach Cubism differently?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a> developed a more <strong>colorful, structured form of Cubism</strong> than Picasso or Braque. His bullfighter combines geometric abstraction with recognizable Spanish imagery through bright, flat color planes." }
  ],
  'valentin-serov-bullocks': [
    { question: "What made Serov a master of Russian painting?", answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov</strong></a> combined <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light effects with <strong>Russian subject matter</strong>. His animal and landscape paintings show the same observational skill that made him Russia's most sought-after portrait painter." }
  ],
  'jan-steen-burgher-of-delft-and-his-daughter': [
    { question: "What social commentary does Steen include?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> often included <strong>moral contrasts</strong> in his paintings. Here, the wealthy burgher and his daughter encounter a beggar, creating a scene about charity and social responsibility in Golden Age Holland." }
  ],
  'claude-monet-burgo-marina-at-bordighera': [
    { question: "What challenged Monet about painting Italy?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> found the <strong>Mediterranean light almost too bright</strong> to capture. He wrote to Alice Hoschedé that the vibrant blues and pinks of the Italian coast demanded colors he'd never used before in his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> palette." }
  ],
  'sassetta-burning-of-a-heretic': [
    { question: "Who was Sassetta?", answer: "<strong>Sassetta</strong> was a 15th-century Sienese painter who blended medieval <strong>gold-ground traditions</strong> with emerging <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> naturalism. His narrative panels tell religious stories with vivid, almost fairy-tale-like quality." }
  ],
  'rembrandt-bust-of-an-old-man-with-a-large-beard': [
    { question: "Why did Rembrandt paint so many old men?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> was drawn to <strong>aged faces with character</strong>. Old men with beards served as studies of expression and light, and many were used as models for biblical patriarchs and philosophers." }
  ],
  'annibale-carracci-butcher39s-shop': [
    { question: "What makes this painting unusual?", answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> painted this <strong>large-scale butcher shop</strong> scene around 1580. Showing tradesmen at work on this scale was radical. The Carracci family were actually nicknamed \"the butchers\" in Bologna." }
  ],
  'edvard-munch-by-the-roulette': [
    { question: "What inspired Munch's casino scenes?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> visited <strong>Monte Carlo</strong> and painted the tense atmosphere of gambling halls. The obsession, anxiety, and risk visible at the roulette table fit perfectly with his <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> themes." }
  ],
  'caspar-david-friedrich-by-the-townwall': [
    { question: "How does Friedrich use architecture?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> often placed <strong>ruins, walls, and Gothic structures</strong> in his landscapes to evoke the passage of time. A town wall becomes a meditation on impermanence, characteristic of his <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> vision." }
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
