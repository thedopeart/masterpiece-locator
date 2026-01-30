const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 9: tier 3 artworks index 80-89
const newFaqs = {
  'lorenzo-lotto-allegory-allegory-of-prudence-and-wisdom': [
    { question: "What was Lorenzo Lotto known for?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter who favored <strong>psychologically intense portraits</strong> and unusual religious compositions. He worked independently from the dominant Venetian style of Titian." }
  ],
  'edgar-degas-at-the-cafe-des-ambassadeurs': [
    { question: "What venue does this depict?", answer: "The <strong>Café des Ambassadeurs</strong> was a popular Parisian café-concert on the Champs-Élysées. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> captured the gaslit atmosphere of performers and audiences in several works set in Parisian entertainment venues." }
  ],
  'edvard-munch-at-the-coffee-table': [
    { question: "What themes dominated Munch's work?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a> explored <strong>anxiety, illness, and human psychology</strong>. Even domestic scenes like this carry an undercurrent of tension, reflecting his troubled family life and the emotional intensity of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>." }
  ],
  'pierre-bonnard-at-the-fence': [
    { question: "What group was Pierre Bonnard part of?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> was a founding member of the <strong>Nabis</strong>, a Post-Impressionist group. His later work evolved into richly colored domestic and garden scenes that earned him the nickname \"painter of happiness.\"" }
  ],
  'john-william-godward-at-the-garden-shrine-pompeii': [
    { question: "Why did Godward paint Pompeii settings?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> was fascinated by <strong>ancient Roman daily life</strong>. He meticulously recreated Pompeian architecture, marble textures, and classical dress, painting as though the ancient world had never ended." }
  ],
  'ford-madox-brown-at-the-grain-harvest': [
    { question: "What movement was Ford Madox Brown connected to?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> was closely associated with the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> though never an official member. His <strong>rural labor scenes</strong> reflect his social consciousness and commitment to painting outdoors." }
  ],
  'edgar-degas-at-the-milliner39s': [
    { question: "Why did Degas paint millinery shops?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted many scenes of <strong>women trying on hats</strong> at Parisian milliners. These works let him explore color, texture, and the gestures of women absorbed in an everyday activity." }
  ],
  'edgar-degas-at-the-races': [
    { question: "Why did Degas paint horse racing?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> was drawn to <strong>horse racing</strong> as a subject of modern Parisian life. The Longchamp and other racecourses offered opportunities to study movement, light, and the social rituals of the French upper class." }
  ],
  'pierre-bonnard-at-the-races-longchamp': [
    { question: "What defines Bonnard's painting style?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> used <strong>vibrant, saturated color</strong> and loose brushwork to create atmospheric scenes. His approach to color influenced later painters and earned him recognition as one of the great colorists of the early 20th century." }
  ],
  'august-macke-at-the-rhine-near-hersel': [
    { question: "What movement was August Macke part of?", answer: "<a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a> was a key member of <strong>Der Blaue Reiter</strong> (The Blue Rider), a German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group. His colorful, optimistic paintings stand out from the movement's typically darker emotional tone." }
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
