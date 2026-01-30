const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'petrus-christus-the-man-of-sorrows': [
    { question: "What does The Man of Sorrows depict?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> painted Christ as the <strong>Man of Sorrows</strong>, a devotional image showing Jesus after the Passion with visible wounds. This subject was meant for private meditation and prayer." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a> in the UK. The museum holds one of Britain's finest collections of <strong>Pre-Raphaelite and Old Master</strong> works." },
    { question: "What period does this represent?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. Christus rendered <strong>flesh and fabric</strong> with the oil painting precision pioneered by Jan van Eyck in 15th-century Bruges." }
  ],
  'petrus-christus-the-death-of-the-virgin': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> depicted the <strong>death of the Virgin Mary</strong> surrounded by the apostles. The intimate composition follows a longstanding Northern European tradition for this subject." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/timken-museum-of-art-san-diego-ca-us\"><strong>Timken Museum of Art</strong></a> in San Diego, California. The museum's small but choice collection includes significant <strong>European Old Master</strong> paintings." },
    { question: "What style is this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting with fine detail in the <strong>drapery and faces</strong>. Christus was among the most important painters working in Bruges after van Eyck's death." }
  ],
  'piero-della-francesca-the-madonna-of-mercy': [
    { question: "What does The Madonna of Mercy depict?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> painted the Virgin Mary spreading her <strong>cloak to shelter worshippers</strong> beneath it. This protective gesture, called Madonna della Misericordia, was a popular devotional image in Italian art." },
    { question: "Where is this painting located?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-civico-di-sansepolcro-sansepolcro-italy\"><strong>Museo Civico di Sansepolcro</strong></a> in Piero's hometown. The polyptych was his <strong>first major commission</strong>, ordered in 1445." },
    { question: "What movement does this belong to?", answer: "It's an early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work showing Piero's developing mastery of <strong>geometric form and spatial clarity</strong>. His mathematical approach to composition would define his later career." }
  ],
  'piero-della-francesca-st-elizabeth-saves-a-boy': [
    { question: "What miracle does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> depicted <strong>Saint Elizabeth</strong> performing the miracle of saving a boy. The scene is part of a polyptych celebrating the saint's miraculous deeds." },
    { question: "Where is this painting held?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia. The museum preserves key works of <strong>Umbrian Renaissance</strong> painting." },
    { question: "What style characterizes this work?", answer: "It reflects the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> emphasis on <strong>clear spatial construction</strong> and dignified figures. Piero's calm, monumental style set him apart from more dramatic contemporaries." }
  ],
  'piero-della-francesca-madonna-and-child': [
    { question: "What does this Madonna and Child show?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> painted the <strong>Virgin Mary with the infant Christ</strong> in his characteristic still, contemplative manner. The figures radiate a calm geometric solidity." },
    { question: "Where can I view this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia, Italy. The gallery holds several works from Piero's <strong>Umbrian period</strong>." },
    { question: "What makes Piero's style distinctive?", answer: "His figures have a <strong>sculptural stillness</strong> rooted in mathematical proportion. Piero wrote treatises on perspective and geometry, making him one of the most intellectual painters of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'piero-della-francesca-st-anthony-resurrects-a-child': [
    { question: "What miracle is depicted here?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> showed <strong>Saint Anthony of Padua</strong> performing the miracle of bringing a child back to life. The scene combines devotional purpose with Piero's measured, calm composition." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia. It forms part of a polyptych that demonstrates Piero's <strong>early artistic development</strong>." },
    { question: "What period does this represent?", answer: "It's from the Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, reflecting Piero's unique blend of <strong>mathematical precision</strong> and gentle color. His approach influenced painters across central Italy for generations." }
  ],
  'piero-della-francesca-st-julian': [
    { question: "Who is depicted in this painting?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> painted <strong>Saint Julian</strong>, a legendary Christian saint known for the accidental murder of his parents and subsequent penance. The figure stands with Piero's trademark solemn dignity." },
    { question: "Where is this painting located?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-civico-di-sansepolcro-sansepolcro-italy\"><strong>Museo Civico di Sansepolcro</strong></a>, Piero's birthplace in Tuscany. The museum holds several of his <strong>most important works</strong>." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting with Piero's distinctive <strong>pale, luminous palette</strong> and geometric figure construction. His saints appear almost like architectural forms in human shape." }
  ],
  'piero-della-francesca-st-michael': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> painted the <strong>Archangel Michael</strong>, typically shown as a warrior saint defeating evil. The figure displays Piero's characteristic sculptural solidity and calm expression." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The painting was originally part of a larger <strong>polyptych altarpiece</strong> that has since been separated." },
    { question: "What movement does this belong to?", answer: "It's an Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work. Piero's <strong>mathematical approach</strong> to painting, combined with his soft light and muted colors, created a style unlike any other 15th-century artist." }
  ],
  'dining-room-in-country': [
    { question: "What does The Dining Room in the Country depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> painted an interior view of a <strong>sunlit dining room</strong> opening onto a garden. The scene captures a quiet domestic moment with Bonnard's signature vibrant color and dappled light." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/minneapolis-institute-of-art\"><strong>Minneapolis Institute of Art</strong></a>. The museum holds a strong collection of <strong>French Post-Impressionist</strong> works." },
    { question: "What style is this painting?", answer: "Bonnard was a leading <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> and member of the Nabis group. His <strong>saturated colors</strong> and flattened perspectives drew from both Impressionism and Japanese prints." }
  ],
  'pierre-bonnard-two-poodles': [
    { question: "What does Two Poodles depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted two <strong>poodles</strong> in his warm, intimate style. Animals appeared frequently in his work, especially dogs, which he kept as pets throughout his life." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/southampton-city-art-gallery-southampton-uk\"><strong>Southampton City Art Gallery</strong></a> in the UK. The gallery holds one of the best collections of <strong>modern European art</strong> in southern England." },
    { question: "What style defines this work?", answer: "Bonnard's <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style features <strong>warm color harmonies</strong> and loose brushwork. His <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\"><strong>dog paintings</strong></a> show the same affectionate observation he brought to domestic scenes." }
  ],
  'pierre-bonnard-woman-in-a-green-dress-in-a-garden': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted a <strong>woman wearing a green dress</strong> in a lush garden setting. The figure merges with the surrounding foliage, a technique Bonnard used to dissolve boundaries between people and spaces." },
    { question: "What style is this painting?", answer: "It reflects Bonnard's <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> approach with <strong>rich greens and dappled light</strong>. His garden scenes capture the sensory experience of being surrounded by nature." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Bonnard's <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature scenes</strong></a> and garden compositions remain highly valued among collectors of early modern French painting." }
  ],
  'pierre-bonnard-pot-of-flowers': [
    { question: "What does Pot of Flowers show?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted a <strong>flower arrangement</strong> in his characteristic style of intense, layered color. Still lifes gave him the chance to focus purely on color relationships and light." },
    { question: "What movement is this associated with?", answer: "Bonnard worked within the <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> tradition, pushing color toward greater <strong>saturation and warmth</strong>. His flower paintings are among his most colorful works." },
    { question: "Where is this painting now?", answer: "It's in a <strong>private collection</strong>. Bonnard's <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral paintings</strong></a> are celebrated for their radiant palette and loose, expressive brushwork." }
  ],
  'pierre-bonnard-snowballs': [
    { question: "What does Snowballs depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted <strong>snowball flowers</strong> (viburnum) in his distinctive warm palette. The white blooms contrast with rich background tones, showing his sensitivity to subtle color differences." },
    { question: "What style is this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> still life. Bonnard's approach to <strong>floral subjects</strong> emphasized atmosphere and color sensation over botanical accuracy." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Bonnard painted flowers throughout his career, finding endless variety in their <strong>shapes and colors</strong> across different seasons and settings." }
  ],
  'pierre-bonnard-woman-washing-her-feet': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted a <strong>woman bathing</strong>, one of his most frequent subjects. The intimate scene reflects his lifelong fascination with the human figure in domestic, private moments." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> work with Bonnard's characteristic <strong>warm, glowing skin tones</strong> against tiled or patterned surfaces. His bather paintings influenced later colorists." },
    { question: "Where is this painting located?", answer: "It's in a <strong>private collection</strong>. Bonnard's <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure paintings</strong></a> of bathing women rank among his most admired and frequently exhibited works." }
  ],
  'pierre-bonnard-woman-on-the-street': [
    { question: "What scene does this painting capture?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> depicted a <strong>woman walking on a city street</strong>. His early work was influenced by Japanese prints and Parisian street life, combining flat patterning with observed detail." },
    { question: "What movement is this associated with?", answer: "Bonnard was linked to both the <strong>Nabis group</strong> and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. His street scenes from the 1890s reflect the Nabis' interest in decorative composition and everyday subjects." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Bonnard's early Parisian <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure scenes</strong></a> document the city with a distinctive blend of pattern, color, and wit." }
  ],
  'pierre-bonnard-woman-with-dog': [
    { question: "What does Woman with Dog depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted a <strong>woman accompanied by a dog</strong>, combining two of his favorite subjects. The scene has the warm, intimate atmosphere typical of his domestic compositions." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/clark-art-institute\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. The museum is known for its outstanding <strong>French Impressionist and Post-Impressionist</strong> holdings." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> work with Bonnard's <strong>soft edges and warm tonality</strong>. His paintings of people and pets together convey quiet affection without sentimentality." }
  ],
  'pierre-bonnard-self-portrait': [
    { question: "What does Bonnard's Self Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted himself with the same <strong>color-driven approach</strong> he applied to all subjects. His self-portraits are typically understated, showing an introspective artist rather than a confident public figure." },
    { question: "What style defines this self-portrait?", answer: "It follows Bonnard's <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> method, where <strong>color and light</strong> take priority over precise drawing. The mirror reflections in his self-portraits add spatial ambiguity." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Bonnard created several <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>self-portraits</strong></a> throughout his career, often painting himself in bathroom mirrors." }
  ],
  'pierre-bonnard-study-for-afternoon-in-the-garden': [
    { question: "What is this study for?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> created this as a preparatory work for a larger painting called <strong>Afternoon in the Garden</strong>. Studies like this helped him plan color arrangements and compositional balance before the final canvas." },
    { question: "What style is this study?", answer: "It reflects Bonnard's <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> approach with <strong>loose brushwork</strong> and vivid color. His studies often have a freshness and spontaneity that collectors prize." },
    { question: "Where is this work held?", answer: "It's in a <strong>private collection</strong>. Bonnard's garden studies capture the <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural light</strong></a> and atmosphere of the French countryside with quick, assured strokes." }
  ],
  'pierre-puvis-de-chavannes-young-girls-on-the-edge-of-the-sea': [
    { question: "What does Young Girls on the Edge of the Sea depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> painted <strong>young women</strong> at the seashore in a timeless, idealized setting. The muted palette and still figures create a mood of quiet contemplation." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Puvis was one of the most influential <strong>French painters</strong> of the late 19th century." },
    { question: "What style is this painting?", answer: "Puvis worked in a <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> mode with <strong>flat, fresco-like surfaces</strong> and muted tones. His simplified compositions inspired Gauguin, Seurat, and the early modern movement." }
  ],
  'pierre-puvis-de-chavannes-the-beheading-of-st-john-the-baptist': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> depicted the <strong>execution of John the Baptist</strong>, ordered by King Herod. The composition treats this violent subject with Puvis's characteristic restraint and stillness." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/barber-institute-of-fine-arts-birmingham-uk\"><strong>Barber Institute of Fine Arts</strong></a> in Birmingham, UK. The institute houses a carefully selected collection of <strong>European paintings</strong>." },
    { question: "What movement does this belong to?", answer: "It aligns with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, though Puvis also drew on <strong>classical and mural painting</strong> traditions. His flat, decorative style bridged academic art and modernism." }
  ],
  'pierre-puvis-de-chavannes-the-birds': [
    { question: "What does The Birds depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> painted figures in an <strong>idyllic landscape</strong> with birds, evoking a timeless pastoral scene. His compositions often suggest allegory without specific narrative." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painting with Puvis's signature <strong>pale, chalky palette</strong> and simplified forms. His muralist's approach gave even easel paintings a monumental, fresco-like quality." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Puvis's <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>pastoral compositions</strong></a> were widely admired by younger artists seeking alternatives to Impressionism." }
  ],
  'pierre-puvis-de-chavannes-work': [
    { question: "What does the painting Work depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> painted an <strong>allegorical scene of labor</strong>, showing idealized figures engaged in various forms of work. The composition reflects his interest in civic virtue and public mural themes." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-de-picardie-amiens-france\"><strong>Musée de Picardie</strong></a> in Amiens, France. Puvis created several large-scale works for this museum, treating themes of <strong>war, peace, rest, and work</strong>." },
    { question: "What movement is this associated with?", answer: "Puvis is linked to <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and the mural tradition. His <strong>flat, decorative compositions</strong> influenced artists from Gauguin to Matisse, shaping early modernism." }
  ],
  'pierre-auguste-renoir-the-painter-jules-le-coeur-walking-his-dogs-in-the': [
    { question: "Who is depicted in this painting?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted his friend <strong>Jules Le Coeur</strong>, a fellow painter, walking his dogs in the Forest of Fontainebleau. Le Coeur was an early patron and close companion during Renoir's formative years." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museu-de-arte-assis-chateaubriand-mac-campina-gran\"><strong>Museu de Arte Assis Chateaubriand</strong></a> in Brazil. The painting reflects Renoir's early <strong>plein air</strong> practice in the forests near Paris." },
    { question: "What style is this work?", answer: "It's an early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work showing Renoir's developing interest in <strong>natural light and outdoor subjects</strong>. The Forest of Fontainebleau was a favorite painting ground for the Impressionists." }
  ],
  'pierre-auguste-renoir-two-figures-in-a-landscape': [
    { question: "What does Two Figures in a Landscape show?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted <strong>two figures</strong> set within a lush landscape. The soft brushwork and warm palette are typical of his mature style, where figures blend harmoniously with natural surroundings." },
    { question: "What movement does this belong to?", answer: "It's an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work showing Renoir's mastery of <strong>light filtering through foliage</strong>. His later landscapes moved toward warmer, more saturated tones than his earlier plein air paintings." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Renoir's <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a> with figures capture the pleasure of being outdoors in the French countryside." }
  ],
  'pierre-auguste-renoir-spring-bouquet': [
    { question: "What does Spring Bouquet depict?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted a <strong>vibrant arrangement of spring flowers</strong>. Floral still lifes were a lifelong subject for him, and he reportedly painted them to relax between more demanding figure compositions." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fogg-museum-harvard-art-museums-cambridge-ma-us\"><strong>Fogg Museum</strong></a> at Harvard Art Museums in Cambridge, Massachusetts. The museum holds important <strong>Impressionist works</strong> within its academic collection." },
    { question: "What style is this painting?", answer: "It's an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> still life with Renoir's characteristic <strong>soft, feathery brushwork</strong>. His <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral paintings</strong></a> radiate warmth and looseness." }
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
