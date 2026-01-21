const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'pierre-puvis-de-chavannes-study-of-a-standing-male-nude',
    description: `<p><a href="/apps/masterpieces/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> created this academic study in the late 19th century, depicting a male figure in contrapposto pose. The drawing demonstrates his foundation in classical training before he developed his distinctive style of pale, mural-like paintings. His <strong>careful modeling</strong> of anatomy reflects the rigorous study expected of academic artists.</p>
<p>This preparatory work reveals the artist's process behind his later symbolic compositions. Puvis trained at the École des Beaux-Arts and became known for large decorative murals in public buildings. Now at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> in New York, this study offers insight into his technical foundation.</p>`,
    faqs: [
      {
        question: "Where can I see this study by Puvis de Chavannes?",
        answer: "The drawing is held at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York City. The museum's collection includes European art from multiple centuries, with strong holdings in 19th-century academic and modern work."
      },
      {
        question: "Who was Pierre Puvis de Chavannes?",
        answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Pierre Puvis de Chavannes</strong></a> was a French painter known for large-scale murals with pale palettes and symbolic subjects. His work bridged academic training and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> sensibilities, influencing later artists including Picasso and Gauguin."
      },
      {
        question: "What is an academic study?",
        answer: "Academic studies were practice drawings made by artists learning classical techniques, particularly figure drawing from life models. These studies emphasized accurate anatomy and form, serving as preparation for larger finished paintings."
      }
    ]
  },
  {
    slug: 'pierre-auguste-renoir-the-champs-elysees-during-the-paris-fair-of-1867',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted this lively street scene in 1867, capturing the famous Champs-Élysées during the Paris Universal Exhibition. Crowds of fashionable Parisians stroll beneath trees in dappled sunlight, while carriages pass along the wide boulevard. Renoir's <strong>bright palette</strong> and loose brushwork already hint at the Impressionist style he would help create.</p>
<p>This early work shows Renoir's fascination with modern Paris and its leisure culture. The painting documents a moment of optimism before the Franco-Prussian War changed France forever. The work remains in a private collection, representing an important transitional moment in Renoir's development.</p>`,
    faqs: [
      {
        question: "Who painted The Champs-Élysées during the Paris Fair?",
        answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Pierre-Auguste Renoir</strong></a> created this work in 1867, early in his career. He would become one of the founding figures of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, known for his joyful scenes of Parisian life."
      },
      {
        question: "What was the 1867 Paris Fair?",
        answer: "The 1867 Universal Exhibition was a world's fair held in Paris showcasing industrial, artistic, and cultural achievements. It attracted millions of visitors and represented France's prosperity under Napoleon III before the 1870 war."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting remains in a private collection. Renoir's early works from the 1860s are relatively rare compared to his later Impressionist period, making this view of the Champs-Élysées particularly interesting."
      }
    ]
  },
  {
    slug: 'rembrandt-landscape-with-a-canal-and-swan',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> created this atmospheric landscape drawing around 1650, showing a tranquil canal scene with a single swan gliding on the water. The composition uses bold, economical lines to capture the flat Dutch countryside, with trees and distant buildings defining the horizon. Rembrandt's <strong>confident linework</strong> brings the scene to life with remarkable efficiency.</p>
<p>The drawing demonstrates Rembrandt's skill with pen and ink, a medium he used frequently for landscape studies around Amsterdam. His ability to suggest depth and atmosphere with minimal means influenced centuries of artists. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this work shows his mastery beyond painted portraits.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt landscape?",
        answer: "The drawing is held at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. The museum's collection includes several Rembrandt paintings and drawings, offering insight into his work across multiple media."
      },
      {
        question: "Did Rembrandt paint many landscapes?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> is best known for portraits and biblical scenes, but he created many landscape drawings and etchings. These works, made during walks around Amsterdam, show his interest in the Dutch countryside."
      },
      {
        question: "What technique did Rembrandt use?",
        answer: "This landscape was created with pen and ink, allowing Rembrandt to work quickly and capture fleeting atmospheric effects. His economical line work and careful placement of darks create depth with minimal strokes."
      }
    ]
  },
  {
    slug: 'rembrandt-the-star-of-the-kings',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> created this atmospheric etching around 1651, depicting the Star of Bethlehem guiding the Three Kings to the infant Christ. The brilliant star illuminates the night sky above a distant town, while the Magi travel along a winding road. Rembrandt's <strong>dramatic use of light</strong> creates a mystical quality that enhances the biblical narrative.</p>
<p>The print demonstrates Rembrandt's mastery of etching, using varied line techniques to suggest nocturnal atmosphere and divine radiance. His ability to evoke spiritual experience through purely visual means marks him as one of printmaking's greatest practitioners. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this etching shows his innovative approach to religious subjects.</p>`,
    faqs: [
      {
        question: "Where can I see The Star of the Kings?",
        answer: "This etching is held at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. As prints, multiple impressions exist in various collections, though each impression has unique qualities based on printing technique."
      },
      {
        question: "Who created The Star of the Kings?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> etched this print around 1651. He was one of history's greatest printmakers, using etching and drypoint to create atmospheric effects unmatched by contemporaries."
      },
      {
        question: "What is the subject of this print?",
        answer: "The etching depicts the Star of Bethlehem guiding the Three Magi to find the newborn Jesus. Rembrandt focuses on the journey rather than the arrival, creating a meditative image of the wise men following divine guidance."
      }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-the-fight-between-carnival-and-lent',
    description: `<p><a href="/apps/masterpieces/artist/pieter-bruegel-the-elder"><strong>Pieter Bruegel the Elder</strong></a> painted this crowded town square scene in 1559, depicting the symbolic battle between Carnival and Lent. On the left, revelers celebrate with food and drink before the fasting period, while on the right, pious figures perform charitable acts. Bruegel's <strong>detailed panorama</strong> includes over 200 figures engaged in various activities that illustrate the conflict between indulgence and piety.</p>
<p>The painting offers a visual encyclopedia of 16th-century Dutch life, from games and performances to religious observances. Bruegel's bird's-eye perspective allows him to include countless vignettes of human behavior. Now at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna"><strong>Kunsthistorisches Museum</strong></a> in Vienna, this work ranks among his most complex compositions.</p>`,
    faqs: [
      {
        question: "Where can I see The Fight between Carnival and Lent?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum holds one of the world's finest collections of Bruegel paintings, including several of his famous crowd scenes."
      },
      {
        question: "Who painted The Fight between Carnival and Lent?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-the-elder\"><strong>Pieter Bruegel the Elder</strong></a> created this work in 1559. A master of <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting, he specialized in detailed scenes of peasant life and moral allegories."
      },
      {
        question: "What does Carnival vs Lent represent?",
        answer: "The painting depicts the opposition between Carnival, a period of feasting and celebration before Lent, and Lent itself, a time of fasting and religious devotion. Bruegel shows both traditions coexisting in the same town square."
      }
    ]
  },
  {
    slug: 'quentin-matsys-portrait-of-an-old-man',
    description: `<p><a href="/apps/masterpieces/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this striking portrait in the early 16th century, capturing an elderly man with remarkable attention to the textures of age. The subject's weathered features and penetrating gaze suggest both wisdom and weariness. Matsys's <strong>precise rendering</strong> of wrinkles and skin texture reflects Northern European traditions of detailed observation.</p>
<p>The painting demonstrates why Matsys was considered Antwerp's leading painter during the early Renaissance. His ability to convey psychological depth through careful attention to physiognomy influenced later Netherlandish portraitists. The work remains in a private collection, representing the artist's mature style at its most powerful.</p>`,
    faqs: [
      {
        question: "Who painted Portrait of An Old Man?",
        answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> created this work in the early 1500s. He was the leading painter in Antwerp during the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, known for detailed portraits and religious scenes."
      },
      {
        question: "Where is this portrait located?",
        answer: "The painting remains in a private collection. Matsys's works are relatively rare, with major examples held by museums including the National Gallery in London and the Prado in Madrid."
      },
      {
        question: "What style is this portrait?",
        answer: "The painting reflects Northern Renaissance traditions, emphasizing meticulous detail and psychological insight. Matsys combined Flemish precision with Italian Renaissance influences he absorbed from studying works by Leonardo and others."
      }
    ]
  },
  {
    slug: 'rembrandt-the-golf-player',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> created this curious etching around 1654, showing a figure playing an early form of golf or a similar stick-and-ball game. The player swings at a ball while another figure watches from the background. Rembrandt's <strong>economical linework</strong> captures the moment of action with his characteristic fluidity.</p>
<p>The print offers a rare glimpse of 17th-century Dutch recreation, when games resembling golf were played on ice or fields. Rembrandt's interest in everyday subjects extended to sports and leisure activities as well as more dramatic scenes. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this etching documents popular entertainment of the Dutch Golden Age.</p>`,
    faqs: [
      {
        question: "Where can I see The Golf Player?",
        answer: "This etching is held at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. As a print, multiple impressions exist in various collections worldwide, each with slight variations based on the printing process."
      },
      {
        question: "Who created The Golf Player?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> etched this print around 1654. Known primarily for portraits and biblical scenes, he also documented everyday Dutch life through prints and drawings."
      },
      {
        question: "Was golf played in 17th-century Holland?",
        answer: "The Dutch played games called kolf or colf, early stick-and-ball games related to modern golf. These were played on ice in winter or on fields in summer, popular among all social classes."
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-a-man-facing-left',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this enigmatic portrait in the early 20th century, showing a gentleman in profile against a dark background. The work once hung at the Isabella Stewart Gardner Museum in Boston until thieves stole it during the infamous 1990 heist. Klimt's <strong>refined technique</strong> captures the subject with sensitivity and restraint.</p>
<p>The painting was one of thirteen works stolen from the Gardner Museum in the largest art theft in American history. Despite investigations and rewards, none of the stolen works has been recovered. The painting's current location remains unknown, making it one of the art world's most sought-after missing pieces.</p>`,
    faqs: [
      {
        question: "Where is Portrait of a Man Facing Left?",
        answer: "The painting was stolen from the Isabella Stewart Gardner Museum in Boston during a 1990 heist and remains missing. Investigators continue searching for the work along with twelve other stolen pieces worth an estimated $500 million."
      },
      {
        question: "Who painted Portrait of a Man Facing Left?",
        answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> created this portrait in the early 1900s. An Austrian <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter, he's best known for golden decorative works, though he also painted more restrained portraits."
      },
      {
        question: "What happened in the 1990 Gardner heist?",
        answer: "On March 18, 1990, thieves disguised as police officers stole thirteen works from Boston's Isabella Stewart Gardner Museum, including paintings by Vermeer, Rembrandt, and this Klimt. Despite a $10 million reward, none have been recovered."
      }
    ]
  },
  {
    slug: 'rembrandt-the-bull',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> etched this powerful animal study around 1650, depicting a bull standing broadside in profile. The creature's solid mass and calm presence fill the composition, while Rembrandt's varied line techniques suggest the texture of hide and muscle. His <strong>direct observation</strong> captures the animal's weight and character without sentimentality.</p>
<p>The print demonstrates Rembrandt's interest in subjects beyond human portraiture, though even his animal studies reveal the same psychological insight. His technical mastery of etching creates rich tonal effects through line alone. Now at the <a href="/apps/masterpieces/museum/louvre-museum"><strong>Louvre Museum</strong></a> in Paris, this print shows his range as one of history's greatest printmakers.</p>`,
    faqs: [
      {
        question: "Where can I see The Bull by Rembrandt?",
        answer: "This etching is held at the <a href=\"/apps/masterpieces/museum/louvre-museum\"><strong>Louvre Museum</strong></a> in Paris. The Louvre's collection includes numerous Rembrandt prints, offering insight into his work as both painter and printmaker."
      },
      {
        question: "Who created The Bull?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> etched this print around 1650. Though best known for human subjects, he created several animal studies that show the same observational skill and technical mastery."
      },
      {
        question: "Why did Rembrandt etch animals?",
        answer: "Rembrandt created animal studies as part of his broader interest in the visible world. These prints demonstrate his technical range and served as practice for biblical scenes featuring animals like lions or oxen."
      }
    ]
  },
  {
    slug: 'rembrandt-the-bathers',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> created this lively etching around 1651, showing nude figures bathing and playing by a river. The informal, voyeuristic quality of the scene suggests ordinary people at leisure rather than classical nymphs. Rembrandt's <strong>spontaneous linework</strong> captures movement and light with remarkable freedom.</p>
<p>The print reflects the artist's interest in natural human behavior over idealized beauty. His willingness to show ungainly poses and realistic bodies challenged academic conventions. Now at the <a href="/apps/masterpieces/museum/state-hermitage-museum"><strong>State Hermitage Museum</strong></a> in St. Petersburg, this etching demonstrates his revolutionary approach to the nude figure.</p>`,
    faqs: [
      {
        question: "Where can I see The Bathers?",
        answer: "This etching is held at the <a href=\"/apps/masterpieces/museum/state-hermitage-museum\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The Hermitage holds one of the world's finest collections of European art, including significant Rembrandt holdings."
      },
      {
        question: "Who created The Bathers?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> etched this print around 1651. His approach to the nude figure was revolutionary, showing real bodies in natural poses rather than idealized classical forms."
      },
      {
        question: "How is this different from classical nudes?",
        answer: "Unlike Renaissance or Baroque nudes that idealized the body, Rembrandt showed ordinary people with realistic proportions and ungainly poses. This naturalistic approach scandalized some viewers but influenced later realist artists."
      }
    ]
  },
  {
    slug: 'edouard-manet-the-boy-with-cherries',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this charming portrait around 1858, showing a young boy holding a branch of cherries. The child's direct gaze and casual pose demonstrate Manet's ability to capture natural expressions. His <strong>bold brushwork</strong> and simplified forms already hint at the modern approach that would make him a pivotal figure in French painting.</p>
<p>This early work shows Spanish influence, particularly Velázquez, whose paintings Manet studied closely. The dark background and loose handling reflect techniques he learned from Old Masters while developing his own vision. Now at the <a href="/apps/masterpieces/museum/calouste-gulbenkian-museum"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon, this painting represents an important stage in his development.</p>`,
    faqs: [
      {
        question: "Where can I see The Boy with Cherries?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/calouste-gulbenkian-museum\"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon, Portugal. The museum holds an exceptional collection of European art assembled by the Armenian oil magnate Calouste Gulbenkian."
      },
      {
        question: "Who painted The Boy with Cherries?",
        answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Édouard Manet</strong></a> created this work around 1858. Though not officially part of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> group, he influenced its development and pioneered modern approaches to painting."
      },
      {
        question: "What influenced this painting?",
        answer: "Manet was deeply influenced by Spanish painters, especially Velázquez, whose portraits he studied at the Louvre. The dark background, loose brushwork, and dignified treatment of an ordinary subject all reflect this Spanish influence."
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-landscape-with-a-woodcutter-and-milkmaid',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this pastoral landscape around 1755, depicting rural figures in an idealized countryside setting. A woodcutter rests near felled timber while a milkmaid tends her cow along a winding path through trees. Gainsborough's <strong>fluid brushwork</strong> creates a dreamy atmosphere that elevates the humble subject.</p>
<p>The painting reflects Gainsborough's love of landscape, though he made his living primarily through portraits. His poetic vision of rural life influenced by Dutch masters helped establish landscape as a serious subject in British art. The work remains in a private collection, showing his characteristic combination of naturalistic detail and romantic feeling.</p>`,
    faqs: [
      {
        question: "Who painted Landscape with a Woodcutter and Milkmaid?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Thomas Gainsborough</strong></a> created this work around 1755. Though famous as a portraitist, he considered landscape his true passion and painted rural scenes throughout his career."
      },
      {
        question: "What style is this landscape?",
        answer: "The painting reflects Rococo influence with its soft colors and pastoral subject, while anticipating <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape painting. Gainsborough's fluid technique creates atmospheric effects that distinguish his work from more precise topographical views."
      },
      {
        question: "Where is this painting located?",
        answer: "The work remains in a private collection. Gainsborough's landscapes are less common than his portraits, as he painted them for his own pleasure rather than on commission."
      }
    ]
  },
  {
    slug: 'claude-monet-luncheon-on-the-grass',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this ambitious outdoor scene around 1865-1866, showing well-dressed Parisians picnicking in a forest clearing. The large canvas was intended to rival Manet's scandalous painting of the same title, though Monet's version includes no nudity. His <strong>dappled sunlight</strong> filtering through trees creates patterns of light and shadow across the figures and ground.</p>
<p>The painting represents Monet's early attempt at a major Salon submission, combining traditional figural composition with innovative plein-air techniques. He abandoned the project when it grew too large to finish, leaving fragments that reveal his developing Impressionist vision. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, these fragments show his youthful ambition.</p>`,
    faqs: [
      {
        question: "Where can I see Monet's Luncheon on the Grass?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum displays fragments of the original large canvas, which Monet abandoned incomplete and later cut apart."
      },
      {
        question: "How is this different from Manet's version?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> created his version as a response to Édouard Manet's controversial 1863 painting. While Manet showed nude women with dressed men, Monet's figures are all clothed in contemporary fashion."
      },
      {
        question: "Why did Monet abandon this painting?",
        answer: "The canvas grew too large for Monet to handle, and he ran out of time before the Salon deadline. He left it with a landlord as payment for rent, and it was damaged before he retrieved it years later."
      }
    ]
  },
  {
    slug: 'van-gogh-miners-in-the-snow-at-dawn',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted this somber scene in 1880, showing miners trudging through snow in the predawn darkness. The work dates from his time in the Borinage mining region of Belgium, where he lived among coal miners as a lay preacher. Van Gogh's <strong>dark palette</strong> and heavy forms convey the harsh reality of working-class life.</p>
<p>This early painting shows Van Gogh's social conscience and identification with laborers before he developed his famous colorful style. The muted tones reflect Dutch traditions and his emotional state during this difficult period. Now at the <a href="/apps/masterpieces/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam, this work reveals his artistic beginnings.</p>`,
    faqs: [
      {
        question: "Where can I see Miners in the Snow?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> in Amsterdam. The museum holds the world's largest collection of Van Gogh's work, documenting his artistic development from dark early paintings to vibrant later works."
      },
      {
        question: "When did Van Gogh paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Vincent van Gogh</strong></a> created this work in 1880 during his time as a lay preacher in Belgium's coal-mining region. This was before he received formal training and developed his characteristic style."
      },
      {
        question: "Why is this painting so dark?",
        answer: "Van Gogh's early works used dark, earthy palettes influenced by Dutch painting traditions and the grim realities he witnessed. He wouldn't adopt bright colors until encountering <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> in Paris years later."
      }
    ]
  },
  {
    slug: 'rembrandt-lot-and-his-family-leaving-sodom',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> painted this dramatic biblical scene around 1625, showing Lot fleeing the doomed city of Sodom with his family. An angel urgently guides them away while smoke and flames rise in the background. Rembrandt's <strong>theatrical lighting</strong> and agitated brushwork create a sense of crisis and divine intervention.</p>
<p>This early work shows the influence of Caravaggio and his followers, whose dramatic approach Rembrandt absorbed and transformed. The painting dates from his Leiden period before he moved to Amsterdam and achieved fame. Now at the <a href="/apps/masterpieces/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, this work reveals the young artist's developing powers.</p>`,
    faqs: [
      {
        question: "Where can I see Lot and His Family Leaving Sodom?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. The museum's Rembrandt collection spans his career, from early works like this to mature masterpieces."
      },
      {
        question: "Who painted this biblical scene?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> created this work around 1625 when he was about 19 years old. It shows early influences from Caravaggio's dramatic lighting that he would develop throughout his career."
      },
      {
        question: "What is the story of Lot?",
        answer: "According to Genesis, God destroyed the sinful cities of Sodom and Gomorrah. Angels warned Lot to flee with his family, commanding them not to look back. Lot's wife disobeyed and was turned into a pillar of salt."
      }
    ]
  },
  {
    slug: 'william-holman-hunt-the-finding-of-the-saviour-in-the-temple',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this elaborate biblical scene between 1854 and 1860, depicting the twelve-year-old Jesus debating with Jewish scholars in the Temple. Hunt traveled to Jerusalem to ensure archaeological accuracy, studying costumes, architecture, and Jewish customs firsthand. His <strong>meticulous detail</strong> and symbolic color choices reflect Pre-Raphaelite dedication to truth and meaning.</p>
<p>The painting took years to complete and required multiple trips to the Holy Land. Hunt's commitment to authenticity extended to hiring Jewish models and studying rabbinical texts. Now at the <a href="/apps/masterpieces/museum/birmingham-museum-and-art-gallery"><strong>Birmingham Museum and Art Gallery</strong></a>, this massive work represents Victorian religious painting at its most ambitious.</p>`,
    faqs: [
      {
        question: "Where can I see The Finding of the Saviour in the Temple?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery\"><strong>Birmingham Museum and Art Gallery</strong></a> in Birmingham, England. The museum holds an important collection of Pre-Raphaelite art, including major works by Hunt and his colleagues."
      },
      {
        question: "Who painted this religious scene?",
        answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> created this work between 1854-1860. A founding member of the <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite Brotherhood</strong></a>, he was known for religiously symbolic paintings based on careful research."
      },
      {
        question: "Why did this painting take so long?",
        answer: "Hunt made multiple trips to Jerusalem to ensure accuracy, studying Jewish customs, architecture, and clothing. He insisted on painting from life whenever possible, including hiring Jewish models in Palestine to pose for the scholars."
      }
    ]
  },
  {
    slug: 'rembrandt-woman-sitting-half-dressed-beside-a-stove',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt van Rijn</strong></a> etched this intimate domestic scene around 1658, showing a woman warming herself by a stove. She sits in casual undress, her shift pulled down to expose her shoulder and breast. Rembrandt's <strong>sensitive handling</strong> of light and shadow creates warmth and privacy, transforming a simple moment into something tender.</p>
<p>The print reflects Rembrandt's interest in ordinary life and his sympathetic approach to the female figure. His willingness to show unglamorous reality rather than idealized beauty distinguished him from contemporaries. Now at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>, this etching demonstrates his mastery of intimate observation.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt etching?",
        answer: "This print is held at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio. The museum's collection includes significant European prints and drawings spanning multiple centuries."
      },
      {
        question: "Who created Woman Sitting Half Dressed Beside a Stove?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt van Rijn</strong></a> etched this print around 1658. His etchings of women show naturalistic bodies and domestic moments, contrasting with the idealized nudes favored by other artists."
      },
      {
        question: "Why is this print significant?",
        answer: "The etching shows Rembrandt's revolutionary approach to the female figure, depicting ordinary women in natural poses rather than classical goddesses. His empathetic observation influenced later artists interested in realism over idealization."
      }
    ]
  },
  {
    slug: 'gustave-caillebotte-landscape-with-haystacks',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this tranquil rural scene in the 1880s, showing golden haystacks in a sunlit field. The composition demonstrates his interest in ordinary subjects treated with careful observation. Caillebotte's <strong>structured approach</strong> to landscape combines Impressionist light with more solid forms than his colleagues preferred.</p>
<p>The painting reflects the artist's ongoing exploration of countryside subjects after establishing his reputation with urban Parisian scenes. His financial independence allowed him to paint without commercial pressure. The work remains in a private collection, showing Caillebotte's distinctive vision at a quieter moment in his career.</p>`,
    faqs: [
      {
        question: "Who painted Landscape with Haystacks?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this work in the 1880s. A member of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> circle, he's known for modern urban scenes but also painted rural landscapes."
      },
      {
        question: "How is this different from Monet's haystacks?",
        answer: "While Claude Monet painted haystacks obsessively to capture changing light, Caillebotte took a more structured, less atmospheric approach. His solid forms and clearer space show his unique position between Impressionism and academic tradition."
      },
      {
        question: "Where is this painting located?",
        answer: "The work remains in a private collection. Many of Caillebotte's paintings stayed with his family until the late 20th century, making them less known than works by Monet or Renoir."
      }
    ]
  },
  {
    slug: 'gustave-caillebotte-landscape-banks-of-the-yerres',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this serene river view in the 1870s, depicting the banks of the Yerres River near his family estate. Trees reflect in calm water while soft light filters through foliage. Caillebotte's <strong>careful composition</strong> balances natural observation with structured design, creating harmony between realism and decoration.</p>
<p>The Yerres property provided Caillebotte with endless subjects during the 1870s, from gardens to water views. These works show him developing his distinctive approach before moving to Paris. The painting remains in a private collection, documenting a peaceful period in the artist's life.</p>`,
    faqs: [
      {
        question: "Who painted Landscape, Banks of the Yerres?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this work in the 1870s at his family's property. He painted numerous views of the estate before focusing on urban Parisian subjects."
      },
      {
        question: "What is the Yerres?",
        answer: "The Yerres is a small river southeast of Paris where Caillebotte's family owned a country estate. He spent summers there painting gardens, boating scenes, and riverside views that show his early development."
      },
      {
        question: "Where is this painting located?",
        answer: "The work remains in a private collection. Caillebotte's Yerres period paintings are less well-known than his famous Parisian street scenes but reveal his technical foundations and personal vision."
      }
    ]
  },
  {
    slug: 'eugene-delacroix-the-massacre-at-chios',
    description: `<p><a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> painted this harrowing scene in 1824, depicting the aftermath of Ottoman forces slaughtering Greek civilians during the Greek War of Independence. Exhausted captives await their fate while bodies litter the ground. Delacroix's <strong>emotional intensity</strong> and dramatic color made this painting a manifesto of Romantic art.</p>
<p>The work caused controversy at the 1824 Salon, with critics divided between admiring its power and condemning its supposed technical flaws. Delacroix based the scene on contemporary accounts of the 1822 massacre, when Turkish troops killed thousands on the island of Chios. Now at the <a href="/apps/masterpieces/museum/louvre-museum"><strong>Louvre Museum</strong></a> in Paris, this painting established Delacroix as the leader of French Romanticism.</p>`,
    faqs: [
      {
        question: "Where can I see The Massacre at Chios?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-museum\"><strong>Louvre Museum</strong></a> in Paris. The massive canvas demonstrates Delacroix's commitment to grand-scale historical painting addressing contemporary events."
      },
      {
        question: "Who painted The Massacre at Chios?",
        answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this work in 1824. A leader of the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> movement, he championed emotional expression and dramatic color over classical restraint."
      },
      {
        question: "What event does this painting depict?",
        answer: "The painting shows the 1822 massacre on the Greek island of Chios, where Ottoman forces killed thousands of civilians during the Greek War of Independence. The atrocity shocked Europe and increased support for Greek independence."
      },
      {
        question: "How big is The Massacre at Chios?",
        answer: "The painting measures an enormous 419 × 354 cm (13.7 × 11.6 feet), making it one of Delacroix's largest works. This monumental scale amplifies the emotional impact and places it in the tradition of grand history painting."
      }
    ]
  },
  {
    slug: 'felicien-rops-study-for-the-temptation-of-st-anthony',
    description: `<p><a href="/apps/masterpieces/artist/felicien-rops"><strong>Félicien Rops</strong></a> created this provocative study in the late 19th century, preparing for his shocking interpretation of St. Anthony's temptation. The Belgian artist specialized in erotic and blasphemous imagery that challenged bourgeois morality. Rops's <strong>technical precision</strong> combined with transgressive subjects made his work both admired and condemned.</p>
<p>The study shows Rops developing ideas for his finished version, where a nude woman replaces Christ on the cross. His fascination with the intersection of religious symbolism and sexuality reflected broader Symbolist interests. Now at the <a href="/apps/masterpieces/museum/musee-marmottan-monet"><strong>Musée Marmottan Monet</strong></a> in Paris, this work reveals his artistic process.</p>`,
    faqs: [
      {
        question: "Where can I see this Rops study?",
        answer: "The drawing is held at the <a href=\"/apps/masterpieces/museum/musee-marmottan-monet\"><strong>Musée Marmottan Monet</strong></a> in Paris. Though known primarily for its Monet collection, the museum holds works by various 19th-century artists including Rops."
      },
      {
        question: "Who was Félicien Rops?",
        answer: "<a href=\"/apps/masterpieces/artist/felicien-rops\"><strong>Félicien Rops</strong></a> was a Belgian printmaker and illustrator known for erotic and blasphemous imagery. Associated with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, he explored the dark side of human nature and religious hypocrisy."
      },
      {
        question: "What is The Temptation of St. Anthony about?",
        answer: "The subject depicts the Christian hermit St. Anthony resisting demonic temptations in the desert. Artists from Bosch to Dalí interpreted this theme, with Rops creating one of the most scandalous versions."
      }
    ]
  },
  {
    slug: 'claude-monet-saintlazare-station-sunlight-effect',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this atmospheric view of Paris's Saint-Lazare train station in 1877, capturing steam and smoke illuminated by sunlight streaming through the glass roof. Locomotives and passengers appear as shadowy forms within the hazy atmosphere. Monet's <strong>bold approach</strong> to modern industrial subjects demonstrated Impressionism's relevance to contemporary life.</p>
<p>The painting belongs to a series Monet made at the station, studying how light transformed steam into color and pattern. His choice of a railway station as artistic subject matter shocked traditionalists. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, this work shows Monet finding poetry in the modern city.</p>`,
    faqs: [
      {
        question: "Where can I see Saint-Lazare Station paintings?",
        answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds several paintings from Monet's railway station series, showing different lighting conditions and viewpoints."
      },
      {
        question: "Who painted Saint-Lazare Station?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> created this series in 1877. He rented a nearby apartment to paint the station at various times, treating it with the same attention he gave to water lilies."
      },
      {
        question: "Why paint a train station?",
        answer: "Monet and other <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> believed modern subjects deserved artistic treatment. The station offered dramatic effects of light filtering through steam and glass, perfect for studying atmospheric conditions."
      }
    ]
  },
  {
    slug: 'claude-monet-saintlazare-station-the-western-region-goods-sheds',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this industrial view in 1877, showing the goods sheds and railway infrastructure at Saint-Lazare Station. The composition emphasizes the geometric patterns of tracks, platforms, and buildings beneath a hazy sky. Monet's <strong>willingness to embrace</strong> unglamorous subjects showed his commitment to painting contemporary Paris honestly.</p>
<p>This painting focuses on the working areas of the station rather than passenger platforms, revealing Monet's interest in the functional beauty of modern engineering. The muted palette captures the industrial atmosphere. Now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, this work demonstrates Impressionism's engagement with the modern world.</p>`,
    faqs: [
      {
        question: "Where is this Saint-Lazare painting displayed?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum's location in a converted railway station makes it particularly fitting that it houses Monet's train station series."
      },
      {
        question: "Who painted this railway scene?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> created this work in 1877 as part of his Saint-Lazare series. He painted the station from multiple viewpoints, showing passenger areas and industrial zones."
      },
      {
        question: "What are goods sheds?",
        answer: "Goods sheds were covered areas where freight was loaded and unloaded from trains. Monet painted these working areas to show the full reality of railway operations, not just glamorous passenger travel."
      }
    ]
  },
  {
    slug: 'claude-monet-villas-at-bordighera',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this luminous Mediterranean scene in 1884 during his trip to the Italian Riviera. Pale villas nestle among lush vegetation on a hillside overlooking the turquoise sea. Monet's <strong>vibrant palette</strong> captures the intense southern light that dazzled him, with pinks, blues, and greens creating shimmering atmospheric effects.</p>
<p>The artist spent several months in Bordighera, initially planning a short visit but staying longer to capture the exotic light and vegetation. His letters describe struggling to convey the brilliance he encountered. Now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, this painting shows Monet pushing his color range in response to Mediterranean brilliance.</p>`,
    faqs: [
      {
        question: "Where can I see Villas at Bordighera?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>. The museum holds an exceptional Impressionist collection, including multiple works by Monet from various periods and locations."
      },
      {
        question: "Who painted Villas at Bordighera?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> created this work in 1884 during his Italian Riviera trip. He painted approximately fifty canvases in Bordighera, captivated by light and colors he couldn't find in France."
      },
      {
        question: "Where is Bordighera?",
        answer: "Bordighera is a coastal town on Italy's Ligurian Riviera near the French border. Its mild climate and exotic vegetation attracted artists and tourists during the 19th century, offering Mediterranean light without traveling to North Africa."
      }
    ]
  },
  {
    slug: 'claude-monet-villas-at-bordighera-03',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this brilliant view of Bordighera in 1884, showing terraced villas amid palm trees and Mediterranean vegetation. The composition balances architectural elements with lush foliage under intense blue sky. Monet's <strong>heightened color</strong> reflects his excitement at discovering southern light so different from Normandy's gray skies.</p>
<p>This painting belongs to the series Monet created during his extended stay on the Italian Riviera. He wrote to Alice Hoschedé about the challenge of capturing colors that seemed almost unreal. Now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, this work demonstrates how travel expanded his already revolutionary palette.</p>`,
    faqs: [
      {
        question: "Where is Villas at Bordighera 03 displayed?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>. The museum holds two versions of villas at Bordighera, allowing visitors to compare Monet's different approaches to the same subject."
      },
      {
        question: "Who created this Mediterranean scene?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> painted this work in 1884. His Bordighera paintings mark an important moment when exposure to southern light pushed his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> technique toward even brighter, more intense color."
      },
      {
        question: "Why did Monet paint Bordighera multiple times?",
        answer: "Monet's method involved painting the same subject under different conditions to capture changing light and atmosphere. In Bordighera, he created dozens of canvases exploring various viewpoints and lighting effects along the coast."
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
