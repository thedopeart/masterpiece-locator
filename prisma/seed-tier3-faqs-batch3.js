const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 3: tier 3 artworks index 20-29
const newFaqs = {
  'john-constable-a-church-porch': [
    { question: "What subjects did Constable prefer?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>John Constable</strong></a> devoted his career to painting the <strong>English countryside</strong>, especially around Suffolk and Hampstead. His church studies show his attention to architecture within <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape settings." }
  ],
  'john-william-godward-a-classical-beauty': [
    { question: "What era inspired Godward's paintings?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> drew inspiration from <strong>ancient Greece and Rome</strong>, painting women in classical dress against marble settings. He was one of the last <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicist</strong></a> painters, working well into the 20th century." }
  ],
  'william-holman-hunt-a-converted-british-family-sheltering-a-christian-': [
    { question: "What movement did William Holman Hunt co-found?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> co-founded the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848 with Rossetti and Millais. This early painting shows his commitment to <strong>historical accuracy and vivid detail</strong>." }
  ],
  'claude-monet-a-corner-of-the-studio': [
    { question: "When did Monet paint this studio scene?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted this early in his career when he was still developing his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> style. <strong>Interior scenes</strong> are rare in his work since he preferred painting outdoors." }
  ],
  'rembrandt-a-cottage-with-white-pales': [
    { question: "Did Rembrandt often draw landscapes?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> produced many <strong>landscape drawings and etchings</strong> of the Dutch countryside around Amsterdam. These works capture rural buildings, trees, and waterways with loose, expressive lines." }
  ],
  'max-liebermann-a-country-brasserie-brannenburg-bavaria': [
    { question: "What style did Max Liebermann champion?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Max Liebermann</strong></a> was Germany's leading <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter. He favored <strong>outdoor leisure scenes</strong> with dappled light, drawing influence from French painters he admired during visits to Paris." }
  ],
  'camille-pissarro-a-creek-in-saint-thomas-antilles': [
    { question: "Why did Pissarro paint the Caribbean?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> was born on <strong>Saint Thomas</strong> in the Danish West Indies. His early Caribbean landscapes predate his move to France, where he became a founding <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>." }
  ],
  'aelbert-cuyp-a-distant-view-of-dordrecht-with-a-milkmaid-and-fo': [
    { question: "What is distinctive about Cuyp's landscapes?", answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a> is known for his <strong>golden, warm light</strong> in Dutch landscapes. His scenes around Dordrecht often feature cattle and rivers bathed in a luminous glow inspired by Italian painters." }
  ],
  'pieter-de-hooch-a-dutch-courtyard': [
    { question: "What was Pieter de Hooch's specialty?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> excelled at painting <strong>domestic interiors and courtyards</strong> with carefully rendered light. His orderly compositions of everyday Dutch life rivaled those of his contemporary Vermeer." }
  ],
  'adriaen-van-ostade-a-fight': [
    { question: "What scenes did Adriaen van Ostade typically paint?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> specialized in <strong>peasant tavern scenes</strong>, often showing rowdy gatherings, fights, and drinking. He was a pupil of Frans Hals and a key Dutch Golden Age genre painter." }
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
