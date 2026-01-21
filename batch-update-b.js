const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'edgar-degas-before-the-race',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured the nervous energy of jockeys preparing for a race in this 1882 work. The scene shows riders on horseback gathered at the starting area, their mounts restless and alert. Degas uses <strong>loose brushwork</strong> to convey movement and atmosphere, with the horses' muscles tensed in anticipation.</p>
<p>Like many of his racing scenes, this painting focuses on the moments before the action begins. The <strong>diagonal composition</strong> draws the eye across the canvas. You can see this work at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Before the Race?", answer: "This painting is displayed at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio, which holds an excellent collection of <strong>Impressionist works</strong>." },
      { question: "Who painted Before the Race?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work in 1882. He was known for his <strong>horse racing scenes</strong> and ballet paintings." }
    ]
  },
  {
    slug: 'william-hogarth-before-the-seduction-and-after',
    description: `<p><a href="/artist/william-hogarth"><strong>William Hogarth</strong></a> created this pair of paintings as a moral narrative in his signature satirical style. The works depict a young woman's seduction, showing the <strong>before and after</strong> of an encounter with consequences. Hogarth's sharp eye for social commentary comes through in every detail.</p>
<p>The paintings function as a warning about virtue and its loss. Hogarth was a master at telling <strong>stories through images</strong>, often criticizing the vices of Georgian society. These works hang at the <a href="/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles.</p>`,
    faqs: [
      { question: "Where is Before the Seduction and After displayed?", answer: "You can view these paintings at the <a href=\"/museum/j-paul-getty-museum-los-angeles-ca-us\"><strong>J. Paul Getty Museum</strong></a> in Los Angeles, California." },
      { question: "Who painted these works?", answer: "<a href=\"/artist/william-hogarth\"><strong>William Hogarth</strong></a> created them. He was an 18th-century English painter known for <strong>moral and satirical works</strong>." }
    ]
  },
  {
    slug: 'rembrandt-beggar-in-a-high-cap-standing',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching showing a standing beggar wearing a distinctive tall cap. The artist's keen observation of Amsterdam's street life comes through in the <strong>detailed rendering</strong> of worn clothing and weathered features. Rembrandt treated his subjects with dignity regardless of their social standing.</p>
<p>This print belongs to Rembrandt's series of beggar studies from his early career. His <strong>etching technique</strong> captures texture and character with remarkable economy of line. The work resides at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Where is this etching held?", answer: "The <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia holds this work in its <strong>extensive prints collection</strong>." },
      { question: "Who created this artwork?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this etching as part of his <strong>beggar series</strong> during the 1630s." }
    ]
  },
  {
    slug: 'rembrandt-beggar-leaning-on-a-stick-facing-left',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this study of a beggar leaning on a walking stick, body angled to the left. The figure's <strong>hunched posture</strong> and ragged clothing tell a story of hardship. Rembrandt's line work captures both form and feeling with characteristic sensitivity.</p>
<p>These beggar etchings served as studies in human expression and condition. The <strong>quick, confident strokes</strong> suggest Rembrandt worked from direct observation on Amsterdam's streets. This print is part of the collection at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where can I see this etching?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London holds this work in its <strong>Dutch prints collection</strong>." },
      { question: "Why did Rembrandt draw beggars?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> studied Amsterdam's poor to sharpen his skills in capturing <strong>human expression and character</strong>." }
    ]
  },
  {
    slug: 'rembrandt-beggar-man-and-beggar-woman-conversing',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted two beggars in conversation in this intimate etching. A man and woman stand together, their <strong>body language suggesting familiarity</strong> and quiet exchange. The artist captures a moment of human connection between people living on society's margins.</p>
<p>Rembrandt's beggar prints demonstrate his belief that all subjects deserve artistic attention. The <strong>delicate linework</strong> and careful composition elevate a street scene into something poignant. Works like this can be studied at the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Who made this etching?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this print as part of his <strong>early 1630s beggar studies</strong>." },
      { question: "Where can I learn more about Rembrandt's prints?", answer: "The <strong>Rembrandt House Museum</strong> in Amsterdam has recreated his printing studio and displays many of his <strong>etchings and studies</strong>." }
    ]
  },
  {
    slug: 'rembrandt-beggar-man-and-woman',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrayed a pair of beggars in this etching, standing together against an undefined background. The <strong>worn clothing and weary postures</strong> suggest lives of hardship, yet Rembrandt renders them with dignity and attention. His empathetic approach set him apart from contemporaries.</p>
<p>These prints circulated widely in Rembrandt's lifetime, prized by collectors for their <strong>technical mastery</strong>. The artist printed works like this in his own studio workshop. Studies of this print exist at the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Who are the subjects of this print?", answer: "Two anonymous <strong>Amsterdam beggars</strong> served as subjects. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> often observed street life for his prints." },
      { question: "What medium is this work?", answer: "This is an <strong>etching</strong>, a printmaking technique where acid bites lines into a metal plate. Rembrandt was a master of the medium." }
    ]
  },
  {
    slug: 'rembrandt-beggar-man-and-woman-behind-a-bank',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> placed two beggars behind an earthen bank in this etching. The raised ground partially conceals the figures, creating an unusual <strong>compositional choice</strong> that adds mystery. The couple appears to shelter or hide, their expressions obscured by shadow.</p>
<p>Rembrandt's beggar etchings vary in approach from straightforward portraits to more <strong>atmospheric scenes</strong> like this one. The artist experimented with plate tone and ink to achieve different effects. This print belongs to the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this etching displayed?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London holds this work among its <strong>Rembrandt print collection</strong>." },
      { question: "When did Rembrandt make these beggar prints?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created most beggar etchings in the <strong>early 1630s</strong> when he was developing his printmaking skills." }
    ]
  },
  {
    slug: 'rembrandt-beggar-seated-warming-his-hands-at-a-chafing-dish',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> captured a cold day in this etching of a beggar warming his hands over a small chafing dish. The <strong>huddled posture</strong> and concentration on the simple heat source convey both physical chill and human resilience. Every line serves the mood.</p>
<p>This print shows Rembrandt's gift for finding meaning in everyday moments. The seated figure becomes <strong>universal in his humanity</strong>. Rembrandt printed many works in his own home, and the <a href="/museum/rembrandt-house-museum"><strong>Rembrandt House Museum</strong></a> in Amsterdam recreates that studio space today.</p>`,
    faqs: [
      { question: "What is a chafing dish?", answer: "A <strong>portable heating vessel</strong> that held hot coals. The poor used them for warmth, which <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> observed on Amsterdam streets." },
      { question: "Where was this print made?", answer: "Rembrandt created etchings at his home studio in Amsterdam, now the <strong>Rembrandt House Museum</strong> where visitors can see his workspace." }
    ]
  },
  {
    slug: 'rembrandt-beggar-with-his-left-hand-extended',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this figure of a beggar reaching out with his left hand, the gesture clear and direct. The subject's <strong>extended palm</strong> asks for charity without shame. Rembrandt's economical lines capture the essential pose and expression.</p>
<p>The artist made numerous studies of beggars in his younger years, building a vocabulary of <strong>human gesture and emotion</strong>. These prints sold well and spread Rembrandt's reputation across Europe. The work is held in a <strong>major prints collection</strong>.</p>`,
    faqs: [
      { question: "Who created this etching?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this print in Amsterdam during the <strong>1630s</strong> as part of his beggar series." },
      { question: "Why are Rembrandt's etchings valued?", answer: "His <strong>technical mastery</strong> and ability to convey emotion through simple lines made his prints highly collectible even during his lifetime." }
    ]
  },
  {
    slug: 'rembrandt-beggar-woman-leaning-on-a-stick',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrayed an elderly woman supporting herself on a walking stick in this etching. Her <strong>bent frame and tired stance</strong> speak of a difficult life. The artist's sensitive line work gives her a quiet dignity despite her circumstances.</p>
<p>Rembrandt's beggar studies reveal his democratic approach to subject matter. Every person deserved <strong>careful artistic attention</strong>. This print belongs to the collection at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Where is this etching held?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London has this print in its <strong>Dutch Old Masters</strong> collection." },
      { question: "What technique did Rembrandt use?", answer: "<strong>Etching</strong> involves drawing on a wax-coated metal plate, then using acid to create grooves that hold ink for printing." }
    ]
  },
  {
    slug: 'felicien-rops-behind-the-scenes',
    description: `<p><a href="/artist/felicien-rops"><strong>Félicien Rops</strong></a> pulled back the curtain on theater life in this work titled Behind the Scenes. The Belgian artist was known for his <strong>provocative imagery</strong> and willingness to depict what polite society ignored. This piece shows the less glamorous reality of stage performance.</p>
<p>Rops worked primarily as a printmaker and illustrator, developing a <strong>distinctive dark aesthetic</strong>. His work influenced Symbolist artists and continues to fascinate viewers today. This piece remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Félicien Rops?", answer: "<a href=\"/artist/felicien-rops\"><strong>Félicien Rops</strong></a> was a 19th-century Belgian artist known for <strong>provocative and satirical works</strong>." },
      { question: "Where is this artwork?", answer: "Behind the Scenes is currently in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'jacques-louis-david-belisarius-begging-for-alms',
    description: `<p><a href="/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> depicted the fallen general Belisarius reduced to begging in this powerful history painting. Once a hero of the Byzantine Empire, Belisarius sits <strong>blind and impoverished</strong>, recognized by a former soldier. The scene carries a warning about fortune's reversals.</p>
<p>David painted this during his rise to prominence as leader of the <strong>Neoclassical movement</strong>. The composition emphasizes moral and civic virtue. You can see this work at the <a href="/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts de Lille</strong></a> in France.</p>`,
    faqs: [
      { question: "Who was Belisarius?", answer: "Belisarius was a <strong>Byzantine general</strong> who legend says was blinded and reduced to begging after falling from favor." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in France holds this <strong>Neoclassical masterpiece</strong>." }
    ]
  },
  {
    slug: 'rembrandt-bellona',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted Bellona, the Roman goddess of war, in full armor with a commanding presence. She holds a shield decorated with a <strong>Medusa head</strong> and wears a plumed helmet. The rich golden tones highlight the metallic surfaces of her armor.</p>
<p>Rembrandt painted several mythological subjects, though he's better known for portraits and biblical scenes. This <strong>bold martial figure</strong> shows his range. The painting hangs at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who is Bellona?", answer: "Bellona was the <strong>Roman goddess of war</strong>, often depicted in armor. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> portrayed her with classical attributes." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg displays this work in its <strong>Dutch Golden Age collection</strong>." }
    ]
  },
  {
    slug: 'john-martin-belshazzar39s-feast',
    description: `<p><a href="/artist/john-martin"><strong>John Martin</strong></a> painted this dramatic scene from the Book of Daniel. King Belshazzar's feast is interrupted by a <strong>supernatural hand</strong> writing a prophecy of doom on the wall. Martin fills the canvas with vast architecture and tiny terrified figures.</p>
<p>Martin specialized in <strong>apocalyptic biblical scenes</strong> with overwhelming scale. Lightning illuminates the great hall as chaos erupts among the revelers. The work hangs at the <a href="/museum/yale-centre-for-british-art-yale-university-new-ha"><strong>Yale Center for British Art</strong></a> in New Haven.</p>`,
    faqs: [
      { question: "What story does this depict?", answer: "The <strong>biblical tale</strong> from Daniel where a mysterious hand writes prophecy during Belshazzar's feast, predicting Babylon's fall." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut displays this work." }
    ]
  },
  {
    slug: 'jacob-van-ruisdael-bentheim-castle',
    description: `<p><a href="/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> painted Bentheim Castle rising above a rocky landscape. The fortress sits dramatically atop a hill, surrounded by <strong>dense forest and dramatic sky</strong>. Ruisdael actually visited this German castle and made several versions of the scene.</p>
<p>The painting shows Ruisdael's mastery of <strong>atmospheric landscape</strong>. Clouds build overhead while light catches the castle walls. Versions of this subject exist at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> and National Gallery of Ireland.</p>`,
    faqs: [
      { question: "Is Bentheim Castle real?", answer: "Yes, <strong>Bentheim Castle</strong> is a real fortress in Germany. <a href=\"/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> visited and painted it multiple times." },
      { question: "Where can I see versions of this painting?", answer: "The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> and National Gallery of Ireland both hold <strong>versions of this subject</strong>." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-big-fishes-eat-small-fishes',
    description: `<p><a href="/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> designed this allegorical print showing a giant fish being cut open to reveal smaller fish inside. The smaller fish in turn have <strong>even tinier fish</strong> in their mouths. It illustrates the proverb about the powerful consuming the weak.</p>
<p>The design was later engraved by Pieter van der Heyden. Bruegel's <strong>moralizing imagery</strong> draws from Netherlandish proverb traditions. The work is held at the <a href="/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna.</p>`,
    faqs: [
      { question: "What does this image mean?", answer: "It illustrates the proverb that <strong>big fish eat small fish</strong>, meaning the powerful exploit the weak. A <a href=\"/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> specialty." },
      { question: "Where is this print displayed?", answer: "The <a href=\"/museum/albertina-vienna-austria\"><strong>Albertina</strong></a> in Vienna holds this work in its <strong>extensive prints collection</strong>." }
    ]
  },
  {
    slug: 'gustave-caillebotte-billiards',
    description: `<p><a href="/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> captured a scene of bourgeois leisure in this painting of men playing billiards. The green baize table dominates the composition while players lean and aim their <strong>cue sticks</strong>. Caillebotte's precise perspective creates a sense of being in the room.</p>
<p>The artist often painted scenes of <strong>modern Parisian life</strong>, from street sweepers to leisure activities. His approach combined Impressionist color with more traditional draftsmanship. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Billiards?", answer: "<a href=\"/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this scene of <strong>bourgeois leisure</strong> in 19th-century Paris." },
      { question: "Where is this painting?", answer: "Billiards is currently in a <strong>private collection</strong> and not on public display." }
    ]
  },
  {
    slug: 'emanuel-leutze-bird-nesting',
    description: `<p><a href="/artist/emanuel-leutze"><strong>Emanuel Leutze</strong></a> painted this scene of children searching for bird nests. Young figures climb and explore in a <strong>natural setting</strong>, capturing a moment of childhood adventure. Leutze, best known for historical paintings, here turned to genre subjects.</p>
<p>The German-American artist brought his <strong>narrative skills</strong> to this domestic scene. Every pose tells part of the story. The work is held at the <a href="/museum/smithsonian-american-art-museum-washington-dc-us"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC.</p>`,
    faqs: [
      { question: "Who painted Bird Nesting?", answer: "<a href=\"/artist/emanuel-leutze\"><strong>Emanuel Leutze</strong></a>, the German-American artist famous for <strong>Washington Crossing the Delaware</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/smithsonian-american-art-museum-washington-dc-us\"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC holds this work." }
    ]
  },
  {
    slug: 'francisco-de-zurbaran-birth-of-the-virgin',
    description: `<p><a href="/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a> painted this religious scene showing the birth of the Virgin Mary. Attendants gather around the newborn while <strong>soft light</strong> fills the domestic interior. Zurbarán's characteristic realism brings sacred narrative into believable space.</p>
<p>The Spanish Baroque master specialized in <strong>religious subjects</strong> for monasteries and churches. His use of light and shadow creates a contemplative atmosphere. This painting hangs at the <a href="/museum/norton-simon-museum-pasadena-ca-us"><strong>Norton Simon Museum</strong></a> in Pasadena.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "The <strong>birth of the Virgin Mary</strong>, a popular subject in Spanish religious art painted by <a href=\"/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a>." },
      { question: "Where can I see this work?", answer: "The <a href=\"/museum/norton-simon-museum-pasadena-ca-us\"><strong>Norton Simon Museum</strong></a> in Pasadena, California displays this painting." }
    ]
  },
  {
    slug: 'perugino-birth-of-the-virgin',
    description: `<p><a href="/artist/perugino"><strong>Perugino</strong></a> painted this scene of the Virgin Mary's birth with his signature grace. Women attend to the newborn and her mother Anne in an <strong>elegant architectural setting</strong>. The soft colors and balanced composition show why Perugino influenced a generation of Italian painters.</p>
<p>As Raphael's teacher, Perugino developed the <strong>harmonious style</strong> that shaped High Renaissance art. This work hangs at the <a href="/museum/walker-art-gallery-liverpool-uk"><strong>Walker Art Gallery</strong></a> in Liverpool, England.</p>`,
    faqs: [
      { question: "Who was Perugino?", answer: "<a href=\"/artist/perugino\"><strong>Perugino</strong></a> was an Italian Renaissance painter who taught <strong>Raphael</strong>. He was known for graceful religious works." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/walker-art-gallery-liverpool-uk\"><strong>Walker Art Gallery</strong></a> in Liverpool, UK holds this <strong>Renaissance painting</strong>." }
    ]
  },
  {
    slug: 'alphonse-mucha-biscuits-champagne-lef232vre-utile',
    description: `<p><a href="/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> designed this advertisement for Lefèvre-Utile biscuits with his trademark Art Nouveau elegance. A <strong>flowing female figure</strong> holds the product amid decorative swirls and organic patterns. Mucha's commercial work helped define the visual style of an era.</p>
<p>The Czech artist created many such posters in Paris during the 1890s. His <strong>distinctive ornamental approach</strong> made ordinary products seem glamorous. This design remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who designed this advertisement?", answer: "<a href=\"/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this <strong>Art Nouveau poster</strong> for a French biscuit company." },
      { question: "What is Art Nouveau?", answer: "An <strong>decorative style</strong> from the 1890s-1910s featuring organic curves and flowing lines. Mucha was one of its key figures." }
    ]
  },
  {
    slug: 'alphonse-mucha-biscuits-lefevre-utile',
    description: `<p><a href="/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> created this poster design for Lefèvre-Utile biscuits featuring his signature Art Nouveau style. An <strong>elegant woman</strong> appears surrounded by decorative borders and organic motifs. The design transforms commercial advertising into fine art.</p>
<p>Mucha's posters for Parisian products made him famous throughout Europe. His <strong>ornamental figures</strong> became icons of the Belle Époque. This work is held in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who was Alphonse Mucha?", answer: "<a href=\"/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> was a Czech artist who became the leading figure of <strong>Art Nouveau design</strong> in Paris." },
      { question: "Where can I see Mucha's work?", answer: "The <strong>Mucha Museum</strong> in Prague has many works, though this specific piece is in a <strong>private collection</strong>." }
    ]
  },
  {
    slug: 'otto-mueller-blaue-badende',
    description: `<p><a href="/artist/otto-mueller"><strong>Otto Mueller</strong></a> painted these blue-tinted bathers in his characteristic angular style. The figures blend with their natural surroundings, bodies simplified into <strong>essential forms</strong>. Mueller was drawn to themes of humans in harmony with nature.</p>
<p>As a member of the German Expressionist group Die Brücke, Mueller developed a <strong>distinctive personal vision</strong>. His muted palette and elongated figures set him apart from more aggressive colleagues. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Blaue Badende?", answer: "<a href=\"/artist/otto-mueller\"><strong>Otto Mueller</strong></a>, a German Expressionist associated with <strong>Die Brücke</strong> (The Bridge) group." },
      { question: "What style is this painting?", answer: "<strong>German Expressionism</strong>, specifically the style of Die Brücke artists who emphasized emotion and primal connection to nature." }
    ]
  },
  {
    slug: 'bernardino-luini-blessing-christ',
    description: `<p><a href="/artist/bernardino-luini"><strong>Bernardino Luini</strong></a> painted this image of Christ raising his hand in blessing. The figure shows the <strong>soft modeling and gentle expression</strong> that Luini learned from studying Leonardo da Vinci's work. A subtle sfumato technique blurs the contours.</p>
<p>Luini was the most successful of Leonardo's Milanese followers. His <strong>sweet-faced religious figures</strong> were widely popular in northern Italy. This painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted Blessing Christ?", answer: "<a href=\"/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a>, a 16th-century Italian painter who studied <strong>Leonardo da Vinci's</strong> techniques." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris displays this work among its <strong>Italian Renaissance collection</strong>." }
    ]
  },
  {
    slug: 'robert-campin-blessing-christ-and-praying-virgin',
    description: `<p><a href="/artist/robert-campin"><strong>Robert Campin</strong></a> painted this devotional diptych showing Christ blessing alongside the Virgin Mary in prayer. The <strong>detailed realism</strong> of faces and fabric reflects the Early Netherlandish style. Campin pioneered many techniques later developed by his student Jan van Eyck.</p>
<p>These panels would have aided private devotion in a wealthy household. The <strong>precise observation</strong> of textures and light shows Campin's revolutionary approach. The work is held at the <a href="/museum/philadelphia-museum-of-art-philadelphia-pa-us"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was Robert Campin?", answer: "<a href=\"/artist/robert-campin\"><strong>Robert Campin</strong></a> was an <strong>Early Netherlandish painter</strong> who helped develop oil painting techniques in the 15th century." },
      { question: "Where is this diptych?", answer: "The <a href=\"/museum/philadelphia-museum-of-art-philadelphia-pa-us\"><strong>Philadelphia Museum of Art</strong></a> holds these panels in its <strong>European collection</strong>." }
    ]
  },
  {
    slug: 'blue-interior-backer',
    description: `<p><a href="/artist/harriet-backer"><strong>Harriet Backer</strong></a> painted this 1883 interior scene suffused with blue light. A figure sits in a <strong>domestic space</strong> where soft illumination transforms everyday objects. The Norwegian artist was known for her masterful handling of interior light and color.</p>
<p>Backer studied in Paris and brought Impressionist color sensibility home to Scandinavia. Her <strong>quiet domestic subjects</strong> carry emotional weight. The painting, measuring 84 cm × 66 cm, hangs at the <a href="/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo.</p>`,
    faqs: [
      { question: "Who painted Blue Interior?", answer: "<a href=\"/artist/harriet-backer\"><strong>Harriet Backer</strong></a>, a Norwegian artist celebrated for her <strong>atmospheric interiors</strong>." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo displays this 1883 work." }
    ]
  },
  {
    slug: 'egon-schiele-boating',
    description: `<p><a href="/artist/egon-schiele"><strong>Egon Schiele</strong></a> depicted a scene of boating in this work, his <strong>angular lines</strong> and emotional intensity applied to an outdoor subject. While best known for figure studies, Schiele also painted landscapes and genre scenes with distinctive expressionist energy.</p>
<p>The Austrian artist developed a <strong>raw visual language</strong> that influenced 20th-century art. Even leisure subjects carry his characteristic tension. This painting is held in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Boating?", answer: "<a href=\"/artist/egon-schiele\"><strong>Egon Schiele</strong></a>, the Austrian Expressionist known for his <strong>intense figurative works</strong>." },
      { question: "Where is this painting?", answer: "Boating is currently in a <strong>private collection</strong> and not on public display." }
    ]
  },
  {
    slug: 'george-caleb-bingham-boatmen-on-the-missouri',
    description: `<p><a href="/artist/george-caleb-bingham"><strong>George Caleb Bingham</strong></a> captured river life on the American frontier in this scene of boatmen on the Missouri. Figures relax on a flatboat as it moves through <strong>calm waters</strong> reflecting the golden light. The composition balances stillness with the sense of westward movement.</p>
<p>Bingham specialized in <strong>frontier genre scenes</strong> that documented American expansion. His idealized vision of river workers became iconic. The painting hangs at the <a href="/museum/fine-arts-museums-of-san-francisco-san-francisco-c"><strong>Fine Arts Museums of San Francisco</strong></a>.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "<strong>Missouri River boatmen</strong> during the westward expansion era, painted by <a href=\"/artist/george-caleb-bingham\"><strong>George Caleb Bingham</strong></a>." },
      { question: "Where can I see this work?", answer: "The <a href=\"/museum/fine-arts-museums-of-san-francisco-san-francisco-c\"><strong>Fine Arts Museums of San Francisco</strong></a> displays this painting." }
    ]
  },
  {
    slug: 'umberto-boccioni-boats-in-sunlight',
    description: `<p><a href="/artist/umberto-boccioni"><strong>Umberto Boccioni</strong></a> painted boats catching the sun in this work that predates his Futurist period. The <strong>shimmering light on water</strong> shows an Impressionist influence before Boccioni embraced dynamism and speed. Color and atmosphere dominate the scene.</p>
<p>Boccioni would later become a leading figure of Italian Futurism, but early works like this show his <strong>traditional training</strong>. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Boats in Sunlight?", answer: "<a href=\"/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a>, later a key figure in <strong>Italian Futurism</strong>." },
      { question: "What style is this painting?", answer: "This early work shows <strong>Impressionist influence</strong>, before Boccioni developed his dynamic Futurist approach." }
    ]
  },
  {
    slug: 'bogatyrs',
    description: `<p><a href="/artist/viktor-vasnetsov"><strong>Viktor Vasnetsov</strong></a> painted this monumental 1898 canvas showing three legendary Russian knights, or bogatyrs. Ilya Muromets, Dobrynya Nikitich, and Alyosha Popovich sit on <strong>powerful horses</strong>, surveying the steppe. Each hero represents different virtues: strength, wisdom, and cleverness.</p>
<p>The painting measures an impressive 295 × 446 cm, created in <strong>oil on canvas</strong>. Vasnetsov spent over a decade perfecting this celebration of Russian folklore. It hangs at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Who are the Bogatyrs?", answer: "<strong>Three legendary Russian heroes</strong>: Ilya Muromets (strength), Dobrynya Nikitich (wisdom), and Alyosha Popovich (cleverness)." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow holds this large work by <a href=\"/artist/viktor-vasnetsov\"><strong>Vasnetsov</strong></a>." },
      { question: "How big is this painting?", answer: "The canvas measures <strong>295 × 446 cm</strong> (116 × 176 inches), making it one of the gallery's largest works." }
    ]
  },
  {
    slug: 'caspar-david-friedrich-bohemian-landscape-with-mount-milleschauer',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this view of the Bohemian landscape with Mount Milleschauer rising in the distance. <strong>Atmospheric haze</strong> softens the rolling hills and creates depth. The German Romantic painter found spiritual meaning in natural scenery.</p>
<p>Friedrich often painted landscapes he had sketched during travels. This <strong>contemplative vista</strong> invites meditation on nature's grandeur. The work hangs at the <a href="/museum/galerie-neue-meister-dresden-germany"><strong>Galerie Neue Meister</strong></a> in Dresden.</p>`,
    faqs: [
      { question: "Where is Mount Milleschauer?", answer: "Mount Milleschauer (now Milešovka) is the <strong>highest peak</strong> in the Central Bohemian Highlands, near the German border." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/galerie-neue-meister-dresden-germany\"><strong>Galerie Neue Meister</strong></a> in Dresden displays this <a href=\"/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> landscape." }
    ]
  },
  {
    slug: 'camille-corot-boidguillaumi-near-rouen-a-gate-flanked-by-two-pos',
    description: `<p><a href="/artist/camille-corot"><strong>Camille Corot</strong></a> painted this quiet scene near Rouen showing a gate flanked by two posts. The <strong>silvery light</strong> and soft greens are characteristic of his mature style. Corot captured the French countryside with poetic simplicity.</p>
<p>The artist's ability to render <strong>atmosphere and mood</strong> influenced the Impressionists who followed. His landscapes feel both specific and dreamlike. This work is held at <a href="/museum/ca39-pesaro-international-gallery-of-modern-art-ve"><strong>Ca' Pesaro</strong></a> in Venice.</p>`,
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/camille-corot\"><strong>Camille Corot</strong></a>, a French painter who influenced the <strong>Impressionists</strong> with his atmospheric landscapes." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/ca39-pesaro-international-gallery-of-modern-art-ve\"><strong>Ca' Pesaro</strong></a>, Venice's International Gallery of Modern Art, holds this work." }
    ]
  },
  {
    slug: 'el-lissitzky-book-cover-for-39chad-gadya39-by-el-lissitzky',
    description: `<p><a href="/artist/el-lissitzky"><strong>El Lissitzky</strong></a> designed this book cover for Chad Gadya, a traditional Passover song. The design uses <strong>bold geometric forms</strong> and limited colors in the Suprematist style. Lissitzky transformed Jewish folk material through avant-garde visual language.</p>
<p>The Russian artist worked across graphic design, architecture, and painting. His <strong>constructivist approach</strong> influenced modern design worldwide. This work is part of the collection at the <a href="/museum/museum-of-modern-art-moma-new-york-city-ny-us"><strong>Museum of Modern Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What is Chad Gadya?", answer: "A <strong>traditional Passover song</strong> that <a href=\"/artist/el-lissitzky\"><strong>El Lissitzky</strong></a> illustrated in avant-garde style." },
      { question: "Where is this work held?", answer: "The <a href=\"/museum/museum-of-modern-art-moma-new-york-city-ny-us\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York has this in its <strong>design collection</strong>." }
    ]
  },
  {
    slug: 'claude-monet-bordighera',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted views of Bordighera during his 1884 trip to the Italian Riviera. The <strong>Mediterranean light</strong> and exotic vegetation challenged his palette. Palm trees and bright sunshine appear throughout this series.</p>
<p>Monet found the colors almost too intense to capture. His <strong>vibrant brushwork</strong> renders the warmth and brilliance of the coastal town. This painting hangs at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is Bordighera?", answer: "Bordighera is a town on the <strong>Italian Riviera</strong>, near the French border. <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> visited in 1884." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> holds this work in its <strong>Impressionist collection</strong>." }
    ]
  },
  {
    slug: 'claude-monet-bordighera-italy',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this Italian coastal scene during his 1884 journey to the Mediterranean. The <strong>brilliant southern light</strong> and lush vegetation offered new challenges for his Impressionist technique. Blue sea contrasts with green palms and warm buildings.</p>
<p>Monet wrote that Bordighera's colors were too beautiful to paint. He rose to the challenge, creating <strong>sun-drenched canvases</strong>. This work is displayed at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "When did Monet visit Italy?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> traveled to <strong>Bordighera in 1884</strong> and painted numerous views of the coastal town." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> displays this Mediterranean scene." }
    ]
  },
  {
    slug: 'claude-monet-bordighera-the-house-of-gardener',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> captured a gardener's house amid the lush vegetation of Bordighera. <strong>Tropical plants and palm trees</strong> surround the modest building, painted in the brilliant light of the Italian Riviera. The scene glows with Mediterranean warmth.</p>
<p>Monet made dozens of paintings during his Bordighera stay. Each explored different <strong>effects of light and color</strong> in this unfamiliar landscape. The work hangs at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Who painted this work?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> during his <strong>1884 Italian trip</strong> to Bordighera." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> holds this in its strong <strong>Monet collection</strong>." }
    ]
  },
  {
    slug: 'boston-harbor-lane',
    description: `<p><a href="/artist/fitz-henry-lane"><strong>Fitz Henry Lane</strong></a> painted this serene 1850 view of Boston Harbor. Ships rest on <strong>glassy calm water</strong> under a luminous sky. Lane was the leading American marine painter of his era, known for capturing light on water with quiet precision.</p>
<p>The painting measures 66 × 107 cm, executed in <strong>oil on canvas</strong>. Lane's style anticipated the Luminists who followed. This work hangs at the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
    faqs: [
      { question: "Who painted Boston Harbor?", answer: "<a href=\"/artist/fitz-henry-lane\"><strong>Fitz Henry Lane</strong></a>, America's foremost <strong>marine painter</strong> of the mid-19th century." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a> holds this 1850 harbor view." },
      { question: "How big is this painting?", answer: "The canvas measures <strong>66 × 107 cm</strong> (26 × 42 inches)." }
    ]
  },
  {
    slug: 'george-bellows-both-members-of-this-club',
    description: `<p><a href="/artist/george-bellows"><strong>George Bellows</strong></a> painted this brutal boxing scene showing two fighters locked in combat. The <strong>violent struggle</strong> takes place before a crowd of spectators pressed against the ring. Bellows captured the raw energy of illegal prize fights in early 20th-century New York.</p>
<p>The painting's title refers to the private club loophole that allowed banned boxing matches. Bellows brought <strong>Ashcan School realism</strong> to American art. The work hangs at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, DC.</p>`,
    faqs: [
      { question: "What does the title mean?", answer: "Boxing was illegal, so fighters became <strong>private club members</strong> to circumvent the law. <a href=\"/artist/george-bellows\"><strong>Bellows</strong></a> depicted this reality." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington, DC displays this powerful work." }
    ]
  },
  {
    slug: 'juan-gris-bottles-and-knife',
    description: `<p><a href="/artist/juan-gris"><strong>Juan Gris</strong></a> arranged bottles and a knife in this Cubist still life. The objects appear from <strong>multiple angles simultaneously</strong>, fractured into geometric planes. Gris brought a systematic, almost mathematical approach to Cubist composition.</p>
<p>The Spanish artist was a key figure in Synthetic Cubism alongside Picasso and Braque. His <strong>precisely structured works</strong> influenced many followers. This painting is held at the <a href="/museum/kr246llerm252ller-museum-otterlo-netherlands"><strong>Kröller-Müller Museum</strong></a> in the Netherlands.</p>`,
    faqs: [
      { question: "What style is this painting?", answer: "<strong>Synthetic Cubism</strong>, developed by <a href=\"/artist/juan-gris\"><strong>Juan Gris</strong></a> along with Picasso and Braque." },
      { question: "Where can I see this work?", answer: "The <a href=\"/museum/kr246llerm252ller-museum-otterlo-netherlands\"><strong>Kröller-Müller Museum</strong></a> in Otterlo, Netherlands holds this Cubist still life." }
    ]
  },
  {
    slug: 'boulevard-montmartre-night',
    description: `<p><a href="/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted this 1897 nighttime view of Boulevard Montmartre from his hotel window. <strong>Gas lamps and carriage lights</strong> illuminate the wet pavement while the bustle of Parisian nightlife continues below. The painting measures 53.3 × 64.8 cm in oil on canvas.</p>
<p>Pissarro created a series of boulevard views in different weather and light conditions. This <strong>nocturnal scene</strong> shows his late mastery of color and atmosphere. The work hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "When was this painted?", answer: "<a href=\"/artist/camille-pissarro\"><strong>Pissarro</strong></a> painted this in <strong>1897</strong> as part of a series of boulevard views from his Paris hotel." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London displays this <strong>Impressionist night scene</strong>." }
    ]
  },
  {
    slug: 'henri-fantin-latour-bouquet-of-flowers',
    description: `<p><a href="/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> arranged this flower bouquet with characteristic delicacy. <strong>Soft petals and subtle colors</strong> emerge from a dark background, each bloom painted with botanical precision. The French artist became famous for his floral still lifes.</p>
<p>Fantin-Latour sold many flower paintings to English collectors who prized his <strong>refined technique</strong>. This work is held at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who painted this still life?", answer: "<a href=\"/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a>, a French artist celebrated for his <strong>exquisite flower paintings</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg holds this floral work." }
    ]
  },
  {
    slug: 'paul-gauguin-bouquet-of-peonies-on-a-musical-score',
    description: `<p><a href="/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> placed lush peonies atop a musical score in this still life. The <strong>rich pink blooms</strong> contrast with the black and white of the sheet music beneath. The unusual combination reveals Gauguin's interest in linking visual and musical arts.</p>
<p>This early work predates Gauguin's famous Tahitian period. The <strong>bold color and unusual composition</strong> hint at his later innovations. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted this still life?", answer: "<a href=\"/artist/paul-gauguin\"><strong>Paul Gauguin</strong></a> created this work before his <strong>Tahitian period</strong>." },
      { question: "Where is this painting?", answer: "This work is currently in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'edgar-degas-bowing-dancer',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> captured a ballerina taking her bow in this graceful study. The dancer's <strong>curved posture and extended arms</strong> show the formal gesture of acknowledging applause. Degas observed countless rehearsals and performances at the Paris Opéra.</p>
<p>His ballet subjects made him famous, each work exploring <strong>different poses and lighting</strong>. This piece demonstrates his understanding of movement and theatrical presentation. The work is held at <a href="/museum/met"><strong>The Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who painted Bowing Dancer?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a>, the French artist renowned for his <strong>ballet paintings</strong>." },
      { question: "Where is this work displayed?", answer: "<a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York holds this dancer study." }
    ]
  },
  {
    slug: 'caravaggio-boy-bitten-by-a-lizard',
    description: `<p><a href="/artist/caravaggio"><strong>Caravaggio</strong></a> painted a youth recoiling in shock as a lizard bites his finger. The <strong>sudden movement and pained expression</strong> capture a split-second reaction. The boy's shoulder bare, his face contorted, the moment frozen forever.</p>
<p>This early work shows Caravaggio's interest in dramatic incident and <strong>psychological immediacy</strong>. Flowers and fruit on the table add symbolic meaning. Two versions exist, at the <a href="/museum/national-gallery-london-uk-fondazione-roberto-long"><strong>National Gallery</strong></a>, London and Fondazione Roberto Longhi, Florence.</p>`,
    faqs: [
      { question: "Why is this painting famous?", answer: "It shows <a href=\"/artist/caravaggio\"><strong>Caravaggio's</strong></a> early mastery of <strong>capturing sudden emotion</strong> and dramatic lighting." },
      { question: "Where can I see this painting?", answer: "Versions exist at the <a href=\"/museum/national-gallery-london-uk-fondazione-roberto-long\"><strong>National Gallery</strong></a>, London and Fondazione Roberto Longhi, Florence." }
    ]
  },
  {
    slug: 'caspar-david-friedrich-boy-sleeping-on-a-grave',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted a young boy asleep beside a grave in this melancholy scene. The <strong>peaceful child</strong> lies unaware atop the resting place of the dead, a poignant contrast. Friedrich found spiritual meaning in scenes of mortality and nature.</p>
<p>The German Romantic painter often depicted <strong>solitary figures in contemplative settings</strong>. Death and renewal, sleep and waking intertwine here. The work hangs at the <a href="/museum/national-gallery-of-canada-ottawa-canada"><strong>National Gallery of Canada</strong></a> in Ottawa.</p>`,
    faqs: [
      { question: "What does this painting mean?", answer: "It explores <strong>life, death, and innocence</strong>, typical themes for <a href=\"/artist/caspar-david-friedrich\"><strong>Friedrich's</strong></a> Romantic vision." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery-of-canada-ottawa-canada\"><strong>National Gallery of Canada</strong></a> in Ottawa displays this work." }
    ]
  },
  {
    slug: 'joaquin-sorolla-boy-with-a-ball',
    description: `<p><a href="/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted a boy playing with a ball in the Spanish sunlight. The child's <strong>carefree movement</strong> captures the joy of play. Sorolla was a master at rendering Mediterranean light and the vitality of youth.</p>
<p>The Spanish artist's luminous technique made everyday subjects seem to <strong>glow from within</strong>. This work hangs at the <a href="/museum/museu-de-belles-arts-de-val232ncia-valencia-spain"><strong>Museu de Belles Arts de València</strong></a>.</p>`,
    faqs: [
      { question: "Who painted Boy with a Ball?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a>, the Spanish painter known for <strong>sunlit scenes</strong> of Mediterranean life." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts de València</strong></a> in Spain holds this work." }
    ]
  },
  {
    slug: 'caravaggio-boy-with-a-basket-of-fruit',
    description: `<p><a href="/artist/caravaggio"><strong>Caravaggio</strong></a> painted a young man holding a basket overflowing with fruit. The <strong>ripe and rotting produce</strong> is rendered with almost scientific accuracy while the youth's bare shoulder catches the light. The painting balances sensuality and mortality.</p>
<p>This early work established Caravaggio's reputation for <strong>naturalistic still life</strong> combined with figure painting. The boy's heavy-lidded gaze adds psychological complexity. The work hangs at the <a href="/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome.</p>`,
    faqs: [
      { question: "When was this painted?", answer: "<a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> painted this in the <strong>early 1590s</strong> during his first years in Rome." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> in Rome displays this early <strong>Caravaggio masterwork</strong>." }
    ]
  },
  {
    slug: 'akseli-gallen-kallela-boy-with-a-crow',
    description: `<p><a href="/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted a young boy with a crow in this Finnish scene. The <strong>stark Nordic light</strong> and direct gaze create an atmosphere of quiet intensity. Gallen-Kallela combined naturalism with elements of Finnish folklore in his work.</p>
<p>The artist became Finland's most celebrated painter, known for both <strong>everyday subjects and epic mythological scenes</strong>. This work hangs at the <a href="/museum/finnish-national-gallery-helsinki-finland"><strong>Finnish National Gallery</strong></a> in Helsinki.</p>`,
    faqs: [
      { question: "Who painted Boy with a Crow?", answer: "<a href=\"/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a>, Finland's most famous painter and a master of <strong>Nordic Realism</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/finnish-national-gallery-helsinki-finland\"><strong>Finnish National Gallery</strong></a> in Helsinki holds this work." }
    ]
  },
  {
    slug: 'bartolome-murillo-boy-with-a-dog',
    description: `<p><a href="/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted this scene of a boy with his dog, their <strong>companionship</strong> evident in the relaxed composition. Murillo was known for his gentle portrayals of street children in Seville, rendering poverty with tenderness.</p>
<p>The Spanish Baroque painter's <strong>soft brushwork and warm palette</strong> made such subjects sympathetic rather than harsh. This work is held at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who painted Boy with a Dog?", answer: "<a href=\"/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a>, a Spanish Baroque artist known for <strong>sentimental genre scenes</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg displays this work." }
    ]
  },
  {
    slug: 'edouard-manet-boy-with-a-sword',
    description: `<p><a href="/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted a young boy holding a heavy sword in this portrait. The child, believed to be the son of a friend, poses in <strong>Spanish costume</strong> with the oversized weapon. The contrast between the small figure and martial prop creates an intriguing tension.</p>
<p>Manet's interest in Spanish painting shows in the <strong>dark background and dramatic lighting</strong>. The work hangs at the <a href="/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Who painted Boy with a Sword?", answer: "<a href=\"/artist/edouard-manet\"><strong>Édouard Manet</strong></a>, the French painter who helped launch <strong>modern art</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/metropolitan-museum-of-art-met-new-york-city-ny-us\"><strong>Metropolitan Museum of Art</strong></a> in New York displays this portrait." }
    ]
  },
  {
    slug: 'giorgione-boy-with-flute',
    description: `<p><a href="/artist/giorgione"><strong>Giorgione</strong></a> painted this mysterious youth holding a flute, his <strong>soft features</strong> emerging from shadow. The Venetian master's sfumato technique creates an atmosphere of reverie and music implied rather than heard. Few paintings by Giorgione survive today.</p>
<p>The artist died young but influenced generations with his <strong>poetic, atmospheric approach</strong>. This work is held at <a href="/museum/hampton-court-palace-london-uk"><strong>Hampton Court Palace</strong></a> in London.</p>`,
    faqs: [
      { question: "Who was Giorgione?", answer: "<a href=\"/artist/giorgione\"><strong>Giorgione</strong></a> was a Venetian Renaissance painter whose <strong>poetic works</strong> influenced Titian and others." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/hampton-court-palace-london-uk\"><strong>Hampton Court Palace</strong></a> in London holds this work in the Royal Collection." }
    ]
  },
  {
    slug: 'boyarina-morozova',
    description: `<p><a href="/artist/vasily-surikov"><strong>Vasily Surikov</strong></a> painted this epic 1887 canvas depicting Feodosia Morozova being taken to her death. The noblewoman raises <strong>two fingers in the old blessing</strong>, defying the church reforms she opposed. A crowd of onlookers reacts with varied emotions.</p>
<p>The massive painting measures 304 × 587.5 cm in <strong>oil on canvas</strong>. Surikov spent years researching this moment from Russian history. The work dominates a wall at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Who was Boyarina Morozova?", answer: "A 17th-century Russian noblewoman who opposed <strong>church reforms</strong> and was imprisoned for her beliefs by Tsar Alexis." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow displays this <a href=\"/artist/vasily-surikov\"><strong>Surikov</strong></a> masterpiece." },
      { question: "How large is this painting?", answer: "The canvas measures <strong>304 × 587.5 cm</strong> (120 × 231 inches), one of the largest in Russian art." }
    ]
  },
  {
    slug: 'francois-boucher-breakfast',
    description: `<p><a href="/artist/francois-boucher"><strong>François Boucher</strong></a> painted this intimate scene of a family taking their morning meal. The <strong>elegant figures</strong> gather in a well-appointed room, children at play while adults sip their drinks. Rococo luxury pervades every surface.</p>
<p>Boucher was the favorite painter of Madame de Pompadour and the <strong>French court</strong>. His scenes of aristocratic life defined an era's taste. This work hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "Who painted Breakfast?", answer: "<a href=\"/artist/francois-boucher\"><strong>François Boucher</strong></a>, the leading <strong>French Rococo painter</strong> of the 18th century." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris displays this <strong>Rococo interior scene</strong>." }
    ]
  },
  {
    slug: 'gabriel-metsu-breakfast',
    description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted this scene of a Dutch breakfast with characteristic attention to domestic detail. <strong>Fine textures of cloth and food</strong> are rendered with precision. The figures enjoy their meal in the comfortable interior of a prosperous household.</p>
<p>Metsu was one of the finest Dutch Golden Age genre painters. His <strong>quiet domestic scenes</strong> rival those of Vermeer and de Hooch. This work is held at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who painted this Breakfast scene?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>, a <strong>Dutch Golden Age</strong> painter known for refined interior scenes." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg holds this <strong>Dutch genre painting</strong>." }
    ]
  },
  {
    slug: 'diego-velazquez-breakfast',
    description: `<p><a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this early genre scene showing common people sharing a meal. <strong>Earthy tones and strong lighting</strong> characterize his bodegón works from the Seville period. The humble subject receives the same attention as any royal portrait.</p>
<p>Before becoming Spain's court painter, Velázquez honed his skills on such <strong>everyday subjects</strong>. This work is held at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "What is a bodegón?", answer: "A Spanish term for <strong>kitchen or tavern scenes</strong> showing food and common people. <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted many early in his career." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg displays this early Velázquez work." }
    ]
  },
  {
    slug: 'breakfast-under-big-birch',
    description: `<p><a href="/artist/carl-larsson"><strong>Carl Larsson</strong></a> painted this 1896 watercolor of his family taking breakfast outdoors beneath a large birch tree. The <strong>bright Swedish summer light</strong> illuminates the domestic scene. Larsson's images of family life became beloved illustrations of an ideal home.</p>
<p>The painting measures 32 × 43 cm and captures the <strong>Arts and Crafts</strong> spirit of his home at Sundborn. The work is held at the <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/carl-larsson\"><strong>Carl Larsson</strong></a>, the Swedish artist famous for <strong>watercolors of family life</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-museum-stockholm\"><strong>National Museum</strong></a> in Stockholm holds this 1896 watercolor." }
    ]
  },
  {
    slug: 'maurice-denis-bretons',
    description: `<p><a href="/artist/maurice-denis"><strong>Maurice Denis</strong></a> painted this scene of Breton women in traditional costume. The <strong>flattened forms and decorative patterns</strong> show the influence of Gauguin and Japanese prints. Denis was a founding member of the Nabis movement.</p>
<p>The French painter famously said a painting is essentially a flat surface covered with colors. This work puts his <strong>theoretical ideas into practice</strong>. It remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted Bretons?", answer: "<a href=\"/artist/maurice-denis\"><strong>Maurice Denis</strong></a>, a founder of the <strong>Nabis movement</strong> in late 19th-century France." },
      { question: "What are the Nabis?", answer: "A group of Post-Impressionist artists who emphasized <strong>decorative patterns and flat color</strong> in their work." }
    ]
  },
  {
    slug: 'rembrandt-bridge',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this view of a simple wooden bridge. The <strong>sparse lines</strong> suggest the structure and surrounding landscape with remarkable economy. Rembrandt found poetry in ordinary Dutch scenery.</p>
<p>This print shows his mastery of the etching medium, where fewer lines can create <strong>greater atmosphere</strong>. The work is held in the permanent collection at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC.</p>`,
    faqs: [
      { question: "What technique did Rembrandt use?", answer: "<strong>Etching</strong>, a printmaking process using acid to incise lines into metal. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> was a master of the medium." },
      { question: "Where is this print?", answer: "The <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC holds this in its <strong>prints collection</strong>." }
    ]
  },
  {
    slug: 'bartolome-murillo-brother-juniper-and-the-beggar',
    description: `<p><a href="/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted this scene of Brother Juniper giving charity to a beggar. The Franciscan friar extends <strong>food or aid</strong> to the poor man in a gesture of Christian mercy. Murillo excelled at such narratives of simple piety.</p>
<p>The Spanish Baroque painter often depicted <strong>religious subjects with warmth</strong> rather than severity. This work hangs at the <a href="/museum/mus233e-des-beauxarts-de-dole-dole-france"><strong>Musée des Beaux-Arts de Dole</strong></a> in France.</p>`,
    faqs: [
      { question: "Who was Brother Juniper?", answer: "A <strong>Franciscan friar</strong> known for his charitable works. <a href=\"/artist/bartolome-murillo\"><strong>Murillo</strong></a> painted him helping the poor." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/mus233e-des-beauxarts-de-dole-dole-france\"><strong>Musée des Beaux-Arts de Dole</strong></a> in France holds this work." }
    ]
  },
  {
    slug: 'adolph-menzel-building-site-with-willows',
    description: `<p><a href="/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this view of a construction site with willow trees. The <strong>unfinished structures and natural growth</strong> create an unusual subject for the German Realist. Menzel found interest in overlooked corners of modern life.</p>
<p>The artist was known for historical scenes but also painted <strong>contemporary subjects with sharp observation</strong>. This work hangs at the <a href="/museum/alte-nationalgalerie-berlin-germany"><strong>Alte Nationalgalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Who painted this scene?", answer: "<a href=\"/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a>, the leading <strong>German Realist painter</strong> of the 19th century." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> in Berlin displays this work." }
    ]
  },
  {
    slug: 'juan-gris-bullfighter',
    description: `<p><a href="/artist/juan-gris"><strong>Juan Gris</strong></a> fragmented the figure of a bullfighter in this Cubist composition. The <strong>toreador's costume and pose</strong> are broken into geometric planes while remaining recognizable. Gris brought clarity and color to the Cubist vocabulary.</p>
<p>The Spanish artist adapted traditional subjects to <strong>modern formal experiments</strong>. This painting is held at the <a href="/museum/mus233e-d39art-moderne-de-c233ret-ceret-france"><strong>Musée d'Art moderne de Céret</strong></a> in France.</p>`,
    faqs: [
      { question: "What style is this painting?", answer: "<strong>Cubism</strong>, the movement developed by Picasso and Braque that <a href=\"/artist/juan-gris\"><strong>Juan Gris</strong></a> refined with systematic clarity." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/mus233e-d39art-moderne-de-c233ret-ceret-france\"><strong>Musée d'Art moderne de Céret</strong></a> in France holds this work." }
    ]
  },
  {
    slug: 'valentin-serov-bullocks',
    description: `<p><a href="/artist/valentin-serov"><strong>Valentin Serov</strong></a> painted this scene of bullocks in a Russian landscape. The <strong>sturdy animals</strong> are rendered with naturalistic precision against a muted sky. Serov, best known for portraits, here showed his skill with rural subjects.</p>
<p>The Russian painter's <strong>loose brushwork and truthful observation</strong> influenced generations of artists. This work hangs at the <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Who painted Bullocks?", answer: "<a href=\"/artist/valentin-serov\"><strong>Valentin Serov</strong></a>, one of the greatest <strong>Russian portrait painters</strong> who also excelled at landscapes." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow displays this rural scene." }
    ]
  },
  {
    slug: 'jan-steen-burgher-of-delft-and-his-daughter',
    description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> painted this portrait of a Delft merchant with his daughter. The <strong>well-dressed pair</strong> represents the prosperous Dutch middle class of the Golden Age. Steen, usually known for rowdy genre scenes, here shows his range.</p>
<p>The figures appear on steps before their home, receiving a beggar. The painting explores <strong>charity and social status</strong>. This work hangs at the <a href="/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a>, a <strong>Dutch Golden Age</strong> painter usually known for lively genre scenes." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam holds this work." }
    ]
  },
  {
    slug: 'claude-monet-burgo-marina-at-bordighera',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted the Borgo Marina district of Bordighera with its distinctive palms and blue waters. <strong>Mediterranean colors</strong> glow under the Italian sun. Monet found the light both inspiring and challenging during his 1884 visit.</p>
<p>The artist painted rapidly to capture <strong>different times of day</strong> in this unfamiliar landscape. This work is held at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Where is Borgo Marina?", answer: "The <strong>old fishing district</strong> of Bordighera on the Italian Riviera, painted by <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> in 1884." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> displays this Italian view." }
    ]
  },
  {
    slug: 'sassetta-burning-of-a-heretic',
    description: `<p><a href="/artist/sassetta"><strong>Sassetta</strong></a> painted this scene of a heretic being burned at the stake. The <strong>medieval punishment</strong> is depicted with the flat space and gold ground typical of early Italian painting. Religious authority enforces orthodoxy through fire.</p>
<p>Sassetta worked in Siena during the early Renaissance, maintaining <strong>Gothic traditions</strong> while absorbing new ideas. This work is held at the <a href="/museum/national-gallery-of-victoria-ngv-melbourne-austral"><strong>National Gallery of Victoria</strong></a> in Melbourne.</p>`,
    faqs: [
      { question: "Who was Sassetta?", answer: "<a href=\"/artist/sassetta\"><strong>Sassetta</strong></a> was a 15th-century <strong>Sienese painter</strong> known for religious narratives." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/national-gallery-of-victoria-ngv-melbourne-austral\"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia holds this work." }
    ]
  },
  {
    slug: 'rembrandt-bust-of-an-old-man-with-a-large-beard',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this study of an elderly man with a full beard. <strong>Light catches the weathered face</strong> while the rest fades into shadow. The artist returned often to such character studies throughout his career.</p>
<p>These portraits of anonymous sitters helped Rembrandt explore <strong>age, wisdom, and mortality</strong>. The work is held at the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      { question: "Who is the man in this painting?", answer: "The subject is unknown. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> often painted <strong>anonymous models</strong> to study character and expression." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg holds this portrait study." }
    ]
  },
  {
    slug: 'annibale-carracci-butcher39s-shop',
    description: `<p><a href="/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> painted this scene inside a butcher shop with life-size figures at work. <strong>Carcasses hang</strong> while butchers cut and display their wares. The painting treats a humble trade with the dignity of grand art.</p>
<p>Carracci and his family ran an academy that promoted drawing from life. This <strong>boldly realistic subject</strong> shows their naturalistic philosophy. The work is held at <a href="/museum/christ-church-oxford-uk"><strong>Christ Church</strong></a>, Oxford.</p>`,
    faqs: [
      { question: "Who painted Butcher's Shop?", answer: "<a href=\"/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a>, a key figure in <strong>Italian Baroque painting</strong> who promoted naturalism." },
      { question: "Where is this painting?", answer: "<a href=\"/museum/christ-church-oxford-uk\"><strong>Christ Church</strong></a> at Oxford University holds this <strong>early genre painting</strong>." }
    ]
  },
  {
    slug: 'edvard-munch-by-the-roulette',
    description: `<p><a href="/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this scene of gamblers at a roulette table in Monaco. <strong>Anxious faces</strong> cluster around the spinning wheel, caught between hope and dread. Munch applied his psychological insight to this theater of chance.</p>
<p>The Norwegian painter often depicted <strong>emotional extremes</strong> in public settings. This work is held at the <a href="/museum/rasmus-meyer-collection-bergen-norway"><strong>Rasmus Meyer Collection</strong></a> in Bergen.</p>`,
    faqs: [
      { question: "When did Munch paint this?", answer: "<a href=\"/artist/edvard-munch\"><strong>Munch</strong></a> visited <strong>Monaco's casinos</strong> and captured the gambling atmosphere in this scene." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/rasmus-meyer-collection-bergen-norway\"><strong>Rasmus Meyer Collection</strong></a> in Bergen, Norway holds this work." }
    ]
  },
  {
    slug: 'caspar-david-friedrich-by-the-townwall',
    description: `<p><a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this view by a town wall, combining architecture with natural elements. <strong>Stone and vegetation</strong> merge in the German Romantic's vision. The scene invites contemplation of time's passage.</p>
<p>Friedrich found meaning in <strong>liminal spaces</strong> between civilization and nature. This work is held in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Who painted By the Townwall?", answer: "<a href=\"/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>, the leading painter of <strong>German Romanticism</strong>." },
      { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not on public display." }
    ]
  },
  {
    slug: 'valentin-serov-by-the-window-portrait-of-olga-trubnikova',
    description: `<p><a href="/artist/valentin-serov"><strong>Valentin Serov</strong></a> portrayed Olga Trubnikova seated by a window in this portrait. <strong>Natural light</strong> illuminates her face while the room falls into gentle shadow. Serov's ability to capture personality made him Russia's most sought-after portraitist.</p>
<p>The painting combines <strong>intimate observation</strong> with loose, confident brushwork. This work hangs at the <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
    faqs: [
      { question: "Who painted this portrait?", answer: "<a href=\"/artist/valentin-serov\"><strong>Valentin Serov</strong></a>, considered the finest <strong>Russian portrait painter</strong> of his generation." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow displays this portrait." }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-c-leyran-view-of-the-vignards',
    description: `<p><a href="/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this view of vineyards at Céleyran, his family's estate. The <strong>southern French landscape</strong> stretches under a warm sky. Before his Parisian career, Lautrec often painted his childhood surroundings.</p>
<p>These early works show his developing <strong>observational skills</strong>. The painting is held at the <a href="/museum/musee-toulouselautrec-albi-france"><strong>Musée Toulouse-Lautrec</strong></a> in Albi.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "The <strong>Vignards vineyards</strong> at Céleyran, <a href=\"/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec's</strong></a> family estate in southern France." },
      { question: "Where can I see this painting?", answer: "The <a href=\"/museum/musee-toulouselautrec-albi-france\"><strong>Musée Toulouse-Lautrec</strong></a> in Albi holds this early landscape." }
    ]
  },
  {
    slug: 'jean-antoine-watteau-cajoler',
    description: `<p><a href="/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted this scene of gentle persuasion between lovers. A suitor attempts to <strong>cajole or coax</strong> his companion in an elegant garden setting. Watteau's fêtes galantes captured the flirtations of aristocratic life.</p>
<p>The French Rococo master's <strong>theatrical sensibility</strong> and delicate touch defined an era. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "What does 'cajoler' mean?", answer: "To <strong>coax or persuade</strong> with flattery. <a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> specialized in scenes of romantic pursuit." },
      { question: "Where is this painting?", answer: "Cajoler is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'matthias-grunewald-calvary',
    description: `<p><a href="/artist/matthias-grunewald"><strong>Matthias Grünewald</strong></a> painted this Calvary scene with his characteristic emotional intensity. The <strong>suffering Christ</strong> hangs on the cross while mourners grieve below. Grünewald's expressionistic approach to religious subjects influenced later artists.</p>
<p>The German Renaissance painter created some of the most <strong>visceral religious imagery</strong> of his era. This work is held at the <a href="/museum/kunstmuseum-basel-basel-switzerland"><strong>Kunstmuseum Basel</strong></a> in Switzerland.</p>`,
    faqs: [
      { question: "Who painted this Calvary?", answer: "<a href=\"/artist/matthias-grunewald\"><strong>Matthias Grünewald</strong></a>, a German Renaissance painter known for <strong>intensely emotional religious works</strong>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/kunstmuseum-basel-basel-switzerland\"><strong>Kunstmuseum Basel</strong></a> in Switzerland displays this work." }
    ]
  },
  {
    slug: 'berthe-morisot-calvary-after-veronese',
    description: `<p><a href="/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> made this copy after Veronese's Calvary as part of her training. The <strong>study after an Old Master</strong> shows her technical skill and traditional education. Morisot would later develop her own Impressionist style.</p>
<p>Copying in museums was standard practice for aspiring artists. This early work reveals her <strong>formative influences</strong>. It remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "Why did Morisot copy Veronese?", answer: "Copying <strong>Old Masters</strong> was how 19th-century artists learned their craft. <a href=\"/artist/berthe-morisot\"><strong>Morisot</strong></a> studied in the Louvre." },
      { question: "Where is this painting?", answer: "This copy is in a <strong>private collection</strong> and not on public display." }
    ]
  },
  {
    slug: 'piet-mondrian-calves-in-a-field-bordered-by-willow-trees',
    description: `<p><a href="/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted this pastoral scene of calves grazing among willow trees. The <strong>Dutch landscape</strong> shows Mondrian's early naturalistic style before his famous abstract period. Soft colors and traditional composition mark his apprentice years.</p>
<p>Comparing this to his later grid paintings shows Mondrian's <strong>radical evolution</strong>. This work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      { question: "When did Mondrian paint this?", answer: "This is an <strong>early work</strong> from <a href=\"/artist/piet-mondrian\"><strong>Mondrian's</strong></a> figurative period, before his abstract paintings." },
      { question: "Where is this painting?", answer: "Calves in a Field is in a <strong>private collection</strong> and not publicly displayed." }
    ]
  },
  {
    slug: 'arnold-bocklin-campagna-landscape',
    description: `<p><a href="/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted this view of the Roman Campagna, the plains surrounding the Eternal City. The <strong>ancient landscape</strong> evokes centuries of history beneath moody skies. Böcklin found inspiration in Italy's atmosphere and mythology.</p>
<p>The Swiss-German painter created <strong>dreamlike imagery</strong> that influenced Symbolism and Surrealism. This work hangs at the <a href="/museum/alte-nationalgalerie-berlin-germany"><strong>Alte Nationalgalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "What is the Campagna?", answer: "The <strong>Roman Campagna</strong> is the countryside surrounding Rome, painted by many artists including <a href=\"/artist/arnold-bocklin\"><strong>Böcklin</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> in Berlin holds this landscape." }
    ]
  },
  {
    slug: 'francesco-guardi-campo-santi-giovanni-e-paolo',
    description: `<p><a href="/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> painted this view of Campo Santi Giovanni e Paolo, one of Venice's largest squares. The <strong>Dominican church and Scuola Grande</strong> rise above the campo while Venetian life unfolds below. Guardi's quick brushwork captures light and atmosphere.</p>
<p>The artist documented his city with <strong>lyrical sensitivity</strong>. This view is held at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      { question: "What is Campo Santi Giovanni e Paolo?", answer: "A major <strong>Venetian square</strong> with the Basilica dei Santi Giovanni e Paolo, painted by <a href=\"/artist/francesco-guardi\"><strong>Guardi</strong></a>." },
      { question: "Where is this painting?", answer: "The <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris displays this <strong>Venetian veduta</strong>." }
    ]
  },
  {
    slug: 'van-gogh-canal',
    description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this view of a canal during his time in the Netherlands. <strong>Water reflects the sky</strong> while boats and buildings line the banks. The work shows van Gogh's early style before his colorful French period.</p>
<p>This painting was once at the Isabella Stewart Gardner Museum in Boston until its <strong>theft in 1990</strong>. Its whereabouts remain unknown.</p>`,
    faqs: [
      { question: "Where is this painting now?", answer: "This work was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum in Boston and has never been recovered." },
      { question: "Who painted Canal?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> during his <strong>Dutch period</strong>, before moving to France." }
    ]
  },
  {
    slug: 'giotto-canonization-of-st-francis',
    description: `<p><a href="/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this scene of Saint Francis being formally canonized by Pope Gregory IX. The <strong>solemn ceremony</strong> shows clergy and faithful gathered as Francis receives official recognition. Giotto's frescoes brought new life to religious storytelling.</p>
<p>This work is part of the Francis cycle in the Upper Church at <a href="/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis of Assisi</strong></a>. The frescoes revolutionized <strong>Italian painting</strong>.</p>`,
    faqs: [
      { question: "Where can I see this fresco?", answer: "The <a href=\"/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy displays this in the <strong>Upper Church</strong>." },
      { question: "Who was Giotto?", answer: "<a href=\"/artist/giotto\"><strong>Giotto di Bondone</strong></a> was a 14th-century Florentine painter who <strong>revolutionized Italian art</strong>." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks...`);

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
      console.log(`✓ ${update.slug}`);
    } catch (error) {
      console.error(`✗ ${update.slug}: ${error.message}`);
    }
  }

  console.log('Done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
