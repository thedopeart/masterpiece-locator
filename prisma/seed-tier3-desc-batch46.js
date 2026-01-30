const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'titian-mary-with-the-child-and-saints': [
    { question: "What does Mary with the Child and Saints depict?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted the <strong>Virgin Mary and Christ Child</strong> surrounded by saints in a sacra conversazione. The warm Venetian color and soft atmosphere are hallmarks of his mature style." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds several major works by Titian, one of the <strong>greatest Venetian painters</strong>." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional work with Titian's signature <strong>rich color and atmospheric depth</strong>. His handling of oil paint influenced every generation of European painters that followed." }
  ],
  'titian-portrait-of-a-man': [
    { question: "Who is the subject of this portrait?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted an <strong>unidentified man</strong> with the psychological depth that made him the most sought-after portraitist of the 16th century. The sitter's identity remains debated by scholars." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/indianapolis-museum-of-art-ima-indianapolis-in-us\"><strong>Indianapolis Museum of Art</strong></a>. The museum holds a diverse collection of <strong>European Old Master</strong> paintings." },
    { question: "What style defines this portrait?", answer: "It's a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait with Titian's <strong>warm tonality and confident brushwork</strong>. His ability to convey personality through paint set the standard for European portraiture." }
  ],
  'titian-saint-mark-enthroned': [
    { question: "What does Saint Mark Enthroned depict?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted Venice's patron <strong>Saint Mark</strong> seated on a throne, flanked by other saints. The composition reflects the city's devotion to Mark and its civic pride." },
    { question: "Where is this painting located?", answer: "It's at <a href=\"/apps/masterpieces/museum/santa-maria-della-salute-venice-italy\"><strong>Santa Maria della Salute</strong></a> in Venice. The church itself is one of Venice's most iconic <strong>Baroque landmarks</strong>." },
    { question: "What movement does this belong to?", answer: "It's a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> altarpiece. Titian's <strong>bold color and monumental figures</strong> helped define the Venetian school's approach to religious painting." }
  ],
  'umberto-boccioni-selfportrait': [
    { question: "What does Boccioni's Self-Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a> painted himself with the <strong>energetic brushwork</strong> that characterized his pre-Futurist style. The portrait shows the intensity of an artist who would soon help launch one of modernism's boldest movements." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan. The gallery holds important works of <strong>Italian art</strong> from the medieval period onward." },
    { question: "What movement is Boccioni associated with?", answer: "He became a leading figure of <strong>Futurism</strong>, which celebrated speed, technology, and modernity. Before that, his <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> showed strong Post-Impressionist and Divisionist influences." }
  ],
  'umberto-boccioni-virgilio-brocchi': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Boccioni</strong></a> painted <strong>Virgilio Brocchi</strong>, an Italian novelist and intellectual. The portrait captures Brocchi with the bold, expressive brushwork of Boccioni's early career." },
    { question: "What style is this painting?", answer: "It shows Boccioni's pre-<strong>Futurist</strong> approach, rooted in <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> and Divisionism. The energetic surface already hints at the dynamism he'd pursue in his Futurist works." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Boccioni's early portraits document Milan's intellectual circle before his radical turn toward <strong>abstract dynamism</strong>." }
  ],
  'valentin-serov-selfportrait': [
    { question: "What does Serov's Self-Portrait show?", answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Valentin Serov</strong></a> painted himself with the <strong>direct, observant eye</strong> that made him Russia's finest portraitist. His self-portraits reflect a modest, serious artistic personality." },
    { question: "What style is this portrait?", answer: "Serov worked in a <strong>Russian Realist</strong> tradition influenced by <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. His fluid brushwork and sensitivity to light set him apart from more rigid academic painters." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Serov's portraits of Russian aristocrats, artists, and intellectuals rank among the finest <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait paintings</strong></a> of the late 19th century." }
  ],
  'valentin-serov-winter-in-abramtsevo': [
    { question: "What does Winter in Abramtsevo depict?", answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov</strong></a> painted a <strong>winter scene</strong> at the Abramtsevo estate, a gathering place for Russian artists and intellectuals. The snow-covered landscape captures the quiet beauty of the Russian countryside." },
    { question: "What style is this painting?", answer: "It blends <strong>Russian Realism</strong> with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light effects. Serov's winter <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> show his ability to capture subtle tonal shifts in snow and sky." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Abramtsevo was the estate of patron Savva Mamontov, where Serov, Levitan, and other major <strong>Russian artists</strong> gathered to paint." }
  ],
  'vasily-surikov-under-the-rain-by-the-coach-to-black-river': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Vasily Surikov</strong></a> painted a <strong>rainy scene</strong> near a coach heading to Black River. The atmospheric conditions create a moody, overcast composition typical of Russian landscape painting." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in Saint Petersburg. The museum holds the world's largest collection of <strong>Russian fine art</strong>." },
    { question: "What style is this work?", answer: "Surikov was a <strong>Russian Realist</strong> best known for large-scale history paintings. His smaller studies like this show his skill at capturing <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> atmospheric effects." }
  ],
  'vasily-surikov-khakasy-with-his-feet-bound-with-chains': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Surikov</strong></a> depicted a <strong>Khakas man</strong> with his feet bound in chains. The subject reflects Surikov's Siberian roots and his interest in the peoples and history of Russia's eastern regions." },
    { question: "What style is this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> study with <strong>documentary directness</strong>. Surikov's sketches and studies of Siberian subjects provided material for his monumental history paintings." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Surikov was born in Krasnoyarsk, Siberia, and his connection to the region's <strong>people and landscape</strong> informed his most powerful works." }
  ],
  'vilhelm-hammershoi-the-buildings-of-the-asiatic-company-seen-from-st-': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/vilhelm-hammershoi\"><strong>Vilhelm Hammershøi</strong></a> painted the <strong>Asiatic Company buildings</strong> in Copenhagen from a nearby street. His muted palette and empty compositions give the urban scene a quiet, almost ghostly presence." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a> in Copenhagen. The museum holds the largest collection of <strong>Hammershøi's work</strong>." },
    { question: "What style defines this work?", answer: "Hammershøi's subdued <strong>gray and brown palette</strong> creates an atmosphere of stillness. His cityscapes and interiors are prized for their meditative quality, bridging <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> and early modernism." }
  ],
  'vittore-carpaccio-two-venetian-ladies': [
    { question: "What does Two Venetian Ladies depict?", answer: "<a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Vittore Carpaccio</strong></a> painted <strong>two women</strong> seated on a balcony with pets and birds. Once thought to depict courtesans, they're now believed to be noblewomen waiting for their husbands to return from hunting." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-correr-venice-italy\"><strong>Museo Correr</strong></a> in Venice. The painting is one of Carpaccio's most <strong>discussed and debated</strong> works." },
    { question: "What style is this work?", answer: "It's a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> genre scene with <strong>rich detail in costumes and objects</strong>. Carpaccio's narrative paintings provide vivid glimpses of daily life in 15th-century Venice." }
  ],
  'vittore-carpaccio-the-miracle-of-the-relic-of-the-true-cross-on-the-': [
    { question: "What miracle does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a> painted a <strong>miracle associated with the relic of the True Cross</strong> occurring on the Rialto Bridge. The panoramic composition doubles as a detailed portrait of 15th-century Venice." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice. The painting is part of a cycle commissioned by the <strong>Scuola Grande di San Giovanni Evangelista</strong>." },
    { question: "What movement does this belong to?", answer: "It's a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> narrative painting. Carpaccio's <strong>topographic accuracy</strong> makes his works invaluable documents of Venice's architecture and social life." }
  ],
  'vittore-carpaccio-portrait-of-a-lady': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a> painted an <strong>unidentified Venetian woman</strong> with the detailed attention to costume and setting typical of his work. The sitter's identity has been lost over the centuries." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. The museum's collection extends well beyond Dutch art to include important <strong>Italian Renaissance</strong> works." },
    { question: "What style characterizes this portrait?", answer: "It's a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait with Carpaccio's <strong>sharp eye for textiles and accessories</strong>. His portraits provide detailed records of Venetian fashion and social status." }
  ],
  'wassily-kandinsky-the-golden-sail': [
    { question: "What does The Golden Sail depict?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a> painted a <strong>golden-sailed boat</strong> in a vivid, semi-abstract landscape. This early work shows his transition from figurative subjects toward pure abstraction." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich. The museum holds the world's most important collection of <strong>Blaue Reiter</strong> works." },
    { question: "What movement is this associated with?", answer: "Kandinsky co-founded the <strong>Blaue Reiter</strong> group and pioneered <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract art</strong></a>. His early figurative works like this show <strong>bold color</strong> already breaking free from naturalistic representation." }
  ],
  'william-blake-the-nativity': [
    { question: "What does Blake's Nativity depict?", answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake</strong></a> depicted the <strong>birth of Christ</strong> in his visionary style. Blake's religious subjects combine deep personal faith with an artistic vision unlike any other painter of his era." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. The museum holds important examples of <strong>British Romantic</strong> art." },
    { question: "What style is this work?", answer: "Blake worked in a highly personal <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> style rooted in <strong>visionary imagination</strong>. His art, poetry, and printmaking formed a unified spiritual and creative practice." }
  ],
  'william-blake-the-night-of-enitharmon39s-joy': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a> painted a scene from his own mythology featuring <strong>Enitharmon</strong>, a feminine spiritual being. The nocturnal composition shows bat-winged figures in Blake's distinctive visionary imagery." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London. It's also known as <strong>Hecate</strong> or The Triple Hecate, referencing the Greek goddess of witchcraft." },
    { question: "What movement does this belong to?", answer: "Blake's art belongs to <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> but stands apart from all contemporaries. His <strong>personal mythology</strong> and spiritual visions created a wholly original body of work." }
  ],
  'william-blake-the-soldiers-casting-lots-for-christ39s-garments': [
    { question: "What biblical scene is depicted?", answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a> painted Roman soldiers <strong>casting lots for Christ's garments</strong> after the crucifixion, as described in the Gospels. Blake's interpretation emphasizes the spiritual dimension over historical realism." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge, UK. The museum holds significant <strong>British art</strong> and works on paper." },
    { question: "What style defines this work?", answer: "It reflects Blake's unique <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> vision, where <strong>bold outlines and flat color</strong> create a deliberately anti-naturalistic effect. Blake rejected academic painting conventions entirely." }
  ],
  'william-hogarth-the-beggar39s-opera': [
    { question: "What does The Beggar's Opera show?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>William Hogarth</strong></a> painted a scene from John Gay's <strong>The Beggar's Opera</strong>, a satirical ballad opera that mocked both politics and Italian opera. Hogarth captured an actual stage performance." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Center for British Art</strong></a> in New Haven. The center holds the largest collection of <strong>British art outside the UK</strong>." },
    { question: "What makes Hogarth's work distinctive?", answer: "Hogarth pioneered <strong>narrative painting</strong> in Britain, using art to satirize society. His scenes of contemporary life prefigured both the <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> movement and modern graphic storytelling." }
  ],
  'william-hogarth-the-ashley-and-popple-family': [
    { question: "Who is depicted in this painting?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> painted the <strong>Ashley and Popple families</strong> in a conversation piece, a type of informal group portrait popular in 18th-century Britain." },
    { question: "Where can I see this painting?", answer: "It's in the <a href=\"/apps/masterpieces/museum/royal-collection-uk\"><strong>Royal Collection</strong></a> in the United Kingdom. The collection spans centuries of <strong>British art</strong> acquired by the monarchy." },
    { question: "What style is this painting?", answer: "It's an early <strong>conversation piece</strong>, a genre Hogarth helped popularize. These informal <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>group portraits</strong></a> show figures engaged in everyday activities rather than formal poses." }
  ],
  'william-hogarth-the-children39s-theater-in-the-house-of-john-condu': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> painted <strong>children performing a play</strong> in John Conduit's house. The scene captures an aristocratic household's private theatrical entertainment." },
    { question: "What style is this work?", answer: "It's a <strong>conversation piece</strong> with Hogarth's characteristic wit and eye for social detail. His paintings of <a href=\"/apps/masterpieces/movement/realism\"><strong>everyday British life</strong></a> provide invaluable records of 18th-century society." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Hogarth's early career focused on these <strong>small-scale group portraits</strong> before he turned to the satirical narrative series that made him famous." }
  ],
  'william-hogarth-the-fishing-party': [
    { question: "What does The Fishing Party depict?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> painted a group enjoying a <strong>fishing excursion</strong>, a leisure activity associated with the English gentry. The relaxed scene typifies the conversation piece format." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London. The gallery was England's first purpose-built <strong>public art museum</strong>, opened in 1817." },
    { question: "What style is this painting?", answer: "It's an 18th-century <strong>British conversation piece</strong>. Hogarth's outdoor group scenes combine <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> with portraiture in a distinctly English tradition." }
  ],
  'william-hogarth-the-fountaine-family': [
    { question: "Who is depicted here?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> painted the <strong>Fountaine family</strong> in an informal domestic setting. The composition shows the family at ease, reflecting Hogarth's skill at capturing natural interactions." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. The museum holds a notable collection of <strong>18th-century British</strong> painting." },
    { question: "What genre is this painting?", answer: "It's a <strong>conversation piece</strong>, a genre Hogarth mastered before turning to satirical narratives. These portraits show the <a href=\"/apps/masterpieces/movement/realism\"><strong>realistic</strong></a> informality that distinguished British painting from Continental formality." }
  ],
  'william-holman-hunt-the-schoolgirl39s-hymn': [
    { question: "What does The Schoolgirl's Hymn depict?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> painted a <strong>young girl singing a hymn</strong> with earnest devotion. The subject reflects Hunt's deep religious convictions and interest in moral themes." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford. The museum holds important <strong>Pre-Raphaelite</strong> works." },
    { question: "What movement does this belong to?", answer: "Hunt co-founded the <strong>Pre-Raphaelite Brotherhood</strong>, which rejected academic conventions in favor of <strong>intense color, detail, and moral seriousness</strong>. His works combine religious devotion with naturalistic observation." }
  ],
  'william-holman-hunt-the-awakening-conscience': [
    { question: "What does The Awakening Conscience depict?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>Hunt</strong></a> painted a <strong>kept woman</strong> rising from her lover's lap as spiritual awareness strikes her. Every object in the room carries symbolic meaning about sin and redemption." },
    { question: "Where can I see this painting?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's one of the most famous <strong>Pre-Raphaelite</strong> paintings, praised by John Ruskin when first exhibited." },
    { question: "What makes this painting notable?", answer: "The <strong>intense symbolic detail</strong> makes every element meaningful: the tangled yarn, the cat with a bird, the sheet music. Hunt's <strong>Pre-Raphaelite</strong> approach treated modern moral subjects with the seriousness of religious art." }
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
