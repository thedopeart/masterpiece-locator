const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'rembrandt-portrait-of-a-man',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait shortly after arriving in Amsterdam, when he was establishing himself in the Dutch Republic's most competitive artistic center. The oval format was fashionable at the time, and the sitter's elaborate ruff gave Rembrandt an opportunity to display his vigorous brushwork.</p>
<p>Nothing is known about the man's identity. An inscription giving his age as forty was likely added by a later hand. The well-preserved surface reveals the skill that quickly made Rembrandt Amsterdam's most sought-after portraitist. His ability to capture a <strong>lifelike presence</strong> set him apart from contemporaries working in more formal styles.</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, which holds one of the world's finest collections of Rembrandt's work. The <strong>Dutch Golden Age</strong> produced countless portraits of prosperous merchants and professionals, but few artists matched Rembrandt's combination of technical brilliance and psychological depth. Those interested in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait art</strong></a> will find this an excellent example of 17th-century Dutch mastery.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum has an exceptional collection of <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> works.`
      },
      {
        question: "Who is the man in the portrait?",
        answer: `The sitter's <strong>identity is unknown</strong>. An inscription claiming he was forty years old was likely added later and may not be reliable.`
      },
      {
        question: "What period is this painting from?",
        answer: `The portrait dates from <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> early Amsterdam years, when he was building his reputation as the city's leading portraitist during the <strong>Dutch Golden Age</strong>.`
      }
    ]
  },
  {
    slug: 'el-greco-portrait-of-a-man-andrea-palladio',
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted this portrait around 1575, during his Italian period before moving to Spain. The sitter has traditionally been identified as Andrea Palladio, the famous architect, though this identification remains uncertain. The man gazes directly at us with remarkable intensity.</p>
<p>El Greco created this work while in Rome, where he moved in intellectual circles connected to the Farnese family. Before that, he had studied under Titian in Venice, and the <strong>Venetian influence</strong> shows in the warm tones and careful modeling of the face. A chalk holder on the armrest and a book with colored bookmarks suggest the sitter was an artist or scholar.</p>
<p>The oil on canvas measures 116 x 98 cm and hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun"><strong>National Gallery of Denmark</strong></a> in Copenhagen. The painting's subdued palette and stark simplicity focus all attention on the man's expressive face and hands. This <strong>Mannerist</strong> approach to portraiture shows El Greco developing the psychological intensity that would characterize his later Spanish masterpieces.</p>`,
    faqs: [
      {
        question: "Where can I see this El Greco portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun"><strong>National Gallery of Denmark</strong></a> (Statens Museum for Kunst) in Copenhagen.`
      },
      {
        question: "Is this really a portrait of Andrea Palladio?",
        answer: `The identification is <strong>traditional but uncertain</strong>. The book and chalk holder suggest the sitter was an artist or intellectual, but his actual identity remains unconfirmed.`
      },
      {
        question: "When did El Greco paint this?",
        answer: `<a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> created this around <strong>1575</strong> during his time in Rome, before moving to Spain where he would spend the rest of his career.`
      }
    ]
  },
  {
    slug: 'dosso-dossi-portrait-of-a-man-probably-cesare-borgia',
    description: `<p><a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> painted this portrait around 1518-1520, and for centuries it has been identified as Cesare Borgia, the notorious Italian nobleman and military commander. The attribution remains uncertain, which is why the title includes "probably."</p>
<p>Cesare Borgia (1475-1507) was the illegitimate son of Pope Alexander VI and became Duke of Valentinois. He served as the model for Machiavelli's treatise The Prince. If this is indeed his portrait, it was painted after his death, perhaps from an earlier likeness or from descriptions. The dignified pose and fine costume suggest a man of <strong>wealth and power</strong>.</p>
<p>The oil on canvas measures 95 x 77 cm and hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. Dosso Dossi worked primarily in Ferrara during the <strong>High Renaissance</strong>, creating mythological scenes and portraits for the Este court. The French title for this work is "Portrait d'homme, dit autrefois Portrait de Cesare Borgia," acknowledging the traditional identification while noting its uncertainty.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, in the Italian paintings collection (Room 711). It was catalogued as INV 866.`
      },
      {
        question: "Is this definitely Cesare Borgia?",
        answer: `The identification is <strong>traditional but uncertain</strong>. The painting may depict Borgia, but since he died in 1507 and this was painted around 1518-1520, <a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> couldn't have worked from life.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>95 x 77 cm</strong> (approximately 37 x 30 inches). It's a half-length portrait typical of High Renaissance Italian portraiture.`
      }
    ]
  },
  {
    slug: 'tintoretto-portrait-of-a-man-aged-twenty-six',
    description: `<p><a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> painted this portrait in 1547, making it one of his earliest surviving works. A young man gazes directly at the viewer, his age specified in the title as twenty-six. The composition is restrained, focusing attention on the sitter's face and expression.</p>
<p>Tintoretto was establishing himself in Venice's competitive art world when he created this portrait. His mature style, with its dramatic lighting and dynamic compositions, was still developing. Here we see a more measured approach, with subtle modeling and a neutral background that emphasizes <strong>psychological depth</strong> rather than theatrical effect.</p>
<p>The oil on canvas hangs at the <a href="/apps/masterpieces/museum/kroeller-mueller-museum"><strong>Kröller-Müller Museum</strong></a> in Otterlo, Netherlands. Tintoretto's portraits from this period show his gift for capturing individual character through careful observation. A self-portrait from the following year, now in the Victoria and Albert Museum, reveals similar introspective qualities. The <strong>Venetian master</strong> would go on to paint some of the largest and most dramatic canvases of the Italian Renaissance.</p>`,
    faqs: [
      {
        question: "Where can I see this Tintoretto portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/kroeller-mueller-museum"><strong>Kröller-Müller Museum</strong></a> in Otterlo, Netherlands. The museum is known for its Van Gogh collection but holds other important works.`
      },
      {
        question: "When was this portrait painted?",
        answer: `<a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> created this work in <strong>1547</strong>, making it one of his earliest surviving paintings from his initial professional years in Venice.`
      },
      {
        question: "Who is the man in the portrait?",
        answer: `The sitter's <strong>identity is unknown</strong>. The title indicates he was twenty-six years old when the portrait was made, but no further details about him survive.`
      }
    ]
  },
  {
    slug: 'giovanni-battista-moroni-portrait-of-a-man-holding-a-letter-39l39avvocato39',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this striking portrait around 1570-1572. The sitter holds a folded letter addressed "Al Magº Sig Julii" (to the most worshipful Lord Giulio), and his slightly theatrical bearing earned the work its nickname "L'Avvocato," the Lawyer.</p>
<p>The title may derive from a misreading of the abbreviation "Magº" as Magistrato rather than Magnifico. Whatever his profession, the man regards us with a supercilious air, as if weighing evidence. Moroni structured the composition along a <strong>diagonal</strong> from upper right to lower left, using the tilt of the head and angle of the hands to create visual tension.</p>
<p>The oil on canvas measures 89 x 72.5 cm and hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where it has been since 1865. Much of the original black paint was damaged and repainted during 19th-century restoration. Moroni worked in Bergamo, painting portraits of the local aristocracy and professional classes with remarkable <strong>psychological acuity</strong>. This late work shows his economical brushwork and ability to convey character through pose and expression.</p>`,
    faqs: [
      {
        question: "Where can I see L'Avvocato?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where it has been displayed since 1865. The gallery holds several <a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Moroni</strong></a> works.`
      },
      {
        question: "Why is the painting called L'Avvocato?",
        answer: `The nickname means <strong>"The Lawyer"</strong> in Italian. The sitter's theatrical manner and appraising gaze suggested a legal professional, though his actual identity remains unknown.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>89 x 72.5 cm</strong> (approximately 35 x 29 inches). Some areas were repainted during 19th-century restoration.`
      },
      {
        question: "When was this portrait painted?",
        answer: `Moroni created this work around <strong>1570-1572</strong>, during his late period. The costume and beard style help date it to this period.`
      }
    ]
  },
  {
    slug: 'hugo-van-der-goes-portrait-of-a-man-of-prayer-with-st-john-the-bapti',
    description: `<p><a href="/apps/masterpieces/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a> painted this devotional panel around 1475. A man kneels in prayer while St. John the Baptist stands beside him, presenting him to the viewer or perhaps to a facing panel showing the Virgin and Child. This format was common in Netherlandish devotional art.</p>
<p>The small panel measures just 32 x 22.5 cm, a size suited for private meditation rather than public display. Van der Goes rendered both figures with the precise detail characteristic of <strong>Northern Renaissance</strong> painting: careful attention to textures, subtle gradations of light, and individualized features that give the donor portrait genuine presence.</p>
<p>The oil on panel now belongs to the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore. Van der Goes was one of the leading painters in Bruges during the late 15th century, best known for the Portinari Altarpiece now in Florence. His <strong>devotional panels</strong> show how wealthy patrons commissioned images of themselves at prayer, seeking intercession from saints and assurance of salvation.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `The panel is at the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore, Maryland. It's part of their medieval and Renaissance collection.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on panel measures <strong>32 x 22.5 cm</strong> (approximately 13 x 9 inches). The small size indicates it was made for private devotion.`
      },
      {
        question: "Who is the man praying in the painting?",
        answer: `The man's <strong>identity is unknown</strong>. He was likely a wealthy patron who commissioned this devotional image to show himself in prayer with St. John the Baptist.`
      }
    ]
  },
  {
    slug: 'parmigianino-portrait-of-a-man-with-a-book',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted this brooding portrait in 1524, showing a young man holding a book, his face half in shadow. The sitter wears a black cap and dark clothing that sets off his pale skin and intense gaze. One eye catches the light while the other remains in darkness.</p>
<p>The portrait was once attributed to Correggio, but documents from the Farnese Collection in Rome confirm <strong>Parmigianino's</strong> authorship. James Hall has argued the composition contains spiritual allegory: in Renaissance thought, the right eye was considered the spiritual eye while the left looked upon worldly matters. The sitter's face, divided between light and shadow, may embody this duality.</p>
<p>The oil on canvas measures 52 x 70 cm and hangs at <a href="/apps/masterpieces/museum/york-art-gallery-york-uk"><strong>York Art Gallery</strong></a> in England. The Frick Collection described this as "Parmigianino's magnificent brooding portrait," noting how its introspection "strikes a particularly modern note." The artist, whose nickname means "the little one from Parma," was a leading figure of <strong>Mannerism</strong> known for elongated forms and psychological complexity.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of a Man with a Book?",
        answer: `The painting is at <a href="/apps/masterpieces/museum/york-art-gallery-york-uk"><strong>York Art Gallery</strong></a> in York, England. It was featured in a loan exhibition at the Frick Collection in New York.`
      },
      {
        question: "Who is the man in the portrait?",
        answer: `The sitter's <strong>identity is unknown</strong>. His black cap and refined clothing suggest he was educated and prosperous, perhaps from <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino's</strong></a> circle in Parma.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>52 x 70 cm</strong> (approximately 20 x 28 inches). The intimate scale suits the psychological intensity of the portrait.`
      }
    ]
  },
  {
    slug: 'petrus-christus-portrait-of-a-man-with-a-falcon',
    description: `<p><a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> created this silverpoint drawing around 1447, showing a man holding a falcon. The delicate medium required great skill: unlike pen or brush, silverpoint marks could not be erased or corrected. Every line had to be placed with precision.</p>
<p>Falconry was a nobleman's pursuit in medieval Europe, and the bird identifies the sitter as a man of <strong>high social standing</strong>. Christus captured both the human face and the raptor with the close observation characteristic of Early Netherlandish art. The small format (18.9 x 14.3 cm) suggests this was a finished work rather than a preparatory study.</p>
<p>The drawing belongs to the <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel</strong></a> in Frankfurt. Christus was active in Bruges after Jan van Eyck's death in 1441, continuing the tradition of precise naturalism that made Netherlandish art famous throughout Europe. His surviving drawings are rare, making this portrait particularly valuable for understanding his working methods and the <strong>Northern Renaissance</strong> drawing tradition.</p>`,
    faqs: [
      {
        question: "Where can I see this drawing?",
        answer: `The work is at the <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel</strong></a> in Frankfurt am Main, Germany. It's part of their collection of Old Master drawings.`
      },
      {
        question: "What is silverpoint?",
        answer: `<strong>Silverpoint</strong> is a drawing technique using a silver-tipped stylus on prepared paper. The marks are permanent and cannot be erased, requiring great precision from the artist.`
      },
      {
        question: "What are the dimensions of this drawing?",
        answer: `The silverpoint measures <strong>18.9 x 14.3 cm</strong> (approximately 7.5 x 5.5 inches). The small size is typical of <a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus's</strong></a> portrait drawings.`
      }
    ]
  },
  {
    slug: 'diego-velazquez-portrait-of-a-man-with-a-goatee',
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this portrait during his years as court painter to Philip IV of Spain. A man with a carefully trimmed goatee gazes out with quiet dignity, his dark clothing typical of Spanish fashion during the <strong>Baroque period</strong>.</p>
<p>Velázquez was one of the greatest portraitists in Western art, able to capture personality and social standing with remarkable economy. His technique evolved over his career, moving from the tight finish of his early Seville years to the looser, more atmospheric brushwork of his mature Madrid style. This portrait shows his ability to suggest form through strategic touches of light and shadow.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which holds the world's most comprehensive collection of Velázquez's work. The sitter's identity is unknown, but his costume suggests a man of some means. Spanish <strong>Baroque portraiture</strong> favored austere black clothing that directed attention to the face, and Velázquez exploited this convention brilliantly.</p>`,
    faqs: [
      {
        question: "Where can I see this Velázquez portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which has the world's largest collection of <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Velázquez's</strong></a> works.`
      },
      {
        question: "Who is the man in the portrait?",
        answer: `The sitter's <strong>identity is unknown</strong>. His refined clothing and groomed appearance suggest he was a gentleman of some standing in 17th-century Spanish society.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait exemplifies <strong>Spanish Baroque</strong> portraiture, characterized by dark backgrounds, restrained color, and psychological intensity focused on the sitter's face.`
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-a-man-with-beard',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this portrait in 1879, when he was just seventeen years old. The work shows a bearded man in a straightforward, academic manner quite different from the golden, decorative style Klimt would later become famous for.</p>
<p>This early portrait predates the Vienna Secession movement by nearly two decades. Klimt was still training at the Vienna School of Arts and Crafts, working in the conventional <strong>academic tradition</strong> that dominated European art schools. His early works included portraits, decorative paintings, and murals created with his brother Ernst and colleague Franz Matsch.</p>
<p>The painting remains in a private collection. Klimt's development from this traditional approach to the revolutionary style of The Kiss and his golden portraits represents one of modern art's most dramatic transformations. Looking at this 1879 portrait, there's little hint of the <strong>Symbolist master</strong> who would scandalize Vienna with his erotic allegories and challenge conventional ideas about decorative art.</p>`,
    faqs: [
      {
        question: "When did Klimt paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/gustav-klimt"><strong>Klimt</strong></a> created this work in <strong>1879</strong> when he was seventeen. It's one of his earliest surviving paintings, predating his famous decorative style by decades.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait is in a conventional <strong>academic style</strong>, reflecting Klimt's training at the Vienna School of Arts and Crafts. It lacks the decorative elements of his later work.`
      },
      {
        question: "Where is this painting now?",
        answer: `The portrait is in a <strong>private collection</strong>. It's rarely exhibited, making it less familiar than Klimt's celebrated later works.`
      }
    ]
  },
  {
    slug: 'peter-paul-rubens-portrait-of-a-man-possibly-an-architect-or-geograp',
    description: `<p><a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted this portrait of a man whose profession might be identified by objects now lost or never included. The title suggests he was an architect or geographer, though the basis for this identification is unclear. The man regards us with the confident bearing typical of Rubens's male portraits.</p>
<p>Rubens was the most celebrated painter in <strong>Baroque Europe</strong>, running a large workshop in Antwerp that produced paintings for royalty and the Church across the continent. His portraits combine Flemish precision with Italian grandeur, learned during years studying in Italy. The warmth of flesh tones and the animation of the sitter's expression show his mastery of bringing figures to life on canvas.</p>
<p>The painting belongs to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York. Rubens painted diplomats, scholars, and nobles with equal facility, capturing both their social position and individual character. This portrait demonstrates his ability to suggest intellect and personality through pose, expression, and the careful rendering of <strong>distinctive features</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see this Rubens portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City. The Met has several works by <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Rubens</strong></a>.`
      },
      {
        question: "Why is the title uncertain about the man's profession?",
        answer: `The identification as an <strong>architect or geographer</strong> is speculative. Attributes that might have clarified his profession may have been lost or were never included in the composition.`
      },
      {
        question: "What period is this painting from?",
        answer: `The portrait dates from the <strong>Baroque period</strong>, when Rubens dominated European art from his workshop in Antwerp, producing works for patrons across the continent.`
      }
    ]
  },
  {
    slug: 'palma-vecchio-portrait-of-a-poet',
    description: `<p><a href="/apps/masterpieces/artist/palma-vecchio"><strong>Palma Vecchio</strong></a> painted this portrait around 1516, showing a young man holding a book with laurel leaves behind him. The laurel suggests a poet, since poets were traditionally crowned with laurel wreaths, hence the term "poet laureate." A rosary in the composition indicates spiritual as well as artistic interests.</p>
<p>Some scholars have proposed the sitter might be Lodovico Ariosto, whose epic Orlando Furioso was published in 1516 to instant fame. However, Ariosto would have been 41 or 42 that year, which seems too old for this youthful figure. There's no evidence the Ferrarese writer ever sat for Palma Vecchio, who worked in Venice. The <strong>Venetian style</strong> shows in the warm tones and soft modeling, influenced by Giorgione and the young Titian.</p>
<p>The oil on canvas measures 84 x 64 cm and hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. The painting was transferred from wood in 1857 and has suffered some damage, with rubbing to the surface and areas of repaint. Despite condition issues, it remains one of Palma Vecchio's earliest successful portraits.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of a Poet?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. It was acquired in 1860 and has been in the collection since.`
      },
      {
        question: "Is this a portrait of Ariosto?",
        answer: `Probably not. While Orlando Furioso was published in 1516 when <a href="/apps/masterpieces/artist/palma-vecchio"><strong>Palma Vecchio</strong></a> painted this, <strong>Ariosto was 41-42</strong> then, too old for this youthful sitter.`
      },
      {
        question: "What do the laurel leaves mean?",
        answer: `<strong>Laurel wreaths</strong> traditionally crowned poets, giving us the term "poet laureate." The leaves identify the sitter as a poet or literary figure.`
      }
    ]
  },
  {
    slug: 'rembrandt-portrait-of-a-seated-man-rising-from-his-chair',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted this dynamic portrait in 1633, capturing a man in the act of rising from his chair. The unusual pose gives the composition an immediacy rare in formal portraiture, suggesting we've interrupted the sitter as he moves to greet us or attend to business.</p>
<p>This <strong>transitional moment</strong> shows Rembrandt's interest in capturing life rather than mere likeness. Most portrait painters showed their subjects in static, dignified poses. Here the man's body turns and his weight shifts, creating a sense of movement that animates the entire composition. The large canvas (98.4 x 121.6 cm) gives the figure impressive presence.</p>
<p>The painting belongs to the <a href="/apps/masterpieces/museum/royal-collection-uk"><strong>Royal Collection</strong></a> in the United Kingdom. Rembrandt was 27 when he created this work, already established as Amsterdam's leading portraitist. His willingness to experiment with convention, showing subjects in <strong>active poses</strong> rather than frozen formality, helped define a new approach to portraiture in the Dutch Golden Age.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt portrait?",
        answer: `The painting is part of the <a href="/apps/masterpieces/museum/royal-collection-uk"><strong>Royal Collection</strong></a> in the United Kingdom, one of the world's largest private art collections.`
      },
      {
        question: "What makes this portrait unusual?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> showed the man <strong>rising from his chair</strong>, capturing a moment of movement rare in formal portraiture. The pose suggests immediacy and life.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>98.4 x 121.6 cm</strong> (approximately 39 x 48 inches). The substantial size gives the active figure impressive physical presence.`
      }
    ]
  },
  {
    slug: 'lorenzo-lotto-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> painted this intimate portrait around 1506, showing a woman whose identity remains unknown. The small panel (36 x 28 cm) suggests it was meant for private display, perhaps in a domestic setting where it could be viewed up close.</p>
<p>This portrait is notable for having a <strong>protective cover painting</strong>, now at the National Gallery of Art in Washington, D.C. Renaissance portraits were sometimes designed as hinged objects with allegorical covers that protected and complemented the sitter's image. The Metropolitan Museum featured both works in their 2024 exhibition "Hidden Faces: Covered Portraits of the Renaissance."</p>
<p>The portrait hangs at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-dijon-dijon-france"><strong>Musée des Beaux-Arts de Dijon</strong></a> in France, having entered the collection through the Trimolet bequest in 1878. Lotto worked in Venice and various northern Italian cities, developing a style that combined Venetian color with psychological intensity. The Dijon museum describes this as a "beautiful portrait" that concludes their <strong>Renaissance journey</strong> through Italian painting.</p>`,
    faqs: [
      {
        question: "Where can I see this Lorenzo Lotto portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-dijon-dijon-france"><strong>Musée des Beaux-Arts de Dijon</strong></a> in France, part of the Trimolet bequest from 1878.`
      },
      {
        question: "What is special about this portrait?",
        answer: `The portrait has a <strong>companion cover painting</strong> now in Washington, D.C. Renaissance portraits were sometimes designed with hinged covers showing allegorical scenes.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on wood measures <strong>36 x 28 cm</strong> (approximately 14 x 11 inches). The intimate scale suited private devotional or domestic display.`
      }
    ]
  },
  {
    slug: 'jean-leon-gerome-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/jean-leon-gerome"><strong>Jean-Léon Gérôme</strong></a> painted this portrait in 1851, early in his career when he was becoming one of France's most acclaimed academic painters. The work shows a woman rendered with the polished technique and careful finish that characterized academic art at its height.</p>
<p>Gérôme trained under Paul Delaroche and Charles Gleyre, mastering the <strong>academic tradition</strong> that emphasized technical skill, idealized forms, and historical or literary subjects. By 1880 he would be arguably the world's most famous living artist, his paintings reproduced so widely that they shaped popular understanding of antiquity and the Orient.</p>
<p>The oil on canvas measures 92.6 x 73.7 cm and has been exhibited at the J. Paul Getty Museum, the Musée d'Orsay, and the Museo Thyssen-Bornemisza. Gérôme taught at the École des Beaux-Arts for forty years, mentoring over two thousand students. His portrait work, though less famous than his <strong>Orientalist scenes</strong>, demonstrates the same command of form and finish that made him the leading academic painter of his generation.</p>`,
    faqs: [
      {
        question: "When did Gérôme paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/jean-leon-gerome"><strong>Gérôme</strong></a> created this work in <strong>1851</strong>, early in his career. He would become arguably the world's most famous artist by 1880.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait exemplifies <strong>French Academic painting</strong>, characterized by technical polish, idealized forms, and careful finish. Gérôme trained under Paul Delaroche and Charles Gleyre.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>92.6 x 73.7 cm</strong> (approximately 36.5 x 29 inches). It has been exhibited at major museums including the Getty and the Musée d'Orsay.`
      }
    ]
  },
  {
    slug: 'robert-campin-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/robert-campin"><strong>Robert Campin</strong></a> painted this portrait around 1435, showing a woman in the crisp white headdress fashionable among prosperous Flemish townswomen. The panel forms a pair with a portrait of a man, the couple's costume suggesting they were well-to-do residents of Tournai where Campin lived and worked.</p>
<p>The woman appears younger than her husband in the companion piece, her expression more forceful and optimistic. Campin placed her near eye at the panel's center, giving her a commanding presence. Her <strong>smooth skin</strong> and bright, wide-open eyes curve upward at the corners, a movement amplified by the crisp folds of her headdress.</p>
<p>The oil with egg tempera on oak measures 40.7 x 28.1 cm and hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, acquired in 1860. Campin, also known as the Master of Flémalle, is considered one of the founders of <strong>Early Netherlandish painting</strong> alongside Jan van Eyck. His ability to render textures of skin, fur, and fabric with astonishing clarity influenced generations of Northern artists, including his pupil Rogier van der Weyden.</p>`,
    faqs: [
      {
        question: "Where can I see this Robert Campin portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, acquired in 1860. A companion portrait of her husband hangs nearby.`
      },
      {
        question: "Does this portrait have a companion piece?",
        answer: `Yes, it pairs with a <strong>portrait of a man</strong>, presumably her husband. The two were clearly designed together, with matching formats and complementary compositions.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil with egg tempera on oak measures <strong>40.7 x 28.1 cm</strong> (approximately 16 x 11 inches). The intimate scale suited domestic display.`
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> created numerous portraits of unidentified women, all sharing his distinctive style of elongated faces, almond-shaped eyes, and slender necks. This approach drew on medieval icons, African sculpture, and the artist's own vision of idealized form.</p>
<p>Modigliani's portraits documented the artists, writers, and models who populated bohemian Paris during the early 20th century. The <strong>elongated features</strong> that became his signature weren't merely stylistic: they expressed a melancholy sensuality that resonated with his circle. Many of his women, whether named or anonymous, share this quality of wistful beauty.</p>
<p>This particular portrait remains in a private collection. Modigliani's short life (1884-1920) and romantic legend, combined with his instantly recognizable style, have made his works highly sought after. Nu Couché sold for <strong>$170.4 million</strong> in 2018, among the highest prices ever paid for a painting at auction. His portraits of women, whether famous models or unidentified sitters, remain the core of his achievement.</p>`,
    faqs: [
      {
        question: "What is distinctive about Modigliani's portrait style?",
        answer: `<a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani</strong></a> used <strong>elongated faces and necks</strong>, almond eyes, and simplified forms influenced by African art and medieval icons. His style is instantly recognizable.`
      },
      {
        question: "Where is this painting now?",
        answer: `This portrait is in a <strong>private collection</strong>. Modigliani's works are highly valuable, with some selling for over $170 million at auction.`
      },
      {
        question: "When did Modigliani live?",
        answer: `Modigliani lived from <strong>1884 to 1920</strong>, dying at just 35. His short, troubled life and distinctive style made him a legendary figure of the Paris avant-garde.`
      }
    ]
  },
  {
    slug: 'mary-cassatt-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> was one of the few American artists to exhibit with the French Impressionists, and her portraits of women captured both their social roles and inner lives. This portrait shows a woman with the fluid brushwork and attention to light that characterized Cassatt's mature style.</p>
<p>Cassatt focused throughout her career on <strong>women's experiences</strong>: mothers with children, women reading or at tea, figures in theaters and gardens. Unlike her male colleagues who often depicted women as objects of desire, she presented them as individuals with their own thoughts and agency. Edgar Degas, who became her close friend and collaborator, recognized her as one of the movement's most talented painters.</p>
<p>This portrait is held in a private collection. Cassatt exhibited with the Impressionists from 1879 to 1886, and was described alongside Marie Bracquemond and Berthe Morisot as one of the <strong>"three great ladies"</strong> of the movement. Born in Pittsburgh but based in Paris for most of her adult life, she helped introduce Impressionism to American collectors and shaped the collections of major museums.</p>`,
    faqs: [
      {
        question: "What subjects did Mary Cassatt typically paint?",
        answer: `<a href="/apps/masterpieces/artist/mary-cassatt"><strong>Cassatt</strong></a> focused on <strong>women's lives</strong>: mothers with children, women reading, at the theater, or in gardens. She offered a distinctly female perspective within Impressionism.`
      },
      {
        question: "Was Cassatt part of the Impressionist movement?",
        answer: `Yes, she was one of few Americans to exhibit with the <strong>French Impressionists</strong>, participating in their shows from 1879 to 1886. Degas invited her to join the group.`
      },
      {
        question: "Where is this painting now?",
        answer: `This portrait is in a <strong>private collection</strong>. Cassatt's works are held by major museums including the Metropolitan Museum, National Gallery, and Philadelphia Museum of Art.`
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-portrait-of-a-woman-possibly-of-the-lloyd-family',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this portrait around 1750, shortly after returning to his native Suffolk from London. The sitter has traditionally been identified as a member of the Lloyd family of Ipswich, though this remains uncertain. She sits outdoors in an informal pose rare for Gainsborough's early female portraits.</p>
<p>The feathery brushwork and cool tonality of the background reflect French influence from Gainsborough's training with Hubert Gravelot. The carefully rendered burdock plant in the foreground came from Dutch landscapes he admired, as well as from direct sketching in nature. This combination of influences gives the portrait its distinctive <strong>Rococo charm</strong>.</p>
<p>The oil on canvas measures 69.6 x 53 cm and hangs at the <a href="/apps/masterpieces/museum/kimbell-art-museum"><strong>Kimbell Art Museum</strong></a> in Fort Worth, acquired by Kay Kimbell in 1946. Preparatory drawings survive, showing Gainsborough working out the relationship between figure and setting. The painting has recently been reframed in a period British Rococo frame, enhancing its <strong>elegant intimacy</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see this Gainsborough portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/kimbell-art-museum"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas. It was acquired by Kay Kimbell in 1946 and bequeathed to the museum.`
      },
      {
        question: "Who is the woman in the portrait?",
        answer: `She has traditionally been identified as a member of the <strong>Lloyd family of Ipswich</strong>, but this attribution is uncertain. Preparatory drawings survive showing her features.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>69.6 x 53 cm</strong> (approximately 27 x 21 inches). The intimate scale suits the informal outdoor setting.`
      }
    ]
  },
  {
    slug: 'berthe-morisot-portrait-of-a-woman-in-a-pink-dress',
    description: `<p><a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> painted this portrait around 1870, showing a woman in a flowing pink dress rendered with the loose, expressive brushwork characteristic of Impressionism. The soft colors and atmospheric handling give the figure an almost ethereal quality.</p>
<p>Morisot was a founding member of the Impressionist movement and one of its most prominent female painters. She exhibited in nearly all of the group's exhibitions and was closely connected to Édouard Manet (she married his brother Eugène). Her portraits and domestic scenes captured <strong>feminine subjects</strong> with psychological sensitivity and technical boldness.</p>
<p>This painting is held in a private collection. Morisot worked primarily on intimate subjects: women reading, children playing, gardens and interiors. The <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink tones</strong></a> of the dress demonstrate her skill at depicting the effects of light on fabric and flesh. She was considered alongside Mary Cassatt and Marie Bracquemond as one of the "three great ladies" of <strong>Impressionism</strong>.</p>`,
    faqs: [
      {
        question: "Who painted Portrait of a Woman in a Pink Dress?",
        answer: `<a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> created this work around <strong>1870</strong>. She was a founding member of the Impressionist movement and exhibited in nearly all their shows.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait exemplifies <strong>Impressionism</strong>, with its loose brushwork, attention to light effects, and atmospheric quality. Morisot was one of the movement's leading figures.`
      },
      {
        question: "Where is this painting now?",
        answer: `The painting is in a <strong>private collection</strong>. Morisot's works are held by major museums including the Musée d'Orsay and the National Gallery of Art.`
      }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 20 artworks...\n');

  for (const artwork of artworks) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nBatch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
