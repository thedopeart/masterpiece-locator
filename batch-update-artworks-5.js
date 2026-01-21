const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'madonna-child-two-angels-lippi',
    description: `<p><a href="/apps/masterpieces/artist/filippo-lippi"><strong>Filippo Lippi</strong></a> painted this tender devotional scene around 1460-1465, showing the Virgin Mary with the Christ Child and two angels against a distant landscape. The composition places Mary in profile, her hands clasped in prayer while one angel holds the infant toward her. Lippi's use of <strong>soft modeling</strong> and delicate features reflects his training in the Florentine tradition.</p>
<p>The painting demonstrates Lippi's ability to blend sacred subjects with naturalistic details. The landscape visible through the window adds depth and connects the divine figures to the earthly world. Now housed at the <a href="/apps/masterpieces/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence, this work influenced later artists including Botticelli, who trained in Lippi's workshop.</p>`,
    faqs: [
      {
        question: "Where can I see Madonna and Child with Two Angels?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The Uffizi houses one of the world's finest collections of Renaissance art, including works by Botticelli, Leonardo, and Michelangelo."
      },
      {
        question: "Who painted Madonna and Child with Two Angels?",
        answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> created this work around 1460-1465. A Carmelite friar turned painter, Lippi was known for his graceful Madonnas and helped shape the direction of <a href=\"/apps/masterpieces/movement/early-renaissance\"><strong>Early Renaissance</strong></a> painting in Florence."
      },
      {
        question: "What style is this painting?",
        answer: "The painting belongs to the Early Renaissance period, showing characteristic features like natural light, atmospheric perspective, and humanized religious figures. Lippi's soft modeling and attention to facial expressions set this work apart from earlier, more rigid Byzantine traditions."
      },
      {
        question: "Why is the angel looking at the viewer?",
        answer: "The angel's direct gaze draws viewers into the sacred scene, a technique Lippi used to create emotional connection. This device became popular in Renaissance art, breaking the fourth wall between the divine subject and the earthly observer."
      }
    ]
  },
  {
    slug: 'tintoretto-portrait-of-a-white-bearded-man',
    description: `<p><a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> painted this striking portrait around 1570, capturing an elderly Venetian gentleman with remarkable psychological depth. The subject's white beard and weathered features suggest wisdom and experience, while his dark clothing and simple background keep attention focused on his expressive face. Tintoretto's <strong>loose brushwork</strong> gives the portrait immediacy and life.</p>
<p>The painting showcases the artist's ability to reveal character through careful observation. Light falls across the subject's face, highlighting the textures of skin and beard while leaving much of the figure in shadow. Now at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna"><strong>Kunsthistorisches Museum</strong></a> in Vienna, this portrait demonstrates why Tintoretto ranked among Venice's greatest portraitists.</p>`,
    faqs: [
      {
        question: "Where is this Tintoretto portrait displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. This museum holds one of Europe's most important collections of Old Master paintings, with strong holdings in Venetian and Northern European art."
      },
      {
        question: "Who painted Portrait of a White-Bearded Man?",
        answer: "<a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> created this work around 1570 during his mature period. Born Jacopo Robusti, he earned his nickname meaning \"little dyer\" from his father's trade and became one of Venice's leading <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painters."
      },
      {
        question: "What makes this portrait notable?",
        answer: "Tintoretto's loose, energetic brushwork sets this portrait apart from more polished Venetian works. The rapid execution captures the subject's personality rather than just his appearance, showing the psychological insight that made Tintoretto's portraits so sought after."
      }
    ]
  },
  {
    slug: 'venice-dogana-san-giorgio',
    description: `<p><a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto</strong></a> painted this luminous view of Venice around 1730, showing the Dogana da Mar (customs house) and the church of San Giorgio Maggiore across the lagoon. The scene captures the busy waterfront with gondolas and trading vessels, while the distinctive domed church rises against a pale blue sky. Canaletto's <strong>precise architectural detail</strong> and mastery of light made him the most celebrated view painter of his age.</p>
<p>This veduta exemplifies the artist's ability to combine topographical accuracy with atmospheric beauty. The golden afternoon light bathes the buildings in warm tones, while subtle reflections animate the water's surface. Now in the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, the painting was likely commissioned by an English collector on the Grand Tour.</p>`,
    faqs: [
      {
        question: "Where can I see Venice: The Dogana and San Giorgio?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. The museum holds several important Canalettos, reflecting the artist's popularity with 18th-century British collectors who discovered him during their Grand Tours of Italy."
      },
      {
        question: "Who painted this view of Venice?",
        answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> created this veduta around 1730 at the height of his career. Giovanni Antonio Canal, known as Canaletto, specialized in precise views of Venice that combined architectural accuracy with atmospheric effects."
      },
      {
        question: "What buildings are shown in this painting?",
        answer: "The painting depicts the Dogana da Mar, Venice's historic customs house at the entrance to the Grand Canal, and the church of San Giorgio Maggiore on its island. Both landmarks remain standing today and look much as Canaletto painted them."
      },
      {
        question: "What is a veduta?",
        answer: "A veduta is a highly detailed, large-scale painting of a cityscape or landscape. The genre flourished in 18th-century Venice, where artists like Canaletto created views for wealthy tourists who wanted souvenirs of their Italian travels."
      }
    ]
  },
  {
    slug: 'umberto-boccioni-the-grand-canal-in-venice',
    description: `<p><a href="/apps/masterpieces/artist/umberto-boccioni"><strong>Umberto Boccioni</strong></a> painted this vibrant view of Venice's Grand Canal around 1907, before he became a leading figure in Italian Futurism. The composition captures the famous waterway with its gondolas and historic palaces, rendered in the <strong>bold brushwork</strong> and heightened colors of Divisionism. Reflections shimmer on the water as light plays across the ancient facades.</p>
<p>This early work shows Boccioni experimenting with light and color in ways that would later inform his revolutionary Futurist paintings. The traditional subject matter contrasts with the modern technique, creating a bridge between academic training and avant-garde innovation. The painting remains in a private collection, representing an important moment in Boccioni's artistic development.</p>`,
    faqs: [
      {
        question: "Who painted The Grand Canal in Venice?",
        answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a> created this work around 1907 during his pre-Futurist period. He would later become one of the principal theorists and practitioners of <a href=\"/apps/masterpieces/movement/futurism\"><strong>Futurism</strong></a>, focusing on movement and modern life."
      },
      {
        question: "What style is this painting?",
        answer: "The painting shows Divisionist influence, with broken brushstrokes and vibrant colors creating optical effects. This technique, related to French Neo-Impressionism, was popular among young Italian artists before World War I and influenced Boccioni's later Futurist works."
      },
      {
        question: "Where is this painting located?",
        answer: "The Grand Canal in Venice remains in a private collection. Boccioni's early works are less frequently exhibited than his famous Futurist pieces, making this Venetian view a relatively rare example of his formative period."
      }
    ]
  },
  {
    slug: 'river-landscape-horseman',
    description: `<p><a href="/apps/masterpieces/artist/aelbert-cuyp"><strong>Aelbert Cuyp</strong></a> painted this tranquil river scene during the 1650s, showing a horseman and other figures in a golden Dutch landscape. The composition bathes the countryside in warm afternoon light, with the river stretching toward distant hills under a luminous sky. Cuyp's <strong>masterful handling of atmosphere</strong> gives the scene a dreamlike quality that influenced English landscape painters for centuries.</p>
<p>The painting demonstrates why Cuyp became one of the most collected Dutch artists in Britain. His ability to transform the flat Dutch terrain into something poetic and idealized appealed to aristocratic tastes. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this work represents Cuyp's mature style at its finest.</p>`,
    faqs: [
      {
        question: "Where can I see River Landscape with Horseman?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. The museum holds several works by Cuyp, whose golden landscapes were enormously popular with British collectors during the 18th and 19th centuries."
      },
      {
        question: "Who painted River Landscape with Horseman?",
        answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a> created this work during the 1650s in Dordrecht. He specialized in sunlit landscapes that combined Dutch topography with an Italianate golden light, creating an idealized vision of the countryside."
      },
      {
        question: "What makes Cuyp's landscapes distinctive?",
        answer: "Cuyp's landscapes are known for their warm, golden light that seems to suffuse every element of the scene. This quality, influenced by Italianate painters, transforms ordinary Dutch views into something almost mystical."
      },
      {
        question: "Why was Cuyp popular in Britain?",
        answer: "British aristocrats discovered Cuyp in the 18th century and collected his works enthusiastically. His pastoral scenes with horses and cattle appealed to landed gentry, and his influence shaped the development of English landscape painting."
      }
    ]
  },
  {
    slug: 'vilhelm-hammershoi-interior-from-strandgade-with-sunlight-on-the-floo',
    description: `<p><a href="/apps/masterpieces/artist/vilhelm-hammershoi"><strong>Vilhelm Hammershøi</strong></a> painted this quietly powerful interior around 1901, capturing sunlight falling across the floor of his Copenhagen apartment. The sparse room with its muted grays and browns focuses attention on the play of light through tall windows. Hammershøi's <strong>restrained palette</strong> and attention to empty space create an atmosphere of stillness and contemplation.</p>
<p>The painting belongs to a series depicting the artist's home at Strandgade 30, where he lived with his wife Ida. These interiors, often showing a solitary female figure from behind or rooms entirely empty, have earned Hammershøi comparisons to Vermeer. Now at the <a href="/apps/masterpieces/museum/national-gallery-of-denmark"><strong>National Gallery of Denmark</strong></a>, this work exemplifies his distinctive vision.</p>`,
    faqs: [
      {
        question: "Where is this Hammershøi interior displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-denmark\"><strong>National Gallery of Denmark</strong></a> (Statens Museum for Kunst) in Copenhagen. The museum holds the world's largest collection of Hammershøi's work, including many of his famous Strandgade interiors."
      },
      {
        question: "Who painted Interior from Strandgade?",
        answer: "<a href=\"/apps/masterpieces/artist/vilhelm-hammershoi\"><strong>Vilhelm Hammershøi</strong></a> created this work around 1901. The Danish artist specialized in muted interiors and cityscapes, developing a personal style that combined <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> atmosphere with precise observation."
      },
      {
        question: "What is Strandgade 30?",
        answer: "Strandgade 30 was Hammershøi's apartment in Copenhagen's historic Christianshavn district. He painted its rooms repeatedly from 1898 to 1912, making the spare interiors with their characteristic gray light his most recognizable subject."
      }
    ]
  },
  {
    slug: 'lute-player-orazio',
    description: `<p><a href="/apps/masterpieces/artist/orazio-gentileschi"><strong>Orazio Gentileschi</strong></a> painted this elegant musician around 1612-1615, showing a young woman playing the lute with graceful concentration. Her rich clothing and the careful attention to the instrument's details reflect Gentileschi's background as a follower of Caravaggio, though rendered with a <strong>softer, more refined touch</strong>. The figure emerges from a dark background, illuminated by clear, even light.</p>
<p>The painting demonstrates Gentileschi's ability to combine Caravaggesque drama with a more lyrical sensibility. The musician's absorbed expression and the precise rendering of her elaborate sleeves show technical mastery matched by psychological insight. Now at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., this work represents the artist's mature Roman period.</p>`,
    faqs: [
      {
        question: "Where can I see The Lute Player?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. The museum's collection includes significant works from the Baroque period, allowing visitors to see Gentileschi's work alongside other Caravaggesque painters."
      },
      {
        question: "Who painted The Lute Player?",
        answer: "<a href=\"/apps/masterpieces/artist/orazio-gentileschi\"><strong>Orazio Gentileschi</strong></a> created this work around 1612-1615. A Tuscan painter who worked in Rome, he was one of Caravaggio's most talented followers and the father of the famous artist Artemisia Gentileschi."
      },
      {
        question: "What style is this painting?",
        answer: "The painting reflects <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style, particularly the Caravaggesque tradition of dramatic lighting against dark backgrounds. However, Gentileschi's softer palette and more refined execution distinguish his work from Caravaggio's starker approach."
      }
    ]
  },
  {
    slug: 'the-broken-pitcher',
    description: `<p><a href="/apps/masterpieces/artist/jean-baptiste-greuze"><strong>Jean-Baptiste Greuze</strong></a> painted this poignant image around 1771, showing a young woman at a fountain with a broken pitcher. Her disheveled appearance and melancholy expression suggest this is more than a simple genre scene. The <strong>broken vessel</strong> traditionally symbolized lost virginity, giving the painting a moral dimension that appealed to 18th-century audiences.</p>
<p>The work exemplifies Greuze's ability to combine technical virtuosity with emotional narrative. The girl's soft features and the careful rendering of her clothing demonstrate his skill, while the allegorical content satisfied contemporary taste for moralizing subjects. Now at the <a href="/apps/masterpieces/museum/louvre-museum"><strong>Louvre Museum</strong></a> in Paris, this painting remains one of Greuze's most recognized works.</p>`,
    faqs: [
      {
        question: "Where can I see The Broken Pitcher?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-museum\"><strong>Louvre Museum</strong></a> in Paris. The Louvre holds several works by Greuze, who was one of France's most popular painters during the reign of Louis XV and remains well represented in the national collection."
      },
      {
        question: "Who painted The Broken Pitcher?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-greuze\"><strong>Jean-Baptiste Greuze</strong></a> created this work around 1771. He specialized in sentimental genre scenes and portraits that combined technical skill with moral narratives, appealing to Enlightenment-era tastes."
      },
      {
        question: "What does the broken pitcher symbolize?",
        answer: "In 18th-century art, a broken pitcher commonly symbolized lost innocence or virginity. The girl's disheveled hair and sad expression reinforce this reading, turning a simple genre scene into a moralizing image about the consequences of seduction."
      },
      {
        question: "What style is The Broken Pitcher?",
        answer: "The painting belongs to the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> tradition, showing the soft colors and sentimental subject matter popular in mid-18th century France. Greuze's moralizing approach also anticipated the later Neoclassical preference for didactic content."
      }
    ]
  },
  {
    slug: 'lady-hamilton-as-circe',
    description: `<p><a href="/apps/masterpieces/artist/george-romney"><strong>George Romney</strong></a> painted this theatrical portrait around 1782, depicting Emma Hart (later Lady Hamilton) as the enchantress Circe from Greek mythology. Emma's dramatic pose and flowing costume show her gift for performance that made her famous in aristocratic circles. Romney's <strong>fluid brushwork</strong> captures both her beauty and her talent for embodying mythological characters.</p>
<p>Romney painted Emma dozens of times, clearly captivated by her expressive face and theatrical presence. This portrait dates from their most productive period together, before she became Lady Hamilton and the mistress of Admiral Nelson. Now at <a href="/apps/masterpieces/museum/tate-britain"><strong>Tate Britain</strong></a> in London, the painting documents both a celebrated beauty and one of the era's most important artistic partnerships.</p>`,
    faqs: [
      {
        question: "Where is Lady Hamilton as Circe displayed?",
        answer: "This painting hangs at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The museum holds an important collection of British art, including several portraits from the 18th century when Romney was among the most sought-after painters in England."
      },
      {
        question: "Who painted Lady Hamilton as Circe?",
        answer: "<a href=\"/apps/masterpieces/artist/george-romney\"><strong>George Romney</strong></a> created this portrait around 1782. He painted Emma Hart more than sixty times over several years, making her his most frequent model and muse during this period of his career."
      },
      {
        question: "Who was Lady Hamilton?",
        answer: "Emma Hart, later Lady Hamilton, rose from humble origins to become one of Georgian England's most famous women. She married Sir William Hamilton, British ambassador to Naples, and later became the mistress of Admiral Horatio Nelson."
      },
      {
        question: "Who was Circe in Greek mythology?",
        answer: "Circe was a sorceress in Homer's Odyssey who transformed Odysseus's men into pigs. Emma was known for her \"attitudes,\" living tableaux where she posed as classical and mythological figures, making Circe a fitting role for her talents."
      }
    ]
  },
  {
    slug: 'portrait-gentleman-study-lotto',
    description: `<p><a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> created this penetrating portrait study around 1526-1527, capturing a Venetian gentleman with characteristic psychological intensity. The subject's direct gaze and slightly parted lips suggest he was caught mid-thought, giving the portrait an unusual sense of immediacy. Lotto's <strong>sensitive handling</strong> of the face reveals both physical features and inner character.</p>
<p>This work demonstrates Lotto's distinctive approach to portraiture, which emphasized personality over status. Unlike his contemporaries who often created more formal images, Lotto sought to capture his subjects in unguarded moments. Now at the <a href="/apps/masterpieces/museum/gallerie-dellaccademia"><strong>Gallerie dell'Accademia</strong></a> in Venice, this study shows the artist's gifts at their most direct.</p>`,
    faqs: [
      {
        question: "Where can I see this Lorenzo Lotto portrait?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/gallerie-dellaccademia\"><strong>Gallerie dell'Accademia</strong></a> in Venice. This museum houses the world's finest collection of Venetian painting, including major works by Bellini, Giorgione, Titian, and Veronese."
      },
      {
        question: "Who painted Portrait of a Gentleman?",
        answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a> created this work around 1526-1527. Though less famous than Titian, Lotto was a gifted portraitist whose psychologically penetrating works have gained appreciation in modern times."
      },
      {
        question: "What makes Lotto's portraits distinctive?",
        answer: "Lotto captured his subjects with unusual psychological depth, showing them in unguarded moments rather than formal poses. His portraits often reveal anxiety or introspection, giving them a modern quality that distinguishes them from more conventional Renaissance portraits."
      }
    ]
  },
  {
    slug: 'van-gogh-view-of-royal-road-ramsgate',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> drew this view of Ramsgate in 1876, during his time as a teacher at a boys' school in the English coastal town. The sketch shows the Royal Road with its terraced houses, capturing the modest setting where the young Vincent first tried teaching. His <strong>careful linework</strong> documents a formative period before he committed to becoming an artist.</p>
<p>The drawing reveals Van Gogh's observational skills even at this early date, when he was still searching for his calling. He would work as a teacher, bookseller, and lay preacher before finally turning to art in 1880. Now at the <a href="/apps/masterpieces/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam, this sketch provides valuable insight into the artist's pre-painting years.</p>`,
    faqs: [
      {
        question: "Where is View of Royal Road displayed?",
        answer: "This drawing is held at the <a href=\"/apps/masterpieces/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> in Amsterdam. The museum houses the world's largest collection of Van Gogh's work, including paintings, drawings, and letters spanning his entire career."
      },
      {
        question: "When did Van Gogh create this drawing?",
        answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Vincent van Gogh</strong></a> made this sketch in 1876 while living in Ramsgate, England. He was working as an unpaid assistant teacher at a boys' boarding school, four years before he decided to become an artist."
      },
      {
        question: "Why was Van Gogh in Ramsgate?",
        answer: "Van Gogh went to Ramsgate in April 1876 to work as a teacher at a small school run by William Stokes. This was one of several jobs he tried before finding his vocation as an artist, including positions as an art dealer and lay preacher."
      }
    ]
  },
  {
    slug: 'punishment-of-lust',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-segantini"><strong>Giovanni Segantini</strong></a> painted this disturbing vision in 1891, showing ethereal female figures floating over a frozen Alpine landscape. According to Buddhist-influenced beliefs popular in Symbolist circles, these are the souls of women who refused motherhood, condemned to drift eternally over barren ice. Segantini's <strong>Divisionist technique</strong> renders the scene with crystalline clarity that intensifies its strangeness.</p>
<p>The painting reflects Segantini's interest in spiritual themes and his mastery of high-altitude light. The contrast between the warm flesh tones and the cold blue landscape creates an unsettling beauty. Now at the <a href="/apps/masterpieces/museum/walker-art-gallery"><strong>Walker Art Gallery</strong></a> in Liverpool, this work demonstrates the artist's unique blend of naturalism and mysticism.</p>`,
    faqs: [
      {
        question: "Where can I see The Punishment of Lust?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/walker-art-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool, England. The gallery holds an important collection of European art, including Pre-Raphaelite works and Symbolist paintings like this Segantini."
      },
      {
        question: "Who painted The Punishment of Lust?",
        answer: "<a href=\"/apps/masterpieces/artist/giovanni-segantini\"><strong>Giovanni Segantini</strong></a> created this work in 1891. An Italian painter who spent most of his career in the Swiss Alps, he combined <a href=\"/apps/masterpieces/movement/divisionism\"><strong>Divisionist</strong></a> technique with Symbolist themes."
      },
      {
        question: "What does this painting depict?",
        answer: "The painting shows souls of women who rejected motherhood, floating eternally over frozen mountains as punishment. This theme came from a Buddhist-influenced poem and reflects the Symbolist interest in mystical and spiritual subjects during the 1890s."
      }
    ]
  },
  {
    slug: 'ships-in-a-calm',
    description: `<p><a href="/apps/masterpieces/artist/willem-van-de-velde-the-younger"><strong>Willem van de Velde the Younger</strong></a> painted this serene maritime scene around 1660, showing Dutch vessels at anchor on a calm sea. The ships sit motionless on glassy water, their masts and rigging reflected with mirror-like precision. Van de Velde's <strong>meticulous attention</strong> to nautical detail combined with atmospheric sensitivity made him the supreme marine painter of the Dutch Golden Age.</p>
<p>The painting captures a moment of complete stillness, with boats waiting for wind to fill their sails. Light filtering through thin clouds creates subtle tonal variations across the water's surface. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this work demonstrates why Van de Velde was employed by both Dutch and English royalty.</p>`,
    faqs: [
      {
        question: "Where is Ships in a Calm displayed?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. The museum holds several works by Willem van de Velde, who spent the later part of his career in England working for King Charles II."
      },
      {
        question: "Who painted Ships in a Calm?",
        answer: "<a href=\"/apps/masterpieces/artist/willem-van-de-velde-the-younger\"><strong>Willem van de Velde the Younger</strong></a> created this work around 1660. He came from a family of marine artists and became the most celebrated painter of ships and sea in 17th-century Europe."
      },
      {
        question: "What type of painting is this?",
        answer: "This is a marine painting or seascape, a genre that flourished in the Dutch Republic during the Golden Age. The Netherlands' dependence on maritime trade and naval power made ship paintings popular with collectors and patrons."
      }
    ]
  },
  {
    slug: 'peasant-family-interior',
    description: `<p><a href="/apps/masterpieces/artist/louis-le-nain"><strong>Louis Le Nain</strong></a> painted this dignified scene of rural life around 1642, showing a peasant family gathered in their modest home. The figures sit or stand in calm poses, regarding the viewer with expressions of quiet gravity. Le Nain's <strong>sympathetic treatment</strong> of his humble subjects gives them a monumental presence usually reserved for religious or historical paintings.</p>
<p>The painting belongs to a group of peasant scenes that have made the Le Nain brothers famous in modern times. Rather than mocking or sentimentalizing rural poverty, Louis portrayed his subjects with respect and understanding. Now at the <a href="/apps/masterpieces/museum/louvre-museum"><strong>Louvre Museum</strong></a> in Paris, this work represents 17th-century French realism at its most humane.</p>`,
    faqs: [
      {
        question: "Where can I see Peasant Family in an Interior?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-museum\"><strong>Louvre Museum</strong></a> in Paris. The Louvre holds an important collection of works by the Le Nain brothers, whose peasant scenes offer a rare glimpse into 17th-century French rural life."
      },
      {
        question: "Who painted Peasant Family in an Interior?",
        answer: "<a href=\"/apps/masterpieces/artist/louis-le-nain\"><strong>Louis Le Nain</strong></a> created this work around 1642. He worked alongside his brothers Antoine and Mathieu, making attribution difficult, but Louis is generally credited with the most dignified peasant scenes."
      },
      {
        question: "Why are Le Nain's peasant scenes important?",
        answer: "Le Nain portrayed rural poor with unusual dignity and sympathy for his time. Unlike Dutch or Flemish painters who often showed peasants as comic figures, he presented them as worthy subjects for serious art, influencing later realist painters."
      }
    ]
  },
  {
    slug: 'otto-mueller-zwei-m228dchen-und-stehender-j252ngling',
    description: `<p><a href="/apps/masterpieces/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted this scene of nude figures in nature around 1918-1920, showing two girls and a standing youth in a landscape setting. The work exemplifies Mueller's characteristic style: elongated forms, muted earth tones, and figures at ease in natural surroundings. His <strong>simplified shapes</strong> and matt surface give the painting a fresco-like quality.</p>
<p>Mueller was a member of Die Brücke, the German Expressionist group, though his work remained more lyrical than his colleagues'. His vision of figures in harmony with nature reflected both his artistic ideals and his personal identification with Roma culture. The painting is held in the Sammlung Karsch in Berlin, part of an important collection of German Expressionist art.</p>`,
    faqs: [
      {
        question: "Who painted Two Girls and Standing Youth?",
        answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> created this work around 1918-1920. He was a member of Die Brücke, the pioneering <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group, though his gentle nudes in landscapes had a more poetic quality than other members' work."
      },
      {
        question: "What style is this painting?",
        answer: "The painting belongs to German Expressionism, though Mueller's version was softer than artists like Kirchner or Heckel. His simplified forms, earthy palette, and interest in figures harmonizing with nature gave his work a distinctive, almost timeless quality."
      },
      {
        question: "Where is this painting located?",
        answer: "The work is held in the Sammlung Karsch in Berlin, a private collection specializing in German Expressionist art. Mueller's paintings of nudes in landscapes are among the most recognized images of the Die Brücke movement."
      }
    ]
  },
  {
    slug: 'death-of-gravedigger',
    description: `<p><a href="/apps/masterpieces/artist/carlos-schwabe"><strong>Carlos Schwabe</strong></a> painted this haunting image in 1895, showing Death as an angel descending upon a gravedigger in a snow-covered cemetery. The winged figure's greenish flesh and mechanical wings contrast with the winter setting, creating an image both beautiful and disturbing. Schwabe's <strong>precise technique</strong> renders every detail with hallucinatory clarity.</p>
<p>The painting exemplifies the Symbolist movement's fascination with death, dreams, and the supernatural. The gravedigger's resigned acceptance of his fate adds poignancy to the scene. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, this work demonstrates Schwabe's ability to transform morbid subjects into compelling art.</p>`,
    faqs: [
      {
        question: "Where can I see The Death of the Gravedigger?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds an important collection of Symbolist art, including works that explore themes of death, dreams, and the supernatural."
      },
      {
        question: "Who painted The Death of the Gravedigger?",
        answer: "<a href=\"/apps/masterpieces/artist/carlos-schwabe\"><strong>Carlos Schwabe</strong></a> created this work in 1895. A German-Swiss painter who worked in Paris, he became associated with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and Art Nouveau, known for his precise technique and mystical imagery."
      },
      {
        question: "What does this painting depict?",
        answer: "The painting shows Death as an angel with green-tinged skin and mechanical wings, descending upon an elderly gravedigger in a snowy cemetery. The image reflects Symbolist fascination with mortality and the boundary between life and death."
      }
    ]
  },
  {
    slug: 'two-girls-in-grass',
    description: `<p><a href="/apps/masterpieces/artist/august-macke"><strong>August Macke</strong></a> painted this luminous scene around 1912, showing two women seated in bright grass beneath colorful foliage. The composition uses bold patches of pure color arranged in a rhythmic pattern that creates both depth and decorative unity. Macke's <strong>joyful palette</strong> and harmonious forms express his optimistic vision of modern life.</p>
<p>The painting dates from Macke's most productive period, when he synthesized influences from French painting into his own distinctive style. His combination of Fauvist color with a more structured approach to composition distinguished his work from other German Expressionists. Now at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich, this work captures Macke's art at its most radiant.</p>`,
    faqs: [
      {
        question: "Where is Two Girls in Grass displayed?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich. The museum holds an important collection of 19th and early 20th-century European art, including works by German Expressionists and their French contemporaries."
      },
      {
        question: "Who painted Two Girls in Grass?",
        answer: "<a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a> created this work around 1912. A member of Der Blaue Reiter group, he developed a colorful, optimistic style before his early death in World War I at age 27."
      },
      {
        question: "What style is this painting?",
        answer: "The painting reflects <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, though Macke's version was more lyrical and colorful than many of his contemporaries. His work combined the bold colors of Fauvism with the spiritual interests of Der Blaue Reiter."
      }
    ]
  },
  {
    slug: 'job-bonnat',
    description: `<p><a href="/apps/masterpieces/artist/leon-bonnat"><strong>Léon Bonnat</strong></a> painted this powerful biblical scene in 1880, depicting the tormented figure of Job seated on a refuse heap. The Old Testament patriarch has lost everything but maintains his faith, his aged body rendered with unflinching realism. Bonnat's <strong>academic technique</strong> brings dramatic intensity to this study of suffering and endurance.</p>
<p>The painting demonstrates Bonnat's skill at combining traditional religious subjects with contemporary naturalism. The harsh lighting and detailed anatomy show his training in Spanish masters like Ribera. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, this work represents academic painting at its most accomplished.</p>`,
    faqs: [
      {
        question: "Where can I see Job by Bonnat?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum's collection includes major examples of 19th-century academic painting alongside the Impressionist works for which it is better known."
      },
      {
        question: "Who painted Job?",
        answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Léon Bonnat</strong></a> created this work in 1880. A successful academic painter and portraitist, he was known for his realistic technique and dramatic lighting, influenced by Spanish Baroque masters."
      },
      {
        question: "Who was Job in the Bible?",
        answer: "Job was a righteous man who lost his family, wealth, and health as a test of faith. Despite his suffering, he refused to curse God, becoming a symbol of patience and endurance in adversity. Bonnat depicts him at his lowest point."
      }
    ]
  },
  {
    slug: 'thomas-cole-landscape-with-figures-a-scene-from-the-last-of-th',
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this dramatic wilderness scene around 1826, inspired by James Fenimore Cooper's novel "The Last of the Mohicans." The composition shows tiny figures dwarfed by towering cliffs and primeval forest, emphasizing the American landscape's sublime power. Cole's <strong>romantic vision</strong> helped establish landscape painting as a serious art form in the United States.</p>
<p>The painting reflects Cole's belief that American scenery could rival European subjects in artistic significance. The wild, untamed landscape becomes both setting and symbol, suggesting the passing of Native American cultures. This work remains in a private collection, representing an important moment in American art history.</p>`,
    faqs: [
      {
        question: "Who painted this scene from The Last of the Mohicans?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> created this work around 1826. Founder of the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, he pioneered American landscape painting and influenced generations of artists who followed."
      },
      {
        question: "What inspired this painting?",
        answer: "Cole based this scene on James Fenimore Cooper's 1826 novel \"The Last of the Mohicans.\" The story's themes of wilderness, conflict, and vanishing cultures aligned with Cole's own beliefs about the American landscape's spiritual significance."
      },
      {
        question: "Where is this painting located?",
        answer: "This painting remains in a private collection. Cole painted several works inspired by Cooper's novel, and various versions have appeared at auction and in museums over the years."
      }
    ]
  },
  {
    slug: 'three-women-in-church',
    description: `<p><a href="/apps/masterpieces/artist/wilhelm-leibl"><strong>Wilhelm Leibl</strong></a> painted this masterpiece of German realism between 1878 and 1882, showing three Bavarian peasant women absorbed in prayer. The artist spent over three years in the village church, working directly from his models to achieve absolute fidelity to nature. Leibl's <strong>painstaking technique</strong> renders every texture with almost microscopic precision.</p>
<p>The painting celebrates ordinary people with the seriousness usually reserved for historical subjects. Each woman represents a different generation, their weathered hands and plain clothing depicted without sentimentality or condescension. Now at the <a href="/apps/masterpieces/museum/hamburger-kunsthalle"><strong>Hamburger Kunsthalle</strong></a>, this work stands among the greatest achievements of 19th-century realism.</p>`,
    faqs: [
      {
        question: "Where can I see Three Women in Church?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/hamburger-kunsthalle\"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, Germany. The museum holds one of Germany's most important collections of 19th-century painting, including major works of German realism."
      },
      {
        question: "Who painted Three Women in Church?",
        answer: "<a href=\"/apps/masterpieces/artist/wilhelm-leibl\"><strong>Wilhelm Leibl</strong></a> created this work between 1878 and 1882. He was the leading figure of German <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a>, known for his extraordinarily precise technique and sympathetic portrayal of rural subjects."
      },
      {
        question: "Why did this painting take so long to complete?",
        answer: "Leibl worked directly from his models in an unheated Bavarian church, painting only when lighting conditions were right. His dedication to absolute accuracy meant each detail was observed from life, requiring over three years of painstaking work."
      }
    ]
  },
  {
    slug: 'gustave-moreau-two-modern-horsewomen',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this unusual scene around 1855-1860, depicting two fashionably dressed women on horseback. The subject marks a departure from Moreau's typical mythological themes, showing his ability to observe contemporary life when he chose. The riders' <strong>elegant costumes</strong> and confident bearing reflect mid-19th century Parisian society.</p>
<p>The painting dates from early in Moreau's career, before he fully committed to the Symbolist imagery that made him famous. This glimpse of modern life provides valuable contrast to his later fantastic visions. The work remains in a private collection, a relatively rare example of Moreau engaging with everyday subjects.</p>`,
    faqs: [
      {
        question: "Who painted Two Modern Horsewomen?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this work around 1855-1860. Better known for mythological and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> paintings, he occasionally depicted contemporary subjects early in his career."
      },
      {
        question: "Why is this painting unusual for Moreau?",
        answer: "Moreau is famous for elaborate mythological scenes filled with jewels, exotic details, and mystical atmosphere. This straightforward depiction of modern horsewomen shows a different side of his talent, demonstrating his skill at observing contemporary life."
      },
      {
        question: "Where is this painting located?",
        answer: "Two Modern Horsewomen remains in a private collection. While the Musée Gustave Moreau in Paris holds most of the artist's work, some pieces from his early career remain in private hands."
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-the-family',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this warm interior scene around 1647, showing a peasant family gathered in their cottage. A mother tends to a child while other family members go about daily tasks in the humble space. Van Ostade's <strong>golden light</strong> filtering through a window transforms the modest setting into something tender and dignified.</p>
<p>The painting exemplifies Dutch Golden Age genre painting at its most sympathetic. Unlike earlier depictions of peasants as crude or comic, van Ostade presents his subjects with affection and understanding. Now at the <a href="/apps/masterpieces/museum/louvre-museum"><strong>Louvre Museum</strong></a> in Paris, this work shows the artist's mature style at its finest.</p>`,
    faqs: [
      {
        question: "Where can I see The Family by Adriaen van Ostade?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-museum\"><strong>Louvre Museum</strong></a> in Paris. The museum holds several works by van Ostade, whose peasant interiors were popular with French collectors from the 18th century onward."
      },
      {
        question: "Who painted The Family?",
        answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this work around 1647. A Haarlem painter who studied with Frans Hals, he specialized in scenes of peasant life that combined humor with genuine warmth."
      },
      {
        question: "What type of painting is this?",
        answer: "This is a genre painting, depicting everyday life rather than historical, religious, or mythological subjects. Genre scenes flourished in the Dutch Republic, where a prosperous middle class created demand for paintings of ordinary people and activities."
      }
    ]
  },
  {
    slug: 'kauterskill-falls-gifford',
    description: `<p><a href="/apps/masterpieces/artist/sanford-robinson-gifford"><strong>Sanford Robinson Gifford</strong></a> painted this luminous view of Kaaterskill Falls around 1862, capturing the famous Catskill Mountain waterfall bathed in golden light. The falls cascade through layers of mist while tiny figures on viewing platforms provide scale for the towering cliffs. Gifford's <strong>atmospheric effects</strong> transform the landscape into a vision of American sublimity.</p>
<p>Kaaterskill Falls was one of the most popular subjects for Hudson River School painters, and Gifford returned to it throughout his career. His version emphasizes light and atmosphere over topographical detail, creating a more meditative image than some contemporaries. Now at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York, this painting demonstrates his mastery of luminist effects.</p>`,
    faqs: [
      {
        question: "Where can I see Kaaterskill Falls by Gifford?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. The Met holds an important collection of Hudson River School paintings, including multiple works depicting this famous waterfall."
      },
      {
        question: "Who painted Kaaterskill Falls?",
        answer: "<a href=\"/apps/masterpieces/artist/sanford-robinson-gifford\"><strong>Sanford Robinson Gifford</strong></a> painted this version around 1862. A leading figure of the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, he was known for his luminous atmospheric effects and poetic approach to landscape."
      },
      {
        question: "Where are Kaaterskill Falls?",
        answer: "Kaaterskill Falls is a two-drop waterfall in the Catskill Mountains of New York State. At 260 feet total, it was one of the highest waterfalls in the eastern United States and became a major tourist attraction in the 19th century."
      }
    ]
  },
  {
    slug: 'william-hogarth-hudibras-encounters-the-skimmington-from-39hudibra',
    description: `<p><a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a> created this satirical scene around 1726, illustrating an episode from Samuel Butler's mock-heroic poem "Hudibras." The composition shows the bumbling knight encountering a "skimmington ride," a folk ritual used to shame couples who violated social norms. Hogarth's <strong>crowded composition</strong> captures the chaos and comedy of Butler's verse.</p>
<p>This early work demonstrates Hogarth's gift for visual storytelling and social observation that would make him famous. The detailed depiction of English folk customs provides valuable historical documentation alongside its humor. The painting remains in a private collection, representing an important stage in Hogarth's development.</p>`,
    faqs: [
      {
        question: "Who painted Hudibras Encounters the Skimmington?",
        answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>William Hogarth</strong></a> created this work around 1726. He made a series of paintings and engravings illustrating \"Hudibras\" early in his career, before developing the \"modern moral subjects\" that made him famous."
      },
      {
        question: "What is a skimmington ride?",
        answer: "A skimmington (or \"rough music\") was a folk ritual where villagers publicly shamed people who violated social norms, particularly husbands dominated by their wives. Participants made noise with pots and pans while parading effigies or the accused through town."
      },
      {
        question: "What is Hudibras about?",
        answer: "\"Hudibras\" is Samuel Butler's satirical poem from the 1660s, mocking Puritans through the adventures of a pompous, incompetent knight. The work remained popular into Hogarth's time, and illustrating it helped establish his reputation."
      }
    ]
  },
  {
    slug: 'william-hogarth-the-wedding-of-stephen-beckingham-and-mary-cox',
    description: `<p><a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a> painted this elegant conversation piece in 1729, commemorating the marriage of Stephen Beckingham to Mary Cox. The ceremony takes place in an ornate church interior, with the couple standing before the altar while wedding guests fill the pews. Hogarth's <strong>attention to costume and setting</strong> documents Georgian wedding customs with precision.</p>
<p>The painting represents Hogarth's work as a fashionable portrait painter before he found greater success with his satirical series. The careful rendering of rich fabrics and architectural details shows his technical skill, while the arrangement of figures demonstrates his compositional gifts. Now at the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York, this work offers a glimpse of 18th-century English society.</p>`,
    faqs: [
      {
        question: "Where can I see The Wedding of Stephen Beckingham?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. The museum's collection includes several works by Hogarth, offering insight into both his portrait work and his satirical paintings."
      },
      {
        question: "Who painted The Wedding of Stephen Beckingham and Mary Cox?",
        answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>William Hogarth</strong></a> painted this work in 1729. Before becoming famous for satirical series like \"A Rake's Progress,\" he worked as a portrait painter for the London middle class and gentry."
      },
      {
        question: "What is a conversation piece?",
        answer: "A conversation piece is an informal group portrait showing figures in a domestic or social setting. Popular in 18th-century Britain, these paintings typically showed families or friends engaged in everyday activities, often in their homes or gardens."
      },
      {
        question: "Who were Stephen Beckingham and Mary Cox?",
        answer: "Stephen Beckingham was a lawyer who married Mary Cox on June 9, 1729. They commissioned Hogarth to commemorate their wedding, a common practice among prosperous Georgian families who wanted visual records of important family events."
      }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 25 artworks...');

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
      console.log(`✓ Updated: ${update.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${update.slug}`, error.message);
    }
  }

  console.log('Batch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
