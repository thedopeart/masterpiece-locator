const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 35: tier 3 index 340-349
const newFaqs = {
  'henri-toulouse-lautrec-crew-at-bosc': [
    { question: "What subjects did Toulouse-Lautrec prefer?", answer: "<a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> is best known for <strong>Parisian nightlife</strong>: cabarets, dance halls, and brothels. Early works like this show a different side, capturing rural life at his family's estate." }
  ],
  'winslow-homer-croquet-scene': [
    { question: "What was Winslow Homer's significance?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a> was one of America's greatest painters. His early career featured <strong>elegant leisure scenes</strong> like croquet games before he turned to powerful marine and wilderness subjects." }
  ],
  'vasily-polenov-crossing-of-the-river-oyat': [
    { question: "Who was Vasily Polenov?", answer: "<strong>Vasily Polenov</strong> was a Russian landscape painter who brought <a href=\"/apps/masterpieces/movement/impressionism\"><strong>plein air painting</strong></a> techniques to Russia. His tranquil river scenes influenced younger Russian artists including Levitan and Korovin." }
  ],
  'pierre-auguste-renoir-crown-of-roses': [
    { question: "How did Renoir paint flowers?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> treated flowers with the same <strong>soft, luminous brushwork</strong> he used for skin. His floral works blur individual petals into masses of glowing color, typical of his mature <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> style." }
  ],
  'anthony-van-dyck-crowning-with-thorns': [
    { question: "What was Van Dyck's influence on art?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a> transformed <strong>portrait painting</strong> with his elegant, aristocratic style. His religious works combine his master <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens's</strong></a> <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> energy with refined grace." }
  ],
  'bernardino-luini-cruciferous-christus': [
    { question: "What does 'cruciferous' mean in this context?", answer: "It means \"<strong>cross-bearing</strong>.\" <a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Luini</strong></a> shows Christ carrying the cross with the gentle, restrained emotion characteristic of his Leonardesque style, avoiding graphic violence in favor of quiet suffering." }
  ],
  'cimabue-crucifix': [
    { question: "Why is Cimabue's Crucifix important?", answer: "<strong>Cimabue's</strong> crucifixes represent the transition from flat <strong>Byzantine art to early naturalism</strong>. His painted crosses introduced more human emotion and physical presence than earlier medieval versions, paving the way for Giotto." }
  ],
  'masaccio-crucifixion': [
    { question: "Why is Masaccio important?", answer: "<a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> revolutionized painting with <strong>realistic perspective and solid human figures</strong>. Despite dying at just 26, he established the foundations of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting that later artists like Michelangelo studied." }
  ],
  'rogier-van-der-weyden-crucifixion': [
    { question: "What makes Van der Weyden's art emotional?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> expressed <strong>intense grief and devotion</strong> through his figures' faces and gestures. His crucifixion scenes achieve an emotional depth that made him the most influential Netherlandish painter after van Eyck." }
  ],
  'franz-von-stuck-crucifixion': [
    { question: "What movement was Franz von Stuck part of?", answer: "<strong>Franz von Stuck</strong> was a German <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> and Art Nouveau painter. His dark, theatrical compositions of <strong>mythology and religion</strong> influenced his students Klee and Kandinsky at the Munich Academy." }
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
