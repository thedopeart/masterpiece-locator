const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'jacob-jordaens-the-apotheosis-of-aeneas': [
    { question: "What is The Apotheosis of Aeneas about?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> depicted the <strong>deification of Aeneas</strong>, the Trojan hero from Virgil's Aeneid. The scene shows Aeneas ascending to the gods after his death, a subject drawn from classical mythology popular in <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a> (Statens Museum for Kunst) in Copenhagen. The museum holds a strong selection of Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works." },
    { question: "What style is Jacob Jordaens known for?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> was a leading <strong>Flemish Baroque</strong> painter, second only to Rubens in Antwerp. His work features fleshy, energetic figures, warm colors, and dynamic compositions rooted in everyday vitality." }
  ],
  'jacob-jordaens-suffer-the-little-children-to-come-unto-me': [
    { question: "What biblical scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> illustrated <strong>Christ welcoming children</strong>, from the Gospel of Mark. He gave the scene his characteristic warmth and physicality, with robust figures gathered in a lively composition." },
    { question: "Where can I see this work?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. The museum holds a diverse collection spanning centuries of European art." },
    { question: "How does Jordaens compare to Rubens?", answer: "Both were <strong>Flemish Baroque</strong> masters working in Antwerp. <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> shared Rubens's love of vigorous, fleshy figures but leaned toward earthier, more populist subjects. After Rubens's death in 1640, Jordaens became Antwerp's leading painter." }
  ],
  'jacob-jordaens-return-of-the-holy-family-from-egypt': [
    { question: "What does Return of the Holy Family from Egypt depict?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> painted <strong>Mary, Joseph, and the Christ Child</strong> returning to Israel after fleeing Herod's massacre. The scene blends sacred narrative with the warm, grounded physicality typical of Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin, which holds one of Europe's finest collections of Old Master paintings." },
    { question: "What makes Jordaens's religious paintings distinctive?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> brought a <strong>down-to-earth quality</strong> to biblical subjects. His Holy Family looks like real Flemish people rather than idealized figures, giving his religious work an accessible, human warmth." }
  ],
  'jacob-jordaens-the-apostles-st-paul-and-st-barnabas-at-lystra': [
    { question: "What event does this painting depict?", answer: "It shows the biblical episode where the people of <strong>Lystra mistook Paul and Barnabas for gods</strong> and attempted to sacrifice to them. <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> filled the scene with dramatic gestures and a crowd of animated figures." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a significant collection of <strong>Flemish Baroque</strong> painting." },
    { question: "How large is this painting?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> often worked on a <strong>grand scale</strong> for church and civic commissions. His large canvases allowed him to pack scenes with multiple figures, animals, and architectural details in the exuberant Flemish tradition." }
  ],
  'the-king-drinks': [
    { question: "What is The King Drinks about?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> painted a boisterous <strong>Twelfth Night feast</strong> where a \"king\" is chosen by finding a bean in his cake. The scene captures Flemish revelry: red faces, raised glasses, and chaotic good humor." },
    { question: "Where can I see The King Drinks?", answer: "It's at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels. <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> painted this subject multiple times, and several versions exist." },
    { question: "Why did Jordaens paint this subject repeatedly?", answer: "The <strong>Twelfth Night</strong> theme let <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> showcase what he did best: lively group scenes full of eating, drinking, and rowdy celebration. These genre paintings were hugely popular with Flemish collectors who enjoyed seeing their own festive traditions on canvas." }
  ],
  'jacob-jordaens-selfportrait': [
    { question: "What does Jordaens's Self-Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> presented himself as a confident, prosperous artist. The portrait reflects his status as one of <strong>Antwerp's leading painters</strong> during the golden age of Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." },
    { question: "Where is this self-portrait displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, alongside works by Rubens and Van Dyck, the other great Flemish masters of the period." },
    { question: "How important was Jordaens in his time?", answer: "After <strong>Rubens died in 1640</strong> and <strong>Van Dyck</strong> the following year, <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a> became the most prominent painter in Antwerp. He ran a large workshop and received commissions from across Europe." }
  ],
  'jacob-van-ruisdael-landscape-with-a-house-in-the-grove-peasant-cottag': [
    { question: "What does this landscape depict?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted a <strong>peasant cottage</strong> nestled among trees, a subject he returned to often. His Dutch landscapes capture the texture of foliage, shifting clouds, and quiet rural life with unmatched naturalism." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds several <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> landscapes collected by Russian royalty." },
    { question: "Why is Ruisdael considered important?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a> is widely regarded as the greatest <strong>Dutch Golden Age landscape painter</strong>. His work influenced Constable, the Barbizon school, and generations of landscape artists who followed." }
  ],
  'jacob-van-ruisdael-sunrise-in-a-wood': [
    { question: "What does Sunrise in a Wood show?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> captured <strong>early morning light filtering through dense trees</strong>. The play of sunlight and shadow through woodland was one of his signature subjects, rendered with careful attention to atmosphere." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London, a museum known for its fine selection of Old Master paintings and decorative arts." },
    { question: "What technique did Ruisdael use for light effects?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> built up layers of <strong>translucent glazes</strong> to create convincing atmospheric effects. His ability to paint convincing sunlight breaking through clouds or trees set a standard that later landscapists studied closely." }
  ],
  'jacob-van-ruisdael-village-at-the-wood39s-edge': [
    { question: "What scene does Village at the Wood's Edge capture?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> depicted a <strong>small Dutch village</strong> at the boundary between farmland and forest. The composition balances open sky with dense vegetation, typical of his mature landscape style." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin, which holds multiple works by <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> in its Dutch Golden Age collection." },
    { question: "Did Ruisdael paint from life?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> made <strong>sketches outdoors</strong> but composed his final paintings in the studio. He often combined elements from different locations, creating idealized yet convincing views of the Dutch countryside." }
  ],
  'jacob-van-ruisdael-road-through-corn-fields-near-the-zuider-zee': [
    { question: "What does this landscape show?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted a <strong>road cutting through cornfields</strong> near the Zuider Zee, capturing the flat, open character of the Dutch landscape under a dramatic sky. The low horizon line gives the clouds commanding presence." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, which holds a strong collection of Dutch and Flemish landscape painting." },
    { question: "Why are skies so important in Ruisdael's work?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> devoted up to <strong>two-thirds of his canvas to sky</strong>. In the flat Netherlands, clouds provided the drama and movement that mountains offer elsewhere. His cloud studies influenced English landscape painters like Constable." }
  ],
  'jacob-van-ruisdael-tower-mill-at-wijk-bij-duurstede-netherlands': [
    { question: "What is the Tower Mill at Wijk bij Duurstede?", answer: "It's one of <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael's</strong></a> most famous paintings, showing a <strong>windmill towering over the town</strong> against a cloudy sky. The mill dominates the composition, becoming almost monumental in scale and presence." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, where it's one of the highlights of the Dutch Golden Age collection." },
    { question: "Why is this painting so celebrated?", answer: "The composition transforms an ordinary <strong>Dutch windmill</strong> into something grand. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> placed it against dramatic clouds, making a workaday structure feel heroic. It's become an icon of Dutch landscape painting." }
  ],
  'jacob-van-ruisdael-landscape-with-a-church-by-a-torrent': [
    { question: "What does this landscape depict?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted a <strong>rushing torrent</strong> near a church, combining water, rock, and architecture. This more dramatic subject shows his range beyond the flat Dutch polder landscapes he's best known for." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio, which holds a strong collection of European Old Master paintings." },
    { question: "Did Ruisdael paint from imagination?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> traveled to the German border region where he saw <strong>hilly, wooded terrain</strong> unlike the flat Netherlands. These trips inspired more dramatic landscapes with waterfalls and rocky streams that complemented his calmer Dutch scenes." }
  ],
  'jacob-van-ruisdael-two-undershot-watermills-with-men-opening-a-sluice': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> depicted two <strong>watermills</strong> with workers managing a sluice gate. Mills fascinated him as subjects: they combined human industry with natural forces, set within the Dutch landscape he knew so well." },
    { question: "Where is this work kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> was prolific, producing hundreds of landscapes, and many remain in private hands alongside those in major museums." },
    { question: "Why did Ruisdael paint so many mills?", answer: "<strong>Windmills and watermills</strong> were everywhere in the 17th-century Netherlands. For <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a>, they provided strong vertical elements in flat landscapes and symbolized Dutch ingenuity in managing water and land." }
  ],
  'jacob-van-ruisdael-view-of-haarlem-with-bleaching-fields-in-the-foreg': [
    { question: "What are the bleaching fields in this painting?", answer: "The white strips in the foreground are <strong>linen bleaching grounds</strong>, where cloth was laid in the sun to whiten. Haarlem was a major center for linen production, and <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> included this local industry in several panoramic views." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted multiple versions of this Haarlem view, and the Rijksmuseum holds one of the finest." },
    { question: "Why did Ruisdael paint Haarlem so often?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> lived in <strong>Haarlem</strong> during his formative years. The city's flat surroundings, with the great church of St. Bavo on the skyline, gave him a subject he returned to throughout his career." }
  ],
  'jacob-van-ruisdael-stormy-sea-with-sailing-vessels': [
    { question: "What does Stormy Sea with Sailing Vessels depict?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted <strong>ships battling rough seas</strong> under dark skies. Though best known for land-based views, he produced compelling seascapes that capture the danger and drama of the North Sea." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, alongside other Dutch landscape and marine paintings." },
    { question: "Did Ruisdael often paint seascapes?", answer: "<strong>Marine scenes</strong> are a smaller part of <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael's</strong></a> output compared to his woodland and panoramic views. But the Dutch Republic's dependence on the sea made it a natural subject, and his stormy waters show real atmospheric power." }
  ],
  'jacob-van-ruisdael-the-ray-of-sunlight': [
    { question: "What makes The Ray of Sunlight special?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> captured a single <strong>shaft of sunlight</strong> breaking through clouds onto the landscape below. The effect is both naturalistic and theatrical, turning an ordinary view into something almost spiritual." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, where it hangs among the museum's collection of Dutch Golden Age painting." },
    { question: "How did Ruisdael achieve his light effects?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> used strong <strong>tonal contrasts</strong> between lit and shadowed areas. By keeping most of the landscape in muted tones and concentrating brightness in one area, he created dramatic spotlighting effects that later influenced Romantic painters." }
  ],
  'jacob-van-ruisdael-view-of-the-ij-on-a-stormy-day': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted the <strong>IJ waterway</strong> near Amsterdam under stormy conditions. The IJ was the city's main harbor, and this view captures the rough weather that made Dutch seamanship both necessary and dangerous." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/worcester-art-museum-wam-worcester-ma-uk\"><strong>Worcester Art Museum</strong></a> in Massachusetts, which holds a well-regarded collection of European painting." },
    { question: "What was the IJ in Ruisdael's time?", answer: "The <strong>IJ</strong> was a broad inlet connecting Amsterdam to the Zuider Zee and the open sea. It served as the city's lifeline for trade during the <strong>Dutch Golden Age</strong>, making it a meaningful subject for <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> and his audience." }
  ],
  'jacob-van-ruisdael-view-of-haarlem-with-bleaching-grounds': [
    { question: "How does this differ from Ruisdael's other Haarlem views?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted several versions of the <strong>Haarlem panorama</strong> with bleaching grounds. Each varies in sky conditions, lighting, and the balance between town and countryside. This version is held in Zürich rather than Amsterdam." },
    { question: "Where is this version displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland. Multiple museums own versions of this subject, reflecting its popularity and <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael's</strong></a> willingness to revisit successful compositions." },
    { question: "What are bleaching grounds?", answer: "<strong>Bleaching grounds</strong> were fields where freshly woven linen was spread out to whiten in the sun. Haarlem's linen industry was famous across Europe, and the bright white cloth laid on green grass created a striking visual pattern that <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> used to great effect." }
  ],
  'jacopo-bassano-madonna-and-child-with-saints': [
    { question: "What does Madonna and Child with Saints depict?", answer: "<a href=\"/apps/masterpieces/artist/jacopo-bassano\"><strong>Jacopo Bassano</strong></a> painted the <strong>Virgin Mary and Christ Child</strong> surrounded by saints in a composition known as a sacra conversazione. His earthy palette and rustic figures set his work apart from more polished Venetian contemporaries." },
    { question: "Where is this painting displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, which holds a strong collection of Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and Mannerist painting." },
    { question: "What is Bassano known for?", answer: "<a href=\"/apps/masterpieces/artist/jacopo-bassano\"><strong>Bassano</strong></a> blended <strong>Venetian color</strong> with rural subjects and an interest in animals and pastoral settings. Working from the town of Bassano del Grappa rather than Venice itself, he developed a distinctive, earthy approach to religious and genre painting." }
  ],
  'jacques-louis-david-the-funeral-of-patroclus': [
    { question: "What scene does The Funeral of Patroclus show?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> depicted the <strong>funeral rites for Patroclus</strong>, Achilles's companion, from Homer's Iliad. The classical subject reflects David's commitment to <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and its emphasis on ancient heroism and virtue." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. This is one of <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David's</strong></a> earlier works, painted before his most famous pieces like The Oath of the Horatii and The Death of Marat." },
    { question: "Why did David choose classical subjects?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> believed <strong>ancient Greek and Roman subjects</strong> could teach moral lessons to contemporary viewers. His <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> approach rejected the frivolity of Rococo art in favor of austere heroism and civic duty." }
  ],
  'jacques-louis-david-the-death-of-seneca': [
    { question: "What does The Death of Seneca depict?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted the Roman philosopher <strong>Seneca</strong> taking his own life on Emperor Nero's orders. The subject exemplifies <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> themes of stoic virtue, sacrifice, and moral courage in the face of tyranny." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris, which holds a collection of fine arts spanning antiquity to the early 20th century." },
    { question: "When did David paint this?", answer: "This is an <strong>early work</strong> from <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David's</strong></a> career, painted while he was developing the severe classical style that would make him France's most important painter during the Revolution and Napoleonic era." }
  ],
  'jacques-louis-david-sorrow': [
    { question: "What does David's Sorrow depict?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> portrayed a figure expressing <strong>grief</strong>, likely a study or academic exercise. Even in smaller works, his disciplined drawing and classical modeling of the human form are evident." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/201cole-nationale-sup233rieure-des-beauxarts-ensba\"><strong>École nationale supérieure des Beaux-Arts</strong></a> in Paris, France's most prestigious art school, where <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> himself trained." },
    { question: "What role did David play in French art education?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> dominated <strong>French art</strong> as both painter and teacher. His studio trained a generation of artists including Ingres and Gros, and his <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> approach shaped the curriculum of the French Academy for decades." }
  ],
  'jacques-louis-david-st-roch-praying-to-the-virgin-for-an-end-to-the-pl': [
    { question: "What is this painting about?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted <strong>St. Roch</strong>, patron saint of plague victims, praying to the Virgin Mary to end a plague. It's an early religious commission that shows David's classical training before he turned to more secular, political subjects." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-marseille-marseille-franc\"><strong>Musée des beaux-arts de Marseille</strong></a> in southern France. The painting was commissioned for a Marseille church, where plague had historically been a real threat." },
    { question: "Is this typical of David's work?", answer: "Not really. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> is best known for <strong>secular history paintings</strong> and political works. This early religious piece shows his technical skill but lacks the revolutionary fervor of his later masterpieces like The Death of Marat." }
  ],
  'jacques-louis-david-the-grief-of-andromache': [
    { question: "What scene does The Grief of Andromache depict?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted <strong>Andromache mourning over the body of Hector</strong>, her husband, killed by Achilles during the Trojan War. The composition emphasizes restrained, noble grief in the <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> manner." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris. The museum holds several works by <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> and his circle." },
    { question: "What makes this a Neoclassical painting?", answer: "The <strong>classical subject</strong>, idealized anatomy, restrained emotion, and frieze-like composition all mark it as <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a>. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> looked to ancient sculpture and Renaissance masters to create images of noble suffering and heroic virtue." }
  ],
  'james-ensor-the-oyster-eater': [
    { question: "What does The Oyster Eater show?", answer: "<a href=\"/apps/masterpieces/artist/james-ensor\"><strong>Ensor</strong></a> painted a woman eating oysters at a table, rendered with loose brushwork and bright, almost harsh light. It's an early work that already shows his interest in <strong>bold color</strong> and everyday Belgian life." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp-dutch-koninklijk\"><strong>Royal Museum of Fine Arts Antwerp</strong></a>, which holds a major collection of <a href=\"/apps/masterpieces/artist/james-ensor\"><strong>Ensor's</strong></a> work from across his career." },
    { question: "What is Ensor known for?", answer: "<a href=\"/apps/masterpieces/artist/james-ensor\"><strong>James Ensor</strong></a> was a Belgian artist who moved from <strong>Realism</strong> to increasingly bizarre, mask-filled imagery. He's considered a forerunner of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and Surrealism, though this early painting is still rooted in naturalistic observation." }
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
