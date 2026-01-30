const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 23: tier 3 index 220-229
const newFaqs = {
  'valentin-serov-by-the-window-portrait-of-olga-trubnikova': [
    { question: "Who was Olga Trubnikova?", answer: "<strong>Olga Trubnikova</strong> became <a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov's</strong></a> wife. He painted this portrait of her by a window, using natural <strong>light falling across her face</strong> in a way that shows his mastery of tone and atmosphere." }
  ],
  'henri-toulouse-lautrec-c-leyran-view-of-the-vignards': [
    { question: "Did Toulouse-Lautrec paint landscapes?", answer: "<a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> is known for Parisian nightlife, but he painted <strong>landscapes of his family's estate</strong> at Céleyran early in his career. These rural scenes predate his famous cabaret and brothel paintings." }
  ],
  'jean-antoine-watteau-cajoler': [
    { question: "What genre did Watteau create?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> invented the <strong>fête galante</strong>, showing elegant figures in parkland settings. His <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> scenes of courtship and music capture a dreamy, bittersweet aristocratic world." }
  ],
  'matthias-grunewald-calvary': [
    { question: "What is Grünewald known for?", answer: "<strong>Matthias Grünewald</strong> created some of the most emotionally intense <strong>religious paintings</strong> of the Northern <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. His crucifixion scenes show unprecedented physical suffering, far removed from the idealized beauty of Italian art." }
  ],
  'berthe-morisot-calvary-after-veronese': [
    { question: "Why did Morisot copy Old Masters?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> studied by copying paintings in the Louvre, a standard practice for young artists. This copy after Veronese helped her develop the <strong>fluid brushwork</strong> she later applied to her own <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> subjects." }
  ],
  'piet-mondrian-calves-in-a-field-bordered-by-willow-trees': [
    { question: "How did Mondrian's art change over time?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> began painting <strong>naturalistic Dutch landscapes</strong> with animals and trees. Over two decades, he gradually abstracted nature into horizontal and vertical lines, eventually arriving at his iconic grid paintings." }
  ],
  'arnold-bocklin-campagna-landscape': [
    { question: "What was Arnold Böcklin known for?", answer: "<strong>Arnold Böcklin</strong> was a Swiss <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter famous for <strong>Isle of the Dead</strong>. His Italian landscapes combine real Roman Campagna scenery with a mythological, dreamlike atmosphere." }
  ],
  'francesco-guardi-campo-santi-giovanni-e-paolo': [
    { question: "What are Guardi's Venetian views like?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Guardi's</strong></a> vedute capture Venice with <strong>flickering, atmospheric brushwork</strong> that anticipates Impressionism. Unlike Canaletto's precise architectural views, Guardi's Venice shimmers and dissolves in light." }
  ],
  'van-gogh-canal': [
    { question: "Did Van Gogh paint many canals?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted <strong>Dutch and French canals</strong> throughout his career. These waterway scenes show his evolving style, from dark early Dutch drawings to the vivid, expressive colors of his Arles period." }
  ],
  'giotto-canonization-of-st-francis': [
    { question: "Why is Giotto important to art history?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> is considered the father of Western painting. He broke from flat Byzantine style to create <strong>three-dimensional, emotionally expressive figures</strong>, laying the foundation for the entire <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
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
