const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'james-whistler-man-smoking-a-pipe': [
    { question: "What does Man Smoking a Pipe depict?", answer: "<a href=\"/apps/masterpieces/artist/james-whistler\"><strong>Whistler</strong></a> painted a figure <strong>smoking a pipe</strong> in a loose, atmospheric style. The work shows his interest in tonal harmony and suggestion rather than precise detail, qualities that would define his mature career." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. <a href=\"/apps/masterpieces/artist/james-whistler\"><strong>Whistler</strong></a> spent significant time in Paris and was deeply influenced by French painting." },
    { question: "What style is Whistler known for?", answer: "<a href=\"/apps/masterpieces/artist/james-whistler\"><strong>Whistler</strong></a> pioneered a <strong>tonal approach</strong> to painting, often titling works as \"arrangements\" or \"nocturnes\" to emphasize color harmony over narrative. He bridged <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> and early modernism." }
  ],
  'vase-of-flowers-de-heem': [
    { question: "What makes Jan Davidsz. de Heem's flower paintings special?", answer: "<a href=\"/apps/masterpieces/artist/jan-davidsz-de-heem\"><strong>De Heem</strong></a> was a master of <strong>floral still life</strong>, combining flowers from different seasons into impossible bouquets. Each petal, dewdrop, and insect is rendered with astonishing precision." },
    { question: "Where is Vase of Flowers displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. The gallery holds several fine examples of Dutch and Flemish still life painting." },
    { question: "What movement does this belong to?", answer: "This is a <strong>Dutch Golden Age still life</strong>, a genre that flourished in the 17th-century Netherlands. <a href=\"/apps/masterpieces/artist/jan-davidsz-de-heem\"><strong>De Heem's</strong></a> lavish compositions often carried vanitas symbolism, reminding viewers of life's transience beneath the beauty." }
  ],
  'jan-steen-smoker': [
    { question: "What does Smoker by Jan Steen depict?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> painted a figure <strong>smoking a pipe</strong>, one of many scenes of everyday pleasure in his work. Steen's genre paintings capture Dutch life with humor and a sharp eye for human behavior." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a rich selection of <strong>Dutch Golden Age</strong> painting." },
    { question: "What is Jan Steen known for?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> is famous for lively, often chaotic <strong>genre scenes</strong> of Dutch domestic life. The Dutch expression \"a Jan Steen household\" still means a messy, rowdy home, reflecting the spirit of his paintings." }
  ],
  'jan-steen-village-festival-with-the-ship-of-saint-rijn-uijt': [
    { question: "What is the Ship of Saint Rijn Uijt?", answer: "It refers to a <strong>festive tradition</strong> in Dutch villages where a ship was paraded during celebrations. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> captured the rowdy, communal spirit of village festivals with his characteristic humor and crowded compositions." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen's</strong></a> genre paintings circulate privately, though major works appear in museums across the Netherlands and Europe." },
    { question: "Why did Steen paint festivals?", answer: "<strong>Village celebrations</strong> gave <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> the perfect excuse to paint large crowds engaged in drinking, dancing, and general misbehavior. These scenes were popular with Dutch collectors who enjoyed seeing their own customs depicted with warmth and wit." }
  ],
  'jan-steen-quack-doctor': [
    { question: "What is Quack Doctor about?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> satirized a <strong>fraudulent doctor</strong> treating gullible patients. The subject was common in Dutch genre painting and allowed Steen to poke fun at human credulity with his typical comedic touch." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Gemeentemuseum den Haag</strong></a> in The Hague. The museum holds a range of Dutch art from the Golden Age to the modern period." },
    { question: "Did Steen's paintings carry moral messages?", answer: "Often, yes. Beneath the humor, <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen's</strong></a> scenes frequently carried <strong>moral warnings</strong> about excess, foolishness, or dishonesty. The quack doctor theme warns against trusting charlatans, wrapped in comedy." }
  ],
  'jan-steen-peasants-before-an-inn': [
    { question: "What does Peasants before an Inn depict?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> painted <strong>villagers gathering outside a tavern</strong>, drinking and socializing. Inn scenes were among his most popular subjects, letting him show everyday Dutch life at its most relaxed and unguarded." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/toledo-museum-of-art-toledo-oh-us\"><strong>Toledo Museum of Art</strong></a> in Ohio. The museum holds a well-regarded collection of European Old Master paintings." },
    { question: "Was Jan Steen really a tavern keeper?", answer: "Yes. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> actually ran a <strong>tavern</strong> at various points in his life. His firsthand experience with inn culture likely sharpened his ability to capture the atmosphere, characters, and chaos of Dutch drinking scenes." }
  ],
  'jan-steen-winter-landscape': [
    { question: "What does Jan Steen's Winter Landscape show?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> painted a <strong>frozen Dutch landscape</strong> with figures on ice. While he's best known for interior genre scenes, his winter landscapes show he could handle the Dutch tradition of outdoor seasonal views as well." },
    { question: "Where is this painting held?", answer: "It's at <a href=\"/apps/masterpieces/museum/skokloster-castle-h229bo-municipality-sweden\"><strong>Skokloster Castle</strong></a> in Sweden, a 17th-century castle that houses an important collection of European paintings and objects." },
    { question: "Were winter scenes common in Dutch art?", answer: "Very. <strong>Winter landscapes</strong> were a popular genre during the Dutch Golden Age, when the Little Ice Age made harsh winters a regular feature of life. Artists like Hendrick Avercamp pioneered the form, and <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> contributed his own versions." }
  ],
  'jan-steen-the-lovesick-maiden': [
    { question: "What is The Lovesick Maiden about?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> painted a young woman <strong>lovesick in bed</strong> while a doctor checks her pulse. The scene is comic: the \"illness\" is romantic longing, and the medical consultation is a gentle satire on treating love as a disease." },
    { question: "Where can I see this painting?", answer: "It's at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met holds a strong collection of <strong>Dutch Golden Age</strong> genre painting." },
    { question: "Was the lovesick maiden a common subject?", answer: "Yes. The <strong>doctor's visit</strong> to a lovesick woman was a recurring theme in Dutch painting, appearing in works by multiple artists. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Steen</strong></a> gave it his typical wit, filling the scene with visual clues about the real nature of the girl's \"illness.\"" }
  ],
  'the-three-brides': [
    { question: "What does The Three Brides depict?", answer: "<a href=\"/apps/masterpieces/artist/jan-toorop\"><strong>Jan Toorop</strong></a> created a highly decorative scene of <strong>three brides</strong> representing different states: purity, sensuality, and death. The flowing, sinuous lines and symbolic imagery place it firmly within <strong>Art Nouveau</strong> and Symbolism." },
    { question: "Where is The Three Brides displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kroeller-mueller-museum\"><strong>Kröller-Müller Museum</strong></a> in the Netherlands. The museum is best known for its Van Gogh collection but holds important works by other Dutch and European artists." },
    { question: "What style is Jan Toorop associated with?", answer: "<a href=\"/apps/masterpieces/artist/jan-toorop\"><strong>Toorop</strong></a> worked across <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, <strong>Art Nouveau</strong>, and Pointillism. His Indonesian heritage influenced his decorative style, with flowing hair and linear patterns that became his signature." }
  ],
  'jan-toorop-the-sea-at-katwijk': [
    { question: "What does The Sea at Katwijk show?", answer: "<a href=\"/apps/masterpieces/artist/jan-toorop\"><strong>Toorop</strong></a> painted the <strong>North Sea coast</strong> at Katwijk, a Dutch seaside village. The work shows his ability to shift between decorative Symbolism and more naturalistic seascapes." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, which covers the full range of Dutch art history from the Golden Age to the modern era." },
    { question: "Why did Toorop paint Katwijk?", answer: "<strong>Katwijk</strong> was a popular destination for Dutch painters in the late 19th century. <a href=\"/apps/masterpieces/artist/jan-toorop\"><strong>Toorop</strong></a> spent time in various coastal towns, and the flat Dutch seascape gave him a subject quite different from his more fantastical symbolic works." }
  ],
  'jan-van-eyck-the-ghent-altarpiece-exterior': [
    { question: "What does the exterior of the Ghent Altarpiece show?", answer: "The closed panels show an <strong>Annunciation scene</strong> with the Angel Gabriel and the Virgin Mary, along with prophets and sibyls. When closed, <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> altarpiece presented a more restrained, grisaille palette to everyday viewers." },
    { question: "Where is the Ghent Altarpiece displayed?", answer: "It's in <a href=\"/apps/masterpieces/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium, where it's been since its completion in 1432. It's considered one of the most important artworks of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>." },
    { question: "Why does the altarpiece have an exterior and interior?", answer: "<strong>Polyptych altarpieces</strong> were designed to be opened on feast days, revealing the vibrant interior panels. The exterior was what parishioners saw most of the time. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> painted both sides with extraordinary care." }
  ],
  'jan-van-eyck-the-birth-of-john-the-baptist': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> painted the <strong>birth of John the Baptist</strong>, a biblical scene showing the newborn being tended to while his mother Elizabeth rests. The domestic detail and rich color are hallmarks of early Netherlandish painting." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/turin-city-museum-of-ancient-art-turin-italy\"><strong>Turin City Museum of Ancient Art</strong></a> in Italy. This is part of a group of miniature-like panels attributed to Van Eyck or his workshop." },
    { question: "What makes Van Eyck's technique so important?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> perfected the use of <strong>oil glazes</strong> to achieve luminous color and fine detail that no one had matched before. His technique allowed him to render textures like skin, fabric, and metal with near-photographic precision." }
  ],
  'jan-van-eyck-the-ghent-altarpiece-the-virgin-mary': [
    { question: "What does this panel of the Ghent Altarpiece show?", answer: "This is the panel showing the <strong>Virgin Mary</strong> from the upper register of <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> Ghent Altarpiece. She's depicted reading, crowned, and draped in rich blue robes, painted with extraordinary precision." },
    { question: "Where is this panel?", answer: "It's part of the Ghent Altarpiece in <a href=\"/apps/masterpieces/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium. The altarpiece was recently restored, bringing its original brilliance back to view." },
    { question: "How detailed is Van Eyck's painting here?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> detail is almost microscopic. Individual <strong>threads in fabric</strong>, tiny jewels in the crown, and subtle light reflections are all visible. This level of precision was groundbreaking in the 1430s and still astonishes viewers." }
  ],
  'jan-van-eyck-the-erythraean-sibyl': [
    { question: "Who is the Erythraean Sibyl?", answer: "She was one of the <strong>ancient prophetesses</strong> believed to have foretold Christ's coming. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> included her on the exterior of the Ghent Altarpiece alongside other prophetic figures, linking pagan and Christian traditions." },
    { question: "Where is this panel displayed?", answer: "It's part of the Ghent Altarpiece in <a href=\"/apps/masterpieces/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium. The sibyls appear on the exterior panels alongside Old Testament prophets." },
    { question: "Why include pagan prophets in a Christian altarpiece?", answer: "Medieval theology held that <strong>pagan sibyls</strong> had independently predicted Christ's birth, validating Christianity through non-biblical sources. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> followed this tradition, giving the sibyl the same careful treatment as biblical figures." }
  ],
  'jan-van-goyen-landscape-with-two-oaks': [
    { question: "What does Landscape with Two Oaks show?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-goyen\"><strong>Van Goyen</strong></a> painted two <strong>prominent oak trees</strong> dominating a flat Dutch landscape. His restrained, nearly monochromatic palette of browns and greens was influential in developing the tonal phase of Dutch landscape painting." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. <a href=\"/apps/masterpieces/artist/jan-van-goyen\"><strong>Van Goyen</strong></a> is well represented in Dutch museum collections." },
    { question: "What is Van Goyen's importance in Dutch art?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-goyen\"><strong>Van Goyen</strong></a> pioneered the <strong>tonal landscape</strong> style of the 1630s-40s, stripping away bright color in favor of atmospheric unity. His approach influenced Ruisdael and other later Dutch landscapists." }
  ],
  'jean-antoine-watteau-the-foursome': [
    { question: "What is The Foursome about?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> depicted an elegant group of <strong>four figures</strong> in a parkland setting, engaged in leisurely conversation. This type of scene, the fête galante, was his invention and became a recognized genre in French painting." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fine-arts-museums-of-san-francisco-san-francisco-c\"><strong>Fine Arts Museums of San Francisco</strong></a>. <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau's</strong></a> works are scattered across major museums worldwide." },
    { question: "What is a fête galante?", answer: "It's a genre <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> created: <strong>elegant outdoor gatherings</strong> of well-dressed figures in parklike settings, blending reality and fantasy. The French Academy coined the term specifically for his work, and it became a hallmark of <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> art." }
  ],
  'jean-antoine-watteau-the-pleasures-of-the-ball': [
    { question: "What does The Pleasures of the Ball depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> painted an <strong>elegant outdoor dance</strong> with couples in fine dress moving through a grand architectural setting. The scene blends the formality of court life with the dreamlike quality of his fête galante style." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London, one of England's oldest public art galleries with a strong collection of Old Masters." },
    { question: "How did Watteau influence later art?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> defined the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> sensibility: lightness, elegance, and a bittersweet mood. His paintings influenced Boucher, Fragonard, and ultimately the Impressionists, who admired his loose brushwork and open-air settings." }
  ],
  'jean-antoine-watteau-study-of-a-woman39s-head': [
    { question: "What is this study?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> painted a quick <strong>head study</strong> of a woman, likely in preparation for a larger composition. His studies are prized for their freshness and sensitivity, capturing fleeting expressions with delicate brushwork." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a fine collection of <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> French painting." },
    { question: "Why are Watteau's studies valued?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> filled sketchbooks with <strong>figure studies</strong> that he reused across multiple paintings. These studies show his observational skill at its most direct, without the polished finish of his completed works." }
  ],
  'jean-antoine-watteau-the-marriage-contract-in-a-landscape': [
    { question: "What does The Marriage Contract show?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> set a <strong>marriage contract signing</strong> in an outdoor landscape, blending a legal ceremony with his trademark fête galante atmosphere. The mixing of formal occasion and dreamy parkland is characteristically Watteau." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds a diverse collection of French painting alongside its famous Spanish holdings." },
    { question: "What period does Watteau represent?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> bridges the late <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and early <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>. Working in the early 1700s, he softened Baroque grandeur into something more intimate and playful, setting the tone for 18th-century French art." }
  ],
  'jean-antoine-watteau-the-monkey-sculptor': [
    { question: "What is The Monkey Sculptor about?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> depicted a <strong>monkey acting as a sculptor</strong>, part of the singerie tradition where monkeys imitate human activities. These witty scenes satirize human pretension while showcasing the artist's playful side." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-d39orl233ans-orleans-france\"><strong>Musée des Beaux-Arts d'Orléans</strong></a> in France. The museum holds a varied collection of French art from different periods." },
    { question: "What is singerie in art?", answer: "<strong>Singerie</strong> (from the French for \"monkey trick\") is a decorative tradition showing monkeys engaged in human activities like painting, playing music, or, here, sculpting. <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> used the format to gently mock artistic pretension." }
  ],
  'jean-auguste-dominique-ingres-venus-wounded-by-diomedes-returns-to-olympus': [
    { question: "What mythological scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> painted <strong>Venus retreating to Mount Olympus</strong> after being wounded by the Greek warrior Diomedes during the Trojan War. The subject comes from Homer's Iliad and reflects Ingres's devotion to classical themes." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland, which holds an important collection of European painting from the Renaissance to the modern era." },
    { question: "What style is Ingres associated with?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> was the leading figure of <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> in 19th-century France. He prized precise drawing above all, and his smooth, porcelain-like figures became the standard against which academic painters measured themselves." }
  ],
  'jean-auguste-dominique-ingres-male-nude': [
    { question: "What is this work?", answer: "It's an <strong>academic nude study</strong> by <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>, the kind of exercise required at the French Academy. Even in student work, his extraordinary draftsmanship and smooth modeling of the human form are evident." },
    { question: "Where is this held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-ingres-montauban-france\"><strong>Musée Ingres</strong></a> in Montauban, the artist's birthplace. The museum holds the largest collection of <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres's</strong></a> drawings and paintings." },
    { question: "Why are academic nudes important?", answer: "<strong>Life drawing</strong> from nude models was the foundation of academic training in 18th- and 19th-century France. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres's</strong></a> studies show the disciplined approach that made him France's most respected draftsman." }
  ],
  'jean-auguste-dominique-ingres-portrait-of-a-man': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> painted a <strong>male portrait</strong> with his signature precision: crisp contours, smooth skin, and careful attention to clothing and expression. His portraits were as sought-after as his history paintings." },
    { question: "Where is this work kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> produced many portraits throughout his career, and a good number remain privately held." },
    { question: "How did Ingres approach portraiture?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> claimed to dislike portrait work, calling it a distraction from history painting. Yet his portraits are among the finest of the 19th century, with <strong>razor-sharp drawing</strong> and a knack for capturing personality through pose and gaze." }
  ],
  'jean-baptiste-greuze-the-guitarist': [
    { question: "What does The Guitarist depict?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-greuze\"><strong>Greuze</strong></a> painted a figure <strong>playing guitar</strong>, rendered with the soft modeling and expressive faces that made him popular in 18th-century France. His genre paintings often carried a sentimental, moralizing tone." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-nantes-nantes-france\"><strong>Musée des Beaux-Arts de Nantes</strong></a> in France. Regional French museums hold many important works by <a href=\"/apps/masterpieces/artist/jean-baptiste-greuze\"><strong>Greuze</strong></a> and his contemporaries." },
    { question: "What is Greuze known for?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-greuze\"><strong>Greuze</strong></a> specialized in <strong>sentimental genre scenes</strong> and expressive head studies. He was hugely popular during the reign of Louis XV, though his reputation declined when <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> shifted taste toward sterner subjects." }
  ],
  'jean-baptiste-simeon-chardin-still-life-with-cat-and-fish': [
    { question: "What does Still Life with Cat and Fish show?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted a <strong>cat eyeing fish</strong> on a kitchen table, a scene of domestic life rendered with quiet mastery. His still lifes transform ordinary objects into subjects of real beauty and presence." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid. The museum holds a strong collection of 18th-century European painting." },
    { question: "Why is Chardin considered a master of still life?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> brought a <strong>quiet dignity</strong> to humble subjects: kitchen utensils, food, animals. His soft brushwork and subtle color harmonies give everyday objects a meditative quality that influenced Cézanne and later modern painters." }
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
