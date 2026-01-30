const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 31: tier 3 index 300-309
const newFaqs = {
  'rembrandt-christ-seated-disputing-with-the-doctors': [
    { question: "How many biblical subjects did Rembrandt depict?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> depicted <strong>hundreds of biblical scenes</strong> across paintings, etchings, and drawings. The New Testament was his richest source, particularly the life of Christ and parables." }
  ],
  'tintoretto-christ-washing-the-feet-of-his-disciples': [
    { question: "Where did Tintoretto display this?", answer: "<a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> painted this for the <strong>Scuola Grande di San Rocco</strong> in Venice, where he created an entire cycle of paintings. His dramatic diagonal compositions and theatrical lighting define Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>late Renaissance</strong></a> painting." }
  ],
  'christs-entry-into-brussels': [
    { question: "What is this painting about?", answer: "<strong>James Ensor</strong> imagined Christ's second coming in modern Brussels as a <strong>chaotic carnival parade</strong> with masked figures and political banners. Painted in 1889, it was so radical that even his avant-garde circle refused to exhibit it." }
  ],
  'lucas-cranach-elder-christoph-von-scheurl': [
    { question: "What types of portraits did Cranach paint?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-the-elder\"><strong>Cranach</strong></a> was court painter to the Electors of Saxony and painted <strong>portraits of reformers, nobility, and scholars</strong>. His direct, unflattering likenesses preserve the faces of the German Reformation." }
  ],
  'van-gogh-churches-at-petersham-and-turnham-green': [
    { question: "Why did Van Gogh draw English churches?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> drew these churches during his <strong>time in England (1873-76)</strong>. Before becoming an artist, he worked as an art dealer and teacher near London, and churches reflected his growing religious interests." }
  ],
  'frederic-leighton-cimabue39s-celebrated-madonna-carried-in-processio': [
    { question: "What event does this depict?", answer: "It shows the medieval painter <strong>Cimabue's Rucellai Madonna</strong> being carried triumphantly through Florence's streets. <a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Leighton</strong></a> painted this grand processional scene as his first Royal Academy success in 1855." }
  ],
  'alexandre-cabanel-cincinnatus-receiving-the-ambassadors-from-rome': [
    { question: "Who was Cincinnatus?", answer: "<strong>Cincinnatus</strong> was a Roman farmer called to lead Rome as dictator during a military crisis, then famously returned to his farm after victory. <a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> depicted this story of civic virtue in grand <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> style." }
  ],
  'edward-burne-jones-cinderella': [
    { question: "How did Burne-Jones approach fairy tales?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> brought the same <strong>medieval-inspired beauty</strong> to fairy tales that he applied to myth and legend. His Cinderella has the dreamy, otherworldly quality typical of his <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> later work." }
  ],
  'circe-and-lovers-dossi': [
    { question: "Who was Dosso Dossi?", answer: "<strong>Dosso Dossi</strong> was a Ferrarese <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter who blended Venetian color with <strong>fantastical literary subjects</strong>. His paintings of Circe and other mythological enchantresses glow with mysterious, poetic atmosphere." }
  ],
  'parmigianino-circe-and-the-companions-of-ulysses': [
    { question: "What is Parmigianino known for?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> was a leading <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painter known for <strong>elongated, elegant figures</strong>. His Self-Portrait in a Convex Mirror is one of art history's most inventive paintings." }
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
