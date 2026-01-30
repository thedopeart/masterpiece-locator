const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 7: tier 3 artworks index 60-69
const newFaqs = {
  'fra-angelico-adoration-of-the-magi': [
    { question: "What makes Fra Angelico's style distinctive?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> combined <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> spatial depth with <strong>luminous gold backgrounds</strong> and jewel-like colors. His Adoration scenes radiate a quiet devotion that reflects his life as a Dominican friar." }
  ],
  'bernardino-luini-adoration-of-the-magi': [
    { question: "Who influenced Bernardino Luini?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> was heavily influenced by <strong>Leonardo da Vinci</strong>. His soft sfumato technique and gentle facial expressions closely follow Leonardo's style, making him one of the most faithful Milanese followers of the master." }
  ],
  'gentile-da-fabriano-adoration-of-the-magi-altarpiece': [
    { question: "Why is this altarpiece significant?", answer: "This 1423 altarpiece is one of the finest examples of the <strong>International Gothic</strong> style. <a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> packed it with lavish gold, intricate fabrics, and a magnificent procession that showcases late medieval craftsmanship." }
  ],
  'gentile-da-fabriano-adoration-of-the-magi-altarpiece-left-hand-predell': [
    { question: "What is a predella panel?", answer: "A <strong>predella</strong> is a horizontal strip of small paintings at the base of an altarpiece. <a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> used this space to depict related narrative scenes, here showing the Nativity as a companion to the main Adoration above." }
  ],
  'gentile-da-fabriano-adoration-of-the-magi-from-the-strozzi-chapel-in-s': [
    { question: "Where was this originally displayed?", answer: "It was commissioned for the <strong>Strozzi Chapel</strong> in Santa Trinita, Florence. <a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created it in 1423 for the wealthy banker Palla Strozzi. It's now at the Uffizi Gallery." }
  ],
  'hans-memling-adoration-of-the-magi-whole-triptych': [
    { question: "What format is this work?", answer: "It's a <strong>triptych</strong>, a three-paneled altarpiece that could be opened and closed. <a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> was a leading painter in Bruges who produced many such devotional works for churches and private patrons." }
  ],
  'bartolome-murillo-adoration-of-the-shepherds': [
    { question: "Where did Murillo primarily work?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo</strong></a> spent most of his career in <strong>Seville, Spain</strong>. He was the most popular Spanish painter of his era, known for tender religious compositions and genre scenes of street children." }
  ],
  'el-greco-adoration-of-the-shepherds': [
    { question: "What makes El Greco's style unique?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> combined Byzantine icon traditions with <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> elongation and dramatic lighting. His Adoration features <strong>glowing, otherworldly figures</strong> that seem lit from within, a hallmark of his late work in Toledo." }
  ],
  'umberto-boccioni-adriana-bisi-fabbri': [
    { question: "What movement did Boccioni help found?", answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a> was a leading <a href=\"/apps/masterpieces/movement/futurism\"><strong>Futurist</strong></a> painter and sculptor. This portrait predates his Futurist phase, showing his earlier <strong>Divisionist technique</strong> before he embraced speed and dynamism as central themes." }
  ],
  'peter-paul-rubens-aeneas-and-his-family-departing-from-troy': [
    { question: "What story does this painting depict?", answer: "It shows <strong>Aeneas fleeing the burning city of Troy</strong> carrying his elderly father Anchises, from Virgil's Aeneid. <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> brought his trademark <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> energy to this classical subject with dynamic movement and rich color." }
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
