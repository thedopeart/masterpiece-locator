const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  // 1. Claude Monet - House of Parliament Sun
  {
    slug: 'claude-monet-house-of-parliament-sun',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of London's Houses of Parliament as part of his famous Thames series, created during visits to the city between 1899 and 1901. Working from a terrace at St Thomas' Hospital, he captured the Gothic Revival architecture of Westminster through layers of atmospheric fog. The <strong>golden sunlight</strong> pierces through London's industrial haze, transforming the Parliament building into a shimmering silhouette.</p>

<p>Monet was drawn to London specifically for its fog, a byproduct of the Industrial Revolution that created effects no other city could offer. He worked on multiple canvases simultaneously, switching between them as the light changed throughout the day. Back in Giverny, he continued refining these paintings until 1903, even requesting photographs of the buildings to aid his memory.</p>

<p>This work belongs to the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> movement, showcasing Monet's mastery of light and atmosphere. The painting resides at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, where it joins other works from this celebrated series. For those drawn to similar <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold-toned artwork</strong></a>, Monet's Parliament paintings remain among his most atmospheric achievements.</p>`,
    faqs: [
      {
        question: "Where can I see Monet's House of Parliament Sun?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum houses several works from Monet's Thames series, allowing visitors to compare his different atmospheric studies of Westminster.`
      },
      {
        question: "When did Monet paint the Houses of Parliament series?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> began the series during visits to London in 1899, 1900, and 1901. He continued refining the paintings in his Giverny studio until 1903, working on multiple canvases at once to capture changing light conditions.`
      },
      {
        question: "Why was Monet fascinated with London fog?",
        answer: `The fog produced by the <strong>Industrial Revolution</strong> created unique atmospheric effects that transformed buildings into ghostly silhouettes. Monet was also inspired by J.M.W. Turner and James Whistler, who similarly captured London's misty atmosphere.`
      }
    ]
  },

  // 2. Egon Schiele - House with a Bay Window in the Garden
  {
    slug: 'egon-schiele-house-with-a-bay-window-in-the-garden',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted this architectural study as part of his broader exploration of buildings and urban landscapes. While best known for his figure work, Schiele produced dozens of townscapes and house studies throughout his career. His buildings often appear isolated, devoid of human presence, rendered in earthy tones of <strong>brown, green, and ochre</strong>.</p>

<p>Schiele approached architecture with the same intensity he brought to portraiture. His houses lean and tilt, their lines crooked rather than geometrically precise. The Austrian <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> saw buildings as having their own emotional weight. Unlike architectural drawings, his paintings capture structures as lived experience rather than technical documentation.</p>

<p>Many of Schiele's house paintings depict scenes from Krumau (now Český Krumlov), his mother's birthplace in Bohemia. The medieval town's narrow streets and clustered buildings became a recurring motif. This particular work now resides in a <strong>private collection</strong>, though major collections of Schiele's landscapes can be found at the Leopold Museum in Vienna.</p>`,
    faqs: [
      {
        question: "What style did Egon Schiele use for his house paintings?",
        answer: `Schiele worked in the <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a> style, using crooked lines and earthy palettes to give buildings emotional weight. His townscapes often feel melancholic and abandoned, despite depicting real locations.`
      },
      {
        question: "Where did Schiele paint his famous townscapes?",
        answer: `Many of <a href="/apps/masterpieces/artist/egon-schiele"><strong>Schiele's</strong></a> urban landscapes depict Krumau (now <strong>Český Krumlov</strong> in Czechia), where his mother was born. He lived there in 1911 and painted the medieval town's clustered buildings repeatedly.`
      },
      {
        question: "Where can I see Egon Schiele's landscape paintings?",
        answer: `The <strong>Leopold Museum</strong> in Vienna holds the most important collection of Schiele's work, including over 200 pieces. Other significant collections are at the Albertina and the Österreichische Galerie Belvedere, both in Vienna.`
      }
    ]
  },

  // 3. Chaim Soutine - Houses by the Sea
  {
    slug: 'chaim-soutine-houses-by-the-sea',
    description: `<p><a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> likely painted this work during his time in southern France, where he produced numerous landscape paintings between 1919 and 1925. His houses tilt and sway, rendered in thick, swirling brushstrokes that give the scene a sense of turbulent energy. The <strong>coastal setting</strong> suggests this may be from his Cagnes-sur-Mer period, when he worked near the Mediterranean.</p>

<p>Soutine's landscapes divided into two distinct periods: the darker, claustrophobic Céret paintings and the brighter, airier Cagnes works. At Cagnes, he traded his browns and ochres for saturated <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues</strong></a>, yellows, and reds to capture the sunny Mediterranean climate. His brushwork remained characteristically chaotic, creating surfaces that seem to vibrate with movement.</p>

<p>A key figure of the <strong>School of Paris</strong>, Soutine bridged European Expressionism and what would become Abstract Expressionism decades later. His Céret landscapes in particular are now celebrated as precursors to the American movement. This painting remains in a <strong>private collection</strong>, though major examples of his landscape work can be found at the Musée de l'Orangerie in Paris.</p>`,
    faqs: [
      {
        question: "What style did Chaim Soutine paint in?",
        answer: `<a href="/apps/masterpieces/artist/chaim-soutine"><strong>Soutine</strong></a> was part of the <strong>School of Paris</strong> and is considered a major Expressionist painter. His swirling brushstrokes and distorted forms later influenced Abstract Expressionism in America.`
      },
      {
        question: "Where did Soutine paint his landscape paintings?",
        answer: `Soutine worked primarily in <strong>Céret</strong> (1919-1922) in the French Pyrenees and <strong>Cagnes-sur-Mer</strong> (1923-1925) on the Mediterranean coast. The coastal setting suggests his Houses by the Sea may be from the Cagnes period.`
      },
      {
        question: "Where can I see Chaim Soutine's paintings?",
        answer: `The <strong>Musée de l'Orangerie</strong> in Paris holds an important collection of Soutine's landscapes. Other works are at the Metropolitan Museum of Art, Philadelphia Museum of Art, and Tate Modern in London.`
      }
    ]
  },

  // 4. Claude Monet - Houses of Parliament in Winter
  {
    slug: 'claude-monet-houses-of-parliament-in-winter',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> captured the Houses of Parliament in stark winter conditions as part of his Thames series. The Gothic spires of Westminster emerge through cold, misty air, their familiar silhouette softened by the season's pale light. Monet worked from St Thomas' Hospital across the river, painting the same view under constantly shifting atmospheric conditions.</p>

<p>London's winter fog held particular appeal for Monet. The combination of industrial smoke and cold air created effects he couldn't find anywhere else in Europe. He wrote to his dealer that he needed to see all the paintings together, as none was truly finished until he could compare them. This methodical approach to serial painting defined his mature work.</p>

<p>The painting belongs to <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, though these late works push toward something more abstract. The <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> houses this and other Parliament paintings, offering visitors a chance to see how Monet transformed the same subject through different seasons and times of day.</p>`,
    faqs: [
      {
        question: "How many Houses of Parliament paintings did Monet create?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> painted approximately <strong>19 documented works</strong> of the Houses of Parliament, though the exact total remains uncertain. He worked on multiple canvases simultaneously during his London visits from 1899 to 1901.`
      },
      {
        question: "Where did Monet paint the Houses of Parliament from?",
        answer: `Monet painted from a terrace at <strong>St Thomas' Hospital</strong>, located across the Thames from Westminster. This vantage point gave him consistent views of the Parliament building under varying light and weather conditions.`
      },
      {
        question: "What art movement does this painting represent?",
        answer: `This work represents <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, though Monet's late Thames paintings push toward abstraction. The focus on atmospheric effects over architectural detail shows his mature style at its most developed.`
      }
    ]
  },

  // 5. Claude Monet - Houses of Parliament, Effect of Sunlight in the Fog
  {
    slug: 'claude-monet-houses-of-parliament-effect-of-sunlight-in-the-fog',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this atmospheric view of Westminster where <strong>sunlight cuts through dense fog</strong>, creating one of the most dramatic effects in his Thames series. The Parliament building appears almost dreamlike, its Gothic architecture dissolving into golden haze. Monet worked on these canvases during multiple London visits between 1899 and 1901.</p>

<p>This particular painting demonstrates why London's fog captivated Monet so completely. Industrial pollution mixed with river mist to create effects that transformed ordinary buildings into apparitions. He called London "superb" because of this atmosphere, though he found the rapidly changing conditions maddening to capture. By 1904, when these paintings were finally exhibited in Paris, critics hailed them as major achievements.</p>

<p>The work exemplifies <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> at its most atmospheric. Today it hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. For those drawn to the <a href="https://luxurywallart.com/collections/sunset-paintings" target="_blank" rel="noopener"><strong>warm tones of sunset and golden light</strong></a>, Monet's fog-shrouded Parliament remains endlessly appealing.</p>`,
    faqs: [
      {
        question: "Why did Monet paint fog so often?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> was fascinated by how <strong>fog transformed solid objects</strong> into ghostly silhouettes. London's industrial pollution created unique atmospheric effects he couldn't find elsewhere, making the city ideal for his studies of light.`
      },
      {
        question: "When were Monet's London paintings first exhibited?",
        answer: `The Thames series debuted at the <strong>Durand-Ruel gallery</strong> in Paris in May 1904. Critics praised the exhibition as a major event, and collectors responded enthusiastically to Monet's atmospheric vision of London.`
      },
      {
        question: "Where is this painting displayed?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum's collection includes several paintings from Monet's Houses of Parliament series.`
      }
    ]
  },

  // 6. Claude Monet - Houses of Parliament, Fog Effect
  {
    slug: 'claude-monet-houses-of-parliament-fog-effect',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> explored the dissolving effects of <strong>thick London fog</strong> in this painting from his Houses of Parliament series. Westminster's Gothic towers emerge as barely visible shapes through the murky atmosphere, their architectural details swallowed by haze. The Thames reflects what little light penetrates the fog, creating a nearly monochromatic scene.</p>

<p>Monet found London's fog conditions both inspiring and frustrating. Weather could shift within minutes, forcing him to switch between canvases constantly. He kept multiple paintings in progress simultaneously, returning to each when conditions matched. This working method, developed over years of serial painting, allowed him to capture the full range of London's atmospheric variations.</p>

<p>The painting represents mature <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, where the subject becomes almost secondary to the atmospheric effects surrounding it. It now resides at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>. Those interested in similar <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>grey atmospheric artwork</strong></a> will find Monet's fog studies particularly compelling.</p>`,
    faqs: [
      {
        question: "How did Monet paint changing fog conditions?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> worked on <strong>multiple canvases simultaneously</strong>, switching between them as light conditions changed. He kept careful track of which painting matched which atmospheric effect, sometimes working on dozens of canvases in a single session.`
      },
      {
        question: "What made London fog special for painters?",
        answer: `London's fog combined <strong>industrial smoke with river mist</strong>, creating unique yellowish haze that softened edges and transformed buildings into ghostly shapes. J.M.W. Turner and James Whistler had painted similar effects before Monet.`
      },
      {
        question: "Where can I see this painting?",
        answer: `This work is displayed at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, alongside other paintings from Monet's Thames series.`
      }
    ]
  },

  // 7. Claude Monet - Houses of Parliament, London, Sun Breaking Through
  {
    slug: 'claude-monet-houses-of-parliament-london-sun-breaking-through',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> captured one of his most dramatic atmospheric moments in this painting, where <strong>sunlight breaks through London's dense fog</strong>. The Houses of Parliament stand as a dark silhouette against the luminous sky, their Gothic spires reaching into the golden haze. This interplay of light and shadow represents Monet's Thames series at its most theatrical.</p>

<p>Monet painted this view from St Thomas' Hospital, working during autumn and winter months when fog was most reliable. He considered London's atmosphere unmatched anywhere in Europe. The city's industrial pollution, so harmful to residents, created the very effects that made these paintings possible. By the time he exhibited them in 1904, the Thames series had become among his most acclaimed works.</p>

<p>This masterwork of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, where visitors can experience Monet's remarkable ability to capture fleeting moments of light.</p>`,
    faqs: [
      {
        question: "What time of day did Monet prefer to paint Westminster?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> painted the Parliament at various times, but particularly favored <strong>afternoon and sunset</strong> when the sun's angle created dramatic backlighting through the fog. He began his first Parliament painting around 3:45 PM on February 13, 1900.`
      },
      {
        question: "Did Monet finish these paintings in London?",
        answer: `No. Monet made initial studies in London but continued refining the paintings at his <strong>Giverny studio</strong> in France. He even requested photographs of the buildings to help his memory, working on the series until 1903.`
      },
      {
        question: "Where is Sun Breaking Through displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. The museum's Impressionist collection includes multiple works from Monet's London series.`
      }
    ]
  },

  // 8. Claude Monet - Houses of Parliament, Sunset
  // Note: This slug doesn't exist in the database, skipping

  // 9. Claude Monet - Houses of Parliament, Sunset 02
  {
    slug: 'claude-monet-houses-of-parliament-sunset-02',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this <strong>sunset view of Westminster</strong> as part of his extensive Thames series. The fading light transforms the Gothic architecture into a dark mass against an orange and violet sky. Reflections shimmer on the water's surface, breaking the Parliament's silhouette into fragments of color.</p>

<p>Sunset paintings held particular importance within Monet's Parliament series. The low angle of evening light intensified the fog's golden quality, creating effects he found nowhere else. He worked obsessively on these variations, writing to his dealer that he couldn't send any paintings because none was truly complete without the others present for comparison.</p>

<p>This <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> work demonstrates Monet's mature command of color and atmosphere. It resides at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. Collectors drawn to <a href="https://luxurywallart.com/collections/sunset-paintings" target="_blank" rel="noopener"><strong>sunset paintings</strong></a> will recognize Monet's influence on this enduring subject.</p>`,
    faqs: [
      {
        question: "How many sunset versions did Monet paint?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> painted <strong>several sunset variations</strong> of the Houses of Parliament. The exact number varies depending on how the works are categorized, but sunset and twilight scenes form a significant portion of the nineteen documented Parliament paintings.`
      },
      {
        question: "Why did Monet paint the same subject repeatedly?",
        answer: `Monet used <strong>serial painting</strong> to explore how light transformed a single motif throughout different times and conditions. By comparing multiple versions, he could understand exactly how atmosphere affected color and form.`
      },
      {
        question: "Where is this sunset painting displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France, alongside other works from Monet's Thames series.`
      }
    ]
  },

  // 10. Claude Monet - Houses of Parliament, Westminster
  {
    slug: 'claude-monet-houses-of-parliament-westminster',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted Westminster's famous Gothic Revival architecture as part of his Thames series, produced during London visits between 1899 and 1901. The <strong>Houses of Parliament</strong> rise through atmospheric haze, their distinctive spires and towers rendered in Monet's characteristic broken brushwork. From his vantage point at St Thomas' Hospital, he captured how fog transformed solid stone into shimmering apparition.</p>

<p>All paintings in this series share roughly the same canvas size of 81 by 92 centimeters, yet each captures entirely different light conditions. Monet was particularly drawn to how London's famous fog created effects impossible to find elsewhere. The city's industrial atmosphere, a mix of coal smoke and river mist, became the true subject of these works.</p>

<p>This <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painting now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. The 2024 Courtauld exhibition "Monet in London" reunited many of these Thames paintings in London for the first time since their 1904 Paris debut.</p>`,
    faqs: [
      {
        question: "What is the Houses of Parliament building?",
        answer: `The <strong>Palace of Westminster</strong>, commonly called the Houses of Parliament, is Britain's seat of government. The Gothic Revival building features the famous <strong>Big Ben</strong> clock tower and was rebuilt after an 1834 fire.`
      },
      {
        question: "What size are Monet's Parliament paintings?",
        answer: `Most paintings in the series measure approximately <strong>81 x 92 cm</strong> (32 x 36 inches). This consistent size allowed <a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> to work on multiple canvases interchangeably as conditions changed.`
      },
      {
        question: "When were these paintings reunited in London?",
        answer: `In September 2024, the <strong>Courtauld Gallery</strong> hosted "Monet in London: Views of the Thames," reuniting 21 paintings from the series. It was the first time these works had been shown together in London, 120 years after their Paris debut.`
      }
    ]
  },

  // 11. Annibale Carracci - Hunting
  {
    slug: 'annibale-carracci-hunting',
    description: `<p><a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> painted this expansive hunting scene before 1595, during his Bolognese period. The large canvas, measuring 136 by 253 centimeters, depicts aristocrats and common folk alike engaged in the pursuit. <strong>Dogs, hunters, and forest</strong> fill the composition, which divides into distinct zones of activity. It might be said that with paintings like this, Carracci invented landscape as a subject for Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting.</p>

<p>This work arrived in France when Prince Camillo Pamphili gave it to Louis XIV in 1665. Along with its companion piece "Fishing," it received sumptuous gilt frames decorated with hunting attributes. These frames, among the finest from the Louis XIV period, remain with the paintings today. Charles Le Brun included both works in his 1683 inventory.</p>

<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris now displays this work, where visitors can see how Carracci appreciated nature for its own sake rather than merely as backdrop. His experiments here foreshadowed Poussin's classical landscapes while drawing from the Bassani family's popular tradition of animated countryside scenes.</p>`,
    faqs: [
      {
        question: "Where can I see Annibale Carracci's Hunting?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. It has been in the French royal collection since 1665 when Prince Camillo Pamphili gave it to Louis XIV.`
      },
      {
        question: "What is the companion painting to Hunting?",
        answer: `<a href="/apps/masterpieces/artist/annibale-carracci"><strong>Carracci</strong></a> painted <strong>"Fishing"</strong> as a companion piece. Both works received ornate gilt frames with thematic decorations and have remained together since entering the French royal collection.`
      },
      {
        question: "What makes this painting historically important?",
        answer: `This work helped establish <strong>landscape as a legitimate subject</strong> for Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting. Carracci showed nature for its own sake, not just as a setting for religious or mythological scenes.`
      },
      {
        question: "How big is this painting?",
        answer: `The canvas measures <strong>136 x 253 cm</strong> (approximately 53.5 x 99.5 inches). Its large scale allows for detailed depiction of multiple hunting activities across the woodland setting.`
      }
    ]
  },

  // 12. Henri de Toulouse-Lautrec - Hunting
  {
    slug: 'henri-toulouse-lautrec-hunting',
    description: `<p><a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted hunting and equestrian subjects extensively during his youth, before his famous Montmartre period. Born into aristocracy, Lautrec once quipped, "In our family, once baptised, one is in the saddle." His father was a Count who lived for hunting and riding, passions the young artist absorbed before leg injuries ended his own riding career.</p>

<p>Before entering formal artistic training in 1882, Lautrec painted equestrian and hunting scenes almost exclusively. He studied under René Princeteau, a successful sporting artist and family friend, learning to capture the movement of horses and hounds. These early works show remarkable skill at depicting action, a gift that would later serve him in capturing the dynamism of Parisian nightlife.</p>

<p>This <strong>hunting scene</strong> reflects the traditional subjects valued by the French aristocracy. Lautrec would later acknowledge these early paintings to friends, noting that his subjects were limited to "horses and sailors." The painting remains in a <strong>private collection</strong>, representative of a period before the artist found his distinctive voice in the cabarets of <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionism</strong></a>.</p>`,
    faqs: [
      {
        question: "Why did Toulouse-Lautrec paint hunting scenes?",
        answer: `<a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Toulouse-Lautrec</strong></a> came from an <strong>aristocratic family</strong> where hunting and riding were central. His father was a passionate hunter, and the young artist naturally absorbed these subjects before developing his signature Montmartre style.`
      },
      {
        question: "Who taught Toulouse-Lautrec to paint?",
        answer: `Before formal training, Lautrec studied with <strong>René Princeteau</strong>, a sporting artist and family friend specializing in equestrian subjects. He later studied at Léon Bonnat's and Fernand Cormon's ateliers in Paris.`
      },
      {
        question: "When did Toulouse-Lautrec stop painting hunting scenes?",
        answer: `After 1882, when Lautrec began formal Parisian training, <strong>equestrian subjects diminished</strong> in his work. He shifted focus to modern Parisian life, particularly the cabarets and dance halls of Montmartre.`
      }
    ]
  },

  // 13. Vittore Carpaccio - Hunting on the Lagoon
  {
    slug: 'vittore-carpaccio-hunting-on-the-lagoon',
    description: `<p><a href="/apps/masterpieces/artist/vittore-carpaccio"><strong>Vittore Carpaccio</strong></a> painted this scene of <strong>Venetian bird hunting</strong> between 1490 and 1495. Seven shallow-bottomed boats float across a glassy lagoon, their crews hunting cormorants with an unusual method. Archers use <strong>clay pellets rather than arrows</strong> to stun the birds without damaging their valuable plumage. A pellet caught mid-flight reveals the moment of action.</p>

<p>This panel has a remarkable history. Recent examination proved it was once part of a larger work, now split between two museums. "Hunting on the Lagoon" connected to "Two Venetian Ladies," currently at the Correr Museum in Venice. The wood grain matches perfectly, and an empty flower stem in the Venice panel aligns with a blossom in the Getty's piece. The hinges on the Getty panel suggest it once served as a decorative shutter or cabinet door.</p>

<p>The reverse features a <strong>trompe-l'oeil letter rack</strong>, likely the earliest small-scale example since antiquity. This <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> treasure resides at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles, where visitors can examine both sides of this double-sided masterwork.</p>`,
    faqs: [
      {
        question: "Where can I see Hunting on the Lagoon?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. Its companion piece, "Two Venetian Ladies," is at the Correr Museum in Venice.`
      },
      {
        question: "Why did hunters use clay pellets?",
        answer: `Hunters used <strong>clay pellets instead of arrows</strong> to stun <strong>cormorants</strong> without piercing their skin. The undamaged plumage was valuable, so this method preserved the birds' commercial worth.`
      },
      {
        question: "What is painted on the back of this panel?",
        answer: `The reverse shows a <strong>trompe-l'oeil letter rack</strong>, considered the earliest small-scale illusionistic painting since antiquity. The panel's hinges suggest it may have been a cabinet door or window shutter.`
      },
      {
        question: "Who was Vittore Carpaccio?",
        answer: `<a href="/apps/masterpieces/artist/vittore-carpaccio"><strong>Vittore Carpaccio</strong></a> was a leading Venetian painter of the late 15th century, considered second only to Giovanni Bellini among his contemporaries. He's known for narrative paintings of Venetian life.`
      }
    ]
  },

  // 14. John Martin - Hyde Park
  {
    slug: 'john-martin-hyde-park',
    description: `<p><a href="/apps/masterpieces/artist/john-martin"><strong>John Martin</strong></a> painted this tranquil view of <strong>Hyde Park</strong> in 1815, depicting a wooded area with a lake in the foreground. A solitary figure walks with a dog through the misty morning landscape. Dawn light filters through the trees, creating reflections on the still water. This quieter subject contrasts sharply with Martin's later apocalyptic paintings.</p>

<p>Martin would become celebrated for vast, melodramatic biblical scenes like "The Destruction of Sodom and Gomorrah." Thomas Lawrence called him "the most popular painter of his day" in 1821. But in 1815, Martin was still developing his style, sending works to the Royal Academy and building his reputation through landscapes and more modest subjects.</p>

<p>This <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> landscape now hangs at the <a href="/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut, part of the Paul Mellon Collection. For those drawn to <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature scenes</strong></a> with atmospheric morning light, this early Martin offers a rare glimpse of the artist before his turn toward the sublime.</p>`,
    faqs: [
      {
        question: "Where can I see John Martin's Hyde Park?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut. It's part of the Paul Mellon Collection of British art.`
      },
      {
        question: "What is John Martin famous for?",
        answer: `<a href="/apps/masterpieces/artist/john-martin"><strong>John Martin</strong></a> became famous for <strong>vast apocalyptic paintings</strong> of biblical subjects. Works like "The Destruction of Sodom and Gomorrah" made him one of the most popular British painters of the 1820s.`
      },
      {
        question: "What art movement does this painting belong to?",
        answer: `Hyde Park represents English <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>, with its emphasis on nature, atmosphere, and emotional response to landscape. The style was fashionable in Britain during the Regency period from 1812 onwards.`
      },
      {
        question: "When was this painting created?",
        answer: `Martin painted Hyde Park in <strong>1815</strong>, relatively early in his career. This was before he developed the monumental apocalyptic style that would make him famous in the following decade.`
      }
    ]
  },

  // 15. Francesco Furini - Hylas and the Nymphs
  {
    slug: 'hylas-nymphs-furini',
    description: `<p><a href="/apps/masterpieces/artist/francesco-furini"><strong>Francesco Furini</strong></a> painted this mythological scene around 1630, depicting the moment when <strong>nymphs abduct the beautiful youth Hylas</strong>. Six female nudes surround the young man as he kneels at their sacred spring. The story comes from the voyage of the Argonauts: Hercules sent his squire to fetch water, but the nymphs, seized by desire at the sight of his beauty, pulled him into the depths.</p>

<p>Furini was renowned for his sensual sfumato technique, particularly in female nudes. Art historian Sydney Freedberg described his style as filled with "morbid sensuality." This early work demonstrates Furini's skill at painting flesh tones and the soft modeling that characterized his mature paintings. In the 1630s, his style resembled that of Guido Reni, the leading Bolognese master.</p>

<p>The painting measures an impressive <strong>230 by 261 centimeters</strong> and hangs at <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence. Furini later received commissions from Ferdinando II de' Medici to paint frescoes at the same palace. His combination of mythological subjects with sensual figure painting found ready acceptance in Florentine society of the period.</p>`,
    faqs: [
      {
        question: "Where can I see Hylas and the Nymphs by Furini?",
        answer: `This large painting hangs at <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence, Italy, in the Palatine Gallery. The museum houses other works by Furini as well as frescoes he painted for the Medici.`
      },
      {
        question: "What is the story of Hylas and the Nymphs?",
        answer: `<strong>Hylas</strong> was the young squire of Hercules during the voyage of the Argonauts. When sent to find water, nymphs at a sacred spring became infatuated with his beauty and pulled him beneath the water, never to be seen again.`
      },
      {
        question: "How big is this painting?",
        answer: `The canvas measures <strong>230 x 261 cm</strong> (approximately 90 x 103 inches). This large scale allowed <a href="/apps/masterpieces/artist/francesco-furini"><strong>Furini</strong></a> to paint six life-sized female nudes surrounding the figure of Hylas.`
      },
      {
        question: "What style did Francesco Furini paint in?",
        answer: `Furini worked in the Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style, known for his sensual sfumato technique in painting flesh. His style in the 1630s resembled that of Guido Reni.`
      }
    ]
  }
];

async function main() {
  console.log(`Updating ${artworkUpdates.length} artworks...`);

  for (const artwork of artworkUpdates) {
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

  console.log('\nDone!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
