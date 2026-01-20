const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // 1. william-merritt-chase-a-seated-gentleman-smoking-a-pipe
  {
    slug: 'william-merritt-chase-a-seated-gentleman-smoking-a-pipe',
    description: `<p><a href="/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted A Seated Gentleman Smoking a Pipe in 1875 during his studies in Munich, Germany. The work shows the influence of the dark, rich palette and bold brushwork he absorbed from the Old Masters there. A well-dressed man relaxes with his pipe, rendered with the realistic approach Chase favored before his later shift toward <a href="/movement/impressionism"><strong>Impressionism</strong></a>.</p>
<p>Chase studied at the Royal Academy of Fine Arts in Munich from 1872 to 1878, where he encountered the work of Dutch and Flemish masters. This early painting demonstrates his <strong>technical skill</strong> in capturing textures of fabric and the play of light on the figure. The intimate scale and casual subject matter anticipate his later interest in depicting modern leisure.</p>`,
    faqs: [
      { question: "When did William Merritt Chase paint this?", answer: "<a href=\"/artist/william-merritt-chase\"><strong>Chase</strong></a> painted this work in 1875 while studying at the Royal Academy of Fine Arts in Munich, Germany." },
      { question: "What style is A Seated Gentleman Smoking a Pipe?", answer: "It reflects Chase's early realist style influenced by Old Masters. He later became known for American <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and his Shinnecock landscapes." },
      { question: "What is the subject of this painting?", answer: "A well-dressed gentleman relaxes while smoking a pipe. <a href=\"/artist/william-merritt-chase\"><strong>Chase</strong></a> rendered the figure with careful attention to fabric textures and lighting." }
    ]
  },
  // 2. albert-joseph-moore-a-sleeping-girl
  {
    slug: 'albert-joseph-moore-a-sleeping-girl',
    description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted A Sleeping Girl around 1875, depicting a young woman in peaceful repose on a daybed. Her closed eyes and relaxed posture convey deep tranquility. A red flower in her hair matches blossoms in a nearby vase, while her flowing garments in white and olive suggest a timeless, classical quality.</p>
<p>Moore was a leading figure in the <a href="/movement/aesthetic-movement"><strong>Aesthetic Movement</strong></a>, which prioritized beauty and visual harmony over narrative content. His paintings typically feature <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>single female figures</strong></a> with neo-classical drapery and floral accessories. "Art for art's sake" was the movement's guiding principle, and Moore firmly believed visual pleasure mattered more than storytelling.</p>
<p>The painting measures 308 x 225 cm and hangs at <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> in London. Moore's contemporaries sometimes misunderstood his lack of narrative, but his focus on <strong>color harmony</strong> and decorative beauty influenced artists for decades.</p>`,
    faqs: [
      { question: "Where is A Sleeping Girl displayed?", answer: "The painting is at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It measures 308 x 225 cm and dates to around 1875." },
      { question: "What movement was Albert Moore part of?", answer: "<a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> was a leader of the <a href=\"/movement/aesthetic-movement\"><strong>Aesthetic Movement</strong></a>, which valued beauty and visual harmony over subject matter or moral lessons." },
      { question: "What is the painting's subject?", answer: "A young <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> sleeps peacefully on a daybed. <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> emphasized color harmony and classical drapery rather than telling a story." }
    ]
  },
  // 3. david-teniers-younger-a-smoker-leaning-on-a-table
  {
    slug: 'david-teniers-younger-a-smoker-leaning-on-a-table',
    description: `<p><a href="/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> painted A Smoker Leaning on a Table in 1643, one of many tavern scenes he produced during this prolific period. A peasant figure leans casually on a table, pipe in hand, rendered with the warm <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> typical of Flemish genre painting.</p>
<p>Teniers was court painter to Archduke Leopold Wilhelm and specialized in depicting <strong>everyday Flemish life</strong>. His tavern scenes, smokers, and peasant gatherings were enormously popular with collectors across Europe. This intimate work captures a moment of quiet leisure with characteristic warmth and humor.</p>`,
    faqs: [
      { question: "When was A Smoker Leaning on a Table painted?", answer: "<a href=\"/artist/david-teniers-younger\"><strong>Teniers the Younger</strong></a> painted this work in 1643. It's one of many tavern and smoker scenes from this period." },
      { question: "What style is this painting?", answer: "It's Flemish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/david-teniers-younger\"><strong>Teniers</strong></a> specialized in depicting peasant life with warm <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a>." },
      { question: "What is the subject of this painting?", answer: "A peasant leans on a table while smoking a pipe. <a href=\"/artist/david-teniers-younger\"><strong>Teniers</strong></a> captured everyday Flemish life with warmth and subtle humor." }
    ]
  },
  // 4. giovanni-battista-moroni-a-soldier
  {
    slug: 'giovanni-battista-moroni-a-soldier',
    description: `<p><a href="/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted A Soldier around 1555-1559, depicting a standing figure in full armor with a sword in his right hand. The painting measures 119 x 91 cm and uses a limited palette of <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>browns</strong></a> and grays that creates a serious, dignified atmosphere.</p>
<p>Moroni was one of the great <a href="/movement/renaissance"><strong>Renaissance</strong></a> portrait painters, known for his realistic depictions of the Bergamasque nobility and professional classes. Light falls from the left, casting shadows across the soldier's body and highlighting the metallic sheen of his armor. The <strong>identity of the sitter</strong> remains unknown, though the painting was once in the Spanish royal collection.</p>
<p>The work hangs at the <a href="/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid, having been at the Royal Palace since at least 1814 during Ferdinand VII's reign.</p>`,
    faqs: [
      { question: "Where is Moroni's A Soldier displayed?", answer: "The painting is at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid. It was in the Spanish royal collection by 1814." },
      { question: "Who painted A Soldier?", answer: "<a href=\"/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> painted this work around 1555-1559. He was a leading <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> portraitist from Bergamo." },
      { question: "What makes Moroni's portraits distinctive?", answer: "<a href=\"/artist/giovanni-battista-moroni\"><strong>Moroni</strong></a> used realistic, almost photographic technique with careful attention to textiles and clothing. His portraits feel psychologically present." }
    ]
  },
  // 5. thomas-eakins-a-street-scene-in-sevilla
  {
    slug: 'thomas-eakins-a-street-scene-in-sevilla',
    description: `<p><a href="/artist/thomas-eakins"><strong>Thomas Eakins</strong></a> painted A Street Scene in Seville in 1870 during a winter trip to Spain. Working from the roof of his Seville hotel, he set up an easel to capture what he called "the most difficult kind of a picture," a subject in full sunlight. He hired a family of street musicians, the Requeñas, to pose for him over more than three months.</p>
<p>The loose brushwork reveals the influence of <a href="/artist/diego-velazquez"><strong>Velázquez</strong></a> and other Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> masters Eakins had been studying. This was his <strong>first large-scale oil painting</strong>, challenging himself to adapt his rigorous academic training to working outdoors. The daughter Carmelita Requeña also inspired a spirited oil sketch.</p>
<p>The painting measures 159.4 x 106.7 cm and is now at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, a gift of the Wolf Family in 2023.</p>`,
    faqs: [
      { question: "Where is A Street Scene in Seville displayed?", answer: "The painting is at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. It was gifted by the Wolf Family in 2023." },
      { question: "When did Eakins paint this?", answer: "<a href=\"/artist/thomas-eakins\"><strong>Eakins</strong></a> painted it in 1870 during his winter stay in Spain. He worked on it for over three months." },
      { question: "What influenced this painting?", answer: "<a href=\"/artist/thomas-eakins\"><strong>Eakins</strong></a> studied <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> and Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> masters in Madrid before traveling to Seville. Their dark colors and bold brushwork influenced his approach." }
    ]
  },
  // 6. rembrandt-a-study-for-the-great-jewish-bride
  {
    slug: 'rembrandt-a-study-for-the-great-jewish-bride',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created the Study for the Great Jewish Bride around 1635 as a preparatory drawing for his famous etching. The finished print depicts Queen Esther from the Old Testament, who approached King Ahasuerus to save the Jewish people from Haman's plot. Rembrandt cast his wife Saskia as the Jewish bride in this role-playing portrait.</p>
<p>The preparatory drawing, held in Stockholm (Benesch 292), shows Rembrandt working out the composition before committing to the copper plate. The etching became known as "The Great Jewish Bride" when an 18th-century collector used this title to distinguish it from a smaller etching of Saskia as Saint Catherine.</p>`,
    faqs: [
      { question: "What is the Great Jewish Bride about?", answer: "The image depicts Queen Esther from the Old Testament. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> cast his wife Saskia in the role for this print." },
      { question: "Why is it called the Great Jewish Bride?", answer: "An 18th-century collector gave it this title to distinguish it from a smaller etching of Saskia as Saint Catherine. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> didn't use this name himself." },
      { question: "When was this study created?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> made this preparatory drawing around 1635. The final etching measures 21.5 x 16.8 cm." }
    ]
  },
  // 7. rembrandt-a-study-of-a-female-nude-seen-from-the-back
  {
    slug: 'rembrandt-a-study-of-a-female-nude-seen-from-the-back',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Study of a Female Nude Seen from the Back in 1634, a small drawing measuring just 17 x 12 cm. A seated model turns away from the viewer, her spine, shoulders, and hips mapped in soft charcoal with sparing heightening. The velvety contours and tender pressure of the drawing reveal Rembrandt's mastery of line.</p>
<p>Unlike many 17th-century artists who idealized the nude with myth or classical perfection, <a href="/artist/rembrandt"><strong>Rembrandt</strong></a> valued <strong>honest observation</strong> over flattery. He focused on the nude only during certain phases of his career, and very few of these intimate studies survive. This drawing demonstrates that for Rembrandt, accuracy was a deeper courtesy than idealization.</p>`,
    faqs: [
      { question: "When did Rembrandt create this drawing?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> made this study in 1634. It measures just 17 x 12 cm and uses black chalk or charcoal." },
      { question: "What makes Rembrandt's nude studies distinctive?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> rejected the classical idealization common in his era. He valued honest observation of the human form over flattering conventions." },
      { question: "What style is this drawing?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period sketch. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used minimal tools to create soft, velvety contours that reveal the figure's form." }
    ]
  },
  // 8. rembrandt-a-study-of-a-woman-asleep
  {
    slug: 'rembrandt-a-study-of-a-woman-asleep',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> sketched A Study of a Woman Asleep in 1630, an intimate drawing measuring 25 x 22 cm. The work captures a woman in peaceful slumber, her features rendered with quick, confident strokes that convey rest and stillness.</p>
<p>Such studies from life were essential to <a href="/artist/rembrandt"><strong>Rembrandt's</strong></a> working process during his early Leiden period. He observed people in unguarded moments, building a visual vocabulary he would draw upon throughout his career. This <strong>casual domestic scene</strong> shows his gift for finding beauty in everyday life.</p>`,
    faqs: [
      { question: "When did Rembrandt make this drawing?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created this sketch in 1630 during his early Leiden period. It measures 25 x 22 cm." },
      { question: "What is the subject of this study?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> sleeps peacefully. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured the intimate moment with quick, confident strokes." },
      { question: "What style is this drawing?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period sketch. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used such life studies to build his understanding of human expression and posture." }
    ]
  },
  // 9. amedeo-modigliani-a-suffering-nude
  {
    slug: 'amedeo-modigliani-a-suffering-nude',
    description: `<p><a href="/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted A Suffering Nude around 1909 in Paris, an <a href="/movement/expressionism"><strong>Expressionist</strong></a> oil on canvas measuring 81 x 54 cm. The <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>female figure</strong></a> conveys emotional intensity through Modigliani's characteristic style: elongated forms, rich textures, and psychological depth.</p>
<p>This early work predates Modigliani's famous series of reclining nudes from 1917. The title suggests <strong>emotional or physical distress</strong>, rendered with the thick, expressive brushwork that defined his approach. The painting is currently in a private collection.</p>`,
    faqs: [
      { question: "When did Modigliani paint A Suffering Nude?", answer: "<a href=\"/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> created this work around 1909 in Paris. It's an early example of his nude paintings." },
      { question: "What style is A Suffering Nude?", answer: "It's an <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> work with emotional depth. <a href=\"/artist/amedeo-modigliani\"><strong>Modigliani's</strong></a> elongated forms and rich textures convey psychological intensity." },
      { question: "Where is this painting now?", answer: "A Suffering Nude is in a private collection. It measures 81 x 54 cm and is painted in oil on canvas." }
    ]
  },
  // 10. summer-night-moore
  {
    slug: 'summer-night-moore',
    description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted A Summer Night between 1884 and 1890, a masterpiece of English <a href="/movement/aesthetic-movement"><strong>Aestheticism</strong></a>. Four <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>female figures</strong></a> rest on a terrace overlooking a moonlit sea, each shown in various stages of semi-undress. They share similar features and forms, arranged across the canvas in subtly contrasted but related poses.</p>
<p>The painting measures 228.5 x 132 cm and combines all of Moore's aesthetic preferences. Floral garlands interweave with an openwork trellis, while the <strong>silvery moonlight</strong> creates an atmospheric backdrop. The pale clouds festooning the dark sky mirror the human scene in the foreground.</p>
<p>The work hangs at the <a href="/museum/walker-art-gallery"><strong>Walker Art Gallery</strong></a> in Liverpool, purchased in 1890. It represents Moore's mature style, where his earlier shallow backgrounds dissolve into nature.</p>`,
    faqs: [
      { question: "Where is A Summer Night displayed?", answer: "The painting is at the <a href=\"/museum/walker-art-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool, purchased in 1890. It measures 228.5 x 132 cm." },
      { question: "What movement is A Summer Night part of?", answer: "It's a masterpiece of English <a href=\"/movement/aesthetic-movement\"><strong>Aestheticism</strong></a>. <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> prioritized visual beauty over narrative content." },
      { question: "What is depicted in A Summer Night?", answer: "Four <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> rest on a terrace overlooking a moonlit sea. <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> arranged them in carefully contrasted poses." }
    ]
  },
  // 11. adriaen-van-ostade-a-talk-at-fireplace
  {
    slug: 'adriaen-van-ostade-a-talk-at-fireplace',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted A Talk at Fireplace around 1640, a <a href="/movement/baroque"><strong>Baroque</strong></a> genre scene measuring 39.5 x 34.5 cm. Peasant figures gather by a hearth in conversation, rendered with the warm <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> typical of Dutch Golden Age interiors.</p>
<p>Van Ostade specialized in depicting <strong>peasant life</strong> with warmth and gentle humor. His tavern scenes and domestic interiors were highly popular with collectors. The painting hangs at the <a href="/museum/hermitage"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where is A Talk at Fireplace displayed?", answer: "The painting is at the <a href=\"/museum/hermitage\"><strong>Hermitage Museum</strong></a> in Saint Petersburg. It measures 39.5 x 34.5 cm." },
      { question: "When was this painting created?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> painted this work around 1640. It's part of his extensive body of peasant scenes." },
      { question: "What style is A Talk at Fireplace?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> depicted everyday peasant life with characteristic warmth." }
    ]
  },
  // 12. alexandre-cabanel-a-thinker-a-young-roman-monk
  {
    slug: 'alexandre-cabanel-a-thinker-a-young-roman-monk',
    description: `<p><a href="/artist/alexandre-cabanel"><strong>Alexandre Cabanel</strong></a> painted A Thinker, Young Roman Monk in 1848, depicting a contemplative young man in religious robes. The work exemplifies <a href="/movement/academicism"><strong>Academic</strong></a> painting with its polished technique and serious subject matter.</p>
<p>Cabanel was one of the leading French painters during the Second Empire, known for historical, classical, and religious subjects. This early work shows his skill in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraiture</strong></a> and his interest in <strong>spiritual themes</strong>. The painting hangs at the <a href="/museum/musee-fabre"><strong>Musée Fabre</strong></a> in Montpellier.</p>`,
    faqs: [
      { question: "Where is A Thinker, Young Roman Monk?", answer: "The painting is at the <a href=\"/museum/musee-fabre\"><strong>Musée Fabre</strong></a> in Montpellier, France. <a href=\"/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> painted it in 1848." },
      { question: "What style is this painting?", answer: "It's French <a href=\"/movement/academicism\"><strong>Academic</strong></a> painting with polished technique. <a href=\"/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> was a leading figure of this style." },
      { question: "What is the subject?", answer: "A young Roman monk in contemplation. <a href=\"/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> was known for religious and historical subjects alongside portraits." }
    ]
  },
  // 13. albert-joseph-moore-a-venus
  {
    slug: 'albert-joseph-moore-a-venus',
    description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted A Venus in 1869, a full-length nude modeled after the Venus de Milo. The <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>goddess of love</strong></a> stands against a backdrop of white blossoms, her stance demure and contemplative with one arm raised in a graceful arc.</p>
<p>The painting measures 76.2 x 160 cm and marked Moore's move away from Old Testament scenes toward classical subjects. Like other artists of the <a href="/movement/aesthetic-movement"><strong>Aesthetic Movement</strong></a>, he valued <strong>beautifully arranged forms</strong> over storytelling. A blue and white ceramic pot at the left reappears in later works.</p>
<p>A Venus hangs at the <a href="/museum/york-art-gallery"><strong>York Art Gallery</strong></a> in York, UK.</p>`,
    faqs: [
      { question: "Where is Moore's A Venus displayed?", answer: "The painting is at <a href=\"/museum/york-art-gallery\"><strong>York Art Gallery</strong></a> in York, UK. It measures 76.2 x 160 cm." },
      { question: "What inspired A Venus?", answer: "<a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> modeled the figure after the Venus de Milo. He joined other artists of the day in a new interest in classical subjects." },
      { question: "What movement does this belong to?", answer: "It's part of the <a href=\"/movement/aesthetic-movement\"><strong>Aesthetic Movement</strong></a>. <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> prioritized visual beauty and harmony over narrative content." }
    ]
  },
  // 14. adriaen-van-ostade-a-village-inn
  {
    slug: 'adriaen-van-ostade-a-village-inn',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted A Village Inn, depicting peasants gathered at a rural tavern. Such scenes were Van Ostade's specialty during the Dutch Golden Age. He rendered interiors with warm <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> and captured the <strong>convivial atmosphere</strong> of everyday life.</p>
<p>Van Ostade studied with Frans Hals in Haarlem and produced hundreds of genre paintings throughout his career. His tavern scenes influenced later artists and remain popular examples of <a href="/movement/baroque"><strong>Baroque</strong></a> genre painting.</p>`,
    faqs: [
      { question: "What is A Village Inn about?", answer: "Peasants gather at a rural tavern. <a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> specialized in depicting everyday Dutch life with warmth and humor." },
      { question: "What style is A Village Inn?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> used warm <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a> typical of the period." },
      { question: "Who influenced Van Ostade?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> studied with Frans Hals in Haarlem. He became one of the most prolific Dutch genre painters." }
    ]
  },
  // 15. jan-steen-a-village-wedding
  {
    slug: 'jan-steen-a-village-wedding',
    description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> painted A Village Wedding in 1653, depicting a lively peasant celebration. The oil on canvas measures 64 x 81 cm and captures the festive chaos Steen became famous for. Revelers dance, drink, and celebrate with the boisterous energy typical of his work.</p>
<p>Unlike many Dutch painters who portrayed wealthy patrons, Steen captured <strong>common people</strong> enjoying themselves, usually with humor and implied moral lessons. His paintings often show what became known as a "Jan Steen household," meaning cheerful disorder.</p>
<p>The painting hangs at the <a href="/museum/boijmans-van-beuningen"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam.</p>`,
    faqs: [
      { question: "Where is A Village Wedding displayed?", answer: "The painting is at <a href=\"/museum/boijmans-van-beuningen\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam. It measures 64 x 81 cm." },
      { question: "When did Jan Steen paint this?", answer: "<a href=\"/artist/jan-steen\"><strong>Steen</strong></a> painted this work in 1653. It's a characteristic example of his festive peasant scenes." },
      { question: "What is distinctive about Steen's paintings?", answer: "<a href=\"/artist/jan-steen\"><strong>Steen</strong></a> depicted common people with humor and moral undertones. His chaotic scenes gave rise to the Dutch phrase \"a Jan Steen household.\"" }
    ]
  },
  // 16. rembrandt-a-village-with-a-river
  {
    slug: 'rembrandt-a-village-with-a-river',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Village with a River in 1645, a small <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> measuring just 13 x 21 cm. Using varying densities of etching lines, he suggested the play of sunlight across a rural Dutch scene. Buildings cluster along a waterway in this intimate view of the countryside.</p>
<p>Though better known for portraits and biblical scenes, Rembrandt produced many landscape etchings and drawings during the 1640s. This small work demonstrates his ability to create <strong>atmospheric effects</strong> with minimal means.</p>`,
    faqs: [
      { question: "When did Rembrandt create this landscape?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> made this work in 1645. It measures just 13 x 21 cm." },
      { question: "What technique did Rembrandt use?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> varied the density of etching lines to suggest light and shadow across the <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a>." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> landscape. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> produced many such works during the 1640s alongside his portraits." }
    ]
  },
  // 17. rembrandt-a-village-with-a-square-tower
  {
    slug: 'rembrandt-a-village-with-a-square-tower',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Village with a Square Tower in 1650, a small <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> measuring 9 x 16 cm. A church tower rises above clustered buildings in this rural Dutch scene, catalogued as Bartsch 218 in reference works on Rembrandt's etchings.</p>
<p>These small landscape works were produced during Rembrandt's mature period when he took frequent walks in the Dutch countryside. He captured <strong>modest rural architecture</strong> with the same attention he gave to more ambitious subjects.</p>`,
    faqs: [
      { question: "When did Rembrandt make this work?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created this landscape in 1650. It's catalogued as Bartsch 218 and measures 9 x 16 cm." },
      { question: "What is depicted in this landscape?", answer: "A Dutch village with a prominent square church tower. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured rural <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> during walks in the countryside." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> landscape sketch. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> produced many such works during the 1640s and 1650s." }
    ]
  },
  // 18. edgar-degas-a-visit-to-the-museum
  {
    slug: 'edgar-degas-a-visit-to-the-museum',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted A Visit to the Museum (also called Woman Viewed from Behind), showing an elegantly dressed <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> gazing at paintings in the Grand Gallery of the Louvre. The figure is likely his friend and fellow artist <a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a>, who shared his love of studying Old Masters.</p>
<p>The painting measures 81.3 x 75.6 cm and captures a <strong>communal space</strong> both artists could share, unlike the cafés and cabarets that excluded women. Degas positions us behind the figure, inviting us to share her contemplation of the art.</p>
<p>The work hangs at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., a gift from Paul Mellon in 1985.</p>`,
    faqs: [
      { question: "Where is A Visit to the Museum displayed?", answer: "The painting is at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. Paul Mellon donated it in 1985." },
      { question: "Who is the woman in the painting?", answer: "The figure is likely <a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a>, <a href=\"/artist/edgar-degas\"><strong>Degas's</strong></a> friend and fellow artist. They both loved visiting the Louvre." },
      { question: "What style is this painting?", answer: "It's <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a>. <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> captured a moment of quiet contemplation in the museum gallery." }
    ]
  },
  // 19. rembrandt-a-warrior
  {
    slug: 'rembrandt-a-warrior',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted A Warrior between 1626 and 1627, early in his career. The small work measures 40 x 29 cm and depicts a figure in armor with a pensive expression. Bold contrasting light and shadow illuminate the warrior's features and the <strong>intricate details</strong> of his armor.</p>
<p>The warrior's identity remains unknown. Some scholars see the artist himself in the figure, while others view it as reflecting the Dutch Golden Age's fascination with military prowess. The painting is currently in a private collection.</p>`,
    faqs: [
      { question: "When did Rembrandt paint A Warrior?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this work between 1626 and 1627, early in his career. It measures 40 x 29 cm." },
      { question: "What is the subject?", answer: "An armored warrior with a pensive expression. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used dramatic light and shadow to highlight the figure and armor." },
      { question: "Where is A Warrior now?", answer: "The painting is in a private collection. The warrior's identity remains a mystery to scholars." }
    ]
  },
  // 20. frederic-edwin-church-a-waterfall-in-colombia
  {
    slug: 'frederic-edwin-church-a-waterfall-in-colombia',
    description: `<p><a href="/artist/frederic-edwin-church"><strong>Frederic Edwin Church</strong></a> painted A Waterfall in Colombia in 1853, capturing the dramatic <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> he encountered during his South American travels. The work uses oil paint on paperboard to render cascading water amid lush tropical vegetation.</p>
<p>Church was a central figure in the <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a>, known for realistic detail, dramatic light, and panoramic views. His South American expeditions, inspired partly by Alexander von Humboldt's writings, produced some of his most celebrated works.</p>
<p>The painting is at the <a href="/museum/cooper-hewitt"><strong>Cooper Hewitt, Smithsonian Design Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where is A Waterfall in Colombia?", answer: "The painting is at the <a href=\"/museum/cooper-hewitt\"><strong>Cooper Hewitt, Smithsonian Design Museum</strong></a>. It was created in 1853." },
      { question: "What movement was Church part of?", answer: "<a href=\"/artist/frederic-edwin-church\"><strong>Church</strong></a> was a leader of the <a href=\"/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, known for dramatic American <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." },
      { question: "Why did Church paint South America?", answer: "<a href=\"/artist/frederic-edwin-church\"><strong>Church</strong></a> traveled to South America inspired by Alexander von Humboldt's writings. He documented dramatic tropical scenery." }
    ]
  },
  // 21. william-blake-a-white-haired-man-in-a-long-pale-robe-who-flees-f
  {
    slug: 'william-blake-a-white-haired-man-in-a-long-pale-robe-who-flees-f',
    description: `<p><a href="/artist/william-blake"><strong>William Blake</strong></a> created this visionary watercolor as part of his unique body of illuminated works. A white-haired figure in flowing pale robes flees through the composition, embodying the mystical, spiritual themes that defined Blake's art. His figures often move between material and spiritual realms.</p>
<p>Blake worked as both poet and visual artist, developing a personal mythology that combined biblical imagery with his own prophetic visions. His watercolors and engravings influenced <a href="/movement/romanticism"><strong>Romantic</strong></a> artists and remain powerful expressions of <strong>spiritual imagination</strong>.</p>`,
    faqs: [
      { question: "What style is this William Blake work?", answer: "<a href=\"/artist/william-blake\"><strong>Blake</strong></a> created visionary works combining <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> imagery with personal mythology and biblical themes." },
      { question: "What is the subject?", answer: "A white-haired figure in pale robes flees through the scene. <a href=\"/artist/william-blake\"><strong>Blake's</strong></a> figures often move between spiritual and material realms." },
      { question: "What medium did Blake use?", answer: "<a href=\"/artist/william-blake\"><strong>Blake</strong></a> typically worked in watercolor and engraving. His illuminated books combined poetry with visual art." }
    ]
  },
  // 22. hendrick-avercamp-a-winter-scene-with-skaters-near-a-castle
  {
    slug: 'hendrick-avercamp-a-winter-scene-with-skaters-near-a-castle',
    description: `<p><a href="/artist/hendrick-avercamp"><strong>Hendrick Avercamp</strong></a> painted A Winter Scene with Skaters near a Castle, one of his characteristic frozen <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>. Figures of all social classes skate, play, and traverse the ice, with a castle rising in the background. The silvery winter light captures the <strong>Dutch winter atmosphere</strong>.</p>
<p>Avercamp, who was deaf and mute, specialized exclusively in winter scenes. His detailed depictions of ice-skating and winter activities became immensely popular with Dutch collectors. He populated his frozen waterways with dozens of figures engaged in everyday activities.</p>`,
    faqs: [
      { question: "What is Avercamp known for?", answer: "<a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> specialized in Dutch winter <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. He was deaf and mute, communicating primarily through his art." },
      { question: "What is depicted in this painting?", answer: "Figures skate and play on frozen water near a castle. <a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> included people from all social classes in his winter scenes." },
      { question: "What style is this painting?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/hendrick-avercamp\"><strong>Avercamp's</strong></a> winter scenes were extremely popular with collectors." }
    ]
  },
  // 23. hendrick-avercamp-a-winter-scene-with-two-gentlemen-playing-colf
  {
    slug: 'hendrick-avercamp-a-winter-scene-with-two-gentlemen-playing-colf',
    description: `<p><a href="/artist/hendrick-avercamp"><strong>Hendrick Avercamp</strong></a> painted A Winter Scene with Two Gentlemen Playing Colf, depicting the Dutch predecessor of golf being played on ice. Colf was a popular winter pastime, and Avercamp documented it alongside skating and other frozen <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> activities.</p>
<p>Two well-dressed gentlemen swing at a ball while other figures populate the icy scene. Avercamp's winter paintings provide <strong>valuable historical records</strong> of Dutch recreational activities during the Little Ice Age, when canals and rivers froze regularly.</p>`,
    faqs: [
      { question: "What is colf?", answer: "Colf was a Dutch ball-and-stick game, a predecessor to modern golf. <a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> often depicted it being played on frozen waterways." },
      { question: "What is the subject of this painting?", answer: "Two gentlemen play colf on ice while others skate and walk. <a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> documented winter pastimes of all social classes." },
      { question: "Why are Avercamp's paintings historically valuable?", answer: "<a href=\"/artist/hendrick-avercamp\"><strong>Avercamp's</strong></a> winter scenes record Dutch life during the Little Ice Age when waterways froze regularly, enabling ice sports." }
    ]
  },
  // 24. salvator-rosa-a-witch
  {
    slug: 'salvator-rosa-a-witch',
    description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted A Witch, depicting a sorceress engaged in dark rituals. Rosa was fascinated by themes of witchcraft, bandits, and the supernatural, setting his scenes in wild, untamed <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>. His witch paintings combined <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>macabre</strong></a> subject matter with theatrical drama.</p>
<p>The Neapolitan artist was known for his rebellious personality and unconventional subjects. His witchcraft scenes, painted during the 17th century, explored <strong>forbidden knowledge</strong> and supernatural power with an intensity unusual for the <a href="/movement/baroque"><strong>Baroque</strong></a> period.</p>`,
    faqs: [
      { question: "What subjects did Salvator Rosa paint?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Rosa</strong></a> was known for witchcraft, bandits, and wild <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. His unconventional subjects set him apart from contemporary artists." },
      { question: "What style is A Witch?", answer: "It's Italian <a href=\"/movement/baroque\"><strong>Baroque</strong></a> with <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre</strong></a> subject matter. <a href=\"/artist/salvator-rosa\"><strong>Rosa</strong></a> combined drama with supernatural themes." },
      { question: "What is the subject of A Witch?", answer: "A sorceress performs dark rituals. <a href=\"/artist/salvator-rosa\"><strong>Rosa</strong></a> explored themes of forbidden knowledge and supernatural power." }
    ]
  },
  // 25. pieter-de-hooch-a-woman-and-a-child-on-a-bleichwiese
  {
    slug: 'pieter-de-hooch-a-woman-and-a-child-on-a-bleichwiese',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted A Woman and a Child on a Bleichwiese, depicting a domestic scene on a bleaching field where linen was laid out to whiten in the sun. A <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> and child occupy the sunlit space, surrounded by the order and cleanliness typical of Dutch households.</p>
<p>De Hooch specialized in domestic interiors and courtyards, capturing <strong>light and space</strong> with geometric precision. His scenes of Dutch home life rival Vermeer's in their quiet beauty and attention to everyday activities.</p>`,
    faqs: [
      { question: "What is a Bleichwiese?", answer: "A bleaching field where linen was laid out to whiten in the sun. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> depicted this common Dutch domestic activity." },
      { question: "What is De Hooch known for?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> specialized in Dutch domestic interiors and courtyards. His treatment of light and space rivals <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a>." },
      { question: "What style is this painting?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting, depicting everyday domestic life with careful attention to light." }
    ]
  },
  // 26. pieter-de-hooch-a-woman-and-a-maid-in-a-courtyard
  {
    slug: 'pieter-de-hooch-a-woman-and-a-maid-in-a-courtyard',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted A Woman and a Maid in a Courtyard, showing a mistress and servant in a typical Dutch brick courtyard. Sunlight falls across the geometric paving stones, creating the <strong>spatial effects</strong> that define De Hooch's finest work. The scene captures the orderly rhythm of Dutch household life.</p>
<p>De Hooch excelled at depicting transitions between interior and exterior spaces. His courtyards, with their careful brick patterns and filtered light, became his signature subject during his most productive years in Delft.</p>`,
    faqs: [
      { question: "What is distinctive about De Hooch's courtyards?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> captured transitions between indoor and outdoor spaces. Sunlight on geometric brick patterns created his signature spatial effects." },
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> and her maid occupy a Dutch courtyard. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> depicted the orderly rhythm of household life." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> worked in Delft during his most productive years." }
    ]
  },
  // 27. gabriel-metsu-a-woman-drawing-wine-from-a-barrel
  {
    slug: 'gabriel-metsu-a-woman-drawing-wine-from-a-barrel',
    description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted A Woman Drawing Wine from a Barrel, capturing a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in the midst of a common household task. The scene demonstrates Metsu's skill in rendering textures and materials, from the wooden barrel to fabric and ceramic.</p>
<p>Metsu was one of the finest Dutch genre painters, rivaling Vermeer and De Hooch in his quiet domestic scenes. His work often depicts <strong>moments of domestic activity</strong> with psychological subtlety and technical refinement.</p>`,
    faqs: [
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> draws wine from a barrel. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> captured common household activities with great skill." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> rivaled Vermeer in his domestic scenes." },
      { question: "What is Metsu known for?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> excelled at rendering textures and materials. His quiet domestic scenes show psychological subtlety." }
    ]
  },
  // 28. pieter-de-hooch-a-woman-drinking-with-two-men
  {
    slug: 'pieter-de-hooch-a-woman-drinking-with-two-men',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted A Woman Drinking with Two Men, depicting a convivial scene in a Dutch interior. A <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> shares drinks with two male companions, their interaction suggesting the <strong>social pleasures</strong> of Dutch domestic life.</p>
<p>De Hooch's interior scenes capture light filtering through windows and doors, illuminating figures engaged in everyday activities. His work provides a window into 17th-century Dutch social customs and domestic architecture.</p>`,
    faqs: [
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> drinks with two men in a Dutch interior. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> captured the social pleasures of daily life." },
      { question: "What is distinctive about De Hooch's interiors?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> excelled at depicting light filtering through windows and doors. His interiors reveal Dutch social customs and architecture." },
      { question: "What style is this painting?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> specialized in domestic scenes." }
    ]
  },
  // 29. rembrandt-a-woman-lying-on-a-bed
  {
    slug: 'rembrandt-a-woman-lying-on-a-bed',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Woman Lying on a Bed, an intimate study of a reclining <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>female figure</strong></a>. The drawing captures a moment of rest with the artist's characteristic quick, confident strokes. Light and shadow define the form without idealizing it.</p>
<p>Such studies from life were essential to Rembrandt's practice. He observed women in <strong>unguarded moments</strong>, building a visual vocabulary of human posture and expression that enriched his larger compositions.</p>`,
    faqs: [
      { question: "What is the subject of this drawing?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> reclines on a bed. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured intimate moments with quick, confident strokes." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period life study. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used such drawings to understand human form and expression." },
      { question: "Why did Rembrandt make such studies?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> observed people in unguarded moments. These studies informed his larger paintings and etchings." }
    ]
  },
  // 30. rembrandt-a-woman-making-water
  {
    slug: 'rembrandt-a-woman-making-water',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Woman Making Water, depicting a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> relieving herself in an outdoor setting. Such frank depictions of everyday bodily functions were unusual in 17th-century art, but Rembrandt approached all aspects of human life with <strong>unflinching honesty</strong>.</p>
<p>The work reflects Rembrandt's broader commitment to depicting reality without idealization. He found subjects worthy of art in scenes that other artists might have considered beneath their dignity.</p>`,
    faqs: [
      { question: "What is unusual about this subject?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> depicted a woman in an intimate bodily function. Such frank subjects were rare in 17th-century art." },
      { question: "Why did Rembrandt choose this subject?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> approached all aspects of human life with honesty. He found art in subjects others might have ignored." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period etching. <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> realistic approach distinguished him from contemporaries." }
    ]
  },
  // 31. gabriel-metsu-a-woman-seated-at-a-table-and-a-man-tuning-a-violi
  {
    slug: 'gabriel-metsu-a-woman-seated-at-a-table-and-a-man-tuning-a-violi',
    description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted A Woman Seated at a Table and a Man Tuning a Violin, a scene of domestic music-making. A <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> waits while her companion prepares to play. Music scenes were popular in Dutch genre painting, often carrying <strong>romantic undertones</strong>.</p>
<p>Metsu rendered fabrics, instruments, and interior details with great care. His quiet domestic scenes rival Vermeer's in their psychological subtlety and technical refinement.</p>`,
    faqs: [
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> and man prepare for music-making. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> depicted domestic scenes with psychological depth." },
      { question: "Why were music scenes popular in Dutch art?", answer: "Music often suggested romance or courtship in Dutch genre painting. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> used such scenes to explore relationships." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/gabriel-metsu\"><strong>Metsu's</strong></a> work rivals <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> in refinement." }
    ]
  },
  // 32. gerard-ter-borch-a-woman-spinning
  {
    slug: 'gerard-ter-borch-a-woman-spinning',
    description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted A Woman Spinning, depicting a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> engaged in the traditional domestic task. Ter Borch was renowned for his ability to render fabric textures, particularly satin, with remarkable realism. The spinning scene captures <strong>quiet domestic industry</strong>.</p>
<p>Ter Borch's genre paintings often feature well-dressed figures in refined interiors. His technical mastery of surfaces and materials made him one of the most admired Dutch painters of his generation.</p>`,
    faqs: [
      { question: "What is Ter Borch known for?", answer: "<a href=\"/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a> was renowned for rendering fabric textures, especially satin. His technical skill was widely admired." },
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> spins thread. <a href=\"/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a> depicted domestic tasks with dignity and refinement." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a> specialized in refined domestic scenes." }
    ]
  },
  // 33. pieter-de-hooch-a-woman-with-a-baby-in-her-lap-and-a-small-child
  {
    slug: 'pieter-de-hooch-a-woman-with-a-baby-in-her-lap-and-a-small-child',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted A Woman with a Baby in Her Lap and a Small Child, a tender domestic scene of motherhood. A <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> holds an infant while another child is nearby. Light filters through a window, illuminating the <strong>intimate family moment</strong>.</p>
<p>De Hooch's domestic interiors celebrate the quiet pleasures of Dutch family life. His careful attention to light and architectural space creates scenes of warmth and order.</p>`,
    faqs: [
      { question: "What is the subject of this painting?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>mother</strong></a> holds a baby while another child is near. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> captured tender moments of Dutch family life." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> specialized in domestic interiors." },
      { question: "What is distinctive about De Hooch's style?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> excelled at depicting light filtering through interiors. His scenes convey warmth and domestic order." }
    ]
  },
  // 34. rembrandt-a-woman-with-a-child-frightened-by-a-dog
  {
    slug: 'rembrandt-a-woman-with-a-child-frightened-by-a-dog',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Woman with a Child Frightened by a Dog, capturing a moment of sudden alarm. A <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> and child react to an approaching dog with <strong>spontaneous emotion</strong>. Such everyday incidents fascinated Rembrandt, who found drama in ordinary life.</p>
<p>The work demonstrates Rembrandt's ability to capture fleeting expressions and gestures. His studies of human reaction informed his larger narrative compositions.</p>`,
    faqs: [
      { question: "What is the subject of this work?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> and child react in alarm to an approaching dog. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured spontaneous emotion." },
      { question: "Why did Rembrandt depict such scenes?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> found drama in everyday incidents. His studies of human reaction informed his larger works." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period study. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> excelled at capturing fleeting expressions." }
    ]
  },
  // 35. rembrandt-a-young-man-seated-and-standing-the-walking-traine
  {
    slug: 'rembrandt-a-young-man-seated-and-standing-the-walking-traine',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created A Young Man Seated and Standing (The Walking Trainer), a study showing a figure in multiple poses. Such drawings helped the artist understand <strong>human movement and posture</strong> from different angles. The work demonstrates his thorough approach to figure study.</p>
<p>Multiple-pose studies were common practice in <a href="/movement/baroque"><strong>Baroque</strong></a> workshops. Rembrandt used them to work out compositions and understand how bodies occupied space.</p>`,
    faqs: [
      { question: "What is distinctive about this drawing?", answer: "It shows a figure in multiple poses. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> studied human movement and posture from different angles." },
      { question: "Why did artists make such studies?", answer: "Multiple-pose studies helped artists understand how bodies moved and occupied space. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used them to plan compositions." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period figure study. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used such drawings in his working process." }
    ]
  },
  // 36. rembrandt-a-young-man-seated-turned-to-the-left
  {
    slug: 'rembrandt-a-young-man-seated-turned-to-the-left',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> drew A Young Man Seated, Turned to the Left, capturing a figure in a casual pose. The young man's <strong>relaxed posture</strong> suggests an informal study session rather than a formal portrait sitting. Quick strokes define the figure's position and character.</p>
<p>Such drawings from life were essential to Rembrandt's understanding of human form and expression. They provided raw material he could draw upon for larger compositions.</p>`,
    faqs: [
      { question: "What is the subject of this drawing?", answer: "A young man sits in a casual pose. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured the figure with quick, confident strokes." },
      { question: "Why did Rembrandt make such studies?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used life drawings to understand human form. These studies informed his larger paintings and etchings." },
      { question: "What style is this work?", answer: "It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period life study. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> made many such drawings throughout his career." }
    ]
  },
  // 37. johannes-vermeer-a-young-woman-seated-at-a-virginal
  {
    slug: 'johannes-vermeer-a-young-woman-seated-at-a-virginal',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted A Young Woman Seated at a Virginal, depicting a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> at a keyboard instrument in a refined Dutch interior. Soft light illuminates her figure and the <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> and <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> tones typical of Vermeer's palette.</p>
<p>Music scenes in Dutch painting often carried <strong>romantic associations</strong>. The virginal, a type of harpsichord, was considered an appropriate accomplishment for young women. Vermeer's treatment elevates a domestic scene into something timeless.</p>`,
    faqs: [
      { question: "What is a virginal?", answer: "A virginal is a keyboard instrument similar to a harpsichord. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> painted several scenes of women playing this instrument." },
      { question: "What style is this painting?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> used soft light and refined color to create intimate scenes." },
      { question: "Why were music scenes popular?", answer: "Music often suggested romance in Dutch painting. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> painted several scenes of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> with instruments." }
    ]
  },
  // 38. johannes-vermeer-a-young-woman-seated-at-a-virginal-a-lady-seated-a
  {
    slug: 'johannes-vermeer-a-young-woman-seated-at-a-virginal-a-lady-seated-a',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this scene of a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>young woman</strong></a> at a virginal, one of his late works exploring musical themes. The interior glows with characteristic <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> and <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> tones as light from an unseen window illuminates the scene.</p>
<p>Paintings visible on the wall behind the figure often carry symbolic meaning in Vermeer's work, commenting on the <strong>themes of love and music</strong> that pervade these compositions.</p>`,
    faqs: [
      { question: "What is the subject?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> plays a virginal in a Dutch interior. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> created several variations on this theme." },
      { question: "What do the paintings within the painting mean?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> often included symbolic pictures on walls. They typically comment on themes of love, music, or morality." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> soft light and color create an atmosphere of quiet refinement." }
    ]
  },
  // 39. johannes-vermeer-a-young-woman-seated-at-the-virginals
  {
    slug: 'johannes-vermeer-a-young-woman-seated-at-the-virginals',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted A Young Woman Seated at the Virginals, another of his musical scenes showing a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> at a keyboard instrument. Vermeer returned to this subject repeatedly, finding in it opportunities to explore <strong>light, color, and domestic refinement</strong>.</p>
<p>The virginal scenes belong to Vermeer's mature period and demonstrate his mastery of atmosphere. Each version offers subtle variations in composition, lighting, and the symbolic paintings visible in the background.</p>`,
    faqs: [
      { question: "Why did Vermeer paint multiple virginal scenes?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> found the subject allowed him to explore light and atmosphere. Each version offers subtle variations." },
      { question: "What period is this from?", answer: "It's from <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> mature period when he had mastered his distinctive style of soft light and refined color." },
      { question: "What style is this painting?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> specialized in quiet domestic scenes with <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female figures</strong></a>." }
    ]
  },
  // 40. johannes-vermeer-a-young-woman-seated-at-the-virginals-a-young-woma
  {
    slug: 'johannes-vermeer-a-young-woman-seated-at-the-virginals-a-young-woma',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this scene of a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>young woman</strong></a> at a virginal, continuing his exploration of musical themes. The composition features his signature treatment of light falling across the figure and instrument, creating the <strong>contemplative atmosphere</strong> that defines his work.</p>
<p>Vermeer produced only about 35 paintings during his lifetime, making each one precious. His virginal scenes rank among the most refined examples of Dutch genre painting.</p>`,
    faqs: [
      { question: "How many paintings did Vermeer create?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> produced only about 35 paintings. His small output makes each work precious to scholars and collectors." },
      { question: "What is the subject?", answer: "A <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> plays a virginal in a Dutch interior. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> explored this theme in multiple paintings." },
      { question: "What style is this work?", answer: "It's Dutch Golden Age <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> virginal scenes are among the finest examples of Dutch genre painting." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks with descriptions and FAQs...`);

  for (const update of updates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
