const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'jean-baptiste-simeon-chardin-the-silver-tureen': [
    { question: "What does The Silver Tureen depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>silver tureen</strong> alongside fruit and other kitchen objects. His ability to make humble tableware feel monumental through careful composition and soft light is on full display here." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met holds several <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> still lifes in its European paintings collection." },
    { question: "What makes Chardin's still lifes different?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> avoided the lavish displays of Dutch flower painters. His subjects are <strong>everyday kitchen items</strong>: pots, bread, fruit, fish. The quiet dignity he gave these objects was revolutionary and later inspired Cézanne." }
  ],
  'jean-baptiste-simeon-chardin-the-silver-goblet': [
    { question: "What does The Silver Goblet show?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> arranged a <strong>silver goblet</strong> with simple accompaniments in a spare composition. His mastery of reflected light on metal surfaces gives the goblet a quiet glow against a muted background." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. The museum holds a well-curated collection of 18th-century French painting." },
    { question: "How did Chardin paint metal so convincingly?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> used <strong>subtle tonal shifts</strong> and soft-edged highlights rather than sharp reflections. This approach gives his metalware a more natural, atmospheric quality than the hard-edged precision of earlier still life painters." }
  ],
  'jean-baptiste-simeon-chardin-woman-drawing-water-from-an-urn': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>woman filling a vessel from a large urn</strong>, a quiet domestic moment rendered with dignity. His genre scenes elevate everyday tasks into subjects worthy of serious painting." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden. The museum holds an important collection of French 18th-century art." },
    { question: "How does Chardin's genre painting compare to Dutch examples?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> admired Dutch genre painters like Vermeer and Ter Borch. His French version strips away narrative and anecdote, focusing instead on <strong>form, light, and quiet concentration</strong> in a way that feels almost meditative." }
  ],
  'jean-baptiste-simeon-chardin-the-buffet': [
    { question: "What does The Buffet depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>laden table</strong> with fruit, silverware, and serving dishes. It's one of his more elaborate still lifes, showing he could handle complex arrangements while maintaining his trademark restraint." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. This was one of the works that earned <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> admission to the French Academy in 1728." },
    { question: "Was The Buffet important for Chardin's career?", answer: "Yes. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> presented this and another still life at his <strong>Academy admission</strong>. The works were so accomplished that he was accepted the same day, an unusual honor that launched his professional reputation." }
  ],
  'jean-baptiste-simeon-chardin-still-life-of-kitchen-utensils': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> arranged <strong>common kitchen utensils</strong> into a carefully balanced composition. Pots, ladles, and other tools become objects of contemplation under his quiet, even light." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford, England's oldest public museum, with a strong collection of European fine art." },
    { question: "Why paint kitchen utensils?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> found beauty in <strong>ordinary objects</strong> that other painters ignored. His kitchen scenes celebrate the textures and forms of daily life, proving that great art doesn't require grand subjects." }
  ],
  'jean-baptiste-simeon-chardin-still-life-with-cat-and-rayfish': [
    { question: "What does Still Life with Cat and Rayfish show?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>cat confronting a rayfish</strong> on a kitchen table, alongside oysters and other food. The rayfish's strange, almost human-looking face adds an unsettling note to the domestic scene." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted several versions of this subject." },
    { question: "Why is the rayfish subject famous?", answer: "The <strong>rayfish</strong> was one of <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin's</strong></a> earliest and most striking subjects. Its bizarre appearance, with a face-like underside, created a memorable contrast with the sleek cat and ordinary kitchen setting. Diderot praised these works highly." }
  ],
  'jean-baptiste-simeon-chardin-lady-sealing-a-letter': [
    { question: "What does Lady Sealing a Letter depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>woman sealing a letter</strong> with wax, absorbed in a simple task. The soft light and careful attention to gesture give the scene an intimate, unhurried quality." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/schloss-charlottenburg-berlin-germany\"><strong>Schloss Charlottenburg</strong></a> in Berlin. Frederick the Great of Prussia was an admirer of <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin's</strong></a> work." },
    { question: "How does this compare to Chardin's still lifes?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> brought the same <strong>quiet observation</strong> to his figure paintings as to his still lifes. The woman is painted with the same care he'd give a silver pot: precise, gentle, and free of sentimentality." }
  ],
  'jean-francois-millet-young-woman': [
    { question: "What does Young Woman depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>portrait of a young woman</strong>, showing his skill with figure work before he became famous for peasant subjects. His early portraits reveal solid academic training and sensitive observation." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> early portraits and figure studies are less well-known than his peasant scenes but valued by collectors." },
    { question: "What is Millet best known for?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> is celebrated for paintings of <strong>rural laborers</strong> like The Gleaners and The Angelus. He was a key figure in the <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> movement and the Barbizon school, influencing Van Gogh profoundly." }
  ],
  'jean-francois-millet-portrait-of-a-man': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>male portrait</strong> with sober, direct observation. Before settling on peasant subjects, he worked as a portrait painter, and these early works show his strong grasp of character and form." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. The gallery holds a range of <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> work." },
    { question: "Why did Millet shift from portraits to peasant scenes?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> moved to <strong>Barbizon</strong> near the Forest of Fontainebleau in 1849 and began painting the rural workers he lived among. He felt their labor and dignity deserved the same serious treatment traditionally given to historical and mythological subjects." }
  ],
  'jean-francois-millet-selfportrait': [
    { question: "What does Millet's Self-Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> presented himself with the <strong>honest directness</strong> he brought to all his subjects. No flattery or pretension, just a straightforward look at the artist who would become one of France's most important <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painters." },
    { question: "Where is this self-portrait held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france\"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, near <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> birthplace in Normandy." },
    { question: "What was Millet's background?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> came from a <strong>Norman peasant family</strong>. His rural upbringing gave him firsthand knowledge of the agricultural labor he later depicted. He never forgot his roots, and his art reflects genuine respect for working people." }
  ],
  'jean-francois-millet-the-rock-of-castel-vendon': [
    { question: "What does The Rock of Castel Vendon show?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>rocky coastal landscape</strong> from his native Normandy. While best known for agricultural scenes, he also captured the rugged Norman coastline with the same earthy honesty." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france\"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, which holds the most important collection of <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> work outside Paris." },
    { question: "Did Millet paint many landscapes?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> produced <strong>landscapes throughout his career</strong>, particularly of the Barbizon area and Normandy. His landscape work is less famous than his figure paintings but shows the same feeling for land, weather, and natural form." }
  ],
  'jean-francois-millet-the-bather': [
    { question: "What does The Bather depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>female figure bathing</strong>, an unusual subject for an artist associated with peasant labor. His nudes show the influence of his academic training and a physicality that differs from the idealized nudes of salon painters." },
    { question: "Where is this work held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> nudes and early figure studies are rarer on the market than his better-known peasant scenes." },
    { question: "How does this fit with Millet's other work?", answer: "Before focusing on <strong>rural subjects</strong>, <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted nudes, portraits, and mythological scenes. These early works show an artist experimenting with different genres before finding his signature subject in the lives of French peasants." }
  ],
  'jean-francois-millet-the-sower': [
    { question: "What does The Sower depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>peasant striding across a field</strong>, scattering seed with a powerful gesture. The figure is monumental, given the heroic scale usually reserved for kings and gods. It became an icon of <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painting." },
    { question: "Where is The Sower displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. The painting deeply influenced Van Gogh, who made multiple copies of it." },
    { question: "Why was The Sower controversial?", answer: "When exhibited in 1850, critics saw the powerful <strong>laboring figure</strong> as politically radical. Showing a peasant with such dignity and force made some viewers uneasy during a period of social upheaval in France. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> insisted he was painting truth, not politics." }
  ],
  'jean-francois-millet-the-winnower': [
    { question: "What is The Winnower about?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>farm worker separating grain from chaff</strong> by tossing it in the air. The figure's physical effort is rendered with a directness that shocked Parisian audiences more familiar with polished salon nudes." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, alongside other major works of French <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a>." },
    { question: "How does this work fit in Millet's career?", answer: "The Winnower was an early <strong>peasant subject</strong> that helped establish <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet's</strong></a> reputation. Exhibited at the 1848 Salon, it signaled his commitment to depicting agricultural labor as a worthy subject for high art." }
  ],
  'jean-francois-millet-the-blacksmith-and-his-bride': [
    { question: "What does The Blacksmith and His Bride depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted a <strong>blacksmith with his new bride</strong>, combining portrait and genre traditions. The work shows working-class life with the dignity and seriousness he brought to all his peasant subjects." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> painted many scenes of rural craft and labor that remain in private hands." },
    { question: "Did Millet paint many craftsmen?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> depicted various <strong>rural trades</strong> alongside his famous agricultural scenes. Blacksmiths, shepherds, and woodcutters all appear in his work, reflecting the full range of labor in the French countryside." }
  ],
  'jean-honore-fragonard-the-seesaw': [
    { question: "What does The Seesaw depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> painted figures enjoying a <strong>seesaw in a garden</strong>, full of the playful energy and flirtatious atmosphere that define <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> art. The loose brushwork and warm colors create a sense of spontaneous pleasure." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, which holds a fine collection of 18th-century French painting." },
    { question: "What is Fragonard known for?", answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> was the last great painter of the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>. His virtuoso brushwork, amorous subjects, and sunlit gardens made him hugely popular before the French Revolution swept away the world he depicted." }
  ],
  'jean-honore-fragonard-the-laundresses': [
    { question: "What does The Laundresses show?", answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> painted <strong>women doing laundry</strong>, a more humble subject than his famous amorous scenes. His rapid, energetic brushwork gives the scene a vitality that anticipates Impressionism by a century." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. The work shows a side of <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> beyond his better-known aristocratic fantasies." },
    { question: "Did Fragonard only paint aristocratic subjects?", answer: "No. While famous for <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> garden scenes, <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> also painted <strong>landscapes, domestic scenes, and studies of ordinary people</strong>. His range was wider than his reputation suggests." }
  ],
  'jean-honore-fragonard-rinaldo-in-the-garden-of-the-palace-of-armida': [
    { question: "What literary scene does this depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> illustrated a scene from Tasso's <strong>Jerusalem Delivered</strong>: the knight Rinaldo enchanted in the sorceress Armida's garden. The lush vegetation and romantic atmosphere are perfectly suited to <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> taste." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. Literary and mythological subjects from <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> are prized by collectors for their exuberant brushwork and romantic spirit." },
    { question: "Why was the Armida story popular with painters?", answer: "The tale of a <strong>beautiful sorceress</strong> seducing a Christian knight combined romance, magic, and moral tension. It appealed to <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> painters like <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> who loved painting lush gardens, beautiful women, and enchanted atmospheres." }
  ],
  'jean-leon-gerome-the-virgin-the-infant-jesus-and-st-john': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> painted a <strong>Madonna and Child with the young St. John</strong>, a traditional religious subject rendered with his characteristic precision. It's an unusual choice for an artist best known for Orientalist and historical scenes." },
    { question: "Where is this work held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme's</strong></a> religious works are less well-known than his Orientalist paintings but show his range as an academic painter." },
    { question: "What is Gérôme known for?", answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> was one of the most successful <strong>French academic painters</strong> of the 19th century. He's best known for highly detailed scenes of ancient Rome, the Middle East, and North Africa, painted with almost photographic precision." }
  ],
  'jean-leon-gerome-young-greeks-attending-a-cock-fight': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> painted <strong>young Greeks watching a cockfight</strong>, combining classical setting with genre-like observation. The work launched his career when it won a medal at the 1847 Salon." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It's one of <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme's</strong></a> breakthrough works from early in his career." },
    { question: "Why was this painting important for Gérôme?", answer: "The <strong>1847 Salon medal</strong> established <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> as a rising star. The painting's blend of archaeological accuracy and sensual beauty set the template for the Neo-Grec style he helped define." }
  ],
  'jean-leon-gerome-woman39s-head-with-ram-horns': [
    { question: "What is this painting?", answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> painted a <strong>woman's head adorned with ram horns</strong>, a fantastical or mythological study. The precise rendering combined with the strange subject shows his technical skill applied to imaginative content." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-nantes-nantes-france\"><strong>Musée des Beaux-Arts de Nantes</strong></a> in France. Regional French museums hold many works by major academic painters like <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a>." },
    { question: "Did Gérôme paint many fantastical subjects?", answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> occasionally ventured into <strong>mythological or symbolic territory</strong>, but he's primarily remembered for historical and Orientalist scenes. Studies like this one show a more experimental side of his practice." }
  ],
  'joachim-patinir-st-jerome-in-rocky-landscape': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> placed <strong>St. Jerome</strong> as a small figure within a vast, rocky landscape. The saint is almost secondary to the panoramic view, reflecting Patinir's pioneering focus on landscape as the true subject of painting." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir's</strong></a> works are rare and highly valued in major collections." },
    { question: "Why is Patinir important in art history?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> is considered the first Western painter to make <strong>landscape the dominant element</strong> in his pictures. Working in the early 16th century, he pioneered the \"world landscape\" format that influenced generations of Northern painters." }
  ],
  'joachim-patinir-rest-during-the-flight-to-egypt': [
    { question: "What scene does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> painted the <strong>Holy Family resting</strong> during their flight to Egypt, set within one of his signature panoramic landscapes. The vast, bluish-green vista dwarfs the sacred figures, making the land itself the real subject." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds important works by early Netherlandish painters collected by the Spanish crown." },
    { question: "What is a 'world landscape'?", answer: "It's a format <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> helped create: a <strong>vast panoramic view</strong> seen from a high vantage point, with small figures and multiple zones of distance receding into blue-green haze. It influenced Bruegel and later landscape painters." }
  ],
  'joachim-patinir-rest-of-the-holy-family-on-the-flight-into-egypt': [
    { question: "How does this differ from Patinir's other Flight into Egypt?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> painted multiple versions of this subject, each with a <strong>different landscape setting</strong>. The Holy Family provided a pretext for his real interest: creating sweeping panoramic views with rich detail across foreground, middle, and background." },
    { question: "Where is this version kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir's</strong></a> surviving works are few, perhaps only about 25, making any confirmed painting by him extremely valuable." },
    { question: "How many paintings did Patinir produce?", answer: "Only about <strong>25 paintings</strong> are firmly attributed to <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a>. His early death around 1524 limited his output, but his influence on landscape painting far outweighs the small number of works he left behind." }
  ],
  'joachim-patinir-st-jerome-in-the-desert': [
    { question: "What does St. Jerome in the Desert show?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> depicted <strong>St. Jerome</strong> as a penitent in the wilderness, surrounded by a spectacular rocky landscape. The saint's small scale emphasizes the vastness and grandeur of the natural world around him." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The painting represents <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir's</strong></a> signature approach of subordinating figures to landscape." },
    { question: "Why did Patinir paint St. Jerome repeatedly?", answer: "<strong>St. Jerome in the wilderness</strong> was an ideal subject for <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a>: it required a remote, dramatic natural setting and only a small figure. The theme let him focus on what he did best, painting vast, detailed landscapes." }
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
