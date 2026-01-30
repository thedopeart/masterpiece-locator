const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 30: tier 3 index 290-299
const newFaqs = {
  'rembrandt-christ-disputing-with-the-doctors': [
    { question: "What biblical scene is this?", answer: "It shows the 12-year-old <strong>Jesus debating with religious scholars</strong> in the Temple of Jerusalem. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> used dramatic lighting to focus on the exchange between the boy and the older, learned men." }
  ],
  'rembrandt-christ-driving-the-moneychangers-from-the-temple': [
    { question: "Is this one of Rembrandt's dramatic subjects?", answer: "Yes, the <strong>Cleansing of the Temple</strong> is one of few scenes where Christ shows anger. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this early in his career, showing a more theatrical, energetic style influenced by his teacher Pieter Lastman." }
  ],
  'el-greco-christ-driving-the-traders-from-the-temple': [
    { question: "How many versions did El Greco paint?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> painted <strong>at least five versions</strong> of this subject throughout his career. Each version became more elongated and expressionistic, tracking his evolution from Venetian naturalism to his unique <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> style." }
  ],
  'johannes-vermeer-christ-in-the-house-of-martha-and-mary': [
    { question: "Is this typical of Vermeer?", answer: "No, it's one of <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> earliest and largest works. Before developing his famous <strong>quiet domestic interiors</strong>, he painted this large religious scene in a completely different style, influenced by Italian art." }
  ],
  'diego-velazquez-christ-in-the-house-of-mary-and-martha': [
    { question: "What is the painting's composition?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> placed a <strong>kitchen scene in the foreground</strong> with the biblical story visible through a background window or mirror. This bodegón-religious hybrid was innovative for its time in Seville." }
  ],
  'gerard-david-christ-nailed-to-the-cross': [
    { question: "Who was Gerard David?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> was the last great painter of the Bruges school. His <strong>detailed, emotionally restrained religious works</strong> continued the tradition of van Eyck and Memling into the early 16th century." }
  ],
  'francisco-de-zurbaran-christ-on-the-cross': [
    { question: "What makes Zurbarán's crucifixion distinctive?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán's</strong></a> crucified Christ stands out for its <strong>stark, sculpted quality</strong> against a black background. The dramatic lighting and physical realism reflect Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotional intensity." }
  ],
  'rembrandt-christ-preaching': [
    { question: "What is this print also called?", answer: "This etching is also known as \"<strong>The Hundred Guilder Print</strong>\" because of the high price it commanded. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> worked on it over many years, creating one of his most technically accomplished and emotionally rich compositions." }
  ],
  'rembrandt-christ-presented-to-the-people': [
    { question: "What is the Ecce Homo scene?", answer: "It shows Pilate presenting <strong>Christ to the crowd</strong>, asking them to choose between Jesus and Barabbas. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this as a large, architecturally complex etching with dramatic crowd dynamics." }
  ],
  'rembrandt-christ-returning-from-the-temple-with-his-parents': [
    { question: "What family dynamic does Rembrandt show?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> depicts the <strong>Holy Family as ordinary parents</strong> walking with their child after his Temple debate. This gentle, domestic interpretation brings biblical events into recognizable human experience." }
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
