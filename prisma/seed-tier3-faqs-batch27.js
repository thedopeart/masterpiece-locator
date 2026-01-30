const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 27: tier 3 index 260-269
const newFaqs = {
  'pierre-bonnard-child-eating-cherries': [
    { question: "How did Bonnard use color?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> built up <strong>layers of saturated color</strong> that vibrate against each other. His intimate domestic subjects shimmer with warmth, earning him the title \"painter of happiness\" among 20th-century colorists." }
  ],
  'children-at-window-waldmuller': [
    { question: "Who was Ferdinand Georg Waldmüller?", answer: "<strong>Waldmüller</strong> was an Austrian painter known for <strong>luminous genre scenes and portraits</strong>. His bright, naturalistic style and attention to light made him a leading figure of the Biedermeier period in Vienna." }
  ],
  'max-liebermann-children-bathing-in-the-sea': [
    { question: "What outdoor scenes did Liebermann favor?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> loved painting <strong>children at the beach</strong> and in gardens. His Dutch and German seaside scenes capture the freedom of outdoor play with quick, light-filled <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> brushwork." }
  ],
  'adriaen-van-ostade-children-playing-in-a-barn': [
    { question: "Where did Van Ostade spend his career?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> spent his entire career in <strong>Haarlem</strong>, painting peasant life with warmth and humor. His barn interiors glow with soft light falling on children at play and adults at work." }
  ],
  'fernand-leger-chimneys-on-rooftops': [
    { question: "How did Léger's style develop?", answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a> moved from <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> toward bold, <strong>tubular forms</strong> inspired by machinery and modern life. His urban rooftop scenes celebrate industrial geometry with flat, vivid colors." }
  ],
  'paul-gauguin-china-asters-hat-and-book': [
    { question: "How did Gauguin's still lifes differ from tradition?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> used still lifes to experiment with <strong>flat color areas and bold outlines</strong>. Unlike traditional Dutch flower paintings, his arrangements are deliberately simplified and decorative, pushing toward Post-Impressionist abstraction." }
  ],
  'leon-bonnat-christ': [
    { question: "Who was Léon Bonnat?", answer: "<strong>Léon Bonnat</strong> was a French academic painter and portraitist who taught many future avant-garde artists. His <strong>realistic religious paintings</strong> brought an almost photographic intensity to biblical subjects." }
  ],
  'bernardino-luini-christ-among-the-doctors': [
    { question: "What biblical scene is shown?", answer: "It depicts the 12-year-old <strong>Jesus debating with scholars</strong> in the Temple of Jerusalem. <a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Luini</strong></a> follows Leonardo's approach with gentle expressions and soft modeling to create a serene, contemplative scene." }
  ],
  'rembrandt-christ-and-st-mary-magdalene-at-the-tomb': [
    { question: "What moment is depicted?", answer: "It shows the <strong>Noli Me Tangere</strong> scene where the risen Christ appears to Mary Magdalene. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this tender encounter with warm light and deep emotional connection between the figures." }
  ],
  'titian-christ-and-the-adulteress': [
    { question: "What biblical story is this?", answer: "It shows <strong>Jesus confronting accusers</strong> who want to stone a woman for adultery, telling them \"He who is without sin, let him cast the first stone.\" <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> renders the moral drama with his signature Venetian color." }
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
