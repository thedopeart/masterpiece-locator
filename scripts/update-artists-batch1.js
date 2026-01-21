/**
 * Update Artists Batch 1 (40 artists)
 * Adds bioFull and FAQs following OPTIMIZE-ARTISTS.md guidelines
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 1. Rembrandt
  {
    slug: 'rembrandt',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> master <strong>Rembrandt van Rijn</strong> (1606-1669) remains one of history's most influential artists. Working in Amsterdam during the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, he produced roughly 300 paintings, 300 etchings, and hundreds of drawings over four decades. His signature style combined dramatic chiaroscuro lighting with deep psychological insight, bringing unprecedented emotional depth to portraits, biblical scenes, and self-portraits. Nearly 100 self-portraits document his life from confident young painter to weathered old man. Works like The Night Watch and The Jewish Bride showcase his ability to capture both grand spectacle and intimate human connection.</p>

<p>Rembrandt trained under Pieter Lastman, who introduced him to Caravaggio's dramatic lighting techniques. By age 25, he'd established himself in Amsterdam with wealthy patrons including Prince Frederik Hendrik of Orange. His workshop trained major artists like Gerrit Dou and Carel Fabritius. Financial troubles led to bankruptcy in 1656, yet he continued producing masterworks until his death. Today, the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam holds The Night Watch, while major collections exist at the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a>. His influence on subsequent artists, from Delacroix to Van Gogh, cannot be overstated.</p>`,
    faqs: [
      { question: "What art movement was Rembrandt part of?", answer: "Rembrandt was a leading figure of the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> movement and the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, known for his dramatic use of light and shadow in portraits and biblical scenes." },
      { question: "Where can I see Rembrandt's paintings?", answer: "Major collections are at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris." },
      { question: "What are Rembrandt's most famous paintings?", answer: "His most celebrated works include <strong>The Night Watch</strong>, <strong>The Jewish Bride</strong>, and <strong>The Anatomy Lesson of Dr. Tulp</strong>, plus nearly 100 self-portraits spanning his entire career." },
      { question: "How many self-portraits did Rembrandt paint?", answer: "Rembrandt created nearly 100 self-portraits across paintings, etchings, and drawings. These works form a unique visual autobiography documenting his life over 40 years." },
      { question: "Who were Rembrandt's students?", answer: "Rembrandt trained many important artists including <strong>Gerrit Dou</strong>, <strong>Carel Fabritius</strong>, and dozens of others at his Amsterdam workshop, spreading his influential techniques." },
      { question: "Why did Rembrandt go bankrupt?", answer: "Rembrandt declared bankruptcy in 1656 due to excessive spending on art collections and antiquities. His wife's family accused him of squandering her fortune on lavish purchases." }
    ]
  },

  // 2. Claude Monet
  {
    slug: 'claude-monet',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> founder <strong>Claude Monet</strong> (1840-1926) revolutionized painting by capturing fleeting effects of light and atmosphere. His 1872 painting Impression, Sunrise gave the movement its name when a critic used it mockingly. Monet developed plein air painting into a complete artistic philosophy, working outdoors to record the shifting qualities of natural light. His series paintings, depicting haystacks, Rouen Cathedral, and water lilies at different times of day, pushed this approach to new heights. Loose brushwork, vibrant colors, and dissolved forms became his signatures.</p>

<p>Born in Paris but raised in Le Havre, Monet learned to paint outdoors from Eugene Boudin. He studied briefly at the Academie Suisse and under Charles Gleyre, where he met Renoir. Financial struggles marked his early career, but dealer Paul Durand-Ruel's support brought eventual success. From 1883, Monet lived at Giverny, transforming its gardens into a living masterpiece that inspired his final decades of work. Cataracts affected his late paintings with warm tones before surgery in 1923. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> and <a href="/museum/musee-de-lorangerie"><strong>Musee de l'Orangerie</strong></a> in Paris hold major collections, with his eight Water Lilies panels filling two oval rooms at the Orangerie.</p>`,
    faqs: [
      { question: "What art movement did Claude Monet found?", answer: "Monet was the leading founder of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. His 1872 painting Impression, Sunrise gave the movement its name when a critic used the term mockingly." },
      { question: "Where can I see Monet's Water Lilies?", answer: "The largest Water Lilies panels are at the <a href=\"/museum/musee-de-lorangerie\"><strong>Musee de l'Orangerie</strong></a> in Paris, filling two oval rooms. Other versions hang at major museums worldwide." },
      { question: "What is Monet's most famous painting?", answer: "<strong>Impression, Sunrise</strong> (1872) is historically significant for naming the movement, while his <strong>Water Lilies</strong> series remains his most beloved work among collectors." },
      { question: "Where did Monet live and paint?", answer: "Monet lived at <strong>Giverny</strong> from 1883 until his death in 1926. He designed the famous water garden that inspired his late masterpieces, now a museum." },
      { question: "Did Monet have vision problems?", answer: "Monet developed cataracts starting in 1905. By 1922, he could barely distinguish colors and labeled his paint tubes. Surgery in 1923 restored his vision." },
      { question: "How many paintings did Monet create?", answer: "Monet produced over <strong>2,500 paintings</strong> during his 60-year career, including more than 250 Water Lilies paintings in his final decades at Giverny." }
    ]
  },

  // 3. Edgar Degas
  {
    slug: 'edgar-degas',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> master <strong>Edgar Degas</strong> (1834-1917) captured movement and modern Parisian life with unmatched skill. Though he exhibited with the Impressionists, he preferred calling himself a Realist. Ballet dancers became his signature subject, appearing in over 1,500 works across paintings, pastels, and sculptures. His unconventional compositions, asymmetrical cropping, and unusual viewing angles drew influence from Japanese prints and photography. Degas excelled at rendering figures in motion, whether dancers rehearsing, jockeys racing, or women bathing.</p>

<p>Born to a wealthy Parisian banking family, Degas trained at the Ecole des Beaux-Arts under Louis Lamothe, a former pupil of Ingres. Meeting Ingres in 1855 proved formative; the master advised him to "draw lines, and still more lines." Degas traveled to Italy, studying Old Masters before establishing himself in Paris. Deteriorating eyesight plagued him from his forties, eventually leading to near blindness. He shifted increasingly to sculpture and pastels as his vision failed. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> and <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> hold major collections, including bronze casts of his wax sculptures discovered after his death.</p>`,
    faqs: [
      { question: "What art movement was Degas part of?", answer: "Degas was a founding member of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, though he preferred the term Realist. He exhibited in seven of eight Impressionist exhibitions from 1874-1886." },
      { question: "Why did Degas paint so many ballet dancers?", answer: "Degas was fascinated by <strong>movement and modern life</strong>. The Paris Opera gave him access to rehearsals, and dancers appeared in over 1,500 of his works." },
      { question: "Where can I see Degas's sculptures?", answer: "The <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington holds the original wax sculptures. Bronze casts are at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> and other museums." },
      { question: "Did Degas go blind?", answer: "Degas suffered progressive <strong>eye disease</strong> from age 19. By his forties he'd lost central vision; he eventually became nearly blind, shifting from painting to sculpture." },
      { question: "What are Degas's most famous works?", answer: "<strong>The Dance Class</strong>, <strong>The Little Fourteen-Year-Old Dancer</strong> sculpture, and <strong>The Absinthe Drinker</strong> rank among his most celebrated works." },
      { question: "Where can I see Degas's paintings?", answer: "Major collections are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> in New York, and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." }
    ]
  },

  // 4. Adriaen van Ostade
  {
    slug: 'adriaen-van-ostade',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Adriaen van Ostade</strong> (1610-1685) specialized in lively genre scenes of peasant life. Born in Haarlem, he trained under Frans Hals alongside Adriaen Brouwer, whose influence shaped his early work. Van Ostade depicted tavern interiors with peasants drinking, smoking, playing cards, and making music. His scenes typically feature a single light source illuminating principal figures in dimly lit, smoke-filled rooms. Unlike Brouwer's rougher characters, van Ostade's peasants appear gentler, their gatherings more peaceful than rowdy.</p>

<p>Van Ostade joined Haarlem's Guild of St. Luke in 1634 and was elected dean in 1662. Over 800 works survive, including paintings, watercolors, and approximately 50 etchings. His detailed watercolors from 1672-1684 are particularly prized. He taught his younger brother Isaack and trained Jan Steen, Cornelis Bega, and Cornelis Dusart. His second wife's wealth left him comfortable, and high productivity provided a prosperous lifestyle. Today, his works hang in the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, <a href="/museum/hermitage"><strong>Hermitage Museum</strong></a>, <a href="/museum/louvre"><strong>Louvre</strong></a>, and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London. He remains the finest Dutch painter of peasant scenes after Brouwer.</p>`,
    faqs: [
      { question: "What did Adriaen van Ostade paint?", answer: "Van Ostade specialized in <strong>genre scenes of Dutch peasant life</strong>: tavern interiors with drinking, smoking, card playing, and music making in the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> tradition." },
      { question: "Where can I see van Ostade's paintings?", answer: "Major collections are at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, and the <a href=\"/museum/hermitage\"><strong>Hermitage Museum</strong></a>." },
      { question: "Who trained Adriaen van Ostade?", answer: "Van Ostade trained under the portrait master <strong>Frans Hals</strong> in Haarlem, alongside fellow student <strong>Adriaen Brouwer</strong>, who became his most significant influence." },
      { question: "How many works did van Ostade create?", answer: "Over <strong>800 works</strong> survive: paintings, watercolors, drawings, and approximately 50 etchings. His detailed watercolors from 1672-1684 are especially prized by collectors." },
      { question: "Who were van Ostade's students?", answer: "Van Ostade taught his brother <strong>Isaack van Ostade</strong>, plus important artists <strong>Jan Steen</strong>, Cornelis Bega, and Cornelis Dusart, spreading his genre painting techniques." }
    ]
  },

  // 5. Johannes Vermeer
  {
    slug: 'johannes-vermeer',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> master <strong>Johannes Vermeer</strong> (1632-1675) created some of the most beloved paintings in Western art, despite producing only 34-37 known works. Working in Delft his entire life, he specialized in domestic interior scenes featuring women engaged in quiet activities: reading letters, pouring milk, playing music. His paintings glow with serene light streaming through windows, illuminating carefully arranged spaces. Vermeer's meticulous technique involved building up translucent layers of paint to achieve extraordinary luminosity. He may have used a camera obscura, as pinholes discovered in his canvases suggest.</p>

<p>Vermeer registered as a master painter in Delft's Guild of Saint Luke in 1653 and was elected head of the guild twice. His father was an art dealer, a business Vermeer inherited. He fathered 14 children with wife Catharina Bolnes, converting to Catholicism for their marriage. Financial troubles plagued his final years, and he died at 43, leaving his family in debt. Almost forgotten after death, he was rediscovered in the 19th century. His works are now treasured: the <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a> holds Girl with a Pearl Earring, while the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> owns The Milkmaid and other masterpieces.</p>`,
    faqs: [
      { question: "How many paintings did Vermeer create?", answer: "Only <strong>34-37 paintings</strong> are confirmed as Vermeer's work, making him one of art history's smallest but most celebrated oeuvres." },
      { question: "Where can I see Girl with a Pearl Earring?", answer: "Vermeer's famous <strong>Girl with a Pearl Earring</strong> hangs at the <a href=\"/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands. It's sometimes called the Mona Lisa of the North." },
      { question: "What art movement was Vermeer part of?", answer: "Vermeer worked during the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, painting domestic scenes in Delft. He's considered one of the greatest Dutch masters alongside Rembrandt." },
      { question: "Did Vermeer use a camera obscura?", answer: "Evidence suggests Vermeer may have used a <strong>camera obscura</strong>. Pinholes discovered in at least 13 paintings indicate he traced projected images for perspective accuracy." },
      { question: "Where can I see The Milkmaid?", answer: "Vermeer's <strong>The Milkmaid</strong> is at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, one of the museum's most popular paintings." },
      { question: "Why was Vermeer forgotten after his death?", answer: "Vermeer died in debt with 14 children. His small output and local reputation faded until <strong>Gustav Waagen</strong> and Theophile Thore-Burger rediscovered him in the 1860s." }
    ]
  },

  // 6. Vincent van Gogh
  {
    slug: 'van-gogh',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Vincent van Gogh</strong> (1853-1890) created nearly 2,100 artworks in just over a decade, despite selling only one painting during his lifetime. The Dutch artist developed his bold, expressive style while living in France, where swirling brushstrokes and vivid colors became his signature. His subjects ranged from sunflowers and starry nights to self-portraits and peasant life. Works like The Starry Night and Sunflowers now rank among the most recognized images in Western art. His thick impasto technique and emotional intensity anticipated <a href="/movement/expressionism"><strong>Expressionism</strong></a>.</p>

<p>Van Gogh came to painting late, starting seriously at age 27 after failed careers in art dealing and ministry. His brother Theo, an art dealer, provided crucial financial and emotional support throughout his career. Time spent in Arles, southern France, proved intensely productive but marked by mental health struggles, including the famous incident where he severed part of his ear. He died at 37 from a self-inflicted gunshot. The <a href="/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam holds the world's largest collection of his work, while major pieces hang in the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> and <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Vincent van Gogh part of?", answer: "Van Gogh was a key figure in <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>, emphasizing bold colors and emotional expression over naturalistic representation." },
      { question: "Where can I see Van Gogh's paintings?", answer: "The <a href=\"/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> in Amsterdam holds the world's largest collection. Major works also hang at the <a href=\"/museum/moma\"><strong>MoMA</strong></a> and <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>." },
      { question: "Did Van Gogh sell any paintings while alive?", answer: "Van Gogh sold only <strong>one painting</strong> during his lifetime: The Red Vineyard, for 400 francs. His brother Theo supported him financially throughout his career." },
      { question: "How many paintings did Van Gogh create?", answer: "Van Gogh produced around <strong>900 paintings</strong> and 1,100 drawings in just over a decade, an extraordinary output considering he began painting seriously at age 27." },
      { question: "What are Van Gogh's most famous paintings?", answer: "<strong>The Starry Night</strong>, <strong>Sunflowers</strong>, and his many self-portraits are among his most celebrated works, known for swirling brushwork and vivid <a href=\"https://luxurywallart.com/collections/yellow-paintings\" target=\"_blank\" rel=\"noopener\"><strong>yellow</strong></a> tones." },
      { question: "What techniques is Van Gogh known for?", answer: "Van Gogh developed a distinctive style using thick <strong>impasto brushstrokes</strong>, bold complementary colors, and expressive swirling patterns that conveyed emotion and movement." }
    ]
  },

  // 7. Adriaen Brouwer
  {
    slug: 'adriaen-brouwer',
    bioFull: `<p>Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Adriaen Brouwer</strong> (1605-1638) created vivid depictions of peasants, soldiers, and tavern scenes with raw authenticity. His rough characters drinking, smoking, fighting, and playing cards influenced generations of genre painters. Despite his brief life, Brouwer developed a refined technique using precise brushstrokes in transparent layers to render expressions with psychological acuity. He pioneered the "tronie" tradition of expressive head studies and painted innovative landscape studies that prefigured later Dutch masters.</p>

<p>Born in Flanders, Brouwer worked in Haarlem and Amsterdam from 1625-1631, likely knowing Frans Hals. He returned to Antwerp in 1631, joining the Guild of St. Luke. Both Rubens and Rembrandt avidly collected his work: Rubens owned 17 Brouwer paintings at death, while Rembrandt owned six paintings and many drawings. This enthusiasm from two masters demonstrates his standing among contemporaries. Brouwer died of plague at just 32, yet only about 60 paintings survive. His influence extended to David Teniers the Younger, Adriaen van Ostade, and later genre painters. Works hang in the <a href="/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and other major collections.</p>`,
    faqs: [
      { question: "What did Adriaen Brouwer paint?", answer: "Brouwer specialized in <strong>tavern scenes</strong> with peasants drinking, smoking, fighting, and card playing. His raw depictions of lower-class life influenced <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting." },
      { question: "Who collected Adriaen Brouwer's paintings?", answer: "Both <strong>Rubens</strong> and <strong>Rembrandt</strong> collected Brouwer's work. Rubens owned 17 paintings at death, while Rembrandt owned six paintings and many drawings." },
      { question: "How many Brouwer paintings survive?", answer: "Only about <strong>60 paintings</strong> are attributed to Brouwer. His brief life (died at 32 from plague) limited his output, making surviving works rare and valuable." },
      { question: "Where can I see Brouwer's paintings?", answer: "Major collections are at the <a href=\"/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and museums in Antwerp and Madrid." },
      { question: "Who did Brouwer influence?", answer: "Brouwer influenced <strong>David Teniers the Younger</strong>, <strong>Adriaen van Ostade</strong>, and generations of <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painters with his tavern scenes." }
    ]
  },

  // 8. Gustav Klimt
  {
    slug: 'gustav-klimt',
    bioFull: `<p>Austrian <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Gustav Klimt</strong> (1862-1918) created some of the most sensual, decorative works in modern art. As a founder and first president of the Vienna Secession in 1897, he led the movement away from academic tradition toward innovative expression. His "Golden Phase" produced iconic works featuring shimmering gold leaf, intricate patterns, and flat decorative planes. Klimt combined Byzantine mosaic influences with contemporary themes, depicting languid women in richly ornamented settings. His painting The Kiss became an emblem of early modernism.</p>

<p>Klimt trained at Vienna's School of Arts and Crafts, initially working as a decorative painter with his brother and colleague. A 1903 trip to Ravenna exposed him to Byzantine mosaics, inspiring his gold leaf technique. His University of Vienna ceiling panels proved so controversial they were never installed. The wealthy Bloch-Bauer family commissioned his famous portraits, including the gold-toned Portrait of Adele Bloch-Bauer I, which sold for $135 million in 2006. Klimt's companion Emilie Floge, a fashion designer, modeled for The Kiss. He died during the 1918 flu pandemic. The <a href="/museum/belvedere"><strong>Belvedere Museum</strong></a> in Vienna holds The Kiss, while the <a href="/museum/neue-galerie"><strong>Neue Galerie</strong></a> in New York owns the Adele portrait.</p>`,
    faqs: [
      { question: "What art movement was Gustav Klimt part of?", answer: "Klimt founded the <strong>Vienna Secession</strong> in 1897 and is associated with <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>. His decorative, sensual style influenced Art Nouveau across Europe." },
      { question: "Where can I see The Kiss by Klimt?", answer: "Klimt's famous <strong>The Kiss</strong> hangs at the <a href=\"/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna, Austria. It's the museum's most popular attraction." },
      { question: "What is Klimt's Golden Phase?", answer: "Klimt's Golden Phase (1899-1910) featured <strong>gold leaf</strong>, inspired by Byzantine mosaics he saw in Ravenna. The Kiss and Portrait of Adele Bloch-Bauer I exemplify this period." },
      { question: "How much did Klimt's portrait sell for?", answer: "<strong>Portrait of Adele Bloch-Bauer I</strong> sold for $135 million in 2006, a record at the time. It now hangs at the <a href=\"/museum/neue-galerie\"><strong>Neue Galerie</strong></a> in New York." },
      { question: "Who was Klimt's muse?", answer: "<strong>Emilie Floge</strong>, a Viennese fashion designer, was Klimt's lifelong companion. She modeled for The Kiss and collaborated on textile designs with him." },
      { question: "Why were Klimt's university paintings controversial?", answer: "Klimt's ceiling panels for the <strong>University of Vienna</strong> were deemed too erotic and pessimistic. They were never installed and were later destroyed during World War II." }
    ]
  },

  // 9. Edvard Munch
  {
    slug: 'edvard-munch',
    bioFull: `<p>Norwegian painter <strong>Edvard Munch</strong> (1863-1944) created some of the most psychologically intense images in modern art. His 1893 painting The Scream, depicting a figure with an agonized expression against a tumultuous sky, became an icon of existential anxiety. Munch pioneered <a href="/movement/expressionism"><strong>Expressionism</strong></a>, using bold colors and semi-abstract forms to convey emotional and psychological states rather than external reality. His Frieze of Life series explored themes of love, anxiety, death, and melancholy that haunted his family and personal life.</p>

<p>Munch's mother and sister died of tuberculosis during his childhood; another sister suffered mental illness. These traumas shaped his art: "Illness and madness and death were the black angels that stood at my cradle." He studied in Paris, absorbing influences from Gauguin and Van Gogh. A severe mental breakdown in 1908 led to treatment in Copenhagen, after which his work became calmer. Munch bequeathed his entire estate to Oslo upon his death, forming the collection of the <a href="/museum/munch-museum"><strong>MUNCH Museum</strong></a>, which holds approximately 1,100 paintings, 4,500 drawings, and 18,000 prints. The Scream exists in multiple versions; two painted versions were famously stolen separately and recovered.</p>`,
    faqs: [
      { question: "What art movement did Munch pioneer?", answer: "Munch was a pioneer of <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, influencing German Expressionists with his psychological intensity and bold use of color to convey emotional states." },
      { question: "Where can I see The Scream?", answer: "The painted versions of <strong>The Scream</strong> are at the <a href=\"/museum/munch-museum\"><strong>MUNCH Museum</strong></a> in Oslo. Munch created four versions: two paintings and two pastels." },
      { question: "Was The Scream ever stolen?", answer: "Both painted versions of <strong>The Scream</strong> were stolen separately (1994 and 2004) and later recovered. The thefts made the painting even more famous worldwide." },
      { question: "What inspired Munch's dark themes?", answer: "Munch's mother and sister died of <strong>tuberculosis</strong> during his childhood. Family illness and mental health struggles shaped his exploration of anxiety, death, and melancholy." },
      { question: "Where are Munch's works held?", answer: "The <a href=\"/museum/munch-museum\"><strong>MUNCH Museum</strong></a> in Oslo holds approximately 1,100 paintings, 4,500 drawings, and 18,000 prints, bequeathed by the artist upon his death." },
      { question: "Did Munch struggle with mental illness?", answer: "Munch suffered a severe <strong>mental breakdown</strong> in 1908 and underwent treatment including electroshock therapy in Copenhagen. He feared inheriting his family's mental conditions." }
    ]
  },

  // 10. Diego Velazquez
  {
    slug: 'diego-velazquez',
    bioFull: `<p>Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> master <strong>Diego Velazquez</strong> (1599-1660) served as court painter to King Philip IV for nearly 40 years, creating some of the finest portraits in Western art. His masterpiece Las Meninas, with its complex spatial arrangement and self-referential composition, has fascinated artists and scholars for centuries. Velazquez developed a naturalistic style influenced by Caravaggio's dramatic lighting, later evolving toward freer brushwork that anticipated Impressionism. Manet called him "the painter of painters."</p>

<p>Velazquez trained under Francisco Pacheco in Seville, marrying his daughter in 1618. A portrait of Philip IV in 1623 so pleased the king that Velazquez became court painter; Philip would allow no one else to paint him. Two trips to Italy (1629-31 and 1649-51) transformed his style after studying Titian, Tintoretto, and other masters. In Rome, he painted his stunning Portrait of Pope Innocent X. He also painted Juan de Pareja, his enslaved assistant whom he later freed. Velazquez was knighted in 1658. The <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid holds Las Meninas and the majority of his works, while the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> owns the Juan de Pareja portrait.</p>`,
    faqs: [
      { question: "What art movement was Velazquez part of?", answer: "Velazquez was a leading painter of Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> art. His naturalistic style and free brushwork influenced later artists from Manet to Picasso." },
      { question: "Where can I see Las Meninas?", answer: "Velazquez's masterpiece <strong>Las Meninas</strong> hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, which holds the majority of his surviving works." },
      { question: "Who was Velazquez's most important patron?", answer: "<strong>King Philip IV of Spain</strong> employed Velazquez as court painter for nearly 40 years. The king would allow no one else to paint his portrait." },
      { question: "Did Velazquez travel to Italy?", answer: "Velazquez made two transformative trips to Italy (1629-31 and 1649-51), studying masters like <strong>Titian</strong> and painting his famous Portrait of Pope Innocent X." },
      { question: "Who was Juan de Pareja?", answer: "<strong>Juan de Pareja</strong> was Velazquez's enslaved assistant whom he trained as a painter and later freed. The portrait Velazquez painted of him hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "What are Velazquez's most famous paintings?", answer: "<strong>Las Meninas</strong>, <strong>The Surrender of Breda</strong>, and <strong>Portrait of Pope Innocent X</strong> rank among his most celebrated works, all demonstrating his masterful realism." }
    ]
  },

  // 11. Gustave Courbet
  {
    slug: 'gustave-courbet',
    bioFull: `<p>French painter <strong>Gustave Courbet</strong> (1819-1877) founded the <strong>Realism</strong> movement, rejecting academic conventions to paint ordinary life with unflinching honesty. His monumental paintings like A Burial at Ornans and The Stone Breakers shocked audiences by depicting peasants and workers on the grand scale traditionally reserved for history painting. Courbet insisted on painting only what he could see, declaring "Show me an angel and I'll paint one." His commitment to physical reality over idealized beauty revolutionized 19th-century art.</p>

<p>Largely self-taught, Courbet studied Dutch and Spanish masters at the Louvre, particularly Velazquez and Ribera. When the 1855 Exposition Universelle rejected his work, he built his own "Pavilion of Realism" across the street to display 40 paintings. His radical approach directly influenced Manet, Monet, and the Impressionists. A friend of anarchist philosopher Proudhon, Courbet participated in the 1871 Paris Commune and was imprisoned for his role in destroying the Vendome Column. He fled to Switzerland in 1873, dying in exile. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> holds major works including A Burial at Ornans, while his landscapes appear in collections worldwide.</p>`,
    faqs: [
      { question: "What art movement did Courbet found?", answer: "Courbet founded <strong>Realism</strong>, insisting on painting only what he could see. He rejected academic idealization in favor of depicting ordinary people and scenes truthfully." },
      { question: "Where can I see Courbet's paintings?", answer: "The <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris holds major works including A Burial at Ornans. Other collections include the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "What are Courbet's most famous paintings?", answer: "<strong>A Burial at Ornans</strong>, <strong>The Stone Breakers</strong> (destroyed in WWII), and <strong>The Artist's Studio</strong> are his most significant works, all depicting ordinary life." },
      { question: "Why was Courbet controversial?", answer: "Courbet painted peasants and laborers on <strong>monumental canvases</strong> traditionally reserved for heroes and gods. He also participated in the Paris Commune and was imprisoned for political activities." },
      { question: "Who did Courbet influence?", answer: "Courbet's Realism directly influenced <strong>Manet</strong>, <strong>Monet</strong>, and the <a href=\"/movement/impressionism\"><strong>Impressionists</strong></a>. His rejection of idealization paved the way for modern art." }
    ]
  },

  // 12. Chaim Soutine
  {
    slug: 'chaim-soutine',
    bioFull: `<p><a href="/movement/expressionism"><strong>Expressionist</strong></a> painter <strong>Chaim Soutine</strong> (1893-1943) brought visceral emotional intensity to the School of Paris. Born the tenth child of a poor Jewish tailor in Belarus, he emigrated to Paris in 1913 where he befriended Modigliani. Soutine's turbulent landscapes, anguished portraits, and gruesome studies of raw meat display thick impasto, agitated brushwork, and disturbing psychological content. His distorted forms and violent color anticipate Abstract Expressionism; Jackson Pollock and Willem de Kooning later studied his technique.</p>

<p>Soutine trained at the Vilnius Drawing School before attending the Ecole des Beaux-Arts in Paris under Fernand Cormon. Living in extreme poverty at the La Ruche artists' colony, he slept in stairways and on benches. American collector Albert C. Barnes purchased 60 paintings in one meeting, transforming Soutine from destitute to successful. His Carcass of Beef series, inspired by Rembrandt, required him to keep actual carcasses in his studio. During the Nazi occupation, Soutine fled Paris as a Jew, hiding in forests until a perforated ulcer killed him in 1943. His works now hang in the Barnes Foundation, <a href="/museum/tate-modern"><strong>Tate</strong></a>, and major museums across Europe and America.</p>`,
    faqs: [
      { question: "What art movement was Soutine part of?", answer: "Soutine belonged to the <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> School of Paris. His visceral style influenced later <a href=\"/movement/abstract-expressionism\"><strong>Abstract Expressionists</strong></a> like Jackson Pollock and de Kooning." },
      { question: "What subjects did Soutine paint?", answer: "Soutine painted <strong>turbulent landscapes</strong>, anguished portraits, and gruesome studies of animal carcasses, inspired by Rembrandt's Flayed Ox." },
      { question: "Who discovered Chaim Soutine?", answer: "American collector <strong>Albert C. Barnes</strong> purchased 60 Soutine paintings at once, instantly transforming the impoverished artist into a successful figure." },
      { question: "Where can I see Soutine's paintings?", answer: "Major collections are at the <strong>Barnes Foundation</strong>, <a href=\"/museum/tate-modern\"><strong>Tate</strong></a> in London, and the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>." },
      { question: "How did Soutine die?", answer: "Soutine died in 1943 from a <strong>perforated ulcer</strong> while fleeing the Nazis as a Jew. He had been hiding in the French countryside during the occupation." }
    ]
  },

  // 13. Paul Cezanne
  {
    slug: 'paul-cezanne',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Paul Cezanne</strong> (1839-1906) laid the foundations for modern art. Both Matisse and Picasso called him "the father of us all." Working in his native Provence, Cezanne developed a revolutionary approach to form and space, building pictures through carefully placed brushstrokes of color rather than traditional modeling. His analytical treatment of nature, reducing forms to geometric essentials, directly inspired Cubism and subsequent movements. Mont Sainte-Victoire, visible from his studio, became his obsessive subject.</p>

<p>Son of a wealthy banker, Cezanne studied law before pursuing art against his father's wishes. The Ecole des Beaux-Arts rejected him twice. He met Pissarro at the Academie Suisse, who taught him Impressionist techniques at Pontoise, though Cezanne eventually moved beyond Impressionism's spontaneity toward a more structured approach. His difficult personality isolated him; only patient Pissarro could work with him. After inheriting his father's fortune, Cezanne worked in solitude, producing over 200 still lifes. His Card Players series fetched $250 million in 2011. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and <a href="/museum/hermitage"><strong>Hermitage</strong></a> hold significant collections.</p>`,
    faqs: [
      { question: "What art movement was Cezanne part of?", answer: "Cezanne was a key figure in <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. His analytical approach to form directly inspired <a href=\"/movement/cubism\"><strong>Cubism</strong></a>, Fauvism, and modern art." },
      { question: "Why is Cezanne called the father of modern art?", answer: "Both <strong>Matisse and Picasso</strong> called Cezanne \"the father of us all.\" His reduction of nature to geometric forms revolutionized how artists depicted space and volume." },
      { question: "What subjects did Cezanne paint?", answer: "Cezanne painted over 200 <strong>still lifes</strong>, numerous views of <strong>Mont Sainte-Victoire</strong>, bathers, and The Card Players series, which sold for $250 million." },
      { question: "Where can I see Cezanne's paintings?", answer: "Major collections are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>." },
      { question: "Who taught Cezanne?", answer: "<strong>Camille Pissarro</strong> taught Cezanne Impressionist techniques at Pontoise. Pissarro was the only artist patient enough to work with Cezanne's difficult personality." }
    ]
  },

  // 14. Camille Pissarro
  {
    slug: 'camille-pissarro',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> patriarch <strong>Camille Pissarro</strong> (1830-1903) was the only artist to exhibit at all eight Paris Impressionist exhibitions from 1874 to 1886. Art historian John Rewald called him "the dean of the Impressionist painters" for both his age and his generous mentorship. Pissarro specialized in rural landscapes and scenes of French peasant life, painting outdoors to capture natural light. In the 1880s, he explored Pointillism with Seurat before returning to his earlier style.</p>

<p>Born in the Caribbean on St. Thomas, Pissarro arrived in Paris in 1855, drawn by Corot's paintings at the Universal Exposition. He studied at the Ecole des Beaux-Arts and Academie Suisse, meeting Monet, Cezanne, and Renoir. His patient mentorship shaped generations: he taught Cezanne, encouraged Gauguin and Van Gogh, and befriended the young Seurat. Pissarro acted as "father figure" to all four major <a href="/movement/post-impressionism"><strong>Post-Impressionists</strong></a>. His Boulevard Montmartre series captures Paris from his hotel window at different hours. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>, and <a href="/museum/met"><strong>Metropolitan Museum</strong></a> hold important works.</p>`,
    faqs: [
      { question: "What art movement was Pissarro part of?", answer: "Pissarro was a founding member of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and the only artist to exhibit at all eight Impressionist exhibitions (1874-1886)." },
      { question: "Who did Pissarro teach?", answer: "Pissarro mentored <strong>Cezanne</strong>, encouraged <strong>Gauguin</strong> and <strong>Van Gogh</strong>, and befriended Seurat. He's considered a father figure to all four major Post-Impressionists." },
      { question: "Where can I see Pissarro's paintings?", answer: "Major collections are at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>, and the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "What subjects did Pissarro paint?", answer: "Pissarro painted <strong>rural landscapes</strong>, peasant life, and Paris cityscapes. His Boulevard Montmartre series captures the same street at different times of day." },
      { question: "Where was Pissarro born?", answer: "Pissarro was born on <strong>St. Thomas</strong> in the Danish West Indies (now US Virgin Islands) to a family of Portuguese Jewish descent." }
    ]
  },

  // 15. Giotto
  {
    slug: 'giotto',
    bioFull: `<p>Italian painter <strong>Giotto di Bondone</strong> (c.1267-1337) revolutionized Western art by breaking from the flat, stylized Byzantine tradition toward naturalistic representation. He's generally considered the first in a line of great artists who contributed to the <a href="/movement/renaissance"><strong>Renaissance</strong></a>. His figures display unprecedented emotional depth and occupy believable three-dimensional space. Giorgio Vasari credited Giotto with initiating "the great art of painting as we know it today, introducing the technique of drawing accurately from life."</p>

<p>According to legend, the master painter Cimabue discovered young Giotto drawing his sheep on a rock so realistically that he took him as an apprentice. Giotto's masterwork, the Scrovegni (Arena) Chapel frescoes in Padua (c.1305), depicts the lives of Christ and the Virgin with revolutionary naturalism. He included Halley's Comet, visible in 1301, as the Star of Bethlehem. His frescoes at Santa Croce in Florence influenced Masaccio and were studied by Michelangelo. In 1334, Florence appointed him architect for the cathedral campanile. Upon his death in 1337, Florence gave him a state funeral, the first artist so honored. His frescoes remain in situ at the <a href="/museum/scrovegni-chapel"><strong>Scrovegni Chapel</strong></a> and Basilica of Saint Francis in Assisi.</p>`,
    faqs: [
      { question: "Why is Giotto important in art history?", answer: "Giotto broke from <strong>Byzantine flatness</strong> toward naturalistic representation, initiating the <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>. He's considered the father of Western painting." },
      { question: "Where can I see Giotto's frescoes?", answer: "Giotto's masterwork is at the <a href=\"/museum/scrovegni-chapel\"><strong>Scrovegni Chapel</strong></a> in Padua. Other frescoes are at the Basilica of Saint Francis in Assisi and Santa Croce in Florence." },
      { question: "What are Giotto's most famous works?", answer: "The <strong>Scrovegni Chapel frescoes</strong> (c.1305) depicting Christ and the Virgin's lives are his masterpiece. He also painted Halley's Comet as the Star of Bethlehem." },
      { question: "Who discovered Giotto?", answer: "According to legend, <strong>Cimabue</strong> discovered young Giotto drawing sheep on a rock so realistically that he took him as an apprentice in Florence." },
      { question: "Who did Giotto influence?", answer: "Giotto influenced <strong>Masaccio</strong>, whose frescoes were studied by <strong>Michelangelo</strong>. Leonardo, Raphael, and later Renaissance masters all built on his innovations." }
    ]
  },

  // 16. Otto Mueller
  {
    slug: 'otto-mueller',
    bioFull: `<p>German <a href="/movement/expressionism"><strong>Expressionist</strong></a> painter <strong>Otto Mueller</strong> (1874-1930) joined Die Brucke in 1910, bringing a lyrical sensibility to the group's bold style. Nicknamed "Gypsy Mueller" for his possible Romani heritage and lifelong fascination with Romani culture, he created harmonious images of nudes and Romani women in natural settings. Unlike other Brucke members' intense colors, Mueller preferred pale, earthy tones and used distemper on coarse canvas for a distinctive matte surface. His simplified forms show the influence of Egyptian art.</p>

<p>Mueller trained in lithography before studying at the Dresden Academy under Georg Freyer, and later in Munich where Franz von Stuck dismissed him as "untalented." He joined Die Brucke in Berlin from 1910-1913, working alongside Kirchner, Heckel, and Pechstein. His trips to the Balkans in the 1920s produced numerous paintings and lithographs of Romani subjects. From 1919 until his death, Mueller taught at the Breslau Academy, considered one of Europe's most progressive art schools. The Nazis seized 357 of his works in 1937 as "degenerate art." Today his paintings hang at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, the <strong>Brucke Museum</strong> in Berlin, and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "What art movement was Otto Mueller part of?", answer: "Mueller was a member of <strong>Die Brucke</strong> (1910-1913), a pioneering <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> group in Germany alongside Kirchner, Heckel, and Pechstein." },
      { question: "What subjects did Mueller paint?", answer: "Mueller was known for <strong>nudes and Romani women</strong> in natural settings. His fascination with Romani culture earned him the nickname \"Gypsy Mueller.\"" },
      { question: "Where can I see Mueller's paintings?", answer: "Major works are at the <strong>Brucke Museum</strong> in Berlin, the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a>, and the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington." },
      { question: "What happened to Mueller's work under the Nazis?", answer: "The Nazis seized <strong>357 of Mueller's works</strong> in 1937, labeling them \"degenerate art.\" He was rehabilitated after World War II." },
      { question: "What was distinctive about Mueller's technique?", answer: "Mueller used <strong>pale, earthy tones</strong> and distemper on coarse canvas, creating a matte surface unlike other Brucke members' intense colors." }
    ]
  },

  // 17. Pieter de Hooch
  {
    slug: 'pieter-de-hooch',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Pieter de Hooch</strong> (1629-1684) mastered intimate domestic interiors with open doorways leading to sunlit courtyards or rooms beyond. His "room-views" depict genteel households with women and children engaged in quiet activities, creating an atmosphere of stillness and intimacy. Art historian Simon Schama called him the provider of "the first sustained image of parental love that European art has shown us." De Hooch was contemporary with Vermeer in Delft's Guild of St. Luke.</p>

<p>De Hooch trained under landscape painter Nicolaes Berchem in Haarlem before working for linen merchant Justus de la Grange, traveling with his patron to The Hague, Leiden, and Delft. He joined the Delft painters' guild in 1655, two years after Vermeer. His finest work dates from the late 1650s and early 1660s when he lived in Delft and early Amsterdam. His masterpiece The Courtyard of a House in Delft hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London. Other important works are at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington. Contrary to legend, de Hooch did not die in a lunatic asylum; records show that was his son.</p>`,
    faqs: [
      { question: "What did Pieter de Hooch paint?", answer: "De Hooch specialized in <strong>domestic interiors</strong> with open doorways leading to sunlit spaces beyond. His scenes of quiet household life exemplify <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painting." },
      { question: "Where can I see de Hooch's paintings?", answer: "Major works are at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, and the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington." },
      { question: "How does de Hooch compare to Vermeer?", answer: "De Hooch and <strong>Vermeer</strong> were contemporaries in Delft's painters' guild, both specializing in domestic interiors. They likely influenced each other's light and spatial effects." },
      { question: "What is de Hooch's most famous painting?", answer: "<strong>The Courtyard of a House in Delft</strong> at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London is his masterpiece, demonstrating his mastery of light and architectural space." },
      { question: "When was de Hooch's best period?", answer: "De Hooch's finest work dates from the <strong>late 1650s to early 1660s</strong> when he lived in Delft. His later Amsterdam works are generally considered less accomplished." }
    ]
  },

  // 18. Juan Gris
  {
    slug: 'juan-gris',
    bioFull: `<p>Spanish painter <strong>Juan Gris</strong> (1887-1927) was one of the four major figures of <a href="/movement/cubism"><strong>Cubism</strong></a> alongside Picasso, Braque, and Leger. Born Jose Victoriano Gonzalez-Perez in Madrid, he moved to Paris in 1906, living in Montmartre where he met Picasso and the avant-garde circle. By 1912, remarkably quickly, he became a leading Cubist apart from the movement's founders. His lucid, well-composed still lifes feature bright harmonious colors, unlike the monochromatic works of early Cubism.</p>

<p>Gris studied engineering before painting, which gave his work its geometric precision and "slick, graphic, almost commercial appearance." He made extensive use of papier colle (collage) and coined the term "Analytical Cubism." His theoretical writings explained his aesthetic approach, and he delivered a lecture "The Possibilities of Painting" at the Sorbonne in 1924. From 1922-1924, he designed stage sets and costumes for Diaghilev's Ballets Russes. Gris died of kidney failure at just 40. His works hang at the <a href="/museum/reina-sofia"><strong>Museo Reina Sofia</strong></a> and <a href="/museum/thyssen-bornemisza-museum"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, the <a href="/museum/tate-modern"><strong>Tate</strong></a>, and the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Juan Gris part of?", answer: "Gris was one of the four major figures of <a href=\"/movement/cubism\"><strong>Cubism</strong></a>, alongside Picasso, Braque, and Leger. He pioneered Synthetic Cubism with bright, harmonious colors." },
      { question: "Where can I see Juan Gris's paintings?", answer: "Major collections are at the <a href=\"/museum/reina-sofia\"><strong>Museo Reina Sofia</strong></a> and <a href=\"/museum/thyssen-bornemisza-museum\"><strong>Thyssen-Bornemisza</strong></a> in Madrid, the <a href=\"/museum/tate-modern\"><strong>Tate</strong></a>, and the <a href=\"/museum/moma\"><strong>MoMA</strong></a>." },
      { question: "What subjects did Juan Gris paint?", answer: "Gris primarily painted <strong>still lifes</strong> featuring guitars, fruit, newspapers, and tabletop objects in his distinctive Cubist style with bright colors." },
      { question: "How did Juan Gris differ from Picasso?", answer: "Unlike Picasso's monochromatic early Cubism, Gris used <strong>bright harmonious colors</strong>. His engineering background gave his work geometric precision and clarity." },
      { question: "What other work did Gris do besides painting?", answer: "Gris designed <strong>stage sets and costumes</strong> for Diaghilev's Ballets Russes (1922-1924) and wrote theoretical essays explaining his Cubist approach." }
    ]
  },

  // 19. Andrea del Sarto
  {
    slug: 'andrea-del-sarto',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> master <strong>Andrea del Sarto</strong> (1486-1530) was known as "the painter without errors" for his flawless technique. Working in Florence, he combined Leonardo's sfumato with Raphael's compositional harmony, developing an unsurpassed expressive use of color. His frescoes, altarpieces, and portraits influenced the next generation of Florentine painters. Vasari, who trained in his workshop, ranked him among the greatest painters, praising his perfection in drawing, coloring, and invention.</p>

<p>Del Sarto ("the tailor's son") trained under Piero di Cosimo before establishing his own style influenced by Fra Bartolommeo, Leonardo, and Raphael. His frescoes for the Servite Order at Santissima Annunziata (1509-1514) established his reputation. In 1518, Francis I of France summoned him to Fontainebleau, though he returned to Florence after a year. His masterpiece Madonna of the Harpies (1517) demonstrates his mature style. He trained the most significant Florentine painters of the early 16th century, including Rosso Fiorentino, Pontormo, and Vasari himself. Michelangelo admired his talents. Del Sarto died during a plague outbreak at age 44. Works hang at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, <a href="/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Andrea del Sarto part of?", answer: "Del Sarto was a High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> master working in Florence. His style bridged the High Renaissance and early <a href=\"/movement/mannerism\"><strong>Mannerism</strong></a>." },
      { question: "Why was del Sarto called 'the painter without errors'?", answer: "Vasari praised del Sarto's <strong>flawless technique</strong> in drawing, coloring, and composition. His works demonstrate perfect harmony without noticeable mistakes." },
      { question: "Where can I see del Sarto's paintings?", answer: "Major works are at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> and <a href=\"/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
      { question: "Who were del Sarto's students?", answer: "Del Sarto trained major artists including <strong>Pontormo</strong>, <strong>Rosso Fiorentino</strong>, Francesco Salviati, and <strong>Giorgio Vasari</strong>, shaping the next generation of Florentine painting." },
      { question: "What is del Sarto's most famous painting?", answer: "<strong>Madonna of the Harpies</strong> (1517), an altarpiece now in the Uffizi, is considered his masterpiece, demonstrating his perfect technique and rich coloring." }
    ]
  },

  // 20. Gustave Caillebotte
  {
    slug: 'gustave-caillebotte',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> painter and patron <strong>Gustave Caillebotte</strong> (1848-1894) combined rigorous academic drawing with Impressionist color and modern urban subjects. His bold perspectives and geometric compositions, particularly in Paris Street; Rainy Day, distinguish him from other Impressionists. Born to a wealthy family, he used his fortune to support struggling artists like Monet, Renoir, and Degas by purchasing their work, effectively keeping the Impressionist movement financially viable.</p>

<p>Caillebotte trained as an engineer before studying at the Ecole des Beaux-Arts under Leon Bonnat. He first showed at the Impressionist exhibition of 1876. His masterpiece The Floor Scrapers (1875) was rejected by the Salon for its "vulgar" subject of laboring workers. His bequest of 68 paintings to the French state (including works by Monet, Renoir, Degas, Pissarro, Sisley, Cezanne, and Manet) formed the foundation of the Impressionist collection at the <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>. Caillebotte died of cerebral hemorrhage at 45, his own reputation overshadowed for decades by the artists he collected. Paris Street; Rainy Day hangs at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Caillebotte part of?", answer: "Caillebotte exhibited with the <a href=\"/movement/impressionism\"><strong>Impressionists</strong></a> from 1876, though his precise drawing style was more academic than other members." },
      { question: "Where can I see Caillebotte's paintings?", answer: "<strong>Paris Street; Rainy Day</strong> is at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. <strong>The Floor Scrapers</strong> is at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>." },
      { question: "Why was Caillebotte important to Impressionism?", answer: "Caillebotte used his <strong>family wealth</strong> to buy paintings from struggling Impressionists, financially supporting Monet, Renoir, Degas, and others during difficult years." },
      { question: "What did Caillebotte bequeath to France?", answer: "Caillebotte left <strong>68 Impressionist paintings</strong> to the French state, including works by Monet, Renoir, and Degas. This collection forms the core of the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a>." },
      { question: "What are Caillebotte's most famous paintings?", answer: "<strong>Paris Street; Rainy Day</strong> (1877) and <strong>The Floor Scrapers</strong> (1875) are his masterpieces, known for bold perspective and depiction of modern Paris." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates batch 1 (artists 1-20)...');

  for (const artist of artistUpdates) {
    try {
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          bioFull: artist.bioFull,
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
    } catch (error) {
      console.error(`✗ Failed to update ${artist.slug}:`, error.message);
    }
  }

  console.log('\nBatch 1 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
