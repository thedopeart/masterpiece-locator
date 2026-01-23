const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'gustave-dore-don-quixote-and-sancho-setting-out',
    description: `<p><a href="/apps/masterpieces/artist/gustave-dore"><strong>Gustave Doré</strong></a> created this engraving in 1863 as part of his famous illustration series for Cervantes' Don Quixote. The scene shows the aging knight and his loyal squire Sancho Panza departing on their adventures, with Don Quixote mounted on his gaunt horse Rocinante while the stocky Sancho rides his donkey beside him.</p>
<p>Doré produced over <strong>200 illustrations</strong> for the 1863 French edition published by Hachette in Paris. His images became so influential that they defined how readers visualized these characters for generations. The same engravings appeared in an 1870 English translation by Cassell, Petter, and Galpin, spreading his interpretation across Britain and America. His depiction of the lanky, idealistic Quixote contrasted against the short, practical Sancho shaped stage productions, films, and public imagination well into the modern era.</p>
<p>Doré brought a <strong>romantic sensibility</strong> to Cervantes' satirical novel. Rather than mocking Don Quixote, his illustrations present the knight as the hero he believed himself to be, viewing the world through his eyes. This sympathetic approach helped transform the character from comic figure to tragic idealist in popular culture.</p>`,
    faqs: [
      {
        question: "Who created Don Quixote and Sancho Setting Out?",
        answer: `This 1863 engraving was created by <a href="/apps/masterpieces/artist/gustave-dore"><strong>Gustave Doré</strong></a>, a French artist renowned for his book illustrations. Doré produced over 200 images for Cervantes' novel, making it one of his most celebrated projects.`
      },
      {
        question: "What art movement does this illustration belong to?",
        answer: `The work belongs to <strong>Romanticism</strong>, which favored emotion and individual expression. Doré's dramatic lighting and sympathetic portrayal of the delusional knight reflect the movement's interest in idealism over reality.`
      },
      {
        question: "Why are Doré's Don Quixote illustrations so famous?",
        answer: `Doré's depictions became the <strong>definitive visual interpretation</strong> of Cervantes' characters. His images influenced how readers, theater directors, and filmmakers portrayed Don Quixote and Sancho Panza for over a century.`
      }
    ]
  },
  {
    slug: 'paul-delaroche-h233micycle-section-2',
    description: `<p><a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted this monumental mural between 1836 and 1841 for the award theatre of the <a href="/apps/masterpieces/museum/201cole-nationale-sup233rieure-des-beauxarts-ensba"><strong>École des Beaux-Arts</strong></a> in Paris. The complete work spans 27 meters and depicts 75 great artists from across centuries, gathered in an imaginary assembly.</p>
<p>Minister Adolphe Thiers commissioned the project in September 1836, with architect Félix Duban designing the hemicycle space. Delaroche worked with four students to complete the ambitious composition. At the center, three masters of antiquity sit enthroned: the architect Ictinus, painter Apelles, and sculptor Phidias. They represent the unity of the arts. Below them, a <strong>semi-nude figure of Fame</strong> leans forward to distribute laurel wreaths, symbolizing the prestigious Grand Prix de Rome that students at the school competed to win.</p>
<p>The mural draws from Raphael's <strong>School of Athens</strong> and Ingres' Apotheosis of Homer, placing painters, sculptors, and architects spanning five centuries in conversation. Idealized female figures representing muses lean against the marble balustrade, adding the only feminine element to this gathering of old masters. A fire in 1855 caused considerable damage to the original, though it remains visible at the school today.</p>`,
    faqs: [
      {
        question: "Where can I see the Hémicycle?",
        answer: `The original mural is at the <a href="/apps/masterpieces/museum/201cole-nationale-sup233rieure-des-beauxarts-ensba"><strong>École des Beaux-Arts</strong></a> in Paris. A replica painted by Charles Béranger in 1853 is held at the Walters Art Museum in Baltimore.`
      },
      {
        question: "How large is the Hémicycle mural?",
        answer: `The complete work measures <strong>27 meters (88.5 feet)</strong> in length, wrapping around the curved wall of the award theatre. It took Delaroche and four assistants five years to complete.`
      },
      {
        question: "Who is depicted in the Hémicycle?",
        answer: `The mural shows <strong>75 great artists</strong> from different eras, including ancient Greeks, Renaissance masters, and more recent figures. The architects, painters, and sculptors are shown in imaginary conversation.`
      },
      {
        question: "What technique did Delaroche use?",
        answer: `Unlike traditional fresco, Delaroche painted directly on the wall using <strong>oil and wax</strong>. This technique, while visually rich, made the work vulnerable to the fire damage it suffered in 1855.`
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-happy-peasants',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this lively tavern scene around 1645. A group of peasants gathers in warm, rustic surroundings, drinking, laughing, and enjoying each other's company. The composition bursts with small details that reward close looking.</p>
<p>Van Ostade was a specialist in <strong>Dutch genre painting</strong>, particularly scenes of rural life during the Golden Age. His peasants aren't idealized or mocked. They're shown with warmth and humor, going about their daily pleasures in worn clothes and cluttered interiors. The artist returned to this subject multiple times, painting several versions with slight variations in composition and detail.</p>
<p>The <strong>Baroque style</strong> shows in the rich earth tones and the way light falls across the figures, picking out faces and gestures. Van Ostade studied with Frans Hals in Haarlem and developed his own approach to painting common folk with dignity. His tavern scenes influenced later artists interested in <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>people paintings</strong></a> and everyday subjects.</p>`,
    faqs: [
      {
        question: "Who painted Happy Peasants?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> created this work around 1645. He was one of the leading genre painters of the Dutch Golden Age, known for his sympathetic depictions of peasant life.`
      },
      {
        question: "What style is Happy Peasants painted in?",
        answer: `The painting is done in the <strong>Baroque style</strong> with warm earth tones and dramatic lighting typical of 17th-century Dutch genre painting. Van Ostade trained with Frans Hals in Haarlem.`
      },
      {
        question: "What are the dimensions of Happy Peasants?",
        answer: `The oil on canvas measures <strong>61 x 51.5 cm</strong> (approximately 24 x 20 inches). Van Ostade created multiple versions of this subject with slight compositional differences.`
      }
    ]
  },
  {
    slug: 'claude-lorrain-harbour-view-at-sunrise',
    description: `<p><a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> painted this imaginary harbor scene around 1637, capturing the first light of dawn spreading across the water. On the right, a Roman triumphal arch catches the early sun while boats and figures begin their morning activities along the shore.</p>
<p>The Frenchman who spent most of his career in Rome had a gift for <strong>atmospheric effects</strong>. Here, the golden sunrise creates a soft glow that unifies architecture, water, and sky. A round tower rises on the left, possibly a fortification, while classical ruins decorated with relief sculptures stand opposite. Small figures board boats and converse on the quay, giving scale to the grand setting.</p>
<p>Claude created at least three different <strong>seaport at sunrise</strong> compositions, each with subtle differences. This version now hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, acquired with support from the BankGiro Lottery and the Vereniging Rembrandt. The painting's provenance traces back to the collection of M. Guillaume Perrochel in 17th-century Paris, then Sèvres. Those drawn to <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold art</strong></a> will appreciate the luminous warmth Claude achieved.</p>`,
    faqs: [
      {
        question: "Where can I see Harbour View at Sunrise?",
        answer: `The painting is in the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam. It was purchased with support from the BankGiro Lottery and several Dutch cultural foundations.`
      },
      {
        question: "When was Harbour View at Sunrise painted?",
        answer: `<a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> created this work around <strong>1637-1638</strong>. He painted several variations on the seaport-at-sunrise theme throughout his career.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>74 x 98.3 cm</strong> (approximately 29 x 39 inches). The horizontal format suits the panoramic harbor view Claude specialized in.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies <strong>Classicism</strong>, with its idealized landscape, classical architecture, and carefully balanced composition. Claude was the leading landscape painter of the 17th-century classical tradition.`
      }
    ]
  },
  {
    slug: 'claude-lorrain-harbour-with-villa-medici',
    description: `<p><a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> painted this imaginary seaport in 1637 for a cardinal of the Medici family. The Villa Medici appears in the background, though the artist took creative license by placing the hilltop Roman estate directly on the shore. Family coats of arms above the clock tower and on the ships identify the patron.</p>
<p>The likely client was <strong>Cardinal Giancarlo de' Medici</strong>, who commanded the Knights of St. Stephen's Mediterranean fleet during this period. Grand Duke Cosimo I de' Medici had founded the knightly order in 1562 to combat pirates and heretics in the Mediterranean, and Giancarlo's naval responsibilities explain the maritime setting.</p>
<p>The real Villa Medici sits on the Pincio hill in Rome, not by any harbor. Cardinal Ferdinando de' Medici acquired and expanded the property in 1576, filling it with ancient sculptures including the famous <strong>Medici Venus</strong>, the Knife Grinder, and the Wrestlers. Some of these classical pieces appear depicted on the building's facade in the painting. The sculptures later moved to Florence, and Napoleon eventually made the villa the seat of the Académie de France. Today this painting hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      {
        question: "Where can I see Harbour with Villa Medici?",
        answer: `The painting is in the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The Medici family connection makes the Florentine location fitting for this commissioned work.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>102 x 133 cm</strong> (approximately 40 x 52 inches). It's one of Claude's larger harbor scenes from the 1630s.`
      },
      {
        question: "Who commissioned Harbour with Villa Medici?",
        answer: `<strong>Cardinal Giancarlo de' Medici</strong> likely commissioned the work around 1637. He commanded Mediterranean ships for the Knights of St. Stephen, an order founded by his ancestor Cosimo I.`
      },
      {
        question: "Is the Villa Medici really by the sea?",
        answer: `No, the real Villa Medici sits on <strong>Rome's Pincio hill</strong>, nowhere near water. <a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> invented the coastal setting to flatter his patron's naval role.`
      }
    ]
  },
  {
    slug: 'raoul-dufy-harfleur',
    description: `<p><a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> painted scenes of his native Normandy throughout his career, and Harfleur sits just east of his hometown Le Havre. This small city served as a frequent subject for artists exploring the French coast.</p>
<p>Dufy found his direction after seeing Matisse's <strong>Luxe, Calme et Volupté</strong> at the 1905 Salon des Indépendants. That encounter with Fauvism transformed his approach. He began using bold outlines, bright colors, and broad brushstrokes that departed from his earlier Impressionist training. The influence of <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal</strong></a> light and Norman landscape remained constant, but his handling grew more expressive.</p>
<p>Born in 1877, Dufy became known for <strong>colorful, airy paintings</strong> of leisure scenes, regattas, and urban views along the French Riviera. His work in textiles and decorative arts spread his cheerful aesthetic beyond gallery walls. Harfleur and the surrounding area gave him subjects throughout the early, formative period when he was developing the style that would make him famous.</p>`,
    faqs: [
      {
        question: "Who painted Harfleur?",
        answer: `<a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> painted this scene. He was born in nearby Le Havre in 1877 and frequently depicted the Normandy coast throughout his career.`
      },
      {
        question: "What art movement is Raoul Dufy associated with?",
        answer: `Dufy is associated with <strong>Fauvism</strong>, known for bold colors and expressive brushwork. He adopted this style after seeing Matisse's work at the 1905 Salon des Indépendants.`
      },
      {
        question: "Where is Harfleur located?",
        answer: `Harfleur is a small French city in <strong>Normandy</strong>, located just east of Le Havre near the Seine estuary. The area attracted many artists painting coastal and harbor scenes.`
      }
    ]
  },
  {
    slug: 'jan-steen-harpsichord-lesson',
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> painted this satirical scene between 1660 and 1669. An old man in outdated clothing pretends to give a music lesson to a fashionably dressed young woman seated at a harpsichord. The setting suggests wealth: carved doorways, gilt-framed paintings, fine silks.</p>
<p>A large <strong>key hangs prominently</strong> at the composition's center. Steen placed it deliberately above the old man's hand as it hovers near the young woman's fingers. The symbolism isn't subtle. The key points to his intentions, while the social gulf between teacher and student makes his interest appear ridiculous. She sits reserved and proper, accomplished in her music, while he plays the fool.</p>
<p>Richard Seymour-Conway, 4th Marquess of Hertford, acquired the painting in 1859. Lady Wallace later bequeathed it to the nation in 1897, and it now hangs at the <a href="/apps/masterpieces/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London. Steen's gift for <strong>psychological insight</strong> and wry humor made him one of the Dutch Golden Age's finest genre painters. His chaotic household scenes gave rise to the Dutch expression "a Jan Steen household," meaning a messy or disorderly home.</p>`,
    faqs: [
      {
        question: "Where can I see The Harpsichord Lesson?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London. Lady Wallace bequeathed it to the British nation in 1897.`
      },
      {
        question: "What is the meaning of the key in the painting?",
        answer: `The key hanging at center is a <strong>visual pun</strong>. It provides the "key" to interpreting the scene, pointing to the old man's inappropriate romantic interest in his young, wealthy student.`
      },
      {
        question: "When was The Harpsichord Lesson painted?",
        answer: `<a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> created this work between <strong>1660 and 1669</strong>. The exact date is unknown, but it comes from his mature period.`
      },
      {
        question: "What style is Jan Steen known for?",
        answer: `Steen excelled at <strong>Dutch genre painting</strong>, depicting everyday scenes with humor and moral undertones. His lively compositions often satirized social behavior and human folly.`
      }
    ]
  },
  {
    slug: 'martin-johnson-heade-haystacks-on-the-newburyport-marshes',
    description: `<p><a href="/apps/masterpieces/artist/martin-johnson-heade"><strong>Martin Johnson Heade</strong></a> painted the salt marshes at Newburyport, Massachusetts in 1862, establishing a subject he would return to throughout his career. Haystacks dot the flat, grassy expanse under a wide sky, with the atmosphere thick with coastal humidity.</p>
<p>Unlike the Hudson River School painters who sought the eternal and the sublime, Heade chased the <strong>momentary</strong>. He painted directly from nature, trying to capture shifting light and changing weather. In this sense, he anticipated what the Impressionists would explore decades later. Art historians credit him with discovering the salt marsh as a worthy subject for serious landscape painting.</p>
<p>The work measures 25 3/16 x 50 3/16 inches and bears Heade's signature and the date 1862 in the lower right. Dr. Alan C. Woods, Sr. donated it to the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in 1976, after it passed through the collection of Baltimore's Robert C. Hall. The <strong>Luminist movement</strong> that Heade helped define emphasized glowing, atmospheric effects. Those who appreciate <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> painting will find this a quietly powerful example.</p>`,
    faqs: [
      {
        question: "Where can I see Haystacks on the Newburyport Marshes?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore, Maryland. Dr. Alan C. Woods, Sr. donated it in 1976.`
      },
      {
        question: "What is the Luminist movement?",
        answer: `<strong>Luminism</strong> was an American painting style emphasizing atmospheric light effects and quiet, contemplative landscapes. <a href="/apps/masterpieces/artist/martin-johnson-heade"><strong>Heade</strong></a> was a key figure in the movement.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The canvas measures <strong>25 3/16 x 50 3/16 inches</strong> (63.9 x 127.4 cm). The wide, horizontal format captures the expansive flatness of the marsh landscape.`
      },
      {
        question: "Where are the Newburyport Marshes?",
        answer: `The salt marshes are located in <strong>Newburyport, Massachusetts</strong>, along the coast north of Boston. Heade painted this area repeatedly throughout his career.`
      }
    ]
  },
  {
    slug: 'rembrandt-head-and-bust-full-face',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created dozens of self-portraits across his career, making himself one of art history's most documented faces. This etching shows his head and upper body viewed straight on, a direct confrontation between artist and viewer.</p>
<p>Rembrandt produced approximately <strong>40 painted self-portraits</strong>, 31 etchings, and about seven drawings of himself. Modern scholarship, particularly the Rembrandt Research Project, has confirmed which works are authentic. Many of the etchings are informal, even playful: studies of extreme facial expressions or portraits in costume. He used himself as a convenient model to explore emotion and character.</p>
<p>The artist helped transform etching from a minor reproductive technique into a respected art form. His printed self-portraits carry as much weight as his painted ones. This work now belongs to the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. Whether showing himself laughing, grimacing, or simply staring back at the viewer, Rembrandt's self-examinations remain among the most revealing <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> in Western art.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt self-portrait?",
        answer: `This work is in the collection of the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage holds several works by Rembrandt.`
      },
      {
        question: "How many self-portraits did Rembrandt make?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created approximately <strong>100 self-portraits</strong> total: around 40 paintings, 31 confirmed etchings, and about 7 drawings spanning his entire career.`
      },
      {
        question: "What technique is this work?",
        answer: `This is an <strong>etching</strong>, a printmaking technique where lines are scratched into a metal plate. Rembrandt helped elevate etching to a fine art, producing highly prized impressions.`
      }
    ]
  },
  {
    slug: 'john-singer-sargent-head-of-a-capri-girl',
    description: `<p><a href="/apps/masterpieces/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted this portrait in 1878 during a working holiday on the Italian island of Capri. The subject is Rosina Ferrara, a seventeen-year-old local woman who briefly became his most frequent model that summer.</p>
<p>Sargent had just finished his studies with Carolus-Duran in Paris and was already finding success at the Salon. He traveled to Capri's village of Anacapri, popular with artists at the time, where he met Ferrara through his friend Frank Hyde. Her dark beauty captivated him. Sargent's biographer Evan Charteris described her as "a magnificent type, about seventeen years of age, her complexion a rich <strong>nut-brown</strong>, with a mass of blue-black hair."</p>
<p>The 22-year-old Sargent produced numerous sketches and finished paintings of Rosina that summer. Artists including Charles Sprague Pearce and George Randolph Barse also painted her. This particular portrait, an oil on canvas measuring 43.2 x 30.5 cm, is considered among the finest of his quick <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> from early in his career. A closely related version at the Denver Art Museum bears a dedication "To my friend Hyde" and the date 1878.</p>`,
    faqs: [
      {
        question: "Who is the subject of Head of a Capri Girl?",
        answer: `The model is <strong>Rosina Ferrara</strong> (1861-1934), a young woman from the island of Capri. She became <a href="/apps/masterpieces/artist/john-singer-sargent"><strong>Sargent's</strong></a> favorite model during his 1878 summer visit.`
      },
      {
        question: "When did Sargent paint this portrait?",
        answer: `Sargent created this work in <strong>1878</strong> while staying in Anacapri, Italy. He was twenty-two and had recently completed his training with Carolus-Duran in Paris.`
      },
      {
        question: "What are the dimensions of Head of a Capri Girl?",
        answer: `The oil on canvas measures <strong>43.2 x 30.5 cm</strong> (approximately 17 x 12 inches). A related version on cardboard at the Denver Art Museum is slightly smaller.`
      },
      {
        question: "What style is this painting?",
        answer: `The work is painted in a <strong>Realist</strong> style, though Sargent's loose brushwork hints at the virtuoso technique he would become famous for in his society portraits.`
      }
    ]
  },
  {
    slug: 'wilhelm-leibl-head-of-a-farm-girl',
    description: `<p><a href="/apps/masterpieces/artist/wilhelm-leibl"><strong>Wilhelm Leibl</strong></a> painted this portrait in 1879, showing a young peasant woman from the Bavarian countryside. The German Realist captured her features without flattery or sentimentality, presenting her as she appeared.</p>
<p>Leibl became the leading figure of <strong>German Realism</strong> in the late 19th century. He spent much of his career in rural Bavaria, living among the farmers and villagers he painted. His subjects weren't exotic or picturesque to him. They were neighbors. This closeness allowed an intimacy and directness that distinguished his work from artists who treated peasants as types rather than individuals.</p>
<p>The oil on panel now hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden. Leibl's meticulous technique shows in the careful rendering of the girl's skin, hair, and clothing. He didn't idealize rural poverty or mock country folk. He painted them with the same attention to <strong>psychological depth</strong> that portrait painters brought to aristocrats. This democratic approach to portraiture made him influential among later realists.</p>`,
    faqs: [
      {
        question: "Where can I see Head of a Farm Girl?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden, Germany. The museum houses one of Europe's finest old master collections.`
      },
      {
        question: "Who painted Head of a Farm Girl?",
        answer: `<a href="/apps/masterpieces/artist/wilhelm-leibl"><strong>Wilhelm Leibl</strong></a> (1844-1900) created this work in <strong>1879</strong>. He was the leading figure of German Realism and spent years living in rural Bavaria.`
      },
      {
        question: "What medium did Leibl use?",
        answer: `Leibl painted this portrait in <strong>oil on panel</strong>. His meticulous technique required slow, careful work, which suited the solid, traditional support of wood.`
      }
    ]
  },
  {
    slug: 'hans-holbein-younger-head-of-a-female-saint',
    description: `<p><a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> painted this small panel around 1515-1516, early in his career. The delicate face of a young woman gazes outward, her identity as a saint suggested by the work's traditional title rather than any visible attribute.</p>
<p>The panel measures just 23.5 x 21.5 cm and was already in its current format by the 16th century, when it entered the <strong>Amerbach collection</strong>. Art historians believe it was cut from a larger composition, along with a companion piece showing a male saint. What survives is essentially a fragment, though a beautiful one.</p>
<p>Holbein used a combination of <strong>oil, tempera, and wood</strong> techniques common in Northern Renaissance painting. He would later become famous for his penetrating portraits at the English court of Henry VIII, but this early work shows his skill already developing. The <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> holds several Holbein works, appropriate given that Basel was the artist's home for much of his career before moving to England.</p>`,
    faqs: [
      {
        question: "Where can I see Head of a Female Saint?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. Basel was Holbein's home base before he moved to England to serve Henry VIII.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The panel measures <strong>23.5 x 21.5 cm</strong> (approximately 9 x 8.5 inches). It was cut from a larger work, probably in the 16th century when it joined the Amerbach collection.`
      },
      {
        question: "When did Holbein paint this?",
        answer: `<a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> created this around <strong>1515-1516</strong>, during his early career in Germany before his fame as a court portraitist.`
      },
      {
        question: "What art movement does this represent?",
        answer: `The work belongs to the <strong>Northern Renaissance</strong>, characterized by detailed observation and religious subject matter. Holbein blended German tradition with Italian influences.`
      }
    ]
  },
  {
    slug: 'georges-seurat-head-of-a-girl',
    description: `<p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a> painted this portrait in 1879, well before developing the Pointillist technique that would make him famous. The work shows a young woman's face rendered in soft, traditional brushwork quite different from his later divided color experiments.</p>
<p>Seurat was only about twenty when he made this study. The <strong>Post-Impressionist</strong> innovations that would define his mature work, the tiny dots of pure color creating optical mixtures, lay several years ahead. His landmark A Sunday Afternoon on the Island of La Grande Jatte wouldn't appear until 1884-1886. This early portrait reveals an artist still learning his craft through conventional means.</p>
<p>The oil on canvas now belongs to <a href="/apps/masterpieces/museum/dumbarton-oaks-research-library-and-collection-was"><strong>Dumbarton Oaks</strong></a> in Washington, DC. That institution, known primarily for Byzantine studies and historic gardens, also holds a small collection of European paintings. Seeing Seurat's traditional early work helps explain why his later Pointillist breakthrough seemed so radical. The <strong>measured, scientific approach</strong> to color came from an artist who had first mastered older methods.</p>`,
    faqs: [
      {
        question: "Where can I see Seurat's Head of a Girl?",
        answer: `The painting is at <a href="/apps/masterpieces/museum/dumbarton-oaks-research-library-and-collection-was"><strong>Dumbarton Oaks</strong></a> in Washington, DC. The institution is better known for Byzantine art and gardens, but holds some European paintings.`
      },
      {
        question: "Is this painting done in Pointillism?",
        answer: `No, this 1879 work predates <a href="/apps/masterpieces/artist/georges-seurat"><strong>Seurat's</strong></a> development of <strong>Pointillism</strong>. That technique emerged in the mid-1880s with works like A Sunday Afternoon on the Island of La Grande Jatte.`
      },
      {
        question: "When did Seurat paint Head of a Girl?",
        answer: `Seurat created this portrait in <strong>1879</strong> when he was about twenty years old. It represents his early, conventional training before his innovative later experiments.`
      }
    ]
  },
  {
    slug: 'hieronymus-bosch-head-of-a-halberdier',
    description: `<p>This small panel shows a soldier's face in profile, attributed to a follower of <a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a>. The man wears military dress and appears to be a guard or mercenary, the type who might appear in one of Bosch's crowded religious scenes.</p>
<p>The work measures 28.2 x 21.3 cm and is painted in oil on panel. It likely represents a <strong>fragment</strong> cut from a larger composition. A similar figure appears in Bosch's Christ Crowned with Thorns, where a guard in the upper left wears comparable clothing, strikes a similar pose, and even has an arrow piercing his hat. This cropped portrait may come from another version or copy of that same subject.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid calls this piece "Crossbowman" in their records. The museum holds several major Bosch works including The Garden of Earthly Delights, The Haywain Triptych, and Extracting the Stone of Madness. Even as a fragment by a follower, this small panel offers a glimpse into the workshop practices surrounding Bosch's <strong>distinctive vision</strong> of medieval grotesquerie.</p>`,
    faqs: [
      {
        question: "Where can I see Head of a Halberdier?",
        answer: `The panel is at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which holds several important works by and attributed to Hieronymus Bosch.`
      },
      {
        question: "Did Hieronymus Bosch actually paint this?",
        answer: `Scholars attribute this to a <strong>follower of Bosch</strong> rather than the master himself. It's likely a fragment cut from a larger religious scene produced in his workshop or style.`
      },
      {
        question: "What are the dimensions of this panel?",
        answer: `The oil on panel measures <strong>28.2 x 21.3 cm</strong> (approximately 11 x 8 inches). Its small size and cropped composition suggest it was cut from something larger.`
      },
      {
        question: "What other Bosch works are at the Prado?",
        answer: `The Prado holds major <a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Bosch</strong></a> works including <strong>The Garden of Earthly Delights</strong>, The Haywain Triptych, and the Table of the Seven Deadly Sins.`
      }
    ]
  },
  {
    slug: 'theodore-gericault-head-of-a-horseman',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this military portrait around 1812, during the height of the Napoleonic era. A cavalry officer's face emerges from dark shadows, his features strongly modeled and his expression intense.</p>
<p>Géricault was drawn to <strong>horses and soldiers</strong> throughout his short career. He debuted at the 1812 Salon with The Charging Chasseur, a dramatic equestrian portrait that announced his talent for military subjects. This smaller study, measuring 36 x 44 cm, shares that interest in martial figures. The Romantic style shows in the emotional intensity and the contrast between light and shadow.</p>
<p>The work now hangs at the <a href="/apps/masterpieces/museum/musee-bonnat"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France. Géricault would go on to paint The Raft of the Medusa in 1818-1819, one of French Romanticism's defining images. He died in 1824 at just 32, leaving a body of work that <strong>bridged Neoclassicism and Romanticism</strong>. His fascination with military subjects, anatomy, and dramatic action influenced Delacroix and later artists drawn to <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse art</strong></a> and dynamic movement.</p>`,
    faqs: [
      {
        question: "Where can I see Head of a Horseman?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/musee-bonnat"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France. The museum holds an important collection of drawings and paintings.`
      },
      {
        question: "When did Géricault paint this?",
        answer: `<a href="/apps/masterpieces/artist/theodore-gericault"><strong>Géricault</strong></a> created this around <strong>1812</strong>, the same year he debuted at the Paris Salon with his dramatic equestrian painting The Charging Chasseur.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>36 x 44 cm</strong> (approximately 14 x 17 inches). It's a relatively small study compared to his major exhibition pieces.`
      },
      {
        question: "What art movement does this represent?",
        answer: `The work exemplifies <strong>Romanticism</strong>, with its emotional intensity, dramatic lighting, and military subject matter. Géricault helped establish this movement in French painting.`
      }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 15 artworks...\n');

  for (const artwork of artworks) {
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
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nBatch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
