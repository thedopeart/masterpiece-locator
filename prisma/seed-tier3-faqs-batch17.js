const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 17: tier 3 artworks index 160-169
const newFaqs = {
  'rembrandt-beggar-leaning-on-a-stick-facing-left': [
    { question: "How large are Rembrandt's beggar etchings?", answer: "Most of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> beggar prints are quite small, often just a few inches tall. Despite their <strong>tiny scale</strong>, they capture complete figures with remarkable expressiveness and economy of line." }
  ],
  'rembrandt-beggar-man-and-beggar-woman-conversing': [
    { question: "What can we learn from these prints about 17th-century Amsterdam?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> beggar etchings document the <strong>poverty visible on Amsterdam's streets</strong> during the Dutch Golden Age. They provide a counterpoint to the era's prosperous merchant portraits and lavish still lifes." }
  ],
  'rembrandt-beggar-man-and-woman-behind-a-bank': [
    { question: "Were beggars a common art subject?", answer: "Depicting beggars had a long tradition in Northern European art, from Bruegel onward. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> brought unusual <strong>dignity and individuality</strong> to these figures, treating them as worthy subjects for serious art." }
  ],
  'rembrandt-beggar-seated-warming-his-hands-at-a-chafing-dish': [
    { question: "What printing technique did Rembrandt use?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> used <strong>etching and drypoint</strong>, scratching designs into copper plates with needles. He experimented constantly with inking and paper to create varied tonal effects across different impressions of the same plate." }
  ],
  'rembrandt-beggar-with-his-left-hand-extended': [
    { question: "How many etchings did Rembrandt produce?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created roughly <strong>300 etchings</strong> over his career, covering portraits, landscapes, biblical scenes, and genre subjects. His prints were widely collected and traded across Europe even during his lifetime." }
  ],
  'rembrandt-beggar-woman-leaning-on-a-stick': [
    { question: "Did Rembrandt sketch from life for these prints?", answer: "Yes, <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> frequently sketched <strong>real people on the streets</strong> of Amsterdam and Leiden. His beggar prints have a directness that comes from close observation rather than studio invention." }
  ],
  'felicien-rops-behind-the-scenes': [
    { question: "What subjects was Félicien Rops known for?", answer: "<strong>Félicien Rops</strong> was a Belgian artist known for <strong>provocative, erotic prints</strong> that challenged Victorian morality. His work explored the intersection of sexuality, death, and social satire with dark humor." }
  ],
  'jacques-louis-david-belisarius-begging-for-alms': [
    { question: "Who was Belisarius?", answer: "<strong>Belisarius</strong> was a great Byzantine general who, according to legend, was blinded and reduced to begging by Emperor Justinian. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> used this story to explore themes of injustice and fallen greatness in <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> style." }
  ],
  'john-martin-belshazzar39s-feast': [
    { question: "What is the biblical scene depicted?", answer: "It shows the Old Testament story where mysterious <strong>writing appears on the wall</strong> during King Belshazzar's feast, foretelling the fall of Babylon. John Martin was famous for apocalyptic, vast-scale biblical paintings." }
  ],
  'jacob-van-ruisdael-bentheim-castle': [
    { question: "What was Jacob van Ruisdael known for?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a> was the greatest <strong>Dutch landscape painter</strong> of the Golden Age. He painted Bentheim Castle multiple times, dramatizing its hilltop position to create a more imposing composition than reality." }
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
