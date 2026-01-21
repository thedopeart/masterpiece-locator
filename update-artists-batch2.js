const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 2: Artists 11-20
const artistUpdates = [
  {
    slug: 'giovanni-bellini',
    data: {
      bio: `<p><strong>Giovanni Bellini</strong> (c. 1430–1516) was a Venetian painter who transformed the art of his city and established Venice as a major center of <a href="/movement/renaissance"><strong>Renaissance</strong></a> painting. Son of painter Jacopo Bellini and brother of Gentile Bellini, he came from Venice's leading artistic family and trained his own illustrious pupils, including Giorgione and Titian.</p>

<p>Bellini pioneered the use of oil painting in Venice, adopting the technique from Antonello da Messina around 1475. This allowed him to develop his signature approach to light and color, creating atmospheric effects impossible in tempera. His Madonnas, set against luminous <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, show remarkable sensitivity to natural light and soft, harmonious coloring.</p>

<p>He held the prestigious position of official painter to the Venetian Republic, producing portraits of doges and decorating the Doge's Palace. His religious paintings, from intimate devotional images to grand altarpieces like the San Zaccaria Altarpiece (1505), demonstrated unprecedented integration of figures with architectural and natural settings.</p>

<p>Bellini continued evolving his style into his eighties, absorbing influences from his younger pupils and creating increasingly poetic, atmospheric works. His late paintings like "The Feast of the Gods" (1514) show remarkable openness to new ideas. Major works can be found at the Gallerie dell'Accademia Venice, <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "Why was Giovanni Bellini important?",
          answer: "He transformed Venetian painting by pioneering oil techniques and atmospheric color, training Giorgione and Titian, and establishing the <a href=\"/movement/venetian-school\"><strong>Venetian School</strong></a>."
        },
        {
          question: "What was Bellini known for painting?",
          answer: "He painted luminous Madonnas, altarpieces, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> with soft light and harmonious colors set against atmospheric landscapes."
        },
        {
          question: "Where can I see Giovanni Bellini paintings?",
          answer: "Major works are at the Gallerie dell'Accademia Venice, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and Venetian churches."
        },
        {
          question: "Who were Giovanni Bellini's famous students?",
          answer: "He taught Giorgione and Titian, who went on to become two of the greatest painters of the <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>."
        },
        {
          question: "What technique did Bellini pioneer in Venice?",
          answer: "He introduced oil painting to Venice around 1475, learning from Antonello da Messina and enabling the soft atmospheric effects that defined Venetian art."
        },
        {
          question: "What was Giovanni Bellini's official role?",
          answer: "He served as official painter to the Venetian Republic, creating portraits of doges and decorating the Doge's Palace with historical scenes."
        }
      ])
    }
  },
  {
    slug: 'hans-memling',
    data: {
      bio: `<p><strong>Hans Memling</strong> (c. 1430–1494) was a German-born painter who became one of the leading artists of the <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> in Bruges. Probably trained in Rogier van der Weyden's Brussels workshop, he settled in Bruges in 1465 and developed a prolific practice producing altarpieces, devotional paintings, and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> for international clients.</p>

<p>Memling's style synthesized influences from Jan van Eyck and Rogier van der Weyden into paintings of refined elegance and serene beauty. Unlike Van der Weyden's emotional intensity, Memling created calm, contemplative works marked by gentle modeling, soft colors, and harmonious compositions. His portraits were particularly innovative, often placing subjects before landscape backgrounds.</p>

<p>By 1480, Memling ranked among Bruges' wealthiest citizens, with clients including Italian and Spanish merchants, German Hanseatic traders, and English noblemen. His workshop produced numerous altarpieces, devotional diptychs, and portraits that spread his style across Europe. The St. Ursula Shrine (1489), painted for St. John's Hospital in Bruges, ranks among the finest reliquary decorations of the period.</p>

<p>A notary recording his death called him "the most skillful painter in the whole of Christendom." Major collections exist at the Memling Museum (St. John's Hospital) in Bruges, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the <a href="/museum/prado"><strong>Museo del Prado</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Hans Memling known for?",
          answer: "He painted refined altarpieces, devotional images, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> with serene beauty, soft colors, and innovative landscape backgrounds."
        },
        {
          question: "What art movement was Memling part of?",
          answer: "He was a leading painter of the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> in Bruges, working in the Early Netherlandish tradition."
        },
        {
          question: "Where can I see Memling paintings in Bruges?",
          answer: "The Memling Museum at St. John's Hospital holds masterpieces including the St. Ursula Shrine and the St. John Altarpiece."
        },
        {
          question: "Where else can I see Memling paintings?",
          answer: "Major works are at the <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/prado\"><strong>Prado</strong></a>."
        },
        {
          question: "Who trained Hans Memling?",
          answer: "He probably trained under Rogier van der Weyden in Brussels before settling in Bruges and combining influences from Van der Weyden and Jan van Eyck."
        },
        {
          question: "Who were Memling's clients?",
          answer: "His international clientele included Italian bankers, Spanish merchants, German Hanseatic traders, and English noblemen seeking <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and altarpieces."
        }
      ])
    }
  },
  {
    slug: 'jean-baptiste-simeon-chardin',
    data: {
      bio: `<p><strong>Jean-Baptiste-Siméon Chardin</strong> (1699–1779) was a French painter who elevated still life and domestic genre scenes to new heights of sophistication. Working throughout the <a href="/movement/rococo"><strong>Rococo</strong></a> era, he rejected the fashionable mythological subjects of his contemporaries in favor of humble kitchen utensils, fruit, and quiet domestic moments.</p>

<p>Born in Paris to a cabinetmaker, Chardin rarely left the city. He trained under history painters Pierre-Jacques Cazes and Noël-Nicolas Coypel but found his true calling in still life. Admission to the Académie Royale in 1728 came through his remarkable paintings "The Ray" and "The Buffet," which demonstrated his ability to render textures with almost magical precision.</p>

<p>His still lifes of kitchen objects, dead game, and <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flowers</strong></a> show careful attention to light and surface. Unlike Flemish predecessors who filled canvases with abundance, Chardin arranged simple objects with profound attention to form and tone. His genre scenes of servants, children, and domestic life brought similar dignity to everyday subjects.</p>

<p>Diderot praised him highly in his Salon reviews. By 1770, Chardin held the highest academic honors and received a royal pension. When failing eyesight forced him to abandon oil painting, he turned to pastels with equal success. His works influenced Manet, Cézanne, and Morandi. Major collections exist at the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Chardin known for painting?",
          answer: "He painted still lifes of kitchen objects, fruit, and dead game, plus domestic genre scenes showing servants and children with remarkable dignity."
        },
        {
          question: "What art movement was Chardin part of?",
          answer: "He worked during the <a href=\"/movement/rococo\"><strong>Rococo</strong></a> period but rejected fashionable mythological subjects for humble domestic themes."
        },
        {
          question: "Where can I see Chardin paintings?",
          answer: "Major collections are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and the Hermitage."
        },
        {
          question: "What made Chardin's still lifes special?",
          answer: "He rendered textures with magical precision and arranged simple objects with profound attention to form, light, and tone, unlike cluttered Flemish predecessors."
        },
        {
          question: "Who praised Chardin's work?",
          answer: "The philosopher Diderot wrote enthusiastic reviews. Later, Manet, Cézanne, and Morandi acknowledged his profound influence on their approach to still life."
        },
        {
          question: "What did Chardin do when his eyesight failed?",
          answer: "When he could no longer paint in oils, he turned to pastel <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> with equal success in his final years."
        }
      ])
    }
  },
  {
    slug: 'joachim-patinir',
    data: {
      bio: `<p><strong>Joachim Patinir</strong> (c. 1480–1524) was a Flemish painter credited as the first Western artist to specialize in <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape painting</strong></a>. Working in Antwerp during the <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>, he developed the "world landscape" format showing vast panoramic views from elevated viewpoints, a format that influenced landscape painting for generations.</p>

<p>Little is known of Patinir's early life, though he may have trained with Gerard David in Bruges. He joined Antwerp's Guild of St. Luke in 1515 and became friends with Albrecht Dürer, who attended his second wedding in 1521 and called him "the good landscape painter," coining a new term for this type of artist.</p>

<p>Patinir's paintings typically show religious subjects, but the figures become small elements within vast, meticulously detailed landscapes. His technique of aerial perspective, graduating colors from warm brown foregrounds through green middle grounds to <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> distances, created convincing illusions of depth. Fantastic rock formations, winding rivers, and distant towns characterize his distinctive style.</p>

<p>He collaborated with other artists, including Quentin Matsys, who sometimes added figures to his landscapes. Only about five signed works survive, though many more are attributed to him or his workshop. Major paintings can be found at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "Why was Joachim Patinir historically significant?",
          answer: "He was the first Western artist to specialize in <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape painting</strong></a>, inventing the \"world landscape\" panoramic format."
        },
        {
          question: "What movement was Patinir part of?",
          answer: "He worked during the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> in Antwerp, developing techniques that influenced landscape painting for centuries."
        },
        {
          question: "Where can I see Patinir paintings?",
          answer: "Major works are at the <a href=\"/museum/prado\"><strong>Prado</strong></a>, which held a major exhibition in 2007, plus the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> and <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>."
        },
        {
          question: "What was Patinir's relationship with Dürer?",
          answer: "Albrecht Dürer befriended him in Antwerp, attended his wedding, painted his portrait, and coined the term \"landscape painter\" to describe him."
        },
        {
          question: "What characterizes Patinir's landscapes?",
          answer: "Vast panoramic views, fantastic rock formations, winding rivers, aerial perspective with <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> distances, and small religious figures."
        },
        {
          question: "Did Patinir work with other artists?",
          answer: "Yes, he collaborated with Quentin Matsys and others who added figures to his <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, a common practice in Antwerp workshops."
        }
      ])
    }
  },
  {
    slug: 'juan-de-juanes',
    data: {
      bio: `<p><strong>Juan de Juanes</strong> (c. 1507–1579), born Vicente Juan Masip, was the foremost painter of the Valencian school during the Spanish <a href="/movement/renaissance"><strong>Renaissance</strong></a>. He trained with his painter father, Vicente Masip, and developed a style strongly influenced by Italian masters, particularly Raphael and Leonardo da Vinci.</p>

<p>Juanes's paintings reflect the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious</strong></a> fervor of Counter-Reformation Spain. He reportedly never painted secular subjects and would take communion before beginning work on sacred images. His approach combined Italian compositional grace with Spanish spiritual intensity, creating devotional images that remained influential for centuries.</p>

<p>His version of the Immaculate Conception, showing the Virgin standing on a crescent moon surrounded by angels, established an iconographic type that Spanish painters followed for generations. The St. Stephen Retable (c. 1562), now at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, represents his finest achievement, depicting scenes from the protomartyr's life with remarkable narrative clarity.</p>

<p>Juanes worked primarily for Valencian churches and monasteries, though his reputation spread throughout Spain. His two daughters, Dorotea and Margarita, became painters themselves, specializing in portrait miniatures. Major works can be found at the Prado, the Valencia Museum of Fine Arts, and the Hermitage Museum in St. Petersburg. He died in Bocairent while working on a church altarpiece.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Juan de Juanes known for?",
          answer: "He painted <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious subjects</strong></a> with Italian grace, establishing the Spanish iconography of the Immaculate Conception."
        },
        {
          question: "What movement was Juan de Juanes part of?",
          answer: "He was the leading painter of the Spanish <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> in Valencia, blending Italian and Spanish traditions."
        },
        {
          question: "Where can I see Juan de Juanes paintings?",
          answer: "Major works are at the <a href=\"/museum/prado\"><strong>Prado</strong></a>, Valencia Museum of Fine Arts, and the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg."
        },
        {
          question: "What influenced Juanes's style?",
          answer: "Italian masters including Raphael, Leonardo da Vinci, and Sebastiano del Piombo shaped his graceful compositions and soft modeling."
        },
        {
          question: "Did Juanes have a family of artists?",
          answer: "Yes, he trained with his father Vicente Masip, and his two daughters, Dorotea and Margarita, became portrait miniature painters."
        },
        {
          question: "What is Juanes's most important work?",
          answer: "The St. Stephen Retable (c. 1562) at the <a href=\"/museum/prado\"><strong>Prado</strong></a> shows scenes from the saint's life and represents his finest achievement."
        }
      ])
    }
  },
  {
    slug: 'lucas-cranach-elder',
    data: {
      bio: `<p><strong>Lucas Cranach the Elder</strong> (c. 1472–1553) was a German <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter and printmaker who became one of the most important artists of the Protestant Reformation. Born in Kronach, Franconia, he moved to Vienna around 1501 before being appointed court painter to the Electors of Saxony in 1505, a position he held for nearly fifty years.</p>

<p>Cranach developed a distinctive style featuring elongated figures, often depicted nude as Venus, Lucretia, or mythological heroines. These works combined Northern detail with Italianate subjects, creating images that pleased humanist patrons while maintaining Germanic character. His workshop became extremely productive, using systematic techniques to meet high demand.</p>

<p>As a close friend of Martin Luther, Cranach became the visual voice of the Reformation. He produced numerous portraits of Luther and other reformers, woodcut illustrations for Luther's Bible translation, and propagandistic images contrasting Protestant and Catholic beliefs. His portraits documented the leading figures of 16th-century German politics and religion.</p>

<p>Cranach's workshop, eventually run by his son Lucas the Younger, produced over 5,000 paintings. His serpent signature (a winged snake holding a ring) appeared on works after 1508. Major collections exist at the <a href="/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> Munich, the <a href="/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie Berlin</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> Vienna.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Lucas Cranach known for?",
          answer: "He painted Reformation portraits, religious subjects, and distinctive <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female</strong></a> nudes with elongated figures as mythological heroines."
        },
        {
          question: "What was Cranach's connection to Martin Luther?",
          answer: "They were close friends. Cranach painted numerous Luther portraits and created woodcuts for Luther's Bible and <a href=\"/movement/renaissance\"><strong>Reformation</strong></a> propaganda."
        },
        {
          question: "Where can I see Cranach paintings?",
          answer: "Major collections are at the <a href=\"/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a>, <a href=\"/museum/gemaldegalerie-berlin\"><strong>Gemäldegalerie Berlin</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and Vienna's <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a>."
        },
        {
          question: "What is Cranach's serpent signature?",
          answer: "After 1508, his works bore a winged serpent holding a ring in its mouth, granted as a coat of arms by the Elector of Saxony."
        },
        {
          question: "How productive was Cranach's workshop?",
          answer: "His workshop produced over 5,000 paintings using systematic techniques, with his son Lucas the Younger continuing the business."
        },
        {
          question: "What movement was Cranach part of?",
          answer: "He worked during the German <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> and became the leading visual artist of the Protestant Reformation."
        }
      ])
    }
  },
  {
    slug: 'pietro-da-cortona',
    data: {
      bio: `<p><strong>Pietro da Cortona</strong> (1596–1669), born Pietro Berrettini, was an Italian <a href="/movement/baroque"><strong>Baroque</strong></a> painter and architect who helped define the exuberant Roman Baroque style. Born in Cortona, Tuscany, he trained in Florence before moving to Rome around 1612, where he studied classical sculpture and the works of Raphael and the Carracci.</p>

<p>His masterpiece, the ceiling fresco "Allegory of Divine Providence and Barberini Power" (1633–1639) at Palazzo Barberini, marks a watershed in Baroque painting. This vast illusionistic composition, showing figures bursting through an architectural framework into infinite sky, established conventions for grand decorative painting across Europe.</p>

<p>Cortona's influence extended to architecture. His church of Santi Luca e Martina (1635–1650) was the first Baroque church designed and built as a complete unity. The facades of Santa Maria della Pace (1656–1657) and Santa Maria in Via Lata (1658–1662) rank among Rome's most innovative architectural designs.</p>

<p>He also completed major fresco cycles at the Palazzo Pitti in Florence (1637–1647) depicting the Four Ages of Man and planetary rooms, and at Santa Maria in Vallicella (1647–1665) in Rome. His style, combining dramatic movement, rich <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colors</strong></a>, and illusionistic effects, influenced decorative painting throughout the Baroque era. Major works remain in Rome at the churches and palaces he decorated.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Pietro da Cortona known for?",
          answer: "He created grand illusionistic ceiling frescoes and innovative <a href=\"/movement/baroque\"><strong>Baroque</strong></a> architecture that defined the Roman Baroque style."
        },
        {
          question: "What is Cortona's masterpiece?",
          answer: "The ceiling fresco \"Allegory of Divine Providence\" (1633–1639) at Palazzo Barberini established conventions for Baroque decorative painting across Europe."
        },
        {
          question: "Was Cortona only a painter?",
          answer: "No, he was equally important as an architect. His churches in Rome, including Santi Luca e Martina, pioneered Baroque architectural design."
        },
        {
          question: "Where can I see Cortona's work?",
          answer: "His frescoes remain in situ at Palazzo Barberini, Palazzo Pitti in Florence, and Roman churches including Santa Maria in Vallicella."
        },
        {
          question: "What movement was Cortona part of?",
          answer: "He was one of the key figures in the emergence of Roman <a href=\"/movement/baroque\"><strong>Baroque</strong></a>, alongside Bernini and Borromini."
        },
        {
          question: "How did Cortona influence later artists?",
          answer: "His illusionistic ceiling techniques became the model for <a href=\"/movement/baroque\"><strong>Baroque</strong></a> and <a href=\"/movement/rococo\"><strong>Rococo</strong></a> decorative painting throughout Europe."
        }
      ])
    }
  },
  {
    slug: 'quentin-matsys',
    data: {
      bio: `<p><strong>Quentin Matsys</strong> (1466–1530) was a Flemish painter who founded the Antwerp school of painting and helped transition <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> art from its medieval roots toward more humanistic themes. Born in Leuven, legend holds he was trained as a blacksmith before becoming a painter, though this romantic story may be apocryphal.</p>

<p>Matsys joined Antwerp's Guild of St. Luke in 1491 and quickly established himself as the city's leading painter. His style synthesized earlier Flemish traditions from Van Eyck and Memling with newer Italian influences, particularly from Leonardo da Vinci. This combination produced works of great refinement that appealed to the sophisticated merchant class of Antwerp.</p>

<p>His portraits and religious paintings show meticulous attention to detail, while his genre scenes introduced a new element of social satire. "The Money Changer and His Wife" (1514) and "The Ugly Duchess" (c. 1513), which later inspired John Tenniel's illustrations for Alice in Wonderland, demonstrate his interest in human character and moral commentary.</p>

<p>Matsys befriended leading humanists including Erasmus and Thomas More, and Dürer visited his workshop in 1520. His sons Jan and Cornelis became painters, continuing the family tradition. Major works can be found at the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and Antwerp's Royal Museum of Fine Arts.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Quentin Matsys known for?",
          answer: "He founded the Antwerp school of painting, created refined <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, and pioneered satirical genre scenes like \"The Ugly Duchess.\""
        },
        {
          question: "What movement was Matsys part of?",
          answer: "He worked in the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition, transitioning Flemish art toward humanistic themes influenced by Italy."
        },
        {
          question: "Where can I see Matsys paintings?",
          answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, Antwerp's Royal Museum, and the Prado."
        },
        {
          question: "Was Matsys really a blacksmith first?",
          answer: "Legend says he trained as a blacksmith before becoming a painter, but this romantic story may be apocryphal. A wrought-iron well in Antwerp is attributed to him."
        },
        {
          question: "Who were Matsys's famous friends?",
          answer: "He befriended humanists Erasmus and Thomas More, and Albrecht Dürer visited his Antwerp workshop in 1520."
        },
        {
          question: "What is \"The Ugly Duchess\"?",
          answer: "This satirical <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> (c. 1513) inspired John Tenniel's Duchess illustration in Lewis Carroll's Alice in Wonderland."
        }
      ])
    }
  },
  {
    slug: 'raoul-dufy',
    data: {
      bio: `<p><strong>Raoul Dufy</strong> (1877–1953) was a French painter associated with <a href="/movement/fauvism"><strong>Fauvism</strong></a> who developed a distinctive decorative style featuring bold colors, rapid brushwork, and joyful subjects. Born in Le Havre, Normandy, he studied at the École des Beaux-Arts in Paris, where he met Georges Braque and Othon Friesz.</p>

<p>Seeing Henri Matisse's "Luxe, Calme et Volupté" at the 1905 Salon des Indépendants transformed Dufy's approach. He adopted Fauvist techniques of pure, non-naturalistic color before developing his own personal style by the 1920s. His mature work featured spontaneous outlines and broad areas of vivid color that seemed to float independently of each other.</p>

<p>Dufy painted pleasure-filled scenes of French leisure: regattas, <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse racing</strong></a>, concerts, and seaside resorts. He also designed textiles for the fashion designer Paul Poiret, creating bold patterns that influenced decorative arts. His 1937 "La Fée Électricité" for the Paris World's Fair was one of the largest paintings ever created, measuring 600 square meters.</p>

<p>Despite suffering from rheumatoid arthritis that eventually forced him to strap brushes to his hands, Dufy received the Grand Prize for painting at the 1952 Venice Biennale. His work can be found at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/moma"><strong>MoMA</strong></a>, the <a href="/museum/tate-modern"><strong>Tate</strong></a>, and the Musée d'Art Moderne de Paris.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Raoul Dufy known for?",
          answer: "He painted joyful scenes of French leisure including regattas, <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horse racing</strong></a>, and resorts with bold <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a> and spontaneous lines."
        },
        {
          question: "What movement was Dufy part of?",
          answer: "He began with <a href=\"/movement/fauvism\"><strong>Fauvism</strong></a> after seeing Matisse's work in 1905, then developed his own distinctive decorative style by the 1920s."
        },
        {
          question: "Where can I see Dufy paintings?",
          answer: "Major collections are at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/museum/tate-modern\"><strong>Tate</strong></a>, and Musée d'Art Moderne de Paris."
        },
        {
          question: "Did Dufy work in other media besides painting?",
          answer: "Yes, he designed bold textile patterns for fashion designer Paul Poiret that influenced decorative arts throughout the 1920s."
        },
        {
          question: "What is Dufy's largest work?",
          answer: "\"La Fée Électricité\" (1937) for the Paris World's Fair measured 600 square meters, one of the largest paintings ever created."
        },
        {
          question: "What recognition did Dufy receive?",
          answer: "He won the Grand Prize for painting at the 1952 Venice Biennale despite suffering from arthritis that impaired his ability to hold brushes."
        }
      ])
    }
  },
  {
    slug: 'robert-delaunay',
    data: {
      bio: `<p><strong>Robert Delaunay</strong> (1885–1941) was a French artist who, with his wife Sonia, co-founded Orphism, an abstract movement emphasizing pure color and geometric forms. Born in Paris, he abandoned his apprenticeship in stage design at 19 to pursue painting, exhibiting at the Salon des Indépendants by 1904.</p>

<p>Delaunay developed through Neo-Impressionism and <a href="/movement/cubism"><strong>Cubism</strong></a> before finding his distinctive voice. His "Eiffel Tower" series (1909–1912) fragmented the iconic structure into dynamic, interpenetrating planes. His "Window" paintings (1912) moved toward pure abstraction, using prismatic <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colors</strong></a> to suggest light without representing objects.</p>

<p>The poet Guillaume Apollinaire coined "Orphism" to describe this color-based abstraction, comparing the visual rhythms to music. Delaunay's theories about simultaneous color contrasts influenced many artists, including members of Der Blaue Reiter, Paul Klee, and August Macke. His "Circular Forms" series (1912–1913) achieved complete abstraction through rotating discs of pure color.</p>

<p>He spent the war years in Spain and Portugal with Sonia, returning to Paris in 1921. Later work included monumental murals for the 1937 Paris Exposition. Major collections exist at the <a href="/museum/centre-pompidou"><strong>Centre Pompidou</strong></a>, the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, the <a href="/museum/guggenheim"><strong>Guggenheim</strong></a>, and the <a href="/museum/tate-modern"><strong>Tate</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Robert Delaunay known for?",
          answer: "He co-founded Orphism, pioneering abstract art based on pure <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>color</strong></a> and geometric forms rather than representation."
        },
        {
          question: "What movement was Delaunay part of?",
          answer: "He moved from <a href=\"/movement/cubism\"><strong>Cubism</strong></a> to found Orphism with his wife Sonia, emphasizing color over the muted tones of analytical Cubism."
        },
        {
          question: "Where can I see Delaunay paintings?",
          answer: "Major works are at <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a>, <a href=\"/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/museum/guggenheim\"><strong>Guggenheim</strong></a>, and the <a href=\"/museum/tate-modern\"><strong>Tate</strong></a>."
        },
        {
          question: "What subjects did Delaunay paint?",
          answer: "Early work featured the Eiffel Tower and city views; later work became purely <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> with circular forms and color discs."
        },
        {
          question: "Who coined the term Orphism?",
          answer: "The poet Guillaume Apollinaire named the movement after Orpheus, comparing the visual rhythms of color to music."
        },
        {
          question: "Who did Delaunay influence?",
          answer: "His color theories influenced Der Blaue Reiter painters, Paul Klee, August Macke, Lyonel Feininger, and the development of <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract art</strong></a>."
        }
      ])
    }
  }
];

async function updateArtists() {
  console.log('Starting batch 2 artist updates...');

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

  console.log('Batch 2 complete!');
}

updateArtists()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
