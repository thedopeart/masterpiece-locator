const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 1: First 10 artists
const artistUpdates = [
  {
    slug: 'salvator-rosa',
    data: {
      bio: `<p><strong>Salvator Rosa</strong> (1615–1673) was an Italian <a href="/movement/baroque"><strong>Baroque</strong></a> painter, poet, and printmaker from Naples. He developed a rebellious artistic persona that made him one of the most colorful figures in 17th-century Italian art. Rosa trained initially under his uncle Domenico Antonio Greco and later with Jusepe de Ribera and Aniello Falcone in Naples.</p>

<p>Rosa gained recognition for his wild <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> populated with bandits, soldiers, and dramatic rocky outcrops. His paintings often featured stormy skies, rugged terrain, and figures engaged in mysterious or violent activities. This approach stood apart from the idealized classical landscapes popular at the time. He worked in Rome and Florence, where he served the Medici court for nearly a decade.</p>

<p>Beyond painting, Rosa wrote satirical poetry that frequently landed him in trouble with authorities. He's credited with helping establish the concept of the artistic genius as a wild, unconventional figure. His self-portraits often showed him in theatrical poses, reinforcing this image. Rosa's influence extended well beyond his lifetime, particularly inspiring <a href="/movement/romanticism"><strong>Romantic</strong></a> painters in the 18th and 19th centuries who admired his dramatic approach to nature.</p>

<p>Major collections of his work can be found at the <a href="/museum/louvre"><strong>Louvre Museum</strong></a> in Paris, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, and the Palazzo Pitti in Florence. His landscapes and battle scenes remain highly regarded for their emotional intensity and technical skill.</p>`,
      faqs: JSON.stringify([
        {
          question: "What art movement was Salvator Rosa part of?",
          answer: "Rosa worked within the <a href=\"/movement/baroque\"><strong>Italian Baroque</strong></a> tradition but developed a distinctive style featuring wild landscapes and dramatic scenes that would later influence <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>."
        },
        {
          question: "What subjects did Salvator Rosa paint?",
          answer: "He painted dramatic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> with bandits, battle scenes, witchcraft subjects, and philosophical allegories. His work often featured stormy skies and rugged terrain."
        },
        {
          question: "Where can I see Salvator Rosa paintings?",
          answer: "Major collections exist at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/prado\"><strong>Prado</strong></a>, and Palazzo Pitti in Florence."
        },
        {
          question: "Was Salvator Rosa only a painter?",
          answer: "No, Rosa was also a poet, actor, and musician. He wrote satirical verses that caused controversy and performed in theatrical productions in Florence."
        },
        {
          question: "Why is Salvator Rosa historically significant?",
          answer: "He helped create the image of the artist as a rebellious genius and pioneered the 'sublime' landscape style that deeply influenced 18th-century <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> painters."
        },
        {
          question: "When and where did Salvator Rosa live?",
          answer: "Rosa was born in Naples in 1615 and died in Rome in 1673. He worked primarily in Naples, Rome, and Florence during the Italian Baroque period."
        }
      ])
    }
  },
  {
    slug: 'william-holman-hunt',
    data: {
      bio: `<p><strong>William Holman Hunt</strong> (1827–1910) was an English painter and one of the founders of the <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848. Along with Dante Gabriel Rossetti and John Everett Millais, he sought to reform British art by rejecting the formulaic approaches taught at the Royal Academy and returning to the detailed, vivid style of early Italian and Flemish painters.</p>

<p>Hunt remained the most faithful to Pre-Raphaelite principles throughout his career. He insisted on painting outdoors directly from nature and traveled extensively to the Holy Land to ensure biblical accuracy in his religious works. His dedication to precise observation meant spending months on location, often in difficult conditions, to capture authentic light and landscape.</p>

<p>His most celebrated paintings include "The Light of the World" (1853), showing Christ knocking at an overgrown door, which became one of Victorian England's most reproduced images. "The Awakening Conscience" (1853) addressed moral themes through symbolism, while "The Scapegoat" (1856) was painted by the Dead Sea under extreme conditions. His <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual</strong></a> and moral subjects resonated strongly with Victorian audiences.</p>

<p>Hunt's meticulous technique involved building up layers of paint over a wet white ground to achieve luminous <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colors</strong></a>. His work can be seen at the <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, Manchester Art Gallery, and Birmingham Museum and Art Gallery. He received the Order of Merit in 1905 and wrote a detailed history of the Pre-Raphaelite movement before his death.</p>`,
      faqs: JSON.stringify([
        {
          question: "What movement did William Holman Hunt found?",
          answer: "Hunt co-founded the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848 with Dante Gabriel Rossetti and John Everett Millais, seeking to revive detailed naturalism in British art."
        },
        {
          question: "What is William Holman Hunt's most famous painting?",
          answer: "\"The Light of the World\" (1853) became one of Victorian England's most popular images, showing Christ with a lantern knocking at a door overgrown with weeds."
        },
        {
          question: "Where can I see William Holman Hunt paintings?",
          answer: "Major collections are at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>, Manchester Art Gallery, Birmingham Museum and Art Gallery, and Keble College Oxford."
        },
        {
          question: "Why did Hunt travel to the Holy Land?",
          answer: "He wanted complete accuracy in his biblical paintings, spending months in Palestine and the Dead Sea region to paint authentic landscapes and <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> scenes."
        },
        {
          question: "How did Hunt's technique differ from other Victorian painters?",
          answer: "He painted over wet white ground to achieve brilliant luminosity and worked entirely from nature, often outdoors in difficult conditions for months at a time."
        },
        {
          question: "Did Hunt remain Pre-Raphaelite throughout his career?",
          answer: "Yes, unlike other founders who evolved away from the movement, Hunt stayed true to <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> principles of detailed naturalism until his death in 1910."
        }
      ])
    }
  },
  {
    slug: 'bartolome-murillo',
    data: {
      bio: `<p><strong>Bartolomé Esteban Murillo</strong> (1617–1682) was the leading Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> painter of his generation, celebrated for his tender religious subjects and realistic genre scenes. Born in Seville, he spent most of his life there, becoming the city's most sought-after artist and helping establish its reputation as a major artistic center.</p>

<p>Murillo gained fame through a series of eleven paintings for the Franciscan monastery in Seville (1645–1646), depicting scenes from the lives of Franciscan saints. His style evolved from the dark tenebrism of earlier Spanish painting toward softer, more luminous compositions influenced by Venetian and Flemish masters. He developed what contemporaries called his "vaporous" manner, characterized by soft edges and warm atmospheric effects.</p>

<p>His <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious paintings</strong></a>, particularly his many versions of the Immaculate Conception, established visual types that remained influential for centuries. He also painted genre scenes of street children and common people with remarkable sympathy and naturalism, pioneering this subject in Spanish art.</p>

<p>Murillo founded the Seville Academy of Art in 1660, serving as its first president. His work fell from favor in the 19th century but has since been reassessed. Major collections exist at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the Seville Museum of Fine Arts. He died from injuries sustained falling from scaffolding while painting in Cadiz.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Bartolomé Murillo known for painting?",
          answer: "Murillo excelled at <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious subjects</strong></a>, especially the Immaculate Conception, and realistic genre scenes of street children in Seville."
        },
        {
          question: "What art movement was Murillo part of?",
          answer: "He worked in the Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> style, developing a softer, more luminous approach than earlier Spanish painters."
        },
        {
          question: "Where can I see Murillo paintings today?",
          answer: "Major works are at the <a href=\"/museum/prado\"><strong>Prado</strong></a> in Madrid, the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, and the Seville Museum of Fine Arts."
        },
        {
          question: "How did Murillo die?",
          answer: "He died in 1682 from injuries after falling from scaffolding while painting a large altarpiece at the Capuchin church in Cadiz, Spain."
        },
        {
          question: "Did Murillo teach other artists?",
          answer: "Yes, he founded the Seville Academy of Art in 1660 and served as its first president, training the next generation of Spanish painters."
        },
        {
          question: "What made Murillo's style distinctive?",
          answer: "He developed a \"vaporous\" technique with soft edges and warm atmospheric effects, moving away from the harsh contrasts of earlier <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painting."
        }
      ])
    }
  },
  {
    slug: 'correggio',
    data: {
      bio: `<p><strong>Antonio da Correggio</strong> (c. 1489–1534) was an Italian <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter who worked primarily in Parma. Though he never achieved the fame of his contemporaries Leonardo, Michelangelo, and Raphael during his lifetime, his innovative approach to light, color, and illusionistic ceiling painting profoundly influenced later <a href="/movement/baroque"><strong>Baroque</strong></a> art.</p>

<p>Little is known about Correggio's training, though he likely studied the works of Mantegna and Leonardo. His early paintings show Mantegna's influence, but he quickly developed a distinctive style marked by soft modeling, graceful figures, and atmospheric effects. His treatment of light gave his figures a luminous, almost ethereal quality that set his work apart.</p>

<p>His greatest achievements were the fresco decorations in Parma, particularly the dome of the Cathedral (1526–1530) depicting the Assumption of the Virgin. This dizzying composition of figures spiraling upward into heaven pioneered illusionistic techniques that would become standard in Baroque ceiling painting. His dome at San Giovanni Evangelista (1520–1524) similarly demonstrated revolutionary spatial effects.</p>

<p>Correggio's easel paintings of mythological subjects, including his sensuous treatments of Jupiter's loves, influenced generations of artists. His work can be seen at the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/prado"><strong>Prado</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and Parma's Galleria Nazionale. His soft, <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a> style directly anticipated the <a href="/movement/rococo"><strong>Rococo</strong></a> painters of the 18th century.</p>`,
      faqs: JSON.stringify([
        {
          question: "What is Correggio famous for?",
          answer: "He pioneered illusionistic ceiling painting with spiraling figures that influenced <a href=\"/movement/baroque\"><strong>Baroque</strong></a> art, and created sensuous mythological scenes with distinctive soft lighting."
        },
        {
          question: "Where did Correggio work?",
          answer: "He spent most of his career in Parma, Italy, where his major fresco cycles remain in the Cathedral and San Giovanni Evangelista church."
        },
        {
          question: "What art movement was Correggio part of?",
          answer: "He was a High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter, but his innovative techniques anticipated both <a href=\"/movement/baroque\"><strong>Baroque</strong></a> and <a href=\"/movement/rococo\"><strong>Rococo</strong></a> styles."
        },
        {
          question: "Where can I see Correggio paintings?",
          answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/prado\"><strong>Prado</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and Parma's Galleria Nazionale."
        },
        {
          question: "How did Correggio influence later artists?",
          answer: "His ceiling frescoes pioneered di sotto in sù (seen from below) perspective that became standard in <a href=\"/movement/baroque\"><strong>Baroque</strong></a> church decoration across Europe."
        },
        {
          question: "What subjects did Correggio paint?",
          answer: "He painted religious frescoes, altarpieces, and mythological subjects including sensuous depictions of Jupiter's loves that influenced later European painting."
        }
      ])
    }
  },
  {
    slug: 'david-teniers-younger',
    data: {
      bio: `<p><strong>David Teniers the Younger</strong> (1610–1690) was a Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter who became one of the most prolific and successful artists of the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>. Born in Antwerp to painter David Teniers the Elder, he trained under his father and developed into a versatile artist excelling in genre scenes, landscapes, and portraits.</p>

<p>Teniers married Anna Brueghel, daughter of Jan Brueghel the Elder, connecting him to one of Flanders' most distinguished artistic families. In 1651, he became court painter to Archduke Leopold Wilhelm, governor of the Spanish Netherlands in Brussels. There he served as keeper of the archduke's renowned art collection, producing numerous small-scale copies of Italian masterpieces that documented the holdings.</p>

<p>He's best known for lively peasant scenes showing <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>village life</strong></a>, tavern interiors, and rustic festivities. Unlike earlier peasant paintings that often mocked their subjects, Teniers depicted common folk with warmth and good humor. His technique featured silvery light, subtle tonal harmonies, and loose, confident brushwork.</p>

<p>Teniers helped found the Antwerp Academy in 1663 and continued painting until his death. His enormous output, estimated at over 2,000 works, spread across European collections. Major holdings exist at the <a href="/museum/prado"><strong>Prado</strong></a>, <a href="/museum/hermitage"><strong>Hermitage</strong></a>, <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> Vienna. His genre paintings influenced artists well into the 18th century.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was David Teniers the Younger known for?",
          answer: "He excelled at peasant genre scenes, tavern interiors, and village festivities painted with warmth and silvery light, depicting <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>common folk</strong></a> sympathetically."
        },
        {
          question: "What art movement was Teniers part of?",
          answer: "He worked in the Flemish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition during the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, specializing in genre painting."
        },
        {
          question: "Who did Teniers work for?",
          answer: "From 1651, he served Archduke Leopold Wilhelm as court painter and picture gallery curator, documenting the famous collection in small painted copies."
        },
        {
          question: "Where can I see Teniers paintings?",
          answer: "Major collections exist at the <a href=\"/museum/prado\"><strong>Prado</strong></a>, <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a>."
        },
        {
          question: "How many paintings did Teniers create?",
          answer: "His enormous output is estimated at over 2,000 works, making him one of the most prolific painters of the 17th century."
        },
        {
          question: "Was Teniers connected to other famous artists?",
          answer: "Yes, his father was painter David Teniers the Elder, and he married Anna Brueghel, daughter of Jan Brueghel the Elder."
        }
      ])
    }
  },
  {
    slug: 'francisco-de-zurbaran',
    data: {
      bio: `<p><strong>Francisco de Zurbarán</strong> (1598–1664) was a Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> painter known for his powerful religious imagery featuring stark contrasts of light and shadow. Born in Extremadura, he trained in Seville and became that city's leading religious painter during the 1630s, earning the title "painter to the king" from Philip IV in 1634.</p>

<p>Zurbarán's distinctive style combined intense tenebrism, influenced by Caravaggio, with a sense of austere spirituality perfectly suited to Counter-Reformation Spain. His figures often appear sculptural, isolated against dark backgrounds, their <a href="https://luxurywallart.com/collections/white-art" target="_blank" rel="noopener"><strong>white robes</strong></a> rendered with remarkable attention to the folds and textures of fabric.</p>

<p>He received major commissions from monastic orders, producing cycles depicting the lives of saints for Carthusian, Franciscan, Dominican, and Hieronymite monasteries. These works show monks in meditation and ecstasy with psychological depth and technical mastery. His still life paintings, though fewer in number, rank among the finest of the Spanish Baroque.</p>

<p>Zurbarán's career declined after 1640 when Murillo's softer style gained favor in Seville. He moved to Madrid in 1658, where he struggled financially until his death. His work was largely forgotten until the 19th century but is now celebrated for its spiritual intensity. Major collections exist at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the Seville Museum of Fine Arts.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Zurbarán known for painting?",
          answer: "He specialized in <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious subjects</strong></a>, particularly monks in meditation, with dramatic lighting and remarkably detailed white robes."
        },
        {
          question: "What art movement was Zurbarán part of?",
          answer: "He was a leading Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter, known for his tenebristic style influenced by Caravaggio."
        },
        {
          question: "Where can I see Zurbarán paintings?",
          answer: "Major works are at the <a href=\"/museum/prado\"><strong>Prado</strong></a>, the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, Seville Museum of Fine Arts, and the Monastery of Guadalupe."
        },
        {
          question: "Who commissioned Zurbarán's paintings?",
          answer: "Spanish monastic orders were his main patrons, including Carthusians, Franciscans, Dominicans, and Hieronymites who commissioned cycles of saints' lives."
        },
        {
          question: "How did Zurbarán depict fabric?",
          answer: "His rendering of <a href=\"https://luxurywallart.com/collections/white-art\" target=\"_blank\" rel=\"noopener\"><strong>white monastic robes</strong></a> became legendary, capturing every fold and texture with sculptural precision against dark backgrounds."
        },
        {
          question: "Why did Zurbarán's career decline?",
          answer: "After 1640, Murillo's softer, more accessible style became fashionable in Seville, overshadowing Zurbarán's austere approach to religious painting."
        }
      ])
    }
  },
  {
    slug: 'hieronymus-bosch',
    data: {
      bio: `<p><strong>Hieronymus Bosch</strong> (c. 1450–1516) was a Netherlandish painter whose fantastical imagery and complex symbolism have fascinated viewers for five centuries. Born Jheronimus van Aken in 's-Hertogenbosch (from which his name derives), he spent his entire life in this prosperous Brabant town, becoming a respected member of the Brotherhood of Our Lady.</p>

<p>Bosch's paintings depict moral and religious subjects through elaborate scenes populated by bizarre hybrid creatures, tormented sinners, and dreamlike <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>. His triptychs, including "The Garden of Earthly Delights," "The Last Judgment," and "The Haywain," present humanity's fall and punishment through imagery that remains startling today.</p>

<p>Despite his fame, little documentation of Bosch's life survives. His paintings drew on medieval manuscript illumination, folk traditions, and alchemical symbolism, though scholars continue debating their precise meanings. The monsters and demons that populate his hell scenes may represent sins, while his garden scenes likely warn against earthly pleasures.</p>

<p>Philip II of Spain became an avid collector of Bosch's work, which explains why the <a href="/museum/prado"><strong>Museo del Prado</strong></a> holds the world's finest collection. Other major works reside at the <a href="/museum/louvre"><strong>Louvre</strong></a>, Vienna's <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a>, and Rotterdam's Museum Boijmans Van Beuningen. His influence extends from <a href="/movement/surrealism"><strong>Surrealism</strong></a> to contemporary fantasy art.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Hieronymus Bosch known for?",
          answer: "He created fantastical religious paintings filled with bizarre creatures, demons, and dreamlike scenes warning against sin, including <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre</strong></a> depictions of hell."
        },
        {
          question: "What is Bosch's most famous painting?",
          answer: "\"The Garden of Earthly Delights\" triptych at the <a href=\"/museum/prado\"><strong>Prado</strong></a> is his most celebrated work, depicting paradise, earthly pleasures, and hell's punishments."
        },
        {
          question: "Where can I see Bosch paintings?",
          answer: "The <a href=\"/museum/prado\"><strong>Prado</strong></a> has the finest collection. Other works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a>, and Museum Boijmans Van Beuningen."
        },
        {
          question: "What art movement was Bosch part of?",
          answer: "He worked in the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition but developed a unique personal style that later influenced <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>."
        },
        {
          question: "What do Bosch's paintings mean?",
          answer: "Scholars debate interpretations, but most agree his imagery warns against sin and earthly pleasures, drawing on religious teachings, folklore, and possibly alchemical symbolism."
        },
        {
          question: "Where did Bosch live and work?",
          answer: "He spent his entire life in 's-Hertogenbosch in the Netherlands, where he was a respected member of the religious Brotherhood of Our Lady."
        }
      ])
    }
  },
  {
    slug: 'petrus-christus',
    data: {
      bio: `<p><strong>Petrus Christus</strong> (c. 1410–1475) was an Early Netherlandish painter who became the leading artist in Bruges after the death of Jan van Eyck in 1441. Though long overshadowed by Van Eyck's reputation, Christus made significant contributions to Flemish painting, including pioneering the use of geometric perspective.</p>

<p>Little is known of Christus's origins, though he likely came from the village of Baarle in Brabant. He became a citizen of Bruges in 1444, possibly having worked in Van Eyck's workshop. The extent of his relationship with Van Eyck remains debated, but he certainly completed at least one painting left unfinished at the master's death.</p>

<p>Christus developed a more simplified approach than Van Eyck, with figures set in coherent spatial environments using one-point perspective, a technique still new to Northern art. His <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> placed subjects against plain backgrounds or within domestic interiors, creating an intimate atmosphere distinct from Van Eyck's elaborate settings.</p>

<p>His major works include "Portrait of a Carthusian" (Metropolitan Museum), "A Goldsmith in His Shop" (Metropolitan Museum), and the "Lamentation" altarpiece (Brussels). He may have traveled to Italy around 1456, potentially spreading Northern techniques there. Works by Christus are rare, with major examples at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and <a href="/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie Berlin</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "Who was Petrus Christus?",
          answer: "He was the leading painter in Bruges after Jan van Eyck's death, known for <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and religious works using early geometric perspective."
        },
        {
          question: "What art movement was Petrus Christus part of?",
          answer: "He belonged to the Early Netherlandish or <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> school, working in the tradition established by Jan van Eyck."
        },
        {
          question: "Where can I see Petrus Christus paintings?",
          answer: "Major works are at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and <a href=\"/museum/gemaldegalerie-berlin\"><strong>Gemäldegalerie Berlin</strong></a>."
        },
        {
          question: "What was Christus's relationship with Jan van Eyck?",
          answer: "He likely worked with Van Eyck and completed at least one painting the master left unfinished, though the exact relationship remains debated by scholars."
        },
        {
          question: "What innovations did Petrus Christus bring to painting?",
          answer: "He pioneered the use of one-point geometric perspective in Northern painting and developed a more simplified spatial approach than earlier Flemish masters."
        },
        {
          question: "What is Petrus Christus's most famous painting?",
          answer: "\"A Goldsmith in His Shop\" (1449) at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> shows a detailed interior scene and may be the earliest surviving genre painting."
        }
      ])
    }
  },
  {
    slug: 'caspar-david-friedrich',
    data: {
      bio: `<p><strong>Caspar David Friedrich</strong> (1774–1840) was a German <a href="/movement/romanticism"><strong>Romantic</strong></a> landscape painter whose contemplative scenes of nature became iconic expressions of 19th-century Romantic philosophy. Born in Greifswald on the Baltic coast, he studied at the Copenhagen Academy before settling in Dresden, where he spent most of his career.</p>

<p>Friedrich's paintings typically show solitary figures contemplating vast <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, creating what he called "the landscape of the soul." His most famous work, "Wanderer Above the Sea of Fog" (c. 1818), epitomizes this approach, presenting a lone figure from behind as he surveys a misty mountain panorama. The viewer shares the figure's perspective, drawn into meditation on nature's sublime power.</p>

<p>Religious symbolism pervades his work, with crosses, ruined Gothic churches, and bare oak trees suggesting spiritual themes without depicting traditional religious subjects. He often painted sites along the Baltic coast and the mountains of Saxony, transforming familiar German scenery into profound meditations on human existence.</p>

<p>Friedrich achieved considerable success in his lifetime but fell from favor after his death. Rediscovered in the early 20th century, he's now considered Germany's greatest Romantic painter. Major collections exist at the <a href="/museum/alte-nationalgalerie"><strong>Alte Nationalgalerie</strong></a> Berlin, Dresden's Gemäldegalerie, and Hamburg's Kunsthalle. His influence extends to German Expressionism and contemporary landscape photography.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Caspar David Friedrich known for?",
          answer: "He painted contemplative <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> with solitary figures facing vast nature scenes, expressing <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> philosophy through imagery."
        },
        {
          question: "What is Friedrich's most famous painting?",
          answer: "\"Wanderer Above the Sea of Fog\" (c. 1818) shows a figure from behind surveying misty mountains, becoming an icon of <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> art."
        },
        {
          question: "Where can I see Caspar David Friedrich paintings?",
          answer: "Major collections are at <a href=\"/museum/alte-nationalgalerie\"><strong>Alte Nationalgalerie</strong></a> Berlin, Dresden's Gemäldegalerie, and Hamburg's Kunsthalle."
        },
        {
          question: "What symbols appear in Friedrich's paintings?",
          answer: "He used crosses, ruined Gothic churches, bare oak trees, and misty distances to suggest spiritual themes and human mortality within <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a>."
        },
        {
          question: "What movement was Friedrich part of?",
          answer: "He was the leading German <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> painter, emphasizing emotion, nature's power, and individual contemplation over classical ideals."
        },
        {
          question: "Where did Caspar David Friedrich live and work?",
          answer: "Born in Greifswald on the Baltic, he trained in Copenhagen and spent most of his career in Dresden, painting German coastal and mountain scenes."
        }
      ])
    }
  },
  {
    slug: 'claude-lorrain',
    data: {
      bio: `<p><strong>Claude Lorrain</strong> (c. 1600–1682), born Claude Gellée, was a French painter who spent most of his career in Rome and became the most influential landscape painter of the 17th century. His idealized <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>pastoral landscapes</strong></a> bathed in golden light established conventions that dominated European landscape painting for two centuries.</p>

<p>Born in the Lorraine region of France, Claude traveled to Rome as a young man and remained there for life except for brief periods. He studied under landscape painter Agostino Tassi and developed his distinctive style combining classical architecture, distant harbors, and carefully graduated atmospheric effects. His paintings typically show the warm glow of sunrise or sunset filtering through trees and illuminating ancient ruins.</p>

<p>Claude worked primarily for wealthy patrons, including Pope Urban VIII and several Roman aristocratic families. To combat forgeries of his popular works, he created the Liber Veritatis, a book of drawings documenting his authentic paintings. Biblical and mythological figures appear in his landscapes, but nature and light remain the true subjects.</p>

<p>His influence extended particularly to English collectors and painters. The English landscape garden movement sought to recreate Claudian scenes in actual parkland. Turner revered him deeply, bequeathing paintings to the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> on condition they hang beside Claudes. Major collections exist at the <a href="/museum/louvre"><strong>Louvre</strong></a>, National Gallery London, and <a href="/museum/prado"><strong>Prado</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Claude Lorrain known for?",
          answer: "He painted idealized <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> with golden light, classical ruins, and distant harbors that defined European landscape painting for two centuries."
        },
        {
          question: "Where did Claude Lorrain work?",
          answer: "Though French by birth, he spent most of his career in Rome, painting Italian scenery for wealthy patrons including Pope Urban VIII."
        },
        {
          question: "Where can I see Claude Lorrain paintings?",
          answer: "Major collections exist at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/prado\"><strong>Prado</strong></a>, and the Doria Pamphilj Gallery in Rome."
        },
        {
          question: "What is the Liber Veritatis?",
          answer: "Claude created this book of drawings documenting his authentic paintings to combat forgeries. It remains an invaluable record of his approximately 200 paintings."
        },
        {
          question: "How did Claude Lorrain influence later art?",
          answer: "His work shaped English landscape gardening and deeply influenced painters including Turner, Constable, and the Hudson River School artists."
        },
        {
          question: "What movement was Claude Lorrain part of?",
          answer: "He worked in the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period, developing the classical landscape tradition that balanced idealized nature with architectural elements."
        }
      ])
    }
  }
];

async function updateArtists() {
  console.log('Starting batch 1 artist updates...');

  for (const artist of artistUpdates) {
    try {
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          bioFull: artist.data.bio,
          faqs: artist.data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artist.slug}`, error.message);
    }
  }

  console.log('Batch 1 complete!');
}

updateArtists()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
