const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'alexandre-cabanel',
    faqs: [
      { question: "What art movement was Alexandre Cabanel part of?", answer: "Cabanel was a dominant figure in French <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> during the Second Empire. He embraced the ideals of the French Academy, favoring mythological subjects, flawless technique, and idealized beauty that made him Napoleon III's favorite painter and a powerful voice on the Salon jury for decades." },
      { question: "Where can I see The Birth of Venus?", answer: "The original 1863 version hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, while a later 1875 version is at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. A smaller 1864 replica resides at the Dahesh Museum of Art." },
      { question: "Who bought Cabanel's Birth of Venus?", answer: "<strong>Napoleon III</strong> purchased the painting immediately after its 1863 Salon debut for his personal collection. The Emperor displayed it again at the 1867 Universal Exhibition, cementing Cabanel's status as the establishment's chosen master over controversial rivals like Manet." },
      { question: "What was Cabanel's role in French art institutions?", answer: "Starting in 1863, he served as <strong>professor at the École des Beaux-Arts</strong> and sat on the Salon jury for years. His conservative influence shaped official French taste, frequently rejecting Impressionist works while championing classical technique and mythological themes over modern subjects." },
      { question: "How was Cabanel's Venus received by critics?", answer: "While crowds adored it, Émile Zola famously attacked the painting's disguised eroticism, calling Venus <strong>\"a delicious courtesan\"</strong> made of \"pink and white marzipan\" rather than a true goddess. This criticism highlighted the tension between Academic sensuality and emerging Realist honesty." }
    ]
  },
  {
    slug: 'dosso-dossi',
    faqs: [
      { question: "What art movement was Dosso Dossi part of?", answer: "Dossi led the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Ferrarese Renaissance</strong></a> as court painter to the Este Dukes. Unlike the precise draftsmanship of Florence, his style absorbed the rich, sensuous color of Venice through his study of Titian and Giorgione, creating dreamy mythological scenes with vivid, almost surreal atmospheres." },
      { question: "Where can I see Dosso Dossi's paintings?", answer: "His works hang at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, the <a href=\"/apps/masterpieces/museum/galleria-borghese\"><strong>Galleria Borghese</strong></a> in Rome, and Washington's National Gallery of Art. The Pinacoteca Nazionale in Ferrara, his home city, also preserves several important canvases from his court period." },
      { question: "Who was Dosso Dossi's patron?", answer: "He served the <strong>Este Dukes of Ferrara</strong> as official court artist from around 1514 until his death in 1542. Duke Alfonso I and his cultured court commissioned mythological allegories, decorative cycles, and portraits that showcased Dossi's inventive imagination and bold color harmonies." },
      { question: "What is distinctive about Dossi's style?", answer: "His paintings feature <strong>dream-like atmospheres</strong>, lush <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, and striking color disharmonies with eccentric proportions. Critics note an almost fantastical quality, with mysterious figures emerging from shadowy woods in ways that anticipate later Romantic and Symbolist painting." },
      { question: "Which poet praised Dosso Dossi?", answer: "His friend <strong>Ludovico Ariosto</strong>, author of the epic Orlando Furioso, celebrated Dossi alongside Michelangelo, Raphael, and Titian as one of nine great living painters. This literary endorsement from a fellow Ferrarese courtier helped secure his reputation during his lifetime." }
    ]
  },
  {
    slug: 'john-martin',
    faqs: [
      { question: "What art movement was John Martin part of?", answer: "Martin was an English <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter who pushed biblical and apocalyptic subjects to overwhelming scale. His vast canvases of divine destruction, impossible architecture, and tiny figures dwarfed by cosmic forces made him the most popular painter in Britain during the 1820s." },
      { question: "Where can I see John Martin's paintings?", answer: "His monumental Last Judgement trilogy (1851-53) hangs at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The Yale Center for British Art holds important early works, while Manchester Art Gallery and the Laing Art Gallery in Newcastle preserve additional canvases from his prolific career." },
      { question: "What is Martin's most famous painting?", answer: "<strong>Belshazzar's Feast</strong> (1820) caused such a sensation that five thousand people paid to see the original, and a print hung in the Brontë parsonage at Haworth. The painting's <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>apocalyptic</strong></a> grandeur captured public imagination like few images before it." },
      { question: "Who did John Martin influence?", answer: "His dramatic compositions shaped <strong>illustrated Bibles</strong>, apocalyptic literature, and early cinema. D.W. Griffith's Intolerance and Cecil B. DeMille's biblical epics borrowed directly from his visual vocabulary of massive architecture, terrified crowds, and divine catastrophe." },
      { question: "What subjects did Martin paint?", answer: "Martin specialized in apocalyptic biblical scenes where tiny figures confront the wrath of God. He painted the Fall of Babylon, the destruction of Sodom and Gomorrah, Paradise Lost illustrations, and a final trilogy depicting Heaven, Hell, and the Day of Judgement." }
    ]
  },
  {
    slug: 'wassily-kandinsky',
    faqs: [
      { question: "What art movement was Kandinsky part of?", answer: "Kandinsky co-founded <strong>Der Blaue Reiter</strong> (The Blue Rider) in Munich in 1911 with Franz Marc, pioneering <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. He became one of the first painters to create purely <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> works, arguing that color and form alone could express spiritual truths." },
      { question: "Where can I see Kandinsky's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/guggenheim\"><strong>Solomon R. Guggenheim Museum</strong></a> in New York holds the finest collection of his work. The <a href=\"/apps/masterpieces/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> in Paris and Munich's Lenbachhaus, where Der Blaue Reiter formed, also preserve major paintings from every period of his career." },
      { question: "What inspired Kandinsky to create abstract art?", answer: "Seeing <strong>Monet's Haystacks</strong> in Moscow in 1896 convinced him that color and form could carry emotional meaning without recognizable objects. Later, he claimed that entering his studio at twilight and seeing one of his own paintings on its side, unrecognizable yet beautiful, confirmed his path toward pure abstraction." },
      { question: "Where did Kandinsky teach?", answer: "He joined the <strong>Bauhaus</strong> in Weimar and Dessau from 1922 to 1933, teaching alongside Paul Klee. During these years, his style shifted from spontaneous, organic forms to precise geometric shapes, circles, and lines influenced by the school's design-focused environment." },
      { question: "Who did Kandinsky influence?", answer: "His theories and paintings profoundly shaped <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionists</strong></a> including <strong>Jackson Pollock</strong>, Mark Rothko, and Arshile Gorky. His 1910 book Concerning the Spiritual in Art remains a foundational text for understanding how abstraction communicates emotion directly." }
    ]
  },
  {
    slug: 'william-blake',
    faqs: [
      { question: "What art movement was William Blake part of?", answer: "Blake was a pioneering figure of the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic Age</strong></a>, though he worked in isolation from mainstream movements. He combined poetry, painting, and printmaking into visionary works exploring spirituality, imagination, and revolutionary politics that defied the rational Enlightenment values of his time." },
      { question: "Where can I see William Blake's art?", answer: "<a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London holds the world's largest Blake collection, including illuminated books, watercolors, and tempera paintings. The Fitzwilliam Museum in Cambridge, Yale Center for British Art, and Morgan Library in New York also preserve significant works." },
      { question: "What is Blake's most famous literary work?", answer: "<strong>Songs of Innocence and of Experience</strong> (1794) remains his most celebrated creation, containing poems like 'The Lamb' and 'The Tyger' that explore what Blake called 'the two contrary states of the human soul.' He printed, illustrated, and hand-colored each copy himself with his wife Catherine." },
      { question: "What technique did Blake develop?", answer: "Blake invented <strong>'illuminated printing,'</strong> etching text and images together onto copper plates using acid-resistant varnish. He and his wife Catherine then hand-colored each impression, meaning no two copies are identical. This labor-intensive process limited his sales but created unique artistic objects." },
      { question: "Who did William Blake influence?", answer: "His visionary intensity inspired <strong>Beat poets</strong> like Allen Ginsberg, musicians including <a href=\"https://luxurywallart.com/collections/pop-culture\" target=\"_blank\" rel=\"noopener\"><strong>Bob Dylan</strong></a> and Jim Morrison, and counterculture figures who admired his rejection of rationalism. The Pre-Raphaelites also championed his work in the Victorian era." }
    ]
  },
  {
    slug: 'william-adolphe-bouguereau',
    faqs: [
      { question: "What art movement was Bouguereau part of?", answer: "Bouguereau dominated French <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> in the late 19th century. His polished technique, idealized mythological subjects, and flawless rendering of skin made him the highest-paid living artist of his era and the embodiment of official Salon taste." },
      { question: "Where can I see Bouguereau's paintings?", answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the Art Institute of Chicago. His large mythological canvases remain popular with visitors who appreciate his virtuoso technique." },
      { question: "How many paintings did Bouguereau create?", answer: "Bouguereau produced at least <strong>822 known paintings</strong> during his career, working from dawn to nightfall six days weekly throughout his life. His disciplined studio practice and high prices meant wealthy American collectors eagerly purchased works featuring idealized <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female figures</strong></a> and peasant children." },
      { question: "Who did Bouguereau teach?", answer: "At the Académie Julian, he trained future artists including <strong>Henri Matisse</strong>, who would later rebel against everything Academic painting represented. Other students included American painters who spread Academic techniques across the Atlantic, though most eventually abandoned the style." },
      { question: "Why did Bouguereau's reputation decline?", answer: "His Academic style fell from favor as <strong>modernism</strong> rose after his death in 1905. The avant-garde dismissed his polished surfaces as sentimental and retrograde. A market revival beginning in the 1980s has restored some appreciation for his undeniable technical mastery." }
    ]
  },
  {
    slug: 'edwin-landseer',
    faqs: [
      { question: "What is Edwin Landseer best known for?", answer: "Landseer was the most celebrated Victorian <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\"><strong>animal painter</strong></a>, famous for his emotionally expressive depictions of <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a>, dogs, and Highland stags. His ability to suggest human feelings in animal subjects made his paintings enormously popular as prints in middle-class British homes." },
      { question: "Where can I see The Monarch of the Glen?", answer: "<strong>The Monarch of the Glen</strong> hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-scotland\"><strong>National Galleries of Scotland</strong></a> in Edinburgh, acquired for £4 million in 2017 after a major fundraising campaign. The painting has become an icon of Scottish identity, reproduced endlessly on shortbread tins and whisky labels." },
      { question: "What did Landseer create besides paintings?", answer: "Landseer designed the <strong>four bronze lions</strong> at the base of Nelson's Column in Trafalgar Square, London, unveiled in 1867. His declining health and bouts of mental illness delayed the commission for years, but the lions became beloved London landmarks." },
      { question: "How young was Landseer when he first exhibited?", answer: "A child prodigy, Landseer <strong>exhibited at the Royal Academy at age 13</strong> with drawings of animals. He was elected Associate at 24 and full member at 29, the youngest artist to achieve that honor. His precocious talent made him a celebrity before he turned twenty." },
      { question: "What was Landseer's connection to Queen Victoria?", answer: "He painted <strong>Queen Victoria's pets</strong> repeatedly over many years and gave both her and Prince Albert etching lessons. Victoria knighted him in 1850 and visited his studio. Their friendship lasted until his mental health declined in his final years." }
    ]
  },
  {
    slug: 'isaac-levitan',
    faqs: [
      { question: "What is Isaac Levitan known for?", answer: "Levitan advanced the <strong>'mood landscape'</strong> genre, capturing the emotional essence of Russian nature with poetic sensitivity. His quiet scenes of the Volga region, birch forests, and evening light conveyed melancholy and beauty that resonated deeply with Russian viewers seeking <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural</strong></a> spiritual meaning." },
      { question: "Where can I see Levitan's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow holds the finest collection of his work, including his major Volga <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. The Russian Museum in St. Petersburg also preserves important canvases from every phase of his brief but productive career." },
      { question: "What was Levitan's 'Volga period'?", answer: "From 1887 to 1890, Levitan painted along the <strong>Volga River</strong>, producing his greatest works in the small town of Plyos. The Quiet Convent and Above Eternal Peace emerged from these summers, establishing him as Russia's leading landscape painter before he turned thirty." },
      { question: "How many paintings did Levitan create?", answer: "Despite dying at just 39, Levitan created over <strong>a thousand paintings</strong> and countless studies. His friend Anton Chekhov wrote that Levitan's landscapes expressed uniquely Russian feelings that no painter before him had captured with such depth and subtlety." },
      { question: "What challenges did Levitan face?", answer: "As a Jew, he faced <strong>anti-Semitic laws</strong> that briefly expelled him from the Moscow School of Painting in 1879 and restricted his residence in Moscow. Despite these hardships, wealthy patrons and fellow artists supported his work, and he became a professor at his old school." }
    ]
  },
  {
    slug: 'lorenzo-lotto',
    faqs: [
      { question: "What art movement was Lorenzo Lotto part of?", answer: "Lotto was a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Venetian Renaissance</strong></a> painter known for his individualistic style and psychological depth in <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraiture</strong></a>. While his contemporaries favored idealized beauty, he captured nervous energy and inner life in his sitters' faces with unusual frankness." },
      { question: "Where can I see Lotto's paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the Prado in Madrid. Churches in Bergamo still display his altarpieces in their original settings, offering a rare chance to see Renaissance art in context." },
      { question: "What was Lotto's most productive period?", answer: "His <strong>Bergamo period</strong> (1513-1525) was his most productive, with commissions from wealthy merchants, aristocrats, and religious institutions in that northern Italian city. Free from Venetian competition, he developed his distinctive psychological approach to portraiture and created major altarpieces." },
      { question: "Why was Lotto overshadowed in Venice?", answer: "<strong>Titian's dominance</strong> overshadowed him when he returned to Venice, and he struggled to find patrons. Art historian Bernard Berenson rediscovered him in the late 19th century, recognizing his psychological intensity as ahead of its time and sparking renewed scholarly interest." },
      { question: "What happened to Lotto in old age?", answer: "Destitute and partially blind, he painted <strong>bed numbers at a hospital</strong> in Ancona before entering Loreto's Santa Casa as a lay brother in 1554. His account book, which survived, reveals the anxieties and financial struggles that haunted his final years." }
    ]
  },
  {
    slug: 'alexej-von-jawlensky',
    faqs: [
      { question: "What art movement was Alexej von Jawlensky part of?", answer: "Jawlensky was a leading <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> and exhibited with Der Blaue Reiter in Munich. In 1924, he founded Die Blaue Vier (The Blue Four) with Kandinsky, Paul Klee, and Lyonel Feininger, continuing to promote <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> and spiritual art in America." },
      { question: "What are Jawlensky's most famous works?", answer: "The <strong>\"Mystical Heads\"</strong> series (1917-19) and <strong>\"Savior's Faces\"</strong> series (1918-20) are his most celebrated works. These increasingly simplified faces became devotional objects, with features reduced to geometric shapes that Jawlensky described as spiritual meditations on the human soul." },
      { question: "Where can I see Jawlensky's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, the Guggenheim, and Museum Wiesbaden in Germany, which holds the largest collection. The Norton Simon Museum in Pasadena also preserves important early works from his Munich years." },
      { question: "Who influenced Jawlensky's style?", answer: "He studied under <strong>Ilya Repin</strong> at the St. Petersburg Academy and was transformed by encounters with Gauguin, Van Gogh, and Matisse in Paris. Russian Orthodox icon traditions also shaped his approach, leading him toward bold <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>color</strong></a> and frontal, hieratic compositions." },
      { question: "Why did Jawlensky stop painting?", answer: "Crippling <strong>arthritis</strong> forced him to stop painting entirely in 1937. That same year, the Nazis condemned his work as \"degenerate\" and removed it from German museums. He spent his final years in Wiesbaden, paralyzed, visited by friends including his former colleague Kandinsky." }
    ]
  },
  {
    slug: 'carl-larsson',
    faqs: [
      { question: "What is Carl Larsson best known for?", answer: "Larsson is famous for his bright <strong>watercolors of family life</strong> at his home in Sundborn, Sweden. Published in albums like A Home (1899), these images shaped the modern Swedish aesthetic and influenced Scandinavian <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>interior design</strong></a> into the present day, including IKEA's style." },
      { question: "Where can I see Carl Larsson's work?", answer: "The Nationalmuseum in Stockholm holds major works, while his home at <strong>Sundborn</strong>, called Lilla Hyttnäs, is now a museum open to visitors from May through October. The <a href=\"/apps/masterpieces/museum/thiel-gallery\"><strong>Thiel Gallery</strong></a> in Stockholm also preserves important paintings." },
      { question: "What art movement was Carl Larsson associated with?", answer: "Larsson represented the <strong>Arts and Crafts movement</strong> that swept Europe in the late 19th century. His vision of 'Swedishness,' combining folk traditions with light-filled domestic spaces, became embedded in national identity and influenced generations of Scandinavian designers and painters." },
      { question: "Who was Carl Larsson's wife?", answer: "<strong>Karin Bergöö Larsson</strong>, herself a trained painter, became his partner in creating their famous home. Together they designed interiors, furniture, and textiles that blended Swedish folk art with Japanese and Arts and Crafts influences. Her contributions were largely overlooked until recent scholarship." },
      { question: "What is Lilla Hyttnäs?", answer: "Lilla Hyttnäs in <strong>Sundborn</strong> was the Larsson family home, given to them by Karin's father in 1888. Carl and Karin transformed this modest cottage into one of the world's most famous artist homes, filling it with their designs, children, and the <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> domestic scenes he painted." }
    ]
  },
  {
    slug: 'domenico-beccafumi',
    faqs: [
      { question: "What art movement was Domenico Beccafumi part of?", answer: "Beccafumi was a leading <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painter of the Sienese school, blending <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> influences with distinctly local traditions. His elongated figures, unusual color harmonies, and supernatural lighting effects distinguished him from both Florentine precision and Venetian richness." },
      { question: "What are Beccafumi's major works?", answer: "His <strong>Old Testament pavement designs</strong> for Siena Cathedral (1518-1546) rank among the greatest marble floor decorations ever created. The frescoes in Siena's Palazzo Pubblico and altarpieces throughout Tuscany display his unique chromatic brilliance and inventive compositions." },
      { question: "Where can I see Beccafumi's paintings?", answer: "The <strong>Pinacoteca of Siena</strong> holds the largest collection of his panel paintings. Additional works hang at the <a href=\"/apps/masterpieces/museum/pitti-palace\"><strong>Pitti Palace</strong></a> in Florence, while Siena Cathedral preserves both his pavement designs and bronze angels that demonstrate his versatility across media." },
      { question: "What was Beccafumi's painting style?", answer: "Critics describe his style as <strong>\"chromatic lyricism.\"</strong> He used <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>vibrant colors</strong></a> and elongated figures to create works with almost supernatural luminosity. His unusual light sources and acid color combinations give his religious scenes an otherworldly, visionary quality." },
      { question: "Did Beccafumi work in sculpture?", answer: "Yes, he proved versatile across multiple media. He created <strong>bronze angels</strong> for Siena Cathedral around 1548 and designed the remarkable marble pavement that remains one of the building's greatest treasures. His skill as a draftsman informed both his painting and three-dimensional work." }
    ]
  },
  {
    slug: 'duccio',
    faqs: [
      { question: "What art movement was Duccio part of?", answer: "Duccio was the <strong>founder of the Sienese school</strong> during the Italian Gothic period, creating a bridge between Byzantine icon traditions and the naturalism that would follow. His innovations in emotional expression and spatial depth influenced Siena's artistic direction for over a century." },
      { question: "What is Duccio's most famous work?", answer: "The <strong>\"Maestà\"</strong> altarpiece (1308-1311), commissioned for Siena Cathedral's high altar, is his masterpiece. When completed on June 9, 1311, the massive double-sided panel was carried through the streets in triumph as the entire city celebrated with bells, musicians, and a public holiday." },
      { question: "Where can I see Duccio's paintings?", answer: "The main Maestà panels remain at Siena's Museo dell'Opera del Duomo, though several were sold in the 19th century to the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>. These scattered fragments testify to his importance." },
      { question: "Who did Duccio influence?", answer: "He trained artists who spread the Sienese style, including <strong>Simone Martini</strong> and the <strong>Lorenzetti brothers</strong> (Pietro and Ambrogio). His influence shaped Italian Gothic painting, establishing <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a>-ground devotional imagery as a Sienese specialty for generations." },
      { question: "How many of Duccio's works survive?", answer: "Only about <strong>ten works</strong> can be securely attributed to Duccio, though his workshop produced many more. Despite this small body of surviving paintings, his influence on subsequent generations of Sienese painters proved immense, making him one of medieval Italy's most important artists." }
    ]
  },
  {
    slug: 'georges-de-la-tour',
    faqs: [
      { question: "What art movement was Georges de La Tour part of?", answer: "La Tour was a French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter and leading Caravaggist who specialized in dramatic candlelit scenes. Though he never traveled to Italy, he absorbed Caravaggio's influence through Dutch followers like Gerrit van Honthorst, developing an even more radical simplification of form." },
      { question: "What are La Tour's most famous paintings?", answer: "<strong>\"The Newborn,\"</strong> <strong>\"St. Joseph the Carpenter,\"</strong> and <strong>\"The Lamentation over St. Sebastian\"</strong> rank among his most celebrated candlelit masterpieces. These nocturnal scenes reduce human forms to geometric shapes bathed in warm light from a single flame." },
      { question: "Where can I see Georges de La Tour's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the National Gallery of Art in Washington. The Musée Lorrain in Nancy, capital of his home region, also preserves paintings from his career." },
      { question: "Why was La Tour forgotten?", answer: "After his death in an epidemic in 1652, his work was completely forgotten for over 250 years. German art historian <strong>Hermann Voss</strong> rediscovered him in 1915, identifying paintings previously misattributed to other artists and establishing his modern reputation as a master of French painting." },
      { question: "What was La Tour's painting technique?", answer: "He specialized in <strong>nocturnal scenes</strong> lit by single candles, geometrically simplifying human forms while creating dramatic <strong>chiaroscuro</strong> effects. His mature works show figures reduced to almost abstract volumes, with <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>warm tones</strong></a> emerging from profound darkness." }
    ]
  },
  {
    slug: 'ivan-aivazovsky',
    faqs: [
      { question: "What art movement was Ivan Aivazovsky part of?", answer: "Aivazovsky was a <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter and arguably the greatest marine artist of the 19th century. His <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>seascapes</strong></a> combined dramatic weather, golden light, and human struggle against nature in ways that made him internationally famous during his lifetime." },
      { question: "What is Aivazovsky's most famous painting?", answer: "<strong>\"The Ninth Wave\"</strong> (1850) is his most celebrated work, showing survivors clinging to wreckage after a storm, bathed in redemptive golden light. The title references the old sailors' belief that the ninth wave in a storm cycle would be the largest and most destructive." },
      { question: "Where can I see Aivazovsky's paintings?", answer: "The Aivazovsky Gallery in Feodosia, his birthplace in Crimea, holds the largest collection. Works also hang at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg and the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow." },
      { question: "How many paintings did Aivazovsky create?", answer: "Aivazovsky created approximately <strong>6,000 paintings</strong> during his prolific 60-year career, making him one of history's most productive painters. The Russian phrase \"worthy of Aivazovsky's brush\" became an expression for anything excellent, showing how his name became synonymous with maritime mastery." },
      { question: "What was Aivazovsky's painting technique?", answer: "His signature <strong>glazing technique</strong>, called \"the wave of Aivazovsky,\" created luminous, translucent <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>water</strong></a>. He worked almost entirely from memory in his studio, believing that capturing the emotional essence of the sea mattered more than precise observation." }
    ]
  },
  {
    slug: 'jan-van-goyen',
    faqs: [
      { question: "What art movement was Jan van Goyen part of?", answer: "Van Goyen was a major <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter who pioneered the <strong>tonal landscape</strong> style using monochrome palettes and atmospheric effects. His muted browns, grays, and blues captured the low skies and flat horizons of the Netherlands with unprecedented subtlety." },
      { question: "What subjects did Jan van Goyen paint?", answer: "He painted Dutch <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, river scenes, and city panoramas along the <strong>Rhine, Waal, and Maas rivers</strong>. His coastal views and views of towns like Dordrecht and Leiden documented the ordinary beauty of Dutch geography that earlier artists had ignored." },
      { question: "Where can I see Jan van Goyen's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the National Gallery of Art in Washington. His enormous output means smaller examples appear in museums and auction houses regularly." },
      { question: "What was Jan van Goyen's painting style?", answer: "He used <strong>monochrome palettes</strong> of browns and grays with occasional touches of pale blue or red. His compositions feature low horizons, vast skies filled with clouds, and tiny figures that emphasize the expansiveness of Dutch <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> and atmosphere." },
      { question: "Who were Jan van Goyen's students?", answer: "His pupils included <strong>Jan Steen</strong>, who married his daughter Margaretha in 1649, and Nicolaes Berchem. Many Dutch landscape painters adopted his tonal approach, though the style fell from fashion by the 1650s as collectors preferred more colorful Italianate scenes." }
    ]
  },
  {
    slug: 'jean-baptiste-greuze',
    faqs: [
      { question: "What art movement was Jean-Baptiste Greuze part of?", answer: "Greuze worked during the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> period, creating genre scenes that combined Dutch Realist influence with moral narratives popular during the Enlightenment. Philosopher Denis Diderot championed his work as a corrective to frivolous aristocratic art, praising his ability to teach virtue through painting." },
      { question: "What are Greuze's most famous paintings?", answer: "<strong>\"The Village Bride\"</strong> (1761) and <strong>\"The Punished Son\"</strong> (1778) are among his most celebrated works. These dramatic domestic scenes feature expressive faces, moral lessons about family duty, and theatrical compositions that anticipate 19th-century academic narrative painting." },
      { question: "Where can I see Greuze's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the National Gallery of Art in Washington. The Wallace Collection in London preserves several of his popular young girl <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> heads." },
      { question: "What subjects did Greuze paint?", answer: "He specialized in <strong>sentimental genre scenes</strong> depicting virtuous family life, moral lessons, and dramatic emotional moments. His expressive heads of young girls, sometimes innocent and sometimes ambiguously sensual, were also enormously popular with collectors throughout Europe." },
      { question: "Why was Greuze in conflict with the Academy?", answer: "Greuze wanted recognition as a <strong>history painter</strong>, the Academy's highest rank reserved for mythological and historical subjects. When he submitted a classical scene, the Academy admitted him only as a genre painter. Humiliated, he boycotted the Salon for years and his later career suffered." }
    ]
  },
  {
    slug: 'jean-marc-nattier',
    faqs: [
      { question: "What art movement was Jean-Marc Nattier part of?", answer: "Nattier was a leading <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> portraitist at the court of Louis XV, famous for his elegant allegorical <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of French aristocrats depicted as classical goddesses. His flattering, sensuous style captured the refined taste of mid-18th-century France." },
      { question: "What are Nattier's most famous paintings?", answer: "His portraits of <strong>Louis XV's daughters</strong>, including Madame Adélaïde, Madame Victoire, and Madame Henriette as mythological figures like Diana and Hebe, are his most celebrated works. These paintings transformed royal princesses into idealized goddesses draped in sumptuous fabrics." },
      { question: "Where can I see Nattier's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the Wallace Collection in London. The Palace of Versailles preserves portraits of the royal family in their original setting." },
      { question: "What was Nattier's specialty?", answer: "He specialized in the <strong>\"portrait historié,\"</strong> depicting aristocratic sitters as classical goddesses like Diana the huntress or Hebe the cupbearer. This convention allowed ladies to be shown in classical undress while maintaining propriety, combining flattery with <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> theatrical display." },
      { question: "Did Nattier paint Russian royalty?", answer: "Yes, Nattier painted <strong>Peter the Great</strong> and Catherine of Russia during their 1715 visit to Paris, but he declined their invitation to work at the Russian court. He preferred to remain in France, where his success at Versailles was already assured." }
    ]
  },
  {
    slug: 'john-frederick-kensett',
    faqs: [
      { question: "What art movement was John Frederick Kensett part of?", answer: "Kensett belonged to the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> and was a master of <a href=\"/apps/masterpieces/movement/luminism\"><strong>Luminism</strong></a>, known for crystalline light and serene <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. His quiet, contemplative views of Long Island Sound and the Adirondacks represented a calm alternative to the dramatic wilderness scenes of earlier Hudson River painters." },
      { question: "What are Kensett's most famous paintings?", answer: "<strong>\"Lake George\"</strong> (1869) and <strong>\"Eaton's Neck, Long Island\"</strong> (1872) exemplify his silvery light and meditative calm. He painted Lake George in the Adirondacks over 80 times, fascinated by its changing light and the challenge of capturing pure atmosphere." },
      { question: "Where can I see Kensett's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> holds 38 paintings donated by his brother after the artist's death. The National Gallery of Art in Washington and the Brooklyn Museum also preserve important examples of his Luminist style." },
      { question: "Did Kensett help found any museums?", answer: "Yes, Kensett was a <strong>founder and trustee of the Metropolitan Museum of Art</strong>, helping shape American art institutions during his successful career. He also helped establish the Century Association and served on committees promoting American art education." },
      { question: "What was Kensett's painting technique?", answer: "His Luminist style featured <strong>nearly invisible brushstrokes</strong>, a silvery palette, and careful observation of atmospheric light effects that created meditative calm. Unlike the visible brushwork of <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>Impressionists</strong></a>, his surfaces appear smooth and almost photographic." }
    ]
  },
  {
    slug: 'rosa-bonheur',
    faqs: [
      { question: "What was Rosa Bonheur famous for?", answer: "Bonheur was the most famous female painter of the 19th century, specializing in <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>animal subjects</strong></a> painted with anatomical accuracy and emotional power. Her father, a Saint-Simonian socialist who believed in women's equality, trained her in an era when art schools excluded women." },
      { question: "What is Rosa Bonheur's most famous painting?", answer: "<strong>\"The Horse Fair\"</strong> (1853), a massive sixteen-foot canvas depicting draft horses at the Paris market, is her masterpiece. Queen Victoria requested a private viewing, and the painting now hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, donated by Cornelius Vanderbilt in 1887." },
      { question: "Where can I see Rosa Bonheur's paintings?", answer: "Her work hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the Metropolitan Museum of Art, and the National Museum of Women in the Arts in Washington. A smaller version of The Horse Fair is at the National Gallery in London." },
      { question: "Why did Bonheur wear trousers?", answer: "She obtained <strong>police permission to wear trousers</strong>, otherwise forbidden to women, so she could visit stockyards, slaughterhouses, and horse markets to study animal anatomy without drawing unwanted attention. This official permit had to be renewed every six months throughout her career." },
      { question: "What honors did Bonheur receive?", answer: "In 1865, she became the <strong>first woman awarded the Grand Cross of the Legion of Honor</strong>, France's highest distinction, presented personally by Empress Eugénie at her country estate. She lived openly with her female companion, Nathalie Micas, for over forty years." }
    ]
  },
  {
    slug: 'thomas-couture',
    faqs: [
      { question: "What art movement was Thomas Couture part of?", answer: "Couture worked in the <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> tradition with <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> influences, though his teaching methods proved more influential than his paintings. His loose, sketchy technique and emphasis on direct observation actually undermined Academic polish in his students' work." },
      { question: "What is Couture's most famous painting?", answer: "<strong>\"Romans During the Decadence\"</strong> (1847) caused a sensation at the Salon and established him as a leading figure in French painting. The massive canvas, over twenty-five feet wide, depicted Roman moral collapse as a veiled commentary on contemporary French society under the July Monarchy." },
      { question: "Where can I see Couture's paintings?", answer: "\"Romans During the Decadence\" hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, where its scale and moral ambition still impress visitors. Other works are scattered across French provincial museums and American collections built by his former students." },
      { question: "Who were Couture's famous students?", answer: "His students included <strong>Édouard Manet</strong>, who spent six years in his studio before rebelling against Academic conventions. Henri Fantin-Latour, Pierre Puvis de Chavannes, and Americans John La Farge and William Morris Hunt also trained under him, spreading his methods internationally." },
      { question: "Did Couture write about his teaching methods?", answer: "Yes, his 1867 book <strong>\"Méthode et entretiens d'atelier\"</strong> codified his teaching approach, which encouraged direct observation, innovative technique, and maintaining the freshness of sketches in finished works. This manual influenced art education in both France and America." }
    ]
  },
  {
    slug: 'viktor-vasnetsov',
    faqs: [
      { question: "What was Viktor Vasnetsov known for?", answer: "Vasnetsov founded the <strong>folklorist tradition</strong> in Russian painting, bringing fairy tales and epic legends to visual life. His images became so definitive that they shaped how Russians still imagine characters from folklore, appearing in schoolbooks, calendars, and chocolate boxes throughout the Soviet era and beyond." },
      { question: "What are Vasnetsov's most famous paintings?", answer: "<strong>\"The Bogatyrs\"</strong> (1881-1898) depicting three legendary Russian knights, <strong>\"Alyonushka\"</strong> (1881), and <strong>\"Ivan Tsarevich on the Grey Wolf\"</strong> (1889) are his most celebrated works. He spent eighteen years perfecting the Bogatyrs, which Pavel Tretyakov bought immediately upon completion." },
      { question: "Where can I see Vasnetsov's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> and the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a>. His Moscow home at Vasnetsov Lane is preserved as a museum, displaying his medieval-style architecture and fairy tale sketches in their original setting." },
      { question: "Did Vasnetsov work in other media besides painting?", answer: "Yes, he designed the <strong>façade of the Tretyakov Gallery</strong> (1901-1906) in neo-Russian style, created frescoes for St. Vladimir's Cathedral in Kiev, and designed theatrical sets and costumes for Rimsky-Korsakov's opera The Snow Maiden. He also invented the budyonovka military helmet." },
      { question: "What honors did Vasnetsov receive?", answer: "Tsar <strong>Nicholas II</strong> elevated him to hereditary nobility in 1912 for his services to Russian art and culture. A minor planet, 3586 Vasnetsov, was named after him and his painter brother Apollinary, who also specialized in <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>historical landscapes</strong></a>." }
    ]
  },
  {
    slug: 'charles-le-brun',
    faqs: [
      { question: "What art movement was Charles Le Brun part of?", answer: "Le Brun was the dominant figure of <a href=\"/apps/masterpieces/movement/baroque\"><strong>French Baroque</strong></a> art under Louis XIV, who declared him \"the greatest French artist of all time.\" He combined Italian grandeur with French classical restraint to create a royal style that glorified absolute monarchy and influenced European courts for generations." },
      { question: "What is Le Brun's most famous work?", answer: "The <strong>Hall of Mirrors</strong> (Galerie des Glaces, 1679-1684) at <a href=\"/apps/masterpieces/museum/palace-of-versailles\"><strong>Versailles</strong></a> is his greatest achievement. The thirty ceiling paintings celebrating Louis XIV's military victories have been called \"the true Sistine Chapel of French art\" for their ambition and decorative brilliance." },
      { question: "Where can I see Le Brun's work?", answer: "His decorations fill the <a href=\"/apps/masterpieces/museum/palace-of-versailles\"><strong>Palace of Versailles</strong></a>, including the Hall of Mirrors, War Room, and Peace Room. The <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> holds his easel paintings, including his monumental series on the battles of Alexander the Great." },
      { question: "What positions did Le Brun hold?", answer: "He was <strong>First Painter to the King</strong> from 1662, director of the Royal Academy of Painting and Sculpture, and director of the Gobelins tapestry manufactory. These combined positions gave him unprecedented control over French visual culture, from <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>royal decorations</strong></a> to furniture design." },
      { question: "Who influenced Le Brun's career?", answer: "Chancellor <strong>Séguier</strong> provided early patronage, funding his trip to Rome where <strong>Nicolas Poussin</strong> guided his classical studies. Later, minister Colbert supported his position at court. When Colbert died in 1683, Le Brun's influence waned as his rival Pierre Mignard gained favor." }
    ]
  },
  {
    slug: 'eastman-johnson',
    faqs: [
      { question: "What is Eastman Johnson best known for?", answer: "Johnson is celebrated for genre scenes of American life and sensitive portrayals of African Americans and Native Americans. His 1859 <strong>\"Negro Life at the South\"</strong> became one of the most discussed paintings in antebellum America, praised by both abolitionists and Southern defenders for its ambiguous depiction of enslaved life." },
      { question: "Where can I see Eastman Johnson's paintings?", answer: "As a co-founder of the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, many works hang there. The <a href=\"/apps/masterpieces/museum/smithsonian-american-art-museum\"><strong>Smithsonian American Art Museum</strong></a> and Brooklyn Museum also preserve important examples of his genre scenes and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>." },
      { question: "Why was Johnson called the 'American Rembrandt'?", answer: "During his time studying in <strong>The Hague</strong> (1851-1855), he absorbed Dutch Golden Age techniques so thoroughly that contemporaries gave him this nickname. Rembrandt's and Van Dyck's use of warm shadows and psychological insight shaped his mature portrait style." },
      { question: "What presidents did Johnson paint?", answer: "He painted three U.S. presidents from life: <strong>Chester Arthur, Grover Cleveland, and Benjamin Harrison</strong>, along with over 300 other prominent Americans. His portrait commissions from wealthy families provided steady income while he pursued genre subjects depicting American working life." },
      { question: "Did Johnson help found any museums?", answer: "Yes, Johnson was a <strong>co-founder of the Metropolitan Museum of Art</strong> in 1870. His name is inscribed at the museum's entrance alongside other founding trustees, recognizing his role in establishing America's first world-class art institution." }
    ]
  },
  {
    slug: 'jacopo-bassano',
    faqs: [
      { question: "What art movement was Jacopo Bassano part of?", answer: "Bassano was a <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painter of the <a href=\"/apps/masterpieces/movement/venetian-school\"><strong>Venetian school</strong></a> who pioneered night scenes and included rustic genre elements in religious paintings. His earthy approach brought peasants, <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>farm animals</strong></a>, and humble settings into sacred narratives." },
      { question: "What subjects did Jacopo Bassano paint?", answer: "He transformed <strong>religious subjects into rustic genre scenes</strong>, emphasizing peasants, livestock, and humble farmyard settings over religious grandeur. His nocturnal Nativities and Annunciations glow with candlelight while dogs, donkeys, and chickens crowd around sacred figures." },
      { question: "Where can I see Jacopo Bassano's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and Venice's Ducal Palace. The Museo Civico in his hometown of Bassano del Grappa preserves the largest collection of works by him and his four painter sons." },
      { question: "Did Bassano influence other artists?", answer: "Yes, his style influenced <strong>El Greco</strong>, who worked in Italy before moving to Spain, and anticipated <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> naturalism. His four sons continued spreading his approach through a productive workshop that exported paintings across Europe." },
      { question: "Where did Bassano get his name?", answer: "He took his name from his hometown of <strong>Bassano del Grappa</strong> near Venice, where he lived and worked for most of his life. Unlike most successful painters who moved to major art centers, he remained in this provincial town, bringing sophisticated Venetian color to local patrons." }
    ]
  }
];

async function main() {
  console.log('Updating 25 artists with expanded FAQs (Batch 18)...');
  let successCount = 0;
  let failCount = 0;

  for (const update of updates) {
    try {
      await prisma.artist.update({
        where: { slug: update.slug },
        data: { faqs: update.faqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${update.slug}`);
      successCount++;
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
      failCount++;
    }
  }

  console.log(`\nComplete: ${successCount} succeeded, ${failCount} failed`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
