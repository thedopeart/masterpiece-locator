const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'amedeo-modigliani-portrait-of-the-brother-of-the-painter-micheli',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> created this portrait around 1899 while studying under Guglielmo Micheli in Livorno. The subject was Micheli's brother, painted during Modigliani's earliest artistic training. At the time, the young Italian artist was learning from a master trained in the Macchiaioli tradition, the Italian equivalent of Impressionism.</p>
<p>This work represents one of Modigliani's first documented paintings, created years before he would develop his signature elongated figures and almond-shaped eyes. The <strong>academic approach</strong> visible here contrasts sharply with the boldly stylized <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> portraits that would later make him famous. Modigliani was only about fourteen years old when he painted this, demonstrating precocious technical ability even at such a young age.</p>`,
    faqs: [
      {
        question: "When did Modigliani paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani</strong></a> created this portrait around 1899, making it one of his <strong>earliest surviving works</strong>. He was studying under Guglielmo Micheli in Livorno at the time.`
      },
      {
        question: "Who was Guglielmo Micheli?",
        answer: `Micheli was a <strong>Livornese painting master</strong> trained by Giovanni Fattori of the Macchiaioli school. He taught young Modigliani from 1898 to 1900, before the artist moved on to study in Florence and Venice.`
      },
      {
        question: "How does this differ from Modigliani's famous style?",
        answer: `This early work uses <strong>traditional academic techniques</strong> unlike the elongated necks and stylized faces Modigliani became famous for. His signature <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style developed later in Paris.`
      }
    ]
  },
  {
    slug: 'theodore-gericault-portrait-of-the-carpenter-of-the-medusa',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this portrait as part of his exhaustive research for "The Raft of the Medusa." The subject is Lavillette, the ship's carpenter who survived the 1816 Medusa disaster. He was one of only fifteen people who lived through the horrific thirteen days adrift on the makeshift raft.</p>
<p>Géricault brought Lavillette to his studio and commissioned him to build a <strong>scale model of the raft</strong>. This allowed the artist to study the structure's perspective and construction details for his monumental painting. The <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> painter spent two years interviewing survivors, visiting morgues, and studying corpses to achieve the brutal realism of his masterpiece. This portrait captures one of the ordinary men whose harrowing tale would shock France and expose government negligence.</p>`,
    faqs: [
      {
        question: "Who was the carpenter of the Medusa?",
        answer: `The carpenter was <strong>Lavillette</strong>, one of fifteen survivors who spent thirteen days on the raft. <a href="/apps/masterpieces/artist/theodore-gericault"><strong>Géricault</strong></a> interviewed him extensively and had him build a replica raft for the studio.`
      },
      {
        question: "Why did Géricault paint this portrait?",
        answer: `This was a <strong>preparatory study</strong> for "The Raft of the Medusa." Géricault obsessively researched the disaster, interviewing survivors, visiting hospitals, and studying the actual raft's construction to achieve authenticity.`
      },
      {
        question: "Where can I see The Raft of the Medusa?",
        answer: `The monumental painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. It measures nearly 5 by 7 meters and remains one of the most powerful works of <strong>French Romanticism</strong>.`
      }
    ]
  },
  {
    slug: 'alexej-von-jawlensky-portrait-of-the-dancer-alexander-sakharoff',
    description: `<p><a href="/apps/masterpieces/artist/alexej-von-jawlensky"><strong>Alexej von Jawlensky</strong></a> painted this striking portrait in 1909, capturing Russian dancer Alexander Sakharoff in bold <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> colors. Sakharoff, dressed flamboyantly for a performance, visited Jawlensky's studio and was so moved by his own portrayal that he took the still-wet painting from the easel. It remained his constant companion for life.</p>
<p>The painting exemplifies <strong>German Expressionism's</strong> use of vivid, non-naturalistic color to convey emotion. Sakharoff's androgynous appearance made him a fascinating subject for several artists of the era. He was one of the most innovative solo dancers of the early twentieth century. This work is now held at the <a href="/apps/masterpieces/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich, and notably appeared as cover art for the jazz group Acoustic Ladyland's 2006 album "Skinny Grin."</p>`,
    faqs: [
      {
        question: "Where can I see this Jawlensky portrait?",
        answer: `This painting is at the <a href="/apps/masterpieces/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich, Germany. It measures 66.5 x 69.5 cm and was painted in <strong>oil on cardboard</strong>.`
      },
      {
        question: "Who was Alexander Sakharoff?",
        answer: `Sakharoff (1886–1963) was a <strong>Russian dancer and choreographer</strong> born Alexander Zuckermann in Mariupol. His androgynous appearance made him a popular subject for <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> painters.`
      },
      {
        question: "What style is this painting?",
        answer: `The portrait is a key example of <a href="/apps/masterpieces/movement/expressionism"><strong>German Expressionism</strong></a>, using <strong>bold, vivid colors</strong> to capture movement and emotion rather than realistic representation.`
      }
    ]
  },
  {
    slug: 'hyacinthe-rigaud-portrait-of-the-duc-de-broglie',
    description: `<p><a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted this imposing portrait in 1693, depicting François-Marie de Broglie in full aristocratic splendor. The Duke appears half-length in armor, draped in a velvet-lined leopard skin mantle and wearing the Sash of the Order of the Holy Spirit. He holds the baton of a Marshal of France in his left hand, symbols of his military rank and royal favor.</p>
<p>Rigaud was the preeminent <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portraitist at the court of Louis XIV, famous for his ability to convey power and prestige. The King himself declared Rigaud "the greatest French artist of all time." This painting now hangs at the Statens Museum for Kunst in Copenhagen. Rigaud set the standard for <strong>official portraiture</strong> that European courts would follow for centuries.</p>`,
    faqs: [
      {
        question: "When was this portrait painted?",
        answer: `<a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Rigaud</strong></a> painted this <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portrait in <strong>1693</strong>. It's now at the Statens Museum for Kunst in Copenhagen, Denmark.`
      },
      {
        question: "Who was the Duc de Broglie?",
        answer: `François-Marie de Broglie (1671–1745) was a <strong>Marshal of France</strong> and member of the Order of the Holy Spirit. The portrait shows him with both symbols of his high military rank.`
      },
      {
        question: "Why was Rigaud famous?",
        answer: `Rigaud was the <strong>leading court painter</strong> to Louis XIV, who called him "the greatest French artist." His style of grand <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portraiture influenced European courts for three centuries.`
      }
    ]
  },
  {
    slug: 'edvard-munch-portrait-of-the-painter-jensen-hjell',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this full-length portrait of Karl Jensen-Hjell in 1885. Jensen-Hjell was a fellow artist and "notorious bohemian-about-town" in the vibrant Norwegian art scene. When exhibited, a critic dismissed it as "impressionism carried to the extreme" and called it "a travesty of art."</p>
<p>This early work anticipates Munch's later <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style. The dark, gloomy background contrasts with the luminosity of Jensen-Hjell's introspective, almost <strong>melancholic face</strong>. The painting measures an impressive 190 x 100 cm and hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo. While less famous than "The Scream," this portrait reveals Munch's early psychological depth.</p>`,
    faqs: [
      {
        question: "Where can I see this Munch portrait?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo. It's a large work measuring <strong>190 x 100 cm</strong>, oil on canvas.`
      },
      {
        question: "Who was Jensen-Hjell?",
        answer: `Karl Jensen-Hjell was a <strong>Norwegian painter</strong> and friend of Munch, known in art circles as a "notorious bohemian." His portrait was criticized for being too <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionistic</strong></a>.`
      },
      {
        question: "Why was this painting controversial?",
        answer: `Critics in 1885 called it <strong>"a travesty of art"</strong> and "impressionism carried to the extreme." The loose brushwork and psychological intensity challenged academic conventions of the time.`
      }
    ]
  },
  {
    slug: 'charles-le-brun-portrait-of-the-painter-louis-testelin',
    description: `<p><a href="/apps/masterpieces/artist/charles-le-brun"><strong>Charles Le Brun</strong></a> painted this portrait of his fellow artist Louis Testelin around 1650. Both men were founding members of the French Royal Academy of Painting and Sculpture, established in 1648. Testelin served as the Academy's first secretary before his brother Henri succeeded him in that role.</p>
<p>Le Brun was the <strong>dominant figure</strong> in seventeenth-century French art, serving as court painter to Louis XIV and director of the Gobelins manufactory. This portrait is now held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>. The work demonstrates Le Brun's skill at capturing his colleagues in the nascent French academic tradition that would shape European art education for centuries.</p>`,
    faqs: [
      {
        question: "Who was Louis Testelin?",
        answer: `Louis Testelin was a <strong>French painter</strong> and founding member of the Royal Academy of Painting and Sculpture in 1648. He served as the Academy's secretary, a position later held by his brother Henri.`
      },
      {
        question: "Where can I see this portrait?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. <a href="/apps/masterpieces/artist/charles-le-brun"><strong>Le Brun</strong></a> painted it around 1650, <strong>oil on canvas</strong>.`
      },
      {
        question: "Why was Le Brun important?",
        answer: `<a href="/apps/masterpieces/artist/charles-le-brun"><strong>Le Brun</strong></a> was court painter to <strong>Louis XIV</strong> and helped establish the French Academy. The king declared him "the greatest French artist of all time."`
      }
    ]
  },
  {
    slug: 'giovanni-battista-moroni-portrait-of-the-sculptor-alessandro-vittoria',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this innovative portrait of sculptor Alessandro Vittoria in 1551-1552. Unlike typical Renaissance portraits that concealed artists' manual labor, this work shows Vittoria in his work clothes with sleeves rolled up, holding an ancient nude torso. His muscular, veined forearm is prominently displayed.</p>
<p>The two artists likely met in Trento during the famous Council. Moroni was there painting ecclesiastical dignitaries while Vittoria was establishing his sculpting career. This may be the only <strong>Renaissance portrait</strong> that emphasizes the nobility of manual labor. The painting influenced Titian's later portrait of Jacopo Strada. After Vittoria's death in 1608, it passed through collections before reaching the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna. It measures <strong>87.5 x 70 cm</strong>, oil on canvas.`
      },
      {
        question: "Who was Alessandro Vittoria?",
        answer: `Vittoria (1525–1608) was a prominent <strong>Italian sculptor</strong> who owned at least five painted portraits of himself. <a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Moroni</strong></a> captured him young, with thick hair, holding an ancient sculpture.`
      },
      {
        question: "Why is this portrait historically significant?",
        answer: `It may be the <strong>only Renaissance portrait</strong> emphasizing an artist's manual labor. Unlike formal portraits, Vittoria appears in work clothes with rolled sleeves, displaying his craftsman's muscular forearm.`
      }
    ]
  },
  {
    slug: 'arnold-bocklin-portrait-of-the-tragic-actress-fanny-janauschek',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted this life-size portrait of actress Fanny Janauschek in 1861 during her guest performance in Weimar. Janauschek had just left Frankfurt, where she had risen to fame as a great tragic actress before disputes led to her dismissal. She was about thirty years old, and Böcklin captured her reserved, suffering quality rather than theatrical grandeur.</p>
<p>This is the <strong>only life-size full-body portrait</strong> Böcklin ever created, measuring an impressive 180 x 104.3 cm. The work belongs to the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> tradition and now hangs at the Städel Museum in Frankfurt. A recent four-year restoration revealed that Janauschek's blue-black dress had been extensively overpainted and obscured by yellowed varnish.</p>`,
    faqs: [
      {
        question: "Where can I see this Böcklin portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel Museum</strong></a> in Frankfurt. It underwent a <strong>four-year restoration</strong> that revealed the original colors hidden under old varnish.`
      },
      {
        question: "Who was Fanny Janauschek?",
        answer: `Janauschek was a celebrated <strong>nineteenth-century tragic actress</strong> who achieved her breakthrough in Frankfurt. <a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Böcklin</strong></a> painted her in 1861 after she left that theater following disputes.`
      },
      {
        question: "What makes this portrait unique?",
        answer: `This is <a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Böcklin's</strong></a> <strong>only life-size full-body portrait</strong>, measuring 180 x 104.3 cm. He captured her reserved suffering rather than theatrical performance.`
      }
    ]
  },
  {
    slug: 'raphael-portrait-of-the-young-pietro-bembo',
    description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this portrait around 1504, depicting his friend Pietro Bembo as a young man. Bembo was a Venetian poet and humanist who would later become a cardinal. The youth appears in a red gown and cap against a gentle Umbrian landscape, with long hair framing a gentle face. His right hand holds a folded sheet of paper, suggesting his literary pursuits.</p>
<p>This is one of Raphael's <strong>earliest portraits</strong>, created during the transition from his Umbrian training to his Florentine period. Scholars once thought it might be a self-portrait due to resemblance to Raphael's known image. Recent research identified it through Venetian records describing this very painting in Bembo's Paduan study. The work hangs at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Raphael portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>. It measures <strong>69 x 54 cm</strong>, oil on wood.`
      },
      {
        question: "Who was Pietro Bembo?",
        answer: `Bembo was a <strong>Venetian poet and humanist</strong> who became one of the leading figures of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> literary life. He later became a cardinal and was <a href="/apps/masterpieces/artist/raphael"><strong>Raphael's</strong></a> long-time friend.`
      },
      {
        question: "Why was this painting's identity debated?",
        answer: `Scholars once thought it was a <strong>self-portrait</strong> due to resemblance to young Raphael. Recent research identified it through Venetian records describing this exact painting in Bembo's personal collection.`
      }
    ]
  },
  {
    slug: 'frans-hals-portrait-of-theodorus-schrevelius',
    description: `<p><a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> painted this small portrait of Theodorus Schrevelius in 1617 on copper, measuring just 15.5 x 12 cm. Schrevelius was a humanist historian who served as headmaster of the Latin school in Leiden. The relationship between painter and subject was reciprocal: Schrevelius later became Hals's biographer.</p>
<p>In his writings, Schrevelius praised Hals's portraits for containing "such power and life" that they "seemed to breathe." Two engraved copies of this portrait survive, one by Jacob Matham and another by Jonas Suyderhoef with an added poem by Caspar Barleaus. The painting exemplifies <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portraiture and is held at the <a href="/apps/masterpieces/museum/frans-hals-museum-haarlem-netherlands"><strong>Frans Hals Museum</strong></a> in Haarlem.</p>`,
    faqs: [
      {
        question: "Where can I see this Frans Hals portrait?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/frans-hals-museum-haarlem-netherlands"><strong>Frans Hals Museum</strong></a> in Haarlem, Netherlands. It's a small work, just <strong>15.5 x 12 cm</strong>, painted on copper.`
      },
      {
        question: "Who was Theodorus Schrevelius?",
        answer: `Schrevelius (1572–1649) was a <strong>humanist and historian</strong> who became headmaster of the Latin school in Leiden. He later wrote about <a href="/apps/masterpieces/artist/frans-hals"><strong>Hals</strong></a>, praising his portraits for seeming "to breathe."`
      },
      {
        question: "What is special about this portrait?",
        answer: `The subject became the artist's <strong>biographer</strong>. Schrevelius wrote that <a href="/apps/masterpieces/artist/frans-hals"><strong>Hals's</strong></a> portraits had "such power and life" that they challenged nature itself.`
      }
    ]
  },
  {
    slug: 'jean-marc-nattier-portrait-of-tsar-peter-i',
    description: `<p><a href="/apps/masterpieces/artist/jean-marc-nattier"><strong>Jean-Marc Nattier</strong></a> painted this portrait of Peter the Great from life in 1717 during the Tsar's visit to Paris. It was created as a companion piece to a portrait of Catherine I that the Russian ruler highly praised. The <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style captures Peter's reformist energy and imperial ambition.</p>
<p>The background often includes <strong>naval motifs</strong> alluding to Peter's establishment of the Russian Navy. The Tsar ruled from 1682 until his death in 1725, transforming Russia into a major European power. Nattier was a prominent painter at the French court known for combining grandeur with refined elegance. This portrait is now at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait of Peter the Great?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. It measures <strong>63 x 52 cm</strong> and was painted in 1717 during Peter's Paris visit.`
      },
      {
        question: "When did Nattier paint this?",
        answer: `<a href="/apps/masterpieces/artist/jean-marc-nattier"><strong>Nattier</strong></a> painted Peter the Great <strong>from life in 1717</strong> in Paris. He also created a companion portrait of Catherine I that the Tsar praised.`
      },
      {
        question: "What style is this portrait?",
        answer: `The portrait is painted in the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style. Nattier was known for combining <strong>imperial grandeur</strong> with elegant refinement at the French court.`
      }
    ]
  },
  {
    slug: 'ilya-repin-portrait-of-v-e-repin-the-artist39s-brother',
    description: `<p><a href="/apps/masterpieces/artist/ilya-repin"><strong>Ilya Repin</strong></a> painted this portrait of his brother Vasily (V.E. Repin) in 1867, early in his artistic career. Vasily was a musician, and Repin would paint him again in 1876 in a second portrait now also at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a>. Both works demonstrate Repin's mastery of <a href="/apps/masterpieces/movement/realism"><strong>Realism</strong></a>.</p>
<p>Repin's sisters Zoé, Zélie, and Juliette were his first models. After moving to Paris, he frequently returned home to Ornans to find inspiration among family and familiar faces. This painting measures 86 x 68 cm and captures the <strong>intimate bond</strong> between the brothers. Repin would become one of the most renowned Russian artists of the nineteenth century.</p>`,
    faqs: [
      {
        question: "Where can I see this Repin portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow. It measures <strong>86 x 68 cm</strong>, oil on canvas, painted in 1867.`
      },
      {
        question: "Who was V.E. Repin?",
        answer: `Vasily Repin was <a href="/apps/masterpieces/artist/ilya-repin"><strong>Ilya Repin's</strong></a> younger brother and a <strong>musician</strong>. Repin painted him again in 1876 in another portrait at the same museum.`
      },
      {
        question: "What style is this portrait?",
        answer: `This is a <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> portrait showing Repin's early mastery. He would become famous for revealing portraits of <strong>leading Russian literary and artistic figures</strong>.`
      }
    ]
  },
  {
    slug: 'valentin-serov-portrait-of-vera-repina',
    description: `<p><a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov</strong></a> painted this portrait of Vera Repina in 1881, when he was only about sixteen years old. The work demonstrates the young artist's early talent in the <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> tradition. Serov had studied under <a href="/apps/masterpieces/artist/ilya-repin"><strong>Ilya Repin</strong></a> in both Paris and Moscow.</p>
<p>The portrait predates Serov's masterworks "The Girl with Peaches" (1887) and "The Girl Covered by the Sun" (1888). In those later paintings, Serov concentrated on <strong>spontaneous perception</strong> of his subjects and nature. He would become generally considered the <strong>primary portraitist</strong> of his generation in Russia. This early work shows his developing skill while under Repin's influential guidance.</p>`,
    faqs: [
      {
        question: "How old was Serov when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/valentin-serov"><strong>Serov</strong></a> was only about <strong>sixteen years old</strong> in 1881 when he created this portrait. He had been studying under <a href="/apps/masterpieces/artist/ilya-repin"><strong>Repin</strong></a> since childhood.`
      },
      {
        question: "What style is this portrait?",
        answer: `The portrait is painted in the <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> style, influenced by Serov's teacher Ilya Repin. It predates his more famous <strong>Impressionist-influenced</strong> works of the late 1880s.`
      },
      {
        question: "Who taught Valentin Serov?",
        answer: `Serov studied under <a href="/apps/masterpieces/artist/ilya-repin"><strong>Ilya Repin</strong></a> in Paris and Moscow. Repin was very fond of the young boy, who would become <strong>Russia's leading portraitist</strong>.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-virginia-little-girl',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait in 1929, depicting a young girl named Virginia. Diego Rivera had encouraged Kahlo to paint portraits of native Mexican and Indian people. At this early stage of her career, she hadn't yet developed her signature style and was still experimenting with influences from old world masters.</p>
<p>The girl's <strong>innocence</strong> comes through in her seemingly weak frame and shy posture, hands clutching her thighs. The background uses simple horizontal divisions of <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>purple</strong></a> and <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a>, bringing out Virginia's face and outfit. The painting measures 84 x 68 cm, oil on masonite, and is preserved at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City.</p>`,
    faqs: [
      {
        question: "Where can I see this Frida Kahlo portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City. It measures <strong>84 x 68 cm</strong>, oil on masonite.`
      },
      {
        question: "What style is this Kahlo painting?",
        answer: `This early work is classified as <strong>Naïve Art (Primitivism)</strong>. <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Kahlo</strong></a> hadn't yet developed her signature style and was experimenting with old master influences.`
      },
      {
        question: "Why did Kahlo paint portraits like this?",
        answer: `<strong>Diego Rivera</strong> encouraged her to paint portraits of <strong>native Mexican and Indian people</strong>. This was part of the Mexican artistic movement celebrating indigenous culture.`
      }
    ]
  },
  {
    slug: 'john-everett-millais-portrait-of-wilkie-collins',
    description: `<p><a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a> painted this portrait of novelist Wilkie Collins in the early 1850s. Collins appears with his tremendous forehead, wearing spectacles, his raised hands joined palm to palm with very flexible fingers. The two were connected through Collins's brother Charles, who was one of Millais's closest friends.</p>
<p>At the time, Collins was about to begin the <strong>"novels of sensation"</strong> that would make his name. This series of mystery and suspense tales eventually included "The Woman in White" (1860) and "The Moonstone" (1868), often considered the first detective novel. Millais was a founding member of the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite Brotherhood</strong></a>. The portrait is now at the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see this Millais portrait?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London (NPG 967). Millais later worried about <strong>discoloration from "nasty brown varnish."</strong>`
      },
      {
        question: "Who was Wilkie Collins?",
        answer: `Collins was a <strong>Victorian novelist</strong> who wrote "The Woman in White" and "The Moonstone," often called the first detective novel. He was friends with the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelites</strong></a>.`
      },
      {
        question: "How were Millais and Collins connected?",
        answer: `Collins's brother Charles was <a href="/apps/masterpieces/artist/john-everett-millais"><strong>Millais's</strong></a> <strong>closest friend</strong>. Millais was a frequent visitor at the Collins family home at 17 Hanover Terrace, London.`
      }
    ]
  },
  {
    slug: 'william-merritt-chase-portrait-of-william-gurley-munson',
    description: `<p><a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted this portrait in 1868, one of his earliest works. The smoothly blended brushstrokes show dramatic improvement from his previous portraits, emulating his teacher Barton S. Hays while working within broader traditions of early American portraiture. The dark color palette reflects his later Munich training.</p>
<p>This <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> portrait measures 30 x 25 inches and was bequeathed by Gladys Munson Wurzburg to the Indianapolis Museum of Art at Newfields. Chase would go on to become an influential teacher whose students included Georgia O'Keeffe, Edward Hopper, Marsden Hartley, and Charles Sheeler. He founded the first summer school of landscape painting at Shinnecock, Long Island.</p>`,
    faqs: [
      {
        question: "Where can I see this Chase portrait?",
        answer: `The painting is at the <strong>Indianapolis Museum of Art at Newfields</strong>. It measures <strong>30 x 25 inches</strong> and was bequeathed by Gladys Munson Wurzburg.`
      },
      {
        question: "What style is this portrait?",
        answer: `This early work is in the <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> style with a <strong>dark Munich palette</strong>. <a href="/apps/masterpieces/artist/william-merritt-chase"><strong>Chase</strong></a> would later embrace Impressionism.`
      },
      {
        question: "Who taught William Merritt Chase?",
        answer: `Chase studied under <strong>Barton S. Hays</strong> in Indianapolis before attending the National Academy of Design and Munich's Royal Academy. He became a highly influential teacher himself.`
      }
    ]
  },
  {
    slug: 'william-holman-hunt-portrait-of-william-pink',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this portrait in 1842, when he was only about fifteen years old. The subject, William Pink (1809–1857), was an artist associated with the Royal Academy of Arts. This early work in the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> style predates Hunt's founding of the Pre-Raphaelite Brotherhood by six years.</p>
<p>The portrait measures 60 x 48 cm, oil on canvas. Hunt would go on to co-found the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848 with Dante Gabriel Rossetti and John Everett Millais. His later paintings became famous for their <strong>vivid color, elaborate symbolism</strong>, and meticulous attention to detail. This youthful portrait reveals the technical foundations of his artistic development.</p>`,
    faqs: [
      {
        question: "How old was Hunt when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/william-holman-hunt"><strong>Hunt</strong></a> was only about <strong>fifteen years old</strong> in 1842. This was six years before he co-founded the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite Brotherhood</strong></a>.`
      },
      {
        question: "Who was William Pink?",
        answer: `William Pink (1809–1857) was an <strong>artist associated with the Royal Academy of Arts</strong>. He was known for works including "Smugglerius."`
      },
      {
        question: "What style is this portrait?",
        answer: `This early work is in the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> style, predating Hunt's famous <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite</strong></a> paintings with their vivid colors and symbolism.`
      }
    ]
  },
  {
    slug: 'dante-gabriel-rossetti-portrait-of-william-rossetti-orange',
    description: `<p><a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> painted this portrait of his younger brother William Michael Rossetti. William (1829–1919) was a writer, editor, and critic who served as historian and biographer for the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite Brotherhood</strong></a>. He was recruited as one of the original seven members in 1848.</p>
<p>The Rossetti family was deeply artistic. Their father, an Italian political refugee, was a poet and Dante scholar. Sister Christina became a famous poet, while Dante Gabriel founded the Pre-Raphaelites with William Holman Hunt and John Everett Millais. William documented the movement's history. The title references the <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>orange</strong></a> tones present in this intimate <strong>family portrait</strong>.</p>`,
    faqs: [
      {
        question: "Who was William Michael Rossetti?",
        answer: `William (1829–1919) was <a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel's</strong></a> younger brother, a <strong>writer and critic</strong> who documented the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite</strong></a> movement as its historian.`
      },
      {
        question: "Was William Rossetti a Pre-Raphaelite?",
        answer: `Yes, William was one of the <strong>original seven members</strong> of the <a href="/apps/masterpieces/movement/pre-raphaelites"><strong>Pre-Raphaelite Brotherhood</strong></a> founded in 1848. He served as the group's biographer and historian.`
      },
      {
        question: "What was the Rossetti family like?",
        answer: `The Rossettis were deeply artistic. Their father was an <strong>Italian political refugee</strong> and Dante scholar. Sister Christina became a famous poet, while Dante Gabriel co-founded the Pre-Raphaelites.`
      }
    ]
  },
  {
    slug: 'paolo-veronese-portrait-of-woman-with-a-child-and-a-dog',
    description: `<p><a href="/apps/masterpieces/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> created this portrait around 1546-1548, depicting a woman in elegant black and white with gold accents, holding a small child while a white dog stands at her feet. The composition creates a visual and emotional connection between the three figures. Warm light from the left illuminates their features against a dark background with hints of blue sky.</p>
<p>Veronese was one of the <strong>"great trio"</strong> of Venetian cinquecento painters alongside Titian and Tintoretto. Known as a supreme colorist, he developed a naturalist style famous for elaborate narrative cycles, majestic architectural settings, and glittering pageantry. This intimate family scene measures 115 x 95 cm and is now at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see this Veronese portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. It measures <strong>115 x 95 cm</strong>, oil on canvas, painted around 1546-1548.`
      },
      {
        question: "What style is this portrait?",
        answer: `This is <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> (Late <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>) Venetian painting. <a href="/apps/masterpieces/artist/paolo-veronese"><strong>Veronese</strong></a> was famous as a <strong>supreme colorist</strong>.`
      },
      {
        question: "Who were the great Venetian painters?",
        answer: `<a href="/apps/masterpieces/artist/paolo-veronese"><strong>Veronese</strong></a> formed the <strong>"great trio"</strong> of Venetian cinquecento painters with Titian and Tintoretto, dominating sixteenth-century Venetian art.`
      }
    ]
  },
  {
    slug: 'gustave-courbet-portrait-of-z233lie-courbet',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this portrait of his sister Zélie around 1847. In his letters, the painter described her as "always ill, always brave, always lovable." Based on her features, she appears about twenty years old. Courbet's sisters Zoé, Zélie, and Juliette were his first models for drawing and painting.</p>
<p>The technical handling demonstrates Courbet's developing <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> approach. The luminous brushwork on the face and hand, dense layers of whites and grays in the collar, and the dark background create psychological intensity comparable to Rembrandt's portraits of Saskia. The painting measures 56 x 46 cm and is at the <strong>Museo de Arte de São Paulo</strong> (MASP) in Brazil. Another version exists at the Musée des Beaux-Arts de Nancy.</p>`,
    faqs: [
      {
        question: "Where can I see this Courbet portrait?",
        answer: `The painting is at the <strong>Museo de Arte de São Paulo</strong> (MASP) in Brazil. It measures <strong>56 x 46 cm</strong>, oil on canvas. Another version is in Nancy, France.`
      },
      {
        question: "Who was Zélie Courbet?",
        answer: `Zélie (1828–1875) was <a href="/apps/masterpieces/artist/gustave-courbet"><strong>Courbet's</strong></a> sister. He described her as <strong>"always ill, always brave, always lovable"</strong> in his letters.`
      },
      {
        question: "What style is this portrait?",
        answer: `This is <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> portraiture. Critics compared its psychological intensity to <strong>Rembrandt's portraits of Saskia</strong>. Courbet led the Realism movement.`
      }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 20 artworks...');

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
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nBatch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
