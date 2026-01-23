const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'alphonse-mucha-poster-for-victorien-sardous-gismonda-starring-sar',
    description: `<p>On Christmas Eve 1894, Czech artist <a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> received an urgent call that would change his life. Sarah Bernhardt, the legendary actress starring in Victorien Sardou's play Gismonda, had rejected the promotional poster and demanded a replacement immediately. With all regular artists on holiday, the unknown illustrator Mucha took the job and delivered a design that caused a sensation across Paris.</p>
<p>The lithograph poster measures an impressive 216 by 74.2 centimeters, depicting Bernhardt as an exotic <strong>Byzantine noblewoman</strong> in the costume from the play's climactic Easter procession scene. Rather than realistic portrayal, Mucha captured the beauty and dignity of her stage presence, placing her life-size figure on an arched platform decorated with Byzantine mosaic patterns. The title and actress's name appear in a tympanum above.</p>
<p>When the poster appeared on Parisian hoardings in January 1895, Bernhardt proclaimed, "Monsieur Mucha, you have made me immortal." She signed Mucha to a six-year contract, commissioning posters for her productions of La Dame aux Camélias, Lorenzaccio, Médée, and Hamlet. This single commission established Mucha as a leading figure of <a href="/apps/masterpieces/movement/art-nouveau"><strong>Art Nouveau</strong></a> and defined the visual language of the Belle Époque.</p>`,
    faqs: [
      { question: "How did Mucha get the Gismonda commission?", answer: "On <strong>Christmas Eve 1894</strong>, Sarah Bernhardt urgently needed a new poster. With regular artists on holiday, <a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> was hired by chance, launching his career overnight." },
      { question: "What style is the Gismonda poster?", answer: "The poster exemplifies <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>, featuring decorative Byzantine patterns, flowing lines, and an elegant female figure that became Mucha's signature style." },
      { question: "How big is the Gismonda poster?", answer: "The lithograph measures <strong>216 by 74.2 centimeters</strong> (approximately 85 by 29 inches), a life-size depiction of Sarah Bernhardt in Byzantine costume." },
      { question: "What happened after the poster was released?", answer: "Bernhardt was so pleased she signed <a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Mucha</strong></a> to a <strong>six-year contract</strong>, commissioning posters for her subsequent plays including La Dame aux Camélias and Médée." }
    ]
  },
  {
    slug: 'pierre-bonnard-pot-of-flowers',
    description: `<p><a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this early work in 1888, the same year he and fellow students at the Académie Julian formed a brotherhood called the "Nabis," Hebrew for "prophets." This intimate still life captures his emerging interest in decorative composition and bold color that would define his career.</p>
<p>The painting demonstrates Bonnard's debt to Japanese printmaking, which earned him the nickname "Le Nabi très japonard" among his colleagues. The <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>floral arrangement</strong></a> shows his characteristic attention to domestic subjects and interior spaces that would later make him a recorder of France's Belle Époque.</p>
<p>As a founding member of <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionism's</strong></a> Nabis movement, Bonnard rejected Renaissance ideals of perspective and depth. The group sought instead to create paintings as decorative objects, influenced by Paul Gauguin's symbolism and the flat patterns of Japanese ukiyo-e prints. This early work anticipates the charming interiors, nudes, and Montmartre scenes that would establish Bonnard's reputation.</p>`,
    faqs: [
      { question: "When did Bonnard paint Pot of Flowers?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> created this work in <strong>1888</strong>, the same year he co-founded the Nabis movement with other art students in Paris." },
      { question: "What was the Nabis movement?", answer: "The <strong>Nabis</strong> (Hebrew for \"prophets\") were Post-Impressionist painters active 1888-1900 who rejected traditional perspective, influenced by Gauguin's symbolism and Japanese prints." },
      { question: "Why was Bonnard called 'Le Nabi très japonard'?", answer: "His fellow Nabis gave <a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> this nickname meaning \"the very Japanese Nabi\" due to his <strong>passion for Japanese art</strong> and ukiyo-e prints." },
      { question: "What subjects did Bonnard become famous for?", answer: "Bonnard became known for painting <strong>intimate domestic scenes</strong>, charming interiors, nudes on beds, and Montmartre scenes that recorded France's Belle Époque era." }
    ]
  },
  {
    slug: 'robert-delaunay-pouring',
    description: `<p><a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a> created this genre painting during 1915-1916, while living in exile in Spain and Portugal during World War I. Though the Orphism movement he had pioneered was effectively disbanded by the war, Delaunay continued exploring the relationships between color, form, and light.</p>
<p>Delaunay co-founded <a href="/apps/masterpieces/movement/orphism"><strong>Orphism</strong></a> with his wife Sonia, an offshoot of Cubism that focused on pure abstraction and vibrant colors. The movement's name, coined by poet Guillaume Apollinaire in 1912, comes from the legendary Greek musician Orpheus, reflecting the idea that painting should be like music. This approach proved fundamental to the development of abstract art.</p>
<p>Unlike the monochromatic phase of Cubism, Delaunay introduced brilliant color inspired by Fauvism and the color theories of chemist Michel Eugène Chevreul. He was among the earliest completely nonrepresentational painters, creating compositions built on the tensions between juxtaposed planes of color rather than recognizable subjects.</p>`,
    faqs: [
      { question: "When did Delaunay paint Pouring?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a> created this work in <strong>1915-1916</strong>, while living in Spain and Portugal during World War I, away from the Paris art scene." },
      { question: "What is Orphism?", answer: "<a href=\"/apps/masterpieces/movement/orphism\"><strong>Orphism</strong></a> was an offshoot of Cubism co-founded by Delaunay, focusing on pure abstraction and bright colors. Poet Guillaume Apollinaire named it after the Greek musician Orpheus." },
      { question: "How did Delaunay differ from other Cubists?", answer: "While other Cubists worked in <strong>monochromatic palettes</strong>, Delaunay introduced vibrant colors inspired by Fauvism and scientific color theory, helping bridge Cubism and abstract art." },
      { question: "What influenced Delaunay's color theories?", answer: "Delaunay drew on the writings of <strong>chemist Michel Eugène Chevreul</strong> and the theoretical work of Paul Signac, developing compositions based on juxtaposed planes of color." }
    ]
  },
  {
    slug: 'ferdinand-georg-waldmuller-prater-landscape',
    description: `<p><a href="/apps/masterpieces/artist/ferdinand-georg-waldmuller"><strong>Ferdinand Georg Waldmüller</strong></a> painted this view of the Prater, Vienna's famous public park, as part of a series studying the elm trees and natural scenery there. Brilliant sunlight floods into the scene, illuminating a multitude of trees with leaves rendered in fine detail. A man sits beside a tree in the left foreground, dwarfed by the majestic elms.</p>
<p>Waldmüller was the most important Austrian painter of the <strong>Biedermeier period</strong> (1815-1848), when a distinctive bourgeois culture flourished. His landscapes of the Prater and the Salzkammergut around Bad Ischl reflect his firm belief that the close study of nature should be the basis of painting. He was a pioneer of plein air painting, insisting on meticulous observation achieved by working outdoors.</p>
<p>Many of his Prater pictures focused on dead and dying branches, an emphasis on unidealized <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a> derived partly from seventeenth-century Dutch landscapes. This approach represented a move toward naturalism throughout Europe and influenced his teaching at the Vienna Academy, where his methods proved controversial but influential.</p>`,
    faqs: [
      { question: "What is the Prater?", answer: "The <strong>Prater</strong> is a large public park in Vienna, Austria, where <a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Waldmüller</strong></a> made a series of studies focusing on the elm trees and natural scenery." },
      { question: "What was the Biedermeier period?", answer: "The <strong>Biedermeier period (1815-1848)</strong> was an era when distinctive bourgeois culture developed in Austria, and Waldmüller became its most important painter." },
      { question: "What made Waldmüller's approach distinctive?", answer: "Waldmüller was a pioneer of <strong>plein air painting</strong>, insisting that art should be based on meticulous observation of nature achieved by working outdoors." },
      { question: "Where else did Waldmüller paint landscapes?", answer: "Besides the Prater, Waldmüller preferred painting the <strong>Salzkammergut around Bad Ischl</strong>, Austria, capturing natural scenery with careful attention to detail." }
    ]
  },
  {
    slug: 'hans-memling-praying-donor-with-st-william-of-maleval',
    description: `<p><a href="/apps/masterpieces/artist/hans-memling"><strong>Hans Memling</strong></a> created this panel around 1470-1484, depicting a kneeling donor presented by Saint William of Maleval. The saint, a twelfth-century hermit who became patron of armorers, stands behind the praying figure dressed in a fur-lined black coat over military clothing, guiding and presenting him to the sacred scene in an adjacent panel.</p>
<p>Memling was the leading painter in Bruges during the late fifteenth century, running a large workshop that produced religious works incorporating donor portraits for wealthy patrons. Born in the Middle Rhine region, he trained in the Brussels workshop of <a href="/apps/masterpieces/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> before settling in Bruges in 1465.</p>
<p>This painting formed part of a larger altarpiece, following the common practice of showing donors on the wings of triptychs, presented by their patron saints to Christ or the Virgin in the central panel. Memling's refined technique and ability to capture both spiritual devotion and individual character made him one of the most sought-after painters of the <strong>Early Netherlandish</strong> tradition.</p>`,
    faqs: [
      { question: "Who was Saint William of Maleval?", answer: "<strong>Saint William of Maleval</strong> was a twelfth-century hermit who became patron saint of armorers, often depicted in military clothing presenting donors in religious paintings." },
      { question: "What type of work is this painting?", answer: "This panel was part of a <strong>triptych altarpiece</strong>, showing the donor on a wing panel being presented by his patron saint to a sacred scene in the center." },
      { question: "Where did Hans Memling train?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> trained in the Brussels workshop of <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> before settling in Bruges in 1465." },
      { question: "What made Memling successful in Bruges?", answer: "Memling ran a <strong>large workshop</strong> producing religious works with donor portraits for wealthy patrons, becoming the city's leading painter through refined technique and spiritual sensitivity." }
    ]
  },
  {
    slug: 'carl-spitzweg-praying-peasant-girl-in-the-woods',
    description: `<p><a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> painted this intimate scene around 1855, capturing a peasant girl in quiet devotion amid a woodland setting. The small oil on canvas measures just 19 by 26 centimeters, typical of Spitzweg's preference for domestic, small-scale subjects treated with tenderness and gentle humor.</p>
<p>Spitzweg was self-taught as an artist, beginning by copying Flemish masters after receiving an inheritance in 1833 allowed him to abandon his career as a pharmacist. He became one of the most important artists of the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> and Biedermeier periods in Germany, though his later work moved closer to Impressionism.</p>
<p>His choice of subjects remained consistently local and domestic: small-town misfits, street musicians, postmen, night watchmen, and lovers bidding farewell. Spitzweg applied <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism's</strong></a> emphasis on emotion and nature to these everyday genre scenes, treating them with firm control of light, shadow, composition, and detail. He created over 1,500 pictures and drawings during his career.</p>`,
    faqs: [
      { question: "When did Spitzweg paint this work?", answer: "<a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Carl Spitzweg</strong></a> created this painting around <strong>1855</strong>, during the height of his career as a German Romantic painter." },
      { question: "How big is Praying Peasant Girl in the Woods?", answer: "The oil on canvas is quite small, measuring just <strong>19 by 26 centimeters</strong> (approximately 7.5 by 10 inches), typical of Spitzweg's intimate scale." },
      { question: "What subjects did Spitzweg typically paint?", answer: "Spitzweg favored <strong>local, domestic subjects</strong>: small-town characters, street musicians, postmen, night watchmen, and everyday scenes treated with tenderness and gentle humor." },
      { question: "What is Spitzweg's most famous painting?", answer: "His most famous works include <strong>\"The Poor Poet\" (1839)</strong> and \"The Bookworm\" (1850), both depicting eccentric characters in their private worlds." }
    ]
  },
  {
    slug: 'fra-angelico-predella-of-the-san-domenico-altarpiece',
    description: `<p><a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> created this predella (the lower section of an altarpiece) for the high altar of San Domenico, Fiesole, around 1424-1425. As a Dominican friar as well as a painter, Fra Angelico made three altarpieces for the church attached to his own convent, receiving no payment for his work there.</p>
<p>Unlike typical predellas showing narrative scenes from saints' lives, this one depicts Christ in glory in heaven, surrounded by angels in the central panel. This is framed by two panels showing rows of saints and Old Testament figures, enclosed on either side by Dominican "Blessed" figures who were revered but not yet canonized. The unusual arrangement reflects Dominican spirituality and the artist's deep religious commitment.</p>
<p>The predella panels are now at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, while the main altarpiece remains at San Domenico in Fiesole. Lorenzo di Credi repainted the background of the main panel in 1501. Fra Angelico worked with assistants on this project, including his pupil Zanobi Strozzi, though he painted the central panel with very little help.</p>`,
    faqs: [
      { question: "Where is the predella now?", answer: "The predella panels are housed at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, while the main altarpiece remains at San Domenico in Fiesole, Italy." },
      { question: "What makes this predella unusual?", answer: "Unlike typical predellas showing <strong>narrative scenes</strong>, this depicts Christ in glory surrounded by angels, with rows of saints and Dominican Blessed figures on either side." },
      { question: "Why wasn't Fra Angelico paid for this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> was a <strong>Dominican friar</strong>, and the church was attached to his own convent, so he worked without payment on this and two other altarpieces there." },
      { question: "Who helped create this altarpiece?", answer: "Fra Angelico worked with <strong>workshop assistants</strong> including his pupil Zanobi Strozzi, though he painted the central panel largely by himself." }
    ]
  },
  {
    slug: 'giovanni-bellini-presentation-at-the-temple',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this Presentation of Jesus at the Temple around 1460, taking inspiration from a version by his brother-in-law <a href="/apps/masterpieces/artist/andrea-mantegna"><strong>Andrea Mantegna</strong></a>. The tempera on wood measures 80 by 105 centimeters and shows the Virgin holding the infant Christ while the bearded Simeon reaches forward to receive him.</p>
<p>Bellini and Mantegna knew each other intimately, as Mantegna had married Giovanni's sister Nicolosia in 1453. Evidence suggests Bellini traced the outline of the figures directly from Mantegna's original painting. However, Bellini made significant changes: he replaced Mantegna's bronze frame with a stone parapet, bringing the figures closer to the viewer, and omitted the haloes.</p>
<p>Scholars have identified several figures as family portraits: the author's self-portrait and Mantegna (or his brother Gentile) for the two men on the right, with Nicolosia and their mother Anna for the women on the left. The painting now resides at the Fondazione Querini Stampalia in Venice, where a new immersive sensory installation was created for its display in 2025.</p>`,
    faqs: [
      { question: "Where is Bellini's Presentation at the Temple?", answer: "The painting is housed at the <strong>Fondazione Querini Stampalia</strong> in Venice, Italy, where a new immersive installation was created for its display in 2025." },
      { question: "How is this painting related to Mantegna's version?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a> and <a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Mantegna</strong></a> were brothers-in-law, and evidence suggests Bellini traced the figures directly from Mantegna's original painting." },
      { question: "What changes did Bellini make from Mantegna's version?", answer: "Bellini replaced Mantegna's <strong>bronze frame with a parapet</strong>, brought figures closer to the viewer, added more figures on the sides, and omitted the haloes." },
      { question: "Are there portraits in this painting?", answer: "Scholars believe the work includes <strong>family portraits</strong>: Bellini and Mantegna on the right, with Mantegna's wife Nicolosia and their mother on the left." }
    ]
  },
  {
    slug: 'andrea-mantegna-presentation-at-the-temple',
    description: `<p><a href="/apps/masterpieces/artist/andrea-mantegna"><strong>Andrea Mantegna</strong></a> created this intimate Presentation at the Temple around 1455, shortly after his marriage to Nicolosia Bellini in 1452-1453. The tempera on canvas measures 68.9 by 86.3 centimeters and was probably commissioned for a domestic interior rather than a church, inviting viewers to observe the sacred scene as if through a window.</p>
<p>The composition places the figures within a painted marble frame. Mary holds the swaddled infant Christ on a cushion that partially juts out from the picture plane, while the bearded priest Simeon reaches forward to receive him. Joseph stands in the center shadows with his aureole visible. Mantegna employs <strong>trompe l'oeil</strong> to make Mary's arm and the cushion appear to thrust out of the painting toward the viewer.</p>
<p>Scholars have recognized self-portraits in the work: Mantegna himself on the far right and his wife Nicolosia on the far left. The painting now hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin. <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a>, Mantegna's brother-in-law, later created his own version explicitly inspired by this work.</p>`,
    faqs: [
      { question: "Where is Mantegna's Presentation at the Temple?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin, Germany." },
      { question: "When did Mantegna paint this work?", answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Andrea Mantegna</strong></a> created this around <strong>1455</strong>, shortly after his marriage to Nicolosia Bellini, sister of painter Giovanni Bellini." },
      { question: "What trompe l'oeil technique does Mantegna use?", answer: "Mantegna makes Mary's arm and the <strong>cushion appear to thrust out</strong> of the painting, with the cushion partially jutting beyond the painted marble frame." },
      { question: "Are there self-portraits in this painting?", answer: "Scholars recognize <strong>Mantegna himself</strong> in the figure on the far right and his wife <strong>Nicolosia</strong> on the far left of the composition." }
    ]
  },
  {
    slug: 'rembrandt-presentation-in-the-temple',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted this scene in 1631, at age twenty-five, just before leaving his hometown of Leiden for Amsterdam. The oil on board measures 65 by 47 centimeters and represents the high point of his Leiden years, demonstrating the full range of his artistic abilities at that time.</p>
<p>The aged Simeon holds the infant Jesus in his arms, his upturned face praising God. Mary kneels to his left in surprise, while Joseph holds the two doves brought for sacrifice. Simeon's words in Luke's Gospel identify Jesus as "a light to lighten the Gentiles," which Rembrandt interpreted literally: the Christ Child appears as a veritable <strong>source of light</strong> illuminating Simeon's face and the surrounding figures.</p>
<p>Rembrandt painted this scene in a Gothic cathedral setting, the finest house of worship he knew, though it bore no resemblance to the ancient Jewish temple. The beautiful contrast between light on the central group and soft dimness in the cathedral's remoter parts exemplifies the chiaroscuro technique that made <a href="/apps/masterpieces/movement/baroque"><strong>Rembrandt</strong></a> famous. The painting now hangs at the <a href="/apps/masterpieces/museum/mauritshuis"><strong>Mauritshuis</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "Where is Rembrandt's Presentation in the Temple?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands, having been acquired by Prince William IV in 1733." },
      { question: "When did Rembrandt paint this work?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this in <strong>1631</strong> at age twenty-five, just before moving from his hometown Leiden to Amsterdam." },
      { question: "Why does Jesus appear as a light source?", answer: "Simeon's words in Luke call Jesus \"a <strong>light to lighten the Gentiles</strong>,\" which Rembrandt interpreted literally, making the infant Christ illuminate the scene around him." },
      { question: "Why is the setting a Gothic cathedral?", answer: "Rembrandt had <strong>never seen the ancient Jewish temple</strong>, so he set the scene in a Gothic cathedral, the grandest religious building he knew." }
    ]
  },
  {
    slug: 'eustache-le-sueur-presentation-of-the-virgin-in-the-temple',
    description: `<p><a href="/apps/masterpieces/artist/eustache-le-sueur"><strong>Eustache Le Sueur</strong></a> painted this scene between 1640 and 1645, depicting the moment when the three-year-old Virgin Mary was given by her mother Anne to serve in the Temple of Jerusalem. The oil on canvas measures 105 by 106 centimeters and represents one of Le Sueur's first major religious paintings.</p>
<p>Le Sueur studied under Simon Vouet, and this early work shows the strong influence of his teacher. Often called the "French Raphael" for his graceful, classically inspired style, Le Sueur became a founder of the French Academy of Painting and a leading exponent of the neoclassical style known as Parisian Atticism.</p>
<p>The painting demonstrates Le Sueur's characteristic lyrical tone and delicate color choices that distinguished him from other <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters. He was born in Paris in 1617 and spent his entire life there, placed by his father with Vouet's studio where he rapidly distinguished himself. The work now hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "Where is this Le Sueur painting displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
      { question: "What biblical scene does this depict?", answer: "It shows the <strong>Presentation of the Virgin</strong>, when three-year-old Mary was given by her mother Anne to serve in the Temple of Jerusalem." },
      { question: "Why was Le Sueur called the French Raphael?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> earned this nickname for his <strong>graceful, classically inspired style</strong> that reminded contemporaries of the Italian Renaissance master." },
      { question: "Who trained Le Sueur?", answer: "Le Sueur studied under <strong>Simon Vouet</strong>, and this early work shows the strong influence of his teacher's style before Le Sueur developed his own distinctive approach." }
    ]
  },
  {
    slug: 'ford-madox-brown-pretty-baalambs',
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this pastoral scene during the summer of 1851, depicting his second wife Emma and their first daughter Catherine feeding lambs in sunlight. The oil on panel measures 76.2 by 61 centimeters and adhered strictly to the <a href="/apps/masterpieces/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite</strong></a> ideal of "truth to nature."</p>
<p>Brown spent about five months on this painting, mostly at his house in Stockwell, south London. Each day when the weather provided the full sunlight he required, lambs and sheep were driven from their grazing on Clapham Common to act as models. The distant landscape suggests the north coast of Kent, though it was painted in London.</p>
<p>When exhibited at the Royal Academy, the work was "skied" (hung high where it was hard to see) and received harsh criticism. Ford Madox Ford described it as "hopelessly enigmatic," while critics called it both "Catholic Art" and "blasphemous." In truth, it was simply a study of light and heat. According to William Holman Hunt, this background was "the first out-of-door figure painting" to show Brown's conversion to Pre-Raphaelite principles. The painting now hangs at the <a href="/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where is Pretty Baa-Lambs displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> in the United Kingdom." },
      { question: "Who are the models in this painting?", answer: "The models were <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown's</strong></a> second wife <strong>Emma</strong> and their first daughter <strong>Catherine</strong>." },
      { question: "How did Brown paint the sheep?", answer: "Each sunny day, <strong>lambs and sheep were driven from Clapham Common</strong> to Brown's house in Stockwell to serve as models. The painting took about five months." },
      { question: "Was Ford Madox Brown a Pre-Raphaelite?", answer: "Though never a formal member of the <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite Brotherhood</strong></a>, Brown was closely associated with the movement and briefly taught Dante Gabriel Rossetti." }
    ]
  },
  {
    slug: 'jules-bastien-lepage-priam-at-achilles-feet',
    description: `<p><a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted this dramatic scene in 1876 for the Prix de Rome competition. The oil on canvas measures 147 by 114 centimeters and depicts the moment from Homer's Iliad when King Priam of Troy visits Achilles' camp to beg for the body of his slain son Hector.</p>
<p>The assigned subject was little calculated to inspire an artist of Bastien-Lepage's temperament. He had no faith in antiquity and found it impossible to achieve full development unless in the presence of nature herself. The young artist could never muster enthusiasm for Greek or Roman gods or historic scenes dictated by tradition.</p>
<p>Though the attempt was unsuccessful and Bastien-Lepage did not win the prize, critics noted the work was "not without merit; it is forceful, its colouring is good." The painter subsequently determined to return to country life, developing the <a href="/apps/masterpieces/movement/realism"><strong>Naturalist</strong></a> style for which he became famous. The painting now hangs at the <a href="/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts de Lille</strong></a>.</p>`,
    faqs: [
      { question: "Where is Priam at Achilles' Feet displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in Lille, France." },
      { question: "What story does this painting depict?", answer: "From <strong>Homer's Iliad</strong>, King Priam of Troy visits Achilles' camp to beg for the body of his slain son Hector, a powerful moment of grief and supplication." },
      { question: "Did Bastien-Lepage win the Prix de Rome?", answer: "No, <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage's</strong></a> attempt was <strong>unsuccessful</strong>. He subsequently abandoned historical subjects to focus on naturalistic scenes of country life." },
      { question: "How big is this painting?", answer: "The oil on canvas measures <strong>147 by 114 centimeters</strong> (approximately 58 by 45 inches), a substantial work created for academic competition." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-pride',
    description: `<p><a href="/apps/masterpieces/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> designed this allegorical image of Pride (Superbia) in 1557 as part of his Seven Deadly Sins series. The engraving was executed by Pieter van der Heyden and published by Hieronymus Cock in 1558, measuring approximately 26 by 34.4 centimeters.</p>
<p>Each of the seven prints follows a similar compositional scheme: the personification of the vice appears with a symbolic animal in the foreground, surrounded by fantastical creatures and scenes of moral corruption. Bruegel adopted the style of <strong>Hieronymus Bosch</strong>, to whom he was often compared, filling the compositions with grotesque demons and surreal imagery.</p>
<p>The Latin inscription "SVPERBIA" identifies the vice, while a verse below reads in translation: "Almighty God detests the vice of Pride, And God himself in Heaven by Pride is defied." Pride was traditionally considered the most serious deadly sin, the source from which all others flow. The print is held in multiple museum collections including the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Is Pride a painting or print?", answer: "Pride is an <strong>engraving</strong> designed by <a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a>, executed by Pieter van der Heyden, and published by Hieronymus Cock in 1558." },
      { question: "What style did Bruegel use for this series?", answer: "Bruegel adopted the style of <strong>Hieronymus Bosch</strong>, filling the compositions with grotesque demons and fantastical creatures representing moral corruption." },
      { question: "What does the Latin inscription mean?", answer: "\"SVPERBIA\" is Latin for <strong>Pride</strong>. The verse below states that God detests pride and was himself defied by pride in heaven." },
      { question: "Where can I see the Pride engraving?", answer: "The print is held in multiple collections including the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York (Harris Brisbane Dick Fund, 1928)." }
    ]
  },
  {
    slug: 'katsushika-hokusai-primer-book160of160treasury160loyal160vassals',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> created this woodblock print series in 1806, illustrating scenes from the Kanadehon Chūshingura, the most popular play in the history of Japanese theatre. The horizontal ōban format prints measure approximately 25.9 by 38.7 centimeters and were published by Tsuruya Kinsuke.</p>
<p>The Chūshingura (Treasury of Loyal Retainers) tells the story of the forty-seven samurai who avenged their lord's death, first performed as a puppet play in 1748. Though a work of fiction, its details are often confused with the real Akō Incident of 1701-1703. The story became a defining narrative of Japanese culture, illustrating ideals of loyalty, honor, and sacrifice.</p>
<p>Hokusai employs a restrained palette of predominantly <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues</strong></a>, grays, and earthy tones that complements the contemplative atmosphere. This minimalist approach, characteristic of the <a href="/apps/masterpieces/movement/ukiyo-e"><strong>ukiyo-e</strong></a> tradition, allows viewers to focus on the form and expression of the characters. The series can be found at the <a href="/apps/masterpieces/museum/guimet-museum-paris-france"><strong>Guimet Museum</strong></a> in Paris and other major collections.</p>`,
    faqs: [
      { question: "What story does this series illustrate?", answer: "The <strong>Kanadehon Chūshingura</strong> tells of forty-seven samurai who avenged their lord's death, the most popular play in Japanese theatre history." },
      { question: "When did Hokusai create this series?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Katsushika Hokusai</strong></a> created these woodblock prints in <strong>1806</strong>, published by Tsuruya Kinsuke in horizontal ōban format." },
      { question: "What colors dominate this series?", answer: "Hokusai uses a <strong>restrained palette</strong> of blues, grays, and earthy tones, creating a contemplative atmosphere typical of mature ukiyo-e work." },
      { question: "Where can I see this Hokusai series?", answer: "Prints from this series are held at the <a href=\"/apps/masterpieces/museum/guimet-museum-paris-france\"><strong>Guimet Museum</strong></a> in Paris, Harvard Art Museums, and other major collections worldwide." }
    ]
  },
  {
    slug: 'mary-cassatt-profile-of-an-italian-woman',
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> created this watercolor portrait around 1873, during her years of study and travel across Europe before settling in Paris. The work shows a woman in profile, demonstrating Cassatt's early exploration of portraiture before she developed the intimate mother-and-child subjects for which she became famous.</p>
<p>In 1872-1873, Cassatt spent eight months in Parma, Italy, studying Correggio and Parmigianino, then visited Spain, Belgium, and Holland to copy works by Velázquez, Rubens, and Hals. This intensive study of the old masters shaped her technical approach before she encountered <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>
<p>Cassatt settled permanently in Paris in June 1874, where Edgar Degas invited her to join the independent artists later known as the Impressionists. She became the only American, and one of only three women, to exhibit with the French Impressionists. Her style and subjects changed dramatically: she abandoned the colorful costume genre depictions of her European travels for scenes of contemporary Parisian life, particularly <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> and children in domestic settings.</p>`,
    faqs: [
      { question: "When did Cassatt paint this work?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> created this watercolor around <strong>1873</strong>, during her years of study and travel across Europe before settling in Paris." },
      { question: "What masters did Cassatt study in Italy?", answer: "During eight months in Parma, Cassatt studied <strong>Correggio and Parmigianino</strong>, then traveled to Spain, Belgium, and Holland to copy Velázquez, Rubens, and Hals." },
      { question: "How did Cassatt join the Impressionists?", answer: "<strong>Edgar Degas</strong> invited Cassatt to join the independent artists in 1874. She became the only American and one of only three women to exhibit with them." },
      { question: "What subjects is Cassatt famous for?", answer: "Cassatt became renowned for <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> paintings of <strong>women and children</strong> in intimate domestic settings, particularly mothers with their children." }
    ]
  },
  {
    slug: 'alphonse-mucha-prophetess',
    description: `<p><a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> painted this tempera on canvas in 1896, measuring 87 by 138 centimeters. The work depicts a female figure in the decorative style that made Mucha the defining artist of <a href="/apps/masterpieces/movement/art-nouveau"><strong>Art Nouveau</strong></a>, though with a more contemplative mood than his famous commercial posters.</p>
<p>1896 was an extraordinarily productive year for Mucha. He created the first "Seasons" decorative panel series and continued designing posters for Sarah Bernhardt's theatrical productions including La Dame aux Camélias and Lorenzaccio. The "Prophetess" represents his exploration of more personal artistic themes alongside his commercial work.</p>
<p>Living in Paris during the Art Nouveau period, Mucha developed his iconic style: women with flowing hair, pastel robes, and often a halo of light or <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flowers</strong></a> recalling religious icons from his Moravian boyhood. The painting is housed at the Mucha Museum in Prague, Czech Republic, dedicated to preserving and displaying the artist's legacy.</p>`,
    faqs: [
      { question: "Where is Mucha's Prophetess displayed?", answer: "The painting is housed at the <strong>Mucha Museum</strong> in Prague, Czech Republic, dedicated to preserving and displaying the artist's legacy." },
      { question: "When did Mucha paint Prophetess?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this work in <strong>1896</strong>, the same year he painted the first Seasons series and continued his Sarah Bernhardt commissions." },
      { question: "What style is the Prophetess?", answer: "The painting exemplifies <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>, featuring Mucha's signature decorative style with a contemplative female figure." },
      { question: "What influenced Mucha's female figures?", answer: "Mucha's iconic women with <strong>flowing hair, pastel robes, and halos</strong> were influenced by religious icons from his Moravian boyhood in the Czech lands." }
    ]
  },
  {
    slug: 'el-lissitzky-proun-1-c',
    description: `<p><a href="/apps/masterpieces/artist/el-lissitzky"><strong>El Lissitzky</strong></a> created Proun 1 C in 1919, an oil on panel measuring 68 by 68 centimeters. The work belongs to his Proun series, geometric abstract compositions that he described as "the place for changing trains from painting to architecture."</p>
<p>Lissitzky developed the Proun concept in 1919-1920 as his own variation on <a href="/apps/masterpieces/movement/suprematism"><strong>Suprematism</strong></a>, the movement founded by his mentor Kazimir Malevich. While Malevich's work remained flat, Lissitzky added illusory three-dimensional space to the floating geometric forms, rationalizing Suprematism by introducing perspective and architectural effects.</p>
<p>The word "Proun" derives from Russian, roughly meaning "Project for the Affirmation of the New." Lissitzky rejected any fixed orientation for these works, intending them to have "neither top nor bottom." He wrote: "We have made the canvas rotate. And as we rotated it, we saw that we were putting ourselves in space." The painting now hangs at the <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is Proun 1 C displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, Spain." },
      { question: "What does 'Proun' mean?", answer: "Proun derives from Russian, roughly meaning \"<strong>Project for the Affirmation of the New</strong>.\" <a href=\"/apps/masterpieces/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> called it the interchange between painting and architecture." },
      { question: "How do Prouns differ from Suprematism?", answer: "While <a href=\"/apps/masterpieces/movement/suprematism\"><strong>Suprematist</strong></a> works were flat, Lissitzky added <strong>illusory three-dimensional space</strong> and architectural effects to his geometric forms." },
      { question: "Why have Prouns no fixed orientation?", answer: "Lissitzky intended them to have \"<strong>neither top nor bottom</strong>,\" saying that rotating the canvas showed how it placed viewers in space." }
    ]
  },
  {
    slug: 'el-lissitzky-proun-5-a',
    description: `<p><a href="/apps/masterpieces/artist/el-lissitzky"><strong>El Lissitzky</strong></a> painted Proun 5 A in 1919, another landmark work in his groundbreaking series of abstract geometric compositions. The painting harmoniously combines the flat surfaces advocated by the <a href="/apps/masterpieces/movement/suprematism"><strong>Suprematists</strong></a> with the laws of Constructivist architecture.</p>
<p>The circles in Proun 5 A represent Lissitzky's concept of space. He theorized that the circle was inherently dynamic, capable of creating "a new space" beyond traditional perspective. These works proved fundamental to the development of modern abstract imagery and influenced industrial modern architecture.</p>
<p>Lissitzky served as a bridge between <a href="/apps/masterpieces/movement/constructivism"><strong>Constructivism</strong></a> and Suprematism. During the mid-1920s, while living in Germany, he significantly influenced the Dutch De Stijl group and Bauhaus artists. Only about 25 Prouns have survived, making each work a rare document of early abstract art. The artist's son Yen Lissitzky certified the authenticity of several works in 1975.</p>`,
    faqs: [
      { question: "When did Lissitzky create Proun 5 A?", answer: "<a href=\"/apps/masterpieces/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> painted this work in <strong>1919</strong>, as part of his groundbreaking Proun series combining Suprematist and Constructivist principles." },
      { question: "What do the circles represent?", answer: "Lissitzky theorized that circles were <strong>inherently dynamic</strong>, capable of creating \"a new space\" that existed beyond the limitations of traditional perspective." },
      { question: "How many Prouns survived?", answer: "Only about <strong>25 Prouns</strong> have been preserved, making each work a rare and valuable document of early abstract art." },
      { question: "Who did Lissitzky influence?", answer: "While living in Germany in the 1920s, Lissitzky significantly influenced the <strong>Dutch De Stijl group</strong> and <a href=\"/apps/masterpieces/movement/constructivism\"><strong>Bauhaus</strong></a> artists." }
    ]
  },
  {
    slug: 'edwin-landseer-ptarmigan',
    description: `<p><a href="/apps/masterpieces/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> painted this poignant scene around 1833, depicting two ptarmigans that have just been shot by a hunter. The male bird is shown in his death throes while his mate continues to guard their nest, unaware or refusing to accept the tragedy unfolding before her.</p>
<p>The ptarmigan was a favorite bird of sport in Scotland at the time. The underlying message speaks to the tragic impact of violence on love and familial commitment: ptarmigans mate for life, making the shooting especially cruel. Landseer had a particular affinity with Scotland, which he first visited in 1824. Scottish subjects featured prominently in his paintings thereafter, including his most famous work, The Monarch of the Glen.</p>
<p>Landseer once said of his animal paintings: "I wish to bring out human feeling and human thought through the medium of animal life." His ability to imbue animals with emotion made him extraordinarily popular during the Victorian era. The painting now hangs at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>. Engravings of his works, many produced by his brother Thomas, generated much of his fame and income.</p>`,
    faqs: [
      { question: "Where is Landseer's Ptarmigan displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a> in Philadelphia, Pennsylvania." },
      { question: "What is the painting's underlying message?", answer: "Ptarmigans <strong>mate for life</strong>, so the scene of a male dying while his mate guards the nest speaks to the tragic impact of violence on love and familial commitment." },
      { question: "Why was Landseer drawn to Scottish subjects?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Landseer</strong></a> first visited <strong>Scotland in 1824</strong> and developed a particular affinity for its Highland landscapes and wildlife, including his famous Monarch of the Glen." },
      { question: "What made Landseer popular in Victorian Britain?", answer: "Landseer's ability to express <strong>\"human feeling and human thought\"</strong> through animal subjects made him unrivaled as an animal painter during the Victorian era." }
    ]
  }
];

async function main() {
  console.log('Starting batch 5 update: 20 artworks...\n');

  let successCount = 0;
  let errorCount = 0;

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
      console.log(`✓ Updated: ${artwork.slug}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error updating ${artwork.slug}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Batch 5 complete: ${successCount} updated, ${errorCount} errors`);
  console.log(`========================================`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
