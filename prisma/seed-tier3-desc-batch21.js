const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'fra-angelico-madonna-and-child-of-the-grapes': [
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna holding the Christ Child, who grasps a bunch of grapes</strong>. Grapes symbolize the Eucharist and Christ's future sacrifice, a common motif in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional art." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> created this panel. His Madonnas combine <strong>luminous color and gentle expression</strong> with theological symbolism woven naturally into each detail." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, blending <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> ground tradition with the softer modeling and naturalism emerging in 15th-century Florence." }
  ],
  'francesco-guardi-the-giudecca-canal-with-the-zattere': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Giudecca Canal and the Zattere waterfront</strong> in Venice. Guardi painted the city with a <strong>shimmering, atmospheric touch</strong> that feels more spontaneous than Canaletto's precise views." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this veduta. He was Canaletto's main rival as Venice's view painter, favoring <strong>loose brushwork and silvery light</strong> over topographic precision." },
    { question: "What style is this painting?", answer: "It's an 18th-century <a href=\"/apps/masterpieces/movement/baroque\"><strong>Venetian veduta</strong></a>. Guardi's flickering, impressionistic technique anticipated later developments in <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painting by over a century." }
  ],
  'francesco-guardi-piazza-san-marco-venice': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-museum-of-serbia-belgrade-serbia\"><strong>National Museum of Serbia</strong></a> in Belgrade." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Piazza San Marco</strong>, Venice's iconic square. Guardi painted it with <strong>flickering brushstrokes</strong> that capture the play of light on stone and water." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this veduta. Unlike Canaletto's precise topography, Guardi's views emphasize <strong>atmosphere and mood</strong>, making him a favorite of later Impressionist admirers." }
  ],
  'francesco-guardi-town-with-a-bridge': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>town with a bridge</strong>, one of Guardi's capricci (imaginary views). He invented architectural scenes as freely as he recorded real ones." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this view. His <strong>capricci</strong> (fantasy scenes) combined real Venetian elements into imaginary compositions, prized by collectors for their poetic freedom." }
  ],
  'francesco-guardi-the-lagoon-with-boats-gondolas-and-rafts': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Venetian lagoon busy with <a href=\"https://luxurywallart.com/collections/boat-art\" target=\"_blank\" rel=\"noopener\">boats</a>, gondolas, and rafts</strong>. Guardi captured the lagoon's shimmering light with quick, fluid brushstrokes." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this lagoon scene. His <strong>atmospheric, sketch-like technique</strong> was undervalued in his lifetime but later recognized as remarkably modern." },
    { question: "What style is this painting?", answer: "It's a Venetian <strong>veduta</strong> painted with unusually loose brushwork. Guardi's handling of water and light anticipates <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> by more than a century." }
  ],
  'francesco-guardi-piazza-san-marco': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/accademia-carrara-bergamo-italy\"><strong>Accademia Carrara</strong></a> in Bergamo, Italy." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Piazza San Marco</strong> with its basilica, campanile, and bustling crowds. Guardi's version feels <strong>alive with movement</strong>, the figures rendered as quick dashes of paint." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this veduta. He painted San Marco many times, each version capturing <strong>different light and weather conditions</strong> with his characteristic spontaneity." }
  ],
  'francesco-guardi-san-cristoforo-san-michele-and-murano-seen-from-th': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland." },
    { question: "What does this painting depict?", answer: "The view shows the <strong>islands of San Cristoforo, San Michele, and Murano</strong> from Venice's Fondamenta Nuove. Guardi captured the <strong>vast expanse of the lagoon</strong> with shimmering atmospheric effects." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this panoramic veduta. His lagoon views are among his finest works, capturing <strong>water, sky, and distant islands</strong> with remarkable economy of brushwork." }
  ],
  'francesco-guardi-the-rialto-bridge-with-the-palazzo-dei-camerlenghi': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Rialto Bridge and the Palazzo dei Camerlenghi</strong>, one of Venice's most painted views. Guardi renders it with his signature <strong>flickering, atmospheric brushwork</strong>." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> created this Venetian veduta. While Canaletto's Rialto views feel like architectural drawings, Guardi's feel like <strong>memories of a place glimpsed in passing</strong>." },
    { question: "What style is this painting?", answer: "It's an 18th-century Venetian <strong>view painting</strong>. Guardi's loose technique and silvery palette set him apart from Canaletto's sharper style, earning him greater appreciation in the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> era." }
  ],
  'francis-picabia-self-portrait': [
    { question: "What does this self-portrait show?", answer: "Picabia depicts himself in a style that shifts depending on the period. His self-portraits range from <strong>Impressionist to abstract to figurative</strong>, reflecting his restless reinvention." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this work. He moved through <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, Cubism, Dada, and figuration, refusing to settle into any single style." },
    { question: "What style did Picabia work in?", answer: "Picabia worked in <strong>every major modern style</strong> and invented some of his own. His Dada machine drawings and <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> paintings made him one of the 20th century's most unpredictable artists." }
  ],
  'francis-picabia-spanish-woman': [
    { question: "What does this painting depict?", answer: "It shows a <strong>Spanish woman</strong>, likely from Picabia's figurative period of the 1920s-1940s. He painted from postcards and magazine photos, deliberately mixing <strong>high art with kitsch sources</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this painting. His figurative works shocked the avant-garde, who expected him to remain abstract after his <strong>Dada provocations</strong>." },
    { question: "What movement did Picabia belong to?", answer: "He was central to <strong>Dada</strong> in New York, Zurich, and Paris. But Picabia resisted all labels, deliberately contradicting each movement he joined, making him one of modernism's <strong>great iconoclasts</strong>." }
  ],
  'francis-picabia-the-port-at-martigues': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>port at Martigues</strong>, a fishing town in Provence. This early work reflects Picabia's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> phase before he moved toward abstraction." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this early <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> scene. He began as a successful Impressionist painter before abandoning the style entirely for Cubism and Dada." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, Picabia's earliest manner. His Impressionist landscapes sold well, giving him the <strong>financial freedom</strong> to pursue radical experimentation later." }
  ],
  'francis-picabia-riverbank': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>riverbank</strong> painted in Picabia's early Impressionist style. Soft light and <strong>broken brushwork</strong> reveal his debt to Monet and Sisley." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this early work. Few people associate the <strong>Dada provocateur</strong> with gentle Impressionist landscapes, but that's where he started." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Picabia mastered and then abandoned this style, moving through <strong>Cubism, Dada, abstraction, and figuration</strong> across his career." }
  ],
  'francis-picabia-the-effect-of-sun-on-the-banks-of-the-loing': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>sunlight on the banks of the Loing River</strong>. Picabia painted this Impressionist landscape in the manner of Sisley, who also painted the Loing extensively." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. His early success with these conventional paintings funded his later <strong>radical experiments</strong>." },
    { question: "What makes Picabia important?", answer: "He was a key figure in <strong>Dada and early abstraction</strong>. His willingness to destroy his own reputation by constantly changing styles made him one of the most <strong>anarchic spirits in modern art</strong>." }
  ],
  'francis-picabia-landscape-paysage': [
    { question: "What does this painting depict?", answer: "It's a <strong><a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscape</a></strong> from Picabia's Impressionist period. The soft colors and atmospheric effects show his early skill before he turned to abstraction and Dada." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this work. He exhibited Impressionist paintings at major Paris galleries before shocking the art world with his <strong>machine drawings and anti-art provocations</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Picabia's landscape period is the <strong>least known chapter</strong> of a career that would include Cubism, Dada, surrealist figuration, and late abstraction." }
  ],
  'francis-picabia-the-martigues': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Martigues</strong>, a Provençal fishing port. Picabia painted southern France with <strong>warm light and loose brushwork</strong> during his Impressionist years." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this early landscape. He later called his Impressionist period a \"<strong>waste of time</strong>,\" though collectors have always valued these works." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Picabia absorbed the movement's <strong>plein-air technique</strong> before rejecting it completely, moving toward the radical experimentation that defined his legacy." }
  ],
  'francis-picabia-the160point160of160the-port160of160sainttropez': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>port of Saint-Tropez</strong>, painted before the town became a celebrity destination. Picabia captured its <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>Mediterranean light</strong></a> in an Impressionist manner." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Francis Picabia</strong></a> created this early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> coastal scene. His wealthy background let him paint freely, sail yachts, and collect fast cars alongside making art." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, Picabia's first artistic phase. He exhibited over 60 Impressionist paintings at major galleries before <strong>abandoning the style around 1909</strong>." }
  ],
  'francisco-de-zurbaran-the-holy-face': [
    { question: "Where is The Holy Face?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Holy Face of Christ</strong> imprinted on Veronica's veil. Zurbarán painted this subject multiple times, each version demonstrating his mastery of <strong>white cloth and subtle shadow</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Francisco de Zurbarán</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotional painting. He's known as the <strong>\"painter of monks\"</strong> for his austere religious works that embody Spanish Counter-Reformation piety." }
  ],
  'francisco-de-zurbaran-the-death-of-st-bonaventura': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>death of St. Bonaventure</strong>, the Franciscan theologian. Zurbarán renders the deathbed scene with <strong>solemn stillness and dramatic light</strong>, his signature combination." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Francisco de Zurbarán</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> masterwork. His religious paintings for Spanish monasteries use <strong>stark lighting and austere composition</strong> to convey deep spiritual gravity." }
  ],
  'francisco-de-zurbaran-saint-margaret-dressed-as-a-shepherdess': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this painting depict?", answer: "It shows <strong>Saint Margaret dressed as a shepherdess</strong>, carrying her attributes. Zurbarán painted female saints in <strong>elaborate contemporary costumes</strong>, making them look like fashionable Sevillian women." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Francisco de Zurbarán</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. His <strong>female saints in rich dresses</strong> are among his most popular works, blending devotion with portraiture." }
  ],
  'francisco-de-zurbaran-st-bartholomew-almost-in-agony': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-de-grenoble-grenoble-france\"><strong>Musée de Grenoble</strong></a> in France." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Bartholomew near death</strong>. Zurbarán painted martyred saints with a <strong>stark realism</strong> that makes suffering feel physically present, not theatrical." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Francisco de Zurbarán</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. His treatment of <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious</strong></a> suffering combines <strong>Caravaggio's dramatic lighting</strong> with a uniquely Spanish austerity." }
  ],
  'francisco-goya-the-rape-of-europa': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Zeus, disguised as a bull, abducting Europa</strong>. Goya painted this classical myth with a <strong>dark, atmospheric palette</strong> that transforms the traditional subject into something brooding." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Francisco Goya</strong></a> created this mythological scene. He could paint in any mode, from <strong>Rococo charm to horrific realism</strong>, making him one of the most versatile artists in Western history." },
    { question: "What style is this painting?", answer: "It bridges <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> and late <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>. Goya's mythological paintings have a <strong>darker, more psychological edge</strong> than the lighthearted versions by Boucher or Tiepolo." }
  ],
  'francois-boucher-the-rest-on-the-flight-into-egypt': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Holy Family resting during their flight into Egypt</strong>. Boucher treats this religious subject with the same <strong>pastel softness and charm</strong> he brought to his mythological scenes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> created this <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> religious painting. As <strong>Madame de Pompadour's favorite painter</strong>, he dominated French art at mid-century." }
  ],
  'francois-boucher-landscape-near-beauvais-early': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>landscape near Beauvais</strong>, painted with Boucher's characteristic <strong>soft greens, blues, and golden light</strong>. His landscapes served as designs for Beauvais tapestries." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> created this <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> landscape. He directed the <strong>Beauvais and Gobelins tapestry works</strong>, designing pastoral scenes that decorated aristocratic homes across Europe." }
  ],
  'francois-boucher-seated-nude': [
    { question: "What does this painting depict?", answer: "It shows a <strong>seated female nude</strong>, rendered with Boucher's trademark <a href=\"https://luxurywallart.com/collections/pink-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>pink</strong></a> flesh tones and soft modeling. His nudes defined the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> ideal of feminine beauty." },
    { question: "Who painted this nude?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> created this work. His nudes, often depicting Venus or Diana, established the <strong>sensuous, decorative style</strong> that defined 18th-century French taste." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, characterized by <strong>pastel color, soft curves, and playful sensuality</strong>. Boucher's nudes were celebrated by aristocratic patrons but later criticized by Diderot as frivolous." }
  ],
  'francois-boucher-leda-and-the-swan': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Leda with the swan</strong>, Zeus in disguise. Boucher painted this erotic mythological subject with the <strong>playful elegance</strong> typical of <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> taste." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> created this mythological scene. He was the leading painter of the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, serving as <strong>First Painter to King Louis XV</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> at its most characteristic: <strong>soft color, erotic mythology, and decorative grace</strong>. Boucher's mythological scenes decorated the private apartments of French aristocracy." }
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
