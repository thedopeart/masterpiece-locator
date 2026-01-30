const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 39: tier 3 index 380-389
const newFaqs = {
  'edgar-degas-dancers-backstage': [
    { question: "Why did Degas prefer backstage views?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> found the <strong>backstage world more honest</strong> than the stage. Behind the curtain, dancers' real effort, fatigue, and concentration showed the human cost of graceful performances." }
  ],
  'edgar-degas-dancers-climbing-the-stairs': [
    { question: "How did Degas use unusual perspectives?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> often chose <strong>elevated or angled viewpoints</strong> inspired by Japanese prints. Dancers climbing stairs creates a diagonal composition that adds energy and movement to a mundane action." }
  ],
  'edgar-degas-dancers-in-foyer': [
    { question: "What is the foyer in ballet context?", answer: "The <strong>foyer de la danse</strong> was a social space at the Paris Opera where dancers mingled with wealthy patrons. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> captured this intersection of art, money, and social power in several paintings." }
  ],
  'edgar-degas-dancers-in-pink': [
    { question: "What makes Degas's color choices distinctive?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> grouped dancers by <strong>costume color</strong>, creating harmonious compositions. Pink tutus against green-brown backgrounds became one of his most recognizable <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> color combinations." }
  ],
  'edgar-degas-dancers-in-the-rehearsal-hall': [
    { question: "What do Degas's rehearsal scenes reveal?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas's</strong></a> rehearsal paintings show the <strong>discipline and repetition</strong> behind ballet. The ballet master with his stick, the pianist in the corner, and dancers in various stages of practice create a documentary-like record." }
  ],
  'edgar-degas-dancers-in-the-wings': [
    { question: "What tension exists in wing scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> captured the <strong>nervous anticipation</strong> of dancers waiting in the wings before going onstage. These liminal moments between preparation and performance held deep artistic interest for him." }
  ],
  'edgar-degas-dancers-practicing-at-the-barre': [
    { question: "Why is the barre important in ballet?", answer: "The <strong>barre</strong> is fundamental to ballet training, used for warm-up exercises. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted many barre scenes, fascinated by the repetitive movements and the way dancers' bodies stretch and balance." }
  ],
  'edgar-degas-dancers-tying-shoes': [
    { question: "What everyday gestures fascinated Degas?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> was drawn to <strong>functional gestures</strong>: tying shoes, adjusting straps, scratching backs. These unglamorous moments humanize the dancers and give his work its distinctive naturalism." }
  ],
  'thomas-gainsborough-dancers-with-musicians-in-a-woodland-glade': [
    { question: "How did Gainsborough combine figures and landscape?", answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> loved painting <strong>figures in natural settings</strong>. His woodland scenes blend portraiture with his passion for landscape, creating an idyllic, pastoral vision of English country life." }
  ],
  'edgar-degas-dancers-pink-and-green': [
    { question: "How did photography influence Degas?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> was an amateur photographer who applied photographic techniques to painting: <strong>cropped compositions, unusual angles</strong>, and figures cut off at the frame's edge, giving his work a modern, snapshot quality." }
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
