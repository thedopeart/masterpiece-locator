const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "adriaen-brouwer-peasants-quarrelling-in-an-interior": {
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captures a chaotic tavern brawl in this lively genre scene. Peasants grapple and shout while overturned furniture and spilled drinks surround them. The painter, who died at just thirty-two, specialized in depicting Flemish low-life subjects with remarkable psychological intensity.</p>

<p>Brouwer worked in both Antwerp and Haarlem, bridging Flemish and Dutch <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Golden Age</strong></a> traditions. Both Rubens and Rembrandt collected his small tavern scenes, recognizing his talent for capturing raw human emotion. His loose, fluid brushwork influenced later genre painters. The earthy <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown tones</strong></a> and dynamic composition show his ability to transform crude subject matter into compelling art.</p>`,
    faqs: [
      { question: "Who painted Peasants Quarrelling in an Interior?", answer: `<a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this tavern brawl scene. He specialized in depicting Flemish peasant life with psychological depth and loose brushwork.` },
      { question: "What style is Peasants Quarrelling in an Interior?", answer: `This is a <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre painting. Brouwer worked between Flemish and Dutch traditions, influencing both schools.` },
      { question: "Why was Adriaen Brouwer important?", answer: `Both <strong>Rubens and Rembrandt</strong> collected his work, recognizing his talent. Despite dying at 32, Brouwer helped elevate peasant scenes into respected art.` }
    ]
  },

  "william-holman-hunt-selfportrait": {
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this self-portrait as a co-founder of the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a>. The detailed rendering and intense gaze reflect the movement's commitment to truth to nature and meticulous observation. Hunt stares directly at the viewer with characteristic intensity.</p>

<p>Hunt remained the most faithful to Pre-Raphaelite principles throughout his career. While other founders moved on, he continued painting with obsessive detail, often traveling to the Holy Land for authentic settings. This self-portrait now hangs at the <a href="/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>, which holds an important collection of Pre-Raphaelite works.</p>`,
    faqs: [
      { question: "Where is William Holman Hunt's Self-Portrait displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>, which has a major collection of Pre-Raphaelite art.` },
      { question: "What movement was William Holman Hunt part of?", answer: `Hunt co-founded the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848. He remained the most devoted to its principles throughout his career.` },
      { question: "What distinguishes Hunt's painting style?", answer: `Hunt painted with <strong>obsessive detail</strong> and truth to nature. He even traveled to the Holy Land to ensure authentic settings in his biblical scenes.` }
    ]
  },

  "wassily-kandinsky-the-singer": {
    description: `<p><a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted The Singer during his early Munich period, before his complete turn to abstraction. The work shows a female figure rendered in bold, simplified forms with <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vibrant colors</strong></a> that hint at his later non-representational experiments.</p>

<p>Kandinsky believed music and painting shared spiritual properties, making a singer an apt subject for exploring these connections. The loose brushwork and expressive color reflect his study of Fauvism and <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>. This painting resides at the <a href="/apps/masterpieces/museum/lenbachhaus-munich-germany"><strong>Lenbachhaus</strong></a> in Munich, which holds the world's largest collection of his work from the Blue Rider period.</p>`,
    faqs: [
      { question: "Where can I see Kandinsky's The Singer?", answer: `The painting is at the <a href="/apps/masterpieces/museum/lenbachhaus-munich-germany"><strong>Lenbachhaus</strong></a> in Munich, which has the world's largest collection of Kandinsky's Blue Rider period works.` },
      { question: "What style is The Singer by Kandinsky?", answer: `This early work shows <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> influences with bold colors and simplified forms, painted before Kandinsky's complete turn to abstraction.` },
      { question: "Why did Kandinsky paint a singer?", answer: `Kandinsky believed <strong>music and painting</strong> shared spiritual properties. A singer was an ideal subject for exploring the connection between visual art and sound.` }
    ]
  },

  "andrea-del-sarto-the-journey-of-the-magi": {
    description: `<p><a href="/apps/masterpieces/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> painted The Journey of the Magi as part of the fresco cycle at the Basilica della Santissima Annunziata in Florence. The scene depicts the Three Wise Men traveling to Bethlehem, with an elegant procession winding through a <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> backdrop.</p>

<p>Vasari called Andrea del Sarto "the faultless painter" for his technical perfection. Working in the High <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> style, he combined Leonardo's sfumato with Michelangelo's monumentality. The fresco remains in its original location at the <a href="/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital"><strong>Basilica della Santissima Annunziata</strong></a>, where pilgrims and art lovers can still see it today.</p>`,
    faqs: [
      { question: "Where is The Journey of the Magi located?", answer: `This fresco remains in its original location at the <a href="/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital"><strong>Basilica della Santissima Annunziata</strong></a> in Florence, Italy.` },
      { question: "What style did Andrea del Sarto work in?", answer: `Andrea del Sarto worked in the High <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> style. Vasari called him "the faultless painter" for his technical perfection.` },
      { question: "What does The Journey of the Magi depict?", answer: `The fresco shows the <strong>Three Wise Men</strong> traveling to Bethlehem in an elegant procession winding through a landscape backdrop.` }
    ]
  },

  "andrea-mantegna-st-jerome-in-the-wilderness": {
    description: `<p><a href="/apps/masterpieces/artist/andrea-mantegna"><strong>Andrea Mantegna</strong></a> depicts St. Jerome as an aged penitent kneeling in a rocky wilderness. The saint beats his chest with a stone while gazing at a crucifix, a common iconography showing his devotion. Mantegna's characteristic hard, sculptural forms give the figure monumental presence.</p>

<p>Mantegna pioneered the use of archaeological accuracy in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, often including ancient Roman details. His influence on northern Italian art was profound, particularly on his brother-in-law Giovanni Bellini. This work now resides at the <a href="/apps/masterpieces/museum/museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil"><strong>Museu de Arte de São Paulo</strong></a>, one of the most important art museums in Latin America.</p>`,
    faqs: [
      { question: "Where is Mantegna's St. Jerome displayed?", answer: `This painting is at the <a href="/apps/masterpieces/museum/museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil"><strong>Museu de Arte de São Paulo</strong></a> (MASP), one of Latin America's most important art museums.` },
      { question: "What style did Andrea Mantegna work in?", answer: `Mantegna was a master of the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, known for sculptural forms and archaeological accuracy. He greatly influenced his brother-in-law Giovanni Bellini.` },
      { question: "What is depicted in St. Jerome in the Wilderness?", answer: `The painting shows <strong>St. Jerome as a penitent</strong> in a rocky wilderness, beating his chest with a stone while gazing at a crucifix.` }
    ]
  },

  "william-merritt-chase-the-king39s-jester": {
    description: `<p><a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> demonstrates his virtuoso brushwork in The King's Jester, a costume piece showing a figure in elaborate <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful dress</strong></a>. Chase excelled at capturing rich textures and the play of light on fabrics, skills he honed studying Old Masters in Munich.</p>

<p>Chase became one of America's most influential art teachers, counting Georgia O'Keeffe and Edward Hopper among his students. His bravura painting style helped introduce European sophistication to American art. As a leading figure in <a href="/apps/masterpieces/movement/american-realism"><strong>American Realism</strong></a>, he proved that technical brilliance and artistic ambition could thrive in the United States.</p>`,
    faqs: [
      { question: "Who painted The King's Jester?", answer: `<a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted this costume piece. He was one of America's most influential artists and teachers.` },
      { question: "What movement was William Merritt Chase part of?", answer: `Chase was a leading figure in <a href="/apps/masterpieces/movement/american-realism"><strong>American Realism</strong></a>. His bravura style helped introduce European sophistication to American art.` },
      { question: "Who were Chase's famous students?", answer: `Chase taught many important artists, including <strong>Georgia O'Keeffe</strong> and <strong>Edward Hopper</strong>. He was one of America's most influential art teachers.` }
    ]
  },

  "annibale-carracci-the-laughing-youth": {
    description: `<p><a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> captures spontaneous joy in The Laughing Youth, a study of a young man mid-laugh. The painting demonstrates Carracci's interest in naturalistic expression and his ability to freeze a fleeting moment of emotion.</p>

<p>Working in Bologna and Rome, Annibale helped establish the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style that would dominate seventeenth-century art. Along with his brother Agostino and cousin Ludovico, he founded an influential academy that emphasized drawing from life. This work hangs at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome, surrounded by other Baroque treasures including sculptures by Bernini.</p>`,
    faqs: [
      { question: "Where is The Laughing Youth displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome, alongside other Baroque masterpieces including Bernini's sculptures.` },
      { question: "What movement was Annibale Carracci part of?", answer: `Carracci helped establish the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style. With his brother and cousin, he founded an influential academy in Bologna.` },
      { question: "What makes The Laughing Youth significant?", answer: `The painting shows Carracci's interest in <strong>naturalistic expression</strong>, capturing a spontaneous moment of joy rather than a posed expression.` }
    ]
  },

  "winslow-homer-prisoners-from-the-front": {
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> painted Prisoners from the Front in 1866, depicting a moment from the American Civil War. A Union officer confronts three captured Confederate soldiers, their contrasting postures revealing the complex dynamics of the conflict.</p>

<p>This painting launched Homer's career when it was shown at the National Academy of Design and the Paris Universal Exposition of 1867. The work transcends simple propaganda, showing both sides with psychological depth. Homer became America's greatest painter of the era, known for his honest depictions of American life. The painting now hangs at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a>, a cornerstone of their American collection.</p>`,
    faqs: [
      { question: "Where can I see Prisoners from the Front?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a> in New York. It's a cornerstone of their American art collection.` },
      { question: "What does Prisoners from the Front depict?", answer: `The painting shows a <strong>Union officer confronting three captured Confederate soldiers</strong>, their contrasting postures revealing the complex dynamics of the Civil War.` },
      { question: "Why is this painting historically important?", answer: `Painted in 1866, it launched <a href="/apps/masterpieces/artist/winslow-homer"><strong>Homer's</strong></a> career when shown at the Paris Universal Exposition of 1867.` }
    ]
  },

  "anthony-van-dyck-mozes-and-the-brass-snake": {
    description: `<p><a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> depicts the biblical episode where Moses raises a brass serpent to heal the Israelites bitten by venomous snakes. The dramatic composition shows suffering figures looking up at the bronze snake on a pole, their bodies twisted in anguish and hope.</p>

<p>Van Dyck, who studied under Rubens, became the leading <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portraitist of his generation. His religious paintings, though less famous than his portraits, demonstrate the same theatrical lighting and elegant figure drawing. This work resides at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which holds an extensive collection of Flemish painting.</p>`,
    faqs: [
      { question: "Where is Moses and the Brass Snake displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which has an extensive collection of Flemish Baroque painting.` },
      { question: "What biblical story does this painting show?", answer: `It depicts <strong>Moses raising a brass serpent</strong> to heal Israelites bitten by venomous snakes, from the Book of Numbers.` },
      { question: "What movement was Anthony van Dyck part of?", answer: `Van Dyck was a leading <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter. He trained under Rubens and became the greatest portraitist of his generation.` }
    ]
  },

  "albrecht-durer-jesus-boy-with-globe": {
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> presents the Christ Child holding a globe, symbolizing his dominion over the world. The young Jesus blesses the viewer while holding the orb representing earthly power, a common <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious</strong></a> iconography known as Salvator Mundi.</p>

<p>Dürer was the supreme master of the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>, equally skilled in painting, printmaking, and theoretical writing. His technical precision and humanist learning brought Italian Renaissance ideals north of the Alps. This work is held at the <a href="/apps/masterpieces/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna, renowned for its collection of Old Master drawings and prints.</p>`,
    faqs: [
      { question: "Where is Dürer's Jesus Boy with Globe?", answer: `This work is at the <a href="/apps/masterpieces/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna, which is renowned for its collection of Old Master drawings and prints.` },
      { question: "What does the globe symbolize in this painting?", answer: `The globe represents <strong>Christ's dominion over the world</strong>. This iconography, called Salvator Mundi, shows Jesus as savior of the world.` },
      { question: "What movement was Albrecht Dürer part of?", answer: `Dürer was the supreme master of the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>, bringing Italian ideals north of the Alps.` }
    ]
  },

  "william-hogarth-the-theft-of-a-watch": {
    description: `<p><a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a> depicts a pickpocket scene with his characteristic moral commentary. A thief steals a watch from an unsuspecting victim, illustrating the dangers of London street life in the eighteenth century. Hogarth's keen observation of human behavior makes this more than simple genre painting.</p>

<p>Hogarth pioneered the "modern moral subject," using narrative sequences to comment on society's vices and follies. His satirical works influenced generations of caricaturists and social commentators. This painting resides at the <a href="/apps/masterpieces/museum/ashmolean-museum-oxford-uk"><strong>Ashmolean Museum</strong></a> in Oxford, Britain's oldest public museum.</p>`,
    faqs: [
      { question: "Where is The Theft of a Watch displayed?", answer: `This painting is at the <a href="/apps/masterpieces/museum/ashmolean-museum-oxford-uk"><strong>Ashmolean Museum</strong></a> in Oxford, which is Britain's oldest public museum.` },
      { question: "What was Hogarth known for?", answer: `<a href="/apps/masterpieces/artist/william-hogarth"><strong>Hogarth</strong></a> pioneered the "modern moral subject," using narrative paintings to satirize society's vices and follies.` },
      { question: "What does The Theft of a Watch depict?", answer: `The painting shows a <strong>pickpocket stealing a watch</strong> from an unsuspecting victim, illustrating the dangers of 18th-century London street life.` }
    ]
  },

  "artemisia-gentileschi-susanna-and-the-elders": {
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> painted Susanna and the Elders in 1610, when she was just seventeen. Unlike male painters who often depicted Susanna as coyly aware of her admirers, Artemisia shows genuine distress as the two elders corner her. The biblical heroine twists away, her face contorted with disgust.</p>

<p>Artemisia became the most famous female painter of the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> era, known for powerful depictions of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> from history and myth. This early work already shows her distinctive approach to female subjects. The painting resides at <a href="/apps/masterpieces/museum/schloss-weissenstein-pommersfelden-germany"><strong>Schloss Weissenstein</strong></a> in Pommersfelden, Germany.</p>`,
    faqs: [
      { question: "How old was Artemisia when she painted this?", answer: `<a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> was just <strong>seventeen years old</strong> when she painted Susanna and the Elders in 1610.` },
      { question: "Where is Susanna and the Elders displayed?", answer: `This painting is at <a href="/apps/masterpieces/museum/schloss-weissenstein-pommersfelden-germany"><strong>Schloss Weissenstein</strong></a> in Pommersfelden, Germany.` },
      { question: "What makes Artemisia's version different?", answer: `Unlike male painters who showed Susanna as coy, Artemisia depicts <strong>genuine distress and disgust</strong> as the elders corner the biblical heroine.` },
      { question: "What movement was Artemisia Gentileschi part of?", answer: `She was the most famous female painter of the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> era, known for powerful depictions of women.` }
    ]
  },

  "portrait-young-girl-christus": {
    description: `<p><a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted this Portrait of a Young Girl around 1470, capturing an unknown sitter with quiet intensity. Her direct gaze and serene expression give her an enigmatic presence. The dark background and subtle modeling of her features show Christus's mastery of oil technique.</p>

<p>Christus succeeded Jan van Eyck as the leading painter in Bruges. His portraits broke new ground by placing figures against atmospheric backgrounds rather than flat surfaces. This work exemplifies <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Early Netherlandish</strong></a> painting at its finest. It now hangs at the <a href="/apps/masterpieces/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie</strong></a> in Berlin, one of the world's great collections of Old Master paintings.</p>`,
    faqs: [
      { question: "Where is Portrait of a Young Girl displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie</strong></a> in Berlin, one of the world's great Old Master collections.` },
      { question: "Who was the leading painter in Bruges?", answer: `<a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> succeeded Jan van Eyck as Bruges' leading painter. He introduced innovations in portraiture.` },
      { question: "What style is this portrait?", answer: `It exemplifies <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Early Netherlandish</strong></a> painting. Christus pioneered placing portrait figures against atmospheric backgrounds.` }
    ]
  },

  "amedeo-modigliani-jean-alexandre": {
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> captures his subject Jean Alexandre in his signature elongated style. The sitter's stretched neck and almond-shaped eyes reflect Modigliani's unique synthesis of African sculpture, Byzantine icons, and Parisian modernism.</p>

<p>Modigliani lived a tragically short life, dying at thirty-five from tubercular meningitis. He worked primarily as a <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> painter and sculptor in Paris, where poverty and illness shadowed his years. Despite his struggles, he developed one of the most recognizable styles in modern art. His work influenced later <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> portraiture and remains highly sought by collectors.</p>`,
    faqs: [
      { question: "What is distinctive about Modigliani's style?", answer: `<a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani</strong></a> is known for <strong>elongated necks and almond eyes</strong>, blending African sculpture, Byzantine icons, and Parisian modernism.` },
      { question: "How old was Modigliani when he died?", answer: `Modigliani died at just <strong>thirty-five</strong> from tubercular meningitis, cutting short a brilliantly original career.` },
      { question: "What movement influenced Modigliani?", answer: `His work shows <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> influences while developing a completely unique personal style that remains instantly recognizable.` }
    ]
  },

  "el-greco-mount-sinai": {
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted Mount Sinai during his years in Crete, before moving to Spain. The work depicts the famous <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain</strong></a> where Moses received the Ten Commandments, showing the monastery of St. Catherine nestled in the rocky landscape.</p>

<p>El Greco combined Byzantine icon traditions with Italian <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> innovations, creating a unique personal style. Born Domenikos Theotokopoulos in Crete, he trained as an icon painter before studying in Venice and Rome. This early work resides at the <a href="/apps/masterpieces/museum/historical-museum-of-crete-heraclion-greece"><strong>Historical Museum of Crete</strong></a> in Heraklion, connecting him to his birthplace.</p>`,
    faqs: [
      { question: "Where is El Greco's Mount Sinai displayed?", answer: `This painting is at the <a href="/apps/masterpieces/museum/historical-museum-of-crete-heraclion-greece"><strong>Historical Museum of Crete</strong></a> in Heraklion, connecting El Greco to his birthplace.` },
      { question: "What biblical site does this painting show?", answer: `It depicts <strong>Mount Sinai</strong>, where Moses received the Ten Commandments, with the monastery of St. Catherine nestled in the landscape.` },
      { question: "What style did El Greco develop?", answer: `El Greco combined Byzantine icon traditions with <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> innovations, creating a unique personal style before settling in Spain.` }
    ]
  },

  "martyrdom-saint-bartholomew": {
    description: `<p><a href="/apps/masterpieces/artist/jusepe-de-ribera"><strong>Jusepe de Ribera</strong></a> painted The Martyrdom of Saint Bartholomew in 1634, depicting the apostle's horrific death by flaying. The executioners strain to lift the saint's body while he looks heavenward, his expression combining agony and spiritual transcendence.</p>

<p>Ribera, a Spanish painter working in Naples, became famous for his dark, intense religious paintings influenced by Caravaggio. His unflinching realism shocked some viewers but also drew admiration for its emotional power. This <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> masterwork hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C.</p>`,
    faqs: [
      { question: "Where is The Martyrdom of Saint Bartholomew?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C.` },
      { question: "What movement was Jusepe de Ribera part of?", answer: `Ribera was a <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter influenced by Caravaggio. He worked in Naples and was known for intense religious subjects.` },
      { question: "How did Saint Bartholomew die?", answer: `According to tradition, <strong>Bartholomew was flayed alive</strong>. Ribera depicts the executioners preparing to skin the saint, who looks heavenward in spiritual transcendence.` }
    ]
  },

  "bronzino-portrait-of-lorenzo-lenzi": {
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> portrays the young Lorenzo Lenzi with the cool elegance that defined his court portraits. The boy holds a book, suggesting his education and refinement. Bronzino's smooth, enamel-like surfaces and precise draftsmanship became hallmarks of Florentine <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a>.</p>

<p>As court painter to Cosimo I de' Medici, Bronzino created portraits that emphasized aristocratic grace over psychological depth. His subjects appear frozen in perfection, their emotions held behind a polished surface. This painting resides at <a href="/apps/masterpieces/museum/sforza-castle-milan-italy"><strong>Sforza Castle</strong></a> in Milan, within its art museum collection.</p>`,
    faqs: [
      { question: "Where is Portrait of Lorenzo Lenzi displayed?", answer: `This painting is at <a href="/apps/masterpieces/museum/sforza-castle-milan-italy"><strong>Sforza Castle</strong></a> in Milan, within the castle's art museum collection.` },
      { question: "What style did Bronzino work in?", answer: `Bronzino was a master of Florentine <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a>, known for smooth surfaces and precise draftsmanship in his court portraits.` },
      { question: "Who did Bronzino work for?", answer: `Bronzino served as court painter to <strong>Cosimo I de' Medici</strong>, creating portraits that emphasized aristocratic grace and refinement.` }
    ]
  },

  "bartolome-murillo-the-immaculate-conception": {
    description: `<p><a href="/apps/masterpieces/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted numerous versions of the Immaculate Conception, becoming the definitive interpreter of this subject. The Virgin Mary stands on a crescent moon, surrounded by <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angels</strong></a> and bathed in heavenly light. Her youthful beauty and upward gaze convey pure devotion.</p>

<p>Murillo worked primarily in Seville, becoming Spain's most popular <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter during his lifetime. His soft, atmospheric style and gentle religious imagery appealed to both Church patrons and private collectors. This version hangs at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-of-seville-seville-spain"><strong>Museum of Fine Arts of Seville</strong></a>, the city where Murillo spent most of his career.</p>`,
    faqs: [
      { question: "Where is this Immaculate Conception displayed?", answer: `This version hangs at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-of-seville-seville-spain"><strong>Museum of Fine Arts of Seville</strong></a>, the city where Murillo spent most of his career.` },
      { question: "What does the Immaculate Conception depict?", answer: `The painting shows the <strong>Virgin Mary conceived without sin</strong>, standing on a crescent moon surrounded by angels in heavenly light.` },
      { question: "What movement was Murillo part of?", answer: `Murillo was Spain's most popular <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter, known for soft, atmospheric religious imagery.` }
    ]
  },

  "bartolome-murillo-st-francis-of-assisi-at-prayer": {
    description: `<p><a href="/apps/masterpieces/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> depicts St. Francis in deep contemplation, his hands clasped in prayer. The saint wears the brown Franciscan habit, his face illuminated by divine light while the background fades into darkness. Murillo's tender treatment of <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious</strong></a> subjects made him enormously popular.</p>

<p>St. Francis was a favorite subject for Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters, who appreciated his humility and connection to nature. Murillo shows the saint in ecstatic devotion, his upturned eyes suggesting mystical communion. This painting resides at the <a href="/apps/masterpieces/museum/cathedral-of-our-lady-antwerp-belgium"><strong>Cathedral of Our Lady</strong></a> in Antwerp, Belgium.</p>`,
    faqs: [
      { question: "Where is St. Francis of Assisi at Prayer displayed?", answer: `This painting is at the <a href="/apps/masterpieces/museum/cathedral-of-our-lady-antwerp-belgium"><strong>Cathedral of Our Lady</strong></a> in Antwerp, Belgium.` },
      { question: "Who painted St. Francis of Assisi at Prayer?", answer: `<a href="/apps/masterpieces/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted this devotional image. He was Spain's most popular Baroque religious painter.` },
      { question: "Why was St. Francis popular with Spanish painters?", answer: `Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters valued St. Francis's <strong>humility and mystical devotion</strong>, making him a favorite subject.` }
    ]
  },

  "camille-corot-marino-large-buildings-on-the-rocks": {
    description: `<p><a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> captures the Italian town of Marino perched on rocky cliffs, its buildings rising dramatically against the sky. Painted during one of his Italian trips, the work shows Corot's gift for rendering <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> with both precision and poetry.</p>

<p>Corot made three trips to Italy, where the clear Mediterranean light transformed his approach to painting. These studies influenced the later <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a>, who admired his subtle tonal values and atmospheric effects. Though Corot is often associated with the Barbizon School and silvery French landscapes, his Italian views show a more structured, classical approach to outdoor painting.</p>`,
    faqs: [
      { question: "Who painted Marino, Large Buildings on the Rocks?", answer: `<a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> painted this during one of his three Italian trips. The clear Mediterranean light transformed his approach to landscape.` },
      { question: "What does this painting depict?", answer: `The painting shows the <strong>Italian town of Marino</strong> perched dramatically on rocky cliffs, with buildings rising against the sky.` },
      { question: "How did Corot influence later artists?", answer: `Corot's subtle tonal values and atmospheric effects influenced the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a>, who admired his approach to outdoor painting.` }
    ]
  }
};

async function main() {
  console.log("Updating 20 artworks...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artworkUpdates)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.title}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artworks`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
