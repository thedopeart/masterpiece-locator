const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 13: tier 3 artworks index 120-129
const newFaqs = {
  'chaim-soutine-baker-boy': [
    { question: "What style did Chaim Soutine develop?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> was a Lithuanian-French <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> known for <strong>thickly painted, distorted figures</strong>. His portraits of workers and servants show raw emotional intensity that later influenced Willem de Kooning." }
  ],
  'jan-steen-baker-oostwaert-and-his-wife': [
    { question: "What makes Jan Steen's work distinctive?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> filled his paintings with <strong>humorous details and moral lessons</strong>. His portraits of tradespeople like this baker and his wife capture the warmth and humor of Dutch Golden Age domestic life." }
  ],
  'bartolome-murillo-baking-of-flat-cakes': [
    { question: "What types of scenes did Murillo paint?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo</strong></a> painted both religious works and <strong>genre scenes of everyday Spanish life</strong>. His depictions of common people working and eating brought warmth and dignity to subjects previously considered too lowly for serious painting." }
  ],
  'rembrandt-balaam39s-ass': [
    { question: "What biblical story is depicted?", answer: "It shows the Old Testament story where <strong>Balaam's donkey</strong> sees an angel blocking the road and refuses to move, while Balaam cannot see it. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this dramatic biblical narrative around 1626." }
  ],
  'andre-derain-ball-of-soldiers-in-suresnes': [
    { question: "What movement was André Derain part of?", answer: "<a href=\"/apps/masterpieces/artist/andre-derain\"><strong>André Derain</strong></a> co-founded <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a> with Matisse, using bold, non-naturalistic color. He later moved toward a more <strong>classical, structured style</strong> influenced by Cézanne and ancient art." }
  ],
  'edgar-degas-ballet-at-the-paris-opera': [
    { question: "How many ballet paintings did Degas create?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> produced over <strong>1,500 works depicting dancers</strong>, making ballet his most iconic subject. He attended rehearsals at the Paris Opera regularly, sketching dancers from backstage and unusual viewpoints." }
  ],
  'edgar-degas-ballet-dancers': [
    { question: "What medium did Degas use for his dancer works?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> worked in <strong>oil, pastel, monotype, and sculpture</strong> for his ballet subjects. In later years he increasingly preferred pastels, which let him blend vivid color with rapid, gestural drawing." }
  ],
  'edgar-degas-ballet-dancers-in-the-wings': [
    { question: "Why did Degas focus on backstage scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> preferred <strong>behind-the-scenes moments</strong> over polished performances. Dancers stretching, adjusting costumes, and waiting in the wings gave him candid, spontaneous compositions that felt modern and unrehearsed." }
  ],
  'edgar-degas-ballet-scene': [
    { question: "Was Degas an Impressionist?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> exhibited with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> but rejected the label. He preferred being called a <strong>Realist</strong>, emphasizing drawing and composition over the outdoor light effects that defined his peers." }
  ],
  'edgar-degas-ballet-school': [
    { question: "Where did Degas observe ballet classes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> had access to the <strong>Paris Opera's rehearsal rooms</strong> through friends and subscribers. His ballet school scenes show the grueling practice behind the graceful performances, with students under the watchful eye of their ballet master." }
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
