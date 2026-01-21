const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'el-greco-dormition-of-the-virgin',
    description: `<p><a href="/artist/el-greco"><strong>El Greco</strong></a> painted this early depiction of the Virgin Mary's death, surrounded by the apostles. The <strong>Byzantine influence</strong> is evident in the composition and gold tones, reflecting El Greco's training in Crete before his move to Spain.</p>
<p>This work shows the artist before he developed his famous elongated figures and dramatic lighting. The <strong>traditional iconography</strong> follows Orthodox Christian conventions. It hangs at the <a href="/museum/holy-cathedral-of-the-dormition-of-the-virgin-ermo"><strong>Holy Cathedral of the Dormition</strong></a> in Ermoupoli, Greece.</p>`,
    faqs: [
      { question: "What does Dormition mean?", answer: "Dormition refers to the <strong>death or 'falling asleep'</strong> of the Virgin Mary, a significant event in Christian tradition." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/holy-cathedral-of-the-dormition-of-the-virgin-ermo\"><strong>Holy Cathedral of the Dormition</strong></a> in Ermoupoli, Greece holds this early <a href=\"/artist/el-greco\"><strong>El Greco</strong></a>." }
    ]
  },
  {
    slug: 'hans-holbein-younger-dorothea-kannengiesser',
    description: `<p><a href="/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> painted this portrait of Dorothea Kannengiesser, wife of a Basel goldsmith. The subject's <strong>direct gaze and fine attire</strong> reflect her status as a prosperous merchant's wife. Holbein's precise technique captures every detail of fabric and jewelry.</p>
<p>The German Renaissance master excelled at <strong>psychological portraiture</strong>. This work demonstrates his ability to convey character through careful observation. It hangs at the <a href="/museum/kunstmuseum-basel-basel-switzerland"><strong>Kunstmuseum Basel</strong></a> in Switzerland.</p>`,
    faqs: [
      { question: "Who was Dorothea Kannengiesser?", answer: "The wife of a <strong>Basel goldsmith</strong>, painted by <a href=\"/artist/hans-holbein-younger\"><strong>Holbein</strong></a> during his time in Switzerland." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/kunstmuseum-basel-basel-switzerland\"><strong>Kunstmuseum Basel</strong></a> displays this Renaissance portrait." }
    ]
  },
  {
    slug: 'giorgione-double-portrait',
    description: `<p><a href="/artist/giorgione"><strong>Giorgione</strong></a> painted this enigmatic double portrait showing two figures in close proximity. The <strong>intimate composition</strong> and soft sfumato technique create an atmosphere of mystery. Few paintings by this Venetian master survive, making each one precious.</p>
<p>The identities of the sitters remain unknown, adding to the work's <strong>allure and speculation</strong>. Giorgione died young but influenced Titian and Venetian painting profoundly. This work is held at <a href="/museum/palazzo-venezia-rome-italy"><strong>Palazzo Venezia</strong></a> in Rome.</p>`,
    faqs: [
      { question: "Who painted this Double Portrait?", answer: "<a href=\"/artist/giorgione\"><strong>Giorgione</strong></a>, a Venetian Renaissance master known for <strong>atmospheric, mysterious works</strong>." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/palazzo-venezia-rome-italy\"><strong>Palazzo Venezia</strong></a> in Rome holds this rare <strong>Giorgione portrait</strong>." }
    ]
  },
  {
    slug: 'lucas-cranach-elder-dr-johannes-cuspinian',
    description: `<p><a href="/artist/lucas-cranach-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Dr. Johannes Cuspinian, a humanist scholar and poet. The sitter appears against a <strong>detailed landscape background</strong> with symbolic elements. Cranach's Northern Renaissance style combines precise observation with allegory.</p>
<p>Cuspinian was a prominent intellectual in Vienna's court circles. The portrait captures his <strong>scholarly dignity</strong>. This work hangs at the <a href="/museum/oskar-reinhart-foundation-winterthur-switzerland"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland.</p>`,
    faqs: [
      { question: "Who was Johannes Cuspinian?", answer: "A <strong>humanist scholar and poet</strong> at the Viennese court, portrayed by <a href=\"/artist/lucas-cranach-elder\"><strong>Cranach</strong></a>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/oskar-reinhart-foundation-winterthur-switzerland\"><strong>Oskar Reinhart Foundation</strong></a> in Switzerland displays this work." }
    ]
  },
  {
    slug: 'gustav-klimt-draft-of-a-theater-curtain',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this draft design for a theater curtain early in his career. The <strong>decorative composition</strong> shows his emerging interest in ornamental patterns that would later define his famous style.</p>
<p>Klimt worked on several theater commissions before developing his golden period works. This draft was once at the Isabella Stewart Gardner Museum in Boston until its <strong>theft in 1990</strong>. Its whereabouts remain unknown.</p>`,
    faqs: [
      { question: "Where is this artwork now?", answer: "This work was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum and has never been recovered." },
      { question: "Who created this design?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> made this early <strong>theater curtain draft</strong>." }
    ]
  },
  {
    slug: 'leonardo-da-vinci-drapery-for-a-seated-figure',
    description: `<p><a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this study of drapery for a seated figure with extraordinary attention to light and shadow. The <strong>fabric folds</strong> are rendered with scientific precision, showing how cloth behaves over a form. Such studies prepared Leonardo for his painted works.</p>
<p>These drapery studies were training exercises in Verrocchio's workshop. Leonardo's <strong>analytical approach</strong> transformed a simple exercise into art. This work is held at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Why did Leonardo study drapery?", answer: "Workshop training in <strong>rendering fabric</strong> helped artists paint convincing figures. <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> elevated these exercises to high art." },
      { question: "Where is this drawing?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris holds this <strong>Renaissance drapery study</strong>." }
    ]
  },
  {
    slug: 'rembrandt-drawing-of-the-last-supper',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this drawing interpreting the Last Supper. The <strong>loose, expressive lines</strong> capture the dramatic moment when Christ reveals his betrayer. Rembrandt's drawings often explored religious themes with emotional intensity.</p>
<p>The artist's rapid pen work suggests spontaneous composition while still conveying <strong>psychological depth</strong>. This drawing is held at the <a href="/museum/smithsonians-national-portrait-gallery"><strong>Smithsonian's National Portrait Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Who drew this Last Supper?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this <strong>expressive interpretation</strong> of the biblical scene." },
      { question: "Where is this drawing?", answer: "The <a href=\"/museum/smithsonians-national-portrait-gallery\"><strong>Smithsonian's National Portrait Gallery</strong></a> holds this work." }
    ]
  },
  {
    slug: 'rogier-van-der-weyden-dream-of-pope-sergius',
    description: `<p><a href="/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> painted this scene of Pope Sergius receiving a divine vision. The <strong>detailed interior</strong> and rich fabrics showcase Early Netherlandish painting techniques. Rogier was a master of religious narrative.</p>
<p>The painting depicts a legend from the life of Saint Hubert. Rogier's <strong>precise brushwork</strong> captures textures of cloth and architecture. This work hangs at the <a href="/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles.</p>`,
    faqs: [
      { question: "What story does this show?", answer: "A vision received by <strong>Pope Sergius</strong> related to the legend of Saint Hubert, painted by <a href=\"/artist/rogier-van-der-weyden\"><strong>Rogier</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/j-paul-getty-museum-los-angeles-ca-us\"><strong>J. Paul Getty Museum</strong></a> in Los Angeles displays this work." }
    ]
  },
  {
    slug: 'giotto-dream-of-st-gregory',
    description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this fresco showing Saint Gregory receiving a divine dream. The scene unfolds with <strong>clarity and drama</strong>, typical of Giotto's revolutionary narrative approach. Figures occupy believable space with weight and emotion.</p>
<p>This work forms part of the Francis cycle at Assisi. Giotto's innovations in <strong>spatial depth and human expression</strong> transformed Italian art. It remains at the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      { question: "Where is this fresco?", answer: "The <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy displays this <a href=\"/artist/giotto\"><strong>Giotto</strong></a> fresco." },
      { question: "Why is Giotto important?", answer: "He <strong>revolutionized Italian painting</strong> with naturalistic figures and spatial depth, moving away from flat Byzantine style." }
    ]
  },
  {
    slug: 'vittore-carpaccio-dream-of-stursula',
    description: `<p><a href="/artist/vittore-carpaccio"><strong>Vittore Carpaccio</strong></a> painted this scene of Saint Ursula sleeping as an angel visits with news of her martyrdom. The <strong>detailed bedroom interior</strong> reveals domestic objects and light streaming through windows. Carpaccio was a master of Venetian narrative painting.</p>
<p>This canvas belongs to the Saint Ursula cycle, one of Carpaccio's major achievements. The <strong>serene atmosphere</strong> contrasts with the prophetic message. The work hangs at the <a href="/museum/galleria-dell39accademia-venice-italy"><strong>Galleria dell'Accademia</strong></a> in Venice.</p>`,
    faqs: [
      { question: "What is happening in this painting?", answer: "An <strong>angel visits Saint Ursula</strong> in her sleep to announce her coming martyrdom." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/galleria-dell39accademia-venice-italy\"><strong>Galleria dell'Accademia</strong></a> in Venice holds this <a href=\"/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a> masterwork." }
    ]
  },
  {
    slug: 'giotto-dream-of-the-palace',
    description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this scene showing Saint Francis receiving a vision of a palace filled with arms and banners. The <strong>architectural setting</strong> demonstrates Giotto's pioneering approach to depicting three-dimensional space on a flat surface.</p>
<p>This fresco belongs to the Legend of Saint Francis cycle. The dream foreshadows Francis's <strong>spiritual knighthood</strong> in Christ's service. It remains at the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      { question: "What does this dream represent?", answer: "Saint Francis sees a <strong>palace full of weapons</strong>, foreshadowing his calling to spiritual rather than military service." },
      { question: "Where is this fresco?", answer: "The <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi displays this <a href=\"/artist/giotto\"><strong>Giotto</strong></a> scene." }
    ]
  },
  {
    slug: 'otto-mueller-drei-akte-unter-einem-baum',
    description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted three nudes beneath a tree in this work whose German title means "Three Nudes Under a Tree." The <strong>angular figures</strong> blend with the natural setting in Mueller's characteristic style. He sought harmony between humans and nature.</p>
<p>As a member of Die Brücke, Mueller developed a <strong>distinctive approach</strong> to the nude in landscape. His muted colors and simplified forms create a timeless atmosphere. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Drei Akte Unter Einem Baum?", answer: "<a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a>, a German Expressionist known for <strong>nudes in nature</strong>." },
      { question: "What does the title mean?", answer: "The German title translates to <strong>'Three Nudes Under a Tree'</strong>." }
    ]
  },
  {
    slug: 'otto-mueller-drei-badende-im-teich',
    description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted three bathers in a pond in this work. The <strong>elongated figures</strong> wade through water, their forms simplified into essential shapes. Mueller's palette of earth tones creates a sense of primal connection to nature.</p>
<p>The German Expressionist sought to capture <strong>humanity's unity with the natural world</strong>. His bathers exist outside modern time and space. This painting is held at the <a href="/museum/museum-ostwall-mo-dortmund-germany"><strong>Museum Ostwall</strong></a> in Dortmund.</p>`,
    faqs: [
      { question: "What style is this painting?", answer: "<strong>German Expressionism</strong>, specifically the Die Brücke style that <a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a> practiced." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museum-ostwall-mo-dortmund-germany\"><strong>Museum Ostwall</strong></a> in Dortmund, Germany holds this work." }
    ]
  },
  {
    slug: 'otto-mueller-drei-badende-im-wasser',
    description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> depicted three bathers in water with his signature angular style. The <strong>figures emerge from the water</strong> like natural forms, their bodies reduced to essential contours. Mueller's vision emphasized primal innocence.</p>
<p>The artist worked with distemper to achieve his characteristic <strong>matte, earthy tones</strong>. His bather scenes became icons of German Expressionism. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Drei Badende Im Wasser?", answer: "<a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a>, celebrated for his <strong>bathers in natural settings</strong>." },
      { question: "What technique did Mueller use?", answer: "He often used <strong>distemper</strong>, a technique giving his works their distinctive matte, chalky appearance." }
    ]
  },
  {
    slug: 'gerard-ter-borch-drink',
    description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this scene of drinking with his characteristic refinement. The <strong>elegant figures</strong> and shimmering fabrics display his mastery of texture. Ter Borch was among the finest Dutch Golden Age painters of intimate scenes.</p>
<p>His ability to render <strong>satin and silk</strong> was legendary among contemporaries. The quiet domestic moment carries subtle narrative. This work hangs at the <a href="/museum/st228del-frankfurt-am-main-germany"><strong>Städel</strong></a> in Frankfurt.</p>`,
    faqs: [
      { question: "Who painted Drink?", answer: "<a href=\"/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a>, a <strong>Dutch Golden Age</strong> master of refined interior scenes." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/st228del-frankfurt-am-main-germany\"><strong>Städel</strong></a> in Frankfurt, Germany displays this work." }
    ]
  },
  {
    slug: 'adriaen-brouwer-drinkers-in-the-yard',
    description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captured peasants drinking in an outdoor setting. The <strong>rough characters</strong> enjoy their ale with earthy gusto. Brouwer specialized in such tavern and peasant scenes, observing low life with sharp humor.</p>
<p>His loose brushwork and <strong>psychological insight</strong> influenced Rubens and Rembrandt. This work hangs at the <a href="/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels.</p>`,
    faqs: [
      { question: "Who painted Drinkers in the Yard?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>, a Flemish painter of <strong>peasant and tavern scenes</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels holds this work." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-drinking-peasant-in-an-inn',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted a peasant drinking at an inn in this genre scene. The figure sits amid the <strong>dimly lit interior</strong>, lost in simple pleasure. Van Ostade was a master of Dutch peasant subjects.</p>
<p>His warm palette and <strong>sympathetic eye</strong> brought dignity to humble subjects. Such scenes were popular with Dutch collectors. This work showcases his skill with <strong>light and atmosphere</strong>.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>, a Dutch artist known for <strong>peasant genre paintings</strong>." },
      { question: "What style is this?", answer: "<strong>Dutch Golden Age genre painting</strong>, depicting everyday life of common people." }
    ]
  },
  {
    slug: 'van-gogh-driveway',
    description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this view of a driveway during his Dutch period. The <strong>muted colors and realistic approach</strong> characterize his early work before he developed his famous vibrant style in France.</p>
<p>This painting was once at the Isabella Stewart Gardner Museum in Boston until its <strong>theft in 1990</strong>. It disappeared alongside works by Vermeer and Rembrandt. Its whereabouts remain unknown.</p>`,
    faqs: [
      { question: "Where is this painting now?", answer: "This work was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum and remains missing." },
      { question: "When did Van Gogh paint this?", answer: "During his <strong>Dutch period</strong>, before moving to France where <a href=\"/artist/van-gogh\"><strong>Van Gogh</strong></a> developed his colorful style." }
    ]
  },
  {
    slug: 'anthony-van-dyck-drunken-silenus-supported-by-two-bacchantes',
    description: `<p><a href="/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted the mythological scene of drunken Silenus held up by two bacchantes. The <strong>fleshy figure</strong> of Dionysus's companion sags between his supporters. Van Dyck's Baroque energy brings the Bacchic procession to life.</p>
<p>The artist learned from Rubens how to paint such <strong>sensuous mythological subjects</strong>. This work hangs at the <a href="/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels.</p>`,
    faqs: [
      { question: "Who is Silenus?", answer: "The <strong>companion and tutor of Dionysus</strong>, often depicted drunk and merry in classical mythology." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/royal-museums-of-fine-arts-of-belgium-brussels-bel\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> holds this <a href=\"/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>." }
    ]
  },
  {
    slug: 'david-teniers-younger-dulle-griet-mad-meg',
    description: `<p><a href="/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> painted this version of Mad Meg, the folkloric figure who raids the mouth of Hell. The <strong>chaotic scene</strong> follows the tradition established by Pieter Bruegel the Elder. Teniers added his own interpretation to this popular subject.</p>
<p>Mad Meg symbolizes <strong>female aggression and chaos</strong> in Flemish folklore. Teniers was known for copying and reinterpreting earlier masters. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who is Dulle Griet?", answer: "<strong>Mad Meg</strong>, a Flemish folklore figure who leads an army of women to pillage Hell itself." },
      { question: "Who painted this version?", answer: "<a href=\"/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a>, working in the tradition of <strong>Pieter Bruegel</strong>." }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-dun-a-gordon-setter-belonging-to-comte-alphonse-de',
    description: `<p><a href="/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this portrait of Dun, a Gordon Setter belonging to his father. The <strong>alert hunting dog</strong> is rendered with affection and skill. Before his Parisian career, Lautrec often painted subjects from his aristocratic family life.</p>
<p>This early work shows his developing <strong>observational skills</strong> and love of animals. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who owned this dog?", answer: "<strong>Comte Alphonse de Toulouse-Lautrec</strong>, the artist's father, owned this Gordon Setter named Dun." },
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> painted his family's dog in his <strong>early years</strong>." }
    ]
  },
  {
    slug: 'adriaen-brouwer-dune-landscape-by-moonlight',
    description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this nocturnal dune landscape bathed in moonlight. The <strong>atmospheric scene</strong> shows his range beyond tavern subjects. Sandy dunes under a night sky create a mood of quiet solitude.</p>
<p>Brouwer influenced both Flemish and Dutch painting with his <strong>free brushwork</strong>. This landscape hangs at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who painted this moonlit scene?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>, better known for tavern scenes but also a skilled <strong>landscape painter</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg holds this atmospheric work." }
    ]
  },
  {
    slug: 'jacob-van-ruisdael-dune-landscape-near-haarlem',
    description: `<p><a href="/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> painted this view of dunes near his hometown of Haarlem. The <strong>rolling sandy hills</strong> stretch beneath dramatic clouds. Ruisdael transformed ordinary Dutch scenery into poetic compositions.</p>
<p>His dune landscapes capture the <strong>flat land and big skies</strong> that define the Netherlands. This work hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where are these dunes?", answer: "Near <strong>Haarlem</strong> in the Netherlands, <a href=\"/artist/jacob-van-ruisdael\"><strong>Ruisdael's</strong></a> hometown and frequent subject." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris displays this Dutch landscape." }
    ]
  },
  {
    slug: 'mary-cassatt-during-carnival',
    description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> captured a carnival moment in this work, likely showing figures in festive attire. The <strong>social scene</strong> reflects her interest in contemporary life and public gatherings. Cassatt was the only American in the core Impressionist group.</p>
<p>Her subjects often featured <strong>women in modern settings</strong>. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted During Carnival?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a>, the American <strong>Impressionist painter</strong> based in Paris." },
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'pierre-bonnard-dusk-or-a-round-of-croquet',
    description: `<p><a href="/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this twilight scene of figures playing croquet. The <strong>soft evening light</strong> dissolves forms into patterns of color. Bonnard's intimate approach transformed ordinary leisure into poetic visions.</p>
<p>The Nabis painter was known for <strong>domestic and garden scenes</strong> suffused with memory and sensation. This work hangs at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted this garden scene?", answer: "<a href=\"/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a>, a Nabis and Post-Impressionist known for <strong>intimate domestic scenes</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris displays this dusk scene." }
    ]
  },
  {
    slug: 'dust-motes-dancing-sunbeams',
    description: `<p><a href="/artist/vilhelm-hammershoi"><strong>Vilhelm Hammershøi</strong></a> painted this 1900 interior showing dust motes dancing in sunbeams. The <strong>quiet room</strong> is filled with soft light, typical of his contemplative Copenhagen interiors. Hammershøi found poetry in empty spaces and silence.</p>
<p>The painting measures 70 × 59 cm in <strong>oil on canvas</strong>. Few painters have captured stillness so profoundly. This work hangs at the <a href="/museum/ny-carlsberg-glyptotek"><strong>Ny Carlsberg Glyptotek</strong></a> in Copenhagen.</p>`,
    faqs: [
      { question: "Who painted this interior?", answer: "<a href=\"/artist/vilhelm-hammershoi\"><strong>Vilhelm Hammershøi</strong></a>, the Danish painter of <strong>silent, empty rooms</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/ny-carlsberg-glyptotek\"><strong>Ny Carlsberg Glyptotek</strong></a> in Copenhagen displays this 1900 work." },
      { question: "How large is this painting?", answer: "The canvas measures <strong>70 × 59 cm</strong> (27.5 × 23 inches)." }
    ]
  },
  {
    slug: 'konstantin-korovin-early-spring',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> captured the season's first warmth in this Russian landscape. The <strong>thawing snow and bare trees</strong> herald spring's arrival. Korovin was Russia's leading Impressionist, bringing French techniques to Russian subjects.</p>
<p>His <strong>vibrant brushwork and color</strong> influenced generations of Russian painters. This work hangs at the <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Who painted Early Spring?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Konstantin Korovin</strong></a>, Russia's foremost <strong>Impressionist painter</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow displays this landscape." }
    ]
  },
  {
    slug: 'john-constable-east-bergholt-rectory',
    description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> painted this view of East Bergholt Rectory in his native Suffolk. The <strong>familiar landscape</strong> of his childhood appears with fresh observation. Constable's devotion to his local scenery became legendary in English art.</p>
<p>He once wrote that the Suffolk countryside made him a painter. This <strong>intimate study</strong> hangs at the <a href="/museum/philadelphia-museum-of-art-philadelphia-pa-us"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is East Bergholt?", answer: "A village in <strong>Suffolk, England</strong>, where <a href=\"/artist/john-constable\"><strong>Constable</strong></a> grew up and often painted." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/philadelphia-museum-of-art-philadelphia-pa-us\"><strong>Philadelphia Museum of Art</strong></a> holds this English landscape." }
    ]
  },
  {
    slug: 'maurice-denis-easter-morning-or-easter-mystery',
    description: `<p><a href="/artist/maurice-denis"><strong>Maurice Denis</strong></a> painted this religious scene capturing the mystery of Easter morning. The <strong>flattened forms and symbolic colors</strong> reflect his Nabis style. Denis combined Catholic devotion with modern artistic approaches.</p>
<p>He famously stated that a painting is essentially a flat surface covered with colors. This work applies that <strong>decorative philosophy</strong> to sacred subject matter. It remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Easter Morning?", answer: "<a href=\"/artist/maurice-denis\"><strong>Maurice Denis</strong></a>, a Nabis painter known for <strong>religious and decorative works</strong>." },
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'eatons-neck-long-island',
    description: `<p><a href="/artist/john-frederick-kensett"><strong>John Frederick Kensett</strong></a> painted this serene 1872 view of Eaton's Neck on Long Island. The <strong>calm waters and hazy atmosphere</strong> exemplify American Luminism. Kensett found poetry in quiet coastal scenes.</p>
<p>The painting measures 91.4 × 152.7 cm in <strong>oil on canvas</strong>. Light and silence dominate the composition. This work hangs at <a href="/museum/met"><strong>The Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where is Eaton's Neck?", answer: "A peninsula on <strong>Long Island, New York</strong>, painted by <a href=\"/artist/john-frederick-kensett\"><strong>Kensett</strong></a> in 1872." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> displays this <strong>Luminist landscape</strong>." },
      { question: "How large is this painting?", answer: "The canvas measures <strong>91.4 × 152.7 cm</strong> (36 × 60 inches)." }
    ]
  },
  {
    slug: 'john-frederick-kensett-eaton39s-neck-long-island',
    description: `<p><a href="/artist/john-frederick-kensett"><strong>John Frederick Kensett</strong></a> captured the gentle light at Eaton's Neck on Long Island. The <strong>peaceful coastal view</strong> shows water meeting shore under a luminous sky. Kensett was a leader of the American Luminist movement.</p>
<p>His quiet coastal scenes emphasize <strong>atmosphere and tranquility</strong>. This work hangs at the <a href="/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What is Luminism?", answer: "An American <strong>landscape movement</strong> emphasizing light, atmosphere, and stillness, practiced by <a href=\"/artist/john-frederick-kensett\"><strong>Kensett</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/metropolitan-museum-of-art-met-new-york-city-ny-us\"><strong>Metropolitan Museum of Art</strong></a> in New York holds this work." }
    ]
  },
  {
    slug: 'dante-gabriel-rossetti-ecce-ancilla-domini-study',
    description: `<p><a href="/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> made this study for his painting Ecce Ancilla Domini (The Annunciation). The <strong>delicate drawing</strong> shows his preparation for the finished work. Rossetti was a founder of the Pre-Raphaelite Brotherhood.</p>
<p>The Latin title means "Behold the Handmaid of the Lord." This study reveals his <strong>careful planning process</strong>. It hangs at <a href="/museum/tate-britain-london-uk"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      { question: "What does Ecce Ancilla Domini mean?", answer: "Latin for <strong>'Behold the Handmaid of the Lord'</strong>, the Virgin Mary's response to the Annunciation." },
      { question: "Where is this study?", answer: "<a href=\"/museum/tate-britain-london-uk\"><strong>Tate Britain</strong></a> in London holds this <a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> drawing." }
    ]
  },
  {
    slug: 'juan-de-valdes-leal-ecce-homo',
    description: `<p><a href="/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this image of Christ presented to the crowd. The <strong>suffering figure</strong> wears the crown of thorns, shown in the moment Pilate declared "Behold the Man." Valdés Leal was known for dramatic religious works.</p>
<p>The Spanish Baroque painter worked primarily in Seville, creating <strong>intense devotional images</strong>. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What does Ecce Homo mean?", answer: "Latin for <strong>'Behold the Man'</strong>, Pilate's words when presenting Christ to the crowd." },
      { question: "Who painted this version?", answer: "<a href=\"/artist/juan-de-valdes-leal\"><strong>Juan de Valdés Leal</strong></a>, a <strong>Spanish Baroque</strong> painter from Seville." }
    ]
  },
  {
    slug: 'juan-de-juanes-ecce-homo',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted this devotional image of Christ as Ecce Homo. The <strong>suffering Savior</strong> wears the crown of thorns, presented for contemplation. Juanes was the leading Spanish Renaissance painter in Valencia.</p>
<p>His religious works were highly influential in <strong>Spanish devotional art</strong>. This painting hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Who painted this Ecce Homo?", answer: "<a href=\"/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a>, Valencia's leading <strong>Renaissance painter</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid displays this devotional work." }
    ]
  },
  {
    slug: 'rembrandt-ecce-homo',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the moment Pilate presents Christ to the crowd in this Ecce Homo. The <strong>dramatic lighting</strong> focuses attention on Christ's suffering figure. Rembrandt brought psychological depth to biblical scenes.</p>
<p>His interpretation emphasizes <strong>human emotion and divine sacrifice</strong>. This work hangs at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who painted this Ecce Homo?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a>, the Dutch master of <strong>dramatic biblical scenes</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio displays this work." }
    ]
  },
  {
    slug: 'tintoretto-ecce-homo-pontius-pilate-presenting-christ-to-the-',
    description: `<p><a href="/artist/tintoretto"><strong>Tintoretto</strong></a> painted this dramatic scene of Pontius Pilate presenting Christ to the crowd. The <strong>theatrical composition</strong> captures the tense moment before condemnation. Tintoretto's dynamic style brings urgency to the biblical narrative.</p>
<p>The Venetian master was known for his <strong>bold, rapid brushwork</strong>. This work hangs at the <a href="/museum/museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil"><strong>MASP</strong></a> in São Paulo.</p>`,
    faqs: [
      { question: "What moment does this show?", answer: "<strong>Pilate presenting Christ</strong> to the crowd, asking what should be done with him." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil\"><strong>MASP</strong></a> in São Paulo, Brazil holds this <a href=\"/artist/tintoretto\"><strong>Tintoretto</strong></a>." }
    ]
  },
  {
    slug: 'nicolas-poussin-echo-and-narcissus',
    description: `<p><a href="/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted the tragic myth of Echo and Narcissus in this classical composition. The beautiful youth <strong>gazes at his reflection</strong> while the nymph Echo fades away nearby. Poussin brought intellectual rigor to mythological subjects.</p>
<p>The French master working in Rome became a model for <strong>classical painting</strong>. This work hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "What is the story of Echo and Narcissus?", answer: "Narcissus fell in love with <strong>his own reflection</strong> while Echo, who loved him, faded to just a voice." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris displays this <a href=\"/artist/nicolas-poussin\"><strong>Poussin</strong></a> masterwork." }
    ]
  },
  {
    slug: 'giotto-ecstasy-of-st-francis',
    description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> depicted Saint Francis in a moment of divine rapture in this fresco. The saint's <strong>upward gaze and open arms</strong> express spiritual transport. Giotto's naturalistic approach made saints seem human and relatable.</p>
<p>This scene belongs to the famous Francis cycle at Assisi. The <strong>emotional intensity</strong> influenced religious art for centuries. It remains at the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a>.</p>`,
    faqs: [
      { question: "What is shown in this fresco?", answer: "<strong>Saint Francis in ecstasy</strong>, experiencing divine communion, painted by <a href=\"/artist/giotto\"><strong>Giotto</strong></a>." },
      { question: "Where can I see this?", answer: "The <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy." }
    ]
  },
  {
    slug: 'petrus-christus-edward-grimston',
    description: `<p><a href="/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted this portrait of English diplomat Edward Grimston. The <strong>sitter's direct gaze</strong> and three-quarter pose follow Netherlandish conventions. Christus was a follower of Jan van Eyck in Bruges.</p>
<p>The portrait captures Grimston during a diplomatic mission to the Low Countries. His <strong>fine clothing marks his status</strong>. This work hangs at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who was Edward Grimston?", answer: "An <strong>English diplomat</strong> who visited Bruges on royal business, painted by <a href=\"/artist/petrus-christus\"><strong>Petrus Christus</strong></a>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London holds this Early Netherlandish portrait." }
    ]
  },
  {
    slug: 'lawrence-alma-tadema-egyptian-chess-players',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this scene of ancient Egyptians playing chess. The <strong>archaeological details</strong> of costume and setting reflect his scholarly approach to antiquity. Alma-Tadema brought the ancient world to vivid life.</p>
<p>His meticulous research made <strong>historical scenes convincing</strong>. Victorian collectors prized his work highly. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Egyptian Chess Players?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a>, famous for <strong>archaeologically accurate</strong> ancient world scenes." },
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'juan-de-juanes-el-buen-pastor',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted El Buen Pastor (The Good Shepherd), showing Christ as shepherd of souls. The <strong>gentle image</strong> depicts Christ carrying a lamb, symbolizing his care for humanity. Juanes created many such devotional works for Spanish churches.</p>
<p>His style blends Italian Renaissance influence with <strong>Spanish devotional intensity</strong>. This painting hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "What does El Buen Pastor mean?", answer: "Spanish for <strong>'The Good Shepherd'</strong>, depicting Christ caring for his flock." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid displays this <a href=\"/artist/juan-de-juanes\"><strong>Juanes</strong></a> work." }
    ]
  },
  {
    slug: 'juan-de-juanes-el-salvador',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted El Salvador (The Savior), a devotional image of Christ. The <strong>frontal presentation</strong> invites direct contemplation. Juanes created numerous such images for private devotion and church altars.</p>
<p>His refined technique and <strong>spiritual intensity</strong> made him Valencia's most celebrated painter. This work hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "What is El Salvador?", answer: "Spanish for <strong>'The Savior'</strong>, a devotional image of Christ by <a href=\"/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid holds this work." }
    ]
  },
  {
    slug: 'juan-de-juanes-el-salvador-con-la-eucarist237a',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted Christ holding the Eucharist in this devotional image. The <strong>Savior presents the Host</strong>, emphasizing the sacrament's importance. This type of image was central to Counter-Reformation devotion in Spain.</p>
<p>Juanes's version became one of the most <strong>copied religious images</strong> in Spanish art. This painting hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "Christ presenting the <strong>Eucharist</strong>, emphasizing the Catholic sacrament's importance." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> displays this influential <a href=\"/artist/juan-de-juanes\"><strong>Juanes</strong></a> image." }
    ]
  },
  {
    slug: 'juan-de-juanes-el-sumo-sacerdote-aar243n',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted the High Priest Aaron in his ceremonial vestments. The <strong>Old Testament figure</strong> wears the elaborate garments described in Exodus. Juanes brought careful attention to biblical detail.</p>
<p>Aaron was Moses's brother and the first <strong>Jewish high priest</strong>. This work hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Who was Aaron?", answer: "The <strong>first Jewish High Priest</strong> and brother of Moses, painted by <a href=\"/artist/juan-de-juanes\"><strong>Juanes</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid displays this biblical figure." }
    ]
  },
  {
    slug: 'john-everett-millais-elgiva-seized-byorder-of-odo-archbishop-of-canterb',
    description: `<p><a href="/artist/john-everett-millais"><strong>John Everett Millais</strong></a> painted this dramatic scene from English history. Queen Elgiva is <strong>seized on orders of Archbishop Odo</strong>, her face showing distress. Millais brought Pre-Raphaelite intensity to historical narrative.</p>
<p>The young artist created this ambitious work early in his career. The <strong>vivid colors and emotional drama</strong> are characteristic. This painting hangs at the <a href="/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Who was Elgiva?", answer: "A 10th-century <strong>English queen</strong> whose marriage to King Edwy was opposed by Archbishop Odo." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> holds this <a href=\"/artist/john-everett-millais\"><strong>Millais</strong></a> work." }
    ]
  },
  {
    slug: 'rembrandt-eliezer-and-rebecca-at-the-well',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted the biblical scene of Eliezer meeting Rebecca at the well. The servant of Abraham finds a <strong>bride for Isaac</strong> as divinely guided. Rembrandt's warm tones and intimate treatment humanize the narrative.</p>
<p>The Dutch master often explored <strong>Old Testament stories</strong> with psychological depth. This work hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What story does this show?", answer: "Abraham's servant <strong>Eliezer finding Rebecca</strong>, who will become Isaac's wife, at a well." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London displays this <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a>." }
    ]
  },
  {
    slug: 'albert-joseph-moore-elijah39s-sacrifice',
    description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this scene of the prophet Elijah's sacrifice on Mount Carmel. The <strong>dramatic moment</strong> when fire consumes the offering challenged the prophets of Baal. Moore brought Aesthetic movement beauty to biblical subjects.</p>
<p>His attention to <strong>color harmony and classical form</strong> is evident throughout. This work hangs at the <a href="/museum/bury-art-museum-bury-uk"><strong>Bury Art Museum</strong></a> in England.</p>`,
    faqs: [
      { question: "What story is depicted?", answer: "<strong>Elijah's contest</strong> with the prophets of Baal, when divine fire consumed his sacrifice." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/bury-art-museum-bury-uk\"><strong>Bury Art Museum</strong></a> in England holds this <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> work." }
    ]
  },
  {
    slug: 'august-macke-elisabeth-at-the-table',
    description: `<p><a href="/artist/august-macke"><strong>August Macke</strong></a> painted his wife Elisabeth seated at a table in this intimate portrait. The <strong>vibrant colors</strong> and simplified forms reflect his Expressionist approach. Macke often portrayed his wife and domestic scenes with warmth.</p>
<p>The German painter died young in World War I. His <strong>luminous color sense</strong> marked him as a major talent. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who is Elisabeth?", answer: "<strong>Elisabeth Macke</strong>, the artist's wife and frequent model, painted by <a href=\"/artist/august-macke\"><strong>August Macke</strong></a>." },
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'dante-gabriel-rossetti-elizabeth-siddal',
    description: `<p><a href="/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> drew his muse and future wife Elizabeth Siddal in this portrait. Her <strong>distinctive features</strong> and red hair became iconic in Pre-Raphaelite art. Siddal modeled for many Brotherhood paintings.</p>
<p>Their relationship was intense and troubled. She died young, and Rossetti remained <strong>haunted by her memory</strong>. This work hangs at the <a href="/museum/fitzwilliam-museum-university-of-cambridge-cambrid"><strong>Fitzwilliam Museum</strong></a> in Cambridge.</p>`,
    faqs: [
      { question: "Who was Elizabeth Siddal?", answer: "A model, artist, and poet who became <a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti's</strong></a> wife and <strong>Pre-Raphaelite icon</strong>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge holds this drawing." }
    ]
  },
  {
    slug: 'claude-lorrain-embarkation-of-st-paula-romana-at-ostia',
    description: `<p><a href="/artist/claude-lorrain"><strong>Claude Lorrain</strong></a> painted Saint Paula departing from the Roman port of Ostia on her pilgrimage. The <strong>glowing harbor scene</strong> demonstrates Claude's mastery of light and atmosphere. Classical architecture frames the departure.</p>
<p>The French painter working in Rome defined the <strong>ideal landscape tradition</strong>. This work hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Who was Saint Paula?", answer: "A 4th-century <strong>Roman noblewoman</strong> who left for the Holy Land, painted by <a href=\"/artist/claude-lorrain\"><strong>Claude</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid displays this classical landscape." }
    ]
  },
  {
    slug: 'william-hogarth-emblematical-print-of-the-south-sea-scheme',
    description: `<p><a href="/artist/william-hogarth"><strong>William Hogarth</strong></a> satirized the South Sea Bubble financial disaster in this print. The <strong>crowded scene</strong> shows investors caught up in speculative madness. Hogarth's moral wit attacks greed and gullibility.</p>
<p>The 1720 crash ruined many British investors. Hogarth's print became a <strong>lasting commentary</strong> on financial folly. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What was the South Sea Bubble?", answer: "A 1720 <strong>financial crash</strong> in Britain that ruined many investors, satirized by <a href=\"/artist/william-hogarth\"><strong>Hogarth</strong></a>." },
      { question: "What type of work is this?", answer: "A <strong>satirical print</strong> attacking financial speculation and human greed." }
    ]
  },
  {
    slug: 'gustav-klimt-emilie-fl246ge-aged-17',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted Emilie Flöge at age 17, capturing the young woman who would become his lifelong companion. The <strong>early portrait</strong> shows her before Klimt developed his famous decorative style. Their relationship lasted decades.</p>
<p>Emilie was a fashion designer and <strong>Klimt's closest confidante</strong>. This intimate portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Emilie Flöge?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Klimt's</strong></a> lifelong companion and a <strong>Viennese fashion designer</strong>." },
      { question: "Where is this portrait?", answer: "This early work is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'john-everett-millais-emily-patmore',
    description: `<p><a href="/artist/john-everett-millais"><strong>John Everett Millais</strong></a> painted this portrait of Emily Patmore, wife of the poet Coventry Patmore. The <strong>sensitive rendering</strong> captures her gentle character. Millais excelled at portraits of women with psychological insight.</p>
<p>Emily inspired her husband's famous poem sequence "The Angel in the House." This portrait hangs at the <a href="/museum/fitzwilliam-museum-university-of-cambridge-cambrid"><strong>Fitzwilliam Museum</strong></a> in Cambridge.</p>`,
    faqs: [
      { question: "Who was Emily Patmore?", answer: "Wife of poet <strong>Coventry Patmore</strong> and inspiration for his famous poem, portrayed by <a href=\"/artist/john-everett-millais\"><strong>Millais</strong></a>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge holds this work." }
    ]
  },
  {
    slug: 'john-singer-sargent-emily-sargent',
    description: `<p><a href="/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted his sister Emily in this family portrait. The <strong>intimate treatment</strong> differs from his formal commissioned portraits. Emily was one of several family members Sargent painted throughout his career.</p>
<p>The artist's affection for his subject shows in the <strong>relaxed composition</strong>. This portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Emily Sargent?", answer: "The <strong>artist's sister</strong>, painted informally by <a href=\"/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a>." },
      { question: "Where is this portrait?", answer: "This family portrait is in a <strong>private collection</strong>." }
    ]
  },
  {
    slug: 'joshua-reynolds-emily-duchess-of-leinster',
    description: `<p><a href="/artist/joshua-reynolds"><strong>Joshua Reynolds</strong></a> painted Emily, Duchess of Leinster, in this aristocratic portrait. The <strong>elegant pose</strong> and rich fabrics reflect her high social standing. Reynolds was the leading British portrait painter of his era.</p>
<p>The Duchess was a prominent figure in <strong>Georgian society</strong>. This portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Emily, Duchess of Leinster?", answer: "An <strong>Irish noblewoman</strong> and society figure, painted by <a href=\"/artist/joshua-reynolds\"><strong>Reynolds</strong></a>." },
      { question: "Where is this portrait?", answer: "This aristocratic portrait remains in a <strong>private collection</strong>." }
    ]
  },
  {
    slug: 'ford-madox-brown-emma-hill',
    description: `<p><a href="/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted Emma Hill, his second wife and frequent model. The <strong>tender portrait</strong> shows the woman who supported him through difficult years. Brown was associated with the Pre-Raphaelites though never formally a member.</p>
<p>Emma modeled for many of his major works. This portrait hangs at the <a href="/museum/birmingham-museum-and-art-gallery-birmingham-uk"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Who was Emma Hill?", answer: "<a href=\"/artist/ford-madox-brown\"><strong>Ford Madox Brown's</strong></a> second wife and <strong>frequent model</strong>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> displays this work." }
    ]
  },
  {
    slug: 'anthony-van-dyck-emperor-charles-v-on-horseback',
    description: `<p><a href="/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted Emperor Charles V mounted on horseback in this regal portrait. The <strong>powerful pose</strong> projects imperial authority. Van Dyck learned equestrian portraiture from his master Rubens.</p>
<p>Charles V ruled vast territories across Europe and the Americas. This <strong>commanding image</strong> hangs at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Who was Charles V?", answer: "The <strong>Holy Roman Emperor</strong> who ruled much of Europe in the 16th century." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence displays this <a href=\"/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>." }
    ]
  },
  {
    slug: 'anthony-van-dyck-emperor-theodosius-forbidden-by-st-ambrose-to-ente',
    description: `<p><a href="/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted the dramatic confrontation between Emperor Theodosius and Saint Ambrose. The <strong>bishop bars the emperor</strong> from Milan Cathedral after a massacre. This moment became a symbol of spiritual over temporal power.</p>
<p>Van Dyck brings <strong>theatrical tension</strong> to the historical scene. This work hangs at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "<strong>Saint Ambrose barring Emperor Theodosius</strong> from church until he did penance for a massacre." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London holds this <a href=\"/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>." }
    ]
  },
  {
    slug: 'john-william-godward-endymion',
    description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted the beautiful shepherd Endymion from Greek mythology. The <strong>youth lies in eternal sleep</strong>, granted immortality by the moon goddess Selene. Godward specialized in idealized classical figures.</p>
<p>His Neoclassical style continued the <strong>Alma-Tadema tradition</strong>. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Endymion?", answer: "A <strong>beautiful shepherd</strong> in Greek myth, loved by the moon goddess Selene and granted eternal sleep." },
      { question: "Who painted this Endymion?", answer: "<a href=\"/artist/john-william-godward\"><strong>John William Godward</strong></a>, a Neoclassical painter of <strong>ancient world subjects</strong>." }
    ]
  },
  {
    slug: 'john-singer-sargent-engelsburg',
    description: `<p><a href="/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted or sketched Engelsburg (Castel Sant'Angelo) in Rome. The <strong>ancient fortress</strong> on the Tiber was a favorite subject for artists visiting the Eternal City. Sargent traveled widely and painted European landmarks.</p>
<p>This work captures his <strong>fluid, observational style</strong>. It is held at the <a href="/museum/british-museum-london-uk"><strong>British Museum</strong></a> in London.</p>`,
    faqs: [
      { question: "What is Engelsburg?", answer: "The German name for <strong>Castel Sant'Angelo</strong>, a Roman fortress painted by <a href=\"/artist/john-singer-sargent\"><strong>Sargent</strong></a>." },
      { question: "Where is this work?", answer: "The <a href=\"/museum/british-museum-london-uk\"><strong>British Museum</strong></a> in London holds this piece." }
    ]
  },
  {
    slug: 'camille-pissarro-entering-a-village',
    description: `<p><a href="/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted a figure entering a rural village in this landscape. The <strong>country road winds</strong> between houses and trees under a soft sky. Pissarro often depicted the French countryside and its inhabitants.</p>
<p>The Impressionist master's <strong>gentle touch</strong> captures ordinary rural moments. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Entering a Village?", answer: "<a href=\"/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a>, the <strong>Impressionist</strong> known for French rural scenes." },
      { question: "Where is this painting?", answer: "This landscape is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'gentile-da-fabriano-enthroned-madonna-with-angels',
    description: `<p><a href="/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> painted the Virgin and Child enthroned with attending angels. The <strong>gold ground and rich colors</strong> show International Gothic elegance at its finest. Gentile was the leading Italian painter of his generation.</p>
<p>His decorative style combined <strong>natural observation with courtly refinement</strong>. This work hangs at the <a href="/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Who painted this Madonna?", answer: "<a href=\"/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a>, master of the <strong>International Gothic style</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/metropolitan-museum-of-art-met-new-york-city-ny-us\"><strong>Metropolitan Museum of Art</strong></a> in New York displays this work." }
    ]
  },
  {
    slug: 'juan-de-juanes-entierro-de-san-esteban',
    description: `<p><a href="/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted the burial of Saint Stephen, the first Christian martyr. <strong>Mourners gather</strong> around the body in a scene of grief and devotion. Juanes depicted many episodes from the saint's life.</p>
<p>His work combines <strong>Italian Renaissance style with Spanish piety</strong>. This painting hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Who was Saint Stephen?", answer: "The <strong>first Christian martyr</strong>, stoned to death for his faith, depicted by <a href=\"/artist/juan-de-juanes\"><strong>Juanes</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid displays this burial scene." }
    ]
  },
  {
    slug: 'lawrence-alma-tadema-entrance-to-a-roman-theatre',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> depicted the entrance to a Roman theatre with archaeological precision. <strong>Marble columns and steps</strong> frame figures in ancient costume. Alma-Tadema's research made his reconstructions of antiquity convincing.</p>
<p>Victorian audiences loved his <strong>immersive visions of the ancient world</strong>. This work hangs at the <a href="/museum/fries-museum-leeuwarden-netherlands"><strong>Fries Museum</strong></a> in the Netherlands.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "The <strong>entrance to an ancient Roman theatre</strong>, recreated by <a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/fries-museum-leeuwarden-netherlands\"><strong>Fries Museum</strong></a> in Leeuwarden, Netherlands holds this work." }
    ]
  },
  {
    slug: 'canaletto-entrance-to-the-grand-canal-looking-east',
    description: `<p><a href="/artist/canaletto"><strong>Canaletto</strong></a> painted this view of the Grand Canal entrance looking eastward. The <strong>famous Venetian vista</strong> shows the church of Santa Maria della Salute and surrounding palaces. Canaletto's precise topography served as souvenirs for Grand Tour travelers.</p>
<p>His <strong>crystal-clear light</strong> defines Venetian veduta painting. This work hangs at the <a href="/museum/gem228ldegalerie-alte-meister-dresden-germany"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden.</p>`,
    faqs: [
      { question: "What view does this show?", answer: "The <strong>entrance to Venice's Grand Canal</strong> looking east toward the Adriatic." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/gem228ldegalerie-alte-meister-dresden-germany\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden displays this <a href=\"/artist/canaletto\"><strong>Canaletto</strong></a>." }
    ]
  },
  {
    slug: 'william-adolphe-bouguereau-equality-before-death',
    description: `<p><a href="/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted this allegorical work showing Death as the great equalizer. <strong>Figures of all ranks</strong> face mortality together. Bouguereau's technical mastery serves this meditation on human fate.</p>
<p>The French academic painter was known for <strong>polished technique</strong> and moralizing subjects. This work hangs at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "What is the theme of this painting?", answer: "<strong>Death as equalizer</strong>, showing that mortality comes to all regardless of status." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris displays this <a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a>." }
    ]
  },
  {
    slug: 'jacques-louis-david-equestrian-portrait-of-stanislas-kostka-potocki',
    description: `<p><a href="/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this equestrian portrait of Polish nobleman Stanisław Kostka Potocki. The <strong>elegant rider controls his rearing horse</strong> against a dramatic sky. David brought Neoclassical grandeur to portraiture.</p>
<p>Potocki was an art collector and <strong>Enlightenment patron</strong>. This work hangs at the <a href="/museum/national-museum-warsaw-poland"><strong>National Museum</strong></a> in Warsaw.</p>`,
    faqs: [
      { question: "Who was Stanisław Potocki?", answer: "A <strong>Polish nobleman</strong>, art collector, and Enlightenment figure painted by <a href=\"/artist/jacques-louis-david\"><strong>David</strong></a>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/national-museum-warsaw-poland\"><strong>National Museum</strong></a> in Warsaw holds this equestrian portrait." }
    ]
  },
  {
    slug: 'peter-paul-rubens-equestrian-portrait-of-the-duke-of-lerma',
    description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted the Duke of Lerma mounted on a powerful horse. The <strong>Spanish nobleman</strong> was the most powerful man in Spain as favorite of Philip III. Rubens created this during his diplomatic mission to Spain.</p>
<p>The portrait established Rubens's reputation for <strong>dynamic equestrian compositions</strong>. This work hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Who was the Duke of Lerma?", answer: "The <strong>powerful minister</strong> who effectively ruled Spain under Philip III." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> displays this grand <a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> equestrian." }
    ]
  },
  {
    slug: 'guercino-erminia-finds-the-wounded-tancred',
    description: `<p><a href="/artist/guercino"><strong>Guercino</strong></a> painted the scene from Tasso's epic where Erminia discovers wounded Tancred. The <strong>dramatic moment</strong> shows the Saracen princess coming to the aid of the Christian knight she loves. Baroque emotion fills the composition.</p>
<p>Guercino's rich colors and <strong>theatrical lighting</strong> bring the literary scene to life. This work hangs at the <a href="/museum/galleria-doria-pamphilj-rome-italy"><strong>Galleria Doria Pamphilj</strong></a> in Rome.</p>`,
    faqs: [
      { question: "What story is this from?", answer: "Torquato Tasso's epic <strong>Jerusalem Delivered</strong>, where Erminia finds wounded Tancred." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/galleria-doria-pamphilj-rome-italy\"><strong>Galleria Doria Pamphilj</strong></a> in Rome holds this <a href=\"/artist/guercino\"><strong>Guercino</strong></a>." }
    ]
  },
  {
    slug: 'caspar-david-friedrich-ernst-theodor-johann-bruckner',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this portrait of Ernst Theodor Johann Brückner. The <strong>direct portrayal</strong> differs from Friedrich's famous landscapes. The German Romantic painter occasionally accepted portrait commissions.</p>
<p>Friedrich's careful observation shows even in this <strong>straightforward likeness</strong>. This work is held at the <a href="/museum/staatliche-museen-zu-berlin-berlin-germany"><strong>Staatliche Museen zu Berlin</strong></a>.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>, better known for <strong>Romantic landscapes</strong>." },
      { question: "Where is this portrait?", answer: "The <a href=\"/museum/staatliche-museen-zu-berlin-berlin-germany\"><strong>Staatliche Museen zu Berlin</strong></a> holds this work." }
    ]
  },
  {
    slug: 'tintoretto-esther-before-ahasuerus',
    description: `<p><a href="/artist/tintoretto"><strong>Tintoretto</strong></a> painted the dramatic moment when Queen Esther approaches King Ahasuerus. She risks <strong>death by appearing unbidden</strong> to save her Jewish people. Tintoretto's theatrical style heightens the tension.</p>
<p>The biblical story of courage and faith inspired many artists. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What story does this show?", answer: "<strong>Queen Esther</strong> approaching the king uninvited to save her people from destruction." },
      { question: "Who painted this scene?", answer: "<a href=\"/artist/tintoretto\"><strong>Tintoretto</strong></a>, the Venetian master of <strong>dramatic biblical scenes</strong>." }
    ]
  },
  {
    slug: 'john-william-waterhouse-esther-kenworthy',
    description: `<p><a href="/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> painted this portrait of Esther Kenworthy, who became his wife. The <strong>young woman</strong> appears with the beauty and presence typical of Waterhouse's female subjects. She modeled for several of his paintings.</p>
<p>This intimate portrait shows their <strong>personal connection</strong>. It hangs at <a href="/museum/sheffield-galleries-and-museums-sheffield-uk"><strong>Sheffield Galleries and Museums</strong></a>.</p>`,
    faqs: [
      { question: "Who was Esther Kenworthy?", answer: "<a href=\"/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> wife and model, painted in this <strong>personal portrait</strong>." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/sheffield-galleries-and-museums-sheffield-uk\"><strong>Sheffield Galleries and Museums</strong></a> holds this portrait." }
    ]
  },
  {
    slug: 'et-in-arcadia-ego-guercino',
    description: `<p><a href="/artist/guercino"><strong>Guercino</strong></a> painted this meditation on mortality titled Et in Arcadia Ego. Two shepherds discover a <strong>skull with the inscription</strong> meaning "Even in Arcadia, I (Death) am present." The 1618 work measures 78 × 89 cm in oil on canvas.</p>
<p>This painting introduced the famous phrase to art. Poussin later created his own version of the <strong>memento mori theme</strong>. This work hangs at <a href="/museum/barberini"><strong>Palazzo Barberini</strong></a> in Rome.</p>`,
    faqs: [
      { question: "What does Et in Arcadia Ego mean?", answer: "Latin for <strong>'Even in Arcadia, I exist'</strong>, spoken by Death, reminding that mortality exists even in paradise." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/barberini\"><strong>Palazzo Barberini</strong></a> in Rome displays this 1618 <a href=\"/artist/guercino\"><strong>Guercino</strong></a>." }
    ]
  },
  {
    slug: 'jan-van-eyck-eve-from-the-right-wing-of-the-ghent-altarpiece',
    description: `<p><a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted Eve as part of the monumental Ghent Altarpiece. The <strong>nude figure</strong> shows revolutionary naturalism, her body rendered with unprecedented realism. Eve holds the forbidden fruit, her expression contemplative.</p>
<p>This panel belongs to one of the most important works in Western art. It remains at <a href="/museum/st-bavo-cathedral-ghent-belgium"><strong>St. Bavo Cathedral</strong></a> in Ghent.</p>`,
    faqs: [
      { question: "What is the Ghent Altarpiece?", answer: "A <strong>monumental polyptych</strong> by <a href=\"/artist/jan-van-eyck\"><strong>Van Eyck</strong></a>, one of the most important early Netherlandish works." },
      { question: "Where can I see this?", answer: "<a href=\"/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium displays the altarpiece." }
    ]
  },
  {
    slug: 'piet-mondrian-evening-at-weesperzijde-sun',
    description: `<p><a href="/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this evening scene along the Weesperzijde, a waterway in Amsterdam. The <strong>setting sun</strong> casts golden light across the water and buildings. This early work shows Mondrian before his abstract period.</p>
<p>His <strong>sensitivity to light</strong> is already evident in this atmospheric view. The work hangs at the <a href="/museum/gemeentemuseum-den-haag-hague-netherlands"><strong>Gemeentemuseum</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "Where is Weesperzijde?", answer: "A <strong>waterway in Amsterdam</strong> that <a href=\"/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted in his early career." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum</strong></a> in The Hague holds this early Mondrian." }
    ]
  },
  {
    slug: 'piet-mondrian-evening-landscape',
    description: `<p><a href="/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this evening landscape showing Dutch scenery at dusk. The <strong>horizontal bands of land and sky</strong> hint at the geometric abstraction he would later develop. Soft colors capture the fading light.</p>
<p>This transitional work shows Mondrian <strong>moving toward abstraction</strong>. It hangs at the <a href="/museum/gemeentemuseum-den-haag-hague-netherlands"><strong>Gemeentemuseum</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "When did Mondrian paint landscapes?", answer: "In his <strong>early career</strong>, before developing his famous abstract style, <a href=\"/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted Dutch scenery." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum</strong></a> in The Hague displays this landscape." }
    ]
  },
  {
    slug: 'salvator-rosa-evening-landscape',
    description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this atmospheric evening landscape with his characteristic wild energy. <strong>Rugged terrain and dramatic skies</strong> create a sense of untamed nature. Rosa was known for landscapes that evoked danger and sublimity.</p>
<p>The Italian Baroque painter influenced later <strong>Romantic landscape traditions</strong>. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>, known for <strong>wild, dramatic landscapes</strong>." },
      { question: "Where is this painting?", answer: "This landscape remains in a <strong>private collection</strong>." }
    ]
  },
  {
    slug: 'edvard-munch-evening-on-karl-johan-street',
    description: `<p><a href="/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this haunting view of Oslo's main street at evening. <strong>Pale faces</strong> emerge from the crowd, their expressions anxious and isolated. The scene captures urban alienation with Expressionist intensity.</p>
<p>Munch transformed a simple promenade into a <strong>vision of existential dread</strong>. This work hangs at the <a href="/museum/rasmus-meyer-collection-bergen-norway"><strong>Rasmus Meyer Collection</strong></a> in Bergen.</p>`,
    faqs: [
      { question: "Where is Karl Johan Street?", answer: "The <strong>main street in Oslo</strong>, Norway, painted by <a href=\"/artist/edvard-munch\"><strong>Munch</strong></a> as a scene of urban anxiety." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/rasmus-meyer-collection-bergen-norway\"><strong>Rasmus Meyer Collection</strong></a> in Bergen holds this work." }
    ]
  },
  {
    slug: 'giotto-exorcism-of-the-demons-at-arezzo',
    description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this fresco showing Saint Francis driving demons from the city of Arezzo. The <strong>dark spirits flee</strong> the city walls while Francis prays below. Giotto's clear narrative style makes the miracle vivid.</p>
<p>This scene belongs to the Saint Francis cycle at Assisi. The <strong>dramatic composition</strong> influenced religious art for centuries. It remains at the <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a>.</p>`,
    faqs: [
      { question: "What miracle does this show?", answer: "<strong>Saint Francis driving demons</strong> from the city of Arezzo through prayer." },
      { question: "Where is this fresco?", answer: "The <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi displays this <a href=\"/artist/giotto\"><strong>Giotto</strong></a> scene." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks...`);

  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ ${update.slug}`);
    } catch (error) {
      console.error(`✗ ${update.slug}: ${error.message}`);
    }
  }

  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
