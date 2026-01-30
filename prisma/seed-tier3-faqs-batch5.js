const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 5: tier 3 artworks index 40-49
const newFaqs = {
  'alonso-cano-a-king-of-spain': [
    { question: "Who was Alonso Cano?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter, sculptor, and architect. Often called the \"Spanish Michelangelo,\" he worked alongside <strong>Velázquez</strong> in the court of Philip IV." }
  ],
  'johannes-vermeer-a-lady-standing-at-a-virginal': [
    { question: "What is a virginal?", answer: "A <strong>virginal</strong> is a small keyboard instrument from the harpsichord family, popular in 17th-century Dutch homes. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> painted several scenes with musical instruments, using them to suggest refinement and leisure." }
  ],
  'rembrandt-a-young-woman-with-a-basket': [
    { question: "Is this a portrait or genre scene?", answer: "It blurs the line between the two. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> often used <strong>real models</strong> for everyday scenes, giving genre subjects the psychological depth of his formal portraits." }
  ],
  'van-gogh-a-zandmennik-house': [
    { question: "What period of Van Gogh's career is this from?", answer: "This is from <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh's</strong></a> early <strong>Dutch period</strong>, before his move to Paris. His works from this time use darker, earthier tones than the vivid palette he later became known for." }
  ],
  'maurice-quentin-de-la-tour-abbe-jeanjacques-huber': [
    { question: "What medium did La Tour specialize in?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>Maurice Quentin de La Tour</strong></a> was the leading <strong>pastel portraitist</strong> in 18th-century France. His soft, luminous technique captured the personalities of Enlightenment-era intellectuals and aristocrats." }
  ],
  'gustave-moreau-abduction-of-the-young-venetian-woman-by-cypriot-p': [
    { question: "What movement was Gustave Moreau linked to?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> was a key <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter. His richly detailed mythological and biblical scenes influenced later movements, and he taught both Matisse and Rouault." }
  ],
  'rembrandt-abraham-franz': [
    { question: "Who was Abraham Francen?", answer: "<strong>Abraham Francen</strong> was an Amsterdam apothecary and close friend of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>. This etched portrait shows Francen surrounded by art objects, reflecting his role as a collector and supporter of the artist." }
  ],
  'gustave-dore-abraham-journeying-into-the-land-of-canaan': [
    { question: "What was Gustave Doré famous for?", answer: "<a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Gustave Doré</strong></a> was one of the most prolific <strong>illustrators</strong> of the 19th century. He created thousands of engravings for the Bible, Dante's Inferno, and other literary classics." }
  ],
  'joaquin-sorolla-academic-study-from-life': [
    { question: "What style is Sorolla known for?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a> was a Spanish <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> known for sun-drenched <strong>beach scenes and Mediterranean light</strong>. Academic studies like this show the classical training that underpinned his luminous technique." }
  ],
  'jan-steen-action-proves-the-man': [
    { question: "What type of painter was Jan Steen?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> was a Dutch Golden Age <strong>genre painter</strong> famous for chaotic household scenes. The Dutch phrase \"a Jan Steen household\" still means a messy home, reflecting his rowdy, humorous subjects." }
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
