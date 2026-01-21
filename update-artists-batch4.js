const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 4: Artists 31-40
const artistUpdates = [
  {
    slug: 'anthony-van-dyck',
    data: {
      bio: `<p><strong>Anthony van Dyck</strong> (1599–1641) was a Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter who became the most influential portrait artist of the 17th century. Born in Antwerp to a prosperous silk merchant, he displayed precocious talent, entering Peter Paul Rubens's workshop while still a teenager and becoming an independent master by eighteen.</p>

<p>After establishing himself in Antwerp, van Dyck spent six years in Italy (1621–1627), primarily in Genoa, where he painted aristocratic <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> that set new standards for elegance. He absorbed lessons from Titian, whose rich colors and fluid brushwork profoundly influenced his mature style. His Italian portraits show sitters with relaxed confidence, draped in shimmering silks against grand architectural settings.</p>

<p>In 1632, Charles I invited him to England, knighting him and appointing him Principal Painter to the Crown. His portraits of the king and royal family defined the visual image of the Stuart court, presenting Charles with regal dignity that belied his political troubles. Van Dyck's elegant, flattering style influenced English portraiture for over a century.</p>

<p>He also created religious works and produced the "Iconography," a series of portrait prints of contemporaries. Van Dyck died in London at forty-two, just before the English Civil War destroyed the court he had documented. Major collections exist at the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/prado"><strong>Prado</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Anthony van Dyck known for?",
          answer: "He created elegant aristocratic <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> that set standards for European court painting, particularly his images of Charles I."
        },
        {
          question: "What movement was van Dyck part of?",
          answer: "He worked in the Flemish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition, trained under Rubens, and profoundly influenced by Titian's colors and brushwork."
        },
        {
          question: "Where can I see van Dyck paintings?",
          answer: "Major collections are at <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/prado\"><strong>Prado</strong></a>, and <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>."
        },
        {
          question: "What was van Dyck's role in England?",
          answer: "Charles I knighted him and appointed him Principal Painter. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> defined the Stuart court's visual image."
        },
        {
          question: "What is the Van Dyke beard?",
          answer: "The pointed goatee popular among his portrait subjects became known as a \"Van Dyke beard,\" a fashion term still used today."
        },
        {
          question: "Who trained Anthony van Dyck?",
          answer: "He worked in Peter Paul Rubens's Antwerp workshop as a teenager before becoming an independent master by age eighteen."
        }
      ])
    }
  },
  {
    slug: 'francois-boucher',
    data: {
      bio: `<p><strong>François Boucher</strong> (1703–1770) was the quintessential <a href="/movement/rococo"><strong>Rococo</strong></a> painter, creating sensuous mythological scenes and pastoral fantasies that epitomized French taste during the reign of Louis XV. Born in Paris to a minor painter, he won the Prix de Rome in 1723 and developed his style studying Watteau's drawings and Italian masters.</p>

<p>Under the patronage of Madame de Pompadour, the king's influential mistress, Boucher became the preeminent artist of his era. He painted her portrait repeatedly and decorated royal residences at Versailles, Fontainebleau, and Bellevue. His rosy-fleshed goddesses, playful cupids, and idyllic shepherdesses embodied aristocratic fantasies of love and leisure.</p>

<p>Boucher worked in every decorative medium: tapestry designs for the Beauvais and Gobelins manufactories, stage sets for the Paris Opera, and painted decorations for aristocratic townhouses. His pastoral scenes reinvented the genre, showing elegant <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> dressed as shepherdesses in impossibly picturesque countryside settings.</p>

<p>He rose to become First Painter to the King and director of the Royal Academy in 1765. As Neoclassicism emerged, critics like Diderot attacked his artificiality, but his decorative brilliance remains undeniable. Major collections exist at the Wallace Collection in London, the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was François Boucher known for?",
          answer: "He created sensuous <a href=\"/movement/rococo\"><strong>Rococo</strong></a> mythological scenes, pastorals, and decorative work that epitomized French aristocratic taste."
        },
        {
          question: "What movement was Boucher part of?",
          answer: "He was the quintessential <a href=\"/movement/rococo\"><strong>Rococo</strong></a> painter, defining the style with rosy goddesses, cupids, and idealized pastoral scenes."
        },
        {
          question: "Where can I see Boucher paintings?",
          answer: "Major collections are at the Wallace Collection London, <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>."
        },
        {
          question: "Who was Boucher's main patron?",
          answer: "Madame de Pompadour, mistress of Louis XV, championed his career and commissioned numerous <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and decorations."
        },
        {
          question: "Did Boucher work in other media?",
          answer: "Yes, he designed tapestries for royal manufactories, stage sets for the Paris Opera, and decorations for aristocratic homes."
        },
        {
          question: "Why was Boucher criticized?",
          answer: "As <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a> emerged, critics like Diderot attacked his artificial, frivolous style, though his technical brilliance was acknowledged."
        }
      ])
    }
  },
  {
    slug: 'frederic-bazille',
    data: {
      bio: `<p><strong>Frédéric Bazille</strong> (1841–1870) was a French painter who helped pioneer <a href="/movement/impressionism"><strong>Impressionism</strong></a> before his promising career was cut short by death in the Franco-Prussian War. Born to a wealthy Protestant family in Montpellier, he abandoned medical studies to pursue painting, sharing studios with Monet and Renoir and becoming an integral part of the emerging avant-garde.</p>

<p>Bazille's wealth allowed him to support his struggling friends financially and provide them studio space. His generous nature made him central to the group that would become the Impressionists. He painted alongside Monet at Argenteuil and participated in discussions at the Café Guerbois where the movement's ideas took shape.</p>

<p>His paintings combined careful figure drawing with plein-air light effects, creating distinctive works that bridge academic training and Impressionist innovation. "Family Reunion" (1867) shows his relatives on a terrace in brilliant southern French sunlight. His paintings of male bathers pioneered a subject most contemporaries avoided.</p>

<p>Bazille enlisted when war broke out in 1870 and was killed in battle at Beaune-la-Rolande at twenty-eight, just before the first Impressionist exhibition. He painted barely sixty works, never selling any during his lifetime. The largest collections are at the Musée Fabre in Montpellier and the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Frédéric Bazille known for?",
          answer: "He pioneered <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> with figure paintings in brilliant sunlight, combining academic skill with plein-air techniques."
        },
        {
          question: "Why didn't Bazille become famous in his lifetime?",
          answer: "He was killed in the Franco-Prussian War at 28, just before the first <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> exhibition that would have included his work."
        },
        {
          question: "Where can I see Bazille paintings?",
          answer: "The largest collections are at the Musée Fabre in Montpellier and the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris."
        },
        {
          question: "Who were Bazille's artist friends?",
          answer: "He shared studios with Monet and Renoir, supporting them financially. He was part of the circle that formed <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>."
        },
        {
          question: "What subjects did Bazille paint?",
          answer: "He painted figures in <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, family gatherings in sunlight, and male bathers, a subject most artists avoided."
        },
        {
          question: "How many paintings did Bazille create?",
          answer: "He painted barely sixty works in his short career and never sold any during his lifetime."
        }
      ])
    }
  },
  {
    slug: 'george-stubbs',
    data: {
      bio: `<p><strong>George Stubbs</strong> (1724–1806) was an English painter who elevated <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse painting</strong></a> to high art through unprecedented anatomical accuracy and artistic ambition. Born in Liverpool, he was largely self-taught, studying human and animal anatomy with obsessive dedication that would define his career.</p>

<p>In 1756, Stubbs rented an isolated farmhouse in Lincolnshire where he spent eighteen months dissecting horses, carefully recording their muscular and skeletal structures. His resulting book, "The Anatomy of the Horse" (1766), combined scientific precision with artistic beauty, becoming a standard reference that remained in use for over a century.</p>

<p>His anatomical knowledge transformed sporting art. Where previous horse painters often depicted implausible proportions, Stubbs rendered horses with truthful accuracy that wealthy patrons found irresistible. His portrait of the racehorse "Whistlejacket" (c. 1762) at the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a> shows a rearing stallion against a plain background, elevating the animal portrait to a level previously reserved for royalty.</p>

<p>Beyond horses, Stubbs painted exotic animals including lions, monkeys, and a zebra, often depicting predator-prey encounters that anticipated <a href="/movement/romanticism"><strong>Romantic</strong></a> themes. Long dismissed as merely a sporting painter, he's now recognized among the finest British artists of his era. Major works are at the National Gallery London, the <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, and the Yale Center for British Art.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was George Stubbs known for?",
          answer: "He painted <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a> with unprecedented anatomical accuracy, elevating sporting art to fine art through scientific study."
        },
        {
          question: "What is 'The Anatomy of the Horse'?",
          answer: "Stubbs's 1766 book of detailed anatomical illustrations combined scientific precision with artistic beauty, remaining a standard reference for over a century."
        },
        {
          question: "Where can I see Stubbs paintings?",
          answer: "Major works are at <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a> (including \"Whistlejacket\"), <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>, and Yale Center for British Art."
        },
        {
          question: "What is 'Whistlejacket'?",
          answer: "A life-size <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horse</strong></a> portrait showing a rearing stallion against plain background, now at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> and considered his masterpiece."
        },
        {
          question: "Did Stubbs paint other animals?",
          answer: "Yes, he painted lions, monkeys, zebras, and dramatic predator-prey scenes that anticipated <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> art."
        },
        {
          question: "How did Stubbs learn horse anatomy?",
          answer: "He spent 18 months in an isolated farmhouse dissecting horses, meticulously recording their muscular and skeletal structures."
        }
      ])
    }
  },
  {
    slug: 'hans-holbein-younger',
    data: {
      bio: `<p><strong>Hans Holbein the Younger</strong> (1497–1543) was a German-Swiss painter whose penetrating <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> rank among the greatest in Western art. Born in Augsburg and trained by his father, he established himself in Basel, Switzerland, where he created religious paintings, book illustrations, and portraits of humanist scholars including multiple likenesses of Erasmus.</p>

<p>When the Reformation disrupted Basel's art market, Holbein traveled to England in 1526 with an introduction from Erasmus to Thomas More. He painted More's circle before returning to Basel, then settled permanently in England in 1532. By 1535, he had become King's Painter to Henry VIII, documenting the Tudor court with remarkable psychological insight.</p>

<p>Holbein captured his subjects with uncanny precision, rendering every detail of face, costume, and texture while revealing character with devastating honesty. His portrait of Henry VIII, known through copies and a surviving cartoon, established the king's fearsome public image. "The Ambassadors" (1533), with its famous anamorphic skull, demonstrates his intellectual sophistication and technical virtuosity.</p>

<p>He died of plague in London at forty-five, leaving a relatively small but extraordinarily influential body of work. Major paintings can be found at the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, Windsor Castle's Royal Collection, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the Kunstmuseum Basel.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Hans Holbein the Younger known for?",
          answer: "He created penetrating <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of Tudor England including Henry VIII, combining precise detail with psychological insight."
        },
        {
          question: "What movement was Holbein part of?",
          answer: "He worked in the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition, applying German precision to portraiture with unprecedented psychological depth."
        },
        {
          question: "Where can I see Holbein paintings?",
          answer: "Major works are at <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, Windsor Castle, <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, and Kunstmuseum Basel."
        },
        {
          question: "What is 'The Ambassadors'?",
          answer: "This 1533 double portrait at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> includes a famous distorted skull only visible from certain angles."
        },
        {
          question: "Who introduced Holbein to England?",
          answer: "Erasmus wrote a letter introducing him to Thomas More in 1526. Holbein painted More's circle before becoming King's Painter."
        },
        {
          question: "What happened to Holbein's portrait of Henry VIII?",
          answer: "The original Whitehall Palace mural was destroyed by fire in 1698. The king's image survives through copies and Holbein's preparatory cartoon."
        }
      ])
    }
  },
  {
    slug: 'hyacinthe-rigaud',
    data: {
      bio: `<p><strong>Hyacinthe Rigaud</strong> (1659–1743) was a French <a href="/movement/baroque"><strong>Baroque</strong></a> portrait painter whose image of Louis XIV in coronation robes became the defining representation of absolute monarchy. Born in Perpignan to a Catalan family shortly before France acquired the region, he trained in Montpellier and Lyon before arriving in Paris in 1681.</p>

<p>Rigaud won the Prix de Rome in 1682 but was advised by Charles Le Brun to remain in France and specialize in portraiture. The decision proved wise: he soon caught the attention of the royal court, painting the king's brother in 1688 and rising steadily thereafter. His combination of Flemish attention to luxurious fabrics with French aristocratic elegance made him the preferred portraitist of Louis XIV's later reign.</p>

<p>His 1701 portrait of Louis XIV established the template for royal portraiture across Europe. The aging king appears majestic in ermine-trimmed coronation robes, his posture commanding despite his sixty-three years. Originally intended as a gift for Philip V of Spain, the painting was so admired that a copy was sent instead, and the original remained in France.</p>

<p>Rigaud painted religious figures, artists, and aristocrats alongside royalty, completing over 1,000 portraits during his career. His work can be found at the <a href="/museum/louvre"><strong>Louvre</strong></a>, the Palace of Versailles, the <a href="/museum/prado"><strong>Prado</strong></a>, and the Musée Hyacinthe Rigaud in his native Perpignan.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Hyacinthe Rigaud known for?",
          answer: "He created the iconic 1701 <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> of Louis XIV in coronation robes that defined royal portraiture across Europe."
        },
        {
          question: "What movement was Rigaud part of?",
          answer: "He worked in the French <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition, combining Flemish detail with French aristocratic elegance."
        },
        {
          question: "Where can I see Rigaud paintings?",
          answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, Palace of Versailles, <a href=\"/museum/prado\"><strong>Prado</strong></a>, and the Musée Hyacinthe Rigaud in Perpignan."
        },
        {
          question: "Why is the Louis XIV portrait important?",
          answer: "It established the template for royal portraiture, showing the king in full coronation dress with commanding posture that monarchs across Europe imitated."
        },
        {
          question: "How productive was Rigaud?",
          answer: "He completed over 1,000 <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> during his career, painting royalty, aristocrats, artists, and religious figures."
        },
        {
          question: "Why didn't Rigaud go to Rome?",
          answer: "Though he won the Prix de Rome, Charles Le Brun advised him to stay in France and specialize in portraiture, launching his court career."
        }
      ])
    }
  },
  {
    slug: 'juan-de-valdes-leal',
    data: {
      bio: `<p><strong>Juan de Valdés Leal</strong> (1622–1690) was a Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> painter known for dramatic, emotionally intense works that often confronted viewers with mortality and divine judgment. Born in Seville and trained in Córdoba under Antonio del Castillo, he became a leading figure in Sevillian painting alongside his rival Bartolomé Murillo.</p>

<p>Where Murillo offered comfort through soft, luminous religious imagery, Valdés Leal delivered powerful, sometimes disturbing visions. His brushwork was vigorous and agitated, his colors vivid and dramatic, creating an expressive intensity that could overwhelm viewers. Contemporary accounts suggest Murillo found his rival's gruesome subjects unpleasant to contemplate.</p>

<p>His most famous works are the paired vanitas paintings "In Ictu Oculi" and "Finis Gloriae Mundi" (1670–1672) at the Hospital de la Caridad in Seville. These <a href="https://luxurywallart.com/collections/skeleton-skull-art" target="_blank" rel="noopener"><strong>macabre</strong></a> images show Death extinguishing life's candle and decomposing corpses of a bishop and knight being weighed on divine scales. Created to remind wealthy hospital patrons of mortality, they rank among Baroque art's most powerful memento mori.</p>

<p>Valdés Leal helped found Seville's Academy of Art in 1660, serving as its president after Murillo departed. Major works remain at the Hospital de la Caridad and the Seville Museum of Fine Arts, with others at the <a href="/museum/prado"><strong>Prado</strong></a> and international collections.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Valdés Leal known for?",
          answer: "He created dramatic, emotionally intense <a href=\"/movement/baroque\"><strong>Baroque</strong></a> paintings, especially <a href=\"https://luxurywallart.com/collections/skeleton-skull-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre</strong></a> vanitas images confronting viewers with mortality."
        },
        {
          question: "What are his most famous paintings?",
          answer: "\"In Ictu Oculi\" and \"Finis Gloriae Mundi\" (1670–1672) at Seville's Hospital de la Caridad are powerful memento mori showing Death and decomposing corpses."
        },
        {
          question: "Where can I see Valdés Leal paintings?",
          answer: "Major works are at Hospital de la Caridad and Seville Museum of Fine Arts. Others are at the <a href=\"/museum/prado\"><strong>Prado</strong></a>."
        },
        {
          question: "How did Valdés Leal compare to Murillo?",
          answer: "They were rivals in Seville. Murillo offered soft, comforting images while Valdés Leal created disturbing visions Murillo reportedly found unpleasant."
        },
        {
          question: "What movement was Valdés Leal part of?",
          answer: "He was a leading Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter, known for vigorous brushwork and emotional intensity."
        },
        {
          question: "What role did Valdés Leal play in Seville's art world?",
          answer: "He co-founded Seville's Academy of Art with Murillo in 1660 and served as its president after Murillo left."
        }
      ])
    }
  },
  {
    slug: 'luca-signorelli',
    data: {
      bio: `<p><strong>Luca Signorelli</strong> (c. 1450–1523) was an Italian <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter celebrated for his powerful treatment of the human figure and dramatic compositions. Born in Cortona, Tuscany, he likely trained under Piero della Francesca before developing a distinctive style marked by muscular forms and dynamic poses that profoundly influenced Michelangelo.</p>

<p>Signorelli contributed to the Sistine Chapel's wall decoration in 1481–1482, working alongside Botticelli, Perugino, and Ghirlandaio on scenes from the lives of Moses and Christ. His "Testament and Death of Moses" demonstrated the powerful figure drawing that would characterize his mature work.</p>

<p>His masterpiece is the fresco cycle of the Last Judgment (1499–1503) in Orvieto Cathedral's San Brizio Chapel. These vast scenes depict the Apocalypse, resurrection of the dead, and the damned being tormented in hell with unprecedented anatomical detail and dramatic intensity. Crowds of nude figures twist and struggle in compositions of astonishing complexity. Vasari recorded that Signorelli included a portrait of his dead son among the resurrected figures.</p>

<p>The Orvieto frescoes influenced Michelangelo's own Sistine Chapel Last Judgment three decades later. Signorelli's work can be found in Orvieto Cathedral, the Sistine Chapel, the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery London</strong></a>, and his native Cortona.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Luca Signorelli known for?",
          answer: "He created powerful figure paintings, especially the dramatic Last Judgment frescoes at Orvieto that influenced Michelangelo's later work."
        },
        {
          question: "What is Signorelli's masterpiece?",
          answer: "The Last Judgment frescoes (1499–1503) at Orvieto Cathedral show apocalyptic scenes with unprecedented anatomical detail and dramatic intensity."
        },
        {
          question: "Where can I see Signorelli paintings?",
          answer: "Major works are at Orvieto Cathedral, the Sistine Chapel, <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery London</strong></a>, and Cortona."
        },
        {
          question: "How did Signorelli influence Michelangelo?",
          answer: "His muscular nude figures and dramatic Last Judgment scenes at Orvieto clearly influenced Michelangelo's approach to the Sistine Chapel ceiling and altar wall."
        },
        {
          question: "What movement was Signorelli part of?",
          answer: "He was a High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter trained under Piero della Francesca, known for anatomical precision and dynamic compositions."
        },
        {
          question: "Did Signorelli work at the Sistine Chapel?",
          answer: "Yes, he painted \"Testament and Death of Moses\" on the Chapel walls in 1481–1482 alongside Botticelli, Perugino, and others."
        }
      ])
    }
  },
  {
    slug: 'maurice-denis',
    data: {
      bio: `<p><strong>Maurice Denis</strong> (1870–1943) was a French painter and art theorist who helped found the Nabis, a group of <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> artists who bridged Impressionism and modern art. Born in Granville, Normandy, he studied at the Académie Julian in Paris, where he met fellow future Nabis including Pierre Bonnard and Édouard Vuillard.</p>

<p>At just twenty, Denis articulated a revolutionary definition of painting: "Remember that a picture, before being a battle horse, a nude, an anecdote or whatnot, is essentially a flat surface covered with colors assembled in a certain order." This statement became a founding principle of modern art, emphasizing formal elements over representation.</p>

<p>Known as the "Nabi of the beautiful icons" for his <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritually</strong></a> inflected work, Denis increasingly devoted himself to religious art. His richly colored paintings used contrasting warm and cool tones to depict landscapes, domestic scenes, and Catholic subjects. After 1900, he moved toward more classical forms while maintaining his interest in decorative work.</p>

<p>He founded the Ateliers d'Art Sacré in 1919 to renew religious art and purchased a former hospital in Saint-Germain-en-Laye that became his home and studio. His work can be found at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the Musée Maurice Denis in his former home.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Maurice Denis known for?",
          answer: "He co-founded the Nabis, wrote influential art theory, and created <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritually</strong></a> rich paintings that bridged <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> and modern art."
        },
        {
          question: "What is Denis's famous art theory statement?",
          answer: "\"A picture is essentially a flat surface covered with colors assembled in a certain order,\" emphasizing form over subject matter."
        },
        {
          question: "Where can I see Maurice Denis paintings?",
          answer: "Works are at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, and the Musée Maurice Denis in Saint-Germain-en-Laye."
        },
        {
          question: "What were the Nabis?",
          answer: "A group of <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> artists including Denis, Bonnard, and Vuillard who emphasized decorative qualities and symbolic content."
        },
        {
          question: "Why was Denis called 'Nabi of the beautiful icons'?",
          answer: "His Catholic faith infused his paintings with <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> intensity, and he devoted much of his career to religious art."
        },
        {
          question: "What was the Ateliers d'Art Sacré?",
          answer: "Denis founded this 1919 workshop to renew religious art, training craftsmen to create church decorations, murals, and altarpieces."
        }
      ])
    }
  },
  {
    slug: 'max-liebermann',
    data: {
      bio: `<p><strong>Max Liebermann</strong> (1847–1935) was a German painter who introduced <a href="/movement/impressionism"><strong>Impressionism</strong></a> to Germany and became the country's most important painter at the turn of the 20th century. Born in Berlin to a wealthy Jewish textile manufacturer, he studied at the Weimar Art School before traveling to Paris, where he discovered Barbizon School painters and later the Impressionists.</p>

<p>Liebermann's early work depicted rural laborers, peasants, and workers with a directness influenced by Millet and Courbet. "Women Plucking Geese" (1872) showed common subjects with unidealized realism that shocked conservative audiences. As he absorbed Impressionist techniques after 1895, his palette brightened and his brushwork loosened, though he maintained a connection to subject matter that pure French Impressionists had abandoned.</p>

<p>He painted beach scenes, <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>gardens</strong></a>, and leisure activities of the bourgeoisie alongside commissioned portraits of Germany's leading figures, including Albert Einstein. In 1899, he founded the Berlin Secession, leading progressive artists against academic conservatism. He became president of the Prussian Academy of Arts in 1920.</p>

<p>The Nazis forced his resignation in 1933 due to his Jewish heritage. He died in 1935; his wife Martha committed suicide in 1943 rather than face deportation. The Liebermann Villa at Wannsee is now a museum. His work can be found at the Alte Nationalgalerie Berlin, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
      faqs: JSON.stringify([
        {
          question: "What was Max Liebermann known for?",
          answer: "He introduced <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> to Germany, painted both workers and bourgeois leisure scenes, and led the Berlin Secession."
        },
        {
          question: "Where can I see Liebermann paintings?",
          answer: "Major collections are at Alte Nationalgalerie Berlin, the Liebermann Villa museum, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>."
        },
        {
          question: "What was the Berlin Secession?",
          answer: "Liebermann founded this 1899 movement to support <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and Art Nouveau against academic conservatism. He led it for 13 years."
        },
        {
          question: "How did Liebermann's style develop?",
          answer: "He moved from dark, realistic worker scenes toward brighter <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and leisure scenes after 1895."
        },
        {
          question: "What happened to Liebermann under the Nazis?",
          answer: "They forced his resignation from the Academy in 1933 due to his Jewish heritage. He died in 1935; his wife committed suicide facing deportation in 1943."
        },
        {
          question: "What is the Liebermann Villa?",
          answer: "His summer home at Wannsee, which he painted often, is now a museum dedicated to his work and legacy."
        }
      ])
    }
  }
];

async function updateArtists() {
  console.log('Starting batch 4 artist updates...');

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

  console.log('Batch 4 complete!');
}

updateArtists()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
