const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'chaim-soutine-landscape': [
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His landscapes twist trees, roads, and buildings into <strong>churning, emotionally charged</strong> compositions that influenced Abstract <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Soutine's landscapes distort perspective and pulse with <strong>thick impasto</strong>. De Kooning, Bacon, and Lucian Freud all cited him as a major influence." },
    { question: "Where did Soutine paint landscapes?", answer: "Soutine painted at <strong>Céret, Cagnes-sur-Mer, and Chartres</strong> in France. Each location produced a distinct body of work, though all share his turbulent brushwork and emotional intensity." }
  ],
  'chaim-soutine-young-man-wearing-a-small-hat': [
    { question: "What does this painting depict?", answer: "The portrait shows a <strong>young man in a small hat</strong>, rendered with Soutine's characteristic distortions. His portraits push features off-center and build flesh from thick, writhing paint strokes." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. He painted hotel staff, pastry cooks, and anonymous sitters with the same <strong>obsessive intensity</strong> he brought to carcasses and landscapes." },
    { question: "What movement does Soutine belong to?", answer: "Soutine is linked to <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and the <strong>School of Paris</strong>. His friend Modigliani introduced him to the dealer Zborowski, who supported both artists during their years of poverty in Montparnasse." }
  ],
  'chaim-soutine-suburban-landscape-with-red-houses': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>red-roofed houses in a suburban landscape</strong>, their forms distorted by Soutine's convulsive brushwork. Buildings, trees, and sky merge into a single turbulent surface." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscapes project <strong>inner emotional states onto physical scenery</strong>, warping familiar views into something visceral." },
    { question: "Why are Soutine's paintings valuable?", answer: "His work bridges European Expressionism and American Abstract Expressionism. Collectors prize the <strong>raw physical energy of his paint handling</strong>. His paintings regularly sell for millions at auction, with top works exceeding $20 million." }
  ],
  'chaim-soutine-young-girl-in-red-blouse': [
    { question: "Where is Young Girl in Red Blouse?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/barnes-foundation-philadelphia-pa-us\"><strong>Barnes Foundation</strong></a> in Philadelphia. Albert Barnes was one of Soutine's earliest American collectors, acquiring many works in the 1920s." },
    { question: "What does this painting depict?", answer: "The portrait shows a <strong>young girl wearing a red blouse</strong>. Soutine's portraits of ordinary people use <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>vivid color</strong></a> and distorted forms to reveal emotional truth rather than physical likeness." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. Albert Barnes's visit to Paris in 1922, when he bought <strong>over 50 Soutine paintings</strong> at once, transformed the artist from obscurity to success overnight." }
  ],
  'chaim-soutine-the-red-castle-of-c233ret': [
    { question: "What does this painting depict?", answer: "The painting shows the <strong>red castle at Céret</strong>, a town in the French Pyrenees. Soutine painted at Céret from 1919 to 1922, producing some of his most violently distorted landscapes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscape. His <strong>Céret paintings</strong> are among his most prized works, with buildings and hillsides twisting as if caught in an earthquake." },
    { question: "Why is Céret important to art?", answer: "Céret attracted major modern artists: <strong>Picasso, Braque, and Juan Gris</strong> worked there before Soutine. It's sometimes called \"the Mecca of Cubism,\" though Soutine used it for his own Expressionist purposes entirely." }
  ],
  'entry-alexander-babylon': [
    { question: "Where is this painting displayed?", answer: "This monumental work hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of Le Brun's largest and most important history paintings." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Alexander the Great entering Babylon in triumph</strong> after conquering the Persian Empire. Le Brun painted it in 1665 as part of a grand cycle celebrating Alexander's campaigns." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/charles-le-brun\"><strong>Charles Le Brun</strong></a> created this in 1665. He was <strong>Louis XIV's chief painter</strong> and director of the French Academy, the most powerful artist in France during the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> era." }
  ],
  'sick-girl-krohg': [
    { question: "Where is Sick Girl displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo. It hangs near Edvard Munch's works, showing the connection between the two Norwegian painters." },
    { question: "What does Sick Girl depict?", answer: "The painting shows a <strong>pale young girl propped up in bed</strong>, a subject of illness and mortality. Krohg painted it in 1881, five years before Munch tackled the same theme in his famous painting of the same name." },
    { question: "Who painted Sick Girl?", answer: "<a href=\"/apps/masterpieces/artist/christian-krohg\"><strong>Christian Krohg</strong></a> created this in 1881. He was Norway's leading <strong>Naturalist painter</strong> and a teacher of the young Edvard Munch, whose own Sick Child was partly inspired by this work." }
  ],
  'cimabue-madonna-enthroned-with-the-child-and-two-angels': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, in the same room as other great medieval and early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> altarpieces." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> (c. 1240-1302) created this work. He's considered the <strong>last great painter of the Byzantine tradition</strong> in Italy and the teacher of Giotto, who revolutionized Western art." },
    { question: "What style is this painting?", answer: "It bridges <strong>Byzantine icon painting and early Renaissance naturalism</strong>. Cimabue's Madonnas show the gold backgrounds and formal poses of Byzantine art, but with a new softness and humanity that points toward Giotto." }
  ],
  'cimabue-madonna-enthroned-with-the-child-st-francis-st-dom': [
    { question: "Where is this painting?", answer: "This altarpiece is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It's a key work in understanding the transition from <strong>Byzantine to Renaissance painting</strong>." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child enthroned with St. Francis and St. Dominic</strong>. The presence of both saints reflects the painting's likely origin in a church connected to both mendicant orders." },
    { question: "Who was Cimabue?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> was a Florentine painter who broke from rigid <strong>Byzantine formulas</strong>. Dante mentions him in the Divine Comedy, and Vasari placed him at the very beginning of Italian art's rebirth." }
  ],
  'cimabue-the-flagellation-of-christ': [
    { question: "Where is The Flagellation of Christ?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/frick-collection\"><strong>Frick Collection</strong></a> in New York City, one of America's finest small museums of Old Master art." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Christ being whipped before his crucifixion</strong>. Cimabue renders the subject with the gold ground and formal composition of Byzantine art, but with emotional weight that feels new." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> (c. 1240-1302) created this panel. He's the pivotal figure between <strong>Byzantine tradition and the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a></strong>, credited with teaching Giotto." }
  ],
  'cimabue-kristi-gripande-detail': [
    { question: "Where is this fresco?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy. Cimabue's frescoes there are among the most important surviving works of 13th-century Italian painting." },
    { question: "What does this fresco depict?", answer: "This detail shows a scene from the <strong>arrest (seizure) of Christ</strong>. Cimabue's Assisi frescoes have suffered severe damage from earthquakes and oxidation, but remain crucial documents of medieval art." },
    { question: "Who painted this fresco?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> painted this in the Upper Church at Assisi around 1280. His frescoes there preceded <strong>Giotto's famous cycle</strong> in the same basilica and influenced the younger painter's approach." }
  ],
  'cimabue-the-virgin-and-child-in-majesty-surrounded-by-six-': [
    { question: "Where is this painting?", answer: "This large altarpiece hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's also known as the \"Maestà\" and is one of Cimabue's most important surviving panel paintings." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin and Child enthroned, surrounded by six angels</strong>. The gold background and hierarchical composition follow Byzantine convention, but Cimabue adds subtle three-dimensionality to the throne and figures." },
    { question: "Who was Cimabue?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> (c. 1240-1302) stands at the birth of Italian painting. He's the bridge between <strong>Byzantine icon tradition and the naturalism of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a></strong>, preparing the ground for his pupil Giotto." }
  ],
  'claude-lorrain-the-campo-vaccino-rome': [
    { question: "Where is The Campo Vaccino displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London. It's one of Claude's finest Roman views." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Campo Vaccino (Cow Field)</strong>, the name for the Roman Forum when it served as a cattle market. Claude captured the ancient ruins bathed in his signature <strong>golden, hazy light</strong>." },
    { question: "Who painted this view of Rome?", answer: "<a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landscape. He spent most of his life in Rome, painting <strong>idealized landscapes</strong> suffused with warm light that influenced Turner, Constable, and the Hudson River School." }
  ],
  'claude-lorrain-roman-ideal-landscape-with-cephalus-procris-and-di': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin. Claude's mythological landscapes are among the most sought-after Old Master paintings." },
    { question: "What does this painting depict?", answer: "The scene places the mythological figures of <strong>Cephalus, Procris, and Diana</strong> in an idealized Roman landscape. Claude used classical mythology as a pretext for painting <strong>luminous, golden scenery</strong>." },
    { question: "Who was Claude Lorrain?", answer: "<a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> (1600-1682) was a French painter who worked in Rome. He's the greatest <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landscape painter, famous for <strong>idealized vistas bathed in radiant light</strong>." }
  ],
  'claude-lorrain-villagers-dancing': [
    { question: "Where is Villagers Dancing displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>villagers dancing in an idyllic landscape</strong>. Claude populated his golden landscapes with small pastoral figures, creating visions of an idealized classical world at peace." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> classical landscape. Claude invented the <strong>ideal landscape</strong> genre: composed, luminous scenery with classical architecture, warm light, and tiny figures that set a mood of pastoral harmony." }
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
