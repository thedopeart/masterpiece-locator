const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 49: tier 3 index 530-549 (20 artworks)
const newFaqs = {
  'piet-mondrian-evening-at-weesperzijde-sun': [
    { question: "Where is Weesperzijde?", answer: "<strong>Weesperzijde</strong> is a street along the Amstel River in Amsterdam. <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted these early <strong>naturalistic Dutch landscapes</strong> before gradually abstracting nature into his famous grid compositions." }
  ],
  'piet-mondrian-evening-landscape': [
    { question: "How do Mondrian's landscapes relate to his abstractions?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian's</strong></a> early landscapes show <strong>horizontal bands of land and sky</strong> that gradually simplified into pure horizontal and vertical lines. His artistic evolution from nature to abstraction spanned two decades." }
  ],
  'salvator-rosa-evening-landscape': [
    { question: "What mood do Rosa's landscapes convey?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa's</strong></a> landscapes are <strong>wild, rugged, and melancholic</strong>. His stormy skies, twisted trees, and rocky gorges influenced the Romantic concept of the sublime in nature." }
  ],
  'edvard-munch-evening-on-karl-johan-street': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> shows <strong>ghost-like figures</strong> walking toward the viewer on Oslo's main street. Their pale, mask-like faces express urban alienation, a key theme of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>." }
  ],
  'giotto-exorcism-of-the-demons-at-arezzo': [
    { question: "What scene from Francis's life is shown?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> depicts <strong>St. Francis casting out demons</strong> from the city of Arezzo. The dark, winged demons fleeing above the buildings contrast with the saint's calm authority below." }
  ],
  'gustav-klimt-fable': [
    { question: "What is Klimt's Fable about?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> early allegorical works like Fable show his academic training before his <strong>golden, ornamental phase</strong>. These decorative compositions hint at the <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> style he'd soon develop." }
  ],
  'edward-burne-jones-fair-rosamond-and-queen-eleonor': [
    { question: "Who was Fair Rosamond?", answer: "<strong>Rosamond Clifford</strong> was Henry II's mistress, allegedly poisoned by Queen Eleanor of Aquitaine. <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> painted this legend with the medieval beauty typical of his <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> style." }
  ],
  'edward-burne-jones-fair-rosamund-and-queen-eleanor': [
    { question: "Did Burne-Jones paint multiple versions?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> often <strong>revisited subjects</strong>, refining compositions over years. His multiple versions of Fair Rosamund show his evolving approach to medieval narrative and feminine beauty." }
  ],
  'odilon-redon-fallen-angel-looking-at-a-cloud': [
    { question: "What makes Redon's art distinctive?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a> created <strong>dreamlike, visionary images</strong> that anticipated Surrealism. His fallen angel gazing at clouds blurs the boundary between the visible world and inner imagination." }
  ],
  'thomas-cole-falls-of-the-kaaterskill': [
    { question: "Where are the Kaaterskill Falls?", answer: "The <strong>Kaaterskill Falls</strong> are a two-tier waterfall in the Catskill Mountains of New York. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> painted them as a symbol of American wilderness grandeur for the Hudson River School." }
  ],
  'rembrandt-family-group': [
    { question: "What makes this late Rembrandt special?", answer: "This is one of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> last paintings, showing a <strong>family bonded by warm light</strong>. His late style uses thick, luminous paint that seems to glow from within, creating deep emotional intimacy." }
  ],
  'family-reunion-bazille': [
    { question: "Who was Frédéric Bazille?", answer: "<strong>Frédéric Bazille</strong> was a talented young <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> who died in the Franco-Prussian War at age 28. This <strong>outdoor family portrait</strong> shows his gift for combining figures with sunlit landscape." }
  ],
  'pierre-bonnard-family-scene': [
    { question: "What defines Bonnard's domestic scenes?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted his home life with <strong>intimate warmth and saturated color</strong>. His family scenes dissolve figures into patterns of light and decoration, creating a personal, memory-like quality." }
  ],
  'wassily-kandinsky-farewell': [
    { question: "What period is this from?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky's</strong></a> earlier works still contained <strong>recognizable subjects</strong> before he moved toward pure abstraction. His transition from figurative to abstract art was one of the most important developments in modern painting." }
  ],
  'francis-picabia-farm-at-la-petite-mare': [
    { question: "What was Picabia's range as an artist?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia</strong></a> moved between <strong>Impressionism, Cubism, Dada, and figurative painting</strong> throughout his career. His early farm landscapes are conventional compared to the radical experiments that followed." }
  ],
  'berthe-morisot-farm-in-normandy': [
    { question: "What was Morisot's role in Impressionism?", answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> was a founding member of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> group. Her <strong>light, airy brushwork</strong> in landscapes and domestic scenes earned her recognition as one of the movement's finest painters." }
  ],
  'piet-mondrian-farm-sun': [
    { question: "What Dutch subjects did Mondrian paint early on?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted <strong>farms, windmills, and fields</strong> in the Dutch countryside. The flat Dutch horizon, with its strong horizontal lines, may have planted the seed for his later abstract grid paintings." }
  ],
  'adriaen-brouwer-farmers-fight-party': [
    { question: "Were Brouwer's tavern fights realistic?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> reportedly frequented the <strong>taverns he painted</strong>. His brawling peasants have a raw authenticity that suggests firsthand observation, combined with quick, masterful brushwork." }
  ],
  'camille-pissarro-farmyard': [
    { question: "What made Pissarro's rural scenes distinctive?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> treated <strong>rural workers and farmyards</strong> with dignity and respect. Unlike picturesque rural paintings, his scenes show real agricultural labor rendered with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> sensitivity to light." }
  ],
  'jan-steen-fat-kitchen': [
    { question: "What is the Fat Kitchen about?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen's</strong></a> \"Fat Kitchen\" shows a <strong>household of overindulgence</strong>, contrasting with its companion piece the \"Lean Kitchen.\" These moralizing paired paintings warned against both gluttony and deprivation." }
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
