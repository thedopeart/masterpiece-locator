const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'hans-holbein-younger-head-of-a-male-saint',
    description: `<p><a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> created this small devotional painting around 1515-1516, during his early years as an artist in Basel. The work depicts the head of a male saint rendered with oil and tempera on wood, measuring just 23.5 x 21.5 cm. It's a compact yet finely detailed piece that demonstrates Holbein's emerging talent for <strong>portraiture and religious imagery</strong>.</p>
<p>Holbein painted this alongside a companion piece, "Head of a Female Saint," both likely intended as private devotional images. The <strong>Northern Renaissance</strong> style is evident in the careful attention to facial features and the subdued, reverent tone. These early religious works predate his later fame as a court painter in England, where he would become renowned for his portraits of Henry VIII and the Tudor court.</p>
<p>The painting resides at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland, which holds one of the most significant collections of Holbein's work. Basel served as Holbein's primary base during his formative years, and the museum preserves numerous paintings and drawings from this period.</p>`,
    faqs: [
      {
        question: "Where can I see Head of a Male Saint by Holbein?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland. The museum holds an extensive collection of works by <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein the Younger</strong></a>, including many from his Basel period."
      },
      {
        question: "How big is Head of a Male Saint?",
        answer: "The painting measures 23.5 x 21.5 cm (roughly 9.3 x 8.5 inches). It's a small devotional work, typical of <strong>Northern Renaissance</strong> religious paintings meant for private contemplation."
      },
      {
        question: "What style is this painting?",
        answer: "This is a <strong>Northern Renaissance</strong> religious work. <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein</strong></a> combined oil and tempera on wood, showing the meticulous technique that would define his later career as a portrait master."
      }
    ]
  },
  {
    slug: 'diego-velazquez-head-of-a-man',
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this profile portrait around 1616-1617, during his early Seville period before he became court painter to Philip IV of Spain. The work shows a man looking upward and to the left, his mouth slightly open as if caught mid-thought or conversation. The <strong>earth-toned palette</strong> features rich sienna-orange clothing against a subdued background.</p>
<p>The light source from the left illuminates the contours of the subject's face, nose, and chin, creating a three-dimensional quality through careful interplay of light and shadow. This <strong>Baroque technique</strong> builds form and volume with deliberate brushwork. For collectors of <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown art</strong></a> and warm-toned pieces, this exemplifies the rich palette of Spanish Golden Age painting.</p>
<p>The painting entered the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> collection in 1814, where it remains today under inventory number ГЭ-295. It represents Velázquez's formative years when he was developing the observational skills that would make him one of history's most celebrated <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> artists.</p>`,
    faqs: [
      {
        question: "Where is Head of a Man by Velázquez displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. It has been part of the collection since 1814 and represents <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez's</strong></a> early career work."
      },
      {
        question: "When did Velázquez paint this?",
        answer: "This portrait dates to around 1616-1617, during <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez's</strong></a> early period in Seville. He was still developing his style before becoming court painter to Philip IV of Spain."
      },
      {
        question: "What size is this painting?",
        answer: "Head of a Man measures approximately 40 x 36 cm (about 15.7 x 14.2 inches). It's an intimate <strong>Baroque portrait</strong> showing Velázquez's mastery of light and shadow even in his early career."
      }
    ]
  },
  {
    slug: 'ford-madox-brown-head-of-a-page-boy',
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this study around 1837, early in his artistic training. Brown was just sixteen and studying in Belgium under Egide Charles Gustave Wappers when he created works like this figure study. The painting captures a young page boy, likely a preparatory sketch or character study for a larger historical composition.</p>
<p>Brown would go on to become one of the most important British painters of the Victorian era, closely associated with the <strong>Pre-Raphaelite Brotherhood</strong> though never formally a member. His dramatic, morally charged paintings like "Work" and "The Last of England" became defining images of the period. This early study shows the academic foundations he built before developing his distinctive graphic style.</p>
<p>The work is held at the <a href="/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>, which houses a significant collection of Pre-Raphaelite paintings. Birmingham's collection reflects the city's historical role as a center of <strong>Victorian art patronage</strong> and Pre-Raphaelite support.</p>`,
    faqs: [
      {
        question: "Where can I view Head of a Page Boy?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> in England. The museum holds a major collection of <strong>Pre-Raphaelite</strong> and Victorian art."
      },
      {
        question: "Was Ford Madox Brown a Pre-Raphaelite?",
        answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> was closely linked to the <strong>Pre-Raphaelite Brotherhood</strong> but never formally joined. He tutored Dante Gabriel Rossetti and shared their ideals about truthful, morally grounded art."
      },
      {
        question: "When was this painted?",
        answer: "Brown created this study around 1837, when he was approximately sixteen years old. He was training in Belgium at the time, building the academic skills that would underpin his later Pre-Raphaelite-influenced work."
      }
    ]
  },
  {
    slug: 'anthony-van-dyck-head-of-a-robber',
    description: `<p><a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted this character study around 1617-1618, during his early years working in Antwerp before his time as court painter in England. The work belongs to the genre known as a "tronie," a type of <strong>Baroque portrait study</strong> depicting interesting facial types and expressions rather than specific individuals. These works were popular in the Low Countries and allowed artists to explore dramatic characterization.</p>
<p>The painting shows the head of a man with rough, weathered features that earned it the title "Head of a Robber." Van Dyck's brushwork captures texture and personality with the confidence that would later make him one of the most sought-after portraitists in Europe. The <strong>dramatic lighting and psychological depth</strong> reflect the influence of his teacher Peter Paul Rubens.</p>
<p>Today this work hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum's collection includes numerous masterpieces from the Flemish Baroque period, providing rich context for van Dyck's development as an artist.</p>`,
    faqs: [
      {
        question: "What is a tronie painting?",
        answer: "A <strong>tronie</strong> is a Baroque character study depicting expressive faces rather than formal portraits. <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a> created Head of a Robber as this type of work, exploring dramatic facial types popular in the Low Countries."
      },
      {
        question: "Where is this van Dyck painting located?",
        answer: "Head of a Robber is displayed at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum holds an extensive collection of Flemish Baroque paintings."
      },
      {
        question: "When did van Dyck create this work?",
        answer: "This painting dates to 1617-1618, early in <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>van Dyck's</strong></a> career while he was still in Antwerp. He was working under <strong>Peter Paul Rubens</strong> at this time."
      }
    ]
  },
  {
    slug: 'jules-breton-head-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/jules-breton"><strong>Jules Breton</strong></a> dedicated his career to depicting the dignity and quiet beauty of rural French life. This head study of a peasant woman reflects his lifelong commitment to portraying the people of his native Pas-de-Calais region. Breton combined <strong>realistic observation</strong> with an idealized, almost classical sensibility that gave his subjects a timeless quality.</p>
<p>Breton was deeply admired by his contemporaries. Vincent van Gogh walked 85 kilometers on foot from Mons to Courrières hoping to meet him, though he turned back at Breton's gate, intimidated. Van Gogh's brother Theo later acquired several of Breton's works. First Lady Eleanor Roosevelt named Breton's "Song of the Lark" as her favorite painting and declared it "the most beloved work of art in America" after a Chicago newspaper contest.</p>
<p>This portrait hangs at the <a href="/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts de Lille</strong></a> in northern France, near the region that inspired so much of Breton's work. For those drawn to <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women in art</strong></a>, Breton's sensitive portrayals offer a distinctive perspective on 19th-century French painting.</p>`,
    faqs: [
      {
        question: "Who was Jules Breton?",
        answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Jules Breton</strong></a> (1827-1906) was a French <strong>Realist painter</strong> famous for dignified portrayals of rural life. Van Gogh admired him so much he once walked 85 kilometers hoping to meet him."
      },
      {
        question: "Where is this painting displayed?",
        answer: "Head of a Woman is at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in northern France. The museum is near the Pas-de-Calais region where Breton lived and worked."
      },
      {
        question: "What style did Breton paint in?",
        answer: "Breton worked in a <strong>Realist</strong> style that combined careful observation with classical idealization. His peasant subjects appear both particular and universal, contemporary yet timeless in their dignity."
      }
    ]
  },
  {
    slug: 'juan-de-valdes-leal-head-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> created this contemplative portrait during Spain's Golden Age, when Seville was a flourishing center of <strong>Baroque art</strong>. The painting depicts a woman in a moment of quiet introspection, her serene expression inviting viewers to consider her inner thoughts. Valdés Leal was known for capturing emotional depth through subtle facial expressions.</p>
<p>The composition uses rich, dark colors contrasted with the lighter tones of the subject's skin, creating drama and depth typical of Spanish Baroque painting. Valdés Leal worked in Seville alongside Bartolomé Murillo, and the two represented different approaches to religious and secular imagery. While Murillo favored softer, more idealized treatments, Valdés Leal often embraced <strong>intensity and psychological complexity</strong>.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. For admirers of Spanish painting or <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait art</strong></a>, this work demonstrates the emotional range of Golden Age masters.</p>`,
    faqs: [
      {
        question: "Where can I see this Valdés Leal painting?",
        answer: "Head of a Woman is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum has a notable collection of Spanish <strong>Baroque</strong> paintings."
      },
      {
        question: "Who was Juan de Valdés Leal?",
        answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Juan de Valdés Leal</strong></a> (1622-1690) was a Spanish Baroque painter from Seville. He's known for dramatic religious works and psychologically intense portraits."
      },
      {
        question: "What period does this represent?",
        answer: "This painting is from the <strong>Spanish Golden Age</strong>, when Seville was a major artistic center. <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> worked alongside masters like Murillo during this flourishing period of Spanish art."
      }
    ]
  },
  {
    slug: 'francois-boucher-head-of-a-woman-from-behind',
    description: `<p><a href="/apps/masterpieces/artist/francois-boucher"><strong>François Boucher</strong></a> drew this elegant study around 1740, at the height of the <strong>Rococo period</strong> in France. The chalk sketch depicts a woman seen from behind, her head turned slightly to reveal the line of her cheek and the arrangement of her hair. Boucher was the leading decorative painter of his era, favored by Madame de Pompadour and the French court.</p>
<p>Drawings like this often served as preparatory studies for Boucher's painted compositions, which filled aristocratic homes with pastoral scenes and mythological subjects. His quick, confident chalk work captures the grace and movement that characterized Rococo aesthetics. The <strong>intimate scale and spontaneous execution</strong> make these studies prized by collectors who appreciate seeing an artist's working process.</p>
<p>This drawing remains in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>. Boucher's studies rarely appear on the market, and institutions like the Louvre and the Wallace Collection hold significant groups of his drawings.</p>`,
    faqs: [
      {
        question: "What style is this drawing?",
        answer: "This is a <strong>Rococo</strong> chalk study from around 1740. <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> was the leading French painter of this decorative, elegant style favored by the aristocracy."
      },
      {
        question: "Where is Head of a Woman from Behind now?",
        answer: "This drawing is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. Boucher's sketches rarely appear publicly, though major museums like the Louvre hold significant groups of his work."
      },
      {
        question: "What was this drawing for?",
        answer: "Studies like this typically served as <strong>preparatory work</strong> for larger painted compositions. <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a> created many such sketches while developing his decorative paintings for aristocratic patrons."
      }
    ]
  },
  {
    slug: 'andrea-del-sarto-head-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> created this chalk portrait study around 1520, during the peak of the <strong>High Renaissance</strong> in Florence. The drawing captures a young man's features with the refined draftsmanship that earned del Sarto the nickname "the faultless painter" from later critics. His drawings show the same mastery of form and subtle shading that distinguished his altarpieces.</p>
<p>Del Sarto worked in Florence alongside contemporaries like Leonardo da Vinci, Michelangelo, and Raphael, though he never achieved their international fame during his lifetime. His influence was nonetheless significant, and he trained important Mannerist painters including Pontormo and Rosso Fiorentino. His drawings reveal a <strong>classical sensibility</strong> balanced with sensitive observation.</p>
<p>This study is held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, which possesses one of the world's finest collections of Italian Renaissance drawings. The Louvre's Cabinet des Dessins provides scholars with essential documentation of Florentine artistic practice.</p>`,
    faqs: [
      {
        question: "Where is this Andrea del Sarto drawing?",
        answer: "Head of a Young Man is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum's drawing collection includes many important <strong>High Renaissance</strong> works from Florence."
      },
      {
        question: "Who was Andrea del Sarto?",
        answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> (1486-1530) was a Florentine painter called \"the faultless painter\" for his technical perfection. He trained influential Mannerists like Pontormo and Rosso Fiorentino."
      },
      {
        question: "When was this created?",
        answer: "This chalk study dates to around 1520, during the <strong>High Renaissance</strong>. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Del Sarto</strong></a> was at the height of his powers in Florence at this time."
      }
    ]
  },
  {
    slug: 'edgar-degas-head-of-a-young-roman-girl',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> drew this portrait in 1856 during his formative years studying in Italy. The work, titled "Tête de jeune fille romaine" in French, captures a young Roman girl in a contemplative pose, gazing off to the side. Degas executed the piece using <strong>charcoal, pencil, and stump techniques</strong>, blending and softening the shading to create realistic flesh tones.</p>
<p>This early work predates the ballet scenes and Parisian subjects that would later make Degas famous. At twenty-two, he was absorbing the lessons of Italian Renaissance masters while developing the psychological insight that would distinguish his mature work. The textural contrast between softly rendered skin and crisper lines in the clothing shows his emerging technical sophistication.</p>
<p>The drawing measures 37.8 x 25.8 cm and is held at the <a href="/apps/masterpieces/museum/baltimore-museum-of-art-bma-baltimore-md-us"><strong>Baltimore Museum of Art</strong></a>. It represents a rarely seen aspect of Degas's career, when he was building the draftsmanship skills that would underpin his later innovations.</p>`,
    faqs: [
      {
        question: "Where can I see this Degas drawing?",
        answer: "Head of a Young Roman Girl is at the <a href=\"/apps/masterpieces/museum/baltimore-museum-of-art-bma-baltimore-md-us\"><strong>Baltimore Museum of Art</strong></a> in Maryland. The museum holds this early work from <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas's</strong></a> Italian study period."
      },
      {
        question: "What medium did Degas use?",
        answer: "Degas created this using <strong>charcoal, pencil, and stump</strong> techniques on paper. The stump blending softens shadows and creates realistic flesh tones that show his early technical skill."
      },
      {
        question: "When did Degas create this?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> made this drawing in 1856 while studying in Italy. He was twenty-two and absorbing lessons from Renaissance masters before developing his signature subjects."
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-head-of-a-young-woman',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted this portrait in 1908, shortly after arriving in Paris from Italy. The work shows the influence of African masks that fascinated Modigliani during this period. He would develop this interest into his signature style of <strong>elongated faces and almond-shaped eyes</strong>, though this early piece shows him still finding his distinctive voice.</p>
<p>Modigliani's portraits stand apart from other modernist work through their combination of stylization and emotional warmth. Unlike the fragmenting approach of Cubism developing simultaneously in Paris, Modigliani maintained a focus on the human face as a vehicle for psychological expression. His <strong>Expressionist approach</strong> flattened and abstracted features while preserving individuality.</p>
<p>This painting hangs at the <a href="/apps/masterpieces/museum/mus233e-d39art-moderne-de-la-ville-de-paris-paris-"><strong>Musée d'Art Moderne de la Ville de Paris</strong></a>. For those interested in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait art</strong></a> that bridges tradition and modernism, Modigliani's work offers a distinctive perspective.</p>`,
    faqs: [
      {
        question: "Where is this Modigliani painting?",
        answer: "Head of a Young Woman is at the <a href=\"/apps/masterpieces/museum/mus233e-d39art-moderne-de-la-ville-de-paris-paris-\"><strong>Musée d'Art Moderne de la Ville de Paris</strong></a>. The museum holds important examples of early 20th-century <strong>Expressionism</strong>."
      },
      {
        question: "What influenced Modigliani's style?",
        answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> was influenced by <strong>African masks</strong>, particularly from the Ivory Coast. This shows in the abstract treatment of facial features in his portraits."
      },
      {
        question: "When was this painted?",
        answer: "This portrait dates to 1908, shortly after <a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> arrived in Paris from Italy. He was developing the distinctive elongated style that would define his work."
      }
    ]
  },
  {
    slug: 'joaquin-sorolla-head-of-an-italian-girl',
    description: `<p><a href="/apps/masterpieces/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this portrait in 1886, capturing a young woman wearing the traditional Ciociaro costume from Italy's Ciociaria region. The work shows Sorolla developing the <strong>luminous brushwork and fresh color</strong> that would make him one of Spain's most celebrated painters. Though now famous for sun-drenched beach scenes, his early career included many figure studies like this one.</p>
<p>The painting measures 41 x 59 cm and demonstrates Sorolla's ability to capture natural beauty with seeming effortlessness. The Italian subject reflects his travels and artistic training outside Spain during his formative years. He would later return repeatedly to themes of <strong>Mediterranean light and coastal life</strong> that defined his mature work.</p>
<p>This portrait is held in a <a href="/apps/masterpieces/museum/private-collection"><strong>private collection</strong></a>. Major holdings of Sorolla's work can be found at the Sorolla Museum in Madrid, the Hispanic Society of America in New York, and various Spanish institutions.</p>`,
    faqs: [
      {
        question: "Who was Joaquín Sorolla?",
        answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a> (1863-1923) was a Spanish painter famous for luminous beach scenes and <strong>Impressionist</strong> light effects. He's considered one of Spain's greatest painters."
      },
      {
        question: "Where is this painting now?",
        answer: "Head of an Italian Girl is in a <a href=\"/apps/masterpieces/museum/private-collection\"><strong>private collection</strong></a>. Major Sorolla collections are at the Sorolla Museum in Madrid and the Hispanic Society in New York."
      },
      {
        question: "What is the Ciociaro costume?",
        answer: "The <strong>Ciociaro costume</strong> is traditional dress from Italy's Ciociaria region. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted this Italian subject during his early career travels outside Spain."
      }
    ]
  },
  {
    slug: 'paul-cezanne-head-of-an-old-man',
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted this portrait around 1866, during what scholars call his "dark period." The work predates the revolutionary landscapes and still lifes that would later influence Cubism and modern art. Here, the young Cézanne works in a <strong>Romantic idiom</strong> with darker tones and more dramatic handling than his mature Post-Impressionist style.</p>
<p>The portrait measures 51 x 48 cm and demonstrates Cézanne's early engagement with traditional portraiture before he developed his distinctive approach to form and color. His later work would break down objects into geometric planes, but this piece shows him still absorbing the lessons of the Old Masters and the Realist painters he admired.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, which holds important examples from throughout Cézanne's career. For those interested in seeing how a revolutionary artist developed, these early works provide essential context for understanding his later innovations.</p>`,
    faqs: [
      {
        question: "Where can I see this Cézanne painting?",
        answer: "Head of an Old Man is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds works spanning <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> entire career, from early to late."
      },
      {
        question: "What is Cézanne's dark period?",
        answer: "Cézanne's <strong>dark period</strong> (1860s) features Romantic-influenced work with dramatic tones before his later Post-Impressionist style. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> was still developing his revolutionary approach."
      },
      {
        question: "How big is this painting?",
        answer: "Head of an Old Man measures 51 x 48 cm (about 20 x 19 inches). It's a modest-sized <strong>portrait</strong> typical of Cézanne's early figure studies before he focused more on landscapes and still lifes."
      }
    ]
  },
  {
    slug: 'quentin-matsys-head-of-an-old-man',
    description: `<p><a href="/apps/masterpieces/artist/quentin-matsys"><strong>Quentin Matsys</strong></a> painted this character study around 1525, during the final years of his career as founder of the Antwerp school of painting. The work shows an elderly man's face rendered with the careful observation that characterized <strong>Northern Renaissance</strong> portraiture. Matsys was known for combining Flemish technical precision with Italian influences he absorbed during his career.</p>
<p>This type of <strong>character study</strong> allowed artists to explore expressive faces without the constraints of formal commissioned portraiture. Matsys built powerful visual interest through weathered features and careful attention to texture. The work reflects his innovative approach that introduced new motifs and moralizing subjects to Flemish painting while maintaining traditional technical standards.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museu Nacional d'Art de Catalunya</strong></a> in Barcelona. Matsys' work can also be found at the Prado, the Louvre, and other major European collections that preserve the Flemish Renaissance tradition.</p>`,
    faqs: [
      {
        question: "Who was Quentin Matsys?",
        answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> (c.1466-1530) founded the Antwerp school of painting. Legend claims he was trained as an ironsmith before becoming a painter. He made Antwerp a leading art center."
      },
      {
        question: "Where is Head of an Old Man displayed?",
        answer: "This painting is at the <strong>Museu Nacional d'Art de Catalunya</strong> in Barcelona. <a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Matsys'</strong></a> works appear in major European museums including the Prado and Louvre."
      },
      {
        question: "What style is this painting?",
        answer: "This is a <strong>Northern Renaissance</strong> character study from around 1525. <a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Matsys</strong></a> combined Flemish technical precision with Italian influences in his innovative approach."
      }
    ]
  },
  {
    slug: 'petrus-christus-head-of-christ',
    description: `<p><a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted this intimate devotional image around 1445, creating a fusion of two traditional types: the Holy Face and the Ecce Homo. The small work derives from a lost picture by Jan van Eyck, now known only through copies. Christus presented Christ with a <strong>furrowed brow, crown of thorns, and drops of blood</strong> running down his forehead, depicting the moment of suffering during the Passion.</p>
<p>The painting measures just 14.9 x 10.8 cm, typical of works meant for private devotion. Christus surrounded the head with a fictive frame, creating physical immediacy that draws viewers into contemplation. This approach reflects the <strong>Devotio Moderna</strong> movement that emphasized personal, emotional religious experience in the 15th-century Netherlands.</p>
<p>The work came to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> through the bequest of Lillian S. Timken in 1959. The Met's collection of Early Netherlandish painting provides essential context for understanding this devotional tradition.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "Head of Christ is at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. It came to the collection through the Lillian S. Timken bequest in 1959."
      },
      {
        question: "What is the Ecce Homo type?",
        answer: "<strong>Ecce Homo</strong> (\"Behold the Man\") depicts Christ during his suffering, with crown of thorns and signs of the Passion. <a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> merged this with the Holy Face tradition."
      },
      {
        question: "How small is this painting?",
        answer: "The painting measures just 14.9 x 10.8 cm (about 5.9 x 4.3 inches). This intimate scale suited its purpose as a <strong>private devotional</strong> image for personal contemplation and prayer."
      },
      {
        question: "Who was Petrus Christus?",
        answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> (active 1444, died 1475/76) was a Netherlandish painter from Bruges. He worked in the tradition of <strong>Jan van Eyck</strong> and created refined devotional images."
      }
    ]
  },
  {
    slug: 'gustav-klimt-head-study-of-a-girl-from-han225',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this small portrait of a girl from the Haná region of Moravia, likely during his student years around 1883. The work captures a young woman wearing a traditional headscarf, her sideways glance giving the image a spontaneous, unposed quality. Despite its modest scale, the portrait demonstrates the <strong>technical skill</strong> that would later make Klimt Austria's most famous painter.</p>
<p>Klimt connected detailed facial rendering with an almost monochromatic treatment of the dress, headscarf, and background, creating a light, airy effect around the carefully observed face. This approach hints at the contrast between decorative and naturalistic elements that would define his mature work, when <strong>gold leaf and ornamental patterns</strong> would frame his famous figures.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/leopold-museum-vienna-austria"><strong>Leopold Museum</strong></a> in Vienna, which houses the world's largest Klimt collection. The provenance includes Anna Koretz of Los Angeles and Dr. Rudolf Leopold, who assembled the collection that became the museum's foundation.</p>`,
    faqs: [
      {
        question: "Where is this Klimt painting?",
        answer: "Head Study of a Girl from Haná is at the <a href=\"/apps/masterpieces/museum/leopold-museum-vienna-austria\"><strong>Leopold Museum</strong></a> in Vienna. The museum holds the world's largest collection of <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> works."
      },
      {
        question: "What is the Haná region?",
        answer: "<strong>Haná</strong> is a region in Moravia (now Czech Republic) known for distinctive traditional costumes. The girl wears a characteristic headscarf from this area in <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> portrait."
      },
      {
        question: "When did Klimt paint this?",
        answer: "This portrait dates to around 1883, when <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> was likely still a student. It shows his early skill before he developed the golden, decorative style he's famous for today."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

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
      console.error(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }

  console.log('\nArtwork enrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
