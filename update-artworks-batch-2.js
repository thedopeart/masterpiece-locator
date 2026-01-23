const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'michelangelo-male-nude-and-arm-of-bearded-man',
    description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> created this ink study in 1504, during the period when he was working on major Florentine commissions. The sheet shows a standing male figure alongside a detailed study of a muscular arm belonging to a bearded man. Both elements demonstrate the artist's obsessive attention to human anatomy.</p>
<p>This type of preparatory drawing was essential to <strong>High Renaissance</strong> workshop practice. Artists made countless studies of limbs, torsos, and poses before committing to paint or marble. The compact dimensions (34 x 16.8 cm) suggest Michelangelo kept this as a working reference, not a presentation piece. The confident ink lines capture musculature and form with an economy that reveals deep anatomical knowledge.</p>
<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris now holds this drawing among its collection of Renaissance works on paper. Michelangelo's figure studies remain highly valued for what they reveal about his creative process. Before carving David or painting the Sistine ceiling, he filled sketchbooks with studies like this one, building his understanding of how the human body moved and tensed under stress.</p>`,
    faqs: [
      {
        question: "Where can I see this Michelangelo drawing?",
        answer: `The drawing is held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. It's part of the museum's substantial collection of Renaissance drawings and studies.`
      },
      {
        question: "What medium did Michelangelo use?",
        answer: `<a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> executed this study in <strong>ink on paper</strong>. Ink allowed him to work quickly while capturing the precise contours of human musculature.`
      },
      {
        question: "What are the dimensions of this drawing?",
        answer: `The sheet measures <strong>34 x 16.8 cm</strong> (approximately 13 x 7 inches). Its relatively small size is typical of working sketches kept in the studio.`
      }
    ]
  },
  {
    slug: 'gustave-moreau-male-nude-and-other-studies',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> created this sheet of figure studies in 1858, working out poses and anatomical details that would inform his symbolic paintings. The sheet includes a male nude alongside studies of legs, arms, and other figures, all executed with the careful draftsmanship that underpinned his elaborate finished works.</p>
<p>Moreau's approach to the <strong>human figure</strong> combined academic rigor with mystical imagination. While his paintings often depicted gods, heroes, and mythological creatures, they were grounded in traditional life drawing. This preparatory work shows that foundation. He studied the body systematically before transforming it into the idealized forms that populated his symbolic compositions.</p>
<p>The <a href="/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musée National Gustave Moreau</strong></a> in Paris holds this and thousands of other drawings by the artist. Moreau bequeathed his house and studio to the state before his death in 1898, including nearly 5,000 drawings. The museum opened in 1903 and remains the largest collection of his work anywhere. Visitors can see how his elaborate, jewel-toned paintings emerged from studies like this one.</p>`,
    faqs: [
      {
        question: "Where can I see Moreau's figure studies?",
        answer: `This drawing is at the <a href="/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musée National Gustave Moreau</strong></a> in Paris. The museum holds nearly 5,000 drawings that Moreau bequeathed to France.`
      },
      {
        question: "When did Gustave Moreau create this drawing?",
        answer: `<a href="/apps/masterpieces/artist/gustave-moreau"><strong>Moreau</strong></a> made this sheet of studies in <strong>1858</strong>, during his formative years before developing the fully symbolic style he became known for.`
      },
      {
        question: "What movement is Gustave Moreau associated with?",
        answer: `Moreau is considered a founder of <strong>Symbolism</strong>. His paintings of mythological and religious subjects influenced artists including Henri Matisse and Georges Rouault, who studied under him.`
      }
    ]
  },
  {
    slug: 'jacques-louis-david-male-nude-known-as-hector',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this academic study in 1778, depicting a heroic male figure identified with Hector, the Trojan warrior. The muscular body reclines against drapery, displaying the idealized anatomy that French academic training demanded of aspiring painters.</p>
<p>Works like this were called <strong>académies</strong>, required exercises for students at the French Academy. Before artists could paint historical narratives, they had to prove mastery of the nude figure. David was still developing his mature Neoclassical style when he made this study. The finished result already shows his command of form, light, and classical proportion that would soon make him France's leading painter.</p>
<p>The canvas measures 123 x 172 cm, substantial for an academic exercise. It now hangs at the <a href="/apps/masterpieces/museum/mus233e-fabre-montpellier-france"><strong>Musée Fabre</strong></a> in Montpellier. David would go on to paint The Oath of the Horatii and The Death of Marat, works that defined <strong>Neoclassicism</strong> and shaped French political imagery. This early nude shows the technical foundation beneath those later achievements.</p>`,
    faqs: [
      {
        question: "Where can I see Male Nude known as Hector?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/mus233e-fabre-montpellier-france"><strong>Musée Fabre</strong></a> in Montpellier, France. The museum has an important collection of French academic painting.`
      },
      {
        question: "What is an académie painting?",
        answer: `An <strong>académie</strong> was a required academic exercise where students painted the male nude to demonstrate anatomical mastery. This training prepared artists to paint historical and mythological narratives.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>123 x 172 cm</strong> (approximately 48 x 68 inches). It's large for an academic study, indicating <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>David's</strong></a> ambition.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies early <strong>Neoclassicism</strong>, with its idealized anatomy, classical subject matter, and clear lighting. David would become the movement's leading figure in France.`
      }
    ]
  },
  {
    slug: 'edouard-vuillard-man-and-woman-beneath-a-tree',
    description: `<p><a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> painted this intimate scene in 1893, during his most active period with the Nabis group. Two figures stand beneath a tree, their forms flattened into decorative patterns that merge with the surrounding foliage. The boundary between people and landscape nearly dissolves.</p>
<p>Vuillard and the <strong>Nabis</strong> rejected Impressionist naturalism in favor of flat, patterned surfaces influenced by Japanese prints and Paul Gauguin's Pont-Aven style. This painting shows that approach clearly. The figures aren't rendered in three-dimensional space but integrated into a tapestry of color and shape. The emotional mood matters more than accurate description.</p>
<p>The artist became known for <strong>Intimism</strong>, a focus on quiet domestic scenes painted in muted tones. Gardens, parlors, and family rooms filled his canvases. Here the outdoor setting still carries that intimate quality. The closeness of the two figures beneath the sheltering tree suggests a private moment, though Vuillard keeps their relationship mysterious. Those who appreciate <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature art</strong></a> will find this blend of figure and landscape particularly appealing.</p>`,
    faqs: [
      {
        question: "Who painted Man and Woman beneath a Tree?",
        answer: `<a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> created this work in <strong>1893</strong>. He was a key member of the Nabis, a Post-Impressionist group active in Paris during the 1890s.`
      },
      {
        question: "What is Intimism?",
        answer: `<strong>Intimism</strong> describes Vuillard's specialty: quiet domestic scenes painted in muted, decorative tones. Rather than grand subjects, he focused on everyday moments in interiors and gardens.`
      },
      {
        question: "What style is this painting?",
        answer: `The work is <strong>Post-Impressionist</strong> with Nabis characteristics: flattened forms, decorative patterns, and muted colors. Japanese prints and Gauguin's work influenced this approach.`
      }
    ]
  },
  {
    slug: 'gustave-caillebotte-man-at-the-window',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted his brother René standing at a window of their family home on Rue de Miromesnil in Paris in 1875. René wears informal clothes and gazes out at Boulevard de Malesherbes, his back turned to us. The Haussmann-era streetscape spreads below.</p>
<p>The composition echoes German <strong>Romantic paintings</strong> of figures at windows, particularly Caspar David Friedrich's Woman at the Window from 1822. But where Friedrich's figure contemplates nature, Caillebotte's man surveys the modern city. This shift from countryside to urban boulevard marks the painting as distinctly Impressionist in spirit, concerned with contemporary life rather than timeless landscape.</p>
<p>Caillebotte showed this work at the second Impressionist exhibition in 1876 alongside his famous Floor Scrapers. The writer Émile Zola praised the technical skill but criticized what he called the "anti-artistic exactitude of the copying." The painting sold at Christie's New York in 2021 for <strong>$53 million</strong> to the J. Paul Getty Museum, making it one of the most expensive Impressionist works sold at auction. Those drawn to <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>people paintings</strong></a> will appreciate how Caillebotte captures a private moment of urban observation.</p>`,
    faqs: [
      {
        question: "Where can I see Man at the Window?",
        answer: `The painting is now at the <strong>J. Paul Getty Museum</strong> in Los Angeles. It was purchased at auction in 2021 for $53 million, the Getty's first <a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Caillebotte</strong></a> acquisition.`
      },
      {
        question: "Who is depicted in Man at the Window?",
        answer: `The figure is <strong>René Caillebotte</strong>, the artist's brother. He stands at a window in their family home on Rue de Miromesnil in Paris, looking out at the street below.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>117 x 82 cm</strong> (approximately 46 x 32 inches). It's a substantial work that Caillebotte exhibited at the 1876 Impressionist show.`
      },
      {
        question: "When was Man at the Window painted?",
        answer: `Caillebotte completed the painting in <strong>1875</strong>, early in his career. He showed it at the second Impressionist exhibition the following year alongside his Floor Scrapers.`
      }
    ]
  },
  {
    slug: 'rembrandt-man-in-a-golden-helmet',
    description: `<p>This striking portrait was long considered one of <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> finest works, showing a soldier wearing an elaborately decorated golden helmet that catches dramatic light against a dark background. The face beneath is shadowed and solemn, the metal rendered with astonishing skill.</p>
<p>In 1985, art historians delivered surprising news: the painting probably wasn't by Rembrandt at all. A Dutch commission examining questionable attributions found that key details didn't match Rembrandt's known technique. X-ray analysis and close study of brushwork suggested the painting was created around 1650 by someone in his circle, likely a talented student. The exact artist remains unknown.</p>
<p>The reattribution didn't diminish the work's quality. Expert Jan Kelch emphasized it was "not a fake" but rather "a great masterful work" from Rembrandt's workshop. It still hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin, where visitors continue to admire the <strong>luminous rendering of metal</strong> that once made it an icon of the Dutch Golden Age. The story shows how scholarship can revise but not erase artistic achievement.</p>`,
    faqs: [
      {
        question: "Did Rembrandt paint Man in a Golden Helmet?",
        answer: `Modern scholarship says probably not. In 1985, experts concluded the work was likely painted by a <strong>student or follower</strong> around 1650. The actual artist remains unidentified.`
      },
      {
        question: "Where can I see Man in a Golden Helmet?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin, Germany. Despite the reattribution, it remains on display as a masterwork from <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> circle.`
      },
      {
        question: "When was Man in a Golden Helmet painted?",
        answer: `The work dates to around <strong>1650</strong>, during the height of the Dutch Golden Age. It was created in or near Rembrandt's Amsterdam workshop.`
      },
      {
        question: "Why was the attribution changed?",
        answer: `X-ray analysis and brushwork studies showed the technique didn't match Rembrandt's confirmed paintings. A 1985 commission specifically investigating <strong>questionable Rembrandts</strong> announced the findings.`
      }
    ]
  },
  {
    slug: 'juan-gris-man-in-the-cafe',
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted this Cubist portrait in 1912, showing a well-dressed man seated in a café setting. The figure fragments into geometric planes of brown, gray, and ochre. A top hat, newspaper labeled "Journal," and wine glass identify the scene, though all are broken into overlapping facets.</p>
<p>Gris was one of the first and greatest practitioners of <strong>Analytical Cubism</strong> alongside Picasso and Braque. By 1912 he had developed his own approach, placing greater emphasis on structured composition than his colleagues. The subject's face dissolves into angular shades, yet the overall form remains legible. Preparatory drawings at the Morgan Library show Gris working through multiple versions of the head, erasing and redrawing until he achieved the right balance.</p>
<p>The oil on canvas measures 128.2 x 88 cm and now hangs at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>. Gris lived from 1887 to 1927, his career cut short at age 40. In those brief decades he helped transform how artists represented space and form, making café scenes like this one into experiments in <strong>multiple viewpoints</strong> rather than simple observations.</p>`,
    faqs: [
      {
        question: "Where can I see Man in the Cafe?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a> in Pennsylvania. It's a key example of <a href="/apps/masterpieces/artist/juan-gris"><strong>Gris's</strong></a> Analytical Cubist work.`
      },
      {
        question: "What style is Man in the Cafe?",
        answer: `The work exemplifies <strong>Analytical Cubism</strong>, where objects and figures break into geometric planes viewed from multiple angles simultaneously. Gris, Picasso, and Braque pioneered this approach.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>128.2 x 88 cm</strong> (approximately 50 x 35 inches). Preparatory drawings for the composition are held at the Morgan Library.`
      },
      {
        question: "When was Man in the Cafe painted?",
        answer: `Gris completed this work in <strong>1912</strong>, when he was 25 years old. By this point he had developed his distinctive Cubist style distinct from Picasso and Braque.`
      }
    ]
  },
  {
    slug: 'georges-seurat-man-leaning-on-a-parapet',
    description: `<p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a> created this small painting around 1881, showing a figure seen from behind leaning against a low wall. The simple composition isolates the solitary man against an undefined background, emphasizing silhouette over detail.</p>
<p>Seurat developed the image through multiple studies in <strong>conté crayon</strong> and pastel, both squared for transfer. The motif of a figure leaning on a parapet appears in several early sketches, along with a companion piece showing a woman in similar pose. Art historians have compared the subject to Caspar David Friedrich's Romantic paintings of figures contemplating landscape from behind.</p>
<p>The small oil on wood measures just 16.5 x 12.4 cm. It now belongs to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, bequeathed by Mrs. Charles Wrightsman in 2019. This work predates Seurat's development of <strong>Pointillism</strong> by several years. The technique is conventional, the brushwork smooth. Yet the quiet, contemplative mood and interest in silhouette already hint at the meditative quality his later masterpieces would achieve.</p>`,
    faqs: [
      {
        question: "Where can I see Man Leaning on a Parapet?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York. Mrs. Charles Wrightsman bequeathed it to the museum in 2019.`
      },
      {
        question: "Is this a Pointillist painting?",
        answer: `No, this early work predates <a href="/apps/masterpieces/artist/georges-seurat"><strong>Seurat's</strong></a> development of <strong>Pointillism</strong>. The technique is conventional oil painting, though the contemplative mood anticipates his later style.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on wood panel measures only <strong>16.5 x 12.4 cm</strong> (approximately 6.5 x 5 inches). Seurat also made related studies in conté crayon and pastel.`
      }
    ]
  },
  {
    slug: 'pieter-de-hooch-man-offering-a-glass-of-wine-to-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this elegant interior scene around 1654-55, showing a well-dressed man presenting a glass of wine to a woman while a servant watches nearby. Light pours through a window on the left, illuminating the figures and the richly furnished room.</p>
<p>The painting exemplifies <strong>Dutch Golden Age genre painting</strong> at its finest. De Hooch specialized in domestic interiors where light streaming through windows created complex patterns of illumination and shadow. Here the play of light gives depth to the space while highlighting the couple's fine clothing and the woman's strategically placed fan. The servant's presence adds a note of propriety to what might otherwise seem an intimate encounter.</p>
<p>The canvas measures 71 x 59 cm and hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. The work was once misattributed to Gabriel Metsu, another Dutch genre painter, but scholars have confirmed it as de Hooch's authentic work. The artist's skill at suggesting space through carefully observed light remains his lasting contribution to 17th-century painting.</p>`,
    faqs: [
      {
        question: "Where can I see this Pieter de Hooch painting?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. It was once wrongly attributed to Gabriel Metsu.`
      },
      {
        question: "When was this painting created?",
        answer: `<a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this work around <strong>1654-55</strong>, during the height of the Dutch Golden Age when genre scenes of domestic life were highly popular.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>71 x 59 cm</strong> (approximately 28 x 23 inches). The intimate scale suits the domestic subject matter de Hooch specialized in.`
      }
    ]
  },
  {
    slug: 'rembrandt-man-pulling-a-rope',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> drew this dynamic figure study around 1627-28, early in his career when he was still working in Leiden. A young man leans forward, his body tensed with effort as he pulls on a rope. The composition captures physical exertion through pose and gesture alone.</p>
<p>The <strong>Baroque style</strong> shows in the dramatic movement and the focus on a single figure engaged in vigorous action. Rembrandt built the form through individual strokes that suggest muscle and strain without laboring over anatomical detail. This economy of means was characteristic of his drawing practice, where he could capture a complete figure in minutes.</p>
<p>The work belongs to the Staatliche Graphische Sammlung (State Graphic Collection) in Munich. It dates from the same period as Rembrandt's early self-portraits and biblical scenes, when he was establishing himself as an artist to watch. Figure studies like this one helped him develop the command of the human body that would distinguish his later paintings. The drawing is sometimes titled "Young Man Pulling a Rope."</p>`,
    faqs: [
      {
        question: "When did Rembrandt create this drawing?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> made this figure study around <strong>1627-28</strong>, during his early years in Leiden before moving to Amsterdam. He was in his early twenties.`
      },
      {
        question: "Where is this drawing held?",
        answer: `The work is in the <strong>Staatliche Graphische Sammlung</strong> (State Graphic Collection) in Munich, Germany. It's part of their collection of Old Master drawings.`
      },
      {
        question: "What type of work is this?",
        answer: `This is a <strong>figure study</strong> or genre drawing showing a man engaged in physical labor. Rembrandt made many such studies to understand how the body moved under strain.`
      }
    ]
  },
  {
    slug: 'james-mcneill-whistler-man-smoking-a-pipe',
    description: `<p><a href="/apps/masterpieces/artist/james-mcneill-whistler"><strong>James McNeill Whistler</strong></a> painted this informal portrait around 1859, showing a man absorbed in thought while smoking a pipe. The small canvas captures a moment of quiet contemplation with the restrained palette and loose brushwork that would characterize much of Whistler's later career.</p>
<p>The work dates from Whistler's early years before he developed his signature "arrangements" and "nocturnes." At this point he was working in a <strong>Realist</strong> manner, influenced by Gustave Courbet and the artists he encountered in Paris. The intimate scale and casual subject show an artist interested in capturing ordinary moments rather than grand themes.</p>
<p>The oil on canvas measures 33 x 41 cm and hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. Whistler (1834-1903) was American by birth but spent most of his career in Europe, particularly London. He became famous for his aesthetic theories and legal battles as much as his paintings, championing art for art's sake against Victorian moralism. This early portrait shows the observational skills he would later subordinate to more abstract concerns.</p>`,
    faqs: [
      {
        question: "Where can I see Man Smoking a Pipe?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum specializes in 19th-century art including works by American expatriates like <a href="/apps/masterpieces/artist/james-mcneill-whistler"><strong>Whistler</strong></a>.`
      },
      {
        question: "When was this portrait painted?",
        answer: `Whistler created this work around <strong>1859</strong>, early in his career before developing the tonal "arrangements" and "nocturnes" that made him famous.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>33 x 41 cm</strong> (approximately 13 x 16 inches). The intimate scale suits the casual, contemplative subject matter.`
      }
    ]
  },
  {
    slug: 'rembrandt-man-standing-up',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created this figure study as part of his ongoing investigation of the human form. The work shows a man in standing position, likely drawn from a live model in the artist's Amsterdam studio.</p>
<p>Throughout his career, Rembrandt made countless drawings and etchings of figures in various poses. These studies served multiple purposes: training exercises, preparation for paintings, and works complete in themselves. The <strong>Baroque master</strong> was as celebrated for his prints and drawings as for his paintings, and collectors eagerly acquired examples of his work on paper.</p>
<p>This piece belongs to the collection of the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. The Hermitage holds one of the world's finest collections of Rembrandt's work, including major paintings alongside drawings and etchings. Studies like this one reveal his working process and his endless fascination with how the body occupied space, caught light, and expressed character through pose alone.</p>`,
    faqs: [
      {
        question: "Where can I see this Rembrandt study?",
        answer: `The work is in the collection of the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage has an exceptional collection of <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> works.`
      },
      {
        question: "What type of work is Man Standing Up?",
        answer: `This is a <strong>figure study</strong>, one of many Rembrandt made throughout his career. Such works helped him understand anatomy and informed his major paintings.`
      },
      {
        question: "What art movement does this represent?",
        answer: `The work belongs to the <strong>Baroque</strong> period of Dutch art, when Rembrandt dominated Amsterdam's art world with his dramatic use of light and psychological depth.`
      }
    ]
  },
  {
    slug: 'robert-delaunay-man-with-a-tulip-also-known-as-portrait-of-jean-me',
    description: `<p><a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a> painted this portrait of his fellow artist Jean Metzinger in 1906, before either had fully developed the abstract styles they would become known for. Metzinger wears a bowler hat and holds a cigarette, his face rendered in the broken color technique of <strong>Neo-Impressionism</strong>.</p>
<p>The painting shows Delaunay's early Divisionist period, when he applied color in separate dabs following theories about how the eye mixes hues. The pink, blue, and bright tones give the portrait a vibrant, stylish quality that matches Metzinger's dandy appearance. A tulip in the composition adds a decorative flourish and gives the work its common title.</p>
<p>Metzinger would become an important Cubist painter and theorist, working alongside Picasso, Braque, and eventually Delaunay himself. This early portrait captures him before that transformation, as a young artist in the Parisian avant-garde. The canvas measures 72.39 x 48.58 cm and remains in a private collection. Delaunay later pioneered <strong>Orphism</strong>, emphasizing pure color and circular forms, but this portrait shows his Neo-Impressionist foundation.</p>`,
    faqs: [
      {
        question: "Who is depicted in Man with a Tulip?",
        answer: `The portrait shows <strong>Jean Metzinger</strong>, a fellow artist who would become an important Cubist painter and theorist. <a href="/apps/masterpieces/artist/robert-delaunay"><strong>Delaunay</strong></a> painted him in 1906.`
      },
      {
        question: "What style is this portrait?",
        answer: `The work is painted in a <strong>Neo-Impressionist</strong> or Divisionist style, with color applied in separate dabs. This was Delaunay's approach before developing his later Orphism.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>72.39 x 48.58 cm</strong> (approximately 28 x 19 inches). The painting is currently in a private collection.`
      }
    ]
  },
  {
    slug: 'william-merritt-chase-man-with-bandana',
    description: `<p><a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted this characterful portrait between 1872 and 1878, showing a man wearing a colorful bandana. The small oil on panel demonstrates the virtuoso brushwork and direct observation that made Chase one of America's most respected painters and teachers.</p>
<p>Chase excelled at <strong>portraits</strong> throughout his career, capturing his subjects with confident strokes and attention to personality. This informal study shows his skill at suggesting character through a few well-placed touches. The bandana adds a note of color and individuality to what might otherwise be a straightforward head study.</p>
<p>The panel measures just 25.4 x 20.32 cm, a size suited to quick, spontaneous work. Chase (1849-1916) trained in Munich before returning to America, where he became a leading figure in <strong>American Impressionism</strong>. He taught at the Art Students League and his own schools, influencing a generation of American painters including Georgia O'Keeffe. This small portrait shows the direct, energetic approach he encouraged in his students.</p>`,
    faqs: [
      {
        question: "Who painted Man with Bandana?",
        answer: `<a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> created this portrait between 1872 and 1878. He was a leading American Impressionist painter and influential teacher.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on panel measures <strong>25.4 x 20.32 cm</strong> (approximately 10 x 8 inches). The small scale suggests it was a quick, informal study rather than a formal commission.`
      },
      {
        question: "What movement is Chase associated with?",
        answer: `Chase is a key figure in <strong>American Impressionism</strong>. He trained in Munich and brought European techniques back to America, where he influenced generations of students.`
      }
    ]
  },
  {
    slug: 'gerrit-dou-man-with-easel',
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> painted several self-portraits showing himself at work before an easel, and this image continues that tradition. A young artist gazes out at the viewer, seated before a stretched canvas, his arm raised as if about to apply paint.</p>
<p>Dou trained with Rembrandt in Leiden from 1628, when he was just fourteen and his teacher barely twenty-one. He became the founder of the <strong>Leiden fijnschilders</strong> (fine painters), known for their meticulous technique and highly polished surfaces. Unlike Rembrandt's loose, expressive brushwork, Dou's style demanded patience and precision, with invisible strokes creating an almost enamel-like finish.</p>
<p>The presence of studio objects, globes, books, and instruments was typical of Dou's artistic persona. He presented himself as a <strong>pictor doctus</strong>, a learned painter whose intellectual interests matched his technical skill. About a dozen of his self-portraits survive. This tradition of showing the artist surrounded by the tools of his profession influenced later Dutch painters who studied under him, including Frans van Mieris and Gabriël Metsu.</p>`,
    faqs: [
      {
        question: "Who painted Man with Easel?",
        answer: `<a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> created this work. He was Rembrandt's first student and founder of the Leiden school of fine painters known for meticulous technique.`
      },
      {
        question: "What are the fijnschilders?",
        answer: `The <strong>fijnschilders</strong> (fine painters) were a Leiden school founded by Dou, known for highly polished surfaces and nearly invisible brushstrokes. The style contrasted with Rembrandt's looser approach.`
      },
      {
        question: "When did Dou study with Rembrandt?",
        answer: `Dou entered Rembrandt's studio in <strong>1628</strong> at age fourteen. His teacher was only about twenty-one. The apprenticeship lasted until Rembrandt left Leiden around 1631.`
      }
    ]
  },
  {
    slug: 'annibale-carracci-man-with-monkey',
    description: `<p><a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> painted this unusual portrait between 1590 and 1591, showing a man accompanied by a monkey. The composition combines portraiture with the genre scenes of daily life that Carracci often depicted with warmth and realism.</p>
<p>Carracci was one of the founders of <strong>Baroque painting</strong>, working to move art beyond both the artificiality of late Mannerism and the strictures of Counter-Reformation piety. With his brother Agostino and cousin Ludovico, he opened the Accademia degli Incamminati in Bologna, training artists in direct observation from life. This painting reflects that commitment to naturalism.</p>
<p>The oil on canvas measures 58.3 x 68 cm and hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence. The Uffizi holds several Carracci works including Venus and Satire and a self-portrait. Annibale's greatest achievement would be the ceiling frescoes of the Palazzo Farnese in Rome, completed around 1600, but paintings like this one show his ability to capture individual character with dignity and directness.</p>`,
    faqs: [
      {
        question: "Where can I see Man with Monkey?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum holds several works by <a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a>.`
      },
      {
        question: "When was Man with Monkey painted?",
        answer: `Carracci created this work between <strong>1590 and 1591</strong>, during his years in Bologna before moving to Rome to paint the Palazzo Farnese frescoes.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>58.3 x 68 cm</strong> (approximately 23 x 27 inches). The modest scale suits the informal, genre-like quality of the portrait.`
      }
    ]
  },
  {
    slug: 'akseli-gallen-kallela-m228ntykoski-waterfall',
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted this monumental waterfall scene in 1893 after traveling to the Kuusamo region of northeastern Finland with his wife Mary and daughter Marjata. The canvas captures the raw power of the Mäntykoski rapids as water crashes through rocky terrain.</p>
<p>Five golden vertical lines cross the composition like strings of a kantele, the traditional Finnish instrument. This symbolic element marks the painting's position between <strong>Naturalism and Symbolism</strong> in Gallen-Kallela's development. The realistic waterfall merges with an abstract musical suggestion, as if the cascade produced sound visible to the eye.</p>
<p>The massive canvas measures 270 x 156 cm, making the waterfall nearly life-size. Finland was then a Grand Duchy under Russian rule, and Gallen-Kallela's landscapes became symbols of <strong>Finnish national identity</strong> during the 1890s when Russification policies threatened autonomy. The Paanajärvi region depicted here was ceded to the Soviet Union after World War II. Today a national park preserves the area, though it lies across the Russian border. Those drawn to <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue art</strong></a> will appreciate the water's varied tones.</p>`,
    faqs: [
      {
        question: "What are the dimensions of Mäntykoski Waterfall?",
        answer: `The oil on canvas measures <strong>270 x 156 cm</strong> (approximately 106 x 61 inches). The large scale makes the waterfall nearly life-size, emphasizing its power and presence.`
      },
      {
        question: "What do the golden lines represent?",
        answer: `The five vertical <strong>golden strings</strong> suggest the kantele, a traditional Finnish instrument. They add a symbolic, musical dimension to the naturalistic waterfall scene.`
      },
      {
        question: "Where is the Mäntykoski waterfall located?",
        answer: `The waterfall is in the <strong>Paanajärvi region</strong> of northeastern Finland (now Russia). <a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Gallen-Kallela</strong></a> visited in 1892 with his family.`
      },
      {
        question: "Why was this painting important to Finnish identity?",
        answer: `In the 1890s, Finland faced Russian pressure. <strong>Finnish landscape paintings</strong> like this one became symbols of national identity and cultural resistance to Russification policies.`
      }
    ]
  },
  {
    slug: 'gustave-courbet-marc-trapadoux-is-examining-the-book-of-prints',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this intimate portrait in 1848, showing his friend Marc Trapadoux absorbed in examining a book of prints. The composition captures a moment of quiet intellectual engagement, with Trapadoux bent over the pages in concentrated study.</p>
<p>The painting exemplifies <strong>Realist portraiture</strong> at its most direct. Courbet avoided flattery or idealization, presenting his subject exactly as he appeared in an ordinary moment. The focus on a friend rather than a patron, and on reading rather than posing, reflects Courbet's democratic approach to art. He painted workers, peasants, and bourgeois friends with equal attention.</p>
<p>The canvas measures 41 x 32 cm and hangs at the Musée d'Art Moderne de Troyes. Courbet created this work during the same period as After Dinner at Ornans and his self-portrait The Cellist, all showing his commitment to representing contemporary life without theatrical embellishment. The <strong>Realist movement</strong> he championed rejected both Romantic emotionalism and academic idealization in favor of observed truth.</p>`,
    faqs: [
      {
        question: "Who is Marc Trapadoux?",
        answer: `Trapadoux was a <strong>friend of Courbet's</strong> who appears absorbed in studying a book of prints. The portrait captures an ordinary intellectual moment rather than a formal pose.`
      },
      {
        question: "Where can I see this Courbet painting?",
        answer: `The painting is at the <strong>Musée d'Art Moderne de Troyes</strong> in France. It's an example of <a href="/apps/masterpieces/artist/gustave-courbet"><strong>Courbet's</strong></a> intimate Realist portraits.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>41 x 32 cm</strong> (approximately 16 x 13 inches). The modest size suits the intimate, informal subject matter.`
      }
    ]
  },
  {
    slug: 'pietro-da-cortona-marcello-sacchetti',
    description: `<p><a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> painted this portrait of Marquis Marcello Sacchetti around 1626. Sacchetti was the artist's first patron in Rome, the man who launched his career. According to Cortona's biographers, a gifted copy of Raphael's Galatea fresco brought the young artist to the wealthy Florentine's attention.</p>
<p>The portrait was painted as a companion piece to one of Marcello's brother, Cardinal Giulio Sacchetti. Both share similar dimensions and compositional approach. A 1630 payment document records that Cortona received payment for ten portraits of the <strong>Sacchetti family</strong>, including this one. The silk handkerchief Marcello holds and the table visible in the composition hint at his interest in antiquities.</p>
<p>The oil on canvas measures 133 x 98 cm and hangs at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome. The painting entered the Borghese collection in the early 19th century via the dealer Pietro Camuccini. In 2016, the companion portrait of Giulio, long held by the Sacchetti family, was donated to the gallery, reuniting the <strong>pair after four centuries</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome. In 2016 it was reunited with its companion portrait of Cardinal Giulio Sacchetti.`
      },
      {
        question: "Who was Marcello Sacchetti?",
        answer: `<strong>Marcello Sacchetti</strong> was <a href="/apps/masterpieces/artist/pietro-da-cortona"><strong>Cortona's</strong></a> first patron in Rome, the papal treasurer under Urban VIII. His family's support established the artist's career.`
      },
      {
        question: "When was this portrait painted?",
        answer: `Cortona created this work around <strong>1626</strong>, during his early years in Rome. A 1630 document records payment for this and nine other Sacchetti family portraits.`
      },
      {
        question: "What are the dimensions of this painting?",
        answer: `The oil on canvas measures <strong>133 x 98 cm</strong> (approximately 52 x 39 inches). The companion portrait of Giulio Sacchetti has similar dimensions.`
      }
    ]
  },
  {
    slug: 'domenico-beccafumi-marcia',
    description: `<p><a href="/apps/masterpieces/artist/domenico-beccafumi"><strong>Domenico Beccafumi</strong></a> painted this panel around 1519 as part of a decorative series for a wealthy Sienese merchant's bedchamber. The figure depicts Marcia, wife of the Roman statesman Cato the Younger, renowned in classical literature for her marital fidelity and maternal virtue.</p>
<p>The panel belonged to a set celebrating themes of love, fertility, and wifely devotion, likely commissioned for Francesco di Camillo Petrucci's marriage to Caterina di Niccolò Mandoli Piccolomini in 1512. Six panels survive from the original decoration, now scattered across collections in London, Rome, Florence, and Birmingham. The three heroines, Marcia, Tanaquil, and Cornelia, probably adorned the back of a <strong>bench seat</strong> in the bedchamber.</p>
<p>The oil on wood measures 92.1 x 53.3 cm and now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, acquired in 1965. Beccafumi was the leading painter of <strong>Sienese Mannerism</strong>, known for his unusual colors and elongated figures. A Latin couplet in gilt lettering appears on this and other panels from the series, adding a literary dimension to the visual decoration.</p>`,
    faqs: [
      {
        question: "Where can I see Marcia?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. The gallery also holds the companion panel depicting Tanaquil from the same series.`
      },
      {
        question: "Who was Marcia?",
        answer: `<strong>Marcia</strong> was the wife of Cato the Younger, celebrated in Roman literature for marital fidelity. She personified the virtues appropriate for a Renaissance bedchamber decoration.`
      },
      {
        question: "What was this panel originally used for?",
        answer: `The panel decorated a <strong>bedchamber</strong> for a wealthy Sienese merchant, probably the back of a bench seat. Six panels from the series survive in different collections.`
      },
      {
        question: "What style is this painting?",
        answer: `<a href="/apps/masterpieces/artist/domenico-beccafumi"><strong>Beccafumi</strong></a> was the leading painter of <strong>Sienese Mannerism</strong>, known for unusual colors, elongated figures, and sophisticated compositions.`
      }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 20 artworks...\n');

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
