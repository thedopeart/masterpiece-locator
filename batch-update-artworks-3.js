const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'thomas-couture-soap-bubbles',
    description: `<p><a href="/apps/masterpieces/artist/thomas-couture"><strong>Thomas Couture</strong></a> painted this scene of a young boy blowing soap bubbles, a subject with deep roots in vanitas tradition. The child concentrates on the <strong>fragile iridescent sphere</strong>, unaware that it symbolizes life's transience. Couture renders the moment with warmth rather than heavy moralizing.</p>
<p>Soap bubble imagery appeared frequently in Dutch and French painting as a meditation on impermanence. Couture's <strong>soft brushwork</strong> and gentle lighting give the scene an intimate, tender quality. This painting hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "Soap Bubbles hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, which has an extensive collection of <strong>19th-century French painting</strong>." },
      { question: "Who was Thomas Couture?", answer: "<a href=\"/apps/masterpieces/artist/thomas-couture\"><strong>Thomas Couture</strong></a> was a French academic painter best known for \"Romans of the Decadence\" and as teacher to <strong>Édouard Manet</strong>." },
      { question: "What does the soap bubble symbolize?", answer: "In art history, <strong>soap bubbles</strong> symbolize life's brevity and fragility, a vanitas theme reminding viewers that earthly pleasures are fleeting." }
    ]
  },
  {
    slug: 'robert-campin-madonna-and-child',
    description: `<p><a href="/apps/masterpieces/artist/robert-campin"><strong>Robert Campin</strong></a> painted this intimate devotional image of the Virgin Mary holding the infant Christ. The <strong>meticulous detail</strong> of fabric, flesh, and setting exemplifies Early Netherlandish painting's revolutionary naturalism. Campin pioneered techniques that influenced Jan van Eyck and later masters.</p>
<p>The domestic setting places sacred figures in a recognizable world, making the divine accessible to viewers. Campin's <strong>precise oil technique</strong> renders textures with remarkable fidelity. This panel is displayed at the <a href="/apps/masterpieces/museum/stadel-museum"><strong>Städel Museum</strong></a> in Frankfurt.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/stadel-museum\"><strong>Städel Museum</strong></a> in Frankfurt, Germany, known for its <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> collection." },
      { question: "Who was Robert Campin?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> was a pioneering Early Netherlandish painter, also called the Master of Flémalle, who influenced <strong>Jan van Eyck</strong>." },
      { question: "What makes this painting significant?", answer: "Campin's <strong>naturalistic detail</strong> and oil technique helped establish the Northern Renaissance style, influencing generations of Flemish painters." }
    ]
  },
  {
    slug: 'thomas-gainsborough-portrait-of-heneage-lloyd-and-his-sister-lucy',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this double portrait of siblings Heneage and Lucy Lloyd in an outdoor setting. The young pair stand in a <strong>verdant landscape</strong>, their elegant clothing contrasting with the natural surroundings. Gainsborough excelled at combining portraiture with his love of landscape painting.</p>
<p>The relaxed poses and soft lighting create an atmosphere of <strong>aristocratic ease</strong>. Gainsborough's feathery brushwork gives the foliage a distinctive shimmer. This portrait hangs at the <a href="/apps/masterpieces/museum/fitzwilliam"><strong>Fitzwilliam Museum</strong></a> at Cambridge University.</p>`,
    faqs: [
      { question: "Where can I see this portrait?", answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/fitzwilliam\"><strong>Fitzwilliam Museum</strong></a> at Cambridge University, which has a fine collection of <strong>British portraiture</strong>." },
      { question: "Who was Thomas Gainsborough?", answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Thomas Gainsborough</strong></a> was one of 18th-century Britain's greatest painters, rivaling <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Joshua Reynolds</strong></a> for portrait commissions." },
      { question: "What style is this portrait?", answer: "This is an <strong>outdoor conversation piece</strong>, a format Gainsborough favored that combines portrait subjects with landscape settings." }
    ]
  },
  {
    slug: 'salvator-rosa-wooded-landscape',
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this wild, untamed landscape that typifies his romantic vision of nature. <strong>Gnarled trees</strong> and rocky terrain create an atmosphere of sublime wilderness far removed from the serene pastoral scenes of his contemporaries. Rosa's landscapes anticipated Romantic art by over a century.</p>
<p>The Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> master cultivated an image as a rebellious genius who preferred wild nature to civilization. His <strong>dramatic compositions</strong> influenced English landscape gardens and Romantic painters. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This landscape is held in a <strong>private collection</strong>. Major Rosa works can be seen at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> London and the Louvre." },
      { question: "Who was Salvator Rosa?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> was an Italian <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter known for wild landscapes that anticipated Romantic art." },
      { question: "What style are Rosa's landscapes?", answer: "Rosa painted <strong>sublime wilderness</strong> scenes with jagged rocks and twisted trees, influencing the Romantic movement's view of untamed nature." }
    ]
  },
  {
    slug: 'titian-orpheus-and-eurydice',
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> depicted the tragic moment when Orpheus turns to look at Eurydice as he leads her from the underworld. The <strong>fatal glance</strong> dooms her to return to death forever. Titian's rich Venetian color brings emotional intensity to this mythological tragedy.</p>
<p>The painting shows Titian's mastery of <strong>dramatic narrative</strong> and atmospheric landscape. His loose brushwork creates a sense of movement and urgency in the desperate scene. This work hangs at the <a href="/apps/masterpieces/museum/accademia-carrara"><strong>Accademia Carrara</strong></a> in Bergamo, Italy.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/accademia-carrara\"><strong>Accademia Carrara</strong></a> in Bergamo, Italy, a museum with important <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> holdings." },
      { question: "Who was Titian?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> was the greatest Venetian Renaissance painter, celebrated for his mastery of <strong>color and mythological subjects</strong>." },
      { question: "What is the story of Orpheus and Eurydice?", answer: "<strong>Orpheus</strong> descended to the underworld to rescue his wife Eurydice but lost her forever when he looked back before reaching the surface." }
    ]
  },
  {
    slug: 'canaletto-the-grand-canal-near-the-ponte-del-rialto',
    description: `<p><a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto</strong></a> captured this view of Venice's Grand Canal near the famous Rialto Bridge. <strong>Gondolas and merchant boats</strong> navigate the busy waterway while elegant palaces line both banks. The artist's precise topography and luminous atmosphere made such views highly prized by Grand Tour visitors.</p>
<p>Canaletto painted numerous variations of this iconic scene. His <strong>crisp detail</strong> and careful perspective give an almost photographic quality to the bustling Venetian scene. This painting hangs at the <a href="/apps/masterpieces/museum/ashmolean"><strong>Ashmolean Museum</strong></a> in Oxford.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This view hangs at the <a href=\"/apps/masterpieces/museum/ashmolean\"><strong>Ashmolean Museum</strong></a> in Oxford, Britain's oldest public museum with strong <strong>Italian art holdings</strong>." },
      { question: "Who was Canaletto?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> was Venice's most famous view painter, creating precise <strong>vedute</strong> popular with British Grand Tour collectors." },
      { question: "What is the Rialto Bridge?", answer: "The <strong>Ponte di Rialto</strong> is Venice's oldest bridge across the Grand Canal, a commercial and tourist landmark since the 16th century." }
    ]
  },
  {
    slug: 'vasily-surikov-isba',
    description: `<p><a href="/apps/masterpieces/artist/vasily-surikov"><strong>Vasily Surikov</strong></a> painted this view of an isba, a traditional Russian wooden house. The <strong>humble dwelling</strong> sits in a winter landscape, its log construction and snow-covered roof evoking rural Siberian life. Surikov grew up in such surroundings and returned to paint them throughout his career.</p>
<p>While known for large historical canvases, Surikov also documented <strong>Russian vernacular architecture</strong> with deep personal attachment. The muted winter palette captures the harsh beauty of his homeland. This painting hangs at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia's premier museum of <strong>national art</strong>." },
      { question: "Who was Vasily Surikov?", answer: "<a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Vasily Surikov</strong></a> was a major Russian painter known for dramatic historical scenes and <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>Siberian landscapes</strong></a>." },
      { question: "What is an isba?", answer: "An <strong>isba</strong> is a traditional Russian log house, typically found in rural areas, with a distinctive design suited to harsh winters." }
    ]
  },
  {
    slug: 'van-gogh-the-goat-herd',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted this rural scene showing a goatherd tending animals in an open landscape. The <strong>earthy palette</strong> and simple subject reflect his early Dutch period when he focused on peasant life and labor. Van Gogh sought to capture the dignity of rural workers.</p>
<p>Before his move to Paris and discovery of bright color, Van Gogh painted in <strong>somber tones</strong> influenced by the Hague School and Millet. This work shows his early commitment to depicting working people. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. Van Gogh's Dutch period works can be seen at the <a href=\"/apps/masterpieces/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> in Amsterdam." },
      { question: "When did Van Gogh paint this?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted rural subjects during his early <strong>Dutch period</strong> before moving to Paris in 1886." },
      { question: "What influenced Van Gogh's early work?", answer: "His early paintings show influence from the <strong>Hague School</strong> and Jean-François Millet's images of peasant labor." }
    ]
  },
  {
    slug: 'van-gogh-vicarage-at-etten',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> depicted his family's vicarage at Etten in the Netherlands, where his father served as a Protestant minister. The <strong>modest parsonage</strong> sits amid trees and garden, representing Van Gogh's complicated relationship with his religious upbringing. This autobiographical subject connected him to his origins.</p>
<p>Van Gogh painted during a period when he still considered following his father into ministry. The <strong>sober Dutch palette</strong> reflects his pre-Paris style before he discovered Impressionist color. This painting was at the Isabella Stewart Gardner Museum until its theft in 1990.</p>`,
    faqs: [
      { question: "Where is this painting now?", answer: "This work was stolen from the <a href=\"/apps/masterpieces/museum/isabella-stewart-gardner\"><strong>Isabella Stewart Gardner Museum</strong></a> in Boston in 1990. Its <strong>whereabouts remain unknown</strong>." },
      { question: "What does the painting show?", answer: "The painting depicts the <strong>vicarage at Etten</strong> where Van Gogh's father served as minister, a site of personal significance to the artist." },
      { question: "When was it stolen?", answer: "The painting was taken in the famous <strong>1990 Gardner Museum heist</strong>, the largest art theft in history, and has never been recovered." }
    ]
  },
  {
    slug: 'vittore-carpaccio-the-arrival-of-the-english-ambassadors',
    description: `<p><a href="/apps/masterpieces/artist/vittore-carpaccio"><strong>Vittore Carpaccio</strong></a> painted this scene from the Legend of Saint Ursula, showing English ambassadors arriving to request the princess's hand in marriage. The <strong>elaborate courtly setting</strong> features detailed architecture and richly dressed figures. Carpaccio excelled at narrative cycles with their storytelling pageantry.</p>
<p>This painting is part of a larger cycle depicting Ursula's life and martyrdom. Carpaccio's <strong>meticulous detail</strong> documents 15th-century Venetian costume and ceremony. Displayed at the <a href="/apps/masterpieces/museum/gallerie-accademia-venice"><strong>Gallerie dell'Accademia</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/gallerie-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, which holds the complete <strong>Saint Ursula cycle</strong>." },
      { question: "Who was Vittore Carpaccio?", answer: "<a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Vittore Carpaccio</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter known for detailed narrative cycles depicting saints' lives." },
      { question: "What is the Saint Ursula cycle?", answer: "Carpaccio painted nine canvases telling the <strong>legend of Saint Ursula</strong>, a British princess martyred with 11,000 virgins." }
    ]
  },
  {
    slug: 'caravaggio-penitent-magdalene',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> depicted Mary Magdalene in a moment of solitary repentance. The figure sits slumped forward, <strong>jewelry discarded</strong> on the floor beside her as she contemplates her changed life. Caravaggio's dramatic lighting isolates her against deep shadow, emphasizing her emotional state.</p>
<p>This early work shows Caravaggio's revolutionary approach to religious subjects, using ordinary models and <strong>psychological intensity</strong>. The painting hangs at the <a href="/apps/masterpieces/museum/galleria-doria-pamphilj"><strong>Galleria Doria Pamphilj</strong></a> in Rome, a palace still owned by the noble family.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The Penitent Magdalene hangs at the <a href=\"/apps/masterpieces/museum/galleria-doria-pamphilj\"><strong>Galleria Doria Pamphilj</strong></a> in Rome, a private palace museum with major <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works." },
      { question: "Who was Caravaggio?", answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> revolutionized Baroque painting with dramatic lighting and realistic, often controversial religious subjects." },
      { question: "Who was Mary Magdalene?", answer: "<strong>Mary Magdalene</strong> was a follower of Christ traditionally identified as a reformed sinner, though this interpretation is disputed by scholars." }
    ]
  },
  {
    slug: 'william-blake-nebuchadnezzar',
    description: `<p><a href="/apps/masterpieces/artist/william-blake"><strong>William Blake</strong></a> depicted the biblical king Nebuchadnezzar in his divinely ordained madness, crawling on all fours like a beast. The <strong>muscular figure</strong> stares with wild eyes, his humanity stripped away as punishment for pride. Blake's visionary imagination transforms the Old Testament story into haunting imagery.</p>
<p>This work exemplifies Blake's unique combination of <strong>prophetic vision</strong> and technical mastery. The print exists in multiple color variations hand-finished by the artist. Displayed at <a href="/apps/masterpieces/museum/tate-britain"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      { question: "Where can I see this work?", answer: "This print is displayed at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London, which holds the world's largest collection of <strong>William Blake's work</strong>." },
      { question: "Who was William Blake?", answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake</strong></a> was a visionary English artist and poet who created <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> imagery drawn from biblical and mythological sources." },
      { question: "Who was Nebuchadnezzar?", answer: "<strong>Nebuchadnezzar</strong> was a Babylonian king who, according to the Book of Daniel, was struck with madness and lived as a beast for seven years." }
    ]
  },
  {
    slug: 'william-hogarth-prospero-and-miranda-from-quotthe-tempestquot-of-w',
    description: `<p><a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a> painted this scene from Shakespeare's The Tempest showing Prospero with his daughter Miranda. The <strong>theatrical composition</strong> captures a dramatic moment from the play, reflecting Hogarth's early career painting literary and theatrical subjects before his famous satirical series.</p>
<p>Hogarth's theatrical training shows in the <strong>staged quality</strong> of the scene, with figures posed like actors. His narrative skill would later serve his moral series brilliantly. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. Hogarth's theatrical and literary subjects are less known than his satirical series at the <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate</strong></a>." },
      { question: "Who was William Hogarth?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>William Hogarth</strong></a> was an 18th-century English painter famous for <strong>satirical narrative series</strong> criticizing Georgian society." },
      { question: "What is The Tempest about?", answer: "Shakespeare's <strong>The Tempest</strong> tells of Prospero, a magician duke exiled on an island with his daughter Miranda, who conjures a storm for revenge." }
    ]
  },
  {
    slug: 'theodore-gericault-study-for-the-race-of-the-barbarian-horses',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> created this preparatory study for a larger composition depicting the famous riderless horse race in Rome. <strong>Powerful horses</strong> strain at the start, held by grooms before release down the Corso. Géricault was obsessed with horses and their muscular energy.</p>
<p>This study shows Géricault's <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> interest in <strong>raw animal power</strong> and dramatic movement. The Roman horse races fascinated many artists visiting Italy. Displayed at the <a href="/apps/masterpieces/museum/palais-beaux-arts-lille"><strong>Palais des Beaux-Arts</strong></a> in Lille, France.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This study hangs at the <a href=\"/apps/masterpieces/museum/palais-beaux-arts-lille\"><strong>Palais des Beaux-Arts</strong></a> in Lille, one of France's largest fine arts museums outside Paris." },
      { question: "Who was Géricault?", answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Théodore Géricault</strong></a> was a French <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter known for powerful subjects like \"The Raft of the Medusa.\"" },
      { question: "What was the Barberi horse race?", answer: "The <strong>Barberi race</strong> was a Roman carnival tradition where riderless horses ran down the Corso, a spectacle that fascinated visiting artists." }
    ]
  },
  {
    slug: 'thomas-cole-view-in-the-white-mountains',
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this view of New Hampshire's White Mountains, celebrating American wilderness as a source of spiritual renewal. <strong>Dramatic peaks</strong> rise above forest and valley, bathed in atmospheric light. Cole founded the Hudson River School movement that elevated landscape painting to a serious American art form.</p>
<p>Cole made sketching trips to the White Mountains, translating his observations into <strong>romantic compositions</strong>. The painting's grandeur argues for nature's moral significance. Displayed at the <a href="/apps/masterpieces/museum/wadsworth-atheneum"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, America's oldest public art museum with strong <strong>Hudson River School</strong> holdings." },
      { question: "Who was Thomas Cole?", answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> founded the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Hudson River School</strong></a>, America's first major art movement celebrating wilderness landscapes." },
      { question: "Why were the White Mountains popular subjects?", answer: "The <strong>White Mountains</strong> attracted American painters seeking dramatic scenery that could rival European Alpine landscapes in grandeur." }
    ]
  },
  {
    slug: 'william-holman-hunt-the-sphinx-at-gizeh',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted the Great Sphinx during his travels to Egypt and the Holy Land. The <strong>ancient monument</strong> emerges from desert sands under dramatic light, rendered with the Pre-Raphaelite commitment to truth to nature. Hunt sought authentic settings for his biblical subjects.</p>
<p>Hunt made multiple trips to the Middle East for archaeological accuracy. His <strong>detailed observation</strong> of the Sphinx captures its weathered stone and surrounding landscape. This painting hangs at the <a href="/apps/masterpieces/museum/harris-museum"><strong>Harris Museum</strong></a> in Preston, England.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The Sphinx at Gizeh hangs at the <a href=\"/apps/masterpieces/museum/harris-museum\"><strong>Harris Museum</strong></a> in Preston, England, which has an important collection of <strong>Victorian painting</strong>." },
      { question: "Who was William Holman Hunt?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> co-founded the <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite Brotherhood</strong></a> and traveled to the Holy Land for authentic biblical settings." },
      { question: "Why did Hunt travel to Egypt?", answer: "Hunt sought <strong>archaeological accuracy</strong> for his religious paintings, making three trips to the Middle East to study the actual sites." }
    ]
  },
  {
    slug: 'tintoretto-self-portrait',
    description: `<p><a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> portrayed himself in this penetrating self-portrait that reveals the artist in later life. His <strong>intense gaze</strong> meets the viewer directly, beard and features rendered with characteristic Venetian warmth. Tintoretto's loose, expressive brushwork captures both likeness and personality.</p>
<p>The Venetian master created several self-portraits throughout his career. This example shows his <strong>confident technique</strong> and psychological insight. The painting hangs at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This self-portrait hangs at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>, which has notable <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and Baroque holdings." },
      { question: "Who was Tintoretto?", answer: "<a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> was a major Venetian Renaissance painter known for dramatic compositions and bold, expressive <strong>brushwork</strong>." },
      { question: "Why are artist self-portraits significant?", answer: "<strong>Self-portraits</strong> reveal how artists saw themselves and showcase their technical abilities, serving as both personal documents and demonstrations of skill." }
    ]
  },
  {
    slug: 'winslow-homer-snap-the-whip',
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> captured American childhood in this iconic image of boys playing the game Snap the Whip. The <strong>barefoot children</strong> race across a meadow outside their rural schoolhouse, hands linked in a line about to break. Homer painted this shortly after the Civil War, celebrating national innocence.</p>
<p>The painting embodies optimism about America's future through its <strong>energetic youth</strong>. Homer's clear light and precise draftsmanship give the scene documentary clarity. Displayed at the <a href="/apps/masterpieces/museum/butler-institute"><strong>Butler Institute of American Art</strong></a> in Youngstown, Ohio.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/butler-institute\"><strong>Butler Institute of American Art</strong></a> in Youngstown, Ohio. Another version is at the <strong>Metropolitan Museum</strong>." },
      { question: "Who was Winslow Homer?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a> was one of America's greatest painters, known for scenes of <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>rural and maritime life</strong></a>." },
      { question: "What is the game Snap the Whip?", answer: "<strong>Snap the Whip</strong> is a children's game where players hold hands in a line and run until the end person is \"snapped\" off by momentum." }
    ]
  },
  {
    slug: 'piet-mondrian-mill-of-heeswijk-sun',
    description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this Dutch windmill bathed in sunlight during his early representational period. The <strong>traditional mill</strong> stands against an atmospheric sky, far removed from his later geometric abstractions. Mondrian evolved from such landscapes to become a pioneer of pure abstraction.</p>
<p>This work shows Mondrian's early interest in <strong>light and atmosphere</strong> influenced by Dutch landscape tradition and Impressionism. The painting hangs at the <a href="/apps/masterpieces/museum/noordbrabants-museum"><strong>Noordbrabants Museum</strong></a> in 's-Hertogenbosch, Netherlands.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/noordbrabants-museum\"><strong>Noordbrabants Museum</strong></a> in 's-Hertogenbosch, Netherlands, near Mondrian's birthplace." },
      { question: "Who was Piet Mondrian?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Piet Mondrian</strong></a> evolved from traditional landscapes to become a pioneer of <strong>geometric abstraction</strong> and the De Stijl movement." },
      { question: "Why is this painting significant?", answer: "This early work shows <strong>Mondrian before abstraction</strong>, demonstrating how his style evolved from traditional Dutch landscapes to pure geometry." }
    ]
  },
  {
    slug: 'albert-joseph-moore-reclining-model',
    description: `<p><a href="/apps/masterpieces/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this idealized figure in a reclining pose, draped in flowing classical fabric. The <strong>decorative arrangement</strong> of form and color typifies his aesthetic approach, prioritizing beauty and harmony over narrative content. Moore was a leading figure in the Aesthetic Movement.</p>
<p>His paintings of languid women in classical dress influenced Whistler and other aesthetes. The <strong>carefully orchestrated colors</strong> and graceful pose create pure visual pleasure. Displayed at the <a href="/apps/masterpieces/museum/clark-art-institute"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "Reclining Model hangs at the <a href=\"/apps/masterpieces/museum/clark-art-institute\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts, known for its <strong>Impressionist and academic paintings</strong>." },
      { question: "Who was Albert Joseph Moore?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a> was a Victorian painter associated with the <strong>Aesthetic Movement</strong>, painting decorative figure compositions." },
      { question: "What was the Aesthetic Movement?", answer: "The <strong>Aesthetic Movement</strong> championed \"art for art's sake,\" valuing beauty and decoration over moral or narrative content in painting." }
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
