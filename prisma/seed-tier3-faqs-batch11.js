const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 11: tier 3 artworks index 100-109
const newFaqs = {
  'leonardo-da-vinci-automobile': [
    { question: "Did Leonardo design an automobile?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a> sketched a <strong>self-propelled cart</strong> around 1478, considered one of history's first automobile concepts. Powered by coiled springs, a working model was built in 2004 based on his drawings." }
  ],
  'isaac-levitan-autumn': [
    { question: "What subjects did Levitan paint?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Isaac Levitan</strong></a> was Russia's finest <strong>landscape painter</strong>, known for capturing the melancholy beauty of Russian seasons. His autumn scenes convey a poetic sadness that resonated deeply with Russian audiences." }
  ],
  'pierre-puvis-de-chavannes-autumn': [
    { question: "What style did Puvis de Chavannes develop?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> created <strong>mural-like paintings</strong> with muted, chalky colors and simplified forms. His decorative style influenced Gauguin, Seurat, and the <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> movement." }
  ],
  'isaac-levitan-autumn-day-sokolniki': [
    { question: "Where is Sokolniki?", answer: "<strong>Sokolniki</strong> is a park in Moscow. <a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> painted this melancholic autumn scene of a solitary figure walking down a tree-lined path. The figure was actually added by his friend, the writer Anton Chekhov's brother Nikolai." }
  ],
  'francis-picabia-autumn-effect': [
    { question: "How did Picabia's style evolve?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> moved through <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, Cubism, and Dada throughout his career. This landscape shows his earlier, more traditional phase before he became one of the <strong>avant-garde's most restless experimenters</strong>." }
  ],
  'valentin-serov-autumn-evening-domotkanovo': [
    { question: "Who was Valentin Serov?", answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Valentin Serov</strong></a> was one of Russia's greatest portrait and landscape painters. <strong>Domotkanovo</strong> was an estate where he often painted, capturing the subtle light of Russian autumn evenings." }
  ],
  'henri-fantin-latour-autumn-flowers': [
    { question: "What was Fantin-Latour best known for?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a> was celebrated for his <strong>flower still lifes</strong> and group portraits of fellow artists. His floral paintings were especially popular with English collectors and remain highly sought after." }
  ],
  'thomas-cole-autumn-in-the-catskills': [
    { question: "What school did Thomas Cole found?", answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> founded the <strong>Hudson River School</strong>, America's first major art movement. His paintings of the Catskill Mountains and Hudson Valley celebrated the American wilderness as a spiritual landscape." }
  ],
  'autumn-landscape-inness-jr': [
    { question: "Who was George Inness Jr.?", answer: "<strong>George Inness Jr.</strong> was the son of the more famous landscape painter George Inness. He continued his father's tradition of atmospheric American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>landscape painting</strong></a> with soft, tonal qualities." }
  ],
  'thomas-cole-autumn-landscape-mount-chocorua': [
    { question: "Where is Mount Chocorua?", answer: "<strong>Mount Chocorua</strong> is a peak in New Hampshire's White Mountains, named after a Native American chief. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> painted it as part of his mission to document America's natural grandeur for the Hudson River School." }
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
