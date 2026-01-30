const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 47: tier 3 index 490-509 (20 artworks)
const newFaqs = {
  'juan-de-valdes-leal-ecce-homo': [
    { question: "How does Valdés Leal's style compare to Murillo's?", answer: "<strong>Valdés Leal's</strong> paintings are <strong>emotionally intense and rough-edged</strong>, contrasting with <a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo's</strong></a> softer, gentler approach. Both worked in Seville but represented opposite poles of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." }
  ],
  'tintoretto-ecce-homo-pontius-pilate-presenting-christ-to-the-': [
    { question: "How does Tintoretto compose this scene?", answer: "<a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> uses his signature <strong>dramatic diagonal composition</strong> and stark lighting to heighten the confrontation between Pilate, Christ, and the crowd. His energetic brushwork brings urgency to the biblical moment." }
  ],
  'nicolas-poussin-echo-and-narcissus': [
    { question: "What myth is depicted?", answer: "<strong>Narcissus</strong> falls in love with his own reflection and wastes away, while the nymph Echo can only repeat his words. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted this Ovidian tragedy with classical calm and landscape beauty." }
  ],
  'giotto-ecstasy-of-st-francis': [
    { question: "What is the Ecstasy of St. Francis?", answer: "It depicts <strong>St. Francis receiving the stigmata</strong>, the wounds of Christ, during a vision on Mount La Verna. <a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> portrays this mystical experience with naturalistic clarity in the Assisi fresco cycle." }
  ],
  'petrus-christus-edward-grimston': [
    { question: "Who was Petrus Christus?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> succeeded Jan van Eyck in Bruges. His <strong>precise, luminous portraits</strong> continued the Netherlandish tradition of meticulous realism, making him one of the finest 15th-century portraitists." }
  ],
  'lawrence-alma-tadema-egyptian-chess-players': [
    { question: "Did Alma-Tadema paint Egyptian scenes?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted <strong>Egyptian, Greek, and Roman antiquity</strong> with the same archaeological precision. His Egyptian scenes reconstruct daily life in ancient civilizations with painstaking attention to furniture, clothing, and architecture." }
  ],
  'juan-de-juanes-el-buen-pastor': [
    { question: "What does El Buen Pastor mean?", answer: "\"<strong>El Buen Pastor</strong>\" means \"The Good Shepherd,\" depicting Christ with a lamb. <strong>Juan de Juanes</strong> painted devotional images with gentle, idealized figures that became the standard for Spanish <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> religious art." }
  ],
  'juan-de-juanes-el-salvador': [
    { question: "What was Juan de Juanes's reputation?", answer: "<strong>Juan de Juanes</strong> was called the \"Spanish Raphael\" for his <strong>gentle, harmonious religious paintings</strong>. His images of Christ and the saints were so widely copied that they shaped popular religious imagery in Spain for centuries." }
  ],
  'juan-de-juanes-el-salvador-con-la-eucarist237a': [
    { question: "What is shown in this painting?", answer: "It shows <strong>Christ holding the Eucharist</strong> (communion wafer), a key image of Catholic devotion. <strong>Juan de Juanes's</strong> version became one of the most reproduced religious images in Spanish history." }
  ],
  'juan-de-juanes-el-sumo-sacerdote-aar243n': [
    { question: "Who was Aaron?", answer: "<strong>Aaron</strong> was Moses's brother and the first high priest of Israel. <strong>Juan de Juanes</strong> painted Old Testament figures with the same refined devotional quality he brought to his popular New Testament subjects." }
  ],
  'john-everett-millais-elgiva-seized-byorder-of-odo-archbishop-of-canterb': [
    { question: "What historical event is shown?", answer: "It depicts the <strong>Anglo-Saxon queen Elgiva</strong> being seized by Archbishop Odo of Canterbury. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted this medieval English subject as an early <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> work." }
  ],
  'rembrandt-eliezer-and-rebecca-at-the-well': [
    { question: "What Old Testament story is depicted?", answer: "<strong>Eliezer</strong>, Abraham's servant, meets Rebecca at a well and recognizes her as the bride meant for Isaac. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this moment of recognition with his characteristic warmth and emotional depth." }
  ],
  'albert-joseph-moore-elijah39s-sacrifice': [
    { question: "What biblical event is shown?", answer: "<strong>Elijah's sacrifice on Mount Carmel</strong> involves fire from heaven consuming his offering, proving God's power. <a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Moore</strong></a> brought his decorative, classically inspired style to this dramatic Old Testament scene." }
  ],
  'august-macke-elisabeth-at-the-table': [
    { question: "Who was Elisabeth?", answer: "<strong>Elisabeth Gerhardt</strong> was <a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke's</strong></a> wife and frequent model. His domestic portraits of her combine <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> color with gentle intimacy, showing the quieter side of the Blue Rider movement." }
  ],
  'dante-gabriel-rossetti-elizabeth-siddal': [
    { question: "Who was Elizabeth Siddal?", answer: "<strong>Elizabeth Siddal</strong> was a model, poet, and painter who became <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti's</strong></a> wife. She modeled for many <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> paintings, including Millais's Ophelia, and died of a laudanum overdose in 1862." }
  ],
  'claude-lorrain-embarkation-of-st-paula-romana-at-ostia': [
    { question: "What was Claude Lorrain's specialty?", answer: "<strong>Claude Lorrain</strong> mastered the <strong>harbor scene</strong> with classical architecture framing luminous skies. His idealized ports, where historical or biblical figures embark on journeys, defined landscape painting for centuries." }
  ],
  'william-hogarth-emblematical-print-of-the-south-sea-scheme': [
    { question: "What was the South Sea Bubble?", answer: "The <strong>South Sea Bubble</strong> (1720) was one of history's first financial crashes. <a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> satirized the greed and folly of investors in this early print, establishing his reputation as a social commentator." }
  ],
  'gustav-klimt-emilie-fl246ge-aged-17': [
    { question: "Who was Emilie Flöge?", answer: "<strong>Emilie Flöge</strong> was <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> lifelong companion and a successful fashion designer. This early portrait shows her as a teenager, before she became the muse featured in many of his most famous <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> paintings." }
  ],
  'john-everett-millais-emily-patmore': [
    { question: "Who was Emily Patmore?", answer: "<strong>Emily Patmore</strong> was the wife of poet Coventry Patmore. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted her with the careful, detailed technique of the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a>." }
  ],
  'john-singer-sargent-emily-sargent': [
    { question: "Who was Emily Sargent?", answer: "<strong>Emily Sargent</strong> was <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent's</strong></a> sister and lifelong companion. Family portraits gave him freedom to paint with a <strong>looser, more intimate style</strong> than his formal society commissions demanded." }
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
