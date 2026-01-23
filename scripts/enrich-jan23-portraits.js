/**
 * Enrich 20 portrait artworks with descriptions and FAQs (Jan 23)
 * Run: node scripts/enrich-jan23-portraits.js
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'gustave-courbet-portrait-of-countess-therese-burnswick',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this portrait of <strong>Countess Therese Brunswick</strong>, a Hungarian noblewoman who held a significant place in musical history. She was closely associated with Ludwig van Beethoven and is believed to have inspired his famous "Moonlight Sonata." The countess was known for her intellectual pursuits and defiance of societal conventions.</p>
<p>Courbet approached the portrait with his characteristic Realist directness. The countess meets the viewer's gaze confidently, her posture suggesting strength and independence. While Courbet would later become famous for controversial paintings like "The Stone Breakers" and "A Burial at Ornans," portraits like this one demonstrate his range as an artist.</p>
<p>The painting is currently in a private collection. Courbet's ability to capture both physical likeness and psychological depth made him one of the most important <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>portrait</strong></a> painters of the nineteenth century.</p>`,
    faqs: [
      {
        question: "Who was Countess Therese Brunswick?",
        answer: "<strong>Countess Therese Brunswick</strong> was a Hungarian noblewoman associated with Ludwig van Beethoven. She may have inspired his \"Moonlight Sonata\" and was known for her intellectual independence."
      },
      {
        question: "Where is this painting now?",
        answer: "The portrait is held in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> painted it in the Realist style that would define his career."
      },
      {
        question: "What style is this portrait?",
        answer: "The painting represents <strong>Romanticism</strong> transitioning toward Realism. Courbet would later become the leading figure of the French Realist movement."
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-cristina-my-sister',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of her sister Cristina in 1928, making it the only painting she ever made of her sibling. The oil on wood measures 99 by 81.5 centimeters and represents one of Kahlo's earliest works, painted while she was still recovering from the devastating bus accident that had left her bedridden.</p>
<p>Cristina was born in June 1908, only eleven months after Frida. She was nineteen or twenty when she posed for this portrait. The painting already shows the stylistic influence of Diego Rivera, whom Kahlo would marry the following year. The sisters' relationship would later be complicated by Cristina's affair with Diego, one of the most painful betrayals in Kahlo's life.</p>
<p>The portrait sold at Christie's in November 2023 as part of music executive Jerry Moss's collection, having previously sold for $1.7 million in 2001. It's currently in a private collection, a rare early work capturing the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> who shaped Kahlo's art.</p>`,
    faqs: [
      {
        question: "Who was Cristina Kahlo?",
        answer: "<strong>Cristina Kahlo</strong> (1908-1964) was Frida's younger sister, born just eleven months after her. She later had an affair with Diego Rivera, causing Frida great pain."
      },
      {
        question: "When was this portrait painted?",
        answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> painted this in <strong>1928</strong>, early in her career while recovering from her accident. It's the only portrait she ever made of her sister."
      },
      {
        question: "Where is this painting now?",
        answer: "The painting is in a <strong>private collection</strong>. It sold at Christie's in November 2023 after being part of music executive Jerry Moss's collection."
      }
    ]
  },
  {
    slug: 'gustave-moreau-portrait-of-degas-in-florence',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> drew this portrait of the young Edgar Degas in Florence during 1858-1859, documenting a friendship that would prove significant for both artists. The two had met in Rome in early 1858 and reconnected in Florence later that year. Together they visited Siena and Pisa in March 1859.</p>
<p>Moreau became something of a mentor to the younger Degas during their Italian travels. Before Christmas 1858, they explored the Uffizi together, with Degas eager to show Moreau Botticelli's "Primavera." Moreau, however, preferred the "Birth of Venus" and made a small copy of it. Each artist created at least one portrait of the other during this period.</p>
<p>The drawing is now held at the <a href="/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musee National Gustave Moreau</strong></a> in Paris. Their friendship later cooled as Degas embraced Impressionism while Moreau pursued Symbolist history painting. "You pretend to renew art through ballet?" Moreau once asked. "And you think you will do it by jewelry?" Degas replied.</p>`,
    faqs: [
      {
        question: "Where did Moreau and Degas meet?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> met Edgar Degas in <strong>Rome in early 1858</strong>. They reconnected in Florence and traveled together to Siena and Pisa in 1859."
      },
      {
        question: "Where is this drawing displayed?",
        answer: "The portrait is held at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musee National Gustave Moreau</strong></a> in Paris, a testimony to the friendship between the two young artists."
      },
      {
        question: "What happened to their friendship?",
        answer: "Their paths diverged as Degas embraced <strong>Impressionism</strong> while Moreau pursued Symbolist history painting. They remained acquaintances, with Degas attending Moreau's funeral in 1898."
      }
    ]
  },
  {
    slug: 'diego-velazquez-portrait-of-don-luis-de-gongora-y-argote',
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velazquez</strong></a> painted this portrait of the celebrated poet <strong>Luis de Gongora</strong> in 1622, during his first trip to the royal court in Madrid. The commission came through Velazquez's teacher Francisco Pacheco, who wanted a portrait of the famous writer. The result was much admired in Madrid and likely helped secure Velazquez's appointment as court painter.</p>
<p>Gongora (1561-1627) was one of Spain's greatest poets. The publication of his "Solitudes" and "Polyphemus" in 1613 made him one of the most celebrated and controversial writers of his era. Velazquez captured him with the psychological intensity that would become his trademark, influenced by Caravaggio's dramatic chiaroscuro lighting.</p>
<p>The original portrait is now at the Museum of Fine Arts, Boston. A version hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a>, though technical analysis suggests it dates from slightly later. The portrait measures 40.5 by 50.3 centimeters.</p>`,
    faqs: [
      {
        question: "Who was Luis de Gongora?",
        answer: "<strong>Luis de Gongora</strong> (1561-1627) was one of Spain's greatest poets. His works \"Solitudes\" and \"Polyphemus\" (1613) made him famous and controversial throughout the Spanish-speaking world."
      },
      {
        question: "Where can I see this portrait?",
        answer: "The original is at the Museum of Fine Arts, Boston. A version hangs at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>, though its attribution is debated."
      },
      {
        question: "Why was this portrait important for Velazquez?",
        answer: "Painted during <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velazquez's</strong></a> first court visit in 1622, this portrait's success likely helped secure his appointment as <strong>court painter</strong> to King Philip IV."
      }
    ]
  },
  {
    slug: 'august-macke-portrait-of-dr160ludwig160deubner-writing',
    description: `<p><a href="/apps/masterpieces/artist/august-macke"><strong>August Macke</strong></a> created this portrait of Dr. Ludwig Deubner in 1903, capturing the subject absorbed in writing. The work shows Macke's early development before he became one of the leading figures of German <strong>Expressionism</strong> and a founder of Der Blaue Reiter (The Blue Rider) group.</p>
<p>Macke's vitality and love for life led him to experiment constantly, developing a personal variant of Cubism based on his special relationship with color. Unlike the more theoretical Kandinsky and Marc, he preferred simple, everyday scenes. This early portrait demonstrates his gift for observing human activity with warmth and directness.</p>
<p>The painting is currently in a private collection. Macke's career was tragically brief. He was killed in September 1914 at age twenty-seven during the First World War, just two months after its outbreak. His work remains among the most beloved of the German Expressionist movement.</p>`,
    faqs: [
      {
        question: "What art movement was Macke part of?",
        answer: "<a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a> was a founder of <strong>Der Blaue Reiter</strong> (The Blue Rider), a key German Expressionist group. He worked alongside Kandinsky and Franz Marc."
      },
      {
        question: "Where is this portrait now?",
        answer: "The painting is held in a <strong>private collection</strong>. It dates from 1903, early in Macke's career before his Expressionist period."
      },
      {
        question: "What happened to August Macke?",
        answer: "Macke was killed at age <strong>twenty-seven</strong> in September 1914, just two months after World War I began. His promising career was tragically cut short."
      }
    ]
  },
  {
    slug: 'maurice-quentin-de-la-tour-portrait-of-duval-de-l39epinoy',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this <strong>pastel portrait</strong> in 1745, showing Monsieur Duval de l'Epinoy, a French nobleman prominent at the court of Louis XV. The subject wears an elegant blue velvet jacket and wide-brimmed hat, seated with one hand resting on a nearby table.</p>
<p>De La Tour was the most celebrated portrait painter at the French court, known for capturing the personalities of high society with remarkable psychological insight. He used a technique called "clair-obscur" to create the illusion of soft light illuminating the subject's face. The composition places the subject slightly off-center, creating a sense of movement and dynamism.</p>
<p>The portrait now hangs at the <a href="/apps/masterpieces/museum/calouste-gulbenkian-museum-lisbon-portugal"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon, Portugal. De La Tour's pastel technique achieved remarkable subtlety, making him one of the finest portraitists of the <strong>Rococo</strong> period.</p>`,
    faqs: [
      {
        question: "What medium did de La Tour use?",
        answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>De La Tour</strong></a> worked in <strong>pastel</strong>, achieving remarkable subtlety with this dry medium. He was the leading portrait pastellist at the court of Louis XV."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The portrait hangs at the <a href=\"/apps/masterpieces/museum/calouste-gulbenkian-museum-lisbon-portugal\"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon, Portugal."
      },
      {
        question: "What style is this painting?",
        answer: "The portrait exemplifies <strong>Rococo</strong> portraiture with its elegant subject matter, refined technique, and emphasis on capturing aristocratic personality."
      }
    ]
  },
  {
    slug: 'berthe-morisot-portrait-of-edma-pontillon',
    description: `<p><a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> painted this intimate portrait of her sister Edma around 1871. Edma Pontillon, nee Morisot, had been a fellow painter before her marriage, when she gave up her artistic career as was expected of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> at the time. The subject gazes directly at the viewer with a calm, contemplative expression.</p>
<p>The two sisters had painted side by side since childhood and exhibited together at the Paris Salon. When Edma married and stopped painting, Berthe continued alone, becoming a founding member of the Impressionist group. This portrait carries personal weight, capturing not just a sibling but a lost artistic companion.</p>
<p>Morisot rendered her sister's dark clothing with soft treatment of light and shadow, the floral upholstery providing contrast. The painting now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> in Paris, a testament to the intimate subjects that characterized Morisot's <strong>Impressionist</strong> work.</p>`,
    faqs: [
      {
        question: "Who was Edma Pontillon?",
        answer: "<strong>Edma Pontillon</strong> was Berthe Morisot's sister and a fellow painter. She abandoned her artistic career after marriage, as was expected of women in that era."
      },
      {
        question: "Where can I see this portrait?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, France. Morisot painted multiple portraits of her sister over the years."
      },
      {
        question: "What art movement was Berthe Morisot part of?",
        answer: "<a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> was a founding member of <strong>Impressionism</strong>. She was one of only a few women in the movement's core group."
      }
    ]
  },
  {
    slug: 'raphael-portrait-of-elizabeth-gonzaga',
    description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this portrait of <strong>Elisabetta Gonzaga</strong>, Duchess of Urbino, around 1504-1505. The oil on wood measures 52.9 by 37.4 centimeters. On her extremely pale forehead sits a distinctive jewel shaped like a scorpion containing a precious stone.</p>
<p>The scorpion ornament may be an amorous symbol, or it could reference Scorpio, the astrological sign linked to fertility. This would have been a hopeful charm for the duchess, who could not have children due to her husband's sterility. Raphael's ultra-fine painting technique shows influence from Flemish artists he would have seen in Urbino, particularly Justus van Gent.</p>
<p>The portrait came to Florence in 1635 as part of Vittoria Della Rovere's dowry. It was attributed to various artists before being recognized as Raphael's work in 1905. Today it hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> alongside a portrait of her husband, Duke Guidobaldo I.</p>`,
    faqs: [
      {
        question: "What is the scorpion jewel on her forehead?",
        answer: "The <strong>scorpion ornament</strong> may be an amorous symbol or refer to Scorpio, the astrological sign linked to fertility. It may have been a hopeful charm, as the duchess was childless."
      },
      {
        question: "Where can I see this portrait?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, displayed alongside a portrait of her husband, Duke Guidobaldo I of Urbino."
      },
      {
        question: "When was this attributed to Raphael?",
        answer: "The portrait was first attributed to <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> in <strong>1905</strong>. Earlier catalogues listed it as by Giovanni Bellini's school or Andrea Mantegna."
      }
    ]
  },
  {
    slug: 'dante-gabriel-rossetti-portrait-of-elizabeth-siddal',
    description: `<p><a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> created numerous portraits of <strong>Elizabeth Siddal</strong>, his muse and later his wife. Siddal was discovered working in a hat shop in Leicester Square around 1849-1850 and became one of the most famous faces of the Victorian age. She modeled for several Pre-Raphaelite artists before working exclusively with Rossetti from 1851.</p>
<p>Siddal was more than a passive "stunner," as the Pre-Raphaelite beauties were called. She was an artist herself, the only woman to exhibit alongside the Pre-Raphaelite Brotherhood at the 1857 Russell Place exhibition. She wrote poetry and chose literary subjects for her own paintings, sharing the group's passion for literature.</p>
<p>This portrait is held at the <a href="/apps/masterpieces/museum/delaware-art-museum-wilmington-de-us"><strong>Delaware Art Museum</strong></a> in Wilmington. Rossetti drew and painted Siddal obsessively, making her one of the most depicted <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> in Pre-Raphaelite art. She died tragically in 1862 from a laudanum overdose.</p>`,
    faqs: [
      {
        question: "Who was Elizabeth Siddal?",
        answer: "<strong>Elizabeth Siddal</strong> (1829-1862) was a Pre-Raphaelite model, artist, and poet. She married <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> in 1860 and was the only woman to exhibit with the Brotherhood."
      },
      {
        question: "Where can I see this portrait?",
        answer: "This portrait is displayed at the <a href=\"/apps/masterpieces/museum/delaware-art-museum-wilmington-de-us\"><strong>Delaware Art Museum</strong></a> in Wilmington, Delaware, which holds a major Pre-Raphaelite collection."
      },
      {
        question: "How did Siddal become a model?",
        answer: "She was discovered working in a <strong>hat shop</strong> in Leicester Square around 1849-1850. She initially modeled for several artists before working exclusively with Rossetti."
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-emilie-fl246ge',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this full-length portrait of <strong>Emilie Floge</strong> in 1902, depicting his companion of twenty-seven years as a bejeweled icon. The oil on canvas measures 178 by 80 centimeters. Emilie wears a flowing dress decorated with intricate patterns, anticipating the Byzantine-influenced style Klimt would fully embrace after visiting Italian mosaics in 1903.</p>
<p>Emilie was a Viennese fashion designer and the younger sister of Helene Floge, who married Klimt's brother Ernst. When Ernst died suddenly in 1892, Klimt became responsible for Helene's care. Emilie, eighteen at the time, befriended Klimt by suggesting they learn French together. Those innocent lessons grew into a lifelong bond.</p>
<p>In 1904, Emilie and her sisters opened a fashion salon outfitted by the Wiener Werkstatte. Despite Klimt's notorious philandering, Emilie remained true to him until his death in 1918 and never married. The painting is held at the <a href="/apps/masterpieces/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna.</p>`,
    faqs: [
      {
        question: "Who was Emilie Floge?",
        answer: "<strong>Emilie Floge</strong> (1874-1952) was a Viennese fashion designer and <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> companion for twenty-seven years. She never married despite his infidelities."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/albertina-vienna-austria\"><strong>Albertina</strong></a> in Vienna, Austria. It measures 178 x 80 cm."
      },
      {
        question: "What style is this portrait?",
        answer: "The painting exemplifies <strong>Art Nouveau</strong> with its decorative patterns and elongated form. It anticipates Klimt's later \"Golden Period\" influenced by Byzantine mosaics."
      }
    ]
  },
  {
    slug: 'quentin-matsys-portrait-of-erasmus-of-rotterdam',
    description: `<p><a href="/apps/masterpieces/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this portrait of <strong>Desiderius Erasmus</strong> in 1517, showing the great humanist scholar at his desk in scholarly contemplation. The oil on panel measures 59 by 46.5 centimeters. Erasmus wears a fur-trimmed coat and cap, appearing slightly younger than his actual age of about fifty.</p>
<p>Erasmus (1466-1536) was the most influential humanist of the Northern Renaissance, known for his satirical works and Greek translation of the New Testament. He commissioned portraits from several artists, including Matsys and Albrecht Durer, carefully crafting his image as a scholar and author. Matsys also designed a portrait medal for him in 1519.</p>
<p>This portrait now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-ancient-art-gnaa-rome-italy"><strong>National Gallery of Ancient Art</strong></a> (Palazzo Barberini) in Rome. While Hans Holbein the Younger later created the definitive portraits of Erasmus, Matsys's earlier depiction captures the humanist at the height of his influence.</p>`,
    faqs: [
      {
        question: "Who was Erasmus of Rotterdam?",
        answer: "<strong>Desiderius Erasmus</strong> (1466-1536) was the most influential humanist of the Northern Renaissance. He wrote satirical works and produced a Greek translation of the New Testament."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-ancient-art-gnaa-rome-italy\"><strong>National Gallery of Ancient Art</strong></a> (Palazzo Barberini) in Rome, Italy."
      },
      {
        question: "Did other artists paint Erasmus?",
        answer: "Yes. Erasmus commissioned portraits from <a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Matsys</strong></a>, Albrecht Durer, and Hans Holbein the Younger, carefully managing his scholarly image."
      }
    ]
  },
  {
    slug: 'suzanne-valadon-portrait-of-erik-satie',
    description: `<p><a href="/apps/masterpieces/artist/suzanne-valadon"><strong>Suzanne Valadon</strong></a> painted this portrait of composer <strong>Erik Satie</strong> around 1892-1893, reportedly her first attempt at portraiture in oil. The small canvas measures just 22 by 41 centimeters. Satie's red lips are partly hidden by his waxed moustache, and pince-nez glasses give him an intellectual air. One critic described the painting as showing "a methodical frankness close to brutality."</p>
<p>Valadon and Satie met on January 14, 1893, at the Auberge du Clou nightclub. Within minutes he was in love, and within hours he proposed. They began a torrid six-month affair, living in adjoining apartments where he wrote music while she painted his portrait. It was reportedly her first oil painting.</p>
<p>Satie obsessed over Valadon for the rest of his life, writing her letters for thirty years. The painting now hangs at the <a href="/apps/masterpieces/museum/georges-pompidou-center-paris-france"><strong>Centre Pompidou</strong></a> in Paris. Valadon is thought to be the only person Satie ever had a romantic relationship with.</p>`,
    faqs: [
      {
        question: "What was Valadon's relationship with Satie?",
        answer: "<a href=\"/apps/masterpieces/artist/suzanne-valadon\"><strong>Suzanne Valadon</strong></a> and Erik Satie had a <strong>six-month affair</strong> in 1893. He proposed within hours of meeting her and remained obsessed with her for life."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/georges-pompidou-center-paris-france\"><strong>Centre Pompidou</strong></a> in Paris. It measures just 22 x 41 cm."
      },
      {
        question: "Why is this portrait significant?",
        answer: "This was reportedly Valadon's <strong>first oil painting</strong>. Satie composed music dedicated to her, including \"Three Boneless Preludes for a Dog.\""
      }
    ]
  },
  {
    slug: 'gustave-moreau-portrait-of-eugene-lacheur',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this portrait of <strong>Eugene Lacheur</strong> during his career as one of France's leading <strong>Symbolist</strong> painters. While Moreau is best known for his mythological and religious subjects featuring jewel-like colors and elaborate ornamentation, this portrait demonstrates his more straightforward approach to capturing individual likeness.</p>
<p>Moreau trained at the Ecole des Beaux-Arts and initially pursued conventional academic subjects before developing his distinctive Symbolist style. His portraits, though less famous than his imaginative compositions, reveal his solid academic foundation and ability to render human subjects with sensitivity.</p>
<p>The painting is currently in a private collection. Moreau's influence extended far beyond his own work. As a professor at the Ecole des Beaux-Arts, he taught Henri Matisse, Georges Rouault, and other artists who would become leaders of modern art.</p>`,
    faqs: [
      {
        question: "What art movement was Moreau part of?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> was a leading <strong>Symbolist</strong> painter known for mythological subjects. He also influenced younger artists as a professor at the Ecole des Beaux-Arts."
      },
      {
        question: "Where is this portrait now?",
        answer: "The painting is held in a <strong>private collection</strong>. Moreau's portraits are less well-known than his elaborate mythological compositions."
      },
      {
        question: "Who did Moreau teach?",
        answer: "Moreau taught <strong>Henri Matisse and Georges Rouault</strong> at the Ecole des Beaux-Arts. His students became leaders of modern art movements like Fauvism."
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-eva-frederick',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of <strong>Eva Frederick</strong> in 1931 during her stay in San Francisco with Diego Rivera. The oil on canvas measures 87 by 44 centimeters. A ribbon with text floats above the subject's head, stating: "Picture of Eva Frederick, born in New York, painted by Frieda Kahlo." This labeling style indicates the painting was a gift to a friend.</p>
<p>Eva Frederick was likely a professional model who posed for Rivera and other artists in Mexico, though some sources describe her as a friend of the couple. Kahlo painted several portraits of friends and acquaintances during her San Francisco stay from November 1930 to June 1931.</p>
<p>The warm, neutral background pushes the figure forward, focusing attention on the subject. The painting now belongs to the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City, showcasing Kahlo's early <strong>Naive Art</strong> style before her more surrealist period.</p>`,
    faqs: [
      {
        question: "Who was Eva Frederick?",
        answer: "<strong>Eva Frederick</strong> was a model who posed for Diego Rivera and other artists. Born in New York, she was a friend or acquaintance of Kahlo during her 1930-1931 San Francisco stay."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is part of the <a href=\"/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico\"><strong>Dolores Olmedo Collection</strong></a> in Mexico City, Mexico."
      },
      {
        question: "What does the text on the painting say?",
        answer: "The ribbon reads: \"Picture of Eva Frederick, born in New York, painted by Frieda Kahlo.\" <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo</strong></a> used this labeling style for paintings given as gifts."
      }
    ]
  },
  {
    slug: 'dante-gabriel-rossetti-portrait-of-ford-madox-brown',
    description: `<p><a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> drew this portrait of <strong>Ford Madox Brown</strong> on January 31, 1867, documenting their long artistic friendship. Brown was a mentor to Rossetti and closely associated with the <strong>Pre-Raphaelite Brotherhood</strong>, though he was never officially a member. He was older than the founders and had already developed his own distinctive style.</p>
<p>Brown first met Rossetti in 1848 when the young artist wrote asking to become his pupil. Though Brown initially thought it a practical joke, they became lifelong friends. Brown's paintings "Work" and "The Last of England" rank among the most important British pictures of the Victorian era.</p>
<p>The drawing is held at the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London. Rossetti's quick, confident draftsmanship captures Brown's mature features with the same intensity he brought to his famous portraits of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a>.</p>`,
    faqs: [
      {
        question: "Who was Ford Madox Brown?",
        answer: "<strong>Ford Madox Brown</strong> (1821-1893) was a mentor to <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> and associated with the Pre-Raphaelites, though never an official member. His \"Work\" is a Victorian masterpiece."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The drawing hangs at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-london-uk\"><strong>National Portrait Gallery</strong></a> in London. Rossetti dated it January 31, 1867."
      },
      {
        question: "How did Rossetti and Brown meet?",
        answer: "Rossetti wrote to Brown in <strong>1848</strong> asking to become his pupil. Brown initially thought it a joke, but they became lifelong friends and artistic collaborators."
      }
    ]
  },
  {
    slug: 'francisco-de-zurbaran-portrait-of-fra-zumel-francisco',
    description: `<p><a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbaran</strong></a> painted this portrait of <strong>Fra Francisco Zumel</strong>, exemplifying his reputation as the "painter of monks." Zurbaran earned this nickname through his many paintings of friars, nuns, and saints for the churches and religious orders of Andalusia. His approach gave saints and monks an almost sculptural presence.</p>
<p>Zurbaran's technique drew comparisons to Caravaggio, particularly his forceful use of chiaroscuro (dramatic light and shadow). His white draperies were especially celebrated. The Carthusian houses, with their white-robed monks, are particularly abundant in his paintings. He rendered the minutiae of religious dress with remarkable verisimilitude.</p>
<p>The portrait is held at the <a href="/apps/masterpieces/museum/real-academia-de-bellas-artes-de-san-fernando-madr"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> in Madrid. Zurbaran's religious portraits capture not merely physical likeness but the spiritual intensity of monastic devotion in <strong>Counter-Reformation</strong> Spain.</p>`,
    faqs: [
      {
        question: "Why was Zurbaran called the 'painter of monks'?",
        answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbaran</strong></a> earned this nickname through his many paintings of friars, nuns, and saints for Spanish religious orders. Nearly 50 paintings of Saint Francis survive."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/real-academia-de-bellas-artes-de-san-fernando-madr\"><strong>Real Academia de Bellas Artes de San Fernando</strong></a> in Madrid, Spain."
      },
      {
        question: "What style did Zurbaran use?",
        answer: "Zurbaran used <strong>Caravaggesque chiaroscuro</strong> and tenebrism, dramatically lighting forms against dark backgrounds. He was called the \"Spanish Caravaggio.\""
      }
    ]
  },
  {
    slug: 'giorgione-portrait-of-francesco-maria-della-rovere',
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted this portrait of <strong>Francesco Maria della Rovere</strong> around 1502, when the subject was a young man who would later become Duke of Urbino. The oil painting was originally on panel but was later transferred to canvas. It measures 73 by 64 centimeters.</p>
<p>The attribution has been debated among scholars. Some have suggested Sebastiano del Piombo as the artist. Regardless of the exact attribution, the portrait displays the poetic atmosphere and rich coloring characteristic of the early sixteenth-century Venetian school that Giorgione helped establish alongside his younger contemporary Titian.</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. Francesco Maria della Rovere (1490-1538) would have a notable military and political career, serving as captain general of the papal armies and later as Duke of Urbino.</p>`,
    faqs: [
      {
        question: "Who was Francesco Maria della Rovere?",
        answer: "<strong>Francesco Maria della Rovere</strong> (1490-1538) later became Duke of Urbino and served as captain general of the papal armies. This portrait shows him as a young man."
      },
      {
        question: "Where can I see this painting?",
        answer: "The portrait hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. It measures 73 x 64 cm."
      },
      {
        question: "Is the attribution to Giorgione certain?",
        answer: "The attribution is debated. Some scholars suggest <strong>Sebastiano del Piombo</strong> as the artist. <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> has very few firmly attributed works."
      }
    ]
  },
  {
    slug: 'jacques-louis-david-portrait-of-francois-buron',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this portrait of his uncle <strong>Francois Buron</strong> in 1769, one of his earliest known works. The oil on canvas measures 65 by 54 centimeters and shows Buron, an important eighteenth-century French civil servant, in a dignified pose.</p>
<p>David was only about twenty years old and still training when he painted this portrait. He would go on to become the leading figure of <strong>Neoclassicism</strong>, a movement emphasizing clarity, order, and harmony inspired by ancient Greek and Roman art. His later masterpieces include "The Death of Marat" and "Napoleon Crossing the Alps."</p>
<p>The painting remained with Buron's descendants until 1903, passing through several sales before reaching a private collection in New York in 1985. This early work demonstrates David's natural gift for portraiture that he would develop alongside his grand historical compositions.</p>`,
    faqs: [
      {
        question: "How old was David when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a> was approximately <strong>twenty years old</strong> in 1769, still a student. This is one of his earliest known paintings."
      },
      {
        question: "Where is this portrait now?",
        answer: "The painting is in a <strong>private collection in New York</strong>. It passed through several sales after leaving the Buron family in 1903."
      },
      {
        question: "What art movement did David lead?",
        answer: "David became the leading figure of <strong>Neoclassicism</strong>, a style emphasizing classical ideals. His famous works include \"The Death of Marat\" and \"Napoleon Crossing the Alps.\""
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-portrait-of-fr233d233ric-desmarais',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this portrait of <strong>Frederic Desmarais</strong>, demonstrating the technical precision that made him France's leading Neoclassical portraitist. Ingres believed drawing was "the probity of art," and his portraits showcase his exceptional draftsmanship and ability to capture physical likeness with remarkable accuracy.</p>
<p>Ingres trained under Jacques-Louis David and won the Prix de Rome in 1801. He spent years in Italy, where he developed his distinctive style combining classical idealization with acute observation. His portraits of bourgeois patrons funded his grander historical and mythological compositions.</p>
<p>This portrait is held at the <a href="/apps/masterpieces/museum/mus233e-des-augustins-toulouse-france"><strong>Musee des Augustins</strong></a> in Toulouse, France. Ingres was born near Toulouse, making the museum's collection particularly significant for understanding his roots and artistic development.</p>`,
    faqs: [
      {
        question: "What style did Ingres practice?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> was a leading <strong>Neoclassical</strong> painter who studied under Jacques-Louis David. He believed drawing was \"the probity of art.\""
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/mus233e-des-augustins-toulouse-france\"><strong>Musee des Augustins</strong></a> in Toulouse, France, near Ingres's birthplace."
      },
      {
        question: "What was Ingres known for?",
        answer: "Ingres was celebrated for his exceptional <strong>draftsmanship</strong> and precise rendering of physical likeness. His portraits funded his grander mythological compositions."
      }
    ]
  },
  {
    slug: 'jules-bastien-lepage-portrait-of-french-philosopher-adolphe-franck',
    description: `<p><a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted this portrait of the philosopher <strong>Adolphe Franck</strong> (1809-1893), demonstrating his remarkable skill in portraiture. Bastien-Lepage possessed a rare quality: the ability to bestow the same superior care upon every part of a portrait. He never shirked any difficulty, taking particular care with hands, which he considered as important as faces.</p>
<p>Franck was a French philosopher known for his work on Jewish and religious philosophy. He taught at the College de France and wrote extensively on the history of philosophy. Bastien-Lepage captured him with the naturalistic precision that characterized all his portrait work.</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> in Paris. Bastien-Lepage died young at thirty-six in 1884, but his naturalistic approach to both portraiture and rural scenes influenced a generation of artists.</p>`,
    faqs: [
      {
        question: "Who was Adolphe Franck?",
        answer: "<strong>Adolphe Franck</strong> (1809-1893) was a French philosopher who taught at the College de France. He specialized in Jewish and religious philosophy."
      },
      {
        question: "Where is this portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, France."
      },
      {
        question: "What was special about Bastien-Lepage's portraits?",
        answer: "<a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> gave equal care to every part of a portrait. He was especially noted for painting <strong>hands</strong> as precisely as faces."
      }
    ]
  }
];

async function main() {
  console.log('Starting portrait artwork enrichment (Jan 23)...\n');

  let updated = 0;
  let errors = 0;

  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
      updated++;
    } catch (e) {
      console.error(`✗ Error updating ${artwork.slug}: ${e.message}`);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Errors: ${errors}`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
