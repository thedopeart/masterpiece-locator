const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "salvator-rosa-portrait-of-a-man": {
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this brooding portrait sometime in the mid-seventeenth century, capturing a figure whose identity has been lost to time. The sitter gazes directly at the viewer with dark, penetrating eyes, his face emerging from deep shadow in the manner Rosa learned from studying Neapolitan tenebrism. A dark cloak or robe frames the figure against a neutral background.</p>

<p>Rosa was known primarily for his wild <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> and battle scenes, but his portraits reveal equal psychological depth. The <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> artist spent much of his career in Rome and Florence, cultivating a reputation as a philosopher-painter. This work now hangs at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who painted Portrait of a Man at the Hermitage?", answer: `<a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this work during the mid-1600s. The Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> artist was also a poet, satirist, and musician.` },
      { question: "Where is Salvator Rosa's Portrait of a Man displayed?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia, one of the world's largest art collections.` },
      { question: "What style is Portrait of a Man?", answer: `The painting uses dramatic chiaroscuro typical of Italian Baroque portraiture. Rosa studied <strong>Neapolitan tenebrism</strong>, which emphasizes strong contrasts between light and shadow.` }
    ]
  },

  "salvator-rosa-harbour-with-ruins": {
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this atmospheric scene of a Mediterranean harbor surrounded by ancient ruins, combining his love of wild nature with classical architecture. Ships anchor near crumbling columns and broken walls, while small figures move among the debris of a once-great civilization. The sky fills much of the composition, streaked with clouds that cast shifting light across the water.</p>

<p>Rosa pioneered the genre of <strong>"savage landscapes"</strong> featuring bandits, rocky outcrops, and storm-tossed seas. This harbor scene offers a gentler mood but retains his characteristic melancholy. The ruins evoke the passage of time and the impermanence of human achievement. The painting belongs to the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary.</p>`,
    faqs: [
      { question: "What does Harbour with Ruins depict?", answer: `The painting shows a <strong>Mediterranean harbor</strong> with ancient ruins, ships, and small figures. <a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> combined landscape with classical architecture to create a meditative scene.` },
      { question: "Where is Salvator Rosa's Harbour with Ruins?", answer: `The painting is held at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary, which has a strong collection of Italian Baroque paintings.` },
      { question: "What was Salvator Rosa known for painting?", answer: `Rosa was famous for wild, <strong>rugged landscapes</strong> featuring bandits, battles, and stormy skies. He also painted portraits, allegories, and scenes from witchcraft.` }
    ]
  },

  "rembrandt-the-blind-fiddler": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this intimate scene of a blind street musician playing his fiddle, probably in the 1630s during his early career in Amsterdam. The fiddler stands with his instrument tucked under his chin, his sightless eyes turned upward as he plays. A dog sits at his feet, and a few coins suggest passersby have rewarded his music.</p>

<p>Rembrandt frequently depicted beggars, street performers, and the poor with dignity rather than condescension. His interest in society's margins reflected both <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre traditions and his personal empathy. The work belongs to the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What does Rembrandt's Blind Fiddler show?", answer: `The work depicts a <strong>blind street musician</strong> playing his fiddle, with a dog at his feet. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> often portrayed marginal figures with empathy and dignity.` },
      { question: "Where is The Blind Fiddler displayed?", answer: `The work is held at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London as part of their Dutch Old Master collection.` },
      { question: "When did Rembrandt create The Blind Fiddler?", answer: `Rembrandt likely created this work in the <strong>1630s</strong> during his early years in Amsterdam, when he produced many genre scenes and character studies.` }
    ]
  },

  "rembrandt-the-persian": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this striking figure dressed in exotic Eastern garments, part of his lifelong fascination with costume and character. The subject wears a richly textured robe and elaborate headdress, suggesting a Persian nobleman or merchant. Whether painted from life or imagination, the work demonstrates Rembrandt's skill at rendering fabrics and his interest in the foreign and unusual.</p>

<p>Amsterdam in the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> was a hub of international trade, exposing artists to goods and people from across the globe. Rembrandt collected costumes and props that appear throughout his work. This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who is depicted in Rembrandt's The Persian?", answer: `The subject's identity is unknown. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> likely painted an <strong>anonymous model</strong> dressed in exotic costume from his collection of foreign props and fabrics.` },
      { question: "Where is Rembrandt's The Persian displayed?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London among their collection of Dutch Golden Age masterworks.` },
      { question: "Why did Rembrandt paint exotic figures?", answer: `Rembrandt collected <strong>costumes and props</strong> from around the world. Amsterdam's global trade exposed him to diverse cultures, fueling his interest in foreign subjects.` }
    ]
  },

  "still-life-fruit-lobster": {
    description: `<p><a href="/apps/masterpieces/artist/jan-davidsz-de-heem"><strong>Jan Davidsz. de Heem</strong></a> painted this lavish still life in 1648, displaying the abundance that defined Dutch prosperity during the Golden Age. A brilliant red lobster dominates the composition, surrounded by lemons, grapes, oysters, and a nautilus shell cup. Light plays across textures: the lobster's hard shell, the soft bloom on grapes, the gleam of silver.</p>

<p>De Heem spent much of his career in Antwerp, where he combined Dutch precision with Flemish <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a> opulence. His still lifes fetched enormous prices, and he trained numerous students. Wealthy patrons displayed such paintings to demonstrate their taste and worldly success. This work belongs to the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted Still Life with Fruit and Lobster?", answer: `<a href="/apps/masterpieces/artist/jan-davidsz-de-heem"><strong>Jan Davidsz. de Heem</strong></a> painted this work in 1648. He was the leading still life painter of the Dutch Golden Age, famous for his lavish compositions.` },
      { question: "Where is Still Life with Fruit and Lobster?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a> in Paris, part of their Northern European painting collection.` },
      { question: "What makes Jan Davidsz. de Heem's still lifes special?", answer: `De Heem combined <strong>Dutch precision</strong> with Flemish richness. His works display incredible detail in textures: gleaming silver, translucent grapes, and hard crustacean shells.` }
    ]
  },

  "salvator-rosa-selfportrait-as-a-philosopher": {
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted himself as a brooding philosopher around 1645, holding a tablet inscribed with the Latin motto "Aut tace aut loquere meliora silentio" ("Be silent, unless your speech is better than silence"). He stands silhouetted against a stormy sky, his dark eyes fixed on the viewer with defiant intensity. The tight-lipped expression suggests intellect barely containing itself.</p>

<p>Rosa was unique among <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters for his literary and philosophical ambitions. He wrote satires, composed music, and performed on stage. This self-portrait declares his identity as a thinker, not merely a craftsman. The work hangs at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London alongside a companion piece depicting his lover as Poetry.</p>`,
    faqs: [
      { question: "What does Rosa's Self-Portrait inscription mean?", answer: `The Latin motto <strong>"Aut tace aut loquere meliora silentio"</strong> means "Be silent, unless your speech is better than silence." It reflects Rosa's philosophical and literary identity.` },
      { question: "Where is Salvator Rosa's Self-Portrait as a Philosopher?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London, alongside a companion piece showing his lover as Poetry.` },
      { question: "Why did Rosa paint himself as a philosopher?", answer: `<a href="/apps/masterpieces/artist/salvator-rosa"><strong>Rosa</strong></a> wanted recognition as an intellectual, not just a painter. He wrote <strong>satires</strong>, composed music, and cultivated a reputation as a thinker.` }
    ]
  },

  "adolph-menzel-living-room-with-the-artist39s-sister": {
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> captured this intimate domestic scene showing his sister in a Berlin living room, lit by soft daylight filtering through a window. She sits absorbed in some activity, perhaps reading or sewing, while the room around her is rendered with extraordinary attention to detail. Furniture, wallpaper, and scattered objects create a portrait of comfortable middle-class German life.</p>

<p>Menzel was Germany's most celebrated painter of the nineteenth century, known for historical scenes and portraits. But his private studies of family and interiors reveal an artist ahead of his time, anticipating <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> in their attention to natural light. This painting hangs at the <a href="/apps/masterpieces/museum/neue-pinakothek-munich-germany"><strong>Neue Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Who painted Living Room with the Artist's Sister?", answer: `<a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this scene of his sister in their Berlin home. He was Germany's most celebrated nineteenth-century painter.` },
      { question: "Where is Menzel's Living Room painting displayed?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/neue-pinakothek-munich-germany"><strong>Neue Pinakothek</strong></a> in Munich, part of their collection of nineteenth-century German art.` },
      { question: "What style is Adolph Menzel's interior painting?", answer: `Menzel's private interiors anticipated <strong>Impressionism</strong> in their treatment of natural light. He captured everyday domestic life with extraordinary precision.` }
    ]
  },

  "samuel-palmer-the-gleaning-field": {
    description: `<p><a href="/apps/masterpieces/artist/samuel-palmer"><strong>Samuel Palmer</strong></a> painted this visionary harvest scene during his "Shoreham period," when he produced his most celebrated works. Peasants gather leftover grain in a field bathed in golden evening light, surrounded by trees heavy with foliage. The composition glows with an almost supernatural radiance, transforming a humble rural activity into something sacred.</p>

<p>Palmer was deeply influenced by William Blake, whom he met in 1824 and revered as a spiritual father. His Shoreham landscapes combine close observation of the Kent countryside with mystical intensity. Critics ignored his work during his lifetime, but later generations recognized his genius. The painting belongs to <a href="/apps/masterpieces/museum/tate-britain-london-uk"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      { question: "Who painted The Gleaning Field?", answer: `<a href="/apps/masterpieces/artist/samuel-palmer"><strong>Samuel Palmer</strong></a> painted this work during his celebrated Shoreham period. He was a visionary British artist deeply influenced by <strong>William Blake</strong>.` },
      { question: "Where is Samuel Palmer's Gleaning Field displayed?", answer: `The painting belongs to <a href="/apps/masterpieces/museum/tate-britain-london-uk"><strong>Tate Britain</strong></a> in London, which holds the most significant collection of Palmer's visionary landscapes.` },
      { question: "What is the Shoreham period?", answer: `Palmer spent years in the village of <strong>Shoreham, Kent</strong>, producing intensely mystical landscapes. This era (1826-1835) produced his most celebrated and original work.` }
    ]
  },

  "sassetta-the-meeting-of-st-anthony-and-st-paul": {
    description: `<p><a href="/apps/masterpieces/artist/sassetta"><strong>Sassetta</strong></a> painted this charming narrative panel around 1440, depicting the legendary meeting between two desert hermits: Saint Anthony and Saint Paul of Thebes. The story unfolds across a continuous landscape, with Anthony encountering a centaur on his journey before finally embracing Paul. Delicate trees, rocky outcrops, and tiny birds fill the <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>natural</strong></a> setting.</p>

<p>This tempera panel originally formed part of a predella beneath a larger altarpiece. Sassetta worked in Siena during the early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, maintaining the decorative grace of medieval painting while absorbing new ideas. The work hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "Who painted The Meeting of St. Anthony and St. Paul?", answer: `<a href="/apps/masterpieces/artist/sassetta"><strong>Sassetta</strong></a> (Stefano di Giovanni) created this tempera panel around 1440. He was a leading Sienese painter of the early Renaissance.` },
      { question: "What story does the Sassetta panel tell?", answer: `It depicts <strong>Saint Anthony's journey</strong> to meet Saint Paul of Thebes, the first Christian hermit. The narrative shows Anthony encountering a centaur along the way.` },
      { question: "Where is The Meeting of St. Anthony and St. Paul?", answer: `The panel hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, D.C., as part of their Italian Renaissance collection.` }
    ]
  },

  "rembrandt-the-return-of-the-prodigal-son": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this etching of the prodigal son's return around 1654, a subject he explored throughout his career. The ragged son kneels before his father, who places both hands on the young man's shoulders in a gesture of forgiveness. Other figures watch from the shadows, including the resentful older brother mentioned in the biblical parable.</p>

<p>Rembrandt returned to this theme in his final years, creating a monumental painting at the <a href="/apps/masterpieces/museum/hermitage"><strong>Hermitage</strong></a>. This earlier work shows his virtuosity with line and tone. The print is held by the Cleveland Museum of Art, part of their collection of <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> prints and drawings.</p>`,
    faqs: [
      { question: "What story does Rembrandt's Return of the Prodigal Son tell?", answer: `It depicts the <strong>biblical parable</strong> from Luke 15: a wasteful son returns home in rags, and his father forgives him with open arms instead of condemnation.` },
      { question: "Where is this version of The Return of the Prodigal Son?", answer: `This etching is at the <strong>Cleveland Museum of Art</strong>. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>'s famous late painting of the same subject hangs at the Hermitage.` },
      { question: "Why did Rembrandt paint this subject multiple times?", answer: `The theme of <strong>forgiveness and redemption</strong> resonated with Rembrandt personally. He explored it in etchings, drawings, and paintings across several decades.` }
    ]
  },

  "sebastiano-del-piombo-the-holy-family-with-st-catherine-st-sebastian-and": {
    description: `<p><a href="/apps/masterpieces/artist/sebastiano-del-piombo"><strong>Sebastiano del Piombo</strong></a> painted this grand religious composition showing the Virgin and Child surrounded by saints and a kneeling donor. Saint Catherine holds her identifying attribute, and the arrow-pierced Saint Sebastian displays his muscular torso. Rich colors and monumental forms reflect Sebastiano's training in Venice and his later collaboration with Michelangelo in Rome.</p>

<p>Sebastiano began as a student of Giovanni Bellini and Giorgione before moving to Rome, where Michelangelo provided drawings for several of his works. The artist's nickname "del Piombo" came from his appointment as keeper of the papal seals. This <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> altarpiece hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted The Holy Family with Saints at the Louvre?", answer: `<a href="/apps/masterpieces/artist/sebastiano-del-piombo"><strong>Sebastiano del Piombo</strong></a> painted this work. He trained in Venice before moving to Rome, where he collaborated with Michelangelo.` },
      { question: "Which saints appear in this painting?", answer: `<strong>Saint Catherine</strong> and <strong>Saint Sebastian</strong> flank the Holy Family, along with an unidentified donor figure kneeling in devotion.` },
      { question: "Where is Sebastiano del Piombo's Holy Family displayed?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris as part of their Italian Renaissance collection.` }
    ]
  },

  "rembrandt-old-man": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this study of an elderly man in 1631, during his early years when he was establishing his reputation through character studies and portraits. The sitter's weathered face emerges from shadow, every wrinkle and fold captured with precision. Whether a commissioned portrait or a study from life, the work demonstrates Rembrandt's early mastery of human physiognomy.</p>

<p>Rembrandt frequently used elderly models, finding in aged faces a depth and character that younger subjects lacked. His <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> contemporaries shared this interest, but none matched his psychological penetration. The painting belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "When did Rembrandt paint Old Man?", answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted this work in <strong>1631</strong>, early in his career when he was mastering portraiture and character studies in Amsterdam.` },
      { question: "Where is Rembrandt's Old Man displayed?", answer: `The painting belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, part of their collection of Dutch Golden Age masterworks.` },
      { question: "Why did Rembrandt paint elderly subjects?", answer: `Rembrandt found <strong>aged faces</strong> more expressive than younger subjects. Wrinkles, folds, and weathered skin offered rich material for his studies of character and light.` }
    ]
  },

  "theodore-gericault-horse-leaving-a-stable": {
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this dynamic study of a horse emerging from darkness into light, showcasing his lifelong obsession with equine subjects. The animal's muscular form fills the composition, its coat gleaming as it steps forward. A groom steadies the horse, dwarfed by its powerful presence.</p>

<p>Géricault was among the greatest <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse painters</strong></a> in history, combining anatomical knowledge with <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> intensity. He studied horses obsessively, filling notebooks with sketches and spending hours in stables. A riding accident ultimately contributed to his early death at thirty-two. This painting hangs at the Musée Condé in Chantilly.</p>`,
    faqs: [
      { question: "Who painted Horse Leaving a Stable?", answer: `<a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this work. He was obsessed with horses, filling notebooks with equine studies throughout his short career.` },
      { question: "Where is Géricault's Horse Leaving a Stable?", answer: `The painting hangs at the <strong>Musée Condé</strong> in Chantilly, France, which houses an important collection of French painting.` },
      { question: "What movement was Géricault part of?", answer: `Géricault was a pioneer of <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>. His dramatic compositions and emotional intensity influenced Delacroix and later French painters.` }
    ]
  },

  "adolph-menzel-th233226tre-du-gymnase-in-paris": {
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this vibrant scene of a Parisian theater interior during a performance, capturing the gaslit atmosphere and crowded audience. The stage blazes with light while spectators in evening dress fill the boxes and stalls. Menzel renders the scene with his characteristic precision, every face and costume distinct.</p>

<p>Menzel visited Paris several times, documenting its cultural life with an outsider's fascination. The Théâtre du Gymnase specialized in comedies and vaudevilles popular with the bourgeoisie. This work anticipates <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> treatments of modern entertainment by Degas and Renoir. The painting belongs to the <a href="/apps/masterpieces/museum/staatliche-museen-zu-berlin-berlin-germany"><strong>Staatliche Museen zu Berlin</strong></a>.</p>`,
    faqs: [
      { question: "What does Menzel's Théâtre du Gymnase painting show?", answer: `The painting captures a <strong>Parisian theater performance</strong> with gaslight illumination, crowded audience, and performers on stage. Menzel documented French cultural life during his visits.` },
      { question: "Where is Adolph Menzel's theater painting displayed?", answer: `The painting belongs to the <a href="/apps/masterpieces/museum/staatliche-museen-zu-berlin-berlin-germany"><strong>Staatliche Museen zu Berlin</strong></a>, which holds the largest collection of Menzel's work.` },
      { question: "How does this painting relate to Impressionism?", answer: `Menzel's theater scene anticipates later <strong>Impressionist subjects</strong> by Degas and Renoir, who also painted modern entertainment venues and audiences.` }
    ]
  },

  "rembrandt-the-mill": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this brooding landscape between 1645 and 1648, depicting a windmill silhouetted against a dramatic evening sky. The last rays of sunlight illuminate clouds while the mill stands in dark relief on a promontory above water. Small figures, including a woman washing linen, occupy the foreground.</p>

<p>Attribution of this work has been debated, though recent scholarship has restored it to Rembrandt's hand. The painting deeply influenced later artists, including J.M.W. Turner, who admired its atmospheric power. It passed through the famous Orleans Collection before arriving at the <a href="/apps/masterpieces/museum/permanent-collection-of-the-national-gallery-of-ar"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "What does Rembrandt's The Mill depict?", answer: `The painting shows a <strong>Dutch windmill</strong> silhouetted against an evening sky, with figures along the water's edge. It's one of Rembrandt's rare pure landscapes.` },
      { question: "Where is Rembrandt's The Mill displayed?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/permanent-collection-of-the-national-gallery-of-ar"><strong>National Gallery of Art</strong></a> in Washington, D.C., formerly part of the Orleans Collection.` },
      { question: "Which artists did The Mill influence?", answer: `<strong>J.M.W. Turner</strong> particularly admired this work. Its dramatic atmosphere and treatment of light influenced generations of Romantic landscape painters.` }
    ]
  },

  "theodore-gericault-the-wounded-cuirassier": {
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this monumental image of defeat in just three weeks for the Salon of 1814. A cuirassier (armored cavalry soldier) descends a slope, using his sword as a crutch while his nervous <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> strains behind him. No visible wound appears; the injury seems internal, perhaps to his pride or spirit.</p>

<p>Géricault exhibited this work as France faced military collapse: Paris had fallen, Napoleon was exiled, and national morale lay shattered. Critics disliked its somber mood, expecting military glory rather than defeat. Disappointed, Géricault joined the army briefly before leaving for Rome. The painting established <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>'s emotional intensity and now hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>.</p>`,
    faqs: [
      { question: "When did Géricault paint The Wounded Cuirassier?", answer: `Géricault painted this work in just <strong>three weeks</strong> for the Salon of 1814, as France faced military defeat and Napoleon's exile.` },
      { question: "Where is The Wounded Cuirassier displayed?", answer: `The life-size painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, among the museum's collection of French Romantic painting.` },
      { question: "Why was The Wounded Cuirassier controversial?", answer: `Critics expected <strong>heroic military scenes</strong>, not images of defeat. The painting's somber mood reflected France's national trauma but disappointed Salon audiences.` }
    ]
  },

  "rembrandt-jan-six": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait of his friend and patron Jan Six in 1654, capturing the Amsterdam merchant in a moment of casual action. Six pulls on a glove, preparing to go out, his red cloak thrown over one shoulder and his fair hair beneath a black hat. The informal pose gives the portrait unusual immediacy and life.</p>

<p>Six had lent Rembrandt 1,000 guilders the year before; this portrait may have served as partial repayment. The two men shared intellectual interests and genuine friendship. Some call it the most beautiful portrait ever painted. The work has remained with Six's descendants for nearly four centuries and hangs in the private Six Collection in Amsterdam, occasionally loaned for exhibitions.</p>`,
    faqs: [
      { question: "Who was Jan Six?", answer: `Jan Six was an Amsterdam <strong>cloth merchant, poet, and patron</strong> who befriended <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>. He later married the mayor's daughter and became mayor himself.` },
      { question: "Where can I see Rembrandt's Portrait of Jan Six?", answer: `The painting remains in the private <strong>Six Collection</strong> in Amsterdam, owned by Jan Six's descendants. It's rarely loaned to museums.` },
      { question: "What makes this portrait special?", answer: `Rembrandt painted Six in a <strong>moment of action</strong>, pulling on his glove. This informal pose gives the portrait unusual immediacy and psychological insight.` }
    ]
  },

  "rembrandt-the-flight-into-egypt-crossing-a-brook": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this intimate scene of the Holy Family's flight to Egypt, showing Mary on a donkey with the infant Jesus while Joseph leads them across a shallow brook. The landscape surrounds them with dense foliage and trees, the figures small within a natural setting that feels distinctly Dutch rather than biblical.</p>

<p>Rembrandt produced many prints on this subject, varying the composition and mood. His etchings were highly prized by collectors during his lifetime and remain sought after today. The artist's virtuosity with line creates remarkable tonal gradations from black to white. This impression belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What does Rembrandt's Flight into Egypt show?", answer: `The etching depicts the <strong>Holy Family fleeing to Egypt</strong>: Mary on a donkey with infant Jesus, Joseph leading them across a brook surrounded by trees.` },
      { question: "Where is this Flight into Egypt print?", answer: `This impression is at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, part of their collection of Rembrandt prints and drawings.` },
      { question: "Why did Rembrandt make so many prints?", answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> etchings were <strong>highly collectible</strong> during his lifetime. Prints allowed him to reach more buyers than unique paintings could.` }
    ]
  },

  "thomas-cole-kaaterskill-falls": {
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this view of Kaaterskill Falls in 1826, launching what historians call "the first genuinely American school of painting." The two-tiered waterfall plunges through autumn foliage in the Catskill Mountains, framed by rocky cliffs and ancient trees. A solitary Native American figure perches on a ledge, contemplating the wild scene.</p>

<p>Cole had visited the falls in 1825, but tourists had already built a viewing platform at the top. He deleted all evidence of human development, emphasizing the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape's</strong></a> primitive sublimity. Daniel Wadsworth commissioned this version, which he later bequeathed to the <a href="/apps/masterpieces/museum/wadsworth-atheneum-hartford-ct-us"><strong>Wadsworth Atheneum</strong></a>, America's oldest public art museum.</p>`,
    faqs: [
      { question: "Who painted Kaaterskill Falls?", answer: `<a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this work in 1826. He founded the <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a>, America's first major art movement.` },
      { question: "Where is Thomas Cole's Kaaterskill Falls?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/wadsworth-atheneum-hartford-ct-us"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, America's oldest public art museum.` },
      { question: "Why is this painting historically important?", answer: `Cole's Catskill paintings launched <strong>American landscape painting</strong> as a serious art form. His 1825 trip up the Hudson is considered a founding moment.` }
    ]
  },

  "thomas-cole-scene-from-the-last-of-the-mohicans-cora-kneeling-": {
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this dramatic scene from James Fenimore Cooper's 1826 novel "The Last of the Mohicans," showing the heroine Cora kneeling before the aged chief Tamenund. The figures gather on a rocky outcrop surrounded by wild American <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a>, the confrontation between civilizations played out against towering cliffs and distant mountains.</p>

<p>Cole admired Cooper's romantic vision of America's vanishing frontier and painted several literary subjects alongside his landscapes. The <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a> painters shared Cooper's nostalgia for wilderness untouched by civilization. This painting hangs at the <a href="/apps/masterpieces/museum/wadsworth-atheneum-hartford-ct-us"><strong>Wadsworth Atheneum</strong></a> in Hartford.</p>`,
    faqs: [
      { question: "What novel inspired this Thomas Cole painting?", answer: `Cole depicted a scene from James Fenimore Cooper's <strong>"The Last of the Mohicans"</strong> (1826), showing Cora pleading before the Delaware chief Tamenund.` },
      { question: "Where is Cole's Last of the Mohicans painting?", answer: `The painting hangs at the <a href="/apps/masterpieces/museum/wadsworth-atheneum-hartford-ct-us"><strong>Wadsworth Atheneum</strong></a> in Hartford, alongside other <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a> works.` },
      { question: "Did Thomas Cole paint literary subjects often?", answer: `Cole painted several <strong>literary and allegorical</strong> subjects alongside pure landscapes, including scenes from the Bible and Byron's poetry.` }
    ]
  }
};

async function main() {
  console.log("Updating 20 artworks with descriptions and FAQs...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artworkUpdates)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.title}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artworks`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
