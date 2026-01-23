const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'frida-kahlo-portrait-of-a-woman-in-white',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this 1930 oil on canvas during the early years of her artistic career. The work shows a woman seated in a <strong>white dress</strong> against a neutral background, embodying the stark psychological presence that would become Kahlo's signature. At 119 by 81 centimeters, the painting demonstrates her emerging style before she fully developed her iconic self-portrait approach.</p>
<p>The subject sits in an almost ceremonial pose, her expression carrying the quiet intensity Kahlo brought to all her figures. The white garment dominates the composition, creating a ghostly luminosity against the subdued tones surrounding it. This work represents Kahlo's early exploration of <a href="/apps/masterpieces/movement/naive-art-primitivism"><strong>Naïve Art</strong></a>, featuring simplified forms and direct emotional expression rather than academic technique.</p>
<p>The painting remains in a <strong>private collection</strong>, away from public view. Created just a year after Kahlo married Diego Rivera, the work captures a transitional moment in her life and art.</p>`,
    faqs: [
      { question: "When did Frida Kahlo paint Portrait of a Woman in White?", answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> created this painting in <strong>1930</strong>, early in her career before she developed her iconic self-portrait style that made her internationally recognized." },
      { question: "What style is Portrait of a Woman in White?", answer: "The painting is classified as <a href=\"/apps/masterpieces/movement/naive-art-primitivism\"><strong>Naïve Art</strong></a>, featuring simplified forms and direct emotional expression rather than academic technical mastery." },
      { question: "How big is Frida Kahlo's Portrait of a Woman in White?", answer: "The painting measures <strong>119 by 81 centimeters</strong> (approximately 47 by 32 inches), making it a substantial work in oil on canvas." },
      { question: "Where is Portrait of a Woman in White displayed?", answer: "This early Kahlo work remains in a <strong>private collection</strong> and isn't available for public viewing at any museum." }
    ]
  },
  {
    slug: 'alexandre-cabanel-portrait-of-a-young-artist',
    description: `<p><a href="/apps/masterpieces/artist/alexandre-cabanel"><strong>Alexandre Cabanel</strong></a> painted this intimate portrait in 1842, when he was just nineteen years old and studying at the École des Beaux-Arts in Paris. The small oil on canvas measures only 41.3 by 33 centimeters, yet captures the confident gaze of a fellow young artist with striking psychological depth.</p>
<p>Cabanel would later become one of the most celebrated <strong>academic painters</strong> of the Second Empire, favored by Napoleon III and known for his idealized mythological scenes. But this early work reveals his talent for capturing individual character before he turned to grander subjects. The painting exemplifies the <a href="/apps/masterpieces/movement/academicism"><strong>Academic style</strong></a> that dominated French painting throughout the nineteenth century.</p>
<p>The portrait remains in a <strong>private collection</strong>. It offers a glimpse into Cabanel's formative years, showing the technical skill that would earn him the Prix de Rome in 1845 and establish his reputation as one of France's leading portrait and history painters.</p>`,
    faqs: [
      { question: "When was Alexandre Cabanel's Portrait of a Young Artist painted?", answer: "<a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Alexandre Cabanel</strong></a> painted this work in <strong>1842</strong> when he was only nineteen years old, still a student at the École des Beaux-Arts in Paris." },
      { question: "What art style is Portrait of a Young Artist?", answer: "The painting represents <a href=\"/apps/masterpieces/movement/academicism\"><strong>Academicism</strong></a>, the formal style taught at French art schools that emphasized technical skill and classical ideals." },
      { question: "How large is this Cabanel portrait?", answer: "The painting is relatively small at <strong>41.3 by 33 centimeters</strong> (roughly 16 by 13 inches), an intimate scale typical of personal portraits." },
      { question: "Where can I see Portrait of a Young Artist?", answer: "This early Cabanel work is held in a <strong>private collection</strong> and isn't currently on public display at any museum." }
    ]
  },
  {
    slug: 'bronzino-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> created this arresting portrait during the 1530s, depicting an unidentified young Florentine nobleman with cool elegance. The oil on wood panel measures 95.6 by 74.9 centimeters and exemplifies the sophisticated <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist style</strong></a> that made Bronzino the preferred portraitist of Cosimo I de' Medici's court.</p>
<p>The young man stands in a contrapposto pose, his left hand resting on his hip while his right index finger marks a place in a book of poetry. His expression conveys aristocratic reserve bordering on arrogance. Bronzino incorporates subtle symbolic elements throughout, including grotesque mask-like faces hidden in the furniture carvings and even in the folds of the youth's clothing. These monstrous details may suggest that the sitter's polished appearance is itself a kind of mask.</p>
<p>Scholars have proposed several identities for the subject, including the spice merchant Bonaccorso Pinadori who supplied artists' materials. The painting entered the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in 1929 as part of the H.O. Havemeyer Collection bequest.</p>`,
    faqs: [
      { question: "Where can I see Bronzino's Portrait of a Young Man?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York City, part of the H.O. Havemeyer Collection bequeathed in 1929." },
      { question: "What art movement does this Bronzino portrait represent?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, characterized by elongated proportions, complex poses, and refined elegance typical of mid-sixteenth-century Florentine court art." },
      { question: "Who is depicted in this portrait?", answer: "The sitter remains <strong>unidentified</strong>, though scholars have proposed names including Bonaccorso Pinadori, a wealthy Florentine spice merchant who also sold artists' materials." },
      { question: "How big is Bronzino's Portrait of a Young Man?", answer: "The oil on wood panel measures <strong>95.6 by 74.9 centimeters</strong> (approximately 37.6 by 29.5 inches), a substantial work befitting an aristocratic commission." }
    ]
  },
  {
    slug: 'lorenzo-lotto-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> painted this psychologically penetrating portrait around 1530, capturing a young man in his private study surrounded by books, letters, and personal objects. Unlike the formal poses favored by his Venetian contemporaries, Lotto depicted his subject in an intimate domestic setting that reveals character through environment.</p>
<p>The young man leans forward slightly, his expression thoughtful and somewhat melancholy. Scattered across his desk are hunting horns, a mandolin, letters, and dried rose petals, each object suggesting aspects of his personality and interests. A lizard creeps among the papers, a detail scholars interpret variously as a symbol of intellectual pursuit or simply Lotto's love of observed detail.</p>
<p>This approach to portraiture set Lotto apart from the idealized representations of Titian and other leading Venetians. The painting hangs at the <a href="/apps/masterpieces/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a> in Venice, where it remains one of the most admired examples of <strong>Renaissance psychological portraiture</strong>.</p>`,
    faqs: [
      { question: "Where is Lorenzo Lotto's Portrait of a Young Man displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, Italy, among other masterpieces of Venetian Renaissance art." },
      { question: "What makes this Lotto portrait unusual?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a> showed his subject in a private study filled with personal objects, an intimate approach that differed from the formal portraits typical of Venice." },
      { question: "What objects appear in the portrait?", answer: "The young man's desk holds <strong>books, letters, a mandolin, hunting horns, dried rose petals, and a lizard</strong>, each detail suggesting aspects of his personality and interests." },
      { question: "When was this portrait painted?", answer: "Lotto created this work around <strong>1530</strong>, during the height of his career when he was producing some of his most psychologically complex portraits." }
    ]
  },
  {
    slug: 'eustache-le-sueur-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/eustache-le-sueur"><strong>Eustache Le Sueur</strong></a> painted this elegant portrait around 1640, during the height of his career as one of France's leading <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters. The oil on canvas measures 64 by 52 centimeters and depicts a young man of evident refinement and social standing.</p>
<p>Le Sueur was often called the "French Raphael" for his graceful, classically inspired style. Though best known for his religious and mythological paintings, this portrait demonstrates his ability to capture individual presence with quiet dignity. The sitter's direct gaze and composed expression reflect the restrained elegance that characterized French aristocratic portraiture of the period.</p>
<p>The painting now resides at the <a href="/apps/masterpieces/museum/wadsworth-atheneum"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut. Le Sueur died young at thirty-eight, leaving a relatively small body of work that influenced French painting through its combination of Italian classical ideals and French refinement.</p>`,
    faqs: [
      { question: "Where can I see this Le Sueur portrait?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, one of America's oldest public art museums." },
      { question: "What art movement does this portrait represent?", answer: "Le Sueur's work exemplifies French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting, combining Italian classical influences with the restrained elegance favored at the French court." },
      { question: "Why was Le Sueur called the French Raphael?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> earned this nickname for his graceful, classically inspired style that reminded contemporaries of the Italian Renaissance master." },
      { question: "How large is this portrait?", answer: "The oil on canvas measures <strong>64 by 52 centimeters</strong> (approximately 25 by 20 inches), a modest size typical of personal portraits from this period." }
    ]
  },
  {
    slug: 'jan-van-eyck-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> completed this small but remarkable portrait on October 10, 1432, as noted in his Latin signature carved into the painted stone parapet. Also known as "Léal Souvenir" (Loyal Remembrance) or "Timotheus," the oil on oak panel measures just 33.4 by 19 centimeters yet contains layers of mystery that scholars continue to debate.</p>
<p>The tall, narrow format is unusual for Van Eyck. The young man wears a fashionable green chaperon and holds a scroll inscribed on its outer surface, possibly indicating a legal profession. Above Van Eyck's signature, large capitals spell "LEAL SOVVENIR" in French, while Greek letters at the top spell "TUM OTHEOS" in Latin, meaning "then God." The cracked, weathered stone parapet may allude to human mortality.</p>
<p>Recent restoration at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London removed centuries of yellowed varnish, revealing Van Eyck's original brilliance. The sitter's <strong>blue eyes</strong> now gleam again, and his hand holding the document projects forward with renewed three-dimensionality.</p>`,
    faqs: [
      { question: "Where is Jan van Eyck's Portrait of a Young Man displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, where recent restoration removed centuries of yellowed varnish to reveal its original brilliance." },
      { question: "What do the inscriptions on this portrait mean?", answer: "The French phrase <strong>\"LEAL SOVVENIR\"</strong> means \"Loyal Remembrance,\" while Greek letters spell Latin words meaning \"then God.\" Scholars still debate their full significance." },
      { question: "When did Van Eyck paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> precisely dated this work to <strong>October 10, 1432</strong>, carving the date in Latin into the painted stone parapet." },
      { question: "How large is this Van Eyck portrait?", answer: "The oil on oak panel is quite small, measuring just <strong>33.4 by 19 centimeters</strong> (about 13 by 7.5 inches), with an unusually tall, narrow format." }
    ]
  },
  {
    slug: 'rogier-van-der-weyden-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> painted this portrait during the final phase of his career, when portraiture became an increasingly important focus of his work. The oil on panel exemplifies the half-length, half-profile format he typically employed, presenting the sitter against a plain background that draws full attention to his features.</p>
<p>Along with <a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a>, Van der Weyden stands as the most important Flemish painter of the early fifteenth century. His portraits are distinguished by their warm coloration, sympathetic expression, and remarkable naturalism. Because he never signed his works, scholars have reconstructed his body of work through careful stylistic analysis.</p>
<p>This portrait now hangs at the <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid. The plain background, either light or dark depending on the work, became a hallmark of Van der Weyden's approach to portraiture.</p>`,
    faqs: [
      { question: "Where can I see this Van der Weyden portrait?", answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, Spain, among their collection of Early Netherlandish masterpieces." },
      { question: "Why didn't Van der Weyden sign his paintings?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> never signed any of his works, so his body of paintings has been reconstructed through stylistic comparison and historical documents." },
      { question: "What distinguishes Van der Weyden's portrait style?", answer: "His portraits feature <strong>half-length, half-profile</strong> compositions against plain backgrounds, with warm coloration, sympathetic expressions, and striking naturalism." },
      { question: "When did Van der Weyden live?", answer: "Van der Weyden was born around <strong>1400 in Tournai</strong> and died on June 18, 1464 in Brussels. He worked during the golden age of Flemish painting." }
    ]
  },
  {
    slug: 'diego-velazquez-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this half-length portrait around 1623, early in his career before he moved from Seville to the Spanish court in Madrid. The oil on canvas captures a young man with dark, wavy hair and a carefully detailed mustache and goatee, his direct gaze engaging the viewer with characteristic intensity.</p>
<p>The subject's identity remains uncertain. Some scholars have speculated this may be a <strong>self-portrait</strong>, noting the apparent age, the way the head turns toward the viewer, and similarities to the face of Saint John the Evangelist in Velázquez's painting of Patmos. Others suggest it could depict his brother Juan. No definitive answer exists.</p>
<p>The painting's provenance is equally mysterious. It doesn't appear in any seventeenth or eighteenth-century inventories of the Royal Seats, yet it was clearly part of the Royal Collections, as it has hung at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> since the museum opened in 1819.</p>`,
    faqs: [
      { question: "Where is Velázquez's Portrait of a Young Man displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, where it has been exhibited since the museum opened in 1819." },
      { question: "Is this a Velázquez self-portrait?", answer: "Some scholars believe it could be a <strong>self-portrait</strong>, citing the subject's age and facial similarities to figures in other Velázquez works, though this remains unconfirmed." },
      { question: "When did Velázquez paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Diego Velázquez</strong></a> created this work around <strong>1623</strong>, early in his career when he was still working in Seville before joining the Spanish court." },
      { question: "What art style does this portrait represent?", answer: "The painting exemplifies Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portraiture, with its realistic detail, direct psychological engagement, and dark background." }
    ]
  },
  {
    slug: 'parmigianino-portrait-of-a-young-man',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted this portrait of a young nobleman during the 1530s, though the work appears unfinished. The sitter's face is highly worked, showing the refined finish and subtle flesh modeling characteristic of Parmigianino's style, while other areas remain thinly sketched.</p>
<p>The young man's short hair reflects a fashion that didn't become popular until the 1530s. He wears a traveling cloak over a black silk jerkin, with a white linen shirt visible beneath. The bulk of the heavy cloak contrasts elegantly with the delicate ties of his chemise collar and decorative detailing around the cuffs. This attention to fabric and texture demonstrates why Parmigianino ranked among the leading Italian <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> painters.</p>
<p>The painting now belongs to the <a href="/apps/masterpieces/museum/royal-collection-uk"><strong>Royal Collection</strong></a> at Windsor Castle in the United Kingdom. Born Girolamo Francesco Maria Mazzola, the artist took his name from his birthplace of Parma, Italy.</p>`,
    faqs: [
      { question: "Where can I see this Parmigianino portrait?", answer: "The painting belongs to the <a href=\"/apps/masterpieces/museum/royal-collection-uk\"><strong>Royal Collection</strong></a> at Windsor Castle in the United Kingdom, where it is accessible to the general public." },
      { question: "Is this portrait finished?", answer: "The work appears <strong>unfinished</strong>. While the sitter's face is highly refined, other areas like the clothing remain thinly sketched, suggesting Parmigianino never completed it." },
      { question: "What does Parmigianino's name mean?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> means \"the little one from Parma.\" His birth name was Girolamo Francesco Maria Mazzola, but he took his artistic name from his Italian birthplace." },
      { question: "What art movement does this portrait represent?", answer: "The painting exemplifies Italian <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, characterized by elegant proportions, refined finish, and sophisticated attention to fabric textures." }
    ]
  },
  {
    slug: 'lorenzo-lotto-portrait-of-a-young-man-in-red-garment',
    description: `<p><a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> painted this striking portrait around 1500, early in his career when he was still developing the psychological intensity that would distinguish his work. The young man wears a vivid <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red garment</strong></a> that dominates the composition, its rich color contrasting with the more subdued background.</p>
<p>Lotto's portraits are celebrated for capturing more than mere physical appearance. Scholars have noted his debt to Northern European painting, particularly the works of Albrecht Dürer, in his pursuit of psychological depth. Unlike the idealized portraits favored by other Venetian painters, Lotto sought to reveal character and individual quirks.</p>
<p>This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna. During Lotto's lifetime, he worked across northern Italy rather than settling permanently in Venice, creating altarpieces and portraits for patrons in Bergamo, Treviso, and the Marche region.</p>`,
    faqs: [
      { question: "Where is this Lorenzo Lotto portrait displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria, among their collection of Renaissance masterworks." },
      { question: "When did Lotto paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a> created this work around <strong>1500</strong>, early in his career before he fully developed his distinctive psychological portrait style." },
      { question: "What makes Lotto's portraits distinctive?", answer: "Lotto's portraits reveal <strong>character and psychological depth</strong> rather than just physical appearance, showing influence from Northern European painters like Dürer." },
      { question: "What color dominates this painting?", answer: "A vivid <strong>red garment</strong> worn by the young man dominates the composition, its rich color creating a striking contrast with the subdued background." }
    ]
  },
  {
    slug: 'bronzino-portrait-of-a-young-man-with-a-book',
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> created this sophisticated portrait during the 1530s, depicting an unknown young Florentine who likely belonged to the artist's circle of literary friends. The sitter stands in a Florentine palace, his left hand on his hip in a pose of confident ease, while his right hand holds a book with his fingers marking a place between the pages.</p>
<p>As a poet himself, Bronzino delighted in literary references and witty visual conceits. The book probably contains poetry, reflecting the intellectual culture of Renaissance Florence. Hidden throughout the composition are grotesque faces, an ancient Roman decorative tradition: mask-like features appear in the carved table and chair, and almost imperceptibly in the folds of the youth's breeches. These monstrous faces may imply that the sitter's handsome, cultivated appearance is itself a kind of mask.</p>
<p>The painting was acquired by the Havemeyer family in 1898 and entered the <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> upon Louisine Havemeyer's death in 1929.</p>`,
    faqs: [
      { question: "Where can I see Bronzino's Portrait of a Young Man with a Book?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York, part of the H.O. Havemeyer Collection since 1929." },
      { question: "What hidden details appear in this portrait?", answer: "<strong>Grotesque mask-like faces</strong> are hidden in the furniture carvings and even in the folds of the young man's clothing, possibly suggesting his polished appearance is itself a kind of mask." },
      { question: "Was Bronzino also a poet?", answer: "Yes, <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> was both a painter and poet who delighted in literary references. The book in this portrait probably contains poetry." },
      { question: "Who might this portrait depict?", answer: "The sitter is <strong>unidentified</strong>, though scholars have proposed Bonaccorso Pinadori, a wealthy Florentine merchant who supplied materials to artists." }
    ]
  },
  {
    slug: 'sandro-botticelli-portrait160of-a-young160man160with-red160cap',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this small but significant portrait around 1483, depicting a boy dressed simply in brown with dark blond curls escaping from beneath his <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red cap</strong></a>. The tempera on panel measures 51 by 36 centimeters and represents a radical departure from conventional portrait formats of the time.</p>
<p>Most fifteenth-century portraits showed subjects in profile. Images of the whole face were reserved for devotional "portraits" of Christ used in private prayer. Botticelli broke this convention by depicting the young man head-on, his shoulders parallel to the picture's edges. His features are individual yet resemble Botticelli's idealized male type, particularly Mars in his painting Venus and Mars.</p>
<p>Renaissance philosophy held that outer beauty reflected inner virtue. The philosopher Marsilio Ficino wrote in 1469 that internal perfection produces the external. This portrait at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London shows Botticelli creating an eternal memorial to a youth who is both good and beautiful, though his identity remains unknown.</p>`,
    faqs: [
      { question: "Where is Botticelli's Portrait of a Young Man with Red Cap?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, among their collection of Italian Renaissance masterworks." },
      { question: "Why was this portrait revolutionary?", answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> showed the subject <strong>facing directly forward</strong>, a view previously reserved for images of Christ. Most portraits of the era used profile views." },
      { question: "How big is this Botticelli portrait?", answer: "The tempera on panel measures <strong>51 by 36 centimeters</strong> (approximately 20 by 14 inches), a modest size typical of personal portraits." },
      { question: "Who is depicted in this portrait?", answer: "The sitter's identity <strong>remains unknown</strong>. His features are individual but resemble Botticelli's idealized male type seen in other works like Venus and Mars." }
    ]
  },
  {
    slug: 'sandro-botticelli-portrait160of-a-young160woman',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> created this profile portrait around 1485, depicting a young married woman standing near a window or door frame. The tempera on wood measures 61 by 40.5 centimeters and captures the idealized beauty that made Botticelli one of the most celebrated painters of Renaissance Florence.</p>
<p>The woman wears a valuable pendant from the Medici jewelry collection, suggesting she moved in the highest Florentine circles. A lock of hair escapes from her bun, adding a note of spontaneity to this otherwise formal profile. Several candidates have been proposed for her identity, including Simonetta Vespucci, Clarice Orsini, and Fioretta Gorini, possibly a "mistress of Giuliano de' Medici."</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence. Though known for his mythological masterpieces like The Birth of Venus and Primavera, Botticelli also painted portraits of contemporary Florentines that preserve glimpses of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women's</strong></a> lives in the Renaissance.</p>`,
    faqs: [
      { question: "Where is Botticelli's Portrait of a Young Woman displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, Italy, near other Botticelli masterpieces in the city where he lived and worked." },
      { question: "Who is the woman in this portrait?", answer: "Her identity remains <strong>uncertain</strong>. Candidates include Simonetta Vespucci, Clarice Orsini, and Fioretta Gorini, possibly connected to the Medici family." },
      { question: "What jewelry does the woman wear?", answer: "She wears a <strong>valuable pendant from the Medici jewelry collection</strong>, suggesting she belonged to or was closely connected with Florence's most powerful family." },
      { question: "How big is this portrait?", answer: "The tempera on wood measures <strong>61 by 40.5 centimeters</strong> (approximately 24 by 16 inches), created by <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Sandro Botticelli</strong></a> around 1485." }
    ]
  },
  {
    slug: 'masaccio-portrait-of-a-young-woman',
    description: `<p><a href="/apps/masterpieces/artist/masaccio"><strong>Masaccio</strong></a> painted this profile portrait around 1425, presenting a young woman with naturalistic directness that marked a departure from medieval stylization. The painting measures 42 by 32 centimeters and exemplifies the Early Renaissance move toward faithful portrayal of individual human subjects.</p>
<p>The woman wears a <strong>red headdress</strong> that cascades alongside her face, indicating both fashion and social status of the era. Her garment in subdued colors suggests understated elegance rather than ostentatious display. The dark, unadorned background isolates the subject and emphasizes her importance within the composition. She wears a chaperon, fashionable headwear of the fifteenth century.</p>
<p>The painting's attribution to Masaccio remains debated among scholars, though it hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C. under his name. Masaccio died at just twenty-six, leaving few works but revolutionizing Italian painting through his pioneering use of perspective and naturalism.</p>`,
    faqs: [
      { question: "Where can I see Masaccio's Portrait of a Young Woman?", answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C., though its attribution to Masaccio has been debated." },
      { question: "When did Masaccio paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> created this work around <strong>1425</strong>, during the early Italian Renaissance when artists were moving away from medieval stylization." },
      { question: "How big is this portrait?", answer: "The painting measures <strong>42 by 32 centimeters</strong> (approximately 16.5 by 12.5 inches), a modest size typical of fifteenth-century profile portraits." },
      { question: "Why is Masaccio important in art history?", answer: "Masaccio revolutionized Italian painting through his <strong>pioneering use of perspective and naturalism</strong>, though he died at just twenty-six years old." }
    ]
  },
  {
    slug: 'edgar-degas-portrait-of-a-young-woman-after-bacchiacca',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this work in 1859, during his formative years when he was deeply studying the Italian Renaissance masters. The oil on canvas depicts a young woman in a <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red dress</strong></a> and feathered hat, seated against a dark background that creates dramatic contrast with her luminous figure.</p>
<p>The title indicates Degas created this portrait after seeing a work by Francesco Bacchiacca, a sixteenth-century Florentine painter. Struck by the beauty of the female figure in Bacchiacca's painting, Degas produced his own interpretation. This practice of studying and reinterpreting old masters was essential to his artistic education, years before he would become famous for his <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> ballet and racecourse scenes.</p>
<p>Degas used soft, delicate brushstrokes that create a sensation of movement and life. He made several preliminary sketches before the final work, demonstrating the careful preparation that characterized his approach throughout his career.</p>`,
    faqs: [
      { question: "When did Degas paint Portrait of a Young Woman after Bacchiacca?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work in <strong>1859</strong>, during his formative years when he was studying Italian Renaissance masters." },
      { question: "Who was Bacchiacca?", answer: "<strong>Francesco Bacchiacca</strong> was a sixteenth-century Florentine painter whose work inspired this portrait. Degas saw Bacchiacca's painting and created his own interpretation." },
      { question: "What colors dominate this painting?", answer: "The woman wears a vivid <strong>red dress</strong> that contrasts dramatically with the dark background, while her feathered hat adds additional visual interest." },
      { question: "How does this relate to Degas's later work?", answer: "This early work shows Degas studying old masters before developing the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> style he became famous for in his ballet and racecourse paintings." }
    ]
  },
  {
    slug: 'rogier-van-der-weyden-portrait-of-a-young-woman-in-a-pinned-hat',
    description: `<p><a href="/apps/masterpieces/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> completed this portrait between 1435 and 1440, also known as "Lady Wearing a Gauze Headdress." The oil on panel measures 47 by 32 centimeters and depicts a woman with unusually bright, large <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue eyes</strong></a> who looks directly at the viewer with striking intimacy.</p>
<p>Unlike Van der Weyden's typical female portraits where subjects bow their heads or gaze into the middle distance, this woman engages the viewer directly. She wears a wide white hennin (a fashionable headdress) over a brown dress with a black-lined, v-shaped neckline. Her hands are clasped in prayer, her expression humble yet confident. The downward folds of the wimple frame her face and accentuate her features rather than concealing them.</p>
<p>Scholars believe the model may have been the artist's wife, Elisabeth Goffaert, though this remains unproven. The painting now hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin, Germany, a prime example of Early Netherlandish portraiture.</p>`,
    faqs: [
      { question: "Where is this Van der Weyden portrait displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin, Germany, among their collection of Early Netherlandish masterpieces." },
      { question: "Who is the woman in the portrait?", answer: "Scholars believe she may be <strong>Elisabeth Goffaert</strong>, the artist's wife, though this remains unproven. Her middle-class dress supports this identification." },
      { question: "What makes this portrait unusual for Van der Weyden?", answer: "Unlike his other female portraits, this woman <strong>looks directly at the viewer</strong> rather than bowing her head or gazing into the middle distance." },
      { question: "How big is this painting?", answer: "The oil on panel measures <strong>47 by 32 centimeters</strong> (approximately 18.5 by 12.5 inches), created by <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> between 1435 and 1440." }
    ]
  },
  {
    slug: 'anders-zorn-portrait-of-agusholzer',
    description: `<p><a href="/apps/masterpieces/artist/anders-zorn"><strong>Anders Zorn</strong></a> painted this portrait in 1879, during his student years at the Royal Swedish Academy of Arts in Stockholm. At just nineteen, Zorn was already impressing his teachers with remarkable talent, and members of Stockholm society had begun approaching him with portrait commissions.</p>
<p>This early work predates Zorn's switch from watercolors to oils, which occurred around 1887. The portrait captures Agus Holzer with the sensitive observation that would characterize Zorn's later celebrated portraits of European and American society figures. His ability to render personality alongside physical likeness was already evident in these formative works.</p>
<p>The following year, Zorn would produce "In Mourning," a watercolor portrait placed in a student exhibition that earned widespread acclaim and launched his professional career. Though trained in Sweden, Zorn would become internationally renowned as the "Swedish Impressionist," painting portraits of three American presidents and countless aristocrats and industrialists across Europe and America.</p>`,
    faqs: [
      { question: "When did Anders Zorn paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a> created this work in <strong>1879</strong>, when he was just nineteen years old and still a student at the Royal Swedish Academy of Arts." },
      { question: "What medium did Zorn use for this portrait?", answer: "This early work was likely created in <strong>watercolor</strong>, as Zorn didn't switch firmly to oil painting until around 1887." },
      { question: "Why is Anders Zorn famous?", answer: "Zorn became known as the \"<strong>Swedish Impressionist</strong>,\" painting portraits of three American presidents and numerous aristocrats and industrialists across Europe and America." },
      { question: "What launched Zorn's professional career?", answer: "His 1880 watercolor \"In Mourning\" placed in a student exhibition earned <strong>widespread acclaim</strong> and established his reputation as a portrait painter." }
    ]
  },
  {
    slug: 'albrecht-durer-portrait-of-albrecht-d252rer-the-elder',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> completed this portrait in 1490, when he was just eighteen years old. It depicts his father, the goldsmith Albrecht the Elder, at age sixty-two or sixty-three. This small oil on panel measuring 47.5 by 39.5 centimeters represents Dürer's earliest surviving painting and heralds the characteristic style of his mature work.</p>
<p>The elder Dürer appears in profile facing right, wearing a dark fur-lined robe and black hat. In his hands he holds a rosary, indicating a personal spiritual moment. The subdued greenish background allows the figure to stand out with quiet dignity. The date "1490" and Dürer's monogram appear in the upper left corner, possibly the oldest extant instance of his famous "AD" signature.</p>
<p>Dürer painted this portrait the month before leaving on his journeyman travels. A companion piece showing his mother, Barbara Holper, was created as a diptych but has been separated since at least 1628. The father panel now hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, while the mother's portrait remains in Nuremberg.</p>`,
    faqs: [
      { question: "Where is Dürer's Portrait of his Father displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy, separated from its companion portrait of Dürer's mother in Nuremberg." },
      { question: "When did Dürer paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> completed this work in <strong>1490</strong> when he was just eighteen years old, making it his earliest surviving oil painting." },
      { question: "Who was Albrecht Dürer the Elder?", answer: "He was Dürer's <strong>father and a goldsmith</strong> by profession, depicted here at age sixty-two or sixty-three holding a rosary." },
      { question: "How big is this Dürer portrait?", answer: "The oil on panel measures <strong>47.5 by 39.5 centimeters</strong> (approximately 18.7 by 15.5 inches), a modest size for this intimate family portrait." }
    ]
  },
  {
    slug: 'giovanni-battista-moroni-portrait-of-alessandri',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this portrait of Prospero Alessandri around 1560. The oil on canvas measures 105 by 84 centimeters and exemplifies the elegantly realistic portrait style that made Moroni one of the great portraitists of the Italian Cinquecento.</p>
<p>Prospero Alessandri was a member of a prominent Bergamo family. Moroni, himself from Bergamo, specialized in capturing the local nobility and clergy with remarkable naturalism. His portraits avoided the grand mythological settings favored by Venetian painters, instead presenting sitters in understated compositions that emphasized individual character over social display.</p>
<p>The painting's provenance traces back to Alessandri himself in 1580, then passed through the Francesco Alessandri Collection in Bergamo before entering the art market in the twentieth century. It was acquired in 2004 by Prince Hans-Adam II and now belongs to the <strong>Liechtenstein Princely Collections</strong> in Vaduz, where it joins other Moroni portraits in demonstrating his mastery of the genre.</p>`,
    faqs: [
      { question: "Where is Moroni's Portrait of Alessandri displayed?", answer: "The painting belongs to the <strong>Liechtenstein Princely Collections</strong> in Vaduz, acquired in 2004 by Prince Hans-Adam II von und zu Liechtenstein." },
      { question: "Who is depicted in this portrait?", answer: "<strong>Prospero Alessandri</strong>, a member of a prominent Bergamo family, commissioned this portrait from his fellow Bergamese painter around 1560." },
      { question: "What makes Moroni's portraits distinctive?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a> captured subjects with <strong>remarkable naturalism</strong>, avoiding grand settings to emphasize individual character over social display." },
      { question: "How large is this portrait?", answer: "The oil on canvas measures <strong>105 by 84 centimeters</strong> (approximately 41 by 33 inches), a substantial size befitting a portrait of a prominent citizen." }
    ]
  },
  {
    slug: 'jean-marc-nattier-portrait-of-alexander-kurakin',
    description: `<p><a href="/apps/masterpieces/artist/jean-marc-nattier"><strong>Jean-Marc Nattier</strong></a> painted this portrait of Prince Alexander Kurakin in 1728, capturing the Russian nobleman in the elegant <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style that made Nattier the most fashionable portraitist of eighteenth-century France. The oil on canvas measures 64 by 48 centimeters.</p>
<p>Prince Alexander Kurakin (1697-1749) was a Russian diplomat and nobleman who spent time in France during the reign of Louis XV. Nattier was renowned for his flattering and elegant depictions of his sitters, often portraying ladies of the French court in classical mythological attire. This portrait demonstrates his ability to capture aristocratic refinement in male subjects as well.</p>
<p>In 1715, Nattier had traveled to Amsterdam to paint Peter the Great and Empress Catherine, declining an invitation to relocate permanently to Russia. The portrait of Kurakin entered the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in 1923 via the State Museum Fund from the collection of S.V. Panina in Petrograd.</p>`,
    faqs: [
      { question: "Where is Nattier's Portrait of Alexander Kurakin?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, having entered the collection in 1923." },
      { question: "Who was Alexander Kurakin?", answer: "<strong>Prince Alexander Kurakin (1697-1749)</strong> was a Russian diplomat and nobleman who spent time in France during the reign of Louis XV." },
      { question: "What art style does this portrait represent?", answer: "The painting exemplifies French <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> portraiture, characterized by elegant refinement and flattering depiction of aristocratic subjects." },
      { question: "Did Nattier paint Russian royalty?", answer: "Yes, in 1715 <a href=\"/apps/masterpieces/artist/jean-marc-nattier\"><strong>Jean-Marc Nattier</strong></a> traveled to Amsterdam to paint <strong>Peter the Great and Empress Catherine</strong>, though he declined to move to Russia." }
    ]
  }
];

async function main() {
  console.log('Starting batch 4 update: 20 portrait artworks...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error updating ${artwork.slug}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Batch 4 complete: ${successCount} updated, ${errorCount} errors`);
  console.log(`========================================`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
