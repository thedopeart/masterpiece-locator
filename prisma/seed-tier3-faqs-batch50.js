const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 50: tier 3 index 550-569 (20 artworks)
const newFaqs = {
  'george-frederick-watts-fata-morgana': [
    { question: "What is Fata Morgana?", answer: "<strong>Fata Morgana</strong> refers to a mirage or illusion, named after Morgan le Fay from Arthurian legend. <a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>G.F. Watts</strong></a> used allegorical subjects to explore themes of human aspiration and deception." }
  ],
  'paul-cezanne-father-of-the-artist': [
    { question: "What was Cézanne's relationship with his father?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> father was a wealthy banker who initially opposed his son's art career. This early <strong>portrait</strong> was painted at the family home in Aix-en-Provence during a period of financial dependence." }
  ],
  'simon-vouet-father-time-overcome-by-love-hope-and-beauty': [
    { question: "What does this allegory represent?", answer: "<strong>Simon Vouet</strong> depicted Love, Hope, and Beauty triumphing over Father Time, a popular <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> allegory. The painting reflects the optimistic spirit of French court art under Louis XIII." }
  ],
  'edward-burne-jones-fatima': [
    { question: "What story does this illustrate?", answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> illustrated the tale of <strong>Fatima and Bluebeard</strong>, the wife who discovers her husband's secret. His <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> style brought medieval and fairy-tale narratives to life." }
  ],
  'jean-antoine-watteau-faun': [
    { question: "How did Watteau use mythological figures?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> painted fauns and other <strong>mythological figures</strong> with the same delicate, poetic touch he brought to his fêtes galantes. His work defined the French <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style." }
  ],
  'rembrandt-faust': [
    { question: "What scene from Faust is shown?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> etching shows a scholar (often identified as <strong>Faust</strong>) gazing at a luminous mystical disc. The dramatic contrast of light and shadow reflects his mastery of the printmaking medium." }
  ],
  'lawrence-alma-tadema-faust-and-marguerite': [
    { question: "Which version of Faust inspired this?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted the scene from Goethe's <strong>Faust</strong> where Faust first meets Marguerite. He applied his signature archaeological precision to the medieval German setting." }
  ],
  'dante-gabriel-rossetti-faust-margaret-in-the-church': [
    { question: "What moment is depicted?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> illustrated the scene where <strong>Margaret prays in church</strong> while tormented by an evil spirit. His <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> interpretation draws from Goethe's tragic drama." }
  ],
  'odilon-redon-fear': [
    { question: "How did Redon depict emotions?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a> gave abstract emotions like <strong>fear</strong> visible form through dreamlike, shadowy imagery. His visionary works anticipated Surrealism by decades, drawing from the subconscious mind." }
  ],
  'jean-antoine-watteau-feast-in-park': [
    { question: "What are Watteau's park scenes called?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau's</strong></a> outdoor gatherings are called <strong>fêtes galantes</strong>, a genre he invented. These scenes of elegant people socializing in parklands became the defining subject of <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> painting." }
  ],
  'adriaen-van-ostade-feasting-peasants-in-a-tavern': [
    { question: "What tradition do these tavern scenes belong to?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> continued the Flemish <strong>genre painting</strong> tradition of depicting peasant life. His warm, golden-lit tavern interiors show the influence of Rembrandt's chiaroscuro technique." }
  ],
  'paul-signac-fecamp-sunshine': [
    { question: "What technique did Signac use?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted Fécamp using <strong>Pointillism</strong>, applying small dots of pure color that blend optically. He became the leading theorist of <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionism</strong></a> after Seurat's early death." }
  ],
  'adriaen-brouwer-feeling': [
    { question: "What senses did Brouwer depict?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> painted a series on the <strong>five senses</strong>, showing peasants experiencing touch, taste, sight, smell, and hearing. These small, lively panels demonstrate his quick, expressive brushwork." }
  ],
  'felix-vallotton-felix-jasinski-in-his-printmaking-studio': [
    { question: "Who was Félix Vallotton?", answer: "<strong>Félix Vallotton</strong> was a Swiss-French painter and printmaker associated with the <strong>Nabis</strong> group. His portraits combine sharp outlines with flat color areas, showing the influence of Japanese woodblock prints." }
  ],
  'alexandre-cabanel-felix-masse': [
    { question: "What type of portraits did Cabanel paint?", answer: "<strong>Alexandre Cabanel</strong> was a leading French <strong>Academic painter</strong> who produced polished society portraits. His technically refined style made him a favorite of Napoleon III and the Parisian elite." }
  ],
  'lawrence-alma-tadema-female-dog-and-two-puppies-in-collaboration-with-m': [
    { question: "Did Alma-Tadema collaborate with other artists?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> occasionally <strong>collaborated with fellow painters</strong> on works combining their specialties. This piece with Matthijs Maris shows his range beyond the classical scenes he's best known for." }
  ],
  'georges-seurat-female-from-back-black-woman': [
    { question: "What drawing technique did Seurat use?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat's</strong></a> drawings use <strong>conté crayon on textured paper</strong> to create soft, velvety tones without outlines. His figure studies demonstrate how he built form through gradations of light and dark." }
  ],
  'gustav-klimt-female-nude': [
    { question: "How did Klimt approach the female figure?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> <strong>nude drawings</strong> are among his most celebrated works, showing women in unguarded, natural poses. His fluid pencil line captures the body with sensual directness typical of Viennese <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>." }
  ],
  'gustav-klimt-female-organ-player': [
    { question: "What period is this from?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> early works like this show his <strong>academic training</strong> at the Vienna School of Applied Arts. Before his golden phase, he produced conventional compositions for theaters and public buildings." }
  ],
  'albrecht-durer-fencing-reiter': [
    { question: "Did Dürer depict military subjects?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a> drew and engraved many <strong>knights and soldiers</strong>, reflecting the martial culture of the German <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. His precise observation extended to armor, weapons, and horses in motion." }
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
