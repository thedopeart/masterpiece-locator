const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'leonardo-da-vinci-profile-of-a-warrior-in-helmet',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this silverpoint drawing around 1472 while studying under Andrea Verrocchio in Florence. The work depicts a warrior in profile wearing an elaborate winged helmet adorned with flowers and acanthus leaves. A lion decorates the breastplate. The <strong>silverpoint technique</strong> produces thin, delicate lines that have turned grey over time.</p>
<p>Long thought to portray Hannibal, scholars now believe it copies a lost metal relief by Verrocchio depicting Darius the Great. The drawing showcases Leonardo's early mastery of detail, from the curling hair to the modeled face. Now at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London, it measures 28.5 by 20.7 centimeters.</p>`,
    faqs: [
      {
        question: "Where can I see Profile of a Warrior in Helmet?",
        answer: `This silverpoint drawing hangs at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London, England. The museum houses one of the world's finest collections of drawings and prints, including numerous Renaissance works.`
      },
      {
        question: "What technique did Leonardo use for this drawing?",
        answer: `Leonardo used <strong>silverpoint</strong>, a popular medium among <a href="/apps/masterpieces/movement/early-renaissance"><strong>Early Renaissance</strong></a> artists. The technique involves drawing with a silver-tipped stylus on specially prepared paper, producing fine lines that oxidize to grey over time.`
      },
      {
        question: "Who is depicted in this drawing?",
        answer: `The warrior was long identified as <strong>Hannibal</strong>, but scholars now believe it represents Darius the Great, copied from a lost relief by Leonardo's teacher, Andrea Verrocchio. The elaborate helmet features wings, flowers, and acanthus leaves.`
      }
    ]
  },
  {
    slug: 'jan-van-eyck-the-soldiers-of-christ',
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted The Soldiers of Christ between 1427 and 1432 as part of the famous Ghent Altarpiece. This narrow panel shows armored soldiers on horseback, their <strong>glittering armor</strong> rendered with extraordinary precision. Flags lift aloft as they process toward the central Adoration of the Lamb scene.</p>
<p>The panel sits alongside the Just Judges on the lower register of this monumental altarpiece. Van Eyck's attention to the clothing, weaponry, and displays demonstrates his mastery of oil painting technique. The complete altarpiece remains at <a href="/apps/masterpieces/museum/saint-bavo-cathedral"><strong>Saint Bavo Cathedral</strong></a> in Ghent, Belgium, where it has resided since its completion.</p>`,
    faqs: [
      {
        question: "What is The Soldiers of Christ part of?",
        answer: `This panel belongs to the <strong>Ghent Altarpiece</strong>, a twelve-panel masterwork by <a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> and his brother Hubert. Completed in 1432, it's considered one of the most important paintings in Western art history.`
      },
      {
        question: "Where can I see The Soldiers of Christ?",
        answer: `The panel remains part of the Ghent Altarpiece at <a href="/apps/masterpieces/museum/saint-bavo-cathedral"><strong>Saint Bavo Cathedral</strong></a> in Ghent, Belgium. The cathedral displays all twelve panels of this <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> masterpiece.`
      },
      {
        question: "What does this panel depict?",
        answer: `The painting shows <strong>armored soldiers on horseback</strong> processing toward the central Lamb of God scene. They carry swords of Justice and display banners, representing Christ's earthly defenders in this religious narrative.`
      }
    ]
  },
  {
    slug: 'piero-della-francesca-st-francis-and-st-elizabeth',
    description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted St Francis and St Elizabeth around 1460 using oil and tempera on wood. The panel shows both saints standing in archways wearing 13th-century <strong>religious robes</strong>. St Francis bears a cross in his belt while St Elizabeth appears to hold something in her garments.</p>
<p>Piero's mathematical understanding of perspective makes the figures appear almost lifelike. The dark colors of their robes contrast sharply against the bright background, while halos above their heads reinforce their saintly appearance. This panel formed part of the Polyptych of Perugia. The work measures 124 by 64 centimeters and demonstrates Piero's characteristic geometric precision.</p>`,
    faqs: [
      {
        question: "Who painted St Francis and St Elizabeth?",
        answer: `<a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> created this panel around 1460. He was both a painter and mathematician, using geometric forms and perspective to give his figures a remarkably lifelike appearance.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies the <a href="/apps/masterpieces/movement/early-renaissance"><strong>Early Renaissance</strong></a> style. Piero used <strong>mathematical perspective</strong> to create depth and dimension, a hallmark technique of this period that revolutionized religious painting.`
      },
      {
        question: "What is depicted in this painting?",
        answer: `The panel shows <strong>St Francis of Assisi</strong> and <strong>St Elizabeth of Hungary</strong> standing in arched niches. Both wear 13th-century religious habits with golden halos identifying their sainthood.`
      }
    ]
  },
  {
    slug: 'john-everett-millais-my-beautiful-lady',
    description: `<p><a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a> was a founding member of the Pre-Raphaelite Brotherhood, known for his detailed paintings of beautiful women. His works from the 1850s and 1860s showcase <strong>brilliant colors</strong> and minute detail characteristic of the movement's early phase.</p>
<p>Millais became famous for paintings like Ophelia and The Blind Girl, which demonstrate his ability to capture both natural settings and emotional depth. His portraits of women became particularly popular, combining technical precision with romantic sensibility. As a child prodigy, he entered the Royal Academy Schools at just eleven years old, the youngest student ever admitted.</p>`,
    faqs: [
      {
        question: "Who was John Everett Millais?",
        answer: `<a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a> was a founding member of the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848. A child prodigy, he became the youngest student ever admitted to the Royal Academy Schools at age eleven.`
      },
      {
        question: "What style did Millais work in?",
        answer: `Millais helped establish the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> style, characterized by <strong>brilliant colors</strong>, minute detail, and subjects from literature and history. His early works feature painstaking naturalism.`
      },
      {
        question: "What subjects did Millais paint?",
        answer: `Millais painted literary scenes, landscapes, and especially <strong>portraits of beautiful women</strong>. Works like Ophelia, The Blind Girl, and Autumn Leaves established him as one of Victorian England's most celebrated artists.`
      }
    ]
  },
  {
    slug: 'piero-della-francesca-the-annunciation',
    description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this Annunciation fresco around 1464 as part of his Legend of the True Cross cycle. The scene depicts the moment when the angel Gabriel announces to Mary that she will bear Christ. Mary appears with <strong>monumental dignity</strong>, rendered far larger than Gabriel.</p>
<p>The fresco measures 329 by 193 centimeters and remains in the Basilica of San Francesco in Arezzo, Italy. Piero worked on the cycle in two stages, completing it in 1466. The subject matter draws from Jacobus de Voragine's Golden Legend. Despite some fading, the work conveys profound theological meaning through Piero's rational, ordered composition.</p>`,
    faqs: [
      {
        question: "Where can I see this Annunciation fresco?",
        answer: `This fresco remains in the <a href="/apps/masterpieces/museum/basilica-of-san-francesco-arezzo"><strong>Basilica of San Francesco</strong></a> in Arezzo, Italy. The church's chancel houses Piero's complete Legend of the True Cross cycle, one of the great achievements of Italian Renaissance painting.`
      },
      {
        question: "What cycle is this fresco part of?",
        answer: `The Annunciation belongs to Piero's <strong>Legend of the True Cross</strong> cycle, illustrating stories from the Golden Legend about the wood of Christ's cross. <a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero</strong></a> completed the series between 1452 and 1466.`
      },
      {
        question: "What makes this fresco distinctive?",
        answer: `The fresco exemplifies <a href="/apps/masterpieces/movement/early-renaissance"><strong>Early Renaissance</strong></a> ideals of order and clarity. Mary appears <strong>monumentally large</strong> compared to Gabriel, conveying her majesty and the profound importance of the moment.`
      }
    ]
  },
  {
    slug: 'jean-antoine-watteau-the-bird-nester',
    description: `<p><a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted The Bird Nester around 1710 in his characteristic Rococo style. Also known as The Robber of the Sparrow's Nest, this small oil painting shows a young couple with a dog sitting near a sparrow's nest. The scene captures <strong>aristocratic leisure</strong> with delicate brushwork and soft colors.</p>
<p>Measuring just 23.17 by 18.7 centimeters, the painting is one of Watteau's rare surviving arabesques. His feathery brushstrokes and pastel hues would influence generations of painters, including Boucher and Fragonard. Now at the <a href="/apps/masterpieces/museum/scottish-national-gallery"><strong>Scottish National Gallery</strong></a> in Edinburgh.</p>`,
    faqs: [
      {
        question: "Where can I see The Bird Nester?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/scottish-national-gallery"><strong>Scottish National Gallery</strong></a> in Edinburgh, Scotland. The museum holds an important collection of European paintings from the Renaissance through the 19th century.`
      },
      {
        question: "What style is The Bird Nester?",
        answer: `The painting exemplifies the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style that Watteau helped define. His <strong>delicate brushwork</strong>, pastel colors, and elegant scenes of aristocratic leisure became hallmarks of this 18th-century movement.`
      },
      {
        question: "What does the painting depict?",
        answer: `The scene shows a <strong>young couple with a dog</strong> gathered near a sparrow's nest, capturing a moment of pastoral leisure. It's one of Watteau's rare surviving arabesques, small decorative works featuring whimsical subjects.`
      }
    ]
  },
  {
    slug: 'juan-de-juanes-san-esteban-acusado-de-blasfemo',
    description: `<p><a href="/apps/masterpieces/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted Saint Stephen Accused of Blasphemy in 1562 as part of the Altarpiece of San Esteban in Valencia. The young saint, dressed in blue and gold, faces his accusers with <strong>serene composure</strong>, his gaze raised toward heaven. Light bathes Stephen while his accusers remain in shadow.</p>
<p>The painting captures the biblical moment when council members saw Stephen's face "like the face of an angel." The Jewish leaders appear agitated, their faces contorted as they point accusingly. This oil on panel measures 1.6 by 1.23 meters and demonstrates the harmonious colors and detail characteristic of the Valencian school. Now at the <a href="/apps/masterpieces/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid, Spain. The museum houses the finest collection of Spanish painting in the world, spanning from the medieval period to the 19th century.`
      },
      {
        question: "Who painted Saint Stephen Accused of Blasphemy?",
        answer: `<a href="/apps/masterpieces/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> created this panel in 1562. He was the leading figure of the Valencian school, known for <strong>meticulous detail</strong> and harmonious colors in his religious works.`
      },
      {
        question: "What story does this painting tell?",
        answer: `The painting depicts the trial of <strong>Saint Stephen</strong>, the first Christian martyr. His serene face, described in the Bible as angelic, contrasts with his angry accusers who eventually stoned him to death.`
      }
    ]
  },
  {
    slug: 'sandro-botticelli-the-return-of-judith-to-bethulia',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted The Return of Judith to Bethulia around 1472, depicting the biblical heroine's triumphant return after slaying the Assyrian general Holofernes. Judith carries a sword and olive branch while her maid Abra bears the <strong>severed head</strong> on her own head.</p>
<p>This small tempera on panel measures just 31 by 24 centimeters. It has a pendant work, The Discovery of the Body of Holofernes. Both paintings were donated to Grand Duchess Bianca Cappello around 1580 and reached the <a href="/apps/masterpieces/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence in 1632. Judith represented female strength and courage to Florentine Renaissance viewers.</p>`,
    faqs: [
      {
        question: "Where can I see this Botticelli painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum holds the world's finest collection of <a href="/apps/masterpieces/movement/early-renaissance"><strong>Renaissance</strong></a> painting, including many Botticelli works.`
      },
      {
        question: "What story does this painting depict?",
        answer: `The painting illustrates the Book of Judith, showing the heroine returning to Bethulia after <strong>beheading Holofernes</strong>. She carries a sword and olive branch of peace while her maid carries the general's severed head.`
      },
      {
        question: "How big is this painting?",
        answer: `The panel measures just 31 by 24 centimeters (12 by 9.4 inches), making it an <strong>intimate devotional work</strong>. Its small size was typical for private contemplation rather than public display.`
      }
    ]
  },
  {
    slug: 'katsushika-hokusai-women160walking-in160a160garden',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> created Women Walking in a Garden in 1798 in the traditional Ukiyo-e style. The scene shows elegantly dressed women strolling through a <strong>serene garden setting</strong>, some crossing a modest bridge while others converse. A thatched cottage and winding stream complete the tranquil composition.</p>
<p>Hokusai renders the lush vegetation with careful attention to detail, capturing the ephemeral beauty of daily life that defines Ukiyo-e art. The distinctive use of line and balanced composition reflects his mastery of the form. The painting now resides at the <a href="/apps/masterpieces/museum/musee-guimet"><strong>Guimet Museum</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see Women Walking in a Garden?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-guimet"><strong>Guimet Museum</strong></a> in Paris, France. The museum houses one of the finest collections of Asian art in Europe, with extensive Japanese holdings.`
      },
      {
        question: "Who painted this work?",
        answer: `<a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> created this painting in 1798. He's best known for The Great Wave off Kanagawa, part of his Thirty-six Views of Mount Fuji series from the 1820s-30s.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies <strong>Ukiyo-e</strong>, meaning "pictures of the floating world." This Japanese art movement captured scenes of everyday life, beautiful women, landscapes, and kabuki actors through distinctive linework and flat colors.`
      }
    ]
  },
  {
    slug: 'jean-antoine-watteau-happy-pierrot',
    description: `<p><a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted Pierrot Content (Happy Pierrot) as part of his beloved fête galante scenes recalling the Commedia dell'arte. The <strong>contented Pierrot</strong> sits at the center, flanked by two men and two women, one playing guitar. The magical atmosphere captures aristocratic leisure.</p>
<p>This painting differs from Watteau's famous melancholy Pierrot (Gilles) at the Louvre. Happy Pierrot represents one of the first fête galante scenes set outdoors. The work demonstrates Watteau's theatrical sensibility and mastery of Rococo elegance. Now at the <a href="/apps/masterpieces/museum/museo-thyssen-bornemisza"><strong>Museo Thyssen-Bornemisza</strong></a> in Madrid.</p>`,
    faqs: [
      {
        question: "Where can I see Happy Pierrot?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/museo-thyssen-bornemisza"><strong>Museo Thyssen-Bornemisza</strong></a> in Madrid, Spain. The museum's collection spans eight centuries of European painting, with particular strength in <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> works.`
      },
      {
        question: "What is a fête galante?",
        answer: `A <strong>fête galante</strong> depicts elegant outdoor gatherings of aristocrats engaged in leisure pursuits, music, and flirtation. <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Watteau</strong></a> invented this genre, which became central to Rococo painting.`
      },
      {
        question: "Who is Pierrot?",
        answer: `<strong>Pierrot</strong> is a stock character from Commedia dell'arte, Italian popular theater. Usually depicted as a sad, moonstruck clown in white costume, Watteau here shows a rare contented Pierrot surrounded by companions.`
      }
    ]
  },
  {
    slug: 'lawrence-alma-tadema-venantius-fortunatus-reading-his-poems-to-radegond',
    description: `<p><a href="/apps/masterpieces/artist/sir-lawrence-alma-tadema"><strong>Sir Lawrence Alma-Tadema</strong></a> painted Venantius Fortunatus Reading His Poems to Radegonda VI in 1862, early in his career. The scene shows the 6th-century Italian poet sharing <strong>heartfelt verses</strong> with the Frankish queen and saint Radegund, creating an atmosphere of intimacy and literary devotion.</p>
<p>Alma-Tadema renders flowing garments and warm light with the meticulous detail that would become his trademark. Though he later became famous for classical antiquity scenes, this early work demonstrates his talent for historical painting. The work resides at the <a href="/apps/masterpieces/museum/dordrechts-museum"><strong>Dordrechts Museum</strong></a> in the Netherlands.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/dordrechts-museum"><strong>Dordrechts Museum</strong></a> in Dordrecht, Netherlands. The museum specializes in Dutch painting and holds an important collection of 19th-century academic art.`
      },
      {
        question: "Who painted this historical scene?",
        answer: `<a href="/apps/masterpieces/artist/sir-lawrence-alma-tadema"><strong>Sir Lawrence Alma-Tadema</strong></a> created this painting in 1862 at age 26. He later became celebrated for his <strong>detailed depictions</strong> of classical antiquity and luxurious Roman interiors.`
      },
      {
        question: "What historical event does this depict?",
        answer: `The painting shows <strong>Venantius Fortunatus</strong> (c. 530-609 AD), an Italian poet, reading to Saint Radegund, a Thuringian princess who became a Frankish queen and later a nun devoted to religious life.`
      }
    ]
  },
  {
    slug: 'leon-spilliaert-the-crossing',
    description: `<p><a href="/apps/masterpieces/artist/leon-spilliaert"><strong>Léon Spilliaert</strong></a> created The Crossing in 1913 using pastel and colored pencils. The Belgian artist's work blends <strong>Symbolism and Expressionism</strong>, frequently depicting lone figures in dreamlike spaces. His paintings convey melancholy and silence through dark tonalities and simplified forms.</p>
<p>Spilliaert was largely self-taught, born in the coastal town of Ostend. He frequented Belgian Symbolist writers including Maurice Maeterlinck and Émile Verhaeren. His work draws inspiration from Edvard Munch, Fernand Khnopff, and Edgar Allan Poe. The Crossing measures 90 by 70 centimeters and remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who was Léon Spilliaert?",
        answer: `<a href="/apps/masterpieces/artist/leon-spilliaert"><strong>Léon Spilliaert</strong></a> (1881-1946) was a Belgian artist who blended <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a> and Expressionism. Born in Ostend, he was largely self-taught and associated with Symbolist writers.`
      },
      {
        question: "What style is The Crossing?",
        answer: `The work combines <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a> and <strong>Expressionism</strong>. Spilliaert's characteristic dark tonalities, simplified forms, and atmospheric mystery create a sense of melancholy that pervades much of his work.`
      },
      {
        question: "What medium did Spilliaert use?",
        answer: `Spilliaert created The Crossing using <strong>pastel and colored pencils</strong> on paper. He often worked in these media, which allowed him to achieve the soft, ethereal effects and dark atmospheres distinctive to his style.`
      }
    ]
  },
  {
    slug: 'leonardo-da-vinci-study',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> left behind approximately 13,000 pages of drawings and notes, making his studies invaluable records of Renaissance thought. His sketches range from <strong>anatomical investigations</strong> to mechanical inventions, architectural plans to natural observations.</p>
<p>Leonardo believed illustration took precedence over written explanation in teaching. His drawings served as "demonstrations" that the text then explained. This approach made his notebooks precursors to modern scientific illustration. Studies like this one reveal his insatiable curiosity and desire to understand everything from human muscles to flying machines.</p>`,
    faqs: [
      {
        question: "Why are Leonardo's studies important?",
        answer: `<a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a> left about 13,000 pages of drawings covering anatomy, mechanics, architecture, and nature. These sketches reveal his <strong>systematic investigation</strong> of the world and pioneered modern scientific illustration.`
      },
      {
        question: "What subjects did Leonardo study?",
        answer: `Leonardo studied virtually everything: <strong>human anatomy</strong> (dissecting over 30 corpses), mechanical devices, flight, water flow, plant growth, and architecture. His studies informed both his paintings and his engineering designs.`
      },
      {
        question: "What was Leonardo's drawing method?",
        answer: `Leonardo called his approach "dimostrazione" (demonstrations). He believed <strong>drawings should lead</strong>, with text serving to explain images rather than the reverse, making his work a precursor to modern scientific illustration.`
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-pierre-guillaume-cazeaux-halflength-seated-at-a-de',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> drew this portrait of Pierre-Guillaume Cazeaux in 1798 when the artist was just eighteen years old. The chalk drawing shows the sitter half-length, <strong>seated at a desk</strong>, demonstrating Ingres's early mastery of portraiture.</p>
<p>Though Ingres considered himself primarily a history painter in the tradition of Poussin and David, his portraits became his greatest legacy. This early work already displays the precise draftsmanship that would define his Neoclassical style. The drawing remains in a private collection and offers insight into the young artist's developing talent.</p>`,
    faqs: [
      {
        question: "Who created this portrait?",
        answer: `<a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> drew this portrait in 1798 at age eighteen. Though he aspired to history painting, his <strong>portraits</strong> became his most celebrated achievement.`
      },
      {
        question: "What style is this portrait?",
        answer: `The drawing exemplifies <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassicism</strong></a>, characterized by precise draftsmanship and classical ideals. Ingres studied under Jacques-Louis David, the leading Neoclassical painter of Revolutionary France.`
      },
      {
        question: "What medium did Ingres use?",
        answer: `Ingres created this portrait in <strong>chalk</strong>, a medium he mastered for portrait drawings. His pencil and chalk portraits became highly sought after by patrons throughout his long career.`
      }
    ]
  },
  {
    slug: 'jean-baptiste-greuze-the-village-bride',
    description: `<p><a href="/apps/masterpieces/artist/jean-baptiste-greuze"><strong>Jean-Baptiste Greuze</strong></a> painted The Village Bride in 1761, exhibiting it at that year's Salon to unanimous praise. The scene shows a rural wedding ceremony as a father gives his daughter's hand and dowry to the groom. The bride's mother and siblings gather around this <strong>tender moment</strong>.</p>
<p>The philosopher Denis Diderot championed the work, recognizing it as the first example of "moral painting." The composition captures family emotion through gestures and expressions, from the attentive notary to a jealous older sister looking on. Measuring 91.4 by 118.1 centimeters, it hangs in Room 928 at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see The Village Bride?",
        answer: `This painting hangs in Room 928 at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. The museum holds extensive collections of French 18th-century painting, including multiple works by Greuze.`
      },
      {
        question: "Why is this painting historically significant?",
        answer: `The philosopher Denis Diderot praised The Village Bride as the first example of <strong>"moral painting"</strong>, a genre depicting virtuous domestic scenes. It established <a href="/apps/masterpieces/artist/jean-baptiste-greuze"><strong>Greuze</strong></a> as a leading painter of sentimental subjects.`
      },
      {
        question: "What does the painting depict?",
        answer: `The scene shows a <strong>rural wedding</strong> as a father transfers his daughter's dowry to the groom. Family members display various emotions, from the bride's modest affection to an older sister's visible jealousy.`
      }
    ]
  },
  {
    slug: 'jean-baptiste-simeon-chardin-the-ray-or-the-kitchen-interior',
    description: `<p><a href="/apps/masterpieces/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Siméon Chardin</strong></a> painted The Ray in 1728, exhibiting it at the Exposition de la Jeunesse on the Place Dauphine. The still life shows a gutted skate hanging from a hook, its <strong>bloody underside</strong> contrasting with a cat, kitchen utensils, and a black pitcher.</p>
<p>The anthropomorphic ray appears almost to plead for mercy, its form resembling a sad face. Upon presenting this work and The Buffet, Chardin was admitted to the prestigious Académie Royale. Measuring 146 by 114 centimeters, the painting influenced Marcel Proust and Henri Matisse. Now at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see The Ray?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. It entered the collection during the French Revolution when works from the Académie Royale were transferred to the new national museum.`
      },
      {
        question: "Why is this painting significant?",
        answer: `The Ray earned <a href="/apps/masterpieces/artist/jean-baptiste-simeon-chardin"><strong>Chardin</strong></a> admission to the Académie Royale in 1728. Its <strong>realistic depiction</strong> of kitchen life influenced later artists including Henri Matisse, who made copies as a student.`
      },
      {
        question: "What makes this still life unusual?",
        answer: `The gutted skate's underside resembles a <strong>human face</strong>, appearing to plead for mercy. This anthropomorphic quality gives the otherwise mundane kitchen scene an unexpected emotional resonance.`
      }
    ]
  },
  {
    slug: 'jean-francois-millet-the-nun39s-parrot',
    description: `<p><a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> painted The Nun's Parrot between 1839 and 1840, also known as Vert Vert, the Nun's Parrot. This early work predates the <strong>rural peasant scenes</strong> that would make him famous. The oil on canvas measures 32.5 by 40 centimeters.</p>
<p>Millet would later become celebrated for works like The Angelus, The Gleaners, and The Sower, which depicted French peasant life with dignity and honesty. This genre painting demonstrates his early technical skill before he developed the Realist style of his mature career. The painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted The Nun's Parrot?",
        answer: `<a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> painted this work between 1839-1840. He later became famous for <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> depictions of French peasant life in works like The Angelus and The Gleaners.`
      },
      {
        question: "What period does this represent in Millet's career?",
        answer: `This is an <strong>early work</strong> from before Millet developed his signature style of dignified peasant scenes. It shows his technical ability in genre painting before he moved toward Realism in the 1850s.`
      },
      {
        question: "What is the alternative title of this painting?",
        answer: `The painting is also known as <strong>Vert Vert, the Nun's Parrot</strong>. The small oil on canvas measures 32.5 by 40 centimeters and remains in a private collection.`
      }
    ]
  },
  {
    slug: 'jean-honore-fragonard-the-prize-of-a-kiss',
    description: `<p><a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted The Prize of a Kiss in 1760, capturing a young man stealing a kiss from a giggling woman. Their <strong>playful interaction</strong> embodies the pursuit of love and flirtation central to Rococo art. Pastel hues and soft lighting create an ethereal atmosphere.</p>
<p>Fragonard's delicate brushwork conveys effortless movement, as if the figures are frozen mid-moment. The painting measures 60 by 47 centimeters and epitomizes aristocratic leisure and romantic pursuit. It now resides at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in St. Petersburg, Russia.</p>`,
    faqs: [
      {
        question: "Where can I see The Prize of a Kiss?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in St. Petersburg, Russia. The museum holds one of the world's finest collections of French <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> painting.`
      },
      {
        question: "What style is this painting?",
        answer: `The Prize of a Kiss exemplifies <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style with its <strong>lighthearted theme</strong>, pastel colors, and elegant depiction of aristocratic flirtation. Fragonard was a master of this decorative, playful genre.`
      },
      {
        question: "What is the subject of this painting?",
        answer: `The painting shows a young man <strong>stealing a kiss</strong> from a coy, giggling woman. Their playful chase epitomizes Rococo themes of love, pursuit, and aristocratic leisure.`
      }
    ]
  },
  {
    slug: 'nicolas-poussin-victory-of-joshua-over-the-amalekites',
    description: `<p><a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted Victory of Joshua over the Amalekites around 1625 during his early years in Rome. The biblical battle scene sprawls across the canvas with <strong>chaotic energy</strong>, following a zigzagging diagonal that pulls the eye through the struggle.</p>
<p>Poussin produced this work as a pendant to The Battle between the Israelites and the Amorites. After his patron Giovan Battista Marino died in 1625, financial difficulties forced Poussin to sell both paintings. Catherine II of Russia later acquired them. The canvas measures 97.5 by 134.3 centimeters and resides at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Poussin painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in St. Petersburg, Russia. Catherine II acquired it in the 18th century, and it remains part of the museum's French painting collection.`
      },
      {
        question: "What biblical story does this depict?",
        answer: `The painting shows <strong>Joshua's victory</strong> over the Amalekites, a battle described in Exodus. The Israelites triumph while Moses holds up his hands, supported by Aaron and Hur.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies Poussin's early <a href="/apps/masterpieces/movement/classicism"><strong>Classicism</strong></a>, combining <strong>dramatic action</strong> with ordered composition. Its dynamic diagonal structure guides viewers through the chaotic battle scene.`
      }
    ]
  },
  {
    slug: 'nicolas-poussin-pieta',
    description: `<p><a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted multiple versions of the Pietà throughout his career. His Lamentation over the Body of Christ from around 1655-1657 depicts the moment after Christ's body has been embalmed, about to be interred. The <strong>somber composition</strong> is veiled in darkness.</p>
<p>Joseph of Arimathea kneels at the tomb entrance while St. John raises Christ's head. Mary Magdalene kisses Christ's hand as the grief-stricken Virgin wipes tears with her blue cloak. Poussin used model figures arranged in a perspective box to plan his lighting. A version resides at the <a href="/apps/masterpieces/museum/national-gallery-of-ireland"><strong>National Gallery of Ireland</strong></a> in Dublin.</p>`,
    faqs: [
      {
        question: "Where can I see Poussin's Pietà?",
        answer: `One version hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-ireland"><strong>National Gallery of Ireland</strong></a> in Dublin. Another version from 1628 is at the Alte Pinakothek in Munich. Both demonstrate Poussin's mastery of <strong>religious narrative</strong>.`
      },
      {
        question: "What moment does this painting depict?",
        answer: `The painting shows the <strong>lamentation over Christ's body</strong> just before burial. Mary Magdalene kisses his hand, St. John cradles his head, and the Virgin Mary weeps in the background.`
      },
      {
        question: "How did Poussin compose his paintings?",
        answer: `<a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Poussin</strong></a> created <strong>small figure models</strong> and arranged them in a perspective box to plan lighting and composition. This methodical approach gave his works their characteristic clarity and drama.`
      }
    ]
  },
  {
    slug: 'paul-cezanne-the-four-seasons-winter',
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted The Four Seasons, Winter in 1861 to decorate the walls of Jas de Bouffan, his father's estate near Aix-en-Provence. The <strong>allegorical scene</strong> shows a peasant girl sitting near a fire, its warm hues contrasting with the cold surrounding landscape.</p>
<p>Cézanne was just twenty years old and studying law when he began these murals. He ironically signed them "Ingres," an artist he didn't admire, and dated Winter to 1811. The work helped convince his father to let him pursue art in Paris. Measuring 314 by 104 centimeters, it now resides at the <a href="/apps/masterpieces/museum/petit-palais"><strong>Petit Palais</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see this Cézanne painting?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/petit-palais"><strong>Petit Palais</strong></a> in Paris, France. The murals were detached from Jas de Bouffan after the estate's sale in 1899 and eventually entered the museum's collection.`
      },
      {
        question: "When did Cézanne paint this?",
        answer: `<a href="/apps/masterpieces/artist/paul-cezanne"><strong>Cézanne</strong></a> painted this in 1861 at age twenty, while still studying law. These <strong>early decorative murals</strong> helped persuade his father to let him pursue art in Paris.`
      },
      {
        question: "What does the allegory depict?",
        answer: `Winter is personified by a <strong>peasant girl warming herself</strong> by a fire. The orange and red flames contrast with the cool blues and grays of the desolate winter landscape behind her.`
      }
    ]
  },
  {
    slug: 'pierre-auguste-renoir-lise-with-umbrella',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted Lise with a Parasol in 1867, depicting his model and companion Lise Tréhot in a forest. She wears a white muslin dress and holds a black lace parasol, her face shaded while <strong>sunlight illuminates her body</strong> through the leaves.</p>
<p>Renoir began the work in the Chantilly Forest when he was twenty-six. After previous Salon rejections, this painting was accepted and exhibited in May 1868, establishing his early reputation. The full-length canvas measures 184 by 115 centimeters and shows influence from Gustave Courbet. Now at <a href="/apps/masterpieces/museum/museum-folkwang"><strong>Museum Folkwang</strong></a> in Essen, Germany.</p>`,
    faqs: [
      {
        question: "Where can I see Lise with a Parasol?",
        answer: `This painting hangs at <a href="/apps/masterpieces/museum/museum-folkwang"><strong>Museum Folkwang</strong></a> in Essen, Germany. German collector Karl Ernst Osthaus acquired it in 1901, recognizing the importance of this early <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> work.`
      },
      {
        question: "Who was Lise Tréhot?",
        answer: `<strong>Lise Tréhot</strong> was Renoir's model and companion from about 1865 to 1872. <a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Renoir</strong></a> met her through his friend Jules Le Coeur, whose family knew Lise's sister.`
      },
      {
        question: "Why is this painting significant?",
        answer: `Accepted at the 1868 Salon after previous rejections, it was Renoir's <strong>first critically successful work</strong>. Critics noted its debt to Courbet while recognizing emerging Impressionist tendencies in its plein-air approach.`
      }
    ]
  },
  {
    slug: 'joachim-patinir-landscape-with-st-john-the-baptist-preaching',
    description: `<p><a href="/apps/masterpieces/artist/joachim-patinir"><strong>Joachim Patinir</strong></a> painted Landscape with St. John the Baptist Preaching around 1510, pioneering landscape as an independent genre. The view plunges over a vast <strong>imaginary panorama</strong> dominated by a serene sky. A rocky mass rises on the left while a river winds to the horizon on the right.</p>
<p>John the Baptist and his audience gather in shade beneath thick trees as bright light illuminates the meandering river behind them. Patinir uses color to create depth: dark browns and greens in the foreground shift to lighter blues and grays in the distance. Dürer called him "the good landscape painter." Versions exist in Brussels and Philadelphia.</p>`,
    faqs: [
      {
        question: "Who painted this landscape?",
        answer: `<a href="/apps/masterpieces/artist/joachim-patinir"><strong>Joachim Patinir</strong></a> created this work around 1510. He pioneered <strong>landscape painting</strong> as an independent genre, and Albrecht Dürer called him "the good landscape painter."`
      },
      {
        question: "What are Patinir's landscapes called?",
        answer: `His panoramic views are called <strong>"Weltlandschaften"</strong> or "world landscapes." These composite panoramas seem to embrace the entire earth, with dramatic shifts from foreground to infinite horizon.`
      },
      {
        question: "Where can I see this painting?",
        answer: `Versions exist at the Royal Museums of Fine Arts of Belgium in Brussels and the Philadelphia Museum of Art. The <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> work demonstrates Patinir's innovative use of aerial perspective.`
      }
    ]
  },
  {
    slug: 'paul-gauguin-the-forest-path',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted The Forest Path in 1873, an early work in the Impressionist style before his later Post-Impressionist experiments. The <strong>woodland scene</strong> shows a trail bending and disappearing among trees, with a lone figure strolling down the path.</p>
<p>Gauguin uses a muted palette of earthy tones to capture diffused forest light. Towering trees frame the composition on both sides, with light clouds visible through the canopy. This serene landscape predates the bold colors and Tahitian subjects that would define his mature work. The painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "When did Gauguin paint this?",
        answer: `<a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted The Forest Path in 1873, during his early career. This <strong>Impressionist landscape</strong> predates the bold Post-Impressionist style and Tahitian subjects of his famous later works.`
      },
      {
        question: "What style is The Forest Path?",
        answer: `The work exemplifies early <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, with its <strong>muted earthy tones</strong>, attention to natural light, and plein-air approach to landscape. Gauguin's style would evolve dramatically in later decades.`
      },
      {
        question: "What does the painting depict?",
        answer: `The scene shows a <strong>tranquil forest trail</strong> winding through tall trees. A lone figure walks down the path, adding scale and human presence to the natural setting.`
      }
    ]
  },
  {
    slug: 'petrus-christus-potrait-of-a-carthusian',
    description: `<p><a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted Portrait of a Carthusian in 1446, creating a masterpiece of Northern Renaissance portraiture. The anonymous monk gazes directly at the viewer, bathed in intense light. A <strong>trompe-l'œil fly</strong> rests on the fictive frame, enhancing the illusion of reality.</p>
<p>Unlike Jan van Eyck's flat backgrounds, Christus places his subject in a warmly lit room corner. Light comes from multiple sources, meeting at the monk's white hood. The inscription declares "Petrus Christus made me in the year 1446." The painting measures 29.2 by 21.6 centimeters and resides at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of a Carthusian?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York City. It's part of the Jules Bache Collection and is considered a masterpiece of <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> portraiture.`
      },
      {
        question: "What makes this portrait unusual?",
        answer: `A <strong>trompe-l'œil fly</strong> appears on the painted frame, one of the earliest examples of this illusionistic technique. The fly may symbolize sin or mortality, or simply demonstrate the artist's virtuoso skill.`
      },
      {
        question: "Did this portrait originally have a halo?",
        answer: `When acquired in 1944, the portrait featured a <strong>halo</strong>. In 1994, specialists determined it was added in 17th-century Spain. The halo was removed to restore the painting's original appearance.`
      }
    ]
  }
];

async function main() {
  console.log('Updating 25 artworks (Jan 21 Batch 4)...\n');
  
  let updated = 0;
  
  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      updated++;
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.log(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }
  
  console.log(`\nUpdated ${updated}/${artworks.length} artworks`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
