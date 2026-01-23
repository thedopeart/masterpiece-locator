const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'gustav-klimt-painted-composition-design-to-medicine',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this composition study for "Medicine," one of three monumental ceiling paintings commissioned for the University of Vienna's Great Hall in 1894. The final version, completed in 1907, sparked one of the greatest art scandals in Austrian history. When Klimt unveiled Medicine at the 1901 Secession Exhibition, critics attacked it for "pornography" and "perverted excess."</p>
<p>The painting showed a column of semi-nude figures representing the river of life. A young nude woman floated in space with a newborn at her feet, while a <strong>skeleton symbolized death</strong>. At the bottom stood Hygieia, goddess of health, with the Aesculapian snake around her arm and the cup of Lethe in her hand. She turned her back on mankind. Rather than celebrating Vienna's medical achievements, Klimt exposed the limits of healing and the inevitability of death.</p>
<p>Eighty-seven faculty members protested. The scandal reached the Austrian Parliament, the first time a cultural debate had been raised there. In 1943, the finished painting was moved to Schloss Immendorf castle for safekeeping during the war. On May 7, 1945, retreating SS forces set fire to the castle, destroying all three faculty paintings. Only sketches and black-and-white photographs survive, with one color detail showing <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Hygieia in red and gold</strong></a>.</p>`,
    faqs: [
      {
        question: "What happened to Klimt's Medicine painting?",
        answer: `The original painting was <strong>destroyed in 1945</strong> when retreating SS forces burned Schloss Immendorf castle in Austria. Only preparatory studies, sketches, and photographs survive today.`
      },
      {
        question: "Why was Medicine controversial?",
        answer: `<a href="/apps/masterpieces/artist/gustav-klimt"><strong>Klimt</strong></a> depicted nude figures and showed medicine's <strong>limits rather than triumphs</strong>. The painting triggered protests from 87 faculty members and debates in Austria's Parliament.`
      },
      {
        question: "What did the painting depict?",
        answer: `The composition showed the <strong>river of life</strong> with nude figures, a skeleton representing death, and Hygieia (goddess of health) turning her back on humanity.`
      }
    ]
  },
  {
    slug: 'luca-signorelli-pair-of-apostles-in-dispute',
    description: `<p><a href="/apps/masterpieces/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> painted this fresco between 1481 and 1485 in the Sacristy of St. John at the Basilica della Santa Casa in Loreto, Italy. The composition shows two apostles engaged in animated discussion, their gestures and expressions capturing the intensity of theological debate. This panel belongs to a larger program depicting five pairs of apostles on the upper walls of the octagonal sacristy.</p>
<p>The fresco cycle represents some of the earliest work in the basilica's lavish interior decoration. Signorelli painted the vault with eight spiral angel musicians, followed by the four Evangelists and Doctors of the Church in alternating segments. The walls feature scenes of the <strong>Conversion of Saint Paul</strong> and the Doubting of Saint Thomas alongside the apostle pairs.</p>
<p>Scholars detect the influence of Bramante, Perugino, and Andrea del Verrocchio in these frescoes. Some believe Signorelli completed them after his work on the Sistine Chapel around 1485. The <a href="/apps/masterpieces/museum/basilica-della-santa-casa-loreto-italy"><strong>Basilica della Santa Casa</strong></a> was built to enshrine what tradition held was the Virgin Mary's house, brought from the Holy Land by angels in the fourteenth century. The Renaissance portal of the sacristy, with its carved and inlaid woodwork, is attributed to Benedetto da Maiano.</p>`,
    faqs: [
      {
        question: "Where is this fresco located?",
        answer: `The fresco is in the Sacristy of St. John at the <a href="/apps/masterpieces/museum/basilica-della-santa-casa-loreto-italy"><strong>Basilica della Santa Casa</strong></a> in Loreto, Italy, a major pilgrimage site housing the Virgin Mary's reputed house.`
      },
      {
        question: "When did Signorelli paint this fresco?",
        answer: `<a href="/apps/masterpieces/artist/luca-signorelli"><strong>Signorelli</strong></a> created this fresco between <strong>1481 and 1485</strong>, possibly after completing his work on the Sistine Chapel in Rome.`
      },
      {
        question: "What other scenes did Signorelli paint in this sacristy?",
        answer: `The sacristy includes the <strong>Conversion of Saint Paul</strong>, Doubting of Saint Thomas, eight angel musicians, and the four Evangelists alongside five pairs of apostles.`
      }
    ]
  },
  {
    slug: 'claude-monet-palazzo-da-mula-at-venice',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of a Venetian palazzo in 1908, during what would be his last trip outside France. The canvas shows the Gothic facade of a building rising directly from the canal, rendered almost entirely in tones of topaz, lapis, and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>sky blue</strong></a>. Brushstrokes remain visible throughout, blending to create a hazy, dreamlike atmosphere.</p>
<p>Monet arrived in Venice hesitant to paint, waiting a full week before starting work. Once he began, he found his rhythm and produced 37 canvases during his stay. He painted the Doge's Palace, Santa Maria della Salute, San Giorgio Maggiore, and several private palazzi along the Grand Canal, including Palazzo Dario, Palazzo Contarini, and this Palazzo da Mula.</p>
<p>After returning to Giverny, Monet continued refining the Venice paintings in his studio, even requesting photographs from London to help with details. He exhibited the series in 1912 at Durand-Ruel's gallery in Paris. The <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington acquired this canvas as part of the Chester Dale Collection, signed and dated lower left "Claude Monet 1908."</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The painting is part of the Chester Dale Collection at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., acquired through a 1963 bequest.`
      },
      {
        question: "When did Monet visit Venice?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> traveled to Venice in <strong>1908</strong>. It was his last painting trip outside France. He produced 37 canvases during the visit.`
      },
      {
        question: "What building does this painting show?",
        answer: `The canvas depicts the <strong>Palazzo da Mula Morosini</strong>, a Venetian palace on the Grand Canal. Monet painted its Gothic facade rising directly from the water.`
      },
      {
        question: "What colors dominate this painting?",
        answer: `Monet painted the scene almost entirely in <strong>blues</strong>: topaz, lapis, and sky blue. The visible brushstrokes create a hazy, atmospheric effect.`
      }
    ]
  },
  {
    slug: 'claude-monet-palm-tree-at-bordighera',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> traveled to Bordighera on the Italian Riviera in early 1884 for what was supposed to be a three-week visit. He stayed nearly three months. In letters to sculptor Auguste Rodin, he described himself "fencing, wrestling with the sun" as he struggled to capture the brilliant Mediterranean light.</p>
<p>The vegetation amazed him. Palm trees, pines, and exotic plants grew in profusion, motifs he rarely encountered in northern France. Rather than paint conventional landscapes, Monet focused on the <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>dense vegetation</strong></a> itself, sometimes allowing only glimpses of sea through interlaced trunks. This approach pushed him toward colors he had never used before. He wrote of being driven "almost to madness" trying to express the beauty around him.</p>
<p>The painting shows Monet's sun-drenched hilltop vantage point, with foliage dominating the composition. Potter Palmer acquired the canvas in 1891, and the Palmer family gave it to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> in 1922. The work measures 64.8 by 81.3 centimeters. Monet first visited the Italian coast with Renoir in December 1883, then returned alone to paint this extended series.</p>`,
    faqs: [
      {
        question: "Where is this painting located?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from the Palmer family in 1922. Potter Palmer had acquired it in 1891.`
      },
      {
        question: "When did Monet paint in Bordighera?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> visited Bordighera in early <strong>1884</strong>. His planned three-week stay extended to nearly three months as he worked to capture the light.`
      },
      {
        question: "Why was Bordighera significant for Monet?",
        answer: `The <strong>Mediterranean vegetation</strong> pushed Monet into new territory. Palm trees and exotic plants forced him to use colors he'd never tried before in his northern French landscapes.`
      }
    ]
  },
  {
    slug: 'arnold-bocklin-pan-among-the-reeds',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted this scene of the Greek god Pan in 1858 during his first stay in Rome. The work depicts the aftermath of a tragic myth. According to Ovid's Metamorphoses, Pan fell in love with the nymph Syrinx, but she fled from him and begged the gods for help. They transformed her into reeds. When Pan's breath brushed through those reeds, it produced a haunting sound. He fashioned them into the pan flute, an instrument whose melancholy tones consoled him for his failed romance.</p>
<p>The painting marks a turning point in Böcklin's career. Created under difficult circumstances at the end of his Roman period, its sale allowed the artist and his young family to return to Basel. King Maximilian II of Bavaria purchased the work in 1859 after seeing it at the Munich Kunstverein, giving Böcklin his first major success.</p>
<p>Pan emerges from the darker foliage almost as camouflage, not sharply outlined but suggested. This approach aligns with <strong>Symbolism</strong>, where meaning arises through suggestion rather than explicit representation. To Böcklin, Mediterranean antiquity represented a golden age when humanity lived in harmony with <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a>. The <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich holds this canvas, which measures 152.7 by 199.7 centimeters.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `The painting is displayed at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich, Germany. King Maximilian II of Bavaria purchased it in 1859.`
      },
      {
        question: "What myth does this painting depict?",
        answer: `It shows the Greek god <strong>Pan among the reeds</strong> that were once the nymph Syrinx, transformed by the gods to escape his pursuit. From these reeds, Pan made his flute.`
      },
      {
        question: "Why was this painting important for Böcklin?",
        answer: `The sale of this work gave <a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Böcklin</strong></a> his first major success and allowed his family to return to Basel after difficult years in Rome.`
      },
      {
        question: "How large is this painting?",
        answer: `The oil on canvas measures <strong>152.7 by 199.7 centimeters</strong> (roughly 60 by 79 inches), a substantial work that helped establish Böcklin's reputation.`
      }
    ]
  },
  {
    slug: 'arnold-bocklin-pan-chasing-a-nymph',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> created this pastel study in Rome in 1855, capturing the moment when Pan surprises a nymph who attempts to flee. The work relates to the myth of Pan and Syrinx from Ovid's Metamorphoses, where the lustful god pursues the nymph until she begs the gods to save her. They transform her into reeds, from which Pan later fashions his famous flute.</p>
<p>This sketch appears on the verso (back) of another pastel study, "A Nymph at the Fountain." Both works show Böcklin developing his approach to <strong>mythological subjects</strong> that would define his mature career. The figure of Pan, the lascivious Greek god of nature, became one of the most repetitive motifs in Böcklin's work.</p>
<p>After his first stay in Italy in 1850, Böcklin's style shifted from landscapes influenced by Caspar David Friedrich toward a Romanticism tinged with classical references. His evocative landscapes, inhabited by forest spirits and figures from <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>classical mythology</strong></a>, aimed to represent nature's internal forces, his fears and his dreams. The <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid holds this work.</p>`,
    faqs: [
      {
        question: "Where is this artwork displayed?",
        answer: `The work is held at the <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, Spain. It appears on the reverse of another pastel study.`
      },
      {
        question: "What myth does this depict?",
        answer: `The sketch shows the Greek god <strong>Pan pursuing a nymph</strong>, likely Syrinx, who fled his advances. The gods transformed her into reeds to save her.`
      },
      {
        question: "When did Böcklin create this work?",
        answer: `<a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Böcklin</strong></a> made this pastel study in <strong>Rome in 1855</strong>, during his early career when he was developing his mythological subjects.`
      }
    ]
  },
  {
    slug: 'albert-joseph-moore-pansies',
    description: `<p><a href="/apps/masterpieces/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this work around 1875, depicting a woman in a moment of quiet contemplation. Despite its floral title, the painting focuses on a female figure seated against a richly patterned backdrop. Her attire, rendered in warm peach tones, drapes softly around her form, emphasizing the fluidity of the fabric. She gazes away from the viewer, suggesting introspection or daydreaming.</p>
<p>Moore was a central figure in the <strong>Aesthetic Movement</strong> that flourished in late Victorian Britain. The movement's motto, "art for art's sake," guided his work. There's no moral lesson or allegorical meaning here. Beauty of form takes precedence over function or narrative. This approach made aestheticism, and Moore's paintings, unconventional in Victorian Britain.</p>
<p>His friendship with James Abbott McNeill Whistler, formed around 1865, deepened his interest in decorative color harmonies. Moore's typical subjects became single female figures with formalized proportions, neo-classical drapery, and <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>floral accessories</strong></a>. As critic Sidney Colvin wrote in 1870, "The subject, whatever subject is chosen, is merely a mechanism for getting beautiful people into beautiful situations." The painting measures approximately 19.1 by 26 centimeters and remains in a private collection.</p>`,
    faqs: [
      {
        question: "What art movement does this painting represent?",
        answer: `Moore was a key figure in the <strong>Aesthetic Movement</strong>, which championed "art for art's sake." His work prioritized beauty and form over moral messages or storytelling.`
      },
      {
        question: "When was this painting created?",
        answer: `<a href="/apps/masterpieces/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted "Pansies" around <strong>1875</strong>, during the height of the Aesthetic Movement in Victorian Britain.`
      },
      {
        question: "Who influenced Moore's artistic style?",
        answer: `His friendship with <strong>James Abbott McNeill Whistler</strong>, formed around 1865, influenced Moore's focus on decorative color harmonies and purely aesthetic compositions.`
      }
    ]
  },
  {
    slug: 'paul-signac-paris-quai-de-la-tournelle',
    description: `<p><a href="/apps/masterpieces/artist/paul-signac"><strong>Paul Signac</strong></a> painted this view of the Seine in 1886, the same year he and Georges Seurat founded the Neo-Impressionist movement. The canvas shows the Quai de la Tournelle, a stretch of embankment on the Left Bank of Paris. Signac applied the <strong>pointillist technique</strong>, building the image from small dots of pure color that blend in the viewer's eye rather than on the palette.</p>
<p>The color palette creates a symphony of <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues</strong></a>, greens, and warm yellows, capturing a sunny day along the river. The interplay of light and shadow brings the water and buildings to life, demonstrating Signac's deep understanding of color theory and its emotional impact. The Seine runs through the composition as more than backdrop. It symbolizes the flow of life through the heart of Paris.</p>
<p>Signac was born in Paris in 1863 and initially wanted to study architecture. As he later said, his preference was to draw the Seine. In 1884, he helped found the Salon des Indépendants, where he met Seurat. Together they developed pointillism, applying pigment in minute dabs using an almost scientific system. The oil on canvas measures 91.5 by 59.5 centimeters and is held in a private collection.</p>`,
    faqs: [
      {
        question: "What technique did Signac use in this painting?",
        answer: `Signac employed <strong>pointillism</strong>, applying small dots of pure color that blend in the viewer's eye. He developed this technique with Georges Seurat in the mid-1880s.`
      },
      {
        question: "When was this painting created?",
        answer: `<a href="/apps/masterpieces/artist/paul-signac"><strong>Signac</strong></a> painted this view in <strong>1886</strong>, the same year he and Seurat established the Neo-Impressionist movement.`
      },
      {
        question: "What does this painting depict?",
        answer: `The canvas shows the <strong>Quai de la Tournelle</strong>, an embankment on the Left Bank of the Seine in Paris. Signac was drawn to painting the river throughout his career.`
      }
    ]
  },
  {
    slug: 'claude-monet-parliament-reflections-on-the-thames',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of the Houses of Parliament from his window at St Thomas' Hospital, looking across the Thames toward Westminster. The Gothic architecture appears ghostly, its stone seeming to lose substance in the famous London fog. Sky and water merge in the same mauve and <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>orange tones</strong></a>, while the building dissolves into shadow.</p>
<p>Monet worked on his Thames series during stays in London in autumn 1899 and early 1900-1901. He began the first Parliament painting on February 13, 1900, around 3:45 in the afternoon. The series captures variations in light and atmosphere, with the fog transforming the familiar landmarks into <strong>impressions of color and light</strong>. Brushstrokes fragment into thousands of colored patches to render the density of mist and air.</p>
<p>By this point in his career, Monet had abandoned finishing paintings on the spot. He continued refining the London views back in Giverny, even requesting photographs to help with details. In 1904, he exhibited 37 Thames paintings at Durand-Ruel's gallery in Paris. The <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> holds this canvas, which measures 81 by 92 centimeters. A 2024 exhibition at London's Courtauld Gallery finally reunited many of these works, 120 years after their Paris debut.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `This canvas is held at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. It was part of a 37-painting Thames series exhibited in 1904.`
      },
      {
        question: "When did Monet paint the Thames series?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> worked on his Thames views during stays in <strong>London in 1899, 1900, and 1901</strong>, completing and refining them back in Giverny.`
      },
      {
        question: "What makes this painting distinctive?",
        answer: `The <strong>London fog</strong> transforms the Parliament into a ghostly apparition. The stone architecture seems to dissolve while sky and water merge in mauve and orange tones.`
      },
      {
        question: "Where did Monet paint this view from?",
        answer: `Monet painted from a window or terrace at <strong>St Thomas' Hospital</strong>, looking across the Thames toward the Houses of Parliament near Westminster Bridge.`
      }
    ]
  },
  {
    slug: 'frank-dicksee-passion',
    description: `<p><a href="/apps/masterpieces/artist/frank-dicksee"><strong>Sir Frank Dicksee</strong></a> painted "Passion" in 1892, during his peak years as one of Victorian England's leading romantic painters. The composition captures an intense emotional moment between two figures. Critics noted the convincing physicality of the pose: "no arm is stretched meaninglessly out into the air; the depiction of passion is undisturbed by anything whatsoever."</p>
<p>Dicksee came from an artistic family in London's Bloomsbury. His father, brother, and sister Margaret were all painters. He trained initially with his father before entering the Royal Academy schools in 1870, where Frederic Leighton and John Everett Millais served as visiting lecturers. Throughout his formative years, Dicksee leaned toward <strong>Romanticism</strong>, focusing on people, their emotions, and subjectivity.</p>
<p>He specialized in romantic historical scenes, often from his own imagination rather than specific literary sources. "Passion" belongs alongside his other notable works: "Romeo and Juliet" (1884), "Paolo and Francesca" (1894), "The Mirror" (1896), and "Chivalry" (1885). Though a Realist in technique, the Pre-Raphaelite and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Aesthetic movements</strong></a> influenced his subjects. Dicksee was elected to the Royal Academy in 1891, became its President in 1924, and was knighted in 1925.</p>`,
    faqs: [
      {
        question: "When did Dicksee paint Passion?",
        answer: `<a href="/apps/masterpieces/artist/frank-dicksee"><strong>Dicksee</strong></a> created "Passion" in <strong>1892</strong>, during the height of his career as one of Victorian England's most celebrated romantic painters.`
      },
      {
        question: "What artistic movements influenced Dicksee?",
        answer: `Though technically a Realist, Dicksee drew influence from the <strong>Pre-Raphaelite and Aesthetic movements</strong>. He specialized in romantic historical scenes with emotional subjects.`
      },
      {
        question: "What other famous paintings did Dicksee create?",
        answer: `His notable works include "<strong>Romeo and Juliet</strong>" (1884), "Paolo and Francesca" (1894), "Chivalry" (1885), and "The Mirror" (1896).`
      }
    ]
  },
  {
    slug: 'giorgione-pastoral-concert-f234te-champ234tre',
    description: `<p>This painting, known as the <strong>Pastoral Concert</strong> or Le Concert Champêtre, dates to around 1509 and hangs in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. For centuries, scholars attributed it to <a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a>, but most now favor his younger contemporary Titian. The two artists worked closely, and Giorgione died in 1510, possibly leaving Titian to finish the canvas.</p>
<p>The painting shows two clothed men seated in a landscape with two nude women. One woman holds a flute, another pours water from a glass pitcher. These unreal figures represent an allegory of Poetry, existing only in the imaginations of the men they inspire. This interpretation follows a Venetian taste for depicting both visible and invisible worlds simultaneously.</p>
<p>The work established the "pastoral" genre in Venetian painting: idyllic landscapes populated by gods, nymphs, shepherds, and peasants. Its influence extended across centuries. Édouard Manet conceived his controversial "Le déjeuner sur l'herbe" after viewing this painting at the Louvre. Dante Gabriel Rossetti wrote a sonnet about it. The <a href="https://luxurywallart.com/collections/landscape-art" target="_blank" rel="noopener"><strong>landscape</strong></a> became one of Renaissance Venice's most important artistic contributions. The Gonzaga family once owned the painting; it later passed through Charles I of England's collection before reaching Louis XIV.</p>`,
    faqs: [
      {
        question: "Who painted the Pastoral Concert?",
        answer: `The attribution remains debated. Originally given to <a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a>, most scholars now favor <strong>Titian</strong>, who worked closely with Giorgione and may have finished it after Giorgione's death.`
      },
      {
        question: "Where is this painting displayed?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. It once belonged to the Gonzaga family, then Charles I of England, before reaching Louis XIV.`
      },
      {
        question: "What does the painting depict?",
        answer: `The scene shows two clothed men with two nude women in a landscape, an <strong>allegory of Poetry</strong>. The women exist only in the men's imaginations as sources of inspiration.`
      },
      {
        question: "How did this painting influence later art?",
        answer: `Édouard Manet viewed it at the Louvre and conceived his "<strong>Le déjeuner sur l'herbe</strong>" in response. Dante Gabriel Rossetti also wrote a sonnet about the painting.`
      }
    ]
  },
  {
    slug: 'claude-lorrain-pastoral-landscape',
    description: `<p><a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> spent most of his career in Rome, becoming the city's principal landscape painter and a model for generations of classical landscape artists. Born Claude Gellée in the Duchy of Lorraine around 1600, he developed a style of "ideal landscape" that presented nature more beautiful and harmonious than reality itself.</p>
<p>His pastoral landscapes typically feature mythological or biblical narratives set in idealized countryside settings. Shepherds, travelers, or classical figures engage in peaceful activities while <strong>golden light</strong> suffuses the scene. Claude often depicted sunrise or sunset, using atmospheric effects to create depth and mood. His compositions follow a three-part structure: framing elements on the sides, a receding middle ground, and a luminous horizon.</p>
<p>In 1634, Claude first used the sun itself to illuminate an entire picture, a breakthrough in landscape painting. This technique of placing light from the sky above the horizon enforced recession in depth. John Constable called him "the most perfect landscape painter the world ever saw." During the 18th and 19th centuries, collectors carried <strong>"Claude Glasses"</strong>, small tinted mirrors thought to bring natural scenes the same tonal harmony as Claude's paintings. The <a href="/apps/masterpieces/museum/art-gallery-of-new-south-wales-agnsw-sydney-austra"><strong>Art Gallery of New South Wales</strong></a> in Sydney holds this <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>pastoral landscape</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is this painting located?",
        answer: `This work is held at the <a href="/apps/masterpieces/museum/art-gallery-of-new-south-wales-agnsw-sydney-austra"><strong>Art Gallery of New South Wales</strong></a> in Sydney, Australia.`
      },
      {
        question: "What was Claude Lorrain known for?",
        answer: `<a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> mastered <strong>ideal landscape painting</strong>, presenting nature more beautiful than reality. John Constable called him "the most perfect landscape painter."`
      },
      {
        question: "What are 'Claude Glasses'?",
        answer: `These were small, tinted mirrors used in the 18th and 19th centuries to view natural scenes. Collectors believed they brought landscapes the same <strong>tonal harmony</strong> as Claude's paintings.`
      }
    ]
  },
  {
    slug: 'jacques-louis-david-patroclus',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this powerful nude study around 1780 while studying in Rome under his teacher Joseph-Marie Vien. The canvas shows Patroclus from behind, seated on a stone block with arrows at his feet and red drapery beneath him. As Achilles' companion in Homer's Iliad, Patroclus represents courage, loyalty, and tragic loss.</p>
<p>David discovered the dramatic potential of light and shadow through studying Caravaggio's work. This influence shows clearly here, with <strong>chiaroscuro</strong> adding depth and dimensionality to the figure. The play of light enhances the sculptural qualities that would define Neoclassical aesthetics. The muscular form demonstrates David's skill in rendering the male body, a subject he explored intensively during his Roman years.</p>
<p>David first exhibited the nude at the Paris Salon of 1781, where it helped establish his reputation. The painting represents a key moment in his development, bridging his academic training with the Neoclassical style that would make him France's leading painter. The <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg holds this canvas, which measures 121.5 by 170.4 centimeters. David's work would later define the <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>heroic human form</strong></a> in art.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, France. David first exhibited it at the Paris Salon of 1781.`
      },
      {
        question: "Who was Patroclus?",
        answer: `<strong>Patroclus</strong> was Achilles' companion in Homer's Iliad. His death at Hector's hands drove Achilles back into battle during the Trojan War.`
      },
      {
        question: "What technique did David use in this painting?",
        answer: `<a href="/apps/masterpieces/artist/jacques-louis-david"><strong>David</strong></a> employed <strong>chiaroscuro</strong>, influenced by Caravaggio. The dramatic light and shadow enhance the sculptural quality of the male figure.`
      }
    ]
  },
  {
    slug: 'felix-vallotton-paul-vallotton-the-artists-brother',
    description: `<p><a href="/apps/masterpieces/artist/felix-vallotton"><strong>Félix Vallotton</strong></a> painted this portrait of his older brother Paul in 1886. Both brothers were born into a modest Protestant family in Lausanne, on the shores of Lake Geneva in Switzerland. The work predates Félix's involvement with the Nabis, a group of young artists he would join in 1892.</p>
<p>At this stage, Vallotton worked in a <strong>Realist style</strong>, focusing on direct observation and careful rendering. The portrait shows Paul with the straightforward approach that characterized academic painting of the period. Félix had moved to Paris in 1882 at age sixteen to study at the Académie Julian, where he developed his technical skills before later embracing more experimental approaches.</p>
<p>Paul Vallotton went on to become an art dealer, founding the Galerie Paul Vallotton in Lausanne in 1922. The gallery continued under his descendants for many years. After joining the Nabis, Félix adopted flatter areas of color, harder edges, and simplified details. He earned the nickname "The Foreign Nabi" among his colleagues, who included Pierre Bonnard, Maurice Denis, and Édouard Vuillard. This early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> shows Vallotton before that stylistic transformation.</p>`,
    faqs: [
      {
        question: "When did Vallotton paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/felix-vallotton"><strong>Vallotton</strong></a> painted this portrait of his brother Paul in <strong>1886</strong>, six years before joining the Nabis group and adopting his later distinctive style.`
      },
      {
        question: "Who was Paul Vallotton?",
        answer: `Paul was Félix's older brother from Lausanne, Switzerland. He later became an <strong>art dealer</strong>, founding Galerie Paul Vallotton in 1922.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait is painted in a <strong>Realist style</strong>, before Vallotton joined the Nabis and developed his later approach with flat colors and simplified forms.`
      }
    ]
  },
  {
    slug: 'pieter-de-hooch-paying-the-hostess',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this scene around 1658, showing a fashionably dressed man and an innkeeper apparently disputing his bill in a country inn's courtyard. In the background, other guests continue their revelry while a man delivers sheaves of wheat and a woman with a child looks on. The composition captures everyday life in the <strong>Dutch Golden Age</strong>.</p>
<p>De Hooch was a contemporary of Jan Vermeer in the Delft Guild of St. Luke. Both artists became famous for their handling of light and careful attention to interior spaces. De Hooch's early work focused on soldiers and peasants in taverns, in the manner of Adriaen van Ostade. Through these subjects, he developed great skill in light, color, and perspective.</p>
<p>While Italian painters of the period created Baroque allegories from mythology and the Bible, Dutch masters like de Hooch documented domestic life: households, courtyards, and "merry company" scenes of Dutchmen at local taverns. The <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>genre scenes</strong></a> had moral undertones, showing wealthy townsmen how not to behave. The Metropolitan Museum of Art holds a version of this subject, measuring 94.6 by 111.1 centimeters.</p>`,
    faqs: [
      {
        question: "What scene does this painting depict?",
        answer: `The painting shows a <strong>dispute over a bill</strong> between a well-dressed customer and an innkeeper in a Dutch country inn's courtyard, with other guests visible in the background.`
      },
      {
        question: "When was this painting created?",
        answer: `<a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this scene around <strong>1658</strong>, during the Dutch Golden Age when he was a contemporary of Vermeer in Delft.`
      },
      {
        question: "What was de Hooch known for?",
        answer: `De Hooch became famous for his clarity of <strong>perspective and harmony of light</strong> in domestic and tavern scenes. He was considered comparably skilled to Jan Vermeer.`
      }
    ]
  },
  {
    slug: 'adriaen-brouwer-peasant-inn',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> specialized in tavern scenes showing peasants drinking, smoking, playing cards, and arguing. Born around 1605, he worked in both Flanders and the Dutch Republic during the first half of the 17th century. Though he lived only about 33 years, his small body of roughly 60 paintings influenced generations of artists.</p>
<p>Brouwer shifted peasant genre scenes, a theme pioneered by Pieter Bruegel the Elder, from outdoor settings to <strong>tavern interiors</strong>. His figures quarrel, gamble, and argue among themselves, their facial expressions revealing rage, disgust, joy, and pain in varying degrees. This focus on expression contributed to the development of "tronies," or head studies that investigate varieties of emotion.</p>
<p>These scenes served a moral purpose for the wealthy townsmen who purchased them: examples of how not to behave. Peter Paul Rubens owned seventeen Brouwer paintings, and Rembrandt also collected his work. Brouwer's principal followers included the Dutch painter Adriaen van Ostade and the Flemish artist David Teniers the Younger. The <a href="/apps/masterpieces/museum/bredius-museum-hague-netherlands"><strong>Bredius Museum</strong></a> in The Hague holds this <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>genre painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/bredius-museum-hague-netherlands"><strong>Bredius Museum</strong></a> in The Hague, Netherlands.`
      },
      {
        question: "What subjects did Brouwer paint?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Brouwer</strong></a> specialized in <strong>tavern scenes</strong> with peasants drinking, smoking, gambling, and fighting. His work focused on emotional expressions.`
      },
      {
        question: "Who collected Brouwer's paintings?",
        answer: `Both <strong>Peter Paul Rubens</strong> and Rembrandt collected his work. Rubens owned seventeen Brouwer paintings. His style influenced later Dutch and Flemish genre painters.`
      }
    ]
  },
  {
    slug: 'gustave-courbet-peasant-wearing-madras',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this portrait of a peasant woman around 1848, during the period that first brought him recognition. The subject wears a madras headscarf, a patterned fabric associated with working-class women. Courbet's approach was direct: he observed his subject from life rather than idealizing or romanticizing her appearance.</p>
<p>Courbet led the <strong>Realism movement</strong> in 19th-century French painting. He committed to painting only what he could see, rejecting academic convention and the Romanticism of the previous generation. His paintings of peasants and workers in the late 1840s and early 1850s challenged expectations by depicting ordinary people on a scale traditionally reserved for religious or historical subjects.</p>
<p>Unlike the smooth lines of Romantic painters, Courbet employed spontaneous brushstrokes and rough paint texture. He was controversial not just for his working-class subjects but for showing them without sentimentality. The <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> demonstrates his belief that artists should document their own time rather than escape into classical themes. This approach set an example that later influenced the Impressionists and Cubists. The painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "What movement did Courbet lead?",
        answer: `<a href="/apps/masterpieces/artist/gustave-courbet"><strong>Courbet</strong></a> led the <strong>Realism movement</strong> in 19th-century French painting. He insisted on painting only what he could directly observe.`
      },
      {
        question: "When was this painting created?",
        answer: `Courbet painted this portrait around <strong>1848</strong>, during the period when his unidealized depictions of working-class subjects first gained recognition.`
      },
      {
        question: "Why was Courbet controversial?",
        answer: `He depicted <strong>peasants and workers</strong> without sentimentality on a grand scale traditionally reserved for religious or historical subjects. His rough brushwork also challenged conventions.`
      }
    ]
  },
  {
    slug: 'rembrandt-peasant-with-his-hands-behind-his-back',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this small etching around 1629, early in his career. The print shows a peasant man turned in profile, his hands clasped behind his back in a moment of rest or contemplation. The figure wears simple, functional clothing with a turban-like head covering, an unusual touch that adds an exotic element to this depiction of a common man.</p>
<p>This work belongs to Rembrandt's explorations of <strong>genre subjects</strong>. His etchings of peasants, beggars, and street characters demonstrate his interest in ordinary people rather than just wealthy patrons and biblical figures. The weather-beaten face shows careful attention to expressive detail, with lines etched to convey age and labor.</p>
<p>The tiny plate measures only about 6 by 5 centimeters (2.4 by 2 inches), yet contains precise observation. Major collections hold impressions of this print, including the Rijksmuseum in Amsterdam, the Morgan Library in New York, and the Art Institute of Chicago. The <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg also holds Rembrandt's work. His early etchings established his reputation as a printmaker alongside his growing fame as a <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait painter</strong></a>.</p>`,
    faqs: [
      {
        question: "When did Rembrandt create this etching?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> made this print around <strong>1629</strong>, early in his career when he was developing his skills as both a painter and printmaker.`
      },
      {
        question: "How large is this etching?",
        answer: `The plate measures only about <strong>6 by 5 centimeters</strong> (roughly 2.4 by 2 inches). Despite its tiny size, it contains precise observation and detail.`
      },
      {
        question: "What does this print depict?",
        answer: `The etching shows a <strong>peasant man in profile</strong> with his hands behind his back. His simple clothing and turban-like head covering suggest a moment of rest.`
      }
    ]
  },
  {
    slug: 'georges-seurat-peasant-with-hoe',
    description: `<p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a> painted this rural study in 1882 as part of a series exploring agrarian life. The work shows a peasant laborer with a hoe, inspired by the imagery of Barbizon painter Jean-François Millet. At this stage, Seurat was developing his approach to color through experimentation with crosshatched brushstrokes.</p>
<p>The painting demonstrates Seurat's early investigations into how color behaves when applied in small, distinct marks. These experiments would lead to his mature technique of <strong>pointillism</strong>, where tiny dots of pure color create images that blend in the viewer's eye. His 1884 painting "Bathers at Asnières" marked a transitional moment toward this more developed approach.</p>
<p>Seurat eventually called his technique chromoluminarism, because juxtaposing individual hues created greater light effects. Critics named it Pointillism or Neo-Impressionism. Together with Paul Signac, Seurat founded this movement based on scientific color theory rather than the intuitive approach of earlier Impressionists. The <a href="/apps/masterpieces/museum/guggenheim"><strong>Solomon R. Guggenheim Museum</strong></a> in New York holds this canvas, which measures 46.3 by 56.1 centimeters. The work represents an important step in Seurat's artistic development toward <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>his revolutionary style</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/guggenheim"><strong>Solomon R. Guggenheim Museum</strong></a> in New York City.`
      },
      {
        question: "What technique did Seurat use here?",
        answer: `<a href="/apps/masterpieces/artist/georges-seurat"><strong>Seurat</strong></a> used <strong>crosshatched brushstrokes</strong> in this early work, experimenting with color division that would later develop into his famous pointillist technique.`
      },
      {
        question: "Who influenced this painting?",
        answer: `Seurat drew inspiration from <strong>Jean-François Millet</strong>, the Barbizon painter known for his dignified depictions of peasant laborers in rural France.`
      }
    ]
  },
  {
    slug: 'mary-cassatt-peasant-woman-peeling-an-orange',
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this portrait around 1875, capturing a woman focused entirely on peeling an orange. The subject leans slightly forward, her attention absorbed by the simple task in her hands. This intimate composition shows Cassatt's interest in depicting women in everyday moments rather than formal poses.</p>
<p>The painting predates Cassatt's full involvement with the Impressionists, whom she would join officially in 1879 at Edgar Degas's invitation. At this stage, her work shows <strong>Realist influences</strong>, with careful observation and solid forms. The peasant woman appears almost monumental against the background, placed close to the picture plane so viewers feel her presence directly.</p>
<p>Cassatt was born in Pennsylvania in 1844 but lived most of her adult life in France. She became one of only three women (along with Marie Bracquemond and Berthe Morisot) to exhibit with the Impressionists. Gustave Geffroy later called them "les trois grandes dames" of the movement. Cassatt is best known for her paintings of mothers and children, but this early work shows her broader interest in <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women's lives</strong></a> across social classes. The oil on canvas measures 55.88 by 45.72 centimeters and remains in a private collection.</p>`,
    faqs: [
      {
        question: "When did Cassatt paint this work?",
        answer: `<a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> created this painting around <strong>1875</strong>, before officially joining the Impressionist group in 1879.`
      },
      {
        question: "What style is this painting?",
        answer: `This early work shows <strong>Realist influences</strong> rather than the Impressionist style Cassatt would later adopt. The composition focuses on careful observation of an everyday moment.`
      },
      {
        question: "What was Cassatt known for painting?",
        answer: `Cassatt became famous for her paintings of <strong>mothers and children</strong>. She was one of only three women who exhibited with the French Impressionists.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork updates (batch 2)...\n');

  for (const update of artworkUpdates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed: ${update.slug}`, error.message);
    }
  }

  console.log('\nDone! Run "node get-artworks.js" to regenerate the checklist.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
