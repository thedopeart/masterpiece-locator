const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 3: Artists 21-30
const artistUpdates = [
  {
    slug: 'titian',
    data: {
      bio: `<p><strong>Titian</strong> (c. 1488–1576), born Tiziano Vecellio, was the greatest painter of the <a href="/movement/venetian-school"><strong>Venetian School</strong></a> and one of the most influential artists in Western history. Born in Pieve di Cadore in the Italian Alps, he trained under Giovanni Bellini and worked alongside Giorgione, eventually becoming Venice's official painter.</p>

<p>Titian revolutionized the use of color in painting. His technique evolved from precise early work toward increasingly free brushwork in his later years, applying paint in broken strokes that anticipated <a href="/movement/impressionism"><strong>Impressionism</strong></a> by three centuries. His rich, warm <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colors</strong></a> and masterful handling of light influenced generations of painters from Rubens to Velázquez to Rembrandt.</p>

<p>He excelled in every genre: religious altarpieces like the "Assumption of the Virgin" (1518), mythological paintings including the sensuous "Venus of Urbino" (1538), and portraits of emperors, popes, and aristocrats. Charles V appointed him court painter, and the emperor reportedly picked up a brush Titian dropped, saying a painter so great deserved to be served by a Caesar.</p>

<p>Titian worked into his late eighties, his final paintings showing astonishing freedom and emotional depth. Major collections exist at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, the <a href="/museum/prado"><strong>Prado</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and the <a href="/museum/louvre"><strong>Louvre</strong></a>. His "Assumption" remains in Venice's Basilica dei Frari.</p>`,
      faqs: JSON.stringify([
        {
          question: "Why is Titian considered so important?",
          answer: "He revolutionized color in painting, influenced centuries of artists, and excelled in every genre from <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> to religious works to mythologies."
        },
        {
          question: "What is Titian's most famous painting?",
          answer: "\"Venus of Urbino\" (1538) at the <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a> is among his most celebrated, though the \"Assumption of the Virgin\" made his reputation."
        },
        {
          question: "Where can I see Titian paintings?",
          answer: "Major collections are at the <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>, <a href=\"/museum/prado\"><strong>Prado</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, and Venetian churches."
        },
        {
          question: "What movement was Titian part of?",
          answer: "He was the leading master of the <a href=\"/movement/venetian-school\"><strong>Venetian School</strong></a> and High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>, known for color over the line-based approach of Florentine art."
        },
        {
          question: "Who were Titian's patrons?",
          answer: "He painted for Emperor Charles V, Pope Paul III, Philip II of Spain, and numerous Italian nobility, becoming the most sought-after portraitist in Europe."
        },
        {
          question: "How did Titian's style change over time?",
          answer: "His late work used increasingly free, broken brushstrokes and rich <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a>, anticipating Impressionist techniques by centuries."
        }
      ])
    }
  },
  {
    slug: 'william-hogarth',
    data: {
      bio: `<p><strong>William Hogarth</strong> (1697–1764) was the first great English-born artist to achieve international recognition, known for satirical paintings and prints that chronicled 18th-century society with wit and moral purpose. Born in London to a struggling schoolmaster, he trained as an engraver before turning to painting.</p>

<p>Hogarth invented what he called "modern moral subjects," narrative painting cycles that told cautionary tales through sequential images. "A Harlot's Progress" (1731), "A Rake's Progress" (1733–1735), and "Marriage A-la-Mode" (1743–1745) depicted the downfall of characters undone by vice, vanity, or arranged marriages. These works combined artistic ambition with popular appeal, reaching wide audiences through printed engravings.</p>

<p>Beyond narrative cycles, Hogarth excelled at <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> and conversation pieces showing groups in informal settings. His writings on aesthetics, particularly "The Analysis of Beauty" (1753), influenced artistic theory. He also championed artists' rights, successfully lobbying Parliament to pass the Engravers' Copyright Act of 1735, the first legislation protecting visual artists' intellectual property.</p>

<p>The original paintings of "A Rake's Progress" are at Sir John Soane's Museum in London. Other major works can be found at the <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and his preserved home, Hogarth's House in Chiswick.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was William Hogarth known for?",
          answer: "He created satirical narrative painting cycles like \"A Rake's Progress\" that told moral tales about 18th-century society through sequential images."
        },
        {
          question: "Where can I see \"A Rake's Progress\"?",
          answer: "The original eight paintings are at Sir John Soane's Museum in London, displayed daily for limited viewing periods."
        },
        {
          question: "Where else can I see Hogarth paintings?",
          answer: "Works are at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and Hogarth's House museum in Chiswick."
        },
        {
          question: "What was Hogarth's Act?",
          answer: "The Engravers' Copyright Act of 1735, which Hogarth lobbied for, was the first law protecting visual artists' rights to their work."
        },
        {
          question: "Did Hogarth paint portraits?",
          answer: "Yes, he excelled at <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and \"conversation pieces\" showing informal group scenes, though his narrative works are more famous."
        },
        {
          question: "What subjects did Hogarth satirize?",
          answer: "He critiqued arranged marriages, social climbing, gambling, prostitution, and the hypocrisy of both aristocrats and the emerging middle class."
        }
      ])
    }
  },
  {
    slug: 'william-merritt-chase',
    data: {
      bio: `<p><strong>William Merritt Chase</strong> (1849–1916) was a leading American painter and one of the most influential art teachers of his generation. Born in Indiana, he studied at the National Academy of Design in New York before wealthy St. Louis patrons sent him to Munich's Royal Academy, where he absorbed the dark tones and bravura brushwork of the Old Masters.</p>

<p>Returning to America in 1878, Chase established a legendary studio in New York's Tenth Street Studio Building, filling it with art objects, tapestries, and curios that became as famous as his paintings. His style evolved from Munich's dramatic chiaroscuro toward brighter, looser <a href="/movement/impressionism"><strong>Impressionist</strong></a> techniques after meeting Alfred Stevens and visiting Europe.</p>

<p>His paintings of Prospect and Central Parks, and especially the summer <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> painted at his Shinnecock Hills home on Long Island, rank among the finest examples of American Impressionism. He also produced striking still lifes of fish that demonstrate his technical mastery in a more traditional vein.</p>

<p>Chase taught at the Art Students League, the Pennsylvania Academy, and his own schools, counting among his students Georgia O'Keeffe, Edward Hopper, and Marsden Hartley. His works can be found at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts Boston</strong></a>, and the Smithsonian American Art Museum.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was William Merritt Chase known for?",
          answer: "He painted American <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, particularly scenes of parks and Long Island, and was a hugely influential teacher."
        },
        {
          question: "Who were Chase's famous students?",
          answer: "He taught Georgia O'Keeffe, Edward Hopper, Marsden Hartley, and Charles Demuth, shaping generations of American artists."
        },
        {
          question: "Where can I see Chase paintings?",
          answer: "Major works are at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts Boston</strong></a>, and Smithsonian American Art Museum."
        },
        {
          question: "What are the Shinnecock paintings?",
          answer: "Chase painted summer <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> at his Long Island home that became defining examples of American <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>."
        },
        {
          question: "How did Chase's style develop?",
          answer: "He moved from dark Munich academic training toward brighter <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> colors after exposure to French painting."
        },
        {
          question: "What was special about Chase's studio?",
          answer: "His Tenth Street studio, filled with art objects and tapestries, became a cultural landmark and appeared in many of his paintings."
        }
      ])
    }
  },
  {
    slug: 'albert-joseph-moore',
    data: {
      bio: `<p><strong>Albert Joseph Moore</strong> (1841–1893) was an English painter who became a leading figure in the Aesthetic Movement, creating idealized images of draped female figures that emphasized decorative beauty over narrative content. Born in York to a family of artists, he trained at the Royal Academy Schools and traveled to Rome and Paris in the 1860s.</p>

<p>Moore developed a distinctive style featuring <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> in flowing classical drapery, posed against patterned backgrounds in carefully orchestrated color harmonies. His titles, often simply describing colors or moods ("Blossoms," "Dreamers," "Azaleas"), emphasized that his art existed purely for aesthetic pleasure rather than storytelling or moral instruction.</p>

<p>He befriended James McNeill Whistler, sharing the American artist's commitment to "art for art's sake." Both artists explored musical analogies for painting, with Moore's harmonious arrangements of figure and pattern creating visual equivalents of musical compositions. His meticulous working method involved nude studies, separate drapery studies, and carefully planned color schemes.</p>

<p>Though never elected to the Royal Academy (his uncompromising views may have antagonized academicians), Moore achieved recognition as an Associate of the Royal Society of Painters in Watercolour. His works are in the collections of <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, the Victoria and Albert Museum, Birmingham Museum and Art Gallery, and the Walker Art Gallery Liverpool.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Albert Joseph Moore known for?",
          answer: "He painted idealized <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in classical drapery as pure aesthetic compositions emphasizing beauty over narrative."
        },
        {
          question: "What movement was Moore part of?",
          answer: "He was a leading figure in the Aesthetic Movement, committed to \"art for art's sake\" alongside his friend James McNeill Whistler."
        },
        {
          question: "Where can I see Albert Moore paintings?",
          answer: "Works are at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>, Victoria and Albert Museum, Birmingham Museum and Art Gallery, and Walker Art Gallery."
        },
        {
          question: "How did Moore title his paintings?",
          answer: "He used simple titles describing colors or moods (\"Blossoms,\" \"Azaleas\") rather than narratives, emphasizing pure visual beauty."
        },
        {
          question: "What was Moore's relationship with Whistler?",
          answer: "They were close friends sharing Aesthetic principles. Both explored musical analogies for painting and prioritized color harmony over storytelling."
        },
        {
          question: "Why wasn't Moore elected to the Royal Academy?",
          answer: "His uncompromising views on pure aesthetics likely antagonized academicians who valued narrative and moral content in painting."
        }
      ])
    }
  },
  {
    slug: 'bronzino',
    data: {
      bio: `<p><strong>Bronzino</strong> (1503–1572), born Agnolo di Cosimo, was a Florentine <a href="/movement/mannerism"><strong>Mannerist</strong></a> painter whose elegant portraits defined the visual image of the Medici court. Born to a butcher, he trained under Raffaellino del Garbo and then Jacopo da Pontormo, who became his lifelong mentor and artistic father figure.</p>

<p>Bronzino served as court painter to Duke Cosimo I de' Medici from 1539 until his death, producing portraits of the duke, his wife Eleonora of Toledo, and their children. These paintings show sitters with cool, controlled expressions, dressed in elaborate costumes rendered with astonishing precision. The emotional distance and polished surfaces became hallmarks of Mannerist portraiture.</p>

<p>Beyond portraits, Bronzino created complex allegorical paintings. "Venus, Cupid, Folly, and Time" (c. 1545), now at the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, exemplifies his sophisticated approach to mythological subjects, featuring marble-like figures in deliberately ambiguous compositions. He also designed tapestries depicting the Story of Joseph for the Palazzo Vecchio.</p>

<p>Bronzino helped found the Florentine Academy of Art in 1563 and contributed to Giorgio Vasari's "Lives of the Artists." His works remain primarily in Florence at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, Palazzo Vecchio, and various Florentine churches, with other major paintings at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> and the <a href="/museum/louvre"><strong>Louvre</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Bronzino known for?",
          answer: "He created elegant <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of the Medici court with polished surfaces and cool, controlled expressions that defined <a href=\"/movement/mannerism\"><strong>Mannerist</strong></a> style."
        },
        {
          question: "What movement was Bronzino part of?",
          answer: "He was a leading <a href=\"/movement/mannerism\"><strong>Mannerist</strong></a> painter, known for sophisticated elegance, complex poses, and emotional distance in his portraits."
        },
        {
          question: "Where can I see Bronzino paintings?",
          answer: "Major works are at the <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>, Palazzo Vecchio in Florence, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>."
        },
        {
          question: "Who did Bronzino paint?",
          answer: "He served as court painter to Duke Cosimo I de' Medici, painting the duke, Duchess Eleonora of Toledo, and their children."
        },
        {
          question: "What is Bronzino's most famous allegorical painting?",
          answer: "\"Venus, Cupid, Folly, and Time\" (c. 1545) at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> shows his sophisticated approach to mythological subjects."
        },
        {
          question: "Who trained Bronzino?",
          answer: "He trained under Jacopo da Pontormo, who became his lifelong mentor and deeply influenced his <a href=\"/movement/mannerism\"><strong>Mannerist</strong></a> style."
        }
      ])
    }
  },
  {
    slug: 'edward-burne-jones',
    data: {
      bio: `<p><strong>Edward Burne-Jones</strong> (1833–1898) was a British artist who became the leading painter of the second generation of <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelites</strong></a>, creating dreamlike images drawn from medieval legend, classical mythology, and Arthurian romance. Born in Birmingham, he met William Morris at Oxford, and together they transformed the decorative arts.</p>

<p>Burne-Jones studied informally with Dante Gabriel Rossetti and developed a distinctive style featuring elongated figures, rich colors, and compositions that suggest tapestry or stained glass. His paintings evoke a melancholic, otherworldly beauty, showing knights, maidens, and mythological figures in timeless settings.</p>

<p>Beyond painting, he designed stained glass windows for Morris & Company that can be found in churches across Britain, including magnificent windows at Birmingham Cathedral and Christ Church, Oxford. He also designed tapestries, tiles, jewelry, and book illustrations, including the celebrated decorations for the Kelmscott Press edition of Chaucer.</p>

<p>By the 1880s, Burne-Jones had become one of Europe's most admired painters. Major paintings include "King Cophetua and the Beggar Maid" (1884) and "The Beguiling of Merlin" (1877). The largest collection of his work is at Birmingham Museum and Art Gallery, with other major holdings at <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Edward Burne-Jones known for?",
          answer: "He painted dreamlike scenes from medieval legend and mythology with elongated figures and rich <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a>, becoming a leading <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a>."
        },
        {
          question: "What movement was Burne-Jones part of?",
          answer: "He led the second generation of the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a>, combining their ideals with Aestheticism and Symbolism."
        },
        {
          question: "Where can I see Burne-Jones paintings?",
          answer: "The largest collection is at Birmingham Museum and Art Gallery, with major works at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>."
        },
        {
          question: "Did Burne-Jones work in other media?",
          answer: "Yes, he designed stained glass, tapestries, tiles, jewelry, and book illustrations for Morris & Company and the Kelmscott Press."
        },
        {
          question: "What was Burne-Jones's connection to William Morris?",
          answer: "They met at Oxford and became lifelong collaborators, together transforming Victorian decorative arts through Morris & Company."
        },
        {
          question: "What subjects did Burne-Jones paint?",
          answer: "He favored Arthurian legend, Greek mythology, and medieval romance, creating otherworldly scenes of knights, maidens, and <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angels</strong></a>."
        }
      ])
    }
  },
  {
    slug: 'ernest-meissonier',
    data: {
      bio: `<p><strong>Ernest Meissonier</strong> (1815–1891) was a French <a href="/movement/academic-art"><strong>Academic</strong></a> painter who became one of the most celebrated and highest-paid artists of the 19th century. Born in Lyon, he trained under Léon Cogniet in Paris and developed extraordinary technical skill, particularly in rendering fine details and historical costumes.</p>

<p>Meissonier gained fame for small-scale genre paintings showing 17th and 18th-century figures in exquisitely detailed interiors. His meticulous craftsmanship amazed contemporary critics, with John Ruskin examining his work under a magnifying glass and marveling at the precision. These cabinet pictures commanded astronomical prices from collectors worldwide.</p>

<p>His most ambitious works depicted Napoleonic military scenes. "1807, Friedland" (1875) at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> shows Napoleon's cavalry charge with astonishing accuracy in horses, uniforms, and equipment. "Campaign of France, 1814" at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> depicts the emperor's dejected retreat through snow. Meissonier obsessively researched these subjects, building scale models and studying horse locomotion.</p>

<p>Though his reputation declined in the 20th century as taste shifted toward Impressionism, Meissonier was enormously influential in his time. He served as first chairman of the Société Nationale des Beaux-Arts. Major works are at the Musée d'Orsay, Metropolitan Museum, and the Wallace Collection in London.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Ernest Meissonier known for?",
          answer: "He painted meticulously detailed historical genre scenes and Napoleonic military subjects that made him one of the highest-paid 19th-century artists."
        },
        {
          question: "What movement was Meissonier part of?",
          answer: "He was a leading <a href=\"/movement/academic-art\"><strong>Academic</strong></a> painter, achieving the highest official honors while Impressionists remained controversial."
        },
        {
          question: "Where can I see Meissonier paintings?",
          answer: "Major works are at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the Wallace Collection in London."
        },
        {
          question: "What is \"1807, Friedland\"?",
          answer: "This large painting at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> shows Napoleon's cavalry charge with astonishing accuracy, taking over a decade to complete."
        },
        {
          question: "Why did Meissonier's reputation decline?",
          answer: "Taste shifted toward <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and modernism, making his meticulous academic style seem old-fashioned to 20th-century critics."
        },
        {
          question: "How detailed were Meissonier's paintings?",
          answer: "Critics examined them under magnifying glasses, marveling at his rendering of fabric textures, buttons, and military equipment."
        }
      ])
    }
  },
  {
    slug: 'gerard-david',
    data: {
      bio: `<p><strong>Gerard David</strong> (c. 1460–1523) was the last great master of the Bruges school of <a href="/movement/northern-renaissance"><strong>Early Netherlandish</strong></a> painting. Born in Oudewater in the northern Netherlands, he likely trained with Albert van Ouwater before moving to Bruges in 1484, where he joined the painters' guild and became its dean in 1501.</p>

<p>When Hans Memling died in 1494, David became Bruges' leading painter. His style continued the tradition of Jan van Eyck while introducing atmospheric effects and landscape elements that pointed toward later developments. His paintings show masterful handling of light and shadow, with warm, subtle coloring that creates a dreamlike serenity.</p>

<p>David's most famous works are the twin panels of "The Judgment of Cambyses" (1498), painted for the Bruges town hall as a warning against corrupt judges. The gruesome scene of a judge being flayed alive demonstrated his ability to combine technical brilliance with powerful emotional content. His "Baptism of Christ" triptych (c. 1502–1507) remains in Bruges at the Groeninge Museum.</p>

<p>David maintained workshops in both Bruges and Antwerp, reflecting the shift of artistic activity to the rising commercial center. His work was largely forgotten until rediscovered in the 19th century. Major paintings can be found at the Groeninge Museum Bruges, the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Gerard David known for?",
          answer: "He was the last great master of the Bruges <a href=\"/movement/northern-renaissance\"><strong>Early Netherlandish</strong></a> school, creating <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious paintings</strong></a> with warm color and dreamlike serenity."
        },
        {
          question: "Where can I see Gerard David paintings in Bruges?",
          answer: "The Groeninge Museum holds masterpieces including \"The Judgment of Cambyses\" and the \"Baptism of Christ\" triptych."
        },
        {
          question: "Where else can I see David's work?",
          answer: "Major paintings are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>."
        },
        {
          question: "What is \"The Judgment of Cambyses\"?",
          answer: "These twin panels (1498) show a corrupt judge being arrested and flayed alive, painted for Bruges town hall as a warning against judicial corruption."
        },
        {
          question: "Why was David's work forgotten?",
          answer: "Like many <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painters, his reputation faded until 19th-century scholars rediscovered his identity and documented his paintings."
        },
        {
          question: "What position did David hold in Bruges?",
          answer: "He joined the painters' guild in 1484 and became its dean in 1501, taking over as the city's leading artist after Memling's death."
        }
      ])
    }
  },
  {
    slug: 'henri-fantin-latour',
    data: {
      bio: `<p><strong>Henri Fantin-Latour</strong> (1836–1904) was a French painter celebrated for his <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flower</strong></a> still lifes and group portraits of Parisian artists and writers. Born in Grenoble to a portrait-painter father, he moved to Paris and trained at the École des Beaux-Arts alongside future Impressionists while developing a more conservative style rooted in Old Master traditions.</p>

<p>Though friends with Manet, Whistler, and the Impressionist circle, Fantin-Latour never adopted their techniques. His paintings show careful, traditional craftsmanship influenced by Chardin, Courbet, and Dutch 17th-century masters. His flower paintings, particularly, demonstrate exceptional sensitivity to light, color, and the fragile beauty of blooms.</p>

<p>His group portraits documented the Parisian avant-garde. "Homage to Delacroix" (1864) and "A Studio at Batignolles" (1870) record the artists and writers of his generation in thoughtfully composed arrangements. These paintings serve as invaluable historical records of artistic circles that would soon transform Western art.</p>

<p>English collectors particularly admired his flower pieces, providing steady patronage through his friend Whistler. Later in life, he created lithographs inspired by Wagner's operas. His work can be found at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and the <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Fantin-Latour known for?",
          answer: "He painted exquisite <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flower</strong></a> still lifes and group portraits of Parisian artists including Manet and other future Impressionists."
        },
        {
          question: "Was Fantin-Latour an Impressionist?",
          answer: "No, despite friendships with Manet and Whistler, he maintained a conservative style rooted in Old Master traditions rather than <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>."
        },
        {
          question: "Where can I see Fantin-Latour paintings?",
          answer: "Major collections are at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>."
        },
        {
          question: "What makes Fantin-Latour's flower paintings special?",
          answer: "His <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flower</strong></a> paintings show exceptional sensitivity to light and fragile beauty, influenced by Chardin and Dutch masters."
        },
        {
          question: "What are Fantin-Latour's group portraits?",
          answer: "Paintings like \"A Studio at Batignolles\" document the Parisian avant-garde, serving as invaluable records of artists who transformed modern art."
        },
        {
          question: "Who collected Fantin-Latour's work?",
          answer: "English collectors particularly admired his flower pieces, providing steady patronage through his friend Whistler."
        }
      ])
    }
  },
  {
    slug: 'alphonse-mucha',
    data: {
      bio: `<p><strong>Alphonse Mucha</strong> (1860–1939) was a Czech painter and decorative artist who became the defining figure of Art Nouveau. Born in Moravia, he studied in Munich and Paris before an overnight commission in 1894 changed his life. Asked to create a poster for actress Sarah Bernhardt's play "Gismonda," he produced an image so striking that Parisians tore copies from walls to keep.</p>

<p>Mucha developed "le style Mucha," featuring <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>beautiful women</strong></a> surrounded by flowing hair, sinuous botanical forms, and elaborate decorative patterns, all within distinctive arched frames. His commercial work, including posters, calendars, and packaging, spread this style worldwide, making Art Nouveau accessible to mass audiences.</p>

<p>Beyond commercial design, Mucha created fine art, murals, and decorative panels. His "Four Seasons" series (1896) and similar cycles demonstrated his ability to elevate decorative work to fine art. After returning to Prague, he devoted twenty years to "The Slav Epic" (1912–1926), a cycle of twenty monumental canvases depicting Slavic history.</p>

<p>The Nazis, viewing his nationalist work as dangerous, interrogated the elderly artist after occupying Prague in 1939. He died shortly after. Today, the Mucha Museum in Prague displays his work, and major pieces can be found at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, and Prague's National Gallery.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Alphonse Mucha known for?",
          answer: "He defined Art Nouveau style with posters and decorative work featuring <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>beautiful women</strong></a>, flowing hair, and elaborate botanical patterns."
        },
        {
          question: "What launched Mucha's career?",
          answer: "His 1894 poster for Sarah Bernhardt's \"Gismonda\" became so popular that Parisians stole copies from walls, making him famous overnight."
        },
        {
          question: "Where can I see Mucha's work?",
          answer: "The Mucha Museum in Prague is dedicated to him. Works are also at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/moma\"><strong>MoMA</strong></a>, and Prague's National Gallery."
        },
        {
          question: "What is 'The Slav Epic'?",
          answer: "Twenty monumental canvases depicting Slavic history, created between 1912–1926. Mucha devoted the last decades of his life to this nationalist project."
        },
        {
          question: "Did Mucha work in media besides posters?",
          answer: "Yes, he designed jewelry, theater sets, stamps, banknotes, and created fine art paintings and decorative panel series."
        },
        {
          question: "How did Mucha die?",
          answer: "The Nazis interrogated him in 1939 for his Czech nationalist art. He died shortly after, with over 100,000 Czechs attending his funeral."
        }
      ])
    }
  }
];

async function updateArtists() {
  console.log('Starting batch 3 artist updates...');

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

  console.log('Batch 3 complete!');
}

updateArtists()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
