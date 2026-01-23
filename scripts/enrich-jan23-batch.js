/**
 * Enrich 15 artworks with descriptions and FAQs (Jan 23 batch)
 * Run: node scripts/enrich-jan23-batch.js
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'pietro-da-cortona-holy-family-resting-on-the-flight-to-egypt',
    description: `<p><a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted this serene Baroque scene in 1643, showing the <strong>Holy Family</strong> pausing during their escape to Egypt. The Virgin Mary sits with the sleeping infant Jesus on her lap, her expression soft and tender. Joseph rests in the background near a tree while cherubs hover above, adding a heavenly dimension to the peaceful composition.</p>
<p>Pietro Berrettini, known by his hometown of Cortona in Tuscany, was one of the key figures in Roman Baroque art alongside Bernini and Borromini. He's best known for his bold, illusionistic ceiling frescoes that defined the era's decorative style. This canvas, likely commissioned by Cardinal Francesco Barberini in the 1630s, shows his skill with intimate religious subjects too.</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich, Germany. Its lush landscape and tender figural arrangement make it a fine example of <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual art</strong></a> from the Italian Baroque period.</p>`,
    faqs: [
      {
        question: "Where can I see Holy Family Resting on the Flight to Egypt?",
        answer: "This painting is on display at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, Germany. The museum houses one of Europe's finest collections of Old Master paintings from the 14th to 18th centuries."
      },
      {
        question: "When did Pietro da Cortona paint this work?",
        answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> created this painting in 1643, during the height of the <strong>Baroque period</strong>. It was likely commissioned by Cardinal Francesco Barberini, a major patron of the arts in Rome."
      },
      {
        question: "What is depicted in this painting?",
        answer: "The scene shows Mary, Joseph, and the infant Jesus resting during their <strong>flight to Egypt</strong>. According to the Gospel of Matthew, the family fled to escape King Herod's order to kill all male infants in Bethlehem."
      }
    ]
  },
  {
    slug: 'jacob-jordaens-holy-family-with-elizabeth-and-child-john-the-bapt',
    description: `<p><a href="/apps/masterpieces/artist/jacob-jordaens"><strong>Jacob Jordaens</strong></a> created this warm, intimate scene of the <strong>Holy Family</strong> gathered with Elizabeth and the young John the Baptist. The Flemish Baroque master captured a tender moment as the two cousins, Jesus and John, are introduced. John clutches his reed cross, his symbol as the future prophet who would baptize Christ.</p>
<p>Jordaens often drew inspiration from Caravaggio, particularly the motif of the Christ Child standing on his mother's lap. The artist infused his religious paintings with the same earthy naturalism that defined his secular works. Elizabeth, John's elderly mother, watches protectively while the Virgin Mary gazes outward, meeting the viewer directly.</p>
<p>The infant John wears a camel-skin garment, foreshadowing his later life as a desert prophet. A lamb appears beside him, symbolizing his famous identification of Jesus as the "Lamb of God." This painting hangs at the <a href="/apps/masterpieces/museum/royal-museums-belgium"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels.</p>`,
    faqs: [
      {
        question: "What symbols appear in this painting?",
        answer: "The young <strong>John the Baptist</strong> holds a reed cross and wears camel skin, referencing his future as a desert prophet. A lamb beside him represents his proclamation of Jesus as the \"Lamb of God.\""
      },
      {
        question: "Where is this painting displayed?",
        answer: "You can view this work at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels. The museum holds an extensive collection of Flemish Baroque paintings."
      },
      {
        question: "Who painted this Holy Family scene?",
        answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jacob Jordaens</strong></a> painted this work. He was one of the leading Flemish Baroque painters alongside Rubens and Van Dyck, known for his earthy naturalism and vibrant color."
      }
    ]
  },
  {
    slug: 'parmigianino-holy-family-with-shepherds-and-angels',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> created this <strong>Mannerist</strong> study around 1523-1524, during his early twenties. The composition brings together the Holy Family with humble shepherds and heavenly angels, blending the earthly and divine in a single scene. His elegant, elongated figures hint at the distinctive style he would later perfect.</p>
<p>Born Francesco Mazzola in Parma, the artist earned his nickname from his hometown. This sketch dates from the same period as his famous "Self-portrait in a Convex Mirror" (1524) and other religious works exploring flight-to-Egypt themes. The young artist was already developing the refined grace that would make him a leader of Italian Mannerism.</p>
<p>Currently in a private collection, this piece shows Parmigianino's skill in rendering <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual subjects</strong></a> with technical elegance and emotional warmth.</p>`,
    faqs: [
      {
        question: "When was this painting created?",
        answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> created this work around 1523-1524, during the same period as his celebrated \"Self-portrait in a Convex Mirror.\" The artist was in his early twenties at the time."
      },
      {
        question: "What style is this painting?",
        answer: "This work exemplifies <strong>Mannerism</strong>, a Late Renaissance style characterized by elongated forms and sophisticated elegance. Parmigianino became one of the movement's leading figures through works like this."
      },
      {
        question: "Where is this painting now?",
        answer: "This painting is currently held in a <strong>private collection</strong>. Like many Mannerist sketches and studies, it passed through various collectors over the centuries."
      }
    ]
  },
  {
    slug: 'annibale-carracci-holy-women-at-christ39-s-tomb',
    description: `<p><a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> painted this dramatic Baroque scene around 1597-98, depicting the moment Mary Magdalene and two other women discover Christ's empty tomb. An angel sits on the stone sarcophagus, explaining the resurrection to the astonished figures. The composition brilliantly synthesizes classical sculpture, Raphael's Vatican tapestries, and the dramatic lighting that defined Roman Baroque painting.</p>
<p>The work was commissioned by Lelio Pasqualini, a Roman canon at Santa Maria Maggiore who maintained one of the era's notable antiquarian collections. Scholars believe the painting's unusual composition reflects Pasqualini's classical interests. The canvas measures 121 by 145.5 centimeters.</p>
<p>After passing through the W. Coesvelt collection in London, the painting entered the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg in 1836. It remains one of the finest examples of Carracci's religious work, showing his masterful blending of Renaissance traditions with Baroque emotion.</p>`,
    faqs: [
      {
        question: "Where can I see Holy Women at Christ's Tomb?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum acquired it in 1836 from the W. Coesvelt collection in London."
      },
      {
        question: "What biblical scene does this painting show?",
        answer: "The painting depicts the <strong>Three Marys</strong> at Christ's tomb on Easter morning. They arrive with anointing oils only to find the tomb empty and an angel explaining Jesus has risen."
      },
      {
        question: "Who commissioned this painting?",
        answer: "Lelio Pasqualini, a canon at Santa Maria Maggiore in Rome, commissioned the work. He was an avid <strong>antiquarian collector</strong>, and scholars believe his classical interests influenced the painting's unusual composition."
      },
      {
        question: "How large is this painting?",
        answer: "The canvas measures <strong>121 x 145.5 cm</strong> (approximately 48 x 57 inches). <a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> created it in oil on canvas around 1597-98."
      }
    ]
  },
  {
    slug: 'robert-delaunay-homage-to-bleriot',
    description: `<p><a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a> created this monumental <strong>Orphist</strong> painting in 1914, celebrating French aviator Louis Bleriot and the excitement of early flight. Swirling circles and fragmented planes explode with vibrant color across a massive 250 by 251 centimeter canvas. The composition feels like looking through a kaleidoscope, capturing the era's fascination with speed, technology, and modern life.</p>
<p>Delaunay pioneered Orphism, an abstract style rooted in Cubism that emphasized pure color relationships over representational imagery. He believed he was the first painter to use color as a subject in itself. In this work, interpenetrating circles echo new ideas about transient modern travel while referencing Parisian landmarks like the Eiffel Tower.</p>
<p>The painting commemorates Bleriot's historic 1909 cross-Channel flight, the first successful airplane crossing from France to England. Today it hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland, where its <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a>, dynamic energy continues to dazzle viewers.</p>`,
    faqs: [
      {
        question: "Who was Louis Bleriot?",
        answer: "Louis Bleriot was a French aviator who made the first <strong>airplane flight across the English Channel</strong> in 1909. His pioneering achievement captured public imagination and inspired <a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a> to create this tribute."
      },
      {
        question: "What is Orphism in art?",
        answer: "<strong>Orphism</strong> was an abstract painting style pioneered by Robert Delaunay, based on the emotional power of contrasting colors. It branched from Cubism, emphasizing pure color relationships and circular forms over realistic depiction."
      },
      {
        question: "Where is Homage to Bleriot displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Basel, Switzerland. At 250 x 251 cm, it's one of Delaunay's largest and most ambitious works."
      },
      {
        question: "When was this painting created?",
        answer: "Delaunay completed this work in <strong>1914</strong>, five years after Bleriot's famous flight. The painting captures the early twentieth century's enthusiasm for aviation and technological progress."
      }
    ]
  },
  {
    slug: 'thomas-eakins-home-scene',
    description: `<p><a href="/apps/masterpieces/artist/thomas-eakins"><strong>Thomas Eakins</strong></a> painted this tender domestic scene around 1871, showing his sister Margaret watching over younger sister Caroline at the piano. A black and white cat waits at Margaret's side, tail raised in anticipation. The work comes from a difficult period when their mother was gravely ill.</p>
<p>Eakins drew heavy inspiration from Dutch and Spanish Old Masters, particularly Rembrandt and Velazquez, whose mastery of light and shadow he studied in Paris. The dark tonality and natural poses reflect this influence. "Home Scene" belongs to a series of Victorian interior paintings featuring family and friends in unguarded moments.</p>
<p>Margaret lived until 1882, Caroline until 1889. Their brother's honest, unsentimental approach captured them simply existing at home, without theatrical staging. The painting now resides at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> in New York, measuring 54.4 by 45.7 centimeters.</p>`,
    faqs: [
      {
        question: "Who are the subjects in Home Scene?",
        answer: "The painting shows Eakins's sisters <strong>Margaret</strong> (1853-1882) and <strong>Caroline</strong> (1865-1889). Margaret oversees Caroline at the piano during a period when their mother was gravely ill."
      },
      {
        question: "Where can I see this painting?",
        answer: "\"Home Scene\" is displayed at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. The oil on canvas measures 21 7/16 by 18 inches (54.4 x 45.7 cm)."
      },
      {
        question: "What style influenced Thomas Eakins?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Thomas Eakins</strong></a> was strongly influenced by Dutch and Spanish <strong>Realism</strong>, particularly Rembrandt and Velazquez. Their expressive use of light and shadow shaped his domestic interior paintings."
      }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-horse-and-rider-with-a-little-dog',
    description: `<p><a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this equestrian scene in 1879, when he was just fifteen years old. A <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> and rider move through the composition while a small <a href="https://luxurywallart.com/collections/dog-paintings" target="_blank" rel="noopener"><strong>dog</strong></a> accompanies them. The work reflects his early passion for horses, animals he could no longer ride after breaking both legs in childhood accidents.</p>
<p>His first painting teacher was Rene Princeteau, a deaf sporting artist who adored horses. Princeteau used equestrian subjects to teach young Henri how to capture movement in his drawings. The artist's father was a fanatical horseman and racegoer who had hoped his son would follow the same path.</p>
<p>After discovering he had a degenerative bone disease at fourteen, Toulouse-Lautrec channeled his love of horses into painting. This early work shows his natural talent for conveying animal vitality. It's held at the <a href="/apps/masterpieces/museum/musee-toulouse-lautrec"><strong>Musee Toulouse-Lautrec</strong></a> in Albi, France.</p>`,
    faqs: [
      {
        question: "Why did Toulouse-Lautrec paint horses?",
        answer: "After breaking both legs as a teenager, Toulouse-Lautrec couldn't ride horses himself. His teacher <strong>Rene Princeteau</strong>, a sporting artist, used horses to teach him movement and anatomy instead."
      },
      {
        question: "Where is this painting displayed?",
        answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/musee-toulouse-lautrec\"><strong>Musee Toulouse-Lautrec</strong></a> in Albi, France. The museum in his hometown holds the world's largest collection of his work."
      },
      {
        question: "How old was Toulouse-Lautrec when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Henri de Toulouse-Lautrec</strong></a> was only <strong>fifteen years old</strong> when he created this work in 1879. His early paintings were dominated by horse subjects."
      }
    ]
  },
  {
    slug: 'george-stubbs-horse-attacked-by-a-lion',
    description: `<p><a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> created this dramatic scene around 1762, one of at least seventeen paintings he made on this theme over thirty years. A <a href="https://luxurywallart.com/collections/lion-wall-art" target="_blank" rel="noopener"><strong>lion</strong></a> leaps onto a terrified <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse's</strong></a> back, sinking its claws into the flesh. The horse's expression conveys pure terror and pain in a scene that anticipates Romantic art's emotional intensity.</p>
<p>One story suggests Stubbs witnessed a lion killing a wild horse during a visit to Morocco, though this is likely legend. The more probable inspiration was an ancient Roman marble sculpture well known in London's artistic circles. Stubbs approached the subject with the same anatomical precision he brought to his famous studies of horse anatomy.</p>
<p>According to art historian Diana Donald, these paintings show four stages of the lion's attack, depicting nature's ferocity through heroic animal representations. This version hangs at the <a href="/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut.</p>`,
    faqs: [
      {
        question: "How many versions of this painting exist?",
        answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a> created <strong>seventeen paintings</strong> on this theme over about thirty years. Each depicts different stages of the lion's attack on the horse."
      },
      {
        question: "Where is this painting located?",
        answer: "This version is held at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut. The museum owns multiple Stubbs works from this series."
      },
      {
        question: "What inspired George Stubbs to paint this subject?",
        answer: "While legend claims he saw a lion kill a horse in Morocco, the likely inspiration was an <strong>ancient Roman marble sculpture</strong> depicting this scene. The sculpture was a famous attraction for visitors to Rome."
      },
      {
        question: "What art movement does this painting anticipate?",
        answer: "The painting's emotional intensity and violent subject matter anticipate <strong>Romanticism</strong>. Stubbs combined classical style with explosive drama that later Romantic artists would embrace."
      }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-horse-fighting-his-groom',
    description: `<p><a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> captured this tense moment of a <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> resisting its handler. The scene showcases the dynamic tension between animal power and human control. Such equestrian subjects dominated his early artistic output between ages fourteen and eighteen.</p>
<p>Toulouse-Lautrec's family lived and breathed horses. "In our family, once baptised, one is in the saddle," he once quipped. His father was a fanatical rider and hunter who expected his son to follow suit. When bone disease ended those ambitions, the young artist found another way to engage with horses through his brush.</p>
<p>Under teacher Rene Princeteau's guidance, Toulouse-Lautrec learned to masterfully convey animal movement. This painting demonstrates his ability to capture split-second action and the raw energy between horse and handler. Currently in a private collection, it reflects the formative period before he turned to Montmartre nightlife.</p>`,
    faqs: [
      {
        question: "What period of Toulouse-Lautrec's career does this represent?",
        answer: "This comes from <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec's</strong></a> <strong>early period</strong> (1878-1882), when horse subjects dominated his work. He later became famous for Montmartre cabaret scenes."
      },
      {
        question: "Who taught Toulouse-Lautrec to paint horses?",
        answer: "<strong>Rene Princeteau</strong>, a deaf sporting artist and friend of the family, was his first teacher. Princeteau specialized in equestrian subjects and taught young Henri to capture movement convincingly."
      },
      {
        question: "Where is this painting now?",
        answer: "This work is held in a <strong>private collection</strong>. Many of Toulouse-Lautrec's early equestrian paintings remain in private hands rather than museums."
      }
    ]
  },
  {
    slug: 'eugene-delacroix-horse-frightened-by-a-storm',
    description: `<p><a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugene Delacroix</strong></a> created this watercolor in 1824, capturing a solitary <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> in a state of alarm as a storm gathers around it. The animal's terror is palpable, symbolizing the struggle between living creatures and overwhelming natural forces. Bright colors and dynamic brushstrokes accentuate the scene's movement and urgency.</p>
<p>The horse held special significance for Delacroix during the 1820s, appearing frequently in his work. This piece exemplifies <strong>Romanticism's</strong> emphasis on raw emotion and nature's power. The artist managed to convey both the horse's fragility and the storm's imposing majesty in a relatively small format.</p>
<p>Executed in watercolor with white heightening and gum arabic on paper, the work measures 23.6 by 32 centimeters. It now resides at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary.</p>`,
    faqs: [
      {
        question: "What medium did Delacroix use for this painting?",
        answer: "Delacroix created this work using <strong>watercolor with white heightening and gum arabic</strong> on watercolor paper. It measures 23.6 x 32 cm (approximately 9 x 12.5 inches)."
      },
      {
        question: "Where can I see Horse Frightened by a Storm?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum houses significant collections of European art."
      },
      {
        question: "What art movement does this represent?",
        answer: "This is a prime example of <strong>Romanticism</strong>, which emphasized emotion, nature's power, and dramatic subjects. <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Delacroix</strong></a> was a leading figure in the French Romantic movement."
      }
    ]
  },
  {
    slug: 'theodore-gericault-horse-frightened-by-lightning',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Theodore Gericault</strong></a> painted this scene around 1813-14, shortly after his gold-medal success with "The Charging Chasseur" at the 1812 Salon. A dappled <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> freezes in profile as lightning illuminates the upper right corner. Rather than show the more cliched image of a rearing horse, Gericault captured the animal's instinctive freeze response.</p>
<p>The artist brilliantly rendered the sheen of the dappled coat as lightning momentarily lights it against the near-black night sky. Using short, staccato strokes that follow the horse's contours, he created an effect of nervous energy rippling across the silky surface. Like Stubbs's masterpiece Whistlejacket, this is a portrait of a specific animal rather than a generic study.</p>
<p>Gericault was a keen horseman with expert understanding of equine anatomy. In 1813 he produced several oil studies at the Imperial stables at Versailles, possibly including this one. The painting influenced Delacroix, who later created the similarly named "Horse Frightened by a Storm." This work is held in a private collection.</p>`,
    faqs: [
      {
        question: "When did Gericault paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Theodore Gericault</strong></a> created this work around <strong>1813-14</strong>, shortly after winning a gold medal at the 1812 Salon for \"The Charging Chasseur.\""
      },
      {
        question: "What makes this horse painting unusual?",
        answer: "Instead of showing a dramatically rearing horse, Gericault depicted the animal <strong>frozen in profile</strong>, capturing its instinctive freeze response to lightning. This subtle approach was more realistic than theatrical poses."
      },
      {
        question: "Did this painting influence other artists?",
        answer: "Yes. <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugene Delacroix</strong></a> created a similarly named painting, \"Horse Frightened by a Storm,\" showing Gericault's direct influence on the younger Romantic artist."
      }
    ]
  },
  {
    slug: 'edgar-degas-horses-and-jockeys',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted racing scenes throughout his career, manipulating <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horses</strong></a> and jockeys from one picture to the next. When Longchamps racetrack opened at the Bois de Boulogne in 1857, horse racing became fashionable among Paris's elite. As an upper-class man, Degas visited frequently, sketching and taking notes.</p>
<p>Unlike painters who depicted the glamorous moments of racing, Degas preferred the unglamorous before and after. His works function like snapshots taken off-track: horses gathering, jockeys adjusting equipment, animals cooling down. Some poses have distinguished pedigrees. The prancing mount in several paintings derives from Benozzo Gozzoli's "Journey of the Magi" in Florence, which Degas copied in 1859.</p>
<p>Degas combined direct observation with careful study of photographs. He wanted to capture movement accurately, watching horses with fascination and later working up finished paintings in his studio. This work is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Degas racing scene?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. The museum holds several of Degas's horse racing paintings and pastels."
      },
      {
        question: "Why did Degas paint horse races?",
        answer: "When <strong>Longchamps racetrack</strong> opened in 1857, racing became fashionable in Paris. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> visited frequently as a member of the upper class and became fascinated by horse and jockey movements."
      },
      {
        question: "How did Degas approach his racing paintings?",
        answer: "Degas preferred <strong>candid, off-track moments</strong> over dramatic race finishes. He sketched at the track, studied photographs, and often reused poses across multiple paintings over the years."
      }
    ]
  },
  {
    slug: 'gustave-caillebotte-horses-in-the-stable',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this intimate stable scene around 1874, showing <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horses</strong></a> in their stalls. The work measures 33 by 46 centimeters, small compared to his famous urban scenes. It demonstrates his range beyond the Parisian street views for which he's best known.</p>
<p>Caillebotte was about twenty-six when he created this <strong>Impressionist</strong> study. He came from a wealthy family and could paint without financial pressure, which freed him to experiment. While his contemporaries focused on landscape and light, he often chose unusual perspectives and overlooked subjects.</p>
<p>Catalogued as number 18 in the Caillebotte catalogue raisonne from 1994, this early work predates his most celebrated paintings like "Paris Street; Rainy Day" and "The Floor Scrapers." It currently resides in a private collection.</p>`,
    faqs: [
      {
        question: "When did Caillebotte paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this work around <strong>1874</strong>, when he was approximately twenty-six years old. It predates his most famous urban scenes."
      },
      {
        question: "What style is this painting?",
        answer: "The painting is classified as <strong>Impressionism</strong>. Caillebotte was part of the Impressionist movement, though he often chose different subjects than his contemporaries focused on."
      },
      {
        question: "How large is this painting?",
        answer: "The work measures <strong>33 x 46 cm</strong> (approximately 13 x 18 inches). It's an oil on canvas, relatively small compared to Caillebotte's large urban compositions."
      }
    ]
  },
  {
    slug: 'george-stubbs-hound-coursing-a-stag',
    description: `<p><a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> painted this dramatic hunting scene around 1762, showing a greyhound pursuing an adult red deer (Cervus elaphus). The composition recalls the grand seventeenth-century hunt paintings of Rubens and Snyders while anticipating the emotional animal subjects Sir Edwin Landseer would later explore.</p>
<p>Stubbs demonstrated not only his anatomical accuracy but also his flair for drama. Both animals are rendered with precise musculature and movement. The painting measures 100.1 by 125.8 centimeters. Its style bridges classical animal painting and the emerging Romantic sensibility.</p>
<p>The <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a> acquired this work in 1984, using the W. P. Wilstach Fund, John D. McIlhenny Fund, and various gifts by exchange. It's currently displayed in Gallery 383 as part of the European Art collection, showcasing Stubbs's mastery of <a href="https://luxurywallart.com/collections/dog-paintings" target="_blank" rel="noopener"><strong>canine</strong></a> and wildlife subjects.</p>`,
    faqs: [
      {
        question: "Where is Hound Coursing a Stag displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a> in Gallery 383. The museum acquired it in 1984 using multiple funds and gifts by exchange."
      },
      {
        question: "What animals are depicted?",
        answer: "The painting shows a <strong>greyhound</strong> chasing an adult <strong>red deer</strong> (Cervus elaphus). <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a> was renowned for his accurate animal anatomy."
      },
      {
        question: "How large is this painting?",
        answer: "The oil on canvas measures <strong>100.1 x 125.8 cm</strong> (approximately 39 x 49 inches). Stubbs created it around 1762, the same period as his famous lion-and-horse paintings."
      },
      {
        question: "What painters influenced this work?",
        answer: "The composition draws from seventeenth-century hunt paintings by <strong>Peter Paul Rubens and Frans Snyders</strong>. It also anticipates the emotional animal subjects Sir Edwin Landseer would later paint."
      }
    ]
  },
  {
    slug: 'egon-schiele-house-between-trees-i',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> created this <strong>Expressionist</strong> landscape in 1908, when he was just eighteen years old. A house emerges from between <a href="https://luxurywallart.com/collections/paintings-of-trees" target="_blank" rel="noopener"><strong>trees</strong></a>, painted in Vienna during his formative artistic years. The work measures 67.31 by 68.58 centimeters, executed in oil on panel.</p>
<p>This landscape followed several 1907 works including "Forest with Sunlit Clearing," "Harbor of Trieste," and various portraits of his uncle Leopold Czihaczek. Schiele was developing the bold, angular style that would define his brief but influential career. Twilight and cottage themes appear throughout his early landscapes.</p>
<p>The young artist would become one of the most significant figures of Austrian Expressionism alongside Gustav Klimt, his mentor. Though he died at just twenty-eight during the 1918 influenza pandemic, Schiele left behind a substantial body of work. This painting is currently held in a private collection.</p>`,
    faqs: [
      {
        question: "When did Schiele paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> created this work in <strong>1908</strong> in Vienna. He was only eighteen years old, still developing the distinctive style that would define his career."
      },
      {
        question: "What style is this painting?",
        answer: "The painting represents early <strong>Expressionism</strong>. Schiele became a leading figure of Austrian Expressionism alongside his mentor Gustav Klimt, known for bold forms and psychological intensity."
      },
      {
        question: "How large is this painting?",
        answer: "The work measures <strong>67.31 x 68.58 cm</strong> (approximately 26.5 x 27 inches). It's an oil painting on panel, currently held in a private collection."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment (Jan 23 batch)...\n');

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
