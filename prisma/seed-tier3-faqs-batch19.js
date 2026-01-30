const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 19: tier 3 artworks index 180-189
const newFaqs = {
  'blue-interior-backer': [
    { question: "Who was Harriet Backer?", answer: "<strong>Harriet Backer</strong> was a Norwegian painter known for <strong>luminous interior scenes</strong>. She studied in Paris and Munich, bringing Impressionist light effects back to Norwegian art while focusing on domestic spaces and church interiors." }
  ],
  'egon-schiele-boating': [
    { question: "What defines Egon Schiele's style?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> was an Austrian <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> known for <strong>angular, raw figure drawings</strong>. His landscapes like this boating scene show a surprisingly lyrical side, with flattened perspectives and decorative patterns." }
  ],
  'george-caleb-bingham-boatmen-on-the-missouri': [
    { question: "What subjects did Bingham paint?", answer: "<strong>George Caleb Bingham</strong> was an American painter of <strong>frontier life along the Missouri River</strong>. His flatboat scenes captured the democratic spirit of westward expansion and remain iconic images of 19th-century American life." }
  ],
  'umberto-boccioni-boats-in-sunlight': [
    { question: "How did Futurism differ from Impressionism?", answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Boccioni</strong></a> and the <a href=\"/apps/masterpieces/movement/futurism\"><strong>Futurists</strong></a> wanted to capture <strong>speed, energy, and modern life</strong> rather than fleeting light. They used fragmented forms and dynamic lines to convey motion and the excitement of the machine age." }
  ],
  'caspar-david-friedrich-bohemian-landscape-with-mount-milleschauer': [
    { question: "What does Friedrich's landscape symbolize?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> infused landscapes with <strong>spiritual meaning</strong>. His misty mountains and vast skies evoke the sublime, reflecting the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> belief that nature reveals something greater than itself." }
  ],
  'camille-corot-boidguillaumi-near-rouen-a-gate-flanked-by-two-pos': [
    { question: "What was Corot's influence on later art?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> bridged <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. His soft, silvery <strong>plein air landscapes</strong> directly influenced Monet, Pissarro, and Berthe Morisot." }
  ],
  'el-lissitzky-book-cover-for-39chad-gadya39-by-el-lissitzky': [
    { question: "What is Chad Gadya?", answer: "\"<strong>Chad Gadya</strong>\" (\"One Little Goat\") is a traditional Jewish Passover song. El Lissitzky illustrated it in 1919 using bold <a href=\"/apps/masterpieces/movement/constructivism\"><strong>Constructivist</strong></a> and folk art influences, creating a landmark of modern Jewish art." }
  ],
  'claude-monet-bordighera': [
    { question: "Why did Monet visit Bordighera?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> traveled to <strong>Bordighera on the Italian Riviera</strong> in 1884, captivated by its exotic vegetation and brilliant Mediterranean light. He wrote to his wife about struggling to capture colors he'd never seen before." }
  ],
  'claude-monet-bordighera-italy': [
    { question: "How many paintings did Monet make in Bordighera?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> produced about <strong>50 paintings</strong> during his three-month stay in Bordighera. The vibrant blues, pinks, and greens of the Italian coast pushed his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> palette to new intensity." }
  ],
  'claude-monet-bordighera-the-house-of-gardener': [
    { question: "What attracted Impressionists to the Mediterranean?", answer: "The <strong>intense Mediterranean sunlight</strong> produced vivid colors and sharp shadows unlike anything in northern France. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> and Renoir both traveled south to explore how light transformed landscape into color." }
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
