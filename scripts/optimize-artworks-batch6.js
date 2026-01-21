const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "the-desperate-man": {
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted The Desperate Man around 1845, creating one of art history's most intense self-portraits. He stares directly at the viewer with wild eyes, hands clutching his hair in a gesture of <strong>anguish or madness</strong>. The close framing and dramatic expression give the work an almost confrontational power.</p>

<p>Courbet was a leader of the <strong>Realist movement</strong> and notorious provocateur who challenged academic conventions. This self-portrait captures the Romantic persona he cultivated early in his career. The painting remained in private hands for generations and has become one of his most recognized works.</p>`,
    faqs: [
      {
        question: "Who painted The Desperate Man?",
        answer: `<a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> created this self-portrait around 1845. He was a French painter who led the <a href="/apps/masterpieces/movement/realism"><strong>Realist movement</strong></a>, challenging academic painting with direct depictions of contemporary life.`
      },
      {
        question: "What does The Desperate Man depict?",
        answer: `The painting shows Courbet himself in a moment of <strong>intense emotion</strong>, clutching his hair with both hands while staring wildly at the viewer. The close-cropped composition intensifies the psychological impact.`
      },
      {
        question: "Why is this painting famous?",
        answer: `The Desperate Man stands out for its <strong>raw emotional intensity</strong> and direct engagement with the viewer. Courbet's unflinching self-examination anticipated psychological portraiture that would emerge later in the century.`
      }
    ]
  },

  "william-holman-hunt-rienzi-vowing-to-obtain-justice-for-the-death-of-h": {
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this ambitious scene depicting Cola di Rienzi swearing vengeance over his murdered brother's body. The medieval Roman tribune raises his arm in a dramatic oath while <strong>mourners gather</strong> around the fallen youth. Hunt's meticulous attention to historical costume and setting reflects Pre-Raphaelite ideals.</p>

<p>This early work helped establish Hunt as a founding member of the <strong>Pre-Raphaelite Brotherhood</strong>. The painting combines moral seriousness with vivid color and precise observation, hallmarks of the movement's rebellion against academic conventions. The work remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted this scene of Rienzi?",
        answer: `<a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> created this work. He was a founding member of the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a>, known for moral subjects painted with intense detail and color.`
      },
      {
        question: "Who was Cola di Rienzi?",
        answer: `Cola di Rienzi was a 14th-century <strong>Roman tribune</strong> who briefly ruled Rome and attempted to restore the Roman Republic. Hunt's painting shows his vow to avenge his brother's murder by Roman nobles.`
      },
      {
        question: "What style is this painting?",
        answer: `The painting exemplifies the <strong>Pre-Raphaelite style</strong>, featuring bright colors, historical accuracy, and moral themes. The Brotherhood rejected academic conventions in favor of detailed naturalism and medieval inspiration.`
      }
    ]
  },

  "adriaen-van-ostade-the-interior-of-a-peasant39s-cottage": {
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted The Interior of a Peasant's Cottage, depicting a humble Dutch household. Figures gather in a dimly lit room where <strong>shafts of light</strong> illuminate the worn furnishings and scattered objects. The scene captures daily life with affectionate attention to humble details.</p>

<p>Van Ostade specialized in peasant genre scenes, influenced by Adriaen Brouwer and the tradition of depicting <strong>common folk</strong> with humor and sympathy. His interiors often show more dignity than caricature in their portrayal of rural life. This painting hangs at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts"><strong>Detroit Institute of Arts</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `This work is displayed at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts"><strong>Detroit Institute of Arts</strong></a> in Michigan. The museum holds a strong collection of Dutch Golden Age paintings including genre scenes and portraits.`
      },
      {
        question: "Who painted The Interior of a Peasant's Cottage?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> created this work. He was a Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter who specialized in scenes of peasant life in cottages and taverns.`
      },
      {
        question: "What does this painting depict?",
        answer: `The scene shows <strong>Dutch peasants</strong> inside a rustic cottage. Van Ostade captures the textures of worn furniture, simple clothing, and everyday objects illuminated by natural light filtering through windows.`
      }
    ]
  },

  "gerrit-dou-the-extraction-of-tooth": {
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> painted The Extraction of Tooth, showing a traveling dentist performing his work on a grimacing patient. Onlookers gather around the scene, their expressions ranging from <strong>curiosity to amusement</strong>. Dou renders every detail with the minute precision for which he became famous.</p>

<p>A student of Rembrandt, Dou developed a highly refined technique known as <strong>fijnschilder</strong> (fine painting). His small, gem-like works commanded premium prices and influenced generations of Dutch painters. This painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see The Extraction of Tooth?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. The museum holds several works by Dou alongside its vast collection of Dutch Golden Age painting.`
      },
      {
        question: "Who painted The Extraction of Tooth?",
        answer: `<a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> created this work. He was Rembrandt's first student and became famous for his extremely <strong>detailed painting technique</strong> called fijnschilder.`
      },
      {
        question: "What style is this painting?",
        answer: `Dou worked in the Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style known as fijnschilder, featuring incredibly fine brushwork and <strong>polished surfaces</strong>. His genre scenes were prized by collectors across Europe.`
      }
    ]
  },

  "last-days-pompeii-hamilton": {
    description: `<p><a href="/apps/masterpieces/artist/james-hamilton-painter"><strong>James Hamilton</strong></a> painted The Last Days of Pompeii in 1864, depicting the catastrophic eruption of Mount Vesuvius. <strong>Volcanic fire</strong> illuminates terrified citizens fleeing through collapsing streets while ash and debris rain down. The dramatic composition captures nature's destructive power.</p>

<p>Hamilton was an Irish-American painter known for his <strong>dramatic seascapes</strong> and historical subjects. His Pompeii scene reflects 19th-century fascination with classical archaeology and natural disasters, popularized by Bulwer-Lytton's novel of the same name. The painting is held at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see The Last Days of Pompeii?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> in New York. The museum holds significant collections of American and European art from various periods.`
      },
      {
        question: "Who painted The Last Days of Pompeii?",
        answer: `<a href="/apps/masterpieces/artist/james-hamilton-painter"><strong>James Hamilton</strong></a> created this work in 1864. He was an Irish-American painter known for dramatic landscapes and marine subjects, sometimes called the "American Turner."`
      },
      {
        question: "What does this painting depict?",
        answer: `The painting shows the <strong>destruction of Pompeii</strong> during the 79 AD eruption of Mount Vesuvius. Hamilton captures citizens fleeing as volcanic fire lights the sky and buildings collapse around them.`
      }
    ]
  },

  "adriaen-brouwer-peasants-playing-cards-in-a-tavern": {
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted Peasants Playing Cards in a Tavern, showing rough characters engaged in their game. The figures hunch over their cards with <strong>intense concentration</strong>, their weathered faces revealing lives of hard labor. Brouwer's loose, energetic brushwork captures the smoky tavern atmosphere.</p>

<p>Brouwer specialized in low-life scenes that influenced both Flemish and Dutch painting. Despite dying young, he earned admiration from Rubens and Rembrandt, who both collected his work. This painting hangs at the <a href="/apps/masterpieces/museum/alte-pinakothek-munich-germany"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      {
        question: "Where can I see this Adriaen Brouwer painting?",
        answer: `This work is displayed at the <a href="/apps/masterpieces/museum/alte-pinakothek-munich-germany"><strong>Alte Pinakothek</strong></a> in Munich, Germany. The museum houses an outstanding collection of European Old Master paintings.`
      },
      {
        question: "Who was Adriaen Brouwer?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> was a Flemish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter known for tavern scenes and peasant life. Both Rubens and Rembrandt collected his works despite his short career.`
      },
      {
        question: "What style is this painting?",
        answer: `Brouwer worked in a loose, expressive <strong>Baroque style</strong>. His rough brushwork and earthy subjects contrasted with more refined Dutch painting, influencing later genre painters like Adriaen van Ostade.`
      }
    ]
  },

  "pietro-da-cortona-venus-appearing-to-aeneas-as-a-huntress": {
    description: `<p><a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted Venus Appearing to Aeneas as a Huntress, illustrating a scene from Virgil's Aeneid. The goddess, disguised as a <strong>young huntress</strong>, appears to her son Aeneas after he lands on African shores. Flowing drapery and dynamic poses characterize Cortona's theatrical Baroque style.</p>

<p>Cortona was a leading painter of the <strong>Roman Baroque</strong>, famous for his illusionistic ceiling frescoes. His mythological paintings combine classical learning with energetic movement and rich color. This work is held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see this Pietro da Cortona painting?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. The museum holds important works from the Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> period.`
      },
      {
        question: "What does this painting depict?",
        answer: `The scene comes from Virgil's <strong>Aeneid</strong>, showing Venus disguised as a huntress appearing to her son Aeneas. She guides him toward Carthage where he'll meet Queen Dido.`
      },
      {
        question: "Who was Pietro da Cortona?",
        answer: `<a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> was a leading Italian Baroque painter and architect. He's famous for illusionistic <strong>ceiling frescoes</strong> that influenced decoration across Europe.`
      }
    ]
  },

  "edgar-degas-jockey": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted Jockey, capturing a rider mounted on his horse before or after a race. The composition likely shows the figure from an <strong>unexpected angle</strong>, characteristic of Degas' interest in candid viewpoints. His loose brushwork suggests movement and atmosphere at the racecourse.</p>

<p>Degas was fascinated by horse racing as a subject that combined <strong>athletic motion</strong> with social spectacle. He frequently visited the Longchamp racecourse near Paris, filling sketchbooks with studies of horses and riders. This painting is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Degas' Jockey?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. The museum holds one of the finest collections of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> art in the United States.`
      },
      {
        question: "Who painted Jockey?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> created this work. He frequently painted racecourse subjects alongside his famous ballet dancers, drawn to scenes of <strong>athletic movement</strong> and social gatherings.`
      },
      {
        question: "Did Degas paint many horse racing scenes?",
        answer: `Yes, Degas produced numerous <strong>racecourse paintings</strong> throughout his career. He was fascinated by horses in motion and the social atmosphere at tracks like Longchamp near Paris.`
      }
    ]
  },

  "adriaen-brouwer-twilight-landscape": {
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted Twilight Landscape, showing the Flemish countryside at dusk. The composition captures the <strong>fading light</strong> as day turns to evening, with subtle tonal gradations across sky and land. Small figures or structures may punctuate the quiet scene.</p>

<p>Though best known for tavern scenes, Brouwer produced atmospheric landscapes that influenced later painters. His ability to capture <strong>transitional moments</strong> of light demonstrates remarkable sensitivity for an artist associated with rough peasant subjects. This painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see Twilight Landscape?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. The museum's Flemish collection includes several works showing the range of <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> landscape painting.`
      },
      {
        question: "Who painted Twilight Landscape?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> created this atmospheric work. Though famous for peasant tavern scenes, he also produced <strong>sensitive landscapes</strong> admired by Rubens and Rembrandt.`
      },
      {
        question: "What style is this landscape?",
        answer: `Brouwer's landscapes show a <strong>poetic sensitivity</strong> to light and atmosphere. His twilight scenes influenced later Dutch and Flemish painters interested in capturing specific times of day.`
      }
    ]
  },

  "adriaen-van-ostade-landscape-with-an-old-oak": {
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted Landscape with an Old Oak, centering the composition on a <strong>gnarled ancient tree</strong>. The oak dominates the scene, its twisted trunk and spreading branches testifying to centuries of growth. Small figures may appear near its base, dwarfed by nature's scale.</p>

<p>Though primarily known for interior peasant scenes, van Ostade also painted landscapes that show Dutch interest in <strong>native trees and terrain</strong>. Old oaks held symbolic significance, representing endurance and the Dutch homeland. This painting is held at the <a href="/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      {
        question: "Where can I see Landscape with an Old Oak?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam. The museum holds the world's finest collection of Dutch Golden Age art, including landscapes and genre scenes.`
      },
      {
        question: "Who painted Landscape with an Old Oak?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> created this work. Though famous for peasant interiors, he also painted landscapes featuring the <strong>Dutch countryside</strong> and its ancient trees.`
      },
      {
        question: "What style is this painting?",
        answer: `The work reflects Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> landscape traditions. Dutch painters often featured <strong>old oak trees</strong> as symbols of endurance and national pride.`
      }
    ]
  },

  "isenheim-altarpiece-crucifixion": {
    description: `<p><a href="/apps/masterpieces/artist/matthias-grunewald"><strong>Matthias Grünewald</strong></a> painted the Isenheim Altarpiece Crucifixion around 1515, creating one of the most harrowing images of Christ's death in Western art. The tortured body hangs against a <strong>black sky</strong>, covered in wounds and thorns. The Virgin collapses in grief while John the Baptist points toward the dying Christ.</p>

<p>The altarpiece was created for a hospital treating skin diseases, and Christ's afflicted body offered <strong>spiritual comfort</strong> to suffering patients. The painting's emotional intensity and strange coloring make it unforgettable. It remains at the <a href="/apps/masterpieces/museum/musee-unterlinden"><strong>Musée Unterlinden</strong></a> in Colmar, France.</p>`,
    faqs: [
      {
        question: "Where can I see the Isenheim Altarpiece?",
        answer: `The altarpiece is displayed at the <a href="/apps/masterpieces/museum/musee-unterlinden"><strong>Musée Unterlinden</strong></a> in Colmar, France. It was originally created for the Monastery of St. Anthony nearby, which treated patients with skin diseases.`
      },
      {
        question: "Who painted the Isenheim Altarpiece?",
        answer: `<a href="/apps/masterpieces/artist/matthias-grunewald"><strong>Matthias Grünewald</strong></a> painted this work around 1515. Little is known about this German artist, but his altarpiece is considered one of the most <strong>powerful religious paintings</strong> ever created.`
      },
      {
        question: "Why is the Crucifixion so disturbing?",
        answer: `Grünewald depicted Christ's body covered in <strong>wounds and sores</strong> to connect with hospital patients suffering from skin diseases. The extreme suffering shown offered spiritual identification with their own pain.`
      },
      {
        question: "What style is this painting?",
        answer: `The altarpiece combines late <a href="/apps/masterpieces/movement/gothic"><strong>Gothic</strong></a> intensity with Northern Renaissance realism. Grünewald's expressive distortions anticipated later Expressionist art by four centuries.`
      }
    ]
  },

  "akseli-gallen-kallela-lemmink228inen39s-mother": {
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted Lemminkäinen's Mother, depicting a scene from the Finnish national epic Kalevala. The mother has retrieved her son's dismembered body from the <strong>River of Death</strong> and attempts to restore him to life. The stark landscape and emotional intensity capture the mythic power of the tale.</p>

<p>Gallen-Kallela became Finland's national painter through his Kalevala illustrations, which combined <strong>Symbolist style</strong> with Finnish mythology. This painting helped establish Finnish cultural identity during the struggle for independence from Russia. It hangs at the <a href="/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland-ateneum-"><strong>Finnish National Gallery</strong></a> in Helsinki.</p>`,
    faqs: [
      {
        question: "Where can I see Lemminkäinen's Mother?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland-ateneum-"><strong>Finnish National Gallery</strong></a> (Ateneum) in Helsinki. The museum holds Finland's most important collection of national art.`
      },
      {
        question: "Who painted Lemminkäinen's Mother?",
        answer: `<a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> created this work. He was Finland's most celebrated painter, famous for his <strong>Kalevala illustrations</strong> that helped forge Finnish national identity.`
      },
      {
        question: "What is the Kalevala?",
        answer: `The <strong>Kalevala</strong> is Finland's national epic, compiled from folk poetry in the 19th century. Its heroes and myths became central to Finnish cultural identity and inspired artists, composers, and writers.`
      },
      {
        question: "What style is this painting?",
        answer: `Gallen-Kallela combined <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> elements with Finnish National Romanticism. His stark compositions and emotional intensity gave ancient myths <strong>modern visual power</strong>.`
      }
    ]
  },

  "san-zaccaria-altarpiece": {
    description: `<p><a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted the San Zaccaria Altarpiece in 1505, showing the Virgin and Child enthroned with saints in an architectural setting. Soft Venetian light bathes the figures, creating an atmosphere of <strong>serene contemplation</strong>. The saints include Peter, Catherine, Lucy, and Jerome.</p>

<p>This late masterpiece demonstrates Bellini's perfected technique of oil painting and atmospheric light. The work remains in its original location at the <a href="/apps/masterpieces/museum/san-zaccaria"><strong>Chiesa di San Zaccaria</strong></a> in Venice, where it has been admired for over five centuries.</p>`,
    faqs: [
      {
        question: "Where can I see the San Zaccaria Altarpiece?",
        answer: `The painting remains in its original location at the <a href="/apps/masterpieces/museum/san-zaccaria"><strong>Chiesa di San Zaccaria</strong></a> in Venice, Italy. It's one of the few Renaissance altarpieces still in the church for which it was created.`
      },
      {
        question: "Who painted the San Zaccaria Altarpiece?",
        answer: `<a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> created this work in 1505 when he was over 70 years old. He was the leading painter of the <a href="/apps/masterpieces/movement/venetian-renaissance"><strong>Venetian Renaissance</strong></a> and teacher of Titian.`
      },
      {
        question: "What does this altarpiece depict?",
        answer: `The painting shows a <strong>sacra conversazione</strong> (holy conversation): the Virgin and Child enthroned with Saints Peter, Catherine, Lucy, and Jerome in an architectural setting bathed in golden light.`
      }
    ]
  },

  "jupiter-and-semele": {
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted Jupiter and Semele in 1895, depicting the moment the god reveals his true divine form to his mortal lover. Semele dies from the <strong>overwhelming radiance</strong> of Jupiter's glory, shown here as a dazzling figure surrounded by symbolic beings. The composition overflows with ornamental detail and mystical imagery.</p>

<p>Moreau was the leading <strong>Symbolist painter</strong> in France, creating jewel-like visions of mythology and religion. His ornate, mysterious works influenced the Surrealists. This painting is the centerpiece of the <a href="/apps/masterpieces/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see Jupiter and Semele?",
        answer: `This painting is the centerpiece of the <a href="/apps/masterpieces/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris, the artist's former studio converted into a museum. It contains his life's work and personal collections.`
      },
      {
        question: "Who painted Jupiter and Semele?",
        answer: `<a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> created this work in 1895. He was the leading French <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> painter, known for his mystical interpretations of mythology.`
      },
      {
        question: "What does Jupiter and Semele depict?",
        answer: `The painting shows the moment <strong>Jupiter reveals his divine form</strong> to his mortal lover Semele, killing her with his radiance. She would give birth to Dionysus, whom Jupiter saved from her body.`
      }
    ]
  },

  "amedeo-modigliani-maurice-drouard": {
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted this portrait of Maurice Drouard, a fellow artist in the Montparnasse circle. The composition displays Modigliani's signature style: an <strong>elongated face</strong>, almond-shaped eyes, and simplified features. Warm earth tones and fluid contours give the portrait an elegant, sculptural quality.</p>

<p>Modigliani's portraits combine influences from African sculpture, Byzantine art, and his training as a sculptor. His distinctive style was unappreciated during his lifetime but became <strong>highly valued</strong> after his early death. This painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted this portrait of Maurice Drouard?",
        answer: `<a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> created this work. He was an Italian artist working in Paris, known for his distinctive portraits with <strong>elongated features</strong> and elegant stylization.`
      },
      {
        question: "Who was Maurice Drouard?",
        answer: `Maurice Drouard was a French artist who moved in the <strong>Montparnasse art circles</strong>. Modigliani often portrayed fellow artists and writers from this bohemian community in early 20th-century Paris.`
      },
      {
        question: "What style is this portrait?",
        answer: `Modigliani developed a unique style combining <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> distortion with sculptural elegance. His elongated forms were influenced by African art, Brancusi, and Byzantine icons.`
      }
    ]
  },

  "reverend-walker-skating": {
    description: `<p><a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> painted The Reverend Robert Walker Skating on Duddingston Loch around 1795, creating one of Scotland's most beloved images. The minister glides across the ice with <strong>perfect balance</strong>, his dark figure silhouetted against a muted winter sky. The pose captures both elegance and a hint of eccentricity.</p>

<p>Raeburn was Scotland's leading portrait painter, known for his bold brushwork and psychological insight. This unusual portrait has become a <strong>national icon</strong>, reproduced countless times. It hangs at the <a href="/apps/masterpieces/museum/national-galleries-scotland"><strong>National Galleries of Scotland</strong></a> in Edinburgh.</p>`,
    faqs: [
      {
        question: "Where can I see The Reverend Walker Skating?",
        answer: `This iconic painting hangs at the <a href="/apps/masterpieces/museum/national-galleries-scotland"><strong>National Galleries of Scotland</strong></a> in Edinburgh. It's one of the most <strong>popular works</strong> in the collection and a symbol of Scottish art.`
      },
      {
        question: "Who painted The Reverend Walker Skating?",
        answer: `<a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> is attributed as the painter, though some scholars debate this. He was Scotland's most celebrated portrait painter of the late 18th and early 19th centuries.`
      },
      {
        question: "Who was Reverend Robert Walker?",
        answer: `Robert Walker was a <strong>minister of the Church of Scotland</strong> and a member of the Edinburgh Skating Club. The painting captures an unexpected side of this clergyman enjoying a popular winter pastime.`
      }
    ]
  },

  "rembrandt-peter-and-john-at-the-gate-of-the-temple": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted Peter and John at the Gate of the Temple, illustrating the biblical story from Acts. The apostles encounter a <strong>lame beggar</strong> whom Peter heals with words rather than alms. Rembrandt's characteristic handling of light and shadow dramatizes the miraculous moment.</p>

<p>Rembrandt frequently depicted biblical narratives with <strong>psychological depth</strong>, focusing on human emotion rather than spectacle. His religious works emphasize compassion and spiritual transformation. This painting is held at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, England. The museum holds several important works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> and other Dutch masters.`
      },
      {
        question: "What does this painting depict?",
        answer: `The scene comes from <strong>Acts chapter 3</strong>, where Peter and John encounter a lame man at the temple gate. Instead of giving money, Peter heals him, saying "Silver and gold have I none, but what I have I give thee."`
      },
      {
        question: "What style is this painting?",
        answer: `Rembrandt worked in the Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style, using dramatic lighting and psychological intensity. His biblical scenes emphasize <strong>human emotion</strong> over theatrical display.`
      }
    ]
  },

  "artemisia-gentileschi-judith-and-her-maidservant-with-the-head-of-holofe": {
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> painted Judith and Her Maidservant with the Head of Holofernes, showing the aftermath of the biblical heroine's deadly act. The women pause in <strong>tense alertness</strong>, candlelight illuminating their faces as they listen for approaching guards. Judith holds the sword while her maid carries the severed head.</p>

<p>Gentileschi returned to this subject repeatedly, creating some of the most <strong>powerful images</strong> of female heroism in Baroque art. Her dramatic lighting shows Caravaggio's influence, whom she knew through her father. This painting hangs at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts-detroit-mi-us"><strong>Detroit Institute of Arts</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Artemisia Gentileschi painting?",
        answer: `This work is displayed at the <a href="/apps/masterpieces/museum/detroit-institute-of-arts-detroit-mi-us"><strong>Detroit Institute of Arts</strong></a> in Michigan. The museum holds important examples of <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting from across Europe.`
      },
      {
        question: "Who was Artemisia Gentileschi?",
        answer: `<a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> was one of the most accomplished painters of the Baroque era and the first woman admitted to Florence's art academy. She's known for <strong>powerful female subjects</strong>.`
      },
      {
        question: "What does this painting depict?",
        answer: `The painting shows <strong>Judith and her maidservant</strong> after beheading the Assyrian general Holofernes. They pause tensely, listening for guards, with the severed head concealed in a basket.`
      }
    ]
  },

  "execution-lady-jane-grey": {
    description: `<p><a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted The Execution of Lady Jane Grey in 1833, depicting the final moments of the teenage queen. Blindfolded and dressed in white, she reaches for the block while attendants weep around her. The scene captures the <strong>pathos and injustice</strong> of her fate with theatrical precision.</p>

<p>Delaroche specialized in dramatic historical subjects that appealed to Romantic sensibilities. Lady Jane ruled England for just nine days before being executed for treason. This painting became one of the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery's</strong></a> most popular works.</p>`,
    faqs: [
      {
        question: "Where can I see The Execution of Lady Jane Grey?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where it's among the most visited works. The museum rediscovered it damaged in storage and restored it in the 1970s.`
      },
      {
        question: "Who was Lady Jane Grey?",
        answer: `Lady Jane Grey was a <strong>teenage queen of England</strong> who ruled for only nine days in 1553. She was executed at age 16 after Catholic Mary I reclaimed the throne, becoming known as the "Nine Days' Queen."`
      },
      {
        question: "Who painted The Execution of Lady Jane Grey?",
        answer: `<a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> created this work in 1833. He was a French painter who specialized in <strong>dramatic historical scenes</strong> that combined accuracy with emotional impact.`
      }
    ]
  },

  "edgar-degas-three-dancers": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted Three Dancers, capturing ballet performers in a moment between or before appearances. The composition shows the dancers from an <strong>unconventional angle</strong>, their tutus and poses creating rhythmic patterns. Degas' pastel technique gives the scene a luminous, spontaneous quality.</p>

<p>Degas depicted dancers throughout his career, fascinated by their movements, gestures, and the <strong>backstage world</strong> of the Paris Opera. His cropped compositions and unusual viewpoints influenced photography and modern art. This work is held at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Degas' Three Dancers?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio. The museum holds a strong collection of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> works including several by Degas.`
      },
      {
        question: "Why did Degas paint so many dancers?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> was fascinated by the <strong>Paris Opera ballet</strong> as a subject combining movement, light, and modern life. He had backstage access and made hundreds of works featuring dancers.`
      },
      {
        question: "What style is this painting?",
        answer: `Degas worked in an <strong>Impressionist style</strong> focused on figure subjects rather than landscapes. His unconventional compositions and interest in capturing fleeting moments influenced modern art significantly.`
      }
    ]
  },

  "bronzino-portrait-of-signor-panciatichi-bartolomeo": {
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> painted Portrait of Bartolomeo Panciatichi, capturing a Florentine nobleman with <strong>cool elegance</strong>. The sitter's pale face emerges from rich dark clothing, his expression revealing nothing of inner thoughts. Bronzino's polished technique creates an almost porcelain-like surface.</p>

<p>Bronzino was the leading portraitist of the Medici court, perfecting a style of <strong>aristocratic detachment</strong> that defined Mannerist portraiture. The painting's companion portrait of Bartolomeo's wife hangs nearby. Both are displayed at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      {
        question: "Where can I see this Bronzino portrait?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The companion portrait of Bartolomeo's wife Lucrezia is displayed alongside it in the museum.`
      },
      {
        question: "Who was Bronzino?",
        answer: `<a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> was the court painter to the Medici family in Florence. He was a leading <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> artist known for his elegant, psychologically opaque portraits.`
      },
      {
        question: "What style is this portrait?",
        answer: `The painting exemplifies <strong>Mannerist portraiture</strong>, featuring cool colors, polished surfaces, and aristocratic reserve. Bronzino's sitters appear refined but emotionally distant.`
      }
    ]
  },

  "rembrandt-ragged-peasant-with-his-hands-behind-him-holding-a": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching of a ragged peasant holding a stick behind his back. The figure stands with <strong>quiet dignity</strong> despite his worn clothing and humble status. Rembrandt's sensitive line work captures character and humanity in a subject most artists ignored.</p>

<p>Rembrandt produced hundreds of etchings and prints throughout his career, often depicting <strong>common people</strong> with the same care he gave to wealthy patrons. This print demonstrates his democratic vision and technical mastery. An impression is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt work?",
        answer: `An impression of this etching is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. As a print, multiple impressions exist in museums worldwide.`
      },
      {
        question: "Who created this etching?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> made this print. He was a master printmaker as well as painter, producing hundreds of <strong>etchings</strong> throughout his career.`
      },
      {
        question: "Why did Rembrandt depict beggars and peasants?",
        answer: `Rembrandt showed deep interest in <strong>common people</strong>, depicting them with dignity and psychological depth. His democratic vision contrasted with artists who focused only on wealthy patrons.`
      }
    ]
  },

  "giotto-isaac-rejecting-esau": {
    description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> painted Isaac Rejecting Esau as part of his fresco cycle in Assisi. The scene shows the blind patriarch Isaac with his sons, capturing the moment when <strong>Jacob's deception</strong> is revealed. Giotto's figures display natural emotion and solid, three-dimensional presence.</p>

<p>This Old Testament scene prefigures themes of blessing and inheritance important to Christian theology. Giotto's ability to convey <strong>human drama</strong> through gesture and expression revolutionized religious painting. The fresco remains at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      {
        question: "Where can I see Isaac Rejecting Esau?",
        answer: `This fresco is located at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy. The church contains Giotto's important cycle of Old and New Testament scenes.`
      },
      {
        question: "Who painted Isaac Rejecting Esau?",
        answer: `<a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> created this fresco around 1300. He revolutionized painting by depicting <strong>solid, emotional figures</strong> that broke from flat Byzantine traditions.`
      },
      {
        question: "What does this fresco depict?",
        answer: `The scene shows the <strong>biblical story</strong> where blind Isaac realizes his younger son Jacob deceived him into giving the firstborn's blessing. Esau arrives too late to receive his inheritance.`
      }
    ]
  },

  "rembrandt-minerva": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted Minerva, depicting the Roman goddess of wisdom and war. She appears in <strong>armor and drapery</strong>, her attributes identifying her divine nature. Rembrandt's rich handling of textures and atmospheric lighting transforms the mythological figure into a living presence.</p>

<p>Rembrandt painted several versions of Minerva throughout his career, drawn to the interplay of <strong>metal and fabric</strong> and the opportunity to explore light on different surfaces. This painting is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where can I see Rembrandt's Minerva?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage holds one of the world's finest collections of <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> paintings.`
      },
      {
        question: "Who is Minerva?",
        answer: `<strong>Minerva</strong> is the Roman goddess of wisdom, strategic warfare, and the arts. She's equivalent to the Greek goddess Athena and was often depicted with armor, helmet, and an owl.`
      },
      {
        question: "What style is this painting?",
        answer: `Rembrandt worked in the Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style, using dramatic lighting and rich textures. His mythological subjects show the same <strong>psychological depth</strong> as his portraits.`
      }
    ]
  },

  "giotto-pentecost": {
    description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> painted Pentecost, depicting the moment when the Holy Spirit descended upon the apostles. <strong>Tongues of fire</strong> appear above each figure as they receive the gift of speaking in languages. Giotto arranges the figures in a clear, readable composition within an architectural setting.</p>

<p>This fresco demonstrates Giotto's revolutionary approach to religious narrative, emphasizing <strong>human reaction</strong> to divine events. His solid figures and spatial clarity influenced all subsequent Western painting. The work remains at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      {
        question: "Where can I see Giotto's Pentecost?",
        answer: `This fresco is located at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy. The church preserves one of the most important fresco cycles in Western art.`
      },
      {
        question: "What does Pentecost depict?",
        answer: `The scene shows the <strong>descent of the Holy Spirit</strong> upon the apostles, described in Acts chapter 2. Tongues of fire appeared above them, and they received the ability to speak in different languages.`
      },
      {
        question: "Why is Giotto historically important?",
        answer: `<a href="/apps/masterpieces/artist/giotto"><strong>Giotto</strong></a> is considered the father of Western painting. He broke from flat Byzantine style to create <strong>three-dimensional figures</strong> with natural emotions, launching the path toward the Renaissance.`
      }
    ]
  }
};

async function main() {
  console.log('Updating 25 artworks (batch 6)...\n');

  for (const [slug, data] of Object.entries(artworkUpdates)) {
    try {
      const updated = await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${updated.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${slug}:`, error.message);
    }
  }

  await prisma.$disconnect();
  console.log('\nUpdated 25 artworks');
}

main();
