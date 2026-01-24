const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Prado Expansion Descriptions ===\n');

  const updates = [
    // === VELÁZQUEZ MASTERPIECES ===
    {
      slug: 'las-meninas-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted Las Meninas in 1656, creating what many consider the most analyzed painting in Western art. The scene shows the Infanta Margarita attended by her maids of honor (meninas), but Velázquez himself stands at a large canvas, looking outward. A mirror in the background reflects King Philip IV and Queen Mariana, suggesting they're the subject being painted.</p>
<p>The <strong>complex spatial arrangement</strong> has puzzled viewers for centuries. Where exactly does the viewer stand? Are we seeing what the king and queen see? Is Velázquez painting them, or us? The <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>muted palette</strong></a> of silvers, grays, and blacks focuses attention on faces and hands emerging from the darkness.</p>
<p>Pablo Picasso painted 58 variations on Las Meninas. Michel Foucault devoted the first chapter of "The Order of Things" to analyzing it. The painting hangs in its own room at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a>, where it draws crowds daily.</p>`,
      faqs: [
        { question: "What does Las Meninas mean?", answer: "<strong>'The Ladies-in-Waiting'</strong> in Spanish. The young attendants serving the Infanta Margarita were called meninas, a Portuguese term used in the Spanish court." },
        { question: "Is Velázquez in the painting?", answer: "Yes. <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted himself at the left, standing before a large canvas. He wears the red cross of the Order of Santiago, reportedly added after his death." },
        { question: "Who is reflected in the mirror?", answer: "The mirror shows <strong>King Philip IV and Queen Mariana</strong>. Whether they're posing for the painting-within-the-painting remains debated." },
        { question: "How big is Las Meninas?", answer: "The painting measures <strong>318 × 276 cm</strong> (10.4 × 9.1 feet). It dominates its gallery at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Prado</strong></a>." }
      ]
    },
    {
      slug: 'surrender-of-breda-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted The Surrender of Breda in 1635 for the Hall of Realms in Madrid's Buen Retiro Palace. The painting depicts the Dutch city's surrender to Spanish forces in 1625. General Justin of Nassau hands the city keys to the Spanish commander Ambrosio Spinola, who graciously prevents the defeated general from kneeling.</p>
<p>The painting is often called "Las Lanzas" (The Lances) for the <strong>forest of Spanish pikes</strong> dominating the right side. Velázquez shows neither triumphalism nor humiliation but mutual respect between honorable enemies. Spinola's gentle gesture and Nassau's dignified bearing transform a military victory into a lesson in magnanimity.</p>
<p>Velázquez never witnessed the actual event. He likely knew Spinola personally and imagined the scene based on descriptions. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays this massive canvas as one of the greatest history paintings ever made.</p>`,
      faqs: [
        { question: "Did Velázquez witness this event?", answer: "No. <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted this scene ten years after it occurred, based on accounts and his knowledge of General Spinola." },
        { question: "Why is it called Las Lanzas?", answer: "The <strong>forest of Spanish lances</strong> on the right side dominates the composition, giving the painting its popular alternate name." },
        { question: "Where is The Surrender of Breda?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. It measures 307 × 367 cm (10.1 × 12 feet)." }
      ]
    },
    {
      slug: 'spinners-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted The Spinners (Las Hilanderas) around 1657. The foreground shows women working at the Royal Tapestry Factory of Santa Isabel, their spinning wheel blurred with motion. In the background, elegantly dressed figures examine a tapestry depicting the myth of Arachne.</p>
<p>Velázquez creates a <strong>remarkable contrast</strong> between the dark, active workspace and the bright alcove beyond. The spinning wheel's blur demonstrates his interest in capturing movement. The background tapestry shows Athena punishing Arachne for daring to rival the goddess's weaving skills, a story about artistic pride and divine retribution.</p>
<p>Later additions extended the canvas on all sides, altering Velázquez's original composition. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays the painting at its expanded size. Art historians continue debating the layers of meaning Velázquez embedded in this apparently simple scene.</p>`,
      faqs: [
        { question: "What myth does the tapestry show?", answer: "The story of <strong>Arachne</strong>, a mortal weaver who challenged Athena and was transformed into a spider for her presumption." },
        { question: "Why is the spinning wheel blurred?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> deliberately blurred the wheel to show <strong>motion</strong>, anticipating photography's capture of movement by two centuries." },
        { question: "Where can I see The Spinners?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. It measures 220 × 289 cm." }
      ]
    },
    {
      slug: 'triumph-of-bacchus-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted The Triumph of Bacchus around 1628-1629. The god of wine, pale and semi-nude, crowns a kneeling peasant with ivy while other drunken revelers look on. This mythological scene is also called "Los Borrachos" (The Drunkards) for the earthy realism of its figures.</p>
<p>Velázquez combined <strong>classical mythology with Spanish genre painting</strong>. Bacchus resembles a studio model rather than an idealized deity, while the peasants could have walked in from any Madrid tavern. Their weathered faces and rough hands contrast with the god's smooth skin. The man in the center grins directly at us, breaking the fourth wall.</p>
<p>King Philip IV purchased the painting for the royal collection. It now hangs in the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a>, one of Velázquez's earliest mythological works and a preview of his later mastery.</p>`,
      faqs: [
        { question: "Why is it called Los Borrachos?", answer: "Spanish for <strong>'The Drunkards'</strong>. The realistic, intoxicated peasants surrounding Bacchus earned the painting this popular nickname." },
        { question: "What is Bacchus doing?", answer: "He's <strong>crowning a peasant with ivy</strong>, symbol of poetic and divine inspiration, while other revelers share in the wine god's gifts." },
        { question: "Where is this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted it before his first trip to Italy." }
      ]
    },
    {
      slug: 'christ-crucified-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this crucifixion around 1632 for the San Plácido convent in Madrid. Christ hangs against a <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black background</strong></a>, his body still composed, his head bowed in death. Four nails pin him to the cross, following a medieval tradition of separate nails for each foot.</p>
<p>The painting shows <strong>dignified suffering</strong> rather than graphic agony. Christ's body is idealized but anatomically convincing, lit from the left with subtle modeling. No onlookers, no landscape, no drama: just a solitary figure against darkness. This stark simplicity intensifies the emotional impact.</p>
<p>Spanish poet Miguel de Unamuno wrote a famous meditation on this image. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it as one of the most profound religious paintings in Spanish art.</p>`,
      faqs: [
        { question: "Why are there four nails?", answer: "Velázquez followed the <strong>medieval tradition</strong> of four nails, one for each hand and foot, rather than the three-nail convention common in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art." },
        { question: "Where was this painting originally?", answer: "Commissioned for the <strong>San Plácido convent</strong> in Madrid. It later entered the royal collection and now hangs at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Prado</strong></a>." },
        { question: "How big is Christ Crucified?", answer: "The painting measures <strong>248 × 169 cm</strong> (97.6 × 66.5 inches), life-size scale that confronts viewers directly." }
      ]
    },

    // === GOYA MASTERPIECES ===
    {
      slug: 'third-of-may-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Third of May 1808 in 1814, depicting the execution of Spanish civilians by Napoleon's troops. A man in white stands with arms raised, facing the firing squad's lantern. Bodies pile at his feet while more prisoners await their turn. The scene took place on Príncipe Pío hill in Madrid.</p>
<p>This painting <strong>transformed how artists depicted war</strong>. Instead of noble officers and heroic charges, Goya showed anonymous victims, mechanical executioners, and raw terror. The faceless soldiers represent impersonal violence, while the central figure's pose echoes Christ's crucifixion. Night swallows the scene except for the harsh lantern light.</p>
<p>Goya waited six years after the events to paint this, perhaps for political safety. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it alongside its companion piece, The Second of May. The painting influenced Manet, Picasso, and countless depictions of modern atrocity.</p>`,
      faqs: [
        { question: "What event does this depict?", answer: "The <strong>execution of Spanish civilians</strong> by French soldiers on May 3, 1808, following an uprising in Madrid against Napoleon's occupation." },
        { question: "Why is the central figure in white?", answer: "The <strong>white shirt</strong> catches all available light, making this man the focal point. His pose, with arms spread, evokes crucifixion imagery." },
        { question: "Where can I see The Third of May?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> painted it in 1814, six years after the events." },
        { question: "How large is the painting?", answer: "It measures <strong>268 × 347 cm</strong> (8.8 × 11.4 feet), nearly the same size as its companion depicting the previous day's uprising." }
      ]
    },
    {
      slug: 'second-of-may-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Second of May 1808 in 1814, showing the Madrid uprising against French occupation. Spanish civilians attack Mameluke cavalry (Egyptian soldiers serving Napoleon) in the Puerta del Sol. The scene explodes with violence: stabbing, shooting, horses rearing, bodies falling.</p>
<p>Unlike traditional battle paintings with clear heroes, <strong>chaos dominates</strong>. Friend and enemy tangle together in desperate combat. Goya captures the fury of popular resistance and the brutality it unleashed. The <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> and blood-reds create a palette of violence.</p>
<p>This painting pairs with The Third of May, showing uprising and retribution. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays them in the same gallery. Together they form a meditation on the futility and necessity of resistance against tyranny.</p>`,
      faqs: [
        { question: "What uprising does this show?", answer: "The <strong>Dos de Mayo Uprising</strong>, when Madrid civilians attacked French forces on May 2, 1808, triggering Spain's War of Independence." },
        { question: "Who are the soldiers on horseback?", answer: "<strong>Mamelukes</strong>, Egyptian cavalry soldiers who fought for Napoleon. Spanish fury particularly targeted these foreign Muslim troops." },
        { question: "Is this a companion piece?", answer: "Yes, <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> painted it alongside <strong>The Third of May</strong>, showing the uprising and its bloody aftermath." }
      ]
    },
    {
      slug: 'saturn-devouring-son-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted Saturn Devouring His Son directly on the walls of his house, Quinta del Sordo, between 1820 and 1823. The Titan Saturn, crazed and wild-eyed, tears flesh from his child's body. The myth tells how Saturn ate his children to prevent them from overthrowing him.</p>
<p>This is one of Goya's <strong>"Black Paintings,"</strong> a series of dark works painted in his final years. The <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>macabre imagery</strong></a> reflects his disillusionment with humanity after witnessing war, political terror, and personal decline into deafness. The figure emerges from pure darkness, the violence almost abstract in its intensity.</p>
<p>After Goya's death, the murals were transferred to canvas and eventually donated to the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a>. No documentation explains what Goya intended. Modern viewers find in it everything from political allegory to psychological horror.</p>`,
      faqs: [
        { question: "What are the Black Paintings?", answer: "A series of <strong>14 murals</strong> <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> painted on his house walls between 1820-1823, depicting disturbing scenes of violence, witchcraft, and madness." },
        { question: "Why did Goya paint this?", answer: "Nobody knows for certain. The <strong>Black Paintings were private</strong>, never intended for public display. They may reflect his despair over Spain's political situation and his own mortality." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. The mural was transferred from Goya's house to canvas in 1873." },
        { question: "What is the myth of Saturn?", answer: "The <strong>Titan Saturn</strong> (Greek Cronus) devoured his children to prevent a prophecy that one would overthrow him. Zeus escaped and fulfilled the prophecy." }
      ]
    },
    {
      slug: 'naked-maja-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Naked Maja around 1797-1800, creating one of the first Western paintings to show pubic hair on a female nude. The young woman reclines on cushions, looking directly at the viewer with neither shame nor coyness. Her identity remains debated: possibly the Duchess of Alba, or a professional model.</p>
<p>The painting scandalized the Spanish Inquisition. Goya was called to explain himself in 1815, though the charges were eventually dropped. The <strong>frank, unapologetic nudity</strong> broke from the tradition of mythological pretexts that justified nude paintings. This wasn't Venus or a nymph. This was simply a naked woman.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays this painting alongside its clothed counterpart. Together they raise questions about revelation and concealment, desire and propriety.</p>`,
      faqs: [
        { question: "Who is the Maja?", answer: "Her identity is <strong>unknown</strong>. Theories include the Duchess of Alba, Pepita Tudó (mistress of prime minister Godoy), or an anonymous model." },
        { question: "Why was this painting controversial?", answer: "It showed a <strong>nude woman without mythological justification</strong>, and the Spanish Inquisition investigated <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> for obscenity in 1815." },
        { question: "What is a maja?", answer: "A <strong>maja</strong> was a fashionable woman of the Spanish lower classes, known for colorful dress and bold manner. The term carries connotations of flirtation." }
      ]
    },
    {
      slug: 'clothed-maja-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Clothed Maja around 1800-1805, the companion piece to his notorious nude. The same woman reclines in the same pose, now wearing a white gown with a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold sash</strong></a> and short bolero jacket. The clothing, if anything, emphasizes the body beneath.</p>
<p>The two paintings may have been displayed in a special cabinet where the clothed version could slide away to reveal the nude beneath. This mechanical reveal would have made the undressing a performance. The <strong>tight-fitting costume</strong> of the dressed maja actually seems more provocative to some viewers than the nude.</p>
<p>Both paintings belonged to Prime Minister Manuel Godoy before the Inquisition seized them. They now hang side by side in the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a>.</p>`,
      faqs: [
        { question: "Why paint both clothed and nude versions?", answer: "The paintings may have been displayed so the <strong>clothed version could slide away</strong> to reveal the nude, creating a private entertainment for the owner." },
        { question: "Which was painted first?", answer: "Art historians disagree. The <strong>Naked Maja</strong> may have come first, with the Clothed version added as a cover, or vice versa." },
        { question: "Where can I see both Majas?", answer: "Both paintings hang in the same gallery at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>, allowing direct comparison." }
      ]
    },
    {
      slug: 'family-charles-iv-goya',
      description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Family of Charles IV in 1800-1801, grouping the Spanish royal family in their finest clothing and jewels. King Charles IV and Queen María Luisa stand at center, surrounded by their children and relatives. Goya himself appears painting in the shadows at left, echoing Velázquez's Las Meninas.</p>
<p>Critics have long debated whether Goya subtly mocked his patrons. The faces seem <strong>unsparingly realistic</strong>, the queen domineering, the king passive. Yet the royal family loved the portrait. Either they didn't notice any satire, or Goya balanced criticism with enough flattery to please them.</p>
<p>The brilliant fabrics shimmer with silk and <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> embroidery. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays this monumental canvas as both a technical masterpiece and a psychological study of power.</p>`,
      faqs: [
        { question: "Is Goya criticizing the royal family?", answer: "Possibly. Some see <strong>unflattering honesty</strong> in the faces, but the royals apparently liked the painting. <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> kept his court position." },
        { question: "Why is Goya in the painting?", answer: "Following <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez's</strong></a> example in Las Meninas, Goya painted himself in the shadows, canvas visible behind him." },
        { question: "How big is this painting?", answer: "It measures <strong>280 × 336 cm</strong> (9.2 × 11 feet), displayed at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Prado</strong></a>." }
      ]
    },

    // === EL GRECO ===
    {
      slug: 'nobleman-hand-chest-el-greco',
      description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted The Nobleman with his Hand on his Chest around 1580, shortly after arriving in Toledo. The unidentified gentleman places his hand over his heart in a gesture suggesting an oath or pledge. His <strong>penetrating dark eyes</strong> and elongated face became hallmarks of El Greco's portraiture.</p>
<p>The plain <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black clothing</strong></a> follows Spanish court fashion, where austere dress signified nobility more than flashy colors. Only the white ruff and gold sword hilt break the darkness. The restraint focuses all attention on the face and that pledging hand.</p>
<p>This portrait became one of the most recognized images in Spanish art, reproduced on stamps and currency. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it as El Greco's most accessible masterpiece.</p>`,
      faqs: [
        { question: "Who is the nobleman?", answer: "His identity is <strong>unknown</strong>. Candidates include various Toledo nobles, though none has been confirmed." },
        { question: "What does the hand gesture mean?", answer: "The <strong>hand on heart</strong> suggests an oath, pledge of loyalty, or moment of sincere emotion. In 16th-century Spain, such gestures carried formal significance." },
        { question: "Where can I see this portrait?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. <a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> painted it soon after settling in Toledo around 1580." }
      ]
    },
    {
      slug: 'annunciation-el-greco-prado',
      description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted this Annunciation around 1600, showing the angel Gabriel descending to the Virgin Mary. The figures elongate impossibly, their robes billowing in supernatural wind. Above, the Holy Spirit descends as a dove surrounded by cherubs, the composition rising in a spiral of ecstatic movement.</p>
<p>El Greco's <strong>distinctive style</strong> reached its full development in works like this. The proportions follow no earthly anatomy. Colors shift from deep <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> to flame-like reds and yellows. The supernatural event demands supernatural treatment, and El Greco delivers spiritual intensity through visual distortion.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> holds several versions of El Greco's Annunciation. This large altarpiece demonstrates why his work, once dismissed as "incorrect," later inspired Expressionism.</p>`,
      faqs: [
        { question: "Why are the figures so elongated?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> deliberately distorted proportions to convey <strong>spiritual transcendence</strong>. Earthly bodies couldn't contain divine experience." },
        { question: "How big is this painting?", answer: "This version measures <strong>315 × 174 cm</strong> (124 × 68.5 inches), an altarpiece scale that overwhelms viewers at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Prado</strong></a>." },
        { question: "What is depicted in the Annunciation?", answer: "The moment <strong>Gabriel tells Mary</strong> she will bear Jesus. The dove represents the Holy Spirit whose power will cause the miraculous conception." }
      ]
    },

    // === BOSCH ===
    {
      slug: 'haywain-triptych-bosch',
      description: `<p><a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted The Haywain Triptych around 1510-1516. When open, the panels show Eden on the left, Hell on the right, and in the center a massive hay wagon pulled toward damnation while humans fight to grab handfuls of straw. Closed, the panels show a wanderer walking a dangerous road.</p>
<p>The hay represents <strong>worldly goods and vanity</strong>, worthless yet fought over. Nobles, clergy, and commoners all grasp at the wagon. A proverb states "The world is a haystack; everyone takes what he can grab." Bosch illustrated human foolishness with his characteristic blend of the grotesque and moralistic.</p>
<p>King Philip II acquired this triptych for the Escorial. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> now displays it alongside Bosch's Garden of Earthly Delights.</p>`,
      faqs: [
        { question: "What does the hay represent?", answer: "The <strong>hay symbolizes worldly vanity</strong>, things people fight over that are ultimately worthless. A Flemish proverb compared the world to a haystack everyone tries to grab from." },
        { question: "What are the three panels?", answer: "Left: <strong>Creation and Fall</strong> in Eden. Center: humanity chasing the hay wagon. Right: <strong>Hell</strong>, the destination of human greed." },
        { question: "Where is The Haywain displayed?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, which holds the finest collection of <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> work." }
      ]
    },
    {
      slug: 'seven-deadly-sins-bosch',
      description: `<p><a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted The Table of the Seven Deadly Sins around 1505-1510. The central circle shows Christ rising from his tomb, surrounded by scenes of the seven sins: anger, pride, lust, sloth, gluttony, avarice, and envy. Each sin appears as a <strong>contemporary genre scene</strong> that viewers could recognize from daily life.</p>
<p>Four corner roundels depict Death, Last Judgment, Heaven, and Hell, reminding viewers of the consequences. An inscription reads "Beware, beware, God sees." The format may have been a tabletop, allowing the owner to contemplate morality while dining. Sin becomes literally <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>ordinary people</strong></a> behaving badly.</p>
<p>Philip II kept this work in his bedroom at the Escorial. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it as one of Bosch's most didactic works.</p>`,
      faqs: [
        { question: "What are the seven deadly sins?", answer: "<strong>Pride, greed, lust, envy, gluttony, wrath, and sloth</strong>. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> depicts each through everyday scenes of 15th-century Dutch life." },
        { question: "What is the central image?", answer: "<strong>Christ emerging from his tomb</strong>, his wounds visible, with an inscription: 'Beware, beware, God sees.'" },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. King Philip II originally displayed it in his private chambers." }
      ]
    },

    // === TITIAN ===
    {
      slug: 'equestrian-charles-v-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this equestrian portrait of Emperor Charles V in 1548, commemorating his victory at the Battle of Mühlberg the previous year. The emperor rides in full armor through a twilight landscape, lance ready, embodying the ideal of the Christian warrior-king. The <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red plumes</strong></a> on his helmet add martial splendor.</p>
<p>This painting <strong>established the template</strong> for royal equestrian portraits across Europe. Velázquez, Rubens, and Van Dyck all studied and referenced it. The emperor appears not as an aging, gout-ridden ruler but as a timeless champion of Christendom against Protestant heresy.</p>
<p>Charles V gave the painting to his son Philip II, who brought it to Spain. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it as one of the greatest state portraits ever painted.</p>`,
      faqs: [
        { question: "What battle does this commemorate?", answer: "The <strong>Battle of Mühlberg</strong> (1547), where Charles V defeated Protestant forces in Germany. <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted this the following year." },
        { question: "How did this painting influence later art?", answer: "It <strong>established the equestrian portrait format</strong> that rulers used for centuries. Velázquez and Rubens both created variations on Titian's composition." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 332 × 279 cm (10.9 × 9.2 feet)." }
      ]
    },
    {
      slug: 'venus-organist-cupid-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this Venus with an Organist and Cupid around 1555. Venus reclines nude while a musician turns from his organ to gaze at her. Cupid whispers in her ear or crowns her with flowers. Through the window, a formal garden with couples strolling extends toward distant mountains.</p>
<p>The painting's meaning remains debated. Is this an allegory of <strong>music and love</strong>, with the organist representing hearing and Venus representing sight and touch? Or simply an erotic scene thinly veiled by mythological pretense? The musician's frankly appreciative gaze suggests the latter.</p>
<p>Titian painted several versions of this composition for various patrons. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> holds this version, one of the finest explorations of Venetian sensuality.</p>`,
      faqs: [
        { question: "Who commissioned this painting?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted several versions for <strong>wealthy patrons</strong>. This version likely belonged to the Spanish royal collection." },
        { question: "What does the organist represent?", answer: "Possibly the <strong>sense of hearing</strong>, complementing Venus's visual and tactile beauty. Or he may simply be an admirer enjoying the view." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 148 × 217 cm (58.3 × 85.4 inches)." }
      ]
    },
    {
      slug: 'danae-titian-prado',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this version of Danaë around 1553 for King Philip II of Spain. The myth tells how Zeus visited Danaë as a shower of gold while she was imprisoned by her father. Titian shows the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden rain</strong></a> falling onto Danaë's nude body while an elderly servant tries to catch coins in her apron.</p>
<p>The contrast between <strong>Danaë's sensual abandon</strong> and the servant's greed creates both humor and commentary. This was one of a series of "poesie" (poetic paintings) Titian created for Philip II, treating mythological subjects as opportunities for exploring the female nude.</p>
<p>Michelangelo reportedly criticized an earlier version of this subject, saying Titian couldn't draw. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> version shows Titian's mastery of color and flesh tones at its peak.</p>`,
      faqs: [
        { question: "Who was Danaë?", answer: "A Greek princess whose father imprisoned her after a prophecy that her son would kill him. <strong>Zeus impregnated her</strong> as golden rain, and she bore Perseus." },
        { question: "What is a 'poesia'?", answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> called his mythological paintings <strong>'poesie'</strong> (poems), treating them as visual equivalents of classical poetry." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. Titian painted several versions; this one was made for Philip II." }
      ]
    },

    // === RUBENS ===
    {
      slug: 'three-graces-rubens',
      description: `<p><a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted The Three Graces around 1639, near the end of his life. The three goddesses, daughters of Zeus, represent beauty, charm, and joy. They embrace in an eternal dance, their voluptuous bodies glowing against a garden landscape. Rubens modeled the central figure on his young wife, Hélène Fourment.</p>
<p>The <strong>fleshy, celebrated bodies</strong> epitomize what became known as "Rubenesque." These are not idealized classical nudes but warm, real women with dimpled flesh and soft bellies. A fountain streams into a basin, a cornucopia spills fruit, and garlands suggest eternal spring and abundance.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays this painting as the culmination of Rubens's lifelong celebration of female beauty.</p>`,
      faqs: [
        { question: "Who are the Three Graces?", answer: "<strong>Aglaea, Euphrosyne, and Thalia</strong>, goddesses of beauty, mirth, and abundance. They often attended Aphrodite and represented life's pleasures." },
        { question: "What does 'Rubenesque' mean?", answer: "The term describes <strong>full-figured female beauty</strong> as <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> portrayed it: voluptuous, sensual, and warmly fleshed." },
        { question: "Where can I see The Three Graces?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. Rubens painted it on oak panel, measuring 221 × 181 cm." }
      ]
    },
    {
      slug: 'garden-of-love-rubens',
      description: `<p><a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted The Garden of Love around 1633, showing elegantly dressed couples gathering in an architectural garden. Cupids flutter overhead, a fountain of Venus graces the center, and the figures engage in the rituals of courtship. The artist included himself and his young wife Hélène Fourment among the couples.</p>
<p>This painting influenced the French <strong>fête galante genre</strong> that Watteau would later perfect. The combination of outdoor setting, fashionable society, and amorous undertones created a template for depicting aristocratic pleasure. <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>Rich colors</strong></a> and swirling composition suggest joyful movement.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> acquired this painting from the Spanish royal collection. It captures the fantasy of love as eternal springtime.</p>`,
      faqs: [
        { question: "Is Rubens in the painting?", answer: "Yes, <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> included himself and his wife <strong>Hélène Fourment</strong> among the courting couples." },
        { question: "What is a fête galante?", answer: "A <strong>French genre</strong> showing elegant outdoor gatherings with amorous overtones. Rubens's Garden of Love influenced later artists like Watteau." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 199 × 286 cm (78.3 × 112.6 inches)." }
      ]
    },

    // === DÜRER ===
    {
      slug: 'self-portrait-durer-prado',
      description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this self-portrait in 1498, at age 26. He presents himself as a prosperous gentleman in fashionable Italian dress: a striped doublet, white gloves, and a tasseled cap. Through the window, mountains suggest the Alps he crossed on his journey to Venice. An inscription notes his age and the date.</p>
<p>This portrait asserts the <strong>artist's elevated social status</strong>. Dürer doesn't show himself at work but as a cultivated man of means. The meticulous rendering of fabrics and hair demonstrates his technical virtuosity while the confident pose claims equality with his wealthy patrons.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> acquired this painting from the Spanish royal collection. It hangs alongside Dürer's monumental Adam and Eve panels.</p>`,
      faqs: [
        { question: "How old was Dürer here?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a> was <strong>26 years old</strong>. An inscription identifies his age and the year 1498." },
        { question: "Why is he dressed so elegantly?", answer: "Dürer wanted to show artists as <strong>intellectual equals to patrons</strong>, not mere craftsmen. His Italian clothing reflects recent travels to Venice." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 52 × 41 cm (20.5 × 16.1 inches)." }
      ]
    },
    {
      slug: 'adam-eve-durer-prado',
      description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted Adam and Eve in 1507, shortly after his second Italian journey. The two life-sized panels show humanity's first parents before the Fall, their bodies modeled on classical proportions. Adam holds an apple branch while Eve receives the forbidden fruit from the serpent.</p>
<p>Dürer applied his <strong>studies of ideal human proportions</strong> to create these figures. He combined northern European precision with Italian idealism learned from studying ancient sculpture and contemporary masters. The stark black background isolates the figures like specimens of perfect humanity.</p>
<p>These panels remained together until 1777 when they were separated and sold. Reunited at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a>, they demonstrate Dürer's ambition to rival Italian Renaissance masters on their own terms.</p>`,
      faqs: [
        { question: "How big are these panels?", answer: "Each panel measures <strong>209 × 81 cm</strong> (82.3 × 31.9 inches), making the figures nearly life-sized at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Prado</strong></a>." },
        { question: "What influenced these paintings?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer's</strong></a> <strong>Italian travels</strong> and studies of classical proportion. He aimed to create northern European equivalents to Italian idealized nudes." },
        { question: "Were they always together?", answer: "No, they were <strong>separated in 1777</strong> and passed through different collections before being reunited at the Prado." }
      ]
    },

    // === ROGIER VAN DER WEYDEN ===
    {
      slug: 'descent-cross-weyden',
      description: `<p><a href="/apps/masterpieces/artist/rogier-van-der-weyden"><strong>Rogier van der Weyden</strong></a> painted this Descent from the Cross around 1435 for a crossbowmen's guild in Leuven. Christ's body is lowered from the cross while the Virgin Mary swoons in a pose that mirrors her son's. Ten figures crowd the shallow, golden space, their grief rendered with extraordinary emotional intensity.</p>
<p>The <strong>compressed composition</strong> eliminates any sense of landscape or deep space. Figures seem pressed against the picture plane like sculptured relief. Every face expresses a different shade of grief: Mary Magdalene wringing her hands, Joseph of Arimathea supporting Christ's arm, Nicodemus holding his feet.</p>
<p>The painting's fame spread across Europe through copies and adaptations. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays the original, one of the most influential paintings of the 15th century.</p>`,
      faqs: [
        { question: "Who commissioned this painting?", answer: "The <strong>Guild of Crossbowmen</strong> in Leuven, Belgium. The small crossbows in the tracery corners reference the patrons." },
        { question: "Why does Mary mirror Christ's pose?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a> connected mother and son through <strong>parallel poses</strong>, suggesting she shares in his suffering." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 220 × 262 cm (86.6 × 103.1 inches)." },
        { question: "Why is the background gold?", answer: "The <strong>gold background</strong> was common in early Netherlandish art, symbolizing the sacred and compressing the figures into a shallow, icon-like space." }
      ]
    },

    // === MURILLO ===
    {
      slug: 'immaculate-conception-murillo',
      description: `<p><a href="/apps/masterpieces/artist/bartolome-esteban-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted The Immaculate Conception of Los Venerables in 1678. The Virgin Mary ascends toward heaven, her hands joined in prayer, surrounded by cherubs and bathed in golden light. She stands on a crescent moon, trampling the serpent of sin beneath her feet.</p>
<p>Murillo painted numerous versions of this subject, which was <strong>especially dear to Spanish devotion</strong>. The doctrine holds that Mary was conceived without original sin. Murillo's Virgins became the definitive images of this belief: young, beautiful, gazing heavenward with serene faith.</p>
<p>This version hung in the Hospital de los Venerables in Seville until Marshal Soult seized it during Napoleon's invasion. After various adventures, it reached the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> in 1941.</p>`,
      faqs: [
        { question: "What is the Immaculate Conception?", answer: "The Catholic doctrine that <strong>Mary was conceived without original sin</strong>, preserving her purity to bear Christ. Spain was especially devoted to this belief." },
        { question: "Who painted the most Immaculate Conceptions?", answer: "<a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo</strong></a> painted over <strong>20 versions</strong>, making it his signature subject. His vision defined the iconography." },
        { question: "Where is this painting now?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 274 × 190 cm (107.9 × 74.8 inches)." }
      ]
    },

    // === RIBERA ===
    {
      slug: 'martyrdom-saint-philip-ribera',
      description: `<p><a href="/apps/masterpieces/artist/jose-de-ribera"><strong>José de Ribera</strong></a> painted The Martyrdom of Saint Philip in 1639. Executioners hoist the apostle onto a cross where he will be crucified. Philip's face shows not agony but transcendent acceptance. The <strong>dramatic lighting</strong> and realistic flesh tones reflect Ribera's study of Caravaggio during his years in Naples.</p>
<p>Ribera specialized in martyrdom scenes and studies of aged saints. His unflinching realism shows muscles straining, ropes biting into flesh, the <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>weathered skin</strong></a> of working men. Yet the saint's calm gaze transforms violence into spiritual triumph.</p>
<p>Born in Spain, Ribera spent most of his career in Naples. His dark, intense canvases influenced later Spanish masters. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> holds major examples of his work.</p>`,
      faqs: [
        { question: "Who was Saint Philip?", answer: "One of the <strong>twelve apostles</strong> of Christ. Tradition says he was martyred by crucifixion in Hierapolis (modern Turkey)." },
        { question: "What influenced Ribera's style?", answer: "<a href=\"/apps/masterpieces/artist/jose-de-ribera\"><strong>Ribera</strong></a> studied <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> dramatic lighting and realism during his years in Italy." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. The canvas measures 234 × 234 cm (92.1 inches square)." }
      ]
    },

    // === ZURBARÁN ===
    {
      slug: 'agnus-dei-zurbaran',
      description: `<p><a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a> painted Agnus Dei (Lamb of God) around 1635-1640. A young lamb lies on a dark surface, its feet bound, awaiting sacrifice. The animal looks directly at the viewer with an expression that seems almost human in its patience. Nothing else appears: no landscape, no altar, no symbols beyond the lamb itself.</p>
<p>The painting's power comes from its <strong>austere simplicity</strong>. The lamb represents Christ as the sacrificial victim, yet Zurbarán avoided obvious religious imagery. The exquisite rendering of wool, the soft ears, the trusting gaze create empathy before theology. This is a portrait of innocence about to be destroyed.</p>
<p>Zurbarán painted several versions of this subject. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> version demonstrates his mastery of still-life painting within a devotional context.</p>`,
      faqs: [
        { question: "What does 'Agnus Dei' mean?", answer: "<strong>'Lamb of God'</strong> in Latin, a title for Christ referring to his sacrifice for humanity's sins. John the Baptist first used this phrase." },
        { question: "Why did Zurbarán paint bound lambs?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> painted <strong>several versions</strong> for religious patrons. The image served as a meditation on Christ's sacrifice and innocence." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It's small (38 × 62 cm) but intensely moving." }
      ]
    },

    // === CARAVAGGIO ===
    {
      slug: 'david-goliath-caravaggio-prado',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this David with the Head of Goliath around 1600. The young David holds the giant's severed head, his sword still drawn. Unlike triumphant depictions of this subject, <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>David's expression</strong></a> seems melancholy, almost regretful, as he contemplates the face of his defeated enemy.</p>
<p>Caravaggio painted several versions of this subject throughout his life. This early version shows his characteristic <strong>dramatic lighting</strong> and psychological complexity. The dark background eliminates context, focusing attention on the moral weight of violence even in a righteous cause.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> acquired this painting from the Spanish royal collection. It predates Caravaggio's more famous version where he used his own face for Goliath.</p>`,
      faqs: [
        { question: "How many David paintings did Caravaggio make?", answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted <strong>several versions</strong>. This Prado version (c.1600) is earlier than the famous one where he painted himself as Goliath." },
        { question: "Why does David look sad?", answer: "Caravaggio often depicted <strong>complex emotions</strong> in violent scenes. Even justified killing carries moral weight." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 110 × 91 cm (43.3 × 35.8 inches)." }
      ]
    },

    // === RAPHAEL ===
    {
      slug: 'holy-family-lamb-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted The Holy Family with a Lamb in 1507, early in his career. The infant Jesus sits astride a lamb while Mary steadies him and Joseph watches from behind. The lamb prefigures Christ's sacrificial role, while the intimate family scene emphasizes Jesus's humanity.</p>
<p>This small devotional painting demonstrates Raphael's <strong>graceful composition</strong> and tender characterization. The figures form a stable pyramid, a Renaissance convention for conveying harmony. The soft landscape behind them recalls both Leonardo's atmospheric backgrounds and Perugino's gentle Umbrian hills.</p>
<p>Despite its modest size, this painting influenced countless later depictions of the Holy Family. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays it as an early masterpiece by one of art's most beloved painters.</p>`,
      faqs: [
        { question: "Why is there a lamb?", answer: "The lamb symbolizes <strong>Christ's future sacrifice</strong>. Jesus riding it foreshadows his role as the 'Lamb of God' who dies for humanity." },
        { question: "How big is this painting?", answer: "Only <strong>29 × 21 cm</strong> (11.4 × 8.3 inches), a small devotional work by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>." },
        { question: "Where can I see it?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, part of the Spanish royal collection." }
      ]
    },
    {
      slug: 'portrait-cardinal-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this Portrait of a Cardinal around 1510, during his years working for Pope Julius II. The identity of the subject remains unknown, though scholars have proposed various Vatican officials. The cardinal wears <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>brilliant red</strong></a> robes that dominate the composition.</p>
<p>The painting demonstrates Raphael's <strong>psychological penetration</strong>. The cardinal's sharp eyes assess the viewer, suggesting intelligence and perhaps calculation. His thin lips and composed expression convey authority without warmth. This is a portrait of power, rendered with technical brilliance.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> acquired this painting in the 19th century. It ranks among Raphael's finest portraits and the great character studies of the Renaissance.</p>`,
      faqs: [
        { question: "Who is the cardinal?", answer: "His identity is <strong>unknown</strong>. Candidates include various Vatican officials active during <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael's</strong></a> Roman period." },
        { question: "Why is the background so plain?", answer: "The <strong>neutral background</strong> focuses attention on the cardinal's face and brilliant red robes, emphasizing presence over setting." },
        { question: "Where can I see this portrait?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. It measures 79 × 61 cm (31.1 × 24 inches)." }
      ]
    },

    // === REMBRANDT ===
    {
      slug: 'artemisia-rembrandt',
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted Artemisia in 1634, depicting the ancient queen about to drink her husband's ashes mixed with wine. After King Mausolus died, Artemisia so grieved that she consumed his remains, becoming a living tomb. A servant offers the cup while another holds a cloth.</p>
<p>The subject was popular in the 17th century as an <strong>example of wifely devotion</strong>. Rembrandt dressed his Artemisia in contemporary Dutch costume, her <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden gown</strong></a> and pearls glowing against the dark background. The model may have been his wife Saskia, whom he married the same year.</p>
<p>The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Prado</strong></a> displays this painting as one of Rembrandt's finest history paintings from his successful Amsterdam years.</p>`,
      faqs: [
        { question: "Who was Artemisia?", answer: "Queen of <strong>Caria</strong> (modern Turkey), famous for building the Mausoleum at Halicarnassus for her husband and drinking his ashes in devotion." },
        { question: "Who modeled for this painting?", answer: "Possibly <strong>Saskia van Uylenburgh</strong>, whom <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> married in 1634, the same year he painted this." },
        { question: "Where can I see Artemisia?", answer: "At the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a>. The painting measures 142 × 153 cm (55.9 × 60.2 inches)." }
      ]
    },
  ];

  let updated = 0;
  let notFound = 0;

  for (const item of updates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: item.slug }
    });

    if (!artwork) {
      console.log(`NOT FOUND: ${item.slug}`);
      notFound++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: item.description,
        faqs: item.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${item.slug}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
