const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 34: tier 3 index 330-339
const newFaqs = {
  'fernand-leger-contrasts160of160forms': [
    { question: "What was Léger's Contrasts of Forms series?", answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Léger's</strong></a> \"Contrasts of Forms\" (1913) was a series of <strong>near-abstract paintings</strong> using cylinders, cones, and planes. They represent his most radical <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> experiments before WWI." }
  ],
  'edgar-degas-conversation': [
    { question: "How did Degas depict social interactions?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> observed <strong>social dynamics with a detached, almost voyeuristic eye</strong>. His conversation scenes capture body language and unspoken tension between figures, showing his psychological insight." }
  ],
  'thomas-gainsborough-conversation-in-a-park': [
    { question: "What is a conversation piece?", answer: "A <strong>conversation piece</strong> is a group portrait showing people in an informal setting. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> excelled at placing his subjects in parkland landscapes, blending portraiture with his love of natural scenery." }
  ],
  'peter-paul-rubens-copy-of-battle-of-anghiari-the-lost-painting-by-le': [
    { question: "What happened to Leonardo's original?", answer: "Leonardo's <strong>Battle of Anghiari</strong> mural was never completed and is now lost. <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> made this copy from surviving sketches, preserving a record of Leonardo's dynamic composition of tangled warriors and horses." }
  ],
  'gustave-moreau-copy-of-raphael39s-cherub': [
    { question: "Why did artists copy Old Masters?", answer: "Copying masterworks was essential <strong>academic training</strong> for centuries. <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a> studied Raphael's technique closely at the Louvre, absorbing classical composition before developing his own <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> style." }
  ],
  'thomas-gainsborough-cornard-wood-near-sudbury-suffolk': [
    { question: "What is special about this early Gainsborough?", answer: "Painted around 1748, it's one of <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough's</strong></a> earliest major works. This <strong>Suffolk woodland scene</strong> shows his lifelong love of landscape painting, influenced by Dutch 17th-century masters." }
  ],
  'annibale-carracci-corpse-of-christ': [
    { question: "What reform did the Carracci lead?", answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> led a reform of Italian painting, rejecting <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> artificiality in favor of <strong>naturalism and classical beauty</strong>. His work laid the foundation for the entire Baroque movement." }
  ],
  'frederic-edwin-church-cotopaxi-seen-from-ambato-ecuador': [
    { question: "What was Frederic Church known for?", answer: "<strong>Frederic Edwin Church</strong> was a leading Hudson River School painter who traveled to <strong>South America</strong> and the Arctic. His volcanic landscapes of Ecuador combine scientific observation with <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> grandeur." }
  ],
  'adriaen-van-ostade-country-concert': [
    { question: "Were music scenes popular in Dutch art?", answer: "<strong>Music-making scenes</strong> were common in Dutch Golden Age painting, symbolizing harmony, love, or social pleasure. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> rustic concerts show peasants making music with simple instruments." }
  ],
  'ernst-ludwig-kirchner-couple': [
    { question: "What group did Kirchner co-found?", answer: "<a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a> co-founded <strong>Die Brücke</strong> (The Bridge) in 1905, one of the first German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> groups. His angular, boldly colored figures capture the nervous energy of modern urban life." }
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
