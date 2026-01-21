const { PrismaClient } = require("../node_modules/@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Updating 80 artworks (Batch B)...\n");

  // 1. edgar-degas-dancers-backstage-detail
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-backstage-detail' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured this intimate detail of ballet dancers waiting backstage. The scene shows figures in <strong>tutus and stage costume</strong>, caught in a candid moment away from the spotlight.</p>
<p>Degas made hundreds of studies of dancers throughout his career, often focusing on rehearsal and backstage moments rather than performances. This work showcases his interest in capturing <strong>unguarded poses</strong>.</p>`,
      faqs: [
        { question: "Who painted Dancers Backstage?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work, famous for his ballet scenes." },
        { question: "What subject did Degas paint most?", answer: "Degas painted <strong>ballet dancers</strong> more than any other subject, creating over 1,500 works on the theme." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-backstage-detail");

  // 2. edgar-degas-dancers-climbing-the-stairs
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-climbing-the-stairs' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this scene of ballerinas ascending a staircase, likely leading to a rehearsal room. The composition captures the dancers' <strong>graceful movement</strong> as they climb.</p>
<p>Degas frequented the Paris Opera and had special access to its backstage areas. His unusual viewpoints and cropped compositions reflect the influence of <strong>photography and Japanese prints</strong>.</p>`,
      faqs: [
        { question: "Who created Dancers Climbing the Stairs?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> painted this backstage ballet scene." },
        { question: "Where did Degas observe dancers?", answer: "Degas had backstage access to the <strong>Paris Opera</strong>, where he sketched dancers during rehearsals." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-climbing-the-stairs");

  // 3. edgar-degas-dancers-in-foyer
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-in-foyer' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> depicted ballerinas gathered in the foyer of the Paris Opera. The dancers adjust their costumes and stretch in this <strong>candid group scene</strong>.</p>
<p>Degas was fascinated by the contrast between the glamour of performance and the hard work of rehearsal. This painting is at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
      faqs: [
        { question: "Where is Dancers in Foyer?", answer: "This painting is at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
        { question: "Who painted this ballet scene?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a>, the French Impressionist known for his dancer paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-in-foyer");

  // 4. edgar-degas-dancers-in-pink
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-in-pink' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this group of ballerinas dressed in <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink tutus</strong></a>. The soft colors and graceful poses exemplify his mastery of the ballet subject.</p>
<p>Degas's use of pastel tones creates a delicate, dreamlike quality. This work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Where is Dancers in Pink?", answer: "This painting is at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
        { question: "Who painted Dancers in Pink?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this delicate ballet scene." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-in-pink");

  // 5. edgar-degas-dancers-in-the-rehearsal-hall
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-in-the-rehearsal-hall' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> portrayed dancers practicing in a rehearsal hall, with mirrors and barres visible in the background. The scene captures the <strong>discipline and repetition</strong> of ballet training.</p>
<p>Degas preferred these behind-the-scenes moments to formal performances. His rehearsal hall paintings reveal the physical demands of the dancer's life.</p>`,
      faqs: [
        { question: "Who created this rehearsal scene?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> painted this view of dancers practicing." },
        { question: "Why did Degas prefer rehearsals?", answer: "Degas found <strong>rehearsal scenes</strong> more interesting than performances because they showed dancers' true effort and unguarded moments." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-in-the-rehearsal-hall");

  // 6. edgar-degas-dancers-in-the-wings
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-in-the-wings' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured ballerinas waiting in the wings of the stage, moments before their entrance. The <strong>dramatic lighting</strong> from the stage illuminates their tutus.</p>
<p>This perspective shows Degas's privileged access to the Paris Opera. The work is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
      faqs: [
        { question: "Where is Dancers in the Wings?", answer: "This work is at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>." },
        { question: "Who painted this backstage scene?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this view from the wings of the stage." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-in-the-wings");

  // 7. edgar-degas-dancers-practicing-at-the-barre
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-practicing-at-the-barre' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this scene of dancers exercising at the barre in 1871. The composition shows the <strong>repetitive stretches</strong> and positions that form the foundation of ballet training.</p>
<p>Created in <strong>oil paint</strong>, this work demonstrates Degas's interest in the physical mechanics of dance. The unusual cropping gives an intimate, snapshot-like quality.</p>`,
      faqs: [
        { question: "When was this painted?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> created this <strong>oil painting</strong> in <strong>1871</strong>." },
        { question: "What does the painting show?", answer: "The work depicts ballerinas practicing at the <strong>barre</strong>, the horizontal rail used for warm-up exercises." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-practicing-at-the-barre");

  // 8. edgar-degas-dancers-tying-shoes
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-tying-shoes' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> depicted ballerinas in the mundane act of tying their ballet slippers. This <strong>intimate moment</strong> reveals his interest in the everyday rituals of dancers.</p>
<p>Degas often showed dancers in unglamorous poses, bending, stretching, or adjusting their costumes. These candid views set his work apart from <strong>idealized ballet imagery</strong>.</p>`,
      faqs: [
        { question: "Who painted Dancers Tying Shoes?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this candid scene of dancers preparing." },
        { question: "Why did Degas paint casual moments?", answer: "Degas preferred <strong>unposed, natural moments</strong> that showed the reality of a dancer's life." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-tying-shoes");

  // 9. thomas-gainsborough-dancers-with-musicians-in-a-woodland-glade
  await prisma.artwork.update({
    where: { slug: 'thomas-gainsborough-dancers-with-musicians-in-a-woodland-glade' },
    data: {
      description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this idyllic scene of dancers and musicians in a forest clearing. The figures enjoy <strong>rustic entertainment</strong> amid the dappled light of the woodland.</p>
<p>Gainsborough was primarily known for portraits but also painted pastoral landscapes. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this woodland scene?", answer: "<a href=\"/artist/thomas-gainsborough\"><strong>Thomas Gainsborough</strong></a>, the English portrait and landscape painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: thomas-gainsborough-dancers-with-musicians-in-a-woodland-glade");

  // 10. edgar-degas-dancers-pink-and-green
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dancers-pink-and-green' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted ballerinas in <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> and <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> tutus, creating a harmonious color scheme. The dancers appear in various poses, some resting while others prepare.</p>
<p>This work exemplifies Degas's skill with color and composition. It hangs at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
      faqs: [
        { question: "Where is Dancers, Pink and Green?", answer: "This painting is at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Russia." },
        { question: "Who created this colorful ballet scene?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> painted this work featuring pink and green costumes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dancers-pink-and-green");

  // 11. adriaen-van-ostade-dancing-couple-and-merry-company-in-an-interior
  await prisma.artwork.update({
    where: { slug: 'adriaen-van-ostade-dancing-couple-and-merry-company-in-an-interior' },
    data: {
      description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this lively scene of peasants dancing and celebrating in a tavern interior. A couple dances in the center while others drink and <strong>make merry</strong> around them.</p>
<p>Van Ostade specialized in these earthy genre scenes of Dutch peasant life. This work is at the <a href="/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where is this painting?", answer: "This work is at the <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
        { question: "Who painted this tavern scene?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>, a Dutch Golden Age painter of peasant life." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adriaen-van-ostade-dancing-couple-and-merry-company-in-an-interior");

  // 12. adriaen-van-ostade-dancing-farmers
  await prisma.artwork.update({
    where: { slug: 'adriaen-van-ostade-dancing-farmers' },
    data: {
      description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted farmers dancing with <strong>rustic enthusiasm</strong>. The scene captures the simple pleasures of rural Dutch life in the 17th century.</p>
<p>Van Ostade was a student of Frans Hals and specialized in genre scenes. His peasant subjects are painted with humor and sympathy.</p>`,
      faqs: [
        { question: "Who painted Dancing Farmers?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>, known for his Dutch peasant scenes." },
        { question: "What style is this painting?", answer: "This is a <strong>Dutch Golden Age</strong> genre painting depicting rural life with characteristic warmth." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adriaen-van-ostade-dancing-farmers");

  // 13. albert-joseph-moore-dancing-girl-resting
  await prisma.artwork.update({
    where: { slug: 'albert-joseph-moore-dancing-girl-resting' },
    data: {
      description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this figure of a dancer at rest, draped in <strong>classical costume</strong>. The pose suggests exhaustion after performance, captured with aesthetic refinement.</p>
<p>Moore was associated with the Aesthetic Movement, prioritizing beauty and form. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Dancing Girl Resting?", answer: "<a href=\"/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a>, a Victorian Aesthetic Movement painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: albert-joseph-moore-dancing-girl-resting");

  // 14. rembrandt-daniel-and-king-cyrus-in-front-of-the-idol-of-bel
  await prisma.artwork.update({
    where: { slug: 'rembrandt-daniel-and-king-cyrus-in-front-of-the-idol-of-bel' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the biblical story of Daniel exposing the priests of Bel to King Cyrus. The prophet reveals that the <strong>idol's food</strong> was secretly consumed by the priests, not the god.</p>
<p>Rembrandt often painted Old Testament narratives with dramatic lighting. This work is at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Rembrandt painting?", answer: "This work is at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg." },
        { question: "Who painted this biblical scene?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> depicted this story from the Book of Daniel." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-daniel-and-king-cyrus-in-front-of-the-idol-of-bel");

  // 15. thomas-cole-daniel-boone-sitting-at-the-door-of-his-cabin-on-t
  await prisma.artwork.update({
    where: { slug: 'thomas-cole-daniel-boone-sitting-at-the-door-of-his-cabin-on-t' },
    data: {
      description: `<p><a href="/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted the legendary frontiersman Daniel Boone seated at his cabin overlooking the Great Osage Lake. The <strong>American wilderness</strong> stretches into the distance behind the aged pioneer.</p>
<p>Cole, founder of the Hudson River School, often celebrated the American landscape. This work is at the <a href="/museum/mead-art-museum-amherst-ma-us"><strong>Mead Art Museum</strong></a> in Amherst.</p>`,
      faqs: [
        { question: "Where is this Thomas Cole painting?", answer: "This work is at the <a href=\"/museum/mead-art-museum-amherst-ma-us\"><strong>Mead Art Museum</strong></a> in Amherst, Massachusetts." },
        { question: "Who painted Daniel Boone?", answer: "<a href=\"/artist/thomas-cole\"><strong>Thomas Cole</strong></a>, founder of the Hudson River School of landscape painting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: thomas-cole-daniel-boone-sitting-at-the-door-of-his-cabin-on-t");

  // 16. gustave-dore-daniel-interpreting-the-writing-on-the-wall
  await prisma.artwork.update({
    where: { slug: 'gustave-dore-daniel-interpreting-the-writing-on-the-wall' },
    data: {
      description: `<p><a href="/artist/gustave-dore"><strong>Gustave Doré</strong></a> illustrated the biblical scene of Daniel reading the mysterious writing that appeared on King Belshazzar's wall. The prophet interprets the <strong>divine warning</strong> foretelling the king's doom.</p>
<p>Doré was famous for his dramatic biblical illustrations. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who created this biblical illustration?", answer: "<a href=\"/artist/gustave-dore\"><strong>Gustave Doré</strong></a>, renowned for his dramatic biblical imagery." },
        { question: "Where is this work?", answer: "This illustration is in a <strong>private collection</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-dore-daniel-interpreting-the-writing-on-the-wall");

  // 17. william-adolphe-bouguereau-dante-and-virgil
  await prisma.artwork.update({
    where: { slug: 'william-adolphe-bouguereau-dante-and-virgil' },
    data: {
      description: `<p><a href="/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted this scene from Dante's Inferno, showing two damned souls fighting while Dante and Virgil watch. The <strong>muscular figures</strong> grapple in Hell's darkness.</p>
<p>Bouguereau's academic technique gives the horror a polished beauty. This work is at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Dante and Virgil?", answer: "This painting is at the <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris." },
        { question: "Who painted this Inferno scene?", answer: "<a href=\"/artist/william-adolphe-bouguereau\"><strong>William-Adolphe Bouguereau</strong></a>, the French academic painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: william-adolphe-bouguereau-dante-and-virgil");

  // 18. edgar-degas-dante-and-virgil-at-the-entrance-to-hell
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-dante-and-virgil-at-the-entrance-to-hell' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this early work showing Dante and his guide Virgil approaching the gates of Hell. The <strong>dark composition</strong> reflects the influence of Romantic painting on the young artist.</p>
<p>This historical subject predates Degas's famous ballet paintings. The work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this Dante scene?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this early work before focusing on ballet subjects." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-dante-and-virgil-at-the-entrance-to-hell");

  // 19. frederic-leighton-dante-in-exile
  await prisma.artwork.update({
    where: { slug: 'frederic-leighton-dante-in-exile' },
    data: {
      description: `<p><a href="/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> portrayed the poet Dante Alighieri during his years of exile from Florence. The figure's <strong>melancholy expression</strong> reflects the pain of banishment from his beloved city.</p>
<p>Leighton was president of the Royal Academy and a master of literary subjects. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Dante in Exile?", answer: "<a href=\"/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a>, the Victorian academic painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: frederic-leighton-dante-in-exile");

  // 20. otto-mueller-das-gro223e-paar
  await prisma.artwork.update({
    where: { slug: 'otto-mueller-das-gro223e-paar' },
    data: {
      description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted this work titled "Das Große Paar" (The Large Couple), depicting two figures in his characteristic <strong>angular, expressive style</strong>. The simplified forms show the influence of German Expressionism.</p>
<p>Mueller was a member of Die Brücke, the German Expressionist group. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Das Große Paar?", answer: "<a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a>, a German Expressionist painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: otto-mueller-das-gro223e-paar");

  // 21. michelangelo-david
  await prisma.artwork.update({
    where: { slug: 'michelangelo-david' },
    data: {
      description: `<p><a href="/artist/michelangelo"><strong>Michelangelo</strong></a> carved this colossal marble statue of the biblical hero David, depicting the young shepherd before his battle with Goliath. The figure's <strong>tense muscles</strong> and focused gaze capture the moment of decision.</p>
<p>Standing over 14 feet tall, this is one of the most famous sculptures in history. It's displayed at the <a href="/museum/galleria-dell39accademia-di-firenze-florence-italy"><strong>Galleria dell'Accademia</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is Michelangelo's David?", answer: "The statue is at the <a href=\"/museum/galleria-dell39accademia-di-firenze-florence-italy\"><strong>Galleria dell'Accademia</strong></a> in Florence, Italy." },
        { question: "Who sculpted David?", answer: "<a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> carved this masterpiece from a single block of marble." },
        { question: "How tall is Michelangelo's David?", answer: "The statue stands over <strong>14 feet (4.3 meters)</strong> tall, carved from Carrara marble." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: michelangelo-david");

  // 22. odilon-redon-david-and-goliath
  await prisma.artwork.update({
    where: { slug: 'odilon-redon-david-and-goliath' },
    data: {
      description: `<p><a href="/artist/odilon-redon"><strong>Odilon Redon</strong></a> interpreted the biblical confrontation between David and Goliath in his distinctive Symbolist style. The scene takes on a <strong>dreamlike quality</strong> through his imaginative treatment.</p>
<p>Redon was known for his fantastical imagery and vivid use of color. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this David and Goliath?", answer: "<a href=\"/artist/odilon-redon\"><strong>Odilon Redon</strong></a>, the French Symbolist painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: odilon-redon-david-and-goliath");

  // 23. caravaggio-david-and-goliath
  await prisma.artwork.update({
    where: { slug: 'caravaggio-david-and-goliath' },
    data: {
      description: `<p><a href="/artist/caravaggio"><strong>Caravaggio</strong></a> painted this dramatic scene of David with Goliath's severed head. The young victor holds the giant's head with a look of <strong>somber reflection</strong> rather than triumph.</p>
<p>Caravaggio's signature chiaroscuro creates intense drama. This painting is at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is Caravaggio's David and Goliath?", answer: "This painting is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this David scene?", answer: "<a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a>, the Italian Baroque master known for dramatic lighting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: caravaggio-david-and-goliath");

  // 24. rembrandt-david-offering-the-head-of-goliath-to-king-saul
  await prisma.artwork.update({
    where: { slug: 'rembrandt-david-offering-the-head-of-goliath-to-king-saul' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the moment David presents Goliath's severed head to King Saul. The young hero stands before the throne, the <strong>giant's head</strong> held as proof of his victory.</p>
<p>Rembrandt often explored the psychological complexity of biblical narratives. This work is at the <a href="/museum/kunstmuseum-basel-basel-switzerland"><strong>Kunstmuseum Basel</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Rembrandt painting?", answer: "This work is at the <a href=\"/museum/kunstmuseum-basel-basel-switzerland\"><strong>Kunstmuseum Basel</strong></a> in Switzerland." },
        { question: "Who painted David presenting Goliath's head?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this biblical narrative scene." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-david-offering-the-head-of-goliath-to-king-saul");

  // 25. guido-reni-david-with-the-head-of-goliath
  await prisma.artwork.update({
    where: { slug: 'guido-reni-david-with-the-head-of-goliath' },
    data: {
      description: `<p><a href="/artist/guido-reni"><strong>Guido Reni</strong></a> painted this idealized image of David holding Goliath's head in 1623. The young hero is depicted with <strong>classical beauty</strong>, his features soft and his pose graceful.</p>
<p>Reni's elegant style influenced generations of painters. This work hangs at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is Guido Reni's David?", answer: "This painting is at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
        { question: "When was this painted?", answer: "<a href=\"/artist/guido-reni\"><strong>Guido Reni</strong></a> created this work in <strong>1623</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: guido-reni-david-with-the-head-of-goliath");

  // 26. albert-bierstadt-day39s-beginning
  await prisma.artwork.update({
    where: { slug: 'albert-bierstadt-day39s-beginning' },
    data: {
      description: `<p><a href="/artist/albert-bierstadt"><strong>Albert Bierstadt</strong></a> captured the first light of dawn breaking over a landscape in "Day's Beginning." The <strong>golden morning light</strong> illuminates the scene with characteristic luminosity.</p>
<p>Bierstadt was known for his grand depictions of the American West. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Day's Beginning?", answer: "<a href=\"/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a>, the German-American landscape painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: albert-bierstadt-day39s-beginning");

  // 27. quentin-matsys-de-kruisdraging
  await prisma.artwork.update({
    where: { slug: 'quentin-matsys-de-kruisdraging' },
    data: {
      description: `<p><a href="/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this scene of Christ carrying the cross, known in Dutch as "De Kruisdraging." The <strong>suffering Christ</strong> struggles under the weight while surrounded by tormentors.</p>
<p>Matsys was a leading painter of the Antwerp school. This work is at the <a href="/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where is De Kruisdraging?", answer: "This painting is at the <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
        { question: "Who painted this Carrying of the Cross?", answer: "<a href=\"/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a>, a Flemish Renaissance painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: quentin-matsys-de-kruisdraging");

  // 28. giovanni-bellini-dead-christ-in-the-sepulchre
  await prisma.artwork.update({
    where: { slug: 'giovanni-bellini-dead-christ-in-the-sepulchre' },
    data: {
      description: `<p><a href="/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this devotional image of Christ's body in the tomb around 1460. The work uses <strong>tempera</strong> to create a solemn, contemplative scene.</p>
<p>Bellini was a master of Venetian painting. This early work is at the <a href="/museum/museo-poldi-pezzoli-milan-italy"><strong>Museo Poldi Pezzoli</strong></a> in Milan.</p>`,
      faqs: [
        { question: "Where is Dead Christ in the Sepulchre?", answer: "This <strong>tempera</strong> painting from <strong>1460</strong> is at the <a href=\"/museum/museo-poldi-pezzoli-milan-italy\"><strong>Museo Poldi Pezzoli</strong></a> in Milan." },
        { question: "Who painted this Dead Christ?", answer: "<a href=\"/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>, the Venetian Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: giovanni-bellini-dead-christ-in-the-sepulchre");

  // 29. giovanni-bellini-dead-christ-supported-by-madonna-and-st-john
  await prisma.artwork.update({
    where: { slug: 'giovanni-bellini-dead-christ-supported-by-madonna-and-st-john' },
    data: {
      description: `<p><a href="/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this Pietà showing the dead Christ supported by the Virgin Mary and Saint John. The figures' <strong>grief and tenderness</strong> are portrayed with deep emotion.</p>
<p>This devotional image type was popular in Renaissance Venice. The painting is at the <a href="/museum/palazzo-brera-milan-italy"><strong>Palazzo Brera</strong></a> in Milan.</p>`,
      faqs: [
        { question: "Where is this Bellini Pietà?", answer: "This painting is at the <a href=\"/museum/palazzo-brera-milan-italy\"><strong>Palazzo Brera</strong></a> in Milan, Italy." },
        { question: "Who painted this Dead Christ?", answer: "<a href=\"/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>, known for his devotional paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: giovanni-bellini-dead-christ-supported-by-madonna-and-st-john");

  // 30. giovanni-bellini-dead-christ-supported-by-two-angels
  await prisma.artwork.update({
    where: { slug: 'giovanni-bellini-dead-christ-supported-by-two-angels' },
    data: {
      description: `<p><a href="/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this image of Christ's body held upright by two angels around 1465. The <strong>tempera</strong> technique creates soft, luminous colors.</p>
<p>This devotional format was meant to inspire meditation on Christ's sacrifice. The work is at the <a href="/museum/museo-correr-venice-italy"><strong>Museo Correr</strong></a> in Venice.</p>`,
      faqs: [
        { question: "Where is this Bellini painting?", answer: "This <strong>tempera</strong> work from <strong>1465</strong> is at the <a href=\"/museum/museo-correr-venice-italy\"><strong>Museo Correr</strong></a> in Venice." },
        { question: "Who painted Dead Christ with Two Angels?", answer: "<a href=\"/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>, the great Venetian painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: giovanni-bellini-dead-christ-supported-by-two-angels");

  // 31. gabriel-metsu-dead-cock
  await prisma.artwork.update({
    where: { slug: 'gabriel-metsu-dead-cock' },
    data: {
      description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted this still life of a dead rooster, displaying the bird's <strong>colorful plumage</strong> with meticulous detail. Game still lifes were popular in Dutch Golden Age painting.</p>
<p>Metsu was known for both genre scenes and still lifes. This work is at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is Dead Cock?", answer: "This still life is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this game still life?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>, a Dutch Golden Age painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gabriel-metsu-dead-cock");

  // 32. giotto-death-and-ascension-of-st-francis
  await prisma.artwork.update({
    where: { slug: 'giotto-death-and-ascension-of-st-francis' },
    data: {
      description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this fresco showing Saint Francis's death and his soul ascending to heaven. Mourning friars gather around the saint's body while angels carry his <strong>spirit upward</strong>.</p>
<p>This is part of Giotto's famous fresco cycle at the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
      faqs: [
        { question: "Where is this Giotto fresco?", answer: "This is at the <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy." },
        { question: "Who painted Death of St. Francis?", answer: "<a href=\"/artist/giotto\"><strong>Giotto di Bondone</strong></a>, the father of Renaissance painting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: giotto-death-and-ascension-of-st-francis");

  // 33. pierre-puvis-de-chavannes-death-and-the-maidens
  await prisma.artwork.update({
    where: { slug: 'pierre-puvis-de-chavannes-death-and-the-maidens' },
    data: {
      description: `<p><a href="/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> painted this allegorical scene of Death approaching a group of young women. The <strong>pale, muted tones</strong> create a dreamlike atmosphere typical of his decorative style.</p>
<p>Puvis de Chavannes influenced Symbolist painters. This work is at the <a href="/museum/clark-art-institute-williamstown-ma-us"><strong>Clark Art Institute</strong></a> in Williamstown.</p>`,
      faqs: [
        { question: "Where is Death and the Maidens?", answer: "This painting is at the <a href=\"/museum/clark-art-institute-williamstown-ma-us\"><strong>Clark Art Institute</strong></a> in Massachusetts." },
        { question: "Who painted this allegorical scene?", answer: "<a href=\"/artist/pierre-puvis-de-chavannes\"><strong>Pierre Puvis de Chavannes</strong></a>, the French Symbolist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: pierre-puvis-de-chavannes-death-and-the-maidens");

  // 34. rembrandt-death-appearing-to-a-wedded-couple-from-an-open-gr
  await prisma.artwork.update({
    where: { slug: 'rembrandt-death-appearing-to-a-wedded-couple-from-an-open-gr' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this memento mori scene showing Death emerging from a grave to confront a married couple. The <strong>skeletal figure</strong> serves as a reminder of mortality.</p>
<p>Rembrandt produced many etchings exploring themes of life and death. This work is at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Rembrandt etching?", answer: "This work is at the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who created this memento mori?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> etched this allegory of death." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-death-appearing-to-a-wedded-couple-from-an-open-gr");

  // 35. piero-della-francesca-death-of-adam
  await prisma.artwork.update({
    where: { slug: 'piero-della-francesca-death-of-adam' },
    data: {
      description: `<p><a href="/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this fresco depicting the death of the biblical patriarch Adam. The <strong>aged Adam</strong> is surrounded by his descendants in a scene from the Legend of the True Cross.</p>
<p>This is part of Piero's famous fresco cycle at the <a href="/museum/basilica-of-san-francesco-arezzo-italy"><strong>Basilica of San Francesco</strong></a> in Arezzo.</p>`,
      faqs: [
        { question: "Where is Death of Adam?", answer: "This fresco is at the <a href=\"/museum/basilica-of-san-francesco-arezzo-italy\"><strong>Basilica of San Francesco</strong></a> in Arezzo, Italy." },
        { question: "Who painted this fresco?", answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>, the Renaissance master of perspective." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: piero-della-francesca-death-of-adam");

  // 36. piero-della-francesca-death-of-adam-detail
  await prisma.artwork.update({
    where: { slug: 'piero-della-francesca-death-of-adam-detail' },
    data: {
      description: `<p>This detail from <a href="/artist/piero-della-francesca"><strong>Piero della Francesca's</strong></a> Death of Adam shows the <strong>individual faces</strong> and figures surrounding the dying patriarch. The close view reveals Piero's mastery of form and expression.</p>
<p>The full fresco is at the <a href="/museum/basilica-of-san-francesco-arezzo-italy"><strong>Basilica of San Francesco</strong></a> in Arezzo.</p>`,
      faqs: [
        { question: "Where can I see this fresco?", answer: "This detail is from the frescos at the <a href=\"/museum/basilica-of-san-francesco-arezzo-italy\"><strong>Basilica of San Francesco</strong></a> in Arezzo." },
        { question: "Who painted Death of Adam?", answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> created this Renaissance masterpiece." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: piero-della-francesca-death-of-adam-detail");

  // 37. paul-delaroche-death-of-elizabeth-i-queen-of-england
  await prisma.artwork.update({
    where: { slug: 'paul-delaroche-death-of-elizabeth-i-queen-of-england' },
    data: {
      description: `<p><a href="/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted the final moments of Queen Elizabeth I, showing her collapsed on cushions surrounded by courtiers. The <strong>dying queen</strong> appears aged and exhausted after her long reign.</p>
<p>Delaroche specialized in dramatic historical subjects. This work is at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Death of Elizabeth I?", answer: "This painting is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this historical scene?", answer: "<a href=\"/artist/paul-delaroche\"><strong>Paul Delaroche</strong></a>, known for his dramatic historical paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: paul-delaroche-death-of-elizabeth-i-queen-of-england");

  // 38. eustache-le-sueur-death-of-st-bruno
  await prisma.artwork.update({
    where: { slug: 'eustache-le-sueur-death-of-st-bruno' },
    data: {
      description: `<p><a href="/artist/eustache-le-sueur"><strong>Eustache Le Sueur</strong></a> painted the peaceful death of Saint Bruno, founder of the Carthusian order. The saint lies on a <strong>simple bed</strong> surrounded by his fellow monks in prayer.</p>
<p>Le Sueur created a famous cycle on Bruno's life. This work is at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Death of St. Bruno?", answer: "This painting is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this monastic scene?", answer: "<a href=\"/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a>, a French Baroque painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: eustache-le-sueur-death-of-st-bruno");

  // 39. hans-holbein-younger-death-of-the-virgin
  await prisma.artwork.update({
    where: { slug: 'hans-holbein-younger-death-of-the-virgin' },
    data: {
      description: `<p><a href="/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> painted the Virgin Mary on her deathbed, surrounded by the apostles. The scene shows the <strong>Dormition</strong>, the moment before her bodily assumption into heaven.</p>
<p>Holbein is best known for portraits but also painted religious subjects. This work is at the <a href="/museum/kunstmuseum-basel-basel-switzerland"><strong>Kunstmuseum Basel</strong></a>.</p>`,
      faqs: [
        { question: "Where is Death of the Virgin?", answer: "This painting is at the <a href=\"/museum/kunstmuseum-basel-basel-switzerland\"><strong>Kunstmuseum Basel</strong></a> in Switzerland." },
        { question: "Who painted this Dormition scene?", answer: "<a href=\"/artist/hans-holbein-younger\"><strong>Hans Holbein the Younger</strong></a>, the German Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: hans-holbein-younger-death-of-the-virgin");

  // 40. hugo-van-der-goes-death-of-the-virgin
  await prisma.artwork.update({
    where: { slug: 'hugo-van-der-goes-death-of-the-virgin' },
    data: {
      description: `<p><a href="/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a> painted this intensely emotional scene of the Virgin Mary's death. The apostles surround her bed with <strong>expressions of grief</strong> and awe.</p>
<p>Van der Goes was a major Flemish painter of the 15th century. This work is at the <a href="/museum/groeningemuseum-bruges-belgium"><strong>Groeningemuseum</strong></a> in Bruges.</p>`,
      faqs: [
        { question: "Where is this Death of the Virgin?", answer: "This painting is at the <a href=\"/museum/groeningemuseum-bruges-belgium\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium." },
        { question: "Who painted this Flemish masterpiece?", answer: "<a href=\"/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a>, a leading 15th-century Flemish painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: hugo-van-der-goes-death-of-the-virgin");

  // 41. gustave-moreau-death-offers-crowns-to-the-winner-of-the-tournamen
  await prisma.artwork.update({
    where: { slug: 'gustave-moreau-death-offers-crowns-to-the-winner-of-the-tournamen' },
    data: {
      description: `<p><a href="/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this allegorical scene of Death presenting crowns to a tournament victor. The <strong>macabre juxtaposition</strong> of glory and mortality reflects Symbolist themes.</p>
<p>Moreau was known for richly detailed mythological works. This painting is at the <a href="/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musée Gustave Moreau</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this Moreau painting?", answer: "This work is at the <a href=\"/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée Gustave Moreau</strong></a> in Paris." },
        { question: "Who painted this allegory?", answer: "<a href=\"/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a>, the French Symbolist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-moreau-death-offers-crowns-to-the-winner-of-the-tournamen");

  // 42. john-constable-dedham-church-and-vale
  await prisma.artwork.update({
    where: { slug: 'john-constable-dedham-church-and-vale' },
    data: {
      description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> painted this view of Dedham Church and the surrounding valley in his native Suffolk. The <strong>English countryside</strong> is bathed in characteristic atmospheric light.</p>
<p>Constable returned to this subject many times. This work is at the <a href="/museum/whitworth-art-gallery-university-of-manchester-man"><strong>Whitworth Art Gallery</strong></a> in Manchester.</p>`,
      faqs: [
        { question: "Where is Dedham Church and Vale?", answer: "This painting is at the <a href=\"/museum/whitworth-art-gallery-university-of-manchester-man\"><strong>Whitworth Art Gallery</strong></a> in Manchester." },
        { question: "Who painted this English landscape?", answer: "<a href=\"/artist/john-constable\"><strong>John Constable</strong></a>, the great English landscape painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-constable-dedham-church-and-vale");

  // 43. john-constable-dedham-vale-morning
  await prisma.artwork.update({
    where: { slug: 'john-constable-dedham-vale-morning' },
    data: {
      description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> captured the Dedham Vale in morning light, showing the <strong>misty atmosphere</strong> of early day over his beloved Suffolk countryside.</p>
<p>Constable painted this area throughout his career, calling it "the scenes of my boyish days." This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Dedham Vale: Morning?", answer: "<a href=\"/artist/john-constable\"><strong>John Constable</strong></a>, famous for his Suffolk landscapes." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-constable-dedham-vale-morning");

  // 44. edwin-landseer-deer-and-deer-hounds-in-a-mountain-torrent
  await prisma.artwork.update({
    where: { slug: 'edwin-landseer-deer-and-deer-hounds-in-a-mountain-torrent' },
    data: {
      description: `<p><a href="/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> painted this dramatic hunting scene of deer and hounds in a Scottish mountain stream. The <strong>wild landscape</strong> and animal struggle showcase his mastery of wildlife subjects.</p>
<p>Landseer was Queen Victoria's favorite animal painter. This work is at <a href="/museum/tate-modern-london-uk"><strong>Tate Modern</strong></a> in London.</p>`,
      faqs: [
        { question: "Where is this Landseer painting?", answer: "This work is at <a href=\"/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London." },
        { question: "Who painted this hunting scene?", answer: "<a href=\"/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a>, the Victorian animal painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edwin-landseer-deer-and-deer-hounds-in-a-mountain-torrent");

  // 45. edgar-degas-degas-in-a-green-jacket
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-degas-in-a-green-jacket' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this self-portrait showing himself wearing a <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green jacket</strong></a>. The young artist looks directly at the viewer with a <strong>confident gaze</strong>.</p>
<p>Degas created several self-portraits early in his career. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this self-portrait?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> painted himself as a young man in this work." },
        { question: "Where is this painting?", answer: "This self-portrait is in a <strong>private collection</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-degas-in-a-green-jacket");

  // 46. gustave-moreau-degas-portrait-in-the-uffizi
  await prisma.artwork.update({
    where: { slug: 'gustave-moreau-degas-portrait-in-the-uffizi' },
    data: {
      description: `<p><a href="/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this portrait, catalogued as "Degas portrait in the Uffizi." The work shows a <strong>contemplative figure</strong> rendered in Moreau's rich, detailed style.</p>
<p>Moreau was a leading Symbolist painter. This work is at the <a href="/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musée Gustave Moreau</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this portrait?", answer: "This work is at the <a href=\"/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée Gustave Moreau</strong></a> in Paris." },
        { question: "Who painted this portrait?", answer: "<a href=\"/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a>, the French Symbolist master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-moreau-degas-portrait-in-the-uffizi");

  // 47. peter-paul-rubens-democritus
  await prisma.artwork.update({
    where: { slug: 'peter-paul-rubens-democritus' },
    data: {
      description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted this portrait of the ancient Greek philosopher Democritus, known as the "laughing philosopher." The figure is shown with a <strong>warm smile</strong>, embodying his optimistic worldview.</p>
<p>Rubens often depicted classical subjects. This work is at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is Rubens's Democritus?", answer: "This painting is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this philosopher portrait?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Peter Paul Rubens</strong></a>, the Flemish Baroque master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: peter-paul-rubens-democritus");

  // 48. salvator-rosa-democritus-in-meditation
  await prisma.artwork.update({
    where: { slug: 'salvator-rosa-democritus-in-meditation' },
    data: {
      description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted Democritus in contemplation, surrounded by <strong>symbols of mortality</strong> and wisdom. The philosopher meditates amid bones and books in a dark setting.</p>
<p>Rosa often painted philosophers and hermits. This work is at the <a href="/museum/national-gallery-of-denmark-statens-museum-for-kun"><strong>National Gallery of Denmark</strong></a> in Copenhagen.</p>`,
      faqs: [
        { question: "Where is Democritus in Meditation?", answer: "This painting is at the <a href=\"/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a>." },
        { question: "Who painted this philosophical scene?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>, the Italian Baroque painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: salvator-rosa-democritus-in-meditation");

  // 49. correggio-departure-of-christ-from-mary-with-mary-and-martha
  await prisma.artwork.update({
    where: { slug: 'correggio-departure-of-christ-from-mary-with-mary-and-martha' },
    data: {
      description: `<p><a href="/artist/correggio"><strong>Correggio</strong></a> painted this scene of Christ departing from Mary, with her sisters Mary and Martha present. The <strong>tender farewell</strong> is rendered with Correggio's characteristic soft lighting.</p>
<p>The painting shows Correggio's mastery of emotional subjects. It's at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Where is this Correggio painting?", answer: "This work is at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London." },
        { question: "Who painted this departure scene?", answer: "<a href=\"/artist/correggio\"><strong>Correggio</strong></a>, the Italian Renaissance master of soft lighting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: correggio-departure-of-christ-from-mary-with-mary-and-martha");

  // 50. rogier-van-der-weyden-deposition
  await prisma.artwork.update({
    where: { slug: 'rogier-van-der-weyden-deposition' },
    data: {
      description: `<p><a href="/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> painted this masterpiece showing Christ's body being lowered from the cross. The <strong>grief-stricken figures</strong> are arranged in a shallow, frieze-like composition.</p>
<p>This is one of the greatest paintings of the Northern Renaissance. It hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is Van der Weyden's Deposition?", answer: "This masterpiece is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this Deposition?", answer: "<a href=\"/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a>, a master of Flemish painting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rogier-van-der-weyden-deposition");

  // 51. deposition-pontormo
  await prisma.artwork.update({
    where: { slug: 'deposition-pontormo' },
    data: {
      description: `<p><a href="/artist/pontormo"><strong>Pontormo</strong></a> created this swirling Deposition from the Cross in 1528. The <strong>elongated figures</strong> and unusual colors are hallmarks of his Mannerist style. The composition creates a sense of weightlessness.</p>
<p>Painted in <strong>oil on panel</strong>, measuring 313 × 192 cm, it remains in situ at the <a href="/museum/santa-felicita"><strong>Santa Felicita</strong></a> church in Florence.</p>`,
      faqs: [
        { question: "Where is Pontormo's Deposition?", answer: "This altarpiece is at <a href=\"/museum/santa-felicita\"><strong>Santa Felicita</strong></a> church in Florence." },
        { question: "How big is this painting?", answer: "The <strong>oil on panel</strong> measures <strong>313 × 192 cm</strong>, completed in <strong>1528</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: deposition-pontormo");

  // 52. rembrandt-deposition-from-the-cross
  await prisma.artwork.update({
    where: { slug: 'rembrandt-deposition-from-the-cross' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this dramatic Deposition showing Christ's body being lowered from the cross. A beam of light illuminates the <strong>pale corpse</strong> against the darkness, creating intense drama.</p>
<p>Rembrandt's religious paintings combined physical realism with spiritual depth. This work demonstrates his mastery of <strong>chiaroscuro</strong>.</p>`,
      faqs: [
        { question: "Who painted this Deposition?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this dramatic religious scene." },
        { question: "What technique defines this work?", answer: "Rembrandt used <strong>chiaroscuro</strong>, dramatic contrasts of light and dark." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-deposition-from-the-cross");

  // 53. paolo-veronese-deposition-of-christ
  await prisma.artwork.update({
    where: { slug: 'paolo-veronese-deposition-of-christ' },
    data: {
      description: `<p><a href="/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> painted this scene of Christ's body being prepared for burial. The <strong>rich colors</strong> and elegant figures are characteristic of his Venetian style.</p>
<p>Veronese was known for his grand religious and historical compositions. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this Deposition of Christ?", answer: "<a href=\"/artist/paolo-veronese\"><strong>Paolo Veronese</strong></a>, the great Venetian painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: paolo-veronese-deposition-of-christ");

  // 54. quentin-matsys-der-kanonikus-stephan-gardiner
  await prisma.artwork.update({
    where: { slug: 'quentin-matsys-der-kanonikus-stephan-gardiner' },
    data: {
      description: `<p><a href="/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this portrait of Canon Stephan Gardiner. The churchman is shown with <strong>dignified bearing</strong>, his features rendered with detailed realism.</p>
<p>Matsys was a leading Flemish Renaissance portraitist. This work is at the <a href="/museum/kunstmuseum-liechtenstein-vaduz-liechtenstein"><strong>Kunstmuseum Liechtenstein</strong></a> in Vaduz.</p>`,
      faqs: [
        { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/museum/kunstmuseum-liechtenstein-vaduz-liechtenstein\"><strong>Kunstmuseum Liechtenstein</strong></a> in Vaduz." },
        { question: "Who painted Canon Stephan Gardiner?", answer: "<a href=\"/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a>, a Flemish Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: quentin-matsys-der-kanonikus-stephan-gardiner");

  // 55. otto-mueller-der-mord
  await prisma.artwork.update({
    where: { slug: 'otto-mueller-der-mord' },
    data: {
      description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted "Der Mord" (The Murder), a work reflecting the <strong>raw emotion</strong> and simplified forms of German Expressionism. The angular figures convey psychological intensity.</p>
<p>Mueller was a member of Die Brücke. This work is at the <a href="/museum/sammlung-karsch-berlin-germany"><strong>Sammlung Karsch</strong></a> in Berlin.</p>`,
      faqs: [
        { question: "Where is Der Mord?", answer: "This painting is at the <a href=\"/museum/sammlung-karsch-berlin-germany\"><strong>Sammlung Karsch</strong></a> in Berlin." },
        { question: "Who painted this Expressionist work?", answer: "<a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a>, a German Expressionist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: otto-mueller-der-mord");

  // 56. alonso-cano-descent-into-limbo
  await prisma.artwork.update({
    where: { slug: 'alonso-cano-descent-into-limbo' },
    data: {
      description: `<p><a href="/artist/alonso-cano"><strong>Alonso Cano</strong></a> painted Christ's descent into Limbo to free the souls of the righteous dead. The <strong>resurrected Christ</strong> leads Adam, Eve, and other figures from darkness into light.</p>
<p>Cano was a leading Spanish Baroque painter. This work is at the <a href="/museum/los-angeles-county-museum-of-art-lacma-los-angeles"><strong>LACMA</strong></a> in Los Angeles.</p>`,
      faqs: [
        { question: "Where is Descent into Limbo?", answer: "This painting is at <a href=\"/museum/los-angeles-county-museum-of-art-lacma-los-angeles\"><strong>LACMA</strong></a> in Los Angeles." },
        { question: "Who painted this religious scene?", answer: "<a href=\"/artist/alonso-cano\"><strong>Alonso Cano</strong></a>, a Spanish Baroque master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: alonso-cano-descent-into-limbo");

  // 57. gustav-klimt-design-for-a-theater-curtain
  await prisma.artwork.update({
    where: { slug: 'gustav-klimt-design-for-a-theater-curtain' },
    data: {
      description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this design for a theater curtain, showcasing his <strong>decorative style</strong>. The composition combines figures and ornamental patterns in his characteristic golden palette.</p>
<p>Klimt created many decorative works for public buildings. This design is at the <a href="/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
      faqs: [
        { question: "Where is this Klimt design?", answer: "This work is at the <a href=\"/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
        { question: "Who created this curtain design?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a>, the Austrian Symbolist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustav-klimt-design-for-a-theater-curtain");

  // 58. edvard-munch-despair
  await prisma.artwork.update({
    where: { slug: 'edvard-munch-despair' },
    data: {
      description: `<p><a href="/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted "Despair," an early version of the composition that would become The Scream. A figure stands on a pier with a <strong>blood-red sky</strong> swirling behind him.</p>
<p>This work explores Munch's recurring themes of anxiety and alienation. It's at the <a href="/museum/munch-museum-oslo-norway"><strong>Munch Museum</strong></a> in Oslo.</p>`,
      faqs: [
        { question: "Where is Despair?", answer: "This painting is at the <a href=\"/museum/munch-museum-oslo-norway\"><strong>Munch Museum</strong></a> in Oslo, Norway." },
        { question: "Who painted Despair?", answer: "<a href=\"/artist/edvard-munch\"><strong>Edvard Munch</strong></a>, the Norwegian Expressionist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edvard-munch-despair");

  // 59. correggio-diana
  await prisma.artwork.update({
    where: { slug: 'correggio-diana' },
    data: {
      description: `<p><a href="/artist/correggio"><strong>Correggio</strong></a> painted this image of Diana, the goddess of the hunt. The <strong>elegant figure</strong> is rendered with his characteristic soft lighting and graceful forms.</p>
<p>This is part of decorations Correggio created for the Camera di San Paolo. It remains in situ at the <a href="/museum/convent-of-san-paolo-parma-italy"><strong>Convent of San Paolo</strong></a> in Parma.</p>`,
      faqs: [
        { question: "Where is Correggio's Diana?", answer: "This is at the <a href=\"/museum/convent-of-san-paolo-parma-italy\"><strong>Convent of San Paolo</strong></a> in Parma, Italy." },
        { question: "Who painted this goddess?", answer: "<a href=\"/artist/correggio\"><strong>Correggio</strong></a>, the Italian Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: correggio-diana");

  // 60. jacques-louis-david-diana-and-apollo-piercing-with-their-arrows-the-ch
  await prisma.artwork.update({
    where: { slug: 'jacques-louis-david-diana-and-apollo-piercing-with-their-arrows-the-ch' },
    data: {
      description: `<p><a href="/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted Diana and Apollo killing the children of Niobe. The gods punish Niobe for boasting that her children surpassed theirs in beauty, <strong>raining arrows</strong> upon them.</p>
<p>This mythological subject shows David's Neoclassical training. It's at the <a href="/museum/dallas-museum-of-art-dallas-tx-us"><strong>Dallas Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Where is this David painting?", answer: "This work is at the <a href=\"/museum/dallas-museum-of-art-dallas-tx-us\"><strong>Dallas Museum of Art</strong></a> in Texas." },
        { question: "Who painted this Niobe scene?", answer: "<a href=\"/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a>, the French Neoclassical painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jacques-louis-david-diana-and-apollo-piercing-with-their-arrows-the-ch");

  // 61. johannes-vermeer-diana-and-her-companions
  await prisma.artwork.update({
    where: { slug: 'johannes-vermeer-diana-and-her-companions' },
    data: {
      description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this early work showing Diana with her attendant nymphs. The goddess sits while one companion washes her feet in a <strong>quiet, contemplative scene</strong>.</p>
<p>This mythological subject is unusual in Vermeer's oeuvre. The painting is at the <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a> in The Hague.</p>`,
      faqs: [
        { question: "Where is Diana and her Companions?", answer: "This painting is at the <a href=\"/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands." },
        { question: "Who painted this Diana scene?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Johannes Vermeer</strong></a>, in a rare mythological subject for him." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: johannes-vermeer-diana-and-her-companions");

  // 62. rembrandt-diana-at-the-bath
  await prisma.artwork.update({
    where: { slug: 'rembrandt-diana-at-the-bath' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted Diana bathing in 1654, showing the goddess in a <strong>naturalistic nude</strong>. The figure's soft flesh and rounded form differ from idealized classical nudes.</p>
<p>Rembrandt's realistic approach was controversial. This work has been in the <strong>Louvre's collection</strong> since 1857.</p>`,
      faqs: [
        { question: "Where is Rembrandt's Diana?", answer: "This 1654 painting is at the <strong>Louvre</strong> in Paris, acquired in <strong>1857</strong>." },
        { question: "Who painted this bathing Diana?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a>, known for his realistic nudes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-diana-at-the-bath");

  // 63. francois-boucher-diana-getting-out-of-her-bath
  await prisma.artwork.update({
    where: { slug: 'francois-boucher-diana-getting-out-of-her-bath' },
    data: {
      description: `<p><a href="/artist/francois-boucher"><strong>François Boucher</strong></a> painted Diana emerging from her bath, the goddess shown with <strong>porcelain skin</strong> in his sensuous Rococo style. A nymph attends her in the pastoral setting.</p>
<p>Boucher was the favorite painter of Madame de Pompadour. This work is at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Diana Getting out of her Bath?", answer: "This painting is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this Rococo Diana?", answer: "<a href=\"/artist/francois-boucher\"><strong>François Boucher</strong></a>, the French Rococo master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: francois-boucher-diana-getting-out-of-her-bath");

  // 64. edgar-degas-diego-martelli
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-diego-martelli' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this portrait of Diego Martelli, an Italian art critic and supporter of the Impressionists. Martelli is shown seated casually amid <strong>scattered papers</strong> on his desk.</p>
<p>The informal pose reflects their friendship. This work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Where is the Diego Martelli portrait?", answer: "This painting is at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
        { question: "Who painted Diego Martelli?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> portrayed his friend, the art critic." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-diego-martelli");

  // 65. jules-bastien-lepage-diogenes
  await prisma.artwork.update({
    where: { slug: 'jules-bastien-lepage-diogenes' },
    data: {
      description: `<p><a href="/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted the ancient philosopher Diogenes, who lived in a barrel and rejected material possessions. The cynic is shown in his <strong>austere poverty</strong>.</p>
<p>Bastien-Lepage was known for his naturalist style. This work is at the <a href="/museum/mus233e-marmottan-monet-paris-france"><strong>Musée Marmottan Monet</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this Diogenes painting?", answer: "This work is at the <a href=\"/museum/mus233e-marmottan-monet-paris-france\"><strong>Musée Marmottan Monet</strong></a> in Paris." },
        { question: "Who painted this philosopher?", answer: "<a href=\"/artist/jules-bastien-lepage\"><strong>Jules Bastien-Lepage</strong></a>, the French naturalist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jules-bastien-lepage-diogenes");

  // 66. john-william-waterhouse-diogenes
  await prisma.artwork.update({
    where: { slug: 'john-william-waterhouse-diogenes' },
    data: {
      description: `<p><a href="/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> depicted the philosopher Diogenes in his tub, visited by women from Athens. The <strong>cynic philosopher</strong> ignores their elegant presence.</p>
<p>Waterhouse combined classical subjects with Pre-Raphaelite style. This work is at the <a href="/museum/art-gallery-of-new-south-wales-agnsw-sydney-austra"><strong>Art Gallery of New South Wales</strong></a> in Sydney.</p>`,
      faqs: [
        { question: "Where is Waterhouse's Diogenes?", answer: "This painting is at the <a href=\"/museum/art-gallery-of-new-south-wales-agnsw-sydney-austra\"><strong>Art Gallery of New South Wales</strong></a> in Sydney." },
        { question: "Who painted this philosopher scene?", answer: "<a href=\"/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a>, the British classical painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-william-waterhouse-diogenes");

  // 67. salvator-rosa-diogenes-casting-away-his-cup
  await prisma.artwork.update({
    where: { slug: 'salvator-rosa-diogenes-casting-away-his-cup' },
    data: {
      description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted Diogenes discarding his drinking cup after seeing a boy drink from his hands. The philosopher realizes even a cup is an <strong>unnecessary possession</strong>.</p>
<p>Rosa often depicted philosophical subjects. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Diogenes Casting Away His Cup?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>, the Italian Baroque painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: salvator-rosa-diogenes-casting-away-his-cup");

  // 68. salvator-rosa-diogenes-throwing-away-his-drinking-cup
  await prisma.artwork.update({
    where: { slug: 'salvator-rosa-diogenes-throwing-away-his-drinking-cup' },
    data: {
      description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted another version of Diogenes throwing away his cup. The philosopher embraces <strong>radical simplicity</strong> after learning from a child's example.</p>
<p>Rosa created multiple works on this theme. This version is at the <a href="/museum/national-gallery-of-denmark-statens-museum-for-kun"><strong>National Gallery of Denmark</strong></a> in Copenhagen.</p>`,
      faqs: [
        { question: "Where is this Salvator Rosa painting?", answer: "This work is at the <a href=\"/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a>." },
        { question: "Who depicted this Diogenes story?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>, who often painted philosophers." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: salvator-rosa-diogenes-throwing-away-his-drinking-cup");

  // 69. raphael-diotalevi-madonna
  await prisma.artwork.update({
    where: { slug: 'raphael-diotalevi-madonna' },
    data: {
      description: `<p><a href="/artist/raphael"><strong>Raphael</strong></a> painted the Diotalevi Madonna, showing the Virgin with the Christ Child and infant Saint John. The figures are arranged with the <strong>harmonious composition</strong> that became Raphael's hallmark.</p>
<p>This early work shows his developing style. It's at the <a href="/museum/staatliche-museen-zu-berlin-berlin-germany"><strong>Staatliche Museen zu Berlin</strong></a>.</p>`,
      faqs: [
        { question: "Where is the Diotalevi Madonna?", answer: "This painting is at the <a href=\"/museum/staatliche-museen-zu-berlin-berlin-germany\"><strong>Staatliche Museen zu Berlin</strong></a>." },
        { question: "Who painted the Diotalevi Madonna?", answer: "<a href=\"/artist/raphael\"><strong>Raphael</strong></a>, the Italian High Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: raphael-diotalevi-madonna");

  // 70. hans-memling-diptych-of-john-the-baptist-and-st-veronica-st-joh
  await prisma.artwork.update({
    where: { slug: 'hans-memling-diptych-of-john-the-baptist-and-st-veronica-st-joh' },
    data: {
      description: `<p><a href="/artist/hans-memling"><strong>Hans Memling</strong></a> created this diptych panel showing Saint John the Baptist. The saint is depicted with his <strong>traditional attributes</strong> in Memling's refined Flemish style.</p>
<p>The other wing shows St. Veronica. This panel is at the <a href="/museum/alte-pinakothek-munich-germany"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
      faqs: [
        { question: "Where is this Memling diptych?", answer: "This panel is at the <a href=\"/museum/alte-pinakothek-munich-germany\"><strong>Alte Pinakothek</strong></a> in Munich." },
        { question: "Who painted this diptych?", answer: "<a href=\"/artist/hans-memling\"><strong>Hans Memling</strong></a>, the Flemish Renaissance painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: hans-memling-diptych-of-john-the-baptist-and-st-veronica-st-joh");

  // 71. gerard-ter-borch-dispatch
  await prisma.artwork.update({
    where: { slug: 'gerard-ter-borch-dispatch' },
    data: {
      description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this scene of a messenger delivering or receiving a dispatch. The <strong>formal exchange</strong> is rendered with his characteristic attention to rich fabrics and textures.</p>
<p>Ter Borch specialized in elegant genre scenes. This work is at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Dispatch?", answer: "This painting is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this messenger scene?", answer: "<a href=\"/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a>, the Dutch Golden Age painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gerard-ter-borch-dispatch");

  // 72. andrea-del-sarto-disputation-on-the-trinity
  await prisma.artwork.update({
    where: { slug: 'andrea-del-sarto-disputation-on-the-trinity' },
    data: {
      description: `<p><a href="/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> painted this theological scene showing saints discussing the Trinity. The figures gesture and debate while gazing toward the <strong>heavenly vision</strong> above.</p>
<p>Del Sarto was called "the faultless painter" for his technique. This work is at the <a href="/museum/palazzo-pitti-florence160italy"><strong>Palazzo Pitti</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is Disputation on the Trinity?", answer: "This painting is at the <a href=\"/museum/palazzo-pitti-florence160italy\"><strong>Palazzo Pitti</strong></a> in Florence." },
        { question: "Who painted this religious debate?", answer: "<a href=\"/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a>, the Florentine Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: andrea-del-sarto-disputation-on-the-trinity");

  // 73. jan-steen-doctor39s-visit
  await prisma.artwork.update({
    where: { slug: 'jan-steen-doctor39s-visit' },
    data: {
      description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> painted this comic scene of a doctor visiting a "lovesick" patient. The physician examines the young woman while others look on with <strong>knowing amusement</strong>.</p>
<p>The doctor's visit was a popular comic theme in Dutch painting. This work is at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
      faqs: [
        { question: "Where is Doctor's Visit?", answer: "This painting is at the <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Russia." },
        { question: "Who painted this comic scene?", answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a>, known for his humorous Dutch genre scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jan-steen-doctor39s-visit");

  // 74. ernst-ludwig-kirchner-dodo-and-her-brother
  await prisma.artwork.update({
    where: { slug: 'ernst-ludwig-kirchner-dodo-and-her-brother' },
    data: {
      description: `<p><a href="/artist/ernst-ludwig-kirchner"><strong>Ernst Ludwig Kirchner</strong></a> painted Dodo (his lover Doris Grosse) with her brother in this Expressionist portrait. The <strong>angular forms</strong> and bold colors are typical of Die Brücke style.</p>
<p>Kirchner was a founder of German Expressionism. This work is at the <a href="/museum/smith-college-museum-of-art-scma-northampton-ma-us"><strong>Smith College Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Where is Dodo and Her Brother?", answer: "This painting is at the <a href=\"/museum/smith-college-museum-of-art-scma-northampton-ma-us\"><strong>Smith College Museum of Art</strong></a> in Massachusetts." },
        { question: "Who painted this Expressionist portrait?", answer: "<a href=\"/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a>, founder of Die Brücke." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: ernst-ludwig-kirchner-dodo-and-her-brother");

  // 75. ernst-ludwig-kirchner-dodo-with-a-japanese-umbrella
  await prisma.artwork.update({
    where: { slug: 'ernst-ludwig-kirchner-dodo-with-a-japanese-umbrella' },
    data: {
      description: `<p><a href="/artist/ernst-ludwig-kirchner"><strong>Ernst Ludwig Kirchner</strong></a> portrayed Dodo holding a Japanese umbrella, combining <strong>Expressionist style</strong> with Eastern influences. The bold outlines and flat colors show Japanese print inspiration.</p>
<p>Kirchner frequently painted his model and lover. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Dodo with a Japanese Umbrella?", answer: "<a href=\"/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a>, the German Expressionist." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: ernst-ludwig-kirchner-dodo-with-a-japanese-umbrella");

  // 76. van-gogh-dog
  await prisma.artwork.update({
    where: { slug: 'van-gogh-dog' },
    data: {
      description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this study of a dog, rendered with his characteristic <strong>expressive brushwork</strong>. The animal is depicted with the empathy Van Gogh showed toward all his subjects.</p>
<p>This painting was stolen from the Isabella Stewart Gardner Museum in 1990 and remains <strong>missing</strong>.</p>`,
      faqs: [
        { question: "Where is Van Gogh's Dog?", answer: "This work was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum and remains missing." },
        { question: "Who painted this dog study?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> created this work." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: van-gogh-dog");

  // 77. henri-toulouse-lautrec-dog-car
  await prisma.artwork.update({
    where: { slug: 'henri-toulouse-lautrec-dog-car' },
    data: {
      description: `<p><a href="/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this scene of a dog cart, capturing the <strong>lively movement</strong> of the vehicle and animal. His quick, sketch-like brushwork conveys spontaneity.</p>
<p>Toulouse-Lautrec often painted Parisian street life. This work is at the <a href="/museum/musee-toulouselautrec-albi-france"><strong>Musée Toulouse-Lautrec</strong></a> in Albi.</p>`,
      faqs: [
        { question: "Where is Dog Car?", answer: "This painting is at the <a href=\"/museum/musee-toulouselautrec-albi-france\"><strong>Musée Toulouse-Lautrec</strong></a> in Albi, France." },
        { question: "Who painted this street scene?", answer: "<a href=\"/artist/henri-toulouse-lautrec\"><strong>Henri de Toulouse-Lautrec</strong></a>, the Post-Impressionist master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: henri-toulouse-lautrec-dog-car");

  // 78. dolce-far-niente-godward
  await prisma.artwork.update({
    where: { slug: 'dolce-far-niente-godward' },
    data: {
      description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted "Dolce Far Niente" (Sweet Idleness) in 1904, showing a woman reclining in <strong>classical repose</strong>. The figure embodies leisure in a Mediterranean setting.</p>
<p>This <strong>oil on canvas</strong> measures 99 × 50 cm. Godward specialized in such neoclassical subjects featuring <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>beautiful women</strong></a>.</p>`,
      faqs: [
        { question: "What size is Dolce Far Niente?", answer: "This <strong>oil on canvas</strong> from <strong>1904</strong> measures <strong>99 × 50 cm</strong>." },
        { question: "Who painted Dolce Far Niente?", answer: "<a href=\"/artist/john-william-godward\"><strong>John William Godward</strong></a>, known for his neoclassical beauties." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: dolce-far-niente-godward");

  // 79. caspar-david-friedrich-dolmen-in-snow
  await prisma.artwork.update({
    where: { slug: 'caspar-david-friedrich-dolmen-in-snow' },
    data: {
      description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this winter scene of an ancient stone dolmen covered in snow. The <strong>prehistoric monument</strong> stands stark against the white landscape, evoking mystery and mortality.</p>
<p>Friedrich often painted ancient ruins in nature. This work is at the <a href="/museum/galerie-neue-meister-dresden-germany"><strong>Galerie Neue Meister</strong></a> in Dresden.</p>`,
      faqs: [
        { question: "Where is Dolmen in Snow?", answer: "This painting is at the <a href=\"/museum/galerie-neue-meister-dresden-germany\"><strong>Galerie Neue Meister</strong></a> in Dresden, Germany." },
        { question: "Who painted this winter scene?", answer: "<a href=\"/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>, the German Romantic landscape painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: caspar-david-friedrich-dolmen-in-snow");

  // 80. diego-velazquez-don-cristobal-suarez-de-ribera
  await prisma.artwork.update({
    where: { slug: 'diego-velazquez-don-cristobal-suarez-de-ribera' },
    data: {
      description: `<p><a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this portrait of Don Cristóbal Suárez de Ribera, a Sevillian clergyman. The subject is shown in <strong>formal ecclesiastical dress</strong> with dignified bearing.</p>
<p>This early portrait shows Velázquez's developing mastery. It's at the <a href="/museum/museum-of-fine-arts-of-seville-seville-spain"><strong>Museum of Fine Arts of Seville</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Velázquez portrait?", answer: "This painting is at the <a href=\"/museum/museum-of-fine-arts-of-seville-seville-spain\"><strong>Museum of Fine Arts of Seville</strong></a> in Spain." },
        { question: "Who painted Don Cristóbal Suárez de Ribera?", answer: "<a href=\"/artist/diego-velazquez\"><strong>Diego Velázquez</strong></a>, Spain's greatest Baroque painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: diego-velazquez-don-cristobal-suarez-de-ribera");

  console.log("\n✓ All 80 artworks updated successfully!");
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
