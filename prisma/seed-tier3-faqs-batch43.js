const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 43: tier 3 index 420-429
const newFaqs = {
  'john-constable-dedham-church-and-vale': [
    { question: "Where is Dedham Vale?", answer: "<strong>Dedham Vale</strong> is in Suffolk, on the Essex border, now known as \"Constable Country.\" <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> painted this valley repeatedly throughout his career, capturing its churches, meadows, and changing skies." }
  ],
  'john-constable-dedham-vale-morning': [
    { question: "How did Constable paint the sky?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> made hundreds of <strong>sky studies</strong>, calling the sky \"the chief organ of sentiment\" in landscape painting. His careful observation of cloud formations brought unprecedented naturalism to <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape art." }
  ],
  'edwin-landseer-deer-and-deer-hounds-in-a-mountain-torrent': [
    { question: "Where did Landseer paint Highland scenes?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Landseer</strong></a> regularly visited the <strong>Scottish Highlands</strong>, painting stags, dogs, and mountain landscapes. His dramatic animal paintings made him Queen Victoria's favorite artist and a Victorian cultural icon." }
  ],
  'edgar-degas-degas-in-a-green-jacket': [
    { question: "Did Degas paint self-portraits?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted several <strong>self-portraits</strong> early in his career. They show a serious, introspective young man quite different from the mature observer of dancers, racehorses, and modern Parisian life he became." }
  ],
  'gustave-moreau-degas-portrait-in-the-uffizi': [
    { question: "Were Moreau and Degas connected?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a> and Degas met as young artists copying Old Masters in Italy. This portrait records their friendship before their careers diverged: Moreau toward <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, Degas toward modern life." }
  ],
  'akseli-gallen-kallela-d233masqu233e': [
    { question: "What does Démasquée mean?", answer: "\"<strong>Démasquée</strong>\" means \"Unmasked\" in French. <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> explored themes of revelation and identity, combining Finnish nationalist themes with European <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> aesthetics." }
  ],
  'peter-paul-rubens-democritus': [
    { question: "Who was Democritus?", answer: "<strong>Democritus</strong> was an ancient Greek philosopher known as the \"laughing philosopher\" for his cheerful view of life. <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> painted him as a contrast to the weeping Heraclitus, a popular <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> pairing." }
  ],
  'salvator-rosa-democritus-in-meditation': [
    { question: "What philosophical themes did Rosa explore?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> was drawn to <strong>Stoic and Cynic philosophy</strong>. His paintings of philosophers meditating among ruins reflect his own rebellious, intellectual personality and his love of melancholic, wild settings." }
  ],
  'correggio-departure-of-christ-from-mary-with-mary-and-martha': [
    { question: "What technique is Correggio famous for?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> pioneered <strong>soft, smoky modeling (sfumato)</strong> and dramatic ceiling frescoes with foreshortened figures. His tender religious scenes anticipated the Baroque with their emotional warmth and dynamic compositions." }
  ],
  'rembrandt-deposition-from-the-cross': [
    { question: "How does Rembrandt show the Deposition?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> depicts Christ being lowered from the cross with <strong>dramatic candlelight</strong>. The physical weight of the body and the grief of the mourners create an intimate, human version of this sacred subject." }
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
