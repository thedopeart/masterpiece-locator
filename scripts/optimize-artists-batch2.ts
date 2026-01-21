import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 2: Artists 11-20
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "jmw-turner": {
    bioFull: `<p><strong>J.M.W. Turner</strong> (1775–1851) transformed light itself into the subject of painting. Born in London to a barber, he entered the Royal Academy Schools at fourteen and exhibited his first oil, <em>Fishermen at Sea</em>, at twenty-one. By twenty-seven he was a Royal Academician, the youngest person ever elected to full membership.</p>

<p>Turner became the defining painter of British <a href="/movement/romanticism"><strong>Romanticism</strong></a>, pursuing light, color, and atmosphere with revolutionary intensity. His early work showed meticulous topographical skill, but he gradually dissolved forms into swirling color and energy. He painted storms at sea, burning parliaments, trains emerging from rain. <em>The Fighting Temeraire</em> (1839), showing a veteran warship towed to the breakers, was voted Britain's greatest painting in a 2005 BBC poll.</p>

<p>Intensely private and eccentric, Turner never married but fathered two daughters. He lived in squalor in his final years, dying in Chelsea in 1851. He left 550 oil paintings, 2,000 watercolors, and 30,000 works on paper to the nation, along with £140,000 intended for impoverished artists. His relatives contested the will and got most of the money. The art went to what became the Turner Bequest. Today, most of his work fills the Clore Gallery at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, with important pieces at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>. The prestigious Turner Prize takes his name.</p>`,
    faqs: [
      { question: "Where can I see J.M.W. Turner's paintings?", answer: `Most of Turner's work is at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> in London's Clore Gallery, built specifically to house his bequest. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> also holds key works.` },
      { question: "What art movement was J.M.W. Turner part of?", answer: `Turner was the greatest British <a href="/movement/romanticism"><strong>Romantic</strong></a> painter. His revolutionary treatment of light and atmosphere anticipated Impressionism by decades.` },
      { question: "What is J.M.W. Turner's most famous painting?", answer: `<em>The Fighting Temeraire</em> (1839) was voted <strong>Britain's greatest painting</strong> in a 2005 BBC public poll. It shows a veteran warship being towed to be broken up.` },
      { question: "How many works did J.M.W. Turner create?", answer: `Turner left behind over <strong>550 oil paintings, 2,000 watercolors, and 30,000 works on paper</strong>. Most were bequeathed to the British nation.` },
      { question: "What is the Turner Prize?", answer: `The <strong>Turner Prize</strong> is Britain's most prestigious contemporary art award, created by Tate Britain in 1984 and named in Turner's honor.` }
    ]
  },

  "james-mcneill-whistler": {
    bioFull: `<p><strong>James Abbott McNeill Whistler</strong> (1834–1903) insisted that painting was about harmony, not storytelling. Born in Massachusetts, he spent childhood in Russia when his engineer father designed railroads for Tsar Nicholas I. The boy studied at the Imperial Academy of Fine Arts at eleven. After brief stints at West Point and as a Navy cartographer, he moved to Paris in 1855 and never lived in America again.</p>

<p>Whistler championed "art for art's sake," giving his paintings musical titles: Arrangements, Harmonies, Nocturnes. His <em>Nocturne in Black and Gold: The Falling Rocket</em> (1875) provoked John Ruskin to accuse him of "flinging a pot of paint in the public's face." Whistler sued for libel and won, receiving damages of one farthing. The legal costs bankrupted him. His most famous work, <em>Arrangement in Grey and Black No. 1</em> (1871), is universally known simply as <em>Whistler's Mother</em>.</p>

<p>Based primarily in London, Whistler painted the Thames in atmospheric nocturnes that anticipated abstraction. His butterfly signature, combining delicacy with a stinger, reflected his personality: refined art, combative public persona. He influenced both <a href="/movement/impressionism"><strong>Impressionism</strong></a> and early modernism. Atkinson Grimshaw's moonlit scenes impressed him so much that Whistler said he'd thought himself the inventor of nocturnes until he saw "Grimmy's" work. Whistler died in London in 1903, buried in Chiswick. His paintings hang at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, and the Freer Gallery.</p>`,
    faqs: [
      { question: "What is Whistler's most famous painting?", answer: `<em>Arrangement in Grey and Black No. 1</em> (1871), universally known as <strong><em>Whistler's Mother</em></strong>. It hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.` },
      { question: "Where can I see James McNeill Whistler's paintings?", answer: `Major works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, the Freer Gallery in Washington, and the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.` },
      { question: "What art movement was Whistler associated with?", answer: `Whistler influenced <a href="/movement/impressionism"><strong>Impressionism</strong></a> and the Aesthetic Movement. He championed "art for art's sake," believing paintings should be about harmony, not narrative.` },
      { question: "Why did Whistler give his paintings musical titles?", answer: `He used titles like "Nocturne," "Harmony," and "Arrangement" to emphasize that <strong>painting was about tonal relationships</strong>, like music, rather than telling stories.` },
      { question: "What was the Ruskin trial?", answer: `Critic John Ruskin accused Whistler of "flinging a pot of paint in the public's face." Whistler <strong>sued for libel and won</strong>, but was awarded only one farthing in damages. The costs bankrupted him.` }
    ]
  },

  "james-ensor": {
    bioFull: `<p><strong>James Ensor</strong> (1860–1949) filled his canvases with masks, skeletons, and grotesque crowds. Born in Ostend, Belgium, the son of an English father and Belgian mother who ran a souvenir shop selling carnival masks and curiosities, he was fascinated by these masks from childhood. They would haunt his paintings for sixty years.</p>

<p>After studying at the Brussels Royal Academy, Ensor returned to Ostend and rarely left. His early realistic works gave way to bizarre subject matter by the mid-1880s. Paintings like <em>Skeletons Fighting over a Hanged Man</em> (1891) and <em>The Scandalized Masks</em> (1883) use carnival imagery to expose human ugliness. His masterpiece, the enormous <em>Christ's Entry into Brussels in 1889</em> (1888), depicts Jesus amid a grotesque parade of masked revelers, a work considered a forerunner of 20th-century <a href="/movement/expressionism"><strong>Expressionism</strong></a>.</p>

<p>For years, critics rejected his work as offensive and obscene. The avant-garde Les XX group expelled him. But recognition eventually came. In 1929, King Albert I made him a Baron. In 1933, France decorated him with the Legion of Honor. By his old age, Ensor was a beloved figure in Ostend, taking daily walks through the town. He influenced German Expressionists like Emil Nolde and George Grosz, and later the <a href="/movement/surrealism"><strong>Surrealists</strong></a>. He died in Ostend at eighty-nine. His work fills the Royal Museums of Fine Arts in Brussels and the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>.</p>`,
    faqs: [
      { question: "What was James Ensor known for painting?", answer: `Ensor was famous for <strong>grotesque masks, skeletons, and carnival imagery</strong>. He used these elements to satirize society and expose human ugliness beneath social facades.` },
      { question: "Where can I see James Ensor's paintings?", answer: `Major collections are at the <strong>Royal Museums of Fine Arts of Belgium</strong> in Brussels, the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York, and the Mu.ZEE in Ostend.` },
      { question: "What art movements did James Ensor influence?", answer: `Ensor is considered a forerunner of <a href="/movement/expressionism"><strong>Expressionism</strong></a> and influenced the <a href="/movement/surrealism"><strong>Surrealists</strong></a>. German Expressionists like Emil Nolde admired his work.` },
      { question: "What is James Ensor's most famous painting?", answer: `<em>Christ's Entry into Brussels in 1889</em> (1888), a massive canvas depicting Jesus amid a grotesque carnival parade. It's considered a <strong>landmark of modern art</strong>.` },
      { question: "Why did James Ensor paint so many masks?", answer: `His parents ran a <strong>souvenir shop selling carnival masks</strong> in Ostend. He saw the mask as a symbol that covers the face but reveals inner human ugliness.` }
    ]
  },

  "james-whistler": {
    bioFull: `<p><strong>James McNeill Whistler</strong> (1834–1903) revolutionized how artists thought about painting. Born in Lowell, Massachusetts, he spent formative years in St. Petersburg, Russia, where his father engineered railroads for the Tsar. After failing at West Point (dismissed for deficiency in chemistry), he moved to Paris and then London, never returning to America.</p>

<p>Whistler rejected narrative painting entirely. He titled works as "Arrangements," "Harmonies," and "Nocturnes" to emphasize visual music over story. His Thames nocturnes dissolved London into atmospheric color, anticipating abstraction. <em>Whistler's Mother</em>, properly titled <em>Arrangement in Grey and Black No. 1</em> (1871), became an American cultural icon despite being painted in England by an artist who abandoned his homeland.</p>

<p>His combative wit was legendary. When Ruskin attacked his <em>Nocturne in Black and Gold</em>, Whistler sued and won a farthing. Asked how long it took to paint, he replied: "All my life." His butterfly signature combined artistic delicacy with a stinging tail. He influenced <a href="/movement/impressionism"><strong>Impressionism</strong></a> and later movements emphasizing pure visual experience. He died in London in 1903. His work hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, where <em>Whistler's Mother</em> resides, and at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> and the Freer Gallery in Washington.</p>`,
    faqs: [
      { question: "What is James Whistler's most famous painting?", answer: `<em>Arrangement in Grey and Black No. 1</em> (1871), known as <strong><em>Whistler's Mother</em></strong>, hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.` },
      { question: "Where can I see James Whistler's paintings?", answer: `Key works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, and the Freer Gallery in Washington, D.C.` },
      { question: "What art movement was James Whistler part of?", answer: `Whistler influenced <a href="/movement/impressionism"><strong>Impressionism</strong></a> and the Aesthetic Movement. He championed "art for art's sake" and pure visual harmony.` },
      { question: "Why did Whistler use musical titles?", answer: `He gave paintings titles like "Nocturne" and "Arrangement" to emphasize <strong>visual harmony over narrative content</strong>, treating painting as a form of visual music.` },
      { question: "What was Whistler's butterfly signature?", answer: `Whistler signed works with a <strong>stylized butterfly with a stinging tail</strong>, representing both his artistic delicacy and his combative public personality.` }
    ]
  },

  "jan-davidsz-de-heem": {
    bioFull: `<p><strong>Jan Davidsz. de Heem</strong> (1606–1684) mastered the art of opulent abundance. Born in Utrecht to a Catholic family, he trained with his father and later studied with Balthasar van der Ast. In 1635, he moved to Antwerp and joined the Guild of Saint Luke, becoming a citizen in 1637. He spent most of his productive life between Antwerp and Utrecht, moving between the two depending on circumstances.</p>

<p>De Heem's still lifes bridge Dutch and Flemish traditions. His early works in Leiden show the restrained style of Haarlem painters like Pieter Claesz. After moving to Antwerp, his paintings became splendid Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> celebrations: sumptuous arrangements of exotic fruits, silver vessels, half-peeled lemons, and flowers in crystal vases. Gold and silver gleam with a realism that made contemporaries marvel.</p>

<p>Yet these feasts carry moral weight. A snake coiled beneath flowers, a skull among blossoms, a crucifix in a wreath: his paintings whisper about the vanity of earthly possessions and the transience of beauty. He was the most celebrated still life painter of his era. He married twice and trained several apprentices, including his sons Cornelis and Jan, who continued his style. De Heem died in Antwerp in 1684. His work hangs at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What was Jan Davidsz. de Heem known for painting?", answer: `De Heem was renowned for <strong>opulent still lifes</strong>: lavish arrangements of fruits, flowers, silver vessels, and luxury objects, often with hidden moral symbolism.` },
      { question: "Where can I see Jan Davidsz. de Heem's paintings?", answer: `His work is displayed at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.` },
      { question: "What art movement was Jan Davidsz. de Heem part of?", answer: `De Heem worked in the <a href="/movement/baroque"><strong>Baroque</strong></a> style, bridging the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> tradition of Utrecht with the opulence of Flemish painting in Antwerp.` },
      { question: "What is vanitas symbolism in de Heem's paintings?", answer: `De Heem included <strong>skulls, hourglasses, snakes, and wilting flowers</strong> to remind viewers of mortality and the vanity of earthly possessions amid apparent abundance.` },
      { question: "Why was de Heem admired in his time?", answer: `He was celebrated for his <strong>incredibly realistic depiction of gold and silver</strong>. His ability to render reflective metal surfaces was unmatched among his contemporaries.` }
    ]
  },

  "jan-toorop": {
    bioFull: `<p><strong>Jan Toorop</strong> (1858–1928) brought the exotic influences of his Javanese birthplace to European <a href="/movement/symbolism"><strong>Symbolism</strong></a>. Born Johannes Theodorus Toorop in Purworejo, Java, in the Dutch East Indies, he lived on the island of Bangka until age nine before being sent to the Netherlands for schooling. He studied at Amsterdam's Rijksakademie and the Brussels École des Beaux-Arts.</p>

<p>In Brussels, Toorop joined Les XX, the anti-academic group that included only four foreign members. He participated in nearly all their exhibitions between 1884 and 1893. His style evolved through multiple movements: Impressionism, Pointillism, and Symbolism. By the early 1890s, he developed his distinctive approach: sinuous Art Nouveau lines influenced by Javanese shadow puppets, willowy figures, and personal mystical symbols.</p>

<p>His masterpiece, <em>The Three Brides</em> (1893), epitomizes this fusion of Eastern and Western influences. Toorop lived for twenty years in Domburg, where he worked alongside Piet Mondrian, though each pursued individual styles. In 1905, he converted to Catholicism and began producing religious works. A committed social activist, he designed the poster for the first Dutch feminist rally in 1898. Around 1900, Toorop ranked with Van Gogh and Mondrian as one of the Netherlands' most important painters. His daughter Charley Toorop and grandson Edgar Fernhout also became artists. He died in The Hague in 1928. His work is celebrated at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> and Kröller-Müller Museum.</p>`,
    faqs: [
      { question: "What art movements was Jan Toorop associated with?", answer: `Toorop worked in <a href="/movement/symbolism"><strong>Symbolism</strong></a>, Art Nouveau, Pointillism, and Impressionism. He was the most avant-garde Dutch artist around 1900.` },
      { question: "Where can I see Jan Toorop's paintings?", answer: `Major works are at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam and the <strong>Kröller-Müller Museum</strong> in Otterlo, which holds <em>The Three Brides</em>.` },
      { question: "What makes Jan Toorop's style distinctive?", answer: `His work combines <strong>Javanese influences</strong> (shadow puppets, wayang patterns) with European Symbolism, featuring sinuous Art Nouveau lines and mystical imagery.` },
      { question: "Where was Jan Toorop born?", answer: `Toorop was born in <strong>Purworejo, Java</strong> (present-day Indonesia), then the Dutch East Indies. He lived there until age nine.` },
      { question: "What is Jan Toorop's most famous painting?", answer: `<em>The Three Brides</em> (1893), held at the <strong>Kröller-Müller Museum</strong>, epitomizes his fusion of Eastern and Western influences with its flowing lines and symbolic figures.` }
    ]
  },

  "kazimir-malevich": {
    bioFull: `<p><strong>Kazimir Malevich</strong> (1879–1935) painted the end of representation. Born in Kiev to ethnic Polish parents, he worked through Impressionism, Symbolism, Fauvism, and Cubism before arriving at something unprecedented. In December 1915, at the "Last Futurist Exhibition 0.10" in Petrograd, he unveiled <em>Black Square</em>: a black square on a white ground, hung high in the corner where Russian Orthodox icons traditionally sat.</p>

<p>Malevich called his new movement <a href="/movement/suprematism"><strong>Suprematism</strong></a>, seeking "the supremacy of pure feeling" through geometric abstraction free from any reference to the visible world. <em>White on White</em> (1918) took this to its logical conclusion: a white square tilted on a white background. These weren't just paintings; they were philosophical statements about the nature of art itself.</p>

<p>After the Revolution, Malevich taught in Vitebsk alongside Marc Chagall, founded the UNOVIS collective, and gained international recognition with shows in Warsaw and Berlin in 1927. But Stalin's regime rejected modernism. By the 1930s, Malevich lost his teaching position, saw his work confiscated, and was banned from making art. He returned to figurative peasant scenes in his final years. He died of cancer in Leningrad in 1935. At his funeral, mourners carried flags with black squares, and a black square marked his coffin and grave. His influence extends to Minimalism and beyond. Works are held at the <a href="/museum/hermitage"><strong>State Hermitage</strong></a>, <a href="/museum/moma"><strong>MoMA</strong></a>, and <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>.</p>`,
    faqs: [
      { question: "What art movement did Kazimir Malevich found?", answer: `Malevich founded <a href="/movement/suprematism"><strong>Suprematism</strong></a>, a form of geometric abstraction seeking "the supremacy of pure feeling" through basic shapes freed from representation.` },
      { question: "Where can I see Kazimir Malevich's paintings?", answer: `Major works are at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, <a href="/museum/moma"><strong>MoMA</strong></a> in New York, and <a href="/museum/tate-modern"><strong>Tate Modern</strong></a> in London.` },
      { question: "What is Kazimir Malevich's most famous painting?", answer: `<em>Black Square</em> (1915), a black square on white ground. It was <strong>hung in the icon corner</strong> at its first exhibition, declaring a new kind of spiritual art.` },
      { question: "What happened to Malevich under Stalin?", answer: `Stalin's regime <strong>banned his art as "degenerate,"</strong> confiscated his works and manuscripts, and stripped him of his teaching position. He was forbidden to make art.` },
      { question: "How was Malevich's funeral unique?", answer: `Mourners carried <strong>flags with black squares</strong>, and a black square was painted on his coffin lid. His grave was originally marked with a black square.` }
    ]
  },

  "orazio-gentileschi": {
    bioFull: `<p><strong>Orazio Gentileschi</strong> (1563–1639) carried Caravaggio's revolution across Europe. Born in Pisa to a Florentine goldsmith, he moved to Rome as a teenager and took the name Gentileschi from an uncle. He worked for decades in a Mannerist style before encountering Caravaggio's dramatic lighting and naturalism around 1600. The two became friends and were even sued together for libel in 1603.</p>

<p>Unlike Caravaggio's raw power, Gentileschi's interpretation of the <a href="/movement/baroque"><strong>Baroque</strong></a> style was lyrical and refined. His figures are graceful, his drapery sharp-edged and sculptural, qualities recalling his Tuscan training. After Caravaggio fled Rome in 1606, Gentileschi became one of the most important painters carrying his influence forward. His <em>Annunciation</em> (1623) in Turin is often considered his masterpiece.</p>

<p>His career took him across Europe: Genoa, Paris, and finally England, where he became court painter to Charles I in 1626. He decorated the ceiling of the Queen's House at Greenwich, works now in Marlborough House. His daughter Artemisia Gentileschi, trained in his studio, became one of the greatest Baroque painters and a formidable personality who built a European reputation. Orazio died in London in 1639 and was buried in the Queen's Chapel at Somerset House. His paintings hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Orazio Gentileschi part of?", answer: `Gentileschi was a leading <strong>Caravaggisti</strong>, one of the followers of Caravaggio who spread the <a href="/movement/baroque"><strong>Baroque</strong></a> master's dramatic lighting techniques across Europe.` },
      { question: "Where can I see Orazio Gentileschi's paintings?", answer: `His work is at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.` },
      { question: "Who was Orazio Gentileschi's famous daughter?", answer: `<strong>Artemisia Gentileschi</strong> (1593–1656), trained in his studio, became one of the greatest Baroque painters and achieved a European reputation rare for women of her time.` },
      { question: "Did Orazio Gentileschi know Caravaggio personally?", answer: `Yes, they were <strong>friends in Rome</strong>. In 1603, they were both sued for libel by painter Giovanni Baglione alongside two other artists.` },
      { question: "Where did Orazio Gentileschi work as court painter?", answer: `He became <strong>court painter to Charles I of England</strong> in 1626, decorating the ceiling of the Queen's House at Greenwich. He remained in England until his death.` }
    ]
  },

  "pablo-picasso": {
    bioFull: `<p><strong>Pablo Picasso</strong> (1881–1973) dominated 20th-century art like no other figure. Born in Málaga, Spain, he showed extraordinary talent from childhood, entering the Royal Academy of San Fernando at sixteen. Finding academic teaching tedious, he spent his time in cafés, streets, and the Prado, absorbing Velázquez and Goya.</p>

<p>His career moved through distinct phases: the melancholy Blue Period (1901–1904), the warmer Rose Period (1904–1906), the revolutionary <a href="/movement/cubism"><strong>Cubism</strong></a> he co-invented with Georges Braque (1907–1914), and continuing experimentation until his death. <em>Les Demoiselles d'Avignon</em> (1907) shattered traditional perspective. <em>Guernica</em> (1937) turned the bombing of a Basque town into the century's most powerful anti-war statement.</p>

<p>Picasso worked in painting, sculpture, printmaking, ceramics, and theater design, producing over 20,000 works. He lived mainly in France from 1904, settling in the South of France after World War II. His personal life was as turbulent as his art, involving multiple wives, mistresses, and children. He died at Mougins in 1973 at ninety-one, still working. His legacy fills the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York (called "the house that Pablo built"), the <strong>Musée Picasso</strong> in Paris, the <strong>Museo Picasso Málaga</strong>, and the <a href="/museum/reina-sofia"><strong>Museo Reina Sofía</strong></a>, where <em>Guernica</em> hangs.</p>`,
    faqs: [
      { question: "What art movements did Pablo Picasso help create?", answer: `Picasso co-founded <a href="/movement/cubism"><strong>Cubism</strong></a> with Georges Braque. He also worked in <a href="/movement/surrealism"><strong>Surrealism</strong></a> and <a href="/movement/expressionism"><strong>Expressionism</strong></a>, constantly reinventing his style.` },
      { question: "Where can I see Pablo Picasso's paintings?", answer: `Major collections are at <a href="/museum/moma"><strong>MoMA</strong></a> in New York, the <strong>Musée Picasso</strong> in Paris, and the <a href="/museum/reina-sofia"><strong>Museo Reina Sofía</strong></a> in Madrid, which holds <em>Guernica</em>.` },
      { question: "What is Pablo Picasso's most famous painting?", answer: `<em>Guernica</em> (1937), depicting the bombing of a Basque town, is the <strong>20th century's most powerful anti-war painting</strong>. It hangs at the Museo Reina Sofía in Madrid.` },
      { question: "How many works did Pablo Picasso create?", answer: `Picasso produced over <strong>20,000 works</strong> across painting, sculpture, printmaking, ceramics, and theater design over his seven-decade career.` },
      { question: "What were Picasso's artistic periods?", answer: `His major periods include the <strong>Blue Period</strong> (1901–04), <strong>Rose Period</strong> (1904–06), <strong>Cubism</strong> (1907–14), and later Surrealist and neoclassical phases.` }
    ]
  },

  "rudolf-ernst": {
    bioFull: `<p><strong>Rudolf Ernst</strong> (1854–1932) transported viewers to an idealized Islamic world. Born in Vienna to the architect Leopold Ernst, he began studying at the Academy of Fine Arts Vienna at fifteen. He spent time in Rome copying old masters before continuing lessons with August Eisenmenger and Anselm Feuerbach in Vienna.</p>

<p>In 1876, Ernst settled in Paris, exhibiting under the French name "Rodolphe Ernst." He began as a genre painter but from 1885 devoted himself entirely to <a href="/movement/orientalism"><strong>Orientalist</strong></a> subjects. He traveled to Spain, Morocco, Egypt, and Istanbul, sketching monuments and daily life. Back in his studio, he created richly detailed scenes of mosques, harems, markets, and palace interiors bathed in warm yellows and oranges.</p>

<p>His work often focuses on one or two figures in fantastical Islamic settings: harem guards, merchants, elegantly costumed women on luxurious terraces. He was friends with fellow Orientalist Ludwig Deutsch, and their styles share similarities. In 1905, Ernst moved to Fontenay-aux-Roses, where he set up a shop producing faience tiles with Orientalist themes. He decorated his home in Ottoman style and lived reclusive final years. His exact death date went unrecorded, but he died around 1932. His paintings appear at the Dahesh Museum of Art in New York and the Musée des Beaux-Arts de Nantes.</p>`,
    faqs: [
      { question: "What subjects did Rudolf Ernst paint?", answer: `Ernst specialized in <a href="/movement/orientalism"><strong>Orientalist</strong></a> subjects: mosque interiors, harem scenes, markets, and palace settings from the Islamic world, painted with warm colors and fine detail.` },
      { question: "Where can I see Rudolf Ernst's paintings?", answer: `His work is at the <strong>Dahesh Museum of Art</strong> in New York and the <strong>Musée des Beaux-Arts de Nantes</strong>. Many paintings remain in private collections.` },
      { question: "What was Rudolf Ernst's nationality?", answer: `Ernst was <strong>Austrian</strong>, born in Vienna, but he spent most of his career in Paris and exhibited under the French name "Rodolphe Ernst."` },
      { question: "Did Rudolf Ernst travel to the Middle East?", answer: `Yes, he traveled to <strong>Spain, Morocco, Egypt, and Istanbul</strong> to sketch monuments, daily life, and architectural details that informed his studio paintings.` },
      { question: "What did Rudolf Ernst do later in life?", answer: `In 1905, he moved to Fontenay-aux-Roses and <strong>produced faience tiles with Orientalist themes</strong>. He decorated his home in Ottoman style and lived reclusively.` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 2 (10 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          bioFull: data.bioFull,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artists in batch 2`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
