const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ VELÁZQUEZ ============
  'diego-velazquez-kitchen-scene-with-the-supper-in-emmaus': [
    { question: "What type of painting is this?", answer: "This is a <strong>bodegón</strong>, a Spanish genre scene combining still life with figures. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted several bodegones early in his career in Seville." },
    { question: "What makes this painting unusual?", answer: "The religious scene of <strong>Christ at Emmaus</strong> appears in the background through a window, while the foreground focuses on a kitchen servant. This innovative composition was characteristic of Velázquez's early work." },
    { question: "When did Velázquez paint this?", answer: "This dates from around <strong>1618-1620</strong>, during Velázquez's Seville period before he became court painter in Madrid." }
  ],

  'diego-velazquez-three-musicians': [
    { question: "Where is Three Musicians displayed?", answer: "This painting is at the <a href='/apps/masterpieces/museum/gem228ldegalerie-berlin-germany'><strong>Gemäldegalerie</strong></a> in Berlin, Germany, among their collection of Old Master paintings." },
    { question: "What period does this represent?", answer: "This is from <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez's</strong></a> <strong>early Seville period</strong>, when he focused on genre scenes and bodegones before moving to the Spanish court." },
    { question: "What artistic influences are visible?", answer: "The dramatic lighting and realistic figures show influence of <strong>Caravaggio's</strong> naturalism, which reached Spain through Italian and Flemish sources." }
  ],

  'diego-velazquez-st-paul': [
    { question: "Where can I see this painting?", answer: "This St. Paul is at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, which holds the world's greatest collection of <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> paintings." },
    { question: "When did Velázquez paint religious subjects?", answer: "Velázquez painted <strong>religious works primarily early</strong> in his career in Seville. After becoming court painter, he focused mainly on portraits and mythological subjects." },
    { question: "How does this compare to his later work?", answer: "The dramatic lighting and somber palette reflect his <strong>early Caravaggesque style</strong>, before he developed the looser, more atmospheric technique of his mature paintings." }
  ],

  'diego-velazquez-the-virgin-appearing-to-st-ildephonsus-and-giving-': [
    { question: "Where is this painting displayed?", answer: "This work is at the <strong>Museum of Fine Arts of Seville</strong>, Spain. It's one of <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez's</strong></a> religious paintings from his Seville period." },
    { question: "Who was Saint Ildephonsus?", answer: "<strong>Saint Ildephonsus</strong> was a 7th-century Archbishop of Toledo. Legend says the Virgin Mary appeared to him and gave him a chasuble (vestment) as a reward for defending her perpetual virginity." },
    { question: "What period does this represent?", answer: "This dates from Velázquez's <strong>early career</strong> in Seville, around 1620, before he was called to the Spanish court in Madrid." }
  ],

  'diego-velazquez-two-young-men-eating-at-a-humble-table': [
    { question: "Where can I see this painting?", answer: "This bodegón is at <a href='/apps/masterpieces/museum/apsley-house-wellington-museum-london-uk'><strong>Apsley House</strong></a> (Wellington Museum) in London, the former residence of the Duke of Wellington." },
    { question: "What is a bodegón?", answer: "A <strong>bodegón</strong> is a Spanish genre scene typically showing humble people eating or drinking, often with still life elements. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> excelled at this type early in his career." },
    { question: "How did this painting reach England?", answer: "Like many Spanish masterpieces at Apsley House, it was likely <strong>acquired during the Peninsular War</strong> or purchased from Spanish collections by the Duke of Wellington." }
  ],

  'diego-velazquez-saint-thomas': [
    { question: "Where is Saint Thomas displayed?", answer: "This painting is at the <strong>Musée des Beaux-Arts d'Orléans</strong> in France. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted several apostle figures during his early career." },
    { question: "How did Velázquez depict apostles?", answer: "Velázquez portrayed apostles as <strong>real, weathered men</strong> rather than idealized figures, bringing the naturalism of his bodegones to religious subjects." },
    { question: "What artistic movement influenced this work?", answer: "The strong lighting and realistic portrayal show the influence of <strong>Caravaggism</strong>, which was popular in Spain during Velázquez's formative years." }
  ],

  'diego-velazquez-the-lunch': [
    { question: "Where is The Lunch displayed?", answer: "This bodegón is at the <a href='/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary'><strong>Museum of Fine Arts</strong></a> in Budapest, Hungary." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>figures gathered around a table</strong> in a humble setting, typical of the bodegón genre that <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> mastered in Seville." },
    { question: "When was this painted?", answer: "This dates from around <strong>1617-1618</strong>, making it one of Velázquez's earliest known works, painted when he was about 18 years old." }
  ],

  'diego-velazquez-portrait-of-a-cleric': [
    { question: "What type of portrait is this?", answer: "This is a <strong>religious portrait</strong> showing an unidentified clergyman, demonstrating <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez's</strong></a> skill in capturing character and personality." },
    { question: "Where is this portrait located?", answer: "The painting is in a <strong>private collection</strong>. Many Velázquez works remain in private hands, particularly smaller portraits." },
    { question: "What period does this represent?", answer: "The style suggests this is from Velázquez's <strong>Seville period</strong> or early Madrid years, showing his characteristic naturalism and psychological depth." }
  ],

  'diego-velazquez-saint-paul': [
    { question: "Who is depicted in this painting?", answer: "The painting shows <strong>Saint Paul</strong>, one of the most important figures in early Christianity. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted him as a thoughtful, weathered man." },
    { question: "Where is this version located?", answer: "This Saint Paul is in a <strong>private collection</strong>. Velázquez painted multiple apostle figures; another St. Paul is at the Prado." },
    { question: "What makes Velázquez's saints distinctive?", answer: "Velázquez portrayed saints as <strong>real individuals</strong> with wrinkles, rough hands, and expressive faces, bringing unprecedented naturalism to religious art." }
  ],

  'diego-velazquez-saint-john-at-patmos': [
    { question: "Where can I see Saint John at Patmos?", answer: "This painting is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. It's one of the finest examples of <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez's</strong></a> early religious work." },
    { question: "What scene does this depict?", answer: "The painting shows <strong>Saint John writing the Book of Revelation</strong> during his exile on the island of Patmos. The eagle beside him is his traditional symbol." },
    { question: "When did Velázquez paint this?", answer: "This dates from around <strong>1618-1620</strong>, during Velázquez's Seville period when he painted several religious subjects before focusing on court portraits." }
  ],

  // ============ MICHELANGELO ============
  'michelangelo-pius': [
    { question: "Where is this sculpture located?", answer: "This figure is in the <strong>Duomo di Siena</strong> (Siena Cathedral) in Italy. <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> created several works for Siena early in his career." },
    { question: "What does this sculpture depict?", answer: "The sculpture depicts <strong>Pope Pius</strong>, one of several papal figures created for the Piccolomini altar in Siena Cathedral." },
    { question: "When did Michelangelo work in Siena?", answer: "Michelangelo worked on the Piccolomini altar around <strong>1501-1504</strong>, between his early Pietà and the creation of David." }
  ],

  'michelangelo-various-studies': [
    { question: "Where is this drawing displayed?", answer: "This sheet of studies is at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris, which holds important <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> drawings." },
    { question: "What do study drawings reveal?", answer: "Michelangelo's study sheets show his <strong>working process</strong>, including anatomy studies, compositional sketches, and ideas that might develop into finished works." },
    { question: "Why are Michelangelo's drawings valuable?", answer: "His drawings demonstrate his <strong>unparalleled understanding of anatomy</strong> and reveal the creative process behind his sculptures and paintings." }
  ],

  'michelangelo-study-of-figure-to-quotbattle-of-cascinaquot': [
    { question: "Where is this drawing?", answer: "This study is at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London, which holds several important <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> drawings." },
    { question: "What was the Battle of Cascina?", answer: "The Battle of Cascina was a <strong>planned mural</strong> for Florence's Palazzo Vecchio. Michelangelo never completed it, but his cartoon (full-scale drawing) was extremely influential." },
    { question: "Why is this study significant?", answer: "These studies show Michelangelo's <strong>mastery of male anatomy</strong> in action. The lost Battle of Cascina cartoon was studied by generations of artists." }
  ],

  'michelangelo-sketch-of-a-nude-man-study-for-the-quotbattle-of-c': [
    { question: "Where can I see this drawing?", answer: "This study is at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London among their Renaissance drawings collection." },
    { question: "What was this drawing for?", answer: "This is a study for the <strong>Battle of Cascina</strong>, a mural <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> planned but never completed for Florence's Palazzo Vecchio." },
    { question: "Why did Michelangelo never finish the Battle of Cascina?", answer: "Pope Julius II called Michelangelo to Rome in <strong>1505</strong> to work on his tomb and later the Sistine Chapel ceiling, leaving the Florentine project incomplete." }
  ],

  'michelangelo-st-paul': [
    { question: "Where is this sculpture?", answer: "This figure is in the <strong>Duomo di Siena</strong>, part of the Piccolomini altar. <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> created several figures for this commission." },
    { question: "When did Michelangelo create this?", answer: "The Piccolomini altar figures date from around <strong>1501-1504</strong>, during Michelangelo's early career between major commissions in Florence and Rome." },
    { question: "How does this compare to Michelangelo's later work?", answer: "These early figures show Michelangelo developing the <strong>powerful forms</strong> that would characterize his later masterpieces like David and the Sistine Chapel figures." }
  ],

  'michelangelo-madonna-of-the-stairs': [
    { question: "Where is the Madonna of the Stairs?", answer: "This marble relief is at <a href='/apps/masterpieces/museum/casa-buonarroti-florence-italy'><strong>Casa Buonarroti</strong></a> in Florence, the museum dedicated to <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> in his family's former home." },
    { question: "When did Michelangelo create this relief?", answer: "This is one of Michelangelo's <strong>earliest known works</strong>, created around 1490-1492 when he was only about 15-17 years old." },
    { question: "What technique is used?", answer: "Michelangelo used <strong>rilievo schiacciato</strong> (flattened relief), a technique developed by Donatello that creates subtle depth through very shallow carving." }
  ],

  'michelangelo-the-torment-of-saint-anthony': [
    { question: "Where can I see The Torment of Saint Anthony?", answer: "This painting is at the <a href='/apps/masterpieces/museum/kimbell-art-museum'><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas. It's the only known panel painting by <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a>." },
    { question: "When did Michelangelo paint this?", answer: "Michelangelo painted this around <strong>1487-1488</strong>, when he was only 12 or 13 years old, making it his earliest surviving work." },
    { question: "What makes this painting historically important?", answer: "It's the <strong>only authenticated panel painting</strong> by Michelangelo, who primarily worked as a sculptor and fresco painter. It was based on an engraving by Martin Schongauer." }
  ],

  'michelangelo-study-to-quotbattle-of-cascinaquot': [
    { question: "Where is this study?", answer: "This drawing is at <a href='/apps/masterpieces/museum/casa-buonarroti-florence-italy'><strong>Casa Buonarroti</strong></a> in Florence, the museum dedicated to <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a>." },
    { question: "What was the Battle of Cascina project?", answer: "Florence commissioned Michelangelo to paint a <strong>mural commemorating their 1364 victory</strong> over Pisa. Leonardo da Vinci was to paint the opposite wall." },
    { question: "Why is the Battle of Cascina famous despite being unfinished?", answer: "Michelangelo's preparatory cartoon (full-scale drawing) was <strong>enormously influential</strong>. Young artists studied and copied it until it was worn out and destroyed." }
  ],
};

async function main() {
  console.log('=== Adding Missing FAQs (Batch 3) ===\n');

  let updated = 0;
  for (const [slug, faqArray] of Object.entries(faqs)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        faqs: faqArray,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log('Updated:', slug);
      updated++;
    } else {
      console.log('Not found:', slug);
    }
  }

  console.log(`\n=== Complete: ${updated} artworks updated ===`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
