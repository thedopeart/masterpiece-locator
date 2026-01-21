const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'la-bella-palma-vecchio',
    description: `<p><a href="/apps/masterpieces/artist/palma-vecchio"><strong>Palma Vecchio</strong></a> painted this half-length portrait around 1518-1520, showing a young woman in a red and blue dress holding a small jewel box. The sitter raises one hand to her hair while gazing directly at the viewer. For years it was attributed to Titian and known as "La Bella di Tiziano." The mysterious initials carved on a stone at lower left remain undeciphered.</p>

<p>The painting once hung in Rome's Sciarra-Colonna Palace before passing through the Rothschild family's collection. Baron Hans Heinrich Thyssen-Bornemisza acquired it in 1958. Elements like the <strong>jewel container</strong> and the relief of a rider trampling a naked figure suggest themes of vanity. Now at the <a href="/apps/masterpieces/museum/thyssen-bornemisza-museum"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where can I see La Bella by Palma Vecchio?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/thyssen-bornemisza-museum\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, Spain. Baron Thyssen-Bornemisza acquired it in 1958 from the Rothschild family, and it remains one of the museum's finest Renaissance portraits." },
      { question: "Who painted La Bella?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a>, a Venetian painter of the High Renaissance, created this work around 1518-1520. It was long attributed to Titian and called \"La Bella di Tiziano\" until scholars reassigned it." },
      { question: "What does La Bella symbolize?", answer: "The <strong>jewel box</strong> and the woman touching her hair suggest vanity. A relief in the upper corner shows a rider trampling a figure, possibly an allegory. The undeciphered initials on the stone may reveal the sitter's identity." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Venetian Renaissance</strong></a> portraiture. Palma specialized in idealized half-length female portraits, often depicting beauties rumored to be Venice's famous courtesans." }
    ]
  },
  {
    slug: 'paul-gauguin-working-the-land',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this landscape in 1873 while still working as a stockbroker in Paris. Brilliant blue skies contrast with bright greens and yellows across the fields. A figure works the land in the distance. This is considered his <strong>first major surviving canvas</strong>, created before he decided to become a full-time artist.</p>

<p>The tonality and composition recall Corot, while the deep perspective following field lines shows <strong>Pissarro's influence</strong>. Gauguin's godfather had commissioned Pissarro to paint seasonal landscapes the previous year, which clearly inspired this work. The elongated canvas format was unusual for the time. Now housed at the <a href="/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid"><strong>Fitzwilliam Museum</strong></a> in Cambridge.</p>`,
    faqs: [
      { question: "When did Gauguin paint Working the Land?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted this landscape in 1873, years before he quit his stockbroker job. It's his earliest known major work. He didn't exhibit publicly until 1876 or join the Impressionists until 1879." },
      { question: "Where is Working the Land displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> at the University of Cambridge in England. The museum holds significant French Impressionist and Post-Impressionist works." },
      { question: "What influenced this painting?", answer: "The work shows clear influence from <strong>Camille Pissarro</strong>, whose seasonal landscapes Gauguin's godfather Gustave Arosa had recently commissioned. The color palette and perspective lines mirror Pissarro's approach." },
      { question: "How big is the painting?", answer: "The canvas measures 50.5 x 81.6 cm (19.9 x 32.1 inches). The <strong>elongated horizontal format</strong> was unconventional for landscapes at the time, suggesting Gauguin was already experimenting with composition." }
    ]
  },
  {
    slug: 'rembrandt-portrait-of-a-couple-in-an-interior',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> captured this intimate scene of a couple within a domestic setting. The painting shows two figures in conversation or quiet contemplation, demonstrating Rembrandt's ability to convey psychological depth through pose and expression. Rich, warm tones dominate the <strong>shadowy interior</strong>.</p>

<p>Rembrandt's handling of light draws attention to the figures' faces and hands while allowing the surrounding space to recede into darkness. This chiaroscuro technique became his signature approach to portraiture. The painting now resides at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, which holds one of the world's finest collections of Rembrandt's work.</p>`,
    faqs: [
      { question: "Who painted Portrait of a Couple in an Interior?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this work during his productive years in Amsterdam. He was the leading Dutch portrait painter of the Golden Age, known for capturing psychological complexity in his subjects." },
      { question: "Where is this Rembrandt painting located?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The Hermitage owns over twenty Rembrandt paintings, one of the largest collections outside the Netherlands." },
      { question: "What technique did Rembrandt use?", answer: "Rembrandt employed <strong>chiaroscuro</strong>, his signature contrast of light and shadow. Light falls on the figures' faces and hands while darkness envelops the room, creating depth and focusing attention on human expression." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/baroque\"><strong>Dutch Baroque</strong></a> portraiture. Rembrandt moved away from formal poses toward intimate scenes showing genuine human connection and emotion." }
    ]
  },
  {
    slug: 'vanitas-still-life-claesz',
    description: `<p><a href="/apps/masterpieces/artist/pieter-claesz"><strong>Pieter Claesz</strong></a> arranged these objects as reminders of mortality in 1630. A skull sits beside an overturned glass, a snuffed oil lamp, a pocket watch with glossy ribbon, and an anemone flower clinging to the table's edge. Roman poet Ovid called the anemone a "windflower" for its <strong>brief grip on life</strong>.</p>

<p>Claesz was a master of the monochromatic palette, using mainly brown and green with just a dash of blue for the watch ribbon. This restraint made textures shine: the glittering timepiece, brittle pages, fractured skull. Every object follows established <strong>vanitas symbolism</strong>, pointing to time's passage. Now at the <a href="/apps/masterpieces/museum/mauritshuis"><strong>Mauritshuis</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "What does vanitas mean?", answer: "<strong>Vanitas</strong> paintings remind viewers of life's brevity and the emptiness of earthly pursuits. Every object symbolizes mortality: the skull represents death, the snuffed candle suggests extinguished life, and the watch marks passing time." },
      { question: "Where can I see this Claesz painting?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands. The museum acquired it in 1960 with help from the Rembrandt Society and holds major Dutch Golden Age works." },
      { question: "Who was Pieter Claesz?", answer: "<a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a> was a Dutch Golden Age painter born in Belgium around 1597. He moved to Haarlem in 1620 and became famous for still lifes with muted, nearly monochromatic color schemes." },
      { question: "What flower appears in the painting?", answer: "An <strong>anemone</strong> sits at the table's edge. The Roman poet Ovid named it the \"windflower\" because it clings to life so briefly. In vanitas art, flowers represent the fleeting nature of beauty and youth." }
    ]
  },
  {
    slug: 'portrait-francis-i-clouet',
    description: `<p><a href="/apps/masterpieces/artist/francois-clouet"><strong>François Clouet</strong></a> (or his father Jean) created this iconic image of the French king around 1530. Francis I appears as a bust, almost frontal, with a three-quarters face. He wears rich attire befitting royalty but no crown or scepter. One striking innovation: <strong>the king looks directly at the viewer</strong>.</p>

<p>The portrait was painted on a small oak panel using oil and tempera. Attribution has bounced between father and son for decades, with the gouache version now generally assigned to Jean Clouet. The image became the definitive likeness of Francis I, influencing all later depictions. Now at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted the Portrait of Francis I?", answer: "Attribution debates continue between <a href=\"/apps/masterpieces/artist/francois-clouet\"><strong>François Clouet</strong></a> and his father Jean Clouet. Jean served as court painter from 1516. The work dates to around 1530 and became the definitive image of the French king." },
      { question: "Where is this portrait displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. The Louvre also holds related works including an equestrian miniature portrait of Francis I from around 1540." },
      { question: "What makes this portrait innovative?", answer: "Francis I <strong>looks directly at the viewer</strong>, unusual for royal portraits of this period. He appears without crown or scepter, shown simply as a bust. This intimate approach influenced later royal portraiture." },
      { question: "How big is the painting?", answer: "The panel measures 96 x 74 cm (37.75 x 29 inches). It was painted on oak using oil and tempera, typical materials for <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel paintings at the French court." }
    ]
  },
  {
    slug: 'paula-modersohn-becker-sand-pit-at-weyersberg',
    description: `<p><a href="/apps/masterpieces/artist/paula-modersohn-becker"><strong>Paula Modersohn-Becker</strong></a> painted this austere landscape in 1899 during her time in the Worpswede artists' colony. The scene shows a <strong>sand quarry</strong> near the village, rendered with muted tones and simplified forms. North Germany's stark terrain replaces the picturesque subjects favored by academic painters.</p>

<p>Sand pits held dark personal significance for Modersohn-Becker. At age ten, she witnessed a cousin's death when the child fell into a pit and suffocated during play. The rough brushwork and unidealized view challenge polished academic conventions. Now at the <a href="/apps/masterpieces/museum/neue-pinakothek-munich-germany"><strong>Neue Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Who painted Sand Pit at Weyersberg?", answer: "<a href=\"/apps/masterpieces/artist/paula-modersohn-becker\"><strong>Paula Modersohn-Becker</strong></a> created this work in 1899. She was a German Expressionist who produced over 700 paintings before her death at age 31 in 1907." },
      { question: "Where is this painting located?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/neue-pinakothek-munich-germany\"><strong>Neue Pinakothek</strong></a> in Munich, Germany. The museum focuses on European art from the 18th and 19th centuries, including German Expressionism." },
      { question: "What is Worpswede?", answer: "<strong>Worpswede</strong> was an artists' colony in rural northern Germany where Modersohn-Becker worked. Artists there sought alternatives to academic art, painting the local farmers and landscapes in naturalistic styles." },
      { question: "What style is this painting?", answer: "The work shows early <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> tendencies with rough brushwork and muted tones. Modersohn-Becker simplified forms and rejected the polished techniques of academic painting." }
    ]
  },
  {
    slug: 'pornokrates',
    description: `<p><a href="/apps/masterpieces/artist/felicien-rops"><strong>Félicien Rops</strong></a> created this provocative image in 1878 using watercolor and pastel on paper. A blindfolded woman in black stockings, gloves, and plumed hat walks a pig on a leash across a marble stage. Below her, grey classical figures representing <strong>sculpture, music, literature, and painting</strong> look on in despair.</p>

<p>Three winged putti flee in tears above the scene. The title translates as "the ruler of fornication," drawn from an 1875 anti-feminist tract by Proudhon. Rops envisioned the modern woman as a <strong>femme fatale</strong> whose sensuality triumphs over the fine arts. The work caused scandal at an 1886 exhibition. Now at the <a href="/apps/masterpieces/museum/musee-felicien-rops"><strong>Musée Félicien Rops</strong></a> in Namur, Belgium.</p>`,
    faqs: [
      { question: "What does Pornokrates mean?", answer: "The title translates as \"<strong>ruler of fornication</strong>.\" Rops borrowed it from Pierre-Joseph Proudhon's 1875 anti-feminist tract. The painting symbolizes sensuality's triumph over classical art and traditional values." },
      { question: "Where can I see Pornokrates?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/musee-felicien-rops\"><strong>Musée Félicien Rops</strong></a> in Namur, Belgium, dedicated to the artist. It's his most famous piece and a key work of Symbolist art." },
      { question: "Who created Pornokrates?", answer: "<a href=\"/apps/masterpieces/artist/felicien-rops\"><strong>Félicien Rops</strong></a> made this work in 1878 when he was 45 and living in Paris. He belonged to the Cercle des XX and contributed to the Belgian Symbolist movement." },
      { question: "What style is this painting?", answer: "Pornokrates exemplifies <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, using allegory to express psychological conflicts. The blindfolded <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female figure</strong></a> led by a pig represents base desires dominating over reason." }
    ]
  },
  {
    slug: 'perugino-the-miracles-of-san-bernardino-miracle-baby-born-w',
    description: `<p><a href="/apps/masterpieces/artist/perugino"><strong>Perugino</strong></a> contributed to this 1473 panel depicting a miracle of Saint Bernardino of Siena. The saint, canonized just 23 years earlier in 1450, was credited with various miraculous healings. This scene shows the resurrection of a <strong>stillborn child</strong> through Bernardino's intercession.</p>

<p>Franciscan friars in Perugia commissioned eight miracle panels to hang above a niche holding the saint's statue. At least five different hands contributed, including Perugino and Pinturicchio. The <strong>Umbrian School</strong> style appears in soft forms and harmonious colors. Now at the <a href="/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru"><strong>National Gallery of Umbria</strong></a> in Perugia.</p>`,
    faqs: [
      { question: "Who painted this Miracle of San Bernardino?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> was among several artists who created the eight-panel series in 1473. Pinturicchio also contributed. At least five different painters worked on the commission for Perugia's Franciscan friars." },
      { question: "Where is this painting displayed?", answer: "The panel hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia, Italy. All eight miracle panels from the original 1473 series are preserved there." },
      { question: "Who was San Bernardino?", answer: "<strong>Bernardino of Siena</strong> (1380-1444) was a Franciscan friar canonized in 1450. He was known for preaching and credited with miraculous healings. Perugia's oratory was dedicated to him." },
      { question: "What style is this painting?", answer: "The work represents the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Early Renaissance</strong></a> Umbrian School, known for soft, lyrical forms and harmonious color. Piero della Francesca's influence appears throughout the series." }
    ]
  },
  {
    slug: 'madame-pompadour-la-tour',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> spent three years on this monumental pastel portrait, completed in 1755. Madame de Pompadour, Louis XV's influential mistress, appears full-length in a <strong>sumptuous French gown</strong> adorned with lace and bows. Books surround her, including banned works by Voltaire and the Encyclopédie.</p>

<p>Only her face was drawn from life, on a separate sheet later joined to seven others. The pastel demonstrates La Tour's mastery of texture: pearls, fabrics, paper. Pompadour positioned herself as patron of the <strong>Enlightenment philosophers</strong>, choosing these controversial books deliberately. Now at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted the Portrait of Madame de Pompadour?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>Maurice Quentin de La Tour</strong></a>, the great French Rococo pastellist, created this work between 1752 and 1755. He painted Voltaire, Rousseau, and Louis XV, but this is his most ambitious portrait." },
      { question: "Where can I see this portrait?", answer: "The pastel hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris in the Department of Graphic Arts. At 175 x 128 cm, it's one of the largest pastels ever made." },
      { question: "What books appear in the painting?", answer: "The books include <strong>Voltaire's Henriade</strong>, Montesquieu's Spirit of Laws, and volume IV of Diderot's Encyclopédie, which had been banned in 1752. Pompadour presented herself as an ally of Enlightenment philosophers." },
      { question: "Who was Madame de Pompadour?", answer: "<strong>Jeanne-Antoinette Poisson</strong> (1721-1764), the Marquise de Pompadour, was Louis XV's influential mistress. She patronized the arts and Enlightenment thinkers, wielding considerable political influence at the French court." }
    ]
  },
  {
    slug: 'pandemonium-martin',
    description: `<p><a href="/apps/masterpieces/artist/john-martin"><strong>John Martin</strong></a> painted this vision of Hell's capital city in 1841, inspired by Milton's Paradise Lost. Towering temple-like structures with Babylonian and classical elements stretch along a waterfront, wreathed in <strong>flames and smoke</strong>. Fallen angels gather in this infernal parliament.</p>

<p>Martin used sweeping diagonal perspective to convey the city's immense scale. He even designed the frame himself, decorating it with serpents and dragons. A companion piece, "The Celestial City," was exhibited alongside it at the <strong>Royal Academy</strong>. Martin had previously made two engravings of this scene in 1824 and 1831. Now at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a> in Paris.</p>`,
    faqs: [
      { question: "What is Pandemonium based on?", answer: "Martin illustrated <strong>Paradise Lost</strong> by John Milton. Pandemonium is Hell's capital where Satan and the fallen angels convene. Milton invented the word, combining Greek roots meaning \"all demons.\"" },
      { question: "Where can I see Pandemonium?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. Martin exhibited it at the Royal Academy in 1841 alongside a companion piece, \"The Celestial City.\"" },
      { question: "Who was John Martin?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>John Martin</strong></a> (1789-1854) was a British Romantic painter famous for dramatic, apocalyptic scenes from the Bible and literature. He specialized in sublime <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>visions</strong></a> of destruction and chaos." },
      { question: "How big is Pandemonium?", answer: "The oil on canvas measures 123.8 x 184.2 cm (48.7 x 72.5 inches). Martin designed the elaborate frame himself, decorated with <strong>serpents and dragons</strong> fitting the hellish theme." }
    ]
  },
  {
    slug: 'the-poor-poet',
    description: `<p><a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> depicted this starving writer in his cramped garret room in 1839. The poet lies on a mattress against the wall, wearing a dressing gown and sleeping cap, holding manuscript pages on his knees. An umbrella hangs from the rafters to catch <strong>water dripping through the roof</strong>.</p>

<p>The painting likely references Munich poet Mathias Etenhueber, who struggled with fading fame and poverty. Critics at the 1839 Munich Kunstverein exhibition attacked its ironic portrayal. A survey later found it one of Germans' <strong>favorite paintings</strong>, second only to the Mona Lisa. One version was stolen from Berlin in 1989 and never recovered. Now at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Who painted The Poor Poet?", answer: "<a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Carl Spitzweg</strong></a> created this work in 1839. Trained as a pharmacist, he became the most representative German <strong>Biedermeier</strong> painter, known for gently satirical scenes of bourgeois life." },
      { question: "Where is The Poor Poet displayed?", answer: "The best-known version hangs at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich. Spitzweg made three copies. One was stolen from Berlin's National Gallery in 1989 and remains missing." },
      { question: "What is the painting about?", answer: "The scene shows a <strong>poet in poverty</strong>, lying on a mattress with his manuscript while an umbrella catches leaks from the roof. It likely depicts Munich poet Mathias Etenhueber, who struggled financially despite his talent." },
      { question: "How big is the painting?", answer: "The canvas measures just 36 x 45 cm (14.2 x 17.7 inches), an intimate scale typical of <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Biedermeier</strong></a> genre scenes. Spitzweg specialized in small paintings of everyday German life." }
    ]
  },
  {
    slug: 'adolph-menzel-studies-of-costumes',
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> recorded these costume studies with the precision that made him Germany's most respected 19th-century realist. A keen observer, he created thousands of drawings documenting his surroundings. These studies capture <strong>clothing details and textures</strong> with almost photographic accuracy.</p>

<p>Menzel often worked with local models during his travels, valuing not just costume accuracy but capturing personality and gesture specific to time and place. His background as an engraver in his father's lithography workshop made him an exceptional draftsman. Now at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "Who created Studies of Costumes?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> (1815-1905) made these drawings. He was Germany's leading 19th-century realist, knighted in 1898. He produced thousands of sketches documenting daily life with exceptional precision." },
      { question: "Where is this work located?", answer: "The studies are held at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The Hermitage owns an extensive collection of European drawings and prints." },
      { question: "What was Menzel known for?", answer: "Menzel excelled at <strong>detailed observation</strong>. His plein air studies of portraits, architecture, and costumes were admired for their truth to nature. He also created major historical paintings of Prussian subjects." },
      { question: "Why did Menzel study costumes?", answer: "Menzel valued capturing genuine <strong>character and gesture</strong> from real people. When traveling, he employed local models to document regional dress accurately, building reference material for his detailed historical paintings." }
    ]
  },
  {
    slug: 'piero-della-francesca-st-sigismund-and-sigismondo-pandolfo-malatesta',
    description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this devotional fresco in 1451 for Sigismondo Malatesta, Lord of Rimini. The young ruler kneels in profile before his <strong>patron saint Sigismund</strong>, who bears a resemblance to the recently deceased Holy Roman Emperor of that name.</p>

<p>The fresco adorns a wall in the Tempio Malatestiano, the Malatesta family church that architect Leon Battista Alberti was transforming into an Early Renaissance monument. Piero likely met Alberti during their overlapping work in Rimini. The geometric clarity and stillness show <strong>Piero's mathematical approach</strong> to composition. Still in its original location at the <a href="/apps/masterpieces/museum/tempio-malatestiano-rimini-italy"><strong>Tempio Malatestiano</strong></a> in Rimini.</p>`,
    faqs: [
      { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> executed this work in 1451. He was one of the most important Early Renaissance painters, known for his mathematical approach to perspective and serene compositions." },
      { question: "Where can I see this fresco?", answer: "The fresco remains in its original location at the <a href=\"/apps/masterpieces/museum/tempio-malatestiano-rimini-italy\"><strong>Tempio Malatestiano</strong></a> in Rimini, Italy. Leon Battista Alberti transformed this church for the Malatesta family during the 1450s." },
      { question: "Who was Sigismondo Malatesta?", answer: "<strong>Sigismondo Pandolfo Malatesta</strong> (1417-1468) ruled Rimini as a condottiero. He commissioned this fresco showing himself kneeling before his patron saint. A related portrait now hangs at the Louvre." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Early Renaissance</strong></a> art with its geometric clarity and calm poses. Piero's mathematical precision creates ordered space and timeless stillness." }
    ]
  },
  {
    slug: 'gust-of-wind-spilliaert',
    description: `<p><a href="/apps/masterpieces/artist/leon-spilliaert"><strong>Léon Spilliaert</strong></a> captured a woman buffeted by coastal winds in this 1904 watercolor. She leans against rails, her black dress and hair whipping in the gust, her white petticoat revealed. Her face appears as a <strong>grimace or dark void</strong>, drawing comparisons to Munch's Scream.</p>

<p>The Belgian artist was known for haunting, introspective works exploring solitude and anxiety. This isolated figure stands against an empty landscape with beach and sea behind. Spilliaert's stark contrasts and muted palette reflect his hometown Ostend's moody coastal atmosphere. Now at <a href="/apps/masterpieces/museum/musee-ostende"><strong>Mu.ZEE</strong></a> in Ostend, Belgium.</p>`,
    faqs: [
      { question: "Who painted The Gust of Wind?", answer: "<a href=\"/apps/masterpieces/artist/leon-spilliaert\"><strong>Léon Spilliaert</strong></a> (1881-1946) created this work in 1904. The Belgian artist contributed to Symbolism and was influenced by Munch, Khnopff, and writers like Edgar Allan Poe and Nietzsche." },
      { question: "Where is The Gust of Wind displayed?", answer: "The painting hangs at <a href=\"/apps/masterpieces/museum/musee-ostende\"><strong>Mu.ZEE</strong></a> in Ostend, Belgium, the artist's hometown. The museum holds an important collection of Belgian modernist art." },
      { question: "What medium is The Gust of Wind?", answer: "Spilliaert used <strong>Indian ink wash, watercolor, and gouache on paper</strong>. The work measures 51 x 41 cm. His technique creates stark contrasts and a dreamlike, unsettling atmosphere." },
      { question: "What movement is this painting?", answer: "The work represents <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> blended with early Expressionism. Spilliaert explored themes of isolation and existential dread through figures in desolate <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> settings." }
    ]
  },
  {
    slug: 'pierre-bonnard-poster-advertising-france-champagne',
    description: `<p><a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> designed this champagne advertisement in 1889, published in 1891 when he was just 23. A young woman in flowing dress with cascading curls toasts the viewer with an overflowing glass. The <strong>bright yellow background</strong> and bold graphics differ dramatically from the soft paintings of his maturity.</p>

<p>The three-color lithograph advertises E. Debray's champagne from Reims. When it appeared on Paris streets, it launched Bonnard's career and introduced him to color lithography. His Japanese-influenced style earned him the nickname <strong>"le Nabi japonard."</strong> Copies exist at the <a href="/apps/masterpieces/museum/biblioth232que-nationale-de-france-bnf-paris-franc"><strong>Bibliothèque nationale de France</strong></a>, MoMA, and other museums.</p>`,
    faqs: [
      { question: "Who designed the France-Champagne poster?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> created this lithograph in 1889 at age 23, before he was a professional artist. Its success on Paris streets launched his career and introduced him to color lithography." },
      { question: "What style is this poster?", answer: "The work shows <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> and Japonism influences. Bonnard's flat areas of color and curving outlines earned him the nickname \"le Nabi japonard\" among his artist friends." },
      { question: "Where can I see this poster?", answer: "Copies exist in major collections including MoMA, the <a href=\"/apps/masterpieces/museum/biblioth232que-nationale-de-france-bnf-paris-franc\"><strong>Bibliothèque nationale de France</strong></a>, the Art Institute of Chicago, and the Van Gogh Museum." },
      { question: "What does the poster advertise?", answer: "The poster promotes <strong>E. Debray's France-Champagne</strong> from Reims. The cheerful woman toasts with an overflowing glass, its bubbles cascading down. The bold design attracted attention on Paris streets in 1891." }
    ]
  },
  {
    slug: 'the-tailor-moroni',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this cloth merchant around 1570, capturing him mid-work with scissors ready to cut black fabric marked with chalk lines. He wears cream and red clothing of a successful professional, plus a <strong>sword belt denoting high status</strong>. He looks up at us, interrupted.</p>

<p>The portrait's snapshot quality gives it startling vitality. Moroni painted directly from life without preliminary drawings. He was among the first to portray the wealthy bourgeoisie rather than just nobility. The <strong>National Gallery</strong> considers this his most celebrated work. Acquired in 1862, it hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who painted The Tailor?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> created this work around 1570, late in his career. He was an Italian Renaissance portraitist from Bergamo who pioneered depicting successful professionals rather than just aristocrats." },
      { question: "Where can I see The Tailor?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, acquired in 1862. The gallery holds one of the best collections of Moroni's work outside Italy." },
      { question: "What makes this portrait unusual?", answer: "Moroni depicted a man <strong>actively working at his trade</strong>, highly unusual for Renaissance portraiture. The tailor looks up as if interrupted, creating a snapshot-like immediacy that was revolutionary for the period." },
      { question: "How did Moroni achieve such realism?", answer: "Moroni painted <strong>directly from life</strong> without preliminary drawings. This approach captured fleeting expressions and gave his <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> psychological depth unusual for the time." }
    ]
  },
  {
    slug: 'lady-with-glove',
    description: `<p><a href="/apps/masterpieces/artist/carolus-duran"><strong>Carolus-Duran</strong></a> painted his wife Pauline in this life-size portrait that made his reputation at the 1869 Paris Salon. She wears a black silk dress with lace, removing one grey glove while another lies on the floor. A red rose at her bodice and <strong>yellow rose in her hair</strong> break the somber palette.</p>

<p>The influence of Velázquez, whom Carolus-Duran studied in Spain in 1866-67, is clearly visible. His friend Manet recognized the Spanish master's impact. The fallen glove near the artist's signature gives the work a modern, instantaneous feel. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted Lady with a Glove?", answer: "<a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a> created this portrait of his wife Pauline Croizette in 1869. It won a medal at the Paris Salon and launched his career as a fashionable portraitist of Parisian high society." },
      { question: "Where is Lady with a Glove displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. At 228 x 164 cm, it's a commanding life-size portrait typical of formal 19th-century French portraiture." },
      { question: "What influenced this painting?", answer: "Carolus-Duran's 1866-67 trip to Spain introduced him to <strong>Velázquez</strong>, whose influence shows in the dark palette and dignified composition. His friend Édouard Manet shared this admiration for Spanish masters." },
      { question: "Who was the subject?", answer: "<strong>Pauline Croizette</strong> (1839-1912) was a pastellist and miniaturist who married the artist. She appears elegant in <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>black silk</strong></a> with touches of color from roses at her bodice and in her hair." }
    ]
  },
  {
    slug: 'nicolas-poussin-rinaldo-and-armida',
    description: `<p><a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted this scene from Tasso's epic poem Gerusalemme Liberata around 1630. The Saracen sorceress Armida raises a dagger to kill the sleeping crusader Rinaldo, but <strong>Cupid restrains her arm</strong>. In this exact moment, her hatred transforms into love.</p>

<p>The painting captures the tension between violence and tenderness as Armida's expression softens. Tasso's allegory represents the struggle between Reason and Concupiscence. Poussin painted this theme multiple times, with related works at the Pushkin Museum and Berlin's Gemäldegalerie. Now at the <a href="/apps/masterpieces/museum/dulwich-picture-gallery-london-uk"><strong>Dulwich Picture Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who painted Rinaldo and Armida?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Nicolas Poussin</strong></a> (1594-1665) created this work around 1630. The French painter was the leading figure of French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> classicism, known for mythological and literary subjects." },
      { question: "Where can I see Rinaldo and Armida?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery-london-uk\"><strong>Dulwich Picture Gallery</strong></a> in London. Poussin painted this subject multiple times, with other versions at the Pushkin Museum and Berlin's Gemäldegalerie." },
      { question: "What story does this painting tell?", answer: "It illustrates Tasso's epic poem <strong>Gerusalemme Liberata</strong>. The sorceress Armida plans to kill the sleeping crusader Rinaldo but falls in love with him instead. Cupid physically restrains her dagger arm." },
      { question: "What does this painting symbolize?", answer: "Tasso wrote that Rinaldo represents <strong>war-like temperament</strong> that can serve good or ill. The scene allegorizes the struggle between Reason and Concupiscence, with desire conquering violent intention." }
    ]
  },
  {
    slug: 'pierre-puvis-de-chavannes-mary-magdalene-in-the-desert',
    description: `<p><a href="/apps/masterpieces/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> painted the penitent Magdalene in 1869, showing her before a sparse landscape as an almost abstract figure. Her sensuality appears only in her bare breast framed by long hair. A <strong>skull sits beside her</strong>, and her gaze remains fixed and distant.</p>

<p>Puvis achieved classical grandeur through simplified forms while Impressionism dominated Paris. His fresco-like technique and poetic approach made him a precursor of Symbolism. He returned to this subject thirty years later in one of his final works. Now at the <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel Museum</strong></a> in Frankfurt.</p>`,
    faqs: [
      { question: "Who painted Mary Magdalene in the Desert?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Pierre Puvis de Chavannes</strong></a> created this work in 1869. He was one of France's most influential painters, maintaining classical traditions while pioneering <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>." },
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. It was acquired in 1910. Puvis painted another version of this subject late in his career, now in Budapest." },
      { question: "What is depicted in the painting?", answer: "The <strong>penitent Mary Magdalene</strong> appears in the desert with a skull beside her. Her bare breast is framed by long hair. The sparse landscape reduces the scene to essential symbolic elements." },
      { question: "How big is this painting?", answer: "The canvas measures 156.5 x 105.5 cm (61.6 x 41.5 inches). Puvis's simplified forms and muted palette create classical grandeur appropriate to religious meditation." }
    ]
  },
  {
    slug: 'pieter-de-hooch-tavern-scene-with-maid-trying-to-fill-the-glass-of',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this tavern scene around 1652, early in his career before his famous courtyard paintings. A maid attempts to fill a cavalier's empty glass while <strong>card players gather</strong> in the background. Warm light streams through the space, illuminating the figures.</p>

<p>De Hooch began by painting these rowdy tavern scenes, known as kortegardje (from the French corps de garde). His expert chiaroscuro creates depth and intimacy. The painting is also called "The Empty Glass." Now at the <a href="/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam.</p>`,
    faqs: [
      { question: "Who painted this tavern scene?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> created this work around 1652. Born in Rotterdam, he studied in Haarlem before becoming famous for serene domestic scenes with distinctive light effects." },
      { question: "Where can I see The Empty Glass?", answer: "The painting is in the collection of <a href=\"/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam. Due to renovations, it has been on loan to Museum Het Prinsenhof in Delft." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/baroque\"><strong>Dutch Golden Age</strong></a> genre painting. De Hooch's mastery of chiaroscuro creates depth and warm atmosphere through contrast of light and shadow." },
      { question: "How big is The Empty Glass?", answer: "The oil on panel measures 46 x 37 cm (18.1 x 14.6 inches). The intimate scale is typical of Dutch genre paintings meant for private homes rather than public display." }
    ]
  },
  {
    slug: 'the-seamstress-vuillard',
    description: `<p><a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> painted this intimate scene in 1893, showing a woman sewing with her back to us before a window. Vivid patterned wallpaper contrasts with plain grey walls. The artist left underlying board exposed in the table, dress, and wall, giving the work an <strong>unfinished quality</strong>.</p>

<p>The stripe of wallpaper dominating the left third creates ambiguous spatial relationships. Interplay of beiges, browns, and reds meets Vuillard's signature flat pink window. His mother ran a dressmaker's workshop that inspired many such scenes. The <strong>Nabis group</strong> favored these poetic images of silent, meditative activity. Now at the Indianapolis Museum of Art.</p>`,
    faqs: [
      { question: "Who painted The Seamstress?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this work in 1893. He helped found the Nabis, a group of progressive artists inspired by Gauguin who emphasized decorative use of color and shape." },
      { question: "What is Intimism?", answer: "<strong>Intimism</strong> was a late 19th-century style exploring domestic interiors. Vuillard and Pierre Bonnard were its main practitioners, using broken color to capture warmth and quiet isolation of home scenes." },
      { question: "Why did Vuillard paint seamstresses?", answer: "Vuillard's mother Marie ran a <strong>dressmaker's workshop</strong>. He painted many scenes of women sewing, drawing on daily life in his family home. The Nabis valued such poetic images of quiet domestic activity." },
      { question: "Where can I see this painting?", answer: "The work is in the collection of the <strong>Indianapolis Museum of Art</strong> (Newfields). It has also been exhibited at the Royal Academy of Arts in London and the National Gallery of Art in Washington." }
    ]
  },
  {
    slug: 'the-artists-studio',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this enormous allegory in 1855, subtitling it "A real allegory summing up seven years of my artistic and moral life." He stands at center with a nude muse, a child, and a cat. On the right: friends including <strong>Baudelaire and Champfleury</strong>. On the left: everyday people representing society.</p>

<p>Courbet declared the whole world came to be painted. The work was rejected from the 1855 Paris World Fair, so he opened his own Pavilion of Realism nearby. Few praised it then, though Delacroix supported it. At <strong>361 x 598 cm</strong>, it asserts the artist's role in society on a history painting's scale. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted The Artist's Studio?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this work in Ornans, France in 1855. He was the leader of the <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> movement, championing unidealized depictions of contemporary life." },
      { question: "Where can I see The Artist's Studio?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. At over 3.5 meters tall and nearly 6 meters wide, it requires substantial wall space." },
      { question: "Who appears in this painting?", answer: "Courbet painted himself at center with friends on the right: poet <strong>Charles Baudelaire</strong>, critic Champfleury, and patron Alfred Bruyas. On the left are types representing society: priest, merchant, worker, beggar." },
      { question: "Why is this painting important?", answer: "Rejected from the 1855 World Fair, Courbet opened his own <strong>Pavilion of Realism</strong> to show it. The title's pun references both genuine allegory and Courbet's personal philosophy behind Realist art." }
    ]
  },
  {
    slug: 'the-seasons-spring-mucha',
    description: `<p><a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> designed this decorative panel in 1896 as part of his first purely artistic lithograph series. A blonde figure in translucent white dress stands under a tree holding a lyre. Each season panel features a <strong>nymph-like woman</strong> against corresponding seasonal landscapes.</p>

<p>The Seasons was Mucha's first design without advertising content, published by Champenois in Paris. Its success led to two more seasonal series in 1897 and 1900. The style became synonymous with <strong>Art Nouveau</strong>, though contemporaries called it "le style Mucha." Multiple panels were later combined into single ornamental frames.</p>`,
    faqs: [
      { question: "Who created The Seasons: Spring?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a>, the Czech artist, designed this lithograph in 1896. His poster for Sarah Bernhardt's Gismonda had launched \"le style Mucha,\" now called Art Nouveau." },
      { question: "What is depicted in the Spring panel?", answer: "A blonde <strong>nymph-like figure</strong> in a white dress stands under flowering trees holding a lyre. The scene captures Spring's innocence through soft pastels and <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> elements against a gentle landscape." },
      { question: "How big is the Spring panel?", answer: "The color lithograph measures 103 x 54 cm (40.6 x 21.3 inches). <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> decorative panels were designed as affordable art for middle-class homes." },
      { question: "Where can I see The Seasons?", answer: "The <strong>Mucha Foundation</strong> in Prague holds important works. Prints exist in many collections worldwide. The series' success led Champenois to commission two more seasonal sets in 1897 and 1900." }
    ]
  },
  {
    slug: 'otto-mueller-neger-und-t228nzerin',
    description: `<p><a href="/apps/masterpieces/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted this image of a black figure and dancer in 1903, seven years before joining Die Brücke. His elongated figures and <strong>muted earthy tones</strong> distinguish him from the group's characteristic vibrant colors. The scene shows two figures, one nude.</p>

<p>Mueller used distemper on raw canvas, creating his distinctive matte finish. He recovered the tempera medium for the Expressionists, and colleague Ernst Ludwig Kirchner praised this contribution. In 1937, the Nazis seized 357 of Mueller's works as <strong>"degenerate art."</strong> This painting remains in a private collection.</p>`,
    faqs: [
      { question: "Who painted Neger und Tänzerin?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> (1874-1930) created this work in 1903. He later joined Die Brücke in 1910 and became known for <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figures</strong></a> in landscape settings." },
      { question: "What movement was Otto Mueller part of?", answer: "Mueller joined <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Die Brücke</strong></a>, the German Expressionist group, in 1910. His restrained palette and lyrical style differed from the vibrant colors of founding members like Kirchner." },
      { question: "What technique did Mueller use?", answer: "Mueller used <strong>distemper on raw canvas</strong>, creating a distinctive matte finish. Ernst Ludwig Kirchner credited him with reintroducing tempera medium to the Expressionist group." },
      { question: "How big is this painting?", answer: "The oil on canvas measures 65.5 x 91 cm (25.8 x 35.8 inches). It's currently held in a <strong>private collection</strong> and not on public display." }
    ]
  },
  {
    slug: 'piet-mondrian-view-of-winterswijk',
    description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this view of his childhood town around 1898-1899, decades before his famous abstract grids. Crops fill the left side while grass spreads across the right. A <strong>church tower rises</strong> above dwellings against a bright blue sky with touches of white cloud.</p>

<p>The Mondrian family moved to Winterswijk when his father became headmaster of a local school. Piet lived there from age eight to twenty before moving to Amsterdam. Most work from this period is naturalistic or Impressionistic, showing <strong>Dutch landscapes</strong> with windmills, fields, and rivers. Now in a private collection.</p>`,
    faqs: [
      { question: "Who painted View of Winterswijk?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Piet Mondrian</strong></a> created this watercolor around 1898-1899, early in his career. He later developed the abstract geometric style with primary colors and black grids that made him famous." },
      { question: "Where is Winterswijk?", answer: "<strong>Winterswijk</strong> is a town in eastern Netherlands where Mondrian lived from age eight to twenty. His father was headmaster there. Villa Mondriaan museum now celebrates his early life with paintings from this period." },
      { question: "What style is this painting?", answer: "This early work shows <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Post-Impressionist</strong></a> naturalism in the Dutch tradition. Mondrian painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, windmills, and farms before developing his abstract approach." },
      { question: "Where can I see this painting?", answer: "The watercolor is in a <strong>private collection</strong> and not on public display. It measures 52 x 63.5 cm. Winterswijk's Villa Mondriaan museum holds other early works from this period." }
    ]
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
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
