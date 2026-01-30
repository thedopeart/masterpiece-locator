const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 48: tier 3 index 510-529 (20 artworks)
const newFaqs = {
  'joshua-reynolds-emily-duchess-of-leinster': [
    { question: "How did Reynolds portray aristocratic women?", answer: "<a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a> gave his female sitters <strong>classical poses and allegorical settings</strong>. His portraits elevated English society women by associating them with mythological or literary heroines." }
  ],
  'ford-madox-brown-emma-hill': [
    { question: "Who was Emma Hill?", answer: "<strong>Emma Hill</strong> was <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown's</strong></a> second wife and frequent model. This intimate portrait shows the softer, personal side of an artist best known for ambitious <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> narrative paintings." }
  ],
  'anthony-van-dyck-emperor-charles-v-on-horseback': [
    { question: "Why did Van Dyck paint equestrian portraits?", answer: "<a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a> established the <strong>equestrian portrait</strong> as the ultimate expression of royal power. His mounted rulers project authority and grace, a format that influenced state portraiture across Europe." }
  ],
  'anthony-van-dyck-emperor-theodosius-forbidden-by-st-ambrose-to-ente': [
    { question: "What historical event is depicted?", answer: "<strong>St. Ambrose</strong> refused Emperor Theodosius entry to Milan Cathedral after the Thessalonica massacre in 390 AD. <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a> painted this confrontation between church and state with <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> drama." }
  ],
  'john-william-godward-endymion': [
    { question: "Who was Endymion?", answer: "In Greek myth, <strong>Endymion</strong> was a beautiful young man loved by the moon goddess Selene, who put him into eternal sleep to preserve his youth. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted him in his characteristic classical style." }
  ],
  'john-singer-sargent-engelsburg': [
    { question: "What is the Engelsburg?", answer: "The <strong>Engelsburg</strong> (Castel Sant'Angelo) is a fortress in Rome, originally Emperor Hadrian's mausoleum. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted architectural subjects during his travels with fluid, atmospheric watercolor technique." }
  ],
  'camille-pissarro-entering-a-village': [
    { question: "What villages did Pissarro paint?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> painted villages around <strong>Pontoise, Louveciennes, and Éragny</strong> in the Île-de-France countryside. His rural scenes capture the rhythms of agricultural life through <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light and color." }
  ],
  'gentile-da-fabriano-enthroned-madonna-with-angels': [
    { question: "What style defines Gentile da Fabriano?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> worked in the <strong>International Gothic</strong> style, known for lavish gold backgrounds, ornate fabrics, and graceful figures. His Madonnas glow with refined elegance." }
  ],
  'juan-de-juanes-entierro-de-san-esteban': [
    { question: "Who was San Esteban?", answer: "<strong>San Esteban</strong> (St. Stephen) was the first Christian martyr, stoned to death for his faith. <strong>Juan de Juanes</strong> painted this burial scene with the serene devotional quality typical of Spanish <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art." }
  ],
  'lawrence-alma-tadema-entrance-to-a-roman-theatre': [
    { question: "How accurate are Alma-Tadema's Roman scenes?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> was praised by archaeologists for his <strong>historically accurate reconstructions</strong>. He studied Roman ruins, artifacts, and texts to ensure every architectural detail, marble texture, and costume was authentic." }
  ],
  'canaletto-entrance-to-the-grand-canal-looking-east': [
    { question: "What was Canaletto's painting method?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> used a <strong>camera obscura</strong> to achieve his precise architectural perspectives of Venice. His detailed views of the Grand Canal were popular with English Grand Tour travelers as souvenirs." }
  ],
  'william-adolphe-bouguereau-equality-before-death': [
    { question: "What philosophical theme does this explore?", answer: "<a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> depicted <strong>Death as the great equalizer</strong>, treating rich and poor alike. His technically flawless academic style gave allegorical subjects a powerful physical presence." }
  ],
  'jacques-louis-david-equestrian-portrait-of-stanislas-kostka-potocki': [
    { question: "Who was Potocki?", answer: "<strong>Stanislas Kostka Potocki</strong> was a Polish nobleman and art collector. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted this dynamic <strong>equestrian portrait</strong> during Potocki's visit to Rome, showing his mastery of <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> composition." }
  ],
  'peter-paul-rubens-equestrian-portrait-of-the-duke-of-lerma': [
    { question: "Why is this equestrian portrait important?", answer: "This was <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens's</strong></a> first major <strong>equestrian portrait</strong>, painted in 1603. It established his ability to combine <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> dynamism with the dignity demanded by aristocratic patrons." }
  ],
  'guercino-erminia-finds-the-wounded-tancred': [
    { question: "What literary source is this from?", answer: "From Tasso's <strong>Jerusalem Delivered</strong>: the Saracen princess Erminia finds the wounded Crusader knight Tancred. <strong>Guercino</strong> painted this tender scene with the emotional warmth and rich color of the Bolognese <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> school." }
  ],
  'caspar-david-friedrich-ernst-theodor-johann-bruckner': [
    { question: "Did Friedrich paint many portraits?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> rarely painted portraits, preferring <strong>landscapes with solitary figures</strong> seen from behind. This portrait of his friend Brückner is an unusual departure from his characteristic <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscapes." }
  ],
  'tintoretto-esther-before-ahasuerus': [
    { question: "What Old Testament story is shown?", answer: "Queen <strong>Esther</strong> risks her life by approaching King Ahasuerus uninvited to save the Jewish people. <a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> dramatized this tense moment with swooning figures and theatrical Venetian color." }
  ],
  'john-william-waterhouse-esther-kenworthy': [
    { question: "Who was Esther Kenworthy?", answer: "<strong>Esther Kenworthy</strong> became <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> wife. This portrait shows a more personal side of an artist best known for his mythological <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> beauties." }
  ],
  'et-in-arcadia-ego-guercino': [
    { question: "What does Et in Arcadia Ego mean?", answer: "\"<strong>Even in Arcadia, I (Death) exist</strong>.\" <strong>Guercino</strong> painted shepherds discovering a skull, reminding viewers that death exists even in paradise. This theme was later made famous by Poussin's version." }
  ],
  'jan-van-eyck-eve-from-the-right-wing-of-the-ghent-altarpiece': [
    { question: "What makes Van Eyck's Eve notable?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> Eve is one of the most <strong>realistically depicted nudes</strong> in early Northern art. Her rounded belly suggested she was already pregnant, adding theological meaning to the Ghent Altarpiece's complex program." }
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
