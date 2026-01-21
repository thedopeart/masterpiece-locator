const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'theodore-gericault',
    bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> painter <strong>Théodore Géricault</strong> (1791-1824) created one of art history's most powerful images of human suffering before dying at 32. Born in Rouen to a wealthy family, he trained under Carle Vernet and Pierre-Narcisse Guérin before developing an intensely physical style influenced by <a href="/artist/peter-paul-rubens"><strong>Rubens</strong></a> and <a href="/artist/michelangelo"><strong>Michelangelo</strong></a>. His early paintings of cavalry officers captured Napoleonic military spirit with dramatic energy.</p>

<p><strong>The Raft of the Medusa</strong> (1818-19) scandalized the Paris Salon with its harrowing depiction of survivors from a contemporary shipwreck. Géricault researched obsessively, interviewing survivors, studying corpses, and building a scale model of the raft. The painting criticized government incompetence that caused the disaster. Disappointed by its French reception, he exhibited it successfully in London. His final works included haunting portraits of asylum patients. A riding accident led to his early death. The <a href="/museum/louvre"><strong>Louvre</strong></a> holds <strong>The Raft of the Medusa</strong> and major works. The <a href="/museum/harvard-art-museums"><strong>Harvard Art Museums</strong></a> preserve important preparatory studies for his masterpiece.</p>`,
    faqs: [
      { question: "What art movement was Théodore Géricault part of?", answer: "Géricault was a pioneering figure in French <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>, emphasizing emotion, physicality, and contemporary subjects over classical idealization." },
      { question: "Where can I see The Raft of the Medusa?", answer: "<strong>The Raft of the Medusa</strong> (1818-19) hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It measures an enormous 16 by 23 feet." },
      { question: "What was The Raft of the Medusa about?", answer: "The painting depicts survivors of the 1816 shipwreck of the frigate <strong>Medusa</strong>. Government incompetence caused the disaster, and the painting served as political criticism." },
      { question: "How did Géricault research his masterpiece?", answer: "Géricault interviewed survivors, studied corpses and severed limbs, built a scale model of the raft, and had friends pose for the figures to achieve realistic detail." },
      { question: "What other subjects did Géricault paint?", answer: "Géricault painted horses, military subjects, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>. His final works included haunting studies of mental asylum patients preserved at museums in Lyon and Ghent." }
    ]
  },
  {
    slug: 'edouard-vuillard',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Édouard Vuillard</strong> (1868-1940) became the leading "Intimist" through his richly patterned domestic interiors. Born in Cuiseaux, he moved to Paris and attended the Lycée Condorcet, where he befriended future artists Maurice Denis and Ker-Xavier Roussel. In 1889, he joined the <strong>Nabis</strong>, a group influenced by Gauguin's Synthetism that advocated symbolic, decorative color over naturalistic representation.</p>

<p>Vuillard lived with his widowed mother, a dressmaker, until her death, and her cluttered workrooms became his primary subject. Flattened perspective, dense patterns, and muted earth tones characterize his interiors, where figures nearly dissolve into wallpaper and fabric. He also designed theater sets and painted large decorative panels for private homes and public buildings, including the Théâtre des Champs-Élysées. His late work returned to portraiture and documentary observation. Today the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> holds major paintings, while the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> Washington displays significant works. The <a href="/museum/museum-of-modern-art"><strong>Museum of Modern Art</strong></a> preserves decorative panels.</p>`,
    faqs: [
      { question: "What art movement was Édouard Vuillard part of?", answer: "Vuillard was a member of the <strong>Nabis</strong> group and a leading <strong>Intimist</strong> painter, focusing on domestic interiors with decorative, <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> patterns." },
      { question: "Where can I see Vuillard's paintings?", answer: "The <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> holds major works. Paintings also hang at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> and <a href=\"/museum/museum-of-modern-art\"><strong>MoMA</strong></a>." },
      { question: "What subjects did Vuillard paint?", answer: "Vuillard painted domestic interiors, often featuring his mother's dressmaking workroom. Figures blend into densely patterned wallpaper and fabrics in his characteristic <strong>Intimist</strong> style." },
      { question: "What were the Nabis?", answer: "The <strong>Nabis</strong> (Hebrew for 'prophets') were a group of <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> painters influenced by <a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a> who advocated symbolic, decorative color." },
      { question: "Did Vuillard create decorative works?", answer: "Yes, Vuillard painted large decorative panels for private homes and public buildings. His theater designs included work for the Théâtre de l'Oeuvre and Théâtre des Champs-Élysées." }
    ]
  },
  {
    slug: 'egon-schiele',
    bioFull: `<p><a href="/movement/expressionism"><strong>Expressionist</strong></a> painter <strong>Egon Schiele</strong> (1890-1918) created intensely psychological works exploring sexuality and mortality before dying at 28. Born in Tulln, Austria, he entered the Vienna Academy at 16 but left after three years, frustrated by conservative instruction. <a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> became his mentor, introducing him to models and patrons while encouraging his radical vision.</p>

<p>Schiele's <strong>unflinching self-portraits</strong> and nudes pushed boundaries with their angular distortions and explicit sexuality. In 1912, he was briefly imprisoned on pornography charges, and one of his drawings was publicly burned. His characteristic style featured emaciated figures, sharp contours, and raw emotional intensity. Despite controversy, he gained recognition before his death in the Spanish flu pandemic, just three days after his pregnant wife Edith. The <a href="/museum/leopold-museum"><strong>Leopold Museum</strong></a> in Vienna holds the world's largest Schiele collection with over 200 works. The <a href="/museum/albertina"><strong>Albertina</strong></a> and <a href="/museum/belvedere"><strong>Belvedere</strong></a> in Vienna also display significant paintings.</p>`,
    faqs: [
      { question: "What art movement was Egon Schiele part of?", answer: "Schiele was a leading Austrian <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a>, known for psychologically intense works that influenced figurative art throughout the 20th century." },
      { question: "Where can I see Schiele's paintings?", answer: "The <a href=\"/museum/leopold-museum\"><strong>Leopold Museum</strong></a> in Vienna holds the largest collection. Works also hang at the <a href=\"/museum/albertina\"><strong>Albertina</strong></a> and <a href=\"/museum/belvedere\"><strong>Belvedere</strong></a>." },
      { question: "Who mentored Egon Schiele?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> mentored Schiele, introducing him to models and patrons. Klimt recognized his talent and encouraged his radical artistic vision." },
      { question: "What subjects did Schiele paint?", answer: "Schiele painted intense <strong>self-portraits</strong>, nudes, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>. His angular figures and explicit sexuality provoked controversy and a brief imprisonment." },
      { question: "How did Schiele die?", answer: "Schiele died on October 31, 1918, during the <strong>Spanish flu</strong> pandemic. He was 28, just three days after his pregnant wife Edith died from the same illness." }
    ]
  },
  {
    slug: 'ford-madox-brown',
    bioFull: `<p><a href="/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite</strong></a> associate <strong>Ford Madox Brown</strong> (1821-1893) created morally complex history paintings while mentoring the movement's founders. Born in Calais to a British family, he trained in Belgium under painters including Romantic master Gustaf Wappers. In Paris, he copied Old Masters at the Louvre and exhibited at the French Salon before settling in London. When <a href="/artist/dante-gabriel-rossetti"><strong>Rossetti</strong></a> asked him to become his teacher, Brown connected with the Pre-Raphaelite circle despite never officially joining the Brotherhood.</p>

<p><strong>Work</strong> (1852-65) became his most ambitious painting, a complex allegory of Victorian labor showing a street excavation with figures representing all social classes. <strong>The Last of England</strong> (1855) poignantly depicts emigrants departing for Australia, the artist and his wife serving as models. Brown spent his final years painting Manchester Town Hall murals depicting the city's history. Today <strong>Work</strong> hangs at the <a href="/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>, while <strong>The Last of England</strong> is at the <a href="/museum/birmingham-museum-and-art-gallery"><strong>Birmingham Museum and Art Gallery</strong></a>. The <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> preserves additional works.</p>`,
    faqs: [
      { question: "Was Ford Madox Brown a Pre-Raphaelite?", answer: "Brown was closely associated with the <a href=\"/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelites</strong></a> and mentored <a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a>, but never officially joined the Brotherhood." },
      { question: "Where can I see the painting Work?", answer: "<strong>Work</strong> (1852-65) hangs at the <a href=\"/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a>. A smaller version is at the <a href=\"/museum/birmingham-museum-and-art-gallery\"><strong>Birmingham Museum</strong></a>." },
      { question: "What is The Last of England?", answer: "<strong>The Last of England</strong> (1855) depicts emigrants departing Britain. Brown and his wife modeled for the central <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figures</strong></a>. It hangs at the <a href=\"/museum/birmingham-museum-and-art-gallery\"><strong>Birmingham Museum</strong></a>." },
      { question: "What are the Manchester Murals?", answer: "Brown spent his final years painting <strong>twelve murals</strong> for Manchester Town Hall depicting the city's history from Roman times through the Industrial Revolution." },
      { question: "Who did Ford Madox Brown teach?", answer: "Brown briefly taught <a href=\"/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a>, who sought him out after admiring his work. This connection linked Brown to the Pre-Raphaelite movement." }
    ]
  },
  {
    slug: 'francesco-guardi',
    bioFull: `<p>Venetian <strong>vedutista</strong> <strong>Francesco Guardi</strong> (1712-1793) captured his native city with atmospheric brushwork that anticipated Impressionism. Born into a family of painters, he worked alongside his brother Gian Antonio on religious commissions before focusing on views of Venice after Gian Antonio's death in 1760. Though less commercially successful than his rival <a href="/artist/canaletto"><strong>Canaletto</strong></a> during his lifetime, Guardi's looser technique earned greater appreciation from later generations.</p>

<p>Where <a href="/artist/canaletto"><strong>Canaletto</strong></a> depicted Venice in crisp sunlight with precise architectural detail, Guardi painted clouded skies over a city at dusk, his buildings seeming to melt into the lagoon. His <strong>pittura di tocco</strong> (touch painting) used spirited brushstrokes and atmospheric effects that 19th-century critics and Impressionists would admire. In 1782, he received state commissions to document festive occasions for visiting dignitaries. He died in poverty, his career overshadowed by Canaletto's international fame. Today the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London holds major works, while paintings hang at the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> Washington.</p>`,
    faqs: [
      { question: "What type of paintings did Francesco Guardi create?", answer: "Guardi was a <strong>vedutista</strong>, painting views of Venice. Unlike <a href=\"/artist/canaletto\"><strong>Canaletto</strong></a>'s precise style, his atmospheric brushwork anticipated <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>." },
      { question: "Where can I see Guardi's paintings?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London holds major works. Paintings also hang at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> and <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a>." },
      { question: "How did Guardi differ from Canaletto?", answer: "<a href=\"/artist/canaletto\"><strong>Canaletto</strong></a> painted crisp, sunny views with architectural precision. Guardi showed Venice at dusk with loose brushwork and atmospheric <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>effects</strong></a>." },
      { question: "What is pittura di tocco?", answer: "<strong>Pittura di tocco</strong> (touch painting) describes Guardi's technique of spirited, visible brushstrokes that create atmospheric effects rather than precise detail." },
      { question: "Was Guardi successful during his lifetime?", answer: "Guardi struggled financially and died in poverty, overshadowed by <a href=\"/artist/canaletto\"><strong>Canaletto</strong></a>'s international fame. Later generations and Impressionists appreciated his technique more." }
    ]
  },
  {
    slug: 'frans-hals',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> master <strong>Frans Hals</strong> (c. 1582-1666) revolutionized portraiture through his spontaneous brushwork and ability to capture fleeting expressions. Born in Antwerp to a cloth merchant, his family fled to Haarlem during the Fall of Antwerp. He spent his entire career there, becoming a master in the local Guild of Saint Luke by 1610. His innovative technique influenced painters from <a href="/artist/rembrandt"><strong>Rembrandt</strong></a> to the Impressionists.</p>

<p>Hals's portraits seem to capture subjects mid-conversation or mid-laugh, an effect achieved through visible, confident brushstrokes that suggest rather than define form. <strong>The Laughing Cavalier</strong> (1624), with its enigmatic smile and virtuoso rendering of embroidered sleeves, became one of Baroque painting's most famous images. He also transformed group portraiture, animating militia company and regent portraits with lively compositions. Despite his success, Hals struggled financially throughout his life, supporting a large family. Today the <a href="/museum/frans-hals-museum"><strong>Frans Hals Museum</strong></a> in Haarlem preserves his group portraits. <strong>The Laughing Cavalier</strong> hangs at the <a href="/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Frans Hals part of?", answer: "Hals was a leading painter of the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, revolutionizing <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraiture</strong></a> with his spontaneous brushwork and lively characterizations." },
      { question: "Where can I see The Laughing Cavalier?", answer: "<strong>The Laughing Cavalier</strong> (1624) hangs at the <a href=\"/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London. Lord Hertford purchased it in 1865 for an enormous sum." },
      { question: "Where is the Frans Hals Museum?", answer: "The <a href=\"/museum/frans-hals-museum\"><strong>Frans Hals Museum</strong></a> in Haarlem, Netherlands preserves his major group portraits. The city was his lifelong home." },
      { question: "How did Hals influence later artists?", answer: "Hals's visible brushwork influenced <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> and later <a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> and <a href=\"/artist/van-gogh\"><strong>Van Gogh</strong></a>. Impressionists particularly admired his spontaneous technique." },
      { question: "What made Hals's portraits distinctive?", answer: "Hals captured <strong>fleeting expressions</strong> through confident brushstrokes that suggest movement and personality. His subjects appear caught mid-gesture or mid-laugh." }
    ]
  },
  {
    slug: 'gerard-ter-borch',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Gerard ter Borch</strong> (1617-1681) created refined genre scenes and portraits renowned for their rendering of luxurious fabrics. Born in Zwolle to an artist father, he showed remarkable talent by age eight and completed training in Haarlem before extensive travels through Germany, Italy, France, Spain, and England. King Philip IV of Spain sat for him, demonstrating his international reputation.</p>

<p>Ter Borch's paintings typically show <strong>elegant figures in domestic interiors</strong>, often engaged in letter-writing, music-making, or ambiguous romantic encounters. His virtuoso rendering of satin and silk became legendary, the fabrics almost tangible in their sheen and weight. He established conventions that influenced <a href="/artist/johannes-vermeer"><strong>Vermeer</strong></a>, <a href="/artist/gabriel-metsu"><strong>Metsu</strong></a>, and other painters of domestic scenes. In 1648, he witnessed the Peace of Westphalia and painted the ratification ceremony, recording history alongside his intimate interiors. Today works hang at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Gerard ter Borch part of?", answer: "Ter Borch was a leading painter of the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, creating refined genre scenes that influenced <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> and <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a>." },
      { question: "Where can I see ter Borch's paintings?", answer: "Works hang at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, and <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a>." },
      { question: "What was ter Borch famous for painting?", answer: "Ter Borch was legendary for rendering <strong>silk and satin</strong> fabrics with remarkable realism. He also excelled at depicting elegant <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in domestic settings." },
      { question: "What subjects did ter Borch paint?", answer: "Ter Borch painted genre scenes showing <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>elegant figures</strong></a> in domestic interiors, <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, and one important historical painting of the Peace of Westphalia." },
      { question: "Who did ter Borch influence?", answer: "Ter Borch's domestic scenes influenced <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a>, <a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>, and other Dutch painters of intimate interiors." }
    ]
  },
  {
    slug: 'robert-campin',
    bioFull: `<p><a href="/movement/early-netherlandish"><strong>Early Netherlandish</strong></a> master <strong>Robert Campin</strong> (c. 1375-1444) helped initiate the revolution in Northern European painting alongside <a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a>. Active in Tournai (now Belgium), he ran a successful workshop that trained <a href="/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> and Jacques Daret. Scholars identify him with the anonymous "Master of Flémalle," whose paintings show innovative realism and symbolic complexity.</p>

<p>Campin's works place <strong>sacred scenes in contemporary Flemish interiors</strong>, transforming religious subjects through meticulous observation of everyday objects. The <strong>Mérode Altarpiece</strong> (c. 1428) shows the Annunciation in a comfortable bourgeois room, every detail potentially symbolic. His figures possess solidity and psychological presence unknown in earlier art. The invention of oil painting allowed unprecedented effects of light and texture. Today the <a href="/museum/the-cloisters"><strong>Cloisters</strong></a> (Metropolitan Museum) displays the <strong>Mérode Altarpiece</strong>. Works attributed to him hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London, <a href="/museum/museo-del-prado"><strong>Prado</strong></a>, and the <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Robert Campin part of?", answer: "Campin was a founder of <a href=\"/movement/early-netherlandish\"><strong>Early Netherlandish</strong></a> painting alongside <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>, revolutionizing Northern European art through realistic detail." },
      { question: "Where can I see the Mérode Altarpiece?", answer: "The <strong>Mérode Altarpiece</strong> (c. 1428) is displayed at <a href=\"/museum/the-cloisters\"><strong>The Cloisters</strong></a>, the Metropolitan Museum's medieval branch in New York." },
      { question: "Who was the Master of Flémalle?", answer: "The <strong>Master of Flémalle</strong> is an anonymous painter now generally identified as Robert Campin, based on stylistic analysis and documentary evidence." },
      { question: "Who did Robert Campin train?", answer: "Campin trained <a href=\"/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> and Jacques Daret in his Tournai workshop, passing his innovative techniques to the next generation." },
      { question: "What made Campin's paintings innovative?", answer: "Campin placed <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious scenes</strong></a> in contemporary Flemish interiors with unprecedented realistic detail, using oil techniques for luminous effects." }
    ]
  },
  {
    slug: 'thomas-cole',
    bioFull: `<p><strong>Hudson River School</strong> founder <strong>Thomas Cole</strong> (1801-1848) established American landscape painting as a serious artistic pursuit. Born in Bolton-le-Moors, England, he immigrated with his family to Ohio in 1818. Largely self-taught, he moved to New York in 1825, where his Hudson Valley landscapes caught the attention of prominent artists who helped launch his career. He made the Catskill Mountains his spiritual and artistic home, painting from a studio at Cedar Grove.</p>

<p>Cole's <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> combined close observation of American wilderness with moral and philosophical meaning. <strong>The Oxbow</strong> (1836) contrasts cultivated farmland with untamed forest, questioning America's relationship with nature. His allegorical series <strong>The Course of Empire</strong> (1833-36) traces civilization's rise and fall through five paintings, while <strong>The Voyage of Life</strong> (1842) follows an individual's journey from birth to death. Cole trained <a href="/artist/frederic-edwin-church"><strong>Frederic Church</strong></a>, who continued the Hudson River tradition. Today the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> holds <strong>The Oxbow</strong>. The <a href="/museum/new-york-historical-society"><strong>New-York Historical Society</strong></a> displays <strong>The Course of Empire</strong>.</p>`,
    faqs: [
      { question: "What art movement did Thomas Cole found?", answer: "Cole founded the <strong>Hudson River School</strong>, America's first major art movement. His romantic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> established a tradition continued by <a href=\"/artist/frederic-edwin-church\"><strong>Church</strong></a> and others." },
      { question: "Where can I see The Oxbow?", answer: "<strong>The Oxbow</strong> (1836) hangs at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. It shows the Connecticut River from Mount Holyoke." },
      { question: "What is The Course of Empire?", answer: "<strong>The Course of Empire</strong> (1833-36) is a five-painting series showing civilization's rise and fall. It's displayed at the <a href=\"/museum/new-york-historical-society\"><strong>New-York Historical Society</strong></a>." },
      { question: "Where did Thomas Cole live and work?", answer: "Cole lived at <strong>Cedar Grove</strong> in Catskill, New York. His home is now the Thomas Cole National Historic Site and museum." },
      { question: "Who was Thomas Cole's most famous student?", answer: "<a href=\"/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> studied with Cole beginning in 1844 and became the Hudson River School's most celebrated second-generation painter." }
    ]
  },
  {
    slug: 'akseli-gallen-kallela',
    bioFull: `<p><a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Akseli Gallen-Kallela</strong> (1865-1931) became Finland's national artist through his powerful illustrations of the <strong>Kalevala</strong>, the Finnish national epic. Born Axel Gallén in Pori, he studied at the Finnish Art Society and the Académie Julian in Paris, where he befriended August Strindberg and encountered Symbolist ideas. He changed his name to Gallen-Kallela in 1907 to emphasize Finnish identity.</p>

<p>Gallen-Kallela's early work featured realistic peasant scenes before he turned to mythological subjects from the Kalevala, a collection of Finnish folk poetry compiled in the 1830s. Paintings like <strong>The Defense of the Sampo</strong> (1896) and <strong>Lemminkäinen's Mother</strong> (1897) transformed ancient myths into powerful national symbols during Finland's struggle for independence from Russia. He also designed furniture, textiles, and even uniforms for the Finnish army after independence in 1917. His former studio home at Tarvaspää near Helsinki is now the <a href="/museum/gallen-kallela-museum"><strong>Gallen-Kallela Museum</strong></a>. The <a href="/museum/ateneum"><strong>Ateneum</strong></a> in Helsinki displays major works including the <strong>Aino Triptych</strong>.</p>`,
    faqs: [
      { question: "What art movement was Akseli Gallen-Kallela part of?", answer: "Gallen-Kallela was associated with <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a> and National Romanticism. His work combined Finnish mythology with broader European artistic currents." },
      { question: "Where can I see Gallen-Kallela's paintings?", answer: "The <a href=\"/museum/ateneum\"><strong>Ateneum</strong></a> in Helsinki displays major works. His studio home is now the <a href=\"/museum/gallen-kallela-museum\"><strong>Gallen-Kallela Museum</strong></a> at Tarvaspää." },
      { question: "What is the Kalevala?", answer: "The <strong>Kalevala</strong> is Finland's national epic, compiled from folk poetry in the 1830s. Gallen-Kallela's illustrations of its myths became powerful symbols of Finnish identity." },
      { question: "What are Gallen-Kallela's most famous paintings?", answer: "<strong>The Defense of the Sampo</strong>, <strong>Lemminkäinen's Mother</strong>, and the <strong>Aino Triptych</strong> are his most celebrated works depicting Kalevala myths." },
      { question: "Did Gallen-Kallela only create paintings?", answer: "No, he also designed furniture, textiles, frescoes, and even Finnish army uniforms after independence. His multidisciplinary work shaped Finnish national visual identity." }
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
