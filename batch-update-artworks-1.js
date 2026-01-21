const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'claude-monet-waterloo-bridge',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Waterloo Bridge between 1899-1904 during his London campaigns. The <strong>atmospheric study</strong> captures the bridge emerging through Thames fog, with industrial smokestacks creating hazy silhouettes in the distance. Monet worked from his room at the Savoy Hotel, observing how light transformed the urban scene hour by hour.</p>
<p>This painting belongs to a series of over forty Waterloo Bridge views. Monet applied paint in <strong>broken brushstrokes</strong>, building layers of color to suggest fog diffusing light. Now at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This Waterloo Bridge canvas hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage holds several of Monet's London series paintings in its <strong>Impressionist collection</strong>." },
      { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> created this during his London campaigns (1899-1904), painting from the Savoy Hotel overlooking the Thames." },
      { question: "How many Waterloo Bridge paintings did Monet create?", answer: "Monet painted over <strong>forty versions</strong> of Waterloo Bridge, each capturing different atmospheric conditions from fog to sunset." }
    ]
  },
  {
    slug: 'valentin-serov-maria-mamontova-riding-a-horse',
    description: `<p><a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov</strong></a> captured Maria Mamontova on horseback in this portrait from the artist's circle at Abramtsevo. The young woman sits confidently in the saddle, rendered with <strong>loose, confident brushwork</strong> that suggests both movement and character. Serov was known for his ability to capture personality in his subjects.</p>
<p>The Mamontov family were important patrons of Russian art, hosting artists at their Abramtsevo estate. This painting shows Serov's mastery of <strong>outdoor portraiture</strong>, combining figure and landscape in natural light. The work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Valentin Serov</strong></a> created this work. He was one of Russia's finest portrait painters, known for his psychological insight and <strong>fluid brushwork</strong>." },
      { question: "Who was Maria Mamontova?", answer: "Maria belonged to the <strong>Mamontov family</strong>, wealthy industrialists who patronized Russian artists at their Abramtsevo estate outside Moscow." },
      { question: "Where can I see this painting?", answer: "This work is held in a <strong>private collection</strong>. Other Serov paintings can be seen at the Tretyakov Gallery in Moscow." }
    ]
  },
  {
    slug: 'claude-monet-waterloo-bridge-effect-of-fog',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this fog-shrouded view of Waterloo Bridge during his London visits. The bridge appears as a <strong>ghostly silhouette</strong> through dense Thames mist, with only hints of architecture visible. Monet was fascinated by how London's famous fog transformed solid forms into veils of color.</p>
<p>Working from the Savoy Hotel, Monet observed the same view under changing conditions. This version emphasizes <strong>cool blues and greys</strong> that suggest morning dampness. The painting is part of the <a href="/apps/masterpieces/museum/hermitage"><strong>Hermitage Museum</strong></a> collection in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg houses this work among its significant collection of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> paintings." },
      { question: "When did Monet paint his London series?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> made three painting trips to London between <strong>1899 and 1901</strong>, then finished works in his Giverny studio through 1904." },
      { question: "Why did Monet paint fog?", answer: "London's famous <strong>industrial fog</strong> fascinated Monet because it transformed solid forms into shifting veils of light and color." }
    ]
  },
  {
    slug: 'claude-monet-waterloo-bridge-hazy-sunshine',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> captured Waterloo Bridge as sunlight penetrates London's haze in this luminous canvas. The bridge's arches emerge through <strong>golden atmospheric light</strong>, with the water below reflecting warm tones. This version shows Monet's interest in how fog could both obscure and enhance natural light.</p>
<p>Painted from his Savoy Hotel vantage point, Monet worked on multiple canvases simultaneously, switching between them as conditions changed. The <strong>warm palette</strong> distinguishes this from his cooler fog studies. Now at the <a href="/apps/masterpieces/museum/hermitage"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where can I see this Monet painting?", answer: "This canvas is held at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, which owns multiple works from Monet's <strong>London series</strong>." },
      { question: "How did Monet work on the London series?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> kept multiple canvases ready, switching between them as <strong>light conditions changed</strong> throughout the day." },
      { question: "What makes this version different?", answer: "The <strong>warm golden tones</strong> show sunlight filtering through haze, contrasting with Monet's cooler, greyer fog studies of the same bridge." }
    ]
  },
  {
    slug: 'vasily-surikov-siberian-landscape-torgoshyno',
    description: `<p><a href="/apps/masterpieces/artist/vasily-surikov"><strong>Vasily Surikov</strong></a> painted this view of his native Siberia, depicting the village of Torgoshyno. The artist grew up in Krasnoyarsk and returned to paint the <strong>vast Russian landscape</strong> throughout his career. Snow-covered terrain stretches under a winter sky, capturing the region's harsh beauty.</p>
<p>Surikov is best known for large historical paintings, but his landscapes reveal <strong>deep attachment to Siberian terrain</strong>. The muted palette and expansive composition convey the isolation of the region. This work hangs at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow holds this Siberian landscape among its collection of Russian national art spanning centuries." },
      { question: "Who was Vasily Surikov?", answer: "<a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Vasily Surikov</strong></a> was a major Russian <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter, born in Siberia and known for dramatic historical scenes." },
      { question: "Where is Torgoshyno?", answer: "Torgoshyno is a village near <strong>Krasnoyarsk in Siberia</strong>, the region where Surikov was born and which he painted throughout his life." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-10',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of the Japanese footbridge over his water lily pond at Giverny. The arched bridge, draped in wisteria, curves over <strong>reflective water</strong> surrounded by lush vegetation. Monet painted this subject repeatedly as his eyesight declined, each version growing more abstracted.</p>
<p>By the time of his later bridge paintings, Monet's vision was affected by cataracts. The <strong>thickly applied paint</strong> and bold colors reflect both his fading sight and evolving artistic vision. This version is at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This Japanese Bridge painting hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, which holds several of Monet's <strong>Giverny works</strong>." },
      { question: "Why did Monet paint the bridge so many times?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> returned to the subject for over twenty years, exploring how <strong>light and seasons</strong> transformed the same view." },
      { question: "How did cataracts affect Monet's work?", answer: "Monet's later bridge paintings show <strong>bolder colors and thicker paint</strong> as cataracts changed his perception, creating increasingly abstract compositions." }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-6',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> captured his beloved Japanese footbridge at Giverny in this canvas from his extensive series. The <strong>curved wooden bridge</strong> spans the water lily pond, surrounded by dense plantings that Monet himself designed and cultivated. Water lilies float on the reflective surface below.</p>
<p>Monet's garden became his primary subject in later decades. He controlled every aspect, from the bridge's paint color to plant placement. This version shows his <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> technique of building forms through <strong>layered brushstrokes</strong>. Displayed at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York displays this work. The Met owns multiple paintings from Monet's <strong>water garden series</strong>." },
      { question: "Where was Monet's garden located?", answer: "Monet created his famous water garden at <strong>Giverny</strong>, a village in Normandy, France. The garden and his home are now open to visitors." },
      { question: "When did Monet paint the Japanese bridge?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted his Japanese bridge from <strong>1899 until his death in 1926</strong>, creating dozens of variations." }
    ]
  },
  {
    slug: 'adolph-menzel-the-berlinpotsdam-railway',
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> documented Germany's first major railway line in this 1847 painting. The Berlin-Potsdam Railway, opened in 1838, represented <strong>technological progress</strong> that fascinated the artist. Menzel depicted the train tracks cutting through landscape, with steam and smoke marking the locomotive's path.</p>
<p>Menzel was known for his precise observation and historical accuracy. This painting captures <strong>early industrial Germany</strong> with almost documentary clarity. The work demonstrates his interest in modern life alongside his famous historical subjects. Displayed at the <a href="/apps/masterpieces/museum/alte-nationalgalerie"><strong>Alte Nationalgalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The <a href=\"/apps/masterpieces/museum/alte-nationalgalerie\"><strong>Alte Nationalgalerie</strong></a> in Berlin displays this work among its collection of <strong>19th-century German art</strong>." },
      { question: "Who was Adolph Menzel?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> was a leading German painter of the 19th century, known for historical scenes and <strong>precise realism</strong> in depicting modern life." },
      { question: "What was the Berlin-Potsdam Railway?", answer: "Germany's <strong>first major railway</strong>, opened in 1838, connecting Berlin to Potsdam. It symbolized German industrial progress." }
    ]
  },
  {
    slug: 'lace-maker-netscher',
    description: `<p><a href="/apps/masterpieces/artist/caspar-netscher"><strong>Caspar Netscher</strong></a> depicted a young woman absorbed in delicate lacework in this Dutch Golden Age painting. The figure bends over her pillow, fingers working bobbins with <strong>quiet concentration</strong>. Soft light illuminates her face and the intricate work, typical of Netscher's refined technique.</p>
<p>Netscher specialized in elegant domestic scenes and portraits of the Dutch upper class. This painting shows his mastery of <strong>fabric textures and soft lighting</strong>. The intimate scale invites close viewing of the woman's skilled handwork. Displayed at the <a href="/apps/masterpieces/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is The Lace Maker displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London, known for its superb collection of <strong>Dutch and Flemish paintings</strong>." },
      { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/caspar-netscher\"><strong>Caspar Netscher</strong></a> was a Dutch Golden Age painter who specialized in refined <strong>domestic scenes and portraits</strong>." },
      { question: "Is this related to Vermeer's Lacemaker?", answer: "Both artists painted lacemakers, a popular Dutch subject. <strong>Vermeer's version</strong> is at the Louvre, while Netscher's hangs in London." }
    ]
  },
  {
    slug: 'adriaen-brouwer-peasants-fighting',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captured a brawl among peasants in this lively tavern scene. Figures grapple and shove in <strong>chaotic combat</strong>, faces contorted with anger. Brouwer excelled at depicting the rough entertainments of Flemish village life with energy and dark humor.</p>
<p>The artist led a dissolute life himself and knew his rowdy subjects firsthand. His <strong>rapid brushwork</strong> conveys movement and emotion with remarkable economy. Both Rubens and Rembrandt collected his work. This painting hangs at the <a href="/apps/masterpieces/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "Peasants Fighting hangs at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, which has an excellent collection of <strong>Flemish genre paintings</strong>." },
      { question: "Who was Adriaen Brouwer?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> was a Flemish painter who specialized in <strong>peasant tavern scenes</strong>. Both Rubens and Rembrandt admired and collected his work." },
      { question: "What style is this painting?", answer: "This is a <strong>genre painting</strong> depicting everyday life, a specialty of Dutch and Flemish artists during the 17th century." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-peasants-in-a-tavern',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this scene of peasants gathered in a rustic tavern. Figures drink, smoke, and converse in the <strong>dimly lit interior</strong>, their weathered faces illuminated by filtered light. Van Ostade specialized in such scenes, treating his humble subjects with warmth rather than mockery.</p>
<p>The artist studied under Frans Hals and was influenced by fellow tavern painter Adriaen Brouwer. His <strong>golden brown tonality</strong> and careful attention to light effects distinguish his mature work. This painting is displayed at the <a href="/apps/masterpieces/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich holds this work among its significant collection of Dutch and <strong>Flemish Old Masters</strong>." },
      { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch painter who specialized in <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>peasant scenes</strong></a> and tavern interiors during the Golden Age." },
      { question: "What influenced Van Ostade's style?", answer: "He trained under <strong>Frans Hals</strong> and was influenced by Adriaen Brouwer's energetic tavern scenes, developing a warmer, more sympathetic approach." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-interior-of-a-tavern',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted a typical Dutch tavern interior in this genre painting. Peasants occupy a <strong>humble room</strong> with rough wooden furniture and earthen floor. Light filters through a window, catching pipe smoke and illuminating faces engaged in conversation and drink.</p>
<p>Van Ostade produced hundreds of such scenes throughout his long career. His <strong>warm palette</strong> and sympathetic characterization elevated peasant subjects to serious art. The detailed rendering of textures shows Dutch mastery of observation. This painting is in the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> collection in Paris.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This tavern interior hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris among its extensive collection of <strong>Dutch Golden Age paintings</strong>." },
      { question: "Who painted tavern scenes in 17th-century Holland?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> and Adriaen Brouwer were the leading painters of <strong>peasant tavern scenes</strong> in the Dutch Golden Age." },
      { question: "Why were tavern scenes popular?", answer: "Dutch collectors prized <strong>genre paintings</strong> showing everyday life. Tavern scenes offered entertainment and moral commentary on peasant behavior." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-village-feast',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> captured the revelry of a Dutch village celebration in this lively composition. Peasants gather outdoors for <strong>feasting, drinking, and dancing</strong> while musicians play. The scene teems with figures enjoying a break from agricultural labor.</p>
<p>Van Ostade painted many such festive gatherings, showing his talent for <strong>crowded compositions</strong> and individual characterization. The warm light and animated poses create a sense of communal joy. This village feast hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "Village Feast hangs at the <a href=\"/apps/masterpieces/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, which holds important works from the <strong>Spanish royal collections</strong>." },
      { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch Golden Age painter known for scenes of <strong>peasant life and village celebrations</strong>." },
      { question: "What are village feast paintings?", answer: "These genre paintings depict <strong>rural celebrations</strong> where peasants gather for food, drink, and dancing, popular subjects in Dutch 17th-century art." }
    ]
  },
  {
    slug: 'akseli-gallen-kallela-view-from-north-quay',
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted this view of Helsinki's North Quay, capturing the Finnish capital's waterfront. Ships and buildings line the harbor in this <strong>urban landscape</strong> that shows the artist's connection to his homeland. The atmospheric rendering suggests changing weather over the Baltic waters.</p>
<p>While best known for mythological paintings from the Kalevala, Gallen-Kallela also documented Finnish scenes. This work shows his <strong>naturalistic observation</strong> of daily life in Helsinki. Displayed at the <a href="/apps/masterpieces/museum/helsinki-city-museum"><strong>Helsinki City Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "The <a href=\"/apps/masterpieces/museum/helsinki-city-museum\"><strong>Helsinki City Museum</strong></a> displays this work, preserving art depicting the <strong>Finnish capital's history</strong>." },
      { question: "Who was Akseli Gallen-Kallela?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> was Finland's most celebrated painter, known for <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works based on Finnish mythology." },
      { question: "What is the Kalevala?", answer: "The <strong>Kalevala</strong> is Finland's national epic poem. Gallen-Kallela created famous paintings illustrating its mythological stories." }
    ]
  },
  {
    slug: 'albert-joseph-moore-portrait-of-william-moore',
    description: `<p><a href="/apps/masterpieces/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this portrait of his brother William Moore, also an artist. The work shows a <strong>direct, intimate likeness</strong> of a family member, different from Moore's typical decorative figure paintings. The straightforward approach reveals his solid academic training.</p>
<p>Albert Moore usually painted idealized classical women in flowing draperies. This <strong>personal portrait</strong> demonstrates his range beyond those celebrated aesthetic subjects. The painting hangs at the <a href="/apps/masterpieces/museum/york-art-gallery"><strong>York Art Gallery</strong></a> in England.</p>`,
    faqs: [
      { question: "Where is this portrait displayed?", answer: "This painting hangs at <a href=\"/apps/masterpieces/museum/york-art-gallery\"><strong>York Art Gallery</strong></a> in northern England, which holds a collection of <strong>British Victorian art</strong>." },
      { question: "Who was Albert Joseph Moore?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a> was a Victorian painter known for decorative paintings of <strong>classical female figures</strong> in flowing draperies." },
      { question: "Who was William Moore?", answer: "<strong>William Moore</strong> was Albert's brother and also worked as an artist. This portrait captures their <strong>family connection</strong>." }
    ]
  },
  {
    slug: 'albrecht-durer-soldiers-under-the-cross',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> depicted Roman soldiers gathered at the foot of Christ's cross in this devotional work. The <strong>armored figures</strong> cast lots for Christ's garments, a traditional element of Crucifixion imagery. Dürer's precise draftsmanship renders every detail of their military equipment with characteristic accuracy.</p>
<p>Dürer created many religious works throughout his career, combining Northern precision with Italian influences. The soldiers' presence adds <strong>dramatic tension</strong> to the sacred scene. This work is held at the <a href="/apps/masterpieces/museum/stadel-museum"><strong>Städel Museum</strong></a> in Frankfurt.</p>`,
    faqs: [
      { question: "Where is this work displayed?", answer: "The <a href=\"/apps/masterpieces/museum/stadel-museum\"><strong>Städel Museum</strong></a> in Frankfurt holds this work among its important collection of <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> art." },
      { question: "Who was Albrecht Dürer?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> was the greatest German Renaissance artist, a master painter, printmaker, and theorist." },
      { question: "What is depicted in this scene?", answer: "Roman soldiers <strong>casting lots</strong> for Christ's garments at the Crucifixion, a scene described in the Gospels and common in religious art." }
    ]
  },
  {
    slug: 'pieter-de-hooch-soldiers-playing-cards',
    description: `<p><a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted soldiers gathered around a card game in this Dutch Golden Age scene. The men occupy a <strong>spare interior</strong>, concentrating on their game while light streams through a window. De Hooch was renowned for his mastery of light effects in domestic spaces.</p>
<p>While best known for tranquil courtyard scenes, de Hooch also painted guardroom interiors with soldiers at leisure. The <strong>carefully structured composition</strong> and natural lighting demonstrate his technical mastery. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> was a Dutch Golden Age painter famous for <strong>sunlit domestic interiors</strong> and courtyard scenes in Delft." },
      { question: "Where is this painting?", answer: "This work remains in a <strong>private collection</strong>. Major de Hooch paintings can be seen at the National Gallery London and Rijksmuseum." },
      { question: "What is a guardroom scene?", answer: "<strong>Guardroom paintings</strong> showed soldiers at leisure, playing cards, drinking, or smoking. They were popular subjects in Dutch 17th-century art." }
    ]
  },
  {
    slug: 'alexej-von-jawlensky-young-girl-with-peonies',
    description: `<p><a href="/apps/masterpieces/artist/alexej-von-jawlensky"><strong>Alexej von Jawlensky</strong></a> painted this portrait of a young girl beside peonies in his characteristic <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style. The <strong>bold colors and simplified forms</strong> emphasize emotional expression over realistic detail. Jawlensky was associated with the Blue Rider group in Munich.</p>
<p>The juxtaposition of figure and flowers creates a <strong>decorative harmony</strong> typical of Jawlensky's work. His use of strong outlines and saturated color shows Fauvist influence. This painting hangs at the <a href="/apps/masterpieces/museum/von-der-heydt-museum"><strong>Von der Heydt Museum</strong></a> in Wuppertal, Germany.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The <a href=\"/apps/masterpieces/museum/von-der-heydt-museum\"><strong>Von der Heydt Museum</strong></a> in Wuppertal, Germany holds this work in its collection of <strong>Expressionist art</strong>." },
      { question: "Who was Alexej von Jawlensky?", answer: "<a href=\"/apps/masterpieces/artist/alexej-von-jawlensky\"><strong>Alexej von Jawlensky</strong></a> was a Russian <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> painter associated with the Blue Rider group in Munich." },
      { question: "What style is this painting?", answer: "The <strong>bold colors and simplified forms</strong> reflect Expressionism and Fauvist influence, emphasizing emotion over realistic representation." }
    ]
  },
  {
    slug: 'alonso-cano-kings-of-the-visigoths',
    description: `<p><a href="/apps/masterpieces/artist/alonso-cano"><strong>Alonso Cano</strong></a> painted Visigothic kings as part of a historical series for the Spanish court. The work depicts <strong>medieval rulers</strong> who governed Spain before the Moorish conquest, rendered in Cano's refined Baroque style. Such historical subjects glorified Spanish heritage and royal lineage.</p>
<p>Cano served as court painter and architect in Madrid, producing both religious and secular works. His <strong>elegant figures and soft modeling</strong> distinguished him among Spanish Golden Age painters. This painting hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, which holds the finest collection of <strong>Spanish Golden Age painting</strong>." },
      { question: "Who was Alonso Cano?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter, sculptor, and architect who worked for the royal court in Madrid." },
      { question: "Who were the Visigoths?", answer: "The <strong>Visigoths</strong> were Germanic rulers who governed Spain from the 5th to 8th centuries, before the Moorish conquest." }
    ]
  },
  {
    slug: 'william-hogarth-the-denunciation',
    description: `<p><a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a> created this scene of moral drama in his characteristic narrative style. The painting depicts a <strong>moment of accusation or exposure</strong>, with figures reacting to some revealed transgression. Hogarth excelled at telling stories through facial expressions and theatrical staging.</p>
<p>As England's first great native-born painter, Hogarth pioneered <strong>moral and satirical art</strong> that commented on Georgian society. His works functioned as visual sermons warning against vice. This painting can be seen at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The Denunciation is displayed at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, which has significant holdings of <strong>British painting</strong>." },
      { question: "Who was William Hogarth?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>William Hogarth</strong></a> was an 18th-century English painter famous for <strong>satirical narrative paintings</strong> criticizing social vices." },
      { question: "What type of painting is this?", answer: "This is a <strong>moral narrative painting</strong>, a genre Hogarth pioneered. His works told stories with moral lessons about Georgian society." }
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
