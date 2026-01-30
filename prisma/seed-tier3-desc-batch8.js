const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'arnold-bocklin-the-bagpiper': [
    { question: "Where is The Bagpiper displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich. The museum holds several Böcklin works in its 19th-century collection." },
    { question: "What does The Bagpiper depict?", answer: "The painting shows a <strong>solitary bagpiper in a wild landscape</strong>. Böcklin often placed lone figures in nature, creating a tension between human presence and the untamed environment." },
    { question: "Who painted The Bagpiper?", answer: "<a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a> created this work. The Swiss <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter blended <strong>mythological themes with moody landscapes</strong>, influencing Surrealists like de Chirico and Dalí." }
  ],
  'artemisia-gentileschi-portrait-of-a-condottiero': [
    { question: "Where is Portrait of a Condottiero?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palazzo-d39accursio-palazzo-comunale-bologna-italy\"><strong>Palazzo d'Accursio</strong></a> in Bologna, Italy. It serves as both the city hall and a museum." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia Gentileschi</strong></a> created this work. She was the most accomplished <strong>female painter of the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> era</strong> and one of the first women admitted to Florence's Accademia delle Arti del Disegno." },
    { question: "What does this portrait show?", answer: "The painting depicts a <strong>condottiero</strong>, a professional military commander. It's an unusual subject for Gentileschi, who's better known for dramatic biblical heroines like Judith and Susanna." }
  ],
  'asher-brown-durand-the-indian39s-vespers': [
    { question: "Where is The Indian's Vespers displayed?", answer: "This painting hangs in the <a href=\"/apps/masterpieces/museum/white-house-washington-dc-us\"><strong>White House</strong></a> in Washington, D.C. It's part of the permanent White House art collection." },
    { question: "Who painted The Indian's Vespers?", answer: "<a href=\"/apps/masterpieces/artist/asher-brown-durand\"><strong>Asher Brown Durand</strong></a> created this work. He was a founding figure of the <strong>Hudson River School</strong>, America's first major art movement, painting the landscape as a place of spiritual contemplation." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>Native American figure in evening prayer</strong> within a vast wilderness landscape. Durand's luminous treatment of nature reflects the Hudson River School belief that American <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> held divine presence." }
  ],
  'august-macke-selfportrait160with-hat': [
    { question: "Where is this self-portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-bonn-bonn-germany\"><strong>Kunstmuseum Bonn</strong></a> in Germany. The museum holds the world's largest collection of August Macke's work." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a> painted himself wearing a hat. He was a German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> and member of the <strong>Blue Rider group</strong> alongside Kandinsky and Marc." },
    { question: "Why is Macke significant?", answer: "Macke was killed in World War I at age 27, cutting short a brilliant career. His <strong>vibrant, color-saturated paintings</strong> of everyday life blend Expressionism with a joyful, almost Fauvist palette that stands apart from his darker German contemporaries." }
  ],
  'bartolome-murillo-madonna-and-child': [
    { question: "Where is this Madonna and Child?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence. Murillo's Madonnas were hugely popular across Europe and widely collected." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this work. He was Seville's leading painter and one of the most beloved Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> artists, known for <strong>tender, warmly lit religious scenes</strong>." },
    { question: "What style did Murillo work in?", answer: "Murillo developed a <strong>soft, atmospheric style</strong> called his \"vaporous manner.\" His gentle Madonnas and charming street urchins made him Europe's most popular Spanish painter for two centuries." }
  ],
  'bartolome-murillo-two-boys-eating-a-melon-and-grapes': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. It's one of Murillo's best-known genre paintings." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>two street boys eating fruit</strong> with evident pleasure. Murillo painted Seville's poor children with affection and dignity, creating some of the first sympathetic depictions of <strong>child poverty</strong> in Western art." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this genre scene. Alongside his religious work, his paintings of <strong>Seville's street children</strong> were enormously popular with European collectors in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> period." }
  ],
  'bartolome-murillo-saint-didacus-of-alcal225-in-ecstasy-before-the-cr': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-des-augustins-toulouse-france\"><strong>Musée des Augustins</strong></a> in Toulouse, France. The museum occupies a former Augustinian monastery." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint Didacus (San Diego) in religious ecstasy</strong> before a crucifix. Murillo painted several works from the saint's life for Seville's Franciscan monastery in the 1640s." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this devotional painting. His <strong>San Diego cycle</strong> was one of his first major commissions and established his reputation in <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Seville." }
  ],
  'bartolome-murillo-the-virgin-of-the-rosary': [
    { question: "Where is The Virgin of the Rosary?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence. Murillo's devotional images were collected across Catholic Europe." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin Mary holding a rosary</strong>, surrounded by a soft, golden glow. Murillo's Marian paintings define the gentle, approachable side of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotion." },
    { question: "Who painted The Virgin of the Rosary?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this work. His <strong>Immaculate Conceptions and Marian paintings</strong> became the standard visual representation of these subjects in Catholic art for generations." }
  ],
  'bartolome-murillo-the-vision-of-fray-lauterio': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge, England. It's the art museum of the University of Cambridge." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Fray Lauterio experiencing a divine vision</strong>. Murillo excelled at painting moments of spiritual revelation, using soft light and atmospheric color to convey the supernatural." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> (1617-1682) created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious painting. He was Seville's most important painter and <strong>one of the most collected Spanish artists</strong> in 18th and 19th-century Europe." }
  ],
  'bartolome-murillo-the-angels39-kitchen': [
    { question: "Where is The Angels' Kitchen?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of Murillo's most charming and original compositions." },
    { question: "What does The Angels' Kitchen depict?", answer: "The scene shows <strong>angels cooking in a monastery kitchen</strong> while a friar levitates in prayer. It's from Murillo's San Diego cycle, depicting miracles from the saint's life with a light, almost humorous touch." },
    { question: "Who painted The Angels' Kitchen?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> painted this around 1646. The <strong>San Diego cycle</strong> was his breakthrough commission, blending <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> drama with everyday warmth." }
  ],
  'bartolome-murillo-vision-to-st-francis': [
    { question: "Where is Vision to St. Francis displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/real-academia-de-bellas-artes-de-san-fernando-madr\"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> in Madrid, Spain's oldest art academy." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Francis receiving a divine vision</strong>. Murillo painted Franciscan subjects throughout his career, reflecting Seville's deep connection to the Franciscan order." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this devotional painting. His <strong>soft lighting and emotional warmth</strong> made his religious works accessible and beloved across Catholic <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Europe." }
  ],
  'bartolome-murillo-st-diego-giving-alms': [
    { question: "Where is St. Diego Giving Alms?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/real-academia-de-bellas-artes-de-san-fernando-madr\"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>San Diego distributing food to the poor</strong>. It's part of Murillo's cycle depicting the life of this Franciscan saint, emphasizing charity and humility." },
    { question: "Who was Bartolomé Murillo?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> (1617-1682) was Seville's greatest <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter. He co-founded the <strong>Seville Academy of Art</strong> in 1660 and was its first president." }
  ],
  'benozzo-gozzoli-madonna-and-child-giving-blessings': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/santa-maria-sopra-minerva-rome-italy\"><strong>Santa Maria sopra Minerva</strong></a> in Rome, the only Gothic church in Rome's historic center." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/benozzo-gozzoli\"><strong>Benozzo Gozzoli</strong></a> created this devotional work. He was a pupil of <strong>Fra Angelico</strong> and is best known for his dazzling fresco cycle of the Journey of the Magi in Florence's Palazzo Medici." },
    { question: "What style is this painting?", answer: "It's an early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting. Gozzoli combined <strong>Gothic decorative richness with Renaissance spatial awareness</strong>, creating detailed, colorful compositions that feel both ornate and grounded." }
  ],
  'bernardino-luini-madonna-of-the-carnation': [
    { question: "Where is Madonna of the Carnation?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It's one of the gallery's finest examples of Lombard Renaissance painting." },
    { question: "Who painted Madonna of the Carnation?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> created this work. He was the leading follower of <strong>Leonardo da Vinci</strong> in Milan, adopting Leonardo's soft sfumato technique and gentle facial expressions." },
    { question: "What style is this painting?", answer: "It's a Lombard <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work showing strong <strong>Leonardo influence</strong>. Luini's Madonnas share Leonardo's misty modeling and mysterious smiles, though with a sweeter, more decorative quality." }
  ],
  'bernardino-luini-madonna-of-the-rosebush': [
    { question: "Where is Madonna of the Rose-bush?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan. The Brera holds the most important collection of Lombard Renaissance painting." },
    { question: "Who painted Madonna of the Rose-bush?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> (c. 1480-1532) created this work. He was Milan's most popular painter after Leonardo left, carrying forward the master's <strong>sfumato technique and serene compositions</strong>." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child before a rose bush</strong>. Roses symbolized the Virgin Mary in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art, and Luini painted this <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> backdrop with delicate naturalism." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
