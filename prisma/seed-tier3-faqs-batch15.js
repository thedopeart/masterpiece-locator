const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 15: tier 3 artworks index 140-149
const newFaqs = {
  'francis-picabia-barges-on-the-loing-morning-effect': [
    { question: "What river is the Loing?", answer: "The <strong>Loing</strong> is a tributary of the Seine in central France. <a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia</strong></a> and many <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> painted along its banks near Moret-sur-Loing, where Alfred Sisley also famously worked." }
  ],
  'van-gogh-barn-and-farmhouse': [
    { question: "When did Van Gogh paint rural Dutch buildings?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted many <strong>barns and farmhouses</strong> during his early years in the Netherlands (1881-85). These dark, earthy works predate the vivid colors of his later French period." }
  ],
  'john-singer-sargent-bartholomy-magagnosco': [
    { question: "What was Sargent known for?", answer: "<a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a> was the leading <strong>portrait painter</strong> of the Gilded Age. His fluid brushwork and ability to capture personality made him the most sought-after portraitist in America and Europe." }
  ],
  'giovanni-battista-moroni-bartolommeo-bonghi': [
    { question: "Why are Moroni's portraits valued today?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Moroni's</strong></a> portraits feel strikingly modern because of their <strong>direct, honest characterization</strong>. Unlike idealized court portraits, his subjects look like real people, making them feel approachable across centuries." }
  ],
  'caravaggio-basket-of-fruit': [
    { question: "Why is this still life significant?", answer: "It's one of the earliest known <strong>independent still life paintings</strong> in European art. <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> included overripe and decaying fruit, suggesting the passage of time, a theme central to his <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> realism." }
  ],
  'claude-monet-bathers-at-la-grenouillere': [
    { question: "What is La Grenouillère?", answer: "<strong>La Grenouillère</strong> was a popular bathing spot on the Seine near Paris. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> and Renoir painted side by side here in 1869, producing works that helped launch the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> movement." }
  ],
  'edgar-degas-bathers-on-the-grass': [
    { question: "How do Degas's bathers differ from earlier nudes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> depicted bathers in <strong>natural, unglamorous poses</strong> rather than classical idealized positions. He said he wanted to show women \"as if you looked through a keyhole,\" capturing private, unguarded moments." }
  ],
  'tintoretto-battle-of-asola': [
    { question: "What was Tintoretto's painting style?", answer: "<a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> combined <strong>dramatic lighting with rapid, energetic brushwork</strong>. His battle scenes are full of swirling movement and theatrical light, pushing Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting toward the Baroque." }
  ],
  'nicolas-poussin-battle-of-gideon-against-the-midianites': [
    { question: "What biblical story is shown?", answer: "It depicts <strong>Gideon's victory</strong> over the Midianites from the Book of Judges. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> used the subject to explore dramatic composition and classical heroism in his ordered, intellectual <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." }
  ],
  'joachim-patinir-battle-of-pavia': [
    { question: "Who was Joachim Patinir?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Joachim Patinir</strong></a> was a Flemish painter considered the first Western artist to specialize in <strong>landscape painting</strong>. His panoramic views with tiny figures set a new standard for landscape as an independent genre." }
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
