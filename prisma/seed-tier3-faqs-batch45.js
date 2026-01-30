const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 45: tier 3 index 450-469 (20 artworks)
const newFaqs = {
  'andrea-del-sarto-disputation-on-the-trinity': [
    { question: "What theological subject is depicted?", answer: "The <strong>Disputation on the Trinity</strong> shows scholars debating the nature of God. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> painted this with the balanced composition and warm color that earned him praise as the \"faultless painter.\"" }
  ],
  'jan-steen-doctor39s-visit': [
    { question: "What is the joke in Doctor's Visit paintings?", answer: "Dutch <strong>\"doctor's visit\" paintings</strong> typically show a doctor diagnosing a young woman who is actually lovesick or pregnant, not ill. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> played this comic scenario for maximum humor." }
  ],
  'ernst-ludwig-kirchner-dodo-and-her-brother': [
    { question: "Who was Dodo?", answer: "<strong>Dodo</strong> (Doris Große) was <a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Kirchner's</strong></a> model and companion. He painted her frequently in his angular <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> style, capturing the bohemian lifestyle of Die Brücke artists in Dresden." }
  ],
  'ernst-ludwig-kirchner-dodo-with-a-japanese-umbrella': [
    { question: "How did Japanese art influence Expressionists?", answer: "<a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Kirchner</strong></a> and Die Brücke were influenced by <strong>Japanese woodcuts</strong> and non-Western art. The Japanese umbrella in this portrait reflects their interest in exotic objects and flattened, decorative compositions." }
  ],
  'van-gogh-dog': [
    { question: "Did Van Gogh often paint animals?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> occasionally painted <strong>dogs, cats, and insects</strong>, but animals weren't his primary subject. He was more drawn to landscapes, portraits, and still lifes that expressed his emotional connection to the world." }
  ],
  'henri-toulouse-lautrec-dog-car': [
    { question: "Did Toulouse-Lautrec paint animals?", answer: "<a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> grew up around <strong>horses and dogs</strong> at his family's estates. His early animal paintings show natural talent for capturing movement and character before he turned to Parisian nightlife." }
  ],
  'dolce-far-niente-godward': [
    { question: "What does Dolce Far Niente mean?", answer: "\"<strong>Dolce Far Niente</strong>\" is Italian for \"the sweetness of doing nothing.\" <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted beautiful women lounging in classical settings, embodying this Mediterranean ideal of leisurely pleasure." }
  ],
  'caspar-david-friedrich-dolmen-in-snow': [
    { question: "What is a dolmen?", answer: "A <strong>dolmen</strong> is a prehistoric stone tomb. <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> placed ancient monuments in stark winter landscapes to evoke the passage of time and human mortality, central themes of <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>." }
  ],
  'diego-velazquez-don-cristobal-suarez-de-ribera': [
    { question: "When did Velázquez paint this?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted this portrait during his <strong>early Seville years</strong> (before 1623). His naturalistic approach to portraiture was already evident, showing the direct, unflattered observation that later impressed the Spanish court." }
  ],
  'el-greco-dormition-of-the-virgin': [
    { question: "What is the Dormition?", answer: "The <strong>Dormition</strong> (\"falling asleep\") of the Virgin Mary is the Eastern Christian version of her death and assumption into heaven. <a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> combined his Byzantine heritage with <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> drama in this early work." }
  ],
  'hans-holbein-younger-dorothea-kannengiesser': [
    { question: "What was Holbein's portrait technique?", answer: "<a href=\"/apps/masterpieces/artist/hans-holbein-the-younger\"><strong>Holbein</strong></a> achieved <strong>remarkable likeness</strong> through careful preparatory drawings in colored chalks. His portraits combine northern precision with a calm dignity that made sitters look their best without flattery." }
  ],
  'giorgione-double-portrait': [
    { question: "How many works are attributed to Giorgione?", answer: "Only about <strong>six paintings</strong> are firmly attributed to <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>. Despite this tiny body of work, his poetic mood, atmospheric color, and mysterious subjects profoundly influenced Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." }
  ],
  'lucas-cranach-elder-dr-johannes-cuspinian': [
    { question: "Who was Johannes Cuspinian?", answer: "<strong>Cuspinian</strong> was a Viennese humanist scholar and diplomat. <a href=\"/apps/masterpieces/artist/lucas-cranach-the-elder\"><strong>Cranach</strong></a> painted him with a detailed <strong>landscape background</strong> rich in symbolism, typical of early German Renaissance portrait conventions." }
  ],
  'gustav-klimt-draft-of-a-theater-curtain': [
    { question: "How did Klimt evolve as an artist?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> moved from <strong>academic theater decorations</strong> to the radically ornamental style of his Golden Phase. His early commercial work developed the decorative sensibility that later defined Viennese <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>." }
  ],
  'leonardo-da-vinci-drapery-for-a-seated-figure': [
    { question: "Why did Leonardo study drapery?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> created meticulous <strong>drapery studies</strong> early in his training at Verrocchio's workshop. These drawings on linen show his obsessive attention to how fabric falls, wrinkles, and catches light." }
  ],
  'rembrandt-drawing-of-the-last-supper': [
    { question: "Did Rembrandt paint the Last Supper?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created a <strong>drawing</strong> of the Last Supper inspired by Leonardo's famous mural. His sketch reinterprets the composition with his characteristic intimate, emotionally direct approach to biblical scenes." }
  ],
  'rogier-van-der-weyden-dream-of-pope-sergius': [
    { question: "What legend is depicted?", answer: "It shows <strong>Pope Sergius's vision</strong> of St. Lambert's martyrdom. <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a> painted religious narratives with the emotional intensity and precise detail that defined the Netherlandish tradition." }
  ],
  'giotto-dream-of-st-gregory': [
    { question: "What is this fresco part of?", answer: "It's part of <a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto's</strong></a> fresco cycle depicting <strong>the life of St. Francis</strong>. His naturalistic storytelling and three-dimensional spaces in these Assisi frescoes marked the beginning of Western pictorial tradition." }
  ],
  'vittore-carpaccio-dream-of-stursula': [
    { question: "Who was Vittore Carpaccio?", answer: "<strong>Vittore Carpaccio</strong> was a Venetian narrative painter known for his <strong>detailed cycle paintings</strong>. His Dream of St. Ursula shows a sleeping saint visited by an angel, set in a meticulously rendered Venetian bedroom." }
  ],
  'giotto-dream-of-the-palace': [
    { question: "What story from St. Francis's life is shown?", answer: "It depicts St. Francis's <strong>dream of a palace</strong> filled with weapons marked with crosses, which he interpreted as a divine call to serve God rather than fight as a knight. <a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> tells this turning point with clarity." }
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
