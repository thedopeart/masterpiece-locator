const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'henri-fantin-latour-the-reader-marie-fantin-latour-the-artist39s-siste': [
    { question: "Who is the woman in The Reader by Henri Fantin-Latour?", answer: "The subject is <strong>Marie Fantin-Latour</strong>, the artist's sister. <a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> painted her absorbed in a book, capturing a quiet domestic moment with his characteristic softness and muted palette." },
    { question: "Where is The Reader displayed?", answer: "It's held at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, which houses one of the world's finest collections of <strong>Impressionist</strong> and <strong>Post-Impressionist</strong> art." },
    { question: "What style does this painting reflect?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> worked in a <strong>Realist</strong> tradition, favoring careful observation over the broken brushwork of his Impressionist peers. This portrait shows his preference for subdued lighting and introspective subjects." }
  ],
  'henri-fantin-latour-still-life-of-four-peaches': [
    { question: "What makes Fantin-Latour's still lifes distinctive?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> was celebrated for <strong>still life</strong> and <strong>floral paintings</strong> that combined tight observation with a soft, almost velvety texture. His peach paintings show this restrained elegance at its best." },
    { question: "Where is Still Life of Four Peaches kept?", answer: "This work is in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour's</strong></a> smaller still lifes remain privately held, though his major works appear in museums across Europe." },
    { question: "When did Fantin-Latour paint this?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> produced still lifes throughout his career in the <strong>second half of the 19th century</strong>. His fruit and flower paintings were particularly popular with English collectors during his lifetime." }
  ],
  'henri-fantin-latour-the-two-sisters': [
    { question: "Who are The Two Sisters in this painting?", answer: "The work depicts two young women in a quiet, contemplative scene. <a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> frequently painted intimate <strong>group portraits</strong> of family and friends, favoring understated emotion over dramatic staging." },
    { question: "Where can I see The Two Sisters?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. The museum holds a strong collection of 19th-century European painting." },
    { question: "What techniques did Fantin-Latour use here?", answer: "He employed <strong>smooth tonal transitions</strong> and careful modeling of light on skin and fabric. Unlike his Impressionist contemporaries, <a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> kept his brushwork controlled and his compositions measured." }
  ],
  'henri-matisse-the-study-of-gustave-moreau': [
    { question: "What is The Study of Gustave Moreau about?", answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> painted this early work while studying under <strong>Gustave Moreau</strong> at the École des Beaux-Arts in Paris. It reflects his formative period before he developed the bold color approach of <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a>." },
    { question: "How does this compare to Matisse's later work?", answer: "It's noticeably more restrained. <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse's</strong></a> early paintings used <strong>darker palettes</strong> and traditional composition. Within a few years, he'd abandon this approach for the vivid, flat color that defined his career." },
    { question: "Where is this painting now?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse's</strong></a> student-era works are less well-known than his Fauvist and later masterpieces, though they're valued for showing his artistic evolution." }
  ],
  'henri-matisse-still-life-with-books-and-candle': [
    { question: "When did Matisse paint Still Life with Books and Candle?", answer: "This is one of <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse's</strong></a> earlier works, painted as he was still developing his style. The subject matter, everyday objects arranged on a table, follows <strong>traditional still life</strong> conventions he'd later break apart." },
    { question: "Where is this work displayed?", answer: "It's held in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> produced hundreds of still lifes across his career, and many remain outside museum holdings." },
    { question: "What style does this painting show?", answer: "The work reflects a more <strong>conventional approach</strong> than Matisse's famous Fauvist pieces. The muted colors and careful rendering of books and candlelight show the influence of earlier French painters before <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> embraced radical color." }
  ],
  'henry-raeburn-the-skating-minister-the-reverend-robert-walker-sk': [
    { question: "Who is the man skating in this painting?", answer: "He's <strong>Reverend Robert Walker</strong>, a Church of Scotland minister, shown skating on <strong>Duddingston Loch</strong> near Edinburgh. The image has become one of Scotland's most iconic paintings, blending dignity with playful movement." },
    { question: "Where is The Skating Minister displayed?", answer: "It hangs in the <a href=\"/apps/masterpieces/museum/scottish-national-gallery\"><strong>Scottish National Gallery</strong></a> in Edinburgh. It's one of the gallery's most popular and frequently reproduced works." },
    { question: "Why is this painting so famous?", answer: "The composition is striking: a <strong>dark-clad minister</strong> glides across ice against a minimal background. <a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Raeburn</strong></a> captured both the formality of the man's position and the freedom of outdoor recreation in a single, unforgettable image." }
  ],
  'hieronymus-bosch-the-last-judgement-detail': [
    { question: "What does this Last Judgement detail show?", answer: "This is a close-up section from <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> <strong>Last Judgement</strong>, likely focusing on the hellish torments he depicted with such wild imagination. His demons and hybrid creatures remain some of the most inventive imagery in Western art." },
    { question: "Where is this work held?", answer: "This detail comes from a version at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> painted multiple versions of the Last Judgement theme throughout his career." },
    { question: "What artistic movement does Bosch belong to?", answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> worked during the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, though his fantastical imagery stands apart from most of his contemporaries. His surreal visions influenced artists centuries later, from Bruegel to the Surrealists." }
  ],
  'hieronymus-bosch-triptych-of-last-judgement': [
    { question: "What is the Triptych of Last Judgement?", answer: "It's a three-panel altarpiece by <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> depicting <strong>paradise</strong>, the <strong>Last Judgement</strong>, and <strong>hell</strong>. The central panel teems with bizarre creatures punishing sinners, while the wings show calmer scenes of creation and damnation." },
    { question: "Where is this triptych displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/academy-of-fine-arts-vienna-vienna-austria\"><strong>Academy of Fine Arts Vienna</strong></a>. The triptych format was common for <strong>altarpieces</strong> in the 15th and 16th centuries." },
    { question: "How large is this work?", answer: "The full triptych is substantial, designed to be displayed in a church setting. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> triptychs were meant to be opened on special occasions, revealing the central scene to the congregation." }
  ],
  'hieronymus-bosch-the-seven-deadly-sins-and-the-four-last-things-tab': [
    { question: "What does The Seven Deadly Sins tabletop depict?", answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> painted each of the <strong>seven deadly sins</strong> in circular scenes arranged around a central eye of God. The four corners show <strong>Death</strong>, <strong>Judgement</strong>, <strong>Heaven</strong>, and <strong>Hell</strong>, creating a complete moral landscape." },
    { question: "Where is this painting kept?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds several major <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> works, collected by the Spanish royal family." },
    { question: "Was this actually used as a tabletop?", answer: "Scholars believe it may have been designed as a <strong>tabletop</strong>, meant to be viewed from above rather than hung on a wall. The circular arrangement and Latin inscriptions suggest it served as a moral reminder in a domestic setting." }
  ],
  'hieronymus-bosch-last-judgement': [
    { question: "How does this Last Judgement differ from Bosch's other versions?", answer: "This version at the <a href=\"/apps/masterpieces/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> is a separate composition from the Vienna triptych. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> returned to the Last Judgement theme repeatedly, each time inventing new grotesque figures and punishments." },
    { question: "Where can I see this painting?", answer: "It's displayed at the <a href=\"/apps/masterpieces/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium. The museum specializes in <strong>Flemish Primitive</strong> and early Netherlandish painting." },
    { question: "Why did Bosch paint the Last Judgement so often?", answer: "The theme was a popular commission in <strong>late medieval</strong> and <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> art. Churches and wealthy patrons wanted visual warnings about sin and salvation, and <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> imaginative style made him ideal for the subject." }
  ],
  'hugo-van-der-goes-virgin-and-child-with-st-anne-and-a-franciscan-don': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a> painted the <strong>Virgin Mary</strong> and <strong>Christ Child</strong> alongside <strong>St. Anne</strong> and a Franciscan donor figure. Including the patron who commissioned the work was standard practice in 15th-century Flemish altarpieces." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels. The museum holds a strong collection of early <strong>Netherlandish painting</strong>." },
    { question: "What movement does Hugo van der Goes represent?", answer: "He's a key figure of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> and <strong>Early Netherlandish</strong> painting. His works are known for their emotional intensity, detailed naturalism, and rich oil technique." }
  ],
  'hugo-van-der-goes-the-adoration-of-the-kings-monforte-altar': [
    { question: "What is the Monforte Altar?", answer: "It's a large altarpiece by <a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a> showing the <strong>Adoration of the Magi</strong>. Named after the Spanish monastery of Monforte de Lemos where it was kept for centuries, it's one of his most ambitious surviving works." },
    { question: "Where is the Monforte Altar displayed?", answer: "It hangs in the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin. The painting was acquired from Spain in the 19th century and remains one of the gallery's prized possessions." },
    { question: "What makes this work significant?", answer: "The painting's <strong>monumental scale</strong> and psychological depth set it apart. <a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Van der Goes</strong></a> gave each figure a distinct emotional presence, moving beyond the more formulaic treatments of this popular biblical subject." }
  ],
  'hugo-van-der-goes-the-crucifixion': [
    { question: "What does Hugo van der Goes's Crucifixion show?", answer: "<a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Van der Goes</strong></a> depicted <strong>Christ on the cross</strong> with mourning figures below. His treatment emphasizes raw grief and physical suffering, typical of his emotionally charged approach to religious subjects." },
    { question: "Where is this Crucifixion displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-correr-venice-italy\"><strong>Museo Correr</strong></a> in Venice. Finding a Flemish masterwork in an Italian museum reflects centuries of art trade and collecting across Europe." },
    { question: "How does this compare to other Crucifixion paintings?", answer: "<a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Van der Goes</strong></a> brought a distinctly <strong>Northern European</strong> sensibility: sharp realism, visible anguish on faces, and meticulous rendering of fabric and landscape. Italian versions of the same subject tended toward more idealized figures." }
  ],
  'hyacinthe-rigaud-suzanne-de-boubers-de-bern226tre': [
    { question: "Who was Suzanne De Boubers De Bernâtre?", answer: "She was a member of the French aristocracy, painted by <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Hyacinthe Rigaud</strong></a> in his signature <strong>grand portrait</strong> style. Rigaud specialized in portraying the French elite with formal elegance and meticulous attention to costume." },
    { question: "Where is this portrait kept?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland. Rigaud's portraits are scattered across European collections, reflecting his wide clientele among the 17th- and 18th-century aristocracy." },
    { question: "What style did Rigaud work in?", answer: "<a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> was a leading <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait painter at the court of <strong>Louis XIV</strong>. His works emphasize rich fabrics, commanding poses, and an air of authority that defined French royal portraiture." }
  ],
  'hyacinthe-rigaud-jean-baptiste-monginot': [
    { question: "Who was Jean Baptiste Monginot?", answer: "He was a figure in French society painted by <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a>, whose portraits documented the faces of the <strong>French aristocracy</strong> and professional classes during the reign of Louis XIV and XV." },
    { question: "Where is this portrait held?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud's</strong></a> commissioned portraits remain with descendants of the original families or in private hands." },
    { question: "Why was Rigaud so sought-after as a portraitist?", answer: "<a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> combined <strong>technical precision</strong> with a talent for making sitters look dignified and powerful. His portrait of Louis XIV set the standard for royal portraiture across Europe for generations." }
  ],
  'hyacinthe-rigaud-le-brun-par-rigaud': [
    { question: "Who is depicted in Le Brun Par Rigaud?", answer: "This portrait shows <strong>Charles Le Brun</strong>, the leading French painter and decorator under Louis XIV. <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> captured a fellow artist who shaped the visual identity of Versailles and the French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds numerous portraits by <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a>, given his central role in French court art." },
    { question: "What's the significance of this portrait?", answer: "It's a portrait of one great artist by another. <strong>Le Brun</strong> directed the decoration of Versailles and led the French Academy, and <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud's</strong></a> portrayal captures the authority of a man who shaped French visual culture." }
  ],
  'hyacinthe-rigaud-louis-de-france-duc-de-bourgogne': [
    { question: "Who was Louis de France, Duc de Bourgogne?", answer: "He was the <strong>grandson of Louis XIV</strong> and heir to the French throne before his early death in 1712. <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> portrayed him with the ceremonial grandeur expected for a future king." },
    { question: "Where is this portrait displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/ch226teau-de-versailles-versailles-france\"><strong>Château de Versailles</strong></a>. The palace holds an extensive collection of royal portraits documenting the Bourbon dynasty." },
    { question: "What style defines this royal portrait?", answer: "<a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> used the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> <strong>grand manner</strong> portrait style: rich drapery, armor or regalia, a commanding stance, and a background suggesting power and status. It was designed to project royal authority." }
  ],
  'hyacinthe-rigaud-louis-de-france-dauphin': [
    { question: "Who was Louis de France, Dauphin?", answer: "He was the <strong>eldest son of Louis XIV</strong> and heir apparent to the French throne. Known as the Grand Dauphin, he never became king, dying in 1711 before his father. <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> painted him in full royal splendor." },
    { question: "Where is this portrait kept?", answer: "It's at the <a href=\"/apps/masterpieces/museum/ch226teau-de-versailles-versailles-france\"><strong>Château de Versailles</strong></a>, alongside numerous other royal portraits that document the French court at its peak." },
    { question: "How does Rigaud's approach to royal portraits differ from others?", answer: "<a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> excelled at <strong>rendering fabrics</strong>: silk, velvet, ermine, and lace all appear with near-tactile realism. Combined with careful attention to facial likeness, his royal portraits feel both grand and genuinely individual." }
  ],
  'ilya-repin-tatyana-repina-the-artist39s-mother': [
    { question: "Who is depicted in this painting?", answer: "It's <strong>Tatyana Repina</strong>, the mother of <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Ilya Repin</strong></a>. The portrait shows the personal side of an artist best known for large-scale historical canvases, capturing his mother with tenderness and directness." },
    { question: "Where can I see this portrait?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-in-prague-prague-czech-republic\"><strong>National Gallery in Prague</strong></a>. <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin's</strong></a> works are spread across Russian and European collections." },
    { question: "What artistic movement is Repin associated with?", answer: "<a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin</strong></a> was a leading figure of <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> in Russian art and associated with the <strong>Peredvizhniki</strong> (Wanderers) group. He combined social commentary with powerful technique in both portraits and history paintings." }
  ],
  'isaac-levitan-sunny-day': [
    { question: "What does Sunny Day depict?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> painted a bright, open landscape bathed in warm light. He's considered Russia's greatest <strong>landscape painter</strong>, known for capturing mood and atmosphere with deceptive simplicity." },
    { question: "Where is Sunny Day held?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan's</strong></a> smaller landscape studies circulate in private hands, while his major works are in Russian state museums." },
    { question: "What movement does Levitan belong to?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> is associated with <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> and the Russian landscape tradition. His paintings influenced generations of Russian artists and remain touchstones for the idea of the <strong>Russian countryside</strong> in art." }
  ],
  'isaac-levitan-village-in-winter': [
    { question: "What does Village in Winter show?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> captured a <strong>snow-covered Russian village</strong>, conveying the quiet and cold of winter with restrained color and soft tones. His winter scenes are among his most atmospheric works." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/tula-regional-museum-of-fine-arts-tula-russia\"><strong>Tula Regional Museum of Fine Arts</strong></a> in Russia. Regional museums across Russia hold important <a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> landscapes." },
    { question: "Why is Levitan considered important?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> transformed Russian <strong>landscape painting</strong> from topographic views into emotional experiences. His friend Anton Chekhov compared his paintings to music for their ability to evoke feeling through simple natural scenes." }
  ],
  'isaac-levitan-landscape-on-volga-boats-by-the-riverbank': [
    { question: "What does this Volga landscape depict?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> painted <strong>boats moored along the Volga River</strong>, a subject he returned to during his travels through central Russia. The Volga's vast, flat scenery suited his contemplative style perfectly." },
    { question: "Where is this painting held?", answer: "It's in the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg, which holds one of the most complete collections of <a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan's</strong></a> work." },
    { question: "Why did Levitan paint the Volga?", answer: "The <strong>Volga River</strong> was a defining subject for Russian landscape painters. <a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> spent extended periods along its banks in the late 1880s, producing some of his finest work during these trips." }
  ],
  'ivan-aivazovsky-sea-coast-at-night-near-the-beacon': [
    { question: "What does Sea Coast at Night depict?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> painted a <strong>moonlit coastline</strong> with a beacon casting light across dark waters. His nighttime seascapes are among his most atmospheric works, showing mastery of reflected light on waves." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/aivazovsky-national-art-gallery-feodosiya-ukraine\"><strong>Aivazovsky National Art Gallery</strong></a> in Feodosia, Ukraine, the artist's hometown. The gallery holds the largest collection of his work in the world." },
    { question: "What is Aivazovsky known for?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> is considered one of history's greatest <strong>marine painters</strong>. He produced over 6,000 paintings during his career, nearly all depicting the sea in its various moods, from calm moonlit nights to violent storms." }
  ],
  'ivan-aivazovsky-view-of-the-coast-near-st-petersburg': [
    { question: "What does this coastal view show?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> depicted the <strong>Baltic coastline near St. Petersburg</strong>, Russia's imperial capital. The painting captures the distinctive light and atmosphere of the northern Russian coast." },
    { question: "Where is this painting held?", answer: "It's in the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg. The museum holds numerous <a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> works, reflecting his importance to Russian art." },
    { question: "What style did Aivazovsky work in?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> combined <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> drama with <strong>Realist</strong> observation of water, light, and weather. His ability to paint translucent waves and shifting skies made him famous across Russia and Europe." }
  ],
  'ivan-aivazovsky-the-gale-on-sea-is-over': [
    { question: "What moment does The Gale on Sea is Over capture?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> painted the <strong>aftermath of a storm</strong>: calming seas, clearing skies, and the relief of danger passed. He often depicted transitional moments, when nature shifts from violence to peace." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg, alongside many of <a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky's</strong></a> other major seascapes." },
    { question: "How did Aivazovsky paint such realistic seas?", answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a> worked largely from <strong>memory</strong> rather than painting outdoors. He'd observe the sea carefully, then recreate it in his studio with remarkable accuracy. His technique for painting translucent water influenced marine painters worldwide." }
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
