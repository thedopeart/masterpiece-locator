const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'frans-hals-pieter-cornelisz-van-der-morsch': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/carnegie-museum-of-art\"><strong>Carnegie Museum of Art</strong></a> in Pittsburgh, Pennsylvania." },
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of Pieter Cornelisz. van der Morsch</strong>, a Leiden cloth worker. Hals painted him with the <strong>loose, rapid brushwork</strong> that made his portraits feel startlingly alive." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this work. His <strong>visible, energetic brushstrokes</strong> captured personality with an immediacy that wouldn't be matched until Manet, two centuries later." }
  ],
  'frans-hals-shrovetide-revellers-the-merry-company': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>revellers celebrating Shrovetide</strong> (Carnival), the festivities before Lent. Hals painted their <strong>grinning, tipsy faces</strong> with a spontaneity that captures the chaos of the celebration." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. His ability to freeze <strong>laughter and movement</strong> in paint made him the Dutch Golden Age's most vivid portraitist." }
  ],
  'frans-hals-portrait-of-a-man': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "It shows an <strong>unidentified man</strong> painted with Hals's characteristic <strong>quick, confident brushwork</strong>. His portraits give sitters a living presence that formal Dutch portraiture typically lacked." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait. The Impressionists admired his <strong>visible brushwork</strong>, seeing him as a forerunner of their own technique." }
  ],
  'frans-hals-marriage-portrait-of-isaac-massa-and-beatrix-van-d': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "What does this painting depict?", answer: "It shows <strong>Isaac Massa and Beatrix van der Laen</strong> on their wedding day. Hals placed them outdoors in a garden, an <strong>unusually informal</strong> approach for a marriage portrait of the period." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> double portrait around 1622. The relaxed, smiling poses broke with the <strong>stiff formality</strong> of conventional Dutch marriage portraits." }
  ],
  'frans-hals-young-man-and-woman-in-an-inn-yonker-ramp-and-his-': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young man (Yonker Ramp) with his sweetheart in an inn</strong>. Hals captures their drunken high spirits with <strong>rapid, slashing brushstrokes</strong> that convey movement and laughter." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> tavern scene. His genre paintings of <strong>laughing drinkers and musicians</strong> are among the most exuberant images of the Dutch Golden Age." }
  ],
  'frans-hals-singing-boy-with-a-flute': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin." },
    { question: "What does this painting depict?", answer: "It shows a <strong>boy singing and playing a flute</strong>. Hals's genre paintings of young musicians radiate a <strong>joyful spontaneity</strong> that makes them perennially popular." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre piece. His paintings of <strong>laughing children and musicians</strong> influenced genre painters across the Netherlands." }
  ],
  'frans-hals-jacobus-zaffius': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/frans-hals-museum-haarlem-netherlands\"><strong>Frans Hals Museum</strong></a> in Haarlem, the artist's hometown." },
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of Jacobus Zaffius</strong>, an archdeacon of Haarlem's St. Bavo Church. Hals painted him with the <strong>direct, energetic brushwork</strong> that defines his mature style." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> created this work. He spent his entire career in <strong>Haarlem</strong>, and the museum bearing his name holds the finest collection of his paintings." }
  ],
  'franz-marc-large-lenggries-horses': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>horses at Lenggries</strong>, a Bavarian village. Marc painted <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a> repeatedly, using bold color to express what he saw as their <strong>spiritual purity</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> painting. He co-founded <strong>Der Blaue Reiter</strong> with Kandinsky in 1911, one of the most important avant-garde groups in modern art." },
    { question: "What style is this painting?", answer: "It's German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Marc assigned <strong>symbolic meanings to colors</strong>: blue for masculinity and spirituality, yellow for femininity, red for violence. His animal paintings radiate this color philosophy." }
  ],
  'franz-marc-larch-sapling': [
    { question: "Where is Larch Sapling?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museum-ludwig-cologne-germany\"><strong>Museum Ludwig</strong></a> in Cologne, Germany." },
    { question: "What does this painting depict?", answer: "It shows a <strong>young larch tree</strong> rendered in Marc's abstract, prismatic style. By 1911, his <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> paintings were dissolving forms into <strong>interlocking planes of color</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscape. He was killed at Verdun in 1916 at age 36, cutting short one of the most <strong>promising careers in modern art</strong>." }
  ],
  'franz-von-stuck-pieta': [
    { question: "What does this painting depict?", answer: "It shows a <strong>Pietà</strong>, the Virgin mourning over Christ's body. Stuck painted this traditional religious subject with the <strong>dramatic lighting and dark palette</strong> of his <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> style." },
    { question: "Who painted this Pietà?", answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> created this work. He was Munich's leading <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter and a teacher of both <strong>Kandinsky and Klee</strong> at the Munich Academy." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> with <strong>dark, theatrical lighting</strong>. Stuck's paintings combine classical subjects with a brooding sensuality that made him one of the most famous artists in turn-of-the-century Germany." }
  ],
  'franz-von-stuck-trout-pond': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>trout pond</strong>, an unusually naturalistic subject for Stuck, who typically painted mythological and allegorical scenes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> created this <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> scene. Beyond painting, he designed his own lavish villa in Munich, now a museum, combining art with <strong>total design</strong>." },
    { question: "What is Stuck known for?", answer: "He's best known for <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> paintings of <strong>femmes fatales, sin, and mythology</strong>. His dark, sensuous canvases made him a celebrity in Munich and earned him a knighthood." }
  ],
  'franz-von-stuck-the-kiss-of-the-sphinx': [
    { question: "Where is The Kiss of the Sphinx?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>sphinx kissing a man</strong>, blending desire and danger. Stuck painted the femme fatale theme obsessively, using mythology to explore the <strong>power dynamics of sexuality</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> created this <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painting. His images of <strong>sphinxes, Medusas, and seductive women</strong> defined Munich Symbolism and influenced Klimt's approach to similar themes." }
  ],
  'frederic-bazille-study-of-flowers': [
    { question: "What does this painting depict?", answer: "It's a <strong>study of <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\">flowers</a></strong>, painted with the fresh, natural color that Bazille brought to all his subjects. His still lifes share the same <strong>plein-air luminosity</strong> as his figure paintings." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this study. He was a founding member of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> circle, close friends with <strong>Monet, Renoir, and Sisley</strong>." },
    { question: "Why is Bazille important?", answer: "Bazille helped invent <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> but was <strong>killed in the Franco-Prussian War in 1870</strong> at age 28, before the first Impressionist exhibition. His early death is one of art history's great losses." }
  ],
  'frederic-bazille-landscape-at-chailly': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>landscape at Chailly-en-Bière</strong>, near Fontainebleau. Bazille painted outdoors alongside Monet in the forest, developing the <strong>plein-air techniques</strong> that would define Impressionism." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work. He and Monet painted side by side at Chailly, sharing ideas about <strong>light, color, and outdoor painting</strong>." },
    { question: "What style is this painting?", answer: "It's proto-<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Bazille's <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> combine <strong>natural light with structured composition</strong>, bridging the Barbizon tradition and the Impressionist revolution." }
  ],
  'frederic-bazille-the-improvised-fieldhospital': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Monet being treated after a leg injury</strong> in a makeshift hospital. Bazille, who was studying medicine, painted his friend recovering with <strong>frank, unsentimental realism</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this scene. He financially supported <strong>Monet during his early struggles</strong>, sharing studios and buying his paintings when no one else would." }
  ],
  'frederic-bazille-studio-in-the-rue-de-furstenberg': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, Bazille's hometown, which holds the largest collection of his work." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Bazille's studio on rue de Furstenberg</strong> in Paris. He shared studios with Monet and Renoir, and his studio paintings document the <strong>bohemian origins of <a href=\"/apps/masterpieces/movement/impressionism\">Impressionism</a></strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this interior. His studio paintings are valuable documents of the <strong>early Impressionist circle</strong> before fame found them." }
  ],
  'frederic-bazille-selfportrait': [
    { question: "What does this self-portrait show?", answer: "Bazille depicts himself as a <strong>serious young man</strong>, with the direct gaze and natural light typical of his approach. He painted few self-portraits during his tragically short career." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> (1841-1870) created this work. He came from a <strong>wealthy Montpellier family</strong> and used his resources to support his struggling friends Monet and Renoir." },
    { question: "What style is this painting?", answer: "It reflects early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> portraiture: <strong>natural light, direct observation, and fresh color</strong>. Bazille's portraits anticipate the informal approach that would define the movement." }
  ],
  'frederic-bazille-the-heron': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong><a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\">heron</a></strong>, painted with Bazille's characteristic naturalism. His studies of wildlife show the same keen observation he brought to landscapes and figures." },
    { question: "Who painted The Heron?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this work. His Southern French upbringing gave him a deep connection to <strong>nature and outdoor light</strong> that informed all his painting." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Bazille's nature studies combine <strong>careful observation with luminous color</strong>, showing the plein-air approach he developed alongside Monet." }
  ],
  'frederic-bazille-still-life-with-fish': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>still life arrangement of fish</strong>. Bazille painted still lifes with the same fresh, outdoor luminosity he brought to landscapes, giving everyday subjects a <strong>vivid natural presence</strong>." },
    { question: "Who painted this still life?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this work. He was one of the most talented painters of his generation, but his <strong>death at 28 in the Franco-Prussian War</strong> cut his career short." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, with <strong>natural light and bold color</strong> applied to a traditional subject. Bazille's still lifes feel fresh and modern compared to the dark studio arrangements of earlier painters." }
  ],
  'frederic-bazille-landscape-of-aiguesmortes': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Aigues-Mortes</strong>, a medieval walled town in the Camargue wetlands of southern France. Bazille painted the <strong>flat, sun-drenched landscape</strong> of his native Languedoc region." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. His Southern French subjects have a <strong>brighter, hotter palette</strong> than the landscapes Monet and Renoir painted around Paris." }
  ],
  'frederic-bazille-the-pink-dress': [
    { question: "Where is The Pink Dress?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman in a <a href=\"https://luxurywallart.com/collections/pink-wall-art\" target=\"_blank\" rel=\"noopener\">pink</a> dress</strong> looking out over a sunlit landscape. It's one of Bazille's most celebrated works, combining <strong>figure and landscape in brilliant outdoor light</strong>." },
    { question: "Who painted The Pink Dress?", answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> masterwork. The painting demonstrates his unique ability to merge <strong>figure painting with plein-air landscape</strong>, a combination few of his contemporaries achieved so naturally." }
  ],
  'frederic-edwin-church-storm-in-the-mountains': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>storm sweeping through <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\">mountains</a></strong>, likely in South America. Church traveled to the Andes twice, painting the <strong>dramatic landscapes</strong> that made him America's most famous painter." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape. He was the star of the <strong>Hudson River School</strong>, Thomas Cole's most gifted student." }
  ],
  'frederic-edwin-church-turner-pond-with-pomola-peak-and-baxter-peak-maine': [
    { question: "Where is this work?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/cooper-hewitt-smithsonian-design-museum-new-york-c\"><strong>Cooper Hewitt Museum</strong></a> in New York City." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Turner Pond with Pomola Peak and Baxter Peak</strong> in Maine. Church painted the American wilderness with <strong>scientific precision and Romantic grandeur</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape. His detailed studies of specific locations reflect the 19th-century belief that <strong>American nature was a form of divine revelation</strong>." }
  ],
  'frederic-edwin-church-tequendama-falls-near-bogota-new-granada': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/cincinnati-art-museum-cincinnati-oh-us\"><strong>Cincinnati Art Museum</strong></a> in Ohio." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Tequendama Falls near Bogotá</strong>, Colombia. Church followed Alexander von Humboldt's call for artists to paint South America's <strong>tropical landscapes</strong>, traveling there in 1853 and 1857." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape. His South American paintings drew huge crowds in New York, with viewers <strong>paying admission to see single canvases</strong>." }
  ],
  'frederic-leighton-the-golden-hours': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>figures in a moment of golden leisure</strong>. Leighton's paintings of idealized beauty combine <strong>classical subjects with sumptuous color</strong> and meticulous draftsmanship." },
    { question: "Who painted The Golden Hours?", answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a> created this work. He was president of the Royal Academy and the only British artist ever raised to the <strong>peerage</strong>, becoming Baron Leighton the day before he died." },
    { question: "What style is this painting?", answer: "It's <strong>Victorian Classicism</strong>, combining Greek and Roman ideals with rich, sensuous color. Leighton's paintings of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>beautiful women</strong></a> in classical settings defined high Victorian taste." }
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
