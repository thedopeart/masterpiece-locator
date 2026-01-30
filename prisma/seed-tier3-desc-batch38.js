const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'odilon-redon-trees': [
    { question: "What does Trees by Redon depict?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> painted <strong>trees</strong> in a naturalistic style that contrasts with his more famous dreamlike visions. His landscape work shows genuine observational skill beneath the fantastical imagery he's best known for." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon's</strong></a> landscapes are less well-known than his Symbolist works but are increasingly appreciated." },
    { question: "Did Redon paint many landscapes?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> painted landscapes throughout his career, especially of the <strong>Peyrelebade estate</strong> and the Médoc region. These grounded works balance his more visionary output and show his deep connection to the French countryside." }
  ],
  'odilon-redon-woman-with-outstretched-arm': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> painted a <strong>woman reaching outward</strong> in a composition that hovers between representation and dream. The figure emerges from luminous color, typical of his later pastel and oil work." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> (MoMA) in New York. MoMA holds important examples of <a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon's</strong></a> color work." },
    { question: "How did Redon's style change over time?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> spent decades working in <strong>black charcoal</strong> (his \"noirs\") before shifting to vibrant color around 1890. His late pastels and oils explode with rich hues, influencing the Nabis and early abstract painters." }
  ],
  'odilon-redon-the-mystical-knight-oedipus-and-the-sphinx': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> combined the figure of a <strong>mystical knight with the Oedipus and Sphinx myth</strong>. The ambiguous imagery is typical of his <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> approach: suggestive rather than narrative, inviting personal interpretation." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-bordeaux-bordeaux-france\"><strong>Musée des Beaux-Arts de Bordeaux</strong></a>, near Redon's native region in southwestern France." },
    { question: "Why did Redon draw on mythology?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> used <strong>myths as springboards</strong> for personal vision rather than illustrating them literally. The Sphinx represented the mystery of existence for him, a recurring motif that let him explore the boundary between the known and unknowable." }
  ],
  'orazio-gentileschi-saints-cecilia-valerianus-and-tiburtius': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/orazio-gentileschi\"><strong>Orazio Gentileschi</strong></a> painted <strong>Saints Cecilia, Valerianus, and Tiburtius</strong>, a scene from early Christian martyrdom. His elegant, refined Caravaggism gives the figures a lyrical beauty unusual in the tradition of dramatic Baroque realism." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan, one of Italy's most important art galleries." },
    { question: "How does Orazio Gentileschi relate to Caravaggio?", answer: "<a href=\"/apps/masterpieces/artist/orazio-gentileschi\"><strong>Orazio</strong></a> was a follower of <strong>Caravaggio</strong> but developed a more refined, lighter version of his dramatic style. He's also the father of <strong>Artemisia Gentileschi</strong>, who became an even more famous Caravaggist painter." }
  ],
  'otto-mueller-three-nudes': [
    { question: "What does Three Nudes depict?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> painted <strong>three nude figures</strong> with his characteristic simplified forms and matte, earthy palette. His nudes are angular and unidealized, reflecting the raw directness of German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museum-kunstpalast-d252sseldorf-germany\"><strong>Museum Kunstpalast</strong></a> in Düsseldorf. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> is well represented in German Expressionist collections." },
    { question: "What is Mueller known for?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> was a member of <strong>Die Brücke</strong>, the pioneering German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group. He specialized in nudes in landscapes, painted with flat, simplified forms and a distinctive matte finish using distemper." }
  ],
  'otto-mueller-t228nzerin-mit-schleier-von-einem-mann-beobachtet': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> painted a <strong>dancer with a veil observed by a man</strong>. The angular, simplified figures and muted earthy tones are hallmarks of his distinctive approach to <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> figure painting." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> works appear regularly at auction, particularly his figure studies and nudes." },
    { question: "What makes Mueller's figures distinctive?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> painted <strong>elongated, angular bodies</strong> with minimal modeling, using distemper (glue-based paint) that gives his work a dry, chalky surface. His figures look almost like hieroglyphs, stripped to essential forms." }
  ],
  'otto-mueller-liebespaar': [
    { question: "What does Liebespaar mean?", answer: "It means \"<strong>lovers</strong>\" in German. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> depicted a couple in his simplified, angular style. The intimacy of the subject is rendered without sentimentality, with the directness typical of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> lovers and couples are among his most sought-after subjects." },
    { question: "How did Mueller fit within Die Brücke?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> joined <strong>Die Brücke</strong> in 1910, later than the founders. His gentler, more lyrical approach to the figure set him apart from Kirchner's harsher style, though they shared the goal of raw, honest artistic expression." }
  ],
  'otto-mueller-t228nzerin-maschka-tanzend': [
    { question: "Who is Maschka?", answer: "<strong>Maschka</strong> was <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> wife and frequent model. He depicted her dancing with his characteristic angular simplicity, capturing movement through a few essential lines and flat color areas." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. Paintings of Maschka are among <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> most personal and recognizable works." },
    { question: "What medium did Mueller prefer?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> often used <strong>distemper</strong> (Leimfarbe), a glue-based paint that produces a matte, chalky surface. This gave his paintings a unique texture: flat, dry, and earthy, quite different from the glossy oils used by most of his contemporaries." }
  ],
  'otto-mueller-liebesfr252hling-ii-doppelbildnis-maschka-und-otto': [
    { question: "What does this double portrait show?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> painted himself and his wife <strong>Maschka</strong> together in a \"<strong>spring of love</strong>\" (Liebesfrühling). The intimate double portrait captures the couple with the angular simplicity that defines his style." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/schlesisches-museum-zu-g246rlitz-g246rlitz-germany\"><strong>Schlesisches Museum zu Görlitz</strong></a> in Germany, near Mueller's Silesian homeland." },
    { question: "Why is this painting significant?", answer: "Double self-portraits with a spouse are rare in <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> art. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> version is tender and direct, showing the personal side of an artist often associated with the more aggressive energy of Die Brücke." }
  ],
  'otto-mueller-liegendes-m228dchen': [
    { question: "What does Liegendes Mädchen show?", answer: "The title means \"<strong>reclining girl</strong>.\" <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> depicted a female figure lying down, rendered with his flat, angular forms and muted earth tones. The simplified body merges with the surrounding landscape." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> reclining nudes are among his most characteristic compositions." },
    { question: "What influenced Mueller's approach to the nude?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> was influenced by <strong>Egyptian art and Cranach's</strong> slender nudes. He sought a primal, natural quality: figures that belonged to their landscape rather than posing artificially within it." }
  ],
  'palma-vecchio-the-holy-family-with-mary-magdalene-and-the-infant': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> painted the <strong>Holy Family</strong> with Mary Magdalene and the infant St. John in a warm, golden composition. His rich Venetian color and soft modeling create an atmosphere of serene devotion." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. <a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio's</strong></a> works are found in major Italian and European collections." },
    { question: "What is Palma Vecchio known for?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter known for <strong>lush color, blonde beauties, and pastoral religious scenes</strong>. He worked alongside Titian and Giorgione, sharing their love of warm, luminous palette." }
  ],
  'palma-vecchio-sacred-conversation': [
    { question: "What is a Sacred Conversation?", answer: "A <strong>sacra conversazione</strong> shows the Madonna and Child with saints gathered together in a unified space. <a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> painted this popular format with the warm, golden light and rich color characteristic of the Venetian school." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, which holds a strong collection of Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." },
    { question: "How does Palma Vecchio compare to Titian?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> shared <strong>Titian's rich color</strong> and warmth but worked on a more modest scale. His paintings have a gentler, more relaxed quality. Some works have been attributed to both artists, reflecting their similar approach." }
  ],
  'palma-vecchio-venus-and-cupid': [
    { question: "What does Venus and Cupid depict?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> painted <strong>Venus with Cupid</strong> in the warm, sensuous manner of the Venetian school. His female figures are characterized by golden skin, blonde hair, and a relaxed, approachable beauty." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge, England." },
    { question: "What type of beauty did Palma Vecchio favor?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> helped establish the <strong>Venetian ideal of blonde beauty</strong>: full-figured women with golden hair, warm skin tones, and a languid, confident pose. This type influenced Titian and became synonymous with Venetian painting." }
  ],
  'palma-vecchio-lady-with-a-lute': [
    { question: "What does Lady with a Lute show?", answer: "<a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a> painted a <strong>woman holding a lute</strong>, combining portraiture with musical symbolism. The warm Venetian palette and the woman's direct gaze create an intimate, engaging presence." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio's</strong></a> half-length portraits of beautiful women are among his most popular works." },
    { question: "What does the lute symbolize?", answer: "In Renaissance art, the <strong>lute</strong> often symbolized harmony, love, or the senses. <a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio's</strong></a> combination of a beautiful woman with a musical instrument creates a sensory appeal that was central to Venetian art's allure." }
  ],
  'paolo-veronese-raising-of-the-daughter-of-jairus': [
    { question: "What biblical scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> painted <strong>Christ raising the daughter of Jairus</strong> from the dead, a miracle from the Gospels. The scene combines dramatic gestures with Veronese's signature luminous color and architectural grandeur." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. <a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> is one of the greatest Venetian painters, and the Louvre holds several of his major works." },
    { question: "What is Veronese known for?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> was celebrated for <strong>spectacular, large-scale paintings</strong> filled with luminous color, rich fabrics, and grand architecture. Along with Titian and Tintoretto, he formed the great trio of late Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." }
  ],
  'paolo-veronese-livia-da-porto-thiene-and-her-daughter-porzia': [
    { question: "Who are the subjects of this portrait?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> painted <strong>Livia da Porto Thiene</strong>, a Vicentine noblewoman, with her young daughter Porzia. The mother's elegant dress and the child's charming presence make it one of Veronese's finest portraits." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/walters-art-museum-baltimore-md-us\"><strong>Walters Art Museum</strong></a> in Baltimore, Maryland." },
    { question: "How did Veronese approach portraiture?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> brought the same <strong>luminous color and elegant staging</strong> to his portraits as to his grand narrative paintings. His sitters appear dignified and alive, surrounded by rich fabrics and warm Venetian light." }
  ],
  'parmigianino-madonna-and-child-with-saints': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted a <strong>Madonna and Child</strong> surrounded by saints in his characteristic Mannerist style: elongated figures, elegant poses, and a cool, refined palette." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pinacoteca-nazionale-di-bologna-bologna-italy\"><strong>Pinacoteca Nazionale di Bologna</strong></a> in Italy." },
    { question: "What is Parmigianino known for?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> was a leading Italian <strong>Mannerist</strong> painter. His deliberately elongated figures, elegant distortions, and cool sophistication represent a self-conscious departure from the balanced harmony of High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art." }
  ],
  'parmigianino-madonna-and-child': [
    { question: "What does this Madonna and Child show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted the <strong>Virgin and Child</strong> with his signature grace: elongated necks, tapering fingers, and an otherworldly elegance that pushes beauty toward abstraction." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/galleria-doria-pamphilj\"><strong>Galleria Doria Pamphilj</strong></a> in Rome, one of the city's finest private collections open to the public." },
    { question: "What is Mannerism?", answer: "<strong>Mannerism</strong> emerged after the High Renaissance, favoring artifice over naturalism. <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> was one of its most refined practitioners, deliberately distorting proportion and space to achieve an ideal of grace that went beyond realistic representation." }
  ],
  'parmigianino-the-conversion-of-st-paul': [
    { question: "What does The Conversion of St. Paul show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> depicted <strong>Saul struck from his horse</strong> on the road to Damascus, the moment of his conversion to Christianity. The dramatic composition shows his ability to handle action and complex figure arrangement." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "How does Parmigianino handle dramatic subjects?", answer: "Even in a <strong>violent scene</strong>, <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> maintains his characteristic elegance. The falling figures and rearing horse are composed with a balletic grace that transforms physical chaos into aesthetic refinement." }
  ],
  'parmigianino-rest-on-the-flight-to-egypt': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted the <strong>Holy Family resting</strong> during their flight to Egypt. The scene's tender intimacy is rendered with his elegant Mannerist style: smooth surfaces, elongated limbs, and refined beauty." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. Spanish royal collectors acquired several <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> works." },
    { question: "How old was Parmigianino when he died?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> died at just <strong>37</strong>, reportedly consumed by alchemy experiments. Despite his short life, he left a lasting impact on European art through his refined Mannerist style and brilliant drawings." }
  ],
  'parmigianino-madonna-and-child-with-st-john-the-baptist-and-st-': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> grouped the <strong>Madonna and Child with Saints John the Baptist and Jerome</strong>. The composition balances devotional content with his elongated, graceful figure style." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The gallery holds a strong collection of Italian Mannerist painting." },
    { question: "Who influenced Parmigianino?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> admired <strong>Correggio and Raphael</strong>, combining Correggio's soft sfumato with Raphael's compositional elegance. He then pushed both toward the deliberate artifice that defines Mannerism." }
  ],
  'parmigianino-saint-barbara': [
    { question: "Who is Saint Barbara?", answer: "<strong>St. Barbara</strong> is a Christian martyr associated with towers and lightning. <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> portrayed her with his typical Mannerist elegance: a slender figure with elongated proportions and a serene, idealized expression." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
    { question: "What makes Parmigianino's saints distinctive?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino's</strong></a> saints are <strong>impossibly graceful</strong>: long necks, tapering fingers, and smooth skin that seems lit from within. They embody a spiritual beauty that transcends physical reality through deliberate stylization." }
  ],
  'parmigianino-madonna-of-the-rose': [
    { question: "What does Madonna of the Rose show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted the <strong>Virgin holding a rose</strong> with the Christ Child. The rose symbolizes Mary's purity and love. The painting's refined elegance and cool palette are quintessential Mannerism." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden. The gallery holds a world-class collection of Old Master paintings." },
    { question: "How is this different from Renaissance Madonnas?", answer: "Where Renaissance Madonnas aim for <strong>natural beauty</strong>, <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino's</strong></a> version deliberately exaggerates proportions for an effect of supernatural grace. The elongation isn't accidental: it's a conscious artistic choice to elevate beauty beyond the earthly." }
  ],
  'parmigianino-portrait-of-a-gentleman-wearing-a-beret': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted an <strong>unidentified gentleman in a beret</strong> with his characteristic refined execution. His portraits combine psychological presence with the cool elegance of his Mannerist style." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino's</strong></a> portraits are rare and highly valued." },
    { question: "Was Parmigianino a good portraitist?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> was an <strong>excellent portraitist</strong>. His Self-Portrait in a Convex Mirror, painted at 21, is one of the most inventive portraits ever made. His ability to combine likeness with stylistic refinement set a standard for Mannerist portraiture." }
  ],
  'parmigianino-young-man-seen-from-behind-face-in-profile': [
    { question: "What is unusual about this portrait?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> depicted a <strong>young man from behind with his face turned in profile</strong>, an unconventional viewpoint. The pose shows his interest in exploring unusual angles and spatial relationships." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-rennes-rennes-france\"><strong>Musée des Beaux-Arts de Rennes</strong></a> in Brittany, France." },
    { question: "Why did Parmigianino choose this unusual angle?", answer: "Mannerist painters like <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> deliberately sought <strong>unexpected viewpoints</strong> to demonstrate artistic virtuosity. Showing a figure from behind while revealing the profile was a way to showcase his mastery of complex spatial arrangement." }
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
