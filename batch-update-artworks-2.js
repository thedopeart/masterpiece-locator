const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'pietro-da-cortona-the-alliance-of-jacob-and-laban',
    description: `<p><a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted this Old Testament scene showing the covenant between Jacob and Laban. The <strong>dramatic composition</strong> depicts the biblical figures sealing their agreement with characteristic Baroque energy. Cortona's figures gesture expressively against a dynamic landscape.</p>
<p>As a leading painter of the Roman <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a>, Cortona brought theatrical grandeur to biblical narratives. His <strong>flowing brushwork</strong> and rich coloring create a sense of movement and divine purpose. This painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, which holds an important collection of Italian <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> paintings." },
      { question: "Who was Pietro da Cortona?", answer: "<a href=\"/apps/masterpieces/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> was a leading Italian Baroque painter and architect, famous for his grand ceiling frescoes in Roman palaces and churches." },
      { question: "What biblical story is depicted?", answer: "The painting shows <strong>Jacob and Laban</strong> making a covenant, a story from Genesis where they agree to peaceful boundaries after years of conflict." }
    ]
  },
  {
    slug: 'fernand-khnopff-i-lock-my-door-upon-myself',
    description: `<p><a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Fernand Khnopff</strong></a> created this enigmatic <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> work in 1891, taking its title from a Christina Rossetti poem. A <strong>mysterious woman</strong> gazes out from a dreamlike interior, surrounded by symbolic objects including lilies and a bust of Hypnos, god of sleep.</p>
<p>Khnopff was Belgium's leading Symbolist painter, creating works of profound psychological mystery. The painting's <strong>muted palette</strong> and strange stillness evoke introspection and withdrawal from the world. Displayed at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "I Lock My Door Upon Myself hangs at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich as part of the Bavarian State Painting Collections." },
      { question: "Who was Fernand Khnopff?", answer: "<a href=\"/apps/masterpieces/artist/fernand-khnopff\"><strong>Fernand Khnopff</strong></a> was Belgium's leading <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter, known for mysterious, dreamlike imagery." },
      { question: "What does the title mean?", answer: "The title comes from a <strong>Christina Rossetti poem</strong> about withdrawal and introspection, reflecting the painting's themes of solitude and inner life." }
    ]
  },
  {
    slug: 'filippo-lippi-triptych',
    description: `<p><a href="/apps/masterpieces/artist/filippo-lippi"><strong>Filippo Lippi</strong></a> created this <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> triptych with three connected panels presenting religious imagery. The <strong>delicate figures</strong> display Lippi's characteristic grace and gentle expressions. Gold backgrounds and careful detail reflect 15th-century Florentine devotional art traditions.</p>
<p>Lippi was a Carmelite friar whose religious paintings combined spiritual content with naturalistic observation. His <strong>soft modeling</strong> and tender characterization influenced his pupil Botticelli. This triptych is housed at the <a href="/apps/masterpieces/museum/accademia-albertina"><strong>Accademia Albertina</strong></a> in Turin.</p>`,
    faqs: [
      { question: "Where is this triptych displayed?", answer: "This work is held at the <a href=\"/apps/masterpieces/museum/accademia-albertina\"><strong>Accademia Albertina</strong></a> in Turin, Italy, an art academy with an important historical collection." },
      { question: "Who was Filippo Lippi?", answer: "<a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Filippo Lippi</strong></a> was a Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter and Carmelite friar known for graceful religious paintings." },
      { question: "What is a triptych?", answer: "A <strong>triptych</strong> is an artwork in three panels, often hinged so the side panels can fold over the center, common in Renaissance religious art." }
    ]
  },
  {
    slug: 'giotto-st-francis-renounces-all-worldly-goods',
    description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> depicted the moment Saint Francis stripped off his wealthy father's clothes to embrace poverty. The <strong>dramatic scene</strong> shows Francis standing naked while his father reaches angrily toward him and a bishop covers the young saint. Onlookers react with varied emotions.</p>
<p>This fresco is part of Giotto's famous cycle illustrating Francis's life. The <strong>expressive gestures</strong> and spatial depth marked a revolution in Italian painting. Located in the <a href="/apps/masterpieces/museum/basilica-of-st-francis-assisi"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      { question: "Where can I see this fresco?", answer: "This fresco is in the Upper Church of the <a href=\"/apps/masterpieces/museum/basilica-of-st-francis-assisi\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy, part of a famous <strong>28-scene cycle</strong>." },
      { question: "Who was Giotto?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto di Bondone</strong></a> was a revolutionary medieval painter who introduced naturalism and emotion, often called the <strong>father of Renaissance art</strong>." },
      { question: "What does this scene depict?", answer: "The scene shows <strong>Saint Francis</strong> renouncing his inheritance by stripping naked before his father, choosing poverty to follow Christ." }
    ]
  },
  {
    slug: 'edouard-manet-street-singer',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this full-length portrait of a woman emerging from a cafe doorway around 1862. She holds a guitar and lifts cherries to her mouth in a <strong>casual, unposed moment</strong>. The life-size scale and direct gaze challenged academic conventions of the period.</p>
<p>Manet often depicted modern Parisian life with unflinching realism. The <strong>bold brushwork</strong> and neutral background focus attention on the figure herself rather than narrative context. This painting hangs at the <a href="/apps/masterpieces/museum/mfa-boston"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "Street Singer hangs at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts</strong></a> in Boston, which has a strong collection of <strong>French 19th-century painting</strong>." },
      { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Édouard Manet</strong></a> created this around 1862. He was a key figure in the transition from <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> to Impressionism." },
      { question: "Who was the model?", answer: "Manet's model was <strong>Victorine Meurent</strong>, who also posed for Olympia and other famous works. She later became a painter herself." }
    ]
  },
  {
    slug: 'ford-madox-brown-the-last-of-england',
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this powerful image of emigrants leaving Britain in 1855. A young couple huddles together on a ship's deck, the <strong>white cliffs of Dover</strong> fading behind them. Their expressions convey the mixture of determination and sorrow faced by those leaving home forever.</p>
<p>Brown used himself and his wife as models, adding autobiographical intensity to the scene. The <strong>circular composition</strong> and meticulous detail show Pre-Raphaelite influence. Displayed at <a href="/apps/masterpieces/museum/birmingham-museum"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The Last of England hangs at <a href=\"/apps/masterpieces/museum/birmingham-museum\"><strong>Birmingham Museum and Art Gallery</strong></a>, which has an outstanding collection of <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite</strong></a> art." },
      { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> created this in 1855. He was closely associated with the Pre-Raphaelite Brotherhood though never a formal member." },
      { question: "What is the subject?", answer: "The painting shows <strong>emigrants</strong> departing England, a common experience in Victorian Britain when millions left seeking better lives abroad." }
    ]
  },
  {
    slug: 'fra-angelico-st-mark',
    description: `<p><a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> depicted the Evangelist Saint Mark in this devotional panel from the early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. The saint holds a book representing his Gospel, rendered with the artist's characteristic <strong>luminous colors</strong> and gentle expression. Gold background elements reflect medieval tradition while the figure shows naturalistic modeling.</p>
<p>Fra Angelico was a Dominican friar who painted exclusively religious subjects with profound spiritual conviction. His <strong>delicate technique</strong> and serene compositions earned him the nickname "Angelic Brother." This panel is at the <a href="/apps/masterpieces/museum/musee-conde"><strong>Musée Condé</strong></a> in Chantilly, France.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This panel hangs at the <a href=\"/apps/masterpieces/museum/musee-conde\"><strong>Musée Condé</strong></a> in Chantilly, France, housed in the beautiful Château de Chantilly." },
      { question: "Who was Fra Angelico?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> was a Dominican friar and early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter, beatified by the Catholic Church in 1982." },
      { question: "Who was Saint Mark?", answer: "<strong>Saint Mark</strong> wrote the second Gospel and is traditionally shown with a lion. He is the patron saint of Venice." }
    ]
  },
  {
    slug: 'francesco-guardi-the-lagoon-from-the-fondamenta-nuove',
    description: `<p><a href="/apps/masterpieces/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> captured this view of Venice's lagoon from the Fondamenta Nuove, the northern waterfront. <strong>Atmospheric light</strong> plays over the water as boats drift across the expanse toward distant islands. Guardi's loose brushwork creates shimmering effects on the lagoon surface.</p>
<p>Unlike his rival Canaletto's precise views, Guardi emphasized mood and atmosphere. His <strong>flickering brushstrokes</strong> suggest light and movement rather than architectural detail. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work remains in a <strong>private collection</strong>. Other Guardi lagoon views can be seen at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> London and the Louvre." },
      { question: "Who was Francesco Guardi?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> was a Venetian painter known for atmospheric <strong>vedute</strong> (view paintings) of Venice and its lagoon." },
      { question: "What is the Fondamenta Nuove?", answer: "The <strong>Fondamenta Nuove</strong> is a waterfront promenade on Venice's northern edge, offering views across the lagoon to the cemetery island and Murano." }
    ]
  },
  {
    slug: 'francesco-guardi-the-molo-and-the-riva-degli-schiavoni-from-the-bac',
    description: `<p><a href="/apps/masterpieces/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> painted this sweeping view of Venice's waterfront from the Bacino di San Marco. The <strong>famous Molo</strong> stretches along the shore with the Doge's Palace visible, while gondolas and boats animate the water. Guardi's characteristic atmospheric haze softens the distant architecture.</p>
<p>This composition shows one of Venice's most celebrated vistas. Guardi's <strong>loose, spirited brushwork</strong> captures the city's magical light better than more precise topographical views. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This view remains in a <strong>private collection</strong>. Similar Guardi Venetian scenes hang at major museums including the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "Who painted this?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>Venetian view</strong></a> in his distinctive atmospheric style." },
      { question: "What is the Molo?", answer: "The <strong>Molo</strong> is Venice's main waterfront promenade near St. Mark's Square, a landing point for boats arriving at the city's heart." }
    ]
  },
  {
    slug: 'francis-picabia-the-eure-in-the-twilight-sun',
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this landscape showing the Eure River bathed in twilight glow. Created during his early <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> phase, the work captures <strong>fading light</strong> reflecting on water with soft, atmospheric color. Before his radical Dada experiments, Picabia worked in this lyrical vein.</p>
<p>The Eure River flows through Normandy, a region beloved by many French landscape painters. Picabia's <strong>sensitive handling of light</strong> shows his early mastery before he abandoned such traditional subjects. This painting is in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work remains in a <strong>private collection</strong>. Picabia's early Impressionist landscapes occasionally appear at auction and in retrospective exhibitions." },
      { question: "Who was Francis Picabia?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> was a French artist who worked in many styles, from <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> to Dada and Surrealism." },
      { question: "What is the Eure?", answer: "The <strong>Eure River</strong> flows through Normandy in northern France, passing through landscapes that attracted many painters." }
    ]
  },
  {
    slug: 'francis-picabia-moret-route-of-pres',
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this view near Moret-sur-Loing during his early <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> period. The <strong>rural road</strong> winds through countryside with dappled light filtering through trees. This lyrical landscape predates Picabia's later radical experiments with Dada and abstraction.</p>
<p>Moret-sur-Loing was also painted by Alfred Sisley, who lived there for years. Picabia's <strong>soft brushwork</strong> and atmospheric effects show his early debt to Impressionist masters. The work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This landscape is held in a <strong>private collection</strong>. Picabia's early works are less known than his later <a href=\"/apps/masterpieces/movement/dada\"><strong>Dada</strong></a> pieces." },
      { question: "Who painted this?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this during his Impressionist phase before becoming a major Dada and Surrealist figure." },
      { question: "Where is Moret-sur-Loing?", answer: "<strong>Moret-sur-Loing</strong> is a medieval town southeast of Paris. Alfred Sisley painted it extensively, and Picabia also visited the area." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-the-smoker',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted a peasant enjoying his pipe in this intimate Dutch Golden Age scene. The figure sits contentedly, smoke curling from his <strong>clay pipe</strong> as warm light illuminates his weathered features. Van Ostade specialized in such quiet moments of rural life.</p>
<p>Smoking was a popular subject in Dutch genre painting, sometimes with moral overtones about earthly pleasures. Van Ostade treats his subject with <strong>sympathetic warmth</strong> rather than mockery. This painting hangs at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The Smoker hangs at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio, which has a fine collection of <strong>Dutch Golden Age paintings</strong>." },
      { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch painter who specialized in scenes of <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>peasant life</strong></a> and tavern interiors." },
      { question: "Why did Dutch artists paint smokers?", answer: "<strong>Smoking scenes</strong> were popular genre subjects, sometimes symbolizing life's fleeting pleasures as pipe smoke vanishes into air." }
    ]
  },
  {
    slug: 'francisco-de-zurbaran-st-pierre-pascal-bishop-of-jaen',
    description: `<p><a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a> portrayed Saint Pierre Pascal, a medieval Bishop of Jaén, in this powerful devotional work. The saint wears <strong>episcopal vestments</strong> rendered with Zurbarán's famous mastery of white fabric and texture. His solemn expression conveys spiritual gravity appropriate to his martyrdom.</p>
<p>Zurbarán painted numerous saints for Spanish monastic patrons. His <strong>dramatic lighting</strong> and sculptural forms give the figure commanding presence against the dark background. This painting is at the <a href="/apps/masterpieces/museum/museo-bellas-artes-seville"><strong>Museum of Fine Arts</strong></a> in Seville.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/museo-bellas-artes-seville\"><strong>Museum of Fine Arts</strong></a> in Seville, which has an exceptional collection of <strong>Spanish Baroque painting</strong>." },
      { question: "Who was Zurbarán?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Francisco de Zurbarán</strong></a> was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter known for austere religious works, called the \"painter of monks.\"" },
      { question: "Who was Saint Pierre Pascal?", answer: "<strong>Saint Pierre Pascal</strong> was a 13th-century Bishop of Jaén who was martyred by the Moors. He is venerated in Spain." }
    ]
  },
  {
    slug: 'francisco-goya-the-sacrifice-to-vesta',
    description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted this classical scene showing a sacrifice to Vesta, Roman goddess of hearth and home. <strong>Vestal virgins</strong> tend the sacred flame in this early work that demonstrates Goya's academic training before he developed his darker, more personal style.</p>
<p>Goya produced mythological subjects early in his career for aristocratic patrons. The <strong>warm tones</strong> and graceful composition reflect 18th-century Neoclassical taste. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is held in a <strong>private collection</strong>. Goya's mythological paintings occasionally appear at auction and in major retrospectives." },
      { question: "Who was Goya?", answer: "<a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Francisco Goya</strong></a> was Spain's greatest painter, evolving from <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> elegance to dark, powerful late works." },
      { question: "Who was Vesta?", answer: "<strong>Vesta</strong> was the Roman goddess of the hearth. Her temple in Rome housed an eternal flame tended by Vestal Virgins." }
    ]
  },
  {
    slug: 'frans-hals-the-rommel-pot-player',
    description: `<p><a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> captured a musician playing the rommel pot, a simple friction drum used in Dutch Shrovetide celebrations. The player grins directly at us while <strong>children crowd around</strong> in excitement. Hals's rapid brushwork conveys spontaneous joy and movement.</p>
<p>The rommel pot was associated with carnival festivities and begging traditions. Hals painted several versions of this subject with <strong>lively immediacy</strong>. This version hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. Another version is at the <strong>Kimbell Art Museum</strong> in Fort Worth." },
      { question: "Who was Frans Hals?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> was a Dutch Golden Age master known for <strong>lively portraits</strong> and genre scenes painted with remarkable bravura brushwork." },
      { question: "What is a rommel pot?", answer: "A <strong>rommel pot</strong> is a simple friction drum made from a pot covered with a bladder. Players used it during Dutch Shrovetide festivities." }
    ]
  },
  {
    slug: 'franz-marc-the-dead-sparrow',
    description: `<p><a href="/apps/masterpieces/artist/franz-marc"><strong>Franz Marc</strong></a> painted this poignant image of a dead sparrow, treating the small bird with the same spiritual significance he gave to larger animals. The <strong>expressionist colors</strong> transform the simple subject into a meditation on life and death. Marc believed animals possessed a purity that humans had lost.</p>
<p>Marc was a founder of the Blue Rider group and developed a symbolic color theory. His <strong>bold palette</strong> and emotional intensity mark this as a mature <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> work. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. Major Franz Marc paintings can be seen at the <a href=\"/apps/masterpieces/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich." },
      { question: "Who was Franz Marc?", answer: "<a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a> was a German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> painter who co-founded the Blue Rider group and died in World War I." },
      { question: "Why did Marc paint animals?", answer: "Marc believed <strong>animals possessed spiritual purity</strong> that humans had lost, making them ideal subjects for expressing deeper truths." }
    ]
  },
  {
    slug: 'franz-von-stuck-innocence',
    description: `<p><a href="/apps/masterpieces/artist/franz-von-stuck"><strong>Franz von Stuck</strong></a> painted this allegorical figure representing innocence in his characteristic <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> style. The <strong>idealized female form</strong> embodies purity and virtue, rendered with Stuck's polished academic technique. His paintings often explored contrasts between innocence and sensuality.</p>
<p>Stuck was a leading Munich Symbolist who combined academic skill with mysterious, often erotic themes. His <strong>smooth surfaces</strong> and dramatic lighting create an almost supernatural atmosphere. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. The <a href=\"/apps/masterpieces/museum/villa-stuck\"><strong>Villa Stuck</strong></a> museum in Munich displays many of the artist's major works." },
      { question: "Who was Franz von Stuck?", answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> was a German <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter known for mythological and allegorical subjects with erotic undertones." },
      { question: "What style is this painting?", answer: "This is <strong>Symbolist</strong> art, a late 19th-century movement emphasizing allegory, dreams, and emotional rather than realistic content." }
    ]
  },
  {
    slug: 'franz-von-stuck-sensuality',
    description: `<p><a href="/apps/masterpieces/artist/franz-von-stuck"><strong>Franz von Stuck</strong></a> depicted the concept of sensuality as a seductive female figure in this <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> allegory. The <strong>powerful femme fatale</strong> embodies desire and temptation, themes Stuck explored throughout his career. His polished technique gives the figure an almost sculptural presence.</p>
<p>Stuck frequently painted the duality of innocence and sensuality, virtue and sin. His <strong>dramatic lighting</strong> and dark backgrounds heighten the psychological intensity. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is held in a <strong>private collection</strong>. Stuck's major paintings can be seen at the <a href=\"/apps/masterpieces/museum/villa-stuck\"><strong>Villa Stuck</strong></a> in Munich." },
      { question: "Who painted this?", answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> created this Symbolist allegory. He often explored themes of <strong>desire, sin, and temptation</strong>." },
      { question: "What is the femme fatale in art?", answer: "The <strong>femme fatale</strong> is a seductive, dangerous woman who appears frequently in Symbolist art, representing desire's destructive power." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-peasant-family',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted a humble Dutch family gathered in their modest home. Parents and children occupy a <strong>rustic interior</strong> lit by filtered daylight, engaged in daily activities. Van Ostade's warm palette and careful observation give dignity to his peasant subjects.</p>
<p>Unlike some contemporaries who mocked rural folk, Van Ostade treated peasants with <strong>sympathetic humanity</strong>. His detailed rendering of textures and light effects demonstrate Dutch Golden Age mastery. This painting hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, which has an outstanding collection of <strong>Dutch Golden Age art</strong>." },
      { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch painter who specialized in <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>peasant genre scenes</strong></a> with warmth and sympathy." },
      { question: "What is Dutch genre painting?", answer: "<strong>Genre painting</strong> depicts scenes of everyday life. Dutch artists of the 17th century excelled at showing domestic and tavern scenes." }
    ]
  },
  {
    slug: 'frederic-leighton-pavonia',
    description: `<p><a href="/apps/masterpieces/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted this elegant portrait named Pavonia, Latin for peacock. The model holds a <strong>peacock feather fan</strong> that gives the work its title, her graceful pose and exotic beauty exemplifying Victorian Aesthetic ideals. Leighton's polished technique renders fabric and skin with remarkable refinement.</p>
<p>As President of the Royal Academy, Leighton was Victorian Britain's most prestigious artist. His paintings of <strong>beautiful women</strong> combined classical ideals with contemporary fashion. This portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "Pavonia remains in a <strong>private collection</strong>. Leighton's major works can be seen at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> and Leighton House Museum in London." },
      { question: "Who was Frederic Leighton?", answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a> was a leading Victorian painter and President of the Royal Academy, known for <strong>classical and aesthetic subjects</strong>." },
      { question: "What does Pavonia mean?", answer: "<strong>Pavonia</strong> is Latin for \"of the peacock.\" The title refers to the peacock feather fan the model holds in this elegant portrait." }
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
