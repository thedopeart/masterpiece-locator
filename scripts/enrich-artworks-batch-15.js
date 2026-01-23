const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'thomas-cole-indian-sacrifice',
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted Indian Sacrifice in 1827, during the early years of his career as the founding figure of American <strong>landscape painting</strong>. The work shows a dramatic mountain scene with jagged rocks and twisted trees framing a ritual taking place on a distant precipice. A small group of figures stands illuminated against the shadowy wilderness, their presence accentuated by soft light breaking through dark surroundings.</p>
<p>Cole was deeply influenced by the novels of James Fenimore Cooper, and this painting likely draws from scenes in <strong>The Last of the Mohicans</strong>, published just a year earlier. The same year, Cole painted a related work depicting Cora kneeling before the Delaware chief Tamenund. Both paintings reflect his interest in American history and the tension between civilization and wilderness that would define his later masterwork, The Course of Empire.</p>
<p>Born in England in 1801, Cole emigrated to Ohio as a teenager and taught himself to paint by studying books and other artists' work. He eventually settled in the Hudson River Valley, where he became the leading voice of the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> tradition in America. Today, this painting resides at the <a href="/apps/masterpieces/museum/university-of-pennsylvania-upenn-philadelphia-pa-u"><strong>University of Pennsylvania</strong></a> in Philadelphia.</p>`,
    faqs: [
      {
        question: "Where can I see Indian Sacrifice by Thomas Cole?",
        answer: "This painting is part of the collection at the <a href=\"/apps/masterpieces/museum/university-of-pennsylvania-upenn-philadelphia-pa-u\"><strong>University of Pennsylvania</strong></a> in Philadelphia, Pennsylvania. The university holds several American art pieces from the 19th century."
      },
      {
        question: "What inspired Thomas Cole to paint Indian Sacrifice?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> was influenced by James Fenimore Cooper's novel The Last of the Mohicans, published in 1826. The dramatic wilderness setting and Native American ritual reflect Cole's interest in American frontier narratives."
      },
      {
        question: "What size is Indian Sacrifice?",
        answer: "The painting measures 91.2 x 122 cm (approximately 36 x 48 inches). It's rendered in <strong>oil on canvas</strong>, which was Cole's preferred medium for his landscape compositions."
      }
    ]
  },
  {
    slug: 'john-william-godward-innocent-amusements',
    description: `<p><a href="/apps/masterpieces/artist/john-william-godward"><strong>John William Godward</strong></a> created Innocent Amusements in 1891, a work that shows his dedication to <strong>Neoclassical</strong> ideals during an era when modern art was rapidly overtaking academic traditions. The painting depicts a scene of leisurely activity, rendered with the careful attention to marble, fabric, and Mediterranean light that defined Godward's style throughout his career.</p>
<p>Godward studied under Sir Lawrence Alma-Tadema and became one of the last major painters to work in the English Neoclassical tradition. His subjects typically featured women in classical dress, often set against backdrops of ancient architecture. He painted with technical precision, creating surfaces that seem to glow from within. The Yale University Art Gallery holds a version of this work, signed and dated by the artist.</p>
<p>Godward's commitment to classical subjects left him increasingly isolated as the 20th century embraced abstraction and expressionism. He reportedly felt that "the world is not big enough for me and a Picasso." Despite falling out of fashion during his lifetime, his paintings have found renewed appreciation among collectors drawn to their <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>feminine subjects</strong></a> and technical skill.</p>`,
    faqs: [
      {
        question: "What style is Innocent Amusements painted in?",
        answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>John William Godward</strong></a> painted this work in the <strong>Neoclassical style</strong>, drawing inspiration from ancient Greek and Roman aesthetics. He was one of the last major painters to work in this tradition."
      },
      {
        question: "Where is Innocent Amusements located?",
        answer: "The painting is in a <strong>private collection</strong>, though the Yale University Art Gallery holds a version measuring 29.5 x 17.5 inches, gifted by the Honorable Michael Huffington in 2015."
      },
      {
        question: "What are the dimensions of Innocent Amusements?",
        answer: "The painting measures 76.2 x 45.7 cm (approximately 30 x 18 inches). It's an <strong>oil on canvas</strong> work characteristic of Godward's carefully detailed classical scenes."
      }
    ]
  },
  {
    slug: 'lovis-corinth-innocentia',
    description: `<p><a href="/apps/masterpieces/artist/lovis-corinth"><strong>Lovis Corinth</strong></a> painted Innocentia in 1890, creating a <strong>semi-nude portrait</strong> that balances vulnerability with quiet defiance. The work depicts a young woman shown frontally, her arms crossed over her chest, wearing only an olive-green garment below her waist and a violet veil that drapes behind her shoulder. Her expression appears melancholic and distant, suggesting thoughts that remain private to the viewer.</p>
<p>Art historians have debated the painting's meaning. Some compare it to depictions of the Vestal virgin, Mary, or the penitent Mary Magdalene. Others point to deliberate contradictions in the composition, noting how the exposed figure and the title "Innocence" create tension. The reference to Raphael's Fornarina, a portrait of the artist's mistress, suggests Corinth may have been playing with the boundary between sacred and profane imagery.</p>
<p>Corinth painted this work during his naturalistic period, before a stroke in 1911 pushed his style toward <strong>Expressionism</strong>. The painting remained in private hands until the <a href="/apps/masterpieces/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich acquired it. The museum first exhibited the work publicly in 1975, and it has since appeared at the Folkwang Museum and other major German institutions.</p>`,
    faqs: [
      {
        question: "Where can I see Lovis Corinth's Innocentia?",
        answer: "The painting is part of the permanent collection at the <a href=\"/apps/masterpieces/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich, Germany. The museum first displayed it publicly in 1975 after acquiring it from a private collection."
      },
      {
        question: "What does Innocentia depict?",
        answer: "<a href=\"/apps/masterpieces/artist/lovis-corinth\"><strong>Lovis Corinth</strong></a> painted a <strong>semi-nude young woman</strong> with crossed arms and a violet veil. Her melancholic expression and the contradictions between title and subject have sparked debate among art historians."
      },
      {
        question: "What art movement does Innocentia belong to?",
        answer: "Corinth painted this work in 1890 during his <strong>naturalistic period</strong>, before his style shifted toward German Expressionism following a stroke in 1911. The painting shows his early academic training."
      }
    ]
  },
  {
    slug: 'ernest-meissonier-innocents-and-card-sharpers-a-game-of-piquet',
    description: `<p><a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted Innocents and Card Sharpers (A Game of Piquet) in 1861, creating a tense scene of cavalrymen playing cards in a 17th-century setting. The composition draws on Dutch masters like Ter Borch and <a href="/apps/masterpieces/artist/david-teniers-younger"><strong>David Teniers</strong></a>, whose tavern scenes Meissonier clearly admired. Two young men on the right study their cards, seemingly unaware that their opponents are scheming against them.</p>
<p>The painting captures a moment of deception in progress. One soldier keeps his hand on his sword while the others watch the cards with predatory focus. Meissonier contrasts the naïve confidence of the young recruits with the calculating patience of the old soldiers, creating a narrative tension that rewards close looking. The title itself suggests the outcome before it happens.</p>
<p>Meissonier was born in Lyon and studied in Rome and Paris, becoming the leading painter of historical and military <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>genre scenes</strong></a> in France. He was known for the refined detail of his small paintings. Margaret Davies purchased this work in 1910 and later bequeathed it to the <a href="/apps/masterpieces/museum/national-museum-cardiff-cardiff-uk"><strong>National Museum Cardiff</strong></a>, where it remains today. The painting measures just 24.2 x 32.2 cm, typical of his intimate scale.</p>`,
    faqs: [
      {
        question: "Where is Innocents and Card Sharpers displayed?",
        answer: "This painting is held by <a href=\"/apps/masterpieces/museum/national-museum-cardiff-cardiff-uk\"><strong>National Museum Cardiff</strong></a> in Wales. Margaret Davies bequeathed it in 1963 after purchasing it in 1910."
      },
      {
        question: "What size is the painting?",
        answer: "The work measures 24.2 x 32.2 cm (approximately 9.5 x 12.5 inches). <a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Meissonier</strong></a> was known for highly detailed <strong>small-scale paintings</strong>, and this oil on board is typical of his intimate approach."
      },
      {
        question: "What is the subject of Innocents and Card Sharpers?",
        answer: "The painting shows a <strong>card game between cavalrymen</strong> in the era of Louis XIII. Young soldiers on the right play against experienced men who appear to be cheating, creating a scene of impending deception."
      }
    ]
  },
  {
    slug: 'katsushika-hokusai-inside-the-courtyard-of-the-toeizan-temple-at-ueno',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> created this <strong>woodblock print</strong> in 1786, depicting the courtyard of Toeizan Temple at Ueno in Edo (modern-day Tokyo). The print belongs to the Ukiyo-e tradition, the "pictures of the floating world" that captured everyday life and famous places throughout Japan. Hokusai was 26 when he made this work, decades before his iconic Great Wave would make him internationally famous.</p>
<p>Toeizan Temple (Kan'ei-ji) was one of Edo's most important Buddhist temples, serving as the family temple of the Tokugawa shoguns. The grounds at Ueno were known for their cherry blossoms and remained a popular destination for residents of the city. Hokusai's print captures the architecture and atmosphere of this sacred space during a quieter moment.</p>
<p>The print measures 24.1 x 37.5 cm, a typical size for landscape subjects. Hokusai would go on to create thousands of prints and paintings over his nearly 90 years, constantly reinventing his style. This early work shows his developing skill at <strong>perspective</strong> and architectural detail. Today, the print is part of the collection at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> in New York, where it demonstrates Hokusai's range beyond the wave and mountain imagery most associated with his name.</p>`,
    faqs: [
      {
        question: "Where can I see this Hokusai print?",
        answer: "This woodblock print is part of the collection at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York City. The museum acquired it through the Museum Collection Fund."
      },
      {
        question: "What is the Toeizan Temple?",
        answer: "Toeizan Temple, also known as Kan'ei-ji, was an important <strong>Buddhist temple</strong> in Edo (Tokyo) that served as the family temple of the Tokugawa shoguns. The grounds at Ueno were famous for cherry blossoms."
      },
      {
        question: "What style is this print?",
        answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> created this work in the <strong>Ukiyo-e style</strong>, the Japanese woodblock print tradition that depicted scenes of everyday life, landscapes, and famous places."
      },
      {
        question: "What are the dimensions of this print?",
        answer: "The print measures 24.1 x 37.5 cm (approximately 9.5 x 14.75 inches). It's a <strong>woodcut on paper</strong>, created when Hokusai was 26 years old."
      }
    ]
  },
  {
    slug: 'pieter-de-hooch-interior-of-a-dutch-house',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted Interior of a Dutch House around 1680, during the later years of his career in Amsterdam. The work shows his characteristic fascination with the <strong>geometry of domestic spaces</strong>, featuring a carefully arranged interior with tiled floors, rectangular window panes, and doorways that create visual depth. Light enters from multiple sources, illuminating the quiet scene.</p>
<p>De Hooch was a contemporary of Vermeer in the Delft Guild of St. Luke, and the two artists share an interest in domestic subjects and the play of light through windows. After marrying Jannetje van der Burch in 1654, de Hooch fathered seven children and developed his signature style of intimate household scenes. He joined the painters' guild in 1655 and worked in Delft before moving to Amsterdam, where he spent his final decades.</p>
<p>The painting demonstrates de Hooch's skill at creating variety through <strong>composition and perspective</strong>. Squares and rectangles appear throughout, from floor tiles to window frames, establishing unity while subtle differences in scale and lighting add visual interest. His muted <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth-toned palette</strong></a> creates the warm, tranquil atmosphere typical of Dutch Golden Age interiors. The work is held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where is Interior of a Dutch House displayed?",
        answer: "This painting is part of the collection at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, France. The museum holds several works by <a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>de Hooch</strong></a>."
      },
      {
        question: "What period is this painting from?",
        answer: "De Hooch painted this work around 1680, during the <strong>Dutch Golden Age</strong>. He was active in Delft and Amsterdam, working alongside contemporaries like Vermeer."
      },
      {
        question: "What makes de Hooch's interior scenes distinctive?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> was known for his careful use of <strong>geometry and light</strong>. Tiled floors, rectangular windows, and open doorways create depth while natural light brings warmth to domestic settings."
      }
    ]
  },
  {
    slug: 'gustave-caillebotte-interior-of-a-studio',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted Interior of a Studio between 1872 and 1874, capturing the quiet atmosphere of an artist's workspace. The composition shows the studio with diffuse lighting that casts soft shadows, creating a contemplative mood. Caillebotte renders the space with his characteristic attention to architectural detail and the way light moves through interior environments.</p>
<p>This work dates from Caillebotte's early period, before his most famous paintings of Paris streets and balconies. His father had an artist's studio built into the family home, and Caillebotte frequently painted domestic and familial scenes throughout his career. Unlike some Impressionists who favored loose brushwork, Caillebotte often worked in a more <strong>realistic manner</strong>, combining the rich colors of Degas with the optical concerns of Renoir and Pissarro.</p>
<p>Caillebotte was both a painter and a patron of the Impressionists, helping to organize and fund their exhibitions. His personal wealth allowed him to collect works by his colleagues, many of which later entered French national collections. Today, Interior of a Studio remains in a <strong>private collection</strong>. The painting measures 80 x 65 cm, a modest scale that suits its intimate subject of the creative space where artists work and think.</p>`,
    faqs: [
      {
        question: "When did Caillebotte paint Interior of a Studio?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this work between 1872 and 1874, during his early career. His father had built an artist's studio in the family home."
      },
      {
        question: "What style is Interior of a Studio?",
        answer: "The painting belongs to the <strong>Impressionist movement</strong>, though Caillebotte often worked in a more realistic manner than his colleagues. He combined attention to light with careful architectural detail."
      },
      {
        question: "Where is this painting located?",
        answer: "Interior of a Studio is currently in a <strong>private collection</strong>. The painting measures 80 x 65 cm and is executed in oil on canvas."
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-interior-of-a-tavern-with-violin-player',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this <strong>tavern scene</strong> featuring a violin player, one of many works depicting the lively social gatherings of Dutch peasant life. Van Ostade specialized in these subjects throughout his career in Haarlem, creating images of ordinary people that appealed to the urban middle class of his time. A musician plays while patrons gather, drink, and converse in the warm interior.</p>
<p>Taverns served as vital social hubs during the <strong>Dutch Golden Age</strong>, places where people gathered to share stories and enjoy each other's company. Van Ostade captured these establishments with sympathy and charm, neither mocking his peasant subjects nor sentimentalizing them. His approach influenced later artists, including the English painter William Hogarth, whose own tavern scenes drew on van Ostade's example.</p>
<p>Van Ostade studied under Frans Hals and was influenced by the dramatic lighting of Rembrandt. After Rembrandt, he became the most famous Dutch etcher of the 17th century. His paintings often feature warm, golden light filtering through windows onto scenes of people playing cards, drinking, or making music. This work is currently held in a private collection, one of the many intimate <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>genre scenes</strong></a> van Ostade produced during his long career.</p>`,
    faqs: [
      {
        question: "Who was Adriaen van Ostade?",
        answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> (1610-1685) was a Dutch painter from Haarlem who specialized in <strong>peasant genre scenes</strong>. He was one of the most famous Dutch etchers of the 17th century, second only to Rembrandt."
      },
      {
        question: "What does this painting depict?",
        answer: "The painting shows the interior of a <strong>Dutch tavern</strong> with a violin player entertaining patrons. Taverns were important social gathering places during the Dutch Golden Age."
      },
      {
        question: "Where is this painting located?",
        answer: "This work is currently in a <strong>private collection</strong>. Van Ostade created many similar tavern scenes that are now held in museums throughout Europe."
      }
    ]
  },
  {
    slug: 'william-merritt-chase-interior-of-the-baptistry-at-st-mark39s',
    description: `<p><a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted Interior of the Baptistry at St. Mark's in 1878, capturing the ornate space within one of Venice's most famous landmarks. The <strong>Baptistry of St. Mark's Basilica</strong> is known for its golden Byzantine mosaics covering the walls and ceiling, and Chase renders this rich interior with careful attention to the way light plays across the decorated surfaces.</p>
<p>Chase traveled to Europe extensively during his career, and <strong>Venice</strong> was a frequent subject for American painters of his generation. The city's architecture, canals, and unique light attracted artists from around the world. Chase was particularly skilled at capturing interior spaces, from his own cluttered studio to grand ecclesiastical settings like this one.</p>
<p>Born in Indiana in 1849, Chase studied in Munich before establishing himself as one of America's leading painters and teachers. He founded the Chase School of Art, which later became Parsons School of Design. His work spans portraits, still lifes, landscapes, and architectural subjects like this Venetian interior. The painting demonstrates his ability to suggest <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden surfaces</strong></a> and complex decorative detail without losing the overall sense of space. Today, the work is held in a private collection.</p>`,
    faqs: [
      {
        question: "What does this painting depict?",
        answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>William Merritt Chase</strong></a> painted the interior of the <strong>Baptistry at St. Mark's Basilica</strong> in Venice, known for its golden Byzantine mosaics covering the walls and ceiling."
      },
      {
        question: "When was this painting created?",
        answer: "Chase painted this work in <strong>1878</strong> during his travels in Europe. Venice was a popular destination for American painters of his generation."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting is currently in a <strong>private collection</strong>. Chase created over 378 artworks during his career, including many interior and architectural subjects."
      }
    ]
  },
  {
    slug: 'david-teniers-younger-interior-scene-with-a-young-woman-scrubbing-pots-w',
    description: `<p><a href="/apps/masterpieces/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> painted this interior scene depicting a <strong>young woman scrubbing pots</strong> while an old man makes unwanted advances toward her. The composition combines domestic labor with social commentary, a theme common in Flemish genre painting of the 17th century. Teniers captures the woman's focus on her task and the tension created by the man's presence.</p>
<p>Teniers was the leading Flemish genre painter of his day, producing an estimated 2,000 paintings over his career. He developed his style under the influence of Adriaen Brouwer, who pioneered scenes of peasant life, and Peter Paul Rubens, whose fluid brushwork informed Teniers' technique. While early works featured dark, monochrome tavern interiors, his later paintings show a more luminous, silvery atmosphere.</p>
<p>Born in Antwerp in 1610, Teniers registered as an independent master in 1632-33 and eventually became court painter to Archduke Leopold William, regent of the Netherlands. He was also appointed keeper of the archduke's art collection, painting several views of the princely gallery. This <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>domestic scene</strong></a> is currently held in a private collection, representing the kind of everyday subject that made Teniers popular with collectors across Europe.</p>`,
    faqs: [
      {
        question: "Who painted this interior scene?",
        answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> (1610-1690) was a prolific Flemish Baroque painter known for <strong>genre scenes</strong> of peasant and domestic life."
      },
      {
        question: "What is depicted in this painting?",
        answer: "The painting shows a <strong>young woman scrubbing pots</strong> while an elderly man approaches her with apparent romantic intentions, creating a scene of social tension and everyday labor."
      },
      {
        question: "Where is this painting located?",
        answer: "This work is currently in a <strong>private collection</strong>. Teniers produced an estimated 2,000 paintings during his career, many of which are now in major museums."
      }
    ]
  },
  {
    slug: 'david-teniers-younger-interior-with-a-gentleman-playing-a-lute-and-a-lad',
    description: `<p><a href="/apps/masterpieces/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> painted this scene of <strong>domestic music-making</strong>, showing a gentleman playing a lute while a lady sings. Musical subjects were popular throughout the Flemish Baroque period, and Teniers rendered many such scenes of leisure and entertainment among the middle and upper classes. The painting captures a moment of cultivated refinement, contrasting with his better-known peasant tavern scenes.</p>
<p>Teniers moved from Antwerp to Brussels in 1651 to serve as court painter to Archduke Leopold William. This position brought him into contact with aristocratic culture and likely influenced his interest in more elegant subjects. His paintings from this period often feature <strong>well-dressed figures</strong> in richly appointed interiors, demonstrating his range beyond rustic genre scenes.</p>
<p>The composition shows Teniers' skill at rendering different textures, from the wooden lute to fine clothing and interior furnishings. His treatment of light creates a warm, intimate atmosphere suitable for a private musical performance. The work is currently held in a private collection, representing the quieter side of Teniers' output alongside his more boisterous <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>figure paintings</strong></a>.</p>`,
    faqs: [
      {
        question: "What musical instruments appear in this painting?",
        answer: "The gentleman plays a <strong>lute</strong>, a stringed instrument popular in the 17th century. The lady accompanies him by singing, depicting a typical scene of <strong>domestic music-making</strong>."
      },
      {
        question: "Who was David Teniers the Younger?",
        answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> (1610-1690) was the leading Flemish genre painter of his era. He served as court painter to Archduke Leopold William and produced approximately 2,000 paintings."
      },
      {
        question: "Where is this painting displayed?",
        answer: "This painting is in a <strong>private collection</strong>. Teniers' works can be found in major museums including the National Gallery of Art, the Galleria Borghese, and the Louvre."
      }
    ]
  },
  {
    slug: 'pieter-de-hooch-interior-with-a-mother-delousing-her-child',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this intimate domestic scene around 1658-1660, showing a mother carefully <strong>delousing her child's hair</strong>. The work is also known as "A Mother's Duty" and represents the artist's characteristic interest in quiet household activities. A mother and child sit before a box bed (bedstee) while a dog watches from the tiled floor, creating a scene of everyday care and attention.</p>
<p>The painting demonstrates de Hooch's mastery of light and geometry. Sunlight enters the room, illuminating the figures while the receding tiles create depth. De Hooch was a contemporary of Vermeer in Delft, and the two artists shared an interest in domestic subjects and the play of <strong>natural light</strong> through Dutch interiors. This work dates from de Hooch's most productive period in Delft, before his move to Amsterdam.</p>
<p>The painting entered the collection of Adriaan van der Hoop, one of the wealthiest men in the Netherlands and an avid art collector. He bequeathed over 250 paintings to the city of Amsterdam upon his death. Today, the work belongs to the Amsterdam Museum and is on long-term loan to the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, where it remains one of the most beloved examples of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>Dutch Golden Age painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see A Mother's Duty?",
        answer: "The painting is on display at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, on loan from the Amsterdam Museum. It was part of the collection of Dutch banker Adriaan van der Hoop."
      },
      {
        question: "What are the dimensions of this painting?",
        answer: "The work measures 52.5 x 61 cm (approximately 20.5 x 24 inches). It's an <strong>oil on canvas</strong> painting created around 1658-1660 during de Hooch's Delft period."
      },
      {
        question: "Why was delousing depicted in Dutch paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> and other Dutch artists showed <strong>domestic hygiene</strong> as part of everyday life. Such scenes reflected values of cleanliness and maternal care prized in Dutch Golden Age households."
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-interior-with-a-peasant-family',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted Interior with a Peasant Family in 1647, creating an intimate view of <strong>domestic life</strong> among the Dutch working class. The work shows a family gathered in their humble home, engaged in the ordinary activities that defined van Ostade's genre paintings. Warm light fills the space, lending dignity to the simple setting.</p>
<p>Van Ostade spent his entire career in Haarlem, producing paintings for the local market and beyond. His specialty was peasant scenes rendered with sympathy rather than mockery. Unlike some contemporaries who depicted rural people as crude or foolish, van Ostade showed them going about their lives with quiet purpose. He was influenced by Frans Hals and Rembrandt, and his use of light and shadow reflects their example.</p>
<p>The painting is executed in <strong>oil on wood</strong> and measures 43.1 x 36.5 cm, a modest scale typical of Dutch genre painting. Van Ostade's technique allows him to render the textures of rough clothing, worn furniture, and weathered walls with precision. Today, the work is part of the collection at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>, where it represents the tradition of <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>Dutch genre painting</strong></a> at its most human.</p>`,
    faqs: [
      {
        question: "Where is Interior with a Peasant Family displayed?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary, which holds significant works of European art."
      },
      {
        question: "What are the dimensions of this painting?",
        answer: "The work measures 43.1 x 36.5 cm (approximately 17 x 14.4 inches). It's painted in <strong>oil on wood</strong>, a common support for Dutch genre paintings of this period."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> painted in the <strong>Baroque style</strong>, specializing in genre scenes of Dutch peasant life. He was one of the most respected painters of everyday subjects in 17th-century Holland."
      }
    ]
  },
  {
    slug: 'edouard-vuillard-interior-with-mother-and-sister-of-the-artist',
    description: `<p><a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> painted Interior with Mother and Sister of the Artist in 1893, creating a scene where <strong>figures merge with their surroundings</strong>. The wallpaper patterns threaten to engulf everything, blending into the sister's dress in a dizzying effect that challenges traditional boundaries between person and space. The painting represents Vuillard's distinctive approach to domestic subjects.</p>
<p>Vuillard was a key member of the <strong>Nabis</strong>, a group of Post-Impressionist artists who explored emotional states through flattened perspectives and decorative surfaces. They believed art should convey personal feelings rather than merely record appearances. In this painting, the intimate scale and domestic setting allow Vuillard to explore the psychological weight of family relationships and the spaces where they unfold.</p>
<p>The figures represent the artist's own mother and sister Marie, subjects he returned to throughout his career. Textiles play a major role, with the patterns of fabrics adding visual richness and tactile interest. The composition creates tension between decorative surface and emotional depth. Today, the painting is part of the collection at the <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art (MoMA)</strong></a> in New York, where it demonstrates the <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful patterns</strong></a> that defined Vuillard's intimate interiors.</p>`,
    faqs: [
      {
        question: "Where can I see this Vuillard painting?",
        answer: "The painting is in the collection of the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. It measures 46.3 x 56.5 cm and was created in Paris in 1893."
      },
      {
        question: "What art movement does this painting belong to?",
        answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Vuillard</strong></a> was a member of the <strong>Nabis</strong>, a Post-Impressionist group that explored emotion through color and flattened space. The painting shows their interest in decorative surfaces."
      },
      {
        question: "Who are the figures in this painting?",
        answer: "The painting depicts Vuillard's <strong>mother and sister Marie</strong>. Vuillard frequently painted his family members, exploring domestic relationships and the spaces they inhabited."
      }
    ]
  },
  {
    slug: 'paul-cezanne-interior-with-two-women-and-a-child',
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted Interior with Two Women and a Child in 1861, making it the earliest of his works in any Russian collection. The canvas shows the artist's mother and sisters, Marie on the left and the small figure of Rose in the middle, standing by an aquarium. Despite the <strong>everyday subject</strong>, the painting possesses a quality that sets it apart from typical genre work.</p>
<p>Cézanne was just 22 when he created this painting, working in a style influenced by <strong>Romanticism</strong> before developing the Post-Impressionist approach that would later define his legacy. The color structure emphasizes local colors with minimal chromatic transitions, and the dense paint texture gives the composition a static, almost timeless quality. Art historians have noted numerous references to Old Masters in the work.</p>
<p>The painting demonstrates Cézanne's early interest in domestic subjects and family members, though he would later become famous for his landscapes of Mont Sainte-Victoire and his revolutionary still lifes. Today, the work resides at the <a href="/apps/masterpieces/museum/pushkin-museum"><strong>Pushkin Museum</strong></a> in Moscow. It arrived there in 1948 after passing through the collection of Ivan Morozov and the State Museum of New Western Art, representing Cézanne's first steps as a painter.</p>`,
    faqs: [
      {
        question: "Where is Interior with Two Women and a Child displayed?",
        answer: "The painting is part of the permanent collection at the <a href=\"/apps/masterpieces/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow, Russia. It's the earliest Cézanne work in any Russian collection."
      },
      {
        question: "Who are the figures in this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> depicted his mother and two sisters, <strong>Marie and Rose</strong>, standing by an aquarium. The small figure in the middle is the youngest sister, Rose."
      },
      {
        question: "What style is this painting?",
        answer: "Cézanne painted this work in 1861 in the <strong>Romantic style</strong>, before developing his Post-Impressionist approach. The dense paint texture and emphasis on local color show his early technique."
      },
      {
        question: "How did this painting reach Russia?",
        answer: "The painting was collected by <strong>Ivan Morozov</strong>, then passed through the State Museum of New Western Art before arriving at the Pushkin Museum in 1948."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

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
      console.log(`✓ Updated: ${result.title} (${update.slug})`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
