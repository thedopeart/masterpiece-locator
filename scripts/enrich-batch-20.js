const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'edvard-munch-night',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Night in Saint-Cloud in 1890, creating what became a memorial to his father Christian, who had died the previous year. The oil on canvas measures 64.5 x 54 cm and shows an empty room with moonlight streaming through a window. A solitary figure sits in shadow, barely visible against the <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> darkness.</p>
<p>Munch created this work in France, where he'd traveled on a state fellowship to study with Leon Bonnat. His father's death was traumatic, instilling a newfound interest in <strong>spirituality and symbolism</strong>. The painting first appeared at the National Annual Autumn Exhibition in 1890 under the simple title "Night."</p>
<p>The conversion of grief into art culminated during spring 1890 in two paintings: this somber interior and the contrasting Spring Day on Karl Johan Street. Together they represent death and life, darkness and light. This brooding work shows Munch moving toward the <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style that would define his career. The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-norway"><strong>National Gallery of Norway</strong></a> in Oslo.</p>`,
    faqs: [
      {
        question: "Where can I see Edvard Munch's Night?",
        answer: `Night in Saint-Cloud is displayed at the <a href="/apps/masterpieces/museum/national-gallery-of-norway"><strong>National Gallery of Norway</strong></a> in Oslo. The museum purchased it from Dr. Fredrik Arentz's estate in 1917.`
      },
      {
        question: "What inspired Munch to paint Night?",
        answer: `<a href="/apps/masterpieces/artist/edvard-munch"><strong>Munch</strong></a> painted Night as a <strong>memorial to his father</strong>, who died in 1889. The empty room and solitary figure reflect his grief.`
      },
      {
        question: "When was Night painted?",
        answer: `Munch created Night in <strong>1890</strong> while studying in France. It was first exhibited that same year at the National Annual Autumn Exhibition.`
      }
    ]
  },
  {
    slug: 'francesco-guardi-nighttime-procession-in-piazza-san-marco',
    description: `<p><a href="/apps/masterpieces/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> painted Nighttime Procession in Piazza San Marco in 1758, capturing a ceremonial event in Venice's most famous square. The oil on canvas measures 48 x 85 cm and shows torchlit figures moving through the darkness, their flames reflected in puddles on the pavement. The Basilica's facade looms in the background, barely visible in the nocturnal atmosphere.</p>
<p>Guardi (1712-1793) was among the last great practitioners of the Venetian School, specializing in vedute, or view paintings. His style differed from the precise architectural views of Canaletto, favoring instead a looser, more atmospheric approach. The soft <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> glow of torchlight against blue-black shadows creates an almost theatrical effect.</p>
<p>The procession likely included the Doge and Patriarch of Venice, though identifying specific figures proves difficult in the flickering light. British collector Joseph Smith commissioned several works from Guardi during this period. The painting was later trimmed from its original size. It hangs at the <a href="/apps/masterpieces/museum/ashmolean-museum"><strong>Ashmolean Museum</strong></a> in Oxford.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `Nighttime Procession in Piazza San Marco is displayed at the <a href="/apps/masterpieces/museum/ashmolean-museum"><strong>Ashmolean Museum</strong></a> in Oxford, UK.`
      },
      {
        question: "What style is this painting?",
        answer: `<a href="/apps/masterpieces/artist/francesco-guardi"><strong>Guardi</strong></a> painted this in the <strong>Baroque veduta</strong> style, depicting Venice's urban scenery with atmospheric, painterly brushwork.`
      },
      {
        question: "How big is the painting?",
        answer: `The painting measures <strong>48 x 85 cm</strong>. It was originally larger but was trimmed at some point in its history.`
      }
    ]
  },
  {
    slug: 'nordic-summer-evening',
    description: `<p><a href="/apps/masterpieces/artist/richard-bergh"><strong>Richard Bergh</strong></a> painted Nordic Summer Evening between 1899 and 1900, creating one of Sweden's most recognized artworks. The oil on canvas shows a man and woman standing on a veranda, gazing out over still water as the last orange light of sunset fades. The models were Prince Eugen of Sweden and singer Karin Pyk.</p>
<p>The composition is strikingly symmetrical, influenced by early Renaissance painting that Bergh studied during a winter in Florence in 1898-99. The woman's figure was sketched in Assisi, Italy, while the man posed in the Stockholm archipelago. This unusual geographic separation gives the scene its psychological tension. The figures stand together yet seem emotionally distant.</p>
<p>Bergh (1858-1919) served as director of the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm"><strong>Nationalmuseum</strong></a> in Stockholm and championed Swedish art despite spending years in France. He preferred <strong>Naturalism</strong> to Impressionism, admiring painters like <a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a>. This painting became symbolic of Swedish <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> romanticism. It hangs at the <a href="/apps/masterpieces/museum/gothenburg-museum-of-art"><strong>Gothenburg Museum of Art</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Nordic Summer Evening?",
        answer: `Nordic Summer Evening is displayed at the <a href="/apps/masterpieces/museum/gothenburg-museum-of-art"><strong>Gothenburg Museum of Art</strong></a> in Sweden. It's one of the country's most famous paintings.`
      },
      {
        question: "Who are the figures in the painting?",
        answer: `The models were <strong>Prince Eugen of Sweden</strong> and singer <strong>Karin Pyk</strong>. They posed separately, the woman in Italy and the man in Stockholm.`
      },
      {
        question: "What art movement does this represent?",
        answer: `<a href="/apps/masterpieces/artist/richard-bergh"><strong>Richard Bergh</strong></a> created this during the <strong>National Romantic</strong> period in Swedish art, blending naturalism with symbolic meaning.`
      }
    ]
  },
  {
    slug: 'francis-picabia-notre-dame-the-effect-of-sunlight',
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted Notre Dame, the Effect of Sunlight in 1906, years before he became a leader of the Dada movement. The oil on canvas measures approximately 67 x 74 cm and depicts the cathedral's facade bathed in warm light. The brushwork is loose and atmospheric, showing clear <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> influence.</p>
<p>Picabia met the sons of Camille Pissarro in 1902 and began experimenting with Impressionism. By 1905, he'd signed a three-year contract with a dealer. But critics noticed something odd about his sunlit haystacks and cathedral views. They "practically shout Monet." In fact, Picabia often copied photographic postcards rather than painting en plein air. His Notre Dame facade shows this borrowed approach.</p>
<p>This early success wouldn't last. Picabia grew restless with Impressionism and moved through Cubism to become a founding figure of Dada in both America and France. The cathedral he painted in golden <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> light represented everything the later Picabia would reject. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What style is this painting?",
        answer: `Notre Dame, the Effect of Sunlight is painted in an <strong>Impressionist style</strong>, before <a href="/apps/masterpieces/artist/francis-picabia"><strong>Picabia</strong></a> became famous for Dada and Surrealism.`
      },
      {
        question: "When did Picabia paint this?",
        answer: `Picabia created this work in <strong>1906</strong>, during his Impressionist period. He would later abandon this style for radical abstraction.`
      },
      {
        question: "Where can I see this painting?",
        answer: `Notre Dame, the Effect of Sunlight is currently in a <strong>private collection</strong> and not on public display.`
      }
    ]
  },
  {
    slug: 'albrecht-durer-nude',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> created this nude study in 1493, a pen and ink drawing in the Northern Renaissance style. The work reflects Dürer's interest in the human form at a time when such studies were common in Italy but rare in Germany. Finding models willing to pose nude proved difficult north of the Alps, a problem Dürer repeatedly complained about.</p>
<p>Dürer made two trips to Italy, in the mid-1490s and again between 1505-1507. In Venice, he encountered artists exploring <strong>classical proportion</strong> and anatomical accuracy. He studied the work of Mantegna and Pollaiuolo, absorbing their interest in the body's structure. His drawings and engravings from this period show these Italian influences adapted to a distinctly German sensibility.</p>
<p>Giorgio Vasari made condescending remarks about German artists' skill with nudes, suggesting they "generally have less fine figures when naked." Dürer's solution was often to study his own body, resulting in what's considered the first <strong>nude self-portrait</strong> in art history. This drawing hangs at the <a href="/apps/masterpieces/museum/musee-bonnat-helleu"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France.</p>`,
    faqs: [
      {
        question: "Where can I see Dürer's Nude?",
        answer: `This drawing is housed at the <a href="/apps/masterpieces/museum/musee-bonnat-helleu"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France.`
      },
      {
        question: "Why did Dürer draw nude studies?",
        answer: `<a href="/apps/masterpieces/artist/albrecht-durer"><strong>Dürer</strong></a> was influenced by Italian <strong>Renaissance ideals</strong> about the human body. He struggled to find models in Germany, where nudity was less acceptable.`
      },
      {
        question: "What medium is this work?",
        answer: `This is a <strong>pen and ink drawing</strong> from 1493. Dürer also created many nude studies as engravings throughout his career.`
      }
    ]
  },
  {
    slug: 'rembrandt-nude-man-seated-on-the-ground-with-one-leg-extende',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching in 1646, depicting a nude man seated on the ground with one leg extended, viewed from behind. The work measures approximately 10 x 17 cm and demonstrates Rembrandt's mastery of the etching technique. Fine lines build up tone and texture, capturing the play of light across the figure's back.</p>
<p>Rembrandt produced numerous etchings throughout his career, and many survive in multiple impressions across major collections. This particular print exists at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, the Victoria and Albert Museum, Yale University Art Gallery, the Morgan Library, and the National Gallery of Art in Washington.</p>
<p>The composition shows Rembrandt's interest in studying the human form from unusual angles. Rather than an idealized classical pose, he chose a casual seated position that emphasizes the model's weight and presence. The print once bore a forged signature of Pieter de Hooch, a reminder of how sought-after Rembrandt's work became even during his lifetime.</p>`,
    faqs: [
      {
        question: "What medium is this work?",
        answer: `This is an <strong>etching with engraving</strong> on paper, created in 1646. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> was a master printmaker who produced hundreds of etchings.`
      },
      {
        question: "Where can I see this print?",
        answer: `Impressions exist at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, the V&A, Yale, the Morgan Library, and the National Gallery of Art.`
      },
      {
        question: "How big is the etching?",
        answer: `The image measures approximately <strong>10 x 17 cm</strong> (about 4 x 7 inches). Multiple impressions survive in collections worldwide.`
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-nude-with-hat',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted Nude with Hat around 1907, an oil on canvas measuring 80.6 x 50.1 cm. The work shows a nude female figure wearing only a hat, rendered with the elongated forms that would become Modigliani's signature. Her face shows the simplified, mask-like features he developed from studying African and Greek sculpture.</p>
<p>In 2020, X-ray analysis revealed three previously unknown sketches hidden beneath the painting. These incomplete works showed Modigliani's "never-ending search for artistic expression," using the canvas as a kind of sketchbook. The discovery confirmed the painting's authenticity while offering insight into his working process.</p>
<p>Modigliani (1884-1920) lived a short, troubled life in Paris, creating nudes that scandalized his contemporaries. He died poor at 35. A century later, his Reclining Nude sold for $170 million at auction. This earlier work hangs at the <a href="/apps/masterpieces/museum/hecht-museum"><strong>Hecht Museum</strong></a> at the University of Haifa in Israel, a glimpse of the artist developing his distinctive approach to the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>female form</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Nude with Hat?",
        answer: `Nude with Hat is displayed at the <a href="/apps/masterpieces/museum/hecht-museum"><strong>Hecht Museum</strong></a> at the University of Haifa in Israel.`
      },
      {
        question: "What was discovered beneath the painting?",
        answer: `X-rays revealed <strong>three hidden sketches</strong> beneath the paint surface, showing <a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani's</strong></a> experimental process.`
      },
      {
        question: "What style influenced Modigliani's nudes?",
        answer: `Modigliani drew inspiration from <strong>African and Greek sculpture</strong>, developing elongated figures and simplified, mask-like facial features.`
      }
    ]
  },
  {
    slug: 'fernand-leger-nudes-in-the-forest',
    description: `<p><a href="/apps/masterpieces/artist/fernand-leger"><strong>Fernand Léger</strong></a> painted Nudes in the Forest between 1909 and 1910, an oil on canvas measuring roughly 120 x 170 cm. The work shows human figures broken into geometric shapes and blended with their surroundings. Bodies become cylinders, cones, and tubes, earning Léger's style the nickname "Tubism" from critics.</p>
<p>This painting marked Léger's break from Impressionism and his alliance with <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>. He exhibited it at the Salon des Indépendants in 1911, where it established his reputation. His approach differed from Picasso and Braque. While they flattened space, Léger maintained three-dimensional volume. His cylindrical forms reflected the period's fascination with machinery and industrialization.</p>
<p>The <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>neutral</strong></a> palette of grays, greens, and <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>browns</strong></a> creates a monochromatic effect. Light and shadow play across geometric surfaces, building depth without traditional perspective. The painting hangs at the <a href="/apps/masterpieces/museum/kroller-muller-museum"><strong>Kröller-Müller Museum</strong></a> in Otterlo, Netherlands.</p>`,
    faqs: [
      {
        question: "Where can I see Nudes in the Forest?",
        answer: `Nudes in the Forest is displayed at the <a href="/apps/masterpieces/museum/kroller-muller-museum"><strong>Kröller-Müller Museum</strong></a> in Otterlo, Netherlands.`
      },
      {
        question: "What is 'Tubism'?",
        answer: `<strong>Tubism</strong> was a nickname critics gave <a href="/apps/masterpieces/artist/fernand-leger"><strong>Léger's</strong></a> style for its emphasis on cylindrical forms. It distinguished his work from other Cubists.`
      },
      {
        question: "When was Nudes in the Forest first exhibited?",
        answer: `Léger showed Nudes in the Forest at the <strong>Salon des Indépendants in 1911</strong>, where it helped establish him as a major Cubist artist.`
      }
    ]
  },
  {
    slug: 'jean-antoine-watteau-nymph-and-satyr-or-jupiter-and-antiope',
    description: `<p><a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted Nymph and Satyr around 1715-1716, an oval oil on canvas measuring 73.5 x 107.5 cm. The scene comes from Ovid's Metamorphoses: Jupiter disguised as a satyr approaches the sleeping nymph Antiope, lifting her veil to reveal her nude form. It's one of Watteau's most overtly erotic works.</p>
<p>The oval shape was designed for placement above a doorway. The composition echoes this frame, with Antiope's body forming the horizontal axis and her bent legs creating the vertical. The satyr's reaching arms curve parallel to the upper edge, repeating the oval within the image. Scholars debate whether to call the figure Jupiter or simply a satyr, since no identifying symbols like eagles or thunderbolts appear.</p>
<p>Léopold-Philippe d'Arenberg commissioned the work, paying 200 livres in May 1717. The painting passed through private collections in Brussels and Paris before entering the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in 1869. Watteau's <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> elegance and luminous <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> flesh tones influenced later interpretations of classical myths.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `Nymph and Satyr is displayed at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris. It was donated to the museum in 1869.`
      },
      {
        question: "What myth does the painting depict?",
        answer: `The scene shows <strong>Jupiter seducing Antiope</strong> from Ovid's Metamorphoses. The god disguises himself as a satyr to approach the sleeping nymph.`
      },
      {
        question: "Why is the painting oval?",
        answer: `<a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Watteau</strong></a> designed the <strong>oval shape</strong> for placement above a doorway. The composition curves to match this decorative format.`
      },
      {
        question: "How big is the painting?",
        answer: `The oval canvas measures <strong>73.5 x 107.5 cm</strong> (approximately 29 x 42 inches).`
      }
    ]
  },
  {
    slug: 'arnold-bocklin-nymphs-bathing',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted Nymphs Bathing around 1865, a mythological scene rendered in his developing <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> style. The work shows nude female figures bathing in a forest pool at night, their bodies illuminated by fantastical moonlight. Tree trunks and roots glow with vivid magentas and electric blues.</p>
<p>The nocturnal setting allows Böcklin to use color ranges far removed from reality. A yellow fantasy moon lights the scene, creating a dreamlike atmosphere. The composition practically turns the viewer into a "spying satyr," observing a private ritual. This voyeuristic quality runs through much of Böcklin's mythological work.</p>
<p>Böcklin (1827-1901) became one of the most influential <strong>Symbolist</strong> artists, best known for his five versions of Isle of the Dead. His fantastical subjects and heightened colors anticipated Surrealism. The painting hangs at the <a href="/apps/masterpieces/museum/oskar-reinhart-foundation"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland, which holds a significant collection of his <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a> and mythological paintings.</p>`,
    faqs: [
      {
        question: "Where can I see Nymphs Bathing?",
        answer: `Nymphs Bathing is displayed at the <a href="/apps/masterpieces/museum/oskar-reinhart-foundation"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland.`
      },
      {
        question: "What art movement did Böcklin belong to?",
        answer: `<a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> was a leading <strong>Symbolist</strong> painter. His dreamlike mythological scenes influenced later Surrealist artists.`
      },
      {
        question: "What is Böcklin most famous for?",
        answer: `Böcklin is best known for his five versions of <strong>Isle of the Dead</strong>, which inspired musical compositions by Rachmaninoff.`
      }
    ]
  },
  {
    slug: 'jules-bastien-lepage-october',
    description: `<p><a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted October between 1877 and 1878, a monumental oil on canvas measuring 180.7 x 196 cm. The work depicts the potato harvest in his native village of Damvillers, showing a peasant woman crouched in a barren field under gray autumn skies. His cousin Marie-Adèle Robert served as the model.</p>
<p>Exhibited at the Paris Salon of 1879 under the title "Saison d'Octobre: Récolte des Pommes de Terre," the painting established Bastien-Lepage as a leader of the <strong>Naturalist</strong> school. The previous year, his Haymakers had drawn praise from Émile Zola, who called it a masterpiece. Unlike the light-filled Impressionists, Bastien-Lepage emphasized the earthiness of rural labor.</p>
<p>Inspired by Millet and Courbet, he sought to document peasant life with dignity and accuracy. The <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> and muted palette reflect both the season and the backbreaking work of harvest. Followers emerged throughout Europe, including Van Gogh and George Clausen. The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-victoria"><strong>National Gallery of Victoria</strong></a> in Melbourne.</p>`,
    faqs: [
      {
        question: "Where can I see October?",
        answer: `October is displayed at the <a href="/apps/masterpieces/museum/national-gallery-of-victoria"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia.`
      },
      {
        question: "What movement does October represent?",
        answer: `October is a key work of <strong>Naturalism</strong>. <a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Bastien-Lepage</strong></a> led this movement that emphasized honest depictions of rural labor.`
      },
      {
        question: "How big is the painting?",
        answer: `October is a monumental work measuring <strong>180.7 x 196 cm</strong> (approximately 71 x 77 inches).`
      },
      {
        question: "Who is the woman in the painting?",
        answer: `The model was <strong>Marie-Adèle Robert</strong>, Bastien-Lepage's cousin. She posed for three of his major Salon paintings.`
      }
    ]
  },
  {
    slug: 'eugene-delacroix-odalisque',
    description: `<p><a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> painted this Odalisque around 1825, an oil on canvas depicting a reclining nude in an exotic setting. A narghile (water pipe) stands beside the divan, and a Turkish sword scabbard lies across the lower canvas. The woman is an odalisque, a chambermaid or concubine in a sultan's household.</p>
<p>Though Delacroix painted several <a href="/apps/masterpieces/movement/orientalism"><strong>Orientalist</strong></a> scenes in the 1820s, he didn't actually visit the East until 1832, when he joined a diplomatic mission to Morocco. Before that journey, his harem scenes came from imagination and his Parisian model. The "exciting, erotically charged world of harems and hashish" existed only in his mind.</p>
<p>Odalisques became common fantasy figures in 19th-century French painting after Napoleon's invasion of Egypt sparked public fascination with foreign cultures. Delacroix's <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> lie amid luxurious fabrics and exotic objects, embodying European fantasies about the mysterious East. This early work hangs at the <a href="/apps/masterpieces/museum/fitzwilliam-museum"><strong>Fitzwilliam Museum</strong></a> at Cambridge University.</p>`,
    faqs: [
      {
        question: "Where can I see Delacroix's Odalisque?",
        answer: `This Odalisque is displayed at the <a href="/apps/masterpieces/museum/fitzwilliam-museum"><strong>Fitzwilliam Museum</strong></a> at Cambridge University in the UK.`
      },
      {
        question: "What is an odalisque?",
        answer: `An <strong>odalisque</strong> was a female attendant or concubine in a Turkish palace. The term became popular in 19th-century Orientalist painting.`
      },
      {
        question: "Did Delacroix visit the Orient before painting this?",
        answer: `No. <a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Delacroix</strong></a> didn't travel to <strong>North Africa until 1832</strong>. This 1825 work came purely from imagination.`
      }
    ]
  },
  {
    slug: 'frederic-leighton-odalisque',
    description: `<p><a href="/apps/masterpieces/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted Odalisque in 1862, an oil on canvas measuring 90.8 x 45.7 cm. The work shows a young woman in flowing dress, holding a peacock feather fan in her left hand. Leighton drew inspiration from chambermaids employed in seraglios, the Turkish living quarters reserved for wives of Ottoman households.</p>
<p>Leighton (1830-1896) became a leading figure in the Victorian art establishment, serving as President of the Royal Academy from 1878. His classical and historical paintings showed the influence of Renaissance and Baroque masters. The <a href="/apps/masterpieces/movement/orientalism"><strong>Orientalism</strong></a> movement appealed to Victorian audiences fascinated by exotic, Eastern subjects.</p>
<p>The painting's rich <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful</strong></a> palette and detailed textile patterns demonstrate Leighton's technical mastery. An engraving by Lumb Stocks reproduced the image in 1876, spreading its popularity. The original remains in a <strong>private collection</strong>, though Leighton's other works can be seen at Leighton House Museum in London.</p>`,
    faqs: [
      {
        question: "Where can I see Leighton's Odalisque?",
        answer: `This Odalisque is in a <strong>private collection</strong>. Other works by <a href="/apps/masterpieces/artist/frederic-leighton"><strong>Leighton</strong></a> can be seen at Leighton House Museum in London.`
      },
      {
        question: "What is an odalisque?",
        answer: `An <strong>odalisque</strong> was a female slave or concubine in an Ottoman harem. The subject was popular among Victorian artists interested in exotic themes.`
      },
      {
        question: "What style is this painting?",
        answer: `The painting reflects <strong>Orientalism</strong>, a 19th-century movement depicting romanticized Eastern subjects. Leighton combined this with his academic training.`
      }
    ]
  },
  {
    slug: 'wassily-kandinsky-odessa-port',
    description: `<p><a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted Odessa Port in 1898, one of his earliest surviving works. The oil on canvas shows the harbor of the Ukrainian port city where he'd attended gymnasium as a child (1876-1885). Ships and buildings are still clearly recognizable, rendered in an <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> style far from the abstract paintings he would later become famous for.</p>
<p>This landscape is "infinitely far from the Kandinsky familiar to everyone." Another thirteen years would pass before his first abstract canvas. Yet even here, the movement toward abstraction begins. Visible objects remain distinguishable, but their accurate reproduction matters less than capturing light effects. The loose brushwork follows Impressionist principles.</p>
<p>Kandinsky first exhibited his work in Odessa at the Society of South Russian Artists. The city remained important throughout his life. This early <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal</strong></a> scene hangs at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow, offering a glimpse of an abstract pioneer's representational beginnings.</p>`,
    faqs: [
      {
        question: "Where can I see Kandinsky's Odessa Port?",
        answer: `Odessa Port is displayed at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia.`
      },
      {
        question: "What style is this early Kandinsky?",
        answer: `Odessa Port shows <strong>Impressionist</strong> influence, painted before <a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Kandinsky</strong></a> developed his famous abstract style.`
      },
      {
        question: "Why is Odessa significant to Kandinsky?",
        answer: `Kandinsky studied at gymnasium in <strong>Odessa from 1876-1885</strong>. He first exhibited his art there at the Society of South Russian Artists.`
      }
    ]
  },
  {
    slug: 'edmund-blair-leighton-off',
    description: `<p><a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Edmund Blair Leighton</strong></a> painted Off in 1899, one of his many medieval scenes depicting moments of romantic departure. Leighton (1852-1922) specialized in historical genre painting, particularly knights and their ladies in courtly settings. His polished, almost photographic technique appealed to Victorian audiences who loved chivalric romance.</p>
<p>The painting belongs to a series exploring similar themes of separation and devotion. His more famous God Speed (1900) shows a maiden tying a red sash around her knight's arm, a token he must return. The Accolade (1901) depicts a knighting ceremony. These images of <strong>medieval romance</strong> became some of the most reproduced paintings of their era, appearing in poster shops worldwide.</p>
<p>Leighton exhibited annually at the Royal Academy from 1878 to 1920. While the Pre-Raphaelites dominated the British art scene, he carved out his niche with careful historical detail and sentimental <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a>. Off hangs at the <a href="/apps/masterpieces/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Edmund Blair Leighton's Off?",
        answer: `Off is displayed at the <a href="/apps/masterpieces/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a> in England.`
      },
      {
        question: "What is Off about?",
        answer: `<a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Leighton's</strong></a> Off depicts a <strong>medieval departure scene</strong>, likely showing lovers parting before a knight goes to battle or quest.`
      },
      {
        question: "What is Edmund Blair Leighton famous for?",
        answer: `Leighton is famous for <strong>medieval romance paintings</strong> like God Speed and The Accolade, which remain widely reproduced today.`
      }
    ]
  },
  {
    slug: 'johannes-vermeer-officer-and-laughing-girl',
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted Officer and Laughing Girl around 1657, an oil on canvas measuring 50.5 x 46 cm. A dashing soldier in shadow fills the foreground, his back to us, while a young woman in <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> dress leans forward into morning light, her face animated by a smile. A large map of Holland and West Friesland hangs on the wall behind them.</p>
<p>The woman resembles Catharina Bolnes, Vermeer's wife, who likely posed for many of his paintings. The soldier's dramatic placement uses <strong>repoussoir</strong>, a technique where foreground objects increase the sense of depth. Ultramarine blue in the wall's shadows produces sparkling light that has "no precedent in European painting."</p>
<p>Some scholars suggest Vermeer used a camera obscura, an optical device that may explain certain artifacts in his perspective. The map, a Willem Blaeu chart, appears in three of his works, suggesting he owned it. The painting once bore a forged Pieter de Hooch signature. Henry Clay Frick purchased it in 1911. It hangs at the <a href="/apps/masterpieces/museum/frick-collection"><strong>Frick Collection</strong></a> in New York.</p>`,
    faqs: [
      {
        question: "Where can I see Officer and Laughing Girl?",
        answer: `Officer and Laughing Girl is displayed at the <a href="/apps/masterpieces/museum/frick-collection"><strong>Frick Collection</strong></a> in New York City. It's one of three Vermeers in the collection.`
      },
      {
        question: "Who is the woman in the painting?",
        answer: `The model resembles <strong>Catharina Bolnes</strong>, <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer's</strong></a> wife, who is believed to have posed for many of his paintings.`
      },
      {
        question: "What is the map on the wall?",
        answer: `The map is a <strong>Willem Blaeu chart</strong> of Holland and West Friesland. Vermeer owned it and used it in three of his paintings.`
      },
      {
        question: "How big is the painting?",
        answer: `Officer and Laughing Girl measures <strong>50.5 x 46 cm</strong> (approximately 20 x 18 inches).`
      }
    ]
  },
  {
    slug: 'theodore-gericault-officer-of-the-chasseurs-charging-on-horseback-cha',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted Officer of the Chasseurs Charging on Horseback around 1812, a large oil on canvas showing a Napoleonic cavalry officer ready to attack. The horse rears dramatically, its rider twisting in the saddle to face an unseen threat. This was Géricault's first exhibited work, establishing him as a major talent at just twenty-one.</p>
<p>The composition recalls Jacques-Louis David's Napoleon Crossing the Alps, but Géricault moves away from classical restraint. The <strong>diagonal arrangement</strong> and vigorous paint handling signal French <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>. Thick impasto gives the horse and rider a three-dimensional quality. The turning figure derives from Rubens' early Saint George, though viewed from a different angle.</p>
<p>The Chasseurs were elite cavalry, symbols of French military prowess during the Napoleonic Wars. Géricault would continue pushing away from classicism, culminating in his masterpiece The Raft of the Medusa (1818-19). The painting shows <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> and rider in dynamic motion. It remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `Officer of the Chasseurs Charging on Horseback is currently in a <strong>private collection</strong>. <a href="/apps/masterpieces/artist/theodore-gericault"><strong>Géricault's</strong></a> Raft of the Medusa can be seen at the Louvre.`
      },
      {
        question: "What art movement does this represent?",
        answer: `The painting represents early French <strong>Romanticism</strong>. Its dramatic diagonal composition and vigorous brushwork moved away from classical restraint.`
      },
      {
        question: "Who were the Chasseurs?",
        answer: `The <strong>Chasseurs</strong> were elite French cavalry during the Napoleonic Wars, known for their bravery and tactical importance in battle.`
      }
    ]
  },
  {
    slug: 'gerrit-dou-officer-of-the-marksman-society-in-leiden',
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> painted Officer of the Marksman Society in Leiden around 1630, an oil on oak panel measuring 66 x 51 cm. The work depicts a civic guard officer in armor, representing the militia companies that protected Dutch cities during the Golden Age. These marksman societies, or schutterijen, commissioned many group <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a>.</p>
<p>Dou (1613-1675) was Rembrandt's first pupil, studying with the master in Leiden before developing his own distinctive style. He became famous for small, highly detailed paintings that showed off technical virtuosity. The precise rendering of armor, fabric, and flesh in this portrait demonstrates why collectors prized his work.</p>
<p>The Leiden marksman societies played important civic roles, marching in parades and maintaining order. Officers like this figure held positions of prestige. The <strong>Baroque</strong> style combines careful observation with dramatic lighting. The painting hangs at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts"><strong>Budapest Museum of Fine Arts</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `Officer of the Marksman Society in Leiden is displayed at the <a href="/apps/masterpieces/museum/budapest-museum-of-fine-arts"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary.`
      },
      {
        question: "What was a marksman society?",
        answer: `<strong>Marksman societies</strong> (schutterijen) were civic guard militias that protected Dutch cities. They commissioned many portraits during the Golden Age.`
      },
      {
        question: "Who taught Gerrit Dou?",
        answer: `<a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> was <strong>Rembrandt's first pupil</strong>, studying with the master in Leiden before developing his own detailed style.`
      }
    ]
  },
  {
    slug: 'wassily-kandinsky-okhtyrka-autumn',
    description: `<p><a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted Okhtyrka, Autumn in 1901, an oil on canvas from his early <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> period. The work depicts a meadow scene from Okhtyrka, a town in what is now Ukraine. Kandinsky had not yet developed the abstract style that would make him famous. Objects remain recognizable, rendered with loose brushwork that captures autumn light.</p>
<p>This painting comes from an important transitional period. The works of those years were "basically landscapes, based on color discords." The play of color spots and lines was gradually replacing images of reality. Okhtyrka, Autumn stands alongside other transitional works like Sluice (1901), Old Town (1902), and Blue Rider (1903).</p>
<p>In 1901, Kandinsky also founded Phalanx, an art group in Munich, and started teaching. His movement toward <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>abstraction</strong></a> would accelerate over the next decade. The painting hangs at the <a href="/apps/masterpieces/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich, which holds the world's largest collection of Kandinsky's work.</p>`,
    faqs: [
      {
        question: "Where can I see Okhtyrka, Autumn?",
        answer: `Okhtyrka, Autumn is displayed at the <a href="/apps/masterpieces/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich, Germany, which has the largest Kandinsky collection.`
      },
      {
        question: "What period does this represent in Kandinsky's career?",
        answer: `This is from <a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Kandinsky's</strong></a> early <strong>Post-Impressionist period</strong>, years before he developed his famous abstract style.`
      },
      {
        question: "What is Okhtyrka?",
        answer: `<strong>Okhtyrka</strong> is a town in what is now Ukraine. Kandinsky painted several landscapes from this location around 1901.`
      }
    ]
  },
  {
    slug: 'edvard-munch-old-aker-church',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Old Aker Church in 1881, the year he abandoned engineering to study art at the Royal School of Art and Design. The small oil on board measures just 16 x 21 cm and depicts Oslo's oldest remaining building in a <strong>Realist</strong> style far from the Expressionism he would later develop.</p>
<p>The Munch Museum holds an interesting set of three drawings showing the same motif at different stages of completion, with the final version developed into this oil painting. Such step-by-step documentation is unusual. The drawings were likely produced as part of a formal art exercise during Munch's training.</p>
<p>Telthusbakken and Old Aker Church were subjects Munch painted repeatedly as a young man. The medieval stone church still stands today, a Romanesque structure dating to around 1100. This early <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> landscape shows an eighteen-year-old artist just beginning his journey. The painting hangs at the <a href="/apps/masterpieces/museum/munch-museum"><strong>Munch Museum</strong></a> in Oslo.</p>`,
    faqs: [
      {
        question: "Where can I see Old Aker Church?",
        answer: `Old Aker Church is displayed at the <a href="/apps/masterpieces/museum/munch-museum"><strong>Munch Museum</strong></a> in Oslo, Norway.`
      },
      {
        question: "When did Munch paint this?",
        answer: `<a href="/apps/masterpieces/artist/edvard-munch"><strong>Munch</strong></a> painted Old Aker Church in <strong>1881</strong>, the year he quit engineering to study art at the Royal School of Art and Design.`
      },
      {
        question: "What is Old Aker Church?",
        answer: `<strong>Old Aker Church</strong> is Oslo's oldest remaining building, a Romanesque stone church dating to around 1100 CE.`
      },
      {
        question: "How big is the painting?",
        answer: `Old Aker Church is a small work, measuring only <strong>16 x 21 cm</strong> (approximately 6 x 8 inches), painted on board.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment for 20 artworks...\n');

  for (const artwork of artworks) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
