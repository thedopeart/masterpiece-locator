/**
 * Enrich 20 artworks with descriptions and FAQs (Jan 23 batch 2)
 * Run: node scripts/enrich-jan23-batch2.js
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'francis-picabia-moretsurloing',
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this <strong>Impressionist</strong> landscape during his early period at Moret-sur-Loing, a village that had captivated Sisley, Monet, and Renoir in the 1880s and 1890s. Between 1903 and 1907, the young Picabia stayed regularly in the area, deeply influenced by Alfred Sisley's work.</p>
<p>Before becoming a Dadaist provocateur, Picabia mastered Impressionist techniques and exhibited successfully at prestigious Paris salons. His admiration for Sisley was so strong that he helped raise funds for a monument to the artist at Moret. Critics praised his work as personal and unique rather than derivative of the Impressionist masters.</p>
<p>This early success proved brief. By 1909, Picabia had moved to Fauvism, then Cubism by 1911. His Impressionist period lasted only about four years, but it set the tone for his restless creative evolution. The painting is currently in a private collection.</p>`,
    faqs: [
      {
        question: "What style is this painting?",
        answer: "This is an <strong>Impressionist</strong> landscape from <a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia's</strong></a> early period (1903-1907). He later became famous for Dadaism, abandoning Impressionism by 1909."
      },
      {
        question: "Why did Picabia paint at Moret-sur-Loing?",
        answer: "<strong>Moret-sur-Loing</strong> had attracted Impressionist masters like Sisley, Monet, and Renoir. Picabia stayed there regularly between 1904-1907, deeply influenced by Alfred Sisley's paintings of the area."
      },
      {
        question: "Where is this painting now?",
        answer: "The painting is held in a <strong>private collection</strong>. Many of Picabia's early Impressionist works remain in private hands."
      }
    ]
  },
  {
    slug: 'edward-burne-jones-morgan-le-fay',
    description: `<p><a href="/apps/masterpieces/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> created this depiction of <strong>Morgan Le Fay</strong> in 1862, drawing from Thomas Malory's "Le Morte d'Arthur." The Pre-Raphaelite artist portrayed King Arthur's half-sister, a figure who embodies both magical power and moral ambiguity in Arthurian legend.</p>
<p>Burne-Jones was deeply invested in medieval themes throughout his career. Morgan Le Fay, sometimes cast as healer and sometimes as villain in the legends, gave him rich material for exploring the complex female figures that fascinated the Pre-Raphaelite Brotherhood. The oil on canvas measures 96.52 by 48.26 centimeters.</p>
<p>The painting now hangs at the <a href="/apps/masterpieces/museum/leighton-house-museum-london-uk"><strong>Leighton House Museum</strong></a> in London as part of the Cecil French Bequest. Burne-Jones also created preparatory studies for the figure, including a head study made in 1885.</p>`,
    faqs: [
      {
        question: "Who was Morgan Le Fay?",
        answer: "<strong>Morgan Le Fay</strong> is King Arthur's half-sister in Arthurian legend. She's depicted as both a powerful sorceress and a morally complex figure, sometimes healing Arthur and sometimes plotting against him."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/leighton-house-museum-london-uk\"><strong>Leighton House Museum</strong></a> in London. It's part of the Cecil French Bequest to the London Borough of Hammersmith and Fulham."
      },
      {
        question: "What art movement was Burne-Jones part of?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> was a leading <strong>Pre-Raphaelite</strong> artist known for medieval and mythological subjects. He worked closely with William Morris and Dante Gabriel Rossetti."
      }
    ]
  },
  {
    slug: 'francis-picabia-morning-effect-banks-of-the-yonne-river',
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this river scene during his <strong>Impressionist period</strong>, capturing the atmospheric light effects on the Yonne River's banks. Like his other early works, this painting shows his mastery of the techniques pioneered by Sisley and Pissarro.</p>
<p>The young Picabia completed series of works depicting the same sites under different weather conditions, seasons, and times of day. A 1905 solo exhibition at the prestigious Galerie Haussmann featured 61 such works, earning praise from critic Leon Roger-Miles for understanding the "long effort it took Sisley and Pissarro to conquer light."</p>
<p>This painting reflects <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a> rendered through the Impressionist lens of capturing momentary light conditions. Currently in a private collection, it represents the brief but successful period before Picabia moved toward more radical artistic experiments.</p>`,
    faqs: [
      {
        question: "When did Picabia paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia</strong></a> created this work during his <strong>Impressionist period</strong> (1903-1908). His interest in Impressionism was brief, lasting only about four years before he moved to Fauvism."
      },
      {
        question: "What technique did Picabia use?",
        answer: "Picabia used <strong>Impressionist techniques</strong> to capture light effects on the river. He created series showing the same locations at different times of day and in different seasons."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting is currently in a <strong>private collection</strong>. Picabia's early Impressionist landscapes are less well-known than his later Dadaist works."
      }
    ]
  },
  {
    slug: 'morning-in-a-pine-forest',
    description: `<p><a href="/apps/masterpieces/artist/ivan-shishkin"><strong>Ivan Shishkin</strong></a> created this beloved scene in 1889, showing a mother <a href="https://luxurywallart.com/collections/bear-paintings" target="_blank" rel="noopener"><strong>bear</strong></a> and her three cubs playing on a fallen pine trunk in a misty forest glade. The massive canvas measures 139 by 213 centimeters. Though Shishkin painted the magnificent forest landscape, the bears were actually rendered by his friend <strong>Konstantin Savitsky</strong>.</p>
<p>The collaboration sparked controversy. Both artists originally signed the work, but when collector Pavel Tretyakov purchased it, he was upset to see Savitsky's name. Tretyakov personally removed Savitsky's signature with turpentine, declaring the painting belonged entirely to Shishkin's creative vision. Shishkin did share his fee, giving Savitsky one thousand of the four thousand rubles he received.</p>
<p>The painting became one of Russia's most recognizable images after appearing on "Mishka Kosolapy" chocolate wrappers made by the Red October factory. Today it hangs at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg. Shishkin likely based the forest on Gorodomlya Island in Lake Seliger, an area untouched by human civilization.</p>`,
    faqs: [
      {
        question: "Who painted the bears in Morning in a Pine Forest?",
        answer: "<strong>Konstantin Savitsky</strong> painted the bears while <a href=\"/apps/masterpieces/artist/ivan-shishkin\"><strong>Ivan Shishkin</strong></a> created the forest landscape. Pavel Tretyakov removed Savitsky's signature after purchasing the work."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in Saint Petersburg, Russia. It's one of the museum's most popular works."
      },
      {
        question: "Why is this painting so famous in Russia?",
        answer: "The image appeared on <strong>Red October chocolate wrappers</strong>, making it familiar to generations of Russians. The bears became cultural icons associated with childhood and the sweet taste of candy."
      },
      {
        question: "How large is this painting?",
        answer: "The canvas measures <strong>139 x 213 cm</strong> (approximately 55 x 84 inches). It was created in 1889, during the height of Russian Realism."
      }
    ]
  },
  {
    slug: 'morning-interior-luce',
    description: `<p><a href="/apps/masterpieces/artist/maximilien-luce"><strong>Maximilien Luce</strong></a> created this intimate scene in 1890, showing a man sitting on the edge of his bed putting on his shoes in the soft light of morning. The <strong>Pointillist</strong> technique breaks color into tiny dots that merge in the viewer's eye, creating subtle, rich tones throughout the simply furnished room.</p>
<p>Luce was among the founders of Neo-Impressionism alongside Georges Seurat and Paul Signac. Born in Paris in 1858, he combined artistic innovation with anarchist activism, weaving together art, science, and politics. His domestic scenes like this one capture working-class life with dignity and warmth.</p>
<p>The canvas measures 64.8 by 81 centimeters. Color theory was being widely studied at this time, and artists learned that placing colors side by side rather than mixing them created more vibrant effects. The painting now belongs to <a href="/apps/masterpieces/museum/met"><strong>The Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "What technique did Luce use?",
        answer: "<a href=\"/apps/masterpieces/artist/maximilien-luce\"><strong>Maximilien Luce</strong></a> used <strong>Pointillism</strong>, placing tiny dots of color side by side rather than mixing them. At a distance, the viewer's eye blends the colors together."
      },
      {
        question: "Where is Morning, Interior displayed?",
        answer: "The painting is held at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It measures 64.8 x 81 cm and was created in 1890."
      },
      {
        question: "What art movement was Luce part of?",
        answer: "Luce was a founder of <strong>Neo-Impressionism</strong> alongside Georges Seurat and Paul Signac. He was also known for his anarchist political activism."
      }
    ]
  },
  {
    slug: 'frederic-edwin-church-morning-looking-east-over-the-hudson-valley-from-c',
    description: `<p><a href="/apps/masterpieces/artist/frederic-edwin-church"><strong>Frederic Edwin Church</strong></a> painted this radiant sunrise view in 1848, capturing the Hudson Valley from the Catskill <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>Mountains</strong></a> at dawn. The canvas fills with warm golden and pink light heralding a new day, while the valley below lies shrouded in delicate mist. A lone figure silhouetted against the rising sun adds scale and solitude.</p>
<p>Church was the star pupil of Thomas Cole, founder of the <strong>Hudson River School</strong>. Both were devout Protestants whose beliefs shaped their landscape paintings. This early work displays Church's romantic heritage and his ability to capture the spiritual dimension of American wilderness.</p>
<p>The painting shows the luminism style that characterized Church's early career before he turned to more dramatic subjects from South America and the Arctic. It now hangs at the <a href="/apps/masterpieces/museum/albany-institute-of-history-and-art-albany-ny-us"><strong>Albany Institute of History and Art</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "What art movement is this painting part of?",
        answer: "This work belongs to the <strong>Hudson River School</strong> and displays the <strong>Luminist</strong> style. <a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> was the leading student of the movement's founder, Thomas Cole."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting is housed at the <a href=\"/apps/masterpieces/museum/albany-institute-of-history-and-art-albany-ny-us\"><strong>Albany Institute of History and Art</strong></a> in Albany, New York."
      },
      {
        question: "When was this painted?",
        answer: "Church created this work in <strong>1848</strong>, early in his career. He began by painting classic Hudson River School scenes before later exploring more exotic locations."
      }
    ]
  },
  {
    slug: 'abraham-bloemaert-moses-striking-the-rock',
    description: `<p><a href="/apps/masterpieces/artist/abraham-bloemaert"><strong>Abraham Bloemaert</strong></a> painted this biblical scene in 1596, depicting Moses drawing water from a rock for the Israelites during their flight from Egypt. The painting measures 79.7 by 108 centimeters and is signed and dated at the lower right.</p>
<p>Though the subject is Moses, Bloemaert gives him relatively little prominence. In the middle ground at left, nearly hidden in shadow, Moses performs the miracle while more prominent figures dominate the foreground. A monumental bare-breasted woman carrying a water pitcher draws the eye, revealing the Dutch artist's priority: depicting idealized bodies inspired by contemporary Italian art.</p>
<p>The extended, contorted, preternaturally muscled figures are hallmarks of <strong>Mannerism</strong>, the late Renaissance style Bloemaert championed. <a href="/apps/masterpieces/museum/met"><strong>The Metropolitan Museum of Art</strong></a> acquired the work in 1972. Its provenance may include Jan Vincent Coster of Amsterdam in 1622.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The painting is held at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The museum acquired it in 1972 through a gift by exchange."
      },
      {
        question: "What biblical scene does this show?",
        answer: "The painting depicts <strong>Moses striking a rock</strong> to provide water for the Israelites during their exodus from Egypt. The scene comes from the Old Testament book of Exodus."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/abraham-bloemaert\"><strong>Abraham Bloemaert</strong></a> painted in the <strong>Mannerist</strong> style, characterized by elongated, idealized figures influenced by Italian Renaissance art."
      },
      {
        question: "How large is this painting?",
        answer: "The canvas measures <strong>79.7 x 108 cm</strong> (approximately 31 x 42.5 inches). Bloemaert signed and dated it \"A·Blomaert·fe / ao·1596\" at the lower right."
      }
    ]
  },
  {
    slug: 'giorgione-moses-undergoing-trial-by-fire',
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted this unusual religious scene between 1502 and 1505, depicting a trial from the Talmud rather than the Christian Bible. The episode shows the infant Moses choosing between gold and burning coals, a story used to test whether he posed a threat to Pharaoh's throne.</p>
<p>The oil on panel measures 90 by 72 centimeters. Together with its pendant painting "The Judgement of Solomon," this work arrived at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in 1795 from the Medici Villa of Poggio Imperiale. Both were originally attributed to Giovanni Bellini. The choice of a Talmudic subject suggests the patron was an acculturated person not strictly following official Roman Catholic positions.</p>
<p>The horizontal composition gives importance to the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a>, showing influences from Northern European painting in its care for detail. Giorgione, alongside his younger contemporary Titian, founded the Venetian school characterized by rich color and poetic mood.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It arrived there in 1795 from the Medici Villa of Poggio Imperiale."
      },
      {
        question: "What story does this painting depict?",
        answer: "The scene comes from the <strong>Talmud</strong>, not the Bible. It shows the infant Moses choosing between gold and burning coals to prove he wasn't a threat to Pharaoh."
      },
      {
        question: "Who painted this work?",
        answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> created this between 1502-1505. He founded the Venetian school of painting alongside his student Titian, known for poetic, atmospheric works."
      }
    ]
  },
  {
    slug: 'umberto-boccioni-mother-and-child',
    description: `<p><a href="/apps/masterpieces/artist/umberto-boccioni"><strong>Umberto Boccioni</strong></a> created this pastel on paper in 1906 while in Paris, years before he became a founding spirit of <strong>Italian Futurism</strong>. The intimate scene of a mother with her child is classified as Impressionist, reflecting his artistic training under Giacomo Balla rather than the explosive, mechanized imagery he would later champion.</p>
<p>Born in 1882 in Reggio Calabria, Boccioni would become one of the most radical voices in twentieth-century art. His ambition was to redefine art for the electrified, industrialized modern world. But in 1906, he was still exploring traditional subjects with gentle brushwork.</p>
<p>This early work shows the artistic foundation that Boccioni would later reject. Currently in a private collection, it captures a quiet domestic moment, worlds away from his later sculptures and paintings celebrating speed and movement. He died in 1916, just ten years after creating this tender scene.</p>`,
    faqs: [
      {
        question: "What style is this painting?",
        answer: "Despite Boccioni's later fame as a <strong>Futurist</strong>, this 1906 work is classified as <strong>Impressionist</strong>. It predates his involvement with the Italian Futurist movement by several years."
      },
      {
        question: "Where was this painting created?",
        answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a> created this pastel in <strong>Paris in 1906</strong>. He was only 24 years old, still developing his artistic vision."
      },
      {
        question: "Where is this painting now?",
        answer: "The work is held in a <strong>private collection</strong>. It's a pastel on paper showing a tender domestic scene quite different from Boccioni's later Futurist works."
      }
    ]
  },
  {
    slug: 'maurice-denis-mother-and-child',
    description: `<p><a href="/apps/masterpieces/artist/maurice-denis"><strong>Maurice Denis</strong></a> explored the universal bond between mother and child throughout his career, finding the divine in everyday domestic scenes. As a founding member of the <strong>Nabis</strong> group, he believed art should convey universal values through intimate, often household subjects.</p>
<p>Denis was the group's chief theoretician, famous for his 1890 declaration that a picture is "essentially a flat surface covered with colors assembled in a certain order." This statement anticipated abstract art, though Denis himself was more interested in sacred themes than pure abstraction.</p>
<p>Motherhood fascinated him. He created entire series of paintings and prints devoted to maternal love, seeing it as a reflection of divine grace. This particular work is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, representing his ongoing exploration of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> and family themes.</p>`,
    faqs: [
      {
        question: "What art movement was Maurice Denis part of?",
        answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Maurice Denis</strong></a> was a founding member of the <strong>Nabis</strong>, a group of French artists active from 1890-1914 who depicted universal values through intimate, domestic scenes."
      },
      {
        question: "Where is this painting displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia."
      },
      {
        question: "Why did Denis paint mother and child subjects?",
        answer: "Denis was fascinated by <strong>maternal love</strong> as a reflection of divine grace. He created entire series devoted to motherhood, finding sacred meaning in everyday domestic moments."
      }
    ]
  },
  {
    slug: 'gerard-ter-borch-mother-combing-the-hair-of-her-child',
    description: `<p><a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this intimate domestic scene around 1652-1653, often called "Hunting for Lice." A mother carefully combs through her son's hair while he waits patiently, clutching an apple. The small oil on panel measures just 33.5 by 29 centimeters.</p>
<p>The boy's white smock and long curls were typical for Dutch boys under six, who wore skirts like girls for practical reasons. Before modern hygiene products existed, regular combing was essential for cleanliness. The subject also carried moral weight: maternal care, orderliness, and cleanliness were the ideal qualities of a good housewife. The lice comb symbolized both physical cleanliness and pure character.</p>
<p>Ter Borch's stepmother Wiesken Matthijs modeled for the woman. The artist's subtle effects of light, refined color gradations, and incomparable rendering of materials make this one of his finest works. It hangs at the <a href="/apps/masterpieces/museum/mauritshuis"><strong>Mauritshuis</strong></a> in The Hague.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands. It measures 33.5 x 29 cm and was created around 1652-1653."
      },
      {
        question: "What is the painting's symbolic meaning?",
        answer: "In the Dutch Golden Age, the <strong>lice comb symbolized</strong> both physical cleanliness and moral purity. Maternal care and orderliness were considered ideal wifely virtues."
      },
      {
        question: "Who modeled for the mother?",
        answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Ter Borch's</strong></a> stepmother <strong>Wiesken Matthijs</strong>, born in 1607, posed for the woman. The Ter Borch family included several accomplished artists."
      }
    ]
  },
  {
    slug: 'thomas-cole-mount-chocorua-new-hampshire',
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this view of <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>Mount Chocorua</strong></a> in 1827, depicting the distinctive granite peak rising 3,490 feet in New Hampshire's White Mountains. The radiant mountainscape features a lake in the foreground with a tiny fisherman in a bright red sweater at the bottom edge.</p>
<p>Cole, often called the "Father of the Hudson River School," first visited the White Mountains in 1827. The area captivated him, and he returned multiple times. While he's best known for allegorical series like "The Voyage of Life" and "The Course of Empire," his White Mountain landscapes capture the spiritual power he found in American wilderness.</p>
<p>Mount Chocorua holds special significance in American art and literature. Its striking silhouette became a symbol of the American spirit for Romantic artists and writers. This painting is currently held in a private collection. Cole sold it directly to James Abraham Hillhouse of New Haven shortly after completing it.</p>`,
    faqs: [
      {
        question: "What mountain does this painting show?",
        answer: "<strong>Mount Chocorua</strong> rises 3,490 feet in New Hampshire's White Mountains. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> first visited the area in 1827 and painted the peak multiple times."
      },
      {
        question: "What art movement is this painting part of?",
        answer: "The painting represents the <strong>Hudson River School</strong>, the first major American art movement. Cole founded the school and inspired artists like Frederic Edwin Church."
      },
      {
        question: "Where is this painting now?",
        answer: "The painting is in a <strong>private collection</strong>. Cole sold it directly to James Abraham Hillhouse of New Haven, Connecticut shortly after painting it in 1827."
      }
    ]
  },
  {
    slug: 'camille-corot-mount-soracte',
    description: `<p><a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> painted this Italian <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> between 1826 and 1827, capturing Mount Soracte rising from the Roman countryside. The small canvas measures 22.4 by 37.8 centimeters. Corot traveled extensively in Italy during these years, developing his approach to landscape painting.</p>
<p>Corot stands as a pivotal figure in art history, bridging Neoclassicism and Impressionism. Claude Monet declared in 1897: "There is only one master here, Corot. We are nothing compared to him, nothing." Edgar Degas called him "still the strongest," saying Corot "anticipated everything."</p>
<p>The painting now belongs to the <a href="/apps/masterpieces/museum/bavarian-state-painting-collections-munich-germany"><strong>Bavarian State Painting Collections</strong></a> in Munich. Corot painted several views of Mount Soracte and the nearby town of Civita Castellana during his Italian travels, capturing the same sites under different lighting conditions.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/bavarian-state-painting-collections-munich-germany\"><strong>Bavarian State Painting Collections</strong></a> in Munich, Germany. It measures 22.4 x 37.8 cm."
      },
      {
        question: "Who was Camille Corot?",
        answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> (1796-1875) was a leading French <strong>Barbizon School</strong> painter who bridged Neoclassicism and Impressionism. Monet and Degas considered him their master."
      },
      {
        question: "Where is Mount Soracte?",
        answer: "<strong>Mount Soracte</strong> rises from the Roman countryside north of Rome, Italy. Corot painted it during his Italian travels in 1826-1827."
      }
    ]
  },
  {
    slug: 'camille-pissarro-mountain-landscape-at-saint-thomas-antilles-unfini',
    description: `<p><a href="/apps/masterpieces/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> was born on Saint Thomas in 1830, and the Caribbean island shaped his early artistic vision. This unfinished <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain landscape</strong></a> dates from his youth on the island, before he departed for Paris in 1855 to study art formally.</p>
<p>Pissarro's father was a merchant who ran a hardware business in Charlotte Amalie. The young artist first painted on the island's docks, developing skills he would later refine in France. He lived in Saint Thomas until 1852, when he left for Venezuela with Danish painter Fritz Melbye, returning briefly before his permanent departure.</p>
<p>Known as the "Father of Impressionism," Pissarro was the only artist to show work at all eight Paris Impressionist exhibitions from 1874 to 1886. He mentored Cezanne, Seurat, Gauguin, and Van Gogh. This early Caribbean work is currently in a private collection, a rare glimpse of his formative years before becoming an Impressionist master.</p>`,
    faqs: [
      {
        question: "Where was Pissarro born?",
        answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> was born on <strong>Saint Thomas</strong> in 1830, when it was part of the Danish West Indies. He lived there until leaving for Paris in 1855."
      },
      {
        question: "Why is this painting called unfinished?",
        answer: "The work appears to be an incomplete study from Pissarro's <strong>early career</strong> on Saint Thomas. He was still developing his skills before formal training in Paris."
      },
      {
        question: "Where is this painting now?",
        answer: "This work is held in a <strong>private collection</strong>. Pissarro's early Caribbean paintings are rare, as most of his famous works were created in France."
      }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-mountain-landscape-with-a-river',
    description: `<p><a href="/apps/masterpieces/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> created this drawing in 1553, using red-brown ink pen and delicate wash on paper. The work measures 22.8 by 33.8 centimeters and bears the artist's inscription "Bruegel 1553" at the bottom left. Mountains rise dramatically while a river winds through the valley below.</p>
<p>Bruegel was active in the 1550s and 1560s, working in several media including painting, drawing, and printmaking. He's acclaimed for being among the first to paint everyday life in a secular context, particularly landscapes and peasant scenes. Scholar Sellink notes that Bruegel repeated compositional schemes across works, using drawings like this to develop ideas.</p>
<p>The drawing now belongs to the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London. Related works include "Southern Cloister in a Valley" in Berlin and "River Landscape" in the Louvre. Scholar Tolnai has regarded this as a convincing original since 1925.</p>`,
    faqs: [
      {
        question: "Where is this drawing displayed?",
        answer: "The drawing is held at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, England. It measures 22.8 x 33.8 cm."
      },
      {
        question: "What medium did Bruegel use?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> used <strong>red-brown ink pen and delicate wash</strong> on paper. He signed and dated it \"Bruegel 1553\" at the bottom left."
      },
      {
        question: "What is Bruegel known for?",
        answer: "Bruegel is celebrated for being among the first to paint <strong>everyday life and landscapes</strong> in a secular context. He's especially famous for his peasant scenes and panoramic views."
      }
    ]
  },
  {
    slug: 'thomas-cole-mountain-sunrise',
    description: `<p><a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> captured the spiritual power of an American <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain</strong></a> <a href="https://luxurywallart.com/collections/sunset-paintings" target="_blank" rel="noopener"><strong>sunrise</strong></a> in this painting. As founder of the Hudson River School, Cole believed landscape painting could convey moral and religious truths. Dawn light flooding over mountain peaks embodied divine presence for this devout Protestant artist.</p>
<p>Cole emigrated from England to America in 1818 and found his calling in the American wilderness. He explored the Hudson Valley, Catskill Mountains, and White Mountains, translating these experiences into paintings that defined how Americans saw their landscape.</p>
<p>The painting is currently in a private collection. Cole's influence extended far beyond his own work. He trained Frederic Edwin Church, who became the most successful American artist of the mid-nineteenth century, and inspired generations of landscape painters to find meaning in natural scenery.</p>`,
    faqs: [
      {
        question: "What art movement is this painting part of?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> founded the <strong>Hudson River School</strong>, the first major American art movement. His landscapes conveyed spiritual and moral meaning through natural scenery."
      },
      {
        question: "Where is this painting now?",
        answer: "The painting is held in a <strong>private collection</strong>. Many of Cole's works remain in private hands rather than museums."
      },
      {
        question: "What influenced Cole's landscape painting?",
        answer: "Cole was a devout <strong>Protestant</strong> who saw divine presence in nature. He believed American wilderness embodied spiritual truths that could elevate viewers morally."
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-mr-and-mrs-andrews',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this portrait around 1750, when he was about twenty-three years old. Robert Andrews and his wife Frances sit at the edge of their Suffolk estate, their land stretching behind them toward the churches where they worshipped and married. By 1750, Robert owned nearly 3,000 acres.</p>
<p>The painting has been called a "triple portrait" of the couple and their land. Gainsborough positioned them unusually on the far left, giving the landscape equal prominence. An unpainted patch on Mrs. Andrews's lap remains mysterious. Some speculate it was reserved for a pheasant her husband shot, others for a baby. The couple eventually had nine children.</p>
<p>The work stayed in the Andrews family until 1960 and was little known before appearing in an Ipswich exhibition in 1927. Today it's one of Gainsborough's most famous works, hanging at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. The ornate carved and gilded frame features curling scrolls of leaves and shells.</p>`,
    faqs: [
      {
        question: "Where can I see Mr and Mrs Andrews?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It measures approximately 70 x 120 cm in its ornate gilded frame."
      },
      {
        question: "Who were the subjects?",
        answer: "<strong>Robert Andrews</strong> (1725-1806) and <strong>Frances Andrews</strong> (c.1732-1780) were a wealthy Suffolk couple. They married when he was 22 and she was 16, eventually having nine children."
      },
      {
        question: "What is the blank space on Mrs Andrews's lap?",
        answer: "The unpainted area remains a <strong>mystery</strong>. Theories suggest <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> planned to add a pheasant her husband shot, or a baby, as their first child was born in 1751."
      },
      {
        question: "Why was this painting unknown for so long?",
        answer: "The painting <strong>stayed in the Andrews family</strong> until 1960. It was rarely exhibited before 1927 and only became iconic in the post-war years."
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-mr-and-mrs-john-gravenor-and-their-daughters-eliza',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this family portrait between 1752 and 1754 after moving to Ipswich from his native Sudbury. John Gravenor was a successful apothecary who turned to local politics in 1754, likely commissioning this portrait to celebrate his new public role.</p>
<p>The nearly square format suggests the picture was intended as an over-mantel decoration. Crossed tree trunks behind the figures allude to matrimony. Gainsborough arranged the family harmoniously beside a wheat field, as if paused on a walk. The girls, Elizabeth and Ann, hold freshly picked flowers while their parents flank them.</p>
<p>The darkening sky contrasts dramatically with the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women's</strong></a> fashionable dresses. Fluid brushstrokes capture light dancing across brightly colored silks. The painting hangs at the <a href="/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut. It measures 90.2 x 90.2 cm."
      },
      {
        question: "Who were the Gravenors?",
        answer: "<strong>John Gravenor</strong> was an Ipswich apothecary who became a local politician in 1754. His wife Ann and daughters <strong>Elizabeth and Ann</strong> posed alongside him in this family portrait."
      },
      {
        question: "What symbols appear in the painting?",
        answer: "The <strong>crossed tree trunks</strong> symbolize marriage. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> placed the family beside a wheat field, suggesting prosperity and fertility."
      }
    ]
  },
  {
    slug: 'george-frederick-watts-mrs-george-augustus-frederick-cavendish-bentinck-a',
    description: `<p><a href="/apps/masterpieces/artist/george-frederick-watts"><strong>George Frederick Watts</strong></a> exhibited this portrait in 1860, depicting Mrs. Cavendish-Bentinck with her children. The large oil on canvas measures 1270 by 1016 millimeters. Watts was a leading Victorian portraitist who painted many of the era's prominent families.</p>
<p>George Cavendish-Bentinck was a passionate admirer of Italian art, particularly Venetian painting. His wife Prudence Penelope also sat for Watts around 1857-1859 in a separate three-quarter-length portrait now at Northampton Museums. The family clearly valued Watts's work and commissioned multiple portraits.</p>
<p>Interestingly, Watts wrote to George Cavendish-Bentinck in 1861: "I have no doubt the frames will do capitally. As far as I am concerned my judgement on frames is worth nothing." W.G.F. Cavendish-Bentinck presented the painting to <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate</strong></a> in 1948, where it remains today.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is displayed at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a> in London. W.G.F. Cavendish-Bentinck presented it to the museum in 1948."
      },
      {
        question: "How large is this painting?",
        answer: "The oil on canvas measures <strong>1270 x 1016 mm</strong> (approximately 50 x 40 inches). <a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>Watts</strong></a> exhibited it in 1860."
      },
      {
        question: "Who was George Frederick Watts?",
        answer: "<strong>George Frederick Watts</strong> (1817-1904) was a leading Victorian painter known for portraits and allegorical works. He painted many prominent British families."
      }
    ]
  },
  {
    slug: 'mary-cassatt-mrs-robert-simpson-cassatt',
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this portrait of her mother, Katherine Kelso Johnston Cassatt, in 1889. The American Impressionist was known for intimate depictions of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> and family members, and her mother was a frequent subject.</p>
<p>Katherine Cassatt (1816-1895) was the matriarch of a prominent Philadelphia family. She supported her daughter's unconventional choice to become an artist and moved to Paris with the family, where Mary built her career among the French Impressionists. Edgar Degas became a close colleague and admirer of Cassatt's work.</p>
<p>Cassatt was the only American artist to exhibit with the Impressionists in Paris. Her portraits of mothers and children became her signature subject, though she never married or had children herself. This painting is currently in a private collection, one of several portraits she made of her mother over the years.</p>`,
    faqs: [
      {
        question: "Who was Mrs. Robert Simpson Cassatt?",
        answer: "<strong>Katherine Kelso Johnston Cassatt</strong> (1816-1895) was <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt's</strong></a> mother. She supported her daughter's art career and moved to Paris with the family."
      },
      {
        question: "Where is this painting now?",
        answer: "The painting is held in a <strong>private collection</strong>. Cassatt painted her mother several times throughout her career."
      },
      {
        question: "What art movement was Mary Cassatt part of?",
        answer: "Cassatt was an <strong>American Impressionist</strong> and the only American to exhibit with the French Impressionists in Paris. Edgar Degas was a close colleague."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment (Jan 23 batch 2)...\n');

  let updated = 0;
  let errors = 0;

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
      updated++;
    } catch (e) {
      console.error(`✗ Error updating ${artwork.slug}: ${e.message}`);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Errors: ${errors}`);

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
