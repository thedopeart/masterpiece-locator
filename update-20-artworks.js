const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'gallant-conversation',
    description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this ambiguous interior scene around 1654. For centuries it was called "The Paternal Admonition," believed to show a father scolding his daughter. Modern scholars interpret it differently: a gentleman propositions a woman in what may be a brothel. The man still holds his hat, having just arrived. When a smaller version in Berlin was cleaned, restorers discovered he was holding a coin between his fingers.</p>

<p>Ter Borch's real subject is the shimmering <strong>white satin dress</strong> that dominates the composition. Contemporaries called his interiors "satijntjes" for his unmatched ability to render fabric. The painting proved immediately popular. Ter Borch made copies himself, and at least 24 versions by other artists exist. Goethe immortalized it in his novel <em>Elective Affinities</em>. The work hangs at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "What does The Gallant Conversation actually show?", answer: "Modern art historians believe it depicts a gentleman <strong>propositioning a woman</strong> in a brothel, not a father admonishing his daughter as once thought. A cleaned Berlin version revealed a coin in the man's hand." },
      { question: "Where can I see The Gallant Conversation?", answer: "The painting hangs at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. A smaller version is at the Gemäldegalerie Berlin. Both were painted by <a href=\"/artist/gerard-ter-borch\"><strong>ter Borch</strong></a> himself." },
      { question: "Why is the white satin dress important?", answer: "Ter Borch was famous for painting <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>fabric textures</strong></a>, especially satin. His interiors were called 'satijntjes' (satin pieces) for his unmatched ability to capture shimmering cloth." },
      { question: "How popular was this painting?", answer: "The painting was immediately successful. Ter Borch made multiple copies, and at least 24 versions by other artists survive. Goethe featured it in his novel <em>Elective Affinities</em>." }
    ]
  },
  {
    slug: 'the-muses-denis',
    description: `<p><a href="/artist/maurice-denis"><strong>Maurice Denis</strong></a> painted this <a href="/movement/symbolism"><strong>Symbolist</strong></a> work in 1893, the same year he married Marthe Meurier. He updated classical mythology by dressing the muses in contemporary clothing and stripping them of traditional identifying attributes. The setting is the terrace at Saint-Germain-en-Laye, where Denis lived his entire life.</p>

<p>Century-old chestnut trees create a rhythm of vertical trunks against the curves of branches and dress folds. The flattened space, painted in areas of flat color with neat outlines, evokes a "sacred wood" where figures communicate mysteriously with nature. An enigmatic <strong>tenth muse</strong> appears in the background, raising one arm to the light. Denis co-founded the <strong>Nabis</strong> group with Bonnard and Vuillard, inspired by Gauguin and Japanese prints. The painting hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Why are there ten muses in the painting?", answer: "Classical mythology has only nine muses, but Denis added a mysterious <strong>tenth figure</strong> in the background, raising her arm toward light. This enigmatic addition suggests spiritual revelation beyond traditional iconography." },
      { question: "Where can I see The Muses by Maurice Denis?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It was exhibited at the Salon des Indépendants in 1893, the same year <a href=\"/artist/maurice-denis\"><strong>Denis</strong></a> married." },
      { question: "What art movement does this painting represent?", answer: "Denis was a <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> and founding member of the Nabis group. The flat colors, decorative outlines, and mystical atmosphere reflect Post-Impressionist and Japanese influences." },
      { question: "Where is the painting set?", answer: "Denis set the scene on the terrace at Saint-Germain-en-Laye, the town where he lived his entire life. The century-old chestnut trees create the composition's distinctive vertical rhythm." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-the-adoration-of-the-kings',
    description: `<p><a href="/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> painted this tempera on canvas around 1556. Unlike his usual landscape-format works, this <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> scene fills the composition with large figures rather than panoramic views. The three kings present gifts to the Christ child while onlookers crowd around with distinct, sometimes grotesque expressions.</p>

<p>Bruegel borrowed the tight grouping from Italian Mannerists like Parmigianino, but his faces remain firmly Northern in their unflinching realism. The presence of soldiers offers subtle commentary on the Spanish Inquisition then tightening its grip on the Netherlands. Bruegel painted another, more famous version in 1564 (now in London's National Gallery) using oil on panel. This earlier canvas version measures 124 x 169 cm and hangs at the <a href="/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel"><strong>Royal Museums of Fine Arts</strong></a> in Brussels.</p>`,
    faqs: [
      { question: "Why does this Adoration look different from other Bruegels?", answer: "Bruegel typically painted panoramic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> with small figures. This early work uses large, closely grouped figures borrowed from Italian Mannerist compositions." },
      { question: "Where can I see this painting?", answer: "This version hangs at the <a href=\"/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel\"><strong>Royal Museums of Fine Arts</strong></a> in Brussels. A later 1564 version is at London's National Gallery." },
      { question: "What political meaning does the painting carry?", answer: "The soldiers in the scene subtly reference the Spanish Inquisition, which was intensifying in the Netherlands when <a href=\"/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> painted this work around 1556." },
      { question: "How is this painting different from the London version?", answer: "This is an earlier work (c. 1556) in <strong>tempera on canvas</strong>. The 1564 London version uses oil on panel and shows Bruegel's mature style with more individualized facial expressions." }
    ]
  },
  {
    slug: 'interior-peasants-cottage',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre scene in 1668. A mother holds up a doll for her young child while the father watches tenderly. An older child eats from a bowl nearby. The warm, modest interior glows with diffused light.</p>

<p>Early in his career, van Ostade emphasized peasant rowdiness and boorishness. By the 1650s, influenced by Rembrandt's handling of light, he developed a more sympathetic view of humble life. This painting reflects that mature vision. Van Ostade was extraordinarily prolific; more than 800 paintings and many etchings survive. He trained in Haarlem, likely under Frans Hals, and absorbed the influence of Flemish painter Adriaen Brouwer. The work measures 47 x 42 cm, oil on panel, and hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What does the painting show?", answer: "A mother holds a doll for her child while the father watches lovingly. An older child eats nearby. <a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> presents peasant family life with warmth rather than mockery." },
      { question: "How did van Ostade's style change over time?", answer: "Early works emphasized peasant <strong>boorishness and rowdiness</strong>. By the 1650s, influenced by Rembrandt's light effects, he portrayed humble life with greater sympathy and tenderness." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London. Van Ostade created over 800 paintings, many depicting <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>peasant interiors</strong></a>." },
      { question: "Who influenced van Ostade's work?", answer: "He trained in Haarlem, likely under Frans Hals, and absorbed the Flemish influence of <strong>Adriaen Brouwer</strong>. Rembrandt's light and shadow techniques shaped his mature style." }
    ]
  },
  {
    slug: 'the-red-boy',
    description: `<p><a href="/artist/thomas-lawrence"><strong>Sir Thomas Lawrence</strong></a> painted this <a href="/movement/romanticism"><strong>Romantic</strong></a> portrait in 1825 for 600 guineas. The subject, Charles William Lambton, was the six-year-old son of John Lambton, later Earl of Durham. Sitting on rocks overlooking a moonlit sea, the boy appears lost in contemplation, a Romantic wanderer in miniature.</p>

<p>Lawrence originally painted the boy in yellow, but the father insisted on crimson, creating the vivid title image. Critics at the 1825 Royal Academy exhibition declared it surpassed even Reynolds. The work appeared at the Paris Salon in 1827 to further acclaim. Tragically, young Charles died of tuberculosis at just thirteen. The painting became the first ever reproduced on a British postage stamp (1967) and appeared on Wilkins Red Boy Toffee packaging. After remaining in the Lambton family for nearly two centuries, it was acquired by the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London in 2021 for £9.3 million.</p>`,
    faqs: [
      { question: "Why is it called The Red Boy?", answer: "<a href=\"/artist/thomas-lawrence\"><strong>Lawrence</strong></a> originally painted the clothes <strong>yellow</strong>. The boy's father insisted on crimson, and Lawrence reluctantly repainted it, creating the striking red that gave the portrait its popular name." },
      { question: "Where can I see The Red Boy?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London acquired it in 2021 for £9.3 million. The painting remained with the Lambton family for nearly 200 years before the sale." },
      { question: "What happened to the boy in the portrait?", answer: "<strong>Charles William Lambton</strong> died of tuberculosis at just thirteen years old. His father, later Earl of Durham, commissioned this portrait when Charles was six or seven." },
      { question: "Why is this painting historically significant?", answer: "It was the first painting reproduced on a <strong>British postage stamp</strong> in 1967. Critics at the 1825 Royal Academy said it surpassed Reynolds in rendering childhood." }
    ]
  },
  {
    slug: 'the-blue-room-valadon',
    description: `<p><a href="/artist/suzanne-valadon"><strong>Suzanne Valadon</strong></a> painted this bold response to traditional odalisques in 1923, at the height of her success. A woman lounges on a bed in a camisole and striped pajamas, cigarette in hand, books piled nearby. She gazes past the viewer, absorbed in her own thoughts rather than posing for the male gaze.</p>

<p>Valadon had worked as a model for Renoir, Puvis de Chavannes, and Toulouse-Lautrec before Degas recognized her talent and mentored her. Here she subverts every convention of the reclining nude. The woman is dressed, not naked. Her clothes are modern, not Oriental. A cigarette replaces Ingres's hookah. The <strong>intense blue</strong> bedding dominates like Matisse, but the attitude is entirely different. Some scholars believe the figure is Valadon herself. The painting measures 90 x 116 cm and hangs at the <a href="/museum/musee-de-lorangerie"><strong>Centre Pompidou</strong></a> in Paris.</p>`,
    faqs: [
      { question: "How does The Blue Room challenge tradition?", answer: "Unlike traditional <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>odalisques</strong></a>, this woman is <strong>dressed in modern clothes</strong>, smoking, with books nearby. She ignores the viewer entirely, absorbed in her own thoughts." },
      { question: "Where can I see The Blue Room?", answer: "The painting is at the <strong>Centre Pompidou</strong> in Paris. <a href=\"/artist/suzanne-valadon\"><strong>Valadon</strong></a> created it in 1923 at the height of her artistic career." },
      { question: "What is Suzanne Valadon's background?", answer: "Before becoming a painter, Valadon modeled for <strong>Renoir, Toulouse-Lautrec, and Puvis de Chavannes</strong>. Edgar Degas recognized her talent and became her mentor." },
      { question: "Who is the woman in the painting?", answer: "Some scholars believe the reclining figure is a <strong>self-portrait</strong> of Valadon herself, though this remains debated. The pose deliberately subverts the traditional male gaze." }
    ]
  },
  {
    slug: 'guard-of-harem',
    description: `<p><a href="/artist/rudolf-ernst"><strong>Rudolf Ernst</strong></a> painted this <strong>Orientalist</strong> scene around 1900, depicting a richly dressed guard standing before a curtained entrance. Through the doorway, a woman from the harem is glimpsed, creating what Ernst's contemporaries described as a "so close and yet so far" effect.</p>

<p>Ernst was Austrian-born but became a French citizen, living in Fontenay-aux-Roses outside Paris. He studied at the Vienna Academy of Fine Arts at fifteen, continued in Rome, then settled in Paris in 1876. There he became friends with fellow Orientalist Ludwig Deutsch. Unlike some "armchair" Orientalists, Ernst traveled extensively in Spain, Morocco, Turkey, and Egypt, collecting props and costumes for his meticulous studio compositions. His attention to fabric patterns, metalwork, and architectural details brought commercial success. The guard's intense gaze and elaborate costume demonstrate Ernst's skill at rendering decorative surfaces and creating an atmosphere of exotic mystery.</p>`,
    faqs: [
      { question: "What is Orientalism in painting?", answer: "<strong>Orientalism</strong> was a 19th-century movement depicting Middle Eastern and North African subjects. <a href=\"/artist/rudolf-ernst\"><strong>Ernst</strong></a> traveled to Morocco, Turkey, and Egypt, collecting authentic props for his studio paintings." },
      { question: "What does the painting show?", answer: "A richly dressed guard stands before a curtained harem entrance. Through the doorway, a woman is glimpsed, creating what contemporaries called a 'so close and yet so far' effect of forbidden access." },
      { question: "Where did Rudolf Ernst train?", answer: "Ernst began at the <strong>Vienna Academy</strong> at age fifteen, studied in Rome, then settled in Paris in 1876. He became friends with fellow Orientalist Ludwig Deutsch." },
      { question: "What makes Ernst's Orientalist paintings distinctive?", answer: "Ernst traveled extensively and collected authentic <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>costumes and props</strong></a>. His meticulous attention to fabric patterns, metalwork, and tiles sets his work apart." }
    ]
  },
  {
    slug: 'muses-clio-euterpe-thalia',
    description: `<p><a href="/artist/eustache-le-sueur"><strong>Eustache Le Sueur</strong></a> painted this <a href="/movement/baroque"><strong>Baroque</strong></a> work between 1652 and 1655 for the Cabinet des Muses in the Hôtel Lambert on Paris's Île Saint-Louis. Three muses appear: <strong>Clio</strong> (history), <strong>Euterpe</strong> (music), and <strong>Thalia</strong> (comedy). They are arranged diagonally, creating movement across the composition.</p>

<p>The Hôtel Lambert was built by Louis Le Vau for Jean-Baptiste Lambert de Thorigny between 1641 and 1644. Le Sueur executed elaborate decorative schemes for the house, including the Cabinet de l'Amour and this series depicting all nine muses. The paintings remained in situ until 1776, when heirs sold them. At the instigation of the comte d'Angiviller, Louis XVI acquired them for 50,000 livres. This panel measures 130 x 130 cm, oil on panel, and now hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Which muses are depicted in this painting?", answer: "<strong>Clio</strong> (history), <strong>Euterpe</strong> (music), and <strong>Thalia</strong> (comedy) appear in this work. <a href=\"/artist/eustache-le-sueur\"><strong>Le Sueur</strong></a> painted all nine muses for the Hôtel Lambert's Cabinet des Muses." },
      { question: "Where was this painting originally displayed?", answer: "It hung in the <strong>Hôtel Lambert</strong> on Paris's Île Saint-Louis, built by Louis Le Vau between 1641-1644. The paintings remained there until 1776." },
      { question: "Where can I see this painting now?", answer: "The painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. Louis XVI acquired it in 1776 for 50,000 livres at the comte d'Angiviller's recommendation." },
      { question: "What style is the painting?", answer: "Le Sueur worked in the French <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition, creating elegant decorative schemes. The diagonal arrangement of figures creates characteristic Baroque movement and dynamism." }
    ]
  },
  {
    slug: 'in-ictu-oculi',
    description: `<p><a href="/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this <a href="/movement/baroque"><strong>Baroque</strong></a> allegory of death in 1672 for the Hospital de la Caridad in Seville. The title comes from Corinthians 15:52: "In a moment, in the twinkling of an eye." Death, as a skeleton, extinguishes a candle while treading on a globe. Symbols of worldly power—crowns, tiaras, books, weapons—lie scattered beneath.</p>

<p>The painting forms a pair with <strong>Finis Gloriae Mundi</strong>, which shows rotting corpses in a crypt. Both are <em>memento mori</em>, reminders of mortality that Valdés Leal called "hieroglyphs of our afterlife." He founded the Seville Academy of Art with his friend Murillo, though their styles differed dramatically—Murillo's serene, Valdés Leal's somber and theatrical. The work measures 216 x 220 cm, oil on canvas, and remains at its original location in the <a href="/museum/hospital-caridad-seville"><strong>Hospital de la Caridad</strong></a>, Seville.</p>`,
    faqs: [
      { question: "What does In Ictu Oculi mean?", answer: "The Latin phrase means '<strong>in the blink of an eye</strong>,' from Corinthians 15:52. Death can extinguish life instantly, a theme <a href=\"/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> visualized with a skeleton snuffing a candle." },
      { question: "Where can I see In Ictu Oculi?", answer: "The painting remains at its original location in the <a href=\"/museum/hospital-caridad-seville\"><strong>Hospital de la Caridad</strong></a>, Seville. Its companion piece, <em>Finis Gloriae Mundi</em>, hangs nearby." },
      { question: "What symbols appear in the painting?", answer: "Death stands on a <strong>globe</strong> and extinguishes a candle. Below lie crowns, papal tiaras, books, and weapons, representing <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>earthly power</strong></a> rendered meaningless by mortality." },
      { question: "Who commissioned the painting?", answer: "The <strong>Brotherhood of Charity</strong> commissioned both paintings for their hospital. Valdés Leal called them 'hieroglyphs of our afterlife,' intended to remind viewers of death's universality." }
    ]
  },
  {
    slug: 'last-supper-juanes',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted this <a href="/movement/renaissance"><strong>Renaissance</strong></a> work around 1560 for the high altar of San Esteban church in Valencia. The composition adapts Leonardo da Vinci's famous Milan fresco, but Juanes softened the figures in a manner closer to Raphael. Each apostle reacts expressively to Christ's announcement of betrayal.</p>

<p>The most notable detail is the <strong>chalice</strong>: Juanes depicted the actual Holy Chalice of Valencia Cathedral, believed by some to be the Holy Grail used at the original Last Supper. Alfonso V of Aragon had given it to the cathedral from the royal collection. Juanes was the dominant painter in mid-16th-century Valencia, dedicating his career to religious iconography during an era of intense Counter-Reformation fervor. The painting measures 116 x 191 cm, oil on panel, and hangs at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "What is special about the chalice in the painting?", answer: "Juanes painted the actual <strong>Holy Chalice of Valencia Cathedral</strong>, believed by some to be the Holy Grail. Alfonso V of Aragon gave it to the cathedral from the royal collection." },
      { question: "Where can I see The Last Supper by Juan de Juanes?", answer: "This version hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. <a href=\"/artist/juan-de-juanes\"><strong>Juanes</strong></a> painted it for the high altar of San Esteban church in Valencia." },
      { question: "How does this differ from Leonardo's Last Supper?", answer: "Juanes borrowed Leonardo's composition but softened the figures in a style closer to <strong>Raphael</strong>. The apostles' emotional reactions are more subdued than Leonardo's dramatic gestures." },
      { question: "Who was Juan de Juanes?", answer: "Juanes was the most important painter in 16th-century Valencia, devoted entirely to <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious subjects</strong></a>. He worked during the Counter-Reformation's height of Catholic fervor." }
    ]
  },
  {
    slug: 'joan-of-arc-bastien-lepage',
    description: `<p><a href="/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted this monumental work in 1879, depicting the moment when Saints Michael, Margaret, and Catherine appear to Joan in her parents' garden. The teenage peasant stands barefoot, her toes clenched in the grass, caught between earthly chores and divine calling. Behind her, an overturned stool and spinning loom show the work she has abandoned.</p>

<p>Joan of Arc had gained new significance after France ceded part of Lorraine—Bastien-Lepage's native region—to Germany following the Franco-Prussian War. Critics at the 1880 Salon praised the pose and expression but found the ghostly saints at odds with the naturalistic style. Some called it "false naturalism." American collector Erwin Davis bought it for $4,000 in 1880; it resold for $23,700 in 1889. The canvas measures a massive 254 x 279 cm and hangs at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What moment does the painting depict?", answer: "<a href=\"/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> shows Saints Michael, Margaret, and Catherine appearing to <strong>Joan in her garden</strong>, calling her to fight the English. She stands barefoot, abandoning her spinning." },
      { question: "Where can I see Joan of Arc by Bastien-Lepage?", answer: "The painting hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. At 8 by 9 feet, it dominates Gallery 800." },
      { question: "Why was Joan of Arc significant to the painter?", answer: "Bastien-Lepage was from Lorraine, Joan's home region. After the Franco-Prussian War (1870-71), France ceded part of Lorraine to Germany, making Joan a <strong>powerful patriotic symbol</strong>." },
      { question: "How was the painting received?", answer: "Critics at the 1880 Salon praised the naturalism but found the <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>ghostly saints</strong></a> jarring. Some dismissed it as 'false naturalism,' combining incompatible styles." }
    ]
  },
  {
    slug: 'pietro-da-cortona-pope-urbanus-viii-maffeo-barberini',
    description: `<p><a href="/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted this <a href="/movement/baroque"><strong>Baroque</strong></a> portrait of Pope Urban VIII (born Maffeo Barberini) around 1627. The pope wears the traditional red mozzetta and camauro, projecting papal authority with a direct, commanding gaze.</p>

<p>The Barberini family became Cortona's most important patrons. This portrait commemorates the friendship between the Barberini and Sacchetti families, who introduced Cortona to the papal court. Urban VIII would later commission Cortona's masterwork: the vast ceiling fresco <strong>Triumph of Divine Providence</strong> (1633-39) in the Palazzo Barberini. Urban VIII reigned from 1623 to 1644 and traced his family's nobility to the 14th-century poet Francesco da Barberino, despite their actual origins in sheep-trading. The portrait measures approximately 125 x 98 cm, oil on canvas, and hangs at the <a href="/museum/capitoline-museums-rome-italy"><strong>Capitoline Museums</strong></a> in Rome.</p>`,
    faqs: [
      { question: "Who was Pope Urban VIII?", answer: "<strong>Maffeo Barberini</strong> reigned as Pope Urban VIII from 1623 to 1644. Despite claiming noble ancestry, his family's fortune came from sheep-trading." },
      { question: "Where can I see this portrait?", answer: "The painting hangs at the <a href=\"/museum/capitoline-museums-rome-italy\"><strong>Capitoline Museums</strong></a> in Rome. <a href=\"/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> painted it around 1627." },
      { question: "What is Pietro da Cortona famous for?", answer: "Cortona became one of the leading <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painters. His masterwork is the ceiling fresco <em>Triumph of Divine Providence</em> at the Palazzo Barberini in Rome." },
      { question: "What was the relationship between the artist and sitter?", answer: "The Barberini family became Cortona's most important patrons. This portrait commemorates the friendship between the <strong>Barberini and Sacchetti families</strong>, who introduced Cortona to the papal court." }
    ]
  },
  {
    slug: 'pietro-da-cortona-return-of-hagar',
    description: `<p><a href="/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted this <a href="/movement/baroque"><strong>Baroque</strong></a> biblical scene in 1637. Hagar, the Egyptian servant of Sarah, stands before Abraham pleading to return after her earlier banishment. An angel hovers above, touching her head in support. In the background, Sarah watches from a window with barely concealed disdain.</p>

<p>The composition captures the emotional complexity of the story from Genesis. Abraham's open arms suggest welcome, while Sarah's presence hints at continuing tensions. Cortona painted a larger version now in the Pushkin Museum, Moscow; this variant, with the composition reversed, came from the Palazzo Pitti in Florence. Cortona was equally accomplished as an architect and fresco painter, designing the facade of Santa Maria della Pace in Rome. The work measures 123.5 x 99 cm, oil on canvas, and hangs at the <a href="/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "What biblical story does the painting depict?", answer: "The scene shows <strong>Hagar returning to Abraham</strong> after her banishment. Sarah, Abraham's wife, watches from a window as an angel supports Hagar's plea." },
      { question: "Where can I see Return of Hagar?", answer: "This version hangs at the <a href=\"/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. A larger version with reversed composition is at the Pushkin Museum, Moscow." },
      { question: "Who painted Return of Hagar?", answer: "<a href=\"/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> painted this in 1637. He was a leading <a href=\"/movement/baroque\"><strong>Baroque</strong></a> artist known for ceiling frescoes and architectural designs." },
      { question: "What makes the composition emotionally complex?", answer: "Abraham's <strong>open arms suggest welcome</strong>, but Sarah watches from a window with visible disdain. The angel touching Hagar's head adds divine validation to the tense domestic scene." }
    ]
  },
  {
    slug: 'flute-concert-frederick-great',
    description: `<p><a href="/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> worked for two years on this painting, completed in 1852. Frederick the Great stands at center playing his traverse flute at his summer palace of Sanssouci, bathed in golden candlelight. At the harpsichord sits <strong>Carl Philipp Emanuel Bach</strong>. The king's favorite sister, Wilhelmine von Bayreuth, listens from a sofa.</p>

<p>One figure stands apart: a man leaning idly against the wall shows little interest in the concert—it is Johann Joachim Quantz, the king's flute teacher. Menzel was celebrated for his historical accuracy, yet the painting shows almost impressionistic handling of light and shadow. The flute stand divides musicians from royal guests. Though known for his realism, Menzel avoided dramatic overstatement. He became the first painter admitted to the Order of the Black Eagle, Prussia's highest honor. The work measures 142 x 205 cm and hangs at the <a href="/museum/alte-nationalgalerie"><strong>Alte Nationalgalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Who are the figures in the painting?", answer: "<strong>Frederick the Great</strong> plays flute at center. Carl Philipp Emanuel Bach sits at the harpsichord. The king's sister Wilhelmine listens from a sofa. His flute teacher Quantz leans bored against the wall." },
      { question: "Where can I see The Flute Concert?", answer: "The painting hangs at the <a href=\"/museum/alte-nationalgalerie\"><strong>Alte Nationalgalerie</strong></a> in Berlin. <a href=\"/artist/adolph-menzel\"><strong>Menzel</strong></a> spent two years completing this work." },
      { question: "What artistic style does Menzel use?", answer: "Though known for historical realism, Menzel's handling of <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden candlelight</strong></a> shows almost impressionistic qualities. Forms blur together in the atmospheric glow." },
      { question: "What honor did Menzel receive?", answer: "Menzel became the first painter admitted to the <strong>Order of the Black Eagle</strong>, Prussia's highest chivalric rank. The honor elevated him to nobility as 'Adolph von Menzel.'" }
    ]
  },
  {
    slug: 'quentin-matsys-virgin-and-child-enthroned',
    description: `<p><a href="/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> devotional image around 1490. The Virgin Mary sits enthroned as Queen of Heaven, holding the infant Christ. Two angels hover above, preparing to crown her with an extraordinarily delicate golden crown. Two more angels serenade the pair with lute and harp.</p>

<p>Matsys lavished attention on surface details: the Virgin's purple-red mantle with gold embroidery and pearls, her blue dress lined with grey fur, the coral beads around Christ's neck. The luxurious carpet beneath the throne was among the most valuable items in 16th-century Northern Europe. The Christ child playfully tugs at a red bookmark in his mother's book. Born in Leuven, Matsys trained as an ironsmith before becoming a painter and founding the Antwerp school. The work measures 77.5 x 106.5 cm, oil on wood, and is in a private collection.</p>`,
    faqs: [
      { question: "What makes this painting luxurious?", answer: "Matsys depicted expensive materials: the Virgin's <strong>pearl-embroidered mantle</strong>, fur-lined dress, and a valuable Eastern carpet. Such details showed his skill at rendering textures." },
      { question: "What movement was Quentin Matsys part of?", answer: "<a href=\"/artist/quentin-matsys\"><strong>Matsys</strong></a> was a key figure of the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> and founder of the Antwerp school. He originally trained as an ironsmith before becoming a painter." },
      { question: "What is happening in the painting?", answer: "The Virgin sits enthroned holding the Christ child. Two angels prepare to <strong>crown her as Queen of Heaven</strong>, while two more play lute and harp." },
      { question: "What playful detail did Matsys include?", answer: "The <strong>infant Christ tugs at a red bookmark</strong> in his mother's book. Such naturalistic touches humanize the sacred scene." }
    ]
  },
  {
    slug: 'liverpool-quay-moonlight',
    description: `<p><a href="/artist/atkinson-grimshaw"><strong>John Atkinson Grimshaw</strong></a> painted this nocturne in 1887, depicting Liverpool's waterfront on a foggy evening. An omnibus with a green rear light has stopped on damp cobblestones to pick up a woman. Shop windows glow golden through the mist, their light reflecting on wet pavement in a characteristic effect Grimshaw repeated across many works.</p>

<p>The omnibus receding down a perfectly straight street creates depth. Grimshaw specialized in such urban nocturnes, capturing the <a href="/movement/romanticism"><strong>Romantic</strong></a> atmosphere of moonlit industrial cities. His friend James McNeill Whistler said, "I considered myself the inventor of nocturnes until I saw Grimmy's moonlight picture." Grimshaw concentrated on the interplay of artificial and natural light, fog and reflection. The work measures 61 x 91.4 cm, oil on canvas, and was purchased by <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> in 1967.</p>`,
    faqs: [
      { question: "What makes Grimshaw's nocturnes distinctive?", answer: "<a href=\"/artist/atkinson-grimshaw\"><strong>Grimshaw</strong></a> captured <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>wet cobblestones reflecting gaslight</strong></a> through fog with unmatched skill. His friend Whistler admitted being surpassed by 'Grimmy's moonlight picture.'" },
      { question: "Where can I see Liverpool Quay by Moonlight?", answer: "The painting hangs at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The museum purchased it in 1967." },
      { question: "What technique creates the depth in this painting?", answer: "An <strong>omnibus receding down a straight street</strong> draws the eye into the composition. Grimshaw repeated this effective device in many urban nocturnes." },
      { question: "What atmosphere does the painting capture?", answer: "The foggy evening shows Liverpool's waterfront where shop windows glow <strong>golden through mist</strong>, reflecting on damp pavement. It captures industrial-era urban romance." }
    ]
  },
  {
    slug: 'the-poor-fisherman',
    description: `<p><a href="/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> painted this <a href="/movement/symbolism"><strong>Symbolist</strong></a> work between 1879 and 1881. A fisherman stands at the front of his boat, arms folded as if in prayer, under a grey sky. On the sparse shore behind, a mother and naked child gather dandelions. Without literal description, Puvis conveys desolation and resignation: a widower with his two children in a bleak landscape.</p>

<p>The painting sparked controversy at the 1881 Salon. Critics attacked its flat color, lack of modeling, and refusal of traditional perspective. But younger artists—Seurat, Gauguin, Maurice Denis, and later Picasso—embraced exactly these qualities. Picasso's Blue Period shows direct influence. The work wasn't purchased until 1887, when dealer Paul Durand-Ruel intervened. It measures 155.5 x 192.5 cm, oil on canvas, and hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Why was The Poor Fisherman controversial?", answer: "Critics at the 1881 Salon attacked its <strong>flat colors and lack of traditional perspective</strong>. The French state didn't buy it until 1887, after dealer Durand-Ruel intervened." },
      { question: "Where can I see The Poor Fisherman?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Versions also exist at the National Museum of Western Art, Tokyo." },
      { question: "Who was influenced by this painting?", answer: "Seurat, Gauguin, Maurice Denis, and <strong>Picasso</strong> admired its stripped-down style. Direct comparisons exist between Puvis and Picasso's Blue Period." },
      { question: "What story does the painting tell?", answer: "<a href=\"/artist/pierre-puvis-de-chavannes\"><strong>Puvis</strong></a> depicts a <strong>widower with two children</strong> in a bleak landscape. The fisherman's prayer-like pose and grey sky suggest resignation to poverty." }
    ]
  },
  {
    slug: 'raoul-dufy-view-of-a-port',
    description: `<p><a href="/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> painted maritime subjects throughout his career, drawing on his birthplace of Le Havre on France's Channel coast. This harbor view demonstrates the bold colors and rapid brushwork he developed after encountering Matisse's <em>Luxe, Calme et Volupté</em> at the 1905 Salon des Indépendants, which drew him toward <a href="/movement/fauvism"><strong>Fauvism</strong></a>.</p>

<p>Dufy's port scenes capture boats, water, and sky with gestural strokes that suggest movement and light. Blue dominated his palette—it remained his favorite color throughout his life. The beach and harbor of Le Havre, flanked by jetties and the cliffs of Pays de Caux, provided settings for decades of experiments with color and atmosphere. His final years saw the "Black Cargo Ships" series, still exploring these themes. Dufy was also celebrated as a textile designer, printmaker, and decorator. This work shows his characteristic balance of observation and joyful improvisation.</p>`,
    faqs: [
      { question: "What art movement influenced Raoul Dufy?", answer: "Matisse's <em>Luxe, Calme et Volupté</em> at the 1905 Salon drew <a href=\"/artist/raoul-dufy\"><strong>Dufy</strong></a> toward <a href=\"/movement/fauvism\"><strong>Fauvism</strong></a>. He adopted bold colors and expressive brushwork for his maritime subjects." },
      { question: "Why did Dufy paint so many harbor scenes?", answer: "Dufy was born in <strong>Le Havre</strong> on France's Channel coast. The harbor, beaches, and cliffs provided subjects throughout his career, from early Fauvist works to his final Black Cargo Ships series." },
      { question: "What color dominated Dufy's paintings?", answer: "<strong>Blue</strong> was Dufy's favorite color throughout his life. His <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>port scenes</strong></a> often feature intense blues for sea and sky." },
      { question: "What else was Dufy known for besides painting?", answer: "Dufy was also celebrated as a <strong>textile designer, printmaker, and decorator</strong>. His decorative sensibility influenced his painting style, emphasizing pattern and color." }
    ]
  },
  {
    slug: 'giotto-isaac-blessing-jacob',
    description: `<p>This fresco, attributed to <a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> or a close associate, dates to around 1290 and forms part of the Old Testament cycle in the Upper Church of the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi. The elderly, blind Isaac extends his blessing to Jacob, who disguises himself as his older brother Esau to receive the inheritance. Rebekah, the boys' mother and conspirator, watches from behind.</p>

<p>The fresco shows early versions of Giotto's revolutionary techniques: figures occupy believable space, and the scene unfolds with psychological realism despite the cutaway wall revealing the interior. Some scholars attribute the work to the anonymous "Isaac Master" rather than Giotto himself, noting similarities to Pietro Cavallini's work in Rome. Regardless of attribution, the fresco influenced generations of painters including Fra Angelico and Masaccio. The image demonstrates how human drama could transform biblical narrative.</p>`,
    faqs: [
      { question: "Who painted Isaac Blessing Jacob?", answer: "The fresco is attributed to <a href=\"/artist/giotto\"><strong>Giotto</strong></a> or a close associate called the 'Isaac Master.' Some scholars suggest Pietro Cavallini based on similarities to his Roman work." },
      { question: "Where can I see this fresco?", answer: "The fresco remains in the Upper Church of the <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy, part of the Old Testament cycle." },
      { question: "What biblical story does it show?", answer: "Blind Isaac blesses his younger son <strong>Jacob, who disguises himself as Esau</strong> to steal the firstborn's inheritance. Their mother Rebekah watches, having planned the deception." },
      { question: "Why is this fresco art-historically important?", answer: "It shows early experiments with <strong>believable space and psychological realism</strong>. The innovations influenced Fra Angelico, Masaccio, and later <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painters." }
    ]
  },
  {
    slug: 'rembrandt-the-stoning-of-st-stephen',
    description: `<p>This is the first signed painting by <a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a>, created in 1625 when he was just nineteen. Stephen, the first Christian martyr, kneels in brilliant light as tormentors surround him with raised stones. In the background, Saul of Tarsus—the future Saint Paul—sits holding the cloaks of the stoners.</p>

<p>A diagonal divides the composition: shadow on the left (a mounted figure), light on the right (Stephen and his persecutors). The influence of Caravaggio and Adam Elsheimer is evident in the dramatic chiaroscuro. One figure behind Stephen appears to be a <strong>self-portrait</strong>—a young man with an alarmed expression who may be "having second thoughts," as scholar John Durham suggests. The work shows the precious, detailed style of the Leiden School. It measures 89.5 x 123.6 cm, oil on panel, and hangs at the <a href="/museum/private-collection-mus233e-des-beauxarts-de-lyon-l"><strong>Musée des Beaux-Arts de Lyon</strong></a>.</p>`,
    faqs: [
      { question: "Why is this painting significant in Rembrandt's career?", answer: "This is <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> first signed painting, created at age nineteen in 1625. It shows him already mastering dramatic light and complex narrative composition." },
      { question: "Where can I see The Stoning of Saint Stephen?", answer: "The painting hangs at the <a href=\"/museum/private-collection-mus233e-des-beauxarts-de-lyon-l\"><strong>Musée des Beaux-Arts de Lyon</strong></a> in France." },
      { question: "Who is shown in the painting besides Stephen?", answer: "<strong>Saul of Tarsus</strong> (later Saint Paul) sits in the background holding the cloaks of the stoners. One figure may be a self-portrait of the young Rembrandt himself." },
      { question: "What artistic influences shaped this early work?", answer: "The dramatic <a href=\"https://luxurywallart.com/collections/black-and-white-artwork\" target=\"_blank\" rel=\"noopener\"><strong>chiaroscuro</strong></a> shows influence of <strong>Caravaggio and Adam Elsheimer</strong>. The detailed style reflects the Leiden School tradition." }
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
