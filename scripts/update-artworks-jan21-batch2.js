const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'rembrandt-jesus-preaching-called-the-la-tombe',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created this intimate etching around 1652, one of his most admired prints. Christ stands at center, hands raised, addressing a crowd that includes the sick, curious onlookers, and skeptics. The composition draws the eye toward Jesus through careful gradations of light and shadow. In the foreground, a small <strong>child doodles on the ground</strong> with its finger, a charming detail amid the sacred scene.</p>
<p>The etching's nickname derives from Nicolaes de La Tombe, likely the patron who commissioned it. Despite measuring just 16 x 21 cm, Rembrandt packed extraordinary emotional range into the faces. The "black sleeve" on one foreground figure is a marker that distinguishes early impressions from later ones. Multiple impressions survive in major collections worldwide.</p>`,
    faqs: [
      { question: "Why is this etching called La Tombe?", answer: `The name comes from <strong>Nicolaes de La Tombe</strong>, probably the patron who commissioned the print. Early cataloguers misunderstood the reference, creating the unusual title.` },
      { question: "Where can I see this Rembrandt etching?", answer: `Impressions exist at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the Morgan Library in New York, and the Art Gallery of NSW in Sydney. Quality varies between early and late pulls.` },
      { question: "How big is Jesus Preaching?", answer: `The etching measures just 16 x 21 cm (6 x 8 inches), making it remarkably small for its emotional complexity. <a href="/artist/rembrandt"><strong>Rembrandt</strong></a> packed dozens of expressive faces into this intimate scale.` },
      { question: "What makes this print special?", answer: `<a href="/artist/rembrandt"><strong>Rembrandt</strong></a> demonstrates his mastery of etching, using parallel lines and drypoint to create subtle tonal gradations. Early impressions show a "black sleeve" that wears away in later prints.` }
    ]
  },
  {
    slug: 'the-ball-vallotton',
    description: `<p><a href="/artist/felix-vallotton"><strong>Félix Vallotton</strong></a> painted this striking scene in 1899, capturing a child chasing a red ball across a sun-drenched park. The bird's-eye view flattens the space, pushing the small running figure against broad stretches of <strong>ochre ground and deep green shadow</strong>. Two distant women in blue and white watch from the background, their tiny scale confusing the sense of depth.</p>
<p>Vallotton joined <a href="/movement/les-nabis"><strong>Les Nabis</strong></a> in 1892, though his cool, detached style earned him the nickname "the Foreign Nabi." This painting exemplifies his approach: flat color areas, hard edges, and simplified forms borrowed from Japanese prints. The <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> acquired it as a bequest from Carle Dreyfus in 1953.</p>`,
    faqs: [
      { question: "Where is Vallotton's The Ball displayed?", answer: `The painting hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. It came to the museum through a bequest from collector Carle Dreyfus in 1953.` },
      { question: "What art movement is The Ball associated with?", answer: `<a href="/artist/felix-vallotton"><strong>Vallotton</strong></a> painted this while a member of <a href="/movement/les-nabis"><strong>Les Nabis</strong></a>. His detached, almost cool style earned him the nickname "the Foreign Nabi" among the group.` },
      { question: "How big is The Ball?", answer: `The painting measures 48 x 61 cm (19 x 24 inches), executed in oil and gouache on cardboard. The intimate scale suits its quiet, everyday subject.` },
      { question: "What is depicted in The Ball?", answer: `A child in white chases a <strong>red ball</strong> across a park. Two women stand distant in the background. The bird's-eye perspective and flat colors create an almost dreamlike atmosphere.` }
    ]
  },
  {
    slug: 'thomas-gainsborough-landscape-with-sandpit',
    description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this early landscape around 1746-1747, when he was barely twenty. The scene shows a <strong>rustic Suffolk countryside</strong> with figures resting near a sandpit, donkeys grazing, and a church spire visible through the trees. Dutch landscape painters like Ruisdael clearly influenced the young artist's approach to naturalistic scenery.</p>
<p>Gainsborough would later become famous for elegant portraits of British aristocracy, but he always preferred painting landscapes. "I'm sick of portraits," he once wrote. These early Suffolk scenes capture his genuine love for the English countryside before commercial success pushed him toward lucrative portrait commissions. The painting now hangs at the <a href="/museum/national-gallery-of-ireland"><strong>National Gallery of Ireland</strong></a> in Dublin.</p>`,
    faqs: [
      { question: "Where can I see Landscape with Sandpit?", answer: `The painting is displayed at the <a href="/museum/national-gallery-of-ireland"><strong>National Gallery of Ireland</strong></a> in Dublin. The museum holds several significant British paintings from this period.` },
      { question: "When did Gainsborough paint this?", answer: `<a href="/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> created this work around 1746-1747, when he was barely twenty years old. It belongs to his early Suffolk period before he focused primarily on portraits.` },
      { question: "What influenced Gainsborough's early landscapes?", answer: `Dutch 17th-century masters like <strong>Jacob van Ruisdael</strong> clearly influenced his naturalistic approach. Gainsborough studied their handling of light, trees, and rural atmospheres.` },
      { question: "Did Gainsborough prefer landscapes to portraits?", answer: `Yes, he famously wrote "I'm sick of portraits" and preferred <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>. Commercial necessity pushed him toward portrait painting, but he painted landscapes throughout his career.` }
    ]
  },
  {
    slug: 'gustave-moreau-horseman',
    description: `<p><a href="/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this dramatic equestrian scene around 1852-1854, early in his career when <a href="/movement/romanticism"><strong>Romanticism</strong></a> still dominated French art. A rider on a powerful horse rears against a turbulent sky, the composition clearly inspired by Eugène Delacroix. The work captures the energy and emotional intensity Moreau admired in his predecessor.</p>
<p>Moreau would later become the leading <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter, known for mythological subjects and jewel-like surfaces. But this early work shows his Romantic roots. Pierre-Joseph Dedreux-Dorcy encouraged the young painter to study <strong>horses</strong>, and Moreau produced several equestrian works during this period. The painting now hangs at the <a href="/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is Moreau's Horseman displayed?", answer: `The painting hangs at the <a href="/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris. The museum occupies Moreau's former home and studio, preserving thousands of his works.` },
      { question: "What art movement does Horseman represent?", answer: `This early work belongs to <a href="/movement/romanticism"><strong>Romanticism</strong></a>, showing Delacroix's influence. <a href="/artist/gustave-moreau"><strong>Moreau</strong></a> would later pioneer <a href="/movement/symbolism"><strong>Symbolism</strong></a>, becoming known for mystical, jewel-encrusted canvases.` },
      { question: "When did Moreau paint this?", answer: `Moreau created this around 1852-1854, making it one of his earliest known works. He was in his mid-twenties and still absorbing <strong>Romantic influences</strong> before developing his distinctive Symbolist style.` }
    ]
  },
  {
    slug: 'albert-bierstadt-storm-among-the-alps',
    description: `<p><a href="/artist/albert-bierstadt"><strong>Albert Bierstadt</strong></a> painted this dramatic Alpine scene around 1856, before his famous expeditions to the American West. A <strong>towering mountain peak</strong> catches warm sunset light while storm clouds gather in the valley below. The contrast between illuminated summit and shadowed depths creates the theatrical atmosphere Bierstadt would perfect in later works.</p>
<p>Bierstadt traveled to Europe in 1853 to study with artists in Düsseldorf. This painting reflects that training, combining detailed observation with Romantic drama. Within years, he would apply these techniques to the Rocky Mountains and Yosemite, becoming America's most celebrated <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape painter</strong></a>. The work remains in a private collection.</p>`,
    faqs: [
      { question: "When did Bierstadt paint Storm Among the Alps?", answer: `<a href="/artist/albert-bierstadt"><strong>Bierstadt</strong></a> created this around 1856, during or shortly after his European training. It predates his famous American <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain paintings</strong></a> by several years.` },
      { question: "Where can I see this painting?", answer: `Storm Among the Alps is currently in a <strong>private collection</strong>. Bierstadt's major American landscapes are at the Metropolitan Museum, Brooklyn Museum, and National Gallery of Art.` },
      { question: "What art movement is this painting part of?", answer: `Bierstadt was a leading figure of the <strong>Hudson River School</strong>, American Romantic landscape painters who celebrated nature's grandeur. This Alpine scene shows his European training before focusing on American subjects.` }
    ]
  },
  {
    slug: 'rembrandt-healing-of-peters-mother-in-law',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created this biblical scene around 1659, depicting Christ healing Simon Peter's mother-in-law from fever. Jesus stands at the bedside, one hand raised in blessing, while the sick woman begins to stir. <strong>Warm candlelight</strong> illuminates the intimate domestic interior, casting deep shadows that envelope the surrounding figures.</p>
<p>The subject comes from the Gospels of Matthew, Mark, and Luke. Rembrandt approached the miracle not as spectacle but as a quiet, personal moment of compassion. His signature <a href="/movement/baroque"><strong>chiaroscuro</strong></a> gives the scene emotional depth, drawing the eye toward Christ and the recovering woman. The work demonstrates Rembrandt's lifelong engagement with biblical narratives.</p>`,
    faqs: [
      { question: "What biblical story does this depict?", answer: `The scene shows <strong>Jesus healing Peter's mother-in-law</strong>, described in Matthew 8, Mark 1, and Luke 4. Christ cured her fever, and she immediately rose to serve them.` },
      { question: "When did Rembrandt create this work?", answer: `<a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created this around 1659, during his mature period. He produced many biblical works throughout his career, drawn to subjects of <strong>compassion and divine healing</strong>.` },
      { question: "What technique defines this painting?", answer: `<a href="/artist/rembrandt"><strong>Rembrandt's</strong></a> signature <a href="/movement/baroque"><strong>chiaroscuro</strong></a> creates dramatic contrast between the illuminated figures and shadowed interior, focusing attention on the miracle's emotional core.` }
    ]
  },
  {
    slug: 'claude-monet-the-magpie',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this snow scene during the winter of 1868-1869 near Étretat in Normandy. A solitary magpie perches on a wooden gate, surrounded by <strong>brilliant white snow</strong> and long blue shadows. The painting revolutionized how artists depicted snow, replacing the dull grays of academic painting with vibrant blues, violets, and yellows.</p>
<p>The Paris Salon rejected this painting in 1869, finding it too sketchy and unfinished. A century later, the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> acquired it, and it became one of their most beloved works. Monet painted approximately 140 snow scenes throughout his career, but The Magpie remains his finest, capturing the first major example of <a href="/movement/impressionism"><strong>Impressionist</strong></a> colored shadows.</p>`,
    faqs: [
      { question: "Where can I see The Magpie?", answer: `The painting hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, acquired in 1984. It's now one of the museum's most popular <a href="/movement/impressionism"><strong>Impressionist</strong></a> works.` },
      { question: "Why was The Magpie rejected by the Salon?", answer: `The 1869 Salon committee found it too pale, too fleeting, and too much like an unfinished sketch. They wanted glossy, smooth academic finishes, not <a href="/artist/claude-monet"><strong>Monet's</strong></a> visible brushwork.` },
      { question: "What makes The Magpie historically important?", answer: `It features one of the earliest examples of <strong>colored shadows</strong> in painting, showing blue-violet shadows on white snow. This technique became central to <a href="/movement/impressionism"><strong>Impressionism</strong></a>.` },
      { question: "How big is The Magpie?", answer: `The canvas measures 89 x 130 cm (35 x 51 inches). <a href="/artist/claude-monet"><strong>Monet</strong></a> painted it during a stay in Normandy, where his patron Louis Gaudibert provided lodging for his family.` }
    ]
  },
  {
    slug: 'adriaen-brouwer-scene-at-the-inn',
    description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this lively tavern scene around 1625, when he was barely twenty. Peasants gather in a dimly lit inn, drinking, smoking, and engaged in rowdy conversation. Brouwer captured their <strong>unvarnished expressions</strong> with remarkable psychological insight, presenting figures neither idealized nor mocked.</p>
<p>Brouwer worked in both Flanders and the Dutch Republic, and both Rubens and Rembrandt collected his paintings. His tavern scenes influenced countless artists, from David Teniers to Adriaen van Ostade. Despite dying at just 32, he produced an influential body of small-scale <a href="/movement/baroque"><strong>Baroque</strong></a> genre paintings. This work hangs at the <a href="/museum/museum-boijmans-van-beuningen"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam.</p>`,
    faqs: [
      { question: "Where is Scene at the Inn displayed?", answer: `The painting hangs at the <a href="/museum/museum-boijmans-van-beuningen"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, Netherlands. The museum houses significant Dutch and Flemish paintings.` },
      { question: "Who collected Brouwer's paintings?", answer: `Both <strong>Rubens and Rembrandt</strong> collected <a href="/artist/adriaen-brouwer"><strong>Brouwer's</strong></a> works. Rubens owned seventeen of his paintings, while Rembrandt owned at least eight, showing how highly his contemporaries valued his art.` },
      { question: "What subjects did Brouwer paint?", answer: `<a href="/artist/adriaen-brouwer"><strong>Brouwer</strong></a> specialized in <strong>peasant tavern scenes</strong>, depicting drinking, smoking, and gambling with unvarnished realism. His small-scale genre paintings influenced generations of Dutch and Flemish artists.` }
    ]
  },
  {
    slug: 'thomas-gainsborough-portrait-of-a-gentleman',
    description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this refined portrait, depicting an elegantly dressed gentleman against a neutral background. The subject wears fashionable attire of the period, his <strong>confident pose</strong> suggesting social standing and self-assurance. Gainsborough's fluid brushwork captures the texture of fabric and the sitter's intelligent expression.</p>
<p>Gainsborough became one of the most sought-after portrait painters in Georgian England, rivaling Joshua Reynolds. While he preferred landscapes, portrait commissions paid well and brought social connections. His ability to capture both likeness and character made him a favorite of the aristocracy. This painting demonstrates his mastery of the <a href="/movement/rococo"><strong>Rococo</strong></a> portrait tradition.</p>`,
    faqs: [
      { question: "What was Gainsborough known for?", answer: `<a href="/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> was one of Georgian England's leading portrait painters, rivaling Joshua Reynolds. He painted aristocrats, royalty, and wealthy merchants with elegant <a href="/movement/rococo"><strong>Rococo</strong></a> style.` },
      { question: "Did Gainsborough enjoy painting portraits?", answer: `Not particularly. He famously preferred <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> and once wrote "I'm sick of portraits." But portrait commissions paid well and brought social connections he couldn't refuse.` },
      { question: "What style is this portrait?", answer: `The painting shows <a href="/movement/rococo"><strong>Rococo</strong></a> elegance with fluid brushwork and refined color. <a href="/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> captured both physical likeness and the sitter's personality through pose and expression.` }
    ]
  },
  {
    slug: 'tintoretto-joseph-and-potiphar39s-wife',
    description: `<p><a href="/artist/tintoretto"><strong>Tintoretto</strong></a> painted this sensuous biblical scene around 1555 as part of a decorative cycle for a Venetian patron. Potiphar's wife, nude except for her jewelry, grasps at the fleeing Joseph. Her body stretches across the horizontal canvas in a sinuous curve, while Joseph recoils toward the door. The <strong>erotic tension</strong> is palpable despite the moral lesson.</p>
<p>Diego Velázquez purchased this painting for King Philip IV during his second trip to Venice, recognizing its quality. The unusually long format suggests ceiling decoration. Now at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, it hangs with five companion paintings showing other Old Testament subjects, united by their shared color scheme and undulating rhythms.</p>`,
    faqs: [
      { question: "Where is Joseph and Potiphar's Wife displayed?", answer: `The painting hangs at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid. Diego Velázquez purchased it for King Philip IV during his second visit to Venice.` },
      { question: "What biblical story does this depict?", answer: `From Genesis 39: <strong>Joseph refuses the advances</strong> of Potiphar's wife, who then falsely accuses him of assault. The story illustrates virtue resisting temptation.` },
      { question: "Is this part of a series?", answer: `Yes, <a href="/artist/tintoretto"><strong>Tintoretto</strong></a> painted six Old Testament scenes with similar horizontal formats and color schemes. The series includes Esther, Judith, Solomon, and the Finding of Moses.` }
    ]
  },
  {
    slug: 'titian-the-concert',
    description: `<p><a href="/artist/titian"><strong>Titian</strong></a> painted this enigmatic scene around 1510-1511, early in his career when Giorgione's influence remained strong. Three men gather around a keyboard instrument: a richly dressed musician at center, a Dominican monk touching his shoulder, and a young man with a feathered cap on the left. The <strong>interrupted moment</strong> suggests narrative but offers no clear explanation.</p>
<p>For centuries, scholars attributed this to Giorgione, and debate continues. X-ray analysis in 1976 supported Titian's authorship, though some believe Giorgione painted the leftmost figure. The <a href="/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> acquired the work in 1654, when it was still called a Giorgione. It exemplifies the poetic, ambiguous mood of early <a href="/movement/renaissance"><strong>Venetian Renaissance</strong></a> painting.</p>`,
    faqs: [
      { question: "Where can I see The Concert?", answer: `The painting hangs at the <a href="/museum/palazzo-pitti"><strong>Galleria Palatina</strong></a> in Florence's Palazzo Pitti. It entered the Medici collections in 1654, originally attributed to Giorgione.` },
      { question: "Did Titian or Giorgione paint this?", answer: `Scholars still debate. X-ray analysis in 1976 supported <a href="/artist/titian"><strong>Titian's</strong></a> authorship, though some believe Giorgione painted the leftmost figure. The ambiguity reflects how closely the young artists worked together.` },
      { question: "What is the subject of The Concert?", answer: `Three men pause during a <strong>musical gathering</strong>. The Dominican monk touches the central musician's shoulder, creating an interrupted moment whose meaning remains mysterious. Such poetic ambiguity typified early <a href="/movement/renaissance"><strong>Venetian Renaissance</strong></a> painting.` }
    ]
  },
  {
    slug: 'monarch-of-the-glen',
    description: `<p><a href="/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> completed this iconic image in 1851, depicting a magnificent red deer stag against misty Highland mountains. The twelve-point <strong>royal stag</strong> stands alert, ears forward, breath visible in the cold air. Landseer, Queen Victoria's favorite animal painter, captured both the creature's physical presence and the romantic grandeur of the Scottish Highlands.</p>
<p>The painting was originally commissioned for the Houses of Parliament but rejected when funding fell through. It became enormously popular through reproductions, appearing on everything from whisky labels to biscuit tins. The <a href="/museum/national-galleries-scotland"><strong>National Galleries of Scotland</strong></a> acquired it in 2017 after a major public fundraising campaign, securing this symbol of Scotland for the nation.</p>`,
    faqs: [
      { question: "Where is Monarch of the Glen displayed?", answer: `The painting hangs at the <a href="/museum/national-galleries-scotland"><strong>Scottish National Gallery</strong></a> in Edinburgh. Scotland acquired it in 2017 for £4 million through a public campaign.` },
      { question: "Who painted Monarch of the Glen?", answer: `<a href="/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> completed it in 1851. He was Queen Victoria's favorite animal painter and created the lions at the base of Nelson's Column in Trafalgar Square.` },
      { question: "Why is this painting so famous?", answer: `It became one of the most reproduced images in history, appearing on <strong>whisky labels, biscuit tins</strong>, and countless products. For many, it represents the romantic grandeur of the Scottish Highlands.` },
      { question: "How big is Monarch of the Glen?", answer: `The canvas measures 164 x 169 cm (65 x 67 inches), nearly square and close to life-size. The stag's commanding presence fills the frame against the misty <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain</strong></a> backdrop.` }
    ]
  },
  {
    slug: 'schokko-wide-brimmed-hat',
    description: `<p><a href="/artist/alexej-von-jawlensky"><strong>Alexej von Jawlensky</strong></a> painted this vibrant portrait in 1910, depicting a fashionable woman in a wide-brimmed hat. Bold, unmixed colors—<strong>brilliant blues, reds, and greens</strong>—define the face like a mask. The subject's cool expression contrasts with the explosive palette, creating tension between remoteness and visual intensity.</p>
<p>Jawlensky, a Russian émigré in Munich, was a leading <a href="/movement/expressionism"><strong>Expressionist</strong></a> painter associated with Der Blaue Reiter. This portrait sold at Sotheby's in 2008 for $18.6 million, setting his auction record. Dr. Clemens Weiler, Jawlensky's biographer, called it "a keypiece of Expressionism" for its synthesis of spiritual and formal innovation.</p>`,
    faqs: [
      { question: "What art movement is Schokko associated with?", answer: `<a href="/artist/alexej-von-jawlensky"><strong>Jawlensky</strong></a> painted this during his <a href="/movement/expressionism"><strong>Expressionist</strong></a> period, when he was associated with Der Blaue Reiter in Munich. Some call him "the Russian Matisse" for his bold color.` },
      { question: "How much did this painting sell for?", answer: `Schokko with Wide-Brimmed Hat sold for <strong>$18.6 million</strong> at Sotheby's London in 2008, setting Jawlensky's auction record. It more than doubled its 2003 sale price.` },
      { question: "Where is this painting now?", answer: `The painting is in a <strong>private collection</strong>. Its high auction value reflects Jawlensky's importance to early 20th-century <a href="/movement/expressionism"><strong>Expressionism</strong></a>.` }
    ]
  },
  {
    slug: 'claude-monet-the-gulf-of-antibes',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this Mediterranean view in 1888 during a stay on the French Riviera. A single maritime pine leans across the foreground, framing the distant <strong>Estérel Mountains</strong> across the Gulf of Antibes. The warm southern light differs dramatically from his familiar northern landscapes, pushing Monet to capture new atmospheric effects.</p>
<p>Monet created numerous Antibes paintings during this trip, exploring the region's brilliant <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue waters</strong></a> and golden light. He wrote to Alice Hoschedé that the colors were so intense they seemed unreal. These Mediterranean works demonstrate <a href="/movement/impressionism"><strong>Impressionism's</strong></a> adaptability to different climates and lighting conditions.</p>`,
    faqs: [
      { question: "When did Monet paint this?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> created this in 1888 during a stay in Antibes on the French Riviera. He produced numerous paintings of the region's Mediterranean light and color.` },
      { question: "What makes this painting different from Monet's other work?", answer: `The <strong>southern Mediterranean light</strong> differed dramatically from his familiar northern France. Monet wrote that the intense colors seemed almost unreal, challenging him to capture new atmospheric effects.` },
      { question: "What movement does this painting represent?", answer: `This is a mature <a href="/movement/impressionism"><strong>Impressionist</strong></a> work, demonstrating the movement's adaptability. Monet applied his techniques for capturing fleeting light to unfamiliar Mediterranean scenery.` }
    ]
  },
  {
    slug: 'rembrandt-the-sense-of-sight',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted this allegory of sight around 1624-1625, when he was still a teenager in Leiden. A woman squints while trying on a pair of spectacles offered by a vendor. Three figures crowd the small panel, their expressions capturing the <strong>moment of testing new lenses</strong>. It belongs to a series depicting the five senses.</p>
<p>These are Rembrandt's earliest known paintings, showing remarkable skill for an eighteen-year-old. Four of the five senses have been identified; only Taste remains lost. The Spectacle Seller demonstrates Rembrandt's early gift for representing human character through small, telling details. The painting is held at the <a href="/museum/museum-de-lakenhal"><strong>Museum De Lakenhal</strong></a> in Leiden.</p>`,
    faqs: [
      { question: "Where can I see The Sense of Sight?", answer: `The painting hangs at the <a href="/museum/museum-de-lakenhal"><strong>Museum De Lakenhal</strong></a> in Leiden, <a href="/artist/rembrandt"><strong>Rembrandt's</strong></a> hometown. The museum focuses on Leiden's artistic heritage.` },
      { question: "When did Rembrandt paint this?", answer: `<a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created this around 1624-1625, when he was about eighteen. These <strong>Five Senses</strong> paintings are his earliest known works.` },
      { question: "Is this part of a series?", answer: `Yes, Rembrandt painted five allegories of the senses. Four have been identified: <strong>Sight, Hearing, Touch, and Smell</strong>. The fifth, representing Taste, remains lost.` }
    ]
  },
  {
    slug: 'i-see-again-udnie',
    description: `<p><a href="/artist/francis-picabia"><strong>Francis Picabia</strong></a> created this monumental abstraction in 1914, inspired by memories of a Polish dancer named Stacia Napierkowska. He met her aboard a ship to New York; her performances were so provocative she was arrested upon arrival. Over two years, Picabia produced several paintings inspired by her, combining <strong>mechanistic and biomorphic forms</strong> in dynamic compositions.</p>
<p>The title translates as "I See Again in Memory My Dear Udnie." The large canvas measures over 8 feet tall, filling the viewer's field of vision. The <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> acquired it in 1954, recognizing it as a landmark of early <a href="/movement/cubism"><strong>abstract art</strong></a> that bridges Cubism and pure abstraction.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: `The painting hangs at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York, acquired in 1954. It's considered one of <a href="/artist/francis-picabia"><strong>Picabia's</strong></a> most important works.` },
      { question: "What inspired this painting?", answer: `<a href="/artist/francis-picabia"><strong>Picabia</strong></a> met Polish dancer <strong>Stacia Napierkowska</strong> on a ship to New York. Her provocative performances inspired several paintings over two years.` },
      { question: "How big is this painting?", answer: `The canvas measures 250 x 199 cm (8'2" x 6'6"), making it <strong>monumental in scale</strong>. Its size immerses viewers in the abstract composition of biomorphic and mechanical forms.` }
    ]
  },
  {
    slug: 'claude-monet-rouen-cathedral-in-the-fog',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Rouen Cathedral in 1894, part of his famous series capturing the Gothic facade under different lighting conditions. <strong>Morning fog</strong> softens the stone, dissolving the architecture into atmospheric haze. The cathedral becomes less a building than a study of light diffused through mist.</p>
<p>Monet painted over thirty cathedral views during 1892-1893, then reworked them in his Giverny studio. He built up thick layers of paint like the masonry itself. When exhibited in 1895, Pissarro and Cézanne praised the series highly. This version hangs at the <a href="/museum/folkwang-museum"><strong>Folkwang Museum</strong></a> in Essen, Germany.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: `This version hangs at the <a href="/museum/folkwang-museum"><strong>Folkwang Museum</strong></a> in Essen, Germany. Other paintings from the series are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the Met, and other major museums.` },
      { question: "How many Rouen Cathedral paintings did Monet make?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> painted over <strong>thirty views</strong> of the cathedral between 1892-1894. He selected twenty for a landmark 1895 exhibition at his dealer's gallery.` },
      { question: "What was Monet trying to capture?", answer: `Monet said "the motif itself is an insignificant factor." He wanted to capture the <strong>atmosphere surrounding the building</strong>, what he called the "envelope" of light and air.` }
    ]
  },
  {
    slug: 'claude-monet-rouen-cathedral-sunlight-effect',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Rouen Cathedral in 1894, capturing the facade bathed in <strong>direct sunlight</strong>. Golden and orange tones warm the Gothic stonework, creating dramatic contrast with the deep shadows in the recessed portals. The thickly applied paint mimics the texture of carved stone.</p>
<p>Monet rented rooms across from the cathedral, moving from canvas to canvas as light changed throughout the day. This sunlit version shows his <a href="/movement/impressionism"><strong>Impressionist</strong></a> approach at its most intense: the cathedral dissolves into pure color and light. The series was a critical and commercial success, with eight paintings selling before the 1895 exhibition even opened.</p>`,
    faqs: [
      { question: "When did Monet paint the cathedral series?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> painted the views in Rouen during 1892-1893, then reworked them in his Giverny studio through 1894. He dated them all 1894.` },
      { question: "How did Monet work on this series?", answer: `He rented rooms across from the cathedral, working on <strong>multiple canvases simultaneously</strong>. As light changed, he moved from one to another, capturing different atmospheric effects.` },
      { question: "What makes this version distinctive?", answer: `This painting shows <strong>direct sunlight</strong> warming the facade with golden tones. <a href="/artist/claude-monet"><strong>Monet's</strong></a> thick, textured brushstrokes mimic the carved stone's surface.` }
    ]
  },
  {
    slug: 'claude-monet-rouen-cathedral-the-portal-morning-effect',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> captured the cathedral portal in early morning light, when cool <strong>blues and grays</strong> dominate before the sun rises higher. The Gothic tracery emerges from shadow, its details suggested rather than precisely rendered. Monet's thick impasto creates an almost sculptural surface that echoes the carved stone facade.</p>
<p>The <a href="/museum/getty"><strong>J. Paul Getty Museum</strong></a> holds this version, one of the finest from the series. Monet exhibited twenty cathedral paintings in 1895, and they caused a sensation. Critics recognized something new: paintings where the subject mattered less than the <a href="/movement/impressionism"><strong>Impressionist</strong></a> exploration of light, atmosphere, and the act of seeing itself.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: `This version hangs at the <a href="/museum/getty"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. It's considered one of the finest paintings from the Rouen Cathedral series.` },
      { question: "What time of day does this depict?", answer: `The painting shows <strong>early morning light</strong>, when cool blues and grays dominate before direct sunlight warms the stone. <a href="/artist/claude-monet"><strong>Monet</strong></a> captured many different times of day across the series.` },
      { question: "Why was this series significant?", answer: `Critics recognized that <a href="/artist/claude-monet"><strong>Monet</strong></a> was painting <strong>light and atmosphere itself</strong>, not just architecture. The series pushed <a href="/movement/impressionism"><strong>Impressionism</strong></a> toward pure studies of perception.` }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of his water garden in 1899, one of eighteen canvases from that year showing the <strong>Japanese-style bridge</strong> he built at Giverny. Wisteria drapes the curved wooden structure, while water lilies float on the pond below. The composition became his defining subject for the last three decades of his life.</p>
<p>Monet purchased land adjacent to his property in 1893 and created the water garden. He modeled the arched bridge on examples from Japanese prints, which he collected avidly. This 1899 series established the visual vocabulary he would explore obsessively, eventually producing around 250 water lily paintings. Examples hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London and the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Monet's Japanese Bridge paintings?", answer: `The 1899 series is in multiple museums including the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the National Gallery of Art in Washington.` },
      { question: "When did Monet create his water garden?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> purchased the land in 1893 and built the <strong>water garden and bridge</strong>. He began painting it seriously in 1899 and continued until his death in 1926.` },
      { question: "How many water lily paintings did Monet make?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> produced approximately <strong>250 water lily paintings</strong> over three decades. They became the defining subject of his late career and his most recognizable images.` },
      { question: "What inspired the Japanese bridge?", answer: `<a href="/artist/claude-monet"><strong>Monet</strong></a> was an avid collector of <strong>Japanese woodblock prints</strong>. He modeled the arched bridge on examples seen in these prints, integrating Asian aesthetics into his French garden.` }
    ]
  }
];

async function main() {
  console.log('Updating 20 artworks (Jan 21 Batch 2)...\n');

  let updated = 0;
  for (const update of updates) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug: update.slug } });
      if (artwork) {
        await prisma.artwork.update({
          where: { slug: update.slug },
          data: {
            description: update.description,
            faqs: update.faqs,
            updatedAt: new Date()
          }
        });
        console.log(`✓ Updated: ${artwork.title}`);
        updated++;
      } else {
        console.log(`✗ Not found: ${update.slug}`);
      }
    } catch (error) {
      console.log(`✗ Error updating ${update.slug}: ${error.message}`);
    }
  }

  console.log(`\nUpdated ${updated}/20 artworks`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
