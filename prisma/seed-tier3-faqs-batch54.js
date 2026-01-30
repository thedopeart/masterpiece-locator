const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 54: tier 3 index 630-649 (20 artworks)
const newFaqs = {
  'gerard-ter-borch-girl-in-peasant-costume-probably-gesina-the-painte': [
    { question: "Who was Gesina ter Borch?", answer: "<strong>Gesina ter Borch</strong> was <a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch's</strong></a> half-sister and an accomplished artist herself. She preserved many of the family's drawings and watercolors in a remarkable album that survives today." }
  ],
  'edgar-degas-girl-in-red': [
    { question: "How did Degas approach portraiture?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted portraits with <strong>candid, unposed compositions</strong> that capture his subjects in natural moments. His use of asymmetrical framing and unexpected angles gives his portraits a modern, snapshot-like quality." }
  ],
  'johannes-vermeer-girl-interrupted-at-her-music': [
    { question: "What is the significance of music in Vermeer's art?", answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> often depicted <strong>music-making as a metaphor for love</strong> and courtship. His musical scenes show figures in quiet, intimate moments bathed in the soft light from a window." }
  ],
  'edvard-munch-girl-kindling-a-stove': [
    { question: "What everyday scenes did Munch paint?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> occasionally painted <strong>quiet domestic moments</strong> alongside his more famous psychological works. These intimate scenes reveal a gentler side of the artist best known for existential anguish." }
  ],
  'adolph-menzel-girl-on-a-sofa-5-november-1848': [
    { question: "What makes Menzel's sketches notable?", answer: "<strong>Adolph Menzel</strong> was a tireless observer who filled thousands of pages with <strong>drawings of everyday life</strong>. His dated sketches capture fleeting moments with an immediacy that prefigures Impressionist informality." }
  ],
  'johannes-vermeer-girl-reading-a-letter-at-an-open-window': [
    { question: "What was hidden beneath this painting?", answer: "X-ray examination revealed a <strong>painting of Cupid on the wall</strong> behind the girl, which Vermeer originally included but later painted over. A 2021 restoration at the <a href=\"/apps/masterpieces/museum/gemaldegalerie-alte-meister\"><strong>Gemäldegalerie Alte Meister</strong></a> uncovered it." }
  ],
  'johannes-vermeer-girl-with-a-flute': [
    { question: "Is this a genuine Vermeer?", answer: "The attribution of <strong>Girl with a Flute</strong> to <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> has been debated for decades. Some scholars attribute it to a workshop assistant due to differences in technique, though it hangs in the National Gallery of Art." }
  ],
  'john-william-godward-girl-with-a-mirror': [
    { question: "What classical world did Godward recreate?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted <strong>idealized women in ancient Roman settings</strong>, surrounded by marble terraces and Mediterranean views. His polished technique and classical subjects put him at odds with the modernist trends of his era." }
  ],
  'johannes-vermeer-girl-with-the-red-hat': [
    { question: "What's unusual about this Vermeer?", answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> Girl with the Red Hat is painted on a <strong>small wooden panel</strong> rather than his usual canvas. The bold red hat and blue robe create a striking color contrast in this intimate close-up portrait." }
  ],
  'piet-mondrian-girl-writing': [
    { question: "How does this compare to Mondrian's later work?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian's</strong></a> early <strong>naturalistic paintings</strong> like this bear little resemblance to his famous abstract grids. His evolution from representational Dutch scenes to pure abstraction took two decades of gradual simplification." }
  ],
  'william-blake-glad-day-or-the-dance-of-albion': [
    { question: "What does Albion represent?", answer: "<strong>Albion</strong> is William Blake's mythological figure representing <strong>humanity awakened and liberated</strong>. The radiant figure with outstretched arms became one of Blake's most iconic images, symbolizing spiritual freedom and creative joy." }
  ],
  'fra-angelico-glorification-of-saint-dominic': [
    { question: "What was Fra Angelico's religious role?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> was a <strong>Dominican friar</strong> who painted devotional works for his order's monasteries. His luminous paintings of saints and biblical scenes reflect deep personal faith combined with mastery of early Renaissance technique." }
  ],
  'god-speed-leighton': [
    { question: "What medieval scene is depicted?", answer: "<strong>Edmund Blair Leighton's</strong> God Speed shows a <strong>lady tying a sash on a knight's arm</strong> before he rides to battle. This popular Victorian painting idealizes medieval chivalry and courtly love with romantic detail." }
  ],
  'jan-van-eyck-god-the-father': [
    { question: "What altarpiece is this from?", answer: "This panel comes from the <strong>Ghent Altarpiece</strong>, one of the most important works in Western art. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> God the Father radiates jewel-like color and staggering detail in every brocade fold and gem." }
  ],
  'piet-mondrian-going-fishing': [
    { question: "What Dutch subjects did early Mondrian paint?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian's</strong></a> early career focused on <strong>Dutch rural life</strong>: farms, rivers, and fishermen. These quiet landscape scenes show his roots in the Hague School tradition before his radical abstract breakthrough." }
  ],
  'edward-burne-jones-going-to-the-battle': [
    { question: "What medieval themes attracted Burne-Jones?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> was drawn to <strong>Arthurian legend, chivalry, and medieval romance</strong>. His battle scenes focus on emotional departure rather than violence, emphasizing beauty and pathos in the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> tradition." }
  ],
  'john-william-waterhouse-gone-but-not-forgotten': [
    { question: "What mood does Waterhouse create here?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted scenes of <strong>melancholy and remembrance</strong> with the rich color and romantic beauty typical of late <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> art. His women are often shown in contemplative, solitary moments." }
  ],
  'edouard-vuillard-good-children': [
    { question: "What defines Vuillard's domestic scenes?", answer: "<strong>Édouard Vuillard</strong> painted <strong>intimate domestic interiors</strong> where figures nearly dissolve into wallpaper patterns and furnishings. His Nabis-influenced style flattens space, creating richly decorative compositions from everyday home life." }
  ],
  'john-william-waterhouse-good-neighbours': [
    { question: "What period of Waterhouse's career is this from?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> balanced <strong>mythological subjects with genre scenes</strong> throughout his career. His neighborly vignettes show the same attention to feminine beauty and narrative mood as his more famous classical works." }
  ],
  'claude-monet-grainstack': [
    { question: "Why did Monet paint grainstacks?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted over <strong>25 grainstack canvases</strong> between 1890 and 1891. He used this simple subject to study how light and atmosphere transform the same form across different times of day and seasons." }
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
