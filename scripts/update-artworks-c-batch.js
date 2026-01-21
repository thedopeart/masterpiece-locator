const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // 1. Francesco Guardi - Capriccio with Venetian Motifs
  {
    slug: 'francesco-guardi-capriccio-with-venetian-motifs',
    description: `<p><a href="/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> painted this architectural fantasy combining real and imagined Venetian elements. The capriccio genre allowed artists to mix familiar landmarks with invented structures, creating idealized views that appealed to <strong>Grand Tour</strong> travelers.</p>
<p>Guardi was the last great painter of the Venetian school, known for atmospheric views that captured the city's fading glory. His loose brushwork and silvery light distinguish his work from the more precise vedute of Canaletto. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this capriccio?", answer: "<a href=\"/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> was an 18th-century Venetian painter known for atmospheric cityscapes and architectural fantasies." },
      { question: "What is a capriccio?", answer: "A <strong>capriccio</strong> is an architectural fantasy combining real and imaginary elements. Guardi and other Venetian painters created these views for collectors." }
    ]
  },

  // 2. Théodore Géricault - Carabinier
  {
    slug: 'theodore-gericault-carabinier',
    description: `<p><a href="/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted this military portrait showing a carabinier, a member of the elite French cavalry. The soldier's uniform and bearing reflect the martial pride of Napoleonic France, a subject Géricault returned to throughout his career.</p>
<p>Géricault was fascinated by horses and military subjects before creating his famous Raft of the Medusa. His military paintings combine <strong>Romantic drama</strong> with careful observation of uniforms and equipment. The work hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, which holds several military subjects by <a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a>." },
      { question: "What is a carabinier?", answer: "A <strong>carabinier</strong> was an elite French cavalry soldier. <a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a> often painted military subjects and horses." }
    ]
  },

  // 3. Paul Delaroche - Cardinal Mazarin Dying
  {
    slug: 'paul-delaroche-cardinal-mazarin-dying',
    description: `<p><a href="/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> depicted the death of Cardinal Mazarin, the powerful minister who shaped 17th-century France. The dying statesman is shown surrounded by attendants as he faces his final moments, a scene combining <strong>historical accuracy</strong> with theatrical drama.</p>
<p>Delaroche specialized in historical subjects rendered with meticulous attention to costume and setting. His paintings brought French and English history to life for 19th-century audiences. The work is at the <a href="/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London, which holds important French academic paintings." },
      { question: "Who was Cardinal Mazarin?", answer: "<strong>Cardinal Mazarin</strong> was chief minister of France under Louis XIV, continuing the policies of Cardinal Richelieu." }
    ]
  },

  // 4. Pieter de Hooch - Cardplayers
  {
    slug: 'pieter-de-hooch-cardplayers',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this interior scene showing figures gathered around a card game. Light streams through a window, illuminating the players and their surroundings with the careful attention to <strong>domestic interiors</strong> that characterized de Hooch's finest work.</p>
<p>De Hooch was a master of Dutch genre painting, known for sunny interiors and courtyards. His paintings often depict everyday leisure activities with quiet dignity. This work is in the <a href="/museum/royal-collection"><strong>Royal Collection</strong></a> at Buckingham Palace.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's in the <a href=\"/museum/royal-collection\"><strong>Royal Collection</strong></a> at Buckingham Palace, London, part of the British monarchy's art holdings." },
      { question: "Who painted Cardplayers?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> was a Dutch Golden Age painter known for sunlit domestic interiors and courtyard scenes." }
    ]
  },

  // 5. Caravaggio - Cardsharps
  {
    slug: 'caravaggio-cardsharps',
    description: `<p><a href="/artist/caravaggio"><strong>Caravaggio</strong></a> painted this scene of cheating at cards around 1594, one of his earliest genre paintings. A naive young player concentrates on his hand, unaware that his opponent signals to an accomplice who reaches for <strong>hidden cards</strong> behind his back.</p>
<p>The painting established themes Caravaggio would explore throughout his career: deception, dramatic lighting, and psychological tension. Its success brought him his first major patron. The work is at the <a href="/museum/kimbell-art-museum"><strong>Kimbell Art Museum</strong></a> in Fort Worth.</p>`,
    faqs: [
      { question: "Where can I see Cardsharps?", answer: "It's at the <a href=\"/museum/kimbell-art-museum\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas, one of their most prized acquisitions." },
      { question: "When did Caravaggio paint this?", answer: "<a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> painted this around 1594, early in his career. It helped establish his reputation in Rome." }
    ]
  },

  // 6. Dante Gabriel Rossetti - Carlisle Wall (The Lovers)
  {
    slug: 'dante-gabriel-rossetti-carlisle-wall-the-lovers',
    description: `<p><a href="/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> painted this watercolor depicting two lovers in a medieval setting. The work reflects his lifelong interest in <strong>romantic poetry</strong> and medieval themes, combining literary inspiration with sensuous color.</p>
<p>Rossetti was a founder of the <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a>, which sought to revive the sincerity and detail of early Italian painting. His later work emphasized beauty and emotion over narrative. This painting is at <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London, which holds the largest collection of <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> art." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> co-founded the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a> in 1848, emphasizing medieval themes and detailed naturalism." }
    ]
  },

  // 7. Joaquín Sorolla - Carnations
  {
    slug: 'joaquin-sorolla-carnations',
    description: `<p><a href="/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this floral study with the brilliant light and loose brushwork that made him Spain's leading Impressionist. The carnations glow with <strong>Mediterranean sunlight</strong>, their petals rendered with confident, rapid strokes.</p>
<p>Sorolla was celebrated for capturing the effects of sunlight, particularly in beach scenes and garden subjects. His virtuoso handling of paint influenced Spanish art for generations. The work is at the <a href="/museum/museu-de-belles-arts-de-valencia"><strong>Museu de Belles Arts de València</strong></a>.</p>`,
    faqs: [
      { question: "Where is Carnations displayed?", answer: "It's at the <a href=\"/museum/museu-de-belles-arts-de-valencia\"><strong>Museu de Belles Arts de València</strong></a>, near Sorolla's birthplace." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted in a Spanish <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> style, known for brilliant light and loose brushwork." }
    ]
  },

  // 8. Raoul Dufy - Carnival on the Grands Boulevards
  {
    slug: 'raoul-dufy-carnival-on-the-grands-boulevards',
    description: `<p><a href="/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> captured the festive energy of a Parisian carnival with his characteristic bright palette and playful line. Crowds fill the boulevard as decorations and costumes create a sense of <strong>urban celebration</strong>.</p>
<p>Dufy developed a distinctive style combining Fauvist color with decorative pattern. His scenes of leisure and pleasure embody the optimism of early 20th-century Paris. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this carnival scene?", answer: "<a href=\"/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a> was a French artist known for colorful scenes of leisure, regattas, and Parisian life." },
      { question: "What style is this painting?", answer: "Dufy developed from <a href=\"/movement/fauvism\"><strong>Fauvism</strong></a> into a decorative style emphasizing bright color and lively line work." }
    ]
  },

  // 9. Francesco Guardi - Carnival Thursday on the Piazzetta
  {
    slug: 'francesco-guardi-carnival-thursday-on-the-piazzetta',
    description: `<p><a href="/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> depicted Venice's carnival celebrations in the Piazzetta, the small square beside St. Mark's. Masked revelers and entertainers fill the space as the city indulges in its famous <strong>pre-Lenten festivities</strong>.</p>
<p>Guardi's views of Venetian festivals preserve the spectacles that made the city a destination for travelers across Europe. His atmospheric brushwork captures the energy and movement of crowds. The painting hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, which holds many Venetian views by <a href=\"/artist/francesco-guardi\"><strong>Guardi</strong></a>." },
      { question: "What is the Piazzetta?", answer: "The <strong>Piazzetta</strong> is the small square between St. Mark's Basilica and the lagoon, a center of Venetian public life." }
    ]
  },

  // 10. Juan de Valdés Leal - Carrying the Cross
  {
    slug: 'juan-de-valdes-leal-carrying-the-cross',
    description: `<p><a href="/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this dramatic scene of Christ carrying the cross to Calvary. The composition emphasizes the physical burden and <strong>emotional intensity</strong> of the moment with the theatrical style characteristic of Spanish Baroque painting.</p>
<p>Valdés Leal was a leading painter in Seville, known for intense religious subjects. His work often explores themes of mortality and suffering with visceral directness. The painting is at the <a href="/museum/museo-de-bellas-artes-de-sevilla"><strong>Museum of Fine Arts of Seville</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museo-de-bellas-artes-de-sevilla\"><strong>Museum of Fine Arts of Seville</strong></a>, which holds major Spanish Baroque works." },
      { question: "What style is this painting?", answer: "It's Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a>, emphasizing drama and emotion in religious subjects." }
    ]
  },

  // 11. Anders Zorn - Castles in the Air
  {
    slug: 'anders-zorn-castles-in-the-air',
    description: `<p><a href="/artist/anders-zorn"><strong>Anders Zorn</strong></a> painted this scene suggesting daydreams or imagination, rendered with his characteristic virtuoso brushwork. The title evokes <strong>fantasy and aspiration</strong>, themes that appealed to late 19th-century audiences.</p>
<p>Zorn was Sweden's most celebrated painter, equally accomplished in portraits, nudes, and genre scenes. His fluid technique and ability to capture light made him internationally famous. The painting is at the <a href="/museum/nationalmuseum-stockholm"><strong>Nationalmuseum</strong></a> in Stockholm.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/nationalmuseum-stockholm\"><strong>Nationalmuseum</strong></a> in Stockholm, which holds the largest collection of <a href=\"/artist/anders-zorn\"><strong>Zorn's</strong></a> work." },
      { question: "Who was Anders Zorn?", answer: "<a href=\"/artist/anders-zorn\"><strong>Anders Zorn</strong></a> was Sweden's most famous painter, known for portraits, nudes, and scenes of Swedish life." }
    ]
  },

  // 12. Frans Hals - Catarina Both van der Eem
  {
    slug: 'frans-hals-catarina-both-van-der-eem',
    description: `<p><a href="/artist/frans-hals"><strong>Frans Hals</strong></a> painted this portrait of Catarina Both van der Eem with his characteristic lively brushwork. The subject's clothing and bearing reflect her <strong>prosperous social position</strong> in Dutch Golden Age society.</p>
<p>Hals was the leading portrait painter of Haarlem, famous for capturing personality through spontaneous-seeming brushwork. His technique influenced later painters including Manet. This portrait hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where can I see this portrait?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, part of their Dutch Golden Age collection." },
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/frans-hals\"><strong>Frans Hals</strong></a> was a Dutch master known for lively portraits with spontaneous brushwork." }
    ]
  },

  // 13. Frans Hals - Catharina Hooft with her Nurse
  {
    slug: 'frans-hals-catharina-hooft-with-her-nurse',
    description: `<p><a href="/artist/frans-hals"><strong>Frans Hals</strong></a> painted this double portrait showing a young child with her nurse. The composition captures the <strong>tender relationship</strong> between the two figures, with Hals's typically lively brushwork bringing personality to both.</p>
<p>Portraits of children with servants or nurses were popular in Dutch Golden Age society. Hals infused such commissions with warmth and spontaneity that set his work apart. The painting is at the <a href="/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/gemaldegalerie-berlin\"><strong>Gemäldegalerie</strong></a> in Berlin, part of their outstanding Dutch collection." },
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/frans-hals\"><strong>Frans Hals</strong></a> created this around 1620, demonstrating his skill with portraits of children." }
    ]
  },

  // 14. Lawrence Alma-Tadema - Catullus at Lesbia's house
  {
    slug: 'lawrence-alma-tadema-catullus-at-lesbia39s-house',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this scene depicting the Roman poet Catullus visiting his beloved Lesbia. The setting features the <strong>marble interiors</strong> and classical details that made Alma-Tadema famous for recreating the ancient world.</p>
<p>Alma-Tadema researched Roman life extensively, bringing archaeological accuracy to romantic scenes. His paintings influenced Hollywood's vision of antiquity. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this classical scene?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> specialized in scenes of ancient Greece and Rome with detailed marble and textile rendering." },
      { question: "Who were Catullus and Lesbia?", answer: "<strong>Catullus</strong> was a Roman poet whose passionate verses to Lesbia remain famous. She's believed to have been Clodia, a Roman noblewoman." }
    ]
  },

  // 15. Philips Wouwerman - Cavalry Making a Sortie from a Fort on a Hill
  {
    slug: 'cavalry-sortie-from-fort',
    description: `<p><a href="/artist/philips-wouwerman"><strong>Philips Wouwerman</strong></a> painted this military scene showing cavalry emerging from a hilltop fortification. The composition demonstrates his mastery of <strong>horse painting</strong> and battlefield drama, subjects that made him one of the most successful Dutch artists of his era.</p>
<p>Wouwerman produced hundreds of paintings featuring horses in various settings. His work was highly prized by collectors across Europe. This painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, part of their Dutch Golden Age collection." },
      { question: "Who painted this cavalry scene?", answer: "<a href=\"/artist/philips-wouwerman\"><strong>Philips Wouwerman</strong></a> was a Dutch painter famous for military scenes and horses." }
    ]
  },

  // 16. Pietro da Cortona - Ceiling Fresco with Medici Coat of Arms
  {
    slug: 'pietro-da-cortona-ceiling-fresco-with-medici-coat-of-arms',
    description: `<p><a href="/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> created this ceiling decoration featuring the <strong>Medici coat of arms</strong>, glorifying the powerful Florentine family. The composition uses illusionistic effects typical of Baroque ceiling painting to create a sense of grandeur.</p>
<p>Pietro da Cortona was a master of large-scale decorative painting in Rome and Florence. His ceilings transformed architecture into theatrical spectacle. This fresco is at the <a href="/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this fresco?", answer: "It's at the <a href=\"/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, the grand ducal residence of the Medici family." },
      { question: "Who painted this ceiling?", answer: "<a href=\"/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> was a leading <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter known for grand ceiling frescoes." }
    ]
  },

  // 17. Jean-Honoré Fragonard - Cephalus and Procris
  {
    slug: 'jean-honore-fragonard-cephalus160and160procris',
    description: `<p><a href="/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted this mythological scene depicting the tragic lovers Cephalus and Procris. The composition combines <strong>sensuous color</strong> with the loose brushwork that characterized Fragonard's mature style.</p>
<p>According to myth, Procris was accidentally killed by her husband Cephalus while spying on him. Fragonard brought emotional intensity to classical subjects. The painting is at the <a href="/museum/musee-des-beaux-arts-angers"><strong>Musée des Beaux-Arts d'Angers</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-des-beaux-arts-angers\"><strong>Musée des Beaux-Arts d'Angers</strong></a> in France." },
      { question: "Who were Cephalus and Procris?", answer: "They were <strong>tragic lovers</strong> from Greek myth. Cephalus accidentally killed Procris with a magic spear while hunting." }
    ]
  },

  // 18. Chaim Soutine - Ceret Landscape
  {
    slug: 'chaim-soutine-ceret-landscape',
    description: `<p><a href="/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> painted this view of Céret in the French Pyrenees with his characteristic <strong>expressive brushwork</strong>. The landscape seems to writhe and twist, transformed by the artist's emotional intensity into something visionary.</p>
<p>Soutine spent several years in Céret, producing landscapes that influenced later Abstract Expressionists. His tortured vision of nature stands apart from conventional landscape painting. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> was an Expressionist painter known for emotionally intense landscapes and portraits." },
      { question: "Where is Céret?", answer: "<strong>Céret</strong> is a town in the French Pyrenees where Soutine and other artists worked in the early 20th century." }
    ]
  },

  // 19. Guido Reni - Charity
  {
    slug: 'guido-reni-charity',
    description: `<p><a href="/artist/guido-reni"><strong>Guido Reni</strong></a> painted this allegorical figure representing Charity, one of the theological virtues. The composition shows a woman with children, embodying <strong>selfless love</strong> and generosity in the idealized classical style Reni perfected.</p>
<p>Reni was one of the most celebrated painters in 17th-century Italy, known for graceful figures and luminous color. His allegorical works were widely copied and influenced religious art for generations. The painting is at the <a href="/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, part of their Baroque collection." },
      { question: "What does Charity represent?", answer: "<strong>Charity</strong> is one of the three theological virtues, symbolizing selfless love. It's traditionally shown as a woman with children." }
    ]
  },

  // 20. Andrea del Sarto - Charity
  {
    slug: 'andrea-del-sarto-charity',
    description: `<p><a href="/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> painted this allegorical figure of Charity with the <strong>classical grace</strong> that earned him the title "the faultless painter." A woman nurtures children, embodying the virtue of selfless love.</p>
<p>Andrea del Sarto was a leading Florentine painter of the High Renaissance, admired for harmonious composition and refined technique. His work influenced later painters including his pupil Pontormo. The painting hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, part of their Italian Renaissance collection." },
      { question: "Who painted this Charity?", answer: "<a href=\"/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> was called \"the faultless painter\" for his technical perfection." }
    ]
  },

  // 21. Hyacinthe Rigaud - Charles De Saint Albin, Archbishop of Cambrai
  {
    slug: 'hyacinthe-rigaud-charles-de-saint-albin-archbishop-of-cambrai',
    description: `<p><a href="/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted this portrait of Charles de Saint-Albin in his ecclesiastical robes. The composition displays the <strong>grandeur and authority</strong> expected of a high-ranking churchman, with sumptuous fabrics rendered in exquisite detail.</p>
<p>Rigaud was the leading French portrait painter of his era, famous for his state portrait of Louis XIV. His portraits of nobility and clergy combined dignity with psychological insight. This work is at the <a href="/museum/getty-museum"><strong>J. Paul Getty Museum</strong></a> in Los Angeles.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/getty-museum\"><strong>J. Paul Getty Museum</strong></a> in Los Angeles, part of their French collection." },
      { question: "Who was Hyacinthe Rigaud?", answer: "<a href=\"/artist/hyacinthe-rigaud\"><strong>Hyacinthe Rigaud</strong></a> was the leading French portrait painter, famous for his image of Louis XIV." }
    ]
  },

  // 22. John Singer Sargent - Charles Deering
  {
    slug: 'john-singer-sargent-charles-deering',
    description: `<p><a href="/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted this portrait of Charles Deering, the American industrialist and art collector. The composition captures the sitter's <strong>confident presence</strong> with the fluid brushwork that made Sargent the most sought-after portraitist of his era.</p>
<p>Sargent painted leading figures of American and European society. His ability to suggest personality through pose and handling distinguished his portraits from those of his contemporaries. The painting is at the <a href="/museum/risd-museum"><strong>RISD Museum</strong></a> in Providence.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/risd-museum\"><strong>RISD Museum</strong></a> in Providence, Rhode Island." },
      { question: "Who was Charles Deering?", answer: "<strong>Charles Deering</strong> was an American industrialist and art collector who supported many artists and institutions." }
    ]
  },

  // 23. Peter Paul Rubens - Charles V in Armour
  {
    slug: 'peter-paul-rubens-charles-v-in-armour',
    description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted this portrait of Emperor Charles V in armor, likely after Titian's famous original. The composition conveys the <strong>imperial authority</strong> of the most powerful ruler in 16th-century Europe.</p>
<p>Rubens often copied and reinterpreted works by masters he admired, particularly Titian. His version adds the energy and color characteristic of Baroque painting. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Charles V?", answer: "<strong>Charles V</strong> was Holy Roman Emperor and King of Spain, ruling over vast territories in the 16th century." },
      { question: "Why did Rubens paint this?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> often copied masters he admired. This derives from Titian's famous equestrian portrait." }
    ]
  },

  // 24. Ford Madox Brown - Chaucer at the Court of Edward III
  {
    slug: 'ford-madox-brown-chaucer-at-the-court-of-edward-iii',
    description: `<p><a href="/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this scene imagining Geoffrey Chaucer reading to the medieval English court. The composition recreates <strong>14th-century pageantry</strong> with the detailed historical accuracy valued by the Pre-Raphaelites.</p>
<p>Brown was closely associated with the Pre-Raphaelite Brotherhood, sharing their commitment to vivid color and medieval subjects. His historical paintings combine scholarship with imaginative reconstruction. The work is at the <a href="/museum/art-gallery-of-new-south-wales"><strong>Art Gallery of New South Wales</strong></a> in Sydney.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/art-gallery-of-new-south-wales\"><strong>Art Gallery of New South Wales</strong></a> in Sydney, Australia." },
      { question: "Who was Geoffrey Chaucer?", answer: "<strong>Geoffrey Chaucer</strong> was the greatest English poet before Shakespeare, author of The Canterbury Tales." }
    ]
  },

  // 25. George Stubbs - Cheetah with Two Indian Servants and a Stag
  {
    slug: 'george-stubbs-cheetah-with-two-indian-servants-and-a-stag',
    description: `<p><a href="/artist/george-stubbs"><strong>George Stubbs</strong></a> painted this scene of an exotic hunting cheetah with its handlers and prey. The composition combines Stubbs's scientific observation of <strong>animal anatomy</strong> with the fascination for Eastern subjects that characterized British imperial culture.</p>
<p>Stubbs was Britain's greatest animal painter, famous for his anatomically precise horses. This unusual subject records a cheetah brought to England from India. The painting is at <a href="/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at <a href=\"/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a>, a highlight of their collection." },
      { question: "Who painted this cheetah?", answer: "<a href=\"/artist/george-stubbs\"><strong>George Stubbs</strong></a> was Britain's greatest animal painter, famous for anatomically precise horses and exotic subjects." }
    ]
  },

  // 26. Ernest Meissonier - Chess Players
  {
    slug: 'ernest-meissonier-chess-players',
    description: `<p><a href="/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted this scene of chess players with the miniaturist precision that made him one of the most expensive painters of his era. Every detail of costume and setting is rendered with <strong>astonishing accuracy</strong>.</p>
<p>Meissonier specialized in small-scale genre scenes and military subjects, commanding enormous prices from collectors. His technical skill was legendary. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Chess Players?", answer: "<a href=\"/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> was a French painter famous for minute detail and historical subjects." },
      { question: "What made Meissonier famous?", answer: "<a href=\"/artist/ernest-meissonier\"><strong>Meissonier</strong></a> was known for <strong>extraordinary detail</strong>. Critics examined his paintings with magnifying glasses." }
    ]
  },

  // 27. Paul Gauguin - Chicken Coop
  {
    slug: 'paul-gauguin-chicken-coop',
    description: `<p><a href="/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this rustic scene with the bold color and simplified forms that characterized his mature work. The subject reflects his interest in <strong>simple rural life</strong> as an antidote to industrial civilization.</p>
<p>Gauguin sought authenticity in Brittany and later Tahiti, rejecting Parisian sophistication. His flattened compositions and symbolic color influenced modern art. The painting is at the <a href="/museum/thyssen-bornemisza-museum"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/thyssen-bornemisza-museum\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, part of their Post-Impressionist collection." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a> developed a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style with bold color and simplified forms." }
    ]
  },

  // 28. Lawrence Alma-Tadema - Chiesa San Clemente
  {
    slug: 'lawrence-alma-tadema-chiesa-san-clemente',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this view of the church of San Clemente, demonstrating his fascination with <strong>architectural detail</strong> and historical settings. The composition captures the atmosphere of an ancient Italian church interior.</p>
<p>Alma-Tadema made study trips to Italy, sketching ancient and medieval buildings for his paintings. His architectural accuracy brought historical scenes to life. The painting is at the <a href="/museum/fries-museum"><strong>Fries Museum</strong></a> in Leeuwarden.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/fries-museum\"><strong>Fries Museum</strong></a> in Leeuwarden, Netherlands, near Alma-Tadema's birthplace." },
      { question: "What is San Clemente?", answer: "<strong>San Clemente</strong> is a historic church in Rome with layers of construction spanning nearly 2,000 years." }
    ]
  },

  // 29. Pierre Bonnard - Child at Table
  {
    slug: 'pierre-bonnard-child-at-table',
    description: `<p><a href="/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this intimate domestic scene with the warm color and soft light that characterized his work. A child sits at a table, absorbed in the <strong>ordinary moment</strong> that Bonnard transformed into art.</p>
<p>Bonnard was a master of intimate interiors, capturing everyday life with a distinctively personal palette. His work bridges Impressionism and modern art. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Child at Table?", answer: "<a href=\"/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> was a French painter known for intimate domestic scenes with warm, glowing color." },
      { question: "What style is this painting?", answer: "Bonnard was associated with the <strong>Nabis</strong> and later developed a personal style bridging <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and modern art." }
    ]
  },

  // 30. Mary Cassatt - Child Drinking Milk
  {
    slug: 'mary-cassatt-child-drinking-milk',
    description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this scene of childhood with the <strong>tender observation</strong> that characterized her work. A child drinks from a cup, captured in a moment of everyday life with Impressionist freshness.</p>
<p>Cassatt was the only American to exhibit with the French Impressionists. She specialized in images of mothers and children, bringing dignity and seriousness to domestic subjects. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> was an American <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> known for paintings of mothers and children." },
      { question: "What made Cassatt's work distinctive?", answer: "Cassatt brought <strong>artistic seriousness</strong> to domestic subjects, depicting women and children with dignity and psychological insight." }
    ]
  },

  // 31. Pierre Bonnard - Child Eating Cherries
  {
    slug: 'pierre-bonnard-child-eating-cherries',
    description: `<p><a href="/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> painted this charming scene of a child enjoying cherries with his characteristic <strong>warm palette</strong> and intimate scale. The simple pleasure of the moment is transformed by Bonnard's distinctive handling of light and color.</p>
<p>Bonnard's domestic scenes capture the sensory richness of everyday life. His late work influenced color-field painters and remains beloved for its luminous warmth. This painting is in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a> was a French artist known for intimate domestic scenes with rich, glowing color." },
      { question: "What subjects did Bonnard paint?", answer: "Bonnard painted <strong>domestic interiors</strong>, gardens, and nudes with a distinctive warm palette that influenced later artists." }
    ]
  },

  // 32. Ferdinand Georg Waldmüller - Children at a Window
  {
    slug: 'children-at-window-waldmuller',
    description: `<p><a href="/artist/ferdinand-georg-waldmuller"><strong>Ferdinand Georg Waldmüller</strong></a> painted this scene of children at a window with the <strong>precise detail</strong> and warm sentiment characteristic of Biedermeier painting. Light falls across the figures, creating an atmosphere of domestic contentment.</p>
<p>Waldmüller was Austria's leading painter of the Biedermeier period, known for portraits and genre scenes. His careful observation of light anticipated later developments in painting. The work is at the <a href="/museum/belvedere"><strong>Belvedere Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna, which holds major Austrian 19th-century art." },
      { question: "What is Biedermeier?", answer: "<strong>Biedermeier</strong> was an early 19th-century style emphasizing domestic comfort and detailed realism." }
    ]
  },

  // 33. Max Liebermann - Children Bathing in the Sea
  {
    slug: 'max-liebermann-children-bathing-in-the-sea',
    description: `<p><a href="/artist/max-liebermann"><strong>Max Liebermann</strong></a> painted this beach scene showing children playing in the surf with the <strong>loose brushwork</strong> of German Impressionism. Sunlight sparkles on water as young figures splash in the waves.</p>
<p>Liebermann was Germany's leading Impressionist, known for beach scenes and garden subjects. His work introduced French techniques to German painting. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this beach scene?", answer: "<a href=\"/artist/max-liebermann\"><strong>Max Liebermann</strong></a> was Germany's leading <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> painter." },
      { question: "What subjects did Liebermann paint?", answer: "Liebermann painted <strong>beach scenes</strong>, gardens, and genre subjects with the light-filled palette of Impressionism." }
    ]
  },

  // 34. Adriaen van Ostade - Children Playing in a Barn
  {
    slug: 'adriaen-van-ostade-children-playing-in-a-barn',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this scene of rural childhood with the <strong>warm tones</strong> and careful observation characteristic of Dutch Golden Age genre painting. Children play in a rustic barn interior, absorbed in their games.</p>
<p>Van Ostade specialized in peasant scenes, depicting everyday life with sympathy and humor. His work influenced later genre painters across Europe. The painting is at the <a href="/museum/hermitage"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/hermitage\"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
      { question: "Who painted this scene?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch painter known for peasant scenes and tavern interiors." }
    ]
  },

  // 35. Fernand Léger - Chimneys on Rooftops
  {
    slug: 'fernand-leger-chimneys-on-rooftops',
    description: `<p><a href="/artist/fernand-leger"><strong>Fernand Léger</strong></a> painted this urban view with the <strong>bold geometric forms</strong> and mechanical aesthetic that characterized his work. Industrial chimneys and rooftops are transformed into a composition celebrating modern life.</p>
<p>Léger developed a distinctive style influenced by Cubism but emphasizing cylindrical forms and urban subjects. His work celebrates the machine age with optimism. This painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Chimneys on Rooftops?", answer: "<a href=\"/artist/fernand-leger\"><strong>Fernand Léger</strong></a> was a French painter who developed a mechanical style celebrating modern life." },
      { question: "What style is this painting?", answer: "Léger developed from <a href=\"/movement/cubism\"><strong>Cubism</strong></a> into a personal style emphasizing bold geometric forms." }
    ]
  },

  // 36. Paul Gauguin - China Asters, Hat and Book
  {
    slug: 'paul-gauguin-china-asters-hat-and-book',
    description: `<p><a href="/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this still life with the <strong>bold color</strong> and simplified forms that marked his departure from Impressionism. Flowers, a hat, and a book are arranged with decorative clarity.</p>
<p>Gauguin's still lifes show his developing interest in flattened composition and symbolic color. Such works prepared the way for his later Tahitian paintings. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this still life?", answer: "<a href=\"/artist/paul-gauguin\"><strong>Paul Gauguin</strong></a> was a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> known for bold color and symbolic subjects." },
      { question: "What style is this painting?", answer: "This shows Gauguin's <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style with <strong>flattened forms</strong> and decorative color." }
    ]
  },

  // 37. Léon Bonnat - Christ
  {
    slug: 'leon-bonnat-christ',
    description: `<p><a href="/artist/leon-bonnat"><strong>Léon Bonnat</strong></a> painted this figure of Christ with the <strong>academic realism</strong> that made him one of France's most successful painters. The composition presents Christ with dignity and restraint, avoiding theatrical emotion.</p>
<p>Bonnat was a leading French academic painter, famous for portraits and religious subjects. His work exemplifies the polished technique valued by the official Salon. The painting is at the <a href="/museum/petit-palais"><strong>Petit Palais</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/petit-palais\"><strong>Petit Palais</strong></a> in Paris, which holds French academic painting." },
      { question: "Who painted this Christ?", answer: "<a href=\"/artist/leon-bonnat\"><strong>Léon Bonnat</strong></a> was a French academic painter known for portraits and religious subjects." }
    ]
  },

  // 38. Bernardino Luini - Christ among the Doctors
  {
    slug: 'bernardino-luini-christ-among-the-doctors',
    description: `<p><a href="/artist/bernardino-luini"><strong>Bernardino Luini</strong></a> painted this scene of the young Christ debating with scholars in the temple. The composition shows <strong>Leonardesque influence</strong> in its soft modeling and psychological subtlety.</p>
<p>Luini was a leading Milanese painter who absorbed Leonardo da Vinci's techniques, creating religious works of quiet beauty. His gentle style made his work widely popular. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, part of their Italian Renaissance collection." },
      { question: "What influenced Luini's style?", answer: "<a href=\"/artist/bernardino-luini\"><strong>Luini</strong></a> was strongly influenced by <strong>Leonardo da Vinci</strong>, adopting his soft modeling technique." }
    ]
  },

  // 39. Rembrandt - Christ and St. Mary Magdalene at the Tomb
  {
    slug: 'rembrandt-christ-and-st-mary-magdalene-at-the-tomb',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this encounter between the risen Christ and Mary Magdalene at the empty tomb. The scene captures the moment of <strong>recognition</strong> with characteristic dramatic lighting and emotional depth.</p>
<p>Rembrandt's biblical paintings bring scripture to life through psychological insight and masterful handling of light. This work is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "What scene does this depict?", answer: "It shows <strong>Christ appearing to Mary Magdalene</strong> after his resurrection, when she initially mistakes him for a gardener." }
    ]
  },

  // 40. Titian - Christ and the Adulteress
  {
    slug: 'titian-christ-and-the-adulteress',
    description: `<p><a href="/artist/titian"><strong>Titian</strong></a> painted this scene of Christ confronting those who would condemn an adulteress. The composition captures the moment when Christ says "Let him who is without sin cast the first stone," with <strong>rich Venetian color</strong>.</p>
<p>Titian's religious paintings combine dramatic narrative with sumptuous color. His handling of the subject influenced countless later versions. The painting is at the <a href="/museum/kelvingrove-art-gallery"><strong>Kelvingrove Art Gallery</strong></a> in Glasgow.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/kelvingrove-art-gallery\"><strong>Kelvingrove Art Gallery</strong></a> in Glasgow, Scotland." },
      { question: "What story does this depict?", answer: "It shows the biblical story where <strong>Christ defends a woman</strong> accused of adultery, challenging her accusers." }
    ]
  },

  // 41. Luca Signorelli - Christ and the Doubting Thomas
  {
    slug: 'luca-signorelli-christ-and-the-doubting-thomas',
    description: `<p><a href="/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> painted this scene of the apostle Thomas examining Christ's wounds after the resurrection. The composition demonstrates Signorelli's mastery of <strong>human anatomy</strong> and dramatic gesture.</p>
<p>Signorelli was a major Italian Renaissance painter, famous for his muscular figures and dynamic compositions. His work influenced Michelangelo. The painting is at the <a href="/museum/basilica-della-santa-casa"><strong>Basilica della Santa Casa</strong></a> in Loreto.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/basilica-della-santa-casa\"><strong>Basilica della Santa Casa</strong></a> in Loreto, Italy." },
      { question: "What made Signorelli distinctive?", answer: "<a href=\"/artist/luca-signorelli\"><strong>Signorelli</strong></a> was known for <strong>muscular figures</strong> and dynamic poses that influenced Michelangelo." }
    ]
  },

  // 42. Rembrandt - Christ and the woman of Samaria among ruins
  {
    slug: 'rembrandt-christ-and-the-woman-of-samaria-among-ruins',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching depicting Christ's encounter with the Samaritan woman at the well, set among <strong>ancient ruins</strong>. The composition uses Rembrandt's masterful line work to create atmosphere and depth.</p>
<p>Rembrandt produced nearly 300 etchings on biblical and secular subjects. His prints were collected throughout Europe. This work is at the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "It's at the <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, which holds major Rembrandt prints." },
      { question: "What is this scene?", answer: "It depicts <strong>Christ meeting the Samaritan woman</strong> at Jacob's well, a gospel story about spiritual renewal." }
    ]
  },

  // 43. Rembrandt - Christ and the woman of Samaria an arched print
  {
    slug: 'rembrandt-christ-and-the-woman-of-samaria-an-arched-print',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this version of Christ meeting the Samaritan woman in an <strong>arched format</strong>. The curved top adds a sense of intimacy to the biblical encounter at the well.</p>
<p>Rembrandt often returned to favorite subjects, exploring different compositions and approaches. His biblical prints demonstrate his deep engagement with scripture. This work is at the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "It's at the <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>." },
      { question: "Why did Rembrandt use an arched format?", answer: "The <strong>arched shape</strong> suggests a window or doorway, creating intimacy and framing the biblical scene." }
    ]
  },

  // 44. Rembrandt - Christ appearing to the apostles
  {
    slug: 'rembrandt-christ-appearing-to-the-apostles',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the risen Christ appearing to his apostles, capturing their <strong>wonder and doubt</strong> at this miraculous moment. The composition uses Rembrandt's characteristic dramatic lighting to focus attention on Christ.</p>
<p>Rembrandt's biblical subjects bring scripture to life through psychological insight. His treatment of this scene emphasizes the human response to divine presence. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>, which holds important Rembrandt prints." },
      { question: "What scene does this depict?", answer: "It shows <strong>Christ appearing to his apostles</strong> after the resurrection, demonstrating that he has risen." }
    ]
  },

  // 45. Albrecht Dürer - Christ as the Man of Sorrows
  {
    slug: 'albrecht-durer-christ-as-the-man-of-sorrows',
    description: `<p><a href="/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this devotional image of Christ as the Man of Sorrows, showing him bearing the marks of his Passion. The composition presents Christ for <strong>contemplation and prayer</strong> with Dürer's characteristic precision.</p>
<p>Dürer was the greatest German Renaissance artist, equally accomplished in painting, printmaking, and drawing. His religious works combine Northern precision with Italian influence. The painting is at the <a href="/museum/staatliche-kunsthalle-karlsruhe"><strong>Staatliche Kunsthalle Karlsruhe</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/staatliche-kunsthalle-karlsruhe\"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany." },
      { question: "What is a Man of Sorrows?", answer: "The <strong>Man of Sorrows</strong> is a devotional image showing Christ with his wounds, meant to inspire meditation on his suffering." }
    ]
  },

  // 46. Rembrandt - Christ at Emmaus
  {
    slug: 'rembrandt-christ-at-emmaus',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the moment when the risen Christ reveals himself to two disciples at Emmaus by <strong>breaking bread</strong>. The scene captures the instant of recognition with characteristic drama and intimacy.</p>
<p>Rembrandt painted this subject several times, exploring different approaches to the miraculous moment. His treatment emphasizes the spiritual through simple human gesture. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "What happens at Emmaus?", answer: "Two disciples recognize the <strong>risen Christ</strong> when he breaks bread with them, a pivotal moment in the resurrection narrative." }
    ]
  },

  // 47. Rembrandt - Christ before Pilate
  {
    slug: 'rembrandt-christ-before-pilate',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted Christ standing before Pontius Pilate in this dramatic scene. The composition captures the <strong>confrontation</strong> between earthly power and divine presence with Rembrandt's characteristic psychological depth.</p>
<p>Rembrandt produced multiple versions of Christ's trial, exploring different moments and compositions. The work is displayed at the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/rembrandt-house-museum\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
      { question: "What scene does this depict?", answer: "It shows <strong>Christ's trial before Pilate</strong>, the Roman governor who ultimately condemns him to crucifixion." }
    ]
  },

  // 48. Gerard van Honthorst - Christ Before the High Priest
  {
    slug: 'gerard-van-honthorst-christ-before-the-high-priest',
    description: `<p><a href="/artist/gerard-van-honthorst"><strong>Gerard van Honthorst</strong></a> painted this night scene of Christ interrogated by the high priest Caiaphas. A single candle illuminates the figures with the <strong>dramatic lighting</strong> that earned Honthorst the nickname "Gherardo delle Notti."</p>
<p>Honthorst was a Dutch follower of Caravaggio, famous for nocturnal scenes lit by candles or torches. His work influenced painting across Europe. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, a highlight of their Dutch collection." },
      { question: "Why was Honthorst called 'delle Notti'?", answer: "<strong>Gherardo delle Notti</strong> means \"Gerard of the Nights,\" reflecting his mastery of candlelit nocturnal scenes." }
    ]
  },

  // 49. Giovanni Bellini - Christ Blessing
  {
    slug: 'giovanni-bellini-christ-blessing',
    description: `<p><a href="/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this devotional image of Christ blessing the viewer with the <strong>serene beauty</strong> characteristic of Venetian Renaissance painting. The composition presents Christ for personal contemplation and prayer.</p>
<p>Bellini was the greatest Venetian painter of the early Renaissance, known for his Madonna images and portraits. His work influenced Giorgione and Titian. The painting hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, part of their Italian Renaissance collection." },
      { question: "Who was Giovanni Bellini?", answer: "<a href=\"/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> was the leading Venetian painter of the early <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>, teacher of Titian." }
    ]
  },

  // 50. Raphael - Christ Blessing
  {
    slug: 'raphael-christ-blessing',
    description: `<p><a href="/artist/raphael"><strong>Raphael</strong></a> painted this image of Christ raising his hand in blessing, an early work showing the <strong>classical harmony</strong> that would characterize his mature style. The composition presents Christ with idealized beauty and serenity.</p>
<p>Raphael was one of the supreme masters of the High Renaissance, known for graceful compositions and refined technique. This early work anticipates his later achievements. The painting is at the <a href="/museum/pinacoteca-tosio-martinengo"><strong>Pinacoteca Tosio Martinengo</strong></a> in Brescia.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/pinacoteca-tosio-martinengo\"><strong>Pinacoteca Tosio Martinengo</strong></a> in Brescia, Italy." },
      { question: "When did Raphael paint this?", answer: "This is an <strong>early work</strong> by <a href=\"/artist/raphael\"><strong>Raphael</strong></a>, painted before his mature Roman period." }
    ]
  },

  // 51. Titian - Christ Carrying the Cross
  {
    slug: 'titian-christ-carrying-the-cross',
    description: `<p><a href="/artist/titian"><strong>Titian</strong></a> painted this powerful image of Christ carrying the cross to Calvary. The composition focuses on Christ's face and the <strong>weight of suffering</strong> with the rich color and emotional depth characteristic of Venetian painting.</p>
<p>This painting hangs in the same building as Giorgione's version of the subject, allowing visitors to compare two Venetian masters. The work is at the <a href="/museum/scuola-grande-di-san-rocco"><strong>Scuola Grande di San Rocco</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/scuola-grande-di-san-rocco\"><strong>Scuola Grande di San Rocco</strong></a> in Venice." },
      { question: "Why is this subject significant?", answer: "Christ carrying the cross depicts his <strong>journey to crucifixion</strong>, a central moment in Christian devotion." }
    ]
  },

  // 52. Giorgione - Christ Carrying the Cross
  {
    slug: 'giorgione-christ-carrying-the-cross',
    description: `<p><a href="/artist/giorgione"><strong>Giorgione</strong></a> painted this intimate image of Christ carrying the cross, focusing on his face and the <strong>psychological burden</strong> of his sacrifice. The soft modeling and emotional depth are characteristic of this mysterious Venetian master.</p>
<p>Giorgione died young, leaving few confirmed works. His poetic approach to painting influenced Titian and later Venetian art. The painting hangs at the <a href="/museum/scuola-grande-di-san-rocco"><strong>Scuola Grande di San Rocco</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/scuola-grande-di-san-rocco\"><strong>Scuola Grande di San Rocco</strong></a> in Venice, alongside Titian's version." },
      { question: "Who was Giorgione?", answer: "<a href=\"/artist/giorgione\"><strong>Giorgione</strong></a> was a mysterious Venetian <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> master who died young but profoundly influenced Titian." }
    ]
  },

  // 53. Hieronymus Bosch - Christ Carrying the Cross
  {
    slug: 'hieronymus-bosch-christ-carrying-the-cross',
    description: `<p><a href="/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted this scene of Christ carrying the cross surrounded by <strong>grotesque tormentors</strong>. The faces of Christ's persecutors are distorted into nightmarish masks of cruelty, contrasting with Christ's serene acceptance.</p>
<p>Bosch's unique vision combines religious devotion with disturbing fantasy. His work remains enigmatic and powerful. The painting is at the <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
      { question: "What makes Bosch's version distinctive?", answer: "<a href=\"/artist/hieronymus-bosch\"><strong>Bosch</strong></a> surrounded Christ with <strong>grotesque faces</strong>, creating a nightmarish vision of human cruelty." }
    ]
  },

  // 54. Hieronymus Bosch - Christ Child with a Walking Frame
  {
    slug: 'hieronymus-bosch-christ-child-with-a-walking-frame',
    description: `<p><a href="/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted this unusual image of the Christ child learning to walk with a <strong>wooden frame</strong>. The domestic subject is rare in religious art, showing the infant Jesus in a moment of ordinary childhood development.</p>
<p>Bosch is better known for fantastic visions, but this tender image reveals another side of his imagination. The painting is at the <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
      { question: "Why is this subject unusual?", answer: "Showing the <strong>Christ child learning to walk</strong> is rare in art, humanizing Jesus through an ordinary childhood moment." }
    ]
  },

  // 55. Jacob Jordaens - Christ Comes as a Gardener to Three Marys
  {
    slug: 'jacob-jordaens-christ-comes-as-a-gardener-to-three-marys',
    description: `<p><a href="/artist/jacob-jordaens"><strong>Jacob Jordaens</strong></a> painted this scene of the risen Christ appearing as a gardener to the three Marys at the tomb. The composition captures the moment of <strong>joyful recognition</strong> with the robust energy characteristic of Flemish Baroque painting.</p>
<p>Jordaens was a leading Flemish painter after Rubens, known for large-scale religious and mythological subjects. His work combines Baroque drama with earthy vitality. The painting is at the <a href="/museum/gemaldegalerie-berlin"><strong>Gemäldegalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/gemaldegalerie-berlin\"><strong>Gemäldegalerie</strong></a> in Berlin." },
      { question: "What scene does this depict?", answer: "The <strong>risen Christ appears as a gardener</strong> to the women at his tomb, a traditional resurrection scene." }
    ]
  },

  // 56. Hans Memling - Christ crowned with thorns
  {
    slug: 'hans-memling-christ-crowned-with-thorns',
    description: `<p><a href="/artist/hans-memling"><strong>Hans Memling</strong></a> painted this devotional image of Christ wearing the <strong>crown of thorns</strong>, inviting contemplation of his suffering. The composition presents Christ with the serene beauty and precise detail characteristic of Netherlandish painting.</p>
<p>Memling was a leading painter in Bruges, known for portraits and religious works of quiet beauty. His paintings were sought by collectors across Europe. The work is at the <a href="/museum/palazzo-bianco"><strong>Palazzo Bianco</strong></a> in Genoa.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/palazzo-bianco\"><strong>Palazzo Bianco</strong></a> in Genoa, Italy." },
      { question: "Who was Hans Memling?", answer: "<a href=\"/artist/hans-memling\"><strong>Hans Memling</strong></a> was a leading Netherlandish painter in Bruges, known for refined religious works and portraits." }
    ]
  },

  // 57. Bernardino Luini - Christ Crowned with Thorns
  {
    slug: 'bernardino-luini-christ-crowned-with-thorns',
    description: `<p><a href="/artist/bernardino-luini"><strong>Bernardino Luini</strong></a> painted this image of Christ crowned with thorns with the <strong>soft modeling</strong> learned from Leonardo da Vinci. The composition invites meditation on Christ's suffering with gentle pathos.</p>
<p>Luini was Milan's leading painter after Leonardo, creating religious works of quiet beauty. His influence of Leonardo appears in the sfumato technique. The painting is at the <a href="/museum/biblioteca-ambrosiana"><strong>Biblioteca Ambrosiana</strong></a> in Milan.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/biblioteca-ambrosiana\"><strong>Biblioteca Ambrosiana</strong></a> in Milan, founded by Cardinal Federico Borromeo." },
      { question: "What influenced Luini's style?", answer: "<a href=\"/artist/bernardino-luini\"><strong>Luini</strong></a> studied <strong>Leonardo da Vinci's</strong> techniques, particularly his soft, hazy sfumato modeling." }
    ]
  },

  // 58. Rembrandt - Christ Crowned with Thorns
  {
    slug: 'rembrandt-christ-crowned-with-thorns',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted Christ being crowned with thorns by his tormentors. The scene captures the <strong>cruelty of the moment</strong> with characteristic dramatic lighting and psychological intensity.</p>
<p>Rembrandt returned to subjects from Christ's Passion throughout his career, bringing fresh insight to familiar scenes. The painting is at the <a href="/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a> in Pennsylvania." },
      { question: "What scene does this depict?", answer: "Roman soldiers <strong>mock Christ</strong> by pressing a crown of thorns onto his head before the crucifixion." }
    ]
  },

  // 59. Rembrandt - Christ crucified between the two thieves (Three crosses)
  {
    slug: 'rembrandt-christ-crucified-between-the-two-thieves-three-cro',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this powerful etching showing Christ on the cross between two thieves. Known as "The Three Crosses," the print uses dramatic light and shadow to convey the <strong>cosmic significance</strong> of the crucifixion.</p>
<p>Rembrandt reworked this plate multiple times, creating dramatically different impressions. The work is one of his greatest prints. An impression is at the <a href="/museum/kemper-art-museum"><strong>Kemper Art Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "Impressions exist in many collections. One is at the <a href=\"/museum/kemper-art-museum\"><strong>Kemper Art Museum</strong></a>." },
      { question: "Why is this print significant?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> reworked this plate through <strong>multiple states</strong>, creating dramatically different versions of the scene." }
    ]
  },

  // 60. Rembrandt - Christ crucified between the two thieves an oval plate
  {
    slug: 'rembrandt-christ-crucified-between-the-two-thieves-an-oval-p',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching of the crucifixion in an <strong>oval format</strong>. The unusual shape focuses attention on Christ and the two thieves, creating an intimate devotional image.</p>
<p>Rembrandt produced numerous prints of biblical subjects, exploring different compositions and approaches. His etchings were collected throughout Europe. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Why use an oval format?", answer: "The <strong>oval shape</strong> creates a focused, intimate composition suitable for private devotion." },
      { question: "How many Rembrandt prints exist?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created nearly <strong>300 etchings</strong> on religious and secular subjects throughout his career." }
    ]
  },

  // 61. Rembrandt - Christ disputing with the doctors
  {
    slug: 'rembrandt-christ-disputing-with-the-doctors',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the young Jesus debating with scholars in the temple, astounding them with his wisdom. The composition captures the <strong>dramatic exchange</strong> of ideas with Rembrandt's characteristic attention to gesture and expression.</p>
<p>Rembrandt often depicted scenes from Christ's early life. His treatment emphasizes the human drama within sacred narrative. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "What scene does this depict?", answer: "The <strong>twelve-year-old Jesus</strong> amazes temple scholars with his understanding, a scene from Luke's gospel." }
    ]
  },

  // 62. Rembrandt - Christ Driving the Moneychangers from the Temple
  {
    slug: 'rembrandt-christ-driving-the-moneychangers-from-the-temple',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted Christ driving merchants and moneychangers from the temple with <strong>righteous anger</strong>. The scene captures the drama of Christ's confrontation with those who had commercialized sacred space.</p>
<p>This subject allowed artists to show Christ in action rather than suffering. Rembrandt brings emotional intensity to the confrontation. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What scene does this depict?", answer: "Christ <strong>drives merchants from the temple</strong>, angered that they have turned a house of prayer into a marketplace." },
      { question: "Why did artists paint this subject?", answer: "The scene shows <strong>Christ's active anger</strong> at corruption, a dramatic contrast to his usual peaceful demeanor." }
    ]
  },

  // 63. El Greco - Christ driving the traders from the temple
  {
    slug: 'el-greco-christ-driving-the-traders-from-the-temple',
    description: `<p><a href="/artist/el-greco"><strong>El Greco</strong></a> painted this scene of Christ expelling the moneychangers with characteristic <strong>elongated figures</strong> and intense color. The composition swirls with energy as Christ confronts the merchants defiling the temple.</p>
<p>El Greco painted this subject multiple times, each version showing his evolving style. His visionary approach transformed traditional subjects. The painting is at the <a href="/museum/minneapolis-institute-of-art"><strong>Minneapolis Institute of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/minneapolis-institute-of-art\"><strong>Minneapolis Institute of Art</strong></a> in Minnesota." },
      { question: "What makes El Greco's style distinctive?", answer: "<a href=\"/artist/el-greco\"><strong>El Greco</strong></a> used <strong>elongated figures</strong> and intense color that seemed visionary to later artists." }
    ]
  },

  // 64. Johannes Vermeer - Christ in the House of Martha and Mary
  {
    slug: 'johannes-vermeer-christ-in-the-house-of-martha-and-mary',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this biblical scene early in his career, showing Christ visiting the sisters Martha and Mary. While Martha works, Mary listens to Christ, illustrating the contrast between <strong>active service and contemplation</strong>.</p>
<p>This is one of Vermeer's few religious paintings, created before he developed his famous domestic interiors. The work is at the <a href="/museum/scottish-national-gallery"><strong>Scottish National Gallery</strong></a> in Edinburgh.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/scottish-national-gallery\"><strong>Scottish National Gallery</strong></a> in Edinburgh." },
      { question: "Why is this Vermeer unusual?", answer: "Most of <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> work shows <strong>domestic interiors</strong>. This early religious painting differs from his mature style." }
    ]
  },

  // 65. Diego Velázquez - Christ in the House of Mary and Martha
  {
    slug: 'diego-velazquez-christ-in-the-house-of-mary-and-martha',
    description: `<p><a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this early work combining a kitchen scene with the biblical story of Martha and Mary. In the foreground, a servant prepares food while the <strong>sacred scene</strong> appears through a window or mirror behind her.</p>
<p>Velázquez often incorporated religious subjects into genre scenes, a technique called bodegón. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "What is a bodegón?", answer: "A <strong>bodegón</strong> is a Spanish genre scene, often showing kitchens or taverns. <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> sometimes added religious elements." }
    ]
  },

  // 66. Gerard David - Christ Nailed to the Cross
  {
    slug: 'gerard-david-christ-nailed-to-the-cross',
    description: `<p><a href="/artist/gerard-david"><strong>Gerard David</strong></a> painted this scene of Christ being nailed to the cross with the <strong>precise detail</strong> characteristic of Netherlandish painting. The moment before the crucifixion is rendered with unflinching attention to the violence of the act.</p>
<p>David was the last great painter of the Bruges school, known for religious works combining beauty with emotional power. The painting is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "Who was Gerard David?", answer: "<a href=\"/artist/gerard-david\"><strong>Gerard David</strong></a> was the last major painter of the <strong>Bruges school</strong>, known for refined religious works." }
    ]
  },

  // 67. Francisco de Zurbarán - Christ on the Cross
  {
    slug: 'francisco-de-zurbaran-christ-on-the-cross',
    description: `<p><a href="/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a> painted this powerful image of Christ on the cross with the stark realism characteristic of Spanish Baroque painting. The figure emerges from deep darkness, creating a sense of <strong>intense spiritual focus</strong>.</p>
<p>Zurbarán was known for austere religious subjects that combined realistic detail with mystical atmosphere. His crucifixions were particularly admired. The painting is at the <a href="/museum/thyssen-bornemisza-museum"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/thyssen-bornemisza-museum\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid." },
      { question: "What made Zurbarán's style distinctive?", answer: "<a href=\"/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> combined <strong>stark realism</strong> with mystical intensity in his religious subjects." }
    ]
  },

  // 68. Rembrandt - Christ preaching
  {
    slug: 'rembrandt-christ-preaching',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching showing Christ preaching to a gathered crowd. Known as "The Hundred Guilder Print" for its high value, the composition captures Christ's <strong>compassionate ministry</strong> with extraordinary detail and atmosphere.</p>
<p>This is among Rembrandt's most celebrated prints, combining multiple episodes from Matthew's gospel. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "Impressions exist in many collections including the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "Why is this called the Hundred Guilder Print?", answer: "The name reflects the print's <strong>high value</strong>. Even in Rembrandt's lifetime, collectors paid substantial sums for impressions." }
    ]
  },

  // 69. Rembrandt - Christ Presented to the People
  {
    slug: 'rembrandt-christ-presented-to-the-people',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the moment when Pilate presents Christ to the crowd, asking "Ecce Homo" (Behold the man). The composition captures the <strong>fateful moment</strong> before the crowd demands crucifixion.</p>
<p>Rembrandt reworked this plate dramatically, removing figures and changing the composition between states. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this print?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "What does 'Ecce Homo' mean?", answer: "<strong>Ecce Homo</strong> (\"Behold the man\") are Pilate's words presenting Christ to the crowd, a pivotal moment in the Passion." }
    ]
  },

  // 70. Rembrandt - Christ returning from the Temple with his parents
  {
    slug: 'rembrandt-christ-returning-from-the-temple-with-his-parents',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the young Jesus returning from Jerusalem with Mary and Joseph after his disputation with the temple scholars. The composition captures a <strong>quiet moment</strong> in the Holy Family's journey home.</p>
<p>Rembrandt humanized biblical narratives, finding drama in ordinary moments. The work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
      { question: "What scene does this follow?", answer: "This follows the scene where the <strong>twelve-year-old Jesus</strong> was found teaching in the temple, worrying his parents." }
    ]
  },

  // 71. Rembrandt - Christ seated disputing with the doctors
  {
    slug: 'rembrandt-christ-seated-disputing-with-the-doctors',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the young Christ seated among temple scholars, engaged in theological debate. The composition captures the <strong>exchange of ideas</strong> with Rembrandt's characteristic attention to gesture and expression.</p>
<p>Rembrandt returned to this subject multiple times, exploring different approaches. The work is displayed at the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/rembrandt-house-museum\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
      { question: "What scene does this depict?", answer: "The <strong>twelve-year-old Jesus</strong> astounds temple scholars with his wisdom, a scene from Luke's gospel." }
    ]
  },

  // 72. Tintoretto - Christ Washing the Feet of His Disciples
  {
    slug: 'tintoretto-christ-washing-the-feet-of-his-disciples',
    description: `<p><a href="/artist/tintoretto"><strong>Tintoretto</strong></a> painted this scene of Christ washing the disciples' feet before the Last Supper with characteristic <strong>dramatic perspective</strong> and energetic composition. The humble act of service is transformed into theatrical spectacle.</p>
<p>Tintoretto was Venice's most dramatic painter, known for bold compositions and rapid execution. His religious works combine spiritual intensity with visual excitement. The painting is at the <a href="/museum/museo-del-prado"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid." },
      { question: "What made Tintoretto's style distinctive?", answer: "<a href=\"/artist/tintoretto\"><strong>Tintoretto</strong></a> combined <strong>dramatic perspective</strong> with energetic brushwork and theatrical lighting." }
    ]
  },

  // 73. James Ensor - Christ's Entry into Brussels in 1889
  {
    slug: 'christs-entry-into-brussels',
    description: `<p><a href="/artist/james-ensor"><strong>James Ensor</strong></a> painted this provocative vision of Christ entering modern Brussels amid a <strong>carnival of masked figures</strong>. The composition satirizes contemporary society through grotesque masks and chaotic crowds.</p>
<p>Ensor's masterpiece imagines Christ's reception in modern Belgium, surrounded by political banners and carnival grotesques. The work shocked contemporary viewers. It's at the <a href="/museum/royal-museums-of-fine-arts-of-belgium"><strong>Royal Museums of Fine Arts of Belgium</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/royal-museums-of-fine-arts-of-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels." },
      { question: "Why are there masks in this painting?", answer: "<a href=\"/artist/james-ensor\"><strong>Ensor</strong></a> used <strong>carnival masks</strong> to satirize Belgian society and question how modern people would receive Christ." }
    ]
  },

  // 74. Lucas Cranach the Elder - Christoph von Scheurl
  {
    slug: 'lucas-cranach-elder-christoph-von-scheurl',
    description: `<p><a href="/artist/lucas-cranach-the-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Christoph von Scheurl, a German humanist and lawyer. The composition captures the sitter's <strong>intellectual bearing</strong> with the precise detail characteristic of German Renaissance portraiture.</p>
<p>Cranach was court painter to the Saxon electors and friend of Martin Luther. His portraits document the leading figures of the Reformation era. The work is at the <a href="/museum/cranach-hofe"><strong>Cranach-Höfe</strong></a> in Wittenberg.</p>`,
    faqs: [
      { question: "Where is this portrait?", answer: "It's at the <a href=\"/museum/cranach-hofe\"><strong>Cranach-Höfe</strong></a> in Wittenberg, in the building where Cranach lived and worked." },
      { question: "Who was Christoph von Scheurl?", answer: "<strong>Christoph von Scheurl</strong> was a German humanist lawyer and friend of both Cranach and Martin Luther." }
    ]
  },

  // 75. Vincent van Gogh - Churches at Petersham and Turnham Green
  {
    slug: 'van-gogh-churches-at-petersham-and-turnham-green',
    description: `<p><a href="/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> made these drawings of English churches during his time working in London. The compositions show his early interest in <strong>architecture and religious subjects</strong> before he developed his distinctive painting style.</p>
<p>Van Gogh worked as an art dealer and teacher in England before becoming an artist. These early works were stolen from the <a href="/museum/isabella-stewart-gardner-museum"><strong>Isabella Stewart Gardner Museum</strong></a> in 1990 and remain <strong>missing</strong>.</p>`,
    faqs: [
      { question: "Where was this work?", answer: "It was at the <a href=\"/museum/isabella-stewart-gardner-museum\"><strong>Isabella Stewart Gardner Museum</strong></a> in Boston until its <strong>theft in 1990</strong>." },
      { question: "When did Van Gogh make this?", answer: "<a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> made this during his time in <strong>England in the 1870s</strong>, before he became a painter." }
    ]
  },

  // 76. Frederic Leighton - Cimabue's Celebrated Madonna Carried in Procession
  {
    slug: 'frederic-leighton-cimabue39s-celebrated-madonna-carried-in-processio',
    description: `<p><a href="/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted this vast canvas imagining the procession celebrating Cimabue's Madonna through the streets of Florence. The composition recreates <strong>medieval Tuscany</strong> with the historical accuracy and classical grandeur that made Leighton famous.</p>
<p>This painting launched Leighton's career when Queen Victoria purchased it. It remains one of the largest Victorian history paintings. The work is at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's on loan to the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London from the Royal Collection." },
      { question: "Who was Cimabue?", answer: "<strong>Cimabue</strong> was a 13th-century Florentine painter, traditionally considered Giotto's teacher and a founder of Italian Renaissance art." }
    ]
  },

  // 77. Alexandre Cabanel - Cincinnatus Receiving The Ambassadors From Rome
  {
    slug: 'alexandre-cabanel-cincinnatus-receiving-the-ambassadors-from-rome',
    description: `<p><a href="/artist/alexandre-cabanel"><strong>Alexandre Cabanel</strong></a> painted this scene of Roman virtue, showing Cincinnatus called from his farm to save Rome. The composition exemplifies <strong>French academic painting</strong> with its polished technique and classical subject.</p>
<p>Cincinnatus represented the Roman ideal of duty over personal interest. Cabanel's rendering brings archaeological accuracy to moral instruction. The painting is at the <a href="/museum/musee-fabre"><strong>Musée Fabre</strong></a> in Montpellier.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-fabre\"><strong>Musée Fabre</strong></a> in Montpellier, France." },
      { question: "Who was Cincinnatus?", answer: "<strong>Cincinnatus</strong> was a Roman who left his farm to lead Rome's army, then returned to farming rather than seeking power." }
    ]
  },

  // 78. Edward Burne-Jones - Cinderella
  {
    slug: 'edward-burne-jones-cinderella',
    description: `<p><a href="/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> painted this scene from the Cinderella story with the <strong>dreamlike beauty</strong> characteristic of his late Pre-Raphaelite style. The composition transforms the fairy tale into a vision of medieval romance.</p>
<p>Burne-Jones was a leading figure in the Aesthetic Movement, creating works of decorative beauty. His fairy tale subjects influenced illustration and design. The painting is at the <a href="/museum/museum-of-fine-arts-boston"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/museum-of-fine-arts-boston\"><strong>Museum of Fine Arts</strong></a> in Boston." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> was associated with the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> and Aesthetic Movement." }
    ]
  },

  // 79. Dosso Dossi - Circe and Her Lovers in a Landscape
  {
    slug: 'circe-and-lovers-dossi',
    description: `<p><a href="/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> painted this scene of the enchantress Circe surrounded by men she has transformed into animals. The lush landscape and <strong>mysterious atmosphere</strong> reflect the influence of Giorgione and the poetic tradition of Ferrara.</p>
<p>Dossi was court painter at Ferrara, known for mythological subjects with dreamlike settings. His work combines Venetian color with fantastical imagination. The painting is at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
      { question: "Who was Circe?", answer: "<strong>Circe</strong> was a sorceress from Homer's Odyssey who transformed Odysseus's men into animals with her magic." }
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
