const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'paula-modersohn-becker-old-blind-woman',
    description: `<p><a href="/apps/masterpieces/artist/paula-modersohn-becker"><strong>Paula Modersohn-Becker</strong></a> created Old Blind Woman around 1899 in pastel, depicting an elderly woman from the village of Worpswede with quiet dignity. The German title, "Alte blinde sitzende Frau," translates to Old Blind Seated Woman. Modersohn-Becker found her subjects among the "primitive" people living near the artists' colony, painting figures that challenged the ideals of her time.</p>
<p>This work was one of Modersohn-Becker's first significant paintings. It paved the way for <strong>realism in Finnish painting</strong> and demonstrated her commitment to portraying everyday people without idealization. She painted several similar subjects: the poor, the elderly, and mothers with children. Critics have called this approach "empathic realism" or "humanistic realism."</p>
<p>Modersohn-Becker (1876-1907) was one of the first emancipated <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women painters</strong></a> in Germany. She studied in Paris, where this painting was exhibited by the Society of French Artists. She signed it twice, on the top left and bottom right, linking it to her Parisian period. Today, the work resides at the <a href="/apps/masterpieces/museum/arp-museum-bahnhof-rolandseck-remagen-germany"><strong>Arp Museum Bahnhof Rolandseck</strong></a> in Remagen. The painting measures 73.5 x 47 cm.</p>`,
    faqs: [
      {
        question: "Where can I see Old Blind Woman by Paula Modersohn-Becker?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/arp-museum-bahnhof-rolandseck-remagen-germany\"><strong>Arp Museum Bahnhof Rolandseck</strong></a> in Remagen, Germany. The pastel measures 73.5 x 47 cm."
      },
      {
        question: "What art movement does this painting belong to?",
        answer: "<a href=\"/apps/masterpieces/artist/paula-modersohn-becker\"><strong>Modersohn-Becker</strong></a> worked in an early <strong>Expressionist style</strong>, associated with the Worpswede artists' colony in northern Germany. She was influenced by Post-Impressionism after studying in Paris."
      },
      {
        question: "Why is this painting significant?",
        answer: "This was one of Modersohn-Becker's first important works. It <strong>challenged artistic ideals</strong> of the time by depicting rural poverty with empathy rather than sentimentality, paving the way for realism in German art."
      }
    ]
  },
  {
    slug: 'rembrandt-old-man-shading-his-eyes-with-his-hand',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created Old Man Shading His Eyes with His Hand around 1639 as an <strong>etching and drypoint</strong>. The print depicts an elderly man raising his hand to shield his eyes, possibly against a bright light source. Rembrandt's lines capture every fold of the man's garments and the weathered textures of his face with characteristic precision.</p>
<p>The work belongs to a series of character studies, or "tronies," that Rembrandt produced throughout his career. These figures often wear berets, cloaks with decorative clasps, or Polish fur caps called kutchmas. They weren't portraits of specific individuals but rather explorations of <strong>expression, costume, and light</strong>. The dramatic interplay of shadows across the figure shows Rembrandt's mastery of the Baroque etching technique.</p>
<p>Multiple impressions of this print exist in museum collections worldwide. The <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> holds one version, while others can be found at the Detroit Institute of Arts, the Rijksmuseum, and the Metropolitan Museum of Art. The etching measures approximately 5 7/16 x 4 1/2 inches, a modest size typical of Rembrandt's <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait studies</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Old Man Shading His Eyes with His Hand?",
        answer: "The <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> holds one impression of this <strong>etching</strong>. Other impressions are at the Rijksmuseum, Metropolitan Museum, and Detroit Institute of Arts."
      },
      {
        question: "What medium did Rembrandt use for this work?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this work as an <strong>etching and drypoint</strong> around 1639. It measures approximately 5 7/16 x 4 1/2 inches."
      },
      {
        question: "What is a 'tronie' in Dutch art?",
        answer: "A tronie is a <strong>character study</strong> depicting an anonymous figure, often in exotic costume. Rembrandt created many such works to explore expressions, lighting, and textures rather than to document specific individuals."
      }
    ]
  },
  {
    slug: 'wassily-kandinsky-old-town-ii',
    description: `<p><a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted Old Town II in 1902, capturing his impressions of Rothenburg, a medieval museum city in Bavaria. He first visited Rothenburg in 1901, drawn to its preserved <strong>historic architecture</strong> and winding streets. The painting represents his early approach to landscape before he developed his famous abstract style.</p>
<p>Kandinsky created this work shortly after abandoning a career in law to study art in Munich. He recalled seeing Monet's haystack paintings in 1897 and being so moved that he changed his life's direction. In his autobiographical notes, Kandinsky mentioned that only one picture remained from his Rothenburg trip, painted upon returning to Munich. Old photographs suggest there were two versions, though the location of the other remains unknown.</p>
<p>The painting shows Kandinsky's early interest in <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color and atmosphere</strong></a>, influenced by Post-Impressionism and the Signac-inspired studies he produced between 1900 and 1906. By 1909, when he moved to the Bavarian village of Murnau with Gabriele Münter, his work would turn increasingly painterly and eventually abstract. Today, Old Town II resides at the <a href="/apps/masterpieces/museum/georges-pompidou-center-paris-france"><strong>Centre Pompidou</strong></a> in Paris. It measures 52 x 78.5 cm.</p>`,
    faqs: [
      {
        question: "Where is Kandinsky's Old Town II displayed?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/georges-pompidou-center-paris-france\"><strong>Centre Pompidou</strong></a> in Paris, France. It measures 52 x 78.5 cm and is executed in oil on canvas."
      },
      {
        question: "What does this painting depict?",
        answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> painted views of <strong>Rothenburg ob der Tauber</strong>, a medieval town in Bavaria that he visited in 1901. The work captures the town's historic architecture."
      },
      {
        question: "What style is Old Town II?",
        answer: "The painting belongs to Kandinsky's early <strong>Post-Impressionist period</strong>, before he developed his abstract style. It shows influences from Signac and his own swift artistic development."
      }
    ]
  },
  {
    slug: 'van-gogh-old-woman-asleep-after-rops',
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> created Old Woman Asleep after Rops in 1873, one of the earliest works in his artistic career. The title acknowledges his admiration for <strong>Félicien Rops</strong>, the Belgian artist whose work often depicted scenes of social realism. Van Gogh was 20 years old and had not yet fully committed to becoming a painter.</p>
<p>The work shows an elderly woman sleeping, rendered with soft, warm tones. Van Gogh employed a subtle color palette and delicate brushwork to create a sense of <strong>intimacy and serenity</strong>. The candlelight illuminates the woman's face, foreshadowing his later interest in nocturnal scenes and the effects of artificial light on his subjects.</p>
<p>This painting dates from Van Gogh's years before his artistic career truly began. He was working for the art dealer Goupil & Cie, first in The Hague and then in London. Other works from this early period include sketches of his boarding house in Brixton. The piece demonstrates Van Gogh's early attraction to <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>genre subjects</strong></a> and the lives of ordinary people, themes that would define his mature work. The painting is currently held in a private collection.</p>`,
    faqs: [
      {
        question: "When did Van Gogh paint Old Woman Asleep after Rops?",
        answer: "<a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a> created this work in <strong>1873</strong>, making it one of his earliest pieces. He was 20 years old and working as an art dealer."
      },
      {
        question: "Who was Félicien Rops?",
        answer: "Félicien Rops was a <strong>Belgian artist</strong> known for social realism. Van Gogh admired his work and created this painting after one of Rops' compositions."
      },
      {
        question: "Where is this painting located?",
        answer: "Old Woman Asleep after Rops is currently in a <strong>private collection</strong>. It represents Van Gogh's early interest in genre subjects before his mature artistic period."
      }
    ]
  },
  {
    slug: 'old-woman-reading-lectionary',
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> painted Old Woman Reading a Lectionary around 1631-1632, creating one of the finest examples of Dutch Golden Age precision. The work was once attributed to Rembrandt and titled "Rembrandt's Mother," though this identification has long been rejected. Dou, Rembrandt, and Jan Lievens often used the same models, and this elderly woman appears in works by all three painters.</p>
<p>The <strong>technical detail</strong> in this painting is extraordinary. The biblical text in the lectionary and its accompanying print are rendered so precisely that viewers can identify the passage: the beginning of chapter 19 of the Gospel of Luke. The text states that those who wish to do good must give away half of all they own to the poor. Art historians note the contrast between this message and the woman's expensive clothing, suggesting Dou may have intended a moral commentary.</p>
<p>Dou was Rembrandt's first pupil and became famous for his small, highly detailed works. He often used a magnifying glass to achieve his smooth finish and fine brushwork. The painting measures 71.2 x 55.2 cm and was donated to the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam in 1912 by Vice-Admiral Anthony Hendrik Hoekwater. It represents the Dutch tradition of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>intimate portraiture</strong></a> at its most refined.</p>`,
    faqs: [
      {
        question: "Where can I see Old Woman Reading a Lectionary?",
        answer: "The painting is in the collection of the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It was donated in 1912 by Vice-Admiral Anthony Hendrik Hoekwater."
      },
      {
        question: "Was this painting by Rembrandt?",
        answer: "No. The work was once attributed to Rembrandt and titled \"Rembrandt's Mother,\" but this has been rejected. <a href=\"/apps/masterpieces/artist/gerrit-dou\"><strong>Gerrit Dou</strong></a> painted it around 1631-1632."
      },
      {
        question: "What is the woman reading?",
        answer: "The book is rendered in such detail that viewers can identify the text: <strong>Luke chapter 19</strong>, which states that those who wish to do good must give half their possessions to the poor."
      },
      {
        question: "What are the dimensions of this painting?",
        answer: "The painting measures 71.2 x 55.2 cm. It's an <strong>oil on panel</strong> work demonstrating Dou's characteristic precision and smooth finish."
      }
    ]
  },
  {
    slug: 'akseli-gallen-kallela-old-woman-with-a-cat',
    description: `<p><a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted Old Woman With a Cat (Akka ja kissa) in 1885, creating a work that would become his first major artistic statement. The painting challenged the ideals of Finnish art at the time and helped pave the way for <strong>realism</strong> in the country's painting tradition. Gallen-Kallela was pleased enough with the result that he signed it twice.</p>
<p>The work was exhibited in Paris by the Society of French Artists during Gallen-Kallela's time studying at the Académie Julian. His second signature on the bottom right linked the painting to his Parisian period. The canvas measures 121 x 96.5 cm, a substantial size that signals the artist's ambition for this early work.</p>
<p>Gallen-Kallela (1865-1931) is counted among Finland's most famous artists. He was born in Pori, studied at the Drawing School of the Finnish Art Society in Helsinki, and later became primarily known for his paintings and illustrations of the Finnish national epic, the Kalevala. In 1900, he created dome paintings with Kalevala motifs for the Finnish pavilion at the World Exhibition in Paris. Today, Old Woman With a Cat resides at the <a href="/apps/masterpieces/museum/turku-art-museum-turku-finland"><strong>Turku Art Museum</strong></a>, representing the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>realistic portraiture</strong></a> of his early career.</p>`,
    faqs: [
      {
        question: "Where is Old Woman With a Cat displayed?",
        answer: "The painting is part of the permanent collection at the <a href=\"/apps/masterpieces/museum/turku-art-museum-turku-finland\"><strong>Turku Art Museum</strong></a> in Finland. It measures 121 x 96.5 cm."
      },
      {
        question: "Why is this painting historically important?",
        answer: "This was <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela's</strong></a> first significant work. It <strong>challenged Finnish artistic ideals</strong> and helped establish realism in Finnish painting."
      },
      {
        question: "What style is Old Woman With a Cat?",
        answer: "The painting is classified as <strong>Romanticism transitioning to Realism</strong>. It was exhibited in Paris during Gallen-Kallela's studies at the Académie Julian."
      }
    ]
  },
  {
    slug: 'bartolome-murillo-old-woman-with-distaff',
    description: `<p><a href="/apps/masterpieces/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted Old Woman with Distaff around 1642, depicting an elderly woman holding the tool used to spin fibers into thread. This early work shows Murillo exploring <strong>genre subjects</strong> before he became primarily known for his religious paintings. The distaff was a common household implement, representing domestic labor and humble daily life in 17th-century Seville.</p>
<p>Murillo (1617-1682) became the most celebrated Spanish painter of his generation, famous for his soft style and religious subjects. But his early career included genre scenes depicting the lower classes of his native Seville. These paintings captured street children, vendors, and working people with a sympathetic eye that set them apart from purely religious work.</p>
<p>The painting demonstrates Murillo's early command of <strong>Baroque technique</strong>, with warm lighting and careful attention to texture. It's executed in oil on canvas and hangs today at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, alongside the artist's more famous religious masterpieces. The work represents the tradition of Spanish genre painting that Murillo helped establish alongside Diego Velázquez, capturing <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>ordinary people</strong></a> with dignity and skill.</p>`,
    faqs: [
      {
        question: "Where can I see Old Woman with Distaff?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, Spain, alongside Murillo's more famous religious works."
      },
      {
        question: "What is a distaff?",
        answer: "A distaff is a tool used for <strong>spinning fibers into thread</strong>. It was a common household implement in the 17th century, often depicted in genre paintings showing domestic labor."
      },
      {
        question: "What period is this painting from?",
        answer: "<a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a> painted this work around 1642, early in his career. It's classified as <strong>Spanish Baroque</strong> genre painting."
      }
    ]
  },
  {
    slug: 'camille-corot-olevano-the-town-and-the-rocks',
    description: `<p><a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> painted View of Olevano in April 1827 during the final months of his nearly three-year stay in Italy. Olevano, a town about twenty-five miles east of Rome, attracted Corot for its dramatic landscape of <strong>buildings perched on rocky outcrops</strong>. He returned to paint there again in the summer of the same year.</p>
<p>This work belongs to the group of around 150 <strong>oil studies</strong> Corot made outdoors in Italy. These sketches were created as preliminaries for larger studio compositions, but modern viewers often prefer them to the more finished works. Painting directly from nature, Corot captured light and atmosphere with a freshness that anticipated Impressionism. His Italian studies show an interest in unexpected viewpoints, asymmetric compositions, and visible brushwork.</p>
<p>The painting measures 10 7/8 x 17 7/8 inches (27.6 x 45.4 cm), executed in oil on paper remounted on canvas. Corot never intended these studies for exhibition and left most unsigned. The red seal reading "Vente Corot" at the lower right was added for the auction of his studio contents after his death in 1875. Today, the work resides at the <a href="/apps/masterpieces/museum/kimbell-art-museum"><strong>Kimbell Art Museum</strong></a> in Fort Worth, representing the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape tradition</strong></a> that inspired later generations.</p>`,
    faqs: [
      {
        question: "Where is View of Olevano displayed?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/kimbell-art-museum\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas. It measures 27.6 x 45.4 cm."
      },
      {
        question: "When did Corot paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Corot</strong></a> visited Olevano in <strong>April 1827</strong> and again that summer, during his three-year Italian sojourn. This outdoor study captured the town's rocky landscape."
      },
      {
        question: "What is the red seal on the painting?",
        answer: "The seal reads \"<strong>Vente Corot</strong>\" (Corot Sale). It was added for the auction of Corot's studio contents after his death in 1875, since he left most Italian studies unsigned."
      }
    ]
  },
  {
    slug: 'egon-schiele-on-the-beach-moonlight',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted On the Beach, Moonlight during his brief but intense career as one of the leading figures of Austrian <strong>Expressionism</strong>. The work depicts a nocturnal coastal scene, capturing the mysterious atmosphere of a moonlit beach. Schiele's characteristic intensity transforms the landscape into something charged with emotion.</p>
<p>Schiele (1890-1918) developed his distinctive style under the influence of Gustav Klimt and the Vienna Secession, but quickly moved beyond their decorative approach toward a raw, psychologically charged aesthetic. His landscapes, though less famous than his figurative work, show the same emotional directness. The night setting of this painting allowed Schiele to explore contrasts between darkness and <strong>silvery moonlight</strong>.</p>
<p>The painting demonstrates Schiele's ability to infuse landscape subjects with the same intensity he brought to his portraits and self-portraits. It's currently held in a <strong>private collection</strong>. Schiele died in the Spanish flu pandemic at age 28, leaving behind a body of work that continues to influence artists working with <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal themes</strong></a> and expressionist techniques.</p>`,
    faqs: [
      {
        question: "What style is On the Beach, Moonlight?",
        answer: "<a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a> painted this work in the <strong>Austrian Expressionist style</strong>. It shows his characteristic emotional intensity applied to landscape subject matter."
      },
      {
        question: "Where is this painting located?",
        answer: "On the Beach, Moonlight is currently held in a <strong>private collection</strong>. The painting appears in catalogues of Schiele's complete works."
      },
      {
        question: "What does the painting depict?",
        answer: "The work shows a <strong>nocturnal beach scene</strong> illuminated by moonlight. Schiele captures the mysterious atmosphere of the coastal landscape at night."
      }
    ]
  },
  {
    slug: 'piet-mondrian-on-the-lappenbrink',
    description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted On the Lappenbrink (Op de Lappenbrink) in 1899, decades before he developed the geometric abstraction that would make him famous. The work depicts a tranquil scene of a <strong>windmill and trees</strong> in Winterswijk, the Dutch town where he spent part of his youth. His brushstrokes are deliberate and simplified, hinting at his growing interest in reducing forms to their essential components.</p>
<p>This early painting shows Mondrian working in a <strong>Post-Impressionist manner</strong>, influenced by the naturalism still prevalent in Dutch art at the turn of the century. The subdued palette and careful composition reveal an artist beginning to think about the underlying structure of visual experience. Other works from 1899 include View of Winterswijk and Wood with Beech Trees.</p>
<p>The painting measures 108 x 86 cm and is executed in gouache. It resides at the <a href="/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands"><strong>Kunstmuseum Den Haag</strong></a> (formerly Gemeentemuseum), which holds the world's largest collection of Mondrian's work. For viewers familiar only with his later grids of primary colors, this early <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>naturalistic work</strong></a> reveals the traditional foundations from which his revolutionary style emerged.</p>`,
    faqs: [
      {
        question: "Where can I see On the Lappenbrink?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/gemeentemuseum-den-haag-hague-netherlands\"><strong>Kunstmuseum Den Haag</strong></a> (formerly Gemeentemuseum) in The Hague, which holds the world's largest Mondrian collection."
      },
      {
        question: "What does the title mean?",
        answer: "The Lappenbrink is a location in <strong>Winterswijk</strong>, a Dutch town where Mondrian spent part of his youth. The painting depicts the area's windmill and trees."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted this in a <strong>Post-Impressionist style</strong> in 1899, long before developing his famous geometric abstractions."
      }
    ]
  },
  {
    slug: 'edmund-blair-leighton-on-the-threshold',
    description: `<p><a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Edmund Blair Leighton</strong></a> painted On the Threshold in 1900, creating a scene that positions the viewer to witness a moment freighted with unspoken tension. The work captures the social customs and <strong>gender roles</strong> of late Victorian England, themes Leighton explored throughout his career as a painter of historical and romantic subjects.</p>
<p>Leighton (1852-1922) specialized in <strong>Regency and medieval scenes</strong>, producing highly finished, decorative paintings with popular appeal. His work is associated with the Pre-Raphaelite movement, though his style is more naturalistic and less stylized than the Brotherhood's core members. He was a fastidious craftsman who created romanticized images of chivalry and women in historical dress.</p>
<p>The painting measures 35.6 x 25.5 cm, executed in oil on canvas. It was bequeathed by James Thomas Blair in 1917 to the <a href="/apps/masterpieces/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>, which also holds other Leighton works including "Waiting for the Coach" and "Adieu." The gallery's collection provides context for understanding Leighton's romantic vision of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>historical femininity</strong></a> and social ritual.</p>`,
    faqs: [
      {
        question: "Where is On the Threshold displayed?",
        answer: "The painting is held by <a href=\"/apps/masterpieces/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a>. It was bequeathed by James Thomas Blair in 1917 and bears Leighton's initials and the date 1900."
      },
      {
        question: "What style did Edmund Blair Leighton paint in?",
        answer: "<a href=\"/apps/masterpieces/artist/edmund-blair-leighton\"><strong>Leighton</strong></a> painted in a <strong>Victorian academic style</strong> associated with the Pre-Raphaelites, though more naturalistic. He specialized in Regency and medieval subjects."
      },
      {
        question: "What are the dimensions of this painting?",
        answer: "The painting measures 35.6 x 25.5 cm (approximately 14 x 10 inches). It's an <strong>oil on canvas</strong> work typical of Leighton's highly finished decorative style."
      }
    ]
  },
  {
    slug: 'pierre-bonnard-on-the-track',
    description: `<p><a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted On the Track in 1895, capturing a scene from the world of <strong>horse racing</strong>. The work belongs to his early period as a founding member of Les Nabis, the Post-Impressionist group of avant-garde painters who sought to express personal vision through color and form. The small panel measures 42.3 x 27.5 cm.</p>
<p>Bonnard (1867-1947) was both a painter and printmaker who helped bridge 19th-century Impressionism and 20th-century modernism. His work from this period shows the influence of Japanese woodblock prints in its flattened perspective and decorative qualities. The <strong>racing subject</strong> connects to contemporary works like "At the Races, Longchamp" from 1894.</p>
<p>The painting demonstrates Bonnard's interest in modern leisure activities and urban life, subjects the Nabis explored alongside their more symbolic and decorative work. It's currently held in a <strong>private collection</strong>. Bonnard would later become famous for his intimate domestic scenes and his mastery of <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>luminous color</strong></a>, but this early work shows his development within the context of Post-Impressionist experimentation.</p>`,
    faqs: [
      {
        question: "What art movement does this painting belong to?",
        answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> painted this during his years with <strong>Les Nabis</strong>, the Post-Impressionist group he helped found. The work dates from 1895."
      },
      {
        question: "Where is On the Track located?",
        answer: "The painting is currently in a <strong>private collection</strong>. It measures 42.3 x 27.5 cm and is executed in oil on panel."
      },
      {
        question: "What does the painting depict?",
        answer: "The work shows a scene from <strong>horse racing</strong>, connecting to Bonnard's interest in modern leisure activities. Related works include \"At the Races, Longchamp\" from 1894."
      }
    ]
  },
  {
    slug: 'valentin-serov-open-window-lilacs',
    description: `<p><a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov</strong></a> painted Open Window. Lilacs in 1886, capturing the play of light through an open window with <strong>lilac branches</strong> in bloom. The work demonstrates his early interest in Impressionist techniques, particularly the rendering of natural light and atmospheric effects. Serov was 21 years old when he created this study.</p>
<p>Serov (1865-1911) became one of the most prominent <strong>Russian painters</strong> of his generation, known primarily for his portraits of aristocrats, artists, and cultural figures. But his early work shows experimentation with landscape and light that connects him to European Impressionism. The lilacs, a common subject in late 19th-century painting, allowed him to explore color relationships and the effects of diffused daylight.</p>
<p>The painting measures 75 x 58 cm and resides at the <a href="/apps/masterpieces/museum/belarusian-national-museum-of-fine-arts-minsk-bela"><strong>Art Museum of Belarus</strong></a> in Minsk. It represents a moment in Russian art when young painters looked westward for new approaches to <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>floral subjects</strong></a> and the rendering of light, before developing distinctly Russian modernist movements.</p>`,
    faqs: [
      {
        question: "Where can I see Open Window. Lilacs?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/belarusian-national-museum-of-fine-arts-minsk-bela\"><strong>Art Museum of Belarus</strong></a> in Minsk. It measures 75 x 58 cm."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Serov</strong></a> painted this in an <strong>Impressionist-influenced style</strong> in 1886. The work focuses on natural light filtering through an open window."
      },
      {
        question: "What was Valentin Serov known for?",
        answer: "Serov became one of the most prominent <strong>Russian portrait painters</strong> of his era. This early work shows his experimentation with landscape and light before focusing on portraiture."
      }
    ]
  },
  {
    slug: 'adriaen-brouwer-operation-on-foot',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted Operation on Foot as part of his series depicting <strong>quack surgeons</strong> and their suffering patients. The work shows a village healer performing a procedure without anesthesia while the patient winces in pain. Such scenes were common in Flemish genre painting, capturing the rough medical practices available to ordinary people in the 17th century.</p>
<p>Brouwer (c. 1605-1638) was a Flemish painter who specialized in vivid depictions of peasants, soldiers, and "lower class" individuals. His subjects included drinking, smoking, card playing, fighting, and amateur medical procedures. These paintings appealed to wealthy collectors who found entertainment in observing lives very different from their own. Both Rubens and Rembrandt collected Brouwer's work.</p>
<p>The artist's scenes of barber-surgeons typically show the patients grimacing from procedures performed in tavern settings by untrained practitioners. Brouwer captured these <strong>expressions of pain</strong> with remarkable skill. His influence extended to later Dutch and Flemish artists including the Van Ostade brothers, who continued the tradition of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>peasant genre scenes</strong></a>. The painting is currently in a private collection.</p>`,
    faqs: [
      {
        question: "What does Operation on Foot depict?",
        answer: "The painting shows a <strong>quack surgeon</strong> performing a foot operation on a grimacing peasant. Such amateur medical procedures were common subjects in Flemish genre painting."
      },
      {
        question: "Who was Adriaen Brouwer?",
        answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> (c. 1605-1638) was a Flemish painter of <strong>genre scenes</strong> depicting peasant life. Both Rubens and Rembrandt collected his work."
      },
      {
        question: "Where is this painting located?",
        answer: "Operation on Foot is currently in a <strong>private collection</strong>. Brouwer produced only a small body of work during his short life."
      }
    ]
  },
  {
    slug: 'john-william-godward-ophelia',
    description: `<p><a href="/apps/masterpieces/artist/john-william-godward"><strong>John William Godward</strong></a> painted Ophelia, depicting a <strong>classical female figure</strong> in his characteristic Neoclassical style. While Shakespeare's tragic heroine from Hamlet was a popular subject for Victorian painters, Godward's interpretation likely emphasizes the classical and timeless qualities he favored rather than the dramatic narrative of the play.</p>
<p>Godward (1861-1922) built his reputation painting young women in classical dress posed against Mediterranean landscapes and ancient architecture. He was a protégé of Sir Lawrence Alma-Tadema and became known for his technical mastery in rendering contrasting textures: <strong>flesh, marble, fur, and fabrics</strong>. His smooth surfaces and careful attention to detail represent the final flowering of English Neoclassicism.</p>
<p>The painting is held in a <strong>private collection</strong>. While many Victorian artists depicted Ophelia's drowning scene from Hamlet, Godward's version reflects his preference for serene classical beauty over dramatic narrative. His work fell out of fashion with the rise of modernism, but has found renewed appreciation among collectors drawn to his <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>idealized feminine subjects</strong></a> and technical accomplishment.</p>`,
    faqs: [
      {
        question: "What style did Godward paint in?",
        answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted in the <strong>Neoclassical style</strong>, depicting women in classical settings. He was one of the last major painters in this tradition."
      },
      {
        question: "Where is Godward's Ophelia displayed?",
        answer: "The painting is currently in a <strong>private collection</strong>. Godward's works are scattered across private collections and museums worldwide."
      },
      {
        question: "How does this differ from other Ophelia paintings?",
        answer: "While artists like Millais and Waterhouse depicted Ophelia's <strong>dramatic drowning</strong>, Godward likely emphasized classical beauty and timeless qualities consistent with his Neoclassical approach."
      }
    ]
  },
  {
    slug: 'franz-von-stuck-orpheus',
    description: `<p><a href="/apps/masterpieces/artist/franz-von-stuck"><strong>Franz von Stuck</strong></a> painted Orpheus in 1891, depicting the legendary Greek musician whose song could charm all living things. The composition shows Orpheus surrounded by wild animals including lions, a crocodile, and a flamingo, creatures typically perceived as dangerous but here calmed by the power of music. Von Stuck's use of color, light, and composition heightens the <strong>mythological drama</strong>.</p>
<p>Von Stuck (1863-1928) was a German Symbolist painter, sculptor, and architect who co-founded the Munich Secession. His work often combined classical themes with a sensuous and sometimes eerie aesthetic. The Orpheus myth resonated with the high regard of his era for music's power to affect the human soul. A version of this painting is preserved on the east wall of the Hall of Music at <strong>Villa Stuck</strong> in Munich.</p>
<p>Von Stuck was also an influential teacher whose students included Wassily Kandinsky, Paul Klee, and Josef Albers. His paintings range from Nordic pagan legends to Greco-Roman mythology, the latter often shown in a serene style against neo-Byzantine <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold backgrounds</strong></a>. This version of Orpheus is held in a private collection and measures among his works exploring the Art Nouveau aesthetic.</p>`,
    faqs: [
      {
        question: "What does Orpheus depict?",
        answer: "The painting shows the Greek mythological figure <strong>Orpheus</strong> charming wild animals with his music. Lions, a crocodile, and a flamingo gather peacefully around him."
      },
      {
        question: "Who was Franz von Stuck?",
        answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Von Stuck</strong></a> (1863-1928) was a German <strong>Symbolist painter</strong> and co-founder of the Munich Secession. His students included Kandinsky, Klee, and Albers."
      },
      {
        question: "Where can I see versions of this painting?",
        answer: "One version is held in a <strong>private collection</strong>. Another is preserved on the east wall of the Hall of Music at Villa Stuck in Munich, Germany."
      }
    ]
  },
  {
    slug: 'frederic-leighton-orpheus-and-eurydice',
    description: `<p><a href="/apps/masterpieces/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted Orpheus and Eurydice in 1864, offering an unconventional interpretation of the Greek myth. The painting shows the moment when Orpheus has turned to look at Eurydice during their escape from the underworld, condemning her to remain among the dead. What seems like disdain on his face is really his <strong>repulsion at his own actions</strong>, the realization of what he has done.</p>
<p>Eurydice, rather than showing despair, appears to comfort the distraught Orpheus. She has accepted her fate and wants him to know she willingly returns to the underworld. This interpretation confused Victorian audiences, who expected more conventional dramatic expression. The painting was the least popular of eight works Leighton showed at the Royal Academy's 1864 exhibition.</p>
<p>Critics praised Leighton's <strong>technical skill</strong> but questioned his dramatic interpretation. Over time, the painting has come to be regarded as one of his masterpieces. It measures 168.3 x 151 cm and was purchased by the <a href="/apps/masterpieces/museum/leighton-house-museum-london-uk"><strong>Leighton House Museum</strong></a> in 1960. The museum, dedicated to Leighton's life and work, provides the ideal setting for this exploration of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>mythological tragedy</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Orpheus and Eurydice?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/leighton-house-museum-london-uk\"><strong>Leighton House Museum</strong></a> in Kensington, London. The museum purchased it in 1960."
      },
      {
        question: "What myth does this painting depict?",
        answer: "The painting shows <strong>Orpheus and Eurydice</strong> from Greek mythology. Orpheus has just looked back at his wife, breaking his promise and condemning her to remain in the underworld."
      },
      {
        question: "What are the dimensions of this painting?",
        answer: "The painting measures 168.3 x 151 cm (approximately 66 x 59 inches). It's an <strong>oil on canvas</strong> work from 1864."
      },
      {
        question: "Why was this painting controversial?",
        answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Leighton's</strong></a> unconventional interpretation confused Victorian audiences. Rather than showing obvious grief, Orpheus appears repulsed by his own failure while Eurydice <strong>comforts him</strong>."
      }
    ]
  },
  {
    slug: 'aelbert-cuyp-orpheus-with-animals-in-a-landscape',
    description: `<p><a href="/apps/masterpieces/artist/aelbert-cuyp"><strong>Aelbert Cuyp</strong></a> painted Orpheus with Animals in a Landscape around 1640, combining his skill as a landscape painter with the mythological subject of the <strong>legendary musician</strong>. The composition includes a wide range of both domestic and exotic animals: cattle, horses, a distant elephant, an ostrich, herons, and wildfowl, all gathered peacefully around Orpheus as he plays.</p>
<p>Cuyp (1620-1691) was trained as a landscape painter by his father, Jacob Gerritsz Cuyp. He often used views as platforms for genre scenes, animal portraits, and mythological subjects. This painting is one of at least two different works he made depicting the Orpheus story. Cuyp appears to have stopped painting around 1660, though he lived another thirty years.</p>
<p>The painting measures 113 x 167 cm, a substantial canvas that allowed Cuyp to display his ability to paint almost anything. The variety of <a href="https://luxurywallart.com/collections/animal-artwork" target="_blank" rel="noopener"><strong>animals</strong></a> demonstrates his versatility, from the familiar cattle of Dutch pastures to exotic creatures he likely knew only from illustrations. The work is held at the <a href="/apps/masterpieces/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>, having previously been in the Rose-Marie and Eijk van Otterloo Collection.</p>`,
    faqs: [
      {
        question: "Where is Orpheus with Animals in a Landscape displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. It was previously part of the Rose-Marie and Eijk van Otterloo Collection."
      },
      {
        question: "What animals appear in this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Cuyp</strong></a> included <strong>domestic and exotic animals</strong>: cattle, horses, an elephant, ostrich, herons, and wildfowl, all charmed by Orpheus's music."
      },
      {
        question: "What are the dimensions of this work?",
        answer: "The painting measures 113 x 167 cm, a large canvas dating from around <strong>1640</strong>. It's one of at least two Orpheus paintings Cuyp created."
      }
    ]
  },
  {
    slug: 'william-holman-hunt-our-english-coasts',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted Our English Coasts in 1852, creating one of the most celebrated works of the Pre-Raphaelite movement. Also known as Strayed Sheep, the painting shows a flock of sheep on the edge of cliffs near Hastings, painted with extraordinary attention to every flower, bramble, and blade of grass. Hunt worked largely outdoors at the "Lover's Seat" overlooking Covehurst Bay.</p>
<p>The composition is deliberately unconventional. The cliffs push up to the top of the frame, leaving little room for sky. The sheep mass on the cliff's edge on the right, creating asymmetry. The painting began as a commissioned replica of sheep from Hunt's earlier work The Hireling Shepherd, but he persuaded the buyer that an <strong>original composition</strong> would be more desirable.</p>
<p>Critics have interpreted the painting symbolically. The location near Hastings, site of the Norman invasion of 1066, may reference contemporary fears of French invasion under Napoleon III. The absent shepherds suggest pastors who have abandoned their flock to disaster. John Ruskin praised Hunt's authentic rendering of sunlight as a breakthrough in painting history. The work is held by <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate Britain</strong></a>, representing the Pre-Raphaelite commitment to <a href="https://luxurywallart.com/collections/animal-artwork" target="_blank" rel="noopener"><strong>naturalistic detail</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Our English Coasts?",
        answer: "The painting is held by <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a> in London, acquired through The Art Fund in 1946."
      },
      {
        question: "Why is this painting also called Strayed Sheep?",
        answer: "Hunt exhibited it at the Royal Academy in 1853 as \"Our English Coasts,\" but the frame bore \"The Lost Sheep.\" It was renamed <strong>\"Strayed Sheep\"</strong> for the 1855 Paris Exposition Universelle."
      },
      {
        question: "What is the symbolic meaning of this painting?",
        answer: "Critics have suggested it comments on Britain's <strong>defenselessness against invasion</strong>, referencing fears of Napoleon III. The Hastings location recalls the 1066 Norman conquest."
      },
      {
        question: "What art movement does this represent?",
        answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>Hunt</strong></a> co-founded the <strong>Pre-Raphaelite Brotherhood</strong> in 1848. This painting exemplifies their commitment to detailed naturalism."
      }
    ]
  },
  {
    slug: 'otto-mueller-paar-mit-gr252nem-f228cher',
    description: `<p><a href="/apps/masterpieces/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted Paar mit grünem Fächer (Couple with Green Fan) in 1913, depicting an intimate scene characteristic of his <strong>German Expressionist</strong> work. Mueller's distinctive style features elongated figures, muted earth tones, and simplified forms influenced by Egyptian and African art. The green fan of the title provides a point of color contrast.</p>
<p>Mueller (1874-1930) joined <strong>Die Brücke</strong> (The Bridge) in 1910, one of the founding movements of German Expressionism. His work often depicted nudes in natural settings, exploring themes of harmony between humans and nature. This painting, showing a couple in an intimate moment, reflects his interest in <strong>human relationships</strong> and simplified decorative forms.</p>
<p>Mueller's palette tends toward browns, greens, and ochres rather than the vivid colors used by some Expressionist colleagues. His figures have a distinctive flatness that sets them apart from the more angular, distorted forms of Ernst Ludwig Kirchner or Erich Heckel. The painting is currently held in a private collection, representing Mueller's contribution to <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>modernist figuration</strong></a>.</p>`,
    faqs: [
      {
        question: "What does the title mean?",
        answer: "\"Paar mit grünem Fächer\" translates to <strong>\"Couple with Green Fan\"</strong> in English. The painting depicts two figures in an intimate scene."
      },
      {
        question: "What art movement does this belong to?",
        answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> was a member of <strong>Die Brücke</strong>, one of the founding groups of German Expressionism. He joined in 1910."
      },
      {
        question: "Where is this painting located?",
        answer: "Paar mit grünem Fächer is currently in a <strong>private collection</strong>. Mueller's works are held in museums across Germany and beyond."
      },
      {
        question: "What is distinctive about Mueller's style?",
        answer: "Mueller's work features <strong>elongated figures</strong>, muted earth tones, and influences from Egyptian and African art. His palette is more subdued than some Expressionist contemporaries."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment for 20 artworks...\n');

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
