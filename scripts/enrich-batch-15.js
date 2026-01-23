const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'john-william-godward-ianthe',
    description: `<p><a href="/apps/masterpieces/artist/john-william-godward"><strong>John William Godward</strong></a> painted Ianthe in 1889, during a period when his work shifted decisively toward <strong>Neo-Classicism</strong>. The oil on canvas measures 64 x 29.5 cm and depicts a young woman with a garland of violet flowers upon her head. The name Ianthe comes from Greek mythology and means "violet flower," which explains the floral crown.</p>
<p>The subject references a Cretan girl mentioned in Ovid's Metamorphoses. Godward's treatment of the figure shows his trademark attention to <strong>marble textures</strong> and classical drapery. He reportedly perfected his technique for rendering veins and stains on stone while working with architect William Hoff Wontner. The vertical composition draws the eye upward through the figure's pose and the architectural elements behind her.</p>
<p>Godward (1861-1922) was a protégé of Sir Lawrence Alma-Tadema and spent his career painting beautiful <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> in ancient Greek and Roman settings. His style fell out of favor with the rise of modernism. The painting remains in a <strong>private collection</strong> in Edinburgh.</p>`,
    faqs: [
      {
        question: "Who painted Ianthe?",
        answer: `<a href="/apps/masterpieces/artist/john-william-godward"><strong>John William Godward</strong></a>, an English Neo-Classical painter, created Ianthe in 1889. He was known for his depictions of women in ancient Greek and Roman settings.`
      },
      {
        question: "What does the name Ianthe mean?",
        answer: `Ianthe is a Greek name meaning "<strong>violet flower</strong>." The painting shows the subject wearing a garland of violet flowers on her head, referencing this meaning directly.`
      },
      {
        question: "Where can I see Ianthe?",
        answer: `Ianthe is currently held in a <strong>private collection</strong> in Edinburgh, Scotland. It is not on public display at a museum.`
      }
    ]
  },
  {
    slug: 'jan-steen-idlers',
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> painted The Idlers around 1660, a small oil on wood panel measuring just 39 x 30 cm. The work shows peasants lounging in what appears to be a rustic interior, with Steen's characteristic mix of <strong>humor and moral commentary</strong> on display. The figures seem caught in a moment of leisure, perhaps at the edge of idleness crossing into sloth.</p>
<p>Steen (1626-1679) was born in Leiden, the same hometown as Rembrandt. His family ran a tavern, which made them wealthy enough to fund his artistic training and gave him endless material for his genre scenes. He later opened his own brewery and ran an inn, experiences that informed his many <strong>tavern paintings</strong>. The phrase "a Jan Steen household" entered Dutch language to describe a messy, chaotic home.</p>
<p>Like his contemporaries David Teniers the Younger and Adriaen Brouwer, Steen spent his career painting ordinary life with an eye for <strong>moral lessons</strong> hidden in seemingly lighthearted scenes. The Idlers hangs at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where can I see Jan Steen's Idlers?",
        answer: `The Idlers is on permanent display at the <a href="/apps/masterpieces/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum holds several works by Dutch Golden Age masters.`
      },
      {
        question: "What does 'a Jan Steen household' mean?",
        answer: `The Dutch phrase describes a <strong>messy, chaotic home</strong>. It comes from <a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen's</strong></a> many paintings showing rowdy domestic scenes full of disorder and revelry.`
      },
      {
        question: "What style is The Idlers painted in?",
        answer: `The Idlers is a <strong>Dutch Baroque</strong> genre painting from around 1660. Steen specialized in scenes of everyday life with underlying moral messages.`
      }
    ]
  },
  {
    slug: 'arnold-bocklin-idyll',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted Idyll in 1866, an oil on canvas measuring 73 x 98 cm. The work belongs to his <strong>Symbolist</strong> period and depicts nude figures in a mythological landscape. Böcklin often returned to idyllic themes throughout his career, creating several variations on pastoral scenes with classical subjects.</p>
<p>The Swiss painter (1827-1901) became one of the most influential Symbolist artists of the 19th century. His five versions of Isle of the Dead later inspired compositions by Rachmaninoff and other late Romantic composers. Böcklin's work combines <strong>classical mythology</strong> with a darker, more mysterious sensibility that anticipates Surrealism.</p>
<p>Idyll shows Böcklin's skill with the human form and his interest in creating dreamlike atmospheres. The painting hangs at the <a href="/apps/masterpieces/museum/kunsthaus-zurich"><strong>Kunsthaus Zürich</strong></a>, which maintains a dedicated room for his work. The museum holds one of the finest collections of Böcklin's <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>nature</strong></a> and mythological paintings.</p>`,
    faqs: [
      {
        question: "Where can I see Arnold Böcklin's Idyll?",
        answer: `Idyll is housed at the <a href="/apps/masterpieces/museum/kunsthaus-zurich"><strong>Kunsthaus Zürich</strong></a> in Switzerland. The museum has a dedicated room for Böcklin's work.`
      },
      {
        question: "What art movement did Arnold Böcklin belong to?",
        answer: `<a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> was a leading figure in <strong>Symbolism</strong>. His dreamlike, mythological scenes influenced later Surrealist artists.`
      },
      {
        question: "What is Arnold Böcklin most famous for?",
        answer: `Böcklin is best known for his five versions of <strong>Isle of the Dead</strong>, which inspired musical compositions by Rachmaninoff and other Romantic composers.`
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-in-a-barn',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> created In a Barn in 1639, an oil on wood panel typical of his <strong>Dutch Baroque</strong> genre scenes. The painting captures peasant life in a rustic interior, with Van Ostade's characteristic handling of light filtering through openings in the structure. His barn interiors often served as settings for everyday activities and social gatherings among common folk.</p>
<p>Van Ostade (1610-1685) was incredibly prolific. Over 800 of his paintings survive today. According to the biographer Arnold Houbraken, he studied under Frans Hals in Haarlem alongside his brother Isack. The brothers spent most of their careers in that city, documenting the lives of peasants, craftsmen, and tavern-goers.</p>
<p>His barn scenes demonstrate a particular talent for <strong>chiaroscuro</strong>, the interplay of light and shadow that gives depth to these humble spaces. Van Ostade painted variations on this theme throughout his career, sometimes including children at play or farmers at work. The painting captures the <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> and textures of rural Dutch life.</p>`,
    faqs: [
      {
        question: "Who painted In a Barn?",
        answer: `<a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted In a Barn in 1639. He was a Dutch Golden Age artist known for his peasant scenes and tavern interiors.`
      },
      {
        question: "What style is In a Barn?",
        answer: `In a Barn is a <strong>Dutch Baroque genre painting</strong>. Van Ostade specialized in scenes of everyday peasant life with careful attention to light and atmosphere.`
      },
      {
        question: "How many paintings did Adriaen van Ostade create?",
        answer: `Over <strong>800 paintings</strong> by <a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Van Ostade</strong></a> survive today. He was one of the most productive artists of the Dutch Golden Age.`
      }
    ]
  },
  {
    slug: 'konstantin-korovin-in-a-room',
    description: `<p><a href="/apps/masterpieces/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted In a Room in 1919, during one of the most turbulent periods in Russian history. The oil on canvas shows a woman seated at a table, absorbed in reading. Her gaze seems distant, lost in thought. Korovin's <strong>Impressionist</strong> brushwork transforms the scene into something between observation and memory.</p>
<p>The painting may reflect the artist's own search for quiet amid chaos. Painted in post-revolutionary Russia, the domestic interior becomes almost a refuge. The woman's absorption in her book suggests retreat from the turmoil of the outside world. Light plays across surfaces in soft blues, greens, and warm tones, creating an atmosphere of contemplation.</p>
<p>Korovin (1861-1939) was the leading Russian Impressionist painter. After visiting Paris in 1885, he wrote that the Impressionists showed him "everything I was scolded for back home in Moscow." He went on to work as a theatrical designer while continuing to paint intimate scenes like this one. The painting hangs at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      {
        question: "Where can I see Konstantin Korovin's In a Room?",
        answer: `In a Room is displayed at the <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia. The museum holds major collections of Russian art.`
      },
      {
        question: "What art movement influenced Konstantin Korovin?",
        answer: `<a href="/apps/masterpieces/artist/konstantin-korovin"><strong>Korovin</strong></a> was the leading <strong>Russian Impressionist</strong>. He discovered the French Impressionists during a Paris trip in 1885 and embraced their techniques.`
      },
      {
        question: "When was In a Room painted?",
        answer: `Korovin painted In a Room in <strong>1919</strong>, during the turbulent years following the Russian Revolution. The quiet domestic scene may reflect a longing for peace.`
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-in-a-tavern',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> made tavern scenes his specialty throughout his career in 17th-century Haarlem. Taverns provided a crucial social space for lower classes in the northern Netherlands, and painters like Van Ostade documented these establishments filled with drinkers, gamblers, and musicians. His work captures both the rowdy atmosphere and quiet moments of Dutch tavern life.</p>
<p>Van Ostade studied under Frans Hals and worked alongside other genre painters like David Teniers the Younger and Adriaen Brouwer. All three spent their careers depicting ordinary life, though Van Ostade's touch was often gentler than Brouwer's rougher characterizations. The <strong>chiaroscuro lighting</strong> in his tavern interiors creates intimate pools of illumination where figures gather.</p>
<p>The <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> holds examples of Van Ostade's tavern work, including pieces showing peasants drinking and making music. These <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown</strong></a> and amber interiors became his signature, influencing generations of later genre painters.</p>`,
    faqs: [
      {
        question: "Where can I see Adriaen van Ostade's tavern paintings?",
        answer: `The <a href="/apps/masterpieces/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York holds several examples. Many other works are in the Hermitage and various European collections.`
      },
      {
        question: "Why did Van Ostade paint so many tavern scenes?",
        answer: `<strong>Taverns</strong> were central to social life among common people in the Dutch Republic. <a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Van Ostade</strong></a> and other genre painters found endless material in these lively gathering places.`
      },
      {
        question: "Who was Adriaen van Ostade's teacher?",
        answer: `Van Ostade studied under <strong>Frans Hals</strong> in Haarlem. He worked alongside other genre specialists like Adriaen Brouwer who also trained with Hals.`
      }
    ]
  },
  {
    slug: 'pierre-auguste-renoir-in-st-cloud-park',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted In St Cloud Park in 1866, during the formative years of <strong>Impressionism</strong>. The oil on canvas shows Parisians enjoying a popular leisure spot, strolling and conversing in dappled sunlight. Renoir's emerging style is already visible in the way he captures fleeting moments of light and shadow.</p>
<p>The scene unfolds in Saint-Cloud Park, just west of Paris. Two elegantly dressed <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> feature prominently, their relaxed postures suggesting the ease of afternoon leisure. Renoir's palette mixes soft <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>greens</strong></a>, blues, and pinks. The brushwork has that characteristic looseness that would define Impressionist painting.</p>
<p>Renoir (1841-1919) went on to become one of the movement's central figures, known especially for his portrayals of Parisian social life. His fondness for painting women is evident even in this early landscape. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "When did Renoir paint In St Cloud Park?",
        answer: `<a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Renoir</strong></a> created In St Cloud Park in <strong>1866</strong>, during the early development of Impressionism. It shows his emerging style before the movement fully crystallized.`
      },
      {
        question: "Where is Saint-Cloud Park?",
        answer: `<strong>Saint-Cloud Park</strong> is located just west of Paris. It was a popular leisure destination for Parisians in the 19th century and attracted many Impressionist painters.`
      },
      {
        question: "Where can I see In St Cloud Park?",
        answer: `In St Cloud Park is currently in a <strong>private collection</strong> and not on public display. Renoir's work can be seen at major museums worldwide.`
      }
    ]
  },
  {
    slug: 'paul-gauguin-in-the-forest-saint-cloud',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted In the Forest Saint-Cloud in 1873, years before developing the Post-Impressionist style he's famous for. This early oil on canvas is classified as a sketch and study, showing Gauguin working through <strong>Impressionist</strong> techniques. The forest setting near Paris offered the kind of natural subject matter that appealed to painters of this period.</p>
<p>Gauguin was only 25 when he created this work, still working as a stockbroker while painting in his spare time. He wouldn't abandon finance for art until 1882. These early <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> forest scenes show an artist absorbing influences before finding his own path. The handling of foliage and light reflects the plein air approach championed by the Impressionists.</p>
<p>Saint-Cloud's forests, like those at Fontainebleau, attracted artists seeking <strong>natural landscapes</strong> close to the capital. This painting remains in a private collection, a glimpse of Gauguin before Tahiti, before the bold colors and flattened forms that would make him famous.</p>`,
    faqs: [
      {
        question: "When did Gauguin paint In the Forest Saint-Cloud?",
        answer: `<a href="/apps/masterpieces/artist/paul-gauguin"><strong>Gauguin</strong></a> painted In the Forest Saint-Cloud in <strong>1873</strong>. He was still working as a stockbroker and painting in his spare time.`
      },
      {
        question: "What style is In the Forest Saint-Cloud?",
        answer: `This early work is done in an <strong>Impressionist style</strong>, before Gauguin developed his famous Post-Impressionist approach with bold colors and flattened forms.`
      },
      {
        question: "Where can I see In the Forest Saint-Cloud?",
        answer: `In the Forest Saint-Cloud is in a <strong>private collection</strong>. It represents Gauguin's formative period before his breakthrough works.`
      }
    ]
  },
  {
    slug: 'paul-gauguin-in-the-forest-saint-cloud-ii',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> created In the Forest Saint-Cloud II in 1873, a companion piece to his other forest study from that year. This oil on canvas measures 24 x 34 cm and is classified as a <strong>landscape painting</strong> rather than a sketch. The work shows a more developed composition than its counterpart, with careful attention to the arrangement of trees and the play of light through foliage.</p>
<p>At this point, Gauguin was immersed in <strong>Impressionism</strong>. He collected works by Manet, Monet, and Pissarro, who would later become his mentor. The forests around Paris provided ideal subjects for studying light and atmosphere outdoors. This painting captures the dappled <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> light filtering through leaves.</p>
<p>Gauguin wouldn't leave his banking career until nearly a decade later. These early landscapes hint at talent, but nothing yet suggests the radical stylistic departures to come. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "How is this painting different from Gauguin's other Saint-Cloud work?",
        answer: `In the Forest Saint-Cloud II is classified as a finished <strong>landscape</strong> rather than a sketch. It shows more developed composition at 24 x 34 cm.`
      },
      {
        question: "What was Gauguin's day job in 1873?",
        answer: `<a href="/apps/masterpieces/artist/paul-gauguin"><strong>Gauguin</strong></a> worked as a <strong>stockbroker</strong> while painting in his spare time. He didn't become a full-time artist until 1882.`
      },
      {
        question: "Where can I see In the Forest Saint-Cloud II?",
        answer: `The painting is held in a <strong>private collection</strong>. It represents Gauguin's early Impressionist period before his Post-Impressionist breakthrough.`
      }
    ]
  },
  {
    slug: 'robert-delaunay-in-the-garden',
    description: `<p><a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a> painted In the Garden (Dans le jardin) in 1904, when he was just 19 years old. The oil on canvas measures 71.8 x 56.4 cm and shows a table set with bread and coffee in a blooming garden along a sun-dappled path. It's signed and dated "Robert Delaunay 04" in the lower right corner.</p>
<p>This early work shows Delaunay still working under the influence of <strong>Impressionism</strong>, before he developed the abstract, color-focused style called Orphism that would make him famous. The handling of light through leaves and the domestic subject matter connect him to earlier French painting traditions. There's no hint yet of the fragmented color wheels and Eiffel Tower abstractions to come.</p>
<p>The painting was acquired by collectors Iris and B. Gerald Cantor before 1986, then gifted to the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> that same year. It represents a rare glimpse of a major <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>abstract</strong></a> pioneer working in a representational mode.</p>`,
    faqs: [
      {
        question: "Where can I see Robert Delaunay's In the Garden?",
        answer: `In the Garden is part of the permanent collection at the <a href="/apps/masterpieces/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a> in New York City. It was gifted to the museum in 1986.`
      },
      {
        question: "How old was Delaunay when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/robert-delaunay"><strong>Delaunay</strong></a> was only <strong>19 years old</strong> in 1904 when he created In the Garden. It's an early work before his abstract period.`
      },
      {
        question: "What style is In the Garden?",
        answer: `This early painting shows <strong>Impressionist</strong> influence. Delaunay later became famous for Orphism, a style of abstract art focused on pure color relationships.`
      },
      {
        question: "What does the painting show?",
        answer: `The painting depicts a <strong>garden scene</strong> with a table set with bread and coffee along a sun-dappled path. It captures a quiet domestic moment outdoors.`
      }
    ]
  },
  {
    slug: 'carl-larsson-in-the-kitchen-garden',
    description: `<p><a href="/apps/masterpieces/artist/carl-larsson"><strong>Carl Larsson</strong></a> created In the Kitchen Garden in 1883, a watercolor on paper measuring 61 x 93 cm. The work belongs to his <strong>Impressionist</strong> period and depicts a scene in a Swedish kitchen garden with characteristic attention to domestic life. Larsson would become famous for paintings of his home and family at Lilla Hyttnäs in Dalarna.</p>
<p>Larsson met his wife Karin while painting in France. They married in 1883, the same year he created this work. Karin, herself a trained artist, encouraged Carl to paint their home and gardens. After they moved to Sundborn in 1888, their house became the center of both their lives and his art. The garden there has since been recreated as a historic site.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm"><strong>Nationalmuseum</strong></a> in Stockholm, where it's catalogued as NMB 165. Larsson's work captures the warmth of Swedish <a href="https://luxurywallart.com/collections/country-farm-paintings" target="_blank" rel="noopener"><strong>country</strong></a> life with fresh colors and intimate compositions.</p>`,
    faqs: [
      {
        question: "Where can I see Carl Larsson's In the Kitchen Garden?",
        answer: `In the Kitchen Garden is displayed at the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden. It's catalogued as NMB 165.`
      },
      {
        question: "What medium did Carl Larsson use?",
        answer: `Larsson painted In the Kitchen Garden in <strong>watercolor on paper</strong>. The work measures 61 x 93 cm and shows his skill with this challenging medium.`
      },
      {
        question: "What is Carl Larsson famous for?",
        answer: `<a href="/apps/masterpieces/artist/carl-larsson"><strong>Carl Larsson</strong></a> became famous for paintings of his <strong>home and family</strong> at Lilla Hyttnäs in Dalarna, Sweden. His domestic scenes influenced Scandinavian design.`
      }
    ]
  },
  {
    slug: 'john-william-waterhouse-in-the-peristyle',
    description: `<p><a href="/apps/masterpieces/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> painted In the Peristyle in 1874, early in his artistic career. The oil on canvas shows a young girl feeding pigeons on an outdoor balcony surrounded by ancient Greek architecture and lush vegetation. A ceramic vase with plants sits beside a black wooden chair detailed in gold, while birds gather on the light stone floor.</p>
<p>The model wears a white robe revealing one shoulder, with <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> fabric wrapped around her waist. Her long blonde hair and downcast gaze as she scatters food create an intimate moment. Waterhouse was not yet fully embracing the <strong>Pre-Raphaelite</strong> movement at this point, working instead in an academic style influenced by Frederic Leighton and Lawrence Alma-Tadema.</p>
<p>This painting came just a year before the Royal Academy accepted Waterhouse for their summer exhibition. It hangs at <strong>Touchstones Rochdale</strong> (Rochdale Arts & Heritage Service) in England. The classical setting and beautiful female subject would become hallmarks of Waterhouse's later, more famous mythological paintings.</p>`,
    faqs: [
      {
        question: "Where can I see In the Peristyle?",
        answer: `In the Peristyle is displayed at <strong>Touchstones Rochdale</strong> (Rochdale Arts & Heritage Service) in England. It's part of their permanent collection.`
      },
      {
        question: "What is a peristyle?",
        answer: `A <strong>peristyle</strong> is a columned porch or open colonnade surrounding a courtyard in classical architecture. Waterhouse depicts such a space in this painting.`
      },
      {
        question: "What style is In the Peristyle?",
        answer: `Waterhouse painted this in an <strong>academic Romantic</strong> style before fully embracing Pre-Raphaelitism. He was influenced by Lawrence Alma-Tadema's classical scenes.`
      },
      {
        question: "When did Waterhouse paint In the Peristyle?",
        answer: `<a href="/apps/masterpieces/artist/john-william-waterhouse"><strong>Waterhouse</strong></a> created In the Peristyle in <strong>1874</strong>, a year before the Royal Academy accepted him for their summer exhibition.`
      }
    ]
  },
  {
    slug: 'jan-steen-in-the-tavern',
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> painted In the Tavern in 1660, an oil on canvas measuring 69.5 x 63 cm. The scene shows a bustling 17th-century tavern interior with various figures engaged in different activities. At left, an elderly man converses with a serving woman holding a pitcher, while other patrons drink, chat, and play games around a central table.</p>
<p>Steen grew up in a family that ran a tavern, and he later operated his own inn in Leiden. This background gave him firsthand knowledge of these social spaces where <strong>Dutch common folk</strong> gathered to drink, gamble, and make merry. His tavern paintings often contain subtle moral messages about the dangers of idleness and excess, though the warm, subdued lighting makes these scenes inviting rather than preachy.</p>
<p>Details like scattered objects on the floor and a resting dog add realism to the composition. The painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, alongside other masterpieces of the <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth-toned</strong></a> Dutch Golden Age.</p>`,
    faqs: [
      {
        question: "Where can I see Jan Steen's In the Tavern?",
        answer: `In the Tavern is displayed at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, Netherlands. The museum holds many Dutch Golden Age masterpieces.`
      },
      {
        question: "How big is In the Tavern?",
        answer: `The painting measures <strong>69.5 x 63 cm</strong> (approximately 27 x 25 inches). It's an oil on canvas work from 1660.`
      },
      {
        question: "Did Jan Steen run a real tavern?",
        answer: `Yes, <a href="/apps/masterpieces/artist/jan-steen"><strong>Steen</strong></a> grew up in a family tavern and later <strong>operated his own inn</strong> in Leiden. This gave him authentic material for his many tavern scenes.`
      }
    ]
  },
  {
    slug: 'edmund-blair-leighton-in-time-of-peril',
    description: `<p><a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Edmund Blair Leighton</strong></a> painted In Time of Peril in 1897, an oil on canvas measuring 124.5 x 168.9 cm. The scene shows two young princes being spirited away from danger, comforted by their glamorous mother as they arrive at a monastery for protection. Leighton described the setting as "the water gate of a monastery in the fourteenth century."</p>
<p>The painting appeared at the Royal Academy exhibition of 1897, which marked Queen Victoria's 60th anniversary on the throne. Leighton specialized in <strong>chivalric scenes</strong> that resonated with Victorian audiences caught up in the Arthurian Revival. His knights, damsels, and medieval settings offered escapism into a romanticized past.</p>
<p>Leighton (1852-1922) exhibited annually at the Royal Academy from 1878 to 1920. His paintings feature careful attention to lighting and color, often using warm tones and soft illumination to create dreamy atmospheres. In Time of Peril hangs at the <a href="/apps/masterpieces/museum/auckland-art-gallery"><strong>Auckland Art Gallery</strong></a> Toi o Tāmaki in New Zealand, part of the Mackelvie Trust Collection.</p>`,
    faqs: [
      {
        question: "Where can I see In Time of Peril?",
        answer: `In Time of Peril is displayed at the <a href="/apps/masterpieces/museum/auckland-art-gallery"><strong>Auckland Art Gallery</strong></a> Toi o Tāmaki in New Zealand. It's part of the Mackelvie Trust Collection.`
      },
      {
        question: "What does In Time of Peril depict?",
        answer: `The painting shows <strong>royal refugees</strong> arriving at a monastery for safety. Two young princes are comforted by their mother at a 14th-century water gate.`
      },
      {
        question: "When was In Time of Peril exhibited?",
        answer: `<a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Leighton</strong></a> showed In Time of Peril at the <strong>Royal Academy exhibition in 1897</strong>, marking Queen Victoria's diamond jubilee year.`
      },
      {
        question: "What size is In Time of Peril?",
        answer: `The painting measures <strong>124.5 x 168.9 cm</strong> (approximately 49 x 66.5 inches). It's a substantial oil on canvas work.`
      }
    ]
  },
  {
    slug: 'anders-zorn-in-top-capu',
    description: `<p><a href="/apps/masterpieces/artist/anders-zorn"><strong>Anders Zorn</strong></a> created In Top Capu in 1885, a watercolor on paper that falls under the <strong>Orientalism</strong> genre. The work shows Zorn's skill with the medium, capturing varying light and textures: rough stone steps, soft fabric, and diffused light filtering through a doorway. A woman sits on the steps, her dress rendered with fluid brushwork.</p>
<p>Zorn (1860-1920) traveled extensively during this period, and his Orientalist works reflect an interest in capturing scenes from different cultures. The Swedish artist would become famous for his portraits and nude studies, working with a loose, confident technique. His watercolors from this era demonstrate the observational skills that made him one of the most sought-after portraitists of his generation.</p>
<p>The handling of light is particularly strong here, with Zorn using the white of the paper and transparent washes to create atmosphere. The painting remains in a <strong>private collection</strong>. Zorn's <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> subjects, whether in watercolor or oil, share this quality of observed intimacy.</p>`,
    faqs: [
      {
        question: "What medium did Anders Zorn use for In Top Capu?",
        answer: `Zorn created In Top Capu in <strong>watercolor on paper</strong> in 1885. His fluid handling of the medium captures light and texture beautifully.`
      },
      {
        question: "What genre is In Top Capu?",
        answer: `The painting is classified as <strong>Orientalism</strong>, reflecting <a href="/apps/masterpieces/artist/anders-zorn"><strong>Zorn's</strong></a> interest in depicting scenes from his travels to different cultures.`
      },
      {
        question: "Where can I see In Top Capu?",
        answer: `In Top Capu is currently in a <strong>private collection</strong>. The Zorn Museum in Mora, Sweden holds the largest collection of his work.`
      },
      {
        question: "What is Anders Zorn famous for?",
        answer: `<a href="/apps/masterpieces/artist/anders-zorn"><strong>Anders Zorn</strong></a> became famous as a <strong>portrait painter</strong>, depicting American presidents and European royalty. He's also known for his nude studies.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

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
