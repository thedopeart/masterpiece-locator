const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  // 1. Anders Zorn - Portrait of Fru Lisen Samson
  {
    slug: 'anders-zorn-portrait-of-fru-lisen-samson-nee-hirsch-arranging-',
    description: `<p><a href="/apps/masterpieces/artist/anders-zorn"><strong>Anders Zorn</strong></a> painted this intimate domestic scene showing Fru Lisen Samson arranging flowers at a window. Zorn became one of Sweden's most celebrated artists, gaining international fame as a portraitist whose subjects included three American presidents. His ability to capture the individual character of his models made him the equal of John Singer Sargent in depicting high society.</p>

<p>The play of <strong>natural light</strong> through the window is characteristic of Zorn's work. He mastered the depiction of light early in his career, first with watercolors and later translating those techniques to oil painting. His famous restricted palette of white, yellow ochre, vermilion, and black allowed for remarkable tonal range despite its limited colors.</p>

<p>This work resides in a <strong>private collection</strong>. Major collections of Zorn's paintings can be found at the National Museum in Stockholm, the Zorn Museum in Mora (his hometown), and the Musée d'Orsay in Paris. At just 29, Zorn received the Chevalier de la Légion d'honneur at the 1889 Paris World Fair.</p>`,
    faqs: [
      {
        question: "Who was Anders Zorn?",
        answer: `<a href="/apps/masterpieces/artist/anders-zorn"><strong>Anders Zorn</strong></a> (1860-1920) was a Swedish artist renowned for portraiture, etchings, and paintings of nudes in outdoor settings. He painted <strong>three American presidents</strong> and rivaled Sargent as the most sought-after society portraitist.`
      },
      {
        question: "What is the 'Zorn palette'?",
        answer: `Zorn famously used a <strong>limited palette</strong> of just four colors: white, yellow ochre, vermilion, and ivory black. This restricted palette could achieve remarkable color variety and tonal range through careful mixing.`
      },
      {
        question: "Where can I see Anders Zorn's work?",
        answer: `Major collections exist at the <strong>Zorn Museum</strong> in Mora, Sweden, the National Museum in Stockholm, the Musée d'Orsay in Paris, and the Metropolitan Museum of Art in New York.`
      }
    ]
  },

  // 2. William-Adolphe Bouguereau - Portrait of Genevieve Celine
  {
    slug: 'william-adolphe-bouguereau-portrait-of-genevieve-celine',
    description: `<p><a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> created this portrait with the polished technique that made him the most famous French academic painter of the 19th century. His meticulous finish, idealized forms, and classical compositions commanded the highest prices at the Paris Salon. Bouguereau's portraits captured his subjects with the same technical perfection he brought to mythological and religious scenes.</p>

<p>Bouguereau worked in the <a href="/apps/masterpieces/movement/academic-art"><strong>Academic</strong></a> tradition, emphasizing careful drawing, smooth brushwork, and idealized beauty. His paintings of children and young women were particularly prized by collectors. Though dismissed by avant-garde critics as old-fashioned, his technical mastery has earned renewed appreciation in recent decades.</p>

<p>This portrait remains in a <strong>private collection</strong>. Bouguereau's works can be found at the Musée d'Orsay in Paris, the Metropolitan Museum of Art, and numerous American museums that acquired his paintings during his peak popularity in the Gilded Age.</p>`,
    faqs: [
      {
        question: "Who was William-Adolphe Bouguereau?",
        answer: `<a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>Bouguereau</strong></a> (1825-1905) was the leading French <strong>Academic painter</strong> of his era. His technically flawless paintings of mythological subjects and portraits commanded premium prices at the Paris Salon.`
      },
      {
        question: "What characterized Bouguereau's painting style?",
        answer: `Bouguereau was known for <strong>meticulous finish</strong>, smooth brushwork, idealized forms, and classical compositions. His surfaces appear almost porcelain-like in their perfection, with invisible brushstrokes.`
      },
      {
        question: "Where can I see Bouguereau's work?",
        answer: `Major collections exist at the <strong>Musée d'Orsay</strong> in Paris, the Metropolitan Museum of Art, and numerous American museums that acquired his work during the Gilded Age when he was extremely popular.`
      }
    ]
  },

  // 3. Juan Gris - Portrait of Germaine Raynal
  {
    slug: 'juan-gris-portrait-of-germaine-raynal',
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted this portrait of Germaine Raynal in 1912, applying <a href="/apps/masterpieces/movement/cubism"><strong>Analytical Cubism</strong></a> to portraiture. Germaine's figure is decomposed into angular forms that emerge from a dynamic background, her features fragmented yet recognizable. Gris had moved to Paris in 1906 and settled at the Bateau-Lavoir, where Pablo Picasso lived, putting him at the center of Cubist innovation.</p>

<p>The work measures 55 by 38 centimeters and demonstrates Gris's mastery in constructing images through <strong>planes and shapes</strong>. By 1912, the prominent dealer Daniel-Henry Kahnweiler had agreed to purchase his entire artistic output. Germaine Raynal was an important figure in Gris's circle, serving as both muse and influence on his creative development.</p>

<p>This painting resides in a <strong>private collection</strong>. Gris also created a pencil study of the same subject. Major collections of his work can be found at the Museo Reina Sofía in Madrid and the Musée National d'Art Moderne in Paris.</p>`,
    faqs: [
      {
        question: "What style is this portrait painted in?",
        answer: `This portrait exemplifies <a href="/apps/masterpieces/movement/cubism"><strong>Analytical Cubism</strong></a>, breaking the subject into <strong>angular geometric forms</strong> while maintaining recognizable features. Gris developed his Cubist style after moving to Paris and befriending Picasso.`
      },
      {
        question: "Who was Juan Gris?",
        answer: `<a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> (1887-1927) was a Spanish painter who became a leading figure in <strong>Cubism</strong>. He lived at the Bateau-Lavoir in Paris and was championed by dealer Daniel-Henry Kahnweiler.`
      },
      {
        question: "Who was Germaine Raynal?",
        answer: `<strong>Germaine Raynal</strong> was an important figure in Gris's artistic circle, serving as both muse and influence. Gris also painted a portrait of Maurice Raynal, likely her husband or relative.`
      }
    ]
  },

  // 4. Parmigianino - Portrait of Gian Galeazzo Sanvitale
  {
    slug: 'parmigianino-portrait160of-gian-galeazzo-sanvitale',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted this portrait of Gian Galeazzo Sanvitale, Count of Fontanellato, around 1524. The Sanvitale family were important patrons who commissioned several works from the young artist, including frescoes at their castle. The count is shown with the elegant bearing and refined costume appropriate to his status as a powerful Italian nobleman.</p>

<p>Parmigianino developed his distinctive <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> style through such aristocratic commissions. His portraits combined psychological insight with the elongated forms and sophisticated compositions that defined the movement. Giorgio Vasari praised his ability to capture both likeness and personality.</p>

<p>This work resides in a <strong>private collection</strong>. Parmigianino's portraits can be found at the Kunsthistorisches Museum in Vienna, the Museo di Capodimonte in Naples, and the National Gallery in London. His "Portrait of a Gentleman" at the National Gallery shows similar sophistication.</p>`,
    faqs: [
      {
        question: "Who were the Sanvitale family?",
        answer: `The <strong>Sanvitale family</strong> were powerful Italian nobles who ruled Fontanellato near Parma. They were important patrons of <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a>, commissioning both portraits and frescoes for their castle.`
      },
      {
        question: "What is Mannerism?",
        answer: `<a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a> was an artistic style that emerged after the High Renaissance, featuring <strong>elongated figures, complex poses</strong>, and sophisticated compositions. Parmigianino was one of its leading practitioners.`
      },
      {
        question: "When did Parmigianino paint this portrait?",
        answer: `The portrait dates to around <strong>1524</strong>, during Parmigianino's early career when he was working for the Sanvitale family in the Parma region before moving to Rome.`
      }
    ]
  },

  // 5. Leonardo da Vinci - Portrait of Ginevra de' Benci
  {
    slug: 'leonardo-da-vinci-portrait-of-ginevra-benci',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted this portrait of the Florentine aristocrat Ginevra de' Benci between 1474 and 1478, creating what scholars consider the <strong>first psychological portrait</strong> in art history. While previous portraits typically showed subjects in profile, Leonardo pivoted Ginevra slightly to a three-quarter view, revealing more of her face and personality. This innovation would culminate in his later Mona Lisa.</p>

<p>The juniper bush behind Ginevra puns on her name ("ginepro" in Italian) while symbolizing chastity, then considered a woman's greatest virtue. The painting's reverse bears her motto "Virtutem Forma Decorat" (beauty adorns virtue). Infrared examination revealed a hidden motto belonging to Venetian ambassador Bernardo Bembo, suggesting he may have commissioned the work as one of Ginevra's admirers.</p>

<p>The painting lost its lower portion at some point, likely removing Ginevra's hands. It now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC, the only Leonardo painting in the Americas. The gallery acquired it from the Prince of Liechtenstein in 1967 for a then-record price of $5-6 million.</p>`,
    faqs: [
      {
        question: "Where can I see Leonardo's Portrait of Ginevra de' Benci?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC. It is the <strong>only Leonardo da Vinci painting</strong> on public view in the Americas.`
      },
      {
        question: "Why is there a juniper bush in the painting?",
        answer: `The <strong>juniper (ginepro in Italian)</strong> puns on Ginevra's name while symbolizing chastity. <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a> often incorporated symbolic elements that carried multiple meanings.`
      },
      {
        question: "What makes this portrait historically important?",
        answer: `Scholars consider it the <strong>first psychological portrait</strong> in art history. Leonardo's three-quarter pose (rather than strict profile) became the standard for Western portraiture, culminating in his Mona Lisa.`
      },
      {
        question: "When was this painting created?",
        answer: `Leonardo painted this between <strong>1474 and 1478</strong>, possibly to commemorate Ginevra's marriage at age 16. It is one of only three portraits of women Leonardo painted.`
      }
    ]
  },

  // 6. Edgar Degas - Portrait of Giulia Bellelli
  {
    slug: 'edgar-degas-portrait-of-giulia-bellelli',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this portrait of his cousin Giulia Bellelli, likely as a study for his famous family portrait "The Bellelli Family." Degas spent time with his Italian relatives in Florence during the late 1850s, creating numerous studies that would inform his breakthrough work. The Bellelli family portrait, now at the Musée d'Orsay, established his reputation.</p>

<p>Degas brought psychological insight to his portraits, capturing personality through pose, expression, and setting. Though later famous for dancers and racing scenes, his early work focused on <strong>family portraits and historical subjects</strong>. His training in the classical tradition gave him formidable draftsmanship that underlaid all his later innovations.</p>

<p>This portrait remains in a <strong>private collection</strong>. The main Bellelli Family portrait can be seen at the Musée d'Orsay in Paris, while other Degas portraits are held at the Metropolitan Museum of Art and the National Gallery of Art.</p>`,
    faqs: [
      {
        question: "Who was Giulia Bellelli?",
        answer: `<strong>Giulia Bellelli</strong> was <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas's</strong></a> cousin, daughter of his aunt Laura and Baron Gennaro Bellelli. She appears in the famous "Bellelli Family" portrait now at the Musée d'Orsay.`
      },
      {
        question: "Where is the main Bellelli Family painting?",
        answer: `"The Bellelli Family" (1858-1867) hangs at the <strong>Musée d'Orsay</strong> in Paris. It is considered Degas's first masterpiece and established his reputation as a portraitist.`
      },
      {
        question: "When did Degas paint this?",
        answer: `Degas created studies of the Bellelli family during visits to Florence in the <strong>late 1850s</strong>. He worked on the main family portrait for nearly a decade before completing it around 1867.`
      }
    ]
  },

  // 7. El Greco - Portrait of Giulio Clovio
  {
    slug: 'el-greco-portrait-of-giulio-clovio',
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted this portrait of Giulio Clovio around 1571-1572, shortly after arriving in Rome. Cardinal Alessandro Farnese commissioned the work, and Clovio himself had helped the young Greek artist settle in the city. Clovio holds his masterpiece, the <strong>Farnese Hours</strong>, the illuminated manuscript that made him famous as "the Michelangelo of the miniature."</p>

<p>A window behind the elderly Croatian miniaturist reveals a landscape and stormy sky, characteristic elements that would recur throughout El Greco's career. The portrait demonstrates the naturalistic style he employed before fully developing his later, more expressionistic manner. Clovio was both friend and mentor during El Greco's Roman years.</p>

<p>The painting passed through the Farnese collection to Charles of Bourbon, who moved it to Naples in 1734. It now hangs at the <strong>Museo di Capodimonte</strong> in Naples. The work shows El Greco manipulating artistic conventions to suit his own purposes, honoring both Clovio and his celebrated illuminations.</p>`,
    faqs: [
      {
        question: "Who was Giulio Clovio?",
        answer: `<strong>Giulio Clovio</strong> (1498-1578) was a Croatian illuminator Giorgio Vasari called "the Michelangelo of the miniature." He worked in Cardinal Farnese's library and helped <a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> establish himself in Rome.`
      },
      {
        question: "What is Clovio holding in the portrait?",
        answer: `Clovio holds the <strong>Farnese Hours</strong>, his masterpiece illuminated manuscript created for Cardinal Alessandro Farnese. The book established his reputation as the greatest miniaturist of his age.`
      },
      {
        question: "Where is this painting displayed?",
        answer: `This portrait hangs at the <strong>Museo di Capodimonte</strong> in Naples, Italy. It arrived there when Charles of Bourbon inherited the Farnese collection in 1734.`
      }
    ]
  },

  // 8. Bronzino - Portrait of Guidubaldo della Rovere
  {
    slug: 'bronzino-portrait-of-guidubaldo-della-rovere',
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> painted this portrait of the young Guidubaldo della Rovere in 1531-1532, when the nobleman was just eighteen. The future Duke of Urbino is shown in splendid Milanese armor with gold decoration, his hand resting on a helmet inscribed in Greek: "It will certainly be as I have decided." The assertive motto reflects Guidubaldo's conflict with his father over an arranged marriage.</p>

<p>Bronzino was working on decorations at the Villa Imperiale when he received this commission. According to Vasari, the portrait was delayed because Guidubaldo insisted on waiting for a new suit of armor ordered from Lombardy. The experience proved pivotal for Bronzino's career, establishing his reputation as a master of aristocratic portraiture in the <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> style.</p>

<p>The painting now hangs at <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence. At the della Rovere court, Bronzino encountered Castiglione's influential "Il Cortegiano," which shaped his understanding of how to translate courtly ideals into visual form.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence, Italy, in the Galleria Palatina. <a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> painted it while working for the della Rovere family.`
      },
      {
        question: "Who was Guidubaldo della Rovere?",
        answer: `<strong>Guidubaldo</strong> (1514-1574) was the son and heir of the Duke of Urbino, whom he succeeded in 1538. He was eighteen when this portrait was painted, in conflict with his father over an arranged marriage.`
      },
      {
        question: "What does the Greek inscription mean?",
        answer: `The inscription on the helmet reads <strong>"It will certainly be as I have decided"</strong> in Greek, reflecting Guidubaldo's assertive personality during his dispute with his father over dynastic marriage plans.`
      }
    ]
  },

  // 9. Paul Delaroche - Portrait of Henrietta Sontag
  {
    slug: 'paul-delaroche-portrait-of-henrietta-sontag',
    description: `<p><a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted this portrait of <strong>Henrietta Sontag</strong>, one of the most celebrated opera singers of the 19th century. The German soprano (1806-1854) captivated audiences across Europe with her performances. Her fame extended beyond opera; she was received in the highest social circles and inspired tributes from Goethe and Beethoven.</p>

<p>Delaroche was known primarily for his dramatic historical paintings, but he also produced accomplished portraits of notable figures. His meticulous technique and ability to capture character made him sought after by celebrities and aristocrats alike. The <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> movement's fascination with performers and artistic genius is evident in works like this.</p>

<p>The portrait resides at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. Sontag's beauty and talent made her a favorite subject for artists of the period, and this portrait captures her at the height of her fame.</p>`,
    faqs: [
      {
        question: "Who was Henrietta Sontag?",
        answer: `<strong>Henrietta Sontag</strong> (1806-1854) was a celebrated German soprano who performed across Europe. She inspired tributes from Goethe and Beethoven and moved in the highest social circles.`
      },
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. <a href="/apps/masterpieces/artist/paul-delaroche"><strong>Delaroche</strong></a> was known for both historical paintings and accomplished portraits.`
      },
      {
        question: "What was Paul Delaroche famous for?",
        answer: `<a href="/apps/masterpieces/artist/paul-delaroche"><strong>Delaroche</strong></a> was best known for <strong>dramatic historical paintings</strong> like "The Execution of Lady Jane Grey." His portraits showed the same careful technique and psychological insight.`
      }
    ]
  },

  // 10. Fernand Léger - Portrait of Henry Viel
  {
    slug: 'fernand-leger-portrait-of-henry-viel-a-friend-of-painter-fernand',
    description: `<p><a href="/apps/masterpieces/artist/fernand-leger"><strong>Fernand Léger</strong></a> painted this portrait of his friend Henry Viel, applying his distinctive style that combined <a href="/apps/masterpieces/movement/cubism"><strong>Cubist</strong></a> fragmentation with bold colors and tubular forms. Léger developed what critics called "Tubism" for his treatment of figures as assembled cylinders and geometric shapes. Unlike the muted palettes of Picasso and Braque, Léger used strong primary colors.</p>

<p>Léger's portraits of friends and colleagues show how he applied modernist principles to figurative subjects. Born in Normandy, he moved to Paris and became part of the avant-garde circle that included Picasso, Braque, and Robert Delaunay. His work celebrated modern life, machinery, and the dignity of working people.</p>

<p>This portrait hangs at the <a href="/apps/masterpieces/museum/musee-national-fernand-leger-biot-france"><strong>Musée National Fernand Léger</strong></a> in Biot, France. The museum, established after his death, houses the largest collection of his work, including paintings, drawings, ceramics, and tapestries.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-national-fernand-leger-biot-france"><strong>Musée National Fernand Léger</strong></a> in Biot, on the French Riviera. The museum houses the world's largest collection of his work.`
      },
      {
        question: "What was Léger's painting style called?",
        answer: `Critics dubbed <a href="/apps/masterpieces/artist/fernand-leger"><strong>Léger's</strong></a> style <strong>"Tubism"</strong> for his treatment of figures as assembled cylinders and geometric forms. He combined Cubist fragmentation with bold primary colors.`
      },
      {
        question: "What subjects did Léger typically paint?",
        answer: `Léger celebrated <strong>modern life and machinery</strong>, from construction workers to mechanical objects. He believed art should reflect the energy and dignity of the industrial age.`
      }
    ]
  },

  // 11. Giovanni Battista Moroni - Portrait of Jacopo Foscarini
  {
    slug: 'giovanni-battista-moroni-portrait-of-jacopo-foscarini',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this portrait of Jacopo Foscarini with the psychological insight that made him the leading portraitist of Renaissance Bergamo. Moroni captured not just likeness but personality, showing his subjects with a directness unusual for the period. His sitters came from the aristocracy, professional classes, and even manual workers.</p>

<p>Moroni trained under Moretto da Brescia but developed his own approach that anticipated the "narrative portraits" of Rembrandt by decades. His famous "Portrait of a Tailor" revolutionized portraiture by depicting a craftsman with the dignity usually reserved for nobility. The Bergamo region's mix of Venetian and Milanese influences shaped his distinctive naturalism.</p>

<p>This portrait resides at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>. Moroni's work can also be found at the National Gallery in London, the Accademia Carrara in Bergamo, and the Hermitage in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Who was Giovanni Battista Moroni?",
        answer: `<a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Moroni</strong></a> (c. 1520-1579) was an Italian Renaissance portraitist from Bergamo known for <strong>psychological realism</strong>. His work anticipated Rembrandt's approach to capturing character and personality.`
      },
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. Other major Moroni collections are at the National Gallery London and Accademia Carrara in Bergamo.`
      },
      {
        question: "What made Moroni's portraits distinctive?",
        answer: `Moroni captured <strong>psychological depth and personality</strong> with unusual directness. He portrayed not just aristocrats but professionals and craftsmen, treating all subjects with dignity and insight.`
      }
    ]
  },

  // 12. Jacques-Louis David - Portrait of Jacques François Desmaisons
  {
    slug: 'jacques-louis-david-portrait-of-jacques-francois-desmaisons',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this portrait with the rigorous technique that made him the preeminent painter of the <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> movement. David's portraits combined careful draftsmanship with psychological penetration, capturing his subjects with the same clarity he brought to historical scenes. His style of precise contours and sculptural forms defined French painting for a generation.</p>

<p>David served as artistic director of the French Revolution and later as official painter to Napoleon. His career spanned royal commissions, revolutionary propaganda, and imperial portraits. The precision of his technique influenced students including Ingres, Gérard, and Gros, who carried Neoclassicism into the 19th century.</p>

<p>This portrait resides at the <a href="/apps/masterpieces/museum/albright-knox"><strong>Albright-Knox Art Gallery</strong></a> in Buffalo, New York. David's major works can be seen at the Louvre, including "The Coronation of Napoleon" and "The Death of Marat."</p>`,
    faqs: [
      {
        question: "Who was Jacques-Louis David?",
        answer: `<a href="/apps/masterpieces/artist/jacques-louis-david"><strong>David</strong></a> (1748-1825) was the leading French <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> painter. He served as artistic director of the French Revolution and later painted for Napoleon.`
      },
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/albright-knox"><strong>Albright-Knox Art Gallery</strong></a> in Buffalo, New York. Major David works are at the Louvre in Paris.`
      },
      {
        question: "What characterized David's portrait style?",
        answer: `David's portraits featured <strong>precise contours, sculptural forms</strong>, and psychological clarity. He brought the same rigorous technique to portraits that he used in his famous historical paintings.`
      }
    ]
  },

  // 13. Hans Memling - Portrait of Jacques of Savoy
  {
    slug: 'hans-memling-portrait-of-jacques-of-savoy',
    description: `<p><a href="/apps/masterpieces/artist/hans-memling"><strong>Hans Memling</strong></a> painted this portrait of Jacques of Savoy, Count of Romont, in the 1470s. The Flemish master captured the French nobleman with the meticulous realism characteristic of the Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Jacques is dressed in Burgundian court fashion, wearing the emblem of the Order of the Collar of Savoy around his neck, confirming his noble lineage.</p>

<p>Memling was the leading painter in Bruges after Jan van Eyck's death, producing portraits prized throughout Europe for their delicate detail and rich textures. His technique with oil on oak panel allowed for fine rendering of fabrics, jewels, and flesh tones. Jacques of Savoy was a prominent military leader in the Burgundian Wars.</p>

<p>The portrait hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. Memling's work can also be seen at the Groeningemuseum in Bruges, the Metropolitan Museum of Art, and the National Gallery in London.</p>`,
    faqs: [
      {
        question: "Who was Jacques of Savoy?",
        answer: `<strong>Jacques of Savoy</strong>, Count of Romont (1450-1486), was a French nobleman and military leader in the Burgundian Wars. He was a prince of the House of Savoy, which played a major role in European politics.`
      },
      {
        question: "Where is this portrait displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. Other <a href="/apps/masterpieces/artist/hans-memling"><strong>Memling</strong></a> portraits can be seen at the Groeningemuseum in Bruges.`
      },
      {
        question: "What characterized Memling's portrait style?",
        answer: `Memling was known for <strong>meticulous detail and rich textures</strong>. His oil-on-oak technique allowed precise rendering of fabrics, jewels, and subtle flesh tones characteristic of Flemish masters.`
      }
    ]
  },

  // 14. Hans Holbein the Younger - Portrait of Jakob Meyer zum Hasen
  {
    slug: 'hans-holbein-younger-portrait-of-jakob-meyer-zum-hasen',
    description: `<p><a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> painted this portrait of Jakob Meyer zum Hasen in 1516, capturing the wealthy Basel merchant who would become the city's mayor (Bürgermeister). The sitter's serious expression and upright posture convey authority, while Holbein renders every wrinkle, facial hair, and fabric texture with astonishing precision.</p>

<p>A Latin inscription reads "Vivit post funera virtus" (Virtue lives after death), reflecting Meyer's desire to project lasting dignity. The composition places him centrally, surrounded by symbolic objects including a book. Holbein's use of light and shadow creates remarkable depth and three-dimensionality, characteristic of the Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.</p>

<p>The portrait, measuring 38.5 by 30.8 centimeters, hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. Meyer commissioned it for his house, establishing a relationship with Holbein that would produce several family portraits including the famous "Darmstadt Madonna."</p>`,
    faqs: [
      {
        question: "Who was Jakob Meyer zum Hasen?",
        answer: `<strong>Jakob Meyer zum Hasen</strong> was a wealthy Basel merchant who became the city's <strong>Bürgermeister (mayor)</strong>. He was an important patron of <a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Holbein</strong></a>, commissioning several family portraits.`
      },
      {
        question: "Where is this portrait displayed?",
        answer: `The portrait hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. It measures 38.5 x 30.8 cm and was commissioned for Meyer's house in 1516.`
      },
      {
        question: "What does the Latin inscription mean?",
        answer: `The inscription <strong>"Vivit post funera virtus"</strong> means "Virtue lives after death." It reflects Meyer's desire to project dignity and lasting moral worth through his portrait.`
      }
    ]
  },

  // 15. Rembrandt - Portrait of Jan Asselyn
  {
    slug: 'rembrandt-portrait-of-jan-asselyn',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created this portrait of his fellow artist Jan Asselyn around 1647, using etching, drypoint, and burin techniques. Asselyn was a landscape painter known as "Krabbetje" (Little Crab) because of a deformed left hand. Rembrandt carefully positioned Asselyn's arm to conceal the disability, showing sensitivity to his friend's condition.</p>

<p>Asselyn had spent years in Italy as a member of the Bentvueghels, northern artists who painted the sun-drenched Roman countryside. Upon returning to Amsterdam in 1647, he became part of Rembrandt's circle. His most famous painting, "The Threatened Swan" at the Rijksmuseum, is often interpreted as an allegory of Dutch nationalism.</p>

<p>Versions of this portrait etching can be found at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a>, the National Galleries of Scotland, and the Victoria and Albert Museum. The print demonstrates Rembrandt's mastery of etching as a medium for intimate, psychologically rich portraits.</p>`,
    faqs: [
      {
        question: "Why was Jan Asselyn nicknamed 'Krabbetje'?",
        answer: `<strong>Asselyn</strong> was called <strong>"Krabbetje" (Little Crab)</strong> because of his deformed left hand. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> thoughtfully positioned the arm in his portrait to conceal this disability.`
      },
      {
        question: "What is Rembrandt's portrait medium?",
        answer: `This work is an <strong>etching, drypoint, and burin</strong> print, not a painting. Rembrandt was a master printmaker whose portrait etchings are highly prized by collectors.`
      },
      {
        question: "What is Jan Asselyn famous for painting?",
        answer: `Asselyn was a Dutch Golden Age <strong>landscape painter</strong> who specialized in Italian scenes. His most famous work, "The Threatened Swan" at the Rijksmuseum, may be an allegory of Dutch nationalism.`
      }
    ]
  },

  // 16. Henry Raeburn - Portrait of Janet Dundas
  {
    slug: 'henry-raeburn-portrait-of-janet-dundas',
    description: `<p><a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> painted this portrait of Janet Dundas with the bold brushwork and dramatic lighting that made him Scotland's leading portrait painter. Raeburn developed a distinctive style working directly on canvas without preliminary drawings, achieving effects of spontaneity and vitality unusual for the period.</p>

<p>Born in Edinburgh, Raeburn became the premier portraitist of Scottish Enlightenment society, painting philosophers, scientists, lawyers, and aristocrats. His subjects included Walter Scott, David Hume's nephew, and many members of Edinburgh's intellectual elite. King George IV knighted him during a visit to Scotland in 1822.</p>

<p>This portrait remains in a <strong>private collection</strong>. Major collections of Raeburn's work can be found at the Scottish National Portrait Gallery in Edinburgh, the National Gallery of Scotland, and the Metropolitan Museum of Art in New York.</p>`,
    faqs: [
      {
        question: "Who was Henry Raeburn?",
        answer: `<a href="/apps/masterpieces/artist/henry-raeburn"><strong>Raeburn</strong></a> (1756-1823) was Scotland's leading portrait painter. He was knighted by George IV in 1822 and painted the intellectual elite of Scottish Enlightenment society.`
      },
      {
        question: "What characterized Raeburn's painting technique?",
        answer: `Raeburn worked <strong>directly on canvas without preliminary drawings</strong>, achieving unusual spontaneity. His bold brushwork and dramatic lighting gave his portraits vitality and immediacy.`
      },
      {
        question: "Where can I see Raeburn's work?",
        answer: `Major collections exist at the <strong>Scottish National Portrait Gallery</strong> and National Gallery of Scotland in Edinburgh, plus the Metropolitan Museum of Art in New York.`
      }
    ]
  },

  // 17. Jean-François Millet - Portrait of Javain (Mayor of Cherbourg)
  {
    slug: 'jean-francois-millet-portrait-of-javain-mayor-of-cherbourg',
    description: `<p><a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> painted this portrait of Javain, the Mayor of Cherbourg, early in his career before he developed the peasant subjects that would make him famous. Born in Normandy near the sea, Millet first trained as a portrait painter and received commissions from local notables. These early works show his solid academic foundation.</p>

<p>Millet would later move to Barbizon and become one of the founders of that influential school, creating iconic images of rural labor like "The Gleaners" and "The Angelus." But his early portraits demonstrate the technical skill that underlaid his later, more radical work depicting peasant life with dignity and monumentality.</p>

<p>This portrait hangs at the <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, which holds a significant collection of Millet's early work from his Norman period before his move to Paris and Barbizon.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, France. The museum holds significant works from <a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Millet's</strong></a> early Norman period.`
      },
      {
        question: "What is Millet best known for?",
        answer: `Millet became famous for <strong>peasant subjects</strong> like "The Gleaners" and "The Angelus." This portrait comes from his earlier career as a conventional portraitist before he moved to Barbizon.`
      },
      {
        question: "What was the Barbizon School?",
        answer: `The <strong>Barbizon School</strong> was a group of French painters who worked in the village of Barbizon, focusing on landscape and rural subjects. Millet was one of its most important members.`
      }
    ]
  },

  // 18. Maurice Quentin de La Tour - Portrait of Jean-Jacques Rousseau
  {
    slug: 'maurice-quentin-de-la-tour-portrait-of-jeanjacques-rousseau',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this pastel portrait of <strong>Jean-Jacques Rousseau</strong> in 1753, capturing the philosopher at a pivotal moment in his career. De La Tour mastered pastel as a medium, layering colors to achieve depth and naturalistic effects that made his portraits seem almost three-dimensional. The warm ochres and soft browns create an intimate, contemplative atmosphere.</p>

<p>Rousseau's expression suggests deep thought, his furrowed brow reflecting a mind engaged with ideas about nature, society, and humanity. The portrait captures the Enlightenment philosopher who would profoundly influence the French Revolution with his writings on social contracts and natural rights. De La Tour's ability to convey inner life made him the most sought-after portraitist of the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> era.</p>

<p>The portrait, measuring 34 by 45 centimeters, resides at the <a href="/apps/masterpieces/museum/mus233e-d39art-et-d39histoire-geneva-switzerland"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland, appropriately housed in Rousseau's birthplace.</p>`,
    faqs: [
      {
        question: "Where is this portrait of Rousseau displayed?",
        answer: `The portrait hangs at the <a href="/apps/masterpieces/museum/mus233e-d39art-et-d39histoire-geneva-switzerland"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland. Geneva was <strong>Rousseau's birthplace</strong>, making it an appropriate home for this work.`
      },
      {
        question: "Who was Jean-Jacques Rousseau?",
        answer: `<strong>Rousseau</strong> (1712-1778) was a Swiss-French Enlightenment philosopher whose ideas about social contracts and natural rights <strong>profoundly influenced the French Revolution</strong>.`
      },
      {
        question: "What medium is this portrait?",
        answer: `De La Tour worked in <strong>pastel</strong>, a medium he mastered to achieve remarkable depth and naturalistic effects. His technique of layering colors made his portraits unusually lifelike.`
      }
    ]
  },

  // 19. Ingres - Portrait of Jean-Pierre-François Gilibert
  {
    slug: 'jean-auguste-dominique-ingres-portrait-of-jeanpierrefrancois-gilibert',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this portrait of Jean-Pierre-François Gilibert, demonstrating the precise draftsmanship and elegant finish that made him the leading French <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> portraitist. Ingres trained under Jacques-Louis David and developed an even more refined approach to line and form. His portraits balanced psychological insight with idealized beauty.</p>

<p>Ingres believed drawing was "the probity of art," and his portraits show extraordinary attention to contour and detail. Fabric textures, facial features, and accessories are rendered with crystalline precision. Though he considered himself primarily a history painter, his portraits became his most admired works, influencing generations of artists including Degas and Picasso.</p>

<p>This portrait resides at the <a href="/apps/masterpieces/museum/mus233e-ingres-montauban-france"><strong>Musée Ingres</strong></a> in Montauban, France, the artist's birthplace. The museum holds the largest collection of his work, including paintings, drawings, and personal effects.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/mus233e-ingres-montauban-france"><strong>Musée Ingres</strong></a> in Montauban, <a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Ingres's</strong></a> birthplace. The museum houses the world's largest collection of his work.`
      },
      {
        question: "What was Ingres's artistic philosophy?",
        answer: `Ingres believed <strong>"drawing is the probity of art,"</strong> emphasizing precise contour over painterly effects. His portraits show extraordinary attention to line, detail, and finish.`
      },
      {
        question: "Who influenced Ingres?",
        answer: `Ingres trained under <strong>Jacques-Louis David</strong> and admired Raphael. He developed the <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> style with even greater refinement than his teacher.`
      }
    ]
  },

  // 20. Fernand Khnopff - Portrait of Jeanne Kefer
  {
    slug: 'fernand-khnopff-portrait-of-jeanne-kefer',
    description: `<p><a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Fernand Khnopff</strong></a> painted this haunting portrait of five-year-old Jeanne Kéfer in 1885, creating one of the masterpieces of Belgian <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a>. The child stands before an adult-sized closed door, her small figure emphasizing her vulnerability and uncertainty about the outside world. She reaches into her coat with thumb catching the edge of her bow.</p>

<p>Jeanne was the daughter of pianist Gustave Kéfer, a friend of the artist. Khnopff frequently posed his models against closed doors, flattening the space to create meditative, hermetically sealed images. The painting was scheduled for the Les XX exhibition in 1885 but wasn't finished in time; it appeared the following year to positive reviews.</p>

<p>The painting, measuring 80 by 80 centimeters, now hangs at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. The Getty published a scholarly monograph on this work as part of their Studies on Art series, recognizing its importance in Symbolist painting.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Jeanne Kefer displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. The Getty has published a scholarly book specifically about this important Symbolist work.`
      },
      {
        question: "Who was Jeanne Kéfer?",
        answer: `<strong>Jeanne Kéfer</strong> was the five-year-old daughter of pianist <strong>Gustave Kéfer</strong>, a friend of the artist. <a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Khnopff</strong></a> painted her standing before a closed door, emphasizing childhood vulnerability.`
      },
      {
        question: "What is the significance of the closed door?",
        answer: `Khnopff frequently posed subjects against <strong>closed doors</strong>, flattening space to create meditative, sealed images. Here it emphasizes the child's uncertainty and vulnerability facing the adult world.`
      },
      {
        question: "What artistic movement does this represent?",
        answer: `The painting is a masterpiece of Belgian <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a>. Khnopff combined visual realism with moods of silence, isolation, and reverie characteristic of the movement.`
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
