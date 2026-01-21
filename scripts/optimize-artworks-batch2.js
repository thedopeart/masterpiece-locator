const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "edouard-vuillard-madame-vuillard-cousant": {
    description: `<p><a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> painted this intimate portrait of his mother sewing, a subject he returned to obsessively throughout his career. She sits absorbed in her needlework, surrounded by the patterned fabrics and wallpapers that give Vuillard's interiors their distinctive claustrophobic warmth. Soft <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> blend figure and setting into a unified surface.</p>

<p>Vuillard lived with his mother until her death in 1928, and she appears in hundreds of his paintings. As a founding member of Les Nabis, he developed a decorative style influenced by Japanese prints and Gauguin. This work remains in a private collection.</p>`,
    faqs: [
      { question: "Who is depicted in Vuillard's painting?", answer: "The painting shows Vuillard's <strong>mother, Marie</strong>, who ran a dressmaking business. She appears in hundreds of his works, as he lived with her until her death in 1928." },
      { question: "What art movement was Vuillard part of?", answer: "Vuillard was a founding member of <strong>Les Nabis</strong>, a Post-Impressionist group influenced by Gauguin and Japanese prints. They emphasized decorative, flat patterns." },
      { question: "What subjects did Vuillard paint?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Vuillard</strong></a> specialized in <strong>domestic interiors</strong>, often featuring his mother sewing amid patterned wallpapers and fabrics." }
    ]
  },
  "juan-de-valdes-leal-the-imaculate-conception": {
    description: `<p><a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this vision of the Immaculate Conception, showing the Virgin Mary triumphant amid swirling clouds and adoring angels. She stands on a crescent moon, dressed in traditional <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> and white robes, her hands clasped in prayer. Cherubs surround her in a spiral of golden light.</p>

<p>The Immaculate Conception was a favorite subject in Counter-Reformation Spain, where the doctrine held particular devotion. Valdés Leal's dramatic <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style, with its energetic brushwork and theatrical lighting, made him ideal for such visionary subjects. The painting hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is Valdés Leal's Immaculate Conception?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, which houses Spain's greatest collection of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious art." },
      { question: "What does the Immaculate Conception depict?", answer: "It shows the <strong>Virgin Mary</strong> conceived without original sin, standing on a crescent moon surrounded by angels. This was a major devotional subject in Catholic Spain." },
      { question: "What style is this painting?", answer: "Valdés Leal painted in the Spanish <strong>Baroque style</strong>, characterized by dramatic lighting, energetic brushwork, and intense religious emotion." }
    ]
  },
  "frida-kahlo-portrait-of-dr-leo-eloesser": {
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of her trusted friend and physician Dr. Leo Eloesser in 1931 during her first visit to San Francisco. The doctor stands beside a model sailing ship named "Los Tres Amigos" (The Three Friends), symbolizing the friendship between Kahlo, Eloesser, and Diego Rivera. A dedication in the corner reads "To my great friend."</p>

<p>Kahlo met Eloesser when hospitalized for leg pain in November 1930. Their friendship lasted twenty-four years, with the doctor advising on her many health crises. The painting now hangs at Zuckerberg San Francisco General Hospital, where Eloesser practiced for thirty-six years.</p>`,
    faqs: [
      { question: "Who was Dr. Leo Eloesser?", answer: "Eloesser was a pioneering <strong>San Francisco thoracic surgeon</strong> who became <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo's</strong></a> trusted doctor and lifelong friend. Their friendship lasted twenty-four years." },
      { question: "Where is Kahlo's portrait of Dr. Eloesser?", answer: "The painting hangs at <strong>Zuckerberg San Francisco General Hospital</strong>, where Eloesser practiced for thirty-six years. It was donated to UCSF." },
      { question: "What does the ship in the portrait symbolize?", answer: "The model ship is named <strong>\"Los Tres Amigos\"</strong> (The Three Friends), representing the friendship between Kahlo, Dr. Eloesser, and Diego Rivera." }
    ]
  },
  "jusepe-de-ribera-st-paul-the-hermit": {
    description: `<p><a href="/apps/masterpieces/artist/jusepe-de-ribera"><strong>Jusepe de Ribera</strong></a> painted this powerful image of Saint Paul the Hermit, the first Christian hermit who spent ninety years in the Egyptian desert. The aged saint sits with his long white beard and weathered skin, his body wasted by decades of fasting and prayer. A raven, which according to legend brought him daily bread, appears nearby.</p>

<p>Ribera spent his career in Naples, where he became famous for intensely realistic depictions of elderly saints and martyrs. His <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> tenebrism, learned from Caravaggio's followers, creates dramatic contrasts of light and shadow. The painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who was Saint Paul the Hermit?", answer: "Paul of Thebes was the <strong>first Christian hermit</strong>, living ninety years in the Egyptian desert. According to legend, a raven brought him bread daily." },
      { question: "Where is Ribera's St. Paul the Hermit?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris among their collection of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." },
      { question: "What was Ribera known for painting?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> specialized in <strong>elderly saints and martyrs</strong> rendered with intense realism, showing weathered skin and aging bodies." }
    ]
  },
  "akseli-gallen-kallela-in-the-sauna": {
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted this scene of Finnish sauna culture, capturing a moment of ritual bathing that lies at the heart of Nordic identity. Steam rises in the dim interior while figures relax on wooden benches, their bodies emerging from soft light. The sauna's warmth contrasts with the cold Finnish winter outside.</p>

<p>Gallen-Kallela was Finland's national artist, famous for paintings inspired by the Kalevala epic. But his early work documented peasant life with the realism he learned studying in Paris. The painting belongs to the <a href="/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland"><strong>Finnish National Gallery</strong></a> in Helsinki.</p>`,
    faqs: [
      { question: "Who painted In the Sauna?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> painted this work. He was Finland's most important national artist, famous for Kalevala illustrations." },
      { question: "Where is Gallen-Kallela's sauna painting?", answer: "The painting is at the <a href=\"/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland\"><strong>Finnish National Gallery</strong></a> in Helsinki, which holds the largest collection of Finnish art." },
      { question: "Why is the sauna important in Finnish culture?", answer: "The sauna is central to <strong>Finnish identity and ritual</strong>. Gallen-Kallela's painting documents this tradition as part of his early realist work on peasant life." }
    ]
  },
  "george-bellows-pennsylvania-station-excavation": {
    description: `<p><a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a> painted this dramatic view of the Pennsylvania Station excavation around 1907-1908, showing workers dwarfed by the massive pit they had torn from Manhattan's Tenderloin district. Steam and smoke billow from the eight-acre hole while laborers toil in the winter cold. The scene has an almost infernal quality.</p>

<p>Bellows was associated with the Ashcan School, painters who documented urban America's grittier realities. His dark palette and vigorous brushwork capture both the excitement and ambivalence of rapid urban transformation. The grand station that rose here was demolished in 1963. This painting belongs to the <a href="/apps/masterpieces/museum/brooklyn-museum-new-york-city-ny-us"><strong>Brooklyn Museum</strong></a>.</p>`,
    faqs: [
      { question: "What does Pennsylvania Station Excavation show?", answer: "The painting depicts the <strong>massive excavation</strong> for Penn Station in Manhattan around 1907-1908. Workers appear dwarfed by the eight-acre pit they've created." },
      { question: "Where is Bellows' excavation painting?", answer: "The painting is at the <a href=\"/apps/masterpieces/museum/brooklyn-museum-new-york-city-ny-us\"><strong>Brooklyn Museum</strong></a> in New York, appropriately near where McKim, Mead & White also designed their building." },
      { question: "What was the Ashcan School?", answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>Bellows</strong></a> was associated with this group of artists who painted <strong>urban American life</strong> in all its gritty, unidealized reality." }
    ]
  },
  "george-frederick-watts-orlando-pursuing-the-fata-morgana": {
    description: `<p><a href="/apps/masterpieces/artist/george-frederick-watts"><strong>George Frederick Watts</strong></a> painted this allegorical scene inspired by Ariosto's epic poem "Orlando Furioso," showing the knight Orlando chasing the sorceress Fata Morgana (Morgan le Fay). The knight pursues a shimmering vision across a dreamlike landscape, his armor gleaming as he reaches toward an ever-receding goal.</p>

<p>Watts was one of Victorian England's most celebrated painters, known for symbolic and allegorical subjects that explored grand themes. His work influenced the Symbolist movement. This painting remains in a private collection, though Watts' studio home is preserved as the Watts Gallery in Surrey.</p>`,
    faqs: [
      { question: "What story does this painting depict?", answer: "It shows a scene from <strong>Ariosto's \"Orlando Furioso\"</strong>: the knight Orlando pursuing the sorceress Fata Morgana (Morgan le Fay), an allegory of chasing illusions." },
      { question: "Who was George Frederick Watts?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>Watts</strong></a> was a leading <strong>Victorian painter</strong> known for symbolic and allegorical subjects. His home is now the Watts Gallery in Surrey." },
      { question: "What style is this painting?", answer: "Watts worked in a <strong>Symbolist-influenced</strong> style, using mythological subjects to explore universal themes of human striving and illusion." }
    ]
  },
  "johannes-vermeer-the-guitar-player": {
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this intimate scene of a young woman playing guitar around 1672, one of his final works. She looks out toward the viewer with a slight smile, her curled hair framing her face as her fingers rest on the strings. A landscape painting hangs on the wall behind her, and soft light enters from the left.</p>

<p>This is one of only thirty-seven known Vermeer paintings. The sitter may be his eldest daughter Maria, then seventeen or eighteen. In 1974, the painting was stolen from <a href="/apps/masterpieces/museum/kenwood-house"><strong>Kenwood House</strong></a> and held for ransom before Scotland Yard recovered it in a London cemetery.</p>`,
    faqs: [
      { question: "Where is Vermeer's Guitar Player?", answer: "The painting hangs at <a href=\"/apps/masterpieces/museum/kenwood-house\"><strong>Kenwood House</strong></a> in London as part of the Iveagh Bequest. It's one of only <strong>thirty-seven known Vermeers</strong>." },
      { question: "Was The Guitar Player ever stolen?", answer: "Yes, in <strong>1974</strong> it was stolen from Kenwood House and held for ransom. Scotland Yard recovered it in a London cemetery after two months." },
      { question: "Who is the woman in the painting?", answer: "The sitter may be <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> eldest daughter <strong>Maria</strong>, painted when she was seventeen or eighteen years old." }
    ]
  },
  "edwin-landseer-the-falcon": {
    description: `<p><a href="/apps/masterpieces/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> painted this striking portrait of a falcon, capturing the bird's fierce dignity with the same psychological insight he brought to his famous dog portraits. The raptor perches alert, its feathers rendered with precise detail, its hooked beak and sharp talons suggesting controlled power. The <a href="https://luxurywallart.com/collections/bird-art" target="_blank" rel="noopener"><strong>bird</strong></a> commands the composition.</p>

<p>Landseer was Queen Victoria's favorite animal painter, famous for works like "Monarch of the Glen." His ability to suggest personality and emotion in animal subjects made him enormously popular. This painting remains in a private collection.</p>`,
    faqs: [
      { question: "Who painted The Falcon?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a> painted this work. He was Victorian England's most famous <strong>animal painter</strong> and a favorite of Queen Victoria." },
      { question: "What was Landseer known for?", answer: "Landseer specialized in <strong>animal portraits</strong> with psychological depth. His most famous work is \"Monarch of the Glen,\" depicting a Scottish stag." },
      { question: "Where is Landseer's Falcon painting?", answer: "This painting remains in a <strong>private collection</strong>. Major Landseer works can be seen at Tate Britain and the Royal Collection." }
    ]
  },
  "georges-de-la-tour-payment-of-taxes": {
    description: `<p><a href="/apps/masterpieces/artist/georges-de-la-tour"><strong>Georges de La Tour</strong></a> painted this tense scene of tax collection around 1620, showing an elderly man paying a debt to a group of intimidating figures. The composition suggests threat and coercion, with the taxpayer seemingly pressured by the men surrounding him. Strong contrasts of light and shadow create dramatic tension.</p>

<p>This is La Tour's earliest known signed work, discovered only in 1972. The French <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> master is celebrated for candlelit nocturnes, but this early daylight scene shows his roots in Caravaggesque realism. The painting hangs at the <a href="/apps/masterpieces/museum/lviv-national-art-gallery-lviv-ukraine"><strong>Lviv National Art Gallery</strong></a> in Ukraine.</p>`,
    faqs: [
      { question: "Where is Georges de La Tour's Payment of Taxes?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/lviv-national-art-gallery-lviv-ukraine\"><strong>Lviv National Art Gallery</strong></a> in Ukraine. It was identified as a La Tour only in <strong>1972</strong>." },
      { question: "What is significant about this painting?", answer: "This is La Tour's <strong>earliest known signed work</strong>. It shows his early Caravaggesque style before he developed his famous candlelit nocturnes." },
      { question: "What style is Payment of Taxes?", answer: "La Tour painted in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> <strong>tenebrism style</strong>, using dramatic contrasts between light and dark learned from Caravaggio's followers." }
    ]
  },
  "edgar-degas-repetition-of-the-dance-detail": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured this rehearsal scene in 1886, showing ballet dancers preparing for performance in the Paris Opera. Young dancers stretch and adjust their costumes while a ballet master observes. The composition's unusual cropping, with figures cut off at the edges, reflects Degas' interest in Japanese prints and photography.</p>

<p>Degas spent years backstage at the Opera, documenting the rigorous work behind the glamour of performance. His <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> colleagues painted landscapes; Degas preferred the artificial light of theaters and studios. This detail belongs to the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre Museum</strong></a>.</p>`,
    faqs: [
      { question: "What does Degas' Repetition of the Dance show?", answer: "The painting captures <strong>ballet dancers rehearsing</strong> at the Paris Opera. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> spent years documenting the work behind performance." },
      { question: "Where is this Degas painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris among their collection of Impressionist paintings." },
      { question: "Why did Degas paint so many dancers?", answer: "Degas was fascinated by <strong>movement and the body</strong>. He spent years backstage at the Paris Opera, creating hundreds of ballet works." }
    ]
  },
  "gustave-courbet-the-embouchment-of-seine": {
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this view of the Seine's mouth where the river meets the sea, capturing the dramatic meeting of fresh and salt water. The sky dominates the composition, filled with clouds that dwarf the low coastline below. Courbet's thick impasto creates tangible textures in both water and atmosphere.</p>

<p>Courbet pioneered <a href="/apps/masterpieces/movement/realism"><strong>Realism</strong></a>, rejecting idealized subjects for direct observation of nature. He painted many seascapes along the Normandy coast, where light and weather changed constantly. This work hangs at the <a href="/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts de Lille</strong></a>.</p>`,
    faqs: [
      { question: "What does Courbet's painting depict?", answer: "The painting shows the <strong>Seine River meeting the sea</strong> on the Normandy coast. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> painted many seascapes in this region." },
      { question: "Where is The Embouchment of Seine?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in northern France." },
      { question: "What movement did Courbet lead?", answer: "Courbet pioneered <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a>, rejecting idealized academic subjects in favor of direct observation of contemporary life and nature." }
    ]
  },
  "gustave-courbet-the-hammock": {
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this sensuous image of a woman reclining in a hammock, her body relaxed amid lush summer foliage. Dappled light plays across her white dress as she rests in the shade. The scene suggests lazy afternoon pleasure, far from the political subjects that often marked Courbet's work.</p>

<p>Courbet painted women with frank sensuality that sometimes scandalized his contemporaries. His <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> approach treated bodies as material fact rather than idealized form. The painting belongs to the <a href="/apps/masterpieces/museum/oskar-reinhart-foundation-winterthur-switzerland"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland.</p>`,
    faqs: [
      { question: "Who painted The Hammock?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> painted this sensuous scene. The founder of <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> often depicted women with frank physical presence." },
      { question: "Where is Courbet's Hammock painting?", answer: "The painting is at the <a href=\"/apps/masterpieces/museum/oskar-reinhart-foundation-winterthur-switzerland\"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland, which holds a fine collection of French painting." },
      { question: "What style is The Hammock?", answer: "Courbet painted in a <strong>Realist style</strong>, treating the reclining figure with sensuous materiality rather than classical idealization." }
    ]
  },
  "gustave-dore-little-red-riding-hood": {
    description: `<p><a href="/apps/masterpieces/artist/gustave-dore"><strong>Gustave Doré</strong></a> created this haunting image of Little Red Riding Hood meeting the wolf in the forest, one of the most memorable illustrations from Charles Perrault's fairy tales. The young girl stands innocent and vulnerable while the cunning wolf looms beside her, their encounter charged with danger. Dark trees frame the ominous meeting.</p>

<p>Doré was the nineteenth century's most influential book illustrator, creating over ten thousand engravings for works including Dante's Divine Comedy and the Bible. His fairy tale illustrations remain definitive. This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-victoria-ngv-melbourne-austral"><strong>National Gallery of Victoria</strong></a> in Melbourne.</p>`,
    faqs: [
      { question: "Who illustrated Little Red Riding Hood?", answer: "<a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Gustave Doré</strong></a> created this image for Perrault's fairy tales. He was the <strong>nineteenth century's most famous illustrator</strong>." },
      { question: "Where is Doré's Little Red Riding Hood?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-victoria-ngv-melbourne-austral\"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia." },
      { question: "What else did Gustave Doré illustrate?", answer: "Doré illustrated over <strong>two hundred books</strong>, including Dante's Divine Comedy, the Bible, Don Quixote, and Paradise Lost." }
    ]
  },
  "egon-schiele-view-into-the-apartment-of-leopold-and-marie-cziha": {
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted this unusual interior view into the apartment of Leopold and Marie Czihaczek, showing a glimpse into private domestic space. The composition frames the room through a doorway or window, creating a voyeuristic perspective. Schiele's angular lines and muted palette give the ordinary scene an unsettling edge.</p>

<p>Though famous for his provocative figure work, Schiele also painted landscapes and interiors with the same nervous intensity. His Austrian <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style influenced generations of artists. The painting belongs to the <a href="/apps/masterpieces/museum/belvedere-vienna-austria"><strong>Belvedere</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Who painted this Vienna apartment scene?", answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> painted this view into the Czihaczek apartment. Though known for figures, he also painted <strong>interiors and landscapes</strong>." },
      { question: "Where is Schiele's apartment painting?", answer: "The painting belongs to the <a href=\"/apps/masterpieces/museum/belvedere-vienna-austria\"><strong>Belvedere</strong></a> in Vienna, which holds the world's largest collection of Schiele's work." },
      { question: "What movement was Schiele part of?", answer: "Schiele was a leading Austrian <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a>. His angular, nervous style influenced generations of artists." }
    ]
  },
  "el-greco-vincenzo-anastagi": {
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted this full-length portrait of Vincenzo Anastagi around 1575, depicting the Knight of Malta in his ceremonial armor. Light blazes off the breastplate in a single dramatic stroke while the subject's sunburnt face and muscular calves speak to his military experience. His confident stance fills the tall canvas.</p>

<p>Anastagi had distinguished himself during the 1565 Siege of Malta against the Ottoman Empire. El Greco painted him during his Roman period, seeking patronage after expulsion from the Farnese household. This is one of only two full-length portraits by the master. It hangs at the <a href="/apps/masterpieces/museum/frick-collection-new-york-city-ny-us"><strong>Frick Collection</strong></a> in New York.</p>`,
    faqs: [
      { question: "Who was Vincenzo Anastagi?", answer: "Anastagi was a <strong>Knight of Malta</strong> famous for defending the island during the 1565 Ottoman siege. He later became Sergeant Major of Castel Sant'Angelo in Rome." },
      { question: "Where is El Greco's portrait of Anastagi?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/frick-collection-new-york-city-ny-us\"><strong>Frick Collection</strong></a> in New York. It's one of only <strong>two full-length portraits</strong> by El Greco." },
      { question: "When did El Greco paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> painted this around <strong>1575</strong> during his Roman period, before moving to Spain where he spent the rest of his career." }
    ]
  },
  "hans-holbein-younger-title-page-in-the-form-of-a-renaissance-niche": {
    description: `<p><a href="/apps/masterpieces/artist/hans-holbein-younger"><strong>Hans Holbein the Younger</strong></a> designed this elaborate title page in the form of a Renaissance architectural niche, demonstrating his versatility beyond portraiture. Classical columns frame an ornamental space filled with decorative motifs, cherubs, and allegorical figures. The design was intended for book printing.</p>

<p>Holbein worked extensively as a book illustrator early in his career, creating woodcuts for Basel publishers before finding fame as a portraitist in England. His <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> designs combined Italian architectural forms with Northern precision. This work belongs to the <a href="/apps/masterpieces/museum/kunstmuseum-basel-basel-switzerland"><strong>Kunstmuseum Basel</strong></a>.</p>`,
    faqs: [
      { question: "What is this Holbein work?", answer: "This is a <strong>decorative title page design</strong> for book printing, showing <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein's</strong></a> skill as an illustrator before he became famous for portraits." },
      { question: "Where is Holbein's title page design?", answer: "The work is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel-basel-switzerland\"><strong>Kunstmuseum Basel</strong></a>, which holds the world's largest collection of Holbein's work." },
      { question: "Did Holbein only paint portraits?", answer: "No, Holbein also designed <strong>book illustrations, woodcuts</strong>, and decorative works. He worked for Basel publishers before becoming a portraitist in England." }
    ]
  },
  "edgar-degas-the-millinery-shop": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this scene of a millinery shop between 1879 and 1886, showing a woman examining hats amid a display of fashionable headwear. Whether she's a customer or shop worker remains deliberately ambiguous. Colorful hats in <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>bright greens, yellows, and blues</strong></a> dominate the composition.</p>

<p>At 100 x 110 cm, this is Degas' largest work on milliners, a subject he explored in twenty-seven paintings. X-rays reveal he originally showed the woman as a bourgeois customer before reworking her identity. The painting sold for 50,000 francs in 1913. It hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What does Degas' Millinery Shop show?", answer: "A woman examines hats in a fashionable Paris shop. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> deliberately left it unclear whether she's a <strong>customer or worker</strong>." },
      { question: "Where is The Millinery Shop?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. At 100 x 110 cm, it's Degas' <strong>largest millinery painting</strong>." },
      { question: "How many millinery paintings did Degas create?", answer: "Degas created <strong>twenty-seven works</strong> depicting milliners and hat shops over three decades. He was fascinated by these \"aristocrats of workwomen.\"" }
    ]
  },
  "hendrick-avercamp-schaatsenrijden-in-een-dorp": {
    description: `<p><a href="/apps/masterpieces/artist/hendrick-avercamp"><strong>Hendrick Avercamp</strong></a> painted this lively winter scene showing villagers ice skating on a frozen canal, a subject he pioneered as an independent genre. Dozens of figures populate the ice: children playing, couples skating arm in arm, vendors, and townsfolk enjoying the rare frozen weather. A bare tree frames the composition against a pale winter sky.</p>

<p>Avercamp, known as "de Stomme van Kampen" (the Mute of Kampen) because he was deaf, specialized entirely in winter landscapes during the Little Ice Age. His detailed scenes document <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> winter life. The painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Who painted this Dutch winter scene?", answer: "<a href=\"/apps/masterpieces/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a> painted this work. Called \"the Mute of Kampen,\" he was <strong>deaf from birth</strong> and specialized in winter scenes." },
      { question: "Where is Avercamp's skating scene?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds the finest collection of Dutch Golden Age painting." },
      { question: "Why did Avercamp paint so many winter scenes?", answer: "Avercamp worked during the <strong>Little Ice Age</strong>, when severe winters froze Dutch canals. He pioneered winter landscapes as an independent genre." }
    ]
  },
  "ford-madox-brown-jacob-and-joseph39s-coat": {
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this biblical scene showing Jacob receiving Joseph's bloodstained coat from his jealous brothers, who have sold Joseph into slavery and told their father he was killed by wild animals. Jacob's anguish dominates the composition as he clutches the evidence of his beloved son's apparent death.</p>

<p>Brown was closely associated with the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a> though never an official member. His detailed, jewel-toned style and moral seriousness aligned with their ideals. This painting remains in a private collection.</p>`,
    faqs: [
      { question: "What biblical story does this painting show?", answer: "It depicts <strong>Joseph's brothers</strong> bringing his bloodstained coat to their father Jacob. They've sold Joseph into slavery but claim he was killed by animals." },
      { question: "Who painted Jacob and Joseph's Coat?", answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> painted this work. He was closely associated with the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> movement." },
      { question: "Where is this Ford Madox Brown painting?", answer: "This painting remains in a <strong>private collection</strong>. Major Brown works can be seen at Tate Britain and Manchester Art Gallery." }
    ]
  }
};

async function main() {
  console.log("Updating 20 artworks with descriptions and FAQs...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artworkUpdates)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log("✓ Updated: " + artwork.title);
      updated++;
    } else {
      console.log("✗ Not found: " + slug);
    }
  }

  console.log("\nUpdated " + updated + " artworks");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
