const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'adolph-menzel-portrait-of-a-baby',
    description: `<p><a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> created this intimate baby portrait during his career as Germany's leading 19th-century realist. The artist produced thousands of drawings documenting subjects with <strong>photographic precision</strong>. His background as an engraver gave him exceptional skill in capturing fine details.</p>

<p>Menzel began his career in his father's lithography workshop, which he took over at just sixteen after his father's death. He taught himself art, eventually becoming one of the most respected German painters of his era. His keen observation of everyday subjects included portraits of children and family members rendered with warmth and accuracy.</p>`,
    faqs: [
      { question: "Who painted Portrait of a Baby?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> (1815-1905) created this work. He was Germany's most important <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> artist, known for precise observation and masterful draftsmanship in portraits, landscapes, and historical scenes." },
      { question: "What was Menzel known for?", answer: "Menzel excelled at detailed observation, creating thousands of <strong>sketches and studies</strong> of people, costumes, and daily life. His plein air drawings were admired for their truth to nature and exceptional technical skill." },
      { question: "How did Menzel learn to paint?", answer: "Menzel was mostly <strong>self-taught</strong>. After his father's death, he took over the family lithography workshop at age 16. He briefly attended Berlin Academy of Art but left to develop his skills independently through constant observation." },
      { question: "Why is this painting significant?", answer: "The portrait demonstrates Menzel's ability to capture <strong>personality and character</strong> even in very young subjects. His portraits convey warmth while maintaining the precise realism that made him famous across Europe." }
    ]
  },
  {
    slug: 'claude-monet-waterloo-bridge-dawn',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Waterloo Bridge during his London series between 1900 and 1904. Thick fog shrouds the bridge's arches in shades of blue and grey. The <strong>atmospheric conditions</strong> fascinated Monet, who worked on multiple canvases simultaneously from his room at the Savoy Hotel.</p>

<p>The London series includes 41 Waterloo Bridge paintings plus views of Charing Cross Bridge and the Houses of Parliament. Legendary collector Ivan Morozov acquired this work, which later entered the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> collection. Monet's loose brushstrokes capture fleeting light effects rather than architectural details.</p>`,
    faqs: [
      { question: "Where is Monet's Waterloo Bridge painting?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. It measures 101 x 65.3 cm and was purchased by collector Ivan Morozov before entering the museum's collection." },
      { question: "How many Waterloo Bridge paintings did Monet create?", answer: "Monet painted <strong>41 versions</strong> of Waterloo Bridge between 1900 and 1904. He worked from his room at the Savoy Hotel, painting multiple canvases to capture different atmospheric conditions and times of day." },
      { question: "What style is this painting?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> created this work in his mature <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> style. Loose brushstrokes and muted colors suggest fog and atmosphere rather than depicting clear architectural forms." },
      { question: "Why did Monet paint London fog?", answer: "Monet was fascinated by <strong>atmospheric effects</strong>. The thick London fog created changing light conditions that he captured by working on multiple canvases simultaneously, switching between them as light and weather shifted." }
    ]
  },
  {
    slug: 'edgar-degas-madame-rene-de-gas',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted his first cousin Estelle Musson during his 1872 visit to New Orleans. She had married his brother René and was nearly blind from chronic eye disease. Degas, whose own vision was deteriorating, deeply identified with her condition. The portrait shows her <strong>arranging flowers by touch and smell</strong> instead of sight.</p>

<p>Estelle suffered from chorioretinitis, the same condition affecting Degas. During his New Orleans stay, he developed fondness for her, painting five works featuring his cousin. The soft focus and subdued colors reflect her visual limitations while demonstrating Degas's compassion. Now at the <strong>National Gallery of Art</strong> in Washington, D.C.</p>`,
    faqs: [
      { question: "Who was Madame René de Gas?", answer: "<strong>Estelle Musson</strong> was <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas's</strong></a> first cousin and sister-in-law, married to his brother René. By age 30, she was completely blind from chronic eye disease, the same condition that plagued Degas himself." },
      { question: "Why did Degas paint Estelle?", answer: "Degas deeply identified with Estelle because both shared the same <strong>eye condition</strong>, chorioretinitis. During his New Orleans visit in 1872, he painted her five times, showing her managing tasks by touch and smell instead of sight." },
      { question: "Where is this portrait displayed?", answer: "The painting hangs at the <strong>National Gallery of Art</strong> in Washington, D.C. Another version showing Estelle with flowers is at the New Orleans Museum of Art, closer to where she lived." },
      { question: "What does the painting show?", answer: "The portrait depicts Estelle <strong>arranging flowers</strong> by touch and smell. The soft focus and muted palette reflect her visual limitations, while Degas's treatment shows compassion for her condition." }
    ]
  },
  {
    slug: 'edgar-degas-the-little-milliners',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted these junior hat makers in 1882, showing two women absorbed in creating beautiful objects with artist-like craft. They put <strong>finishing touches on elegant chapeaus</strong> using coarse straw, velvet ribbons, and fluffy ostrich feathers. The title indicates they're assistants, beyond apprenticeship but not yet lead trimmers.</p>

<p>Degas created over 20 paintings, pastels, and drawings of millinery shops during three decades. No other modern painter depicted this subject with such frequency. Paris was the hat-making capital of the world, and Degas showed affinity for these craftswomen. Now at the <strong>Nelson-Atkins Museum</strong> in Kansas City.</p>`,
    faqs: [
      { question: "What are milliners?", answer: "<strong>Milliners</strong> are hat makers. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted junior assistants working in Parisian shops, creating fashionable hats with straw, ribbons, and feathers. Paris was the world's hat-making capital during this period." },
      { question: "How many millinery paintings did Degas create?", answer: "Degas produced over <strong>20 works</strong> depicting millinery shops across thirty years. No other modern painter focused on this subject with such dedication, showing his fascination with craftswomen at work." },
      { question: "Where is The Little Milliners displayed?", answer: "The painting hangs at the <strong>Nelson-Atkins Museum of Art</strong> in Kansas City, Missouri. It showcases Degas's skill with pastel, using luscious strokes to depict fabrics and feathers." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> through loose brushwork and focus on contemporary life. Degas captured these <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>working women</strong></a> with the same attention given to ballet dancers." }
    ]
  },
  {
    slug: 'edgar-degas-slippers-of-ballerina',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured a dancer's shoes in this pastel study, part of his extensive documentation of ballet life. Between 1873 and 1874, he made several studies of dancers adjusting their shoes, shown from different angles. His <strong>masterful use of pastel</strong> builds up color in layers.</p>

<p>Degas created about 1,500 paintings and works on paper depicting dancers during his career. The chalky pastel medium allowed him to capture movement and texture with exceptional delicacy. These shoes represent not performance but the unglamorous preparation behind the art, showing dancers as hardworking craftspeople rather than ethereal figures.</p>`,
    faqs: [
      { question: "How many ballet works did Degas create?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> made about <strong>1,500 paintings and works on paper</strong> of dancers during his career. He depicted rehearsals, backstage moments, and preparation more often than actual performances." },
      { question: "Why did Degas paint ballet shoes?", answer: "Degas showed the <strong>unglamorous reality</strong> behind performance. Ballet shoes represented hard work and preparation. Between 1873-1874, he made several studies of dancers adjusting their shoes from different angles." },
      { question: "What medium did Degas use?", answer: "Degas was a <strong>masterful pastellist</strong>, using chalky pigment to build up color in layers. The medium allowed him to capture texture and movement with exceptional delicacy in his ballet studies." },
      { question: "What style is this work?", answer: "The piece exemplifies <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> through its focus on contemporary life and loose handling. Degas showed ballet as work rather than romantic fantasy, capturing real moments of preparation." }
    ]
  },
  {
    slug: 'gustave-moreau-male-nude',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> created this male nude study around 1860 as part of his academic training. Such <strong>figure studies</strong> were essential practice for artists of his era, building skills in anatomy and form before tackling complex mythological subjects.</p>

<p>Moreau later became famous for elaborate Symbolist paintings packed with mythological figures and intricate details. These early nude studies represent the foundation of that work. When Moreau died in 1898, he bequeathed his townhome and studio with nearly 1,200 paintings and over 10,000 drawings to create a museum. Now at the <a href="/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france"><strong>Musée National Gustave Moreau</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted this male nude?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this study around 1860. He later became one of France's leading <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painters, known for elaborate mythological scenes packed with intricate details." },
      { question: "Why did Moreau create nude studies?", answer: "<strong>Figure studies</strong> were essential academic training for 19th-century artists. Drawing from live models helped painters master anatomy and form before creating complex compositions with multiple figures." },
      { question: "Where is this study displayed?", answer: "The work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée National Gustave Moreau</strong></a> in Paris. Moreau bequeathed his home and studio with nearly 1,200 paintings and over 10,000 drawings to create this museum." },
      { question: "What is the Musée Gustave Moreau?", answer: "The museum opened in 1903 in Moreau's former townhome and studio in Paris. It holds by far the largest collection of his work, including <strong>preparatory drawings</strong>, studies, and finished paintings spanning his entire career." }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-margot',
    description: `<p><a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> created numerous portraits of Montmartre prostitutes during the 1890s, documenting their lives with compassion and honesty. He lived among them, creating about a hundred drawings and fifty paintings inspired by these women. His <strong>intimate perspective</strong> captured them in moments of rest rather than performance.</p>

<p>Toulouse-Lautrec developed an affinity for brothels and the women who worked there, painting subjects others avoided. He treated them with dignity, showing their humanity beyond their profession. The artist frequented Montmartre's bohemian scene, where he found models among streetwalkers and licensed brothel workers. Now in a private collection.</p>`,
    faqs: [
      { question: "Who was Margot?", answer: "While specific details about this individual are unclear, the portrait represents <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec's</strong></a> broader body of work depicting <strong>Montmartre prostitutes</strong>. He created about 100 drawings and 50 paintings of these women." },
      { question: "Why did Toulouse-Lautrec paint prostitutes?", answer: "The artist lived among Montmartre's <strong>bohemian community</strong> and developed genuine affinity for brothel life. He treated these women with dignity, capturing their humanity in intimate moments rather than exploiting them." },
      { question: "What style is this portrait?", answer: "Toulouse-Lautrec worked in a <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style influenced by Japanese prints. His bold outlines and flat color areas captured late 19th-century Parisian nightlife with distinctive modernist vision." },
      { question: "Where are Toulouse-Lautrec's prostitute paintings?", answer: "His works are scattered across museums and private collections worldwide. Notable examples include \"The Streetwalker\" at the Norton Simon Museum and various brothel scenes at major <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure painting</strong></a> collections." }
    ]
  },
  {
    slug: 'rembrandt-seated-beggar-and-his-dog',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching in 1630 during his Leiden period, showing a beggar seated on a bank with his dog. The figure is believed to be a <strong>self-portrait</strong> of the young artist. His creased forehead, frown, and open mouth revealing teeth resemble features in his etched self-portrait from the same year.</p>

<p>Rembrandt modeled this work on French artist Jacques Callot's series of beggar prints. The small etching measures just 116 x 70 mm. It appeared in major Rembrandt exhibitions at the National Gallery in London in 1992 and 1999. The British Museum and other collections hold impressions. Now at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Is Seated Beggar a self-portrait?", answer: "Scholars believe the beggar represents <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> himself. The creased forehead, frown, and open mouth match his 1630 etched self-portrait. Young Rembrandt often used himself as a model for character studies." },
      { question: "When did Rembrandt create this etching?", answer: "Rembrandt made this work in <strong>1630 in Leiden</strong>, his hometown, before moving to Amsterdam. It's monogrammed RHL and dated, measuring just 116 x 70 mm, a tiny but detailed print." },
      { question: "What influenced this etching?", answer: "Rembrandt took inspiration from <strong>Jacques Callot's beggar series</strong>. The French artist (1592-1635) created prints depicting beggars that influenced Dutch artists' studies of expression and character types." },
      { question: "Where can I see this etching?", answer: "The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London exhibited it in major Rembrandt shows. The British Museum and other print collections hold impressions of this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> etching." }
    ]
  },
  {
    slug: 'rembrandt-the-small-lion-hunt-with-two-lions',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this dramatic hunting scene around 1629-1630, depicting men battling two lions in violent encounter. He captured the <strong>chaos and excitement</strong> through stark contrasts of light and dark. The small print measures just inches across yet conveys monumental drama.</p>

<p>Rembrandt created related versions including "The Small Lion Hunt (with One Lion)." These early etchings demonstrate his interest in action and violence, themes he explored throughout his career. Major collections including the Metropolitan Museum, Rijksmuseum, National Gallery of Art, and Yale University Art Gallery hold impressions. A version is at the <strong>Rembrandt House Museum</strong> in Amsterdam.</p>`,
    faqs: [
      { question: "When did Rembrandt create The Small Lion Hunt?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> made this etching around <strong>1629-1630</strong> early in his career. He created both one-lion and two-lion versions, exploring themes of violent encounters between humans and animals." },
      { question: "How did Rembrandt create drama?", answer: "Rembrandt intensified the drama through <strong>stark contrasts of light and dark</strong>. Despite the small scale, the composition conveys chaos and excitement as men battle the fierce lions in close combat." },
      { question: "Where can I see this etching?", answer: "Major collections hold impressions: the Metropolitan Museum, National Gallery of Art, Rijksmuseum, Yale University Art Gallery, Norton Simon Museum, and Morgan Library all have examples of this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> print." },
      { question: "What technique did Rembrandt use?", answer: "<strong>Etching</strong> allowed Rembrandt to create multiple impressions from a single copper plate. He scratched the design into a wax-covered plate, then used acid to bite the lines into the metal." }
    ]
  },
  {
    slug: 'hieronymus-bosch-two-witches',
    description: `<p><a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> created this pen drawing around 1480-1490, showing two witches in his characteristic fantastical style. The work measures 125 x 85 cm and represents one of Bosch's preparatory sketches. His imaginative compositions influenced <strong>Northern Renaissance</strong> art.</p>

<p>Museum Boijmans van Beuningen is the only Dutch museum with Bosch paintings in its collection. It also holds two of his drawings, including The Owl's Nest. These sketches reveal Bosch's creative process before he executed his elaborate painted visions of heaven, hell, and moral allegory. Now at <a href="/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam.</p>`,
    faqs: [
      { question: "Who created Two Witches?", answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a> (c.1450-1516) made this pen drawing around 1480-1490. He was a Dutch painter famous for fantastical scenes filled with imaginative creatures and moral symbolism." },
      { question: "Where can I see Bosch's Two Witches?", answer: "The drawing is at <a href=\"/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, the only Dutch museum with Bosch paintings. It holds two of his drawings, including this work and The Owl's Nest." },
      { question: "What style is this drawing?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> art with its imaginative, fantastical approach. Bosch's unique vision combined religious themes with bizarre, dream-like imagery that influenced later artists." },
      { question: "Is this a finished work?", answer: "No, this is a <strong>preparatory drawing</strong> or independent sketch. It reveals Bosch's creative process before executing his elaborate painted compositions. The pen on paper measures 125 x 85 cm." }
    ]
  },
  {
    slug: 'raoul-dufy-pier-of-le-havre-in-the-evening',
    description: `<p><a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> was born in Le Havre, and the port city's maritime setting provided subjects throughout his career. He painted the pier and harbor between 1900 and 1904, later returning to the theme in the 1920s. The <strong>busy pier with strolling figures</strong> remained a focus until late in his work.</p>

<p>Dufy's encounter with Matisse's Luxe, Calme et Volupté in 1905 directed him toward Fauvism and its emphasis on bright color and bold contours. His Le Havre works trace his evolution from early Impressionism through Fauvism to later explorations of light and color. Now at the <a href="/apps/masterpieces/museum/mus233e-calvet-avignon-france"><strong>Musée Calvet</strong></a> in Avignon.</p>`,
    faqs: [
      { question: "Who painted Pier of Le Havre in the Evening?", answer: "<a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a> (1877-1953) created this work. Born in Le Havre, he painted his hometown's harbor and pier throughout his career, showing seaside recreation and maritime activity." },
      { question: "What style is this painting?", answer: "Dufy's Le Havre works reflect his artistic evolution. After seeing Matisse's work in 1905, he adopted <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a> with its bright colors and bold contours, moving beyond his earlier Impressionist approach." },
      { question: "When did Dufy paint Le Havre piers?", answer: "Dufy painted the harbor between <strong>1900 and 1904</strong>, then returned to the theme in the 1920s. Three versions of The Pier and the Beach at Le Havre date from 1926." },
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/mus233e-calvet-avignon-france\"><strong>Musée Calvet</strong></a> in Avignon, France. Le Havre's MuMa museum holds other <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> works by the hometown artist." }
    ]
  },
  {
    slug: 'adriaen-brouwer-interior-of-a-tavern',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> painted this tavern scene around 1630 in a loose, brushy manner using varying shades of brown to suggest rural informality. A man urinates against a post while others drink and smoke. Brouwer focused on the <strong>wide variety of facial expressions</strong> and gestures of tavern-goers.</p>

<p>The Flemish painter became an important innovator of genre painting through vivid depictions of peasants, soldiers, and lower-class individuals. Even during his lifetime, Rubens and Rembrandt owned his works. His expressive faces and unidealized scenes influenced Dutch and Flemish art. Now at <a href="/apps/masterpieces/museum/dulwich-picture-gallery-london-uk"><strong>Dulwich Picture Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who painted Interior of a Tavern?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> (c.1605-1638) created this work around 1630. The Flemish painter was active in both Flanders and the Dutch Republic, specializing in scenes of peasant life and tavern gatherings." },
      { question: "What made Brouwer important?", answer: "Brouwer innovated <strong>genre painting</strong> through vivid depictions of common people drinking, smoking, and fighting. His works were owned by Rubens and Rembrandt, who admired his ability to capture expressive faces and gestures." },
      { question: "Where is this painting displayed?", answer: "The work hangs at <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery-london-uk\"><strong>Dulwich Picture Gallery</strong></a> in London. The painting measures 32.4 x 43.2 cm and showcases Brouwer's loose brushwork and earthy palette." },
      { question: "What style is this painting?", answer: "The work exemplifies <a href=\"/apps/masterpieces/movement/baroque\"><strong>Dutch Golden Age</strong></a> genre painting. Brouwer's unidealized scenes of <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>common people</strong></a> at leisure influenced both Dutch and Flemish artists." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-sense-of-smell',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this humorous domestic scene in 1635 as part of his "Five Senses" series. A man plugs his nose while a woman changes a baby's diaper. The <strong>comic representation</strong> of the sense of smell shows peasant life with wit and warmth.</p>

<p>Van Ostade specialized in scenes of Dutch peasant life, painting common people in taverns and homes. This small panel measures just 20 x 24.5 cm. The Hermitage acquired it in 1920, adding it to their Dutch Golden Age collection. The painting demonstrates van Ostade's skill at capturing everyday moments with humor. Now at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "What is the Five Senses series?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> created a series representing the <strong>five senses</strong> through humorous peasant scenes. This 1635 painting shows smell through a man reacting to a baby being changed." },
      { question: "Where is Sense of Smell displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg. It joined the collection in 1920 with inventory number ГЭ-999. The work measures just 20 x 24.5 cm." },
      { question: "Who was Adriaen van Ostade?", answer: "Van Ostade (1610-1685) was a Dutch <a href=\"/apps/masterpieces/movement/baroque\"><strong>Golden Age</strong></a> painter who specialized in peasant genre scenes. He depicted common people in taverns and homes with humor and skilled observation." },
      { question: "How big is this painting?", answer: "The oil on panel measures just <strong>20 x 24.5 cm</strong> (about 8 x 10 inches). Despite its small size, van Ostade packed it with detail and character, showing his mastery of miniature compositions." }
    ]
  },
  {
    slug: 'alphonse-mucha-the-judgement-of-paris',
    description: `<p><a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> created this mythological scene in 1895, depicting the Greek myth where goddesses Aphrodite, Athena, and Hera compete for the golden apple inscribed "For the Fairest." Flowing organic lines and <strong>intricate floral motifs</strong> surround the central tableau.</p>

<p>Swirling Art Nouveau patterns frame the scene with decorative borders. Smaller vignettes appear above in monochromatic palette, while masks along the bottom bring drama. Muted colors and shimmering gold accents create a dreamlike atmosphere typical of Mucha's style. The work combines classical mythology with Art Nouveau's distinctive aesthetic. Now in a private collection.</p>`,
    faqs: [
      { question: "What is the Judgement of Paris?", answer: "The Greek myth tells how <strong>Paris chose Aphrodite</strong> as the fairest goddess, awarding her the golden apple. This decision led to the Trojan War. Artists throughout history depicted this popular mythological subject." },
      { question: "Who created The Judgement of Paris?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> painted this version in 1895. The Czech artist was a master of <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>, known for decorative posters featuring flowing lines and elegant female figures." },
      { question: "What style is this painting?", answer: "The work exemplifies <strong>Art Nouveau</strong> through swirling lines, floral motifs, and decorative borders. Mucha combined classical mythology with the movement's distinctive ornamental aesthetic, using muted colors and gold accents." },
      { question: "What makes this painting unique?", answer: "Mucha framed the classical myth with <strong>intricate Art Nouveau decoration</strong>. Smaller vignettes above and theatrical masks below add layers of meaning, creating a harmonious blend of ancient story and modern design." }
    ]
  },
  {
    slug: 'jacob-van-ruisdael-landscape-with-a-waterfall-and-castle',
    description: `<p><a href="/apps/masterpieces/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> painted this dramatic scene around 1670, featuring a waterfall cascading before a castle. He produced more than 150 Scandinavian views with waterfalls, making this his most <strong>common landscape theme</strong>. The painting combines natural power with architectural elements.</p>

<p>A rare Dutch ebonized pearwood cabinetmaker's frame from the late 17th century was acquired for this painting, generously funded by donors. The frame suits the work's period and importance. Van Ruisdael was the leading Dutch landscape painter of his era. Now at the <a href="/apps/masterpieces/museum/dayton-art-institute-dai-dayton-oh-us"><strong>Dayton Art Institute</strong></a> in Ohio.</p>`,
    faqs: [
      { question: "Who painted Landscape with a Waterfall and Castle?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a> (c.1628-1682) created this work around 1670. He was the leading Dutch landscape painter of his generation, known for dramatic natural scenes with waterfalls and forests." },
      { question: "How many waterfall paintings did Ruisdael create?", answer: "Ruisdael produced more than <strong>150 Scandinavian views</strong> featuring waterfalls during his career. This subject became his most common landscape theme, combining natural drama with architectural elements like castles." },
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/dayton-art-institute-dai-dayton-oh-us\"><strong>Dayton Art Institute</strong></a> in Ohio. A rare 17th-century Dutch pearwood frame was specially acquired to showcase the painting appropriately." },
      { question: "What style is this landscape?", answer: "The painting exemplifies <a href=\"/apps/masterpieces/movement/baroque\"><strong>Dutch Baroque</strong></a> landscape painting. Ruisdael combined realistic observation with dramatic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>natural scenery</strong></a>, creating powerful compositions that influenced later artists." }
    ]
  },
  {
    slug: 'rembrandt-woman-with-a-pink',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait around 1656, showing a woman holding a deep pink carnation. She rests one arm on a table displaying fruit and a book, probably a Bible. The <strong>pink symbolizes marriage or betrothal</strong>, while apples represent original sin.</p>

<p>A 2007-2008 conservation treatment confirmed Rembrandt's authorship. The painting passed through Pierre Crozat's collection before reaching the National Gallery of Art. Rembrandt's mid-1650s portrait style shows qualities of simplicity and forcefulness. Smooth brushstrokes recreate soft skin while thicker strokes highlight details. Now at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What does the pink carnation symbolize?", answer: "The <strong>pink carnation</strong> symbolizes marriage or betrothal in 17th-century Dutch painting. Combined with the Bible and apples on the table, it suggests the woman's marital status and religious devotion." },
      { question: "Who painted Woman with a Pink?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this portrait around 1656. A 2007-2008 conservation treatment confirmed his authorship, revealing details about his mid-1650s portrait technique and simplified, forceful style." },
      { question: "Where is this portrait displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It passed through notable collections including that of Pierre Crozat before entering the museum." },
      { question: "What symbols appear in the painting?", answer: "The <strong>Bible represents faith</strong>, apples symbolize original sin, and the pink carnation suggests marriage. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portraits often included symbolic objects to convey meaning beyond appearance." }
    ]
  },
  {
    slug: 'rembrandt-selfportrait-frowning-bust',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this tiny etching in 1630 during his Leiden period, one of four capturing different facial expressions. The young artist experimented with <strong>emotional states</strong> including surprise, anger, and mockery. This version shows him frowning.</p>

<p>The small print measures just 7.4 x 6.3 cm, yet captures detailed expression. These early works are considered "studies in expression" showing Rembrandt's extensive self-portraiture practice. He used himself as a model throughout his career, creating dozens of painted, etched, and drawn self-portraits. Now at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "When did Rembrandt create this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> made this etching in <strong>1630 in Leiden</strong>, his hometown, before moving to Amsterdam. It's part of a series of four etchings exploring different facial expressions." },
      { question: "How big is this etching?", answer: "The print is tiny, measuring just <strong>7.4 x 6.3 cm</strong> (about 3 x 2.5 inches). Despite its small scale, Rembrandt captured detailed expression and character through precise etching techniques." },
      { question: "Why did Rembrandt make so many self-portraits?", answer: "Rembrandt used himself as a <strong>convenient model</strong> for studying expressions and character types. He created dozens of self-portraits throughout his career, documenting his aging face and experimenting with techniques." },
      { question: "Where is this etching displayed?", answer: "The work is at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>, a gift from Leonard C. Hanna, Jr. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> etching shows young Rembrandt's experimental approach." }
    ]
  },
  {
    slug: 'jan-steen-princes-day',
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> painted this lively tavern celebration during the 1660s-1670s, showing a company celebrating the birthday of Prince William III of Orange-Nassau (November 14, 1650). A portrait of the prince hangs above a bedstead while a <strong>copper crown with orange branch</strong> decorates the table.</p>

<p>The scene captures Dutch patriotic festivity with people drinking, eating, and laughing. A bell hangs alongside the crown and orange symbols. Steen specialized in these chaotic genre scenes packed with figures and activity. The Rijksmuseum holds the world's largest Steen collection with 22 paintings. Now at the <a href="/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "What is Prince's Day?", answer: "<strong>Prince's Day</strong> celebrated the birthday of Prince William III of Orange-Nassau, born November 14, 1650. The popular feast-day featured patriotic symbols including orange branches, crowns, and the prince's portrait." },
      { question: "Who painted Prince's Day?", answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> (c.1626-1679) created this work in the 1660s-1670s. He specialized in chaotic tavern scenes and celebrations, earning the Dutch expression \"a Jan Steen household\" for disorderly homes." },
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam, which owns the world's largest Steen collection with 22 paintings total. It also holds his famous Feast of St. Nicholas." },
      { question: "What symbols appear in the painting?", answer: "A <strong>portrait of Prince William III</strong> hangs on the wall, while a copper crown with orange branch sits on the table. Orange was the color of the House of Orange-Nassau." }
    ]
  },
  {
    slug: 'andrea-del-sarto-the-punishment-of-the-sinners',
    description: `<p><a href="/apps/masterpieces/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> painted this fresco in 1510 for the Chiostro dei Voti (Cloister of the Vows) at the Basilica della Santissima Annunziata in Florence. The large fresco measures 360 x 300 cm and depicts <strong>San Filippo Benizzi punishing gamblers and blasphemers</strong> within a fantastic landscape.</p>

<p>Del Sarto created seven frescoes in the atrium, five illustrating the life and miracles of the Servite saint who died in 1285. This scene uses different tones to create the opening of the heavens and destruction on earth. A faint orange lightning bolt breaks a tree against thick black and purple clouds. Now at the <a href="/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital"><strong>Basilica della Santissima Annunziata</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Who painted The Punishment of the Sinners?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> (1486-1530) created this fresco in 1510. The Florentine painter was known for harmonious compositions and mastery of color, bridging High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and Mannerist styles." },
      { question: "What does the fresco depict?", answer: "The work shows <strong>San Filippo Benizzi</strong> punishing groups of gamblers and blasphemers. A fantastic landscape with jutting rocks and trees frames the scene, with heavens opening above the earthly destruction below." },
      { question: "Where is this fresco located?", answer: "The fresco is at the <a href=\"/apps/masterpieces/museum/basilica-della-santissima-annunziata-florence-ital\"><strong>Basilica della Santissima Annunziata</strong></a> in Florence, in the Chiostro dei Voti (Cloister of the Vows). Del Sarto painted seven frescoes in this atrium." },
      { question: "How big is The Punishment of the Sinners?", answer: "The fresco measures <strong>360 x 300 cm</strong> (about 12 x 10 feet). Del Sarto used varying tones and shades to create dramatic effects, including a faint orange lightning bolt against dark storm clouds." }
    ]
  },
  {
    slug: 'rembrandt-philosopher-reading',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this contemplative scene in 1631, showing an elderly scholar absorbed in reading. The <strong>dramatic light</strong> illuminates the figure and book while shadows envelop the rest of the space. Rembrandt's characteristic chiaroscuro creates atmosphere and focuses attention.</p>

<p>The painting belongs to Rembrandt's series of thinker and scholar paintings from the early 1630s. Some scholars suggest these may depict biblical figures rather than generic philosophers. The intimate scale and warm tones create a meditative mood. The work demonstrates Rembrandt's ability to convey psychological depth through light and shadow.</p>`,
    faqs: [
      { question: "Who painted Philosopher Reading?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this oil on panel in 1631, measuring 60 x 48 cm. The work comes from his early Amsterdam period when he painted several scholars and thinkers absorbed in contemplation." },
      { question: "What does the painting show?", answer: "An <strong>elderly scholar reads</strong> by dramatic light. Some scholars think it might depict a biblical figure like Tobit rather than a generic philosopher. The exact subject remains debated among art historians." },
      { question: "What technique did Rembrandt use?", answer: "Rembrandt employed <strong>chiaroscuro</strong>, his signature contrast of light and dark. Dramatic illumination falls on the figure and book while deep shadows create atmosphere and psychological depth in the surrounding space." },
      { question: "Where is Philosopher Reading?", answer: "The painting is in a <strong>private collection</strong>. A related work, \"Philosopher in Meditation\" from 1632, hangs at the Louvre in Paris and shows similar themes of contemplation in <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." }
    ]
  },
  {
    slug: 'jean-antoine-watteau-italian-recreation',
    description: `<p><a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> created this elegant scene of leisure and entertainment, typical of his fêtes galantes paintings. These works show aristocrats in parkland settings enjoying music, conversation, and courtship. Watteau revitalized the waning <strong>Baroque style</strong>, shifting it toward naturalistic Rococo.</p>

<p>Watteau's works appear in Berlin's Schloss Charlottenburg, which holds an exceptional group of his major paintings including The Embarkation for Cythera and Gersaint's Shopsign. His paintings capture the refined pleasures of French aristocratic life with delicate brushwork and soft colors. Now at <a href="/apps/masterpieces/museum/schloss-charlottenburg-berlin-germany"><strong>Schloss Charlottenburg</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Who painted Italian Recreation?", answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Jean-Antoine Watteau</strong></a> (1684-1721) created this work. He invented the fêtes galantes genre showing aristocrats at leisure in parkland settings, shifting French art from Baroque to <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>." },
      { question: "What are fêtes galantes?", answer: "<strong>Fêtes galantes</strong> depict elegant outdoor entertainments with aristocrats enjoying music, conversation, and courtship. Watteau pioneered this genre, creating dreamlike scenes of refined pleasure with delicate brushwork and soft colors." },
      { question: "Where is this painting displayed?", answer: "The work is at <a href=\"/apps/masterpieces/museum/schloss-charlottenburg-berlin-germany\"><strong>Schloss Charlottenburg</strong></a> in Berlin. The palace holds several major Watteau paintings including The Embarkation for Cythera and Gersaint's Shopsign." },
      { question: "What made Watteau important?", answer: "Watteau transformed French art by shifting from <strong>formal Baroque</strong> to lighter, more naturalistic Rococo. His elegant scenes of aristocratic leisure influenced European painting for decades after his early death at age 36." }
    ]
  },
  {
    slug: 'rembrandt-old-man-dressed-as-saint-paul',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this pensive Saint Paul probably in 1659, part of his series of half-length religious figures from the late 1650s and early 1660s. The dark picture focuses on essentials: an open book sits before Paul, a <strong>sword leans against the wall</strong> behind him.</p>

<p>A roundel in the upper left shows an angel interrupting Abraham's sacrifice of Isaac, adding symbolic depth. The painting is signed and dated to the right of Paul's head. Rembrandt's late religious portraits strip away unnecessary details, creating meditative images. Now at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "What symbols identify Saint Paul?", answer: "<strong>The sword and book</strong> are Paul's traditional attributes. The sword references his martyrdom by beheading, while the open book represents his epistles, which form much of the New Testament." },
      { question: "Who painted this Saint Paul?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this work probably in 1659 as part of his late series of religious figures. These paintings from the late 1650s-early 1660s show his mature, simplified style." },
      { question: "What appears in the upper corner?", answer: "A <strong>roundel shows Abraham and Isaac</strong> with an angel interrupting the sacrifice. This biblical scene adds theological depth, connecting Old and New Testament themes of faith and divine intervention." },
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait demonstrates Rembrandt's late style, stripping away details to focus on spiritual contemplation." }
    ]
  },
  {
    slug: 'rembrandt-portrait-of-a-woman',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait in 1662, showing an elderly woman in black attire. By age 25, Rembrandt had become Amsterdam's most successful portrait painter, creating vivid likenesses that expressed personality and soul. <strong>Smooth, fluid brushstrokes</strong> recreate soft skin texture.</p>

<p>Thicker, textured strokes draw attention to the lace collar and gold jewelry, details sure to please a wealthy client. The demand for Rembrandt portraits meant he often called upon assistants to help complete works, probably including this one. Now at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "When did Rembrandt paint this portrait?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this work in <strong>1662</strong>, during his late period. By this time he had decades of experience creating portraits that captured both physical likeness and inner character." },
      { question: "Did Rembrandt paint this alone?", answer: "Probably not. The extraordinary demand for Rembrandt portraits meant he often used <strong>assistants to help complete works</strong>. He would paint faces while assistants might handle clothing and backgrounds." },
      { question: "What technique did Rembrandt use?", answer: "Rembrandt used <strong>varied brushwork</strong>: smooth, fluid strokes for soft skin; thicker, textured strokes for lace collar and gold jewelry. This contrast drew attention to expensive details that pleased wealthy clients." },
      { question: "Where is this portrait displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>. The museum notes that information about the work may not be currently accurate and continues research on this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait." }
    ]
  },
  {
    slug: 'rembrandt-josephs-coat-brought-to-jacob',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this biblical scene around 1633, depicting Joseph's brothers bringing his bloodied coat to their father Jacob. They deceived him into believing Joseph had been killed by a wild animal. The <strong>small print</strong> captures the emotional drama of the moment.</p>

<p>The etching measures just 10.8 x 8 cm on the plate, demonstrating Rembrandt's ability to convey complex narrative in miniature scale. Printmaking was a major source of his international fame during his lifetime. The work is part of the Clarence Buckingham Collection. Now at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What biblical story does this show?", answer: "The scene depicts <strong>Genesis 37</strong> where Joseph's brothers bring his bloodied coat to Jacob. They dipped it in goat's blood to make their father believe Joseph was killed by wild animals." },
      { question: "When did Rembrandt create this etching?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> made this work around <strong>1633</strong> during his early Amsterdam period. It's one of many biblical subjects he explored through etching, which spread his fame internationally." },
      { question: "How big is this etching?", answer: "The plate measures just <strong>10.8 x 8 cm</strong> (about 4.25 x 3.25 inches). Despite its tiny scale, Rembrandt conveyed the emotional weight of the brothers' deception and Jacob's grief." },
      { question: "Where is this print displayed?", answer: "The work is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> as part of the Clarence Buckingham Collection. It's currently off view in the Prints and Drawings department." }
    ]
  },
  {
    slug: 'paolo-veronese-temptation-of-st-anthony',
    description: `<p><a href="/apps/masterpieces/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> painted this altarpiece in 1552, commissioned by Cardinal Ercole Gonzaga for Mantua Cathedral. The work depicts <strong>bare-breasted female figures</strong> representing temptations endured by Saint Anthony Abbot. Veronese cleverly gave the beautiful maiden talons instead of fingernails as the only clue she's really a demon.</p>

<p>The painting measures 198 x 151 cm and exemplifies Veronese's Mannerist style with elegant figures and rich colors. Originally painted in situ at the cathedral, it later moved to France. The subtle demonic details show Veronese's wit. Now at the <strong>Musée des Beaux-Arts de Caen</strong> in France.</p>`,
    faqs: [
      { question: "Who painted Temptation of St. Anthony?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Paolo Veronese</strong></a> (1528-1588) created this work in 1552. The Venetian painter was known for large-scale religious paintings with elegant figures and brilliant color in the late <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> style." },
      { question: "What does the painting depict?", answer: "The work shows <strong>Saint Anthony</strong> resisting demonic temptations disguised as beautiful women. Veronese cleverly painted talons instead of fingernails on the maiden's hand, the only clue revealing her true demonic nature." },
      { question: "Where was this painting originally?", answer: "Cardinal Ercole Gonzaga commissioned it for <strong>Mantua Cathedral</strong> in 1552. Veronese painted it in situ at the cathedral. It later moved to France and now hangs at the Musée des Beaux-Arts de Caen." },
      { question: "How big is the painting?", answer: "The oil on canvas measures <strong>198 x 151 cm</strong> (about 6.5 x 5 feet). This large altarpiece size was typical for Veronese, who specialized in monumental religious compositions for churches." }
    ]
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${update.slug}`);
    } catch (error) {
      console.error(`Failed to update ${update.slug}:`, error.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
