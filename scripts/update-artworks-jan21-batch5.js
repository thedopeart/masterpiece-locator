const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting artwork updates (Batch 5: 25 artworks)...\n');

  // 1. Jean-Antoine Watteau - The Serenader
  await prisma.artwork.update({
    where: { slug: 'jean-antoine-watteau-the-serenader' },
    data: {
      description: `<p><a href="/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> captured a musician serenading in a garden setting, a scene typical of his dreamy fêtes galantes. A figure plays music for an unseen audience amid lush foliage, the composition suffused with the <strong>melancholic charm</strong> characteristic of Watteau's work. Soft <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colors</strong></a> and feathery brushwork create an atmosphere of fleeting pleasure.</p>

<p>Watteau invented the fête galante genre, depicting aristocrats at leisure in parkland settings. His paintings capture moments that seem about to dissolve, reflecting his awareness of time's passage. He died of tuberculosis at just 36. This work hangs at the <a href="/museum/mus233e-cond233-chantilly-france"><strong>Musée Condé</strong></a> in Chantilly, which holds an exceptional <a href="/movement/rococo"><strong>Rococo</strong></a> collection.</p>`,
      faqs: [
        { question: "What is a fête galante?", answer: "A <strong>fête galante</strong> depicts aristocrats at leisure in parkland settings. <a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> invented this <a href=\"/movement/rococo\"><strong>Rococo</strong></a> genre, capturing fleeting moments of elegant pleasure and melancholy." },
        { question: "Where can I see this painting?", answer: "The Serenader hangs at the <a href=\"/museum/mus233e-cond233-chantilly-france\"><strong>Musée Condé</strong></a> in Chantilly, France. The museum holds one of France's finest collections of Old Master paintings." },
        { question: "Why is Watteau's work melancholic?", answer: "<a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> suffered from <strong>tuberculosis</strong> and died at 36. His awareness of mortality infuses his pleasurable scenes with an undertone of transience and loss." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-antoine-watteau-the-serenader');

  // 2. Leonardo da Vinci - Study of a child with a cat
  await prisma.artwork.update({
    where: { slug: 'leonardo-da-vinci-study-of-a-child-with-a-cat' },
    data: {
      description: `<p><a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> made this lively study of a child playing with a cat, capturing the <strong>spontaneous movement and energy</strong> of both figures. The drawing shows Leonardo's scientific observation of anatomy and motion applied to everyday subjects. Quick, confident lines suggest the squirming cat and the child's attempts to hold it.</p>

<p>Leonardo filled notebooks with such studies, observing life constantly to improve his understanding of form and movement. These preparatory drawings reveal his working process and remain highly prized for their immediacy. The <a href="/movement/renaissance"><strong>Renaissance</strong></a> master's drawings influenced generations of artists. This sheet is held at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Why did Leonardo draw studies like this?", answer: "<a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> constantly observed life to understand <strong>anatomy and movement</strong>. Such studies trained his eye and hand, informing his finished paintings with unprecedented naturalism." },
        { question: "Where can I see this drawing?", answer: "This study is held at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, which has significant <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> drawings and paintings." },
        { question: "Are Leonardo's drawings valuable?", answer: "<a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo's</strong></a> drawings are <strong>extremely valuable</strong>, prized for their immediacy and insight into his genius. They reveal his working process and scientific observation." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: leonardo-da-vinci-study-of-a-child-with-a-cat');

  // 3. Mary Cassatt - Spanish Dancer Wearing a Lace Mantilla
  await prisma.artwork.update({
    where: { slug: 'mary-cassatt-spanish-dancer-wearing-a-lace-mantilla' },
    data: {
      description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this striking image of a Spanish dancer wearing a traditional lace mantilla. The work shows Cassatt's interest in <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women's</strong></a> lives and her <a href="/movement/impressionism"><strong>Impressionist</strong></a> handling of light on fabric. The dancer's confident pose and the intricate lacework demonstrate Cassatt's skill at capturing both character and texture.</p>

<p>Cassatt was the only American artist invited to exhibit with the French Impressionists. She was particularly interested in depicting women in their daily activities with dignity and psychological depth. This work is currently in a private collection.</p>`,
      faqs: [
        { question: "What is a mantilla?", answer: "A <strong>mantilla</strong> is a traditional Spanish lace veil worn over the head and shoulders. <a href=\"/artist/mary-cassatt\"><strong>Cassatt</strong></a> captured its intricate texture with her <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> technique." },
        { question: "Why is Mary Cassatt significant?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Cassatt</strong></a> was the <strong>only American</strong> invited to exhibit with the French Impressionists. She specialized in intimate portrayals of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> and children." },
        { question: "Where can I see Cassatt paintings?", answer: "This work is in a <strong>private collection</strong>. Major Cassatt paintings hang at the National Gallery of Art, the Met, and the Musée d'Orsay." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: mary-cassatt-spanish-dancer-wearing-a-lace-mantilla');

  // 4. Nicolas Poussin - Shepherds of Arcadia
  await prisma.artwork.update({
    where: { slug: 'nicolas-poussin-shepherds-of-arcadia' },
    data: {
      description: `<p><a href="/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> depicted shepherds in the idyllic land of Arcadia discovering a tomb with the inscription "Et in Arcadia Ego" (Even in Arcadia, I am). Death intrudes even in paradise. The figures contemplate mortality with <strong>classical restraint and philosophical calm</strong>, embodying <a href="/movement/baroque"><strong>Baroque</strong></a> classicism.</p>

<p>Poussin painted multiple versions of this subject, which became one of art history's most famous meditations on death. The <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>Arcadian landscape</strong></a> represents an idealized pastoral world. This version hangs at <a href="/museum/chatsworth-house-derbyshire-uk"><strong>Chatsworth House</strong></a> in Derbyshire; the more famous version is at the Louvre.</p>`,
      faqs: [
        { question: "What does 'Et in Arcadia Ego' mean?", answer: "The Latin phrase means \"<strong>Even in Arcadia, I am</strong>,\" with Death as the speaker. Even in paradise, mortality exists. This <a href=\"/movement/baroque\"><strong>Baroque</strong></a> memento mori became a famous artistic theme." },
        { question: "Where can I see this painting?", answer: "This version hangs at <a href=\"/museum/chatsworth-house-derbyshire-uk\"><strong>Chatsworth House</strong></a> in Derbyshire, England. The more famous version is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "What is Arcadia?", answer: "<strong>Arcadia</strong> was an idealized pastoral region in ancient Greece, representing a <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>paradise</strong></a> of simple, harmonious life. Artists used it to explore themes of innocence and mortality." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: nicolas-poussin-shepherds-of-arcadia');

  // 5. Paul Delaroche - The Childhood of Pico della Mirandola
  await prisma.artwork.update({
    where: { slug: 'paul-delaroche-the-childhood-of-pico-della-mirandola' },
    data: {
      description: `<p><a href="/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> depicted the young Pico della Mirandola, the <a href="/movement/renaissance"><strong>Renaissance</strong></a> philosopher who became famous for his brilliance and beauty. The child prodigy appears in a rich interior, already displaying the intellectual intensity that would make him one of the age's great minds. Delaroche rendered the scene with his characteristic <strong>meticulous historical detail</strong>.</p>

<p>Delaroche specialized in dramatic history paintings that brought the past vividly to life for 19th-century audiences. His careful research and polished technique made him enormously popular. This work hangs at the <a href="/museum/mus233e-des-beauxarts-de-nantes-nantes-france"><strong>Musée des Beaux-Arts de Nantes</strong></a>.</p>`,
      faqs: [
        { question: "Who was Pico della Mirandola?", answer: "<strong>Pico della Mirandola</strong> was a <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> philosopher famous for his brilliance and his \"Oration on the Dignity of Man.\" He mastered multiple languages and philosophies by his early twenties." },
        { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/museum/mus233e-des-beauxarts-de-nantes-nantes-france\"><strong>Musée des Beaux-Arts de Nantes</strong></a> in France, which holds significant 19th-century French paintings." },
        { question: "What style did Delaroche work in?", answer: "<a href=\"/artist/paul-delaroche\"><strong>Delaroche</strong></a> painted <strong>dramatic history scenes</strong> with meticulous research and polished technique. He was enormously popular for bringing the past vividly to life." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: paul-delaroche-the-childhood-of-pico-della-mirandola');

  // 6. Konstantin Korovin - Portrait of a Chorus Girl
  await prisma.artwork.update({
    where: { slug: 'konstantin-korovin-portrait-of-a160chorus-girl' },
    data: {
      description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> captured a chorus girl in this vibrant <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>, showcasing the Russian <a href="/movement/impressionism"><strong>Impressionist's</strong></a> bold brushwork and keen eye for theatrical subjects. The sitter's costume and pose suggest the backstage world of Russian theater that Korovin knew well as a set designer.</p>

<p>Korovin was the leading Russian Impressionist, bringing French techniques to Russian subjects. He designed sets for the Bolshoi and Mariinsky theaters, giving him intimate access to performers. His portraits capture the <strong>vivacious energy</strong> of stage life. This painting hangs at the <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
      faqs: [
        { question: "Who was Konstantin Korovin?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Korovin</strong></a> was the leading Russian <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a>, known for bold brushwork and theatrical subjects. He also designed sets for the Bolshoi and Mariinsky theaters." },
        { question: "Where can I see this portrait?", answer: "This painting hangs at the <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia's premier collection of Russian art from medieval icons to modern works." },
        { question: "Why did Korovin paint theatrical subjects?", answer: "Korovin worked as a <strong>set designer</strong> for major Russian theaters, giving him backstage access to performers. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> capture the vivacious energy of stage life." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: konstantin-korovin-portrait-of-a160chorus-girl');

  // 7. Petrus Christus - Isabella of Portugal with St. Elizabeth
  await prisma.artwork.update({
    where: { slug: 'petrus-christus-isabella-of-portugal-with-st-elizabeth' },
    data: {
      description: `<p><a href="/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted Isabella of Portugal, Duchess of Burgundy, alongside her patron saint Elizabeth in this devotional panel. The duchess wears sumptuous court dress while St. Elizabeth appears in simpler attire. <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> precision captures every detail of <strong>fabric, jewelry, and flesh</strong>.</p>

<p>Christus was Jan van Eyck's leading follower in Bruges, continuing the tradition of meticulous realism. Such donor portraits placed noble patrons alongside their saints, combining devotion with dynastic display. This painting hangs at the <a href="/museum/groeningemuseum-bruges-belgium"><strong>Groeningemuseum</strong></a> in Bruges.</p>`,
      faqs: [
        { question: "Who was Isabella of Portugal?", answer: "<strong>Isabella of Portugal</strong> was Duchess of Burgundy, married to Philip the Good. She was a powerful figure who helped arrange the marriage that united Spain. St. Elizabeth was her patron saint." },
        { question: "Where can I see this painting?", answer: "This panel hangs at the <a href=\"/museum/groeningemuseum-bruges-belgium\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium, which holds major <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> paintings." },
        { question: "Who was Petrus Christus?", answer: "<a href=\"/artist/petrus-christus\"><strong>Petrus Christus</strong></a> was <strong>Jan van Eyck's leading follower</strong> in Bruges. He continued the tradition of meticulous Northern realism after van Eyck's death." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: petrus-christus-isabella-of-portugal-with-st-elizabeth');

  // 8. Lawrence Alma-Tadema - Pastimes in Ancient Egypt 3,000 Years Ago
  await prisma.artwork.update({
    where: { slug: 'lawrence-alma-tadema-pastimes-in-ancient-egyupe-3-000-years-ago' },
    data: {
      description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> recreated ancient Egyptian leisure with his characteristic <strong>archaeological precision and sensuous detail</strong>. Figures relax in an opulent setting, every surface rendered with marble-like clarity. The Dutch-British artist specialized in bringing antiquity to life for Victorian audiences hungry for escapist visions.</p>

<p>Alma-Tadema researched ancient life obsessively, collecting photographs and studying artifacts. His paintings influenced early Hollywood's vision of the ancient world. Critics dismissed him after his death, but his technical mastery has regained appreciation. This work hangs at the <a href="/museum/harris-museum-preston-uk"><strong>Harris Museum</strong></a> in Preston.</p>`,
      faqs: [
        { question: "What style did Alma-Tadema work in?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> worked in <a href=\"/movement/academic-art\"><strong>Academic</strong></a> style, recreating antiquity with <strong>archaeological precision</strong>. His marble surfaces and luxurious details made ancient life vivid for Victorian viewers." },
        { question: "Where can I see this painting?", answer: "Pastimes in Ancient Egypt hangs at the <a href=\"/museum/harris-museum-preston-uk\"><strong>Harris Museum</strong></a> in Preston, England, which holds significant Victorian paintings." },
        { question: "Did Alma-Tadema influence Hollywood?", answer: "Yes, <a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema's</strong></a> paintings <strong>influenced early Hollywood</strong> productions. Directors used his images as references for ancient world sets and costumes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: lawrence-alma-tadema-pastimes-in-ancient-egyupe-3-000-years-ago');

  // 9. Piet Mondrian - Irrigation Ditch with Mature Willow
  await prisma.artwork.update({
    where: { slug: 'piet-mondrian-irrigation-ditch-with-mature-willow' },
    data: {
      description: `<p><a href="/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this Dutch <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> before developing his famous abstract style. A mature willow reflects in the still water of an irrigation ditch, the scene rendered with <strong>naturalistic attention to light and atmosphere</strong>. These early works show Mondrian's roots in Dutch landscape tradition.</p>

<p>Mondrian's evolution from representational landscapes to pure abstraction was gradual. He progressively simplified forms, eventually arriving at his signature grids of primary colors. This transitional work reveals the foundations beneath his later innovations. The painting is in a private collection.</p>`,
      faqs: [
        { question: "Did Mondrian paint landscapes?", answer: "Yes, <a href=\"/artist/piet-mondrian\"><strong>Mondrian</strong></a> began as a <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painter in the Dutch tradition. He gradually simplified forms over years before reaching pure abstraction." },
        { question: "What style is this painting?", answer: "This early work is <strong>naturalistic</strong>, showing Mondrian's roots in traditional Dutch landscape painting. It predates his famous abstract grids of primary colors and black lines." },
        { question: "Where can I see early Mondrian paintings?", answer: "This work is in a <strong>private collection</strong>. The Gemeentemuseum in The Hague holds the world's largest Mondrian collection, including early landscapes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: piet-mondrian-irrigation-ditch-with-mature-willow');

  // 10. Pieter Bruegel the Elder - Lust
  await prisma.artwork.update({
    where: { slug: 'pieter-bruegel-elder-lust' },
    data: {
      description: `<p><a href="/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> depicted the sin of Lust as part of a series on the Seven Deadly Sins. The drawing shows <strong>fantastical creatures and human folly</strong> in Bruegel's characteristic style, combining moralizing messages with darkly comic imagery. Bizarre figures engage in lustful behavior amid a nightmarish landscape.</p>

<p>Bruegel's prints of the Seven Deadly Sins drew on the tradition of Hieronymus Bosch, whom he studied closely. These moralizing images were popular in <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> culture. This work hangs at the <a href="/museum/museum-of-fine-arts-mfa-boston-ma-us"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
      faqs: [
        { question: "What series does this belong to?", answer: "This work is part of Bruegel's <strong>Seven Deadly Sins</strong> series. Each print depicted a sin through fantastical imagery, combining moral warnings with darkly comic invention." },
        { question: "Where can I see this work?", answer: "Lust hangs at the <a href=\"/museum/museum-of-fine-arts-mfa-boston-ma-us\"><strong>Museum of Fine Arts, Boston</strong></a>, which holds significant <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> prints and drawings." },
        { question: "Who influenced Bruegel's fantastical imagery?", answer: "<a href=\"/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> studied <strong>Hieronymus Bosch</strong> closely, adopting his fantastical creatures and nightmarish landscapes for moralizing subjects." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: pieter-bruegel-elder-lust');

  // 11. Pieter de Hooch - The Bedroom
  await prisma.artwork.update({
    where: { slug: 'pieter-de-hooch-the-bedroom' },
    data: {
      description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> specialized in domestic interiors suffused with warm light, and this bedroom scene exemplifies his mastery. Sunlight enters through a window, illuminating the <strong>orderly Dutch interior</strong> with its crisp linens and polished surfaces. A woman attends to domestic duties in this celebration of household virtue.</p>

<p>De Hooch was a leading painter of the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, rivaling Vermeer in his treatment of light-filled interiors. His paintings celebrate bourgeois domesticity as moral virtue. This work hangs at the <a href="/museum/staatliche-kunsthalle-karlsruhe-karlsruhe-germany"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany.</p>`,
      faqs: [
        { question: "What subjects did Pieter de Hooch paint?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> specialized in <strong>domestic interiors</strong> suffused with warm light. His paintings celebrated Dutch bourgeois life, showing orderly households as moral virtue." },
        { question: "Where can I see The Bedroom?", answer: "This painting hangs at the <a href=\"/museum/staatliche-kunsthalle-karlsruhe-karlsruhe-germany\"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany, which holds significant <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> paintings." },
        { question: "How does de Hooch compare to Vermeer?", answer: "Both painted light-filled Dutch interiors, but <a href=\"/artist/pieter-de-hooch\"><strong>de Hooch</strong></a> emphasized <strong>domestic activity and spatial depth</strong>, while Vermeer focused on stillness and psychological mystery." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: pieter-de-hooch-the-bedroom');

  // 12. Luca Signorelli - View of the Vaulting of the Sacristy of St. John
  await prisma.artwork.update({
    where: { slug: 'luca-signorelli-view-of-the-vaulting-of-the-sacristy-of-st-john' },
    data: {
      description: `<p><a href="/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> decorated the vaulting of this sacristy with figures displaying his renowned mastery of the <strong>human form in dynamic poses</strong>. The <a href="/movement/renaissance"><strong>Renaissance</strong></a> master was famous for his anatomical knowledge, which Michelangelo studied and admired. Muscular figures twist and turn across the ceiling.</p>

<p>Signorelli's frescoes at Orvieto Cathedral would later inspire Michelangelo's Sistine Chapel ceiling. His work at Loreto demonstrates the same powerful physicality. These frescoes remain in situ at the <a href="/museum/basilica-della-santa-casa-loreto-italy"><strong>Basilica della Santa Casa</strong></a> in Loreto.</p>`,
      faqs: [
        { question: "What was Signorelli famous for?", answer: "<a href=\"/artist/luca-signorelli\"><strong>Signorelli</strong></a> was famous for his <strong>anatomical mastery</strong>. His muscular figures in dynamic poses influenced Michelangelo, who studied Signorelli's frescoes at Orvieto Cathedral." },
        { question: "Where can I see these frescoes?", answer: "These frescoes remain in situ at the <a href=\"/museum/basilica-della-santa-casa-loreto-italy\"><strong>Basilica della Santa Casa</strong></a> in Loreto, Italy, an important pilgrimage site." },
        { question: "Did Signorelli influence Michelangelo?", answer: "Yes, <strong>Michelangelo studied Signorelli's</strong> frescoes at Orvieto Cathedral. Signorelli's powerful anatomical figures helped inspire the <a href=\"/movement/renaissance\"><strong>Sistine Chapel ceiling</strong></a>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: luca-signorelli-view-of-the-vaulting-of-the-sacristy-of-st-john');

  // 13. Raoul Dufy - The River
  await prisma.artwork.update({
    where: { slug: 'raoul-dufy-the-river' },
    data: {
      description: `<p><a href="/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> painted this joyful river scene with the <strong>bright colors and fluid lines</strong> that made him one of the most beloved French artists of the 20th century. <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>Blues</strong></a> and greens flow together as boats glide past trees, the whole composition radiating pleasure and ease.</p>

<p>Dufy began as a <a href="/movement/fauvism"><strong>Fauvist</strong></a>, influenced by Matisse's bold colors. He developed a distinctive decorative style, creating textile designs and large murals alongside easel paintings. His work captures the leisured pleasures of French life. This painting is in a private collection.</p>`,
      faqs: [
        { question: "What style did Raoul Dufy work in?", answer: "<a href=\"/artist/raoul-dufy\"><strong>Dufy</strong></a> began as a <a href=\"/movement/fauvism\"><strong>Fauvist</strong></a>, influenced by Matisse. He developed a distinctive decorative style with bright colors and fluid lines celebrating leisure." },
        { question: "What subjects did Dufy paint?", answer: "Dufy painted <strong>regattas, racecourses, and seaside scenes</strong>: the pleasures of French bourgeois life. He also designed textiles and created large decorative murals." },
        { question: "Where can I see Dufy paintings?", answer: "This work is in a <strong>private collection</strong>. Major Dufy paintings hang at the Centre Pompidou, the Musée d'Art Moderne de Paris, and other French institutions." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: raoul-dufy-the-river');

  // 14. Rembrandt - Two Old Men Disputing
  await prisma.artwork.update({
    where: { slug: 'rembrandt-two-old-men-disputing' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted two elderly scholars in animated discussion, their faces illuminated against a dark background. One gestures emphatically while the other listens. Rembrandt's <strong>psychological insight and mastery of light</strong> transform a simple scene into a profound meditation on age, wisdom, and human connection.</p>

<p>Such character studies were central to Rembrandt's art. He found endless fascination in elderly faces marked by experience. The <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> master captured not just appearance but inner life. This painting is in a private collection.</p>`,
      faqs: [
        { question: "Why did Rembrandt paint elderly subjects?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> found <strong>endless fascination</strong> in elderly faces marked by experience. His character studies capture wisdom, doubt, and the weight of years lived." },
        { question: "What technique does this show?", answer: "The painting demonstrates Rembrandt's signature <strong>chiaroscuro</strong>: dramatic contrast between light and dark. Illuminated faces emerge from shadow, focusing attention on expression and character." },
        { question: "Where can I see Rembrandt's work?", answer: "This painting is in a <strong>private collection</strong>. Major Rembrandt works hang at the <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a>, the Met, and the National Gallery." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-two-old-men-disputing');

  // 15. Salvator Rosa - The Finding of Moses
  await prisma.artwork.update({
    where: { slug: 'salvator-rosa-the-finding-of-moses' },
    data: {
      description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> depicted the biblical scene of Pharaoh's daughter discovering the infant Moses in a basket among the reeds. The <a href="/movement/baroque"><strong>Baroque</strong></a> master set the scene in a <strong>wild, rocky landscape</strong> typical of his dramatic style. Figures cluster around the child as servants attend the princess.</p>

<p>Rosa was famous for his bandits, battles, and savage landscapes, but also painted religious and mythological subjects. His dark romanticism anticipated later movements. This painting hangs at the <a href="/museum/kimbell-art-museum-fort-worth-tx-us"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas.</p>`,
      faqs: [
        { question: "What biblical story does this show?", answer: "The painting depicts <strong>Pharaoh's daughter finding baby Moses</strong> in a basket among the Nile's reeds. She would raise him as her own son, beginning his journey to lead the Israelites." },
        { question: "Where can I see this painting?", answer: "The Finding of Moses hangs at the <a href=\"/museum/kimbell-art-museum-fort-worth-tx-us\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas, known for its exceptional Old Master collection." },
        { question: "What was Salvator Rosa famous for?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Rosa</strong></a> was famous for <strong>bandits, battles, and wild landscapes</strong>. His dark <a href=\"/movement/baroque\"><strong>Baroque</strong></a> romanticism anticipated the Romantic movement by a century." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: salvator-rosa-the-finding-of-moses');

  // 16. Thomas Cole - View on Lake Winnipiseogee
  await prisma.artwork.update({
    where: { slug: 'thomas-cole-view-on-lake-winnipiseogee' },
    data: {
      description: `<p><a href="/artist/thomas-cole"><strong>Thomas Cole</strong></a>, founder of the <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a>, painted this majestic view of Lake Winnipesaukee in New Hampshire. The <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> stretches toward distant mountains under a luminous sky, celebrating the <strong>unspoiled American wilderness</strong> that Cole championed throughout his career.</p>

<p>Cole believed American landscape could rival European scenery in grandeur and spiritual significance. His paintings helped establish a distinctly American artistic identity. This work hangs at the <a href="/museum/wadsworth-atheneum-hartford-ct-us"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, America's oldest public art museum.</p>`,
      faqs: [
        { question: "What was the Hudson River School?", answer: "The <a href=\"/movement/hudson-river-school\"><strong>Hudson River School</strong></a> was America's first major art movement, celebrating the wilderness. <a href=\"/artist/thomas-cole\"><strong>Cole</strong></a> founded it, inspiring a generation of landscape painters." },
        { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/museum/wadsworth-atheneum-hartford-ct-us\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, America's oldest public art museum." },
        { question: "Where is Lake Winnipesaukee?", answer: "<strong>Lake Winnipesaukee</strong> is in New Hampshire's Lakes Region. Cole traveled throughout New England capturing <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>wilderness views</strong></a> that embodied American ideals." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: thomas-cole-view-on-lake-winnipiseogee');

  // 17. William Holman Hunt - The Eve of Saint Agnes
  await prisma.artwork.update({
    where: { slug: 'william-holman-hunt-the-eve-of-saint-agnes' },
    data: {
      description: `<p><a href="/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> illustrated John Keats's poem "The Eve of St. Agnes" with the <strong>jewel-like colors and meticulous detail</strong> characteristic of <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> painting. The scene shows Madeline preparing for bed on the eve when maidens might dream of their future husbands.</p>

<p>Hunt was a founding member of the Pre-Raphaelite Brotherhood, dedicated to the detailed naturalism of early Renaissance art. Literary subjects were central to the movement. This painting hangs at the <a href="/museum/walker-art-gallery-liverpool-uk"><strong>Walker Art Gallery</strong></a> in Liverpool.</p>`,
      faqs: [
        { question: "What poem does this illustrate?", answer: "The painting illustrates <strong>John Keats's \"The Eve of St. Agnes\"</strong> (1820). The poem tells of young lovers on the night when maidens might dream of future husbands." },
        { question: "Where can I see this painting?", answer: "The Eve of Saint Agnes hangs at the <a href=\"/museum/walker-art-gallery-liverpool-uk\"><strong>Walker Art Gallery</strong></a> in Liverpool, which holds major <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> works." },
        { question: "What was the Pre-Raphaelite Brotherhood?", answer: "The <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> were Victorian artists who rejected industrial-age art for <strong>medieval naturalism</strong>. <a href=\"/artist/william-holman-hunt\"><strong>Hunt</strong></a> was a founding member alongside Millais and Rossetti." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: william-holman-hunt-the-eve-of-saint-agnes');

  // 18. Adriaen Brouwer - The Smokers
  await prisma.artwork.update({
    where: { slug: 'adriaen-brouwer-the-smokers' },
    data: {
      description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captured peasants smoking in a dim tavern, their faces flushed and expressions ranging from contemplative to dazed. <strong>Tobacco smoke curls</strong> through the murky air as these rough characters pursue their simple pleasure. Brouwer's loose brushwork captures the scene with remarkable immediacy.</p>

<p>This 1636 painting exemplifies Brouwer's specialty: low-life genre scenes rendered with psychological insight. Despite his short life (he died around 32), both Rubens and Rembrandt collected his work. This painting hangs at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "What subjects did Brouwer paint?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> specialized in <strong>peasant tavern scenes</strong>: smoking, drinking, and brawling. His work influenced later <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painters." },
        { question: "Where can I see The Smokers?", answer: "This 1636 painting hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, which holds several Brouwer works." },
        { question: "Who collected Brouwer's paintings?", answer: "Both <strong>Rubens and Rembrandt</strong> collected <a href=\"/artist/adriaen-brouwer\"><strong>Brouwer's</strong></a> paintings. His psychological insight and loose brushwork earned admiration from the era's greatest masters." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: adriaen-brouwer-the-smokers');

  // 19. Mary Cassatt - Portrait of Madame Sisley
  await prisma.artwork.update({
    where: { slug: 'mary-cassatt-portrait-of-madame-sisley' },
    data: {
      description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> of Madame Sisley, wife of <a href="/movement/impressionism"><strong>Impressionist</strong></a> painter Alfred Sisley. The sitter appears thoughtful and dignified, rendered with Cassatt's characteristic attention to <strong>feminine psychology and social presence</strong>. Soft brushwork and warm tones create an intimate atmosphere.</p>

<p>Cassatt moved in Impressionist circles, forming close friendships with Degas, Monet, and the Sisleys. Her portraits of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> captured their subjects with unusual depth. This work is in a private collection.</p>`,
      faqs: [
        { question: "Who was Madame Sisley?", answer: "<strong>Eugénie Sisley</strong> was the wife of <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> landscape painter Alfred Sisley. The Sisleys were part of the artistic circle <a href=\"/artist/mary-cassatt\"><strong>Cassatt</strong></a> moved in." },
        { question: "What was Cassatt's specialty?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Cassatt</strong></a> specialized in intimate <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> and mothers with children. She captured feminine psychology with unusual depth and dignity." },
        { question: "Where can I see Cassatt portraits?", answer: "This work is in a <strong>private collection</strong>. Major Cassatt portraits hang at the National Gallery of Art, the Philadelphia Museum of Art, and the Musée d'Orsay." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: mary-cassatt-portrait-of-madame-sisley');

  // 20. Masaccio - Maria and Child
  await prisma.artwork.update({
    where: { slug: 'masaccio-maria-and-child' },
    data: {
      description: `<p><a href="/artist/masaccio"><strong>Masaccio</strong></a> painted this Madonna and Child with the <strong>monumental gravity and spatial depth</strong> that revolutionized <a href="/movement/renaissance"><strong>Renaissance</strong></a> painting. The Virgin holds her son with maternal tenderness, their forms solid and three-dimensional in a way unprecedented in earlier Italian art. Masaccio died at just 27 but changed painting forever.</p>

<p>This work demonstrates Masaccio's use of perspective and naturalistic modeling, techniques that influenced every major Renaissance painter who followed. The painting hangs at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Why was Masaccio revolutionary?", answer: "<a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> pioneered <strong>perspective and naturalistic modeling</strong> that made figures appear truly three-dimensional. Though he died at 27, he changed <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painting forever." },
        { question: "Where can I see this painting?", answer: "Maria and Child hangs at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London alongside other major <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> works." },
        { question: "Who did Masaccio influence?", answer: "<a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> influenced virtually every major Renaissance painter. <strong>Michelangelo, Raphael, and Leonardo</strong> all studied his revolutionary Brancacci Chapel frescoes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: masaccio-maria-and-child');

  // 21. Emanuel de Witte - Interior of the Oude Kerk, Delft
  await prisma.artwork.update({
    where: { slug: 'interior-oude-kerk-delft' },
    data: {
      description: `<p><a href="/artist/emanuel-de-witte"><strong>Emanuel de Witte</strong></a> specialized in church interiors, and this 1650 view of Delft's Oude Kerk showcases his mastery. <strong>Light streams through tall windows</strong>, illuminating the whitewashed columns and floor tiles. Tiny figures emphasize the vast scale. The stripped-down Protestant interior reflects Calvinist values.</p>

<p>De Witte was the leading <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter of architectural subjects. His church interiors capture both physical space and the spiritual atmosphere of Reformed worship. This painting hangs at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "What subjects did Emanuel de Witte paint?", answer: "<a href=\"/artist/emanuel-de-witte\"><strong>De Witte</strong></a> specialized in <strong>church interiors</strong>, particularly Protestant churches with their whitewashed walls and dramatic light. He was the leading architectural painter of his era." },
        { question: "Where can I see this painting?", answer: "This 1650 work hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York alongside other <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> masterworks." },
        { question: "Why are Dutch church interiors significant?", answer: "Dutch church interiors showed <strong>Protestant stripped-down worship spaces</strong>, contrasting Catholic ornament. They celebrated light, geometry, and spiritual simplicity." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: interior-oude-kerk-delft');

  // 22. Maurice Quentin de La Tour - Portrait of King Louis XV
  await prisma.artwork.update({
    where: { slug: 'maurice-quentin-de-la-tour-portrait-of-king-louis-xv' },
    data: {
      description: `<p><a href="/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> of King Louis XV using pastel, his signature medium. The monarch appears in regal attire, his features rendered with the <strong>remarkable lifelike quality</strong> that made La Tour the most sought-after portraitist in <a href="/movement/rococo"><strong>Rococo</strong></a> France.</p>

<p>La Tour's pastels captured the luminosity of skin and fabric with unmatched delicacy. He portrayed the entire French court, leaving an invaluable visual record of 18th-century aristocracy. This portrait hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "What medium did La Tour work in?", answer: "<a href=\"/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> specialized in <strong>pastel portraits</strong>. His technique captured the luminosity of skin and fabric with unmatched delicacy, making him the most sought-after portraitist in <a href=\"/movement/rococo\"><strong>Rococo</strong></a> France." },
        { question: "Where can I see this portrait?", answer: "This portrait of <strong>Louis XV</strong> hangs at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The Musée Antoine Lécuyer in Saint-Quentin holds the largest La Tour collection." },
        { question: "Why are La Tour's portraits historically valuable?", answer: "La Tour portrayed the <strong>entire French court</strong>, leaving an invaluable visual record of 18th-century aristocracy before the Revolution transformed French society." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: maurice-quentin-de-la-tour-portrait-of-king-louis-xv');

  // 23. Georges Seurat - Woman Standing
  await prisma.artwork.update({
    where: { slug: 'georges-seurat-woman-standing' },
    data: {
      description: `<p><a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> made this study of a standing <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> as preparation for one of his large compositions. The figure emerges from the paper with characteristic <strong>stillness and monumentality</strong>. Seurat's drawings, made with soft conté crayon, achieve remarkable tonal subtlety.</p>

<p>These preparatory studies reveal Seurat's meticulous working process. He would make dozens of drawings before beginning a painting. His <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> innovations, including Pointillism, changed modern art. This drawing is at the <a href="/museum/mus233e-picasso-paris-france"><strong>Musée Picasso</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Why did Seurat make preparatory drawings?", answer: "<a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> worked <strong>meticulously</strong>, making dozens of studies before painting. His drawings established composition and tonal values that he would later translate into pointillist dots." },
        { question: "Where can I see this drawing?", answer: "This study is at the <a href=\"/museum/mus233e-picasso-paris-france\"><strong>Musée Picasso</strong></a> in Paris. Major Seurat works hang at the Art Institute of Chicago and the <a href=\"/museum/musee-dorsay-paris-france\"><strong>Musée d'Orsay</strong></a>." },
        { question: "What makes Seurat's drawings distinctive?", answer: "Seurat's conté crayon drawings achieve remarkable <strong>tonal subtlety</strong>. Figures emerge from grainy texture with the same stillness and monumentality as his paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: georges-seurat-woman-standing');

  // 24. Masaccio - The Tribute Money (Brancacci Chapel)
  await prisma.artwork.update({
    where: { slug: 'masaccio-the-tribute-money-brancacci-chapel' },
    data: {
      description: `<p><a href="/artist/masaccio"><strong>Masaccio's</strong></a> "Tribute Money" revolutionized <a href="/movement/renaissance"><strong>Renaissance</strong></a> painting with its <strong>unified perspective, atmospheric depth, and monumental figures</strong>. The fresco depicts three moments: Christ instructing Peter, Peter finding a coin in a fish's mouth, and Peter paying the tax collector. Figures stand with unprecedented weight and dignity.</p>

<p>This Brancacci Chapel fresco became a school for Renaissance artists. Michelangelo, Leonardo, and Raphael all studied here. The work remains in situ at <a href="/museum/santa-maria-del-carmine-florence-italy"><strong>Santa Maria del Carmine</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Why is The Tribute Money revolutionary?", answer: "<a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> pioneered <strong>unified perspective and atmospheric depth</strong>. His monumental figures with weight and gravity changed how artists depicted the human form." },
        { question: "Where can I see this fresco?", answer: "The Tribute Money remains in the <strong>Brancacci Chapel</strong> at <a href=\"/museum/santa-maria-del-carmine-florence-italy\"><strong>Santa Maria del Carmine</strong></a> in Florence, where it's been since the 1420s." },
        { question: "Who studied these frescoes?", answer: "The Brancacci Chapel became a <strong>school for Renaissance artists</strong>. Michelangelo, Leonardo, Raphael, and countless others studied <a href=\"/artist/masaccio\"><strong>Masaccio's</strong></a> revolutionary techniques here." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: masaccio-the-tribute-money-brancacci-chapel');

  // 25. Matthias Grünewald - The Small Crucifixion
  await prisma.artwork.update({
    where: { slug: 'matthias-grunewald-the-small-crucifixion' },
    data: {
      description: `<p><a href="/artist/matthias-grunewald"><strong>Matthias Grünewald</strong></a> created this intensely emotional Crucifixion with the <strong>expressive distortion and spiritual anguish</strong> that characterizes his work. Christ's body writhes in agony, his flesh greenish and pocked, far from idealized Renaissance beauty. The <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> master emphasized suffering over serenity.</p>

<p>Grünewald's famous Isenheim Altarpiece uses similar visceral imagery. His work anticipated Expressionism by four centuries. This "Small Crucifixion" hangs at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, D.C.</p>`,
      faqs: [
        { question: "What makes Grünewald's crucifixions distinctive?", answer: "<a href=\"/artist/matthias-grunewald\"><strong>Grünewald</strong></a> emphasized <strong>suffering over idealized beauty</strong>. His Christ figures writhe in agony with greenish, pocked flesh, confronting viewers with the physical horror of crucifixion." },
        { question: "Where can I see The Small Crucifixion?", answer: "This painting hangs at the <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington, D.C. His famous Isenheim Altarpiece is in Colmar, France." },
        { question: "Did Grünewald influence modern art?", answer: "Yes, <a href=\"/artist/matthias-grunewald\"><strong>Grünewald's</strong></a> <strong>expressive distortion anticipated Expressionism</strong> by four centuries. Modern artists admired his emotional intensity over Renaissance harmony." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: matthias-grunewald-the-small-crucifixion');

  console.log('\nAll 25 artworks updated successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
