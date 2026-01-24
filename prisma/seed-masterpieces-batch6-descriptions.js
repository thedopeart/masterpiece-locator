const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkDescriptions = [
  // === MICHELANGELO ===
  {
    slug: 'david-michelangelo',
    description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> carved this 17-foot marble giant when he was just 26 years old, transforming a block of stone that two previous sculptors had abandoned. The figure depicts the biblical hero David in the moment before battle with Goliath, his muscles tensed and eyes fixed on his approaching enemy.</p>
<p>Unlike earlier depictions showing David triumphant after victory, <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> captured the psychological tension of confronting an overwhelming foe. The exaggerated hands and intense gaze convey <strong>focused determination</strong>. Originally intended for Florence Cathedral's roofline, the city instead placed it in the main square as a symbol of the republic's defiance against larger powers.</p>
<p>The sculpture now stands in the Galleria dell'Accademia in Florence, protected from the elements since 1873. A replica occupies its original outdoor location in Piazza della Signoria.</p>`,
    faqs: [
      {
        question: "Where can I see Michelangelo's David?",
        answer: "The original stands in the <strong>Galleria dell'Accademia</strong> in Florence, Italy. A full-size replica occupies its original outdoor spot in Piazza della Signoria."
      },
      {
        question: "How tall is the David?",
        answer: "The statue stands <strong>517 cm (17 feet) tall</strong>, not including its pedestal. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> carved it from a single block of Carrara marble."
      },
      {
        question: "How old was Michelangelo when he made David?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> was just <strong>26 years old</strong> when he completed David in 1504. He had already finished the Pietà five years earlier."
      },
      {
        question: "Why are David's hands so large?",
        answer: "The <strong>oversized hands</strong> may have been intentional for viewing from below, or they may emphasize David's role as a man of action. Some see them as symbols of strength."
      }
    ]
  },
  {
    slug: 'pieta-michelangelo',
    description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> sculpted this heartbreaking image of Mary holding the dead Christ when he was only 24 years old. The Virgin appears impossibly young, her face serene despite her grief, while Christ's body drapes across her lap with anatomical perfection. It remains the only work <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> ever signed.</p>
<p>The pyramidal composition draws the eye upward from Christ's lifeless form to Mary's downcast face. <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> polished the marble to an almost luminous finish, particularly on the figures' skin. When critics questioned Mary's youthful appearance, he reportedly said that chaste women retain their youth longer.</p>
<p>The sculpture resides in St. Peter's Basilica in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican</strong></a>, now protected behind glass after a 1972 attack damaged Mary's face and arm.</p>`,
    faqs: [
      {
        question: "Where can I see the Pietà?",
        answer: "The sculpture is in <strong>St. Peter's Basilica</strong> in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican</strong></a>. It's displayed behind protective glass near the entrance."
      },
      {
        question: "Why did Michelangelo sign the Pietà?",
        answer: "When <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> overheard viewers crediting another sculptor, he carved his name across <strong>Mary's sash</strong>. He later regretted this display of pride."
      },
      {
        question: "How old was Michelangelo when he carved the Pietà?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> completed it at age <strong>24</strong> in 1499. It established his reputation as a master sculptor in Rome."
      },
      {
        question: "Why is Mary so young-looking?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> depicted Mary with <strong>eternal youth</strong> to represent her purity. He said chaste women preserve their fresh appearance longer."
      }
    ]
  },

  // === RODIN ===
  {
    slug: 'the-thinker-rodin',
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> originally conceived The Thinker as part of his monumental Gates of Hell, representing Dante contemplating his poem. The muscular figure sits hunched forward, chin resting on his hand, lost in profound thought. The pose became an <strong>icon of human contemplation</strong>.</p>
<p>The powerful physique seems at odds with intellectual activity, yet Rodin believed thinking was physical work. Every muscle strains with mental effort. Cast in bronze multiple times, the figure escaped its original context to become a universal symbol of <strong>philosophy and reflection</strong>.</p>
<p>The most famous cast stands in the garden of the Musée Rodin in Paris, though authorized casts exist in museums worldwide.</p>`,
    faqs: [
      {
        question: "Where can I see The Thinker?",
        answer: "The most famous cast is at the <strong>Musée Rodin</strong> in Paris. Other authorized casts exist at museums worldwide including the Cleveland Museum of Art."
      },
      {
        question: "Who is The Thinker supposed to be?",
        answer: "Originally <strong>Dante</strong> contemplating his Divine Comedy for the Gates of Hell. <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> later presented it as a universal symbol of thought."
      },
      {
        question: "How big is The Thinker?",
        answer: "The monumental version stands <strong>186 cm (73 inches) tall</strong>. <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> created smaller versions as well, the original being 70 cm."
      },
      {
        question: "Why is The Thinker so muscular?",
        answer: "<a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> believed <strong>thinking is physical work</strong>. The tense muscles show the effort of deep contemplation, mind and body united in thought."
      }
    ]
  },
  {
    slug: 'the-kiss-rodin',
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> sculpted this embrace between Paolo and Francesca, adulterous lovers from Dante's Inferno. The two figures merge into one flowing form, their bodies turning toward each other in a moment of <strong>passionate surrender</strong>. Their lips don't quite touch, capturing the instant before the fatal kiss.</p>
<p>Originally part of the Gates of Hell, Rodin removed the group because its sensuality seemed too cheerful for the damned. The smooth, polished marble creates an idealized vision of love that proved enormously popular. Rodin made several versions in different sizes and materials.</p>
<p>The original marble stands at the Musée Rodin in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see The Kiss?",
        answer: "The original marble is at the <strong>Musée Rodin</strong> in Paris. Other versions exist at the Tate in London and elsewhere."
      },
      {
        question: "Who are the lovers in The Kiss?",
        answer: "They're <strong>Paolo and Francesca</strong> from Dante's Inferno, murdered by Francesca's husband when he discovered their affair."
      },
      {
        question: "Is this different from Klimt's The Kiss?",
        answer: "Yes, <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin's</strong></a> is a <strong>marble sculpture</strong> from 1889. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> is a gold-leaf painting from 1908. Both are iconic images of love."
      },
      {
        question: "How big is The Kiss?",
        answer: "The original marble measures 181.5 cm tall (about <strong>6 feet</strong>). <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> created versions in multiple sizes."
      }
    ]
  },
  {
    slug: 'gates-of-hell-rodin',
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> worked on this massive bronze portal for 37 years, never seeing it cast in his lifetime. Inspired by Dante's Inferno, the doors swarm with over 200 tortured figures writhing in damnation. The Thinker sits at the top, surveying the suffering below.</p>
<p>Commissioned as a doorway for a planned museum of decorative arts that was never built, the Gates became a laboratory for Rodin's ideas. Many standalone sculptures, including The Thinker, The Kiss, and The Three Shades, originated here. The chaotic composition captures <strong>human passion and despair</strong> in every contorted form.</p>
<p>Bronze casts exist at the Musée Rodin in Paris, the Rodin Museum in Philadelphia, and several other locations.</p>`,
    faqs: [
      {
        question: "Where can I see The Gates of Hell?",
        answer: "Bronze casts stand at the <strong>Musée Rodin</strong> in Paris, the Rodin Museum in Philadelphia, and other museums. <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> never saw it cast."
      },
      {
        question: "How long did Rodin work on The Gates of Hell?",
        answer: "<a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> worked on it for <strong>37 years</strong> (1880-1917) until his death. It was cast posthumously from his plaster model."
      },
      {
        question: "What famous sculptures came from The Gates of Hell?",
        answer: "<strong>The Thinker</strong>, The Kiss, The Three Shades, and many other <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> sculptures originated as figures in this massive composition."
      },
      {
        question: "How big is The Gates of Hell?",
        answer: "The doors measure <strong>6 meters tall by 4 meters wide</strong> (about 20 × 13 feet). Over 200 figures populate the surface."
      }
    ]
  },
  {
    slug: 'burghers-of-calais',
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> depicted six citizens of Calais who offered their lives to save their city from English siege in 1347. Rather than heroic poses, Rodin showed them haggard and despairing, shuffling toward expected execution. The English king ultimately spared them.</p>
<p>Rodin controversially placed all six figures at ground level rather than on a traditional pedestal, forcing viewers to confront them as <strong>fellow humans</strong>. Each figure shows a different response to impending death: resignation, anguish, defiance. The city of Calais initially rejected the unconventional monument.</p>
<p>Bronze casts stand in Calais, at the Musée Rodin in Paris, and at several other locations worldwide.</p>`,
    faqs: [
      {
        question: "Where can I see The Burghers of Calais?",
        answer: "Casts stand in <strong>Calais, France</strong>, the Musée Rodin in Paris, Westminster in London, and other museums. Multiple authorized casts exist."
      },
      {
        question: "Who were the Burghers of Calais?",
        answer: "Six <strong>leading citizens</strong> who volunteered to die to end a siege in 1347. King Edward III of England ultimately spared them at his wife's request."
      },
      {
        question: "Why are they at ground level?",
        answer: "<a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> wanted viewers to see them as <strong>equals, not heroes on pedestals</strong>. The city of Calais initially rejected this radical placement."
      },
      {
        question: "When did Rodin make this?",
        answer: "<a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> completed the sculpture in <strong>1889</strong>. It took five years to finish after the commission."
      }
    ]
  },

  // === ANCIENT GREEK ===
  {
    slug: 'venus-de-milo',
    description: `<p>This armless masterpiece was discovered by a farmer on the Greek island of Milos in 1820 and immediately recognized as an ancient treasure. The figure represents Aphrodite (Venus to the Romans), goddess of love and beauty. Her missing arms have sparked endless speculation about her original pose.</p>
<p>Carved around 100 BCE during the Hellenistic period, the statue combines idealized beauty with subtle naturalism. The <strong>contrapposto stance</strong> creates an S-curve through the body, while the drapery sliding down her hips adds sensuality. At over six feet tall, she commands attention in the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>'s galleries.</p>
<p>The sculpture has remained at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris since 1821, becoming one of the museum's most visited works.</p>`,
    faqs: [
      {
        question: "Where can I see the Venus de Milo?",
        answer: "The statue is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, France. It's been there since 1821, shortly after its discovery."
      },
      {
        question: "Why doesn't Venus de Milo have arms?",
        answer: "The <strong>arms broke off</strong> at some point in antiquity. Despite many theories, no one knows for certain what she originally held or how her arms were positioned."
      },
      {
        question: "How old is the Venus de Milo?",
        answer: "The statue dates to approximately <strong>100 BCE</strong>, during the Hellenistic period of Greek art. It's over 2,100 years old."
      },
      {
        question: "How tall is the Venus de Milo?",
        answer: "The statue stands <strong>204 cm (6 ft 8 in) tall</strong>. The slightly larger-than-life scale adds to her commanding presence."
      }
    ]
  },
  {
    slug: 'winged-victory-samothrace',
    description: `<p>This dramatic sculpture shows Nike, the Greek goddess of victory, alighting on the prow of a warship. Her wings spread wide as her drapery swirls in an imaginary sea wind. Carved around 190 BCE, the figure commemorated a naval victory, though which battle remains debated.</p>
<p>The <strong>forward-leaning pose</strong> creates extraordinary dynamic energy. Wet drapery clings to her body, revealing the form beneath while conveying motion. Though headless and armless, the sculpture's power is undiminished. Its dramatic staircase placement at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> enhances the sense of a goddess descending from the sky.</p>
<p>The sculpture dominates the Daru staircase at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>, one of the museum's most photographed locations.</p>`,
    faqs: [
      {
        question: "Where can I see the Winged Victory?",
        answer: "The sculpture stands at the top of the <strong>Daru staircase</strong> in the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, Paris. The dramatic placement is part of its impact."
      },
      {
        question: "Who is the Winged Victory?",
        answer: "She's <strong>Nike</strong>, the Greek goddess of victory. She would have commemorated a naval triumph, landing on a ship's prow."
      },
      {
        question: "Why has no head been found?",
        answer: "The <strong>head and arms were never recovered</strong> from the excavation on Samothrace. One hand was found separately and is displayed nearby."
      },
      {
        question: "How old is the Winged Victory?",
        answer: "The sculpture dates to approximately <strong>190 BCE</strong>. It's a masterpiece of Hellenistic Greek art, over 2,200 years old."
      }
    ]
  },
  {
    slug: 'laocoon-and-his-sons',
    description: `<p>This agonized sculpture group shows the Trojan priest Laocoön and his two sons being killed by sea serpents. According to myth, the gods punished Laocoön for warning the Trojans against accepting the Greek wooden horse. The muscular figures strain against the coiling snakes in a pyramid of <strong>desperate struggle</strong>.</p>
<p>Rediscovered in Rome in 1506, the sculpture profoundly influenced Renaissance artists including <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>. The dramatic expressions and contorted poses set a new standard for depicting human suffering. Whether it's an original or Roman copy of a Greek bronze remains debated.</p>
<p>The sculpture is displayed in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a> in Rome.</p>`,
    faqs: [
      {
        question: "Where can I see Laocoön and His Sons?",
        answer: "The sculpture is in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in Rome, in the Museo Pio-Clementino's Octagonal Court."
      },
      {
        question: "Who was Laocoön?",
        answer: "<strong>Laocoön</strong> was a Trojan priest who warned against accepting the wooden horse. The gods sent serpents to kill him and his sons as punishment."
      },
      {
        question: "When was the sculpture discovered?",
        answer: "It was found in a Roman vineyard in <strong>1506</strong>. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> witnessed its excavation and it deeply influenced his work."
      },
      {
        question: "Is it Greek or Roman?",
        answer: "Scholars debate whether it's an <strong>original Hellenistic work</strong> (c. 40 BCE) or a Roman copy of an earlier Greek bronze."
      }
    ]
  },
  {
    slug: 'discobolus',
    description: `<p>The Discobolus (Discus Thrower) captures an athlete at the peak moment before releasing his disc. The original bronze by Myron dates to around 450 BCE, but survives only through Roman marble copies. The figure's body coils with <strong>potential energy</strong>, frozen in an impossible instant.</p>
<p>The pose demonstrates the Greek ideal of combining athletic perfection with artistic beauty. Though the face remains serene (following Classical conventions), the body shows extreme physical effort. Multiple Roman copies exist, with the best-preserved at the Palazzo Massimo in Rome.</p>
<p>Various copies are displayed in museums worldwide including the British Museum and the Palazzo Massimo alle Terme in Rome.</p>`,
    faqs: [
      {
        question: "Where can I see the Discobolus?",
        answer: "Roman copies exist at the <strong>Palazzo Massimo alle Terme</strong> in Rome, the British Museum in London, and other museums. The Greek original is lost."
      },
      {
        question: "Who made the original Discobolus?",
        answer: "The Greek sculptor <strong>Myron</strong> created the bronze original around 450 BCE. Only Roman marble copies survive today."
      },
      {
        question: "Why does the face look calm?",
        answer: "<strong>Classical Greek art</strong> typically showed serene expressions regardless of physical activity. Showing strain on the face was considered undignified."
      },
      {
        question: "How big is the Discobolus?",
        answer: "The copies stand approximately <strong>155 cm (5 ft 1 in) tall</strong>. The original bronze may have been slightly different in size."
      }
    ]
  },

  // === HIROSHIGE ===
  {
    slug: 'sudden-shower-shin-ohashi',
    description: `<p><a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a> captured pedestrians caught in a sudden downpour on a wooden bridge, their figures blurred by diagonal sheets of rain. The print demonstrates his mastery of <strong>atmospheric effects</strong>, with the far shore dissolving in mist while the foreground remains sharp.</p>
<p>Van Gogh was so moved by this image that he painted his own version, fascinated by the bold composition and emotional directness. The print comes from Hiroshige's "One Hundred Famous Views of Edo" series, considered his masterwork. The contrast between the dark sky and the bridge's warm wood creates dramatic tension.</p>
<p>Impressions exist in museums worldwide including the Brooklyn Museum and the Hiroshige Museum in Japan.</p>`,
    faqs: [
      {
        question: "Where can I see this print?",
        answer: "Impressions exist at the <strong>Brooklyn Museum</strong>, the Met, and other collections. As a woodblock print, multiple original impressions were made."
      },
      {
        question: "Did Van Gogh copy this print?",
        answer: "Yes, <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted a close copy in 1887, adding a <a href=\"https://luxurywallart.com/collections/orange-art\" target=\"_blank\" rel=\"noopener\"><strong>colorful border</strong></a> with Japanese characters."
      },
      {
        question: "What series is this from?",
        answer: "It's from \"<strong>One Hundred Famous Views of Edo</strong>\" (1856-58), <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige's</strong></a> late masterpiece depicting Tokyo."
      },
      {
        question: "How did Hiroshige create the rain effect?",
        answer: "<a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> carved fine parallel lines into the woodblock, then printed them in <strong>gradated ink</strong> to suggest sheets of rain."
      }
    ]
  },
  {
    slug: 'plum-park-kameido',
    description: `<p><a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a> created this striking composition with a massive plum branch dominating the foreground while tiny figures stroll in the garden beyond. The bold cropping was revolutionary, cutting the tree dramatically at the frame's edge. <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>Red</strong></a> plum blossoms scatter against the pale sky.</p>
<p>Van Gogh also copied this print, attracted by its daring design and vivid color. The flattened perspective and decorative quality influenced Western artists seeking alternatives to Renaissance illusionism. The print captures the Japanese love of <strong>seasonal beauty</strong> and fleeting natural moments.</p>
<p>Part of the "One Hundred Famous Views of Edo" series, impressions exist in multiple museum collections.</p>`,
    faqs: [
      {
        question: "Did Van Gogh copy this print too?",
        answer: "Yes, <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted a copy in 1887. He admired <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige's</strong></a> bold compositions and collected Japanese prints."
      },
      {
        question: "Why is the branch cut off at the edge?",
        answer: "This <strong>bold cropping</strong> was innovative in Japanese prints and heavily influenced Impressionist and Post-Impressionist composition in the West."
      },
      {
        question: "What do plum blossoms symbolize?",
        answer: "In Japan, <strong>plum blossoms</strong> represent the end of winter and the coming of spring. They symbolize perseverance and hope."
      },
      {
        question: "When did Hiroshige make this?",
        answer: "<a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> created this print in <strong>1857</strong>, as part of his final great series on Edo (Tokyo)."
      }
    ]
  },
  {
    slug: 'night-snow-kambara',
    description: `<p><a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a> depicted travelers trudging through heavy snow in a mountain village, their dark figures silhouetted against the <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>white landscape</strong></a>. Snowflakes fall thickly against the dark sky, creating a scene of profound <strong>quiet and isolation</strong>.</p>
<p>The print comes from "Fifty-three Stations of the Tōkaidō," Hiroshige's most famous series documenting the highway between Edo and Kyoto. Though Kambara rarely receives heavy snow in reality, Hiroshige created an idealized vision of winter travel. The atmospheric mood influenced countless later artists.</p>
<p>This is one of the most beloved prints in Japanese art history, with impressions in major collections worldwide.</p>`,
    faqs: [
      {
        question: "Is this scene realistic?",
        answer: "Not entirely. <strong>Kambara</strong> is in a warm region that rarely sees heavy snow. <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> created an idealized, atmospheric scene."
      },
      {
        question: "What series is this from?",
        answer: "\"<strong>Fifty-three Stations of the Tōkaidō</strong>\" (1833-34), documenting stops on Japan's main highway. It made <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> famous."
      },
      {
        question: "How did Hiroshige print falling snow?",
        answer: "The <strong>white snowflakes</strong> were created by leaving paper unprinted against the dark sky, a technique requiring precise carving and printing."
      },
      {
        question: "Where can I see this print?",
        answer: "Impressions exist at the <strong>Met</strong>, the British Museum, and many other collections. Multiple original impressions were printed."
      }
    ]
  },
  {
    slug: 'sea-at-satta-suruga',
    description: `<p><a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a> created this dramatic view of crashing waves and Mount Fuji from a clifftop path. The composition deliberately echoes <a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Hokusai's</strong></a> Great Wave, with the <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue sea</strong></a> dominating the foreground while Fuji rises in the distance.</p>
<p>The vertiginous viewpoint places the viewer on the narrow clifftop path, looking down at the churning surf. Pine trees cling to the rocks, adding to the sense of precarious beauty. The print showcases Hiroshige's ability to convey the <strong>power of nature</strong> while maintaining decorative elegance.</p>
<p>Part of the "Thirty-six Views of Mount Fuji" series, this late work demonstrates Hiroshige's continued innovation.</p>`,
    faqs: [
      {
        question: "How does this compare to Hokusai's Great Wave?",
        answer: "<a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> made this print in 1858, decades after <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai's</strong></a> famous wave. The composition pays homage while offering a different perspective."
      },
      {
        question: "What series is this from?",
        answer: "\"<strong>Thirty-six Views of Mount Fuji</strong>\" (1858), <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige's</strong></a> own take on the subject <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> had made famous."
      },
      {
        question: "Where is the Satta Pass?",
        answer: "The <strong>Satta Pass</strong> is on the coast of Suruga Bay in Shizuoka Prefecture, Japan. It offers dramatic views of the sea and Mount Fuji."
      },
      {
        question: "When did Hiroshige make this?",
        answer: "<a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a> created this print in <strong>1858</strong>, the year of his death. It's among his final masterworks."
      }
    ]
  },

  // === MORE HOKUSAI ===
  {
    slug: 'red-fuji-hokusai',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> captured Mount Fuji bathed in early morning <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>reddish light</strong></a>, a rare phenomenon visible only on certain summer and autumn days. The mountain fills most of the composition, its slopes rendered in warm colors against a pale <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue sky</strong></a> with delicate clouds.</p>
<p>Along with The Great Wave, this is the most recognizable print from the "Thirty-six Views of Mount Fuji" series. The simplified composition and bold color demonstrate Hokusai's ability to capture a fleeting moment of <strong>natural beauty</strong>. A line of dark trees at the base emphasizes the mountain's massive scale.</p>
<p>Impressions exist in major print collections worldwide.</p>`,
    faqs: [
      {
        question: "Why is Mount Fuji red?",
        answer: "Mount Fuji appears <strong>reddish</strong> during certain summer and autumn mornings when sunlight hits at a low angle. It's a rare and treasured sight in Japan."
      },
      {
        question: "What series is this from?",
        answer: "\"<strong>Thirty-six Views of Mount Fuji</strong>\" (1830-32), <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai's</strong></a> most famous series. The Great Wave is from the same set."
      },
      {
        question: "How old was Hokusai when he made this?",
        answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> was about <strong>70 years old</strong> when he created this series. He considered his best work came after age 60."
      },
      {
        question: "Is Red Fuji as famous as The Great Wave?",
        answer: "In Japan, <strong>Red Fuji</strong> is equally beloved. Internationally, The Great Wave is more recognizable, but both are icons of Japanese art."
      }
    ]
  },
  {
    slug: 'thunderstorm-beneath-summit',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> depicted Mount Fuji's snow-capped peak rising serenely above a violent thunderstorm. Lightning flashes in the <a href="https://luxurywallart.com/collections/black-and-gold" target="_blank" rel="noopener"><strong>dark clouds</strong></a> gathered around the mountain's base, while the summit remains bathed in calm sunlight. The contrast captures Fuji's spiritual quality as a sacred mountain.</p>
<p>This print from the "Thirty-six Views" series shows Hokusai's range, moving from the delicate Red Fuji to this dramatic scene of <strong>natural power</strong>. The composition divides sharply between the turbulent lower zone and the tranquil peak above, suggesting the mountain's eternal presence above earthly storms.</p>
<p>Impressions are held in major print collections worldwide.</p>`,
    faqs: [
      {
        question: "What's happening in this print?",
        answer: "A <strong>thunderstorm rages</strong> around Mount Fuji's base while the sacred peak remains calm above. Lightning strikes in the dark clouds below the summit."
      },
      {
        question: "What does the contrast symbolize?",
        answer: "Mount Fuji's <strong>spiritual transcendence</strong> above worldly turmoil. The sacred mountain remains serene regardless of storms below."
      },
      {
        question: "Is this from the same series as The Great Wave?",
        answer: "Yes, both are from <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai's</strong></a> \"<strong>Thirty-six Views of Mount Fuji</strong>\" series (1830-32)."
      },
      {
        question: "How many prints are in the Thirty-six Views?",
        answer: "Despite the title, there are <strong>46 prints</strong> total. <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> added 10 more due to the series' popularity."
      }
    ]
  },
];

async function main() {
  console.log('=== Updating Masterpieces Batch 6 with Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const artwork of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: artwork.slug }
    });

    if (!existing) {
      console.log(`Skipped (not found): ${artwork.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${existing.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
