const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 51: tier 3 index 570-589 (20 artworks)
const newFaqs = {
  'john-everett-millais-ferdinand-lured-by-ariel': [
    { question: "What Shakespeare play is referenced?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> depicted Ferdinand from <strong>The Tempest</strong>, lured by the sprite Ariel. This early <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> work shows vivid color and painstaking botanical detail." }
  ],
  'pierre-bonnard-figures-in-the-street': [
    { question: "How did Bonnard paint urban scenes?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> captured <strong>Parisian street life</strong> with quick, snapshot-like compositions influenced by Japanese prints. His figures merge into patterns of light and movement rather than standing as formal portraits." }
  ],
  'paul-cezanne-fisherman-on-the-rocks': [
    { question: "How does this relate to Cézanne's landscapes?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted figures within <strong>rocky Provençal landscapes</strong>, treating human forms with the same structural approach he gave to mountains and trees. Nature and figure become equally geometric." }
  ],
  'fisherman-presenting-ring-doge': [
    { question: "What Venetian legend is shown?", answer: "<strong>Paris Bordone</strong> depicted a fisherman presenting <strong>St. Mark's ring to the Doge</strong>, a popular Venetian legend. The painting showcases the rich color and architectural grandeur of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Venetian school." }
  ],
  'gustave-caillebotte-fishermen-on-the-banks-of-the-yerres': [
    { question: "Where is the Yerres River?", answer: "The <strong>Yerres</strong> flows through southeast Paris suburbs where <a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Caillebotte's</strong></a> family owned property. He painted the river's banks repeatedly, combining <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light with his characteristic realist precision." }
  ],
  'henri-toulouse-lautrec-fishing-boat': [
    { question: "Did Toulouse-Lautrec paint seascapes?", answer: "<a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> occasionally painted <strong>maritime subjects</strong> during visits to the coast. These works are rare departures from his typical Parisian nightlife scenes." }
  ],
  'albert-bierstadt-fishing-boats-at-capri': [
    { question: "Did Bierstadt paint European scenes?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> traveled to <strong>Italy</strong> and painted Mediterranean coastal scenes alongside his famous American West landscapes. His luminous treatment of light works equally well with Italian skies." }
  ],
  'john-singer-sargent-fishing-for-oysters-at-cancale': [
    { question: "What is Cancale known for?", answer: "<strong>Cancale</strong> is a fishing village in Brittany famous for its oyster beds. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted this early plein-air work there, capturing the silvery <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light of the Breton coast." }
  ],
  'nikolai-ge-florence': [
    { question: "Who was Nikolai Ge?", answer: "<strong>Nikolai Ge</strong> was a Russian painter who studied in Italy and became known for <strong>dramatic biblical and historical</strong> compositions. He later became close to Leo Tolstoy and painted works reflecting Tolstoy's moral philosophy." }
  ],
  'henri-fantin-latour-flowers': [
    { question: "What made Fantin-Latour's flower paintings popular?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> painted <strong>flowers with soft, luminous realism</strong> that made them hugely popular with English collectors. His bouquets achieve a quiet perfection that bridges Romanticism and Impressionism." }
  ],
  'henri-fantin-latour-flowers-camelias-and-tulips': [
    { question: "What flowers did Fantin-Latour prefer?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> painted <strong>roses, camellias, tulips, and chrysanthemums</strong> most often. He arranged them with careful attention to color harmony, creating still lifes that feel both natural and composed." }
  ],
  'henri-fantin-latour-flowers-cyclamens': [
    { question: "How did Fantin-Latour's style differ from Impressionists?", answer: "Though friends with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>, <a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> kept a <strong>tighter, more traditional technique</strong>. His flower paintings use soft focus and muted backgrounds rather than broken brushwork and bright outdoor light." }
  ],
  'adolph-menzel-flute-concert-with-frederick-the-great-at-sanssouc': [
    { question: "Who was Frederick the Great as a musician?", answer: "<strong>Frederick the Great</strong> was an accomplished flautist who held regular concerts at Sanssouci Palace. <strong>Adolph Menzel</strong> painted this scene with detailed historical accuracy, capturing the candlelit elegance of 18th-century Prussian court life." }
  ],
  'caspar-david-friedrich-fog': [
    { question: "What role does fog play in Friedrich's art?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> used <strong>fog and mist</strong> to dissolve boundaries between earth and sky, creating a sense of the infinite. This atmospheric effect is central to his <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> vision of nature's mystery." }
  ],
  'hans-holbein-younger-folly-at-the-lectern': [
    { question: "What is this illustration from?", answer: "<a href=\"/apps/masterpieces/artist/hans-holbein-the-younger\"><strong>Holbein</strong></a> illustrated <strong>Erasmus's \"Praise of Folly\"</strong> with marginal drawings in a printed copy. These witty sketches show his graphic skill and his friendship with the great humanist scholar." }
  ],
  'thomas-gainsborough-forest-cornard-wood': [
    { question: "What's significant about Cornard Wood?", answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough's</strong></a> <strong>Cornard Wood</strong> is one of his earliest major landscapes, painted near his hometown of Sudbury in Suffolk. It shows Dutch landscape influence before he developed his lighter, more fluid later style." }
  ],
  'wassily-kandinsky-forest-edge': [
    { question: "Was this painted before Kandinsky's abstract period?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky's</strong></a> early landscapes still show <strong>recognizable natural subjects</strong>. His gradual move from representational scenes to pure abstraction was one of the most radical developments in modern art." }
  ],
  'frederic-bazille-forest-of-fontainebleau': [
    { question: "Why was Fontainebleau important to painters?", answer: "The <strong>Forest of Fontainebleau</strong> was a favorite painting ground for the Barbizon School and early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>. <strong>Frédéric Bazille</strong> painted there alongside Monet, Renoir, and Sisley in the 1860s." }
  ],
  'gerard-david-forest-scene': [
    { question: "What was Gerard David's specialty?", answer: "<strong>Gerard David</strong> was the last major painter of the Bruges school. His <strong>detailed landscapes and religious panels</strong> continued the tradition of Jan van Eyck and Hans Memling with refined technique and quiet devotion." }
  ],
  'egon-schiele-forest-with-sunlit-clearing-in-the-background': [
    { question: "Did Schiele paint landscapes?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Schiele</strong></a> painted <strong>landscapes</strong> throughout his short career, often depicting autumn trees and small towns. His landscapes share the angular, expressive quality of his famous figure drawings." }
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
