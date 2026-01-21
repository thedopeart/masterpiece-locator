const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'amedeo-modigliani',
    bioFull: `<p><a href="/movement/expressionism"><strong>Expressionist</strong></a> painter <strong>Amedeo Modigliani</strong> (1884-1920) developed one of modern art's most recognizable styles through elongated forms and mask-like faces. Born in Livorno, Italy to a family of merchants, childhood illness interrupted his formal education but fostered his artistic ambitions. He studied in Florence and Venice before moving to Paris in 1906, where he encountered avant-garde circles and African sculpture that transformed his vision.</p>

<p>Modigliani initially focused on sculpture under <a href="/artist/constantin-brancusi"><strong>Brancusi</strong></a>'s influence before returning to painting around 1915. His <strong>portraits and nudes</strong> feature elongated necks, almond-shaped eyes, and simplified features that create haunting psychological presence. A 1917 exhibition of his nudes was shut down for indecency on opening day. Poverty, alcoholism, and tuberculosis marked his short life, and he died at 35, followed the next day by his pregnant partner Jeanne Hébuterne's suicide. Today works hang at the <a href="/museum/museum-of-modern-art"><strong>Museum of Modern Art</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and <a href="/museum/musee-de-lorangerie"><strong>Musée de l'Orangerie</strong></a>. His paintings regularly achieve record auction prices.</p>`,
    faqs: [
      { question: "What art movement was Modigliani part of?", answer: "Modigliani is associated with <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a> though his style was uniquely personal, combining influences from African sculpture, Italian Renaissance, and <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a>." },
      { question: "Where can I see Modigliani's paintings?", answer: "Works hang at <a href=\"/museum/museum-of-modern-art\"><strong>MoMA</strong></a>, <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a>, and <a href=\"/museum/musee-de-lorangerie\"><strong>Musée de l'Orangerie</strong></a> in Paris." },
      { question: "What is distinctive about Modigliani's style?", answer: "Modigliani's <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> feature elongated necks, almond eyes, and mask-like faces. His nudes use warm colors and sensuous, simplified forms." },
      { question: "Did Modigliani create sculpture?", answer: "Yes, Modigliani studied sculpture under <a href=\"/artist/constantin-brancusi\"><strong>Brancusi</strong></a> and created carved stone heads influenced by African art before health issues forced him back to painting." },
      { question: "How did Modigliani die?", answer: "Modigliani died of tubercular meningitis on January 24, 1920, at age 35. His pregnant partner Jeanne Hébuterne committed suicide the following day." }
    ]
  },
  {
    slug: 'bernardino-luini',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Bernardino Luini</strong> (c. 1480-1532) became the leading Milanese artist of his generation by absorbing <a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>'s style. Born in Runo near Lake Maggiore, he moved to Milan around 1500 and trained during Leonardo's second period in the city. Giorgio Vasari called him "a very delicate and pleasing painter" who imitated Leonardo so well he earned the nickname "Leonardo of Lombardy."</p>

<p>Luini's frescoes and panel paintings translate Leonardo's sfumato and sweetly smiling faces into more accessible religious imagery. His <strong>graceful female saints</strong> became widely admired, and his fresco cycles in Lombardian churches survive in remarkable condition. The <strong>Passion and Crucifixion</strong> frescoes (1529) at Santa Maria degli Angeli in Lugano represent his most ambitious work. Some scholars believe he contributed to works attributed to Leonardo, including controversially the <strong>Salvator Mundi</strong>. Today the <a href="/museum/pinacoteca-di-brera"><strong>Pinacoteca di Brera</strong></a> in Milan holds major paintings. Works also hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London, <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Bernardino Luini part of?", answer: "Luini was a <a href=\"/movement/renaissance\"><strong>High Renaissance</strong></a> painter who worked in the Lombard tradition, heavily influenced by <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>'s style and technique." },
      { question: "Where can I see Luini's paintings?", answer: "The <a href=\"/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan holds major works. Paintings also hang at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London and <a href=\"/museum/louvre\"><strong>Louvre</strong></a>." },
      { question: "How was Luini connected to Leonardo da Vinci?", answer: "Luini studied in Milan during <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a>'s residence there, absorbing his sfumato technique. Vasari called him 'Leonardo of Lombardy' for his skilled imitation." },
      { question: "What subjects did Luini paint?", answer: "Luini painted <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious subjects</strong></a> including graceful female saints, Madonnas, and large fresco cycles in Lombardian churches." },
      { question: "Where can I see Luini's frescoes?", answer: "His <strong>Passion and Crucifixion</strong> frescoes (1529) survive at Santa Maria degli Angeli in Lugano, Switzerland. Other frescoes are in Milan and Saronno." }
    ]
  },
  {
    slug: 'el-greco',
    bioFull: `<p><a href="/movement/mannerism"><strong>Mannerist</strong></a> master <strong>El Greco</strong> (1541-1614) fused Byzantine tradition with Venetian color and Spanish mysticism into one of art history's most distinctive styles. Born Doménikos Theotokópoulos in Crete, then a Venetian possession, he trained as an icon painter before traveling to Venice around 1567, where he studied <a href="/artist/titian"><strong>Titian</strong></a> and <a href="/artist/tintoretto"><strong>Tintoretto</strong></a>. After time in Rome, he settled in Toledo, Spain in 1577, finding patrons among the clergy and nobility.</p>

<p>El Greco's mature style features <strong>elongated figures</strong>, acid colors, and flickering light that express spiritual ecstasy. <strong>The Burial of the Count of Orgaz</strong> (1586-88) at Santo Tomé in Toledo combines earthly grandeur with heavenly vision in a painting that has never left its original location. <strong>View of Toledo</strong> is among history's most dramatic landscape paintings. Ignored after his death, El Greco was rediscovered by Romantics and influenced Expressionists and Picasso. The <a href="/museum/museo-del-prado"><strong>Prado</strong></a> in Madrid holds major works, while <strong>The Burial</strong> remains at Santo Tomé church in Toledo. The <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> displays significant paintings.</p>`,
    faqs: [
      { question: "What art movement was El Greco part of?", answer: "El Greco is associated with <a href=\"/movement/mannerism\"><strong>Mannerism</strong></a> though his unique style fused Byzantine icon painting, Venetian color, and Spanish mystical intensity." },
      { question: "Where can I see El Greco's paintings?", answer: "The <a href=\"/museum/museo-del-prado\"><strong>Prado</strong></a> in Madrid holds major works. <strong>The Burial of the Count of Orgaz</strong> remains at Santo Tomé church in Toledo." },
      { question: "Why is he called El Greco?", answer: "<strong>El Greco</strong> means 'The Greek' in Spanish. Born Doménikos Theotokópoulos in Crete, he usually signed paintings with his Greek name." },
      { question: "What is distinctive about El Greco's style?", answer: "El Greco used <strong>elongated figures</strong>, unusual colors, and flickering light to express spiritual intensity. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and religious scenes are immediately recognizable." },
      { question: "What is The Burial of the Count of Orgaz?", answer: "<strong>The Burial of the Count of Orgaz</strong> (1586-88) shows a 14th-century miracle with heaven opening above the burial scene. It has never left Santo Tomé church in Toledo." }
    ]
  },
  {
    slug: 'frida-kahlo',
    bioFull: `<p><a href="/movement/surrealism"><strong>Surrealist</strong></a> painter <strong>Frida Kahlo</strong> (1907-1954) transformed personal suffering into powerful art that has become globally iconic. Born in Coyoacán, Mexico to a German father and mestiza mother, she contracted polio as a child and was severely injured in a bus accident at 18, leaving her with lifelong pain. During recovery, she began painting self-portraits using a mirror attached to her bed canopy.</p>

<p>Kahlo's work draws on Mexican folk art, pre-Columbian imagery, and her own physical and emotional experiences. Of her 143 paintings, <strong>55 are self-portraits</strong> exploring identity, pain, and her tumultuous marriage to muralist <a href="/artist/diego-rivera"><strong>Diego Rivera</strong></a>. André Breton championed her as a Surrealist, though she rejected the label, saying she painted her own reality. <strong>The Two Fridas</strong> (1939) shows two versions of herself connected by exposed hearts. Her home, the <a href="/museum/frida-kahlo-museum"><strong>Blue House (Casa Azul)</strong></a> in Coyoacán, is now a museum. Works hang at the <a href="/museum/museo-de-arte-moderno"><strong>Museo de Arte Moderno</strong></a> in Mexico City and museums worldwide. In 2025, <strong>The Dream</strong> sold for $54.7 million, a record for any female artist.</p>`,
    faqs: [
      { question: "What art movement was Frida Kahlo part of?", answer: "Kahlo is often associated with <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>, though she rejected the label. Her work also connects to Mexican folk art and Magical Realism." },
      { question: "Where can I see Frida Kahlo's paintings?", answer: "The <a href=\"/museum/frida-kahlo-museum\"><strong>Blue House (Casa Azul)</strong></a> in Mexico City is dedicated to her life. Works also hang at the <a href=\"/museum/museo-de-arte-moderno\"><strong>Museo de Arte Moderno</strong></a>." },
      { question: "What subjects did Frida Kahlo paint?", answer: "Kahlo painted 55 <strong>self-portraits</strong> exploring identity, physical pain, and emotional suffering. Her work features symbols from Mexican culture and her personal life." },
      { question: "Who was Frida Kahlo married to?", answer: "Kahlo married muralist <a href=\"/artist/diego-rivera\"><strong>Diego Rivera</strong></a> in 1929. Their tumultuous relationship, including affairs and a divorce followed by remarriage, appears throughout her art." },
      { question: "What is The Two Fridas?", answer: "<strong>The Two Fridas</strong> (1939) shows two self-portraits holding hands, their hearts exposed and connected. It's at the <a href=\"/museum/museo-de-arte-moderno\"><strong>Museo de Arte Moderno</strong></a> in Mexico City." }
    ]
  },
  {
    slug: 'giovanni-battista-moroni',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> portraitist <strong>Giovanni Battista Moroni</strong> (c. 1520-1578) created remarkably direct and psychologically penetrating images of the Bergamasque bourgeoisie. Born in Albino near Bergamo, he trained with <a href="/artist/moretto-da-brescia"><strong>Moretto da Brescia</strong></a> and also painted religious works, though his portraits secured his reputation. His sitters were mainly local aristocrats, professionals, and merchants rather than major nobility.</p>

<p>Moroni painted his subjects against plain backgrounds with a naturalism and immediacy that distinguished him from more formal court portraitists. <strong>The Tailor</strong> (1565-70), showing a craftsman with scissors and cloth, represents one of the first full portraits of a working person in Western art. His <strong>Pace Rivola Spini</strong> may be the first full-length standing portrait of a woman alone. Around 150 portraits survive in good condition. Art historian Roberto Longhi suggested his realism prefigured <a href="/artist/caravaggio"><strong>Caravaggio</strong></a>. Today the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London holds <strong>The Tailor</strong> and other major works. The <a href="/museum/accademia-carrara"><strong>Accademia Carrara</strong></a> in Bergamo preserves the largest collection.</p>`,
    faqs: [
      { question: "What art movement was Moroni part of?", answer: "Moroni was a <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter working in Northern Italy. His realistic <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> anticipated later naturalistic developments." },
      { question: "Where can I see Moroni's paintings?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London holds <strong>The Tailor</strong>. The <a href=\"/museum/accademia-carrara\"><strong>Accademia Carrara</strong></a> in Bergamo has the largest collection." },
      { question: "What is The Tailor?", answer: "<strong>The Tailor</strong> (1565-70) shows a craftsman with scissors and cloth. It's one of the first full portraits of a working person, now at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London." },
      { question: "What subjects did Moroni paint?", answer: "Moroni painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of the Bergamasque bourgeoisie and aristocracy. He also created religious works, though these are less celebrated." },
      { question: "How did Moroni influence later art?", answer: "Art historian Roberto Longhi suggested Moroni's realistic approach prefigured <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a>. His direct portraiture also influenced later Bergamasque painters." }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres',
    bioFull: `<p><a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> master <strong>Jean-Auguste-Dominique Ingres</strong> (1780-1867) became the guardian of classical tradition while creating works of sensuous beauty that fascinated modern artists. Born in Montauban to an artist father, he trained under <a href="/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> and won the Prix de Rome in 1801. He spent 18 years in Italy absorbing <a href="/artist/raphael"><strong>Raphael</strong></a>'s lessons before returning to Paris as Neoclassicism's champion against <a href="/artist/eugene-delacroix"><strong>Delacroix</strong></a>'s Romanticism.</p>

<p>Ingres insisted on the supremacy of line over color, yet his <strong>nudes and Orientalist subjects</strong> display sensuality that transcends academic doctrine. <strong>La Grande Odalisque</strong> (1814) elongates the female form impossibly, anticipating Mannerist and modern distortions. His portraits capture wealthy sitters with meticulous detail. Ingres became France's most honored painter, directing the French Academy in Rome and receiving the Legion of Honor. His expressive distortions influenced <a href="/artist/pablo-picasso"><strong>Picasso</strong></a> and <a href="/artist/henri-matisse"><strong>Matisse</strong></a>. Today the <a href="/museum/louvre"><strong>Louvre</strong></a> holds major works including <strong>La Grande Odalisque</strong>. The <a href="/museum/musee-ingres-bourdelle"><strong>Musée Ingres Bourdelle</strong></a> in Montauban preserves his studio contents.</p>`,
    faqs: [
      { question: "What art movement was Ingres part of?", answer: "Ingres was the leading French <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> painter after <a href=\"/artist/jacques-louis-david\"><strong>David</strong></a>, championing classical ideals against <a href=\"/artist/eugene-delacroix\"><strong>Delacroix</strong></a>'s Romanticism." },
      { question: "Where can I see Ingres's paintings?", answer: "The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> holds major works including <strong>La Grande Odalisque</strong>. The <a href=\"/museum/musee-ingres-bourdelle\"><strong>Musée Ingres Bourdelle</strong></a> in Montauban has his studio contents." },
      { question: "What is La Grande Odalisque?", answer: "<strong>La Grande Odalisque</strong> (1814) depicts a <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>reclining nude</strong></a> with impossibly elongated spine. It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>." },
      { question: "Who influenced Ingres?", answer: "Ingres trained under <a href=\"/artist/jacques-louis-david\"><strong>David</strong></a> and idolized <a href=\"/artist/raphael\"><strong>Raphael</strong></a>. He studied in Italy for 18 years, absorbing Renaissance ideals." },
      { question: "How did Ingres influence modern art?", answer: "Ingres's sensuous lines and expressive distortions influenced <a href=\"/artist/pablo-picasso\"><strong>Picasso</strong></a>, <a href=\"/artist/henri-matisse\"><strong>Matisse</strong></a>, and other modern artists despite his academic reputation." }
    ]
  },
  {
    slug: 'joaquin-sorolla',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> painter <strong>Joaquín Sorolla</strong> (1863-1923) became Spain's master of light through his luminous beach scenes and portraits. Born in Valencia, orphaned at two during a cholera epidemic, he studied at the local Academy before traveling to Rome and Paris, where <a href="/artist/claude-monet"><strong>Monet</strong></a>'s work inspired his approach to natural light. Returning to Spain, he developed a distinctive style capturing Mediterranean brilliance.</p>

<p>Sorolla painted outdoors, rendering <strong>sunlight on water, skin, and white fabric</strong> with virtuoso brushwork. His beach scenes showing children playing in surf or fishermen hauling nets combine social observation with pure visual pleasure. Monet called him "a master of light." International exhibitions brought commissions including a portrait of President William Howard Taft. The Hispanic Society of America commissioned monumental murals depicting Spanish regions, which occupied his final years. His Madrid home is now the <a href="/museum/museo-sorolla"><strong>Museo Sorolla</strong></a>, preserving his studio and significant paintings. The <a href="/museum/j-paul-getty-museum"><strong>J. Paul Getty Museum</strong></a> holds beach scenes, and the Hispanic Society displays his murals.</p>`,
    faqs: [
      { question: "What art movement was Joaquín Sorolla part of?", answer: "Sorolla is associated with <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and <strong>Luminism</strong>. <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> called him 'a master of light' for his handling of Mediterranean sunlight." },
      { question: "Where can I see Sorolla's paintings?", answer: "The <a href=\"/museum/museo-sorolla\"><strong>Museo Sorolla</strong></a> in Madrid preserves his home and studio. The <a href=\"/museum/j-paul-getty-museum\"><strong>Getty Museum</strong></a> holds beach scenes." },
      { question: "What subjects did Sorolla paint?", answer: "Sorolla painted <a href=\"https://luxurywallart.com/collections/beach-artwork\" target=\"_blank\" rel=\"noopener\"><strong>beach scenes</strong></a>, <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, and Spanish regional subjects. His children playing in surf became his signature." },
      { question: "What are the Hispanic Society murals?", answer: "Sorolla painted 14 monumental murals depicting Spanish regions for the <strong>Hispanic Society of America</strong> in New York, occupying his final creative years." },
      { question: "What techniques made Sorolla's style distinctive?", answer: "Sorolla captured <strong>sunlight on water and white fabric</strong> with rapid, confident brushwork. He painted outdoors, directly observing Mediterranean light effects." }
    ]
  },
  {
    slug: 'leonardo-da-vinci',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> genius <strong>Leonardo da Vinci</strong> (1452-1519) embodied the ideal of the universal man through his achievements in painting, sculpture, architecture, science, and engineering. Born illegitimately in Vinci near Florence, he trained in Andrea del Verrocchio's workshop, where his talent was evident even as an apprentice. He worked for Ludovico Sforza in Milan, Cesare Borgia, and finally Francis I of France, where he died at Amboise.</p>

<p>Leonardo's paintings are few but monumentally influential. <strong>The Last Supper</strong> (1495-98) at Santa Maria delle Grazie in Milan revolutionized narrative painting through its psychological drama. The <strong>Mona Lisa</strong> (c. 1503-19) pioneered sfumato technique and became the world's most famous painting. His notebooks contain thousands of drawings and observations ranging from anatomy to flying machines. He completed few projects, driven by restless curiosity to investigate rather than finish. The <a href="/museum/louvre"><strong>Louvre</strong></a> holds the <strong>Mona Lisa</strong> and other major paintings. <strong>The Last Supper</strong> remains at its original location in Milan. The <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> Washington displays <strong>Ginevra de' Benci</strong>, his only painting in the Americas.</p>`,
    faqs: [
      { question: "What art movement was Leonardo da Vinci part of?", answer: "Leonardo was a central figure of the High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>, alongside <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> and <a href=\"/artist/raphael\"><strong>Raphael</strong></a>. He pioneered techniques that defined Renaissance painting." },
      { question: "Where can I see the Mona Lisa?", answer: "The <strong>Mona Lisa</strong> hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, attracting millions of visitors annually. It has been there since the French Revolution." },
      { question: "Where is The Last Supper?", answer: "<strong>The Last Supper</strong> remains at its original location in the refectory of Santa Maria delle Grazie in Milan. Advance reservations are required for viewing." },
      { question: "What is sfumato?", answer: "<strong>Sfumato</strong> is Leonardo's technique of soft, hazy transitions between tones without visible brushstrokes. The <strong>Mona Lisa</strong> exemplifies this smoky atmospheric effect." },
      { question: "What other fields did Leonardo work in?", answer: "Leonardo studied anatomy, engineering, architecture, and natural science. His notebooks contain designs for flying machines, tanks, and anatomical studies centuries ahead of his time." }
    ]
  },
  {
    slug: 'paul-delaroche',
    bioFull: `<p><strong>Historical painter</strong> <strong>Paul Delaroche</strong> (1797-1856) achieved extraordinary popularity through dramatic scenes from English and French history. Born Hippolyte Delaroche in Paris, he trained under landscape painter Louis-Étienne Watelet and history painter Antoine-Jean Gros. His theatrical approach combined <a href="/artist/jean-auguste-dominique-ingres"><strong>Ingres</strong></a>'s polished technique with <a href="/artist/eugene-delacroix"><strong>Delacroix</strong></a>'s dramatic subjects, appealing to broad audiences while critics debated his merits.</p>

<p><strong>The Execution of Lady Jane Grey</strong> (1833) became one of the 19th century's most popular paintings, showing the blindfolded teenage queen reaching for the execution block. Its theatrical staging and emotional intensity drew crowds at the Paris Salon. Delaroche painted numerous scenes of English Tudor and Stuart history, which French audiences found particularly fascinating. The painting was thought destroyed in the 1928 Thames flood but was rediscovered in 1973 and restored. It now hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London, where it remains enormously popular. The <a href="/museum/wallace-collection"><strong>Wallace Collection</strong></a> and <a href="/museum/hermitage"><strong>Hermitage</strong></a> also hold significant works.</p>`,
    faqs: [
      { question: "What type of paintings did Paul Delaroche create?", answer: "Delaroche painted dramatic <strong>historical scenes</strong>, often from English Tudor and Stuart history. His theatrical approach made him one of the most popular French painters of his era." },
      { question: "Where can I see The Execution of Lady Jane Grey?", answer: "<strong>The Execution of Lady Jane Grey</strong> (1833) hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London. It's one of the museum's most visited paintings." },
      { question: "Who was Lady Jane Grey?", answer: "<strong>Lady Jane Grey</strong> was the 'Nine Days' Queen' of England, proclaimed queen in 1553 before being deposed and executed at age 16 or 17 in 1554." },
      { question: "What happened to the painting after 1928?", answer: "The painting was thought destroyed in the 1928 Thames flood at the Tate Gallery. It was rediscovered rolled up in 1973, restored, and moved to the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a>." },
      { question: "What other famous paintings did Delaroche create?", answer: "Delaroche painted <strong>The Children of Edward</strong> (1831), <strong>Bonaparte Crossing the Alps</strong> (1850), and other <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>historical</strong></a> scenes from French and English history." }
    ]
  },
  {
    slug: 'peter-paul-rubens',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> master <strong>Peter Paul Rubens</strong> (1577-1640) became the most influential painter in Northern Europe through his dynamic compositions and sensuous color. Born in Siegen, Germany to a family that had fled Antwerp, he returned to that city as a child and trained under local painters before traveling to Italy in 1600. Eight years studying <a href="/artist/titian"><strong>Titian</strong></a>, <a href="/artist/caravaggio"><strong>Caravaggio</strong></a>, and antiquity transformed his vision.</p>

<p>Returning to Antwerp in 1608, Rubens established Europe's most productive studio, employing specialists in landscapes, animals, and still life while he designed compositions and painted key passages. His voluptuous figures, swirling movement, and rich palette defined Baroque exuberance. The Marie de' Medici cycle at the <a href="/museum/louvre"><strong>Louvre</strong></a> comprises 24 monumental canvases celebrating the French queen. Rubens also served as a diplomat, negotiating peace between Spain and England. He trained <a href="/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> and influenced painters for centuries. The <a href="/museum/rubenshuis"><strong>Rubenshuis</strong></a> in Antwerp preserves his home and studio. Major works hang at the <a href="/museum/museo-del-prado"><strong>Prado</strong></a>, <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a>, and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London.</p>`,
    faqs: [
      { question: "What art movement was Peter Paul Rubens part of?", answer: "Rubens was the leading Northern <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter, defining the movement's dynamic energy and sensuous color through his influential Antwerp workshop." },
      { question: "Where can I see Rubens's paintings?", answer: "Major works hang at the <a href=\"/museum/museo-del-prado\"><strong>Prado</strong></a>, <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a>, and <a href=\"/museum/louvre\"><strong>Louvre</strong></a>. The <a href=\"/museum/rubenshuis\"><strong>Rubenshuis</strong></a> in Antwerp was his home." },
      { question: "What is the Marie de' Medici cycle?", answer: "The <strong>Marie de' Medici cycle</strong> comprises 24 monumental paintings celebrating the French queen mother. The entire series hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>." },
      { question: "What does Rubenesque mean?", answer: "<strong>Rubenesque</strong> describes full-figured <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> like those in Rubens's paintings. His voluptuous nudes represented the beauty ideal of his era." },
      { question: "Who did Rubens train?", answer: "Rubens trained <a href=\"/artist/anthony-van-dyck\"><strong>Anthony van Dyck</strong></a>, who became the greatest portrait painter of his generation. His productive workshop also trained many other Flemish artists." }
    ]
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.artist.update({
        where: { slug: update.slug },
        data: {
          bioFull: update.bioFull,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${update.slug}`);
    } catch (error) {
      console.error(`Failed to update ${update.slug}:`, error.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
