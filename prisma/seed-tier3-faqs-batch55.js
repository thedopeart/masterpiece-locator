const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 55: tier 3 index 650-669 (20 artworks) - Monet Grainstacks + Canaletto Grand Canal
const newFaqs = {
  'claude-monet-grainstack-sunset': [
    { question: "How does sunset change the grainstack?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> bathed this grainstack in <strong>warm orange and violet sunset tones</strong>. His series demonstrated that color comes not from objects themselves but from the light surrounding them." }
  ],
  'claude-monet-grainstack-at-giverny': [
    { question: "Where were Monet's grainstacks located?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet's</strong></a> grainstacks stood in fields near his home at <strong>Giverny</strong> in Normandy. He could walk to them easily, painting the same subject repeatedly as weather and light shifted throughout the day." }
  ],
  'claude-monet-grainstack-in-sunshine': [
    { question: "How did critics receive the Grainstacks series?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet's</strong></a> Grainstacks exhibition at Durand-Ruel in 1891 was a <strong>commercial and critical success</strong>. All fifteen paintings sold within days, establishing series painting as his signature <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> approach." }
  ],
  'claude-monet-grainstack-in-the-sunlight': [
    { question: "What makes this grainstack different from others in the series?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted each grainstack under <strong>distinct lighting conditions</strong>. Full sunlight produces warm yellows and sharp shadows, while overcast skies create cooler, more diffused color harmonies." }
  ],
  'claude-monet-grainstack-in-the-sunlight-snow-effect': [
    { question: "How did Monet paint snow?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> showed that <strong>snow isn't simply white</strong> but reflects the sky's blue, purple, and pink tones. His snow-covered grainstacks reveal how brilliantly he understood color relationships in <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painting." }
  ],
  'claude-monet-grainstack-in-winter-misty-weather': [
    { question: "How does mist affect Monet's palette?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> used <strong>soft grays and muted tones</strong> to capture winter mist dissolving the grainstack's edges. These atmospheric conditions allowed him to push toward near-abstraction decades before abstract art emerged." }
  ],
  'claude-monet-grainstack-snow-effect-morning': [
    { question: "Why did Monet paint the same subject at different times?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> believed the <strong>true subject was light itself</strong>, not the object it fell upon. Morning snow light creates entirely different colors than afternoon snow, proving his point about perception." }
  ],
  'claude-monet-grainstack-sun-in-the-mist': [
    { question: "What atmospheric effect is captured here?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted the sun filtering through <strong>morning mist</strong>, creating a warm glow around the grainstack. This interplay of solid form and dissolving atmosphere fascinated him throughout his career." }
  ],
  'claude-monet-grainstacks-at-giverny-morning-effect': [
    { question: "How many grainstacks appear in some paintings?", answer: "Some canvases show <strong>two or more grainstacks</strong> together, while others isolate a single form. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> varied the composition to study how multiple forms interact with light differently." }
  ],
  'claude-monet-grainstacks-at-giverny-sunset': [
    { question: "What record prices have Monet's Grainstacks achieved?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet's</strong></a> Grainstack paintings have sold for over <strong>$100 million at auction</strong>. The series is among the most commercially valuable in <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> art history." }
  ],
  'claude-monet-grainstacks-in-the-sunlight-morning-effect': [
    { question: "What did Kandinsky say about Monet's Grainstacks?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> saw a Grainstack painting in 1896 and said he couldn't recognize the subject. This experience of <strong>pure color</strong> inspired his move toward abstraction." }
  ],
  'claude-monet-grainstacks-in-the-winter': [
    { question: "How did winter transform Monet's approach?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> worked outdoors in <strong>freezing conditions</strong> to capture winter light directly. He sometimes used multiple canvases in a single session, switching between them as the light changed." }
  ],
  'claude-monet-grainstacks-bright-sunlight': [
    { question: "What colors dominate the sunlit Grainstacks?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet's</strong></a> sunlit grainstacks glow with <strong>golden yellows, warm oranges, and violet shadows</strong>. He built these colors through layered brushstrokes of complementary hues placed side by side." }
  ],
  'claude-monet-grainstacks-snow-effect': [
    { question: "How many Grainstack paintings did Monet create?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted approximately <strong>25 Grainstack canvases</strong> in 1890-91. This was his first deliberate series, leading to later series of Rouen Cathedral, water lilies, and London's Parliament." }
  ],
  'canaletto-grand-canal-looking-northeast-from-the-palazzo-bal': [
    { question: "What made Canaletto's Venice views so popular?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto's</strong></a> precise <strong>architectural views</strong> of Venice were prized by English Grand Tour travelers as souvenirs. His use of a camera obscura helped achieve the sharp perspective that makes his cityscapes feel like windows into 18th-century Venice." }
  ],
  'canaletto-grand-canal-looking-east-from-the-campo-san-vio': [
    { question: "What is the Campo San Vio?", answer: "The <strong>Campo San Vio</strong> is a small square along Venice's Grand Canal near the Accademia. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> painted this and many other specific viewpoints, creating a comprehensive visual record of 18th-century Venice." }
  ],
  'canaletto-grand-canal-looking-from-palazzo-balbi': [
    { question: "What is the Palazzo Balbi?", answer: "The <strong>Palazzo Balbi</strong> is a late-Renaissance palace on the Grand Canal's bend, offering panoramic views. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> used this elevated vantage point repeatedly for its sweeping perspective of the canal's curve." }
  ],
  'canaletto-grand-canal-looking-north-east-toward-the-rialto-b': [
    { question: "Why was the Rialto Bridge a popular subject?", answer: "The <strong>Rialto Bridge</strong> was Venice's oldest and most famous Grand Canal crossing. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> painted it from multiple angles, capturing its distinctive stone arch and the bustling commercial activity around it." }
  ],
  'canaletto-grand-canal-looking-north-from-nethe-rialto-bridge': [
    { question: "How accurate are Canaletto's views?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto's</strong></a> views are <strong>remarkably accurate</strong> but not photographic. He sometimes adjusted building positions or widened canals for better composition, while maintaining the essential character of each location." }
  ],
  'canaletto-grand-canel-the-rialto-bridge-from-the-north': [
    { question: "Who collected Canaletto's paintings?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto's</strong></a> biggest patron was <strong>Joseph Smith</strong>, the British consul in Venice. Smith acquired hundreds of paintings and drawings, later sold to King George III, forming a core of the Royal Collection." }
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
