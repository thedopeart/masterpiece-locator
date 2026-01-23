const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'edouard-vuillard-portrait-of-marie-vuillard',
    description: `<p><a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> painted Portrait of Marie Vuillard in 1890, depicting his mother who would become one of the most frequent subjects throughout his career. Marie Vuillard appears in dozens of his paintings, seated in the domestic interiors that defined his work with the <strong>Nabis movement</strong>. This early portrait captures her with the quiet intimacy that would characterize Vuillard's best work.</p>
<p>Vuillard (1868-1940) was a founding member of the Nabis, the Post-Impressionist group that set the pace for French art in the 1890s. He lived with his mother until her death in 1928, and their shared domestic spaces provided endless material for his paintings. The flattened patterns, muted colors, and decorative surfaces typical of <strong>Nabis aesthetics</strong> emerge even in this relatively early work.</p>
<p>The painting demonstrates Vuillard's approach to portraiture, which emphasized atmosphere and environment as much as likeness. His mother often appears absorbed in sewing or reading, blending into the wallpaper and textiles that surround her. This reflects the Nabis belief that art should convey emotion through form and <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color</strong></a> rather than simply documenting appearances. The work is held in a private collection.</p>`,
    faqs: [
      {
        question: "Who was Marie Vuillard?",
        answer: "Marie Vuillard was the artist's <strong>mother</strong>, who appeared in dozens of his paintings. <a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Vuillard</strong></a> lived with her until her death in 1928."
      },
      {
        question: "What art movement does this painting belong to?",
        answer: "Vuillard was a founding member of the <strong>Nabis</strong>, a Post-Impressionist group active in France during the 1890s. They emphasized decorative surfaces and emotional expression."
      },
      {
        question: "Where is Portrait of Marie Vuillard displayed?",
        answer: "The painting is currently held in a <strong>private collection</strong>. Vuillard's works featuring his mother can be found in museums worldwide."
      }
    ]
  },
  {
    slug: 'ernest-meissonier-portrait-of-marquesa-de-manzanedo',
    description: `<p><a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted Portrait of Marquesa de Manzanedo in 1872, depicting Josefa Manzanedo e Intentas de Mitjans, the 2nd Marchioness of Manzanedo. Meissonier was renowned for his attention to <strong>fine detail</strong>, and the English art critic John Ruskin famously examined his work under a magnifying glass, marveling at his manual dexterity.</p>
<p>Meissonier (1815-1891) was a French Classicist painter famous for his depictions of Napoleon and military themes, but he also produced portraits of considerable refinement. Born in Lyon, he excelled at depicting scenes of chivalry and masculine adventure, but his skill extended to <strong>society portraiture</strong> as well. This portrait demonstrates his academic training and mastery of textures.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, where it represents the French Academic tradition alongside the museum's Spanish masterpieces. Meissonier's careful rendering of costume and setting reflects his characteristic precision, applied here to a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>portrait of Spanish nobility</strong></a>.</p>`,
    faqs: [
      {
        question: "Who is depicted in this portrait?",
        answer: "The portrait shows <strong>Josefa Manzanedo e Intentas de Mitjans</strong>, the 2nd Marchioness of Manzanedo, painted in 1872 by <a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Meissonier</strong></a>."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, Spain."
      },
      {
        question: "What was Meissonier known for?",
        answer: "Meissonier was famous for his <strong>extraordinary attention to detail</strong>. John Ruskin examined his work under a magnifying glass, praising his technical precision."
      }
    ]
  },
  {
    slug: 'jean-marc-nattier-portrait-of-mary-adelaide-of-france-as-diana',
    description: `<p><a href="/apps/masterpieces/artist/jean-marc-nattier"><strong>Jean-Marc Nattier</strong></a> painted Portrait of Marie Adelaide of France as Diana in 1745, depicting the third daughter of King Louis XV in the guise of the Roman goddess of the hunt. The princess reclines against a serene riverside landscape, holding a bow while a quiver of arrows rests nearby. A crescent moon adorns her hair, and a <strong>leopard skin</strong> drapes across her shoulder.</p>
<p>This type of allegorical portraiture was a hallmark of <strong>French Rococo</strong> painting. Nattier became the favorite portraitist of Louis XV's court, and his ability to blend historical portraiture with mythological allegory made him enormously popular among the aristocracy. The soft, diffused light and rosy cheeks are trademarks of his elegant style.</p>
<p>Marie Adelaide (1732-1800) was a talented musician who never married, instead remaining at the French court until the Revolution forced her into exile. The painting measures 95 x 128 cm and hangs at the <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence, within the Galleria Palatina. Its <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>idealized femininity</strong></a> and rich colors demonstrate why Nattier was so sought after by the Bourbon court.</p>`,
    faqs: [
      {
        question: "Who is depicted in this portrait?",
        answer: "The portrait shows <strong>Marie Adelaide of France</strong> (1732-1800), the third daughter of King Louis XV, dressed as the Roman goddess Diana."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, Italy, within the Galleria Palatina collection."
      },
      {
        question: "What style is this portrait?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-marc-nattier\"><strong>Nattier</strong></a> painted this in the <strong>French Rococo style</strong>, blending portraiture with mythological allegory. He was the favorite court painter of Louis XV."
      },
      {
        question: "What are the symbols in the painting?",
        answer: "The <strong>bow, arrows, crescent moon, and leopard skin</strong> are all attributes of Diana, goddess of the hunt. These symbols transform the royal portrait into mythological allegory."
      }
    ]
  },
  {
    slug: 'john-constable-portrait-of-mary-freer',
    description: `<p><a href="/apps/masterpieces/artist/john-constable"><strong>John Constable</strong></a> painted Portrait of Mary Freer in 1809, demonstrating his versatility beyond the landscape painting for which he became famous. The work shows Mary Freer in an intimate setting, her illuminated face contrasting against a dark background. Constable's use of <strong>chiaroscuro</strong> gives volume and life to the figure.</p>
<p>Constable is best known for his paintings of the Suffolk countryside, but this portrait reveals his ability to capture human personality with the same sensitivity he brought to nature. The warm tones and soft transitions create intimacy, allowing viewers to connect emotionally with the sitter. Rather than idealizing his subject, Constable sought genuine <strong>human connection</strong>.</p>
<p>The painting measures approximately 75 x 61 cm and hangs at the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London. Constable studied at the Royal Academy and was inspired by Gainsborough, Rubens, and Claude Lorrain. While his landscape work influenced the Barbizon School and later the Impressionists, this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> shows a more personal side of his artistic practice.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Mary Freer displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-london-uk\"><strong>National Portrait Gallery</strong></a> in London. It measures approximately 75 x 61 cm."
      },
      {
        question: "What is Constable best known for?",
        answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>John Constable</strong></a> was primarily a <strong>landscape painter</strong>, famous for his scenes of the Suffolk countryside. This portrait demonstrates his range as an artist."
      },
      {
        question: "What style is this painting?",
        answer: "The portrait belongs to the <strong>Romanticism movement</strong>. Constable uses warm tones and careful lighting to create an intimate connection with the viewer."
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-portrait-of-maude-abrantes',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted Portrait of Maude Abrantes around 1907-1908, one of his earlier works before he fully developed the <strong>elongated forms</strong> that would define his mature style. The painting shows hints of what was to come, particularly in the figure's lengthened neck and somber expression. But it contains more detail in clothing and features than his later, more simplified portraits.</p>
<p>The subject, Maude Abrantes (born Leontine Phipps), was an American artist and socialite heavily involved in Parisian bohemian circles. She suffered from a serious morphine addiction, which brought her into contact with Modigliani's turbulent social world. She accompanied him to various Paris events, and he knew her well enough to capture her <strong>personality</strong> within this portrait. Abrantes left Paris for New York in 1908.</p>
<p>The painting measures 50.1 x 80.6 cm and resides at the <a href="/apps/masterpieces/museum/hecht-museum-university-of-haifa-haifa-israel"><strong>Hecht Museum</strong></a> at the University of Haifa. In 2018, X-ray analysis revealed two unfinished portraits beneath this canvas, evidence of Modigliani reusing materials like many <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>struggling artists</strong></a> of the period.</p>`,
    faqs: [
      {
        question: "Who was Maude Abrantes?",
        answer: "Maude Abrantes (born Leontine Phipps) was an <strong>American artist and socialite</strong> in Parisian bohemian circles. She accompanied <a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> to events and left Paris for New York in 1908."
      },
      {
        question: "Where is this painting displayed?",
        answer: "The portrait is held at the <a href=\"/apps/masterpieces/museum/hecht-museum-university-of-haifa-haifa-israel\"><strong>Hecht Museum</strong></a> at the University of Haifa in Israel."
      },
      {
        question: "What was discovered under this painting?",
        answer: "In 2018, <strong>X-ray analysis revealed two unfinished portraits</strong> beneath this canvas. Modigliani reused canvases due to the expense of art supplies."
      }
    ]
  },
  {
    slug: 'maurice-quentin-de-la-tour-portrait-of-maurice-of-saxony',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this portrait of Maurice, comte de Saxe around 1747-1748, depicting one of France's most celebrated military commanders. The Marshal General of France appears in a composition that demonstrates La Tour's mastery of <strong>pastel portraiture</strong>, the medium for which he became the most sought-after artist of the French Rococo period.</p>
<p>Hermann Maurice, Count of Saxony (1696-1750) was an illegitimate son of Augustus II of Poland who became a French general and one of the finest military commanders of his era. His victories at Fontenoy and other battles made him a national hero. La Tour captured him with the confident bearing befitting his <strong>military reputation</strong>.</p>
<p>La Tour created multiple versions of this portrait. One version resides at the Louvre, while another hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden. The Dresden version measures 49 x 59.5 cm. La Tour's pastel technique allowed him to achieve effects of color and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>luminosity</strong></a> that rivaled oil painting while capturing the powder and silk of aristocratic dress.</p>`,
    faqs: [
      {
        question: "Who was Maurice of Saxony?",
        answer: "Maurice, comte de Saxe (1696-1750) was a <strong>French military commander</strong> and Marshal General of France. He was an illegitimate son of Augustus II of Poland."
      },
      {
        question: "Where can I see this portrait?",
        answer: "One version is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden. Another version is at the Louvre in Paris."
      },
      {
        question: "What medium did La Tour use?",
        answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> was a master of <strong>pastel portraiture</strong>, the medium that made him the most celebrated portrait artist of the French Rococo."
      }
    ]
  },
  {
    slug: 'juan-gris-portrait-of-maurice-raynal',
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted Portrait of Maurice Raynal in 1911, creating what art historians describe as a "reciprocal recognition" between painter and critic. The subject was one of <strong>Analytical Cubism's</strong> most influential theorists, whose writings helped define and communicate the movement to wider audiences. Gris turned his analytical method toward the very person who made Cubism intelligible to the public.</p>
<p>Born José Victoriano González-Pérez in Madrid in 1887, Gris moved to Paris in the first decade of the 20th century. Alongside Picasso, Braque, and Léger, he became one of Cubism's four principal figures. This portrait demonstrates his disciplined approach: geometric shapes grouped in balanced, dynamic arrangements while the sitter faces the viewer with a <strong>subtle psychological depth</strong>.</p>
<p>The painting measures 55 x 46 cm and is executed in oil on canvas using a restrained palette of earth tones. Raynal owned several works by Gris, including this portrait, which remains in a private collection in Paris. The composition shows how Gris created dimensionality through the juxtaposition of tones within an otherwise <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>flattened pictorial space</strong></a>.</p>`,
    faqs: [
      {
        question: "Who was Maurice Raynal?",
        answer: "Maurice Raynal (1884-1954) was one of <strong>Cubism's most influential critics and theorists</strong>. His writings helped define and explain the movement to wider audiences."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a> painted this in the <strong>Analytical Cubism style</strong> in 1911. He was one of the movement's four principal figures alongside Picasso, Braque, and Léger."
      },
      {
        question: "Where is this painting located?",
        answer: "The portrait is held in a <strong>private collection in Paris</strong>. Raynal owned several works by Gris, including this one."
      }
    ]
  },
  {
    slug: 'frederic-leighton-portrait-of-may-sartoris',
    description: `<p><a href="/apps/masterpieces/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted Portrait of May Sartoris around 1860, depicting the fifteen-year-old daughter of his friend and patron Adelaide Sartoris. The setting is the family's country residence in Hampshire, where May stands beside a fallen tree that suggests the <strong>passage of time</strong> and mortality, accentuating her fragile beauty.</p>
<p>Leighton was a leading figure in the <strong>Aesthetic Movement</strong>, trained in the continental academic tradition in Germany, Italy, and France. He insisted upon beauty and form as the artist's primary concerns. In 1853, the young Leighton had met Adelaide Sartoris, a former opera singer and celebrated hostess whose friendship provided him an entrée into artistic and fashionable society.</p>
<p>May Sartoris was a descendant of the Kemble family, one of England's most distinguished theatrical dynasties. A talented amateur actress and singer, she married Henry Evans Gordon in 1871. Leighton painted two more portraits of her in subsequent years. The painting measures 152.1 x 90.2 cm and resides at the <a href="/apps/masterpieces/museum/kimbell-art-museum"><strong>Kimbell Art Museum</strong></a> in Fort Worth, a poignant example of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Victorian portraiture</strong></a> that captures both beauty and melancholy.</p>`,
    faqs: [
      {
        question: "Who was May Sartoris?",
        answer: "Mary Theodosia (May) Sartoris (1845-1925) was the daughter of Adelaide Sartoris, a former opera singer. She came from the <strong>Kemble theatrical dynasty</strong> and married Henry Evans Gordon in 1871."
      },
      {
        question: "Where is this painting displayed?",
        answer: "The portrait is at the <a href=\"/apps/masterpieces/museum/kimbell-art-museum\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas. It measures 152.1 x 90.2 cm."
      },
      {
        question: "What does the fallen tree symbolize?",
        answer: "The <strong>fallen tree suggests mortality</strong> and the passage of time, creating a wistful mood. Scholars suggest it reflects Victorian views of childhood and Adelaide Sartoris's melancholy temperament."
      }
    ]
  },
  {
    slug: 'adolph-menzel-portrait-of-menzel39s-brother-richard',
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this portrait of his brother Richard, depicting a family member in the kind of intimate study that demonstrated his remarkable technical abilities. Menzel is considered, alongside Caspar David Friedrich, one of the two most prominent German painters of the 19th century. His <strong>realist approach</strong> and attention to detail made him the most successful artist of his era in Germany.</p>
<p>Born in Breslau, Prussian Silesia (now Wrocław, Poland) in 1815, Menzel's father was a lithographer who encouraged his son's artistic talents. Menzel became known for his drawings, etchings, and paintings, producing history paintings that rarely left Germany as museums quickly acquired them. His depictions of <strong>Frederick the Great</strong> and Prussian history made him a national treasure.</p>
<p>This portrait of Richard shows Menzel's ability to capture personality through careful observation. The work is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, one of the few major Menzel works outside Germany. His portraits of family members reveal a more personal side than his grand historical <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>compositions</strong></a>.</p>`,
    faqs: [
      {
        question: "Who was Adolph Menzel?",
        answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> (1815-1905) was one of the <strong>most prominent German painters</strong> of the 19th century, known for his realist style and historical subjects."
      },
      {
        question: "Where is this painting displayed?",
        answer: "The portrait is held at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, one of the few major Menzel works outside Germany."
      },
      {
        question: "What was Menzel known for?",
        answer: "Menzel was famous for his <strong>history paintings</strong>, particularly depicting Frederick the Great and Prussian subjects. His detailed realist approach made him enormously popular in Germany."
      }
    ]
  },
  {
    slug: 'jacques-louis-david-portrait-of-micheljean-sedaine',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted Portrait of Michel-Jean Sedaine around 1772, depicting the renowned 18th-century playwright with the clarity and balance characteristic of <strong>Neoclassicism</strong>. Sedaine appears in three-quarters view with a direct, serene gaze suggesting both introspection and confidence. The painting measures 53 x 45 cm.</p>
<p>This portrait reflects the transition from Baroque to Neoclassical art that David embodied in his practice. The neutral background allows Sedaine's figure to project forward, creating a sense of presence as if the sitter were in the same space as the viewer. David's choice to depict contemporary figures in classical settings reflected his desire to <strong>dignify the art and culture</strong> of his time.</p>
<p>Michel-Jean Sedaine (1719-1797) was a dramatist and librettist whose works were performed at the Opéra-Comique. David captured him with an aura of respect befitting his status in French cultural life. The painting is currently held in a private collection, demonstrating David's skill in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraiture</strong></a> before his rise to become the leading painter of the Revolutionary era.</p>`,
    faqs: [
      {
        question: "Who was Michel-Jean Sedaine?",
        answer: "Sedaine (1719-1797) was a French <strong>dramatist and librettist</strong> whose works were performed at the Opéra-Comique. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> portrayed him around 1772."
      },
      {
        question: "What style is this painting?",
        answer: "The portrait exemplifies <strong>Neoclassicism</strong>, with its clarity, balance, and classical approach. It reflects David's transition from Baroque influences to the style that would define his career."
      },
      {
        question: "Where is this painting located?",
        answer: "The Portrait of Michel-Jean Sedaine is currently held in a <strong>private collection</strong>. It measures 53 x 45 cm."
      }
    ]
  },
  {
    slug: 'henry-raeburn-portrait-of-miss-eleanor-urquhart',
    description: `<p><a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> painted Portrait of Miss Eleanor Urquhart around 1793, capturing a member of the Scottish gentry during the flourishing of the <strong>Scottish Enlightenment</strong>. The portrait demonstrates Raeburn's innovative techniques and unique style that set him apart from his contemporaries, blending realism with a touch of romanticism.</p>
<p>Eleanor Urquhart was a prominent figure in 18th-century Scotland, known for her grace and intelligence. Raeburn employs a rich color palette with warm tones and soft transitions that create intimacy. The gentle illumination highlights her features, drawing attention to her <strong>expressive gaze</strong>, while the interplay of light and shadow creates depth throughout the composition.</p>
<p>Raeburn emerged as Scotland's leading portrait painter, capturing the essence of his subjects while conveying their personality and emotion. The painting measures 75 x 62 cm and is held at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC. It represents the golden age of Scottish culture and the artistic achievements of the Enlightenment period in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Miss Eleanor Urquhart displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It measures 75 x 62 cm."
      },
      {
        question: "Who was Henry Raeburn?",
        answer: "<a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Henry Raeburn</strong></a> (1756-1823) was Scotland's leading portrait painter during the <strong>Scottish Enlightenment</strong>, known for his innovative techniques and ability to capture personality."
      },
      {
        question: "What period does this painting represent?",
        answer: "The portrait dates from around 1793, during the <strong>Scottish Enlightenment</strong>, a vibrant period that fostered intellectual and artistic pursuits throughout Scotland."
      }
    ]
  },
  {
    slug: 'elisabeth-vigee-le-brun-portrait-of-mme-d39aguesseau',
    description: `<p><a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Élisabeth Vigée Le Brun</strong></a> painted Portrait of Mme D'Aguesseau around 1770, demonstrating the elegant style that would make her the favorite portrait painter of Marie Antoinette. The work shows an aristocratic woman with the soft features, delicate coloring, and refined pose typical of <strong>Rococo portraiture</strong>.</p>
<p>Vigée Le Brun (1755-1842) was one of the most celebrated women painters in European history. Her artistic style combined the remnants of Rococo elegance with emerging Neoclassical elements. She created a name for herself in Ancien Régime society, and her portraits of aristocratic women captured both their <strong>beauty and status</strong> with remarkable sensitivity.</p>
<p>The painting measures 91.5 x 72.4 cm and resides at the <a href="/apps/masterpieces/museum/national-museum-of-art-of-romania-bucharest-romani"><strong>National Museum of Art of Romania</strong></a> in Bucharest. Vigée Le Brun fled France during the Revolution and traveled throughout Europe, painting royalty and aristocrats in Italy, Austria, and Russia. Her <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>portraits of women</strong></a> remain among the finest examples of late 18th-century French painting.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Mme D'Aguesseau displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/national-museum-of-art-of-romania-bucharest-romani\"><strong>National Museum of Art of Romania</strong></a> in Bucharest. It measures 91.5 x 72.4 cm."
      },
      {
        question: "Who was Élisabeth Vigée Le Brun?",
        answer: "<a href=\"/apps/masterpieces/artist/elisabeth-vigee-le-brun\"><strong>Vigée Le Brun</strong></a> (1755-1842) was one of the most celebrated <strong>women painters in European history</strong>, famous as the portrait painter of Marie Antoinette."
      },
      {
        question: "What style is this painting?",
        answer: "The portrait shows <strong>Rococo elegance</strong> with emerging Neoclassical elements. Vigée Le Brun's style captured both beauty and aristocratic refinement."
      }
    ]
  },
  {
    slug: 'edouard-manet-portrait-of-monsieur-and-madame-auguste-manet',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted Portrait of Monsieur and Madame Auguste Manet in 1860, depicting his own parents in a work of striking <strong>psychological depth</strong>. His father wears a dark coat with a full beard, while his mother appears in a bonnet beside him. The somber palette and direct presentation reflect Manet's emerging Realist approach.</p>
<p>Auguste Manet was a judge and high-ranking civil servant who initially opposed his son's artistic ambitions. The double portrait captures both parents with unflinching honesty rather than flattering idealization. Manet's mother would remain a supportive presence throughout his career, while his relationship with his father remained more <strong>complicated</strong>.</p>
<p>The painting measures 110 x 90 cm and hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. Created before his controversial Salon submissions like Le Déjeuner sur l'herbe and Olympia, this family portrait demonstrates the technical skill and psychological acuity that would make Manet a central figure in the development of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>modern painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Who are the subjects of this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> painted his own <strong>parents, Auguste and Eugénie Manet</strong>. His father was a judge who initially opposed his son's artistic career."
      },
      {
        question: "Where can I see this painting?",
        answer: "The portrait hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It measures 110 x 90 cm."
      },
      {
        question: "What style is this painting?",
        answer: "The portrait shows Manet's <strong>Realist approach</strong>, painted in 1860 before his more controversial works. It captures his parents with psychological honesty."
      }
    ]
  },
  {
    slug: 'william-adolphe-bouguereau-portrait-of-monsieur-m',
    description: `<p><a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted Portrait of Monsieur M. in 1850, an early work that demonstrates his academic training and skill in portraiture. The painting depicts a man with dark hair in a seated position, rendered with the <strong>technical precision</strong> that would characterize Bouguereau's entire career. He was approximately 25 years old when he created this work.</p>
<p>Bouguereau (1825-1905) became one of the most successful French academic painters of his era. His mastery of the human form and classical subjects earned him enormous popularity during his lifetime, though his reputation declined with the rise of Impressionism and modern art. Recent decades have seen renewed appreciation for his <strong>technical accomplishment</strong>.</p>
<p>The painting measures 87 x 80.5 cm and is held at the <a href="/apps/masterpieces/museum/norton-simon-museum-pasadena-ca-us"><strong>Norton Simon Museum</strong></a> in Pasadena, California. While Bouguereau is best known for his idealized figures from mythology and his paintings of peasant children, this portrait shows his capacity for straightforward <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>realistic portraiture</strong></a> in the academic tradition.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Monsieur M. displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/norton-simon-museum-pasadena-ca-us\"><strong>Norton Simon Museum</strong></a> in Pasadena, California. It measures 87 x 80.5 cm."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> painted this in the <strong>Academic style</strong> in 1850. He was about 25 years old, in the formative years of his career."
      },
      {
        question: "What was Bouguereau known for?",
        answer: "Bouguereau became famous for his <strong>idealized mythological figures</strong> and paintings of peasant children. This early portrait shows his academic training in realistic portraiture."
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-portrait-of-monsieur-rivi232re',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted Portrait of Monsieur Rivière in 1805, depicting Philibert Rivière de L'Isle, an influential court official in the Napoleonic Empire. This was part of Ingres' first major commission, completed when he was about 23 years old. Portraits of Rivière's wife and daughter Caroline accompanied this work, all considered among his <strong>early masterpieces</strong>.</p>
<p>As an official commission, this portrait is more formal than Ingres' earlier depictions of friends. Rivière sits in an ornate chair beside a table draped with red velvet, his hand tucked inside his vest in a pose <strong>reminiscent of Napoleon</strong>. The painting shows influence from Jacques-Louis David, Ingres' teacher, while including a reproduction of Raphael's Madonna della seggiola in the background as artistic tribute.</p>
<p>The painting measures 116 x 89 cm and hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. Ingres' portraits of the Rivière family established his reputation for combining classical precision with psychological insight. The flat, spatially restrictive composition is unusual for Ingres, who typically included preparatory sketches, none of which survive for this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>remarkable portrait</strong></a>.</p>`,
    faqs: [
      {
        question: "Who was Philibert Rivière?",
        answer: "Philibert Rivière de L'Isle was a <strong>court official in the Napoleonic Empire</strong>. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> painted him alongside portraits of his wife and daughter Caroline."
      },
      {
        question: "Where can I see this painting?",
        answer: "The portrait is displayed at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It measures 116 x 89 cm."
      },
      {
        question: "What makes this portrait significant?",
        answer: "This was part of Ingres' <strong>first major commission</strong>, completed at age 23. All three Rivière family portraits are considered among his early masterpieces."
      }
    ]
  },
  {
    slug: 'lawrence-alma-tadema-portrait-of-mr-soons',
    description: `<p><a href="/apps/masterpieces/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted Portrait of Mr Soons in 1857, an early work created while he was still training at the Royal Academy of Antwerp. Born in the Netherlands in 1836, Alma-Tadema had not yet developed the classical subjects for which he would become famous. This portrait shows his <strong>academic foundation</strong> before his turn toward depictions of ancient Rome.</p>
<p>Alma-Tadema would later settle in London in 1870 and become one of the most successful painters of his era. His images of the luxury and decadence of the Roman Empire, with languorous figures set in marbled interiors against Mediterranean skies, made him enormously wealthy. He was knighted in 1899. But this early portrait belongs to his <strong>formative period</strong>, working in a more traditional style.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp-dutch-koninklijk"><strong>Royal Museum of Fine Arts Antwerp</strong></a>, appropriate given Alma-Tadema's training there. While his later classical paintings fell into disrepute after his death, they have been re-evaluated since the 1960s for their importance to <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Victorian art</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Mr Soons displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp-dutch-koninklijk\"><strong>Royal Museum of Fine Arts Antwerp</strong></a>, where Alma-Tadema received his academic training."
      },
      {
        question: "What period is this painting from?",
        answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted this in 1857, during his <strong>training years</strong> before developing the classical Roman subjects for which he became famous."
      },
      {
        question: "What was Alma-Tadema known for?",
        answer: "He became famous for <strong>depictions of ancient Rome</strong>, showing luxury and decadence in marbled interiors. He was knighted in 1899 and was one of the wealthiest painters of his era."
      }
    ]
  },
  {
    slug: 'henry-raeburn-portrait-of-mrs-andrew',
    description: `<p><a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> painted Portrait of Mrs. Andrew Hay around 1795, capturing the wife of Major General Andrew Hay with the <strong>sensitive handling</strong> that distinguished his portraits of women. Raeburn could be remarkably delicate when painting female subjects, and this work demonstrates the bold, vigorous technique sometimes called his "square touch."</p>
<p>Raeburn (1756-1823) was the first major Scottish painter to work largely in his own country, and his portraits create a visual record of a golden age of culture and society, particularly in Edinburgh. He painted directly on canvas without preliminary drawings, achieving effects of <strong>character and presence</strong> through confident brushwork.</p>
<p>The painting was commissioned by Major General Hay around 1795-1814 and descended through the family until it was sold at Christie's London in 1912. It passed through Duveen Brothers in New York and collector Edward T. Stotesbury before the <a href="/apps/masterpieces/museum/joslyn-art-museumomaha-ne-us"><strong>Joslyn Art Museum</strong></a> in Omaha acquired it in 1941. The portrait represents Raeburn's ability to combine aristocratic <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>elegance</strong></a> with psychological depth.</p>`,
    faqs: [
      {
        question: "Where is Portrait of Mrs. Andrew Hay displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/joslyn-art-museumomaha-ne-us\"><strong>Joslyn Art Museum</strong></a> in Omaha, Nebraska, acquired in 1941."
      },
      {
        question: "Who commissioned this portrait?",
        answer: "The portrait was commissioned by <strong>Major General Andrew Hay</strong> around 1795-1814. It descended through the family before being sold in 1912."
      },
      {
        question: "What is Raeburn's 'square touch'?",
        answer: "<a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Raeburn</strong></a> painted directly on canvas without preliminary drawings. His <strong>bold, vigorous handling</strong>, sometimes called the \"square touch,\" was remarkably effective in conveying character."
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-portrait-of-napol233on-bonaparte-the-first-council',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted Bonaparte, First Consul in 1804, receiving the commission from the city of Liège when he was just 23 years old. This was one of five portraits of Napoleon commissioned to be distributed to towns newly ceded to France. The painting shows Bonaparte in the <strong>red uniform of a consul</strong>, with short hair, placing his hand inside his jacket in a civilian rather than martial pose.</p>
<p>Unable to get Bonaparte to sit for him, Ingres based the pose on an 1802 portrait by Antoine-Jean Gros. The background shows St. Lambert's Cathedral in Liège as complete, though it was actually being demolished during the Liège Revolution. Bonaparte's right hand prepares to sign a document titled "Faubourg d'Amercœur rebâti," referencing his 1803 decree to <strong>rebuild a suburb</strong> destroyed during fighting.</p>
<p>The painting measures 227 x 147 cm and now resides at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-li232ge-bal-li232ge-belgi"><strong>Musée des Beaux-Arts de Liège</strong></a> (La Boverie). This first Napoleonic portrait by Ingres is considered one of the finest depictions of the young Napoleon, demonstrating the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Neoclassical precision</strong></a> that would define his career.</p>`,
    faqs: [
      {
        question: "Why was this portrait commissioned?",
        answer: "The city of <strong>Liège commissioned</strong> this portrait after being ceded to France. It was one of five such portraits distributed to newly acquired prefectural towns."
      },
      {
        question: "Where can I see this painting?",
        answer: "The portrait is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-li232ge-bal-li232ge-belgi\"><strong>Musée des Beaux-Arts de Liège</strong></a> (La Boverie) in Belgium. It measures 227 x 147 cm."
      },
      {
        question: "What is significant about this portrait?",
        answer: "This is <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres'</strong></a> <strong>first Napoleonic portrait</strong>, painted when he was 23. It's considered one of the finest depictions of the young Napoleon."
      }
    ]
  },
  {
    slug: 'henry-raeburn-portrait-of-niel-gow',
    description: `<p><a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn</strong></a> painted Portrait of Niel Gow around 1787-1793, depicting Scotland's most celebrated <strong>fiddle player</strong> in a three-quarter length view. Gow sits in a chair wearing plaid breeches and stockings, playing his violin. Though a celebrity in both Scotland and London, Gow was the only "man of the people" painted by Raeburn whose portrait was later engraved.</p>
<p>Niel Gow (1727-1807) was an influential figure in Scottish traditional music. His compositions and performances helped define the Scottish fiddle tradition, and his son Nathaniel continued the family's musical legacy as a dance-band impresario and sheet music publisher. The portrait captures Gow in his <strong>natural element</strong>, instrument in hand.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/scottish-national-gallery"><strong>Scottish National Gallery</strong></a> in Edinburgh. A mezzotint print by William Say, created in 1815 after Raeburn's painting, helped spread Gow's image to wider audiences when Nathaniel Gow published a new edition of his father's tunes. The portrait remains one of the most <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>beloved images</strong></a> of Scottish musical heritage.</p>`,
    faqs: [
      {
        question: "Who was Niel Gow?",
        answer: "Niel Gow (1727-1807) was Scotland's most famous <strong>fiddle player</strong>. His compositions helped define the Scottish fiddle tradition, and he was a celebrity in both Scotland and London."
      },
      {
        question: "Where is Portrait of Niel Gow displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/scottish-national-gallery\"><strong>Scottish National Gallery</strong></a> in Edinburgh, Scotland."
      },
      {
        question: "What is significant about this portrait?",
        answer: "<a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Raeburn</strong></a> typically painted aristocrats and the elite. Gow was the <strong>only commoner</strong> he painted whose portrait was later engraved for wider distribution."
      }
    ]
  },
  {
    slug: 'nikolai-ge-portrait-of-nikolay-oge-artist39s-father',
    description: `<p><a href="/apps/masterpieces/artist/nikolai-ge"><strong>Nikolai Ge</strong></a> painted this portrait of his father, Nikolay O. Ge, capturing a family member with the same psychological intensity he would bring to his famous historical and religious subjects. Ge was born in Voronezh to a Ukrainian noble family of French origin, and his father Nikolai Osipovich Ge had been married twice. The artist painted this portrait during a visit to his father's estate.</p>
<p>Nikolai Ge (1831-1894) became one of the most influential painters in the development of <strong>Russian Symbolism</strong>. He was famous for works on historical and religious subjects that combined realistic technique with profound emotional depth. His portraits of family members reveal a more intimate side of his artistic practice.</p>
<p>The painting is held at the <a href="/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv, Ukraine. Ge's works can also be found at the Tretyakov Gallery in Moscow and other major Russian collections. This portrait demonstrates his ability to convey <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>psychological depth</strong></a> even in intimate family subjects.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr\"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv, Ukraine."
      },
      {
        question: "Who was Nikolai Ge?",
        answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Nikolai Ge</strong></a> (1831-1894) was a Russian painter influential in <strong>Russian Symbolism</strong>. He was famous for historical and religious subjects with profound emotional depth."
      },
      {
        question: "What was Ge's family background?",
        answer: "Ge was born to a <strong>Ukrainian noble family of French origin</strong>. His grandfather immigrated to the Russian Empire in the 18th century."
      }
    ]
  }
];

async function main() {
  console.log('Starting portrait artwork enrichment for 20 artworks...\n');

  for (const update of artworkUpdates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title} (${update.slug})`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
