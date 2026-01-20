const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // 1. A Lady Writing - Vermeer
  {
    slug: 'johannes-vermeer-a-lady-writing',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this intimate scene around 1665, showing a young woman pausing from writing a letter to glance at the viewer. She wears a lemon-yellow morning jacket trimmed with ermine, pearls adorning her hair and ears. Light from an unseen window illuminates her face and the richly appointed desk.</p>
<p>The painting exemplifies Vermeer's mature style, with its careful attention to <strong>light and texture</strong>. A monogram signature appears on the lower frame of a picture visible on the back wall. The subject of letter-writing recurs throughout Vermeer's work, reflecting the importance of correspondence in Dutch Golden Age society. The painting now hangs at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C.</p>`,
    faqs: [
      { question: "Where can I see A Lady Writing?", answer: "The painting is at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It was gifted to the museum by the Havemeyer family in 1962." },
      { question: "Who painted A Lady Writing?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Johannes Vermeer</strong></a> created this work around 1665 during his mature period. It's one of several letter-themed paintings he produced." },
      { question: "How big is the painting?", answer: "It measures 45 x 39.9 cm (about 18 x 16 inches), a typical intimate scale for <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> domestic scenes." }
    ]
  },

  // 2. A Lake Scene: Effect of a Storm - Landseer
  {
    slug: 'edwin-landseer-a-lake-scene-effect-of-a-storm',
    description: `<p><a href="/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> painted this dramatic Scottish landscape capturing the aftermath of a storm over a Highland lake. Dark clouds break to reveal patches of light, while the water reflects the turbulent sky. The composition demonstrates Landseer's ability to convey atmosphere and mood through landscape.</p>
<p>Though best known for his animal paintings, Landseer frequently depicted the Scottish Highlands, which he visited regularly from the 1820s onward. Queen Victoria particularly admired his Scottish subjects. This work shows his <a href="/movement/romanticism"><strong>Romantic</strong></a> sensibility, emphasizing nature's power and drama. It's now at <a href="/museum/tate-britain"><strong>Tate</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's held at <a href=\"/museum/tate-britain\"><strong>Tate</strong></a> in London. <a href=\"/artist/edwin-landseer\"><strong>Landseer</strong></a> was a favorite of Queen Victoria and painted many Scottish subjects." },
      { question: "What style is this painting?", answer: "It's a <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> landscape emphasizing nature's drama. <a href=\"/artist/edwin-landseer\"><strong>Landseer</strong></a> was better known for animal paintings but also excelled at atmospheric <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." },
      { question: "Who painted this work?", answer: "<a href=\"/artist/edwin-landseer\"><strong>Sir Edwin Landseer</strong></a> was a Victorian painter famous for animal subjects and Scottish Highland scenes. He designed the lions at the base of Nelson's Column in London." }
    ]
  },

  // 3. A Landscape of Irregular Form - Rembrandt
  {
    slug: 'rembrandt-a-landscape-of-irregular-form',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this unusual landscape study, notable for its unconventional composition that departs from standard landscape formats. The irregular shape suggests it may have been a preparatory study or an experimental work exploring atmospheric effects in the Dutch countryside.</p>
<p>Rembrandt painted relatively few pure landscapes, making this work particularly interesting to scholars. Unlike his polished portraits and biblical scenes, landscape studies reveal his spontaneous approach to nature. The painting is displayed in its original location at the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam, where visitors can see it in the room where he likely created it.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/rembrandt-house-museum\"><strong>Rembrandt House Museum</strong></a> in Amsterdam, displayed in the original room where <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> likely painted it." },
      { question: "Why is this painting unusual?", answer: "Its <strong>irregular shape</strong> suggests an experimental work or study. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> painted few pure <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, focusing mainly on portraits and biblical subjects." },
      { question: "What is the Rembrandt House Museum?", answer: "The <a href=\"/museum/rembrandt-house-museum\"><strong>Rembrandt House Museum</strong></a> is the artist's actual Amsterdam residence from 1639 to 1658, now restored and open to visitors." }
    ]
  },

  // 4. A Lane near Dedham - Constable
  {
    slug: 'john-constable-a-lane-near-dedham',
    description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> painted this scene of the Suffolk countryside near his childhood home. A country lane winds through lush summer foliage, with glimpses of sky visible through the trees. The composition captures the English landscape with the freshness and naturalism that became Constable's hallmark.</p>
<p>Constable grew up in Dedham Vale, on the border of Suffolk and Essex, and painted its scenery throughout his career. "These scenes made me a painter," he wrote. The work demonstrates his direct observation of nature, painted outdoors to capture authentic effects of light and atmosphere. It's now at the <a href="/museum/yale-center-for-british-art"><strong>Yale Center for British Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/yale-center-for-british-art\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut. The museum has an extensive collection of British <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." },
      { question: "Who painted A Lane near Dedham?", answer: "<a href=\"/artist/john-constable\"><strong>John Constable</strong></a> created this work, depicting the Suffolk countryside where he grew up. He's considered one of the greatest English <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> landscape painters." },
      { question: "What is Dedham Vale?", answer: "<strong>Dedham Vale</strong> is an area on the Suffolk-Essex border known as \"Constable Country.\" <a href=\"/artist/john-constable\"><strong>Constable</strong></a> painted its landscapes throughout his life, making it one of the most depicted regions in British art." }
    ]
  },

  // 4. A Lane near Flatford - Constable
  {
    slug: 'john-constable-a-lane-near-flatford',
    description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> painted this vigorous oil sketch around 1810-11, probably on Fen Lane near Flatford in Suffolk. The brushwork suggests scudding clouds and trees bristling in the wind. Dark blues and greens capture the changeable English weather with spontaneous energy.</p>
<p>Flatford Mill belonged to Constable's father, and the surrounding landscape became central to the artist's work. This sketch shows Constable working directly from nature, capturing fleeting atmospheric effects rather than composing idealized views. The immediacy of such studies influenced later <a href="/movement/impressionism"><strong>Impressionist</strong></a> painters. The work is at <a href="/museum/tate-britain"><strong>Tate</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is A Lane near Flatford?", answer: "The painting is at <a href=\"/museum/tate-britain\"><strong>Tate</strong></a> in London. It's an oil sketch on paper mounted on canvas, showing <a href=\"/artist/john-constable\"><strong>Constable's</strong></a> direct approach to nature." },
      { question: "What is Flatford?", answer: "<strong>Flatford</strong> is a hamlet in Suffolk where <a href=\"/artist/john-constable\"><strong>Constable's</strong></a> father owned a mill. The area inspired many of his most famous paintings, including The Hay Wain." },
      { question: "How big is this painting?", answer: "It measures about 20 x 30 cm (8 x 12 inches), a typical size for <a href=\"/artist/john-constable\"><strong>Constable's</strong></a> outdoor oil sketches." }
    ]
  },

  // 5. A Lean Diet with Cooking Utensils - Chardin
  {
    slug: 'jean-baptiste-simeon-chardin-a-lean-diet-with-cooking-utensils',
    description: `<p><a href="/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Siméon Chardin</strong></a> painted this kitchen still life in 1731, arranging humble cooking vessels and simple foods with quiet dignity. A copper pot, ceramic dishes, and everyday utensils rest on a stone ledge, their textures rendered with remarkable precision.</p>
<p>Chardin specialized in still lifes that found beauty in ordinary domestic objects. His careful observation of light and surface, combined with balanced compositions, elevated kitchen scenes to fine art. The title refers to a meatless meal, perhaps for a fast day. The painting demonstrates <a href="/movement/rococo"><strong>Rococo</strong></a> refinement applied to modest subjects. It hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris, which holds several important works by <a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a>." },
      { question: "Who painted this still life?", answer: "<a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Jean-Baptiste-Siméon Chardin</strong></a> created this in 1731. He was the leading French still life painter of the 18th century." },
      { question: "What does 'lean diet' mean?", answer: "A <strong>lean diet</strong> refers to a meatless meal, typical during religious fasting periods. <a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> depicted simple foods and cooking utensils with the same care others gave to luxurious subjects." }
    ]
  },

  // 6. A Maid Asleep - Vermeer
  {
    slug: 'johannes-vermeer-a-maid-asleep',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this scene around 1656-57, showing a young woman dozing at a table beside a wine glass. A half-open door leads to a distant, light-filled room. The work is among Vermeer's earliest genre paintings, marking his transition from religious subjects to domestic interiors.</p>
<p>X-rays reveal Vermeer originally included a man in the doorway and a dog, both later painted out. This editing heightened the painting's ambiguity. Is she drowsy from wine? Dreaming of an absent lover? The <strong>rumpled tablecloth</strong> and toppled glass hint at recent activity. The work is at the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where is A Maid Asleep displayed?", answer: "It's at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. The terms of the donor's bequest prevent it from being loaned elsewhere." },
      { question: "What did Vermeer paint over?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> originally included a <strong>man in the doorway</strong> and a dog, which he later painted out. This editing removed narrative elements and increased the painting's psychological mystery." },
      { question: "When was this painted?", answer: "Around 1656-57, making it one of <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> earliest genre scenes. The deep <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>reds</strong></a> and <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a> reflect the influence of Nicolaes Maes." }
    ]
  },

  // 7. A Male Nude - Cézanne
  {
    slug: 'paul-cezanne-a-male-nude',
    description: `<p><a href="/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted this academic figure study during his early training, depicting a standing male nude in a classical pose. The work shows Cézanne grappling with traditional technique before developing his revolutionary approach to form and color.</p>
<p>Academic training required artists to master the human figure through careful observation. This study demonstrates Cézanne's solid grounding in anatomy and modeling, skills he would later transform in his distinctive style. The painting is at the <a href="/museum/fitzwilliam-museum"><strong>Fitzwilliam Museum</strong></a> at Cambridge University, offering insight into the formative years of a <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> master.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/fitzwilliam-museum\"><strong>Fitzwilliam Museum</strong></a> at the University of Cambridge in England." },
      { question: "When did Cézanne paint this?", answer: "This is an early work from <a href=\"/artist/paul-cezanne\"><strong>Cézanne's</strong></a> academic training period, before he developed his <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style." },
      { question: "Why did artists paint nude studies?", answer: "Academic tradition required mastering the <strong>human figure</strong> before other subjects. Even revolutionary painters like <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a> began with classical figure drawing." }
    ]
  },

  // 8. A Man and a Woman Seated by a Virginal - Metsu
  {
    slug: 'gabriel-metsu-a-man-and-a-woman-seated-by-a-virginal',
    description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted this elegant musical scene around 1665, showing a woman at a virginal handing a musical score to her companion. Instead of his violin bow, he offers her a glass of wine. The exchange suggests flirtation beneath the surface of polite music-making.</p>
<p>A painting on the back wall, partially covered by a curtain, depicts a rowdy Twelfth Night celebration. This detail hints that the refined scene before us might lead to something less chaste. Biblical inscriptions on the instrument warn against losing virtue. Metsu was a master of such layered domestic scenes. The work hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, which acquired it in 1871." },
      { question: "What is a virginal?", answer: "A <strong>virginal</strong> is a small keyboard instrument popular in 17th-century Holland. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> often included musical instruments as symbols of harmony and romantic courtship." },
      { question: "What do the inscriptions mean?", answer: "Biblical texts from <strong>Psalms</strong> warn against loss of virtue while also praising worship through music. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> balanced moralizing with playful ambiguity." }
    ]
  },

  // 9. A Man in a Room - Rembrandt
  {
    slug: 'rembrandt-a-man-in-a-room',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this study of a figure in an interior, using his characteristic play of light and shadow. The composition shows a man absorbed in thought or activity, surrounded by the subdued atmosphere of a domestic space.</p>
<p>Rembrandt's interest in capturing psychological states through lighting and pose appears throughout his work. This painting demonstrates his ability to transform ordinary moments into contemplative studies of human presence. The work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, home to the world's largest collection of Rembrandt paintings.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds the largest collection of <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> paintings in the world." },
      { question: "What style is this painting?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a>, characterized by <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> signature use of chiaroscuro (dramatic light and shadow)." },
      { question: "Who painted this work?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this intimate interior scene, one of many studies of figures in domestic settings throughout his career." }
    ]
  },

  // 10. A Man in Armour - Rembrandt
  {
    slug: 'rembrandt-a-man-in-armour',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this figure in armor in 1655, showing a young man weighed down by martial equipment. The subject's pensive expression and the obsolete style of the armor suggest a figure from history or legend, perhaps Alexander the Great or a classical hero.</p>
<p>Rembrandt collected armor and costumes, using them as props in his paintings. The metalwork gleams against a dark background, demonstrating his mastery of rendering reflective surfaces. Scholars debate whether the subject's youthful features and pearl earring might indicate a female figure like Athena. The painting is at the <a href="/museum/gulbenkian"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon.</p>`,
    faqs: [
      { question: "Where is A Man in Armour displayed?", answer: "It's at the <a href=\"/museum/gulbenkian\"><strong>Calouste Gulbenkian Museum</strong></a> in Lisbon, Portugal, part of their exceptional collection of <a href=\"/movement/baroque\"><strong>Baroque</strong></a> paintings." },
      { question: "Who is depicted in the painting?", answer: "The identity is debated. Scholars have suggested <strong>Alexander the Great</strong>, Mars, or even the goddess Athena. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> left the subject deliberately ambiguous." },
      { question: "When was this painted?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created this work in 1655, using armor from his personal collection of historical props and costumes." }
    ]
  },

  // 11. A Man in the Window - Van Ostade
  {
    slug: 'adriaen-van-ostade-a-man-in-the-window',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this genre scene showing a man leaning from a window, a popular composition in Dutch Golden Age painting. The figure looks out at the viewer with casual directness, framed by the architectural element that creates a picture-within-a-picture effect.</p>
<p>Van Ostade specialized in scenes of peasant life, often depicting taverns and humble domestic interiors. This window motif allowed artists to explore boundaries between public and private space. The informal subject matter and warm palette reflect the Dutch taste for everyday scenes painted with technical refinement.</p>`,
    faqs: [
      { question: "Who painted A Man in the Window?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> was a Dutch Golden Age painter who specialized in peasant scenes and tavern interiors." },
      { question: "What style is this painting?", answer: "It's a Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre scene. Van Ostade was influenced by Rembrandt and known for warm <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a> and lively characterization." },
      { question: "Why were window scenes popular?", answer: "The <strong>window motif</strong> created an engaging composition and explored boundaries between viewer and subject. Many Dutch artists used this device for informal portraits and genre scenes." }
    ]
  },

  // 12. A Man Making Water - Rembrandt
  {
    slug: 'rembrandt-a-man-making-water',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this frank etching showing a peasant urinating against a wall. The subject was common in Dutch art, appearing in paintings by genre specialists and even in the backgrounds of Avercamp's winter landscapes.</p>
<p>Such scenes reflected Dutch realism and willingness to depict all aspects of daily life. Rembrandt treated the figure with the same technical skill he applied to biblical scenes, using bold lines and atmospheric shading. The work demonstrates the breadth of subjects considered acceptable in Golden Age Dutch art. It's in the collection of the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>.</p>`,
    faqs: [
      { question: "Where is this work held?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, part of their extensive print collection by <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a>." },
      { question: "Why did Rembrandt depict this subject?", answer: "Dutch realism embraced <strong>all aspects of daily life</strong>. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> and other artists included such scenes as part of their truthful observation of the world." },
      { question: "What style is this?", answer: "It's a Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre etching. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> was one of the greatest printmakers in history, creating nearly 300 etchings." }
    ]
  },

  // 13. A Man Playing Cards - Rembrandt
  {
    slug: 'rembrandt-a-man-playing-cards',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted this card player with characteristic attention to gesture and expression. The figure concentrates on his hand, caught in a moment of thought or strategy. Light falls dramatically across the scene in Rembrandt's signature chiaroscuro style.</p>
<p>Card games were popular subjects in Dutch genre painting, often carrying moral overtones about chance and fortune. Rembrandt brought psychological depth to such scenes, transforming everyday activities into studies of human nature. The painting is at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, which holds major works by <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a>." },
      { question: "What style is this painting?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting with <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> characteristic use of dramatic lighting." },
      { question: "Why were card games popular subjects?", answer: "<strong>Card games</strong> symbolized chance and fortune in Dutch art. Artists depicted gamblers as morality tales or simply as engaging scenes of daily life." }
    ]
  },

  // 14. A Man Seated at a Table Covered with Books - Rembrandt
  {
    slug: 'rembrandt-a-man-seated-at-a-table-covered-with-books',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this image of a scholar at his studies in 1636, a subject he returned to throughout his career. The figure sits absorbed in reading, surrounded by the tools of intellectual life. Light falls across the scene with Rembrandt's characteristic drama.</p>
<p>Scholars and philosophers in contemplation fascinated Rembrandt, reflecting the importance of learning in Dutch Golden Age culture. The melancholic pose and atmospheric setting evoke deep thought and the pleasures of study. The work demonstrates Rembrandt's ability to transform quiet moments into compelling images. It's at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
      { question: "Why did Rembrandt paint scholars?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> was drawn to <strong>contemplative figures</strong> and the life of the mind. Such subjects reflected Dutch society's high regard for learning and intellectual achievement." },
      { question: "When was this painted?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created this work in 1636, during his successful Amsterdam period when he was producing portraits and genre scenes." }
    ]
  },

  // 15. A Man with a Crucifix and Chain - Rembrandt
  {
    slug: 'rembrandt-a-man-with-a-crucifix-and-chain',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait of a man wearing religious emblems, the crucifix and chain signaling his Catholic faith. The subject emerges from darkness, his face and accessories illuminated with careful attention to their symbolic weight.</p>
<p>In Protestant Holland, Catholics were a minority who practiced their faith privately. This portrait may represent a priest or devout layman. Rembrandt's treatment emphasizes human dignity regardless of religious affiliation. The work hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, part of their Dutch Golden Age collection." },
      { question: "What do the crucifix and chain signify?", answer: "They indicate the subject's <strong>Catholic faith</strong>. In Protestant Holland, Catholics practiced privately, making such religious symbols notable." },
      { question: "What style is this portrait?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> portraiture, using <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> characteristic chiaroscuro to focus attention on face and symbolic details." }
    ]
  },

  // 16. A Man with Curly Hair - Rembrandt
  {
    slug: 'rembrandt-a-man-with-curly-hair',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this study of a young man whose distinctive curly hair gives the work its title. The subject's face emerges from shadow with the psychological intensity characteristic of Rembrandt's portraits and character studies.</p>
<p>Throughout his career, Rembrandt painted numerous <strong>tronies</strong>, studies of expressive faces that were not formal portraits but explorations of character types and lighting effects. Such works allowed experimentation with technique while producing saleable pictures. The painting is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds the world's largest collection of <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> paintings." },
      { question: "What is a tronie?", answer: "A <strong>tronie</strong> is a character study or expressive head, not a formal portrait. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> painted many such works to explore lighting and expression." },
      { question: "When was this painted?", answer: "The work dates from <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> mature period. Such studies were popular with collectors throughout his career." }
    ]
  },

  // 17. A Moonlit Lane - Grimshaw
  {
    slug: 'moonlit-lane-grimshaw',
    description: `<p><a href="/artist/atkinson-grimshaw"><strong>John Atkinson Grimshaw</strong></a> painted this nocturnal scene showing a country lane bathed in moonlight. Bare trees silhouette against the luminous sky while pools of light reflect on the wet road. The composition captures the atmospheric effects that made Grimshaw famous.</p>
<p>Grimshaw specialized in moonlit scenes, developing techniques to capture the subtle interplay of natural and artificial light. James McNeill Whistler, upon visiting his studio, remarked: "I considered myself the inventor of nocturnes until I saw Grimmy's moonlit pictures." Grimshaw's night scenes remain highly sought by collectors today.</p>`,
    faqs: [
      { question: "Who painted A Moonlit Lane?", answer: "<a href=\"/artist/atkinson-grimshaw\"><strong>John Atkinson Grimshaw</strong></a> was a Victorian painter famous for moonlit landscapes and urban nocturnes. His night scenes influenced many artists." },
      { question: "What is Grimshaw's style?", answer: "He painted in a realistic Victorian style, influenced by the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a>. His detailed nocturnes are almost photographic in their precision." },
      { question: "What made his moonlit paintings special?", answer: "<a href=\"/artist/atkinson-grimshaw\"><strong>Grimshaw</strong></a> mastered the subtle effects of <strong>moonlight</strong> on wet surfaces, bare branches, and atmospheric haze. Even Whistler praised his nocturnal scenes." }
    ]
  },

  // 18. A Mortally Wounded Brigand Quenches his Thirst - Delacroix
  {
    slug: 'eugene-delacroix-a-mortally-wounded-brigand-quenches-his-thirst',
    description: `<p><a href="/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> painted this dramatic scene of a dying outlaw desperately drinking water. The figure's powerful musculature and anguished expression exemplify Romantic interest in extreme emotional and physical states.</p>
<p>Delacroix often depicted brigands and exotic subjects, drawn to themes of violence, passion, and death. The composition's diagonal thrust and rich color demonstrate his departure from Neoclassical restraint. Such subjects allowed exploration of the human body in crisis. The painting is at the <a href="/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland, which holds important <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> works." },
      { question: "What movement does this represent?", answer: "It's French <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>. <a href=\"/artist/eugene-delacroix\"><strong>Delacroix</strong></a> favored dramatic subjects and emotional intensity over Neoclassical calm." },
      { question: "Why did Delacroix paint brigands?", answer: "<strong>Brigands</strong> and outlaws represented freedom from social constraints. <a href=\"/artist/eugene-delacroix\"><strong>Delacroix</strong></a> used such figures to explore extreme physical and emotional states." }
    ]
  },

  // 19. A Mulatto Woman (Portrait of Aspasie) - Delacroix
  {
    slug: 'eugene-delacroix-a-mulatto-woman',
    description: `<p><a href="/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> painted this portrait around 1821-24, depicting a woman of mixed race with directness and dignity. She meets the viewer's gaze steadily, her partially exposed chest rendered with the warm flesh tones Delacroix admired in Rubens.</p>
<p>The painting is also known as "Portrait of Aspasie," though little is known about the sitter. Delacroix's treatment avoids the exoticism common in such subjects, presenting a compelling individual rather than a type. The work demonstrates his interest in diverse subjects and rich color harmonies. It hangs at the <a href="/museum/musee-fabre"><strong>Musée Fabre</strong></a> in Montpellier.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/musee-fabre\"><strong>Musée Fabre</strong></a> in Montpellier, France. It was recently loaned to major exhibitions at the Louvre and Metropolitan Museum." },
      { question: "Who is the woman in the portrait?", answer: "She's identified as <strong>Aspasie</strong>, though little is known about her. <a href=\"/artist/eugene-delacroix\"><strong>Delacroix</strong></a> depicted her with unusual dignity for the period." },
      { question: "What style is this painting?", answer: "It's French <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>, showing <a href=\"/artist/eugene-delacroix\"><strong>Delacroix's</strong></a> interest in color inspired by Rubens and Venetian masters." }
    ]
  },

  // 20. A Musician - Albert Joseph Moore
  {
    slug: 'albert-joseph-moore-a-musician',
    description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this graceful figure in classical drapery, one of many similar compositions he created throughout his career. A young woman in flowing robes holds or plays a musical instrument, posed with the decorative elegance Moore favored.</p>
<p>Moore was part of the Aesthetic Movement, which valued beauty for its own sake. His paintings often depict women in timeless classical settings, with careful attention to harmonious color and flowing fabric. Such works influenced interior decoration and design. The painting is at the <a href="/museum/yale-center-for-british-art"><strong>Yale Center for British Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is A Musician displayed?", answer: "It's at the <a href=\"/museum/yale-center-for-british-art\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut." },
      { question: "What is the Aesthetic Movement?", answer: "The <strong>Aesthetic Movement</strong> valued beauty for its own sake, often using classical imagery. <a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> was a leading figure in this Victorian art movement." },
      { question: "What style are Moore's paintings?", answer: "<a href=\"/artist/albert-joseph-moore\"><strong>Moore</strong></a> painted decorative classical scenes with flowing drapery and harmonious <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>color</strong></a>. His work influenced design and interior decoration." }
    ]
  },

  // 21. A Northern Idyll - Korovin
  {
    slug: 'konstantin-korovin-a-northern-idyll',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this scene of Russian northern life, capturing the distinctive light and landscape of the region. His loose brushwork and attention to atmospheric effects reflect his position as Russia's leading Impressionist painter.</p>
<p>Korovin traveled extensively in northern Russia and Scandinavia, drawn to the region's unique qualities of light. He combined French Impressionist techniques learned in Paris with distinctly Russian subjects. The painting is at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow, which holds the world's finest collection of Russian art.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia's premier collection of Russian art." },
      { question: "Who painted this work?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Konstantin Korovin</strong></a> was called \"the greatest exponent of Russian Impressionism.\" He brought French techniques to Russian subjects." },
      { question: "What style is this painting?", answer: "It's Russian <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, combining loose brushwork with attention to <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> and atmospheric light." }
    ]
  },

  // 22. A Painter - Meissonier
  {
    slug: 'ernest-meissonier-a-painter',
    description: `<p><a href="/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted this meticulously detailed scene of an artist at work in 1855. The painter, dressed in 18th-century costume, works on a small canvas depicting a mythological subject. Every element is rendered with the miniaturist precision for which Meissonier was famous.</p>
<p>Meissonier was celebrated for his astonishing technical skill, with critics examining his paintings under magnifying glasses to marvel at the detail. His historical genre scenes commanded enormous prices in his lifetime. The painting is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is A Painter displayed?", answer: "It's at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio, which acquired it in 1982." },
      { question: "Why is the painter in period costume?", answer: "The <strong>18th-century costume</strong> transforms the scene into historical fiction. <a href=\"/artist/ernest-meissonier\"><strong>Meissonier</strong></a> often set his genre scenes in earlier centuries." },
      { question: "What was Meissonier known for?", answer: "<a href=\"/artist/ernest-meissonier\"><strong>Meissonier</strong></a> was famous for minute detail and scrupulous technique. John Ruskin examined his work under magnification, marveling at his precision." }
    ]
  },

  // 23. A Panoramic Winter Landscape with Figures - Avercamp
  {
    slug: 'hendrick-avercamp-a-panoramic-winter-landscape-with-a-multitude-of-f',
    description: `<p><a href="/artist/hendrick-avercamp"><strong>Hendrick Avercamp</strong></a> painted this expansive winter scene showing dozens of figures on a frozen waterway. Skaters glide across the ice while others play games, pull sledges, or simply enjoy the cold weather. The composition captures the communal spirit of Dutch winters.</p>
<p>Avercamp was the first Dutch artist to specialize in winter landscapes, creating a genre that remained popular for generations. Known as "the Mute of Kampen" due to his inability to speak, he observed his fellow citizens with keen attention. The work demonstrates his mastery of aerial perspective, with colors fading toward the misty horizon.</p>`,
    faqs: [
      { question: "Who painted this winter scene?", answer: "<a href=\"/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a> was the first Dutch artist to specialize in winter landscapes. He was deaf and mute, known as \"the Mute of Kampen.\"" },
      { question: "What period does this represent?", answer: "It's from the Dutch Golden Age, painted during the <strong>Little Ice Age</strong> when winters were severe enough for waterways to freeze solid." },
      { question: "What style is this painting?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> landscape painting. <a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> used aerial perspective and narrative detail in his crowded winter scenes." }
    ]
  },

  // 24. A Parable of Love - Rossetti
  {
    slug: 'dante-gabriel-rossetti-a-parable-of-love',
    description: `<p><a href="/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a> painted this allegorical work exploring themes of love and devotion. The composition features the rich colors and decorative elements characteristic of his mature style, with figures posed in meaningful relationship to one another.</p>
<p>Rossetti was a founder of the <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a> and later developed a distinctive style featuring sensuous women in symbolic settings. His paintings often drew on literary sources and personal mythology. The work is at the <a href="/museum/birmingham-museum-art-gallery"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/birmingham-museum-art-gallery\"><strong>Birmingham Museum and Art Gallery</strong></a>, which holds major works by <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> artists." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> helped found the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a>. His later work developed a more personal symbolic style." },
      { question: "What are Rossetti's paintings about?", answer: "<a href=\"/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> often explored themes of <strong>love, beauty, and mortality</strong> through allegorical imagery and literary references." }
    ]
  },

  // 25. A Parisian Cafe - Korovin
  {
    slug: 'parisian-cafe-korovin',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this vibrant scene of Parisian café life, capturing the energy and color of the French capital. Figures gather at tables while the city's lights and atmosphere create a sense of festive modernity.</p>
<p>Paris transformed Korovin's art. "Paris was a shock for me... Impressionists... in them I found everything I was scolded for back home in Moscow," he wrote. His café scenes combine Russian sensibility with French technique. The painting is at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, which holds the finest collection of Russian art." },
      { question: "What influenced Korovin's style?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Korovin</strong></a> was deeply influenced by French <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> after visiting Paris in 1885. He became Russia's leading Impressionist painter." },
      { question: "Why did Korovin paint Parisian scenes?", answer: "<strong>Paris</strong> fascinated <a href=\"/artist/konstantin-korovin\"><strong>Korovin</strong></a> as a center of modern art and cosmopolitan life. He painted many views of its cafés and boulevards." }
    ]
  },

  // 26. A Peasant Carrying Milk Pales - Rembrandt
  {
    slug: 'rembrandt-a-peasant-carrying-milk-pales',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted this figure of rural labor with characteristic attention to gesture and movement. A peasant carries milk pails, the weight and balance of the load suggested through careful observation of posture.</p>
<p>Such studies of working people reflect Rembrandt's broad interest in humanity at all levels of society. The work may be an etching or drawing rather than a painting, as Rembrandt produced hundreds of prints depicting everyday subjects. It's in the collection of the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this work?", answer: "It's at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London, part of their Dutch Golden Age collection." },
      { question: "Why did Rembrandt depict peasants?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> was interested in <strong>all levels of society</strong>. His studies of working people show the same careful observation he applied to wealthy patrons." },
      { question: "What medium is this work?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> worked in oil painting, etching, and drawing. He created nearly 300 etchings and over 1,000 drawings depicting diverse subjects." }
    ]
  },

  // 27. A Picnic - Korovin
  {
    slug: 'konstantin-korovin-a-picnic',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this outdoor leisure scene with the loose brushwork and attention to light effects he learned from French Impressionism. Figures gather in a landscape setting, enjoying food and companionship.</p>
<p>Korovin often depicted scenes of Russian life with Impressionist technique, creating a distinctive fusion of French style and Russian subject matter. Such works celebrate simple pleasures and the beauty of outdoor settings. The painting is at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is A Picnic displayed?", answer: "It's at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia's premier collection of national art." },
      { question: "What style is this painting?", answer: "It's Russian <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, combining French technique with Russian subjects and sensibility." },
      { question: "Who painted this work?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Konstantin Korovin</strong></a> was Russia's leading Impressionist, known for colorful scenes of both Russian and Parisian life." }
    ]
  },

  // 28. A Pompeian Bath - Godward
  {
    slug: 'john-william-godward-a-pompeian-bath',
    description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted this scene of a nude woman in a classical bath in 1890. The figure stands beneath flowing water in an elegant marble setting, posed with the grace that characterized Godward's idealized ancient world.</p>
<p>Godward was a leading Victorian Neoclassicist, sometimes called part of the "Marble School" for his detailed renderings of stone surfaces. His paintings depict beautiful women in Greco-Roman settings, combining sensuality with archaeological detail. The work is in a private collection.</p>`,
    faqs: [
      { question: "Who painted A Pompeian Bath?", answer: "<a href=\"/artist/john-william-godward\"><strong>John William Godward</strong></a> was a Victorian Neoclassicist famous for depicting women in ancient settings with marble architectural details." },
      { question: "What style is this painting?", answer: "It's Victorian <strong>Neoclassicism</strong>, influenced by Sir Lawrence Alma-Tadema. <a href=\"/artist/john-william-godward\"><strong>Godward</strong></a> combined classical subjects with sensuous rendering." },
      { question: "Where is this painting?", answer: "It's in a <strong>private collection</strong>. <a href=\"/artist/john-william-godward\"><strong>Godward's</strong></a> works remain popular with collectors of Victorian art." }
    ]
  },

  // 29. A Pompeian Lady - Godward
  {
    slug: 'john-william-godward-a-pompeian-lady',
    description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted this elegant figure in classical dress, posed in an idealized ancient setting. The woman's flowing robes and the marble architecture surrounding her evoke the splendor of ancient Pompeii before its destruction.</p>
<p>Godward specialized in such scenes, which were hugely popular during the late Victorian era. His meticulous attention to fabric, marble, and flesh tones demonstrates the technical skill that made him one of the era's most successful painters of classical subjects. The work is in a private collection.</p>`,
    faqs: [
      { question: "Who painted A Pompeian Lady?", answer: "<a href=\"/artist/john-william-godward\"><strong>John William Godward</strong></a> specialized in paintings of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in ancient classical settings, often evoking Pompeii or ancient Greece." },
      { question: "What influenced Godward's paintings?", answer: "He was influenced by <strong>Sir Lawrence Alma-Tadema</strong> and the archaeological discoveries at Pompeii and Herculaneum, which fascinated Victorian audiences." },
      { question: "Where is this painting?", answer: "It's in a <strong>private collection</strong>. <a href=\"/artist/john-william-godward\"><strong>Godward's</strong></a> paintings of classical beauties remain highly collectible." }
    ]
  },

  // 30. A Poor Shot - Korovin
  {
    slug: 'konstantin-korovin-a-poor-shot',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this genre scene depicting a hunting mishap, combining narrative interest with his characteristic colorful brushwork. The subject reflects the Russian love of outdoor pursuits and country life.</p>
<p>Korovin was versatile, painting everything from Parisian cafés to Russian countryside scenes. His loose, spontaneous technique brought energy to traditional subjects. The painting is at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, which holds an extensive collection of <a href=\"/artist/konstantin-korovin\"><strong>Korovin's</strong></a> work." },
      { question: "What style is this painting?", answer: "It's Russian <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> applied to a genre scene of country life." },
      { question: "What subjects did Korovin paint?", answer: "<a href=\"/artist/konstantin-korovin\"><strong>Korovin</strong></a> painted diverse subjects including <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, café scenes, theater designs, and Russian country life." }
    ]
  },

  // 31. A Portrait of Amelina Dufaud - Bouguereau
  {
    slug: 'william-adolphe-bouguereau-a-portrait-of-amelina-dufaud',
    description: `<p><a href="/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted this portrait with the polished technique that made him one of the most successful French Academic painters of the 19th century. The subject is rendered with careful attention to flesh tones and fabric, exemplifying his mastery of classical portrait methods.</p>
<p>Bouguereau was enormously successful in his lifetime, commanding high prices for both portraits and mythological subjects. His smooth, refined technique represented the height of Academic painting. The work is in a private collection.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/william-adolphe-bouguereau\"><strong>William-Adolphe Bouguereau</strong></a> was a leading French Academic painter, famous for polished technique and classical subjects." },
      { question: "What style is this painting?", answer: "It's French <strong>Academic Art</strong>, characterized by refined technique, smooth finish, and classical influences." },
      { question: "Where is this portrait?", answer: "It's in a <strong>private collection</strong>. <a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau's</strong></a> <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> were highly valued in his lifetime and remain collectible." }
    ]
  },

  // 32. A Portrait of Eugene Bouguereau - Bouguereau
  {
    slug: 'william-adolphe-bouguereau-a-portrait-of-eugene-bouguereau',
    description: `<p><a href="/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted this portrait of Eugene, likely a family member sharing his surname. The work demonstrates the careful observation and refined technique that characterized Bouguereau's approach to portraiture.</p>
<p>Beyond his famous mythological and peasant subjects, Bouguereau was an accomplished portrait painter whose clients included wealthy patrons across Europe and America. His ability to render flesh and fabric with photographic precision was unmatched among his contemporaries. The work is in a private collection.</p>`,
    faqs: [
      { question: "Who is Eugene Bouguereau?", answer: "<strong>Eugene Bouguereau</strong> was likely a family member of the artist. <a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> painted family members throughout his career." },
      { question: "What made Bouguereau's portraits distinctive?", answer: "<a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> combined precise technique with classical composition, creating refined <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> that appealed to wealthy patrons." },
      { question: "Where is this painting?", answer: "It's in a <strong>private collection</strong>. Many <a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> portraits remain with private collectors rather than museums." }
    ]
  },

  // 33. A Road in Naples - Caillebotte
  {
    slug: 'gustave-caillebotte-a-road-in-naples',
    description: `<p><a href="/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this view during his travels in Italy, capturing a street scene in Naples. The composition applies his distinctive approach to urban subjects, combining careful perspective with atmospheric observation.</p>
<p>Though best known for his Parisian scenes like "Paris Street; Rainy Day," Caillebotte traveled and painted throughout Europe. His wealth allowed him to support fellow <a href="/movement/impressionism"><strong>Impressionists</strong></a> financially while developing his own distinctive style. The work is in a private collection.</p>`,
    faqs: [
      { question: "Who painted A Road in Naples?", answer: "<a href=\"/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> was a French <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> known for urban scenes, particularly of Paris. He also painted during travels abroad." },
      { question: "What style is this painting?", answer: "It's <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> applied to an Italian subject. <a href=\"/artist/gustave-caillebotte\"><strong>Caillebotte</strong></a> was known for careful perspective and urban compositions." },
      { question: "Where is this painting?", answer: "It's in a <strong>private collection</strong>. <a href=\"/artist/gustave-caillebotte\"><strong>Caillebotte's</strong></a> reputation has grown significantly since his death." }
    ]
  },

  // 34. A Roman Beggar Woman - Degas
  {
    slug: 'edgar-degas-a-roman-beggar-woman',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this early work in 1857 during his time in Italy, depicting an elderly woman in poverty. She sits on a threshold, gazing into the distance, surrounded by the meager belongings of her existence. The work shows Degas grappling with traditional subjects before developing his later style.</p>
<p>Degas spent nearly two years in Italy studying Renaissance masters. This portrait of poverty demonstrates his early commitment to honest observation, rendering age and hardship without idealization. With just four colors, he created a powerful image of human dignity. The painting is at the <a href="/museum/birmingham-museum-art-gallery"><strong>Birmingham Museum and Art Gallery</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/birmingham-museum-art-gallery\"><strong>Birmingham Museum and Art Gallery</strong></a> in England, acquired in 1960." },
      { question: "When did Degas paint this?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> created this in 1857 during his Italian travels, before he developed his famous style focused on dancers and Parisian life." },
      { question: "What makes this an early work?", answer: "The subject and approach show <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> studying Old Masters and painting traditional subjects before turning to modern life and <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>." }
    ]
  },

  // 35. A Rough Surf - Richards
  {
    slug: 'rough-surf-richards',
    description: `<p><a href="/artist/william-trost-richards"><strong>William Trost Richards</strong></a> painted this marine scene capturing the power of breaking waves along the American coast. The spray, foam, and motion of the sea are rendered with the near-photographic precision that characterized his mature seascapes.</p>
<p>Richards began as a landscape painter but later specialized in marine subjects, often standing in the water to capture waves at their most dramatic. His luminist approach to light and atmosphere influenced later American marine painters. His works are in major museums including the Metropolitan and National Gallery.</p>`,
    faqs: [
      { question: "Who painted A Rough Surf?", answer: "<a href=\"/artist/william-trost-richards\"><strong>William Trost Richards</strong></a> was an American painter associated with the Hudson River School who later specialized in marine subjects." },
      { question: "What style are Richards' seascapes?", answer: "His marine paintings are <strong>luminist</strong>, emphasizing atmospheric effects and precise observation. He sometimes stood in the water to capture waves accurately." },
      { question: "What subjects did Richards paint?", answer: "<a href=\"/artist/william-trost-richards\"><strong>Richards</strong></a> painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and mountains early in his career, then focused on <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> and marine scenes." }
    ]
  },

  // 36. A Rustic Mill - Bierstadt
  {
    slug: 'albert-bierstadt-a-rustic-mill',
    description: `<p><a href="/artist/albert-bierstadt"><strong>Albert Bierstadt</strong></a> painted this scene of a weathered mill beside a stream, surrounded by lush vegetation. Figures tend to daily chores, adding scale and narrative to the peaceful composition. Sunlight filters through the trees, creating the luminous effects Bierstadt mastered.</p>
<p>Though famous for grand Western <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, Bierstadt also painted intimate rural scenes. His technical skill in rendering light, water, and foliage appears in works of all scales. The painting is in a private collection.</p>`,
    faqs: [
      { question: "Who painted A Rustic Mill?", answer: "<a href=\"/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> was a leading American landscape painter of the Hudson River School, famous for dramatic Western scenery." },
      { question: "What style is this painting?", answer: "It's American <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> landscape painting, showing <a href=\"/artist/albert-bierstadt\"><strong>Bierstadt's</strong></a> mastery of light and atmospheric effects." },
      { question: "Where is this painting?", answer: "It's in a <strong>private collection</strong>. <a href=\"/artist/albert-bierstadt\"><strong>Bierstadt's</strong></a> works remain highly valued by collectors of American art." }
    ]
  },

  // 37. A Scene from The Beggar's Opera - Hogarth
  {
    slug: 'william-hogarth-a-scene-from-the-beggar39s-opera',
    description: `<p><a href="/artist/william-hogarth"><strong>William Hogarth</strong></a> painted this theatrical scene in 1728-29, depicting a moment from John Gay's wildly popular satirical opera. The highwayman Macheath stands in chains between two women who both claim him as husband, while their fathers look on.</p>
<p>This is among the earliest English paintings of a stage performance. Hogarth included portraits of actual actors and audience members, including the Duke of Bolton gazing at actress Lavinia Fenton, with whom he was having an affair. Hogarth painted at least five versions of this scene. This one is at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "This version is at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. Other versions exist at Tate and Yale." },
      { question: "What is The Beggar's Opera?", answer: "John Gay's 1728 <strong>satirical opera</strong> set in London's criminal underworld was hugely popular. It mocked both Italian opera and British politics." },
      { question: "Why is this painting significant?", answer: "<a href=\"/artist/william-hogarth\"><strong>Hogarth</strong></a> was among the first English painters to depict contemporary theater, combining portraiture with theatrical narrative." }
    ]
  },

  // 38. A School Teacher Explaining... - Holbein
  {
    slug: 'hans-holbein-younger-a-school-teacher-explaining-the-meaning-of-a-lette',
    description: `<p><a href="/artist/hans-holbein-the-younger"><strong>Hans Holbein the Younger</strong></a> created this work depicting a teacher instructing workers who cannot read. The scene reflects the importance of literacy and education during the <a href="/movement/renaissance"><strong>Renaissance</strong></a> period when reading was becoming increasingly valued.</p>
<p>Holbein was one of the greatest portrait painters of the 16th century, serving at the court of Henry VIII. His genre scenes and illustrations demonstrate the same precise observation that made his portraits so compelling. The work is at the <a href="/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland.</p>`,
    faqs: [
      { question: "Where is this work displayed?", answer: "It's at the <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland, which holds major works by <a href=\"/artist/hans-holbein-the-younger\"><strong>Holbein</strong></a>." },
      { question: "Who painted this scene?", answer: "<a href=\"/artist/hans-holbein-the-younger\"><strong>Hans Holbein the Younger</strong></a> was a German-Swiss <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> artist famous for portraits at the English court." },
      { question: "What does this scene depict?", answer: "A <strong>teacher explains a letter</strong> to workers who cannot read, reflecting Renaissance interest in education and literacy." }
    ]
  },

  // 39. A Seated Female Nude - Rembrandt
  {
    slug: 'rembrandt-a-seated-female-nude',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this study of a seated nude woman with characteristic honesty and directness. Unlike idealized classical nudes, Rembrandt depicted the actual body before him, with all its individual characteristics.</p>
<p>Rembrandt's nudes were controversial in his time for their realism. He painted flesh as he observed it, not as classical convention dictated. This frank approach influenced later artists seeking to depict the human body truthfully. The painting is at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
    faqs: [
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, which holds major works by <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a>." },
      { question: "How did Rembrandt's nudes differ?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> depicted <strong>real bodies</strong> rather than idealized classical forms, showing flesh with honest observation that shocked some contemporaries." },
      { question: "What style is this painting?", answer: "It's Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a>, using <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> characteristic dramatic lighting and honest approach to the human figure." }
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
