const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'pierre-auguste-renoir-the-return-of-the-boating-party': [
    { question: "What does The Return of the Boating Party depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted figures returning from a <strong>boating excursion</strong> on the Seine. The subject reflects the leisure culture along the river that Renoir and his Impressionist peers frequently captured." },
    { question: "What style is this painting?", answer: "It's an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work with Renoir's trademark <strong>soft brushwork</strong> and warm palette. His boating scenes rank among the movement's most celebrated subjects." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Renoir's <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>waterside scenes</strong></a> from the 1870s and 1880s capture Parisian leisure at its most relaxed." }
  ],
  'pierre-auguste-renoir-william-sisley': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted <strong>William Sisley</strong>, the father of his fellow Impressionist Alfred Sisley. The elder Sisley was a prosperous English businessman living in Paris." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds the world's largest collection of <strong>Impressionist paintings</strong>." },
    { question: "What style is this portrait?", answer: "It's an early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> portrait with <strong>restrained brushwork</strong> and naturalistic lighting. Renoir's portrait commissions helped support him financially during his early career." }
  ],
  'pierre-auguste-renoir-the-fairies-pond': [
    { question: "What does The Fairies Pond depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted a <strong>secluded woodland pond</strong> with dappled light filtering through the trees. The title suggests a mythical quality typical of his more poetic landscape work." },
    { question: "What movement does this belong to?", answer: "It's an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape focused on <strong>light and atmosphere</strong>. Renoir's nature scenes emphasize warmth and sensory pleasure over topographic accuracy." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Renoir's <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature paintings</strong></a> show his ability to find enchantment in ordinary French woodland settings." }
  ],
  'pierre-auguste-renoir-the-artist-s-mother': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted his <strong>mother, Marguerite Merlet</strong>. The intimate portrait shows the tenderness Renoir brought to paintings of people close to him." },
    { question: "What style is this painting?", answer: "It's an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> portrait with <strong>soft modeling</strong> and warm flesh tones. Renoir's family portraits are among his most personal and unguarded works." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Renoir's <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait paintings</strong></a> of family members reveal a gentler, more private side of his art." }
  ],
  'piet-mondrian-woman-and-child-in-front-of-a-farm': [
    { question: "What does this early Mondrian painting show?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted a <strong>woman and child</strong> standing before a Dutch farmhouse. This figurative work predates his famous abstract style by decades." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum Den Haag</strong></a> in The Hague. The museum holds the world's largest <strong>Mondrian collection</strong>." },
    { question: "How does this relate to Mondrian's later work?", answer: "Before developing <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a> abstraction, Mondrian worked in a <strong>naturalistic Dutch style</strong>. His early landscapes and figure paintings show a traditional foundation he'd radically transform." }
  ],
  'piet-mondrian-portrait-of-a-girl-with-flowers': [
    { question: "What does this Mondrian portrait show?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted a <strong>young girl holding flowers</strong> in a naturalistic style. This early work contrasts sharply with the geometric abstractions he'd later become famous for." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum Den Haag</strong></a> in The Hague, Netherlands. The museum traces Mondrian's entire artistic evolution from <strong>realism to abstraction</strong>." },
    { question: "What period does this represent?", answer: "It's from Mondrian's <strong>early figurative period</strong>, before he encountered Cubism and developed <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a>. His academic training in Amsterdam grounded him in traditional portraiture." }
  ],
  'piet-mondrian-wood-with-beech-trees': [
    { question: "What does Wood with Beech Trees depict?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted a <strong>forest of beech trees</strong> in a style moving toward abstraction. The vertical trunks and horizontal branches hint at the grid structures he'd later adopt." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum Den Haag</strong></a>. This painting is a key work showing Mondrian's <strong>transition from naturalism to abstraction</strong>." },
    { question: "How does this connect to Mondrian's abstract work?", answer: "The tree motif was central to Mondrian's journey toward <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a>. He progressively <strong>simplified tree forms</strong> until only horizontal and vertical lines remained." }
  ],
  'piet-mondrian-village-church': [
    { question: "What does Village Church depict?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted a <strong>Dutch village church</strong> in a naturalistic manner. Churches and farmhouses were common subjects in his early career as he explored the Dutch landscape tradition." },
    { question: "What style is this painting?", answer: "It predates Mondrian's abstract <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a> period. The <strong>muted earth tones</strong> and solid forms reflect the influence of The Hague School on his early development." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Mondrian's early <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a> are valued as evidence of the traditional roots behind his radical later work." }
  ],
  'piet-mondrian-schinkelbuurtje-sun': [
    { question: "What does Schinkelbuurtje Sun show?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> captured <strong>sunlight on a building</strong> in the Schinkelbuurt neighborhood of Amsterdam. The work shows his interest in how light transforms ordinary architecture." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum Den Haag</strong></a>. The museum documents Mondrian's complete evolution from <strong>Amsterdam cityscapes to pure abstraction</strong>." },
    { question: "What period does this represent?", answer: "It's from Mondrian's pre-abstract phase, before <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a>. Even in these early urban views, his focus on <strong>geometric structure</strong> foreshadowed his later breakthroughs." }
  ],
  'piet-mondrian-self-portrait': [
    { question: "What does Mondrian's Self Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted himself in a <strong>conventional portrait style</strong>, far removed from the geometric abstractions he'd later create. The serious expression reflects his disciplined, intellectual personality." },
    { question: "Where can I see this self-portrait?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/phillips-collection\"><strong>The Phillips Collection</strong></a> in Washington, D.C. The museum was America's first gallery of <strong>modern art</strong>, opened in 1921." },
    { question: "How does this relate to his later work?", answer: "This figurative portrait contrasts with the <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a> abstractions Mondrian became known for. His journey from <strong>realistic self-portraits to pure geometry</strong> is one of modern art's most dramatic transformations." }
  ],
  'pieter-bruegel-elder-philistine': [
    { question: "What does Philistine depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a> created this work depicting a <strong>Philistine figure</strong>, likely part of a biblical or moral series. Bruegel frequently used biblical subjects to comment on human behavior." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. The museum holds important <strong>drawings and prints</strong> by Bruegel alongside its vast global collections." },
    { question: "What movement does this belong to?", answer: "Bruegel worked during the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, blending <strong>moral allegory with keen observation</strong> of peasant life. His works often carried layered meanings beneath their lively surfaces." }
  ],
  'pieter-bruegel-elder-view-of-tivoli': [
    { question: "What does View of Tivoli show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> depicted the <strong>Italian town of Tivoli</strong>, east of Rome, which he visited during his travels in the early 1550s. The mountainous landscape reflects his firsthand experience of Italian scenery." },
    { question: "Where can I see this work?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. Bruegel's Italian sketches and drawings are rare <strong>records of his southern journey</strong>." },
    { question: "Why did Bruegel travel to Italy?", answer: "Like many <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> artists, Bruegel made the trip to study <strong>Italian art and landscape</strong>. The Alpine and Italian scenery he encountered deeply influenced his panoramic compositions." }
  ],
  'pieter-bruegel-elder-rustic-market': [
    { question: "What scene does Rustic Market depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> portrayed a <strong>lively rural market</strong> with peasants buying, selling, and socializing. Market scenes let him display his gift for crowded compositions full of individual character." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. The museum holds a range of <strong>Netherlandish works</strong> from Bruegel's era." },
    { question: "What movement is this associated with?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition of <strong>genre painting</strong>. Bruegel's scenes of peasant life influenced generations of Flemish and Dutch artists." }
  ],
  'pieter-bruegel-elder-pride': [
    { question: "What does Pride depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> depicted <strong>Pride</strong> as part of a series illustrating the Seven Deadly Sins. The composition teems with fantastical figures and moral symbolism in the tradition of Hieronymus Bosch." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Bruegel's <strong>Seven Deadly Sins prints</strong> were widely circulated and popular in the 16th century." },
    { question: "What influences shaped this work?", answer: "Bruegel drew heavily on <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> imagery, especially <strong>Bosch's grotesque fantasies</strong>. His moral allegories combined dark humor with sharp observations about human weakness." }
  ],
  'pieter-bruegel-elder-landscape-with-christ-appearing-to-the-apostles-at': [
    { question: "What biblical scene does this depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> painted <strong>Christ appearing to the apostles</strong> at the Sea of Tiberias after the Resurrection. The vast landscape dominates the composition, with the biblical figures almost hidden within it." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> landscape where <strong>nature overwhelms the narrative</strong>. Bruegel frequently placed biblical events within immense, panoramic settings." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Bruegel's <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a> are among the most influential in Western art history." }
  ],
  'pieter-claesz-still-life': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a> arranged everyday objects like <strong>glasses, plates, and food</strong> in a carefully composed tabletop scene. His still lifes are models of Dutch Golden Age restraint." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> still life in the <strong>monochrome banketje</strong> (banquet piece) tradition. Claesz used muted tones of brown, gray, and green to unify his compositions." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Claesz's <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth-toned</strong></a> still lifes represent the height of Dutch 17th-century painting craft." }
  ],
  'pieter-claesz-still-life-with-a-burning-candle': [
    { question: "What does this still life depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a> painted a <strong>burning candle</strong> among tabletop objects, a vanitas symbol reminding viewers of life's brevity. The flickering flame contrasts with the solid permanence of metal and glass." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands. The museum is renowned for its collection of <strong>Dutch Golden Age</strong> paintings." },
    { question: "What is the vanitas tradition?", answer: "Vanitas paintings use symbols like <strong>candles, skulls, and wilting flowers</strong> to represent mortality. Claesz was a master of this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre, popular in 17th-century Holland." }
  ],
  'pieter-claesz-still-life-with-a-turkey-pie': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a> painted an elaborate spread centered on a <strong>turkey pie</strong>, a luxury dish in 17th-century Holland. The display of food and fine objects signals wealth and abundance." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. The museum holds the finest collection of <strong>Dutch Golden Age</strong> art in the world." },
    { question: "What genre is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> <strong>pronkstilleven</strong> (ostentatious still life), showcasing expensive objects and foods. Claesz balanced visual richness with subtle moral undertones about excess." }
  ],
  'pieter-claesz-still-life-with-wine-glass-and-silver-bowl': [
    { question: "What objects does this still life feature?", answer: "<a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a> painted a <strong>wine glass and silver bowl</strong> alongside other tabletop items. The reflective surfaces of glass and metal showcase his skill at rendering light and texture." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie in Berlin</strong></a>. The museum's Dutch collection includes fine examples of <strong>17th-century still life</strong> painting." },
    { question: "What makes Claesz's still lifes distinctive?", answer: "His <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> compositions use a <strong>limited tonal palette</strong> that unifies diverse objects. Each surface, whether pewter, glass, or linen, is rendered with precise attention to how it catches light." }
  ],
  'pieter-de-hooch-the-visit': [
    { question: "What scene does The Visit show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> painted figures receiving a <strong>visitor in a Dutch interior</strong>. The scene captures a social ritual with the careful attention to domestic life that defines his work." },
    { question: "Where can I see this painting?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met holds important examples of <strong>Dutch Golden Age</strong> genre painting." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene with de Hooch's trademark <strong>sunlit interiors</strong> and precise perspective. His doorways and windows create layered views into adjoining rooms and courtyards." }
  ],
  'pieter-de-hooch-woman-with-basket-of-beans-in-the-kitchen-garden': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> painted a <strong>woman carrying beans</strong> in a kitchen garden, capturing everyday domestic labor. The courtyard setting uses his signature play of indoor and outdoor light." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland. The museum's collection spans from <strong>Old Masters through contemporary art</strong>." },
    { question: "What movement does this belong to?", answer: "It's a Dutch <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting. De Hooch elevated <strong>ordinary household tasks</strong> into subjects worthy of careful artistic attention." }
  ],
  'pieter-de-hooch-the-morning-toilet-of-a-young-man': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> depicted a <strong>young man getting dressed</strong> in the morning, attended by a servant. The intimate domestic scene is bathed in the soft daylight de Hooch mastered." },
    { question: "Where can I view this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow. The museum holds significant <strong>Dutch and Flemish paintings</strong> acquired during the imperial era." },
    { question: "What style characterizes this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> interior scene. De Hooch's ability to render <strong>natural light</strong> streaming through windows made him one of the finest Dutch genre painters alongside Vermeer." }
  ],
  'pieter-de-hooch-two-women-with-a-child-in-court': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> painted <strong>two women and a child</strong> in a courtyard, a subject he returned to repeatedly. The architectural framing creates a sense of quiet order and domestic calm." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/toledo-museum-of-art-toledo-oh-us\"><strong>Toledo Museum of Art</strong></a> in Ohio. The museum holds a respected collection of <strong>European Old Master</strong> paintings." },
    { question: "What makes de Hooch's courtyards distinctive?", answer: "His <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> courtyard scenes use <strong>precise linear perspective</strong> and warm sunlight to create inviting spaces. The combination of figures, architecture, and light gives these paintings their enduring appeal." }
  ],
  'pieter-de-hooch-woman-drinking-with-soldiers': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> painted a <strong>woman drinking alongside soldiers</strong> in an interior. Tavern and guardroom scenes were popular subjects in Dutch Golden Age painting." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum's Dutch collection includes several fine examples of <strong>17th-century genre painting</strong>." },
    { question: "What period does this represent?", answer: "It's a Dutch <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. De Hooch's earlier work often featured <strong>soldiers and tavern settings</strong> before he shifted to the sunlit domestic interiors he's best known for." }
  ],
  'pieter-de-hooch-two-soldiers-and-a-serving-woman-with-a-trumpeter': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> painted <strong>two soldiers, a serving woman, and a trumpeter</strong> in a guardroom scene. These merry company paintings were among his earliest subjects in the 1650s." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland. The museum holds an important <strong>European art collection</strong> spanning several centuries." },
    { question: "What style is this work?", answer: "It's an early <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting from de Hooch's <strong>Delft period</strong>. His guardroom scenes show the influence of earlier Dutch painters like Pieter Codde and Willem Duyster." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
