const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "albrecht-durer-two-squirrels": {
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> rendered Two Squirrels with the scientific precision that made him the supreme master of <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> naturalism. The watercolor captures every tuft of fur and curve of the bushy tails with remarkable accuracy.</p>

<p>Dürer pioneered the detailed study of <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a>, treating animals and plants as worthy subjects in themselves. His nature studies influenced natural history illustration for centuries. This work resides at the <a href="/apps/masterpieces/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna, which holds the world's finest collection of Dürer's drawings and watercolors.</p>`,
    faqs: [
      { question: "Where is Dürer's Two Squirrels displayed?", answer: `This watercolor is at the <a href="/apps/masterpieces/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna, which has the world's finest collection of Dürer's drawings.` },
      { question: "What makes Dürer's nature studies important?", answer: `<a href="/apps/masterpieces/artist/albrecht-durer"><strong>Dürer</strong></a> pioneered treating animals and plants as <strong>worthy artistic subjects</strong>, influencing natural history illustration for centuries.` },
      { question: "What movement was Dürer part of?", answer: `Dürer was the supreme master of <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> art, combining scientific observation with artistic beauty.` }
    ]
  },

  "thomas-gainsborough-landscape-in-suffolk": {
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted his native Suffolk <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>countryside</strong></a> with affection throughout his career. Though famous for aristocratic portraits, he considered landscape painting his true passion.</p>

<p>Gainsborough developed a feathery brushwork that captured the English atmosphere with poetic sensitivity. His Suffolk scenes influenced Constable, who grew up in the same region. While Reynolds dominated official portraiture, Gainsborough brought a more natural, informal quality to British art. This work hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is Landscape in Suffolk displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria.` },
      { question: "What was Gainsborough's true passion?", answer: `Though famous for <strong>aristocratic portraits</strong>, <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> considered landscape painting his true artistic love.` },
      { question: "Who did Gainsborough influence?", answer: `His Suffolk scenes influenced <strong>John Constable</strong>, who grew up in the same region and shared his love of English landscape.` }
    ]
  },

  "berthe-morisot-on-the-sofa": {
    description: `<p><a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> captures an intimate domestic moment in On the Sofa, showing a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> relaxing in a private interior. The loose brushwork and soft palette exemplify her distinctive approach to <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>

<p>Morisot was the only woman among the founding Impressionists, exhibiting in seven of their eight shows. Her subjects focused on domestic life and female experience, areas she knew intimately as a bourgeois woman. This painting hangs at the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm-sweden"><strong>Nationalmuseum</strong></a> in Stockholm.</p>`,
    faqs: [
      { question: "Where is On the Sofa displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm-sweden"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden.` },
      { question: "What was Berthe Morisot's role in Impressionism?", answer: `<a href="/apps/masterpieces/artist/berthe-morisot"><strong>Morisot</strong></a> was the <strong>only woman among the founding Impressionists</strong>, exhibiting in seven of their eight shows.` },
      { question: "What subjects did Morisot focus on?", answer: `She focused on <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> scenes of <strong>domestic life and female experience</strong>, areas she knew from her bourgeois background.` }
    ]
  },

  "berthe-morisot-interior": {
    description: `<p><a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> depicts an interior scene with her characteristic loose brushwork and luminous color. The domestic setting reflects her focus on private life and the feminine sphere of nineteenth-century bourgeois society.</p>

<p>Morisot married Eugène Manet, brother of Édouard, placing her at the center of the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> circle. Her feathery brushstrokes and <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>soft tones</strong></a> created an atmospheric quality that distinguished her work. Critics increasingly recognize her as one of the movement's most innovative painters.</p>`,
    faqs: [
      { question: "Who painted Interior?", answer: `<a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> painted this domestic scene. She married Eugène Manet, brother of Édouard, connecting her to the Impressionist circle.` },
      { question: "What movement was Morisot part of?", answer: `Morisot was a founding member of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. Critics now recognize her as one of the movement's most innovative painters.` },
      { question: "What distinguishes Morisot's style?", answer: `Her <strong>feathery brushstrokes and soft tones</strong> created atmospheric effects that distinguished her work from other Impressionists.` }
    ]
  },

  "camille-corot-rocks-at-civita-castellana": {
    description: `<p><a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> painted the rocky <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> near Civita Castellana during one of his Italian trips. The ancient volcanic terrain north of Rome attracted many painters seeking dramatic scenery.</p>

<p>Corot's Italian studies show a more structured approach than his later silvery French landscapes. The clear Mediterranean light and geometric rock formations suited his classical training. These plein air sketches influenced the later <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a>. This work is held in the <a href="/apps/masterpieces/museum/bavarian-state-painting-collections-munich-germany"><strong>Bavarian State Painting Collections</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Where is Rocks at Civita Castellana?", answer: `This painting is in the <a href="/apps/masterpieces/museum/bavarian-state-painting-collections-munich-germany"><strong>Bavarian State Painting Collections</strong></a> in Munich, Germany.` },
      { question: "Where is Civita Castellana?", answer: `Civita Castellana is <strong>north of Rome</strong> in Italy, known for ancient volcanic terrain that attracted many landscape painters.` },
      { question: "How did Corot's Italian work differ?", answer: `His Italian studies show a <strong>more structured approach</strong> than his silvery French landscapes, suited to the clear Mediterranean light.` }
    ]
  },

  "raphael-miraculous-draught-of-fishes": {
    description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> designed the Miraculous Draught of Fishes as one of ten tapestry cartoons for the Sistine Chapel. The scene shows Christ calling Peter and Andrew from their fishing boats on the Sea of Galilee.</p>

<p>Pope Leo X commissioned these cartoons around 1515-16 to be woven into tapestries in Brussels. The monumental figures and balanced composition represent High <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> design at its finest. Seven cartoons survive, now at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London on loan from the Royal Collection.</p>`,
    faqs: [
      { question: "Where are Raphael's tapestry cartoons?", answer: `Seven cartoons survive at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London, on loan from the Royal Collection.` },
      { question: "What were these cartoons made for?", answer: `<strong>Pope Leo X</strong> commissioned them around 1515-16 as designs for tapestries to hang in the Sistine Chapel.` },
      { question: "What biblical scene is depicted?", answer: `It shows <strong>Christ calling Peter and Andrew</strong> from their fishing boats on the Sea of Galilee, from the Gospel of Luke.` }
    ]
  },

  "camille-pissarro-the-marne-at-chennevieres": {
    description: `<p><a href="/apps/masterpieces/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted the Marne River at Chennevières, capturing the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> of the Île-de-France region. The scene shows the riverbank with its reflections, rendered in Pissarro's careful brushwork.</p>

<p>Pissarro was the eldest of the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a> and the only one to exhibit in all eight group shows. His patient mentoring helped younger painters including Cézanne and Gauguin find their directions. This work hangs at the <a href="/apps/masterpieces/museum/scottish-national-gallery-edinburgh-uk"><strong>Scottish National Gallery</strong></a> in Edinburgh.</p>`,
    faqs: [
      { question: "Where is The Marne at Chennevières displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/scottish-national-gallery-edinburgh-uk"><strong>Scottish National Gallery</strong></a> in Edinburgh, Scotland.` },
      { question: "What was Pissarro's role among the Impressionists?", answer: `<a href="/apps/masterpieces/artist/camille-pissarro"><strong>Pissarro</strong></a> was the eldest <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and the only one to exhibit in all eight group shows.` },
      { question: "Who did Pissarro mentor?", answer: `His patient mentoring helped <strong>Cézanne and Gauguin</strong> find their artistic directions early in their careers.` }
    ]
  },

  "rembrandt-jesus-disputing-with-the-doctors-the-smaller-print": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching showing the young Jesus debating with scholars in the Temple, as described in the Gospel of Luke. The "smaller print" distinguishes it from Rembrandt's larger version of the same subject.</p>

<p>Rembrandt was among the greatest printmakers in history, producing nearly 300 etchings. His prints circulated widely, spreading his influence across Europe. The intimate scale of this version suits private devotion. It connects to the <a href="/apps/masterpieces/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a> in Amsterdam, where his printing studio has been recreated.</p>`,
    faqs: [
      { question: "What biblical scene does this show?", answer: `It depicts the <strong>twelve-year-old Jesus debating scholars</strong> in the Temple at Jerusalem, from the Gospel of Luke.` },
      { question: "Why is this called the smaller print?", answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created <strong>two versions</strong> of this subject; this distinguishes the smaller from the larger etching.` },
      { question: "Was Rembrandt important as a printmaker?", answer: `Rembrandt was among history's greatest printmakers, creating <strong>nearly 300 etchings</strong> that spread his influence across Europe.` }
    ]
  },

  "gerard-ter-borch-woman-at-a-mirror": {
    description: `<p><a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> depicts a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> examining herself in a mirror, a scene combining vanity and quiet introspection. His mastery of satin textures makes the fabric shimmer with lifelike luminosity.</p>

<p>Ter Borch specialized in small, refined genre scenes of <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> domestic life. His ability to render silk and satin earned him commissions from wealthy patrons across Europe. The intimate scale and psychological subtlety of his work influenced Vermeer and later genre painters.</p>`,
    faqs: [
      { question: "Who painted Woman at a Mirror?", answer: `<a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this intimate scene. He was famous for rendering silk and satin with remarkable luminosity.` },
      { question: "What movement was ter Borch part of?", answer: `Ter Borch was a master of <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre painting, specializing in small, refined domestic scenes.` },
      { question: "Who did ter Borch influence?", answer: `His intimate scale and psychological subtlety <strong>influenced Vermeer</strong> and later genre painters.` }
    ]
  },

  "gerard-ter-borch-woman-writing-a-letter": {
    description: `<p><a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> shows a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> absorbed in writing a letter, a subject he painted several times. The concentrated stillness and subtle lighting create an atmosphere of private contemplation typical of his finest work.</p>

<p>Letter-writing scenes were popular in <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painting, suggesting romantic correspondence or business affairs. Ter Borch's version focuses on the writer's absorption rather than narrative context. This 1665 painting hangs at the <a href="/apps/masterpieces/museum/mauritshuis-hague-netherlands"><strong>Mauritshuis</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "Where is Woman Writing a Letter displayed?", answer: `This 1665 painting hangs at the <a href="/apps/masterpieces/museum/mauritshuis-hague-netherlands"><strong>Mauritshuis</strong></a> in The Hague, Netherlands.` },
      { question: "Why were letter scenes popular in Dutch art?", answer: `Letter-writing suggested <strong>romantic correspondence or business affairs</strong>, allowing artists to explore private moments in <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> life.` },
      { question: "What makes ter Borch's version distinctive?", answer: `<a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Ter Borch</strong></a> focuses on the <strong>writer's absorption</strong> rather than narrative, creating quiet contemplation.` }
    ]
  },

  "rembrandt-mater-dolorosa": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrays the Mater Dolorosa, the grieving Virgin Mary contemplating Christ's suffering. Her aged face, wet with tears, expresses profound sorrow with psychological intensity rare in religious painting.</p>

<p>Rembrandt's religious works emphasize human emotion over idealized beauty. His <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> mastery of light and shadow focuses attention on Mary's weathered features and grief-stricken expression. This painting resides at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is Rembrandt's Mater Dolorosa?", answer: `This painting is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.` },
      { question: "What does Mater Dolorosa mean?", answer: `Mater Dolorosa means <strong>"Sorrowful Mother"</strong> in Latin, referring to the Virgin Mary grieving over Christ's suffering and death.` },
      { question: "What distinguishes Rembrandt's religious paintings?", answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> emphasized <strong>human emotion over idealized beauty</strong>, giving religious subjects psychological depth.` }
    ]
  },

  "giorgione-portrait-of-a-youth-antonio-broccardo": {
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> portrays a young man, traditionally identified as Antonio Broccardo, with the mysterious atmosphere that characterizes his few surviving works. The sitter's pensive gaze and shadowed features create an enigmatic presence.</p>

<p>Giorgione died young, leaving perhaps only five certain paintings. Yet his poetic approach transformed Venetian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, influencing Titian and later artists. This 1508 <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> hangs at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>.</p>`,
    faqs: [
      { question: "Where is this Giorgione portrait displayed?", answer: `This portrait hangs at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary.` },
      { question: "Why is Giorgione important despite few surviving works?", answer: `<a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> transformed Venetian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting with his poetic approach, though perhaps only five certain paintings survive.` },
      { question: "Who was Antonio Broccardo?", answer: `The identification is <strong>traditional but uncertain</strong>. Giorgione's sitters often remain mysterious, adding to his enigmatic reputation.` }
    ]
  },

  "giorgione-portrait-of-a-young-woman-laura": {
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> of a young woman known as Laura, one of his most celebrated works. She wears a fur-lined garment partially revealing her breast, creating an image both intimate and idealized.</p>

<p>The laurel leaves behind her may be a visual pun on her name. Giorgione's soft sfumato technique and poetic atmosphere influenced the entire Venetian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is Giorgione's Laura displayed?", answer: `This portrait hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria.` },
      { question: "Why is she called Laura?", answer: `The <strong>laurel leaves behind her</strong> may be a visual pun on her name, though her true identity remains unknown.` },
      { question: "What technique did Giorgione use?", answer: `<a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione's</strong></a> soft <strong>sfumato technique</strong> created atmospheric effects that influenced the entire Venetian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.` }
    ]
  },

  "edouard-manet-jeanne-duval-baudelaire39s-mistress-reclining-lady": {
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted Jeanne Duval, the longtime mistress of poet Charles Baudelaire, reclining in an elaborate white dress. The <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> of Haitian descent had inspired Baudelaire's most sensuous poetry.</p>

<p>Manet and Baudelaire were close friends who shared ideas about modern art and literature. By the time of this portrait, Duval was ill and aging, though Manet captures her with dignity. The painting resides at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a>.</p>`,
    faqs: [
      { question: "Where is this Manet portrait displayed?", answer: `This painting is at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary"><strong>Budapest Museum of Fine Arts</strong></a> in Budapest, Hungary.` },
      { question: "Who was Jeanne Duval?", answer: `Duval was the <strong>longtime mistress of poet Charles Baudelaire</strong>. The woman of Haitian descent inspired his most sensuous poetry.` },
      { question: "What was Manet's connection to Baudelaire?", answer: `<a href="/apps/masterpieces/artist/edouard-manet"><strong>Manet</strong></a> and Baudelaire were <strong>close friends</strong> who shared ideas about modern art and literature.` }
    ]
  },

  "edvard-munch-street-lafayette": {
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Street Lafayette during his time in Paris, capturing the bustle of the famous boulevard from a high vantage point. The <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a> scene shows pedestrians and carriages flowing through the urban landscape.</p>

<p>Munch's Parisian period exposed him to Impressionist and Post-Impressionist influences before he developed his mature <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style. The elevated viewpoint and cropped composition show his absorption of modern techniques. This work hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo-norway"><strong>National Gallery</strong></a> in Oslo.</p>`,
    faqs: [
      { question: "Where is Street Lafayette displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo-norway"><strong>National Gallery</strong></a> in Oslo, Norway.` },
      { question: "When did Munch paint this?", answer: `<a href="/apps/masterpieces/artist/edvard-munch"><strong>Munch</strong></a> painted this during his <strong>time in Paris</strong>, before developing his mature Expressionist style.` },
      { question: "What influences does this painting show?", answer: `The work shows <strong>Impressionist influences</strong> in its elevated viewpoint and cropped composition, absorbed during Munch's Parisian period.` }
    ]
  },

  "giovanni-bellini-the-agony-in-the-garden": {
    description: `<p><a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted The Agony in the Garden around 1459, depicting Christ praying on the Mount of Olives while his disciples sleep. The dawn <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> glows with subtle color as soldiers approach in the distance.</p>

<p>Bellini's brother-in-law Andrea Mantegna painted the same subject around the same time, allowing comparison of their different approaches. Bellini's version emphasizes atmospheric light over Mantegna's harder forms. This tempera painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is The Agony in the Garden displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London, near Mantegna's version of the same subject.` },
      { question: "What biblical scene is depicted?", answer: `It shows <strong>Christ praying on the Mount of Olives</strong> while his disciples sleep, before his arrest in the Garden of Gethsemane.` },
      { question: "How does this compare to Mantegna's version?", answer: `<a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Bellini</strong></a> emphasizes <strong>atmospheric light</strong> while his brother-in-law Mantegna preferred harder, more sculptural forms.` }
    ]
  },

  "edgar-degas-nude-woman-pulling-on-her-clothes": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> captures a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in an intimate moment of dressing, viewed from behind. The pastel medium allows soft, chalky textures that convey flesh and fabric with remarkable subtlety.</p>

<p>Degas devoted his later career to studies of women bathing and dressing, observed as if through a keyhole. His <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> colleagues admired his draftsmanship while critics debated whether his gaze was clinical or voyeuristic. This work resides at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this Degas pastel displayed?", answer: `This work is at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>.` },
      { question: "What subjects did Degas focus on later in his career?", answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> devoted his later career to <strong>women bathing and dressing</strong>, observed as if through a keyhole.` },
      { question: "What movement was Degas part of?", answer: `Degas exhibited with the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a> though he preferred being called a Realist for his emphasis on drawing.` }
    ]
  },

  "rembrandt-portrait-of-rembrandt39s-father": {
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted his father Harmen as an elderly man with a beard and fur-trimmed coat. The intimate <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> shows Rembrandt's early mastery of characterization and his lifelong interest in depicting old age.</p>

<p>This painting was stolen from the Isabella Stewart Gardner Museum in Boston in 1990, part of the largest art theft in history. Thirteen works valued at $500 million were taken, and none have been recovered. Empty frames still hang where the paintings once were, awaiting their return.</p>`,
    faqs: [
      { question: "What happened to this Rembrandt painting?", answer: `It was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum in the largest art theft in history. It remains missing.` },
      { question: "Who is depicted in this portrait?", answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted his father <strong>Harmen Gerritsz van Rijn</strong> as an elderly man with a beard.` },
      { question: "What was the Gardner Museum theft?", answer: `Thirteen works worth <strong>$500 million were stolen</strong> in 1990. Empty frames still hang where the paintings were, awaiting their return.` }
    ]
  },

  "claude-monet-small-country-farm-in-bordighera": {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this small farm during his 1884 trip to Bordighera on the Italian Riviera. The Mediterranean light and exotic vegetation inspired some of his most <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vibrant paintings</strong></a>.</p>

<p>Monet traveled to the Italian coast seeking new subjects after years painting in northern France. The brilliant sunshine and palm trees challenged him to capture light more intense than anything in Normandy. This work hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which holds one of America's finest <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> collections.</p>`,
    faqs: [
      { question: "Where is this Monet painting displayed?", answer: `This painting hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which has one of America's finest Impressionist collections.` },
      { question: "Why did Monet go to Bordighera?", answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> sought <strong>new subjects and more intense light</strong> after years painting in northern France.` },
      { question: "Where is Bordighera?", answer: `Bordighera is on the <strong>Italian Riviera</strong>, near the French border. Its Mediterranean light and palm trees attracted Monet in 1884.` }
    ]
  },

  "el-greco-the-annunciation": {
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted multiple versions of the Annunciation, showing the <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angel</strong></a> Gabriel announcing to Mary that she will bear Christ. His elongated figures and dramatic lighting transform the scene into a mystical vision.</p>

<p>El Greco's <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> style, developed from his Byzantine training and Italian studies, found its fullest expression in Spain. His swirling compositions and unearthly colors seemed too strange for his contemporaries but inspired modern artists centuries later. This version hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this El Greco Annunciation?", answer: `This version hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid. El Greco painted multiple versions of this subject.` },
      { question: "What makes El Greco's style distinctive?", answer: `His <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> style features <strong>elongated figures, dramatic lighting</strong>, and unearthly colors that seemed strange to contemporaries.` },
      { question: "What does the Annunciation depict?", answer: `It shows the <strong>angel Gabriel announcing to Mary</strong> that she will bear Christ, a scene from the Gospel of Luke.` }
    ]
  }
};

async function main() {
  console.log("Updating 20 artworks (batch 4)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artworkUpdates)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.title}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artworks`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
