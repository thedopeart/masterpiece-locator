const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 33: tier 3 index 320-329
const newFaqs = {
  'pierre-auguste-renoir-colonel-barton-howard-jenks': [
    { question: "Did Renoir paint many portraits?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted <strong>hundreds of portraits</strong> throughout his career. While known for sun-dappled leisure scenes, commissioned portraits provided steady income and let him explore character and light." }
  ],
  'george-stubbs-colonel-pocklington-with-his-sisters': [
    { question: "How did Stubbs combine portraiture and animal painting?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a> often painted <strong>landowners with their horses and dogs</strong>. His anatomical knowledge gave animals the same dignified treatment as human subjects, making his conversation pieces uniquely English." }
  ],
  'emanuel-leutze-columbus-before-the-queen': [
    { question: "What historical moment is shown?", answer: "It depicts <strong>Christopher Columbus presenting his voyage plan</strong> to Queen Isabella of Spain. Leutze specialized in American historical subjects, combining careful research with dramatic <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> staging." }
  ],
  'paul-signac-comblat-castle-the-pre': [
    { question: "What technique did Signac develop?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Paul Signac</strong></a> was the leading proponent of <strong>Neo-Impressionism</strong> (Pointillism) after Seurat's death. He applied pure color in small dots that blend optically, creating vibrant, luminous landscapes." }
  ],
  'adolph-menzel-commander-with-soldiers': [
    { question: "What military period did Menzel depict?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Menzel</strong></a> was fascinated by <strong>Frederick the Great's Prussian army</strong>. His military paintings combine historical accuracy with vivid storytelling, making him Germany's most important history painter." }
  ],
  'fra-angelico-compagnia-di-san-francesco-altarpiece': [
    { question: "What was this altarpiece made for?", answer: "It was painted for the <strong>Compagnia di San Francesco</strong>, a Florentine confraternity. <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created many altarpieces for churches and religious communities with his luminous, devotional <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> style." }
  ],
  'akseli-gallen-kallela-conceptio-artis': [
    { question: "What does 'Conceptio Artis' mean?", answer: "The Latin title means \"<strong>Conception of Art</strong>.\" <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> explored how artistic inspiration begins, blending Finnish <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> themes with Art Nouveau decorative elements." }
  ],
  'titian-concert-champetre': [
    { question: "What is the Concert Champêtre?", answer: "This <strong>pastoral concert in a landscape</strong> blends nude figures with clothed musicians in an idealized setting. Attributed to both <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> and Giorgione, it inspired Manet's famous Déjeuner sur l'herbe centuries later." }
  ],
  'giotto-confirmation-of-the-rule': [
    { question: "What Franciscan event is shown?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> depicts <strong>Pope Honorius III approving</strong> the Franciscan Rule in 1223. Part of his famous fresco cycle at the Basilica of San Francesco in Assisi, it's a landmark of early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> narrative painting." }
  ],
  'john-william-waterhouse-consulting-the-oracle': [
    { question: "What oracle is depicted?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> shows women consulting a <strong>Greek oracle</strong>, likely at Delphi. His classical scenes combine <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> detail with atmospheric storytelling and idealized feminine beauty." }
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
