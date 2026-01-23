const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'george-bellows-polo-at-lakewood',
    description: `<p><a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a> painted this energetic scene in 1910 after attending a polo match at the estate of railroad tycoon Jay Gould in Lakewood, New Jersey. The painting measures nearly four feet high and over six feet wide, capturing a scrum of horses, indistinguishable and rearing, as they fill the canvas with violent speed. Grey, looming clouds and female spectators frame the main action.</p>
<p>The polo subject marked a departure for Bellows, who was the boldest member of the Ashcan School, known for depicting working-class urban life. His patron Joseph B. Thomas, who had purchased three paintings in 1908, introduced him to this upper-class world. Bellows painted only three polo scenes in his career. The vigorous brushwork and <strong>vibrant color palette</strong> demonstrate his skill at capturing the physical action of sporting events.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/columbus-museum-of-art-columbus-oh-us"><strong>Columbus Museum of Art</strong></a> in Ohio, which considers Bellows "the most acclaimed American artist of his generation." For collectors of <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse art</strong></a>, this work exemplifies dynamic equestrian painting at its finest.</p>`,
    faqs: [
      {
        question: "Where is Polo at Lakewood displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/columbus-museum-of-art-columbus-oh-us\"><strong>Columbus Museum of Art</strong></a> in Ohio. Bellows was born in Columbus and the museum holds an important collection of his work."
      },
      {
        question: "How big is this painting?",
        answer: "Polo at Lakewood measures 45 1/4 x 63 1/2 inches (about 115 x 161 cm). It's one of <a href=\"/apps/masterpieces/artist/george-bellows\"><strong>Bellows'</strong></a> largest and most dynamic <strong>sporting scenes</strong>."
      },
      {
        question: "What was the Ashcan School?",
        answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>Bellows</strong></a> was the leading young member of the <strong>Ashcan School</strong>, artists who depicted the realities of daily urban life. This polo scene was unusual for him, showing upper-class leisure."
      }
    ]
  },
  {
    slug: 'giovanni-bellini-polyptych-of-san-vincenzo-ferreri',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> created this polyptych between 1464 and 1468 for the altar dedicated to Saint Vincent Ferrer in the Venetian basilica. It was his first major public commission and remains in its original location at the <a href="/apps/masterpieces/museum/basilica-dei-santi-giovanni-e-paolo-san-zanipolo-v"><strong>Basilica dei Santi Giovanni e Paolo</strong></a>, one of the largest churches in Venice.</p>
<p>The altarpiece comprises nine panels arranged in three parts, with the Pietà, the Virgin, and the Angel of the Annunciation at the top. Saint Vincent Ferrer, the Spanish Dominican friar who had been canonized just ten years before the commission, appears in the central panel. The work shows Bellini developing the <strong>rich color and atmospheric effects</strong> that would later revolutionize Venetian painting.</p>
<p>Bellini's influence on Venetian art was profound. He moved painting toward a more sensuous, coloristic style through his use of slow-drying oil paints that created deep tints and detailed shadings. His students included Giorgione and <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a>, who would carry his innovations forward.</p>`,
    faqs: [
      {
        question: "Where can I see this Bellini polyptych?",
        answer: "It remains in its original location at <a href=\"/apps/masterpieces/museum/basilica-dei-santi-giovanni-e-paolo-san-zanipolo-v\"><strong>Santi Giovanni e Paolo</strong></a> (San Zanipolo) in Venice. This was <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini's</strong></a> first public commission."
      },
      {
        question: "Who was Saint Vincent Ferrer?",
        answer: "<strong>Saint Vincent Ferrer</strong> (1350-1419) was a Spanish Dominican friar known as a miracle worker. He was canonized in 1455, just a decade before <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a> painted this altarpiece."
      },
      {
        question: "What style is this painting?",
        answer: "This is an <strong>Early Renaissance</strong> tempera on panel work. <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a> was developing the rich color that would later define Venetian painting."
      }
    ]
  },
  {
    slug: 'andrea-mantegna-polyptych-of-st-luke',
    description: `<p><a href="/apps/masterpieces/artist/andrea-mantegna"><strong>Andrea Mantegna</strong></a> painted this altarpiece between 1453 and 1455 for the chapel dedicated to Saint Luke in the Benedictine Church of Santa Giustina in Padua. He was about twenty-two years old and newly married to Nicolosia Bellini, sister of Giovanni Bellini. The commission came during a period of intense artistic dialogue between the two brothers-in-law.</p>
<p>The polyptych consists of twelve panels depicting saints arranged in two registers. The main compartment shows Saint Luke in a "heroic" manner, portrayed as a modern intellectual absorbed in his work. The upper tier features Christ, the Virgin Mary, and key saints including Jerome, Augustine, and Sebastian. The gold backgrounds reflect Byzantine influence while the <strong>precise anatomical modeling</strong> shows emerging Renaissance naturalism.</p>
<p>A lightning strike in the 17th century destroyed the original wooden frame bearing Mantegna's signature. The altarpiece was removed during Napoleonic suppressions in 1797 and transferred to the <a href="/apps/masterpieces/museum/pinacoteca-di-brera"><strong>Pinacoteca di Brera</strong></a> in Milan, where it measures approximately 177 by 230 cm overall.</p>`,
    faqs: [
      {
        question: "Where is Mantegna's St. Luke Polyptych now?",
        answer: "The altarpiece is at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan. It was moved there in 1797 during <strong>Napoleonic suppressions</strong> from its original home in Padua."
      },
      {
        question: "How old was Mantegna when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Mantegna</strong></a> was about 22 when he created this work in 1453-55. He had just married the sister of <strong>Giovanni Bellini</strong>, and the two artists influenced each other."
      },
      {
        question: "What happened to the original frame?",
        answer: "A <strong>lightning strike</strong> in the 17th century destroyed the original wooden frame, which bore Mantegna's incised signature. This altered the polyptych's original appearance."
      }
    ]
  },
  {
    slug: 'gentile-da-fabriano-polyptych-of-valle-romita',
    description: `<p><a href="/apps/masterpieces/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> painted this altarpiece around 1410-1412 for the Franciscan hermitage of Valle Romita near his birthplace. The work exemplifies the <strong>International Gothic style</strong> with its rich draperies, linear contours, and splendid costumes. The commission may have come from Chiavello Chiavelli, lord of Fabriano, who had the convent restored in 1406 to house his future tomb.</p>
<p>The central panel depicts the Coronation of the Virgin with a Trinity and choir of musician angels below. This scene draws from Byzantine mosaics Gentile had seen at Saint Mark's Basilica in Venice, with figures floating in air against a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> background. Four side panels show Saints Jerome, Francis, Dominic, and Mary Magdalene standing in a garden whose botanical species are painted with remarkable detail.</p>
<p>The polyptych measures 280 x 250 cm and is now at the <a href="/apps/masterpieces/museum/pinacoteca-di-brera"><strong>Pinacoteca di Brera</strong></a> in Milan. The upper panels were acquired separately from a private collection in 1901, and the neo-Gothic frame dates to 1925.</p>`,
    faqs: [
      {
        question: "Where is the Valle Romita Polyptych?",
        answer: "The altarpiece is at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan. The upper panels were bought separately in 1901, and the current neo-Gothic frame dates to 1925."
      },
      {
        question: "What style is this painting?",
        answer: "This is <strong>International Gothic</strong>, a courtly style featuring rich draperies and splendid costumes. <a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> was one of its leading Italian practitioners."
      },
      {
        question: "What influenced the gold background?",
        answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile</strong></a> drew from <strong>Byzantine mosaics</strong> he had seen at Saint Mark's Basilica in Venice. The floating figures against gold reflect this Eastern influence."
      }
    ]
  },
  {
    slug: 'valentin-serov-pond-in-abramtsevo',
    description: `<p><a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov</strong></a> painted this luminous landscape in 1886 at Abramtsevo, the estate of industrial tycoon Savva Mamontov near Moscow. The property was a cultural center where artists and musicians gathered, and Serov had lived there with his family since 1875. This early work shows his gift for capturing <strong>natural light and atmosphere</strong>.</p>
<p>Critics called Serov's early landscapes "a new word in painting." Remarkably, when he created these works, he was unfamiliar with French Impressionism, yet came very close to Renoir in their sunny, splendidly composed quality. The painting demonstrates a more sensuous approach to <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> than his teacher Isaac Levitan, less nostalgic and more immediate.</p>
<p>Serov would become one of Russia's most celebrated portraitists, but his landscapes from the Abramtsevo period remain treasured examples of <strong>Russian Impressionism</strong>. This work is held at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where is this painting?",
        answer: "Pond in Abramtsevo is at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in Saint Petersburg. Many of <a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov's</strong></a> finest works are also at the Tretyakov Gallery in Moscow."
      },
      {
        question: "What was Abramtsevo?",
        answer: "<strong>Abramtsevo</strong> was the estate of Savva Mamontov near Moscow, a cultural center where artists gathered. <a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov</strong></a> lived there from 1875 and painted many works at the property."
      },
      {
        question: "Did Serov know about Impressionism?",
        answer: "Remarkably, <a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov</strong></a> was unfamiliar with French <strong>Impressionism</strong> when painting these early works, yet independently achieved similar effects of light and color."
      }
    ]
  },
  {
    slug: 'titian-pope-alexander-iv-presenting-jacopo-pesaro-to-st-p',
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this ex-voto around 1510-1511 commemorating the Venetian naval victory at Santa Maura in August 1502. Bishop Jacopo Pesaro, appointed papal legate by Pope Alexander VI, commanded the papal fleet that helped retake the island from the Ottoman Turks. Pesaro kneels with his helmet beside him while war galleys can be seen in action between his head and Saint Peter.</p>
<p>The composition adapts the traditional Venetian formula of a donor being presented to a holy figure, as developed by <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> in whose studio Titian trained. Some scholars suggest Bellini designed the painting while leaving execution to his student. The Pesaro family were prominent Venetian patricians who would later commission Titian's famous Pesaro Madonna.</p>
<p>A later inscription identifies the artist and explains the subject. The painting hangs at the <a href="/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp-dutch-koninklijk"><strong>Royal Museum of Fine Arts Antwerp</strong></a> in Belgium, providing an early example of Titian's developing mastery.</p>`,
    faqs: [
      {
        question: "Where is this Titian painting?",
        answer: "It's at the <a href=\"/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp-dutch-koninklijk\"><strong>Royal Museum of Fine Arts Antwerp</strong></a> in Belgium. This early work shows <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> developing his distinctive style."
      },
      {
        question: "What battle does this commemorate?",
        answer: "The painting celebrates the Venetian victory at <strong>Santa Maura</strong> (Lefkada) in 1502, when Jacopo Pesaro commanded the papal fleet against the Ottoman Turks."
      },
      {
        question: "Who trained Titian?",
        answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> trained in the studio of <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>. Some scholars suggest Bellini designed this painting while Titian executed it."
      }
    ]
  },
  {
    slug: 'paul-gauguin-port-de-grenelle',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this view of the Seine near the Grenelle district in Paris in 1875, during his early years as a painter. The work captures an industrious scene along the riverbank with rapid, visible brushstrokes that align with the <strong>Impressionist movement</strong>. It measures 30 x 44 cm in oil on wood, signed and dated "p. Gauguin 75."</p>
<p>Before becoming famous for his Post-Impressionist paintings of Tahiti, Gauguin began as a Sunday painter while working as a stockbroker. These early Paris landscapes show him absorbing Impressionist techniques, particularly the interest in capturing transient light effects. He painted several views of the Seine's industrial ports during this period, including Port de Javel.</p>
<p>This painting remains in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>. A related work, "The Seine near Port de Grenelle," is at the Wallraf-Richartz Museum in Cologne. For those interested in Gauguin's development before his radical experiments, these early works provide essential context.</p>`,
    faqs: [
      {
        question: "Where is Port de Grenelle now?",
        answer: "This painting is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. A related work is at the Wallraf-Richartz Museum in Cologne, Germany."
      },
      {
        question: "What period is this from?",
        answer: "This 1875 work is from <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> early <strong>Impressionist</strong> period, when he was still a stockbroker painting on Sundays, before his famous Tahitian works."
      },
      {
        question: "How big is this painting?",
        answer: "Port de Grenelle measures 30 x 44 cm (about 12 x 17 inches). It's painted in oil on wood and signed lower right: \"p. Gauguin 75.\""
      }
    ]
  },
  {
    slug: 'paul-gauguin-port-de-javel',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this view of the industrial Port de Javel in 1876, showing the working waterfront along the Seine in Paris's 15th arrondissement. The waterfront is delineated by a broad, calm river reflecting an overcast sky, with a small boat suggesting daily commercial activity. Buildings, factories, and warehouses line the far bank interspersed with patches of vegetation.</p>
<p>The subdued palette of earth tones and grays renders the scene with realism while <strong>Impressionist techniques</strong> add vibrancy. This work exemplifies the movement's endeavor to capture transient light effects and the dynamics of modern life. Gauguin painted several views of Paris's industrial river ports during this early period.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam. These early <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>waterfront</strong></a> scenes document Gauguin's artistic development before he abandoned Paris for Brittany and eventually the South Pacific.</p>`,
    faqs: [
      {
        question: "Where is Port de Javel?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, Netherlands. It dates from <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> early Impressionist period."
      },
      {
        question: "What was Port de Javel?",
        answer: "<strong>Port de Javel</strong> was an industrial area along the Seine in Paris's 15th arrondissement. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted several of these working waterfront scenes in the 1870s."
      },
      {
        question: "What style is this painting?",
        answer: "This is an <strong>Impressionist</strong> work from 1876, before <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> developed his distinctive Post-Impressionist style. The subdued palette and light effects are characteristic."
      }
    ]
  },
  {
    slug: 'paul-signac-port-en-bessin-a-cliff',
    description: `<p><a href="/apps/masterpieces/artist/paul-signac"><strong>Paul Signac</strong></a> painted views of the Norman fishing port of Port-en-Bessin during several summers in the early 1880s. At seventeen, the young artist with a passion for sailing chose this modest coastal village for his first extended painting campaign. He returned in 1883 and 1884, executing a series dedicated to the various aspects of the port.</p>
<p>The 1883 landscapes show the influence of Monet, whose views of Pourville and Varengeville Signac had seen at the Durand-Ruel gallery. His brushstrokes are long and brightly colored for the embankment, curved and forceful to express the waves and surf, conveying the energy of the young painter. These works predate his later development of <strong>Pointillism</strong> with Georges Seurat.</p>
<p>This painting is in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>. Signac later recommended Port-en-Bessin to Seurat, who painted his own famous series there in 1888 using the Neo-Impressionist technique they had developed together. For fans of <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal art</strong></a>, Signac's Norman views capture the Atlantic shoreline beautifully.</p>`,
    faqs: [
      {
        question: "Where is this Signac painting?",
        answer: "Port-en-Bessin, a Cliff is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted multiple views of this Norman port during the early 1880s."
      },
      {
        question: "Is this a Pointillist painting?",
        answer: "No, this predates <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac's</strong></a> development of <strong>Pointillism</strong>. He painted Port-en-Bessin before meeting Seurat, showing Monet's influence instead."
      },
      {
        question: "Did Seurat paint Port-en-Bessin too?",
        answer: "Yes, Signac recommended the location to <strong>Seurat</strong>, who painted a famous series there in 1888 using their Neo-Impressionist technique."
      }
    ]
  },
  {
    slug: 'paul-signac-port-en-bessin-the-beach',
    description: `<p><a href="/apps/masterpieces/artist/paul-signac"><strong>Paul Signac</strong></a> returned to Port-en-Bessin in 1884 to paint another view of the same location he had captured the previous summer. The narrow strip of sandy beach functions as the central visual axis, glowing brightly against the dominant <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> tones of the composition.</p>
<p>In contrast to the flat treatment of the cloudless sky, other elements are delineated using shimmering, impasto brushstrokes. The work captures the energy of the twenty-year-old painter who had chosen this modest Norman fishing village for his summer campaigns. Signac was still working under the influence of Monet, Guillaumin, and Caillebotte at this time, before his collaboration with Seurat transformed his approach.</p>
<p>A few months after painting this, Signac befriended Seurat during the creation of the first Salon des Indépendants. Together they would develop <strong>Neo-Impressionism</strong>. This painting is now at the <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Museo Nacional Thyssen-Bornemisza</strong></a> in Madrid.</p>`,
    faqs: [
      {
        question: "Where is Port-en-Bessin, the Beach?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Museo Thyssen-Bornemisza</strong></a> in Madrid, Spain. It dates from <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac's</strong></a> pre-Pointillist period."
      },
      {
        question: "When did Signac meet Seurat?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> met <strong>Seurat</strong> in 1884 during the first Salon des Indépendants, a few months after painting this. Together they developed Neo-Impressionism."
      },
      {
        question: "What influenced this painting's style?",
        answer: "At this time <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> was influenced by <strong>Monet</strong>, Guillaumin, and Caillebotte. His later Pointillist style hadn't yet developed."
      }
    ]
  },
  {
    slug: 'hugo-van-der-goes-portinari-triptych-detail',
    description: `<p><a href="/apps/masterpieces/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a> painted the Portinari Triptych around 1475 in Bruges for Tommaso Portinari, director of the Medici bank's branch in the city. The massive altarpiece, measuring 253 x 304 cm overall, depicts the Adoration of the Shepherds in the central panel with donor portraits on the wings. Portinari appears with his two sons on the left; his wife Maria Baroncelli and their daughter Margarita appear on the right, each accompanied by patron saints.</p>
<p>The exterior panels show the Annunciation in grisaille, painted to imitate sculpture. Van der Goes developed an original style characterized by intense naturalism and chiseled drawing. The altarpiece contains some of the most complicated and hidden symbolism in any 15th-century Nativity scene. <strong>Botanical details</strong> are rendered with scientific precision, while the emotional expressions of the shepherds show unprecedented psychological depth.</p>
<p>Transported by sea to Florence in 1483, the triptych deeply influenced Italian artists including Domenico Ghirlandaio. It hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a>, van der Goes's greatest surviving work.</p>`,
    faqs: [
      {
        question: "Where is the Portinari Triptych?",
        answer: "The triptych is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It arrived in 1483 and deeply influenced Italian Renaissance painters who saw it."
      },
      {
        question: "Who commissioned this altarpiece?",
        answer: "<strong>Tommaso Portinari</strong>, director of the Medici bank in Bruges, commissioned it for his family chapel. He and his family appear as donors in the wing panels."
      },
      {
        question: "How big is the Portinari Triptych?",
        answer: "The altarpiece measures 253 x 304 cm (about 8.3 x 10 feet) overall. It's <a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes's</strong></a> largest and greatest surviving work."
      },
      {
        question: "What influenced Italian artists about it?",
        answer: "The <strong>naturalism</strong>, emotional expressiveness, and detailed symbolism influenced artists like Ghirlandaio. Its arrival in Florence in 1483 had considerable impact on Italian painting."
      }
    ]
  },
  {
    slug: 'edgar-degas-portrait-after-a-costume-ball-portrait-of-madame-d',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this portrait of Madame Adèle Dietz-Monnin in 1879, accepting the commission due to financial difficulties. Letters attest to frequent sittings in the spring of 1879 as Degas worked to capture how light fell across the sitter in the context of a brightly lit ball surrounded by reflective surfaces.</p>
<p>The unusual title came when Degas exhibited the work at the Fourth Impressionist Exhibition in April-May 1879. According to family tradition, Madame Dietz-Monnin rejected the finished <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> because she thought it made her look drunk or like a prostitute. The work was originally intended as payment for money lent to Degas by members of her family.</p>
<p>Degas executed the painting in an unusual combination of <strong>distemper, metallic paint, and pastel</strong> on canvas, measuring 85.7 x 75.3 cm. It's now in the Joseph Winterbotham Collection at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, displayed in Gallery 226.</p>`,
    faqs: [
      {
        question: "Where is this Degas portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> as part of the Joseph Winterbotham Collection. It's displayed in Gallery 226."
      },
      {
        question: "Why was the portrait rejected?",
        answer: "According to family tradition, <strong>Madame Dietz-Monnin</strong> thought <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> made her look drunk or like a prostitute. The portrait was meant as payment for a family loan."
      },
      {
        question: "What materials did Degas use?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> used an unusual combination of <strong>distemper, metallic paint, and pastel</strong> on canvas, creating distinctive light effects for the costume ball setting."
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-portrait-belv232ze',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this portrait in 1805, during the early phase of his career when he was producing numerous portrait commissions. The work belongs to the same period as his portraits of the Rivière family and other French sitters that established his reputation as a <strong>masterful portraitist</strong>.</p>
<p>Ingres was developing his distinctive approach that combined Neoclassical precision with subtle psychological insight. His portraits from this period show meticulous attention to fabric, jewelry, and setting while capturing the personality of his sitters. The smooth, polished surfaces and precise linear contours would become hallmarks of his style.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/mus233e-ingres-montauban-france"><strong>Musée Ingres</strong></a> in Montauban, France, the artist's birthplace. The museum houses the world's largest collection of Ingres' work, including many of his early portraits and preparatory drawings.</p>`,
    faqs: [
      {
        question: "Where is Portrait Belvèze?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-ingres-montauban-france\"><strong>Musée Ingres</strong></a> in Montauban, France. The museum has the world's largest collection of <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres'</strong></a> work."
      },
      {
        question: "What period is this from?",
        answer: "This 1805 portrait is from <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres'</strong></a> early career, painted the same year as his famous Rivière family portraits. He was establishing his reputation as a <strong>portraitist</strong>."
      },
      {
        question: "What style did Ingres work in?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> was a leading <strong>Neoclassical</strong> painter known for precise linear contours, smooth surfaces, and psychological insight in his portraits."
      }
    ]
  },
  {
    slug: 'jacques-louis-david-portrait-de-mariejos233phine-buron',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this portrait of Marie-Joséphine Buron in 1769, an early work that marks the transition from Rococo to <strong>Neoclassicism</strong> in French painting. The young woman is presented in a white dress with delicate corset highlighting her slender figure. The use of white evokes freshness and purity while allowing light to play across the fabric textures.</p>
<p>Light and shadow are subtly modeled to create depth, while the dark background enhances the light tone of the dress and provides an intimate context. Though this early work retains some Rococo characteristics, David's approach is already becoming more sober and austere, anticipating his later evolution toward heroic works like "The Oath of the Horatii."</p>
<p>The painting is now at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. David would become the preeminent painter of the French Revolution and Napoleon's court, but this early portrait shows him still developing his distinctive vision.</p>`,
    faqs: [
      {
        question: "Where is this David portrait?",
        answer: "Portrait of Marie-Joséphine Buron is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. It's an early work from 1769 showing <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David's</strong></a> developing style."
      },
      {
        question: "What makes this painting significant?",
        answer: "This work marks the transition from <strong>Rococo to Neoclassicism</strong> in French painting. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> was developing the austere approach that would define his later masterpieces."
      },
      {
        question: "How old was David when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> was about 21 years old in 1769. This early portrait predates his famous Revolutionary and Napoleonic paintings by decades."
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-alejandro-g243mez-arias',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of her boyfriend Alejandro Gómez Arias in 1928. The two had met in 1922 at the National Preparatory School in Mexico City and were inseparable for three years. Alejandro was with Frida on that fateful September afternoon in 1925 when the bus they were riding was struck by a trolley, leaving her severely injured while he escaped with minor wounds.</p>
<p>The painting is executed in a conventional <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> style similar to a photograph, contrasting with the Renaissance-influenced style of her earlier works. An inscription in the corner reads: "Alex, with affection I painted your portrait, that he is one of my comrades forever, Frida Kahlo, 30 years later." The work measures 61.5 x 41 cm in oil on wood.</p>
<p>Frida and Alejandro separated in June 1928, and she quickly turned her attention to Diego Rivera. The portrait remains in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>, though its authenticity has been questioned by some scholars.</p>`,
    faqs: [
      {
        question: "Where is this Kahlo portrait?",
        answer: "The painting is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. It was displayed at the 2005 Tate Modern exhibition and the 2007 centenary show at Mexico City's Palace of Fine Arts."
      },
      {
        question: "Who was Alejandro Gómez Arias?",
        answer: "<strong>Alejandro</strong> was <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo's</strong></a> boyfriend from 1922-1928. He was with her during the 1925 bus accident that severely injured her."
      },
      {
        question: "Is this painting authentic?",
        answer: "The painting was lost for years and rediscovered in 1994. Art critic Rachel Tibol declared it a fake in 2007, and as of that date, authenticity investigations continued."
      }
    ]
  },
  {
    slug: 'hans-holbein-younger-portrait-of-34-year-old-woman',
    description: `<p><a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> painted this portrait in 1516, depicting a woman of thirty-four years in the fashion typical of early 16th-century Germany. Her hair is covered with a coif accessorized by a decorative band around the forehead. She wears a richly adorned yellow garment with <a href="https://luxurywallart.com/collections/black-and-gold" target="_blank" rel="noopener"><strong>black</strong></a> trim, suggesting considerable status.</p>
<p>The dark background provides striking contrast that draws focus to the woman's serene yet somewhat aloof expression. The craftsmanship is meticulous, showcasing Holbein's exceptional skill in realism and attention to detail characteristic of the <strong>Northern Renaissance</strong>. Fabric textures, jewelry, and facial features are rendered with precision that would later make Holbein famous as a court portraitist.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. Holbein was based in Basel during this early period before his later career at the English court of Henry VIII, and the museum preserves an important collection of his work.</p>`,
    faqs: [
      {
        question: "Where is this Holbein portrait?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland. The museum has an important collection of <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein's</strong></a> Basel-period work."
      },
      {
        question: "Who is the woman in the portrait?",
        answer: "The sitter's identity is unknown. The title indicates she was <strong>34 years old</strong> when Holbein painted her in 1516, and her rich clothing suggests high social status."
      },
      {
        question: "What style is this painting?",
        answer: "This is a <strong>Northern Renaissance</strong> portrait in tempera on wood. <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein's</strong></a> meticulous attention to fabric and facial detail is characteristic of the period."
      }
    ]
  },
  {
    slug: 'ilya-repin-portrait-of-a-boy',
    description: `<p><a href="/apps/masterpieces/artist/ilya-repin"><strong>Ilya Repin</strong></a> painted this portrait in the early 1880s, depicting an unidentified boy with tender directness that avoids sentimentality. True to <strong>Realist principles</strong>, Repin captured his young subject in a straightforward manner that reflects his progressive artistic approach. During this period, he painted numerous portraits of children, including relatives of his patrons and his own daughters and son.</p>
<p>Repin was born in the rural Ukrainian town of Chuhuiv when it was part of the Russian Empire and became one of the most important Russian painters of the 19th century. His works range from intimate portraits like this to monumental historical scenes. He died in 1930 in what is now Repino, near Saint Petersburg, a town later renamed in his honor.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/taganrog-museum-of-fine-arts-taganrog-russia"><strong>Taganrog Museum of Fine Arts</strong></a> in Russia, though major collections of Repin's work are also at the Tretyakov Gallery in Moscow and the Russian Museum in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where is Repin's Portrait of a Boy?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/taganrog-museum-of-fine-arts-taganrog-russia\"><strong>Taganrog Museum of Fine Arts</strong></a> in Russia. Major <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin</strong></a> collections are also at the Tretyakov and Russian Museum."
      },
      {
        question: "Who is the boy in the portrait?",
        answer: "The sitter hasn't been identified. <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin</strong></a> painted many children's portraits in the early 1880s, including relatives of patrons and his own children."
      },
      {
        question: "What style did Repin work in?",
        answer: "<a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin</strong></a> was a major <strong>Russian Realist</strong> painter. This portrait shows his commitment to depicting subjects in a straightforward, non-sentimental manner."
      }
    ]
  },
  {
    slug: 'hans-holbein-younger-portrait-of-a-boy-with-blond-hair',
    description: `<p>This portrait of a young blond-haired boy was created in 1516 and is traditionally attributed to <a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a>, though some scholars associate it with his elder brother Ambrosius Holbein. The boy is depicted against an intricately detailed architectural background with ornate framing adorned by cherubic figures and elaborate carvings.</p>
<p>The features are rendered with delicate precision, a hallmark of <strong>Northern Renaissance portraiture</strong>. The boy's flowing garments with defined lines contrast against the darker background, highlighting his youthful presence. A companion piece, "Portrait of a Boy with Brown Hair," exists from the same period, and both are associated with Ambrosius Holbein's best work.</p>
<p>Ambrosius was Hans's elder brother by about three years but died in his mid-twenties, leaving a small body of work. The painting is at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland, along with the companion portrait.</p>`,
    faqs: [
      {
        question: "Where is this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland, along with its companion piece \"Portrait of a Boy with Brown Hair.\""
      },
      {
        question: "Who painted this portrait?",
        answer: "It's traditionally attributed to <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Hans Holbein the Younger</strong></a>, but some scholars associate it with his elder brother <strong>Ambrosius Holbein</strong> who died young."
      },
      {
        question: "Is there a companion piece?",
        answer: "Yes, \"Portrait of a Boy with Brown Hair\" is a companion piece from the same period, also at <strong>Kunstmuseum Basel</strong>. Both are listed among Ambrosius Holbein's best works."
      }
    ]
  },
  {
    slug: 'joaquin-sorolla-portrait-of-a-caballero',
    description: `<p><a href="/apps/masterpieces/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this portrait of a Spanish gentleman in 1884, when the artist was about twenty-one years old and developing his distinctive style. The work measures 52.1 x 41.6 cm in oil on canvas, showing a caballero, or gentleman, rendered with the emerging <strong>Impressionist sensibility</strong> that would later make Sorolla famous.</p>
<p>This early portrait was created the same year as his dramatic history painting "The Death of Pedro Velarde," showing the range of subjects Sorolla tackled during his formative years. Though now celebrated for his sun-drenched beach scenes and luminous garden views from Valencia, his early career included many <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> commissions.</p>
<p>The painting is held in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>. Major holdings of Sorolla's work can be found at the Sorolla Museum in Madrid and the Hispanic Society of America in New York.</p>`,
    faqs: [
      {
        question: "Where is Portrait of a Caballero?",
        answer: "This painting is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. Major <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> collections are at the Sorolla Museum in Madrid and the Hispanic Society in New York."
      },
      {
        question: "What does caballero mean?",
        answer: "<strong>Caballero</strong> is Spanish for gentleman or knight. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted this formal portrait of a Spanish gentleman early in his career in 1884."
      },
      {
        question: "How old was Sorolla when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> was about 21 in 1884. This early work predates the luminous beach scenes that would later make him famous."
      }
    ]
  },
  {
    slug: 'theodore-gericault-portrait160of160a-carabinier',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this portrait of a French cavalry soldier in 1814, capturing the military subject matter for which he became known before his famous "Raft of the Medusa." The carabinier was an elite heavy cavalry soldier, and Géricault depicts him with the dramatic intensity characteristic of <strong>Romanticism</strong>.</p>
<p>The painting measures 64 x 45 cm in oil on canvas. Géricault was fascinated by horses and military subjects, producing numerous studies of soldiers and cavalry throughout his brief career. His powerful depictions of horses would influence artists including Delacroix and later the Realists.</p>
<p>The work is held at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-rouen-rouen-france"><strong>Musée des Beaux-Arts de Rouen</strong></a> in France. Géricault died young at thirty-two, but his dramatic vision and technical mastery established him as a founder of French Romantic painting.</p>`,
    faqs: [
      {
        question: "Where is this Géricault portrait?",
        answer: "Portrait of a Carabinier is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-rouen-rouen-france\"><strong>Musée des Beaux-Arts de Rouen</strong></a> in France. It's an example of <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault's</strong></a> military subjects."
      },
      {
        question: "What was a carabinier?",
        answer: "A <strong>carabinier</strong> was an elite French heavy cavalry soldier. <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> was fascinated by military subjects and horses throughout his brief career."
      },
      {
        question: "What style is this painting?",
        answer: "This is a <strong>Romantic</strong> work from 1814. <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> was a founder of French Romanticism, known for dramatic intensity and powerful subjects."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment batch 3 (20 artworks)...\n');

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
      console.error(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }

  console.log('\nArtwork enrichment batch 3 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
