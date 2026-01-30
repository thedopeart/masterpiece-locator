const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 2: tier 3 artworks index 10-19 (append 1 FAQ each → total 3)
const newFaqs = {
  'rembrandt-a-beggar-with-a-wooden-leg': [
    { question: "What technique did Rembrandt use here?", answer: "This is an <strong>etching</strong> from around 1630. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> used quick, confident lines to capture the figure's pose and ragged clothing in just a few strokes." }
  ],
  'fra-angelico-a-bishop-saint': [
    { question: "Who was Fra Angelico?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> was a Dominican friar and Early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter. He's known for his deeply <strong>devotional works</strong> with luminous colors and gold leaf backgrounds." }
  ],
  'palma-vecchio-a-blonde-woman': [
    { question: "What was Palma Vecchio known for?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter celebrated for his <strong>idealized female portraits</strong>. His blonde women became iconic representations of Venetian beauty standards." }
  ],
  'adriaen-brouwer-a-boor-asleep': [
    { question: "What does 'boor' mean in this context?", answer: "A <strong>boor</strong> refers to a rough, uncultured peasant. <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> specialized in tavern scenes and peasant life, painting with a raw honesty that influenced later Dutch and Flemish genre painters." }
  ],
  'el-greco-a-boy-blowing-on-an-ember-to-light-a-candle': [
    { question: "Why did El Greco paint a boy with a candle?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> explored <strong>candlelight effects</strong> in several works. This subject of a boy lighting a candle traces back to classical antiquity and was popular among <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painters." }
  ],
  'edouard-manet-a-boy-with-a-pitcher': [
    { question: "What style defines this Manet painting?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> painted everyday subjects with bold brushwork that bridged <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. His <strong>direct, unidealized approach</strong> to ordinary people was considered radical in his time." }
  ],
  'salvator-rosa-a-cavalry-battle': [
    { question: "What subjects was Salvator Rosa known for?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> was a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter known for wild <strong>landscapes, battle scenes</strong>, and witchcraft subjects. His dramatic cavalry battles influenced later Romantic artists." }
  ],
  'rembrandt-a-cavalry-fight': [
    { question: "Did Rembrandt paint many battle scenes?", answer: "Battle scenes were unusual for <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>. He focused more on <strong>portraits, biblical scenes, and etchings</strong>. This cavalry fight is among his rarer subjects, showing his versatility as a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> artist." }
  ],
  'jean-baptiste-simeon-chardin-a-chemist-in-his-laboratory-a-philosopher-giving-a': [
    { question: "What was Chardin best known for?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> was a French painter celebrated for quiet <strong>still lifes and domestic scenes</strong>. His thoughtful compositions and soft lighting earned him admiration from contemporaries and later <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> alike." }
  ],
  'paul-delaroche-a-child-learning-to-read': [
    { question: "What movement was Paul Delaroche associated with?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Paul Delaroche</strong></a> worked in the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> tradition but leaned toward <strong>historical accuracy</strong>. He bridged Neoclassicism and Romanticism, favoring dramatic historical and intimate domestic subjects." }
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
