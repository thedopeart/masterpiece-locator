const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Uffizi Expansion Descriptions ===\n');

  const updates = [
    // === BOTTICELLI ===
    {
      slug: 'primavera-botticelli',
      description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted Primavera (Spring) around 1482 for Lorenzo di Pierfrancesco de' Medici. The scene shows mythological figures in an orange grove: Venus at center, the Three Graces dancing, Mercury dispersing clouds, and Flora scattering flowers. At right, the wind god Zephyrus pursues the nymph Chloris, who transforms into Flora.</p>
<p>Over 500 plant species appear in this painting, many identifiable to botanists. The <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flowering meadow</strong></a> and orange grove create an eternal springtime where classical gods embody humanist ideals of love, beauty, and civilization. Scholars have proposed numerous interpretations, from Neoplatonic philosophy to marriage celebration.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays Primavera alongside the Birth of Venus in its Botticelli room. Together they represent the peak of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> mythological painting.</p>`,
      faqs: [
        { question: "What does Primavera mean?", answer: "<strong>'Spring'</strong> in Italian. The painting celebrates the season through classical mythology, with Venus, the Three Graces, Flora, and other deities." },
        { question: "How many flowers are in the painting?", answer: "Over <strong>500 identifiable plant species</strong> appear, including many Tuscan wildflowers. <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> studied botany for this work." },
        { question: "Where can I see Primavera?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It hangs near the Birth of Venus." },
        { question: "How big is Primavera?", answer: "The painting measures <strong>202 × 314 cm</strong> (6.6 × 10.3 feet), one of the largest mythological paintings of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
      ]
    },
    {
      slug: 'pallas-centaur-botticelli',
      description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted Pallas and the Centaur around 1482, the same period as Primavera. The goddess Athena (Pallas) grasps a centaur by his hair, subduing the beast without violence. Her gown is embroidered with the Medici diamond ring symbol, connecting the painting to Lorenzo de' Medici's household.</p>
<p>The allegory suggests <strong>wisdom taming base instincts</strong>, or civilization conquering savagery. Pallas holds a decorative halberd and wears an elaborate crown of olive branches. The centaur, normally aggressive in mythology, appears docile and melancholy. The landscape behind them shows a harbor with ships.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this painting in its Botticelli galleries. It offers a more allegorical counterpart to the purely mythological Primavera and Birth of Venus.</p>`,
      faqs: [
        { question: "Who is Pallas?", answer: "<strong>Pallas Athena</strong>, the Greek goddess of wisdom and warfare. <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> shows her as civilized refinement conquering brute nature." },
        { question: "What does the centaur represent?", answer: "Centaurs traditionally symbolize <strong>animal passion and wild nature</strong>. Pallas subduing one represents reason conquering instinct." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, among Botticelli's other mythological works." }
      ]
    },

    // === LEONARDO ===
    {
      slug: 'annunciation-leonardo-uffizi',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted the Annunciation around 1472-1475, while still working in Verrocchio's workshop. The angel Gabriel kneels in a garden, announcing to Mary that she will bear Christ. She sits at a marble lectern, her hand raised in a gesture of acceptance and surprise.</p>
<p>The young Leonardo already demonstrates his <strong>atmospheric perspective</strong>, with distant mountains fading into blue haze. The garden flowers, the angel's wings, and the ornate lectern show meticulous attention to natural detail. The Virgin's right arm appears too long, possibly a deliberate distortion to account for the painting's original viewing angle.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this as one of Leonardo's earliest surviving paintings. Some scholars believe Verrocchio painted portions, particularly the angel's wings.</p>`,
      faqs: [
        { question: "How old was Leonardo when he painted this?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> was about <strong>20-23 years old</strong>, still training in Verrocchio's workshop. This is one of his earliest known paintings." },
        { question: "Why does Mary's arm look so long?", answer: "Leonardo may have <strong>calculated the distortion</strong> for viewers seeing the painting from the right side, where it would appear correct." },
        { question: "Where can I see Leonardo's Annunciation?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It measures 98 × 217 cm." }
      ]
    },
    {
      slug: 'adoration-magi-leonardo',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> began this Adoration of the Magi in 1481 but abandoned it unfinished when he left Florence for Milan. The composition shows the Virgin and Child surrounded by adoring figures, while behind them horsemen battle and workers construct a ruined building. The under-drawing and partial paint layers reveal Leonardo's creative process.</p>
<p>The <strong>complex arrangement</strong> of over 60 figures radiates from the central Virgin. Some figures gesture dramatically, others kneel in contemplation. The background combines classical ruins with mysterious violence. Leonardo's characteristic psychological intensity already appears in faces ranging from serene worship to anxious searching.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays the painting in its unfinished state. Recent restoration removed centuries of varnish and retouching, revealing Leonardo's original monochromatic under-painting.</p>`,
      faqs: [
        { question: "Why is this painting unfinished?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> <strong>left Florence for Milan</strong> in 1482, abandoning the commission. He never returned to complete it." },
        { question: "What's happening in the background?", answer: "Horsemen <strong>fight a battle</strong> and workers construct or repair a ruined building. Scholars debate the symbolism of these unusual details." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 246 × 243 cm, nearly a perfect square." }
      ]
    },

    // === MICHELANGELO ===
    {
      slug: 'doni-tondo-michelangelo',
      description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> painted the Doni Tondo around 1507 for the marriage of Agnolo Doni and Maddalena Strozzi. The circular format (tondo) shows the Holy Family: Mary twists to receive the Christ child from Joseph, their bodies intertwining in complex, sculptural poses. Behind a low wall, nude youths represent the pagan world before Christ.</p>
<p>The <strong>brilliant colors</strong>, unusual for Michelangelo, may reflect his wish to rival contemporary Florentine painters. The figures' muscular bodies and twisted poses anticipate the Sistine Chapel ceiling he would begin the following year. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>vivid blues</strong></a> and acidic greens shocked contemporaries accustomed to softer harmonies.</p>
<p>This is the only finished panel painting by Michelangelo that survives. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it in its original frame, also designed by Michelangelo.</p>`,
      faqs: [
        { question: "What is a tondo?", answer: "A <strong>circular painting</strong>, popular in Renaissance Florence for domestic devotional images. 'Tondo' means 'round' in Italian." },
        { question: "Is this Michelangelo's only painting?", answer: "It's his only surviving <strong>finished panel painting</strong>. The Sistine Chapel ceiling is fresco, a different technique." },
        { question: "Who are the nude figures in the background?", answer: "They represent the <strong>pagan world</strong> before Christ's birth, or possibly Old Testament figures awaiting salvation." },
        { question: "Where can I see the Doni Tondo?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>, displayed in <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo's</strong></a> original frame." }
      ]
    },

    // === RAPHAEL ===
    {
      slug: 'madonna-goldfinch-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted the Madonna of the Goldfinch in 1506 as a wedding gift for his friend Lorenzo Nasi. The Virgin Mary watches as the infant John the Baptist offers a goldfinch to the Christ child. The bird symbolizes Christ's future Passion, as legend held that goldfinches got their red markings from pulling thorns from Christ's crown.</p>
<p>A 1547 earthquake destroyed the Nasi house, shattering this panel into 17 pieces. It was painstakingly reassembled, though the damage remained visible for centuries. Recent restoration has recovered much of Raphael's original <strong>luminous color</strong> and soft modeling.</p>
<p>The pyramidal composition shows Raphael's study of <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a>, while the Tuscan landscape behind the figures recalls his Umbrian training. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this as one of Raphael's finest Florentine Madonnas.</p>`,
      faqs: [
        { question: "What does the goldfinch symbolize?", answer: "The <strong>Passion of Christ</strong>. Legend said goldfinches got red faces from Christ's blood while pulling thorns from his crown." },
        { question: "Was this painting damaged?", answer: "Yes, an <strong>earthquake in 1547</strong> shattered it into 17 pieces. It was reassembled and recently restored." },
        { question: "Where can I see the Madonna of the Goldfinch?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> painted it during his Florentine years." }
      ]
    },
    {
      slug: 'portrait-leo-x-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this portrait of Pope Leo X with two cardinals in 1518-1519. The pope examines an illuminated manuscript with a magnifying glass, his fleshy features rendered with unflinching realism. Cardinals Giulio de' Medici (future Pope Clement VII) and Luigi de' Rossi flank him.</p>
<p>The painting showcases <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>sumptuous reds</strong></a> in the papal garments, velvet textures, and the gleam of gold and brass. Raphael's technical skill captures every surface: the pope's soft hands, the manuscript's gilded pages, the silver bell on the table. Yet the pontiff's expression remains enigmatic.</p>
<p>Leo X was a Medici, and this painting returned to Florence with his family. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it as one of history's greatest papal portraits.</p>`,
      faqs: [
        { question: "Who was Pope Leo X?", answer: "<strong>Giovanni de' Medici</strong>, son of Lorenzo the Magnificent, pope from 1513-1521. He was a lavish patron of the arts." },
        { question: "Who are the other figures?", answer: "Cardinals <strong>Giulio de' Medici</strong> (later Pope Clement VII) and Luigi de' Rossi, both Leo's cousins." },
        { question: "Where can I see this portrait?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> painted it near the end of his life." }
      ]
    },
    {
      slug: 'self-portrait-raphael-uffizi',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this self-portrait around 1506, at about age 23. He presents himself as a refined young man in dark clothing, his face turned in a three-quarter view, his expression gentle and somewhat melancholy. The plain dark background focuses attention entirely on the sitter.</p>
<p>Raphael shows himself as <strong>courtly and intellectual</strong> rather than as a working artist. His clothing, while simple, is of fine quality. The soft features and sensitive gaze became the standard image of Raphael, reproduced in countless engravings and establishing his reputation as the artist of grace and harmony.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> acquired this painting for its collection of artist self-portraits. It shows Raphael at the start of his Florentine period, before his move to Rome.</p>`,
      faqs: [
        { question: "How old was Raphael here?", answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> was about <strong>23 years old</strong>, recently arrived in Florence and studying Leonardo and Michelangelo." },
        { question: "Why is the background so plain?", answer: "The <strong>dark neutral background</strong> was typical for portraits, keeping focus on the subject's face and expression." },
        { question: "Where can I see this self-portrait?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It measures 47.5 × 33 cm." }
      ]
    },

    // === TITIAN ===
    {
      slug: 'venus-of-urbino-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted the Venus of Urbino in 1538 for Guidobaldo II della Rovere, Duke of Urbino. A nude woman reclines on a bed, looking directly at the viewer, one hand modestly covering her sex. In the background, servants search a cassone (marriage chest), and a small dog sleeps at her feet.</p>
<p>Unlike classical Venuses, this woman occupies a <strong>contemporary domestic interior</strong>. The rumpled sheets, the pet dog, the servants going about their work all place her in a real bedroom. Her confident gaze and flushed skin suggest not divine beauty but human desire. Mark Twain called it "the foulest, the vilest, the obscenest picture the world possesses."</p>
<p>The painting influenced Manet's scandalous Olympia 300 years later. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it as one of the most famous nudes in art history.</p>`,
      faqs: [
        { question: "Is this really Venus?", answer: "Probably not. Unlike mythological nudes, she's in a <strong>contemporary bedroom</strong>. She may be a courtesan or idealized bride." },
        { question: "What does the dog symbolize?", answer: "The sleeping dog represents <strong>fidelity</strong>, appropriate if the painting celebrated a marriage or represented wifely virtue." },
        { question: "Where can I see the Venus of Urbino?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> painted it for the Duke of Urbino." },
        { question: "How big is this painting?", answer: "It measures <strong>119 × 165 cm</strong> (46.9 × 65 inches), life-size scale that confronts viewers directly." }
      ]
    },
    {
      slug: 'flora-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted Flora around 1515, depicting either the Roman goddess of spring or an idealized courtesan. She holds flowers in one hand while the other gathers her loosened shift, a <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> silk that slips from her shoulder. Her golden hair cascades in loose waves.</p>
<p>The identity remains ambiguous. <strong>Flora the goddess</strong> traditionally held flowers, but Venetian courtesans also adopted this symbolism. The intimate address and rumpled clothing suggest something more personal than mythology. Whoever she is, she embodies the Venetian ideal of blonde, soft, sensual beauty.</p>
<p>The painting has been widely copied and adapted. Rembrandt's wife Saskia posed as Flora in homage to this image. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it as a quintessential Venetian beauty.</p>`,
      faqs: [
        { question: "Who is Flora?", answer: "Either the <strong>Roman goddess of flowers</strong> or an idealized Venetian woman. <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> deliberately kept her identity ambiguous." },
        { question: "Why is she holding flowers?", answer: "<strong>Flowers symbolize spring, fertility, and beauty</strong>. Both the goddess Flora and Venetian brides were associated with floral imagery." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It measures 79 × 63 cm." }
      ]
    },

    // === CARAVAGGIO ===
    {
      slug: 'medusa-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted Medusa around 1598 on a ceremonial shield for Cardinal Francesco Maria Del Monte. The Gorgon's severed head screams in the moment of death, snakes writhing, blood spurting from the neck. The round format and convex surface create the illusion of a three-dimensional head.</p>
<p>According to myth, anyone who looked at <strong>Medusa turned to stone</strong>. Perseus defeated her by watching her reflection in his polished shield. Caravaggio painted his Medusa on an actual shield, collapsing the myth into reality. Some scholars believe he used his own face as the model.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this unusual work, which is painted on canvas stretched over a wooden shield. The dramatic lighting and horrified expression showcase Caravaggio's theatrical instincts.</p>`,
      faqs: [
        { question: "What is Medusa?", answer: "A <strong>Gorgon from Greek mythology</strong> whose gaze turned viewers to stone. Perseus killed her by using a mirrored shield to avoid her eyes." },
        { question: "Is this really a shield?", answer: "Yes, <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted on canvas stretched over a <strong>ceremonial wooden shield</strong>, 60 × 55 cm in diameter." },
        { question: "Did Caravaggio use himself as a model?", answer: "Possibly. Some scholars see <strong>self-portrait elements</strong> in the screaming face, a characteristic Caravaggio technique." },
        { question: "Where can I see Medusa?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." }
      ]
    },
    {
      slug: 'bacchus-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted Bacchus around 1598, showing the god of wine as a young Roman street boy. He wears vine leaves in his hair and drapes a white sheet like a toga, offering a glass of wine to the viewer. A basket of fruit, some overripe and rotting, sits on the table before him.</p>
<p>The <strong>earthy realism</strong> shocked contemporaries expecting idealized classical gods. Bacchus's fingernails are dirty, his complexion flushed from drink, the fruit already decaying. This isn't timeless divinity but a specific moment of mortal pleasure about to fade. The direct address invites the viewer to join the drinking.</p>
<p>The painting was lost for centuries, rediscovered in a Uffizi storeroom in 1913. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> now displays it as one of Caravaggio's most seductive early works.</p>`,
      faqs: [
        { question: "Why does Bacchus look so ordinary?", answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> used <strong>real street models</strong> rather than idealized classical types. The god appears as a contemporary Roman youth." },
        { question: "Why is the fruit rotting?", answer: "The <strong>decaying fruit</strong> may symbolize the transience of pleasure and beauty, a vanitas theme popular in the period." },
        { question: "Where can I see Caravaggio's Bacchus?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It was lost for centuries before rediscovery in 1913." }
      ]
    },
    {
      slug: 'sacrifice-isaac-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted the Sacrifice of Isaac around 1603. Abraham prepares to kill his son Isaac as proof of his obedience to God, but an angel arrives to stop the sacrifice. The angel points to a ram that will serve as substitute offering. Isaac's face contorts in terror as the knife presses against his throat.</p>
<p>Caravaggio captured the <strong>psychological horror</strong> of the moment. Abraham's face shows grim determination, Isaac's raw animal fear. The dramatic lighting isolates the figures against darkness. This is not a pious lesson but a traumatic event, rendered with visceral intensity.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this painting as one of Caravaggio's most powerful religious works, demonstrating how he transformed devotional subjects into psychological drama.</p>`,
      faqs: [
        { question: "What is the story of the Sacrifice of Isaac?", answer: "God commanded <strong>Abraham to sacrifice his son</strong> as a test of faith, then sent an angel to stop him at the last moment." },
        { question: "Why does Isaac look so terrified?", answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> showed <strong>genuine human fear</strong> rather than pious acceptance. The knife presses against Isaac's throat." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 104 × 135 cm." }
      ]
    },

    // === PIERO DELLA FRANCESCA ===
    {
      slug: 'portraits-montefeltro-sforza-piero',
      description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted these portraits of Federico da Montefeltro and his wife Battista Sforza around 1472. The Duke and Duchess of Urbino face each other in strict profile against panoramic landscapes, their features rendered with geometric precision. Federico's famous broken nose and scarred cheek, from a jousting accident, appear without flattery.</p>
<p>The <strong>profile format</strong> recalls ancient Roman coins and medals, lending classical dignity to these Renaissance rulers. Behind them, the Umbrian landscape stretches to distant hills, emphasizing their dominion. The reverse panels show allegorical triumphs, with the couple seated on chariots surrounded by virtues.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays both portraits facing each other, reuniting the husband and wife across centuries.</p>`,
      faqs: [
        { question: "Who were the Duke and Duchess?", answer: "<strong>Federico da Montefeltro</strong>, lord of Urbino and famous condottiere, and <strong>Battista Sforza</strong>, daughter of the Duke of Milan." },
        { question: "Why are they shown in profile?", answer: "The <strong>profile format</strong> imitated Roman coins and medals, conveying authority and permanence. Federico's damaged right side also appears less prominently." },
        { question: "Where can I see these portraits?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>, displayed facing each other as originally intended." }
      ]
    },

    // === GENTILE DA FABRIANO ===
    {
      slug: 'adoration-magi-gentile',
      description: `<p><a href="/apps/masterpieces/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> painted the Adoration of the Magi in 1423 for the wealthy Florentine Palla Strozzi. This altarpiece represents the pinnacle of <strong>International Gothic style</strong>, with gold leaf, elaborate costumes, exotic animals, and intricate decorative patterns filling every surface.</p>
<p>The three Magi arrive with their retinue of horses, camels, monkeys, and leopards. <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Gold dominates</strong></a> the composition: gilded halos, gold-brocade robes, a golden sky. The procession winds from the upper arches down to the humble stable where the Christ child sits. The predella panels show the journey to Bethlehem, the Nativity, and the Flight into Egypt.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this altarpiece in its original elaborate frame. It represents the final flowering of medieval luxury before Renaissance naturalism transformed Florentine art.</p>`,
      faqs: [
        { question: "What is the International Gothic style?", answer: "A <strong>late medieval style</strong> emphasizing decorative elegance, rich colors, and courtly refinement over the naturalism emerging in the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." },
        { question: "Why is there so much gold?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile</strong></a> used <strong>gold leaf extensively</strong> to represent divine light and the wealth of the Magi. The patron Palla Strozzi was Florence's richest man." },
        { question: "Where can I see this altarpiece?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 303 × 282 cm in its original frame." }
      ]
    },

    // === EARLY MASTERS ===
    {
      slug: 'ognissanti-madonna-giotto',
      description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto</strong></a> painted the Ognissanti Madonna around 1310 for the Humiliati church of Ognissanti in Florence. The Virgin sits enthroned with the Christ child, surrounded by angels and saints. Unlike the flat, formulaic Madonnas of Byzantine tradition, Giotto's figures possess <strong>weight and three-dimensional presence</strong>.</p>
<p>The throne recedes into space, the angels stand at different depths, and the Virgin's body beneath her robes suggests real anatomy. Giotto pioneered these spatial innovations that would develop into <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> perspective. His faces show individualized expressions rather than standardized types.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this painting alongside the similar Maestà panels by Cimabue and Duccio, allowing direct comparison of medieval and proto-Renaissance approaches.</p>`,
      faqs: [
        { question: "Why is Giotto important?", answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> revolutionized painting by creating <strong>convincing three-dimensional space</strong> and emotional expression, laying foundations for the Renaissance." },
        { question: "What was the Ognissanti?", answer: "The <strong>Church of All Saints</strong> in Florence, run by the Humiliati order. This Madonna served as its main altarpiece." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>, displayed with other early Italian masterpieces." }
      ]
    },
    {
      slug: 'santa-trinita-maesta-cimabue',
      description: `<p><a href="/apps/masterpieces/artist/cimabue"><strong>Cimabue</strong></a> painted the Santa Trinita Maestà around 1280-1290 for the main altar of Santa Trinita church in Florence. The Virgin and Child sit enthroned in majesty (maestà), surrounded by eight angels. The elaborate throne and <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold background</strong></a> follow Byzantine conventions, but Cimabue introduces subtle modeling and spatial depth.</p>
<p>The prophets in the arches below the throne anticipate Christ's coming. Cimabue still uses the <strong>gold-ground Byzantine style</strong>, but his figures begin to emerge from flatness toward volume. His student Giotto would push these innovations much further.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this monumental altarpiece (over 12 feet tall) alongside Giotto's and Duccio's Maestà paintings, forming a remarkable sequence of Italian art's evolution.</p>`,
      faqs: [
        { question: "What does Maestà mean?", answer: "<strong>'Majesty'</strong> in Italian. It refers to images of the Virgin and Child enthroned in divine glory, surrounded by angels and saints." },
        { question: "Who was Cimabue?", answer: "<a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a> was a Florentine painter who began moving Italian art away from <strong>rigid Byzantine formulas</strong>. Giotto was reportedly his student." },
        { question: "How big is this altarpiece?", answer: "It measures <strong>385 × 223 cm</strong> (12.6 × 7.3 feet), a monumental scale at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi</strong></a>." }
      ]
    },
    {
      slug: 'rucellai-madonna-duccio',
      description: `<p><a href="/apps/masterpieces/artist/duccio-di-buoninsegna"><strong>Duccio di Buoninsegna</strong></a> painted the Rucellai Madonna in 1285 for the Compagnia dei Laudesi in the Santa Maria Novella church. The enormous panel shows the Virgin and Child enthroned, surrounded by six angels. The elaborate throne and gold background follow Byzantine tradition, but Duccio's delicate line and subtle modeling anticipate the Sienese school's elegance.</p>
<p>The painting takes its name from the <strong>Rucellai Chapel</strong> where it later hung. For centuries it was attributed to Cimabue, but documents confirm Duccio as the artist. The angels kneel gracefully, their positions creating a sense of depth and gentle movement unusual for the period.</p>
<p>At nearly 15 feet tall, this is one of the largest panel paintings ever made. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it as a masterpiece of late medieval Italian art.</p>`,
      faqs: [
        { question: "Why is it called the Rucellai Madonna?", answer: "It later hung in the <strong>Rucellai Chapel</strong> of Santa Maria Novella. The name stuck even after the artist was correctly identified as <a href=\"/apps/masterpieces/artist/duccio-di-buoninsegna\"><strong>Duccio</strong></a>." },
        { question: "How big is this painting?", answer: "An enormous <strong>450 × 290 cm</strong> (14.8 × 9.5 feet), one of the largest medieval panel paintings in existence." },
        { question: "Where can I see the Rucellai Madonna?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>, displayed with other early Italian masterpieces." }
      ]
    },

    // === PAOLO UCCELLO ===
    {
      slug: 'battle-san-romano-uccello',
      description: `<p><a href="/apps/masterpieces/artist/paolo-uccello"><strong>Paolo Uccello</strong></a> painted the Battle of San Romano around 1438-1440 for the Medici palace. This panel shows Florentine commander Niccolò da Tolentino leading the charge against Sienese forces. Lances thrust in geometric patterns, horses rear in frozen motion, and fallen soldiers lie in perfect perspective foreshortening.</p>
<p>Uccello was obsessed with <strong>mathematical perspective</strong>, and this painting demonstrates his experiments. The broken lances on the ground create orthogonal lines pointing toward the vanishing point. The armor gleams with silver and gold. The scene feels more like a magnificent tournament than bloody warfare.</p>
<p>Three panels originally depicted this battle; they're now divided between the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a>, the Louvre, and London's National Gallery.</p>`,
      faqs: [
        { question: "What battle does this show?", answer: "The <strong>Battle of San Romano</strong> (1432), a Florentine victory over Siena. <a href=\"/apps/masterpieces/artist/paolo-uccello\"><strong>Uccello</strong></a> painted it several years after the event." },
        { question: "Why do the lances look so geometric?", answer: "Uccello used <strong>broken lances as perspective lines</strong>, demonstrating his obsession with geometric space and foreshortening." },
        { question: "Where are the three panels now?", answer: "Divided between the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi</strong></a>, the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, and London's National Gallery." }
      ]
    },

    // === FILIPPO LIPPI ===
    {
      slug: 'madonna-child-angels-lippi',
      description: `<p><a href="/apps/masterpieces/artist/filippo-lippi"><strong>Filippo Lippi</strong></a> painted Madonna with Child and Two Angels around 1465. The Virgin sits in profile against a window, the Christ child supported by two playful angels. One angel turns to smile at the viewer while holding the chubby infant. Through the window, a detailed landscape extends to distant mountains.</p>
<p>Lippi broke with conventional Madonna imagery. His Virgin is <strong>young, pretty, and somewhat melancholy</strong>, possibly modeled on his mistress Lucrezia Buti (a nun he famously abducted). The angels are mischievous rather than solemn. The window framing creates one of the first examples of a "portrait" Madonna.</p>
<p>This intimate painting deeply influenced <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a>, who trained with Lippi. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays it as a masterpiece of mid-15th-century Florentine painting.</p>`,
      faqs: [
        { question: "Who was the model for the Madonna?", answer: "Possibly <strong>Lucrezia Buti</strong>, a nun whom <a href=\"/apps/masterpieces/artist/filippo-lippi\"><strong>Lippi</strong></a> (himself a friar) abducted and lived with. They had a son, the painter Filippino Lippi." },
        { question: "Why is the angel smiling at us?", answer: "The <strong>playful angel</strong> breaks the fourth wall, creating intimacy. This casual approach to sacred subjects was innovative." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 92 × 63 cm." }
      ]
    },

    // === POLLAIUOLO ===
    {
      slug: 'portrait-woman-pollaiuolo',
      description: `<p><a href="/apps/masterpieces/artist/antonio-del-pollaiuolo"><strong>Antonio del Pollaiuolo</strong></a> painted this Portrait of a Woman around 1475, creating one of the finest profile portraits of the Florentine <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. The young woman wears an elaborate hairstyle with pearls and ribbons, her brocade dress featuring a prominent sleeve. Her profile stands out against a brilliant <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue background</strong></a>.</p>
<p>Profile portraits were fashionable in 15th-century Florence, recalling <strong>classical medallions</strong>. Pollaiuolo rendered every detail with goldsmith's precision: the individual pearls, the fabric patterns, the soft contour of her face. Yet she remains anonymous, her identity lost to history.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this small painting as an example of Florentine portraiture at its most refined.</p>`,
      faqs: [
        { question: "Who is this woman?", answer: "Her identity is <strong>unknown</strong>. She was likely a member of a wealthy Florentine family, judging by her elaborate dress and jewels." },
        { question: "Why a profile view?", answer: "<strong>Profile portraits</strong> were fashionable in 15th-century Florence, imitating classical coins and emphasizing noble bearing." },
        { question: "Where can I see this portrait?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 55 × 34 cm." }
      ]
    },

    // === VERROCCHIO ===
    {
      slug: 'baptism-christ-verrocchio',
      description: `<p><a href="/apps/masterpieces/artist/andrea-del-verrocchio"><strong>Andrea del Verrocchio</strong></a> painted the Baptism of Christ around 1472-1475 for the monastery of San Salvi. John the Baptist pours water over Christ's head while two angels kneel at left. The young <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>, Verrocchio's apprentice, reportedly painted the angel on the far left and parts of the landscape.</p>
<p>The <strong>difference in technique</strong> is visible. Leonardo's angel has softer modeling and a more complex expression than his companion. The atmospheric landscape behind him shows Leonardo's characteristic sfumato. According to Vasari, Verrocchio was so impressed by his student's work that he vowed never to paint again.</p>
<p>The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> displays this painting as a document of Leonardo's emergence from his master's workshop.</p>`,
      faqs: [
        { question: "Did Leonardo really paint part of this?", answer: "Yes, experts agree <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted the <strong>left angel and portions of landscape</strong>. His technique already surpassed his master's." },
        { question: "Who was Verrocchio?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-verrocchio\"><strong>Verrocchio</strong></a> was a leading Florentine artist and goldsmith who trained <strong>Leonardo, Botticelli, and Perugino</strong>." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 177 × 151 cm." }
      ]
    },

    // === DÜRER ===
    {
      slug: 'adoration-magi-durer',
      description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted the Adoration of the Magi in 1504 for Frederick the Wise, Elector of Saxony. The three kings present gifts to the Christ child in a ruined classical setting, their elaborate robes contrasting with the humble stable. Dürer signed the work prominently on a stone block.</p>
<p>This painting shows Dürer's absorption of <strong>Italian Renaissance principles</strong> after his travels south. The architectural perspective, the monumentality of figures, and the rich color harmonies all reflect Italian influence. Yet the meticulous detail in faces, fabrics, and surfaces remains distinctively Northern.</p>
<p>Frederick the Wise originally displayed this altarpiece in his castle church at Wittenberg. The <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi</strong></a> acquired it in 1793.</p>`,
      faqs: [
        { question: "Who commissioned this painting?", answer: "<strong>Frederick the Wise</strong>, Elector of Saxony, who later protected Martin Luther. He was <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer's</strong></a> most important patron." },
        { question: "What Italian influence shows here?", answer: "The <strong>architectural perspective and monumental figures</strong> reflect Dürer's Italian travels, while the precise detail remains Northern." },
        { question: "Where can I see this painting?", answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a>. It measures 99 × 113.5 cm." }
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
