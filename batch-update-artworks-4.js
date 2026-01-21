const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'joaquin-sorolla-the-death-of-pedro-velarde-y-santill225n-during-th',
    description: `<p><a href="/apps/masterpieces/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this dramatic scene depicting the death of artillery officer Pedro Velarde during the 1808 uprising against Napoleon's forces in Madrid. The <strong>heroic composition</strong> shows Velarde falling at the Monteleón barracks, a pivotal moment in Spanish resistance. Sorolla brings patriotic fervor to this early historical work.</p>
<p>Before becoming famous for sun-drenched beach scenes, Sorolla painted <strong>ambitious historical canvases</strong>. This work demonstrates his narrative skill and academic training. Displayed at the <a href="/apps/masterpieces/museum/biblioteca-museu-victor-balaguer"><strong>Biblioteca Museu Víctor Balaguer</strong></a> in Vilanova i la Geltrú, Spain.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/biblioteca-museu-victor-balaguer\"><strong>Biblioteca Museu Víctor Balaguer</strong></a> in Vilanova i la Geltrú, a town near Barcelona with an important <strong>regional art collection</strong>." },
      { question: "Who was Sorolla?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a> was a Spanish painter best known for luminous beach scenes, though he began with <strong>historical subjects</strong> like this." },
      { question: "What historical event is depicted?", answer: "The painting shows the <strong>Dos de Mayo uprising</strong> of 1808, when Madrid's citizens and soldiers resisted Napoleon's occupation, inspiring Spanish resistance." }
    ]
  },
  {
    slug: 'piero-della-francesca-st-augustine',
    description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this majestic image of Saint Augustine, one of the Church Fathers, dressed in episcopal robes and miter. The saint's <strong>monumental presence</strong> fills the panel with characteristic geometric solidity. Piero's calm, mathematical approach to form gives the figure timeless authority.</p>
<p>This panel likely formed part of a larger altarpiece. Piero's <strong>luminous color</strong> and precise spatial construction exemplify early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> rationalism. Displayed at the <a href="/apps/masterpieces/museum/museu-nacional-arte-antiga"><strong>National Museum of Ancient Art</strong></a> in Lisbon.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This panel hangs at the <a href=\"/apps/masterpieces/museum/museu-nacional-arte-antiga\"><strong>National Museum of Ancient Art</strong></a> in Lisbon, Portugal's premier museum of <strong>Old Master paintings</strong>." },
      { question: "Who was Piero della Francesca?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> was a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> master known for mathematical precision and serene monumentality." },
      { question: "Who was Saint Augustine?", answer: "<strong>Saint Augustine</strong> was a 4th-century bishop and theologian whose writings profoundly shaped Western Christianity and philosophy." }
    ]
  },
  {
    slug: 'pierre-bonnard-young-girl-sitting-with-a-rabbit',
    description: `<p><a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this intimate scene of a young girl holding a rabbit, rendered in his characteristic <strong>warm, glowing palette</strong>. The domestic subject reflects Bonnard's focus on quiet moments of daily life. Soft edges and suffused light create an atmosphere of gentle affection between child and pet.</p>
<p>Bonnard was associated with the Nabis group before developing his distinctive <strong>Post-Impressionist</strong> style. His interiors and garden scenes capture fleeting impressions of color and light. This painting hangs at the <a href="/apps/masterpieces/museum/nmwa-tokyo"><strong>National Museum of Western Art</strong></a> in Tokyo.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/nmwa-tokyo\"><strong>National Museum of Western Art</strong></a> in Tokyo, which has an excellent collection of <strong>French painting</strong>." },
      { question: "Who was Pierre Bonnard?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> was a French <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> painter known for intimate domestic scenes in vibrant color." },
      { question: "What style is this painting?", answer: "Bonnard's <strong>warm palette</strong> and soft focus reflect Post-Impressionism, emphasizing color and atmosphere over precise detail." }
    ]
  },
  {
    slug: 'pierre-auguste-renoir-sleeping-cat',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> captured this peacefully sleeping cat with characteristic warmth and sensitivity. The <strong>soft fur</strong> is rendered in gentle brushstrokes that suggest texture without hard edges. Renoir's affection for his subject comes through in the tender observation of the curled, resting animal.</p>
<p>While known for figure paintings and portraits, Renoir occasionally turned to <a href="https://luxurywallart.com/collections/cats" target="_blank" rel="noopener"><strong>animal subjects</strong></a> with the same sensitivity. His <strong>feathery brushwork</strong> perfectly suited depicting soft fur. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. Renoir's animal subjects occasionally appear at auction and in retrospective exhibitions." },
      { question: "Who was Renoir?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Pierre-Auguste Renoir</strong></a> was a leading <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter known for joyful scenes of Parisian life and sensuous figure paintings." },
      { question: "Did Renoir often paint animals?", answer: "While Renoir focused mainly on <strong>figures and portraits</strong>, he occasionally painted pets and animals with the same soft, affectionate touch." }
    ]
  },
  {
    slug: 'piet-mondrian-triangulated-farmhouse-facade-with-polder-in-blue',
    description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this Dutch farmhouse facade, breaking down the traditional structure into <strong>geometric planes</strong>. The building's triangular gable is rendered in angular forms while blue represents the surrounding polder landscape. This transitional work shows Mondrian moving toward pure abstraction.</p>
<p>Before developing his signature grid paintings, Mondrian analyzed <strong>natural forms</strong> through increasingly abstract lenses. This work bridges representation and abstraction. Displayed at the <a href="/apps/masterpieces/museum/kunstmuseum-den-haag"><strong>Kunstmuseum Den Haag</strong></a> (formerly Gemeentemuseum).</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at <a href=\"/apps/masterpieces/museum/kunstmuseum-den-haag\"><strong>Kunstmuseum Den Haag</strong></a> in the Netherlands, which holds the world's largest <strong>Mondrian collection</strong>." },
      { question: "Who was Mondrian?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Piet Mondrian</strong></a> evolved from landscapes to become a pioneer of <strong>geometric abstraction</strong> and the De Stijl movement." },
      { question: "What is a polder?", answer: "A <strong>polder</strong> is low-lying land reclaimed from water, characteristic of the Dutch landscape that Mondrian knew intimately." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-soldiers-at-rest',
    description: `<p><a href="/apps/masterpieces/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> depicted soldiers taking a break from military duties in this characteristic scene. <strong>Weary troops</strong> gather to drink, gamble, and rest, their everyday humanity contrasting with warfare's brutality. Bruegel's keen observation captures individual personalities within the group.</p>
<p>Bruegel often showed common people with sympathy and humor. His <strong>detailed compositions</strong> document 16th-century Flemish life and costume. This drawing or painting is held at the <a href="/apps/masterpieces/museum/mfa-boston"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      { question: "Where is this work displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts</strong></a> in Boston, which has important <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> holdings." },
      { question: "Who was Pieter Bruegel?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a> was a Flemish master known for landscapes and <strong>peasant scenes</strong> full of human detail." },
      { question: "Why did Bruegel paint common people?", answer: "Bruegel showed <strong>ordinary life</strong> with sympathy and detail, documenting Flemish society while commenting on human nature." }
    ]
  },
  {
    slug: 'thomas-gainsborough-john-plampin',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> portrayed John Plampin in this elegant full-length portrait set against a landscape background. The gentleman stands in a <strong>relaxed pose</strong>, his fashionable dress indicating social standing. Gainsborough's feathery brushwork animates both figure and the silvery trees behind him.</p>
<p>This portrait exemplifies Gainsborough's ability to combine <strong>character portrayal</strong> with landscape painting, his two great passions. The Suffolk countryside setting reflects his East Anglian roots. Displayed at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where can I see this portrait?", answer: "John Plampin hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, which has a superb collection of <strong>British portraiture</strong>." },
      { question: "Who was Thomas Gainsborough?", answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Thomas Gainsborough</strong></a> was one of 18th-century Britain's greatest painters, rivaling <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a> in portrait commissions." },
      { question: "Who was John Plampin?", answer: "<strong>John Plampin</strong> was a Suffolk gentleman whose relaxed, informal pose was innovative for English portraiture of the period." }
    ]
  },
  {
    slug: 'raoul-dufy-the-fish-market-marseille',
    description: `<p><a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> captured the lively atmosphere of Marseille's fish market in this vibrant scene. <strong>Bold colors</strong> and rapid brushwork convey the bustle of vendors and shoppers amid displays of fresh catch. Dufy's decorative style transforms the everyday subject into joyful pattern.</p>
<p>Dufy frequently painted Mediterranean ports and markets. His <strong>calligraphic line</strong> and bright palette create an instantly recognizable style. This painting hangs at the <a href="/apps/masterpieces/museum/thyssen-bornemisza"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/thyssen-bornemisza\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, known for its superb collection of <strong>modern European art</strong>." },
      { question: "Who was Raoul Dufy?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a> was a French <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> painter known for decorative, colorful scenes of leisure and urban life." },
      { question: "What style is this painting?", answer: "Dufy's <strong>bold colors and rapid brushwork</strong> show Fauvist influence, prioritizing expressive color over realistic description." }
    ]
  },
  {
    slug: 'john-constable-wooded-landscape',
    description: `<p><a href="/apps/masterpieces/artist/john-constable"><strong>John Constable</strong></a> painted this English woodland scene with his characteristic attention to <strong>natural effects</strong>. Trees frame a view into the forest interior, light filtering through leaves to illuminate the undergrowth. Constable's observation of specific places and weather conditions revolutionized landscape painting.</p>
<p>The artist believed in painting nature truthfully rather than idealizing it. His <strong>broken brushwork</strong> captures the movement of foliage in breeze. This painting hangs at the <a href="/apps/masterpieces/museum/ago"><strong>Art Gallery of Ontario</strong></a> in Toronto.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This landscape hangs at the <a href=\"/apps/masterpieces/museum/ago\"><strong>Art Gallery of Ontario</strong></a> in Toronto, which has notable <strong>British landscape holdings</strong>." },
      { question: "Who was John Constable?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>John Constable</strong></a> was a leading English <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape painter who revolutionized the genre with his truthful observation." },
      { question: "What made Constable's landscapes innovative?", answer: "Constable painted <strong>specific places and weather</strong> rather than idealized scenes, influencing later movements including Impressionism." }
    ]
  },
  {
    slug: 'raphael-portrait-of-a-man-holding-an-apple',
    description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this portrait of an unknown young man holding an apple, possibly a reference to the Judgment of Paris. The sitter's <strong>direct gaze</strong> and confident pose suggest noble status. Raphael's mastery of form and subtle modeling give the figure remarkable presence.</p>
<p>The identity of the sitter remains debated by scholars. Raphael's <strong>refined technique</strong> and psychological insight made him the most sought-after portraitist of the High <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, home to one of the world's greatest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> collections." },
      { question: "Who was Raphael?", answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> was a High Renaissance master, one of the three giants alongside Leonardo and Michelangelo." },
      { question: "What does the apple symbolize?", answer: "The <strong>apple</strong> may reference the Judgment of Paris from Greek mythology, or simply indicate the sitter's wealth and sophistication." }
    ]
  },
  {
    slug: 'robert-delaunay-simultaneous-windows-2nd-motif-1st-part',
    description: `<p><a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a> created this abstract composition from his famous Windows series, breaking light into <strong>prismatic color planes</strong>. The Eiffel Tower dissolves into geometric fragments of pure hue. Delaunay called his approach "Simultanism," exploring how colors interact when placed side by side.</p>
<p>This work marks a key moment in the development of <strong>abstract art</strong>. Delaunay abandoned representational imagery for pure color relationships. Displayed at the <a href="/apps/masterpieces/museum/guggenheim"><strong>Solomon R. Guggenheim Museum</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/guggenheim\"><strong>Guggenheim Museum</strong></a> in New York, known for its collection of <strong>early modern abstraction</strong>." },
      { question: "Who was Robert Delaunay?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a> was a French painter who pioneered <strong>Orphism</strong>, using pure color abstraction derived from Cubism." },
      { question: "What is Simultanism?", answer: "<strong>Simultanism</strong> was Delaunay's term for his color theory, exploring how adjacent colors interact and create optical vibration." }
    ]
  },
  {
    slug: 'rosa-bonheur-highland-raid',
    description: `<p><a href="/apps/masterpieces/artist/rosa-bonheur"><strong>Rosa Bonheur</strong></a> painted this dramatic scene of Scottish Highland cattle being driven through rugged terrain. The <strong>powerful animals</strong> move through a wild landscape, their shaggy coats rendered with Bonheur's characteristic attention to animal anatomy. She was one of the 19th century's most celebrated animal painters.</p>
<p>Bonheur studied animals extensively, even visiting slaughterhouses to understand anatomy. Her <strong>monumental animal paintings</strong> earned international acclaim. Displayed at the <a href="/apps/masterpieces/museum/nmwa"><strong>National Museum of Women in the Arts</strong></a> in Washington, DC.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "Highland Raid hangs at the <a href=\"/apps/masterpieces/museum/nmwa\"><strong>National Museum of Women in the Arts</strong></a> in Washington, DC, dedicated to <strong>women artists</strong>." },
      { question: "Who was Rosa Bonheur?", answer: "<a href=\"/apps/masterpieces/artist/rosa-bonheur\"><strong>Rosa Bonheur</strong></a> was a 19th-century French painter, one of the era's most famous <a href=\"https://luxurywallart.com/collections/cow-art\" target=\"_blank\" rel=\"noopener\"><strong>animal artists</strong></a>." },
      { question: "Why did Bonheur paint animals?", answer: "Bonheur was passionate about <strong>animal anatomy</strong> and rural life, studying subjects extensively to achieve accurate, powerful depictions." }
    ]
  },
  {
    slug: 'salvator-rosa-r246merschlacht',
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this fierce Roman battle scene with characteristic dramatic intensity. <strong>Soldiers clash</strong> amid chaos and violence, bodies strewn across the composition. Rosa's energetic brushwork conveys the brutality and confusion of ancient warfare.</p>
<p>Battle paintings were among Rosa's specialties alongside wild landscapes. His <strong>theatrical compositions</strong> and dark palette influenced later <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> artists. This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This battle scene hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, which has major <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> holdings." },
      { question: "Who was Salvator Rosa?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> was an Italian Baroque painter known for wild landscapes, battle scenes, and <strong>dramatic compositions</strong>." },
      { question: "What does Römerschlacht mean?", answer: "<strong>Römerschlacht</strong> is German for \"Roman Battle,\" describing the ancient military subject of this violent composition." }
    ]
  },
  {
    slug: 'sandro-botticelli-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this sensitive portrait of an unidentified Florentine youth. The young man's <strong>thoughtful expression</strong> and elegant features reflect Renaissance ideals of beauty and refinement. Botticelli's delicate line and subtle modeling create a compelling psychological presence.</p>
<p>While famous for mythological subjects, Botticelli was also a skilled <strong>portrait painter</strong> for Florence's elite. This work demonstrates his refined draftsmanship. Displayed at the <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, once the Medici residence and now a major art museum." },
      { question: "Who was Botticelli?", answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Sandro Botticelli</strong></a> was a Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> master, famous for \"The Birth of Venus\" and \"Primavera.\"" },
      { question: "Who is the young man?", answer: "The sitter's <strong>identity remains unknown</strong>, though he was likely a member of Florence's wealthy merchant or noble class." }
    ]
  },
  {
    slug: 'sebastiano-del-piombo-shutters-of-the-organ-of-san-bartolomeo-venice',
    description: `<p><a href="/apps/masterpieces/artist/sebastiano-del-piombo"><strong>Sebastiano del Piombo</strong></a> painted these organ shutters for the church of San Bartolomeo in Venice. When closed, the panels display <strong>religious imagery</strong> appropriate for the sacred musical instrument. Sebastiano's Venetian training shows in the rich color and monumental figures.</p>
<p>Sebastiano later moved to Rome where he became friends with Michelangelo. These early <strong>Venetian works</strong> demonstrate his mastery before that transition. Displayed at the <a href="/apps/masterpieces/museum/gallerie-accademia-venice"><strong>Gallerie dell'Accademia</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Where are these panels displayed?", answer: "These organ shutters hang at the <a href=\"/apps/masterpieces/museum/gallerie-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, preserving major works of <strong>Venetian painting</strong>." },
      { question: "Who was Sebastiano del Piombo?", answer: "<a href=\"/apps/masterpieces/artist/sebastiano-del-piombo\"><strong>Sebastiano del Piombo</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter who later worked in Rome alongside Michelangelo." },
      { question: "What are organ shutters?", answer: "<strong>Organ shutters</strong> are painted panels that close over a church organ's pipes, often decorated with religious scenes appropriate to the sacred setting." }
    ]
  },
  {
    slug: 'john-james-audubon-rosebreasted-grosbeak',
    description: `<p><a href="/apps/masterpieces/artist/john-james-audubon"><strong>John James Audubon</strong></a> depicted Rose-Breasted Grosbeaks with his characteristic scientific accuracy and artistic flair. The <strong>colorful songbirds</strong> perch on a branch, their distinctive plumage rendered in precise detail. Audubon's plates combined ornithological observation with dynamic composition.</p>
<p>This image comes from Audubon's monumental <strong>Birds of America</strong> project. His life-size bird portraits revolutionized natural history illustration. Displayed at the <a href="/apps/masterpieces/museum/saam"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC.</p>`,
    faqs: [
      { question: "Where can I see this work?", answer: "This print is at the <a href=\"/apps/masterpieces/museum/saam\"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC, which has an important collection of <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>Audubon prints</strong></a>." },
      { question: "Who was Audubon?", answer: "<a href=\"/apps/masterpieces/artist/john-james-audubon\"><strong>John James Audubon</strong></a> was an American naturalist and artist whose <strong>Birds of America</strong> remains a landmark of natural history illustration." },
      { question: "What is the Rose-Breasted Grosbeak?", answer: "The <strong>Rose-Breasted Grosbeak</strong> is a North American songbird, the male displaying a distinctive red chest patch that Audubon captured vividly." }
    ]
  },
  {
    slug: 'thomas-gainsborough-the-artist-with-his-wife-and-daughter',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> portrayed himself with his wife Margaret and daughter in this intimate family group. The <strong>informal composition</strong> reveals personal warmth unusual in 18th-century portraiture. Gainsborough's feathery brushwork and silvery palette create an atmosphere of domestic affection.</p>
<p>This rare glimpse into the artist's private life shows his family in a <strong>natural, unposed manner</strong>. The landscape setting reflects his lifelong passion for nature. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This family portrait is in a <strong>private collection</strong>. Gainsborough's works can be seen at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> London and Gainsborough's House in Sudbury." },
      { question: "Who was Gainsborough's wife?", answer: "<strong>Margaret Burr</strong> was an illegitimate daughter of the Duke of Beaufort. She and Thomas married in 1746 and had two daughters." },
      { question: "Did Gainsborough paint many family portraits?", answer: "Gainsborough painted <strong>several family portraits</strong>, these informal works offering rare personal glimpses unlike his commissioned society portraits." }
    ]
  },
  {
    slug: 'william-holman-hunt-the-hireling-shepherd',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this moral allegory showing a shepherd neglecting his flock to flirt with a young woman. The <strong>sheep wander unattended</strong> while the hireling shows her a death's-head moth, symbolic of spiritual danger. Hunt's meticulous <a href="/apps/masterpieces/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite</strong></a> detail fills every inch.</p>
<p>The painting criticizes religious leaders who neglect their congregations. Hunt's <strong>brilliant sunlight</strong> and obsessive botanical accuracy create an almost hallucinatory intensity. Displayed at <a href="/apps/masterpieces/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The Hireling Shepherd hangs at <a href=\"/apps/masterpieces/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a>, which has an excellent <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite</strong></a> collection." },
      { question: "Who was William Holman Hunt?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> co-founded the Pre-Raphaelite Brotherhood, remaining faithful to its principles throughout his career." },
      { question: "What does the painting mean?", answer: "The <strong>neglectful shepherd</strong> represents clergy who fail their congregations, while the death's-head moth symbolizes spiritual danger and mortality." }
    ]
  },
  {
    slug: 'william-merritt-chase-view-near-polling',
    description: `<p><a href="/apps/masterpieces/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted this Bavarian landscape during summers spent near the village of Polling in Germany. The <strong>open countryside</strong> stretches under atmospheric sky, rendered with the bravura brushwork Chase learned in Munich. He adapted European plein air techniques to American subjects.</p>
<p>Chase was a leading figure in American <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> and an influential teacher. His <strong>confident brushwork</strong> and sensitivity to light influenced generations. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This landscape is in a <strong>private collection</strong>. Chase's works can be seen at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> and other major American museums." },
      { question: "Who was William Merritt Chase?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>William Merritt Chase</strong></a> was a leading American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter and influential teacher." },
      { question: "Where is Polling?", answer: "<strong>Polling</strong> is a village in Bavaria, Germany, where Chase spent several summers painting the surrounding countryside." }
    ]
  },
  {
    slug: 'william-adolphe-bouguereau-idyll',
    description: `<p><a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted this pastoral scene of idealized figures in a classical landscape. <strong>Beautiful youths</strong> relax in an Arcadian setting, embodying 19th-century academic ideals of beauty. Bouguereau's flawless technique and smooth finish made him the most successful French academic painter of his era.</p>
<p>His mythological and pastoral subjects were enormously popular with collectors. The <strong>porcelain-like flesh</strong> and careful composition demonstrate academic mastery. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "Idyll is in a <strong>private collection</strong>. Bouguereau's works can be seen at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris and American museums." },
      { question: "Who was Bouguereau?", answer: "<a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>William-Adolphe Bouguereau</strong></a> was the leading French <strong>academic painter</strong> of the 19th century, known for idealized classical subjects." },
      { question: "What is an idyll in painting?", answer: "An <strong>idyll</strong> depicts an idealized pastoral scene, usually showing beautiful figures in peaceful, classical landscape settings." }
    ]
  },
  {
    slug: 'john-martin-landscape-with-a-castle',
    description: `<p><a href="/apps/masterpieces/artist/john-martin"><strong>John Martin</strong></a> painted this dramatic landscape featuring a castle amid <strong>sublime natural scenery</strong>. Mountains and valleys stretch toward the horizon under theatrical light. Martin was famous for apocalyptic biblical scenes, but also created atmospheric landscapes of similar grandeur.</p>
<p>His <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> vision emphasized nature's power over human constructions. The <strong>tiny castle</strong> is dwarfed by the surrounding landscape. Displayed at the <a href="/apps/masterpieces/museum/yale-british-art"><strong>Yale Center for British Art</strong></a> in New Haven.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This landscape hangs at the <a href=\"/apps/masterpieces/museum/yale-british-art\"><strong>Yale Center for British Art</strong></a> in New Haven, with the largest British art collection outside the UK." },
      { question: "Who was John Martin?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>John Martin</strong></a> was a British <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter famous for apocalyptic biblical scenes and sublime landscapes." },
      { question: "What is sublime landscape?", answer: "The <strong>sublime</strong> in Romantic art emphasized nature's overwhelming power and grandeur, inspiring awe and even terror in viewers." }
    ]
  },
  {
    slug: 'akseli-gallen-kallela-symposium',
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> depicted a gathering of Finnish artists and intellectuals in this unusual group portrait. The figures sit around a table in various states of <strong>contemplation and exhaustion</strong>, capturing the intensity of creative discussion. This intimate scene shows the artist's circle in unguarded moments.</p>
<p>The painting documents Finland's artistic community during the era of national awakening. Gallen-Kallela's <strong>dark palette</strong> and psychological observation create a memorable image. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "Symposium is in a <strong>private collection</strong>. Gallen-Kallela's major works can be seen at the <a href=\"/apps/masterpieces/museum/ateneum\"><strong>Ateneum</strong></a> in Helsinki." },
      { question: "Who was Gallen-Kallela?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> was Finland's most celebrated painter, known for <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works based on Finnish mythology." },
      { question: "Who is depicted in the painting?", answer: "The painting shows Finnish <strong>artists and intellectuals</strong> from Gallen-Kallela's circle during a late-night gathering." }
    ]
  },
  {
    slug: 'alonso-cano-st-isidore-saves-a-child-that-had-fallen-in-a-well',
    description: `<p><a href="/apps/masterpieces/artist/alonso-cano"><strong>Alonso Cano</strong></a> depicted this miracle from the life of Saint Isidore the Laborer, patron saint of Madrid. The saint kneels in prayer as <strong>water rises miraculously</strong> in a well, lifting a child who had fallen in to safety. Cano's dramatic composition emphasizes divine intervention.</p>
<p>Cano was a leading Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter who also worked as architect and sculptor. His <strong>refined style</strong> shows Italian influence. Displayed at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, which holds the finest collection of <strong>Spanish Baroque painting</strong>." },
      { question: "Who was Alonso Cano?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter, sculptor, and architect who worked for the Spanish court." },
      { question: "Who was Saint Isidore?", answer: "<strong>Saint Isidore the Laborer</strong> was a medieval farmworker from Madrid known for miracles. He's the city's patron saint." }
    ]
  },
  {
    slug: 'john-william-waterhouse-sleep-and-his-half-brother-death',
    description: `<p><a href="/apps/masterpieces/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> painted this allegorical scene showing Sleep (Hypnos) with his half-brother Death (Thanatos) from Greek mythology. The <strong>languid figures</strong> rest together, embodying the ancient connection between sleep and death. Waterhouse's romantic style brings classical myth to life.</p>
<p>Waterhouse frequently drew on mythology and literature for his subjects. His <strong>sensuous figures</strong> and rich color connect to <a href="/apps/masterpieces/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite</strong></a> tradition. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong>. Waterhouse paintings can be seen at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> and other British museums." },
      { question: "Who was Waterhouse?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a> was a British painter known for <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite</strong></a> style mythological and literary subjects." },
      { question: "Who are Sleep and Death?", answer: "In Greek mythology, <strong>Hypnos (Sleep)</strong> and <strong>Thanatos (Death)</strong> were twin brothers, reflecting the ancient connection between the two states." }
    ]
  },
  {
    slug: 'bernardino-luini-the-infant-jesus-with-a-lamb',
    description: `<p><a href="/apps/masterpieces/artist/bernardino-luini"><strong>Bernardino Luini</strong></a> painted this tender image of the Christ Child with a lamb, symbol of his future sacrifice. The <strong>soft modeling</strong> and gentle expression show strong influence from Leonardo da Vinci, with whom Luini may have trained. The intimate scale invites devotional contemplation.</p>
<p>Luini was the leading Milanese painter of his generation. His <strong>sfumato technique</strong> and sweet expressions made his religious works widely beloved. Displayed at the <a href="/apps/masterpieces/museum/biblioteca-ambrosiana"><strong>Biblioteca Ambrosiana</strong></a> in Milan.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/biblioteca-ambrosiana\"><strong>Biblioteca Ambrosiana</strong></a> in Milan, a historic library and art collection founded in 1609." },
      { question: "Who was Bernardino Luini?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a> was a Milanese <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter strongly influenced by <strong>Leonardo da Vinci</strong>." },
      { question: "What does the lamb symbolize?", answer: "The <strong>lamb</strong> symbolizes Christ's future sacrifice as the \"Lamb of God\" who takes away the sins of the world." }
    ]
  }
];

async function main() {
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
      console.log(`Updated: ${update.slug}`);
    } catch (error) {
      console.error(`Failed to update ${update.slug}:`, error.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
