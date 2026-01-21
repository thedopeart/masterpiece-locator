const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // 1. Otto Mueller - Fünf Akte Am Wasser
  {
    slug: 'otto-mueller-f252nf-akte-am-wasser',
    description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted this scene of five nude figures by the water with the <strong>muted earth tones</strong> and angular forms characteristic of German Expressionism. The composition captures bathers in a natural setting with simplified, flattened shapes.</p>
<p>Mueller was a member of Die Brücke, known for paintings of nudes in landscape settings. His work combines primitivist influences with a distinctive personal style. The painting is at the <a href="/museum/kunstmuseum-gelsenkirchen"><strong>Kunstmuseum Gelsenkirchen</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/kunstmuseum-gelsenkirchen\"><strong>Kunstmuseum Gelsenkirchen</strong></a> in Germany." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/otto-mueller\"><strong>Mueller</strong></a> was part of <a href=\"/movement/expressionism\"><strong>Die Brücke</strong></a>, a German Expressionist group known for bold, emotional art." }
    ]
  },

  // 2. Gustav Klimt - Fable
  {
    slug: 'gustav-klimt-fable',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this early allegorical work exploring themes of storytelling and imagination. The composition shows Klimt developing the <strong>decorative sensibility</strong> that would later define his golden period.</p>
<p>Before his famous gilded portraits, Klimt worked in a more naturalistic style while still incorporating symbolic elements. This painting is at the <a href="/museum/vienna-museum"><strong>Vienna Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/vienna-museum\"><strong>Vienna Museum</strong></a> in Austria." },
      { question: "When did Klimt paint this?", answer: "This is an <strong>early work</strong> by <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a>, before his famous gold and decorative phase." }
    ]
  },

  // 3. Edward Burne-Jones - Fair Rosamond and Queen Eleonor
  {
    slug: 'edward-burne-jones-fair-rosamond-and-queen-eleonor',
    description: `<p><a href="/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> painted this scene from English legend showing the confrontation between Queen Eleanor and Fair Rosamond, mistress of King Henry II. The composition captures the <strong>dramatic tension</strong> with Pre-Raphaelite color and detail.</p>
<p>The legend tells of Eleanor discovering Rosamond's hiding place and forcing her to choose between poison and a dagger. Burne-Jones brings medieval romance to life. The painting is at the <a href="/museum/yale-center-for-british-art"><strong>Yale Center for British Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/yale-center-for-british-art\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut." },
      { question: "Who was Fair Rosamond?", answer: "<strong>Fair Rosamond</strong> was the legendary mistress of King Henry II, hidden from his jealous queen Eleanor of Aquitaine." }
    ]
  },

  // 4. Edward Burne-Jones - Fair Rosamund and Queen Eleanor (alternate version)
  {
    slug: 'edward-burne-jones-fair-rosamund-and-queen-eleanor',
    description: `<p><a href="/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> depicted this medieval legend of love and jealousy with the <strong>dreamlike beauty</strong> characteristic of his mature style. Queen Eleanor confronts her rival Rosamund in a moment of deadly tension.</p>
<p>Burne-Jones returned to medieval subjects throughout his career, finding rich material for his romantic imagination. This version is at <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> was associated with the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> and Aesthetic Movement." }
    ]
  },

  // 5. Odilon Redon - Fallen Angel Looking at a Cloud
  {
    slug: 'odilon-redon-fallen-angel-looking-at-a-cloud',
    description: `<p><a href="/artist/odilon-redon"><strong>Odilon Redon</strong></a> created this haunting image of a fallen angel gazing upward at a cloud, suggesting <strong>longing for paradise lost</strong>. The composition exemplifies Redon's visionary approach to symbolic subjects.</p>
<p>Redon's work bridges Symbolism and Surrealism, exploring dreams and the unconscious. His fallen angels express spiritual yearning with poetic intensity. The painting is at the <a href="/museum/stedelijk-museum"><strong>Stedelijk Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/stedelijk-museum\"><strong>Stedelijk Museum</strong></a> in Amsterdam." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/odilon-redon\"><strong>Redon</strong></a> was a leading <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> artist known for dreamlike, visionary imagery." }
    ]
  },

  // 6. Thomas Cole - Falls of the Kaaterskill
  {
    slug: 'thomas-cole-falls-of-the-kaaterskill',
    description: `<p><a href="/artist/thomas-cole"><strong>Thomas Cole</strong></a> painted this dramatic view of Kaaterskill Falls in the Catskill Mountains, one of America's most celebrated natural wonders. The composition captures the <strong>sublime power</strong> of the wilderness with romantic intensity.</p>
<p>Cole founded the Hudson River School, America's first major art movement. His landscapes celebrated American nature as moral and spiritual inspiration. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/thomas-cole\"><strong>Thomas Cole</strong></a> founded the Hudson River School, America's first landscape painting movement." },
      { question: "Where is Kaaterskill Falls?", answer: "<strong>Kaaterskill Falls</strong> is a two-tier waterfall in the Catskill Mountains of New York, a favorite subject for 19th-century painters." }
    ]
  },

  // 7. Rembrandt - Family Group
  {
    slug: 'rembrandt-family-group',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this intimate portrait of a family gathered together, capturing the <strong>bonds of affection</strong> with his characteristic warmth and psychological insight. Light falls across the figures, uniting them in domestic harmony.</p>
<p>Rembrandt's group portraits demonstrate his ability to depict relationships through pose and expression. This work is among the treasures of the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, home to the world's largest Rembrandt collection." },
      { question: "What makes Rembrandt's portraits distinctive?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> captured <strong>psychological depth</strong> through dramatic lighting and sensitive observation of relationships." }
    ]
  },

  // 8. Frédéric Bazille - Family Reunion
  {
    slug: 'family-reunion-bazille',
    description: `<p><a href="/artist/frederic-bazille"><strong>Frédéric Bazille</strong></a> painted this outdoor portrait of his family gathered on a terrace at their estate near Montpellier. The composition captures <strong>bourgeois leisure</strong> with the natural light and informal arrangement that anticipated Impressionism.</p>
<p>Bazille was a promising young painter who died in the Franco-Prussian War at age 28. His work bridges Realism and Impressionism. The painting is at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
      { question: "Who was Frédéric Bazille?", answer: "<a href=\"/artist/frederic-bazille\"><strong>Bazille</strong></a> was a French painter who died young in war, leaving influential works that bridged Realism and <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>." }
    ]
  },

  // 9. Pierre Bonnard - Family Scene
  {
    slug: 'pierre-bonnard-family-scene',
    description: `<p><a href="/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this intimate view of domestic life with the <strong>warm color</strong> and soft light that characterized his work. Family members are absorbed in everyday activities, captured with quiet affection.</p>
<p>Bonnard found poetry in ordinary domestic moments, transforming them through his distinctive palette and intimate viewpoint. The painting is at the <a href="/museum/national-gallery-of-canada"><strong>National Gallery of Canada</strong></a> in Ottawa.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-of-canada\"><strong>National Gallery of Canada</strong></a> in Ottawa." },
      { question: "What subjects did Bonnard paint?", answer: "<a href=\"/artist/pierre-bonnard\"><strong>Bonnard</strong></a> specialized in <strong>intimate domestic scenes</strong> with warm, glowing color that influenced later artists." }
    ]
  },

  // 10. Wassily Kandinsky - Farewell
  {
    slug: 'wassily-kandinsky-farewell',
    description: `<p><a href="/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> created this work exploring themes of parting and emotion through <strong>color and form</strong>. The composition demonstrates Kandinsky's belief that art could express feeling as directly as music.</p>
<p>Kandinsky was a pioneer of abstract art, developing theories about the spiritual power of color and shape. The painting is at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia's premier collection of national art." },
      { question: "What made Kandinsky influential?", answer: "<a href=\"/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> pioneered <a href=\"/movement/abstract-art\"><strong>abstract art</strong></a>, believing color and form could express emotion directly." }
    ]
  },

  // 11. Francis Picabia - Farm at La Petite Mare
  {
    slug: 'francis-picabia-farm-at-la-petite-mare',
    description: `<p><a href="/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this rural scene before his involvement with Dada and abstraction. The composition shows a <strong>French farmyard</strong> rendered with Impressionist-influenced brushwork and natural light.</p>
<p>Picabia's early work explored various styles before his radical experiments with Dadaism. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this farm scene?", answer: "<a href=\"/artist/francis-picabia\"><strong>Francis Picabia</strong></a> was a French artist who later became a leading figure in <a href=\"/movement/dada\"><strong>Dada</strong></a>." },
      { question: "What style is this painting?", answer: "This is an <strong>early work</strong> showing Impressionist influence, before Picabia's radical Dadaist experiments." }
    ]
  },

  // 12. Berthe Morisot - Farm in Normandy
  {
    slug: 'berthe-morisot-farm-in-normandy',
    description: `<p><a href="/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> painted this view of a Norman farm with the <strong>light brushwork</strong> and fresh color that characterized French Impressionism. The rural scene captures the atmosphere of the countryside with spontaneous vitality.</p>
<p>Morisot was a founding member of the Impressionist group and sister-in-law of Édouard Manet. Her landscapes combine delicate observation with bold technique. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> was a leading <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> painter and founding member of the movement." },
      { question: "What made Morisot's work distinctive?", answer: "Morisot combined <strong>delicate brushwork</strong> with bold technique, capturing light and atmosphere with feminine sensibility." }
    ]
  },

  // 13. Piet Mondrian - Farm Sun
  {
    slug: 'piet-mondrian-farm-sun',
    description: `<p><a href="/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this early landscape showing a farm bathed in sunlight, before developing his famous abstract style. The composition demonstrates his <strong>early interest in light</strong> and simplified form.</p>
<p>Mondrian's evolution from naturalistic landscapes to pure abstraction makes his early work particularly fascinating. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Farm Sun?", answer: "<a href=\"/artist/piet-mondrian\"><strong>Piet Mondrian</strong></a> painted this before developing his famous geometric abstract style." },
      { question: "What style did Mondrian develop?", answer: "Mondrian evolved from landscapes to <strong>pure geometric abstraction</strong>, using only primary colors and straight lines." }
    ]
  },

  // 14. Adriaen Brouwer - Farmers Fight Party
  {
    slug: 'adriaen-brouwer-farmers-fight-party',
    description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this scene of peasant revelry turning violent with characteristic <strong>earthy humor</strong> and vigorous brushwork. The composition captures the chaos of a tavern brawl with lively observation.</p>
<p>Brouwer specialized in peasant scenes depicting drinking, smoking, and fighting. His work influenced later genre painters including Adriaen van Ostade. The painting is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
      { question: "What subjects did Brouwer paint?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> specialized in <strong>peasant scenes</strong> showing drinking, fighting, and rustic entertainment." }
    ]
  },

  // 15. Camille Pissarro - Farmyard
  {
    slug: 'camille-pissarro-farmyard',
    description: `<p><a href="/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted this rural scene with the <strong>natural light</strong> and careful observation characteristic of Impressionism. The farmyard setting reflects his lifelong interest in peasant life and agricultural subjects.</p>
<p>Pissarro was the oldest of the Impressionists and participated in all eight group exhibitions. His rural subjects influenced many younger artists. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Farmyard?", answer: "<a href=\"/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> was a founding <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> known for rural and urban landscapes." },
      { question: "What made Pissarro important?", answer: "Pissarro was the <strong>oldest Impressionist</strong> and participated in all eight group exhibitions, mentoring younger artists including Cézanne." }
    ]
  },

  // 16. Jan Steen - Fat Kitchen
  {
    slug: 'jan-steen-fat-kitchen',
    description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> painted this scene of abundance and indulgence with his characteristic <strong>moralizing humor</strong>. The "fat kitchen" was a popular Dutch subject contrasting plenty with temperance.</p>
<p>Steen's genre scenes often contain moral messages beneath their comic surfaces. His work depicts Dutch life with theatrical energy. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Fat Kitchen?", answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a> was a Dutch Golden Age painter known for comic genre scenes with moral undertones." },
      { question: "What is a 'fat kitchen' painting?", answer: "A <strong>fat kitchen</strong> depicts abundance and indulgence, often paired with \"lean kitchen\" scenes showing poverty and moderation." }
    ]
  },

  // 17. George Frederick Watts - Fata Morgana
  {
    slug: 'george-frederick-watts-fata-morgana',
    description: `<p><a href="/artist/george-frederick-watts"><strong>George Frederick Watts</strong></a> painted this allegorical work named for the mirage phenomenon. The composition explores themes of <strong>illusion and perception</strong> with the symbolic imagery Watts favored in his "paintings of ideas."</p>
<p>Watts was a leading Victorian painter who sought to express philosophical and spiritual themes through art. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What is Fata Morgana?", answer: "<strong>Fata Morgana</strong> is a complex mirage named after Morgan le Fay, suggesting themes of illusion and deception." },
      { question: "Who was George Frederick Watts?", answer: "<a href=\"/artist/george-frederick-watts\"><strong>Watts</strong></a> was a Victorian painter known for allegorical \"paintings of ideas\" exploring spiritual themes." }
    ]
  },

  // 18. Paul Cézanne - Father of the Artist
  {
    slug: 'paul-cezanne-father-of-the-artist',
    description: `<p><a href="/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted this portrait of his father Louis-Auguste, a wealthy banker who initially opposed his son's artistic career. The composition shows the elder Cézanne reading a newspaper with <strong>solid, structural form</strong>.</p>
<p>Despite early conflict, Cézanne's father eventually supported him financially. This early portrait demonstrates Cézanne's developing approach to form. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "Who was Cézanne's father?", answer: "<strong>Louis-Auguste Cézanne</strong> was a wealthy banker who initially opposed his son's art career but later provided financial support." }
    ]
  },

  // 19. Simon Vouet - Father Time Overcome by Love, Hope and Beauty
  {
    slug: 'simon-vouet-father-time-overcome-by-love-hope-and-beauty',
    description: `<p><a href="/artist/simon-vouet"><strong>Simon Vouet</strong></a> painted this allegorical scene showing Father Time defeated by the virtues of Love, Hope, and Beauty. The composition demonstrates the <strong>dynamic Baroque style</strong> Vouet brought from Italy to France.</p>
<p>Vouet was the leading French painter of his generation, introducing Italian Baroque techniques to Paris. His allegorical works influenced decorative painting for generations. The painting is at the <a href="/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid." },
      { question: "Who was Simon Vouet?", answer: "<a href=\"/artist/simon-vouet\"><strong>Simon Vouet</strong></a> introduced Italian <a href=\"/movement/baroque\"><strong>Baroque</strong></a> style to France, becoming the leading painter of his era." }
    ]
  },

  // 20. Edward Burne-Jones - Fatima
  {
    slug: 'edward-burne-jones-fatima',
    description: `<p><a href="/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> painted this scene from the tale of Bluebeard, showing Fatima with the forbidden key. The composition captures the moment of <strong>temptation and discovery</strong> with Pre-Raphaelite intensity.</p>
<p>Burne-Jones often drew on fairy tales and legend for his subjects. His paintings combine moral drama with decorative beauty. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who is Fatima in this painting?", answer: "<strong>Fatima</strong> is the heroine of the Bluebeard tale who discovers her husband's murdered former wives." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> was associated with the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> and Aesthetic Movement." }
    ]
  },

  // 21. Jean-Antoine Watteau - Faun
  {
    slug: 'jean-antoine-watteau-faun',
    description: `<p><a href="/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> depicted this mythological woodland figure with the <strong>delicate touch</strong> and theatrical sensibility that characterized his work. The faun evokes the pastoral fantasies popular in Rococo art.</p>
<p>Watteau's work bridged theater and painting, often depicting figures from the commedia dell'arte and classical mythology. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this Faun?", answer: "<a href=\"/artist/jean-antoine-watteau\"><strong>Jean-Antoine Watteau</strong></a> was a French <a href=\"/movement/rococo\"><strong>Rococo</strong></a> painter known for theatrical and pastoral subjects." },
      { question: "What is a faun?", answer: "A <strong>faun</strong> is a mythological woodland creature, half-human and half-goat, associated with Pan and pastoral poetry." }
    ]
  },

  // 22. Rembrandt - Faust
  {
    slug: 'rembrandt-faust',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching depicting a scholar in his study, traditionally identified as Faust contemplating a <strong>mystical vision</strong>. Light streams through a window illuminating arcane symbols and books.</p>
<p>The image has fascinated viewers for centuries with its mysterious atmosphere. Whether depicting Faust or another scholar, it captures the Renaissance thirst for forbidden knowledge. The print is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "Who was Faust?", answer: "<strong>Faust</strong> is a legendary scholar who sold his soul for knowledge and power, inspiring works by Goethe and Marlowe." }
    ]
  },

  // 23. Lawrence Alma-Tadema - Faust and Marguerite
  {
    slug: 'lawrence-alma-tadema-faust-and-marguerite',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this scene from Goethe's Faust showing the scholar's seduction of innocent Marguerite. Though known for classical subjects, Alma-Tadema brought his <strong>detailed technique</strong> to this romantic tragedy.</p>
<p>The story of Faust's damnation and Marguerite's fall was a popular subject in 19th-century art. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this Faust scene?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> was known for ancient subjects but also painted literary themes with detailed technique." },
      { question: "Who is Marguerite?", answer: "<strong>Marguerite</strong> (Gretchen) is the innocent girl seduced and abandoned by Faust in Goethe's tragedy." }
    ]
  },

  // 24. Dante Gabriel Rossetti - Faust. Margaret in the Church
  {
    slug: 'dante-gabriel-rossetti-faust-margaret-in-the-church',
    description: `<p><a href="/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> depicted Marguerite at prayer, tormented by guilt after her seduction by Faust. The composition captures her <strong>spiritual anguish</strong> with Pre-Raphaelite intensity and rich color.</p>
<p>Rossetti was drawn to themes of sin, beauty, and redemption. His interpretation of Goethe's tragedy emphasizes Marguerite's suffering. The painting is at <a href="/museum/tate-modern"><strong>Tate Modern</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> in London." },
      { question: "What scene does this depict?", answer: "It shows <strong>Marguerite praying</strong> in church, tormented by guilt and an evil spirit after her seduction by Faust." }
    ]
  },

  // 25. Odilon Redon - Fear
  {
    slug: 'odilon-redon-fear',
    description: `<p><a href="/artist/odilon-redon"><strong>Odilon Redon</strong></a> created this work exploring the emotion of fear through <strong>symbolic imagery</strong>. The composition demonstrates Redon's ability to visualize psychological states with haunting clarity.</p>
<p>Redon's Symbolist work anticipated Surrealism in its exploration of dreams and the unconscious. The work is at the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/odilon-redon\"><strong>Redon</strong></a> was a <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> who visualized emotions and dreams with poetic imagery." }
    ]
  },

  // 26. Jean-Antoine Watteau - Feast in Park
  {
    slug: 'jean-antoine-watteau-feast-in-park',
    description: `<p><a href="/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted this fête galante showing elegantly dressed figures enjoying <strong>outdoor entertainment</strong> in a parkland setting. The composition epitomizes Rococo refinement and aristocratic leisure.</p>
<p>Watteau invented the fête galante genre, depicting idealized outdoor gatherings with theatrical grace. The painting is at the <a href="/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid." },
      { question: "What is a fête galante?", answer: "A <strong>fête galante</strong> depicts elegant outdoor entertainment, a genre invented by <a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>." }
    ]
  },

  // 27. Adriaen van Ostade - Feasting Peasants in a Tavern
  {
    slug: 'adriaen-van-ostade-feasting-peasants-in-a-tavern',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this scene of peasant revelry with the <strong>warm tones</strong> and lively characterization that made him famous. Figures drink, smoke, and celebrate in a rustic tavern interior.</p>
<p>Van Ostade specialized in peasant subjects, depicting rural life with humor and sympathy. His work influenced genre painting across Europe. The painting's current location is <strong>unknown</strong>.</p>`,
    faqs: [
      { question: "Who painted this tavern scene?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch Golden Age painter known for peasant scenes and tavern interiors." },
      { question: "What subjects did Van Ostade paint?", answer: "He specialized in <strong>peasant scenes</strong> showing drinking, smoking, and rural entertainment with warm humor." }
    ]
  },

  // 28. Paul Signac - Fecamp, Sunshine
  {
    slug: 'paul-signac-fecamp-sunshine',
    description: `<p><a href="/artist/paul-signac"><strong>Paul Signac</strong></a> painted this view of the Norman port of Fécamp with the <strong>brilliant color</strong> and systematic brushwork of Neo-Impressionism. Sunlight sparkles across water and buildings in dots of pure pigment.</p>
<p>Signac developed Pointillism with Seurat, applying color theory to create luminous effects. His harbor scenes are among his finest works. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this harbor scene?", answer: "<a href=\"/artist/paul-signac\"><strong>Paul Signac</strong></a> was a leading Neo-Impressionist who developed Pointillism with Georges Seurat." },
      { question: "What is Pointillism?", answer: "<strong>Pointillism</strong> uses dots of pure color that blend optically, creating luminous effects in paintings." }
    ]
  },

  // 29. Adriaen Brouwer - Feeling
  {
    slug: 'adriaen-brouwer-feeling',
    description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this scene exploring the sense of touch, likely part of a series on the five senses. The composition shows figures engaged in <strong>tactile experience</strong> with characteristic earthy humor.</p>
<p>Brouwer's genre scenes often contain wit beneath their rustic surfaces. His work was collected by Rubens and Rembrandt. The painting is at the <a href="/museum/residenzgalerie-salzburg"><strong>Residenzgalerie</strong></a> in Salzburg.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/residenzgalerie-salzburg\"><strong>Residenzgalerie</strong></a> in Salzburg, Austria." },
      { question: "Who collected Brouwer's work?", answer: "Both <strong>Rubens and Rembrandt</strong> owned paintings by <a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a>, recognizing his distinctive talent." }
    ]
  },

  // 30. Félix Vallotton - Felix Jasinski in His Printmaking Studio
  {
    slug: 'felix-vallotton-felix-jasinski-in-his-printmaking-studio',
    description: `<p><a href="/artist/felix-vallotton"><strong>Félix Vallotton</strong></a> painted this portrait of fellow artist Felix Jasinski at work in his printmaking studio. The composition captures the <strong>focused concentration</strong> of creative work with Vallotton's characteristic clean lines and flat color.</p>
<p>Vallotton was a Swiss-French painter associated with the Nabis. His portraits and interiors combine realism with decorative simplification. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this studio scene?", answer: "<a href=\"/artist/felix-vallotton\"><strong>Félix Vallotton</strong></a> was a Swiss-French painter known for woodcuts and paintings with flat, bold style." },
      { question: "Who was Felix Jasinski?", answer: "<strong>Felix Jasinski</strong> was a printmaker and friend of Vallotton, depicted here at work in his studio." }
    ]
  },

  // 31. Alexandre Cabanel - Felix Masse
  {
    slug: 'alexandre-cabanel-felix-masse',
    description: `<p><a href="/artist/alexandre-cabanel"><strong>Alexandre Cabanel</strong></a> painted this portrait with the <strong>polished technique</strong> that made him one of the most successful French Academic painters. The sitter is rendered with careful attention to likeness and dignified bearing.</p>
<p>Cabanel was a leading figure in French academic painting, known for both portraits and mythological subjects. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/alexandre-cabanel\"><strong>Alexandre Cabanel</strong></a> was a leading French Academic painter known for refined technique." },
      { question: "What is Academic painting?", answer: "<strong>Academic painting</strong> followed rules established by art academies, emphasizing polish, classical subjects, and refined technique." }
    ]
  },

  // 32. Lawrence Alma-Tadema - Female dog and two puppies
  {
    slug: 'lawrence-alma-tadema-female-dog-and-two-puppies-in-collaboration-with-m',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> collaborated with <strong>Matthijs Maris</strong> on this charming study of a dog with her puppies. The composition combines Alma-Tadema's precise technique with Maris's sensitivity to animal subjects.</p>
<p>Such collaborations between artists were not uncommon in the 19th century. The painting is at the <a href="/museum/bredius-museum"><strong>Bredius Museum</strong></a> in The Hague.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/bredius-museum\"><strong>Bredius Museum</strong></a> in The Hague, Netherlands." },
      { question: "Who was Matthijs Maris?", answer: "<strong>Matthijs Maris</strong> was a Dutch painter known for dreamlike, romantic subjects and sensitive animal studies." }
    ]
  },

  // 33. Georges Seurat - Female from back (black woman)
  {
    slug: 'georges-seurat-female-from-back-black-woman',
    description: `<p><a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> created this figure study showing a woman from behind, rendered with his <strong>distinctive drawing technique</strong>. The soft, velvety tones are achieved through careful application of conté crayon on textured paper.</p>
<p>Seurat's drawings are as admired as his paintings, demonstrating his mastery of tonal gradation. The work is at the <a href="/museum/musee-picasso-paris"><strong>Musée Picasso</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this drawing?", answer: "It's at the <a href=\"/museum/musee-picasso-paris\"><strong>Musée Picasso</strong></a> in Paris." },
      { question: "What made Seurat's drawings distinctive?", answer: "<a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> used <strong>conté crayon on textured paper</strong> to create soft, velvety tonal effects." }
    ]
  },

  // 34. Gustav Klimt - Female Nude
  {
    slug: 'gustav-klimt-female-nude',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this study of the female form with the <strong>sensuous line</strong> characteristic of his mature work. The drawing demonstrates Klimt's facility in capturing the human figure with fluid, confident strokes.</p>
<p>Klimt produced thousands of drawings, many of female nudes that explored the same themes as his paintings. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who created this nude study?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> was an Austrian Symbolist known for decorative paintings and sensuous figure drawings." },
      { question: "How many drawings did Klimt make?", answer: "Klimt created <strong>thousands of drawings</strong>, many of female nudes that complement his painted work." }
    ]
  },

  // 35. Gustav Klimt - Female organ player
  {
    slug: 'gustav-klimt-female-organ-player',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this early work showing a woman at an organ, demonstrating his <strong>academic training</strong> before developing his famous decorative style. The composition combines musical subject matter with careful observation.</p>
<p>Klimt's early work shows the solid technique that underlay his later innovations. The painting is at the <a href="/museum/belvedere"><strong>Belvedere</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/belvedere\"><strong>Belvedere</strong></a> in Vienna, which holds major works by Austrian artists." },
      { question: "Is this typical of Klimt's work?", answer: "This is an <strong>early work</strong> before <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> developed his famous gold and decorative style." }
    ]
  },

  // 36. Albrecht Dürer - Fencing Reiter
  {
    slug: 'albrecht-durer-fencing-reiter',
    description: `<p><a href="/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> depicted this mounted swordsman with the <strong>precise observation</strong> characteristic of German Renaissance art. The composition captures the horse and rider with detailed attention to anatomy and equipment.</p>
<p>Dürer's drawings and prints set standards for depicting the human and animal form. This work is at the <a href="/museum/british-museum"><strong>British Museum</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/british-museum\"><strong>British Museum</strong></a> in London." },
      { question: "What is a Reiter?", answer: "A <strong>Reiter</strong> was a German mounted soldier, typically armed with sword and pistols." }
    ]
  },

  // 37. John Everett Millais - Ferdinand Lured by Ariel
  {
    slug: 'john-everett-millais-ferdinand-lured-by-ariel',
    description: `<p><a href="/artist/john-everett-millais"><strong>John Everett Millais</strong></a> painted this scene from Shakespeare's Tempest showing Ferdinand drawn by the spirit Ariel through an <strong>enchanted landscape</strong>. The composition combines Pre-Raphaelite detail with theatrical magic.</p>
<p>Millais was a founder of the Pre-Raphaelite Brotherhood, known for vivid color and literary subjects. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What scene does this depict?", answer: "It shows <strong>Ferdinand following Ariel</strong> in Shakespeare's Tempest, lured by magical music to meet Miranda." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/john-everett-millais\"><strong>Millais</strong></a> co-founded the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848." }
    ]
  },

  // 38. Pierre Bonnard - Figures in the Street
  {
    slug: 'pierre-bonnard-figures-in-the-street',
    description: `<p><a href="/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this urban scene with the <strong>intimate observation</strong> and warm palette characteristic of his work. Pedestrians move through a street captured with spontaneous vitality.</p>
<p>Bonnard's street scenes show his interest in everyday Parisian life, influenced by Impressionism and Japanese prints. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this street scene?", answer: "<a href=\"/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> was a French painter known for intimate domestic scenes and warm, glowing color." },
      { question: "What influenced Bonnard's work?", answer: "Bonnard was influenced by <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and <strong>Japanese prints</strong>, combining both in his personal style." }
    ]
  },

  // 39. Paul Cézanne - Fisherman on the Rocks
  {
    slug: 'paul-cezanne-fisherman-on-the-rocks',
    description: `<p><a href="/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted this scene of a fisherman on rocky terrain with the <strong>structural brushwork</strong> that revolutionized modern painting. The composition builds form through patches of color rather than traditional modeling.</p>
<p>Cézanne's approach to depicting nature influenced Cubism and abstract art. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/paul-cezanne\"><strong>Paul Cézanne</strong></a> was a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> whose structural approach influenced modern art." },
      { question: "What made Cézanne's style revolutionary?", answer: "Cézanne built form through <strong>patches of color</strong> rather than traditional shading, influencing Cubism and abstraction." }
    ]
  },

  // 40. Paris Bordone - Fisherman Presenting the Ring to the Doge
  {
    slug: 'fisherman-presenting-ring-doge',
    description: `<p><a href="/artist/paris-bordone"><strong>Paris Bordone</strong></a> painted this scene from Venetian legend showing a fisherman returning St. Mark's ring to the Doge. The composition captures the <strong>pageantry of Venice</strong> with rich color and architectural splendor.</p>
<p>The legend tells how St. Mark gave his ring to a fisherman during a storm. Bordone's painting celebrates Venetian civic pride. The work is at the <a href="/museum/gallerie-dellaccademia"><strong>Gallerie dell'Accademia</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/gallerie-dellaccademia\"><strong>Gallerie dell'Accademia</strong></a> in Venice." },
      { question: "What legend does this depict?", answer: "A fisherman returns <strong>St. Mark's ring</strong> to the Doge, given to him by the saint during a miraculous rescue." }
    ]
  },

  // 41. Gustave Caillebotte - Fishermen on the Banks of the Yerres
  {
    slug: 'gustave-caillebotte-fishermen-on-the-banks-of-the-yerres',
    description: `<p><a href="/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this scene of fishermen along the Yerres River with the <strong>natural light</strong> and careful perspective that characterized his work. The composition captures leisure along the river near his family estate.</p>
<p>Caillebotte painted many scenes of the Yerres, combining Impressionist color with realistic observation. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this river scene?", answer: "<a href=\"/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> was a French <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> known for urban scenes and river subjects." },
      { question: "What is the Yerres?", answer: "The <strong>Yerres River</strong> flowed near Caillebotte's family estate, inspiring many of his most lyrical paintings." }
    ]
  },

  // 42. Henri de Toulouse-Lautrec - Fishing Boat
  {
    slug: 'henri-toulouse-lautrec-fishing-boat',
    description: `<p><a href="/artist/henri-de-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this marine scene with the <strong>bold line</strong> and simplified forms characteristic of his work. Though known for Parisian nightlife, Lautrec also painted coastal subjects.</p>
<p>Lautrec's diverse subjects demonstrate his graphic sensibility applied to various themes. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this fishing boat?", answer: "<a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> was a French artist known for posters and paintings of Parisian nightlife." },
      { question: "Did Lautrec paint landscapes?", answer: "Though known for <strong>Parisian scenes</strong>, Lautrec also painted horses, portraits, and occasional landscapes." }
    ]
  },

  // 43. Albert Bierstadt - Fishing Boats at Capri
  {
    slug: 'albert-bierstadt-fishing-boats-at-capri',
    description: `<p><a href="/artist/albert-bierstadt"><strong>Albert Bierstadt</strong></a> painted this Mediterranean scene showing fishing boats off the Italian coast. The composition captures the <strong>luminous atmosphere</strong> of Capri with the mastery of light that made Bierstadt famous for his American landscapes.</p>
<p>Bierstadt traveled extensively in Europe, painting Italian and Alpine subjects alongside his Western American views. The painting is at the <a href="/museum/museum-of-fine-arts-boston"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museum-of-fine-arts-boston\"><strong>Museum of Fine Arts</strong></a> in Boston." },
      { question: "Why did Bierstadt paint Italian scenes?", answer: "<a href=\"/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> traveled through <strong>Europe and America</strong>, painting landscapes on both continents." }
    ]
  },

  // 44. John Singer Sargent - Fishing for Oysters at Cancale
  {
    slug: 'john-singer-sargent-fishing-for-oysters-at-cancale',
    description: `<p><a href="/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted this early work showing oyster gatherers on a Brittany beach. The composition captures <strong>brilliant sunlight</strong> on wet sand and working figures with the bravura brushwork that would make Sargent famous.</p>
<p>Painted when Sargent was only twenty-two, this work already displays his mastery of light and atmosphere. The painting is at the <a href="/museum/museum-of-fine-arts-boston"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museum-of-fine-arts-boston\"><strong>Museum of Fine Arts</strong></a> in Boston." },
      { question: "When did Sargent paint this?", answer: "<a href=\"/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted this at <strong>age twenty-two</strong>, already showing his mastery of light." }
    ]
  },

  // 45. Nikolai Ge - Florence
  {
    slug: 'nikolai-ge-florence',
    description: `<p><a href="/artist/nikolai-ge"><strong>Nikolai Ge</strong></a> painted this view of Florence capturing the city's <strong>architectural splendor</strong> with the careful observation characteristic of Russian Realism. The composition presents the Italian city with atmospheric sensitivity.</p>
<p>Ge was a leading Russian painter who traveled to Italy, influenced by both Italian art and European Realism. The painting is at the <a href="/museum/museum-of-russian-art-kyiv"><strong>Museum of Russian Art</strong></a> in Kyiv.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museum-of-russian-art-kyiv\"><strong>Museum of Russian Art</strong></a> in Kyiv, Ukraine." },
      { question: "Who was Nikolai Ge?", answer: "<a href=\"/artist/nikolai-ge\"><strong>Nikolai Ge</strong></a> was a major Russian painter known for historical and religious subjects." }
    ]
  },

  // 46. Henri Fantin-Latour - Flowers
  {
    slug: 'henri-fantin-latour-flowers',
    description: `<p><a href="/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> painted this floral arrangement with the <strong>delicate observation</strong> that made him the most celebrated flower painter of his era. Blooms are rendered with soft precision against a subtle background.</p>
<p>Fantin-Latour's flower paintings were highly sought by collectors, particularly in England. His work combines realism with poetic sensitivity. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted these flowers?", answer: "<a href=\"/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a> was a French painter celebrated for exquisite flower still lifes." },
      { question: "What made his flower paintings popular?", answer: "His <strong>delicate realism</strong> and poetic sensitivity made his flower paintings highly sought by collectors." }
    ]
  },

  // 47. Henri Fantin-Latour - Flowers Camelias and Tulips
  {
    slug: 'henri-fantin-latour-flowers-camelias-and-tulips',
    description: `<p><a href="/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> arranged camellias and tulips in this <strong>harmonious composition</strong>, demonstrating his mastery of flower painting. Each petal is rendered with careful attention to color and texture.</p>
<p>Fantin-Latour's floral subjects secured his reputation and financial success. His work influenced later flower painters including Manet. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this still life?", answer: "<a href=\"/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a> specialized in flower paintings prized for their delicate realism." },
      { question: "What flowers are depicted?", answer: "This shows <strong>camellias and tulips</strong> arranged with Fantin-Latour's characteristic harmony and precision." }
    ]
  },

  // 48. Henri Fantin-Latour - Flowers, Cyclamens
  {
    slug: 'henri-fantin-latour-flowers-cyclamens',
    description: `<p><a href="/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> painted these cyclamens with the <strong>soft luminosity</strong> characteristic of his finest flower studies. The delicate pink and white blooms emerge from shadowy foliage with quiet elegance.</p>
<p>Cyclamens, with their reflexed petals and subtle coloring, presented particular challenges that Fantin-Latour mastered beautifully. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted these cyclamens?", answer: "<a href=\"/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a> was a French master of flower painting in the 19th century." },
      { question: "Why are Fantin-Latour's flowers valued?", answer: "His <strong>soft luminosity</strong> and precise observation made his flower paintings highly collectible." }
    ]
  },

  // 49. Adolph Menzel - Flute Concert with Frederick the Great at Sanssouci
  {
    slug: 'adolph-menzel-flute-concert-with-frederick-the-great-at-sanssouc',
    description: `<p><a href="/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this famous scene of Frederick the Great playing flute at his palace Sanssouci. The composition captures the <strong>candlelit atmosphere</strong> of an 18th-century musical evening with remarkable detail.</p>
<p>Menzel's meticulous reconstruction of historical scenes made him Germany's leading history painter. The painting is at the <a href="/museum/staatliche-museen-zu-berlin"><strong>Staatliche Museen zu Berlin</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/staatliche-museen-zu-berlin\"><strong>Staatliche Museen zu Berlin</strong></a>." },
      { question: "Did Frederick the Great play flute?", answer: "<strong>Frederick the Great</strong> was an accomplished flautist who composed over 100 sonatas and held regular concerts at Sanssouci." }
    ]
  },

  // 50. Caspar David Friedrich - Fog
  {
    slug: 'caspar-david-friedrich-fog',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this atmospheric landscape where fog obscures the view, creating a sense of <strong>mystery and transcendence</strong>. The composition exemplifies Romantic interest in nature's spiritual dimension.</p>
<p>Friedrich's fog-shrouded landscapes evoke the sublime and the infinite. His work influenced later artists exploring atmospheric effects. The painting is at the <a href="/museum/belvedere"><strong>Belvedere</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/belvedere\"><strong>Belvedere</strong></a> in Vienna." },
      { question: "What did fog represent for Friedrich?", answer: "For <a href=\"/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a>, <strong>fog symbolized mystery</strong> and the boundary between visible and spiritual realms." }
    ]
  },

  // 51. Hans Holbein the Younger - Folly at the Lectern
  {
    slug: 'hans-holbein-younger-folly-at-the-lectern',
    description: `<p><a href="/artist/hans-holbein-the-younger"><strong>Hans Holbein the Younger</strong></a> created this satirical image of Folly at a lectern, likely illustrating Erasmus's <strong>Praise of Folly</strong>. The composition shows Holbein's skill in combining wit with technical mastery.</p>
<p>Holbein and Erasmus were friends, and the artist illustrated the philosopher's famous satire. The work is at the <a href="/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland." },
      { question: "What is the Praise of Folly?", answer: "<strong>Praise of Folly</strong> is Erasmus's satirical essay criticizing church and society, which <a href=\"/artist/hans-holbein-the-younger\"><strong>Holbein</strong></a> illustrated." }
    ]
  },

  // 52. Thomas Gainsborough - Forest (Cornard Wood)
  {
    slug: 'thomas-gainsborough-forest-cornard-wood',
    description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this early landscape of Cornard Wood in his native Suffolk with <strong>naturalistic observation</strong> influenced by Dutch landscape painting. The composition captures the English countryside with fresh, direct vision.</p>
<p>This is among Gainsborough's earliest major landscapes, showing his talent before he focused primarily on portraits. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "When did Gainsborough paint this?", answer: "This is an <strong>early work</strong> from the 1740s, before <a href=\"/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> became primarily a portrait painter." }
    ]
  },

  // 53. Wassily Kandinsky - Forest edge
  {
    slug: 'wassily-kandinsky-forest-edge',
    description: `<p><a href="/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted this landscape capturing the edge of a forest with <strong>vibrant color</strong> and expressive brushwork. The composition shows his early style before moving to pure abstraction.</p>
<p>Kandinsky's landscapes reveal his evolving approach to color as emotional expression. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Forest edge?", answer: "<a href=\"/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a> was a pioneer of <a href=\"/movement/abstract-art\"><strong>abstract art</strong></a>, though he began with expressive landscapes." },
      { question: "Is this painting abstract?", answer: "This is an <strong>early landscape</strong> before Kandinsky developed his famous abstract style." }
    ]
  },

  // 54. Frédéric Bazille - Forest of Fontainebleau
  {
    slug: 'frederic-bazille-forest-of-fontainebleau',
    description: `<p><a href="/artist/frederic-bazille"><strong>Frédéric Bazille</strong></a> painted this view of the famous forest where many Impressionists worked outdoors. The composition captures <strong>dappled light</strong> through trees with the fresh observation that characterized early Impressionism.</p>
<p>Fontainebleau was a gathering place for artists seeking to paint nature directly. Bazille worked alongside Monet and Renoir there. The painting is at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
      { question: "Why was Fontainebleau important?", answer: "The <strong>Forest of Fontainebleau</strong> was where early Impressionists gathered to paint outdoors, developing their techniques." }
    ]
  },

  // 55. Gerard David - Forest Scene
  {
    slug: 'gerard-david-forest-scene',
    description: `<p><a href="/artist/gerard-david"><strong>Gerard David</strong></a> painted this woodland scene with the <strong>detailed naturalism</strong> characteristic of Netherlandish painting. The composition may have formed a background for a religious or mythological scene.</p>
<p>David was the last great painter of the Bruges school, known for religious works and landscapes. The painting is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
      { question: "Who was Gerard David?", answer: "<a href=\"/artist/gerard-david\"><strong>Gerard David</strong></a> was the last major painter of the <strong>Bruges school</strong> in the early 16th century." }
    ]
  },

  // 56. Egon Schiele - Forest with Sunlit Clearing in the Background
  {
    slug: 'egon-schiele-forest-with-sunlit-clearing-in-the-background',
    description: `<p><a href="/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted this landscape with the <strong>expressive line</strong> and intense observation characteristic of his work. A sunlit clearing glows beyond dark trees, creating dramatic contrast.</p>
<p>Though better known for figure work, Schiele's landscapes demonstrate his powerful graphic style applied to nature. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this forest scene?", answer: "<a href=\"/artist/egon-schiele\"><strong>Egon Schiele</strong></a> was an Austrian <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> known for intense figure work and landscapes." },
      { question: "Did Schiele paint many landscapes?", answer: "Though known for <strong>figures</strong>, Schiele also created powerful landscapes with his characteristic expressive line." }
    ]
  },

  // 57. Théodore Chassériau - Forge du Creusot
  {
    slug: 'theodore-chasseriau-forge-du-creusot',
    description: `<p><a href="/artist/theodore-chasseriau"><strong>Théodore Chassériau</strong></a> painted this industrial scene depicting the famous ironworks at Le Creusot. The composition captures the <strong>dramatic light of the forge</strong> with Romantic intensity applied to modern industry.</p>
<p>Chassériau was a pupil of Ingres who developed his own romantic style. This industrial subject is unusual in his work. The painting is at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris." },
      { question: "What is Le Creusot?", answer: "<strong>Le Creusot</strong> was a major French ironworks, symbol of Industrial Revolution progress." }
    ]
  },

  // 58. Sandro Botticelli - Fortitude
  {
    slug: 'sandro-botticelli-fortitude',
    description: `<p><a href="/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this allegorical figure representing Fortitude, one of the cardinal virtues. The figure sits enthroned in armor, embodying <strong>strength and courage</strong> with Renaissance grace.</p>
<p>This was Botticelli's first documented commission, establishing his reputation in Florence. The painting is at the <a href="/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/uffizi-gallery\"><strong>Uffizi Gallery</strong></a> in Florence." },
      { question: "Why is this painting significant?", answer: "This was <a href=\"/artist/sandro-botticelli\"><strong>Botticelli's</strong></a> <strong>first major commission</strong>, launching his career in Florence." }
    ]
  },

  // 59. George Bellows - Forty-two Kids
  {
    slug: 'george-bellows-fortytwo-kids',
    description: `<p><a href="/artist/george-bellows"><strong>George Bellows</strong></a> painted this scene of boys swimming off a New York dock with the <strong>vigorous brushwork</strong> and urban realism that characterized the Ashcan School. Figures tumble and dive in energetic profusion.</p>
<p>Bellows captured working-class New York with raw vitality. This painting caused controversy for its nudity but was praised for its energy. The painting is at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
      { question: "What is the Ashcan School?", answer: "The <strong>Ashcan School</strong> depicted gritty urban American life, rejecting academic subjects for working-class realism." }
    ]
  },

  // 60. Rembrandt - Four illustrations to a Spanish book
  {
    slug: 'rembrandt-four-illustrations-to-a-spanish-book',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created these illustrations for a Spanish publication, demonstrating his <strong>narrative skill</strong> in graphic form. The etchings show his mastery of light and shadow even at small scale.</p>
<p>Rembrandt's prints were collected throughout Europe, spreading his influence beyond the Netherlands. This work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where are these illustrations?", answer: "They're at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
      { question: "Did Rembrandt illustrate books?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created <strong>nearly 300 etchings</strong>, some as book illustrations, spreading his fame across Europe." }
    ]
  },

  // 61. Edgar Degas - Four Jockeys
  {
    slug: 'edgar-degas-four-jockeys',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this racing scene with the <strong>dynamic composition</strong> and cropped viewpoint characteristic of his horse subjects. Four jockeys prepare for or complete a race, captured with spontaneous energy.</p>
<p>Degas was fascinated by horses and racing, depicting them with the same careful observation he applied to dancers. The painting is at the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>." },
      { question: "Did Degas paint many horse scenes?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> painted <strong>horses and racing</strong> throughout his career, studying movement as carefully as his dancers." }
    ]
  },

  // 62. Correggio - Four Saints
  {
    slug: 'correggio-four-saints-from-left-st-peter-st-martha-st-mary-m',
    description: `<p><a href="/artist/correggio"><strong>Correggio</strong></a> painted these four saints with the <strong>soft modeling</strong> and graceful poses characteristic of his work. St. Peter, St. Martha, St. Mary Magdalene, and St. Leonard are depicted with tender humanity.</p>
<p>Correggio's sfumato technique and emotional warmth influenced later Baroque painters. The painting is at the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York." },
      { question: "What made Correggio influential?", answer: "<a href=\"/artist/correggio\"><strong>Correggio's</strong></a> <strong>soft modeling</strong> and emotional warmth influenced later Baroque masters." }
    ]
  },

  // 63. John Singer Sargent - Frank O'Meara
  {
    slug: 'john-singer-sargent-franko39meara',
    description: `<p><a href="/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted this portrait of fellow artist Frank O'Meara with the <strong>fluid brushwork</strong> and psychological insight that characterized his best portraits. The Irish painter is captured with informal directness.</p>
<p>O'Meara was part of the artistic colony at Grez-sur-Loing where Sargent worked. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a> was the leading portrait painter of his era, known for fluid brushwork." },
      { question: "Who was Frank O'Meara?", answer: "<strong>Frank O'Meara</strong> was an Irish painter who worked in France, part of the artistic community at Grez-sur-Loing." }
    ]
  },

  // 64. Ernst Ludwig Kirchner - Frauenkirche
  {
    slug: 'ernst-ludwig-kirchner-frauenkirche',
    description: `<p><a href="/artist/ernst-ludwig-kirchner"><strong>Ernst Ludwig Kirchner</strong></a> painted this view of Dresden's Frauenkirche with the <strong>angular forms</strong> and intense color of German Expressionism. The famous church is transformed through Kirchner's emotionally charged vision.</p>
<p>Kirchner was a founder of Die Brücke, revolutionizing German art with raw, expressive power. The painting is at the <a href="/museum/brucke-museum"><strong>Brücke Museum</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/brucke-museum\"><strong>Brücke Museum</strong></a> in Berlin, dedicated to Die Brücke artists." },
      { question: "What is Die Brücke?", answer: "<a href=\"/movement/expressionism\"><strong>Die Brücke</strong></a> (The Bridge) was a German Expressionist group co-founded by <a href=\"/artist/ernst-ludwig-kirchner\"><strong>Kirchner</strong></a> in Dresden." }
    ]
  },

  // 65. Juan de Valdés Leal - Fray Pedro Fernández Pecha
  {
    slug: 'juan-de-valdes-leal-fray-pedro-fern225ndez-pecha',
    description: `<p><a href="/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this portrait of the religious figure Fray Pedro Fernández Pecha with the <strong>dramatic intensity</strong> characteristic of Spanish Baroque painting. The composition captures the spiritual authority of the sitter.</p>
<p>Valdés Leal was a leading painter in Seville, known for intense religious subjects. The painting is at the <a href="/museum/museo-de-bellas-artes-de-sevilla"><strong>Museum of Fine Arts of Seville</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museo-de-bellas-artes-de-sevilla\"><strong>Museum of Fine Arts of Seville</strong></a>." },
      { question: "What style is this painting?", answer: "It's Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a>, emphasizing drama and spiritual intensity." }
    ]
  },

  // 66. Pierre-Auguste Renoir - Frederic Bazille Painting The Heron
  {
    slug: 'pierre-auguste-renoir-frederic-bazille-painting-the-heron-frederic-bazil',
    description: `<p><a href="/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted his friend Frédéric Bazille at work on a canvas showing a heron. The composition captures the <strong>intimate camaraderie</strong> of young artists working together, with soft light filling Bazille's studio.</p>
<p>Renoir and Bazille were close friends who shared studios and subjects. Bazille's death in the Franco-Prussian War cut short a promising career. The painting is at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
      { question: "Who was Frédéric Bazille?", answer: "<strong>Bazille</strong> was a promising painter and friend of <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>, killed at age 28 in the Franco-Prussian War." }
    ]
  },

  // 67. Max Liebermann - Free hour at the Amsterdam Orphanage
  {
    slug: 'max-liebermann-free-hour-at-the-amsterdam-orphanage',
    description: `<p><a href="/artist/max-liebermann"><strong>Max Liebermann</strong></a> painted this scene of orphan girls at leisure with the <strong>naturalistic observation</strong> and loose brushwork that characterized German Impressionism. The composition captures a moment of respite with sympathetic humanity.</p>
<p>Liebermann was Germany's leading Impressionist, known for scenes of work and leisure painted with fresh observation. The painting is at the <a href="/museum/stadel"><strong>Städel</strong></a> in Frankfurt.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/stadel\"><strong>Städel</strong></a> in Frankfurt am Main." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/max-liebermann\"><strong>Liebermann</strong></a> was Germany's leading <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a>, known for naturalistic observation." }
    ]
  },

  // 68. Frida Kahlo - Frida and the Miscarriage
  {
    slug: 'frida-kahlo-frida-and-the-miscarriage',
    description: `<p><a href="/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> created this work addressing her personal tragedy of miscarriage with <strong>unflinching honesty</strong>. The composition transforms private pain into powerful art through Kahlo's distinctive symbolic imagery.</p>
<p>Kahlo's work often addressed her physical suffering and inability to have children. Her personal symbolism created a unique artistic language. The painting is at the <a href="/museum/dolores-olmedo-collection"><strong>Dolores Olmedo Collection</strong></a> in Mexico City.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/dolores-olmedo-collection\"><strong>Dolores Olmedo Collection</strong></a> in Mexico City." },
      { question: "What themes did Kahlo explore?", answer: "<a href=\"/artist/frida-kahlo\"><strong>Kahlo</strong></a> addressed <strong>physical suffering</strong>, identity, and personal trauma with symbolic intensity." }
    ]
  },

  // 69. Frida Kahlo - Frieda and Diego Rivera
  {
    slug: 'frida-kahlo-frieda-and-diego-rivera',
    description: `<p><a href="/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this double portrait shortly after her marriage to Diego Rivera. The composition shows the couple with Frida appearing <strong>small beside her monumental husband</strong>, reflecting their complex relationship.</p>
<p>Kahlo and Rivera's marriage was passionate and turbulent. This early work already shows her distinctive style emerging. The painting is at the <a href="/museum/sfmoma"><strong>San Francisco Museum of Modern Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/sfmoma\"><strong>San Francisco Museum of Modern Art</strong></a>." },
      { question: "When did Kahlo paint this?", answer: "<a href=\"/artist/frida-kahlo\"><strong>Kahlo</strong></a> painted this shortly after her <strong>1929 marriage</strong> to Diego Rivera." }
    ]
  },

  // 70. George Stubbs - Frontal view of the skeleton of a horse
  {
    slug: 'george-stubbs-frontal-view-of-the-skeleton-of-a-horse-study-no-1',
    description: `<p><a href="/artist/george-stubbs"><strong>George Stubbs</strong></a> created this anatomical study showing a horse skeleton from the front as part of his groundbreaking book The Anatomy of the Horse. The drawing demonstrates his <strong>scientific precision</strong> and artistic skill.</p>
<p>Stubbs spent eighteen months dissecting horses to create his anatomical studies. His book revolutionized the understanding of equine anatomy. The work is at the <a href="/museum/royal-academy"><strong>Royal Academy of Arts</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this drawing?", answer: "It's at the <a href=\"/museum/royal-academy\"><strong>Royal Academy of Arts</strong></a> in London." },
      { question: "Why did Stubbs study horse anatomy?", answer: "<a href=\"/artist/george-stubbs\"><strong>Stubbs</strong></a> spent <strong>18 months dissecting horses</strong> to create his revolutionary anatomy book." }
    ]
  },

  // 71. Rembrandt - Full Length Portrait of a Standing Man
  {
    slug: 'rembrandt-full-length-portrait-of-a-standing-man',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this full-length portrait with characteristic <strong>dramatic lighting</strong> and psychological presence. The standing figure emerges from shadow with dignified bearing.</p>
<p>Rembrandt's full-length portraits were less common than his half-length works but equally powerful. The painting is at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
      { question: "What makes Rembrandt's portraits distinctive?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used <strong>dramatic lighting</strong> and psychological insight to bring his subjects to life." }
    ]
  },

  // 72. Caspar David Friedrich - Funeral scene at the beach
  {
    slug: 'caspar-david-friedrich-funeral-scene-at-the-beach',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this melancholy scene combining a funeral procession with a <strong>coastal landscape</strong>. The composition evokes themes of mortality and transcendence characteristic of Romantic painting.</p>
<p>Friedrich's landscapes often address death and the infinite, finding spiritual meaning in nature. The painting is at the <a href="/museum/kunsthalle-mannheim"><strong>Kunsthalle Mannheim</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/kunsthalle-mannheim\"><strong>Kunsthalle Mannheim</strong></a> in Germany." },
      { question: "What themes did Friedrich explore?", answer: "<a href=\"/artist/caspar-david-friedrich\"><strong>Friedrich's</strong></a> landscapes address <strong>mortality and transcendence</strong> through contemplative nature scenes." }
    ]
  },

  // 73. Maurice Quentin de La Tour - Gabriel Bernard de Rieux
  {
    slug: 'maurice-quentin-de-la-tour-gabriel-bernard-de-rieux',
    description: `<p><a href="/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this pastel portrait with the <strong>vivid characterization</strong> that made him the most sought-after portraitist in 18th-century France. The sitter's personality emerges with remarkable immediacy.</p>
<p>La Tour's pastels captured French society with psychological acuity. This work is at the <a href="/museum/getty-museum"><strong>J. Paul Getty Museum</strong></a> in Los Angeles.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/getty-museum\"><strong>J. Paul Getty Museum</strong></a> in Los Angeles." },
      { question: "What medium did La Tour use?", answer: "<a href=\"/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> worked in <strong>pastel</strong>, achieving remarkable vivacity and psychological depth." }
    ]
  },

  // 74. Wassily Kandinsky - Gabriele Munter painting
  {
    slug: 'wassily-kandinsky-gabriele-munter-painting',
    description: `<p><a href="/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted this portrait of his partner Gabriele Münter at work, capturing the <strong>creative focus</strong> of a fellow artist. The composition shows his early figurative style before fully embracing abstraction.</p>
<p>Münter was Kandinsky's student, then partner and fellow artist. Their relationship produced some of the most important work of early modernism. The painting is at the <a href="/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich, which holds major works by the Blue Rider group." },
      { question: "Who was Gabriele Münter?", answer: "<strong>Gabriele Münter</strong> was an important painter and <a href=\"/artist/wassily-kandinsky\"><strong>Kandinsky's</strong></a> partner during their years in Munich." }
    ]
  },

  // 75. Bronzino - Galatea and Pygmalion
  {
    slug: 'bronzino-galatea-and-pygmalion',
    description: `<p><a href="/artist/bronzino"><strong>Bronzino</strong></a> painted this mythological scene of the sculptor Pygmalion and his beloved statue Galatea with the <strong>cool elegance</strong> characteristic of Mannerist painting. The composition depicts the moment the statue comes to life.</p>
<p>Bronzino was the leading Florentine painter of his generation, known for sophisticated mythological subjects and portraits. The painting is at the <a href="/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/uffizi-gallery\"><strong>Uffizi Gallery</strong></a> in Florence." },
      { question: "What is the Pygmalion story?", answer: "<strong>Pygmalion</strong> was a sculptor who fell in love with his statue, which Venus brought to life as Galatea." }
    ]
  },

  // 76. Gerard ter Borch - Gallant Conversation (The Paternal Admonition)
  {
    slug: 'gerard-ter-borch-gallant-conversation-the-paternal-admonition',
    description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this enigmatic scene long called "The Paternal Admonition" but now understood as a <strong>gallant conversation</strong> with possibly sexual undertones. A woman in stunning white satin stands with her back to the viewer.</p>
<p>The painting's ambiguity has fascinated viewers for centuries. Ter Borch was famous for rendering satin and subtle social interactions. The painting is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
      { question: "What is the scene about?", answer: "The scene's meaning is <strong>ambiguous</strong>, possibly depicting a brothel visit rather than paternal advice." }
    ]
  },

  // 77. Lawrence Alma-Tadema - Gallo Roman Women
  {
    slug: 'lawrence-alma-tadema-gallo-roman-women',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this scene of women in Roman Gaul with the <strong>archaeological detail</strong> and marble rendering for which he was famous. The composition recreates daily life in the ancient world with meticulous accuracy.</p>
<p>Alma-Tadema researched Roman life extensively, bringing historical accuracy to his imagined scenes. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this classical scene?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> specialized in scenes of ancient Greece and Rome with detailed archaeological accuracy." },
      { question: "What is Gallo-Roman?", answer: "<strong>Gallo-Roman</strong> refers to Roman culture in Gaul (France), blending Roman and Celtic elements." }
    ]
  },

  // 78. Winslow Homer - Game of Croquet
  {
    slug: 'winslow-homer-game-of-croquet',
    description: `<p><a href="/artist/winslow-homer"><strong>Winslow Homer</strong></a> painted this scene of fashionable Americans playing croquet with the <strong>bright outdoor light</strong> and careful observation that characterized his early work. The composition captures leisure in post-Civil War America.</p>
<p>Homer's croquet paintings document American social life with fresh, direct vision. The painting is at the <a href="/museum/yale-university-art-gallery"><strong>Yale University Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/yale-university-art-gallery\"><strong>Yale University Art Gallery</strong></a> in New Haven." },
      { question: "Why did Homer paint croquet scenes?", answer: "<strong>Croquet</strong> was newly fashionable in 1860s America, allowing <a href=\"/artist/winslow-homer\"><strong>Homer</strong></a> to depict outdoor leisure and fashion." }
    ]
  },

  // 79. Jean-Baptiste-Siméon Chardin - Game Still Life with Hunting Dog
  {
    slug: 'jean-baptiste-simeon-chardin-game-still-life-with-hunting-dog',
    description: `<p><a href="/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Siméon Chardin</strong></a> painted this hunting still life with the <strong>quiet dignity</strong> he brought to all his subjects. A hunting dog regards the day's game arranged on a stone ledge with masterful texture and light.</p>
<p>Chardin elevated humble subjects through careful observation and refined technique. The painting is at the <a href="/museum/norton-simon-museum"><strong>Norton Simon Museum</strong></a> in Pasadena.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/norton-simon-museum\"><strong>Norton Simon Museum</strong></a> in Pasadena, California." },
      { question: "What made Chardin's still lifes special?", answer: "<a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> brought <strong>quiet dignity</strong> and masterful technique to humble subjects others considered minor." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks with descriptions and FAQs...`);
  console.log('---');

  let successCount = 0;
  let failCount = 0;

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
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
      failCount++;
    }
  }

  console.log('---');
  console.log(`Done! ${successCount} succeeded, ${failCount} failed.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
