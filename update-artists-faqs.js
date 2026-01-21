const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  {
    slug: 'palma-vecchio',
    faqs: [
      {
        question: "What art movement was Palma Vecchio part of?",
        answer: "Palma was a leading painter of the <a href=\"/apps/masterpieces/movement/venetian-school\"><strong>Venetian Renaissance</strong></a>, working in Venice during the early 1500s. He absorbed influences from Giovanni Bellini, the mysterious Giorgione, and especially Titian, developing a style known for warm coloring and idealized beauty."
      },
      {
        question: "Where can I see Palma Vecchio's paintings?",
        answer: "Works hang at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, the Gemäldegalerie Alte Meister in Dresden, and the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. Several altarpieces remain in Venetian churches, including his famous Santa Barbara."
      },
      {
        question: "What connection did Palma have to Titian?",
        answer: "<strong>Titian</strong> completed Palma's unfinished Pietà after his death in 1528, a rare gesture of respect between rivals. Legend claims Palma's model Violante was Titian's beloved, inspiring the <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>blonde beauties</strong></a> both artists painted throughout their careers."
      },
      {
        question: "Why is he called 'Palma Vecchio'?",
        answer: "His nickname <strong>'Vecchio' (the Elder)</strong> distinguishes him from his great-nephew Palma il Giovane (the Younger), who became a successful Venetian painter later in the century. Without this distinction, art historians would constantly confuse the two artists working in similar styles."
      },
      {
        question: "What subjects did Palma Vecchio paint?",
        answer: "He painted pastoral mythologies, <strong>idealized female beauties</strong> (blonde Venetian women became his signature), and religious scenes in the sacra conversazione format. His horizontal landscape compositions featuring reclining nudes influenced how later Venetian painters approached similar <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>subjects</strong></a>."
      }
    ]
  },
  {
    slug: 'worthington-whittredge',
    faqs: [
      {
        question: "What art movement was Worthington Whittredge part of?",
        answer: "Whittredge was a second-generation member of the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, though his decade studying in Düsseldorf and Rome made him unusually receptive to European influences. His intimate <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> show softer, more atmospheric qualities than earlier American painters."
      },
      {
        question: "Where can I see Worthington Whittredge paintings?",
        answer: "Works hang at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a>, and the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington. The Cincinnati Art Museum holds important early works from his Ohio years."
      },
      {
        question: "Did Whittredge travel west?",
        answer: "Yes, in 1865 he journeyed to the <strong>Rocky Mountains</strong> with fellow artists Sanford Gifford and John Kensett. Unlike most Hudson River painters who dramatized Western scenery, Whittredge produced unusually spare, horizontal compositions of the Great Plains that emphasized vastness over spectacle."
      },
      {
        question: "What is Whittredge's connection to Washington Crossing the Delaware?",
        answer: "While studying in Düsseldorf, Whittredge posed for Emanuel Leutze's famous 1851 painting. He served as model for both <strong>George Washington</strong> standing heroically and for a steersman in the boat. The experience connected him to America's most reproduced historical painting."
      },
      {
        question: "What are Whittredge's most characteristic paintings?",
        answer: "His signature works are <strong>forest interior scenes</strong> with depths of feathery ferns, mossy rocks, and leaf-filtered light. These intimate views of American woodland, particularly the Catskills and New England, capture a quiet poetry that distinguished him from the more dramatic <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> painters of his era."
      }
    ]
  },
  {
    slug: 'bruno-liljefors',
    faqs: [
      {
        question: "What was Bruno Liljefors known for painting?",
        answer: "Liljefors specialized in <strong>wildlife art</strong>, particularly dramatic predator-prey scenes showing foxes, hawks, and other <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>birds</strong></a> in action. He revolutionized the genre by painting animals naturally within their environments rather than as isolated specimens, making him Sweden's most celebrated nature painter."
      },
      {
        question: "Where can I see Bruno Liljefors's paintings?",
        answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/national-museum-stockholm\"><strong>National Museum</strong></a> in Stockholm, the Thiel Gallery, and the <strong>National Museum of Wildlife Art</strong> in Jackson, Wyoming. The Gothenburg Museum of Art and several private Swedish collections also hold significant works."
      },
      {
        question: "What made Bruno Liljefors's wildlife paintings different?",
        answer: "He <strong>painted animals in motion within their natural habitats</strong>, unlike formal Victorian wildlife art that showed creatures as stuffed trophies. His technique blended <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> brushwork with careful scientific observation, capturing how predators actually move through grass, snow, and forest."
      },
      {
        question: "Was Bruno Liljefors influenced by Japanese art?",
        answer: "Yes, <strong>Japanese prints</strong> influenced his treatment of nature, particularly visible in works like <em>Goldfinches</em> where birds integrate naturally with their backgrounds. The asymmetrical compositions and flattened perspectives of ukiyo-e prints helped him escape Western conventions of wildlife portraiture."
      },
      {
        question: "Did Bruno Liljefors hunt?",
        answer: "Yes, he was a <strong>lifelong hunter</strong> whose intimate field knowledge of predator-prey dynamics shaped his art. He also kept live animals as models, including a tame fox and various birds, studying their movements for hours before painting their <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural behaviors</strong></a>."
      }
    ]
  },
  {
    slug: 'tintoretto',
    faqs: [
      {
        question: "What art movement was Tintoretto part of?",
        answer: "Tintoretto was a leading figure of the late <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Venetian Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>. His dynamic compositions, dramatic lighting, and bold brushwork pushed beyond High Renaissance balance, directly anticipating the emotional intensity of the coming Baroque era."
      },
      {
        question: "Where can I see Tintoretto's paintings?",
        answer: "The largest collection is at the <a href=\"/apps/masterpieces/museum/scuola-grande-di-san-rocco-venice\"><strong>Scuola Grande di San Rocco</strong></a> in Venice, where he spent 23 years decorating the building with over fifty monumental paintings. The <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> and the Doge's Palace also hold major works."
      },
      {
        question: "What is Tintoretto's most famous painting?",
        answer: "His <strong>Miracle of Saint Mark Rescuing a Slave</strong> (1548) established his reputation overnight with its unprecedented dramatic energy and innovative composition. The saint plunges from the sky while instruments of torture shatter, creating a <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious scene</strong></a> of explosive power."
      },
      {
        question: "Why was Tintoretto called 'il Furioso'?",
        answer: "Contemporaries nicknamed him <strong>'il Furioso' (the Furious)</strong> for his phenomenal painting speed and the unprecedented boldness of his energetic brushwork. While rivals labored for months, Tintoretto could complete enormous canvases in weeks, working with an intensity that astonished Venice."
      },
      {
        question: "What techniques is Tintoretto known for?",
        answer: "Tintoretto used dramatic <strong>chiaroscuro</strong>, radical foreshortening, and made small wax models that he suspended and lit with candles to study dramatic lighting effects. His technique of sketching directly onto canvas with minimal underdrawing allowed his famous speed."
      },
      {
        question: "Did Tintoretto have famous students or children who painted?",
        answer: "His children <strong>Domenico and Marietta Tintoretto</strong> both became accomplished painters working in his workshop. Marietta was particularly gifted, receiving invitations from the Spanish and Austrian courts, but died young at thirty in 1590. Domenico continued the family tradition until 1635."
      }
    ]
  },
  {
    slug: 'ferdinand-georg-waldmuller',
    faqs: [
      {
        question: "What art movement was Ferdinand Georg Waldmüller part of?",
        answer: "Waldmüller was the leading painter of the Austrian <strong>Biedermeier period</strong> within the broader <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> movement. His insistence on painting directly from nature rather than following academic formulas anticipated later Realism and even aspects of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>."
      },
      {
        question: "Where can I see Waldmüller's paintings?",
        answer: "The <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere</strong></a> in Vienna holds the largest collection, displaying his famous scenes of Austrian peasant life. Additional paintings hang at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington and the Neue Pinakothek in Munich."
      },
      {
        question: "What subjects did Waldmüller paint?",
        answer: "He painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> of the Salzkammergut region, genre scenes of rural Austrian life, and portraits including one of Beethoven. His images of peasant children, harvest scenes, and Alpine views became icons of Austrian national identity."
      },
      {
        question: "Why was Waldmüller controversial?",
        answer: "As a professor at the Vienna Academy, he advocated for <strong>painting directly from nature</strong> rather than following academic ideals of copying Old Masters. His writings attacking traditional teaching methods led to his forced retirement in 1857, though history vindicated his approach."
      },
      {
        question: "What was Waldmüller's painting technique?",
        answer: "He developed a distinctive approach using <strong>naturalistic outdoor lighting</strong> with fine, precise brushwork. His detailed representation of sunlight effects on <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> and figures was decades ahead of his time, influencing the later Vienna Secession movement."
      }
    ]
  },
  {
    slug: 'jean-antoine-watteau',
    faqs: [
      {
        question: "What art movement was Jean-Antoine Watteau part of?",
        answer: "Watteau was a founding figure of the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> movement, transforming French painting from Baroque grandeur to intimate elegance. He invented the fête galante genre, depicting aristocratic outdoor gatherings that became central to 18th-century taste throughout Europe."
      },
      {
        question: "Where can I see Watteau's paintings?",
        answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg. Berlin's Charlottenburg Palace holds the important Shop Sign of Gersaint."
      },
      {
        question: "What is a fête galante?",
        answer: "A fête galante depicts aristocratic figures in parkland settings engaged in leisurely pursuits: music, conversation, flirtation. Watteau invented this genre, and the <strong>Académie royale</strong> created the category specifically for his reception piece, acknowledging his work fit no existing classification."
      },
      {
        question: "What are Watteau's most famous paintings?",
        answer: "<strong>The Pilgrimage to the Island of Cythera</strong> (1717) and <strong>Pierrot</strong> (Gilles) are his most celebrated works, both now in the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>. The Cythera painting shows lovers departing or arriving at Venus's island, its ambiguity part of its enduring fascination."
      },
      {
        question: "Who influenced Watteau's artistic style?",
        answer: "Watteau studied under Claude Gillot, absorbing theatrical sensibility from commedia dell'arte subjects. He deeply admired Flemish painters, especially <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a>, whose <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> brushwork and sensuality shaped his own luminous palette and treatment of fabrics."
      },
      {
        question: "When did Watteau live and work?",
        answer: "Watteau lived from 1684 to 1721, working primarily in Paris during the Regency period following Louis XIV's death. He died of <strong>tuberculosis</strong> at just 36, yet his brief career profoundly influenced 18th-century French art, inspiring Boucher, Fragonard, and generations of decorative painters."
      }
    ]
  },
  {
    slug: 'fernand-khnopff',
    faqs: [
      {
        question: "What art movement was Fernand Khnopff part of?",
        answer: "Khnopff was a leading figure in <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, the movement that rejected realism to express psychological states through dreamlike imagery. He co-founded Les XX, the progressive Brussels artists' group that exhibited avant-garde work from across Europe."
      },
      {
        question: "What are Fernand Khnopff's most famous paintings?",
        answer: "\"<strong>I Lock My Door Upon Myself</strong>\" (1891) and \"<strong>The Caress</strong>\" (1896) are his most celebrated works, both featuring his characteristic mysterious atmosphere. The first shows a woman in trance-like isolation, while the second depicts a cheetah-headed creature embracing a <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>beautiful youth</strong></a>."
      },
      {
        question: "Who influenced Fernand Khnopff?",
        answer: "Gustave Moreau and <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> painter <strong>Edward Burne-Jones</strong> profoundly shaped his style after he encountered their work at the 1878 Paris Exposition. The English painter's elongated figures and medieval dreamscapes particularly resonated with Khnopff's sensibility."
      },
      {
        question: "Who was the model in Khnopff's paintings?",
        answer: "His sister <strong>Marguerite Khnopff</strong> served as his primary model throughout his career. Her androgynous features appear throughout his work in mysterious, often disturbing contexts. The siblings' close relationship fueled speculation about obsession that adds to his paintings' unsettling quality."
      },
      {
        question: "Did Khnopff influence other artists?",
        answer: "Yes, his work directly influenced the <strong>Vienna Secession</strong>, particularly <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> who admired his ethereal women. His psychological imagery also anticipated <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, making him a bridge between 19th-century Symbolism and 20th-century dream exploration."
      }
    ]
  },
  {
    slug: 'hendrick-avercamp',
    faqs: [
      {
        question: "What art movement was Hendrick Avercamp part of?",
        answer: "Avercamp was an early <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter, the first in the Northern Netherlands to specialize exclusively in winter landscapes. He established conventions for depicting frozen canals and skating crowds that Dutch artists followed for generations."
      },
      {
        question: "Where can I see Hendrick Avercamp's paintings?",
        answer: "The bulk of his work is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> and <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in the Netherlands. The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London also holds major pieces, including his famous round winter scene."
      },
      {
        question: "Why was Hendrick Avercamp called 'de Stomme'?",
        answer: "He was <strong>deaf and mute from birth</strong>, leading the Dutch to nickname him \"de Stomme van Kampen\" (the Mute of Kampen). His mother's will poignantly called him \"mute and miserable,\" though his disability apparently didn't prevent a successful artistic career."
      },
      {
        question: "What subjects did Avercamp paint?",
        answer: "He exclusively painted <strong>Dutch winter scenes</strong> with frozen canals, ice skaters, sledges, and crowds from all social classes enjoying the cold. His panoramic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> teem with hundreds of figures engaged in winter activities from hockey to horse-drawn sleighs."
      },
      {
        question: "Why did Avercamp paint so many winter scenes?",
        answer: "He worked during the <strong>Little Ice Age</strong>, when Dutch winters were extremely severe and canals froze solid for months. The harshest winters (1600-1625) coincided exactly with his most productive years, giving him endless <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural subjects</strong></a> to observe outside his window."
      }
    ]
  },
  {
    slug: 'vasily-polenov',
    faqs: [
      {
        question: "What was Vasily Polenov known for painting?",
        answer: "Polenov was celebrated for <strong>luminous Russian landscapes</strong> that combined plein air freshness with compositional refinement. <em>Moscow Courtyard</em> (1878), showing a sunlit yard with children playing, became one of Russia's most beloved <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a>, capturing everyday life with warm intimacy."
      },
      {
        question: "Where can I see Vasily Polenov's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <strong>Polenovo Museum</strong>, his former estate on the Oka River that became Russia's first national art museum when he donated it in 1892."
      },
      {
        question: "What art movement was Vasily Polenov part of?",
        answer: "Polenov worked in the <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> tradition, following pioneers like Aleksey Savrasov. He was among the first Russian artists to paint consistently en plein air, bringing French techniques to Russian subjects while maintaining his country's literary and emotional traditions."
      },
      {
        question: "Who were Vasily Polenov's famous students?",
        answer: "He taught at the Moscow School of Painting, where his students included <strong>Isaac Levitan</strong> (Russia's greatest landscape painter) and <strong>Konstantin Korovin</strong>, who pioneered Russian Impressionism. His generous teaching influenced an entire generation of Russian <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature painters</strong></a>."
      },
      {
        question: "Why was Polenov called 'the Knight of Beauty'?",
        answer: "His contemporaries gave him this title because he <strong>embodied both European refinement and Russian artistic traditions</strong>. Polenov combined technical skill learned in Paris with poetic sensitivity to Russian subjects, and his cultured, idealistic personality matched his elevated aesthetic vision."
      }
    ]
  },
  {
    slug: 'felicien-rops',
    faqs: [
      {
        question: "What art movement was Félicien Rops part of?",
        answer: "Rops was a key figure in <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and the Decadent movement, exploring themes of sexuality, death, and social hypocrisy. He co-founded Les XX, the progressive Belgian artists' group, and his provocative imagery shocked Victorian sensibilities while earning praise from avant-garde writers."
      },
      {
        question: "What are Rops's most famous works?",
        answer: "\"<strong>Pornocrates</strong>\" (1878), showing a blindfolded woman led by a pig, and \"<strong>Satan Sowing Tares</strong>\" (1867) exemplify his provocative vision. These works combine eroticism, death symbolism, and biting social critique in images that remain controversial and <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>darkly compelling</strong></a>."
      },
      {
        question: "Where can I see Félicien Rops's work?",
        answer: "The <strong>Félicien Rops Museum</strong> in Namur, Belgium holds the largest collection of his prints and drawings. The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> and various collections of 19th-century graphic arts throughout Europe also display his work."
      },
      {
        question: "Who praised Rops's work?",
        answer: "<strong>Charles Baudelaire</strong> called him \"the only true artist I met in Belgium,\" extraordinary praise from France's greatest poet. Rops created the frontispiece for Baudelaire's banned poems \"Les Épaves\" (1866), cementing his reputation in Parisian literary circles."
      },
      {
        question: "What authors did Rops illustrate?",
        answer: "He illustrated works by <strong>Baudelaire, Verlaine, Mallarmé</strong>, and Voltaire, establishing himself as the leading illustrator of Symbolist and Decadent literature. His ability to visualize literary <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>dark themes</strong></a> made him the perfect collaborator for transgressive writers."
      }
    ]
  },
  {
    slug: 'godfried-schalcken',
    faqs: [
      {
        question: "What art movement was Godfried Schalcken part of?",
        answer: "Schalcken worked during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, painting in the highly polished fijnschilder (fine painter) style he learned from Gerard Dou in Leiden. This technique emphasized smooth surfaces, minute detail, and the rendering of reflected light on various materials."
      },
      {
        question: "What is Godfried Schalcken famous for?",
        answer: "Schalcken specialized in <strong>candlelit scenes</strong>, mastering the rendering of artificial light on faces, fabrics, and objects with unmatched skill. His night scenes created dramatic <a href=\"https://luxurywallart.com/collections/black-and-gold\" target=\"_blank\" rel=\"noopener\"><strong>golden contrasts</strong></a> and intimate atmospheres that distinguished him from other Dutch painters."
      },
      {
        question: "Where can I see Godfried Schalcken paintings?",
        answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the Gemäldegalerie Alte Meister in Dresden. His candlelit portraits and genre scenes appear in major collections throughout Europe."
      },
      {
        question: "How did Godfried Schalcken create his candlelight effects?",
        answer: "Schalcken placed his subjects and a candle in a <strong>dark room</strong>, observed them through a small hole, and painted by daylight what he saw through the aperture. This ingenious method created convincingly realistic artificial light effects that fooled viewers into believing they saw actual candlelight."
      },
      {
        question: "Did Godfried Schalcken work in England?",
        answer: "Yes, Schalcken sailed to England in 1692 seeking patronage from <strong>King William III and Queen Mary</strong>. He produced larger canvases there to compete with court painter Godfrey Kneller, including a famous portrait of William III reading by candlelight."
      }
    ]
  },
  {
    slug: 'claude-monet',
    faqs: [
      {
        question: "What art movement did Claude Monet found?",
        answer: "Monet was the leading founder of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, the movement that revolutionized painting by capturing light and atmosphere over precise detail. His 1872 painting <em>Impression, Sunrise</em> gave the movement its name when critic Louis Leroy used the term mockingly."
      },
      {
        question: "Where can I see Monet's Water Lilies?",
        answer: "The largest Water Lilies panels are at the <a href=\"/apps/masterpieces/museum/musee-de-lorangerie\"><strong>Musée de l'Orangerie</strong></a> in Paris, filling two oval rooms designed specifically for them. Other versions hang at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the Art Institute of Chicago, and major museums worldwide."
      },
      {
        question: "What is Monet's most famous painting?",
        answer: "<strong>Impression, Sunrise</strong> (1872) is historically significant for naming the movement, while his <strong>Water Lilies</strong> series remains his most beloved work among collectors and visitors. His <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flower paintings</strong></a>, haystacks, and cathedral series also rank among his masterpieces."
      },
      {
        question: "Where did Monet live and paint?",
        answer: "Monet lived at <strong>Giverny</strong> in Normandy from 1883 until his death in 1926. He designed the famous water garden with Japanese bridge that inspired over 250 late paintings, transforming a simple farmhouse into an artistic shrine now visited by half a million people yearly."
      },
      {
        question: "Did Monet have vision problems?",
        answer: "Monet developed <strong>cataracts</strong> starting in 1905, progressively affecting his color perception. By 1922, he could barely distinguish colors and labeled his paint tubes to work. Surgery in 1923 restored his vision, though the late <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> canvases show altered perception."
      },
      {
        question: "How many paintings did Monet create?",
        answer: "Monet produced over <strong>2,500 paintings</strong> during his 60-year career, an extraordinary output for someone who worked slowly and revised constantly. This includes more than 250 Water Lilies paintings in his final decades at Giverny, some measuring over 40 feet long."
      }
    ]
  },
  {
    slug: 'diego-velazquez',
    faqs: [
      {
        question: "What art movement was Velazquez part of?",
        answer: "Velázquez was a leading painter of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art, though his naturalistic observation and free brushwork transcended period conventions. His revolutionary technique influenced artists from Manet to Picasso, who called Las Meninas \"the theology of painting.\""
      },
      {
        question: "Where can I see Las Meninas?",
        answer: "Velázquez's masterpiece <strong>Las Meninas</strong> hangs at the <a href=\"/apps/masterpieces/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, which holds the majority of his surviving works. The museum dedicates an entire room to this single painting, acknowledging its status as Spain's greatest artwork."
      },
      {
        question: "Who was Velazquez's most important patron?",
        answer: "<strong>King Philip IV of Spain</strong> employed Velázquez as court painter for nearly 40 years, beginning in 1623. The king formed such attachment to his painter that he would allow no one else to paint his <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a>, and they maintained an unusual friendship across class boundaries."
      },
      {
        question: "Did Velazquez travel to Italy?",
        answer: "Velázquez made two transformative trips to Italy (1629-31 and 1649-51), studying masters like <strong>Titian</strong> and absorbing Italian technique. During the second trip, he painted his famous Portrait of Pope Innocent X, which the pope reportedly found \"too truthful.\""
      },
      {
        question: "Who was Juan de Pareja?",
        answer: "<strong>Juan de Pareja</strong> was Velázquez's enslaved assistant whom he trained as a painter and freed in 1650. The remarkable portrait Velázquez painted of him in Rome caused a sensation and now hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a>, purchased in 1971 for a then-record price."
      },
      {
        question: "What are Velazquez's most famous paintings?",
        answer: "<strong>Las Meninas</strong> (1656), <strong>The Surrender of Breda</strong> (1634-35), and <strong>Portrait of Pope Innocent X</strong> (1650) rank among his most celebrated works. Each demonstrates his masterful realism, psychological insight, and the loose brushwork that made him a painter's painter."
      }
    ]
  },
  {
    slug: 'george-caleb-bingham',
    faqs: [
      {
        question: "What art movement was George Caleb Bingham part of?",
        answer: "Bingham worked in the <a href=\"/apps/masterpieces/movement/luminism\"><strong>Luminist</strong></a> style characterized by careful attention to light effects and calm, glowing atmospheres. He's associated with American frontier art, documenting Western river life with the same reverence Eastern painters brought to Hudson River <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>."
      },
      {
        question: "What are Bingham's most famous paintings?",
        answer: "\"<strong>Fur Traders Descending the Missouri</strong>\" (1845) and the \"<strong>Jolly Flatboatmen</strong>\" series (1846-1878) are his most celebrated works depicting frontier life. These paintings established the visual iconography of the American West before photography documented it."
      },
      {
        question: "Where can I see George Caleb Bingham's paintings?",
        answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> owns \"Fur Traders Descending the Missouri.\" The <a href=\"/apps/masterpieces/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a> and the Nelson-Atkins Museum in Kansas City hold important collections of his Western scenes."
      },
      {
        question: "What subjects did Bingham paint?",
        answer: "He documented <strong>American frontier life</strong> along the Missouri River: boatmen, fur traders, political gatherings, and settlers moving West. His images of <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>working people</strong></a> on flatboats became definitive portrayals of antebellum Western expansion."
      },
      {
        question: "Did Bingham have other careers besides painting?",
        answer: "Yes, Bingham was deeply active in Missouri politics throughout his life. He served as <strong>Missouri State Treasurer</strong> in 1862 during the Civil War and was appointed Adjutant General in 1875. His political paintings depicting elections rivaled his river scenes in ambition."
      }
    ]
  },
  {
    slug: 'berthe-morisot',
    faqs: [
      {
        question: "What art movement was Morisot part of?",
        answer: "Morisot was a founding member of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and the first woman to join the group. She exhibited in seven of the eight Impressionist exhibitions from 1874 to 1886, missing only the 1879 show due to pregnancy."
      },
      {
        question: "What subjects did Morisot paint?",
        answer: "Morisot painted <strong>domestic scenes</strong>: <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> and children in interiors, gardens, and on terraces. Her intimate subjects offered perspectives her male colleagues couldn't access, since respectable women of her class couldn't frequent cafés or streets alone."
      },
      {
        question: "Where can I see The Cradle?",
        answer: "Morisot's masterpiece <strong>The Cradle</strong> (1872) hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It depicts her sister Edma watching over her infant daughter Blanche, capturing maternal intimacy with delicate brushwork and psychological depth."
      },
      {
        question: "What was Morisot's connection to Manet?",
        answer: "Morisot met <strong>Édouard Manet</strong> in 1868 while copying paintings at the Louvre, becoming his model for several works including <em>The Balcony</em>. She married his brother Eugène in 1874, joining two of France's most important artistic families."
      },
      {
        question: "Where can I see Morisot's paintings?",
        answer: "Major works are at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> and the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, which holds <em>Summer's Day</em>. The Art Institute of Chicago and National Gallery of Art in Washington also display important canvases."
      }
    ]
  },
  {
    slug: 'giovanni-di-paolo',
    faqs: [
      {
        question: "What art movement was Giovanni di Paolo part of?",
        answer: "Giovanni di Paolo belonged to the 15th-century Sienese School during the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, maintaining Gothic decorative traditions while his Florentine contemporaries pursued naturalism. His deliberately archaic style rejected the innovations of Masaccio and Brunelleschi."
      },
      {
        question: "Where can I see Giovanni di Paolo paintings?",
        answer: "Major works are held at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, and the Pinacoteca Nazionale in his native Siena. His Divine Comedy illustrations are scattered across European collections."
      },
      {
        question: "What subjects did Giovanni di Paolo paint?",
        answer: "He painted religious subjects including the lives of <strong>Saint Catherine of Siena</strong> and Saint John the Baptist with visionary intensity. He also illustrated Dante's Divine Comedy and created numerous <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a>-ground altarpieces featuring elongated saints in mystical spaces."
      },
      {
        question: "What is Giovanni di Paolo's artistic style?",
        answer: "His style features elongated figures, harsh <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a>, dreamlike spatial distortions, and intense mystical atmosphere. Art historian Bernard Berenson called him \"the El Greco of the quattrocento\" for his expressive distortions that anticipated Mannerism by a century."
      },
      {
        question: "When did Giovanni di Paolo live?",
        answer: "Giovanni di Paolo was born around 1403 in Siena and died there in 1482. His earliest dated work is from 1426, and he remained active throughout his nearly <strong>sixty-year career</strong>, never leaving his native city despite Siena's declining artistic importance."
      }
    ]
  },
  {
    slug: 'ilya-repin',
    faqs: [
      {
        question: "What art movement was Ilya Repin part of?",
        answer: "Repin was a leader of the <strong>Peredvizhniki</strong> (The Wanderers), Russian artists who rejected academic constraints to create socially conscious realistic paintings. This movement organized traveling exhibitions to bring art to ordinary people across Russia, democratizing culture beyond St. Petersburg and Moscow."
      },
      {
        question: "What are Ilya Repin's most famous paintings?",
        answer: "\"<strong>Barge Haulers on the Volga</strong>\" (1873), \"<strong>Ivan the Terrible and His Son Ivan</strong>\" (1885), and \"Reply of the Zaporozhian Cossacks\" are his most celebrated works. Each combines technical mastery with powerful emotional and social content that defined Russian Realism."
      },
      {
        question: "Where can I see Ilya Repin's paintings?",
        answer: "The <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg hold his major works. These two institutions together possess the definitive collection of 19th-century Russian painting."
      },
      {
        question: "What subjects did Repin paint?",
        answer: "He painted <strong>social commentary</strong> on Russian peasant life, dramatic historical scenes, and penetrating <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of notable Russians including Tolstoy, Mussorgsky, and Mendeleev. His range from intimate character studies to monumental canvases made him Russia's most versatile painter."
      },
      {
        question: "Did Repin know Leo Tolstoy?",
        answer: "Yes, Repin and <strong>Tolstoy</strong> maintained a long friendship spanning decades. Repin created multiple portraits of the writer, visiting him repeatedly at Yasnaya Polyana. Their correspondence reveals mutual admiration between Russia's greatest painter and its greatest novelist."
      }
    ]
  },
  {
    slug: 'paulus-potter',
    faqs: [
      {
        question: "What art movement was Paulus Potter part of?",
        answer: "Potter worked during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, pioneering animal painting as a dedicated genre worthy of monumental treatment. His scientific observation of cattle and horses elevated subjects previously considered minor to the status of history painting."
      },
      {
        question: "What is Paulus Potter's most famous painting?",
        answer: "<strong>The Young Bull</strong> (1647) at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> is a nearly life-sized portrait of a bull that rivaled Rembrandt's Night Watch in 19th-century fame. Napoleon tried to steal it for the Louvre, considering it among Europe's greatest paintings."
      },
      {
        question: "Where can I see Paulus Potter paintings?",
        answer: "Major works are at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, and the Alte Pinakothek in Munich. His <a href=\"https://luxurywallart.com/collections/cow-art\" target=\"_blank\" rel=\"noopener\"><strong>cattle paintings</strong></a> appear in major collections throughout Europe."
      },
      {
        question: "How long was Paulus Potter's career?",
        answer: "Potter painted for about <strong>ten years</strong> before dying of tuberculosis at age twenty-eight in 1654. Despite this tragically brief career, he produced around one hundred paintings that transformed how artists approached animal subjects, influencing painters for centuries."
      },
      {
        question: "What subjects did Paulus Potter paint?",
        answer: "Potter specialized in <strong>animal paintings</strong> featuring cattle, horses, sheep, and dogs in pastoral Dutch landscapes. His animals are often silhouetted dramatically against cloudy skies, portrayed with an attention to individual character that treated them as <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait subjects</strong></a>."
      }
    ]
  },
  {
    slug: 'rene-magritte',
    faqs: [
      {
        question: "What art movement was René Magritte part of?",
        answer: "Magritte was a leading <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a>, though his cool, impersonal painting technique distinguished him from other Surrealists who emphasized gestural, automatic methods. His deadpan realistic style made impossible scenes all the more disturbing by rendering them with photographic clarity."
      },
      {
        question: "Where can I see René Magritte paintings?",
        answer: "The Magritte Museum in Brussels displays 200 works in a dedicated building. Major paintings also hang at the <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a>, and the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>."
      },
      {
        question: "What recurring images appear in Magritte's work?",
        answer: "Magritte repeatedly used <strong>bowler-hatted men</strong>, green apples, <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>cloudy blue skies</strong></a>, pipes, and birds. These familiar objects appear in impossible contexts that question perception and reality, becoming icons of 20th-century art."
      },
      {
        question: "What is The Treachery of Images?",
        answer: "This 1929 painting shows a pipe with text reading \"<strong>Ceci n'est pas une pipe</strong>\" (This is not a pipe). Magritte's point: the painting is not a pipe but a representation of one. This simple philosophical puzzle challenged assumptions about images and reality."
      },
      {
        question: "What influenced René Magritte's style?",
        answer: "Seeing Giorgio de Chirico's <strong>The Song of Love</strong> in 1922 transformed Magritte's approach completely. De Chirico's mysterious juxtapositions of unrelated objects in dreamlike spaces provided the template for Magritte's mature Surrealist vision of dislocated reality."
      }
    ]
  },
  {
    slug: 'henri-matisse',
    faqs: [
      {
        question: "What art movement did Henri Matisse found?",
        answer: "Matisse was the leader of <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a>, named after critics called him and his colleagues 'fauves' (wild beasts) at the 1905 Salon d'Automne. Their bold, unnaturalistic <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a> shocked Paris and launched modern art's liberation from realistic representation."
      },
      {
        question: "What are Matisse's most famous works?",
        answer: "\"<strong>Woman with a Hat</strong>\" (1905), \"<strong>The Dance</strong>\" (1910), his late paper cut-outs, and the <strong>Chapelle du Rosaire de Vence</strong> rank among his most celebrated achievements. Each medium showcases his revolutionary approach to color and form."
      },
      {
        question: "Where can I see Matisse's paintings?",
        answer: "Major collections exist at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a>, the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> (which holds The Dance), the <a href=\"/apps/masterpieces/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a>, and the Musée Matisse in Nice near where he spent his final years."
      },
      {
        question: "What are Matisse's paper cut-outs?",
        answer: "When illness prevented painting in the 1940s, Matisse developed <strong>paper cut-outs</strong>, calling the technique \"painting with scissors.\" He cut shapes from painted paper and arranged them into compositions. These late works became some of his most joyful and <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract creations</strong></a>."
      },
      {
        question: "When did Matisse start painting?",
        answer: "Matisse came to painting at <strong>age 20</strong> while recovering from appendicitis in 1889. His mother gave him a paint set, and he described the experience as finding \"a kind of paradise.\" He went on to become one of the most influential artists of the 20th century."
      }
    ]
  },
  {
    slug: 'giovanni-segantini',
    faqs: [
      {
        question: "What art movement was Giovanni Segantini part of?",
        answer: "Segantini was a leading <strong>Divisionist</strong> painter who also engaged deeply with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>. His technique used long parallel brushstrokes of pure color creating luminous <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>Alpine scenes</strong></a> that vibrate with light at high altitude."
      },
      {
        question: "What are Segantini's most famous paintings?",
        answer: "\"<strong>The Punishment of Lust</strong>\" (1891), depicting tormented women floating over frozen landscapes, \"<strong>Love at the Fountain of Life</strong>\" (1896), and his vast Alpine Triptych of Life, Nature, and Death rank among his most powerful works."
      },
      {
        question: "Where can I see Segantini's paintings?",
        answer: "The <strong>Segantini Museum</strong> in St. Moritz holds a significant collection including his Alpine Triptych. Additional works hang at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool, the Kunsthaus Zürich, and various European museums."
      },
      {
        question: "Why was Segantini stateless?",
        answer: "Born in Austrian territory that became Italian, his citizenship was revoked and he never obtained new nationality, remaining <strong>stateless his entire life</strong>. This rootlessness contributed to his outsider status and perhaps his attraction to the high Alpine wilderness."
      },
      {
        question: "How did Segantini die?",
        answer: "He died at 41 from <strong>acute peritonitis</strong> while painting his Alpine Triptych at 9,000 feet near Pontresina, Switzerland. He had insisted on working at extreme altitude to capture the quality of <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain light</strong></a> that defined his late paintings."
      }
    ]
  },
  {
    slug: 'leon-spilliaert',
    faqs: [
      {
        question: "What art movement was Léon Spilliaert part of?",
        answer: "Spilliaert bridged <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and early <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, creating haunting images that belong to neither movement entirely. His solitary, nocturnal visions explore alienation and mystery with an intensity that anticipated Surrealism."
      },
      {
        question: "What are Spilliaert's most famous works?",
        answer: "\"<strong>Self-Portrait with Masks</strong>\" (1903), showing his gaunt face before carnival masks, and \"<strong>Digue la nuit</strong>\" (1908), depicting Ostend's deserted seawall, exemplify his mastery of chiaroscuro and oppressive, dreamlike atmosphere."
      },
      {
        question: "Where can I see Spilliaert's work?",
        answer: "Major collections exist at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the Royal Museums of Fine Arts of Belgium in Brussels, and Mu.ZEE in his hometown of Ostend. The Mu.ZEE collection is the most comprehensive."
      },
      {
        question: "What medium did Spilliaert use?",
        answer: "He worked primarily on <strong>paper</strong> using Indian ink, watercolor, colored pencil, and pastels. Unusually, he created no oil paintings throughout his career, producing over 4,500 works on paper that gave his images their distinctive <a href=\"https://luxurywallart.com/collections/black-and-white-artwork\" target=\"_blank\" rel=\"noopener\"><strong>graphic quality</strong></a>."
      },
      {
        question: "What inspired Spilliaert's nocturnal scenes?",
        answer: "His chronic <strong>insomnia</strong> led him to walk Ostend's deserted seafront at night for years. These solitary experiences directly shaped his imagery of empty <a href=\"https://luxurywallart.com/collections/beach-artwork\" target=\"_blank\" rel=\"noopener\"><strong>beaches</strong></a>, silent promenades, and infinite horizons that define his most memorable works."
      }
    ]
  },
  {
    slug: 'suzanne-valadon',
    faqs: [
      {
        question: "What art movement was Suzanne Valadon part of?",
        answer: "Valadon worked in the <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style, using bold colors and strong black outlines that recalled Gauguin. She was deeply embedded in the Montmartre avant-garde scene alongside Toulouse-Lautrec, Degas, and Renoir."
      },
      {
        question: "Where can I see Suzanne Valadon's paintings?",
        answer: "Major collections of her work are at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and the Centre Pompidou. Her powerful <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female nudes</strong></a> are increasingly recognized as pioneering works."
      },
      {
        question: "Who was Suzanne Valadon's famous son?",
        answer: "Her son <strong>Maurice Utrillo</strong> (1883-1955) became one of France's most celebrated painters, known for his Montmartre street scenes. Valadon taught him to paint as therapy for his alcoholism, and the two exhibited together throughout their careers."
      },
      {
        question: "Why is Suzanne Valadon historically significant?",
        answer: "She was the <strong>first woman admitted</strong> to the Société Nationale des Beaux-Arts in 1894, sponsored by Degas. She also pioneered honest depictions of the female nude from a woman's perspective, without the idealization or voyeurism typical of male painters."
      },
      {
        question: "Which famous artists did Suzanne Valadon model for?",
        answer: "Valadon posed for <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>, <a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>, and Puvis de Chavannes as a young circus acrobat turned model. Degas discovered her drawings and became her mentor, the only formal artistic guidance she ever received."
      }
    ]
  },
  {
    slug: 'atkinson-grimshaw',
    faqs: [
      {
        question: "What was Atkinson Grimshaw known for painting?",
        answer: "Grimshaw specialized in <strong>nocturnal urban scenes</strong>: moonlit streets with wet cobblestones reflecting gaslight, figures hurrying through fog, and the melancholy atmosphere of Victorian cities. He painted the docks of London, Liverpool, Leeds, and Glasgow with atmospheric precision."
      },
      {
        question: "Where can I see Atkinson Grimshaw's paintings?",
        answer: "His work is displayed at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a> in London, Leeds Art Gallery (his hometown holds the largest public collection), and the Guildhall Art Gallery in London. Private collections hold many of his <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>moonlight scenes</strong></a>."
      },
      {
        question: "What art movement was Atkinson Grimshaw part of?",
        answer: "Grimshaw worked in a <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> style influenced by the Pre-Raphaelites, though his subject matter was thoroughly Victorian urban. His atmospheric nocturnes anticipated certain aspects of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> in their treatment of light and weather effects."
      },
      {
        question: "What did James Whistler say about Atkinson Grimshaw?",
        answer: "After visiting Grimshaw's studio, Whistler reportedly said: <strong>\"I considered myself the inventor of Nocturnes until I saw Grimmy's moonlit pictures.\"</strong> This generous praise from London's leading aesthete acknowledged Grimshaw's mastery of night scenes."
      },
      {
        question: "Was Atkinson Grimshaw self-taught?",
        answer: "Yes, Grimshaw was <strong>entirely self-taught</strong> after leaving his clerk position to paint full-time. He used photographs and possibly a camera obscura to achieve precise perspectives, compensating for his lack of formal training with methodical observation and technical ingenuity."
      }
    ]
  },
  {
    slug: 'ivan-shishkin',
    faqs: [
      {
        question: "What was Ivan Shishkin known for painting?",
        answer: "Shishkin was famous for his <strong>detailed forest landscapes</strong> depicting Russian wilderness with almost scientific precision. His paintings of pine forests, oak groves, and <a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\"><strong>ancient trees</strong></a> were so accurate that contemporaries said they could serve as botanical studies."
      },
      {
        question: "Where can I see Ivan Shishkin's paintings?",
        answer: "Major collections are in the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg. His work appears throughout Russian art museums, where he remains one of the most beloved national painters."
      },
      {
        question: "What is Ivan Shishkin's most famous painting?",
        answer: "<em>Morning in a Pine Forest</em> (1889) featuring four bear cubs playing on a fallen tree is Russia's most reproduced painting, appearing on everything from chocolate wrappers to Soviet postage stamps. Interestingly, <strong>Konstantin Savitsky actually painted the bears</strong> while Shishkin did the forest."
      },
      {
        question: "What art movement was Ivan Shishkin part of?",
        answer: "He was a founding member of the <strong>Peredvizhniki</strong> (Wanderers), Russian realist artists who rejected academic rigidity and organized traveling exhibitions. This democratic movement brought art to ordinary people across Russia's vast <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a>."
      },
      {
        question: "Why was Ivan Shishkin called the 'tsar of the forest'?",
        answer: "His contemporaries gave him this title because of his <strong>unmatched mastery in depicting Russian forests</strong>. No painter before or since has captured the grandeur of birches, pines, and oaks with such loving detail, essentially creating the visual vocabulary for how Russians see their national <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a>."
      }
    ]
  }
];

async function main() {
  console.log('Starting FAQ updates for 25 artists...\n');

  for (const artist of artistUpdates) {
    try {
      const result = await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artist.slug} - ${error.message}`);
    }
  }

  console.log('\nFAQ updates complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
